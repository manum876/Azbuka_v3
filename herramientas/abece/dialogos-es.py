#!/usr/bin/env python3
# ============================================================
# DIALOGOS-ES.PY — Abecé (28/10/2026): arma data/data-dialogos-es.js
# (personajes, frases y diálogos) desde el texto de cada línea.
#   lex de cada palabra: DEF (palabras con dos entradas) → léxico → formas
#   (data-formas-es.js) → conjugaciones (data-verbos-es.js); los nombres
#   propios y las letras deletreadas quedan en null.
#   tr: la pronunciación del léxico o la de generador-fonetica-es.py.
# Uso (desde la raíz del repo, con Node):  python3 herramientas/abece/dialogos-es.py
# Para sumar frases o diálogos: agregarlos a FRASES / DIALOGOS y volver a correr.
# Al final lista las palabras ambiguas o sin ID para revisarlas.
# ============================================================
import json, re, sys, os, subprocess, importlib.util
AQUI = os.path.dirname(os.path.abspath(__file__)); RAIZ = os.path.dirname(os.path.dirname(AQUI))
spec = importlib.util.spec_from_file_location("gf", os.path.join(AQUI, "generador-fonetica-es.py"))
gf = importlib.util.module_from_spec(spec); spec.loader.exec_module(gf)
MAPAS = os.path.join(AQUI, ".mapas-dialogos.json")
subprocess.run(["node", os.path.join(AQUI, "dialogos-es-mapas.js"), RAIZ, MAPAS], check=True)
M = json.load(open(MAPAS)); os.remove(MAPAS)
OUT = os.path.join(RAIZ, "data", "data-dialogos-es.js")

DEF = {"sí": "ESP-00038", "tal": "ESP-05183", "mañana": "ESP-05181", "vale": "ESP-05408", "bien": "ESP-00036", "mucho": "ESP-00066",
       "la": "ESP-00001", "lo": "ESP-00025", "tarde": "ESP-00217", "nada": "ESP-00070", "gusto": "ESP-00673", "encantado": "ESP-00942",
       "llamo": "ESP-02076", "llamas": "ESP-02076", "llama": "ESP-02076", "siento": "ESP-00079", "y": "ESP-00009",
       "señora": "ESP-00051", "pero": "ESP-00031"}
