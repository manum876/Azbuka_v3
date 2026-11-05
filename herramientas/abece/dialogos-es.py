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
       "señora": "ESP-00051", "pero": "ESP-00031",
       # U2 (02/11/2026)
       "este": "ESP-00029", "vivo": "ESP-00178", "poco": "ESP-00120", "solo": "ESP-00046",
       # U3 (02/11/2026)
       "hay": "ESP-00012", "muchos": "ESP-00066", "muchas": "ESP-00066",
       # U4 (04/11/2026)
       "frío": "ESP-05434", "media": "ESP-05193", "cuarto": "ESP-00508",
       "levanto": "ESP-01196", "levantas": "ESP-01196", "ducho": "ESP-05423", "desayuno": "ESP-02377"}
# Nombres propios de varias palabras que no están en el léxico (sus palabras no se enlazan)
PROPIOS_VARIAS = ["Buenos Aires"]
# Nombres de personas (no van al léxico). Los países y las ciudades sí: con mayúscula se usa la entrada propia.
PROPIOS = {"ana", "javier", "lucía", "petrova", "pérez", "pablo", "marta", "olga", "iván", "gmail"}
LETRAS = {"a", "be", "ce", "de", "e", "efe", "ge", "hache", "i", "jota", "ka", "ele", "eme", "ene", "eñe", "o", "pe", "cu", "erre", "ese", "te", "u", "uve", "equis", "ye", "zeta"}
RX = re.compile(r"[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*")
faltan = set()

def idDe(w, deletreo=False):
    k = w.lower()
    if k in PROPIOS: return None
    if deletreo and k in LETRAS: return None
    if k in DEF: return DEF[k]
    todas = M["lex"].get(k, [])
    if w[:1].isupper():   # Rusia, Madrid, China: la entrada propia, si hay
        P = [x for x in todas if x.get("propio")]
        if len(P) == 1: return P[0]["id"]
    L = [x for x in todas if not x.get("propio")]
    if len(L) == 1: return L[0]["id"]
    if len(L) > 1: faltan.add("ambigua: " + k); return L[0]["id"]
    F = M["formas"].get(k)
    if F and len(F) == 1: return F[0]
    V = M["verb"].get(k)
    if V and len(V) == 1: return V[0]
    faltan.add("sin id: " + k)
    return None

TR_FIJA = {"gmail": "хэмэ́йл"}   # préstamos que se dicen distinto de como se escriben
def trDe(w):
    k = w.lower()
    L = M["lex"].get(k)
    t = TR_FIJA[k] if k in TR_FIJA else L[0]["tr"] if L and L[0].get("tr") else gf.translit(k)
    if w[0].isupper(): t = t[0].upper() + t[1:]
    return t

def linea(txt, deletreo=False):
    lex, partes, ult = [], [], 0
    fuera = [(m.start(), m.end()) for p in PROPIOS_VARIAS for m in re.finditer(re.escape(p), txt)]
    for m in RX.finditer(txt):
        partes.append(txt[ult:m.start()]); partes.append(trDe(m.group(0))); ult = m.end()
        lex.append(None if any(a <= m.start() < b for a, b in fuera) else idDe(m.group(0), deletreo))
    partes.append(txt[ult:])
    return "".join(partes), lex

