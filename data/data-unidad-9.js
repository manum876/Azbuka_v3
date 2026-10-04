/* ============================================================
   DATA-UNIDAD-9.JS — Unidad 9: Futuro y planes
   ------------------------------------------------------------
   Versión 05/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 05/10/2026):
   · Futuro con бу́ду + infinitivo (formas de быть en Verbos).
   · Пойду́ y пое́ду como vocabulario («voy a ir»), sin teoría del
     aspecto: «Я бу́ду идти́ в…» no se dice. Afuera встре́чусь, сде́лать.
   · Afuera С кем? / с друзья́ми / с семьёй (instrumental, Unidad 10).
     «Каки́е у тебя́ пла́ны?» va como fórmula, como «А у тебя́?».
   · Fórmulas de tiempo: на э́той неде́ле, на сле́дующей неде́ле,
     в сле́дующем ме́сяце, в сле́дующем году́, на выходны́х, че́рез час,
     че́рез неде́лю.
   · Intención: хоте́ть, плани́ровать, собира́ться, мечта́ть + infinitivo.
   · Transporte: е́хать на по́езде / на самолёте / на маши́не (на +
     prepositivo, Unidad 6).
   · Palabras nuevas en el léxico: путеше́ствовать, послеза́втра.
   · Evaluación: 35 ejercicios; proyecto en dos partes: «Мои пла́ны на
     сле́дующую неде́лю» (agenda + texto) y «Вчера́, сего́дня, за́втра».
   Formas de Verbos y Casos, nunca a mano.
   ============================================================ */

/* Verbos: "ruso": [infinitivo en español, complementos [[ruso, español]]] */
const U9_VERBOS = {
  "рабо́тать": ["trabajar", [["до́ма", "en casa"], ["в о́фисе", "en la oficina"]]], "учи́ться": ["estudiar", [["", ""]]],
  "чита́ть": ["leer", [["кни́гу", "un libro"]]], "писа́ть": ["escribir", [["письмо́", "una carta"]]], "смотре́ть": ["mirar", [["фильм", "una película"]]],
  "слу́шать": ["escuchar", [["му́зыку", "música"]]], "говори́ть": ["hablar", [["по-ру́сски", "en ruso"]]], "изуча́ть": ["estudiar", [["ру́сский", "ruso"]]],
  "отдыха́ть": ["descansar", [["", ""], ["до́ма", "en casa"]]], "гуля́ть": ["pasear", [["в па́рке", "por el parque"]]], "гото́вить": ["cocinar", [["у́жин", "la cena"]]],
  "покупа́ть": ["comprar", [["хлеб", "pan"]]], "де́лать": ["hacer", [["", ""]]], "путеше́ствовать": ["viajar", [["", ""]]], "игра́ть": ["jugar", [["", ""]]],
  "жить": ["vivir", [["в Барсело́не", "en Barcelona"], ["в Москве́", "en Moscú"]]]
};
/* Quién: [ruso, español del sujeto, índice de persona 0-5] */
const U9_SUJ = [["Я", "", 0], ["Ты", "Vos", 1], ["Он", "Él", 2], ["Она́", "Ella", 2], ["Мы", "", 3], ["Вы", "Ustedes", 4], ["Они́", "Ellos", 5],
  ["А́нна", "Ana", 2], ["Ива́н", "Iván", 2], ["Ма́ша", "Masha", 2], ["Брат", "Mi hermano", 2]];
const U9_IR = ["voy a", "vas a", "va a", "vamos a", "van a", "van a"];
const U9_TIEMPO = [["за́втра", "mañana"], ["послеза́втра", "pasado mañana"], ["ско́ро", "pronto"], ["на э́той неде́ле", "esta semana"], ["на сле́дующей неде́ле", "la semana que viene"],
  ["в сле́дующем ме́сяце", "el mes que viene"], ["в сле́дующем году́", "el año que viene"], ["на выходны́х", "el fin de semana"], ["че́рез час", "dentro de una hora"], ["че́рез неде́лю", "dentro de una semana"]];
const U9_INTENCION = { "хоте́ть": ["quiero", "querés", "quiere", "queremos", "quieren", "quieren"], "плани́ровать": ["planeo", "planeás", "planea", "planeamos", "planean", "planean"],
  "собира́ться": ["tengo pensado", "tenés pensado", "tiene pensado", "tenemos pensado", "tienen pensado", "tienen pensado"], "мечта́ть": ["sueño con", "soñás con", "sueña con", "soñamos con", "sueñan con", "sueñan con"] };
/* Destinos: [ruso del lugar, a pie (пойду́) o en vehículo (пое́ду), español «a…», «en…»] */
const U9_DESTINOS = [["рестора́н", "п", "al restaurante", "en el restaurante"], ["магази́н", "п", "al negocio", "en el negocio"], ["парк", "п", "al parque", "en el parque"],
  ["кино́", "п", "al cine", "en el cine"], ["рабо́та", "е", "al trabajo", "en el trabajo"], ["Москва́", "е", "a Moscú", "en Moscú"], ["Мадри́д", "е", "a Madrid", "en Madrid"],
  ["Испа́ния", "е", "a España", "en España"], ["Росси́я", "е", "a Rusia", "en Rusia"], ["Пари́ж", "е", "a París", "en París"]];
const U9_TRANSPORTE = [["по́езд", "en tren", "🚆"], ["самолёт", "en avión", "✈️"], ["маши́на", "en auto", "🚗"]];

const U9_VISTAS = { 2: "путеше́ствовать", 5: "ско́ро сле́дующий че́рез послеза́втра", 6: "плани́ровать собира́ться мечта́ть", 7: "пойти́ пое́хать по́езд самолёт",
  10: "пое́здка путеше́ствие биле́т" };
const U9_AMPLIACION_RU = "посеща́ть";

