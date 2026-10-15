# Genera los audios de la prueba de voces con Silero (voces neuronales rusas, licencia CC BY-NC 4.0:
# uso no comercial, citando a Silero). Lo corre GitHub Actions (.github/workflows/voces-prueba.yml);
# no hace falta correrlo a mano.
#   Entrada: herramientas/voces/prueba.json   Salida: audio/prueba/<carpeta del modelo>/<voz>/<id>.mp3
# El acento del texto (а́) se pasa a la marca de Silero (+а), así cada palabra suena con el acento
# que tiene en Azbuka. Los audios que ya existen no se vuelven a generar.
import json, os, re, subprocess, sys
import torch

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
datos = json.load(open(os.path.join(RAIZ, "herramientas", "voces", "prueba.json"), encoding="utf-8"))
SALIDA = os.path.join(RAIZ, "audio", "prueba")
VOCALES = "аеёиоуыэюяАЕЁИОУЫЭЮЯ"

def con_acento(t):
    """кни́га → кн+ига (la marca de Silero va antes de la vocal acentuada)."""
    t = re.sub("([%s])\u0301" % VOCALES, r"+\1", t)
    return t.replace("\u0301", "")

items = list(datos["teoria"]) + [l for d in datos["dialogos"] for l in d["lineas"]]
hechos = 0
import wave

def sintetizar(modelo, modelo_id, voz, ru, wav):
    """Genera el WAV a 48 kHz; devuelve False si no se pudo."""
    texto = con_acento(ru)
    for intento in (dict(text=texto, put_accent=True, put_yo=True), dict(text=texto), dict(text=ru.replace("\u0301", ""))):
        try:
            audio = modelo.apply_tts(speaker=voz, sample_rate=48000, **intento); break
        except Exception as e:
            print("  (reintento)", modelo_id, voz, ru, type(e).__name__, e)
    else:
        return False
    pcm = (audio.clamp(-1, 1) * 32767).to(torch.int16).numpy().tobytes()
    with wave.open(wav, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(48000); w.writeframes(pcm)
    return True

# Formatos de la prueba a ciegas (15/10/2026): mismo WAV, distinto formato y calidad
FORMATOS = {
    "mp3-96": (".mp3", ["-c:a", "libmp3lame", "-b:a", "96k"]),
    "mp3-64": (".mp3", ["-c:a", "libmp3lame", "-b:a", "64k"]),
    "aac-64": (".m4a", ["-c:a", "aac", "-b:a", "64k", "-movflags", "+faststart"]),
    "aac-48": (".m4a", ["-c:a", "aac", "-b:a", "48k", "-movflags", "+faststart"]),
}
def codificar(wav, destino, opciones):
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-ac", "1", "-ar", "24000"] + opciones + [destino], check=True)

# 15/10/2026: se generan los dos modelos para compararlos (v4 en audio/prueba/<voz>/, v5.5 en audio/prueba/v5_5_ru/<voz>/)
for modelo_id, carpeta in datos["modelos"]:
  try:
    modelo, _ = torch.hub.load(repo_or_dir="snakers4/silero-models", model="silero_tts", language="ru", speaker=modelo_id, trust_repo=True)
    modelo.to(torch.device("cpu"))
  except Exception as e:
    print("✗ No se pudo cargar", modelo_id, e); continue
  for it in items:
    for voz in it["voces"]:
        destino = os.path.join(SALIDA, carpeta, voz, it["id"] + ".mp3")
        if os.path.exists(destino):
            continue
        os.makedirs(os.path.dirname(destino), exist_ok=True)
        wav = destino[:-4] + ".wav"
        if not sintetizar(modelo, modelo_id, voz, it["ru"], wav):
            print("✗", modelo_id, voz, it["id"]); continue
        # MP3 mono 24 kHz a 96 kbps (15/10/2026: a 48 kbps sonaba «bajo el agua»): ~12 KB por segundo
        codificar(wav, destino, FORMATOS["mp3-96"][1])
        os.remove(wav)
        hechos += 1
        print("✓", modelo_id, voz, it["id"])
  # Prueba de formatos: solo con el modelo elegido (v5_5_ru) → audio/prueba/formatos/<formato>/<id>.<ext>
  if modelo_id == "v5_5_ru":
    for it in datos.get("formatos", []):
        wav = os.path.join(SALIDA, "formatos", it["id"] + ".wav")
        os.makedirs(os.path.dirname(wav), exist_ok=True)
        if not sintetizar(modelo, modelo_id, it["voz"], it["ru"], wav):
            print("✗ formatos", it["id"]); continue
        for fmt, (ext, opciones) in FORMATOS.items():
            codificar(wav, os.path.join(SALIDA, "formatos", fmt, it["id"] + ext), opciones)
        os.remove(wav)
        hechos += 1
        print("✓ formatos", it["id"])
print("Audios nuevos:", hechos)
