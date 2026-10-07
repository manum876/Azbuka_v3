/* ============================================================
   DATA-UNIDAD-12.JS — Unidad 12: Gramática B1
   ------------------------------------------------------------
   Versión 05/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 05/10/2026):
   · La Unidad 12 del esquema se divide en dos: esta (gramática B1,
     todo lo que se venía dejando como fórmula) y la 13 (consolidación
     y comunicación). El examen final pasa a ser la 14.
   · Módulos: pronombres en todos los casos · posesivos y э́тот ·
     plural I (genitivo plural y números) · plural II (dativo,
     instrumental, prepositivo; adjetivos) · aspecto I, II y III ·
     imperativo · comparar · todo junto · proyecto · evaluación.
   · 23 parejas de aspecto (прочита́ть, no проче́сть ni почита́ть;
     вы́учить, no научи́ть) y 12 comparativos (Casos, campo comp).
   Todas las formas salen de Casos y de Verbos.
   ============================================================ */

/* Pronombres: índice de caso → [nom, gen, dat, acc, ins, prep] */
const U12_PRON = ["я", "ты", "он", "она́", "мы", "вы", "они́"];
const U12_PRON_ES = ["yo", "vos", "él", "ella", "nosotros", "ustedes", "ellos"];
/* Frases con un pronombre: [caso, plantilla rusa ({} = pronombre), preposición, español por persona] */
const U12_PRON_FRASES = [
  [3, "Ма́ма зна́ет {}.", "", ["Mamá me conoce.", "Mamá te conoce.", "Mamá lo conoce (a él).", "Mamá la conoce (a ella).", "Mamá nos conoce.", "Mamá los conoce (a ustedes).", "Mamá los conoce (a ellos)."]],
  [1, "{} есть маши́на.", "у", ["Tengo auto.", "Tenés auto.", "Él tiene auto.", "Ella tiene auto.", "Tenemos auto.", "Ustedes tienen auto.", "Ellos tienen auto."]],
  [2, "А́нна звони́т {}.", "", ["Ana me llama.", "Ana te llama.", "Ana lo llama (a él).", "Ana la llama (a ella).", "Ana nos llama.", "Ana los llama (a ustedes).", "Ana los llama (a ellos)."]],
  [4, "А́нна гуля́ет {}.", "с", ["Ana pasea conmigo.", "Ana pasea con vos.", "Ana pasea con él.", "Ana pasea con ella.", "Ana pasea con nosotros.", "Ana pasea con ustedes.", "Ana pasea con ellos."]],
  [5, "А́нна ду́мает {}.", "о", ["Ana piensa en mí.", "Ana piensa en vos.", "Ana piensa en él.", "Ana piensa en ella.", "Ana piensa en nosotros.", "Ana piensa en ustedes.", "Ana piensa en ellos."]]
];
/* Posesivos: ruso → [español m, español f] */
/* «mi hermano», «su hermano (de ustedes)» */
const U12_POS = { "мой": ["mi {}", "mi {}"], "твой": ["tu {}", "tu {}"], "наш": ["nuestro {}", "nuestra {}"], "ваш": ["su {} (de ustedes)", "su {} (de ustedes)"] };
/* Personas para los posesivos: ruso → español */
const U12_POS_PERS = { "брат": "hermano", "сестра́": "hermana", "друг": "amigo", "подру́га": "amiga", "ма́ма": "mamá", "па́па": "papá", "учи́тель": "maestro" };
/* Frases con posesivo + persona: [caso, plantilla ({} = posesivo y persona), español ({} = «mi hermano»)] */
const U12_POS_FRASES = [
  [2, "Я звоню́ {}.", "Llamo a {}."],
  [4, "Я гуля́ю с {}.", "Paseo con {}."],
  [1, "У {} есть соба́ка.", "{} tiene un perro."],
  [5, "Я ду́маю о {}.", "Pienso en {}."],
  [3, "Я люблю́ {}.", "Quiero a {}."]
];
/* его́ / её / их: no cambian */
const U12_SU = [
  ["Я звоню́ его́ ма́ме.", "его́", ["его́", "ему́", "него́", "им"], "Llamo a la mamá de él."],
  ["У её бра́та есть соба́ка.", "её", ["её", "неё", "ей", "ней"], "El hermano de ella tiene un perro."],
  ["Я гуля́ю с их соба́кой.", "их", ["их", "ни́ми", "и́ми", "них"], "Paseo con el perro de ellos."],
  ["Мы ду́маем о его́ рабо́те.", "его́", ["его́", "нём", "него́", "ему́"], "Pensamos en el trabajo de él."],
  ["Я помога́ю её сестре́.", "её", ["её", "ей", "ней", "неё"], "Ayudo a la hermana de ella."],
  ["У их сы́на есть маши́на.", "их", ["их", "них", "им", "ним"], "El hijo de ellos tiene auto."]
];
/* э́тот: [frase, forma de э́тот, español] */
const U12_ESTE = [
  ["Я живу́ в э́том до́ме.", "э́том", "Vivo en esta casa."],
  ["Я живу́ в э́той кварти́ре.", "э́той", "Vivo en este departamento."],
  ["Мне нра́вится э́тот го́род.", "э́тот", "Me gusta esta ciudad."],
  ["Мне нра́вится э́та кни́га.", "э́та", "Me gusta este libro."],
  ["Я хочу́ купи́ть э́ту руба́шку.", "э́ту", "Quiero comprar esta camisa."],
  ["Я хочу́ купи́ть э́тот телефо́н.", "э́тот", "Quiero comprar este teléfono."],
  ["Мы говори́м об э́том фи́льме.", "э́том", "Hablamos de esta película."],
  ["Я рабо́таю с э́тим челове́ком.", "э́тим", "Trabajo con esta persona."],
  ["У э́той де́вушки есть соба́ка.", "э́той", "Esta chica tiene un perro."],
  ["Я звоню́ э́тому врачу́.", "э́тому", "Llamo a este médico."]
];
/* Sustantivos para el plural: ruso → [singular, plural, emoji] */
const U12_PL = {
  "студе́нт": ["un estudiante", "estudiantes", "🧑‍🎓"], "кни́га": ["un libro", "libros", "📚"], "маши́на": ["un auto", "autos", "🚗"], "сло́во": ["una palabra", "palabras", "🔤"],
  "письмо́": ["una carta", "cartas", "✉️"], "друг": ["un amigo", "amigos", "🧑‍🤝‍🧑"], "брат": ["un hermano", "hermanos", "👦"], "сестра́": ["una hermana", "hermanas", "👧"],
  "учи́тель": ["un maestro", "maestros", "🧑‍🏫"], "врач": ["un médico", "médicos", "🩺"], "музе́й": ["un museo", "museos", "🏛️"], "ру́чка": ["una lapicera", "lapiceras", "🖊️"],
  "го́род": ["una ciudad", "ciudades", "🏙️"], "телефо́н": ["un teléfono", "teléfonos", "📱"], "фильм": ["una película", "películas", "🎬"], "страна́": ["un país", "países", "🌍"],
  "ко́шка": ["una gata", "gatas", "🐈"], "соба́ка": ["un perro", "perros", "🐕"], "у́лица": ["una calle", "calles", "🛣️"], "магази́н": ["un negocio", "negocios", "🏪"],
  "биле́т": ["un pasaje", "pasajes", "🎫"], "язы́к": ["un idioma", "idiomas", "🗣️"], "ко́мната": ["una habitación", "habitaciones", "🚪"], "окно́": ["una ventana", "ventanas", "🪟"],
  "газе́та": ["un diario", "diarios", "📰"], "подру́га": ["una amiga", "amigas", "👭"], "сын": ["un hijo", "hijos", "👦"], "день": ["un día", "días", "📅"], "год": ["un año", "años", "🗓️"]
};
const U12_NUM = [[1, "оди́н", "uno"], [2, "два", "dos"], [3, "три", "tres"], [4, "четы́ре", "cuatro"], [5, "пять", "cinco"], [6, "шесть", "seis"], [7, "семь", "siete"], [10, "де́сять", "diez"]];
/* Plural II: personas en plural con мои́ */
const U12_PL2 = { "друг": "mis amigos", "брат": "mis hermanos", "сестра́": "mis hermanas", "колле́га": "mis colegas", "подру́га": "mis amigas", "сын": "mis hijos" };
const U12_PL2_FRASES = [[2, "Я помога́ю {}.", "Ayudo a {}."], [4, "Я гуля́ю с {}.", "Paseo con {}."], [5, "Я ду́маю о {}.", "Pienso en {}."], [1, "У {} есть маши́ны.", "{} tienen auto."]];
/* Adjetivo + sustantivo en plural: [caso, adjetivo, sustantivo, plantilla, español] */
const U12_ADJPL = [
  [4, "хоро́ший", "друг", "Я гуля́ю с {}.", "Paseo con buenos amigos."],
  [2, "но́вый", "студе́нт", "Учи́тель помога́ет {}.", "El maestro ayuda a los estudiantes nuevos."],
  [5, "большо́й", "го́род", "Мы живём в {}.", "Vivimos en ciudades grandes."],
  [5, "ру́сский", "фильм", "Мы говори́м о {}.", "Hablamos de películas rusas."],
  [1, "интере́сный", "кни́га", "У меня́ мно́го {}.", "Tengo muchos libros interesantes."],
  [0, "краси́вый", "у́лица", "В Москве́ {}.", "En Moscú hay calles lindas."],
  [3, "но́вый", "биле́т", "Я покупа́ю {}.", "Compro pasajes nuevos."],
  [4, "ма́ленький", "ребёнок", "Она́ рабо́тает с {}.", "Ella trabaja con niños pequeños."],
  [1, "но́вый", "друг", "У меня́ нет {}.", "No tengo amigos nuevos."],
  [2, "ру́сский", "студе́нт", "Я помога́ю {}.", "Ayudo a estudiantes rusos."]
];

/* Aspecto: las 23 parejas aprobadas, más идти́ / пойти́ y е́хать / пое́хать de repaso.
   [imperfectivo, perfectivo, significado] */
const U12_PARES = [["де́лать", "сде́лать", "hacer"], ["чита́ть", "прочита́ть", "leer"], ["писа́ть", "написа́ть", "escribir"], ["смотре́ть", "посмотре́ть", "mirar, ver"],
  ["звони́ть", "позвони́ть", "llamar"], ["гото́вить", "пригото́вить", "cocinar"], ["обе́дать", "пообе́дать", "almorzar"], ["у́жинать", "поу́жинать", "cenar"],
  ["пить", "вы́пить", "tomar, beber"], ["учи́ть", "вы́учить", "estudiar → aprender"], ["есть", "съесть", "comer"], ["отвеча́ть", "отве́тить", "responder"],
  ["начина́ть", "нача́ть", "empezar"], ["зака́нчивать", "зако́нчить", "terminar"], ["открыва́ть", "откры́ть", "abrir"], ["закрыва́ть", "закры́ть", "cerrar"],
  ["понима́ть", "поня́ть", "entender"], ["отдыха́ть", "отдохну́ть", "descansar"], ["покупа́ть", "купи́ть", "comprar"], ["дава́ть", "дать", "dar"],
  ["помога́ть", "помо́чь", "ayudar"], ["говори́ть", "сказа́ть", "hablar, decir"], ["брать", "взять", "tomar, agarrar"], ["идти́", "пойти́", "ir (a pie)"], ["е́хать", "пое́хать", "ir (en vehículo)"]];