PERSONAJES = {
    "ana": {"es": "Ana", "ru": "Аня", "genero": "f", "desc": "Аня из Москвы, переезжает в Барселону."},
    "javier": {"es": "Javier", "ru": "Хавьер", "genero": "m", "desc": "Преподаватель Ани."},
    "lucia": {"es": "Lucía", "ru": "Лусия", "genero": "f", "desc": "Испанская подруга Ани."},
    "recepcion": {"es": "Recepcionista", "ru": "Администратор", "genero": "m", "desc": "Администратор на ресепшене."},
    "pablo": {"es": "Pablo", "ru": "Пабло", "genero": "m", "desc": "Брат Лусии, из Мадрида."},
    "marta": {"es": "Marta", "ru": "Марта", "genero": "f", "desc": "Девушка Пабло, из Аргентины."}
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
    ["FRE-032", "agradecer", "¡Vale!", "Ладно! Хорошо! Договорились!", "", "Самое испанское «да, договорились». В Латинской Америке так почти не говорят."],
    # U2 (02/11/2026)
    ["FRE-033", "hablar-de-uno", "¿De dónde eres?", "Откуда ты?", "tú", "С usted: «¿De dónde es usted?».", 2],
    ["FRE-034", "hablar-de-uno", "Soy de Rusia.", "Я из России.", "", "**de** + страна или город: soy de Moscú.", 2],
    ["FRE-035", "hablar-de-uno", "¿Cuántos años tienes?", "Сколько тебе лет?", "tú", "Дословно: «сколько лет ты имеешь?». С usted: «¿Cuántos años tiene?».", 2],
    ["FRE-036", "hablar-de-uno", "Tengo veinte años.", "Мне двадцать лет.", "", "Возраст — с глаголом **tener**, а не ser.", 2],
    ["FRE-037", "hablar-de-uno", "¿Hablas inglés?", "Ты говоришь по-английски?", "tú", "Язык — без предлога и без артикля: hablo español.", 2],
    ["FRE-038", "hablar-de-uno", "Hablo un poco de español.", "Я немного говорю по-испански.", "", "«Un poco de» — немного.", 2],
    ["FRE-039", "hablar-de-uno", "Vivo en Barcelona.", "Я живу в Барселоне.", "", "**en** + город: vivo en Madrid.", 2],
    ["FRE-040", "hablar-de-uno", "¿Eres de aquí?", "Ты местный? (Ты отсюда?)", "tú", "Частый вопрос при знакомстве.", 2],
    ["FRE-041", "presentarse", "Este es mi hermano.", "Это мой брат.", "", "Представить мужчину: **este es**; женщину — **esta es**.", 2],
    ["FRE-042", "presentarse", "Esta es mi amiga Lucía.", "Это моя подруга Лусия.", "", "**esta es** — о женщине.", 2],
    ["FRE-043", "presentarse", "¿Quién es?", "Кто это?", "", "Вопрос о человеке.", 2],
    ["FRE-044", "datos", "¿Cuál es tu número de teléfono?", "Какой у тебя номер телефона?", "tú", "Не «qué», а **cuál**: «какой (из всех)».", 2],
    ["FRE-045", "datos", "¿Cuál es tu correo?", "Какая у тебя почта?", "tú", "Адрес диктуют так: ana arroba gmail punto com.", 2],
    ["FRE-046", "hablar-de-uno", "¿Tienes hermanos?", "У тебя есть братья или сёстры?", "tú", "**hermanos** — и «братья», и «братья и сёстры».", 2],
    ["FRE-047", "hablar-de-uno", "Soy profesora.", "Я преподаватель (говорит женщина).", "", "Профессия — без артикля.", 2],
    # U3 (02/11/2026)
    ["FRE-048", "orientarse", "¿Hay un banco cerca?", "Здесь поблизости есть банк?", "", "Любой банк — **hay un…**", 3],
    ["FRE-049", "describir", "¿Qué hay en tu bolso?", "Что у тебя в сумке?", "tú", "Ответ — с **hay**: hay un móvil, unas gafas…", 3],
    ["FRE-050", "orientarse", "¿Dónde está la farmacia?", "Где аптека?", "", "Конкретное место — **¿dónde está…?**", 3],
    ["FRE-051", "orientarse", "¿Está lejos?", "Это далеко?", "", "Ответ: «No, está cerca» — нет, близко.", 3],
    ["FRE-052", "orientarse", "No, está muy cerca.", "Нет, совсем близко.", "", "**cerca** — близко, **lejos** — далеко.", 3],
    ["FRE-053", "orientarse", "Está a la derecha.", "Это справа.", "", "Слева — **a la izquierda**.", 3],
    ["FRE-054", "orientarse", "Está al lado del banco.", "Это рядом с банком.", "", "**de** + **el** = **del**.", 3],
    ["FRE-055", "describir", "¿En qué piso vives?", "На каком этаже ты живёшь?", "tú", "**piso** — и «квартира», и «этаж».", 3],
    ["FRE-056", "describir", "Vivo en el tercero.", "Я живу на третьем этаже.", "", "В Испании этажи считают с **planta baja**: el tercero — по-русски четвёртый.", 3],
    ["FRE-057", "describir", "¿Cómo es tu piso?", "Какая у тебя квартира?", "tú", "**¿Cómo es?** — какой он; ответ с **ser**.", 3],
    ["FRE-058", "describir", "¿Qué hay en tu barrio?", "Что есть в твоём районе?", "tú", "Ответ: hay un mercado, muchos bares…", 3],
    ["FRE-059", "describir", "Es pequeño, pero muy bonito.", "Он маленький, но очень красивый.", "", "Описание — **ser**; перед прилагательным — **muy**.", 3],
    ["FRE-060", "describir", "Estoy cansada.", "Я устала.", "", "Состояние — **estar**. Мужчина говорит «estoy cansado».", 3],
    ["FRE-061", "describir", "La tienda está cerrada.", "Магазин закрыт.", "", "Закрыт сейчас — **estar**. Открыт — **está abierta**.", 3],
    ["FRE-062", "describir", "¿Cuál es tu casa?", "Который твой дом?", "tú", "**¿Cuál?** — который из этих.", 3],
    # U4 (04/11/2026)
    ["FRE-063", "datos", "¿En qué trabajas?", "Кем ты работаешь?", "tú", "Вопрос о работе. Ответ: «Trabajo en…» или «Soy médico».", 4],
    ["FRE-064", "tiempo", "¿Qué hora es?", "Который час?", "", "Ответ: «Es la una» или «Son las dos…».", 4],
    ["FRE-065", "tiempo", "¿A qué hora abre?", "Во сколько открывается?", "", "О магазине, музее, банке. Ответ: «A las diez».", 4],
    ["FRE-066", "tiempo", "Son las ocho en punto.", "Ровно восемь.", "", "**en punto** — ровно, без минут.", 4],
    ["FRE-067", "rutina", "Me levanto a las siete.", "Я встаю в семь.", "", "Глагол с **se**: **me levanto**.", 4],
    ["FRE-068", "rutina", "Primero me ducho y después desayuno.", "Сначала я принимаю душ, а потом завтракаю.", "", "Рассказ по порядку: **primero… después…**", 4],
    ["FRE-069", "rutina", "Vuelvo a casa a las seis.", "Я возвращаюсь домой в шесть.", "", "**volver** — o → **ue**: **vuelvo**.", 4],
    ["FRE-070", "rutina", "Salgo de casa a las ocho.", "Я выхожу из дома в восемь.", "", "**salir** → **salgo**.", 4],
    ["FRE-071", "tiempo", "¿Qué tiempo hace?", "Какая погода?", "", "Ответ с **hace**: «Hace sol», «Hace frío».", 4],
    ["FRE-072", "tiempo", "Hace mucho calor.", "Очень жарко.", "", "Погода — **hace**; «очень» перед существительным — **mucho**.", 4],
    ["FRE-073", "tiempo", "¿Qué día es hoy?", "Какой сегодня день?", "", "Ответ без артикля: «Hoy es martes».", 4],
    ["FRE-074", "gustos", "¿Qué haces los fines de semana?", "Что ты делаешь по выходным?", "tú", "**los fines de semana** — каждые выходные.", 4],
    ["FRE-075", "rutina", "No desayuno nunca.", "Я никогда не завтракаю.", "", "Можно и так: «Nunca desayuno».", 4],
    ["FRE-076", "rutina", "¿Qué estás haciendo?", "Что ты (сейчас) делаешь?", "tú", "Прямо сейчас — **estar** + gerundio.", 4],
    ["FRE-077", "rutina", "Estoy trabajando.", "Я (сейчас) работаю.", "", "Удобный ответ, когда звонят не вовремя.", 4],
    ["FRE-078", "gustos", "¿Te gusta el fútbol?", "Тебе нравится футбол?", "tú", "После **gusta** — артикль: **el fútbol**.", 4],
    ["FRE-079", "gustos", "¡Me encanta!", "Обожаю! Очень нравится!", "", "Сильнее, чем «me gusta». **mucho** к нему не добавляют.", 4],
    ["FRE-080", "gustos", "No me gusta nada.", "Мне совсем не нравится.", "", "**nada** — «совсем», «нисколько».", 4]
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
        ["ana", "¡Chao!", "Пока!"]]],
    # U2 (02/11/2026)
    ["DLE-005", "Откуда ты?", "¿De dónde eres?", ["pablo", "ana"], [
        ["pablo", "¡Hola! Soy Pablo, el hermano de Lucía.", "Привет! Я Пабло, брат Лусии.", "**el hermano de Lucía** — «брат Лусии»: «de» передаёт русский родительный падеж."],
        ["ana", "Hola, Pablo. Me llamo Ana.", "Привет, Пабло. Меня зовут Аня."],
        ["pablo", "¿De dónde eres, Ana?", "Откуда ты, Аня?"],
        ["ana", "Soy de Rusia, de Moscú. Soy rusa.", "Я из России, из Москвы. Я русская."],
        ["pablo", "¿Hablas inglés?", "Ты говоришь по-английски?"],
        ["ana", "Sí, hablo ruso, inglés y un poco de español.", "Да, я говорю по-русски, по-английски и немного по-испански."],
        ["pablo", "¡Hablas muy bien!", "Ты очень хорошо говоришь!"],
        ["ana", "Gracias. ¿Y tú? ¿Eres de Barcelona?", "Спасибо. А ты? Ты из Барселоны?"],
        ["pablo", "No, soy de Madrid. Pero vivo en Barcelona.", "Нет, я из Мадрида. Но живу в Барселоне."]], 2],
    ["DLE-006", "Сколько тебе лет?", "¿Cuántos años tienes?", ["lucia", "ana"], [
        ["lucia", "Ana, ¿cuántos años tienes?", "Аня, сколько тебе лет?"],
        ["ana", "Tengo veintiocho años. ¿Y tú?", "Мне двадцать восемь. А тебе?"],
        ["lucia", "Treinta y dos. ¿Eres estudiante?", "Тридцать два. Ты студентка?", "**treinta y dos** — после 30 числа пишутся через «y»."],
        ["ana", "No, soy programadora. ¿Y tú?", "Нет, я программист. А ты?", "Профессия — без артикля и в женском роде: **programadora**."],
        ["lucia", "Soy profesora de inglés.", "Я преподаватель английского."],
        ["ana", "¡Qué bien!", "Как здорово!"]], 2],
    ["DLE-007", "Анкета", "En la academia", ["recepcion", "ana"], [
        ["recepcion", "Buenos días. ¿Su nombre, por favor?", "Доброе утро. Ваше имя, пожалуйста?", "Администратор говорит на **usted**: **su** — «ваш»."],
        ["ana", "Ana Petrova.", "Аня Петрова."],
        ["recepcion", "¿Nacionalidad?", "Гражданство?"],
        ["ana", "Rusa.", "Русская."],
        ["recepcion", "¿Cuántos años tiene?", "Сколько вам лет?"],
        ["ana", "Veintiocho.", "Двадцать восемь."],
        ["recepcion", "¿Y su número de teléfono?", "А ваш номер телефона?"],
        ["ana", "Seis, cuatro, uno, treinta y dos, cincuenta, noventa y ocho.", "Шесть, четыре, один, тридцать два, пятьдесят, девяносто восемь.", "Номер часто называют так: первые три цифры по одной, потом парами."],
        ["recepcion", "¿Cuál es su correo?", "Какая у вас электронная почта?"],
        ["ana", "Ana punto petrova arroba gmail punto com.", "ana.petrova@gmail.com", "**arroba** — «собака» (@), **punto** — точка."],
        ["recepcion", "Muy bien. Gracias, Ana.", "Очень хорошо. Спасибо, Аня."]], 2],
    ["DLE-008", "Моя семья", "Mi familia", ["lucia", "ana"], [
        ["lucia", "¿Quién es?", "Кто это?"],
        ["ana", "Es mi madre. Se llama Olga. Es médica.", "Это моя мама. Её зовут Ольга. Она врач."],
        ["lucia", "¿Y este chico?", "А этот парень?"],
        ["ana", "Es mi hermano, Iván. Tiene veinte años. Es estudiante.", "Это мой брат Иван. Ему двадцать лет. Он студент."],
        ["lucia", "¿Tienes más hermanos?", "У тебя есть ещё братья или сёстры?"],
        ["ana", "No, solo un hermano. ¿Y tú?", "Нет, только один брат. А у тебя?"],
        ["lucia", "Tengo un hermano, Pablo, y una hermana.", "У меня есть брат Пабло и сестра."]], 2],
    ["DLE-009", "Знакомьтесь!", "Os presento a…", ["lucia", "ana", "marta"], [
        ["lucia", "Ana, este es Pablo, mi hermano, y esta es Marta, su novia.", "Аня, это Пабло, мой брат, а это Марта, его девушка."],
        ["ana", "¡Hola! Encantada.", "Привет! Очень приятно."],
        ["marta", "Encantada. ¿Vosotras sois compañeras de clase?", "Очень приятно. Вы однокурсницы?", "**vosotras** — Марта говорит с двумя женщинами на «ты»."],
        ["lucia", "No, somos amigas. Ana es rusa.", "Нет, мы подруги. Аня русская."],
        ["marta", "¿Rusa? ¡Qué bien! Yo soy de Argentina.", "Русская? Как здорово! А я из Аргентины.", "**Yo** — чтобы противопоставить: «а я…»."],
        ["ana", "¿De Argentina? ¿De dónde?", "Из Аргентины? Откуда?"],
        ["marta", "De Buenos Aires.", "Из Буэнос-Айреса."]], 2],
    # U3 (02/11/2026)
    ["DLE-010", "Мой район", "Mi barrio", ["lucia", "ana"], [
        ["lucia", "Ana, ¿dónde vives ahora?", "Аня, где ты сейчас живёшь?"],
        ["ana", "Vivo en un piso cerca del centro.", "Я живу в квартире недалеко от центра.", "**cerca del centro**: de + el = **del**."],
        ["lucia", "¿Cómo es tu barrio?", "Какой у тебя район?"],
        ["ana", "Es bonito y bastante tranquilo.", "Красивый и довольно тихий.", "Описание — с **ser**: **es bonito**."],
        ["lucia", "¿Qué hay en tu barrio?", "Что есть в твоём районе?"],
        ["ana", "Hay una plaza, un mercado y muchos bares.", "Есть площадь, рынок и много баров."],
        ["lucia", "¿Hay metro?", "Метро есть?"],
        ["ana", "Sí, la estación de metro está al lado del mercado.", "Да, станция метро рядом с рынком.", "Известная станция — **está**."],
        ["lucia", "¿Y hay una biblioteca?", "А библиотека есть?"],
        ["ana", "No, no hay biblioteca. Pero hay un parque muy grande.", "Нет, библиотеки нет. Но есть очень большой парк.", "**no hay** — без артикля."]], 3, "ciudad"],
    ["DLE-011", "Где банк?", "¿Hay un banco cerca?", ["ana", "javier"], [
        ["ana", "Perdón, Javier, ¿hay un banco cerca?", "Извини, Хавьер, здесь поблизости есть банк?"],
        ["javier", "Sí, hay un banco en la plaza.", "Да, на площади есть банк."],
        ["ana", "¿Y dónde está la plaza? ¿Está lejos?", "А где площадь? Это далеко?", "Теперь площадь уже известна — **¿dónde está…?**"],
        ["javier", "No, está muy cerca. Está ahí, a la derecha.", "Нет, совсем близко. Вон там, справа."],
        ["ana", "¿Al lado de la iglesia?", "Рядом с церковью?"],
        ["javier", "No, enfrente de la iglesia. El banco está entre una farmacia y un bar.", "Нет, напротив церкви. Банк между аптекой и баром."],
        ["ana", "¡Gracias!", "Спасибо!"],
        ["javier", "De nada.", "Не за что."]], 3, "ciudad"],
    ["DLE-012", "Моя квартира", "Mi piso", ["ana", "lucia"], [
        ["ana", "Este es mi piso. Es pequeño, pero muy luminoso.", "Вот моя квартира. Она маленькая, но очень светлая."],
        ["lucia", "¡Qué bonito! ¿En qué piso estamos?", "Как красиво! На каком мы этаже?", "**piso** — и «квартира», и «этаж»."],
        ["ana", "En el tercero. Y hay ascensor.", "На третьем. И есть лифт.", "По-русски это четвёртый этаж: испанцы считают с **planta baja**."],
        ["lucia", "¿Cuántas habitaciones hay?", "Сколько комнат?"],
        ["ana", "Hay dos: mi dormitorio y una habitación pequeña. Y el salón, la cocina y el baño.", "Две: моя спальня и маленькая комната. И гостиная, кухня и ванная."],
        ["lucia", "El salón es muy grande. ¿Y este cuadro?", "Гостиная очень большая. А эта картина?"],
        ["ana", "Es de mi abuela. Es muy antiguo.", "Это от моей бабушки. Она очень старинная.", "**cuadro** — мужской род: **antiguo**."],
        ["lucia", "¿Y esa puerta?", "А та дверь?", "**esa** — дверь недалеко от них."],
        ["ana", "Es la terraza. Es pequeña, pero hay muchas plantas.", "Это терраса. Она маленькая, но там много растений."]], 3, "casa"],
    ["DLE-013", "Где мои ключи?", "¿Dónde están mis llaves?", ["ana", "lucia"], [
        ["ana", "Lucía, ¿dónde están mis llaves?", "Лусия, где мои ключи?"],
        ["lucia", "¿No están en tu bolso?", "Они не в твоей сумке?"],
        ["ana", "No. En mi bolso están el móvil y las gafas, pero no las llaves.", "Нет. В сумке телефон и очки, а ключей нет.", "Известные вещи — **están**."],
        ["lucia", "¿Y encima de la mesa?", "А на столе?"],
        ["ana", "No, en la mesa solo hay una taza y un plato.", "Нет, на столе только чашка и тарелка."],
        ["lucia", "¿Y en la cocina, al lado de la nevera?", "А на кухне, рядом с холодильником?"],
        ["ana", "No… ¡Aquí están, debajo del sofá!", "Нет… Вот они, под диваном!"],
        ["lucia", "¿Debajo del sofá? ¡Muy bien!", "Под диваном? Отлично!"]], 3, "casa"],
    ["DLE-014", "Ты устала?", "¿Estás cansada?", ["javier", "ana"], [
        ["javier", "Hola, Ana. ¿Qué tal? ¿Estás cansada?", "Привет, Аня. Как дела? Ты устала?", "Состояние сейчас — **estar**."],
        ["ana", "Sí, estoy un poco cansada. Mi piso nuevo está lejos.", "Да, я немного устала. Моя новая квартира далеко."],
        ["javier", "¿Lejos? ¿Dónde está?", "Далеко? Где она?"],
        ["ana", "Está cerca de la playa.", "Недалеко от пляжа."],
        ["javier", "¡Qué bien! ¿Y cómo es el barrio?", "Здорово! А какой там район?"],
        ["ana", "Es bonito, pero un poco ruidoso. Hay muchos bares.", "Красивый, но немного шумный. Там много баров."],
        ["javier", "Sí, los bares en España son muy ruidosos.", "Да, бары в Испании очень шумные."],
        ["ana", "¡Sí! Pero los camareros son muy simpáticos.", "Да! Зато официанты очень приятные.", "Характер — **ser**: **son simpáticos**."]], 3, "conocer"],
    # U4 (04/11/2026)
    ["DLE-015", "Утро Ани", "Por la mañana", ["lucia", "ana"], [
        ["lucia", "¡Buenos días, Ana! ¿Qué hora es?", "Доброе утро, Аня! Который час?"],
        ["ana", "Son las siete y media.", "Полвосьмого."],
        ["lucia", "¿A qué hora te levantas normalmente?", "Во сколько ты обычно встаёшь?"],
        ["ana", "Me levanto a las siete. Primero me ducho y después desayuno.", "Я встаю в семь. Сначала принимаю душ, потом завтракаю.", "Глаголы с **se**: **me levanto**, **me ducho**."],
        ["lucia", "¿Y a qué hora sales de casa?", "А во сколько ты выходишь из дома?"],
        ["ana", "Salgo a las ocho y cuarto. La clase empieza a las nueve.", "Выхожу в четверть девятого. Урок начинается в девять.", "**salgo** — неправильная форма yo; **empieza** — e → ie."],
        ["lucia", "¡Uf! Yo hoy no trabajo. Vuelvo a la cama.", "Уф! А я сегодня не работаю. Иду обратно в кровать."]], 4, "dia"],
    ["DLE-016", "Расписание", "¿A qué hora empieza la clase?", ["javier", "ana"], [
        ["javier", "Ana, ¿qué días tienes clase de español?", "Аня, в какие дни у тебя испанский?"],
        ["ana", "Los lunes, los miércoles y los viernes.", "По понедельникам, средам и пятницам.", "Каждую неделю — **los lunes**."],
        ["javier", "¿Y a qué hora empieza la clase?", "А во сколько начинается урок?"],
        ["ana", "Empieza a las diez y termina a las doce menos cuarto.", "Начинается в десять и заканчивается без четверти двенадцать."],
        ["javier", "¿Estudias también en casa?", "А дома ты тоже занимаешься?"],
        ["ana", "Sí, estudio todos los días por la tarde. Leo y escucho música en español.", "Да, занимаюсь каждый день после обеда. Читаю и слушаю музыку на испанском."],
        ["javier", "¡Muy bien!", "Очень хорошо!"]], 4, "dia"],
    ["DLE-017", "Что тебе нравится?", "¿Qué te gusta hacer?", ["lucia", "ana"], [
        ["lucia", "Ana, ¿qué te gusta hacer los fines de semana?", "Аня, что ты любишь делать по выходным?"],
        ["ana", "Me gusta mucho leer y pasear por la playa.", "Я очень люблю читать и гулять по пляжу.", "Действия — **me gusta** + инфинитив."],
        ["lucia", "¿Te gusta el deporte?", "Тебе нравится спорт?"],
        ["ana", "Sí, me encanta nadar. Pero no me gusta nada el fútbol.", "Да, обожаю плавать. Но футбол мне совсем не нравится."],
        ["lucia", "¿No? Pablo juega al fútbol todos los domingos.", "Нет? А Пабло играет в футбол каждое воскресенье."],
        ["ana", "¿Y tú? ¿Qué te gusta?", "А ты? Что нравится тебе?"],
        ["lucia", "Me gustan las películas y las series. ¡Y bailar! Me encanta bailar.", "Мне нравятся фильмы и сериалы. И танцевать! Обожаю танцевать.", "Несколько — **me gustan**; действие — **me encanta**."]], 4, "gustos"],
    ["DLE-018", "Что ты делаешь?", "¿Qué estás haciendo?", ["pablo", "ana"], [
        ["pablo", "¡Hola, Ana! Soy Pablo. ¿Qué estás haciendo?", "Привет, Аня! Это Пабло. Что делаешь?", "Прямо сейчас — **estar** + gerundio."],
        ["ana", "Hola, Pablo. Estoy cocinando. ¿Y tú?", "Привет, Пабло. Готовлю. А ты?"],
        ["pablo", "Estoy viendo una película con Marta.", "Смотрю фильм с Мартой."],
        ["ana", "¿Una película? ¿Es buena?", "Фильм? Хороший?"],
        ["pablo", "Sí, es muy divertida. ¿Y qué estás cocinando?", "Да, очень смешной. А что ты готовишь?"],
        ["ana", "Una sopa. ¡Hace frío y me encanta la sopa!", "Суп. Холодно, а я обожаю суп!"]], 4, "dia"],
    ["DLE-019", "Какая погода?", "¿Qué tiempo hace?", ["marta", "ana"], [
        ["marta", "Ana, ¿qué tiempo hace hoy en Barcelona?", "Аня, какая сегодня погода в Барселоне?"],
        ["ana", "Hace sol y mucho calor. ¿Y en Madrid?", "Солнечно и очень жарко. А в Мадриде?"],
        ["marta", "Aquí hace frío y está nublado. En invierno en Madrid hace mucho frío.", "Здесь холодно и пасмурно. Зимой в Мадриде очень холодно.", "Погода — **hace**; облачно — **está nublado**."],
        ["ana", "En Moscú en invierno nieva mucho y hace mucho más frío.", "В Москве зимой много снега и гораздо холоднее."],
        ["marta", "¡Uf! Me gusta más el calor.", "Уф! Мне больше нравится тепло."]], 4, "tiempo"]
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
for fila in FRASES:   # [id, función, es, ru, registro, uso, unidad?]
    fid, fun, es, ru, reg, uso = fila[:6]
    tr, lex = linea(es)
    fr_js.append({"id": fid, "funcion": fun, "es": es, "tr": tr, "ru": ru, "registro": reg, "nivel": "A1", "unidad": fila[6] if len(fila) > 6 else 1, "uso": uso, "lex": lex})
dl_js = []
for dlg in DIALOGOS:   # [id, título ruso, título español, personajes, líneas, unidad?, situación?]
    did, tit, titEs, pers, lineas = dlg[:5]
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
    dl_js.append({"id": did, "titulo": tit, "tituloEs": titEs, "situacion": dlg[6] if len(dlg) > 6 else "conocer", "nivel": "A1", "unidad": dlg[5] if len(dlg) > 5 else 1, "personajes": pers, "lineas": ls})

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
