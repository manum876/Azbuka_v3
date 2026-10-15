# Genera las voces de AZBUKA con Silero (v5_5_ru; licencia CC BY-NC 4.0: uso no comercial,
# citando a Silero). Lo corre GitHub Actions en el repo Azbuka_voces (.github/workflows/voces.yml);
# no hace falta correrlo a mano.
#
#   python generar-voces.py audios <lista.json> <carpeta v1> <salida> <parte> <de>
#       Hace los audios que faltan de la parte <parte> (de 0 a <de>-1) y los deja en <salida>/<voz>/<clave>.m4a
#   python generar-voces.py indice <lista.json> <carpeta v1>
#       Borra los audios que ya no están en la lista y escribe v1/indice.json y v1/paginas/<página>.json
#
# Formato (decidido por Manu, 15/10/2026): AAC 48 kbps, mono, 24 kHz.
# El acento del texto (а́) se pasa a la marca de Silero (+а), así cada palabra suena con el acento que tiene en Azbuka.
import json, os, re, subprocess, sys, time, wave

EXT = ".m4a"
VOCALES = "аеёиоуыэюяАЕЁИОУЫЭЮЯ"

def para_silero(t):
    """кни́га → кн+ига; signos que Silero no lee, fuera."""
    t = re.sub("([%s])́" % VOCALES, r"+\1", t).replace("́", "")
    t = re.sub(r"[«»\"„“”]", "", t)
    t = re.sub(r"\s*[→—–/]\s*", ", ", t)
    return re.sub(r"\s+", " ", t).strip(" ,")

def trozos(t, largo=180):
    """Los textos largos, por oraciones (Silero corta los muy largos)."""
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

def audios(lista, v1, salida, parte, de):
    import torch
    torch.set_num_threads(max(1, os.cpu_count() or 1))
    modelo, _ = torch.hub.load(repo_or_dir="snakers4/silero-models", model="silero_tts", language="ru", speaker="v5_5_ru", trust_repo=True)
    modelo.to(torch.device("cpu"))
    textos = [x for i, x in enumerate(lista["textos"]) if i % de == parte]
    hechos = fallas = 0
    inicio = time.time()
    for x in textos:
        if os.path.exists(os.path.join(v1, x["v"], x["k"] + EXT)):
            continue
        destino = os.path.join(salida, x["v"], x["k"] + EXT)
        if os.path.exists(destino):
            continue
        os.makedirs(os.path.dirname(destino), exist_ok=True)
        pedazos = []
        for tr in trozos(para_silero(x["t"])):
            audio = None
            for intento in (dict(text=tr, put_accent=True, put_yo=True), dict(text=tr), dict(text=tr.replace("+", ""))):
                try:
                    audio = modelo.apply_tts(speaker=x["v"], sample_rate=48000, **intento); break
                except Exception as e:
                    pass
            if audio is None:
                pedazos = None; break
            pedazos.append(audio)
            pedazos.append(torch.zeros(int(48000 * 0.25)))
        if not pedazos:
            fallas += 1; print("✗", x["v"], x["t"]); continue
        audio = torch.cat(pedazos[:-1])
        wav = destino[:-len(EXT)] + ".wav"
        pcm = (audio.clamp(-1, 1) * 32767).to(torch.int16).numpy().tobytes()
        with wave.open(wav, "wb") as w:
            w.setnchannels(1); w.setsampwidth(2); w.setframerate(48000); w.writeframes(pcm)
        subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", wav, "-ac", "1", "-ar", "24000",
                        "-c:a", "aac", "-b:a", "48k", "-movflags", "+faststart", destino], check=True)
        os.remove(wav)
        hechos += 1
        if hechos % 200 == 0:
            print("…", hechos, "audios en", int(time.time() - inicio), "s")
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