/* Parejas para las frases: [imperfectivo, perfectivo, complemento, gerundio, pretérito (yo), imperfecto (yo), infinitivo, complemento en español] */
const U12_ASP = [
  ["де́лать", "сде́лать", "зада́ние", "haciendo", "hice", "hacía", "hacer", "la tarea"],
  ["чита́ть", "прочита́ть", "кни́гу", "leyendo", "leí", "leía", "leer", "el libro"],
  ["писа́ть", "написа́ть", "письмо́", "escribiendo", "escribí", "escribía", "escribir", "la carta"],
  ["покупа́ть", "купи́ть", "хлеб", "comprando", "compré", "compraba", "comprar", "pan"],
  ["звони́ть", "позвони́ть", "ма́ме", "llamando", "llamé", "llamaba", "llamar", "a mamá"],
  ["смотре́ть", "посмотре́ть", "фильм", "viendo", "vi", "veía", "ver", "la película"],
  ["гото́вить", "пригото́вить", "у́жин", "cocinando", "cociné", "cocinaba", "cocinar", "la cena"],
  ["пить", "вы́пить", "ко́фе", "tomando", "tomé", "tomaba", "tomar", "el café"],
  ["учи́ть", "вы́учить", "слова́", "estudiando", "aprendí", "estudiaba", "aprender", "las palabras"],
  ["отвеча́ть", "отве́тить", "учи́телю", "respondiendo", "respondí", "respondía", "responder", "al maestro"],
  ["помога́ть", "помо́чь", "бра́ту", "ayudando", "ayudé", "ayudaba", "ayudar", "a mi hermano"],
  ["зака́нчивать", "зако́нчить", "рабо́ту", "terminando", "terminé", "terminaba", "terminar", "el trabajo"],
  ["обе́дать", "пообе́дать", "", "almorzando", "almorcé", "almorzaba", "almorzar", ""],
  ["у́жинать", "поу́жинать", "", "cenando", "cené", "cenaba", "cenar", ""],
  ["отдыха́ть", "отдохну́ть", "", "descansando", "descansé", "descansaba", "descansar", ""]
];

/* Imperativo. Pedidos (perfectivo): [verbo, resto de la frase, español con vos] */
const U12_PIDE = [["прочита́ть", "э́ту кни́гу", "Leé este libro."], ["позвони́ть", "мне за́втра", "Llamame mañana."], ["закры́ть", "окно́", "Cerrá la ventana."], ["откры́ть", "дверь", "Abrí la puerta."],
  ["купи́ть", "хлеб", "Comprá pan."], ["пригото́вить", "у́жин", "Prepará la cena."], ["помо́чь", "мне", "Ayudame."], ["дать", "мне ру́чку", "Dame una lapicera."],
  ["взять", "такси́", "Tomá un taxi."], ["посмотре́ть", "э́тот фильм", "Mirá esta película."], ["отве́тить", "мне", "Respondeme."], ["сде́лать", "зада́ние", "Hacé la tarea."], ["написа́ть", "ма́ме", "Escribile a mamá."]];
/* Negativo (imperfectivo): [imperfectivo, perfectivo, resto, español] */
const U12_NO = [["звони́ть", "позвони́ть", "ему́", "No lo llames."], ["открыва́ть", "откры́ть", "окно́", "No abras la ventana."], ["покупа́ть", "купи́ть", "хлеб", "No compres pan."],
  ["смотре́ть", "посмотре́ть", "э́тот фильм", "No mires esta película."], ["говори́ть", "сказа́ть", "ма́ме", "No le digas a mamá."], ["закрыва́ть", "закры́ть", "дверь", "No cierres la puerta."]];
/* Comparar: [X, Y, adjetivo, español]. Y es un sustantivo (para la variante con genitivo) o null */
const U12_COMP = [["Москва́", "Барсело́на", "большо́й", "Moscú es más grande que Barcelona."], ["Метро́", "авто́бус", "бы́стрый", "El metro es más rápido que el colectivo."],
  ["Чай", "ко́фе", "дешёвый", "El té es más barato que el café."], ["Кни́га", "фильм", "интере́сный", "El libro es más interesante que la película."],
  ["Такси́", "метро́", "дорого́й", "El taxi es más caro que el metro."], ["Барсело́на", "Москва́", "тёплый", "Barcelona es más cálida que Moscú."],
  ["Мой телефо́н", "твой", "ма́ленький", "Mi teléfono es más chico que el tuyo."], ["Ру́чка", "каранда́ш", "удо́бный", "La lapicera es más cómoda que el lápiz."]];
const U12_SAMYJ = [["Москва́ — {} большо́й го́род Росси́и.", "m", "Moscú es la ciudad más grande de Rusia."], ["Э́то {} краси́вая у́лица.", "f", "Es la calle más linda."],
  ["Э́то {} интере́сная кни́га.", "f", "Es el libro más interesante."], ["Э́то {} дорого́й рестора́н.", "m", "Es el restaurante más caro."], ["Э́то {} ма́ленькое кафе́.", "n", "Es el bar más chico."],
  ["Э́то {} удо́бное ме́сто.", "n", "Es el lugar más cómodo."]];

/* Módulo 10: lecturas */
const U12_LECTURAS = [
  { id: "brat", titulo: "Мой брат и его́ друзья́", lineas: [
      ["У меня́ два бра́та.", "Tengo dos hermanos."], ["Мой брат Ива́н живёт в Москве́.", "Mi hermano Iván vive en Moscú."], ["У него́ мно́го друзе́й.", "Él tiene muchos amigos."],
      ["Его́ друзья́ — студе́нты.", "Sus amigos son estudiantes."], ["В суббо́ту он гуля́ет с друзья́ми.", "Los sábados pasea con sus amigos."], ["Он помога́ет студе́нтам.", "Ayuda a los estudiantes."],
      ["Я ча́сто ду́маю о нём и звоню́ ему́.", "Pienso seguido en él y lo llamo."]],
    preguntas: [["¿Cuántos hermanos tiene quien escribe?", "два бра́та", ["пять бра́тьев", "оди́н брат"]], ["¿Con quién pasea Iván los sábados?", "с друзья́ми", ["с бра́том", "с ма́мой"]], ["¿A quién ayuda Iván?", "студе́нтам", ["друзья́м", "бра́ту"]]],
    vf: [["У Ива́на ма́ло друзе́й.", false], ["Ива́н живёт в Москве́.", true], ["Его́ друзья́ — студе́нты.", true]] },
  { id: "kniga", titulo: "Вчера́ и за́втра", lineas: [
      ["Вчера́ я до́лго рабо́тал.", "Ayer trabajé mucho tiempo."], ["Ве́чером я пригото́вил у́жин и позвони́л ма́ме.", "A la noche preparé la cena y llamé a mamá."],
      ["Пото́м я чита́л кни́гу два часа́.", "Después estuve leyendo un libro dos horas."], ["Но я ещё не прочита́л её.", "Pero todavía no lo terminé."],
      ["За́втра я прочита́ю э́ту кни́гу.", "Mañana voy a terminar este libro."], ["И весь день я бу́ду отдыха́ть.", "Y todo el día voy a descansar."]],
    preguntas: [["¿Qué hizo a la noche, antes de leer?", "пригото́вил у́жин", ["чита́л газе́ту", "смотре́л фильм"]], ["¿Cuánto tiempo leyó?", "два часа́", ["весь день", "пять часо́в"]], ["¿Qué va a hacer mañana todo el día?", "бу́ду отдыха́ть", ["бу́ду рабо́тать", "бу́ду гото́вить"]]],
    vf: [["Он уже́ прочита́л кни́гу.", false], ["Ве́чером он позвони́л ма́ме.", true], ["За́втра он бу́дет рабо́тать весь день.", false]] },
  { id: "goroda", titulo: "Москва́ и Барсело́на", lineas: [
      ["Моя́ подру́га живёт в Барсело́не, а я в Москве́.", "Mi amiga vive en Barcelona, y yo en Moscú."], ["Москва́ бо́льше, чем Барсело́на.", "Moscú es más grande que Barcelona."],
      ["Но в Барсело́не тепле́е.", "Pero en Barcelona hace más calor."], ["По-мо́ему, метро́ в Москве́ са́мое краси́вое.", "Para mí, el metro de Moscú es el más lindo."],
      ["Подру́га пи́шет мне: «Позвони́ мне за́втра!»", "Mi amiga me escribe: «¡Llamame mañana!»"], ["А я отвеча́ю: «Не звони́ мне у́тром, я рабо́таю».", "Y yo le respondo: «No me llames a la mañana, trabajo»."]],
    preguntas: [["¿Dónde vive la amiga?", "в Барсело́не", ["в Москве́", "в Испа́нии"]], ["¿Qué ciudad es más grande?", "Москва́", ["Барсело́на", "Испа́ния"]], ["¿Qué le pide la amiga?", "Позвони́ мне за́втра", ["Не звони́ мне", "Напиши́ мне"]]],
    vf: [["В Москве́ тепле́е, чем в Барсело́не.", false], ["Москва́ бо́льше, чем Барсело́на.", true], ["Подру́га живёт в Москве́.", false]] }
];

/* Palabras que la unidad presenta en cada módulo (verificador de palabras vistas) */
const U12_VISTAS = { 1: "о обо со", 2: "твой наш ваш об", 5: "сде́лать прочита́ть написа́ть позвони́ть посмотре́ть пригото́вить вы́пить вы́учить отве́тить взять нача́ть зако́нчить откры́ть закры́ть поня́ть пообе́дать поу́жинать отдохну́ть", 7: "ка́ждый до́лго", 9: "удо́бнее интере́снее краси́вее тепле́е холодне́е быстре́е бо́льше ме́ньше лу́чше ху́же доро́же деше́вле са́мый чем тёплый бы́стрый" };

