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
   Actualización 12/10/2026 (aprobada por Manu), al nivel de las unidades
   profundizadas:
   · Gramática: casos, plural y números, pronombres y свой, el aspecto
     (elegir, ¿por qué?, pares), imperativo y comparar, tiempos y е́сли,
     concordancia, preposiciones, ordenar, corregir, «¿Qué falla?»
     (diagnóstico), «¿Suena natural?» y «¿Por qué?».
   · Audio: «de oído» (quién habla, cuándo, qué forma oíste).
   · Vocabulario: en contexto con palabras de las Unidades 6 a 13,
     emparejar, «¿Qué significa?» y «Escribe en ruso» (U14_VOC).
   · Sorteo: en Audio, Gramática y Vocabulario, cada intento saca sus
     preguntas de un banco más grande (U14_LUGARES, u14Intento).
   · Cada pregunta dice qué regla evalúa (`regla`, U14_REGLAS): al
     terminar, «Qué repasar» abre esa sección (u14CargarRegla).
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
    preguntas: [["¿Cuál es la idea principal?", "мне здесь о́чень нра́вится", ["я не хочу́ здесь жить", "здесь сли́шком до́рого"]], ["¿Por qué no tiene coche?", "хоро́шее метро́", ["нет де́нег", "нет вре́мени"]],
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
  { audio: [{ texto: "Приве́т! Мы в кафе́ ря́дом с метро́. Ты пойдёшь с на́ми?", genero: "f" }], pide: "Escucha. Contesta: no puedes ir, di por qué y propón otro día.",
    nec: [u14E("no puedes", "не могу́|не пойду́|не смогу́|~нет"), u14E("por qué", "потому́ что|~рабо́таю|~у меня́"), u14E("otro día", "в суббо́ту|в воскресе́нье|за́втра|~в")], modelo: "Извини́, я не могу́, потому́ что я рабо́таю. Дава́й за́втра?" },
  { audio: [{ texto: "Здра́вствуйте! Что вы де́лали на ле́тних кани́кулах?", genero: "m" }], pide: "Escucha. Contesta qué hiciste el verano pasado (dos cosas).",
    nec: [u14E("en pasado", "", U14_PASADO_RX, "Hay que contarlo en pasado."), u14E("otra cosa", "и|пото́м|ещё|~а")], modelo: "Ле́том я е́здил на мо́ре и мно́го чита́л." }
];

/* ── Bloque 3: gramática (12/10/2026: ampliada, con `regla` y sorteo por lugar) ──
   Cada lugar tiene un banco y en cada intento salen `n` ítems de él (U14_LUGARES). Cada ítem dice
   qué regla evalúa (la id de la sección de su unidad): al terminar, «Qué repasar» lista las falladas. */