const U9_LECTURAS = [
  { id: "finde", titulo: "Пла́ны на выходны́е", lineas: [
      ["В суббо́ту я бу́ду до́ма.", "El sábado voy a estar en casa."], ["У́тром я бу́ду чита́ть, а пото́м бу́ду гото́вить обе́д.", "A la mañana voy a leer, y después voy a cocinar el almuerzo."],
      ["Ве́чером я пойду́ в кино́.", "A la noche voy a ir al cine."], ["В воскресе́нье я бу́ду отдыха́ть.", "El domingo voy a descansar."]],
    preguntas: [["¿Dónde va a estar el sábado?", "до́ма", ["в кино́", "на рабо́те"]], ["¿Adónde va a ir a la noche?", "в кино́", ["в парк", "в рестора́н"]], ["¿Qué va a hacer el domingo?", "бу́дет отдыха́ть", ["бу́дет рабо́тать", "бу́дет гото́вить"]]],
    vf: [["В суббо́ту я бу́ду на рабо́те.", false], ["Ве́чером я пойду́ в кино́.", true], ["В воскресе́нье я бу́ду отдыха́ть.", true]] },
  { id: "viaje", titulo: "Пое́здка в Москву́", lineas: [
      ["В сле́дующем ме́сяце Ма́ша пое́дет в Москву́.", "El mes que viene Masha va a ir a Moscú."], ["Она́ пое́дет на по́езде.", "Va a ir en tren."],
      ["Она́ бу́дет жить в гости́нице в це́нтре.", "Va a vivir en un hotel en el centro."], ["Там она́ бу́дет гуля́ть и говори́ть по-ру́сски.", "Allá va a pasear y hablar en ruso."]],
    preguntas: [["¿Adónde va a ir Masha?", "в Москву́", ["в Москве́", "в Мадри́д"]], ["¿Cómo va a ir?", "на по́езде", ["на самолёте", "на маши́не"]], ["¿Dónde va a vivir?", "в гости́нице", ["до́ма", "в кварти́ре"]]],
    vf: [["Ма́ша пое́дет на самолёте.", false], ["Она́ бу́дет говори́ть по-ру́сски.", true], ["Ма́ша пое́дет в Москву́ на сле́дующей неде́ле.", false]] },
  { id: "tres", titulo: "Вчера́, сего́дня, за́втра", lineas: [
      ["Вчера́ Ива́н рабо́тал до́ма.", "Ayer Iván trabajó en casa."], ["Сего́дня он рабо́тает в о́фисе.", "Hoy trabaja en la oficina."],
      ["За́втра он бу́дет рабо́тать в кафе́.", "Mañana va a trabajar en un café."], ["В про́шлом году́ он жил в Буэ́нос-А́йресе.", "El año pasado vivía en Buenos Aires."],
      ["Сейча́с он живёт в Барсело́не.", "Ahora vive en Barcelona."], ["В сле́дующем году́ он бу́дет путеше́ствовать.", "El año que viene va a viajar."]],
    preguntas: [["¿Dónde trabaja hoy?", "в о́фисе", ["до́ма", "в кафе́"]], ["¿Dónde va a trabajar mañana?", "в кафе́", ["в о́фисе", "до́ма"]], ["¿Qué va a hacer el año que viene?", "бу́дет путеше́ствовать", ["бу́дет рабо́тать", "бу́дет жить в Барсело́не"]]],
    vf: [["Вчера́ Ива́н рабо́тал в о́фисе.", false], ["Сейча́с он живёт в Барсело́не.", true], ["В сле́дующем году́ он бу́дет путеше́ствовать.", true]] }
];
const U9_PREGUNTAS = [["Что ты бу́дешь де́лать за́втра?", "¿Qué vas a hacer mañana?"], ["Что ты бу́дешь де́лать ве́чером?", "¿Qué vas a hacer a la noche?"],
  ["Что ты бу́дешь де́лать на выходны́х?", "¿Qué vas a hacer el fin de semana?"], ["Каки́е у тебя́ пла́ны?", "¿Qué planes tenés?"], ["Куда́ ты пое́дешь?", "¿Adónde vas a ir?"],
  ["Где ты бу́дешь за́втра?", "¿Dónde vas a estar mañana?"], ["Когда́ ты бу́дешь там?", "¿Cuándo vas a estar allá?"], ["Ты бу́дешь рабо́тать за́втра?", "¿Vas a trabajar mañana?"]];

