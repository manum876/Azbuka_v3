/* ============================================================
   DATA-UNIDAD-8.JS — Unidad 8: Pasado y experiencias personales
   ------------------------------------------------------------
   Versión 04/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 04/10/2026):
   · Pasado solo con los verbos que el alumno ya conoce (imperfectivos).
     Para «ayer», los de actividad (рабо́тал, чита́л, смотре́л, гуля́л…).
     Los de un momento (встава́л, просыпа́лся, возвраща́лся, ложи́лся)
     solo con ра́ньше, donde significan «antes solía». El aspecto no se
     enseña: una nota en la teoría («hay otra forma para acciones
     terminadas; la ves más adelante»).
   · Afuera: С кем? y встреча́ться с… (instrumental), Мне понра́вилось
     (dativo).
   · «Fui» = ходи́л / е́здил (ida y vuelta), no шёл.
   · на про́шлой неде́ле, в про́шлом ме́сяце, в про́шлом году́: fórmulas.
   · Palabra nueva en el léxico: ра́ньше. Почему́ (Unidad 5) vuelve con
     потому́ что.
   · Evaluación: 35 ejercicios; proyecto con dos partes: «Мой про́шлый
     день» y «Ра́ньше и сейча́с».
   Formas del pasado de Verbos, nunca a mano.
   ============================================================ */

/* Verbos: "ruso": [español (infinitivo), pretérito (yo, vos, él/ella, nosotros, ellos/ustedes), imperfecto o null, tipo]
   tipo: "a" (actividad: sirve para «ayer») · "m" (de un momento: solo con ра́ньше) · "x" (movimiento) · "b" (быть) */
const U8_VERBOS = {
  "рабо́тать": ["trabajar", ["trabajé", "trabajaste", "trabajó", "trabajamos", "trabajaron"], ["trabajaba", "trabajabas", "trabajaba", "trabajábamos", "trabajaban"], "a"],
  "жить": ["vivir", ["viví", "viviste", "vivió", "vivimos", "vivieron"], ["vivía", "vivías", "vivía", "vivíamos", "vivían"], "a"],
  "чита́ть": ["leer", ["leí", "leíste", "leyó", "leímos", "leyeron"], ["leía", "leías", "leía", "leíamos", "leían"], "a"],
  "писа́ть": ["escribir", ["escribí", "escribiste", "escribió", "escribimos", "escribieron"], null, "a"],
  "смотре́ть": ["mirar", ["miré", "miraste", "miró", "miramos", "miraron"], null, "a"],
  "слу́шать": ["escuchar", ["escuché", "escuchaste", "escuchó", "escuchamos", "escucharon"], null, "a"],
  "говори́ть": ["hablar", ["hablé", "hablaste", "habló", "hablamos", "hablaron"], ["hablaba", "hablabas", "hablaba", "hablábamos", "hablaban"], "a"],
  "изуча́ть": ["estudiar", ["estudié", "estudiaste", "estudió", "estudiamos", "estudiaron"], ["estudiaba", "estudiabas", "estudiaba", "estudiábamos", "estudiaban"], "a"],
  "учи́ться": ["estudiar (cursar)", ["estudié", "estudiaste", "estudió", "estudiamos", "estudiaron"], ["estudiaba", "estudiabas", "estudiaba", "estudiábamos", "estudiaban"], "a"],
  "гуля́ть": ["pasear", ["paseé", "paseaste", "paseó", "paseamos", "pasearon"], null, "a"],
  "отдыха́ть": ["descansar", ["descansé", "descansaste", "descansó", "descansamos", "descansaron"], null, "a"],
  "гото́вить": ["cocinar", ["cociné", "cocinaste", "cocinó", "cocinamos", "cocinaron"], null, "a"],
  "покупа́ть": ["comprar", ["compré", "compraste", "compró", "compramos", "compraron"], null, "a"],
  "де́лать": ["hacer", ["hice", "hiciste", "hizo", "hicimos", "hicieron"], null, "a"],
  "игра́ть": ["jugar", ["jugué", "jugaste", "jugó", "jugamos", "jugaron"], null, "a"],
  "спать": ["dormir", ["dormí", "dormiste", "durmió", "dormimos", "durmieron"], null, "a"],
  "есть": ["comer", ["comí", "comiste", "comió", "comimos", "comieron"], null, "a"],
  "пить": ["tomar", ["tomé", "tomaste", "tomó", "tomamos", "tomaron"], null, "a"],
  "за́втракать": ["desayunar", ["desayuné", "desayunaste", "desayunó", "desayunamos", "desayunaron"], null, "a"],
  "обе́дать": ["almorzar", ["almorcé", "almorzaste", "almorzó", "almorzamos", "almorzaron"], null, "a"],
  "у́жинать": ["cenar", ["cené", "cenaste", "cenó", "cenamos", "cenaron"], null, "a"],
  "ходи́ть": ["ir (a pie)", ["fui", "fuiste", "fue", "fuimos", "fueron"], null, "x"],
  "е́здить": ["ir (en vehículo)", ["fui", "fuiste", "fue", "fuimos", "fueron"], null, "x"],
  "быть": ["estar, ser", ["estuve", "estuviste", "estuvo", "estuvimos", "estuvieron"], null, "b"],
  "встава́ть": ["levantarse", null, ["me levantaba", "te levantabas", "se levantaba", "nos levantábamos", "se levantaban"], "m"],
  "просыпа́ться": ["despertarse", null, ["me despertaba", "te despertabas", "se despertaba", "nos despertábamos", "se despertaban"], "m"],
  "возвраща́ться": ["volver", null, ["volvía", "volvías", "volvía", "volvíamos", "volvían"], "m"],
  "ложи́ться": ["acostarse", null, ["me acostaba", "te acostabas", "se acostaba", "nos acostábamos", "se acostaban"], "m"]
};
/* Quién: [ruso, español, género del pasado (m / f / pl), índice del español (0 yo … 4 ellos)] */
const U8_SUJ = [["Я", "", "m", 0, "hombre"], ["Я", "", "f", 0, "mujer"], ["Ты", "Vos", "m", 1, "a un hombre"], ["Ты", "Vos", "f", 1, "a una mujer"], ["Он", "Él", "m", 2], ["Она́", "Ella", "f", 2],
  ["Мы", "", "pl", 3], ["Вы", "Ustedes", "pl", 4], ["Они́", "Ellos", "pl", 4], ["Ива́н", "Iván", "m", 2], ["А́нна", "Ana", "f", 2], ["Ма́ша", "Masha", "f", 2], ["Ди́ма", "Dima", "m", 2],
  ["Ма́ма", "Mamá", "f", 2], ["Па́па", "Papá", "m", 2], ["Брат", "Mi hermano", "m", 2], ["Сестра́", "Mi hermana", "f", 2], ["Де́ти", "Los chicos", "pl", 4]];