const U14_GRAM = {
  /* [frase, correcta, opciones, explicación, regla, pista] */
  casos: [["Я даю́ пода́рок _____.", "А́нне", ["А́нна", "А́нну", "А́нне"], "dativo: a quién", "u10-dat-verbos"], ["Я ви́жу _____.", "А́нну", ["А́нна", "А́нну", "А́нне"], "acusativo: a quién veo", "u4-acu-a"],
    ["У _____ есть маши́на.", "А́нны", ["А́нна", "А́нны", "А́нне"], "у + genitivo", "u10-tener"], ["Я гуля́ю с _____.", "А́нной", ["А́нной", "А́нне", "А́нну"], "с + instrumental", "u10-s-kem"],
    ["Мы говори́м об _____.", "А́нне", ["А́нне", "А́нну", "А́нной"], "о / об + prepositivo", "u12-ob"], ["_____ живёт в Москве́.", "А́нна", ["А́нна", "А́нну", "А́нны"], "quién: nominativo", "u4-nominativo"],
    ["Я звоню́ _____.", "мое́й сестре́", ["мое́й сестре́", "мою́ сестру́", "мое́й сестры́"], "звони́ть + dativo; el posesivo va en el mismo caso", "u12-pos-casos"],
    ["Я рабо́таю _____.", "врачо́м", ["врачо́м", "врач", "врача́"], "de qué trabajas: instrumental", "u10-rabotat-kem"],
    ["Мы е́дем в Москву́ _____.", "по́ездом", ["по́ездом", "по́езд", "по́езде"], "en qué vas: instrumental, sin preposición", "u10-transporte-ins"],
    ["Ему́ три́дцать _____.", "лет", ["лет", "год", "го́да"], "con 5 o más (y con 30): лет", "u10-edad"],
    ["Мы живём в _____ кварти́ре.", "но́вой", ["но́вой", "но́вую", "но́вая"], "в + prepositivo: el adjetivo también", "u13-casos-pregunta"],
    ["Я иду́ к _____.", "врачу́", ["врачу́", "врача́", "врач"], "к + dativo", "u10-k-u"]],
  plural: [["В го́роде мно́го _____.", "музе́ев", ["музе́ев", "музе́и", "музе́ях"], "мно́го + genitivo plural", "u12-gen-pl"],
    ["У меня́ пять _____.", "друзе́й", ["друзе́й", "друзья́", "дру́га"], "5 o más + genitivo plural (irregular: друзе́й)", "u12-gen-pl-irreg"],
    ["У меня́ два _____.", "бра́та", ["бра́та", "бра́тья", "бра́тьев"], "2, 3, 4 + genitivo singular", "u12-contar"],
    ["Я купи́л пять _____.", "книг", ["книг", "кни́ги", "кни́гу"], "5 o más + genitivo plural", "u12-gen-pl"],
    ["Я ду́маю о _____.", "свои́х друзья́х", ["свои́х друзья́х", "свои́ друзья́", "свои́м друзья́м"], "о + prepositivo plural: **-ах**", "u12-pl-dat-ins-prep"],
    ["Мы гуля́ем с _____.", "друзья́ми", ["друзья́ми", "друзья́м", "друзе́й"], "с + instrumental plural: **-ами**", "u12-pl-dat-ins-prep"],
    ["Я ви́жу _____.", "студе́нтов", ["студе́нтов", "студе́нты", "студе́нтам"], "acusativo plural de personas = genitivo", "u12-acc-pl"],
    ["Э́то _____ кни́ги.", "мои́", ["мои́", "моя́", "мои́х"], "plural: мои́", "u12-pos-pl"],
    ["В ко́мнате четы́ре _____.", "сту́ла", ["сту́ла", "сту́лья", "сту́льев"], "2, 3, 4 + genitivo singular", "u12-contar"]],
  pron: [["Я ви́жу _____.", "его́", ["его́", "он", "ему́"], "acusativo de он: его́", "u12-pron-acc-gen", "él"],
    ["Я иду́ к _____.", "нему́", ["нему́", "ему́", "его́"], "después de preposición, **н-**: к нему́", "u12-pron-n", "él"],
    ["Мой брат живёт со _____.", "мной", ["мной", "меня́", "мне"], "со мной", "u12-pron-so", "yo"],
    ["Я говорю́ с _____.", "ней", ["ней", "ей", "её"], "с + instrumental, con **н-**: с ней", "u12-pron-n", "ella"],
    ["_____ не звони́л.", "Никто́", ["Никто́", "Ничего́", "Кто́-то"], "никто́ + не", "u12-nikto", "nadie"],
    ["Я _____ не зна́ю.", "ничего́", ["ничего́", "никто́", "что́-то"], "ничего́ + не", "u12-nikto", "nada"],
    ["Ива́н лю́бит _____ жену́.", "свою́", ["свою́", "его́", "свой"], "su propia mujer: свою́", "u12-svoy", "la suya"],
    ["Ты зна́ешь _____ сестру́?", "её", ["её", "ей", "свою́"], "её («de ella») no cambia", "u12-ego-eyo", "de ella"],
    ["Мы говори́м об _____ фи́льме.", "э́том", ["э́том", "э́тот", "э́тому"], "о + prepositivo: э́том", "u12-etot", "este"],
    ["Хо́чешь _____ вы́пить?", "что́-нибудь", ["что́-нибудь", "что́-то", "ничего́"], "en una pregunta, «algo» cualquiera: что́-нибудь", "u12-to-nibud", "algo"]],
  aspecto: [["Ра́ньше я ча́сто _____ газе́ту.", "чита́л", ["чита́л", "прочита́л"], "ча́сто: algo que se repetía, proceso", "u8-aspecto-pistas"],
    ["Вчера́ я _____ кни́гу и пошёл спать.", "прочита́л", ["прочита́л", "чита́л"], "una cosa después de otra: resultado", "u8-orden-perf"],
    ["За́втра я _____ тебе́.", "позвоню́", ["позвоню́", "бу́ду позвони́ть", "звоню́"], "una vez, en el futuro: el perfectivo conjugado", "u9-fut-resultado", "te voy a llamar, una vez"],
    ["Я хочу́ _____ э́ту кни́гу.", "купи́ть", ["купи́ть", "покупа́ть"], "una compra concreta: perfectivo", "u12-hochu", "comprarlo, una vez"],
    ["Я люблю́ _____ фи́льмы.", "смотре́ть", ["смотре́ть", "посмотре́ть"], "después de люби́ть: imperfectivo", "u12-inf-imperf"]],
  aspectoPq: [["Вчера́ я весь день чита́л.", "чита́л", "весь день: duró, es proceso", ["Terminé el libro", "Pasó una sola vez y terminó"], "u8-aspecto-pistas"],
    ["Я уже́ прочита́л э́ту кни́гу.", "прочита́л", "уже́: el resultado, ya está terminado", ["Pasaba seguido", "Duró mucho tiempo"], "u8-aspecto-pistas"],
    ["За́втра я бу́ду рабо́тать весь день.", "бу́ду рабо́тать", "Proceso en el futuro: бу́ду + imperfectivo", ["Un resultado de una vez", "Es pasado"], "u9-fut-cual"]],
  aspectoPar: [["¿Cuál dice que la cena quedó hecha?", "Я пригото́вил у́жин.", "Я гото́вил у́жин.", "El resultado: perfectivo.", "u8-aspecto-idea"],
    ["¿Cuál dice que vas a escribir la carta y terminarla?", "За́втра я напишу́ письмо́.", "За́втра я бу́ду писа́ть письмо́.", "Resultado en el futuro: напишу́.", "u9-fut-cual"],
    ["¿Cuál dice que tu hermano llamó mientras leías?", "Когда́ я чита́л, позвони́л брат.", "Когда́ я прочита́л, позвони́л брат.", "El fondo (чита́л) y lo que pasó (позвони́л).", "u12-fondo"],
    ["¿Cuál dice que empezaste la carta pero no la terminaste?", "Я писа́л письмо́, но не написа́л.", "Я не писа́л письмо́.", "не + perfectivo: no lo terminé.", "u12-neg-imperf"]],
  impComp: [["_____ мне, пожа́луйста!", "Помоги́", ["Помоги́", "Помога́й", "Помо́чь"], "imperativo irregular de помо́чь", "u12-imp-irreg", "ayúdame, una vez"],
    ["Не _____!", "опа́здывай", ["опа́здывай", "опозда́й"], "no + imperfectivo para prohibir", "u12-imp-ne", "no llegues tarde"],
    ["_____, пожа́луйста, где метро́?", "Скажи́те", ["Скажи́те", "Говори́те", "Сказа́ть"], "un pedido concreto: perfectivo, con вы", "u12-imp-aspecto", "dime, a alguien de usted"],
    ["Москва́ _____, чем Барсело́на.", "бо́льше", ["бо́льше", "большо́й", "са́мая больша́я"], "comparar: comparativo + , чем", "u12-comp"],
    ["Сего́дня _____, чем вчера́.", "тепле́е", ["тепле́е", "тёплый", "тепло́"], "comparativo de тёплый: тепле́е", "u12-comp-forma"],
    ["Мой брат ста́рше _____.", "меня́", ["меня́", "я", "мне"], "sin чем: genitivo", "u12-comp-gen"],
    ["Э́то _____ интере́сная кни́га.", "са́мая", ["са́мая", "са́мый", "са́мое"], "са́мая concuerda con кни́га", "u12-samyj"]],
  /* [frase, hacia, correcta, regla, otras aceptadas] */
  tiempos: [["Вчера́ я рабо́тал.", "За́втра…", "За́втра я бу́ду рабо́тать.", "u9-tres-tiempos", ["Я бу́ду рабо́тать за́втра."]], ["Вчера́ я рабо́тал.", "Сего́дня…", "Сего́дня я рабо́таю.", "u13-tres-tiempos", ["Я рабо́таю сего́дня."]],
    ["Сейча́с мы гуля́ем в па́рке.", "Вчера́…", "Вчера́ мы гуля́ли в па́рке.", "u8-plural", ["Мы гуля́ли в па́рке вчера́."]],
    ["Сего́дня я чита́ю кни́гу.", "За́втра (una vez, hasta terminarlo)…", "За́втра я прочита́ю кни́гу.", "u9-fut-resultado", ["Я прочита́ю кни́гу за́втра."]],
    ["Сейча́с она́ до́ма.", "Вчера́…", "Вчера́ она́ была́ до́ма.", "u9-byt-tres", ["Она́ была́ до́ма вчера́."]],
    ["Сейча́с мы живём в Москве́.", "Ра́ньше…", "Ра́ньше мы жи́ли в Москве́.", "u13-antes-ahora", ["Мы ра́ньше жи́ли в Москве́."]]],
  esli: [["Е́сли _____ тепло́, мы пойдём на пляж.", "бу́дет", ["бу́дет", "бы́ло", "есть"], "е́сли, hablando del futuro: futuro", "u13-esli"],
    ["Когда́ я _____ рабо́ту, я тебе́ позвоню́.", "зако́нчу", ["зако́нчу", "зака́нчиваю", "зако́нчил"], "когда́, hablando del futuro: futuro", "u13-esli"]],
  concord: [["А́нна вчера́ _____ до́ма.", "была́", ["был", "была́", "бы́ли"], "u8-genero-quien"], ["Мои́ друзья́ _____ в рестора́не.", "бы́ли", ["был", "была́", "бы́ли"], "u8-plural"],
    ["Мы _____ ру́сский язы́к.", "у́чим", ["учу́", "у́чим", "у́чат"], "u5-una-forma"], ["Э́то _____ кни́га.", "моя́", ["мой", "моя́", "моё"], "u3-adj-genero"]],
  prep: [["Я живу́ _____ Барсело́не.", "в", "u6-v"], ["Мы бы́ли _____ пля́же.", "на", "u6-na-lista"], ["Я _____ Аргенти́ны.", "из", "u10-iz-ot"], ["Ко́фе _____ молока́, пожа́луйста.", "без", "u10-prep-gen"],
    ["Э́то пода́рок _____ ма́мы.", "для", "u10-prep-gen"], ["_____ рабо́ты я иду́ домо́й.", "По́сле", "u10-prep-gen"], ["Я рабо́таю _____ шести́.", "до", "u10-prep-gen"], ["Я гуля́ю _____ соба́кой.", "с", "u10-s-kem"],
    ["Ве́чером я иду́ _____ дру́гу.", "к", "u10-k-u"]],
  orden: [["Вчера́ я был в рестора́не с друзья́ми.", "Ayer estuve en el restaurante con mis amigos.", "u8-byl-acento"], ["За́втра мы пое́дем на мо́ре.", "Mañana vamos a ir al mar.", "u9-poidu"],
    ["Мне о́чень нра́вится э́тот го́род.", "Me gusta mucho esta ciudad.", "u10-gustar"], ["Е́сли бу́дет тепло́, мы пойдём на пляж.", "Si hace calor, vamos a ir a la playa.", "u13-esli"]],
  corr: [["А́нна вчера́ рабо́тал.", "рабо́тал", "рабо́тала", "А́нна: **рабо́тала**.", "u8-genero-quien"], ["У меня́ нет маши́на.", "маши́на", "маши́ны", "нет + genitivo: **маши́ны**.", "u10-net"],
    ["Я говорю́ с мои́м друг.", "друг", "дру́гом", "с + instrumental: **дру́гом**.", "u10-ins-fin"], ["Мы живём в Москва́.", "Москва́", "Москве́", "в + prepositivo: **Москве́**.", "u6-prep-e"],
    ["Мне нра́вится э́ти фи́льмы.", "нра́вится", "нра́вятся", "Lo que gusta es plural: **нра́вятся**.", "u11-nravyatsya"]],
  /* «¿Qué falla?»: [frase mal, frase bien, falla (índice en FALLAS), regla] */
  FALLAS: ["El género del pasado", "El caso después de la preposición", "El posesivo no está en el mismo caso", "бу́ду con el verbo de resultado", "два / две", "Falta la **н-** después de la preposición",
    "Falta не", "Hablando del futuro, va futuro", "Después de мно́го va el genitivo plural"],
  diag: [["Ма́ша чита́л кни́гу.", "Ма́ша чита́ла кни́гу.", 0, "u8-genero-quien"], ["Я живу́ в большо́й го́род.", "Я живу́ в большо́м го́роде.", 1, "u6-prep-e"],
    ["Я звоню́ моя́ сестре́.", "Я звоню́ мое́й сестре́.", 2, "u12-pos-casos"], ["Я бу́ду прочита́ть кни́гу.", "Я прочита́ю кни́гу.", 3, "u9-fut-cual"], ["У меня́ два сестры́.", "У меня́ две сестры́.", 4, "u12-contar"],
    ["Я гуля́ю с им.", "Я гуля́ю с ним.", 5, "u12-pron-n"], ["Я ничего́ зна́ю.", "Я ничего́ не зна́ю.", 6, "u12-nikto"], ["Когда́ я приезжа́ю в Москву́, я тебе́ позвоню́.", "Когда́ я прие́ду в Москву́, я тебе́ позвоню́.", 7, "u13-esli"],
    ["В го́роде мно́го музе́и.", "В го́роде мно́го музе́ев.", 8, "u12-gen-pl"]],
  /* «¿Suena natural?»: [bien, calco, explicación, regla] */
  natural: [["Мне три́дцать лет.", "Я име́ю три́дцать лет.", "La edad, con dativo.", "u10-edad"], ["Мне нра́вится э́тот фильм.", "Я нра́влюсь э́тот фильм.", "Lo que gusta es el sujeto.", "u10-gustar"],
    ["Я рабо́таю врачо́м.", "Я рабо́таю как врач.", "De qué trabajas: instrumental.", "u10-rabotat-kem"], ["Мне хо́лодно.", "Я хо́лодно.", "Cómo te sientes: dativo.", "u10-estados"],
    ["У меня́ есть брат.", "Я име́ю бра́та.", "Tener: у меня́ есть.", "u10-tener"], ["Я до́ма.", "Я есть до́ма.", "En presente, sin быть.", "u5-byt"],
    ["Я согла́сен с тобо́й.", "Я согла́сен с ты.", "с + instrumental: с тобо́й.", "u13-acuerdo"], ["Он говори́т по-ру́сски лу́чше, чем я.", "Он говори́т по-ру́сски бо́лее хорошо́, чем я.", "El comparativo de хорошо́ es лу́чше.", "u12-comp-verbo"]],
  /* «¿Por qué?»: [frase, palabra, correcta, otras, regla] */
  porque: [["Я живу́ в Барсело́не.", "Барсело́не", "Por la preposición в: prepositivo", ["Por el verbo: dativo", "Por la preposición с: instrumental"], "u6-donde-prep"],
    ["Я гуля́ю с дру́гом.", "дру́гом", "Por la preposición с: instrumental", ["Por la preposición у: genitivo", "Por el verbo: acusativo"], "u10-s-kem"],
    ["У бра́та есть маши́на.", "бра́та", "Por la preposición у: genitivo", ["Por el verbo: dativo", "Por la preposición в: prepositivo"], "u10-tener"],
    ["Я звоню́ ма́ме.", "ма́ме", "Por el verbo: dativo", ["Por el verbo: acusativo", "Por la preposición у: genitivo"], "u10-dat-verbos"],
    ["В го́роде мно́го музе́ев.", "музе́ев", "мно́го pide genitivo plural", ["Es el sujeto", "Por la preposición в: prepositivo"], "u12-gen-pl"],
    ["Мне бы́ло ве́село.", "Мне", "Quien siente va en dativo", ["Es el sujeto", "Por la preposición с: instrumental"], "u13-sentir"]]
};

