/* ============================================================
   DATA-UNIDAD-6.JS — Unidad 6: Ubicación, movimiento y prepositivo
   ------------------------------------------------------------
   Versión 04/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 04/10/2026):
   · в = adentro; на = sobre una superficie, y una lista corta de
     excepciones que se aprenden de memoria (на рабо́те, на у́лице,
     на ста́нции, на ку́хне, на балко́не; en la ampliación, на вокза́ле,
     на по́чте, на пля́же).
   · -ия → -ии (Росси́и, Испа́нии, ста́нции), en la teoría.
   · Ва́нная y гости́ная se declinan como adjetivos (в ва́нной): van como
     excepción en la ampliación, porque el programa no lo enseña.
   · Movimiento: идти́ / е́хать para ahora; ходи́ть / е́здить para lo
     habitual (ча́сто, всегда́, иногда́). Destino en acusativo.
   · «Ря́дом парк», sin есть («hay» se deja para más adelante).
   · Evaluación: 35 ejercicios en 6 partes; «Мой го́род» es el proyecto.
   · Mapa de ciudades (data-mapa.js): solo ciudades del léxico.
   Formas de Casos y de Verbos, nunca a mano.
   ============================================================ */

/* Lugares: "ruso": [español, «en …», «a …», preposición, emoji, cómo se va (идти́ / е́хать)] */
const U6_LUGARES = {
  "кварти́ра": ["departamento", "en el departamento", "al departamento", "в", "🏢", "идти́"], "ко́мната": ["habitación", "en la habitación", "a la habitación", "в", "🚪", "идти́"],
  "ку́хня": ["cocina", "en la cocina", "a la cocina", "на", "🍳", "идти́"], "спа́льня": ["dormitorio", "en el dormitorio", "al dormitorio", "в", "🛏️", "идти́"],
  "балко́н": ["balcón", "en el balcón", "al balcón", "на", "🌇", "идти́"], "о́фис": ["oficina", "en la oficina", "a la oficina", "в", "💼", "е́хать"],
  "рабо́та": ["trabajo", "en el trabajo", "al trabajo", "на", "🧑‍💻", "е́хать"], "магази́н": ["negocio", "en el negocio", "al negocio", "в", "🛒", "идти́"],
  "рестора́н": ["restaurante", "en el restaurante", "al restaurante", "в", "🍽️", "идти́"], "кафе́": ["café", "en el café", "al café", "в", "☕", "идти́"],
  "банк": ["banco", "en el banco", "al banco", "в", "🏦", "идти́"], "университе́т": ["universidad", "en la universidad", "a la universidad", "в", "🎓", "е́хать"],
  "шко́ла": ["escuela", "en la escuela", "a la escuela", "в", "🏫", "идти́"], "метро́": ["subte", "en el subte", "al subte", "в", "🚇", "идти́"],
  "ста́нция": ["estación", "en la estación", "a la estación", "на", "🚉", "идти́"], "парк": ["parque", "en el parque", "al parque", "в", "🌳", "идти́"],
  "у́лица": ["calle", "en la calle", "a la calle", "на", "🛣️", "идти́"], "го́род": ["ciudad", "en la ciudad", "a la ciudad", "в", "🏙️", "е́хать"],
  "центр": ["centro", "en el centro", "al centro", "в", "📍", "е́хать"],
  /* Ampliación */
  "аэропо́рт": ["aeropuerto", "en el aeropuerto", "al aeropuerto", "в", "✈️", "е́хать"], "больни́ца": ["hospital", "en el hospital", "al hospital", "в", "🏥", "е́хать"],
  "гости́ница": ["hotel", "en el hotel", "al hotel", "в", "🏨", "е́хать"], "кинотеа́тр": ["cine", "en el cine", "al cine", "в", "🎬", "идти́"],
  "библиоте́ка": ["biblioteca", "en la biblioteca", "a la biblioteca", "в", "📚", "идти́"], "апте́ка": ["farmacia", "en la farmacia", "a la farmacia", "в", "💊", "идти́"],
  "музе́й": ["museo", "en el museo", "al museo", "в", "🏛️", "идти́"], "теа́тр": ["teatro", "en el teatro", "al teatro", "в", "🎭", "идти́"],
  "вокза́л": ["estación de tren", "en la estación de tren", "a la estación de tren", "на", "🚆", "е́хать"], "по́чта": ["correo", "en el correo", "al correo", "на", "📮", "идти́"],
  "пляж": ["playa", "en la playa", "a la playa", "на", "🏖️", "идти́"], "ва́нная": ["baño", "en el baño", "al baño", "в", "🛁", "идти́"],
  "гости́ная": ["living", "en el living", "al living", "в", "🛋️", "идти́"]
};
const U6_AMPLIACION_RU = { 5: "ва́нная гости́ная", 6: "аэропо́рт больни́ца гости́ница кинотеа́тр библиоте́ка апте́ка музе́й теа́тр вокза́л по́чта пляж" };
/* Ciudades y países (todas con в) */
const U6_CIUDADES = { "Москва́": "Moscú", "Санкт-Петербу́рг": "San Petersburgo", "Барсело́на": "Barcelona", "Мадри́д": "Madrid", "Буэ́нос-А́йрес": "Buenos Aires",
  "Ки́ев": "Kiev", "Минск": "Minsk", "Пари́ж": "París", "Ри́о-де-Жане́йро": "Río de Janeiro", "Афи́ны": "Atenas", "Берли́н": "Berlín", "Лиссабо́н": "Lisboa",
  "Ло́ндон": "Londres", "Нью-Йо́рк": "Nueva York", "Пеки́н": "Pekín", "Пра́га": "Praga", "Рим": "Roma", "Стамбу́л": "Estambul", "То́кио": "Tokio" };
const U6_PAISES = { "Аргенти́на": "Argentina", "Испа́ния": "España", "Росси́я": "Rusia", "Фра́нция": "Francia", "Ита́лия": "Italia" };
/* Cosas que se pierden por la casa (Unidad 4) */
const U6_COSAS = { "телефо́н": ["teléfono", "📱"], "кни́га": ["libro", "📕"], "ко́шка": ["gata", "🐈"], "кот": ["gato", "🐈‍⬛"], "су́мка": ["cartera", "👜"],
  "компью́тер": ["computadora", "💻"], "ру́чка": ["lapicera", "🖊️"], "слова́рь": ["diccionario", "📙"] };
/* Personas */
const U6_SUJ = [["Я", "", 0], ["Ты", "Vos", 1], ["Он", "Él", 2], ["Она́", "Ella", 2], ["Мы", "", 3], ["Вы", "Ustedes", 4], ["Они́", "Ellos", 5],
  ["А́нна", "Ana", 2], ["Ива́н", "Iván", 2], ["Ма́ша", "Masha", 2], ["Ди́ма", "Dima", 2], ["Ма́ма", "Mamá", 2], ["Па́па", "Papá", 2], ["Брат", "Mi hermano", 2], ["Сестра́", "Mi hermana", 2]];
const U6_ESTAR = ["Estoy", "Estás", "Está", "Estamos", "Están", "Están"];
const U6_ESTAR_MIN = ["estoy", "estás", "está", "estamos", "están", "están"];
const U6_IR = ["voy", "vas", "va", "vamos", "van", "van"];
const U6_VIVIR = ["vivo", "vivís", "vive", "vivimos", "viven", "viven"];
const U6_TRABAJAR = ["trabajo", "trabajás", "trabaja", "trabajamos", "trabajan", "trabajan"];