const UNIDAD_9 = {
  id: 9,
  titulo: "Futuro y planes",
  tituloRu: "Бу́дущее вре́мя и пла́ны",
  objetivo: "Hablar de lo que vas a hacer, de tus planes y de tus viajes, y combinar pasado, presente y futuro.",
  tiempo: "30–40 horas",
  modulos: [
    { id: "u9m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "Pasado, presente y futuro", resumen: "Вчера́ рабо́тал · сего́дня рабо́таю · за́втра бу́ду рабо́тать.",
      intro: "Ya sabés contar lo que hiciste y lo que hacés. Ahora, lo que vas a hacer.",
      secciones: [
        { titulo: "La misma acción, tres veces", texto: "Вчера́ я рабо́тал. («ayer trabajé»)\nСего́дня я рабо́таю. («hoy trabajo»)\nЗа́втра я бу́ду рабо́тать. («mañana voy a trabajar»)", destacado: "вчера́ → сего́дня → за́втра" },
        { titulo: "Otra más", texto: "Вчера́ я смотре́л фильм.\nСейча́с я смотрю́ фильм.\nЗа́втра я бу́ду смотре́ть фильм." },
        { titulo: "Cómo se forma el futuro", texto: "Lo ves en el módulo 2: es muy parecido al «voy a» del español. Por ahora, reconocé cuándo una frase habla de mañana." }
      ] },
    { id: "u9m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Бу́ду + infinitivo", resumen: "Я бу́ду рабо́тать.",
      intro: "El futuro ruso se arma como el «voy a» del español: una forma de быть y el verbo sin conjugar.",
      secciones: [
        { titulo: "Las formas de бу́ду", texto: "{я} бу́ду\nты бу́дешь\nон / она́ бу́дет\nмы бу́дем\nвы бу́дете\nони́ бу́дут", destacado: "бу́ду + infinitivo = voy a + infinitivo" },
        { titulo: "Ejemplos", texto: "Я бу́ду рабо́тать («voy a trabajar»). Ты бу́дешь учи́ться. Он бу́дет чита́ть. Мы бу́дем отдыха́ть. Вы бу́дете смотре́ть фильм. Они́ бу́дут путеше́ствовать («van a viajar»)." },
        { titulo: "El segundo verbo no cambia", texto: "Lo que cambia es бу́ду; el otro verbo queda siempre en infinitivo, como en español: voy a trabajar, vamos a trabajar.", truco: "Error típico: «Я бу́ду рабо́таю». Va «Я бу́ду рабо́тать»." }
      ] },
    { id: "u9m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Verbos frecuentes en futuro", resumen: "За́втра я бу́ду рабо́тать.",
      intro: "Todos los verbos que ya conocés sirven para el futuro, sin aprender formas nuevas: alcanza con бу́ду y el infinitivo.",
      secciones: [
        { titulo: "Con cuándo", texto: "За́втра я бу́ду рабо́тать. В суббо́ту я бу́ду отдыха́ть. Ве́чером мы бу́дем гото́вить у́жин. В воскресе́нье они́ бу́дут гуля́ть в па́рке." },
        { titulo: "Un verbo nuevo: путеше́ствовать", texto: "путеше́ствовать (viajar): Я люблю́ путеше́ствовать. В сле́дующем году́ я бу́ду путеше́ствовать." }
      ] },
    { id: "u9m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Быть en futuro", resumen: "Я бу́ду до́ма.",
      intro: "Бу́ду solo, sin otro verbo, es «voy a estar».",
      secciones: [
        { titulo: "Dónde vas a estar", texto: "Я бу́ду до́ма («voy a estar en casa»). Ты бу́дешь на рабо́те. Она́ бу́дет в Москве́. Мы бу́дем в рестора́не. Они́ бу́дут в Барсело́не.", destacado: "Где ты бу́дешь за́втра? — Я бу́ду до́ма." },
        { titulo: "Los tres tiempos de быть", texto: "Вчера́ я был до́ма. → Сейча́с я до́ма (en presente no se dice). → За́втра я бу́ду до́ма." }
      ] },
    { id: "u9m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Mañana y después", resumen: "за́втра, на сле́дующей неде́ле, че́рез час…",
      intro: "Las palabras para decir cuándo va a pasar algo.",
      secciones: [
        { titulo: "Pronto", texto: "за́втра (mañana), послеза́втра (pasado mañana), ско́ро (pronto), пото́м (después)." },
        { titulo: "La semana, el mes, el año", texto: "на э́той неде́ле (esta semana)\nна сле́дующей неде́ле (la semana que viene)\nв сле́дующем ме́сяце (el mes que viene)\nв сле́дующем году́ (el año que viene)\nна выходны́х (el fin de semana)\nVan así, como fórmulas, igual que в про́шлом году́ en la Unidad 8." },
        { titulo: "Dentro de…", texto: "че́рез час (dentro de una hora), че́рез неде́лю (dentro de una semana): Че́рез неде́лю я бу́ду в Москве́.", destacado: "Че́рез неде́лю я бу́ду в Москве́." }
      ] },
    { id: "u9m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Planes e intenciones", resumen: "Я хочу́ / плани́рую / собира́юсь путеше́ствовать.",
      intro: "Además de decir qué va a pasar, podés decir qué querés o pensás hacer.",
      secciones: [
        { titulo: "Cuatro verbos + infinitivo", texto: "хоте́ть (querer): Я хочу́ путеше́ствовать.\nплани́ровать (planear): Я плани́рую рабо́тать до́ма.\nсобира́ться (tener pensado): Я собира́юсь изуча́ть ру́сский.\nмечта́ть (soñar con): Я мечта́ю жить в Москве́." },
        { titulo: "No es lo mismo", texto: "Я бу́ду рабо́тать: «voy a trabajar» (va a pasar). Я хочу́ рабо́тать: «quiero trabajar». Я плани́рую рабо́тать: «planeo trabajar».", destacado: "бу́ду = va a pasar · хочу́ = lo deseo · плани́рую = lo planeo" }
      ] },
    { id: "u9m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Adónde vas a ir", resumen: "Я пойду́ в рестора́н. Я пое́ду в Москву́.",
      intro: "Para «voy a ir» el ruso no usa бу́ду: tiene dos palabras propias.",
      secciones: [
        { titulo: "Пойду́ y пое́ду", texto: "{я} пойду́ (voy a ir, a pie) y {я} пое́ду (voy a ir, en vehículo), con el destino en acusativo, como en la Unidad 6: Я пойду́ в рестора́н. Я пое́ду в Москву́. Мы пойдём на рабо́ту. No se dice «Я бу́ду идти́ в рестора́н».", destacado: "Я пойду́ в рестора́н. Я пое́ду в Москву́." },
        { titulo: "Dónde vas a estar y adónde vas a ir", texto: "Я бу́ду в Москве́ («voy a estar en Moscú»): dónde, prepositivo. Я пое́ду в Москву́ («voy a ir a Moscú»): adónde, acusativo." },
        { titulo: "En tren, en avión, en auto", texto: "на + prepositivo: на по́езде (en tren), на самолёте (en avión), на маши́не (en auto). Я пое́ду в Мадри́д на по́езде." }
      ] },
    { id: "u9m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Preguntar por los planes", resumen: "Что ты бу́дешь де́лать за́втра?",
      intro: "Las preguntas de todos los días sobre los planes de otro, y cómo contestarlas.",
      secciones: [
        { titulo: "Las preguntas", texto: "Что ты бу́дешь де́лать за́втра? («¿qué vas a hacer mañana?»)\nЧто ты бу́дешь де́лать на выходны́х?\nКаки́е у тебя́ пла́ны? («¿qué planes tenés?»: va así, como fórmula)\nКуда́ ты пое́дешь? Где ты бу́дешь? Когда́ ты бу́дешь там?" },
        { titulo: "Las respuestas", texto: "За́втра я бу́ду рабо́тать. В суббо́ту я бу́ду отдыха́ть. На сле́дующей неде́ле я пое́ду в Мадри́д. Abajo podés practicar respondiendo con tus propias palabras." }
      ] },
    { id: "u9m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Planificar una semana", resumen: "В понеде́льник я бу́ду рабо́тать.",
      intro: "La agenda de la Unidad 7, ahora hacia adelante: la semana que viene.",
      secciones: [
        { titulo: "De la agenda a la frase", texto: "Понеде́льник — рабо́та → В понеде́льник я бу́ду рабо́тать.\nВто́рник — ру́сский → Во вто́рник я бу́ду изуча́ть ру́сский.\nСуббо́та — отды́х → В суббо́ту я бу́ду отдыха́ть." }
      ] },
    { id: "u9m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Viajes", resumen: "Я пое́ду в Испа́нию на самолёте.",
      intro: "Palabras para hablar de un viaje.",
      secciones: [
        { titulo: "Las palabras del viaje", texto: "пое́здка (viaje, salida), путеше́ствие (viaje largo), биле́т (pasaje, boleto), по́езд (tren), самолёт (avión), гости́ница (hotel), страна́ (país), о́тпуск (vacaciones)." },
        { titulo: "Contar un viaje que viene", texto: "В о́тпуске я пое́ду в Испа́нию. Я пое́ду на самолёте. Я бу́ду жить в гости́нице. Я бу́ду отдыха́ть и гуля́ть." }
      ] },
    { id: "u9m11", n: 11, tipo: "lectura", titulo: "Los tres tiempos juntos", resumen: "Вчера́, сего́дня, за́втра.",
      intro: "Tres textos: un fin de semana, un viaje y una historia con pasado, presente y futuro. Leelos, escuchalos y contestá." },
    { id: "u9m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мои пла́ны", resumen: "Tu semana que viene, y ayer, hoy y mañana.",
      intro: "Primero completá tu agenda de la semana que viene. Después escribí tus planes: qué vas a hacer, dónde vas a estar, adónde vas a ir y qué querés hacer. Por ejemplo: В понеде́льник я бу́ду рабо́тать. Ве́чером я пойду́ в кино́. На выходны́х я пое́ду в Мадри́д на по́езде. Я хочу́ отдыха́ть.",
      requisitos: [], consejos: [] },
    { id: "u9m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Futuro, быть, movimiento, tres tiempos, traducción y audio.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Бу́ду + infinitivo", tipos: ["budu", "inf-fut", "cambiar-persona"], n: 6 },
        { nombre: "Быть en futuro", tipos: ["byt-fut"], n: 4 },
        { nombre: "Movimiento", tipos: ["mov-fut", "transporte"], n: 5 },
        { nombre: "Los tres tiempos", tipos: ["maquina", "tres", "detectar"], n: 6 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 7 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
const U9_PROYECTO2 = { id: "u9p2", titulo: "Вчера́, сего́дня, за́втра",
  intro: "Ahora una historia en los tres tiempos: qué hiciste, qué hacés y qué vas a hacer. Por ejemplo: Вчера́ я рабо́тал до́ма. Сего́дня я рабо́таю в о́фисе. За́втра я бу́ду отдыха́ть.",
  requisitos: [], consejos: [] };

function u9Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_9.modulos.concat([U9_PROYECTO2]).forEach(m => {
  if (m.intro) m.intro = u9Palabras(m.intro);
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u9Palabras(s[k]); }));
});
function unidad9Modulo(id) { return UNIDAD_9.modulos.find(m => m.id === id) || null; }

const U9_MEZCLA = { clasificar: 1, maquina: 2, budu: 2, "inf-fut": 2, "cambiar-persona": 2, "byt-fut": 2, cuando: 1, intencion: 2, "mov-fut": 2, transporte: 1, pregunta: 2,
  agenda: 2, construir: 2, tres: 2, detectar: 1, "plan-real": 1, "es-ru": 3, dictado: 3, significado: 1, "palabra-es-ru": 1, emparejar: 1, lectura: 2, "lectura-vf": 1 };

