/* ============================================================
   DATA-UNIDAD-12.JS — Unidad 12: Gramática B1
   ------------------------------------------------------------
   Versión 12/10/2026 (profundización; la primera, del 05/10/2026). Contenido,
   vocabulario y banco de ejercicios.
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
   Profundización (12/10/2026, aprobada por Manu):
   · Teoría con ids de regla (u12-…), ejemplos explicados, errores
     típicos, chequeos y «Más a fondo». Nuevo: никто́ / ничего́ + не,
     -то / -нибудь, свой, не́сколько, cómo se forman las parejas (y las
     que no lo son: почита́ть, заговори́ть), не + proceso / resultado,
     después de нача́ть y не на́до, el fondo y el golpe en el relato,
     прийти́ / уйти́ / прие́хать / уе́хать, el imperativo de invitación
     (Сади́тесь) y más comparativos (Casos, campo comp).
   · El aspecto ya se enseña desde la Unidad 8: acá se profundiza.
   · Vocabulario nuevo: 55 palabras del léxico, en grupos por módulo
     (U12_GRUPOS), con su traducción corta (U12_GLOSA); parejas nuevas
     en U12_PARES_NUEVAS.
   · Banco: unos 1.020 ejercicios. Los tipos que practican la regla
     (porque, natural, oido, par, descubrir, cadena, diagnostico,
     desarmar) son ~20 % de la sesión. Todos llevan `regla`; los viejos
     la toman de REGLA_ID (los pronombres, según la forma: reglaPron).
   ============================================================ */

/* Pronombres: índice de caso → [nom, gen, dat, acc, ins, prep] */
const U12_PRON = ["я", "ты", "он", "она́", "мы", "вы", "они́"];
const U12_PRON_ES = ["yo", "tú", "él", "ella", "nosotros", "ustedes", "ellos"];
/* Frases con un pronombre: [caso, plantilla rusa ({} = pronombre), preposición, español por persona] */
const U12_PRON_FRASES = [
  [3, "Ма́ма зна́ет {}.", "", ["Mamá me conoce.", "Mamá te conoce.", "Mamá lo conoce (a él).", "Mamá la conoce (a ella).", "Mamá nos conoce.", "Mamá los conoce (a ustedes).", "Mamá los conoce (a ellos)."]],
  [1, "{} есть маши́на.", "у", ["Tengo coche.", "Tienes coche.", "Él tiene coche.", "Ella tiene coche.", "Tenemos coche.", "Ustedes tienen coche.", "Ellos tienen coche."]],
  [2, "А́нна звони́т {}.", "", ["Ana me llama.", "Ana te llama.", "Ana lo llama (a él).", "Ana la llama (a ella).", "Ana nos llama.", "Ana los llama (a ustedes).", "Ana los llama (a ellos)."]],
  [4, "А́нна гуля́ет {}.", "с", ["Ana pasea conmigo.", "Ana pasea contigo.", "Ana pasea con él.", "Ana pasea con ella.", "Ana pasea con nosotros.", "Ana pasea con ustedes.", "Ana pasea con ellos."]],
  [5, "А́нна ду́мает {}.", "о", ["Ana piensa en mí.", "Ana piensa en ti.", "Ana piensa en él.", "Ana piensa en ella.", "Ana piensa en nosotros.", "Ana piensa en ustedes.", "Ana piensa en ellos."]]
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
  ["У их сы́на есть маши́на.", "их", ["их", "них", "им", "ним"], "El hijo de ellos tiene coche."]
];
/* э́тот: [frase, forma de э́тот, español] */
const U12_ESTE = [
  ["Я живу́ в э́том до́ме.", "э́том", "Vivo en esta casa."],
  ["Я живу́ в э́той кварти́ре.", "э́той", "Vivo en este apartamento."],
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
  "студе́нт": ["un estudiante", "estudiantes", "🧑‍🎓"], "кни́га": ["un libro", "libros", "📚"], "маши́на": ["un coche", "coches", "🚗"], "сло́во": ["una palabra", "palabras", "🔤"],
  "письмо́": ["una carta", "cartas", "✉️"], "друг": ["un amigo", "amigos", "🧑‍🤝‍🧑"], "брат": ["un hermano", "hermanos", "👦"], "сестра́": ["una hermana", "hermanas", "👧"],
  "учи́тель": ["un maestro", "maestros", "🧑‍🏫"], "врач": ["un médico", "médicos", "🩺"], "музе́й": ["un museo", "museos", "🏛️"], "ру́чка": ["un bolígrafo", "bolígrafos", "🖊️"],
  "го́род": ["una ciudad", "ciudades", "🏙️"], "телефо́н": ["un teléfono", "teléfonos", "📱"], "фильм": ["una película", "películas", "🎬"], "страна́": ["un país", "países", "🌍"],
  "ко́шка": ["una gata", "gatas", "🐈"], "соба́ка": ["un perro", "perros", "🐕"], "у́лица": ["una calle", "calles", "🛣️"], "магази́н": ["un negocio", "negocios", "🏪"],
  "биле́т": ["un billete", "billetes", "🎫"], "язы́к": ["un idioma", "idiomas", "🗣️"], "ко́мната": ["una habitación", "habitaciones", "🚪"], "окно́": ["una ventana", "ventanas", "🪟"],
  "газе́та": ["un diario", "diarios", "📰"], "подру́га": ["una amiga", "amigas", "👭"], "сын": ["un hijo", "hijos", "👦"], "день": ["un día", "días", "📅"], "год": ["un año", "años", "🗓️"]
};
const U12_NUM = [[1, "оди́н", "uno"], [2, "два", "dos"], [3, "три", "tres"], [4, "четы́ре", "cuatro"], [5, "пять", "cinco"], [6, "шесть", "seis"], [7, "семь", "siete"], [10, "де́сять", "diez"]];
/* Plural II: personas en plural con мои́ */
const U12_PL2 = { "друг": "mis amigos", "брат": "mis hermanos", "сестра́": "mis hermanas", "колле́га": "mis colegas", "подру́га": "mis amigas", "сын": "mis hijos" };
const U12_PL2_FRASES = [[2, "Я помога́ю {}.", "Ayudo a {}."], [4, "Я гуля́ю с {}.", "Paseo con {}."], [5, "Я ду́маю о {}.", "Pienso en {}."], [1, "У {} есть маши́ны.", "{} tienen coche."]];
/* Adjetivo + sustantivo en plural: [caso, adjetivo, sustantivo, plantilla, español] */
const U12_ADJPL = [
  [4, "хоро́ший", "друг", "Я гуля́ю с {}.", "Paseo con buenos amigos."],
  [2, "но́вый", "студе́нт", "Учи́тель помога́ет {}.", "El maestro ayuda a los estudiantes nuevos."],
  [5, "большо́й", "го́род", "Мы живём в {}.", "Vivimos en ciudades grandes."],
  [5, "ру́сский", "фильм", "Мы говори́м о {}.", "Hablamos de películas rusas."],
  [1, "интере́сный", "кни́га", "У меня́ мно́го {}.", "Tengo muchos libros interesantes."],
  [0, "краси́вый", "у́лица", "В Москве́ {}.", "En Moscú hay calles bonitas."],
  [3, "но́вый", "биле́т", "Я покупа́ю {}.", "Compro billetes nuevos."],
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
  ["помога́ть", "помо́чь", "ayudar"], ["говори́ть", "сказа́ть", "hablar, decir"], ["брать", "взять", "tomar"], ["идти́", "пойти́", "ir (a pie)"], ["е́хать", "пое́хать", "ir (en vehículo)"]];
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

/* Imperativo. Pedidos (perfectivo): [verbo, resto de la frase, español contigo] */
const U12_PIDE = [["прочита́ть", "э́ту кни́гу", "Lee este libro."], ["позвони́ть", "мне за́втра", "Llámame mañana."], ["закры́ть", "окно́", "Cierra la ventana."], ["откры́ть", "дверь", "Abre la puerta."],
  ["купи́ть", "хлеб", "Compra pan."], ["пригото́вить", "у́жин", "Prepara la cena."], ["помо́чь", "мне", "Ayúdame."], ["дать", "мне ру́чку", "Dame un bolígrafo."],
  ["взять", "такси́", "Toma un taxi."], ["посмотре́ть", "э́тот фильм", "Mira esta película."], ["отве́тить", "мне", "Respóndeme."], ["сде́лать", "зада́ние", "Haz la tarea."], ["написа́ть", "ма́ме", "Escríbele a mamá."]];
/* Negativo (imperfectivo): [imperfectivo, perfectivo, resto, español] */
const U12_NO = [["звони́ть", "позвони́ть", "ему́", "No lo llames."], ["открыва́ть", "откры́ть", "окно́", "No abras la ventana."], ["покупа́ть", "купи́ть", "хлеб", "No compres pan."],
  ["смотре́ть", "посмотре́ть", "э́тот фильм", "No mires esta película."], ["говори́ть", "сказа́ть", "ма́ме", "No le digas a mamá."], ["закрыва́ть", "закры́ть", "дверь", "No cierres la puerta."]];
/* Comparar: [X, Y, adjetivo, español]. Y es un sustantivo (para la variante con genitivo) o null */
const U12_COMP = [["Москва́", "Барсело́на", "большо́й", "Moscú es más grande que Barcelona."], ["Метро́", "авто́бус", "бы́стрый", "El metro es más rápido que el autobús."],
  ["Чай", "ко́фе", "дешёвый", "El té es más barato que el café."], ["Кни́га", "фильм", "интере́сный", "El libro es más interesante que la película."],
  ["Такси́", "метро́", "дорого́й", "El taxi es más caro que el metro."], ["Барсело́на", "Москва́", "тёплый", "Barcelona es más cálida que Moscú."],
  ["Мой телефо́н", "твой", "ма́ленький", "Mi teléfono es más chico que el tuyo."], ["Ру́чка", "каранда́ш", "удо́бный", "El bolígrafo es más cómodo que el lápiz."]];
const U12_SAMYJ = [["Москва́ — {} большо́й го́род Росси́и.", "m", "Moscú es la ciudad más grande de Rusia."], ["Э́то {} краси́вая у́лица.", "f", "Es la calle más bonita."],
  ["Э́то {} интере́сная кни́га.", "f", "Es el libro más interesante."], ["Э́то {} дорого́й рестора́н.", "m", "Es el restaurante más caro."], ["Э́то {} ма́ленькое кафе́.", "n", "Es el bar más chico."],
  ["Э́то {} удо́бное ме́сто.", "n", "Es el lugar más cómodo."]];

/* Módulo 10: lecturas */
const U12_LECTURAS = [
  { id: "brat", titulo: "Мой брат и его́ друзья́", lineas: [
      ["У меня́ два бра́та.", "Tengo dos hermanos."], ["Мой брат Ива́н живёт в Москве́.", "Mi hermano Iván vive en Moscú."], ["У него́ мно́го друзе́й.", "Él tiene muchos amigos."],
      ["Его́ друзья́ — студе́нты.", "Sus amigos son estudiantes."], ["В суббо́ту он гуля́ет с друзья́ми.", "Los sábados pasea con sus amigos."], ["Он помога́ет студе́нтам.", "Ayuda a los estudiantes."],
      ["Я ча́сто ду́маю о нём и звоню́ ему́.", "Pienso a menudo en él y lo llamo."]],
    preguntas: [["¿Cuántos hermanos tiene quien escribe?", "два бра́та", ["пять бра́тьев", "оди́н брат"]], ["¿Con quién pasea Iván los sábados?", "с друзья́ми", ["с бра́том", "с ма́мой"]], ["¿A quién ayuda Iván?", "студе́нтам", ["друзья́м", "бра́ту"]]],
    vf: [["У Ива́на ма́ло друзе́й.", false], ["Ива́н живёт в Москве́.", true], ["Его́ друзья́ — студе́нты.", true]] },
  { id: "kniga", titulo: "Вчера́ и за́втра", lineas: [
      ["Вчера́ я до́лго рабо́тал.", "Ayer trabajé mucho tiempo."], ["Ве́чером я пригото́вил у́жин и позвони́л ма́ме.", "Por la noche preparé la cena y llamé a mamá."],
      ["Пото́м я чита́л кни́гу два часа́.", "Después estuve leyendo un libro dos horas."], ["Но я ещё не прочита́л её.", "Pero todavía no lo terminé."],
      ["За́втра я прочита́ю э́ту кни́гу.", "Mañana voy a terminar este libro."], ["И весь день я бу́ду отдыха́ть.", "Y todo el día voy a descansar."]],
    preguntas: [["¿Qué hizo por la noche, antes de leer?", "пригото́вил у́жин", ["чита́л газе́ту", "смотре́л фильм"]], ["¿Cuánto tiempo leyó?", "два часа́", ["весь день", "пять часо́в"]], ["¿Qué va a hacer mañana todo el día?", "бу́ду отдыха́ть", ["бу́ду рабо́тать", "бу́ду гото́вить"]]],
    vf: [["Он уже́ прочита́л кни́гу.", false], ["Ве́чером он позвони́л ма́ме.", true], ["За́втра он бу́дет рабо́тать весь день.", false]] },
  { id: "goroda", titulo: "Москва́ и Барсело́на", lineas: [
      ["Моя́ подру́га живёт в Барсело́не, а я в Москве́.", "Mi amiga vive en Barcelona, y yo en Moscú."], ["Москва́ бо́льше, чем Барсело́на.", "Moscú es más grande que Barcelona."],
      ["Но в Барсело́не тепле́е.", "Pero en Barcelona hace más calor."], ["По-мо́ему, метро́ в Москве́ са́мое краси́вое.", "Para mí, el metro de Moscú es el más bonito."],
      ["Подру́га пи́шет мне: «Позвони́ мне за́втра!»", "Mi amiga me escribe: «¡Llámame mañana!»"], ["А я отвеча́ю: «Не звони́ мне у́тром, я рабо́таю».", "Y yo le respondo: «No me llames por la mañana, trabajo»."]],
    preguntas: [["¿Dónde vive la amiga?", "в Барсело́не", ["в Москве́", "в Испа́нии"]], ["¿Qué ciudad es más grande?", "Москва́", ["Барсело́на", "Испа́ния"]], ["¿Qué le pide la amiga?", "Позвони́ мне за́втра", ["Не звони́ мне", "Напиши́ мне"]]],
    vf: [["В Москве́ тепле́е, чем в Барсело́не.", false], ["Москва́ бо́льше, чем Барсело́на.", true], ["Подру́га живёт в Москве́.", false]] }
];

/* Palabras que la unidad presenta en cada módulo (verificador de palabras vistas) */
const U12_VISTAS = { 1: "о обо со сам никто́ ничто́ кто́-то кто́-нибудь где́-нибудь", 2: "твой наш ваш об свой", 3: "не́сколько полови́на большинство́",
  5: "сде́лать прочита́ть написа́ть позвони́ть посмотре́ть пригото́вить вы́пить вы́учить отве́тить взять нача́ть зако́нчить откры́ть закры́ть поня́ть пообе́дать поу́жинать отдохну́ть получа́ть реша́ть забыва́ть убра́ть постира́ть помы́ть нарисова́ть спеть стро́ить постро́ить класть положи́ть проверя́ть прове́рить почита́ть порабо́тать заговори́ть",
  6: "подожда́ть встреча́ть", 7: "ка́ждый до́лго прийти́ уйти́ приезжа́ть прие́хать уезжа́ть уе́хать",
  8: "ста́вить поста́вить включа́ть включи́ть выключа́ть вы́ключить позва́ть гро́мко ти́хо",
  9: "удо́бнее интере́снее краси́вее тепле́е холодне́е быстре́е бо́льше ме́ньше лу́чше ху́же доро́же деше́вле са́мый чем тёплый бы́стрый лёгкий просто́й сло́жный ти́хий гро́мкий бли́зкий далёкий у́мный си́льный сла́бый тру́дный лу́чший ста́рший мла́дший" };