const U6_VISTAS = {
  1: "где до́ма здесь там стол рабо́та в на",
  2: "кварти́ра ко́мната ку́хня спа́льня балко́н о́фис магази́н рестора́н кафе́ банк университе́т шко́ла метро́ ста́нция парк у́лица го́род центр",
  4: "жить",
  6: "рабо́тать",
  7: "ря́дом далеко́",
  8: "куда́ идти́",
  9: "е́хать ходи́ть е́здить отку́да"
};

/* Diálogos (módulo 7) */
const U6_DIALOGOS = [
  [["Где ты?", "¿Dónde estás?"], ["Я до́ма.", "Estoy en casa."]],
  [["Где ты?", "¿Dónde estás?"], ["Я в рестора́не.", "Estoy en el restaurante."], ["Где А́нна?", "¿Dónde está Ana?"], ["Она́ до́ма.", "Está en casa."]],
  [["Где вы?", "¿Dónde están?"], ["Мы в Барсело́не.", "Estamos en Barcelona."]],
  [["Где банк?", "¿Dónde está el banco?"], ["Банк ря́дом.", "El banco está cerca."], ["А метро́?", "¿Y el subte?"], ["Метро́ далеко́.", "El subte está lejos."]],
  [["Где ты рабо́таешь?", "¿Dónde trabajás?"], ["Я рабо́таю в о́фисе в це́нтре.", "Trabajo en una oficina en el centro."]],
  [["Где па́па?", "¿Dónde está papá?"], ["Он на рабо́те.", "Está en el trabajo."], ["А ма́ма?", "¿Y mamá?"], ["Она́ здесь, на ку́хне.", "Está acá, en la cocina."]]
];
/* Lecturas (módulo 10) */
const U6_LECTURAS = [
  { id: "lucas", titulo: "Лу́кас в Барсело́не", lineas: [
      ["Лу́кас живёт в Барсело́не.", "Lucas vive en Barcelona."], ["Он живёт в кварти́ре в це́нтре.", "Vive en un departamento en el centro."],
      ["Он рабо́тает в о́фисе.", "Trabaja en una oficina."], ["Ря́дом парк.", "Cerca hay un parque."], ["Ве́чером он ча́сто хо́дит в кафе́.", "A la noche va seguido al café."]],
    preguntas: [["¿Dónde vive Lucas?", "в Барсело́не", ["в Мадри́де", "в Барсело́ну"]], ["¿Dónde trabaja?", "в о́фисе", ["в ба́нке", "в шко́ле"]], ["¿Adónde va seguido a la noche?", "в кафе́", ["в парк", "в рестора́н"]]],
    vf: [["Лу́кас живёт в Мадри́де.", false], ["Ря́дом парк.", true], ["Он рабо́тает в о́фисе.", true]] },
  { id: "anna", titulo: "А́нна в Москве́", lineas: [
      ["А́нна живёт в Москве́.", "Ana vive en Moscú."], ["Она́ у́чится в университе́те.", "Estudia en la universidad."],
      ["Университе́т далеко́.", "La universidad está lejos."], ["Она́ е́здит в университе́т у́тром.", "Va a la universidad a la mañana."], ["Сейча́с она́ до́ма.", "Ahora está en casa."]],
    preguntas: [["¿Dónde estudia Ana?", "в университе́те", ["в шко́ле", "в университе́т"]], ["¿Dónde está ahora?", "до́ма", ["в университе́те", "на рабо́те"]], ["¿Cómo está la universidad?", "далеко́", ["ря́дом", "здесь"]]],
    vf: [["Университе́т ря́дом.", false], ["А́нна живёт в Москве́.", true], ["Сейча́с она́ в университе́те.", false]] },
  { id: "casa", titulo: "В кварти́ре", lineas: [
      ["Ма́ма на ку́хне.", "Mamá está en la cocina."], ["Па́па на балко́не.", "Papá está en el balcón."], ["Брат в ко́мнате.", "Mi hermano está en la habitación."],
      ["Сестра́ идёт в магази́н.", "Mi hermana va al negocio."], ["А я здесь, в спа́льне.", "Y yo estoy acá, en el dormitorio."]],
    preguntas: [["¿Dónde está papá?", "на балко́не", ["на ку́хне", "в ко́мнате"]], ["¿Adónde va la hermana?", "в магази́н", ["в магази́не", "в ко́мнату"]], ["¿Dónde está mamá?", "на ку́хне", ["в ку́хне", "на балко́не"]]],
    vf: [["Ма́ма на балко́не.", false], ["Брат в ко́мнате.", true], ["Сестра́ в магази́не.", false]] }
];