/* ── Datos ─────────────────────────────────────────────────── */
function u9Datos() {
  if (u9Datos.cache) return u9Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null;
  const V = ac => { const e = lex(ac, "verbo"); return e ? Object.assign({ id: e.id, ac: e.acento }, verboById(e.id)) : null; };
  const buduV = V("быть"), budu = buduV.futuro, poidu = V("пойти́").futuro, poedu = V("пое́хать").futuro;
  const verb = {};
  Object.keys(U9_VERBOS).forEach(ru => { const v = V(ru); if (v) verb[sin(ru)] = Object.assign(v, { es: U9_VERBOS[ru][0], comps: U9_VERBOS[ru][1] }); });
  Object.keys(U9_INTENCION).forEach(ru => { const v = V(ru); if (v) verb[sin(ru)] = Object.assign(v, { esF: U9_INTENCION[ru] }); });
  const lugar = ru => { const e = lex(ru, "sustantivo"), cz = e && casosById(e.id); if (!cz) return null;
    if (cz.tipo === "indeclinable") return { id: e.id, nom: e.acento, acc: e.acento, prep: e.acento };
    return { id: e.id, nom: cz.sg[0], acc: cz.sg[3], prep: cz.sg[5] }; };
  return (u9Datos.cache = { sin, lex, verb, budu, poidu, poedu, lugar, buduId: buduV.id, poiduId: lex("пойти́", "verbo").id, poeduId: lex("пое́хать", "verbo").id });
}