/* Vocabulario nuevo (12/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página */
const U12_GRUPOS = [
  [1, "Nadie, alguien, uno mismo", "никто́ ничто́ кто́-то кто́-нибудь где́-нибудь сам"],
  [2, "Su propio", "свой"],
  [3, "Cantidades", "не́сколько полови́на большинство́"],
  [5, "Verbos nuevos", "получа́ть реша́ть забыва́ть убра́ть постира́ть помы́ть нарисова́ть спеть стро́ить постро́ить класть положи́ть проверя́ть прове́рить"],
  [6, "Esperar y recibir", "подожда́ть встреча́ть"],
  [7, "Llegar e irse", "прийти́ уйти́ приезжа́ть прие́хать уезжа́ть уе́хать"],
  [8, "Para pedir", "ста́вить поста́вить включа́ть включи́ть выключа́ть вы́ключить позва́ть гро́мко ти́хо"],
  [9, "Para comparar", "лёгкий просто́й сло́жный ти́хий гро́мкий бли́зкий далёкий у́мный си́льный сла́бый тру́дный лу́чший ста́рший мла́дший"]
];
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario */
const U12_GLOSA = {
  "никто́": "nadie", "ничто́": "nada", "кто́-то": "alguien", "кто́-нибудь": "alguien (quien sea)", "где́-нибудь": "en algún lugar", "сам": "uno mismo",
  "свой": "su (propio)", "не́сколько": "varios", "полови́на": "mitad", "большинство́": "mayoría",
  "получа́ть": "recibir", "реша́ть": "decidir", "забыва́ть": "olvidar", "убра́ть": "ordenar (una vez)", "постира́ть": "lavar la ropa (una vez)", "помы́ть": "lavar (una vez)",
  "нарисова́ть": "dibujar (una vez)", "спеть": "cantar (una vez)", "стро́ить": "construir", "постро́ить": "construir (una vez)", "класть": "poner (acostado)",
  "положи́ть": "poner (acostado, una vez)", "проверя́ть": "revisar", "прове́рить": "revisar (una vez)", "подожда́ть": "esperar (un momento)", "встреча́ть": "ir a buscar, recibir",
  "прийти́": "llegar (a pie)", "уйти́": "irse (a pie)", "приезжа́ть": "llegar (en vehículo)", "прие́хать": "llegar (en vehículo, una vez)", "уезжа́ть": "irse (en vehículo)",
  "уе́хать": "irse (en vehículo, una vez)", "ста́вить": "poner (parado)", "поста́вить": "poner (parado, una vez)", "включа́ть": "prender", "включи́ть": "prender (una vez)",
  "выключа́ть": "apagar", "вы́ключить": "apagar (una vez)", "позва́ть": "llamar (a alguien)", "гро́мко": "fuerte (en voz alta)", "ти́хо": "bajo, en voz baja",
  "лёгкий": "fácil, liviano", "просто́й": "simple", "сло́жный": "complicado", "ти́хий": "tranquilo", "гро́мкий": "ruidoso, fuerte", "бли́зкий": "cercano", "далёкий": "lejano",
  "у́мный": "inteligente", "си́льный": "fuerte", "сла́бый": "débil", "тру́дный": "difícil", "лу́чший": "el mejor", "ста́рший": "mayor", "мла́дший": "menor"
};
/* Parejas nuevas de esta unidad (tabla del módulo 5): [proceso, resultado, español, cómo se forma] */
const U12_PARES_NUEVAS = [["рисова́ть", "нарисова́ть", "dibujar", "prefijo"], ["петь", "спеть", "cantar", "prefijo"], ["стро́ить", "постро́ить", "construir", "prefijo"],
  ["стира́ть", "постира́ть", "lavar la ropa", "prefijo"], ["мыть", "помы́ть", "lavar", "prefijo"], ["убира́ть", "убра́ть", "ordenar", "final"],
  ["получа́ть", "получи́ть", "recibir", "final"], ["реша́ть", "реши́ть", "decidir", "final"], ["забыва́ть", "забы́ть", "olvidar", "final"], ["проверя́ть", "прове́рить", "revisar", "final"],
  ["включа́ть", "включи́ть", "prender", "final"], ["выключа́ть", "вы́ключить", "apagar", "final"], ["встреча́ть", "встре́тить", "ir a buscar, encontrarse", "final"],
  ["ста́вить", "поста́вить", "poner (parado)", "prefijo"], ["класть", "положи́ть", "poner (acostado)", "otra"], ["приходи́ть", "прийти́", "llegar (a pie)", "final"],
  ["уходи́ть", "уйти́", "irse (a pie)", "final"], ["приезжа́ть", "прие́хать", "llegar (en vehículo)", "final"], ["уезжа́ть", "уе́хать", "irse (en vehículo)", "final"], ["ждать", "подожда́ть", "esperar", "prefijo"]];

