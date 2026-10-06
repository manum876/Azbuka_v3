/* ============================================================
   DATA-UNIDAD-14.JS — Examen final (Unidad 14)
   ------------------------------------------------------------
   Versión 06/10/2026. Seis bloques, 100 puntos:
     Чтение 15 · Аудирование 15 · Грамма́тика 20 · Ле́ксика 10 ·
     Письмо́ 20 · Обще́ние 20
   Decisiones de Manu (06/10/2026):
   · «Моя́ исто́рия» (200–250 palabras) es el texto largo de Escritura.
   · Se aprueba con 80 → pantalla «Ты говори́шь по-ру́сски».
   · En el examen, una respuesta libre que «Se entiende» vale medio punto.
   · Sin vocabulario nuevo: solo palabras vistas en las Unidades 1 a 13.
   Cada bloque se hace por separado y se guarda (az_examen_final).
   La escritura se puntúa por cobertura de objetivos (U13_R, de
   data-unidad-13.js), con descuento por palabras que no existen y
   errores típicos: es una aproximación, y la página lo dice.
   ============================================================ */

function u14E(es, formas, rx, consigna) { const e = { es, formas: formas ? formas.split("|") : [] }; if (rx) e.rx = rx; if (consigna) e.consigna = consigna; return e; }
const U14_PASADO_RX = "(л|ла|ло|ли)$";

/* ── Bloque 1: lectura (tres textos de dificultad creciente) ── */
const U14_LECTURAS = [
  { id: "msj", titulo: "Сообще́ние", lineas: [
      "Приве́т! Сего́дня я рабо́таю до шести́.", "По́сле рабо́ты я хочу́ пойти́ в кафе́ с друзья́ми.", "Мы бу́дем в кафе́ ря́дом с метро́.", "Хо́чешь пойти́ с на́ми? Напиши́ мне! Ма́ша"],
    preguntas: [["¿Hasta qué hora trabaja Masha?", "до шести́", ["до семи́", "до пяти́"]], ["¿Qué quiere hacer después del trabajo?", "пойти́ в кафе́", ["пойти́ домо́й", "пойти́ в теа́тр"]],
      ["¿Con quién?", "с друзья́ми", ["с ма́мой", "с бра́том"]], ["¿Dónde van a estar?", "ря́дом с метро́", ["в це́нтре", "до́ма"]]],
    vf: [["Ма́ша хо́чет пойти́ в кафе́ с тобо́й.", true]] },
  { id: "poezdka", titulo: "Моя́ пое́здка в Москву́", lineas: [
      "В а́вгусте я е́здила в Москву́ с подру́гой.", "Мы бы́ли там пять дней и жи́ли в гости́нице ря́дом с метро́.", "Ка́ждый день мы мно́го гуля́ли и смотре́ли го́род.",
      "В понеде́льник мы бы́ли в музе́е, а ве́чером ходи́ли в теа́тр.", "Пого́да была́ хоро́шая: бы́ло тепло́.", "Мне о́чень понра́вилось метро́, потому́ что оно́ краси́вое и удо́бное.",
      "В Москве́ всё сли́шком до́рого, поэ́тому мы ча́сто обе́дали в ма́леньких кафе́.", "Пото́м мы купи́ли пода́рки для на́ших семе́й.",
      "Э́то была́ моя́ са́мая интере́сная пое́здка.", "В сле́дующем году́ я хочу́ пое́хать в Москву́."],
    preguntas: [["¿Con quién viajó?", "с подру́гой", ["с бра́том", "с ма́мой"]], ["¿Cuántos días estuvieron?", "пять дней", ["два дня", "де́сять дней"]],
      ["¿Qué hicieron el lunes a la noche?", "ходи́ли в теа́тр", ["бы́ли в музе́е", "гуля́ли в па́рке"]], ["¿Por qué almorzaban en bares chicos?", "всё сли́шком до́рого", ["там бы́ло тепло́", "там бы́ло краси́во"]],
      ["¿Qué piensa ella del viaje?", "са́мая интере́сная пое́здка", ["сли́шком дорога́я пое́здка", "ску́чная пое́здка"]]],
    vf: [["Ей не понра́вилось метро́.", false], ["Она́ хо́чет пое́хать в Москву́ в сле́дующем году́.", true]] },
  { id: "barselona", titulo: "Почему́ я люблю́ Барсело́ну", lineas: [
      "Я живу́ в Барсело́не уже́ пять лет, и мне здесь о́чень нра́вится.", "По-мо́ему, э́то са́мый удо́бный го́род в Испа́нии.",
      "Здесь хоро́шее метро́, поэ́тому у меня́ нет маши́ны.", "Ещё здесь есть мо́ре и го́ры.", "Ле́том я ча́сто хожу́ на пляж, а зимо́й е́зжу в го́ры с друзья́ми.",
      "Пого́да здесь лу́чше, чем в Москве́: зимо́й тут тепло́.", "Коне́чно, есть и пробле́мы.", "Кварти́ры здесь сли́шком дороги́е, и ле́том в го́роде о́чень мно́го люде́й.",
      "Хотя́ жить здесь до́рого, я счита́ю, что Барсело́на — о́чень хоро́ший го́род.", "Я не хочу́ жить в друго́м го́роде."],
    preguntas: [["¿Cuál es la idea principal?", "мне здесь о́чень нра́вится", ["я не хочу́ здесь жить", "здесь сли́шком до́рого"]], ["¿Por qué no tiene auto?", "хоро́шее метро́", ["нет де́нег", "нет вре́мени"]],
      ["¿Con qué ciudad la compara?", "лу́чше, чем в Москве́", ["лу́чше, чем в Мадри́де", "ху́же, чем в Москве́"]], ["¿Qué problema menciona?", "кварти́ры здесь сли́шком дороги́е", ["пого́да плоха́я", "нет мо́ря"]],
      ["¿Qué hace en invierno?", "е́зжу в го́ры", ["хожу́ на пляж", "рабо́таю до́ма"]]],
    vf: [["Э́тот челове́к хо́чет жить в друго́м го́роде.", false], ["Зимо́й в Барсело́не тепло́.", true]] }
];

