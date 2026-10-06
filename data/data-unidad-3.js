/* ============================================================
   DATA-UNIDAD-3.JS — Unidad 3: Sustantivos, género y número
   ------------------------------------------------------------
   Versión 27/09/2026. Contenido, vocabulario por tema (con emoji y
   un rótulo de significado para armar frases con sentido) y banco de
   ejercicios. Género, plural y formas de los adjetivos salen del
   léxico y de Casos: nunca se inventan.
   En esta unidad «número» es singular y plural (no los numerales).
   06/10/2026, piloto de la profundización (PLAN_PROFUNDIZACION.md):
   teoría ampliada en los módulos 1 a 7 y 9 (ejemplos explicados, frase
   desarmada, errores típicos, chequeos y «Más a fondo»; cada sección con
   su id de regla) y siete tipos de ejercicio nuevos (porque, natural, par,
   oido, descubrir, diagnostico, cadena), con el campo regla en casi todo
   el banco para «Repasar la regla».
   ============================================================ */

/* Rótulo y emoji de cada sustantivo que puede aparecer: "ruso:rótulo:emoji". Rótulos (para saber qué
   adjetivos le quedan bien): P persona · A animal · L lugar o edificio ·
   H casa y ambientes · M mueble · O objeto · V vehículo · E escuela ·
   N naturaleza y comida. */
const U3_INFO = [
  { id: "personas", titulo: "Personas", items: "человек:P:🧍 мужчина:P:👨 женщина:P:👩 ребёнок:P:🧒 мальчик:P:👦 девочка:P:👧 девушка:P:👱‍♀️ парень:P:🧑 друг:P: подруга:P: семья:P:👪 мама:P:👩‍👧 папа:P:👨‍👧 брат:P: сестра:P: сын:P: дочь:P: муж:P: жена:P: бабушка:P:👵 дедушка:P:👴 дядя:P: тётя:P: сосед:P: соседка:P: люди:P:👥" },
  { id: "casa", titulo: "La casa", items: "дом:H:🏠 квартира:H: комната:H: кухня:H:🍳 спальня:H: ванная:H:🛁 туалет:H:🚽 окно:H:🪟 дверь:H:🚪 стол:M: стул:M:🪑 кровать:M:🛏️ диван:M:🛋️ кресло:M: шкаф:M: полка:M: лампа:O:💡 холодильник:M: плита:M: телевизор:O:📺 зеркало:O:🪞 ковёр:O: стена:H:🧱 пол:H: потолок:H: балкон:H: лестница:H:🪜 лифт:H:🛗 этаж:H: сад:H:🌳" },
  { id: "ciudad", titulo: "La ciudad", items: "город:L:🏙️ улица:L:🛣️ площадь:L: магазин:L:🏪 банк:L:🏦 метро:L:🚇 школа:L:🏫 университет:L:🎓 парк:L:🏞️ ресторан:L:🍽️ кафе:L: музей:L:🏛️ театр:L:🎭 кино:L:🎬 больница:L:🏥 аптека:L:💊 почта:L:📮 вокзал:L:🚉 аэропорт:L:✈️ гостиница:L:🏨 библиотека:L: церковь:L:⛪ рынок:L: мост:L:🌉 река:N:🌊 остановка:L:🚏 автобус:V:🚌 трамвай:V:🚋 машина:V:🚗 такси:V:🚕 офис:L:🏢 здание:L:🏗️" },
  { id: "objetos", titulo: "Objetos", items: "телефон:O:📱 компьютер:O:🖥️ ноутбук:O:💻 книга:E:📕 ручка:E:🖊️ карандаш:E:✏️ рюкзак:O:🎒 ключ:O:🔑 часы:O:⌚ сумка:O:👜 кошелёк:O:👛 очки:O:👓 зонт:O:☂️ чашка:O:☕ стакан:O: тарелка:O: ложка:O:🥄 вилка:O:🍴 нож:O:🔪 бутылка:O:🍾 письмо:O:✉️ газета:O:📰 журнал:O: фотография:O:📷 подарок:O:🎁 билет:O:🎫 паспорт:O:🛂 деньги:O:💵 коробка:O:📦 платье:O:👗 пальто:O:🧥" },
  { id: "animales", titulo: "Animales", items: "кот:A:🐈 кошка:A: собака:A:🐕 птица:A:🐦 рыба:A:🐟 лошадь:A:🐎 корова:A:🐄 свинья:A:🐖 мышь:A:🐁 медведь:A:🐻 волк:A:🐺 лиса:A:🦊 заяц:A:🐇 тигр:A:🐅 лев:A:🦁 слон:A:🐘 обезьяна:A:🐒 змея:A:🐍 утка:A:🦆 курица:A:🐔" },
  { id: "profesiones", titulo: "Profesiones", items: "учитель:P:🧑‍🏫 учительница:P:👩‍🏫 врач:P:🧑‍⚕️ медсестра:P:👩‍⚕️ инженер:P: архитектор:P: строитель:P:👷 программист:P:🧑‍💻 журналист:P: актёр:P: актриса:P: музыкант:P:🎸 повар:P:🧑‍🍳 официант:P: официантка:P: продавец:P: продавщица:P: водитель:P: полицейский:P:👮 юрист:P: менеджер:P:" },
  { id: "escuela", titulo: "La escuela", items: "тетрадь:E:📓 учебник:E:📘 словарь:E:📙 доска:E: мел:E: ластик:E: линейка:E:📏 ножницы:E:✂️ клей:E: пенал:E: бумага:E:📄 парта:E: класс:E: урок:E: задание:E:📋 упражнение:E:🏋🏼" },
  { id: "naturaleza", titulo: "Naturaleza y comida", items: "море:N:🌊 солнце:N:☀️ небо:N: поле:N:🌾 яблоко:N:🍎 молоко:N:🥛 мясо:N:🥩 кофе:N:☕ время:N:⏰ слово:N: место:N: чай:N:🫖" }
];

/* Lo que ve el alumno (27/09/2026, criterio de Manu: no más de unas 10
   palabras por tema, y ningún ejercicio con una palabra que no haya visto).
   · U3_VISTAS: las palabras que aparecen en cada módulo, en el orden en
     que se presentan (ejemplos de género, excepciones, tabla del plural).
   · U3_TEMAS: el vocabulario del módulo 8, unas 10 palabras por tema.
   Una palabra entra en los ejercicios a partir del primer módulo donde se ve. */
const U3_VISTAS = {
  1: "дом стол мама кухня окно море",
  2: "стол дом город телефон брат кот музей трамвай словарь учитель медведь",
  3: "машина книга девушка мама комната кухня семья фотография дверь тетрадь кровать площадь",
  4: "окно письмо слово яблоко море здание платье время кафе метро",
  5: "папа дядя мужчина дедушка кофе",
  6: "стол книга кухня музей дверь окно море человек ребёнок друг дом город"
};
const U3_TEMAS = [
  { id: "personas", titulo: "Personas", items: "человек мужчина женщина ребёнок мальчик девочка девушка друг подруга семья" },
  { id: "casa", titulo: "La casa", items: "дом квартира комната кухня окно дверь стол стул кровать лампа" },
  { id: "ciudad", titulo: "La ciudad", items: "город улица магазин банк школа парк ресторан музей машина автобус" },
  { id: "objetos", titulo: "Objetos", items: "телефон ноутбук книга ключ сумка кошелёк зонт чашка вилка фотография" },
  { id: "animales", titulo: "Animales", items: "кот собака птица рыба лошадь медведь лиса обезьяна утка слон" },
  { id: "profesiones", titulo: "Profesiones", items: "учитель врач медсестра инженер программист повар официант официантка продавщица полицейский" },
  { id: "escuela", titulo: "La escuela", items: "тетрадь учебник словарь линейка ножницы ластик пенал парта мел клей задание упражнение" },
  { id: "naturaleza", titulo: "Naturaleza y comida", items: "море солнце небо яблоко молоко мясо кофе чай время слово" }
];

/* Adjetivos: significado en español (masculino / femenino) y a qué
   rótulos les queda bien, para que las frases tengan sentido. */
const U3_ADJ = {
  "большо́й": ["grande", "grande", "AHLMOVEN"], "ма́ленький": ["chico", "chica", "AHLMOVEN"],
  "но́вый": ["nuevo", "nueva", "HLMOVE"], "ста́рый": ["viejo", "vieja", "PAHLMOVE"], "молодо́й": ["joven", "joven", "PA"],
  "хоро́ший": ["bueno", "buena", "PAHLMOVE"], "плохо́й": ["malo", "mala", "LMV"], "краси́вый": ["lindo", "linda", "PAHLMOVN"],
  "интере́сный": ["interesante", "interesante", "PLE"], "ску́чный": ["aburrido", "aburrida", "PLE"],
  "дорого́й": ["caro", "cara", "HMOV"], "дешёвый": ["barato", "barata", "HMOV"], "чи́стый": ["limpio", "limpia", "HMOV"], "гря́зный": ["sucio", "sucia", "HMOV"],
  "удо́бный": ["cómodo", "cómoda", "M"], "тяжёлый": ["pesado", "pesada", "MO"], "све́тлый": ["luminoso", "luminosa", "H"], "тёмный": ["oscuro", "oscura", "H"],
  "кра́сный": ["rojo", "roja", "MOV"], "си́ний": ["azul", "azul", "MOV"], "голубо́й": ["celeste", "celeste", "MOV"], "зелёный": ["verde", "verde", "MOV"],
  "жёлтый": ["amarillo", "amarilla", "MOV"], "бе́лый": ["blanco", "blanca", "AMOV"], "чёрный": ["negro", "negra", "AMOV"], "се́рый": ["gris", "gris", "AMOV"],
  "кори́чневый": ["marrón", "marrón", "AMOV"], "ро́зовый": ["rosa", "rosa", "MOV"], "ора́нжевый": ["naranja", "naranja", "MOV"], "фиоле́товый": ["violeta", "violeta", "MOV"]
};
/* Pares de adjetivos para palabras concretas (largo, alto, ancho): lista cerrada */
const U3_ADJ_PALABRAS = {
  "дли́нный": ["largo", "larga", ["улица", "река", "мост", "стол", "платье", "пальто", "письмо", "урок"]],
  "коро́ткий": ["corto", "corta", ["улица", "мост", "платье", "пальто", "письмо", "урок"]],
  "высо́кий": ["alto", "alta", ["мужчина", "женщина", "человек", "девушка", "парень", "здание", "дом", "потолок"]],
  "ни́зкий": ["bajo", "baja", ["стол", "стул", "потолок", "дом", "здание"]],
  "широ́кий": ["ancho", "ancha", ["улица", "река", "мост", "дверь", "окно", "кровать", "диван"]],
  "у́зкий": ["angosto", "angosta", ["улица", "река", "мост", "дверь", "окно", "кровать"]]
};
/* Adjetivos que se ven: el módulo 7 presenta los primeros (con sus cuatro
   formas) y el módulo 9 suma los de la descripción. Solo estos entran en
   los ejercicios. */