const UNIDAD_12 = {
  id: 12,
  titulo: "Gramática B1",
  tituloRu: "Грамма́тика B1",
  objetivo: "Usar los pronombres y los posesivos en todos los casos, el plural en los seis casos, el aspecto de los verbos, el imperativo y las comparaciones.",
  tiempo: "4 a 5 semanas con práctica diaria (unas 45–55 horas)",
  modulos: [
    { id: "u12m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "Los pronombres en todos los casos", resumen: "меня́, мне, со мной, обо мне. Никто́ не…",
      intro: "Ya usaste muchos pronombres sueltos: меня́ зову́т, у меня́, мне нра́вится, со мной. Aquí van todos juntos, en los seis casos, más dos piezas que faltaban: «nadie, nada» y «alguien, algo».",
      secciones: [
        { titulo: "Ya los conoces", texto: "Cada pronombre tiene una forma para cada caso, y ya usaste casi todas:",
          ejemplos: [
            { ru: "{Меня́} зову́т А́нна.", es: "Me llamo Ana.", por: "Acusativo: «a mí me llaman»." },
            { ru: "У {меня́} есть брат.", es: "Tengo un hermano.", por: "Genitivo: у + quién tiene." },
            { ru: "{Мне} нра́вится му́зыка.", es: "Me gusta la música.", por: "Dativo: a quién le gusta." },
            { ru: "А́нна гуля́ет со {мной}.", es: "Ana pasea conmigo.", por: "Instrumental: con quién." },
            { ru: "А́нна ду́мает обо {мне}.", es: "Ana piensa en mí.", por: "Prepositivo: en quién." }] },
        { id: "u12-pron-acc-gen", titulo: "Acusativo y genitivo: la misma forma",
          texto: "En los pronombres, acusativo y genitivo son iguales: меня́, тебя́, его́, её, нас, вас, их. Así que una sola forma sirve para «me ve» y para «junto a mí».",
          ejemplos: [
            { ru: "Ма́ма зна́ет {тебя́}.", es: "Mamá te conoce.", por: "Acusativo: a quién conoce." },
            { ru: "У {тебя́} есть вре́мя?", es: "¿Tienes tiempo?", por: "Genitivo: у + quién." },
            { ru: "Я ви́жу {их}.", es: "Los veo.", por: "Acusativo de они́." }],
          chequeo: [{ pide: "Ма́ма ждёт ___ (a nosotros).", opciones: ["нас", "нам", "на́ми"], ok: "нас", por: "ждать pide acusativo (a quién se espera): нас. Нам es dativo y на́ми, instrumental." }] },
        { id: "u12-pron-dat-ins", titulo: "Dativo e instrumental",
          texto: "dativo: мне, тебе́, ему́, ей, нам, вам, им\ninstrumental: мной, тобо́й, им, ей, на́ми, ва́ми, и́ми\nDos formas se repiten: им (dativo de они́ e instrumental de он) y ей (dativo e instrumental de она́). El verbo o la preposición dicen cuál es.",
          ejemplos: [
            { ru: "А́нна звони́т {нам}.", es: "Ana nos llama.", por: "звони́ть + dativo." },
            { ru: "А́нна гуля́ет с {на́ми}.", es: "Ana pasea con nosotros.", por: "с + instrumental." },
            { ru: "Я звоню́ {ей}.", es: "La llamo.", por: "Dativo de она́." }],
          errores: [{ mal: "Я помога́ю её.", bien: "Я помога́ю {ей}.", por: "помога́ть pide dativo: ей." }],
          chequeo: [{ pide: "Я пишу́ ___ (a él).", opciones: ["ему́", "его́"], ok: "ему́", por: "A quién se escribe: dativo." }] },
        { id: "u12-pron-n", titulo: "La н- después de preposición",
          texto: "Con он, она́ y они́, después de una preposición se agrega **н-**. Sin preposición, no.",
          ejemplos: [
            { ru: "У {него́} есть маши́на.", es: "Él tiene un coche.", por: "у + него́." },
            { ru: "Я гуля́ю с {ней}.", es: "Paseo con ella.", por: "с + ней." },
            { ru: "Мы говори́м о {них}.", es: "Hablamos de ellos.", por: "о + них." },
            { ru: "Ма́ма зна́ет {его́}.", es: "Mamá lo conoce.", por: "Sin preposición: sin н-." }],
          destacado: "preposición + него́, неё, ней, них…",
          errores: [{ mal: "Я гуля́ю с ей.", bien: "Я гуля́ю с {ней}.", por: "Después de una preposición, **н-**." }],
          chequeo: [{ pide: "У ___ есть соба́ка (ella).", opciones: ["неё", "её"], ok: "неё", por: "Después de у: **н-**." }] },
        { id: "u12-pron-so", titulo: "Con я: со мной y обо мне",
          texto: "Para que se pueda pronunciar, la preposición suma una о: с → со мной («conmigo»), о → обо мне («de mí, en mí»). Con los demás no cambia: с тобо́й, о тебе́.",
          ejemplos: [
            { ru: "Пойдём {со мной}!", es: "¡Vamos conmigo!", por: "со мной, no «с мной»." },
            { ru: "Ты ду́маешь {обо мне}?", es: "¿Piensas en mí?", por: "обо мне." }] },
        { id: "u12-nikto", titulo: "Nadie, nada: никто́ не…, ничего́ не…",
          antes: { pide: "Я никогда́ не чита́ю газе́ты. ¿Y «nadie llama»?", opciones: ["Никто́ не звони́т.", "Никто́ звони́т."], ok: "Никто́ не звони́т.", por: "Como con никогда́: la frase lleva también не." },
          texto: "никто́ («nadie») y ничего́ («nada») funcionan como никогда́: el verbo lleva не. Y cambian de caso como кто y что: никого́ («a nadie»), никому́, ни с кем.\nPara «nada» se usa casi siempre ничего́ (la forma de genitivo).",
          ejemplos: [
            { ru: "{Никто́ не} звони́т.", es: "Nadie llama.", por: "никто́ + не + verbo." },
            { ru: "Я {ничего́ не} зна́ю.", es: "No sé nada.", por: "ничего́ + не." },
            { ru: "Я {никого́ не} ви́жу.", es: "No veo a nadie.", por: "Acusativo: никого́." },
            { ru: "Она́ {никому́ не} звони́ла.", es: "No llamó a nadie.", por: "звони́ть + dativo: никому́." }],
          comparacion: "Como en español: «no veo a nadie», «no sé nada». El ruso también dice el «no».",
          errores: [{ mal: "Никто́ звони́т.", bien: "Никто́ {не} звони́т.", por: "Falta не." },
            { mal: "Я не зна́ю ничто́.", bien: "Я ничего́ не зна́ю.", por: "«Nada» con un verbo negado: ничего́." }],
          mas: { texto: "Con preposición, la preposición se mete en el medio: ни с кем («con nadie»), ни о чём («de nada»). Я ни с кем не говори́л: «no hablé con nadie»." },
          chequeo: [{ pide: "«No entiendo nada»", opciones: ["Я ничего́ не понима́ю.", "Я ничего́ понима́ю."], ok: "Я ничего́ не понима́ю.", por: "ничего́ + не." }] },
        { id: "u12-to-nibud", titulo: "Alguien, algo: -то y -нибудь",
          texto: "**-то**: кто́-то es «alguien» que existe pero no sabes quién: Кто́-то звони́т («alguien llama»). **-нибудь**: кто́-нибудь es «alguien, quien sea»: va en preguntas, pedidos y planes. Lo mismo con что́-то / что́-нибудь.",
          ejemplos: [
            { ru: "{Кто́-то} звони́т.", es: "Alguien llama.", por: "Hay alguien, no sabes quién: **-то**." },
            { ru: "{Кто́-нибудь} зна́ет?", es: "¿Alguien sabe?", por: "Pregunta, quien sea: **-нибудь**." },
            { ru: "Ты {кому́-нибудь} звони́л?", es: "¿Llamaste a alguien?", por: "Pregunta: **-нибудь**, en dativo." }],
          mas: { texto: "La pista: si la cosa ya pasó o está pasando, **-то** (Я что́-то ви́жу, «veo algo»). Si es una pregunta, un pedido o el futuro, **-нибудь** (Ты что́-нибудь хо́чешь?)." },
          chequeo: [{ pide: "«¿Quieres algo?»", opciones: ["Ты что́-нибудь хо́чешь?", "Ты что́-то хо́чешь?"], ok: "Ты что́-нибудь хо́чешь?", por: "Pregunta: **-нибудь**." }] }
      ] },
    { id: "u12m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Posesivos, свой y э́тот", resumen: "моему́ бра́ту, свою́ ма́му, в э́том до́ме.",
      intro: "мой, твой, наш, ваш y э́тот cambian como los adjetivos: van en el mismo género, número y caso que la palabra que acompañan. Y aparece свой, «su propio», que el español no tiene.",
      secciones: [
        { id: "u12-pos-casos", titulo: "Los posesivos en los otros casos",
          texto: "En nominativo ya los conoces: мой брат, моя́ ма́ма, моё письмо́, мои́ друзья́. En los demás casos, el posesivo va en el mismo caso que la palabra: si брат va en dativo, мой también.\nтвой cambia como мой: твоему́, твое́й. ваш cambia como наш: ва́шему, ва́шей.",
          ejemplos: [
            { ru: "Я звоню́ {моему́} бра́ту.", es: "Llamo a mi hermano.", por: "Dativo: моему́ бра́ту." },
            { ru: "Я гуля́ю с {мое́й} сестро́й.", es: "Paseo con mi hermana.", por: "Instrumental: мое́й сестро́й." },
            { ru: "У {моего́} дру́га есть соба́ка.", es: "Mi amigo tiene un perro.", por: "Genitivo: моего́ дру́га." },
            { ru: "Я ду́маю о {на́шей} ма́ме.", es: "Pienso en nuestra mamá.", por: "Prepositivo: на́шей ма́ме." }],
          destacado: "El posesivo va en el mismo caso que la palabra.",
          ojo: "па́па es masculino aunque termine en -а: моему́ па́пе, с мои́м па́пой.",
          errores: [{ mal: "Я звоню́ мой брат.", bien: "Я звоню́ {моему́ бра́ту}.", por: "Las dos palabras en dativo." }],
          chequeo: [{ pide: "Я гуля́ю с ___ подру́гой.", opciones: ["мое́й", "моя́"], ok: "мое́й", por: "Instrumental." }] },
        { id: "u12-ego-eyo", titulo: "его́, её, их no cambian nunca",
          texto: "Como posesivos («de él», «de ella», «de ellos»), его́, её e их quedan igual en todos los casos. Y no llevan **н-** aunque vayan después de una preposición.",
          ejemplos: [
            { ru: "Я звоню́ {его́} ма́ме.", es: "Llamo a la mamá de él.", por: "его́ no cambia." },
            { ru: "У {её} бра́та есть соба́ка.", es: "El hermano de ella tiene un perro.", por: "у её бра́та: sin **н-**, porque es «de ella»." },
            { ru: "Я гуля́ю с {их} соба́кой.", es: "Paseo con el perro de ellos.", por: "их no cambia." }],
          errores: [{ mal: "у него́ бра́та", bien: "у {его́} бра́та", por: "«Del hermano de él»: его́ es posesivo, sin **н-**." }] },
        { id: "u12-svoy", titulo: "свой: su propio",
          antes: { pide: "«Iván ama a su esposa» (la de él mismo). ¿Cuál?", opciones: ["Ива́н лю́бит свою́ жену́.", "Ива́н лю́бит его́ жену́."], ok: "Ива́н лю́бит свою́ жену́.", por: "Si es la de quien hace la acción: свой. Его́ жену́ sería la de otro hombre." },
          texto: "Cuando lo que se tiene es de quien hace la acción, el ruso usa свой («su propio»), que cambia como мой. Con я y ты también se puede decir мой / твой; con он, она́ y они́ hace falta свой, porque его́ sería de otra persona.",
          ejemplos: [
            { ru: "Ива́н лю́бит {свою́} жену́.", es: "Iván ama a su esposa (la suya).", por: "Es de Iván: свою́, en acusativo." },
            { ru: "Ива́н лю́бит {его́} жену́.", es: "Iván ama a la esposa de él (de otro).", por: "его́: la de otro hombre." },
            { ru: "Она́ звони́т {свое́й} ма́ме.", es: "Ella llama a su mamá.", por: "Dativo: свое́й ма́ме." },
            { ru: "Они́ живу́т в {свое́й} кварти́ре.", es: "Viven en su apartamento.", por: "Prepositivo: в свое́й кварти́ре." }],
          comparacion: "En español «su» sirve para todo: «Iván ama a su esposa» no dice de quién. El ruso lo distingue: свою́ (la suya) o его́ (la de otro).",
          errores: [{ mal: "Ма́ша звони́т её ма́ме.", bien: "Ма́ша звони́т {свое́й} ма́ме.", por: "Si es la mamá de Masha, свое́й. её ма́ме sería la mamá de otra." }],
          mas: { texto: "свой no va en el sujeto: «su hermano trabaja» es Его́ брат рабо́тает, nunca «Свой брат». свой mira hacia atrás, a quien hace la acción, y por eso no puede ser el que la hace." },
          chequeo: [{ pide: "«Ana busca su teléfono» (el suyo)", opciones: ["А́нна и́щет свой телефо́н.", "А́нна и́щет её телефо́н."], ok: "А́нна и́щет свой телефо́н.", por: "Es de Ana: свой." }] },
        { id: "u12-etot", titulo: "э́тот: este, esta",
          texto: "э́тот, э́та, э́то, э́ти acompañan a una palabra y cambian con ella. En cambio, en «Э́то мой брат» («este es mi hermano»), э́то presenta algo y no cambia.",
          ejemplos: [
            { ru: "Я живу́ в {э́том} до́ме.", es: "Vivo en esta casa.", por: "Prepositivo: в э́том до́ме." },
            { ru: "Я хочу́ купи́ть {э́ту} руба́шку.", es: "Quiero comprar esta camisa.", por: "Acusativo: э́ту руба́шку." },
            { ru: "{Э́то} моя́ сестра́.", es: "Esta es mi hermana.", por: "Presenta: no cambia." }],
          chequeo: [{ pide: "Я говорю́ с ___ челове́ком.", opciones: ["э́тим", "э́тот"], ok: "э́тим", por: "Instrumental." }] },
        { id: "u12-ob", titulo: "о → об",
          texto: "Antes de una vocal, о se vuelve об, para que se pueda pronunciar.",
          ejemplos: [{ ru: "Мы говори́м {об} э́том фи́льме.", es: "Hablamos de esta película.", por: "э́том empieza con vocal: об." }] }
      ] },
    { id: "u12m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Plural I: cantidades y números", resumen: "мно́го книг, пять бра́тьев, не́сколько дней.",
      intro: "Hasta ahora casi todo fue en singular. Primero, el plural que ya viste; después, el genitivo plural, que es el que se usa para contar.",
      secciones: [
        { id: "u12-pl-nom", titulo: "Nominativo plural (repaso)",
          texto: "masculino y femenino en **-а**: **-ы**: студе́нт → студе́нты, маши́на → маши́ны\nDespués de **г, к, х, ж, ш, ч, щ**, y en **-ь**, **-й**, **-я**: **-и**: кни́га → кни́ги, музе́й → музе́и\nneutro: **-о** → **-а**: сло́во → слова́\nIrregulares: друг → друзья́, брат → бра́тья, ребёнок → де́ти, челове́к → лю́ди" },
        { id: "u12-gen-pl", titulo: "Genitivo plural: las terminaciones",
          antes: { pide: "студе́нт → студе́нтов · биле́т → биле́тов. ¿Y магази́н?", opciones: ["магази́нов", "магази́н"], ok: "магази́нов", por: "Masculino terminado en consonante: **-ов**." },
          texto: "masculino: **-ов**: студе́нт → студе́нтов\nmasculino en **-й**: **-ев**: музе́й → музе́ев\nmasculino en **-ь, -ж, -ш, -ч, -щ**: **-ей**: учи́тель → учителе́й, врач → враче́й\nfemenino en **-а** y neutro en **-о**: se saca la vocal: кни́га → книг, сло́во → слов\nA veces aparece una vocal para poder pronunciarlo: ру́чка → ру́чек, письмо́ → пи́сем",
          ejemplos: [
            { ru: "мно́го {студе́нтов}", es: "muchos estudiantes", por: "Masculino: **-ов**." },
            { ru: "пять {враче́й}", es: "cinco médicos", por: "Después de **ч**: -ей." },
            { ru: "мно́го {книг}", es: "muchos libros", por: "Femenino: sin terminación." },
            { ru: "не́сколько {пи́сем}", es: "varias cartas", por: "Sin terminación, y aparece una **е**." }],
          destacado: "**-ов** · **-ев** · **-ей** · sin terminación",
          errores: [{ mal: "пять кни́ги", bien: "пять {книг}", por: "De 5 en adelante, genitivo plural." }],
          chequeo: [{ pide: "мно́го ___ (музе́й)", opciones: ["музе́ев", "музе́ов"], ok: "музе́ев", por: "En **-й**: **-ев**." }] },
        { id: "u12-gen-pl-irreg", titulo: "Los irregulares",
          texto: "Algunos de los más usados son irregulares: друг → друзе́й, брат → бра́тьев, ребёнок → дете́й, челове́к → люде́й, год → лет.",
          ejemplos: [
            { ru: "У меня́ мно́го {друзе́й}.", es: "Tengo muchos amigos.", por: "друг → друзе́й." },
            { ru: "Мне два́дцать {лет}.", es: "Tengo veinte años.", por: "год → лет." }],
          ojo: "No hace falta memorizarlos todos: toca la palabra y vas a ver su plural." },
        { id: "u12-contar", titulo: "Contar: 1, 2–4, 5 o más",
          texto: "Es la misma cuenta de час y рубль: 1 → nominativo singular; 2, 3, 4 → genitivo singular; 5 o más → genitivo plural. Lo mismo con мно́го, ма́ло, ско́лько y не́сколько («varios»): genitivo plural.",
          ejemplos: [
            { ru: "{оди́н} брат · {два} бра́та · {пять} бра́тьев", es: "un hermano · dos hermanos · cinco hermanos", por: "1 · 2–4 · 5 o más." },
            { ru: "{две} кни́ги", es: "dos libros", por: "Con palabras femeninas, два se vuelve две." },
            { ru: "{не́сколько} дней", es: "varios días", por: "не́сколько + genitivo plural." },
            { ru: "{Ско́лько} у тебя́ бра́тьев?", es: "¿Cuántos hermanos tienes?", por: "ско́лько + genitivo plural." }],
          destacado: "1 → nominativo · 2-4 → genitivo singular · 5+ → genitivo plural",
          errores: [{ mal: "две бра́та", bien: "{два} бра́та", por: "брат es masculino: два." }],
          chequeo: [{ pide: "три ___ (сестра́)", opciones: ["сестры́", "сестёр"], ok: "сестры́", por: "2, 3, 4: genitivo singular." }] },
        { id: "u12-acc-pl", titulo: "Acusativo plural",
          texto: "Cosas: igual que el nominativo: Я покупа́ю кни́ги. Personas y animales: igual que el genitivo: Я ви́жу студе́нтов. Es la misma idea del acusativo animado del singular.",
          ejemplos: [
            { ru: "Я покупа́ю {кни́ги}.", es: "Compro libros.", por: "Cosas: como el nominativo." },
            { ru: "Я ви́жу {студе́нтов}.", es: "Veo a los estudiantes.", por: "Personas: como el genitivo." },
            { ru: "Я люблю́ {соба́к}.", es: "Me encantan los perros.", por: "Animales: como el genitivo." }],
          chequeo: [{ pide: "Я жду ___ (друзья́).", opciones: ["друзе́й", "друзья́"], ok: "друзе́й", por: "Personas: como el genitivo." }] }
      ] },
    { id: "u12m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Plural II: los otros casos", resumen: "с друзья́ми, о де́тях, в больши́х города́х.",
      intro: "En dativo, instrumental y prepositivo, el plural casi no tiene excepciones: las mismas terminaciones para todas las palabras.",
      secciones: [
        { id: "u12-pl-dat-ins-prep", titulo: "-ам, -ами, -ах",
          texto: "dativo: **-ам** / **-ям**: студе́нтам, друзья́м\ninstrumental: **-ами** / **-ями**: со студе́нтами, с друзья́ми\nprepositivo: **-ах** / **-ях**: в города́х, о друзья́х\nCon **-я** cuando la palabra es blanda (друзья́, учителя́).",
          ejemplos: [
            { ru: "Я помога́ю {друзья́м}.", es: "Ayudo a los amigos.", por: "Dativo: **-ям**." },
            { ru: "Мы гуля́ем с {детьми́}.", es: "Paseamos con los chicos.", por: "Instrumental: де́ти → детьми́ (especial)." },
            { ru: "Он ду́мает о {де́тях}.", es: "Piensa en los chicos.", por: "Prepositivo: **-ях**." },
            { ru: "в больши́х {города́х}", es: "en las ciudades grandes", por: "Prepositivo: **-ах**." }],
          destacado: "**-ам** · **-ами** · **-ах**",
          ojo: "лю́ди y де́ти: с людьми́, с детьми́.",
          chequeo: [{ pide: "Я звоню́ ___ (los estudiantes).", opciones: ["студе́нтам", "студе́нтами"], ok: "студе́нтам", por: "звони́ть + dativo: **-ам**." }] },
        { id: "u12-adj-pl", titulo: "Los adjetivos en plural",
          texto: "En plural hay una sola forma para los tres géneros:\nnominativo: **-ые** / **-ие**: но́вые кни́ги\ngenitivo y prepositivo: **-ых** / **-их**: мно́го но́вых книг\ndativo: **-ым** / **-им**: но́вым студе́нтам\ninstrumental: **-ыми** / **-ими**: с хоро́шими друзья́ми",
          ejemplos: [
            { ru: "мно́го {но́вых} книг", es: "muchos libros nuevos", por: "Genitivo plural: **-ых**." },
            { ru: "с {хоро́шими} друзья́ми", es: "con buenos amigos", por: "Instrumental plural: **-ими**." }],
          errores: [{ mal: "с хоро́шие друзья́ми", bien: "с {хоро́шими} друзья́ми", por: "El adjetivo, en el mismo caso." }] },
        { id: "u12-pos-pl", titulo: "Los posesivos en plural",
          texto: "мои́ друзья́ · у мои́х друзе́й · мои́м друзья́м · с мои́ми друзья́ми · о мои́х друзья́х\nна́ши, ва́ши, свои́ y э́ти cambian igual.",
          ejemplos: [{ ru: "Я гуля́ю с {мои́ми} друзья́ми.", es: "Paseo con mis amigos.", por: "Instrumental plural." },
            { ru: "в {э́тих} города́х", es: "en estas ciudades", por: "Prepositivo plural." }] }
      ] },
    { id: "u12m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Aspecto: cómo se forman las parejas", resumen: "нарисова́ть, получи́ть, положи́ть.",
      intro: "Ya sabes para qué sirve cada verbo de la pareja: proceso o algo que se repite; resultado, una vez. Aquí, cómo se reconocen las parejas, y cuáles no lo son.",
      secciones: [
        { id: "u12-asp-repaso", titulo: "Proceso o resultado, en una tabla",
          texto: "pasado: чита́л (proceso, «leía, estuve leyendo») · прочита́л (resultado, «lo leí»)\nfuturo: бу́ду чита́ть · прочита́ю\ndespués de хочу́, ну́жно: чита́ть (en general) · прочита́ть (una vez)\nEn presente, solo el de proceso: el de resultado conjugado ya es futuro.",
          ejemplos: [
            { ru: "Вчера́ я {чита́л} кни́гу.", es: "Ayer estuve leyendo un libro.", por: "Proceso." },
            { ru: "Вчера́ я {прочита́л} кни́гу.", es: "Ayer leí el libro (lo terminé).", por: "Resultado." }],
          destacado: "proceso · resultado" },
        { id: "u12-asp-prefijo", titulo: "Con un prefijo",
          texto: "La forma más común: al de proceso se le agrega un prefijo. No hay regla para saber cuál: **по-**, **на-**, **с-**, **про-**, **при-**, **вы-**… Se aprenden de a dos.",
          ejemplos: [
            { ru: "рисова́ть → {на}рисова́ть", es: "dibujar", por: "**на-**." },
            { ru: "петь → {с}петь", es: "cantar", por: "**с-**." },
            { ru: "стро́ить → {по}стро́ить", es: "construir", por: "**по-**." },
            { ru: "стира́ть → {по}стира́ть", es: "lavar la ropa", por: "**по-**." }],
          chequeo: [{ pide: "мыть → ?", opciones: ["помы́ть", "мыва́ть"], ok: "помы́ть", por: "Con prefijo: **по-**." }] },
        { id: "u12-asp-sufijo", titulo: "Cambiando el final",
          texto: "Otras parejas cambian el final: el de proceso suele ser más largo (**-ать** / **-ять** / **-ывать**) y el de resultado, más corto (**-ить**).",
          ejemplos: [
            { ru: "получ{а́ть} → получ{и́ть}", es: "recibir", por: "**-ать** → **-ить**." },
            { ru: "реш{а́ть} → реш{и́ть}", es: "decidir", por: "**-ать** → **-ить**." },
            { ru: "забыв{а́ть} → заб{ы́ть}", es: "olvidar", por: "El de proceso, más largo." },
            { ru: "провер{я́ть} → прове́р{ить}", es: "revisar", por: "**-ять** → **-ить**." }],
          truco: "Si los dos verbos se parecen, casi siempre el más largo es el de proceso: покупа́ть / купи́ть." },
        { id: "u12-asp-otra", titulo: "Con otra palabra",
          texto: "Unas pocas parejas son dos palabras distintas. Son de las más usadas, así que ya conoces casi todas.",
          ejemplos: [
            { ru: "{говори́ть} → {сказа́ть}", es: "decir", por: "Otra palabra." },
            { ru: "{брать} → {взять}", es: "tomar", por: "Otra palabra." },
            { ru: "{класть} → {положи́ть}", es: "poner (acostado)", por: "Otra palabra." }] },
        { id: "u12-no-pareja", titulo: "Lo que no es una pareja",
          texto: "Algunos verbos con **по-** o **за-** no son el resultado de otro: le agregan un matiz.\n**по-** = «un rato»: почита́ть («leer un rato»), порабо́тать («trabajar un rato»)\n**за-** = «empezar a»: заговори́ть («ponerse a hablar»)\nLa pareja de чита́ть es прочита́ть (terminar de leer), no почита́ть.",
          ejemplos: [
            { ru: "Я {почита́л} и пошёл спать.", es: "Leí un rato y me fui a dormir.", por: "почита́ть: un rato, no terminé el libro." },
            { ru: "Я {прочита́л} кни́гу.", es: "Leí el libro (entero).", por: "прочита́ть: resultado." },
            { ru: "Он {заговори́л} по-ру́сски.", es: "Se puso a hablar en ruso.", por: "**за-**: empezar a." }],
          mas: { texto: "En la ficha de cada verbo, la pareja aparece con una etiqueta cuando no es de resultado: «un rato», «empezar a» o «ir y volver»." },
          chequeo: [{ pide: "«Terminé el libro»", opciones: ["Я прочита́л кни́гу.", "Я почита́л кни́гу."], ok: "Я прочита́л кни́гу.", por: "Terminar: прочита́ть." }] }
      ] },
    { id: "u12m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Aspecto: negación y futuro", resumen: "Я не чита́л / не прочита́л. Не на́до звони́ть.",
      intro: "Dos lugares donde el aspecto cambia el sentido de verdad: cuando niegas, y después de algunos verbos.",
      secciones: [
        { id: "u12-neg-imperf", titulo: "No lo hice / no lo terminé",
          texto: "Con не, el de proceso dice que la acción no pasó para nada; el de resultado, que empezó pero no llegó al final.",
          ejemplos: [
            { ru: "Я не {чита́л} э́ту кни́гу.", es: "No leí ese libro (nunca lo empecé).", por: "не + proceso: no pasó." },
            { ru: "Я не {прочита́л} кни́гу.", es: "No terminé el libro.", por: "не + resultado: no llegó al final." },
            { ru: "Ты {звони́л} ма́ме? — Нет, не звони́л.", es: "¿Llamaste a mamá? — No, no llamé.", por: "La respuesta negativa, con el de proceso." }],
          destacado: "не + proceso = no pasó · не + resultado = no se terminó",
          chequeo: [{ pide: "Empezaste la tarea pero no la terminaste.", opciones: ["Я не сде́лал зада́ние.", "Я не де́лал зада́ние."], ok: "Я не сде́лал зада́ние.", por: "No llegó al final: resultado." }] },
        { id: "u12-dos-futuros", titulo: "Los dos futuros (repaso)",
          texto: "бу́ду + infinitivo del de proceso: lo que vas a estar haciendo o vas a hacer a menudo. El de resultado conjugado: lo que vas a terminar, una vez. Nunca бу́ду + resultado.",
          ejemplos: [
            { ru: "За́втра я {бу́ду чита́ть}.", es: "Mañana voy a estar leyendo.", por: "Proceso." },
            { ru: "За́втра я {прочита́ю} кни́гу.", es: "Mañana voy a leer el libro (entero).", por: "Resultado." },
            { ru: "Я тебя́ {подожду́}.", es: "Te espero.", por: "Una vez: подожда́ть." }],
          errores: [{ mal: "Я бу́ду прочита́ть.", bien: "Я {прочита́ю}.", por: "Nunca бу́ду + resultado." }],
          chequeo: [{ pide: "«Mañana voy a terminar la carta»", opciones: ["За́втра я напишу́ письмо́.", "За́втра я бу́ду написа́ть письмо́."], ok: "За́втра я напишу́ письмо́.", por: "Resultado conjugado." }] },
        { id: "u12-hochu", titulo: "Después de хочу́, ну́жно, мо́жно (repaso)",
          texto: "Para una acción concreta, que se hace una vez, va el de resultado: хочу́ купи́ть, ну́жно позвони́ть. Para algo en general o que se repite, el de proceso: люблю́ чита́ть, мо́жно плати́ть ка́ртой (en general).",
          ejemplos: [
            { ru: "Я хочу́ {сде́лать} зада́ние.", es: "Quiero hacer la tarea.", por: "Una vez: сде́лать." },
            { ru: "Мне ну́жно {позвони́ть} ма́ме.", es: "Tengo que llamar a mamá.", por: "Una vez: позвони́ть." },
            { ru: "Я люблю́ {чита́ть}.", es: "Me gusta leer.", por: "En general: чита́ть." }],
          chequeo: [{ pide: "«Quiero comprar este libro»", opciones: ["Я хочу́ купи́ть э́ту кни́гу.", "Я хочу́ покупа́ть э́ту кни́гу."], ok: "Я хочу́ купи́ть э́ту кни́гу.", por: "Una compra concreta: купи́ть." }] },
        { id: "u12-inf-imperf", titulo: "Después de empezar, terminar, no hace falta",
          texto: "Después de начина́ть / нача́ть, зака́нчивать / зако́нчить, люби́ть y нра́виться va siempre el de proceso: lo que empieza o termina es un proceso. Y para «no hace falta» o «no se puede» (не на́до, нельзя́), también el de proceso.",
          ejemplos: [
            { ru: "Я на́чал {чита́ть}.", es: "Empecé a leer.", por: "Después de нача́ть: proceso." },
            { ru: "Мы зако́нчили {рабо́тать}.", es: "Terminamos de trabajar.", por: "Después de зако́нчить: proceso." },
            { ru: "Не на́до {звони́ть}.", es: "No hace falta llamar.", por: "Después de не на́до: proceso." }],
          errores: [{ mal: "Я на́чал прочита́ть.", bien: "Я на́чал {чита́ть}.", por: "Después de нача́ть, el de proceso." }],
          chequeo: [{ pide: "Он зако́нчил ___.", opciones: ["писа́ть", "написа́ть"], ok: "писа́ть", por: "Después de зако́нчить: proceso." }] }
      ] },
    { id: "u12m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Aspecto en el relato", resumen: "Я пришёл, поу́жинал и лёг спать.",
      intro: "En un relato, el aspecto ordena las acciones: qué pasaba de fondo, qué pasó una vez, qué vino después.",
      secciones: [
        { id: "u12-marcadores", titulo: "Palabras que orientan",
          texto: "Piden el de proceso: ка́ждый день, ча́сто, всегда́, обы́чно, иногда́, до́лго, два часа́ (cuánto duró).\nPiden el de resultado: уже́, наконе́ц, сра́зу, una vez concreta.",
          ejemplos: [
            { ru: "{Ка́ждый день} я чита́л газе́ту.", es: "Todos los días leía el diario.", por: "Se repite: proceso." },
            { ru: "Я {уже́} сде́лал зада́ние.", es: "Ya hice la tarea.", por: "уже́: resultado." },
            { ru: "{Наконе́ц} я вы́учил слова́.", es: "Por fin aprendí las palabras.", por: "наконе́ц: resultado." }],
          errores: [{ mal: "Ка́ждый день я прочита́л газе́ту.", bien: "Ка́ждый день я {чита́л} газе́ту.", por: "Lo que se repite: proceso." }] },
        { id: "u12-en-fila", titulo: "Acciones en fila, acciones a la vez",
          texto: "Resultados en fila: cada acción termina y empieza la siguiente. Procesos juntos: pasaban al mismo tiempo.",
          ejemplos: [
            { ru: "Я {пообе́дал}, {позвони́л} ма́ме и {отдохну́л}.", es: "Almorcé, llamé a mamá y descansé.", por: "Uno después del otro: resultados." },
            { ru: "Я {обе́дал} и {смотре́л} телеви́зор.", es: "Almorzaba mientras miraba la tele.", por: "A la vez: procesos." }],
          destacado: "resultados = en fila · procesos = al mismo tiempo" },
        { id: "u12-fondo", titulo: "El fondo y lo que pasó",
          texto: "El de proceso pinta el fondo (lo que estaba pasando); el de resultado cuenta lo que pasó en ese momento.",
          ejemplos: [
            { ru: "Я {смотре́л} фильм, когда́ {позвони́л} брат.", es: "Estaba viendo una película cuando llamó mi hermano.", por: "Fondo: смотре́л. Lo que pasó: позвони́л." },
            { ru: "Мы {гуля́ли}, и вдруг {пошёл} дождь.", es: "Estábamos paseando y de repente empezó a llover.", por: "Fondo y golpe." }],
          comparacion: "Se parece al imperfecto y al pretérito del español («estaba viendo… cuando llamó»), pero no coinciden siempre: «leí dos horas» es pretérito en español y proceso en ruso (Я чита́л два часа́), porque no dice que terminaste.",
          chequeo: [{ pide: "«Cuando llegué, ella estaba cocinando»", opciones: ["Когда́ я пришёл, она́ гото́вила.", "Когда́ я пришёл, она́ пригото́вила."], ok: "Когда́ я пришёл, она́ гото́вила.", por: "Fondo: proceso." }] },
        { id: "u12-ir-llegar", titulo: "Llegar e irse",
          texto: "Con **при-** se llega; con **у-**, uno se va. A pie, con идти́ (прийти́, уйти́); en vehículo, con е́хать (прие́хать, уе́хать). Los de proceso son приходи́ть, уходи́ть, приезжа́ть, уезжа́ть.",
          ejemplos: [
            { ru: "Я {пришёл} домо́й в семь.", es: "Llegué a casa a las siete.", por: "Llegar a pie, una vez: прийти́." },
            { ru: "Она́ {ушла́} на рабо́ту.", es: "Se fue al trabajo.", por: "Irse a pie: уйти́." },
            { ru: "За́втра {прие́дет} ба́бушка.", es: "Mañana llega la abuela.", por: "Llegar en vehículo, futuro: прие́хать." },
            { ru: "Они́ {уе́хали} в Москву́.", es: "Se fueron a Moscú.", por: "Irse en vehículo: уе́хать." }],
          errores: [{ mal: "Я пришёл в Москву́ на по́езде.", bien: "Я {прие́хал} в Москву́ на по́езде.", por: "En vehículo: прие́хать." }],
          chequeo: [{ pide: "«Llegó en tren»", opciones: ["Он прие́хал на по́езде.", "Он пришёл на по́езде."], ok: "Он прие́хал на по́езде.", por: "En vehículo: прие́хать." }] },
        { id: "u12-relato", titulo: "Un relato completo",
          texto: "Así se ve todo junto en un día contado:",
          ejemplos: [
            { ru: "Вчера́ я {до́лго спал}.", es: "Ayer dormí mucho.", por: "Duró: proceso." },
            { ru: "Пото́м я {пригото́вил} за́втрак и {позвони́л} ма́ме.", es: "Después preparé el desayuno y llamé a mamá.", por: "En fila: resultados." },
            { ru: "Ве́чером я {смотре́л} фильм с дру́гом, и мы {говори́ли} о рабо́те.", es: "Por la noche vi una película con un amigo y hablamos del trabajo.", por: "Fondo de la noche: procesos." },
            { ru: "Пото́м друг {ушёл}, и я {лёг} спать.", es: "Después mi amigo se fue y me acosté.", por: "En fila: resultados." }] }
      ] },
    { id: "u12m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "El imperativo", resumen: "Позвони́ мне. Не звони́ ему́. Сади́тесь!",
      intro: "El imperativo sirve para pedir, aconsejar o dar instrucciones. Ya usaste varios como fórmulas: Помоги́те! Повтори́те, пожа́луйста. Поверни́те напра́во. Aquí, cómo se forman.",
      secciones: [
        { id: "u12-imp-forma", titulo: "Cómo se forma (ты)",
          antes: { pide: "чита́ю → чита́й · де́лаю → де́лай. ¿Y слу́шаю?", opciones: ["слу́шай", "слу́ши"], ok: "слу́шай", por: "Vocal + **ю**: **-й**." },
          texto: "Se toma la forma de я (del presente o, si es de resultado, del futuro) y se cambia el final:\nvocal + **ю** → **-й**: чита́ю → чита́й, сде́лаю → сде́лай\nacento al final → **-и**: говорю́ → говори́, позвоню́ → позвони́\nacento antes → **-ь**: гото́влю → гото́вь, отве́чу → отве́ть",
          ejemplos: [
            { ru: "{Чита́й}!", es: "¡Lee!", por: "чита́ю → чита́й." },
            { ru: "{Позвони́} мне.", es: "Llámame.", por: "позвоню́ → позвони́." },
            { ru: "{Поста́вь} чай.", es: "Pon el té.", por: "поста́влю, acento antes: **-ь**." }],
          destacado: "**-й** · **-и** · **-ь**",
          chequeo: [{ pide: "включу́ → ?", opciones: ["включи́", "включь"], ok: "включи́", por: "Acento al final: **-и**." }] },
        { id: "u12-imp-vy", titulo: "ты y вы",
          texto: "Para вы (ustedes, o usted) se agrega **-те**. Así se arman todas las fórmulas que ya usabas: Повтори́те, Скажи́те, Поверни́те, Перейди́те.",
          ejemplos: [
            { ru: "{Скажи́те}, пожа́луйста…", es: "Dígame, por favor…", por: "скажи́ + **-те**." },
            { ru: "{Прове́рьте}, пожа́луйста.", es: "Revise, por favor.", por: "прове́рь + **-те**." },
            { ru: "{Подожди́те} мину́ту!", es: "¡Espere un minuto!", por: "подожди́ + **-те**." }] },
        { id: "u12-imp-irreg", titulo: "Los irregulares",
          texto: "дать → дай, да́йте · есть → ешь, е́шьте · пить → пей, пе́йте · взять → возьми́, возьми́те · помо́чь → помоги́, помоги́те",
          ojo: "No hace falta deducirlos: en Verbos cada verbo tiene su imperativo." },
        { id: "u12-imp-aspecto", titulo: "¿Qué aspecto?",
          texto: "Para pedir algo concreto, una vez: el de resultado (Закро́й окно́). Para algo que se repite o en general: el de proceso (Звони́ мне ча́сто). Y para invitar a alguien que ya está por hacerlo, el de proceso suena más amable: Сади́тесь! Проходи́те!",
          ejemplos: [
            { ru: "{Закро́й} окно́, пожа́луйста.", es: "Cierra la ventana, por favor.", por: "Una vez: закры́ть." },
            { ru: "{Звони́} мне ча́сто.", es: "Llámame a menudo.", por: "Se repite: звони́ть." },
            { ru: "{Сади́тесь}, пожа́луйста!", es: "¡Siéntese, por favor!", por: "Invitación: el de proceso." }] },
        { id: "u12-imp-ne", titulo: "No hagas: не + proceso",
          texto: "Para prohibir o pedir que no se haga algo, siempre не + el de proceso.",
          ejemplos: [
            { ru: "Не {звони́} ему́!", es: "¡No lo llames!", por: "не + proceso." },
            { ru: "Не {открыва́й} окно́.", es: "No abras la ventana.", por: "не + proceso." },
            { ru: "Не {забыва́й}!", es: "¡No te olvides!", por: "не + proceso: забыва́ть." }],
          destacado: "не + proceso",
          errores: [{ mal: "Не позвони́ ему́!", bien: "Не {звони́} ему́!", por: "Para prohibir, el de proceso." }],
          chequeo: [{ pide: "«No apagues la tele»", opciones: ["Не выключа́й телеви́зор.", "Не вы́ключи телеви́зор."], ok: "Не выключа́й телеви́зор.", por: "не + proceso." }] }
      ] },
    { id: "u12m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Comparar", resumen: "Метро́ быстре́е, чем авто́бус. Са́мый лу́чший.",
      intro: "Para comparar se usa el comparativo («más …»): una sola forma que no cambia nunca.",
      secciones: [
        { id: "u12-comp", titulo: "Más … que …",
          texto: "X + comparativo + , чем + Y. El comparativo no cambia: sirve para masculino, femenino y plural.",
          ejemplos: [
            { ru: "Москва́ {бо́льше}, чем Барсело́на.", es: "Moscú es más grande que Barcelona.", por: "большо́й → бо́льше." },
            { ru: "Метро́ {быстре́е}, чем авто́бус.", es: "El metro es más rápido que el autobús.", por: "бы́стрый → быстре́е." },
            { ru: "Э́та зада́ча {сложне́е}.", es: "Este problema es más difícil.", por: "сло́жный → сложне́е." }],
          destacado: "X + comparativo + , чем + Y",
          ojo: "Antes de чем va coma." },
        { id: "u12-comp-forma", titulo: "Cómo se forma",
          antes: { pide: "интере́сный → интере́снее · краси́вый → краси́вее. ¿Y у́мный?", opciones: ["умне́е", "у́мный"], ok: "умне́е", por: "Se agrega **-ее**." },
          texto: "A la mayoría se le agrega **-ее**: интере́снее, краси́вее, сильне́е.\nLos terminados en **-кий**, **-гий**, **-хий** y algunos más cambian la consonante y terminan en **-е**: лёгкий → ле́гче, ти́хий → ти́ше, гро́мкий → гро́мче, бли́зкий → бли́же, коро́ткий → коро́че, высо́кий → вы́ше, ни́зкий → ни́же, просто́й → про́ще, дорого́й → доро́же, молодо́й → моло́же.\nIrregulares: большо́й → бо́льше, ма́ленький → ме́ньше, хоро́ший → лу́чше, плохо́й → ху́же, далёкий → да́льше, ста́рый → ста́рше.",
          ejemplos: [
            { ru: "Мой брат {ста́рше} меня́.", es: "Mi hermano es mayor que yo.", por: "ста́рый → ста́рше (la edad)." },
            { ru: "Ру́сский язы́к {трудне́е}?", es: "¿El ruso es más difícil?", por: "тру́дный → трудне́е." },
            { ru: "Здесь {ти́ше}.", es: "Aquí está más tranquilo.", por: "ти́хий → ти́ше." }],
          ojo: "Cada adjetivo muestra su comparativo en Casos." },
        { id: "u12-comp-gen", titulo: "Sin чем: con genitivo",
          texto: "También se puede decir sin чем: lo que se compara va en genitivo, sin coma. Dice exactamente lo mismo.",
          ejemplos: [
            { ru: "Метро́ быстре́е {авто́буса}.", es: "El metro es más rápido que el autobús.", por: "авто́бус → авто́буса." },
            { ru: "Брат ста́рше {меня́}.", es: "Mi hermano es mayor que yo.", por: "Genitivo de я." }] },
        { id: "u12-comp-verbo", titulo: "También con verbos",
          texto: "El comparativo sirve también para «más rápido», «más fuerte», «mejor» con un verbo, y para cómo está el tiempo.",
          ejemplos: [
            { ru: "Говори́те {гро́мче}, пожа́луйста.", es: "Hable más fuerte, por favor.", por: "гро́мкий → гро́мче." },
            { ru: "Сего́дня {тепле́е}, чем вчера́.", es: "Hoy hace más calor que ayer.", por: "тёплый → тепле́е." },
            { ru: "Мне {бо́льше} нра́вится чай.", es: "Me gusta más el té.", por: "бо́льше = más." }] },
        { id: "u12-samyj", titulo: "El más: са́мый",
          texto: "са́мый + adjetivo, y cambia como un adjetivo: са́мый большо́й го́род, са́мая краси́вая у́лица, са́мое удо́бное ме́сто. Para «el mejor» también está лу́чший (Э́то лу́чший рестора́н).",
          ejemplos: [
            { ru: "Москва́ — {са́мый большо́й} го́род Росси́и.", es: "Moscú es la ciudad más grande de Rusia.", por: "са́мый + adjetivo, masculino." },
            { ru: "Э́то {лу́чший} фильм.", es: "Es la mejor película.", por: "лу́чший = el mejor." },
            { ru: "Мой {ста́рший} брат.", es: "Mi hermano mayor.", por: "ста́рший / мла́дший: mayor / menor entre hermanos." }],
          errores: [{ mal: "са́мый бо́льше го́род", bien: "{са́мый большо́й} го́род", por: "Con са́мый va el adjetivo, no el comparativo." }],
          chequeo: [{ pide: "«la calle más bonita»", opciones: ["са́мая краси́вая у́лица", "са́мый краси́вее у́лица"], ok: "са́мая краси́вая у́лица", por: "са́мая + adjetivo femenino." }] }
      ] },
    { id: "u12m10", n: 10, tipo: "lectura", titulo: "Todo junto", resumen: "Leer con toda la gramática de la unidad.",
      intro: "Tres textos con todo lo de la unidad: pronombres, posesivos, plural, aspecto, imperativo y comparaciones. Lee, escucha y después contesta." },
    { id: "u12m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Моя́ неде́ля", resumen: "Tu semana, con toda la gramática B1.",
      intro: "Cuenta tu semana: qué hiciste (lo que terminaste y lo que hacías a menudo), qué vas a hacer, con quién, y compara algo. Suma un pedido o un consejo. Por ejemplo: В понеде́льник я до́лго рабо́тал. Ве́чером я пригото́вил у́жин и позвони́л ма́ме. Ка́ждый день я чита́л кни́гу. В суббо́ту я гуля́л с мои́ми друзья́ми. Мой брат помога́ет студе́нтам. За́втра я посмотрю́ фильм. Фильм интере́снее, чем кни́га. Позвони́ мне!",
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
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (12/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u12Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u12Palabras(o.por); if (o && o.pide) o.pide = u12Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u12Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u12Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad12Modulo(id) { return UNIDAD_12.modulos.find(m => m.id === id) || null; }

const U12_MEZCLA = { lectura: 2, "lectura-vf": 1, imperativo: 2, "no-imp": 1, comparar: 2, samyj: 1, aspecto: 3, pareja: 1, "futuro-pf": 2, infinitivo: 1, marcador: 2, pronombre: 2, posesivo: 2, este: 1, plural: 2, numero: 2, "plural-caso": 2, "adj-plural": 2, detectar: 1, emparejar: 1, "es-ru": 3, dictado: 2, construir: 1,
  /* Profundización (12/10/2026): ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, significado: 1, "palabra-es-ru": 1 };

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
      out.push(Object.assign({ id: "U12-pr-" + z + "-" + i, tipo: "pronombre", forma: "elegir", dificultad: 1, modulo: 1, pide: "Completa: «" + es[i] + "»",
        grande: cap(tpl.replace("{}", "_____")), opciones: baraja(opciones, i + z), correcta: forma, explicacion: expl }, base));
      if ((i + z) % 2 === 0) out.push(Object.assign({ id: "U12-prw-" + z + "-" + i, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 1, pide: "Escribe en ruso: «" + es[i] + "»",
        audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: expl }, base, { grupo: "PRw-" + z + "-" + i }));
    });
  });
  [[2, "", "A… (dativo)"], [4, "с", "Con… (instrumental)"], [5, "о", "De… (prepositivo)"], [3, "", "Acusativo"]].forEach(([caso, prep, nom], k) => {
    const sel = [0, 1, 2, 3, 4, 5, 6].filter(i => (i + k) % 2 === 0).slice(0, 4);
    out.push({ id: "U12-premp-" + k, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 1, grupo: "PRE-" + k, items: [], pide: "Une cada pronombre con su forma: " + nom + ".",
      pares: sel.map(i => [U12_PRON[i], u12PronForma(P[i], caso, prep)]), explicacion: sel.map(i => U12_PRON[i] + " → " + u12PronForma(P[i], caso, prep)).join(" · ") });
  });
  /* Detectar: falta la н- */
  [["А́нна гуля́ет с {}.", 4, "с", 3], ["У {} есть маши́на.", 1, "у", 2], ["Э́то пода́рок для {}.", 1, "для", 3], ["Я рабо́таю с {}.", 4, "с", 2], ["У {} есть соба́ка.", 1, "у", 6], ["Мы гуля́ем с {}.", 4, "с", 6]].forEach(([tpl, caso, prep, i], j) => {
    const p = P[i], mal = p.f[caso], bien = p.n[caso];
    const ok = cap(tpl.replace("{}", bien)), pals = sinP(cap(tpl.replace("{}", mal))).split(" ");
    out.push({ id: "U12-prdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 1, grupo: "PRD-" + j, items: ["lex:" + p.id], oir: ok, pide: "Toca la palabra que está mal.",
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
      out.push(Object.assign({ id: "U12-ps-" + j + "-" + z, tipo: "posesivo", forma: "elegir", dificultad: 2, modulo: 2, pide: "Completa: «" + esF + "»",
        grande: cap(tpl.replace("{}", "_____ " + nom)), opciones: baraja(uniq([pos, fp(0), fp(1), fp(2), fp(4), fp(5)]).slice(0, 4), j + z),
        correcta: pos, explicacion: expl }, base));
      if ((j + z) % 2 === 1) out.push(Object.assign({ id: "U12-psw-" + j + "-" + z, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribe en ruso: «" + esF + "»",
        audio: ru2, audioManual: true, esperadas: [ru2], idioma: "ru", explicacion: expl }, base, { grupo: "PSw-" + j + "-" + z }));
    });
  });
  U12_SU.forEach(([ru, f, ops, es], j) => {
    out.push({ id: "U12-su-" + j, tipo: "posesivo", forma: "elegir", dificultad: 2, modulo: 2, grupo: "SU-" + j, items: [], oir: ru, pide: "Completa: «" + es + "»",
      grande: ru.replace(new RegExp("(^|\\s)" + f + "(?=\\s)"), "$1_____"), opciones: baraja(ops, j), correcta: f,
      explicacion: "Como «su», **" + f + "** no cambia nunca, ni lleva н-. " + ru });
    if (j % 2 === 0) out.push({ id: "U12-suw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, grupo: "SUw-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [["У него́ бра́та есть соба́ка.", "него́", "У его́ бра́та есть соба́ка.", "El hermano de él tiene un perro."], ["Я гуля́ю с ней соба́кой.", "ней", "Я гуля́ю с её соба́кой.", "Paseo con el perro de ella."],
   ["Я звоню́ ему́ ма́ме.", "ему́", "Я звоню́ его́ ма́ме.", "Llamo a la mamá de él."]].forEach(([mal, w, ok, es], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-sudet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 2, grupo: "SUD-" + j, items: [], oir: ok, pide: "«" + es + "» Toca la palabra que está mal.",
      palabras: pals, correcta: pals.indexOf(w), explicacion: "Como «su» va **" + ok.split(" ").find((x, k) => k === pals.indexOf(w)) + "**, que no cambia. " + ok });
  });
  const ESTE = adj("э́тот");
  const formasEste = uniq([].concat(ESTE.m.map(x => Array.isArray(x) ? x[0] : x), ESTE.f));
  U12_ESTE.forEach(([ru, f, es], j) => {
    const rx = new RegExp("(^|\\s)" + f + "(?=\\s|[.!?])");
    const otros = baraja(formasEste.filter(x => x !== f), j).slice(0, 3);
    out.push({ id: "U12-este-" + j, tipo: "este", forma: "elegir", dificultad: 2, modulo: 2, grupo: "ES-" + j, items: ["lex:" + ESTE.id], oir: ru, pide: "Completa: «" + es + "»",
      grande: ru.replace(rx, "$1_____"), opciones: baraja([f].concat(otros), j + 3), correcta: f, explicacion: "**" + f + "**: э́тот va en el mismo caso y género que la palabra. " + ru });
    if (j % 2 === 1) out.push({ id: "U12-estew-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 2, grupo: "ESw-" + j, items: ["lex:" + ESTE.id], oir: ru, pide: "Escribe en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  out.push({ id: "U12-posemp-0", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 2, grupo: "PSE-0", items: [], pide: "Une cada frase con su forma de мой.",
    pares: [["Я звоню́ … бра́ту.", "моему́"], ["Я гуля́ю с … сестро́й.", "мое́й"], ["Я ду́маю о … дру́ге.", "моём"], ["Я гуля́ю с … дру́гом.", "мои́м"]], explicacion: "моему́ бра́ту · мое́й сестро́й · моём дру́ге · мои́м дру́гом" });

  /* ── Módulo 3: plural I ── */
  const NOMS = Object.keys(U12_PL).map(ru => Object.assign(S(ru) || {}, { es1: U12_PL[ru][0], esP: U12_PL[ru][1], emoji: U12_PL[ru][2] })).filter(x => x.id);
  NOMS.forEach((s, j) => {
    const base = { items: ["lex:" + s.id] };
    /* nominativo plural */
    if (j % 2 === 0) out.push(Object.assign({ id: "U12-npl-" + j, tipo: "plural", forma: "escribir", dificultad: 2, modulo: 3, grupo: "NP-" + j, oir: s.pl[0], pide: "Escribe el plural: «" + s.esP + "»", grande: s.sg[0],
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
    out.push({ id: "U12-accp-" + j, tipo: "plural", forma: "elegir", dificultad: 2, modulo: 3, grupo: "AP-" + j, items: ["lex:" + s.id], oir: r, pide: "Completa: «" + es + "»", grande: "Я ви́жу _____.",
      opciones: baraja(uniq([s.pl[3], s.pl[0], s.sg[3]]), j), correcta: s.pl[3], explicacion: "Personas y animales: el acusativo plural es como el genitivo. **" + s.pl[3] + "**." });
  });
  [["кни́га", "Compro libros."], ["биле́т", "Compro billetes."], ["газе́та", "Compro diarios."], ["ру́чка", "Compro bolígrafos."]].forEach(([ru, es], j) => {
    const s = S(ru), r = "Я покупа́ю " + s.pl[3] + ".";
    out.push({ id: "U12-acci-" + j, tipo: "plural", forma: "elegir", dificultad: 2, modulo: 3, grupo: "AI-" + j, items: ["lex:" + s.id], oir: r, pide: "Completa: «" + es + "»", grande: "Я покупа́ю _____.",
      opciones: baraja(uniq([s.pl[3], s.pl[1], s.sg[1]]), j), correcta: s.pl[3], explicacion: "Cosas: el acusativo plural es como el nominativo. **" + s.pl[3] + "**." });
  });
  /* Detectar */
  [["пять", "кни́га", "Tengo cinco libros."], ["два", "брат", "Tengo dos hermanos."], ["мно́го", "друг", "Tengo muchos amigos."], ["три", "биле́т", "Tengo tres billetes."]].forEach(([q, ru, es], j) => {
    const s = S(ru), bien = q === "два" || q === "три" ? s.sg[1] : s.pl[1], mal = q === "два" || q === "три" ? s.pl[1] : s.sg[1];
    const pals = ["У", "меня́", q, mal];
    out.push({ id: "U12-pldet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, grupo: "PLD-" + j, items: ["lex:" + s.id], oir: "У меня́ " + q + " " + bien + ".", pide: "«" + es + "» Toca la palabra que está mal.",
      palabras: pals, correcta: 3, explicacion: (q === "два" || q === "три" ? "2, 3 y 4 → genitivo singular" : "5 o más, y мно́го → genitivo plural") + ": **" + q + " " + bien + "**." });
  });
  [["Ско́лько у тебя́ бра́тьев?", "¿Cuántos hermanos tienes?"], ["У меня́ нет биле́тов.", "No tengo billetes."], ["В Москве́ мно́го музе́ев.", "En Moscú hay muchos museos."], ["У нас две ко́шки.", "Tenemos dos gatas."], ["Ему́ пять лет.", "Él tiene cinco años."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-plt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, grupo: "PLT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-pld-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 3, grupo: "PLDc-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
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
      out.push(Object.assign({ id: "U12-p2-" + j + "-" + z, tipo: "plural-caso", forma: "elegir", dificultad: 2, modulo: 4, pide: "Completa: «" + esF + "»",
        grande: cap(tpl.replace("{}", MOI.pl[caso] + " _____")), opciones: baraja(uniq([s.pl[caso], s.pl[0], s.pl[2], s.pl[4], s.pl[5], s.pl[1]]).slice(0, 4), j + z),
        correcta: s.pl[caso], explicacion: expl }, base));
      if ((j + z) % 2 === 0) out.push(Object.assign({ id: "U12-p2w-" + j + "-" + z, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribe en ruso: «" + esF + "»",
        audio: ruF, audioManual: true, esperadas: [ruF], idioma: "ru", explicacion: expl }, base, { grupo: "P2w-" + j + "-" + z }));
    });
  });
  U12_ADJPL.forEach(([caso, a0, s0, tpl, es], j) => {
    const a = adj(a0), s = S(s0); if (!a || !s) return;
    let fa = a.pl[caso]; if (Array.isArray(fa)) fa = s.anim ? fa[1] : fa[0];
    const fr = fa + " " + s.pl[caso], ruF = tpl.replace("{}", fr);
    const formasA = uniq(a.pl.map(x => Array.isArray(x) ? x[0] : x));
    out.push({ id: "U12-adp-" + j, tipo: "adj-plural", forma: "elegir", dificultad: 2, modulo: 4, grupo: "AD-" + j, items: ["lex:" + s.id, "lex:" + a.id], oir: ruF, pide: "Completa: «" + es + "»",
      grande: tpl.replace("{}", "_____ " + s.pl[caso]), opciones: baraja(uniq([fa].concat(formasA)).slice(0, 4), j), correcta: fa,
      explicacion: "**" + fr + "**: adjetivo en " + U12_CASO[caso] + " plural. " + ruF });
    if (j % 2 === 0) out.push({ id: "U12-adpw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "ADw-" + j, items: ["lex:" + s.id, "lex:" + a.id], oir: ruF, pide: "Escribe en ruso: «" + es + "»",
      audio: ruF, audioManual: true, esperadas: [ruF], idioma: "ru", explicacion: ruF });
  });
  [[2, "-ам / -ям"], [4, "-ами / -ями"], [5, "-ах / -ях"]].forEach(([caso, t], k) => {
    const sel = ["студе́нт", "кни́га", "го́род", "друг"].map(S);
    out.push({ id: "U12-p2emp-" + k, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 4, grupo: "P2E-" + k, items: [], pide: "Une cada palabra con su " + U12_CASO[caso] + " plural (" + t + ").",
      pares: sel.map(s => [s.sg[0], s.pl[caso]]), explicacion: sel.map(s => s.sg[0] + " → " + s.pl[caso]).join(" · ") });
  });
  [["Мы гуля́ем с детьми́.", "Paseamos con los chicos."], ["Я ча́сто ду́маю о друзья́х.", "Pienso a menudo en los amigos."], ["Учи́тель помога́ет студе́нтам.", "El maestro ayuda a los estudiantes."], ["Я живу́ с мои́ми бра́тьями.", "Vivo con mis hermanos."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-p2t-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "P2T-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-p2d-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 4, grupo: "P2Dc-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  [["Я гуля́ю с друзья́", "друзья́", "друзья́ми"], ["Мы ду́маем о де́ти", "де́ти", "де́тях"], ["Я помога́ю студе́нты", "студе́нты", "студе́нтам"]].forEach(([mal, w, bien], j) => {
    const pals = mal.split(" ");
    out.push({ id: "U12-p2det-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 4, grupo: "P2D-" + j, items: [], oir: mal.replace(w, bien) + ".", pide: "Toca la palabra que está mal.",
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
    if (sel.length >= 3) out.push({ id: "U12-asemp-" + g, tipo: "pareja", forma: "emparejar", dificultad: 1, modulo: 5, grupo: "ASE-" + g, items: [], pide: "Une cada verbo con su pareja perfectiva.",
      pares: sel.map(x => [x.i.ac, x.p.ac]), explicacion: sel.map(x => x.i.ac + " / " + x.p.ac).join(" · ") });
  }
  PAR.slice(0, 23).forEach((x, j) => out.push({ id: "U12-aspf-" + j, tipo: "pareja", forma: "escribir", dificultad: 2, modulo: 5, grupo: "ASF-" + j, items: ["lex:" + x.p.id], oir: x.p.ac,
    pide: "Escribe el perfectivo de «" + x.es + "».", grande: x.i.ac, audio: x.p.ac, audioManual: true, esperadas: [x.p.ac], idioma: "ru", explicacion: "**" + x.i.ac + " / " + x.p.ac + "**: " + x.es + "." }));
  ASP.forEach((a, j) => {
    const fem = j % 2 === 1, g = fem ? "f" : "m", quien = fem ? " (eres mujer)" : " (eres hombre)";
    [[a.i, "proceso", "Ayer estuve " + con(a.ger, a.objEs) + "."], [a.p, "resultado", "Ayer " + con(a.pret, a.objEs) + "."]].forEach(([v, tipo, es], k) => {
      const ru = "Вчера́ я " + con(v.pasado[g], a.obj) + ".";
      const base = { grupo: "AS-" + j + "-" + k, items: ["lex:" + v.id], oir: ru };
      const expl = tipo === "proceso" ? "Proceso → imperfectivo: **" + v.pasado[g] + "**. " + ru : "Resultado, la acción terminada → perfectivo: **" + v.pasado[g] + "**. " + ru;
      out.push(Object.assign({ id: "U12-as-" + j + "-" + k, tipo: "aspecto", forma: "elegir", dificultad: 2, modulo: 5, pide: "Completa: «" + es + "» (" + tipo + ")" + quien,
        grande: "Вчера́ я " + con("_____", a.obj) + ".", opciones: [a.i.pasado[g], a.p.pasado[g]], correcta: v.pasado[g], explicacion: expl }, base));
      if ((j + k) % 3 === 0) out.push(Object.assign({ id: "U12-asw-" + j + "-" + k, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribe en ruso: «" + es + "»" + quien,
        audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: expl }, base, { grupo: "ASw-" + j + "-" + k }));
    });
  });
  for (let j = 0; j < 6; j++) {
    const ok = PAR[(j * 4 + 1) % 23], otros = [PAR[(j * 4 + 5) % 23], PAR[(j * 4 + 9) % 23], PAR[(j * 4 + 13) % 23]];
    out.push({ id: "U12-ascual-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: 5, grupo: "ASC-" + j, items: ["lex:" + ok.p.id], pide: "¿Cuál es perfectivo?",
      opciones: baraja([ok.p.ac].concat(otros.map(x => x.i.ac)), j), correcta: ok.p.ac, explicacion: "**" + ok.p.ac + "** es el perfectivo de " + ok.i.ac + "." });
  }
  [["Я писа́л письмо́ два часа́.", "Estuve escribiendo la carta dos horas. (eres hombre)"], ["Она́ позвони́ла ма́ме.", "Ella llamó a mamá."], ["Я вы́учила слова́.", "Aprendí las palabras. (eres mujer)"], ["Что он сказа́л?", "¿Qué dijo él?"], ["Он говори́л два часа́.", "Él habló dos horas."]].forEach(([ru, es], j) => {
    out.push({ id: "U12-ast-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "AST-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-asd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 5, grupo: "ASD-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
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
        pide: "Completa: «" + es + "» (" + tipo + ")", grande: "За́втра я " + con("_____", a.obj) + ".", opciones: baraja(["бу́ду " + a.i.ac, a.p.futuro[0], "бу́ду " + a.p.ac], j + k), correcta: ok,
        explicacion: (tipo === "proceso" ? "Proceso → бу́ду + imperfectivo: **" : "Resultado → perfectivo conjugado: **") + ok + "**. " + ru });
    });
    const tpl = j % 2 ? "Мне ну́жно " : "Я хочу́ ", esT = j % 2 ? "Tengo que " : "Quiero ", ru = tpl + con(a.p.ac, a.obj) + ".";
    out.push({ id: "U12-inf-" + j, tipo: "infinitivo", forma: "elegir", dificultad: 2, modulo: 6, grupo: "IN-" + j, items: ["lex:" + a.p.id], oir: ru, pide: "Completa: «" + esT + con(a.inf, a.objEs) + "» (una vez)",
      grande: tpl + con("_____", a.obj) + ".", opciones: baraja([a.p.ac, a.i.ac], j), correcta: a.p.ac, explicacion: "Una acción concreta → perfectivo: **" + a.p.ac + "**. " + ru });
  });
  [["чита́ть", "leer"], ["гото́вить", "cocinar"], ["отдыха́ть", "descansar"], ["писа́ть", "escribir"], ["смотре́ть", "mirar"]].forEach(([ru0, es], j) => {
    const x = PAR.find(y => y.i.ac === ru0), tpl = j % 2 ? "Мне нра́вится " : "Я люблю́ ", ru = tpl + x.i.ac + ".";
    out.push({ id: "U12-infg-" + j, tipo: "infinitivo", forma: "elegir", dificultad: 2, modulo: 6, grupo: "ING-" + j, items: ["lex:" + x.i.id], oir: ru, pide: "Completa: «Me gusta " + es + "» (en general)",
      grande: tpl + "_____.", opciones: baraja([x.i.ac, x.p.ac], j), correcta: x.i.ac, explicacion: "Después de " + (j % 2 ? "нра́виться" : "люби́ть") + " va el imperfectivo: **" + ru + "**" });
  });
  [["За́втра я бу́ду прочита́ю кни́гу.", "прочита́ю", "За́втра я прочита́ю кни́гу."], ["Я бу́ду купи́ть хлеб.", "купи́ть", "Я куплю́ хлеб."], ["Ве́чером я бу́ду позвони́ть ма́ме.", "позвони́ть", "Ве́чером я позвоню́ ма́ме."]].forEach(([mal, w, ok], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-fudet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 6, grupo: "FUD-" + j, items: [], oir: ok, pide: "Toca la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "Nunca бу́ду + perfectivo. Con el perfectivo, sin бу́ду: **" + ok + "**" });
  });
  [["Mañana te llamo.", "За́втра я позвоню́ тебе́."], ["Quiero comprar un teléfono.", "Я хочу́ купи́ть телефо́н."], ["Tengo que llamar a mamá.", "Мне ну́жно позвони́ть ма́ме."], ["Mañana voy a terminar el trabajo.", "За́втра я зако́нчу рабо́ту."], ["Me gusta cocinar.", "Мне нра́вится гото́вить."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-fut-t-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 6, grupo: "FUT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    if (j % 2 === 0) out.push({ id: "U12-fut-d-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 6, grupo: "FUDc-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 7: aspecto III ── */
  const DUR = ["чита́ть", "писа́ть", "смотре́ть", "гото́вить", "учи́ть", "де́лать", "отдыха́ть", "обе́дать"];
  const MARC = [["Ка́ждый день я {}.", "Todos los días {impf}.", "i", "ка́ждый день"], ["Я ча́сто {}.", "A menudo {impf}.", "i", "ча́сто"], ["Я {} два часа́.", "Estuve {ger} dos horas.", "i", "два часа́"],
    ["Я уже́ {}.", "Ya {pret}.", "p", "уже́"], ["Наконе́ц я {}.", "Por fin {pret}.", "p", "наконе́ц"]];
  ASP.forEach((a, j) => {
    let mk = MARC[j % 5]; if (mk[3] === "два часа́" && DUR.indexOf(a.i.ac) < 0) mk = MARC[1];
    [mk, MARC[3 + (j % 2)]].forEach((m, k) => {
      if (k === 1 && m === mk) return;
      const v = m[2] === "i" ? a.i : a.p, g = (j + k) % 2 ? "f" : "m";
      const ru = m[0].replace("{}", con(v.pasado[g], a.obj)), es = m[1].replace("{impf}", con(a.impf, a.objEs)).replace("{ger}", con(a.ger, a.objEs)).replace("{pret}", con(a.pret, a.objEs));
      out.push({ id: "U12-mk-" + j + "-" + k, tipo: "marcador", forma: "elegir", dificultad: 2, modulo: 7, grupo: "MK-" + j + "-" + k, items: ["lex:" + v.id], oir: ru,
        pide: "Completa: «" + es + "»" + (g === "f" ? " (eres mujer)" : " (eres hombre)"), grande: m[0].replace("{}", con("_____", a.obj)), opciones: [a.i.pasado[g], a.p.pasado[g]], correcta: v.pasado[g],
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
    out.push({ id: "U12-mkdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 7, grupo: "MKD-" + j, items: [], oir: ok, pide: "Toca la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "**" + mk + "** pide imperfectivo: " + ok });
  });
  /* La tercera columna: otros órdenes que también valen (24/10/2026: el cuándo puede moverse) */
  [["¿Qué hiciste ayer? (a un amigo)", "Что ты де́лал вчера́?", ["Что ты вчера́ де́лал?"]], ["¿Hiciste la tarea? (a un amigo)", "Ты сде́лал зада́ние?", []], ["Ya almorcé. (eres mujer)", "Я уже́ пообе́дала.", []], ["Todos los días leo el diario.", "Ка́ждый день я чита́ю газе́ту.", ["Я ка́ждый день чита́ю газе́ту.", "Я чита́ю газе́ту ка́ждый день."]], ["Por fin aprendí las palabras. (eres hombre)", "Наконе́ц я вы́учил слова́.", ["Я наконе́ц вы́учил слова́."]]].forEach(([es, ru, otras], j) => {
    out.push({ id: "U12-mkt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 7, grupo: "MKT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru].concat(otras), idioma: "ru", explicacion: ru });
    const w = ru.replace(/[.?!]$/, "").split(" ");
    out.push({ id: "U12-mko-" + j, tipo: "construir", forma: "ordenar", dificultad: 2, modulo: 7, grupo: "MKO-" + j, items: [], pide: "Ordena: «" + es + "»", audio: ru, fichas: baraja(w, j + 2), sep: " ", esperada: w.join(" "), esperadas: [ru].concat(otras).map(x => x.replace(/[.?!]$/, "")), explicacion: ru });
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
    out.push(Object.assign({ id: "U12-pide-" + j, tipo: "imperativo", forma: "elegir", dificultad: 2, modulo: 8, grupo: "PI-" + j, oir: ru, pide: "Completa: «" + es + "»", grande: "_____ " + resto + ".",
      opciones: baraja(uniq([cap(v.imperativo.ty), cap(v.ac), cap(v.futuro[1])]), j), correcta: cap(v.imperativo.ty), explicacion: "Un pedido concreto → imperativo perfectivo: **" + ru + "**" }, base));
    if (j % 2 === 0) out.push(Object.assign({ id: "U12-pidew-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PIw-" + j, oir: ru, pide: "Escribe en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }, base));
    else out.push(Object.assign({ id: "U12-pidevy-" + j, tipo: "imperativo", forma: "escribir", dificultad: 2, modulo: 8, grupo: "PIv-" + j, oir: ruVy, pide: "Pásalo a вы (a varias personas, o de usted).", grande: ru,
      audio: ruVy, audioManual: true, esperadas: [ruVy], idioma: "ru", explicacion: "Con вы se agrega -те: **" + ruVy + "**" }, base));
  });
  U12_NO.forEach(([ri, rp, resto, es], j) => {
    const vi = verbo(ri), vp = verbo(rp), ru = "Не " + vi.imperativo.ty + " " + resto + ".";
    out.push({ id: "U12-no-" + j, tipo: "no-imp", forma: "elegir", dificultad: 2, modulo: 8, grupo: "NI-" + j, items: ["lex:" + vi.id], oir: ru, pide: "Completa: «" + es + "»", grande: "Не _____ " + resto + ".",
      opciones: baraja([vi.imperativo.ty, vp.imperativo.ty], j), correcta: vi.imperativo.ty, explicacion: "Para decir «no hagas», не + imperfectivo: **" + ru + "**" });
    if (j % 2) out.push({ id: "U12-now-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "NIw-" + j, items: ["lex:" + vi.id], oir: ru, pide: "Escribe en ruso: «" + es + "»",
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [[["чита́ть", "прочита́ть", "писа́ть", "сде́лать"], "ты"], [["позвони́ть", "гото́вить", "дать", "взять"], "ты"], [["помо́чь", "сказа́ть", "пить", "есть"], "вы"]].forEach(([vs, pr], k) => {
    const L = vs.map(verbo);
    out.push({ id: "U12-imemp-" + k, tipo: "imperativo", forma: "emparejar", dificultad: 1, modulo: 8, grupo: "IME-" + k, items: [], pide: "Une cada verbo con su imperativo (" + pr + ").",
      pares: L.map(v => [v.ac, pr === "ты" ? v.imperativo.ty : v.imperativo.vy]), explicacion: L.map(v => v.ac + " → " + (pr === "ты" ? v.imperativo.ty : v.imperativo.vy)).join(" · ") });
  });
  [["Repita, por favor.", "Повтори́те, пожа́луйста."], ["No lo llames.", "Не звони́ ему́."], ["Llámame a menudo.", "Звони́ мне ча́сто."]].forEach(([es, ru], j) =>
    out.push({ id: "U12-imd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 8, grupo: "IMD-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }));
  [["Не откро́й окно́.", "откро́й", "Не открыва́й окно́."], ["Не позвони́ ему́.", "позвони́", "Не звони́ ему́."]].forEach(([mal, w, ok], j) => {
    const pals = sinP(mal).split(" ");
    out.push({ id: "U12-imdet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 8, grupo: "IMX-" + j, items: [], oir: ok, pide: "Toca la palabra que está mal.", palabras: pals, correcta: pals.indexOf(w),
      explicacion: "Para prohibir, не + imperfectivo: **" + ok + "**" });
  });

  /* ── Módulo 9: comparar ── */
  const ADJ12 = ["удо́бный", "интере́сный", "краси́вый", "тёплый", "холо́дный", "бы́стрый", "большо́й", "ма́ленький", "хоро́ший", "плохо́й", "дорого́й", "дешёвый"].map(adj).filter(a => a && a.comp);
  ADJ12.forEach((a, j) => {
    out.push({ id: "U12-cmf-" + j, tipo: "comparar", forma: j % 2 ? "elegir" : "escribir", dificultad: 2, modulo: 9, grupo: "CF-" + j, items: ["lex:" + a.id], oir: a.comp, pide: "Comparativo («más …») de " + a.ac + ".", grande: a.ac,
      explicacion: "**" + a.ac + " → " + a.comp + "**" + (/ее$/.test(a.comp.replace(/\u0301/g, "")) ? " (-ее)." : " (irregular)."),
      ...(j % 2 ? { opciones: baraja(uniq([a.comp, a.m[0], a.f[0], a.n[0]]), j), correcta: a.comp } : { audio: a.comp, audioManual: true, esperadas: [a.comp], idioma: "ru" }) });
  });
  out.push({ id: "U12-cmemp-0", tipo: "comparar", forma: "emparejar", dificultad: 1, modulo: 9, grupo: "CME-0", items: [], pide: "Une cada adjetivo con su comparativo.",
    pares: ADJ12.slice(6, 10).map(a => [a.ac, a.comp]), explicacion: ADJ12.slice(6, 10).map(a => a.ac + " → " + a.comp).join(" · ") });
  out.push({ id: "U12-cmemp-1", tipo: "comparar", forma: "emparejar", dificultad: 1, modulo: 9, grupo: "CME-1", items: [], pide: "Une cada adjetivo con su comparativo.",
    pares: ADJ12.slice(0, 4).map(a => [a.ac, a.comp]), explicacion: ADJ12.slice(0, 4).map(a => a.ac + " → " + a.comp).join(" · ") });
  U12_COMP.forEach(([x, y, a0, es], j) => {
    const a = adj(a0), sy = sust(y.toLowerCase()) || sust(y);
    const ru = x + " " + a.comp + ", чем " + y + ".";
    const yGen = sy ? (/^[А-ЯЁ]/.test(y) ? cap(sy.sg[1]) : sy.sg[1]) : null;
    const ruG = yGen ? x + " " + a.comp + " " + yGen + "." : null;
    const otras = [ru].concat(ruG && yGen !== y ? [ruG] : []);
    out.push({ id: "U12-cm-" + j, tipo: "comparar", forma: "elegir", dificultad: 2, modulo: 9, grupo: "CM-" + j, items: ["lex:" + a.id], oir: ru, pide: "Completa: «" + es + "»", grande: x + " _____, чем " + y + ".",
      opciones: baraja(uniq([a.comp, a.m[0], a.f[0], a.n[0]]), j), correcta: a.comp, explicacion: "Comparativo: **" + a.comp + "**, no cambia. " + ru });
    out.push({ id: "U12-cmw-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMw-" + j, items: ["lex:" + a.id], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: otras, idioma: "ru", explicacion: ru + (otras[1] ? " También: " + otras[1] : "") });
    if (ruG && yGen !== y) out.push({ id: "U12-cmg-" + j, tipo: "comparar", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMg-" + j, items: ["lex:" + a.id], oir: ruG, pide: "Dilo sin чем, con el genitivo.", grande: ru,
      audio: ruG, audioManual: true, esperadas: [ruG], idioma: "ru", explicacion: "Sin чем, Y va en genitivo: **" + ruG + "**" });
  });
  const SAM = adj("са́мый");
  U12_SAMYJ.forEach(([tpl, g, es], j) => {
    const f = SAM[g][0], ru = tpl.replace("{}", f);
    out.push({ id: "U12-sam-" + j, tipo: "samyj", forma: j % 3 === 2 ? "escribir" : "elegir", dificultad: 2, modulo: 9, grupo: "SM-" + j, items: ["lex:" + SAM.id], oir: ru, pide: j % 3 === 2 ? "Escribe en ruso: «" + es + "»" : "Completa: «" + es + "»",
      explicacion: "са́мый cambia como un adjetivo: **" + f + "**. " + ru,
      ...(j % 3 === 2 ? { audio: ru, audioManual: true, esperadas: [ru], idioma: "ru" } : { grande: tpl.replace("{}", "_____"), opciones: baraja([SAM.m[0], SAM.f[0], SAM.n[0]], j), correcta: f }) });
  });
  [["Hoy hace más calor que ayer.", "Сего́дня тепле́е, чем вчера́."], ["Me gusta más el té.", "Мне бо́льше нра́вится чай."], ["Hablo español mejor que ruso.", "Я говорю́ по-испа́нски лу́чше, чем по-ру́сски."], ["Él habla más rápido.", "Он говори́т быстре́е."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-cmt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-cmd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CMD-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 10: todo junto ── */
  [["Llámame mañana, por favor.", "Позвони́ мне за́втра, пожа́луйста."], ["Tengo cinco amigos rusos.", "У меня́ пять ру́сских друзе́й."], ["No le digas a mamá.", "Не говори́ ма́ме."],
   ["Ayer leí el libro y hoy voy a ver la película. (eres hombre)", "Вчера́ я прочита́л кни́гу, а сего́дня я посмотрю́ фильм."], ["Paseo con mis amigos y sus perros.", "Я гуля́ю с мои́ми друзья́ми и их соба́ками."]].forEach(([es, ru], j) => {
    out.push({ id: "U12-mix-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "MX-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U12-mixd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 10, grupo: "MXd-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  U12_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U12-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 10, grupo: "L12-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U12-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 10, grupo: "L12v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });


  /* ══ Profundización (12/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar (~20 % de la sesión). */
  const D2 = u12Datos(), V = D2.verbo, A = adj;
  const push = o => out.push(o);
  const mez = (a, k) => baraja(a, k + 7);
  const nat = (id, modulo, regla, ok, mal, expl, o) => push(Object.assign({ id: "U12-nat-" + id, tipo: "natural", forma: "elegir", dificultad: 2, modulo, regla, grupo: "NA-" + id, items: [],
    oir: ok, pide: "¿Cuál suena natural?", opciones: mez([ok, mal], id.length), correcta: ok, explicacion: ok + " " + expl }, o || {}));
  const pq = (id, modulo, regla, frase, w, ok, otras, expl) => push({ id: "U12-pq-" + id, tipo: "porque", forma: "elegir", dificultad: 2, modulo, regla, grupo: "PQ-" + id, items: [],
    oir: frase, grande: frase, audio: frase, audioManual: true, pide: "¿Por qué «" + w + "»?", opciones: mez([ok].concat(otras), id.length + 3), correcta: ok, explicacion: frase + " " + expl });
  const par = (id, modulo, regla, pide, ok, mal, expl) => push({ id: "U12-par-" + id, tipo: "par", forma: "elegir", dificultad: 2, modulo, regla, grupo: "PA-" + id, items: [],
    oir: ok, pide, opciones: mez([ok, mal], id.length), correcta: ok, explicacion: ok + " " + expl });
  const oido = (id, modulo, regla, frase, pide, opciones, ok, expl) => push({ id: "U12-oido-" + id, tipo: "oido", forma: "elegir", dificultad: 2, modulo, regla, grupo: "OI-" + id, items: [],
    oir: frase, audio: frase, pide, opciones, correcta: ok, explicacion: frase + " " + expl });
  const desc = (id, modulo, regla, ejemplos, preg, ok, mal, expl) => push({ id: "U12-desc-" + id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo, regla, grupo: "DE-" + id, items: [],
    oir: ok, pide: ejemplos.join(" · ") + ". ¿Y " + preg + "?", opciones: mez([ok, mal], id.length), correcta: ok, explicacion: expl });
  const diag = (id, modulo, regla, mal, ok, falla, otras, expl) => push({ id: "U12-diag-" + id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo, regla, grupo: "DI-" + id, items: [],
    oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal, opciones: mez([falla].concat(otras), id.length), correcta: falla, esperadas: [ok], explicacion: ok + " " + expl });
  const cad = (id, modulo, regla, base, pasos, expl) => push({ id: "U12-cad-" + id, tipo: "cadena", forma: "cadena", dificultad: 3, modulo, regla, grupo: "CA-" + id, items: [],
    oir: pasos[pasos.length - 1][1][0], pide: "Cambia la frase paso a paso.", base, pasos: pasos.map(([p, e]) => ({ pide: p, esperadas: e })), explicacion: [base].concat(pasos.map(p => p[1][0])).join(" → ") + " " + expl });
  const desarm = (id, modulo, regla, pal, preguntas, expl) => push({ id: "U12-desarm-" + id, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo, regla, grupo: "DS-" + id, items: [],
    oir: pal.join(" "), audio: pal.join(" "), audioManual: true, pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: preguntas.map(([p, c]) => ({ pide: p, correcta: c })), explicacion: pal.join(" ") + " " + expl });

  /* ── Módulo 1: pronombres, никто́, -то / -нибудь ── */
  const PR = { "он": pron("он"), "она́": pron("она́"), "они́": pron("они́") };
  [["у", 1, "У ", " есть маши́на."], ["с", 4, "Я гуля́ю ", "."], ["о", 5, "Мы говори́м ", "."]].forEach(([pr, caso, a, b], k) => {
    Object.keys(PR).forEach((ru, j) => { const p = PR[ru]; if (!p || !p.n) return;
      const ok = a.replace(/^У $/, "") + (k === 0 ? "У " : "") + u12PronForma(p, caso, pr).replace(/^у /, k === 0 ? "" : "у ") + b;
      const okF = (k === 0 ? "У " + p.n[caso] : a + pr + " " + p.n[caso]) + b, malF = (k === 0 ? "У " + p.f[caso] : a + pr + " " + p.f[caso]) + b;
      if (p.n[caso] !== p.f[caso]) nat("pn-" + k + j, 1, "u12-pron-n", okF, malF, "Después de una preposición, **н-**: " + p.n[caso] + ".");
    }); });
  [["Я помога́ю ", "она́", 2, 3, "помога́ть + dativo."], ["Я звоню́ ", "он", 2, 3, "звони́ть + dativo."], ["Я пишу́ ", "они́", 2, 3, "A quién se escribe: dativo."], ["Ма́ма ждёт ", "мы", 3, 2, "ждать + acusativo."], ["Я ви́жу ", "они́", 3, 2, "ви́деть + acusativo."]].forEach(([a, ru, c, m, ex], j) => {
    const p = pron(ru); if (!p || p.f[c] === p.f[m]) return; nat("pd-" + j, 1, c === 2 ? "u12-pron-dat-ins" : "u12-pron-acc-gen", a + p.f[c] + ".", a + p.f[m] + ".", ex);
  });
  pq("pn-0", 1, "u12-pron-n", "Я гуля́ю с ней.", "ней", "Después de una preposición: н-", ["Es dativo", "Es posesivo"], "с + instrumental de она́, con **н-**.");
  pq("pn-1", 1, "u12-pron-n", "У него́ есть брат.", "него́", "Después de una preposición: н-", ["Es posesivo: «de él»", "Es acusativo"], "у + genitivo de он, con **н-**.");
  pq("pn-2", 1, "u12-pron-n", "Ма́ма зна́ет его́.", "его́", "No hay preposición: sin н-", ["Después de una preposición: н-", "Es dativo"], "Sin preposición: его́.");
  [["Никто́ не звони́т.", "Никто́ звони́т.", "Falta не: никто́ + не."], ["Я ничего́ не зна́ю.", "Я ничего́ зна́ю.", "ничего́ + не."], ["Я никого́ не ви́жу.", "Я никого́ ви́жу.", "никого́ + не."],
   ["Она́ никому́ не звони́ла.", "Она́ никого́ не звони́ла.", "звони́ть + dativo: никому́."], ["Я ничего́ не понима́ю.", "Я не понима́ю ничто́.", "«Nada» con un verbo negado: ничего́."], ["Никто́ не зна́ет.", "Никто́ зна́ет.", "Falta не."]].forEach(([ok, mal, ex], j) =>
    nat("nk-" + j, 1, "u12-nikto", ok, mal, ex));
  pq("nk-0", 1, "u12-nikto", "Я никого́ не ви́жу.", "не", "Con никто́, el verbo lleva не", ["Es una pregunta", "Va con никогда́"], "Como con никогда́: никого́ + не.");
  diag("nk-0", 1, "u12-nikto", "Никто́ звони́т.", "Никто́ не звони́т.", "Falta не", ["El caso de никто́", "La forma del verbo"], "никто́ + не + verbo.");
  diag("nk-1", 1, "u12-nikto", "Я не зна́ю ничто́.", "Я ничего́ не зна́ю.", "«Nada» con un verbo negado: ничего́", ["Falta не", "La forma del verbo"], "ничего́ + не.");
  cad("nk-0", 1, "u12-nikto", "Я зна́ю.", [["Niégalo: no sabes nada.", ["Я ничего́ не зна́ю.", "Я не зна́ю ничего́."]], ["Ahora: nadie sabe.", ["Никто́ не зна́ет."]]], "ничего́ / никто́ + не.");
  desarm("nk-0", 1, "u12-nikto", ["Я", "никого́", "не", "ви́жу."], [["¿A quién? (nadie, en acusativo)", 1], ["¿Qué palabra niega el verbo?", 2]], "никого́ + не + verbo.");
  par("to-0", 1, "u12-to-nibud", "¿Cuál dice que alguien está llamando y no sabes quién?", "Кто́-то звони́т.", "Кто́-нибудь звони́т?", "Hay alguien: **-то**.");
  par("to-1", 1, "u12-to-nibud", "¿Cuál pregunta si alguien (quien sea) sabe?", "Кто́-нибудь зна́ет?", "Кто́-то зна́ет.", "Pregunta: **-нибудь**.");
  nat("to-0", 1, "u12-to-nibud", "Ты что́-нибудь хо́чешь?", "Ты что́-то хо́чешь?", "En una pregunta: **-нибудь**.");
  nat("to-1", 1, "u12-to-nibud", "Ты кому́-нибудь звони́л?", "Ты кому́-то звони́л?", "En una pregunta: **-нибудь**.");

  /* ── Módulo 2: posesivos, свой, э́тот ── */
  const MOI2 = A("мой"), SVOI2 = A("свой"), ETOT2 = A("э́тот");
  [["брат", 2, "Я звоню́ ", "звони́ть + dativo"], ["сестра́", 4, "Я гуля́ю с ", "с + instrumental"], ["друг", 1, "У ", "у + genitivo"], ["ма́ма", 5, "Я ду́маю о ", "о + prepositivo"], ["подру́га", 2, "Я помога́ю ", "помога́ть + dativo"], ["па́па", 4, "Я гуля́ю с ", "с + instrumental"]].forEach(([ru, c, a, ex], j) => {
    const s = S(ru); if (!s || !MOI2) return; const f = D2.concuerda(MOI2, s, c), ok = a + f + " " + s.sg[c] + (c === 1 ? " есть соба́ка." : "."), mal = a + f + " " + s.sg[0] + (c === 1 ? " есть соба́ка." : ".");
    if (s.sg[c] !== s.sg[0]) nat("ps-" + j, 2, "u12-pos-casos", ok, mal, ex + ": las dos palabras en el mismo caso.");
    if (j < 4) { const mal2 = a + MOI2.m[0] + " " + s.sg[c] + (c === 1 ? " есть соба́ка." : "."); if (f !== MOI2.m[0]) nat("ps2-" + j, 2, "u12-pos-casos", ok, mal2, "El posesivo también cambia: " + f + "."); }
  });
  desc("ps-0", 2, "u12-pos-casos", ["моя́ сестра́ → с мое́й сестро́й", "моя́ ма́ма → с мое́й ма́мой"], "моя́ подру́га", "с мое́й подру́гой", "с моя́ подру́гой", "Femenino, instrumental: мое́й.");
  [["Ива́н", "жена́", 3, "Ива́н лю́бит ", "его́", "Iván ama a su esposa (la de él mismo)."], ["А́нна", "брат", 2, "А́нна звони́т ", "её", "Ana llama a su hermano (el de ella)."],
   ["Ма́ша", "сестра́", 4, "Ма́ша гуля́ет с ", "её", "Masha pasea con su hermana (la de ella)."], ["Ди́ма", "ма́ма", 5, "Ди́ма ду́мает о ", "его́", "Dima piensa en su mamá (la de él)."],
   ["Он", "телефо́н", 3, "Он и́щет ", "его́", "Él busca su teléfono (el de él)."], ["Она́", "кни́га", 3, "Она́ чита́ет ", "её", "Ella lee su libro (el de ella)."]].forEach(([q, ru, c, a, otro, es], j) => {
    const s = S(ru); if (!s || !SVOI2) return; const f = D2.concuerda(SVOI2, s, c), ok = a + (c === 4 && f.startsWith("св") ? "" : "") + f + " " + s.sg[c] + ".", mal = a + otro + " " + s.sg[c] + ".";
    const okF = ok.replace(/ с свое́й/, " со свое́й").replace(/ с своим/, " со свои́м"), malF = mal;
    nat("sv-" + j, 2, "u12-svoy", okF, malF, "Es de quien hace la acción: свой (" + f + ").", { pide: "«" + es + "» ¿Cuál suena natural?" });
    if (j < 3) pq("sv-" + j, 2, "u12-svoy", okF, f, "Es de quien hace la acción", ["Es de otra persona", "Es el sujeto de la frase"], "свой: de quien hace la acción.");
  });
  par("sv-0", 2, "u12-svoy", "¿Cuál dice que Iván ama a la esposa de otro hombre?", "Ива́н лю́бит его́ жену́.", "Ива́н лю́бит свою́ жену́.", "его́: de otro hombre. свою́ sería la de Iván.");
  par("sv-1", 2, "u12-svoy", "¿Cuál dice que Ana llama a su propia mamá?", "А́нна звони́т свое́й ма́ме.", "А́нна звони́т её ма́ме.", "La de Ana: свое́й.");
  diag("sv-0", 2, "u12-svoy", "Ма́ша звони́т её ма́ме.", "Ма́ша звони́т свое́й ма́ме.", "Es la de Masha: va свой", ["El caso de ма́ма", "La forma del verbo"], "Si es la mamá de Masha, свое́й.");
  desarm("sv-0", 2, "u12-svoy", ["Ива́н", "лю́бит", "свою́", "жену́."], [["¿Quién hace la acción?", 0], ["¿Qué palabra dice «su propia»?", 2]], "свою́ mira a Ива́н: es su esposa.");
  [["Я живу́ в ", "дом", 5], ["Я хочу́ купи́ть ", "руба́шка", 3], ["Я говорю́ с ", "челове́к", 4], ["Мы говори́м об ", "фильм", 5]].forEach(([a, ru, c], j) => {
    const s = S(ru); if (!s || !ETOT2) return; const f = D2.concuerda(ETOT2, s, c); const ok = a + f + " " + s.sg[c] + ".", mal = a + (s.g === "f" ? ETOT2.f[0] : ETOT2.m[0]) + " " + s.sg[c] + ".";
    if (f !== ETOT2.m[0] && f !== ETOT2.f[0]) nat("et-" + j, 2, "u12-etot", ok, mal, "э́тот cambia con la palabra: " + f + ".");
  });
  nat("ego-0", 2, "u12-ego-eyo", "У его́ бра́та есть соба́ка.", "У него́ бра́та есть соба́ка.", "его́ como posesivo («de él») no lleva **н-**.");

  /* ── Módulo 3: genitivo plural y contar ── */
  const CU = ["брат", "сестра́", "кни́га", "биле́т", "студе́нт", "друг", "ру́чка", "музе́й", "маши́на", "челове́к"];
  const UNO = s => s.g === "f" ? "одна́ " : s.g === "n" ? "одно́ " : "оди́н ", DOS = s => s.g === "f" ? "две " : "два ";
  const cnt = (n, s) => n === 1 ? UNO(s) + s.sg[0] : n <= 4 ? (n === 2 ? DOS(s) : ["", "", "", "три ", "четы́ре "][n]) + (s.conteo || s.sg[1]) : ["", "", "", "", "", "пять ", "шесть ", "семь ", "во́семь ", "де́вять ", "де́сять "][n] + s.pl[1];
  CU.forEach((ru, j) => { const s = S(ru); if (!s) return; const n = [2, 5, 3, 6, 4, 10, 5, 2, 7, 5][j];
    const ok = "У меня́ " + cnt(n, s) + ".", malF = n <= 4 ? (n === 2 ? DOS(s) : ["", "", "", "три ", "четы́ре "][n]) + s.pl[1] : ["", "", "", "", "", "пять ", "шесть ", "семь ", "во́семь ", "де́вять ", "де́сять "][n] + (s.conteo || s.sg[1]);
    if (ru === "челове́к") return;
    nat("ct-" + j, 3, "u12-contar", ok, "У меня́ " + malF + ".", n <= 4 ? "Después de 2, 3 o 4: genitivo singular." : "De 5 en adelante: genitivo plural.");
    if (j < 8) pq("ct-" + j, 3, "u12-contar", ok, (n <= 4 ? (s.conteo || s.sg[1]) : s.pl[1]), n <= 4 ? "Después de 2, 3 o 4: genitivo singular" : "Después de 5 o más: genitivo plural",
      [n <= 4 ? "Después de 5 o más: genitivo plural" : "Después de 2, 3 o 4: genitivo singular", "Después de 1: nominativo"], "1 · 2–4 · 5 o más.");
  });
  nat("dos-0", 3, "u12-contar", "две сестры́", "два сестры́", "Con palabras femeninas: две.");
  nat("dos-1", 3, "u12-contar", "две кни́ги", "два кни́ги", "Con palabras femeninas: две.");
  nat("dos-2", 3, "u12-contar", "два бра́та", "две бра́та", "брат es masculino: два.");
  [["мно́го", "друг"], ["ма́ло", "биле́т"], ["не́сколько", "кни́га"], ["Ско́лько у тебя́", "брат"]].forEach(([q, ru], j) => { const s = S(ru);
    nat("mn-" + j, 3, "u12-contar", q + " " + s.pl[1] + (q.startsWith("Ско́лько") ? "?" : ""), q + " " + s.pl[0] + (q.startsWith("Ско́лько") ? "?" : ""), q.split(" ")[0] + " + genitivo plural."); });
  desc("gp-0", 3, "u12-gen-pl", ["студе́нт → мно́го студе́нтов", "биле́т → мно́го биле́тов"], "магази́н", "мно́го магази́нов", "мно́го магази́н", "Masculino en consonante: **-ов**.");
  desc("gp-1", 3, "u12-gen-pl", ["кни́га → мно́го книг", "маши́на → мно́го маши́н"], "газе́та", "мно́го газе́т", "мно́го газе́тов", "Femenino en **-а**: se saca la vocal.");
  desc("gp-2", 3, "u12-gen-pl", ["учи́тель → мно́го учителе́й", "врач → мно́го враче́й"], "слова́рь", "мно́го словаре́й", "мно́го словаро́в", "En **-ь** o después de **ч**: **-ей**.");
  desc("gp-3", 3, "u12-gen-pl", ["музе́й → мно́го музе́ев", "трамва́й → мно́го трамва́ев"], "чай", "мно́го ча́ев", "мно́го ча́ов", "En **-й**: **-ев**.");
  oido("ct-0", 3, "u12-contar", "У меня́ два бра́та.", "Escucha. ¿Cuántos hermanos?", ["2", "5", "1"], "2", "два бра́та: 2.");
  oido("ct-1", 3, "u12-contar", "У меня́ пять бра́тьев.", "Escucha. ¿Cuántos hermanos?", ["5", "2", "1"], "5", "пять бра́тьев: 5.");
  [["Я ви́жу студе́нтов.", "Я ви́жу студе́нты.", "Personas: como el genitivo."], ["Я жду друзе́й.", "Я жду друзья́.", "Personas: como el genitivo."], ["Я покупа́ю кни́ги.", "Я покупа́ю книг.", "Cosas: como el nominativo."], ["Я люблю́ соба́к.", "Я люблю́ соба́ки.", "Animales: como el genitivo."]].forEach(([ok, mal, ex], j) =>
    nat("ap-" + j, 3, "u12-acc-pl", ok, mal, ex));
  cad("ct-0", 3, "u12-contar", "У меня́ оди́н брат.", [["Ahora: dos hermanos.", ["У меня́ два бра́та."]], ["Ahora: cinco hermanos.", ["У меня́ пять бра́тьев."]]], "1 · 2–4 · 5 o más.");
  cad("ct-1", 3, "u12-contar", "У меня́ одна́ кни́га.", [["Ahora: dos libros.", ["У меня́ две кни́ги."]], ["Ahora: muchos libros (мно́го).", ["У меня́ мно́го книг."]]], "две + genitivo singular; мно́го + genitivo plural.");
  diag("ct-0", 3, "u12-contar", "У меня́ пять кни́ги.", "У меня́ пять книг.", "La forma después del número", ["El número", "Falta есть"], "De 5 en adelante: genitivo plural.");

  /* ── Módulo 4: el plural en los otros casos ── */
  [["друг", "Я помога́ю ", 2, "dativo"], ["студе́нт", "Я звоню́ ", 2, "dativo"], ["ребёнок", "Мы гуля́ем с ", 4, "instrumental"], ["друг", "Я живу́ с ", 4, "instrumental"], ["ребёнок", "Он ду́мает о ", 5, "prepositivo"], ["брат", "Мы говори́м о ", 5, "prepositivo"]].forEach(([ru, a, c, cn], j) => {
    const s = S(ru); if (!s) return; const otro = c === 2 ? 4 : c === 4 ? 2 : 2;
    nat("p2-" + j, 4, "u12-pl-dat-ins-prep", a + s.pl[c] + ".", a + s.pl[otro] + ".", cn + " plural: " + s.pl[c] + ".");
    if (j % 2 === 0) pq("p2-" + j, 4, "u12-pl-dat-ins-prep", a + s.pl[c] + ".", s.pl[c], c === 2 ? "Dativo plural: -ам / -ям" : c === 4 ? "Instrumental plural: -ами / -ями" : "Prepositivo plural: -ах / -ях",
      ["Dativo plural: -ам / -ям", "Instrumental plural: -ами / -ями", "Prepositivo plural: -ах / -ях"].filter(x => !x.startsWith(c === 2 ? "Dativo" : c === 4 ? "Instrumental" : "Prepositivo")), "Las mismas terminaciones para todas las palabras.");
  });
  nat("ap4-0", 4, "u12-adj-pl", "Я гуля́ю с хоро́шими друзья́ми.", "Я гуля́ю с хоро́шие друзья́ми.", "El adjetivo, en el mismo caso: **-ими**.");
  nat("ap4-1", 4, "u12-adj-pl", "У меня́ мно́го но́вых книг.", "У меня́ мно́го но́вые книг.", "Genitivo plural: **-ых**.");
  nat("ap4-2", 4, "u12-pos-pl", "Я звоню́ мои́м друзья́м.", "Я звоню́ мои́ друзья́м.", "Dativo plural: мои́м.");
  desc("p2-0", 4, "u12-pl-dat-ins-prep", ["студе́нты → студе́нтам", "врачи́ → врача́м"], "бра́тья", "бра́тьям", "бра́тьями", "Dativo plural: -ам / -ям.");
  cad("p2-0", 4, "u12-pl-dat-ins-prep", "Я гуля́ю с дру́гом.", [["Ahora: con amigos (plural).", ["Я гуля́ю с друзья́ми."]], ["Ahora: les escribo a mis amigos (Я пишу́…).", ["Я пишу́ друзья́м.", "Я пишу́ мои́м друзья́м."]]], "Instrumental plural -ями; dativo plural -ям.");

  /* ── Módulo 5: cómo se forman las parejas ── */
  const FORMA = { prefijo: "Con un prefijo", final: "Cambiando el final", otra: "Con otra palabra" };
  const modPar = i => ["приходи́ть", "уходи́ть", "приезжа́ть", "уезжа́ть"].indexOf(i) >= 0 ? 7 : i === "ждать" || i === "встреча́ть" ? 6 : ["ста́вить", "включа́ть", "выключа́ть"].indexOf(i) >= 0 ? 8 : 5;
  U12_PARES_NUEVAS.forEach(([i, r, es, f], j) => {
    const vi = V(i), vr = V(r); if (!vi || !vr || !vr.futuro) return;
    const m = modPar(i);
    const otras = uniq(baraja(U12_PARES_NUEVAS.filter(x => x[1] !== r && modPar(x[0]) <= m).map(x => x[1]), j + 1)).slice(0, 2);
    push({ id: "U12-parj-n-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: m, regla: f === "prefijo" ? "u12-asp-prefijo" : f === "final" ? "u12-asp-sufijo" : "u12-asp-otra", grupo: "PJN-" + j, items: ["lex:" + vr.id], oir: vr.ac,
      pide: "¿Cuál es la pareja de resultado de «" + vi.ac + "» (" + es + ")?", opciones: mez([vr.ac].concat(otras), j), correcta: vr.ac, explicacion: vi.ac + " → " + vr.ac + ": я " + vr.futuro[0] + "." });
    if (j < 12) pq("frm-" + j, m, f === "prefijo" ? "u12-asp-prefijo" : f === "final" ? "u12-asp-sufijo" : "u12-asp-otra", vi.ac + " → " + vr.ac, vr.ac, FORMA[f], Object.values(FORMA).filter(x => x !== FORMA[f]), FORMA[f].toLowerCase() + ".");
  });
  pq("frm-ot", 5, "u12-asp-otra", "говори́ть → сказа́ть", "сказа́ть", FORMA.otra, [FORMA.prefijo, FORMA.final], "Son dos palabras distintas.");
  par("np-0", 5, "u12-no-pareja", "¿Cuál dice que terminaste el libro?", "Я прочита́л кни́гу.", "Я почита́л кни́гу.", "Terminar: прочита́ть. почита́ть es «leer un rato».");
  par("np-1", 5, "u12-no-pareja", "¿Cuál dice que leíste un rato antes de dormir?", "Я почита́л и пошёл спать.", "Я прочита́л и пошёл спать.", "Un rato: почита́ть.");
  pq("np-0", 5, "u12-no-pareja", "Он заговори́л по-ру́сски.", "заговори́л", "Empezó a hablar", ["Terminó de hablar", "Habló un rato"], "**за-**: empezar a.");

  /* ── Módulo 6: negación, futuro, después de нача́ть ── */
  [["чита́ть", "прочита́ть", "кни́гу", "el libro"], ["де́лать", "сде́лать", "зада́ние", "la tarea"], ["писа́ть", "написа́ть", "письмо́", "la carta"], ["смотре́ть", "посмотре́ть", "фильм", "la película"]].forEach(([i, r, o, es], j) => {
    const vi = V(i), vr = V(r); if (!vi || !vr) return; const a = "Я не " + vi.pasado.m + " " + o + ".", b = "Я не " + vr.pasado.m + " " + o + ".";
    par("ng-" + j, 6, "u12-neg-imperf", "Eres hombre. ¿Cuál dice que ni empezaste " + es + "?", a, b, "не + proceso: no pasó.");
    par("ng2-" + j, 6, "u12-neg-imperf", "Eres hombre. ¿Cuál dice que empezaste " + es + " pero no " + (o === "кни́гу" ? "lo" : "la") + " terminaste?", b, a, "не + resultado: no llegó al final.");
  });
  pq("ng-0", 6, "u12-neg-imperf", "Я не прочита́л кни́гу.", "прочита́л", "Empezó, pero no llegó al final", ["No pasó para nada", "Lo hace siempre"], "не + resultado: no se terminó.");
  [["прочита́ть", "кни́гу"], ["написа́ть", "письмо́"], ["сде́лать", "зада́ние"], ["позвони́ть", "ма́ме"], ["купи́ть", "хлеб"], ["пригото́вить", "у́жин"]].forEach(([r, o], j) => {
    const vr = V(r); if (!vr) return; nat("fu-" + j, 6, "u12-dos-futuros", "За́втра я " + vr.futuro[0] + " " + o + ".", "За́втра я бу́ду " + vr.ac + " " + o + ".", "Nunca бу́ду + resultado: " + vr.futuro[0] + ".");
  });
  diag("fu-0", 6, "u12-dos-futuros", "За́втра я бу́ду прочита́ть кни́гу.", "За́втра я прочита́ю кни́гу.", "Nunca бу́ду + el de resultado", ["El caso de кни́га", "Falta за́втра"], "El de resultado conjugado ya es futuro.");
  oido("fu-0", 6, "u12-dos-futuros", "За́втра я прочита́ю кни́гу.", "Escucha. ¿Lo va a terminar?", ["Sí: lo va a terminar", "No se sabe: va a estar leyendo"], "Sí: lo va a terminar", "прочита́ю: resultado.");
  oido("fu-1", 6, "u12-dos-futuros", "За́втра я бу́ду чита́ть кни́гу.", "Escucha. ¿Lo va a terminar?", ["No se sabe: va a estar leyendo", "Sí: lo va a terminar"], "No se sabe: va a estar leyendo", "бу́ду чита́ть: proceso.");
  [["Я на́чал чита́ть.", "Я на́чал прочита́ть.", "Después de нача́ть: proceso."], ["Мы зако́нчили рабо́тать.", "Мы зако́нчили порабо́тать.", "Después de зако́нчить: proceso."], ["Не на́до звони́ть.", "Не на́до позвони́ть.", "Después de не на́до: proceso."], ["Он зако́нчил писа́ть.", "Он зако́нчил написа́ть.", "Después de зако́нчить: proceso."]].forEach(([ok, mal, ex], j) =>
    nat("in-" + j, 6, "u12-inf-imperf", ok, mal, ex));
  [["Я хочу́ сде́лать зада́ние.", "Я хочу́ де́лать зада́ние.", "Una vez: сде́лать."], ["Мне ну́жно позвони́ть ма́ме.", "Мне ну́жно звони́ть ма́ме.", "Una vez: позвони́ть."]].forEach(([ok, mal, ex], j) => nat("ho-" + j, 6, "u12-hochu", ok, mal, ex));
  cad("ng-0", 6, "u12-dos-futuros", "Я чита́ю кни́гу.", [["Ahora: mañana la vas a terminar (за́втра).", ["За́втра я прочита́ю кни́гу.", "Я прочита́ю кни́гу за́втра."]], ["Ahora: ayer no la terminaste (eres hombre, вчера́).", ["Вчера́ я не прочита́л кни́гу.", "Я не прочита́л кни́гу вчера́."]]], "Futuro de resultado; не + resultado: no se terminó.");

  /* ── Módulo 7: el relato ── */
  [["Ка́ждый день я чита́л газе́ту.", "Ка́ждый день я прочита́л газе́ту.", "Se repite: proceso."], ["Я ча́сто звони́л ма́ме.", "Я ча́сто позвони́л ма́ме.", "ча́сто: proceso."],
   ["Я до́лго писа́л письмо́.", "Я до́лго написа́л письмо́.", "до́лго: proceso."], ["Наконе́ц я вы́учил слова́.", "Наконе́ц я учи́л слова́.", "наконе́ц: resultado."], ["Обы́чно я гото́вил у́жин.", "Обы́чно я пригото́вил у́жин.", "обы́чно: proceso."]].forEach(([ok, mal, ex], j) =>
    nat("mk-" + j, 7, "u12-marcadores", ok, mal, ex, { pide: "Eres hombre. ¿Cuál suena natural?" }));
  pq("mk-0", 7, "u12-marcadores", "Ка́ждый день я чита́л газе́ту.", "чита́л", "Se repite (ка́ждый день): proceso", ["Una vez, terminado: resultado", "Es futuro"], "ка́ждый день pide proceso.");
  par("fi-0", 7, "u12-en-fila", "¿Cuál dice que las acciones fueron una después de la otra?", "Я пообе́дал и отдохну́л.", "Я обе́дал и отдыха́л.", "Resultados en fila.");
  par("fo-0", 7, "u12-fondo", "¿Cuál dice que estabas viendo una película cuando llamó tu hermano?", "Я смотре́л фильм, когда́ позвони́л брат.", "Я посмотре́л фильм, когда́ позвони́л брат.", "Fondo: смотре́л.");
  par("fo-1", 7, "u12-fondo", "¿Cuál dice que ella estaba cocinando cuando llegaste?", "Когда́ я пришёл, она́ гото́вила.", "Когда́ я пришёл, она́ пригото́вила.", "Fondo: гото́вила.");
  desarm("fo-0", 7, "u12-fondo", ["Я", "смотре́л", "фильм,", "когда́", "позвони́л", "брат."], [["¿Qué estaba pasando? (el fondo)", 1], ["¿Qué pasó de golpe?", 4]], "смотре́л: fondo, proceso. позвони́л: lo que pasó.");
  [["Я прие́хал в Москву́ на по́езде.", "Я пришёл в Москву́ на по́езде.", "En vehículo: прие́хать."], ["Она́ уе́хала в Москву́ на по́езде.", "Она́ ушла́ в Москву́ на по́езде.", "En vehículo: уе́хать."], ["Я пришёл домо́й пешко́м.", "Я прие́хал домо́й пешко́м.", "A pie: прийти́."]].forEach(([ok, mal, ex], j) =>
    nat("il-" + j, 7, "u12-ir-llegar", ok, mal, ex));
  oido("il-0", 7, "u12-ir-llegar", "Брат пришёл.", "Escucha. ¿Llegó o se fue?", ["Llegó", "Se fue"], "Llegó", "**при-**: llegar.");
  oido("il-1", 7, "u12-ir-llegar", "Брат ушёл.", "Escucha. ¿Llegó o se fue?", ["Se fue", "Llegó"], "Se fue", "**у-**: irse.");
  cad("il-0", 7, "u12-ir-llegar", "Я прихожу́ домо́й в семь.", [["Ahora: ayer, una vez (eres hombre, вчера́).", ["Вчера́ я пришёл домо́й в семь.", "Я пришёл домо́й в семь вчера́."]], ["Ahora: mañana (за́втра).", ["За́втра я приду́ домо́й в семь.", "Я приду́ домо́й в семь за́втра."]]], "приходи́ть → прийти́: пришёл, приду́.");
  diag("mk-0", 7, "u12-marcadores", "Ка́ждый день я прочита́л газе́ту.", "Ка́ждый день я чита́л газе́ту.", "Lo que se repite va con el de proceso", ["El caso de газе́та", "Falta уже́"], "ка́ждый день: proceso.");

  /* ── Módulo 8: imperativo ── */
  const RZ = { "й": "Vocal + ю: -й", "и": "Acento al final: -и", "ь": "Acento antes: -ь" };
  ["чита́ть", "де́лать", "слу́шать", "говори́ть", "позвони́ть", "писа́ть", "гото́вить", "отве́тить", "поста́вить", "положи́ть", "включи́ть", "прове́рить", "подожда́ть", "закры́ть"].forEach((ru, j) => {
    const v = V(ru); if (!v || !v.imperativo) return; const ty = v.imperativo.ty, fin = ty.replace(/́/g, "").slice(-1); if (!RZ[fin]) return;
    pq("im-" + j, 8, "u12-imp-forma", cap(ty) + "!", ty, RZ[fin], Object.values(RZ).filter(x => x !== RZ[fin]), "я " + (v.presente || v.futuro)[0] + " → " + ty + ".");
  });
  [["Не звони́ ему́!", "Не позвони́ ему́!"], ["Не открыва́й окно́.", "Не откро́й окно́."], ["Не выключа́й телеви́зор.", "Не вы́ключи телеви́зор."], ["Не включа́й телеви́зор.", "Не включи́ телеви́зор."]].forEach(([ok, mal], j) =>
    nat("ne-" + j, 8, "u12-imp-ne", ok, mal, "Para pedir que no se haga: не + proceso."));
  diag("ne-0", 8, "u12-imp-ne", "Не позвони́ ему́!", "Не звони́ ему́!", "Para prohibir va el de proceso", ["Falta -те", "El caso de ему́"], "не + proceso.");
  [["Подожди́те, пожа́луйста.", "Подожди́, пожа́луйста."], ["Прове́рьте, пожа́луйста.", "Прове́рь, пожа́луйста."], ["Сади́тесь, пожа́луйста!", "Сади́сь, пожа́луйста!"]].forEach(([vy, ty], j) =>
    par("tv-" + j, 8, "u12-imp-vy", "Le hablas a un desconocido. ¿Cuál dices?", vy, ty, "Con вы: **-те**."));
  oido("tv-0", 8, "u12-imp-vy", "Позвони́те мне за́втра.", "Escucha. ¿A quién le habla?", ["A varios o de usted (вы)", "A un amigo (ты)"], "A varios o de usted (вы)", "**-те**: вы.");
  nat("ia-0", 8, "u12-imp-aspecto", "Закро́й окно́, пожа́луйста.", "Закрыва́й окно́, пожа́луйста.", "Un pedido concreto, una vez: закры́ть.");
  nat("ia-1", 8, "u12-imp-aspecto", "Звони́ мне ча́сто!", "Позвони́ мне ча́сто!", "Algo que se repite: звони́ть.");
  cad("im-0", 8, "u12-imp-aspecto", "Ты чита́ешь кни́гу.", [["Pídeselo: léela (una vez).", ["Прочита́й кни́гу.", "Прочита́й кни́гу!"]], ["Ahora a varias personas (вы).", ["Прочита́йте кни́гу.", "Прочита́йте кни́гу!"]]], "Una vez: прочита́й; con вы, **-те**.");
  cad("im-1", 8, "u12-imp-ne", "Позвони́ ма́ме.", [["Ahora prohíbelo: no la llames.", ["Не звони́ ма́ме.", "Не звони́ ма́ме!"]], ["Ahora a varias personas (вы).", ["Не звони́те ма́ме.", "Не звони́те ма́ме!"]]], "не + proceso.");

  /* ── Módulo 9: comparar ── */
  [["Метро́ быстре́е авто́буса.", "Метро́ быстре́е авто́бус.", "Sin чем: lo que se compara, en genitivo."], ["Мой брат ста́рше меня́.", "Мой брат ста́рше я.", "Sin чем: genitivo, меня́."], ["Москва́ бо́льше, чем Барсело́на.", "Москва́ бо́льше, чем Барсело́ну.", "Con чем: las dos en nominativo."],
   ["Э́тот рестора́н лу́чше, чем кафе́.", "Э́тот рестора́н хоро́ший, чем кафе́.", "Para comparar, el comparativo: хоро́ший → лу́чше."]].forEach(([ok, mal, ex], j) => nat("cp-" + j, 9, j < 2 ? "u12-comp-gen" : "u12-comp", ok, mal, ex));
  [["са́мый большо́й го́род", "са́мый бо́льше го́род"], ["са́мая краси́вая у́лица", "са́мый краси́вая у́лица"], ["са́мое удо́бное ме́сто", "са́мое удо́бнее ме́сто"]].forEach(([ok, mal], j) =>
    nat("sm-" + j, 9, "u12-samyj", ok, mal, "са́мый + el adjetivo, en el mismo género."));
  oido("cp-0", 9, "u12-comp-verbo", "Сего́дня тепле́е, чем вчера́.", "Escucha. ¿Hoy hace más calor o más frío que ayer?", ["Más calor", "Más frío"], "Más calor", "тепле́е: más calor.");
  oido("cp-1", 9, "u12-comp-verbo", "Сего́дня холодне́е, чем вчера́.", "Escucha. ¿Hoy hace más calor o más frío que ayer?", ["Más frío", "Más calor"], "Más frío", "холодне́е: más frío.");
  par("cp-0", 9, "u12-comp", "¿Cuál dice que tu hermano es mayor que tú?", "Брат ста́рше меня́.", "Брат моло́же меня́.", "ста́рше: mayor.");
  par("cp-1", 9, "u12-comp-verbo", "¿Cuál le pide a alguien que hable más fuerte?", "Говори́те гро́мче!", "Говори́те ти́ше!", "гро́мче: más fuerte.");
  pq("cp-0", 9, "u12-comp-gen", "Метро́ быстре́е авто́буса.", "авто́буса", "Sin чем: genitivo", ["Es plural", "Después de un número"], "Comparativo sin чем + genitivo.");
  cad("cp-0", 9, "u12-comp-gen", "Москва́ больша́я.", [["Compárala con Barcelona, con чем.", ["Москва́ бо́льше, чем Барсело́на."]], ["Ahora sin чем.", ["Москва́ бо́льше Барсело́ны."]]], "Con чем, nominativo; sin чем, genitivo.");
  diag("cp-0", 9, "u12-comp-gen", "Мой брат ста́рше я.", "Мой брат ста́рше меня́.", "Sin чем va genitivo", ["Falta са́мый", "La forma de ста́рше"], "ста́рше + genitivo: меня́.");
  desc("cf-0", 9, "u12-comp-forma", ["интере́сный → интере́снее", "краси́вый → краси́вее"], "у́мный", "умне́е", "у́мнше", "Se agrega **-ее**.");
  desc("cf-1", 9, "u12-comp-forma", ["гро́мкий → гро́мче", "коро́ткий → коро́че"], "лёгкий", "ле́гче", "лёгкее", "En **-кий**, la **к** cambia y termina en **-е**.");

  /* ── Vocabulario nuevo (12/10/2026): significado y palabra-es-ru, en el módulo donde se presenta ── */
  const modDe = {};
  U12_GRUPOS.forEach(([m, t, pal]) => pal.split(" ").forEach(ru => { if (U12_GLOSA[ru] && !modDe[ru]) modDe[ru] = m; }));
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(12) >= 0 && U12_GLOSA[e.acento] && modDe[e.acento]);
  nuevas.forEach((e, i) => {
    const es = U12_GLOSA[e.acento], m = modDe[e.acento];
    const dis = baraja(nuevas.filter(x => x.id !== e.id && U12_GLOSA[x.acento] !== es && Math.abs(modDe[x.acento] - m) <= 2).map(x => U12_GLOSA[x.acento]), i + 3).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru };
    if (dis.length >= 2) out.push(Object.assign({ id: "U12-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U12-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.replace(/-/g, "").length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });

  /* Cada ejercicio viejo apunta a su regla (para «Repasar la regla») */
  const REGLA_ID = [[/^U12-(ps|psw|posemp)-/, "u12-pos-casos"], [/^U12-(su|suw|sudet)-/, "u12-ego-eyo"], [/^U12-(este|estew)-/, "u12-etot"],
    [/^U12-npl-/, "u12-pl-nom"], [/^U12-gpl-/, "u12-gen-pl"], [/^U12-(num|pldet|plt)-/, "u12-contar"], [/^U12-(accp|acci)-/, "u12-acc-pl"],
    [/^U12-(p2|p2w|p2emp|p2t|p2d|p2det)-/, "u12-pl-dat-ins-prep"], [/^U12-(adp|adpw)-/, "u12-adj-pl"],
    [/^U12-(asemp|aspf|ascual|as|asw|ast|asd)-/, "u12-asp-repaso"], [/^U12-(fut|fu2|fudet)-/, "u12-dos-futuros"], [/^U12-inf-/, "u12-hochu"], [/^U12-infg-/, "u12-inf-imperf"],
    [/^U12-(mk|mkdet|mkt|mko)-/, "u12-marcadores"], [/^U12-seq-/, "u12-en-fila"],
    [/^U12-(imf|imemp|imd)-/, "u12-imp-forma"], [/^U12-(pide|pidew|imdet)-/, "u12-imp-aspecto"], [/^U12-pidevy-/, "u12-imp-vy"], [/^U12-(no|now)-/, "u12-imp-ne"],
    [/^U12-(cmf|cmemp)-/, "u12-comp-forma"], [/^U12-(cm|cmw|cmt|cmd)-/, "u12-comp"], [/^U12-cmg-/, "u12-comp-gen"], [/^U12-sam-/, "u12-samyj"]];
  const reglaPron = e => { const t = String(e.correcta || (e.esperadas || [""])[0] || "") + " " + String(e.grande || ""); if (/(^|\s)(у|с|со|о|обо|к) н?[её]?/.test(t) && /н(его́|её|ей|им|ими|ём|их|ему́)/.test(t)) return "u12-pron-n";
    if (/(мне|тебе́|ему́|ей|нам|вам|им|мной|тобо́й|на́ми|ва́ми|и́ми)\b/.test(t)) return "u12-pron-dat-ins"; return "u12-pron-acc-gen"; };
  out.forEach(e => { if (e.regla) return; if (/^U12-(pr|prw|premp|prdet)-/.test(e.id)) { e.regla = reglaPron(e); return; } const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1]; });
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
