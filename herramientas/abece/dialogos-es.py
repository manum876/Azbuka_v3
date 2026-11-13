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

DEF = {"sí": "ESP-00038", "tal": "ESP-05183", "mañana": "ESP-05181", "fuisteis": "ESP-00016", "fui": "ESP-00016", "fuimos": "ESP-00016", "vale": "ESP-05408", "bien": "ESP-00036", "mucho": "ESP-00066",
       "la": "ESP-00001", "lo": "ESP-00025", "tarde": "ESP-00217", "nada": "ESP-00070", "gusto": "ESP-00673", "encantado": "ESP-00942",
       "llamo": "ESP-02076", "llamas": "ESP-02076", "llama": "ESP-02076", "siento": "ESP-00079", "y": "ESP-00009",
       "señora": "ESP-00051", "pero": "ESP-00031",
       # U2 (02/11/2026)
       "este": "ESP-00029", "vivo": "ESP-00178", "poco": "ESP-05177", "solo": "ESP-00046",   # poco: «un poco», el adverbio (05/11/2026)
       # U3 (02/11/2026)
       "hay": "ESP-00012", "muchos": "ESP-00066", "muchas": "ESP-00066",
       # U4 (04/11/2026)
       "frío": "ESP-05434", "media": "ESP-05193", "cuarto": "ESP-00508",
       "levanto": "ESP-01196", "levantas": "ESP-01196", "ducho": "ESP-05423", "desayuno": "ESP-02377",
       # U5 (05/11/2026)
       "mucha": "ESP-00066", "rica": "ESP-00778", "rico": "ESP-00778", "cuenta": "ESP-00331", "compra": "ESP-01268", "medio": "ESP-05193", "primero": "ESP-00146", "segundo": "ESP-00258", "helado": "ESP-01432",
       # U7 (12/11/2026)
       "mejor": "ESP-00098",
       # U9 (13/11/2026): «¿Cómo fue?» es ser; «de repente», la locución
       "fue": "ESP-00004", "repente": "ESP-03126"}
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

PRON_OD = {"lo": "ESP-00025", "la": "ESP-00599", "los": "ESP-00885", "las": "ESP-01288"}
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
    # lo / la / los / las delante de un verbo son pronombres de objeto (U5, 05/11/2026): «La compro»,
    # «Aquí la tiene»; delante de un sustantivo, artículo («la cuenta»).
    toks = [m.group(0).lower() for m in RX.finditer(txt)]
    for i, t in enumerate(toks[:-1]):
        sig = toks[i + 1]
        es_sust = any(x.get("posNormalized") in ("sustantivo", "adjetivo") for x in M["lex"].get(sig, [])) or bool(M["formas"].get(sig))
        if t in PRON_OD and M["verb"].get(sig) and not es_sust and lex[i] is not None:
            lex[i] = PRON_OD[t]
    return "".join(partes), lex