const U3_ADJ_M7 = ["большо́й", "ма́ленький", "но́вый", "ста́рый", "хоро́ший", "плохо́й", "краси́вый", "молодо́й", "си́ний", "бе́лый"];
const U3_ADJ_M9 = ["интере́сный", "ску́чный", "дорого́й", "дешёвый", "чи́стый", "гря́зный", "удо́бный", "тяжёлый", "све́тлый", "тёмный", "дли́нный", "коро́ткий",
  "высо́кий", "ни́зкий", "кра́сный", "зелёный", "жёлтый", "чёрный", "се́рый", "кори́чневый", "голубо́й", "ро́зовый", "ора́нжевый", "фиоле́товый"];

/* Traducciones para esta unidad cuando la del léxico es otra acepción */
const U3_GLOSA = { "доска": "pizarrón", "этаж": "piso (de un edificio)", "лёгкий": "liviano" };

/* Frases con traducción (dictado, traducción, ordenar) */
const U3_FRASES = [
  [1, "Э́то дом.", ["Es una casa.", "Esto es una casa."]], [1, "Э́то кни́га.", ["Es un libro.", "Esto es un libro."]], [1, "Э́то окно́.", ["Es una ventana.", "Esto es una ventana."]],
  [1, "Что э́то? Э́то стол.", ["¿Qué es esto? Es una mesa."]], [1, "Кто э́то? Э́то врач.", ["¿Quién es? Es un médico.", "¿Quién es? Es una médica."]],
  [2, "Э́то мой брат.", ["Es mi hermano.", "Este es mi hermano."]], [2, "Э́то музе́й.", ["Es un museo."]], [2, "Э́то слова́рь.", ["Es un diccionario."]],
  [3, "Э́то моя́ ма́ма.", ["Es mi mamá.", "Esta es mi mamá."]], [3, "Э́то моя́ кварти́ра.", ["Es mi departamento.", "Este es mi departamento."]], [3, "Э́то ку́хня.", ["Es la cocina.", "Es una cocina."]],
  [4, "Э́то моё окно́.", ["Es mi ventana.", "Esta es mi ventana."]], [4, "Э́то мо́ре.", ["Es el mar."]], [4, "Э́то ме́сто.", ["Es un lugar.", "Es el lugar."]],
  [5, "Э́то мой па́па.", ["Es mi papá.", "Este es mi papá."]], [5, "Э́то мой де́душка.", ["Es mi abuelo.", "Este es mi abuelo."]], [5, "Мой дя́дя — врач.", ["Mi tío es médico."]],
  [6, "Э́то столы́.", ["Son mesas.", "Estas son mesas."]], [6, "Э́то кни́ги.", ["Son libros.", "Estos son libros."]], [6, "Э́то о́кна.", ["Son ventanas.", "Estas son ventanas."]],
  [6, "Э́то мои́ друзья́.", ["Son mis amigos.", "Estos son mis amigos."]], [6, "Там лю́ди.", ["Ahí hay gente.", "Allá hay gente."]], [6, "Э́то де́ти.", ["Son chicos.", "Son niños."]],
  [7, "Э́то большо́й дом.", ["Es una casa grande."]], [7, "Э́то но́вая маши́на.", ["Es un auto nuevo."]], [7, "Э́то ма́ленькое окно́.", ["Es una ventana chica.", "Es una ventana pequeña."]],
  [7, "Э́то краси́вые дома́.", ["Son casas lindas."]], [7, "Э́то ста́рый го́род.", ["Es una ciudad vieja.", "Es una ciudad antigua."]],
  [9, "Дом большо́й.", ["La casa es grande."]], [9, "Маши́на но́вая.", ["El auto es nuevo."]], [9, "Окно́ ма́ленькое.", ["La ventana es chica.", "La ventana es pequeña."]],
  [9, "Он большо́й.", ["Es grande."]], [9, "Она́ но́вая.", ["Es nueva.", "Es nuevo."]], [9, "Оно́ ма́ленькое.", ["Es chico.", "Es chica.", "Es pequeño."]],
  [9, "Э́то краси́вый парк.", ["Es un parque lindo.", "Es un lindo parque."]], [9, "Ко́мната све́тлая.", ["La habitación es luminosa.", "El cuarto es luminoso."]],
  [9, "Моя́ ку́хня ма́ленькая.", ["Mi cocina es chica.", "Mi cocina es pequeña."]], [9, "Кни́га интере́сная.", ["El libro es interesante."]],
  [10, "Есть ку́хня.", ["Hay una cocina.", "Hay cocina."]], [10, "Есть окно́.", ["Hay una ventana."]], [10, "Есть стол и стул.", ["Hay una mesa y una silla."]]
];