const UNIDAD_12 = {
  id: 12,
  titulo: "Gramática B1",
  tituloRu: "Грамма́тика B1",
  objetivo: "Usar los pronombres y los posesivos en todos los casos, el plural en los seis casos, el aspecto de los verbos, el imperativo y las comparaciones.",
  tiempo: "40–50 horas",
  modulos: [
    { id: "u12m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "Los pronombres en todos los casos", resumen: "меня́, мне, со мной, обо мне.",
      intro: "Ya usaste muchos pronombres sueltos: меня́ зову́т, у меня́, мне нра́вится. Acá van todos juntos, en los seis casos.",
      secciones: [
        { titulo: "Ya los conocés", texto: "Меня́ зову́т Ману. («me llamo Manu»: acusativo)\nУ меня́ есть брат. («tengo un hermano»: genitivo)\nМне нра́вится му́зыка. («me gusta la música»: dativo)\nА́нна гуля́ет со мной. («Ana pasea conmigo»: instrumental)\nА́нна ду́мает обо мне. («Ana piensa en mí»: prepositivo)", destacado: "Cada pronombre tiene una forma para cada caso." },
        { titulo: "Acusativo y genitivo: la misma forma", texto: "меня́, тебя́, его́, её, нас, вас, их\nМа́ма зна́ет тебя́. («mamá te conoce»)\nУ тебя́ есть вре́мя? («¿tenés tiempo?»)" },
        { titulo: "Dativo e instrumental", texto: "dativo: мне, тебе́, ему́, ей, нам, вам, им\nА́нна звони́т нам. («Ana nos llama»)\ninstrumental: мной, тобо́й, им, ей, на́ми, ва́ми, и́ми\nА́нна гуля́ет с на́ми. («Ana pasea con nosotros»)", ojo: "ей es dativo e instrumental: А́нна звони́т ей. / А́нна гуля́ет с ней." },
        { titulo: "La н- después de preposición", texto: "Con он, она́ y они́, después de una preposición se agrega н-:\nу него́ («él tiene»)\nс ней («con ella»)\nо них («de ellos»)\nSin preposición, no: Ма́ма зна́ет его́. («mamá lo conoce»)", destacado: "preposición + него́, ней, них…" },
        { titulo: "Con я: со мной y обо мне", texto: "Para que se pueda pronunciar, la preposición suma una о:\nс → со мной («conmigo»)\nо → обо мне («de mí, en mí»)\nCon los demás no cambia: с тобо́й, о тебе́." }
      ] },
    { id: "u12m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Posesivos y э́тот", resumen: "моему́ бра́ту, с мое́й сестро́й, в э́том до́ме.",
      intro: "мой, твой, наш, ваш y э́тот cambian como los adjetivos: van en el mismo género, número y caso que la palabra que acompañan.",
      secciones: [
        { titulo: "En nominativo ya los conocés", texto: "мой брат\nмоя́ ма́ма\nмоё письмо́\nмои́ друзья́" },
        { titulo: "En los otros casos", texto: "Я звоню́ моему́ бра́ту. («llamo a mi hermano»)\nЯ гуля́ю с мое́й сестро́й. («paseo con mi hermana»)\nУ моего́ дру́га есть соба́ка. («mi amigo tiene un perro»)\nЯ ду́маю о на́шей ма́ме. («pienso en nuestra mamá»)\nЯ люблю́ ва́шего па́пу. («quiero a su papá —de ustedes—»)", destacado: "El posesivo va en el mismo caso que la palabra.", ojo: "па́па es masculino, aunque termine en -а: моему́ па́пе, с мои́м па́пой." },
        { titulo: "Los cuatro cambian igual", texto: "твой cambia como мой: твоему́, твое́й, твои́м…\nваш cambia como наш: ва́шему, ва́шей, ва́шим…" },
        { titulo: "его́, её, их no cambian nunca", texto: "Я звоню́ его́ ма́ме. («llamo a la mamá de él»)\nУ её бра́та есть соба́ка. («el hermano de ella tiene un perro»)\nЯ гуля́ю с их соба́кой. («paseo con el perro de ellos»)", ojo: "Como «su», его́, её e их no llevan н- aunque vayan después de una preposición: у его́ бра́та, no «у него́ бра́та»." },
        { titulo: "э́тот: este, esta", texto: "э́тот дом\nэ́та кни́га\nэ́то письмо́\nэ́ти лю́ди\nЯ живу́ в э́том до́ме. («vivo en esta casa»)\nЯ хочу́ купи́ть э́ту руба́шку. («quiero comprar esta camisa»)", ojo: "En «Э́то мой брат» («este es mi hermano»), э́то no cambia: presenta algo. э́тот acompaña a una palabra y cambia con ella." },
        { titulo: "о → об", texto: "Antes de una vocal, о se vuelve об:\nМы говори́м об э́том фи́льме. («hablamos de esta película»)" }
      ] },
    { id: "u12m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Plural I: cantidades y números", resumen: "мно́го книг, пять бра́тьев, две кни́ги.",
      intro: "Hasta ahora casi todo fue en singular. Primero, el plural que ya viste; después, el genitivo plural, que es el que se usa para contar.",
      secciones: [
        { titulo: "Nominativo plural (repaso)", texto: "masculino y femenino en -а: -ы: студе́нт → студе́нты, маши́на → маши́ны\nDespués de **г, к, х, ж, ш, ч, щ**, y en -ь, -й, -я: -и: кни́га → кни́ги, музе́й → музе́и\nneutro: -о → -а: сло́во → слова́\nIrregulares: друг → друзья́, брат → бра́тья, ребёнок → де́ти, челове́к → лю́ди" },
        { titulo: "Genitivo plural: las terminaciones", texto: "masculino: -ов: студе́нт → студе́нтов, биле́т → биле́тов\nmasculino en -й: -ев: музе́й → музе́ев\nmasculino en -ь, -ж, -ш, -ч, -щ: -ей: учи́тель → учителе́й, врач → враче́й\nfemenino en -а y neutro en -о: se saca la vocal: кни́га → книг, сло́во → слов\nA veces aparece una vocal para poder pronunciarlo: ру́чка → ру́чек, письмо́ → пи́сем", destacado: "-ов · -ев · -ей · sin terminación" },
        { titulo: "Los irregulares", texto: "друг → друзе́й\nбрат → бра́тьев\nребёнок → дете́й\nчелове́к → люде́й\nгод → лет", ojo: "No hace falta memorizarlos todos: tocá una palabra en Casos y vas a ver su plural." },
        { titulo: "Cuándo se usa", texto: "мно́го книг («muchos libros»)\nма́ло друзе́й («pocos amigos»)\nУ меня́ нет биле́тов. («no tengo pasajes»)\nСко́лько у тебя́ бра́тьев? («¿cuántos hermanos tenés?»)" },
        { titulo: "Con números", texto: "1: nominativo singular: оди́н брат, одна́ кни́га\n2, 3, 4: genitivo singular: два бра́та, три кни́ги\n5 o más: genitivo plural: пять бра́тьев, шесть книг\nEs la misma regla que ya usaste con час y рубль: два часа́, пять часо́в; два рубля́, пять рубле́й.", destacado: "1 → nominativo · 2-4 → genitivo singular · 5+ → genitivo plural", ojo: "Con palabras femeninas, два se vuelve две: две кни́ги, две сестры́." },
        { titulo: "Acusativo plural", texto: "Cosas: igual que el nominativo: Я покупа́ю кни́ги.\nPersonas y animales: igual que el genitivo: Я ви́жу студе́нтов. Я люблю́ соба́к." }
      ] },
    { id: "u12m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Plural II: los otros casos", resumen: "с друзья́ми, о де́тях, в больши́х города́х.",
      intro: "En dativo, instrumental y prepositivo, el plural casi no tiene excepciones: las mismas terminaciones para todas las palabras.",
      secciones: [
        { titulo: "Las terminaciones", texto: "dativo: -ам / -ям: студе́нтам, друзья́м\ninstrumental: -ами / -ями: со студе́нтами, с друзья́ми\nprepositivo: -ах / -ях: в города́х, о друзья́х", destacado: "-ам · -ами · -ах", ojo: "лю́ди y де́ти: с людьми́, с детьми́." },
        { titulo: "En frases", texto: "Я помога́ю друзья́м. («ayudo a los amigos»)\nМы гуля́ем с детьми́. («paseamos con los chicos»)\nОн ду́мает о де́тях. («piensa en los chicos»)" },
        { titulo: "Los adjetivos en plural", texto: "En plural hay una sola forma para los tres géneros:\nnominativo: -ые / -ие: но́вые кни́ги, ру́сские друзья́\ngenitivo y prepositivo: -ых / -их: мно́го но́вых книг, в больши́х города́х\ndativo: -ым / -им: но́вым студе́нтам\ninstrumental: -ыми / -ими: с хоро́шими друзья́ми\nacusativo: como el nominativo (cosas) o como el genitivo (personas y animales)" },
        { titulo: "Los posesivos en plural", texto: "мои́ друзья́\nу мои́х друзе́й\nмои́м друзья́м\nс мои́ми друзья́ми\nо мои́х друзья́х\nна́ши, ва́ши y э́ти cambian igual: с на́шими детьми́, в э́тих города́х." }
      ] },
    { id: "u12m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Aspecto I: proceso o resultado", resumen: "чита́л / прочита́л.",
      intro: "Casi todos los verbos rusos vienen de a dos: uno **imperfectivo** y uno **perfectivo**. Significan lo mismo, pero miran la acción de otra manera.",
      secciones: [
        { titulo: "Proceso o resultado", texto: "El imperfectivo mira la acción como proceso, o como algo que se repite:\nВчера́ я чита́л кни́гу. («ayer estuve leyendo un libro»)\nEl perfectivo mira el resultado: la acción terminada.\nВчера́ я прочита́л кни́гу. («ayer leí el libro»: lo terminé)", destacado: "imperfectivo = proceso · perfectivo = resultado" },
        { titulo: "Lo que ya conocés", texto: "Casi todos los verbos que aprendiste hasta ahora son imperfectivos: чита́ть, писа́ть, де́лать… En las Unidades 9 y 11 ya usaste algunos perfectivos como fórmulas: пойду́, куплю́, скажи́те." },
        { titulo: "Cómo se forman las parejas", texto: "Con un prefijo: де́лать → сде́лать, чита́ть → прочита́ть, писа́ть → написа́ть, смотре́ть → посмотре́ть\nCambiando el final: отвеча́ть → отве́тить, начина́ть → нача́ть, открыва́ть → откры́ть\nCon otra palabra: говори́ть → сказа́ть, брать → взять", ojo: "No hay una regla para saber qué prefijo lleva cada verbo: se aprenden de a dos, como pareja. Casi siempre el imperfectivo es el más largo: покупа́ть / купи́ть." },
        { titulo: "En pasado", texto: "Я писа́л письмо́ два часа́. («estuve escribiendo la carta dos horas»)\nЯ написа́л письмо́. («escribí la carta»: ya está)\nОна́ ча́сто звони́ла ма́ме. («llamaba seguido a mamá»)\nОна́ позвони́ла ма́ме. («llamó a mamá»: una vez)", truco: "¿Cuánto tiempo? ¿Cuántas veces? → imperfectivo. ¿Lo terminaste? → perfectivo." },
        { titulo: "учи́ть y вы́учить", texto: "Я учи́л слова́. («estuve estudiando las palabras»)\nЯ вы́учил слова́. («aprendí las palabras»: ya las sé)" }
      ] },
    { id: "u12m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Aspecto II: futuro e infinitivo", resumen: "бу́ду чита́ть / прочита́ю. Хочу́ купи́ть.",
      intro: "El perfectivo no tiene presente: si lo conjugás, ya es futuro.",
      secciones: [
        { titulo: "Dos futuros", texto: "Imperfectivo: бу́ду + infinitivo, como en la Unidad 9.\nЗа́втра я бу́ду чита́ть. («mañana voy a estar leyendo»)\nPerfectivo: se conjuga como un presente, pero es futuro.\nЗа́втра я прочита́ю кни́гу. («mañana voy a leer el libro»: lo termino)", destacado: "perfectivo conjugado = futuro" },
        { titulo: "Las formas", texto: "Son las mismas terminaciones del presente:\nя прочита́ю\nты прочита́ешь\nон прочита́ет\nмы прочита́ем\nвы прочита́ете\nони́ прочита́ют", ojo: "Nunca бу́ду + perfectivo: «бу́ду прочита́ть» y «бу́ду прочита́ю» están mal." },
        { titulo: "Lo que ya usabas", texto: "Я пойду́ в шко́лу. (Unidad 9)\nЯ куплю́ хлеб.\nЯ позвоню́ тебе́.\nЯ опозда́ю. (Unidad 11)\nYa eran futuros perfectivos." },
        { titulo: "Después de хочу́, ну́жно, мо́жно", texto: "Para una acción concreta, que se hace una vez, va el perfectivo:\nЯ хочу́ купи́ть телефо́н. («quiero comprar un teléfono»)\nМне ну́жно позвони́ть ма́ме. («tengo que llamar a mamá»)\nPara hablar en general, el imperfectivo:\nЯ люблю́ чита́ть. («me gusta leer»)\nМне нра́вится гото́вить. («me gusta cocinar»)", ojo: "Después de люби́ть, нра́виться, начина́ть y зака́нчивать va siempre el imperfectivo: Я начина́ю рабо́тать." }
      ] },
    { id: "u12m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Aspecto III: en la práctica", resumen: "Ка́ждый день я чита́л. Я уже́ прочита́л.",
      intro: "Algunas palabras te dicen qué aspecto usar. Y en un relato, el aspecto ordena las acciones.",
      secciones: [
        { titulo: "Palabras que piden imperfectivo", texto: "ка́ждый день (todos los días)\nча́сто (seguido)\nвсегда́ (siempre)\nобы́чно (normalmente)\nиногда́ (a veces)\nдо́лго (mucho tiempo)\nдва часа́ (dos horas: cuánto tiempo)\nКа́ждый день я чита́л газе́ту. («todos los días leía el diario»)" },
        { titulo: "Palabras que piden perfectivo", texto: "уже́ (ya)\nнаконе́ц (por fin)\nЯ уже́ сде́лал зада́ние. («ya hice la tarea»)\nНаконе́ц я вы́учил слова́. («por fin aprendí las palabras»)" },
        { titulo: "Una acción después de la otra", texto: "Perfectivos en fila: cada acción termina y empieza la siguiente.\nЯ пообе́дал, позвони́л ма́ме и отдохну́л.\nImperfectivos juntos: pasaban al mismo tiempo.\nЯ обе́дал и смотре́л телеви́зор. («almorzaba mientras miraba la tele»)", destacado: "perfectivos = en fila · imperfectivos = al mismo tiempo" },
        { titulo: "Preguntas", texto: "¿Qué hiciste? (en general) → imperfectivo:\nЧто ты де́лал вчера́? («¿qué hiciste ayer?»)\n¿Lo terminaste? → perfectivo:\nТы сде́лал зада́ние? («¿hiciste la tarea?»)" },
        { titulo: "En un relato", texto: "Вчера́ я до́лго спал.\nПото́м я пригото́вил за́втрак и позвони́л ма́ме.\nВе́чером я смотре́л фильм с дру́гом, и мы говори́ли о рабо́те.\n(«Ayer dormí mucho. Después preparé el desayuno y llamé a mamá. A la noche vi una película con un amigo y hablamos del trabajo.»)\nдо́лго спал, смотре́л y говори́ли son procesos; пригото́вил y позвони́л, acciones terminadas, una después de la otra." }
      ] },
    { id: "u12m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "El imperativo", resumen: "Позвони́ мне. Не звони́ ему́.",
      intro: "El imperativo sirve para pedir, aconsejar o dar instrucciones. Ya usaste varios como fórmulas: Помоги́те! Повтори́те, пожа́луйста. Да́йте…",
      secciones: [
        { titulo: "Cómo se forma (ты)", texto: "Se toma el presente (o el futuro, si es perfectivo) y se cambia el final:\nSi termina en vocal + ю: -й: чита́ю → чита́й, сде́лаю → сде́лай\nSi el acento va al final: -и: говорю́ → говори́, пишу́ → пиши́, позвоню́ → позвони́\nSi el acento no va al final: -ь: гото́влю → гото́вь, отве́чу → отве́ть", destacado: "-й · -и · -ь" },
        { titulo: "ты y вы", texto: "Para вы (ustedes, o usted) se agrega -те:\nчита́й → чита́йте\nскажи́ → скажи́те\nгото́вь → гото́вьте" },
        { titulo: "Los irregulares", texto: "дать → дай, да́йте\nесть → ешь, е́шьте\nпить → пей, пе́йте\nвзять → возьми́, возьми́те\nпомо́чь → помоги́, помоги́те", ojo: "No hace falta deducirlos: en Verbos cada verbo tiene su imperativo." },
        { titulo: "¿Qué aspecto?", texto: "Para pedir algo concreto, una vez: perfectivo.\nПозвони́ мне за́втра. («llamame mañana»)\nЗакро́й окно́, пожа́луйста. («cerrá la ventana, por favor»)\nPara algo que se repite: imperfectivo.\nЗвони́ мне ча́сто. («llamame seguido»)" },
        { titulo: "No hagas: не + imperfectivo", texto: "Не звони́ ему́! («no lo llames»)\nНе открыва́й окно́. («no abras la ventana»)", destacado: "не + imperfectivo", ojo: "«Не позвони́» o «не откро́й» no se usan para prohibir." }
      ] },
    { id: "u12m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Comparar", resumen: "Метро́ быстре́е, чем авто́бус. Са́мый большо́й.",
      intro: "Para comparar se usa el comparativo («más …»): una sola forma que no cambia nunca.",
      secciones: [
        { titulo: "Más … que …", texto: "Москва́ бо́льше, чем Барсело́на. («Moscú es más grande que Barcelona»)\nМетро́ быстре́е, чем авто́бус. («el metro es más rápido que el colectivo»)", destacado: "X + comparativo + , чем + Y", ojo: "Antes de чем va coma." },
        { titulo: "Cómo se forma", texto: "A la mayoría se le agrega -ее:\nинтере́сный → интере́снее\nкраси́вый → краси́вее\nудо́бный → удо́бнее\nбы́стрый → быстре́е\nтёплый → тепле́е\nхоло́дный → холодне́е\nAlgunos son irregulares:\nбольшо́й → бо́льше\nма́ленький → ме́ньше\nхоро́ший → лу́чше\nплохо́й → ху́же\nдорого́й → доро́же\nдешёвый → деше́вле" },
        { titulo: "Sin чем: con genitivo", texto: "Y va en genitivo, sin coma y sin чем. Dice exactamente lo mismo:\nМетро́ быстре́е авто́буса.\nМосква́ бо́льше Барсело́ны." },
        { titulo: "También con verbos", texto: "Он говори́т быстре́е. («habla más rápido»)\nСего́дня тепле́е, чем вчера́. («hoy hace más calor que ayer»)\nЯ говорю́ по-испа́нски лу́чше, чем по-ру́сски.\nМне бо́льше нра́вится чай. («me gusta más el té»)" },
        { titulo: "El más: са́мый", texto: "са́мый + adjetivo, y cambia como un adjetivo:\nса́мый большо́й го́род\nса́мая краси́вая у́лица\nса́мое удо́бное ме́сто\nМосква́ — са́мый большо́й го́род Росси́и." }
      ] },
    { id: "u12m10", n: 10, tipo: "lectura", titulo: "Todo junto", resumen: "Leer con toda la gramática de la unidad.",
      intro: "Tres textos con todo lo de la unidad: pronombres, posesivos, plural, aspecto, imperativo y comparaciones. Leé, escuchá y después contestá." },
    { id: "u12m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Моя́ неде́ля", resumen: "Tu semana, con toda la gramática B1.",
      intro: "Contá tu semana: qué hiciste (lo que terminaste y lo que hacías seguido), qué vas a hacer, con quién, y compará algo. Sumá un pedido o un consejo. Por ejemplo: В понеде́льник я до́лго рабо́тал. Ве́чером я пригото́вил у́жин и позвони́л ма́ме. Ка́ждый день я чита́л кни́гу. В суббо́ту я гуля́л с мои́ми друзья́ми. Мой брат помога́ет студе́нтам. За́втра я посмотрю́ фильм. Фильм интере́снее, чем кни́га. Позвони́ мне!",
      requisitos: [], consejos: [] },
    { id: "u12m12", n: 12, tipo: "examen", titulo: "Evaluación", resumen: "Pronombres, plural, aspecto, imperativo, comparar, traducción y lectura.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Pronombres y posesivos", tipos: ["pronombre", "posesivo", "este"], n: 6 },
        { nombre: "Plural y números", tipos: ["plural", "numero", "plural-caso", "adj-plural"], n: 7 },
        { nombre: "Aspecto", tipos: ["aspecto", "marcador", "futuro-pf", "infinitivo"], n: 8 },
        { nombre: "Imperativo", tipos: ["imperativo", "no-imp"], n: 4 },
        { nombre: "Comparar", tipos: ["comparar", "samyj"], n: 3 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 5 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 2 }
      ],
      aprobado: 0.8 }
  ]
};

