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
        texto = con_acento(it["ru"])
        audio = None
        for intento in (dict(text=texto, put_accent=True, put_yo=True), dict(text=texto), dict(text=it["ru"].replace("\u0301", ""))):
            try:
                audio = modelo.apply_tts(speaker=voz, sample_rate=48000, **intento); break
            except Exception as e:
                print("  (reintento)", modelo_id, voz, it["id"], type(e).__name__, e)
        if audio is None:
            print("✗", modelo_id, voz, it["id"]); continue
        wav = destino[:-4] + ".wav"
        import wave
        pcm = (audio.clamp(-1, 1) * 32767).to(torch.int16).numpy().tobytes()
        with wave.open(wav, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(48000); w.writeframes(pcm)
        # MP3 mono 24 kHz a 96 kbps (15/10/2026: a 48 kbps sonaba «bajo el agua»): ~12 KB por segundo
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-ac", "1", "-ar", "24000", "-c:a", "libmp3lame", "-b:a", "96k", destino], check=True)
        os.remove(wav)
        hechos += 1
        print("✓", modelo_id, voz, it["id"], texto)
print("Audios nuevos:", hechos)