const UNIDAD_3 = {
  id: 3,
  titulo: "Sustantivos, género y número",
  tituloRu: "Существи́тельные, род и число́",
  objetivo: "Reconocer el género de los sustantivos, formar el plural, usar los primeros adjetivos y describir objetos simples con unas 130 palabras.",
  tiempo: "3 a 4 semanas con práctica diaria (unas 15–20 horas)",
  modulos: [
    { id: "u3m1", n: 1, tipo: "leccion", nPractica: 5, titulo: "¿Qué es un sustantivo?", resumen: "Personas, lugares, cosas… y sin artículos.",
      intro: "Un sustantivo es la palabra que nombra algo: una persona, un animal, un lugar, un objeto o una idea. En ruso, cada sustantivo tiene un género, y el género se ve en cómo termina la palabra.",
      secciones: [
        { id: "u3-sin-articulos", titulo: "Sin artículos",
          texto: "El ruso no tiene «el», «la», «un» ni «una». Дом puede ser «casa», «una casa» o «la casa»: el contexto lo aclara. Y, como viste en la Unidad 2, en presente tampoco se dice el verbo «ser».",
          desarmar: { es: "Es una casa / Esta es la casa.", partes: [
            { txt: "Э́то", rol: "esto", nota: "Э́то señala algo: «esto», «eso». No cambia nunca." },
            { txt: "дом", rol: "qué es", nota: "Дом = casa. Sin artículo: según el contexto, «una casa» o «la casa»." }] },
          ejemplos: [
            { ru: "Э́то {окно́}.", es: "Es una ventana / Esta es la ventana.", por: "La misma frase sirve para «una» y para «la»: el ruso no las distingue." },
            { ru: "Э́то {ма́ма}.", es: "Es mamá / Esta es mamá.", por: "Ni artículo ni verbo: э́то y la palabra alcanzan." },
            { ru: "Где {кни́га}?", es: "¿Dónde está el libro?", por: "Где (Unidad 2) y la palabra. Tampoco hace falta «está»." }],
          destacado: "Дом = casa, una casa, la casa.",
          mas: { texto: "¿Cómo se sabe si es «una» o «la»? Por la situación. Si alguien señala una casa y dice Э́то дом, es «esta es la casa»; si responde a «¿qué es eso?», es «es una casa». Cuando hace falta precisar, el ruso usa otras palabras, como мой («mi»): мой дом, «mi casa».",
            ejemplos: [{ ru: "Э́то {мой} дом.", es: "Esta es mi casa.", por: "Мой ya dice de quién es: no hace falta nada más." }] },
          chequeo: [{ pide: "¿Cuál de las dos suena natural en ruso?", opciones: ["Э́то окно́.", "Э́то есть окно́."], ok: "Э́то окно́.", por: "En presente no se dice el verbo «ser»: э́то y la palabra." }] },
        { id: "u3-tres-generos", titulo: "Tres géneros",
          texto: "En español hay dos géneros; en ruso hay tres: masculino, femenino y **neutro**. Y el género de una palabra rusa muchas veces no coincide con el español: дом es masculino, aunque «casa» sea femenina; окно́ es neutro, aunque «ventana» sea femenina. Por eso el género se aprende mirando la palabra rusa, no pensando en la española.\nUna forma fácil de verlo es con мой («mi»), que tiene una forma para cada género:",
          ejemplos: [
            { ru: "{Мой} дом.", es: "Mi casa.", por: "Мой: masculino. «Casa» es femenina en español, pero дом no." },
            { ru: "{Моя́} ма́ма.", es: "Mi mamá.", por: "Моя́: femenino." },
            { ru: "{Моё} окно́.", es: "Mi ventana.", por: "Моё: neutro. «Ventana» es femenina en español; окно́ es neutro." }],
          destacado: "мой дом · моя́ ма́ма · моё окно́: «mi» tiene una forma por género.",
          mas: { texto: "El neutro no quiere decir «cosa». Стол (mesa) es masculino y кни́га (libro), femenino, aunque sean cosas. El género es gramatical: lo da la terminación de la palabra, no lo que nombra. La única excepción importante son las personas, que vas a ver en el módulo 5.\n¿Para qué sirve saberlo? Para que las palabras que acompañan al sustantivo concuerden con él: «mi», los adjetivos del módulo 7 y, más adelante, otras palabras." },
          chequeo: [{ pide: "¿Qué forma de «mi» va con окно́?", opciones: ["мой", "моя́", "моё"], ok: "моё", por: "Окно́ es neutro, así que va моё." }] },
        { id: "u3-terminacion", titulo: "La terminación manda",
          texto: "Casi siempre, el género se reconoce por la última letra:\nconsonante → masculino (стол)\n**-а** o **-я** → femenino (ма́ма, ку́хня)\n**-о** o **-е** → neutro (окно́, мо́ре)\nLos módulos que siguen muestran cada caso con más ejemplos, y las pocas excepciones.",
          truco: "Mirá siempre el final de la palabra: ahí está el género.",
          mas: { texto: "Hay tres grupos que no siguen esta regla, y los vas a ver uno por uno: las que terminan en **-ь**, que pueden ser masculinas o femeninas (módulos 2 y 3); unas pocas en **-мя**, que son neutras (módulo 4), y los hombres que terminan en **-а**, como па́па (módulo 5). Son pocas, pero muy usadas." },
          chequeo: [
            { pide: "Ры́ба: ¿qué género tiene?", opciones: ["masculino", "femenino", "neutro"], ok: "femenino", por: "Termina en **-а**." },
            { pide: "Хлеб: ¿qué género tiene?", opciones: ["masculino", "femenino", "neutro"], ok: "masculino", por: "Termina en consonante." },
            { pide: "Мо́ре: ¿qué género tiene?", opciones: ["masculino", "femenino", "neutro"], ok: "neutro", por: "Termina en **-е**." }] }
], tema: null },
    { id: "u3m2", n: 2, tipo: "leccion", titulo: "Género masculino", resumen: "Consonante, -й y algunas en -ь.", genero: "m",
      intro: "La mayoría de las palabras masculinas terminan en consonante. Es la regla más fácil del ruso.",
      secciones: [
        { id: "u3-masc-consonante", titulo: "Terminan en consonante",
          texto: "Дом, стол, го́род, телефо́н, брат, кот: si la palabra termina en consonante, es masculina. Es la regla más segura del ruso: casi no tiene excepciones.",
          ejemplos: [
            { ru: "{Мой} брат.", es: "Mi hermano.", por: "Брат termina en **т**, una consonante: masculino. Por eso va мой." },
            { ru: "Э́то {мой} телефо́н.", es: "Este es mi teléfono.", por: "Termina en **н**: masculino, igual que en español." },
            { ru: "Где {мой} стол?", es: "¿Dónde está mi mesa?", por: "Стол termina en **л**: masculino. En español «mesa» es femenina: no te guíes por el español." },
            { ru: "{Мой} го́род.", es: "Mi ciudad.", por: "Го́род termina en **д**: masculino, aunque «ciudad» sea femenina." }],
          destacado: "Consonante al final = masculino.",
          errores: [{ mal: "Моя́ стол.", bien: "{Мой} стол.", por: "Стол termina en consonante: masculino, aunque «mesa» sea femenina." }],
          chequeo: [{ pide: "Кот termina en **т**. ¿Qué género tiene?", opciones: ["masculino", "femenino", "neutro"], ok: "masculino", por: "Consonante al final: masculino." }] },
        { id: "u3-masc-i", titulo: "Terminan en -й",
          texto: "Музе́й, трамва́й, чай: la **й** cuenta como consonante, así que también son masculinas. Fijate en la diferencia con **-я**: чай termina en **й** y es masculino; ку́хня termina en **я** y es femenino.",
          ejemplos: [
            { ru: "{Мой} чай.", es: "Mi té.", por: "Чай termina en **й**: cuenta como consonante, masculino." },
            { ru: "Э́то {музе́й}.", es: "Es un museo.", por: "Музе́й termina en **й**: masculino." }],
          chequeo: [{ pide: "¿Cuál es masculina?", opciones: ["чай", "ку́хня"], ok: "чай", por: "Чай termina en **й**. Ку́хня termina en **я**: es femenina." }] },
        { id: "u3-masc-blando", titulo: "Algunas terminan en -ь",
          texto: "Algunas palabras masculinas terminan en **-ь**: слова́рь, учи́тель, день, медве́дь. Con **-ь** no hay una regla clara, porque también hay femeninas que terminan así (las ves en el módulo 3). Lo más práctico es aprenderlas junto con una palabra que muestre el género, como большо́й («grande») o мой.",
          ejemplos: [
            { ru: "{Большо́й} слова́рь.", es: "Un diccionario grande.", por: "Por la terminación no se sabe: большо́й, que es masculino, lo muestra." },
            { ru: "{Мой} учи́тель.", es: "Mi profesor.", por: "Учи́тель termina en **-ь**. Мой muestra que es masculino." }],
          truco: "Las terminadas en -ь se aprenden con un adjetivo: большо́й слова́рь.",
          mas: { texto: "Dos pistas que sí sirven. Las palabras que nombran a alguien por lo que hace y terminan en **-тель** son masculinas: учи́тель, преподава́тель (profesor de universidad). Y en la Unidad 1 viste otra: después de **ж**, **ш**, **ч**, **щ**, sin **ь** la palabra es masculina; con **ь**, femenina.",
            ejemplos: [{ ru: "{Мой} врач.", es: "Mi médico.", por: "Врач termina en **ч** sin **ь**: masculino." }] } }
] },
    { id: "u3m3", n: 3, tipo: "leccion", titulo: "Género femenino", resumen: "-а, -я y algunas en -ь.", genero: "f",
      intro: "Las palabras femeninas terminan casi siempre en **-а** o en **-я**.",
      secciones: [
        { id: "u3-fem-a", titulo: "Terminan en -а",
          texto: "Маши́на, кни́га, де́вушка, ма́ма, ко́мната: si termina en **-а**, casi siempre es femenina. Muchas no coinciden con el español: кни́га es femenina, aunque «libro» sea masculino.",
          ejemplos: [
            { ru: "{Моя́} кни́га.", es: "Mi libro.", por: "Кни́га termina en **-а**: femenino. Que «libro» sea masculino no importa." },
            { ru: "{Моя́} маши́на.", es: "Mi auto.", por: "Termina en **-а**: femenino. Otra vez, distinto del español." },
            { ru: "Где {моя́} ко́мната?", es: "¿Dónde está mi habitación?", por: "Ко́мната termina en **-а**: femenino, va моя́." }],
          destacado: "-а o -я al final = femenino (casi siempre).",
          errores: [{ mal: "Мой кни́га.", bien: "{Моя́} кни́га.", por: "Кни́га termina en **-а**: femenina, aunque «libro» sea masculino." }],
          chequeo: [{ pide: "¿Qué forma de «mi» va con шко́ла?", opciones: ["мой", "моя́", "моё"], ok: "моя́", por: "Шко́ла termina en **-а**: femenina." }] },
        { id: "u3-fem-ia", titulo: "Terminan en -я",
          texto: "Ку́хня, семья́, фотогра́фия: **-я** también es femenino.",
          ejemplos: [
            { ru: "{Моя́} семья́.", es: "Mi familia.", por: "Семья́ termina en **-я**: femenino." },
            { ru: "Э́то {ку́хня}.", es: "Es la cocina.", por: "Ку́хня termina en **-я**: femenino. No la confundas con **-й**: чай es masculino." }] },
        { id: "u3-fem-blando", titulo: "Algunas terminan en -ь",
          texto: "Algunas palabras femeninas también terminan en **-ь**: дверь, ночь, тетра́дь, крова́ть, пло́щадь. Como con las masculinas del módulo 2, no hay una regla: conviene aprenderlas con un adjetivo que las acompañe, porque el adjetivo muestra el género.",
          ejemplos: [
            { ru: "{Больша́я} дверь.", es: "Una puerta grande.", por: "Дверь termina en **-ь**: больша́я, que es femenino, lo muestra." },
            { ru: "{Моя́} тетра́дь.", es: "Mi cuaderno.", por: "Тетра́дь termina en **-ь** y es femenina, aunque «cuaderno» sea masculino." }],
          truco: "Las terminadas en -ь se aprenden con un adjetivo: больша́я дверь, большо́й слова́рь.",
          mas: { texto: "Una pista de la Unidad 1: si antes de la **ь** hay **ж**, **ш**, **ч** o **щ**, la palabra es femenina. Ночь y вещь son femeninas; врач, sin **ь**, es masculino.",
            ejemplos: [{ ru: "Э́то {вещь}.", es: "Es una cosa.", por: "Termina en **щь**: femenina." }] },
          chequeo: [{ pide: "Ночь termina en **чь**. ¿Masculino o femenino?", opciones: ["masculino", "femenino"], ok: "femenino", por: "**ч** con **ь** al final: femenino (Unidad 1)." }] }
] },
    { id: "u3m4", n: 4, tipo: "leccion", titulo: "Género neutro", resumen: "-о, -е y las pocas en -мя.", genero: "n",
      intro: "El neutro no existe en español para los sustantivos, pero en ruso es muy común y fácil de reconocer.",
      secciones: [
        { id: "u3-neutro", titulo: "Terminan en -о o -е",
          texto: "Окно́, письмо́, сло́во, я́блоко, мо́ре, зда́ние, пла́тье: **-о** y **-е** al final son neutro. Como en español no hay sustantivos neutros, es el género que más hay que mirar: en ruso, «mi ventana» es моё окно́.",
          ejemplos: [
            { ru: "{Моё} окно́.", es: "Mi ventana.", por: "Окно́ termina en **-о**: neutro, va моё." },
            { ru: "{Моё} письмо́.", es: "Mi carta.", por: "Termina en **-о**: neutro. «Carta» es femenina en español." },
            { ru: "Где {моё} я́блоко?", es: "¿Dónde está mi manzana?", por: "Я́блоко termina en **-о**: neutro." },
            { ru: "Э́то {мо́ре}.", es: "Es el mar.", por: "Мо́ре termina en **-е**: neutro." }],
          destacado: "-о o -е al final = neutro.",
          errores: [{ mal: "Моя́ окно́.", bien: "{Моё} окно́.", por: "Окно́ termina en **-о**: neutro. «Ventana» es femenina en español, pero en ruso no." }],
          chequeo: [{ pide: "¿Qué forma de «mi» va con сло́во?", opciones: ["мой", "моя́", "моё"], ok: "моё", por: "Сло́во termina en **-о**: neutro." }] },
        { id: "u3-neutro-mia", titulo: "Las de -мя",
          texto: "Вре́мя y и́мя terminan en **-я**, pero son neutras. Son pocas y muy usadas: vale la pena recordarlas.",
          ejemplos: [{ ru: "{Моё} и́мя.", es: "Mi nombre.", por: "Termina en **-я**, pero es de las de **-мя**: neutro, va моё." }],
          mas: { texto: "Son palabras muy antiguas que conservaron una terminación propia. Por eso no siguen la regla de **-я**. En el nivel de este curso, alcanza con recordar dos: вре́мя (tiempo) e и́мя (nombre)." } },
        { id: "u3-indeclinables", titulo: "Palabras que vienen de otros idiomas",
          texto: "Кафе́ y метро́ vienen de otros idiomas. Son neutras y no cambian nunca, ni en plural: «un subte» y «dos subtes» se dicen igual, метро́. Más adelante vas a ver otras palabras como estas, y todas funcionan así.",
          ejemplos: [
            { ru: "Где {метро́}?", es: "¿Dónde está el subte?", por: "Метро́ termina en **-о**: neutro, y nunca cambia." },
            { ru: "Э́то {кафе́}.", es: "Es un café (el lugar).", por: "Кафе́ es la cafetería: neutro. La bebida es ко́фе, y la vas a ver en el módulo 5." }] }
] },
    { id: "u3m5", n: 5, tipo: "leccion", nPractica: 5, titulo: "Excepciones", resumen: "Па́па, дя́дя, мужчи́на: masculinos en -а.",
      intro: "Algunas palabras terminan en **-а** o **-я** pero son masculinas. La razón es simple: nombran a un hombre.",
      secciones: [
        { id: "u3-hombres-a", titulo: "Hombres con terminación femenina",
          texto: "Па́па, дя́дя, мужчи́на, де́душка y nombres como Ди́ма terminan en **-а** o **-я**, pero son masculinos porque nombran a un hombre. Lo que manda es el significado.",
          ejemplos: [
            { ru: "{Мой} па́па.", es: "Mi papá.", por: "Termina en **-а**, pero nombra a un hombre: masculino, va мой." },
            { ru: "{Мой} дя́дя.", es: "Mi tío.", por: "Termina en **-я**, pero es un hombre: masculino." },
            { ru: "Э́то {мой} де́душка.", es: "Este es mi abuelo.", por: "Masculino por el significado." },
            { ru: "{Большо́й} мужчи́на.", es: "Un hombre grande.", por: "Мужчи́на termina en **-а**; большо́й, masculino, muestra el género." }],
          destacado: "Мой па́па, мой дя́дя, большо́й мужчи́на (masculino).",
          comparacion: "pasa algo parecido con «el día» o «el problema»: terminan en **-a** y son masculinas. En ruso, la razón casi siempre es que la palabra nombra a un hombre.",
          errores: [{ mal: "Моя́ па́па.", bien: "{Мой} па́па.", por: "Lo que manda es el significado: па́па es un hombre." }],
          mas: { texto: "Los rusos usan mucho los nombres cortos, y muchos de hombre terminan en **-а**, como Ди́ма. Todos son masculinos. Con estas palabras, lo que concuerda es masculino: мой, большо́й." },
          chequeo: [{ pide: "¿Qué forma va con де́душка?", opciones: ["мой", "моя́"], ok: "мой", por: "Де́душка nombra a un hombre: masculino." }] },
        { id: "u3-kofe", titulo: "Ко́фе",
          texto: "Ко́фе termina en **-е** pero es masculino: мой ко́фе. En el habla informal también se oye como neutro, pero la forma correcta es masculina. No lo confundas con кафе́ (módulo 4): кафе́ es el lugar, y es neutro.",
          ejemplos: [
            { ru: "Где {мой} ко́фе?", es: "¿Dónde está mi café?", por: "Ко́фе es masculino, aunque termine en **-е**." },
            { ru: "Э́то {кафе́}.", es: "Es una cafetería.", por: "Кафе́, el lugar: neutro." }] },
        { id: "u3-blando", titulo: "Las terminadas en -ь",
          texto: "Ya las viste: algunas son masculinas (слова́рь, учи́тель) y otras femeninas (дверь, ночь). No hay atajo: la forma más fácil de recordarlas es con un adjetivo, como большо́й слова́рь o больша́я дверь. Por eso en las tarjetas y en los ejercicios aparecen así.",
          ejemplos: [
            { ru: "{Большо́й} слова́рь.", es: "Un diccionario grande.", por: "Masculino: большо́й." },
            { ru: "{Больша́я} дверь.", es: "Una puerta grande.", por: "Femenino: больша́я." }],
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["больша́я слова́рь", "большо́й слова́рь"], ok: "большо́й слова́рь", por: "Слова́рь es masculino." }] }
] },
    { id: "u3m6", n: 6, tipo: "leccion", titulo: "Singular y plural", resumen: "-ы, -и, -а, -я… y los plurales raros.",
      intro: "En ruso, el plural cambia la terminación. Hay pocas reglas y cubren casi todas las palabras.",
      secciones: [
        { id: "u3-plural-y-i", titulo: "Masculino y femenino: -ы o -и",
          antes: { pide: "Стол → столы́, маши́на → маши́ны. ¿Cómo queda ры́ба en plural?", opciones: ["ры́бы", "ры́ба"], ok: "ры́бы", por: "La **-а** pasa a **-ы**, como en маши́на → маши́ны." },
          texto: "Masculino en consonante: se agrega **-ы** (стол → столы́). Femenino en **-а**: la **-а** pasa a **-ы** (маши́на → маши́ны). Las terminadas en **-я**, **-й** o **-ь** llevan **-и**: ку́хня → ку́хни, музе́й → музе́и, дверь → две́ри.",
          ejemplos: [
            { ru: "Э́то {столы́}.", es: "Son mesas.", por: "Стол termina en consonante: se agrega **-ы**." },
            { ru: "Где {маши́ны}?", es: "¿Dónde están los autos?", por: "Маши́на: la **-а** pasa a **-ы**." },
            { ru: "Э́то {музе́и}.", es: "Son museos.", por: "Музе́й: la **й** cambia por **и**." },
            { ru: "Где {две́ри}?", es: "¿Dónde están las puertas?", por: "Дверь termina en **-ь**: la **ь** cambia por **и**." }],
          destacado: "-ы en general; -и después de -я, -й, -ь.",
          errores: [{ mal: "столи́", bien: "{столы́}", por: "Después de una consonante como **л** va **-ы**. La **-и** es para **-я**, **-й**, **-ь** y las 7 letras de la sección siguiente." }],
          mas: { texto: "¿Por qué **-и** después de **-я**, **-й** y **-ь**? Porque esas palabras terminan en un sonido blando, y la **и** es la vocal blanda que corresponde a **ы** (lo viste en la Unidad 1: **ы** dura, **и** blanda). El plural respeta cómo suena la palabra." },
          chequeo: [{ pide: "¿Plural de ку́хня?", opciones: ["ку́хни", "ку́хны"], ok: "ку́хни", por: "**-я** pasa a **-и**." }] },
        { id: "u3-plural-7-letras", titulo: "La regla de las 7 letras",
          texto: "Después de г, к, х, ж, ш, ч, щ nunca va ы: va и. Por eso кни́га → кни́ги, ключ → ключи́, врач → врачи́. Es la misma regla de la Unidad 1.",
          ejemplos: [
            { ru: "Где {кни́ги}?", es: "¿Dónde están los libros?", por: "Кни́га haría **-ы**, pero después de **г** no va **ы**: queda кни́ги." },
            { ru: "Э́то {ключи́}.", es: "Son las llaves.", por: "Ключ termina en **ч**: se agrega **-и**, no **-ы**." }],
          truco: "Г К Х Ж Ш Ч Щ + и, nunca ы.",
          errores: [{ mal: "кни́гы", bien: "{кни́ги}", por: "Después de **г** nunca va **ы**." }],
          chequeo: [{ pide: "¿Plural de врач?", opciones: ["врачи́", "врачы́"], ok: "врачи́", por: "Termina en **ч**, una de las 7 letras: va **-и**." }] },
        { id: "u3-plural-neutro", titulo: "Neutro: -а o -я",
          texto: "Окно́ → о́кна, сло́во → слова́, мо́ре → моря́, зда́ние → зда́ния. **-о** pasa a **-а**, y **-е** pasa a **-я**. Fijate que muchas veces el acento cambia de lugar: окно́ → о́кна, сло́во → слова́.",
          ejemplos: [
            { ru: "Э́то {о́кна}.", es: "Son ventanas.", por: "**-о** pasa a **-а**, y el acento se mueve: окно́ → о́кна." },
            { ru: "Где {пи́сьма}?", es: "¿Dónde están las cartas?", por: "Письмо́ → пи́сьма: **-о** → **-а**, y el acento salta a la primera sílaba." },
            { ru: "Э́то {моря́}.", es: "Son mares.", por: "Мо́ре → моря́: **-е** pasa a **-я**." }],
          errores: [{ mal: "окны́", bien: "{о́кна}", por: "El neutro hace el plural en **-а**, no en **-ы**." }],
          mas: { texto: "¿Por qué se mueve el acento? En ruso, muchas palabras cortas cambian el acento entre el singular y el plural. No hay una regla simple: los rusos lo aprenden escuchando. Para vos, la ayuda es la marca de acento, que en Azbuka está siempre: leela y repetí con el audio. La tabla de abajo muestra el plural de cada palabra con su acento." },
          chequeo: [{ pide: "¿Plural de сло́во?", opciones: ["слова́", "сло́вы"], ok: "слова́", por: "Neutro en **-о**: el plural termina en **-а**." }] },
        { id: "u3-plural-especiales", titulo: "Plurales especiales",
          texto: "Algunos plurales hay que aprenderlos de memoria: челове́к → лю́ди, ребёнок → де́ти, друг → друзья́, брат → бра́тья, дом → дома́, го́род → города́. Son pocos y muy usados. Y hay palabras que solo existen en plural, como брю́ки (pantalón).",
          ejemplos: [
            { ru: "Где {де́ти}?", es: "¿Dónde están los chicos?", por: "Ребёнок → де́ти: en plural se usa otra palabra." },
            { ru: "Э́то мои́ {друзья́}.", es: "Son mis amigos.", por: "Друг → друзья́: un plural especial, en **-ья**." },
            { ru: "{Дома́} и {города́}.", es: "Casas y ciudades.", por: "Algunos masculinos hacen el plural en **-а**, con el acento al final." }],
          comparacion: "también hay palabras que se usan en plural, como «las tijeras» o «los anteojos». El ruso tiene las suyas, y no siempre coinciden: брю́ки es plural, aunque digamos «el pantalón».",
          mas: { texto: "Лю́ди y де́ти no salen de челове́к y ребёнок: son palabras distintas que el ruso usa como plural. En español pasa algo parecido con «persona» y «gente»: la idea es la misma, la palabra cambia." },
          chequeo: [{ pide: "¿Plural de челове́к?", opciones: ["лю́ди", "челове́ки"], ok: "лю́ди", por: "Es un plural especial: se usa otra palabra." }] }
] },
    { id: "u3m7", n: 7, tipo: "leccion", titulo: "Primeros adjetivos", resumen: "Большо́й дом, больша́я маши́на.",
      intro: "El adjetivo copia el género y el número del sustantivo, igual que en español («casa blanca», «auto blanco»). La diferencia: en ruso hay una forma más, la del neutro.",
      tablaAdj: "m7",
      secciones: [
        { id: "u3-adj-formas", titulo: "Las cuatro formas",
          texto: "Masculino **-ый** / **-ий** / **-ой** (но́вый, си́ний, большо́й), femenino **-ая** / **-яя** (но́вая, си́няя), neutro **-ое** / **-ее** (но́вое, си́нее) y plural **-ые** / **-ие** (но́вые, си́ние). Va antes del sustantivo: но́вый дом, но́вая маши́на, но́вое окно́, но́вые дома́.",
          ejemplos: [
            { ru: "{Но́вый} дом.", es: "Una casa nueva.", por: "Дом es masculino: но́вый, con **-ый**." },
            { ru: "{Но́вая} маши́на.", es: "Un auto nuevo.", por: "Маши́на es femenino: но́вая, con **-ая**. «Auto» es masculino en español, pero manda el ruso." },
            { ru: "{Но́вое} окно́.", es: "Una ventana nueva.", por: "Окно́ es neutro: но́вое, con **-ое**." },
            { ru: "{Но́вые} дома́.", es: "Casas nuevas.", por: "En plural hay una sola forma para los tres géneros: **-ые**." }],
          destacado: "но́вый дом · но́вая маши́на · но́вое окно́ · но́вые дома́",
          errores: [{ mal: "но́вый маши́на", bien: "{но́вая} маши́на", por: "Маши́на es femenino: el adjetivo termina en **-ая**." }],
          mas: { texto: "Una ayuda para no perderse: la terminación del adjetivo se parece a la del sustantivo. Femenino: **-а** en маши́на, **-ая** en но́вая. Neutro: **-о** en окно́, **-ое** en но́вое.\nEl masculino tiene tres terminaciones: **-ый** es la normal; **-ой** aparece cuando el acento cae en la terminación (большо́й, молодо́й), y **-ий**, después de las 7 letras (sección de abajo) y en unos pocos adjetivos «blandos» como си́ний, que llevan **я**, **е**, **и** en todas sus formas: си́няя, си́нее, си́ние." },
          chequeo: [
            { pide: "¿Qué forma va con кни́га?", opciones: ["но́вый", "но́вая", "но́вое"], ok: "но́вая", por: "Кни́га es femenino." },
            { pide: "¿Y con окно́?", opciones: ["но́вый", "но́вая", "но́вое"], ok: "но́вое", por: "Окно́ es neutro." }] },
        { id: "u3-adj-genero", titulo: "Primero el género",
          texto: "Para elegir la forma del adjetivo, primero hay que saber el género del sustantivo. Por eso los módulos anteriores son la base: con па́па va el masculino, aunque termine en **-а**, y con дверь va el femenino, aunque termine en **-ь**.",
          ejemplos: [
            { ru: "{Хоро́ший} па́па.", es: "Un buen papá.", por: "Па́па termina en **-а**, pero es un hombre: masculino, хоро́ший." },
            { ru: "{Ста́рая} дверь.", es: "Una puerta vieja.", por: "Дверь es femenina: ста́рая." },
            { ru: "{Хоро́ший} ко́фе.", es: "Un buen café.", por: "Ко́фе es masculino (módulo 5)." }],
          errores: [{ mal: "хоро́шая па́па", bien: "{хоро́ший} па́па", por: "Па́па es un hombre: masculino." }],
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["ста́рый дверь", "ста́рая дверь"], ok: "ста́рая дверь", por: "Дверь es femenina." }] },
        { id: "u3-adj-7-letras", titulo: "Después de г, к, х, ж, ш, ч, щ",
          texto: "La regla de las 7 letras vuelve: ма́ленький (no «маленкый»), хоро́ший, больши́е. Por eso algunos adjetivos terminan en **-ий** y **-ие**.",
          ejemplos: [
            { ru: "{Ма́ленький} дом.", es: "Una casa chica.", por: "Después de **к** va **-ий**, no **-ый**." },
            { ru: "{Хоро́шие} кни́ги.", es: "Buenos libros.", por: "Después de **ш**, el plural es **-ие**." }],
          errores: [{ mal: "ма́ленкый дом", bien: "{ма́ленький} дом", por: "Después de **к** no va **ы**: va **и**." }],
          mas: { texto: "Una más, para leer bien: después de **ж**, **ш**, **ч**, **щ**, cuando la terminación no lleva el acento, la **о** se escribe **е**. Por eso el neutro de хоро́ший es хоро́шее: хоро́шее окно́." } }
] },
    { id: "u3m8", n: 8, tipo: "vocabulario", titulo: "Vocabulario temático", resumen: "Personas, casa, ciudad, objetos, animales…",
      intro: "Unas diez palabras por tema, las más útiles para empezar. Tocá cada una para escucharla y ver su ficha; con las tarjetas las repasás de a una." },
    { id: "u3m9", n: 9, tipo: "leccion", tablaAdj: "m9", titulo: "Describir objetos", resumen: "Э́то большо́й дом. Дом большо́й.",
      intro: "Con lo que ya sabés alcanza para describir: qué es algo y cómo es.",
      secciones: [
        { id: "u3-eto-adj", titulo: "Э́то + adjetivo + sustantivo",
          texto: "Э́то большо́й дом («es una casa grande»), э́то но́вая маши́на («es un auto nuevo»), э́то краси́вый парк («es un parque lindo»). Como en la Unidad 2, no hace falta el verbo «ser».",
          ejemplos: [
            { ru: "Э́то {краси́вый} парк.", es: "Es un parque lindo.", por: "Парк es masculino: краси́вый." },
            { ru: "Э́то {но́вая} ла́мпа.", es: "Es una lámpara nueva.", por: "Ла́мпа es femenino: но́вая." }] },
        { id: "u3-sust-adj", titulo: "Sustantivo + adjetivo",
          texto: "Para decir cómo es algo, el adjetivo va después: дом большо́й («la casa es grande»), маши́на но́вая («el auto es nuevo»). El adjetivo sigue concordando en género.",
          desarmar: { es: "La casa es grande.", partes: [
            { txt: "Дом", rol: "de qué hablo", nota: "Дом: la cosa de la que hablamos." },
            { txt: "большо́й", rol: "cómo es", nota: "Después del sustantivo, el adjetivo dice cómo es. No hace falta «es»." }] },
          ejemplos: [
            { ru: "Э́то {большо́й} дом.", es: "Es una casa grande.", por: "Antes del sustantivo: nombra la cosa («una casa grande»)." },
            { ru: "Дом {большо́й}.", es: "La casa es grande.", por: "Después: dice cómo es. Las mismas palabras, otra idea." }],
          destacado: "Э́то большо́й дом = es una casa grande. Дом большо́й = la casa es grande.",
          chequeo: [{ pide: "¿Cuál dice «el auto es nuevo»?", opciones: ["Маши́на но́вая.", "Э́то но́вая маши́на."], ok: "Маши́на но́вая.", por: "El adjetivo después del sustantivo dice cómo es." }] },
        { id: "u3-pronombres", titulo: "Он, она́, оно́: no repetir la palabra",
          texto: "Para no repetir el sustantivo, se lo reemplaza por он, она́ u оно́, igual que en español decimos «él» o «ella». La diferencia es que en ruso esto vale también para las cosas, y manda el género de la palabra rusa: дом es masculino, entonces он большо́й («es grande»); ла́мпа es femenino, entonces она́ но́вая («es nueva»); окно́ es neutro, entonces оно́ ма́ленькое («es chica»). En plural, siempre они́: дома́ → они́ больши́е («son grandes»).",
          ejemplos: [
            { ru: "Где стол? — {Он} там.", es: "¿Dónde está la mesa? — Está ahí.", por: "Стол es masculino: он, aunque «mesa» sea femenina." },
            { ru: "Где кни́га? — {Она́} там.", es: "¿Dónde está el libro? — Está ahí.", por: "Кни́га es femenino: она́, aunque «libro» sea masculino." },
            { ru: "Где окно́? — {Оно́} там.", es: "¿Dónde está la ventana? — Está ahí.", por: "Окно́ es neutro: оно́." }],
          errores: [{ mal: "Где стол? — Она́ там.", bien: "Где стол? — {Он} там.", por: "Manda el género ruso: стол es masculino, aunque «mesa» sea femenina." }],
          chequeo: [{ pide: "Дом… ¿он, она́ u оно́?", opciones: ["он", "она́", "оно́"], ok: "он", por: "Дом es masculino." }] }
] },
    { id: "u3m10", n: 10, tipo: "proyecto", titulo: "Proyecto final", resumen: "Describir tu casa.",
      intro: "Describí tu casa o tu departamento en ruso: qué hay y cómo es. No importa que sea simple: la idea es escribir. Usá есть para decir que algo hay: есть ку́хня («hay una cocina»).",
      requisitos: [
        { txt: "Decir qué es (э́то…)", rx: "это [а-яе]+" },
        { txt: "Decir que algo hay (есть…)", rx: "есть [а-яе]+" },
        { txt: "Usar al menos dos adjetivos", rx: "([а-яе]+(ый|ий|ой|ая|яя|ое|ее|ые|ие)[ .,!]).*([а-яе]+(ый|ий|ой|ая|яя|ое|ее|ые|ие)[ .,!])" },
        { txt: "Usar un plural", rx: "(ы|и|а|я)[ .,!]" },
        { txt: "Al menos cinco frases", rx: "([^.!?]+[.!?]\\s*){5,}" }
      ],
      consejos: [
        { rx: "(большой|маленький|новый|старый|красивый) (кухня|комната|квартира|машина|дверь|кровать|лампа|полка)", msg: "Esa palabra es femenina: el adjetivo va en **-ая** (больша́я ку́хня, но́вая крова́ть)." },
        { rx: "(большой|маленький|новый|старый|красивый) (окно|зеркало|кресло)", msg: "Esa palabra es neutra: el adjetivo va en **-ое** (большо́е окно́)." },
        { rx: "есть есть", msg: "Sobra un есть." }
      ] },
    { id: "u3m11", n: 11, tipo: "examen", titulo: "Evaluación", resumen: "Género, plural, adjetivos y describir.",
      intro: "Veinticinco ejercicios en seis partes, más una descripción corta. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Género", tipos: ["genero", "pronombre"], n: 5 },
        { nombre: "Plural", tipos: ["plural", "singular", "plural-elegir"], n: 5 },
        { nombre: "Adjetivos", tipos: ["concordancia", "corregir"], n: 4 },
        { nombre: "Describir", tipos: ["describir", "adj-escribir"], n: 4 },
        { nombre: "Audio", tipos: ["dictado", "escuchar-elegir"], n: 4 },
        { nombre: "Vocabulario", tipos: ["palabra-es-ru", "imagen"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
function unidad3Modulo(id) { return UNIDAD_3.modulos.find(m => m.id === id) || null; }

/* Mezcla: ~65 % de producción */
const U3_MEZCLA = { genero: 2, pronombre: 1, plural: 2, singular: 1, "plural-elegir": 1, concordancia: 2, corregir: 1, describir: 2, "adj-escribir": 1,
  dictado: 2, "escuchar-elegir": 1, "palabra-es-ru": 2, significado: 1, imagen: 1, "es-ru": 1, "ru-es": 1, ordenar: 1, completar: 1,
  /* Tipos nuevos (06/10/2026): entender la regla, ~20 % de la sesión */
  porque: 1, natural: 1, par: 1, oido: 1, descubrir: 1, diagnostico: 1, cadena: 1 };

/* Datos armados una vez: sustantivos y adjetivos que el alumno ve en la
   unidad, con el módulo donde aparecen por primera vez («desde»), su género,
   plural y formas (del léxico y de Casos). */
function u3Datos() {
  if (u3Datos.cache) return u3Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porRu = {};
  LEXICON_COMER.forEach(e => { if (e.posNormalized === "sustantivo" || e.posNormalized === "adjetivo") { const k = sin(e.ru); if (!porRu[k]) porRu[k] = e; } });
  const info = {};
  U3_INFO.forEach(t => t.items.split(" ").forEach(it => { const [ru, tag, emoji] = it.split(":"); info[sin(ru)] = { tag, emoji: emoji || "", tema: t.id }; }));
  const desde = {}, tema = {};
  Object.keys(U3_VISTAS).forEach(m => U3_VISTAS[m].split(" ").forEach(ru => { const k = sin(ru); if (desde[k] == null) desde[k] = +m; }));
  U3_TEMAS.forEach(t => t.items.split(" ").forEach(ru => { const k = sin(ru); if (desde[k] == null) desde[k] = 8; tema[k] = t.id; }));
  const sust = [];
  Object.keys(desde).forEach(k => {
    const e = porRu[k], inf = info[k]; if (!e || !inf) return;
    const cz = CASOS[e.id] || {};
    sust.push({ id: e.id, ac: e.acento || e.ru, ru: e.ru, tag: inf.tag, emoji: inf.emoji, tema: tema[k] || inf.tema, desde: desde[k], g: e.gender || null,
      pl: cz.sg && cz.pl ? cz.pl[0] : null, soloPl: !cz.sg, indecl: cz.tipo === "indeclinable",
      es: U3_GLOSA[k] || (e.senses[0].es || "").split(/[,;(]/)[0].trim() });
  });
  const todos = Object.assign({}, U3_ADJ);
  Object.keys(U3_ADJ_PALABRAS).forEach(k => { todos[k] = [U3_ADJ_PALABRAS[k][0], U3_ADJ_PALABRAS[k][1], "", U3_ADJ_PALABRAS[k][2]]; });
  const adj = [];
  U3_ADJ_M7.concat(U3_ADJ_M9).forEach((ac, n) => {
    const e = porRu[sin(ac)], a = todos[ac]; if (!e || !CASOS[e.id] || !a) return;
    const cz = CASOS[e.id];
    adj.push({ id: e.id, ac, m: cz.m[0], f: cz.f[0], n: cz.n[0], pl: Array.isArray(cz.pl[0]) ? cz.pl[0][0] : cz.pl[0], esM: a[0], esF: a[1], tags: a[2], solo: a[3] || null,
      desde: n < U3_ADJ_M7.length ? 7 : 9 });
  });
  return (u3Datos.cache = { sust, adj });
}

function ejerciciosUnidad3() {
  const { sust, adj } = u3Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const sinAc = s => s.replace(/\u0301/g, "");
  const G = { m: "Masculino", f: "Femenino", n: "Neutro" };
  const PRON = { m: "он", f: "она́", n: "оно́", pl: "они́" };
  const modGen = { m: 2, f: 3, n: 4 };
  const excep = ["папа", "дядя", "мужчина", "дедушка", "кофе"];
  /* Por qué tiene ese género (para la explicación) */
  const porque = s => {
    const r = sin(s.ru), fin = r.slice(-1);
    if (excep.indexOf(r) >= 0) return s.ac + " es masculino aunque termine en " + fin + (r === "кофе" ? "." : ": nombra a un hombre.");
    if (s.indecl) return s.ac + " viene de otro idioma: es neutro y no cambia.";
    if (/мя$/.test(r)) return s.ac + " termina en -мя: es de las pocas neutras así.";
    if (fin === "ь") return s.ac + " termina en -ь: es " + (s.g === "m" ? "masculino" : "femenino") + ". Se aprende con un adjetivo: " + (s.g === "m" ? "большо́й " : "больша́я ") + s.ac + ".";
    if (/[ая]$/.test(r)) return s.ac + " termina en -" + fin + ": femenino.";
    if (/[ое]$/.test(r)) return s.ac + " termina en -" + fin + ": neutro.";
    return s.ac + " termina en consonante" + (fin === "й" ? " (-й)" : "") + ": masculino.";
  };
  const ok = (a, s) => a.solo ? a.solo.indexOf(sin(s.ru)) >= 0 : a.tags.indexOf(s.tag) >= 0;
  const forma = (a, s) => s.soloPl ? a.pl : a[s.g] || a.m;
  const esAdj = a => a.esM;   /* el adjetivo en su forma de diccionario (masculino) */

  sust.forEach((s, i) => {
    const base = { grupo: s.id, lex: [s.id], items: ["lex:" + s.id], oir: s.ru };
    const mv = Math.max(2, s.desde);          /* módulo de vocabulario: donde se vio */
    /* Vocabulario */
    out.push(Object.assign({ id: "U3-pal-" + s.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: mv, pide: "Escribí en ruso: «" + s.es + "»", audio: s.ru, audioManual: true,
      pista: "Empieza con " + s.ru[0].toUpperCase() + " y tiene " + s.ru.length + " letras.", esperadas: [s.ac], idioma: "ru", explicacion: s.ac + " — " + s.es }, base));
    out.push(Object.assign({ id: "U3-dic-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: mv, pide: "Escuchá y escribí la palabra.", audio: s.ru, esperadas: [s.ac], idioma: "ru",
      explicacion: s.ac + " — " + s.es }, base));
    const dis = baraja(sust.filter(x => x.tema === s.tema && x.id !== s.id && x.es !== s.es), i + 3).slice(0, 3);
    if (dis.length >= 2) out.push(Object.assign({ id: "U3-sig-" + s.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: mv, pide: "¿Qué significa?", grande: s.ac, audio: s.ru,
      opciones: baraja([s.es].concat(dis.map(x => x.es)), i + 5), correcta: s.es, explicacion: s.ac + " — " + s.es }, base));
    if (s.emoji) {
      const conE = baraja(sust.filter(x => x.emoji && x.id !== s.id && x.emoji !== s.emoji), i + 7).slice(0, 3);
      out.push(Object.assign({ id: "U3-img-" + s.id, tipo: "imagen", forma: "elegir", dificultad: 1, modulo: mv, pide: "¿Qué es?", grande: s.emoji,
        opciones: baraja([s.ac].concat(conE.map(x => x.ac)), i + 9), correcta: s.ac, explicacion: s.emoji + " " + s.ac + " — " + s.es }, base));
    }
    /* Género */
    if (s.g && !s.soloPl) {
      /* Módulos 2 a 4: las regulares se reparten entre los tres, así cada práctica
         mezcla los tres géneros; las de -ь, en el módulo de su género; las
         excepciones, en el 5. */
      const fin = sin(s.ru).slice(-1);
      const m = s.desde <= 5 ? Math.max(2, s.desde) : 8;
      out.push(Object.assign({ id: "U3-gen-" + s.id, tipo: "genero", forma: "elegir", dificultad: sin(s.ru).slice(-1) === "ь" || m === 5 ? 3 : 1, modulo: m,
        acumula: m <= 5, pide: "¿De qué género es?", grande: s.ac, audio: s.ru, opciones: ["Masculino", "Femenino", "Neutro"], correcta: G[s.g], explicacion: porque(s) + " Significa «" + s.es + "»." }, base));
      out.push(Object.assign({ id: "U3-pron-" + s.id, tipo: "pronombre", forma: "elegir", dificultad: 2, modulo: 9,
        pide: "¿Con qué pronombre la reemplazás?", grande: s.ac, audio: s.ru, opciones: ["он", "она́", "оно́"], correcta: PRON[s.g], explicacion: s.ac + " («" + s.es + "») es " + G[s.g].toLowerCase() + ": " + PRON[s.g] + "." }, base));
    }
    /* Plural */
    if (s.pl && !s.indecl && s.pl !== s.ac) {
      out.push(Object.assign({ id: "U3-plu-" + s.id, tipo: "plural", forma: "escribir", dificultad: 2, modulo: s.desde <= 6 ? 6 : 8, pide: "Escribí el plural.", grande: s.ac, audio: s.ru, audioManual: true, oir: s.pl,
        esperadas: [s.pl], idioma: "ru", explicacion: s.ac + " → " + s.pl + "." }, base));
      out.push(Object.assign({ id: "U3-sgl-" + s.id, tipo: "singular", forma: "escribir", dificultad: 2, modulo: s.desde <= 6 ? 6 : 8, pide: "Escuchá el plural y escribí el singular.", grande: s.pl, audio: s.pl,
        esperadas: [s.ac], idioma: "ru", explicacion: s.pl + " → " + s.ac + "." }, base));
      /* Plural equivocado verosímil: la otra vocal (-ы/-и) o la terminación «regular» */
      const r = sin(s.ru), p = sin(s.pl);
      const malos = new Set();
      if (/ы$/.test(p)) malos.add(p.slice(0, -1) + "и"); if (/и$/.test(p)) malos.add(p.slice(0, -1) + "ы");
      if (/[бвгджзклмнпрстфхцчшщ]$/.test(r)) malos.add(r + "ы");
      if (/а$/.test(r)) malos.add(r.slice(0, -1) + "ы"); if (/о$/.test(r)) malos.add(r.slice(0, -1) + "ы");
      malos.delete(p);
      const ops = [...malos].slice(0, 2);
      if (ops.length) out.push(Object.assign({ id: "U3-plel-" + s.id, tipo: "plural-elegir", forma: "elegir", dificultad: 2, modulo: s.desde <= 6 ? 6 : 8, pide: "¿Cuál es el plural?", grande: s.ac, audio: s.ru,
        /* Sin marcas de acento en las opciones: si solo la correcta las tuviera, se delataría (06/10/2026) */
        opciones: baraja([sinAc(s.pl)].concat(ops), i + 11), correcta: sinAc(s.pl), explicacion: s.ac + " → " + s.pl + "." }, base));
    }
    /* Adjetivos. Módulo 7: los del módulo 7 con las palabras vistas hasta ahí
       (elegir la forma, cuál está bien). Módulo 9: todos los adjetivos de la
       unidad con todas las palabras (describir, escribir, cuál está bien).
       Solo combinaciones con sentido (rótulos y listas cerradas). */
    if (s.soloPl && !s.pl) return;
    const nombre = s.soloPl ? s.pl || s.ac : s.ac;
    const combos = [];
    if (s.desde <= 7) baraja(adj.filter(a => a.desde === 7 && ok(a, s)), i + 13).slice(0, 2).forEach(a => combos.push([a, 7]));
    baraja(adj.filter(a => ok(a, s) && !combos.some(x => x[0] === a)), i + 17).slice(0, 2).forEach(a => combos.push([a, 9]));
    combos.forEach(([a, mod], k) => {
      const f = forma(a, s), frase = "Э́то " + f + " " + nombre + ".";
      const b2 = { grupo: s.id + "-" + a.id, lex: [a.id, s.id], items: ["lex:" + s.id, "lex:" + a.id], oir: frase };
      const todas = [a.m, a.f, a.n, a.pl];
      const mal = baraja(todas.filter(x => x !== f), i + k + 1)[0];
      const razon = s.soloPl ? s.ac + " es plural." : porque(s);
      out.push(Object.assign({ id: "U3-corr-" + s.id + "-" + a.id, tipo: "corregir", forma: "elegir", dificultad: 2, modulo: mod,
        pide: "¿Cuál está bien?", opciones: baraja([frase, "Э́то " + mal + " " + nombre + "."], i + k + 2), correcta: frase, explicacion: frase + " — " + razon }, b2));
      if (mod === 7) {
        out.push(Object.assign({ id: "U3-conc-" + s.id + "-" + a.id, tipo: "concordancia", forma: "elegir", dificultad: 2, modulo: 7,
          pide: "Elegí el adjetivo: «" + esAdj(a) + "».", grande: "_____ " + nombre, audio: frase, audioManual: true,
          opciones: baraja([...new Set(todas)], i + k), correcta: f, explicacion: razon + " Por eso " + f + "." }, b2));
      } else if (s.emoji) {
        out.push(Object.assign({ id: "U3-desc-" + s.id + "-" + a.id, tipo: "describir", forma: "escribir", dificultad: 3, modulo: 9,
          pide: "Describí la imagen con «" + esAdj(a) + "»: Э́то…", grande: s.emoji, esperadas: [frase, f + " " + s.ac + ".", s.ac + " " + f + "."], idioma: "ru", explicacion: frase }, b2));
      } else {
        out.push(Object.assign({ id: "U3-adjw-" + s.id + "-" + a.id, tipo: "adj-escribir", forma: "escribir", dificultad: 3, modulo: 9,
          pide: "Escribí en ruso, con el adjetivo delante: «" + s.es + "» + «" + esAdj(a) + "».", pista: s.ac + " + " + a.ac, esperadas: [f + " " + s.ac, frase], idioma: "ru",
          explicacion: f + " " + s.ac + ". " + (s.soloPl ? "" : porque(s)) }, b2));
      }
    });
  });


  /* ── Tipos nuevos (06/10/2026, PLAN_PROFUNDIZACION §4): practican entender la regla ── */
  const siete = /[гкхжшчщ]$/;
  const reglaGen = s => {
    const r = sin(s.ru), fin = r.slice(-1);
    if (r === "кофе") return "u3-kofe";
    if (excep.indexOf(r) >= 0) return "u3-hombres-a";
    if (s.indecl) return "u3-indeclinables";
    if (/мя$/.test(r)) return "u3-neutro-mia";
    if (fin === "ь") return s.g === "m" ? "u3-masc-blando" : "u3-fem-blando";
    if (fin === "а") return "u3-fem-a";
    if (fin === "я") return "u3-fem-ia";
    if (/[ое]$/.test(r)) return "u3-neutro";
    if (fin === "й") return "u3-masc-i";
    return "u3-masc-consonante";
  };
  /* Qué regla de plural sigue: la regular o un plural especial */
  const reglaPl = s => {
    const r = sin(s.ru), p = sin(s.pl), raiz = r.replace(/[аяйьое]$/, "");
    const iy = siete.test(raiz) || /[яйь]$/.test(r) ? "и" : "ы";
    if (/[ое]$/.test(r)) return p === raiz + (r.slice(-1) === "о" ? "а" : "я") ? "u3-plural-neutro" : "u3-plural-especiales";
    if (p !== raiz + iy) return "u3-plural-especiales";
    return siete.test(raiz) ? "u3-plural-7-letras" : "u3-plural-y-i";
  };
  /* La regla que decide la forma: el género raro (па́па, -ь), las 7 letras (-ий, -ие, -ее) o la concordancia común */
  const reglaAdj = (s, a) => {
    if (!s.soloPl && (excep.indexOf(sin(s.ru)) >= 0 || /ь$/.test(s.ru))) return "u3-adj-genero";
    const f = sin(forma(a, s));
    return siete.test(sin(a.m).replace(/(ый|ий|ой)$/, "")) && /(ий|ие|ее)$/.test(f) ? "u3-adj-7-letras" : "u3-adj-formas";
  };
  const porS = {}; sust.forEach(s => porS[s.id] = s);
  const porA = {}; adj.forEach(a => porA[a.id] = a);
  out.forEach(e => {
    const [sid, aid] = String(e.grupo).split(/-(?=CMR)/);
    const s = porS[sid], a = porA[aid];
    if (!s) return;
    if (e.tipo === "genero") e.regla = reglaGen(s);
    else if (e.tipo === "pronombre") e.regla = "u3-pronombres";
    else if (/^(plural|singular|plural-elegir)$/.test(e.tipo)) e.regla = reglaPl(s);
    else if (a && /^(corregir|concordancia|describir|adj-escribir)$/.test(e.tipo)) e.regla = reglaAdj(s, a);
  });

  /* Razones de género, para «¿Por qué?» */
  const RAZON = {
    "u3-masc-consonante": "Termina en consonante", "u3-masc-i": "Termina en -й", "u3-fem-a": "Termina en -а", "u3-fem-ia": "Termina en -я",
    "u3-neutro": "Termina en -о o -е", "u3-neutro-mia": "Es de las pocas en -мя", "u3-hombres-a": "Nombra a un hombre", "u3-indeclinables": "Viene de otro idioma"
  };
  const GENES = { m: "masculino", f: "femenino", n: "neutro" };
  const RAZON_MOD = { "u3-masc-consonante": 2, "u3-masc-i": 2, "u3-fem-a": 3, "u3-fem-ia": 3, "u3-neutro": 4, "u3-neutro-mia": 4, "u3-indeclinables": 4, "u3-hombres-a": 5 };
  const esFem = t => /a$/.test(t.split(/[,(]/)[0].trim()) && !/(día|mapa|problema|idioma|papá|tranvía|tema|programa)$/.test(t);
  const esMasc = t => /o$/.test(t.split(/[,(]/)[0].trim()) && !/(mano|foto|moto|radio)$/.test(t.split(/[,(]/)[0].trim());
  const parSg = [];   /* sustantivos con plural regular para «par», «oído», «descubrir» y la cadena */
  sust.forEach((s, i) => {
    const base = { grupo: s.id, lex: [s.id], items: ["lex:" + s.id] };
    const mv = Math.max(2, s.desde);
    /* ¿Por qué tiene ese género? (no las de -ь: ahí no hay razón) */
    if (s.g && !s.soloPl && !/ь$/.test(s.ru)) {
      const rg = reglaGen(s), ok = RAZON[rg];
      if (ok) {
        const mod = s.desde <= 5 ? Math.max(2, s.desde, RAZON_MOD[rg] || 2) : 8;   /* cuando ya se vio la palabra y su regla */
        /* Solo razones ya enseñadas en ese módulo o antes */
        const otras = baraja(Object.keys(RAZON).filter(k => k !== rg && RAZON_MOD[k] <= mod && !(rg === "u3-fem-a" && k === "u3-hombres-a") && !(rg === "u3-hombres-a" && k === "u3-fem-a")).map(k => RAZON[k]), i + 21).slice(0, 2);
        if (otras.length) out.push(Object.assign({ id: "U3-porq-" + s.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: mod, regla: rg, oir: s.ru,
          pide: s.ac[0].toUpperCase() + s.ac.slice(1) + " es " + GENES[s.g] + ". ¿Por qué?", grande: s.ac, audio: s.ru, audioManual: true,
          opciones: baraja([ok].concat(otras), i + 23), correcta: ok, explicacion: porque(s)[0].toUpperCase() + porque(s).slice(1) }, base));
      }
    }
    /* ¿Suena natural? El pronombre según el género ruso, no el español */
    if (s.g && !s.soloPl && s.desde <= 8 && ((s.g !== "f" && esFem(s.es)) || (s.g === "f" && esMasc(s.es)))) {
      const bien = "Где " + s.ac + "? — " + PRON[s.g][0].toUpperCase() + PRON[s.g].slice(1) + " там.";
      const malP = s.g === "f" ? "он" : "она́";
      const mal = "Где " + s.ac + "? — " + malP[0].toUpperCase() + malP.slice(1) + " там.";
      out.push(Object.assign({ id: "U3-nat-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u3-pronombres", oir: bien,
        pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], i + 25), correcta: bien,
        explicacion: s.ac + " es " + GENES[s.g] + ": se reemplaza por " + PRON[s.g] + ". Manda el género de la palabra rusa." }, base));
      /* Diagnosticar: el pronombre */
      out.push(Object.assign({ id: "U3-diag-pron-" + s.id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 9, regla: "u3-pronombres", oir: bien,
        grande: mal, opciones: ["El pronombre", "El género del adjetivo", "La terminación del plural"], correcta: "El pronombre", esperadas: [bien],
        explicacion: bien + " " + s.ac + " es " + GENES[s.g] + ": " + PRON[s.g] + "." }, base));
    }
    if (s.pl && !s.indecl && !s.soloPl && s.pl !== s.ac && s.g) parSg.push(s);
  });

  /* Oído: ¿singular o plural? y par mínimo de sentido */
  parSg.forEach((s, i) => {
    const base = { grupo: s.id, lex: [s.id], items: ["lex:" + s.id] };
    const m = s.desde <= 6 ? 6 : 8, uno = i % 2 === 0;
    out.push(Object.assign({ id: "U3-oido-" + s.id, tipo: "oido", forma: "elegir", dificultad: 2, modulo: m, regla: reglaPl(s),
      pide: "Escuchá: ¿qué palabra oíste?", audio: uno ? s.ru : s.pl, opciones: [s.ac, s.pl], correcta: uno ? s.ac : s.pl,
      explicacion: s.ac + " (singular) · " + s.pl + " (plural)." }, base));
    if (/^(persona|animal|objeto|casa|mueble|escuela|vehículo)$/.test(s.tag) || true) {
      const sg = "Где " + s.ac + "?", pl = "Где " + s.pl + "?";
      const pideVarias = i % 2 === 1;
      out.push(Object.assign({ id: "U3-par-" + s.id, tipo: "par", forma: "elegir", dificultad: 2, modulo: m, regla: reglaPl(s), oir: pideVarias ? pl : sg,
        pide: "¿Cuál pregunta por " + (pideVarias ? "varios" : "uno solo") + " («" + s.es + "»)?", opciones: baraja([sg, pl], i + 27), correcta: pideVarias ? pl : sg,
        explicacion: s.ac + " es singular; " + s.pl + ", plural." }, base));
    }
  });

  /* Descubrir: dos pares de la misma regla y uno para completar */
  /* Se agrupan por terminación (consonante, -а, -я, -й, -ь, -о, -е; las 7 letras aparte), así los dos ejemplos muestran el mismo cambio */
  const clase = s => { const r = sin(s.ru), raiz = r.replace(/[аяйьое]$/, ""); return (siete.test(raiz) ? "7" : "") + (/[аяйьое]$/.test(r) ? r.slice(-1) : "c"); };
  const porRegla = {};
  parSg.forEach(s => { if (reglaPl(s) !== "u3-plural-especiales") (porRegla[clase(s)] = porRegla[clase(s)] || []).push(s); });
  Object.keys(porRegla).forEach(k => {
    const l = porRegla[k], r = reglaPl(l[0]);
    l.forEach((s, i) => {
      const ej = baraja(l.filter(x => x !== s && x.desde <= Math.max(6, s.desde)), i + 31).slice(0, 2);
      if (ej.length < 2) return;
      const raiz = sin(s.ru).replace(/[аяйьое]$/, "");
      /* Un plural mal armado, el error típico: la otra vocal (-ы / -и), o -ы en el neutro */
      const malos = [/[ое]$/.test(sin(s.ru)) ? raiz + "ы" : sin(s.pl).slice(0, -1) + (/ы$/.test(sin(s.pl)) ? "и" : "ы")].filter(x => x !== sin(s.pl));
      out.push({ id: "U3-desc-pl-" + s.id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: s.desde <= 6 ? 6 : 8, regla: r, grupo: s.id, lex: [s.id], items: ["lex:" + s.id], oir: s.pl,
        pide: ej.map(x => x.ac + " → " + x.pl).join(" · ") + ". ¿Y " + s.ac + "?", opciones: baraja([sinAc(s.pl)].concat(malos), i + 33), correcta: sinAc(s.pl),
        explicacion: s.ac + " → " + s.pl + ": la misma regla que " + ej[0].ac + " → " + ej[0].pl + "." });
    });
  });

  /* Diagnosticar el adjetivo y transformación en cadena (módulo 9: todas las palabras y adjetivos) */
  parSg.forEach((s, i) => {
    const a = baraja(adj.filter(x => ok(x, s) && x.pl), i + 41)[0];
    if (!a) return;
    const f = forma(a, s), mal = baraja([a.m, a.f, a.n].filter(x => x !== f), i + 43)[0];
    const b2 = { grupo: s.id + "-" + a.id, lex: [a.id, s.id], items: ["lex:" + s.id, "lex:" + a.id] };
    const bien = "Э́то " + f + " " + s.ac + ".";
    out.push(Object.assign({ id: "U3-diag-adj-" + s.id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: Math.max(7, a.desde, s.desde), regla: reglaAdj(s, a), oir: bien,
      grande: "Э́то " + mal + " " + s.ac + ".", opciones: ["El género del adjetivo", "El pronombre", "La terminación del plural"], correcta: "El género del adjetivo", esperadas: [bien],
      explicacion: bien + " " + porque(s)[0].toUpperCase() + porque(s).slice(1) }, b2));
    out.push(Object.assign({ id: "U3-cad-" + s.id, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 9, regla: reglaAdj(s, a), oir: s.pl[0].toUpperCase() + s.pl.slice(1) + " " + a.pl + ".",
      pide: "Cambiá la frase paso a paso.", base: "Э́то " + s.ac + ".",
      pasos: [
        { pide: "Agregá el adjetivo «" + a.esM + "» (" + a.ac + ").", esperadas: [bien] },
        { pide: "Pasá todo al plural.", esperadas: ["Э́то " + a.pl + " " + s.pl + "."] },
        { pide: "Ahora poné el adjetivo después, para decir cómo son.", esperadas: [s.pl[0].toUpperCase() + s.pl.slice(1) + " " + a.pl + "."] }],
      explicacion: bien + " → Э́то " + a.pl + " " + s.pl + ". → " + s.pl[0].toUpperCase() + s.pl.slice(1) + " " + a.pl + ". En plural, una sola forma del adjetivo; después del sustantivo, dice cómo son." }, b2));
  });

  /* Frases */
  const pal = t => (t.match(/[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g) || []);
  U3_FRASES.forEach(([m, ru, es], i) => {
    const b = { grupo: "F3-" + i, oir: ru, items: [] };
    out.push(Object.assign({ id: "U3-fdic-" + i, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: m, pide: "Escuchá y escribí la frase.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es[0] }, b));
    out.push(Object.assign({ id: "U3-fesru-" + i, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: m, pide: "Escribí en ruso: «" + es[0] + "»", audio: ru, audioManual: true,
      esperadas: U3_FRASES.filter(x => x[2][0] === es[0]).map(x => x[1]), idioma: "ru", explicacion: ru }, b));
    out.push(Object.assign({ id: "U3-frues-" + i, tipo: "ru-es", forma: "escribir", dificultad: 2, modulo: m, pide: "¿Qué significa?", grande: ru, audio: ru, esperadas: es, idioma: "es", explicacion: ru + " — " + es.join(" / ") }, b));
    const otras = baraja(U3_FRASES.filter(x => x[1] !== ru), i + 3).slice(0, 2).map(x => x[1]);
    out.push(Object.assign({ id: "U3-fee-" + i, tipo: "escuchar-elegir", forma: "elegir", dificultad: 1, modulo: m, pide: "Escuchá: ¿qué frase es?", audio: ru,
      opciones: baraja([ru].concat(otras), i + 5), correcta: ru, explicacion: ru + " — " + es[0] }, b));
    const w = pal(ru);
    if (w.length >= 3) { let fi = baraja(w, i + 7); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U3-ford-" + i, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: m, pide: "Ordená las palabras: «" + es[0] + "»", audio: ru, fichas: fi, sep: " ", esperada: w.join(" "), explicacion: ru }, b)); }
    const ult = w[w.length - 1];
    if (w.length >= 2 && ult) out.push(Object.assign({ id: "U3-fcomp-" + i, tipo: "completar", forma: "escribir", dificultad: 2, modulo: m, pide: "Completá la frase.", grande: ru.replace(ult, "_____"), pista: es[0],
      audio: ru, audioManual: true, esperadas: [ult], idioma: "ru", explicacion: ru + " — " + es[0] }, b));
  });
  return out;
}

/* Palabra del día: una palabra con emoji de la unidad, fija por fecha */
function u3PalabraDelDia(fecha) {
  const { sust, adj } = u3Datos();
  const con = sust.filter(s => s.emoji && !s.soloPl);
  const d = fecha || new Date();
  const n = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  const s = con[n % con.length];
  const lindos = ["но́вый", "большо́й", "ма́ленький", "краси́вый", "ста́рый", "хоро́ший", "бе́лый", "чёрный"];
  const posibles = adj.filter(x => lindos.indexOf(x.ac) >= 0 && x.tags.indexOf(s.tag) >= 0);
  const a = posibles[n % Math.max(1, posibles.length)] || adj[0];
  const f = a ? a[s.g] || a.m : "";
  return Object.assign({}, s, { ejemplo: "Э́то " + f + " " + s.ac + ".", ejemploEs: (s.g === "f" ? a.esF : a.esM), adj: a });
}

window.UNIDAD_3 = UNIDAD_3;
window.unidad3Modulo = unidad3Modulo;
window.ejerciciosUnidad3 = ejerciciosUnidad3;
window.u3Datos = u3Datos;
window.u3PalabraDelDia = u3PalabraDelDia;
window.U3_MEZCLA = U3_MEZCLA;