function u12Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_12.modulos.forEach(m => {
  if (m.intro) m.intro = u12Palabras(m.intro);
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco", "ojo"].forEach(k => { if (s[k]) s[k] = u12Palabras(s[k]); }));
});
function unidad12Modulo(id) { return UNIDAD_12.modulos.find(m => m.id === id) || null; }

const U12_MEZCLA = { lectura: 2, "lectura-vf": 1, imperativo: 2, "no-imp": 1, comparar: 2, samyj: 1, aspecto: 3, pareja: 1, "futuro-pf": 2, infinitivo: 1, marcador: 2, pronombre: 2, posesivo: 2, este: 1, plural: 2, numero: 2, "plural-caso": 2, "adj-plural": 2, detectar: 1, emparejar: 1, "es-ru": 3, dictado: 2 };

/* ── Datos ─────────────────────────────────────────────────── */
function u12Datos() {
  if (u12Datos.cache) return u12Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null;
  /* sustantivo: sg y pl en el orden de Casos (nom, gen, dat, acc, ins, prep) */
  const sust = ru => { const e = lex(ru, "sustantivo"), cz = e && casosById(e.id); if (!cz || !cz.sg) return null;
    return { id: e.id, ac: e.acento, g: e.gender, sg: cz.sg, pl: cz.pl, conteo: cz.conteo || null }; };
  const pron = ru => { const e = lex(ru, "pronombre"), cz = e && casosById(e.id); return cz ? { id: e.id, ac: e.acento, f: cz.formas, n: cz.n || null } : null; };
  const adj = ru => { const e = (porAc[sin(ru)] || []).find(x => { const cz = casosById(x.id); return cz && cz.tipo === "adjetivo"; }), cz = e && casosById(e.id);
    return cz ? { id: e.id, ac: e.acento, m: cz.m, f: cz.f, n: cz.n, pl: cz.pl, comp: cz.comp || null } : null; };
  const verbo = ru => { const e = lex(ru, "verbo"), v = e && verboById(e.id); return v ? Object.assign({ id: e.id, ac: e.acento }, v) : null; };
  /* forma de un adjetivo para un sustantivo (género, caso, animado) */
  const concuerda = (a, s, caso, plural) => { const fila = plural ? a.pl : (s.g === "f" ? a.f : s.g === "n" ? a.n : a.m); let f = fila[caso];
    if (Array.isArray(f)) f = (s.anim ? f[1] : f[0]); return f; };
  return (u12Datos.cache = { sin, lex, sust, pron, adj, verbo, concuerda });
}
const U12_CASO = ["nominativo", "genitivo", "dativo", "acusativo", "instrumental", "prepositivo"];
/* Forma del pronombre en un caso, con la н- y la preposición si van */
function u12PronForma(p, caso, prep) {
  const f = prep && p.n && p.n[caso] ? p.n[caso] : p.f[caso];
  if (!prep) return f;
  if (p.ac === "я" && prep === "с") return "со " + f;
  if (p.ac === "я" && prep === "о") return "обо " + f;
  return prep + " " + f;
}
/* Personas animadas: el acusativo masculino y el plural van como el genitivo */
const U12_ANIM = ["брат", "сестра́", "друг", "подру́га", "ма́ма", "па́па", "учи́тель", "студе́нт", "врач", "сын", "колле́га", "ребёнок", "соба́ка", "ко́шка", "челове́к", "де́вушка"];