PERSONAJES = {
    "ana": {"es": "Ana", "ru": "Аня", "genero": "f", "desc": "Аня из Москвы, переезжает в Барселону."},
    "javier": {"es": "Javier", "ru": "Хавьер", "genero": "m", "desc": "Преподаватель Ани."},
    "lucia": {"es": "Lucía", "ru": "Лусия", "genero": "f", "desc": "Испанская подруга Ани."},
    "recepcion": {"es": "Recepcionista", "ru": "Администратор", "genero": "m", "desc": "Администратор на ресепшене."},
    "pablo": {"es": "Pablo", "ru": "Пабло", "genero": "m", "desc": "Брат Лусии, из Мадрида."},
    "marta": {"es": "Marta", "ru": "Марта", "genero": "f", "desc": "Девушка Пабло, из Аргентины."},
    "camarero": {"es": "Camarero", "ru": "Официант", "genero": "m", "desc": "Официант в кафе и в ресторане."},
    "dependienta": {"es": "Dependienta", "ru": "Продавщица", "genero": "f", "desc": "Продавщица на рынке и в магазине."},
    "senor": {"es": "Señor", "ru": "Прохожий", "genero": "m", "desc": "Человек на улице, у которого Аня спрашивает дорогу."},
    "empleado": {"es": "Empleado", "ru": "Сотрудник метро", "genero": "m", "desc": "Сотрудник в кассе метро."},
    "farmaceutica": {"es": "Farmacéutica", "ru": "Фармацевт", "genero": "f", "desc": "Фармацевт в аптеке."}
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
    ["FRE-079", "gustos", "¡Me encanta!", "Обожаю! Очень нравится!", "", "Сильнее, чем «me gusta». **mucho** к нему обычно не добавляют.", 4],
    ["FRE-080", "gustos", "No me gusta nada.", "Мне совсем не нравится.", "", "**nada** — «совсем», «нисколько».", 4],
    # U5 (05/11/2026)
    ["FRE-081", "necesidades", "Quiero un café, por favor.", "Я хочу кофе, пожалуйста.", "", "Простая просьба. В кафе часто говорят: «¿Me pones un café?».", 5],
    ["FRE-082", "necesidades", "¿Puedo pagar con tarjeta?", "Можно заплатить картой?", "", "**poder** + инфинитив — «можно мне…?».", 5],
    ["FRE-083", "necesidades", "Tengo hambre.", "Я хочу есть. Я голоден.", "", "Буквально «у меня голод»: **tener** + существительное, как «tengo frío».", 5],
    ["FRE-084", "necesidades", "Tengo sed.", "Я хочу пить.", "", "Так же, как «tengo hambre».", 5],
    ["FRE-085", "compras", "¿Cuánto cuesta?", "Сколько это стоит?", "", "Об одной вещи. О нескольких — «¿Cuánto cuestan?».", 5],
    ["FRE-086", "compras", "¿Cuánto cuestan?", "Сколько они стоят?", "", "О нескольких вещах: «¿Cuánto cuestan las fresas?».", 5],
    ["FRE-087", "compras", "¿Cuánto es?", "Сколько с меня?", "", "Когда пора платить: спрашивают общую сумму.", 5],
    ["FRE-088", "compras", "¿Me pones un kilo de naranjas?", "Можно мне килограмм апельсинов?", "tú", "Обычная просьба в магазине и в баре: в Испании там обычно сразу на «tú». На «usted» (с пожилыми, в более официальном месте): «¿Me pone…?».", 5],
    ["FRE-089", "compras", "Quería una barra de pan.", "Я бы хотел(а) батон хлеба.", "", "**Quería** — вежливое «я бы хотел». Это готовая формула.", 5],
    ["FRE-090", "compras", "¿Algo más?", "Что-нибудь ещё?", "", "Так спрашивает продавец.", 5],
    ["FRE-091", "compras", "Nada más, gracias.", "Больше ничего, спасибо.", "", "Ответ на «¿Algo más?».", 5],
    ["FRE-092", "compras", "¿Qué talla tienes?", "Какой у тебя размер?", "tú", "В магазине обычно на «tú». На «usted»: «¿Qué talla tiene?».", 5],
    ["FRE-093", "compras", "¿Dónde está el probador?", "Где примерочная?", "", "В магазине одежды.", 5],
    ["FRE-094", "comer", "¿Me pones un café con leche?", "Можно мне кофе с молоком?", "tú", "Так заказывают в испанском баре — на «tú».", 5],
    ["FRE-095", "comer", "Para mí, una ensalada.", "Мне — салат.", "", "**Para mí** — «для меня, мне»: так заказывают в ресторане.", 5],
    ["FRE-096", "comer", "La cuenta, por favor.", "Счёт, пожалуйста.", "", "Счёт в Испании часто нужно попросить.", 5],
    ["FRE-097", "comer", "¡Qué rico!", "Как вкусно!", "", "**rico** о еде — «вкусный».", 5],
    # U6 (05/11/2026)
    ["FRE-098", "ciudad", "Perdone, ¿dónde está la estación?", "Простите, где вокзал?", "usted", "К незнакомому человеку на улице — **Perdone**, на «вы».", 6],
    ["FRE-099", "ciudad", "¿Cómo llego a la plaza?", "Как мне пройти на площадь?", "", "**llegar a** — дойти, доехать куда.", 6],
    ["FRE-100", "ciudad", "Sigue todo recto.", "Иди прямо.", "tú", "Повелительное на «ты»: **sigue**.", 6],
    ["FRE-101", "ciudad", "Gira a la derecha.", "Поверни направо.", "tú", "**gira** — повелительное от **girar**.", 6],
    ["FRE-102", "ciudad", "¿Está lejos?", "Это далеко?", "", "Где находится — **está**.", 6],
    ["FRE-103", "transporte", "¿Cuánto tardas?", "Сколько тебе ехать?", "tú", "**tardar** — сколько времени занимает дорога.", 6],
    ["FRE-104", "transporte", "Voy en metro.", "Я еду на метро.", "", "Транспорт — **en**, без артикля.", 6],
    ["FRE-105", "transporte", "Voy a pie.", "Я иду пешком.", "", "Пешком — **a pie**.", 6],
    ["FRE-106", "transporte", "Un billete de ida y vuelta, por favor.", "Билет туда и обратно, пожалуйста.", "", "В кассе — как в магазине.", 6],
    ["FRE-107", "planes", "¿Qué vas a hacer el sábado?", "Что ты будешь делать в субботу?", "tú", "Планы — **ir a** + инфинитив.", 6],
    ["FRE-108", "planes", "¡Vamos a comer!", "Пойдём поедим!", "", "**¡Vamos a…!** — давай(те)…!", 6],
    ["FRE-109", "salud", "Me duele la cabeza.", "У меня болит голова.", "", "**doler** — как **gustar**: **me duele**.", 6],
    ["FRE-110", "salud", "Tengo fiebre.", "У меня температура.", "", "Болезни — с **tener**.", 6],
    ["FRE-111", "salud", "¿Qué te pasa?", "Что с тобой?", "tú", "Так спрашивают, что случилось.", 6],
    ["FRE-112", "salud", "Quería pedir cita.", "Я бы хотел(а) записаться к врачу.", "", "**pedir cita** — записаться на приём.", 6],
    ["FRE-113", "salud", "Debes descansar.", "Тебе надо отдохнуть.", "tú", "Совет — **deber** + инфинитив.", 6],
    # U7 (12/11/2026): quedar, aceptar y rechazar, opinar, felicitar
    ["FRE-114", "planes", "¿Quedamos?", "Встретимся?", "", "Самый частый способ предложить встречу. Ответ: «Vale» или «¿A qué hora?».", 7],
    ["FRE-115", "planes", "¿Te apetece ir al cine?", "Хочешь пойти в кино?", "tú", "**¿Te apetece…?** + инфинитив или существительное — мягкое предложение. С usted: «¿Le apetece…?».", 7],
    ["FRE-116", "planes", "¿A qué hora quedamos?", "Во сколько встретимся?", "", "**quedar** — договориться о встрече.", 7],
    ["FRE-117", "planes", "Lo siento, no puedo.", "Извини, не могу.", "", "Вежливый отказ. Обычно добавляют причину: «…tengo que trabajar».", 7],
    ["FRE-118", "planes", "¿Y mejor el sábado?", "А может, лучше в субботу?", "", "Так предлагают другой день: **mejor** — «лучше».", 7],
    ["FRE-119", "planes", "¡Qué pena!", "Как жаль!", "", "Когда план не получается. Так же: «¡Qué lástima!».", 7],
    ["FRE-120", "planes", "No hay problema.", "Без проблем.", "", "Ответ, когда кто-то меняет план или извиняется.", 7],
    ["FRE-121", "opinar", "Yo también.", "Я тоже.", "", "Согласие с обычным глаголом: «Vivo en Barcelona. — Yo también.»", 7],
    ["FRE-122", "opinar", "A mí tampoco.", "Мне тоже нет.", "", "Согласие с отрицанием у глаголов как **gustar**: «No me gusta el fútbol. — A mí tampoco.»", 7],
    ["FRE-123", "opinar", "Tienes razón.", "Ты прав(а).", "tú", "Согласие с мнением. С usted: «Tiene razón».", 7],
    ["FRE-124", "opinar", "No estoy de acuerdo.", "Я не согласен (не согласна).", "", "Несогласие; «Estoy de acuerdo» — согласен.", 7],
    ["FRE-125", "opinar", "Me parece bien.", "Меня устраивает. По-моему, хорошо.", "", "Согласие с планом или идеей: **parecer** работает как **gustar**.", 7],
    ["FRE-126", "opinar", "Me cae muy bien.", "Он (она) мне очень нравится.", "", "О человеке: **caer bien** — нравиться как человек.", 7],
    ["FRE-127", "felicitar", "¡Felicidades!", "Поздравляю!", "", "С днём рождения, праздником или успехом. Всегда во множественном числе.", 7],
    ["FRE-128", "despedirse", "Un beso.", "Целую.", "", "Так заканчивают сообщение или разговор с друзьями и семьёй.", 7],
    ["FRE-129", "despedirse", "Un abrazo.", "Обнимаю.", "", "Как «Un beso», но чуть сдержаннее: так пишут и друзьям-мужчинам.", 7],
    ["FRE-130", "planes", "No pasa nada.", "Ничего страшного.", "", "Ответ, когда кто-то опаздывает или отменяет план. Это выражение, его учат целиком.", 7],
    # 12/11/2026 (Manu): las fórmulas sociales se enseñan como frases, no como palabras del léxico
    ["FRE-131", "agradecer", "¡Muchas gracias!", "Большое спасибо!", "", "Сильнее, чем «gracias». Ответ — «De nada».", 1],
    # U8 (13/11/2026): contar lo que pasó
    ["FRE-132", "contar", "¿Qué has hecho hoy?", "Что ты сегодня делал(а)?", "tú", "О сегодняшнем дне — **pretérito perfecto**: **has hecho**.", 8],
    ["FRE-133", "contar", "¿Qué tal el fin de semana?", "Как выходные?", "", "Вопрос без глагола. Так же: «¿Qué tal el viaje?», «¿Qué tal las vacaciones?».", 8],
    ["FRE-134", "contar", "Lo pasé muy bien.", "Я отлично провёл (провела) время.", "", "**pasarlo bien** — хорошо провести время. Плохо: «Lo pasé mal».", 8],
    ["FRE-135", "contar", "¿Qué pasó?", "Что случилось?", "", "**pasar** — «происходить». О том, что было только что: «¿Qué ha pasado?».", 8],
    ["FRE-136", "contar", "¡Qué mala suerte!", "Вот невезение!", "", "Когда у кого-то что-то пошло не так: потерялся чемодан, сломался телефон.", 8],
    # U9 (13/11/2026): historias, hábitos y cambios
    ["FRE-137", "contar", "Érase una vez…", "Жили-были…", "", "Так начинаются сказки. Дальше — **imperfecto**: «Érase una vez una niña que vivía en un bosque».", 9],
    ["FRE-138", "contar", "¡Qué susto!", "Как страшно! / Ну и напугал(а)!", "", "Когда что-то случилось неожиданно и было страшно.", 9],
    ["FRE-139", "contar", "¿Te acuerdas de…?", "Помнишь…?", "tú", "**acordarse de** — помнить: «¿Te acuerdas de tu primer colegio?».", 9],
    ["FRE-140", "contar", "Cuando era pequeño…", "Когда я был маленьким…", "", "Начало рассказа о детстве. Женщина говорит «Cuando era pequeña…». Дальше — **imperfecto**.", 9],
    ["FRE-141", "contar", "¡Cómo has cambiado!", "Как ты изменился (изменилась)!", "tú", "Человеку, которого давно не видел. **has cambiado** — perfecto: изменение до сегодняшнего дня.", 9]
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
        ["marta", "¡Uf! Me gusta más el calor.", "Уф! Мне больше нравится тепло."]], 4, "tiempo"],
    # U5 (05/11/2026)
    ["DLE-020", "На рынке", "En el mercado", ["dependienta", "ana"], [
        ["dependienta", "¡Buenos días! ¿Qué te pongo?", "Доброе утро! Что тебе дать?", "**¿Qué te pongo?** — так спрашивает продавец: в Испании в магазинах обычно сразу на «tú». **te** — «тебе» (урок 7)."],
        ["ana", "Buenos días. ¿Me pones un kilo de naranjas?", "Доброе утро. Можно мне килограмм апельсинов?"],
        ["dependienta", "Aquí tienes. ¿Algo más?", "Вот, пожалуйста. Что-нибудь ещё?", "**Aquí tienes** — «вот, пожалуйста»."],
        ["ana", "Sí, quería medio kilo de fresas. ¿Cuánto cuestan?", "Да, я бы хотела полкило клубники. Сколько она стоит?"],
        ["dependienta", "Cuestan cuatro euros el kilo.", "Четыре евро за килограмм.", "Цена за килограмм — **el kilo**."],
        ["ana", "Vale. Nada más, gracias. ¿Cuánto es?", "Хорошо. Больше ничего, спасибо. Сколько с меня?"],
        ["dependienta", "Son tres euros con cincuenta.", "Три евро пятьдесят."],
        ["ana", "Aquí tienes. ¡Adiós!", "Вот, пожалуйста. До свидания!"]], 5, "compras"],
    ["DLE-021", "В кафе", "En la cafetería", ["camarero", "lucia", "ana"], [
        ["camarero", "Hola, chicas. ¿Qué queréis tomar?", "Привет, девушки. Что будете?", "**tomar** — «брать, пить, есть» в кафе."],
        ["lucia", "Para mí, un café con leche.", "Мне кофе с молоком."],
        ["ana", "Yo quiero un zumo de naranja. ¿Tenéis tortilla?", "А я хочу апельсиновый сок. У вас есть тортилья?"],
        ["camarero", "Sí, claro. ¿Quieres un trozo?", "Да, конечно. Хочешь кусочек?"],
        ["ana", "Sí, por favor. Tengo mucha hambre.", "Да, пожалуйста. Я очень голодна.", "**hambre** — женского рода: **mucha hambre**."],
        ["lucia", "¿Qué tal la tortilla?", "Ну как тортилья?"],
        ["ana", "¡Muy rica! La cuenta, por favor.", "Очень вкусная! Счёт, пожалуйста."]], 5, "comer"],
    ["DLE-022", "Какой размер?", "¿Qué talla tienes?", ["ana", "lucia", "dependienta"], [
        ["ana", "Lucía, ¿te gusta esta falda?", "Лусия, тебе нравится эта юбка?"],
        ["lucia", "Sí, es muy bonita. Y no es cara.", "Да, очень красивая. И недорогая."],
        ["ana", "Hola, ¿tienes esta falda en la talla M?", "Привет! Есть эта юбка размера M?", "В магазине — на «tú»: **¿tienes…?**"],
        ["dependienta", "Sí, aquí está. El probador está a la derecha.", "Да, вот она. Примерочная справа."],
        ["ana", "Es un poco pequeña. ¿Tienes una talla más grande?", "Она немного маловата. А размер побольше есть?"],
        ["dependienta", "Sí, la L. Aquí la tienes.", "Да, L. Вот, пожалуйста.", "**la tienes** — **la** вместо «la falda»."],
        ["ana", "¡Ahora sí! La compro. ¿Puedo pagar con tarjeta?", "Вот теперь да! Беру. Можно заплатить картой?", "**La compro** — «её покупаю»: юбку уже назвали, поэтому **la**."],
        ["dependienta", "Sí, claro. Son treinta y cinco euros.", "Да, конечно. Тридцать пять евро."]], 5, "compras"],
    ["DLE-023", "Меню дня", "El menú del día", ["camarero", "marta", "pablo"], [
        ["camarero", "Buenas tardes. ¿Qué queréis de primero?", "Добрый день. Что будете на первое?", "**de primero** — «на первое». Официант говорит компании на «tú»: **queréis** (vosotros)."],
        ["marta", "Para mí, una ensalada.", "Мне салат."],
        ["pablo", "Yo, sopa. Y de segundo, pollo.", "Мне суп. А на второе — курицу."],
        ["marta", "Yo prefiero pescado. ¿Es fresco?", "А я лучше рыбу. Она свежая?"],
        ["camarero", "Sí, muy fresco. ¿Y para beber?", "Да, очень свежая. А пить что будете?"],
        ["pablo", "Agua sin gas y una copa de vino.", "Воду без газа и бокал вина."],
        ["camarero", "¿Queréis postre?", "Десерт будете?"],
        ["marta", "Sí, un helado de chocolate.", "Да, шоколадное мороженое."],
        ["pablo", "Yo no, gracias. La cuenta, por favor.", "Мне не надо, спасибо. Счёт, пожалуйста."]], 5, "comer"],
    ["DLE-024", "Список покупок", "Tenemos que comprar…", ["javier", "ana"], [
        ["javier", "Ana, el viernes hay una fiesta en clase. Tenemos que comprar comida y bebida.", "Аня, в пятницу в классе праздник. Нам надо купить еду и напитки.", "**tener que** + инфинитив — «надо, должен»."],
        ["ana", "¿Qué necesitamos?", "Что нам нужно?"],
        ["javier", "Pan, queso, jamón y mucha fruta.", "Хлеб, сыр, хамон и много фруктов.", "Без артикля: просто «хлеб, сыр» вообще."],
        ["ana", "¿Y cuántas botellas de agua?", "А сколько бутылок воды?"],
        ["javier", "Seis botellas de agua y zumo. No hay que comprar vino.", "Шесть бутылок воды и сок. Вино покупать не нужно."],
        ["ana", "¿Cuánto dinero tenemos?", "Сколько у нас денег?"],
        ["javier", "Cincuenta euros. Es bastante.", "Пятьдесят евро. Этого достаточно."],
        ["ana", "Vale. Yo compro la fruta y tú compras el pan.", "Хорошо. Я покупаю фрукты, а ты — хлеб."]], 5, "compras"],
    # U6 (05/11/2026)
    ["DLE-025", "Где вокзал?", "¿Dónde está la estación?", ["ana", "senor"], [
        ["ana", "Perdone, ¿dónde está la estación de tren?", "Простите, где железнодорожный вокзал?", "**Perdone** — к незнакомому, на «вы»."],
        ["senor", "Está un poco lejos. Sigue todo recto hasta la plaza.", "Немного далеко. Иди прямо до площади.", "**sigue** — повелительное на «ты»."],
        ["ana", "¿Y después?", "А потом?"],
        ["senor", "En la plaza, gira a la izquierda y cruza el puente. La estación está a la derecha.", "На площади поверни налево и перейди мост. Вокзал будет справа."],
        ["ana", "¿Cuánto tardo a pie?", "Сколько мне идти пешком?"],
        ["senor", "Unos veinte minutos. También puedes coger el autobús catorce.", "Минут двадцать. Можешь ещё сесть на четырнадцатый автобус."],
        ["ana", "Muchas gracias.", "Большое спасибо."],
        ["senor", "De nada.", "Не за что."]], 6, "ciudad"],
    ["DLE-026", "В метро", "Un billete, por favor", ["ana", "empleado"], [
        ["ana", "Hola. Un billete de ida y vuelta, por favor.", "Здравствуйте. Билет туда и обратно, пожалуйста."],
        ["empleado", "Son tres euros. ¿Adónde vas?", "Три евро. Куда едешь?"],
        ["ana", "Voy al aeropuerto. ¿Qué línea tengo que coger?", "Еду в аэропорт. На какую линию мне садиться?"],
        ["empleado", "Coge la línea uno y cambia a la línea ocho en la próxima estación.", "Садись на первую линию и пересядь на восьмую на следующей станции.", "**cambiar a la línea…** — пересесть на линию…"],
        ["ana", "¿Cuánto tardo?", "Сколько ехать?"],
        ["empleado", "Unos cuarenta minutos.", "Минут сорок."],
        ["ana", "Gracias.", "Спасибо."]], 6, "transporte"],
    ["DLE-027", "Планы на субботу", "¿Qué vas a hacer?", ["lucia", "ana"], [
        ["lucia", "Ana, ¿qué vas a hacer el sábado?", "Аня, что ты будешь делать в субботу?"],
        ["ana", "Nada. ¿Y tú?", "Ничего. А ты?"],
        ["lucia", "Voy a ir al museo con Pablo. ¿Vienes?", "Я пойду в музей с Пабло. Пойдёшь с нами?", "**voy a ir** — оба глагола могут быть **ir**."],
        ["ana", "¡Sí! ¿Cómo vamos?", "Да! А как поедем?"],
        ["lucia", "Vamos a ir en metro. Después vamos a comer en el centro.", "Поедем на метро. А потом пообедаем в центре."],
        ["ana", "¿A qué hora salimos?", "Во сколько выходим?"],
        ["lucia", "A las diez. Te llamo mañana.", "В десять. Позвоню тебе завтра."]], 6, "planes"],
    ["DLE-028", "В аптеке", "En la farmacia", ["farmaceutica", "ana"], [
        ["farmaceutica", "Buenas tardes. ¿Qué te pasa?", "Добрый день. Что с тобой?"],
        ["ana", "Me duele mucho la garganta y tengo tos.", "У меня сильно болит горло и кашель.", "**me duele** — как **me gusta**."],
        ["farmaceutica", "¿Tienes fiebre?", "Температура есть?"],
        ["ana", "No, fiebre no.", "Нет, температуры нет."],
        ["farmaceutica", "Toma estas pastillas, una cada ocho horas. Y debes beber mucha agua.", "Принимай эти таблетки, по одной каждые восемь часов. И тебе надо пить много воды.", "Совет — **debes** + инфинитив."],
        ["ana", "¿Necesito receta?", "Нужен рецепт?"],
        ["farmaceutica", "No. Son seis euros.", "Нет. Шесть евро."],
        ["ana", "Aquí tienes. Gracias.", "Вот, пожалуйста. Спасибо."]], 6, "salud"],
    ["DLE-029", "Записаться к врачу", "Quería pedir cita", ["recepcion", "pablo"], [
        ["recepcion", "Centro de salud, buenos días.", "Поликлиника, доброе утро."],
        ["pablo", "Buenos días. Quería pedir cita con el médico.", "Доброе утро. Я бы хотел записаться к врачу."],
        ["recepcion", "¿Qué te pasa?", "Что случилось?", "**te** — «тебе» (урок 7): и здесь обычно на «tú»."],
        ["pablo", "Me duele la espalda desde el lunes.", "У меня с понедельника болит спина.", "**desde el lunes** — с понедельника."],
        ["recepcion", "¿Puedes venir mañana a las diez?", "Можешь прийти завтра в десять?"],
        ["pablo", "Mañana no puedo: tengo que trabajar. ¿Y el jueves?", "Завтра не могу: мне надо работать. А в четверг?"],
        ["recepcion", "El jueves a las cinco de la tarde, ¿vale?", "В четверг в пять вечера, хорошо?"],
        ["pablo", "Muy bien, gracias.", "Хорошо, спасибо."]], 6, "salud"],
    # U7 (12/11/2026)
    ["DLE-030", "Встретимся в пятницу?", "¿Quedamos el viernes?", ["lucia", "ana"], [
        ["lucia", "Ana, ¿te apetece ir al cine el viernes?", "Аня, хочешь пойти в кино в пятницу?", "**¿Te apetece…?** — «тебе хочется…?»: так предлагают планы."],
        ["ana", "Lo siento, el viernes no puedo: tengo clase hasta las nueve.", "Извини, в пятницу не могу: у меня занятия до девяти."],
        ["lucia", "¡Qué pena! ¿Y mejor el sábado?", "Как жаль! А может, лучше в субботу?"],
        ["ana", "El sábado sí. ¿A qué hora quedamos?", "В субботу — да. Во сколько встретимся?"],
        ["lucia", "A las siete en la plaza. Después podemos cenar algo.", "В семь на площади. Потом можем где-нибудь поужинать."],
        ["ana", "¡Genial! Me parece un plan perfecto.", "Отлично! По-моему, прекрасный план.", "**Me parece** — «мне кажется»: как **me gusta**."],
        ["lucia", "Vale. Te escribo mañana.", "Хорошо. Напишу тебе завтра."],
        ["ana", "Perfecto. ¡Hasta el sábado!", "Отлично. До субботы!"]], 7, "planes"],
    ["DLE-031", "День рождения Марты", "El cumpleaños de Marta", ["pablo", "ana"], [
        ["pablo", "Hola, Ana. El domingo es el cumpleaños de Marta. ¿Vienes a la fiesta?", "Привет, Аня. В воскресенье у Марты день рождения. Придёшь на праздник?"],
        ["ana", "¡Claro! ¿A qué hora?", "Конечно! Во сколько?"],
        ["pablo", "A las ocho, en nuestra casa.", "В восемь, у нас дома."],
        ["ana", "¿Qué le regalo? ¿Qué le gusta?", "Что ей подарить? Что ей нравится?", "**le** — «ей»: кому дарим."],
        ["pablo", "Le encantan los libros y le gusta mucho viajar.", "Она обожает книги и очень любит путешествовать."],
        ["ana", "Entonces le regalamos un libro de viajes.", "Тогда подарим ей книгу о путешествиях."],
        ["pablo", "¡Perfecto! Le va a gustar mucho.", "Отлично! Ей очень понравится."],
        ["ana", "¡Genial! Hasta el domingo. Un beso.", "Здорово! До воскресенья. Целую."],
        ["pablo", "Un abrazo.", "Обнимаю."]], 7, "planes"],
    ["DLE-032", "Как тебе Барселона?", "¿Qué te parece Barcelona?", ["javier", "ana"], [
        ["javier", "Ana, ¿qué te parece Barcelona?", "Аня, как тебе Барселона?", "**¿Qué te parece…?** — «как тебе…?», «что ты думаешь о…?»"],
        ["ana", "Me encanta. Me gusta mucho el mar y me interesan los museos.", "Очень нравится. Мне очень нравится море, и меня интересуют музеи."],
        ["javier", "¿Y no te molesta nada?", "А тебе ничего не мешает?"],
        ["ana", "Sí, me molesta un poco la música de los bares por la noche.", "Да, меня немного раздражает музыка из баров по ночам."],
        ["javier", "A mí también. ¿Y la comida?", "Меня тоже. А еда?", "**A mí también** — согласие, когда в первой фразе **me molesta**."],
        ["ana", "La comida me parece muy buena, pero cenáis muy tarde.", "Еда, по-моему, очень хорошая, но вы очень поздно ужинаете."],
        ["javier", "Tienes razón. Y en Rusia, ¿a qué hora cenáis?", "Ты права. А в России во сколько вы ужинаете?"],
        ["ana", "Normalmente a las siete.", "Обычно в семь."]], 7, "gustos"],
    ["DLE-033", "Какая квартира лучше?", "¿Qué piso es mejor?", ["ana", "lucia"], [
        ["ana", "Lucía, me gustan dos pisos. ¿Cuál es mejor?", "Лусия, мне нравятся две квартиры. Какая лучше?"],
        ["lucia", "¿Cómo son?", "А какие они?"],
        ["ana", "El piso del centro es más pequeño que el otro, pero es más bonito.", "Квартира в центре меньше, чем другая, но красивее.", "**más** + прилагательное + **que** — сравнение."],
        ["lucia", "¿Y cuál es más caro?", "А какая дороже?"],
        ["ana", "El del centro es un poco más caro. El otro es tan grande como mi piso de Moscú.", "Та, что в центре, немного дороже. Другая такая же большая, как моя квартира в Москве."],
        ["lucia", "Para mí, el del centro es mejor: está cerca de todo.", "По-моему, та, что в центре, лучше: всё рядом.", "**mejor** — «лучше», а не «más bueno»."],
        ["ana", "Tienes razón. Además, el otro está lejos del metro.", "Ты права. К тому же другая далеко от метро."],
        ["lucia", "Entonces, ¡el del centro!", "Значит, та, что в центре!"]], 7, "casa"],
    ["DLE-034", "Соседи", "Los vecinos", ["marta", "ana"], [
        ["marta", "Ana, ¿te llevas bien con tus vecinos?", "Аня, ты ладишь с соседями?", "**llevarse bien con** — ладить с кем-то."],
        ["ana", "Sí, muy bien. Mi vecina es muy simpática. Me cae muy bien.", "Да, очень. Моя соседка очень приятная. Она мне очень нравится."],
        ["marta", "Yo no. Mi vecino es muy antipático y siempre discute con todos.", "А я нет. Мой сосед очень неприятный и всё время со всеми спорит."],
        ["ana", "¿Por qué?", "Почему?"],
        ["marta", "Porque le molesta todo: la música, las fiestas…", "Потому что его всё раздражает: музыка, вечеринки…", "**¿Por qué?** — вопрос; **porque** — ответ."],
        ["ana", "¡Qué pena! No me cae bien la gente antipática.", "Как жаль! Мне не нравятся неприятные люди."],
        ["marta", "A mí tampoco.", "Мне тоже."]], 7, "conocer"],
    # U8 (13/11/2026)
    ["DLE-035", "Что ты сегодня делала?", "¿Qué has hecho hoy?", ["lucia", "ana"], [
        ["lucia", "Hola, Ana. ¿Qué tal? ¿Qué has hecho hoy?", "Привет, Аня. Как дела? Что ты сегодня делала?", "О сегодняшнем дне — **perfecto**: **has hecho**."],
        ["ana", "Esta mañana he ido a clase y después he comido con Javier.", "Утром я ходила на занятия, а потом пообедала с Хавьером."],
        ["lucia", "¿Ya has terminado el libro de español?", "Ты уже дочитала книгу по испанскому?", "**ya** — «уже»."],
        ["ana", "Todavía no. Esta semana he tenido mucho trabajo.", "Ещё нет. На этой неделе у меня было много работы.", "**todavía no** — «ещё не»."],
        ["lucia", "Yo hoy no he hecho nada. ¡He dormido hasta las doce!", "А я сегодня ничего не делала. Я спала до двенадцати!"],
        ["ana", "¡Qué bien! ¿Y has comido ya?", "Здорово! А ты уже поела?"],
        ["lucia", "No, todavía no. ¿Vamos a tomar algo?", "Нет, ещё нет. Пойдём перекусим?"],
        ["ana", "Vale, vamos.", "Давай, пойдём."]], 8, "pasado"],
    ["DLE-036", "Выходные в Мадриде", "El fin de semana en Madrid", ["pablo", "ana"], [
        ["pablo", "Ana, ¿qué tal el fin de semana?", "Аня, как выходные?"],
        ["ana", "Muy bien. Fui a Madrid con Lucía.", "Очень хорошо. Я ездила в Мадрид с Лусией.", "О прошедших выходных — **indefinido**: **fui**."],
        ["pablo", "¡Qué bien! ¿Cómo fuisteis?", "Здорово! На чём вы ездили?"],
        ["ana", "En tren. Salimos el sábado por la mañana y llegamos a las once.", "На поезде. Мы выехали в субботу утром и приехали в одиннадцать."],
        ["pablo", "¿Y qué hicisteis?", "И что вы делали?"],
        ["ana", "Primero visitamos el centro y después comimos en un mercado.", "Сначала мы посмотрели центр, а потом поели на рынке.", "**primero… después…** — по порядку."],
        ["pablo", "¿Y el domingo?", "А в воскресенье?"],
        ["ana", "Fuimos a un museo y por la tarde volvimos a Barcelona. Lo pasé muy bien.", "Мы сходили в музей, а вечером вернулись в Барселону. Я отлично провела время."]], 8, "pasado"],
    ["DLE-037", "Ты когда-нибудь был в России?", "¿Alguna vez has estado en Rusia?", ["javier", "ana"], [
        ["javier", "Ana, ¿cuándo llegaste a Barcelona?", "Аня, когда ты приехала в Барселону?"],
        ["ana", "Llegué hace dos meses, en septiembre.", "Я приехала два месяца назад, в сентябре.", "**hace dos meses** — «два месяца назад»."],
        ["javier", "¿Y has estado en otras ciudades de España?", "А ты была в других городах Испании?"],
        ["ana", "Sí, he estado en Madrid. ¿Y tú? ¿Alguna vez has estado en Rusia?", "Да, я была в Мадриде. А ты? Ты когда-нибудь был в России?", "**alguna vez** — опыт за всю жизнь: perfecto."],
        ["javier", "Sí, una vez. Fui a Moscú hace cinco años, en invierno.", "Да, один раз. Я ездил в Москву пять лет назад, зимой."],
        ["ana", "¿Y qué tal?", "И как?"],
        ["javier", "Me encantó, pero hizo mucho frío.", "Мне очень понравилось, но было очень холодно."],
        ["ana", "¡Claro! En invierno siempre hace frío en Moscú.", "Конечно! Зимой в Москве всегда холодно."]], 8, "pasado"],
    ["DLE-038", "Я потеряла чемодан", "He perdido la maleta", ["ana", "lucia"], [
        ["lucia", "¡Ana! ¿Qué tal el viaje? ¿Qué ha pasado?", "Аня! Как поездка? Что случилось?"],
        ["ana", "¡Qué día! Mi maleta no ha llegado.", "Ну и день! Мой чемодан не прилетел."],
        ["lucia", "¡Qué mala suerte! ¿Y dónde está?", "Вот невезение! А где он?"],
        ["ana", "Se quedó en Madrid: el vuelo llegó muy tarde.", "Он остался в Мадриде: рейс прилетел очень поздно."],
        ["lucia", "¿Y qué te han dicho en el aeropuerto?", "А что тебе сказали в аэропорту?"],
        ["ana", "Que llega mañana por la mañana y lo traen a casa.", "Что он прилетит завтра утром и его привезут домой."],
        ["lucia", "Bueno, por fin algo bueno.", "Ну, наконец-то что-то хорошее."]], 8, "transporte"],
    ["DLE-039", "Жизнь моей бабушки", "La vida de mi abuela", ["marta", "ana"], [
        ["ana", "Marta, ¿esta es tu abuela?", "Марта, это твоя бабушка?"],
        ["marta", "Sí. Nació en un pueblo pequeño de España en 1940.", "Да. Она родилась в маленькой деревне в Испании в 1940 году.", "Биография — **indefinido**: **nació**."],
        ["ana", "¿Y cuándo llegó a Argentina?", "А когда она приехала в Аргентину?"],
        ["marta", "En 1960. Allí conoció a mi abuelo y se casaron dos años después.", "В 1960-м. Там она познакомилась с моим дедушкой, и через два года они поженились."],
        ["ana", "¿Tuvieron hijos?", "У них были дети?"],
        ["marta", "Sí, tres. Mi abuela trabajó en un colegio muchos años y se jubiló en 2005.", "Да, трое. Бабушка много лет работала в школе и вышла на пенсию в 2005 году."],
        ["ana", "¿Y ahora dónde vive?", "А сейчас где она живёт?"],
        ["marta", "Volvió a España hace diez años. Vive en Madrid, cerca de nosotros.", "Она вернулась в Испанию десять лет назад. Живёт в Мадриде, рядом с нами."]], 8, "pasado"],
    # U9 (13/11/2026)
    ["DLE-040", "Какой была Москва?", "¿Cómo era Moscú?", ["javier", "ana"], [
        ["javier", "Ana, ¿cómo era Moscú cuando eras pequeña?", "Аня, какой была Москва, когда ты была маленькой?", "Описание в прошлом — **imperfecto**: **era**, **eras**."],
        ["ana", "Era muy diferente. Había menos coches y no había tantas tiendas.", "Она была совсем другой. Было меньше машин и не было столько магазинов.", "**había** — прошедшее от **hay**."],
        ["javier", "¿Y dónde vivías?", "А где ты жила?"],
        ["ana", "Vivía con mis padres en un piso pequeño, cerca del centro.", "Я жила с родителями в маленькой квартире, недалеко от центра."],
        ["javier", "¿Tus padres todavía viven allí?", "Твои родители всё ещё там живут?"],
        ["ana", "No, ya no. Ahora viven en una casa en el campo.", "Нет, уже нет. Теперь они живут в доме за городом.", "**ya no** — «уже не»."],
        ["javier", "¿Y la ciudad ha cambiado mucho?", "А город сильно изменился?"],
        ["ana", "Sí, mucho. Antes era más tranquila; ahora es más moderna.", "Да, очень. Раньше он был спокойнее, а сейчас — современнее."]], 9, "pasado"],
    ["DLE-041", "В детстве…", "De pequeña…", ["lucia", "ana"], [
        ["lucia", "Ana, ¿qué hacías de pequeña?", "Аня, что ты делала в детстве?", "**de pequeña** — «в детстве» (о женщине)."],
        ["ana", "Jugaba mucho en el patio con mis amigos. ¿Y tú?", "Я много играла во дворе с друзьями. А ты?"],
        ["lucia", "Yo vivía en un pueblo. En verano solía ir al río con mi hermano.", "Я жила в деревне. Летом мы с братом обычно ходили на речку.", "**solía** + инфинитив — «обычно… (раньше)»."],
        ["ana", "¿Y ibas al colegio en el pueblo?", "А в школу ты ходила в деревне?"],
        ["lucia", "Sí. Me encantaba el recreo, pero no me gustaban los deberes.", "Да. Я обожала перемены, но не любила домашние задания."],
        ["ana", "¡A mí tampoco! Mi abuela me ayudaba con los deberes por las tardes.", "Я тоже! Бабушка помогала мне с уроками по вечерам."],
        ["lucia", "¿Te acuerdas de tus juguetes?", "Ты помнишь свои игрушки?"],
        ["ana", "Sí, tenía una muñeca muy bonita. ¡Todavía está en casa de mis padres!", "Да, у меня была очень красивая кукла. Она до сих пор у родителей дома!"]], 9, "pasado"],
    ["DLE-042", "Что ты делала?", "¿Qué estabas haciendo?", ["pablo", "marta"], [
        ["pablo", "Marta, te llamé ayer a las diez, pero no contestaste.", "Марта, я звонил тебе вчера в десять, но ты не ответила."],
        ["marta", "Lo siento, estaba durmiendo cuando sonó el teléfono.", "Прости, я спала, когда зазвонил телефон.", "Фон — **estaba durmiendo**; то, что случилось, — **sonó**."],
        ["pablo", "¿A las diez de la noche?", "В десять вечера?"],
        ["marta", "Sí, estaba muy cansada. Ayer trabajé nueve horas.", "Да, я очень устала. Вчера я работала девять часов.", "Долгое, но законченное действие — **indefinido**: **trabajé**."],
        ["pablo", "¡Nueve horas! ¿Y qué hiciste después?", "Девять часов! А что ты делала потом?"],
        ["marta", "Cené, vi la tele y después me fui a la cama.", "Я поужинала, посмотрела телевизор и потом пошла спать."]], 9, "pasado"],
    ["DLE-043", "Я только что пришла", "Acabo de llegar", ["lucia", "ana"], [
        ["lucia", "¡Ana! ¿Estás aquí desde hace mucho?", "Аня! Ты давно здесь?"],
        ["ana", "No, acabo de llegar.", "Нет, я только что пришла.", "**acabo de** + инфинитив — «только что»."],
        ["lucia", "¿Sigues estudiando español por las tardes?", "Ты всё ещё учишь испанский по вечерам?", "**seguir** + gerundio — «продолжать, всё ещё»."],
        ["ana", "Sí, sigo yendo a clase con Javier. ¿Y tú? ¿Todavía juegas al tenis?", "Да, я всё ещё хожу на занятия к Хавьеру. А ты? Всё ещё играешь в теннис?"],
        ["lucia", "No, ya no. Dejé de jugar el año pasado.", "Нет, уже нет. Я перестала играть в прошлом году.", "**dejar de** — «перестать»."],
        ["ana", "¡Qué pena! ¿No quieres volver a jugar?", "Как жаль! Не хочешь снова играть?", "**volver a** — «снова»."],
        ["lucia", "Quizá. Empecé a correr en septiembre y me encanta.", "Может быть. В сентябре я начала бегать, и мне очень нравится."]], 9, "conocer"],
    ["DLE-044", "У меня украли телефон!", "¡Me robaron el móvil!", ["marta", "ana"], [
        ["marta", "Ana, ¿qué te pasa? ¿Estás bien?", "Аня, что с тобой? Ты в порядке?"],
        ["ana", "¡Ayer me robaron el móvil en el metro!", "Вчера у меня украли телефон в метро!"],
        ["marta", "¡Qué mala suerte! ¿Cómo fue?", "Вот невезение! Как это было?"],
        ["ana", "Había mucha gente. Yo estaba escuchando música y de repente un chico cogió mi móvil y bajó del metro.", "Было много народу. Я слушала музыку, и вдруг какой-то парень схватил мой телефон и вышел из вагона.", "Фон — **había**, **estaba escuchando**; что случилось — **cogió**, **bajó**."],
        ["marta", "¿Y qué hiciste?", "И что ты сделала?"],
        ["ana", "Lo vi, pero el ladrón corrió muy rápido.", "Я его видела, но вор очень быстро убежал."],
        ["marta", "¿Y has ido a la policía?", "А ты ходила в полицию?"],
        ["ana", "Sí, he ido esta mañana. ¡Qué susto!", "Да, сходила сегодня утром. Ну и страху я натерпелась!"]], 9, "pasado"]

]