/* ── Bloque 4: vocabulario en contexto (12/10/2026: de las Unidades 2 a 13) ── */
const U14_LEX = [
  ["Я жду _____ на остано́вке.", "авто́бус", ["авто́бус", "по́езд", "самолёт"]], ["В _____ мы покупа́ем хлеб и молоко́.", "магази́не", ["магази́не", "музе́е", "теа́тре"]],
  ["Мой брат рабо́тает в больни́це. Он _____.", "врач", ["врач", "учи́тель", "архите́ктор"]], ["Мне хо́лодно. Закро́й, пожа́луйста, _____.", "окно́", ["окно́", "кни́гу", "дверь"]],
  ["Ты в рестора́не и хо́чешь заказа́ть ко́фе. Что ты говори́шь?", "Мо́жно ко́фе, пожа́луйста?", ["Мо́жно ко́фе, пожа́луйста?", "Где мой ко́фе?", "Я не пью ко́фе."]],
  ["В ию́ле в Барсело́не о́чень _____.", "тепло́", ["тепло́", "хо́лодно", "ра́но"]], ["Я не понима́ю. _____, пожа́луйста.", "Повтори́те", ["Повтори́те", "Да́йте", "Закро́йте"]],
  ["В свобо́дное вре́мя я _____ чита́ть.", "люблю́", ["люблю́", "рабо́таю", "звоню́"]], ["Биле́т на по́езд мо́жно купи́ть на _____.", "вокза́ле", ["вокза́ле", "пля́же", "ку́хне"]],
  ["Э́то мой _____: он живёт в кварти́ре ря́дом.", "сосе́д", ["сосе́д", "колле́га", "врач"]], ["Она́ рабо́тает в шко́ле. Она́ _____.", "учи́тельница", ["учи́тельница", "врач", "архите́ктор"]],
  ["Мне о́чень понра́вилась пое́здка: у меня́ о́чень хоро́шее _____.", "впечатле́ние", ["впечатле́ние", "расписа́ние", "объявле́ние"]],
  ["По́езд ухо́дит в во́семь. Я посмотре́л _____.", "расписа́ние", ["расписа́ние", "впечатле́ние", "увлече́ние"]],
  ["Он всегда́ говори́т пра́вду: он о́чень _____ челове́к.", "че́стный", ["че́стный", "смешно́й", "гру́стный"]],
  ["Ты сде́лал _____: на́до писа́ть «в Москве́».", "оши́бку", ["оши́бку", "привы́чку", "мечту́"]],
  ["Я о́чень уста́л, _____ я ра́но лёг спать.", "поэ́тому", ["поэ́тому", "потому́ что", "хотя́"]],
  ["_____ бы́ло хо́лодно, мы пошли́ гуля́ть.", "Хотя́", ["Хотя́", "Поэ́тому", "Потому́ что"]],
  ["Мой телефо́н не рабо́тает: мне нужна́ _____.", "заря́дка", ["заря́дка", "ски́дка", "сда́ча"]],
  ["Сего́дня в магази́не _____: всё деше́вле.", "ски́дка", ["ски́дка", "сда́ча", "заря́дка"]],
  ["Спаси́бо за _____! Я обяза́тельно приду́ на твой день рожде́ния.", "приглаше́ние", ["приглаше́ние", "впечатле́ние", "расписа́ние"]],
  ["Я встаю́ в семь: мой _____ звони́т в семь.", "буди́льник", ["буди́льник", "календа́рь", "чемода́н"]],
  ["Мой друг — _____: он пи́шет кни́ги.", "писа́тель", ["писа́тель", "води́тель", "продаве́ц"]],
  ["Я люблю́ гото́вить: э́то моё _____.", "увлече́ние", ["увлече́ние", "мне́ние", "расписа́ние"]],
  ["Ты пойдёшь в кино́? — Не зна́ю, _____.", "мо́жет быть", ["мо́жет быть", "во-пе́рвых", "наприме́р"]],
  ["Я забы́л его́ и́мя, но пото́м _____.", "вспо́мнил", ["вспо́мнил", "забы́л", "потеря́л"]]
];
const U14_LEX_EMP = [
  [["расписа́ние", "¿A qué hora sale el tren?"], ["меню́", "¿Qué hay para comer?"], ["биле́т", "Para viajar en tren"], ["объявле́ние", "Se vende un apartamento"]],
  [["Приве́т!", "Te encuentras con un amigo"], ["До свида́ния!", "Te vas de una tienda"], ["Спаси́бо!", "Alguien te ayudó"], ["Извини́те!", "Le preguntas algo a un desconocido"]],
  [["Во-пе́рвых…", "Das la primera razón"], ["Кста́ти…", "Cambias de tema"], ["Ну…", "Necesitas pensar"], ["Я согла́сен.", "Piensas lo mismo"]],
  [["Мне ве́село.", "Te estás divirtiendo"], ["Мне гру́стно.", "Estás triste"], ["Мне стра́шно.", "Tienes miedo"], ["Мне ску́чно.", "Te aburres"]]
];
/* Palabras de las Unidades 7 a 13 para «¿Qué significa?» y «Escribe en ruso» (traducción de U7_GLOSA … U13_GLOSA) */
const U14_VOC = "буди́льник=despertador|полоте́нце=toalla|расчёска=peine|оде́жда=ropa|ча́йник=hervidor|расписа́ние=horario|переры́в=pausa|свобо́дный=libre|за́нятый=ocupado|прогу́лка=paseo|" +
  "трениро́вка=entrenamiento|весна́=primavera|о́сень=otoño|Рождество́=Navidad|календа́рь=calendario|век=siglo|почти́=casi|позавчера́=anteayer|неда́вно=hace poco|вдруг=de repente|" +
  "дождь=lluvia|снег=nieve|ве́тер=viento|ску́чно=aburrido|потеря́ть=perder|подари́ть=regalar|чемода́н=maleta|гора́=montaña|де́тство=infancia|перее́хать=mudarse|роди́ться=nacer|" +
  "самолёт=avión|по́езд=tren|обеща́ть=prometer|цель=objetivo|реше́ние=decisión|бага́ж=equipaje|па́спорт=pasaporte|рейс=vuelo|тума́н=niebla|пешко́м=a pie|оста́ться=quedarse|" +
  "нож=cuchillo|буты́лка=botella|кусо́к=pedazo|са́хар=azúcar|соль=sal|рис=arroz|нача́льник=jefe|внук=nieto|юри́ст=abogado|перево́дчик=traductor|худо́жник=pintor|писа́тель=escritor|продаве́ц=vendedor|" +
  "о́чередь=cola, fila|сда́ча=cambio|ски́дка=descuento|паке́т=bolsa|футбо́лка=camiseta|ю́бка=falda|шарф=bufanda|десе́рт=postre|моро́женое=helado|яйцо́=huevo|сла́дкий=dulce|о́стрый=picante|" +
  "солёный=salado|переходи́ть=cruzar|паро́ль=contraseña|приглаше́ние=invitación|мне́ние=opinión|полови́на=mitad|большинство́=mayoría|стро́ить=construir|включа́ть=prender|выключа́ть=apagar|" +
  "просто́й=simple|сло́жный=complicado|у́мный=inteligente|сла́бый=débil|далёкий=lejano|мла́дший=menor|о́пыт=experiencia|воспомина́ние=recuerdo|сча́стье=felicidad|страх=miedo|" +
  "удивле́ние=sorpresa|счастли́вый=feliz|вопро́с=pregunta|отве́т=respuesta|рекла́ма=publicidad|статья́=artículo|экра́н=pantalla|че́стный=honesto|смешно́й=gracioso|тала́нтливый=talentoso|" +
  "разгово́р=conversación|пра́вило=regla";

