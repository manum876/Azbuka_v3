/* ============================================================
   DATA-UNIDAD-3.JS — Unidad 3: Sustantivos, género y número
   ------------------------------------------------------------
   Versión 27/09/2026. Contenido, vocabulario por tema (con emoji y
   un rótulo de significado para armar frases con sentido) y banco de
   ejercicios. Género, plural y formas de los adjetivos salen del
   léxico y de Casos: nunca se inventan.
   En esta unidad «número» es singular y plural (no los numerales).
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
  objetivo: "Reconocer el género de los sustantivos, formar el plural, usar los primeros adjetivos y describir objetos simples con cerca de 250 palabras nuevas.",
  tiempo: "30–35 horas",
  modulos: [
    { id: "u3m1", n: 1, tipo: "leccion", nPractica: 5, titulo: "¿Qué es un sustantivo?", resumen: "Personas, lugares, cosas… y sin artículos.",
      intro: "Un sustantivo es la palabra que nombra algo: una persona, un animal, un lugar, un objeto o una idea. En ruso, cada sustantivo tiene un género, y el género se ve en cómo termina la palabra.",
      secciones: [
        { titulo: "Sin artículos", texto: "El ruso no tiene «el», «la», «un» ni «una». Дом puede ser «casa», «una casa» o «la casa»: el contexto lo aclara. Э́то дом es «es una casa» o «esta es la casa».", destacado: "Дом = casa, una casa, la casa." },
        { titulo: "Tres géneros", texto: "En español hay dos géneros; en ruso hay tres: masculino, femenino y **neutro**. El género de una palabra rusa muchas veces no coincide con el español: дом es masculino y «casa» es femenina; окно́ es neutro y «ventana» es femenina." },
        { titulo: "La terminación manda", texto: "Casi siempre, el género se reconoce por la última letra: consonante → masculino (стол), **-а** o **-я** → femenino (ма́ма, ку́хня), **-о** o **-е** → neutro (окно́, мо́ре). Los módulos que siguen muestran cada caso y sus excepciones.", truco: "Mirá siempre el final de la palabra: ahí está el género." }
      ], tema: null },
    { id: "u3m2", n: 2, tipo: "leccion", titulo: "Género masculino", resumen: "Consonante, -й y algunas en -ь.", genero: "m",
      intro: "La mayoría de las palabras masculinas terminan en consonante. Es la regla más fácil del ruso.",
      secciones: [
        { titulo: "Terminan en consonante", texto: "Дом, стол, го́род, телефо́н, брат, кот: si la palabra termina en consonante, es masculina.", destacado: "Consonante al final = masculino." },
        { titulo: "Terminan en -й", texto: "Музе́й, трамва́й, чай: la **й** cuenta como consonante, así que también son masculinas." },
        { titulo: "Algunas terminan en -ь", texto: "Algunas palabras masculinas terminan en **-ь**: слова́рь, учи́тель, день, медве́дь. Con **-ь** no hay una regla clara, porque también hay femeninas que terminan así (las ves en el módulo 3). Lo más práctico es aprenderlas junto con un adjetivo, que muestra el género: большо́й слова́рь, но́вый учи́тель.", truco: "Las terminadas en -ь se aprenden con un adjetivo: большо́й слова́рь." }
      ] },
    { id: "u3m3", n: 3, tipo: "leccion", titulo: "Género femenino", resumen: "-а, -я y algunas en -ь.", genero: "f",
      intro: "Las palabras femeninas terminan casi siempre en **-а** o en **-я**.",
      secciones: [
        { titulo: "Terminan en -а", texto: "Маши́на, кни́га, де́вушка, ма́ма, ко́мната: si termina en **-а**, casi siempre es femenina.", destacado: "-а o -я al final = femenino (casi siempre)." },
        { titulo: "Terminan en -я", texto: "Неде́ля, ку́хня, семья́, фотогра́фия: **-я** también es femenino." },
        { titulo: "Algunas terminan en -ь", texto: "Algunas palabras femeninas también terminan en **-ь**: дверь, ночь, тетра́дь, крова́ть, пло́щадь. Como con las masculinas del módulo 2, no hay una regla: conviene aprenderlas con un adjetivo que las acompañe, porque el adjetivo muestra el género: больша́я дверь, но́вая тетра́дь.", truco: "Las terminadas en -ь se aprenden con un adjetivo: больша́я дверь, большо́й слова́рь." }
      ] },
    { id: "u3m4", n: 4, tipo: "leccion", titulo: "Género neutro", resumen: "-о, -е y las pocas en -мя.", genero: "n",
      intro: "El neutro no existe en español para los sustantivos, pero en ruso es muy común y fácil de reconocer.",
      secciones: [
        { titulo: "Terminan en -о o -е", texto: "Окно́, письмо́, сло́во, я́блоко, мо́ре, зда́ние, пла́тье: **-о** y **-е** al final son neutro.", destacado: "-о o -е al final = neutro." },
        { titulo: "Las de -мя", texto: "Вре́мя y и́мя terminan en **-я**, pero son neutras. Son pocas y muy usadas: vale la pena recordarlas." },
        { titulo: "Palabras que vienen de otros idiomas", texto: "Кафе́, метро́, такси́, пальто́ y кино́ son neutras y no cambian nunca, ni en plural: одно́ такси́, два такси́ (un taxi, dos taxis)." }
      ] },
    { id: "u3m5", n: 5, tipo: "leccion", nPractica: 5, titulo: "Excepciones", resumen: "Па́па, дя́дя, мужчи́на: masculinos en -а.",
      intro: "Algunas palabras terminan en **-а** o **-я** pero son masculinas. La razón es simple: nombran a un hombre.",
      secciones: [
        { titulo: "Hombres con terminación femenina", texto: "Па́па, дя́дя, мужчи́на, де́душка y los nombres como Ди́ма o Ми́ша terminan en **-а** o **-я**, pero son masculinos porque nombran a un hombre. Lo que manda es el significado.", destacado: "Мой па́па, мой дя́дя, большо́й мужчи́на (masculino)." },
        { titulo: "Кофе", texto: "Ко́фе termina en **-е** pero es masculino: мой ко́фе. En el habla informal también se oye como neutro, pero la forma correcta es masculina." },
        { titulo: "Las terminadas en -ь", texto: "Ya las viste: algunas son masculinas (слова́рь, учи́тель) y otras femeninas (дверь, ночь). No hay atajo: la forma más fácil de recordarlas es con un adjetivo, como большо́й слова́рь o больша́я дверь. Por eso en las tarjetas y en los ejercicios aparecen así." }
      ] },
    { id: "u3m6", n: 6, tipo: "leccion", titulo: "Singular y plural", resumen: "-ы, -и, -а, -я… y los plurales raros.",
      intro: "En ruso, el plural cambia la terminación. Hay pocas reglas y cubren casi todas las palabras.",
      secciones: [
        { titulo: "Masculino y femenino: -ы o -и", texto: "Masculino en consonante: se agrega **-ы** (стол → столы́). Femenino en **-а**: la **-а** pasa a **-ы** (маши́на → маши́ны). Las terminadas en **-я**, **-й** o **-ь** llevan **-и**: ку́хня → ку́хни, музе́й → музе́и, дверь → две́ри.", destacado: "-ы en general; -и después de -я, -й, -ь." },
        { titulo: "La regla de las 7 letras", texto: "Después de г, к, х, ж, ш, ч, щ nunca va ы: va и. Por eso кни́га → кни́ги, ма́льчик → ма́льчики, нож → ножи́. Es la misma regla de la Unidad 1.", truco: "Г К Х Ж Ш Ч Щ + и, nunca ы." },
        { titulo: "Neutro: -а o -я", texto: "Окно́ → о́кна, сло́во → слова́, мо́ре → моря́, зда́ние → зда́ния. Fijate que muchas veces el acento cambia de lugar: окно́ → о́кна." },
        { titulo: "Plurales especiales", texto: "Algunos plurales hay que aprenderlos de memoria: челове́к → лю́ди, ребёнок → де́ти, друг → друзья́, брат → бра́тья, стул → сту́лья, дом → дома́, го́род → города́. Y hay palabras que solo existen en plural: де́ньги, часы́, очки́, но́жницы." }
      ] },
    { id: "u3m7", n: 7, tipo: "leccion", titulo: "Primeros adjetivos", resumen: "Большо́й дом, больша́я маши́на.",
      intro: "El adjetivo copia el género y el número del sustantivo, igual que en español («casa blanca», «auto blanco»). La diferencia: en ruso hay una forma más, la del neutro.",
      tablaAdj: "m7",
      secciones: [
        { titulo: "Las cuatro formas", texto: "Masculino **-ый** / **-ий** / **-ой** (но́вый, си́ний, большо́й), femenino **-ая** / **-яя** (но́вая, си́няя), neutro **-ое** / **-ее** (но́вое, си́нее) y plural **-ые** / **-ие** (но́вые, си́ние). Va antes del sustantivo: но́вый дом, но́вая маши́на, но́вое окно́, но́вые дома́.", destacado: "но́вый дом · но́вая маши́на · но́вое окно́ · но́вые дома́" },
        { titulo: "Primero el género", texto: "Para elegir la forma del adjetivo, primero hay que saber el género del sustantivo. Por eso los módulos anteriores son la base: большо́й па́па (masculino, aunque termine en **-а**), больша́я дверь (femenino, aunque termine en **-ь**)." },
        { titulo: "Después de г, к, х, ж, ш, ч, щ", texto: "La regla de las 7 letras vuelve: ма́ленький (no «маленкый»), хоро́ший, больши́е. Por eso algunos adjetivos terminan en **-ий** y **-ие**." }
      ] },
    { id: "u3m8", n: 8, tipo: "vocabulario", titulo: "Vocabulario temático", resumen: "Personas, casa, ciudad, objetos, animales…",
      intro: "Unas diez palabras por tema, las más útiles para empezar. Tocá cada una para escucharla y ver su ficha; con las tarjetas las repasás de a una." },
    { id: "u3m9", n: 9, tipo: "leccion", tablaAdj: "m9", titulo: "Describir objetos", resumen: "Э́то большо́й дом. Дом большо́й.",
      intro: "Con lo que ya sabés alcanza para describir: qué es algo y cómo es.",
      secciones: [
        { titulo: "Э́то + adjetivo + sustantivo", texto: "Э́то большо́й дом («es una casa grande»), э́то но́вая маши́на («es un auto nuevo»), э́то краси́вый парк («es un parque lindo»). Como en la Unidad 2, no hace falta el verbo «ser»." },
        { titulo: "Sustantivo + adjetivo", texto: "Para decir cómo es algo, el adjetivo va después: дом большо́й («la casa es grande»), маши́на но́вая («el auto es nuevo»). El adjetivo sigue concordando en género.", destacado: "Э́то большо́й дом = es una casa grande. Дом большо́й = la casa es grande." },
        { titulo: "Он, она́, оно́: no repetir la palabra", texto: "Para no repetir el sustantivo, se lo reemplaza por он, она́ u оно́, igual que en español decimos «él» o «ella». La diferencia es que en ruso esto vale también para las cosas, y manda el género de la palabra rusa: дом es masculino, entonces он большо́й («es grande»); ла́мпа es femenino, entonces она́ но́вая («es nueva»); окно́ es neutro, entonces оно́ ма́ленькое («es chica»). En plural, siempre они́: дома́ → они́ больши́е («son grandes»)." }
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
  dictado: 2, "escuchar-elegir": 1, "palabra-es-ru": 2, significado: 1, imagen: 1, "es-ru": 1, "ru-es": 1, ordenar: 1, completar: 1 };

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
        opciones: baraja([s.pl].concat(ops), i + 11), correcta: s.pl, explicacion: s.ac + " → " + s.pl + "." }, base));
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