# Situaciones y funciones con su nombre en ruso (12/11/2026, página de Диалоги): el orden es el de las listas
SITUACIONES = [["conocer", "Знакомство"], ["casa", "Дом"], ["ciudad", "Город"], ["dia", "Распорядок дня"], ["gustos", "Что нравится"],
               ["tiempo", "Погода"], ["comer", "Кафе и ресторан"], ["compras", "Покупки"], ["transporte", "Транспорт"],
               ["planes", "Планы"], ["salud", "Здоровье"], ["pasado", "Что было"]]
FUNCIONES = [["saludar", "Поздороваться"], ["despedirse", "Попрощаться"], ["agradecer", "Вежливость"], ["entender", "Если не понимаешь"],
             ["presentarse", "Познакомиться"], ["hablar-de-uno", "Рассказать о себе"], ["datos", "Личные данные"], ["orientarse", "Где это?"],
             ["describir", "Описать"], ["tiempo", "Время и погода"], ["rutina", "Распорядок дня"], ["gustos", "Что нравится"],
             ["necesidades", "Хочу и нужно"], ["compras", "Покупки"], ["comer", "В кафе и ресторане"], ["ciudad", "Как пройти"],
             ["transporte", "Транспорт"], ["planes", "Планы"], ["salud", "Здоровье"], ["opinar", "Мнение"], ["felicitar", "Поздравить"], ["contar", "Рассказать о прошлом"]]
