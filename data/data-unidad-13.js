/* ============================================================
   DATA-UNIDAD-13.JS — Unidad 13: Consolidación B1 y comunicación
   ------------------------------------------------------------
   Versión 06/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu):
   · Es la Unidad 12 del esquema, menos «Comparar» (pasó a la 12).
   · Sin gramática nueva: integrar todo y comunicarse con autonomía;
     cada vez menos pistas («Decí lo que quieras decir»).
   · 35 palabras nuevas (todas ya en el léxico), aprobadas el 06/10/2026.
   · Motor nuevo: autocorrección (forma corregir), taller de escritura
     en 4 pasos (AzTaller), audio a dos voces con velocidad, y la
     «pregunta de vuelta» de las conversaciones B1 (azSituacion).
   · La pantalla «Ты говори́шь по-ру́сски» va al aprobar el examen
     final (Unidad 14), no acá.
   ============================================================ */

/* Elemento de una situación: E("el agua", "во́ду|воды́", rx?, consigna?) */
function u13E(es, formas, rx, consigna) { const e = { es, formas: formas ? formas.split("|") : [] }; if (rx) e.rx = rx; if (consigna) e.consigna = consigna; return e; }
const U13_PASADO_RX = "(л|ла|ло|ли)$";
const U13_PASADO = "Hay que contarlo en pasado (рабо́тал, гуля́ла…).";

/* Módulo 1: lo que ya podés decir — [función, ruso, español] */
const U13_MAPA = [
  ["Quién soy", "Меня́ зову́т А́нна.", "Me llamo Ana."], ["Qué hago", "Я архите́ктор.", "Soy arquitecta."], ["Dónde vivo", "Я живу́ в Барсело́не.", "Vivo en Barcelona."],
  ["Qué hago ahora", "Сейча́с я рабо́таю в о́фисе.", "Ahora trabajo en la oficina."], ["Qué hice", "Вчера́ я рабо́тала до́ма.", "Ayer trabajé en casa."],
  ["Qué voy a hacer", "За́втра я бу́ду отдыха́ть.", "Mañana voy a descansar."], ["Qué voy a hacer (una vez)", "За́втра я позвоню́ ма́ме.", "Mañana voy a llamar a mamá."],
  ["Qué tengo", "У меня́ есть маши́на.", "Tengo auto."], ["Qué no tengo", "У меня́ нет вре́мени.", "No tengo tiempo."],
  ["Con quién", "Я гуля́ю с друзья́ми.", "Paseo con mis amigos."], ["A quién", "Я даю́ кни́гу А́нне.", "Le doy el libro a Ana."], ["De qué hablo", "Мы говори́м о рабо́те.", "Hablamos del trabajo."],
  ["Qué me gusta", "Мне нра́вится му́зыка.", "Me gusta la música."], ["Comparar", "Метро́ быстре́е, чем авто́бус.", "El metro es más rápido que el colectivo."],
  ["Opinar", "По-мо́ему, э́то хоро́шая иде́я.", "Para mí, es una buena idea."], ["Pedir", "Позвони́ мне, пожа́луйста.", "Llamame, por favor."]
];
/* Módulo 2: tocar la palabra en un caso — [frase, palabra, caso, motivo] */
const U13_MOTIVO = {
  prep: "в / на / о + prepositivo: dónde, de qué",
  gen: "у, нет, мно́го, по́сле y los números piden genitivo",
  dat: "a quién: звони́ть, помога́ть, писа́ть кому́",
  ins: "с + instrumental (con quién) o la profesión",
  acc: "lo que recibe la acción"
};
const U13_CASOS_TXT = [
  ["Я живу́ в Барсело́не.", "Барсело́не", "prep"], ["У дру́га есть маши́на.", "дру́га", "gen"], ["По́сле рабо́ты я звоню́ ма́ме.", "ма́ме", "dat"],
  ["Я ча́сто гуля́ю с сестро́й.", "сестро́й", "ins"], ["Я чита́ю кни́гу.", "кни́гу", "acc"], ["Мы говори́м о фи́льме.", "фи́льме", "prep"],
  ["Я пишу́ письмо́ дру́гу.", "дру́гу", "dat"], ["Ма́ма рабо́тает врачо́м.", "врачо́м", "ins"], ["В го́роде мно́го музе́ев.", "музе́ев", "gen"],
  ["Я помога́ю студе́нтам.", "студе́нтам", "dat"], ["Мы гуля́ем с детьми́.", "детьми́", "ins"], ["Я ду́маю о друзья́х.", "друзья́х", "prep"],
  ["Я люблю́ соба́к.", "соба́к", "acc"], ["У меня́ нет вре́мени.", "вре́мени", "gen"]
];
const U13_CASO_NOM = { prep: "prepositivo", gen: "genitivo", dat: "dativo", ins: "instrumental", acc: "acusativo" };
/* Completar la forma: [plantilla ({} = palabra), palabra, caso (índice de Casos), plural?, español] */
const U13_FORMAS = [
  ["Я живу́ в {}.", "Москва́", 5, false, "Vivo en Moscú."], ["У {} есть кварти́ра.", "брат", 1, false, "Mi hermano tiene un departamento."],
  ["Я звоню́ {}.", "сестра́", 2, false, "Llamo a mi hermana."], ["Я гуля́ю с {}.", "соба́ка", 4, false, "Paseo con el perro."],
  ["Мы говори́м о {}.", "рабо́та", 5, false, "Hablamos del trabajo."], ["Я жду {}.", "авто́бус", 3, false, "Espero el colectivo."],
  ["Я помога́ю {}.", "друг", 2, true, "Ayudo a los amigos."], ["В Москве́ мно́го {}.", "музе́й", 1, true, "En Moscú hay muchos museos."],
  ["Мы ду́маем о {}.", "де́ти", 5, true, "Pensamos en los chicos."], ["Она́ рабо́тает с {}.", "студе́нт", 4, true, "Ella trabaja con estudiantes."]
];
/* Corregir: [frase con error, palabra mal, arreglo, explicación] */
const U13_CORR_CASOS = [
  ["У меня́ нет маши́на.", "маши́на", "маши́ны", "нет + genitivo: **маши́ны**."], ["Я живу́ в Москва́.", "Москва́", "Москве́", "в + dónde: prepositivo: **Москве́**."],
  ["Я гуля́ю с сестра́.", "сестра́", "сестро́й", "с + instrumental: **сестро́й**."], ["Я звоню́ ма́ма.", "ма́ма", "ма́ме", "звони́ть кому́: dativo: **ма́ме**."],
  ["Мы ду́маем о рабо́та.", "рабо́та", "рабо́те", "о + prepositivo: **рабо́те**."], ["У меня́ пять брат.", "брат", "бра́тьев", "5 o más: genitivo plural: **бра́тьев**."]
];
/* Módulo 3: tiempos — [presente, pasado, futuro, español del presente, género del pasado] */
const U13_TIEMPOS = [
  ["Я рабо́таю до́ма.", "Я рабо́тал до́ма.", "Я бу́ду рабо́тать до́ма.", "Trabajo en casa.", "m"],
  ["Мы гуля́ем в па́рке.", "Мы гуля́ли в па́рке.", "Мы бу́дем гуля́ть в па́рке.", "Paseamos en el parque.", ""],
  ["Она́ чита́ет кни́гу.", "Она́ чита́ла кни́гу.", "Она́ бу́дет чита́ть кни́гу.", "Ella lee un libro.", ""],
  ["Я до́ма.", "Я была́ до́ма.", "Я бу́ду до́ма.", "Estoy en casa.", "f"],
  ["Они́ смо́трят фильм.", "Они́ смотре́ли фильм.", "Они́ бу́дут смотре́ть фильм.", "Ellos miran una película.", ""],
  ["Ты гото́вишь у́жин.", "Ты гото́вил у́жин.", "Ты бу́дешь гото́вить у́жин.", "Cocinás la cena.", "m"],
  ["Я учу́ ру́сский язы́к.", "Я учи́ла ру́сский язы́к.", "Я бу́ду учи́ть ру́сский язы́к.", "Estudio ruso.", "f"],
  ["Он живёт в Мадри́де.", "Он жил в Мадри́де.", "Он бу́дет жить в Мадри́де.", "Él vive en Madrid.", ""]
];
const U13_CORR_TIEMPOS = [
  ["Вчера́ я рабо́таю до́ма.", "рабо́таю", "рабо́тал", "вчера́ → pasado: **рабо́тал**. (sos hombre)"],
  ["Сейча́с она́ чита́ла кни́гу.", "чита́ла", "чита́ет", "сейча́с → presente: **чита́ет**."],
  ["Ра́ньше я живу́ в Мадри́де.", "живу́", "жил", "ра́ньше → pasado: **жил**. (sos hombre)"],
  ["За́втра мы гуля́ли в па́рке.", "гуля́ли", "гуля́ть", "за́втра → futuro: мы бу́дем **гуля́ть**… Falta бу́дем: За́втра мы бу́дем гуля́ть в па́рке."]
];
/* Módulo 4: conectores — [frase con ___, conector, opciones, español] */
const U13_CONECT = [
  ["У меня́ не́ было вре́мени, _____ я не позвони́л.", "поэ́тому", ["поэ́тому", "потому́ что", "хотя́"], "No tenía tiempo, por eso no llamé."],
  ["Я не позвони́л, _____ у меня́ не́ было вре́мени.", "потому́ что", ["потому́ что", "поэ́тому", "когда́"], "No llamé porque no tenía tiempo."],
  ["_____ бы́ло хо́лодно, мы гуля́ли.", "Хотя́", ["Хотя́", "Поэ́тому", "Е́сли"], "Aunque hacía frío, paseamos."],
  ["_____ я жил в Мадри́де, я мно́го гуля́л.", "Когда́", ["Когда́", "Е́сли", "Поэ́тому"], "Cuando vivía en Madrid, paseaba mucho."],
  ["_____ бу́дет тепло́, мы пойдём на пляж.", "Е́сли", ["Е́сли", "Хотя́", "Поэ́тому"], "Si hace calor, vamos a ir a la playa."],
  ["_____ я пригото́вил за́втрак, пото́м позвони́л ма́ме.", "Снача́ла", ["Снача́ла", "Наконе́ц", "Хотя́"], "Primero preparé el desayuno, después llamé a mamá."],
  ["Мы до́лго иска́ли кафе́ и _____ нашли́.", "наконе́ц", ["наконе́ц", "снача́ла", "е́сли"], "Buscamos mucho un bar y por fin lo encontramos."],
  ["Я пообе́дал. _____ я отдыха́л.", "По́сле э́того", ["По́сле э́того", "Хотя́", "Потому́ что"], "Almorcé. Después de eso, descansé."],
  ["Э́то до́рого, _____ о́чень удо́бно.", "но", ["но", "поэ́тому", "е́сли"], "Es caro, pero muy cómodo."],
  ["Пого́да была́ плоха́я, _____ мы бы́ли до́ма.", "поэ́тому", ["поэ́тому", "хотя́", "когда́"], "El tiempo estaba feo, por eso estuvimos en casa."]
];
const U13_RELATO = { id: "more", titulo: "Пое́здка на мо́ре", lineas: [
  ["В суббо́ту я е́здил на мо́ре с дру́гом.", "El sábado fui al mar con un amigo."], ["Снача́ла мы до́лго гуля́ли.", "Primero paseamos mucho tiempo."],
  ["Пото́м мы пообе́дали в ма́леньком рестора́не.", "Después almorzamos en un restaurante chico."], ["Бы́ло хо́лодно, но нам бы́ло ве́село.", "Hacía frío, pero nos divertimos."],
  ["По́сле э́того мы пое́хали домо́й.", "Después de eso volvimos a casa."], ["Мне о́чень понра́вилась э́та пое́здка.", "Me gustó mucho ese viaje."]],
  preguntas: [["¿Con quién fue al mar?", "с дру́гом", ["с сестро́й", "с ма́мой"]], ["¿Qué hicieron primero?", "до́лго гуля́ли", ["пообе́дали", "пое́хали домо́й"]], ["¿Dónde almorzaron?", "в ма́леньком рестора́не", ["в кафе́", "до́ма"]]],
  vf: [["Бы́ло тепло́.", false], ["Им бы́ло ве́село.", true], ["Ему́ не понра́вилась пое́здка.", false]] };
