#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Abecé — formas de las palabras que cambian: genera data/data-formas-es.js.

Uso (desde la raíz del repo, con Node instalado):
    python3 herramientas/abece/formas-es.py
Lee data/data-lexicon-es.js y escribe data/data-formas-es.js (FORMAS_ES).
Si está herramientas/fuentes/diccionario_frecuencias_corpes_alfa.zip, cruza
las formas con el CORPES (RAE) y muestra las diferencias: la segunda fuente.

Qué genera, por ID del léxico:
  - sustantivos: plural (con la tilde recalculada: canción → canciones,
    examen → exámenes), artículo (el agua / las aguas), femenino si lo tiene;
  - adjetivos: m, f, m. pl., f. pl. y apócope (buen, gran, primer);
  - determinantes, numerales, artículos y pronombres: sus series cerradas.
Las excepciones están en las tablas de abajo, cada una comprobada con el CORPES.
"""
import importlib.util, json, os, re, subprocess, sys, zipfile, collections

AQUI = os.path.dirname(os.path.abspath(__file__))
RAIZ = os.path.abspath(os.path.join(AQUI, "..", ".."))

# El motor de la tilde es el mismo del conjugador (un solo lugar para las reglas).
_spec = importlib.util.spec_from_file_location("conjugador_es", os.path.join(AQUI, "conjugador-es.py"))
_cj = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(_cj)
nucleos, tonica, escribir, SIN = _cj.nucleos, _cj.tonica, _cj.escribir, _cj.SIN


def sin_tilde(w):
    return "".join(SIN.get(c, c) for c in w)


def con_terminacion(w, term):
    """Agrega una terminación manteniendo la sílaba tónica."""
    return escribir(w + term, tonica(w))


# ======================================================== sustantivos
# Plurales que no salen por regla (CORPES y Ortografía de la RAE).
PLURAL_EXCEP = {
    # cambian de sílaba tónica
    "carácter": "caracteres", "régimen": "regímenes", "espécimen": "especímenes",
    # extranjerismos: -s o -es según el uso fijado
    "club": "clubes", "sándwich": "sándwiches", "álbum": "álbumes", "menú": "menús",
    "fan": "fans", "récord": "récords", "tour": "tours", "souvenir": "souvenirs",
    "whisky": "whiskies", "alien": "aliens", "test": "tests", "blues": "blues",
    # en -y tras vocal que hacen -is
    "jersey": "jerséis", "espray": "espráis",
}
# Solo se usan en plural aunque el léxico no lo marque (la palabra ya es el plural).
SOLO_PLURAL = {"modales", "afueras", "cosquillas", "gases"}
# El género cambia el sentido: «el orden» ≠ «la orden».
GENERO_SENTIDO = {"orden", "corte", "capital", "coma", "cura", "papa", "final", "frente", "cometa"}


def plural(w):
    if w in PLURAL_EXCEP:
        return PLURAL_EXCEP[w]
    lw = w.lower()
    n = len(nucleos(w))
    aguda = tonica(w) == n - 1
    u = lw[-1]
    if u in "aeiouáéó":
        return w + "s"
    if u == "ú":
        return w + "s"                 # menús, champús
    if u == "í":
        return w + "es"                # rubíes, jabalíes (también -s)
    if u in "sx":
        if n == 1 or aguda:
            return con_terminacion(w, "es")
        return w                       # la crisis / las crisis
    if u == "z":
        return con_terminacion(w[:-1] + "c", "es")
    if u == "y":
        return w + "es" if len(lw) > 1 and lw[-2] in "aeiou" else w + "s"
    if u in "lnrdj":
        return con_terminacion(w, "es")
    return w + "s"                     # robot → robots


def el_ante_a(w):
    """Femenino que empieza por a / ha tónica: el agua, el hambre, un arma."""
    lw = w.lower()
    sin_h = lw[1:] if lw.startswith("h") else lw
    return sin_h[:1] in ("a", "á") and tonica(w) == 0 and len(nucleos(w)) >= 1


# ======================================================== adjetivos
COMP_INV = {"mejor", "peor", "mayor", "menor", "superior", "inferior", "exterior", "interior",
            "anterior", "posterior", "ulterior"}
FEM_EXCEP = {"marrón": "marrón", "cortés": "cortés", "descortés": "descortés", "español": "española"}
APOCOPE = {"bueno": "buen", "malo": "mal", "grande": "gran", "santo": "san",
           "primero": "primer", "tercero": "tercer", "postrero": "postrer",
           "alguno": "algún", "ninguno": "ningún", "uno": "un", "veintiuno": "veintiún",
           "cualquiera": "cualquier"}
# Apócope que vale también delante del femenino (gran casa, cualquier mujer).
APOCOPE_AMBOS = {"grande", "cualquiera"}
# Plurales de adjetivos que no salen por regla: primero el de uso (Manu, 27/10/2026);
# el que recomienda la RAE va en «var».
ADJ_PL_EXCEP = {"gay": ("gays", "gais"), "guay": ("guays", "guais"), "sexy": ("sexies", "sexis"),
                "súper": ("súper", None)}


def femenino(w):
    lw = w.lower()
    if lw in FEM_EXCEP:
        return FEM_EXCEP[lw]
    if lw.endswith("o"):
        return w[:-1] + "a"
    if lw.endswith("or") and lw not in COMP_INV:
        return w + "a"
    if lw[-2:] in ("ón", "án", "ín", "és"):
        return sin_tilde(w) + "a"      # alemán → alemana, francés → francesa
    return w                           # feliz, verde, azul, mejor: igual


# ======================================================== series cerradas
# Pronombres personales: persona → sujeto, OD, OI, tras preposición, con «con», reflexivo.
COLS_PERS = [
    ["suj", "подлежащее"],
    ["od", "прямое дополнение (≈ вин. п.)"],
    ["oi", "косвенное дополнение (≈ дат. п.)"],
    ["prep", "после предлога"],
    ["con", "с «con»"],
    ["refl", "возвратное"],
]
PERSONAL = [
    ["1s", "1 л. ед. ч.", "yo", "me", "me", "mí", "conmigo", "me"],
    ["2s", "2 л. ед. ч.", "tú", "te", "te", "ti", "contigo", "te"],
    ["3sm", "3 л. ед. ч., м. р.", "él", "lo", "le · se", "él", "con él", "se · sí · consigo"],
    ["3sf", "3 л. ед. ч., ж. р.", "ella", "la", "le · se", "ella", "con ella", "se · sí · consigo"],
    ["us", "вежливое «вы» (одному)", "usted", "lo · la", "le · se", "usted", "con usted", "se · sí · consigo"],
    ["1p", "1 л. мн. ч.", "nosotros · nosotras", "nos", "nos", "nosotros · nosotras", "con nosotros · con nosotras", "nos"],
    ["2p", "2 л. мн. ч.", "vosotros · vosotras", "os", "os", "vosotros · vosotras", "con vosotros · con vosotras", "os"],
    ["3pm", "3 л. мн. ч., м. р.", "ellos", "los", "les · se", "ellos", "con ellos", "se · sí · consigo"],
    ["3pf", "3 л. мн. ч., ж. р.", "ellas", "las", "les · se", "ellas", "con ellas", "se · sí · consigo"],
    ["uds", "вежливое «вы» (многим)", "ustedes", "los · las", "les · se", "ustedes", "con ustedes", "se · sí · consigo"],
]
NOTA_PERS = ("«se» вместо «le/les» перед lo, la, los, las: se lo doy. "
             "В Испании допустимо «le» вместо «lo» для человека м. р. (leísmo): le veo = lo veo.")

# Forma → celdas de la serie personal (para la ficha de cada pronombre del léxico).
PRON_CELDAS = {
    "yo": [["1s", "suj"]], "tú": [["2s", "suj"]], "él": [["3sm", "suj"], ["3sm", "prep"]],
    "ella": [["3sf", "suj"], ["3sf", "prep"]], "usted": [["us", "suj"], ["us", "prep"]],
    "nosotros": [["1p", "suj"], ["1p", "prep"]], "nosotras": [["1p", "suj"], ["1p", "prep"]],
    "vosotros": [["2p", "suj"], ["2p", "prep"]], "vosotras": [["2p", "suj"], ["2p", "prep"]],
    "ellos": [["3pm", "suj"], ["3pm", "prep"]], "ellas": [["3pf", "suj"], ["3pf", "prep"]],
    "ustedes": [["uds", "suj"], ["uds", "prep"]],
    "me": [["1s", "od"], ["1s", "oi"], ["1s", "refl"]], "te": [["2s", "od"], ["2s", "oi"], ["2s", "refl"]],
    "nos": [["1p", "od"], ["1p", "oi"], ["1p", "refl"]], "os": [["2p", "od"], ["2p", "oi"], ["2p", "refl"]],
    "lo": [["3sm", "od"], ["us", "od"]], "la": [["3sf", "od"], ["us", "od"]],
    "los": [["3pm", "od"], ["uds", "od"]], "las": [["3pf", "od"], ["uds", "od"]],
    "le": [["3sm", "oi"], ["3sf", "oi"], ["us", "oi"]], "les": [["3pm", "oi"], ["3pf", "oi"], ["uds", "oi"]],
    "se": [["3sm", "refl"], ["3sm", "oi"], ["3pm", "refl"], ["3pm", "oi"]],
    "sí": [["3sm", "refl"]], "consigo": [["3sm", "refl"]],
    "mí": [["1s", "prep"]], "ti": [["2s", "prep"]], "conmigo": [["1s", "con"]], "contigo": [["2s", "con"]],
}

# Series de 4 formas (m, f, m. pl., f. pl.) y la neutra cuando existe.
COLS_4 = [["m", "м. р. ед. ч."], ["f", "ж. р. ед. ч."], ["mpl", "м. р. мн. ч."], ["fpl", "ж. р. мн. ч."]]
ARTICULO = [
    ["def", "определённый", "el", "la", "los", "las", "lo"],
    ["indef", "неопределённый", "un", "una", "unos", "unas", None],
]
DEMOSTRATIVO = [
    ["este", "этот (рядом со мной)", "este", "esta", "estos", "estas", "esto"],
    ["ese", "этот, тот (рядом с тобой)", "ese", "esa", "esos", "esas", "eso"],
    ["aquel", "тот (далеко)", "aquel", "aquella", "aquellos", "aquellas", "aquello"],
]
POSESIVO = [  # átono (delante del sustantivo) · tónico (detrás o solo)
    ["1s", "мой", ["mi", "mi", "mis", "mis"], ["mío", "mía", "míos", "mías"]],
    ["2s", "твой", ["tu", "tu", "tus", "tus"], ["tuyo", "tuya", "tuyos", "tuyas"]],
    ["3s", "его, её, ваш (usted)", ["su", "su", "sus", "sus"], ["suyo", "suya", "suyos", "suyas"]],
    ["1p", "наш", ["nuestro", "nuestra", "nuestros", "nuestras"], ["nuestro", "nuestra", "nuestros", "nuestras"]],
    ["2p", "ваш (vosotros)", ["vuestro", "vuestra", "vuestros", "vuestras"], ["vuestro", "vuestra", "vuestros", "vuestras"]],
    ["3p", "их, ваш (ustedes)", ["su", "su", "sus", "sus"], ["suyo", "suya", "suyos", "suyas"]],
]
CONTRACCION = {"del": ["de", "el"], "al": ["a", "el"]}

# Determinantes, pronombres y numerales que cambian (fuera de las series).
CUATRO = {  # m, f, mpl, fpl (None = no existe)
    "todo": ("todo", "toda", "todos", "todas"), "mucho": ("mucho", "mucha", "muchos", "muchas"),
    "otro": ("otro", "otra", "otros", "otras"), "alguno": ("alguno", "alguna", "algunos", "algunas"),
    "mismo": ("mismo", "misma", "mismos", "mismas"), "poco": ("poco", "poca", "pocos", "pocas"),
    "ninguno": ("ninguno", "ninguna", "ningunos", "ningunas"), "tanto": ("tanto", "tanta", "tantos", "tantas"),
    "demasiado": ("demasiado", "demasiada", "demasiados", "demasiadas"),
    "tal": ("tal", "tal", "tales", "tales"), "cualquiera": ("cualquiera", "cualquiera", "cualesquiera", "cualesquiera"),
    "ambos": (None, None, "ambos", "ambas"), "varios": (None, None, "varios", "varias"),
    "cuánto": ("cuánto", "cuánta", "cuántos", "cuántas"), "cuyo": ("cuyo", "cuya", "cuyos", "cuyas"),
    "quién": ("quién", "quién", "quiénes", "quiénes"), "quien": ("quien", "quien", "quienes", "quienes"),
    "cuál": ("cuál", "cuál", "cuáles", "cuáles"), "cual": ("cual", "cual", "cuales", "cuales"),
    "quienquiera": ("quienquiera", "quienquiera", "quienesquiera", "quienesquiera"),
    "medio": ("medio", "media", "medios", "medias"),
}
NUM_NOTA = {
    "cien": "«cien» перед существительным и перед mil/millones; «ciento» — в составных числах: ciento uno, ciento veinte.",
    "mil": "Как числительное не меняется: dos mil. «miles» — существительное: miles de personas.",
}


# ======================================================== léxico
def leer_lexico():
    js = r"""