/* ── Bloque 2: audio (diálogo, conversación, relato y respuesta escrita) ── */
const U14_AUDIOS = [
  { id: "kafe", rate: 0.85, titulo: "Diálogo en un bar", lineas: [["m", "Здра́вствуйте! Что вы бу́дете?"], ["f", "Чай и сала́т, пожа́луйста."], ["m", "Чёрный и́ли зелёный чай?"], ["f", "Зелёный."], ["m", "Э́то всё?"], ["f", "Да, спаси́бо. Мо́жно карто́й?"], ["m", "Коне́чно."]],
    preguntas: [["¿Qué té pide?", "зелёный", ["чёрный", "с молоко́м"]], ["¿Cómo paga?", "карто́й", ["нали́чными", "не пла́тит"]]], vf: [["Она́ зака́зывает ко́фе.", false]] },
  { id: "lena", rate: 0.9, titulo: "Conversación entre amigos", lineas: [["m", "Приве́т, А́нна! Как дела́?"], ["f", "Хорошо́! Я тепе́рь рабо́таю в но́вом о́фисе."], ["m", "Где он нахо́дится?"], ["f", "В це́нтре, ря́дом с музе́ем. А ты? Каки́е у тебя́ пла́ны на ле́то?"],
      ["m", "В ию́ле я пое́ду в Мадри́д. Там живёт мой брат."], ["f", "Отли́чно! А я хочу́ пое́хать на мо́ре, но у меня́ ма́ло вре́мени."], ["m", "Мо́жет быть, в а́вгусте?"], ["f", "Наве́рное, да."]],
    preguntas: [["¿Dónde está la oficina nueva?", "в це́нтре", ["у мо́ря", "в Мадри́де"]], ["¿Cuándo viaja él?", "в ию́ле", ["в а́вгусте", "в ма́е"]], ["¿Quién vive en Madrid?", "брат", ["сестра́", "А́нна"]],
      ["¿Por qué ella todavía no va al mar?", "ма́ло вре́мени", ["нет де́нег", "пло́хая пого́да"]]], vf: [["А́нна, наве́рное, пое́дет на мо́ре в а́вгусте.", true]] },
  { id: "subbota", rate: 0.95, titulo: "Relato: el sábado de Olga", lineas: [["f", "В суббо́ту у́тром я до́лго спала́."], ["f", "Пото́м я позвони́ла подру́ге, и мы пошли́ в парк."], ["f", "Там мы гуля́ли два часа́ и говори́ли о рабо́те."],
      ["f", "По́сле э́того мы пообе́дали в ма́леньком кафе́."], ["f", "Ве́чером я была́ до́ма: чита́ла кни́гу и смотре́ла фильм."], ["f", "Э́то был о́чень хоро́ший день, хотя́ бы́ло хо́лодно."], ["f", "А в воскресе́нье я бу́ду рабо́тать."]],
    preguntas: [["¿Qué hizo primero?", "до́лго спала́", ["позвони́ла подру́ге", "чита́ла кни́гу"]], ["¿Cuánto tiempo pasearon?", "два часа́", ["весь день", "пять часо́в"]],
      ["¿Qué hicieron después de pasear?", "пообе́дали", ["пошли́ в парк", "смотре́ли фильм"]], ["¿Qué va a hacer el domingo?", "бу́ду рабо́тать", ["бу́ду отдыха́ть", "бу́ду чита́ть"]]],
    vf: [["Бы́ло тепло́.", false], ["Ве́чером она́ была́ до́ма.", true]] }
];
/* Escuchar y contestar por escrito en ruso */
const U14_AUDIO_RESP = [
  { audio: [{ texto: "Приве́т! Мы в кафе́ ря́дом с метро́. Ты пойдёшь с на́ми?", genero: "f" }], pide: "Escuchá. Contestá: no podés ir, decí por qué y proponé otro día.",
    nec: [u14E("no podés", "не могу́|не пойду́|не смогу́|~нет"), u14E("por qué", "потому́ что|~рабо́таю|~у меня́"), u14E("otro día", "в суббо́ту|в воскресе́нье|за́втра|~в")], modelo: "Извини́, я не могу́, потому́ что я рабо́таю. Дава́й за́втра?" },
  { audio: [{ texto: "Здра́вствуйте! Что вы де́лали на ле́тних кани́кулах?", genero: "m" }], pide: "Escuchá. Contestá qué hiciste el verano pasado (dos cosas).",
    nec: [u14E("en pasado", "", U14_PASADO_RX, "Hay que contarlo en pasado."), u14E("otra cosa", "и|пото́м|ещё|~а")], modelo: "Ле́том я е́здил на мо́ре и мно́го чита́л." }
];