/* Módulo 5: opinión — [frase con ___, palabra, opciones, español] */
const U13_OPINA = [
  ["Мне нра́вится э́тот фильм, _____ он интере́сный.", "потому́ что", ["потому́ что", "поэ́тому", "хотя́"], "Me gusta esta película porque es interesante."],
  ["Э́та кварти́ра сли́шком дорога́я, _____ я её не куплю́.", "поэ́тому", ["поэ́тому", "потому́ что", "е́сли"], "Este departamento es demasiado caro, por eso no lo voy a comprar."],
  ["Я _____, что э́то хоро́шая иде́я.", "ду́маю", ["ду́маю", "ка́жется", "по-мо́ему"], "Creo que es una buena idea."],
  ["Мне _____, что э́то удо́бно.", "ка́жется", ["ка́жется", "ду́маю", "счита́ю"], "Me parece que es cómodo."],
  ["_____, э́то сли́шком до́рого.", "По-мо́ему", ["По-мо́ему", "Я ду́маю", "Мне ка́жется что"], "Para mí, es demasiado caro."],
  ["Э́то до́рого, _____ о́чень удо́бно.", "хотя́", ["хотя́", "потому́ что", "поэ́тому"], "Es caro, aunque muy cómodo."],
  ["Я _____, что путеше́ствовать ва́жно.", "счита́ю", ["счита́ю", "ка́жется", "нра́вится"], "Considero que viajar es importante."],
  ["За́втра, _____, бу́дет тепло́.", "наве́рное", ["наве́рное", "потому́ что", "сли́шком"], "Mañana seguramente va a hacer calor."]
];
const U13_CORR_OPINA = [
  ["Мне ка́жусь, что э́то хоро́шая иде́я.", "ка́жусь", "ка́жется", "Siempre **мне ка́жется** («me parece»): no cambia."],
  ["Я ду́маю, что э́то сли́шком дорого́й.", "дорого́й", "до́рого", "«Es caro» en general: **до́рого** (sin terminación de adjetivo)."],
  ["По-мо́ему, э́то о́чень хоро́шая иде́и.", "иде́и", "иде́я", "Una idea: **иде́я** (nominativo singular)."]
];

