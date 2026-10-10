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
  /* ── Vocabulario nuevo (07/10/2026, aprobado por Manu): el último campo es el módulo
     donde se presenta; "o" = objeto o mueble (solo «dónde», nunca «adónde»). ── */
  /* Módulo 4: naturaleza, geografía y territorio */
  "о́зеро": ["lago", "en el lago", "al lago", "на", "🏞️", "е́хать", 4], "бе́рег": ["orilla", "en la orilla", "a la orilla", "на", "🏖️", "идти́", 4],
  "о́стров": ["isla", "en la isla", "a la isla", "на", "🏝️", "е́хать", 4], "по́ле": ["campo", "en el campo", "al campo", "в", "🌾", "идти́", 4],
  "холм": ["colina", "en la colina", "a la colina", "на", "⛰️", "идти́", 4], "океа́н": ["océano", "en el océano", "al océano", "в", "🌊", "е́хать", 4],
  "пусты́ня": ["desierto", "en el desierto", "al desierto", "в", "🏜️", "е́хать", 4], "се́вер": ["norte", "en el norte", "al norte", "на", "⬆️", "е́хать", 4],
  "за́пад": ["oeste", "en el oeste", "al oeste", "на", "⬅️", "е́хать", 4], "восто́к": ["este", "en el este", "al este", "на", "➡️", "е́хать", 4],
  "грани́ца": ["frontera", "en la frontera", "a la frontera", "на", "🛂", "е́хать", 4], "о́бласть": ["región", "en la región", "a la región", "в", "🗺️", "е́хать", 4],
  "прови́нция": ["provincia", "en la provincia", "a la provincia", "в", "🗺️", "е́хать", 4], "ро́дина": ["patria", "en la patria", "a la patria", "на", "🏡", "е́хать", 4],
  "райо́н": ["barrio", "en el barrio", "al barrio", "в", "🏘️", "идти́", 4], "кварта́л": ["manzana", "en la manzana", "a la manzana", "в", "🏘️", "идти́", 4],
  "при́город": ["afueras", "en las afueras", "a las afueras", "в", "🏡", "е́хать", 4], "столи́ца": ["capital", "en la capital", "a la capital", "в", "🏛️", "е́хать", 4],
  "дере́вня": ["pueblo", "en el pueblo", "al pueblo", "в", "🛖", "е́хать", 4], "лес": ["bosque", "en el bosque", "al bosque", "в", "🌲", "идти́", 4],
  "река́": ["río", "en el río", "al río", "на", "🏞️", "идти́", 4],
  /* Módulo 5: la casa (habitaciones y lugares) */
  "коридо́р": ["pasillo", "en el pasillo", "al pasillo", "в", "🚪", "идти́", 5], "ле́стница": ["escalera", "en la escalera", "a la escalera", "на", "🪜", "идти́", 5],
  "лифт": ["ascensor", "en el ascensor", "al ascensor", "в", "🛗", "идти́", 5], "туале́т": ["baño", "en el baño", "al baño", "в", "🚽", "идти́", 5],
  "гара́ж": ["garaje", "en el garaje", "al garaje", "в", "🚗", "идти́", 5], "подва́л": ["sótano", "en el sótano", "al sótano", "в", "🕯️", "идти́", 5],
  "кры́ша": ["techo", "en el techo", "al techo", "на", "🏠", "идти́", 5], "крыльцо́": ["entrada", "en la entrada", "a la entrada", "на", "🏡", "идти́", 5],
  "сад": ["jardín", "en el jardín", "al jardín", "в", "🌷", "идти́", 5], "огоро́д": ["huerta", "en la huerta", "a la huerta", "на", "🥕", "идти́", 5],
  "да́ча": ["casa de campo", "en la casa de campo", "a la casa de campo", "на", "🏡", "е́хать", 5], "двор": ["patio", "en el patio", "al patio", "во", "🌳", "идти́", 5],
  "подъе́зд": ["entrada del edificio", "en la entrada del edificio", "a la entrada del edificio", "в", "🚪", "идти́", 5],
  /* Módulo 5: muebles y objetos (solo «dónde») */
  "дива́н": ["sofá", "en el sofá", "", "на", "🛋️", "", "o5"], "кре́сло": ["sillón", "en el sillón", "", "в", "💺", "", "o5"],
  "по́лка": ["estante", "en el estante", "", "на", "📚", "", "o5"], "стена́": ["pared", "en la pared", "", "на", "🧱", "", "o5"],
  "пол": ["piso", "en el piso", "", "на", "⬇️", "", "o5"], "потоло́к": ["techo (por dentro)", "en el techo", "", "на", "⬆️", "", "o5"],
  "ковёр": ["alfombra", "en la alfombra", "", "на", "🟥", "", "o5"], "плита́": ["cocina (el artefacto)", "en la cocina", "", "на", "🔥", "", "o5"],
  "холоди́льник": ["heladera", "en la heladera", "", "в", "🧊", "", "o5"], "ва́нна": ["bañadera", "en la bañadera", "", "в", "🛁", "", "o5"],
  "карма́н": ["bolsillo", "en el bolsillo", "", "в", "👖", "", "o5"], "я́щик": ["cajón", "en el cajón", "", "в", "🗃️", "", "o5"],
  "коро́бка": ["caja", "en la caja", "", "в", "📦", "", "o5"], "шкаф": ["armario", "en el armario", "", "в", "🚪", "", "o5"],
  "у́гол": ["rincón", "en el rincón", "", "в", "📐", "", "o5"],
  /* Módulo 6: la ciudad, el trabajo y el estudio */
  "ры́нок": ["mercado", "en el mercado", "al mercado", "на", "🧺", "идти́", 6], "суперма́ркет": ["supermercado", "en el supermercado", "al supermercado", "в", "🏪", "идти́", 6],
  "кофе́йня": ["café (el local)", "en el café", "al café", "в", "🧁", "идти́", 6], "стадио́н": ["estadio", "en el estadio", "al estadio", "на", "🏟️", "е́хать", 6],
  "бассе́йн": ["pileta", "en la pileta", "a la pileta", "в", "🏊", "идти́", 6], "зоопа́рк": ["zoológico", "en el zoológico", "al zoológico", "в", "🦁", "е́хать", 6],
  "клуб": ["club", "en el club", "al club", "в", "🕺", "идти́", 6], "це́рковь": ["iglesia", "en la iglesia", "a la iglesia", "в", "⛪", "идти́", 6],
  "собо́р": ["catedral", "en la catedral", "a la catedral", "в", "⛪", "идти́", 6], "храм": ["templo", "en el templo", "al templo", "в", "🛕", "идти́", 6],
  "дворе́ц": ["palacio", "en el palacio", "al palacio", "во", "🏰", "е́хать", 6], "мост": ["puente", "en el puente", "al puente", "на", "🌉", "идти́", 6],
  "проспе́кт": ["avenida", "en la avenida", "a la avenida", "на", "🛣️", "идти́", 6], "переу́лок": ["callejón", "en el callejón", "al callejón", "в", "🏚️", "идти́", 6],
  "тротуа́р": ["vereda", "en la vereda", "a la vereda", "на", "🚶", "идти́", 6], "оте́ль": ["hotel", "en el hotel", "al hotel", "в", "🛎️", "е́хать", 6],
  "общежи́тие": ["residencia estudiantil", "en la residencia estudiantil", "a la residencia estudiantil", "в", "🏘️", "идти́", 6],
  "заво́д": ["fábrica", "en la fábrica", "a la fábrica", "на", "🏭", "е́хать", 6], "фа́брика": ["fábrica", "en la fábrica", "a la fábrica", "на", "🏭", "е́хать", 6],
  "фи́рма": ["empresa", "en la empresa", "a la empresa", "в", "🏢", "е́хать", 6], "кабине́т": ["despacho", "en el despacho", "al despacho", "в", "🗄️", "идти́", 6],
  "отде́л": ["sección", "en la sección", "a la sección", "в", "🗂️", "идти́", 6], "институ́т": ["instituto", "en el instituto", "al instituto", "в", "🔬", "е́хать", 6],
  "факульте́т": ["facultad", "en la facultad", "a la facultad", "на", "🎓", "е́хать", 6], "аудито́рия": ["aula", "en el aula", "al aula", "в", "🪑", "идти́", 6],
  "класс": ["clase (el aula)", "en la clase", "a la clase", "в", "🧑‍🏫", "идти́", 6],
  /* Módulo 7: eventos y actividades (siempre на) */
  "конце́рт": ["concierto", "en el concierto", "al concierto", "на", "🎤", "идти́", 7], "вы́ставка": ["exposición", "en la exposición", "a la exposición", "на", "🖼️", "идти́", 7],
  "спекта́кль": ["función", "en la función", "a la función", "на", "🎭", "идти́", 7], "матч": ["partido", "en el partido", "al partido", "на", "⚽", "идти́", 7],
  "фестива́ль": ["festival", "en el festival", "al festival", "на", "🎪", "е́хать", 7], "уро́к": ["clase", "en la clase", "a la clase", "на", "📖", "идти́", 7],
  "ле́кция": ["clase (en la facultad)", "en la clase", "a la clase", "на", "👩‍🏫", "идти́", 7], "экза́мен": ["examen", "en el examen", "al examen", "на", "📝", "идти́", 7],
  "семина́р": ["seminario", "en el seminario", "al seminario", "на", "💬", "идти́", 7], "собра́ние": ["reunión", "en la reunión", "a la reunión", "на", "👥", "идти́", 7],
  "совеща́ние": ["reunión de trabajo", "en la reunión de trabajo", "a la reunión de trabajo", "на", "📊", "идти́", 7],
  "конфере́нция": ["congreso", "en el congreso", "al congreso", "на", "🎙️", "е́хать", 7],
  /* Módulo 9: viajes y transporte */
  "порт": ["puerto", "en el puerto", "al puerto", "в", "⚓", "е́хать", 9], "ваго́н": ["vagón", "en el vagón", "al vagón", "в", "🚃", "идти́", 9],
  "кора́бль": ["barco", "en el barco", "al barco", "на", "🚢", "идти́", 9], "платфо́рма": ["andén", "en el andén", "al andén", "на", "🚉", "идти́", 9],
  "ка́сса": ["boletería", "en la boletería", "a la boletería", "в", "🎟️", "идти́", 9], "ло́дка": ["bote", "en el bote", "al bote", "в", "🛶", "идти́", 9],
  /* Antes eran de la ampliación; desde el 07/10/2026, en la base (el último campo es el módulo) */
  "аэропо́рт": ["aeropuerto", "en el aeropuerto", "al aeropuerto", "в", "✈️", "е́хать", 9], "больни́ца": ["hospital", "en el hospital", "al hospital", "в", "🏥", "е́хать", 6],
  "гости́ница": ["hotel", "en el hotel", "al hotel", "в", "🏨", "е́хать", 6], "кинотеа́тр": ["cine", "en el cine", "al cine", "в", "🎬", "идти́", 6],
  "библиоте́ка": ["biblioteca", "en la biblioteca", "a la biblioteca", "в", "📚", "идти́", 6], "апте́ка": ["farmacia", "en la farmacia", "a la farmacia", "в", "💊", "идти́", 6],
  "музе́й": ["museo", "en el museo", "al museo", "в", "🏛️", "идти́", 6], "теа́тр": ["teatro", "en el teatro", "al teatro", "в", "🎭", "идти́", 6],
  "вокза́л": ["estación de tren", "en la estación de tren", "a la estación de tren", "на", "🚆", "е́хать", 9], "по́чта": ["correo", "en el correo", "al correo", "на", "📮", "идти́", 6],
  "пляж": ["playa", "en la playa", "a la playa", "на", "🏖️", "идти́", 4],
  /* Ampliación: se declinan como adjetivos (excepción) */
  "ва́нная": ["cuarto de baño", "en el cuarto de baño", "al cuarto de baño", "в", "🛁", "идти́"],
  "гости́ная": ["living", "en el living", "al living", "в", "🛋️", "идти́"],
  "столо́вая": ["comedor", "en el comedor", "al comedor", "в", "🍽️", "идти́"], "прихо́жая": ["recibidor", "en el recibidor", "al recibidor", "в", "🧥", "идти́"],
  "бу́лочная": ["panadería", "en la panadería", "a la panadería", "в", "🥖", "идти́"], "парикма́херская": ["peluquería", "en la peluquería", "a la peluquería", "в", "💇", "идти́"]
};
const U6_AMPLIACION_RU = { 5: "ва́нная гости́ная столо́вая прихо́жая", 6: "бу́лочная парикма́херская" };
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
  4: "жить о́зеро бе́рег о́стров по́ле холм океа́н пусты́ня се́вер за́пад восто́к грани́ца о́бласть прови́нция ро́дина райо́н кварта́л при́город столи́ца дере́вня лес река́ пляж пруд",
  5: "во коридо́р ле́стница лифт туале́т гара́ж подва́л кры́ша крыльцо́ сад огоро́д да́ча двор подъе́зд дива́н кре́сло по́лка стена́ пол потоло́к ковёр плита́ холоди́льник ва́нна карма́н я́щик коро́бка шкаф у́гол эта́ж зе́ркало лежа́ть висе́ть сле́ва спра́ва наверху́ внизу́",
  6: "рабо́тать ры́нок суперма́ркет кофе́йня стадио́н бассе́йн зоопа́рк клуб це́рковь собо́р храм дворе́ц мост проспе́кт переу́лок тротуа́р оте́ль общежи́тие заво́д фа́брика фи́рма кабине́т отде́л институ́т факульте́т аудито́рия класс больни́ца гости́ница кинотеа́тр библиоте́ка апте́ка музе́й теа́тр по́чта па́мятник ба́шня светофо́р",
  7: "ря́дом далеко́ конце́рт вы́ставка спекта́кль матч фестива́ль уро́к ле́кция экза́мен семина́р собра́ние совеща́ние конфере́нция везде́ нигде́ бли́зко",
  8: "куда́ идти́",
  9: "е́хать ходи́ть е́здить порт ваго́н кора́бль платфо́рма ка́сса ло́дка аэропо́рт вокза́л"
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
  tiempo: "3 a 4 semanas con práctica diaria (unas 35–45 horas)",
  modulos: [
    { id: "u6m1", n: 1, tipo: "leccion", nPractica: 8, titulo: "¿Dónde?", resumen: "Где кни́га? — Кни́га на столе́.",
      intro: "Para preguntar dónde está algo o alguien, se usa где. Antes de ver la regla, mirá cómo suenan las respuestas.",
      secciones: [
        { id: "u6-donde", titulo: "Где?",
          antes: { pide: "Где кни́га? Elegí la respuesta.", opciones: ["Кни́га на столе́.", "Кни́га стол."], ok: "Кни́га на столе́.", por: "Para decir dónde, va una preposición (на) y la palabra cambia: стол → столе́." },
          texto: "Где significa «¿dónde?». La respuesta nombra el lugar y no lleva verbo «estar»: en presente, el ruso no lo dice. Кни́га на столе́ es, palabra por palabra, «libro sobre mesa».",
          ejemplos: [
            { ru: "Где кни́га? — Кни́га {на столе́}.", es: "¿Dónde está el libro? — El libro está en la mesa.", por: "Sin verbo: el lugar va directo después de кни́га." },
            { ru: "Где ма́ма? — Ма́ма {на рабо́те}.", es: "¿Dónde está mamá? — Mamá está en el trabajo.", por: "Lo mismo con una persona." },
            { ru: "Где телефо́н? — Телефо́н {на столе́}.", es: "¿Dónde está el teléfono? — El teléfono está en la mesa.", por: "La pregunta no cambia: где sirve para cosas y para personas." }],
          destacado: "Где кни́га? — Кни́га на столе́.",
          mas: { texto: "Где también sirve para preguntar dónde hace algo alguien: Где ты рабо́таешь? («¿dónde trabajás?»). La respuesta es la misma: un lugar con su preposición.\nEn una charla, para contestar alcanza con el lugar solo, sin repetir quién: Где ма́ма? — На рабо́те. Es la respuesta más natural; la frase completa también está bien, pero suena más a ejercicio.",
            ejemplos: [{ ru: "— Где ты? — {На рабо́те}.", es: "—¿Dónde estás? —En el trabajo.", por: "Se contesta con el lugar solo." }] },
          chequeo: [{ pide: "¿Cómo preguntás dónde está mamá?", opciones: ["Где ма́ма?", "Что ма́ма?", "Кто ма́ма?"], ok: "Где ма́ма?", por: "Где es «¿dónde?»." }] },
        { id: "u6-sin-prep", titulo: "Respuestas sin preposición",
          texto: "Algunas respuestas son una sola palabra, sin в ni на y sin cambiar nada: до́ма (en casa), здесь (acá), там (allá). Van tal cual.",
          ejemplos: [
            { ru: "Я {до́ма}.", es: "Estoy en casa.", por: "До́ма ya quiere decir «en casa»." },
            { ru: "Кни́га {здесь}.", es: "El libro está acá.", por: "Здесь: donde está el que habla." },
            { ru: "Ма́ма {там}.", es: "Mamá está allá.", por: "Там: en otro lugar." }],
          errores: [{ mal: "Я в до́ма.", bien: "Я {до́ма}.", por: "До́ма ya incluye el «en»: no lleva preposición." }],
          mas: { texto: "До́ма viene de дом («casa»), pero es una palabra aparte: quiere decir «en casa», la tuya o la de quien habla. Para hablar de la casa como edificio se usa дом con preposición: в до́ме («adentro de la casa»). Para «estoy en casa», siempre Я до́ма.\nЗдесь y там funcionan como «acá» y «allá»: здесь es donde está el que habla; там, cualquier otro lugar.",
            ejemplos: [{ ru: "Ма́ма {до́ма}, а па́па {на рабо́те}.", es: "Mamá está en casa y papá, en el trabajo.", por: "Una respuesta sin preposición y otra con на." }] } },
        { id: "u6-cambia", titulo: "La palabra cambia",
          texto: "Fijate en на столе́: стол cambió, le apareció una **-е** al final. Después de в o на, cuando la frase dice dónde está algo, la palabra cambia la terminación. Esa forma es un caso nuevo, el **prepositivo**: se llama así porque siempre va con una preposición.",
          ejemplos: [
            { ru: "Кни́га на стол{е́}.", es: "El libro está en la mesa.", por: "стол → столе́." },
            { ru: "Ма́ма на рабо́т{е}.", es: "Mamá está en el trabajo.", por: "рабо́та → рабо́те: la **-а** pasa a **-е**." }],
          destacado: "стол → на столе́ · рабо́та → на рабо́те",
          mas: { texto: "Ya conocés dos casos: el nominativo, la forma del diccionario, y el acusativo, la de lo que recibe la acción. El prepositivo es el tercero. A diferencia de los otros dos, nunca aparece solo: siempre va detrás de una preposición. Por eso, cuando veas в o на seguidos de una palabra que termina en **-е**, ya sabés qué caso es.\nLa buena noticia es que su regla es de las más parejas del ruso: casi todas las palabras terminan en **-е**." },
          chequeo: [{ pide: "Кни́га на ___.", opciones: ["стол", "столе́"], ok: "столе́", por: "Después de на, para decir dónde: prepositivo." }] }
      ] },
    { id: "u6m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "В y на", resumen: "в = adentro · на = encima, y algunas de memoria.",
      intro: "En español todo es «en». En ruso, «en» se dice de dos maneras, y elegir bien es la mitad del trabajo.",
      secciones: [
        { id: "u6-v", titulo: "В: adentro",
          antes: { pide: "Ко́шка ___ ко́мнате. ¿Cuál va?", opciones: ["в", "на"], ok: "в", por: "La gata está adentro de la habitación: в." },
          texto: "в es «adentro de»: un lugar cerrado o con límites, que te rodea. Es la más común de las dos: ante la duda, в.",
          ejemplos: [
            { ru: "Ко́шка {в ко́мнате}.", es: "La gata está en la habitación.", por: "Adentro de la habitación: в." },
            { ru: "Я {в магази́не}.", es: "Estoy en el negocio.", por: "Adentro del negocio." },
            { ru: "Они́ {в па́рке}.", es: "Están en el parque.", por: "El parque tiene límites: se está «adentro»." }],
          destacado: "в ко́мнате · в магази́не · в па́рке",
          mas: { texto: "«Adentro» en sentido amplio: una ciudad, un barrio o un parque también son lugares con límites, aunque no tengan techo. Por eso в Барсело́не, в це́нтре, в па́рке. Lo que importa no es si hay paredes, sino si te imaginás el lugar como un espacio que te rodea.",
            ejemplos: [{ ru: "Он живёт {в це́нтре}.", es: "Vive en el centro.", por: "El centro de la ciudad es una zona: в." }] } },
        { id: "u6-na", titulo: "На: encima",
          texto: "на es «sobre, encima de», y también «contra» una superficie: lo que está apoyado en algo.",
          ejemplos: [
            { ru: "Телефо́н {на столе́}.", es: "El teléfono está en la mesa.", por: "Apoyado encima: на." },
            { ru: "Кни́га {на столе́}, а телефо́н {в су́мке}.", es: "El libro está en la mesa y el teléfono, en la cartera.", por: "Encima: на. Adentro: в." }],
          errores: [{ mal: "Телефо́н в столе́.", bien: "Телефо́н {на столе́}.", por: "El teléfono está encima de la mesa, no adentro: на." }],
          chequeo: [{ pide: "Кни́га ___ су́мке.", opciones: ["в", "на"], ok: "в", por: "Adentro de la cartera: в." }] },
        { id: "u6-na-lista", titulo: "Los lugares que van con на",
          texto: "Algunos lugares van con на aunque uno esté adentro. No hay que buscarle la lógica a cada uno: se aprenden con la preposición puesta, como un bloque.\nна рабо́те (en el trabajo)\nна у́лице (en la calle)\nна ста́нции (en la estación)\nна ку́хне (en la cocina)\nна балко́не (en el balcón)",
          ejemplos: [
            { ru: "Па́па {на ку́хне}.", es: "Papá está en la cocina.", por: "Ку́хня va con на: se aprende así." },
            { ru: "Мы {на у́лице}.", es: "Estamos en la calle.", por: "У́лица, con на." }],
          truco: "Aprendé cada lugar con su preposición: no «ку́хня», sino «на ку́хне».",
          mas: { titulo: "Hay tendencias", texto: "Aunque se aprenden de memoria, hay dos tendencias que ayudan. Los lugares abiertos, sin techo, suelen ir con на: на у́лице, на пло́щади (en la plaza), на балко́не. Y las actividades, lo que uno está haciendo más que el lugar donde está, también van con на: на рабо́те, на свида́нии (en una cita). Más adelante en la unidad vas a ver muchos más de los dos tipos.\nSon tendencias, no reglas: парк es abierto y va con в. Ante la duda, в; y cada lugar con на, aprendido con su на.",
            ejemplos: [{ ru: "Они́ {на свида́нии}.", es: "Están en una cita.", por: "Una cita es algo que se hace, no un lugar: на." }] },
          chequeo: [{ pide: "Я ___ рабо́те.", opciones: ["в", "на"], ok: "на", por: "Рабо́та va con на: se aprende así." }] }
      ] },
    { id: "u6m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "El prepositivo", resumen: "дом → в до́ме · кварти́ра → в кварти́ре.",
      intro: "Después de в o на, cuando decís dónde está algo, la palabra cambia la terminación: es el **prepositivo**. La regla es de las más parejas del ruso.",
      secciones: [
        { id: "u6-prep-e", titulo: "Casi siempre, -е",
          antes: { pide: "шко́ла → в ___", opciones: ["шко́ле", "шко́лу", "шко́ла"], ok: "шко́ле", por: "Para decir dónde: **-а** → **-е**." },
          texto: "Si la palabra termina en **-а**, **-я**, **-о** o **-й**, esa letra se cambia por **-е**. Si termina en consonante, se le agrega **-е**.",
          ejemplos: [
            { ru: "в кварти́р{е}", es: "en el departamento", por: "кварти́ра: **-а** → **-е**." },
            { ru: "на ку́хн{е}", es: "en la cocina", por: "ку́хня: **-я** → **-е**." },
            { ru: "в письм{е́}", es: "en la carta", por: "письмо́: **-о** → **-е**." },
            { ru: "в рестора́н{е}", es: "en el restaurante", por: "Termina en consonante: se agrega **-е**." }],
          destacado: "-а, -я, -о, -й → -е · consonante → + -е",
          mas: { titulo: "Cómo suena la в", texto: "La в se pronuncia pegada a la palabra que sigue, como si fueran una sola: в до́ме suena «vdóme». Y delante de una consonante sorda, como **п**, **т**, **к**, **ш** o **с**, la в suena **ф**: в па́рке suena «fpárke», в шко́ле suena «fshkóle». La escritura no cambia: solo el sonido.",
            ejemplos: [{ ru: "{в} па́рке", es: "en el parque", por: "Suena «fpárke»: la **в** se dice **ф** delante de **п**." }] },
          chequeo: [{ pide: "рестора́н → в ___", opciones: ["рестора́не", "рестора́на", "рестора́н"], ok: "рестора́не", por: "Consonante: se agrega **-е**." }] },
        { id: "u6-prep-ii", titulo: "-ия, -ие y la -ь femenina",
          texto: "Las palabras que terminan en **-ия** o **-ие** hacen **-ии**. Y las femeninas que terminan en **-ь** hacen **-и**.",
          ejemplos: [
            { ru: "на ста́нци{и}", es: "en la estación", por: "ста́нция: **-ия** → **-ии**." },
            { ru: "в Росси́{и}", es: "en Rusia", por: "**-ия** → **-ии**." },
            { ru: "в зда́ни{и}", es: "en el edificio", por: "зда́ние: **-ие** → **-ии**." },
            { ru: "на крова́т{и}", es: "en la cama", por: "крова́ть es femenina: **-ь** → **-и**." }],
          destacado: "-ия, -ие → -ии · femenina en -ь → -и",
          errores: [{ mal: "в Росси́е", bien: "в {Росси́и}", por: "Con **-ия**, el prepositivo es **-ии**, nunca **-ие**." }],
          mas: { titulo: "¿Y las masculinas en -ь?", texto: "Las masculinas que terminan en **-ь** siguen la regla general: la **-ь** pasa a **-е**. Слова́рь → в словаре́ (en el diccionario). Por eso, con una palabra en **-ь**, primero hay que saber si es femenina o masculina. No se ve en la palabra: tocala y la burbuja te lo dice.",
            ejemplos: [
              { ru: "в тетра́д{и}", es: "en el cuaderno", por: "тетра́дь es femenina: **-и**." },
              { ru: "в словар{е́}", es: "en el diccionario", por: "слова́рь es masculina: **-е**." }] },
          chequeo: [{ pide: "Испа́ния → в ___", opciones: ["Испа́нии", "Испа́ние", "Испа́нию"], ok: "Испа́нии", por: "**-ия** → **-ии**." }] },
        { id: "u6-prep-indecl", titulo: "Las que no cambian",
          texto: "Algunas palabras vienen de otros idiomas y terminan en **-о**, **-е**, **-и** o **-у**: esas no cambian nunca, en ningún caso.",
          ejemplos: [
            { ru: "в кафе́", es: "en el café", por: "кафе́ no cambia." },
            { ru: "в метро́", es: "en el subte", por: "метро́ tampoco." },
            { ru: "в То́кио", es: "en Tokio", por: "То́кио queda igual." }],
          ojo: "Кафе́ y метро́ terminan en **-е** y **-о**, como письмо́, pero no cambian. La diferencia es que vienen de otros idiomas: con la práctica se reconocen enseguida.",
          mas: { texto: "Es el mismo grupo que ya conocés del acusativo: ко́фе, кино́, пальто́ y фо́то tampoco cambiaban. Una palabra que no cambia en un caso no cambia en ninguno.",
            ejemplos: [{ ru: "Мы {в кино́}.", es: "Estamos en el cine.", por: "кино́ no cambia nunca." }] } },
        { id: "u6-prep-acento", titulo: "El acento puede moverse",
          texto: "En algunas palabras, el acento pasa a la terminación: стол → на столе́. La letra que se agrega es la misma **-е**; lo que cambia es dónde suena fuerte.",
          ejemplos: [
            { ru: "на стол{е́}", es: "en la mesa", por: "стол → столе́." },
            { ru: "в словар{е́}", es: "en el diccionario", por: "слова́рь → словаре́." },
            { ru: "на этаж{е́}", es: "en el piso", por: "эта́ж → этаже́." }],
          truco: "Al escribir no hace falta marcar el acento; al leer, escuchá el audio.",
          mas: { texto: "Pasa sobre todo en palabras cortas, de una sílaba, y en algunas que terminan en **-ь** o **-ж**. No hay una regla fija para saber cuáles: se aprenden de oído. Si dudás, tocá la palabra y escuchala." } },
        { id: "u6-prep-u", titulo: "Algunas hacen -у́",
          texto: "Unas pocas palabras masculinas, cuando dicen dónde, no terminan en **-е** sino en **-у́**, con el acento ahí. Son pocas y muy usadas: conviene aprenderlas de memoria.",
          ejemplos: [
            { ru: "в лес{у́}", es: "en el bosque", por: "лес → в лесу́." },
            { ru: "в шкаф{у́}", es: "en el armario", por: "шкаф → в шкафу́." },
            { ru: "в угл{у́}", es: "en el rincón", por: "у́гол → в углу́: además se cae la **о**." }],
          destacado: "в лесу́ · в шкафу́ · в углу́",
          mas: { texto: "Esta **-у́** aparece solo cuando la palabra dice dónde, con в o на. En otros usos del prepositivo, que vas a ver más adelante, vuelve la **-е** de siempre.\nEn esta unidad hay unas diez palabras de este grupo, y cada una se presenta junto con su lugar. Cuando una lleve **-у́**, la vas a ver así, con el acento al final." },
          chequeo: [{ pide: "Где ко́шка? — Ко́шка в ___.", opciones: ["шкафу́", "шка́фе"], ok: "шкафу́", por: "Шкаф es de las que hacen **-у́**." }] }
      ] },
    { id: "u6m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Ciudades, países y naturaleza", resumen: "Я живу́ в Барсело́не.",
      intro: "Las ciudades, los países y los lugares de la naturaleza siguen las mismas reglas. Abajo tenés el mapa: tocá una ciudad para escuchar dónde vive alguien ahí.",
      secciones: [
        { id: "u6-ciudades", titulo: "Ciudades",
          texto: "Las ciudades van siempre con в y siguen la regla de la **-е**.",
          ejemplos: [
            { ru: "в Москв{е́}", es: "en Moscú", por: "Москва́: **-а** → **-е**." },
            { ru: "в Мадри́д{е}", es: "en Madrid", por: "Consonante: + **-е**." },
            { ru: "в То́кио", es: "en Tokio", por: "Viene de otro idioma: no cambia." },
            { ru: "в Афи́н{ах}", es: "en Atenas", por: "Афи́ны es plural: hace **-ах**." }],
          errores: [{ mal: "на Москве́", bien: "{в Москве́}", por: "Las ciudades van siempre con в." }],
          mas: { texto: "En los nombres compuestos cambia solo la última parte: Санкт-Петербу́рг → в Санкт-Петербу́рге, Буэ́нос-А́йрес → в Буэ́нос-А́йресе. Ри́о-де-Жане́йро, en cambio, no cambia: termina en **-о** y viene de otro idioma.",
            ejemplos: [{ ru: "Он живёт в Санкт-Петербу́рг{е}.", es: "Vive en San Petersburgo.", por: "Solo cambia la última parte." }] } },
        { id: "u6-paises", titulo: "Países y regiones",
          texto: "Los países van con в, y muchos terminan en **-ия**: hacen **-ии**.",
          ejemplos: [
            { ru: "в Испа́ни{и}", es: "en España", por: "**-ия** → **-ии**." },
            { ru: "в Ита́ли{и}", es: "en Italia", por: "**-ия** → **-ии**." },
            { ru: "в Аргенти́н{е}", es: "en la Argentina", por: "**-а** → **-е**." }],
          mas: { texto: "Dentro del país, lo mismo: в столи́це (en la capital), в о́бласти (en la región), в прови́нции (en la provincia), в райо́не (en el barrio), в дере́вне (en el pueblo). Los puntos cardinales, en cambio, van con на: на се́вере (en el norte), на за́паде (en el oeste), на восто́ке (en el este). También на ро́дине (en la patria) y на грани́це (en la frontera).",
            ejemplos: [
              { ru: "Мы живём {на се́вере}.", es: "Vivimos en el norte.", por: "Los puntos cardinales van con на." },
              { ru: "Она́ живёт {в о́бласти}.", es: "Vive en la región.", por: "о́бласть es femenina en **-ь**: **-и**." }] },
          chequeo: [{ pide: "Фра́нция → в ___", opciones: ["Фра́нции", "Фра́нцие"], ok: "Фра́нции", por: "**-ия** → **-ии**." }] },
        { id: "u6-vivir", titulo: "¿Dónde vivís?",
          texto: "Con жить («vivir») se dice dónde vive alguien. El lugar va en prepositivo, como siempre.",
          ejemplos: [
            { ru: "Где ты живёшь? — Я живу́ {в Барсело́не}.", es: "¿Dónde vivís? — Vivo en Barcelona.", por: "Барсело́на → Барсело́не." },
            { ru: "Она́ живёт {в дере́вне}.", es: "Vive en un pueblo.", por: "дере́вня: **-я** → **-е**." },
            { ru: "Они́ живу́т {на о́строве}.", es: "Viven en una isla.", por: "о́стров va con на: se está sobre la isla." }],
          destacado: "Я живу́ в Барсело́не.",
          mas: { titulo: "La naturaleza", texto: "Con la naturaleza vale la misma idea: lo que te rodea va con в (в лесу́, в по́ле, в пусты́не, в океа́не) y las superficies y orillas van con на (на о́зере, на реке́, на холме́, на пля́же). Бе́рег es del grupo de **-у́**: на берегу́ (en la orilla).\nНа о́зере y на реке́ quieren decir «en el lago, en el río», a la orilla o en un bote. Para hablar del agua misma, por ejemplo para nadar, se usa в: в реке́.",
            ejemplos: [
              { ru: "Мы {на берегу́}.", es: "Estamos en la orilla.", por: "бе́рег → на берегу́, con **-у́**." },
              { ru: "Дом {в лесу́}.", es: "La casa está en el bosque.", por: "лес → в лесу́." }] } }
      ] },
    { id: "u6m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "La casa", resumen: "Ма́ма на ку́хне. Кни́га на по́лке.",
      intro: "Con las partes de la casa y los muebles ya podés decir dónde está cada persona y cada cosa.",
      secciones: [
        { id: "u6-casa", titulo: "Las partes de la casa",
          texto: "Las partes de la casa siguen la regla de siempre. La mayoría va con в; con на van la cocina, el balcón, la escalera, el techo, la entrada, la casa de campo y la huerta.",
          ejemplos: [
            { ru: "Ма́ма {на ку́хне}.", es: "Mamá está en la cocina.", por: "Ку́хня va con на." },
            { ru: "Па́па {в гараже́}.", es: "Papá está en el garaje.", por: "гара́ж → в гараже́: el acento pasa al final." },
            { ru: "Брат {в саду́}.", es: "Mi hermano está en el jardín.", por: "Сад es del grupo de **-у́**." },
            { ru: "Мы {на да́че}.", es: "Estamos en la casa de campo.", por: "Да́ча va con на." }],
          destacado: "в коридо́ре · на ле́стнице · в саду́ · во дворе́",
          mas: { titulo: "Во дворе́", texto: "Delante de algunas palabras que empiezan con dos consonantes, la в se convierte en **во**, para que se pueda pronunciar: двор → во дворе́ (en el patio). Es solo una cuestión de sonido: la preposición es la misma.",
            ejemplos: [{ ru: "Ко́шка {во дворе́}.", es: "La gata está en el patio.", por: "в + **дв** → во." }] } },
        { id: "u6-donde-cosa", titulo: "Dónde está cada cosa",
          antes: { pide: "Ключ ___ карма́не.", opciones: ["в", "на"], ok: "в", por: "Adentro del bolsillo: в." },
          texto: "Para los muebles y los objetos vale la idea de base: adentro, в; encima o contra una superficie, на. Lo que cuelga de la pared o del techo también va con на.",
          ejemplos: [
            { ru: "Кни́га {на по́лке}.", es: "El libro está en el estante.", por: "Encima: на." },
            { ru: "Молоко́ {в холоди́льнике}.", es: "La leche está en la heladera.", por: "Adentro: в." },
            { ru: "Ко́шка {на полу́}.", es: "La gata está en el piso.", por: "пол → на полу́, del grupo de **-у́**." },
            { ru: "Ла́мпа {на потолке́}.", es: "La lámpara está en el techo.", por: "Colgada de una superficie: на. Se cae la **о**." }],
          errores: [{ mal: "Кни́га в по́лке.", bien: "Кни́га {на по́лке}.", por: "El libro está apoyado encima del estante: на." }],
          mas: { titulo: "Лежа́ть y висе́ть", texto: "En presente el ruso no dice «estar», pero para las cosas hay dos verbos muy comunes que dicen cómo está la cosa: лежа́ть («estar apoyado, acostado») y висе́ть («estar colgado»). Кни́га лежи́т на столе́. Зе́ркало виси́т на стене́ («el espejo está en la pared»). No son obligatorios: Кни́га на столе́ también está bien.\nY para ubicar sin nombrar el lugar: сле́ва (a la izquierda), спра́ва (a la derecha), наверху́ (arriba), внизу́ (abajo). Son como до́ма: van solas, sin preposición.",
            ejemplos: [
              { ru: "Ключ {лежи́т} в карма́не.", es: "La llave está en el bolsillo.", por: "Лежа́ть: está apoyada, no colgada." },
              { ru: "Ла́мпа {спра́ва}.", es: "La lámpara está a la derecha.", por: "Спра́ва va sola, sin preposición." }] },
          chequeo: [{ pide: "Зе́ркало ___ на стене́.", opciones: ["лежи́т", "виси́т"], ok: "виси́т", por: "Está colgado: висе́ть." }] }
      ] },
    { id: "u6m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Ciudad, trabajo y estudio", resumen: "А́нна рабо́тает в о́фисе.",
      intro: "Los lugares de todos los días, para decir dónde estás, dónde trabajás y dónde estudiás.",
      secciones: [
        { id: "u6-lugares", titulo: "Los lugares de la ciudad",
          texto: "Los lugares de la ciudad siguen las mismas reglas, y casi todos van con в. Con на van algunos abiertos y otros de memoria: на ры́нке (en el mercado), на стадио́не, на проспе́кте, на тротуа́ре, на мосту́, на по́чте.",
          ejemplos: [
            { ru: "Мы {в музе́е}.", es: "Estamos en el museo.", por: "музе́й: **-й** → **-е**." },
            { ru: "Она́ {в це́ркви}.", es: "Está en la iglesia.", por: "це́рковь es femenina en **-ь**: **-и**." },
            { ru: "Они́ {на мосту́}.", es: "Están en el puente.", por: "Мост es del grupo de **-у́**." },
            { ru: "Он {на ры́нке}.", es: "Está en el mercado.", por: "Un mercado es abierto: на." }],
          destacado: "в музе́е · в це́ркви · на ры́нке · на мосту́",
          mas: { titulo: "La vocal que se cae", texto: "Algunas palabras pierden la última **о** o **е** al cambiar la terminación: ры́нок → на ры́нке, переу́лок → в переу́лке, дворе́ц → во дворце́. Pasa sobre todo en las que terminan en **-ок** y **-ец**. Al leer no causa problemas; al escribir, fijate en la forma de la palabra.",
            ejemplos: [{ ru: "Кафе́ {в переу́лке}.", es: "El café está en el callejón.", por: "переу́лок → в переу́лке: se cae la **о**." }] } },
        { id: "u6-con-verbos", titulo: "Con los verbos que ya conocés",
          texto: "Con рабо́тать, жить, учи́ться, обе́дать o гуля́ть, el lugar va en prepositivo: el verbo no cambia nada.",
          ejemplos: [
            { ru: "Я рабо́таю {в о́фисе}.", es: "Trabajo en una oficina.", por: "о́фис: + **-е**." },
            { ru: "Она́ у́чится {в институ́те}.", es: "Estudia en el instituto.", por: "институ́т: + **-е**." },
            { ru: "Мы обе́даем {в кофе́йне}.", es: "Almorzamos en el café.", por: "кофе́йня: **-я** → **-е**." },
            { ru: "Он рабо́тает {на заво́де}.", es: "Trabaja en una fábrica.", por: "Заво́д va con на." }],
          destacado: "Я рабо́таю в о́фисе.",
          mas: { titulo: "Trabajo y estudio", texto: "Para el trabajo y el estudio, casi todo va con в: в фи́рме, в кабине́те, в отде́ле, в институ́те, в аудито́рии, в кла́ссе. Pero на заво́де, на фа́брике y на факульте́те. Заво́д y фа́брика son lugares cerrados y van con на: son de las que se aprenden de memoria, como рабо́та.",
            ejemplos: [{ ru: "Ма́ма {на фа́брике}.", es: "Mamá está en la fábrica.", por: "Фа́брика va con на." }] },
          chequeo: [{ pide: "Он рабо́тает ___ фи́рме.", opciones: ["в", "на"], ok: "в", por: "Фи́рма va con в, como casi todos." }] }
      ] },
    { id: "u6m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "¿Dónde estás?", resumen: "— Где ты? — Я до́ма.",
      intro: "Conversaciones cortas para preguntar y decir dónde está alguien. Escuchalas y practicalas.",
      secciones: [
        { id: "u6-cerca-lejos", titulo: "Cerca y lejos",
          texto: "ря́дом (al lado), бли́зко (cerca) y далеко́ (lejos) dicen dónde está algo sin nombrar el lugar. Van solas, como до́ма.",
          ejemplos: [
            { ru: "Банк {ря́дом}.", es: "El banco está al lado.", por: "Va solo, sin preposición." },
            { ru: "Шко́ла {бли́зко}.", es: "La escuela está cerca.", por: "Бли́зко: a poca distancia." },
            { ru: "Метро́ {далеко́}.", es: "El subte está lejos.", por: "Далеко́: lejos." }],
          mas: { texto: "Ря́дом y бли́зко se parecen: ря́дом es «al lado, pegado»; бли́зко, «cerca, a poca distancia». Здесь y тут son lo mismo: «acá».\nCon везде́ («en todas partes») y нигде́ («en ninguna parte») se habla de todos los lugares a la vez. Нигде́ siempre va con не delante del verbo: Я нигде́ не рабо́таю («no trabajo en ningún lado»).",
            ejemplos: [
              { ru: "Он {нигде́ не} рабо́тает.", es: "No trabaja en ningún lado.", por: "Нигде́ + не: las dos negaciones van juntas." },
              { ru: "Ко́шка {везде́}!", es: "¡La gata está en todas partes!", por: "Везде́ va solo, sin preposición." }] } },
        { id: "u6-preguntar-otro", titulo: "Preguntar por otro",
          texto: "Con а («y», «¿y…?») se pregunta por otra persona o cosa: Где ты? — Я в рестора́не. А где А́нна? — Она́ до́ма.",
          ejemplos: [
            { ru: "{А} ма́ма?", es: "¿Y mamá?", por: "А + la persona: se pregunta lo mismo por otro." },
            { ru: "Я на рабо́те. {А} ты?", es: "Estoy en el trabajo. ¿Y vos?", por: "Es la misma а de cuando te presentás." }],
          mas: { titulo: "Los eventos, con на", texto: "Cuando alguien está en un evento o en una actividad, se usa на: на конце́рте (en el concierto), на вы́ставке (en la exposición), на ма́тче (en el partido), на уро́ке (en clase), на ле́кции, на экза́мене, на собра́нии (en la reunión). Es la tendencia de на рабо́те: importa lo que se hace ahí, no el edificio.\nPor eso Я в теа́тре («estoy en el teatro», el edificio), pero Я на спекта́кле («estoy en la función»).",
            ejemplos: [
              { ru: "— Где па́па? — {На конце́рте}.", es: "—¿Dónde está papá? —En el concierto.", por: "Un evento: на." },
              { ru: "А́нна {на ле́кции}.", es: "Ana está en clase.", por: "ле́кция: **-ия** → **-ии**, con на." }] },
          chequeo: [{ pide: "Мы ___ экза́мене.", opciones: ["в", "на"], ok: "на", por: "Un examen es una actividad: на." }] }
      ] },
    { id: "u6m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Ubicación o movimiento", resumen: "в шко́ле (estar) · в шко́лу (ir).",
      intro: "Este es el punto más importante de la unidad: la misma preposición, con dos casos distintos.",
      secciones: [
        { id: "u6-donde-prep", titulo: "Dónde estás: prepositivo",
          texto: "Para decir dónde está alguien, sin moverse, va el prepositivo. Se pregunta con где.",
          ejemplos: [
            { ru: "Я {в шко́ле}.", es: "Estoy en la escuela.", por: "Ubicación: **-е**." },
            { ru: "Я {на рабо́те}.", es: "Estoy en el trabajo.", por: "Ubicación: **-е**." }] },
        { id: "u6-adonde-acc", titulo: "Adónde vas: acusativo",
          antes: { pide: "Я иду́ ___ (a la escuela)", opciones: ["в шко́лу", "в шко́ле"], ok: "в шко́лу", por: "Hay movimiento: acusativo." },
          texto: "Para decir adónde va alguien, después de в o на va el acusativo, el mismo caso de lo que recibe la acción. Se pregunta con куда́ («¿adónde?»).",
          desarmar: { es: "Voy a la escuela.", partes: [
            { txt: "Я", rol: "quién va" },
            { txt: "иду́", rol: "la acción", nota: "Идти́: ir a pie." },
            { txt: "в", rol: "hacia", nota: "La misma в de в шко́ле." },
            { txt: "шко́лу", rol: "adónde", nota: "Acusativo: шко́ла → шко́лу, porque hay movimiento." }] },
          ejemplos: [
            { ru: "Я иду́ {на рабо́ту}.", es: "Voy al trabajo.", por: "рабо́та → рабо́ту." },
            { ru: "Ма́ма идёт {в магази́н}.", es: "Mamá va al negocio.", por: "Магази́н es masculino y es una cosa: en acusativo queda igual." }],
          destacado: "Где? → в шко́ле · Куда́? → в шко́лу",
          errores: [{ mal: "Я иду́ в шко́ле.", bien: "Я иду́ {в шко́лу}.", por: "Con movimiento, acusativo: **-у**." }],
          mas: { texto: "Como en acusativo las palabras masculinas que son cosas no cambian, muchas veces lo único que avisa si es «dónde» o «adónde» es el verbo: Я в па́рке («estoy en el parque») y Я иду́ в парк («voy al parque»). Con las femeninas en **-а** o **-я**, la terminación lo dice sola: в шко́ле / в шко́лу, на ку́хне / на ку́хню. Y las que no cambian, como кафе́ o метро́, quedan iguales en los dos casos.",
            ejemplos: [{ ru: "Я иду́ {в кафе́}.", es: "Voy al café.", por: "Кафе́ no cambia: el verbo dice que hay movimiento." }] } },
        { id: "u6-misma-prep", titulo: "La preposición no cambia",
          texto: "Lo que va con на, va con на también en movimiento; lo que va con в, sigue con в. Cambia el caso, nunca la preposición.",
          ejemplos: [
            { ru: "на рабо́те → {на рабо́ту}", es: "en el trabajo → al trabajo", por: "Sigue con на." },
            { ru: "на у́лице → {на у́лицу}", es: "en la calle → a la calle", por: "Sigue con на." },
            { ru: "в лесу́ → {в лес}", es: "en el bosque → al bosque", por: "Sigue con в; la **-у́** es solo para «dónde»." }],
          comparacion: "«estoy **en** la escuela», pero «voy **a** la escuela»: el español cambia la preposición. El ruso deja la misma (в шко́ле, в шко́лу) y cambia la terminación.",
          truco: "¿Estás? → prepositivo. ¿Vas? → acusativo. La preposición, igual.",
          chequeo: [{ pide: "Я иду́ ___ у́лицу.", opciones: ["в", "на"], ok: "на", por: "У́лица va con на, también en movimiento." }] }
      ] },
    { id: "u6m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Ir: a pie o en vehículo", resumen: "идти́ / е́хать · ходи́ть / е́здить.",
      intro: "El ruso tiene varios verbos para «ir». Por ahora, alcanza con dos preguntas: ¿a pie o en vehículo? ¿ahora o seguido?",
      secciones: [
        { id: "u6-pie-vehiculo", titulo: "A pie o en vehículo",
          texto: "идти́ es ir a pie; е́хать es ir en un vehículo: auto, colectivo, tren, barco o avión.",
          ejemplos: [
            { ru: "Я {иду́} в магази́н.", es: "Voy al negocio.", por: "A pie: идти́." },
            { ru: "Мы {е́дем} в Мадри́д.", es: "Vamos a Madrid.", por: "A otra ciudad, en vehículo: е́хать." },
            { ru: "Они́ {е́дут} в аэропо́рт.", es: "Van al aeropuerto.", por: "En auto o en colectivo: е́хать." }],
          mas: { titulo: "Los lugares del viaje", texto: "Si la distancia es larga, otra ciudad u otro país, es casi seguro е́хать. Dentro del barrio, lo normal es идти́.\nLos lugares del viaje siguen las mismas reglas: на вокза́ле (en la estación de tren), на платфо́рме (en el andén), в ваго́не, в ка́ссе (en la boletería), на корабле́ (en el barco) pero в ло́дке (en el bote). Аэропо́рт y порт son del grupo de **-у́**: в аэропорту́, в порту́.",
            ejemplos: [{ ru: "Мы {в аэропорту́}.", es: "Estamos en el aeropuerto.", por: "аэропо́рт → в аэропорту́, con **-у́**." }] } },
        { id: "u6-ahora-seguido", titulo: "Ahora o seguido",
          texto: "Para algo que pasa ahora, o un viaje concreto: идти́ / е́хать. Para lo habitual, lo que se hace seguido: ходи́ть / е́здить. Palabras como ча́сто, всегда́ o иногда́ avisan que es habitual.",
          ejemplos: [
            { ru: "Сейча́с я {иду́} в кафе́.", es: "Ahora voy al café.", por: "Ahora: идти́." },
            { ru: "Я ча́сто {хожу́} в кафе́.", es: "Voy seguido al café.", por: "Habitual: ходи́ть." },
            { ru: "Она́ всегда́ {е́здит} на рабо́ту.", es: "Siempre va al trabajo (en vehículo).", por: "Habitual y en vehículo: е́здить." }],
          destacado: "сейча́с → иду́ / е́ду · ча́сто → хожу́ / е́зжу",
          errores: [{ mal: "Сейча́с я хожу́ в кафе́.", bien: "Сейча́с я {иду́} в кафе́.", por: "Сейча́с habla de ahora: идти́." }],
          mas: { texto: "Fijate en las formas de {я}: хожу́ (con **ж**) y е́зжу (con **зж**). Las demás personas no tienen ese cambio: ты хо́дишь, он хо́дит; ты е́здишь, он е́здит.\nХоди́ть y е́здить también se usan para lo que se hace como costumbre, aunque no se diga cada cuánto: Я хожу́ в бассе́йн quiere decir «voy a la pileta», de manera habitual.",
            ejemplos: [{ ru: "Ты ча́сто {хо́дишь} в бассе́йн?", es: "¿Vas seguido a la pileta?", por: "ты → хо́дишь, sin **ж**." }] },
          chequeo: [{ pide: "Я ча́сто ___ в теа́тр.", opciones: ["иду́", "хожу́"], ok: "хожу́", por: "Ча́сто: habitual, ходи́ть." }] }
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
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (08/10/2026): también por, comparación, ojo, «Más a fondo» y las preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u6Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u6Palabras(o.por); if (o && o.pide) o.pide = u6Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u6Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u6Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad6Modulo(id) { return UNIDAD_6.modulos.find(m => m.id === id) || null; }

const U6_MEZCLA = { donde: 1, prepo: 2, term: 2, "term-elegir": 1, completar: 2, cambia: 1, emparejar: 1, "es-ru": 3, dictado: 3, escena: 2, detectar: 1, corregir: 1,
  construir: 2, dialogo: 2, clasificar: 1, "ubic-mov": 2, "donde-adonde": 1, "a-pie": 1, habitual: 1, conjugar: 1, "conjugar-escribir": 2, lectura: 2, "lectura-vf": 1, significado: 1, "palabra-es-ru": 1,
  /* Tipos nuevos (10/10/2026): entender la regla, ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1, desarmar: 1 };

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
    /* в лесу́, на мосту́ (07/10/2026): si Casos tiene la forma en -у́ (loc2), es la que va con в / на */
    if (cz.loc2) return { nom: cz.sg[0], acc: cz.sg[3], prep: cz.loc2.replace(/^(в|во|на) /, ""), loc2: true, adjetival: !!cz.adjetival };
    return { nom: cz.sg[0], acc: cz.sg[3], prep: cz.sg[5], adjetival: !!cz.adjetival };
  };
  const lug = {};
  Object.keys(U6_LUGARES).forEach(ru => {
    const e = lex(ru, "sustantivo"), f = e && formas(e); if (!f) return;
    const x = U6_LUGARES[ru];
    const obj = typeof x[6] === "string" && x[6].charAt(0) === "o";   /* mueble u objeto: solo «dónde» */
    lug[sin(ru)] = Object.assign({ id: e.id, ac: e.acento, es: x[0], en: x[1], a: x[2], pr: x[3], emoji: x[4], va: x[5], g: e.gender, tipo: obj ? "sobre" : "lugar",
      desde: amp[sin(ru)] || (obj ? +x[6].slice(1) : x[6]) || desde[sin(ru)] || 2, amp: amp[sin(ru)] || 0 }, f);
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
  else if (s.loc2) r = "es una de las pocas palabras masculinas que, después de в o на, terminan en -у́ (con el acento ahí)";
  else if (fin2 === "ия") r = "termina en -ия: hace -ии";
  else if (fin2 === "ие") r = "termina en -ие: hace -ии";
  else if (fin === "ь" && s.g === "f") r = "es femenina en -ь: hace -и";
  else if (fin === "ь") r = "termina en -ь: pasa a -е";
  else if (fin === "о") r = "termina en -о: pasa a -е";
  else if (fin === "е") r = "termina en -е: queda igual";
  else if (fin === "а") r = "termina en -а: pasa a -е";
  else if (fin === "я") r = "termina en -я: pasa a -е";
  else if (fin === "й") r = "termina en -й: pasa a -е";
  else r = "termina en consonante: se agrega -е";
  const por = s.tipo === "sobre" ? (s.pr === "на" ? " Va con на porque está «sobre» o «contra» eso." : " Va con в porque está adentro.") : s.pr === "на" ? " Va con на: es de las que se aprenden con на." : s.pr === "во" ? " Delante de **дв-** la в se dice во." : "";
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
  const objetos = Object.values(lug).filter(s => s.tipo === "sobre" && s.ac !== "стол");   /* muebles y objetos (07/10/2026): solo «dónde» */
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
  lugares.concat([lug["стол"]], objetos).filter(Boolean).forEach((s, j) => {
    if (s.amp) return;
    out.push({ id: "U6-pr-" + s.id, tipo: "prepo", forma: "elegir", dificultad: 1, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Completá: «" + s.en + "»", grande: "_____ " + s.prep, opciones: [s.pr === "во" ? "во" : "в", "на"], correcta: s.pr,
      explicacion: "**" + s.pr + " " + s.prep + "**: " + (s.tipo === "sobre" ? (s.pr === "на" ? "на, porque está encima o contra la superficie." : "в, porque está adentro.") : s.desde === 7 ? "на: es un evento o una actividad." : s.pr === "на" ? "va con на: es de los lugares que se aprenden con на." : s.pr === "во" ? "во: delante de **дв-**, la в se dice во." : "в: un lugar con límites, que te rodea.") });
    const exp = "**" + s.pr + " " + s.prep + "** = " + s.en + (s.pr === "на" && s.tipo !== "sobre" ? ". Va con на, de memoria." : ".");
    if (j % 2 === 0) out.push({ id: "U6-pres-" + s.id, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Escribí en ruso: «" + s.en + "»", audio: s.pr + " " + s.prep, audioManual: true, esperadas: [s.pr + " " + s.prep], idioma: "ru", explicacion: exp });
    else out.push({ id: "U6-prdic-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 2, grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + s.prep,
      pide: "Escuchá y escribí.", audio: s.pr + " " + s.prep, esperadas: [s.pr + " " + s.prep], idioma: "ru", explicacion: exp });
  });

  /* ── Módulo 3 (lugares), 4 (ciudades y países), 5 (casa) y 6 (lugares): el prepositivo ── */
  const casa = ["кварти́ра", "ко́мната", "ку́хня", "спа́льня", "балко́н"].map(x => sin(x));
  const conMod = s => s.tipo === "ciudad" || s.tipo === "pais" ? 4 : s.amp ? s.amp : Math.max(3, s.desde);
  lugares.concat(geos, objetos).forEach((s, j) => {
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
  [[3, lugares.filter(s => !s.amp && !s.indecl && s.desde <= 3)], [4, geos.filter(s => !s.indecl)]].concat([4, 5, 6, 7, 9].map(m => [m, lugares.concat(objetos).filter(s => !s.amp && !s.indecl && s.desde === m), "n"])).forEach(([m, l, nv]) => {
    for (let j = 0; j + 4 <= l.length; j += 4) { const g = l.slice(j, j + 4);
      out.push({ id: "U6-emp-" + m + (nv || "") + "-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: m, grupo: "E-" + m + "-" + j, items: g.map(s => "lex:" + s.id),
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
  conFrases(lugares.filter(s => !s.amp && s.tipo === "lugar" && casa.indexOf(sin(s.nom)) < 0 && s.desde <= 3), 3, null, 0);
  /* Vocabulario nuevo (07/10/2026): cada lugar, en su módulo; en los de trabajo, «trabajo en…» */
  const TRABAJO6 = "заво́д фа́брика фи́рма кабине́т отде́л институ́т больни́ца библиоте́ка апте́ка музе́й теа́тр по́чта гости́ница оте́ль".split(" ").map(sin);
  conFrases(lugares.filter(s => !s.amp && s.desde === 4), 4, null, 3);
  conFrases(lugares.filter(s => !s.amp && s.desde === 5), 5, null, 4);
  conFrases(lugares.filter(s => !s.amp && s.desde === 6 && TRABAJO6.indexOf(sin(s.nom)) < 0), 6, null, 5);
  conFrases(lugares.filter(s => !s.amp && s.desde === 6 && TRABAJO6.indexOf(sin(s.nom)) >= 0), 6, "рабо́тать", 6);
  conFrases(lugares.filter(s => !s.amp && s.desde === 7), 7, null, 7);
  conFrases(lugares.filter(s => !s.amp && s.desde === 9), 9, null, 8);
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
  /* Muebles y objetos (07/10/2026): Телефо́н на дива́не. */
  const cosasL = Object.values(cosas);
  /* Una cosa que tenga sentido en cada lugar (en el techo o en la heladera, no) */
  const COSA_EN = { "дива́н": "ко́шка", "кре́сло": "кот", "по́лка": "кни́га", "пол": "су́мка", "ковёр": "кот", "карма́н": "телефо́н", "я́щик": "ру́чка", "коро́бка": "ко́шка", "шкаф": "су́мка", "у́гол": "кот" };
  objetos.forEach((s, j) => {
    if (!COSA_EN[s.ac]) return;
    const o = cosas[sin(COSA_EN[s.ac])], ru = cap(o.ac) + " " + s.pr + " " + s.prep + ".", q = "Где " + o.ac + "?";
    const es = cap((/^(gata|cartera|lapicera|computadora)$/.test(o.es) ? "la " : "el ") + o.es) + " está " + s.en + ".";   /* el género del español, no el del ruso (кни́га → el libro) */
    const base = { grupo: "SO-" + s.id, items: ["lex:" + o.id, "lex:" + s.id], oir: ru };
    out.push(Object.assign({ id: "U6-esco-" + s.id, tipo: "escena", forma: "escribir", dificultad: 2, modulo: Math.max(5, s.desde), contexto: [{ p: "—", ru: q }], pide: "Mirá el dibujo y contestá en ruso.",
      grande: o.emoji + "  →  " + s.emoji + "  " + s.es, audio: q, audioManual: true, esperadas: [ru, cap(s.pr) + " " + s.prep + "."], idioma: "ru", explicacion: "— " + q + " — " + ru + " " + u6Regla(s) }, base));
    out.push(Object.assign({ id: "U6-escod-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: Math.max(5, s.desde), pide: "Escuchá y escribí la frase.", audio: ru, esperadas: [ru], idioma: "ru",
      explicacion: ru + " — " + es + " " + u6Regla(s) }, base));
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
  const mov = lugares.filter(s => !s.amp && ["рестора́н", "магази́н", "рабо́та", "парк", "кафе́", "банк", "шко́ла", "у́лица", "о́фис", "университе́т"].map(sin).indexOf(sin(s.nom)) >= 0)
    /* Vocabulario nuevo (07/10/2026): los lugares de la ciudad, la casa y los eventos, uno de cada dos */
    .concat(lugares.filter(s => !s.amp && [5, 6, 7].indexOf(s.desde) >= 0 && s.a).filter((s, k) => k % 2 === 0));
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
  /* Vocabulario nuevo (07/10/2026): ¿a pie o en vehículo?, según el lugar */
  lugares.filter(s => !s.amp && s.desde >= 4 && s.va && s.a).forEach((s, j) => {
    if (j % 2) return;
    const vk = s.va, v = verb[sin(vk)], w = verb[sin(vk === "идти́" ? "е́хать" : "идти́")]; if (!v || !w) return;
    const sj = U6_SUJ[[0, 2, 3, 4, 1, 6][j % 6]], p = sj[2];
    const ru = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.acc + ".", es = cap((sj[1] ? sj[1] + " " : "") + U6_IR[p] + " " + s.a) + ".";
    out.push({ id: "U6-pien-" + s.id, tipo: "a-pie", forma: "elegir", dificultad: 2, modulo: 9, grupo: "APN-" + s.id, items: ["lex:" + v.id, "lex:" + s.id], oir: ru, pide: (vk === "идти́" ? "🚶" : "🚗") + " " + es + " ¿Qué verbo va?",
      grande: sj[0] + " _____ " + s.pr + " " + s.acc + ".", opciones: baraja([v.f[p], w.f[p]], j), correcta: v.f[p],
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
  const dicEs = { "куда́": "adónde", "здесь": "acá", "ря́дом": "cerca, al lado", "далеко́": "lejos", "е́хать": "ir (en vehículo)", "ходи́ть": "ir a pie (seguido)", "е́здить": "ir en vehículo (seguido)",
    "па́мятник": "monumento", "ба́шня": "torre", "светофо́р": "semáforo", "зе́ркало": "espejo", "пруд": "estanque", "лежа́ть": "estar acostado, estar (apoyado)", "висе́ть": "estar colgado",
    "сле́ва": "a la izquierda", "спра́ва": "a la derecha", "наверху́": "arriba", "внизу́": "abajo", "везде́": "en todas partes", "нигде́": "en ningún lado", "бли́зко": "cerca" };
  const modDe = e => { const s = lug[sin(e.acento)]; if (s) return s.amp || (s.desde > 2 ? s.desde : casa.indexOf(sin(s.nom)) >= 0 ? 5 : 6);
    const k = Object.keys(U6_VISTAS).find(m => U6_VISTAS[m].split(" ").map(sin).indexOf(sin(e.acento)) >= 0); return k ? Math.max(+k, 2) : 9; };
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
  /* ── Tipos nuevos (10/10/2026): entender la regla, ~20 % de la sesión ──
     porque · natural · oido · cadena · diagnostico · descubrir · par · desarmar.
     Todos llevan «regla» (el id de la sección de teoría que practican). */
  const sinAc = t => t.replace(/́/g, "");
  const reglaPrep = s => {
    const n = sinAc(s.nom);
    if (s.indecl) return "u6-prep-indecl";
    if (s.loc2) return "u6-prep-u";
    if (/и[яе]$/.test(n) || (/ь$/.test(n) && s.g === "f")) return "u6-prep-ii";
    if (s.tipo === "ciudad") return "u6-ciudades";
    if (s.tipo === "pais") return "u6-paises";
    const pos = w => { const i = w.indexOf("́"); return i < 0 ? -1 : (w.slice(0, i).match(/[аеёиоуыэюя]/gi) || []).length; };
    if (s.nom !== s.prep && pos(s.nom) >= 0 && pos(s.prep) >= 0 && pos(s.nom) !== pos(s.prep)) return "u6-prep-acento";
    return "u6-prep-e";
  };
  const reglaPr = s => s.tipo === "sobre" ? (s.pr === "на" ? "u6-na" : "u6-v") : s.tipo === "ciudad" ? "u6-ciudades" : s.tipo === "pais" ? "u6-paises" : s.pr === "на" ? "u6-na-lista" : "u6-v";
  const porQueNa = s => s.tipo === "sobre" ? (s.pr === "на" ? "Está encima o contra una superficie" : "Está adentro") : s.desde === 7 ? "Es un evento o una actividad" : s.pr === "на" ? "Es de los lugares que van con на" : "Es un lugar con límites, que te rodea";
  const POR_PR = ["Está encima o contra una superficie", "Está adentro", "Es un evento o una actividad", "Es de los lugares que van con на", "Es un lugar con límites, que te rodea"];
  const porQueTerm = s => {
    const n = sinAc(s.nom), f = n.slice(-1);
    if (s.indecl) return "Viene de otro idioma: no cambia";
    if (s.loc2) return "Es de las pocas que hacen -у́";
    if (/и[яе]$/.test(n)) return "Termina en -ия o -ие: hace -ии";
    if (f === "ь" && s.g === "f") return "Es femenina en -ь: hace -и";
    if (/[аяйоь]/.test(f)) return "La última letra pasa a -е";
    return "Termina en consonante: se agrega -е";
  };
  const POR_TERM = ["Viene de otro idioma: no cambia", "Es de las pocas que hacen -у́", "Termina en -ия o -ие: hace -ии", "Es femenina en -ь: hace -и", "La última letra pasa a -е", "Termina en consonante: se agrega -е"];
  const baseLug = lugares.filter(s => !s.amp && !s.plural && !s.adjetival);

  /* ¿Por qué? La terminación y la preposición */
  baseLug.concat(geos.filter(s => !s.plural), objetos).forEach((s, j) => {
    const ok = porQueTerm(s), otras = baraja(POR_TERM.filter(x => x !== ok), j).slice(0, 2);
    if (j % 2 === 0) out.push({ id: "U6-porq-" + s.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: conMod(s), regla: reglaPrep(s), grupo: "T-" + s.id, items: ["lex:" + s.id],
      oir: s.pr + " " + s.prep, pide: "¿Por qué queda así?", grande: s.nom + " → " + s.pr + " " + s.prep, audio: s.pr + " " + s.prep, audioManual: true,
      opciones: baraja([ok].concat(otras), j + 1), correcta: ok, explicacion: u6Regla(s) });
    if (s.tipo === "ciudad" || s.tipo === "pais" || s.pr === "во" || (s.pr !== "на" && j % 3)) return;
    const okP = porQueNa(s), otrasP = baraja(POR_PR.filter(x => x !== okP && !(s.tipo === "sobre" ? /lugares|evento|límites/ : /superficie|Está adentro/).test(x)), j).slice(0, 1)
      .concat(s.tipo === "sobre" ? [] : [s.pr === "на" ? "Es un lugar con límites, que te rodea" : "Está encima o contra una superficie"]);
    out.push({ id: "U6-porqp-" + s.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: Math.max(2, s.desde), regla: reglaPr(s), grupo: "PR-" + s.id, items: ["lex:" + s.id],
      oir: s.pr + " " + s.prep, pide: "¿Por qué va con " + s.pr + "?", grande: s.pr + " " + s.prep, audio: s.pr + " " + s.prep, audioManual: true,
      opciones: baraja(uniq([okP].concat(otrasP)), j + 2), correcta: okP, explicacion: "**" + s.pr + " " + s.prep + "** = " + s.en + ". " + okP + "." });
  });

  /* ¿Suena natural? Errores típicos, siempre en ruso */
  /* a) до́ma no lleva preposición */
  U6_SUJ.slice(0, 7).forEach((sj, j) => {
    const bien = sj[0] + " до́ма.", mal = sj[0] + " в до́ма.";
    out.push({ id: "U6-nat-doma-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 1, regla: "u6-sin-prep", grupo: "NDM-" + j, items: [], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " До́ма ya quiere decir «en casa»: no lleva preposición." });
  });
  /* b) Con movimiento, acusativo; sin movimiento, prepositivo */
  mov.forEach((s, j) => {
    if (s.prep === s.acc) return;
    const sj = U6_SUJ[[0, 2, 3, 4, 6, 1][j % 6]], v = verb[sin("идти́")], p = sj[2];
    const bien = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.acc + ".", mal = sj[0] + " " + v.f[p] + " " + s.pr + " " + s.prep + ".";
    out.push({ id: "U6-nat-mov-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u6-adonde-acc", grupo: "M-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " " + u6ReglaMov(s) });
  });
  /* c) Los lugares con на no van con в */
  const FIRMES_NA = "рабо́та у́лица ста́нция по́чта вокза́л ры́нок стадио́н заво́д фа́брика факульте́т конце́рт вы́ставка спекта́кль матч фестива́ль уро́к ле́кция экза́мен семина́р собра́ние совеща́ние конфере́нция се́вер восто́к за́пад да́ча".split(" ").map(sin);
  baseLug.filter(s => s.pr === "на" && FIRMES_NA.indexOf(sin(s.nom)) >= 0).forEach((s, j) => {
    const sj = U6_SUJ[[0, 3, 2, 6, 4][j % 5]], bien = sj[0] + " на " + s.prep + ".", mal = sj[0] + " в " + s.prep + ".";
    out.push({ id: "U6-nat-na-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: Math.max(2, s.desde), regla: "u6-na-lista", grupo: "PR-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " " + porQueNa(s) + ": va con на." });
  });
  /* d) Ahora: идти́ / е́хать, no ходи́ть / е́здить */
  [["кафе́", "идти́"], ["парк", "идти́"], ["магази́н", "идти́"], ["шко́ла", "идти́"], ["рабо́та", "е́хать"], ["университе́т", "е́хать"], ["Мадри́д", "е́хать"], ["бассе́йн", "идти́"]].forEach(([dest, vk], j) => {
    const s = lug[sin(dest)] || geo[sin(dest)]; if (!s) return;
    const sj = U6_SUJ[[0, 2, 3, 6][j % 4]], p = sj[2], v = verb[sin(vk)], w = verb[sin(vk === "идти́" ? "ходи́ть" : "е́здить")];
    const bien = "Сейча́с " + sj[0].toLowerCase().replace(/^я$/, "я") + " " + v.f[p] + " " + s.pr + " " + s.acc + ".", mal = "Сейча́с " + sj[0].toLowerCase() + " " + w.f[p] + " " + s.pr + " " + s.acc + ".";
    out.push({ id: "U6-nat-ahora-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u6-ahora-seguido", grupo: "NA9-" + j, items: ["lex:" + v.id, "lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " Сейча́с habla de ahora: " + v.ac + ", no " + w.ac + "." });
  });
  /* e) нигде́ siempre con не */
  U6_SUJ.slice(0, 7).forEach((sj, j) => {
    const v = verb[sin(j % 2 ? "жить" : "рабо́тать")], p = sj[2];
    const bien = sj[0] + " нигде́ не " + v.f[p] + ".", mal = sj[0] + " нигде́ " + v.f[p] + ".";
    out.push({ id: "U6-nat-nig-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u6-cerca-lejos", grupo: "NNG-" + j, items: ["lex:" + v.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j + 1), correcta: bien, explicacion: bien + " Нигде́ va siempre con не delante del verbo." });
  });
  /* f) Las de -у́: no hacen -е */
  baseLug.concat(objetos).filter(s => s.loc2 && sin(s.nom) !== "пол").forEach((s, j) => {
    const cz = casosById(s.id), malF = cz && cz.sg && cz.sg[5]; if (!malF || sinAc(malF) === sinAc(s.prep)) return;
    const sj = s.tipo === "sobre" ? ["Ко́шка"] : U6_SUJ[[3, 0, 6, 2][j % 4]];
    const bien = sj[0] + " " + s.pr + " " + s.prep + ".", mal = sj[0] + " " + s.pr + " " + malF + ".";
    out.push({ id: "U6-nat-u-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: conMod(s), regla: "u6-prep-u", grupo: "T-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], j), correcta: bien, explicacion: bien + " " + u6Regla(s) });
  });
  /* g) -ия → -ии, nunca -ие */
  baseLug.concat(geos).filter(s => /ия$/.test(sinAc(s.nom))).forEach((s, j) => {
    const mal = s.prep.replace(/и$/, "е"); if (mal === s.prep) return;
    const sj = s.tipo === "pais" ? ["Мы живём"] : U6_SUJ[[0, 3, 2, 6][j % 4]];
    const bien = sj[0] + " " + s.pr + " " + s.prep + ".", malF = sj[0] + " " + s.pr + " " + mal + ".";
    out.push({ id: "U6-nat-ii-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: conMod(s), regla: "u6-prep-ii", grupo: "T-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, malF], j + 1), correcta: bien, explicacion: bien + " " + u6Regla(s) });
  });

  /* Oído: ¿dónde está o adónde va? -е o -у casi no se distinguen sin acento */
  mov.filter(s => s.prep !== s.acc).forEach((s, j) => {
    const loc = j % 2 === 0, ok = s.pr + " " + (loc ? s.prep : s.acc);
    out.push({ id: "U6-oido-" + s.id, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 8, regla: loc ? "u6-donde-prep" : "u6-adonde-acc", grupo: "M-" + s.id, items: ["lex:" + s.id], oir: ok,
      pide: "Escuchá: ¿qué forma sonó?", audio: ok, opciones: baraja([s.pr + " " + s.prep, s.pr + " " + s.acc], j), correcta: ok,
      explicacion: "Sonó **" + ok + "**: " + (loc ? "dónde está, prepositivo (" + s.en + ")." : "adónde va, acusativo (" + s.a + ").") });
  });
  /* Oído: ¿иду́ o е́ду, хожу́ o е́зжу? */
  [["идти́", "е́хать"], ["ходи́ть", "е́здить"]].forEach(([a, b], k) => [0, 1, 2, 3, 5].forEach((p, j) => {
    const va = verb[sin(a)], vb = verb[sin(b)], esA = (j + k) % 2 === 0, v = esA ? va : vb, ok = v.f[p];
    out.push({ id: "U6-oidov-" + k + "-" + p, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 9, regla: k ? "u6-ahora-seguido" : "u6-pie-vehiculo", grupo: v.id + "-" + p, items: ["lex:" + v.id], oir: ok,
      pide: "Escuchá: ¿qué forma sonó?", audio: ok, opciones: baraja([va.f[p], vb.f[p]], j + k), correcta: ok,
      explicacion: "Sonó **" + ok + "**, de " + v.ac + ": " + { "идти́": "ir a pie", "е́хать": "ir en vehículo", "ходи́ть": "ir a pie, seguido", "е́здить": "ir en vehículo, seguido" }[v.ac] + "." });
  }));

  /* Cadena: estoy ahí → voy → voy seguido → y vos? */
  mov.forEach((s, j) => {
    if (j % 2) return;
    const vi = verb[sin("идти́")], vh = verb[sin("ходи́ть")];
    const s0 = "Я " + s.pr + " " + s.prep + ".", s1 = "Я " + vi.f[0] + " " + s.pr + " " + s.acc + ".", s2 = "Я ча́сто " + vh.f[0] + " " + s.pr + " " + s.acc + ".", s3 = "Ты ча́сто " + vh.f[1] + " " + s.pr + " " + s.acc + "?";
    out.push({ id: "U6-cad-" + s.id, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 9, regla: "u6-adonde-acc", grupo: "C6-" + s.id, items: ["lex:" + s.id, "lex:" + vh.id], oir: s3,
      pide: "Cambiá la frase paso a paso.", base: s0,
      pasos: [
        { pide: "Ahora decí que vas ahí, a pie.", esperadas: [s1, cap(vi.f[0]) + " " + s.pr + " " + s.acc + "."] },
        { pide: "Ahora vas seguido (ча́сто).", esperadas: [s2, "Ча́сто " + vh.f[0] + " " + s.pr + " " + s.acc + "."] },
        { pide: "Ahora preguntale a un amigo si él va seguido.", esperadas: [s3, "Ты ча́сто " + vh.f[1] + " " + s.pr + " " + s.acc + ".", "Ча́сто " + vh.f[1] + " " + s.pr + " " + s.acc + "?"] }],
      explicacion: s0 + " → " + s1 + " → " + s2 + " → " + s3 + " Con movimiento, acusativo (" + s.acc + "); lo habitual, con ходи́ть." });
  });
  /* Cadena: estoy ahí → trabajo ahí → y ella? */
  baseLug.filter(s => s.desde === 6 && TRABAJO6.indexOf(sin(s.nom)) >= 0).concat(["о́фис", "банк", "шко́ла", "магази́н", "рестора́н"].map(x => lug[sin(x)])).filter(Boolean).forEach((s, j) => {
    const v = verb[sin("рабо́тать")];
    const s0 = "Я " + s.pr + " " + s.prep + ".", s1 = "Я " + v.f[0] + " " + s.pr + " " + s.prep + ".", s2 = "Ты " + v.f[1] + " " + s.pr + " " + s.prep + "?", s3 = "Она́ " + v.f[2] + " " + s.pr + " " + s.prep + ".";
    out.push({ id: "U6-cadt-" + s.id, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: Math.max(6, s.desde), regla: "u6-con-verbos", grupo: "CT-" + s.id, items: ["lex:" + s.id, "lex:" + v.id], oir: s3,
      pide: "Cambiá la frase paso a paso.", base: s0,
      pasos: [
        { pide: "Ahora decí que trabajás ahí.", esperadas: [s1, cap(v.f[0]) + " " + s.pr + " " + s.prep + "."] },
        { pide: "Preguntale a un amigo si trabaja ahí.", esperadas: [s2, cap(v.f[1]) + " " + s.pr + " " + s.prep + "?", "Ты " + v.f[1] + " " + s.pr + " " + s.prep + "."] },
        { pide: "Ahora contá que ella trabaja ahí.", esperadas: [s3] }],
      explicacion: s0 + " → " + s1 + " → " + s2 + " → " + s3 + " Cambia el verbo; el lugar queda igual: " + s.pr + " " + s.prep + "." });
  });

  /* Diagnosticar: qué falla y escribirla bien */
  const FALLAS6 = ["La preposición", "La terminación del lugar", "El verbo"];
  baseLug.filter(s => s.desde >= 3 && !s.indecl && s.nom !== s.prep).forEach((s, j) => {
    if (j % 3) return;
    const sj = U6_SUJ[[0, 2, 3, 6, 4][j % 5]], bien = sj[0] + " " + s.pr + " " + s.prep + ".";
    const firmeNa = s.pr === "на" && FIRMES_NA.indexOf(sin(s.nom)) >= 0, k = Math.floor(j / 3) % 2;
    const mal = k === 0 && firmeNa ? sj[0] + " в " + s.prep + "." : sj[0] + " " + s.pr + " " + s.nom + ".";
    const ok = k === 0 && firmeNa ? FALLAS6[0] : FALLAS6[1];
    out.push({ id: "U6-diag-" + s.id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: conMod(s), regla: ok === FALLAS6[0] ? "u6-na-lista" : reglaPrep(s), grupo: "T-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "La frase dice dónde está alguien y tiene un error. ¿Qué falla?", grande: mal, opciones: FALLAS6.slice(), correcta: ok, esperadas: [bien],
      explicacion: bien + " " + (ok === FALLAS6[0] ? porQueNa(s) + ": va con на." : u6Regla(s)) });
  });
  [["кафе́", "ча́сто"], ["парк", "всегда́"], ["рестора́н", "иногда́"], ["бассе́йн", "ча́сто"], ["библиоте́ка", "всегда́"], ["кинотеа́тр", "иногда́"]].forEach(([dest, adv], j) => {
    const s = lug[sin(dest)]; if (!s) return;
    const sj = U6_SUJ[[0, 2, 3, 6][j % 4]], p = sj[2], vh = verb[sin("ходи́ть")], vi = verb[sin("идти́")];
    const bien = sj[0] + " " + adv + " " + vh.f[p] + " " + s.pr + " " + s.acc + ".", mal = sj[0] + " " + adv + " " + vi.f[p] + " " + s.pr + " " + s.acc + ".";
    out.push({ id: "U6-diagv-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 9, regla: "u6-ahora-seguido", grupo: "DV-" + j, items: ["lex:" + vh.id, "lex:" + s.id], oir: bien,
      pide: "Esta frase tiene un error. ¿Qué falla?", grande: mal, opciones: FALLAS6.slice(), correcta: FALLAS6[2], esperadas: [bien],
      explicacion: bien + " **" + adv + "**: es algo habitual, así que va ходи́ть, no идти́." });
  });

  /* Descubrir: dos palabras con la misma terminación y una tercera para completar */
  const patron = s => { const n = sinAc(s.nom); if (s.indecl || s.loc2 || s.plural || s.adjetival || s.tipo === "ciudad" || s.tipo === "pais") return null;
    if (/ия$/.test(n)) return "ия"; if (/ие$/.test(n)) return "ие"; if (/ь$/.test(n)) return s.g === "f" ? "ьf" : null; const f = n.slice(-1); return /[ая]/.test(f) ? f : /[бвгджзклмнпрстфхцчшщ]/.test(f) ? "c" : null; };
  const porPatron = {}; baseLug.concat(objetos).forEach(s => { const p = patron(s); if (p) (porPatron[p] = porPatron[p] || []).push(s); });
  Object.keys(porPatron).forEach(p => {
    const l = porPatron[p];
    l.forEach((s, j) => {
      if (p === "c" && j % 3) return;
      const ej = baraja(l.filter(x => x !== s && x.desde <= conMod(s)), j + 3).slice(0, 2); if (ej.length < 2) return;
      const ok = s.prep, n = s.nom;
      const mal = p === "ия" || p === "ие" ? ok.replace(/и$/, "е") : p === "ьf" ? n.replace(/ь$/, "е") : p === "c" ? n + "у" : n.replace(/[ая]$/, x => x === "а" ? "у" : "ю");
      if (sinAc(mal) === sinAc(ok) || (p === "c" && sinAc(ok).indexOf(sinAc(n)) !== 0)) return;
      if (/\u0301/.test(ok) !== /\u0301/.test(mal)) return;
      out.push({ id: "U6-desc-" + s.id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: conMod(s), regla: reglaPrep(s), grupo: "T-" + s.id, items: ["lex:" + s.id], oir: s.pr + " " + ok,
        pide: ej.map(x => x.nom + " → " + x.pr + " " + x.prep).join(" · ") + ". ¿Y " + n + "?", opciones: baraja([ok, mal], j), correcta: ok,
        explicacion: n + " → " + s.pr + " " + ok + ": la misma terminación que " + ej[0].nom + " y " + ej[1].nom + ". " + u6Regla(s) });
    });
  });

  /* Par: ¿adentro o encima? La misma cosa, dos lugares */
  [["кни́га", "коро́бка", 0], ["ко́шка", "коро́бка", 1], ["телефо́н", "я́щик", 0], ["кни́га", "я́щик", 1], ["кот", "шкаф", 1], ["су́мка", "шкаф", 0], ["кни́га", "холоди́льник", 1], ["ко́шка", "холоди́льник", 1]].forEach(([c0, l0, encima], j) => {
    const o = cosas[sin(c0)], s = lug[sin(l0)]; if (!o || !s) return;
    const czL = casosById(s.id), prepNa = s.loc2 ? s.prep : (czL && czL.sg ? czL.sg[5] : s.prep);
    const enc = encima === 1, ok = cap(o.ac) + (enc ? " на " + prepNa : " в " + s.prep) + ".";
    const otra = cap(o.ac) + (enc ? " в " + s.prep : " на " + prepNa) + ".";
    const art = /^(gata|cartera|lapicera|computadora)$/.test(o.es) ? "La " : "El ", lugEs = s.es;
    out.push({ id: "U6-par-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 5, regla: enc ? "u6-na" : "u6-v", grupo: "PV-" + s.id + "-" + j, items: ["lex:" + o.id, "lex:" + s.id], oir: ok,
      pide: art + o.es + " está " + (enc ? "encima " : "adentro ") + (/^(caja|heladera)$/.test(lugEs) ? "de la " : "del ") + lugEs + ". ¿Cuál decís?", opciones: baraja([ok, otra], j), correcta: ok,
      explicacion: ok + " " + (enc ? "Encima: на." : "Adentro: в.") });
  });

  /* Desarmar: tocá las palabras que responden cada pregunta */
  mov.forEach((s, j) => {
    if (j % 2 === 0) return;
    const sj = U6_SUJ[[0, 2, 3, 6][j % 4]], v = verb[sin("идти́")], p = sj[2];
    const palabras = [sj[0], v.f[p], s.pr, s.acc], ru = palabras.join(" ") + ".";
    out.push({ id: "U6-desarm-" + s.id, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 8, regla: "u6-adonde-acc", grupo: "M-" + s.id, items: ["lex:" + s.id, "lex:" + v.id], oir: ru, audio: ru, audioManual: true,
      pide: "Respondé tocando las palabras de la frase.", palabras, preguntas: [{ pide: "¿Quién va?", correcta: 0 }, { pide: "¿Qué palabra dice que va a pie?", correcta: 1 }, { pide: "¿Qué palabra dice adónde va?", correcta: 3 }],
      explicacion: ru + " " + u6ReglaMov(s) });
  });
  baseLug.filter(s => s.desde === 6 && TRABAJO6.indexOf(sin(s.nom)) >= 0).forEach((s, j) => {
    const sj = U6_SUJ[[2, 3, 6, 0][j % 4]], v = verb[sin("рабо́тать")], p = sj[2];
    const palabras = [sj[0], v.f[p], s.pr, s.prep], ru = palabras.join(" ") + ".";
    out.push({ id: "U6-desarmt-" + s.id, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 6, regla: "u6-con-verbos", grupo: "DT-" + s.id, items: ["lex:" + s.id, "lex:" + v.id], oir: ru, audio: ru, audioManual: true,
      pide: "Respondé tocando las palabras de la frase.", palabras, preguntas: [{ pide: "¿Quién?", correcta: 0 }, { pide: "¿Qué hace?", correcta: 1 }, { pide: "¿Qué palabra dice dónde?", correcta: 3 }],
      explicacion: ru + " " + u6Regla(s) });
  });

  /* «regla» en los tipos viejos */
  const porId = {}; Object.values(lug).concat(geos).forEach(s => { porId[s.id] = s; });
  out.forEach(e => {
    if (e.regla) return;
    const id = (e.id.match(/(CMR-\d+)/) || [])[1], s = id && porId[id];
    const p = e.id.replace(/^U6-([a-z]+).*$/, "$1");
    if (/^U6-(pr|pres|prdic)-/.test(e.id) && s) e.regla = reglaPr(s);
    else if (/^U6-(term|tel|camb|emp)-/.test(e.id) && s) e.regla = reglaPrep(s);
    else if (/^U6-emp-/.test(e.id)) e.regla = e.modulo === 4 ? "u6-ciudades" : "u6-prep-e";
    else if (/^U6-(esru|dic|comp|det|ord)-/.test(e.id) && s) e.regla = /жить$/.test(e.id) ? "u6-vivir" : /рабо́тать$/.test(e.id) ? "u6-con-verbos" : reglaPrep(s);
    else if (/^U6-(esc|esco|escod)-/.test(e.id)) e.regla = "u6-donde-cosa";
    else if (/^U6-esl-/.test(e.id)) e.regla = "u6-donde";
    else if (/^U6-d1/.test(e.id)) e.regla = /до́ма|здесь|там/.test(e.oir || "") ? "u6-sin-prep" : "u6-donde";
    else if (/^U6-dlg/.test(e.id)) e.regla = /(^|[\s—])А /.test((e.contexto || []).map(x => x.ru).join(" ") + " " + (e.esperada || "")) ? "u6-preguntar-otro" : "u6-donde";
    else if (p === "cerca") e.regla = "u6-cerca-lejos";
    else if (/^U6-(clas-e|um-e)-/.test(e.id)) e.regla = "u6-donde-prep";
    else if (/^U6-(clas-m|um-v|um-esru|um-dic)-/.test(e.id)) e.regla = "u6-adonde-acc";
    else if (p === "dq") e.regla = e.correcta === "Где" ? "u6-donde-prep" : "u6-adonde-acc";
    else if (/^U6-conj/.test(e.id)) e.regla = /CMR-00560/.test(e.id) ? "u6-pie-vehiculo" : "u6-ahora-seguido";
    else if (p === "pie" || p === "pien") e.regla = "u6-pie-vehiculo";
    else if (p === "hab" || p === "habesru") e.regla = "u6-ahora-seguido";
  });
  /* Opciones en español con palabras de una letra: {в} */
  out.forEach(e => { if (e.opciones && /^(porque|diagnostico)$/.test(e.tipo)) e.opciones = e.opciones.map(u6Palabras); if (e.correcta && typeof e.correcta === "string" && /^(porque|diagnostico)$/.test(e.tipo)) e.correcta = u6Palabras(e.correcta); });

  /* Nunca antes de que se vea la palabra (07/10/2026): el módulo de un ejercicio es, como mínimo, el de sus lugares */
  const desdeId = {}; Object.values(lug).concat(Object.values(geo)).forEach(s => { desdeId["lex:" + s.id] = s.amp || s.desde || 2; });
  out.forEach(e => (e.items || []).forEach(it => { if (desdeId[it] && !e.ampliacion && e.modulo < desdeId[it]) e.modulo = desdeId[it]; }));
  /* тут = здесь (acá): se acepta en todas las respuestas (Manu, 05/10/2026) */
  out.forEach(e => { if (e.esperadas) e.esperadas = e.esperadas.concat(e.esperadas.filter(x => /здесь/.test(x)).map(x => x.replace(/Здесь/g, "Тут").replace(/здесь/g, "тут"))); });
  out.forEach(e => { if (e.explicacion) e.explicacion = u6Palabras(e.explicacion); if (e.pide) e.pide = u6Palabras(e.pide); });
  return out;
}

/* Proyecto «Мой го́род»: requisitos y consejos, contados con Casos y Verbos */
(function () {
  const m = UNIDAD_6.modulos.find(x => x.id === "u6m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const clave = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(clave(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
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