const vm=require("vm"),fs=require("fs");const ctx={};ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync(process.argv[1],"utf8").replace(/^const /gm,"var "),ctx);
console.log(JSON.stringify(ctx.LEXICON_ES.map(e=>({id:e.id,es:e.es,pos:e.posNormalized,g:e.gender||"",
 nc:e.numberClass||"",propio:!!e.propio,fem:(e.femenino&&e.femenino.es)||""}))));
"""
    r = subprocess.run(["node", "-e", js, os.path.join(RAIZ, "data", "data-lexicon-es.js")],
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)


def articulo(g, w):
    if g == "f":
        return ["el" if el_ante_a(w) else "la", "las"]
    if g == "m":
        return ["el", "los"]
    return ["el · la", "los · las"]


def ficha_sust(e):
    w, g, nc = e["es"], e["g"], e["nc"]
    d = {"t": "sust", "g": g}
    if nc == "pluraliaTantum" or w in SOLO_PLURAL:
        d.update(sg=None, pl=w, art=[None, "las" if g == "f" else "los"], soloPl=True)
        return d
    d["sg"] = w
    d["pl"] = None if nc == "singulariaTantum" else plural(w)
    if g == "m/f" and e["fem"]:
        d["art"] = ["el", "los"]
        d["f"] = e["fem"]
        d["fpl"] = None if d["pl"] is None else plural(e["fem"])
        d["artF"] = ["el" if el_ante_a(e["fem"]) else "la", "las"]
    else:
        d["art"] = articulo(g, w)
        if g == "f" and d["art"][0] == "el":
            d["elA"] = True
    if g == "m/f" and w in GENERO_SENTIDO:
        d["sentido"] = True
    if d["pl"] == w:
        d["inv"] = True
    return d


def ficha_adj(e):
    w = e["es"]
    f = femenino(w)
    if w in ADJ_PL_EXCEP:
        mpl, var = ADJ_PL_EXCEP[w]
        d = {"t": "adj", "m": w, "f": w, "mpl": mpl, "fpl": mpl}
        if var:
            d["var"] = var
    else:
        d = {"t": "adj", "m": w, "f": f, "mpl": plural(w), "fpl": plural(f)}
    if d["f"] == w:
        d["invG"] = True
    if w in APOCOPE:
        d["apoc"] = APOCOPE[w]
        if w in APOCOPE_AMBOS:
            d["apocF"] = True
    return d


def armar(lex):
    out = {}
    por_es = collections.defaultdict(list)
    for e in lex:
        por_es[e["es"]].append(e)
    for e in lex:
        if e["propio"]:
            continue
        w, pos, i = e["es"], e["pos"], e["id"]
        if pos == "sustantivo":
            out[i] = ficha_sust(e)
        elif pos == "adjetivo":
            out[i] = ficha_adj(e)
        elif pos == "artículo":
            fila = "def" if w == "el" else "indef"
            out[i] = {"t": "art", "serie": "articulo", "fila": fila}
        elif pos == "contracción":
            out[i] = {"t": "contr", "de": CONTRACCION[w]}
        elif pos in ("pronombre", "determinante"):
            tp = "pron" if pos == "pronombre" else "det"
            dem = next((r for r in DEMOSTRATIVO if w in r[2:]), None)
            pos_fila = next((r for r in POSESIVO if w in r[2] or w in r[3]), None)
            if w in PRON_CELDAS:
                out[i] = {"t": "pron", "serie": "personal", "celdas": PRON_CELDAS[w]}
            elif dem:
                out[i] = {"t": tp, "serie": "demostrativo", "fila": dem[0]}
                if w == dem[6]:
                    out[i]["neutro"] = True
            elif pos_fila:
                out[i] = {"t": tp, "serie": "posesivo", "fila": pos_fila[0],
                          "tipo": "atono" if w in pos_fila[2] else "tonico"}
            elif w in CUATRO:
                m, f, mpl, fpl = CUATRO[w]
                d = {"t": tp, "m": m, "f": f, "mpl": mpl, "fpl": fpl}
                if m and m == f:
                    d["invG"] = True
                if m is None:
                    d["soloPl"] = True
                if w in APOCOPE:
                    d["apoc"] = APOCOPE[w]
                    if w in APOCOPE_AMBOS:
                        d["apocF"] = True
                out[i] = d
            else:
                out[i] = {"t": tp, "inv": True}
        elif pos == "numeral":
            if w in CUATRO:
                m, f, mpl, fpl = CUATRO[w]
                out[i] = {"t": "num", "m": m, "f": f, "mpl": mpl, "fpl": fpl}
            elif w in ("uno", "veintiuno"):
                out[i] = {"t": "num", "m": w, "f": w[:-1] + "a", "apoc": APOCOPE[w]}
            elif w.endswith("cientos"):
                out[i] = {"t": "num", "m": w, "f": w[:-2] + "as", "soloPl": True}
            elif w.endswith(("ero", "do", "to", "mo", "vo", "no")) and w not in ("cuatro", "ocho", "cinco", "cero", "nueve"):
                # ordinales: primero, segundo, tercero, cuarto, quinto, sexto, séptimo, octavo, noveno, décimo, vigésimo
                d = {"t": "num", "m": w, "f": w[:-1] + "a", "mpl": w + "s", "fpl": w[:-1] + "as", "ord": True}
                if w in APOCOPE:
                    d["apoc"] = APOCOPE[w]
                out[i] = d
            else:
                out[i] = {"t": "num", "inv": True}
            if w in NUM_NOTA:
                out[i]["nota"] = NUM_NOTA[w]
    return out


# ======================================================== cruce con el CORPES
def cruce_corpes(lex, out):
    zp = os.path.join(RAIZ, "herramientas", "fuentes", "diccionario_frecuencias_corpes_alfa.zip")
    if not os.path.exists(zp):
        print("(sin CORPES: no se cruza)")
        return
    z = zipfile.ZipFile(zp)
    nombre = next(n for n in z.namelist() if n.endswith(".tsv"))
    formas = collections.defaultdict(collections.Counter)  # (lema, cat) -> Counter((forma, etiqueta))
    lema = None
    for linea in z.read(nombre).decode("utf-8").splitlines():
        c = [x.strip() for x in linea.split("\t")]
        if len(c) < 6:
            continue
        if c[2]:
            lema = (c[2], c[4][:1])
        elif lema and c[3]:
            try:
                n = float(c[5].replace(",", "."))
            except ValueError:
                n = 0
            formas[lema][(c[3].lower(), c[4])] += n

    def top(lem, cat, cond, raiz):
        cnt = collections.Counter()
        for (f, t), n in formas.get((lem, cat), {}).items():
            if re.fullmatch(r"[a-záéíóúüñ]+", f) and sin_tilde(f).startswith(raiz) and cond(t):
                cnt[f] += n
        return cnt.most_common(1)[0][0] if cnt else None

    por_id = {e["id"]: e for e in lex}
    difs = []
    for i, d in out.items():
        e = por_id[i]
        w = e["es"]
        raiz = sin_tilde(w.lower())[:max(2, len(w) - 2)]
        if d["t"] == "sust" and d.get("pl") and d.get("sg"):
            g = e["g"] if e["g"] in ("m", "f") else None
            c = top(w, "N", lambda t: t[0] == "N" and len(t) > 2 and t[2] == "p" and (g is None or t[1] in (g, "c")), raiz)
            if c and c != d["pl"] and not (d.get("f") and c == d.get("fpl")):
                difs.append(f"sust  {w}: {d['pl']}  (CORPES {c})")
        if d["t"] == "adj":
            for k, cond in (("f", lambda t: t[:3] in ("Afs",)), ("mpl", lambda t: t[:3] in ("Amp", "Acp")),
                            ("fpl", lambda t: t[:3] in ("Afp", "Acp"))):
                c = top(w, "A", lambda t, cond=cond: t[0] == "A" and len(t) > 2 and cond(t[0] + t[1] + t[2]), raiz)
                if c and c != d[k] and not re.search(r"ísim[oa]s?$", c) and not (w in APOCOPE and c == APOCOPE[w]):
                    difs.append(f"adj   {w} [{k}]: {d[k]}  (CORPES {c})")
    print(f"CORPES: {len(difs)} diferencias")
    for x in difs:
        print("  ", x)


# ======================================================== salida
def js(v):
    return json.dumps(v, ensure_ascii=False, separators=(",", ":"))


def escribir_js(out, salida):
    series = {
        "personal": {"cols": COLS_PERS, "filas": PERSONAL, "nota": NOTA_PERS},
        "articulo": {"cols": COLS_4 + [["n", "средний (lo)"]], "filas": ARTICULO},
        "demostrativo": {"cols": COLS_4 + [["n", "средний (esto, eso)"]], "filas": DEMOSTRATIVO},
        "posesivo": {"cols": COLS_4, "filas": POSESIVO},
    }
    with open(salida, "w", encoding="utf-8") as f:
        f.write("/* Abecé — formas de las palabras que cambian (FORMAS_ES).\n")
        f.write("   Generado por herramientas/abece/formas-es.py: no editar a mano.\n")
        f.write(f"   {len(out)} entradas. t: sust | adj | det | num | art | pron | contr.\n")
        f.write("   sust: sg, pl, art [sg, pl], g; f/fpl/artF si tiene femenino; elA (el agua);\n")
        f.write("         inv (pl = sg); soloPl; sentido (el/la cambia el sentido).\n")
        f.write("   adj/det/num: m, f, mpl, fpl; invG (igual en m y f); apoc (+ apocF: también ante f); var (la otra forma del plural: la de la RAE).\n")
        f.write("   pron/det de serie: serie + fila/celdas en FORMAS_ES_SERIES. */\n")
        f.write("const FORMAS_ES = {\n")
        f.write(",\n".join(f'"{i}":{js(d)}' for i, d in sorted(out.items())))
        f.write("\n};\n\nconst FORMAS_ES_SERIES = ")
        f.write(json.dumps(series, ensure_ascii=False, indent=1))
        f.write(";\n")
        f.write(r'''
/* Todas las formas de una entrada, sin repetir, con su clave:
   sg, pl, f, fpl, m, mpl, apoc, var o n (neutra). Las de una serie
   (este → esta, estos…) llevan la clave de su columna. */
function formasEsLista(id) {
  var d = FORMAS_ES[id];
  if (!d) return [];
  var r = [], vistas = {};
  function add(x, k) {
    if (!x) return;
    String(x).split(" · ").forEach(function (p) {
      if (p && !vistas[p]) { vistas[p] = 1; r.push({ f: p, k: k }); }
    });
  }
  ["sg", "m", "f", "pl", "mpl", "fpl", "apoc", "var"].forEach(function (k) { add(d[k], k); });
  var s = d.serie && FORMAS_ES_SERIES[d.serie];
  if (s && d.fila && !d.neutro) {
    var fila = s.filas.filter(function (x) { return x[0] === d.fila; })[0];
    var cols = ["m", "f", "mpl", "fpl", "n"];
    if (fila) {
      var fs = d.serie === "posesivo" ? (d.tipo === "atono" ? fila[2] : fila[3]) : fila.slice(2);
      fs.forEach(function (x, i) { add(x, cols[i]); });
    }
  }
  return r;
}

/* Índice forma (minúscula, con tilde) → [{ id, k, f }]. Se arma una vez. */
var _formasEsIdx = null;
function formasEsIndice() {
  if (_formasEsIdx) return _formasEsIdx;
  _formasEsIdx = {};
  Object.keys(FORMAS_ES).forEach(function (id) {
    formasEsLista(id).forEach(function (x) {
      var key = x.f.toLowerCase();
      (_formasEsIdx[key] = _formasEsIdx[key] || []).push({ id: id, k: x.k, f: x.f });
    });
  });
  return _formasEsIdx;
}

window.FORMAS_ES = FORMAS_ES;
window.FORMAS_ES_SERIES = FORMAS_ES_SERIES;
window.formasEsLista = formasEsLista;
window.formasEsIndice = formasEsIndice;
''')


if __name__ == "__main__":
    lex = leer_lexico()
    out = armar(lex)
    escribir_js(out, os.path.join(RAIZ, "data", "data-formas-es.js"))
    print("data/data-formas-es.js:", len(out), "entradas")
    cruce_corpes(lex, out)