/* Módulo 6: textos del mundo real */
const U13_LECTURAS = [
  { id: "msj", titulo: "Mensaje", lineas: [
      ["Приве́т! Сего́дня я рабо́таю до шести́.", "¡Hola! Hoy trabajo hasta las seis."], ["Дава́й пойдём в кафе́ в семь часо́в?", "¿Vamos al bar a las siete?"],
      ["Кафе́ нахо́дится ря́дом с метро́.", "El bar queda al lado del metro."], ["Напиши́ мне, пожа́луйста! Ма́ша", "¡Escribime, por favor! Masha"]],
    preguntas: [["¿Hasta qué hora trabaja Masha hoy?", "до шести́", ["до семи́", "до пяти́"]], ["¿A qué hora propone ir al bar?", "в семь часо́в", ["в шесть часо́в", "в пять часо́в"]], ["¿Dónde queda el bar?", "ря́дом с метро́", ["в це́нтре", "до́ма"]]],
    vf: [["Ма́ша хо́чет пойти́ в кафе́.", true], ["Ма́ша сего́дня не рабо́тает.", false]] },
  { id: "anuncio", titulo: "Объявле́ние", lineas: [
      ["Кварти́ра нахо́дится ря́дом с метро́.", "El departamento queda al lado del metro."], ["В кварти́ре две ко́мнаты и больша́я ку́хня.", "Tiene dos habitaciones y una cocina grande."],
      ["Ря́дом есть парк и магази́ны.", "Cerca hay un parque y negocios."], ["Цена́: сто ты́сяч рубле́й в ме́сяц.", "Precio: cien mil rublos por mes."], ["Звони́те ве́чером.", "Llamen a la tarde-noche."]],
    preguntas: [["¿Cuántas habitaciones tiene?", "две ко́мнаты", ["три ко́мнаты", "одна́ ко́мната"]], ["¿Qué hay cerca?", "парк и магази́ны", ["мо́ре и пляж", "музе́й и теа́тр"]], ["¿Cuándo hay que llamar?", "ве́чером", ["у́тром", "днём"]]],
    vf: [["Ку́хня ма́ленькая.", false], ["Кварти́ра ря́дом с метро́.", true]] },
  { id: "horario", titulo: "Расписа́ние музе́я", lineas: [
      ["Музе́й рабо́тает с десяти́ до шести́.", "El museo abre de diez a seis."], ["В понеде́льник музе́й не рабо́тает.", "Los lunes el museo no abre."],
      ["Биле́т сто́ит сто рубле́й.", "La entrada cuesta cien rublos."], ["Для студе́нтов биле́т деше́вле.", "Para estudiantes, la entrada es más barata."]],
    preguntas: [["¿Qué día no abre el museo?", "В понеде́льник", ["В суббо́ту", "В воскресе́нье"]], ["¿Hasta qué hora abre?", "до шести́", ["до десяти́", "до семи́"]], ["¿Quién paga menos?", "Для студе́нтов", ["Для дете́й", "Для враче́й"]]],
    vf: [["В понеде́льник музе́й рабо́тает.", false], ["Для студе́нтов биле́т деше́вле.", true]] },
  { id: "resena", titulo: "Отзы́в о рестора́не", lineas: [
      ["Мне о́чень понра́вился э́тот рестора́н.", "Me gustó mucho este restaurante."], ["Еда́ вку́сная, но сли́шком дорога́я.", "La comida es rica, pero demasiado cara."],
      ["Официа́нты бы́ли о́чень хоро́шие.", "Los mozos fueron muy buenos."], ["Я сове́тую э́тот рестора́н, хотя́ он не дешёвый.", "Recomiendo este restaurante, aunque no es barato."]],
    preguntas: [["¿Qué no le gustó?", "сли́шком дорога́я", ["не вку́сная", "холо́дная"]], ["¿Cómo fueron los mozos?", "о́чень хоро́шие", ["плохи́е", "ру́сские"]], ["¿Recomienda el restaurante?", "Я сове́тую", ["Я не сове́тую", "Мне не понра́вился"]]],
    vf: [["Рестора́н дешёвый.", false], ["Еда́ вку́сная.", true]] },
  { id: "perfil", titulo: "Анке́та", lineas: [
      ["Меня́ зову́т Ива́н.", "Me llamo Iván."], ["Я инжене́р, рабо́таю в большо́м о́фисе.", "Soy ingeniero, trabajo en una oficina grande."],
      ["Ра́ньше я жил в Мадри́де, а сейча́с живу́ в Москве́.", "Antes vivía en Madrid y ahora vivo en Moscú."], ["В свобо́дное вре́мя я люблю́ чита́ть и гуля́ть в па́рке.", "En el tiempo libre me gusta leer y pasear en el parque."],
      ["Моя́ мечта́ — пое́хать в Аргенти́ну.", "Mi sueño es ir a la Argentina."]],
    preguntas: [["¿Dónde vivía antes Iván?", "в Мадри́де", ["в Москве́", "в Барсело́не"]], ["¿Qué hace en su tiempo libre?", "чита́ть и гуля́ть", ["рабо́тать", "гото́вить"]], ["¿Cuál es su sueño?", "пое́хать в Аргенти́ну", ["жить в Москве́", "рабо́тать инжене́ром"]]],
    vf: [["Ива́н сейча́с живёт в Мадри́де.", false], ["Ива́н инжене́р.", true]] }
];
/* Módulo 7: audio en cuatro niveles. Cada línea: [quién (m/f), ruso]; rate por nivel */
const U13_AUDIO = [
  { nivel: 1, rate: 0.7, titulo: "Nivel 1 · lento, una voz", lineas: [["f", "Приве́т! Меня́ зову́т О́льга."], ["f", "Я живу́ в Москве́."], ["f", "Я рабо́таю врачо́м."], ["f", "В свобо́дное вре́мя я люблю́ чита́ть."]],
    preguntas: [["¿Dónde vive Olga?", "в Москве́", ["в Мадри́де", "в Барсело́не"]], ["¿De qué trabaja?", "врачо́м", ["учи́телем", "инжене́ром"]]], vf: [["О́льга лю́бит чита́ть.", true]] },
  { nivel: 1, rate: 0.7, titulo: "Nivel 1 · lento, una voz", lineas: [["m", "Сего́дня суббо́та."], ["m", "Я не рабо́таю."], ["m", "У́тром я гуля́л в па́рке."], ["m", "Ве́чером я бу́ду смотре́ть фильм."]],
    preguntas: [["¿Qué día es?", "суббо́та", ["понеде́льник", "воскресе́нье"]], ["¿Qué va a hacer a la noche?", "смотре́ть фильм", ["гуля́ть в па́рке", "рабо́тать"]]], vf: [["Сего́дня он рабо́тает.", false]] },
  { nivel: 2, rate: 0.85, titulo: "Nivel 2 · conversación", lineas: [["m", "Что ты бу́дешь пить?"], ["f", "Ко́фе, пожа́луйста. А ты?"], ["m", "Я бу́ду чай."], ["f", "А что ты бу́дешь есть?"], ["m", "Наве́рное, суп."]],
    preguntas: [["¿Qué va a tomar ella?", "Ко́фе", ["Чай", "Во́ду"]], ["¿Qué va a comer él?", "суп", ["сала́т", "пи́ццу"]]], vf: [["Он бу́дет пить ко́фе.", false]] },
  { nivel: 2, rate: 0.85, titulo: "Nivel 2 · conversación", lineas: [["f", "Извини́те, где здесь метро́?"], ["m", "Иди́те пря́мо, пото́м напра́во."], ["f", "Э́то далеко́?"], ["m", "Нет, пять мину́т."]],
    preguntas: [["¿Qué busca ella?", "метро́", ["банк", "музе́й"]], ["¿Cuánto tarda?", "пять мину́т", ["два часа́", "де́сять мину́т"]]], vf: [["Метро́ далеко́.", false]] },
  { nivel: 3, rate: 0.9, titulo: "Nivel 3 · alguien cuenta algo", lineas: [["f", "Ле́том я е́здила в Москву́ с подру́гой."], ["f", "Снача́ла мы до́лго гуля́ли в це́нтре."], ["f", "Пото́м мы бы́ли в музе́е."], ["f", "Бы́ло тепло́ и о́чень интере́сно."], ["f", "Мне о́чень понра́вилась Москва́."]],
    preguntas: [["¿Con quién viajó?", "с подру́гой", ["с бра́том", "с ма́мой"]], ["¿Qué hicieron después de pasear?", "бы́ли в музе́е", ["пое́хали домо́й", "пообе́дали"]]], vf: [["Ей не понра́вилась Москва́.", false]] },
  { nivel: 3, rate: 0.9, titulo: "Nivel 3 · alguien cuenta algo", lineas: [["m", "Ра́ньше я жил в Мадри́де."], ["m", "Там я рабо́тал в ба́нке."], ["m", "Сейча́с я живу́ в Барсело́не и рабо́таю архите́ктором."], ["m", "Мне бо́льше нра́вится Барсело́на, потому́ что здесь мо́ре."]],
    preguntas: [["¿Dónde trabajaba antes?", "в ба́нке", ["в музе́е", "в о́фисе"]], ["¿Por qué prefiere Barcelona?", "здесь мо́ре", ["здесь тепло́", "здесь его́ семья́"]]], vf: [["Сейча́с он живёт в Мадри́де.", false]] },
  { nivel: 4, rate: 0.95, titulo: "Nivel 4 · lo que no se dice", lineas: [["f", "Пойдём в кино́ в суббо́ту?"], ["m", "В суббо́ту я рабо́таю. А в воскресе́нье?"], ["f", "Хорошо́, в воскресе́нье."], ["m", "Отли́чно. Встреча́емся у кино́ в шесть."]],
    preguntas: [["¿Qué día van a ir al cine?", "в воскресе́нье", ["в суббо́ту", "в понеде́льник"]], ["¿Por qué no van el sábado?", "он рабо́тает", ["она́ рабо́тает", "кино́ не рабо́тает"]]], vf: [["Они́ встреча́ются в шесть.", true]] },
  { nivel: 4, rate: 0.95, titulo: "Nivel 4 · lo que no se dice", lineas: [["m", "Ты уже́ обе́дала?"], ["f", "Нет, у меня́ не́ было вре́мени."], ["m", "Тогда́ пойдём в кафе́?"], ["f", "Дава́й! Я о́чень хочу́ есть."]],
    preguntas: [["¿Ella ya almorzó?", "Нет", ["Да", "Не зна́ет"]], ["¿Adónde van?", "в кафе́", ["домо́й", "в рестора́н"]]], vf: [["Она́ не хо́чет есть.", false]] }
];
/* Módulo 9: corrección — [frase con error, palabra mal, arreglo, explicación] */
const U13_CORR_TODO = [
  ["Вчера́ А́нна рабо́тал до́ма.", "рабо́тал", "рабо́тала", "А́нна es mujer: **рабо́тала**."], ["Пото́м она́ ходи́л в магази́н.", "ходи́л", "ходи́ла", "она́: **ходи́ла**."],
  ["Мы живём в большо́й го́роде.", "большо́й", "большо́м", "в + prepositivo, también el adjetivo: в **большо́м** го́роде."], ["Я звоню́ моя́ сестре́.", "моя́", "мое́й", "El posesivo va en dativo: **мое́й** сестре́."],
  ["За́втра я бу́ду прочита́ть кни́гу.", "прочита́ть", "чита́ть", "бу́ду + imperfectivo: бу́ду **чита́ть** (o прочита́ю, sin бу́ду)."], ["У меня́ два сестры́.", "два", "две", "Con femeninos: **две** сестры́."],
  ["Не позвони́ ему́!", "позвони́", "звони́", "Para prohibir, не + imperfectivo: не **звони́**."], ["Москва́ бо́льше, чем Барсело́не.", "Барсело́не", "Барсело́на", "Después de чем, la misma forma que X: чем **Барсело́на**."],
  ["Я гуля́ю с её.", "её", "ней", "Después de preposición, con н-: с **ней**."], ["Мне нра́вятся э́тот фильм.", "нра́вятся", "нра́вится", "Un solo фильм: **нра́вится**."],
  ["Ка́ждый день я прочита́л газе́ту.", "прочита́л", "чита́л", "ка́ждый день → imperfectivo: **чита́л**."], ["Я ду́маю о мой рабо́те.", "мой", "мое́й", "о + prepositivo: о **мое́й** рабо́те."]
];
/* ¿Suena natural? — [natural, calco del español, español] */
const U13_NATURAL = [
  ["Я из Аргенти́ны.", "Я есть из Аргенти́ны.", "Soy de la Argentina."], ["Я рабо́таю архите́ктором.", "Я рабо́таю как архите́ктор.", "Trabajo de arquitecto."],
  ["Ему́ пять лет.", "У него́ пять лет.", "Tiene cinco años."], ["Мне нра́вится э́тот фильм.", "Я нра́влюсь э́тот фильм.", "Me gusta esta película."],
  ["Я ду́маю, что э́то хоро́шая иде́я.", "Я ду́маю, что э́то есть хоро́шая иде́я.", "Creo que es una buena idea."], ["Я опозда́ю на пять мину́т.", "Я бу́ду по́здно пять мину́т.", "Voy a llegar cinco minutos tarde."],
  ["Я до́ма.", "Я есть до́ма.", "Estoy en casa."], ["Я живу́ здесь два го́да.", "Я живу́ здесь с два го́да.", "Vivo acá hace dos años."]
];

/* Palabras que la unidad presenta en cada módulo (verificador de palabras vistas) */
const U13_VISTAS = {
  1: "иде́я",
  3: "",
  4: "поэ́тому хотя́ ве́село понра́виться тепло́",
  6: "объявле́ние расписа́ние свобо́дный мечта́",
  7: "ле́то встреча́ться",
  8: "гора́ приро́да",
  11: "проводи́ть",
  5: "ка́жется сли́шком наве́рное мне́ние причи́на мо́жет"
};

