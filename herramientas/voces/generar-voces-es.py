# Genera las voces de ABECÉ (03/11/2026). Es el espejo de generar-voces.py (Azbuka).
# Lo corre GitHub Actions en el repo Abece_voces (.github/workflows/voces.yml); no hace falta
# correrlo a mano.
#
#   python generar-voces-es.py audios <lista.json> <carpeta v1> <salida> <parte> <de>
#       Hace los audios que faltan de la parte <parte> (de 0 a <de>-1) y los deja en <salida>/<voz>/<clave>.m4a
#   python generar-voces-es.py indice <lista.json> <carpeta v1>
#       Borra los audios que ya no están en la lista y escribe v1/indice.json y v1/paginas/<página>.json
#
# Formato: el mismo que Azbuka (decidido por Manu, 15/10/2026; repetido para Abecé el 03/11/2026):
# AAC 48 kbps, mono, 24 kHz, .m4a con faststart.
#
# Elenco (Manu, 03/11/2026, tras la prueba de palabras: Piper pronunciaba mal las palabras sueltas,
# Silero bien; las claves son las de AZ_VOCES_ES_PERSONAJE en js/core.js y las carpetas de los audios):
#   es2   → Silero v3_es es_2: la narración (todo lo que no es un personaje) y Pablo
#   es1   → Silero v3_es es_1: Javier
#   es0   → Silero v3_es es_0: los hombres secundarios (recepcionista…)
#   ana   → Piper es_ES sharvard, voz 1 (mujer), tono más agudo ×1,08: las líneas de Ana
#   lucia → Piper sharvard, voz 1, tono más grave ×0,93: las líneas de Lucía
#   mujer → Piper sharvard, voz 1 en su tono: las mujeres secundarias (Marta…)
# Silero no tiene voces de mujer: por eso las mujeres siguen con Piper, solo en sus líneas de diálogo.
# El tono se cambia con ffmpeg sin cambiar la velocidad, como en la prueba de voces.
# Licencias: Piper sharvard, CC BY 3.0 (corpus Sharvard); Silero, CC BY-NC 4.0 (uso no comercial).
import json, os, re, subprocess, sys, time, urllib.request, wave

EXT = ".m4a"
PIPER_URL = "https://huggingface.co/rhasspy/piper-voices/resolve/main/es/es_ES/sharvard/medium/es_ES-sharvard-medium"
PIPER_MODELO = "es_ES-sharvard-medium.onnx"
VOCES = {
    "es2":   ("silero", "es_2", 1.0),
    "es1":   ("silero", "es_1", 1.0),
    "es0":   ("silero", "es_0", 1.0),
    "ana":   ("piper", 1, 1.08),
    "lucia": ("piper", 1, 0.93),
    "mujer": ("piper", 1, 1.0),
}

ORD_M = ["", "primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo"]
ORD_F = ["", "primera", "segunda", "tercera", "cuarta", "quinta", "sexta", "séptima", "octava", "novena", "décima"]

def preparar(t, silero=False):
    """Lo que se ve → lo que se lee: «tercero (3.º)» → «tercero», «3.º 2.ª» → «tercero segunda»."""
    t = re.sub(r"\s*\(\s*\d+\.\s*[ºª]\s*\)", "", t)                       # el ordinal entre paréntesis ya está dicho
    t = re.sub(r"(?<=[a-záéíóú])\s*[—–]\s*\d+\.\s*[ºª]", "", t)                # «quinto — 5.º»: también
    t = re.sub(r"\b(10|[1-9])\.\s*º", lambda m: ORD_M[int(m.group(1))], t)
    t = re.sub(r"\b(10|[1-9])\.\s*ª", lambda m: ORD_F[int(m.group(1))], t)
    t = re.sub(r"[«»\"„“”()]", "", t)
    t = re.sub(r"\s*[→—–/·]\s*", ", ", t)
    if silero:
        t = re.sub(r"[¿¡]", "", t)                                         # Silero no los lee (prueba de voces)
        t = re.sub(r"\d+", numero, t)                                    # ni los números: 60 → sesenta
    return re.sub(r"\s+", " ", t).strip(" ,")