/* ── Bloque 3: gramática ── */
const U14_GRAM = {
  casos: [["Я даю́ пода́рок _____.", "А́нне", ["А́нна", "А́нну", "А́нне"], "dativo: a quién"], ["Я ви́жу _____.", "А́нну", ["А́нна", "А́нну", "А́нне"], "acusativo: a quién veo"],
    ["У _____ есть маши́на.", "А́нны", ["А́нна", "А́нны", "А́нне"], "у + genitivo"], ["Я гуля́ю с _____.", "А́нной", ["А́нной", "А́нне", "А́нну"], "с + instrumental"],
    ["Мы говори́м об _____.", "А́нне", ["А́нне", "А́нну", "А́нной"], "о / об + prepositivo"], ["_____ живёт в Москве́.", "А́нна", ["А́нна", "А́нну", "А́нны"], "quién: nominativo"]],
  tiempos: [["Вчера́ я рабо́тал.", "За́втра…", "За́втра я бу́ду рабо́тать."], ["Вчера́ я рабо́тал.", "Сего́дня…", "Сего́дня я рабо́таю."], ["Сейча́с мы гуля́ем в па́рке.", "Вчера́…", "Вчера́ мы гуля́ли в па́рке."]],
  concord: [["А́нна вчера́ _____ до́ма.", "была́", ["был", "была́", "бы́ли"]], ["Мои́ друзья́ _____ в рестора́не.", "бы́ли", ["был", "была́", "бы́ли"]],
    ["Мы _____ ру́сский язы́к.", "у́чим", ["учу́", "у́чим", "у́чат"]], ["Э́то _____ кни́га.", "моя́", ["мой", "моя́", "моё"]]],
  prep: [["Я живу́ _____ Барсело́не.", "в"], ["Мы бы́ли _____ пля́же.", "на"], ["Я _____ Аргенти́ны.", "из"], ["Ко́фе _____ молока́, пожа́луйста.", "без"],
    ["Э́то пода́рок _____ ма́мы.", "для"], ["_____ рабо́ты я иду́ домо́й.", "По́сле"], ["Я рабо́таю _____ шести́.", "до"], ["Я гуля́ю _____ соба́кой.", "с"]],
  orden: [["Вчера́ я был в рестора́не с друзья́ми.", "Ayer estuve en el restaurante con mis amigos."], ["За́втра мы пое́дем на мо́ре.", "Mañana vamos a ir al mar."], ["Мне о́чень нра́вится э́тот го́род.", "Me gusta mucho esta ciudad."]],
  corr: [["А́нна вчера́ рабо́тал.", "рабо́тал", "рабо́тала", "А́нна: **рабо́тала**."], ["У меня́ нет маши́на.", "маши́на", "маши́ны", "нет + genitivo: **маши́ны**."],
    ["Я говорю́ с мои́м друг.", "друг", "дру́гом", "с + instrumental: **дру́гом**."], ["Мы живём в Москва́.", "Москва́", "Москве́", "в + prepositivo: **Москве́**."], ["За́втра я бу́ду прочита́ю кни́гу.", "бу́ду", "", "Sin бу́ду: **За́втра я прочита́ю кни́гу.**"]]
};