const UNIDAD_13 = {
  id: 13,
  titulo: "Consolidación B1 y comunicación",
  tituloRu: "Закрепле́ние и обще́ние",
  objetivo: "Integrar todo lo aprendido: contar experiencias, explicar planes, opinar con razones, entender textos y conversaciones, escribir textos conectados y corregir tus propios errores.",
  tiempo: "35–45 horas",
  modulos: [
    { id: "u13m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "El mapa completo del ruso", resumen: "Todo lo que ya podés decir.",
      intro: "Llegaste hasta acá con doce unidades. Antes de seguir, mirá todo lo que ya podés decir en ruso.",
      secciones: [
        { titulo: "Quién soy y dónde vivo", texto: "Меня́ зову́т А́нна. («me llamo Ana»)\nЯ архите́ктор. («soy arquitecta»)\nЯ живу́ в Барсело́не. («vivo en Barcelona»)" },
        { titulo: "Qué hago, qué hice, qué voy a hacer", texto: "Сейча́с я рабо́таю в о́фисе. («ahora trabajo en la oficina»)\nВчера́ я рабо́тала до́ма. («ayer trabajé en casa»)\nЗа́втра я бу́ду отдыха́ть. («mañana voy a descansar»)\nЗа́втра я позвоню́ ма́ме. («mañana voy a llamar a mamá»)" },
        { titulo: "Qué tengo y qué no", texto: "У меня́ есть маши́на. («tengo auto»)\nУ меня́ нет вре́мени. («no tengo tiempo»)" },
        { titulo: "Con quién, a quién, de qué", texto: "Я гуля́ю с друзья́ми. («paseo con mis amigos»)\nЯ даю́ кни́гу А́нне. («le doy el libro a Ana»)\nМы говори́м о рабо́те. («hablamos del trabajo»)" },
        { titulo: "Qué me gusta y qué pienso", texto: "Мне нра́вится му́зыка. («me gusta la música»)\nМетро́ быстре́е, чем авто́бус. («el metro es más rápido que el colectivo»)\nПо-мо́ему, э́то хоро́шая иде́я. («para mí, es una buena idea»)" },
        { titulo: "Pedir y reaccionar", texto: "Позвони́ мне, пожа́луйста. («llamame, por favor»)\nПовтори́те, пожа́луйста. («repita, por favor»)\nДоговори́лись! («¡trato hecho!»)", destacado: "Con esto ya podés hablar de vos: tu pasado, tu presente y tu futuro." }
      ] },
    { id: "u13m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Los seis casos en contexto", resumen: "Por qué aparece cada caso.",
      intro: "Nada nuevo: ahora los casos trabajan juntos. En cada frase, preguntate por qué la palabra tiene esa forma.",
      secciones: [
        { titulo: "Un texto, seis casos", texto: "Я живу́ в Барсело́не с мои́м дру́гом. («vivo en Barcelona con mi amigo»)\nУ моего́ дру́га есть маши́на. («mi amigo tiene auto»)\nЯ ча́сто е́зжу с ним на маши́не. («seguido ando con él en auto»)\nПо́сле рабо́ты я звоню́ ему́. («después del trabajo lo llamo»)\nЯ о́чень люблю́ э́тот го́род. («quiero mucho esta ciudad»)" },
        { titulo: "La pregunta te dice el caso", texto: "кто? что? → nominativo: quién hace la acción\nкого́? что? → acusativo: lo que recibe la acción\nу кого́? чего́ нет? ско́лько? → genitivo\nкому́? → dativo: a quién\nс кем? кем? → instrumental: con quién, de qué trabaja\nгде? о ком? о чём? → prepositivo: dónde, de qué", destacado: "¿Por qué tiene esa forma? Por la preposición o por el verbo." },
        { titulo: "En plural, lo mismo", texto: "Я помога́ю студе́нтам. («ayudo a los estudiantes»)\nМы гуля́ем с детьми́. («paseamos con los chicos»)\nВ го́роде мно́го музе́ев. («en la ciudad hay muchos museos»)\nЯ ду́маю о друзья́х. («pienso en los amigos»)", ojo: "El módulo Casos sigue siendo la referencia completa: si dudás de una forma, tocá la palabra." }
      ] },
    { id: "u13m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Pasado, presente y futuro", resumen: "Вчера́, сейча́с, за́втра. Ра́ньше, сейча́с, ско́ро.",
      intro: "Los tres tiempos juntos, con el aspecto. Lo que importa ahora es elegir bien y combinarlos en un mismo texto.",
      secciones: [
        { titulo: "Tres tiempos", texto: "Вчера́ я был до́ма. («ayer estuve en casa»)\nСего́дня я рабо́таю в о́фисе. («hoy trabajo en la oficina»)\nЗа́втра я бу́ду отдыха́ть. («mañana voy a descansar»)" },
        { titulo: "Antes, ahora, pronto", texto: "Ра́ньше я жил в Буэ́нос-А́йресе. («antes vivía en Buenos Aires»)\nСейча́с я живу́ в Барсело́не. («ahora vivo en Barcelona»)\nСко́ро я пое́ду в Москву́. («pronto voy a ir a Moscú»)" },
        { titulo: "El aspecto en los tres tiempos", texto: "pasado: чита́л (proceso) / прочита́л (resultado)\npresente: solo el imperfectivo: чита́ю\nfuturo: бу́ду чита́ть (proceso) / прочита́ю (resultado)", destacado: "El perfectivo no tiene presente." },
        { titulo: "Ojo con быть", texto: "En presente no se dice: Я до́ма. («estoy en casa»)\nEn pasado y en futuro, sí: Я был до́ма. Я бу́ду до́ма.", ojo: "El pasado de быть cambia con el género: он был, она́ была́, они́ бы́ли." }
      ] },
    { id: "u13m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Contar una experiencia", resumen: "Снача́ла, пото́м, поэ́тому, хотя́…",
      intro: "Para contar algo que te pasó, sin que nadie te dé cada frase, necesitás conectar las ideas.",
      secciones: [
        { titulo: "Para ordenar", texto: "снача́ла (primero)\nпото́м (después)\nпо́сле э́того (después de eso)\nнаконе́ц (por fin, al final)" },
        { titulo: "Para explicar", texto: "потому́ что (porque)\nпоэ́тому (por eso)\nно (pero)\nхотя́ (aunque)\nЯ не позвони́л, потому́ что у меня́ не́ было вре́мени. («no llamé porque no tenía tiempo»)\nУ меня́ не́ было вре́мени, поэ́тому я не позвони́л. («no tenía tiempo, por eso no llamé»)", truco: "потому́ что da la causa; поэ́тому, la consecuencia." },
        { titulo: "Cuándo y si", texto: "Когда́ я жил в Мадри́де, я мно́го гуля́л. («cuando vivía en Madrid, paseaba mucho»)\nЕ́сли бу́дет тепло́, мы пойдём на пляж. («si hace calor, vamos a ir a la playa»)", ojo: "Con е́сли y когда́ hablando del futuro, en ruso las dos partes van en futuro: е́сли бу́дет тепло́ («si hace calor»)." },
        { titulo: "Un relato", texto: "В суббо́ту я е́здил на мо́ре с дру́гом.\nСнача́ла мы до́лго гуля́ли.\nПото́м мы пообе́дали в ма́леньком рестора́не.\nБы́ло хо́лодно, но нам бы́ло ве́село.\nПо́сле э́того мы пое́хали домо́й.\nМне о́чень понра́вилась э́та пое́здка.\n(«El sábado fui al mar con un amigo. Primero paseamos mucho. Después almorzamos en un restaurante chico. Hacía frío, pero nos divertimos. Después de eso volvimos a casa. Me gustó mucho ese viaje.»)", ojo: "понра́виться es el perfectivo de нра́виться: мне понра́вилась пое́здка («me gustó el viaje»), una experiencia terminada." }
      ] },
    { id: "u13m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Opinar y justificar", resumen: "Я ду́маю, что… потому́ что…",
      intro: "Uno de los saltos de B1: no solo decir qué te gusta, sino por qué.",
      secciones: [
        { titulo: "Dar una opinión", texto: "Я ду́маю, что э́то хоро́шая иде́я. («creo que es una buena idea»)\nЯ счита́ю, что путеше́ствовать ва́жно. («considero que viajar es importante»)\nМне ка́жется, что э́то удо́бно. («me parece que es cómodo»)\nПо-мо́ему, э́то сли́шком до́рого. («para mí, es demasiado caro»)", ojo: "Antes de что va coma: Я ду́маю, что…" },
        { titulo: "Justificar", texto: "Мне нра́вится э́тот фильм, потому́ что он интере́сный. («me gusta esta película porque es interesante»)\nЭ́та кварти́ра сли́шком дорога́я, поэ́тому я её не куплю́. («este departamento es demasiado caro, por eso no lo voy a comprar»)" },
        { titulo: "Dos razones o una comparación", texto: "Мне нра́вится жить в Барсело́не, потому́ что здесь тепло́ и мно́го интере́сных мест. («me gusta vivir en Barcelona porque acá hace calor y hay muchos lugares interesantes»)\nПо-мо́ему, метро́ лу́чше, чем такси́: оно́ быстре́е и деше́вле. («para mí, el metro es mejor que el taxi: es más rápido y más barato»)" },
        { titulo: "Matizar y preguntar", texto: "наве́рное (seguramente)\nмо́жет быть (quizás)\nА что ты ду́маешь? («¿y vos qué pensás?»)\nКак ты счита́ешь? («¿qué opinás?»)", destacado: "opinión + razón: я ду́маю, что… потому́ что…" }
      ] },
    { id: "u13m6", n: 6, tipo: "lectura", titulo: "Textos del mundo real", resumen: "Mensaje, anuncio, horario, reseña, perfil.",
      intro: "Textos como los que vas a encontrar: un mensaje, un anuncio, un horario, una reseña y un perfil. No hace falta entender cada palabra: buscá la información que te piden." },
    { id: "u13m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Comprensión auditiva", resumen: "Cuatro niveles, dos voces.",
      intro: "Cuatro niveles: del audio lento con una voz a la conversación natural con dos voces. Escuchá todas las veces que quieras; el texto queda detrás de «Mostrar el texto».",
      secciones: [
        { titulo: "Los cuatro niveles", texto: "Nivel 1: lento, una voz, frases cortas.\nNivel 2: una conversación cotidiana.\nNivel 3: alguien cuenta algo que le pasó.\nNivel 4: hay que entender lo que no se dice del todo." },
        { titulo: "Cómo escuchar", texto: "Primero escuchá todo, sin parar, y quedate con la idea general.\nDespués leé la pregunta y volvé a escuchar buscando ese dato.\nRecién al final, si hace falta, mirá el texto.", destacado: "Idea general → dato → texto" }
      ] },
    { id: "u13m8", n: 8, tipo: "leccion", nPractica: 6, titulo: "Conversaciones B1", resumen: "Responder y seguir la charla.",
      intro: "En la Unidad 11 resolvías una situación. Ahora se trata de mantener una conversación: contestar, agregar algo y devolver la pregunta.",
      secciones: [
        { titulo: "Contestar y devolver", texto: "— Где ты живёшь? («¿dónde vivís?»)\n— Я живу́ в Барсело́не. А ты? («vivo en Barcelona, ¿y vos?»)\n— Тебе́ нра́вится твой го́род? («¿te gusta tu ciudad?»)\n— Да, о́чень, потому́ что здесь мо́ре. А тебе́? («sí, mucho, porque acá está el mar, ¿y a vos?»)", destacado: "respuesta + razón + А ты?" },
        { titulo: "Para devolver la pregunta", texto: "А ты? («¿y vos?»)\nА у тебя́? («¿y vos tenés…?»)\nА тебе́? («¿y a vos?»)\nА что ты ду́маешь? («¿y vos qué pensás?»)", ojo: "La pregunta de vuelta cambia de caso como el pronombre: Мне нра́вится… А тебе́? / У меня́ есть… А у тебя́?" },
        { titulo: "Para ganar tiempo", texto: "Ну… («bueno…»)\nДа́же не зна́ю. («no sé, la verdad»)\nХоро́ший вопро́с! («¡buena pregunta!»)" }
      ] },
    { id: "u13m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Corrección y autonomía", resumen: "Encontrar el error. ¿Suena natural?",
      intro: "Ahora la que corrige sos vos: encontrá el error y arreglalo. Y además, preguntate: ¿así lo diría un ruso?",
      secciones: [
        { titulo: "Los errores más comunes", texto: "El género del pasado: А́нна рабо́тала.\nEl caso después de la preposición: в большо́м го́роде.\nEl posesivo en el mismo caso: мое́й сестре́.\nбу́ду + imperfectivo: бу́ду чита́ть.\nдве con femeninos: две сестры́.\nс ней, с ним: la н- después de preposición." },
        { titulo: "¿Suena natural?", texto: "Algunas frases son correctas palabra por palabra, pero un ruso no las diría: son calcos del español.\nЯ рабо́таю архите́ктором. (no «как архите́ктор»)\nЕму́ пять лет. (no «у него́ пять лет»)\nЯ до́ма. (no «я есть до́ма»: en presente no va есть)", destacado: "No solo «¿está bien?», sino «¿cómo lo diría una persona?»" }
      ] },
    { id: "u13m10", n: 10, tipo: "taller", titulo: "Taller de escritura", resumen: "Cinco textos, en cuatro pasos.",
      intro: "Escribir bien es un proceso: planificar, escribir, revisar y reescribir. Elegí un texto y seguí los cuatro pasos. Las dos versiones quedan guardadas, así ves cuánto mejoró." },
    { id: "u13m11", n: 11, tipo: "proyecto6", titulo: "Proyecto: Моя́ жизнь на ру́сском", resumen: "Tu portfolio en ruso, en seis partes.",
      intro: "Un retrato tuyo en ruso, en seis partes: quién sos, tu vida, tu pasado, tu futuro, tu opinión y una conversación final sin respuestas fijas. Podés hacerlas en el orden que quieras y volver cuando quieras: todo queda guardado." },
    { id: "u13m12", n: 12, tipo: "examen", titulo: "Evaluación", resumen: "Casos, tiempos, conectores, lectura, audio, corrección y respuesta libre.",
      intro: "Treinta y cinco ejercicios en ocho partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Casos en contexto", tipos: ["caso", "motivo", "forma"], n: 5 },
        { nombre: "Tiempos", tipos: ["tiempo"], n: 4 },
        { nombre: "Conectores y opinión", tipos: ["conector", "opinion"], n: 5 },
        { nombre: "Lectura", tipos: ["lectura", "lectura-vf"], n: 5 },
        { nombre: "Comprensión auditiva", tipos: ["audio", "audio-vf"], n: 4 },
        { nombre: "Corrección", tipos: ["corregir", "natural"], n: 5 },
        { nombre: "Respuesta libre", tipos: ["situacion", "conversacion"], n: 4 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};

/* Módulo 8: conversaciones B1 por turnos (responder y seguir la charla) */
const U13_PREG = { es: "una pregunta de vuelta", pregunta: true, formas: ["а ты", "а у тебя́", "а тебе́", "а вы", "а что ты"] };
function U13_CONVERS() {
  if (U13_CONVERS.cache) return U13_CONVERS.cache;
  const E = u13E, OPIN = "я ду́маю|я счита́ю|мне ка́жется|по-мо́ему|мне нра́вится|мне не нра́вится";
  const T = (quien, genero, titulo, chat, pasos) => ({ quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], es: p[1], tarea: p[2], sit: { necesita: p[3], modelos: [p[4]] }, pista: p[5] || "" })) });
  return (U13_CONVERS.cache = [
    T("Ма́ша", "f", "Charla con Masha: la ciudad", false, [
      ["Приве́т! Где ты живёшь?", "¡Hola! ¿Dónde vivís?", "Respondé y devolvele la pregunta.", [E("dónde vivís", "живу́ в|~живу́"), U13_PREG], "Я живу́ в Барсело́не. А ты?", "Я живу́ в… А ты?"],
      ["Я живу́ в Москве́. Тебе́ нра́вится твой го́род?", "Vivo en Moscú. ¿Te gusta tu ciudad?", "Respondé con una razón.", [E("sí o no", "да|нет|нра́вится|о́чень"), E("una razón", "потому́ что|поэ́тому|здесь")], "Да, о́чень, потому́ что здесь мо́ре.", "Да, … потому́ что…"],
      ["А где ты жил ра́ньше?", "¿Y dónde vivías antes?", "Contestá en pasado y devolvele la pregunta.", [E("antes", "", U13_PASADO_RX, U13_PASADO), U13_PREG], "Ра́ньше я жил в Мадри́де. А ты?", "Ра́ньше я жил(а) в…"],
      ["Я всегда́ жила́ в Москве́. Что тебе́ бо́льше нра́вится: Мадри́д и́ли Барсело́на?", "Siempre viví en Moscú. ¿Qué te gusta más: Madrid o Barcelona?", "Compará y explicá por qué.", [E("tu preferencia", "бо́льше|лу́чше|~нра́вится"), E("una razón", "потому́ что|чем|поэ́тому")], "Мне бо́льше нра́вится Барсело́на, потому́ что здесь мо́ре.", "Мне бо́льше нра́вится…"]]),
    T("Ива́н", "m", "Charla con Iván: el sábado", false, [
      ["Что ты де́лал в суббо́ту?", "¿Qué hiciste el sábado?", "Contá dos cosas, en orden.", [E("primero / después", "снача́ла|пото́м"), E("en pasado", "", U13_PASADO_RX, U13_PASADO)], "Снача́ла я до́лго спал, пото́м гуля́л с друзья́ми.", "Снача́ла… пото́м…"],
      ["А где вы гуля́ли?", "¿Y dónde pasearon?", "Decí dónde y preguntale qué hizo él.", [E("dónde", "в па́рке|в це́нтре|на пля́же|~в|~на"), U13_PREG], "В па́рке. А ты что де́лал?", "В… А ты?"],
      ["Я был до́ма и смотре́л фильм. Ты лю́бишь кино́?", "Estuve en casa y vi una película. ¿Te gusta el cine?", "Respondé y explicá por qué.", [E("tu respuesta", "да|нет|люблю́|не люблю́"), E("una razón", "потому́ что|поэ́тому|хотя́")], "Да, люблю́, потому́ что э́то интере́сно.", "Да, … потому́ что…"]]),
    T("А́нна", "f", "Chat con Ana: planes", true, [
      ["Каки́е у тебя́ пла́ны на ле́то?", "¿Qué planes tenés para el verano?", "Contá un plan y devolvele la pregunta.", [E("un plan", "бу́ду|пое́ду|пойду́|хочу́"), U13_PREG], "Ле́том я пое́ду на мо́ре. А у тебя́?", "Ле́том я… А у тебя́?"],
      ["Я хочу́ пое́хать в го́ры. Как ты ду́маешь, э́то хоро́шая иде́я?", "Quiero ir a la montaña. ¿Qué te parece, es una buena idea?", "Opiná con una razón.", [E("tu opinión", OPIN + "|да|коне́чно"), E("una razón", "потому́ что|поэ́тому|хотя́")], "Я ду́маю, что э́то хоро́шая иде́я, потому́ что там краси́вая приро́да.", "Я ду́маю, что… потому́ что…"],
      ["Хо́чешь пое́хать со мной?", "¿Querés venir conmigo?", "Aceptá y proponé cuándo.", [E("aceptar", "да|коне́чно|дава́й|хорошо́|с удово́льствием"), E("cuándo", "в ию́ле|в а́вгусте|ле́том|в суббо́ту|за́втра|~в")], "Коне́чно! Дава́й в ию́ле.", "Коне́чно! Дава́й в…"]])
  ]);
}