/* ── Bloque 2, de oído (12/10/2026): [frase, pregunta, opciones (la primera es la correcta), explicación, regla] ── */
const U14_OIDO = [
  ["Я была́ в Москве́.", "Escucha. ¿Quién habla?", ["Una mujer", "Un hombre"], "была́: femenino.", "u8-genero-quien"],
  ["Я испуга́лся.", "Escucha. ¿Quién habla?", ["Un hombre", "Una mujer"], "испуга́лся: masculino.", "u13-sentir"],
  ["Я согла́сна.", "Escucha. ¿Quién habla?", ["Una mujer", "Un hombre"], "согла́сна: femenino.", "u13-acuerdo"],
  ["Я бу́ду в Москве́.", "Escucha. ¿Cuándo?", ["En el futuro", "En el pasado", "Ahora"], "бу́ду: futuro.", "u9-byt-tres"],
  ["Мы бы́ли в кино́.", "Escucha. ¿Cuándo?", ["En el pasado", "En el futuro", "Ahora"], "бы́ли: pasado.", "u8-plural"],
  ["Я прочита́ю кни́гу.", "Escucha. ¿Cuándo?", ["En el futuro", "En el pasado", "Ahora"], "прочита́ю: perfectivo conjugado, futuro.", "u9-fut-resultado"],
  ["Я ви́жу сестру́.", "Escucha. ¿Qué forma oíste?", ["сестру́", "сестра́", "сестры́"], "ви́жу + acusativo: сестру́.", "u4-acu-a"],
  ["Он рабо́тает врачо́м.", "Escucha. ¿Qué forma oíste?", ["врачо́м", "врач", "врача́"], "De qué trabaja: instrumental.", "u10-ins-fin"],
  ["У меня́ нет вре́мени.", "Escucha. ¿Qué forma oíste?", ["вре́мени", "вре́мя", "вре́менем"], "нет + genitivo: вре́мени.", "u10-net"]
];

