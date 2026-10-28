/* ============================================================
   DATA-UNIDAD-7.JS — Unidad 7: Tiempo, fechas y rutina diaria
   ------------------------------------------------------------
   Versión 04/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 04/10/2026):
   · La hora, solo en punto: 1 → час; 2, 3, 4 → часа́; 5 a 12 → часо́в
     (forma de conteo y genitivo plural de Casos). «A las siete» = в семь
     часо́в. Las medias horas (ordinales y genitivo), más adelante.
   · «de la mañana / de la noche»: утра́ y ве́чера como fórmula fija
     (el esquema decía «в семь часо́в у́тром», que está mal en ruso).
   · Días: в + acusativo (в сре́ду, во вто́рник). Meses: в + prepositivo
     (в ма́е). Sin fechas con ordinales («деся́тое сентября́»).
   · En lugar de «с девяти́ до шести́»: начина́ть / зака́нчивать.
   · Afuera: по понеде́льникам (dativo), спо́ртом, с друзья́ми
     (instrumental), вчера́ (pasado, Unidad 8).
   · у́тром… y всегда́, ча́сто, иногда́, никогда́ son repaso de la Unidad 5;
     nuevas: обы́чно, ре́дко.
   · Evaluación: 35 ejercicios en 7 partes; «Моя неде́ля» es el proyecto.
   Profundización (10/10/2026, PLAN_PROFUNDIZACION.md §6, capítulo aprobado
   por Manu): teoría con ids de regla, ejemplos explicados, errores típicos,
   chequeos y «Más a fondo»; vocabulario nuevo por módulo (U7_GRUPOS): hora
   con minutos y números del 13 al 50, estaciones (зимо́й…), fiestas, раз,
   rutina con -ся, conectores, horarios (-ся para las cosas, приходи́ть /
   уходи́ть, за́нят / свобо́ден), игра́ть в / на; anticipo del aspecto al
   final (sin pares). ве́чер = «tarde, noche», como en el léxico.
   Formas de Casos y de Verbos, nunca a mano.
   ============================================================ */

const U7_NUM = ["", "оди́н", "два", "три", "четы́ре", "пять", "шесть", "семь", "во́семь", "де́вять", "де́сять", "оди́ннадцать", "двена́дцать"];
const U7_NUM_ES = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
const U7_DIAS = [["понеде́льник", "lunes"], ["вто́рник", "martes"], ["CMR-00836", "miércoles"], ["четве́рг", "jueves"], ["пя́тница", "viernes"], ["суббо́та", "sábado"], ["воскресе́нье", "domingo"]];
const U7_MESES = [["янва́рь", "enero"], ["февра́ль", "febrero"], ["март", "marzo"], ["апре́ль", "abril"], ["май", "mayo"], ["ию́нь", "junio"], ["ию́ль", "julio"],
  ["а́вгуст", "agosto"], ["сентя́брь", "septiembre"], ["октя́брь", "octubre"], ["ноя́брь", "noviembre"], ["дека́брь", "diciembre"]];
const U7_PARTES = [["у́тро", "mañana", "у́тром", "por la mañana"], ["день", "día, tarde", "днём", "por la tarde"], ["ве́чер", "tarde, noche", "ве́чером", "por la noche"], ["ночь", "noche", "но́чью", "de noche"]];
const U7_FREC = { "всегда́": "siempre", "обы́чно": "normalmente", "ча́сто": "a menudo", "иногда́": "a veces", "ре́дко": "pocas veces", "никогда́": "nunca" };

/* Actividades del día: [verbo, complemento, español (yo, tú, él/ella, nosotros, ellos/ustedes), emoji, hora típica, утра́ / ве́чера] */
const U7_ACT = {
  desp: ["просыпа́ться", "", ["me despierto", "te despiertas", "se despierta", "nos despertamos", "se despiertan"], "🌅", 7, "у"],
  lev: ["встава́ть", "", ["me levanto", "te levantas", "se levanta", "nos levantamos", "se levantan"], "🛏️", 7, "у"],
  lava: ["умыва́ться", "", ["me lavo la cara", "te lavas la cara", "se lava la cara", "nos lavamos la cara", "se lavan la cara"], "🧼", 7, "у"],
  vest: ["одева́ться", "", ["me visto", "te vistes", "se viste", "nos vestimos", "se visten"], "👕", 8, "у"],
  ducha: ["принима́ть", "душ", ["me ducho", "te duchas", "se ducha", "nos duchamos", "se duchan"], "🚿", 8, "у"],
  des: ["за́втракать", "", ["desayuno", "desayunas", "desayuna", "desayunamos", "desayunan"], "☕", 8, "у"],
  ini: ["начина́ть", "рабо́тать", ["empiezo a trabajar", "empiezas a trabajar", "empieza a trabajar", "empezamos a trabajar", "empiezan a trabajar"], "💼", 9, "у"],
  trab: ["рабо́тать", "", ["trabajo", "trabajas", "trabaja", "trabajamos", "trabajan"], "💻", 10, "у"],
  alm: ["обе́дать", "", ["almuerzo", "almuerzas", "almuerza", "almorzamos", "almuerzan"], "🍽️", 1, ""],
  fin: ["зака́нчивать", "рабо́тать", ["termino de trabajar", "terminas de trabajar", "termina de trabajar", "terminamos de trabajar", "terminan de trabajar"], "🏁", 6, "в"],
  volv: ["возвраща́ться", "домо́й", ["vuelvo a casa", "vuelves a casa", "vuelve a casa", "volvemos a casa", "vuelven a casa"], "🏠", 7, "в"],
  est: ["изуча́ть", "ру́сский", ["estudio ruso", "estudias ruso", "estudia ruso", "estudiamos ruso", "estudian ruso"], "📖", 8, "в"],
  cen: ["у́жинать", "", ["ceno", "cenas", "cena", "cenamos", "cenan"], "🍲", 8, "в"],
  peli: ["смотре́ть", "фильм", ["miro una película", "miras una película", "mira una película", "miramos una película", "miran una película"], "🎬", 9, "в"],
  acost: ["ложи́ться", "спать", ["me acuesto", "te acuestas", "se acuesta", "nos acostamos", "se acuestan"], "😴", 11, "в"]
};
const U7_ORDEN_DIA = ["desp", "des", "ini", "alm", "fin", "volv", "cen", "acost"];
/* Para la semana: qué se hace cada día (frases que el alumno ya puede decir) */
const U7_SEMANA = [["рабо́тать", "", "trabajo"], ["изуча́ть", "ру́сский", "estudio ruso"], ["ходи́ть", "в парк", "voy al parque"], ["рабо́тать", "до́ма", "trabajo en casa"],
  ["идти́", "в рестора́н", "voy al restaurante"], ["отдыха́ть", "", "descanso"], ["чита́ть", "", "leo"]];

const U7_VISTAS = {
  1: "оди́н два четы́ре пять шесть семь во́семь де́вять де́сять оди́ннадцать двена́дцать кото́рый трина́дцать четы́рнадцать пятна́дцать шестна́дцать семна́дцать восемна́дцать девятна́дцать два́дцать три́дцать со́рок пятьдеся́т мину́та секу́нда полчаса́ часы́ буди́льник ро́вно приме́рно то́чно",
  2: "по́лдень по́лночь су́тки рассве́т зака́т ра́нний по́здний",
  3: "понеде́льник вто́рник среда́ четве́рг пя́тница суббо́та воскресе́нье како́й ка́ждый во",
  4: "неде́ля янва́рь февра́ль март апре́ль май ию́нь ию́ль а́вгуст сентя́брь октя́брь ноя́брь дека́брь о́тпуск пра́здник весна́ ле́то о́сень зимо́й весно́й ле́том о́сенью сезо́н да́та календа́рь полго́да век Рождество́ нового́дний Па́сха пра́здновать кани́кулы рожде́ние",
  5: "обы́чно ре́дко раз два́жды ежедне́вно постоя́нно почти́ сно́ва обы́чный",
  6: "принима́ть душ начина́ть зака́нчивать ложи́ться домо́й ра́но по́здно умыва́ться чи́стить бри́ться одева́ться мыть стира́ть убира́ть засыпа́ть устава́ть уста́лый щётка расчёска полоте́нце посте́ль оде́жда посу́да ча́йник кру́жка снача́ла зате́м сра́зу бы́стро спеши́ть торопи́ться опа́здывать успева́ть",
  7: "ско́лько расписа́ние переры́в заня́тие начина́ться конча́ться открыва́ться рабо́чий за́нятый свобо́дный приходи́ть уходи́ть",
  8: "план встре́ча выходно́й о́тдых прогу́лка игра́ игра́ть та́нец ра́дио но́вость програ́мма се́рия трениро́вка спорти́вный те́ннис ша́хматы пиани́но весёлый скуча́ть вме́сте"
};
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario (la del léxico puede ser más amplia) */
const U7_GLOSA = {
  "трина́дцать": "trece", "четы́рнадцать": "catorce", "пятна́дцать": "quince", "шестна́дцать": "dieciséis", "семна́дцать": "diecisiete", "восемна́дцать": "dieciocho",
  "девятна́дцать": "diecinueve", "два́дцать": "veinte", "три́дцать": "treinta", "со́рок": "cuarenta", "пятьдеся́т": "cincuenta",
  "мину́та": "minuto", "секу́нда": "segundo", "полчаса́": "media hora", "часы́": "reloj", "буди́льник": "despertador", "ро́вно": "en punto, justo", "приме́рно": "más o menos", "то́чно": "exactamente",
  "по́лдень": "mediodía", "по́лночь": "medianoche", "су́тки": "día completo (24 horas)", "рассве́т": "amanecer", "зака́т": "atardecer", "ра́нний": "temprano (adjetivo)", "по́здний": "tardío",
  "весна́": "primavera", "ле́то": "verano", "о́сень": "otoño", "зимо́й": "en invierno", "весно́й": "en primavera", "ле́том": "en verano", "о́сенью": "en otoño",
  "Рождество́": "Navidad", "нового́дний": "de Año Nuevo", "Па́сха": "Pascua", "пра́здновать": "festejar", "рожде́ние": "nacimiento", "кани́кулы": "vacaciones (escolares)",
  "да́та": "fecha", "календа́рь": "calendario", "сезо́н": "temporada", "полго́да": "medio año", "век": "siglo",
  "ка́ждый": "cada", "раз": "vez", "два́жды": "dos veces", "ежедне́вно": "a diario", "постоя́нно": "todo el tiempo", "почти́": "casi", "сно́ва": "otra vez", "обы́чный": "normal, habitual",
  "умыва́ться": "lavarse la cara", "чи́стить": "limpiar, cepillar", "бри́ться": "afeitarse", "одева́ться": "vestirse", "мыть": "lavar", "стира́ть": "lavar la ropa", "убира́ть": "ordenar, limpiar",
  "засыпа́ть": "dormirse", "устава́ть": "cansarse", "уста́лый": "cansado", "щётка": "cepillo", "расчёска": "peine", "полоте́нце": "toalla", "посте́ль": "cama", "оде́жда": "ropa",
  "посу́да": "platos, vajilla", "ча́йник": "hervidor", "кру́жка": "taza, jarro", "снача́ла": "primero", "зате́м": "luego", "сра́зу": "enseguida", "бы́стро": "rápido",
  "спеши́ть": "apurarse", "торопи́ться": "apurarse, estar apurado", "опа́здывать": "llegar tarde", "успева́ть": "llegar a tiempo",
  "расписа́ние": "horario", "переры́в": "pausa", "заня́тие": "clase (de un curso)", "начина́ться": "empezar (una cosa)", "конча́ться": "terminar (una cosa)", "открыва́ться": "abrir (un negocio)",
  "рабо́чий": "de trabajo", "за́нятый": "ocupado", "свобо́дный": "libre", "приходи́ть": "llegar", "уходи́ть": "irse",
  "о́тдых": "descanso", "прогу́лка": "paseo", "трениро́вка": "entrenamiento", "игра́": "juego", "игра́ть": "jugar, tocar", "та́нец": "baile", "ра́дио": "radio", "но́вость": "noticia",
  "програ́мма": "programa", "се́рия": "episodio", "спорти́вный": "deportivo", "те́ннис": "tenis", "ша́хматы": "ajedrez", "пиани́но": "piano", "весёлый": "divertido", "скуча́ть": "aburrirse", "вме́сте": "juntos"
};
/* Vocabulario nuevo (10/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página.
   [módulo, título, palabras, traducción propia de la unidad cuando la del léxico es más amplia] */
const U7_GRUPOS = [
  [1, "Los números del 13 al 50", "трина́дцать четы́рнадцать пятна́дцать шестна́дцать семна́дцать восемна́дцать девятна́дцать два́дцать три́дцать со́рок пятьдеся́т"],
  [1, "La hora y el tiempo", "мину́та секу́нда полчаса́ часы́ буди́льник ро́вно приме́рно то́чно"],
  [2, "Más palabras del día", "по́лдень по́лночь су́тки рассве́т зака́т ра́нний по́здний"],
  [4, "Estaciones", "зима́ весна́ ле́то о́сень зимо́й весно́й ле́том о́сенью"],
  [4, "Fiestas y fechas", "пра́здник Рождество́ нового́дний Па́сха пра́здновать рожде́ние кани́кулы да́та календа́рь сезо́н полго́да век"],
  [5, "Cada cuánto", "почти́ раз два́жды ежедне́вно постоя́нно сно́ва обы́чный"],
  [6, "La rutina", "умыва́ться чи́стить бри́ться одева́ться мыть стира́ть убира́ть засыпа́ть"],
  [6, "Cosas de todos los días", "щётка расчёска полоте́нце посте́ль оде́жда посу́да ча́йник кру́жка"],
  [6, "En orden y con apuro", "снача́ла зате́м сра́зу бы́стро спеши́ть торопи́ться опа́здывать успева́ть устава́ть уста́лый"],
  [7, "Horarios", "расписа́ние переры́в заня́тие начина́ться конча́ться открыва́ться рабо́чий за́нятый свобо́дный приходи́ть уходи́ть"],
  [8, "Tiempo libre", "о́тдых прогу́лка трениро́вка игра́ игра́ть та́нец ра́дио но́вость програ́мма се́рия спорти́вный те́ннис ша́хматы пиани́но весёлый скуча́ть вме́сте"]
];
const U7_AMPLIACION_RU = "";   /* ра́но y по́здно pasaron a la base (Manu, 05/10/2026) */

const U7_LECTURAS = [
  { id: "dia", titulo: "Мой день", lineas: [
      ["Я просыпа́юсь в семь часо́в.", "Me despierto a las siete."], ["Я за́втракаю до́ма.", "Desayuno en casa."], ["Пото́м я иду́ на рабо́ту.", "Después voy al trabajo."],
      ["Я начина́ю рабо́тать в де́вять часо́в.", "Empiezo a trabajar a las nueve."], ["Я обе́даю в час.", "Almuerzo a la una."], ["Ве́чером я возвраща́юсь домо́й.", "Por la noche vuelvo a casa."],
      ["Я изуча́ю ру́сский.", "Estudio ruso."], ["Пото́м я смотрю́ фильм.", "Después miro una película."], ["Я ложу́сь спать в оди́ннадцать часо́в.", "Me acuesto a las once."]],
    preguntas: [["¿A qué hora se despierta?", "в семь часо́в", ["в во́семь часо́в", "в оди́ннадцать часо́в"]], ["¿Dónde desayuna?", "до́ма", ["на рабо́те", "в кафе́"]], ["¿A qué hora almuerza?", "в час", ["в два часа́", "в де́вять часо́в"]]],
    vf: [["Я ложу́сь спать в де́сять часо́в.", false], ["Ве́чером я изуча́ю ру́сский.", true], ["Я начина́ю рабо́тать в де́вять часо́в.", true]] },
  { id: "semana", titulo: "Неде́ля А́нны", lineas: [
      ["В понеде́льник А́нна рабо́тает.", "El lunes Ana trabaja."], ["Во вто́рник она́ изуча́ет ру́сский.", "El martes estudia ruso."], ["В сре́ду она́ хо́дит в парк.", "El miércoles va al parque."],
      ["В пя́тницу она́ идёт в рестора́н.", "El viernes va al restaurante."], ["В суббо́ту она́ отдыха́ет.", "El sábado descansa."], ["В воскресе́нье она́ обы́чно до́ма.", "El domingo normalmente está en casa."]],
    preguntas: [["¿Qué hace Ana el martes?", "изуча́ет ру́сский", ["рабо́тает", "отдыха́ет"]], ["¿Cuándo va al parque?", "в сре́ду", ["в суббо́ту", "в понеде́льник"]], ["¿Dónde está el domingo?", "до́ма", ["в па́рке", "на рабо́те"]]],
    vf: [["В суббо́ту А́нна рабо́тает.", false], ["В пя́тницу она́ идёт в рестора́н.", true], ["В понеде́льник она́ отдыха́ет.", false]] }
];