# Notas culturales (data-cultura-es.js) que cita cada frase y cada línea (12/11/2026): campo cul
CUL_FRASES = {"FRE-007": "CUE-001", "FRE-026": "CUE-001", "FRE-032": "CUE-002", "FRE-030": "CUE-003", "FRE-001": "CUE-004",
              "FRE-011": "CUE-004", "FRE-003": "CUE-006", "FRE-088": "CUE-008", "FRE-094": "CUE-008", "FRE-096": "CUE-008",
              "FRE-055": "CUE-009", "FRE-056": "CUE-009", "FRE-112": "CUE-010",
              "FRE-116": "CUE-011", "FRE-128": "CUE-003"}
CUL_LINEAS = {("DLE-001", 2): "CUE-001", ("DLE-002", 6): "CUE-001", ("DLE-007", 0): "CUE-001",
              ("DLE-002", 7): "CUE-002", ("DLE-004", 8): "CUE-002", ("DLE-020", 5): "CUE-002",
              ("DLE-004", 3): "CUE-003", ("DLE-009", 1): "CUE-003",
              ("DLE-001", 7): "CUE-004", ("DLE-020", 7): "CUE-004",
              ("DLE-001", 3): "CUE-005", ("DLE-007", 1): "CUE-005",
              ("DLE-002", 0): "CUE-006", ("DLE-015", 3): "CUE-006",
              ("DLE-023", 2): "CUE-007",
              ("DLE-020", 1): "CUE-008", ("DLE-021", 6): "CUE-008", ("DLE-023", 8): "CUE-008",
              ("DLE-012", 2): "CUE-009",
              ("DLE-028", 5): "CUE-010", ("DLE-029", 1): "CUE-010",
              ("DLE-030", 3): "CUE-011", ("DLE-031", 7): "CUE-003", ("DLE-030", 6): "CUE-002", ("DLE-032", 5): "CUE-006"}

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
    x = {"id": fid, "funcion": fun, "es": es, "tr": tr, "ru": ru, "registro": reg, "nivel": "A2" if (fila[6] if len(fila) > 6 else 1) >= 6 else "A1", "unidad": fila[6] if len(fila) > 6 else 1, "uso": uso, "lex": lex}
    if fid in CUL_FRASES: x["cul"] = CUL_FRASES[fid]
    fr_js.append(x)