/* ── Bloque 4: vocabulario en contexto ── */
const U14_LEX = [
  ["Я жду _____ на остано́вке.", "авто́бус", ["авто́бус", "по́езд", "самолёт"]], ["В _____ мы покупа́ем хлеб и молоко́.", "магази́не", ["магази́не", "музе́е", "теа́тре"]],
  ["Мой брат рабо́тает в больни́це. Он _____.", "врач", ["врач", "учи́тель", "архите́ктор"]], ["Мне хо́лодно. Закро́й, пожа́луйста, _____.", "окно́", ["окно́", "кни́гу", "дверь"]],
  ["Ты в рестора́не и хо́чешь заказа́ть ко́фе. Что ты говори́шь?", "Мо́жно ко́фе, пожа́луйста?", ["Мо́жно ко́фе, пожа́луйста?", "Где мой ко́фе?", "Я не пью ко́фе."]],
  ["В ию́ле в Барсело́не о́чень _____.", "тепло́", ["тепло́", "хо́лодно", "ра́но"]], ["Я не понима́ю. _____, пожа́луйста.", "Повтори́те", ["Повтори́те", "Да́йте", "Закро́йте"]],
  ["В свобо́дное вре́мя я _____ чита́ть.", "люблю́", ["люблю́", "рабо́таю", "звоню́"]], ["Биле́т на по́езд мо́жно купи́ть на _____.", "вокза́ле", ["вокза́ле", "пля́же", "ку́хне"]],
  ["Э́то мой _____: он живёт в кварти́ре ря́дом.", "сосе́д", ["сосе́д", "колле́га", "врач"]], ["Она́ рабо́тает в шко́ле. Она́ _____.", "учи́тельница", ["учи́тельница", "врач", "архите́ктор"]]
];
const U14_LEX_EMP = [
  [["расписа́ние", "¿A qué hora sale el tren?"], ["меню́", "¿Qué hay para comer?"], ["биле́т", "Para viajar en tren"], ["объявле́ние", "Se vende un departamento"]],
  [["Приве́т!", "Te encontrás con un amigo"], ["До свида́ния!", "Te vas de una tienda"], ["Спаси́бо!", "Alguien te ayudó"], ["Извини́те!", "Le preguntás algo a un desconocido"]]
];

