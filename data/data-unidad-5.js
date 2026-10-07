/* ============================================================
   DATA-UNIDAD-5.JS — Unidad 5: Verbos en presente y acciones cotidianas
   ------------------------------------------------------------
   Versión 03/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 03/10/2026):
   · Las seis personas: se suman ты y вы (вы = ustedes y usted).
   · Fuera de la unidad: нра́виться (dativo), идти́ / е́хать (Unidad 6,
     movimiento) y los verbos con dativo (помога́ть, звони́ть, отвеча́ть).
   · Verbos con -ся (учи́ться, просыпа́ться, возвраща́ться) en el módulo 9.
   · Palabras nuevas en el léxico: у́тром, днём, ве́чером, но́чью.
   · Con un verbo negado, los objetos son cosas que no cambian en
     acusativo (телеви́зор, ко́фе): en la negación el ruso a veces pasa el
     objeto a genitivo, y eso todavía no se enseña.
   · Evaluación: 35 ejercicios en 7 partes; «Мой день» es el proyecto.
   · Cada explicación muestra el cambio: чита́ть → ты чита́ешь.
   Las formas salen de Verbos y de Casos, nunca a mano.
   Profundización (07/10/2026): teoría ampliada con ids de regla (u5-…),
   ejemplos explicados, errores típicos, chequeos y «Más a fondo»; tipos
   de ejercicio nuevos (porque, natural, oido, cadena, diagnostico,
   descubrir, par) y «regla» en casi todo el banco.
   ============================================================ */

/* Personas: ruso, español (vos para ты, rioplatense), índice en el presente de Verbos */
const U5_PERS = [
  { ru: "я", es: "yo", i: 0 }, { ru: "ты", es: "vos", i: 1 }, { ru: "он", es: "él", i: 2 }, { ru: "она́", es: "ella", i: 2 },
  { ru: "мы", es: "nosotros", i: 3 }, { ru: "вы", es: "ustedes", i: 4 }, { ru: "они́", es: "ellos", i: 5 }
];
const U5_PERS_LABEL = ["я", "ты", "он / она́", "мы", "вы", "они́"];

/* Verbos: "ruso": [español, yo, vos, él / ella, nosotros, ellos / ustedes, grupo]
   grupo: 1 (1.ª conjugación, -ешь), 2 (2.ª, -ишь), "e" (especial), "a" (ampliación) */
const U5_VERBOS = {
  "чита́ть": ["leer", "leo", "leés", "lee", "leemos", "leen", 1], "рабо́тать": ["trabajar", "trabajo", "trabajás", "trabaja", "trabajamos", "trabajan", 1],
  "де́лать": ["hacer", "hago", "hacés", "hace", "hacemos", "hacen", 1], "понима́ть": ["entender", "entiendo", "entendés", "entiende", "entendemos", "entienden", 1],
  "слу́шать": ["escuchar", "escucho", "escuchás", "escucha", "escuchamos", "escuchan", 1], "изуча́ть": ["estudiar (una materia)", "estudio", "estudiás", "estudia", "estudiamos", "estudian", 1],
  "гуля́ть": ["pasear", "paseo", "paseás", "pasea", "paseamos", "pasean", 1], "отдыха́ть": ["descansar", "descanso", "descansás", "descansa", "descansamos", "descansan", 1],
  "за́втракать": ["desayunar", "desayuno", "desayunás", "desayuna", "desayunamos", "desayunan", 1], "обе́дать": ["almorzar", "almuerzo", "almorzás", "almuerza", "almorzamos", "almuerzan", 1],
  "у́жинать": ["cenar", "ceno", "cenás", "cena", "cenamos", "cenan", 1], "ду́мать": ["pensar", "pienso", "pensás", "piensa", "pensamos", "piensan", 1],
  "знать": ["saber, conocer", "conozco", "conocés", "conoce", "conocemos", "conocen", 1], "покупа́ть": ["comprar", "compro", "comprás", "compra", "compramos", "compran", 1],
  "открыва́ть": ["abrir", "abro", "abrís", "abre", "abrimos", "abren", 1], "закрыва́ть": ["cerrar", "cierro", "cerrás", "cierra", "cerramos", "cierran", 1],
  "жить": ["vivir", "vivo", "vivís", "vive", "vivimos", "viven", 1], "пить": ["tomar (beber)", "tomo", "tomás", "toma", "tomamos", "toman", 1],
  "ждать": ["esperar", "espero", "esperás", "espera", "esperamos", "esperan", 1], "встава́ть": ["levantarse", "me levanto", "te levantás", "se levanta", "nos levantamos", "se levantan", 1],
  "писа́ть": ["escribir", "escribo", "escribís", "escribe", "escribimos", "escriben", 1], "иска́ть": ["buscar", "busco", "buscás", "busca", "buscamos", "buscan", 1],
  "испо́льзовать": ["usar", "uso", "usás", "usa", "usamos", "usan", 1],
  "говори́ть": ["hablar", "hablo", "hablás", "habla", "hablamos", "hablan", 2], "смотре́ть": ["mirar", "miro", "mirás", "mira", "miramos", "miran", 2],
  "люби́ть": ["querer, encantar", "quiero", "querés", "quiere", "queremos", "quieren", 2], "ви́деть": ["ver", "veo", "ves", "ve", "vemos", "ven", 2],
  "гото́вить": ["cocinar", "cocino", "cocinás", "cocina", "cocinamos", "cocinan", 2], "спать": ["dormir", "duermo", "dormís", "duerme", "dormimos", "duermen", 2],
  "находи́ть": ["encontrar", "encuentro", "encontrás", "encuentra", "encontramos", "encuentran", 2],
  "хоте́ть": ["querer", "quiero", "querés", "quiere", "queremos", "quieren", "e"], "мочь": ["poder", "puedo", "podés", "puede", "podemos", "pueden", "e"],
  "есть": ["comer", "como", "comés", "come", "comemos", "comen", "e"], "учи́ться": ["estudiar (cursar)", "estudio", "estudiás", "estudia", "estudiamos", "estudian", "e"],
  "просыпа́ться": ["despertarse", "me despierto", "te despertás", "se despierta", "nos despertamos", "se despiertan", "e"],
  "возвраща́ться": ["volver", "vuelvo", "volvés", "vuelve", "volvemos", "vuelven", "e"],
  "стоя́ть": ["estar parado", "estoy parado", "estás parado", "está parado", "estamos parados", "están parados", "a"],
  "сиде́ть": ["estar sentado", "estoy sentado", "estás sentado", "está sentado", "estamos sentados", "están sentados", "a"],
  "петь": ["cantar", "canto", "cantás", "canta", "cantamos", "cantan", "a"], "танцева́ть": ["bailar", "bailo", "bailás", "baila", "bailamos", "bailan", "a"],
  "рисова́ть": ["dibujar", "dibujo", "dibujás", "dibuja", "dibujamos", "dibujan", "a"], "пла́вать": ["nadar", "nado", "nadás", "nada", "nadamos", "nadan", "a"],
  "бе́гать": ["correr", "corro", "corrés", "corre", "corremos", "corren", "a"], "спра́шивать": ["preguntar", "pregunto", "preguntás", "pregunta", "preguntamos", "preguntan", "a"]
};
/* «Me encanta» para las cosas con люби́ть */
const U5_ENCANTA = ["me encanta", "te encanta", "le encanta", "nos encanta", "les encanta"];

/* Objetos: "ruso": [español, indefinido o sin artículo, definido] (personas: [español, «a…», sujeto]) */
const U5_COSAS = {
  "кни́га": ["libro", "un libro", "el libro"], "газе́та": ["diario", "el diario", "el diario"], "журна́л": ["revista", "una revista", "la revista"],
  "письмо́": ["carta", "una carta", "la carta"], "пе́сня": ["canción", "una canción", "la canción"], "му́зыка": ["música", "música", "la música"],
  "фильм": ["película", "una película", "la película"], "ко́фе": ["café", "café", "el café"], "чай": ["té", "té", "el té"], "вода́": ["agua", "agua", "el agua"],
  "сок": ["jugo", "jugo", "el jugo"], "хлеб": ["pan", "pan", "el pan"], "суп": ["sopa", "sopa", "la sopa"], "пи́цца": ["pizza", "pizza", "la pizza"],
  "ры́ба": ["pescado", "pescado", "el pescado"], "я́блоко": ["manzana", "una manzana", "la manzana"], "молоко́": ["leche", "leche", "la leche"],
  "маши́на": ["auto", "un auto", "el auto"], "кварти́ра": ["departamento", "un departamento", "el departamento"], "дом": ["casa", "una casa", "la casa"],
  "телефо́н": ["teléfono", "un teléfono", "el teléfono"], "компью́тер": ["computadora", "una computadora", "la computadora"], "слова́рь": ["diccionario", "un diccionario", "el diccionario"],
  "спорт": ["deporte", "deporte", "el deporte"], "футбо́л": ["fútbol", "fútbol", "el fútbol"], "телеви́зор": ["televisor", "televisión", "la televisión"],
  "за́втрак": ["desayuno", "el desayuno", "el desayuno"], "обе́д": ["almuerzo", "el almuerzo", "el almuerzo"], "у́жин": ["cena", "la cena", "la cena"],
  "ру́сский": ["ruso (idioma)", "ruso", "el ruso"]
};
const U5_PERSONAS = {
  "ма́ма": ["mamá", "a mamá", "Mamá"], "па́па": ["papá", "a papá", "Papá"], "брат": ["hermano", "a mi hermano", "Mi hermano"], "сестра́": ["hermana", "a mi hermana", "Mi hermana"],
  "друг": ["amigo", "a mi amigo", "Mi amigo"], "подру́га": ["amiga", "a mi amiga", "Mi amiga"], "ба́бушка": ["abuela", "a la abuela", "La abuela"], "де́душка": ["abuelo", "al abuelo", "El abuelo"],
  "А́нна": ["Ana", "a Ana", "Ana"], "Ива́н": ["Iván", "a Iván", "Iván"], "Ма́ша": ["Masha", "a Masha", "Masha"], "Ди́ма": ["Dima", "a Dima", "Dima"]
};
/* Qué recibe cada verbo (lista cerrada). Artículo del objeto en español: un · el · 0 (sin artículo) */
const U5_COMBOS = {
  "чита́ть": ["un", "кни́га газе́та журна́л письмо́"], "писа́ть": ["un", "письмо́ пе́сня"], "слу́шать": ["un", "му́зыка пе́сня ма́ма па́па"],
  "изуча́ть": ["0", "ру́сский му́зыка"], "понима́ть": ["el", "ру́сский ма́ма па́па"], "знать": ["el", "А́нна Ива́н Ма́ша Ди́ма"],
  "покупа́ть": ["un", "кни́га газе́та хлеб сок ко́фе чай вода́ ры́ба пи́цца молоко́ я́блоко маши́на кварти́ра дом телефо́н компью́тер слова́рь"],
  "открыва́ть": ["el", "кни́га письмо́"], "закрыва́ть": ["el", "кни́га компью́тер"], "иска́ть": ["el", "телефо́н кни́га слова́рь ма́ма брат"],
  "испо́льзовать": ["el", "компью́тер телефо́н слова́рь"], "ждать": ["el", "ма́ма па́па брат сестра́ друг подру́га"], "пить": ["un", "ко́фе чай сок вода́ молоко́"],
  "смотре́ть": ["un", "фильм телеви́зор футбо́л"], "люби́ть": ["el", "му́зыка спорт футбо́л ко́фе чай пи́цца ры́ба ма́ма па́па брат сестра́"],
  "ви́деть": ["un", "дом маши́на ма́ма брат друг А́нна"], "гото́вить": ["el", "за́втрак обе́д у́жин суп пи́цца ры́ба"], "находи́ть": ["el", "телефо́н кни́га слова́рь"],
  "хоте́ть": ["un", "ко́фе чай сок пи́цца кни́га маши́на"], "есть": ["un", "хлеб суп пи́цца ры́ба я́блоко"]
};
/* Verbos sin objeto (para las seis personas, la negación y las preguntas) */
const U5_SOLOS = "рабо́тать гуля́ть отдыха́ть за́втракать обе́дать у́жинать ду́мать спать встава́ть";
/* Palabras de frecuencia (módulo 5) y del día (módulo 10) */
const U5_FREC = { "всегда́": "siempre", "ча́сто": "seguido", "иногда́": "a veces", "сейча́с": "ahora" };
const U5_DIA = { "у́тром": "a la mañana", "днём": "a la tarde", "ве́чером": "a la noche", "но́чью": "de noche" };
/* Qué se hace en cada momento (frases de «Mi día»: verbo y objeto opcional) */
const U5_RUTINA = [["у́тром", "встава́ть", null], ["у́тром", "пить", "ко́фе"], ["у́тром", "за́втракать", null], ["у́тром", "чита́ть", "газе́та"],
  ["днём", "рабо́тать", null], ["днём", "обе́дать", null], ["днём", "гуля́ть", null], ["днём", "учи́ться", null],
  ["ве́чером", "у́жинать", null], ["ве́чером", "гото́вить", "у́жин"], ["ве́чером", "смотре́ть", "фильм"], ["ве́чером", "отдыха́ть", null], ["ве́чером", "чита́ть", "кни́га"],
  ["но́чью", "спать", null]];

/* Desde qué módulo ve el alumno cada palabra (nada antes de verse) */
const U5_VISTAS = {
  1: "чита́ть рабо́тать говори́ть кни́га",
  3: "де́лать понима́ть слу́шать изуча́ть гуля́ть отдыха́ть за́втракать обе́дать у́жинать ду́мать знать покупа́ть открыва́ть закрыва́ть жить пить ждать встава́ть писа́ть иска́ть испо́льзовать",
  4: "смотре́ть люби́ть ви́деть гото́вить спать находи́ть по-ру́сски",
  5: "всегда́ ча́сто иногда́ сейча́с спорт футбо́л телеви́зор за́втрак обе́д у́жин",
  7: "никогда́",
  9: "хоте́ть мочь есть учи́ться просыпа́ться возвраща́ться до́ма",
  10: "у́тром днём ве́чером но́чью пото́м"
};
const U5_AMPLIACION_RU = "стоя́ть сиде́ть петь танцева́ть рисова́ть пла́вать бе́гать спра́шивать";