const UNIDAD_6 = {
  id: 6,
  titulo: "Ubicación, movimiento y prepositivo",
  tituloRu: "Где? Куда́? Предло́жный паде́ж",
  objetivo: "Decir dónde está alguien o algo, dónde vive y trabaja, y adónde va, usando в y на con el prepositivo y el acusativo.",
  tiempo: "30–40 horas",
  modulos: [
    { id: "u6m1", n: 1, tipo: "leccion", nPractica: 8, titulo: "¿Dónde?", resumen: "Где кни́га? — Кни́га на столе́.",
      intro: "Para preguntar dónde está algo, se usa где. Antes de ver la gramática, mirá cómo suenan las respuestas.",
      secciones: [
        { titulo: "Где?", texto: "Где кни́га? («¿dónde está el libro?») — Кни́га на столе́ («el libro está en la mesa»). Где ма́ма? — Ма́ма на рабо́те («mamá está en el trabajo»). Fijate que no hay verbo «estar»: como en la Unidad 5, en presente no se dice.", destacado: "Где кни́га? — Кни́га на столе́." },
        { titulo: "Respuestas sin preposición", texto: "Algunas respuestas son una sola palabra: до́ма (en casa), здесь (acá), там (allá). Я до́ма. Кни́га здесь. Ма́ма там." },
        { titulo: "La palabra cambia", texto: "En на столе́, стол cambió: le apareció una -е al final. Ese es el caso nuevo de esta unidad, el **prepositivo**. Lo ves en el módulo 3." }
      ] },
    { id: "u6m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "В y на", resumen: "в = adentro · на = sobre, y algunas de memoria.",
      intro: "En español todo es «en». En ruso, «en» se dice de dos maneras.",
      secciones: [
        { titulo: "В: adentro", texto: "в es «adentro de»: в ко́мнате (en la habitación), в магази́не (en el negocio), в Барсело́не (en Barcelona). Es la más común: ante la duda, в.", destacado: "в ко́мнате · в магази́не · в Барсело́не" },
        { titulo: "На: sobre una superficie", texto: "на es «sobre, encima de»: на столе́ (en la mesa, encima)." },
        { titulo: "Las que van con на de memoria", texto: "Algunos lugares van con на aunque uno esté adentro, y no hay que buscarle la lógica: se aprenden de memoria.\nна рабо́те (en el trabajo)\nна у́лице (en la calle)\nна ста́нции (en la estación)\nна ку́хне (en la cocina)\nна балко́не (en el balcón)", truco: "Todos los demás lugares de la unidad van con в." }
      ] },
    { id: "u6m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "El prepositivo", resumen: "дом → в до́ме · кварти́ра → в кварти́ре.",
      intro: "Después de в o на, cuando decís dónde está algo, la palabra cambia la terminación: es el **prepositivo**. La regla es muy pareja.",
      secciones: [
        { titulo: "Casi siempre, -е", texto: "Se cambia la vocal final por -е, o se agrega -е si termina en consonante:\nдом → в до́ме\nкварти́ра → в кварти́ре\nшко́ла → в шко́ле\nку́хня → на ку́хне\nрестора́н → в рестора́не", destacado: "-а, -я, consonante → -е" },
        { titulo: "La excepción: -ия → -ии", texto: "Las palabras que terminan en -ия hacen -ии: Росси́я → в Росси́и, Испа́ния → в Испа́нии, ста́нция → на ста́нции." },
        { titulo: "Las que no cambian", texto: "Кафе́ y метро́ vienen de otros idiomas y no cambian nunca, como ко́фе y кино́ en la Unidad 4: в кафе́, в метро́." },
        { titulo: "El acento puede moverse", texto: "Стол → на столе́: el acento pasa a la terminación. Al escribir no hace falta marcarlo; al leer, escuchá el audio.", truco: "¿Dónde? → в / на + prepositivo (-е)." }
      ] },
    { id: "u6m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Ciudades y países", resumen: "Я живу́ в Барсело́не.",
      intro: "Las ciudades y los países siguen la misma regla, siempre con в. Abajo tenés el mapa: tocá una ciudad para escuchar dónde vive alguien ahí.",
      secciones: [
        { titulo: "Ciudades", texto: "Барсело́на → в Барсело́не, Москва́ → в Москве́, Мадри́д → в Мадри́де, Пари́ж → в Пари́же. То́кио y Ри́о-де-Жане́йро no cambian. Афи́ны es plural y hace в Афи́нах." },
        { titulo: "Países", texto: "Испа́ния → в Испа́нии, Росси́я → в Росси́и, Ита́лия → в Ита́лии, Фра́нция → в Фра́нции (todos con -ии). Аргенти́на → в Аргенти́не." },
        { titulo: "¿Dónde vivís?", texto: "Где ты живёшь? («¿dónde vivís?») — Я живу́ в Барсело́не («vivo en Barcelona»). Она́ живёт в Испа́нии. Он живёт в Росси́и.", destacado: "Я живу́ в Барсело́не." }
      ] },
    { id: "u6m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Casa y habitaciones", resumen: "Ма́ма на ку́хне. Телефо́н в ко́мнате.",
      intro: "Con las partes de la casa ya podés decir dónde está cada persona y cada cosa.",
      secciones: [
        { titulo: "La casa", texto: "кварти́ра (departamento), ко́мната (habitación), ку́хня (cocina), спа́льня (dormitorio), балко́н (balcón). Ojo: на ку́хне y на балко́не van con на." },
        { titulo: "Dónde está cada cosa", texto: "Телефо́н в ко́мнате («el teléfono está en la habitación»). Кни́га на столе́. Ко́шка на балко́не. Ма́ма на ку́хне. Мы в кварти́ре.", destacado: "Где телефо́н? — Телефо́н в ко́мнате." }
      ] },
    { id: "u6m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Trabajo y lugares", resumen: "А́нна рабо́тает в о́фисе.",
      intro: "Los lugares de todos los días, para decir dónde estás y dónde trabajás.",
      secciones: [
        { titulo: "Los lugares", texto: "о́фис, рабо́та, магази́н, рестора́н, кафе́, банк, университе́т, шко́ла, метро́, ста́нция, парк, у́лица, го́род, центр." },
        { titulo: "Con los verbos de la Unidad 5", texto: "Я рабо́таю в о́фисе («trabajo en una oficina»). Она́ у́чится в университе́те. Мы обе́даем в рестора́не. Они́ гуля́ют в па́рке. Ты живёшь в це́нтре?", destacado: "Я рабо́таю в о́фисе." }
      ] },
    { id: "u6m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "¿Dónde estás?", resumen: "— Где ты? — Я до́ма.",
      intro: "Conversaciones cortas para preguntar y decir dónde está alguien. Escuchalas y practicalas.",
      secciones: [
        { titulo: "Cerca y lejos", texto: "ря́дом (cerca, al lado) y далеко́ (lejos): Банк ря́дом («el banco está cerca»). Метро́ далеко́ («el subte está lejos»). Y здесь (acá), там (allá)." },
        { titulo: "Preguntar por otro", texto: "Где ты? — Я в рестора́не. А где А́нна? — Она́ до́ма. Con а («y», «¿y…?») se pregunta por otra persona: А ма́ма? («¿y mamá?»)." }
      ] },
    { id: "u6m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Ubicación o movimiento", resumen: "в рестора́не (estar) · в рестора́н (ir).",
      intro: "Este es el punto más importante de la unidad: la misma preposición, con dos casos distintos.",
      secciones: [
        { titulo: "Dónde estás: prepositivo", texto: "Я в рестора́не («estoy en el restaurante»). Я на рабо́те («estoy en el trabajo»). Se pregunta con где." },
        { titulo: "Adónde vas: acusativo", texto: "Я иду́ в рестора́н («voy al restaurante»). Я иду́ на рабо́ту («voy al trabajo»). Se pregunta con куда́ («¿adónde?»). Es el acusativo de la Unidad 4: рабо́та → рабо́ту; рестора́н queda igual.", destacado: "Где? → в рестора́не · Куда́? → в рестора́н" },
        { titulo: "La preposición no cambia", texto: "Lo que va con на, va con на también en movimiento: на рабо́те → на рабо́ту, на у́лице → на у́лицу.", truco: "¿Estás? → -е. ¿Vas? → acusativo." }
      ] },
    { id: "u6m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Ir: a pie o en vehículo", resumen: "идти́ / е́хать · ходи́ть / е́здить.",
      intro: "El ruso tiene varios verbos para «ir». Por ahora, alcanza con dos preguntas: ¿a pie o en vehículo? ¿ahora o seguido?",
      secciones: [
        { titulo: "A pie o en vehículo", texto: "идти́ es ir a pie: Я иду́ в магази́н («voy al negocio»). е́хать es ir en auto, colectivo, tren o avión: Я е́ду в Мадри́д («voy a Madrid»)." },
        { titulo: "Ahora o seguido", texto: "Para algo que pasa ahora o en un viaje concreto: идти́ / е́хать. Para lo habitual, con ча́сто, всегда́ o иногда́: ходи́ть / е́здить. Я ча́сто хожу́ в кафе́ («voy seguido al café»). Она́ всегда́ е́здит на рабо́ту («siempre va al trabajo»).", destacado: "сейча́с → иду́ / е́ду · ча́сто → хожу́ / е́зжу" },
        { titulo: "¿De dónde?", texto: "Отку́да ты? («¿de dónde sos?») — Я из Аргенти́ны. Ya lo usaste en la Unidad 2; lo de después de из lo ves más adelante." }
      ] },
    { id: "u6m10", n: 10, tipo: "lectura", titulo: "Mi ciudad", resumen: "Dónde viven, trabajan y adónde van.",
      intro: "Tres textos cortos con todo lo de la unidad. Leelos, escuchalos y después contestá." },
    { id: "u6m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Мой го́род", resumen: "Tu ciudad, en ruso.",
      intro: "Escribí sobre la ciudad donde vivís. Te pueden guiar estas preguntas: Где ты живёшь? Где ты рабо́таешь? Где ты обе́даешь? Куда́ ты хо́дишь? Por ejemplo: Я живу́ в Барсело́не. Я живу́ в кварти́ре в це́нтре. Я рабо́таю в о́фисе. Я ча́сто хожу́ в кафе́. Ве́чером я до́ма.",
      requisitos: [], consejos: [] },
    { id: "u6m12", n: 12, tipo: "examen", titulo: "Evaluación", resumen: "в / на, terminaciones, dónde o adónde, traducción y audio.",
      intro: "Treinta y cinco ejercicios en seis partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "в o на", tipos: ["prepo"], n: 6 },
        { nombre: "Terminaciones", tipos: ["term", "term-elegir", "completar"], n: 8 },
        { nombre: "Dónde o adónde", tipos: ["clasificar", "ubic-mov", "donde-adonde"], n: 6 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 8 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
/* Palabras de una letra (в, а, и, с, у, к, о, я) en los textos: van como
   palabra, sin negrita ({в}, Contexto §6.10). Las terminaciones (-е)
   llevan guion y quedan como letras. */
function u6Palabras(t) {
  return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}");
}
UNIDAD_6.modulos.forEach(m => {
  if (m.intro) m.intro = u6Palabras(m.intro);
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u6Palabras(s[k]); }));
});
function unidad6Modulo(id) { return UNIDAD_6.modulos.find(m => m.id === id) || null; }