/* ── Bloque 6: comunicación ── */
const U14_SITUACIONES = [
  { escena: "👕", pide: "Estás en una tienda. Buscás otra camisa porque esta es chica. Pedile ayuda al vendedor.", nec: [u14E("pedir", "мо́жно|помоги́те|извини́те|скажи́те|у вас есть|~есть"), u14E("la camisa", "руба́шку|руба́шка|руба́шки"), u14E("el problema", "ма́ленькая|бо́льше|друга́я|другу́ю|~ма́ленький")], modelo: "Извини́те, у вас есть друга́я руба́шка? Э́та ма́ленькая." },
  { escena: "🚇", pide: "Estás en la calle y no encontrás el metro. Preguntale a alguien.", nec: [u14E("disculparte", "извини́те|скажи́те|~прости́те"), u14E("el metro", "метро́"), u14E("dónde", "где|как дое́хать|как пройти́|~куда́")], modelo: "Извини́те, где здесь метро́?" },
  { escena: "🍽️", pide: "En un restaurante, pedí la cuenta y preguntá si se puede pagar con tarjeta.", nec: [u14E("la cuenta", "счёт"), u14E("con tarjeta", "карто́й|ка́рту|ка́рта")], modelo: "Счёт, пожа́луйста. Мо́жно карто́й?" },
  { escena: "⏰", pide: "Vas a llegar tarde a una cita con un amigo. Mandale un mensaje: avisá y decí cuánto.", nec: [u14E("vas a llegar tarde", "опозда́ю|опа́здываю|~по́здно"), u14E("cuánto", "мину́т|мину́ты|час|~на")], modelo: "Извини́, я опозда́ю на де́сять мину́т." }
];
const U14_ESPONT = [
  { audio: "Что ты де́лал в суббо́ту?", pide: "Contestá libremente (en pasado).", nec: [u14E("en pasado", "", U14_PASADO_RX, "Hay que contestar en pasado.")], modelo: "В суббо́ту я гуля́л с друзья́ми." },
  { audio: "Каки́е у тебя́ пла́ны на сле́дующую неде́лю?", pide: "Contestá libremente (planes).", nec: [u14E("un plan", "бу́ду|пое́ду|пойду́|хочу́|~позвоню́")], modelo: "На сле́дующей неде́ле я бу́ду мно́го рабо́тать." },
  { audio: "Что тебе́ нра́вится в твоём го́роде?", pide: "Contestá con una razón.", nec: [u14E("lo que te gusta", "мне нра́вится|нра́вится|люблю́|~здесь"), u14E("una razón", "потому́ что|поэ́тому|~здесь")], modelo: "Мне нра́вится мо́ре, потому́ что я люблю́ гуля́ть." }
];
/* Conversación de diez intervenciones */
function U14_CONV() {
  const E = u14E;
  return { quien: "Ми́ша", genero: "m", titulo: "Conversación con Misha", chat: false, pasos: [
    ["Приве́т! Как дела́?", "¡Hola! ¿Cómo andás?", "Contestá y devolvé la pregunta.", [E("cómo estás", "хорошо́|норма́льно|отли́чно|пло́хо|~ничего́"), { es: "una pregunta de vuelta", pregunta: true, formas: ["а ты", "а у тебя́"] }], "Хорошо́, спаси́бо! А ты?"],
    ["То́же хорошо́. Каки́е у тебя́ пла́ны на выходны́е?", "Bien también. ¿Qué planes tenés para el finde?", "Contá un plan.", [E("un plan", "бу́ду|пое́ду|пойду́|хочу́")], "В суббо́ту я пойду́ в кино́."],
    ["Отли́чно! С кем?", "¡Genial! ¿Con quién?", "Decí con quién (с + instrumental).", [E("con quién", "с дру́гом|с подру́гой|с друзья́ми|с бра́том|с сестро́й|~с")], "С подру́гой."],
    ["А что вы бу́дете смотре́ть?", "¿Y qué van a ver?", "Contestá.", [E("qué", "фильм|~но́вый|~ру́сский")], "Но́вый ру́сский фильм."],
    ["Я его́ ви́дел. Мне не понра́вился.", "Yo la vi. No me gustó.", "Preguntale por qué.", [E("por qué", "почему́|~как")], "Почему́?"],
    ["Он сли́шком дли́нный. А ты лю́бишь кино́?", "Es demasiado larga. ¿Y a vos te gusta el cine?", "Contestá con una razón.", [E("tu respuesta", "да|нет|люблю́|не люблю́"), E("una razón", "потому́ что|поэ́тому")], "Да, люблю́, потому́ что э́то интере́сно."],
    ["А что ты де́лал в про́шлые выходны́е?", "¿Y qué hiciste el finde pasado?", "Contestá en pasado.", [E("en pasado", "", U14_PASADO_RX, "Hay que contestar en pasado.")], "Я был до́ма и чита́л."],
    ["Я ездил на мо́ре. Ты был на мо́ре в э́том году́?", "Fui al mar. ¿Fuiste al mar este año?", "Contestá.", [E("tu respuesta", "да|нет|был|была́|не был|не была́")], "Да, был в ию́ле."],
    ["Что тебе́ бо́льше нра́вится: мо́ре и́ли го́ры?", "¿Qué te gusta más: el mar o la montaña?", "Compará y explicá.", [E("tu preferencia", "бо́льше|лу́чше|~нра́вится|~люблю́"), E("una razón", "потому́ что|чем|поэ́тому")], "Мне бо́льше нра́вится мо́ре, потому́ что там тепло́."],
    ["Хорошо́. Мне ну́жно идти́. Пока́!", "Bueno. Me tengo que ir. ¡Chau!", "Despedite.", [E("despedirte", "пока́|до встре́чи|до свида́ния|уда́чи|~до")], "Пока́! До встре́чи!"]
  ].map(p => ({ bot: p[0], es: p[1], tarea: p[2], sit: { necesita: p[3], modelos: [p[4]] }, pista: "" })) };
}