def numero(m):
    try:
        from num2words import num2words
        return num2words(int(m.group(0)), lang="es")
    except Exception:
        return m.group(0)

def trozos(t, largo=220):
    """Los textos largos, por oraciones."""
    if len(t) <= largo:
        return [t]
    partes, actual = [], ""
    for o in re.split(r"(?<=[.!?…])\s+", t):
        if actual and len(actual) + len(o) + 1 > largo:
            partes.append(actual); actual = o
        else:
            actual = (actual + " " + o).strip()
    if actual:
        partes.append(actual)
    return partes

def bajar(url, destino):
    for vez in range(5):
        try:
            urllib.request.urlretrieve(url, destino); return
        except Exception as e:
            print("  (no se pudo bajar", os.path.basename(destino), "· reintento)", e)
            time.sleep(20 * (vez + 1))
    raise SystemExit("✗ No se pudo bajar " + url)

class Motores:
    """Piper y Silero se cargan solo si la parte los necesita."""
    def __init__(self):
        self.piper = None; self.silero = None
    def con_piper(self):
        if self.piper is None:
            from piper.voice import PiperVoice
            if not os.path.exists(PIPER_MODELO):
                bajar(PIPER_URL + ".onnx", PIPER_MODELO)
                bajar(PIPER_URL + ".onnx.json", PIPER_MODELO + ".json")
            self.piper = PiperVoice.load(PIPER_MODELO)
        return self.piper
    def con_silero(self):
        if self.silero is None:
            import torch
            torch.set_num_threads(max(1, os.cpu_count() or 1))
            for vez in range(5):
                try:
                    self.silero, _ = torch.hub.load(repo_or_dir="snakers4/silero-models", model="silero_tts", language="es", speaker="v3_es", trust_repo=True, skip_validation=True)
                    break
                except Exception as e:
                    print("  (no se pudo bajar Silero, reintento)", type(e).__name__, e)
                    time.sleep(30 * (vez + 1))
            else:
                raise SystemExit("✗ No se pudo bajar el modelo de Silero")
        return self.silero

def wav_piper(m, hablante, texto, ruta):
    """Un WAV con todos los trozos, con un cuarto de segundo entre uno y otro."""
    voz = m.con_piper()
    sr = voz.config.sample_rate
    with wave.open(ruta, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr)
        for i, tr in enumerate(trozos(preparar(texto))):
            if i:
                w.writeframes(b"\x00\x00" * int(sr * 0.25))
            for b in voz.synthesize_stream_raw(tr, speaker_id=hablante):
                w.writeframes(b)
    return sr

def wav_silero(m, hablante, texto, ruta):
    import torch
    modelo = m.con_silero()
    pedazos = []
    for tr in trozos(preparar(texto, silero=True)):
        pedazos.append(modelo.apply_tts(text=tr, speaker=hablante, sample_rate=48000))
        pedazos.append(torch.zeros(int(48000 * 0.25)))
    audio = torch.cat(pedazos[:-1])
    pcm = (audio.clamp(-1, 1) * 32767).to(torch.int16).numpy().tobytes()
    with wave.open(ruta, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(48000); w.writeframes(pcm)
    return 48000

def m4a(wav, sr, tono, destino):
    """AAC 48 kbps, mono, 24 kHz (como Azbuka). El tono cambia sin cambiar la velocidad."""
    filtro = ["-af", f"asetrate={sr}*{tono},aresample=24000,atempo={1 / tono:.4f}"] if tono != 1.0 else []
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav] + filtro +
                   ["-ac", "1", "-ar", "24000", "-c:a", "aac", "-b:a", "48k", "-movflags", "+faststart", destino], check=True)