/* ── Detección por las formas de Casos y Verbos (taller y proyecto) ── */
const U13_DET = (function () {
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*/).map(x => x.trim()).filter(x => pal(x).length >= 1);
  const igual = (lista, k) => (lista || []).some(f => K(f) === k);
  const verbo = (w, fn) => info(w).some(x => { const v = verboById(x[0]); return v && fn(v, K(w)); });
  const pasado = w => verbo(w, (v, k) => v.pasado && igual(Object.values(v.pasado), k));
  const presente = w => verbo(w, (v, k) => v.presente && igual(v.presente, k));
  const BUDU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
  const futuro = w => BUDU.indexOf(K(w)) >= 0 || verbo(w, (v, k) => v.futuro && !v.presente && igual(v.futuro, k));
  const adjetivo = w => info(w).some(x => { const cz = casosById(x[0]); return cz && cz.tipo === "adjetivo"; });
  const cuenta = (t, fn) => pal(t).filter(fn).length;
  const n = t => " " + t.toLowerCase().replace(/\u0301/g, "").replace(/ё/g, "е").replace(/[.,!?;:«»—-]/g, " ").replace(/\s+/g, " ") + " ";
  const tiene = (t, lista) => lista.filter(x => n(t).indexOf(" " + x + " ") >= 0).length;
  const CONECT = ["сначала", "потом", "после этого", "наконец", "поэтому", "потому что", "но", "хотя", "когда", "если"];
  const OPIN = ["я думаю", "я считаю", "мне кажется", "по-моему", "по моему"];
  const RAZON = ["потому что", "поэтому", "хотя"];
  const COMP = () => { const out = []; Object.values(CASOS).forEach(d => { if (d.comp) out.push(K(d.comp)); }); return out.concat(["чем", "самый", "самая", "самое", "самые"]); };
  const palabras = t => pal(t).length;
  return { pal, frases, pasado, presente, futuro, adjetivo, cuenta, tiene, CONECT, OPIN, RAZON, COMP, palabras, n };
})();
const U13_R = {
  frases: (a, b) => ({ txt: "Entre " + a + " y " + b + " frases", fn: t => { const k = U13_DET.frases(t).length; return k >= a && k <= b; } }),
  palabras: (a, b) => ({ txt: "Entre " + a + " y " + b + " palabras", fn: t => { const k = U13_DET.palabras(t); return k >= a && k <= b; } }),
  pasado: k => ({ txt: "Al menos " + k + " verbos en pasado", fn: t => U13_DET.cuenta(t, U13_DET.pasado) >= k }),
  presente: k => ({ txt: "Al menos " + k + " verbos en presente", fn: t => U13_DET.cuenta(t, U13_DET.presente) >= k }),
  futuro: k => ({ txt: "Al menos " + k + (k > 1 ? " formas" : " forma") + " de futuro (бу́ду…, позвоню́…)", fn: t => U13_DET.cuenta(t, U13_DET.futuro) >= k }),
  conect: k => ({ txt: "Al menos " + k + " conectores (снача́ла, пото́м, поэ́тому, хотя́…)", fn: t => U13_DET.tiene(t, U13_DET.CONECT) >= k }),
  opinion: () => ({ txt: "Una opinión (я ду́маю, что… / мне ка́жется… / по-мо́ему…)", fn: t => U13_DET.tiene(t, U13_DET.OPIN) >= 1 }),
  razones: k => ({ txt: k > 1 ? "Al menos " + k + " razones (потому́ что, поэ́тому…)" : "Una razón (потому́ что, поэ́тому…)", fn: t => U13_DET.tiene(t, U13_DET.RAZON) + (U13_DET.n(t).split(" потому что ").length - 2 > 0 ? U13_DET.n(t).split(" потому что ").length - 2 : 0) >= k }),
  comparacion: () => ({ txt: "Una comparación (бо́льше, лу́чше, чем, са́мый…)", fn: t => { const C = U13_DET.COMP(); return U13_DET.pal(t).some(w => C.indexOf(azFormaClave(w)) >= 0); } }),
  adjetivos: k => ({ txt: "Al menos " + k + " adjetivos", fn: t => U13_DET.cuenta(t, U13_DET.adjetivo) >= k }),
  pregunta: () => ({ txt: "Una pregunta", fn: t => /\?/.test(t) }),
  palabra: (txt, lista) => ({ txt, fn: t => U13_DET.tiene(t, lista) >= 1 })
};
/* Módulo 10: los cinco textos del taller */
function U13_TALLER() {
  if (U13_TALLER.cache) return U13_TALLER.cache;
  const R = U13_R;
  return (U13_TALLER.cache = [
    { id: "mensaje", emoji: "💬", titulo: "Mensaje a un amigo", formato: "Mensaje informal", palabras: [80, 100],
      consigna: "Escribile a un amigo: proponé un plan para el fin de semana, decí cuándo y dónde, y preguntale qué le parece.",
      ideas: ["¿Qué plan proponés? (кино́, кафе́, парк, мо́ре…)", "¿Cuándo y dónde se encuentran?", "¿Por qué es una buena idea?", "¿Cómo saludás y cómo te despedís? (Приве́т! … Пока́!)"],
      requisitos: [R.palabras(80, 100), R.palabra("Un saludo y una despedida (приве́т… пока́ / до встре́чи)", ["пока", "до встречи", "до субботы", "до завтра", "целую", "обнимаю"]), R.palabra("Una propuesta (дава́й, хо́чешь…?, мо́жет быть…)", ["давай", "хочешь", "может быть", "пойдем", "поедем"]), R.razones(1), R.pregunta()] },
    { id: "relato", emoji: "📖", titulo: "Relato: un fin de semana", formato: "Relato", palabras: [100, 120],
      consigna: "Contá un fin de semana que recuerdes: qué hiciste, en qué orden, con quién y cómo te fue.",
      ideas: ["¿Dónde estuviste y con quién?", "¿Qué hiciste primero, después y al final?", "¿Pasó algo inesperado?", "¿Te gustó? ¿Por qué? (мне понра́вилось…)"],
      requisitos: [R.palabras(100, 120), R.pasado(6), R.conect(3), R.palabra("Cómo te fue (мне понра́вилось, бы́ло ве́село…)", ["понравилось", "понравился", "понравилась", "было весело", "было интересно", "было хорошо", "было скучно"])] },
    { id: "descripcion", emoji: "🏙️", titulo: "Descripción: mi ciudad", formato: "Descripción", palabras: [100, 120],
      consigna: "Describí tu ciudad (o tu barrio): cómo es, qué hay, cómo es la gente y el clima, y qué te gusta más.",
      ideas: ["¿Es grande o chica? ¿Antigua o moderna?", "¿Qué hay? (музе́и, па́рки, мо́ре, рестора́ны…)", "¿Cómo es el clima en verano y en invierno? (ле́том, зимо́й)", "¿Qué te gusta más? ¿Qué no?"],
      requisitos: [R.palabras(100, 120), R.adjetivos(5), R.comparacion(), R.palabra("Una estación (ле́том, зимо́й, весно́й, о́сенью)", ["летом", "зимой", "весной", "осенью"])] },
    { id: "opinion", emoji: "💭", titulo: "Opinión: ¿ciudad grande o pueblo?", formato: "Opinión", palabras: [120, 150],
      consigna: "¿Es mejor vivir en una ciudad grande o en un lugar chico? Dá tu opinión, con al menos dos razones, y reconocé algo del otro lado (хотя́…).",
      ideas: ["¿Qué pensás? (я ду́маю, что… / по-мо́ему…)", "Primera razón (потому́ что…)", "Segunda razón (ещё / та́кже…)", "¿Qué tiene de bueno el otro lado? (хотя́…)", "Conclusión (поэ́тому…)"],
      requisitos: [R.palabras(120, 150), R.opinion(), R.razones(2), R.comparacion()] },
    { id: "experiencia", emoji: "✈️", titulo: "Experiencia: un viaje", formato: "Experiencia personal", palabras: [120, 150],
      consigna: "Contá un viaje: adónde fuiste, qué hiciste, qué te gustó, y adónde querés ir la próxima vez.",
      ideas: ["¿Adónde fuiste, cuándo y con quién?", "¿Qué hiciste? (en orden)", "¿Qué te gustó más? ¿Qué no?", "¿Qué impresión te dejó? (впечатле́ние)", "¿Adónde querés ir la próxima vez? (бу́ду…, хочу́…)"],
      requisitos: [R.palabras(120, 150), R.pasado(6), R.futuro(1), R.conect(3), R.palabra("Una impresión (мне понра́вилось, впечатле́ние…)", ["понравилось", "понравился", "понравилась", "понравились", "впечатление", "впечатления"])] }
  ]);
}
/* Módulo 11: proyecto en seis partes (la sexta es una conversación) */
function U13_PROYECTO() {
  if (U13_PROYECTO.cache) return U13_PROYECTO.cache;
  const R = U13_R;
  return (U13_PROYECTO.cache = [
    { id: "kto", titulo: "Кто я?", sub: "Quién soy", intro: "Presentate: nombre, de dónde sos, dónde vivís, de qué trabajás o qué estudiás, cómo sos.",
      requisitos: [R.frases(10, 15), R.palabra("Tu nombre (меня́ зову́т…)", ["меня зовут"]), R.palabra("Dónde vivís (я живу́ в…)", ["живу"]), R.adjetivos(2)] },
    { id: "zhizn", titulo: "Моя́ жизнь", sub: "Mi vida", intro: "Tu vida ahora: dónde vivís, qué hacés, las personas importantes, tus gustos y tus rutinas.",
      requisitos: [R.frases(15, 20), R.presente(5), R.palabra("Una rutina (ка́ждый день, обы́чно, ча́сто…)", ["каждый день", "обычно", "часто", "всегда", "иногда"]), R.palabra("Un gusto (мне нра́вится, я люблю́…)", ["нравится", "нравятся", "люблю"])] },
    { id: "proshloe", titulo: "Моё про́шлое", sub: "Mi pasado", intro: "Una experiencia o un recuerdo: qué pasó, en qué orden y qué sentiste.",
      requisitos: [R.frases(15, 20), R.pasado(8), R.conect(3)] },
    { id: "budushchee", titulo: "Моё бу́дущее", sub: "Mi futuro", intro: "Tus planes, deseos y proyectos: para el año que viene, y tu sueño (моя́ мечта́…).",
      requisitos: [R.frases(15, 20), R.futuro(4), R.palabra("Un deseo o un sueño (хочу́…, мечта́…)", ["хочу", "мечта", "мечтаю"])] },
    { id: "mnenie", titulo: "Моё мне́ние", sub: "Mi opinión", intro: "Elegí un tema (vivir en una ciudad, viajar, trabajar, aprender idiomas, la tecnología, la comida o el tiempo libre) y dá tu opinión con al menos dos razones.",
      requisitos: [R.palabras(120, 150), R.opinion(), R.razones(2)] },
    { id: "razgovor", titulo: "Разгово́р", sub: "Conversación final", intro: "Siete preguntas sin una respuesta fija: contestá como quieras, con lo que sabés." }
  ]);
}
/* La conversación final: cada respuesta se corrige por intención */
function U13_CONV_FINAL() {
  const E = u13E;
  return { quien: "А́нна", genero: "f", titulo: "Conversación final", chat: false, pasos: [
    ["Где ты живёшь?", "¿Dónde vivís?", "Contestá.", [E("dónde vivís", "живу́ в|~живу́")], "Я живу́ в Барсело́не."],
    ["Чем ты занима́ешься?", "¿A qué te dedicás?", "Contá de qué trabajás o qué estudiás.", [E("qué hacés", "рабо́таю|учу́сь|учу́|~я")], "Я рабо́таю архите́ктором."],
    ["Что ты де́лал в суббо́ту?", "¿Qué hiciste el sábado?", "Contá algo en pasado.", [E("en pasado", "", U13_PASADO_RX, U13_PASADO)], "В суббо́ту я гуля́л с друзья́ми."],
    ["Каки́е у тебя́ пла́ны на ле́то?", "¿Qué planes tenés para el verano?", "Contá un plan.", [E("un plan", "бу́ду|пое́ду|пойду́|хочу́|~ле́том")], "Ле́том я пое́ду на мо́ре."],
    ["Что тебе́ нра́вится де́лать в свобо́дное вре́мя?", "¿Qué te gusta hacer en tu tiempo libre?", "Contestá.", [E("lo que te gusta", "мне нра́вится|я люблю́|люблю́|нра́вится")], "Мне нра́вится чита́ть и гуля́ть."],
    ["С кем ты обы́чно прово́дишь свобо́дное вре́мя?", "¿Con quién pasás normalmente tu tiempo libre?", "Contestá: с + instrumental.", [E("con quién", "с друзья́ми|с семьёй|с бра́том|с сестро́й|с подру́гой|с дру́гом|~с")], "Обы́чно с друзья́ми и с семьёй."],
    ["Как ты ду́маешь, учи́ть языки́ ва́жно?", "¿Qué pensás, es importante aprender idiomas?", "Opiná con una razón.", [E("tu opinión", "я ду́маю|я счита́ю|мне ка́жется|по-мо́ему|да|коне́чно"), E("una razón", "потому́ что|поэ́тому")], "Я ду́маю, что э́то ва́жно, потому́ что мо́жно говори́ть с людьми́."]
  ].map(p => ({ bot: p[0], es: p[1], tarea: p[2], sit: { necesita: p[3], modelos: [p[4]] }, pista: "" })) };
}