/* Las reglas que evalúa el examen: [unidad, módulo, título del módulo, título de la sección] (12/10/2026) */
const U14_REGLAS = {
  "u3-adj-genero": [3,7,"Primeros adjetivos","Primero el género"],
  "u4-nominativo": [4,2,"Nominativo","El que hace la acción"],
  "u4-acu-a": [4,4,"Acusativo femenino","-а → -у"],
  "u5-una-forma": [5,1,"El verbo ruso","Una forma por persona"],
  "u5-byt": [5,9,"Verbos especiales","Быть: el verbo que no se dice"],
  "u6-v": [6,2,"В y на","В: adentro"],
  "u6-na-lista": [6,2,"В y на","Los lugares que van con на"],
  "u6-prep-e": [6,3,"El prepositivo","Casi siempre, -е"],
  "u6-donde-prep": [6,8,"Ubicación o movimiento","Dónde estás: prepositivo"],
  "u8-genero-quien": [8,3,"Quién lo hizo","Я y ты dependen de quién eres"],
  "u8-plural": [8,3,"Quién lo hizo","Мы, вы, они́: siempre -ли"],
  "u8-byl-acento": [8,6,"Был, была́, бы́ло, бы́ли","Dónde estuviste"],
  "u8-aspecto-pistas": [8,7,"Proceso o resultado","Pistas para elegir"],
  "u8-aspecto-idea": [8,7,"Proceso o resultado","Dos verbos para una acción"],
  "u8-orden-perf": [8,8,"Contar en orden","Una cosa después de otra"],
  "u9-tres-tiempos": [9,1,"Pasado, presente y futuro","La misma acción, tres veces"],
  "u9-fut-resultado": [9,3,"Lo voy a terminar","El presente del verbo de resultado es futuro"],
  "u9-fut-cual": [9,3,"Lo voy a terminar","¿Бу́ду чита́ть o прочита́ю?"],
  "u9-byt-tres": [9,4,"Быть en futuro","Быть en los tres tiempos"],
  "u9-poidu": [9,7,"Adónde vas a ir","Пойду́ y пое́ду"],
  "u10-tener": [10,2,"Genitivo: tener y de quién","Tener: у + genitivo + есть"],
  "u10-net": [10,3,"Genitivo: lo que no hay","Есть → нет"],
  "u10-iz-ot": [10,5,"Genitivo con preposiciones","Из o от"],
  "u10-prep-gen": [10,5,"Genitivo con preposiciones","Las preposiciones con genitivo"],
  "u10-dat-verbos": [10,6,"Dativo: ¿a quién?","Los verbos con dativo"],
  "u10-k-u": [10,6,"Dativo: ¿a quién?","Ir a ver a alguien: к + dativo"],
  "u10-edad": [10,7,"Dativo: me gusta, necesito","Cuántos años tienes: мне … лет"],
  "u10-gustar": [10,7,"Dativo: me gusta, necesito","Me gusta: мне нра́вится"],
  "u10-estados": [10,7,"Dativo: me gusta, necesito","Tengo frío, me da pena"],
  "u10-ins-fin": [10,8,"Instrumental: ¿con quién?","Las terminaciones del instrumental"],
  "u10-s-kem": [10,8,"Instrumental: ¿con quién?","Con quién"],
  "u10-transporte-ins": [10,9,"Instrumental: ¿con qué? ¿dónde?","En tren: по́ездом"],
  "u10-rabotat-kem": [10,10,"Instrumental: profesión e intereses","De qué trabajas"],
  "u11-nravyatsya": [11,8,"Gustos y opiniones","Мне нра́вится, мне нра́вятся"],
  "u12-pron-acc-gen": [12,1,"Los pronombres en todos los casos","Acusativo y genitivo: la misma forma"],
  "u12-pron-n": [12,1,"Los pronombres en todos los casos","La н- después de preposición"],
  "u12-pron-so": [12,1,"Los pronombres en todos los casos","Con я: со мной y обо мне"],
  "u12-nikto": [12,1,"Los pronombres en todos los casos","Nadie, nada: никто́ не…, ничего́ не…"],
  "u12-to-nibud": [12,1,"Los pronombres en todos los casos","Alguien, algo: -то y -нибудь"],
  "u12-ob": [12,2,"Posesivos, свой y э́тот","о → об"],
  "u12-pos-casos": [12,2,"Posesivos, свой y э́тот","Los posesivos en los otros casos"],
  "u12-svoy": [12,2,"Posesivos, свой y э́тот","свой: su propio"],
  "u12-ego-eyo": [12,2,"Posesivos, свой y э́тот","его́, её, их no cambian nunca"],
  "u12-etot": [12,2,"Posesivos, свой y э́тот","э́тот: este, esta"],
  "u12-gen-pl": [12,3,"Plural I: cantidades y números","Genitivo plural: las terminaciones"],
  "u12-gen-pl-irreg": [12,3,"Plural I: cantidades y números","Los irregulares"],
  "u12-contar": [12,3,"Plural I: cantidades y números","Contar: 1, 2–4, 5 o más"],
  "u12-acc-pl": [12,3,"Plural I: cantidades y números","Acusativo plural"],
  "u12-pl-dat-ins-prep": [12,4,"Plural II: los otros casos","-ам, -ами, -ах"],
  "u12-pos-pl": [12,4,"Plural II: los otros casos","Los posesivos en plural"],
  "u12-hochu": [12,6,"Aspecto: negación y futuro","Después de хочу́, ну́жно, мо́жно (repaso)"],
  "u12-inf-imperf": [12,6,"Aspecto: negación y futuro","Después de empezar, terminar, no hace falta"],
  "u12-neg-imperf": [12,6,"Aspecto: negación y futuro","No lo hice / no lo terminé"],
  "u12-fondo": [12,7,"Aspecto en el relato","El fondo y lo que pasó"],
  "u12-imp-irreg": [12,8,"El imperativo","Los irregulares"],
  "u12-imp-ne": [12,8,"El imperativo","No hagas: не + proceso"],
  "u12-imp-aspecto": [12,8,"El imperativo","¿Qué aspecto?"],
  "u12-comp": [12,9,"Comparar","Más … que …"],
  "u12-comp-forma": [12,9,"Comparar","Cómo se forma"],
  "u12-comp-gen": [12,9,"Comparar","Sin чем: con genitivo"],
  "u12-samyj": [12,9,"Comparar","El más: са́мый"],
  "u12-comp-verbo": [12,9,"Comparar","También con verbos"],
  "u13-casos-pregunta": [13,2,"Los seis casos en contexto","La pregunta te dice el caso"],
  "u13-tres-tiempos": [13,3,"Pasado, presente y futuro","Tres tiempos"],
  "u13-antes-ahora": [13,3,"Pasado, presente y futuro","Antes, ahora, pronto"],
  "u13-sentir": [13,4,"Contar una experiencia","Lo que sentiste"],
  "u13-esli": [13,4,"Contar una experiencia","Si y cuando, hablando del futuro"],
  "u13-acuerdo": [13,5,"Opinar y justificar","Estar de acuerdo, o no"]
};

/* Lugares con sorteo: cuántos salen en cada intento (12/10/2026) */
const U14_LUGARES = {
  audio: [["oido", 3]],
  gramatica: [["casos", 4], ["plural", 3], ["pron", 3], ["aspecto", 5], ["impComp", 3], ["tiempos", 3], ["concord", 2], ["prep", 2], ["orden", 2], ["corr", 2], ["diag", 3], ["natural", 2], ["porque", 2]],
  lexica: [["lex", 6], ["emp", 1], ["sig", 3], ["esru", 2]]
};