function ejerciciosUnidad12() {
  const { sin, sust, pron, adj } = u12Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a.filter(Boolean))];
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?«»]/g, "");
  const anim = ru => U12_ANIM.indexOf(ru) >= 0;
  const S = ru => { const s = sust(ru); if (s) s.anim = anim(ru); return s; };

  /* ── Módulo 1: pronombres ── */
  const P = U12_PRON.map(pron);
  U12_PRON_FRASES.forEach(([caso, tpl, prep, es], z) => {
    P.forEach((p, i) => {
      if (!p) return;
      const forma = u12PronForma(p, caso, prep);
      const ru0 = tpl.replace("{}", forma), ru = cap(ru0);
      const otros = [0, 1, 2, 4, 5].filter(k => k !== caso).map(k => u12PronForma(p, k, prep));
      if (prep && p.n) otros.unshift(prep + " " + p.f[caso]);            /* sin la н- */
      if (prep && p.ac === "я") otros.unshift(prep + " " + p.f[caso]);   /* «с мной», «о мне» */
      const opciones = uniq([forma].concat(otros)).slice(0, 4);
      const base = { grupo: "PR-" + z + "-" + i, items: ["lex:" + p.id], oir: ru };
      const expl = "**" + forma + "**: «" + U12_PRON_ES[i] + "» en " + U12_CASO[caso] + (prep && p.n ? ", con н- porque va después de preposición" : "") + (prep && p.ac === "я" ? " (la preposición suma una о)" : "") + ". " + ru;
      out.push(Object.assign({ id: "U12-pr-" + z + "-" + i, tipo: "pronombre", forma: "elegir", dificultad: 1, modulo: 1, pide: "Completá: «" + es[i] + "»",
        grande: cap(tpl.replace("{}", "_____")), opciones: baraja(opciones, i + z), correcta: forma, explicacion: expl }, base));
      if ((i + z) % 2 === 0) out.push(Object.assign({ id: "U12-prw-" + z + "-" + i, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 1, pide: "Escribí en ruso: «" + es[i] + "»",
        audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: expl }, base, { grupo: "PRw-" + z + "-" + i }));
    });
  });
  [[2, "", "A… (dativo)"], [4, "с", "Con… (instrumental)"], [5, "о", "De… (prepositivo)"], [3, "", "Acusativo"]].forEach(([caso, prep, nom], k) => {
    const sel = [0, 1, 2, 3, 4, 5, 6].filter(i => (i + k) % 2 === 0).slice(0, 4);
    out.push({ id: "U12-premp-" + k, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 1, grupo: "PRE-" + k, items: [], pide: "Uní cada pronombre con su forma: " + nom + ".",
      pares: sel.map(i => [U12_PRON[i], u12PronForma(P[i], caso, prep)]), explicacion: sel.map(i => U12_PRON[i] + " → " + u12PronForma(P[i], caso, prep)).join(" · ") });
  });
  /* Detectar: falta la н- */
  [["А́нна гуля́ет с {}.", 4, "с", 3], ["У {} есть маши́на.", 1, "у", 2], ["Э́то пода́рок для {}.", 1, "для", 3], ["Я рабо́таю с {}.", 4, "с", 2], ["У {} есть соба́ка.", 1, "у", 6], ["Мы гуля́ем с {}.", 4, "с", 6]].forEach(([tpl, caso, prep, i], j) => {
    const p = P[i], mal = p.f[caso], bien = p.n[caso];
    const ok = cap(tpl.replace("{}", bien)), pals = sinP(cap(tpl.replace("{}", mal))).split(" ");
    out.push({ id: "U12-prdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 1, grupo: "PRD-" + j, items: ["lex:" + p.id], oir: ok, pide: "Tocá la palabra que está mal.",
      palabras: pals, correcta: pals.indexOf(mal), explicacion: "Después de preposición va la н-: **" + prep + " " + bien + "**. " + ok });
  });

  /* ── Módulo 2: posesivos y э́тот ── */
  const POS = Object.keys(U12_POS).map(ru => Object.assign(adj(ru), { es: U12_POS[ru] }));
  Object.keys(U12_POS_PERS).forEach((ru, j) => {
    const s = S(ru); if (!s) return;
    const fem = s.g === "f";
    U12_POS_FRASES.forEach(([caso, tpl, esTpl], z) => {
      const a = POS[(j + z) % POS.length];
      const fp = (k => { let f = (fem ? a.f : a.m)[k]; return Array.isArray(f) ? f[1] : f; });
      const pos = fp(caso), nom = s.sg[caso];
      const ru2 = cap(tpl.replace("{}", pos + " " + nom));
      const esFr = esTpl.replace("{}", a.es[fem ? 1 : 0].replace("{}", U12_POS_PERS[ru]));
      const esF = cap(esFr);
      const base = { grupo: "PS-" + j + "-" + z, items: ["lex:" + s.id, "lex:" + a.id], oir: ru2 };
      const expl = "**" + pos + " " + nom + "**: " + (fem ? "femenino" : "masculino") + ", " + U12_CASO[caso] + ". " + ru2;
      out.push(Object.assign({ id: "U12-ps-" + j + "-" + z, tipo: "posesivo", forma: "elegir", dificultad: 2, modulo: 2, pide: "Completá: «" + esF + "»",
        grande: cap(tpl.replace("{}", "_____ " + nom)), opciones: baraja(uniq([pos, fp(0), fp(1), fp(2), fp(4), fp(5)]).slice(0, 4), j + z),
        correcta: pos, explicacion: expl }, base));
      if ((j + z) % 2 === 1) out.push(Object.assign({ id: "U12-psw-" + j + "-" + z, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribí en ruso: «" + esF + "»",
        audio: ru2, audioManual: true, esperadas: [ru2], idioma: "ru", explicacion: expl }, base, { grupo: "PSw-" + j + "-" + z }));
    });
  });
  U12_SU.forEach(([ru, f, ops, es], j) => {
    out.push({ id: "U12-su-" + j, tipo: "posesivo", forma: "elegir", dificultad: 2, modulo: 2, grupo: "SU-" + j, items: [], oir: ru, pide: "Completá: «" + es + "»",
      grande: ru.replace(new RegExp("(^|\\s)" + f + "(?=\\s)"), "$1_____"), opciones: baraja(ops, j), correcta: f,
      explicacion: "Como «su», **" + f + "** no cambia nunca, ni lleva н-. " + ru });
    if (j % 2 === 0) out.push({ id: "U12-suw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, grupo: "SUw-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [["У него́ бра́та есть соба́ка.", "него́", "У его́ бра́та есть соба́ка.", "El hermano de él tiene un perro."], ["Я гуля́ю с ней соба́кой.", "ней", "Я гуля́ю с её соба́кой.", "Paseo con el perro de ella."],
   ["Я звоню́ ему́ ма́ме.", "ему́", "Я звоню́ его́ ма́ме.", "Llamo a la mamá de él."]].forEach(([mal, w, ok, es], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-sudet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 2, grupo: "SUD-" + j, items: [], oir: ok, pide: "«" + es + "» Tocá la palabra que está mal.",
      palabras: pals, correcta: pals.indexOf(w), explicacion: "Como «su» va **" + ok.split(" ").find((x, k) => k === pals.indexOf(w)) + "**, que no cambia. " + ok });
  });
  const ESTE = adj("э́тот");
  const formasEste = uniq([].concat(ESTE.m.map(x => Array.isArray(x) ? x[0] : x), ESTE.f));
  U12_ESTE.forEach(([ru, f, es], j) => {
    const rx = new RegExp("(^|\\s)" + f + "(?=\\s|[.!?])");
    const otros = baraja(formasEste.filter(x => x !== f), j).slice(0, 3);
    out.push({ id: "U12-este-" + j, tipo: "este", forma: "elegir", dificultad: 2, modulo: 2, grupo: "ES-" + j, items: ["lex:" + ESTE.id], oir: ru, pide: "Completá: «" + es + "»",
      grande: ru.replace(rx, "$1_____"), opciones: baraja([f].concat(otros), j + 3), correcta: f, explicacion: "**" + f + "**: э́тот va en el mismo caso y género que la palabra. " + ru });
    if (j % 2 === 1) out.push({ id: "U12-estew-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, grupo: "ESw-" + j, items: ["lex:" + ESTE.id], oir: ru, pide: "Escribí en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  out.push({ id: "U12-posemp-0", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 2, grupo: "PSE-0", items: [], pide: "Uní cada frase con su forma de мой.",
    pares: [["Я звоню́ … бра́ту.", "моему́"], ["Я гуля́ю с … сестро́й.", "мое́й"], ["Я ду́маю о … дру́ге.", "моём"], ["Я гуля́ю с … дру́гом.", "мои́м"]], explicacion: "моему́ бра́ту · мое́й сестро́й · моём дру́ге · мои́м дру́гом" });

  /* ── Módulo 3: plural I ── */
  const NOMS = Object.keys(U12_PL).map(ru => Object.assign(S(ru) || {}, { es1: U12_PL[ru][0], esP: U12_PL[ru][1], emoji: U12_PL[ru][2] })).filter(x => x.id);
  NOMS.forEach((s, j) => {
    const base = { items: ["lex:" + s.id] };
    /* nominativo plural */
    if (j % 2 === 0) out.push(Object.assign({ id: "U12-npl-" + j, tipo: "plural", forma: "escribir", dificultad: 2, modulo: 3, grupo: "NP-" + j, oir: s.pl[0], pide: "Escribí el plural: «" + s.esP + "»", grande: s.sg[0],
      audio: s.pl[0], audioManual: true, esperadas: [s.pl[0]], idioma: "ru", explicacion: "**" + s.sg[0] + " → " + s.pl[0] + "** (nominativo plural)." }, base));
    /* мно́го + genitivo plural */
    const mucho = "мно́го " + s.pl[1];
    out.push(Object.assign({ id: "U12-gpl-" + j, tipo: "plural", forma: j % 3 === 0 ? "escribir" : "elegir", dificultad: 2, modulo: 3, grupo: "GP-" + j, oir: mucho,
      pide: "«" + (/^una /.test(s.es1) ? "muchas " : "muchos ") + s.esP + "» " + s.emoji, grande: j % 3 === 0 ? s.sg[0] : "мно́го _____" }, j % 3 === 0
      ? { audio: mucho, audioManual: true, esperadas: [mucho], idioma: "ru" }
      : { opciones: baraja(uniq([s.pl[1], s.pl[0], s.sg[1], s.sg[0]]), j), correcta: s.pl[1] }, { explicacion: "мно́го + genitivo plural: **" + s.sg[0] + " → " + s.pl[1] + "**." }, base));
    /* números */
    const nums = [U12_NUM[j % 8], U12_NUM[(j + 3) % 8]];
    nums.forEach(([n, nru, nes], k) => {
      const fem = s.g === "f", neu = s.g === "n";
      let num = nru; if (n === 1) num = fem ? "одна́" : neu ? "одно́" : "оди́н"; if (n === 2 && fem) num = "две";
      const f = n === 1 ? s.sg[0] : n <= 4 ? (s.conteo || s.sg[1]) : s.pl[1];
      const ru = num + " " + f, regla = n === 1 ? "1 → nominativo singular" : n <= 4 ? "2, 3 y 4 → genitivo singular" : "5 o más → genitivo plural";
      const esN = n === 1 ? s.es1 : nes + " " + s.esP;
      const op = uniq([s.sg[0], s.sg[1], s.pl[1], s.pl[0]]);
      out.push(Object.assign({ id: "U12-num-" + j + "-" + k, tipo: "numero", forma: (j + k) % 2 ? "escribir" : "elegir", dificultad: 2, modulo: 3, grupo: "NU-" + j + "-" + k, oir: ru,
        pide: "«" + esN + "» (" + n + ")", explicacion: regla + (n === 2 && fem ? "; con femeninos, две" : "") + ": **" + ru + "**." },
        (j + k) % 2 ? { grande: s.sg[0], audio: ru, audioManual: true, esperadas: [ru], idioma: "ru" } : { grande: num + " _____", opciones: baraja(op, j + k), correcta: f }, base));
    });
  });
  /* acusativo plural: personas como el genitivo, cosas como el nominativo */
  [["студе́нт", "Veo a los estudiantes."], ["друг", "Veo a los amigos."], ["сестра́", "Veo a las hermanas."], ["соба́ка", "Veo a los perros."], ["врач", "Veo a los médicos."]].forEach(([ru, es], j) => {
    const s = S(ru), r = "Я ви́жу " + s.pl[3] + ".";
    out.push({ id: "U12-accp-" + j, tipo: "plural", forma: "elegir", dificultad: 2, modulo: 3, grupo: "AP-" + j, items: ["lex:" + s.id], oir: r, pide: "Completá: «" + es + "»", grande: "Я ви́жу _____.",
      opciones: baraja(uniq([s.pl[3], s.pl[0], s.sg[3]]), j), correcta: s.pl[3], explicacion: "Personas y animales: el acusativo plural es como el genitivo. **" + s.pl[3] + "**." });
  });
  [["кни́га", "Compro libros."], ["биле́т", "Compro pasajes."], ["газе́та", "Compro diarios."], ["ру́чка", "Compro lapiceras."]].forEach(([ru, es], j) => {
    const s = S(ru), r = "Я покупа́ю " + s.pl[3] + ".";
    out.push({ id: "U12-acci-" + j, tipo: "plural", forma: "elegir", dificultad: 2, modulo: 3, grupo: "AI-" + j, items: ["lex:" + s.id], oir: r, pide: "Completá: «" + es + "»", grande: "Я покупа́ю _____.",
      opciones: baraja(uniq([s.pl[3], s.pl[1], s.sg[1]]), j), correcta: s.pl[3], explicacion: "Cosas: el acusativo plural es como el nominativo. **" + s.pl[3] + "**." });
  });
  /* Detectar */
  [["пять", "кни́га", "Tengo cinco libros."], ["два", "брат", "Tengo dos hermanos."], ["мно́го", "друг", "Tengo muchos amigos."], ["три", "биле́т", "Tengo tres pasajes."]].forEach(([q, ru, es], j) => {
    const s = S(ru), bien = q === "два" || q === "три" ? s.sg[1] : s.pl[1], mal = q === "два" || q === "три" ? s.pl[1] : s.sg[1];
    const pals = ["У", "меня́", q, mal];
    out.push({ id: "U12-pldet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, grupo: "PLD-" + j, items: ["lex:" + s.id], oir: "У меня́ " + q + " " + bien + ".", pide: "«" + es + "» Tocá la palabra que está mal.",
      palabras: pals, correcta: 3, explicacion: (q === "два" || q === "три" ? "2, 3 y 4 → genitivo singular" : "5 o más, y мно́го → genitivo plural") + ": **" + q + " " + bien + "**." });
  });
  [["Ско́лько у тебя́ бра́тьев?", "¿Cuántos hermanos tenés?"], ["У меня́ нет биле́тов.", "No tengo pasajes."], ["В Москве́ мно́го музе́ев.", "En Moscú hay muchos museos."], ["У нас две ко́шки.", "Tenemos dos gatas."], ["Ему́ пять лет.", "Él tiene cinco años."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-plt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, grupo: "PLT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-pld-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 3, grupo: "PLDc-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 4: plural II ── */
  const MOI = adj("мой");
  Object.keys(U12_PL2).forEach((ru, j) => {
    const s = S(ru); if (!s) return;
    U12_PL2_FRASES.forEach(([caso, tpl, esTpl], z) => {
      const fr = MOI.pl[caso] + " " + s.pl[caso];
      const ruF = cap(tpl.replace("{}", fr)), esF = cap(esTpl.replace("{}", U12_PL2[ru]));
      const base = { grupo: "P2-" + j + "-" + z, items: ["lex:" + s.id], oir: ruF };
      const expl = "**" + fr + "**: " + U12_CASO[caso] + " plural. " + ruF;
      out.push(Object.assign({ id: "U12-p2-" + j + "-" + z, tipo: "plural-caso", forma: "elegir", dificultad: 2, modulo: 4, pide: "Completá: «" + esF + "»",
        grande: cap(tpl.replace("{}", MOI.pl[caso] + " _____")), opciones: baraja(uniq([s.pl[caso], s.pl[0], s.pl[2], s.pl[4], s.pl[5], s.pl[1]]).slice(0, 4), j + z),
        correcta: s.pl[caso], explicacion: expl }, base));
      if ((j + z) % 2 === 0) out.push(Object.assign({ id: "U12-p2w-" + j + "-" + z, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribí en ruso: «" + esF + "»",
        audio: ruF, audioManual: true, esperadas: [ruF], idioma: "ru", explicacion: expl }, base, { grupo: "P2w-" + j + "-" + z }));
    });
  });
  U12_ADJPL.forEach(([caso, a0, s0, tpl, es], j) => {
    const a = adj(a0), s = S(s0); if (!a || !s) return;
    let fa = a.pl[caso]; if (Array.isArray(fa)) fa = s.anim ? fa[1] : fa[0];
    const fr = fa + " " + s.pl[caso], ruF = tpl.replace("{}", fr);
    const formasA = uniq(a.pl.map(x => Array.isArray(x) ? x[0] : x));
    out.push({ id: "U12-adp-" + j, tipo: "adj-plural", forma: "elegir", dificultad: 2, modulo: 4, grupo: "AD-" + j, items: ["lex:" + s.id, "lex:" + a.id], oir: ruF, pide: "Completá: «" + es + "»",
      grande: tpl.replace("{}", "_____ " + s.pl[caso]), opciones: baraja(uniq([fa].concat(formasA)).slice(0, 4), j), correcta: fa,
      explicacion: "**" + fr + "**: adjetivo en " + U12_CASO[caso] + " plural. " + ruF });
    if (j % 2 === 0) out.push({ id: "U12-adpw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "ADw-" + j, items: ["lex:" + s.id, "lex:" + a.id], oir: ruF, pide: "Escribí en ruso: «" + es + "»",
      audio: ruF, audioManual: true, esperadas: [ruF], idioma: "ru", explicacion: ruF });
  });
  [[2, "-ам / -ям"], [4, "-ами / -ями"], [5, "-ах / -ях"]].forEach(([caso, t], k) => {
    const sel = ["студе́нт", "кни́га", "го́род", "друг"].map(S);
    out.push({ id: "U12-p2emp-" + k, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 4, grupo: "P2E-" + k, items: [], pide: "Uní cada palabra con su " + U12_CASO[caso] + " plural (" + t + ").",
      pares: sel.map(s => [s.sg[0], s.pl[caso]]), explicacion: sel.map(s => s.sg[0] + " → " + s.pl[caso]).join(" · ") });
  });
  [["Мы гуля́ем с детьми́.", "Paseamos con los chicos."], ["Я ча́сто ду́маю о друзья́х.", "Pienso seguido en los amigos."], ["Учи́тель помога́ет студе́нтам.", "El maestro ayuda a los estudiantes."], ["Я живу́ с мои́ми бра́тьями.", "Vivo con mis hermanos."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-p2t-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "P2T-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-p2d-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 4, grupo: "P2Dc-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  [["Я гуля́ю с друзья́", "друзья́", "друзья́ми"], ["Мы ду́маем о де́ти", "де́ти", "де́тях"], ["Я помога́ю студе́нты", "студе́нты", "студе́нтам"]].forEach(([mal, w, bien], j) => {
    const pals = mal.split(" ");
    out.push({ id: "U12-p2det-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 4, grupo: "P2D-" + j, items: [], oir: mal.replace(w, bien) + ".", pide: "Tocá la palabra que está mal.",
      palabras: pals, correcta: pals.indexOf(w), explicacion: "Va en el caso que pide la frase: **" + bien + "**. " + mal.replace(w, bien) + "." });
  });

  /* ── Módulo 5: aspecto I ── */
  const { verbo } = u12Datos();
  const PAR = U12_PARES.map(([i, pf, es]) => ({ i: verbo(i), p: verbo(pf), es })).filter(x => x.i && x.p);
  const ASP = U12_ASP.map(a => ({ i: verbo(a[0]), p: verbo(a[1]), obj: a[2], ger: a[3], pret: a[4], impf: a[5], inf: a[6], objEs: a[7] })).filter(x => x.i && x.p);
  const con = (v, o) => v + (o ? " " + o : "");
  const PR6 = ["я", "ты", "он", "мы", "вы", "они́"];
  for (let g = 0; g * 4 < 23; g++) {
    const sel = PAR.slice(g * 4, g * 4 + 4).filter(x => x.p.ac !== "пойти́" && x.p.ac !== "пое́хать");
    if (sel.length >= 3) out.push({ id: "U12-asemp-" + g, tipo: "pareja", forma: "emparejar", dificultad: 1, modulo: 5, grupo: "ASE-" + g, items: [], pide: "Uní cada verbo con su pareja perfectiva.",
      pares: sel.map(x => [x.i.ac, x.p.ac]), explicacion: sel.map(x => x.i.ac + " / " + x.p.ac).join(" · ") });
  }
  PAR.slice(0, 23).forEach((x, j) => out.push({ id: "U12-aspf-" + j, tipo: "pareja", forma: "escribir", dificultad: 2, modulo: 5, grupo: "ASF-" + j, items: ["lex:" + x.p.id], oir: x.p.ac,
    pide: "Escribí el perfectivo de «" + x.es + "».", grande: x.i.ac, audio: x.p.ac, audioManual: true, esperadas: [x.p.ac], idioma: "ru", explicacion: "**" + x.i.ac + " / " + x.p.ac + "**: " + x.es + "." }));
  ASP.forEach((a, j) => {
    const fem = j % 2 === 1, g = fem ? "f" : "m", quien = fem ? " (sos mujer)" : " (sos hombre)";
    [[a.i, "proceso", "Ayer estuve " + con(a.ger, a.objEs) + "."], [a.p, "resultado", "Ayer " + con(a.pret, a.objEs) + "."]].forEach(([v, tipo, es], k) => {
      const ru = "Вчера́ я " + con(v.pasado[g], a.obj) + ".";
      const base = { grupo: "AS-" + j + "-" + k, items: ["lex:" + v.id], oir: ru };
      const expl = tipo === "proceso" ? "Proceso → imperfectivo: **" + v.pasado[g] + "**. " + ru : "Resultado, la acción terminada → perfectivo: **" + v.pasado[g] + "**. " + ru;
      out.push(Object.assign({ id: "U12-as-" + j + "-" + k, tipo: "aspecto", forma: "elegir", dificultad: 2, modulo: 5, pide: "Completá: «" + es + "» (" + tipo + ")" + quien,
        grande: "Вчера́ я " + con("_____", a.obj) + ".", opciones: [a.i.pasado[g], a.p.pasado[g]], correcta: v.pasado[g], explicacion: expl }, base));
      if ((j + k) % 3 === 0) out.push(Object.assign({ id: "U12-asw-" + j + "-" + k, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribí en ruso: «" + es + "»" + quien,
        audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: expl }, base, { grupo: "ASw-" + j + "-" + k }));
    });
  });
  for (let j = 0; j < 6; j++) {
    const ok = PAR[(j * 4 + 1) % 23], otros = [PAR[(j * 4 + 5) % 23], PAR[(j * 4 + 9) % 23], PAR[(j * 4 + 13) % 23]];
    out.push({ id: "U12-ascual-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: 5, grupo: "ASC-" + j, items: ["lex:" + ok.p.id], pide: "¿Cuál es perfectivo?",
      opciones: baraja([ok.p.ac].concat(otros.map(x => x.i.ac)), j), correcta: ok.p.ac, explicacion: "**" + ok.p.ac + "** es el perfectivo de " + ok.i.ac + "." });
  }
  [["Я писа́л письмо́ два часа́.", "Estuve escribiendo la carta dos horas. (sos hombre)"], ["Она́ позвони́ла ма́ме.", "Ella llamó a mamá."], ["Я вы́учила слова́.", "Aprendí las palabras. (sos mujer)"], ["Что он сказа́л?", "¿Qué dijo él?"], ["Он говори́л два часа́.", "Él habló dos horas."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-ast-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "AST-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-asd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 5, grupo: "ASD-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 6: aspecto II ── */
  ASP.forEach((a, j) => {
    const i = j % 6, f = a.p.futuro[i];
    out.push({ id: "U12-fut-" + j, tipo: "futuro-pf", forma: j % 2 ? "elegir" : "escribir", dificultad: 2, modulo: 6, grupo: "FU-" + j, items: ["lex:" + a.p.id], oir: PR6[i] + " " + f,
      pide: "Futuro de " + a.p.ac + " con " + PR6[i] + ".", grande: PR6[i] + " + " + a.p.ac, explicacion: "El perfectivo conjugado es futuro: **" + PR6[i] + " " + f + "**.",
      ...(j % 2 ? { opciones: baraja(uniq([f, "бу́ду " + a.p.ac, a.p.futuro[(i + 1) % 6], a.p.pasado.m]), j), correcta: f } : { audio: f, audioManual: true, esperadas: [f], idioma: "ru" }) });
    [["proceso", "Mañana voy a estar " + con(a.ger, a.objEs) + ".", "бу́ду " + a.i.ac], ["resultado", "Mañana voy a " + con(a.inf, a.objEs) + ".", a.p.futuro[0]]].forEach(([tipo, es, ok], k) => {
      const ru = "За́втра я " + con(ok, a.obj) + ".";
      out.push({ id: "U12-fu2-" + j + "-" + k, tipo: "aspecto", forma: "elegir", dificultad: 2, modulo: 6, grupo: "F2-" + j + "-" + k, items: ["lex:" + a.p.id], oir: ru,
        pide: "Completá: «" + es + "» (" + tipo + ")", grande: "За́втра я " + con("_____", a.obj) + ".", opciones: baraja(["бу́ду " + a.i.ac, a.p.futuro[0], "бу́ду " + a.p.ac], j + k), correcta: ok,
        explicacion: (tipo === "proceso" ? "Proceso → бу́ду + imperfectivo: **" : "Resultado → perfectivo conjugado: **") + ok + "**. " + ru });
    });
    const tpl = j % 2 ? "Мне ну́жно " : "Я хочу́ ", esT = j % 2 ? "Tengo que " : "Quiero ", ru = tpl + con(a.p.ac, a.obj) + ".";
    out.push({ id: "U12-inf-" + j, tipo: "infinitivo", forma: "elegir", dificultad: 2, modulo: 6, grupo: "IN-" + j, items: ["lex:" + a.p.id], oir: ru, pide: "Completá: «" + esT + con(a.inf, a.objEs) + "» (una vez)",
      grande: tpl + con("_____", a.obj) + ".", opciones: baraja([a.p.ac, a.i.ac], j), correcta: a.p.ac, explicacion: "Una acción concreta → perfectivo: **" + a.p.ac + "**. " + ru });
  });
  [["чита́ть", "leer"], ["гото́вить", "cocinar"], ["отдыха́ть", "descansar"], ["писа́ть", "escribir"], ["смотре́ть", "mirar"]].forEach(([ru0, es], j) => {
    const x = PAR.find(y => y.i.ac === ru0), tpl = j % 2 ? "Мне нра́вится " : "Я люблю́ ", ru = tpl + x.i.ac + ".";
    out.push({ id: "U12-infg-" + j, tipo: "infinitivo", forma: "elegir", dificultad: 2, modulo: 6, grupo: "ING-" + j, items: ["lex:" + x.i.id], oir: ru, pide: "Completá: «Me gusta " + es + "» (en general)",
      grande: tpl + "_____.", opciones: baraja([x.i.ac, x.p.ac], j), correcta: x.i.ac, explicacion: "Después de " + (j % 2 ? "нра́виться" : "люби́ть") + " va el imperfectivo: **" + ru + "**" });
  });
  [["За́втра я бу́ду прочита́ю кни́гу.", "прочита́ю", "За́втра я прочита́ю кни́гу."], ["Я бу́ду купи́ть хлеб.", "купи́ть", "Я куплю́ хлеб."], ["Ве́чером я бу́ду позвони́ть ма́ме.", "позвони́ть", "Ве́чером я позвоню́ ма́ме."]].forEach(([mal, w, ok], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-fudet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 6, grupo: "FUD-" + j, items: [], oir: ok, pide: "Tocá la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "Nunca бу́ду + perfectivo. Con el perfectivo, sin бу́ду: **" + ok + "**" });
  });
  [["Mañana te llamo.", "За́втра я позвоню́ тебе́."], ["Quiero comprar un teléfono.", "Я хочу́ купи́ть телефо́н."], ["Tengo que llamar a mamá.", "Мне ну́жно позвони́ть ма́ме."], ["Mañana voy a terminar el trabajo.", "За́втра я зако́нчу рабо́ту."], ["Me gusta cocinar.", "Мне нра́вится гото́вить."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-fut-t-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 6, grupo: "FUT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    if (j % 2 === 0) out.push({ id: "U12-fut-d-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 6, grupo: "FUDc-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 7: aspecto III ── */
  const DUR = ["чита́ть", "писа́ть", "смотре́ть", "гото́вить", "учи́ть", "де́лать", "отдыха́ть", "обе́дать"];
  const MARC = [["Ка́ждый день я {}.", "Todos los días {impf}.", "i", "ка́ждый день"], ["Я ча́сто {}.", "Seguido {impf}.", "i", "ча́сто"], ["Я {} два часа́.", "Estuve {ger} dos horas.", "i", "два часа́"],
    ["Я уже́ {}.", "Ya {pret}.", "p", "уже́"], ["Наконе́ц я {}.", "Por fin {pret}.", "p", "наконе́ц"]];
  ASP.forEach((a, j) => {
    let mk = MARC[j % 5]; if (mk[3] === "два часа́" && DUR.indexOf(a.i.ac) < 0) mk = MARC[1];
    [mk, MARC[3 + (j % 2)]].forEach((m, k) => {
      if (k === 1 && m === mk) return;
      const v = m[2] === "i" ? a.i : a.p, g = (j + k) % 2 ? "f" : "m";
      const ru = m[0].replace("{}", con(v.pasado[g], a.obj)), es = m[1].replace("{impf}", con(a.impf, a.objEs)).replace("{ger}", con(a.ger, a.objEs)).replace("{pret}", con(a.pret, a.objEs));
      out.push({ id: "U12-mk-" + j + "-" + k, tipo: "marcador", forma: "elegir", dificultad: 2, modulo: 7, grupo: "MK-" + j + "-" + k, items: ["lex:" + v.id], oir: ru,
        pide: "Completá: «" + es + "»" + (g === "f" ? " (sos mujer)" : " (sos hombre)"), grande: m[0].replace("{}", con("_____", a.obj)), opciones: [a.i.pasado[g], a.p.pasado[g]], correcta: v.pasado[g],
        explicacion: "**" + m[3] + "** → " + (m[2] === "i" ? "imperfectivo" : "perfectivo") + ": " + ru });
    });
  });
  [[["пообе́дать", "посмотре́ть"], "фильм"], [["поу́жинать", "позвони́ть"], "ма́ме"], [["пообе́дать", "позвони́ть"], "бра́ту"], [["поу́жинать", "отдохну́ть"], ""]].forEach(([vs, obj], j) => {
    const P2 = vs.map(r => PAR.find(x => x.p.ac === r)), sec = "Я " + P2[0].p.pasado.m + " и " + con(P2[1].p.pasado.m, obj) + ".", sim = "Я " + P2[0].i.pasado.m + " и " + con(P2[1].i.pasado.m, obj) + ".";
    const enFila = j % 2 === 0;
    out.push({ id: "U12-seq-" + j, tipo: "aspecto", forma: "elegir", dificultad: 2, modulo: 7, grupo: "SQ-" + j, items: [], oir: enFila ? sec : sim,
      pide: enFila ? "¿Cuál dice que las acciones fueron una después de la otra?" : "¿Cuál dice que las acciones pasaban al mismo tiempo?", opciones: baraja([sec, sim], j), correcta: enFila ? sec : sim,
      explicacion: enFila ? "Perfectivos en fila: una acción después de la otra. " + sec : "Imperfectivos juntos: al mismo tiempo. " + sim });
  });
  [["Ка́ждый день я прочита́л газе́ту.", "прочита́л", "Ка́ждый день я чита́л газе́ту.", "ка́ждый день"], ["Я ча́сто позвони́л ма́ме.", "позвони́л", "Я ча́сто звони́л ма́ме.", "ча́сто"], ["Вчера́ я два часа́ написа́л письмо́.", "написа́л", "Вчера́ я два часа́ писа́л письмо́.", "два часа́"], ["Она́ всегда́ пригото́вила у́жин.", "пригото́вила", "Она́ всегда́ гото́вила у́жин.", "всегда́"]].forEach(([mal, w, ok, mk], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-mkdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 7, grupo: "MKD-" + j, items: [], oir: ok, pide: "Tocá la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "**" + mk + "** pide imperfectivo: " + ok });
  });
  [["¿Qué hiciste ayer? (a un amigo)", "Что ты де́лал вчера́?"], ["¿Hiciste la tarea? (a un amigo)", "Ты сде́лал зада́ние?"], ["Ya almorcé. (sos mujer)", "Я уже́ пообе́дала."], ["Todos los días leo el diario.", "Ка́ждый день я чита́ю газе́ту."], ["Por fin aprendí las palabras. (sos hombre)", "Наконе́ц я вы́учил слова́."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-mkt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 7, grupo: "MKT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    const w = ru.replace(/[.?!]$/, "").split(" ");
    out.push({ id: "U12-mko-" + j, tipo: "construir", forma: "ordenar", dificultad: 2, modulo: 7, grupo: "MKO-" + j, items: [], pide: "Ordená: «" + es + "»", audio: ru, fichas: baraja(w, j + 2), sep: " ", esperada: w.join(" "), explicacion: ru });
  });

  /* ── Módulo 8: imperativo ── */
  const PERS2 = { "вы": "-те" };
  PAR.slice(0, 23).forEach((x, j) => {
    [x.i, x.p].forEach((v, k) => {
      if (!v.imperativo || (j + k) % 2) return;
      const pres = (v.presente || v.futuro)[0];
      out.push({ id: "U12-imf-" + j + "-" + k, tipo: "imperativo", forma: j % 3 ? "elegir" : "escribir", dificultad: 2, modulo: 8, grupo: "IM-" + j + "-" + k, items: ["lex:" + v.id], oir: v.imperativo.ty,
        pide: "Imperativo (ты) de " + v.ac + " (я " + pres + ").", grande: v.ac, explicacion: "я " + pres + " → **" + v.imperativo.ty + "**; con вы, **" + v.imperativo.vy + "**.",
        ...(j % 3 ? { opciones: baraja(uniq([v.imperativo.ty, v.ac, pres, (v.presente || v.futuro)[1]]), j), correcta: v.imperativo.ty } : { audio: v.imperativo.ty, audioManual: true, esperadas: [v.imperativo.ty], idioma: "ru" }) });
    });
  });
  U12_PIDE.forEach(([r, resto, es], j) => {
    const v = verbo(r), ru = cap(v.imperativo.ty) + " " + resto + ".", ruVy = cap(v.imperativo.vy) + " " + resto + ".";
    const base = { items: ["lex:" + v.id] };
    out.push(Object.assign({ id: "U12-pide-" + j, tipo: "imperativo", forma: "elegir", dificultad: 2, modulo: 8, grupo: "PI-" + j, oir: ru, pide: "Completá: «" + es + "»", grande: "_____ " + resto + ".",
      opciones: baraja(uniq([cap(v.imperativo.ty), cap(v.ac), cap(v.futuro[1])]), j), correcta: cap(v.imperativo.ty), explicacion: "Un pedido concreto → imperativo perfectivo: **" + ru + "**" }, base));
    if (j % 2 === 0) out.push(Object.assign({ id: "U12-pidew-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PIw-" + j, oir: ru, pide: "Escribí en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }, base));
    else out.push(Object.assign({ id: "U12-pidevy-" + j, tipo: "imperativo", forma: "escribir", dificultad: 2, modulo: 8, grupo: "PIv-" + j, oir: ruVy, pide: "Pasalo a вы (a varias personas, o de usted).", grande: ru,
      audio: ruVy, audioManual: true, esperadas: [ruVy], idioma: "ru", explicacion: "Con вы se agrega -те: **" + ruVy + "**" }, base));
  });
  U12_NO.forEach(([ri, rp, resto, es], j) => {
    const vi = verbo(ri), vp = verbo(rp), ru = "Не " + vi.imperativo.ty + " " + resto + ".";
    out.push({ id: "U12-no-" + j, tipo: "no-imp", forma: "elegir", dificultad: 2, modulo: 8, grupo: "NI-" + j, items: ["lex:" + vi.id], oir: ru, pide: "Completá: «" + es + "»", grande: "Не _____ " + resto + ".",
      opciones: baraja([vi.imperativo.ty, vp.imperativo.ty], j), correcta: vi.imperativo.ty, explicacion: "Para decir «no hagas», не + imperfectivo: **" + ru + "**" });
    if (j % 2) out.push({ id: "U12-now-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "NIw-" + j, items: ["lex:" + vi.id], oir: ru, pide: "Escribí en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [[["чита́ть", "прочита́ть", "писа́ть", "сде́лать"], "ты"], [["позвони́ть", "гото́вить", "дать", "взять"], "ты"], [["помо́чь", "сказа́ть", "пить", "есть"], "вы"]].forEach(([vs, pr], k) => {
    const L = vs.map(verbo);
    out.push({ id: "U12-imemp-" + k, tipo: "imperativo", forma: "emparejar", dificultad: 1, modulo: 8, grupo: "IME-" + k, items: [], pide: "Uní cada verbo con su imperativo (" + pr + ").",
      pares: L.map(v => [v.ac, pr === "ты" ? v.imperativo.ty : v.imperativo.vy]), explicacion: L.map(v => v.ac + " → " + (pr === "ты" ? v.imperativo.ty : v.imperativo.vy)).join(" · ") });
  });
  [["Repita, por favor.", "Повтори́те, пожа́луйста."], ["No lo llames.", "Не звони́ ему́."], ["Llamame seguido.", "Звони́ мне ча́сто."]].forEach(([es, ru], j) =>
    out.push({ id: "U12-imd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 8, grupo: "IMD-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }));
  [["Не откро́й окно́.", "откро́й", "Не открыва́й окно́."], ["Не позвони́ ему́.", "позвони́", "Не звони́ ему́."]].forEach(([mal, w, ok], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-imdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 8, grupo: "IMX-" + j, items: [], oir: ok, pide: "Tocá la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "Para prohibir, не + imperfectivo: **" + ok + "**" });
  });

  /* ── Módulo 9: comparar ── */
  const ADJ12 = ["удо́бный", "интере́сный", "краси́вый", "тёплый", "холо́дный", "бы́стрый", "большо́й", "ма́ленький", "хоро́ший", "плохо́й", "дорого́й", "дешёвый"].map(adj).filter(a => a && a.comp);
  ADJ12.forEach((a, j) => {
    out.push({ id: "U12-cmf-" + j, tipo: "comparar", forma: j % 2 ? "elegir" : "escribir", dificultad: 2, modulo: 9, grupo: "CF-" + j, items: ["lex:" + a.id], oir: a.comp, pide: "Comparativo («más …») de " + a.ac + ".", grande: a.ac,
      explicacion: "**" + a.ac + " → " + a.comp + "**" + (/ее$/.test(a.comp.replace(/\u0301/g, "")) ? " (-ее)." : " (irregular)."),
      ...(j % 2 ? { opciones: baraja(uniq([a.comp, a.m[0], a.f[0], a.n[0]]), j), correcta: a.comp } : { audio: a.comp, audioManual: true, esperadas: [a.comp], idioma: "ru" }) });
  });
  out.push({ id: "U12-cmemp-0", tipo: "comparar", forma: "emparejar", dificultad: 1, modulo: 9, grupo: "CME-0", items: [], pide: "Uní cada adjetivo con su comparativo.",
    pares: ADJ12.slice(6, 10).map(a => [a.ac, a.comp]), explicacion: ADJ12.slice(6, 10).map(a => a.ac + " → " + a.comp).join(" · ") });
  out.push({ id: "U12-cmemp-1", tipo: "comparar", forma: "emparejar", dificultad: 1, modulo: 9, grupo: "CME-1", items: [], pide: "Uní cada adjetivo con su comparativo.",
    pares: ADJ12.slice(0, 4).map(a => [a.ac, a.comp]), explicacion: ADJ12.slice(0, 4).map(a => a.ac + " → " + a.comp).join(" · ") });
  U12_COMP.forEach(([x, y, a0, es], j) => {
    const a = adj(a0), sy = sust(y.toLowerCase()) || sust(y);
    const ru = x + " " + a.comp + ", чем " + y + ".";
    const yGen = sy ? (/^[А-ЯЁ]/.test(y) ? cap(sy.sg[1]) : sy.sg[1]) : null;
    const ruG = yGen ? x + " " + a.comp + " " + yGen + "." : null;
    const otras = [ru].concat(ruG && yGen !== y ? [ruG] : []);
    out.push({ id: "U12-cm-" + j, tipo: "comparar", forma: "elegir", dificultad: 2, modulo: 9, grupo: "CM-" + j, items: ["lex:" + a.id], oir: ru, pide: "Completá: «" + es + "»", grande: x + " _____, чем " + y + ".",
      opciones: baraja(uniq([a.comp, a.m[0], a.f[0], a.n[0]]), j), correcta: a.comp, explicacion: "Comparativo: **" + a.comp + "**, no cambia. " + ru });
    out.push({ id: "U12-cmw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMw-" + j, items: ["lex:" + a.id], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: otras, idioma: "ru", explicacion: ru + (otras[1] ? " También: " + otras[1] : "") });
    if (ruG && yGen !== y) out.push({ id: "U12-cmg-" + j, tipo: "comparar", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMg-" + j, items: ["lex:" + a.id], oir: ruG, pide: "Decilo sin чем, con el genitivo.", grande: ru,
      audio: ruG, audioManual: true, esperadas: [ruG], idioma: "ru", explicacion: "Sin чем, Y va en genitivo: **" + ruG + "**" });
  });
  const SAM = adj("са́мый");
  U12_SAMYJ.forEach(([tpl, g, es], j) => {
    const f = SAM[g][0], ru = tpl.replace("{}", f);
    out.push({ id: "U12-sam-" + j, tipo: "samyj", forma: j % 3 === 2 ? "escribir" : "elegir", dificultad: 2, modulo: 9, grupo: "SM-" + j, items: ["lex:" + SAM.id], oir: ru, pide: j % 3 === 2 ? "Escribí en ruso: «" + es + "»" : "Completá: «" + es + "»",
      explicacion: "са́мый cambia como un adjetivo: **" + f + "**. " + ru,
      ...(j % 3 === 2 ? { audio: ru, audioManual: true, esperadas: [ru], idioma: "ru" } : { grande: tpl.replace("{}", "_____"), opciones: baraja([SAM.m[0], SAM.f[0], SAM.n[0]], j), correcta: f }) });
  });
  [["Hoy hace más calor que ayer.", "Сего́дня тепле́е, чем вчера́."], ["Me gusta más el té.", "Мне бо́льше нра́вится чай."], ["Hablo español mejor que ruso.", "Я говорю́ по-испа́нски лу́чше, чем по-ру́сски."], ["Él habla más rápido.", "Он говори́т быстре́е."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-cmt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-cmd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMD-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 10: todo junto ── */
  [["Llamame mañana, por favor.", "Позвони́ мне за́втра, пожа́луйста."], ["Tengo cinco amigos rusos.", "У меня́ пять ру́сских друзе́й."], ["No le digas a mamá.", "Не говори́ ма́ме."],
   ["Ayer leí el libro y hoy voy a ver la película. (sos hombre)", "Вчера́ я прочита́л кни́гу, а сего́дня я посмотрю́ фильм."], ["Paseo con mis amigos y sus perros.", "Я гуля́ю с мои́ми друзья́ми и их соба́ками."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-mix-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "MX-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-mixd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 10, grupo: "MXd-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  U12_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U12-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 10, grupo: "L12-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U12-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 10, grupo: "L12v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  out.forEach(e => { if (e.explicacion) e.explicacion = u12Palabras(e.explicacion); if (e.pide) e.pide = u12Palabras(e.pide); });
  return out;
}

/* Proyecto «Моя́ неде́ля»: lo detecta por las formas de Casos y de Verbos */
(function () {
  const m = UNIDAD_12.modulos.find(x => x.id === "u12m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const BUDU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
  const verbo = (w, fn) => info(w).some(x => { const v = verboById(x[0]); return v && fn(v, K(w)); });
  const igual = (lista, k) => (lista || []).some(f => K(f) === k);
  const pasPf = w => verbo(w, (v, k) => v.futuro && !v.presente && v.pasado && igual(Object.values(v.pasado), k));
  const pasIm = w => verbo(w, (v, k) => v.presente && v.pasado && igual(Object.values(v.pasado), k));
  const futPf = w => verbo(w, (v, k) => v.futuro && !v.presente && igual(v.futuro, k));
  const imper = w => verbo(w, (v, k) => v.imperativo && igual([v.imperativo.ty, v.imperativo.vy], k));
  const plCaso = w => info(w).some(x => { const cz = casosById(x[0]); if (!cz || !cz.pl || !cz.sg) return false;
    const k = K(w); return [1, 2, 4, 5].some(i => K(cz.pl[i]) === k) && !cz.sg.some(f => K(f) === k) && K(cz.pl[0]) !== k; });
  const POS = ["мой", "твой", "наш", "ваш", "этот"];
  const posCaso = w => info(w).some(x => { const cz = casosById(x[0]); if (!cz || cz.tipo !== "adjetivo" || POS.indexOf(K(cz.ru)) < 0) return false;
    const k = K(w); return [cz.m[0], cz.f[0], cz.n[0], cz.pl[0]].every(f => K(f) !== k); });
  const COMPS = () => { const out = new Set(); Object.values(CASOS).forEach(d => { if (d.comp) out.add(K(d.comp)); }); return out; };
  const compara = t => { const C = COMPS(); return pal(t).some(w => C.has(K(w)) || /^самы/.test(K(w))); };
  const cuenta = (t, fn) => pal(t).filter(fn).length;
  m.requisitos = [
    { txt: "Entre 15 y 20 frases", fn: t => { const n = frases(t).length; return n >= 15 && n <= 20; } },
    { txt: "Al menos 2 pasados perfectivos (пригото́вил, позвони́л…)", fn: t => cuenta(t, pasPf) >= 2 },
    { txt: "Al menos 2 pasados imperfectivos (рабо́тал, чита́л…)", fn: t => cuenta(t, pasIm) >= 2 },
    { txt: "Un futuro perfectivo (посмотрю́, позвоню́…)", fn: t => cuenta(t, futPf) >= 1 },
    { txt: "Al menos 2 plurales en otro caso (с друзья́ми, студе́нтам…)", fn: t => cuenta(t, plCaso) >= 2 },
    { txt: "Un posesivo o э́тот en otro caso (с мои́м бра́том, в э́том до́ме…)", fn: t => cuenta(t, posCaso) >= 1 },
    { txt: "Una comparación (бо́льше, интере́снее, са́мый…)", fn: compara },
    { txt: "Un imperativo (позвони́, не звони́…)", fn: t => cuenta(t, imper) >= 1 }
  ];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f), k = w.map(K);
      k.forEach((x, i) => { const sig = w[i + 1]; if (!sig) return;
        if (BUDU.indexOf(x) >= 0 && (futPf(sig) || verbo(sig, v => v.futuro && !v.presente)))
          out.push("Nunca бу́ду + perfectivo: «" + w[i] + " " + sig + "». Con el perfectivo conjugado ya es futuro.");
        if (x === "не" && imper(sig) && verbo(sig, v => v.futuro && !v.presente)) out.push("Para prohibir va el imperfectivo: «не " + sig + "» no se usa.");
        if ((x === "с" || x === "у" || x === "о" || x === "для") && /^(ей|им|ими)$/.test(K(sig)))
          out.push("Después de preposición, он, она́ y они́ llevan н-: «" + w[i] + " " + sig + "» → " + w[i] + " н" + sig + ".");
        if (/^(пять|шесть|семь|восемь|девять|десять|много)$/.test(x)) info(sig).forEach(z => { const cz = casosById(z[0]);
          if (cz && cz.sg && cz.pl && (K(cz.sg[0]) === K(sig) || K(cz.sg[1]) === K(sig) || K(cz.pl[0]) === K(sig)) && K(cz.pl[1]) !== K(sig)) out.push("Después de «" + w[i] + "» va el genitivo plural: **" + w[i] + " " + cz.pl[1] + "**."); });
      }); });
    return [...new Set(out)];
  } }];
})();

window.UNIDAD_12 = UNIDAD_12;
window.unidad12Modulo = unidad12Modulo;
window.ejerciciosUnidad12 = ejerciciosUnidad12;
window.u12Datos = u12Datos;
window.u12PronForma = u12PronForma;
window.U12_MEZCLA = U12_MEZCLA;