function u13Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
function u13Fmt() {
  UNIDAD_13.modulos.forEach(m => {
    if (m.intro) m.intro = u13Palabras(m.intro);
    (m.secciones || []).forEach(s => ["texto", "destacado", "truco", "ojo"].forEach(k => { if (s[k]) s[k] = u13Palabras(s[k]); }));
  });
}
function unidad13Modulo(id) { return UNIDAD_13.modulos.find(m => m.id === id) || null; }

const U13_MEZCLA = { lectura: 2, "lectura-vf": 1, audio: 2, "audio-vf": 1, natural: 2, funcion: 1, caso: 2, motivo: 1, forma: 2, tiempo: 2, conector: 2, opinion: 2, corregir: 2, situacion: 1, "es-ru": 3, dictado: 1 };

function u13Datos() {
  if (u13Datos.cache) return u13Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const sust = ru => { const e = (porAc[sin(ru)] || []).find(x => { const cz = casosById(x.id); return cz && cz.sg; }), cz = e && casosById(e.id);
    return cz ? { id: e.id, ac: e.acento, g: e.gender, sg: cz.sg, pl: cz.pl } : null; };
  const verbo = ru => { const e = (porAc[sin(ru)] || []).find(x => x.posNormalized === "verbo"), v = e && verboById(e.id); return v ? Object.assign({ id: e.id, ac: e.acento }, v) : null; };
  return (u13Datos.cache = { sin, sust, verbo });
}