dl_js = []
for dlg in DIALOGOS:   # [id, título ruso, título español, personajes, líneas, unidad?, situación?]
    did, tit, titEs, pers, lineas = dlg[:5]
    ls = []
    for n, l in enumerate(lineas):
        p, es, ru = l[0], l[1], l[2]
        obs = l[3] if len(l) > 3 else None
        dl = len(l) > 4 and l[4]
        tr, lex = linea(es, dl)
        x = {"p": p, "es": es, "tr": tr, "ru": ru, "lex": lex}
        f = frasesDe(es)
        if f: x["f"] = f
        if obs: x["obs"] = obs
        if (did, n) in CUL_LINEAS: x["cul"] = CUL_LINEAS[(did, n)]
        ls.append(x)
    dl_js.append({"id": did, "titulo": tit, "tituloEs": titEs, "situacion": dlg[6] if len(dlg) > 6 else "conocer", "nivel": "A2" if (dlg[5] if len(dlg) > 5 else 1) >= 6 else "A1", "unidad": dlg[5] if len(dlg) > 5 else 1, "personajes": pers, "lineas": ls})

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
     cul  nota cultural (CULTURA_ES, data-cultura-es.js) que cita (opcional)
   DLG_SITUACIONES_ES / DLG_FUNCIONES_ES: [clave, nombre en ruso], en el
   orden de las listas de la página de Диалоги (12/11/2026).
   DLG_PERSONAJES_ES: es = nombre en español, ru = en ruso, genero
   (elige la voz: core.js, azHablarEs). Registro de las frases: "tú",
   "usted" o "" (sirve para los dos).
   ============================================================ */