/* Lecturas del módulo 10 (comprensión): revisadas a mano */
const U5_LECTURAS = [
  { id: "ivan", titulo: "День Ива́на", lineas: [
      ["Ива́н встаёт у́тром.", "Iván se levanta a la mañana."], ["Он пьёт ко́фе.", "Toma café."], ["Пото́м он рабо́тает.", "Después trabaja."],
      ["Днём он обе́дает.", "A la tarde almuerza."], ["Ве́чером он чита́ет кни́гу.", "A la noche lee un libro."], ["Но́чью он спит.", "De noche duerme."]],
    preguntas: [["¿Qué toma Iván a la mañana?", "ко́фе", ["чай", "сок"]], ["¿Qué hace Iván a la noche?", "чита́ет кни́гу", ["смо́трит фильм", "гото́вит у́жин"]], ["¿Qué hace después del café?", "рабо́тает", ["спит", "гуля́ет"]]],
    vf: [["Ива́н рабо́тает но́чью.", false], ["Ве́чером он чита́ет кни́гу.", true], ["Днём он обе́дает.", true]] },
  { id: "anna", titulo: "День А́нны", lineas: [
      ["А́нна у́чится.", "Ana estudia (va a la facultad)."], ["У́тром она́ за́втракает и слу́шает му́зыку.", "A la mañana desayuna y escucha música."],
      ["Днём она́ у́чится.", "A la tarde estudia."], ["Ве́чером она́ гото́вит у́жин.", "A la noche cocina la cena."],
      ["Она́ не смо́трит телеви́зор.", "No mira televisión."], ["Она́ чита́ет.", "Lee."]],
    preguntas: [["¿Qué hace Ana a la tarde?", "у́чится", ["спит", "гуля́ет"]], ["¿Qué cocina Ana a la noche?", "у́жин", ["обе́д", "за́втрак"]], ["¿Ana mira televisión?", "Нет, не смо́трит.", ["Да, смо́трит.", "Да, всегда́ смо́трит."]]],
    vf: [["Ве́чером А́нна гото́вит у́жин.", true], ["А́нна смо́трит телеви́зор.", false], ["У́тром она́ слу́шает му́зыку.", true]] },
  { id: "familia", titulo: "Мы до́ма", lineas: [
      ["Сего́дня мы до́ма.", "Hoy estamos en casa."], ["Па́па гото́вит обе́д.", "Papá cocina el almuerzo."], ["Ма́ма чита́ет газе́ту.", "Mamá lee el diario."],
      ["Брат слу́шает му́зыку.", "Mi hermano escucha música."], ["Сестра́ спит.", "Mi hermana duerme."], ["Пото́м мы обе́даем и гуля́ем.", "Después almorzamos y paseamos."]],
    preguntas: [["¿Quién cocina el almuerzo?", "Па́па", ["Ма́ма", "Брат"]], ["¿Qué hace mamá?", "чита́ет газе́ту", ["гото́вит обе́д", "спит"]], ["¿Qué hacen después?", "обе́дают и гуля́ют", ["спят", "смо́трят фильм"]]],
    vf: [["Сестра́ спит.", true], ["Ма́ма гото́вит обе́д.", false], ["Сего́дня они́ до́ма.", true]] }
];

/* ¿ты o вы? Situaciones (módulo 2) */
const U5_TYVY = [["Le hablás a tu amigo.", "ты"], ["Le hablás a tu profesora.", "вы"], ["Les hablás a dos amigos.", "вы"], ["Le hablás a tu mamá.", "ты"],
  ["Le hablás a un médico que no conocés.", "вы"], ["Le hablás a tu hermano.", "ты"], ["Le hablás a una vendedora en un negocio.", "вы"], ["Le hablás a un chico de tu edad en una fiesta.", "ты"]];