function ejerciciosUnidad9() {
  const { sin, lex, verb, budu, poidu, poedu, lugar, buduId, poiduId, poeduId } = u9Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?]/g, "");
  const PL = ["я", "ты", "он / она́", "мы", "вы", "они́"];
  const verbos = Object.keys(U9_VERBOS).map(k => verb[sin(k)]).filter(Boolean);
  const verbosSinVivir = verbos.filter(v => sin(v.ac) !== "жить");
  /* Frase en futuro: sujeto, verbo, complemento, tiempo */
  const fut = (s, v, comp, t) => {
    const nombre = /^(А́нна|Ива́н|Ма́ша)$/.test(s[0]);
    const sujRu = t && !nombre ? s[0].toLowerCase() : s[0], sujEs = t && s[1] && !nombre ? s[1].charAt(0).toLowerCase() + s[1].slice(1) : s[1];
    const ru = (t ? cap(t[0]) + " " : "") + sujRu + " " + budu[s[2]] + " " + v.ac + (comp && comp[0] ? " " + comp[0] : "") + ".";
    const es = cap(((t ? t[1] + " " : "") + (sujEs ? sujEs + " " : "") + U9_IR[s[2]] + " " + v.es + (comp && comp[1] ? " " + comp[1] : "")).trim()) + ".";
    const esperadas = [ru];
    if (s[0] === "Я" || s[0] === "Мы" || s[0] === "Ты") esperadas.push((t ? cap(t[0]) + " " : "") + (t ? budu[s[2]] : cap(budu[s[2]])) + " " + v.ac + (comp && comp[0] ? " " + comp[0] : "") + ".");
    if (/^Mi /.test(s[1])) esperadas.push(ru.replace(new RegExp("(^|\\s)" + sujRu + " "), "$1" + (t ? "мой " : "Мой ") + s[0].toLowerCase() + " "));
    return { ru, es, esperadas };
  };
  const regla = (i, v) => "**" + PL[i] + " " + budu[i] + " " + v.ac + "**: бу́ду cambia según la persona; " + v.ac + " queda en infinitivo.";

  /* ── Módulo 1: pasado, presente y futuro ── */
  verbosSinVivir.slice(0, 10).forEach((v, j) => {
    const comp = v.comps[0], quien = j % 2 ? ["А́нна", "f"] : ["Ива́н", "m"];
    const pas = "Вчера́ " + quien[0] + " " + v.pasado[quien[1]] + (comp[0] ? " " + comp[0] : "") + ".";
    const pre = "Сего́дня " + quien[0] + " " + v.presente[2] + (comp[0] ? " " + comp[0] : "") + ".";
    const fu = "За́втра " + quien[0] + " " + budu[2] + " " + v.ac + (comp[0] ? " " + comp[0] : "") + ".";
    const base = { grupo: "T1-" + j, items: ["lex:" + v.id], oir: fu };
    [[pas, "Pasado (ayer)"], [pre, "Presente (hoy)"], [fu, "Futuro (mañana)"]].forEach(([fr, ok], k) =>
      out.push(Object.assign({ id: "U9-clas-" + j + "-" + k, tipo: "clasificar", forma: "elegir", dificultad: 1, modulo: 1, pide: "¿Ayer, hoy o mañana?", grande: fr, audio: fr,
        opciones: ["Pasado (ayer)", "Presente (hoy)", "Futuro (mañana)"], correcta: ok, explicacion: fr + (k === 2 ? " **" + budu[2] + " " + v.ac + "**: futuro." : k === 0 ? " **" + v.pasado[quien[1]] + "**: pasado." : " **" + v.presente[2] + "**: presente.") }, base, { grupo: "T1-" + j + "-" + k })));
    out.push(Object.assign({ id: "U9-maq-" + j, tipo: "maquina", forma: "escribir", dificultad: 3, modulo: 1, pide: "Máquina del tiempo: pasala a mañana (за́втра).", grande: pre, audio: fu, audioManual: true,
      esperadas: [fu], idioma: "ru", explicacion: pas + " → " + pre + " → " + fu }, base));
  });

  /* ── Módulo 2: бу́ду + infinitivo ── */
  PL.forEach((p, i) => {
    const pr = ["Я", "Ты", "Он", "Мы", "Вы", "Они́"][i];
    out.push({ id: "U9-budu-" + i, tipo: "budu", forma: "elegir", dificultad: 1, modulo: 2, grupo: "B-" + i, items: ["lex:" + buduId], pide: "Completá con la forma de бу́ду.", grande: pr + " _____ рабо́тать.",
      opciones: baraja(uniq(budu).filter(x => x !== budu[i]).slice(0, 3).concat(budu[i]), i), correcta: budu[i], oir: pr + " " + budu[i] + " рабо́тать.", explicacion: "**" + p + " " + budu[i] + "**" });
    out.push({ id: "U9-buduw-" + i, tipo: "budu", forma: "escribir", dificultad: 2, modulo: 2, grupo: "BW-" + i, items: ["lex:" + buduId], pide: "Escribí la forma de бу́ду.", grande: p + " + бу́ду",
      audio: pr + " " + budu[i], audioManual: true, esperadas: [budu[i], pr + " " + budu[i]], idioma: "ru", explicacion: "**" + p + " " + budu[i] + "**" });
  });
  out.push({ id: "U9-buemp", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 2, grupo: "BE", items: [], pide: "Uní cada persona con su forma.", pares: [["я", budu[0]], ["ты", budu[1]], ["мы", budu[3]], ["они́", budu[5]]],
    explicacion: PL.map((p, i) => p + " " + budu[i]).join(" · ") });
  verbos.forEach((v, j) => {
    const s = U9_SUJ[j % 7], i = s[2], comp = v.comps[0];
    const f = fut(s, v, comp), base = { grupo: "F2-" + j, items: ["lex:" + v.id], oir: f.ru };
    const pres = s[0] + " " + v.presente[i] + (comp[0] ? " " + comp[0] : "") + ".";
    out.push(Object.assign({ id: "U9-inf-" + j, tipo: "inf-fut", forma: "escribir", dificultad: 2, modulo: 2, pide: "Pasala al futuro.", grande: pres, audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: regla(i, v) + " " + f.ru + " — " + f.es }, base));
    const s2 = U9_SUJ[(j + 3) % 7], f2 = fut(s2, v, comp);
    if (s2[2] !== i) out.push(Object.assign({ id: "U9-camb-" + j, tipo: "cambiar-persona", forma: "escribir", dificultad: 2, modulo: 2, pide: "Cambiá la persona: " + (s2[0] === "Я" ? "{я}" : s2[0].toLowerCase()) + ".",
      grande: f.ru, audio: f2.ru, audioManual: true, esperadas: f2.esperadas, idioma: "ru", explicacion: "Cambia solo бу́ду: " + regla(s2[2], v) + " " + f2.ru }, base, { grupo: "F2c-" + j }));
    const pals = sinP(f.ru).split(" "), k = pals.indexOf(budu[i]);
    if (k >= 0 && j % 2 === 0) { const mal = pals.slice(); mal[k + 1] = v.presente[i];
      out.push(Object.assign({ id: "U9-det2-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 2, pide: "Tocá la palabra que está mal.", palabras: mal, correcta: k + 1,
        explicacion: "Después de бу́ду va el infinitivo: **" + v.ac + "**, no «" + v.presente[i] + "». " + f.ru }, base, { grupo: "F2d-" + j })); }
  });

  /* ── Módulo 3: frases con cuándo ── */
  verbos.forEach((v, j) => v.comps.forEach((comp, c) => {
    const s = U9_SUJ[(j * 2 + c) % U9_SUJ.length], t = [["за́втра", "mañana"], ["в суббо́ту", "el sábado"], ["ве́чером", "a la noche"], ["в воскресе́нье", "el domingo"]][(j + c) % 4];
    const f = fut(s, v, comp, t), base = { grupo: "F3-" + j + "-" + c, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U9-esru3-" + j + "-" + c, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: regla(s[2], v) + " " + f.ru }, base));
    if (c === 0) out.push(Object.assign({ id: "U9-dic3-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 3, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: f.ru + " — " + f.es }, base));
    if (c === 0 && j % 2 === 0) { const w = sinP(f.ru).split(" "); let fi = baraja(w, j + 3); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U9-ord3-" + j, tipo: "construir", forma: "ordenar", dificultad: 2, modulo: 3, pide: "Ordená: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: w.join(" "), explicacion: f.ru }, base, { grupo: "F3o-" + j })); }
  }));

  /* ── Módulo 4: быть en futuro ── */
  [["до́ма", "en casa"], ["на рабо́те", "en el trabajo"], ["в Москве́", "en Moscú"], ["в рестора́не", "en el restaurante"], ["в Барсело́не", "en Barcelona"], ["в о́фисе", "en la oficina"], ["в па́рке", "en el parque"]].forEach(([lug, es], j) => {
    const s = U9_SUJ[j % 7], i = s[2];
    const ru = s[0] + " " + budu[i] + " " + lug + ".", esF = cap(((s[1] ? s[1] + " " : "") + U9_IR[i] + " estar " + es).trim()) + ".";
    const base = { grupo: "BY-" + j, items: ["lex:" + buduId], oir: ru };
    out.push(Object.assign({ id: "U9-byt-" + j, tipo: "byt-fut", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribí en ruso: «" + esF + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(i === 0 || i === 1 || i === 3 ? [cap(budu[i]) + " " + lug + "."] : []), idioma: "ru", explicacion: "**" + budu[i] + " " + lug + "**: бу́ду solo es «voy a estar». " + ru }, base));
    out.push(Object.assign({ id: "U9-bytel-" + j, tipo: "byt-fut", forma: "elegir", dificultad: 1, modulo: 4, pide: "Completá: «" + esF + "»", grande: s[0] + " _____ " + lug + ".",
      opciones: baraja(uniq([budu[i], budu[(i + 2) % 6], budu[(i + 3) % 6]]), j), correcta: budu[i], explicacion: "**" + PL[i] + " " + budu[i] + "**. " + ru }, base, { grupo: "BYe-" + j }));
  });
  [["Где ты бу́дешь за́втра?", "🏠", "Я бу́ду до́ма."], ["Где ты бу́дешь в понеде́льник?", "💼", "Я бу́ду на рабо́те."], ["Где вы бу́дете ве́чером?", "🍽️", "Мы бу́дем в рестора́не."], ["Где ты бу́дешь в суббо́ту?", "🌳", "Я бу́ду в па́рке."]].forEach(([q, em, r], j) =>
    out.push({ id: "U9-bytq-" + j, tipo: "byt-fut", forma: "escribir", dificultad: 2, modulo: 4, grupo: "BYq-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: "Mirá el dibujo y contestá.", grande: em,
      audio: q, audioManual: true, esperadas: [r, r.replace(/^(Я|Мы) /, "").replace(/^б/, "Б")], idioma: "ru", explicacion: "— " + q + " — " + r }));

  /* ── Módulo 5: cuándo ── */
  U9_TIEMPO.forEach(([ru, es], j) => {
    out.push({ id: "U9-tsig-" + j, tipo: "cuando", forma: "elegir", dificultad: 1, modulo: 5, grupo: "TI-" + j, items: [], oir: ru, pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja([ru].concat(baraja(U9_TIEMPO.filter(x => x[0] !== ru).map(x => x[0]), j).slice(0, 2)), j), correcta: ru, explicacion: ru + " — " + es });
    out.push({ id: "U9-tw-" + j, tipo: "cuando", forma: "escribir", dificultad: 2, modulo: 5, grupo: "TW-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
    const v = verbosSinVivir[j % verbosSinVivir.length], s = U9_SUJ[j % 7], f = fut(s, v, v.comps[0], [ru, es]);
    out.push({ id: "U9-tesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "TE-" + j, items: ["lex:" + v.id], oir: f.ru, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: f.ru });
  });

  /* ── Módulo 6: intención ── */
  Object.keys(U9_INTENCION).forEach((ik, a) => {
    const iv = verb[sin(ik)];
    [["путеше́ствовать", "viajar"], ["изуча́ть ру́сский", "estudiar ruso"], ["рабо́тать до́ма", "trabajar en casa"], ["жить в Москве́", "vivir en Moscú"], ["отдыха́ть", "descansar"]].forEach(([inf, es], j) => {
      if ((a + j) % 2) return;
      const s = U9_SUJ[(a + j) % 7], i = s[2];
      const ru = s[0] + " " + iv.presente[i] + " " + inf + ".", esF = cap(((s[1] ? s[1] + " " : "") + iv.esF[i] + " " + es).trim()) + ".";
      const base = { grupo: "IN-" + a + "-" + j, items: ["lex:" + iv.id], oir: ru };
      out.push(Object.assign({ id: "U9-int-" + a + "-" + j, tipo: "intencion", forma: "escribir", dificultad: 3, modulo: 6, pide: "Escribí en ruso: «" + esF + "»", audio: ru, audioManual: true,
        esperadas: [ru].concat(i <= 1 || i === 3 ? [cap(iv.presente[i]) + " " + inf + "."] : []), idioma: "ru", explicacion: "**" + iv.ac + " → " + PL[i] + " " + iv.presente[i] + "** + infinitivo. " + ru }, base));
    });
    out.push({ id: "U9-intel-" + a, tipo: "intencion", forma: "elegir", dificultad: 2, modulo: 6, grupo: "INe-" + a, items: ["lex:" + iv.id], pide: "¿Qué significa «" + iv.ac + "»?",
      opciones: baraja(["querer", "planear", "tener pensado", "soñar con"], a), correcta: { "хоте́ть": "querer", "плани́ровать": "planear", "собира́ться": "tener pensado", "мечта́ть": "soñar con" }[iv.ac] || "querer",
      explicacion: iv.ac + " + infinitivo" });
  });
  [["Я бу́ду рабо́тать.", "Voy a trabajar (va a pasar)."], ["Я хочу́ рабо́тать.", "Quiero trabajar."], ["Я плани́рую рабо́тать.", "Planeo trabajar."]].forEach(([ru, es], j) =>
    out.push({ id: "U9-diff-" + j, tipo: "intencion", forma: "elegir", dificultad: 2, modulo: 6, grupo: "DF-" + j, items: [], oir: ru, pide: "¿Qué significa?", grande: ru, audio: ru,
      opciones: ["Voy a trabajar (va a pasar).", "Quiero trabajar.", "Planeo trabajar."], correcta: es, explicacion: ru + " — " + es }));

  /* ── Módulo 7: adónde vas a ir ── */
  U9_DESTINOS.forEach(([ru, modo, esA, esEn], j) => {
    const L = lugar(ru); if (!L) return;
    const pr = (ru === "рабо́та") ? "на" : "в";
    const forms = modo === "п" ? poidu : poedu, vid = modo === "п" ? poiduId : poeduId, s = U9_SUJ[[0, 2, 3, 4, 1, 6][j % 6]], i = s[2];
    const ru1 = s[0] + " " + forms[i] + " " + pr + " " + L.acc + ".", es1 = cap(((s[1] ? s[1] + " " : "") + U9_IR[i] + " ir " + esA).trim()) + ".";
    const ru2 = s[0] + " " + budu[i] + " " + pr + " " + L.prep + ".", es2 = cap(((s[1] ? s[1] + " " : "") + U9_IR[i] + " estar " + esEn).trim()) + ".";
    const base = { grupo: "MV-" + j, items: ["lex:" + vid, "lex:" + L.id], oir: ru1 };
    out.push(Object.assign({ id: "U9-mov-" + j, tipo: "mov-fut", forma: "escribir", dificultad: 3, modulo: 7, pide: "Escribí en ruso: «" + es1 + "» " + (modo === "п" ? "🚶" : "🚗"), audio: ru1, audioManual: true,
      esperadas: [ru1].concat(i <= 1 || i === 3 ? [cap(forms[i]) + " " + pr + " " + L.acc + "."] : []), idioma: "ru",
      explicacion: "**" + forms[i] + "** (" + (modo === "п" ? "a pie" : "en vehículo") + ") + adónde, en acusativo: " + ru1 }, base));
    out.push(Object.assign({ id: "U9-movel-" + j, tipo: "mov-fut", forma: "elegir", dificultad: 2, modulo: 7, pide: "Completá: «" + es1 + "»", grande: s[0] + " _____ " + pr + " " + L.acc + ".",
      opciones: baraja([forms[i], budu[i]], j), correcta: forms[i], explicacion: "Para «voy a ir» va **" + forms[i] + "**, no бу́ду. " + ru1 }, base, { grupo: "MVe-" + j }));
    if (L.acc !== L.prep) out.push(Object.assign({ id: "U9-moved-" + j, tipo: "mov-fut", forma: "elegir", dificultad: 2, modulo: 7, pide: "Completá: «" + es2 + "»", grande: s[0] + " " + budu[i] + " " + pr + " _____.",
      opciones: baraja([L.prep, L.acc], j + 1), correcta: L.prep, explicacion: "Dónde vas a estar: prepositivo. " + ru2 }, base, { grupo: "MVd-" + j }));
  });
  U9_TRANSPORTE.forEach(([ru, es, em], j) => {
    const L = lugar(ru); if (!L) return;
    const dest = [["Москва́", "a Moscú"], ["Мадри́д", "a Madrid"], ["Пари́ж", "a París"]][j], D = lugar(dest[0]);
    const r = "Я пое́ду в " + D.acc + " на " + L.prep + ".", es1 = "Voy a ir " + dest[1] + " " + es + ".";
    out.push({ id: "U9-tr-" + j, tipo: "transporte", forma: "escribir", dificultad: 3, modulo: 7, grupo: "TR-" + j, items: ["lex:" + L.id], oir: r, pide: em + " Escribí en ruso: «" + es1 + "»", audio: r, audioManual: true,
      esperadas: [r, r.replace(/^Я /, "").replace(/^п/, "П")], idioma: "ru", explicacion: "**на " + L.prep + "**: на + prepositivo. " + r });
    out.push({ id: "U9-trel-" + j, tipo: "transporte", forma: "elegir", dificultad: 1, modulo: 7, grupo: "TRe-" + j, items: ["lex:" + L.id], pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja(["на " + L.prep, "в " + L.prep, "на " + L.nom], j), correcta: "на " + L.prep, explicacion: "**на " + L.prep + "** = " + es });
  });

  /* ── Módulo 8: preguntas ── */
  U9_PREGUNTAS.forEach(([ru, es], j) => {
    out.push({ id: "U9-preg-" + j, tipo: "pregunta", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PQ-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U9-pregd-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, grupo: "PQd-" + j, items: [], pide: "Escuchá y escribí la pregunta.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  [["Что ты бу́дешь де́лать за́втра?", "💻", "За́втра я бу́ду рабо́тать."], ["Что ты бу́дешь де́лать ве́чером?", "🎬", "Ве́чером я бу́ду смотре́ть фильм."], ["Куда́ ты пое́дешь?", "🇪🇸", "Я пое́ду в Испа́нию."],
   ["Что ты бу́дешь де́лать на выходны́х?", "🛋️", "На выходны́х я бу́ду отдыха́ть."], ["Ты бу́дешь рабо́тать за́втра?", "❌", "Нет, я не бу́ду рабо́тать."]].forEach(([q, em, r], j) =>
    out.push({ id: "U9-resp-" + j, tipo: "pregunta", forma: "escribir", dificultad: 2, modulo: 8, grupo: "RS-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: em + " Contestá en ruso.", audio: q, audioManual: true,
      esperadas: [r, r.replace(/^(За́втра|Ве́чером|На выходны́х) я /, "Я ")], idioma: "ru", explicacion: "— " + q + " — " + r }));

  /* ── Módulo 9: la semana de Ana (agenda) ── */
  const DIAS = [["в понеде́льник", "el lunes", "понеде́льник"], ["во вто́рник", "el martes", "вто́рник"], ["в сре́ду", "el miércoles", "среда́"], ["в четве́рг", "el jueves", "четве́рг"], ["в пя́тницу", "el viernes", "пя́тница"], ["в суббо́ту", "el sábado", "суббо́та"], ["в воскресе́нье", "el domingo", "воскресе́нье"]];
  const ACT = [["рабо́тать", "", "trabajar"], ["изуча́ть", "ру́сский", "estudiar ruso"], ["гуля́ть", "в па́рке", "pasear por el parque"], ["рабо́тать", "до́ма", "trabajar en casa"], ["пойти́", "в кино́", "ir al cine"], ["отдыха́ть", "", "descansar"], ["путеше́ствовать", "", "viajar"]];
  const agTxt = DIAS.map((d, k) => cap(d[2]) + " — " + ACT[k][2]);
  DIAS.forEach((d, k) => {
    const a = ACT[k], ruA = a[0] === "пойти́" ? cap(d[0]) + " А́нна " + poidu[2] + " " + a[1] + "." : cap(d[0]) + " А́нна " + budu[2] + " " + a[0] + (a[1] ? " " + a[1] : "") + ".";
    const ru1 = a[0] === "пойти́" ? cap(d[0]) + " я " + poidu[0] + " " + a[1] + "." : cap(d[0]) + " я " + budu[0] + " " + a[0] + (a[1] ? " " + a[1] : "") + ".";
    out.push({ id: "U9-ag-" + k, tipo: "agenda", forma: "elegir", dificultad: 2, modulo: 9, grupo: "AG-" + k, items: [], oir: ruA, texto: agTxt, pide: "Mirá la agenda de Ana. ¿Qué va a hacer " + d[1] + "?",
      opciones: baraja([a[2]].concat(baraja(ACT.filter(x => x[2] !== a[2]).map(x => x[2]), k).slice(0, 2)), k), correcta: a[2], explicacion: ruA });
    out.push({ id: "U9-agw-" + k, tipo: "agenda", forma: "escribir", dificultad: 3, modulo: 9, grupo: "AGW-" + k, items: [], oir: ru1, pide: "Escribí la frase en futuro, en primera persona.", grande: d[2] + " — " + a[2],
      audio: ru1, audioManual: true, esperadas: [ru1, ru1.replace(" я ", " ")], idioma: "ru", explicacion: ru1 });
  });
  /* Constructor de planes: día + hora + lugar + acción */
  [["в суббо́ту", "в де́вять часо́в", "в па́рке", "гуля́ть", "El sábado a las nueve voy a pasear por el parque."], ["в понеде́льник", "в во́семь часо́в", "в о́фисе", "рабо́тать", "El lunes a las ocho voy a trabajar en la oficina."],
   ["в воскресе́нье", "в час", "в рестора́не", "обе́дать", "El domingo a la una voy a almorzar en el restaurante."], ["в пя́тницу", "в семь часо́в", "до́ма", "гото́вить у́жин", "El viernes a las siete voy a cocinar la cena en casa."]].forEach(([d, h, l, a, es], j) => {
    const ok = cap(d) + " " + h + " я бу́ду " + a + " " + l + ".";
    out.push({ id: "U9-cons-" + j, tipo: "construir", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CS-" + j, items: [], oir: ok, pide: "Armá el plan con estas piezas.", grande: d + " · " + h + " · " + l + " · " + a, pista: es,
      audio: ok, audioManual: true, esperadas: [ok, cap(d) + " " + h + " я бу́ду " + l + " " + a + ".", cap(d) + " я бу́ду " + a + " " + l + " " + h + "."], idioma: "ru", explicacion: ok });
  });

  /* ── Módulo 10: viajes ── */
  [["В о́тпуске я пое́ду в Испа́нию.", "En las vacaciones voy a ir a España."], ["Я пое́ду на самолёте.", "Voy a ir en avión."], ["Я бу́ду жить в гости́нице.", "Voy a vivir en un hotel."],
   ["Я куплю́ биле́т.", null], ["Мы бу́дем путеше́ствовать по Росси́и.", null], ["За́втра я бу́ду покупа́ть биле́т.", "Mañana voy a comprar el pasaje."], ["На сле́дующей неде́ле у меня́ пое́здка.", null],
   ["Э́то бу́дет интере́сное путеше́ствие.", null], ["Я пое́ду в Росси́ю на по́езде.", "Voy a ir a Rusia en tren."]].forEach(([ru, es], j) => {
    if (!es) return;
    out.push({ id: "U9-via-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "VI-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U9-viad-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 10, grupo: "VId-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  /* Ampliación: посеща́ть */
  [["За́втра я бу́ду посеща́ть музе́й.", "Mañana voy a visitar un museo."], ["Мы бу́дем посеща́ть Москву́.", "Vamos a visitar Moscú."]].forEach(([ru, es], j) =>
    out.push({ id: "U9-amp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, ampliacion: true, grupo: "AM-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: ru + " посеща́ть (visitar) + acusativo." }));

  /* ── Módulo 11: los tres tiempos ── */
  verbosSinVivir.slice(0, 8).forEach((v, j) => {
    const comp = v.comps[0], quien = j % 2 ? ["Ма́ша", "f"] : ["Ива́н", "m"];
    const frases = [["🌙", "Вчера́", quien[0] + " " + v.pasado[quien[1]]], ["☀️", "Сего́дня", quien[0] + " " + v.presente[2]], ["🌅", "За́втра", quien[0] + " " + budu[2] + " " + v.ac]];
    frases.forEach(([em, t, cuerpo], k) => {
      const ru = t + " " + cuerpo + (comp[0] ? " " + comp[0] : "") + ".";
      if ((j + k) % 3) return;
      out.push({ id: "U9-tres-" + j + "-" + k, tipo: "tres", forma: "escribir", dificultad: 3, modulo: 11, grupo: "TT-" + j + "-" + k, items: ["lex:" + v.id], oir: ru,
        pide: em + " " + t + ": escribí la frase con «" + v.ac + "»" + (comp[0] ? " y «" + comp[0] + "»" : "") + ", para " + quien[0] + ".", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    });
    /* Detectá el error de tiempo: «Вчера́ … бу́дет» */
    const malo = ["Вчера́", quien[0], budu[2], v.ac].concat(comp[0] ? comp[0].split(" ") : []);
    out.push({ id: "U9-det11-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 11, grupo: "TD-" + j, items: ["lex:" + v.id], pide: "Tocá la palabra que no va con el tiempo.", palabras: malo, correcta: 0,
      explicacion: "**Вчера́** es pasado, pero la frase está en futuro: va **за́втра**. O, en pasado: «Вчера́ " + quien[0] + " " + v.pasado[quien[1]] + (comp[0] ? " " + comp[0] : "") + "»." });
  });
  /* Plan o realidad */
  [["Я бу́ду рабо́тать до́ма.", "Я рабо́тал в о́фисе.", "Trabajé en la oficina. (sos hombre)"], ["Мы бу́дем гуля́ть в па́рке.", "Мы бы́ли до́ма.", "Estuvimos en casa."],
   ["Она́ бу́дет гото́вить у́жин.", "Она́ у́жинала в рестора́не.", "Cenó en el restaurante."]].forEach(([plan, real, es], j) => {
    out.push({ id: "U9-plan-" + j, tipo: "plan-real", forma: "escribir", dificultad: 3, modulo: 11, grupo: "PR-" + j, items: [], oir: real, contexto: [{ p: "Plan:", ru: plan }], pide: "Pero la realidad fue otra. Escribí en ruso: «" + es + "»",
      audio: real, audioManual: true, esperadas: [real, real.replace("рабо́тал", "рабо́тала")], idioma: "ru", explicacion: "Plan (futuro): " + plan + " Realidad (pasado): " + real });
  });

  /* Lecturas (módulo 11) */
  U9_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U9-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 11, grupo: "L9-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U9-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 11, grupo: "L9v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* Vocabulario nuevo */
  const dicEs = { "плани́ровать": ["planear", 6], "собира́ться": ["tener pensado", 6], "мечта́ть": ["soñar con", 6], "ско́ро": ["pronto", 5], "послеза́втра": ["pasado mañana", 5], "че́рез": ["dentro de", 5],
    "пое́здка": ["viaje", 10], "путеше́ствие": ["viaje (largo)", 10], "биле́т": ["pasaje, boleto", 10], "по́езд": ["tren", 7], "самолёт": ["avión", 7], "путеше́ствовать": ["viajar", 3] };
  Object.keys(dicEs).forEach(ac => { const e = lex(ac); if (!e) return;
    out.push({ id: "U9-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: dicEs[ac][1], grupo: e.id, items: ["lex:" + e.id], oir: e.ru, pide: "Escribí en ruso: «" + dicEs[ac][0] + "»",
      audio: e.ru, audioManual: true, pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + dicEs[ac][0] }); });
  out.forEach(e => { if (e.explicacion) e.explicacion = u9Palabras(e.explicacion); if (e.pide) e.pide = u9Palabras(e.pide); });
  return out;
}

/* Proyecto: requisitos y consejos */
(function () {
  const m = UNIDAD_9.modulos.find(x => x.id === "u9m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*/).map(x => x.trim()).filter(x => pal(x).length >= 1);
  const BUDU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
  const MOV = ["пойду", "пойдешь", "пойдет", "пойдем", "пойдете", "пойдут", "поеду", "поедешь", "поедет", "поедем", "поедете", "поедут"];
  const esInf = w => info(w).some(x => (lexComerById(x[0]) || {}).posNormalized === "verbo" && K((lexComerById(x[0]) || {}).ru || "") === K(w));
  const futuros = t => { let n = 0; frases(t).forEach(f => { const w = pal(f).map(K); w.forEach((x, i) => { if (MOV.indexOf(x) >= 0) n++; else if (BUDU.indexOf(x) >= 0) n++; }); }); return n; };
  const TIEMPO = ["завтра", "послезавтра", "скоро", "потом", "утром", "днем", "вечером", "ночью", "сегодня"];
  const tiempos = t => pal(t).map(K).filter(w => TIEMPO.indexOf(w) >= 0).length + (K(t).match(/следующ(ей|ем)|этой неделе|на выходных|через (час|неделю)|(в|во) (понедельник|вторник|среду|четверг|пятницу|субботу|воскресенье)/g) || []).length;
  const lugares = t => (K(t).match(/(^|[^а-яё])(в|на) [а-яё-]+(е|и|у|ю|а|ах)(?![а-яё])/g) || []).length + (K(t).match(/(^|[^а-яё])дома(?![а-яё])/g) || []).length;
  const INT = /(^|[^а-яё])(хочу|хочешь|хочет|хотим|хотите|хотят|планирую|планируешь|планирует|планируем|планируете|планируют|собираюсь|собираешься|собирается|собираемся|собираетесь|собираются|мечтаю|мечтаешь|мечтает|мечтаем|мечтаете|мечтают)(?![а-яё])/g;
  const intenciones = t => (K(t).match(INT) || []).length;
  const negs = t => frases(t).filter(f => /(^|\s)не\s/i.test(f.replace(/\u0301/g, ""))).length;
  const viaje = t => /(поеду|поедешь|поедет|поедем|поедете|поедут|пойду|пойдешь|пойдет|пойдем|пойдете|пойдут|путешеств|поездк)/.test(K(t));
  const pasado = w => info(w).some(x => { const v = verboById(x[0]); return v && v.pasado && Object.values(v.pasado).some(f => K(f) === K(w)); });
  const presente = w => info(w).some(x => { const v = verboById(x[0]); return v && v.presente && v.presente.some(f => K(f) === K(w)); });
  m.requisitos = [
    { txt: "Entre 12 y 15 frases", fn: t => { const n = frases(t).length; return n >= 12 && n <= 15; } },
    { txt: "Al menos 8 verbos en futuro (бу́ду…, пойду́, пое́ду)", fn: t => futuros(t) >= 8 },
    { txt: "Al menos 5 expresiones de tiempo", fn: t => tiempos(t) >= 5 },
    { txt: "Al menos 3 lugares", fn: t => lugares(t) >= 3 },
    { txt: "Al menos 2 intenciones o deseos (хочу́, плани́рую, собира́юсь, мечта́ю)", fn: t => intenciones(t) >= 2 },
    { txt: "Al menos una frase negativa (не)", fn: t => negs(t) >= 1 },
    { txt: "Al menos un viaje o desplazamiento (пойду́, пое́ду…)", fn: t => viaje(t) },
    { txt: "Al menos una comparación con el pasado o el presente", fn: t => pal(t).some(w => pasado(w) || (presente(w) && BUDU.indexOf(K(w)) < 0 && !/^(хоч|хот|планиру|собира|мечта)/.test(K(w)))) }
  ];
  const PR = { "я": 0, "ты": 1, "он": 2, "она": 2, "мы": 3, "вы": 4, "они": 5 };
  const consejos = t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f), k = w.map(K);
      k.forEach((x, i) => {
        const b = BUDU.indexOf(x);
        if (b >= 0 && w[i + 1] && !esInf(w[i + 1]) && presente(w[i + 1])) out.push("Después de " + w[i] + " va el infinitivo, no «" + w[i + 1] + "».");
        if (b >= 0 && i > 0 && PR[k[i - 1]] != null && PR[k[i - 1]] !== b && !(PR[k[i - 1]] === 2 && b === 2)) out.push("Con " + w[i - 1] + " va **" + ["бу́ду", "бу́дешь", "бу́дет", "бу́дем", "бу́дете", "бу́дут"][PR[k[i - 1]]] + "**, no «" + w[i] + "».");
        if (b >= 0 && /^(идти|ехать)$/.test(k[i + 1] || "")) out.push("Para «voy a ir» se dice **пойду́** o **пое́ду**, no «" + w[i] + " " + w[i + 1] + "».");
      });
      if (/(^|\s)завтра(\s|,|$)/.test(K(f)) && w.some(pasado) && !k.some(x => BUDU.indexOf(x) >= 0)) out.push("«" + f + "»: con за́втра va el futuro.");
      if (/(^|\s)вчера(\s|,|$)/.test(K(f)) && k.some(x => BUDU.indexOf(x) >= 0 || MOV.indexOf(x) >= 0)) out.push("«" + f + "»: con вчера́ va el pasado.");
    });
    return [...new Set(out)];
  };
  m.consejos = [{ fn: consejos }];
  U9_PROYECTO2.requisitos = [
    { txt: "Entre 8 y 12 frases", fn: t => { const n = frases(t).length; return n >= 8 && n <= 12; } },
    { txt: "Al menos 2 frases en pasado", fn: t => frases(t).filter(f => pal(f).some(pasado)).length >= 2 },
    { txt: "Al menos 2 frases en presente", fn: t => frases(t).filter(f => pal(f).some(w => presente(w) && BUDU.indexOf(K(w)) < 0)).length >= 2 },
    { txt: "Al menos 2 frases en futuro", fn: t => frases(t).filter(f => pal(f).map(K).some(x => BUDU.indexOf(x) >= 0 || MOV.indexOf(x) >= 0)).length >= 2 }
  ];
  U9_PROYECTO2.consejos = [{ fn: consejos }];
})();

window.UNIDAD_9 = UNIDAD_9;
window.U9_PROYECTO2 = U9_PROYECTO2;
window.unidad9Modulo = unidad9Modulo;
window.ejerciciosUnidad9 = ejerciciosUnidad9;
window.u9Datos = u9Datos;
window.U9_MEZCLA = U9_MEZCLA;