PROPIOS = {"ana", "javier", "lucía", "petrova", "barcelona", "moscú", "pérez"}
LETRAS = {"a", "be", "ce", "de", "e", "efe", "ge", "hache", "i", "jota", "ka", "ele", "eme", "ene", "eñe", "o", "pe", "cu", "erre", "ese", "te", "u", "uve", "equis", "ye", "zeta"}
RX = re.compile(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*")
faltan = set()

def idDe(w, deletreo=False):
    k = w.lower()
    if k in PROPIOS: return None
    if deletreo and k in LETRAS: return None
    if k in DEF: return DEF[k]
    L = [x for x in M["lex"].get(k, []) if not x.get("propio")]
    if len(L) == 1: return L[0]["id"]
    if len(L) > 1: faltan.add("ambigua: " + k); return L[0]["id"]
    F = M["formas"].get(k)
    if F and len(F) == 1: return F[0]
    V = M["verb"].get(k)
    if V and len(V) == 1: return V[0]
    faltan.add("sin id: " + k)
    return None

def trDe(w):
    k = w.lower()
    L = M["lex"].get(k)
    t = L[0]["tr"] if L and L[0].get("tr") else gf.translit(k)
    if w[0].isupper(): t = t[0].upper() + t[1:]
    return t

def linea(txt, deletreo=False):
    lex, partes, ult = [], [], 0
    for m in RX.finditer(txt):
        partes.append(txt[ult:m.start()]); partes.append(trDe(m.group(0))); ult = m.end()
        lex.append(idDe(m.group(0), deletreo))
    partes.append(txt[ult:])
    return "".join(partes), lex

PERSONAJES = {
    "ana": {"es": "Ana", "ru": "Аня", "genero": "f", "desc": "Аня из Москвы, переезжает в Барселону."},
    "javier": {"es": "Javier", "ru": "Хавьер", "genero": "m", "desc": "Преподаватель Ани."},
    "lucia": {"es": "Lucía", "ru": "Лусия", "genero": "f", "desc": "Испанская подруга Ани."},
    "recepcion": {"es": "Recepcionista", "ru": "Администратор", "genero": "m", "desc": "Администратор на ресепшене."}
}

# Frases: [id, función, es, ru (traducción), registro, uso (ruso)]
FRASES = [
    ["FRE-001", "saludar", "¡Hola!", "Привет! Здравствуйте!", "", "Подходит для всех и в любое время. В Испании с «hola» здороваются даже с незнакомыми."],
    ["FRE-002", "saludar", "¡Buenos días!", "Доброе утро! Добрый день!", "", "До обеда, то есть примерно до 14–15 часов, а не до полудня."],
    ["FRE-003", "saludar", "¡Buenas tardes!", "Добрый день! Добрый вечер!", "", "После обеда и до темноты (в Испании — часов до 20–21)."],
    ["FRE-004", "saludar", "¡Buenas noches!", "Добрый вечер! Спокойной ночи!", "", "Вечером: и при встрече, и при прощании."],
    ["FRE-005", "saludar", "¿Qué tal?", "Как дела? Как ты? Как вы?", "", "Очень частый вопрос, и с «tú», и с «usted». Часто идёт сразу после «hola»: «¡Hola! ¿Qué tal?»"],
    ["FRE-006", "saludar", "¿Cómo estás?", "Как ты?", "tú", "С друзьями, с родными, с ровесниками."],
    ["FRE-007", "saludar", "¿Cómo está usted?", "Как вы?", "usted", "Вежливо: с незнакомым взрослым, с преподавателем на первой встрече."],
    ["FRE-008", "saludar", "Muy bien, gracias. ¿Y tú?", "Очень хорошо, спасибо. А ты?", "tú", "Обычный ответ на «¿qué tal?» или «¿cómo estás?»."],
    ["FRE-009", "saludar", "Bien, gracias. ¿Y usted?", "Хорошо, спасибо. А вы?", "usted", "Тот же ответ на «usted»."],
    ["FRE-010", "despedirse", "¡Adiós!", "До свидания! Пока!", "", "Подходит всегда. Испанцы говорят «adiós» и при короткой встрече на улице."],
    ["FRE-011", "despedirse", "¡Hasta luego!", "До встречи! Пока!", "", "Самое частое прощание: даже если вы больше не увидитесь сегодня."],
    ["FRE-012", "despedirse", "¡Hasta mañana!", "До завтра!", "", "Если увидитесь завтра."],
    ["FRE-013", "despedirse", "¡Chao!", "Пока!", "tú", "Неформально, с друзьями."],
    ["FRE-014", "agradecer", "Gracias.", "Спасибо.", "", "«Muchas gracias» — большое спасибо."],
    ["FRE-015", "agradecer", "De nada.", "Не за что. Пожалуйста.", "", "Ответ на «gracias»."],
    ["FRE-016", "agradecer", "Por favor.", "Пожалуйста (просьба).", "", "Когда о чём-то просишь. В ответ на «gracias» говорят не «por favor», а «de nada»."],
    ["FRE-017", "agradecer", "Perdón.", "Извините. Простите.", "", "Чтобы извиниться или привлечь внимание."],
    ["FRE-018", "agradecer", "Lo siento.", "Мне жаль. Простите.", "", "Когда сожалеешь о чём-то: опоздал, не можешь помочь."],
    ["FRE-019", "entender", "No entiendo.", "Я не понимаю.", "", "Главная фраза ученика: говори её смело."],
    ["FRE-020", "entender", "¿Puedes repetir, por favor?", "Можешь повторить, пожалуйста?", "tú", "С «usted»: «¿Puede repetir, por favor?»."],
    ["FRE-021", "entender", "¿Puede repetir, por favor?", "Можете повторить, пожалуйста?", "usted", "Вежливо: с преподавателем, с незнакомым человеком."],
    ["FRE-022", "entender", "Más despacio, por favor.", "Помедленнее, пожалуйста.", "", "Испанцы говорят быстро: эта фраза тебе пригодится."],
    ["FRE-023", "entender", "¿Cómo se escribe?", "Как это пишется?", "", "Ответ — по буквам: «eme, a, eñe, a…»."],
    ["FRE-024", "entender", "¿Cómo se dice en español?", "Как это сказать по-испански?", "", "Можно показать на предмет или назвать слово по-русски."],
    ["FRE-025", "presentarse", "¿Cómo te llamas?", "Как тебя зовут?", "tú", "Дословно: «как ты себя называешь?»."],
    ["FRE-026", "presentarse", "¿Cómo se llama usted?", "Как вас зовут?", "usted", "Вежливый вариант."],
    ["FRE-027", "presentarse", "Me llamo Ana.", "Меня зовут Аня.", "", "Дословно: «я себя называю Аня». Можно сказать и просто «Ana»."],
    ["FRE-028", "presentarse", "Encantado.", "Очень приятно (говорит мужчина).", "", "Мужчина говорит «encantado», женщина — «encantada», как «рад» и «рада»."],
    ["FRE-029", "presentarse", "Encantada.", "Очень приятно (говорит женщина).", "", "Женщина говорит «encantada»."],
    ["FRE-030", "presentarse", "Mucho gusto.", "Очень приятно.", "", "Одинаково для мужчин и женщин."],
    ["FRE-031", "presentarse", "¿Puedes deletrear tu nombre?", "Можешь назвать своё имя по буквам?", "tú", "Ответ — названия букв: «a, ene, a»."],
    ["FRE-032", "agradecer", "¡Vale!", "Ладно! Хорошо! Договорились!", "", "Самое испанское «да, договорились». В Латинской Америке так почти не говорят."]
]

# Diálogos: [id, título ruso, título español, personajes, [[p, es, ru, obs?, deletreo?], …]]
DIALOGOS = [
    ["DLE-001", "На ресепшене", "En la recepción", ["recepcion", "ana"], [
        ["recepcion", "¡Buenos días!", "Доброе утро!"],
        ["ana", "¡Hola! Buenos días.", "Здравствуйте! Доброе утро."],
        ["recepcion", "¿Cómo se llama usted?", "Как вас зовут?", "Администратор говорит с Аней на «usted»: они не знакомы."],
        ["ana", "Me llamo Ana. Ana Petrova.", "Меня зовут Аня. Аня Петрова."],
        ["recepcion", "¿Cómo se escribe?", "Как это пишется?"],
        ["ana", "Pe, e, te, erre, o, uve, a.", "П, е, т, р, о, в, а.", "Аня называет буквы по-испански: «uve» — это **v**.", True],
        ["recepcion", "Muy bien. Gracias.", "Очень хорошо. Спасибо."],
        ["ana", "De nada. ¡Hasta luego!", "Не за что. До свидания!"],
        ["recepcion", "¡Adiós!", "До свидания!"]]],
    ["DLE-002", "Знакомство с Хавьером", "Javier", ["javier", "ana"], [
        ["javier", "¡Buenas tardes! Me llamo Javier.", "Добрый день! Меня зовут Хавьер."],
        ["ana", "Buenas tardes. Me llamo Ana.", "Добрый день. Меня зовут Аня."],
        ["javier", "Encantado, Ana.", "Очень приятно, Аня.", "Хавьер — мужчина, поэтому «encantado»."],
        ["ana", "Encantada.", "Очень приятно.", "Аня — женщина, поэтому «encantada»."],
        ["javier", "¿Qué tal?", "Как дела?"],
        ["ana", "Muy bien, gracias. ¿Y usted?", "Очень хорошо, спасибо. А вы?", "С преподавателем Аня говорит на «usted»."],
        ["javier", "Bien, gracias. Y de tú, por favor.", "Хорошо, спасибо. И давай на «ты», пожалуйста.", "«De tú» — на «ты». В Испании быстро переходят на «tú», даже с преподавателем."],
        ["ana", "¡Vale!", "Хорошо!"]]],
    ["DLE-003", "Как это пишется?", "¿Cómo se escribe?", ["javier", "ana"], [
        ["javier", "La palabra: mañana.", "Слово: mañana."],
        ["ana", "Perdón, no entiendo. ¿Puedes repetir, por favor?", "Извини, я не понимаю. Можешь повторить, пожалуйста?"],
        ["javier", "Mañana.", "Mañana."],
        ["ana", "¿Cómo se escribe?", "Как это пишется?"],
        ["javier", "Eme, a, eñe, a, ene, a.", "M, a, ñ, a, n, a.", None, True],
        ["ana", "Más despacio, por favor.", "Помедленнее, пожалуйста."],
        ["javier", "Eme… a… eñe… a… ene… a.", "M… a… ñ… a… n… a.", None, True],
        ["ana", "¡Gracias!", "Спасибо!"],
        ["javier", "De nada.", "Не за что."]]],
    ["DLE-004", "Аня и Лусия", "Ana y Lucía", ["lucia", "ana"], [
        ["lucia", "¡Hola! ¿Cómo te llamas?", "Привет! Как тебя зовут?"],
        ["ana", "Ana. ¿Y tú?", "Аня. А тебя?"],
        ["lucia", "Lucía. ¡Mucho gusto!", "Лусия. Очень приятно!"],
        ["ana", "Encantada.", "Очень приятно."],
        ["lucia", "¿Tu número de teléfono?", "Твой номер телефона?"],
        ["ana", "Seis, cero, cinco, uno, ocho, dos, nueve, siete, tres.", "Шесть, ноль, пять, один, восемь, два, девять, семь, три.", "Номер телефона в Испании — девять цифр. Их можно называть по одной."],
        ["lucia", "Más despacio, por favor.", "Помедленнее, пожалуйста."],
        ["ana", "Seis… cero… cinco… uno… ocho… dos… nueve… siete… tres.", "Шесть… ноль… пять… один… восемь… два… девять… семь… три."],
        ["lucia", "¡Vale, gracias! ¡Hasta mañana!", "Хорошо, спасибо! До завтра!"],
        ["ana", "¡Chao!", "Пока!"]]]
]

def frasesDe(es):
    """Frases (FRE) que aparecen en una línea."""
    n = lambda t: re.sub(r"[¡!¿?.,…]", "", t).lower().strip()
    out = []
    for f in FRASES:
        k = n(f[2])
        if k in ("ana",) or not k: continue
        if k == "me llamo ana": k = "me llamo"
        if re.search(r"(^|\s)" + re.escape(k) + r"($|\s)", n(es)): out.append(f[0])
    return out

fr_js = []
for fid, fun, es, ru, reg, uso in FRASES:
    tr, lex = linea(es)
    fr_js.append({"id": fid, "funcion": fun, "es": es, "tr": tr, "ru": ru, "registro": reg, "nivel": "A1", "unidad": 1, "uso": uso, "lex": lex})
dl_js = []
for did, tit, titEs, pers, lineas in DIALOGOS:
    ls = []
    for l in lineas:
        p, es, ru = l[0], l[1], l[2]
        obs = l[3] if len(l) > 3 else None
        dl = len(l) > 4 and l[4]
        tr, lex = linea(es, dl)
        x = {"p": p, "es": es, "tr": tr, "ru": ru, "lex": lex}
        f = frasesDe(es)
        if f: x["f"] = f
        if obs: x["obs"] = obs
        ls.append(x)
    dl_js.append({"id": did, "titulo": tit, "tituloEs": titEs, "situacion": "conocer", "nivel": "A1", "unidad": 1, "personajes": pers, "lineas": ls})

J = lambda o: json.dumps(o, ensure_ascii=False)
txt = """/* ============================================================
   DATA-DIALOGOS-ES.JS — Abecé: personajes, frases y diálogos
   (28/10/2026, Урок 1). Generado por un script a partir del texto
   de cada línea: no editar a mano los campos tr y lex.
   ------------------------------------------------------------
   Mismo formato que data-dialogos.js y data-frases.js de Azbuka, con
   los campos al revés (CONTEXTO_PROYECTO.md §6.28):
     es   la frase en español (lo que se aprende)
     tr   pronunciación en cirílico (la del léxico, o la del generador
          herramientas/abece/generador-fonetica-es.py)
     ru   la traducción al ruso (borrador para Iván)
     lex  un ID del léxico español por palabra, en orden; null = nombre
          propio, letra deletreada o palabra que no está en el léxico
     f    frases (FRASES_ES) que aparecen en la línea
     obs  nota en ruso (opcional)
   DLG_PERSONAJES_ES: es = nombre en español, ru = en ruso, genero
   (elige la voz: core.js, azHablarEs). Registro de las frases: "tú",
   "usted" o "" (sirve para los dos).
   ============================================================ */

const DLG_PERSONAJES_ES = """ + json.dumps(PERSONAJES, ensure_ascii=False, indent=1) + """;

const FRASES_ES = [
""" + ",\n".join(" " + J(f) for f in fr_js) + """
];

const DIALOGOS_ES = [
""" + ",\n".join(" " + J(d) for d in dl_js) + """
];

function dialogoEsById(id) { return DIALOGOS_ES.find(d => d.id === id) || null; }
function fraseEsById(id) { return FRASES_ES.find(f => f.id === id) || null; }
if (typeof window !== "undefined") Object.assign(window, { DLG_PERSONAJES_ES, FRASES_ES, DIALOGOS_ES, dialogoEsById, fraseEsById });
"""
open(OUT, "w").write(txt)
print("frases", len(fr_js), "diálogos", len(dl_js))
print("\n".join(sorted(faltan)))