function ejerciciosUnidad13() {
  const { sin, sust } = u13Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla + 7; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a.filter(Boolean))];
  const sinP = t => t.replace(/[.,!?«»:—]/g, "").replace(/\s+/g, " ").trim();
  const trad = (id, modulo, es, ru, dict) => { const l = [].concat(ru);
    out.push({ id: "U13-tr-" + id, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo, grupo: "TR-" + id, items: [], oir: l[0], pide: "Escribí en ruso: «" + es + "»", audio: l[0], audioManual: true, esperadas: l, idioma: "ru", explicacion: l[0] });
    if (dict) out.push({ id: "U13-dc-" + id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo, grupo: "DC-" + id, items: [], pide: "Escuchá y escribí.", audio: l[0], esperadas: [l[0]], idioma: "ru", explicacion: l[0] + " — " + es }); };
  const situ = (id, modulo, o) => out.push({ id: "U13-s-" + id, tipo: o.tipo || "situacion", forma: "situacion", dificultad: o.dif || 3, modulo, grupo: "S-" + id, items: [],
    pide: o.pide, escena: o.escena, contexto: o.contexto, pista: o.pista, audio: o.audio, audioManual: true,
    sit: { necesita: o.nec, modelos: [o.modelo], orden: !!o.orden }, oir: o.modelo, explicacion: "Una forma de decirlo: **" + o.modelo + "**" });
  const corr = (id, modulo, [frase, mal, arreglo, expl]) => { const pals = sinP(frase).split(" ");
    out.push({ id: "U13-co-" + id, tipo: "corregir", forma: "corregir", dificultad: 3, modulo, grupo: "CO-" + id, items: [], pide: "Tocá la palabra que está mal y escribila bien.",
      palabras: pals, correcta: pals.indexOf(mal), arreglo, oir: frase.replace(mal, arreglo), explicacion: expl }); };
  const E = u13E;

  /* ── Módulo 1: el mapa ── */
  for (let g = 0; g < 4; g++) {
    const sel = U13_MAPA.slice(g * 4, g * 4 + 4);
    out.push({ id: "U13-mp-" + g, tipo: "funcion", forma: "emparejar", dificultad: 1, modulo: 1, grupo: "MP-" + g, items: [], pide: "Uní cada frase con lo que dice.",
      pares: sel.map(x => [x[1], x[0]]), explicacion: sel.map(x => x[1] + " — " + x[0]).join(" · ") });
  }
  U13_MAPA.forEach(([f, ru, es], j) => {
    if (j % 2 === 0) trad("mp-" + j, 1, es + (/рабо́тала|архите́ктор/.test(ru) ? " (sos mujer)" : ""), ru, j % 4 === 0);
    else { const otras = baraja(U13_MAPA.filter(x => x[0] !== f), j).slice(0, 2).map(x => x[0]);
      out.push({ id: "U13-mpf-" + j, tipo: "funcion", forma: "elegir", dificultad: 1, modulo: 1, grupo: "MPF-" + j, items: [], audio: ru, audioManual: true, oir: ru, pide: "¿Para qué sirve esta frase?", grande: ru,
        opciones: baraja([f].concat(otras), j), correcta: f, explicacion: ru + " — " + es }); }
  });
  situ("pres", 1, { pide: "Presentate: cómo te llamás, dónde vivís y de qué trabajás.", escena: "🙋", nec: [E("cómo te llamás", "меня́ зову́т|~я"), E("dónde vivís", "живу́ в|~живу́"), E("de qué trabajás", "рабо́таю|~я")],
    modelo: "Меня́ зову́т А́нна. Я живу́ в Барсело́не. Я рабо́таю архите́ктором." });
  situ("ayer", 1, { pide: "Contá qué hiciste ayer y qué vas a hacer mañana.", escena: "📅", nec: [E("ayer", "вчера́"), E("qué hiciste", "", U13_PASADO_RX, U13_PASADO), E("mañana", "за́втра")],
    modelo: "Вчера́ я рабо́тал. За́втра я бу́ду отдыха́ть." });

  /* ── Módulo 2: casos en contexto ── */
  U13_CASOS_TXT.forEach(([frase, w, k], j) => {
    const pals = sinP(frase).split(" ");
    out.push({ id: "U13-cs-" + j, tipo: "caso", forma: "tocar", dificultad: 2, modulo: 2, grupo: "CS-" + j, items: [], oir: frase, pide: "Tocá la palabra en " + U13_CASO_NOM[k] + ".",
      palabras: pals, correcta: pals.indexOf(w), explicacion: "**" + w + "**: " + U13_CASO_NOM[k] + ". " + U13_MOTIVO[k] + "." });
    const otras = baraja(Object.keys(U13_MOTIVO).filter(x => x !== k), j).slice(0, 3);
    out.push({ id: "U13-mo-" + j, tipo: "motivo", forma: "elegir", dificultad: 2, modulo: 2, grupo: "MO-" + j, items: [], oir: frase, pide: "¿Por qué «" + w + "» tiene esa forma?", grande: frase,
      opciones: baraja([k].concat(otras), j).map(x => U13_MOTIVO[x]), correcta: U13_MOTIVO[k], explicacion: "**" + w + "**: " + U13_CASO_NOM[k] + "." });
  });
  U13_FORMAS.forEach(([tpl, ru, caso, pl, es], j) => {
    const s = sust(ru); if (!s) return;
    const f = (pl ? s.pl : s.sg)[caso], fr = tpl.replace("{}", f);
    out.push({ id: "U13-fo-" + j, tipo: "forma", forma: j % 3 === 2 ? "escribir" : "elegir", dificultad: 2, modulo: 2, grupo: "FO-" + j, items: ["lex:" + s.id], oir: fr,
      pide: "Completá: «" + es + "»", grande: tpl.replace("{}", "_____") + "  (" + s.ac + ")", explicacion: fr,
      ...(j % 3 === 2 ? { audio: fr, audioManual: true, esperadas: [fr], idioma: "ru" } : { opciones: baraja(uniq([f].concat(pl ? [s.pl[0], s.pl[1], s.pl[2], s.pl[4], s.pl[5]] : [s.sg[0], s.sg[1], s.sg[2], s.sg[4], s.sg[5]])).slice(0, 4), j), correcta: f }) });
  });
  U13_CORR_CASOS.forEach((c, j) => corr("cs-" + j, 2, c));
  [["Я гуля́ю с дру́гом.", "Я гуля́ю с друзья́ми.", "Paseo con mis amigos."], ["Я помога́ю студе́нту.", "Я помога́ю студе́нтам.", "Ayudo a los estudiantes."], ["Мы ду́маем о ребёнке.", "Мы ду́маем о де́тях.", "Pensamos en los chicos."]].forEach(([a, b, es], j) =>
    out.push({ id: "U13-pl-" + j, tipo: "forma", forma: "escribir", dificultad: 3, modulo: 2, grupo: "PL-" + j, items: [], oir: b, pide: "Pasalo al plural: «" + es + "»", grande: a, audio: b, audioManual: true, esperadas: [b], idioma: "ru", explicacion: b }));
  trad("cs-a", 2, "Mi amigo tiene auto.", ["У моего́ дру́га есть маши́на.", "У дру́га есть маши́на."], true);
  trad("cs-b", 2, "Después del trabajo lo llamo.", "По́сле рабо́ты я звоню́ ему́.", false);

  /* ── Módulo 3: tiempos ── */
  const MARC = ["Вчера́", "Сейча́с", "За́втра"];
  U13_TIEMPOS.forEach(([pres, pas, fut, es, g], j) => {
    const quien = g === "m" ? " (sos hombre)" : g === "f" ? " (sos mujer)" : "";
    const aPas = j % 2 === 0, obj = aPas ? pas : fut;
    out.push({ id: "U13-ti-" + j, tipo: "tiempo", forma: "escribir", dificultad: 2, modulo: 3, grupo: "TI-" + j, items: [], oir: obj,
      pide: "Pasalo al " + (aPas ? "pasado" : "futuro") + (aPas ? quien : "") + ".", grande: pres, audio: obj, audioManual: true, esperadas: [obj], idioma: "ru", explicacion: obj });
    const k = j % 3, fr = [pas, pres, fut][k], base = fr.replace(/\.$/, "");
    out.push({ id: "U13-tm-" + j, tipo: "tiempo", forma: "elegir", dificultad: 1, modulo: 3, grupo: "TM-" + j, items: [], oir: MARC[k] + " " + base.charAt(0).toLowerCase() + base.slice(1) + ".",
      pide: "¿Qué palabra va?", grande: "_____ " + base.charAt(0).toLowerCase() + base.slice(1) + ".", opciones: MARC.slice(), correcta: MARC[k],
      explicacion: ["pasado → вчера́", "presente → сейча́с", "futuro → за́втра"][k] + "." });
  });
  U13_CORR_TIEMPOS.slice(0, 3).forEach((c, j) => corr("ti-" + j, 3, c));
  trad("ti-a", 3, "Antes vivía en Madrid y ahora vivo en Barcelona. (sos hombre)", ["Ра́ньше я жил в Мадри́де, а сейча́с я живу́ в Барсело́не.", "Ра́ньше я жил в Мадри́де, а сейча́с живу́ в Барсело́не.", "Ра́ньше я жил в Мадри́де и сейча́с я живу́ в Барсело́не."], true);
  trad("ti-b", 3, "Ayer estuve en casa. (sos mujer)", "Вчера́ я была́ до́ма.", true);
  trad("ti-c", 3, "Mañana voy a terminar el libro.", "За́втра я прочита́ю кни́гу.", false);
  trad("ti-d", 3, "Pronto voy a ir a Moscú.", "Ско́ро я пое́ду в Москву́.", true);
  situ("vida", 3, { pide: "Contá dónde vivías antes, dónde vivís ahora y qué vas a hacer pronto.", escena: "🧭", nec: [E("antes", "ра́ньше"), E("vivías", "", U13_PASADO_RX, U13_PASADO), E("ahora", "сейча́с"), E("pronto", "ско́ро|за́втра|бу́ду|бу́дем")],
    modelo: "Ра́ньше я жил в Мадри́де. Сейча́с я живу́ в Барсело́не. Ско́ро я пое́ду в Москву́." });

  /* ── Módulo 4: contar ── */
  U13_CONECT.forEach(([fr, ok, ops, es], j) => {
    const ru = fr.replace("_____", ok);
    out.push({ id: "U13-cn-" + j, tipo: "conector", forma: "elegir", dificultad: 2, modulo: 4, grupo: "CN-" + j, items: [], oir: ru, pide: "Completá: «" + es + "»", grande: fr, opciones: baraja(ops, j), correcta: ok, explicacion: ru });
    if (j % 3 === 0) trad("cn-" + j, 4, es + (/позвони́л|жил|пригото́вил|пообе́дал/.test(ru) ? " (sos hombre)" : ""), ru, j % 2 === 0);
  });
  const L = U13_RELATO, lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
  L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U13-rl-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 4, grupo: "RL-" + k, items: [], texto: lineas, pide: q,
    opciones: baraja([ok].concat(malas), k), correcta: ok, oir: todo, explicacion: (L.lineas.find(l => sin(l[0]).indexOf(sin(ok)) >= 0) || L.lineas[0]).join(" — ") }));
  L.vf.forEach(([af, v], k) => out.push({ id: "U13-rlv-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 4, grupo: "RLV-" + k, items: [], afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true,
    explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  situ("finde", 4, { pide: "Contá tu fin de semana en tres frases: снача́ла…, пото́м…, по́сле э́того (o наконе́ц)…", escena: "🗓️", orden: true,
    nec: [E("primero", "снача́ла"), E("después", "пото́м"), E("después de eso / al final", "по́сле э́того|наконе́ц"), E("en pasado", "", U13_PASADO_RX, U13_PASADO)],
    modelo: "Снача́ла я до́лго спал. Пото́м я пригото́вил за́втрак. По́сле э́того я гуля́л с дру́гом." });
  situ("por", 4, { pide: "Decí que no fuiste a trabajar y explicá por qué (con потому́ что o поэ́тому).", escena: "🏠",
    nec: [E("no trabajaste", "не рабо́тал|не рабо́тала|не был|не была́|~не"), E("la razón", "потому́ что|поэ́тому")], modelo: "Вчера́ я не рабо́тал, потому́ что был пра́здник." });

  /* ── Módulo 5: opinar ── */
  U13_OPINA.forEach(([fr, ok, ops, es], j) => {
    const ru = fr.replace("_____", ok);
    out.push({ id: "U13-op-" + j, tipo: "opinion", forma: "elegir", dificultad: 2, modulo: 5, grupo: "OP-" + j, items: [], oir: ru, pide: "Completá: «" + es + "»", grande: fr, opciones: baraja(ops, j), correcta: ok, explicacion: ru });
    if (j % 2 === 1) trad("op-" + j, 5, es, ru, j % 4 === 1);
  });
  U13_CORR_OPINA.forEach((c, j) => corr("op-" + j, 5, c));
  const OPIN = "я ду́маю|я счита́ю|мне ка́жется|по-мо́ему|мне нра́вится|мне не нра́вится|я люблю́";
  situ("ciudad", 5, { pide: "¿Te gusta vivir en tu ciudad? Dá tu opinión y una razón.", escena: "🏙️", nec: [E("tu opinión", OPIN), E("una razón", "потому́ что|поэ́тому")],
    modelo: "Мне нра́вится жить в Барсело́не, потому́ что здесь тепло́ и есть мо́ре." });
  situ("viajar", 5, { pide: "¿Es importante viajar? Opiná con я счита́ю, что… y una razón.", escena: "✈️", nec: [E("tu opinión", "я счита́ю|я ду́маю|мне ка́жется|по-мо́ему"), E("una razón", "потому́ что|поэ́тому")],
    modelo: "Я счита́ю, что путеше́ствовать ва́жно, потому́ что э́то интере́сно." });
  situ("transp", 5, { pide: "¿Qué es mejor, el metro o el taxi? Opiná con una comparación.", escena: "🚇", nec: [E("tu opinión", OPIN + "|лу́чше"), E("una comparación", "чем|быстре́е|деше́вле|доро́же|удо́бнее|лу́чше")],
    modelo: "По-мо́ему, метро́ лу́чше, чем такси́: оно́ быстре́е и деше́вле." });

  /* ── Módulo 6: textos del mundo real ── */
  U13_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U13-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 6, grupo: "LE-" + L.id + "-" + k, items: [],
      texto: lineas, pide: L.titulo + ". " + q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U13-lev-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 6, grupo: "LEV-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* ── Módulo 7: audio en cuatro niveles ── */
  U13_AUDIO.forEach((A, j) => {
    const dial = A.lineas.map(([g, t]) => ({ texto: t, genero: g, rate: A.rate })), lineas = A.lineas.map(l => l[1]);
    const nota = "Nivel " + A.nivel + ". ";
    A.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U13-au-" + j + "-" + k, tipo: "audio", forma: "elegir", dificultad: 1 + Math.ceil(A.nivel / 2), modulo: 7, grupo: "AU-" + j + "-" + k, items: [],
      audio: dial, audioManual: k > 0, texto: lineas, textoOculto: true, pide: nota + "Escuchá. " + q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: lineas.join(" ") }));
    A.vf.forEach(([af, v], k) => out.push({ id: "U13-auv-" + j + "-" + k, tipo: "audio-vf", forma: "vf", dificultad: 1 + Math.ceil(A.nivel / 2), modulo: 7, grupo: "AUV-" + j + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: dial, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + lineas.join(" ") }));
  });

  /* ── Módulo 8: conversaciones B1 ── */
  U13_CONVERS().forEach((T, j) => out.push({ id: "U13-cv-" + j, tipo: "dialogo", forma: "turnos", dificultad: 3, modulo: 8, grupo: "CV-" + j, items: [], pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
    explicacion: "Así podía quedar: " + T.pasos.map(p => p.sit.modelos[0]).join(" / ") }));
  U13_CONVERS().forEach((T, j) => T.pasos.forEach((st, k) => {
    if (!st.sit.necesita.some(e => e.pregunta)) return;
    situ("cvp-" + j + "-" + k, 8, { tipo: "conversacion", pide: st.tarea, contexto: [{ p: T.quien, ru: st.bot }], audio: st.bot, nec: st.sit.necesita, modelo: st.sit.modelos[0] });
  }));

  /* ── Módulo 9: corrección y autonomía ── */
  U13_CORR_TODO.forEach((c, j) => corr("todo-" + j, 9, c));
  U13_NATURAL.forEach(([ok, mal, es], j) => out.push({ id: "U13-nat-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, grupo: "NA-" + j, items: [], oir: ok,
    pide: "¿Cuál suena natural? «" + es + "»", opciones: baraja([ok, mal], j), correcta: ok, explicacion: "Así lo dice un ruso: **" + ok + "**" }));

  /* ── Módulo 11: la conversación final, como práctica ── */
  out.push({ id: "U13-final", tipo: "final", ampliacion: true, forma: "turnos", dificultad: 3, modulo: 11, grupo: "FIN", items: [], pide: "🗣️ Conversación final", turnos: U13_CONV_FINAL(),
    explicacion: "Así podía quedar: " + U13_CONV_FINAL().pasos.map(p => p.sit.modelos[0]).join(" / ") });

  out.forEach(e => { if (e.explicacion) e.explicacion = u13Palabras(e.explicacion); if (e.pide) e.pide = u13Palabras(e.pide); });
  return out;
}

window.UNIDAD_13 = UNIDAD_13;
window.unidad13Modulo = unidad13Modulo;
window.ejerciciosUnidad13 = ejerciciosUnidad13;
window.u13Datos = u13Datos;
window.U13_MEZCLA = U13_MEZCLA;
window.U13_TALLER = U13_TALLER;
window.U13_PROYECTO = U13_PROYECTO;
window.U13_CONV_FINAL = U13_CONV_FINAL;
u13Fmt();