const U6_MEZCLA = { donde: 1, prepo: 2, term: 2, "term-elegir": 1, completar: 2, cambia: 1, emparejar: 1, "es-ru": 3, dictado: 3, escena: 2, detectar: 1, corregir: 1,
  construir: 2, dialogo: 2, clasificar: 1, "ubic-mov": 2, "donde-adonde": 1, "a-pie": 1, habitual: 1, conjugar: 1, "conjugar-escribir": 2, lectura: 2, "lectura-vf": 1, significado: 1, "palabra-es-ru": 1 };

/* ── Datos armados una vez ─────────────────────────────────── */
function u6Datos() {
  if (u6Datos.cache) return u6Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => { const c = (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos); return c[0] || null; };
  const desde = {}, amp = {};
  Object.keys(U6_VISTAS).forEach(m => U6_VISTAS[m].split(" ").forEach(ru => { if (desde[sin(ru)] == null) desde[sin(ru)] = +m; }));
  Object.keys(U6_AMPLIACION_RU).forEach(m => U6_AMPLIACION_RU[m].split(" ").forEach(ru => { amp[sin(ru)] = +m; }));
  const formas = e => {
    const cz = casosById(e.id); if (!cz) return null;
    if (cz.tipo === "indeclinable") return { nom: e.acento, acc: e.acento, prep: e.acento, indecl: true };
    if (!cz.sg) return { nom: cz.pl[0], acc: cz.pl[3], prep: cz.pl[5], plural: true };
    return { nom: cz.sg[0], acc: cz.sg[3], prep: cz.sg[5], adjetival: !!cz.adjetival };
  };
  const lug = {};
  Object.keys(U6_LUGARES).forEach(ru => {
    const e = lex(ru, "sustantivo"), f = e && formas(e); if (!f) return;
    const x = U6_LUGARES[ru];
    lug[sin(ru)] = Object.assign({ id: e.id, ac: e.acento, es: x[0], en: x[1], a: x[2], pr: x[3], emoji: x[4], va: x[5], g: e.gender, tipo: "lugar",
      desde: amp[sin(ru)] || desde[sin(ru)] || 2, amp: amp[sin(ru)] || 0 }, f);
  });
  const geo = {};
  [[U6_CIUDADES, "ciudad"], [U6_PAISES, "pais"]].forEach(([tabla, tipo]) => Object.keys(tabla).forEach(ru => {
    const e = lex(ru, "sustantivo"), f = e && formas(e); if (!f) return;
    geo[sin(ru)] = Object.assign({ id: e.id, ac: e.acento, es: tabla[ru], en: "en " + tabla[ru], a: "a " + tabla[ru], pr: "в", emoji: tipo === "ciudad" ? "🏙️" : "🗺️", va: "е́хать", tipo, desde: 4, amp: 0 }, f);
  }));
  const cosas = {};
  Object.keys(U6_COSAS).forEach(ru => { const e = lex(ru, "sustantivo"); if (e) cosas[sin(ru)] = { id: e.id, ac: e.acento, es: U6_COSAS[ru][0], emoji: U6_COSAS[ru][1], g: e.gender }; });
  const verb = {};
  "жить рабо́тать идти́ е́хать ходи́ть е́здить".split(" ").forEach(ru => { const e = lex(ru, "verbo"); const v = e && verboById(e.id); if (v && v.presente) verb[sin(ru)] = { id: e.id, ac: e.acento, f: v.presente }; });
  const estaLex = { stol: lex("стол", "sustantivo") };
  const st = estaLex.stol && formas(estaLex.stol);
  if (st) lug["стол"] = Object.assign({ id: estaLex.stol.id, ac: "стол", es: "mesa", en: "en la mesa", a: "a la mesa", pr: "на", emoji: "🪑", va: "идти́", g: "m", tipo: "sobre", desde: 1, amp: 0 }, st);
  return (u6Datos.cache = { sin, lug, geo, cosas, verb, lex });
}

/* Por qué queda así el prepositivo: «**кварти́ра → в кварти́ре**: …» */
function u6Regla(s) {
  const n = s.nom.replace(/\u0301/g, ""), fin2 = n.slice(-2), fin = n.slice(-1);
  let r;
  if (s.indecl) r = "viene de otro idioma y no cambia nunca";
  else if (s.plural) r = "es plural: hace -ах";
  else if (s.adjetival) r = "se declina como un adjetivo: -ая → -ой (excepción)";
  else if (fin2 === "ия") r = "termina en -ия: hace -ии";
  else if (fin === "а") r = "termina en -а: pasa a -е";
  else if (fin === "я") r = "termina en -я: pasa a -е";
  else if (fin === "й") r = "termina en -й: pasa a -е";
  else r = "termina en consonante: se agrega -е";
  const por = s.tipo === "sobre" ? " Va con на porque es «sobre» la mesa." : s.pr === "на" ? " Va con на: es de la lista que se aprende de memoria." : "";
  const pos = w => { const i = w.indexOf("\u0301"); return i < 0 ? -1 : (w.slice(0, i).match(/[аеёиоуыэюя]/gi) || []).length; };
  const mueve = s.nom !== s.prep && pos(s.nom) >= 0 && pos(s.prep) >= 0 && pos(s.nom) !== pos(s.prep) ? " Fijate que el acento se mueve." : "";
  return "**" + s.nom + " → " + s.pr + " " + s.prep + "**: " + r + "." + por + mueve;
}
/* Movimiento: «**рабо́та → на рабо́ту**: …» */
function u6ReglaMov(s) {
  return "**" + s.nom + " → " + s.pr + " " + s.acc + "**: con movimiento (куда́?) va el acusativo" + (s.nom === s.acc ? ", que acá queda igual." : ".");
}