/* ── Bloques y pesos ── */
const U14_BLOQUES = [
  { id: "lectura", ru: "Чте́ние", es: "Comprensión lectora", puntos: 15, emoji: "📖", min: "30–40 min", intro: "Tres textos de dificultad creciente: un mensaje, una experiencia y una opinión. No hace falta traducir todo: buscá lo que te piden.", repaso: "Unidad 13, módulo 6 (Textos del mundo real)" },
  { id: "audio", ru: "Ауди́рование", es: "Comprensión auditiva", puntos: 15, emoji: "🎧", min: "30–40 min", intro: "Un diálogo, una conversación y un relato, y al final dos audios para contestar por escrito en ruso. Escuchá todas las veces que quieras.", repaso: "Unidad 13, módulo 7 (Comprensión auditiva)" },
  { id: "gramatica", ru: "Грамма́тика", es: "Gramática en contexto", puntos: 20, emoji: "🧩", min: "30–40 min", intro: "Casos, tiempos, concordancia, preposiciones, ordenar palabras y corregir errores.", repaso: "Unidades 10 y 12, y la 13 (módulos 2, 3 y 9)" },
  { id: "lexica", ru: "Ле́ксика", es: "Vocabulario en contexto", puntos: 10, emoji: "🗂️", min: "20–30 min", intro: "Palabras en uso: elegí la que va según la situación.", repaso: "Unidad 11 y el Diccionario" },
  { id: "escritura", ru: "Письмо́", es: "Producción escrita", puntos: 20, emoji: "✍️", min: "40–50 min", intro: "Dos textos: un mensaje (80–100 palabras) y «Моя́ исто́рия» (200–250 palabras).", repaso: "Unidad 13, módulos 10 y 11 (taller y proyecto)" },
  { id: "comunicacion", ru: "Обще́ние", es: "Comunicación", puntos: 20, emoji: "💬", min: "20–30 min", intro: "Situaciones, preguntas para contestar libremente y una conversación de diez intervenciones. No hay una única respuesta correcta.", repaso: "Unidades 11 y 13 (módulo 8)" }
];
const U14_NIVELES = [[90, "Excelente dominio", "Podés comunicarte con bastante autonomía y usás las estructuras con seguridad."], [80, "Muy buen dominio", "Te comunicás bien, con algún error ocasional."],
  [70, "Competencia funcional", "Te desenvolvés, pero todavía hay estructuras para consolidar."], [60, "En desarrollo", "Entendés bastante, pero la producción todavía cuesta."], [0, "Necesita consolidación", "Conviene repasar algunas unidades antes de seguir."]];

/* ── Escritura: las tareas ── */
function U14_ESCRITURA() {
  const R = U13_R, D = U13_DET;
  const cuentaFrase = (t, lista) => lista.reduce((a, x) => a + (D.n(t).split(" " + x + " ").length - 1), 0);
  const obj = (txt, meta, fn) => ({ txt, meta, fn });
  const TEMP = ["вчера", "сегодня", "завтра", "сейчас", "раньше", "скоро", "летом", "зимой", "весной", "осенью", "каждый день", "обычно", "часто", "всегда", "иногда", "утром", "вечером", "в субботу", "в воскресенье", "потом", "уже"];
  return {
    t1: { titulo: "Tarea 1 · Mensaje", puntos: 8, palabras: [80, 100], opciones: [
        { id: "a", txt: "A · Escribile a un amigo para cambiar un plan (y proponé otro)." }, { id: "b", txt: "B · Organizá un encuentro: cuándo, dónde y qué van a hacer." },
        { id: "c", txt: "C · Explicá un problema (en tu departamento, en el trabajo…) y pedí ayuda." }, { id: "d", txt: "D · Escribí una reseña corta de un restaurante o de un lugar." }],
      objetivos: [obj("Entre 80 y 100 palabras", 1, t => { const k = D.palabras(t); return k >= 80 && k <= 100 ? 1 : k >= 60 && k <= 120 ? .5 : 0; }),
        obj("Al menos 2 conectores", 2, t => D.tiene(t, D.CONECT)), obj("Una razón (потому́ что, поэ́тому…)", 1, t => D.tiene(t, D.RAZON)),
        obj("Verbos en dos tiempos distintos", 2, t => [D.pasado, D.presente, D.futuro].filter(f => D.cuenta(t, f) > 0).length),
        obj("Una pregunta o una propuesta (дава́й…, мо́жно…?)", 1, t => /\?/.test(t) || D.tiene(t, ["давай", "можно", "хочешь"]) ? 1 : 0)] },
    t2: { titulo: "Tarea 2 · Моя́ исто́рия", puntos: 12, palabras: [200, 250], consigna: "Расскажи́ о свое́й жи́зни, про́шлом и пла́нах на бу́дущее. Contá tu vida: una experiencia del pasado, tu vida ahora, tus planes, algo que te gusta o no (y por qué), personas importantes y lugares.",
      objetivos: [obj("Entre 200 y 250 palabras", 1, t => { const k = D.palabras(t); return k >= 200 && k <= 250 ? 1 : k >= 160 && k <= 290 ? .5 : 0; }),
        obj("3 a 5 formas de pasado", 3, t => D.cuenta(t, D.pasado)), obj("3 a 5 formas de presente", 3, t => D.cuenta(t, D.presente)), obj("3 a 5 formas de futuro", 3, t => D.cuenta(t, D.futuro)),
        obj("5 o más expresiones de tiempo (вчера́, ле́том, ка́ждый день…)", 5, t => D.tiene(t, TEMP)), obj("3 o más conectores", 3, t => D.tiene(t, D.CONECT)),
        obj("2 opiniones (я ду́маю, мне ка́жется, по-мо́ему, мне нра́вится…)", 2, t => cuentaFrase(t, D.OPIN.concat(["мне нравится", "мне не нравится", "я люблю"]))),
        obj("2 justificaciones (потому́ что, поэ́тому…)", 2, t => cuentaFrase(t, D.RAZON)), obj("Una frase negativa (не…)", 1, t => / не /.test(D.n(t)) ? 1 : 0),
        obj("Una comparación", 1, t => R.comparacion().fn(t) ? 1 : 0)] }
  };
}
/* Puntaje de un texto: cobertura de los objetivos (cada uno, hasta su meta) menos un 5 % por cada palabra
   desconocida o error típico (hasta 30 %) */