const UNIDAD_5 = {
  id: 5,
  titulo: "Verbos en presente y acciones cotidianas",
  tituloRu: "Глаго́лы в настоя́щем вре́мени",
  objetivo: "Conjugar en presente con las seis personas, negar, preguntar y contar qué hacés en un día, usando el acusativo de la Unidad 4.",
  tiempo: "3 a 4 semanas con práctica diaria (unas 30–40 horas)",
  modulos: [
    { id: "u5m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "El verbo ruso", resumen: "Я чита́ю, ты чита́ешь, он чита́ет…",
      intro: "En la Unidad 4 viste cuatro formas de cada verbo. Ahora se completan las seis, una por persona, como en español: leo, leés, lee…",
      secciones: [
        { id: "u5-una-forma", titulo: "Una forma por persona",
          antes: { pide: "Я ___ кни́гу. ¿Cuál va?", opciones: ["чита́ю", "чита́ешь", "чита́ют"], ok: "чита́ю", por: "La terminación tiene que coincidir con quién hace la acción: con {я}, **-ю**." },
          texto: "Cada persona tiene su terminación, y la terminación tiene que coincidir con quién hace la acción, igual que en español no decís «yo leés». Ya conocías cuatro formas; las nuevas son las de ты y вы.",
          ejemplos: [
            { ru: "Я {чита́ю} кни́гу.", es: "Leo un libro.", por: "{я} → **-ю**." },
            { ru: "Ты {чита́ешь} кни́гу.", es: "Leés un libro.", por: "ты → **-ешь**: es una de las formas nuevas." },
            { ru: "Ма́ма {чита́ет} кни́гу.", es: "Mamá lee un libro.", por: "Ма́ма = она́ → **-ет**." },
            { ru: "Мы {чита́ем} кни́гу.", es: "Leemos un libro.", por: "мы → **-ем**." },
            { ru: "Вы {чита́ете} кни́гу.", es: "Ustedes leen un libro.", por: "вы → **-ете**: la otra forma nueva." },
            { ru: "Они́ {чита́ют} кни́гу.", es: "Leen un libro.", por: "они́ → **-ют**." }],
          destacado: "чита́ю · чита́ешь · чита́ет · чита́ем · чита́ете · чита́ют",
          errores: [{ mal: "Ты чита́ет.", bien: "Ты {чита́ешь}.", por: "Con ты, la terminación es **-ешь**." }],
          truco: "Mirá la terminación: dice quién hace la acción, aunque falte el pronombre.",
          mas: { texto: "Como cada forma es distinta, a veces el pronombre se puede omitir: Чита́ешь? se entiende solo, porque **-ешь** ya dice que es ты. Pero en ruso lo normal es decirlo: Ты чита́ешь? Por eso en los ejercicios se aceptan las dos formas.",
            ejemplos: [{ ru: "{Рабо́таешь}?", es: "¿Trabajás?", por: "**-ешь** ya dice que la pregunta es para ты." }] },
          chequeo: [
            { pide: "Вы ___ по-ру́сски? (говори́ть)", opciones: ["говори́шь", "говори́те", "говоря́т"], ok: "говори́те", por: "Con вы, la forma termina en **-те**." },
            { pide: "¿Quién hace la acción en рабо́таешь?", opciones: ["я", "ты", "он"], ok: "ты", por: "**-ешь** es la terminación de ты." }] },
        { id: "u5-presente-unico", titulo: "Presente simple y continuo",
          texto: "El ruso tiene un solo presente. Я чита́ю es «leo» y también «estoy leyendo». No hay una forma aparte para lo que está pasando ahora: lo aclara la situación.",
          ejemplos: [
            { ru: "Я {слу́шаю} му́зыку.", es: "Escucho música / Estoy escuchando música.", por: "Una sola forma para las dos ideas." },
            { ru: "Что ты {де́лаешь}?", es: "¿Qué hacés? / ¿Qué estás haciendo?", por: "La misma pregunta sirve para «ahora» y para «en general»." }],
          mas: { texto: "Si hace falta aclarar, el ruso agrega una palabra de tiempo en lugar de cambiar el verbo: «ahora», «siempre», «a veces». Las vas a ver en esta misma unidad. Mientras tanto, cuando traduzcas, cualquiera de las dos versiones en español está bien." } }
      ] },
    { id: "u5m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "Los pronombres", resumen: "Я, ты, он, она́, мы, вы, они́.",
      intro: "Los pronombres ya los conocés de la Unidad 2. Acá se repasan, con una novedad importante: вы.",
      secciones: [
        { id: "u5-pronombres", titulo: "Los siete pronombres", texto: "{я} (yo), ты (vos), он (él), она́ (ella), мы (nosotros), вы (ustedes o usted), они́ (ellos o ellas). Cada uno va con su forma del verbo.",
          ejemplos: [
            { ru: "{Он} рабо́тает, {она́} рабо́тает.", es: "Él trabaja, ella trabaja.", por: "Он y она́ usan la misma forma: el verbo no cambia con el género." },
            { ru: "{Мы} рабо́таем.", es: "Trabajamos.", por: "мы → **-ем**." }] },
        { id: "u5-ty-vy", titulo: "Ты y вы",
          texto: "Ты es «vos»: para un amigo, la familia o alguien de tu edad. Вы sirve para dos cosas: hablarle a más de una persona («ustedes») y hablarle con respeto a una sola («usted»), como a un profesor o a alguien que no conocés.",
          ejemplos: [
            { ru: "Ма́ша, {ты} рабо́таешь?", es: "Masha, ¿trabajás?", por: "Una amiga: ты." },
            { ru: "О́льга, {вы} рабо́таете?", es: "Olga, ¿usted trabaja?", por: "La profesora: вы, por respeto." },
            { ru: "Ма́ша, Ди́ма, {вы} рабо́таете?", es: "Masha, Dima, ¿ustedes trabajan?", por: "Dos personas: вы, aunque sean amigos." }],
          destacado: "ты = vos · вы = ustedes / usted",
          mas: { texto: "Con una sola persona, вы lleva igual el verbo en plural: Вы рабо́таете, nunca «Вы рабо́тает». Por eso «usted trabaja» y «ustedes trabajan» se dicen igual, y lo que aclara cuál es la situación.\nCuándo se pasa de вы a ты lo decide la persona con la que hablás, o se acuerda entre los dos. Ante la duda, вы: nunca suena mal.",
            errores: [{ mal: "Вы рабо́тает?", bien: "Вы {рабо́таете}?", por: "Con вы, siempre **-ете**, aunque sea una sola persona." }] },
          chequeo: [{ pide: "Le preguntás al médico si entiende. ¿Qué decís?", opciones: ["Ты понима́ешь?", "Вы понима́ете?"], ok: "Вы понима́ете?", por: "A alguien que no conocés, con respeto: вы." }] },
        { id: "u5-oni", titulo: "Ellos y ellas", texto: "Они́ vale para «ellos» y para «ellas»: el ruso no distingue el género en plural.",
          ejemplos: [{ ru: "Ма́ма и ба́бушка? {Они́} рабо́тают.", es: "¿Mamá y la abuela? Trabajan.", por: "Dos mujeres: igual они́." }] }
      ] },
    { id: "u5m3", n: 3, tipo: "leccion", grupo: 1, titulo: "Primera conjugación", resumen: "-ю, -ешь, -ет, -ем, -ете, -ют.",
      intro: "La mayoría de los verbos rusos siguen uno de dos modelos. El más común es el de чита́ть.",
      secciones: [
        { id: "u5-primera", titulo: "Las terminaciones",
          texto: "Se le saca **-ть** al infinitivo y se agrega la terminación de cada persona. La vocal que se repite es la **е**: -ешь, -ет, -ем, -ете.",
          ejemplos: [
            { ru: "Ты {рабо́таешь}.", es: "Trabajás.", por: "**рабо́та-** + **-ешь**." },
            { ru: "Мы {гуля́ем}.", es: "Paseamos.", por: "**гуля́-** + **-ем**." },
            { ru: "Вы {за́втракаете}?", es: "¿Ustedes desayunan?", por: "**за́втрака-** + **-ете**." }],
          destacado: "-ю · -ешь · -ет · -ем · -ете · -ют",
          mas: { texto: "A este grupo se lo llama **primera conjugación**. Casi todos los verbos que terminan en **-ать** y **-ять** son de este grupo, y son muchísimos: рабо́тать, понима́ть, слу́шать, гуля́ть, де́лать, ду́мать. Si aprendés bien este modelo, ya podés conjugar una gran parte de los verbos del ruso.",
            ejemplos: [{ ru: "Они́ {ду́мают}.", es: "Piensan.", por: "**ду́ма-** + **-ют**." }] },
          chequeo: [{ pide: "Ты ___ кни́гу? (понима́ть)", opciones: ["понима́ешь", "понима́ет", "понима́ете"], ok: "понима́ешь", por: "Con ты, **-ешь**." }] },
        { id: "u5-primera-yo", titulo: "Con ё",
          texto: "Cuando el acento cae en la terminación, la **е** se vuelve **ё**. Las terminaciones son las mismas, solo que se escriben y se pronuncian con ё.",
          ejemplos: [
            { ru: "Где ты {живёшь}?", es: "¿Dónde vivís?", por: "El acento cae en la terminación: -ёшь." },
            { ru: "Он {пьёт} чай.", es: "Él toma té.", por: "-ёт en lugar de -ет." },
            { ru: "Мы {ждём} ма́му.", es: "Esperamos a mamá.", por: "-ём." }],
          ojo: "En Azbuka podés escribir е en lugar de ё: se acepta igual." },
        { id: "u5-primera-raiz", titulo: "Los que cambian la raíz",
          texto: "Algunos verbos cambian la **raíz**, la parte que va antes de la terminación. Las terminaciones siguen siendo las del modelo; lo que cambia es lo de adelante, y por eso conviene mirar cada uno en la tabla.",
          ejemplos: [
            { ru: "Я {живу́}.", es: "Vivo.", por: "жить → живу́: aparece una **в** que el infinitivo no tiene." },
            { ru: "Я {пью} во́ду.", es: "Tomo agua.", por: "пить → пью: la **и** se vuelve **ь**." },
            { ru: "Ты {пи́шешь} письмо́.", es: "Escribís una carta.", por: "писа́ть → пи́шешь: la **с** pasa a **ш** en todas las formas." },
            { ru: "Он {и́щет} телефо́н.", es: "Él busca el teléfono.", por: "иска́ть → и́щет: **ск** pasa a **щ**." }],
          truco: "Si sabés la forma de {я} y la de ты, sacás todas las demás.",
          mas: { texto: "Hay una familia más con un cambio regular: los verbos en **-овать** pierden esa parte y toman **-у-**: испо́льзовать → испо́льзую, испо́льзуешь. Y los que terminan en **-авать** pierden la **ва**: встава́ть → встаю́, встаёшь. Son patrones que se repiten en muchos verbos.",
            ejemplos: [
              { ru: "Мы {испо́льзуем} слова́рь.", es: "Usamos el diccionario.", por: "-овать → **-у-**: **испо́льзу-** + **-ем**." },
              { ru: "Ты {встаёшь}?", es: "¿Te levantás?", por: "встава́ть pierde la **ва**: **вста-** + **-ёшь**." }] } }
      ] },
    { id: "u5m4", n: 4, tipo: "leccion", grupo: 2, titulo: "Segunda conjugación", resumen: "-ю, -ишь, -ит, -им, -ите, -ят.",
      intro: "El segundo modelo es el de говори́ть. Cambia la vocal: donde el primero tiene е, este tiene и.",
      secciones: [
        { id: "u5-segunda", titulo: "Las terminaciones",
          texto: "Se saca la vocal y la **-ть** del infinitivo (говори́ть → **говор-**) y se agregan terminaciones con **и**. En la forma de они́, **-ят** (o **-ат**).",
          ejemplos: [
            { ru: "Я {говорю́} по-ру́сски.", es: "Hablo ruso.", por: "**говор-** + **-ю**." },
            { ru: "Ты {смо́тришь} фильм.", es: "Mirás una película.", por: "смотре́ть → **смотр-** + **-ишь**." },
            { ru: "Они́ {говоря́т}.", es: "Hablan.", por: "**-ят** en lugar del **-ют** del primer modelo." }],
          destacado: "-ю · -ишь · -ит · -им · -ите · -ят",
          errores: [{ mal: "Ты говоре́шь.", bien: "Ты {говори́шь}.", por: "Говори́ть es del segundo modelo: **-ишь**." }],
          chequeo: [{ pide: "Мы ___ фильм. (смотре́ть)", opciones: ["смо́трим", "смо́трем", "смо́трят"], ok: "смо́трим", por: "Segundo modelo, мы: **-им**." }] },
        { id: "u5-consonante-ya", titulo: "Una consonante de más en la forma de я",
          antes: { pide: "Он лю́бит, ты лю́бишь… ¿y {я}?", opciones: ["люби́ю", "люблю́", "лю́бю"], ok: "люблю́", por: "En la forma de {я} aparece una **л**: люблю́." },
          texto: "En algunos verbos del segundo modelo, **solo la forma de {я}** cambia la última consonante de la raíz. No es al azar: siempre son los mismos cambios. Después de **б**, **в** y **п** se agrega una **л**; la **д** se vuelve **ж**. Las otras cinco formas siguen el modelo sin cambios.",
          ejemplos: [
            { ru: "Я {люблю́} му́зыку.", es: "Me encanta la música.", por: "**б** → **бл**: люби́ть → люблю́." },
            { ru: "Я {гото́влю} суп.", es: "Cocino sopa.", por: "**в** → **вл**: гото́вить → гото́влю." },
            { ru: "Я {сплю}.", es: "Duermo.", por: "**п** → **пл**: спать → сплю." },
            { ru: "Я {ви́жу} дом.", es: "Veo la casa.", por: "**д** → **ж**: ви́деть → ви́жу. Lo mismo en находи́ть → нахожу́." }],
          destacado: "**б** → **бл** · **в** → **вл** · **п** → **пл** · **д** → **ж** (solo con {я})",
          errores: [{ mal: "Ты лю́блишь.", bien: "Ты {лю́бишь}.", por: "La **л** aparece solo en la forma de {я}." }],
          mas: { texto: "¿Por qué pasa? Es un cambio viejo de pronunciación: delante de la terminación de {я}, esas consonantes se ablandaron y con el tiempo quedaron así. Hay otros cambios del mismo tipo (**т** → **ч**, **с** → **ш**, **з** → **ж**) que vas a ver con otros verbos más adelante. La idea es siempre la misma: solo cambia la forma de {я}.",
            ejemplos: [{ ru: "Ты {ви́дишь}?", es: "¿Ves?", por: "Con ты vuelve la **д**: ви́дишь." }] } },
        { id: "u5-que-modelo", titulo: "¿Qué modelo sigue un verbo?",
          antes: { pide: "говори́ть → ты говори́шь, люби́ть → ты лю́бишь. ¿Y гото́вить?", opciones: ["гото́вишь", "гото́вешь"], ok: "гото́вишь", por: "Termina en **-ить**, como говори́ть: segundo modelo." },
          texto: "Hay una pista práctica en el infinitivo: casi todos los verbos en **-ить** son del segundo modelo (говори́ть, люби́ть, гото́вить, находи́ть). Las excepciones más usadas son dos verbos cortos: жить y пить, que son del primero. Los que terminan en **-ать** y **-ять** suelen ser del primero, pero no siempre: спать es del segundo. Y algunos en **-еть** también (смотре́ть, ви́деть).",
          ejemplos: [
            { ru: "Ты {гото́вишь} ры́бу.", es: "Cocinás pescado.", por: "-ить → segundo modelo: **-ишь**." },
            { ru: "Где ты {живёшь}?", es: "¿Dónde vivís?", por: "Жить termina en -ить, pero es corto y es del primero: **-ёшь**." },
            { ru: "Ты {спишь}.", es: "Dormís.", por: "Спать termina en -ать, pero es del segundo: **-ишь**." }],
          truco: "**-ешь** → primer modelo; **-ишь** → segundo modelo. Ante la duda, la forma de ты lo confirma.",
          mas: { texto: "Por eso conviene aprender cada verbo nuevo con dos formas: la de {я} y la de ты (люблю́, лю́бишь; живу́, живёшь). La de {я} muestra si hay un cambio de consonante o de raíz; la de ты dice el modelo. Con esas dos, salen todas las demás. Con los dos modelos se conjuga la gran mayoría de los verbos; los pocos que no los siguen aparecen más adelante en esta unidad.",
            ejemplos: [{ ru: "Я {нахожу́}, ты {нахо́дишь}.", es: "Encuentro, encontrás.", por: "La de {я} muestra el cambio **д** → **ж**; la de ты, el segundo modelo." }] },
          chequeo: [{ pide: "¿Qué forma de ты va con находи́ть?", opciones: ["нахо́дишь", "нахо́дешь"], ok: "нахо́дишь", por: "Termina en **-ить**: segundo modelo, **-ишь**." }] }
      ] },
    { id: "u5m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Verbos esenciales", resumen: "Comunicación, actividades, comida… y frecuencia.",
      intro: "Los verbos de la unidad, agrupados por tema, y cuatro palabras para decir cada cuánto hacés algo.",
      secciones: [
        { titulo: "Comunicación", texto: "говори́ть (hablar), понима́ть (entender), знать (saber, conocer), чита́ть (leer), писа́ть (escribir), слу́шать (escuchar), смотре́ть (mirar)." },
        { titulo: "Actividades", texto: "рабо́тать (trabajar), изуча́ть (estudiar una materia), де́лать (hacer), отдыха́ть (descansar), гуля́ть (pasear), ду́мать (pensar), жить (vivir)." },
        { titulo: "Comida y casa", texto: "за́втракать (desayunar), обе́дать (almorzar), у́жинать (cenar), гото́вить (cocinar), пить (tomar), спать (dormir), встава́ть (levantarse). Y lo que se cocina: за́втрак, обе́д, у́жин." },
        { id: "u5-frecuencia", titulo: "Cada cuánto",
          texto: "всегда́ (siempre), ча́сто (seguido), иногда́ (a veces), сейча́с (ahora). Van casi siempre **antes del verbo**, después de quién hace la acción.",
          ejemplos: [
            { ru: "Я {всегда́} за́втракаю.", es: "Siempre desayuno.", por: "Всегда́ va antes del verbo." },
            { ru: "Мы {ча́сто} гуля́ем.", es: "Paseamos seguido.", por: "Quién, cada cuánto, el verbo." },
            { ru: "Ты {иногда́} смо́тришь футбо́л?", es: "¿A veces mirás fútbol?", por: "También en las preguntas va antes del verbo." },
            { ru: "{Сейча́с} я обе́даю.", es: "Ahora estoy almorzando.", por: "Сейча́с suele ir al principio, y aclara que es «ahora»." }],
          destacado: "Я всегда́ за́втракаю. Мы ча́сто гуля́ем.",
          mas: { texto: "Сейча́с es la palabra que resuelve la duda del presente: Сейча́с я чита́ю es claramente «estoy leyendo». Всегда́, ча́сто e иногда́ hacen lo contrario: muestran que es algo habitual («leo seguido»). El verbo es el mismo en los dos casos.",
            ejemplos: [{ ru: "Я {ча́сто} чита́ю. {Сейча́с} я чита́ю.", es: "Leo seguido. Ahora estoy leyendo.", por: "Misma forma del verbo; la palabra de tiempo cambia el sentido." }] },
          chequeo: [{ pide: "¿Cuál suena natural?", opciones: ["Я всегда́ за́втракаю.", "Я за́втракаю всегда́ всегда́."], ok: "Я всегда́ за́втракаю.", por: "Всегда́ antes del verbo." }] }
      ] },
    { id: "u5m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Construir frases", resumen: "Verbo + acusativo: Мы смо́трим фильм.",
      intro: "Ahora se junta todo: quién hace la acción, el verbo en su forma y lo que recibe la acción en acusativo, como en la Unidad 4.",
      secciones: [
        { id: "u5-tres-piezas", titulo: "Tres piezas",
          texto: "Cada pieza tiene su forma: el pronombre, el verbo según la persona y el objeto en acusativo.",
          desarmar: { es: "Escuchás música.", partes: [
            { txt: "Ты", rol: "quién hace", nota: "El pronombre decide la forma del verbo." },
            { txt: "слу́шаешь", rol: "la acción", nota: "Слу́шать, forma de ты: **-ешь**." },
            { txt: "му́зыку", rol: "qué recibe", nota: "Му́зыка en acusativo: **-а** → **-у**." }] },
          ejemplos: [
            { ru: "Мы {смо́трим} {фильм}.", es: "Miramos una película.", por: "смотре́ть, мы: смо́трим; фильм es una cosa: queda igual." },
            { ru: "Они́ {покупа́ют} {маши́ну}.", es: "Compran un auto.", por: "покупа́ть, они́: покупа́ют; маши́на → маши́ну." },
            { ru: "Вы {лю́бите} {футбо́л}?", es: "¿Les gusta el fútbol?", por: "люби́ть, вы: лю́бите; футбо́л queda igual." }],
          destacado: "ты + слу́шать + му́зыка → Ты слу́шаешь му́зыку." },
        { id: "u5-cambiar-persona", titulo: "Cambiar la persona",
          texto: "Si cambia quién hace la acción, cambia solo el verbo. Lo que recibe la acción queda igual.",
          ejemplos: [
            { ru: "Я {чита́ю} кни́гу → Они́ {чита́ют} кни́гу.", es: "Leo un libro → Ellos leen un libro.", por: "Cambia la terminación del verbo; кни́гу no se toca." },
            { ru: "Ты {гото́вишь} обе́д → Мы {гото́вим} обе́д.", es: "Cocinás el almuerzo → Cocinamos el almuerzo.", por: "Segundo modelo: -ишь → -им." }],
          mas: { texto: "Es un error común cambiar también el objeto, como si concordara con la persona. No: el acusativo depende solo de que la palabra reciba la acción. Кни́гу es кни́гу con {я}, con ты y con они́." } },
        { id: "u5-donde-error", titulo: "Dónde está el error",
          texto: "Cuando algo no está bien, el error suele estar en una de las tres piezas: el verbo no coincide con quién hace la acción, o lo que recibe la acción no está en acusativo. La corrección te dice cuál.",
          errores: [
            { mal: "Мы чита́ет кни́гу.", bien: "Мы {чита́ем} кни́гу.", por: "Con мы, **-ем**." },
            { mal: "Я чита́ю кни́га.", bien: "Я чита́ю {кни́гу}.", por: "Кни́га recibe la acción: acusativo." }],
          truco: "Revisá de a una pieza: ¿quién?, ¿qué forma del verbo?, ¿acusativo?",
          chequeo: [{ pide: "Ты слу́шаешь му́зыка. ¿Dónde está el error?", opciones: ["En el verbo", "En lo que recibe la acción"], ok: "En lo que recibe la acción", por: "Му́зыка tiene que ir en acusativo: му́зыку." }] }
      ] },
    { id: "u5m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "Negación", resumen: "Я не чита́ю.",
      intro: "Para negar, el ruso usa una sola palabra: не.",
      secciones: [
        { id: "u5-ne", titulo: "Не antes del verbo",
          texto: "Не va justo antes del verbo, igual que «no» en español. El resto de la frase no cambia.",
          ejemplos: [
            { ru: "Я {не понима́ю}.", es: "No entiendo.", por: "Не + el verbo." },
            { ru: "Он {не зна́ет}.", es: "Él no sabe.", por: "La forma del verbo es la misma que sin не." },
            { ru: "Мы {не смо́трим} телеви́зор.", es: "No miramos televisión.", por: "Не antes del verbo; телеви́зор sigue igual." }],
          destacado: "Я не понима́ю. = No entiendo.",
          mas: { texto: "Не se pronuncia pegado al verbo, como si fueran una sola palabra: «niepanimáiu». Por eso nunca va al final ni separado del verbo: Я не чита́ю, no «Я чита́ю не»." } },
        { id: "u5-net-ne", titulo: "Нет y не",
          texto: "Нет es la respuesta «no». Не niega un verbo. En una respuesta completa van los dos.",
          ejemplos: [
            { ru: "— Ты рабо́таешь? — {Нет}.", es: "—¿Trabajás? —No.", por: "Нет contesta la pregunta." },
            { ru: "{Нет}, я {не} рабо́таю.", es: "No, no trabajo.", por: "Нет contesta; не niega el verbo." }],
          errores: [{ mal: "Я нет рабо́таю.", bien: "Я {не} рабо́таю.", por: "Para negar un verbo, не." }] },
        { id: "u5-nikogda", titulo: "Никогда́ también lleva не",
          texto: "Никогда́ es «nunca», y en ruso pide не igual. Sin не está mal.",
          desarmar: { es: "Nunca desayuno.", partes: [
            { txt: "Я", rol: "quién hace" },
            { txt: "никогда́", rol: "nunca", nota: "Никогда́ va antes del verbo, como всегда́." },
            { txt: "не", rol: "negación", nota: "Obligatoria: sin не, la frase está mal." },
            { txt: "за́втракаю", rol: "la acción" }] },
          ejemplos: [
            { ru: "Он {никогда́ не} пьёт ко́фе.", es: "Él nunca toma café.", por: "Никогда́ + не + verbo." },
            { ru: "Мы {никогда́ не} смо́трим футбо́л.", es: "Nunca miramos fútbol.", por: "Las dos palabras, siempre juntas antes del verbo." }],
          comparacion: "también se dice dos veces: «**no** desayuno **nunca**». En ruso pasa lo mismo, solo que las dos van antes del verbo: никогда́ не за́втракаю.",
          errores: [{ mal: "Я никогда́ чита́ю.", bien: "Я {никогда́ не} чита́ю.", por: "Con никогда́, el verbo lleva не." }],
          truco: "никогда́ + не + verbo.",
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["Она́ никогда́ не гуля́ет.", "Она́ никогда́ гуля́ет."], ok: "Она́ никогда́ не гуля́ет.", por: "Никогда́ pide не." }] }
      ] },
    { id: "u5m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Preguntas", resumen: "Ты рабо́таешь? Где ты живёшь?",
      intro: "Hacer preguntas en ruso es más simple que en español: muchas veces alcanza con cambiar la entonación.",
      secciones: [
        { id: "u5-entonacion", titulo: "Con la entonación",
          texto: "Las palabras son las mismas que en la afirmación; cambia la voz, que sube en la palabra que se pregunta. No se cambia el orden ni se agrega nada. Escuchá el audio de cada ejemplo.",
          ejemplos: [
            { ru: "Ты рабо́таешь.", es: "Trabajás.", por: "Afirmación: la voz baja al final." },
            { ru: "Ты {рабо́таешь}?", es: "¿Trabajás?", por: "Pregunta: la voz sube en рабо́таешь." },
            { ru: "{Ты} рабо́таешь?", es: "¿Vos trabajás?", por: "Si la voz sube en ты, se pregunta por la persona: ¿vos, o alguien más?" }],
          mas: { texto: "La voz sube justo en la sílaba acentuada de la palabra que se pregunta y baja enseguida. Es la manera más común de preguntar en ruso cuando la respuesta es «sí» o «no». Al escribir, alcanza con el signo de pregunta final: en ruso no hay signo de apertura «¿»." } },
        { id: "u5-palabras-pregunta", titulo: "Con palabras para preguntar",
          texto: "что (qué), кто (quién), где (dónde), как (cómo), почему́ (por qué), когда́ (cuándo). Van al principio, y después viene la frase en su orden normal.",
          ejemplos: [
            { ru: "{Что} ты де́лаешь?", es: "¿Qué hacés?", por: "Что al principio; después ты y el verbo." },
            { ru: "{Где} ты живёшь?", es: "¿Dónde vivís?", por: "Где pregunta por el lugar." },
            { ru: "{Когда́} вы обе́даете?", es: "¿Cuándo almuerzan?", por: "Когда́ pregunta por el momento." }],
          destacado: "Что ты де́лаешь? = ¿Qué hacés?" },
        { id: "u5-respuestas-cortas", titulo: "Respuestas cortas",
          texto: "En la respuesta corta se repite el verbo sin el pronombre.",
          ejemplos: [
            { ru: "— Ты рабо́таешь? — Да, {рабо́таю}.", es: "—¿Trabajás? —Sí, trabajo.", por: "El verbo pasa a la forma de {я}, sin pronombre." },
            { ru: "— Ты чита́ешь? — Нет, {не чита́ю}.", es: "—¿Leés? —No, no leo.", por: "Нет + не + el verbo." }],
          errores: [{ mal: "— Ты рабо́таешь? — Да, рабо́таешь.", bien: "— Ты рабо́таешь? — Да, {рабо́таю}.", por: "Contestás vos: la forma de {я}." }],
          chequeo: [{ pide: "— Вы понима́ете? — Да, ___.", opciones: ["понима́ете", "понима́ем"], ok: "понима́ем", por: "Si te preguntan a vos y a otros, contestás con мы." }] }
      ] },
    { id: "u5m9", n: 9, tipo: "leccion", grupo: "e", titulo: "Verbos especiales", resumen: "Быть, хоте́ть, мочь, есть y los verbos con -ся.",
      intro: "Unos pocos verbos muy usados no siguen los modelos. No hace falta la teoría: alcanza con aprenderlos de a uno.",
      secciones: [
        { id: "u5-byt", titulo: "Быть: el verbo que no se dice",
          texto: "Быть es «ser» y «estar», pero en presente no se dice. Por eso, para presentarse, Ма́ша dice Я Ма́ша y Лу́кас dice Я Лу́кас: «soy Masha», «soy Lucas», sin verbo.",
          ejemplos: [
            { ru: "Я {до́ма}.", es: "Estoy en casa.", por: "Sin verbo: {я} + до́ма." },
            { ru: "Она́ {врач}.", es: "Ella es médica.", por: "Sin «es»." },
            { ru: "Он {ру́сский}.", es: "Él es ruso.", por: "Igual: sin verbo." }],
          destacado: "Я до́ма. = Estoy en casa.",
          errores: [{ mal: "Я есть до́ма.", bien: "Я {до́ма}.", por: "En presente, быть no se dice." }] },
        { id: "u5-hotet-moch", titulo: "Хоте́ть y мочь", tabla: "hm",
          texto: "Хоте́ть (querer) y мочь (poder) son dos verbos muy usados que no siguen los modelos. Хоте́ть mezcla los dos: las formas del singular son del primero (хо́чешь) y las del plural, del segundo (хоти́м). En мочь, la **г** de могу́ se vuelve **ж** en el medio (мо́жешь) y vuelve en мо́гут. Miralos uno al lado del otro en la tabla.",
          ejemplos: [
            { ru: "Ты {хо́чешь} ко́фе?", es: "¿Querés café?", por: "Singular: como el primer modelo (-ешь)." },
            { ru: "Мы {хоти́м} пи́ццу.", es: "Queremos pizza.", por: "Plural: como el segundo (-им)." },
            { ru: "Я {могу́}, ты {мо́жешь}.", es: "Puedo, podés.", por: "**г** con {я} y они́; **ж** en el medio." }] },
        { id: "u5-despues-hotet", titulo: "Qué va después",
          texto: "Después de хоте́ть puede ir lo que querés, en acusativo, o lo que querés hacer, con un infinitivo. Мочь va casi siempre con un infinitivo.",
          ejemplos: [
            { ru: "Я хочу́ {пи́ццу}.", es: "Quiero pizza.", por: "Lo que querés: acusativo." },
            { ru: "Я хочу́ {чита́ть}.", es: "Quiero leer.", por: "Lo que querés hacer: infinitivo." },
            { ru: "Ты мо́жешь {говори́ть} по-ру́сски?", es: "¿Podés hablar ruso?", por: "Мочь + infinitivo." }],
          errores: [{ mal: "Я хочу́ чита́ю.", bien: "Я хочу́ {чита́ть}.", por: "Después de хоте́ть, el segundo verbo va en infinitivo." }],
          chequeo: [{ pide: "Мы хоти́м ___ фильм. (смотре́ть)", opciones: ["смотре́ть", "смо́трим"], ok: "смотре́ть", por: "Después de хоте́ть, infinitivo." }] },
        { id: "u5-est", titulo: "Есть",
          texto: "Есть (comer) es irregular y conviene aprenderlo entero: ем, ешь, ест, еди́м, еди́те, едя́т. Con objeto, en acusativo.",
          ejemplos: [
            { ru: "Я {ем} суп.", es: "Tomo sopa.", por: "La forma de {я} es ем." },
            { ru: "Они́ {едя́т} ры́бу.", es: "Comen pescado.", por: "En plural aparece una **д**: еди́м, едя́т." }] },
        { id: "u5-sya", titulo: "Los verbos con -ся",
          texto: "Algunos verbos terminan en **-ся**, como los verbos con «se» en español: учи́ться (estudiar, cursar), просыпа́ться (despertarse), возвраща́ться (volver). Se conjugan normal y al final se agrega **-сь** después de vocal o **-ся** después de consonante.",
          ejemplos: [
            { ru: "Я {учу́сь}.", es: "Estudio.", por: "учу́ termina en vocal: **-сь**." },
            { ru: "Он {у́чится}.", es: "Él estudia.", por: "у́чит termina en consonante: **-ся**." },
            { ru: "Мы {просыпа́емся}.", es: "Nos despertamos.", por: "Sin la partícula, la forma termina en **-м**, una consonante: **-ся**." },
            { ru: "Вы {возвраща́етесь}?", es: "¿Ustedes vuelven?", por: "Sin la partícula, la forma termina en **-е**, una vocal: **-сь**." }],
          truco: "Después de vocal, **-сь**; después de consonante, **-ся**.",
          errores: [{ mal: "Я учу́ся.", bien: "Я {учу́сь}.", por: "Después de vocal va **-сь**." }],
          mas: { texto: "Las seis formas de учи́ться: учу́сь, у́чишься, у́чится, у́чимся, у́читесь, у́чатся. Fijate que en у́чишься la terminación -шь termina en **ь**, que no es vocal: por eso va **-ся**. Es el único caso que suele confundir." } }
      ] },
    { id: "u5m10", n: 10, tipo: "lectura", titulo: "Mi día", resumen: "У́тром, днём, ве́чером, но́чью.",
      intro: "Para contar tu día hacen falta cuatro palabras: у́тром (a la mañana), днём (a la tarde), ве́чером (a la noche) y но́чью (de noche), más пото́м (después). Van al principio de la frase: У́тром я пью ко́фе. Leé los tres textos, escuchalos y después contestá." },
    { id: "u5m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Мой день", resumen: "Tu día, en ruso.",
      intro: "Escribí tu día en ruso, como un diario: qué hacés a la mañana, a la tarde y a la noche, qué no hacés y alguna pregunta con su respuesta. Por ejemplo: У́тром я встаю́ и пью ко́фе. Днём я рабо́таю. Я не смотрю́ телеви́зор. Ты рабо́таешь? Да, рабо́таю.",
      requisitos: [], consejos: [] },
    { id: "u5m12", n: 12, tipo: "examen", titulo: "Evaluación", resumen: "Conjugación, negación, preguntas, traducción y audio.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Conjugación", tipos: ["conjugar", "conjugar-escribir"], n: 8 },
        { nombre: "Completar frases", tipos: ["completar-verbo", "cambiar-persona", "detectar"], n: 6 },
        { nombre: "Negación", tipos: ["negar", "nunca"], n: 4 },
        { nombre: "Preguntas", tipos: ["pregunta-palabra", "respuesta-corta"], n: 4 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 6 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
function unidad5Modulo(id) { return UNIDAD_5.modulos.find(m => m.id === id) || null; }

/* Mezcla: ~70 % de producción */
const U5_MEZCLA = { conjugar: 1, "conjugar-escribir": 3, persona: 1, pronombre: 1, "ty-vy": 1, "completar-pron": 1, emparejar: 1,
  "completar-verbo": 2, "cambiar-persona": 2, detectar: 1, construir: 2, ordenar: 1, negar: 2, nunca: 1, "pregunta-palabra": 1, "respuesta-corta": 2,
  "es-ru": 3, dictado: 3, significado: 1, "palabra-es-ru": 1, copula: 1, lectura: 2, "lectura-vf": 1,
  /* Tipos nuevos (07/10/2026): entender la regla, ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1 };

/* ── Datos armados una vez ─────────────────────────────────── */
function u5Datos() {
  if (u5Datos.cache) return u5Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => { const c = (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos); return c[0] || null; };
  const desde = {};
  Object.keys(U5_VISTAS).forEach(m => U5_VISTAS[m].split(" ").forEach(ru => { if (desde[sin(ru)] == null) desde[sin(ru)] = +m; }));
  const verb = {};
  Object.keys(U5_VERBOS).forEach(ru => {
    const e = lex(ru, "verbo"); if (!e) return;
    const v = verboById(e.id); if (!v || !v.presente) return;
    const x = U5_VERBOS[ru];
    verb[sin(ru)] = { id: e.id, ac: e.acento || e.ru, f: v.presente.slice(), es: x[0], esF: x.slice(1, 6), grupo: x[6],
      desde: x[6] === "a" ? 5 : desde[sin(ru)] || (x[6] === 1 ? 3 : x[6] === 2 ? 4 : 9), amp: x[6] === "a" };
  });
  const sust = {};
  const alta = (ru, es, persona) => {
    const e = lex(ru, sin(ru) === "русский" ? "adjetivo" : "sustantivo"); if (!e) return;
    const cz = casosById(e.id); if (!cz) return;
    let nom, acc;
    if (cz.tipo === "indeclinable") nom = acc = cz.ru;
    else if (cz.tipo === "adjetivo") nom = acc = cz.m[0];       /* ру́сский (el idioma): igual */
    else { nom = cz.sg[0]; acc = cz.sg[3]; }
    const s = { id: e.id, ac: e.acento || e.ru, nom, acc, g: e.gender, anim: e.animate === "sí" || e.animate === true, indecl: cz.tipo === "indeclinable", persona,
      es: es[0], desde: desde[sin(ru)] || 1 };
    if (persona) { s.a = es[1]; s.suj = es[2]; } else { s.un = es[1]; s.el = es[2]; }
    sust[sin(ru)] = s;
  };
  Object.keys(U5_COSAS).forEach(ru => alta(ru, U5_COSAS[ru], false));
  Object.keys(U5_PERSONAS).forEach(ru => alta(ru, U5_PERSONAS[ru], true));
  return (u5Datos.cache = { sin, verb, sust, lex });
}

/* «чита́ть → ты чита́ешь (leés)»: el cambio, para las explicaciones */
function u5Cambio(v, i) {
  return "**" + v.ac + " → " + U5_PERS_LABEL[i] + " " + v.f[i] + "**";   /* dentro de la negrita, я no lleva llaves */
}
function u5EsVerbo(v, i) { return v.esF[[0, 1, 2, 3, 4, 4][i]]; }
/* Por qué el objeto queda así (como en la Unidad 4) */
function u5Acc(o) {
  if (o.nom === o.acc) return o.indecl ? o.nom + " no cambia nunca" : o.nom + " queda igual en acusativo";
  const fin = o.nom.replace(/\u0301/g, "").slice(-1);
  return "**" + o.nom + " → " + o.acc + "**: " + (fin === "а" ? "termina en -а, pasa a -у" : fin === "я" ? "termina en -я, pasa a -ю" : fin === "ь" ? "nombra a una persona: la -ь pasa a -я" : "nombra a una persona: se agrega -а");
}

/* Una frase: sujeto (persona p del 0 al 6 de U5_PERS, o una persona con nombre) + verbo + objeto */
function u5Frase(vk, ok, p, quien) {
  const { sin, verb, sust } = u5Datos();
  const v = verb[sin(vk)]; if (!v) return null;
  const o = ok ? sust[sin(ok)] : null; if (ok && !o) return null;
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  let sujRu, sujEs, i;
  if (quien) { const s = sust[sin(quien)]; sujRu = cap(s.nom); sujEs = s.suj; i = 2; }
  else { const P = U5_PERS[p]; sujRu = cap(P.ru); sujEs = { 0: "", 1: "Vos", 2: "Él", 3: "Ella", 4: "", 5: "Ustedes", 6: "Ellos" }[p]; i = P.i; }
  const forma = v.f[i];
  const ru = sujRu + " " + forma + (o ? " " + o.acc : "") + ".";
  let es, partes = null;
  const art = ok ? (U5_COMBOS[vk] || ["un"])[0] : null;
  if (sin(vk) === "любить" && o && !o.persona) {
    const dat = quien ? "A " + (/^(La|El|Mi) /.test(sujEs) ? sujEs.charAt(0).toLowerCase() + sujEs.slice(1) : sujEs).replace(/^A el /, "Al ") : { 0: "", 1: "A vos", 2: "A él", 3: "A ella", 4: "", 5: "A ustedes", 6: "A ellos" }[p];
    es = ((dat ? dat + " " : "") + U5_ENCANTA[[0, 1, 2, 3, 4, 4][i]] + " " + o.el).trim();
    es = cap(es.replace(/^A Al /, "Al ")) + ".";
  } else {
    let obj = !o ? "" : o.persona ? o.a : art === "el" ? o.el : art === "0" ? o.es.replace(/ \(.*\)$/, "") : o.un;
    if (o && o.persona && i === 3) obj = obj.replace(/^a mi /, o.g === "f" ? "a nuestra " : "a nuestro ");
    if (o && o.persona && i === 4) obj = obj.replace(/^a mi /, o.g === "f" ? "a su " : "a su ");
    const vEs = sin(vk) === "знать" && !(o && o.persona) ? ["sé", "sabés", "sabe", "sabemos", "saben"][[0, 1, 2, 3, 4, 4][i]] : u5EsVerbo(v, i);
    es = cap(((sujEs ? sujEs + " " : "") + vEs + (obj ? " " + obj : "")).trim()) + ".";
    partes = { sujEs, vEs, obj };
  }
  const esperadas = [ru];
  if (!quien && (p === 0 || p === 1 || p === 4)) esperadas.push(cap(forma) + (o ? " " + o.acc : "") + ".");
  if (quien && /^Mi /.test(sujEs)) esperadas.push((sust[sin(quien)].g === "f" ? "Моя́ " : "Мой ") + sust[sin(quien)].nom + " " + forma + (o ? " " + o.acc : "") + ".");
  /* Español con «no» o «nunca» delante del verbo (para la negación) */
  const con = w => partes ? cap(((partes.sujEs ? partes.sujEs + " " : "") + w + " " + partes.vEs + (partes.obj ? " " + partes.obj : "")).trim()) + "." : null;
  return { ru, es, esperadas, v, o, i, p, forma, sujRu, quien, esNo: con("no"), esNunca: con("nunca") };
}

function ejerciciosUnidad5() {
  const { sin, verb, sust } = u5Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const sinP = t => t.replace(/[.,!?]/g, "");
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const PL = U5_PERS_LABEL;
  const plF = i => i === 0 ? "{я}" : PL[i];
  const pRu = i => ["Я", "Ты", "Он", "Мы", "Вы", "Они́"][i];
  const V = k => verb[sin(k)];

  /* ── Conjugación de cada verbo: en su módulo (1.ª en el 3, 2.ª en el 4, especiales en el 9; ampliación en el 5) ── */
  Object.values(verb).forEach((v, vi) => {
    const m = v.amp ? 5 : v.grupo === 1 ? 3 : v.grupo === 2 ? 4 : 9;
    const base = { grupo: v.id, items: ["lex:" + v.id], ampliacion: v.amp || undefined };
    v.f.forEach((f, i) => {
      base.grupo = v.id + "-" + i;   /* cada persona, su grupo: más variedad en una sesión */
      out.push(Object.assign({ id: "U5-conj-" + v.id + "-" + i, tipo: "conjugar", forma: "elegir", dificultad: 1, modulo: m, pide: "Elegí la forma de «" + v.ac + "» (" + v.es + ").",
        grande: pRu(i) + " _____", opciones: baraja([f].concat(baraja(uniq(v.f).filter(x => x !== f), vi + i).slice(0, 3)), vi * 3 + i),
        correcta: f, oir: pRu(i) + " " + f, explicacion: u5Cambio(v, i) + " (" + u5EsVerbo(v, i) + ")." }, base));
      out.push(Object.assign({ id: "U5-conjw-" + v.id + "-" + i, tipo: "conjugar-escribir", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribí la forma del verbo.",
        grande: PL[i] + " + " + v.ac, audio: pRu(i) + " " + f, audioManual: true, esperadas: [f, pRu(i) + " " + f], idioma: "ru", explicacion: u5Cambio(v, i) + " (" + u5EsVerbo(v, i) + ")." }, base));
      out.push(Object.assign({ id: "U5-pers-" + v.id + "-" + i, tipo: "persona", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Quién lo hace?", grande: f, audio: f,
        opciones: PL.slice(), correcta: PL[i], explicacion: "**" + f + "** es la forma de " + plF(i) + " (" + u5EsVerbo(v, i) + ")." }, base));
    });
    base.grupo = v.id;
    out.push(Object.assign({ id: "U5-emp-" + v.id, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: m, pide: "Uní cada persona con su forma de «" + v.ac + "».",
      pares: [["я", v.f[0]], ["ты", v.f[1]], ["он / она́", v.f[2]], ["мы", v.f[3]], ["вы", v.f[4]], ["они́", v.f[5]]].filter((x, k) => k !== (vi % 6)).slice(0, 4),
      explicacion: v.ac + ": я " + v.f[0] + " · ты " + v.f[1] + " · он / она́ " + v.f[2] + " · мы " + v.f[3] + " · вы " + v.f[4] + " · они́ " + v.f[5] + "." }, base));
    /* Dictado corto: una persona por verbo */
    const i = (vi * 5 + 1) % 6, ru = pRu(i) + " " + v.f[i] + ".";
    out.push(Object.assign({ id: "U5-dicv-" + v.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: m, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru",
      explicacion: ru + " " + u5Cambio(v, i) + " (" + u5EsVerbo(v, i) + ")." }, base));
  });

  /* ── Módulo 1: ¿cuál va? con чита́ть, рабо́тать y говори́ть ── */
  ["чита́ть", "рабо́тать", "говори́ть"].forEach((vk, j) => {
    const v = V(vk);
    v.f.forEach((f, i) => {
      const obj = vk === "чита́ть" ? " кни́гу" : vk === "говори́ть" ? " по-ру́сски" : "";
      const otras = baraja(v.f.filter(x => x !== f), j * 7 + i).slice(0, 2);
      out.push({ id: "U5-cual-" + v.id + "-" + i, tipo: "conjugar", forma: "elegir", dificultad: 1, modulo: 1, grupo: "M1-" + v.id + "-" + i, items: ["lex:" + v.id],
        pide: "¿Cuál va?", grande: pRu(i) + " _____" + obj + ".", opciones: baraja([f].concat(otras), j + i), correcta: f, oir: pRu(i) + " " + f + obj + ".",
        explicacion: u5Cambio(v, i) + ": la terminación coincide con quién hace la acción (" + u5EsVerbo(v, i) + ")." });
      out.push({ id: "U5-quien1-" + v.id + "-" + i, tipo: "persona", forma: "elegir", dificultad: 1, modulo: 1, grupo: "M1q-" + v.id + "-" + i, items: ["lex:" + v.id],
        pide: "Escuchá: ¿quién lo hace?", audio: v.f[i], opciones: PL.slice(), correcta: PL[i], explicacion: "Sonó **" + v.f[i] + "**: la forma de " + plF(i) + "." });
    });
  });

  /* ── Módulo 2: pronombres ── */
  const pronEs = [["я", "yo"], ["ты", "vos"], ["он", "él"], ["она́", "ella"], ["мы", "nosotros"], ["вы", "ustedes / usted"], ["они́", "ellos / ellas"]];
  [[0, 1, 2, 3], [3, 4, 5, 6], [0, 2, 4, 6], [1, 3, 5, 0]].forEach((g, j) => out.push({ id: "U5-pempar-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 2, grupo: "P2-" + j, items: [],
    pide: "Uní cada pronombre con su significado.", pares: g.map(k => pronEs[k]), explicacion: g.map(k => (pronEs[k][0] === "я" ? "{я}" : pronEs[k][0]) + " = " + pronEs[k][1]).join(" · ") }));
  pronEs.forEach(([ru, es], j) => {
    out.push({ id: "U5-paud-" + j, tipo: "pronombre", forma: "elegir", dificultad: 1, modulo: 2, grupo: "P2a-" + j, items: [], pide: "Escuchá: ¿qué pronombre es?", audio: ru,
      opciones: baraja([es].concat(baraja(pronEs.map(x => x[1]).filter(x => x !== es), j).slice(0, 2)), j + 1), correcta: es, explicacion: (ru === "я" ? "{я}" : ru) + " = " + es + "." });
    out.push({ id: "U5-pesc-" + j, tipo: "pronombre", forma: "escribir", dificultad: 2, modulo: 2, grupo: "P2e-" + j, items: [], pide: "Escribí el pronombre en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: "«" + es + "» = " + (ru === "я" ? "{я}" : ru) + "." });
  });
  U5_TYVY.forEach(([sit, ok], j) => out.push({ id: "U5-tyvy-" + j, tipo: "ty-vy", forma: "elegir", dificultad: 1, modulo: 2, grupo: "TV-" + j, items: [], pide: sit + " ¿Ты o вы?",
    opciones: ["ты", "вы"], correcta: ok, explicacion: ok === "ты" ? "**ты**: es alguien de confianza." : sit.indexOf("dos") >= 0 ? "**вы**: le hablás a más de una persona («ustedes»)." : "**вы**: trato de respeto («usted»)." }));
  /* El pronombre que falta, según la terminación */
  ["чита́ть", "рабо́тать", "говори́ть"].forEach((vk, j) => {
    const v = V(vk);
    v.f.forEach((f, i) => {
      const esp = i === 2 ? ["он", "она́"] : [["я"], ["ты"], null, ["мы"], ["вы"], ["они́"]][i];
      out.push({ id: "U5-cpron-" + v.id + "-" + i, tipo: "completar-pron", forma: "escribir", dificultad: 2, modulo: 2, grupo: "CP-" + v.id + "-" + i, items: ["lex:" + v.id],
        pide: "Escribí el pronombre que va.", grande: "_____ " + f + ".", audio: (esp[0] === "я" ? "Я" : cap(esp[0])) + " " + f + ".", audioManual: true, esperadas: esp, idioma: "ru",
        explicacion: "**" + f + "** termina como la forma de " + plF(i) + ": " + (esp.map(x => x === "я" ? "{я}" : x).join(" u ")) + "." });
    });
  });

  /* ── Módulo 5: vocabulario de las palabras nuevas, frecuencia y ampliación ── */
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(5) >= 0);
  const ampSet = new Set(U5_AMPLIACION_RU.split(" ").map(sin));
  nuevas.forEach((e, i) => {
    const k = sin(e.acento || e.ru);
    if (U5_DIA[e.acento]) return;                       /* las del día, en el módulo 10 */
    const es = (V(e.acento) || {}).es || (sust[k] || {}).es || U5_FREC[e.acento] || (e.acento === "никогда́" ? "nunca" : e.acento === "до́ма" ? "en casa" : e.senses[0].es);
    const mod = e.acento === "никогда́" ? 7 : e.acento === "до́ма" || (V(e.acento) || {}).grupo === "e" ? 9 : 5;
    const amp = ampSet.has(k);
    const misma = nuevas.filter(x => x.id !== e.id && ampSet.has(sin(x.acento)) === amp && x.posNormalized === e.posNormalized).map(x => (V(x.acento) || {}).es || (sust[sin(x.acento)] || {}).es || U5_FREC[x.acento] || x.senses[0].es);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru, ampliacion: amp || undefined };
    const dis = baraja(uniq(misma.filter(x => x !== es)), i + 3).slice(0, 3);
    if (dis.length >= 2) out.push(Object.assign({ id: "U5-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: mod, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i + 5), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U5-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: mod, pide: "Escribí en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });
  /* Frecuencia: Я всегда́ за́втракаю. */
  const solos = U5_SOLOS.split(" ");
  /* Con frecuencia y con никогда́, solo lo que tiene sentido («nunca pienso» o «seguido me levanto», no) */
  const habitos = "рабо́тать гуля́ть отдыха́ть за́втракать обе́дать у́жинать".split(" ");
  Object.keys(U5_FREC).forEach((adv, a) => habitos.forEach((vk, j) => {
    if ((a + j) % 2) return;
    const p = [0, 1, 2, 3, 4, 5, 6][(a * 3 + j) % 7];
    const f = u5Frase(vk, null, p); if (!f) return;
    const P = U5_PERS[p];
    const ru = cap(P.ru) + " " + adv + " " + f.forma + ".";
    const sujEs = { 0: "", 1: "Vos", 2: "Él", 3: "Ella", 4: "", 5: "Ustedes", 6: "Ellos" }[p];
    const es = cap(((sujEs ? sujEs + " " : "") + U5_FREC[adv] + " " + u5EsVerbo(f.v, f.i)).trim()) + ".";
    const base = { grupo: "FR-" + adv + "-" + j, items: ["lex:" + f.v.id], oir: ru };
    out.push(Object.assign({ id: "U5-frdic-" + a + "-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
    out.push(Object.assign({ id: "U5-fresru-" + a + "-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(p === 0 || p === 1 || p === 4 ? [cap(adv) + " " + f.forma + "."] : []), idioma: "ru", explicacion: ru + " " + u5Cambio(f.v, f.i) + "." }, base));
  }));
  /* Ampliación: frases simples */
  U5_AMPLIACION_RU.split(" ").forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    const p = j % 7, i = U5_PERS[p].i, ru = cap(U5_PERS[p].ru) + " " + v.f[i] + ".";
    out.push({ id: "U5-adic-" + v.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, ampliacion: true, grupo: "A-" + v.id, items: ["lex:" + v.id], oir: ru, pide: "Escuchá y escribí.", audio: ru,
      esperadas: [ru], idioma: "ru", explicacion: ru + " " + u5Cambio(v, i) + " (" + u5EsVerbo(v, i) + ")." });
  });

  /* ── Módulo 6: frases con objeto ── */
  const frases = [];
  Object.keys(U5_COMBOS).forEach((vk, vi) => {
    if (vk === "хоте́ть" || vk === "есть") return;          /* módulo 9 */
    U5_COMBOS[vk][1].split(" ").forEach((ok, oi) => {
      const k = vi * 5 + oi * 3;
      const quien = k % 4 === 3 ? "А́нна Ива́н Ма́ша Ди́ма ма́ма па́па брат сестра́".split(" ")[k % 8] : null;
      const f = u5Frase(vk, ok, k % 7, quien && sin(quien) !== sin(ok) ? quien : null);
      if (f) frases.push(f);
    });
  });
  frases.forEach((f, n) => {
    const o = f.o, v = f.v;
    const base = { grupo: "F5-" + n, items: ["lex:" + v.id, "lex:" + o.id], oir: f.ru };
    const exp = u5Cambio(v, f.i) + ". " + (o.nom !== o.acc ? u5Acc(o) + ". " : "") + f.ru + " — " + f.es;
    const sujL = f.quien ? f.sujRu : f.sujRu.toLowerCase().replace(/^я$/, "я");
    /* Completar el verbo */
    out.push(Object.assign({ id: "U5-cverb-" + n, tipo: "completar-verbo", forma: "escribir", dificultad: 2, modulo: 6, pide: "Completá con «" + v.ac + "».", grande: f.sujRu + " _____ " + o.acc + ".",
      pista: f.es, audio: f.ru, audioManual: true, esperadas: [f.forma], idioma: "ru", explicacion: exp }, base));
    /* Construir */
    out.push(Object.assign({ id: "U5-cons-" + n, tipo: "construir", forma: "escribir", dificultad: 3, modulo: 6, pide: "Armá la frase con estas palabras.",
      grande: sujL + " · " + v.ac + " · " + o.nom, pista: f.es, audio: f.ru, audioManual: true, esperadas: f.esperadas, idioma: "ru", explicacion: exp.replace(/^\*\*/, "**") }, base));
    /* Cambiá la persona */
    if (!f.quien) {
      const p2 = (f.p + 3) % 7, f2 = u5Frase(Object.keys(U5_VERBOS).find(x => sin(x) === sin(v.ac)), o.ac, p2);
      if (f2 && f2.forma !== f.forma) out.push(Object.assign({ id: "U5-camb-" + n, tipo: "cambiar-persona", forma: "escribir", dificultad: 3, modulo: 6, pide: "Cambiá la persona: " + (U5_PERS[p2].ru === "я" ? "{я}" : U5_PERS[p2].ru) + ".",
        grande: f.ru, audio: f2.ru, audioManual: true, esperadas: f2.esperadas, idioma: "ru",
        explicacion: "Cambia solo el verbo: " + u5Cambio(v, f2.i) + ". " + f2.ru + " — " + f2.es }, base));
    }
    /* Detectá el error: el verbo (persona equivocada) o el objeto (nominativo) */
    const pals = sinP(f.ru).split(" ");
    if (n % 2 === 0) {
      const mal = v.f[(f.i + 2) % 6];
      if (mal !== f.forma) { const p2 = pals.slice(); p2[1] = mal;
        out.push(Object.assign({ id: "U5-det-v-" + n, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 6, pide: "Tocá la palabra que está mal.", palabras: p2, correcta: 1,
          explicacion: "**" + mal + "** no va con " + (f.quien ? f.sujRu : f.sujRu.toLowerCase() === "я" ? "{я}" : f.sujRu.toLowerCase()) + ": va **" + f.forma + "**. " + f.ru + " — " + f.es }, base)); }
    } else if (o.nom !== o.acc) {
      const p2 = pals.slice(); p2[p2.length - 1] = o.nom;
      out.push(Object.assign({ id: "U5-det-o-" + n, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 6, pide: "Tocá la palabra que está mal.", palabras: p2, correcta: p2.length - 1,
        explicacion: "**" + o.nom + "** está en nominativo; lo que recibe la acción va en acusativo: " + u5Acc(o) + ". " + f.ru }, base));
    }
    /* Ordenar, dictado y traducción */
    if (n % 3 === 0) { let fi = baraja(pals, n + 7); if (fi.join(" ") === pals.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U5-ord-" + n, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: 6, pide: "Ordená: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: pals.join(" "), explicacion: exp }, base)); }
    out.push(Object.assign({ id: "U5-dic-" + n, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 6, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: exp }, base));
    if (n % 2) out.push(Object.assign({ id: "U5-esru-" + n, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 6, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: exp }, base));
  });

  /* ── Módulo 7: negación (sin objetos que cambien: ver la cabecera) ── */
  const negables = solos.filter(vk => vk !== "ду́мать").map(vk => [vk, null]).concat([["смотре́ть", "телеви́зор"], ["смотре́ть", "футбо́л"], ["пить", "ко́фе"], ["пить", "чай"], ["понима́ть", "ру́сский"], ["изуча́ть", "ру́сский"], ["знать", null], ["понима́ть", null], ["чита́ть", null], ["говори́ть", null]]);
  negables.forEach(([vk, ok], j) => {
    const p = (j * 3) % 7, f = u5Frase(vk, ok, p); if (!f) return;
    const neg = f.ru.replace(" " + f.forma, " не " + f.forma);
    const negEsOk = f.esNo;
    const base = { grupo: "N-" + j, items: ["lex:" + f.v.id], oir: neg };
    const exp = "**не** va justo antes del verbo. " + neg + " — " + negEsOk;
    out.push(Object.assign({ id: "U5-neg-" + j, tipo: "negar", forma: "escribir", dificultad: 2, modulo: 7, pide: "Negá la frase.", grande: f.ru, audio: neg, audioManual: true,
      esperadas: [neg], idioma: "ru", explicacion: exp }, base));
    out.push(Object.assign({ id: "U5-negesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 7, pide: "Escribí en ruso: «" + negEsOk + "»", audio: neg, audioManual: true,
      esperadas: [neg].concat(f.esperadas.slice(1).map(x => x.replace(" " + f.forma, " не " + f.forma).replace(new RegExp("^" + cap(f.forma)), "Не " + f.forma))), idioma: "ru", explicacion: exp }, base));
    if (j % 2 === 0) out.push(Object.assign({ id: "U5-negdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 7, pide: "Escuchá y escribí.", audio: neg, esperadas: [neg], idioma: "ru", explicacion: exp }, base));
  });
  /* Никогда́ + не */
  habitos.concat(["смотре́ть"]).forEach((vk, j) => {
    const p = (j * 2) % 7, ok = vk === "смотре́ть" ? "телеви́зор" : null, f = u5Frase(vk, ok, p); if (!f) return;
    const P = U5_PERS[p], resto = f.forma + (f.o ? " " + f.o.acc : "");
    const bien = cap(P.ru) + " никогда́ не " + resto + ".", mal = cap(P.ru) + " никогда́ " + resto + ".";
    out.push({ id: "U5-nunca-" + j, tipo: "nunca", forma: "elegir", dificultad: 2, modulo: 7, grupo: "NU-" + j, items: ["lex:" + f.v.id], oir: bien, pide: "¿Cuál está bien?",
      opciones: baraja([bien, mal], j), correcta: bien, explicacion: "Con никогда́ también va **не**: " + bien + " — " + f.esNunca });
  });

  /* ── Módulo 8: preguntas ── */
  const qs = [["Что ты де́лаешь?", "¿Qué hacés?", "что"], ["Где ты живёшь?", "¿Dónde vivís?", "где"], ["Как ты?", "¿Cómo estás?", "как"], ["Почему́ ты не рабо́таешь?", "¿Por qué no trabajás?", "почему́"],
    ["Когда́ ты за́втракаешь?", "¿Cuándo desayunás?", "когда́"], ["Кто чита́ет кни́гу?", "¿Quién lee el libro?", "кто"], ["Что вы чита́ете?", "¿Qué leen ustedes?", "что"], ["Где вы рабо́таете?", "¿Dónde trabajan ustedes?", "где"],
    ["Когда́ они́ у́жинают?", "¿Cuándo cenan ellos?", "когда́"], ["Что он гото́вит?", "¿Qué cocina él?", "что"], ["Кто говори́т по-ру́сски?", "¿Quién habla ruso?", "кто"], ["Почему́ вы не спи́те?", "¿Por qué no duermen ustedes?", "почему́"]];
  const palQ = ["что", "кто", "где", "как", "почему́", "когда́"];
  qs.forEach(([ru, es, w], j) => {
    const base = { grupo: "Q-" + j, items: [], oir: ru };
    out.push(Object.assign({ id: "U5-qpal-" + j, tipo: "pregunta-palabra", forma: "elegir", dificultad: 1, modulo: 8, pide: "Completá: «" + es + "»", grande: ru.replace(new RegExp("^" + cap(w)), "_____"),
      opciones: baraja([w].concat(baraja(palQ.filter(x => x !== w), j).slice(0, 2)), j + 2), correcta: w, explicacion: "**" + w + "** = " + { "что": "qué", "кто": "quién", "где": "dónde", "как": "cómo", "почему́": "por qué", "когда́": "cuándo" }[w] + ". " + ru + " — " + es }, base));
    out.push(Object.assign({ id: "U5-qesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
    out.push(Object.assign({ id: "U5-qdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, pide: "Escuchá y escribí la pregunta.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });
  out.push({ id: "U5-qemp", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 8, grupo: "QE", items: [], pide: "Uní cada palabra con su significado.",
    pares: [["что", "qué"], ["где", "dónde"], ["когда́", "cuándo"], ["почему́", "por qué"]], explicacion: "что = qué · где = dónde · когда́ = cuándo · почему́ = por qué" });
  out.push({ id: "U5-qemp2", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 8, grupo: "QE2", items: [], pide: "Uní cada palabra con su significado.",
    pares: [["кто", "quién"], ["как", "cómo"], ["что", "qué"], ["где", "dónde"]], explicacion: "кто = quién · как = cómo · что = qué · где = dónde" });
  /* Respuestas cortas: — Ты рабо́таешь? — Да, рабо́таю. / Нет, не рабо́таю. */
  solos.concat(["чита́ть", "говори́ть", "понима́ть", "знать"]).forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    const q = "Ты " + v.f[1] + "?", si = j % 2 === 0;   /* solo con ты: con вы, la respuesta podría ser «мы» */
    const r = (si ? "Да, " : "Нет, не ") + v.f[0] + ".";
    out.push({ id: "U5-resp-" + j, tipo: "respuesta-corta", forma: "escribir", dificultad: 2, modulo: 8, grupo: "R-" + v.id, items: ["lex:" + v.id], oir: r,
      contexto: [{ p: "—", ru: q }], pide: (si ? "Contestá que sí" : "Contestá que no") + ", con una respuesta corta.", audio: q, audioManual: true, esperadas: [r, r.replace(/^Да, /, "Да, я ").replace(/^Нет, не /, "Нет, я не ")], idioma: "ru",
      explicacion: "— " + q + " — " + r + " La respuesta corta repite el verbo en la forma de {я}: " + u5Cambio(v, 0) + "." });
  });

  /* ── Módulo 9: verbos especiales ── */
  [["Я до́ма.", "Я есть до́ма.", "Estoy en casa."], ["Она́ до́ма.", "Она́ есть до́ма.", "Ella está en casa."], ["Мы до́ма.", "Мы есть до́ма.", "Estamos en casa."], ["Он ру́сский.", "Он есть ру́сский.", "Él es ruso."]]
    .forEach(([bien, mal, es], j) => out.push({ id: "U5-cop-" + j, tipo: "copula", forma: "elegir", dificultad: 1, modulo: 9, grupo: "CO-" + j, items: [], oir: bien, pide: "«" + es + "» ¿Cuál está bien?",
      opciones: baraja([bien, mal], j), correcta: bien, explicacion: "En presente, быть no se dice: " + bien }));
  const quiero = [["хоте́ть", "чита́ть", 0, "Quiero leer."], ["хоте́ть", "спать", 1, "Vos querés dormir."], ["хоте́ть", "гуля́ть", 4, "Queremos pasear."], ["хоте́ть", "рабо́тать", 2, "Él quiere trabajar."],
    ["мочь", "говори́ть", 0, "Puedo hablar."], ["мочь", "чита́ть", 1, "Vos podés leer."], ["мочь", "гото́вить", 3, "Ella puede cocinar."], ["мочь", "отдыха́ть", 6, "Ellos pueden descansar."]];
  quiero.forEach(([vk, inf, p, es], j) => {
    const v = V(vk), w = V(inf), P = U5_PERS[p], ru = cap(P.ru) + " " + v.f[P.i] + " " + w.ac + ".";
    const base = { grupo: "QI-" + j, items: ["lex:" + v.id, "lex:" + w.id], oir: ru };
    out.push(Object.assign({ id: "U5-inf-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(p === 0 || p === 1 || p === 4 ? [cap(v.f[P.i]) + " " + w.ac + "."] : []), idioma: "ru", explicacion: u5Cambio(v, P.i) + " + infinitivo (" + w.ac + "). " + ru }, base));
    out.push(Object.assign({ id: "U5-infd-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 9, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });
  ["хоте́ть", "есть"].forEach((vk, vj) => U5_COMBOS[vk][1].split(" ").forEach((ok, j) => {
    const f = u5Frase(vk, ok, (j * 3 + vj) % 7); if (!f) return;
    const base = { grupo: "SP-" + vk + j, items: ["lex:" + f.v.id, "lex:" + f.o.id], oir: f.ru };
    out.push(Object.assign({ id: "U5-spesru-" + vj + "-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: u5Cambio(f.v, f.i) + ". " + (f.o.nom !== f.o.acc ? u5Acc(f.o) + ". " : "") + f.ru }, base));
    out.push(Object.assign({ id: "U5-spcv-" + vj + "-" + j, tipo: "completar-verbo", forma: "escribir", dificultad: 2, modulo: 9, pide: "Completá con «" + f.v.ac + "».", grande: f.sujRu + " _____ " + f.o.acc + ".",
      pista: f.es, audio: f.ru, audioManual: true, esperadas: [f.forma], idioma: "ru", explicacion: u5Cambio(f.v, f.i) + ". " + f.ru }, base));
  }));

  /* ── Módulo 10: Mi día ── */
  U5_RUTINA.forEach(([adv, vk, ok], j) => {
    const p = [0, 0, 2, 3, 0, 1, 6][j % 7], f = u5Frase(vk, ok, p); if (!f) return;
    const P = U5_PERS[p];
    const ru = cap(adv) + " " + P.ru + " " + f.forma + (f.o ? " " + f.o.acc : "") + ".";
    const es = cap(U5_DIA[adv]) + " " + f.es.charAt(0).toLowerCase() + f.es.slice(1);
    const base = { grupo: "D-" + j, items: ["lex:" + f.v.id], oir: ru };
    const alt = [ru, cap(P.ru) + " " + adv + " " + f.forma + (f.o ? " " + f.o.acc : "") + "."];
    if (p === 0 || p === 1) alt.push(cap(adv) + " " + f.forma + (f.o ? " " + f.o.acc : "") + ".");
    out.push(Object.assign({ id: "U5-dia-esru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: alt, idioma: "ru",
      explicacion: ru + " " + u5Cambio(f.v, f.i) + "." }, base));
    out.push(Object.assign({ id: "U5-dia-dic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 10, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });
  Object.keys(U5_DIA).forEach((adv, j) => {
    const e = LEXICON_COMER.find(x => x.acento === adv); if (!e) return;
    out.push({ id: "U5-diasig-" + j, tipo: "significado", forma: "elegir", dificultad: 1, modulo: 10, grupo: "DS-" + j, items: ["lex:" + e.id], oir: adv, pide: "¿Qué significa?", grande: adv, audio: adv,
      opciones: baraja(Object.values(U5_DIA), j), correcta: U5_DIA[adv], explicacion: adv + " — " + U5_DIA[adv] });
    out.push({ id: "U5-diapal-" + j, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: 10, grupo: "DP-" + j, items: ["lex:" + e.id], oir: adv, pide: "Escribí en ruso: «" + U5_DIA[adv] + "»", audio: adv, audioManual: true,
      esperadas: [adv], idioma: "ru", explicacion: adv + " — " + U5_DIA[adv] });
  });
  /* Comprensión */
  U5_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U5-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 10, grupo: "L5-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase().replace(/^(нет, |да, )/, "").replace(/\.$/, "")) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U5-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 10, grupo: "L5v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });
  /* ── Tipos nuevos (07/10/2026): entender la regla, ~20 % de la sesión ──
     porque · natural · oido · cadena · diagnostico · descubrir · par.
     Todos llevan «regla» (el id de la sección de teoría que practican). */
  const sinAc = t => t.replace(/́/g, "");
  const modelo = v => /ишь(ся)?$/.test(sinAc(v.f[1])) ? 2 : 1;
  const verbosBase = Object.values(verb).filter(v => !v.amp && (v.grupo === 1 || v.grupo === 2));
  const RAIZ = /^(жить|пить|писать|искать|использовать|вставать|ждать|спать)$/;
  const fin = f => (sinAc(f).match(/(ешь|ёшь|ишь|ет|ёт|ит|ете|ёте|ите|ем|ём|им|ют|ут|ят|ат|ю|у)$/) || [""])[0];
  const MODELO = ["", "del primer modelo", "del segundo modelo"];
  const PERS_TXT = ["{я}", "ты", "он / она́", "мы", "вы", "они́"];

  /* ¿Por qué? La terminación: persona y modelo */
  verbosBase.forEach((v, vi) => {
    const g = modelo(v);
    [1, 2, 4].forEach((i, k) => {
      if ((vi + k) % 3 === 2) return;
      const f = v.f[i], ok = "Es la forma de " + PERS_TXT[i] + " y el verbo es " + MODELO[g];
      const otras = ["Es la forma de " + PERS_TXT[i] + " y el verbo es " + MODELO[3 - g], "Es la forma de " + PERS_TXT[[2, 4, 1][k]] + " y el verbo es " + MODELO[g]];
      out.push({ id: "U5-porq-" + v.id + "-" + i, tipo: "porque", forma: "elegir", dificultad: 2, modulo: Math.max(4, v.desde), regla: g === 2 ? "u5-segunda" : "u5-primera",
        grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: pRu(i) + " " + f,
        pide: "¿Por qué termina en -" + fin(f) + "?", grande: pRu(i) + " " + f, audio: pRu(i) + " " + f, audioManual: true,
        opciones: baraja([ok].concat(otras), vi + k), correcta: ok,
        explicacion: u5Cambio(v, i) + ": " + (g === 2 ? "segundo modelo, terminaciones con **и**" : "primer modelo, terminaciones con **е**") + "." });
    });
  });
  /* ¿Por qué cambia la consonante en la forma de я? */
  verbosBase.filter(v => modelo(v) === 2 && sinAc(v.f[0]).slice(0, -1) !== sinAc(v.f[1]).slice(0, -3)).forEach((v, j) => {
    const ok = "Solo la forma de {я} cambia la consonante";
    out.push({ id: "U5-porqc-" + v.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u5-consonante-ya", grupo: v.id + "-0", items: ["lex:" + v.id], oir: "Я " + v.f[0],
      pide: "¿Por qué " + v.f[0] + " no se parece a " + v.f[1] + "?", grande: "Я " + v.f[0] + " · ты " + v.f[1], audio: "Я " + v.f[0] + ". Ты " + v.f[1] + ".", audioManual: true,
      opciones: baraja([ok, "Es del primer modelo", "Cambia en todas las personas"], j), correcta: ok,
      explicacion: "**" + v.ac + "**: en la forma de {я} la consonante cambia (" + v.f[0] + "); las otras cinco siguen el modelo (" + v.f[1] + ", " + v.f[2] + "…)." });
  });
  /* ¿Por qué -сь o -ся? */
  Object.values(verb).filter(v => /ся$/.test(sinAc(v.ac))).forEach((v, vi) => v.f.forEach((f, i) => {
    const sj = /сь$/.test(f), ok = sj ? "Antes de la partícula hay una vocal: -сь" : "Antes de la partícula hay una consonante: -ся";
    out.push({ id: "U5-porqs-" + v.id + "-" + i, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 9, regla: "u5-sya", grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: pRu(i) + " " + f,
      pide: "¿Por qué " + f + " termina en " + (sj ? "-сь" : "-ся") + "?", grande: pRu(i) + " " + f, audio: pRu(i) + " " + f, audioManual: true,
      opciones: baraja(["Antes de la partícula hay una vocal: -сь", "Antes de la partícula hay una consonante: -ся", "Es plural"], vi + i), correcta: ok,
      explicacion: "**" + f + "**: " + (sj ? "sin la partícula, la forma termina en vocal; por eso **-сь**." : "sin la partícula, la forma termina en consonante (o en **ь**); por eso **-ся**.") });
  }));

  /* ¿Suena natural? Errores típicos, siempre en ruso */
  /* a) Хоте́ть / мочь + verbo conjugado */
  ["хоте́ть", "мочь"].forEach((mk, a) => ["чита́ть", "спать", "гуля́ть", "рабо́тать", "говори́ть", "гото́вить", "отдыха́ть", "смотре́ть"].forEach((ik, j) => {
    const m = V(mk), w = V(ik); if (!m || !w) return;
    const p = (a * 3 + j) % 7, P = U5_PERS[p];
    const bien = cap(P.ru) + " " + m.f[P.i] + " " + w.ac + ".", mal = cap(P.ru) + " " + m.f[P.i] + " " + w.f[P.i] + ".";
    out.push({ id: "U5-nat-inf-" + a + "-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u5-despues-hotet", grupo: "NI-" + a + "-" + j, items: ["lex:" + m.id, "lex:" + w.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], a + j), correcta: bien, explicacion: bien + " Después de " + m.ac + ", el segundo verbo va en infinitivo: " + w.ac + "." });
  }));
  /* b) по-ру́сски, no ру́сский, con говори́ть */
  U5_PERS.forEach((P, p) => {
    const v = V("говори́ть"), bien = cap(P.ru) + " " + v.f[P.i] + " по-ру́сски.", mal = cap(P.ru) + " " + v.f[P.i] + " ру́сский.";
    out.push({ id: "U5-nat-po-" + p, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u5-segunda", grupo: "NP-" + p, items: ["lex:" + v.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], p), correcta: bien, explicacion: bien + " Con говори́ть va по-ру́сски: «en ruso»." });
  });
  /* c) -сь / -ся cambiados */
  Object.values(verb).filter(v => /ся$/.test(sinAc(v.ac))).forEach((v, vi) => v.f.forEach((f, i) => {
    const mal = /сь$/.test(f) ? f.replace(/сь$/, "ся") : f.replace(/ся$/, "сь");
    const bien = pRu(i) + " " + f + ".";
    out.push({ id: "U5-nat-sya-" + v.id + "-" + i, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u5-sya", grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, pRu(i) + " " + mal + "."], vi + i), correcta: bien,
      explicacion: bien + " " + (/сь$/.test(f) ? "Después de vocal, **-сь**." : "Después de consonante, **-ся**.") });
  }));
  /* d) вы con una sola persona: igual el verbo en plural */
  solos.concat(["чита́ть", "говори́ть", "понима́ть"]).forEach((vk, j) => {
    const v = V(vk); if (!v || v.desde > 4) return;
    const bien = "О́льга, вы " + v.f[4] + "?", mal = "О́льга, вы " + v.f[2] + "?";
    out.push({ id: "U5-nat-vy-" + v.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: Math.max(2, v.desde), regla: "u5-ty-vy", grupo: "NV-" + v.id, items: ["lex:" + v.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " Con вы el verbo va siempre en plural, aunque sea una sola persona: " + v.f[4] + "." });
  });
  /* e) La consonante de la forma de я, llevada a las otras personas */
  const CONS = [["д", "ж"], ["б", "бл"], ["в", "вл"], ["п", "пл"]];
  verbosBase.filter(v => modelo(v) === 2).forEach((v, vi) => {
    const r1 = sinAc(v.f[1]).slice(0, -3), r0 = sinAc(v.f[0]).slice(0, -1);
    const c = CONS.find(([a, b]) => r1.endsWith(a) && r0.endsWith(b)); if (!c) return;
    [1, 2, 3, 5].forEach((i, k) => {
      const f = v.f[i], plano = sinAc(f), e = fin(f), raiz = f.slice(0, f.length - e.length);
      const ult = raiz.lastIndexOf(c[0]); if (ult < 0) return;
      const mal = raiz.slice(0, ult) + c[1] + raiz.slice(ult + 1) + e;
      if (sinAc(mal) === plano) return;
      const bien = pRu(i) + " " + f + ".";
      out.push({ id: "U5-nat-cons-" + v.id + "-" + i, tipo: "natural", forma: "elegir", dificultad: 2, modulo: Math.max(4, v.desde), regla: "u5-consonante-ya", grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: bien,
        pide: "¿Cuál suena natural?", opciones: baraja([bien, pRu(i) + " " + mal + "."], vi + k), correcta: bien,
        explicacion: bien + " El cambio de consonante es solo para {я} (" + v.f[0] + "); las demás personas vuelven a la raíz." });
    });
  });
  /* f) Быть no se dice en presente */
  [["Он врач.", "Он есть врач."], ["Ты до́ма?", "Ты есть до́ма?"], ["Они́ до́ма.", "Они́ есть до́ма."], ["Я Ма́ша.", "Я есть Ма́ша."], ["Вы до́ма?", "Вы есть до́ма?"], ["Она́ врач.", "Она́ есть врач."]]
    .forEach(([bien, mal], j) => out.push({ id: "U5-nat-byt-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u5-byt", grupo: "NB-" + j, items: [], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j + 3), correcta: bien, explicacion: bien + " En presente, быть no se dice." }));

  /* Oído: ¿qué forma sonó? Las terminaciones sin acento casi no se oyen */
  const TRIOS = [[1, 2, 4], [2, 4, 1], [3, 5, 2], [4, 1, 3], [5, 3, 0]];
  verbosBase.forEach((v, vi) => [0, 1, 2].forEach(k => {
    if ((vi + k) % 4 === 3) return;
    const t = TRIOS[(vi + k * 2) % 5], i = t[0], ops = uniq(t.map(x => sinAc(v.f[x])));
    if (ops.length < 3) return;
    out.push({ id: "U5-oido-" + v.id + "-" + k, tipo: "oido", forma: "elegir", dificultad: 2, modulo: Math.max(3, v.desde), regla: modelo(v) === 2 ? "u5-segunda" : "u5-primera",
      grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: v.f[i], pide: "Escuchá: ¿qué forma sonó?", audio: v.f[i], opciones: baraja(ops, vi + k), correcta: sinAc(v.f[i]),
      explicacion: "Sonó **" + v.f[i] + "**, la forma de " + PERS_TXT[i] + ". Las otras: " + t.slice(1).map(x => v.f[x] + " (" + PERS_TXT[x] + ")").join(", ") + "." });
  }));

  /* Cadena: я → ты → negala → preguntale a la profesora (вы) */
  const cadBase = solos.map(vk => [vk, null]).concat(frases.filter(f => !f.quien && f.o && f.o.nom === f.o.acc && !f.o.persona).map(f => [f.v.ac, f.o.ac]));
  const vistosCad = new Set();
  cadBase.forEach(([vk, ok], j) => {
    const v = V(vk); if (!v || v.grupo === "e" || v.amp) return;
    const key = sin(vk) + (ok || ""); if (vistosCad.has(key) || vistosCad.size >= 60) return; vistosCad.add(key);
    const o = ok ? sust[sin(ok)] : null, obj = o ? " " + o.acc : "";
    const s0 = "Я " + v.f[0] + obj + ".", s1 = "Ты " + v.f[1] + obj + ".", s2 = "Ты не " + v.f[1] + obj + ".", s3 = "Вы не " + v.f[4] + obj + "?";
    out.push({ id: "U5-cad-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: Math.max(8, v.desde), regla: "u5-cambiar-persona", grupo: "C5-" + j, items: ["lex:" + v.id], oir: s3,
      pide: "Cambiá la frase paso a paso.", base: s0,
      pasos: [
        { pide: "Ahora lo hace ты.", esperadas: [s1, cap(v.f[1]) + obj + "."] },
        { pide: "Negala.", esperadas: [s2, "Не " + v.f[1] + obj + "."] },
        { pide: "Ahora preguntáselo a la profesora (вы).", esperadas: [s3, "Не " + v.f[4] + obj + "?"] }],
      explicacion: s0 + " → " + s1 + " → " + s2 + " → " + s3 + " Cambia solo el verbo; не va justo antes; con вы, " + v.f[4] + "." });
  });

  /* Diagnosticar: qué falla y escribirla bien */
  const FALLAS5 = ["La forma del verbo", "El caso de lo que recibe la acción", "Falta не"];
  frases.forEach((f, n) => {
    if (n % 3 !== 2) return;
    const o = f.o, v = f.v, k = Math.floor(n / 3) % 2;
    let mal, ok, regla;
    if (k === 0 || o.nom === o.acc) {
      const otra = v.f[(f.i + 3) % 6]; if (otra === f.forma) return;
      mal = f.sujRu + " " + otra + " " + o.acc + "."; ok = FALLAS5[0]; regla = "u5-donde-error";
    } else { mal = f.sujRu + " " + f.forma + " " + o.nom + "."; ok = FALLAS5[1]; regla = "u5-donde-error"; }
    out.push({ id: "U5-diag-" + n, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla, grupo: "F5-" + n, items: ["lex:" + v.id, "lex:" + o.id], oir: f.ru,
      pide: "Esta frase tiene un error. ¿Qué falla?", grande: mal, opciones: FALLAS5.slice(), correcta: ok, esperadas: f.esperadas,
      explicacion: f.ru + " — " + f.es + " " + (ok === FALLAS5[0] ? u5Cambio(v, f.i) + "." : u5Acc(o) + ".") });
  });
  habitos.forEach((vk, j) => [0, 1].forEach(r => {
    const p = (j * 2 + r * 3) % 7, f = u5Frase(vk, null, p); if (!f) return;
    const P = U5_PERS[p], bien = cap(P.ru) + " никогда́ не " + f.forma + ".", mal = cap(P.ru) + " никогда́ " + f.forma + ".";
    out.push({ id: "U5-diagn-" + j + "-" + r, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla: "u5-nikogda", grupo: "DN-" + j + "-" + r, items: ["lex:" + f.v.id], oir: bien,
      pide: "Esta frase tiene un error. ¿Qué falla?", grande: mal, opciones: FALLAS5.slice(), correcta: FALLAS5[2],
      esperadas: [bien].concat(p === 0 || p === 1 || p === 4 ? ["Никогда́ не " + f.forma + "."] : []), explicacion: bien + " — " + f.esNunca + " Con никогда́, el verbo lleva не." });
  }));

  /* Descubrir: dos verbos del mismo modelo y un tercero para completar */
  const regulares = verbosBase.filter(v => !RAIZ.test(sinAc(v.ac)));
  [1, 2].forEach(g => {
    const l = regulares.filter(v => modelo(v) === g);
    l.forEach((v, j) => [1, 3].forEach((i, r) => {
      const mod = g === 2 ? 4 : 3, ej = baraja(l.filter(x => x !== v && x.desde <= Math.max(mod, v.desde)), j * 3 + r + g).slice(0, 2);
      if (ej.length < 2) return;
      const f = sinAc(v.f[i]), mal = g === 1 ? f.replace(/е(шь|м)$/, "и$1") : f.replace(/и(шь|м)$/, "е$1");
      if (mal === f) return;
      out.push({ id: "U5-desc-" + v.id + "-" + i, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: Math.max(mod, v.desde), regla: g === 2 ? "u5-que-modelo" : "u5-primera",
        grupo: v.id + "-" + i, items: ["lex:" + v.id], oir: pRu(i) + " " + v.f[i],
        pide: ej.map(x => x.ac + " → " + PL[i] + " " + x.f[i]).join(" · ") + ". ¿Y " + v.ac + "?", opciones: baraja([f, mal], j + r), correcta: f,
        explicacion: v.ac + " → " + PL[i] + " " + v.f[i] + ": el mismo modelo que " + ej[0].ac + " (" + MODELO[g] + ")." });
    }));
  });

  /* Par: ¿ты o вы? La misma pregunta para una amiga, la profesora o dos amigos */
  const SIT = [["a tu amiga Ма́ша", "Ма́ша", 1, 2], ["a О́льга, tu profesora,", "О́льга", 4, 2], ["a dos amigos", "Ма́ша, Ди́ма", 4, 4]];
  verbosBase.concat(Object.values(verb).filter(v => /ся$/.test(sinAc(v.ac)))).forEach((v, j) => [0, 1].forEach(r => {
    const s = SIT[(j + r) % 3];
    const ty = s[1] + ", ты " + v.f[1] + "?", vy = s[1] + ", вы " + v.f[4] + "?", ok = s[2] === 1 ? ty : vy;
    const mod = Math.max(2, v.desde);
    out.push({ id: "U5-par-" + v.id + "-" + r, tipo: "par", forma: "elegir", dificultad: 2, modulo: mod, regla: "u5-ty-vy", grupo: "PV-" + v.id + "-" + r, items: ["lex:" + v.id], oir: ok,
      pide: "Le preguntás " + s[0] + " si " + v.esF[s[3]] + ". ¿Cuál decís?", opciones: baraja([s[1] + ", ты " + v.f[1] + "?", s[1] + ", вы " + v.f[4] + "?"], j + r), correcta: ok,
      explicacion: ok + " " + (s[2] === 1 ? "Una amiga: ты." : s[3] === 2 ? "La profesora: вы, por respeto, con el verbo en plural." : "Dos personas: вы, aunque sean amigos.") });
  }));

  /* Opciones de una palabra: si alguna no lleva la marca de acento (formas con ё o de una sílaba), todas sin marca, así la correcta no se delata (07/10/2026) */
  out.forEach(e => {
    if (!e.opciones || !e.opciones.every(o => !/\s/.test(o))) return;
    const marca = e.opciones.filter(o => /\u0301/.test(o)).length;
    if (marca && marca < e.opciones.length) { e.opciones = e.opciones.map(sinAc); e.correcta = sinAc(e.correcta); }
  });

  /* «regla» en los tipos viejos donde es directo */
  const reglaV = (v, i) => {
    const a = sinAc(v.ac);
    if (/ся$/.test(a)) return "u5-sya";
    if (a === "хотеть" || a === "мочь") return "u5-hotet-moch";
    if (a === "есть") return "u5-est";
    if (modelo(v) === 2) return i === 0 && sinAc(v.f[0]).slice(0, -1) !== sinAc(v.f[1]).slice(0, -3) ? "u5-consonante-ya" : "u5-segunda";
    if (/ё/.test(v.f.join(""))) return "u5-primera-yo";
    return RAIZ.test(a) ? "u5-primera-raiz" : "u5-primera";
  };
  const verbPorId = {}; Object.values(verb).forEach(v => { verbPorId[v.id] = v; });
  const R5 = [["U5-cual-", "u5-una-forma"], ["U5-quien1-", "u5-una-forma"], ["U5-cpron-", "u5-una-forma"], ["U5-pempar-", "u5-pronombres"], ["U5-paud-", "u5-pronombres"], ["U5-pesc-", "u5-pronombres"],
    ["U5-tyvy-", "u5-ty-vy"], ["U5-frdic-", "u5-frecuencia"], ["U5-fresru-", "u5-frecuencia"], ["U5-camb-", "u5-cambiar-persona"], ["U5-det-", "u5-donde-error"],
    ["U5-cverb-", "u5-tres-piezas"], ["U5-cons-", "u5-tres-piezas"], ["U5-ord-", "u5-tres-piezas"], ["U5-dic-", "u5-tres-piezas"], ["U5-esru-", "u5-tres-piezas"],
    ["U5-neg", "u5-ne"], ["U5-nunca-", "u5-nikogda"], ["U5-qpal-", "u5-palabras-pregunta"], ["U5-qesru-", "u5-palabras-pregunta"], ["U5-qdic-", "u5-palabras-pregunta"], ["U5-qemp", "u5-palabras-pregunta"],
    ["U5-resp-", "u5-respuestas-cortas"], ["U5-cop-", "u5-byt"], ["U5-inf", "u5-despues-hotet"]];
  out.forEach(e => {
    if (e.regla) return;
    const m = e.id.match(/^U5-(conj|conjw|pers|emp|dicv)-(CMR-\d+)(?:-(\d))?$/);
    if (m && verbPorId[m[2]] && !verbPorId[m[2]].amp) { e.regla = reglaV(verbPorId[m[2]], m[3] == null ? 1 : +m[3]); return; }
    if (/^U5-sp(esru|cv)-0-/.test(e.id)) { e.regla = "u5-hotet-moch"; return; }
    if (/^U5-sp(esru|cv)-1-/.test(e.id)) { e.regla = "u5-est"; return; }
    const r = R5.find(([p]) => e.id.indexOf(p) === 0); if (r) e.regla = r[1];
  });

  return out;
}

/* Requisitos y consejos del proyecto «Мой день» (contados con Verbos y Casos) */
(function () {
  const m = UNIDAD_5.modulos.find(x => x.id === "u5m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const info = w => { const r = azIndiceFormas().get(azFormaClave(w)); return r || []; };
  const esVerbo = w => { const r = info(w); return r.length > 0 && r.every(x => (lexComerById(x[0]) || {}).posNormalized === "verbo" && !/imper/i.test(x[2] || "")); };
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const verbos = t => new Set(pal(t).filter(esVerbo).map(w => info(w)[0][0])).size;
  const acusativos = t => {
    let n = 0;
    frases(t).forEach(f => { const w = pal(f); for (let i = 0; i + 1 < w.length; i++) if (esVerbo(w[i])) {
      if (info(w[i + 1]).some(x => { const cz = casosById(x[0]); return cz && (cz.tipo === "indeclinable" || (cz.sg && azFormaClave(cz.sg[3]) === azFormaClave(w[i + 1]))); })) { n++; break; } } });
    return n;
  };
  const negaciones = t => frases(t).filter(f => /(^|\s)не\s/i.test(f.replace(/\u0301/g, ""))).length;
  const preguntas = t => frases(t).filter(f => /\?$/.test(f) || /^(да|нет)[,.]/i.test(f)).length;
  m.requisitos = [
    { txt: "Entre 10 y 15 frases", fn: t => { const n = frases(t).length; return n >= 10 && n <= 15; } },
    { txt: "Al menos 8 verbos distintos", fn: t => verbos(t) >= 8 },
    { txt: "Al menos 5 cosas o personas en acusativo (después del verbo)", fn: t => acusativos(t) >= 5 },
    { txt: "Al menos 2 frases negativas (не)", fn: t => negaciones(t) >= 2 },
    { txt: "Al menos 3 preguntas o respuestas cortas (Да, … / Нет, …)", fn: t => preguntas(t) >= 3 }
  ];
  /* Consejos: pronombre + verbo que no coinciden, y nominativo después de un verbo */
  const PRON = { "я": 0, "ты": 1, "он": 2, "она": 2, "мы": 3, "вы": 4, "они": 5 };
  const LBL = ["я", "ты", "он / она́", "мы", "вы", "они́"];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f); for (let i = 0; i + 1 < w.length; i++) {
      const p = PRON[azFormaClave(w[i])];
      if (p != null) {
        const sig = w[i + 1] === "не" && w[i + 2] ? w[i + 2] : w[i + 1];
        info(sig).forEach(x => { const vb = verboById(x[0]); if (!vb || !vb.presente) return;
          const k = vb.presente.findIndex(fm => azFormaClave(fm) === azFormaClave(sig));
          if (k >= 0 && k !== p && !(p === 2 && k === 2)) out.push("Con " + LBL[p] + " va **" + vb.presente[p] + "**, no «" + sig + "».");
        });
      }
      if (esVerbo(w[i])) info(w[i + 1]).forEach(x => { const cz = casosById(x[0]); if (cz && cz.sg && azFormaClave(cz.sg[0]) === azFormaClave(w[i + 1]) && azFormaClave(cz.sg[3]) !== azFormaClave(w[i + 1]))
        out.push("Después de «" + w[i] + "», si " + cz.sg[0] + " es lo que recibe la acción, va en acusativo: **" + cz.sg[3] + "**."); });
    } });
    return [...new Set(out)];
  } }];
})();

window.UNIDAD_5 = UNIDAD_5;
window.unidad5Modulo = unidad5Modulo;
window.ejerciciosUnidad5 = ejerciciosUnidad5;
window.u5Datos = u5Datos;
window.U5_MEZCLA = U5_MEZCLA;