def audios(lista, v1, salida, parte, de):
    # lo que ya está publicado se lee del índice (así cada parte no baja el repo entero)
    hay = set()
    try:
        ind = json.load(open(os.path.join(v1, "indice.json"), encoding="utf-8"))
        hay = {(v, k) for v, ks in ind.get("voces", {}).items() for k in ks.split()}
    except Exception:
        pass
    pendientes = [x for x in lista["textos"] if (x["v"], x["k"]) not in hay]
    textos = [x for i, x in enumerate(pendientes) if i % de == parte]
    print("Faltan", len(pendientes), "audios; esta parte hace", len(textos))
    m = Motores()
    hechos = fallas = 0
    inicio = time.time()
    for x in textos:
        destino = ""
        # un texto que falla se salta y se anota; nunca corta la parte entera
        try:
            if x["v"] not in VOCES:
                fallas += 1; print("✗ voz desconocida:", x["v"], x["t"]); continue
            destino = os.path.join(salida, x["v"], x["k"] + EXT)
            if os.path.exists(destino) or os.path.exists(os.path.join(v1, x["v"], x["k"] + EXT)):
                continue
            os.makedirs(os.path.dirname(destino), exist_ok=True)
            motor, hablante, tono = VOCES[x["v"]]
            wav = destino[:-len(EXT)] + ".wav"
            sr = (wav_piper if motor == "piper" else wav_silero)(m, hablante, x["t"], wav)
            with wave.open(wav, "rb") as w:
                if w.getnframes() < sr * 0.1:
                    raise ValueError("audio vacío")
            m4a(wav, sr, tono, destino)
            os.remove(wav)
            hechos += 1
            if hechos % 500 == 0:
                print("…", hechos, "audios en", int(time.time() - inicio), "s")
        except Exception as e:
            fallas += 1; print("✗", x["v"], x["t"], "·", type(e).__name__, e)
            for f in (destino, destino[:-len(EXT)] + ".wav") if destino else ():
                try: os.remove(f)
                except Exception: pass
    print("Parte", parte, "de", de, "· audios nuevos:", hechos, "· no se pudieron:", fallas)

def indice(lista, v1):
    validos = {(x["v"], x["k"]) for x in lista["textos"]}
    voces, borrados = {}, 0
    for voz in sorted(os.listdir(v1)):
        carpeta = os.path.join(v1, voz)
        if not os.path.isdir(carpeta) or voz == "paginas":
            continue
        for f in sorted(os.listdir(carpeta)):
            k = f[:-len(EXT)]
            if not f.endswith(EXT) or (voz, k) not in validos:
                os.remove(os.path.join(carpeta, f)); borrados += 1; continue
            voces.setdefault(voz, []).append(k)
    hay = {(v, k) for v, ks in voces.items() for k in ks}
    paginas = {}
    for x in lista["textos"]:
        if (x["v"], x["k"]) in hay:
            for p in x["p"]:
                paginas.setdefault(p, []).append(x["v"] + "/" + x["k"])
    os.makedirs(os.path.join(v1, "paginas"), exist_ok=True)
    for f in os.listdir(os.path.join(v1, "paginas")):
        os.remove(os.path.join(v1, "paginas", f))
    for p, l in paginas.items():
        json.dump(l, open(os.path.join(v1, "paginas", p + ".json"), "w", encoding="utf-8"), separators=(",", ":"))
    json.dump({"v": 1, "ext": EXT, "voces": {v: " ".join(ks) for v, ks in voces.items()}},
              open(os.path.join(v1, "indice.json"), "w", encoding="utf-8"), separators=(",", ":"))
    total = sum(len(ks) for ks in voces.values())
    print("Índice:", total, "audios de", len(validos), "·", {v: len(ks) for v, ks in voces.items()}, "· borrados:", borrados)

if __name__ == "__main__":
    modo, lista = sys.argv[1], json.load(open(sys.argv[2], encoding="utf-8"))
    if modo == "audios":
        audios(lista, sys.argv[3], sys.argv[4], int(sys.argv[5]), int(sys.argv[6]))
    else:
        indice(lista, sys.argv[3])