const UNIDAD_7 = {
  id: 7,
  titulo: "Tiempo, fechas y rutina diaria",
  tituloRu: "Вре́мя, дни и ме́сяцы",
  objetivo: "Decir la hora, hablar de días, meses y momentos del día, decir con qué frecuencia haces algo y contar tu rutina y tu semana.",
  tiempo: "3 a 4 semanas con práctica diaria (unas 35–45 horas)",
  modulos: [
    { id: "u7m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "¿Qué hora es?", resumen: "Кото́рый час? — Семь часо́в.",
      intro: "Para decir la hora alcanzan los números y una palabra, час (hora), que cambia según el número. Ese cambio es un patrón que vas a encontrar muchas veces: con los minutos, con las veces y con todo lo que se cuenta.",
      secciones: [
        { id: "u7-hora-pregunta", titulo: "Preguntar la hora",
          texto: "Кото́рый час? es «¿qué hora es?». La respuesta es el número y la palabra час, sin verbo y sin artículo: Семь часо́в («son las siete»). Adelante puede ir сейча́с («ahora»), que es optativo.",
          ejemplos: [
            { ru: "— Кото́рый час? — {Семь часо́в}.", es: "—¿Qué hora es? —Son las siete.", por: "Sin «son» ni «las»: el número y час." },
            { ru: "Сейча́с {три часа́}.", es: "Son las tres.", por: "Сейча́с suma «ahora»; sin él, la frase dice lo mismo." },
            { ru: "Сейча́с {час}.", es: "Es la una.", por: "Para la una alcanza con час, sin número." }],
          destacado: "Кото́рый час? — Семь часо́в.",
          errores: [{ mal: "Э́то семь часо́в.", bien: "{Семь часо́в}.", por: "Para la hora no va э́то: el número y час, nada más." }],
          mas: { texto: "Кото́рый quiere decir «cuál» en una serie: Кото́рый час? es, palabra por palabra, «¿cuál hora?», como preguntar qué número de la serie de las horas toca ahora.\nPara la una, оди́н se omite porque час solo ya quiere decir «una hora». Si alguien dice оди́н час, se entiende igual, pero al dar la hora suena de más.",
            ejemplos: [{ ru: "— Кото́рый час? — {Час}.", es: "—¿Qué hora es? —La una.", por: "La respuesta más corta: la palabra sola." }] },
          chequeo: [{ pide: "«Son las cuatro» se dice…", opciones: ["Четы́ре часа́.", "Э́то четы́ре часа́."], ok: "Четы́ре часа́.", por: "Sin э́то: el número y час." }] },
        { id: "u7-hora-conteo", titulo: "Час, часа́, часо́в",
          antes: { pide: "Два часа́, три часа́… ¿y con четы́ре?", opciones: ["четы́ре часа́", "четы́ре часо́в"], ok: "четы́ре часа́", por: "Con 2, 3 y 4 va la misma forma: часа́." },
          texto: "Час cambia según el número que tiene adelante. Hay tres formas:\n1 → час\n2, 3, 4 → часа́\n5 a 20 → часо́в\nNo es una manía de la hora: el ruso cuenta todo así. Vas a ver el mismo reparto con los minutos y con las veces.",
          ejemplos: [
            { ru: "{Час}.", es: "Es la una.", por: "Uno: la palabra sola." },
            { ru: "Два {часа́}.", es: "Son las dos.", por: "2, 3 y 4: часа́, con el acento al final." },
            { ru: "Пять {часо́в}.", es: "Son las cinco.", por: "De 5 en adelante: часо́в." },
            { ru: "Двена́дцать {часо́в}.", es: "Son las doce.", por: "12 está en el grupo de 5 en adelante." }],
          destacado: "1 час · 2–4 часа́ · 5–20 часо́в",
          errores: [
            { mal: "Пять часа́.", bien: "Пять {часо́в}.", por: "De 5 en adelante va часо́в." },
            { mal: "Три часо́в.", bien: "Три {часа́}.", por: "Con 2, 3 y 4 va часа́." }],
          mas: { texto: "¿Por qué 2, 3 y 4 van aparte? Hace siglos el ruso tenía una forma especial para contar de a dos, y el 3 y el 4 se sumaron a ella. Lo que quedó es la forma de contar часа́, que solo aparece después de 2, 3 y 4.\nDesde 5, la palabra va en plural y en otro caso: часо́в. Los números del 11 al 19 van siempre con часо́в, aunque terminen en «uno» o «cuatro»: lo que cuenta es la palabra entera, no la última cifra. Con 20, 30, 40 y 50, también часо́в.",
            ejemplos: [
              { ru: "Оди́ннадцать {часо́в}.", es: "Son las once.", por: "11 es una palabra entera: va con часо́в." },
              { ru: "Четы́рнадцать {часо́в}.", es: "Catorce horas.", por: "Termina en «cuatro», pero va con часо́в." }] },
          chequeo: [
            { pide: "Сейча́с во́семь ___.", opciones: ["час", "часа", "часов"], ok: "часов", por: "8 está en el grupo de 5 en adelante: часо́в." },
            { pide: "Сейча́с три ___.", opciones: ["час", "часа", "часов"], ok: "часа", por: "3 va con часа́." }] },
        { id: "u7-hora-a-las", titulo: "«A las siete»: в + la hora",
          texto: "Para decir a qué hora pasa algo, va в delante de la hora, y la hora no cambia: в семь часо́в («a las siete»), в два часа́ («a las dos»), в час («a la una»). Sin в, la frase dice qué hora es o cuánto dura algo.",
          ejemplos: [
            { ru: "Я за́втракаю {в во́семь часо́в}.", es: "Desayuno a las ocho.", por: "в + la hora: cuándo pasa." },
            { ru: "Я обе́даю {в час}.", es: "Almuerzo a la una.", por: "Con la una: в час." },
            { ru: "Я рабо́таю {во́семь часо́в}.", es: "Trabajo ocho horas.", por: "Sin в: cuánto dura." }],
          destacado: "в семь часо́в = a las siete · семь часо́в = las siete o siete horas",
          errores: [{ mal: "Я за́втракаю семь часо́в.", bien: "Я за́втракаю {в семь часо́в}.", por: "Para «a las siete» hace falta в; sin в, dice «desayuno siete horas»." }],
          mas: { texto: "Para cuánto dura algo, el número y la palabra van solos, con el mismo reparto de siempre (час, часа́, часо́в). Para una hora, la palabra sola: Я чита́ю час («leo una hora»). Media hora es полчаса́, que no cambia.",
            ejemplos: [
              { ru: "Я сплю {семь часо́в}.", es: "Duermo siete horas.", por: "Cuánto dura: sin в." },
              { ru: "Я гуля́ю {полчаса́}.", es: "Paseo media hora.", por: "Полчаса́ = media hora." }] },
          chequeo: [{ pide: "«Ceno a las nueve».", opciones: ["Я у́жинаю в де́вять часо́в.", "Я у́жинаю де́вять часо́в."], ok: "Я у́жинаю в де́вять часо́в.", por: "«A las…» lleva в." }] },
        { id: "u7-duracion", titulo: "Minutos y la hora con minutos",
          texto: "Мину́та (minuto) se cuenta igual que час: три мину́ты, пять мину́т, два́дцать мину́т. Con los números del 13 al 50 también puedes decir la hora con minutos, como en un reloj digital: primero la hora, después los minutos, sin «y» y sin часо́в.",
          ejemplos: [
            { ru: "Сейча́с {семь пятна́дцать}.", es: "Son las siete y quince.", por: "La hora y los minutos, uno detrás del otro." },
            { ru: "Я за́втракаю {в во́семь три́дцать}.", es: "Desayuno a las ocho y media.", por: "Con в, igual que la hora en punto." },
            { ru: "Я чита́ю {два́дцать мину́т}.", es: "Leo veinte minutos.", por: "Cuánto dura: con 20, мину́т, como часо́в." },
            { ru: "{Ро́вно} семь часо́в.", es: "Son las siete en punto.", por: "Ро́вно = justo, en punto." }],
          destacado: "три мину́ты · пять мину́т · семь пятна́дцать",
          mas: { texto: "Мину́та cambia como час: con 3 y 4, мину́ты; de 5 en adelante, мину́т, sin terminación. Con 1 y 2, las palabras femeninas como мину́та tienen formas especiales, que llegan más adelante: por ahora, cuenta minutos desde 3.\nПриме́рно es «más o menos» y то́чно, «exactamente». Часы́ es el reloj: se escribe igual que el plural de час, y se entiende por la frase. Y para que suene, буди́льник (el despertador).",
            ejemplos: [
              { ru: "{Приме́рно} семь часо́в.", es: "Son más o menos las siete.", por: "Приме́рно va delante de la hora." },
              { ru: "Сейча́с {то́чно} де́вять со́рок.", es: "Son exactamente las nueve y cuarenta.", por: "То́чно: sin margen." }] },
          chequeo: [
            { pide: "«Leo diez minutos».", opciones: ["Я чита́ю де́сять мину́т.", "Я чита́ю де́сять мину́ты."], ok: "Я чита́ю де́сять мину́т.", por: "De 5 en adelante: мину́т." },
            { pide: "«Son las nueve y cuarenta».", opciones: ["Сейча́с де́вять со́рок.", "Сейча́с со́рок де́вять."], ok: "Сейча́с де́вять со́рок.", por: "Primero la hora, después los minutos." }] }
      ] },
    { id: "u7m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "Partes del día", resumen: "у́тро, день, ве́чер, ночь · в семь часо́в утра́.",
      intro: "у́тром, днём, ве́чером y но́чью ya los conoces. Ahora se suman los sustantivos, cómo decir «de la mañana» con la hora y algunas palabras más del día.",
      secciones: [
        { id: "u7-momento-sin-prep", titulo: "Por la mañana: sin preposición",
          texto: "Para decir en qué momento del día pasa algo, el ruso no usa preposición: cada momento tiene su palabra.\nу́тро (la mañana) → у́тром (por la mañana)\nдень (el día, la tarde) → днём (por la tarde, de día)\nве́чер (la tarde, la noche) → ве́чером (por la noche)\nночь (la noche) → но́чью (de noche)",
          ejemplos: [
            { ru: "Я рабо́таю {у́тром}.", es: "Trabajo por la mañana.", por: "Una sola palabra, sin в." },
            { ru: "{Ве́чером} я до́ма.", es: "Por la noche estoy en casa.", por: "Puede abrir la frase." },
            { ru: "{Но́чью} я сплю.", es: "De noche duermo.", por: "ночь → но́чью." }],
          errores: [{ mal: "Я рабо́таю в у́тро.", bien: "Я рабо́таю {у́тром}.", por: "El momento del día va sin в: у́тром." }],
          mas: { texto: "у́тром, днём, ве́чером y но́чью son, en el fondo, formas de у́тро, день, ве́чер y ночь en otro caso, el instrumental, que llega más adelante. Por eso terminan en **-ом**, **-ём** y **-ью**. Hoy funcionan como palabras propias y se aprenden así.\nДень nombra el día entero y también la parte con luz: днём sirve para «por la tarde» y para «de día». Ве́чер es el final de la tarde y el comienzo de la noche; ночь, la noche cerrada.",
            ejemplos: [{ ru: "{Днём} я рабо́таю, а {ве́чером} отдыха́ю.", es: "Por la tarde trabajo y por la noche descanso.", por: "Dos momentos en una frase, los dos sin в." }] },
          chequeo: [{ pide: "«Por la noche miro una película».", opciones: ["Ве́чером я смотрю́ фильм.", "В ве́чер я смотрю́ фильм."], ok: "Ве́чером я смотрю́ фильм.", por: "Sin preposición: ве́чером." }] },
        { id: "u7-utra-vechera", titulo: "Con la hora: утра́ y ве́чера",
          texto: "Para aclarar si las siete son de la mañana o de la noche, después de la hora va утра́ o ве́чера: в семь часо́в утра́ («a las siete de la mañana»), в во́семь часо́в ве́чера («a las ocho de la noche»). Son formas fijas: con la hora, nunca у́тром ni ве́чером.",
          ejemplos: [
            { ru: "Я встаю́ в семь часо́в {утра́}.", es: "Me levanto a las siete de la mañana.", por: "Con la hora: утра́." },
            { ru: "Я у́жинаю в де́вять часо́в {ве́чера}.", es: "Ceno a las nueve de la noche.", por: "Con la hora: ве́чера." },
            { ru: "Я встаю́ {у́тром}.", es: "Me levanto por la mañana.", por: "Sin hora: у́тром." }],
          destacado: "в семь часо́в утра́ · в во́семь часо́в ве́чера",
          errores: [{ mal: "в семь часо́в у́тром", bien: "в семь часо́в {утра́}", por: "Después de la hora va утра́, no у́тром." }],
          mas: { texto: "Para la madrugada se usa но́чи: para un ruso, las dos de la mañana todavía son de noche. Para la tarde temprana, de las doce a las cinco más o menos, дня. Утра́, дня, ве́чера y но́чи son del mismo caso, el que significa «de»: «las siete de la mañana».",
            ejemplos: [
              { ru: "в два часа́ {но́чи}", es: "a las dos de la mañana", por: "De madrugada: но́чи." },
              { ru: "в три часа́ {дня}", es: "a las tres de la tarde", por: "Tarde temprana: дня." }] },
          chequeo: [{ pide: "«a las ocho de la mañana»", opciones: ["в во́семь часо́в утра́", "в во́семь часо́в у́тром"], ok: "в во́семь часо́в утра́", por: "Con la hora: утра́." }] },
        { id: "u7-mediodia", titulo: "Mediodía, medianoche y el día entero",
          texto: "По́лдень es el mediodía y по́лночь, la medianoche. Van con в, como una hora: в по́лдень («al mediodía»), в по́лночь («a medianoche»). Су́тки es el día completo, las 24 horas; рассве́т, el amanecer, y зака́т, el atardecer. Dos adjetivos: ра́нний (temprano) y по́здний (tardío).",
          ejemplos: [
            { ru: "Я обе́даю {в по́лдень}.", es: "Almuerzo al mediodía.", por: "в + по́лдень, que no cambia." },
            { ru: "{В по́лночь} я сплю.", es: "A medianoche duermo.", por: "Lo mismo con по́лночь." },
            { ru: "Э́то {по́здний} у́жин.", es: "Es una cena tardía.", por: "Adjetivo: concuerda con у́жин." }],
          mas: { texto: "По́лдень es, literalmente, «medio día»: пол- quiere decir «medio», igual que en полчаса́. Ра́нний y по́здний son adjetivos: van con un sustantivo (ра́нний за́втрак, по́здний ве́чер). Para «temprano» y «tarde» solos, sin sustantivo, hay otras palabras, más adelante en esta unidad.",
            ejemplos: [{ ru: "Э́то {ра́нний} за́втрак.", es: "Es un desayuno temprano.", por: "ра́нний concuerda con за́втрак." }] },
          chequeo: [{ pide: "«al mediodía»", opciones: ["в по́лдень", "по́лдень"], ok: "в по́лдень", por: "Como una hora: в по́лдень." }] }
      ] },
    { id: "u7m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Días de la semana", resumen: "в понеде́льник, во вто́рник, в сре́ду…",
      intro: "Los días de la semana, para decir qué día es hoy, qué haces cada día y qué haces todos los días.",
      secciones: [
        { titulo: "Los siete días",
          texto: "понеде́льник (lunes), вто́рник (martes), среда́ (miércoles), четве́рг (jueves), пя́тница (viernes), суббо́та (sábado), воскресе́нье (domingo). En ruso se escriben con minúscula. Cada uno tiene su género: среда́, пя́тница y суббо́та son femeninos, воскресе́нье es neutro y los otros tres, masculinos.",
          mas: { texto: "Varios nombres se entienden por el orden: пя́тница viene de пять («cinco»), porque es el quinto día. El lunes, понеде́льник, es «el que sigue a la semana de descanso». Воскресе́нье quiere decir «resurrección». Y суббо́та es, igual que «sábado», una palabra que viene del hebreo." },
          chequeo: [{ pide: "¿Qué día viene después de четве́рг?", opciones: ["пя́тница", "среда́", "суббо́та"], ok: "пя́тница", por: "Jueves → viernes: четве́рг → пя́тница." }] },
        { id: "u7-dia-hoy", titulo: "Qué día es",
          texto: "Како́й сего́дня день? («¿qué día es hoy?») — Сего́дня понеде́льник («hoy es lunes»). Para decir qué día es, el día va tal cual, como en el diccionario, sin verbo y sin preposición.",
          ejemplos: [
            { ru: "Сего́дня {пя́тница}.", es: "Hoy es viernes.", por: "Qué día es: sin cambio." },
            { ru: "За́втра {суббо́та}.", es: "Mañana es sábado.", por: "За́втра funciona igual que сего́дня." }],
          errores: [{ mal: "Сего́дня в пя́тницу.", bien: "Сего́дня {пя́тница}.", por: "Para decir qué día es, el día no cambia y no lleva в." }],
          chequeo: [{ pide: "«Hoy es miércoles».", opciones: ["Сего́дня среда́.", "Сего́дня в сре́ду."], ok: "Сего́дня среда́.", por: "Qué día es: la forma del diccionario." }] },
        { id: "u7-dia-acus", titulo: "«El lunes»: в + acusativo",
          antes: { pide: "суббо́та → в суббо́ту. ¿Y пя́тница?", opciones: ["в пя́тницу", "в пя́тнице"], ok: "в пя́тницу", por: "La misma regla: **-а** → **-у**." },
          texto: "Para decir qué día pasa algo («el lunes», «el viernes»), va в + el día en acusativo. Las terminaciones son las del acusativo de siempre: las femeninas en **-а** pasan a **-у** (в сре́ду, в пя́тницу, в суббо́ту); los masculinos y воскресе́нье no cambian, porque son cosas (в понеде́льник, в четве́рг, в воскресе́нье).",
          ejemplos: [
            { ru: "{В сре́ду} я рабо́таю до́ма.", es: "El miércoles trabajo en casa.", por: "среда́ → сре́ду, y el acento pasa al principio." },
            { ru: "{В пя́тницу} я иду́ в кино́.", es: "El viernes voy al cine.", por: "пя́тница → пя́тницу." },
            { ru: "{В воскресе́нье} я отдыха́ю.", es: "El domingo descanso.", por: "Neutro y cosa: no cambia." },
            { ru: "{Во вто́рник} я изуча́ю ру́сский.", es: "El martes estudio ruso.", por: "Во: «в **вт**» es difícil de decir." }],
          destacado: "в сре́ду · в пя́тницу · во вто́рник",
          errores: [
            { mal: "в понеде́льнике", bien: "{в понеде́льник}", por: "Los días van en acusativo: понеде́льник queda igual." },
            { mal: "в среда́", bien: "{в сре́ду}", por: "Después de в, el día cambia: **-а** → **-у**." }],
          mas: { texto: "¿Por qué acusativo y no prepositivo, como en в Москве́? Porque aquí в no dice «adentro de»: marca un punto en el tiempo, igual que en в семь часо́в. Un día se piensa como un punto en la semana.\nВо aparece cuando la palabra siguiente empieza con **в** o **ф** más otra consonante: во вто́рник. Es la misma в, con una vocal para poder pronunciarla.",
            ejemplos: [{ ru: "{В суббо́ту} в во́семь часо́в я за́втракаю.", es: "El sábado a las ocho desayuno.", por: "Dos «cuándo» con в, los dos en acusativo." }] },
          chequeo: [{ pide: "«el sábado»", opciones: ["в суббо́ту", "в суббо́те", "в суббо́та"], ok: "в суббо́ту", por: "в + acusativo: **-а** → **-у**." }] },
        { id: "u7-cada", titulo: "Todos los días: ка́ждый",
          texto: "Ка́ждый es «cada». Con días y momentos va sin в, y cambia según el género, como un adjetivo en acusativo: ка́ждый день («todos los días»), ка́ждую суббо́ту (femenino: **-ую**), ка́ждое у́тро (neutro).",
          ejemplos: [
            { ru: "Я рабо́таю {ка́ждый день}.", es: "Trabajo todos los días.", por: "Sin в: ка́ждый день." },
            { ru: "{Ка́ждую суббо́ту} я гуля́ю в па́рке.", es: "Todos los sábados paseo por el parque.", por: "Femenino: ка́ждую суббо́ту." },
            { ru: "{Ка́ждое у́тро} я пью ко́фе.", es: "Todas las mañanas tomo café.", por: "Neutro: ка́ждое у́тро." }],
          errores: [{ mal: "в ка́ждый день", bien: "{ка́ждый день}", por: "Con ка́ждый no va в." }],
          mas: { texto: "Ка́ждый concuerda con la palabra que acompaña, como un adjetivo. Con el tiempo está en acusativo, el mismo que en в сре́ду: es el acusativo que dice «cuándo». Por eso con los días femeninos aparecen juntas **-ую** y **-у**: ка́ждую пя́тницу.\nEn español decimos «todos los días», en plural; en ruso, «cada día», en singular.",
            ejemplos: [{ ru: "{Ка́ждый ве́чер} я чита́ю.", es: "Todas las noches leo.", por: "Masculino: ка́ждый ве́чер." }] },
          chequeo: [{ pide: "«todos los viernes»", opciones: ["ка́ждую пя́тницу", "ка́ждая пя́тница", "ка́ждый пя́тницу"], ok: "ка́ждую пя́тницу", por: "Femenino y en acusativo: **-ую**." }] }
      ] },
    { id: "u7m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Meses, estaciones y fiestas", resumen: "в ма́е · ле́том · Рождество́ в декабре́.",
      intro: "неде́ля (semana), ме́сяц (mes), год (año), los doce meses, las estaciones y las fiestas. Al final, todas las formas de decir «cuándo», juntas.",
      secciones: [
        { titulo: "Los meses",
          texto: "янва́рь, февра́ль, март, апре́ль, май, ию́нь, ию́ль, а́вгуст, сентя́брь, октя́брь, ноя́брь, дека́брь. Se parecen mucho al español, van con minúscula y son todos masculinos.",
          mas: { texto: "Se parecen porque vienen del latín, igual que los nuestros. En otras lenguas eslavas, como el ucraniano o el polaco, los meses tienen nombres propios que hablan de la naturaleza; el ruso tomó los latinos." } },
        { id: "u7-mes-prep", titulo: "«En mayo»: в + prepositivo",
          antes: { pide: "май → в ма́е · март → в ма́рте. ¿Y а́вгуст?", opciones: ["в а́вгусте", "в а́вгуст"], ok: "в а́вгусте", por: "Los meses van en prepositivo: **-е**." },
          texto: "Para decir en qué mes, в + el mes en prepositivo, con **-е** como casi todo: в ма́е, в ма́рте, в а́вгусте. En los que terminan en **-брь** y en янва́рь y февра́ль, el acento pasa al final: в сентябре́, в январе́, в феврале́.",
          ejemplos: [
            { ru: "Мой о́тпуск {в а́вгусте}.", es: "Mis vacaciones son en agosto.", por: "а́вгуст → а́вгусте." },
            { ru: "{В январе́} хо́лодно.", es: "En enero hace frío.", por: "янва́рь → январе́, con el acento al final." },
            { ru: "{В ию́ле} я на мо́ре.", es: "En julio estoy en el mar.", por: "ию́ль → ию́ле." }],
          destacado: "в ма́е · в а́вгусте · в сентябре́",
          errores: [
            { mal: "в май", bien: "{в ма́е}", por: "Los meses van en prepositivo." },
            { mal: "в сентя́бре", bien: "в сентябр{е́}", por: "En los de **-брь**, el acento pasa al final." }],
          mas: { texto: "¿Por qué los meses van en prepositivo y los días en acusativo? Un mes se piensa como un espacio: algo pasa «adentro» de él, igual que en в Москве́. Un día, en cambio, es un punto.\nLa **ь** de los meses se va en el prepositivo, como en слова́рь → в словаре́: сентя́брь → сентябре́.",
            ejemplos: [{ ru: "{В декабре́} я до́ма, а {в ма́е} на да́че.", es: "En diciembre estoy en casa y en mayo, en la casa de campo.", por: "Dos meses, los dos en prepositivo." }] },
          chequeo: [{ pide: "«en marzo»", opciones: ["в ма́рте", "в март"], ok: "в ма́рте", por: "Prepositivo: **-е**." }] },
        { id: "u7-estaciones", titulo: "Las estaciones: зимо́й, ле́том",
          texto: "зима́ (invierno), весна́ (primavera), ле́то (verano), о́сень (otoño). Para decir en qué estación pasa algo no hay preposición: hay una palabra propia, como у́тром.\nзима́ → зимо́й (en invierno)\nвесна́ → весно́й (en primavera)\nле́то → ле́том (en verano)\nо́сень → о́сенью (en otoño)",
          ejemplos: [
            { ru: "{Ле́том} я на да́че.", es: "En verano estoy en la casa de campo.", por: "Sin в: ле́том." },
            { ru: "{Зимо́й} хо́лодно.", es: "En invierno hace frío.", por: "зима́ → зимо́й." },
            { ru: "{О́сенью} я чита́ю до́ма.", es: "En otoño leo en casa.", por: "о́сень → о́сенью, como ночь → но́чью." }],
          errores: [{ mal: "в ле́то", bien: "{ле́том}", por: "Las estaciones, como las partes del día, van sin в." }],
          mas: { texto: "Como у́тром y ве́чером, зимо́й, весно́й, ле́том y о́сенью vienen del instrumental y se usan como palabras propias. Las terminaciones se repiten: ле́том como у́тром; о́сенью como но́чью.\nEn Rusia el año escolar empieza en septiembre y las vacaciones largas son en verano: кани́кулы (de la escuela) ле́том.",
            ejemplos: [{ ru: "{Весно́й} я гуля́ю в па́рке.", es: "En primavera paseo por el parque.", por: "весна́ → весно́й." }] },
          chequeo: [{ pide: "«en otoño»", opciones: ["о́сенью", "в о́сени", "в о́сень"], ok: "о́сенью", por: "Sin preposición: о́сенью." }] },
        { id: "u7-cuando-tabla", titulo: "¿Cuándo? Todo junto",
          texto: "Cuatro maneras de decir cuándo:\nla hora → в + la hora: в семь часо́в\nlos días → в + acusativo: в сре́ду\nlos meses → в + prepositivo: в ма́е\nlos momentos del día y las estaciones → sin preposición: у́тром, ле́том",
          desarmar: { es: "El sábado por la mañana, a las nueve, desayuno en casa.", partes: [
            { txt: "В суббо́ту", rol: "qué día", nota: "в + acusativo: суббо́та → суббо́ту." },
            { txt: "у́тром", rol: "momento", nota: "Sin preposición." },
            { txt: "в де́вять часо́в", rol: "a qué hora", nota: "в + la hora." },
            { txt: "я", rol: "quién" },
            { txt: "за́втракаю", rol: "acción" },
            { txt: "до́ма", rol: "dónde" }] },
          destacado: "в семь часо́в · в сре́ду · в ма́е · у́тром · ле́том",
          mas: { texto: "Con los días y con ка́ждый, el acusativo dice «cuándo», como un punto: в сре́ду, ка́ждый день. Con los meses, el prepositivo dice «adentro de»: в ма́е. Las palabras como у́тром o ле́том no necesitan nada: ya dicen «cuándo» solas.",
            ejemplos: [{ ru: "{Ле́том}, {в ию́ле}, я на мо́ре.", es: "En verano, en julio, estoy en el mar.", por: "Estación sin в y mes con в + prepositivo." }] },
          chequeo: [
            { pide: "«el jueves»", opciones: ["в четве́рг", "в четверге́", "четверго́м"], ok: "в четве́рг", por: "Día: в + acusativo, igual que el nominativo." },
            { pide: "«en invierno»", opciones: ["зимо́й", "в зиме́"], ok: "зимо́й", por: "Estación: sin preposición." }] },
        { id: "u7-fiestas", titulo: "Fiestas y fechas",
          texto: "Пра́здник es la fiesta o el feriado. Algunas: Рождество́ (Navidad), Па́сха (Pascua) y la de Año Nuevo, нового́дний пра́здник. Пра́здновать es festejar. «Cumpleaños» se dice день рожде́ния, «día del nacimiento», y se aprende entero.",
          ejemplos: [
            { ru: "{Рождество́} в декабре́.", es: "Navidad es en diciembre.", por: "Sin verbo, como Я до́ма." },
            { ru: "Мой {день рожде́ния} в ма́е.", es: "Mi cumpleaños es en mayo.", por: "День рожде́ния, entero; el mes, en prepositivo." },
            { ru: "Мы {пра́зднуем} Рождество́ до́ма.", es: "Festejamos la Navidad en casa.", por: "пра́здновать → пра́зднуем: **-ова-** pasa a **-у-**." }],
          mas: { texto: "Para una fecha exacta («el 10 de septiembre») hacen falta los números ordinales, que llegan más adelante; por ahora alcanza con el mes. Да́та es «fecha»; календа́рь, «calendario»; сезо́н, «temporada»; полго́да, «medio año», y век, «siglo».\nКани́кулы, las vacaciones de la escuela o la facultad, existe solo en plural. Las del trabajo son о́тпуск.",
            ejemplos: [{ ru: "{Кани́кулы} ле́том.", es: "Las vacaciones (de la escuela) son en verano.", por: "Кани́кулы, siempre en plural." }] },
          chequeo: [{ pide: "«Mi cumpleaños es en julio».", opciones: ["Мой день рожде́ния в ию́ле.", "Мой день рожде́ния в ию́ль."], ok: "Мой день рожде́ния в ию́ле.", por: "El mes, en prepositivo." }] }
      ] },
    { id: "u7m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Frecuencia", resumen: "всегда́, обы́чно, ча́сто, иногда́, ре́дко, никогда́ · три ра́за в неде́лю.",
      intro: "Palabras para decir cada cuánto haces algo, de siempre a nunca, y cómo contar las veces.",
      secciones: [
        { id: "u7-frec-escala", titulo: "De más a menos",
          texto: "всегда́ (siempre)\nобы́чно (normalmente)\nча́сто (a menudo)\nиногда́ (a veces)\nре́дко (pocas veces)\nникогда́ (nunca)\nПочти́ («casi») suaviza las de los extremos: почти́ всегда́, почти́ никогда́.",
          ejemplos: [
            { ru: "Я {обы́чно} пью ко́фе у́тром.", es: "Normalmente tomo café por la mañana.", por: "Обы́чно: lo de casi todos los días." },
            { ru: "Я {ре́дко} гото́влю.", es: "Cocino pocas veces.", por: "Ре́дко: muy de vez en cuando." },
            { ru: "Я {почти́ всегда́} за́втракаю до́ма.", es: "Casi siempre desayuno en casa.", por: "Почти́ va delante de всегда́." }],
          mas: { texto: "Ежедне́вно («a diario») dice lo mismo que ка́ждый день, pero suena más formal: se lee en carteles y horarios. Постоя́нно («todo el tiempo») suele sonar a queja. Сно́ва es «otra vez»: Я сно́ва до́ма («estoy en casa otra vez»). Y обы́чный es el adjetivo de обы́чно: обы́чный день, «un día normal».",
            ejemplos: [
              { ru: "Он {постоя́нно} рабо́тает.", es: "Trabaja todo el tiempo.", por: "Постоя́нно: sin parar." },
              { ru: "Э́то {обы́чный} день.", es: "Es un día normal.", por: "Adjetivo: concuerda con день." }] },
          chequeo: [{ pide: "¿Qué palabra está entre ча́сто y ре́дко?", opciones: ["иногда́", "всегда́", "обы́чно"], ok: "иногда́", por: "A menudo → a veces → pocas veces." }] },
        { id: "u7-frec-lugar", titulo: "Antes del verbo",
          texto: "Las palabras de frecuencia van antes del verbo: Я обы́чно за́втракаю до́ма. También pueden abrir la frase, para destacarlas: Обы́чно я за́втракаю до́ма.",
          ejemplos: [
            { ru: "Я {ча́сто} хожу́ в кино́.", es: "Voy a menudo al cine.", por: "Antes del verbo." },
            { ru: "{Иногда́} я рабо́таю до́ма.", es: "A veces trabajo en casa.", por: "Al principio, para destacarla." }],
          destacado: "Я обы́чно пью ко́фе.",
          mas: { texto: "Ча́сто, всегда́ y обы́чно piden ходи́ть y е́здить, los verbos de lo habitual, y no идти́ ni е́хать: Я ча́сто хожу́ в кино́. Es la misma regla de «a pie o en vehículo, ahora o a menudo».",
            ejemplos: [{ ru: "Я {всегда́} е́зжу на рабо́ту.", es: "Siempre voy al trabajo (en vehículo).", por: "всегда́ → е́зжу, no е́ду." }] },
          chequeo: [{ pide: "«A veces leo por la noche».", opciones: ["Я иногда́ чита́ю ве́чером.", "Я чита́ю ве́чером иногда́ ве́чером."], ok: "Я иногда́ чита́ю ве́чером.", por: "La frecuencia, antes del verbo." }] },
        { id: "u7-nunca-ne", titulo: "Никогда́ … не",
          texto: "Con никогда́ el verbo lleva también не: Я никогда́ не за́втракаю. Lo mismo con почти́ никогда́. Las dos negaciones van juntas, delante del verbo.",
          ejemplos: [
            { ru: "Я никогда́ {не} гото́влю.", es: "Nunca cocino.", por: "никогда́ + не + verbo." },
            { ru: "Он почти́ никогда́ {не} гото́вит.", es: "Casi nunca cocina.", por: "Con почти́ никогда́, también не." }],
          errores: [{ mal: "Я никогда́ за́втракаю.", bien: "Я никогда́ {не} за́втракаю.", por: "Con никогда́ va también не." }],
          chequeo: [{ pide: "«Nunca miro la tele».", opciones: ["Я никогда́ не смотрю́ телеви́зор.", "Я никогда́ смотрю́ телеви́зор."], ok: "Я никогда́ не смотрю́ телеви́зор.", por: "Falta не en la otra." }] },
        { id: "u7-veces", titulo: "Cuántas veces: раз",
          antes: { pide: "оди́н раз · два ра́за. ¿Y пять?", opciones: ["пять раз", "пять ра́за"], ok: "пять раз", por: "Como con часо́в: de 5 en adelante, otra forma." },
          texto: "Раз es «vez», y se cuenta como час: оди́н раз, два ра́за (con 2, 3 y 4), пять раз (de 5 en adelante; esa forma no lleva terminación). Para «por día» o «por semana», в + acusativo: раз в день, два ра́за в неде́лю.",
          ejemplos: [
            { ru: "Я пью ко́фе {три ра́за} в день.", es: "Tomo café tres veces por día.", por: "3: ра́за." },
            { ru: "Я гуля́ю {раз в неде́лю}.", es: "Paseo una vez por semana.", por: "Para «una vez», alcanza con раз; неде́ля → неде́лю." },
            { ru: "Я хожу́ в бассе́йн {два ра́за} в неде́лю.", es: "Voy a la piscina dos veces por semana.", por: "2: ра́за." }],
          destacado: "раз · два ра́за · пять раз",
          errores: [{ mal: "пять ра́за", bien: "пять {раз}", por: "De 5 en adelante: раз, sin terminación." }],
          mas: { texto: "Ya son tres palabras con el mismo reparto: час, мину́та y раз. Siempre tres grupos: 1, de 2 a 4 y de 5 en adelante. Cuando aprendas una palabra nueva que se cuenta, vas a poder armar las tres formas.\nВ неде́лю y в день son el acusativo de «cuándo»: «por cada semana». Два́жды es «dos veces» en una sola palabra; suena más escrito.",
            ejemplos: [{ ru: "Я рабо́таю {пять раз} в неде́лю.", es: "Trabajo cinco veces por semana.", por: "5: раз." }] },
          chequeo: [{ pide: "«cuatro veces por día»", opciones: ["четы́ре ра́за в день", "четы́ре раз в день"], ok: "четы́ре ра́за в день", por: "Con 4: ра́за." }] }
      ] },
    { id: "u7m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Mi rutina", resumen: "Снача́ла я умыва́юсь, пото́м за́втракаю.",
      intro: "Los verbos de todos los días, para contar tu rutina de la mañana a la noche, en orden y con apuro.",
      secciones: [
        { titulo: "Los verbos del día",
          texto: "умыва́ться (lavarse la cara)\nчи́стить зу́бы (lavarse los dientes)\nбри́ться (afeitarse)\nпринима́ть душ (ducharse)\nодева́ться (vestirse)\nначина́ть рабо́тать (empezar a trabajar)\nзака́нчивать рабо́тать (terminar de trabajar)\nвозвраща́ться домо́й (volver a casa)\nмыть посу́ду (lavar los platos)\nстира́ть оде́жду (lavar la ropa)\nубира́ть кварти́ру (limpiar el apartamento)\nложи́ться спать (acostarse)\nзасыпа́ть (dormirse)" },
        { id: "u7-rutina-sya", titulo: "Lo que te haces a ti",
          texto: "Muchos verbos de la rutina terminan en **-ся**: умыва́ться, одева́ться, бри́ться. Ese **-ся** es «me», «te», «se»: la acción vuelve a quien la hace. Se conjuga el verbo y al final va **-сь** después de vocal y **-ся** después de consonante.",
          ejemplos: [
            { ru: "Я {умыва́юсь}.", es: "Me lavo la cara.", por: "Después de vocal (**ю**): **-сь**." },
            { ru: "Он {бре́ется}.", es: "Él se afeita.", por: "Después de consonante (**т**): **-ся**." },
            { ru: "Мы {одева́емся}.", es: "Nos vestimos.", por: "**одева́ем** + **-ся**." }],
          errores: [{ mal: "Я умыва́ю.", bien: "Я {умыва́юсь}.", por: "Sin **-сь** falta a quién se lava: «lavo». Con **-сь**, «me lavo»." }],
          mas: { texto: "Sin **-ся**, el verbo pide qué recibe la acción: мыть посу́ду («lavar los platos»). Por eso «lavarse los dientes» no lleva **-ся** en ruso: los dientes reciben la acción, чи́стить зу́бы («limpiar los dientes»).\nЧи́стить cambia la consonante en la forma de я, como гото́вить → гото́влю: чи́щу (**ст** → **щ**). Las otras formas no cambian: чи́стишь, чи́стит.",
            ejemplos: [{ ru: "Я {чи́щу} зу́бы.", es: "Me lavo los dientes.", por: "**ст** → **щ**, solo en la forma de я." }] },
          chequeo: [{ pide: "«Ella se viste».", opciones: ["Она́ одева́ется.", "Она́ одева́ться."], ok: "Она́ одева́ется.", por: "Vestirse: con **-ся**, conjugado." }] },
        { id: "u7-conectores", titulo: "En orden: снача́ла, пото́м, зате́м",
          texto: "Para contar la rutina en orden: снача́ла (primero), пото́м (después), зате́м (luego, un poco más formal) y сра́зу (enseguida). Van al principio de cada parte, y los verbos quedan en presente.",
          ejemplos: [
            { ru: "{Снача́ла} я умыва́юсь, {пото́м} за́втракаю.", es: "Primero me lavo la cara y después desayuno.", por: "Mismo «yo»: no se repite я." },
            { ru: "{Зате́м} я одева́юсь.", es: "Luego me visto.", por: "Зате́м = пото́м, más formal." },
            { ru: "Я встаю́ и {сра́зу} принима́ю душ.", es: "Me levanto y enseguida me ducho.", por: "Сра́зу: sin pausa." }],
          destacado: "снача́ла → пото́м → зате́м",
          mas: { texto: "Con и se unen dos acciones seguidas de la misma persona, sin repetir я: Я встаю́ и принима́ю душ. Para un relato más largo, cada paso puede ir en su frase, cada una con su conector.",
            ejemplos: [{ ru: "{Снача́ла} я встаю́. {Пото́м} я чи́щу зу́бы. {Зате́м} я одева́юсь.", es: "Primero me levanto. Después me lavo los dientes. Luego me visto.", por: "Tres pasos, un conector en cada uno." }] },
          chequeo: [{ pide: "¿Qué palabra abre la rutina?", opciones: ["снача́ла", "зате́м", "пото́м"], ok: "снача́ла", por: "Снача́ла = primero." }] },
        { id: "u7-frase-crece", titulo: "Agregar información",
          texto: "Una frase puede crecer sin cambiar lo que ya tiene. Cada respuesta a ¿cuándo?, ¿dónde? o ¿cada cuánto? es una pieza más.",
          ejemplos: [
            { ru: "Я просыпа́юсь.", es: "Me despierto.", por: "La base: quién y qué hace." },
            { ru: "Я просыпа́юсь {в семь часо́в}.", es: "Me despierto a las siete.", por: "+ ¿cuándo?" },
            { ru: "Я {обы́чно} просыпа́юсь в семь часо́в.", es: "Normalmente me despierto a las siete.", por: "+ ¿cada cuánto?, antes del verbo." },
            { ru: "Я обы́чно просыпа́юсь в семь часо́в {и за́втракаю до́ма}.", es: "Normalmente me despierto a las siete y desayuno en casa.", por: "+ otra acción, con и." }],
          truco: "¿Cuándo? ¿Dónde? ¿Cada cuánto? Cada respuesta es una pieza más." },
        { id: "u7-rano-tarde", titulo: "Temprano, tarde y con apuro",
          texto: "ра́но (temprano) y по́здно (tarde) van solos, sin sustantivo. Para el apuro: спеши́ть y торопи́ться (apurarse), опа́здывать (llegar tarde), успева́ть (llegar a tiempo) y бы́стро (rápido). Con un lugar, на o в + acusativo, como con идти́.",
          ejemplos: [
            { ru: "Я встаю́ {ра́но}.", es: "Me levanto temprano.", por: "ра́но, después del verbo." },
            { ru: "Я {опа́здываю} на рабо́ту.", es: "Llego tarde al trabajo.", por: "на + acusativo: adónde." },
            { ru: "Я {тороплю́сь}.", es: "Estoy apurado.", por: "**п** → **пл** en la forma de я, como люблю́." },
            { ru: "Я {бы́стро} за́втракаю.", es: "Desayuno rápido.", por: "бы́стро, antes del verbo." }],
          mas: { texto: "Спеши́ть y торопи́ться dicen lo mismo; торопи́ться es más común en la charla. Успева́ть es «llegar a tiempo» o «tener tiempo»: Я не успева́ю за́втракать («no llego a desayunar»).\nУстава́ть es «cansarse»: Ве́чером я устаю́ («por la noche me canso»), con la misma raíz que встава́ть (встаю́ → устаю́). Уста́лый es el adjetivo: уста́лый па́па.",
            ejemplos: [{ ru: "Ве́чером я {устаю́}.", es: "Por la noche me canso.", por: "устава́ть → устаю́, como встава́ть → встаю́." }] },
          chequeo: [{ pide: "«Llego tarde a clase».", opciones: ["Я опа́здываю на уро́к.", "Я опа́здываю на уро́ке."], ok: "Я опа́здываю на уро́к.", por: "Adónde: на + acusativo." }] }
      ] },
    { id: "u7m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "Horarios", resumen: "Во ско́лько? · Уро́к начина́ется в де́вять.",
      intro: "Para preguntar a qué hora pasa algo, cuándo empieza y termina, y cuándo llegas o te vas.",
      secciones: [
        { id: "u7-a-que-hora", titulo: "¿A qué hora? Во ско́лько?",
          texto: "Во ско́лько? es «¿a qué hora?». La respuesta, в + la hora: Во ско́лько ты обе́даешь? — В час.",
          ejemplos: [
            { ru: "— {Во ско́лько} ты обе́даешь? — В час.", es: "—¿A qué hora almuerzas? —A la una.", por: "Se contesta con в + la hora." },
            { ru: "— {Во ско́лько} ты рабо́таешь? — В де́вять часо́в.", es: "—¿A qué hora trabajas? —A las nueve.", por: "La misma pregunta para cualquier acción." }],
          destacado: "Во ско́лько? — В де́вять часо́в.",
          errores: [{ mal: "В ско́лько ты обе́даешь?", bien: "{Во} ско́лько ты обе́даешь?", por: "Se dice во ско́лько: con la **о**, como во вто́рник." }],
          mas: { texto: "Ско́лько es «cuánto». Во ско́лько es, literalmente, «¿en cuánto?»: en qué número del reloj. Para contestar, alcanza con la hora: В семь. La frase entera también vale: Я обе́даю в час.",
            ejemplos: [{ ru: "— Во ско́лько ты встаёшь? — {В семь}.", es: "—¿A qué hora te levantas? —A las siete.", por: "La respuesta corta, sin часо́в, es muy común." }] },
          chequeo: [{ pide: "«¿A qué hora cenas?»", opciones: ["Во ско́лько ты у́жинаешь?", "Ско́лько ты у́жинаешь?"], ok: "Во ско́лько ты у́жинаешь?", por: "«A qué hora»: во ско́лько." }] },
        { id: "u7-empezar", titulo: "Empezar y terminar: quién o qué",
          texto: "Начина́ть y зака́нчивать llevan a alguien que empieza algo: Я начина́ю рабо́тать в де́вять часо́в. Cuando lo que empieza es una cosa (la clase, la película, el trabajo), el verbo lleva **-ся**: Уро́к начина́ется в де́вять часо́в. Para las cosas, «terminar» es конча́ться, y «abrir», открыва́ться.",
          ejemplos: [
            { ru: "Я {начина́ю} рабо́тать в де́вять.", es: "Empiezo a trabajar a las nueve.", por: "Una persona empieza algo." },
            { ru: "Уро́к {начина́ется} в де́вять часо́в.", es: "La clase empieza a las nueve.", por: "La clase empieza sola: **-ся**." },
            { ru: "Фильм {конча́ется} в оди́ннадцать.", es: "La película termina a las once.", por: "конча́ться, para las cosas." },
            { ru: "Магази́н {открыва́ется} в во́семь часо́в.", es: "El negocio abre a las ocho.", por: "En ruso, el negocio «se abre»." }],
          errores: [{ mal: "Уро́к начина́ет в де́вять.", bien: "Уро́к {начина́ется} в де́вять.", por: "La clase no empieza algo: empieza ella, con **-ся**." }],
          mas: { texto: "Es el mismo **-ся** de умыва́ться: la acción vuelve sobre quien la hace. Una persona empieza (начина́ет) algo; una cosa «se empieza» (начина́ется).\nDespués de начина́ть y зака́нчивать va el infinitivo: начина́ю рабо́тать, зака́нчиваю чита́ть.",
            ejemplos: [{ ru: "Рабо́та {начина́ется} в де́вять, а я {начина́ю} в во́семь.", es: "El trabajo empieza a las nueve, pero yo empiezo a las ocho.", por: "Una cosa con **-ся**; una persona, sin." }] },
          chequeo: [{ pide: "«La película empieza a las ocho».", opciones: ["Фильм начина́ется в во́семь.", "Фильм начина́ет в во́семь."], ok: "Фильм начина́ется в во́семь.", por: "Una cosa: con **-ся**." }] },
        { id: "u7-horario", titulo: "Llegar, irse y la pausa",
          texto: "Приходи́ть es llegar a un lugar y уходи́ть, irse; los dos, a pie y con в o на + acusativo, como идти́. Расписа́ние es el horario; переры́в, la pausa; заня́тие, una clase de un curso, y рабо́чий день, el día de trabajo.",
          ejemplos: [
            { ru: "Я {прихожу́} на рабо́ту в де́вять часо́в.", es: "Llego al trabajo a las nueve.", por: "**д** → **ж** en la forma de я, como хожу́." },
            { ru: "Я {ухожу́} домо́й в шесть.", es: "Me voy a casa a las seis.", por: "уходи́ть: irse." },
            { ru: "{Переры́в} — пятна́дцать мину́т.", es: "La pausa es de quince minutos.", por: "Cuánto dura: con 15, мину́т." },
            { ru: "Мой {рабо́чий} день начина́ется в де́вять.", es: "Mi día de trabajo empieza a las nueve.", por: "Adjetivo: concuerda con день." }],
          mas: { texto: "Приходи́ть y уходи́ть son ходи́ть con un prefijo adelante: **при-** es «llegar» y **у-**, «irse». Se conjugan igual que ходи́ть: прихожу́, прихо́дишь, прихо́дит. Más adelante vas a ver más verbos con prefijo." },
          chequeo: [{ pide: "«Llego a casa a las siete».", opciones: ["Я прихожу́ домо́й в семь.", "Я ухожу́ домо́й в семь."], ok: "Я прихожу́ домо́й в семь.", por: "Llegar: приходи́ть." }] },
        { id: "u7-libre", titulo: "Libre u ocupado",
          texto: "«Estoy ocupado» y «estoy libre» se dicen con una forma corta del adjetivo, que cambia según quién habla: Я за́нят (un hombre) / Я занята́ (una mujer); Я свобо́ден / Я свобо́дна. Las formas largas, за́нятый y свобо́дный, van con un sustantivo: свобо́дный день.",
          ejemplos: [
            { ru: "Сего́дня я {за́нят}.", es: "Hoy estoy ocupado (habla un hombre).", por: "Forma corta, masculina." },
            { ru: "За́втра я {свобо́дна}.", es: "Mañana estoy libre (habla una mujer).", por: "Forma corta, femenina: **-а**." },
            { ru: "Суббо́та — {свобо́дный} день.", es: "El sábado es un día libre.", por: "Con un sustantivo, la forma larga." }],
          mas: { texto: "Las formas cortas dicen cómo está alguien ahora, y no cambian de caso. En занята́ el acento pasa al final. En la de hombre, свобо́ден, aparece una **е** que no está en las otras: свобо́ден, свобо́дна." },
          chequeo: [{ pide: "Una mujer dice: «Hoy estoy ocupada».", opciones: ["Сего́дня я занята́.", "Сего́дня я за́нят."], ok: "Сего́дня я занята́.", por: "Mujer: занята́." }] }
      ] },
    { id: "u7m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Planes y tiempo libre", resumen: "За́втра я рабо́таю · Я игра́ю в те́ннис.",
      intro: "Para hablar de planes cercanos no hace falta el futuro: alcanza con el presente y un día, como en español («mañana trabajo»). Y lo que haces en tu tiempo libre.",
      secciones: [
        { id: "u7-presente-planes", titulo: "Presente para planes",
          texto: "Con за́втра, ве́чером o un día de la semana, el presente ya habla de un plan cercano: За́втра я рабо́таю («mañana trabajo»).",
          ejemplos: [
            { ru: "{За́втра} я рабо́таю.", es: "Mañana trabajo.", por: "Presente + за́втра: un plan." },
            { ru: "{В суббо́ту} я иду́ в рестора́н.", es: "El sábado voy al restaurante.", por: "иду́ sirve para «ahora» y para un plan." },
            { ru: "{Ве́чером} я до́ма.", es: "Por la noche estoy en casa.", por: "Sin verbo, como siempre en presente." }],
          mas: { texto: "План es «plan»; встре́ча, una reunión o un encuentro; о́тпуск, las vacaciones del trabajo, y выходно́й, el día libre: Сего́дня выходно́й («hoy es mi día libre»). Para planes más lejanos el ruso tiene un futuro propio, que llega más adelante." },
          chequeo: [{ pide: "«El viernes voy al cine».", opciones: ["В пя́тницу я иду́ в кино́.", "В пя́тнице я иду́ в кино́."], ok: "В пя́тницу я иду́ в кино́.", por: "Día: в + acusativo." }] },
        { id: "u7-jugar", titulo: "Jugar y tocar: игра́ть",
          texto: "Игра́ть es «jugar» y también «tocar» un instrumento, con dos construcciones: un juego o un deporte va con в + acusativo (игра́ть в те́ннис, в футбо́л, в ша́хматы); un instrumento, con на + prepositivo (игра́ть на гита́ре, на пиани́но).",
          ejemplos: [
            { ru: "Я игра́ю {в те́ннис}.", es: "Juego al tenis.", por: "Deporte: в + acusativo." },
            { ru: "Мы игра́ем {в ша́хматы}.", es: "Jugamos al ajedrez.", por: "Juego: в + acusativo." },
            { ru: "Она́ игра́ет {на гита́ре}.", es: "Ella toca la guitarra.", por: "Instrumento: на + prepositivo." },
            { ru: "Он игра́ет {на пиани́но}.", es: "Él toca el piano.", por: "пиани́но no cambia." }],
          errores: [
            { mal: "Я игра́ю футбо́л.", bien: "Я игра́ю {в футбо́л}.", por: "Un deporte va con в." },
            { mal: "Я игра́ю в гита́ру.", bien: "Я игра́ю {на гита́ре}.", por: "Un instrumento va con на + prepositivo." }],
          mas: { texto: "Una imagen para recordarlo: el juego es un espacio donde entras (в + acusativo, adónde); el instrumento, algo sobre lo que tocas (на + prepositivo, dónde). Ша́хматы existe solo en plural, como кани́кулы.",
            ejemplos: [{ ru: "Ле́том я игра́ю {в футбо́л}, а зимо́й {на гита́ре}.", es: "En verano juego al fútbol y en invierno toco la guitarra.", por: "Las dos construcciones en una frase." }] },
          chequeo: [{ pide: "«Toco el piano».", opciones: ["Я игра́ю на пиани́но.", "Я игра́ю в пиани́но."], ok: "Я игра́ю на пиани́но.", por: "Instrumento: на." }] },
        { titulo: "Más para el tiempo libre",
          texto: "о́тдых (el descanso), прогу́лка (el paseo), трениро́вка (el entrenamiento), игра́ (el juego), та́нец (el baile), ра́дио, но́вость (la noticia; en plural, но́вости, las noticias), програ́мма (el programa), се́рия (el episodio), спорти́вный (deportivo), весёлый (divertido), вме́сте (juntos) y скуча́ть (aburrirse).",
          ejemplos: [
            { ru: "Ве́чером я смотрю́ {но́вости}.", es: "Por la noche miro las noticias.", por: "но́вость → но́вости, en plural." },
            { ru: "Мы гуля́ем {вме́сте}.", es: "Paseamos juntos.", por: "вме́сте, después del verbo." },
            { ru: "Я слу́шаю {ра́дио}.", es: "Escucho la radio.", por: "ра́дио no cambia." }] }
      ] },
    { id: "u7m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Mi semana", resumen: "В понеде́льник я рабо́таю…",
      intro: "Una semana entera, día por día. Primero mira la agenda de Ana y después arma la tuya en el proyecto.",
      secciones: [
        { id: "u7-agenda", titulo: "De la agenda a la frase",
          texto: "En una agenda alcanza con el día y una palabra. Para contarlo, el día pasa a в + acusativo y la palabra se vuelve una acción.",
          ejemplos: [
            { ru: "Понеде́льник — рабо́та → {В понеде́льник} я рабо́таю.", es: "Lunes — trabajo → El lunes trabajo.", por: "понеде́льник no cambia." },
            { ru: "Вто́рник — ру́сский → {Во вто́рник} я изуча́ю ру́сский.", es: "Martes — ruso → El martes estudio ruso.", por: "во вто́рник." },
            { ru: "Среда́ — парк → {В сре́ду} я хожу́ в парк.", es: "Miércoles — parque → El miércoles voy al parque.", por: "среда́ → сре́ду; хожу́, porque es habitual." }],
          mas: { texto: "Para que la semana suene más tuya, suma frecuencia y horas: Ка́ждую суббо́ту я игра́ю в те́ннис. В воскресе́нье я обы́чно до́ма. Las piezas de toda la unidad entran en la misma frase.",
            ejemplos: [{ ru: "{Ка́ждую суббо́ту} в де́сять часо́в я игра́ю в те́ннис.", es: "Todos los sábados a las diez juego al tenis.", por: "Cada cuánto, a qué hora y qué." }] },
          chequeo: [{ pide: "Пя́тница — кино́ →", opciones: ["В пя́тницу я иду́ в кино́.", "Пя́тница я иду́ в кино́."], ok: "В пя́тницу я иду́ в кино́.", por: "Para contarlo: в + acusativo." }] },
        { titulo: "Antes de seguir: los verbos tienen pareja",
          texto: "Todos los verbos que usaste hasta ahora hablan de una acción en curso o que se repite: рабо́таю, за́втракаю, чита́ю. En presente no hace falta nada más.\nPero muchos verbos rusos tienen un compañero, casi igual, que dice que una acción terminó y dio un resultado. En presente no aparece, por eso todavía no lo viste. Lo vas a conocer apenas el ruso empiece a hablar del pasado y del futuro: es una de las ideas centrales del idioma.",
          destacado: "Presente: una sola forma. Pasado y futuro: un verbo y su pareja." }
      ] },
    { id: "u7m10", n: 10, tipo: "lectura", titulo: "Un día completo", resumen: "De la mañana a la noche.",
      intro: "Dos textos con todo lo de la unidad: un día y una semana. Léelos, escúchalos y contesta." },
    { id: "u7m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Моя неде́ля", resumen: "Tu semana: agenda y texto.",
      intro: "Primero completa tu agenda: qué haces cada día. Después escribe un texto sobre tu semana, con días, horarios y cada cuánto haces las cosas. Por ejemplo: В понеде́льник я рабо́таю. Я начина́ю рабо́тать в де́вять часо́в. Во вто́рник я изуча́ю ру́сский. В суббо́ту я обы́чно отдыха́ю. Я никогда́ не рабо́таю в воскресе́нье.",
      requisitos: [], consejos: [] },
    { id: "u7m12", n: 12, tipo: "examen", titulo: "Evaluación", resumen: "Hora, calendario, frecuencia, rutina, traducción y audio.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Hora", tipos: ["hora-escribir", "hora-elegir", "hora-forma"], n: 6 },
        { nombre: "Calendario", tipos: ["dia", "dia-escribir", "mes-escribir"], n: 6 },
        { nombre: "Frecuencia", tipos: ["frec", "nunca"], n: 5 },
        { nombre: "Rutina", tipos: ["rutina", "progresiva", "momento"], n: 5 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 6 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};

/* Palabras de una letra (в, и…) como palabra, sin negrita ({в}); las terminaciones con guion quedan como letras */
function u7Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_7.modulos.forEach(m => {
  if (m.intro) m.intro = u7Palabras(m.intro);
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (10/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u7Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u7Palabras(o.por); if (o && o.pide) o.pide = u7Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u7Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u7Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad7Modulo(id) { return UNIDAD_7.modulos.find(m => m.id === id) || null; }

const U7_MEZCLA = { "hora-escribir": 3, "hora-elegir": 1, "hora-forma": 1, numero: 1, momento: 2, dia: 1, "dia-escribir": 2, "mes-escribir": 2, frec: 2, nunca: 1,
  rutina: 2, progresiva: 2, ordenar: 1, conjugar: 1, "conjugar-escribir": 2, horario: 2, "es-ru": 3, dictado: 3, emparejar: 1, significado: 1, "palabra-es-ru": 1, agenda: 2, lectura: 2, "lectura-vf": 1 ,
  /* Tipos nuevos (10/10/2026): entender la regla, ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1, desarmar: 1 };

/* ── Datos ─────────────────────────────────────────────────── */
function u7Datos() {
  if (u7Datos.cache) return u7Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => ac.indexOf("CMR-") === 0 ? lexComerById(ac) : ((porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null);
  const cz = casosById(lex("час", "sustantivo").id);
  const hora = n => n === 1 ? "час" : U7_NUM[n] + " " + (n <= 4 ? cz.conteo : cz.pl[1]);
  const dias = U7_DIAS.map(([ru, es]) => { const e = lex(ru, "sustantivo"), c = casosById(e.id); return { id: e.id, nom: c.sg[0], acc: c.sg[3], es, pr: sin(c.sg[3]).indexOf("вт") === 0 ? "во" : "в" }; });
  const meses = U7_MESES.map(([ru, es]) => { const e = lex(ru, "sustantivo"), c = casosById(e.id); return { id: e.id, nom: c.sg[0], prep: c.sg[5], es }; });
  const verb = {};
  Object.keys(U7_ACT).concat(["ходи́ть", "идти́", "отдыха́ть", "чита́ть", "пить", "гото́вить", "гуля́ть"]).forEach(k => {
    const ru = U7_ACT[k] ? U7_ACT[k][0] : k;
    const e = lex(ru, "verbo"), v = e && verboById(e.id); if (v && v.presente) verb[sin(ru)] = { id: e.id, ac: e.acento, f: v.presente };
  });
  return (u7Datos.cache = { sin, lex, hora, dias, meses, verb });
}
/* «a las siete» y la hora rusa con в: «в семь часо́в» (y «de la mañana / de la noche» si hace falta) */
function u7Es(n, parte) {
  const base = n === 1 ? "a la una" : "a las " + U7_NUM_ES[n];
  return base + (parte === "у" ? " de la mañana" : parte === "в" ? (n <= 7 ? " de la tarde" : " de la noche") : "");
}
function u7Ru(n, parte) { const { hora } = u7Datos(); return "в " + hora(n) + (parte === "у" ? " утра́" : parte === "в" ? " ве́чера" : ""); }
function u7Reloj(n) { return String.fromCodePoint(0x1F54F + n); }   /* 🕐 … 🕛 */
function u7ReglaHora(n) {
  const { hora } = u7Datos();
  return "**" + hora(n) + "**: " + (n === 1 ? "la una es час, sin número." : n <= 4 ? "con 2, 3 y 4 va часа́." : "de 5 a 12 va часо́в.");
}

function ejerciciosUnidad7() {
  const { sin, lex, hora, dias, meses, verb } = u7Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?]/g, "");
  const SUJ = [["Я", "", 0], ["Ты", "Tú", 1], ["Он", "Él", 2], ["Она́", "Ella", 2], ["Мы", "", 3], ["Они́", "Ellos", 5]];
  const esP = i => [0, 1, 2, 3, 4, 4][i];
  const actRu = (k, i) => { const a = U7_ACT[k], v = verb[sin(a[0])]; return v.f[i] + (a[1] ? " " + a[1] : ""); };

  /* ── Módulo 1: la hora ── */
  for (let n = 1; n <= 12; n++) {
    const ru = cap(hora(n)) + ".", dig = (n < 10 ? "0" : "") + n + ":00", es = n === 1 ? "Es la una." : "Son las " + U7_NUM_ES[n] + ".";
    const base = { grupo: "H-" + n, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-hw-" + n, tipo: "hora-escribir", forma: "escribir", dificultad: 2, modulo: 1, pide: "Кото́рый час? Escribe la hora en ruso.", grande: u7Reloj(n) + "  " + dig,
      audio: ru, audioManual: true, esperadas: [ru, "Сейча́с " + hora(n) + "."].concat(n === 1 ? ["Оди́н час.", "Сейча́с оди́н час."] : []), idioma: "ru", explicacion: u7ReglaHora(n) + " " + es }, base));
    out.push(Object.assign({ id: "U7-ha-" + n, tipo: "hora-elegir", forma: "elegir", dificultad: 1, modulo: 1, pide: "Escucha: ¿qué hora es?", audio: ru,
      opciones: baraja([dig].concat(baraja([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(x => x !== n), n).slice(0, 3).map(x => (x < 10 ? "0" : "") + x + ":00")), n), correcta: dig, explicacion: ru + " = " + dig }, base));
    if (n !== 1 && n !== 3) out.push(Object.assign({ id: "U7-hf-" + n, tipo: "hora-forma", forma: "elegir", dificultad: 2, modulo: 1, pide: "Completa la hora.", grande: U7_NUM[n] + " _____",
      opciones: ["час", "часа́", "часо́в"], correcta: n <= 4 ? "часа́" : "часо́в", explicacion: u7ReglaHora(n) }, base));
    out.push(Object.assign({ id: "U7-hesru-" + n, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 1, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru, "Сейча́с " + hora(n) + "."], idioma: "ru", explicacion: u7ReglaHora(n) }, base));
    if (n !== 3) {
      const e = lex(U7_NUM[n]);
      out.push({ id: "U7-num-" + n, tipo: "numero", forma: "escribir", dificultad: 2, modulo: 1, grupo: "N-" + n, items: e ? ["lex:" + e.id] : [], pide: "Escribe el número en ruso: " + n, audio: U7_NUM[n], audioManual: true,
        esperadas: [U7_NUM[n]], idioma: "ru", explicacion: n + " = " + U7_NUM[n] });
    }
  }
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]].forEach((g, j) => out.push({ id: "U7-numemp-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 1, grupo: "NE-" + j, items: [],
    audioIzq: true, pista: "Toca ▶ para escuchar y después el número.", pide: "Escucha cada número y une con su cifra.", pares: g.map(n => [U7_NUM[n], String(n)]), explicacion: g.map(n => n + " = " + U7_NUM[n]).join(" · ") }));

  /* ── Módulo 2: partes del día, утра́ / ве́чера ── */
  U7_PARTES.forEach(([nom, es, adv, esAdv], j) => {
    const e = lex(nom, "sustantivo"), base = { grupo: "P-" + j, items: e ? ["lex:" + e.id] : [], oir: adv };
    out.push(Object.assign({ id: "U7-pmo-" + j, tipo: "momento", forma: "elegir", dificultad: 1, modulo: 2, pide: "¿Cómo se dice «" + esAdv + "»?", opciones: baraja(U7_PARTES.map(x => x[2]), j), correcta: adv,
      explicacion: nom + " (" + es + ") → **" + adv + "** (" + esAdv + ")" }, base));
    out.push(Object.assign({ id: "U7-pmw-" + j, tipo: "momento", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribe en ruso: «" + esAdv + "»", audio: adv, audioManual: true, esperadas: [adv], idioma: "ru",
      explicacion: nom + " → " + adv }, base));
  });
  [[7, "у"], [8, "у"], [9, "у"], [11, "у"], [6, "в"], [7, "в"], [8, "в"], [10, "в"]].forEach(([n, p], j) => {
    const ru = cap(u7Ru(n, p)) + ".", es = cap(u7Es(n, p)) + ".";
    const base = { grupo: "UV-" + j, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-uv-" + j, tipo: "hora-escribir", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "**" + (p === "у" ? "утра́" : "ве́чера") + "** va así, como fórmula: " + ru }, base));
    out.push(Object.assign({ id: "U7-uve-" + j, tipo: "momento", forma: "elegir", dificultad: 2, modulo: 2, pide: "Completa: «" + es + "»", grande: "в " + hora(n) + " _____",
      opciones: p === "у" ? ["утра́", "у́тром"] : ["ве́чера", "ве́чером"], correcta: p === "у" ? "утра́" : "ве́чера",
      explicacion: "Con la hora va **" + (p === "у" ? "утра́" : "ве́чера") + "**; " + (p === "у" ? "у́тром" : "ве́чером") + " es «" + (p === "у" ? "por la mañana" : "por la noche") + "», sin hora." }, base));
  });
  /* Cambiar el momento: Я рабо́таю у́тром → ве́чером */
  ["trab", "des", "est", "cen", "peli"].filter(k => U7_ACT[k] && verb[sin(U7_ACT[k][0])]).forEach((k, j) => {
    const [a, b] = j % 2 ? ["у́тром", "ве́чером"] : ["ве́чером", "днём"];
    const ru1 = "Я " + actRu(k, 0) + " " + a + ".", ru2 = "Я " + actRu(k, 0) + " " + b + ".";
    out.push({ id: "U7-mom-" + j, tipo: "momento", forma: "escribir", dificultad: 2, modulo: 6, grupo: "MO-" + j, items: [], oir: ru2, pide: "Cambia el momento: " + b + ".", grande: ru1, audio: ru2, audioManual: true,
      esperadas: [ru2, "Я " + b + " " + actRu(k, 0) + ".", cap(b) + " я " + actRu(k, 0) + "."], idioma: "ru", explicacion: "Cambia solo la palabra del momento: " + ru2 });
  });

  /* ── Módulo 3: días ── */
  dias.forEach((d, j) => {
    const base = { grupo: "D-" + d.id, items: ["lex:" + d.id], oir: d.pr + " " + d.acc };
    const sig = dias[(j + 1) % 7];
    out.push(Object.assign({ id: "U7-dsig-" + d.id, tipo: "dia", forma: "elegir", dificultad: 1, modulo: 3, pide: "¿Qué día es?", grande: d.nom, audio: d.nom,
      opciones: baraja([d.es].concat(baraja(dias.filter(x => x !== d).map(x => x.es), j).slice(0, 3)), j), correcta: d.es, explicacion: d.nom + " — " + d.es }, base));
    out.push(Object.assign({ id: "U7-dw-" + d.id, tipo: "dia-escribir", forma: "escribir", dificultad: 2, modulo: 3, pide: "Escribe en ruso: «el " + d.es + "» (cuándo).", audio: d.pr + " " + d.acc, audioManual: true,
      esperadas: [d.pr + " " + d.acc], idioma: "ru", explicacion: "**" + d.nom + " → " + d.pr + " " + d.acc + "**: " + (d.nom === d.acc ? "en acusativo queda igual." : "en acusativo -а → -у.") + (d.pr === "во" ? " Con вто́рник va во." : "") }, base));
    out.push(Object.assign({ id: "U7-dsg-" + d.id, tipo: "dia", forma: "elegir", dificultad: 2, modulo: 3, pide: "Сего́дня " + d.nom + ". ¿Qué día es mañana?", audio: "Сего́дня " + d.nom + ".",
      opciones: baraja([sig.nom].concat(baraja(dias.filter(x => x !== sig && x !== d).map(x => x.nom), j + 1).slice(0, 2)), j + 2), correcta: sig.nom, explicacion: "Сего́дня " + d.nom + ", за́втра " + sig.nom + "." }, base));
    out.push(Object.assign({ id: "U7-dpr-" + d.id, tipo: "dia", forma: "elegir", dificultad: 2, modulo: 3, pide: "Completa: «el " + d.es + "»", grande: "_____ " + d.acc,
      opciones: ["в", "во"], correcta: d.pr, explicacion: d.pr === "во" ? "**во** вто́рник: «в **вт**» es difícil de decir." : "**в** " + d.acc + "." }, base));
    out.push(Object.assign({ id: "U7-ddic-" + d.id, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 3, pide: "Escucha y escribe.", audio: "Сего́дня " + d.nom + ".", esperadas: ["Сего́дня " + d.nom + "."], idioma: "ru",
      explicacion: "Сего́дня " + d.nom + ". — Hoy es " + d.es + "." }, base));
  });

  /* ── Módulo 4: meses ── */
  meses.forEach((m, j) => {
    const base = { grupo: "M-" + m.id, items: ["lex:" + m.id], oir: "в " + m.prep };
    out.push(Object.assign({ id: "U7-msig-" + m.id, tipo: "dia", forma: "elegir", dificultad: 1, modulo: 4, pide: "¿Qué mes es?", grande: m.nom, audio: m.nom,
      opciones: baraja([m.es].concat(baraja(meses.filter(x => x !== m).map(x => x.es), j).slice(0, 3)), j), correcta: m.es, explicacion: m.nom + " — " + m.es }, base));
    out.push(Object.assign({ id: "U7-mw-" + m.id, tipo: "mes-escribir", forma: "escribir", dificultad: 2, modulo: 4, pide: "Escribe en ruso: «en " + m.es + "».", audio: "в " + m.prep, audioManual: true,
      esperadas: ["в " + m.prep], idioma: "ru", explicacion: "**" + m.nom + " → в " + m.prep + "**: los meses van en prepositivo." }, base));
  });
  [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].forEach((g, j) => out.push({ id: "U7-memp-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 4, grupo: "ME-" + j, items: g.map(k => "lex:" + meses[k].id),
    pide: "Une cada mes con su nombre en español.", pares: g.map(k => [meses[k].nom, meses[k].es]), explicacion: g.map(k => meses[k].nom + " = " + meses[k].es).join(" · ") }));
  [[7, "Мой о́тпуск в а́вгусте.", "Mis vacaciones son en agosto."], [0, "Мой о́тпуск в январе́.", "Mis vacaciones son en enero."], [4, "Мой пра́здник в ма́е.", null]].forEach(([k, ru, es], j) => {
    if (!es) return;
    out.push({ id: "U7-otp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "OT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " **" + meses[k].nom + " → в " + meses[k].prep + "**." });
  });

  /* ── Módulo 5: frecuencia ── */
  const habitos = [["пить", "ко́фе", ["tomo café", "tomas café", "toma café", "tomamos café", "toman café"]], ["гото́вить", "", ["cocino", "cocinas", "cocina", "cocinamos", "cocinan"]],
    ["гуля́ть", "", ["paseo", "paseas", "pasea", "paseamos", "pasean"]], ["чита́ть", "", ["leo", "lees", "lee", "leemos", "leen"]], ["за́втракать", "", ["desayuno", "desayunas", "desayuna", "desayunamos", "desayunan"]],
    ["рабо́тать", "у́тром", ["trabajo por la mañana", "trabajas por la mañana", "trabaja por la mañana", "trabajamos por la mañana", "trabajan por la mañana"]]];
  Object.keys(U7_FREC).forEach((adv, a) => habitos.forEach(([vk, extra, es], j) => {
    if ((a + j) % 2) return;
    const v = verb[sin(vk)]; if (!v) return;
    const s = SUJ[(a + j) % SUJ.length], i = s[2], neg = adv === "никогда́" ? "не " : "";
    const ru = s[0] + " " + adv + " " + neg + v.f[i] + (extra ? " " + extra : "") + ".";
    const esF = cap(((s[1] ? s[1] + " " : "") + U7_FREC[adv] + " " + es[esP(i)]).trim()) + ".";
    const base = { grupo: "F-" + a + "-" + j, items: ["lex:" + v.id], oir: ru };
    out.push(Object.assign({ id: "U7-fesru-" + a + "-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribe en ruso: «" + esF + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(i === 0 || i === 1 ? [cap(adv) + " " + neg + v.f[i] + (extra ? " " + extra : "") + "."] : []), idioma: "ru",
      explicacion: "**" + adv + "** = " + U7_FREC[adv] + ", antes del verbo" + (neg ? ", y con никогда́ va не" : "") + ". " + ru }, base));
    out.push(Object.assign({ id: "U7-fel-" + a + "-" + j, tipo: "frec", forma: "elegir", dificultad: 1, modulo: 5, pide: "Completa: «" + esF + "»", grande: s[0] + " _____ " + neg + v.f[i] + (extra ? " " + extra : "") + ".",
      opciones: baraja([adv].concat(baraja(Object.keys(U7_FREC).filter(x => x !== adv && x !== "никогда́"), a + j).slice(0, 2)), a + j), correcta: adv, explicacion: "**" + adv + "** = " + U7_FREC[adv] + ". " + ru }, base));
  }));
  habitos.slice(0, 5).forEach(([vk, extra, es], j) => {
    const v = verb[sin(vk)]; if (!v) return;
    const bien = "Я никогда́ не " + v.f[0] + (extra ? " " + extra : "") + ".", mal = "Я никогда́ " + v.f[0] + (extra ? " " + extra : "") + ".";
    out.push({ id: "U7-nunca-" + j, tipo: "nunca", forma: "elegir", dificultad: 2, modulo: 5, grupo: "NU-" + j, items: ["lex:" + v.id], oir: bien, pide: "¿Cuál está bien?", opciones: baraja([bien, mal], j), correcta: bien,
      explicacion: "Con никогда́ también va **не**: " + bien });
  });

  /* ── Módulo 6: rutina (conjugación de los verbos nuevos, frases con hora, línea del día) ── */
  ["ini", "fin", "acost", "ducha"].forEach(k => {
    const a = U7_ACT[k], v = verb[sin(a[0])]; if (!v) return;
    const PL = ["я", "ты", "он / она́", "мы", "вы", "они́"], pR = ["Я", "Ты", "Он", "Мы", "Вы", "Они́"];
    v.f.forEach((f, i) => out.push({ id: "U7-conjw-" + v.id + "-" + i, tipo: "conjugar-escribir", forma: "escribir", dificultad: 2, modulo: 6, grupo: v.id + "-" + i, items: ["lex:" + v.id],
      pide: "Escribe la forma del verbo.", grande: PL[i] + " + " + v.ac, audio: pR[i] + " " + f, audioManual: true, esperadas: [f, pR[i] + " " + f], idioma: "ru", explicacion: "**" + v.ac + " → " + PL[i] + " " + f + "**" }));
  });
  Object.keys(U7_ACT).forEach((k, j) => {
    const a = U7_ACT[k], v = verb[sin(a[0])]; if (!v) return;
    const s = SUJ[j % SUJ.length], i = s[2];
    const ru = s[0] + " " + actRu(k, i) + " " + u7Ru(a[4], a[5]) + ".", es = cap(((s[1] ? s[1] + " " : "") + a[2][esP(i)] + " " + u7Es(a[4], a[5])).trim()) + ".";
    const base = { grupo: "R-" + k, items: ["lex:" + v.id], oir: ru };
    out.push(Object.assign({ id: "U7-resru-" + k, tipo: "rutina", forma: "escribir", dificultad: 3, modulo: 6, pide: a[3] + " Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru, s[0] + " " + actRu(k, i) + " " + u7Ru(a[4], "") + "."].concat(i <= 1 ? [cap(actRu(k, i)) + " " + u7Ru(a[4], a[5]) + "."] : []), idioma: "ru", explicacion: ru + " " + u7ReglaHora(a[4]) }, base));
    out.push(Object.assign({ id: "U7-rcomp-" + k, tipo: "rutina", forma: "escribir", dificultad: 2, modulo: 6, pide: "Completa con «" + v.ac + "».", grande: s[0] + " _____" + (a[1] ? " " + a[1] : "") + " " + u7Ru(a[4], a[5]) + ".",
      pista: es, audio: ru, audioManual: true, esperadas: [v.f[i]], idioma: "ru", explicacion: "**" + v.ac + " → " + ["я", "ты", "он / она́", "мы", "вы", "они́"][i] + " " + v.f[i] + "**. " + ru }, base));
    out.push(Object.assign({ id: "U7-rdic-" + k, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 6, pide: "Escucha y escribe la frase.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });
  /* Construcción progresiva */
  [["desp", ["Я просыпа́юсь.", "Я просыпа́юсь в семь часо́в.", "Я обы́чно просыпа́юсь в семь часо́в.", "Я обы́чно просыпа́юсь в семь часо́в и за́втракаю до́ма."]],
   ["trab", ["Я рабо́таю.", "Я рабо́таю в о́фисе.", "Я рабо́таю в о́фисе у́тром.", "Я обы́чно рабо́таю в о́фисе у́тром."]],
   ["cen", ["Я у́жинаю.", "Я у́жинаю до́ма.", "Я у́жинаю до́ма в во́семь часо́в.", "Я всегда́ у́жинаю до́ма в во́семь часо́в."]]].forEach(([k, pasos], j) => {
    const piezas = ["", "¿Dónde o cuándo?", "¿Cuándo?", "¿Cada cuánto?"];
    for (let p = 1; p < pasos.length; p++) {
      const tok = s => sinP(s).split(" "), antes = tok(pasos[p - 1]);
      const nuevo = tok(pasos[p]).filter(w => antes.indexOf(w) < 0).join(" ");
      out.push({ id: "U7-prog-" + j + "-" + p, tipo: "progresiva", forma: "escribir", dificultad: 2 + (p > 2 ? 1 : 0), modulo: 6, grupo: "PG-" + j + "-" + p, items: [], oir: pasos[p],
        pide: "Agrega «" + nuevo.replace(/\.$/, "") + "» a la frase.", grande: pasos[p - 1], audio: pasos[p], audioManual: true, esperadas: [pasos[p]], idioma: "ru",
        explicacion: "La frase crece sin cambiar lo demás: " + pasos[p] });
    }
  });
  /* Línea del día: ordenar */
  [U7_ORDEN_DIA.slice(0, 5), U7_ORDEN_DIA.slice(3)].forEach((ks, j) => {
    const fichas = ks.map(k => actRu(k, 0));
    let fi = baraja(fichas, j + 9); if (fi.join(" · ") === fichas.join(" · ")) fi = fi.slice(1).concat(fi[0]);
    out.push({ id: "U7-linea-" + j, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: 6, grupo: "LI-" + j, items: [], pide: "Ordena tu día, de la mañana a la noche.", fichas: fi, sep: " · ",
      esperada: fichas.join(" · "), audio: fichas.join(", "), explicacion: ks.map(k => U7_ACT[k][3] + " " + actRu(k, 0)).join(" → ") });
  });
  /* Ampliación: ра́но y по́здно */
  [["Я встаю́ ра́но.", "Me levanto temprano."], ["Я ложу́сь спать по́здно.", "Me acuesto tarde."], ["Он рабо́тает по́здно.", "Él trabaja hasta tarde."], ["Мы за́втракаем ра́но.", "Desayunamos temprano."]].forEach(([ru, es], j) =>
    out.push({ id: "U7-amp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 6, grupo: "AM-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " — ра́но = temprano · по́здно = tarde" }));

  /* ── Módulo 7: horarios ── */
  ["des", "alm", "ini", "fin", "cen", "acost", "trab"].forEach((k, j) => {
    const a = U7_ACT[k], v = verb[sin(a[0])]; if (!v) return;
    const q = "Во ско́лько ты " + actRu(k, 1) + "?", r = cap(u7Ru(a[4], "")) + ".";
    const base = { grupo: "HO-" + k, items: ["lex:" + v.id], oir: r };
    out.push(Object.assign({ id: "U7-hor-" + k, tipo: "horario", forma: "escribir", dificultad: 2, modulo: 7, contexto: [{ p: "—", ru: q }], pide: a[3] + " " + u7Reloj(a[4]) + " Contesta con la hora.", audio: q, audioManual: true,
      esperadas: [r, "Я " + actRu(k, 0) + " " + u7Ru(a[4], "") + ".", cap(u7Ru(a[4], a[5])) + "."], idioma: "ru", explicacion: "— " + q + " — " + r + " " + u7ReglaHora(a[4]) }, base));
    out.push(Object.assign({ id: "U7-horq-" + k, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 7, pide: "Escribe en ruso: «¿A qué hora " + a[2][1] + "?»", audio: q, audioManual: true, esperadas: [q], idioma: "ru",
      explicacion: q + " Во ско́лько = ¿a qué hora?" }, base));
    const ru3 = "Он " + actRu(k, 2) + " " + u7Ru(a[4], a[5]) + ".";
    out.push(Object.assign({ id: "U7-hort-" + k, tipo: "hora-elegir", forma: "elegir", dificultad: 2, modulo: 7, contexto: [{ p: "", ru: ru3 }], pide: "¿A qué hora?", audio: ru3,
      opciones: baraja([u7Es(a[4], a[5])].concat(baraja([2, 3, 5, 10, 12].filter(x => x !== a[4]), j).slice(0, 2).map(x => u7Es(x, a[5]))), j), correcta: u7Es(a[4], a[5]), explicacion: ru3 + " — " + u7Es(a[4], a[5]) }, base));
  });

  /* ── Módulo 8: planes ── */
  [["За́втра я рабо́таю.", "Mañana trabajo."], ["В суббо́ту я иду́ в рестора́н.", "El sábado voy al restaurante."], ["Ве́чером я до́ма.", "Por la noche estoy en casa."],
   ["Сего́дня выходно́й.", "Hoy es mi día libre."], ["За́втра у́тром я иду́ в парк.", "Mañana por la mañana voy al parque."], ["В пя́тницу я рабо́таю до́ма.", "El viernes trabajo en casa."],
   ["В воскресе́нье пра́здник.", "El domingo es feriado."], ["За́втра встре́ча в о́фисе.", "Mañana hay una reunión en la oficina."], ["Мой о́тпуск в ию́ле.", "Mis vacaciones son en julio."],
   ["Како́й у тебя́ план?", null]].forEach(([ru, es], j) => {
    if (!es) return;
    const base = { grupo: "PL-" + j, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-plesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }, base));
    out.push(Object.assign({ id: "U7-pldic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });

  /* ── Módulo 9: mi semana (la agenda de Ana) ── */
  const agenda = U7_SEMANA.map(([vk, extra, es], j) => {
    const v = verb[sin(vk)], d = dias[j], f3 = v.f[2], f1 = v.f[0];
    return { d, ru3: cap(d.pr) + " " + d.acc + " А́нна " + f3 + (extra ? " " + extra : "") + ".", ru1: cap(d.pr) + " " + d.acc + " я " + f1 + (extra ? " " + extra : "") + ".", es, act: f3 + (extra ? " " + extra : ""), vid: v.id };
  });
  const textoAg = agenda.map(x => x.d.nom.charAt(0).toUpperCase() + x.d.nom.slice(1) + " — " + x.act);
  agenda.forEach((x, j) => {
    const base = { grupo: "AG-" + j, items: ["lex:" + x.d.id, "lex:" + x.vid], oir: x.ru3 };
    out.push(Object.assign({ id: "U7-ag-" + j, tipo: "agenda", forma: "elegir", dificultad: 2, modulo: 9, texto: textoAg, pide: "Mira la agenda de Ana. ¿Qué hace el " + x.d.es + "?",
      opciones: baraja([x.act].concat(baraja(agenda.filter(y => y.act !== x.act).map(y => y.act), j).slice(0, 2)), j), correcta: x.act, explicacion: x.ru3 }, base));
    out.push(Object.assign({ id: "U7-agw-" + j, grupo: "AGW-" + j, tipo: "agenda", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribe la frase completa, en primera persona.", grande: x.d.nom + " — " + x.es,
      audio: x.ru1, audioManual: true, esperadas: [x.ru1, cap(x.d.pr) + " " + x.d.acc + " " + x.ru1.split(" я ")[1]], idioma: "ru", explicacion: "**" + x.d.nom + " → " + x.d.pr + " " + x.d.acc + "**. " + x.ru1 }, base, { grupo: "AGW-" + j }));
  });

  /* ── Módulo 10: lecturas y dictados progresivos ── */
  U7_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U7-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 10, grupo: "L7-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U7-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 10, grupo: "L7v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });
  [["Я рабо́таю у́тром.", "Trabajo por la mañana."], ["Я рабо́таю в де́вять часо́в.", "Trabajo a las nueve."], ["Я рабо́таю в о́фисе в де́вять часо́в.", "Trabajo en la oficina a las nueve."],
   ["Я обы́чно рабо́таю в о́фисе у́тром.", "Normalmente trabajo en la oficina por la mañana."]].forEach(([ru, es], j) =>
    out.push({ id: "U7-niv-" + j, tipo: "dictado", forma: "escribir", dificultad: j < 2 ? 1 : j < 3 ? 2 : 3, modulo: 10, grupo: "NV-" + j, items: [], oir: ru, pide: "Escucha y escribe (nivel " + (j + 1) + ").",
      audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }));

  /* ── Vocabulario de las palabras nuevas (salvo números, días y meses, que tienen sus ejercicios) ── */
  const yaTienen = new Set(dias.map(d => d.id).concat(meses.map(m => m.id)));
  const dicEs = { "обы́чно": "normalmente", "ре́дко": "pocas veces", "план": "plan", "встре́ча": "reunión", "пра́здник": "fiesta, feriado", "о́тпуск": "vacaciones", "выходно́й": "día libre",
    "неде́ля": "semana", "душ": "ducha", "начина́ть": "empezar", "зака́нчивать": "terminar", "ложи́ться": "acostarse", "принима́ть": "tomar (una ducha)", "домо́й": "a casa", "ра́но": "temprano", "по́здно": "tarde" };
  const modDe = { "обы́чно": 5, "ре́дко": 5, "план": 8, "встре́ча": 8, "пра́здник": 8, "о́тпуск": 4, "выходно́й": 8, "неде́ля": 4, "душ": 6, "начина́ть": 6, "зака́нчивать": 6, "ложи́ться": 6, "принима́ть": 6, "домо́й": 6, "ра́но": 6, "по́здно": 6 };
  Object.assign(dicEs, U7_GLOSA); modDe["пра́здник"] = 4;
  U7_GRUPOS.forEach(([m, t, pal]) => pal.split(" ").forEach(ru => { if (U7_GLOSA[ru]) modDe[ru] = m; }));
  ["ка́ждый"].forEach(ru => { modDe[ru] = 3; });
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(7) >= 0 && dicEs[e.acento] && !yaTienen.has(e.id));
  nuevas.forEach((e, i) => {
    const es = dicEs[e.acento], m = modDe[e.acento], amp = U7_AMPLIACION_RU.split(" ").indexOf(e.acento) >= 0;
    const dis = baraja(nuevas.filter(x => x.id !== e.id && modDe[x.acento] === m).map(x => dicEs[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru, ampliacion: amp || undefined };
    if (dis.length >= 2) out.push(Object.assign({ id: "U7-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U7-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });

  /* ══ Profundización (10/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar (~20 % de la sesión). */
  const vf = ac => { const e = lex(ac, "verbo"), v = e && verboById(e.id); return v && v.presente ? { id: e.id, ac: e.acento, f: v.presente } : null; };
  const kz = ac => { const e = lex(ac); return e ? casosById(e.id) : null; };
  const sinAc = t => t.replace(/́/g, "");
  const op1 = arr => arr.some(x => x.indexOf(" ") < 0 && (x.match(/[аеёиоуыэюя]/gi) || []).length >= 2 && x.indexOf("́") < 0 && !/ё/.test(x)) ? arr.map(x => x.indexOf(" ") < 0 ? sinAc(x) : x) : arr;
  const push = o => out.push(o);
  const minF = n => { const c = kz("мину́та"); return n <= 4 ? c.sg[1] : c.pl[1]; };
  const razF = n => { const c = kz("раз"); return n === 1 ? c.sg[0] : n <= 4 ? c.sg[1] : c.pl[1]; };
  const grupoN = n => n === 1 ? 1 : n <= 4 ? 2 : 5;
  const RAZ3 = ["Es uno: la palabra sola", "Va después de 2, 3 o 4", "Va después de 5 o más"];

  /* ── Módulo 1: la hora ── */
  for (let n = 1; n <= 12; n++) {
    const ru = n === 1 ? "час" : U7_NUM[n] + " " + hora(n).split(" ").pop();
    push({ id: "U7-pq-h-" + n, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-hora-conteo", grupo: "H-" + n, items: [], oir: cap(hora(n)) + ".",
      pide: "¿Por qué es «" + hora(n).split(" ").pop() + "»?", grande: hora(n), audio: cap(hora(n)) + ".", audioManual: true, opciones: RAZ3, correcta: RAZ3[n === 1 ? 0 : n <= 4 ? 1 : 2], explicacion: u7ReglaHora(n) });
    if (n >= 2) {
      const mal = U7_NUM[n] + " " + (n <= 4 ? "часо́в" : "часа́");
      push({ id: "U7-nat-h-" + n, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-hora-conteo", grupo: "H-" + n, items: [], oir: cap(hora(n)) + ".",
        pide: "¿Cuál es la correcta?", opciones: baraja([cap(hora(n)) + ".", cap(mal) + "."], n), correcta: cap(hora(n)) + ".", explicacion: cap(hora(n)) + ". " + u7ReglaHora(n) });
    }
    push({ id: "U7-nat-eto-" + n, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 1, regla: "u7-hora-pregunta", grupo: "HE-" + n, items: [], oir: cap(hora(n)) + ".",
      pide: "— Кото́рый час? ¿Cuál es la correcta?", opciones: baraja([cap(hora(n)) + ".", "Э́то " + hora(n) + "."], n + 3), correcta: cap(hora(n)) + ".", explicacion: cap(hora(n)) + ". Para la hora no va э́то." });
    push({ id: "U7-oido-v-" + n, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-hora-a-las", grupo: "HV-" + n, items: [], oir: (n % 2 ? "в " : "") + hora(n),
      pide: "Escucha: ¿qué sonó?", audio: (n % 2 ? "в " : "") + hora(n), opciones: ["в " + hora(n), hora(n)], correcta: (n % 2 ? "в " : "") + hora(n),
      explicacion: "Sonó **" + (n % 2 ? "{в} " : "") + hora(n) + "**: " + (n % 2 ? "«a las…», cuándo pasa algo." : "la hora o cuánto dura, sin {в}.") });
    if (n >= 2 && n !== 3) push({ id: "U7-desc-h-" + n, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-hora-conteo", grupo: "H-" + n, items: [], oir: hora(n),
      pide: (n <= 4 ? [2, 3, 4] : [5, 6, 7]).filter(x => x !== n).slice(0, 2).map(hora).join(" · ") + ". ¿Y " + U7_NUM[n] + "?", opciones: baraja([U7_NUM[n] + " часа́", U7_NUM[n] + " часо́в"], n), correcta: hora(n),
      explicacion: hora(n) + ": " + (n <= 4 ? "con 2, 3 y 4 va часа́." : "de 5 en adelante va часо́в.") });
  }
  /* «a las siete» o «siete horas»: par mínimo con в */
  [["рабо́тать", "trabajo", "Trabajo"], ["чита́ть", "leo", "Leo"], ["спать", "duermo", "Duermo"], ["гуля́ть", "paseo", "Paseo"]].forEach(([vk, es, Es], j) => {
    const v = vf(vk); if (!v) return;
    [2, 3, 7, 8].forEach((n, k) => {
      const dura = (j + k) % 2 === 0, ru1 = "Я " + v.f[0] + " в " + hora(n) + ".", ru2 = "Я " + v.f[0] + " " + hora(n) + ".";
      if (vk === "спать" && !dura) return;
      push({ id: "U7-par-v-" + j + "-" + n, tipo: "par", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-hora-a-las", grupo: "PV-" + j + "-" + n, items: ["lex:" + v.id], oir: dura ? ru2 : ru1,
        pide: "«" + Es + " " + (dura ? U7_NUM_ES[n] + " horas" : u7Es(n)) + "». ¿Cuál dices?", opciones: baraja([ru1, ru2], j + n), correcta: dura ? ru2 : ru1,
        explicacion: (dura ? ru2 + " Cuánto dura: sin {в}." : ru1 + " «A las…»: {в} + la hora.") });
    });
  });
  /* Minutos: descubrir, porque y la hora digital de oído */
  [3, 4, 5, 10, 15, 20, 30, 40].forEach((n, j) => {
    const num = { 3: "три", 4: "четы́ре", 5: "пять", 10: "де́сять", 15: "пятна́дцать", 20: "два́дцать", 30: "три́дцать", 40: "со́рок" }[n], ok = num + " " + minF(n), mal = num + " " + minF(n <= 4 ? 5 : 3);
    push({ id: "U7-pq-min-" + n, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-duracion", grupo: "MI-" + n, items: ["lex:" + lex("мину́та").id], oir: ok,
      pide: "¿Por qué es «" + minF(n) + "»?", grande: ok, audio: ok, audioManual: true, opciones: RAZ3.slice(1), correcta: RAZ3[n <= 4 ? 1 : 2], explicacion: ok + ": мину́та se cuenta como час (3 y 4 → мину́ты; 5 o más → мину́т)." });
    if (n !== 3 && n !== 5) push({ id: "U7-desc-min-" + n, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-duracion", grupo: "MI-" + n, items: [], oir: ok,
      pide: (n <= 4 ? "три мину́ты" : "пять мину́т · де́сять мину́т") + ". ¿Y " + num + "?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + ": " + (n <= 4 ? "con 3 y 4, мину́ты." : "de 5 en adelante, мину́т.") });
    if (n >= 5) push({ id: "U7-nat-min-" + n, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 1, regla: "u7-duracion", grupo: "MN-" + n, items: [], oir: "Я чита́ю " + ok + ".",
      pide: "¿Cuál es la correcta?", opciones: baraja(["Я чита́ю " + ok + ".", "Я чита́ю " + mal + "."], j + 1), correcta: "Я чита́ю " + ok + ".", explicacion: "Я чита́ю " + ok + ". De 5 en adelante, мину́т." });
  });
  [[7, 15, 50], [9, 30, 13], [8, 50, 15], [6, 13, 30], [10, 40, 14], [11, 15, 50], [5, 30, 13], [12, 50, 15]].forEach(([h, m, otro], j) => {
    const NUM2 = { 13: "трина́дцать", 14: "четы́рнадцать", 15: "пятна́дцать", 30: "три́дцать", 40: "со́рок", 50: "пятьдеся́т" };
    const ru = U7_NUM[h] + " " + NUM2[m], dig = x => (h < 10 ? "0" : "") + h + ":" + x;
    push({ id: "U7-oido-dig-" + j, tipo: "oido", forma: "elegir", dificultad: 3, modulo: 1, regla: "u7-duracion", grupo: "DG-" + j, items: [], oir: "Сейча́с " + ru + ".",
      pide: "Escucha: ¿qué hora es?", audio: "Сейча́с " + ru + ".", opciones: baraja([dig(m), dig(otro)], j), correcta: dig(m), explicacion: "Сейча́с " + ru + ". = " + dig(m) + ". Primero la hora y después los minutos." });
  });
  /* Diagnóstico de la hora */
  [[5, "часа́", "La forma de час"], [3, "часо́в", "La forma de час"], [9, "часа́", "La forma de час"], [4, "часо́в", "La forma de час"]].forEach(([n, mal, ok], j) => {
    const v = vf(["за́втракать", "обе́дать", "у́жинать", "рабо́тать"][j]), bien = "Я " + v.f[0] + " в " + hora(n) + ".";
    push({ id: "U7-diag-h-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 1, regla: "u7-hora-conteo", grupo: "DH-" + j, items: ["lex:" + v.id], oir: bien,
      pide: "La frase tiene un error. ¿Qué falla?", grande: "Я " + v.f[0] + " в " + U7_NUM[n] + " " + mal + ".", opciones: [ok, "Falta {в}", "El verbo"], correcta: ok, esperadas: [bien], explicacion: bien + " " + u7ReglaHora(n) });
    const sinV = "Я " + v.f[0] + " " + hora(n + 2) + ".", bien2 = "Я " + v.f[0] + " в " + hora(n + 2) + ".";
    push({ id: "U7-diag-v-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 1, regla: "u7-hora-a-las", grupo: "DV-" + j, items: ["lex:" + v.id], oir: bien2,
      pide: "Quieres decir a qué hora lo haces, y la frase tiene un error. ¿Qué falla?", grande: sinV, opciones: ["La forma de час", "Falta {в}", "El verbo"], correcta: "Falta {в}", esperadas: [bien2], explicacion: bien2 + " «A las…» lleva {в}." });
  });

  /* ── Módulo 2: у́тром / утра́ ── */
  [[7, "у"], [8, "у"], [9, "у"], [10, "у"], [6, "в"], [8, "в"], [9, "в"], [10, "в"]].forEach(([n, p], j) => {
    const conH = u7Ru(n, p), adv = p === "у" ? "у́тром" : "ве́чером", gen = p === "у" ? "утра́" : "ве́чера";
    push({ id: "U7-pq-uv-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 2, regla: "u7-utra-vechera", grupo: "UV-" + j, items: [], oir: conH,
      pide: "¿Por qué " + gen + " y no " + adv + "?", grande: conH, audio: conH, audioManual: true, opciones: ["Va después de la hora", "Va al final de la frase"], correcta: "Va después de la hora",
      explicacion: "Con la hora va **" + gen + "**; " + adv + " es sin hora." });
    push({ id: "U7-nat-uv-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u7-utra-vechera", grupo: "UVN-" + j, items: [], oir: "Я встаю́ " + conH + ".",
      pide: "¿Cuál es la correcta?", opciones: baraja(["Я " + (p === "у" ? "встаю́" : "у́жинаю") + " " + conH + ".", "Я " + (p === "у" ? "встаю́" : "у́жинаю") + " в " + hora(n) + " " + adv + "."], j), correcta: "Я " + (p === "у" ? "встаю́" : "у́жинаю") + " " + conH + ".",
      explicacion: "Después de la hora: **" + gen + "**, nunca " + adv + "." });
    if (j < 4) push({ id: "U7-oido-uv-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 2, regla: "u7-utra-vechera", grupo: "UVO-" + j, items: [], oir: "в " + hora(n) + (j % 2 ? " ве́чера" : " утра́"),
      pide: "Escucha: ¿de la mañana o de la noche?", audio: "в " + hora(n) + (j % 2 ? " ве́чера" : " утра́"), opciones: [u7Es(n, "у"), u7Es(n, "в")], correcta: u7Es(n, j % 2 ? "в" : "у"),
      explicacion: "Sonó **" + (j % 2 ? "ве́чера" : "утра́") + "**." });
  });
  [["рабо́тать", "у́тро", "у́тром"], ["чита́ть", "ве́чер", "ве́чером"], ["спать", "ночь", "но́чью"], ["гуля́ть", "день", "днём"], ["отдыха́ть", "ве́чер", "ве́чером"], ["за́втракать", "у́тро", "у́тром"]].forEach(([vk, nom, adv], j) => {
    const v = vf(vk); if (!v) return;
    const s = SUJ[j % SUJ.length], ok = s[0] + " " + v.f[s[2]] + " " + adv + ".", mal = s[0] + " " + v.f[s[2]] + " в " + nom + ".";
    push({ id: "U7-nat-mo-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u7-momento-sin-prep", grupo: "MOn-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " El momento del día va sin {в}: " + adv + "." });
    push({ id: "U7-pq-mo-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 2, regla: "u7-momento-sin-prep", grupo: "MOn-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "¿Por qué no lleva {в}?", grande: ok, audio: ok, audioManual: true, opciones: ["Es un momento del día: tiene su propia palabra", "Es un día de la semana"], correcta: "Es un momento del día: tiene su propia palabra",
      explicacion: nom + " → **" + adv + "**, sin preposición." });
  });

  /* ── Módulo 3: días ── */
  dias.forEach((d, j) => {
    const fem = d.nom !== d.acc, base = { grupo: "D-" + d.id, items: ["lex:" + d.id] };
    push(Object.assign({ id: "U7-pq-d-" + d.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-dia-acus", oir: d.pr + " " + d.acc, pide: fem ? "¿Por qué " + d.acc + "?" : "¿Por qué no cambia?",
      grande: d.pr + " " + d.acc, audio: d.pr + " " + d.acc, audioManual: true,
      opciones: fem ? ["Es un día: {в} + acusativo, -а → -у", "Es un mes: {в} + prepositivo"] : ["Es un día y una cosa: en acusativo no cambia", "Es un mes: {в} + prepositivo"],
      correcta: fem ? "Es un día: {в} + acusativo, -а → -у" : "Es un día y una cosa: en acusativo no cambia", explicacion: "**" + d.nom + " → " + d.pr + " " + d.acc + "**: los días van en acusativo." }, base));
    const prep = casosById(d.id).sg[5];
    if (prep !== d.acc) push(Object.assign({ id: "U7-nat-d-" + d.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-dia-acus", oir: cap(d.pr) + " " + d.acc + " я до́ма.", pide: "¿Cuál es la correcta?",
      opciones: baraja([cap(d.pr) + " " + d.acc + " я до́ма.", cap(d.pr) + " " + prep + " я до́ма."], j), correcta: cap(d.pr) + " " + d.acc + " я до́ма.",
      explicacion: "Para los días, acusativo: **" + d.pr + " " + d.acc + "**." }, base, { grupo: "DN-" + d.id }));
    if (fem) push(Object.assign({ id: "U7-nat-dn-" + d.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-dia-acus", oir: cap(d.pr) + " " + d.acc + " я рабо́таю.", pide: "¿Cuál es la correcta?",
      opciones: baraja([cap(d.pr) + " " + d.acc + " я рабо́таю.", cap(d.pr) + " " + d.nom + " я рабо́таю."], j + 1), correcta: cap(d.pr) + " " + d.acc + " я рабо́таю.",
      explicacion: "Después de {в}, el día cambia: **" + d.nom + " → " + d.acc + "**." }, base, { grupo: "DNN-" + d.id }));
    push(Object.assign({ id: "U7-par-d-" + d.id, tipo: "par", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-dia-hoy", oir: "Сего́дня " + d.nom + ".", pide: "«Hoy es " + d.es + "». ¿Cuál dices?",
      opciones: baraja(["Сего́дня " + d.nom + ".", "Сего́дня " + d.pr + " " + d.acc + "."], j), correcta: "Сего́дня " + d.nom + ".", explicacion: "Qué día es: el día tal cual, sin {в}." }, base, { grupo: "DH-" + d.id }));
    const otros = dias.filter(x => x !== d && (x.nom !== x.acc) === fem && x.pr === "в").slice(0, 2);
    if (otros.length === 2 && prep !== d.acc) push(Object.assign({ id: "U7-desc-d-" + d.id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-dia-acus", oir: d.pr + " " + d.acc,
      pide: otros.map(x => x.nom + " → " + x.pr + " " + x.acc).join(" · ") + ". ¿Y " + d.nom + "?", opciones: baraja([d.pr + " " + d.acc, d.pr + " " + prep], j), correcta: d.pr + " " + d.acc,
      explicacion: d.nom + " → " + d.pr + " " + d.acc + ": la misma regla que " + otros.map(x => x.nom).join(" y ") + "." }, base, { grupo: "DD-" + d.id }));
  });
  /* ка́ждый */
  [["день", "рабо́тать", "", "Trabajo"], ["суббо́та", "гуля́ть", "в па́рке", "Paseo por el parque"], ["у́тро", "пить", "ко́фе", "Tomo café"],
   ["ве́чер", "чита́ть", "", "Leo"], ["пя́тница", "ходи́ть", "в кино́", "Voy al cine"], ["воскресе́нье", "отдыха́ть", "", "Descanso"]].forEach(([nom, vk, resto, es], j) => {
    const e = lex(nom, "sustantivo"), c = casosById(e.id), k = kz("ка́ждый"), v = vf(vk), g = e.gender === "f" ? "f" : e.gender === "n" ? "n" : "m";
    if (!v) return;
    const kw = g === "f" ? k.f[3] : g === "n" ? k.n[3] : (Array.isArray(k.m[3]) ? k.m[3][0] : k.m[3]), tiempo = kw + " " + c.sg[3];
    const fr = i => v.f[i] + (resto ? " " + resto : ""), ok = cap(tiempo) + " я " + fr(0) + ".";
    const gen = { m: "masculino", f: "femenino", n: "neutro" }[g];
    const base = { grupo: "K-" + j, items: ["lex:" + e.id, "lex:" + lex("ка́ждый").id] };
    push(Object.assign({ id: "U7-nat-k-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-cada", oir: ok, pide: "¿Cuál es la correcta?",
      /* la equivocada, con ка́ждый en otro género (28/10/2026: «в ка́ждую суббо́ту» también se usa, no sirve de error) */
      opciones: baraja([ok, cap((g === "f" ? (Array.isArray(k.m[3]) ? k.m[3][0] : k.m[3]) : k.f[3]) + " " + c.sg[3]) + " я " + fr(0) + "."], j), correcta: ok,
      explicacion: ok + " " + cap(nom) + " es " + gen + ": " + kw + "." }, base));
    push(Object.assign({ id: "U7-pq-k-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla: "u7-cada", oir: tiempo, pide: "¿Por qué " + kw + "?", grande: tiempo, audio: tiempo, audioManual: true,
      opciones: ["Concuerda con " + nom + " (" + gen + "), en acusativo", "Va después de {в}", "Es plural"], correcta: "Concuerda con " + nom + " (" + gen + "), en acusativo",
      explicacion: "**" + tiempo + "**: ка́ждый concuerda con " + nom + " y está en acusativo, el que dice «cuándo»." }, base, { grupo: "KP-" + j }));
    if (j < 4) push(Object.assign({ id: "U7-cad-k-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 3, regla: "u7-cada", oir: cap(tiempo) + " А́нна " + fr(2) + ".", pide: "Cambia la frase paso a paso.", base: "Я " + fr(0) + ".",
      pasos: [{ pide: "Di que lo haces siempre: con ка́ждый y " + nom + ".", esperadas: [ok, "Я " + fr(0) + " " + tiempo + ".", "Я " + tiempo + " " + fr(0) + "."] },
              { pide: "Ahora dilo de Ana (А́нна).", esperadas: [cap(tiempo) + " А́нна " + fr(2) + ".", "А́нна " + fr(2) + " " + tiempo + ".", "А́нна " + tiempo + " " + fr(2) + "."] }],
      explicacion: ok + " → " + cap(tiempo) + " А́нна " + fr(2) + ". Con ка́ждый, sin {в}." }, base, { grupo: "KC-" + j }));
  });
  /* Desarmar: qué día, qué momento, quién, qué hace */
  U7_SEMANA.forEach(([vk, extra, es], j) => {
    const v = vf(vk), d = dias[j]; if (!v) return;
    const mom = ["у́тром", "ве́чером", "днём"][j % 3], pal = [cap(d.pr), d.acc, mom, "я", v.f[0]].concat(extra ? extra.split(" ") : []);
    const preg = [{ pide: "¿Qué día? (toca el día)", correcta: 1 }, { pide: "¿En qué momento del día?", correcta: 2 }, { pide: "¿Qué hace?", correcta: 4 }];
    push({ id: "U7-desarm-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 3, regla: "u7-dia-acus", grupo: "DS-" + j, items: ["lex:" + d.id, "lex:" + v.id],
      oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true, pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: preg,
      explicacion: pal.join(" ") + ". El día con {в} + acusativo; el momento, sin preposición." });
  });

  /* ── Módulo 4: meses y estaciones ── */
  meses.forEach((m, j) => {
    const base = { grupo: "M-" + m.id, items: ["lex:" + m.id] };
    const finE = m.prep.indexOf("е́") >= 0, mismos = meses.filter(x => x !== m && (x.prep.indexOf("е́") >= 0) === finE).slice(0, 2);
    push(Object.assign({ id: "U7-desc-m-" + m.id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-mes-prep", oir: "в " + m.prep,
      pide: mismos.map(x => x.nom + " → в " + x.prep).join(" · ") + ". ¿Y " + m.nom + "?", opciones: baraja(["в " + m.prep, "в " + m.nom], j), correcta: "в " + m.prep,
      explicacion: "**" + m.nom + " → в " + m.prep + "**: los meses van en prepositivo" + (finE ? ", con el acento al final." : ".") }, base, { grupo: "MD-" + m.id }));
    push(Object.assign({ id: "U7-pq-m-" + m.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-mes-prep", oir: "в " + m.prep, pide: "¿Por qué " + m.prep + "?", grande: "в " + m.prep, audio: "в " + m.prep, audioManual: true,
      opciones: ["Es un mes: {в} + prepositivo", "Es un día: {в} + acusativo", "Es una estación: sin preposición"], correcta: "Es un mes: {в} + prepositivo", explicacion: "**" + m.nom + " → в " + m.prep + "**." }, base));
    push(Object.assign({ id: "U7-nat-m-" + m.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-mes-prep", oir: "Мой о́тпуск в " + m.prep + ".", pide: "¿Cuál es la correcta?",
      opciones: baraja(["Мой о́тпуск в " + m.prep + ".", "Мой о́тпуск в " + m.nom + "."], j), correcta: "Мой о́тпуск в " + m.prep + ".", explicacion: "Los meses van en prepositivo: **в " + m.prep + "**." }, base, { grupo: "MN-" + m.id }));
    push(Object.assign({ id: "U7-diag-m-" + m.id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 4, regla: "u7-mes-prep", oir: "Мой день рожде́ния в " + m.prep + ".",
      pide: "La frase tiene un error. ¿Qué falla?", grande: "Мой день рожде́ния в " + m.nom + ".", opciones: ["La forma del mes", "Falta {в}", "Sobra мой"], correcta: "La forma del mes",
      esperadas: ["Мой день рожде́ния в " + m.prep + "."], explicacion: "Мой день рожде́ния в " + m.prep + ". El mes, en prepositivo." }, base, { grupo: "MG-" + m.id }));
  });
  [["ию́нь", "ию́ль"], ["ию́ль", "ию́нь"], ["март", "май"], ["май", "март"]].forEach(([a, b], j) => {
    const m = meses.find(x => x.nom === a), o = meses.find(x => x.nom === b);
    push({ id: "U7-oido-m-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-mes-prep", grupo: "MO-" + j, items: ["lex:" + m.id], oir: "в " + m.prep, pide: "Escucha: ¿qué mes?", audio: "в " + m.prep,
      opciones: ["en " + m.es, "en " + o.es], correcta: "en " + m.es, explicacion: "Sonó **в " + m.prep + "** (en " + m.es + ")." });
  });
  const EST = [["зима́", "зимо́й", "invierno"], ["весна́", "весно́й", "primavera"], ["ле́то", "ле́том", "verano"], ["о́сень", "о́сенью", "otoño"]];
  EST.forEach(([nom, adv, es], j) => {
    const e = lex(adv), base = { grupo: "E-" + j, items: e ? ["lex:" + e.id] : [] }, c = kz(nom);
    ["Я на да́че", "Я до́ма", "Я гуля́ю в па́рке"].forEach((fr, k) => {
      const ok = cap(adv) + " " + fr.charAt(0).toLowerCase() + fr.slice(1) + ".", mal = "В " + c.sg[3] + " " + fr.charAt(0).toLowerCase() + fr.slice(1) + ".";
      push(Object.assign({ id: "U7-nat-e-" + j + "-" + k, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-estaciones", oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j + k), correcta: ok,
        explicacion: ok + " Las estaciones van sin {в}: " + nom + " → **" + adv + "**." }, base, { grupo: "EN-" + j + "-" + k }));
    });
    push(Object.assign({ id: "U7-pq-e-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u7-estaciones", oir: adv, pide: "¿Por qué " + adv + " no lleva {в}?", grande: adv, audio: adv, audioManual: true,
      opciones: ["Es una estación: tiene su propia palabra", "Es un mes: {в} + prepositivo"], correcta: "Es una estación: tiene su propia palabra", explicacion: nom + " → **" + adv + "**, como у́тро → у́тром." }, base));
    push(Object.assign({ id: "U7-est-" + j, tipo: "momento", forma: "escribir", dificultad: 2, modulo: 4, regla: "u7-estaciones", oir: adv, pide: "Escribe en ruso: «en " + es + "»", audio: adv, audioManual: true, esperadas: [adv], idioma: "ru",
      explicacion: nom + " → **" + adv + "**, sin preposición." }, base, { grupo: "EW-" + j }));
  });
  /* Cadena: cuándo, de tres maneras */
  [["Мой о́тпуск", 7, 6, "ле́том"], ["Мой о́тпуск", 0, 1, "зимо́й"], ["Мой день рожде́ния", 4, 3, "весно́й"], ["Мой день рожде́ния", 9, 10, "о́сенью"]].forEach(([fr, a, b, est], j) => {
    const A = meses[a], B = meses[b];
    push({ id: "U7-cad-m-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 4, regla: "u7-cuando-tabla", grupo: "MC-" + j, items: ["lex:" + A.id, "lex:" + B.id], oir: fr + " " + est + ".",
      pide: "Cambia la frase paso a paso.", base: fr + " в " + A.prep + ".",
      pasos: [{ pide: "Ahora: en " + B.es + ".", esperadas: [fr + " в " + B.prep + "."] }, { pide: "Ahora di solo la estación: en " + EST.find(x => x[1] === est)[2] + ".", esperadas: [fr + " " + est + ".", cap(est) + " " + fr.charAt(0).toLowerCase() + fr.slice(1) + "."] }],
      explicacion: fr + " в " + A.prep + ". → " + fr + " в " + B.prep + ". → " + fr + " " + est + ". El mes con {в} + prepositivo; la estación, sin {в}." });
  });

  /* ── Módulo 5: frecuencia y раз ── */
  for (let n = 1; n <= 12; n++) {
    const ru = U7_NUM[n] + " " + razF(n);
    push({ id: "U7-pq-r-" + n, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 5, regla: "u7-veces", grupo: "R-" + n, items: ["lex:" + lex("раз").id], oir: ru, pide: "¿Por qué «" + razF(n) + "»?", grande: ru, audio: ru, audioManual: true,
      opciones: RAZ3, correcta: RAZ3[n === 1 ? 0 : n <= 4 ? 1 : 2], explicacion: "**" + ru + "**: раз se cuenta como час (1 раз · 2–4 ра́за · 5 o más раз)." });
    if (n >= 2) push({ id: "U7-nat-r-" + n, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u7-veces", grupo: "RN-" + n, items: [], oir: "Я пью ко́фе " + ru + " в день.", pide: "¿Cuál es la correcta?",
      opciones: baraja(["Я пью ко́фе " + ru + " в день.", "Я пью ко́фе " + U7_NUM[n] + " " + razF(n <= 4 ? 5 : 3) + " в день."], n), correcta: "Я пью ко́фе " + ru + " в день.", explicacion: "**" + ru + "**: " + (n <= 4 ? "con 2, 3 y 4, ра́за." : "de 5 en adelante, раз.") });
    if (n >= 3 && n !== 5 && n !== 6) push({ id: "U7-desc-r-" + n, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 5, regla: "u7-veces", grupo: "R-" + n, items: [], oir: ru,
      pide: (n <= 4 ? "два ра́за" : "пять раз · шесть раз") + ". ¿Y " + U7_NUM[n] + "?", opciones: baraja([ru, U7_NUM[n] + " " + razF(n <= 4 ? 5 : 3)], n + 1), correcta: ru, explicacion: ru + ": el mismo grupo." });
  }
  const HAB = [["пить", "ко́фе", "tomo café"], ["гото́вить", "", "cocino"], ["чита́ть", "", "leo"], ["гуля́ть", "", "paseo"], ["за́втракать", "", "desayuno"], ["отдыха́ть", "", "descanso"]];
  HAB.forEach(([vk, extra, es], j) => {
    const v = vf(vk); if (!v) return;
    const s = SUJ[(j + 2) % SUJ.length], f = v.f[s[2]] + (extra ? " " + extra : ""), ok = s[0] + " никогда́ не " + f + ".", mal = s[0] + " никогда́ " + f + ".";
    push({ id: "U7-nat-n-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u7-nunca-ne", grupo: "NN-" + j, items: ["lex:" + v.id], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Con никогда́ va también не." });
    push({ id: "U7-cad-f-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 5, regla: "u7-nunca-ne", grupo: "FC-" + j, items: ["lex:" + v.id], oir: ok, pide: "Cambia la frase paso a paso.", base: "Я " + v.f[0] + (extra ? " " + extra : "") + ".",
      pasos: [{ pide: "Agrega «normalmente» (обы́чно).", esperadas: ["Я обы́чно " + v.f[0] + (extra ? " " + extra : "") + ".", "Обы́чно я " + v.f[0] + (extra ? " " + extra : "") + "."] },
              { pide: "Ahora di que nunca lo haces.", esperadas: ["Я никогда́ не " + v.f[0] + (extra ? " " + extra : "") + "."] },
              { pide: "Ahora dilo de " + (s[1] || "nosotros").toLowerCase() + " (" + s[0].toLowerCase() + ").", esperadas: [ok] }],
      explicacion: "Я обы́чно " + v.f[0] + (extra ? " " + extra : "") + ". → Я никогда́ не " + v.f[0] + (extra ? " " + extra : "") + ". → " + ok + " La frecuencia va antes del verbo; con никогда́, también не." });
    push({ id: "U7-diag-n-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 5, regla: "u7-nunca-ne", grupo: "NG-" + j, items: ["lex:" + v.id], oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["Falta не", "La forma del verbo", "Sobra никогда́"], correcta: "Falta не", esperadas: [ok], explicacion: ok + " Con никогда́ va también не." });
  });

  /* ── Módulo 6: -сь / -ся, rutina en cadena, desarmar ── */
  const PRON = ["я", "ты", "он", "мы", "вы", "они́"], PRONC = ["Я", "Ты", "Он", "Мы", "Вы", "Они́"];
  ["умыва́ться", "одева́ться", "бри́ться", "торопи́ться", "просыпа́ться", "возвраща́ться"].forEach((vk, j) => {
    const v = vf(vk); if (!v) return;
    v.f.forEach((f, i) => {
      if ((i + j) % 2) return;
      const vocal = /ь$/.test(f), base = { grupo: "SY-" + j + "-" + i, items: ["lex:" + v.id] };
      push(Object.assign({ id: "U7-pq-sy-" + j + "-" + i, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 6, regla: "u7-rutina-sya", oir: PRONC[i] + " " + f + ".", pide: "¿Por qué termina en " + (vocal ? "-сь" : "**-ся**") + "?",
        grande: PRON[i] + " " + f, audio: PRONC[i] + " " + f + ".", audioManual: true, opciones: ["Antes hay una vocal", "Antes hay una consonante"], correcta: vocal ? "Antes hay una vocal" : "Antes hay una consonante",
        explicacion: "**" + f + "**: " + (vocal ? "después de vocal, **-сь**." : "después de consonante, **-ся**.") }, base));
    });
    const sinSy = v.f[0].replace(/сь$/, "");
    push({ id: "U7-nat-sy-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u7-rutina-sya", grupo: "SYN-" + j, items: ["lex:" + v.id], oir: "Я " + v.f[0] + ".", pide: "¿Cuál es la correcta?",
      opciones: baraja(["Я " + v.f[0] + ".", "Я " + sinSy + "ся."], j), correcta: "Я " + v.f[0] + ".", explicacion: "Я " + v.f[0] + ". Después de vocal va **-сь**, no **-ся**." });
    push({ id: "U7-oido-sy-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 6, regla: "u7-rutina-sya", grupo: "SYO-" + j, items: ["lex:" + v.id], oir: (j % 2 ? "Они́ " + v.f[5] : "Он " + v.f[2]),
      pide: "Escucha: ¿qué forma sonó?", audio: (j % 2 ? "Они́ " + v.f[5] : "Он " + v.f[2]), opciones: op1([v.f[2], v.f[5]]), correcta: op1([j % 2 ? v.f[5] : v.f[2]])[0],
      explicacion: "Sonó **" + (j % 2 ? v.f[5] : v.f[2]) + "** (" + (j % 2 ? "ellos" : "él") + ")." });
    const hor = u7Ru(7 + (j % 3), "у");
    push({ id: "U7-diag-sy-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 6, regla: "u7-rutina-sya", grupo: "SYD-" + j, items: ["lex:" + v.id], oir: "Я " + v.f[0] + " " + hor + ".",
      pide: "La frase tiene un error. ¿Qué falla?", grande: "Я " + sinSy + "ся " + hor + ".", opciones: ["Después de vocal va -сь", "La forma de час", "Falta {в}"], correcta: "Después de vocal va -сь",
      esperadas: ["Я " + v.f[0] + " " + hor + "."], explicacion: "Я " + v.f[0] + " " + hor + ". " + v.ac + " lleva **-ся**: en la forma de {я}, **-сь**." });
  });
  Object.keys(U7_ACT).forEach((k, j) => {
    const a = U7_ACT[k], v = verb[sin(a[0])] || vf(a[0]); if (!v) return;
    const f = i => v.f[i] + (a[1] ? " " + a[1] : ""), h = u7Ru(a[4], ""), ana = "А́нна";
    const pasos = [{ pide: "Agrega la hora: " + u7Es(a[4]) + ".", esperadas: ["Я " + f(0) + " " + h + ".", cap(h) + " я " + f(0) + "."] },
      { pide: "Ahora dilo de Ana (А́нна).", esperadas: [ana + " " + f(2) + " " + h + ".", cap(h) + " " + ana.toLowerCase() + " " + f(2) + "."] },
      { pide: "Agrega «normalmente» (обы́чно).", esperadas: [ana + " обы́чно " + f(2) + " " + h + ".", "Обы́чно " + ana + " " + f(2) + " " + h + "."] }];
    push({ id: "U7-cad-r-" + k, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 6, regla: "u7-frase-crece", grupo: "RC-" + k, items: ["lex:" + v.id], oir: ana + " обы́чно " + f(2) + " " + h + ".",
      pide: "Cambia la frase paso a paso.", base: "Я " + f(0) + ".", pasos, explicacion: "Я " + f(0) + ". → Я " + f(0) + " " + h + ". → " + ana + " " + f(2) + " " + h + ". → " + ana + " обы́чно " + f(2) + " " + h + "." });
    const frec = ["Ка́ждое у́тро", "Обы́чно", "Ка́ждый день"][j % 3], pal = frec.split(" ").concat(["я", v.f[0]]).concat(a[1] ? a[1].split(" ") : []).concat(h.split(" "));
    const iV = frec.split(" ").length + 1, iH = pal.length - h.split(" ").length;
    push({ id: "U7-desarm-r-" + k, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 6, regla: "u7-frase-crece", grupo: "RD-" + k, items: ["lex:" + v.id], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: [{ pide: "¿Quién?", correcta: iV - 1 }, { pide: "¿Qué hace? (el verbo)", correcta: iV }, { pide: "¿A qué hora? (toca la hora)", correcta: iH + 1 }],
      explicacion: pal.join(" ") + ". ¿Cada cuánto?, ¿quién?, ¿qué hace? y ¿a qué hora?: cada pieza en su lugar." });
  });
  [["опа́здывать", "на рабо́ту", "na"], ["торопи́ться", "на уро́к", "na"], ["спеши́ть", "на рабо́ту", "na"]].forEach(([vk, lugar], j) => {
    const v = vf(vk); if (!v) return;
    const loc = lugar.replace("рабо́ту", "рабо́те").replace("уро́к", "уро́ке"), ok = "Я " + v.f[0] + " " + lugar + ".";
    push({ id: "U7-nat-ap-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u7-rano-tarde", grupo: "AP-" + j, items: ["lex:" + v.id], oir: ok, pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, "Я " + v.f[0] + " " + loc + "."], j), correcta: ok, explicacion: ok + " Adónde: на + acusativo, como con идти́." });
  });

  /* ── Módulo 7: horarios ── */
  [["уро́к", "La clase"], ["фильм", "La película"], ["рабо́та", "El trabajo"], ["ле́кция", "La clase (de la facultad)"], ["конце́рт", "El concierto"]].forEach(([n0, es], j) => {
    const e = lex(n0, "sustantivo"), n = [9, 8, 9, 10, 7][j], h = u7Ru(n, ""), cosa = cap(n0);
    ["начина́ться", "конча́ться"].forEach((vk, k) => {
      const v = vf(vk), vp = vf(k ? "зака́нчивать" : "начина́ть"), ok = cosa + " " + v.f[2] + " " + h + ".", mal = cosa + " " + vp.f[2] + " " + h + ".";
      const base = { grupo: "EM-" + j + "-" + k, items: ["lex:" + e.id, "lex:" + v.id] };
      push(Object.assign({ id: "U7-nat-em-" + j + "-" + k, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-empezar", oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j + k), correcta: ok,
        explicacion: ok + " Lo que " + (k ? "termina" : "empieza") + " es una cosa: " + v.ac + ". " + vp.ac + " es para una persona." }, base));
      if (k === 0) push(Object.assign({ id: "U7-pq-em-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-empezar", oir: ok, pide: "¿Por qué начина́ется, con -ся?", grande: ok, audio: ok, audioManual: true,
        opciones: ["Lo que empieza es una cosa", "Lo que empieza es una persona"], correcta: "Lo que empieza es una cosa", explicacion: es + " empieza sola: **начина́ется**. Una persona начина́ет algo." }, base));
      if (k === 0) push(Object.assign({ id: "U7-diag-em-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla: "u7-empezar", oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
        opciones: ["Falta -ся", "La forma de час", "Falta {в}"], correcta: "Falta -ся", esperadas: [ok], explicacion: ok + " Una cosa que empieza: начина́ется." }, base, { grupo: "EMD-" + j }));
    });
  });
  ["рабо́тать", "чита́ть", "изуча́ть ру́сский"].forEach((x, j) => {
    const v = vf("начина́ть"), ok = "Я " + v.f[0] + " " + x + " в " + hora(9) + ".";
    push({ id: "U7-pq-emp-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-empezar", grupo: "EP-" + j, items: ["lex:" + v.id], oir: ok, pide: "¿Por qué начина́ю, sin -ся?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Lo que empieza es una cosa", "Una persona empieza algo"], correcta: "Una persona empieza algo", explicacion: "Una persona empieza algo: **начина́ю** + infinitivo." });
  });
  [0, 1, 2, 3, 4, 5].forEach(j => {
    const q = ["обе́дать", "у́жинать", "за́втракать", "рабо́тать", "встава́ть", "отдыха́ть"][j], v = vf(q); if (!v) return;
    const ok = "Во ско́лько ты " + v.f[1] + "?";
    push({ id: "U7-nat-vo-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-a-que-hora", grupo: "VO-" + j, items: ["lex:" + v.id], oir: ok, pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, "В ско́лько ты " + v.f[1] + "?"], j), correcta: ok, explicacion: ok + " Se dice во ско́лько, con la **о**." });
  });
  [["приходи́ть", "уходи́ть", "домо́й", "Llegas a casa", 7], ["уходи́ть", "приходи́ть", "на рабо́ту", "Te vas al trabajo", 8], ["приходи́ть", "уходи́ть", "на рабо́ту", "Llegas al trabajo", 9], ["уходи́ть", "приходи́ть", "домо́й", "Te vas a casa", 6]].forEach(([a, b, l, es, n], j) => {
    const va = vf(a), vb = vf(b), ok = "Я " + va.f[0] + " " + l + " в " + hora(n) + ".";
    push({ id: "U7-par-pu-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-horario", grupo: "PU-" + j, items: ["lex:" + va.id], oir: ok, pide: es + " a las " + U7_NUM_ES[n] + ". ¿Cuál dices?",
      opciones: baraja([ok, "Я " + vb.f[0] + " " + l + " в " + hora(n) + "."], j), correcta: ok, explicacion: ok + " " + (a === "приходи́ть" ? "Llegar: приходи́ть." : "Irse: уходи́ть.") });
  });
  [["за́нятый", "f", "Сего́дня"], ["за́нятый", "m", "За́втра"], ["свобо́дный", "f", "В суббо́ту"], ["свобо́дный", "m", "Ве́чером"]].forEach(([adj, g, cuando], j) => {
    const c = kz(adj).corta, ok = cuando + " я " + c[g] + ".", mal = cuando + " я " + c[g === "f" ? "m" : "f"] + ".";
    push({ id: "U7-nat-zn-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-libre", grupo: "ZN-" + j, items: ["lex:" + lex(adj).id], oir: ok,
      pide: "Habla " + (g === "f" ? "una mujer" : "un hombre") + ". ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " " + (g === "f" ? "Mujer" : "Hombre") + ": **" + c[g] + "**." });
    push({ id: "U7-oido-zn-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 7, regla: "u7-libre", grupo: "ZO-" + j, items: ["lex:" + lex(adj).id], oir: ok, pide: "Escucha: ¿quién habla?", audio: ok,
      opciones: ["Un hombre", "Una mujer"], correcta: g === "f" ? "Una mujer" : "Un hombre", explicacion: "Sonó **" + c[g] + "**: " + (g === "f" ? "forma de mujer, con **-а**." : "forma de hombre.") });
  });

  /* ── Módulo 8: игра́ть в / на ── */
  const vI = vf("игра́ть");
  [["те́ннис", "в"], ["футбо́л", "в"], ["ша́хматы", "в"], ["гита́ра", "на"], ["пиани́но", "на"]].forEach(([n0, pr], j) => {
    const e = lex(n0), c = casosById(e.id) || {}, forma = pr === "в" ? (c.sg ? c.sg[3] : c.pl[3]) : (c.sg ? c.sg[5] : n0), otra = pr === "в" ? "на " + (c.sg ? c.sg[5] : c.pl[5]) : "в " + (c.sg ? c.sg[3] : n0);
    [0, 2, 3].forEach((p, k) => {
      const s = SUJ[[0, 2, 4][k]], ok = s[0] + " " + vI.f[s[2]] + " " + pr + " " + forma + ".", mal = s[0] + " " + vI.f[s[2]] + " " + otra + ".";
      const base = { grupo: "IG-" + j + "-" + k, items: ["lex:" + e.id, "lex:" + vI.id] };
      push(Object.assign({ id: "U7-nat-ig-" + j + "-" + k, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u7-jugar", oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j + k), correcta: ok,
        explicacion: ok + " " + (pr === "в" ? "Un juego o un deporte: {в} + acusativo." : "Un instrumento: на + prepositivo.") }, base));
      if (k === 0) push(Object.assign({ id: "U7-pq-ig-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 8, regla: "u7-jugar", oir: ok, pide: "¿Por qué " + (pr === "в" ? "{в}" : "на") + "?", grande: ok, audio: ok, audioManual: true,
        opciones: ["Es un juego o un deporte", "Es un instrumento"], correcta: pr === "в" ? "Es un juego o un deporte" : "Es un instrumento", explicacion: pr === "в" ? "Juego o deporte: {в} + acusativo." : "Instrumento: на + prepositivo." }, base, { grupo: "IGP-" + j }));
    });
    push({ id: "U7-cad-ig-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 8, regla: "u7-jugar", grupo: "IGC-" + j, items: ["lex:" + e.id], oir: "За́втра я игра́ю " + pr + " " + forma + ".",
      pide: "Cambia la frase paso a paso.", base: "Я игра́ю " + pr + " " + forma + ".",
      pasos: [{ pide: "Ahora: todos los sábados (ка́ждую суббо́ту).", esperadas: ["Ка́ждую суббо́ту я игра́ю " + pr + " " + forma + ".", "Я игра́ю " + pr + " " + forma + " ка́ждую суббо́ту.", "Я ка́ждую суббо́ту игра́ю " + pr + " " + forma + "."] },
              { pide: "Ahora es un plan: mañana (за́втра).", esperadas: ["За́втра я игра́ю " + pr + " " + forma + ".", "Я за́втра игра́ю " + pr + " " + forma + "."] }],
      explicacion: "Ка́ждую суббо́ту я игра́ю " + pr + " " + forma + ". → За́втра я игра́ю " + pr + " " + forma + ". El presente sirve para lo habitual y para un plan cercano." });
  });

  /* `regla` en los tipos de antes (10/10/2026): con Casi o Mal, «📖 Repasar la regla» */
  const REGLA_ID = [[/^U7-(hw|ha|hf|hesru)-/, "u7-hora-conteo"], [/^U7-(uv|uve)-/, "u7-utra-vechera"], [/^U7-(pmo|pmw|mom)-/, "u7-momento-sin-prep"],
    [/^U7-(dsig|dsg|ddic)-/, "u7-dia-hoy"], [/^U7-(dw|dpr)-/, "u7-dia-acus"], [/^U7-(msig|mw|otp)-/, "u7-mes-prep"], [/^U7-(fel|fesru)-/, "u7-frec-lugar"],
    [/^U7-nunca-/, "u7-nunca-ne"], [/^U7-(resru|rcomp|rdic)-/, "u7-hora-a-las"], [/^U7-prog-/, "u7-frase-crece"], [/^U7-linea-/, "u7-conectores"], [/^U7-amp-/, "u7-rano-tarde"],
    [/^U7-(hor|horq|hort)-/, "u7-a-que-hora"], [/^U7-(plesru|pldic)-/, "u7-presente-planes"], [/^U7-(ag|agw)-/, "u7-agenda"]];
  out.forEach(e => { if (e.regla) return; const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1];
    if (/^U7-conjw-/.test(e.id) && /ся$|сь$/.test((lexComerById((e.items[0] || "").slice(4)) || {}).ru || "")) e.regla = "u7-rutina-sya"; });
  out.forEach(e => { if (e.explicacion) e.explicacion = u7Palabras(e.explicacion); if (e.pide) e.pide = u7Palabras(e.pide); });
  return out;
}

/* Proyecto «Моя неде́ля»: requisitos y consejos */
(function () {
  const m = UNIDAD_7.modulos.find(x => x.id === "u7m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const clave = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(clave(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const DIAS = ["понедельник", "вторник", "среду", "четверг", "пятницу", "субботу", "воскресенье"];
  const FREC = ["всегда", "обычно", "часто", "иногда", "редко", "никогда"];
  const dias = t => new Set(pal(t).map(clave).filter(w => DIAS.indexOf(w) >= 0)).size;
  const horas = t => (t.match(/(час|часа|часов)(?![а-яё])/gi) || []).length;
  const frec = t => pal(t).map(clave).filter(w => FREC.indexOf(w) >= 0).length;
  const verbos = t => new Set(pal(t).map(w => { const v = info(w).find(x => (lexComerById(x[0]) || {}).posNormalized === "verbo"); return v ? v[0] : null; }).filter(Boolean)).size;
  const negs = t => frases(t).filter(f => /(^|\s)не\s/i.test(f.replace(/\u0301/g, ""))).length;
  m.requisitos = [
    { txt: "Entre 7 y 15 frases", fn: t => { const n = frases(t).length; return n >= 7 && n <= 15; } },
    { txt: "Al menos 5 días de la semana (в понеде́льник, во вто́рник…)", fn: t => dias(t) >= 5 },
    { txt: "Al menos 3 horarios (в де́вять часо́в…)", fn: t => horas(t) >= 3 },
    { txt: "Al menos 3 palabras de frecuencia (обы́чно, ча́сто…)", fn: t => frec(t) >= 3 },
    { txt: "Al menos 5 verbos distintos", fn: t => verbos(t) >= 5 },
    { txt: "Al menos una frase negativa (не)", fn: t => negs(t) >= 1 }
  ];
  m.consejos = [{ fn: t => {
    const out = [], n = clave(t);
    if (/(^|[^а-яё])в вторник/.test(n)) out.push("Con вто́рник va во: **во вто́рник**.");
    [["среда", "среду"], ["пятница", "пятницу"], ["суббота", "субботу"]].forEach(([a, b]) => { if (new RegExp("(^|[^а-яё])в " + a + "(?![а-яё])").test(n)) out.push("«El " + { "среда": "miércoles", "пятница": "viernes", "суббота": "sábado" }[a] + "» va en acusativo: **в " + { "среда": "сре́ду", "пятница": "пя́тницу", "суббота": "суббо́ту" }[a] + "**."); });
    if (/(два|три|четыре) часов/.test(n)) out.push("Con 2, 3 y 4 va **часа́**: два часа́.");
    if (/(пять|шесть|семь|восемь|девять|десять|одиннадцать|двенадцать) часа(?![а-яё])/.test(n)) out.push("De 5 a 12 va **часо́в**: пять часо́в.");
    if (/никогда (?!не)/.test(n)) out.push("Con никогда́ también va **не**: Я никогда́ не…");
    if (/часов утром|часа утром|час утром/.test(n)) out.push("Con la hora va **утра́**: в семь часо́в утра́.");
    if (/часов вечером|часа вечером/.test(n)) out.push("Con la hora va **ве́чера**: в во́семь часо́в ве́чера.");
    return out;
  } }];
})();

window.UNIDAD_7 = UNIDAD_7;
window.unidad7Modulo = unidad7Modulo;
window.ejerciciosUnidad7 = ejerciciosUnidad7;
window.u7Datos = u7Datos;
window.u7Reloj = u7Reloj;
window.U7_MEZCLA = U7_MEZCLA;
