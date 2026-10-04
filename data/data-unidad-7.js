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
   Formas de Casos y de Verbos, nunca a mano.
   ============================================================ */

const U7_NUM = ["", "оди́н", "два", "три", "четы́ре", "пять", "шесть", "семь", "во́семь", "де́вять", "де́сять", "оди́ннадцать", "двена́дцать"];
const U7_NUM_ES = ["", "una", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce"];
const U7_DIAS = [["понеде́льник", "lunes"], ["вто́рник", "martes"], ["CMR-00836", "miércoles"], ["четве́рг", "jueves"], ["пя́тница", "viernes"], ["суббо́та", "sábado"], ["воскресе́нье", "domingo"]];
const U7_MESES = [["янва́рь", "enero"], ["февра́ль", "febrero"], ["март", "marzo"], ["апре́ль", "abril"], ["май", "mayo"], ["ию́нь", "junio"], ["ию́ль", "julio"],
  ["а́вгуст", "agosto"], ["сентя́брь", "septiembre"], ["октя́брь", "octubre"], ["ноя́брь", "noviembre"], ["дека́брь", "diciembre"]];
const U7_PARTES = [["у́тро", "mañana", "у́тром", "a la mañana"], ["день", "día, tarde", "днём", "a la tarde"], ["ве́чер", "noche (temprano)", "ве́чером", "a la noche"], ["ночь", "noche", "но́чью", "de noche"]];
const U7_FREC = { "всегда́": "siempre", "обы́чно": "normalmente", "ча́сто": "seguido", "иногда́": "a veces", "ре́дко": "pocas veces", "никогда́": "nunca" };

/* Actividades del día: [verbo, complemento, español (yo, vos, él/ella, nosotros, ellos/ustedes), emoji, hora típica, утра́ / ве́чера] */
const U7_ACT = {
  desp: ["просыпа́ться", "", ["me despierto", "te despertás", "se despierta", "nos despertamos", "se despiertan"], "🌅", 7, "у"],
  lev: ["встава́ть", "", ["me levanto", "te levantás", "se levanta", "nos levantamos", "se levantan"], "🛏️", 7, "у"],
  ducha: ["принима́ть", "душ", ["me ducho", "te duchás", "se ducha", "nos duchamos", "se duchan"], "🚿", 8, "у"],
  des: ["за́втракать", "", ["desayuno", "desayunás", "desayuna", "desayunamos", "desayunan"], "☕", 8, "у"],
  ini: ["начина́ть", "рабо́тать", ["empiezo a trabajar", "empezás a trabajar", "empieza a trabajar", "empezamos a trabajar", "empiezan a trabajar"], "💼", 9, "у"],
  trab: ["рабо́тать", "", ["trabajo", "trabajás", "trabaja", "trabajamos", "trabajan"], "💻", 10, "у"],
  alm: ["обе́дать", "", ["almuerzo", "almorzás", "almuerza", "almorzamos", "almuerzan"], "🍽️", 1, ""],
  fin: ["зака́нчивать", "рабо́тать", ["termino de trabajar", "terminás de trabajar", "termina de trabajar", "terminamos de trabajar", "terminan de trabajar"], "🏁", 6, "в"],
  volv: ["возвраща́ться", "домо́й", ["vuelvo a casa", "volvés a casa", "vuelve a casa", "volvemos a casa", "vuelven a casa"], "🏠", 7, "в"],
  est: ["изуча́ть", "ру́сский", ["estudio ruso", "estudiás ruso", "estudia ruso", "estudiamos ruso", "estudian ruso"], "📖", 8, "в"],
  cen: ["у́жинать", "", ["ceno", "cenás", "cena", "cenamos", "cenan"], "🍲", 8, "в"],
  peli: ["смотре́ть", "фильм", ["miro una película", "mirás una película", "mira una película", "miramos una película", "miran una película"], "🎬", 9, "в"],
  acost: ["ложи́ться", "спать", ["me acuesto", "te acostás", "se acuesta", "nos acostamos", "se acuestan"], "😴", 11, "в"]
};
const U7_ORDEN_DIA = ["desp", "des", "ini", "alm", "fin", "volv", "cen", "acost"];
/* Para la semana: qué se hace cada día (frases que el alumno ya puede decir) */
const U7_SEMANA = [["рабо́тать", "", "trabajo"], ["изуча́ть", "ру́сский", "estudio ruso"], ["ходи́ть", "в парк", "voy al parque"], ["рабо́тать", "до́ма", "trabajo en casa"],
  ["идти́", "в рестора́н", "voy al restaurante"], ["отдыха́ть", "", "descanso"], ["чита́ть", "", "leo"]];

const U7_VISTAS = {
  1: "оди́н два четы́ре пять шесть семь во́семь де́вять де́сять оди́ннадцать двена́дцать кото́рый",
  3: "понеде́льник вто́рник среда́ четве́рг пя́тница суббо́та воскресе́нье како́й",
  4: "неде́ля янва́рь февра́ль март апре́ль май ию́нь ию́ль а́вгуст сентя́брь октя́брь ноя́брь дека́брь о́тпуск",
  5: "обы́чно ре́дко",
  6: "принима́ть душ начина́ть зака́нчивать ложи́ться домо́й ра́но по́здно",
  7: "ско́лько",
  8: "план встре́ча пра́здник выходно́й"
};
const U7_AMPLIACION_RU = "";   /* ра́но y по́здно pasaron a la base (Manu, 05/10/2026) */

const U7_LECTURAS = [
  { id: "dia", titulo: "Мой день", lineas: [
      ["Я просыпа́юсь в семь часо́в.", "Me despierto a las siete."], ["Я за́втракаю до́ма.", "Desayuno en casa."], ["Пото́м я иду́ на рабо́ту.", "Después voy al trabajo."],
      ["Я начина́ю рабо́тать в де́вять часо́в.", "Empiezo a trabajar a las nueve."], ["Я обе́даю в час.", "Almuerzo a la una."], ["Ве́чером я возвраща́юсь домо́й.", "A la noche vuelvo a casa."],
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
  objetivo: "Decir la hora, hablar de días, meses y momentos del día, decir con qué frecuencia hacés algo y contar tu rutina y tu semana.",
  tiempo: "30–40 horas",
  modulos: [
    { id: "u7m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "¿Qué hora es?", resumen: "Кото́рый час? — Семь часо́в.",
      intro: "Para decir la hora alcanza con los números del 1 al 12 y una palabra: час (hora), que cambia según el número.",
      secciones: [
        { titulo: "Preguntar la hora", texto: "Кото́рый час? («¿qué hora es?») — Сейча́с семь часо́в («son las siete»). No hace falta сейча́с: Семь часо́в también está bien.", destacado: "Кото́рый час? — Семь часо́в." },
        { titulo: "Час, часа́, часо́в", texto: "La palabra час cambia según el número:\n1 → час (la una: Сейча́с час)\n2, 3, 4 → часа́ (два часа́)\n5 a 12 → часо́в (пять часо́в, двена́дцать часо́в)" },
        { titulo: "Por ahora, en punto", texto: "En esta unidad, las horas van en punto. Las medias horas («y media») llevan otra construcción, que llega más adelante." }
      ] },
    { id: "u7m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "Partes del día", resumen: "у́тро, день, ве́чер, ночь.",
      intro: "Las palabras para «a la mañana», «a la noche»… ya las usaste en la Unidad 5. Ahora se suman los sustantivos y la forma de decir «de la mañana».",
      secciones: [
        { titulo: "Los momentos del día", texto: "у́тро (la mañana) → у́тром (a la mañana)\nдень (el día, la tarde) → днём (a la tarde)\nве́чер (la noche temprana) → ве́чером (a la noche)\nночь (la noche) → но́чью (de noche)" },
        { titulo: "«De la mañana» y «de la noche»", texto: "Para aclarar la hora: в семь часо́в утра́ («a las siete de la mañana»), в во́семь часо́в ве́чера («a las ocho de la noche»). Утра́ y ве́чера van así, como fórmula. Ojo: no se dice «в семь часо́в у́тром».", destacado: "в семь часо́в утра́ · в во́семь часо́в ве́чера" },
        { titulo: "Cambiar el momento", texto: "Я рабо́таю у́тром → Я рабо́таю ве́чером. Cambia solo la palabra del momento; el resto queda igual." }
      ] },
    { id: "u7m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Días de la semana", resumen: "в понеде́льник, во вто́рник, в сре́ду…",
      intro: "Los días de la semana, para decir qué día es hoy y qué hacés cada día.",
      secciones: [
        { titulo: "Los siete días", texto: "понеде́льник (lunes), вто́рник (martes), среда́ (miércoles), четве́рг (jueves), пя́тница (viernes), суббо́та (sábado), воскресе́нье (domingo). En ruso se escriben con minúscula." },
        { titulo: "Qué día es", texto: "Како́й сего́дня день? («¿qué día es hoy?») — Сего́дня понеде́льник («hoy es lunes»). За́втра вто́рник («mañana es martes»). Así, sin cambiar la palabra." },
        { titulo: "«El lunes»: в + acusativo", texto: "Para decir cuándo hacés algo, в + el día en acusativo, como en la Unidad 4: в понеде́льник, в четве́рг, в воскресе́нье (no cambian), в сре́ду, в пя́тницу, в суббо́ту (-а → -у). Con вто́рник es **во** вто́рник, porque «в вт» es difícil de decir.", destacado: "в сре́ду · в пя́тницу · во вто́рник" }
      ] },
    { id: "u7m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Semanas y meses", resumen: "в январе́, в ма́е…",
      intro: "неде́ля (semana), ме́сяц (mes), год (año) y los doce meses.",
      secciones: [
        { titulo: "Los meses", texto: "янва́рь, февра́ль, март, апре́ль, май, ию́нь, ию́ль, а́вгуст, сентя́брь, октя́брь, ноя́брь, дека́брь. Se parecen mucho al español y también van con minúscula." },
        { titulo: "«En mayo»: в + prepositivo", texto: "Para decir en qué mes, в + el prepositivo de la Unidad 6: в ма́е, в а́вгусте, в январе́ (el acento pasa al final en los que terminan en -брь y en янва́рь, февра́ль: в сентябре́, в феврале́). Мой о́тпуск в а́вгусте («mis vacaciones son en agosto»).", destacado: "в ма́е · в а́вгусте · в сентябре́" },
        { titulo: "Las fechas, más adelante", texto: "Para decir «el 10 de septiembre» hacen falta los números ordinales y otro caso. Por ahora alcanza con el mes." }
      ] },
    { id: "u7m5", n: 5, tipo: "leccion", nPractica: 10, titulo: "Frecuencia", resumen: "всегда́, обы́чно, ча́сто, иногда́, ре́дко, никогда́.",
      intro: "Cuatro de estas palabras ya las conocés de la Unidad 5. Se suman dos: обы́чно y ре́дко.",
      secciones: [
        { titulo: "De más a menos", texto: "всегда́ (siempre)\nобы́чно (normalmente)\nча́сто (seguido)\nиногда́ (a veces)\nре́дко (pocas veces)\nникогда́ (nunca)" },
        { titulo: "Van antes del verbo", texto: "Я обы́чно пью ко́фе («normalmente tomo café»). Я ре́дко гото́влю («cocino pocas veces»). Я никогда́ не за́втракаю: con никогда́, también не, como en la Unidad 5.", destacado: "Я обы́чно пью ко́фе." }
      ] },
    { id: "u7m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Mi rutina", resumen: "Я просыпа́юсь в семь часо́в.",
      intro: "Los verbos de todos los días, para contar tu rutina de la mañana a la noche.",
      secciones: [
        { titulo: "Los verbos nuevos", texto: "принима́ть душ (ducharse)\nначина́ть рабо́тать (empezar a trabajar)\nзака́нчивать рабо́тать (terminar de trabajar)\nложи́ться спать (acostarse)\nвозвраща́ться домо́й (volver a casa)" },
        { titulo: "Temprano y tarde", texto: "ра́но (temprano) y по́здно (tarde): Я встаю́ ра́но («me levanto temprano»). Я ложу́сь спать по́здно («me acuesto tarde»)." },
        { titulo: "Agregar información", texto: "Una frase puede crecer sin cambiar lo que ya sabés:\nЯ просыпа́юсь.\nЯ просыпа́юсь в семь часо́в.\nЯ обы́чно просыпа́юсь в семь часо́в.\nЯ обы́чно просыпа́юсь в семь часо́в и за́втракаю до́ма.", truco: "¿Cuándo? ¿Dónde? ¿Cada cuánto? Cada respuesta es una pieza más." }
      ] },
    { id: "u7m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "Horarios", resumen: "Во ско́лько ты обе́даешь? — В час.",
      intro: "Para preguntar a qué hora pasa algo.",
      secciones: [
        { titulo: "¿A qué hora?", texto: "Во ско́лько ты обе́даешь? («¿a qué hora almorzás?») — В час («a la una»). Во ско́лько ты рабо́таешь? — В де́вять часо́в. Во ско́лько va así, como fórmula.", destacado: "Во ско́лько? — В де́вять часо́в." },
        { titulo: "Empezar y terminar", texto: "Я начина́ю рабо́тать в де́вять часо́в («empiezo a trabajar a las nueve»). Я зака́нчиваю рабо́тать в шесть часо́в («termino a las seis»)." }
      ] },
    { id: "u7m8", n: 8, tipo: "leccion", nPractica: 10, titulo: "Planes", resumen: "За́втра я рабо́таю. В суббо́ту я иду́ в рестора́н.",
      intro: "Para hablar de planes cercanos no hace falta el futuro: alcanza con el presente y un día, como en español («mañana trabajo»).",
      secciones: [
        { titulo: "Presente para planes", texto: "За́втра я рабо́таю («mañana trabajo»). В суббо́ту я иду́ в рестора́н («el sábado voy al restaurante»). Ве́чером я до́ма." },
        { titulo: "Palabras para los planes", texto: "план (plan), встре́ча (reunión, encuentro), пра́здник (fiesta, feriado), о́тпуск (vacaciones), выходно́й (día libre: Сего́дня выходно́й, «hoy es mi día libre»)." }
      ] },
    { id: "u7m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Mi semana", resumen: "В понеде́льник я рабо́таю…",
      intro: "Una semana entera, día por día. Primero mirá la agenda de Ana y después armá la tuya en el proyecto.",
      secciones: [
        { titulo: "De la agenda a la frase", texto: "Понеде́льник — рабо́та → В понеде́льник я рабо́таю.\nВто́рник — ру́сский → Во вто́рник я изуча́ю ру́сский.\nСреда́ — парк → В сре́ду я хожу́ в парк." }
      ] },
    { id: "u7m10", n: 10, tipo: "lectura", titulo: "Un día completo", resumen: "De la mañana a la noche.",
      intro: "Dos textos con todo lo de la unidad: un día y una semana. Leelos, escuchalos y contestá." },
    { id: "u7m11", n: 11, tipo: "proyecto", titulo: "Proyecto: Моя неде́ля", resumen: "Tu semana: agenda y texto.",
      intro: "Primero completá tu agenda: qué hacés cada día. Después escribí un texto sobre tu semana, con días, horarios y cada cuánto hacés las cosas. Por ejemplo: В понеде́льник я рабо́таю. Я начина́ю рабо́тать в де́вять часо́в. Во вто́рник я изуча́ю ру́сский. В суббо́ту я обы́чно отдыха́ю. Я никогда́ не рабо́таю в воскресе́нье.",
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
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u7Palabras(s[k]); }));
});
function unidad7Modulo(id) { return UNIDAD_7.modulos.find(m => m.id === id) || null; }

const U7_MEZCLA = { "hora-escribir": 3, "hora-elegir": 1, "hora-forma": 1, numero: 1, momento: 2, dia: 1, "dia-escribir": 2, "mes-escribir": 2, frec: 2, nunca: 1,
  rutina: 2, progresiva: 2, ordenar: 1, conjugar: 1, "conjugar-escribir": 2, horario: 2, "es-ru": 3, dictado: 3, emparejar: 1, significado: 1, "palabra-es-ru": 1, agenda: 2, lectura: 2, "lectura-vf": 1 };

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
  const SUJ = [["Я", "", 0], ["Ты", "Vos", 1], ["Он", "Él", 2], ["Она́", "Ella", 2], ["Мы", "", 3], ["Они́", "Ellos", 5]];
  const esP = i => [0, 1, 2, 3, 4, 4][i];
  const actRu = (k, i) => { const a = U7_ACT[k], v = verb[sin(a[0])]; return v.f[i] + (a[1] ? " " + a[1] : ""); };

  /* ── Módulo 1: la hora ── */
  for (let n = 1; n <= 12; n++) {
    const ru = cap(hora(n)) + ".", dig = (n < 10 ? "0" : "") + n + ":00", es = n === 1 ? "Es la una." : "Son las " + U7_NUM_ES[n] + ".";
    const base = { grupo: "H-" + n, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-hw-" + n, tipo: "hora-escribir", forma: "escribir", dificultad: 2, modulo: 1, pide: "Кото́рый час? Escribí la hora en ruso.", grande: u7Reloj(n) + "  " + dig,
      audio: ru, audioManual: true, esperadas: [ru, "Сейча́с " + hora(n) + "."].concat(n === 1 ? ["Оди́н час.", "Сейча́с оди́н час."] : []), idioma: "ru", explicacion: u7ReglaHora(n) + " " + es }, base));
    out.push(Object.assign({ id: "U7-ha-" + n, tipo: "hora-elegir", forma: "elegir", dificultad: 1, modulo: 1, pide: "Escuchá: ¿qué hora es?", audio: ru,
      opciones: baraja([dig].concat(baraja([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].filter(x => x !== n), n).slice(0, 3).map(x => (x < 10 ? "0" : "") + x + ":00")), n), correcta: dig, explicacion: ru + " = " + dig }, base));
    if (n !== 1 && n !== 3) out.push(Object.assign({ id: "U7-hf-" + n, tipo: "hora-forma", forma: "elegir", dificultad: 2, modulo: 1, pide: "Completá la hora.", grande: U7_NUM[n] + " _____",
      opciones: ["час", "часа́", "часо́в"], correcta: n <= 4 ? "часа́" : "часо́в", explicacion: u7ReglaHora(n) }, base));
    out.push(Object.assign({ id: "U7-hesru-" + n, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 1, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru, "Сейча́с " + hora(n) + "."], idioma: "ru", explicacion: u7ReglaHora(n) }, base));
    if (n !== 3) {
      const e = lex(U7_NUM[n]);
      out.push({ id: "U7-num-" + n, tipo: "numero", forma: "escribir", dificultad: 2, modulo: 1, grupo: "N-" + n, items: e ? ["lex:" + e.id] : [], pide: "Escribí el número en ruso: " + n, audio: U7_NUM[n], audioManual: true,
        esperadas: [U7_NUM[n]], idioma: "ru", explicacion: n + " = " + U7_NUM[n] });
    }
  }
  [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]].forEach((g, j) => out.push({ id: "U7-numemp-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 1, grupo: "NE-" + j, items: [],
    audioIzq: true, pista: "Tocá ▶ para escuchar y después el número.", pide: "Escuchá cada número y uní con su cifra.", pares: g.map(n => [U7_NUM[n], String(n)]), explicacion: g.map(n => n + " = " + U7_NUM[n]).join(" · ") }));

  /* ── Módulo 2: partes del día, утра́ / ве́чера ── */
  U7_PARTES.forEach(([nom, es, adv, esAdv], j) => {
    const e = lex(nom, "sustantivo"), base = { grupo: "P-" + j, items: e ? ["lex:" + e.id] : [], oir: adv };
    out.push(Object.assign({ id: "U7-pmo-" + j, tipo: "momento", forma: "elegir", dificultad: 1, modulo: 2, pide: "¿Cómo se dice «" + esAdv + "»?", opciones: baraja(U7_PARTES.map(x => x[2]), j), correcta: adv,
      explicacion: nom + " (" + es + ") → **" + adv + "** (" + esAdv + ")" }, base));
    out.push(Object.assign({ id: "U7-pmw-" + j, tipo: "momento", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribí en ruso: «" + esAdv + "»", audio: adv, audioManual: true, esperadas: [adv], idioma: "ru",
      explicacion: nom + " → " + adv }, base));
  });
  [[7, "у"], [8, "у"], [9, "у"], [11, "у"], [6, "в"], [7, "в"], [8, "в"], [10, "в"]].forEach(([n, p], j) => {
    const ru = cap(u7Ru(n, p)) + ".", es = cap(u7Es(n, p)) + ".";
    const base = { grupo: "UV-" + j, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-uv-" + j, tipo: "hora-escribir", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "**" + (p === "у" ? "утра́" : "ве́чера") + "** va así, como fórmula: " + ru }, base));
    out.push(Object.assign({ id: "U7-uve-" + j, tipo: "momento", forma: "elegir", dificultad: 2, modulo: 2, pide: "Completá: «" + es + "»", grande: "в " + hora(n) + " _____",
      opciones: p === "у" ? ["утра́", "у́тром"] : ["ве́чера", "ве́чером"], correcta: p === "у" ? "утра́" : "ве́чера",
      explicacion: "Con la hora va **" + (p === "у" ? "утра́" : "ве́чера") + "**; " + (p === "у" ? "у́тром" : "ве́чером") + " es «" + (p === "у" ? "a la mañana" : "a la noche") + "», sin hora." }, base));
  });
  /* Cambiar el momento: Я рабо́таю у́тром → ве́чером */
  ["trab", "des", "est", "cen", "peli"].filter(k => U7_ACT[k] && verb[sin(U7_ACT[k][0])]).forEach((k, j) => {
    const [a, b] = j % 2 ? ["у́тром", "ве́чером"] : ["ве́чером", "днём"];
    const ru1 = "Я " + actRu(k, 0) + " " + a + ".", ru2 = "Я " + actRu(k, 0) + " " + b + ".";
    out.push({ id: "U7-mom-" + j, tipo: "momento", forma: "escribir", dificultad: 2, modulo: 6, grupo: "MO-" + j, items: [], oir: ru2, pide: "Cambiá el momento: " + b + ".", grande: ru1, audio: ru2, audioManual: true,
      esperadas: [ru2, "Я " + b + " " + actRu(k, 0) + ".", cap(b) + " я " + actRu(k, 0) + "."], idioma: "ru", explicacion: "Cambia solo la palabra del momento: " + ru2 });
  });

  /* ── Módulo 3: días ── */
  dias.forEach((d, j) => {
    const base = { grupo: "D-" + d.id, items: ["lex:" + d.id], oir: d.pr + " " + d.acc };
    const sig = dias[(j + 1) % 7];
    out.push(Object.assign({ id: "U7-dsig-" + d.id, tipo: "dia", forma: "elegir", dificultad: 1, modulo: 3, pide: "¿Qué día es?", grande: d.nom, audio: d.nom,
      opciones: baraja([d.es].concat(baraja(dias.filter(x => x !== d).map(x => x.es), j).slice(0, 3)), j), correcta: d.es, explicacion: d.nom + " — " + d.es }, base));
    out.push(Object.assign({ id: "U7-dw-" + d.id, tipo: "dia-escribir", forma: "escribir", dificultad: 2, modulo: 3, pide: "Escribí en ruso: «el " + d.es + "» (cuándo).", audio: d.pr + " " + d.acc, audioManual: true,
      esperadas: [d.pr + " " + d.acc], idioma: "ru", explicacion: "**" + d.nom + " → " + d.pr + " " + d.acc + "**: " + (d.nom === d.acc ? "en acusativo queda igual." : "en acusativo -а → -у.") + (d.pr === "во" ? " Con вто́рник va во." : "") }, base));
    out.push(Object.assign({ id: "U7-dsg-" + d.id, tipo: "dia", forma: "elegir", dificultad: 2, modulo: 3, pide: "Сего́дня " + d.nom + ". ¿Qué día es mañana?", audio: "Сего́дня " + d.nom + ".",
      opciones: baraja([sig.nom].concat(baraja(dias.filter(x => x !== sig && x !== d).map(x => x.nom), j + 1).slice(0, 2)), j + 2), correcta: sig.nom, explicacion: "Сего́дня " + d.nom + ", за́втра " + sig.nom + "." }, base));
    out.push(Object.assign({ id: "U7-dpr-" + d.id, tipo: "dia", forma: "elegir", dificultad: 2, modulo: 3, pide: "Completá: «el " + d.es + "»", grande: "_____ " + d.acc,
      opciones: ["в", "во"], correcta: d.pr, explicacion: d.pr === "во" ? "**во** вто́рник: «в вт» es difícil de decir." : "**в** " + d.acc + "." }, base));
    out.push(Object.assign({ id: "U7-ddic-" + d.id, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 3, pide: "Escuchá y escribí.", audio: "Сего́дня " + d.nom + ".", esperadas: ["Сего́дня " + d.nom + "."], idioma: "ru",
      explicacion: "Сего́дня " + d.nom + ". — Hoy es " + d.es + "." }, base));
  });

  /* ── Módulo 4: meses ── */
  meses.forEach((m, j) => {
    const base = { grupo: "M-" + m.id, items: ["lex:" + m.id], oir: "в " + m.prep };
    out.push(Object.assign({ id: "U7-msig-" + m.id, tipo: "dia", forma: "elegir", dificultad: 1, modulo: 4, pide: "¿Qué mes es?", grande: m.nom, audio: m.nom,
      opciones: baraja([m.es].concat(baraja(meses.filter(x => x !== m).map(x => x.es), j).slice(0, 3)), j), correcta: m.es, explicacion: m.nom + " — " + m.es }, base));
    out.push(Object.assign({ id: "U7-mw-" + m.id, tipo: "mes-escribir", forma: "escribir", dificultad: 2, modulo: 4, pide: "Escribí en ruso: «en " + m.es + "».", audio: "в " + m.prep, audioManual: true,
      esperadas: ["в " + m.prep], idioma: "ru", explicacion: "**" + m.nom + " → в " + m.prep + "**: en prepositivo, como en la Unidad 6." }, base));
  });
  [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].forEach((g, j) => out.push({ id: "U7-memp-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 1, modulo: 4, grupo: "ME-" + j, items: g.map(k => "lex:" + meses[k].id),
    pide: "Uní cada mes con su nombre en español.", pares: g.map(k => [meses[k].nom, meses[k].es]), explicacion: g.map(k => meses[k].nom + " = " + meses[k].es).join(" · ") }));
  [[7, "Мой о́тпуск в а́вгусте.", "Mis vacaciones son en agosto."], [0, "Мой о́тпуск в январе́.", "Mis vacaciones son en enero."], [4, "Мой пра́здник в ма́е.", null]].forEach(([k, ru, es], j) => {
    if (!es) return;
    out.push({ id: "U7-otp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, grupo: "OT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " **" + meses[k].nom + " → в " + meses[k].prep + "**." });
  });

  /* ── Módulo 5: frecuencia ── */
  const habitos = [["пить", "ко́фе", ["tomo café", "tomás café", "toma café", "tomamos café", "toman café"]], ["гото́вить", "", ["cocino", "cocinás", "cocina", "cocinamos", "cocinan"]],
    ["гуля́ть", "", ["paseo", "paseás", "pasea", "paseamos", "pasean"]], ["чита́ть", "", ["leo", "leés", "lee", "leemos", "leen"]], ["за́втракать", "", ["desayuno", "desayunás", "desayuna", "desayunamos", "desayunan"]],
    ["рабо́тать", "у́тром", ["trabajo a la mañana", "trabajás a la mañana", "trabaja a la mañana", "trabajamos a la mañana", "trabajan a la mañana"]]];
  Object.keys(U7_FREC).forEach((adv, a) => habitos.forEach(([vk, extra, es], j) => {
    if ((a + j) % 2) return;
    const v = verb[sin(vk)]; if (!v) return;
    const s = SUJ[(a + j) % SUJ.length], i = s[2], neg = adv === "никогда́" ? "не " : "";
    const ru = s[0] + " " + adv + " " + neg + v.f[i] + (extra ? " " + extra : "") + ".";
    const esF = cap(((s[1] ? s[1] + " " : "") + U7_FREC[adv] + " " + es[esP(i)]).trim()) + ".";
    const base = { grupo: "F-" + a + "-" + j, items: ["lex:" + v.id], oir: ru };
    out.push(Object.assign({ id: "U7-fesru-" + a + "-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribí en ruso: «" + esF + "»", audio: ru, audioManual: true,
      esperadas: [ru].concat(i === 0 || i === 1 ? [cap(adv) + " " + neg + v.f[i] + (extra ? " " + extra : "") + "."] : []), idioma: "ru",
      explicacion: "**" + adv + "** = " + U7_FREC[adv] + ", antes del verbo" + (neg ? ", y con никогда́ va не" : "") + ". " + ru }, base));
    out.push(Object.assign({ id: "U7-fel-" + a + "-" + j, tipo: "frec", forma: "elegir", dificultad: 1, modulo: 5, pide: "Completá: «" + esF + "»", grande: s[0] + " _____ " + neg + v.f[i] + (extra ? " " + extra : "") + ".",
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
      pide: "Escribí la forma del verbo.", grande: PL[i] + " + " + v.ac, audio: pR[i] + " " + f, audioManual: true, esperadas: [f, pR[i] + " " + f], idioma: "ru", explicacion: "**" + v.ac + " → " + PL[i] + " " + f + "**" }));
  });
  Object.keys(U7_ACT).forEach((k, j) => {
    const a = U7_ACT[k], v = verb[sin(a[0])]; if (!v) return;
    const s = SUJ[j % SUJ.length], i = s[2];
    const ru = s[0] + " " + actRu(k, i) + " " + u7Ru(a[4], a[5]) + ".", es = cap(((s[1] ? s[1] + " " : "") + a[2][esP(i)] + " " + u7Es(a[4], a[5])).trim()) + ".";
    const base = { grupo: "R-" + k, items: ["lex:" + v.id], oir: ru };
    out.push(Object.assign({ id: "U7-resru-" + k, tipo: "rutina", forma: "escribir", dificultad: 3, modulo: 6, pide: a[3] + " Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru, s[0] + " " + actRu(k, i) + " " + u7Ru(a[4], "") + "."].concat(i <= 1 ? [cap(actRu(k, i)) + " " + u7Ru(a[4], a[5]) + "."] : []), idioma: "ru", explicacion: ru + " " + u7ReglaHora(a[4]) }, base));
    out.push(Object.assign({ id: "U7-rcomp-" + k, tipo: "rutina", forma: "escribir", dificultad: 2, modulo: 6, pide: "Completá con «" + v.ac + "».", grande: s[0] + " _____" + (a[1] ? " " + a[1] : "") + " " + u7Ru(a[4], a[5]) + ".",
      pista: es, audio: ru, audioManual: true, esperadas: [v.f[i]], idioma: "ru", explicacion: "**" + v.ac + " → " + ["я", "ты", "он / она́", "мы", "вы", "они́"][i] + " " + v.f[i] + "**. " + ru }, base));
    out.push(Object.assign({ id: "U7-rdic-" + k, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 6, pide: "Escuchá y escribí la frase.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
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
        pide: "Agregá «" + nuevo.replace(/\.$/, "") + "» a la frase.", grande: pasos[p - 1], audio: pasos[p], audioManual: true, esperadas: [pasos[p]], idioma: "ru",
        explicacion: "La frase crece sin cambiar lo demás: " + pasos[p] });
    }
  });
  /* Línea del día: ordenar */
  [U7_ORDEN_DIA.slice(0, 5), U7_ORDEN_DIA.slice(3)].forEach((ks, j) => {
    const fichas = ks.map(k => actRu(k, 0));
    let fi = baraja(fichas, j + 9); if (fi.join(" · ") === fichas.join(" · ")) fi = fi.slice(1).concat(fi[0]);
    out.push({ id: "U7-linea-" + j, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: 6, grupo: "LI-" + j, items: [], pide: "Ordená tu día, de la mañana a la noche.", fichas: fi, sep: " · ",
      esperada: fichas.join(" · "), audio: fichas.join(", "), explicacion: ks.map(k => U7_ACT[k][3] + " " + actRu(k, 0)).join(" → ") });
  });
  /* Ampliación: ра́но y по́здно */
  [["Я встаю́ ра́но.", "Me levanto temprano."], ["Я ложу́сь спать по́здно.", "Me acuesto tarde."], ["Он рабо́тает по́здно.", "Él trabaja hasta tarde."], ["Мы за́втракаем ра́но.", "Desayunamos temprano."]].forEach(([ru, es], j) =>
    out.push({ id: "U7-amp-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 6, grupo: "AM-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " — ра́но = temprano · по́здно = tarde" }));

  /* ── Módulo 7: horarios ── */
  ["des", "alm", "ini", "fin", "cen", "acost", "trab"].forEach((k, j) => {
    const a = U7_ACT[k], v = verb[sin(a[0])]; if (!v) return;
    const q = "Во ско́лько ты " + actRu(k, 1) + "?", r = cap(u7Ru(a[4], "")) + ".";
    const base = { grupo: "HO-" + k, items: ["lex:" + v.id], oir: r };
    out.push(Object.assign({ id: "U7-hor-" + k, tipo: "horario", forma: "escribir", dificultad: 2, modulo: 7, contexto: [{ p: "—", ru: q }], pide: a[3] + " " + u7Reloj(a[4]) + " Contestá con la hora.", audio: q, audioManual: true,
      esperadas: [r, "Я " + actRu(k, 0) + " " + u7Ru(a[4], "") + ".", cap(u7Ru(a[4], a[5])) + "."], idioma: "ru", explicacion: "— " + q + " — " + r + " " + u7ReglaHora(a[4]) }, base));
    out.push(Object.assign({ id: "U7-horq-" + k, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 7, pide: "Escribí en ruso: «¿A qué hora " + a[2][1] + "?»", audio: q, audioManual: true, esperadas: [q], idioma: "ru",
      explicacion: q + " Во ско́лько = ¿a qué hora?" }, base));
    const ru3 = "Он " + actRu(k, 2) + " " + u7Ru(a[4], a[5]) + ".";
    out.push(Object.assign({ id: "U7-hort-" + k, tipo: "hora-elegir", forma: "elegir", dificultad: 2, modulo: 7, contexto: [{ p: "", ru: ru3 }], pide: "¿A qué hora?", audio: ru3,
      opciones: baraja([u7Es(a[4], a[5])].concat(baraja([2, 3, 5, 10, 12].filter(x => x !== a[4]), j).slice(0, 2).map(x => u7Es(x, a[5]))), j), correcta: u7Es(a[4], a[5]), explicacion: ru3 + " — " + u7Es(a[4], a[5]) }, base));
  });

  /* ── Módulo 8: planes ── */
  [["За́втра я рабо́таю.", "Mañana trabajo."], ["В суббо́ту я иду́ в рестора́н.", "El sábado voy al restaurante."], ["Ве́чером я до́ма.", "A la noche estoy en casa."],
   ["Сего́дня выходно́й.", "Hoy es mi día libre."], ["За́втра у́тром я иду́ в парк.", "Mañana a la mañana voy al parque."], ["В пя́тницу я рабо́таю до́ма.", "El viernes trabajo en casa."],
   ["В воскресе́нье пра́здник.", "El domingo es feriado."], ["За́втра встре́ча в о́фисе.", "Mañana hay una reunión en la oficina."], ["Мой о́тпуск в ию́ле.", "Mis vacaciones son en julio."],
   ["Како́й у тебя́ план?", null]].forEach(([ru, es], j) => {
    if (!es) return;
    const base = { grupo: "PL-" + j, items: [], oir: ru };
    out.push(Object.assign({ id: "U7-plesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }, base));
    out.push(Object.assign({ id: "U7-pldic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 8, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }, base));
  });

  /* ── Módulo 9: mi semana (la agenda de Ana) ── */
  const agenda = U7_SEMANA.map(([vk, extra, es], j) => {
    const v = verb[sin(vk)], d = dias[j], f3 = v.f[2], f1 = v.f[0];
    return { d, ru3: cap(d.pr) + " " + d.acc + " А́нна " + f3 + (extra ? " " + extra : "") + ".", ru1: cap(d.pr) + " " + d.acc + " я " + f1 + (extra ? " " + extra : "") + ".", es, act: f3 + (extra ? " " + extra : ""), vid: v.id };
  });
  const textoAg = agenda.map(x => x.d.nom.charAt(0).toUpperCase() + x.d.nom.slice(1) + " — " + x.act);
  agenda.forEach((x, j) => {
    const base = { grupo: "AG-" + j, items: ["lex:" + x.d.id, "lex:" + x.vid], oir: x.ru3 };
    out.push(Object.assign({ id: "U7-ag-" + j, tipo: "agenda", forma: "elegir", dificultad: 2, modulo: 9, texto: textoAg, pide: "Mirá la agenda de Ana. ¿Qué hace el " + x.d.es + "?",
      opciones: baraja([x.act].concat(baraja(agenda.filter(y => y.act !== x.act).map(y => y.act), j).slice(0, 2)), j), correcta: x.act, explicacion: x.ru3 }, base));
    out.push(Object.assign({ id: "U7-agw-" + j, grupo: "AGW-" + j, tipo: "agenda", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribí la frase completa, en primera persona.", grande: x.d.nom + " — " + x.es,
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
  [["Я рабо́таю у́тром.", "Trabajo a la mañana."], ["Я рабо́таю в де́вять часо́в.", "Trabajo a las nueve."], ["Я рабо́таю в о́фисе в де́вять часо́в.", "Trabajo en la oficina a las nueve."],
   ["Я обы́чно рабо́таю в о́фисе у́тром.", "Normalmente trabajo en la oficina a la mañana."]].forEach(([ru, es], j) =>
    out.push({ id: "U7-niv-" + j, tipo: "dictado", forma: "escribir", dificultad: j < 2 ? 1 : j < 3 ? 2 : 3, modulo: 10, grupo: "NV-" + j, items: [], oir: ru, pide: "Escuchá y escribí (nivel " + (j + 1) + ").",
      audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es }));

  /* ── Vocabulario de las palabras nuevas (salvo números, días y meses, que tienen sus ejercicios) ── */
  const yaTienen = new Set(dias.map(d => d.id).concat(meses.map(m => m.id)));
  const dicEs = { "обы́чно": "normalmente", "ре́дко": "pocas veces", "план": "plan", "встре́ча": "reunión", "пра́здник": "fiesta, feriado", "о́тпуск": "vacaciones", "выходно́й": "día libre",
    "неде́ля": "semana", "душ": "ducha", "начина́ть": "empezar", "зака́нчивать": "terminar", "ложи́ться": "acostarse", "принима́ть": "tomar (una ducha)", "домо́й": "a casa", "ра́но": "temprano", "по́здно": "tarde" };
  const modDe = { "обы́чно": 5, "ре́дко": 5, "план": 8, "встре́ча": 8, "пра́здник": 8, "о́тпуск": 4, "выходно́й": 8, "неде́ля": 4, "душ": 6, "начина́ть": 6, "зака́нчивать": 6, "ложи́ться": 6, "принима́ть": 6, "домо́й": 6, "ра́но": 6, "по́здно": 6 };
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(7) >= 0 && dicEs[e.acento] && !yaTienen.has(e.id));
  nuevas.forEach((e, i) => {
    const es = dicEs[e.acento], m = modDe[e.acento], amp = U7_AMPLIACION_RU.split(" ").indexOf(e.acento) >= 0;
    const dis = baraja(nuevas.filter(x => x.id !== e.id && modDe[x.acento] === m).map(x => dicEs[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru, ampliacion: amp || undefined };
    if (dis.length >= 2) out.push(Object.assign({ id: "U7-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U7-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribí en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });
  out.forEach(e => { if (e.explicacion) e.explicacion = u7Palabras(e.explicacion); if (e.pide) e.pide = u7Palabras(e.pide); });
  return out;
}

/* Proyecto «Моя неде́ля»: requisitos y consejos */
(function () {
  const m = UNIDAD_7.modulos.find(x => x.id === "u7m11");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const clave = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(clave(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*/).map(x => x.trim()).filter(x => pal(x).length >= 1);
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