/* Complementos para «ayer»: verbo → [ruso, español] */
const U8_COMP = {
  "рабо́тать": [["до́ма", "en casa"], ["в о́фисе", "en la oficina"]], "чита́ть": [["кни́гу", "un libro"], ["газе́ту", "el diario"]], "писа́ть": [["письмо́", "una carta"]],
  "смотре́ть": [["фильм", "una película"], ["телеви́зор", "televisión"]], "слу́шать": [["му́зыку", "música"]], "говори́ть": [["по-ру́сски", "en ruso"]],
  "изуча́ть": [["ру́сский", "ruso"]], "гуля́ть": [["в па́рке", "por el parque"]], "отдыха́ть": [["до́ма", "en casa"]], "гото́вить": [["у́жин", "la cena"], ["суп", "sopa"]],
  "покупа́ть": [["хлеб", "pan"], ["молоко́", "leche"]], "игра́ть": [["", ""]], "спать": [["", ""]], "пить": [["ко́фе", "café"], ["чай", "té"]], "есть": [["пи́ццу", "pizza"], ["суп", "sopa"]],
  "обе́дать": [["в рестора́не", "en el restaurante"], ["до́ма", "en casa"]], "у́жинать": [["до́ма", "en casa"], ["в кафе́", "en el café"]], "за́втракать": [["до́ма", "en casa"]],
  "ходи́ть": [["в магази́н", "al negocio"], ["в кино́", "al cine"], ["в парк", "al parque"]], "е́здить": [["в Москву́", "a Moscú"], ["в Мадри́д", "a Madrid"], ["в Пари́ж", "a París"]],
  "быть": [["в Москве́", "en Moscú"], ["в рестора́не", "en el restaurante"], ["на рабо́те", "en el trabajo"], ["до́ма", "en casa"], ["в Пари́же", "en París"]]
};
const U8_TIEMPO = [["вчера́", "ayer"], ["вчера́ у́тром", "ayer a la mañana"], ["вчера́ ве́чером", "ayer a la noche"], ["неда́вно", "hace poco"], ["на про́шлой неде́ле", "la semana pasada"],
  ["в про́шлом ме́сяце", "el mes pasado"], ["в про́шлом году́", "el año pasado"]];
const U8_CONECT = { "снача́ла": "primero", "пото́м": "después", "зате́м": "luego", "наконе́ц": "finalmente", "но": "pero", "потому́ что": "porque" };

const U8_VISTAS = { 2: "игра́ть", 4: "неда́вно про́шлый", 6: "интере́сно", 8: "снача́ла зате́м наконе́ц но потому́", 10: "ра́ньше тогда́" };

const U8_LECTURAS = [
  { id: "dia", titulo: "Вчера́", lineas: [
      ["Вчера́ я рабо́тал.", "Ayer trabajé."], ["У́тром я был до́ма.", "A la mañana estuve en casa."], ["Днём я рабо́тал в о́фисе.", "A la tarde trabajé en la oficina."],
      ["Ве́чером я ходи́л в магази́н.", "A la noche fui al negocio."], ["Пото́м я гото́вил у́жин и смотре́л фильм.", "Después cociné la cena y miré una película."]],
    preguntas: [["¿Dónde estuvo a la mañana?", "до́ма", ["в о́фисе", "в магази́не"]], ["¿Adónde fue a la noche?", "в магази́н", ["в кино́", "в парк"]], ["¿Qué miró?", "фильм", ["телеви́зор", "футбо́л"]]],
    vf: [["У́тром я был в о́фисе.", false], ["Ве́чером я гото́вил у́жин.", true], ["Днём я рабо́тал.", true]] },
  { id: "finde", titulo: "В суббо́ту", lineas: [
      ["В суббо́ту А́нна и Ива́н бы́ли в це́нтре.", "El sábado Ana e Iván estuvieron en el centro."], ["Снача́ла они́ гуля́ли в па́рке.", "Primero pasearon por el parque."],
      ["Пото́м они́ обе́дали в рестора́не.", "Después almorzaron en el restaurante."], ["Ве́чером они́ ходи́ли в кино́.", "A la noche fueron al cine."], ["Э́то бы́ло интере́сно.", "Fue interesante."]],
    preguntas: [["¿Qué hicieron primero?", "гуля́ли в па́рке", ["обе́дали в рестора́не", "ходи́ли в кино́"]], ["¿Dónde almorzaron?", "в рестора́не", ["в кафе́", "до́ма"]], ["¿Cómo fue?", "интере́сно", ["хо́лодно", "пло́хо"]]],
    vf: [["Они́ бы́ли в це́нтре.", true], ["Снача́ла они́ ходи́ли в кино́.", false], ["Ве́чером они́ ходи́ли в кино́.", true]] },
  { id: "viaje", titulo: "В Москве́", lineas: [
      ["В про́шлом ме́сяце Ма́ша е́здила в Москву́.", "El mes pasado Masha fue a Moscú."], ["Она́ была́ там неде́лю.", "Estuvo allá una semana."],
      ["Она́ гуля́ла в це́нтре и говори́ла по-ру́сски.", "Paseó por el centro y habló en ruso."], ["Бы́ло хо́лодно, но интере́сно.", "Hacía frío, pero fue interesante."]],
    preguntas: [["¿Adónde fue Masha?", "в Москву́", ["в Москве́", "в Пари́ж"]], ["¿Cuándo?", "в про́шлом ме́сяце", ["вчера́", "в про́шлом году́"]], ["¿Cómo estaba el tiempo?", "хо́лодно", ["интере́сно", "пло́хо"]]],
    vf: [["Ма́ша говори́ла по-ру́сски.", true], ["Бы́ло пло́хо.", false], ["Она́ была́ там неде́лю.", true]] },
  { id: "antes", titulo: "Ра́ньше и сейча́с", lineas: [
      ["Ра́ньше Лу́кас жил в Буэ́нос-А́йресе.", "Antes Lucas vivía en Buenos Aires."], ["Тогда́ он рабо́тал в ба́нке.", "En ese entonces trabajaba en un banco."],
      ["Он встава́л в шесть часо́в.", "Se levantaba a las seis."], ["Тепе́рь он живёт в Барсело́не.", "Ahora vive en Barcelona."], ["Сейча́с он рабо́тает до́ма и изуча́ет ру́сский.", "Ahora trabaja en casa y estudia ruso."]],
    preguntas: [["¿Dónde vivía Lucas antes?", "в Буэ́нос-А́йресе", ["в Барсело́не", "в Москве́"]], ["¿Dónde trabajaba?", "в ба́нке", ["до́ма", "в о́фисе"]], ["¿Dónde vive ahora?", "в Барсело́не", ["в Буэ́нос-А́йресе", "в Мадри́де"]]],
    vf: [["Ра́ньше Лу́кас жил в Барсело́не.", false], ["Сейча́с он изуча́ет ру́сский.", true], ["Ра́ньше он встава́л в шесть часо́в.", true]] }
];