/* ── Bloque 6: comunicación ── */
const U14_SITUACIONES = [
  { escena: "👕", pide: "Estás en una tienda. Buscas otra camisa porque esta es chica. Pídele ayuda al vendedor.", nec: [u14E("pedir", "мо́жно|помоги́те|извини́те|скажи́те|у вас есть|~есть"), u14E("la camisa", "руба́шку|руба́шка|руба́шки"), u14E("el problema", "ма́ленькая|бо́льше|друга́я|другу́ю|~ма́ленький")], modelo: "Извини́те, у вас есть друга́я руба́шка? Э́та ма́ленькая." },
  { escena: "🚇", pide: "Estás en la calle y no encuentras el metro. Pregúntale a alguien.", nec: [u14E("disculparte", "извини́те|скажи́те|~прости́те"), u14E("el metro", "метро́"), u14E("dónde", "где|как дое́хать|как пройти́|~куда́")], modelo: "Извини́те, где здесь метро́?" },
  { escena: "🍽️", pide: "En un restaurante, pide la cuenta y pregunta si se puede pagar con tarjeta.", nec: [u14E("la cuenta", "счёт"), u14E("con tarjeta", "карто́й|ка́рту|ка́рта")], modelo: "Счёт, пожа́луйста. Мо́жно карто́й?" },
  { escena: "⏰", pide: "Vas a llegar tarde a una cita con un amigo. Mándale un mensaje: avisa y di cuánto.", nec: [u14E("vas a llegar tarde", "опозда́ю|опа́здываю|~по́здно"), u14E("cuánto", "мину́т|мину́ты|час|~на")], modelo: "Извини́, я опозда́ю на де́сять мину́т." }
];
const U14_ESPONT = [
  { audio: "Что ты де́лал в суббо́ту?", pide: "Contesta libremente (en pasado).", nec: [u14E("en pasado", "", U14_PASADO_RX, "Hay que contestar en pasado.")], modelo: "В суббо́ту я гуля́л с друзья́ми." },
  { audio: "Каки́е у тебя́ пла́ны на сле́дующую неде́лю?", pide: "Contesta libremente (planes).", nec: [u14E("un plan", "бу́ду|пое́ду|пойду́|хочу́|~позвоню́")], modelo: "На сле́дующей неде́ле я бу́ду мно́го рабо́тать." },
  { audio: "Что тебе́ нра́вится в твоём го́роде?", pide: "Contesta con una razón.", nec: [u14E("lo que te gusta", "мне нра́вится|нра́вится|люблю́|~здесь"), u14E("una razón", "потому́ что|поэ́тому|~здесь")], modelo: "Мне нра́вится мо́ре, потому́ что я люблю́ гуля́ть." }
];
/* Conversación de diez intervenciones */
function U14_CONV() {
  const E = u14E;
  return { quien: "Ми́ша", genero: "m", titulo: "Conversación con Misha", chat: false, pasos: [
    ["Приве́т! Как дела́?", "¡Hola! ¿Cómo andas?", "Contesta y devuelve la pregunta.", [E("cómo estás", "хорошо́|норма́льно|отли́чно|пло́хо|~ничего́"), { es: "una pregunta de vuelta", pregunta: true, formas: ["а ты", "а у тебя́"] }], "Хорошо́, спаси́бо! А ты?"],
    ["То́же хорошо́. Каки́е у тебя́ пла́ны на выходны́е?", "Bien también. ¿Qué planes tienes para el finde?", "Cuenta un plan.", [E("un plan", "бу́ду|пое́ду|пойду́|хочу́")], "В суббо́ту я пойду́ в кино́."],
    ["Отли́чно! С кем?", "¡Genial! ¿Con quién?", "Di con quién (с + instrumental).", [E("con quién", "с дру́гом|с подру́гой|с друзья́ми|с бра́том|с сестро́й|~с")], "С подру́гой."],
    ["А что вы бу́дете смотре́ть?", "¿Y qué van a ver?", "Contesta.", [E("qué", "фильм|~но́вый|~ру́сский")], "Но́вый ру́сский фильм."],
    ["Я его́ ви́дел. Мне не понра́вился.", "Yo la vi. No me gustó.", "Pregúntale por qué.", [E("por qué", "почему́|~как")], "Почему́?"],
    ["Он сли́шком дли́нный. А ты лю́бишь кино́?", "Es demasiado larga. ¿Y a ti te gusta el cine?", "Contesta con una razón.", [E("tu respuesta", "да|нет|люблю́|не люблю́"), E("una razón", "потому́ что|поэ́тому")], "Да, люблю́, потому́ что э́то интере́сно."],
    ["А что ты де́лал в про́шлые выходны́е?", "¿Y qué hiciste el finde pasado?", "Contesta en pasado.", [E("en pasado", "", U14_PASADO_RX, "Hay que contestar en pasado.")], "Я был до́ма и чита́л."],
    ["Я ездил на мо́ре. Ты был на мо́ре в э́том году́?", "Fui al mar. ¿Fuiste al mar este año?", "Contesta.", [E("tu respuesta", "да|нет|был|была́|не был|не была́")], "Да, был в ию́ле."],
    ["Что тебе́ бо́льше нра́вится: мо́ре и́ли го́ры?", "¿Qué te gusta más: el mar o la montaña?", "Compara y explica.", [E("tu preferencia", "бо́льше|лу́чше|~нра́вится|~люблю́"), E("una razón", "потому́ что|чем|поэ́тому")], "Мне бо́льше нра́вится мо́ре, потому́ что там тепло́."],
    ["Хорошо́. Мне ну́жно идти́. Пока́!", "Bueno. Me tengo que ir. ¡Adiós!", "Despídete.", [E("despedirte", "пока́|до встре́чи|до свида́ния|уда́чи|~до")], "Пока́! До встре́чи!"]
  ].map(p => ({ bot: p[0], es: p[1], tarea: p[2], sit: { necesita: p[3], modelos: [p[4]] }, pista: "" })) };
}

/* ── Bloques y pesos ── */
const U14_BLOQUES = [
  { id: "lectura", ru: "Чте́ние", es: "Comprensión lectora", puntos: 15, emoji: "📖", min: "30–40 min", intro: "Tres textos de dificultad creciente: un mensaje, una experiencia y una opinión. No hace falta traducir todo: busca lo que te piden.", repaso: "Unidad 13, módulo 6 (Textos del mundo real)" },
  { id: "audio", ru: "Ауди́рование", es: "Comprensión auditiva", puntos: 15, emoji: "🎧", min: "30–40 min", intro: "Un diálogo, una conversación y un relato, tres frases cortas para escuchar la terminación y al final dos audios para contestar por escrito en ruso. Escucha todas las veces que quieras.", repaso: "Unidad 13, módulo 7 (Comprensión auditiva)" },
  { id: "gramatica", ru: "Грамма́тика", es: "Gramática en contexto", puntos: 20, emoji: "🧩", min: "40–50 min", intro: "Casos, plural, pronombres, el aspecto, el imperativo, comparar, los tiempos, preposiciones, ordenar palabras, corregir y decir qué falla. Cada vez que lo haces salen preguntas distintas.", repaso: "Unidades 8 a 13 (al terminar, «Qué repasar» te dice qué reglas)" },
  { id: "lexica", ru: "Ле́ксика", es: "Vocabulario en contexto", puntos: 10, emoji: "🗂️", min: "20–30 min", intro: "Palabras en uso: elige la que va según la situación, di qué significan y escríbelas en ruso. Cada vez que lo haces salen palabras distintas.", repaso: "Unidades 6 a 13 y el Diccionario" },
  { id: "escritura", ru: "Письмо́", es: "Producción escrita", puntos: 20, emoji: "✍️", min: "40–50 min", intro: "Dos textos: un mensaje (80–100 palabras) y «Моя́ исто́рия» (200–250 palabras).", repaso: "Unidad 13, módulos 10 y 11 (taller y proyecto)" },
  { id: "comunicacion", ru: "Обще́ние", es: "Comunicación", puntos: 20, emoji: "💬", min: "20–30 min", intro: "Situaciones, preguntas para contestar libremente y una conversación de diez intervenciones. No hay una única respuesta correcta.", repaso: "Unidades 11 y 13 (módulo 8)" }
];
const U14_NIVELES = [[90, "Excelente dominio", "Puedes comunicarte con bastante autonomía y usas las estructuras con seguridad."], [80, "Muy buen dominio", "Te comunicas bien, con algún error ocasional."],
  [70, "Competencia funcional", "Te desenvuelves, pero todavía hay estructuras para consolidar."], [60, "En desarrollo", "Entiendes bastante, pero la producción todavía cuesta."], [0, "Necesita consolidación", "Conviene repasar algunas unidades antes de seguir."]];