function u14PuntuarTexto(texto, tarea) {
  const det = tarea.objetivos.map(o => { const v = o.fn(texto); return { txt: o.txt, v: Math.min(1, v / o.meta), n: v, meta: o.meta }; });
  const cobertura = det.reduce((a, d) => a + d.v, 0) / det.length;
  const rev = typeof azRevisarTexto === "function" ? azRevisarTexto(texto, [], []) : { dudas: [], tips: [] };
  const descuento = Math.min(.3, .05 * (rev.dudas.length + rev.tips.length));
  return { det, cobertura, descuento, rev, pct: Math.max(0, Math.round((cobertura - descuento) * 100)) };
}

/* ── Banco de ejercicios por bloque ── */
function ejerciciosExamenFinal() {
  if (ejerciciosExamenFinal.cache) return ejerciciosExamenFinal.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla + 11; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sinP = t => t.replace(/[.,!?«»:—]/g, "").replace(/\s+/g, " ").trim();
  const B = { lectura: [], audio: [], gramatica: [], lexica: [], comunicacion: [] };
  const add = (b, e) => B[b].push(Object.assign({ items: [], dificultad: 2, modulo: 1 }, e));

  U14_LECTURAS.forEach((L, j) => {
    L.preguntas.forEach(([q, ok, malas], k) => add("lectura", { id: "EF-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", grupo: "EFL-" + L.id + "-" + k, texto: L.lineas, pide: L.titulo + ". " + q,
      opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l).indexOf(sin(ok)) >= 0) || "") }));
    L.vf.forEach(([af, v], k) => add("lectura", { id: "EF-lev-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", grupo: "EFLV-" + L.id + "-" + k, afirmacion: af, verdadero: v, texto: L.lineas,
      explicacion: (v ? "Verdadero." : "Falso.") }));
  });
  U14_AUDIOS.forEach((A, j) => {
    const dial = A.lineas.map(([g, t]) => ({ texto: t, genero: g, rate: A.rate })), lineas = A.lineas.map(l => l[1]);
    A.preguntas.forEach(([q, ok, malas], k) => add("audio", { id: "EF-au-" + A.id + "-" + k, tipo: "audio", forma: "elegir", grupo: "EFA-" + A.id + "-" + k, audio: dial, audioManual: k > 0, texto: lineas, textoOculto: true,
      pide: A.titulo + ". " + q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: lineas.join(" ") }));
    A.vf.forEach(([af, v], k) => add("audio", { id: "EF-auv-" + A.id + "-" + k, tipo: "audio-vf", forma: "vf", grupo: "EFAV-" + A.id + "-" + k, afirmacion: af, verdadero: v, audio: dial, texto: lineas, textoOculto: true,
      explicacion: (v ? "Verdadero. " : "Falso. ") + lineas.join(" ") }));
  });
  U14_AUDIO_RESP.forEach((r, j) => add("audio", { id: "EF-aur-" + j, tipo: "audio-resp", forma: "situacion", grupo: "EFAR-" + j, audio: r.audio, audioManual: false, pide: r.pide,
    sit: { necesita: r.nec, modelos: [r.modelo] }, oir: r.modelo, explicacion: "Una forma de decirlo: **" + r.modelo + "**" }));

  const G = U14_GRAM;
  G.casos.forEach(([fr, ok, ops, por], j) => add("gramatica", { id: "EF-gc-" + j, tipo: "caso", forma: "elegir", grupo: "EFGC-" + j, pide: "Completá.", grande: fr, opciones: ops, correcta: ok, oir: fr.replace("_____", ok), explicacion: "**" + ok + "**: " + por + "." }));
  G.tiempos.forEach(([fr, a, ok], j) => add("gramatica", { id: "EF-gt-" + j, tipo: "tiempo", forma: "escribir", grupo: "EFGT-" + j, pide: "Transformá: " + fr + " → " + a, grande: a, esperadas: [ok], idioma: "ru", audio: ok, audioManual: true, explicacion: ok }));
  G.concord.forEach(([fr, ok, ops], j) => add("gramatica", { id: "EF-gk-" + j, tipo: "concordancia", forma: "elegir", grupo: "EFGK-" + j, pide: "Completá.", grande: fr, opciones: ops, correcta: ok, oir: fr.replace("_____", ok), explicacion: fr.replace("_____", "**" + ok + "**") }));
  const PREPS = ["в", "на", "из", "без", "для", "по́сле", "до", "с"];
  G.prep.forEach(([fr, ok], j) => { const otras = baraja(PREPS.filter(p => sin(p) !== sin(ok)), j).slice(0, 3);
    add("gramatica", { id: "EF-gp-" + j, tipo: "preposicion", forma: "elegir", grupo: "EFGP-" + j, pide: "Completá con la preposición.", grande: fr, opciones: baraja([ok].concat(/^[А-Я]/.test(ok) ? otras.map(x => x.charAt(0).toUpperCase() + x.slice(1)) : otras), j), correcta: ok,
      oir: fr.replace("_____", ok), explicacion: fr.replace("_____", "**" + ok + "**") }); });
  G.orden.forEach(([ru, es], j) => { const w = sinP(ru).split(" ");
    add("gramatica", { id: "EF-go-" + j, tipo: "construir", forma: "ordenar", grupo: "EFGO-" + j, pide: "Ordená: «" + es + "»", audio: ru, fichas: baraja(w, j + 3), sep: " ", esperada: w.join(" "), explicacion: ru }); });
  G.corr.forEach(([fr, mal, arr, expl], j) => { const pals = sinP(fr).split(" ");
    if (arr) add("gramatica", { id: "EF-gx-" + j, tipo: "corregir", forma: "corregir", grupo: "EFGX-" + j, pide: "Tocá la palabra que está mal y escribila bien.", palabras: pals, correcta: pals.indexOf(mal), arreglo: arr, oir: fr.replace(mal, arr), explicacion: expl });
    else add("gramatica", { id: "EF-gx-" + j, tipo: "corregir", forma: "tocar", grupo: "EFGX-" + j, pide: "Tocá la palabra que sobra.", palabras: pals, correcta: pals.indexOf(mal), explicacion: expl }); });

  U14_LEX.forEach(([fr, ok, ops], j) => add("lexica", { id: "EF-lx-" + j, tipo: "lexica", forma: "elegir", grupo: "EFX-" + j, pide: "Elegí lo que va.", grande: fr, opciones: baraja(ops, j), correcta: ok,
    oir: fr.indexOf("_____") >= 0 ? fr.replace("_____", ok) : ok, explicacion: fr.indexOf("_____") >= 0 ? fr.replace("_____", "**" + ok + "**") : "**" + ok + "**" }));
  U14_LEX_EMP.forEach((pares, j) => add("lexica", { id: "EF-lxe-" + j, tipo: "lexica", forma: "emparejar", grupo: "EFXE-" + j, pide: "Uní cada palabra o expresión con su situación.", pares, explicacion: pares.map(p => p.join(" — ")).join(" · ") }));

  U14_SITUACIONES.forEach((x, j) => add("comunicacion", { id: "EF-cs-" + j, tipo: "situacion", forma: "situacion", dificultad: 3, grupo: "EFCS-" + j, escena: x.escena, pide: x.pide, sit: { necesita: x.nec, modelos: [x.modelo] }, oir: x.modelo,
    explicacion: "Una forma de decirlo: **" + x.modelo + "**" }));
  U14_ESPONT.forEach((x, j) => add("comunicacion", { id: "EF-ce-" + j, tipo: "espontanea", forma: "situacion", dificultad: 3, grupo: "EFCE-" + j, audio: x.audio, audioManual: false, contexto: [{ p: "", ru: x.audio }], pide: x.pide,
    sit: { necesita: x.nec, modelos: [x.modelo] }, oir: x.modelo, explicacion: "Una forma de decirlo: **" + x.modelo + "**" }));
  add("comunicacion", { id: "EF-conv", tipo: "conversacion", forma: "turnos", dificultad: 3, grupo: "EFCV", pide: "🗣️ Conversación con Misha", turnos: U14_CONV(), peso: 5,
    explicacion: "Así podía quedar: " + U14_CONV().pasos.map(p => p.sit.modelos[0]).join(" / ") });
  return (ejerciciosExamenFinal.cache = B);
}

window.U14_BLOQUES = U14_BLOQUES;
window.U14_NIVELES = U14_NIVELES;
window.U14_ESCRITURA = U14_ESCRITURA;
window.u14PuntuarTexto = u14PuntuarTexto;
window.ejerciciosExamenFinal = ejerciciosExamenFinal;