const UNIDAD_8 = {
  id: 8,
  titulo: "Pasado y experiencias personales",
  tituloRu: "Проше́дшее вре́мя и ли́чный о́пыт",
  objetivo: "Contar lo que hiciste ayer o hace un tiempo, dónde estuviste, cómo fue, y comparar antes y ahora.",
  tiempo: "30–40 horas",
  modulos: [
    { id: "u8m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "¿Qué pasó?", resumen: "Я рабо́таю → Я рабо́тал.",
      intro: "Hasta acá todo era presente. Ahora empezás a contar lo que pasó.",
      secciones: [
        { titulo: "Ahora y antes", texto: "Я рабо́таю («trabajo») → Я рабо́тал («trabajé»).\nЯ живу́ в Барсело́не → Я жил в Барсело́не.\nЯ чита́ю кни́гу → Я чита́л кни́гу.\nЯ смотрю́ фильм → Я смотре́л фильм.", destacado: "Я рабо́таю → Я рабо́тал." },
        { titulo: "Una buena noticia", texto: "El pasado ruso es mucho más fácil que el español: no cambia según la persona (yo, vos, él…), sino según el género y el número de quien hace la acción. Lo ves en el módulo 2." }
      ] },
    { id: "u8m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Cómo se forma el pasado", resumen: "-л, -ла, -ло, -ли.",
      intro: "Se toma el infinitivo, se le saca -ть y se agrega la terminación según quién hace la acción.",
      secciones: [
        { titulo: "Cuatro terminaciones", texto: "чита́ть → чита́-:\nон чита́л (masculino)\nона́ чита́ла (femenino)\nоно́ чита́ло (neutro)\nони́ чита́ли (plural)", destacado: "-л · -ла · -ло · -ли" },
        { titulo: "Igual con casi todos", texto: "рабо́тать → рабо́тал, рабо́тала, рабо́тали\nжить → жил, жила́, жи́ли\nговори́ть → говори́л, говори́ла, говори́ли" },
        { titulo: "Algunos especiales", texto: "есть → ел, е́ла, е́ли. Los verbos con -ся agregan -ся o -сь al final: учи́ться → учи́лся (él), учи́лась (ella), учи́лись (ellos). Están todos en las tarjetas.", truco: "Infinitivo sin -ть + л / ла / ло / ли." }
      ] },
    { id: "u8m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Género y pasado", resumen: "Ива́н рабо́тал. А́нна рабо́тала.",
      intro: "El pasado cambia según quién hace la acción: si es hombre, mujer o varios.",
      secciones: [
        { titulo: "Hombre, mujer, varios", texto: "Ива́н рабо́тал. А́нна рабо́тала. Мы рабо́тали. Они́ рабо́тали. Де́ти игра́ли («los chicos jugaban»)." },
        { titulo: "Я y ты dependen de quién sos", texto: "Un hombre dice Я рабо́тал; una mujer, Я рабо́тала. Igual con ты: a un amigo, Ты рабо́тал?; a una amiga, Ты рабо́тала?", destacado: "Él: Я рабо́тал · Ella: Я рабо́тала" },
        { titulo: "Вы y мы: siempre plural", texto: "Мы рабо́тали, вы рабо́тали, они́ рабо́тали. Con вы va el plural aunque le hables con respeto a una sola persona." }
      ] },
    { id: "u8m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Ayer y antes", resumen: "вчера́, неда́вно, на про́шлой неде́ле…",
      intro: "Las palabras para decir cuándo pasó algo.",
      secciones: [
        { titulo: "Cuándo", texto: "вчера́ (ayer), вчера́ у́тром (ayer a la mañana), вчера́ ве́чером (ayer a la noche), неда́вно (hace poco)." },
        { titulo: "La semana pasada, el mes pasado, el año pasado", texto: "на про́шлой неде́ле\nв про́шлом ме́сяце\nв про́шлом году́\nVan así, como fórmulas: В про́шлом году́ я жил в Мадри́де («el año pasado viví en Madrid»).", destacado: "Вчера́ ве́чером я смотре́л фильм." }
      ] },
    { id: "u8m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Verbos de todos los días", resumen: "рабо́тал, чита́л, ходи́л в магази́н…",
      intro: "Los verbos que ya conocés, ahora en pasado, para contar lo que hiciste.",
      secciones: [
        { titulo: "En frases", texto: "Вчера́ я рабо́тал. Пото́м я ходи́л в магази́н. Ве́чером я смотре́л фильм. Де́ти игра́ли в па́рке («los chicos jugaron en el parque»)." },
        { titulo: "«Fui»: ходи́л y е́здил", texto: "Para decir «fui al cine» se usa ходи́л (a pie) o е́здил (en vehículo): significa «fui y volví». Я ходи́л в кино́ («fui al cine»). Мы е́здили в Москву́ («fuimos a Moscú»). Como en la Unidad 6, después va el acusativo: adónde.", destacado: "Я ходи́л в кино́. = Fui al cine." },
        { titulo: "Una forma más, más adelante", texto: "Para acciones terminadas en un momento («me desperté», «volví») el ruso tiene otra forma del verbo, que vas a ver más adelante. Por ahora contá lo que hiciste con estos verbos." }
      ] },
    { id: "u8m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Был, была́, бы́ло, бы́ли", resumen: "Я был в Москве́.",
      intro: "En presente, быть no se dice (Я до́ма). En pasado sí: Я был до́ма.",
      secciones: [
        { titulo: "Dónde estuviste", texto: "Где ты? — Я в Барсело́не. → Где ты был вчера́? — Я был в Барсело́не.\nОна́ была́ на рабо́те. Мы бы́ли до́ма.", destacado: "был · была́ · бы́ло · бы́ли" },
        { titulo: "Cómo fue", texto: "Para decir cómo fue algo, бы́ло: Э́то бы́ло интере́сно («fue interesante»). Вчера́ бы́ло хо́лодно («ayer hizo frío»)." }
      ] },
    { id: "u8m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "¿Qué hiciste?", resumen: "Что ты де́лал вчера́?",
      intro: "Preguntar y contestar sobre lo que pasó.",
      secciones: [
        { titulo: "Las preguntas", texto: "Что ты де́лал вчера́? («¿qué hiciste ayer?», a un hombre) · Что ты де́лала? (a una mujer) · Где ты был? · Что вы де́лали? · Когда́ э́то бы́ло? («¿cuándo fue?»)" },
        { titulo: "Contestar", texto: "Что ты де́лал вчера́? — Вчера́ я рабо́тал, пото́м ходи́л в магази́н, а ве́чером смотре́л фильм." }
      ] },
    { id: "u8m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Contar en orden", resumen: "снача́ла, пото́м, зате́м, наконе́ц.",
      intro: "Para contar un día, no alcanza con frases sueltas: hacen falta palabras que las unan.",
      secciones: [
        { titulo: "El orden", texto: "снача́ла (primero)\nпото́м (después)\nзате́м (luego)\nнаконе́ц (finalmente)", destacado: "Снача́ла я за́втракал, пото́м рабо́тал, наконе́ц отдыха́л." },
        { titulo: "Но y потому́ что", texto: "но (pero): Бы́ло хо́лодно, но интере́сно. Потому́ что (porque) responde a почему́, la pregunta de la Unidad 5: Почему́ ты был до́ма? — Потому́ что бы́ло хо́лодно («¿por qué estuviste en casa? — Porque hizo frío»)." }
      ] },
    { id: "u8m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Experiencias", resumen: "Я был в Москве́. Я е́здил в Пари́ж.",
      intro: "Más allá de ayer: viajes y lugares donde estuviste.",
      secciones: [
        { titulo: "Dónde estuviste y adónde fuiste", texto: "Я был в Пари́же («estuve en París»): prepositivo, dónde. Я е́здил в Пари́ж («fui a París»): acusativo, adónde. Las dos dicen casi lo mismo, con el caso de la Unidad 6 que corresponde.", destacado: "был в Пари́же · е́здил в Пари́ж" }
      ] },
    { id: "u8m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Antes y ahora", resumen: "Ра́ньше я жил…, а тепе́рь я живу́…",
      intro: "Comparar el pasado con el presente: lo que hacías antes y lo que hacés ahora.",
      secciones: [
        { titulo: "Ра́ньше y тепе́рь", texto: "ра́ньше (antes) y тогда́ (en ese entonces) van con pasado; сейча́с y тепе́рь (ahora) van con presente. Тепе́рь marca el cambio: «ahora, en cambio».\nРа́ньше я жил в Буэ́нос-А́йресе, а тепе́рь я живу́ в Барсело́не." },
        { titulo: "Lo que solías hacer", texto: "Con ра́ньше, el pasado dice lo que hacías siempre: Ра́ньше я встава́л в шесть часо́в («antes me levantaba a las seis»). Ра́ньше я не говори́л по-ру́сски («antes no hablaba ruso»).", truco: "ра́ньше / тогда́ → pasado · сейча́с / тепе́рь → presente" }
      ] },
    { id: "u8m11", n: 11, tipo: "lectura", titulo: "Lectura", resumen: "Un día, un fin de semana, un viaje, antes y ahora.",
      intro: "Cuatro textos cortos con todo lo de la unidad. Leelos, escuchalos y después contestá." },
    { id: "u8m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мой про́шлый день", resumen: "Tu día de ayer, y antes y ahora.",
      intro: "Escribí cómo fue tu día de ayer, en orden: dónde estuviste, qué hiciste, cómo fue. Por ejemplo: Вчера́ я рабо́тал. Снача́ла я за́втракал до́ма. Пото́м я был на рабо́те. Ве́чером мы ходи́ли в кино́. Э́то бы́ло интере́сно.",
      requisitos: [], consejos: [] },
    { id: "u8m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Formar el pasado, género, был, transformar, traducción y audio.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Formar el pasado", tipos: ["pasado", "pasado-elegir"], n: 6 },
        { nombre: "Género y número", tipos: ["genero", "genero-escribir", "detectar"], n: 6 },
        { nombre: "Был, была́…", tipos: ["byl"], n: 5 },
        { nombre: "Presente → pasado", tipos: ["transformar"], n: 5 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 6 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
/* Segunda parte del proyecto (página: debajo de la primera) */
const U8_PROYECTO2 = { id: "u8p2", titulo: "Ра́ньше и сейча́с",
  intro: "Ahora compará: qué hacías antes y qué hacés ahora. Por ejemplo: Ра́ньше я жил в Буэ́нос-А́йресе, а тепе́рь я живу́ в Барсело́не. Ра́ньше я не говори́л по-ру́сски. Сейча́с я изуча́ю ру́сский.",
  requisitos: [], consejos: [] };

/* Además, la terminación -л va sin negrita, igual que -ла, -ло, -ли (Manu, 05/10/2026) */
function u8Palabras(t) { return String(t).replace(/(^|[^А-Яа-яЁё\u0301{])-л(?![А-Яа-яЁё\u0301}])/g, "$1-{л}").replace(/(\+ )л( \/)/g, "$1{л}$2").replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_8.modulos.concat([U8_PROYECTO2]).forEach(m => {
  if (m.intro) m.intro = u8Palabras(m.intro);
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u8Palabras(s[k]); }));
});
function unidad8Modulo(id) { return UNIDAD_8.modulos.find(m => m.id === id) || null; }

const U8_MEZCLA = { "ahora-antes": 1, transformar: 2, pasado: 3, "pasado-elegir": 1, genero: 1, "genero-escribir": 2, detectar: 1, cuando: 1, "es-ru": 3, dictado: 3, byl: 2,
  pregunta: 2, respuesta: 2, conector: 1, ordenar: 1, porque: 1, experiencia: 1, "antes-ahora": 2, emparejar: 1, significado: 1, "palabra-es-ru": 1, lectura: 2, "lectura-vf": 1 };

/* ── Datos ─────────────────────────────────────────────────── */
function u8Datos() {
  if (u8Datos.cache) return u8Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null;
  const verb = {};
  Object.keys(U8_VERBOS).forEach(ru => {
    const e = lex(ru, "verbo"), v = e && verboById(e.id); if (!v || !v.pasado) return;
    const x = U8_VERBOS[ru];
    verb[sin(ru)] = { id: e.id, ac: e.acento, p: v.pasado, pres: v.presente, es: x[0], pret: x[1], imp: x[2], tipo: x[3] };
  });
  return (u8Datos.cache = { sin, lex, verb });
}
/* «**рабо́тать → она́ рабо́тала**: femenino, -ла» */
function u8Regla(v, g) {
  const fin = { m: "-л", f: "-ла", n: "-ло", pl: "-ли" }[g], quien = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" }[g];
  return "**" + v.ac + " → " + v.p[g] + "**: " + quien + ", " + fin + ".";
}

function ejerciciosUnidad8() {
  const { sin, lex, verb } = u8Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?]/g, "");
  const V = k => verb[sin(k)];
  const activ = Object.keys(U8_VERBOS).filter(k => V(k) && V(k).tipo === "a");
  const activAyer = activ.filter(k => k !== "жить");   /* «ayer viví» no tiene sentido: жить va con ра́ньше (módulo 10) */
  /* Frase en pasado: sujeto s (de U8_SUJ), verbo, complemento, tiempo opcional */
  const frase = (s, vk, comp, tiempo) => {
    const v = V(vk), g = s[2], f = v.p[g];
    const nombre = /^(Ива́н|А́нна|Ма́ша|Ди́ма)$/.test(s[0]);
    const sujRu = tiempo && !nombre ? s[0].toLowerCase() : s[0];
    const sujEs = s[1] && tiempo && !nombre ? s[1].charAt(0).toLowerCase() + s[1].slice(1) : s[1];
    const ru = (tiempo ? cap(tiempo[0]) + " " : "") + sujRu + " " + f + (comp && comp[0] ? " " + comp[0] : "") + ".";
    const esV = v.pret[s[3]];
    const es = cap(((tiempo ? tiempo[1] + " " : "") + (sujEs ? sujEs + " " : "") + esV + (comp && comp[1] ? " " + comp[1] : "")).trim()) + ".";
    const esperadas = [ru];
    if (s[0] === "Я" || s[0] === "Ты") { const otro = U8_SUJ.find(x => x[0] === s[0] && x[2] !== g); if (otro) esperadas.push(ru.replace(" " + f + " ", " " + v.p[otro[2]] + " ").replace(" " + f + ".", " " + v.p[otro[2]] + ".")); }
    return { ru, es, esperadas, v, g, f };
  };
  const pista = s => s[4] ? " (" + (s[0] === "Я" ? "sos " + s[4] : "le hablás " + s[4]) + ")" : "";

  /* ── Módulo 1: ahora o antes ── */
  ["рабо́тать", "изуча́ть", "чита́ть", "смотре́ть", "гуля́ть", "гото́вить", "слу́шать", "говори́ть"].forEach((vk, j) => {
    const v = V(vk), comp = (U8_COMP[vk] || [["", ""]])[0], s = U8_SUJ[[0, 1, 4, 5, 6, 8][j % 6]];
    const iPres = { "Я": 0, "Ты": 1, "Мы": 3, "Вы": 4, "Они́": 5, "Де́ти": 5 }[s[0]] != null ? { "Я": 0, "Ты": 1, "Мы": 3, "Вы": 4, "Они́": 5, "Де́ти": 5 }[s[0]] : 2;
    const pres = s[0] + " " + v.pres[iPres] + (comp[0] ? " " + comp[0] : "") + ".";
    const pas = frase(s, vk, comp);
    const base = { grupo: "AA-" + j, items: ["lex:" + v.id], oir: pas.ru };
    out.push(Object.assign({ id: "U8-aa-p-" + j, tipo: "ahora-antes", forma: "elegir", dificultad: 1, modulo: 1, pide: "¿Ahora o antes?", grande: pas.ru, audio: pas.ru,
      opciones: ["Ahora", "Antes (pasado)"], correcta: "Antes (pasado)", explicacion: "**" + pas.f + "** termina en " + { m: "-л", f: "-ла", pl: "-ли" }[pas.g] + ": es pasado. " + pas.ru + " — " + pas.es }, base));
    out.push(Object.assign({ id: "U8-aa-n-" + j, tipo: "ahora-antes", forma: "elegir", dificultad: 1, modulo: 1, pide: "¿Ahora o antes?", grande: pres, audio: pres,
      opciones: ["Ahora", "Antes (pasado)"], correcta: "Ahora", explicacion: "**" + v.pres[iPres] + "** es presente: " + pres }, base));
    out.push(Object.assign({ id: "U8-tr1-" + j, tipo: "transformar", forma: "escribir", dificultad: 2, modulo: 1, pide: "Pasala al pasado" + pista(s) + ".", grande: pres, audio: pas.ru, audioManual: true,
      esperadas: pas.esperadas, idioma: "ru", explicacion: u8Regla(v, pas.g) + " " + pas.ru + " — " + pas.es }, base));
  });

  /* ── Módulo 2: formar el pasado ── */
  activ.concat(["ходи́ть", "е́здить"]).forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    const base = { items: ["lex:" + v.id] };
    [["он", "m"], ["она́", "f"], ["они́", "pl"]].forEach(([pr, g], k) => {
      out.push(Object.assign({ id: "U8-pas-" + v.id + "-" + g, grupo: v.id + "-" + g, tipo: "pasado", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribí el pasado.", grande: pr + " + " + v.ac,
        audio: cap(pr) + " " + v.p[g], audioManual: true, esperadas: [v.p[g], cap(pr) + " " + v.p[g]], idioma: "ru", explicacion: u8Regla(v, g) }, base));
    });
    out.push(Object.assign({ id: "U8-pel-" + v.id, grupo: v.id + "-e", tipo: "pasado-elegir", forma: "elegir", dificultad: 1, modulo: 2, pide: "Elegí el pasado de «" + v.ac + "» para она́.", grande: "Она́ _____",
      opciones: baraja(uniq([v.p.f, v.p.m, v.p.pl, v.pres ? v.pres[2] : v.p.n]), j), correcta: v.p.f, explicacion: u8Regla(v, "f") }, base));
    if (j % 3 === 0) out.push(Object.assign({ id: "U8-pemp-" + v.id, grupo: v.id + "-p", tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 2, pide: "Uní cada persona con su forma de «" + v.ac + "».",
      pares: [["он", v.p.m], ["она́", v.p.f], ["оно́", v.p.n], ["они́", v.p.pl]], explicacion: v.ac + ": " + v.p.m + " · " + v.p.f + " · " + v.p.n + " · " + v.p.pl }, base));
  });

  /* ── Módulo 3: género ── */
  activAyer.forEach((vk, j) => {
    const v = V(vk), comp = (U8_COMP[vk] || [["", ""]])[j % (U8_COMP[vk] || [1]).length] || ["", ""];
    const s = U8_SUJ[[9, 10, 11, 12, 13, 14, 15, 16, 17, 6, 8][j % 11]], f = frase(s, vk, comp, j % 2 ? U8_TIEMPO[0] : null);
    const base = { grupo: "G-" + j, items: ["lex:" + v.id], oir: f.ru };
    const hueco = f.ru.replace(" " + f.f + (comp[0] ? " " : "."), " _____" + (comp[0] ? " " : "."));
    out.push(Object.assign({ id: "U8-gen-" + j, tipo: "genero", forma: "elegir", dificultad: 1, modulo: 3, pide: "Completá: «" + f.es + "»", grande: hueco,
      opciones: baraja(uniq([v.p.m, v.p.f, v.p.pl]), j), correcta: f.f, explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-genw-" + j, tipo: "genero-escribir", forma: "escribir", dificultad: 2, modulo: 3, pide: "Completá con «" + v.ac + "» en pasado.", grande: hueco, pista: f.es,
      audio: f.ru, audioManual: true, esperadas: [f.f], idioma: "ru", explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    /* Detectá el error: el género que no va */
    const malG = f.g === "f" ? "m" : "f", malF = v.p[malG];
    if (j % 2 === 0) { const pals = sinP(f.ru).split(" "), k = pals.indexOf(f.f); if (k >= 0) { pals[k] = malF;
      out.push(Object.assign({ id: "U8-det-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, pide: "Tocá la palabra que está mal.", palabras: pals, correcta: k,
        explicacion: "**" + malF + "** no va con " + s[0] + ": " + u8Regla(v, f.g) + " " + f.ru }, base)); } }
  });
  /* Ива́н рабо́тал → А́нна ___ */
  [["Ива́н", "А́нна", "рабо́тать"], ["Брат", "Сестра́", "чита́ть"], ["Па́па", "Ма́ма", "гото́вить"], ["Ди́ма", "Ма́ша", "гуля́ть"], ["А́нна", "Мы", "отдыха́ть"], ["Сестра́", "Де́ти", "игра́ть"]].forEach(([a, b, vk], j) => {
    const v = V(vk), A = U8_SUJ.find(x => x[0] === a), B = U8_SUJ.find(x => x[0] === b);
    const ru = b + " " + v.p[B[2]] + ".";
    out.push({ id: "U8-gtr-" + j, tipo: "genero-escribir", forma: "escribir", dificultad: 2, modulo: 3, grupo: "GT-" + j, items: ["lex:" + v.id], oir: ru, pide: "Cambiá quién lo hace: " + b + ".",
      grande: a + " " + v.p[A[2]] + ".", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: u8Regla(v, B[2]) + " " + ru });
  });

  /* ── Módulo 4: cuándo ── */
  U8_TIEMPO.forEach(([ru, es], j) => {
    out.push({ id: "U8-tsig-" + j, tipo: "cuando", forma: "elegir", dificultad: 1, modulo: 4, grupo: "T-" + j, items: [], oir: ru, pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja([ru].concat(baraja(U8_TIEMPO.filter(x => x[0] !== ru).map(x => x[0]), j).slice(0, 2)), j), correcta: ru, explicacion: ru + " — " + es });
    out.push({ id: "U8-tw-" + j, tipo: "cuando", forma: "escribir", dificultad: 2, modulo: 4, grupo: "TW-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  ["рабо́тать", "смотре́ть", "чита́ть", "гуля́ть", "гото́вить", "у́жинать", "покупа́ть", "слу́шать"].forEach((vk, j) => {
    const v = V(vk), comp = (U8_COMP[vk] || [["", ""]])[0], s = U8_SUJ[[0, 1, 4, 5, 6, 9, 10, 8][j % 8]], t = U8_TIEMPO[(j + 1) % U8_TIEMPO.length];
    const f = frase(s, vk, comp, t), base = { grupo: "C-" + j, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U8-cesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribí en ruso: «" + f.es + "»" + pista(s), audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-cdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 4, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: f.ru + " — " + f.es }, base));
  });

  /* ── Módulo 5: verbos de todos los días (frases) y ходи́л / е́здил ── */
  activAyer.concat(["ходи́ть", "е́здить"]).forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    (U8_COMP[vk] || [["", ""]]).forEach((comp, c) => {
      const s = U8_SUJ[(j * 3 + c * 5) % 9], f = frase(s, vk, comp, c % 2 ? null : U8_TIEMPO[0]);
      const base = { grupo: "V-" + j + "-" + c, items: ["lex:" + v.id], oir: f.ru };
      const exp = u8Regla(v, f.g) + (v.tipo === "x" ? " En pasado, «fui» es ходи́л / е́здил: fui y volví." : "") + " " + f.ru + " — " + f.es;
      out.push(Object.assign({ id: "U8-vesru-" + j + "-" + c, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribí en ruso: «" + f.es + "»" + pista(s), audio: f.ru, audioManual: true,
        esperadas: f.esperadas, idioma: "ru", explicacion: exp }, base));
      if (c === 0) out.push(Object.assign({ id: "U8-vdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: exp }, base));
      if (c === 0 && j % 2 === 0) { const w = sinP(f.ru).split(" "); let fi = baraja(w, j + 3); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
        out.push(Object.assign({ id: "U8-vord-" + j, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: 5, pide: "Ordená: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: w.join(" "), explicacion: exp }, base)); }
    });
  });

  /* ── Módulo 6: был ── */
  U8_COMP["быть"].forEach((comp, c) => [0, 1, 5, 6, 9, 10].forEach((si, k) => {
    if ((c + k) % 2) return;
    const s = U8_SUJ[si], v = V("быть"), f = frase(s, "быть", comp, k % 3 === 0 ? U8_TIEMPO[0] : null);
    const pres = s[0] + " " + comp[0] + ".";
    const base = { grupo: "B-" + c + "-" + k, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U8-byl-" + c + "-" + k, tipo: "byl", forma: "elegir", dificultad: 1, modulo: 6, pide: "Completá: «" + f.es + "»", grande: f.ru.replace(" " + f.f + " ", " _____ "),
      opciones: ["был", "была́", "бы́ло", "бы́ли"], correcta: f.f, explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-bytr-" + c + "-" + k, tipo: "transformar", forma: "escribir", dificultad: 2, modulo: 6, pide: "Pasala al pasado" + pista(s) + ".", grande: pres, audio: f.ru, audioManual: true,
      esperadas: f.esperadas.map(x => x.replace(/^Вчера́ [а-яё́]+ /i, m => m)).concat(f.esperadas.map(x => x.replace(/^Вчера́ /, "").replace(/^([а-яё])/, m => m.toUpperCase()))), idioma: "ru",
      explicacion: "En presente быть no se dice; en pasado sí: " + f.ru }, base));
  }));
  [["Э́то бы́ло интере́сно.", "Fue interesante."], ["Вчера́ бы́ло хо́лодно.", "Ayer hizo frío."], ["Бы́ло хо́лодно, но интере́сно.", null], ["Э́то бы́ло вчера́.", "Fue ayer."]].forEach(([ru, es], j) => {
    if (!es) return;
    out.push({ id: "U8-bylo-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 6, grupo: "BO-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " Para decir cómo fue algo, **бы́ло**." });
  });
  /* ¿Dónde estuviste? con emoji */
  [["🏦", "в ба́нке"], ["🍽️", "в рестора́не"], ["🏠", "до́ма"], ["💼", "на рабо́те"], ["🌳", "в па́рке"], ["🎬", "в кино́"]].forEach(([em, lugar], j) => {
    const q = j % 2 ? "Где ты была́ вчера́?" : "Где ты был вчера́?", f = j % 2 ? "была́" : "был";
    const ru = "Я " + f + " " + lugar + ".";
    out.push({ id: "U8-bsc-" + j, tipo: "byl", forma: "escribir", dificultad: 2, modulo: 6, grupo: "BS-" + j, items: [], oir: ru, contexto: [{ p: "—", ru: q }], pide: "Mirá el dibujo y contestá.", grande: em,
      audio: q, audioManual: true, esperadas: [ru, "Вчера́ я " + f + " " + lugar + ".", cap(lugar) + "."], idioma: "ru", explicacion: "— " + q + " — " + ru + (j % 2 ? " (la pregunta es a una mujer: была́)." : "") });
  });

  /* ── Módulo 7: preguntas y respuestas ── */
  [["Что ты де́лал вчера́?", "¿Qué hiciste ayer? (a un hombre)"], ["Что ты де́лала вчера́?", "¿Qué hiciste ayer? (a una mujer)"], ["Где ты был?", "¿Dónde estuviste? (a un hombre)"],
   ["Где ты была́?", "¿Dónde estuviste? (a una mujer)"], ["Что вы де́лали?", "¿Qué hicieron ustedes?"], ["Когда́ э́то бы́ло?", "¿Cuándo fue?"], ["Где вы бы́ли вчера́?", "¿Dónde estuvieron ayer?"]].forEach(([ru, es], j) => {
    out.push({ id: "U8-preg-" + j, tipo: "pregunta", forma: "escribir", dificultad: 3, modulo: 7, grupo: "PQ-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [["🎬", "смотре́ть", "фильм"], ["💻", "рабо́тать", ""], ["📖", "чита́ть", "кни́гу"], ["🍳", "гото́вить", "у́жин"], ["🌳", "гуля́ть", "в па́рке"], ["😴", "спать", ""]].forEach(([em, vk, comp], j) => {
    const v = V(vk), fem = j % 2 === 1, q = "Что ты " + (fem ? "де́лала" : "де́лал") + " вчера́?", f = fem ? v.p.f : v.p.m;
    const ru = "Я " + f + (comp ? " " + comp : "") + ".";
    out.push({ id: "U8-resp-" + j, tipo: "respuesta", forma: "escribir", dificultad: 2, modulo: 7, grupo: "RS-" + j, items: ["lex:" + v.id], oir: ru, contexto: [{ p: "—", ru: q }],
      pide: em + " Contestá en ruso.", audio: q, audioManual: true, esperadas: [ru, "Вчера́ я " + f + (comp ? " " + comp : "") + "."], idioma: "ru",
      explicacion: "— " + q + " — " + ru + (fem ? " La pregunta es a una mujer: la respuesta va en femenino." : "") });
    out.push({ id: "U8-pgen-" + j, tipo: "pregunta", forma: "elegir", dificultad: 1, modulo: 7, grupo: "PG-" + j, items: [], oir: q, pide: "Le preguntás " + (fem ? "a una amiga" : "a un amigo") + ": «¿Qué hiciste ayer?»",
      opciones: ["Что ты де́лал вчера́?", "Что ты де́лала вчера́?"], correcta: q, explicacion: q + (fem ? " A una mujer: де́лала." : " A un hombre: де́лал.") });
  });

  /* ── Módulo 8: conectores, porque ── */
  Object.keys(U8_CONECT).forEach((w, j) => {
    out.push({ id: "U8-cosig-" + j, tipo: "conector", forma: "elegir", dificultad: 1, modulo: 8, grupo: "CO-" + j, items: [], oir: w, pide: "¿Qué significa?", grande: w, audio: w,
      opciones: baraja([U8_CONECT[w]].concat(baraja(Object.values(U8_CONECT).filter(x => x !== U8_CONECT[w]), j).slice(0, 2)), j), correcta: U8_CONECT[w], explicacion: w + " — " + U8_CONECT[w] });
  });
  [["Снача́ла я за́втракал.", "Пото́м я рабо́тал.", "Ве́чером я гуля́л.", "Наконе́ц я спал."], ["Снача́ла мы бы́ли в це́нтре.", "Пото́м мы обе́дали в рестора́не.", "Зате́м мы ходи́ли в кино́.", "Наконе́ц мы бы́ли до́ма."]].forEach((L, j) => {
    let fi = baraja(L, j + 4); if (fi.join("|") === L.join("|")) fi = fi.slice(1).concat(fi[0]);
    out.push({ id: "U8-seq-" + j, tipo: "conector", forma: "ordenar", dificultad: 2, modulo: 8, grupo: "SQ-" + j, items: [], pide: "Ordená el relato.", fichas: fi, sep: "\n", esperada: L.join("\n"), audio: L.join(" "),
      explicacion: "снача́ла → пото́м → зате́м / ве́чером → наконе́ц. " + L.join(" ") });
  });
  [["Почему́ ты был до́ма?", "Потому́ что бы́ло хо́лодно.", "Porque hizo frío."], ["Почему́ ты не рабо́тал?", "Потому́ что я был в Москве́.", "Porque estuve en Moscú."],
   ["Почему́ вы бы́ли в це́нтре?", "Потому́ что мы ходи́ли в кино́.", "Porque fuimos al cine."], ["Почему́ ты не спал?", "Потому́ что я чита́л кни́гу.", "Porque leí un libro."]].forEach(([q, r, es], j) => {
    out.push({ id: "U8-pq-" + j, tipo: "porque", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PQR-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: "Contestá: «" + es + "»", audio: q, audioManual: true,
      esperadas: [r], idioma: "ru", explicacion: "— " + q + " — " + r + " Почему́? → Потому́ что…" });
  });
  [["Бы́ло хо́лодно, но интере́сно.", "Hizo frío, pero fue interesante."], ["Я рабо́тал, но ве́чером гуля́л.", "Trabajé, pero a la noche paseé."], ["Снача́ла я чита́л, пото́м смотре́л фильм.", "Primero leí, después miré una película."]].forEach(([ru, es], j) => {
    out.push({ id: "U8-coesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "CE-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "» (sos hombre)", audio: ru, audioManual: true,
      esperadas: [ru, ru.replace(/(рабо́тал|гуля́л|чита́л|смотре́л)/g, "$1а")], idioma: "ru", explicacion: ru });
  });

  /* ── Módulo 9: experiencias (был в / е́здил в) ── */
  [["Москва́", "в Москве́", "в Москву́", "Moscú"], ["Пари́ж", "в Пари́же", "в Пари́ж", "París"], ["Мадри́д", "в Мадри́де", "в Мадри́д", "Madrid"], ["Рим", "в Ри́ме", "в Рим", "Roma"], ["Ло́ндон", "в Ло́ндоне", "в Ло́ндон", "Londres"]].forEach(([c, prep, acc, es], j) => {
    const s = U8_SUJ[[0, 1, 5, 6, 4][j]], vb = V("быть"), ve = V("е́здить");
    const ru1 = s[0] + " " + vb.p[s[2]] + " " + prep + ".", ru2 = s[0] + " " + ve.p[s[2]] + " " + acc + ".";
    const es1 = cap(((s[1] ? s[1] + " " : "") + vb.pret[s[3]] + " en " + es).trim()) + ".", es2 = cap(((s[1] ? s[1] + " " : "") + ve.pret[s[3]] + " a " + es).trim()) + ".";
    const base = { grupo: "EX-" + j, items: [], oir: ru1 };
    out.push(Object.assign({ id: "U8-ex1-" + j, tipo: "experiencia", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribí en ruso: «" + es1 + "»" + pista(s), audio: ru1, audioManual: true,
      esperadas: [ru1].concat(s[0] === "Я" ? [ru1.replace(" " + vb.p[s[2]] + " ", " " + vb.p[s[2] === "m" ? "f" : "m"] + " ")] : []), idioma: "ru", explicacion: "Dónde estuviste: prepositivo. " + ru1 }, base, { grupo: "EX1-" + j }));
    out.push(Object.assign({ id: "U8-ex2-" + j, tipo: "experiencia", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribí en ruso: «" + es2 + "»" + pista(s), audio: ru2, audioManual: true,
      esperadas: [ru2].concat(s[0] === "Я" ? [ru2.replace(" " + ve.p[s[2]] + " ", " " + ve.p[s[2] === "m" ? "f" : "m"] + " ")] : []), idioma: "ru", explicacion: "Adónde fuiste: acusativo, con е́здил. " + ru2 }, base, { grupo: "EX2-" + j }));
    out.push(Object.assign({ id: "U8-ex3-" + j, tipo: "experiencia", forma: "elegir", dificultad: 2, modulo: 9, pide: "Completá: «" + es2 + "»", grande: s[0] + " " + ve.p[s[2]] + " _____.",
      opciones: baraja([acc, prep], j), correcta: acc, explicacion: "Con е́здил (adónde) va el acusativo: " + ru2 }, base));
  });

  /* ── Módulo 10: antes y ahora ── */
  [["жить", "в Буэ́нос-А́йресе", "в Барсело́не", "en Buenos Aires", "en Barcelona"], ["рабо́тать", "в ба́нке", "до́ма", "en un banco", "en casa"], ["встава́ть", "в шесть часо́в", "в во́семь часо́в", "a las seis", "a las ocho"],
   ["ложи́ться", "спать в два часа́", "спать в оди́ннадцать часо́в", "a las dos", "a las once"], ["чита́ть", "газе́ту", "кни́гу", "el diario", "un libro"], ["изуча́ть", "англи́йский", "ру́сский", null, null]].forEach(([vk, antes, ahora, esA, esH], j) => {
    if (!esA) return;
    const v = V(vk); if (!v) return;
    const s = U8_SUJ[j % 2], g = s[2];
    const iP = 0, pres = v.pres[iP];
    const ruA = "Ра́ньше я " + v.p[g] + " " + antes + ".", ruH = "Тепе́рь я " + pres + " " + ahora + ".";
    const esAf = "Antes " + v.imp[0] + " " + (vk === "ложи́ться" ? esA : esA) + ".";
    const esHf = "Ahora " + ({ "жить": "vivo", "рабо́тать": "trabajo", "встава́ть": "me levanto", "ложи́ться": "me acuesto", "чита́ть": "leo" }[vk]) + " " + esH + ".";
    const base = { grupo: "AH-" + j, items: ["lex:" + v.id], oir: ruA };
    out.push(Object.assign({ id: "U8-ah1-" + j, tipo: "antes-ahora", forma: "escribir", dificultad: 3, modulo: 10, pide: "Escribí en ruso: «" + esAf + "»" + pista(s), audio: ruA, audioManual: true,
      esperadas: [ruA, ruA.replace(" " + v.p[g] + " ", " " + v.p[g === "m" ? "f" : "m"] + " ")], idioma: "ru", explicacion: "ра́ньше → pasado: " + u8Regla(v, g) + " " + ruA }, base));
    out.push(Object.assign({ id: "U8-ah2-" + j, tipo: "antes-ahora", forma: "escribir", dificultad: 3, modulo: 10, pide: "Escribí en ruso: «" + esHf + "»", audio: ruH, audioManual: true,
      esperadas: [ruH, ruH.replace("Тепе́рь", "Сейча́с")], idioma: "ru", explicacion: "тепе́рь / сейча́с → presente: " + ruH }, base));
    out.push(Object.assign({ id: "U8-ah3-" + j, tipo: "antes-ahora", forma: "elegir", dificultad: 2, modulo: 10, pide: "Completá: «" + esAf + "»", grande: "Ра́ньше я _____ " + antes + ".",
      opciones: baraja([v.p[g], pres], j), correcta: v.p[g], explicacion: "Con ра́ньше va el pasado: " + ruA }, base));
  });
  [["Ра́ньше я не говори́л по-ру́сски.", "Antes no hablaba ruso. (sos hombre)"], ["Тогда́ я жила́ в Москве́.", "En ese entonces vivía en Moscú. (sos mujer)"], ["Ра́ньше мы рабо́тали в о́фисе.", "Antes trabajábamos en una oficina."]].forEach(([ru, es], j) =>
    out.push({ id: "U8-ah4-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "AH4-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 11: lecturas ── */
  U8_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U8-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 11, grupo: "L8-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U8-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 11, grupo: "L8v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* ── Vocabulario nuevo ── */
  const dicEs = { "неда́вно": "hace poco", "ра́ньше": "antes", "тогда́": "en ese entonces", "снача́ла": "primero", "зате́м": "luego", "наконе́ц": "finalmente", "но": "pero", "игра́ть": "jugar", "интере́сно": "interesante" };
  const modDe = { "неда́вно": 4, "ра́ньше": 10, "тогда́": 10, "снача́ла": 8, "зате́м": 8, "наконе́ц": 8, "но": 8, "игра́ть": 2, "интере́сно": 6 };
  Object.keys(dicEs).forEach((ac, i) => {
    const e = lex(ac); if (!e) return;
    out.push({ id: "U8-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: modDe[ac], grupo: e.id, items: ["lex:" + e.id], oir: e.ru, pide: "Escribí en ruso: «" + dicEs[ac] + "»",
      audio: e.ru, audioManual: true, pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + dicEs[ac] });
  });
  out.forEach(e => { if (e.explicacion) e.explicacion = u8Palabras(e.explicacion); if (e.pide) e.pide = u8Palabras(e.pide); });
  return out;
}

/* Proyecto: requisitos y consejos de las dos partes */
(function () {
  const m = UNIDAD_8.modulos.find(x => x.id === "u8m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const clave = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(clave(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  /* forma de pasado: m / f / n / pl de algún verbo */
  const pasado = w => { for (const x of info(w)) { const v = verboById(x[0]); if (v && v.pasado) for (const g of ["m", "f", "n", "pl"]) if (clave(v.pasado[g]) === clave(w)) return { id: x[0], g, v }; } return null; };
  const presente = w => info(w).some(x => { const v = verboById(x[0]); return v && v.presente && v.presente.some(f => clave(f) === clave(w)); });
  const TIEMPO = ["вчера", "утром", "днем", "вечером", "ночью", "недавно", "раньше", "тогда", "сегодня"];
  const CONECT = ["сначала", "потом", "затем", "наконец", "но", "потому"];
  const verbosPas = t => new Set(pal(t).map(pasado).filter(Boolean).map(x => x.id)).size;
  const tiempos = t => pal(t).map(clave).filter(w => TIEMPO.indexOf(w) >= 0).length + (clave(t).match(/прошл(ой|ом)/g) || []).length + (t.match(/(час|часа|часов)(?![а-яё])/gi) || []).length;
  const lugares = t => (clave(t).match(/(^|[^а-яё])(в|на) [а-яё-]+(е|и|ах)(?![а-яё])/g) || []).length + (clave(t).match(/(^|[^а-яё])дома(?![а-яё])/g) || []).length;
  const conect = t => pal(t).map(clave).filter(w => CONECT.indexOf(w) >= 0).length;
  const genero = t => new Set(pal(t).map(pasado).filter(Boolean).map(x => x.g));
  const negs = t => frases(t).filter(f => /(^|\s)не\s/i.test(f.replace(/\u0301/g, ""))).length;
  m.requisitos = [
    { txt: "Entre 12 y 15 frases", fn: t => { const n = frases(t).length; return n >= 12 && n <= 15; } },
    { txt: "Al menos 8 verbos distintos en pasado", fn: t => verbosPas(t) >= 8 },
    { txt: "Al menos 5 expresiones de tiempo (вчера́, у́тром, в де́вять часо́в…)", fn: t => tiempos(t) >= 5 },
    { txt: "Al menos 3 lugares (в рестора́не, на рабо́те, до́ма…)", fn: t => lugares(t) >= 3 },
    { txt: "Al menos 3 conectores (снача́ла, пото́м, но…)", fn: t => conect(t) >= 3 },
    { txt: "Al menos una forma en plural (-ли)", fn: t => genero(t).has("pl") },
    { txt: "Al menos una frase negativa (не)", fn: t => negs(t) >= 1 }
  ];
  const SUJ = { "я": null, "ты": null, "он": "m", "она": "f", "мы": "pl", "вы": "pl", "они": "pl", "иван": "m", "анна": "f", "маша": "f", "дима": "m", "мама": "f", "папа": "m", "брат": "m", "сестра": "f", "дети": "pl" };
  const LBL = { m: "masculino (-л)", f: "femenino (-ла)", pl: "plural (-ли)" };
  const consejos = t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f);
      for (let i = 0; i < w.length; i++) { const g = SUJ[clave(w[i])]; if (g === undefined || g === null) continue;
        for (let k = i + 1; k < Math.min(w.length, i + 4); k++) { const p = pasado(w[k]); if (!p) continue;
          if (p.g !== g && !(g === "m" && p.g === "n")) out.push("Con " + w[i] + " va el " + LBL[g] + ": **" + p.v.pasado[g] + "**, no «" + w[k] + "».");
          break; } }
      if (/(^|\s)вчера(\s|,)/i.test(clave(f)) && w.some(presente) && !w.some(x => pasado(x))) out.push("«" + f + "»: con вчера́ va el pasado.");
    });
    return [...new Set(out)];
  };
  m.consejos = [{ fn: consejos }];
  U8_PROYECTO2.requisitos = [
    { txt: "Entre 8 y 10 frases", fn: t => { const n = frases(t).length; return n >= 8 && n <= 10; } },
    { txt: "Al menos 3 frases sobre antes (ра́ньше, тогда́) en pasado", fn: t => frases(t).filter(f => /(раньше|тогда)/.test(clave(f)) && pal(f).some(pasado)).length >= 3 },
    { txt: "Al menos 3 frases sobre ahora (сейча́с, тепе́рь) en presente", fn: t => frases(t).filter(f => /(сейчас|теперь)/.test(clave(f)) && pal(f).some(presente)).length >= 3 }
  ];
  U8_PROYECTO2.consejos = [{ fn: t => consejos(t).concat(frases(t).filter(f => /(сейчас|теперь)/.test(clave(f)) && pal(f).some(pasado) && !pal(f).some(presente)).map(f => "«" + f + "»: con сейча́с / тепе́рь va el presente.")) }];
})();

window.UNIDAD_8 = UNIDAD_8;
window.U8_PROYECTO2 = U8_PROYECTO2;
window.unidad8Modulo = unidad8Modulo;
window.ejerciciosUnidad8 = ejerciciosUnidad8;
window.u8Datos = u8Datos;
window.U8_MEZCLA = U8_MEZCLA;
