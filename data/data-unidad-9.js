/* ============================================================
   DATA-UNIDAD-9.JS — Unidad 9: Futuro y planes
   ------------------------------------------------------------
   Versión 11/10/2026 (profundización, aprobada por Manu). Contenido,
   vocabulario y banco de ejercicios.
   · Dos futuros: бу́ду + infinitivo (proceso) y el «presente» del verbo de
     resultado (прочита́ю, куплю́), módulo 3. Las parejas de la Unidad 8 y
     4 nuevas (U9_PARES). пойду́ / пое́ду, explicadas como el futuro de
     пойти́ / пое́хать (módulo 7).
   · Afuera С кем? / с друзья́ми (instrumental) y el dativo (позвоню́ ма́ме).
     «Каки́е у тебя́ пла́ны?» va como fórmula.
   · Fórmulas de tiempo: на сле́дующей неде́ле, в сле́дующем / бу́дущем году́,
     на выходны́х; че́рез + la cuenta (че́рез два дня).
   · Intención: хоте́ть, плани́ровать, собира́ться, мечта́ть, наде́яться,
     обеща́ть + infinitivo.
   · Vocabulario nuevo: 69 palabras del léxico + о́блачно (CMR-06152), en
     grupos por módulo (U9_GRUPOS).
   Formas de Verbos y Casos, nunca a mano.
   ============================================================ */

/* Verbos: "ruso": [infinitivo en español, complementos [[ruso, español]]] */
const U9_VERBOS = {
  "рабо́тать": ["trabajar", [["до́ма", "en casa"], ["в о́фисе", "en la oficina"]]], "учи́ться": ["estudiar", [["", ""]]],
  "чита́ть": ["leer", [["кни́гу", "un libro"]]], "писа́ть": ["escribir", [["письмо́", "una carta"]]], "смотре́ть": ["mirar", [["фильм", "una película"]]],
  "слу́шать": ["escuchar", [["му́зыку", "música"]]], "говори́ть": ["hablar", [["по-ру́сски", "en ruso"]]], "изуча́ть": ["estudiar", [["ру́сский", "ruso"]]],
  "отдыха́ть": ["descansar", [["", ""], ["до́ма", "en casa"]]], "гуля́ть": ["pasear", [["в па́рке", "por el parque"]]], "гото́вить": ["cocinar", [["у́жин", "la cena"]]],
  "покупа́ть": ["comprar", [["хлеб", "pan"]]], "де́лать": ["hacer", [["рабо́ту", "el trabajo"]]], "путеше́ствовать": ["viajar", [["", ""]]], "игра́ть": ["jugar", [["", ""]]],
  "жить": ["vivir", [["в Барсело́не", "en Barcelona"], ["в Москве́", "en Moscú"]]]
};
/* Quién: [ruso, español del sujeto, índice de persona 0-5] */
const U9_SUJ = [["Я", "", 0], ["Ты", "Tú", 1], ["Он", "Él", 2], ["Она́", "Ella", 2], ["Мы", "", 3], ["Вы", "Ustedes", 4], ["Они́", "Ellos", 5],
  ["А́нна", "Ana", 2], ["Ива́н", "Iván", 2], ["Ма́ша", "Masha", 2], ["Брат", "Mi hermano", 2]];
const U9_IR = ["voy a", "vas a", "va a", "vamos a", "van a", "van a"];
const U9_TIEMPO = [["за́втра", "mañana"], ["послеза́втра", "pasado mañana"], ["ско́ро", "pronto"], ["на э́той неде́ле", "esta semana"], ["на сле́дующей неде́ле", "la semana que viene"],
  ["в сле́дующем ме́сяце", "el mes que viene"], ["в сле́дующем году́", "el año que viene"], ["на выходны́х", "el fin de semana"], ["че́рез час", "dentro de una hora"], ["че́рез неде́лю", "dentro de una semana"]];
const U9_INTENCION = { "хоте́ть": ["quiero", "quieres", "quiere", "queremos", "quieren", "quieren"], "плани́ровать": ["planeo", "planeas", "planea", "planeamos", "planean", "planean"],
  "собира́ться": ["tengo pensado", "tienes pensado", "tiene pensado", "tenemos pensado", "tienen pensado", "tienen pensado"], "мечта́ть": ["sueño con", "sueñas con", "sueña con", "soñamos con", "sueñan con", "sueñan con"] };
/* Destinos: [ruso del lugar, a pie (пойду́) o en vehículo (пое́ду), español «a…», «en…»] */
const U9_DESTINOS = [["рестора́н", "п", "al restaurante", "en el restaurante"], ["магази́н", "п", "al negocio", "en el negocio"], ["парк", "п", "al parque", "en el parque"],
  ["кино́", "п", "al cine", "en el cine"], ["рабо́та", "е", "al trabajo", "en el trabajo"], ["Москва́", "е", "a Moscú", "en Moscú"], ["Мадри́д", "е", "a Madrid", "en Madrid"],
  ["Испа́ния", "е", "a España", "en España"], ["Росси́я", "е", "a Rusia", "en Rusia"], ["Пари́ж", "е", "a París", "en París"]];
const U9_TRANSPORTE = [["по́езд", "en tren", "🚆"], ["самолёт", "en avión", "✈️"], ["маши́на", "en coche", "🚗"]];

/* Parejas de aspecto para el futuro (11/10/2026): [proceso, resultado, español]; las 12 de la Unidad 8 y 4 nuevas */
const U9_PARES = [["чита́ть", "прочита́ть", "leer"], ["писа́ть", "написа́ть", "escribir"], ["де́лать", "сде́лать", "hacer"], ["смотре́ть", "посмотре́ть", "mirar"],
  ["за́втракать", "поза́втракать", "desayunar"], ["гото́вить", "пригото́вить", "preparar, cocinar"], ["покупа́ть", "купи́ть", "comprar"], ["встава́ть", "встать", "levantarse"],
  ["возвраща́ться", "верну́ться", "volver"], ["ложи́ться", "лечь", "acostarse"], ["отдыха́ть", "отдохну́ть", "descansar"],
  ["начина́ть", "нача́ть", "empezar"], ["зака́нчивать", "зако́нчить", "terminar"], ["звони́ть", "позвони́ть", "llamar por teléfono"], ["брать", "взять", "tomar, llevar"]];

const U9_VISTAS = {
  2: "путеше́ствовать",
  3: "нача́ть зако́нчить звони́ть позвони́ть взять ещё обяза́тельно биле́т",
  4: "прогно́з со́лнечно о́блачно гра́дус тума́н жара́ моро́з о́блако наве́рное",
  5: "ско́ро сле́дующий че́рез послеза́втра бу́дущий бу́дущее когда́-нибудь",
  6: "плани́ровать собира́ться мечта́ть наде́яться обеща́ть гото́виться подгото́виться мечта́ цель реше́ние пригласи́ть приглаша́ть поступи́ть профе́ссия карье́ра сдать вы́учить научи́ться попро́бовать вы́играть",
  7: "пойти́ пое́хать по́езд самолёт пешко́м мотоци́кл такси́ лете́ть лета́ть тра́нспорт маршру́т",
  9: "спи́сок зада́ча успе́ть",
  10: "пое́здка путеше́ствие посеща́ть бага́ж ви́за па́спорт авиабиле́т рейс вы́лет прилёт путеше́ственник тури́зм тури́ст гид фотоаппара́т заброни́ровать брони́ровать собра́ть собира́ть купа́ться загора́ть посети́ть оста́ться провести́ отъе́зд прие́зд возвраще́ние"
};
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario */
const U9_GLOSA = {
  "путеше́ствовать": "viajar", "ско́ро": "pronto", "сле́дующий": "siguiente, que viene", "че́рез": "dentro de", "послеза́втра": "pasado mañana",
  "плани́ровать": "planear", "собира́ться": "tener pensado", "мечта́ть": "soñar con", "пойти́": "ir (una vez, a pie)", "пое́хать": "ir (una vez, en vehículo)",
  "по́езд": "tren", "самолёт": "avión", "пое́здка": "viaje, salida", "путеше́ствие": "viaje (largo)", "биле́т": "billete", "посеща́ть": "visitar",
  "нача́ть": "empezar (una vez)", "зако́нчить": "terminar (una vez)", "звони́ть": "llamar por teléfono", "позвони́ть": "llamar (una vez)", "взять": "tomar, llevar (una vez)",
  "ещё": "todavía", "обяза́тельно": "sin falta", "прогно́з": "pronóstico", "со́лнечно": "hay sol", "о́блачно": "está nublado", "гра́дус": "grado", "тума́н": "niebla",
  "жара́": "calor fuerte", "моро́з": "helada", "о́блако": "nube", "наве́рное": "seguramente", "бу́дущий": "próximo, que viene", "бу́дущее": "el futuro", "когда́-нибудь": "algún día",
  "наде́яться": "tener esperanza", "обеща́ть": "prometer", "гото́виться": "prepararse", "подгото́виться": "prepararse (y estar listo)", "мечта́": "sueño", "цель": "objetivo",
  "реше́ние": "decisión", "пригласи́ть": "invitar (una vez)", "приглаша́ть": "invitar", "поступи́ть": "entrar (a la universidad)", "профе́ссия": "profesión", "карье́ра": "carrera profesional",
  "сдать": "aprobar (un examen)", "вы́учить": "aprender (de memoria)", "научи́ться": "aprender a", "попро́бовать": "probar", "вы́играть": "ganar",
  "пешко́м": "a pie", "мотоци́кл": "moto", "такси́": "taxi", "лете́ть": "volar (ahora, hacia un lugar)", "лета́ть": "volar (en general)", "тра́нспорт": "transporte", "маршру́т": "recorrido",
  "спи́сок": "lista", "зада́ча": "tarea", "успе́ть": "llegar a tiempo", "бага́ж": "equipaje", "ви́за": "visa", "па́спорт": "pasaporte", "авиабиле́т": "billete de avión",
  "рейс": "vuelo", "вы́лет": "salida (del vuelo)", "прилёт": "llegada (del vuelo)", "путеше́ственник": "viajero", "тури́зм": "turismo", "тури́ст": "turista", "гид": "guía",
  "фотоаппара́т": "cámara de fotos", "заброни́ровать": "reservar (una vez)", "брони́ровать": "reservar", "собра́ть": "juntar, armar (una vez)", "собира́ть": "juntar, armar",
  "купа́ться": "bañarse (en el mar)", "загора́ть": "tomar sol", "посети́ть": "visitar (una vez)", "оста́ться": "quedarse", "провести́": "pasar (el tiempo)",
  "отъе́зд": "partida", "прие́зд": "llegada", "возвраще́ние": "vuelta, regreso"
};
/* Vocabulario nuevo (11/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página */
const U9_GRUPOS = [
  [3, "Parejas nuevas", "нача́ть зако́нчить звони́ть позвони́ть взять"],
  [3, "Todavía y sin falta", "ещё обяза́тельно"],
  [4, "El tiempo que va a hacer", "прогно́з со́лнечно о́блачно гра́дус тума́н жара́ моро́з о́блако наве́рное"],
  [5, "Cuándo va a pasar", "ско́ро послеза́втра сле́дующий бу́дущий бу́дущее когда́-нибудь че́рез"],
  [6, "Planes y deseos", "плани́ровать собира́ться мечта́ть наде́яться обеща́ть мечта́ цель реше́ние пригласи́ть приглаша́ть гото́виться подгото́виться"],
  [6, "Planes de vida", "поступи́ть сдать вы́учить научи́ться попро́бовать вы́играть профе́ссия карье́ра"],
  [7, "Cómo vas a ir", "пойти́ пое́хать по́езд самолёт мотоци́кл такси́ пешко́м лете́ть лета́ть тра́нспорт маршру́т"],
  [9, "Para organizarte", "спи́сок зада́ча успе́ть"],
  [10, "Preparar el viaje", "биле́т авиабиле́т заброни́ровать брони́ровать собра́ть собира́ть па́спорт ви́за бага́ж рейс вы́лет прилёт"],
  [10, "Allí", "пое́здка путеше́ствие тури́ст тури́зм путеше́ственник гид фотоаппара́т купа́ться загора́ть посеща́ть посети́ть оста́ться провести́ отъе́зд прие́зд возвраще́ние"]
];
const U9_AMPLIACION_RU = "";   /* 05/10/2026: посеща́ть pasó a la base (Manu) */

const U9_LECTURAS = [
  { id: "finde", titulo: "Пла́ны на выходны́е", lineas: [
      ["В суббо́ту я бу́ду до́ма.", "El sábado voy a estar en casa."], ["У́тром я бу́ду чита́ть, а пото́м бу́ду гото́вить обе́д.", "Por la mañana voy a leer, y después voy a cocinar el almuerzo."],
      ["Ве́чером я пойду́ в кино́.", "Por la noche voy a ir al cine."], ["В воскресе́нье я бу́ду отдыха́ть.", "El domingo voy a descansar."]],
    preguntas: [["¿Dónde va a estar el sábado?", "до́ма", ["в кино́", "на рабо́те"]], ["¿Adónde va a ir por la noche?", "в кино́", ["в парк", "в рестора́н"]], ["¿Qué va a hacer el domingo?", "бу́дет отдыха́ть", ["бу́дет рабо́тать", "бу́дет гото́вить"]]],
    vf: [["В суббо́ту я бу́ду на рабо́те.", false], ["Ве́чером я пойду́ в кино́.", true], ["В воскресе́нье я бу́ду отдыха́ть.", true]] },
  { id: "viaje", titulo: "Пое́здка в Москву́", lineas: [
      ["В сле́дующем ме́сяце Ма́ша пое́дет в Москву́.", "El mes que viene Masha va a ir a Moscú."], ["Она́ пое́дет на по́езде.", "Va a ir en tren."],
      ["Она́ бу́дет жить в гости́нице в це́нтре.", "Va a vivir en un hotel en el centro."], ["Там она́ бу́дет гуля́ть и говори́ть по-ру́сски.", "Allí va a pasear y hablar en ruso."]],
    preguntas: [["¿Adónde va a ir Masha?", "в Москву́", ["в Москве́", "в Мадри́д"]], ["¿Cómo va a ir?", "на по́езде", ["на самолёте", "на маши́не"]], ["¿Dónde va a vivir?", "в гости́нице", ["до́ма", "в кварти́ре"]]],
    vf: [["Ма́ша пое́дет на самолёте.", false], ["Она́ бу́дет говори́ть по-ру́сски.", true], ["Ма́ша пое́дет в Москву́ на сле́дующей неде́ле.", false]] },
  { id: "tres", titulo: "Вчера́, сего́дня, за́втра", lineas: [
      ["Вчера́ Ива́н рабо́тал до́ма.", "Ayer Iván trabajó en casa."], ["Сего́дня он рабо́тает в о́фисе.", "Hoy trabaja en la oficina."],
      ["За́втра он бу́дет рабо́тать в кафе́.", "Mañana va a trabajar en un café."], ["В про́шлом году́ он жил в Буэ́нос-А́йресе.", "El año pasado vivía en Buenos Aires."],
      ["Сейча́с он живёт в Барсело́не.", "Ahora vive en Barcelona."], ["В сле́дующем году́ он бу́дет путеше́ствовать.", "El año que viene va a viajar."]],
    preguntas: [["¿Dónde trabaja hoy?", "в о́фисе", ["до́ма", "в кафе́"]], ["¿Dónde va a trabajar mañana?", "в кафе́", ["в о́фисе", "до́ма"]], ["¿Qué va a hacer el año que viene?", "бу́дет путеше́ствовать", ["бу́дет рабо́тать", "бу́дет жить в Барсело́не"]]],
    vf: [["Вчера́ Ива́н рабо́тал в о́фисе.", false], ["Сейча́с он живёт в Барсело́не.", true], ["В сле́дующем году́ он бу́дет путеше́ствовать.", true]] }
];
const U9_PREGUNTAS = [["Что ты бу́дешь де́лать за́втра?", "¿Qué vas a hacer mañana?"], ["Что ты бу́дешь де́лать ве́чером?", "¿Qué vas a hacer por la noche?"],
  ["Что ты бу́дешь де́лать на выходны́х?", "¿Qué vas a hacer el fin de semana?"], ["Каки́е у тебя́ пла́ны?", "¿Qué planes tienes?"], ["Куда́ ты пое́дешь?", "¿Adónde vas a ir?"],
  ["Где ты бу́дешь за́втра?", "¿Dónde vas a estar mañana?"], ["Когда́ ты бу́дешь там?", "¿Cuándo vas a estar allí?"], ["Ты бу́дешь рабо́тать за́втра?", "¿Vas a trabajar mañana?"]];