const DLG_PERSONAJES_ES = """ + json.dumps(PERSONAJES, ensure_ascii=False, indent=1) + """;

const DLG_SITUACIONES_ES = """ + J(SITUACIONES) + """;
const DLG_FUNCIONES_ES = """ + J(FUNCIONES) + """;

const FRASES_ES = [
""" + ",\n".join(" " + J(f) for f in fr_js) + """
];

const DIALOGOS_ES = [
""" + ",\n".join(" " + J(d) for d in dl_js) + """
];

function dialogoEsById(id) { return DIALOGOS_ES.find(d => d.id === id) || null; }
function fraseEsById(id) { return FRASES_ES.find(f => f.id === id) || null; }
if (typeof window !== "undefined") Object.assign(window, { DLG_PERSONAJES_ES, DLG_SITUACIONES_ES, DLG_FUNCIONES_ES, FRASES_ES, DIALOGOS_ES, dialogoEsById, fraseEsById });
"""
for d in dl_js: assert d["situacion"] in dict(SITUACIONES), d["id"]
for f in fr_js: assert f["funcion"] in dict(FUNCIONES), f["id"]
for k in CUL_LINEAS: assert any(d["id"] == k[0] and len(d["lineas"]) > k[1] for d in dl_js), k
open(OUT, "w").write(txt)
print("frases", len(fr_js), "diálogos", len(dl_js))
print("\n".join(sorted(faltan)))