/* ── Escritura: las tareas ── */
function U14_ESCRITURA() {
  const R = U13_R, D = U13_DET;
  const cuentaFrase = (t, lista) => lista.reduce((a, x) => a + (D.n(t).split(" " + x + " ").length - 1), 0);
  const obj = (txt, meta, fn) => ({ txt, meta, fn });
  const TEMP = ["вчера", "сегодня", "завтра", "сейчас", "раньше", "скоро", "летом", "зимой", "весной", "осенью", "каждый день", "обычно", "часто", "всегда", "иногда", "утром", "вечером", "в субботу", "в воскресенье", "потом", "уже"];
  return {
    t1: { titulo: "Tarea 1 · Mensaje", puntos: 8, palabras: [80, 100], opciones: [
        { id: "a", txt: "A · Escríbele a un amigo para cambiar un plan (y propón otro)." }, { id: "b", txt: "B · Organiza un encuentro: cuándo, dónde y qué van a hacer." },
        { id: "c", txt: "C · Explica un problema (en tu apartamento, en el trabajo…) y pide ayuda." }, { id: "d", txt: "D · Escribe una reseña corta de un restaurante o de un lugar." }],
      objetivos: [obj("Entre 80 y 100 palabras", 1, t => { const k = D.palabras(t); return k >= 80 && k <= 100 ? 1 : k >= 60 && k <= 120 ? .5 : 0; }),
        obj("Al menos 2 conectores", 2, t => D.tiene(t, D.CONECT)), obj("Una razón (потому́ что, поэ́тому…)", 1, t => D.tiene(t, D.RAZON)),
        obj("Verbos en dos tiempos distintos", 2, t => [D.pasado, D.presente, D.futuro].filter(f => D.cuenta(t, f) > 0).length),
        obj("Una pregunta o una propuesta (дава́й…, мо́жно…?)", 1, t => /\?/.test(t) || D.tiene(t, ["давай", "можно", "хочешь"]) ? 1 : 0)] },
    t2: { titulo: "Tarea 2 · Моя́ исто́рия", puntos: 12, palabras: [200, 250], consigna: "Расскажи́ о свое́й жи́зни, про́шлом и пла́нах на бу́дущее. Cuenta tu vida: una experiencia del pasado, tu vida ahora, tus planes, algo que te gusta o no (y por qué), personas importantes y lugares.",
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

  /* De oído (12/10/2026) */
  U14_OIDO.forEach(([fr, q, ops, ex, regla], j) => add("audio", { id: "EF-oi-" + j, tipo: "oido", forma: "elegir", lugar: "oido", regla, grupo: "EFOI-" + j, audio: fr, oir: fr, pide: q,
    opciones: baraja(ops, j + 5), correcta: ops[0], explicacion: fr + " " + ex }));

  U14_AUDIO_RESP.forEach((r, j) => add("audio", { id: "EF-aur-" + j, tipo: "audio-resp", forma: "situacion", grupo: "EFAR-" + j, audio: r.audio, audioManual: false, pide: r.pide,
    sit: { necesita: r.nec, modelos: [r.modelo] }, oir: r.modelo, explicacion: "Una forma de decirlo: **" + r.modelo + "**" }));

  /* Gramática (12/10/2026): cada ítem con su lugar (sorteo) y su regla («Qué repasar») */
  const G = U14_GRAM;
  const gid = { n: 0 };
  const elegir = (lugar, tipo, [fr, ok, ops, por, regla, pista]) => { const j = gid.n++;
    add("gramatica", { id: "EF-g" + lugar + "-" + j, tipo, forma: "elegir", lugar, regla, grupo: "EFG-" + lugar + "-" + j, pide: pista ? "Completa (" + pista + ")." : "Completa.", grande: fr,
      opciones: baraja(ops, j), correcta: ok, oir: fr.replace("_____", ok), explicacion: fr.replace("_____", "**" + ok + "**") + (por ? " " + (/^[a-záéíóú]/.test(por) ? por.charAt(0).toUpperCase() + por.slice(1) : por) + "." : "") }); };
  G.casos.forEach(x => elegir("casos", "caso", x));
  G.plural.forEach(x => elegir("plural", "caso", x));
  G.pron.forEach(x => elegir("pron", "pronombre", x));
  G.aspecto.forEach(x => elegir("aspecto", "aspecto", x));
  G.aspectoPq.forEach(([fr, w, ok, otras, regla], j) => add("gramatica", { id: "EF-gapq-" + j, tipo: "porque", forma: "elegir", lugar: "aspecto", regla, grupo: "EFGAPQ-" + j, grande: fr, audio: fr, audioManual: true, oir: fr,
    pide: "¿Por qué «" + w + "»?", opciones: baraja([ok].concat(otras), j + 2), correcta: ok, explicacion: fr + " " + ok + "." }));
  G.aspectoPar.forEach(([q, ok, mal, ex, regla], j) => add("gramatica", { id: "EF-gapa-" + j, tipo: "par", forma: "elegir", lugar: "aspecto", regla, grupo: "EFGAPA-" + j, pide: q, oir: ok,
    opciones: baraja([ok, mal], j + 1), correcta: ok, explicacion: ok + " " + ex }));
  G.impComp.forEach(x => elegir("impComp", "imperativo", x));
  G.tiempos.forEach(([fr, a, ok, regla, otras], j) => add("gramatica", { id: "EF-gt-" + j, tipo: "tiempo", forma: "escribir", lugar: "tiempos", regla, grupo: "EFGT-" + j, pide: "Transforma: " + fr + " → " + a, grande: a,
    esperadas: [ok].concat(otras || []), idioma: "ru", audio: ok, audioManual: true, explicacion: ok }));
  G.esli.forEach(x => elegir("tiempos", "tiempo", x));
  G.concord.forEach(([fr, ok, ops, regla], j) => add("gramatica", { id: "EF-gk-" + j, tipo: "concordancia", forma: "elegir", lugar: "concord", regla, grupo: "EFGK-" + j, pide: "Completa.", grande: fr, opciones: ops, correcta: ok,
    oir: fr.replace("_____", ok), explicacion: fr.replace("_____", "**" + ok + "**") }));
  const PREPS = ["в", "на", "из", "без", "для", "по́сле", "до", "с", "к"];
  G.prep.forEach(([fr, ok, regla], j) => { const otras = baraja(PREPS.filter(p => sin(p) !== sin(ok)), j).slice(0, 3);
    add("gramatica", { id: "EF-gp-" + j, tipo: "preposicion", forma: "elegir", lugar: "prep", regla, grupo: "EFGP-" + j, pide: "Completa con la preposición.", grande: fr,
      opciones: baraja([ok].concat(/^[А-Я]/.test(ok) ? otras.map(x => x.charAt(0).toUpperCase() + x.slice(1)) : otras), j), correcta: ok, oir: fr.replace("_____", ok), explicacion: fr.replace("_____", "**" + ok + "**") }); });
  G.orden.forEach(([ru, es, regla], j) => { const w = sinP(ru).split(" ");
    add("gramatica", { id: "EF-go-" + j, tipo: "construir", forma: "ordenar", lugar: "orden", regla, grupo: "EFGO-" + j, pide: "Ordena: «" + es + "»", audio: ru, fichas: baraja(w, j + 3), sep: " ", esperada: w.join(" "), explicacion: ru }); });
  G.corr.forEach(([fr, mal, arr, expl, regla], j) => { const pals = sinP(fr).split(" ");
    add("gramatica", { id: "EF-gx-" + j, tipo: "corregir", forma: "corregir", lugar: "corr", regla, grupo: "EFGX-" + j, pide: "Toca la palabra que está mal y escríbela bien.", palabras: pals, correcta: pals.indexOf(mal), arreglo: arr,
      oir: fr.replace(mal, arr), explicacion: expl }); });
  G.diag.forEach(([mal, ok, k, regla], j) => add("gramatica", { id: "EF-gd-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, lugar: "diag", regla, grupo: "EFGD-" + j, oir: ok,
    pide: "La frase tiene un error. ¿Qué falla?", grande: mal, opciones: baraja([G.FALLAS[k]].concat(baraja(G.FALLAS.filter((x, i) => i !== k), j).slice(0, 2)), j + 4), correcta: G.FALLAS[k],
    esperadas: [ok], explicacion: ok + " Revisa: " + G.FALLAS[k].charAt(0).toLowerCase() + G.FALLAS[k].slice(1) + "." }));
  G.natural.forEach(([ok, mal, ex, regla], j) => add("gramatica", { id: "EF-gn-" + j, tipo: "natural", forma: "elegir", lugar: "natural", regla, grupo: "EFGN-" + j, oir: ok, pide: "¿Cuál suena natural?",
    opciones: baraja([ok, mal], j + 2), correcta: ok, explicacion: ok + " " + ex }));
  G.porque.forEach(([fr, w, ok, otras, regla], j) => add("gramatica", { id: "EF-gq-" + j, tipo: "porque", forma: "elegir", lugar: "porque", regla, grupo: "EFGQ-" + j, grande: fr, audio: fr, audioManual: true, oir: fr,
    pide: "¿Por qué «" + w + "»?", opciones: baraja([ok].concat(otras), j + 1), correcta: ok, explicacion: fr + " " + ok + "." }));

  /* Vocabulario (12/10/2026): en contexto, emparejar, ¿qué significa? y escribir en ruso. `palabra`: para «Qué repasar» */
  U14_LEX.forEach(([fr, ok, ops], j) => add("lexica", { id: "EF-lx-" + j, tipo: "lexica", forma: "elegir", lugar: "lex", palabra: ok.charAt(0).toLowerCase() + ok.slice(1), grupo: "EFX-" + j, pide: "Elige lo que va.", grande: fr, opciones: baraja(ops, j), correcta: ok,
    oir: fr.indexOf("_____") >= 0 ? fr.replace("_____", ok) : ok, explicacion: fr.indexOf("_____") >= 0 ? fr.replace("_____", "**" + ok + "**") : "**" + ok + "**" }));
  U14_LEX_EMP.forEach((pares, j) => add("lexica", { id: "EF-lxe-" + j, tipo: "lexica", forma: "emparejar", lugar: "emp", grupo: "EFXE-" + j, pide: "Une cada palabra o expresión con su situación.", pares, explicacion: pares.map(p => p.join(" — ")).join(" · ") }));
  const VOC = U14_VOC.split("|").map(x => x.split("="));
  VOC.forEach(([ru, es], j) => {
    const dis = baraja(VOC.filter(v => v[0] !== ru), j + 7).slice(0, 3).map(v => v[1]), r = ru.replace(/́/g, "");
    add("lexica", { id: "EF-ls-" + j, tipo: "significado", forma: "elegir", dificultad: 1, lugar: "sig", palabra: ru, grupo: "EFLS-" + j, pide: "¿Qué significa?", grande: ru, audio: r, oir: r,
      opciones: baraja([es].concat(dis), j), correcta: es, explicacion: ru + " — " + es });
    add("lexica", { id: "EF-le-" + j, tipo: "palabra-es-ru", forma: "escribir", lugar: "esru", palabra: ru, grupo: "EFLE-" + j, pide: "Escribe en ruso: «" + es + "»", audio: r, audioManual: true, oir: r,
      pista: "Empieza con " + r[0].toUpperCase() + " y tiene " + r.length + " letras.", esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  U14_SITUACIONES.forEach((x, j) => add("comunicacion", { id: "EF-cs-" + j, tipo: "situacion", forma: "situacion", dificultad: 3, grupo: "EFCS-" + j, escena: x.escena, pide: x.pide, sit: { necesita: x.nec, modelos: [x.modelo] }, oir: x.modelo,
    explicacion: "Una forma de decirlo: **" + x.modelo + "**" }));
  U14_ESPONT.forEach((x, j) => add("comunicacion", { id: "EF-ce-" + j, tipo: "espontanea", forma: "situacion", dificultad: 3, grupo: "EFCE-" + j, audio: x.audio, audioManual: false, contexto: [{ p: "", ru: x.audio }], pide: x.pide,
    sit: { necesita: x.nec, modelos: [x.modelo] }, oir: x.modelo, explicacion: "Una forma de decirlo: **" + x.modelo + "**" }));
  add("comunicacion", { id: "EF-conv", tipo: "conversacion", forma: "turnos", dificultad: 3, grupo: "EFCV", pide: "🗣️ Conversación con Misha", turnos: U14_CONV(), peso: 5,
    explicacion: "Así podía quedar: " + U14_CONV().pasos.map(p => p.sit.modelos[0]).join(" / ") });
  return (ejerciciosExamenFinal.cache = B);
}

/* Un intento de un bloque (12/10/2026): los ítems sin lugar van siempre; de cada lugar salen
   los que dice U14_LUGARES, sorteados con la semilla del intento. Se respeta el orden del banco. */
function u14Intento(bloque, semilla) {
  const B = ejerciciosExamenFinal()[bloque] || [];
  const L = U14_LUGARES[bloque];
  if (!L) return B.slice();
  let s = (semilla || 1) % 233280;
  const azar = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const elegidos = new Set(), palabras = new Set();
  L.forEach(([lugar, n]) => { const pool = B.filter(e => e.lugar === lugar).slice();
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(azar() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    let k = 0; pool.forEach(e => { if (k >= n || (e.palabra && palabras.has(e.palabra))) return; elegidos.add(e.id); if (e.palabra) palabras.add(e.palabra); k++; }); });
  return B.filter(e => !e.lugar || elegidos.has(e.id));
}

/* «Qué repasar» (12/10/2026): carga la unidad de una regla si la página no la tiene, para abrir
   la sección en una hoja (AzHojaRegla busca en UNIDAD_1 … UNIDAD_14). */
function u14CargarRegla(id) {
  const r = U14_REGLAS[id];
  if (!r) return Promise.resolve(false);
  if (typeof azRegla === "function" && azRegla(id)) return Promise.resolve(true);
  const cache = u14CargarRegla.cache || (u14CargarRegla.cache = {});
  if (!cache[r[0]]) cache[r[0]] = new Promise(ok => {
    const s = document.createElement("script");
    s.src = "data/data-unidad-" + r[0] + ".js";
    s.onload = () => ok(true);
    s.onerror = () => { delete cache[r[0]]; ok(false); };
    document.head.appendChild(s);
  });
  return cache[r[0]].then(() => typeof azRegla === "function" && !!azRegla(id));
}

window.U14_BLOQUES = U14_BLOQUES;
window.U14_REGLAS = U14_REGLAS;
window.u14CargarRegla = u14CargarRegla;
window.U14_LUGARES = U14_LUGARES;
window.u14Intento = u14Intento;
window.U14_NIVELES = U14_NIVELES;
window.U14_ESCRITURA = U14_ESCRITURA;
window.u14PuntuarTexto = u14PuntuarTexto;
window.ejerciciosExamenFinal = ejerciciosExamenFinal;