const UNIDAD_9 = {
  id: 9,
  titulo: "Futuro y planes",
  tituloRu: "Бу́дущее вре́мя и пла́ны",
  objetivo: "Hablar de lo que vas a hacer, de tus planes y de tus viajes, y combinar pasado, presente y futuro.",
  tiempo: "3 a 4 semanas con práctica diaria (unas 35–45 horas)",
  modulos: [
    { id: "u9m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "Pasado, presente y futuro", resumen: "Вчера́ рабо́тал · сего́дня рабо́таю · за́втра бу́ду рабо́тать.",
      intro: "Ya sabes contar lo que pasó y lo que pasa. Ahora, lo que va a pasar. Como en el pasado, el ruso tiene menos formas que el español, y la pareja de verbos que ya conoces vuelve a decidir.",
      secciones: [
        { id: "u9-tres-tiempos", titulo: "La misma acción, tres veces",
          texto: "Con la misma acción en los tres tiempos se ve qué cambia: en pasado, la terminación **-л**; en presente, la persona; en futuro, бу́ду adelante y el verbo en infinitivo.",
          ejemplos: [
            { ru: "Вчера́ я {рабо́тал}.", es: "Ayer trabajé.", por: "Pasado: **-л**." },
            { ru: "Сего́дня я {рабо́таю}.", es: "Hoy trabajo.", por: "Presente: la terminación de yo." },
            { ru: "За́втра я {бу́ду рабо́тать}.", es: "Mañana voy a trabajar.", por: "Futuro: бу́ду + infinitivo." },
            { ru: "За́втра мы {бу́дем смотре́ть} фильм.", es: "Mañana vamos a ver una película.", por: "бу́ду cambia según la persona: бу́дем." }],
          destacado: "вчера́ рабо́тал → сего́дня рабо́таю → за́втра бу́ду рабо́тать",
          chequeo: [{ pide: "«Mañana voy a leer».", opciones: ["За́втра я бу́ду чита́ть.", "За́втра я чита́л."], ok: "За́втра я бу́ду чита́ть.", por: "Futuro: бу́ду + infinitivo." }] },
        { id: "u9-dos-futuros", titulo: "Trabajaré o voy a trabajar",
          texto: "En español hay dos futuros: «trabajaré» y «voy a trabajar». En ruso, para una actividad, los dos son бу́ду рабо́тать.\nPero el ruso distingue otra cosa, la misma que en el pasado: si vas a estar haciendo algo (proceso) o si lo vas a terminar (resultado). Para el resultado hay otra forma, sin бу́ду, que ves más adelante en esta unidad.",
          ejemplos: [
            { ru: "За́втра я {бу́ду чита́ть}.", es: "Mañana voy a leer (leeré).", por: "La actividad: бу́ду + infinitivo." },
            { ru: "За́втра я {прочита́ю} кни́гу.", es: "Mañana voy a terminar el libro.", por: "El resultado: otra forma, sin бу́ду." }],
          comparacion: "«Trabajaré» y «voy a trabajar» son lo mismo para el ruso. Lo que el ruso separa es si la acción llega a su fin.",
          mas: { texto: "Es la misma idea que en el pasado: чита́л / прочита́л. En el futuro aparece de nuevo: бу́ду чита́ть / прочита́ю. Si entendiste el pasado, el futuro ya está a medio camino.",
            ejemplos: [{ ru: "Вчера́ я {прочита́л} кни́гу. За́втра я {прочита́ю} газе́ту.", es: "Ayer terminé el libro. Mañana voy a terminar el diario.", por: "Resultado en pasado y en futuro." }] },
          chequeo: [{ pide: "«Trabajaré mañana» se dice…", opciones: ["За́втра я бу́ду рабо́тать.", "За́втра я рабо́таю бу́ду."], ok: "За́втра я бу́ду рабо́тать.", por: "«Trabajaré» y «voy a trabajar»: бу́ду рабо́тать." }] }
      ] },
    { id: "u9m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Бу́ду + infinitivo", resumen: "Я бу́ду рабо́тать.",
      intro: "El futuro de proceso se arma con бу́ду, que es el futuro de быть, más el infinitivo del verbo. Como el «voy a» del español.",
      secciones: [
        { id: "u9-budu-formas", titulo: "Las formas de бу́ду",
          texto: "бу́ду cambia según la persona, con las terminaciones del presente que ya conoces:\n{я} бу́ду · ты бу́дешь · он / она́ бу́дет\nмы бу́дем · вы бу́дете · они́ бу́дут",
          ejemplos: [
            { ru: "Я {бу́ду} рабо́тать.", es: "Voy a trabajar.", por: "Con я, бу́ду." },
            { ru: "Ты {бу́дешь} учи́ться.", es: "Vas a estudiar.", por: "Con ты, бу́дешь." },
            { ru: "Она́ {бу́дет} чита́ть.", es: "Ella va a leer.", por: "Con она́, бу́дет." },
            { ru: "Они́ {бу́дут} путеше́ствовать.", es: "Ellos van a viajar.", por: "Con они́, бу́дут." }],
          destacado: "бу́ду + infinitivo = voy a + infinitivo",
          chequeo: [{ pide: "Мы ___ отдыха́ть.", opciones: ["бу́дем", "бу́дут", "бу́ду"], ok: "бу́дем", por: "мы: бу́дем." }] },
        { id: "u9-budu-inf", titulo: "El segundo verbo no cambia",
          texto: "Lo que cambia es бу́ду; el otro verbo queda siempre en infinitivo, como en español: voy a trabajar, vamos a trabajar.\nY con бу́ду va solo el verbo de proceso: el de resultado no se usa con бу́ду.",
          ejemplos: [
            { ru: "Мы {бу́дем рабо́тать} до́ма.", es: "Vamos a trabajar en casa.", por: "бу́дем cambia; рабо́тать no." },
            { ru: "Вы {бу́дете смотре́ть} фильм?", es: "¿Van a ver la película?", por: "Pregunta: el mismo orden, con entonación." },
            { ru: "Я {не бу́ду} рабо́тать.", es: "No voy a trabajar.", por: "не va delante de бу́ду." }],
          errores: [
            { mal: "Я бу́ду рабо́таю.", bien: "Я бу́ду {рабо́тать}.", por: "Después de бу́ду, el infinitivo." },
            { mal: "Я бу́ду прочита́ть кни́гу.", bien: "Я {прочита́ю} кни́гу.", por: "El de resultado no va con бу́ду: tiene su propio futuro." }],
          mas: { texto: "¿Por qué el de resultado no va con бу́ду? Porque su presente ya es futuro: прочита́ю quiere decir «lo voy a leer». Poner бу́ду adelante sería decir dos veces «voy a». Lo ves más adelante en esta unidad." },
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["Он бу́дет гото́вить у́жин.", "Он бу́дет гото́вит у́жин."], ok: "Он бу́дет гото́вить у́жин.", por: "Después de бу́дет, el infinitivo: гото́вить." }] }
      ] },
    { id: "u9m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Lo voy a terminar", resumen: "бу́ду чита́ть / прочита́ю.",
      intro: "Los verbos de resultado que conociste en pasado (прочита́л, купи́л, верну́лся) tienen futuro, y se arma de la manera más simple: se conjugan como un presente, pero significan futuro.",
      secciones: [
        { id: "u9-fut-resultado", titulo: "El presente del verbo de resultado es futuro",
          antes: { pide: "Я чита́ю = «leo». ¿Qué será Я прочита́ю?", opciones: ["Lo voy a leer (entero)", "Lo leo ahora"], ok: "Lo voy a leer (entero)", por: "El verbo de resultado no tiene presente: su «presente» es futuro." },
          texto: "Un verbo de resultado no puede decir «ahora»: algo que está terminado no está pasando. Por eso, cuando se conjuga como un presente, dice futuro:\nчита́ю (leo) → прочита́ю (voy a leer, lo voy a terminar)\nде́лаю (hago) → сде́лаю (lo voy a hacer)\nпокупа́ю (compro) → куплю́ (voy a comprar)\nLas terminaciones son las del presente: **-ю**, **-ешь**, **-ет**…",
          ejemplos: [
            { ru: "За́втра я {прочита́ю} кни́гу.", es: "Mañana voy a terminar el libro.", por: "прочита́ю: la forma de yo, con sentido de futuro." },
            { ru: "Ве́чером она́ {пригото́вит} у́жин.", es: "Por la noche ella va a preparar la cena.", por: "пригото́вит: la cena va a estar lista." },
            { ru: "Мы {ку́пим} хлеб.", es: "Vamos a comprar pan.", por: "купи́ть → ку́пим." },
            { ru: "Я {сде́лаю} э́то за́втра.", es: "Lo hago mañana.", por: "Sin бу́ду: сде́лаю ya es futuro." }],
          destacado: "прочита́ю = voy a leerlo (entero) · бу́ду чита́ть = voy a estar leyendo",
          desarmar: { es: "Mañana voy a comprar el billete.", partes: [
            { txt: "За́втра", rol: "Cuándo", nota: "Un momento del futuro." },
            { txt: "я", rol: "Quién", nota: "La terminación del verbo es la de yo." },
            { txt: "куплю́", rol: "Verbo de resultado", nota: "Conjugado como presente: dice futuro. Sin бу́ду." },
            { txt: "биле́т", rol: "Qué", nota: "Acusativo: lo que se compra." }] },
          errores: [{ mal: "Сейча́с я прочита́ю газе́ту (por «ahora leo»).", bien: "Сейча́с я {чита́ю} газе́ту.", por: "Lo que pasa ahora va con el de proceso." }],
          chequeo: [{ pide: "Я напишу́ письмо́. ¿Cuándo?", opciones: ["En el futuro", "Ahora"], ok: "En el futuro", por: "напишу́ es de resultado: su presente es futuro." }] },
        { id: "u9-fut-cual", titulo: "¿Бу́ду чита́ть o прочита́ю?",
          texto: "Las mismas pistas que en el pasado:\nCuánto va a durar (весь день, два часа́, до́лго) o lo que se va a repetir (ка́ждый день, ча́сто) → proceso: бу́ду + infinitivo.\nUna acción que vas a terminar, con un resultado → resultado: прочита́ю, куплю́.\nSi solo dices qué vas a hacer, sin pensar en el resultado, va el de proceso: Что ты бу́дешь де́лать? — Я бу́ду чита́ть.",
          ejemplos: [
            { ru: "За́втра я {бу́ду чита́ть} весь день.", es: "Mañana voy a leer todo el día.", por: "весь день: proceso." },
            { ru: "За́втра я {прочита́ю} э́ту кни́гу.", es: "Mañana voy a terminar este libro.", por: "Un resultado: resultado." },
            { ru: "Я {бу́ду покупа́ть} хлеб ка́ждый день.", es: "Voy a comprar pan todos los días.", por: "ка́ждый день: se repite, proceso." },
            { ru: "Я {куплю́} хлеб и {верну́сь}.", es: "Voy a comprar pan y vuelvo.", por: "Una vez, una cosa después de otra: resultado." }],
          destacado: "весь день, ка́ждый день → бу́ду + infinitivo · una vez, terminado → прочита́ю",
          errores: [
            { mal: "За́втра я прочита́ю весь день.", bien: "За́втра я {бу́ду чита́ть} весь день.", por: "Cuánto dura: proceso." },
            { mal: "Я ка́ждый день куплю́ хлеб.", bien: "Я ка́ждый день {бу́ду покупа́ть} хлеб.", por: "Lo que se repite: proceso." }],
          chequeo: [
            { pide: "«Voy a trabajar todo el día».", opciones: ["Я бу́ду рабо́тать весь день.", "Я сде́лаю рабо́ту весь день."], ok: "Я бу́ду рабо́тать весь день.", por: "Cuánto dura: proceso." },
            { pide: "«Mañana voy a escribir la carta (y la mando)».", opciones: ["За́втра я напишу́ письмо́.", "За́втра я бу́ду писа́ть письмо́."], ok: "За́втра я напишу́ письмо́.", por: "Va a estar terminada: resultado." }] },
        { id: "u9-fut-formas", titulo: "Las formas que cambian",
          texto: "La mayoría se conjuga igual que su pareja, con el prefijo adelante: чита́ю → прочита́ю, де́лаю → сде́лаю, за́втракаю → поза́втракаю. Algunas cambian, y conviene mirarlas en la tabla:\nнаписа́ть → напишу́, напи́шешь\nкупи́ть → куплю́, ку́пишь\nпригото́вить → пригото́влю, пригото́вишь\nвстать → вста́ну, вста́нешь\nверну́ться → верну́сь, вернёшься\nлечь → ля́гу, ля́жешь",
          ejemplos: [
            { ru: "Я {вста́ну} в семь часо́в.", es: "Me voy a levantar a las siete.", por: "встать → вста́ну: aparece **-н-**." },
            { ru: "Он {вернётся} в во́семь часо́в.", es: "Va a volver a las ocho.", por: "верну́сь, вернёшься, вернётся: con **-ся** / **-сь**, como en presente." },
            { ru: "Мы {ля́жем} ра́но.", es: "Nos vamos a acostar temprano.", por: "лечь → ля́гу, ля́жем: especial, como en el pasado (лёг)." }],
          mas: { texto: "Igual que en el presente, en la forma de yo a veces cambia una consonante: купи́ть → куплю́ (aparece **л**), пригото́вить → пригото́влю, написа́ть → напишу́ (**с** → **ш**). Son las mismas alternancias que ya viste en люблю́ o пишу́." },
          chequeo: [{ pide: "За́втра я ___ (купи́ть) биле́т.", opciones: ["куплю́", "купи́ю", "бу́ду купи́ть"], ok: "куплю́", por: "купи́ть → куплю́, sin бу́ду." }] },
        { id: "u9-pares-nuevos", titulo: "Parejas nuevas",
          texto: "Cuatro parejas más, muy útiles para hablar de planes:\nначина́ть → нача́ть (empezar): начну́, начнёшь\nзака́нчивать → зако́нчить (terminar): зако́нчу, зако́нчишь\nзвони́ть → позвони́ть (llamar por teléfono): позвоню́, позвони́шь\nбрать → взять (tomar): возьму́, возьмёшь",
          ejemplos: [
            { ru: "За́втра я {начну́} рабо́тать в де́вять.", es: "Mañana voy a empezar a trabajar a las nueve.", por: "нача́ть → начну́." },
            { ru: "Я {зако́нчу} и {позвоню́}.", es: "Termino y te llamo.", por: "Dos acciones, una tras otra: resultado." },
            { ru: "Я {возьму́} кни́гу.", es: "Voy a llevarme el libro.", por: "взять → возьму́: otra palabra." },
            { ru: "Ра́ньше я ча́сто {звони́л} домо́й.", es: "Antes llamaba a menudo a casa.", por: "Se repetía: звони́ть, de proceso." }],
          ojo: "Después de нача́ть y зако́нчить va el infinitivo de proceso: начну́ рабо́тать, зако́нчу чита́ть.",
          mas: { texto: "Con ещё не («todavía no») se dice lo que todavía no pasó: Я ещё не позвони́л («todavía no llamé»). Y обяза́тельно («sin falta») refuerza una promesa: Я обяза́тельно позвоню́ («te llamo sin falta»).",
            ejemplos: [
              { ru: "Я {ещё не} зако́нчил.", es: "Todavía no terminé.", por: "ещё не + pasado." },
              { ru: "Я {обяза́тельно} позвоню́.", es: "Te llamo sin falta.", por: "Una promesa: resultado." }] },
          chequeo: [{ pide: "«Voy a empezar a estudiar ruso».", opciones: ["Я начну́ изуча́ть ру́сский.", "Я начну́ изуча́ю ру́сский."], ok: "Я начну́ изуча́ть ру́сский.", por: "Después de нача́ть, el infinitivo de proceso." }] }
      ] },
    { id: "u9m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Быть en futuro", resumen: "Я бу́ду до́ма. Бу́дет дождь.",
      intro: "бу́ду solo, sin otro verbo, es «voy a estar». Con él se dice dónde vas a estar, cómo va a estar el tiempo y qué vas a tener.",
      secciones: [
        { id: "u9-byt-fut", titulo: "Dónde vas a estar",
          texto: "бу́ду + dónde (в o на + prepositivo, o до́ма): Я бу́ду до́ма («voy a estar en casa»).",
          ejemplos: [
            { ru: "Я {бу́ду} до́ма.", es: "Voy a estar en casa.", por: "бу́ду solo = voy a estar." },
            { ru: "Ты {бу́дешь} на рабо́те?", es: "¿Vas a estar en el trabajo?", por: "на рабо́те: prepositivo." },
            { ru: "Она́ {бу́дет} в Москве́.", es: "Ella va a estar en Moscú.", por: "в Москве́: dónde." },
            { ru: "Мы {бу́дем} в рестора́не.", es: "Vamos a estar en el restaurante.", por: "мы: бу́дем." }],
          destacado: "Где ты бу́дешь за́втра? — Я бу́ду до́ма.",
          chequeo: [{ pide: "«Mañana voy a estar en Madrid».", opciones: ["За́втра я бу́ду в Мадри́де.", "За́втра я в Мадри́де бу́ду быть."], ok: "За́втра я бу́ду в Мадри́де.", por: "бу́ду solo ya es «voy a estar»." }] },
        { id: "u9-byt-tres", titulo: "Быть en los tres tiempos",
          texto: "En presente, быть no se dice; en pasado y en futuro, sí:\nВчера́ я был до́ма. (estuve)\nСейча́с я до́ма. (estoy: sin verbo)\nЗа́втра я бу́ду до́ма. (voy a estar)",
          ejemplos: [
            { ru: "Вчера́ она́ {была́} на рабо́те.", es: "Ayer ella estuvo en el trabajo.", por: "Pasado: была́." },
            { ru: "Сейча́с она́ на рабо́те.", es: "Ahora está en el trabajo.", por: "Presente: sin быть." },
            { ru: "За́втра она́ {бу́дет} на рабо́те.", es: "Mañana va a estar en el trabajo.", por: "Futuro: бу́дет." }],
          errores: [{ mal: "За́втра я до́ма бу́ду быть.", bien: "За́втра я {бу́ду} до́ма.", por: "бу́ду ya es el futuro de быть: no se repite." }],
          chequeo: [{ pide: "Сейча́с я ___ в о́фисе.", opciones: ["(nada)", "бу́ду", "был"], ok: "(nada)", por: "En presente, быть no se dice." }] },
        { id: "u9-clima", titulo: "Cómo va a estar el tiempo",
          texto: "Para el clima, бу́дет + cómo o qué: бу́дет хо́лодно, бу́дет жа́рко, бу́дет со́лнечно, бу́дет о́блачно, бу́дет дождь, бу́дет снег, бу́дет тума́н. Para la temperatura, el número y гра́дус, con la cuenta de siempre: два гра́дуса, пять гра́дусов.\nпрогно́з es el pronóstico.",
          ejemplos: [
            { ru: "За́втра {бу́дет} со́лнечно.", es: "Mañana va a haber sol.", por: "Sin sujeto: бу́дет." },
            { ru: "В суббо́ту {бу́дет} дождь.", es: "El sábado va a llover.", por: "Va a haber lluvia: бу́дет дождь." },
            { ru: "{Бу́дет} два́дцать {гра́дусов}.", es: "Va a hacer veinte grados.", por: "20 → гра́дусов, como часо́в." },
            { ru: "Ле́том {бу́дет} жара́.", es: "En verano va a hacer mucho calor.", por: "жара́: el calor fuerte." }],
          destacado: "За́втра бу́дет дождь. · Бу́дет пять гра́дусов.",
          mas: { texto: "En pasado, el clima usa бы́ло (бы́ло хо́лодно) o el género de la palabra (был дождь, была́ жара́); en futuro, siempre бу́дет: бу́дет хо́лодно, бу́дет дождь, бу́дет жара́. El futuro es más fácil: no mira el género. Con наве́рное («seguramente») el pronóstico suena menos seguro: За́втра, наве́рное, бу́дет дождь.",
            ejemplos: [
              { ru: "Вчера́ {был} моро́з, а за́втра {бу́дет} тума́н.", es: "Ayer hubo helada y mañana va a haber niebla.", por: "Pasado según el género; futuro, siempre бу́дет." }] },
          chequeo: [{ pide: "«Mañana va a estar nublado».", opciones: ["За́втра бу́дет о́блачно.", "За́втра бы́ло о́блачно."], ok: "За́втра бу́дет о́блачно.", por: "Futuro: бу́дет." }] },
        { id: "u9-u-menya-budet", titulo: "Voy a tener: у меня́ бу́дет",
          texto: "у меня́ есть («tengo») en futuro es у меня́ бу́дет («voy a tener»). En futuro no cambia por género: бу́дет para una cosa, бу́дут para varias.",
          ejemplos: [
            { ru: "Ле́том у меня́ {бу́дет} о́тпуск.", es: "En verano voy a tener vacaciones.", por: "Una cosa: бу́дет." },
            { ru: "У нас {бу́дет} пра́здник.", es: "Vamos a tener una fiesta.", por: "Una cosa: бу́дет, sea masculina o femenina." },
            { ru: "У меня́ {бу́дут} кани́кулы.", es: "Voy a tener vacaciones (de la escuela).", por: "кани́кулы es plural: бу́дут." }],
          chequeo: [{ pide: "За́втра у меня́ ___ встре́ча.", opciones: ["бу́дет", "бу́ду", "была́"], ok: "бу́дет", por: "Una cosa, en futuro: бу́дет." }] }
      ] },
    { id: "u9m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Mañana y después", resumen: "за́втра, че́рез два дня, в сле́дующем году́…",
      intro: "Las palabras para decir cuándo va a pasar algo. Muchas son espejo de las del pasado.",
      secciones: [
        { id: "u9-cuando-fut", titulo: "Pronto, algún día",
          texto: "за́втра (mañana) · послеза́втра (pasado mañana)\nско́ро (pronto) · пото́м (después)\nкогда́-нибудь (algún día)\nVan al principio o al final de la frase, sin preposición, como вчера́ y позавчера́.",
          ejemplos: [
            { ru: "{Послеза́втра} я бу́ду в Москве́.", es: "Pasado mañana voy a estar en Moscú.", por: "Como позавчера́, pero para adelante." },
            { ru: "{Ско́ро} бу́дет о́тпуск.", es: "Pronto vamos a tener vacaciones.", por: "ско́ро = dentro de poco." },
            { ru: "{Когда́-нибудь} я бу́ду жить в Москве́.", es: "Algún día voy a vivir en Moscú.", por: "когда́-нибудь: sin fecha, en el futuro." }],
          mas: { texto: "когда́-то cuenta algo lejano del pasado; когда́-нибудь, algo del futuro sin fecha. La pieza del final cambia el sentido: **-то** apunta a algo que pasó, **-нибудь** a algo que puede pasar.",
            ejemplos: [{ ru: "{Когда́-то} я жил в Мадри́де, а {когда́-нибудь} бу́ду жить в Москве́.", es: "En otro tiempo viví en Madrid y algún día voy a vivir en Moscú.", por: "**-то**: pasado; **-нибудь**: futuro." }] },
          chequeo: [{ pide: "«Algún día» es…", opciones: ["когда́-нибудь", "когда́-то"], ok: "когда́-нибудь", por: "**-нибудь**: el futuro." }] },
        { id: "u9-formulas", titulo: "La semana que viene, el año que viene",
          texto: "сле́дующий y бу́дущий («que viene, próximo») se usan como про́шлый, en las mismas fórmulas:\nна сле́дующей неде́ле (la semana que viene)\nв сле́дующем ме́сяце (el mes que viene)\nв сле́дующем году́ / в бу́дущем году́ (el año que viene)\nна э́той неде́ле (esta semana) · на выходны́х (el fin de semana)",
          ejemplos: [
            { ru: "{На сле́дующей неде́ле} я бу́ду в Мадри́де.", es: "La semana que viene voy a estar en Madrid.", por: "Con неде́ля, на." },
            { ru: "{В бу́дущем году́} мы бу́дем жить в Москве́.", es: "El año que viene vamos a vivir en Moscú.", por: "бу́дущий = сле́дующий con год." },
            { ru: "{На выходны́х} я бу́ду отдыха́ть.", es: "El fin de semana voy a descansar.", por: "Fórmula: на выходны́х." }],
          destacado: "на про́шлой неде́ле ↔ на сле́дующей неде́ле",
          mas: { texto: "бу́дущее, sin otra palabra, es «el futuro»: в бу́дущем («en el futuro»). Viene de la misma raíz que бу́ду: lo que va a ser.",
            ejemplos: [{ ru: "{В бу́дущем} я бу́ду говори́ть по-ру́сски.", es: "En el futuro voy a hablar ruso.", por: "в бу́дущем = en el futuro." }] },
          chequeo: [{ pide: "«El mes que viene» es…", opciones: ["в сле́дующем ме́сяце", "на сле́дующем ме́сяце"], ok: "в сле́дующем ме́сяце", por: "Con ме́сяц, в." }] },
        { id: "u9-cherez", titulo: "Dentro de dos días: че́рез",
          texto: "че́рез + cuánto tiempo es «dentro de». Es el espejo de наза́д, con la misma cuenta, pero va adelante:\nчас наза́д ↔ че́рез час\nдва дня наза́д ↔ че́рез два дня\nпять лет наза́д ↔ че́рез пять лет\nНеде́лю наза́д ↔ че́рез неде́лю",
          ejemplos: [
            { ru: "{Че́рез час} я бу́ду до́ма.", es: "Dentro de una hora voy a estar en casa.", por: "че́рез + час." },
            { ru: "{Че́рез два дня} мы бу́дем в Москве́.", es: "Dentro de dos días vamos a estar en Moscú.", por: "2 → дня, como два дня наза́д." },
            { ru: "{Че́рез пять лет} я бу́ду говори́ть по-ру́сски.", es: "Dentro de cinco años voy a hablar ruso.", por: "5 o más años → лет." }],
          destacado: "наза́д va después · че́рез va adelante",
          errores: [{ mal: "Два дня че́рез.", bien: "{Че́рез два дня}.", por: "че́рез va adelante; наза́д, después." }],
          chequeo: [{ pide: "«Dentro de una semana» es…", opciones: ["че́рез неде́лю", "неде́лю че́рез"], ok: "че́рез неде́лю", por: "че́рез va adelante." }] }
      ] },
    { id: "u9m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Planes e intenciones", resumen: "Я хочу́ / плани́рую / наде́юсь…",
      intro: "No todo lo que viene es seguro. Para decir lo que quieres, lo que planeas o lo que esperas hacer, hay verbos que van con un infinitivo.",
      secciones: [
        { id: "u9-intencion", titulo: "Querer, planear, esperar",
          texto: "Estos verbos van con otro verbo en infinitivo:\nхоте́ть (querer): Я хочу́ путеше́ствовать.\nплани́ровать (planear): Я плани́рую рабо́тать до́ма.\nсобира́ться (tener pensado): Я собира́юсь изуча́ть ру́сский.\nмечта́ть (soñar con): Я мечта́ю жить в Москве́.\nнаде́яться (tener esperanza): Я наде́юсь отдыха́ть ле́том.\nобеща́ть (prometer): Я обеща́ю звони́ть ча́сто.",
          ejemplos: [
            { ru: "Я {плани́рую} поступи́ть в университе́т.", es: "Planeo entrar a la universidad.", por: "плани́ровать + infinitivo." },
            { ru: "Она́ {наде́ется} сдать экза́мен.", es: "Ella espera aprobar el examen.", por: "наде́яться → наде́ется, con **-ся**." },
            { ru: "Мы {собира́емся} вы́учить ру́сский.", es: "Tenemos pensado aprender ruso.", por: "собира́ться + infinitivo." },
            { ru: "Моя́ {мечта́} — жить в Москве́.", es: "Mi sueño es vivir en Moscú.", por: "мечта́, el sustantivo: el sueño." }],
          destacado: "хочу́ / плани́рую / собира́юсь / мечта́ю / наде́юсь + infinitivo",
          mas: { texto: "Después de estos verbos, el infinitivo puede ser de proceso o de resultado, con la misma lógica de siempre: para una acción concreta, que va a terminar, el de resultado (Я хочу́ купи́ть маши́ну, «quiero comprar un auto»); para una actividad o algo que se repite, el de proceso (Я хочу́ путеше́ствовать, «quiero viajar»).",
            ejemplos: [
              { ru: "Я хочу́ {купи́ть} биле́т.", es: "Quiero comprar el billete.", por: "Una compra concreta: resultado." },
              { ru: "Я хочу́ {рабо́тать} до́ма.", es: "Quiero trabajar en casa.", por: "Una actividad: proceso." }] },
          chequeo: [{ pide: "«Espero descansar».", opciones: ["Я наде́юсь отдыха́ть.", "Я наде́юсь отдыха́ю."], ok: "Я наде́юсь отдыха́ть.", por: "Después de наде́юсь, infinitivo." }] },
        { id: "u9-budu-vs-hochu", titulo: "Va a pasar o lo quiero",
          texto: "бу́ду dice que algo va a pasar. Los otros verbos dicen qué piensas de eso: si lo quieres, lo planeas o lo esperas.",
          ejemplos: [
            { ru: "Я {бу́ду} рабо́тать.", es: "Voy a trabajar.", por: "Va a pasar." },
            { ru: "Я {хочу́} рабо́тать.", es: "Quiero trabajar.", por: "Un deseo." },
            { ru: "Я {плани́рую} рабо́тать.", es: "Planeo trabajar.", por: "Un plan." },
            { ru: "Я {обеща́ю} рабо́тать.", es: "Prometo trabajar.", por: "Una promesa." }],
          destacado: "бу́ду = va a pasar · хочу́ = lo deseo · плани́рую = lo planeo",
          mas: { texto: "Para los planes de vida: поступи́ть в университе́т (entrar a la universidad), сдать экза́мен (aprobar el examen), вы́учить ру́сский (aprenderlo bien), научи́ться пла́вать (aprender a nadar), попро́бовать (probar), вы́играть (ganar). Mi objetivo es цель; una decisión, реше́ние; una profesión, профе́ссия; la carrera profesional, карье́ра.",
            ejemplos: [
              { ru: "Моя́ {цель} — сдать экза́мен.", es: "Mi objetivo es aprobar el examen.", por: "цель + infinitivo." },
              { ru: "Я хочу́ {научи́ться} пла́вать.", es: "Quiero aprender a nadar.", por: "научи́ться + infinitivo." }] },
          chequeo: [{ pide: "«Quiero viajar» es…", opciones: ["Я хочу́ путеше́ствовать.", "Я бу́ду путеше́ствовать."], ok: "Я хочу́ путеше́ствовать.", por: "Un deseo: хочу́." }] }
      ] },
    { id: "u9m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Adónde vas a ir", resumen: "Я пойду́ в шко́лу. Я пое́ду в Москву́.",
      intro: "Para «voy a ir» no se usa бу́ду. Se usan пойду́ y пое́ду, que ahora vas a entender: son el futuro de resultado de идти́ y е́хать.",
      secciones: [
        { id: "u9-poidu", titulo: "Пойду́ y пое́ду",
          texto: "идти́ → пойти́ y е́хать → пое́хать son parejas, como чита́ть → прочита́ть. Su «presente» es futuro: пойду́ (voy a ir, a pie), пое́ду (voy a ir, en un vehículo). Se conjugan como иду́ y е́ду, con **по-** adelante. El destino va en acusativo: adónde.",
          ejemplos: [
            { ru: "Ве́чером я {пойду́} в кино́.", es: "Por la noche voy a ir al cine.", por: "A pie: пойду́." },
            { ru: "Мы {пое́дем} в Москву́.", es: "Vamos a ir a Moscú.", por: "En un vehículo: пое́дем." },
            { ru: "Она́ {пойдёт} на рабо́ту.", es: "Ella va a ir al trabajo.", por: "на рабо́ту: adónde." }],
          destacado: "пойду́ = voy a ir (a pie) · пое́ду = voy a ir (en vehículo)",
          errores: [{ mal: "Я бу́ду идти́ в кино́.", bien: "Я {пойду́} в кино́.", por: "Para un plan, пойду́." }],
          mas: { texto: "¿Por qué no бу́ду идти́? Porque идти́ es el movimiento en camino («ir yendo»): Я бу́ду идти́ describe que vas a estar caminando, no que vas a ir. Para algo que se repite, va ходи́ть: Я бу́ду ходи́ть в кино́ ка́ждую суббо́ту («voy a ir al cine todos los sábados»).",
            ejemplos: [
              { ru: "За́втра я {пойду́} в парк.", es: "Mañana voy a ir al parque.", por: "Una vez: пойду́." },
              { ru: "Я {бу́ду ходи́ть} в парк ка́ждый день.", es: "Voy a ir al parque todos los días.", por: "Se repite: бу́ду ходи́ть." }] },
          chequeo: [{ pide: "«Voy a ir a Madrid» (en tren).", opciones: ["Я пое́ду в Мадри́д.", "Я пойду́ в Мадри́д."], ok: "Я пое́ду в Мадри́д.", por: "En un vehículo: пое́ду." }] },
        { id: "u9-budu-v-poedu-v", titulo: "Dónde vas a estar y adónde vas a ir",
          texto: "Como en el pasado (был в Пари́же / е́здил в Пари́ж), cambia el caso:\nЯ бу́ду в Москве́ (voy a estar en Moscú): dónde, prepositivo.\nЯ пое́ду в Москву́ (voy a ir a Moscú): adónde, acusativo.",
          ejemplos: [
            { ru: "Я {бу́ду в Москве́}.", es: "Voy a estar en Moscú.", por: "Москве́: prepositivo." },
            { ru: "Я {пое́ду в Москву́}.", es: "Voy a ir a Moscú.", por: "Москву́: acusativo." }],
          errores: [{ mal: "Я пое́ду в Москве́.", bien: "Я пое́ду {в Москву́}.", por: "Con пое́ду, adónde: acusativo." }],
          chequeo: [{ pide: "Мы бу́дем ___.", opciones: ["в Пари́же", "в Пари́ж"], ok: "в Пари́же", por: "Con бу́дем, dónde: prepositivo." }] },
        { id: "u9-transporte", titulo: "En qué vas a ir",
          texto: "на + prepositivo: на по́езде (en tren), на самолёте (en avión), на маши́не (en coche), на мотоци́кле (en moto). Las palabras que no cambian quedan igual: на метро́, на такси́. A pie es пешко́м, sin preposición.\nPara volar está лете́ть: За́втра я лечу́ в Москву́ («mañana vuelo a Moscú»), en presente, como los planes cercanos.",
          ejemplos: [
            { ru: "Я пое́ду в Мадри́д {на по́езде}.", es: "Voy a ir a Madrid en tren.", por: "на + prepositivo." },
            { ru: "Мы пое́дем {на такси́}.", es: "Vamos a ir en taxi.", por: "такси́ no cambia." },
            { ru: "Я пойду́ {пешко́м}.", es: "Voy a ir a pie.", por: "пешко́м, sin preposición." },
            { ru: "В суббо́ту мы {лети́м} в Рим.", es: "El sábado volamos a Roma.", por: "лете́ть en presente, para un plan cercano." }],
          mas: { texto: "лете́ть y лета́ть son como идти́ y ходи́ть: лете́ть es un vuelo concreto («volar ahora, para allí»), лета́ть, volar en general o ida y vuelta: Я ча́сто лета́ю в Москву́ («vuelo a menudo a Moscú»). тра́нспорт es el transporte en general; маршру́т, el recorrido." },
          chequeo: [{ pide: "«En avión» es…", opciones: ["на самолёте", "в самолёт"], ok: "на самолёте", por: "на + prepositivo." }] }
      ] },
    { id: "u9m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Preguntar por los planes", resumen: "Что ты бу́дешь де́лать за́втра?",
      intro: "Las preguntas sobre el futuro, y cómo contestarlas. Abajo puedes practicar respondiendo con tus propias palabras.",
      secciones: [
        { id: "u9-preguntas", titulo: "Las preguntas",
          texto: "Что ты бу́дешь де́лать за́втра? («¿qué vas a hacer mañana?»): pregunta por la actividad, con el de proceso.\nКуда́ ты пое́дешь? Где ты бу́дешь? Когда́ ты позвони́шь?\nКаки́е у тебя́ пла́ны? («¿qué planes tienes?»): va así, como fórmula.",
          ejemplos: [
            { ru: "— Что ты {бу́дешь де́лать} за́втра? — Я {бу́ду рабо́тать}.", es: "—¿Qué vas a hacer mañana? —Voy a trabajar.", por: "La actividad: бу́ду + infinitivo." },
            { ru: "— Куда́ ты {пое́дешь}? — В Мадри́д.", es: "—¿Adónde vas a ir? —A Madrid.", por: "Adónde: acusativo." },
            { ru: "— Ты {сде́лаешь} э́то за́втра? — Да, {сде́лаю}.", es: "—¿Lo vas a hacer mañana? —Sí, lo hago.", por: "La pregunta es por el resultado." },
            { ru: "— Когда́ ты {позвони́шь}? — Ве́чером.", es: "—¿Cuándo vas a llamar? —Por la noche.", por: "Una llamada: resultado." }],
          destacado: "Что ты бу́дешь де́лать за́втра?",
          chequeo: [{ pide: "«¿Qué vas a hacer el fin de semana?»", opciones: ["Что ты бу́дешь де́лать на выходны́х?", "Что ты сде́лаешь на выходны́х?"], ok: "Что ты бу́дешь де́лать на выходны́х?", por: "Por la actividad: бу́дешь де́лать." }] },
        { id: "u9-kogda-fut", titulo: "Cuando termine: когда́ + futuro",
          texto: "En español, después de «cuando» el futuro se dice con otra forma: «cuando termine», «cuando vaya». En ruso va el futuro de siempre:\nКогда́ я зако́нчу рабо́ту, я позвоню́ («cuando termine el trabajo, te llamo»).",
          ejemplos: [
            { ru: "{Когда́} я {зако́нчу}, я {позвоню́}.", es: "Cuando termine, te llamo.", por: "когда́ + futuro: зако́нчу." },
            { ru: "{Когда́} мы {пое́дем} в Москву́, мы {бу́дем} говори́ть по-ру́сски.", es: "Cuando vayamos a Moscú, vamos a hablar en ruso.", por: "Las dos partes en futuro." }],
          comparacion: "Donde el español dice «cuando termine» o «cuando vaya», el ruso usa el mismo futuro que en cualquier frase: зако́нчу, пое́ду.",
          errores: [{ mal: "Когда́ я зака́нчиваю, я позвоню́.", bien: "Когда́ я {зако́нчу}, я позвоню́.", por: "Lo que todavía no pasó va en futuro." }],
          chequeo: [{ pide: "«Cuando vuelva, voy a cocinar».", opciones: ["Когда́ я верну́сь, я бу́ду гото́вить.", "Когда́ я возвраща́юсь, я бу́ду гото́вить."], ok: "Когда́ я верну́сь, я бу́ду гото́вить.", por: "Todavía no pasó: futuro, верну́сь." }] }
      ] },
    { id: "u9m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Planificar una semana", resumen: "В понеде́льник я бу́ду рабо́тать.",
      intro: "Con todo lo de la unidad armas una agenda: qué vas a hacer cada día y en qué orden.",
      secciones: [
        { id: "u9-agenda", titulo: "De la agenda a la frase",
          texto: "Una línea de la agenda se vuelve una frase con el día y el verbo en futuro. Para una actividad, бу́ду + infinitivo; para algo que vas a hacer una vez y terminar, el de resultado.",
          ejemplos: [
            { ru: "{В понеде́льник} я {бу́ду рабо́тать}.", es: "El lunes voy a trabajar.", por: "Понеде́льник — рабо́та: una actividad." },
            { ru: "{Во вто́рник} я {бу́ду изуча́ть} ру́сский.", es: "El martes voy a estudiar ruso.", por: "во вто́рник: con **о**." },
            { ru: "{В сре́ду} я {куплю́} биле́т.", es: "El miércoles voy a comprar el billete.", por: "Una compra: resultado." },
            { ru: "{В суббо́ту} я {пойду́} в кино́.", es: "El sábado voy a ir al cine.", por: "Una salida: пойду́." }],
          chequeo: [{ pide: "Суббо́та — о́тдых →", opciones: ["В суббо́ту я бу́ду отдыха́ть.", "В суббо́ту я отдохну́ весь день."], ok: "В суббо́ту я бу́ду отдыха́ть.", por: "Una actividad: бу́ду + infinitivo." }] },
        { id: "u9-orden-fut", titulo: "Un plan en orden",
          texto: "Como al contar un día pasado, un plan en orden va con verbos de resultado: cada cosa termina y empieza la siguiente. Los conectores son los mismos: снача́ла, пото́м, зате́м, наконе́ц. Para la lista de lo que hay que hacer, спи́сок; para cada cosa, зада́ча. Y si vas a llegar a todo: успе́ю.",
          ejemplos: [
            { ru: "{Снача́ла} я {зако́нчу} рабо́ту, {пото́м} {пойду́} в магази́н.", es: "Primero voy a terminar el trabajo, después voy a ir al negocio.", por: "Una tras otra: resultado." },
            { ru: "Ве́чером я {напишу́} спи́сок.", es: "Por la noche voy a escribir la lista.", por: "Una tarea con un resultado: напишу́." },
            { ru: "{Наконе́ц} я {отдохну́}.", es: "Por fin voy a descansar.", por: "отдохну́ть → отдохну́." }],
          mas: { texto: "успе́ть es «llegar a tiempo», «alcanzar a hacer algo»: Я успе́ю («voy a llegar»), Я не успе́ю («no voy a llegar»). Va con el infinitivo de resultado: Я успе́ю купи́ть биле́т? («¿voy a llegar a comprar el billete?»).",
            ejemplos: [{ ru: "Я не {успе́ю} пообе́дать.", es: "No voy a llegar a almorzar.", por: "успе́ть + infinitivo de resultado." }] },
          chequeo: [{ pide: "«Primero voy a desayunar, después voy a ir al trabajo».", opciones: ["Снача́ла я поза́втракаю, пото́м пойду́ на рабо́ту.", "Снача́ла я бу́ду за́втракать, пото́м бу́ду идти́ на рабо́ту."], ok: "Снача́ла я поза́втракаю, пото́м пойду́ на рабо́ту.", por: "Un plan en orden: resultado." }] }
      ] },
    { id: "u9m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Viajes", resumen: "Я пое́ду в Испа́нию на самолёте.",
      intro: "Un viaje es el mejor lugar para usar los dos futuros: lo que vas a preparar, de a una cosa, y lo que vas a hacer allí.",
      secciones: [
        { id: "u9-viaje-prep", titulo: "Preparar el viaje",
          texto: "Antes de viajar hay cosas que vas a hacer una vez y terminar: van con el de resultado.\nзаброни́рую гости́ницу (voy a reservar el hotel)\nкуплю́ авиабиле́т (voy a comprar el billete de avión)\nсоберу́ чемода́н (voy a armar la maleta)\nвозьму́ па́спорт (voy a llevar el pasaporte)",
          ejemplos: [
            { ru: "Я {заброни́рую} гости́ницу.", es: "Voy a reservar el hotel.", por: "заброни́ровать → заброни́рую: resultado." },
            { ru: "Мы {ку́пим} авиабиле́ты.", es: "Vamos a comprar los billetes de avión.", por: "Una compra: resultado." },
            { ru: "Ве́чером я {соберу́} чемода́н.", es: "Por la noche voy a armar la maleta.", por: "собра́ть → соберу́." },
            { ru: "Я {возьму́} па́спорт.", es: "Voy a llevar el pasaporte.", por: "взять → возьму́." }],
          destacado: "заброни́рую · куплю́ · соберу́ · возьму́",
          mas: { texto: "Las palabras del aeropuerto: рейс (el vuelo), вы́лет (la salida), прилёт (la llegada), бага́ж (el equipaje), ви́за (la visa), па́спорт (el pasaporte). Y del viaje: тури́ст, путеше́ственник (viajero), гид (guía), тури́зм, отъе́зд (la partida), прие́зд (la llegada), возвраще́ние (la vuelta).",
            ejemplos: [
              { ru: "Мой {рейс} в во́семь часо́в.", es: "Mi vuelo es a las ocho.", por: "Sin verbo, como la hora." },
              { ru: "{Вы́лет} в пять, а {прилёт} в семь.", es: "La salida es a las cinco y la llegada a las siete.", por: "Como el horario de un tren." }] },
          chequeo: [{ pide: "«Voy a reservar el hotel».", opciones: ["Я заброни́рую гости́ницу.", "Я бу́ду заброни́ровать гости́ницу."], ok: "Я заброни́рую гости́ницу.", por: "El de resultado, sin бу́ду." }] },
        { id: "u9-viaje-alla", titulo: "Allí",
          texto: "Allí vas a hacer cosas que duran (proceso) y cosas de una vez (resultado):\nбу́ду купа́ться, загора́ть, гуля́ть (actividades)\nпосещу́ музе́й, сфотографи́рую го́ры, оста́нусь в гости́нице, проведу́ неде́лю (de una vez o con un resultado)",
          ejemplos: [
            { ru: "Ка́ждый день я {бу́ду купа́ться} в мо́ре.", es: "Todos los días me voy a bañar en el mar.", por: "Se repite: proceso." },
            { ru: "Я {посещу́} музе́й.", es: "Voy a visitar el museo.", por: "Una visita: посети́ть → посещу́." },
            { ru: "Мы {проведём} неде́лю в Москве́.", es: "Vamos a pasar una semana en Moscú.", por: "провести́: el tiempo que vas a pasar, entero." },
            { ru: "Я {оста́нусь} в гости́нице.", es: "Me voy a quedar en el hotel.", por: "оста́ться → оста́нусь." }],
          errores: [{ mal: "За́втра я бу́ду посеща́ть музе́й (una visita).", bien: "За́втра я {посещу́} музе́й.", por: "Una visita: resultado." }],
          chequeo: [{ pide: "«Voy a tomar sol todos los días».", opciones: ["Я бу́ду загора́ть ка́ждый день.", "Я загора́л ка́ждый день."], ok: "Я бу́ду загора́ть ка́ждый день.", por: "Se repite: proceso." }] }
      ] },
    { id: "u9m11", n: 11, tipo: "lectura", titulo: "Los tres tiempos juntos", resumen: "Вчера́, сего́дня, за́втра.",
      intro: "Tres textos: un fin de semana, un viaje y una historia con pasado, presente y futuro. Léelos, escúchalos y contesta." },
    { id: "u9m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мои пла́ны", resumen: "Tu semana que viene, y ayer, hoy y mañana.",
      intro: "Primero completa tu agenda de la semana que viene. Después escribe tus planes: qué vas a hacer, dónde vas a estar, adónde vas a ir y qué quieres hacer. Por ejemplo: В понеде́льник я бу́ду рабо́тать. Ве́чером я пойду́ в кино́. На выходны́х я пое́ду в Мадри́д на по́езде. Я хочу́ отдыха́ть.",
      requisitos: [], consejos: [] },
    { id: "u9m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Futuro, быть, movimiento, proceso o resultado, tres tiempos, traducción y audio.",
      intro: "Cuarenta ejercicios en ocho partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Бу́ду + infinitivo", tipos: ["budu", "inf-fut", "cambiar-persona"], n: 6 },
        { nombre: "Быть en futuro", tipos: ["byt-fut"], n: 4 },
        { nombre: "Movimiento", tipos: ["mov-fut", "transporte"], n: 5 },
        { nombre: "Los tres tiempos", tipos: ["maquina", "tres", "detectar"], n: 6 },
        { nombre: "Proceso o resultado", tipos: ["aspecto", "pareja"], n: 5 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 7 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
const U9_PROYECTO2 = { id: "u9p2", titulo: "Вчера́, сего́дня, за́втра",
  intro: "Ahora una historia en los tres tiempos: qué hiciste, qué haces y qué vas a hacer. Por ejemplo: Вчера́ я рабо́тал до́ма. Сего́дня я рабо́таю в о́фисе. За́втра я бу́ду отдыха́ть.",
  requisitos: [], consejos: [] };

function u9Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_9.modulos.concat([U9_PROYECTO2]).forEach(m => {
  if (m.intro) m.intro = u9Palabras(m.intro);
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (11/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u9Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u9Palabras(o.por); if (o && o.pide) o.pide = u9Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u9Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u9Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad9Modulo(id) { return UNIDAD_9.modulos.find(m => m.id === id) || null; }

const U9_MEZCLA = { clasificar: 1, maquina: 2, budu: 2, "inf-fut": 2, "cambiar-persona": 2, "byt-fut": 2, cuando: 1, intencion: 2, "mov-fut": 2, transporte: 1, pregunta: 2,
  agenda: 2, construir: 2, tres: 2, detectar: 1, "plan-real": 1, "es-ru": 3, dictado: 3, significado: 1, "palabra-es-ru": 1, emparejar: 1, lectura: 2, "lectura-vf": 1,
  /* Aspecto (11/10/2026): el futuro del verbo de resultado y escribir con el futuro que va */
  pareja: 1, aspecto: 2,
  /* Tipos nuevos (11/10/2026): entender la regla, ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1, desarmar: 1 };

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
    /* «Mañana voy a leer un libro»: también vale el futuro de resultado (прочита́ю), si hay un objeto (11/10/2026) */
    const par = U9_PARES.find(x => x[0] === v.ac), pv = par && verboById((lex(par[1], "verbo") || {}).id);
    if (pv && pv.futuro && comp && comp[0] && !/^(в|на|до́ма)( |$)/.test(comp[0])) esperadas.slice().forEach(x => esperadas.push(x.replace(" " + budu[s[2]] + " " + v.ac + " ", " " + pv.futuro[s[2]] + " ").replace(new RegExp("^" + cap(budu[s[2]]) + " " + v.ac + " "), cap(pv.futuro[s[2]]) + " ")));

    /* El cuándo puede ir al principio, después de quién o al final (24/10/2026): Вчера́ я рабо́тал до́ма =
       Я вчера́ рабо́тал до́ма = Я рабо́тал до́ма вчера́. */
    if (t) esperadas.slice().forEach(x => {
      const ini = cap(t[0]) + " " + sujRu + " "; if (x.indexOf(ini) !== 0) return;
      const resto = x.slice(ini.length).replace(/[.?!]$/, ""), S = cap(sujRu);
      [S + " " + t[0] + " " + resto + ".", S + " " + resto + " " + t[0] + "."].forEach(y => { if (esperadas.indexOf(y) < 0) esperadas.push(y); });
    });
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
    out.push(Object.assign({ id: "U9-maq-" + j, tipo: "maquina", forma: "escribir", dificultad: 3, modulo: 1, pide: "Máquina del tiempo: pásala a mañana (за́втра).", grande: pre, audio: fu, audioManual: true,
      esperadas: [fu], idioma: "ru", explicacion: pas + " → " + pre + " → " + fu }, base));
  });

  /* ── Módulo 2: бу́ду + infinitivo ── */
  PL.forEach((p, i) => {
    const pr = ["Я", "Ты", "Он", "Мы", "Вы", "Они́"][i];
    out.push({ id: "U9-budu-" + i, tipo: "budu", forma: "elegir", dificultad: 1, modulo: 2, grupo: "B-" + i, items: ["lex:" + buduId], pide: "Completa con la forma de бу́ду.", grande: pr + " _____ рабо́тать.",
      opciones: baraja(uniq(budu).filter(x => x !== budu[i]).slice(0, 3).concat(budu[i]), i), correcta: budu[i], oir: pr + " " + budu[i] + " рабо́тать.", explicacion: "**" + p + " " + budu[i] + "**" });
    out.push({ id: "U9-buduw-" + i, tipo: "budu", forma: "escribir", dificultad: 2, modulo: 2, grupo: "BW-" + i, items: ["lex:" + buduId], pide: "Escribe la forma de бу́ду.", grande: p + " + бу́ду",
      audio: pr + " " + budu[i], audioManual: true, esperadas: [budu[i], pr + " " + budu[i]], idioma: "ru", explicacion: "**" + p + " " + budu[i] + "**" });
  });
  out.push({ id: "U9-buemp", tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 2, grupo: "BE", items: [], pide: "Une cada persona con su forma.", pares: [["я", budu[0]], ["ты", budu[1]], ["мы", budu[3]], ["они́", budu[5]]],
    explicacion: PL.map((p, i) => p + " " + budu[i]).join(" · ") });
  verbos.forEach((v, j) => {
    const s = U9_SUJ[j % 7], i = s[2], comp = v.comps[0];
    const f = fut(s, v, comp), base = { grupo: "F2-" + j, items: ["lex:" + v.id], oir: f.ru };
    const pres = s[0] + " " + v.presente[i] + (comp[0] ? " " + comp[0] : "") + ".";
    out.push(Object.assign({ id: "U9-inf-" + j, tipo: "inf-fut", forma: "escribir", dificultad: 2, modulo: 2, pide: "Pásala al futuro.", grande: pres, audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: regla(i, v) + " " + f.ru + " — " + f.es }, base));
    const s2 = U9_SUJ[(j + 3) % 7], f2 = fut(s2, v, comp);
    if (s2[2] !== i) out.push(Object.assign({ id: "U9-camb-" + j, tipo: "cambiar-persona", forma: "escribir", dificultad: 2, modulo: 2, pide: "Cambia la persona: " + (s2[0] === "Я" ? "{я}" : s2[0].toLowerCase()) + ".",
      grande: f.ru, audio: f2.ru, audioManual: true, esperadas: f2.esperadas, idioma: "ru", explicacion: "Cambia solo бу́ду: " + regla(s2[2], v) + " " + f2.ru }, base, { grupo: "F2c-" + j }));
    const pals = sinP(f.ru).split(" "), k = pals.indexOf(budu[i]);
    if (k >= 0 && j % 2 === 0) { const mal = pals.slice(); mal[k + 1] = v.presente[i];
      out.push(Object.assign({ id: "U9-det2-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 2, pide: "Toca la palabra que está mal.", palabras: mal, correcta: k + 1,
        explicacion: "Después de бу́ду va el infinitivo: **" + v.ac + "**, no «" + v.presente[i] + "». " + f.ru }, base, { grupo: "F2d-" + j })); }
  });

  /* ── Módulo 3: frases con cuándo ── */
  verbos.forEach((v, j) => v.comps.forEach((comp, c) => {
    const s = U9_SUJ[(j * 2 + c) % U9_SUJ.length], t = [["за́втра", "mañana"], ["в суббо́ту", "el sábado"], ["ве́чером", "por la noche"], ["в воскресе́нье", "el domingo"]][(j + c) % 4];
    const f = fut(s, v, comp, t), base = { grupo: "F3-" + j + "-" + c, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U9-esru3-" + j + "-" + c, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, pide: "Escribe en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: regla(s[2], v) + " " + f.ru }, base));
    if (c === 0) out.push(Object.assign({ id: "U9-dic3-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 3, pide: "Escucha y escribe la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: f.ru + " — " + f.es }, base));
    if (c === 0 && j % 2 === 0) { const w = sinP(f.ru).split(" "); let fi = baraja(w, j + 3); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U9-ord3-" + j, tipo: "construir", forma: "ordenar", dificultad: 2, modulo: 3, pide: "Ordena: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: w.join(" "), esperadas: f.esperadas.map(sinP), explicacion: f.ru }, base, { grupo: "F3o-" + j })); }
  }));

  /* ── Módulo 4: быть en futuro ── */
  [["до́ма", "en casa"], ["на рабо́те", "en el trabajo"], ["в Москве́", "en Moscú"], ["в рестора́не", "en el restaurante"], ["в Барсело́не", "en Barcelona"], ["в о́фисе", "en la oficina"], ["в па́рке", "en el parque"]].forEach(([lug, es], j) => {
    const s = U9_SUJ[j % 7], i = s[2];
    const ru = s[0] + " " + budu[i] + " " + lug + ".", esF = cap(((s[1] ? s[1] + " " : "") + U9_IR[i] + " estar " + es).trim()) + ".";
    const base = { grupo: "BY-" + j, items: ["lex:" + buduId], oir: ru };
    out.push(Object.assign({ id: "U9-byt-" + j, tipo: "byt-fut", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribe en ruso: «" + esF + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(i === 0 || i === 1 || i === 3 ? [cap(budu[i]) + " " + lug + "."] : []), idioma: "ru", explicacion: "**" + budu[i] + " " + lug + "**: бу́ду solo es «voy a estar». " + ru }, base));
    out.push(Object.assign({ id: "U9-bytel-" + j, tipo: "byt-fut", forma: "elegir", dificultad: 1, modulo: 4, pide: "Completa: «" + esF + "»", grande: s[0] + " _____ " + lug + ".",
      opciones: baraja(uniq([budu[i], budu[(i + 2) % 6], budu[(i + 3) % 6]]), j), correcta: budu[i], explicacion: "**" + PL[i] + " " + budu[i] + "**. " + ru }, base, { grupo: "BYe-" + j }));
  });
  [["Где ты бу́дешь за́втра?", "🏠", "Я бу́ду до́ма."], ["Где ты бу́дешь в понеде́льник?", "💼", "Я бу́ду на рабо́те."], ["Где вы бу́дете ве́чером?", "🍽️", "Мы бу́дем в рестора́не."], ["Где ты бу́дешь в суббо́ту?", "🌳", "Я бу́ду в па́рке."]].forEach(([q, em, r], j) =>
    out.push({ id: "U9-bytq-" + j, tipo: "byt-fut", forma: "escribir", dificultad: 2, modulo: 4, grupo: "BYq-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: "Mira el dibujo y contesta.", grande: em,
      audio: q, audioManual: true, esperadas: [r, r.replace(/^(Я|Мы) /, "").replace(/^б/, "Б")], idioma: "ru", explicacion: "— " + q + " — " + r }));

  /* ── Módulo 5: cuándo ── */
  U9_TIEMPO.forEach(([ru, es], j) => {
    out.push({ id: "U9-tsig-" + j, tipo: "cuando", forma: "elegir", dificultad: 1, modulo: 5, grupo: "TI-" + j, items: [], oir: ru, pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja([ru].concat(baraja(U9_TIEMPO.filter(x => x[0] !== ru).map(x => x[0]), j).slice(0, 2)), j), correcta: ru, explicacion: ru + " — " + es });
    out.push({ id: "U9-tw-" + j, tipo: "cuando", forma: "escribir", dificultad: 2, modulo: 5, grupo: "TW-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
    const v = verbosSinVivir[j % verbosSinVivir.length], s = U9_SUJ[j % 7], f = fut(s, v, v.comps[0], [ru, es]);
    out.push({ id: "U9-tesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "TE-" + j, items: ["lex:" + v.id], oir: f.ru, pide: "Escribe en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
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
      out.push(Object.assign({ id: "U9-int-" + a + "-" + j, tipo: "intencion", forma: "escribir", dificultad: 3, modulo: 6, pide: "Escribe en ruso: «" + esF + "»", audio: ru, audioManual: true,
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
    out.push(Object.assign({ id: "U9-mov-" + j, tipo: "mov-fut", forma: "escribir", dificultad: 3, modulo: 7, pide: "Escribe en ruso: «" + es1 + "» " + (modo === "п" ? "🚶" : "🚗"), audio: ru1, audioManual: true,
      esperadas: [ru1].concat(i <= 1 || i === 3 ? [cap(forms[i]) + " " + pr + " " + L.acc + "."] : []), idioma: "ru",
      explicacion: "**" + forms[i] + "** (" + (modo === "п" ? "a pie" : "en vehículo") + ") + adónde, en acusativo: " + ru1 }, base));
    out.push(Object.assign({ id: "U9-movel-" + j, tipo: "mov-fut", forma: "elegir", dificultad: 2, modulo: 7, pide: "Completa: «" + es1 + "»", grande: s[0] + " _____ " + pr + " " + L.acc + ".",
      opciones: baraja([forms[i], budu[i]], j), correcta: forms[i], explicacion: "Para «voy a ir» va **" + forms[i] + "**, no бу́ду. " + ru1 }, base, { grupo: "MVe-" + j }));
    if (L.acc !== L.prep) out.push(Object.assign({ id: "U9-moved-" + j, tipo: "mov-fut", forma: "elegir", dificultad: 2, modulo: 7, pide: "Completa: «" + es2 + "»", grande: s[0] + " " + budu[i] + " " + pr + " _____.",
      opciones: baraja([L.prep, L.acc], j + 1), correcta: L.prep, explicacion: "Dónde vas a estar: prepositivo. " + ru2 }, base, { grupo: "MVd-" + j }));
  });
  U9_TRANSPORTE.forEach(([ru, es, em], j) => {
    const L = lugar(ru); if (!L) return;
    const dest = [["Москва́", "a Moscú"], ["Мадри́д", "a Madrid"], ["Пари́ж", "a París"]][j], D = lugar(dest[0]);
    const r = "Я пое́ду в " + D.acc + " на " + L.prep + ".", es1 = "Voy a ir " + dest[1] + " " + es + ".";
    out.push({ id: "U9-tr-" + j, tipo: "transporte", forma: "escribir", dificultad: 3, modulo: 7, grupo: "TR-" + j, items: ["lex:" + L.id], oir: r, pide: em + " Escribe en ruso: «" + es1 + "»", audio: r, audioManual: true,
      esperadas: [r, r.replace(/^Я /, "").replace(/^п/, "П")], idioma: "ru", explicacion: "**на " + L.prep + "**: на + prepositivo. " + r });
    out.push({ id: "U9-trel-" + j, tipo: "transporte", forma: "elegir", dificultad: 1, modulo: 7, grupo: "TRe-" + j, items: ["lex:" + L.id], pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja(["на " + L.prep, "в " + L.prep, "на " + L.nom], j), correcta: "на " + L.prep, explicacion: "**на " + L.prep + "** = " + es });
  });

  /* ── Módulo 8: preguntas ── */
  U9_PREGUNTAS.forEach(([ru, es], j) => {
    out.push({ id: "U9-preg-" + j, tipo: "pregunta", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PQ-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U9-pregd-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, grupo: "PQd-" + j, items: [], pide: "Escucha y escribe la pregunta.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  [["Что ты бу́дешь де́лать за́втра?", "💻", "За́втра я бу́ду рабо́тать."], ["Что ты бу́дешь де́лать ве́чером?", "🎬", "Ве́чером я бу́ду смотре́ть фильм."], ["Куда́ ты пое́дешь?", "🇪🇸", "Я пое́ду в Испа́нию."],
   ["Что ты бу́дешь де́лать на выходны́х?", "🛋️", "На выходны́х я бу́ду отдыха́ть."], ["Ты бу́дешь рабо́тать за́втра?", "❌", "Нет, я не бу́ду рабо́тать."]].forEach(([q, em, r], j) =>
    out.push({ id: "U9-resp-" + j, tipo: "pregunta", forma: "escribir", dificultad: 2, modulo: 8, grupo: "RS-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: em + " Contesta en ruso.", audio: q, audioManual: true,
      esperadas: [r, r.replace(/^(За́втра|Ве́чером|На выходны́х) я /, "Я ")], idioma: "ru", explicacion: "— " + q + " — " + r }));

  /* ── Módulo 9: la semana de Ana (agenda) ── */
  const DIAS = [["в понеде́льник", "el lunes", "понеде́льник"], ["во вто́рник", "el martes", "вто́рник"], ["в сре́ду", "el miércoles", "среда́"], ["в четве́рг", "el jueves", "четве́рг"], ["в пя́тницу", "el viernes", "пя́тница"], ["в суббо́ту", "el sábado", "суббо́та"], ["в воскресе́нье", "el domingo", "воскресе́нье"]];
  const ACT = [["рабо́тать", "", "trabajar"], ["изуча́ть", "ру́сский", "estudiar ruso"], ["гуля́ть", "в па́рке", "pasear por el parque"], ["рабо́тать", "до́ма", "trabajar en casa"], ["пойти́", "в кино́", "ir al cine"], ["отдыха́ть", "", "descansar"], ["путеше́ствовать", "", "viajar"]];
  const agTxt = DIAS.map((d, k) => cap(d[2]) + " — " + ACT[k][2]);
  DIAS.forEach((d, k) => {
    const a = ACT[k], ruA = a[0] === "пойти́" ? cap(d[0]) + " А́нна " + poidu[2] + " " + a[1] + "." : cap(d[0]) + " А́нна " + budu[2] + " " + a[0] + (a[1] ? " " + a[1] : "") + ".";
    const ru1 = a[0] === "пойти́" ? cap(d[0]) + " я " + poidu[0] + " " + a[1] + "." : cap(d[0]) + " я " + budu[0] + " " + a[0] + (a[1] ? " " + a[1] : "") + ".";
    out.push({ id: "U9-ag-" + k, tipo: "agenda", forma: "elegir", dificultad: 2, modulo: 9, grupo: "AG-" + k, items: [], oir: ruA, texto: agTxt, pide: "Mira la agenda de Ana. ¿Qué va a hacer " + d[1] + "?",
      opciones: baraja([a[2]].concat(baraja(ACT.filter(x => x[2] !== a[2]).map(x => x[2]), k).slice(0, 2)), k), correcta: a[2], explicacion: ruA });
    out.push({ id: "U9-agw-" + k, tipo: "agenda", forma: "escribir", dificultad: 3, modulo: 9, grupo: "AGW-" + k, items: [], oir: ru1, pide: "Escribe la frase en futuro, en primera persona.", grande: d[2] + " — " + a[2],
      audio: ru1, audioManual: true, esperadas: [ru1, ru1.replace(" я ", " ")], idioma: "ru", explicacion: ru1 });
  });
  /* Constructor de planes: día + hora + lugar + acción */
  [["в суббо́ту", "в де́вять часо́в", "в па́рке", "гуля́ть", "El sábado a las nueve voy a pasear por el parque."], ["в понеде́льник", "в во́семь часо́в", "в о́фисе", "рабо́тать", "El lunes a las ocho voy a trabajar en la oficina."],
   ["в воскресе́нье", "в час", "в рестора́не", "обе́дать", "El domingo a la una voy a almorzar en el restaurante."], ["в пя́тницу", "в семь часо́в", "до́ма", "гото́вить у́жин", "El viernes a las siete voy a cocinar la cena en casa."]].forEach(([d, h, l, a, es], j) => {
    const ok = cap(d) + " " + h + " я бу́ду " + a + " " + l + ".";
    out.push({ id: "U9-cons-" + j, tipo: "construir", forma: "escribir", dificultad: 3, modulo: 9, grupo: "CS-" + j, items: [], oir: ok, pide: "Arma el plan con estas piezas.", grande: d + " · " + h + " · " + l + " · " + a, pista: es,
      audio: ok, audioManual: true, esperadas: [ok, cap(d) + " " + h + " я бу́ду " + l + " " + a + ".", cap(d) + " я бу́ду " + a + " " + l + " " + h + "."], idioma: "ru", explicacion: ok });
  });

  /* ── Módulo 10: viajes ── */
  [["В о́тпуске я пое́ду в Испа́нию.", "En las vacaciones voy a ir a España."], ["Я пое́ду на самолёте.", "Voy a ir en avión."], ["Я бу́ду жить в гости́нице.", "Voy a vivir en un hotel."],
   ["Я куплю́ биле́т.", null], ["Мы бу́дем путеше́ствовать по Росси́и.", null], ["За́втра я куплю́ биле́т.", "Mañana voy a comprar el billete."], ["На сле́дующей неде́ле у меня́ пое́здка.", null],
   ["Э́то бу́дет интере́сное путеше́ствие.", null], ["Я пое́ду в Росси́ю на по́езде.", "Voy a ir a Rusia en tren."]].forEach(([ru, es], j) => {
    if (!es) return;
    out.push({ id: "U9-via-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "VI-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U9-viad-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 10, grupo: "VId-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  /* посети́ть: una visita va con el de resultado (11/10/2026; antes decía «бу́ду посеща́ть») */
  [["За́втра я посещу́ музе́й.", "Mañana voy a visitar el museo."], ["Мы посети́м Москву́.", "Vamos a visitar Moscú."]].forEach(([ru, es], j) =>
    out.push({ id: "U9-amp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "AM-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: ru + " Una visita: посети́ть (de resultado) + acusativo." }));

  /* ── Módulo 11: los tres tiempos ── */
  verbosSinVivir.slice(0, 8).forEach((v, j) => {
    const comp = v.comps[0], quien = j % 2 ? ["Ма́ша", "f"] : ["Ива́н", "m"];
    const frases = [["🌙", "Вчера́", quien[0] + " " + v.pasado[quien[1]]], ["☀️", "Сего́дня", quien[0] + " " + v.presente[2]], ["🌅", "За́втра", quien[0] + " " + budu[2] + " " + v.ac]];
    frases.forEach(([em, t, cuerpo], k) => {
      const ru = t + " " + cuerpo + (comp[0] ? " " + comp[0] : "") + ".";
      if ((j + k) % 3) return;
      out.push({ id: "U9-tres-" + j + "-" + k, tipo: "tres", forma: "escribir", dificultad: 3, modulo: 11, grupo: "TT-" + j + "-" + k, items: ["lex:" + v.id], oir: ru,
        pide: em + " " + t + ": escribe la frase con «" + v.ac + "»" + (comp[0] ? " y «" + comp[0] + "»" : "") + ", para " + quien[0] + ".", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    });
    /* Detecta el error de tiempo: «Вчера́ … бу́дет» */
    const malo = ["Вчера́", quien[0], budu[2], v.ac].concat(comp[0] ? comp[0].split(" ") : []);
    out.push({ id: "U9-det11-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 11, grupo: "TD-" + j, items: ["lex:" + v.id], pide: "Toca la palabra que no va con el tiempo.", palabras: malo, correcta: 0,
      explicacion: "**Вчера́** es pasado, pero la frase está en futuro: va **за́втра**. O, en pasado: «Вчера́ " + quien[0] + " " + v.pasado[quien[1]] + (comp[0] ? " " + comp[0] : "") + "»." });
  });
  /* Plan o realidad */
  [["Я бу́ду рабо́тать до́ма.", "Я рабо́тал в о́фисе.", "Trabajé en la oficina. (eres hombre)"], ["Мы бу́дем гуля́ть в па́рке.", "Мы бы́ли до́ма.", "Estuvimos en casa."],
   ["Она́ бу́дет гото́вить у́жин.", "Она́ у́жинала в рестора́не.", "Cenó en el restaurante."]].forEach(([plan, real, es], j) => {
    out.push({ id: "U9-plan-" + j, tipo: "plan-real", forma: "escribir", dificultad: 3, modulo: 11, grupo: "PR-" + j, items: [], oir: real, contexto: [{ p: "Plan:", ru: plan }], pide: "Pero la realidad fue otra. Escribe en ruso: «" + es + "»",
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

  /* ── Vocabulario nuevo (11/10/2026): significado y palabra-es-ru, en el módulo donde se presenta ── */
  const modDe = {};
  Object.keys(U9_VISTAS).forEach(m => U9_VISTAS[m].split(" ").forEach(ru => { if (U9_GLOSA[ru]) modDe[ru] = +m; }));
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(9) >= 0 && U9_GLOSA[e.acento] && modDe[e.acento]);
  nuevas.forEach((e, i) => {
    const es = U9_GLOSA[e.acento], m = modDe[e.acento];
    const dis = baraja(nuevas.filter(x => x.id !== e.id && Math.abs(modDe[x.acento] - m) <= 1).map(x => U9_GLOSA[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru };
    if (dis.length >= 2) out.push(Object.assign({ id: "U9-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U9-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });

  /* ══ Profundización (11/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar (~20 % de la sesión),
     más pareja (el futuro del verbo de resultado) y aspecto (escribir con el futuro que va). */
  const push = o => out.push(o);
  const VF = ac => { const e = lex(ac, "verbo"), v = e && verboById(e.id); return v ? { id: e.id, ac: e.acento, pres: v.presente, fut: v.futuro, pas: v.pasado } : null; };
  const PERS = [["Я", 0], ["Мы", 3], ["Она́", 2], ["Они́", 5], ["Ты", 1], ["Он", 2]];
  const low = t => t.charAt(0).toLowerCase() + t.slice(1);

  /* ── Módulo 1: tres tiempos ── */
  [["рабо́тать", " до́ма"], ["чита́ть", " кни́гу"], ["смотре́ть", " фильм"], ["гуля́ть", " в па́рке"], ["гото́вить", " у́жин"], ["слу́шать", " му́зыку"], ["отдыха́ть", ""], ["изуча́ть", " ру́сский"]].forEach(([vk, c], j) => {
    const v = VF(vk), p = PERS[j % 4], g = p[1] === 0 ? "m" : p[1] === 2 ? "f" : "pl";
    const fu = "За́втра " + low(p[0]) + " " + budu[p[1]] + " " + v.ac + c + ".", pa = "Вчера́ " + low(p[0]) + " " + v.pas[g] + c + ".", pr = "Сего́дня " + low(p[0]) + " " + v.pres[p[1]] + c + ".";
    push({ id: "U9-nat-t-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 1, regla: "u9-tres-tiempos", grupo: "NT-" + j, items: ["lex:" + v.id], oir: fu, pide: "¿Cuál es la correcta?",
      opciones: baraja([fu, "За́втра " + low(p[0]) + " " + v.pas[g] + c + "."], j), correcta: fu, explicacion: fu + " Con за́втра va el futuro: бу́ду + infinitivo." });
    const k = j % 3, fr = [pa, pr, fu][k];
    push({ id: "U9-oido-t-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 1, regla: "u9-tres-tiempos", grupo: "OT-" + j, items: ["lex:" + v.id], oir: fr, pide: "Escucha: ¿pasado, presente o futuro?", audio: fr,
      opciones: ["Pasado", "Presente", "Futuro"], correcta: ["Pasado", "Presente", "Futuro"][k], explicacion: fr + " " + ["El pasado: **-л**.", "El presente.", "El futuro: бу́ду + infinitivo."][k] });
    push({ id: "U9-cad-t-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 1, regla: "u9-tres-tiempos", grupo: "CT-" + j, items: ["lex:" + v.id], oir: fu, pide: "Cambia la frase paso a paso.", base: pa,
      pasos: [{ pide: "Ahora: hoy (сего́дня).", esperadas: [pr, p[0] + " " + v.pres[p[1]] + c + " сего́дня."] }, { pide: "Ahora: mañana (за́втра).", esperadas: [fu, p[0] + " " + budu[p[1]] + " " + v.ac + c + " за́втра."] }],
      explicacion: pa + " → " + pr + " → " + fu });
  });

  /* ── Módulo 2: бу́ду + infinitivo ── */
  [["рабо́тать", " до́ма"], ["чита́ть", " газе́ту"], ["гото́вить", " у́жин"], ["гуля́ть", " в па́рке"], ["отдыха́ть", ""], ["смотре́ть", " телеви́зор"], ["слу́шать", " ра́дио"], ["изуча́ть", " ру́сский"], ["учи́ться", " в Москве́"], ["писа́ть", " письмо́"]].forEach(([vk, c], j) => {
    const v = VF(vk), p = PERS[j % 6], ok = p[0] + " " + budu[p[1]] + " " + v.ac + c + ".", mal = p[0] + " " + budu[p[1]] + " " + v.pres[p[1]] + c + ".";
    const base = { grupo: "BI-" + j, items: ["lex:" + v.id], oir: ok };
    push(Object.assign({ id: "U9-nat-bi-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 2, regla: "u9-budu-inf", pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Después de бу́ду va el infinitivo: " + v.ac + "." }, base));
    if (j < 8) push(Object.assign({ id: "U9-diag-bi-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 2, regla: "u9-budu-inf", pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["El segundo verbo: va en infinitivo", "La forma de бу́ду", "El lugar o el objeto"], correcta: "El segundo verbo: va en infinitivo", esperadas: [ok], explicacion: ok }, base, { grupo: "BId-" + j }));
    const p2 = PERS[(j + 1) % 6];
    if (p2[1] !== p[1]) push(Object.assign({ id: "U9-nat-bf-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u9-budu-formas", pide: "¿Cuál es la correcta?",
      opciones: baraja([p2[0] + " " + budu[p2[1]] + " " + v.ac + c + ".", p2[0] + " " + budu[p[1]] + " " + v.ac + c + "."], j + 1), correcta: p2[0] + " " + budu[p2[1]] + " " + v.ac + c + ".",
      explicacion: "Con " + low(p2[0]) + ", **" + budu[p2[1]] + "**." }, base, { grupo: "BF-" + j }));
  });
  [[0, "я"], [1, "ты"], [3, "мы"], [5, "они́"], [4, "вы"], [2, "он"]].forEach(([i, pr], j) => {
    const ok = cap(pr) + " " + budu[i] + " рабо́тать.", OPC = ["Va con я", "Va con мы", "Va con они́", "Va con ты", "Va con вы", "Va con он o она́"];
    const corr = { 0: "Va con я", 1: "Va con ты", 3: "Va con мы", 5: "Va con они́", 4: "Va con вы", 2: "Va con он o она́" }[i];
    push({ id: "U9-pq-bf-" + j, tipo: "porque", forma: "elegir", dificultad: 1, modulo: 2, regla: "u9-budu-formas", grupo: "BFp-" + j, items: [], oir: ok, pide: "¿Por qué " + budu[i] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: baraja([corr].concat(baraja(OPC.filter(x => x !== corr), j).slice(0, 2)), j), correcta: corr, explicacion: ok + " " + pr + " → " + budu[i] + "." });
    const ej = [[0, "я"], [1, "ты"], [2, "он"], [3, "мы"], [4, "вы"], [5, "они́"]].filter(x => x[0] !== i).slice(0, 2);
    push({ id: "U9-desc-bf-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 2, regla: "u9-budu-formas", grupo: "BFd-" + j, items: [], oir: pr + " " + budu[i] + " чита́ть",
      pide: ej.map(x => x[1] + " " + budu[x[0]] + " чита́ть").join(" · ") + ". ¿Y " + pr + "?", opciones: baraja([pr + " " + budu[i] + " чита́ть", pr + " " + budu[i] + " " + VF("чита́ть").pres[i]], j), correcta: pr + " " + budu[i] + " чита́ть",
      explicacion: "Cambia бу́ду; чита́ть queda en infinitivo." });
  });

  /* ── Módulo 3: el futuro de resultado ── */
  /* [proceso, resultado, objeto del resultado, cuándo, español del resultado, objeto del proceso, marca de proceso, español del proceso] */
  const ASP = [["чита́ть", "прочита́ть", " кни́гу", "За́втра", "Mañana voy a terminar el libro", "", "весь день", "Voy a leer todo el día"],
    ["писа́ть", "написа́ть", " письмо́", "За́втра", "Mañana voy a escribir la carta (y la mando)", " пи́сьма", "ка́ждый день", "Voy a escribir cartas todos los días"],
    ["де́лать", "сде́лать", " рабо́ту", "За́втра", "Mañana voy a hacer el trabajo (y va a estar hecho)", " рабо́ту", "весь день", "Voy a estar haciendo el trabajo todo el día"],
    ["смотре́ть", "посмотре́ть", " фильм", "Ве́чером", "Por la noche voy a ver la película (entera)", " телеви́зор", "весь ве́чер", "Voy a mirar televisión toda la noche"],
    ["гото́вить", "пригото́вить", " у́жин", "Ве́чером", "Por la noche voy a preparar la cena (va a estar lista)", " у́жин", "два часа́", "Voy a estar cocinando la cena dos horas"],
    ["покупа́ть", "купи́ть", " хлеб", "За́втра", "Mañana voy a comprar pan", " хлеб", "ка́ждый день", "Voy a comprar pan todos los días"],
    ["встава́ть", "встать", " в семь часо́в", "За́втра", "Mañana me voy a levantar a las siete", " в семь часо́в", "ка́ждый день", "Me voy a levantar a las siete todos los días"],
    ["возвраща́ться", "верну́ться", " домо́й в во́семь часо́в", "За́втра", "Mañana voy a volver a casa a las ocho", " домо́й по́здно", "ка́ждый день", "Voy a volver tarde a casa todos los días"],
    ["начина́ть", "нача́ть", " рабо́тать", "За́втра", "Mañana voy a empezar a trabajar", " рабо́тать в де́вять часо́в", "ка́ждый день", "Voy a empezar a trabajar a las nueve todos los días"],
    ["зака́нчивать", "зако́нчить", " рабо́тать в шесть часо́в", "За́втра", "Mañana voy a terminar de trabajar a las seis", " рабо́тать в шесть часо́в", "ка́ждый день", "Voy a terminar de trabajar a las seis todos los días"],
    ["звони́ть", "позвони́ть", " домо́й", "Ве́чером", "Por la noche voy a llamar a casa", " домо́й", "ка́ждый день", "Voy a llamar a casa todos los días"],
    ["ложи́ться", "лечь", " спать ра́но", "Сего́дня", "Hoy me voy a acostar temprano", " спать ра́но", "ка́ждый день", "Me voy a acostar temprano todos los días"],
    ["отдыха́ть", "отдохну́ть", "", "В суббо́ту", "El sábado voy a descansar (y recuperarme)", "", "весь день", "Voy a descansar todo el día"]];
  ASP.forEach((a, j) => {
    const [ik, rk, ro, t, esR, po, marca, esP] = a, I = VF(ik), R = VF(rk);
    const res = t + " я " + R.fut[0] + ro + ".", resI = t + " я бу́ду " + I.ac + ro + ".", resB = t + " я бу́ду " + R.ac + ro + ".";
    const pro = "Я бу́ду " + I.ac + po + " " + marca + ".", proMal = "Я " + R.fut[0] + po + " " + marca + ".";
    const base = { items: ["lex:" + I.id, "lex:" + R.id] };
    const dudoso = ik === "отдыха́ть";   /* «В суббо́ту я бу́ду отдыха́ть» también suena natural */
    if (!dudoso) push(Object.assign({ id: "U9-par-fr-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-cual", grupo: "FR-" + j, oir: res, pide: "«" + esR + "». ¿Cuál dices?", opciones: baraja([res, resI], j), correcta: res,
      explicacion: res + " Una acción que va a terminar: " + R.fut[0] + ", sin бу́ду." }, base));
    push(Object.assign({ id: "U9-par-fp-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-cual", grupo: "FP-" + j, oir: pro, pide: "«" + esP + "». ¿Cuál dices?", opciones: baraja([pro, proMal], j + 1), correcta: pro,
      explicacion: pro + " " + marca + ": " + (/ка́ждый/.test(marca) ? "se repite" : "cuánto dura") + ", proceso." }, base));
    push(Object.assign({ id: "U9-nat-fb-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-resultado", grupo: "FB-" + j, oir: res, pide: "¿Cuál es la correcta?", opciones: baraja([res, resB], j + 2), correcta: res,
      explicacion: res + " El de resultado no va con бу́ду: su presente ya es futuro." }, base));
    push(Object.assign({ id: "U9-nat-fm-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-cual", grupo: "FM-" + j, oir: pro, pide: "¿Cuál es la correcta?", opciones: baraja([pro, proMal], j + 3), correcta: pro,
      explicacion: pro + " Con " + marca + " va бу́ду + infinitivo." }, base));
    if (!dudoso) push(Object.assign({ id: "U9-pq-fr-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-cual", grupo: "FR-" + j, oir: res, pide: "¿Por qué " + R.fut[0] + " y no бу́ду " + I.ac + "?", grande: res, audio: res, audioManual: true,
      opciones: ["Una acción que va a terminar, una vez", "Cuánto va a durar o lo que se va a repetir"], correcta: "Una acción que va a terminar, una vez", explicacion: res + " Resultado: " + R.fut[0] + "." }, base));
    push(Object.assign({ id: "U9-pq-fp-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-cual", grupo: "FP-" + j, oir: pro, pide: "¿Por qué бу́ду " + I.ac + " y no " + R.fut[0] + "?", grande: pro, audio: pro, audioManual: true,
      opciones: ["Una acción que va a terminar, una vez", "Cuánto va a durar o lo que se va a repetir"], correcta: "Cuánto va a durar o lo que se va a repetir", explicacion: pro + " " + marca + ": proceso." }, base));
    /* pareja: el futuro de resultado de «yo» */
    const malF = R.fut[0].replace(/(у́|ю́|у|ю)(сь)?$/, "") + "ю";
    push(Object.assign({ id: "U9-parj-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: 3, regla: "u9-fut-formas", grupo: "PJ-" + j, oir: R.fut[0], pide: "¿Cómo es «voy a…» con " + R.ac + " (я)?",
      opciones: baraja(uniq([R.fut[0], "бу́ду " + R.ac, I.pres[0]]), j), correcta: R.fut[0], explicacion: R.ac + " → я " + R.fut[0] + ", sin бу́ду. (" + I.pres[0] + " es el presente de " + I.ac + ".)" }, base));
    push(Object.assign({ id: "U9-asp-w-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 3, regla: "u9-fut-cual", grupo: "AW-" + j, oir: res, pide: "Escribe en ruso: «" + esR + "».", audio: res, audioManual: true,
      esperadas: [res, "Я " + R.fut[0] + ro + " " + low(t) + "."], idioma: "ru", explicacion: res }, base));
    if (j % 2 === 0) push(Object.assign({ id: "U9-asp-wp-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 3, regla: "u9-fut-cual", grupo: "AWp-" + j, oir: pro, pide: "Escribe en ruso: «" + esP + "».", audio: pro, audioManual: true,
      esperadas: [pro, cap(marca) + " я бу́ду " + I.ac + po + "."], idioma: "ru", explicacion: pro + " " + marca + ": proceso." }, base));
    if (j < 8) push(Object.assign({ id: "U9-diag-fm-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 3, regla: "u9-fut-cual", grupo: "FD-" + j, oir: pro, pide: "La frase tiene un error. ¿Qué falla?", grande: proMal,
      opciones: ["El verbo: tiene que ser бу́ду + infinitivo", "Falta не", "El lugar o el objeto"], correcta: "El verbo: tiene que ser бу́ду + infinitivo", esperadas: [pro], explicacion: pro + " Con " + marca + " va el de proceso." }, base));
    if (j >= 8 || j < 2) push(Object.assign({ id: "U9-diag-fb-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 3, regla: "u9-fut-resultado", grupo: "FBd-" + j, oir: res, pide: "La frase tiene un error. ¿Qué falla?", grande: resB,
      opciones: ["El de resultado no va con бу́ду", "La forma de бу́ду", "Falta не"], correcta: "El de resultado no va con бу́ду", esperadas: [res], explicacion: res + " " + R.ac + " → " + R.fut[0] + "." }, base));
  });
  /* Oído: ¿ahora o en el futuro? */
  [["чита́ть", "прочита́ть", " кни́гу"], ["писа́ть", "написа́ть", " письмо́"], ["де́лать", "сде́лать", " рабо́ту"], ["гото́вить", "пригото́вить", " у́жин"], ["покупа́ть", "купи́ть", " хлеб"], ["смотре́ть", "посмотре́ть", " фильм"]].forEach(([ik, rk, o], j) => {
    const I = VF(ik), R = VF(rk), fut = j % 2 === 0, ru = "Я " + (fut ? R.fut[0] : I.pres[0]) + o + ".";
    push({ id: "U9-oido-fr-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-resultado", grupo: "OF-" + j, items: ["lex:" + R.id], oir: ru, pide: "Escucha: ¿ahora o en el futuro?", audio: ru,
      opciones: ["Ahora", "En el futuro"], correcta: fut ? "En el futuro" : "Ahora", explicacion: "Sonó **" + (fut ? R.fut[0] : I.pres[0]) + "**: " + (fut ? "de resultado, su presente es futuro." : "presente de " + I.ac + ".") });
  });
  /* Descubrir: de un presente al futuro de resultado */
  [["за́втракать", "поза́втракать", [["чита́ть", "прочита́ть"], ["де́лать", "сде́лать"]]], ["обе́дать", "пообе́дать", [["за́втракать", "поза́втракать"], ["чита́ть", "прочита́ть"]]],
   ["у́жинать", "поу́жинать", [["обе́дать", "пообе́дать"], ["де́лать", "сде́лать"]]], ["смотре́ть", "посмотре́ть", [["за́втракать", "поза́втракать"], ["обе́дать", "пообе́дать"]]]].forEach(([ik, rk, ej], j) => {
    const I = VF(ik), R = VF(rk);
    push({ id: "U9-desc-fr-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-fut-formas", grupo: "DF-" + j, items: ["lex:" + R.id], oir: R.fut[0],
      pide: ej.map(([a, b]) => VF(a).pres[0] + " → " + VF(b).fut[0]).join(" · ") + ". ¿Y " + I.pres[0] + "?", opciones: baraja([R.fut[0], "бу́ду " + R.ac], j), correcta: R.fut[0],
      explicacion: I.pres[0] + " → " + R.fut[0] + ": el prefijo adelante y la misma terminación, sin бу́ду." });
  });
  /* Cadena: presente → proceso en futuro → resultado */
  ASP.slice(0, 6).forEach((a, j) => {
    const [ik, rk, ro, t] = a, I = VF(ik), R = VF(rk), b0 = "Я " + I.pres[0] + ro + ".";
    push({ id: "U9-cad-fr-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 3, regla: "u9-fut-resultado", grupo: "CF-" + j, items: ["lex:" + I.id, "lex:" + R.id], oir: t + " я " + R.fut[0] + ro + ".",
      pide: "Cambia la frase paso a paso.", base: b0,
      pasos: [{ pide: "Pásala al futuro, como actividad (бу́ду).", esperadas: ["Я бу́ду " + I.ac + ro + "."] }, { pide: "Ahora di que lo vas a terminar " + low(t === "За́втра" ? "mañana (за́втра)" : "por la noche (ве́чером)") + ".", esperadas: [t + " я " + R.fut[0] + ro + ".", "Я " + R.fut[0] + ro + " " + low(t) + "."] }],
      explicacion: b0 + " → Я бу́ду " + I.ac + ro + ". → " + t + " я " + R.fut[0] + ro + ". " + ik + " → " + rk + ": del proceso al resultado." });
  });
  [["За́втра", "я", "куплю́", "биле́т"], ["Ве́чером", "она́", "напи́шет", "письмо́"], ["За́втра", "мы", "сде́лаем", "рабо́ту"], ["Ве́чером", "он", "пригото́вит", "у́жин"]].forEach((pal, j) => {
    push({ id: "U9-desarm-fr-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 3, regla: "u9-fut-resultado", grupo: "DR-" + j, items: [], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: [{ pide: "¿Qué palabra dice que es futuro? (el verbo)", correcta: 2 }, { pide: "¿Qué se va a terminar? (el objeto)", correcta: 3 }, { pide: "¿Cuándo?", correcta: 0 }],
      explicacion: pal.join(" ") + ". " + pal[2] + " es de resultado: su presente es futuro, sin бу́ду." });
  });
  [["нача́ть", "рабо́тать", "изуча́ть", "Мы"], ["зако́нчить", "чита́ть", "рабо́тать", "Я"]].forEach(([rk, inf, inf2, s], j) => {
    const R = VF(rk), i = s === "Я" ? 0 : 3, ok = s + " " + R.fut[i] + " " + inf + ".", mal = s + " " + R.fut[i] + " " + VF(inf).pres[i] + ".";
    push({ id: "U9-nat-pn-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u9-pares-nuevos", grupo: "PN-" + j, items: ["lex:" + R.id], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Después de " + rk + " va el infinitivo de proceso." });
  });

  /* ── Módulo 4: быть en futuro y el clima ── */
  [["Я", 0, "до́ма"], ["Она́", 2, "на рабо́те"], ["Мы", 3, "в Москве́"], ["Они́", 5, "в рестора́не"], ["Ты", 1, "в о́фисе"], ["Вы", 4, "в па́рке"]].forEach(([s, i, l], j) => {
    const ok = "За́втра " + low(s) + " " + budu[i] + " " + l + ".", mal = "За́втра " + low(s) + " " + budu[i] + " быть " + l + ".";
    push({ id: "U9-nat-by-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-byt-tres", grupo: "NY-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " бу́ду ya es «voy a estar»: no se agrega быть." });
    const g = i === 0 ? "m" : i === 2 ? "f" : "pl", pa = "Вчера́ " + low(s) + " " + VF("быть").pas[i === 1 ? "m" : g] + " " + l + ".";
    const fut = j % 2 === 0;
    push({ id: "U9-oido-by-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-byt-fut", grupo: "OY-" + j, items: [], oir: fut ? ok : pa, pide: "Escucha: ¿estuvo o va a estar?", audio: fut ? ok : pa,
      opciones: ["Estuvo", "Va a estar"], correcta: fut ? "Va a estar" : "Estuvo", explicacion: (fut ? ok + " бу́ду: futuro." : pa + " был / была́: pasado.") });
    if (j < 4) push({ id: "U9-cad-by-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 4, regla: "u9-byt-tres", grupo: "CY-" + j, items: [], oir: ok, pide: "Cambia la frase paso a paso.", base: pa,
      pasos: [{ pide: "Ahora (сейча́с).", esperadas: ["Сейча́с " + low(s) + " " + l + ".", s + " " + l + "."] }, { pide: "Mañana (за́втра).", esperadas: [ok, s + " " + budu[i] + " " + l + " за́втра."] }],
      explicacion: pa + " → Сейча́с " + low(s) + " " + l + ". → " + ok + " En presente, быть no se dice." });
  });
  [["дождь", "За́втра бу́дет дождь.", "За́втра бу́дут дождь."], ["со́лнечно", "За́втра бу́дет со́лнечно.", "За́втра бы́ло со́лнечно."], ["о́блачно", "В суббо́ту бу́дет о́блачно.", "В суббо́ту бу́ду о́блачно."],
   ["тума́н", "У́тром бу́дет тума́н.", "У́тром бу́дут тума́н."], ["жара́", "Ле́том бу́дет жара́.", "Ле́том была́ бы жара́."], ["моро́з", "Зимо́й бу́дет моро́з.", "Зимо́й бу́дем моро́з."]].forEach(([w, ok, mal], j) => {
    if (/ бы /.test(mal)) mal = "Ле́том бу́ду жара́.";
    push({ id: "U9-nat-cl-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-clima", grupo: "CL-" + j, items: ["lex:" + lex(w).id], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Para el clima en futuro, siempre бу́дет." });
  });
  [[2, "два"], [4, "четы́ре"], [5, "пять"], [10, "де́сять"], [20, "два́дцать"], [3, "три"]].forEach(([n, num], j) => {
    const c = casosById(lex("гра́дус").id), f = n <= 4 ? (c.conteo || c.sg[1]) : c.pl[1], otra = n <= 4 ? c.pl[1] : (c.conteo || c.sg[1]), ok = "Бу́дет " + num + " " + f + ".";
    push({ id: "U9-pq-gr-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-clima", grupo: "GR-" + j, items: ["lex:" + lex("гра́дус").id], oir: ok, pide: "¿Por qué «" + f + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Va después de 2, 3 o 4", "Va después de 5 o más"], correcta: n <= 4 ? "Va después de 2, 3 o 4" : "Va después de 5 o más", explicacion: ok + " гра́дус se cuenta como час: " + (n <= 4 ? "гра́дуса" : "гра́дусов") + "." });
    push({ id: "U9-nat-gr-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-clima", grupo: "GRn-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, "Бу́дет " + num + " " + otra + "."], j), correcta: ok,
      explicacion: ok });
  });
  [["о́тпуск", "бу́дет"], ["пра́здник", "бу́дет"], ["встре́ча", "бу́дет"], ["кани́кулы", "бу́дут"]].forEach(([n0, f], j) => {
    const ok = "За́втра у меня́ " + f + " " + n0 + ".", mal = "За́втра у меня́ " + (f === "бу́дет" ? "бу́ду" : "бу́дет") + " " + n0 + ".";
    push({ id: "U9-nat-um-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-u-menya-budet", grupo: "UM-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " бу́дет concuerda con " + n0 + (f === "бу́дут" ? ", que es plural." : ", no con quien habla.") });
    push({ id: "U9-pq-um-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u9-u-menya-budet", grupo: "UMp-" + j, items: [], oir: ok, pide: "¿Por qué " + f + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Concuerda con " + n0, "Concuerda con quien habla"], correcta: "Concuerda con " + n0, explicacion: ok + " " + (f === "бу́дут" ? n0 + " es plural: бу́дут." : "Una cosa: бу́дет.") });
  });

  /* ── Módulo 5: че́рез, fórmulas, algún día ── */
  const kzN = ac => casosById(lex(ac, "sustantivo").id);
  const cuenta = (ac, n) => { const c = kzN(ac); if (n === 1) return c.sg[0]; if (n <= 4) return c.conteo || c.sg[1]; return c.pl[1]; };
  const NUMS = { 2: "два", 3: "три", 4: "четы́ре", 5: "пять", 6: "шесть", 7: "семь", 10: "де́сять" };
  [["день", 2], ["день", 5], ["год", 3], ["год", 5], ["ме́сяц", 2], ["ме́сяц", 6], ["час", 4], ["час", 7]].forEach(([w, n], j) => {
    const f = cuenta(w, n), otra = cuenta(w, n <= 4 ? 5 : 2), ok = "че́рез " + NUMS[n] + " " + f, fr = "Я бу́ду до́ма " + ok + ".";
    push({ id: "U9-pq-ch-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 5, regla: "u9-cherez", grupo: "CH-" + j, items: ["lex:" + lex("че́рез").id], oir: fr, pide: "¿Por qué «" + f + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Va después de 2, 3 o 4", "Va después de 5 o más"], correcta: n <= 4 ? "Va después de 2, 3 o 4" : "Va después de 5 o más", explicacion: ok + ": la misma cuenta que con наза́д." });
    push({ id: "U9-nat-ch-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u9-cherez", grupo: "CHn-" + j, items: [], oir: fr, pide: "¿Cuál es la correcta?",
      opciones: baraja([fr, j % 2 ? "Я бу́ду до́ма " + NUMS[n] + " " + f + " че́рез." : "Я бу́ду до́ма че́рез " + NUMS[n] + " " + otra + "."], j), correcta: fr,
      explicacion: fr + " " + (j % 2 ? "че́рез va adelante." : (n <= 4 ? "Con 2, 3 y 4: " : "De 5 en adelante: ") + f + ".") });
    if (j % 2 === 0) push({ id: "U9-par-ch-" + j, tipo: "par", forma: "elegir", dificultad: 1, modulo: 5, regla: "u9-cherez", grupo: "CHp-" + j, items: [], oir: ok,
      pide: "«Dentro de " + { 2: "dos", 3: "tres", 4: "cuatro", 6: "seis", 5: "cinco", 7: "siete" }[n] + " " + { "день": "días", "год": "años", "ме́сяц": "meses", "час": "horas" }[w] + "». ¿Cuál dices?",
      opciones: baraja([ok, NUMS[n] + " " + f + " наза́д"], j), correcta: ok, explicacion: ok + " = dentro de… · " + NUMS[n] + " " + f + " наза́д = hace…" });
  });
  [["день", 3, [2, 4]], ["год", 6, [5, 7]], ["ме́сяц", 4, [2, 3]], ["день", 10, [5, 6]]].forEach(([w, n, ej], j) => {
    const ok = "че́рез " + NUMS[n] + " " + cuenta(w, n);
    push({ id: "U9-desc-ch-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 5, regla: "u9-cherez", grupo: "CHd-" + j, items: [], oir: ok,
      pide: ej.map(k => "че́рез " + NUMS[k] + " " + cuenta(w, k)).join(" · ") + ". ¿Y " + NUMS[n] + "?", opciones: baraja([ok, "че́рез " + NUMS[n] + " " + cuenta(w, n <= 4 ? 5 : 2)], j), correcta: ok,
      explicacion: ok + ": el mismo grupo que " + ej.map(k => NUMS[k]).join(" y ") + "." });
  });
  [["на сле́дующей неде́ле", "в сле́дующей неде́ле"], ["в сле́дующем году́", "на сле́дующем году́"], ["в бу́дущем году́", "на бу́дущем году́"]].forEach(([ok, mal], j) => {
    const fr = t => cap(t) + " я бу́ду в Москве́.";
    push({ id: "U9-nat-fo-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u9-formulas", grupo: "FO-" + j, items: [], oir: fr(ok), pide: "¿Cuál es la correcta?", opciones: baraja([fr(ok), fr(mal)], j), correcta: fr(ok),
      explicacion: fr(ok) + " " + (j === 0 ? "Con неде́ля va на." : "Con год va {в}.") });
  });
  [["когда́-нибудь", "когда́-то", "Algún día voy a vivir en Moscú", "Когда́-нибудь я бу́ду жить в Москве́."], ["когда́-то", "когда́-нибудь", "En otro tiempo viví en Moscú", "Когда́-то я жил в Москве́."]].forEach(([ok, otro, es, fr], j) => {
    const mal = fr.replace(cap(ok), cap(otro));
    push({ id: "U9-par-kn-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 5, regla: "u9-cuando-fut", grupo: "KN-" + j, items: [], oir: fr, pide: "«" + es + "» (eres hombre). ¿Cuál dices?", opciones: baraja([fr, mal], j), correcta: fr,
      explicacion: fr + " " + (j === 0 ? "**-нибудь**: el futuro." : "**-то**: el pasado.") });
  });

  /* ── Módulo 6: intenciones ── */
  [["хоте́ть", 0, "путеше́ствовать"], ["плани́ровать", 3, "рабо́тать до́ма"], ["собира́ться", 2, "изуча́ть ру́сский"], ["мечта́ть", 0, "жить в Москве́"], ["наде́яться", 0, "отдыха́ть ле́том"],
   ["обеща́ть", 0, "звони́ть ча́сто"], ["хоте́ть", 3, "поступи́ть в университе́т"], ["плани́ровать", 0, "сдать экза́мен"]].forEach(([ik, i, inf], j) => {
    const I = VF(ik), s = ["Я", "Ты", "Она́", "Мы"][[0, 1, 2, 3].indexOf(i)] || "Я", v1 = inf.split(" ")[0], V1 = VF(v1);
    const ok = s + " " + I.pres[i] + " " + inf + ".", malW = V1.pres ? V1.pres[i] : V1.fut[i], mal = s + " " + I.pres[i] + " " + [malW].concat(inf.split(" ").slice(1)).join(" ") + ".";
    const base = { grupo: "IN-" + j, items: ["lex:" + I.id], oir: ok };
    push(Object.assign({ id: "U9-nat-in-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u9-intencion", pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Después de " + I.pres[i] + " va el infinitivo." }, base));
    if (j < 5) push(Object.assign({ id: "U9-pq-in-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 6, regla: "u9-intencion", pide: "¿Por qué " + v1 + " y no " + malW + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Después de " + I.pres[i] + " va el infinitivo", "Es el pasado de " + v1], correcta: "Después de " + I.pres[i] + " va el infinitivo", explicacion: ok }, base, { grupo: "INp-" + j }));
  });
  [["хочу́", "Quiero trabajar", "Voy a trabajar"], ["плани́рую", "Planeo trabajar", "Voy a trabajar"], ["бу́ду", "Voy a trabajar", "Quiero trabajar"], ["обеща́ю", "Prometo trabajar", "Voy a trabajar"], ["наде́юсь", "Espero trabajar", "Planeo trabajar"]].forEach(([w, es, otroEs], j) => {
    const ok = "Я " + w + " рабо́тать.", otroW = { "Voy a trabajar": "бу́ду", "Quiero trabajar": "хочу́", "Planeo trabajar": "плани́рую" }[otroEs], mal = "Я " + otroW + " рабо́тать.";
    push({ id: "U9-par-in-" + j, tipo: "par", forma: "elegir", dificultad: 1, modulo: 6, regla: "u9-budu-vs-hochu", grupo: "INr-" + j, items: [], oir: ok, pide: "«" + es + "». ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (w === "бу́ду" ? "Va a pasar." : "Lo que piensas de eso: " + es.toLowerCase() + ".") });
  });

  /* ── Módulo 7: пойду́ / пое́ду, dónde y adónde, transporte ── */
  [["кино́", "п"], ["парк", "п"], ["магази́н", "п"], ["Москва́", "е"], ["Мадри́д", "е"], ["Пари́ж", "е"]].forEach(([n0, m], j) => {
    const L = lugar(n0), p = PERS[j % 4], i = p[1], forms = m === "п" ? poidu : poedu, ok = p[0] + " " + forms[i] + " в " + L.acc + ".";
    const base = { grupo: "MV-" + j, items: ["lex:" + L.id], oir: ok };
    push(Object.assign({ id: "U9-nat-mv-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-poidu", pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, p[0] + " " + budu[i] + " " + (m === "п" ? "идти́" : "е́хать") + " в " + L.acc + "."], j), correcta: ok, explicacion: ok + " Para un plan, " + forms[i] + ", no бу́ду + идти́ / е́хать." }, base));
    push(Object.assign({ id: "U9-pq-mv-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-poidu", pide: "¿Por qué " + forms[i] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Va a ir en un vehículo", "Va a ir a pie"], correcta: m === "е" ? "Va a ir en un vehículo" : "Va a ir a pie", explicacion: ok + " " + (m === "е" ? "пое́хать: en un vehículo." : "пойти́: a pie.") }, base, { grupo: "MVp-" + j }));
    if (L.acc !== L.prep) {
      const r1 = p[0] + " " + budu[i] + " в " + L.prep + ".";
      push(Object.assign({ id: "U9-par-mv-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-budu-v-poedu-v", grupo: "MVr-" + j, oir: j % 2 ? r1 : ok,
        pide: j % 2 ? "¿Cuál dice dónde va a estar?" : "¿Cuál dice adónde va a ir?", opciones: baraja([ok, r1], j), correcta: j % 2 ? r1 : ok,
        explicacion: (j % 2 ? r1 + " бу́ду + dónde: prepositivo." : ok + " " + forms[i] + " + adónde: acusativo.") }, base));
      push(Object.assign({ id: "U9-nat-mvc-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-budu-v-poedu-v", grupo: "MVc-" + j, oir: ok, pide: "¿Cuál es la correcta?",
        opciones: baraja([ok, p[0] + " " + forms[i] + " в " + L.prep + "."], j + 1), correcta: ok, explicacion: ok + " Adónde: acusativo." }, base));
      if (j >= 3) push(Object.assign({ id: "U9-diag-mv-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla: "u9-budu-v-poedu-v", grupo: "MVd-" + j, oir: ok, pide: "La frase tiene un error. ¿Qué falla?",
        grande: p[0] + " " + forms[i] + " в " + L.prep + ".", opciones: ["El caso del lugar", "El verbo", "Falta бу́ду"], correcta: "El caso del lugar", esperadas: [ok], explicacion: ok + " Con " + forms[i] + ", adónde: acusativo." }, base));
    }
  });
  [["по́езд", "Мадри́д"], ["самолёт", "Москва́"], ["маши́на", "Пари́ж"], ["мотоци́кл", "Рим"]].forEach(([tr, d], j) => {
    const T = lugar(tr), D = lugar(d), ok = "Я пое́ду в " + D.acc + " на " + T.prep + ".", mal = "Я пое́ду в " + D.acc + " на " + T.acc + ".";
    push({ id: "U9-nat-tr-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-transporte", grupo: "TRn-" + j, items: ["lex:" + T.id], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " En qué vas: на + prepositivo." });
    push({ id: "U9-pq-tr-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u9-transporte", grupo: "TRp-" + j, items: ["lex:" + T.id], oir: ok, pide: "¿Por qué «на " + T.prep + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Es en qué va: на + prepositivo", "Es adónde va: acusativo"], correcta: "Es en qué va: на + prepositivo", explicacion: ok });
  });
  [["кино́", "Я бу́ду идти́ в кино́."], ["парк", "Мы бу́дем идти́ в парк."]].forEach(([l, mal], j) => {
    const ok = mal.replace("бу́ду идти́", "пойду́").replace("бу́дем идти́", "пойдём");
    push({ id: "U9-diag-bi7-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla: "u9-poidu", grupo: "BId7-" + j, items: [], oir: ok, pide: "Es un plan, y la frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["Para un plan va пойду́", "El caso del lugar", "Falta не"], correcta: "Para un plan va пойду́", esperadas: [ok], explicacion: ok + " бу́ду идти́ describe el camino, no el plan." });
  });

  /* ── Módulo 8: preguntas y когда́ + futuro ── */
  [["зако́нчить", "зака́нчивать", "позвоню́", "Cuando termine, llamo"], ["верну́ться", "возвраща́ться", "бу́ду гото́вить", "Cuando vuelva, voy a cocinar"], ["прочита́ть", "чита́ть", "позвоню́", "Cuando termine de leer, llamo"], ["купи́ть", "покупа́ть", "верну́сь", "Cuando compre, vuelvo"]].forEach(([rk, ik, seg, es], j) => {
    const R = VF(rk), I = VF(ik), ok = "Когда́ я " + R.fut[0] + ", я " + seg + ".", mal = "Когда́ я " + I.pres[0] + ", я " + seg + ".";
    push({ id: "U9-nat-kg-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u9-kogda-fut", grupo: "KG-" + j, items: ["lex:" + R.id], oir: ok, pide: "«" + es + "». ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Lo que todavía no pasó va en futuro: " + R.fut[0] + "." });
    push({ id: "U9-pq-kg-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 8, regla: "u9-kogda-fut", grupo: "KGp-" + j, items: ["lex:" + R.id], oir: ok, pide: "¿Por qué " + R.fut[0] + " después de когда́?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Todavía no pasó: futuro", "Pasa ahora: presente"], correcta: "Todavía no pasó: futuro", explicacion: ok + " Donde el español dice «cuando termine», el ruso usa el futuro." });
  });
  [["Что ты бу́дешь де́лать за́втра?", "Что ты сде́лаешь за́втра?", "Le preguntas a un amigo qué actividad va a hacer mañana"], ["Ты сде́лаешь э́то за́втра?", "Ты бу́дешь сде́лать э́то за́втра?", "Le preguntas si mañana lo va a tener hecho"]].forEach(([ok, mal, es], j) => {
    push({ id: "U9-par-pq-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 8, regla: "u9-preguntas", grupo: "PQr-" + j, items: [], oir: ok, pide: es + ". ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (j === 0 ? "Por la actividad: бу́дешь де́лать." : "Por el resultado: сде́лаешь, sin бу́ду.") });
  });

  /* ── Módulo 9: un plan en orden ── */
  [[["зако́нчить", " рабо́ту"], ["пойти́", " в магази́н"]], [["поза́втракать", ""], ["пойти́", " на рабо́ту"]], [["купи́ть", " хлеб"], ["верну́ться", " домо́й"]],
   [["написа́ть", " спи́сок"], ["купи́ть", " биле́т"]], [["пригото́вить", " у́жин"], ["посмотре́ть", " фильм"]], [["сде́лать", " рабо́ту"], ["отдохну́ть", ""]]].forEach(([[a, oa], [b, ob]], j) => {
    const A = VF(a), B = VF(b), ok = "Снача́ла я " + A.fut[0] + oa + ", пото́м " + B.fut[0] + ob + ".";
    const imp = { "зако́нчить": "зака́нчивать", "поза́втракать": "за́втракать", "купи́ть": "покупа́ть", "написа́ть": "писа́ть", "пригото́вить": "гото́вить", "сде́лать": "де́лать", "пойти́": "идти́", "верну́ться": "возвраща́ться", "посмотре́ть": "смотре́ть", "отдохну́ть": "отдыха́ть" };
    const mal = "Снача́ла я бу́ду " + imp[a] + oa + ", пото́м бу́ду " + imp[b] + ob + ".";
    const base = { grupo: "OR-" + j, items: ["lex:" + A.id, "lex:" + B.id], oir: ok };
    push(Object.assign({ id: "U9-nat-or-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u9-orden-fut", pide: "Un plan en orden. ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Una cosa después de otra, cada una terminada: futuro de resultado." }, base));
    if (j < 4) push(Object.assign({ id: "U9-cad-or-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 9, regla: "u9-orden-fut", pide: "Cambia la frase paso a paso.", base: "Я " + A.fut[0] + oa + ".",
      pasos: [{ pide: "Agrega qué vas a hacer después (пото́м + " + b + ").", esperadas: [ "Я " + A.fut[0] + oa + ", пото́м " + B.fut[0] + ob + ".", "Я " + A.fut[0] + oa + ", а пото́м " + B.fut[0] + ob + ".", "Я " + A.fut[0] + oa + " и пото́м " + B.fut[0] + ob + ".", "Я " + A.fut[0] + oa + ", пото́м я " + B.fut[0] + ob + "."] },
              { pide: "Ahora cuéntalo de мы.", esperadas: ["Мы " + A.fut[3] + oa + ", пото́м " + B.fut[3] + ob + ".", "Мы " + A.fut[3] + oa + ", а пото́м " + B.fut[3] + ob + ".", "Мы " + A.fut[3] + oa + " и пото́м " + B.fut[3] + ob + ".", "Мы " + A.fut[3] + oa + ", пото́м мы " + B.fut[3] + ob + "."] }],
      explicacion: "Я " + A.fut[0] + oa + ", пото́м " + B.fut[0] + ob + ". → Мы " + A.fut[3] + oa + ", пото́м " + B.fut[3] + ob + "." }, base, { grupo: "ORc-" + j }));
  });
  [["Я успе́ю.", "Me va a dar el tiempo."], ["Я не успе́ю.", "No voy a llegar."]].forEach(([ru, es], j) => {
    const mal = j ? "Я не успева́ю за́втра." : "Я бу́ду успе́ть.";
    push({ id: "U9-nat-us-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u9-orden-fut", grupo: "US-" + j, items: ["lex:" + lex("успе́ть").id], oir: ru, pide: "«" + es + "». ¿Cuál es la correcta?", opciones: baraja([ru, mal], j), correcta: ru,
      explicacion: ru + " успе́ть es de resultado: успе́ю ya es futuro." });
  });

  /* ── Módulo 10: el viaje ── */
  [["заброни́ровать", " гости́ницу", "брони́ровать", "Voy a reservar el hotel"], ["купи́ть", " авиабиле́т", "покупа́ть", "Voy a comprar el billete de avión"], ["собра́ть", " чемода́н", "собира́ть", "Voy a armar la maleta"],
   ["взять", " па́спорт", "брать", "Voy a llevar el pasaporte"], ["посети́ть", " музе́й", "посеща́ть", "Voy a visitar el museo"], ["сфотографи́ровать", " го́ры", "фотографи́ровать", "Le voy a sacar una foto a las montañas"]].forEach(([rk, o, ik, es], j) => {
    const R = VF(rk), ok = "Я " + R.fut[0] + o + ".", mal = "Я бу́ду " + R.ac + o + ".";
    const base = { grupo: "VP-" + j, items: ["lex:" + R.id], oir: ok };
    push(Object.assign({ id: "U9-nat-vp-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 10, regla: "u9-viaje-prep", pide: "«" + es + "». ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " El de resultado, sin бу́ду: " + R.fut[0] + "." }, base));
    push(Object.assign({ id: "U9-asp-vp-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 10, regla: "u9-viaje-prep", pide: "Escribe en ruso: «" + es + "».", audio: ok, audioManual: true, esperadas: [ok], idioma: "ru", explicacion: ok }, base, { grupo: "VPw-" + j }));
    if (j % 2 === 0) push(Object.assign({ id: "U9-diag-vp-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 10, regla: "u9-viaje-prep", pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["El de resultado no va con бу́ду", "El caso del objeto", "Falta не"], correcta: "El de resultado no va con бу́ду", esperadas: [ok], explicacion: ok }, base, { grupo: "VPd-" + j }));
  });
  [["купа́ться", " в мо́ре", "Me voy a bañar en el mar todos los días"], ["загора́ть", " на пля́же", "Voy a tomar sol en la playa todos los días"], ["гуля́ть", " в це́нтре", "Voy a pasear por el centro todos los días"]].forEach(([ik, o, es], j) => {
    const I = VF(ik), ok = "Я бу́ду " + I.ac + o + " ка́ждый день.", mal = "Я " + I.pres[0] + o + " ка́ждый день.";
    push({ id: "U9-par-va-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 10, regla: "u9-viaje-alla", grupo: "VA-" + j, items: ["lex:" + I.id], oir: ok, pide: "Estás planeando el viaje: «" + es + "». ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " En el viaje que viene, algo que se va a repetir: бу́ду + infinitivo." });
    push({ id: "U9-pq-va-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 10, regla: "u9-viaje-alla", grupo: "VAp-" + j, items: ["lex:" + I.id], oir: ok, pide: "¿Por qué бу́ду " + I.ac + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Se va a repetir: proceso", "Una vez y terminado: resultado"], correcta: "Se va a repetir: proceso", explicacion: ok + " ка́ждый день: proceso." });
  });
  [["посети́ть", " музе́й", "Una visita"], ["оста́ться", " в гости́нице", "Te vas a quedar"], ["провести́", " неде́лю в Москве́", "Vas a pasar la semana entera"]].forEach(([rk, o, x], j) => {
    const R = VF(rk), ok = "Я " + R.fut[0] + o + ".";
    push({ id: "U9-pq-vr-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 10, regla: "u9-viaje-alla", grupo: "VR-" + j, items: ["lex:" + R.id], oir: ok, pide: "¿Por qué " + R.fut[0] + ", sin бу́ду?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Es de resultado: su presente ya es futuro", "Es presente: pasa ahora"], correcta: "Es de resultado: su presente ya es futuro", explicacion: ok + " " + x + ": " + R.ac + " → " + R.fut[0] + "." });
  });

  /* `regla` en los tipos viejos: prefijo del id → regla (11/10/2026) */
  const REGLA_ID = [[/^U9-(clas|maq|tres|det11|plan)-/, "u9-tres-tiempos"], [/^U9-(budu|buduw)-|^U9-buemp$/, "u9-budu-formas"], [/^U9-(inf|camb|det2|esru3|dic3|ord3)-/, "u9-budu-inf"],
    [/^U9-(byt|bytel|bytq)-/, "u9-byt-fut"], [/^U9-(tsig|tw|tesru)-/, "u9-formulas"], [/^U9-(int|intel)-/, "u9-intencion"], [/^U9-diff-/, "u9-budu-vs-hochu"],
    [/^U9-(mov|movel)-/, "u9-poidu"], [/^U9-moved-/, "u9-budu-v-poedu-v"], [/^U9-(tr|trel)-/, "u9-transporte"], [/^U9-(preg|pregd|resp)-/, "u9-preguntas"],
    [/^U9-(ag|agw|cons)-/, "u9-agenda"], [/^U9-(via|viad)-/, "u9-viaje-prep"], [/^U9-amp-/, "u9-viaje-alla"]];
  out.forEach(e => { if (e.regla) return; const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1]; });
  out.forEach(e => { if (e.explicacion) e.explicacion = u9Palabras(e.explicacion); if (e.pide) e.pide = u9Palabras(e.pide); });
  return out;
}

/* Proyecto: requisitos y consejos */
(function () {
  const m = UNIDAD_9.modulos.find(x => x.id === "u9m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const BUDU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
  const MOV = ["пойду", "пойдешь", "пойдет", "пойдем", "пойдете", "пойдут", "поеду", "поедешь", "поедет", "поедем", "поедете", "поедут"];
  const esInf = w => info(w).some(x => (lexComerById(x[0]) || {}).posNormalized === "verbo" && K((lexComerById(x[0]) || {}).ru || "") === K(w));
  /* futuro del verbo de resultado (прочита́ю, куплю́…): una forma de «futuro» en Verbos (11/10/2026) */
  const futPerf = w => info(w).some(x => { const v = verboById(x[0]); return v && v.futuro && v.futuro.some(f => K(f) === K(w)); });
  const futuros = t => { let n = 0; frases(t).forEach(f => { const w = pal(f); w.map(K).forEach((x, i) => { if (MOV.indexOf(x) >= 0 || BUDU.indexOf(x) >= 0 || futPerf(w[i])) n++; }); }); return n; };
  const esPerf = w => info(w).some(x => { const e = lexComerById(x[0]) || {}; return e.posNormalized === "verbo" && e.aspect === "perfectivo" && K(e.ru) === K(w); });
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
    { txt: "Al menos 8 verbos en futuro (бу́ду…, пойду́, прочита́ю…)", fn: t => futuros(t) >= 8 },
    { txt: "Al menos 2 verbos de resultado en futuro (куплю́, сде́лаю…)", fn: t => pal(t).filter(w => futPerf(w) && MOV.indexOf(K(w)) < 0).length >= 2 },
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
        if (b >= 0 && w[i + 1] && esPerf(w[i + 1])) out.push("«" + w[i] + " " + w[i + 1] + "»: el verbo de resultado no va con бу́ду; su presente ya es futuro (прочита́ю, куплю́).");
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