function ejerciciosUnidad6() {
  const { sin, lug, geo, cosas, verb } = u6Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?]/g, "");
  const lugares = Object.values(lug).filter(s => s.tipo !== "sobre");
  const geos = Object.values(geo);
  const S = k => U6_SUJ[k % U6_SUJ.length];
  const estar = (sj) => sj[1] ? sj[1] + " " + U6_ESTAR_MIN[sj[2]] : U6_ESTAR[sj[2]];

  /* ── Módulo 1: dónde ── */
  [["Где кни́га?", "Кни́га на столе́.", "El libro está en la mesa."], ["Где ма́ма?", "Ма́ма на рабо́те.", "Mamá está en el trabajo."], ["Где ты?", "Я до́ма.", "Estoy en casa."],
   ["Где па́па?", "Па́па там.", "Papá está allá."], ["Где кни́га?", "Кни́га здесь.", "El libro está acá."], ["Где брат?", "Брат до́ма.", "Mi hermano está en casa."],
   ["Где А́нна?", "А́нна на рабо́те.", "Ana está en el trabajo."], ["Где телефо́н?", "Телефо́н на столе́.", "El teléfono está en la mesa."]].forEach(([q, a, es], j) => {
    const base = { grupo: "D1-" + j, items: [], oir: a };
    out.push(Object.assign({ id: "U6-d1-" + j, tipo: "donde", forma: "elegir", dificultad: 1, modulo: 1, contexto: [{ p: "—", ru: q }], pide: "Escuchá la respuesta: ¿qué significa?", audio: a,
      opciones: baraja([es, "Está en la cocina.", "Va al trabajo.", "No está acá."].filter((x, k) => k === 0 || x !== es).slice(0, 3), j), correcta: es, explicacion: "— " + q + " — " + a + " (" + es + ")" }, base));
    out.push(Object.assign({ id: "U6-d1d-" + j, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 1, pide: "Escuchá y escribí la respuesta.", audio: a, esperadas: [a], idioma: "ru", explicacion: a + " — " + es }, base));
    out.push(Object.assign({ id: "U6-d1e-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 1, pide: "Escribí en ruso: «" + es + "»", audio: a, audioManual: true, esperadas: [a], idioma: "ru", explicacion: a }, base));
  });

  /* ── Módulo 2: в o на ── */
  lugares.concat([lug["стол"]]).filter(Boolean).forEach((s, j) => {
    if (s.amp) return;
    out.push({ id: "U6-pr-" + s.id, tipo: "prepo", forma: "elegir", dificultad: 1, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Completá: «" + s.en + "»", grande: "_____ " + s.prep, opciones: ["в", "на"], correcta: s.pr,
      explicacion: "**" + s.pr + " " + s.prep + "**: " + (s.tipo === "sobre" ? "на, porque es «sobre» la mesa." : s.pr === "на" ? "va con на: es de la lista que se aprende de memoria." : "в, adentro (todos los que no están en la lista van con в).") });
    const exp = "**" + s.pr + " " + s.prep + "** = " + s.en + (s.pr === "на" && s.tipo !== "sobre" ? ". Va con на, de memoria." : ".");
    if (j % 2 === 0) out.push({ id: "U6-pres-" + s.id, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Escribí en ruso: «" + s.en + "»", audio: s.pr + " " + s.prep, audioManual: true, esperadas: [s.pr + " " + s.prep], idioma: "ru", explicacion: exp });
    else out.push({ id: "U6-prdic-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Escuchá y escribí.", audio: s.pr + " " + s.prep, esperadas: [s.pr + " " + s.prep], idioma: "ru", explicacion: exp });
  });

  /* ── Módulo 3 (lugares), 4 (ciudades y países), 5 (casa) y 6 (lugares): el prepositivo ── */
  const casa = ["кварти́ра", "ко́мната", "ку́хня", "спа́льня", "балко́н"].map(x => sin(x));
  const conMod = s => s.tipo === "ciudad" || s.tipo === "pais" ? 4 : s.amp ? s.amp : casa.indexOf(sin(s.nom)) >= 0 ? 3 : 3;
  lugares.concat(geos).forEach((s, j) => {
    const m = conMod(s);
    const base = { grupo: "T-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep, ampliacion: s.amp ? true : undefined };
    out.push(Object.assign({ id: "U6-term-" + s.id, tipo: "term", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribí cómo queda: «" + s.en + "».", grande: s.pr + " + " + s.nom,
      audio: s.pr + " " + s.prep, audioManual: true, esperadas: [s.pr + " " + s.prep, s.prep], idioma: "ru", explicacion: u6Regla(s) }, base));
    const ops = uniq([s.prep, s.nom, s.acc]);
    if (ops.length >= 2) out.push(Object.assign({ id: "U6-tel-" + s.id, tipo: "term-elegir", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Dónde? Elegí la forma: «" + s.en + "»", grande: s.pr + " _____",
      opciones: baraja(ops, j), correcta: s.prep, explicacion: u6Regla(s) }, base));
    if (s.indecl || j % 4 === 0) out.push(Object.assign({ id: "U6-camb-" + s.id, tipo: "cambia", forma: "elegir", dificultad: 1, modulo: m, pide: "Después de " + s.pr + ", ¿cambia?", grande: s.nom,
      opciones: ["Sí, cambia", "No, queda igual"], correcta: s.indecl ? "No, queda igual" : "Sí, cambia", explicacion: u6Regla(s) }, base));
  });
  /* Uní la palabra con su prepositivo */
  [[3, lugares.filter(s => !s.amp && !s.indecl)], [4, geos.filter(s => !s.indecl)]].forEach(([m, l]) => {
    for (let j = 0; j + 4 <= l.length; j += 4) { const g = l.slice(j, j + 4);
      out.push({ id: "U6-emp-" + m + "-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: m, grupo: "E-" + m + "-" + j, items: g.map(s => "lex:" + s.id),
        pide: "Uní cada palabra con su forma para «dónde».", pares: g.map(s => [s.nom, s.pr + " " + s.prep]), explicacion: g.map(s => s.nom + " → " + s.pr + " " + s.prep).join(" · ") }); }
  });

  /* Frases «X está en Y» y «X vive / trabaja en Y» */
  const frase = (sj, s, verbo) => {
    const p = sj[2];
    let ru, es;
    if (!verbo) { ru = sj[0] + " " + s.pr + " " + s.prep + "."; es = estar(sj) + " " + s.en + "."; }
    else {
      const v = verb[sin(verbo)], tabla = verbo === "жить" ? U6_VIVIR : U6_TRABAJAR;
      ru = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.prep + ".";
      es = (sj[1] ? sj[1] + " " + tabla[p] : cap(tabla[p])) + " " + s.en.replace(/^en (el|la) (oficina|universidad|escuela|banco)$/, (m, a, b) => "en " + (a === "el" ? "un" : "una") + " " + b) + ".";
    }
    const esperadas = [ru];
    if (p === 0 || p === 1 || p === 3 || p === 4) if (verbo) esperadas.push(cap(verb[sin(verbo)].f[p]) + " " + s.pr + " " + s.prep + ".");
    if (/^Mi /.test(sj[1])) esperadas.push((/hermana/.test(sj[1]) ? "Моя́ " : "Мой ") + sj[0].toLowerCase() + ru.slice(sj[0].length));
    return { ru, es: cap(es), esperadas };
  };
  const conFrases = (lista, m, verbo, n0) => lista.forEach((s, j) => {
    const sj = S(n0 + j * 3), f = frase(sj, s, verbo);
    const base = { grupo: "F" + m + "-" + s.id + (verbo || ""), items: ["lex:" + s.id], oir: f.ru, ampliacion: s.amp ? true : undefined };
    const mm = s.amp ? s.amp : m;
    const exp = u6Regla(s) + " " + f.ru + " — " + f.es;
    out.push(Object.assign({ id: "U6-esru-" + mm + "-" + s.id + (verbo || ""), tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: mm, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: exp }, base));
    out.push(Object.assign({ id: "U6-dic-" + mm + "-" + s.id + (verbo || ""), tipo: "dictado", forma: "escribir", dificultad: 2, modulo: mm, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: exp }, base));
    out.push(Object.assign({ id: "U6-comp-" + mm + "-" + s.id + (verbo || ""), tipo: "completar", forma: "escribir", dificultad: 2, modulo: mm, pide: "Completá con «" + s.nom + "».",
      grande: f.ru.replace(new RegExp(" " + s.prep.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\.$"), " _____."), pista: f.es, audio: f.ru, audioManual: true, esperadas: [s.prep], idioma: "ru", explicacion: exp }, base));
    if (!s.indecl && s.nom !== s.prep && j % 2 === 0) {
      const pals = sinP(f.ru).split(" "); const malas = pals.slice(); malas[malas.length - 1] = s.nom;
      out.push(Object.assign({ id: "U6-det-" + mm + "-" + s.id + (verbo || ""), tipo: "detectar", forma: "tocar", dificultad: 2, modulo: mm, pide: "Tocá la palabra que está mal.", palabras: malas, correcta: malas.length - 1,
        explicacion: "Después de " + s.pr + ", para decir dónde, va el prepositivo: " + exp }, base));
    }
    if (j % 3 === 1) { const pals = sinP(f.ru).split(" "); let fi = baraja(pals, j + 5); if (fi.join(" ") === pals.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U6-ord-" + mm + "-" + s.id + (verbo || ""), tipo: "construir", forma: "ordenar", dificultad: 2, modulo: mm, pide: "Ordená: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: pals.join(" "), explicacion: exp }, base)); }
  });
  conFrases(lugares.filter(s => !s.amp && s.tipo === "lugar" && casa.indexOf(sin(s.nom)) < 0), 3, null, 0);
  conFrases(geos, 4, "жить", 1);
  conFrases(lugares.filter(s => casa.indexOf(sin(s.nom)) >= 0 || s.amp === 5), 5, null, 2);
  conFrases(lugares.filter(s => (!s.amp && casa.indexOf(sin(s.nom)) < 0 && ["о́фис", "банк", "шко́ла", "университе́т", "магази́н", "рестора́н", "кафе́"].map(sin).indexOf(sin(s.nom)) >= 0) || s.amp === 6), 6, "рабо́тать", 3);
  /* ¿Dónde está? (escenas con emoji): cosa + lugar de la casa */
  const habit = ["ко́мната", "ку́хня", "спа́льня", "балко́н"].map(x => lug[sin(x)]).concat([lug["стол"]]).filter(Boolean);
  Object.values(cosas).forEach((o, j) => {
    const s = habit[j % habit.length], ru = cap(o.ac) + " " + s.pr + " " + s.prep + ".", q = "Где " + o.ac + "?";
    out.push({ id: "U6-esc-" + o.id, tipo: "escena", forma: "escribir", dificultad: 2, modulo: 5, grupo: "SC-" + o.id, items: ["lex:" + o.id, "lex:" + s.id], oir: ru,
      contexto: [{ p: "—", ru: q }], pide: "Mirá el dibujo y contestá en ruso.", grande: o.emoji + "  →  " + s.emoji, audio: q, audioManual: true,
      esperadas: [ru, cap(s.pr) + " " + s.prep + "."], idioma: "ru", explicacion: "— " + q + " — " + ru + " " + u6Regla(s) });
  });
  /* ¿Dónde está Áнна? (escenas de lugares) */
  lugares.filter(s => !s.amp && ["о́фис", "банк", "шко́ла", "магази́н", "рестора́н", "кафе́", "парк", "рабо́та", "у́лица", "ста́нция", "университе́т", "метро́"].map(sin).indexOf(sin(s.nom)) >= 0).forEach((s, j) => {
    const sj = U6_SUJ[7 + (j % 8)], q = "Где " + sj[0].replace(/^([А-ЯЁ])/, c => c) + "?";
    const pro = /hermana|Ana|Masha|Mamá/.test(sj[1]) ? "Она́" : "Он";
    const ru = pro + " " + s.pr + " " + s.prep + ".";
    out.push({ id: "U6-esl-" + s.id, tipo: "escena", forma: "escribir", dificultad: 2, modulo: 6, grupo: "SL-" + s.id, items: ["lex:" + s.id], oir: ru,
      contexto: [{ p: "—", ru: "Где " + (sj[0] === "Брат" || sj[0] === "Сестра́" || sj[0] === "Ма́ма" || sj[0] === "Па́па" ? sj[0].toLowerCase() : sj[0]) + "?" }],
      pide: "Mirá el dibujo y contestá en ruso.", grande: s.emoji, audio: "Где " + sj[0] + "?", audioManual: true,
      esperadas: [ru, cap(s.pr) + " " + s.prep + ".", sj[0] + " " + s.pr + " " + s.prep + "."], idioma: "ru", explicacion: ru + " " + u6Regla(s) });
  });

  /* ── Módulo 7: diálogos ── */
  U6_DIALOGOS.forEach((d, j) => {
    for (let k = 1; k < d.length; k += 2) {
      const q = d[k - 1], a = d[k];
      const base = { grupo: "DL-" + j + "-" + k, items: [], oir: a[0] };
      out.push(Object.assign({ id: "U6-dlg-" + j + "-" + k, tipo: "dialogo", forma: "escribir", dificultad: 2, modulo: 7, contexto: [{ p: "—", ru: q[0] }],
        pide: "Contestá: «" + a[1] + "»", audio: a[0], audioManual: true, esperadas: [a[0]], idioma: "ru", explicacion: "— " + q[0] + " — " + a[0] + " (" + a[1] + ")" }, base));
      out.push(Object.assign({ id: "U6-dlgd-" + j + "-" + k, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 7, pide: "Escuchá y escribí la respuesta.", audio: a[0], esperadas: [a[0]], idioma: "ru",
        explicacion: "— " + q[0] + " — " + a[0] + " (" + a[1] + ")" }, base));
    }
    if (d.length >= 4) out.push({ id: "U6-dlgo-" + j, tipo: "dialogo", forma: "ordenar", dificultad: 2, modulo: 7, grupo: "DO-" + j, items: [], pide: "Ordená la conversación.",
      fichas: baraja(d.map(x => x[0]), j + 3).sort((a, b) => a === d[0][0] ? 1 : 0), sep: "\n", esperada: d.map(x => x[0]).join("\n"), audio: d.map(x => x[0]).join(" "),
      explicacion: d.map(x => "— " + x[0] + " (" + x[1] + ")").join(" ") });
  });
  [["Банк ря́дом.", "El banco está cerca."], ["Метро́ далеко́.", "El subte está lejos."], ["Шко́ла ря́дом.", "La escuela está cerca."], ["Университе́т далеко́.", "La universidad está lejos."],
   ["Парк ря́дом.", "El parque está cerca."], ["Ста́нция далеко́.", "La estación está lejos."]].forEach(([ru, es], j) => {
    out.push({ id: "U6-cerca-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 7, grupo: "CE-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " Sin verbo, como en presente." });
  });

  /* ── Módulo 8: ubicación o movimiento ── */
  const mov = lugares.filter(s => !s.amp && ["рестора́н", "магази́н", "рабо́та", "парк", "кафе́", "банк", "шко́ла", "у́лица", "о́фис", "университе́т"].map(sin).indexOf(sin(s.nom)) >= 0);
  mov.forEach((s, j) => {
    const sj = U6_SUJ[[0, 1, 2, 3, 4, 6][j % 6]], p = sj[2];
    const vk = "идти́", v = verb[sin(vk)];   /* е́хать recién se enseña en el módulo 9 */
    const estoy = sj[0] + " " + s.pr + " " + s.prep + ".", voy = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.acc + ".";
    const esE = estar(sj) + " " + s.en + ".", esV = cap((sj[1] ? sj[1] + " " : "") + U6_IR[p] + " " + s.a) + ".";
    const base = { grupo: "M-" + s.id, items: ["lex:" + s.id, "lex:" + v.id], oir: voy };
    out.push(Object.assign({ id: "U6-clas-e-" + s.id, tipo: "clasificar", forma: "elegir", dificultad: 1, modulo: 8, pide: "¿Ubicación o movimiento?", grande: estoy, audio: estoy,
      opciones: ["📍 Ubicación", "🚶 Movimiento"], correcta: "📍 Ubicación", explicacion: estoy + " — " + esE + " " + u6Regla(s) }, base));
    out.push(Object.assign({ id: "U6-clas-m-" + s.id, tipo: "clasificar", forma: "elegir", dificultad: 1, modulo: 8, pide: "¿Ubicación o movimiento?", grande: voy, audio: voy,
      opciones: ["📍 Ubicación", "🚶 Movimiento"], correcta: "🚶 Movimiento", explicacion: voy + " — " + esV + " " + u6ReglaMov(s) }, base));
    if (s.prep !== s.acc) {
      out.push(Object.assign({ id: "U6-um-v-" + s.id, tipo: "ubic-mov", forma: "elegir", dificultad: 2, modulo: 8, pide: "Completá: «" + esV + "»", grande: sj[0] + " " + v.f[p] + " " + s.pr + " _____.",
        opciones: baraja([s.acc, s.prep], j), correcta: s.acc, explicacion: u6ReglaMov(s) }, base));
      out.push(Object.assign({ id: "U6-um-e-" + s.id, tipo: "ubic-mov", forma: "elegir", dificultad: 2, modulo: 8, pide: "Completá: «" + esE + "»", grande: sj[0] + " " + s.pr + " _____.",
        opciones: baraja([s.acc, s.prep], j + 1), correcta: s.prep, explicacion: u6Regla(s) }, base));
    }
    out.push(Object.assign({ id: "U6-um-esru-" + s.id, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribí en ruso: «" + esV + "»", audio: voy, audioManual: true,
      esperadas: [voy].concat(p === 0 || p === 1 || p === 3 ? [cap(v.f[p]) + " " + s.pr + " " + s.acc + "."] : []), idioma: "ru", explicacion: u6ReglaMov(s) + " " + voy }, base));
    out.push(Object.assign({ id: "U6-um-dic-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, pide: "Escuchá y escribí la frase.", audio: voy, esperadas: [voy], idioma: "ru", explicacion: voy + " — " + esV }, base));
    /* Где o куда́ */
    const qd = j % 2 ? ["_____ ты?", "Где", s.pr + " " + s.prep] : ["_____ ты " + verb[sin(vk)].f[1] + "?", "Куда́", s.pr + " " + s.acc];
    out.push(Object.assign({ id: "U6-dq-" + s.id, tipo: "donde-adonde", forma: "elegir", dificultad: 2, modulo: 8, pide: "¿Где o куда́? La respuesta es: «" + cap(qd[2]) + "».", grande: qd[0],
      opciones: ["Где", "Куда́"], correcta: qd[1], explicacion: qd[1] === "Где" ? "**Где** pregunta dónde estás: la respuesta va en prepositivo (" + qd[2] + ")." : "**Куда́** pregunta adónde vas: la respuesta va en acusativo (" + qd[2] + ")." }, base));
  });

  /* ── Módulo 9: a pie o en vehículo, ahora o seguido ── */
  ["е́хать", "ходи́ть", "е́здить"].forEach((vk, vi) => {
    const v = verb[sin(vk)]; if (!v) return;
    const PL = ["я", "ты", "он / она́", "мы", "вы", "они́"], pR = ["Я", "Ты", "Он", "Мы", "Вы", "Они́"];
    v.f.forEach((f, i) => {
      out.push({ id: "U6-conjw-" + v.id + "-" + i, tipo: "conjugar-escribir", forma: "escribir", dificultad: 2, modulo: 9, grupo: v.id + "-" + i, items: ["lex:" + v.id], pide: "Escribí la forma del verbo.",
        grande: PL[i] + " + " + v.ac, audio: pR[i] + " " + f, audioManual: true, esperadas: [f, pR[i] + " " + f], idioma: "ru", explicacion: "**" + v.ac + " → " + PL[i] + " " + f + "**" });
      if (i % 2 === 0) out.push({ id: "U6-conj-" + v.id + "-" + i, tipo: "conjugar", forma: "elegir", dificultad: 1, modulo: 9, grupo: v.id + "-c" + i, items: ["lex:" + v.id], pide: "Elegí la forma de «" + v.ac + "».",
        grande: pR[i] + " _____", opciones: baraja(uniq(v.f).filter(x => x !== f).slice(0, 3).concat(f), vi + i), correcta: f, explicacion: "**" + v.ac + " → " + PL[i] + " " + f + "**" });
    });
  });
  const pie = [["парк", "идти́", "🚶"], ["магази́н", "идти́", "🚶"], ["кафе́", "идти́", "🚶"], ["шко́ла", "идти́", "🚶"], ["Мадри́д", "е́хать", "🚗"], ["Москва́", "е́хать", "🚆"],
    ["Пари́ж", "е́хать", "✈️"], ["университе́т", "е́хать", "🚌"], ["Барсело́на", "е́хать", "🚗"], ["банк", "идти́", "🚶"]];
  pie.forEach(([dest, vk, em], j) => {
    const s = lug[sin(dest)] || geo[sin(dest)]; if (!s) return;
    const sj = U6_SUJ[[0, 2, 3, 4, 1, 6][j % 6]], p = sj[2], v = verb[sin(vk)];
    const ru = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.acc + ".", es = cap((sj[1] ? sj[1] + " " : "") + U6_IR[p] + " " + s.a) + ".";
    out.push({ id: "U6-pie-" + j, tipo: "a-pie", forma: "elegir", dificultad: 2, modulo: 9, grupo: "AP-" + j, items: ["lex:" + v.id, "lex:" + s.id], oir: ru, pide: em + " " + es + " ¿Qué verbo va?",
      grande: sj[0] + " _____ " + s.pr + " " + s.acc + ".", opciones: baraja([v.f[p], verb[sin(vk === "идти́" ? "е́хать" : "идти́")].f[p]], j), correcta: v.f[p],
      explicacion: (vk === "идти́" ? "**идти́**: a pie." : "**е́хать**: en vehículo.") + " " + ru });
  });
  [["кафе́", "ча́сто", "идти́"], ["парк", "всегда́", "идти́"], ["рестора́н", "иногда́", "идти́"], ["рабо́та", "всегда́", "е́хать"], ["университе́т", "ча́сто", "е́хать"], ["Мадри́д", "иногда́", "е́хать"],
   ["магази́н", "сейча́с", "идти́"], ["рабо́та", "сейча́с", "е́хать"], ["шко́ла", "сейча́с", "идти́"], ["Барсело́на", "сейча́с", "е́хать"]].forEach(([dest, adv, base], j) => {
    const s = lug[sin(dest)] || geo[sin(dest)]; if (!s) return;
    const habitual = adv !== "сейча́с", vk = habitual ? (base === "идти́" ? "ходи́ть" : "е́здить") : base, otro = habitual ? base : (base === "идти́" ? "ходи́ть" : "е́здить");
    const sj = U6_SUJ[[0, 2, 3, 6][j % 4]], p = sj[2], v = verb[sin(vk)], w = verb[sin(otro)];
    const ru = sj[0] + " " + adv + " " + v.f[p] + " " + s.pr + " " + s.acc + ".";
    const esAdv = { "ча́сто": "seguido", "всегда́": "siempre", "иногда́": "a veces", "сейча́с": "ahora" }[adv];
    const es = cap((sj[1] ? sj[1] + " " : "") + esAdv + " " + U6_IR[p] + " " + s.a) + ". " + (base === "идти́" ? "🚶" : "🚗");   /* a pie o en vehículo */
    out.push({ id: "U6-hab-" + j, tipo: "habitual", forma: "elegir", dificultad: 2, modulo: 9, grupo: "HB-" + j, items: ["lex:" + v.id], oir: ru, pide: "Completá: «" + es + "»",
      grande: sj[0] + " " + adv + " _____ " + s.pr + " " + s.acc + ".", opciones: baraja([v.f[p], w.f[p]], j), correcta: v.f[p],
      explicacion: (habitual ? "**" + adv + "** = algo habitual → " + v.ac + "." : "**сейча́с** = ahora → " + v.ac + ".") + " " + ru });
    out.push({ id: "U6-habesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 9, grupo: "HB-" + j, items: ["lex:" + v.id], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: (habitual ? "Habitual → " + v.ac : "Ahora → " + v.ac) + ". " + u6ReglaMov(s) + " " + ru });
  });

  /* ── Módulo 10: lecturas ── */
  U6_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U6-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 10, grupo: "L6-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U6-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 10, grupo: "L6v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });
  /* Dictados de cinco niveles (esquema) */
  [["Я до́ма.", "Estoy en casa."], ["Я в кварти́ре.", "Estoy en el departamento."], ["Я рабо́таю в о́фисе.", "Trabajo en una oficina."],
   ["Я рабо́таю в о́фисе в Барсело́не.", "Trabajo en una oficina en Barcelona."], ["Ве́чером я ча́сто хожу́ в рестора́н.", "A la noche voy seguido al restaurante."]].forEach(([ru, es], j) =>
    out.push({ id: "U6-niv-" + j, tipo: "dictado", forma: "escribir", dificultad: j < 2 ? 1 : j < 4 ? 2 : 3, modulo: 10, grupo: "NV-" + j, items: [], oir: ru, pide: "Escuchá y escribí (nivel " + (j + 1) + ").",
      audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }));

  /* ── Vocabulario de las palabras nuevas ── */
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(6) >= 0);
  const dicEs = { "куда́": "adónde", "здесь": "acá", "ря́дом": "cerca, al lado", "далеко́": "lejos", "е́хать": "ir (en vehículo)", "ходи́ть": "ir a pie (seguido)", "е́здить": "ir en vehículo (seguido)" };
  const modDe = e => { const s = lug[sin(e.acento)]; if (s) return s.amp || (casa.indexOf(sin(s.nom)) >= 0 ? 5 : 6); return { "куда́": 8, "здесь": 7, "ря́дом": 7, "далеко́": 7 }[e.acento] || 9; };
  nuevas.forEach((e, i) => {
    const s = lug[sin(e.acento)], es = s ? s.es : dicEs[e.acento] || e.senses[0].es, m = modDe(e), amp = s && s.amp;
    const pool = nuevas.filter(x => x.id !== e.id && !!(lug[sin(x.acento)] || {}).amp === !!amp).map(x => (lug[sin(x.acento)] || {}).es || dicEs[x.acento] || x.senses[0].es);
    const dis = baraja(uniq(pool.filter(x => x !== es)), i + 2).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru, ampliacion: amp ? true : undefined };
    if (dis.length >= 2) out.push(Object.assign({ id: "U6-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U6-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribí en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });
  out.forEach(e => { if (e.explicacion) e.explicacion = u6Palabras(e.explicacion); if (e.pide) e.pide = u6Palabras(e.pide); });
  return out;
}

/* Proyecto «Мой го́род»: requisitos y consejos, contados con Casos y Verbos */
(function () {
  const m = UNIDAD_6.modulos.find(x => x.id === "u6m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const clave = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(clave(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*/).map(x => x.trim()).filter(x => pal(x).length >= 1);
  const MOV = ["идти", "ехать", "ходить", "ездить"];
  const esMov = w => info(w).some(x => { const e = lexComerById(x[0]); return e && MOV.indexOf(clave(e.ru)) >= 0; });
  const formaDe = (w, i) => info(w).some(x => { const cz = casosById(x[0]); if (!cz) return false; if (cz.tipo === "indeclinable") return true;
    const a = cz.sg || cz.pl; return a && clave(a[i]) === clave(w); });
  /* Lugares en prepositivo: después de в / на, en una frase sin verbo de movimiento */
  const lugares = (t, prep) => { let n = 0; frases(t).forEach(f => { const w = pal(f); if (w.some(esMov)) return;
    for (let i = 0; i + 1 < w.length; i++) if ((prep ? [prep] : ["в", "на"]).indexOf(clave(w[i])) >= 0 && formaDe(w[i + 1], 5)) n++; }); return n; };
  const movimiento = t => frases(t).filter(f => pal(f).some(esMov)).length;
  const verbos = t => new Set(pal(t).map(w => { const v = info(w).find(x => (lexComerById(x[0]) || {}).posNormalized === "verbo"); return v ? v[0] : null; }).filter(Boolean)).size;
  m.requisitos = [
    { txt: "Entre 10 y 15 frases", fn: t => { const n = frases(t).length; return n >= 10 && n <= 15; } },
    { txt: "Al menos 5 lugares en prepositivo (в / на + -е)", fn: t => lugares(t) >= 5 },
    { txt: "Al menos 3 frases con в y 2 con на", fn: t => lugares(t, "в") >= 3 && lugares(t, "на") >= 2 },
    { txt: "Al menos 2 frases de movimiento (иду́, е́ду, хожу́, е́зжу…)", fn: t => movimiento(t) >= 2 },
    { txt: "Al menos 3 verbos distintos", fn: t => verbos(t) >= 3 }
  ];
  const NA = ["работа", "улица", "станция", "кухня", "балкон", "вокзал", "почта", "пляж"];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f), mov = w.some(esMov);
      for (let i = 0; i + 1 < w.length; i++) { const p = clave(w[i]); if (p !== "в" && p !== "на") continue;
        const sig = w[i + 1];
        info(sig).forEach(x => { const cz = casosById(x[0]); if (!cz || !cz.sg) return; const e = lexComerById(x[0]);
          if (NA.indexOf(clave(cz.sg[0])) >= 0 && p === "в") out.push("«" + cz.sg[0] + "» va con на: **на " + (mov ? cz.sg[3] : cz.sg[5]) + "**.");
          if (!mov && clave(cz.sg[0]) === clave(sig) && clave(cz.sg[5]) !== clave(sig)) out.push("Para decir dónde, después de " + w[i] + " va el prepositivo: **" + w[i] + " " + cz.sg[5] + "**.");
          if (mov && clave(cz.sg[5]) === clave(sig) && clave(cz.sg[3]) !== clave(sig)) out.push("Con movimiento (adónde), va el acusativo: **" + w[i] + " " + cz.sg[3] + "**.");
        }); } });
    return [...new Set(out)];
  } }];
})();

window.UNIDAD_6 = UNIDAD_6;
window.unidad6Modulo = unidad6Modulo;
window.ejerciciosUnidad6 = ejerciciosUnidad6;
window.u6Datos = u6Datos;
window.U6_MEZCLA = U6_MEZCLA;
