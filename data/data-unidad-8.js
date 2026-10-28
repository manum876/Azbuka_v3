/* ============================================================
   DATA-UNIDAD-8.JS — Unidad 8: Pasado y experiencias personales
   ------------------------------------------------------------
   Versión 11/10/2026 (profundización, aprobada por Manu). Contenido,
   vocabulario y banco de ejercicios.
   · Un solo pasado (рабо́тал = trabajé / trabajaba / estuve trabajando);
     -л / -ла / -ло / -ли, -ся / -сь, especiales (ел, шёл, мог) en la teoría.
   · El aspecto entra acá (módulos 7 y 8): proceso / resultado, 12 parejas
     (U8_PARES) y 6 más para el día (U8_PARES_MAS). Las preguntas
     («¿Qué hiciste?») pasan al módulo 5.
   · Vocabulario nuevo: 71 palabras del léxico + позавчера́ (CMR-06151), en
     grupos por módulo (U8_GRUPOS). Afuera: С кем? (instrumental),
     Мне понра́вилось (dativo); не́ было + genitivo.
   · «Fui» = ходи́л / е́здил (ida y vuelta); шёл = iba.
   · на про́шлой неде́ле, в про́шлом ме́сяце, в про́шлом году́: fórmulas.
   Formas del pasado de Verbos, nunca a mano.
   ============================================================ */

/* Verbos: "ruso": [español (infinitivo), pretérito (yo, tú, él/ella, nosotros, ellos/ustedes), imperfecto o null, tipo]
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
const U8_SUJ = [["Я", "", "m", 0, "hombre"], ["Я", "", "f", 0, "mujer"], ["Ты", "Tú", "m", 1, "a un hombre"], ["Ты", "Tú", "f", 1, "a una mujer"], ["Он", "Él", "m", 2], ["Она́", "Ella", "f", 2],
  ["Мы", "", "pl", 3], ["Вы", "Ustedes", "pl", 4], ["Они́", "Ellos", "pl", 4], ["Ива́н", "Iván", "m", 2], ["А́нна", "Ana", "f", 2], ["Ма́ша", "Masha", "f", 2], ["Ди́ма", "Dima", "m", 2],
  ["Ма́ма", "Mamá", "f", 2], ["Па́па", "Papá", "m", 2], ["Брат", "Mi hermano", "m", 2], ["Сестра́", "Mi hermana", "f", 2], ["Де́ти", "Los chicos", "pl", 4]];
/* Complementos para «ayer»: verbo → [ruso, español] */
const U8_COMP = {
  "рабо́тать": [["до́ма", "en casa"], ["в о́фисе", "en la oficina"]], "чита́ть": [["кни́гу", "un libro"], ["газе́ту", "el diario"]], "писа́ть": [["письмо́", "una carta"]],
  "смотре́ть": [["фильм", "una película"], ["телеви́зор", "televisión"]], "слу́шать": [["му́зыку", "música"]], "говори́ть": [["по-ру́сски", "en ruso"]],
  "изуча́ть": [["ру́сский", "ruso"]], "гуля́ть": [["в па́рке", "por el parque"]], "отдыха́ть": [["до́ма", "en casa"]], "гото́вить": [["у́жин", "la cena"], ["суп", "sopa"]],
  "покупа́ть": [["хлеб", "pan"], ["молоко́", "leche"]], "де́лать": [["рабо́ту", "el trabajo"]], "игра́ть": [["", ""]], "спать": [["", ""]], "пить": [["ко́фе", "café"], ["чай", "té"]], "есть": [["пи́ццу", "pizza"], ["суп", "sopa"]],
  "обе́дать": [["в рестора́не", "en el restaurante"], ["до́ма", "en casa"]], "у́жинать": [["до́ма", "en casa"], ["в кафе́", "en el café"]], "за́втракать": [["до́ма", "en casa"]],
  "ходи́ть": [["в магази́н", "al negocio"], ["в кино́", "al cine"], ["в парк", "al parque"]], "е́здить": [["в Москву́", "a Moscú"], ["в Мадри́д", "a Madrid"], ["в Пари́ж", "a París"]],
  "быть": [["в Москве́", "en Moscú"], ["в рестора́не", "en el restaurante"], ["на рабо́те", "en el trabajo"], ["до́ма", "en casa"], ["в Пари́же", "en París"]]
};
const U8_TIEMPO = [["вчера́", "ayer"], ["вчера́ у́тром", "ayer por la mañana"], ["вчера́ ве́чером", "ayer por la noche"], ["неда́вно", "hace poco"], ["на про́шлой неде́ле", "la semana pasada"],
  ["в про́шлом ме́сяце", "el mes pasado"], ["в про́шлом году́", "el año pasado"]];
const U8_CONECT = { "снача́ла": "primero", "пото́м": "después", "зате́м": "luego", "наконе́ц": "finalmente", "но": "pero", "потому́ что": "porque" };

/* Parejas de aspecto (11/10/2026, aprobado por Manu): [proceso, resultado, español] — formas de Verbos */
const U8_PARES = [["чита́ть", "прочита́ть", "leer"], ["писа́ть", "написа́ть", "escribir"], ["де́лать", "сде́лать", "hacer"], ["смотре́ть", "посмотре́ть", "mirar"],
  ["за́втракать", "поза́втракать", "desayunar"], ["обе́дать", "пообе́дать", "almorzar"], ["у́жинать", "поу́жинать", "cenar"], ["гото́вить", "пригото́вить", "preparar, cocinar"],
  ["покупа́ть", "купи́ть", "comprar"], ["встава́ть", "встать", "levantarse"], ["просыпа́ться", "просну́ться", "despertarse"], ["возвраща́ться", "верну́ться", "volver"]];
const U8_PARES_MAS = [["ложи́ться", "лечь", "acostarse"], ["умыва́ться", "умы́ться", "lavarse"], ["одева́ться", "оде́ться", "vestirse"], ["пить", "вы́пить", "tomar"],
  ["опа́здывать", "опозда́ть", "llegar tarde"], ["отдыха́ть", "отдохну́ть", "descansar"]];
/* Tabla de la página (módulo 4): cuándo pasó */
const U8_TIEMPO_TABLA = [["вчера́", "ayer"], ["позавчера́", "anteayer"], ["вчера́ ве́чером", "ayer por la noche"], ["неда́вно", "hace poco"], ["давно́", "hace mucho"],
  ["два дня наза́д", "hace dos días"], ["пять лет наза́д", "hace cinco años"], ["на про́шлой неде́ле", "la semana pasada"], ["в про́шлом ме́сяце", "el mes pasado"],
  ["в про́шлом году́", "el año pasado"], ["в про́шлую суббо́ту", "el sábado pasado"]];

/* Palabras nuevas de la unidad, por el módulo desde el que se ven (verificador y ejercicios) */
const U8_VISTAS = {
  1: "ра́ньше",
  4: "позавчера́ неда́вно давно́ когда́-то наза́д про́шлый до́лго недо́лго це́лый",
  6: "но интере́сно дождь снег ве́тер жа́рко прекра́сно ужа́сно краси́во тру́дно легко́ ве́село ску́чно",
  7: "встать просну́ться поза́втракать пообе́дать поу́жинать пригото́вить прочита́ть сде́лать написа́ть посмотре́ть купи́ть верну́ться наконе́ц",
  8: "потому́ лечь умы́ться оде́ться вы́пить опозда́ть отдохну́ть одна́жды вдруг случи́ться слу́чай уви́деть услы́шать узна́ть рассказа́ть расска́зывать реши́ть забы́ть потеря́ть получи́ть подари́ть показа́ть встре́тить уста́ть заболе́ть сфотографи́ровать",
  9: "впервы́е экску́рсия сувени́р чемода́н гора́ роди́ться вы́расти де́тство мо́лодость перее́хать око́нчить жени́ться вы́йти за́муж",
  10: "тогда́ по́мнить вспо́мнить"
};
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario */
const U8_GLOSA = {
  "ра́ньше": "antes", "тогда́": "en ese entonces", "неда́вно": "hace poco", "про́шлый": "pasado (anterior)", "интере́сно": "interesante (es interesante)", "наконе́ц": "por fin", "но": "pero",
  "позавчера́": "anteayer", "давно́": "hace mucho", "когда́-то": "en otro tiempo", "наза́д": "hace (tiempo)", "до́лго": "mucho tiempo", "недо́лго": "poco tiempo", "це́лый": "entero",
  "дождь": "lluvia", "снег": "nieve", "ве́тер": "viento", "жа́рко": "hace calor", "прекра́сно": "genial, muy bien", "ужа́сно": "horrible", "краси́во": "bonito", "тру́дно": "difícil", "легко́": "fácil",
  "ве́село": "divertido", "ску́чно": "aburrido",
  "встать": "levantarse (una vez)", "просну́ться": "despertarse (una vez)", "поза́втракать": "desayunar (y terminar)", "пообе́дать": "almorzar (y terminar)", "поу́жинать": "cenar (y terminar)",
  "пригото́вить": "preparar (y terminar)", "прочита́ть": "leer (hasta el final)", "сде́лать": "hacer (y terminar)", "написа́ть": "escribir (y terminar)", "посмотре́ть": "mirar (hasta el final)",
  "купи́ть": "comprar (una vez)", "верну́ться": "volver (una vez)",
  "лечь": "acostarse (una vez)", "умы́ться": "lavarse (una vez)", "оде́ться": "vestirse (una vez)", "вы́пить": "tomar (todo)", "опозда́ть": "llegar tarde (una vez)", "отдохну́ть": "descansar (un tiempo, y listo)",
  "одна́жды": "una vez, cierto día", "вдруг": "de repente", "случи́ться": "pasar, ocurrir", "слу́чай": "caso, suceso", "уви́деть": "ver (de pronto)", "услы́шать": "oír", "узна́ть": "enterarse",
  "рассказа́ть": "contar (todo)", "расска́зывать": "contar", "реши́ть": "decidir", "забы́ть": "olvidarse", "потеря́ть": "perder", "получи́ть": "recibir", "подари́ть": "regalar", "показа́ть": "mostrar",
  "встре́тить": "encontrarse con", "уста́ть": "cansarse", "заболе́ть": "enfermarse", "сфотографи́ровать": "sacar una foto",
  "впервы́е": "por primera vez", "экску́рсия": "excursión, visita guiada", "сувени́р": "recuerdo (souvenir)", "чемода́н": "maleta", "гора́": "montaña",
  "роди́ться": "nacer", "вы́расти": "crecer", "де́тство": "infancia", "мо́лодость": "juventud", "перее́хать": "mudarse", "око́нчить": "terminar (los estudios)", "жени́ться": "casarse (un hombre)",
  "вы́йти": "salir", "за́муж": "(casarse) una mujer", "по́мнить": "recordar, acordarse", "вспо́мнить": "acordarse (de golpe)"
};
/* Vocabulario nuevo (11/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página */
const U8_GRUPOS = [
  [4, "Cuándo pasó", "позавчера́ неда́вно давно́ когда́-то наза́д про́шлый до́лго недо́лго це́лый"],
  [6, "Cómo fue", "интере́сно жа́рко прекра́сно ужа́сно краси́во тру́дно легко́ ве́село ску́чно"],
  [6, "El tiempo", "дождь снег ве́тер"],
  [7, "Los verbos de resultado", "прочита́ть написа́ть сде́лать посмотре́ть поза́втракать пообе́дать поу́жинать пригото́вить купи́ть встать просну́ться верну́ться"],
  [8, "Más parejas para tu día", "лечь умы́ться оде́ться вы́пить опозда́ть отдохну́ть"],
  [8, "Lo que pasó", "одна́жды вдруг случи́ться слу́чай уви́деть услы́шать узна́ть рассказа́ть расска́зывать реши́ть потеря́ть получи́ть подари́ть показа́ть встре́тить уста́ть заболе́ть сфотографи́ровать"],
  [9, "Viajes y primeras veces", "впервы́е экску́рсия сувени́р чемода́н гора́"],
  [9, "Tu historia", "роди́ться вы́расти де́тство мо́лодость перее́хать око́нчить жени́ться вы́йти за́муж"],
  [10, "Recordar", "по́мнить вспо́мнить забы́ть"]
];

const U8_LECTURAS = [
  { id: "dia", titulo: "Вчера́", lineas: [
      ["Вчера́ я рабо́тал.", "Ayer trabajé."], ["У́тром я был до́ма.", "Por la mañana estuve en casa."], ["Днём я рабо́тал в о́фисе.", "Por la tarde trabajé en la oficina."],
      ["Ве́чером я ходи́л в магази́н.", "Por la noche fui al negocio."], ["Пото́м я гото́вил у́жин и смотре́л фильм.", "Después cociné la cena y miré una película."]],
    preguntas: [["¿Dónde estuvo por la mañana?", "до́ма", ["в о́фисе", "в магази́не"]], ["¿Adónde fue por la noche?", "в магази́н", ["в кино́", "в парк"]], ["¿Qué miró?", "фильм", ["телеви́зор", "футбо́л"]]],
    vf: [["У́тром я был в о́фисе.", false], ["Ве́чером я гото́вил у́жин.", true], ["Днём я рабо́тал.", true]] },
  { id: "finde", titulo: "В суббо́ту", lineas: [
      ["В суббо́ту А́нна и Ива́н бы́ли в це́нтре.", "El sábado Ana e Iván estuvieron en el centro."], ["Снача́ла они́ гуля́ли в па́рке.", "Primero pasearon por el parque."],
      ["Пото́м они́ обе́дали в рестора́не.", "Después almorzaron en el restaurante."], ["Ве́чером они́ ходи́ли в кино́.", "Por la noche fueron al cine."], ["Э́то бы́ло интере́сно.", "Fue interesante."]],
    preguntas: [["¿Qué hicieron primero?", "гуля́ли в па́рке", ["обе́дали в рестора́не", "ходи́ли в кино́"]], ["¿Dónde almorzaron?", "в рестора́не", ["в кафе́", "до́ма"]], ["¿Cómo fue?", "интере́сно", ["хо́лодно", "пло́хо"]]],
    vf: [["Они́ бы́ли в це́нтре.", true], ["Снача́ла они́ ходи́ли в кино́.", false], ["Ве́чером они́ ходи́ли в кино́.", true]] },
  { id: "viaje", titulo: "В Москве́", lineas: [
      ["В про́шлом ме́сяце Ма́ша е́здила в Москву́.", "El mes pasado Masha fue a Moscú."], ["Она́ была́ там неде́лю.", "Estuvo allí una semana."],
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
  objetivo: "Contar lo que hiciste ayer o hace un tiempo, dónde estuviste y cómo fue; distinguir la acción en proceso de la terminada, y comparar antes y ahora.",
  tiempo: "4 a 5 semanas con práctica diaria (unas 40–50 horas)",
  modulos: [
    { id: "u8m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "Un pasado para todo", resumen: "Я рабо́таю → Я рабо́тал.",
      intro: "Hasta aquí todo era presente. Ahora empiezas a contar lo que pasó, y la noticia es buena: el ruso tiene una sola forma de pasado para lo que en español se dice de tres maneras.",
      secciones: [
        { id: "u8-un-pasado", titulo: "Trabajé, trabajaba, estuve trabajando",
          texto: "En español eliges entre «trabajé», «trabajaba» y «estuve trabajando». En ruso, por ahora, las tres son рабо́тал. El verbo pierde **-ть**, suma **-л** y listo: no hay un tiempo para cada matiz.\nPara pasar una frase al pasado, cambias solo el verbo. Todo lo demás queda igual.",
          ejemplos: [
            { ru: "Я {рабо́тал} до́ма.", es: "Trabajé (trabajaba) en casa.", por: "рабо́тать → **рабо́та-** + **-л**." },
            { ru: "Я {жил} в Барсело́не.", es: "Viví (vivía) en Barcelona.", por: "жить → **жи-** + **-л**." },
            { ru: "Я {чита́л} кни́гу.", es: "Leí (estuve leyendo) un libro.", por: "чита́ть → **чита́-** + **-л**." },
            { ru: "Я {смотре́л} фильм.", es: "Miré (estuve mirando) una película.", por: "смотре́ть → **смотре́-** + **-л**. El presente смотрю́ no cuenta: el pasado sale del infinitivo." }],
          destacado: "Я рабо́таю → Я рабо́тал.",
          comparacion: "Lo que en español separas entre «trabajé» y «trabajaba», el ruso lo deja al contexto. Más adelante en esta unidad vas a ver que el ruso marca otra cosa: si la acción llegó a su fin.",
          errores: [{ mal: "Я был рабо́тал.", bien: "Я {рабо́тал}.", por: "No hace falta ningún verbo de ayuda: el pasado es una sola palabra." }],
          mas: { texto: "¿Por qué el pasado sale del infinitivo y no del presente? Porque en ruso son dos raíces que a veces se parecen y a veces no: живу́ / жить, смотрю́ / смотре́ть. El pasado se arma siempre sobre la del infinitivo, así que con saber el infinitivo alcanza.",
            ejemplos: [
              { ru: "Я живу́ → Я {жил}.", es: "Vivo → viví.", por: "En presente aparece -в-; en pasado, no: sale de жить." },
              { ru: "Я пишу́ → Я {писа́л}.", es: "Escribo → escribí.", por: "пишу́ y писа́ть: el pasado toma **писа́-**." }] },
          chequeo: [{ pide: "«Ayer leí» se dice…", opciones: ["Вчера́ я чита́л.", "Вчера́ я был чита́л."], ok: "Вчера́ я чита́л.", por: "Una sola palabra: чита́л." }] },
        { id: "u8-pistas", titulo: "El contexto decide",
          texto: "Como рабо́тал sirve para «trabajé» y para «trabajaba», lo que define cómo lo traduces son las palabras de alrededor:\nвчера́ (ayer) → casi siempre «trabajé»\nра́ньше (antes) → «trabajaba», lo de siempre\nча́сто, обы́чно, всегда́ → «trabajaba», lo que se repetía\nдва часа́, весь день → «estuve trabajando», cuánto duró",
          ejemplos: [
            { ru: "{Вчера́} я рабо́тал.", es: "Ayer trabajé.", por: "вчера́ marca un día concreto." },
            { ru: "{Ра́ньше} я рабо́тал в ба́нке.", es: "Antes trabajaba en un banco.", por: "ра́ньше: lo que hacías en otra época." },
            { ru: "Я {ча́сто} гуля́л в па́рке.", es: "Paseaba a menudo por el parque.", por: "ча́сто: algo que se repetía." },
            { ru: "Я рабо́тал {два часа́}.", es: "Estuve trabajando dos horas.", por: "Cuánto duró: «estuve trabajando»." }],
          destacado: "вчера́ → trabajé · ра́ньше, ча́сто → trabajaba",
          truco: "Cuando traduzcas al español, mira primero la palabra de tiempo: casi siempre te dice cuál de los pasados va.",
          chequeo: [{ pide: "Ра́ньше я жил в Мадри́де. ¿Cómo lo dices en español?", opciones: ["Antes vivía en Madrid.", "Antes viví en Madrid."], ok: "Antes vivía en Madrid.", por: "ра́ньше habla de lo de otra época: «vivía»." }] }
      ] },
    { id: "u8m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Cómo se forma el pasado", resumen: "-л, -ла, -ло, -ли.",
      intro: "Al infinitivo se le saca **-ть** y se agrega una de cuatro terminaciones. Cuál va depende de quién hace la acción.",
      secciones: [
        { id: "u8-forma-l", titulo: "Cuatro terminaciones",
          antes: { pide: "Он чита́л. ¿Y ella?", opciones: ["Она́ чита́ла.", "Она́ чита́л."], ok: "Она́ чита́ла.", por: "Para una mujer se suma -а: чита́ла." },
          texto: "чита́ть → **чита́-** y después:\n**-л** para un hombre (он, Ива́н, брат)\n**-ла** para una mujer (она́, А́нна, ма́ма)\n**-ло** para lo neutro (оно́, э́то)\n**-ли** para varios (мы, вы, они́)\nNo cambia según «yo, tú, él»: cambia según hombre, mujer o varios.",
          ejemplos: [
            { ru: "Брат {чита́л}.", es: "Mi hermano leyó.", por: "Un hombre: **-л**." },
            { ru: "Ма́ма {чита́ла}.", es: "Mamá leyó.", por: "Una mujer: **-ла**." },
            { ru: "Э́то {бы́ло} вчера́.", es: "Fue ayer.", por: "э́то es neutro: **-ло**." },
            { ru: "Мы {чита́ли}.", es: "Leímos.", por: "Varios: **-ли**." }],
          destacado: "-л · -ла · -ло · -ли",
          truco: "Infinitivo sin -ть + л / ла / ло / ли.",
          mas: { texto: "¿Por qué el pasado ruso cambia como un adjetivo (por género) y no como un verbo (por persona)? Porque eso fue: hace siglos era una forma que describía a quien había hecho algo, más o menos «yo soy leído-de-libro», y se usaba con быть adelante. El быть se perdió y quedó la forma descriptiva, que sigue concordando como un adjetivo: hombre, mujer, neutro o varios.",
            ejemplos: [
              { ru: "Он {рабо́тал}. Она́ {рабо́тала}.", es: "Él trabajó. Ella trabajó.", por: "Como но́вый / но́вая: cambia el final según quién." }] },
          chequeo: [
            { pide: "Они́ ___ (гуля́ть).", opciones: ["гуля́ли", "гуля́ла", "гуля́л"], ok: "гуля́ли", por: "Varios: **-ли**." },
            { pide: "А́нна ___ (рабо́тать).", opciones: ["рабо́тала", "рабо́тал", "рабо́тали"], ok: "рабо́тала", por: "Una mujer: **-ла**." }] },
        { id: "u8-forma-sya", titulo: "Los verbos con -ся",
          texto: "Los verbos que terminan en **-ся** arman el pasado igual y después le pegan la partícula: **-ся** si la palabra termina en consonante, **-сь** si termina en vocal. Es la misma regla que ya usas en presente (умыва́юсь, умыва́ется).\nучи́ться → учи́л**ся** (él), учи́ла**сь** (ella), учи́ли**сь** (varios).",
          ejemplos: [
            { ru: "Брат {учи́лся} в Москве́.", es: "Mi hermano estudiaba en Moscú.", por: "учи́л termina en consonante (**л**): va **-ся**." },
            { ru: "Сестра́ {учи́лась} в Мадри́де.", es: "Mi hermana estudiaba en Madrid.", por: "учи́ла termina en vocal: va **-сь**." },
            { ru: "Ра́ньше мы {ложи́лись} по́здно.", es: "Antes nos acostábamos tarde.", por: "**ложи́ли** termina en vocal: **-сь**." },
            { ru: "Она́ {просыпа́лась} ра́но.", es: "Ella se despertaba temprano.", por: "**просыпа́ла** + **-сь**." }],
          destacado: "consonante + ся · vocal + сь",
          errores: [
            { mal: "Она́ учи́ласья.", bien: "Она́ {учи́лась}.", por: "Después de vocal, **-сь**, nunca **-ся**." },
            { mal: "Он учи́лсь.", bien: "Он {учи́лся}.", por: "Después de consonante, **-ся**." }],
          chequeo: [{ pide: "Ма́ма ___ (возвраща́ться) в семь часо́в.", opciones: ["возвраща́лась", "возвраща́лся", "возвраща́ласья"], ok: "возвраща́лась", por: "Ма́ма es una mujer: **-ла**, возвраща́ла. Y como termina en vocal, **-ся** pasa a **-сь**: возвраща́лась." }] },
        { id: "u8-especiales", titulo: "Los especiales",
          texto: "Casi todos los verbos siguen la regla. Los pocos que no, de los que ya conoces, son estos, y conviene aprenderlos de memoria:",
          ejemplos: [
            { ru: "есть → {ел}, {е́ла}, {е́ли}", es: "comer → comí, comió…", por: "Se pierde la **-с-** de есть." },
            { ru: "идти́ → {шёл}, {шла}, {шли}", es: "ir (a pie, en camino)", por: "Otra raíz: шёл. Es «iba», en camino: Я шёл домо́й («iba para casa»)." },
            { ru: "мочь → {мог}, {могла́}, {могли́}", es: "poder → pude, pudo…", por: "En masculino no hay **-л**: мог." }],
          destacado: "ел · шёл · мог",
          mas: { texto: "Otro detalle, que no cambia la terminación pero sí el sonido: en algunos verbos cortos el acento salta al final en femenino. Pasa con жить, спать, пить, ждать y быть. El masculino y el plural quedan con el acento en la raíz.",
            ejemplos: [
              { ru: "жил → {жила́} → жи́ли", es: "vivió (él) → vivió (ella) → vivieron", por: "El acento va al final solo en femenino." },
              { ru: "спал → {спала́} → спа́ли", es: "durmió → durmió (ella) → durmieron", por: "Igual que жила́." },
              { ru: "пил → {пила́} → пи́ли", es: "tomó → tomó (ella) → tomaron", por: "Igual: пила́." }] },
          chequeo: [{ pide: "А́нна ___ пи́ццу (есть).", opciones: ["е́ла", "е́сла", "е́ли"], ok: "е́ла", por: "есть es especial: ел, е́ла, е́ли." }] }
      ] },
    { id: "u8m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Quién lo hizo", resumen: "Ива́н рабо́тал. А́нна рабо́тала.",
      intro: "El pasado no mira la persona sino quién es: un hombre, una mujer o varios. Eso cambia cómo hablas tú y cómo te hablan.",
      secciones: [
        { id: "u8-genero-quien", titulo: "Я y ты dependen de quién eres",
          texto: "Я y ты pueden ser un hombre o una mujer, así que el verbo lo muestra: un hombre dice Я рабо́тал; una mujer, Я рабо́тала. Igual con ты: a un amigo, Ты рабо́тал?; a una amiga, Ты рабо́тала?\nCon un nombre o un sustantivo, miras quién es: Ива́н, брат, па́па van con **-л**; А́нна, сестра́, ма́ма, con **-ла**.",
          ejemplos: [
            { ru: "Я {рабо́тал} вчера́.", es: "Ayer trabajé.", por: "Lo dice un hombre: **-л**." },
            { ru: "Я {рабо́тала} вчера́.", es: "Ayer trabajé.", por: "Lo dice una mujer: **-ла**." },
            { ru: "Ты {была́} до́ма?", es: "¿Estuviste en casa?", por: "Le preguntas a una mujer: **-ла**." },
            { ru: "Па́па {гото́вил} у́жин.", es: "Papá preparó la cena.", por: "Па́па termina en -а, pero es un hombre: **-л**." }],
          destacado: "Él: Я рабо́тал · Ella: Я рабо́тала",
          errores: [
            { mal: "(una mujer) Я рабо́тал.", bien: "Я {рабо́тала}.", por: "Una mujer habla de sí misma en femenino." },
            { mal: "Па́па гото́вила у́жин.", bien: "Па́па {гото́вил} у́жин.", por: "Lo que cuenta es que па́па es un hombre, no cómo termina la palabra." }],
          chequeo: [{ pide: "Una amiga te cuenta que ayer trabajó. Dice:", opciones: ["Я рабо́тала.", "Я рабо́тал."], ok: "Я рабо́тала.", por: "Es mujer: **-ла**." }] },
        { id: "u8-plural", titulo: "Мы, вы, они́: siempre -ли",
          texto: "Мы, вы y они́ van siempre con **-ли**, sean hombres, mujeres o un grupo mezclado. Con вы va el plural aunque le hables con respeto a una sola persona.",
          ejemplos: [
            { ru: "Мы {рабо́тали}.", es: "Trabajamos.", por: "Varios: **-ли**." },
            { ru: "Вы {бы́ли} в Москве́?", es: "¿Estuvo (usted) en Moscú?", por: "вы de respeto, a una sola persona: igual **-ли**." },
            { ru: "Де́ти {игра́ли}.", es: "Los chicos jugaban.", por: "Де́ти son varios: **-ли**." },
            { ru: "А́нна и Ива́н {гуля́ли}.", es: "Ana e Iván pasearon.", por: "Dos personas: **-ли**." }],
          errores: [
            { mal: "Мы рабо́тал.", bien: "Мы {рабо́тали}.", por: "Con мы, siempre **-ли**." },
            { mal: "Вы была́ в Москве́?", bien: "Вы {бы́ли} в Москве́?", por: "Con вы va **-ли**, aunque sea una mujer." }],
          chequeo: [{ pide: "Вы ___ до́ма? (a tu profesora, con respeto)", opciones: ["бы́ли", "была́"], ok: "бы́ли", por: "Con вы siempre **-ли**." }] },
        { id: "u8-neutro", titulo: "Lo neutro: -ло",
          texto: "**-ло** va con un sustantivo neutro y, sobre todo, con э́то y con las frases sin sujeto, como las del clima o de cómo fue algo.",
          ejemplos: [
            { ru: "Э́то {бы́ло} интере́сно.", es: "Fue interesante.", por: "э́то: **-ло**." },
            { ru: "Вчера́ {бы́ло} хо́лодно.", es: "Ayer hizo frío.", por: "Sin sujeto: **-ло**." },
            { ru: "Письмо́ {бы́ло} на столе́.", es: "La carta estaba sobre la mesa.", por: "Письмо́ es neutro: **-ло**." }],
          mas: { texto: "Si el sujeto es кто («quién»), va **-л** aunque la respuesta sea una mujer: Кто рабо́тал? («¿quién trabajó?»). Con что («qué»), **-ло**: Что бы́ло? («¿qué pasó?»).",
            ejemplos: [
              { ru: "— {Кто} рабо́тал? — А́нна.", es: "—¿Quién trabajó? —Ana.", por: "кто siempre con **-л**." },
              { ru: "— {Что} бы́ло вчера́?", es: "—¿Qué pasó ayer?", por: "что con **-ло**." }] },
          chequeo: [{ pide: "Э́то ___ вчера́.", opciones: ["бы́ло", "был", "бы́ли"], ok: "бы́ло", por: "э́то: **-ло**." }] }
      ] },
    { id: "u8m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Cuándo pasó", resumen: "вчера́, неда́вно, два дня наза́д…",
      intro: "Las palabras para decir cuándo pasó algo. Algunas son sueltas; otras se arman con la forma de contar que ya conoces.",
      secciones: [
        { id: "u8-cuando", titulo: "Ayer, hace poco, hace mucho",
          texto: "вчера́ (ayer) · позавчера́ (anteayer)\nвчера́ у́тром, вчера́ ве́чером (ayer por la mañana, ayer por la noche)\nнеда́вно (hace poco) · давно́ (hace mucho)\nкогда́-то (en otro tiempo, alguna vez)\nVan al principio o al final de la frase, sin preposición.",
          ejemplos: [
            { ru: "{Позавчера́} я был в кино́.", es: "Anteayer estuve en el cine.", por: "**поза-** + вчера́: el día antes de ayer." },
            { ru: "Я {неда́вно} был в Москве́.", es: "Hace poco estuve en Moscú.", por: "неда́вно = no hace mucho." },
            { ru: "Мы {давно́} не гуля́ли.", es: "Hace mucho que no paseamos.", por: "давно́ + не: hace mucho que no." },
            { ru: "{Когда́-то} я жил в Мадри́де.", es: "En otro tiempo viví en Madrid.", por: "когда́-то cuenta algo lejano, sin fecha." }],
          errores: [{ mal: "Вчера́ я есть до́ма.", bien: "Вчера́ я {был} до́ма.", por: "Con вчера́ va el pasado de быть: был." }],
          chequeo: [{ pide: "«Hace poco» es…", opciones: ["неда́вно", "давно́"], ok: "неда́вно", por: "не- + давно́: no hace mucho." }] },
        { id: "u8-nazad", titulo: "Hace dos días: наза́д",
          texto: "Para «hace dos días», «hace un año», va primero cuánto tiempo y después наза́д. El número y la palabra se cuentan como ya sabes: 1, 2–4, 5 o más.\nдень → день, два дня, пять дней\nгод → год, два го́да, пять лет\nме́сяц → ме́сяц, два ме́сяца, пять ме́сяцев\nCon неде́ля, para «hace una semana»: неде́лю наза́д.",
          ejemplos: [
            { ru: "Я был в Москве́ {два дня наза́д}.", es: "Estuve en Moscú hace dos días.", por: "2 → дня, como два часа́." },
            { ru: "Она́ жила́ в Пари́же {пять лет наза́д}.", es: "Ella vivía en París hace cinco años.", por: "Para 5 o más años, лет." },
            { ru: "Мы гуля́ли там {неде́лю наза́д}.", es: "Paseamos por allí hace una semana.", por: "неде́лю, como en рабо́тал неде́лю (cuánto)." },
            { ru: "Он был тут {час наза́д}.", es: "Estuvo aquí hace una hora.", por: "Para una, la palabra sola: час." }],
          destacado: "два дня наза́д · пять лет наза́д",
          errores: [{ mal: "Наза́д два дня.", bien: "{Два дня наза́д}.", por: "наза́д va después: primero cuánto, después наза́д." }],
          mas: { texto: "лет no se parece a год: es otra palabra que el ruso usa para contar años de 5 en adelante (пять лет, два́дцать лет). Con 2, 3 y 4 sí va го́да: три го́да наза́д.",
            ejemplos: [
              { ru: "{Три го́да наза́д}.", es: "Hace tres años.", por: "2, 3, 4 → го́да." },
              { ru: "{Де́сять лет наза́д}.", es: "Hace diez años.", por: "5 o más → лет." }] },
          chequeo: [{ pide: "«Hace cinco días» es…", opciones: ["пять дней наза́д", "пять дня наза́д"], ok: "пять дней наза́д", por: "5 o más: дней." }] },
        { id: "u8-proshly", titulo: "La semana pasada, el mes pasado",
          texto: "про́шлый es «pasado» y se usa en tres fórmulas que conviene aprender enteras:\nна про́шлой неде́ле (la semana pasada)\nв про́шлом ме́сяце (el mes pasado)\nв про́шлом году́ (el año pasado)\nTambién sirve para un día de la semana sin preposición especial: в про́шлую суббо́ту («el sábado pasado»), con в + acusativo, como в суббо́ту.",
          ejemplos: [
            { ru: "{В про́шлом году́} я жил в Мадри́де.", es: "El año pasado vivía en Madrid.", por: "году́, con el acento al final: forma especial de год después de в." },
            { ru: "{На про́шлой неде́ле} мы рабо́тали до́ма.", es: "La semana pasada trabajamos en casa.", por: "Con неде́ля va на, no в." },
            { ru: "{В про́шлую суббо́ту} я был в кино́.", es: "El sábado pasado estuve en el cine.", por: "Como в суббо́ту: в + acusativo." }],
          destacado: "на про́шлой неде́ле · в про́шлом ме́сяце · в про́шлом году́",
          ojo: "Con неде́ля va на: на про́шлой неде́ле. Con ме́сяц y год, в.",
          chequeo: [{ pide: "«La semana pasada» es…", opciones: ["на про́шлой неде́ле", "в про́шлой неде́ле"], ok: "на про́шлой неде́ле", por: "Con неде́ля va на." }] },
        { id: "u8-duracion", titulo: "Cuánto duró: до́лго, весь день",
          texto: "Para decir cuánto duró algo, sin preposición: два часа́, неде́лю, ме́сяц. Además:\nдо́лго (mucho tiempo) · недо́лго (poco tiempo)\nвесь день, це́лый день (todo el día, el día entero)\nEstas palabras van a importar más adelante en esta unidad: cuando algo dura, el verbo que se usa es el de proceso.",
          ejemplos: [
            { ru: "Я {до́лго} спал.", es: "Dormí mucho tiempo.", por: "до́лго: cuánto duró." },
            { ru: "Мы гуля́ли {недо́лго}.", es: "Paseamos poco tiempo.", por: "не- + до́лго." },
            { ru: "Она́ рабо́тала {весь день}.", es: "Ella trabajó todo el día.", por: "весь день, sin preposición." },
            { ru: "Он чита́л {це́лый день}.", es: "Leyó el día entero.", por: "це́лый = entero, como весь." }],
          chequeo: [{ pide: "«Trabajé todo el día».", opciones: ["Я рабо́тал весь день.", "Я рабо́тал в весь день."], ok: "Я рабо́тал весь день.", por: "Cuánto duró: sin preposición." }] }
      ] },
    { id: "u8m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "¿Qué hiciste?", resumen: "Что ты де́лал вчера́?",
      intro: "Preguntar y contar qué hiciste, y una diferencia importante: «fui» en ruso tiene dos verbos.",
      secciones: [
        { id: "u8-preguntas", titulo: "Las preguntas",
          texto: "Las preguntas son las de siempre, con el verbo en pasado. Como el pasado muestra el género, la pregunta cambia según a quién le hablas:\nЧто ты де́лал вчера́? (a un hombre) · Что ты де́лала вчера́? (a una mujer)\nГде ты был? / Где ты была́? (¿dónde estuviste?)\nЧто вы де́лали? (a varios o con respeto)\nКогда́ э́то бы́ло? (¿cuándo fue?)",
          ejemplos: [
            { ru: "— Что ты {де́лал} вчера́? — Я {рабо́тал}.", es: "—¿Qué hiciste ayer? —Trabajé.", por: "A un hombre: де́лал; contesta un hombre: рабо́тал." },
            { ru: "— Где ты {была́}? — Я {была́} в кино́.", es: "—¿Dónde estuviste? —Estuve en el cine.", por: "Entre mujeres: была́ en la pregunta y en la respuesta." },
            { ru: "— Когда́ э́то {бы́ло}? — Вчера́.", es: "—¿Cuándo fue? —Ayer.", por: "э́то: бы́ло." }],
          destacado: "Что ты де́лал вчера́?",
          mas: { texto: "Para contestar no hace falta repetir el sujeto en cada frase: Вчера́ я рабо́тал, пото́м гуля́л, а ве́чером смотре́л фильм. El я del principio vale para toda la serie, como en español.",
            ejemplos: [{ ru: "Вчера́ я {рабо́тал}, пото́м {гуля́л}.", es: "Ayer trabajé, después paseé.", por: "Un solo я para los dos verbos." }] },
          chequeo: [{ pide: "Le preguntas a una amiga qué hizo ayer:", opciones: ["Что ты де́лала вчера́?", "Что ты де́лал вчера́?"], ok: "Что ты де́лала вчера́?", por: "A una mujer: де́лала." }] },
        { id: "u8-dia", titulo: "Tu día de ayer",
          texto: "Con los verbos que ya conoces cuentas un día entero. Cada verbo con su terminación y, si quieres, cuándo:",
          ejemplos: [
            { ru: "У́тром я {за́втракал} до́ма.", es: "Por la mañana desayuné en casa.", por: "за́втракать → за́втракал." },
            { ru: "Днём я {рабо́тал} в о́фисе.", es: "Por la tarde trabajé en la oficina.", por: "рабо́тать → рабо́тал." },
            { ru: "Ве́чером я {гото́вил} у́жин.", es: "Por la noche preparé la cena.", por: "гото́вить → гото́вил: la -и- queda." },
            { ru: "Пото́м я {смотре́л} телеви́зор.", es: "Después miré televisión.", por: "смотре́ть → смотре́л." }],
          truco: "Escribe tu día de ayer en cuatro frases: mañana, tarde, noche y algo que hiciste después.",
          chequeo: [{ pide: "«Por la noche preparé la cena» (eres mujer).", opciones: ["Ве́чером я гото́вила у́жин.", "Ве́чером я гото́вил у́жин."], ok: "Ве́чером я гото́вила у́жин.", por: "Eres mujer: **-ла**." }] },
        { id: "u8-hodil", titulo: "«Fui»: ходи́л y е́здил",
          texto: "Para «fui al cine» el ruso usa ходи́л (a pie) o е́здил (en un vehículo). Los dos quieren decir «fui y volví»: el viaje ya terminó. Después va adónde, con в o на + acusativo, como con идти́.\nА́нна ходи́ла в кино́ («Ana fue al cine»: ya volvió).",
          ejemplos: [
            { ru: "Вчера́ я {ходи́л} в кино́.", es: "Ayer fui al cine.", por: "A pie, ida y vuelta: ходи́л." },
            { ru: "Мы {е́здили} в Москву́.", es: "Fuimos a Moscú.", por: "En un vehículo (tren, avión, auto): е́здили." },
            { ru: "Она́ {ходи́ла} в магази́н.", es: "Ella fue al negocio.", por: "Fue y ya volvió." }],
          destacado: "Я ходи́л в кино́. = Fui al cine (y volví).",
          errores: [{ mal: "Я ходи́л в Пари́ж.", bien: "Я {е́здил} в Пари́ж.", por: "A París no se va a pie: е́здил, en un vehículo." }],
          mas: { texto: "¿Y шёл? шёл es el pasado de идти́: «iba», en camino, sin decir si llegó. Sirve para contar qué pasaba mientras: Я шёл домо́й («iba para casa»). Para «fui y volví», siempre ходи́л o е́здил.",
            ejemplos: [{ ru: "Я {шёл} домо́й.", es: "Iba para casa.", por: "En camino: шёл." }] },
          chequeo: [{ pide: "«Fuimos a Madrid» (en tren).", opciones: ["Мы е́здили в Мадри́д.", "Мы ходи́ли в Мадри́д."], ok: "Мы е́здили в Мадри́д.", por: "En un vehículo: е́здили." }] }
      ] },
    { id: "u8m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Был, была́, бы́ло, бы́ли", resumen: "Я был в Москве́. Бы́ло жа́рко.",
      intro: "En presente, быть no se dice (Я до́ма). En pasado sí: Я был до́ма. Y con él se cuenta dónde estuviste, cómo fue algo y qué tenías.",
      secciones: [
        { id: "u8-byl-acento", titulo: "Dónde estuviste",
          texto: "был, была́, бы́ло, бы́ли + dónde (в o на + prepositivo, o до́ма). Fíjate en el acento: en femenino va al final (была́); en las otras tres formas, en la raíz.",
          ejemplos: [
            { ru: "Я {был} в Барсело́не.", es: "Estuve en Barcelona.", por: "Un hombre: был." },
            { ru: "Она́ {была́} на рабо́те.", es: "Ella estuvo en el trabajo.", por: "Una mujer: была́, acento al final." },
            { ru: "Мы {бы́ли} до́ма.", es: "Estuvimos en casa.", por: "Varios: бы́ли, acento en la raíz." }],
          destacado: "был · была́ · бы́ло · бы́ли",
          errores: [{ mal: "Вчера́ я до́ма.", bien: "Вчера́ я {был} до́ма.", por: "En presente no se dice; en pasado, быть aparece." }],
          chequeo: [{ pide: "Где ты ___ вчера́? (a una amiga)", opciones: ["была́", "был", "бы́ли"], ok: "была́", por: "A una mujer: была́." }] },
        { id: "u8-ne-byl", titulo: "No estuve: не́ был",
          texto: "Con не, el acento se va a не en masculino, neutro y plural: не́ был, не́ было, не́ были. En femenino se queda al final: не была́. Suena como una sola palabra.",
          ejemplos: [
            { ru: "Я {не́ был} в Москве́.", es: "No estuve en Moscú.", por: "El acento pasa a не́." },
            { ru: "Она́ {не была́} до́ма.", es: "Ella no estuvo en casa.", por: "En femenino el acento sigue al final." },
            { ru: "Мы {не́ были} там.", es: "No estuvimos allí.", por: "не́ были: acento en не́." }],
          mas: { texto: "Pasa lo mismo con otros verbos cortos de la lista de los especiales: не́ жил, не жила́, не́ жили. No es obligatorio decirlo así para que te entiendan, pero es como lo dicen los rusos.",
            ejemplos: [{ ru: "Я {не́ жил} там.", es: "No viví allí.", por: "Como не́ был." }] },
          chequeo: [{ pide: "¿Dónde va el acento en «no estuvimos»?", opciones: ["не́ были", "не бы́ли"], ok: "не́ были", por: "En plural, el acento va a не́." }] },
        { id: "u8-bylo", titulo: "Cómo fue: бы́ло",
          texto: "Para decir cómo fue algo o cómo estuvo el tiempo, бы́ло + una palabra como интере́сно, хо́лодно, жа́рко, ве́село, ску́чно, тру́дно, легко́. Sin sujeto, igual que en presente sin быть (Хо́лодно = hace frío).\nPara la lluvia y la nieve, el ruso dice que «iban»: шёл дождь (llovía), шёл снег (nevaba).",
          ejemplos: [
            { ru: "Э́то {бы́ло} интере́сно.", es: "Fue interesante.", por: "э́то + бы́ло + cómo." },
            { ru: "Вчера́ {бы́ло} жа́рко.", es: "Ayer hizo calor.", por: "El tiempo, sin sujeto: бы́ло." },
            { ru: "Вчера́ {шёл дождь}.", es: "Ayer llovió.", por: "«La lluvia iba»: шёл, de идти́." },
            { ru: "{Бы́ло} тру́дно, но ве́село.", es: "Fue difícil, pero divertido.", por: "Dos valoraciones con un solo бы́ло." }],
          destacado: "Бы́ло интере́сно. · Шёл дождь.",
          errores: [{ mal: "Он был интере́сно.", bien: "Э́то {бы́ло} интере́сно.", por: "Para valorar algo, э́то y бы́ло." }],
          mas: { texto: "дождь es masculino: шёл дождь. снег, también: шёл снег. Si fuera femenino, sería шла, pero con el clima casi siempre vas a usar estas dos.",
            ejemplos: [
              { ru: "Вчера́ {шёл снег}.", es: "Ayer nevó.", por: "снег es masculino: шёл." },
              { ru: "{Был} ве́тер.", es: "Había viento.", por: "ве́тер es masculino: был." }] },
          chequeo: [{ pide: "«Fue aburrido».", opciones: ["Бы́ло ску́чно.", "Был ску́чно."], ok: "Бы́ло ску́чно.", por: "Sin sujeto: бы́ло." }] },
        { id: "u8-u-menya-byl", titulo: "Tenía: у меня́ был",
          texto: "у меня́ есть («tengo») en pasado se dice con быть, y быть concuerda con lo que tenías, no contigo:\nу меня́ был брат (un hombre: был)\nу меня́ была́ ко́шка (femenino: была́)\nу меня́ бы́ло письмо́ (neutro: бы́ло)\nу меня́ бы́ли кни́ги (varios: бы́ли)",
          ejemplos: [
            { ru: "У меня́ {была́} соба́ка.", es: "Tenía un perro.", por: "соба́ка es femenino: была́." },
            { ru: "У меня́ {был} о́тпуск.", es: "Tuve vacaciones.", por: "о́тпуск es masculino: был." },
            { ru: "У меня́ {бы́ло} вре́мя.", es: "Tenía tiempo.", por: "вре́мя es neutro: бы́ло." }],
          errores: [{ mal: "У меня́ был ко́шка.", bien: "У меня́ {была́} ко́шка.", por: "Concuerda con ко́шка, no con quien habla." }],
          chequeo: [{ pide: "У меня́ ___ маши́на.", opciones: ["была́", "был", "бы́ло"], ok: "была́", por: "маши́на es femenino: была́." }] }
      ] },
    { id: "u8m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Proceso o resultado", resumen: "чита́л / прочита́л.",
      intro: "Hasta aquí usaste un verbo para todo. Pero casi todos los verbos rusos tienen una pareja: uno cuenta la acción mientras pasaba, el otro, la acción terminada. Este es el corazón de la unidad.",
      secciones: [
        { id: "u8-aspecto-idea", titulo: "Dos verbos para una acción",
          antes: { pide: "Я чита́л кни́гу. Я прочита́л кни́гу. ¿Cuál dice «terminé el libro»?", opciones: ["Я прочита́л кни́гу.", "Я чита́л кни́гу."], ok: "Я прочита́л кни́гу.", por: "прочита́л: lo leí hasta el final." },
          texto: "чита́ть y прочита́ть quieren decir «leer». La diferencia es cómo miras la acción:\nчита́л: la acción en sí, mientras duraba o como actividad. «Estuve leyendo», «leía», «leí» (sin decir si terminé).\nпрочита́л: la acción terminada, con su resultado. «Lo leí entero», «terminé de leerlo».\nAl primero lo llamamos de **proceso**; al segundo, de **resultado**.",
          ejemplos: [
            { ru: "Вчера́ я {чита́л} кни́гу.", es: "Ayer estuve leyendo un libro.", por: "Proceso: qué hice, no si terminé." },
            { ru: "Вчера́ я {прочита́л} кни́гу.", es: "Ayer leí (terminé) el libro.", por: "Resultado: el libro está leído." },
            { ru: "Она́ {писа́ла} письмо́.", es: "Ella estaba escribiendo una carta.", por: "Proceso." },
            { ru: "Она́ {написа́ла} письмо́.", es: "Ella escribió la carta (ya está).", por: "Resultado: la carta existe." }],
          destacado: "чита́л = leía, estuve leyendo · прочита́л = lo terminé",
          desarmar: { es: "Ayer terminé de leer el libro.", partes: [
            { txt: "Вчера́", rol: "Cuándo", nota: "Un momento concreto del pasado." },
            { txt: "я", rol: "Quién", nota: "Un hombre: por eso el verbo termina en **-л**." },
            { txt: "прочита́л", rol: "Verbo de resultado", nota: "**про-** + чита́л: la lectura llegó al final." },
            { txt: "кни́гу", rol: "Qué", nota: "Acusativo: lo que se leyó." }] },
          mas: { texto: "El español también tiene algo parecido: «leía» frente a «leí». Pero no es lo mismo: «ayer leí dos horas» es pretérito en español y proceso en ruso (чита́л два часа́), porque lo que importa es que duró, no que terminó. Por eso conviene pensar en ruso: ¿llegó a un resultado, o cuento la actividad?\nPara la pregunta general «¿qué hiciste?» el ruso usa el de proceso: Что ты де́лал? — Я чита́л. Si alguien quiere saber si terminaste: Ты прочита́л кни́гу?",
            ejemplos: [
              { ru: "Я {чита́л} два часа́.", es: "Leí dos horas.", por: "Cuánto duró: proceso, aunque en español sea «leí»." },
              { ru: "— Ты {прочита́л} кни́гу? — Да, {прочита́л}.", es: "—¿Terminaste el libro? —Sí, lo terminé.", por: "La pregunta es por el resultado." }] },
          chequeo: [
            { pide: "«Ayer escribí la carta (y la mandé)».", opciones: ["Вчера́ я написа́л письмо́.", "Вчера́ я писа́л письмо́."], ok: "Вчера́ я написа́л письмо́.", por: "La carta está terminada: resultado." },
            { pide: "«Estuve mirando televisión toda la noche».", opciones: ["Я смотре́л телеви́зор весь ве́чер.", "Я посмотре́л телеви́зор весь ве́чер."], ok: "Я смотре́л телеви́зор весь ве́чер.", por: "Cuánto duró: proceso." }] },
        { id: "u8-aspecto-pares", titulo: "Cómo se forman las parejas",
          texto: "La mayoría de las veces, el de resultado es el mismo verbo con algo adelante. Cada verbo tiene el suyo, así que se aprenden de a dos:\nчита́ть → **про**чита́ть · писа́ть → **на**писа́ть · де́лать → **с**де́лать\nсмотре́ть → **по**смотре́ть · за́втракать → **по**за́втракать · обе́дать → **по**обе́дать · у́жинать → **по**у́жинать\nгото́вить → **при**гото́вить\nOtras veces cambia el final o es otra palabra:\nпокупа́ть → купи́ть · встава́ть → встать · просыпа́ться → просну́ться · возвраща́ться → верну́ться",
          ejemplos: [
            { ru: "Я {сде́лал} рабо́ту.", es: "Hice el trabajo (está hecho).", por: "**с-** + де́лал." },
            { ru: "Она́ {пригото́вила} у́жин.", es: "Ella preparó la cena (está lista).", por: "**при-** + гото́вила." },
            { ru: "Мы {купи́ли} хлеб.", es: "Compramos pan.", por: "покупа́ть → купи́ть: se acorta." },
            { ru: "Он {верну́лся} в семь часо́в.", es: "Volvió a las siete.", por: "Otra palabra: верну́ться, con **-ся** como возвраща́ться." }],
          destacado: "**про-** · **на-** · **с-** · **по-** · **при-** · otra palabra",
          ojo: "El de resultado, por ahora, solo en pasado. Su presente (прочита́ю) no es presente sino futuro; lo ves más adelante.",
          errores: [{ mal: "Сейча́с я прочита́ю кни́гу (por «ahora leo»).", bien: "Сейча́с я {чита́ю} кни́гу.", por: "Lo que pasa ahora va siempre con el de proceso." }],
          mas: { texto: "El prefijo no es un adorno: **на-**, **про-**, **по-** son las mismas piezas que ves en otras palabras, pero aquí solo agregan «hasta el final». Por eso no hay una regla para saber cuál le toca a cada verbo: se aprenden juntos, como una pareja. La tabla de abajo tiene las doce de esta unidad.",
            ejemplos: [
              { ru: "{Встал} в семь часо́в.", es: "Me levanté a las siete.", por: "встава́ть → встать: встал, вста́ла, вста́ли." },
              { ru: "Она́ {просну́лась} ра́но.", es: "Se despertó temprano.", por: "просну́ться → просну́лась." }] },
          chequeo: [{ pide: "¿Cuál es la pareja de resultado de писа́ть?", opciones: ["написа́ть", "прописа́ть", "списа́ть"], ok: "написа́ть", por: "писа́ть → написа́ть." }] },
        { id: "u8-aspecto-pistas", titulo: "Pistas para elegir",
          texto: "Algunas palabras casi deciden por ti:\nCon до́лго, весь день, це́лый день, два часа́ (cuánto duró) → proceso.\nCon ча́сто, обы́чно, ка́ждый день, всегда́, ра́ньше (se repetía) → proceso.\nCon уже́ («ya»), наконе́ц («por fin») y cuando hay un resultado a la vista → resultado.\nEn la pregunta «¿qué hiciste?» → proceso.",
          ejemplos: [
            { ru: "Я {до́лго} {чита́л}.", es: "Leí mucho tiempo.", por: "до́лго: proceso." },
            { ru: "Я {ча́сто} {смотре́л} фи́льмы.", es: "Miraba películas a menudo.", por: "ча́сто: se repetía, proceso." },
            { ru: "Я {уже́} {поза́втракал}.", es: "Ya desayuné.", por: "уже́: resultado, está hecho." },
            { ru: "{Наконе́ц} мы {купи́ли} маши́ну.", es: "Por fin compramos el coche.", por: "наконе́ц: llegamos al resultado." }],
          destacado: "до́лго, ча́сто → proceso · уже́, наконе́ц → resultado",
          errores: [
            { mal: "Я до́лго прочита́л.", bien: "Я до́лго {чита́л}.", por: "до́лго habla de la duración: proceso." },
            { mal: "Я ча́сто купи́л хлеб.", bien: "Я ча́сто {покупа́л} хлеб.", por: "Lo que se repetía va con el de proceso." }],
          chequeo: [
            { pide: "Я уже́ ___ (за́втракать / поза́втракать).", opciones: ["поза́втракал", "за́втракал"], ok: "поза́втракал", por: "уже́: resultado." },
            { pide: "Я ___ кни́гу два часа́.", opciones: ["чита́л", "прочита́л"], ok: "чита́л", por: "весь день: proceso." }] }
      ] },
    { id: "u8m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Contar en orden", resumen: "Встал, поза́втракал, пото́м…",
      intro: "Con las parejas ya puedes contar una historia: lo que pasó una cosa después de la otra, lo que pasaba mientras tanto y lo que pasó de repente.",
      secciones: [
        { id: "u8-orden-perf", titulo: "Una cosa después de otra",
          texto: "Cuando cuentas una serie de cosas que pasaron una tras otra, cada una terminó antes de que empezara la siguiente: van con el de resultado. Para ordenarlas, снача́ла (primero), пото́м (después), зате́м (luego), наконе́ц (por fin).",
          ejemplos: [
            { ru: "{Снача́ла} я {встал}, {пото́м} {поза́втракал}.", es: "Primero me levanté, después desayuné.", por: "Dos acciones terminadas, en orden." },
            { ru: "Она́ {пригото́вила} у́жин и {посмотре́ла} фильм.", es: "Preparó la cena y miró una película.", por: "Primero una, después la otra." },
            { ru: "Мы {верну́лись} домо́й и {легли́} спать.", es: "Volvimos a casa y nos acostamos.", por: "лечь → легли́: también de resultado." },
            { ru: "{Наконе́ц} он {сде́лал} рабо́ту и {отдохну́л}.", es: "Por fin terminó el trabajo y descansó.", por: "Cada paso, terminado." }],
          destacado: "Встал, поза́втракал, пото́м…",
          errores: [{ mal: "Снача́ла я встава́л, пото́м за́втракал (por un día).", bien: "Снача́ла я {встал}, пото́м {поза́втракал}.", por: "Para un día concreto, en orden: resultado." }],
          mas: { texto: "Más parejas para contar tu día (también de esta unidad):\nложи́ться → лечь (лёг, легла́, легли́)\nумыва́ться → умы́ться · одева́ться → оде́ться\nпить → вы́пить · опа́здывать → опозда́ть · отдыха́ть → отдохну́ть\nлечь es especial: лёг, sin **-л** en masculino, como мог.",
            ejemplos: [
              { ru: "Я {умы́лся} и {оде́лся}.", es: "Me lavé y me vestí.", por: "Con **-ся** después de consonante." },
              { ru: "Она́ {опозда́ла} на рабо́ту.", es: "Llegó tarde al trabajo.", por: "Pasó una vez: resultado." },
              { ru: "Он {лёг} в оди́ннадцать часо́в.", es: "Se acostó a las once.", por: "лечь → лёг: especial." }] },
          chequeo: [{ pide: "«Primero desayuné, después leí el diario (entero)».", opciones: ["Снача́ла я поза́втракал, пото́м прочита́л газе́ту.", "Снача́ла я за́втракал, пото́м чита́л газе́ту."], ok: "Снача́ла я поза́втракал, пото́м прочита́л газе́ту.", por: "Una tras otra, terminadas: resultado." }] },
        { id: "u8-a-la-vez", titulo: "Mientras tanto",
          texto: "Dos acciones que pasaban al mismo tiempo van con el de proceso: Я гото́вил у́жин, а брат чита́л («yo cocinaba y mi hermano leía»).\nY cuando algo pasa de golpe en medio de otra cosa, lo de fondo va con proceso y lo que pasó, con resultado. одна́жды («una vez») abre la historia y вдруг («de repente») marca el golpe.",
          ejemplos: [
            { ru: "Я {гото́вил} у́жин, а па́па {чита́л}.", es: "Yo cocinaba y papá leía.", por: "A la vez: dos de proceso." },
            { ru: "Я {гуля́л} в па́рке и {уви́дел} Ива́на.", es: "Paseaba por el parque y vi a Iván.", por: "Fondo (proceso) + lo que pasó (resultado)." },
            { ru: "{Одна́жды} я {шёл} домо́й и {вдруг} {потеря́л} телефо́н.", es: "Una vez iba para casa y de repente perdí el teléfono.", por: "шёл: fondo. потеря́л: lo que pasó." }],
          destacado: "fondo = proceso · lo que pasó = resultado",
          chequeo: [{ pide: "«Leía y de repente oí la música».", opciones: ["Я чита́л и вдруг услы́шал му́зыку.", "Я прочита́л и вдруг слу́шал му́зыку."], ok: "Я чита́л и вдруг услы́шал му́зыку.", por: "Fondo: чита́л. Lo que pasó: услы́шал." }] },
        { id: "u8-que-paso", titulo: "¿Qué pasó?",
          texto: "Что случи́лось? es «¿qué pasó?». Para contestar, muchos verbos de cosas que pasan una vez se usan casi siempre en su forma de resultado: уви́дел (vi), услы́шал (oí), узна́л (me enteré), реши́л (decidí), забы́л (me olvidé), потеря́л (perdí), получи́л (recibí), встре́тил (me encontré con), уста́л (me cansé), заболе́л (me enfermé).",
          ejemplos: [
            { ru: "— Что {случи́лось}? — Я {потеря́л} телефо́н.", es: "—¿Qué pasó? —Perdí el teléfono.", por: "случи́лось, neutro: «algo pasó»." },
            { ru: "Я {получи́л} письмо́ и {узна́л} но́вость.", es: "Recibí una carta y me enteré de una noticia.", por: "Dos cosas que pasaron una vez." },
            { ru: "Она́ {забы́ла} ключ.", es: "Se olvidó la llave.", por: "забы́ть → забы́ла." },
            { ru: "Мы {реши́ли} гуля́ть.", es: "Decidimos pasear.", por: "реши́ть + infinitivo." }],
          errores: [{ mal: "Что случи́л?", bien: "Что {случи́лось}?", por: "Con что, neutro: **-ло** + **-сь**." }],
          mas: { texto: "рассказа́ть y расска́зывать son una pareja («contar»): Он до́лго расска́зывал («estuvo contando un buen rato») / Он рассказа́л но́вость («contó la noticia»). подари́ть («regalar»), показа́ть («mostrar») y сфотографи́ровать («sacar una foto») también son de resultado.",
            ejemplos: [
              { ru: "Он {показа́л} фо́то.", es: "Mostró la foto.", por: "показа́ть: de resultado." }] },
          chequeo: [{ pide: "«¿Qué pasó?»", opciones: ["Что случи́лось?", "Что случи́л?"], ok: "Что случи́лось?", por: "что va con neutro: случи́лось." }] },
        { id: "u8-conectores", titulo: "Pero y porque",
          texto: "но (pero) une dos ideas que se oponen: Бы́ло хо́лодно, но интере́сно.\nпотому́ что (porque) responde a почему́: Почему́ ты не́ был на рабо́те? — Потому́ что я заболе́л.",
          ejemplos: [
            { ru: "Я уста́л, {но} мы гуля́ли.", es: "Estaba cansado, pero paseamos.", por: "но: contraste." },
            { ru: "— Почему́ ты опозда́л? — {Потому́ что} я по́здно встал.", es: "—¿Por qué llegaste tarde? —Porque me levanté tarde.", por: "Почему́? → Потому́ что…" }],
          chequeo: [{ pide: "— Почему́ ты был до́ма? — ___ я заболе́л.", opciones: ["Потому́ что", "Но"], ok: "Потому́ что", por: "Responde a почему́." }] }
      ] },
    { id: "u8m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Experiencias y tu historia", resumen: "Я был в Пари́же. Я роди́лся в…",
      intro: "Más allí de ayer: viajes, lugares donde estuviste, cosas que hiciste por primera vez y tu propia historia.",
      secciones: [
        { id: "u8-byl-vs-ezdil", titulo: "Estuve en París o fui a París",
          texto: "Para un viaje hay dos formas, con el caso que corresponde:\nЯ был в Пари́же: dónde estuviste (в + prepositivo).\nЯ е́здил в Пари́ж: adónde fuiste y volviste (в + acusativo).\nLas dos cuentan la misma experiencia; cambia el caso.",
          ejemplos: [
            { ru: "Я {был в Пари́же}.", es: "Estuve en París.", por: "был + dónde: Пари́же." },
            { ru: "Я {е́здил в Пари́ж}.", es: "Fui a París.", por: "е́здил + adónde: Пари́ж." },
            { ru: "Она́ {была́ в Москве́}.", es: "Ella estuvo en Moscú.", por: "Москве́: prepositivo." },
            { ru: "Она́ {е́здила в Москву́}.", es: "Ella fue a Moscú.", por: "Москву́: acusativo." }],
          destacado: "был в Пари́же · е́здил в Пари́ж",
          errores: [
            { mal: "Я был в Пари́ж.", bien: "Я был {в Пари́же}.", por: "Con был, dónde: prepositivo." },
            { mal: "Я е́здил в Пари́же.", bien: "Я е́здил {в Пари́ж}.", por: "Con е́здил, adónde: acusativo." }],
          chequeo: [{ pide: "Мы бы́ли ___.", opciones: ["в Мадри́де", "в Мадри́д"], ok: "в Мадри́де", por: "Con бы́ли, dónde: prepositivo." }] },
        { id: "u8-nunca", titulo: "Nunca, por primera vez",
          texto: "Para las experiencias:\nникогда́ не + verbo: Я никогда́ не́ был в Москве́ («nunca estuve en Moscú»).\nвпервы́е (por primera vez): Я впервы́е был в Москве́ в про́шлом году́.\nPara preguntar si alguien estuvo alguna vez, alcanza con la pregunta: Ты был в Москве́?",
          ejemplos: [
            { ru: "Я {никогда́ не́ был} в Ри́ме.", es: "Nunca estuve en Roma.", por: "никогда́ + не, como en presente." },
            { ru: "Мы {впервы́е} е́здили на мо́ре.", es: "Fuimos al mar por primera vez.", por: "впервы́е, sin preposición." },
            { ru: "Ты {был} на экску́рсии?", es: "¿Estuviste en la excursión?", por: "на экску́рсии: prepositivo." }],
          errores: [{ mal: "Я никогда́ был в Москве́.", bien: "Я никогда́ {не́} был в Москве́.", por: "Con никогда́ hace falta не." }],
          mas: { texto: "Para contar un viaje sirve todo lo de la unidad: Ле́том мы е́здили на мо́ре. Бы́ло жа́рко. Мы ходи́ли на экску́рсии, купи́ли сувени́ры и сфотографи́ровали го́ры… El viaje (fuimos y volvimos), cómo fue, lo que pasaba y lo que hicimos de a una cosa.",
            ejemplos: [
              { ru: "Мы {купи́ли} сувени́р.", es: "Compramos un recuerdo.", por: "Resultado: lo tenemos." },
              { ru: "Я {сфотографи́ровал} го́ру.", es: "Le saqué una foto a la montaña.", por: "сфотографи́ровать: de resultado." }] },
          chequeo: [{ pide: "«Nunca estuve en Londres».", opciones: ["Я никогда́ не́ был в Ло́ндоне.", "Я никогда́ был в Ло́ндоне."], ok: "Я никогда́ не́ был в Ло́ндоне.", por: "никогда́ + не." }] },
        { id: "u8-biografia", titulo: "Tu historia",
          texto: "Con unos pocos verbos cuentas tu vida:\nроди́ться (nacer): роди́лся, родила́сь\nвы́расти (crecer): вы́рос, вы́росла\nжить (vivir): жил, жила́\nучи́ться (estudiar): учи́лся, учи́лась\nоко́нчить (terminar los estudios): око́нчил шко́лу, университе́т\nперее́хать (mudarse): перее́хал в + adónde\nв де́тстве (en la infancia), в мо́лодости (en la juventud).",
          ejemplos: [
            { ru: "Я {роди́лся} в Буэ́нос-А́йресе.", es: "Nací en Buenos Aires.", por: "Dónde: prepositivo. Una mujer dice родила́сь." },
            { ru: "{В де́тстве} я жил в Мадри́де.", es: "De chico vivía en Madrid.", por: "в де́тстве: prepositivo de де́тство." },
            { ru: "Она́ {око́нчила} университе́т.", es: "Ella terminó la universidad.", por: "Resultado: el título está." },
            { ru: "Пото́м мы {перее́хали} в Барсело́ну.", es: "Después nos mudamos a Barcelona.", por: "Adónde: acusativo." }],
          destacado: "Я роди́лся в… · Я вы́рос в… · Я перее́хал в…",
          ojo: "En родила́сь el acento va al final (роди́лся, родила́сь). En вы́рос no hay **-л**: es especial, como мог.",
          mas: { texto: "Para «casarse» hay dos expresiones según quién: un hombre жени́лся, y con quién va на + prepositivo (Он жени́лся на А́нне); una mujer вы́шла за́муж, palabra por palabra «salió hacia el marido».",
            ejemplos: [
              { ru: "Ива́н {жени́лся} на А́нне.", es: "Iván se casó con Ana.", por: "Lo dice de un hombre: жени́лся на…" },
              { ru: "А́нна {вы́шла за́муж}.", es: "Ana se casó.", por: "De una mujer: вы́шла за́муж." }] },
          chequeo: [{ pide: "Una mujer dice «nací en Madrid»:", opciones: ["Я родила́сь в Мадри́де.", "Я роди́лся в Мадри́де."], ok: "Я родила́сь в Мадри́де.", por: "Mujer: родила́сь." }] }
      ] },
    { id: "u8m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Antes y ahora", resumen: "Ра́ньше я жил…, а тепе́рь я живу́…",
      intro: "Comparar lo que hacías antes con lo que haces ahora, y distinguir lo que se repetía de lo que pasó una vez.",
      secciones: [
        { id: "u8-ranshe", titulo: "Lo que solías hacer",
          texto: "ра́ньше (antes) y тогда́ (en ese entonces) van con el pasado de proceso: cuentan lo que hacías siempre, una costumbre de otra época. En español, «vivía», «me levantaba».",
          ejemplos: [
            { ru: "{Ра́ньше} я {встава́л} в шесть часо́в.", es: "Antes me levantaba a las seis.", por: "Se repetía: встава́л, no встал." },
            { ru: "{Ра́ньше} она́ {жила́} в Москве́.", es: "Antes ella vivía en Moscú.", por: "Duraba: proceso." },
            { ru: "{Тогда́} мы {ча́сто} {ходи́ли} в кино́.", es: "En ese entonces íbamos a menudo al cine.", por: "тогда́ + ча́сто: costumbre." }],
          destacado: "Ра́ньше я встава́л… = Antes me levantaba…",
          errores: [{ mal: "Ра́ньше я ка́ждый день встал в шесть часо́в.", bien: "Ра́ньше я ка́ждый день {встава́л} в шесть часо́в.", por: "Lo que se repetía va con el de proceso." }],
          chequeo: [{ pide: "«Antes me despertaba temprano».", opciones: ["Ра́ньше я просыпа́лся ра́но.", "Ра́ньше я просну́лся ра́но."], ok: "Ра́ньше я просыпа́лся ра́но.", por: "Costumbre: proceso." }] },
        { id: "u8-teper", titulo: "Antes y ahora",
          texto: "сейча́с y тепе́рь (ahora) van con presente. тепе́рь marca el cambio frente a antes: «ahora, en cambio». La comparación entera se une con а:\nРа́ньше я жил в Буэ́нос-А́йресе, а тепе́рь я живу́ в Барсело́не.",
          ejemplos: [
            { ru: "Ра́ньше я {не говори́л} по-ру́сски, а {тепе́рь} {говорю́}.", es: "Antes no hablaba ruso, y ahora hablo.", por: "Pasado / presente, unidos con а." },
            { ru: "Ра́ньше мы {рабо́тали} в о́фисе, а {сейча́с} {рабо́таем} до́ма.", es: "Antes trabajábamos en una oficina y ahora trabajamos en casa.", por: "сейча́с, como тепе́рь: presente." }],
          truco: "ра́ньше / тогда́ → pasado · сейча́с / тепе́рь → presente",
          chequeo: [{ pide: "Тепе́рь я ___ в Барсело́не.", opciones: ["живу́", "жил"], ok: "живу́", por: "тепе́рь: presente." }] },
        { id: "u8-vez-siempre", titulo: "Siempre o una vez",
          texto: "Con todo lo de la unidad, una sola pregunta te dice qué verbo usar: ¿se repetía o duraba (proceso), o pasó una vez y terminó (resultado)?\nРа́ньше я ча́сто чита́л газе́ту («antes leía el diario a menudo»): se repetía.\nВчера́ я прочита́л газе́ту («ayer leí el diario»): una vez, entero.\nY para recordar: по́мнить (acordarse, tener en la memoria) es de proceso; вспо́мнить (acordarse de golpe) y забы́ть (olvidarse), de resultado.",
          ejemplos: [
            { ru: "Ра́ньше я {ча́сто} {покупа́л} газе́ту.", es: "Antes compraba el diario a menudo.", por: "Se repetía: покупа́л." },
            { ru: "Вчера́ я {купи́л} газе́ту.", es: "Ayer compré el diario.", por: "Una vez: купи́л." },
            { ru: "Я {по́мню} де́тство.", es: "Me acuerdo de mi infancia.", por: "по́мнить, en presente: está en la memoria." },
            { ru: "Я {забы́л}, а пото́м {вспо́мнил}.", es: "Me olvidé y después me acordé.", por: "Dos cosas que pasaron una vez." }],
          destacado: "ча́сто, ка́ждый день → proceso · вчера́, оди́н раз → resultado",
          mas: { texto: "Con не, para decir que algo no pasó, casi siempre va el de proceso: Я не чита́л э́ту кни́гу («no leí ese libro», nunca lo leí). El de resultado con не dice otra cosa: que empezaste y no llegaste al final. Я не прочита́л кни́гу = «no terminé el libro».",
            ejemplos: [
              { ru: "Я {не чита́л} э́ту кни́гу.", es: "No leí ese libro.", por: "Nunca lo leí: proceso." },
              { ru: "Я {не прочита́л} кни́гу.", es: "No terminé el libro.", por: "Empecé, pero no llegué al final." }] },
          chequeo: [{ pide: "«Antes escribía cartas a menudo».", opciones: ["Ра́ньше я ча́сто писа́л пи́сьма.", "Ра́ньше я ча́сто написа́л пи́сьма."], ok: "Ра́ньше я ча́сто писа́л пи́сьма.", por: "Se repetía: proceso." }] }
      ] },
    { id: "u8m11", n: 11, tipo: "lectura", titulo: "Lectura", resumen: "Un día, un fin de semana, un viaje, antes y ahora.",
      intro: "Cuatro textos cortos con todo lo de la unidad. Léelos, escúchalos y después contesta." },
    { id: "u8m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мой про́шлый день", resumen: "Tu día de ayer, y antes y ahora.",
      intro: "Escribe cómo fue tu día de ayer, en orden: dónde estuviste, qué hiciste, cómo fue. Por ejemplo: Вчера́ я рабо́тал. Снача́ла я за́втракал до́ма. Пото́м я был на рабо́те. Ве́чером мы ходи́ли в кино́. Э́то бы́ло интере́сно.",
      requisitos: [], consejos: [] },
    { id: "u8m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Formar el pasado, género, был, proceso o resultado, traducción y audio.",
      intro: "Cuarenta ejercicios en ocho partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Formar el pasado", tipos: ["pasado", "pasado-elegir"], n: 6 },
        { nombre: "Género y número", tipos: ["genero", "genero-escribir", "detectar"], n: 6 },
        { nombre: "Был, была́…", tipos: ["byl"], n: 5 },
        { nombre: "Presente → pasado", tipos: ["transformar"], n: 5 },
        { nombre: "Proceso o resultado", tipos: ["aspecto", "pareja"], n: 5 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 6 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
/* Segunda parte del proyecto (página: debajo de la primera) */
const U8_PROYECTO2 = { id: "u8p2", titulo: "Ра́ньше и сейча́с",
  intro: "Ahora compara: qué hacías antes y qué haces ahora. Por ejemplo: Ра́ньше я жил в Буэ́нос-А́йресе, а тепе́рь я живу́ в Барсело́не. Ра́ньше я не говори́л по-ру́сски. Сейча́с я изуча́ю ру́сский.",
  requisitos: [], consejos: [] };

/* Además, la terminación -л va sin negrita, igual que -ла, -ло, -ли (Manu, 05/10/2026) */
function u8Palabras(t) { return String(t).replace(/(^|[^А-Яа-яЁё\u0301{])-л(?![А-Яа-яЁё\u0301}])/g, "$1-{л}").replace(/(\+ )л( \/)/g, "$1{л}$2").replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_8.modulos.concat([U8_PROYECTO2]).forEach(m => {
  if (m.intro) m.intro = u8Palabras(m.intro);
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (11/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u8Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u8Palabras(o.por); if (o && o.pide) o.pide = u8Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u8Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u8Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad8Modulo(id) { return UNIDAD_8.modulos.find(m => m.id === id) || null; }

const U8_MEZCLA = { "ahora-antes": 1, transformar: 2, pasado: 3, "pasado-elegir": 1, genero: 1, "genero-escribir": 2, detectar: 1, cuando: 1, "es-ru": 3, dictado: 3, byl: 2,
  pregunta: 2, respuesta: 2, conector: 1, ordenar: 1, potomu: 1, experiencia: 1, "antes-ahora": 2, emparejar: 1, significado: 1, "palabra-es-ru": 1, lectura: 2, "lectura-vf": 1,
  /* Aspecto (11/10/2026): la pareja de resultado y escribir con el verbo que va */
  pareja: 1, aspecto: 2,
  /* Tipos nuevos (11/10/2026): entender la regla, ~20 % de la sesión */
  porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1, desarmar: 1 };

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
  /* Parejas de aspecto: proceso (sin acento) → { ac, id, p } del de resultado */
  const par = {};
  U8_PARES.concat(U8_PARES_MAS).forEach(([i, r]) => { const e = lex(r, "verbo"), v = e && verboById(e.id); if (v && v.pasado) par[sin(i)] = { ac: e.acento, id: e.id, p: v.pasado }; });
  return (u8Datos.cache = { sin, lex, verb, par });
}
/* «**рабо́тать → она́ рабо́тала**: femenino, -ла» */
function u8Regla(v, g) {
  const fin = { m: "-л", f: "-ла", n: "-ло", pl: "-ли" }[g], quien = { m: "masculino", f: "femenino", n: "neutro", pl: "plural" }[g];
  return "**" + v.ac + " → " + v.p[g] + "**: " + quien + ", " + fin + ".";
}

function ejerciciosUnidad8() {
  const { sin, lex, verb, par } = u8Datos();
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
    /* «Ayer leí un libro»: también vale el de resultado (прочита́л), si hay un objeto (11/10/2026) */
    const r = par[sin(vk)];
    if (r && comp && comp[0] && !/^(в|на|до́ма)( |$)/.test(comp[0])) esperadas.slice().forEach(x => { for (const k of ["m", "f", "pl"]) if (x.indexOf(" " + v.p[k] + " ") >= 0) esperadas.push(x.replace(" " + v.p[k] + " ", " " + r.p[k] + " ")); });

    /* El cuándo puede ir al principio, después de quién o al final (24/10/2026): Вчера́ я рабо́тал до́ма =
       Я вчера́ рабо́тал до́ма = Я рабо́тал до́ма вчера́. */
    if (tiempo) esperadas.slice().forEach(x => {
      const ini = cap(tiempo[0]) + " " + sujRu + " "; if (x.indexOf(ini) !== 0) return;
      const resto = x.slice(ini.length).replace(/[.?!]$/, ""), S = cap(sujRu);
      [S + " " + tiempo[0] + " " + resto + ".", S + " " + resto + " " + tiempo[0] + "."].forEach(y => { if (esperadas.indexOf(y) < 0) esperadas.push(y); });
    });
    return { ru, es, esperadas, v, g, f };
  };
  const pista = s => s[4] ? " (" + (s[0] === "Я" ? "eres " + s[4] : "le hablas " + s[4]) + ")" : "";

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
    out.push(Object.assign({ id: "U8-tr1-" + j, tipo: "transformar", forma: "escribir", dificultad: 2, modulo: 1, pide: "Pásala al pasado" + pista(s) + ".", grande: pres, audio: pas.ru, audioManual: true,
      esperadas: pas.esperadas, idioma: "ru", explicacion: u8Regla(v, pas.g) + " " + pas.ru + " — " + pas.es }, base));
  });

  /* ── Módulo 2: formar el pasado ── */
  activ.concat(["ходи́ть", "е́здить"]).forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    const base = { items: ["lex:" + v.id] };
    [["он", "m"], ["она́", "f"], ["они́", "pl"]].forEach(([pr, g], k) => {
      out.push(Object.assign({ id: "U8-pas-" + v.id + "-" + g, grupo: v.id + "-" + g, tipo: "pasado", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribe el pasado.", grande: pr + " + " + v.ac,
        audio: cap(pr) + " " + v.p[g], audioManual: true, esperadas: [v.p[g], cap(pr) + " " + v.p[g]], idioma: "ru", explicacion: u8Regla(v, g) }, base));
    });
    out.push(Object.assign({ id: "U8-pel-" + v.id, grupo: v.id + "-e", tipo: "pasado-elegir", forma: "elegir", dificultad: 1, modulo: 2, pide: "Elige el pasado de «" + v.ac + "» para она́.", grande: "Она́ _____",
      opciones: baraja(uniq([v.p.f, v.p.m, v.p.pl, v.pres ? v.pres[2] : v.p.n]), j), correcta: v.p.f, explicacion: u8Regla(v, "f") }, base));
    if (j % 3 === 0) out.push(Object.assign({ id: "U8-pemp-" + v.id, grupo: v.id + "-p", tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 2, pide: "Une cada persona con su forma de «" + v.ac + "».",
      pares: [["он", v.p.m], ["она́", v.p.f], ["оно́", v.p.n], ["они́", v.p.pl]], explicacion: v.ac + ": " + v.p.m + " · " + v.p.f + " · " + v.p.n + " · " + v.p.pl }, base));
  });

  /* ── Módulo 3: género ── */
  activAyer.forEach((vk, j) => {
    const v = V(vk), comp = (U8_COMP[vk] || [["", ""]])[j % (U8_COMP[vk] || [1]).length] || ["", ""];
    const s = U8_SUJ[[9, 10, 11, 12, 13, 14, 15, 16, 17, 6, 8][j % 11]], f = frase(s, vk, comp, j % 2 ? U8_TIEMPO[0] : null);
    const base = { grupo: "G-" + j, items: ["lex:" + v.id], oir: f.ru };
    const hueco = f.ru.replace(" " + f.f + (comp[0] ? " " : "."), " _____" + (comp[0] ? " " : "."));
    out.push(Object.assign({ id: "U8-gen-" + j, tipo: "genero", forma: "elegir", dificultad: 1, modulo: 3, pide: "Completa: «" + f.es + "»", grande: hueco,
      opciones: baraja(uniq([v.p.m, v.p.f, v.p.pl]), j), correcta: f.f, explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-genw-" + j, tipo: "genero-escribir", forma: "escribir", dificultad: 2, modulo: 3, pide: "Completa con «" + v.ac + "» en pasado.", grande: hueco, pista: f.es,
      audio: f.ru, audioManual: true, esperadas: [f.f], idioma: "ru", explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    /* Detecta el error: el género que no va */
    const malG = f.g === "f" ? "m" : "f", malF = v.p[malG];
    if (j % 2 === 0) { const pals = sinP(f.ru).split(" "), k = pals.indexOf(f.f); if (k >= 0) { pals[k] = malF;
      out.push(Object.assign({ id: "U8-det-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, pide: "Toca la palabra que está mal.", palabras: pals, correcta: k,
        explicacion: "**" + malF + "** no va con " + s[0] + ": " + u8Regla(v, f.g) + " " + f.ru }, base)); } }
  });
  /* Ива́н рабо́тал → А́нна ___ */
  [["Ива́н", "А́нна", "рабо́тать"], ["Брат", "Сестра́", "чита́ть"], ["Па́па", "Ма́ма", "гото́вить"], ["Ди́ма", "Ма́ша", "гуля́ть"], ["А́нна", "Мы", "отдыха́ть"], ["Сестра́", "Де́ти", "игра́ть"]].forEach(([a, b, vk], j) => {
    const v = V(vk), A = U8_SUJ.find(x => x[0] === a), B = U8_SUJ.find(x => x[0] === b);
    const ru = b + " " + v.p[B[2]] + ".";
    out.push({ id: "U8-gtr-" + j, tipo: "genero-escribir", forma: "escribir", dificultad: 2, modulo: 3, grupo: "GT-" + j, items: ["lex:" + v.id], oir: ru, pide: "Cambia quién lo hace: " + b + ".",
      grande: a + " " + v.p[A[2]] + ".", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: u8Regla(v, B[2]) + " " + ru });
  });

  /* ── Módulo 4: cuándo ── */
  U8_TIEMPO.forEach(([ru, es], j) => {
    out.push({ id: "U8-tsig-" + j, tipo: "cuando", forma: "elegir", dificultad: 1, modulo: 4, grupo: "T-" + j, items: [], oir: ru, pide: "¿Cómo se dice «" + es + "»?",
      opciones: baraja([ru].concat(baraja(U8_TIEMPO.filter(x => x[0] !== ru).map(x => x[0]), j).slice(0, 2)), j), correcta: ru, explicacion: ru + " — " + es });
    out.push({ id: "U8-tw-" + j, tipo: "cuando", forma: "escribir", dificultad: 2, modulo: 4, grupo: "TW-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  ["рабо́тать", "смотре́ть", "чита́ть", "гуля́ть", "гото́вить", "у́жинать", "покупа́ть", "слу́шать"].forEach((vk, j) => {
    const v = V(vk), comp = (U8_COMP[vk] || [["", ""]])[0], s = U8_SUJ[[0, 1, 4, 5, 6, 9, 10, 8][j % 8]], t = U8_TIEMPO[(j + 1) % U8_TIEMPO.length];
    const f = frase(s, vk, comp, t), base = { grupo: "C-" + j, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U8-cesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 4, pide: "Escribe en ruso: «" + f.es + "»" + pista(s), audio: f.ru, audioManual: true,
      esperadas: f.esperadas, idioma: "ru", explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-cdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 4, pide: "Escucha y escribe la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: f.ru + " — " + f.es }, base));
  });

  /* ── Módulo 5: verbos de todos los días (frases) y ходи́л / е́здил ── */
  activAyer.concat(["ходи́ть", "е́здить"]).forEach((vk, j) => {
    const v = V(vk); if (!v) return;
    (U8_COMP[vk] || [["", ""]]).forEach((comp, c) => {
      const s = U8_SUJ[(j * 3 + c * 5) % 9], f = frase(s, vk, comp, c % 2 ? null : U8_TIEMPO[0]);
      const base = { grupo: "V-" + j + "-" + c, items: ["lex:" + v.id], oir: f.ru };
      const exp = u8Regla(v, f.g) + (v.tipo === "x" ? " En pasado, «fui» es ходи́л / е́здил: fui y volví." : "") + " " + f.ru + " — " + f.es;
      out.push(Object.assign({ id: "U8-vesru-" + j + "-" + c, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, pide: "Escribe en ruso: «" + f.es + "»" + pista(s), audio: f.ru, audioManual: true,
        esperadas: f.esperadas, idioma: "ru", explicacion: exp }, base));
      if (c === 0) out.push(Object.assign({ id: "U8-vdic-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, pide: "Escucha y escribe la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru", explicacion: exp }, base));
      if (c === 0 && j % 2 === 0) { const w = sinP(f.ru).split(" "); let fi = baraja(w, j + 3); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
        out.push(Object.assign({ id: "U8-vord-" + j, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: 5, pide: "Ordena: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: w.join(" "), esperadas: f.esperadas.map(sinP), explicacion: exp }, base)); }
    });
  });

  /* ── Módulo 6: был ── */
  U8_COMP["быть"].forEach((comp, c) => [0, 1, 5, 6, 9, 10].forEach((si, k) => {
    if ((c + k) % 2) return;
    const s = U8_SUJ[si], v = V("быть"), f = frase(s, "быть", comp, k % 3 === 0 ? U8_TIEMPO[0] : null);
    const pres = s[0] + " " + comp[0] + ".";
    const base = { grupo: "B-" + c + "-" + k, items: ["lex:" + v.id], oir: f.ru };
    out.push(Object.assign({ id: "U8-byl-" + c + "-" + k, tipo: "byl", forma: "elegir", dificultad: 1, modulo: 6, pide: "Completa: «" + f.es + "»" + pista(s), grande: f.ru.replace(" " + f.f + " ", " _____ "),
      opciones: ["был", "была́", "бы́ло", "бы́ли"], correcta: f.f, explicacion: u8Regla(v, f.g) + " " + f.ru }, base));
    out.push(Object.assign({ id: "U8-bytr-" + c + "-" + k, tipo: "transformar", forma: "escribir", dificultad: 2, modulo: 6, pide: "Pásala al pasado" + pista(s) + ".", grande: pres, audio: f.ru, audioManual: true,
      esperadas: f.esperadas.map(x => x.replace(/^Вчера́ [а-яё́]+ /i, m => m)).concat(f.esperadas.map(x => x.replace(/^Вчера́ /, "").replace(/^([а-яё])/, m => m.toUpperCase()))), idioma: "ru",
      explicacion: "En presente быть no se dice; en pasado sí: " + f.ru }, base));
  }));
  [["Э́то бы́ло интере́сно.", "Fue interesante."], ["Вчера́ бы́ло хо́лодно.", "Ayer hizo frío."], ["Бы́ло хо́лодно, но интере́сно.", null], ["Э́то бы́ло вчера́.", "Fue ayer."]].forEach(([ru, es], j) => {
    if (!es) return;
    out.push({ id: "U8-bylo-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 6, grupo: "BO-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru + " Para decir cómo fue algo, **бы́ло**." });
  });
  /* ¿Dónde estuviste? con emoji */
  [["🏦", "в ба́нке"], ["🍽️", "в рестора́не"], ["🏠", "до́ма"], ["💼", "на рабо́те"], ["🌳", "в па́рке"], ["🎬", "в кино́"]].forEach(([em, lugar], j) => {
    const q = j % 2 ? "Где ты была́ вчера́?" : "Где ты был вчера́?", f = j % 2 ? "была́" : "был";
    const ru = "Я " + f + " " + lugar + ".";
    out.push({ id: "U8-bsc-" + j, tipo: "byl", forma: "escribir", dificultad: 2, modulo: 6, grupo: "BS-" + j, items: [], oir: ru, contexto: [{ p: "—", ru: q }], pide: "Mira el dibujo y contesta.", grande: em,
      audio: q, audioManual: true, esperadas: [ru, "Вчера́ я " + f + " " + lugar + ".", cap(lugar) + "."], idioma: "ru", explicacion: "— " + q + " — " + ru + (j % 2 ? " (la pregunta es a una mujer: была́)." : "") });
  });

  /* ── Módulo 5: preguntas y respuestas (estaban en el 7 hasta el 11/10/2026) ── */
  [["Что ты де́лал вчера́?", "¿Qué hiciste ayer? (a un hombre)"], ["Что ты де́лала вчера́?", "¿Qué hiciste ayer? (a una mujer)"], ["Где ты был?", "¿Dónde estuviste? (a un hombre)"],
   ["Где ты была́?", "¿Dónde estuviste? (a una mujer)"], ["Что вы де́лали?", "¿Qué hicieron ustedes?"], ["Когда́ э́то бы́ло?", "¿Cuándo fue?"], ["Где вы бы́ли вчера́?", "¿Dónde estuvieron ayer?"]].forEach(([ru, es], j) => {
    out.push({ id: "U8-preg-" + j, tipo: "pregunta", forma: "escribir", dificultad: 3, modulo: 5, grupo: "PQ-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: ru });
  });
  [["🎬", "смотре́ть", "фильм"], ["💻", "рабо́тать", ""], ["📖", "чита́ть", "кни́гу"], ["🍳", "гото́вить", "у́жин"], ["🌳", "гуля́ть", "в па́рке"], ["😴", "спать", ""]].forEach(([em, vk, comp], j) => {
    const v = V(vk), fem = j % 2 === 1, q = "Что ты " + (fem ? "де́лала" : "де́лал") + " вчера́?", f = fem ? v.p.f : v.p.m;
    const ru = "Я " + f + (comp ? " " + comp : "") + ".";
    out.push({ id: "U8-resp-" + j, tipo: "respuesta", forma: "escribir", dificultad: 2, modulo: 5, grupo: "RS-" + j, items: ["lex:" + v.id], oir: ru, contexto: [{ p: "—", ru: q }],
      pide: em + " Contesta en ruso.", audio: q, audioManual: true, esperadas: [ru, "Вчера́ я " + f + (comp ? " " + comp : "") + "."], idioma: "ru",
      explicacion: "— " + q + " — " + ru + (fem ? " La pregunta es a una mujer: la respuesta va en femenino." : "") });
    out.push({ id: "U8-pgen-" + j, tipo: "pregunta", forma: "elegir", dificultad: 1, modulo: 5, grupo: "PG-" + j, items: [], oir: q, pide: "Le preguntas " + (fem ? "a una amiga" : "a un amigo") + ": «¿Qué hiciste ayer?»",
      opciones: ["Что ты де́лал вчера́?", "Что ты де́лала вчера́?"], correcta: q, explicacion: q + (fem ? " A una mujer: де́лала." : " A un hombre: де́лал.") });
  });

  /* ── Módulo 8: conectores, porque ── */
  Object.keys(U8_CONECT).forEach((w, j) => {
    out.push({ id: "U8-cosig-" + j, tipo: "conector", forma: "elegir", dificultad: 1, modulo: 8, grupo: "CO-" + j, items: [], oir: w, pide: "¿Qué significa?", grande: w, audio: w,
      opciones: baraja([U8_CONECT[w]].concat(baraja(Object.values(U8_CONECT).filter(x => x !== U8_CONECT[w]), j).slice(0, 2)), j), correcta: U8_CONECT[w], explicacion: w + " — " + U8_CONECT[w] });
  });
  [["Снача́ла я просну́лся.", "Пото́м я встал.", "Зате́м я поза́втракал.", "Наконе́ц я прочита́л газе́ту."], ["Снача́ла мы купи́ли хлеб.", "Пото́м мы пригото́вили у́жин.", "Зате́м мы поу́жинали.", "Наконе́ц мы посмотре́ли фильм."]].forEach((L, j) => {
    let fi = baraja(L, j + 4); if (fi.join("|") === L.join("|")) fi = fi.slice(1).concat(fi[0]);
    out.push({ id: "U8-seq-" + j, tipo: "conector", forma: "ordenar", dificultad: 2, modulo: 8, grupo: "SQ-" + j, items: [], pide: "Ordena el relato.", fichas: fi, sep: "\n", esperada: L.join("\n"), audio: L.join(" "),
      explicacion: "снача́ла → пото́м → зате́м → наконе́ц; una cosa después de otra, cada una terminada: verbos de resultado. " + L.join(" "), regla: "u8-orden-perf" });
  });
  [["Почему́ ты был до́ма?", "Потому́ что бы́ло хо́лодно.", "Porque hizo frío."], ["Почему́ ты не рабо́тал?", "Потому́ что я был в Москве́.", "Porque estuve en Moscú."],
   ["Почему́ вы бы́ли в це́нтре?", "Потому́ что мы ходи́ли в кино́.", "Porque fuimos al cine."], ["Почему́ ты не спал?", "Потому́ что я чита́л кни́гу.", "Porque leí un libro."]].forEach(([q, r, es], j) => {
    out.push({ id: "U8-pq-" + j, tipo: "potomu", forma: "escribir", dificultad: 3, modulo: 8, grupo: "PQR-" + j, items: [], oir: r, contexto: [{ p: "—", ru: q }], pide: "Contesta: «" + es + "»", audio: q, audioManual: true,
      esperadas: [r], idioma: "ru", explicacion: "— " + q + " — " + r + " Почему́? → Потому́ что…" });
  });
  [["Бы́ло хо́лодно, но интере́сно.", "Hizo frío, pero fue interesante."], ["Я рабо́тал, но ве́чером гуля́л.", "Trabajé, pero por la noche paseé."], ["Снача́ла я прочита́л газе́ту, пото́м посмотре́л фильм.", "Primero leí el diario, después miré una película."]].forEach(([ru, es], j) => {
    out.push({ id: "U8-coesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "CE-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "» (eres hombre)", audio: ru, audioManual: true,
      esperadas: [ru, ru.replace(/(рабо́тал|гуля́л|прочита́л|посмотре́л)/g, "$1а")], idioma: "ru", explicacion: ru });
  });

  /* ── Módulo 9: experiencias (был в / е́здил в) ── */
  [["Москва́", "в Москве́", "в Москву́", "Moscú"], ["Пари́ж", "в Пари́же", "в Пари́ж", "París"], ["Мадри́д", "в Мадри́де", "в Мадри́д", "Madrid"], ["Рим", "в Ри́ме", "в Рим", "Roma"], ["Ло́ндон", "в Ло́ндоне", "в Ло́ндон", "Londres"]].forEach(([c, prep, acc, es], j) => {
    const s = U8_SUJ[[0, 1, 5, 6, 4][j]], vb = V("быть"), ve = V("е́здить");
    const ru1 = s[0] + " " + vb.p[s[2]] + " " + prep + ".", ru2 = s[0] + " " + ve.p[s[2]] + " " + acc + ".";
    const es1 = cap(((s[1] ? s[1] + " " : "") + vb.pret[s[3]] + " en " + es).trim()) + ".", es2 = cap(((s[1] ? s[1] + " " : "") + ve.pret[s[3]] + " a " + es).trim()) + ".";
    const base = { grupo: "EX-" + j, items: [], oir: ru1 };
    out.push(Object.assign({ id: "U8-ex1-" + j, tipo: "experiencia", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribe en ruso: «" + es1 + "»" + pista(s), audio: ru1, audioManual: true,
      esperadas: [ru1].concat(s[0] === "Я" ? [ru1.replace(" " + vb.p[s[2]] + " ", " " + vb.p[s[2] === "m" ? "f" : "m"] + " ")] : []), idioma: "ru", explicacion: "Dónde estuviste: prepositivo. " + ru1 }, base, { grupo: "EX1-" + j }));
    out.push(Object.assign({ id: "U8-ex2-" + j, tipo: "experiencia", forma: "escribir", dificultad: 3, modulo: 9, pide: "Escribe en ruso: «" + es2 + "»" + pista(s), audio: ru2, audioManual: true,
      esperadas: [ru2].concat(s[0] === "Я" ? [ru2.replace(" " + ve.p[s[2]] + " ", " " + ve.p[s[2] === "m" ? "f" : "m"] + " ")] : []), idioma: "ru", explicacion: "Adónde fuiste: acusativo, con е́здил. " + ru2 }, base, { grupo: "EX2-" + j }));
    out.push(Object.assign({ id: "U8-ex3-" + j, tipo: "experiencia", forma: "elegir", dificultad: 2, modulo: 9, pide: "Completa: «" + es2 + "»", grande: s[0] + " " + ve.p[s[2]] + " _____.",
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
    out.push(Object.assign({ id: "U8-ah1-" + j, tipo: "antes-ahora", forma: "escribir", dificultad: 3, modulo: 10, pide: "Escribe en ruso: «" + esAf + "»" + pista(s), audio: ruA, audioManual: true,
      esperadas: [ruA, ruA.replace(" " + v.p[g] + " ", " " + v.p[g === "m" ? "f" : "m"] + " ")], idioma: "ru", explicacion: "ра́ньше → pasado: " + u8Regla(v, g) + " " + ruA }, base));
    out.push(Object.assign({ id: "U8-ah2-" + j, tipo: "antes-ahora", forma: "escribir", dificultad: 3, modulo: 10, pide: "Escribe en ruso: «" + esHf + "»", audio: ruH, audioManual: true,
      esperadas: [ruH, ruH.replace("Тепе́рь", "Сейча́с")], idioma: "ru", explicacion: "тепе́рь / сейча́с → presente: " + ruH }, base));
    out.push(Object.assign({ id: "U8-ah3-" + j, tipo: "antes-ahora", forma: "elegir", dificultad: 2, modulo: 10, pide: "Completa: «" + esAf + "»", grande: "Ра́ньше я _____ " + antes + ".",
      opciones: baraja([v.p[g], pres], j), correcta: v.p[g], explicacion: "Con ра́ньше va el pasado: " + ruA }, base));
  });
  [["Ра́ньше я не говори́л по-ру́сски.", "Antes no hablaba ruso. (eres hombre)"], ["Тогда́ я жила́ в Москве́.", "En ese entonces vivía en Moscú. (eres mujer)"], ["Ра́ньше мы рабо́тали в о́фисе.", "Antes trabajábamos en una oficina."]].forEach(([ru, es], j) =>
    out.push({ id: "U8-ah4-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "AH4-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 11: lecturas ── */
  U8_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U8-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 11, grupo: "L8-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U8-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 11, grupo: "L8v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* ── Vocabulario nuevo (11/10/2026): significado y palabra-es-ru, en el módulo donde se presenta ── */
  const modDe = {};
  Object.keys(U8_VISTAS).forEach(m => U8_VISTAS[m].split(" ").forEach(ru => { if (U8_GLOSA[ru]) modDe[ru] = +m; }));
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(8) >= 0 && U8_GLOSA[e.acento] && modDe[e.acento]);
  nuevas.forEach((e, i) => {
    const es = U8_GLOSA[e.acento], m = modDe[e.acento];
    const dis = baraja(nuevas.filter(x => x.id !== e.id && Math.abs(modDe[x.acento] - m) <= 1).map(x => U8_GLOSA[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru };
    if (dis.length >= 2) out.push(Object.assign({ id: "U8-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U8-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });

  /* ══ Profundización (11/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar (~20 % de la sesión),
     más pareja (la pareja de resultado) y aspecto (escribir con el verbo que va). */
  const push = o => out.push(o);
  const PV = ac => { const e = lex(ac, "verbo"), v = e && verboById(e.id); return v && v.pasado ? { id: e.id, ac: e.acento, p: v.pasado, pres: v.presente } : null; };
  const G3 = ["Lo hace un hombre", "Lo hace una mujer", "Son varios (o вы)"];
  const gIdx = g => ({ m: 0, f: 1, pl: 2 })[g];
  const QUIEN = [["Я", "m", "un hombre"], ["Я", "f", "una mujer"], ["Ива́н", "m"], ["А́нна", "f"], ["Мы", "pl"], ["Они́", "pl"], ["Па́па", "m"], ["Ма́ма", "f"], ["Брат", "m"], ["Сестра́", "f"], ["Де́ти", "pl"], ["Вы", "pl"]];
  const fin = { m: "**-л**", f: "**-ла**", n: "**-ло**", pl: "**-ли**" };
  const opAc = arr => arr;   /* las opciones son frases: llevan acento todas */

  /* ── Módulo 1: un pasado para todo ── */
  [["рабо́тать", "до́ма"], ["чита́ть", "кни́гу"], ["смотре́ть", "фильм"], ["гуля́ть", "в па́рке"], ["гото́вить", "у́жин"], ["слу́шать", "му́зыку"], ["жить", "в Мадри́де"], ["изуча́ть", "ру́сский"], ["говори́ть", "по-ру́сски"], ["отдыха́ть", "до́ма"]].forEach(([vk, comp], j) => {
    const v = V(vk), s = QUIEN[j % 6], ok = s[0] + " " + v.p[s[1]] + " " + comp + ".", mal = s[0] + " " + V("быть").p[s[1]] + " " + v.p[s[1]] + " " + comp + ".";
    push({ id: "U8-nat-aux-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 1, regla: "u8-un-pasado", grupo: "NA-" + j, items: ["lex:" + v.id], oir: ok,
      pide: (s[2] ? "Habla " + s[2] + ". " : "") + "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " El pasado es una sola palabra: sin был adelante." });
  });
  [["ра́ньше", "Antes", "рабо́тать", "в ба́нке", "trabajaba en un banco"], ["вчера́", "Ayer", "рабо́тать", "до́ма", "trabajé en casa"], ["ра́ньше", "Antes", "жить", "в Москве́", "vivía en Moscú"],
   ["вчера́", "Ayer", "смотре́ть", "фильм", "miré una película"], ["ра́ньше", "Antes", "изуча́ть", "англи́йский", "estudiaba inglés"], ["вчера́", "Ayer", "гуля́ть", "в па́рке", "paseé por el parque"]].forEach(([t, T, vk, comp, es], j) => {
    const v = V(vk), ok = cap(t) + " я " + v.p.m + " " + comp + ".", mal = cap(t) + " я " + v.pres[0] + " " + comp + ".";
    push({ id: "U8-par-pis-" + j, tipo: "par", forma: "elegir", dificultad: 1, modulo: 1, regla: "u8-pistas", grupo: "PP-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "«" + T + " " + es + "» (eres hombre). ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " Con " + t + " va el pasado, para «" + es.split(" ")[0] + "» y para cualquier otro pasado." });
    if (t === "ра́ньше") push({ id: "U8-pq-pis-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 1, regla: "u8-pistas", grupo: "PP-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "¿Cómo sabes que se entiende «" + es.split(" ")[0] + "» y no un pretérito?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Por ра́ньше: habla de lo de otra época", "Por la terminación **-л**"].map(x => x.replace(/\*\*/g, "")), correcta: "Por ра́ньше: habla de lo de otra época",
      explicacion: ok + " La terminación es la misma para los dos pasados; lo que decide es ра́ньше." });
  });

  /* ── Módulo 2: -л / -ла / -ли, -ся / -сь, especiales ── */
  ["рабо́тать", "чита́ть", "гуля́ть", "гото́вить", "смотре́ть", "слу́шать", "говори́ть", "отдыха́ть", "игра́ть", "за́втракать"].forEach((vk, j) => {
    const v = V(vk);
    [["А́нна", "f"], ["Ива́н", "m"], ["Они́", "pl"]].forEach(([s, g], k) => {
      if ((j + k) % 3 === 2) return;
      const ru = s + " " + v.p[g] + ".";
      push({ id: "U8-pq-g-" + j + "-" + k, tipo: "porque", forma: "elegir", dificultad: 1, modulo: 2, regla: "u8-forma-l", grupo: "FG-" + j + "-" + k, items: ["lex:" + v.id], oir: ru,
        pide: "¿Por qué " + v.p[g] + "?", grande: ru, audio: ru, audioManual: true, opciones: G3, correcta: G3[gIdx(g)], explicacion: ru + " " + G3[gIdx(g)].replace(" (o вы)", "") + ": " + fin[g] + "." });
    });
    const otros = ["рабо́тать", "гуля́ть", "чита́ть", "слу́шать"].filter(x => x !== vk).slice(0, 2).map(V);
    const g = ["f", "pl", "m"][j % 3], pr = { m: "он", f: "она́", pl: "они́" }[g];
    push({ id: "U8-desc-l-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 2, regla: "u8-forma-l", grupo: "FD-" + j, items: ["lex:" + v.id], oir: pr + " " + v.p[g],
      pide: otros.map(o => o.ac + " → " + pr + " " + o.p[g]).join(" · ") + ". ¿Y " + v.ac + "?", opciones: baraja([pr + " " + v.p[g], pr + " " + v.pres[g === "pl" ? 5 : 2]], j), correcta: pr + " " + v.p[g],
      explicacion: v.ac + " → " + pr + " " + v.p[g] + ": sin **-ть** y con " + fin[g] + ", como " + otros.map(o => o.ac).join(" y ") + "." });
  });
  /* -ся / -сь */
  [["учи́ться", "f"], ["учи́ться", "m"], ["возвраща́ться", "f"], ["возвраща́ться", "m"], ["просыпа́ться", "f"], ["просыпа́ться", "pl"], ["ложи́ться", "m"], ["ложи́ться", "pl"]].forEach(([vk, g], j) => {
    const v = V(vk), s = { m: "Брат", f: "Сестра́", pl: "Мы" }[g], ru = s + " " + v.p[g] + ".", vocal = g !== "m";
    const base = { grupo: "SY-" + j, items: ["lex:" + v.id], oir: ru };
    push(Object.assign({ id: "U8-pq-sy-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 2, regla: "u8-forma-sya", pide: "¿Por qué " + (vocal ? "-сь" : "-ся") + "?", grande: ru, audio: ru, audioManual: true,
      opciones: ["Va después de vocal", "Va después de consonante"], correcta: vocal ? "Va después de vocal" : "Va después de consonante",
      explicacion: ru + " **" + v.p[g].replace(/(ся|сь)$/, "") + "** termina en " + (vocal ? "vocal: **-сь**." : "consonante (**л**): **-ся**.") }, base));
    const mal = v.p[g].replace(/(ся|сь)$/, vocal ? "ся" : "сь");
    push(Object.assign({ id: "U8-nat-sy-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u8-forma-sya", pide: "¿Cuál es la correcta?", opciones: baraja([ru, s + " " + mal + "."], j), correcta: ru,
      explicacion: ru + " Después de " + (vocal ? "vocal, **-сь**." : "consonante, **-ся**.") }, base, { grupo: "SYN-" + j }));
  });
  [["просыпа́ться", ["учи́ться", "ложи́ться"], "f"], ["возвраща́ться", ["учи́ться", "просыпа́ться"], "m"], ["ложи́ться", ["возвраща́ться", "учи́ться"], "pl"], ["учи́ться", ["ложи́ться", "возвраща́ться"], "f"]].forEach(([vk, ej, g], j) => {
    const v = V(vk), pr = { m: "он", f: "она́", pl: "они́" }[g], mal = v.p[g].replace(/(ся|сь)$/, g === "m" ? "сь" : "ся");
    push({ id: "U8-desc-sy-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 2, regla: "u8-forma-sya", grupo: "SYD-" + j, items: ["lex:" + v.id], oir: pr + " " + v.p[g],
      pide: ej.map(x => pr + " " + V(x).p[g]).join(" · ") + ". ¿Y " + v.ac + "?", opciones: baraja([pr + " " + v.p[g], pr + " " + mal], j), correcta: pr + " " + v.p[g],
      explicacion: pr + " " + v.p[g] + ": " + (g === "m" ? "después de **л**, **-ся**." : "después de vocal, **-сь**.") });
  });
  /* Especiales */
  [["есть", "f", "Она́", "пи́ццу", "Она́ есла пи́ццу."], ["есть", "m", "Он", "суп", "Он естл суп."], ["идти́", "m", "Я", "домо́й", "Я идл домо́й."], ["идти́", "f", "Она́", "домо́й", "Она́ идла домо́й."],
   ["мочь", "m", "Он", "", "Он могл."], ["мочь", "f", "Она́", "", "Она́ мочла."]].forEach(([vk, g, s, comp, mal], j) => {
    const v = PV(vk), ok = s + " " + v.p[g] + (comp ? " " + comp : "") + ".";
    push({ id: "U8-nat-esp-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u8-especiales", grupo: "ES-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " " + v.ac + " es especial: " + v.p.m + ", " + v.p.f + ", " + v.p.pl + "." });
  });
  /* Cadena: presente → pasado → otra persona */
  [["рабо́тать", "до́ма", 0], ["чита́ть", "кни́гу", 0], ["гото́вить", "у́жин", 0], ["гуля́ть", "в па́рке", 3], ["смотре́ть", "фильм", 0], ["слу́шать", "му́зыку", 3], ["учи́ться", "в Москве́", 0], ["изуча́ть", "ру́сский", 3]].forEach(([vk, comp, iP], j) => {
    const v = V(vk), base = (iP === 3 ? "Мы " : "Я ") + v.pres[iP] + " " + comp + ".", p1 = iP === 3 ? ["Мы " + v.p.pl + " " + comp + "."] : ["Я " + v.p.m + " " + comp + ".", "Я " + v.p.f + " " + comp + "."];
    const s2 = j % 2 ? ["А́нна", "f"] : ["Ива́н", "m"], p2 = s2[0] + " " + v.p[s2[1]] + " " + comp + ".";
    push({ id: "U8-cad-pas-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 2, regla: /ся$/.test(vk) ? "u8-forma-sya" : "u8-forma-l", grupo: "CP-" + j, items: ["lex:" + v.id], oir: p2,
      pide: "Cambia la frase paso a paso.", base, pasos: [{ pide: "Pásala al pasado.", esperadas: p1 }, { pide: "Ahora dilo de " + (s2[1] === "f" ? "Ana" : "Iván") + " (" + s2[0] + ").", esperadas: [p2] }],
      explicacion: base + " → " + p1[0] + " → " + p2 + " " + fin[s2[1]] + " para " + (s2[1] === "f" ? "una mujer." : "un hombre.") });
  });

  /* ── Módulo 3: quién lo hizo ── */
  ["рабо́тать", "чита́ть", "гото́вить", "гуля́ть", "отдыха́ть", "смотре́ть", "слу́шать", "за́втракать"].forEach((vk, j) => {
    const v = V(vk), g = j % 2 ? "f" : "m", ok = "Я " + v.p[g] + ".", mal = "Я " + v.p[g === "f" ? "m" : "f"] + ".";
    push({ id: "U8-nat-yo-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 3, regla: "u8-genero-quien", grupo: "YO-" + j, items: ["lex:" + v.id], oir: ok,
      pide: "Habla " + (g === "f" ? "una mujer" : "un hombre") + ". ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " " + (g === "f" ? "Una mujer: " : "Un hombre: ") + fin[g] + "." });
    push({ id: "U8-oido-yo-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 3, regla: "u8-genero-quien", grupo: "YOo-" + j, items: ["lex:" + v.id], oir: "Я " + v.p[j % 3 ? "f" : "m"] + " вчера́.",
      pide: "Escucha: ¿quién habla?", audio: "Я " + v.p[j % 3 ? "f" : "m"] + " вчера́.", opciones: ["Un hombre", "Una mujer"], correcta: j % 3 ? "Una mujer" : "Un hombre",
      explicacion: "Sonó **" + v.p[j % 3 ? "f" : "m"] + "**: " + (j % 3 ? "con **-ла**, habla una mujer." : "con **-л**, habla un hombre.") });
    const t = j % 2 ? ["Ты", "a una amiga", "f"] : ["Ты", "a un amigo", "m"], q = "Ты " + v.p[t[2]] + " вчера́?";
    push({ id: "U8-nat-ty-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u8-genero-quien", grupo: "TY-" + j, items: ["lex:" + v.id], oir: q,
      pide: "Le preguntas " + t[1] + ". ¿Cuál es la correcta?", opciones: baraja([q, "Ты " + v.p[t[2] === "f" ? "m" : "f"] + " вчера́?"], j + 1), correcta: q, explicacion: q + " " + (t[2] === "f" ? "A una mujer: " : "A un hombre: ") + fin[t[2]] + "." });
  });
  [["Па́па", "m", "гото́вить", "у́жин"], ["Ма́ма", "f", "рабо́тать", "до́ма"], ["Ди́ма", "m", "чита́ть", "кни́гу"], ["Ма́ша", "f", "гуля́ть", "в па́рке"], ["Брат", "m", "смотре́ть", "фильм"], ["Сестра́", "f", "слу́шать", "му́зыку"],
   ["Де́ти", "pl", "игра́ть", "в па́рке"], ["Мы", "pl", "отдыха́ть", "до́ма"], ["Вы", "pl", "рабо́тать", "вчера́"], ["Они́", "pl", "чита́ть", "газе́ту"]].forEach(([s, g, vk, comp], j) => {
    const v = V(vk), ok = s + " " + v.p[g] + " " + comp + ".", malG = g === "pl" ? "m" : g === "m" ? "f" : "m", mal = s + " " + v.p[malG] + " " + comp + ".";
    const regla = g === "pl" ? "u8-plural" : "u8-genero-quien", base = { grupo: "QN-" + j, items: ["lex:" + v.id], oir: ok };
    push(Object.assign({ id: "U8-pq-q-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla, pide: "¿Por qué " + v.p[g] + "?", grande: ok, audio: ok, audioManual: true, opciones: G3, correcta: G3[gIdx(g)],
      explicacion: ok + " " + (s === "Па́па" || s === "Ди́ма" ? s + " termina en -а, pero es un hombre: " : s === "Вы" ? "Con вы, siempre " : G3[gIdx(g)].replace(" (o вы)", "") + ": ") + fin[g] + "." }, base));
    push(Object.assign({ id: "U8-nat-q-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (g === "pl" ? "Varios: **-ли**." : g === "m" ? "Un hombre: **-л**." : "Una mujer: **-ла**.") }, base, { grupo: "QNn-" + j }));
    if (j < 8) push(Object.assign({ id: "U8-diag-q-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 3, regla, pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["La terminación del verbo", "Falta был", "El lugar o el objeto"], correcta: "La terminación del verbo", esperadas: [ok], explicacion: ok + " " + (g === "pl" ? "Varios: **-ли**." : g === "m" ? "Un hombre: **-л**." : "Una mujer: **-ла**.") }, base, { grupo: "QD-" + j }));
  });
  ["рабо́тать", "чита́ть", "гуля́ть", "гото́вить", "отдыха́ть", "слу́шать"].forEach((vk, j) => {
    const v = V(vk), pl = j % 2 === 0, ru = (pl ? "Они́ " + v.p.pl : "Он " + v.p.m) + ".";
    push({ id: "U8-oido-pl-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 3, regla: "u8-plural", grupo: "PLo-" + j, items: ["lex:" + v.id], oir: ru, pide: "Escucha: ¿uno o varios?", audio: ru,
      opciones: ["Uno", "Varios"], correcta: pl ? "Varios" : "Uno", explicacion: "Sonó **" + (pl ? v.p.pl : v.p.m) + "**: " + (pl ? "con **-ли**, varios." : "con **-л**, uno.") });
  });
  [["Э́то", "бы́ло", "интере́сно"], ["Вчера́", "бы́ло", "хо́лодно"], ["Письмо́", "бы́ло", "на столе́"]].forEach(([a, f, b], j) => {
    const ok = a + " " + f + " " + b + ".", mal = a + " " + "был" + " " + b + ".";
    push({ id: "U8-nat-n-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u8-neutro", grupo: "NN-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (j === 2 ? "Письмо́ es neutro: **-ло**." : j === 0 ? "э́то: **-ло**." : "Sin sujeto: **-ло**.") });
  });
  /* Desarmar */
  [["Вчера́", "А́нна", "чита́ла", "кни́гу"], ["Ве́чером", "па́па", "гото́вил", "у́жин"], ["Вчера́", "мы", "смотре́ли", "фильм"], ["У́тром", "сестра́", "слу́шала", "му́зыку"]].forEach((pal, j) => {
    push({ id: "U8-desarm-q-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 3, regla: "u8-genero-quien", grupo: "DQ-" + j, items: [], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: [{ pide: "¿Quién lo hizo?", correcta: 1 }, { pide: "¿Qué hizo? (el verbo)", correcta: 2 }, { pide: "¿Cuándo?", correcta: 0 }],
      explicacion: pal.join(" ") + ". El verbo concuerda con quién: " + pal[1] + " → " + pal[2] + "." });
  });

  /* ── Módulo 4: cuándo pasó ── */
  const kzN = ac => { const e = lex(ac, "sustantivo"); return e ? casosById(e.id) : null; };
  const cuenta = (ac, n) => { const c = kzN(ac); if (n === 1) return c.sg[0]; if (n <= 4) return ac === "год" ? c.sg[1] : c.sg[1]; return c.pl[1]; };
  const NUMS = { 2: "два", 3: "три", 4: "четы́ре", 5: "пять", 6: "шесть", 7: "семь", 10: "де́сять" };
  [["день", 2], ["день", 5], ["год", 3], ["год", 5], ["ме́сяц", 2], ["ме́сяц", 6], ["день", 4], ["год", 10], ["день", 7], ["ме́сяц", 3]].forEach(([w, n], j) => {
    const f = cuenta(w, n), otra = cuenta(w, n <= 4 ? 5 : 2), ok = NUMS[n] + " " + f + " наза́д", gr = n <= 4 ? 1 : 2;
    const base = { grupo: "NZ-" + j, items: ["lex:" + lex(w, "sustantivo").id, "lex:" + lex("наза́д").id] };
    push(Object.assign({ id: "U8-pq-nz-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u8-nazad", oir: ok, pide: "¿Por qué «" + f + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Va después de 2, 3 o 4", "Va después de 5 o más"], correcta: gr === 1 ? "Va después de 2, 3 o 4" : "Va después de 5 o más",
      explicacion: ok + ": " + (gr === 1 ? "con 2, 3 y 4, " + f + "." : "de 5 en adelante, " + f + ".") + (w === "год" && gr === 2 ? " Para los años, лет." : "") }, base));
    push(Object.assign({ id: "U8-nat-nz-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u8-nazad", oir: "Я был там " + ok + ".", pide: "¿Cuál es la correcta?",
      opciones: baraja(["Я был там " + ok + ".", "Я был там " + NUMS[n] + " " + otra + " наза́д."], j), correcta: "Я был там " + ok + ".", explicacion: "Я был там " + ok + ". " + (gr === 1 ? "Con 2, 3 y 4: " : "De 5 en adelante: ") + f + "." }, base, { grupo: "NZn-" + j }));
    if (j % 2 === 0) push(Object.assign({ id: "U8-nat-nzo-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 4, regla: "u8-nazad", oir: "Она́ была́ в Москве́ " + ok + ".", pide: "¿Cuál es la correcta?",
      opciones: baraja(["Она́ была́ в Москве́ " + ok + ".", "Она́ была́ в Москве́ наза́д " + NUMS[n] + " " + f + "."], j + 1), correcta: "Она́ была́ в Москве́ " + ok + ".", explicacion: "Primero cuánto tiempo y después наза́д: " + ok + "." }, base, { grupo: "NZo-" + j }));
  });
  [["день", 3, [2, 4]], ["год", 6, [5, 7]], ["ме́сяц", 4, [2, 3]], ["день", 10, [5, 6]]].forEach(([w, n, ej], j) => {
    const ok = NUMS[n] + " " + cuenta(w, n) + " наза́д";
    push({ id: "U8-desc-nz-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 4, regla: "u8-nazad", grupo: "NZd-" + j, items: [], oir: ok,
      pide: ej.map(k => NUMS[k] + " " + cuenta(w, k) + " наза́д").join(" · ") + ". ¿Y " + NUMS[n] + "?", opciones: baraja([ok, NUMS[n] + " " + cuenta(w, n <= 4 ? 5 : 2) + " наза́д"], j), correcta: ok,
      explicacion: ok + ": el mismo grupo que " + ej.map(k => NUMS[k]).join(" y ") + "." });
  });
  [["на про́шлой неде́ле", "в про́шлой неде́ле", "La semana pasada"], ["в про́шлом году́", "на про́шлом году́", "El año pasado"], ["в про́шлом ме́сяце", "на про́шлом ме́сяце", "El mes pasado"]].forEach(([ok, mal, es], j) => {
    const fr = t => cap(t) + " я был в Москве́.";
    push({ id: "U8-nat-pr-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u8-proshly", grupo: "PR-" + j, items: [], oir: fr(ok), pide: "¿Cuál es la correcta?", opciones: baraja([fr(ok), fr(mal)], j), correcta: fr(ok),
      explicacion: fr(ok) + " " + (j === 0 ? "Con неде́ля va на." : "Con ме́сяц y год va {в}.") });
  });
  [["до́ма", "Я"], ["на рабо́те", "Она́"], ["в кино́", "Мы"], ["в па́рке", "Он"]].forEach(([l, s], j) => {
    const g = { "Я": "m", "Она́": "f", "Мы": "pl", "Он": "m" }[s], ok = "Вчера́ " + s.toLowerCase() + " " + V("быть").p[g] + " " + l + ".";
    push({ id: "U8-nat-est-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 4, regla: "u8-cuando", grupo: "EST-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, "Вчера́ " + s.toLowerCase() + " есть " + l + "."], j), correcta: ok, explicacion: ok + " Con вчера́ va el pasado de быть: " + V("быть").p[g] + "." });
  });
  [["неда́вно", "давно́", "Hace poco"], ["давно́", "неда́вно", "Hace mucho"], ["позавчера́", "вчера́", "Anteayer"], ["вчера́", "позавчера́", "Ayer"]].forEach(([ok, otro, es], j) => {
    push({ id: "U8-par-cu-" + j, tipo: "par", forma: "elegir", dificultad: 1, modulo: 4, regla: "u8-cuando", grupo: "CU-" + j, items: ["lex:" + lex(ok).id], oir: cap(ok) + " я был в Москве́.",
      pide: "«" + es + " estuve en Moscú». ¿Cuál dices?", opciones: baraja([cap(ok) + " я был в Москве́.", cap(otro) + " я был в Москве́."], j), correcta: cap(ok) + " я был в Москве́.", explicacion: ok + " — " + es.toLowerCase() + "." });
  });

  /* ── Módulo 5: ¿qué hiciste? y ходи́л / е́здил ── */
  [["Пари́ж", "в Пари́ж", "e"], ["Москва́", "в Москву́", "e"], ["кино́", "в кино́", "h"], ["магази́н", "в магази́н", "h"], ["Мадри́д", "в Мадри́д", "e"], ["парк", "в парк", "h"], ["Рим", "в Рим", "e"], ["теа́тр", "в теа́тр", "h"]].forEach(([n0, acc, t], j) => {
    const s = QUIEN[[0, 3, 4, 2, 1, 5, 4, 3][j]], vh = V("ходи́ть"), ve = V("е́здить"), ok = s[0] + " " + (t === "e" ? ve : vh).p[s[1]] + " " + acc + ".", mal = s[0] + " " + (t === "e" ? vh : ve).p[s[1]] + " " + acc + ".";
    const base = { grupo: "HE-" + j, items: ["lex:" + (t === "e" ? ve : vh).id], oir: ok };
    if (t === "e") push(Object.assign({ id: "U8-nat-he-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u8-hodil", pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " A otra ciudad no se va a pie: е́здил, en un vehículo." }, base));
    push(Object.assign({ id: "U8-pq-he-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 5, regla: "u8-hodil", pide: "¿Por qué " + (t === "e" ? ve : vh).p[s[1]] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Fue en un vehículo, y volvió", "Fue a pie, y volvió"], correcta: t === "e" ? "Fue en un vehículo, y volvió" : "Fue a pie, y volvió",
      explicacion: ok + " " + (t === "e" ? "е́здил: en un vehículo." : "ходи́л: a pie.") + " Los dos quieren decir «fui y volví»." }, base, { grupo: "HEp-" + j }));
    const prep = n0 === "кино́" ? null : "в " + casosById(lex(n0).id).sg[5];
    if (prep && t === "h") push(Object.assign({ id: "U8-nat-hep-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u8-hodil", pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, s[0] + " " + vh.p[s[1]] + " " + prep + "."], j + 1), correcta: ok, explicacion: ok + " Con ходи́л va adónde: {в} + acusativo." }, base, { grupo: "HEn-" + j }));
  });
  [["рабо́тать", "до́ма"], ["гото́вить", "у́жин"], ["смотре́ть", "телеви́зор"], ["чита́ть", "газе́ту"], ["гуля́ть", "в па́рке"], ["за́втракать", "до́ма"]].forEach(([vk, comp], j) => {
    const v = V(vk), ip = j % 2 ? 3 : 0, base = (ip ? "Мы " : "Я ") + v.pres[ip] + " " + comp + ".", p1 = ip ? ["Вчера́ мы " + v.p.pl + " " + comp + ".", "Мы " + v.p.pl + " " + comp + " вчера́."] : ["Вчера́ я " + v.p.m + " " + comp + ".", "Вчера́ я " + v.p.f + " " + comp + ".", "Я " + v.p.m + " " + comp + " вчера́.", "Я " + v.p.f + " " + comp + " вчера́."];
    const q = ip ? "Что вы де́лали вчера́?" : "Что ты де́лал вчера́?";
    push({ id: "U8-cad-dia-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 5, regla: "u8-dia", grupo: "CD-" + j, items: ["lex:" + v.id], oir: q,
      pide: "Cambia la frase paso a paso.", base, pasos: [{ pide: "Pásala a ayer (вчера́).", esperadas: p1 }, { pide: "Ahora pregunta qué " + (ip ? "hicieron ustedes" : "hizo tu amigo") + " ayer.", esperadas: [q] }],
      explicacion: base + " → " + p1[0] + " → " + q });
  });
  [["Что ты де́лала вчера́?", "Что ты де́лал вчера́?", "a una amiga"], ["Где ты был?", "Где ты была́?", "a un amigo"], ["Где ты была́ вчера́?", "Где ты был вчера́?", "a una amiga"], ["Что вы де́лали?", "Что вы де́лал?", "a varios amigos"]].forEach(([ok, mal, a], j) => {
    push({ id: "U8-nat-pg-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 5, regla: "u8-preguntas", grupo: "PGn-" + j, items: [], oir: ok, pide: "Le preguntas " + a + ". ¿Cuál es la correcta?",
      opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " La pregunta concuerda con la persona a la que le hablas." });
  });

  /* ── Módulo 6: был ── */
  [["m", "Я", "до́ма"], ["f", "Она́", "на рабо́те"], ["pl", "Мы", "в Москве́"], ["f", "Я", "в кино́"], ["m", "Брат", "в Мадри́де"], ["pl", "Они́", "в па́рке"]].forEach(([g, s, l], j) => {
    const b = V("быть"), ok = "Вчера́ " + s.toLowerCase() + " " + b.p[g] + " " + l + ".";
    push({ id: "U8-oido-byl-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-byl-acento", grupo: "BYo-" + j, items: [], oir: ok, pide: "Escucha: ¿qué forma sonó?", audio: ok,
      opciones: g === "pl" ? ["бы́ли", "была́"] : ["был", "была́"], correcta: b.p[g], explicacion: ok + " " + (g === "f" ? "была́, con el acento al final." : g === "pl" ? "бы́ли, con el acento en la raíz." : "был: un hombre.") });
    const pres = s + " " + l + ".", sinB = "Вчера́ " + s.toLowerCase() + " " + l + ".";
    push({ id: "U8-diag-byl-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 6, regla: "u8-byl-acento", grupo: "BYd-" + j, items: [], oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: sinB,
      opciones: ["Falta был", "La terminación del verbo", "El lugar"], correcta: "Falta был", esperadas: [ok], explicacion: ok + " En pasado, быть aparece: " + b.p[g] + "." });
  });
  [["хо́лодно"], ["жа́рко"], ["интере́сно"], ["ве́село"], ["ску́чно"], ["тру́дно"], ["легко́"], ["краси́во"]].forEach(([a], j) => {
    const ok = (j % 2 ? "Вчера́ бы́ло " : "Э́то бы́ло ") + a + ".", mal = (j % 2 ? "Вчера́ был " : "Э́то был ") + a + ".";
    const base = { grupo: "BO-" + j, items: lex(a) ? ["lex:" + lex(a).id] : [], oir: ok };
    push(Object.assign({ id: "U8-nat-bo-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-bylo", pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Para decir cómo fue, бы́ло." }, base));
    if (j < 4) push(Object.assign({ id: "U8-pq-bo-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-bylo", pide: "¿Por qué бы́ло?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Dice cómo fue: sin sujeto, va **-ло**", "Lo dice una mujer"].map(x => x.replace(/\*\*/g, "")), correcta: "Dice cómo fue: sin sujeto, va -ло", explicacion: ok + " Cómo fue algo o cómo estuvo el tiempo: бы́ло." }, base, { grupo: "BOp-" + j }));
  });
  [["дождь", "Вчера́ шёл дождь."], ["снег", "Вчера́ шёл снег."]].forEach(([w, ok], j) => {
    push({ id: "U8-nat-cl-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-bylo", grupo: "CL-" + j, items: ["lex:" + lex(w).id], oir: ok, pide: "¿Cuál es la correcta?",
      opciones: baraja([ok, "Вчера́ шла " + w + "."], j), correcta: ok, explicacion: ok + " " + w + " es masculino: шёл." });
  });
  [["брат", "m"], ["ко́шка", "f"], ["соба́ка", "f"], ["маши́на", "f"], ["о́тпуск", "m"], ["вре́мя", "n"], ["письмо́", "n"], ["кни́ги", "pl"]].forEach(([n0, g], j) => {
    const b = V("быть"), ok = "У меня́ " + b.p[g] + " " + n0 + ".", malG = g === "m" ? "f" : "m", mal = "У меня́ " + b.p[malG] + " " + n0 + ".";
    const base = { grupo: "UM-" + j, items: [], oir: ok };
    push(Object.assign({ id: "U8-nat-um-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-u-menya-byl", pide: (j % 2 ? "Habla un hombre. " : "Habla una mujer. ") + "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " быть concuerda con " + n0 + ", no con quien habla." }, base));
    push(Object.assign({ id: "U8-pq-um-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-u-menya-byl", pide: "¿Por qué " + b.p[g] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Concuerda con " + n0, "Concuerda con quien habla"], correcta: "Concuerda con " + n0, explicacion: ok + " " + n0 + " es " + { m: "masculino", f: "femenino", n: "neutro", pl: "plural" }[g] + ": " + b.p[g] + "." }, base, { grupo: "UMp-" + j }));
  });
  [["Я", "в Москве́"], ["Мы", "там"], ["Он", "до́ма"], ["Они́", "в па́рке"]].forEach(([s, l], j) => {
    const ok = s + " не́ " + (s === "Мы" || s === "Они́" ? "были" : "был") + " " + l + ".";
    push({ id: "U8-oido-nb-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 6, regla: "u8-ne-byl", grupo: "NB-" + j, items: [], oir: ok, pide: "Escucha: ¿estuvo o no estuvo?", audio: ok,
      opciones: ["Estuvo", "No estuvo"], correcta: "No estuvo", explicacion: ok + " Con не, el acento pasa a не́: suena como una sola palabra." });
  });

  /* ── Módulo 7: proceso o resultado ── */
  /* [proceso, resultado, objeto, «resultado» en español, «proceso» en español, marca de proceso] */
  const ASP = [["чита́ть", "прочита́ть", "кни́гу", "ayer terminé de leer el libro", "estuve leyendo un libro dos horas", "два часа́"],
    ["писа́ть", "написа́ть", "письмо́", "ayer escribí la carta (ya está)", "estuve escribiendo una carta toda la noche", "весь ве́чер"],
    ["де́лать", "сде́лать", "рабо́ту", "ayer hice el trabajo (está hecho)", "estuve haciendo el trabajo todo el día", "весь день"],
    ["смотре́ть", "посмотре́ть", "фильм", "ayer terminé de mirar la película", "estuve mirando una película dos horas", "два часа́"],
    ["гото́вить", "пригото́вить", "у́жин", "ayer preparé la cena (está lista)", "estuve preparando la cena mucho tiempo", "до́лго"],
    ["покупа́ть", "купи́ть", "хлеб", "ayer compré pan (ya lo tengo)", "compraba pan a menudo", "ча́сто"],
    ["за́втракать", "поза́втракать", "", "ya desayuné", "desayunaba en casa todos los días", "ка́ждый день"],
    ["обе́дать", "пообе́дать", "", "ya almorcé", "almorzaba en casa a menudo", "ча́сто"],
    ["у́жинать", "поу́жинать", "", "ya cené", "cenaba siempre a las ocho", "всегда́"],
    ["встава́ть", "встать", "", "ayer me levanté a las siete", "antes me levantaba a las siete", "ра́ньше"],
    ["просыпа́ться", "просну́ться", "", "ayer me desperté temprano", "antes me despertaba temprano", "ра́ньше"],
    ["возвраща́ться", "верну́ться", "домо́й", "ayer volví a casa a las ocho", "antes volvía a casa a las ocho", "ра́ньше"]];
  const pv = {}; ASP.forEach(a => { pv[a[0]] = PV(a[0]); pv[a[1]] = PV(a[1]); });
  const frasesAsp = (a, g) => {
    const [i, r, obj, , , marca] = a, I = pv[i], P = pv[r], o = obj ? " " + obj : "";
    const momento = ["встава́ть", "просыпа́ться", "возвраща́ться"].indexOf(i) >= 0;
    const extra = i === "встава́ть" ? " в семь часо́в" : i === "просыпа́ться" ? " ра́но" : i === "возвраща́ться" ? " в во́семь часо́в" : "";
    const comida = ["за́втракать", "обе́дать", "у́жинать"].indexOf(i) >= 0;
    const res = momento ? "Вчера́ я " + P.p[g] + o + extra + "." : comida ? "Я уже́ " + P.p[g] + "." : "Вчера́ я " + P.p[g] + o + ".";
    const pro = momento ? "Ра́ньше я " + I.p[g] + o + extra + "." : comida ? "Я " + marca + " " + I.p[g] + (i === "у́жинать" ? " в во́семь часо́в" : " до́ма") + "." : i === "покупа́ть" ? "Я " + marca + " " + I.p[g] + o + "." : "Я " + I.p[g] + o + " " + marca + ".";
    const resMal = momento ? "Вчера́ я " + I.p[g] + o + extra + "." : comida ? "Я уже́ " + I.p[g] + "." : "Вчера́ я " + I.p[g] + o + ".";
    const proMal = momento ? "Ра́ньше я " + P.p[g] + o + extra + "." : comida ? "Я " + marca + " " + P.p[g] + (i === "у́жинать" ? " в во́семь часо́в" : " до́ма") + "." : i === "покупа́ть" ? "Я " + marca + " " + P.p[g] + o + "." : "Я " + P.p[g] + o + " " + marca + ".";
    return { I, P, res, pro, resMal, proMal, momento, comida };
  };
  const conVchera = arr => arr.concat(arr.filter(x => /^Вчера́ я /.test(x)).map(x => "Я " + x.slice(9, -1) + " вчера́."));
  ASP.forEach((a, j) => {
    const g = j % 3 === 1 ? "f" : "m", F = frasesAsp(a, g), yo = g === "f" ? " (eres mujer)" : "";
    const base = { items: ["lex:" + F.I.id, "lex:" + F.P.id] };
    /* par: resultado / proceso */
    push(Object.assign({ id: "U8-par-asp-r-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: "u8-aspecto-idea", grupo: "AS-" + j, oir: F.res, pide: "«" + cap(a[3]) + "»" + yo + ". ¿Cuál dices?",
      opciones: baraja([F.res, F.resMal], j), correcta: F.res, explicacion: F.res + " " + (F.momento ? "Pasó una vez: resultado." : F.comida ? "уже́: está hecho, resultado." : "Está terminado: resultado.") }, base));
    push(Object.assign({ id: "U8-par-asp-p-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: F.momento || a[5] === "ча́сто" || a[5] === "ка́ждый день" || a[5] === "всегда́" ? "u8-aspecto-pistas" : "u8-aspecto-idea", grupo: "AP-" + j, oir: F.pro,
      pide: "«" + cap(a[4]) + "»" + yo + ". ¿Cuál dices?", opciones: baraja([F.pro, F.proMal], j + 1), correcta: F.pro,
      explicacion: F.pro + " " + (F.momento ? "ра́ньше: se repetía, proceso." : a[5] === "ча́сто" || a[5] === "ка́ждый день" || a[5] === "всегда́" ? a[5] + ": se repetía, proceso." : a[5] + ": cuánto duró, proceso.") }, base));
    /* natural con la pista */
    push(Object.assign({ id: "U8-nat-asp-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u8-aspecto-pistas", grupo: "AN-" + j, oir: F.pro, pide: "¿Cuál es la correcta?",
      opciones: baraja([F.pro, F.proMal], j + 2), correcta: F.pro, explicacion: F.pro + " Con " + a[5] + " va el de proceso: " + F.I.p[g] + "." }, base));
    /* porque */
    push(Object.assign({ id: "U8-pq-asp-r-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: F.comida ? "u8-aspecto-pistas" : "u8-aspecto-idea", grupo: "AS-" + j, oir: F.res, pide: "¿Por qué " + F.P.p[g] + " y no " + F.I.p[g] + "?",
      grande: F.res, audio: F.res, audioManual: true, opciones: ["Habla de una acción terminada, una vez", "Cuenta cuánto duró o lo que se repetía"], correcta: "Habla de una acción terminada, una vez",
      explicacion: F.res + " " + F.P.ac + ": la acción llegó a su fin." }, base));
    push(Object.assign({ id: "U8-pq-asp-p-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u8-aspecto-pistas", grupo: "AP-" + j, oir: F.pro, pide: "¿Por qué " + F.I.p[g] + " y no " + F.P.p[g] + "?",
      grande: F.pro, audio: F.pro, audioManual: true, opciones: ["Habla de una acción terminada, una vez", "Cuenta cuánto duró o lo que se repetía"], correcta: "Cuenta cuánto duró o lo que se repetía",
      explicacion: F.pro + " " + a[5] + ": proceso." }, base));
    /* pareja de resultado */
    const otrosR = baraja(ASP.filter(x => x !== a).map(x => x[1]), j).slice(0, 2);
    push(Object.assign({ id: "U8-parj-e-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: 7, regla: "u8-aspecto-pares", grupo: "PJ-" + j, oir: a[1], pide: "¿Cuál es la pareja de resultado de «" + a[0] + "»?",
      opciones: baraja([a[1]].concat(otrosR), j), correcta: a[1], explicacion: a[0] + " → " + a[1] + "." }, base));
    push(Object.assign({ id: "U8-parj-w-" + j, tipo: "pareja", forma: "escribir", dificultad: 2, modulo: 7, regla: "u8-aspecto-pares", grupo: "PJw-" + j, oir: a[1], pide: "Escribe la pareja de resultado de «" + a[0] + "».",
      audio: a[1], audioManual: true, esperadas: [a[1]], idioma: "ru", explicacion: a[0] + " → " + a[1] + "." }, base));
    /* escribir con el verbo que va */
    push(Object.assign({ id: "U8-asp-w-r-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 7, regla: "u8-aspecto-idea", grupo: "AW-" + j, oir: F.res, pide: "Escribe en ruso: «" + cap(a[3]) + "»" + yo + ".",
      audio: F.res, audioManual: true, esperadas: conVchera([F.res].concat(g === "m" ? [F.res.replace(" " + F.P.p.m, " " + F.P.p.f)] : [F.res.replace(" " + F.P.p.f, " " + F.P.p.m)])), idioma: "ru", explicacion: F.res }, base));
    if (j % 2 === 0) push(Object.assign({ id: "U8-asp-w-p-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 7, regla: "u8-aspecto-pistas", grupo: "AWp-" + j, oir: F.pro, pide: "Escribe en ruso: «" + cap(a[4]) + "»" + yo + ".",
      audio: F.pro, audioManual: true, esperadas: [F.pro].concat(g === "m" ? [F.pro.replace(" " + F.I.p.m, " " + F.I.p.f)] : [F.pro.replace(" " + F.I.p.f, " " + F.I.p.m)]), idioma: "ru", explicacion: F.pro + " " + a[5] + ": proceso." }, base));
    /* diagnóstico */
    if (!F.momento) push(Object.assign({ id: "U8-diag-asp-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla: "u8-aspecto-pistas", grupo: "AD-" + j, oir: F.pro, pide: "La frase tiene un error. ¿Qué falla?",
      grande: F.proMal, opciones: ["El verbo: tiene que ser el de proceso", "La terminación del verbo", "Falta был"], correcta: "El verbo: tiene que ser el de proceso", esperadas: [F.pro], explicacion: F.pro + " Con " + a[5] + " va el de proceso." }, base));
    /* oído: ¿terminó? */
    if (!F.comida && !F.momento) {
      const tr = j % 2 === 0, ru = "Он " + (tr ? F.P.p.m : F.I.p.m) + (a[2] ? " " + a[2] : "") + ".";
      push(Object.assign({ id: "U8-oido-asp-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 7, regla: "u8-aspecto-idea", grupo: "AO-" + j, oir: ru, pide: "Escucha: ¿qué dice?", audio: ru,
        opciones: ["Que lo terminó", "Qué estuvo haciendo, sin decir si terminó"], correcta: tr ? "Que lo terminó" : "Qué estuvo haciendo, sin decir si terminó", explicacion: "Sonó **" + (tr ? F.P.p.m : F.I.p.m) + "**: " + (tr ? "resultado." : "proceso.") }, base));
    }
  });
  /* Cadena: presente → proceso en pasado → resultado */
  ASP.slice(0, 6).forEach((a, j) => {
    const F = frasesAsp(a, "m"), o = a[2] ? " " + a[2] : "", base0 = "Я " + F.I.pres[0] + o + ".";
    push({ id: "U8-cad-asp-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 7, regla: "u8-aspecto-idea", grupo: "AC-" + j, items: ["lex:" + F.I.id, "lex:" + F.P.id], oir: "Вчера́ я " + F.P.p.m + o + ".",
      pide: "Cambia la frase paso a paso.", base: base0,
      pasos: [{ pide: "Pásala al pasado: ayer, como actividad (вчера́).", esperadas: ["Вчера́ я " + F.I.p.m + o + ".", "Вчера́ я " + F.I.p.f + o + ".", "Я " + F.I.p.m + o + " вчера́.", "Я " + F.I.p.f + o + " вчера́."] },
              { pide: "Ahora di que lo terminaste.", esperadas: ["Вчера́ я " + F.P.p.m + o + ".", "Вчера́ я " + F.P.p.f + o + ".", "Я " + F.P.p.m + o + " вчера́.", "Я " + F.P.p.f + o + " вчера́."] }],
      explicacion: base0 + " → Вчера́ я " + F.I.p.m + o + ". → Вчера́ я " + F.P.p.m + o + ". " + a[0] + " → " + a[1] + ": del proceso al resultado." });
  });
  /* Desarmar */
  [["Вчера́", "я", "прочита́л", "кни́гу"], ["Вчера́", "она́", "написа́ла", "письмо́"], ["Ве́чером", "мы", "посмотре́ли", "фильм"], ["Вчера́", "па́па", "пригото́вил", "у́жин"]].forEach((pal, j) => {
    push({ id: "U8-desarm-asp-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 7, regla: "u8-aspecto-idea", grupo: "DA-" + j, items: [], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: [{ pide: "¿Qué palabra dice que la acción terminó?", correcta: 2 }, { pide: "¿Qué terminó? (el objeto)", correcta: 3 }, { pide: "¿Cuándo?", correcta: 0 }],
      explicacion: pal.join(" ") + ". " + pal[2] + " es de resultado: la acción llegó al final." });
  });

  /* ── Módulo 8: contar en orden ── */
  [[["встать", "поза́втракать"], "встава́ть", "за́втракать"], [["просну́ться", "встать"], "просыпа́ться", "встава́ть"], [["пригото́вить", "поу́жинать"], "гото́вить", "у́жинать"],
   [["купи́ть", "пригото́вить"], "покупа́ть", "гото́вить"], [["прочита́ть", "написа́ть"], "чита́ть", "писа́ть"], [["верну́ться", "лечь"], "возвраща́ться", "ложи́ться"],
   [["умы́ться", "оде́ться"], "умыва́ться", "одева́ться"], [["поу́жинать", "посмотре́ть"], "у́жинать", "смотре́ть"]].forEach(([[r1, r2], i1, i2], j) => {
    const A = PV(r1), B = PV(r2), Ai = PV(i1), Bi = PV(i2), g = j % 2 ? "f" : "m";
    const obj = { "пригото́вить": " у́жин", "купи́ть": " хлеб", "прочита́ть": " газе́ту", "написа́ть": " письмо́", "посмотре́ть": " фильм", "верну́ться": " домо́й" };
    const ok = "Снача́ла я " + A.p[g] + (obj[r1] || "") + ", пото́м " + B.p[g] + (obj[r2] || "") + ".", mal = "Снача́ла я " + Ai.p[g] + (obj[r1] || "") + ", пото́м " + Bi.p[g] + (obj[r2] || "") + ".";
    const base = { grupo: "OR-" + j, items: ["lex:" + A.id, "lex:" + B.id], oir: ok };
    push(Object.assign({ id: "U8-nat-or-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-orden-perf", pide: "Cuentas un día concreto, en orden. ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Una cosa terminada después de otra: verbos de resultado." }, base));
    if (j < 6) push(Object.assign({ id: "U8-cad-or-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 8, regla: "u8-orden-perf", pide: "Cambia la frase paso a paso.", base: "Я " + A.p.m + (obj[r1] || "") + ".",
      pasos: [{ pide: "Agrega qué hiciste después (пото́м + " + r2 + ").", esperadas: ["Я " + A.p.m + (obj[r1] || "") + ", пото́м " + B.p.m + (obj[r2] || "") + ".", "Я " + A.p.m + (obj[r1] || "") + ", пото́м я " + B.p.m + (obj[r2] || "") + ".", "Я " + A.p.m + (obj[r1] || "") + " и пото́м " + B.p.m + (obj[r2] || "") + "."] },
              { pide: "Ahora cuéntalo de Ana (А́нна).", esperadas: ["А́нна " + A.p.f + (obj[r1] || "") + ", пото́м " + B.p.f + (obj[r2] || "") + ".", "А́нна " + A.p.f + (obj[r1] || "") + ", пото́м она́ " + B.p.f + (obj[r2] || "") + ".", "А́нна " + A.p.f + (obj[r1] || "") + " и пото́м " + B.p.f + (obj[r2] || "") + "."] }],
      explicacion: "Я " + A.p.m + (obj[r1] || "") + ", пото́м " + B.p.m + (obj[r2] || "") + ". → А́нна " + A.p.f + (obj[r1] || "") + ", пото́м " + B.p.f + (obj[r2] || "") + "." }, base, { grupo: "ORc-" + j }));
  });
  [["гуля́ть", "в па́рке", "уви́деть", "Ива́на"], ["чита́ть", "", "услы́шать", "му́зыку"], ["рабо́тать", "до́ма", "узна́ть", "но́вость"], ["смотре́ть", "телеви́зор", "услы́шать", "но́вость"],
   ["идти́", "домо́й", "потеря́ть", "телефо́н"], ["гото́вить", "у́жин", "уви́деть", "А́нну"]].forEach(([fv, fc, ev, ec], j) => {
    const F = PV(fv), E = PV(ev), g = j % 2 ? "f" : "m", ok = "Я " + F.p[g] + (fc ? " " + fc : "") + " и вдруг " + E.p[g] + " " + ec + ".";
    const base = { grupo: "FV-" + j, items: ["lex:" + E.id], oir: ok };
    push(Object.assign({ id: "U8-pq-fv-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-a-la-vez", pide: "¿Por qué " + F.p[g] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Es lo de fondo: pasaba mientras", "Es lo que pasó de golpe"], correcta: "Es lo de fondo: pasaba mientras", explicacion: ok + " " + F.p[g] + ": fondo, proceso. " + E.p[g] + ": lo que pasó, resultado." }, base));
    push(Object.assign({ id: "U8-pq-ev-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-a-la-vez", pide: "¿Por qué " + E.p[g] + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Es lo de fondo: pasaba mientras", "Es lo que pasó de golpe"], correcta: "Es lo que pasó de golpe", explicacion: ok + " " + E.p[g] + ": pasó una vez, de golpe: resultado." }, base, { grupo: "FVe-" + j }));
  });
  [["Что случи́лось?", "Что случи́л?"], ["Я потеря́л телефо́н.", "Я потеря́ла телефо́н."], ["Она́ забы́ла ключ.", "Она́ забы́ло ключ."], ["Мы реши́ли гуля́ть.", "Мы реши́ли гуля́ли."]].forEach(([ok, mal], j) => {
    push({ id: "U8-nat-qp-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-que-paso", grupo: "QP-" + j, items: [], oir: ok, pide: (j === 1 ? "Habla un hombre. " : j === 2 ? "Habla de una mujer. " : "") + "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + ["Con что, neutro: случи́лось.", "Habla un hombre: потеря́л.", "Una mujer: забы́ла.", "Después de реши́ть va el infinitivo."][j] });
  });
  [["опозда́ть", "f", "на рабо́ту"], ["уста́ть", "m", ""], ["заболе́ть", "f", ""], ["верну́ться", "m", "домо́й"], ["оде́ться", "f", ""], ["отдохну́ть", "m", ""]].forEach(([vk, g, c], j) => {
    const v = PV(vk), ru = "Я " + v.p[g] + (c ? " " + c : "") + ".";
    push({ id: "U8-oido-q8-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-orden-perf", grupo: "Q8-" + j, items: ["lex:" + v.id], oir: ru, pide: "Escucha: ¿quién habla?", audio: ru,
      opciones: ["Un hombre", "Una mujer"], correcta: g === "f" ? "Una mujer" : "Un hombre", explicacion: "Sonó **" + v.p[g] + "**: " + (g === "f" ? "habla una mujer." : "habla un hombre.") });
  });
  [["Бы́ло хо́лодно, но интере́сно."], ["Я до́ма, потому́ что я заболе́л."]].forEach(([ok], j) => {
    const mal = j === 0 ? "Бы́ло хо́лодно, потому́ что интере́сно." : "Я до́ма, но я заболе́л.";
    push({ id: "U8-par-con-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 8, regla: "u8-conectores", grupo: "CN-" + j, items: [], oir: ok,
      pide: j === 0 ? "«Hizo frío, pero fue interesante». ¿Cuál dices?" : "«Estoy en casa porque me enfermé». ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " " + (j === 0 ? "но: contraste." : "потому́ что: la razón.") });
  });

  /* ── Módulo 9: experiencias y tu historia ── */
  [["Пари́ж", "Пари́же", "París"], ["Москва́", "Москве́", "Moscú"], ["Мадри́д", "Мадри́де", "Madrid"], ["Рим", "Ри́ме", "Roma"], ["Ло́ндон", "Ло́ндоне", "Londres"], ["Барсело́на", "Барсело́не", "Barcelona"]].forEach(([c, prep, es], j) => {
    const acc = casosById(lex(c).id).sg[3], b = V("быть"), e = V("е́здить"), g = j % 2 ? "f" : "m";
    const r1 = "Я " + b.p[g] + " в " + prep + ".", r2 = "Я " + e.p[g] + " в " + acc + ".", yo = g === "f" ? " (eres mujer)" : "";
    const base = { items: [] };
    push(Object.assign({ id: "U8-par-be-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-byl-vs-ezdil", grupo: "BE-" + j, oir: j % 2 ? r1 : r2,
      pide: (j % 2 ? "«Estuve en " + es + "»" : "«Fui a " + es + "»") + yo + ". ¿Cuál dices?", opciones: baraja([r1, r2], j), correcta: j % 2 ? r1 : r2,
      explicacion: (j % 2 ? r1 + " Dónde estuviste: был + prepositivo." : r2 + " Adónde fuiste: е́здил + acusativo.") }, base));
    push(Object.assign({ id: "U8-nat-be1-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-byl-vs-ezdil", grupo: "BEn-" + j, oir: r1, pide: "¿Cuál es la correcta?",
      opciones: baraja([r1, "Я " + b.p[g] + " в " + acc + "."], j + 1), correcta: r1, explicacion: r1 + " Con был, dónde: prepositivo." }, base));
    if (prep !== acc) push(Object.assign({ id: "U8-nat-be2-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-byl-vs-ezdil", grupo: "BEm-" + j, oir: r2, pide: "¿Cuál es la correcta?",
      opciones: baraja([r2, "Я " + e.p[g] + " в " + prep + "."], j + 2), correcta: r2, explicacion: r2 + " Con е́здил, adónde: acusativo." }, base));
    push(Object.assign({ id: "U8-pq-be-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-byl-vs-ezdil", grupo: "BEp-" + j, oir: j % 2 ? r2 : r1, pide: "¿Por qué «в " + (j % 2 ? acc : prep) + "»?",
      grande: j % 2 ? r2 : r1, audio: j % 2 ? r2 : r1, audioManual: true, opciones: ["Con был: dónde (prepositivo)", "Con е́здил: adónde (acusativo)"], correcta: j % 2 ? "Con е́здил: adónde (acusativo)" : "Con был: dónde (prepositivo)",
      explicacion: (j % 2 ? r2 : r1) + " " + (j % 2 ? "е́здил + adónde." : "был + dónde.") }, base));
    if (prep !== acc) push(Object.assign({ id: "U8-diag-be-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 9, regla: "u8-byl-vs-ezdil", grupo: "BEd-" + j, oir: r2, pide: "La frase tiene un error. ¿Qué falla?",
      grande: "Я " + e.p[g] + " в " + prep + ".", opciones: ["El caso del lugar", "La terminación del verbo", "Falta не"], correcta: "El caso del lugar", esperadas: [r2], explicacion: r2 + " Con е́здил va adónde: acusativo." }, base));
  });
  [["Ри́ме", "m"], ["Москве́", "f"], ["Ло́ндоне", "pl"], ["Пари́же", "m"], ["Мадри́де", "f"]].forEach(([l, g], j) => {
    const s = { m: "Я", f: "Она́", pl: "Мы" }[g], b = V("быть"), ok = s + " никогда́ " + (g === "f" ? "не " + b.p.f : "не́ " + b.p[g].replace(/\u0301/g, "")) + " в " + l + ".", mal = s + " никогда́ " + b.p[g] + " в " + l + ".";
    push({ id: "U8-nat-nu-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-nunca", grupo: "NU-" + j, items: [], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Con никогда́ hace falta не." });
  });
  [["роди́ться", "f", "в Мадри́де"], ["роди́ться", "m", "в Буэ́нос-А́йресе"], ["вы́расти", "f", "в Барсело́не"], ["вы́расти", "m", "в Москве́"], ["око́нчить", "f", "университе́т"], ["перее́хать", "m", "в Барсело́ну"]].forEach(([vk, g, c], j) => {
    const v = PV(vk), ok = "Я " + v.p[g] + " " + c + ".", mal = "Я " + v.p[g === "f" ? "m" : "f"] + " " + c + ".";
    const base = { grupo: "BI-" + j, items: ["lex:" + v.id], oir: ok };
    push(Object.assign({ id: "U8-nat-bi-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-biografia", pide: "Habla " + (g === "f" ? "una mujer" : "un hombre") + ". ¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + v.ac + ": " + v.p.m + ", " + v.p.f + "." }, base));
    push(Object.assign({ id: "U8-oido-bi-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 9, regla: "u8-biografia", pide: "Escucha: ¿quién habla?", audio: ok, opciones: ["Un hombre", "Una mujer"], correcta: g === "f" ? "Una mujer" : "Un hombre",
      explicacion: "Sonó **" + v.p[g] + "**: " + (g === "f" ? "una mujer." : "un hombre.") }, base, { grupo: "BIo-" + j }));
  });
  [["Буэ́нос-А́йрес", "Мадри́д", "Барсело́на"], ["Москва́", "Рим", "Мадри́д"]].forEach(([n0, c1, c2], j) => {
    const P = c => casosById(lex(c).id).sg[5], A = c => casosById(lex(c).id).sg[3];
    const r = PV("роди́ться"), pe = PV("перее́хать"), base0 = "Я живу́ в " + P(c2) + ".";
    push({ id: "U8-cad-bi-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 9, regla: "u8-biografia", grupo: "BIc-" + j, items: ["lex:" + r.id, "lex:" + pe.id], oir: "Я перее́хал в " + A(c2) + ".",
      pide: "Cuenta tu historia paso a paso.", base: base0,
      pasos: [{ pide: "Ahora di que naciste en " + ({ "Буэ́нос-А́йрес": "Buenos Aires", "Москва́": "Moscú" })[n0] + ".", esperadas: ["Я " + r.p.m + " в " + P(n0) + ".", "Я " + r.p.f + " в " + P(n0) + "."] },
              { pide: "Y que te mudaste a " + ({ "Барсело́на": "Barcelona", "Мадри́д": "Madrid" })[c2] + ".", esperadas: ["Я " + pe.p.m + " в " + A(c2) + ".", "Я " + pe.p.f + " в " + A(c2) + ".", "Пото́м я " + pe.p.m + " в " + A(c2) + ".", "Пото́м я " + pe.p.f + " в " + A(c2) + "."] }],
      explicacion: base0 + " → Я " + r.p.m + " в " + P(n0) + ". → Я " + pe.p.m + " в " + A(c2) + ". Dónde naciste: prepositivo; adónde te mudaste: acusativo." });
  });
  [["Я", "роди́лся", "в", "Барсело́не"], ["В", "де́тстве", "я", "жил", "в", "Мадри́де"]].forEach((pal, j) => {
    const pq = j === 0 ? [{ pide: "¿Qué pasó? (el verbo)", correcta: 1 }, { pide: "¿Dónde? (la ciudad)", correcta: 3 }] : [{ pide: "¿Cuándo? (toca la palabra que cambia)", correcta: 1 }, { pide: "¿Qué hacía? (el verbo)", correcta: 3 }, { pide: "¿Dónde? (la ciudad)", correcta: 5 }];
    push({ id: "U8-desarm-bi-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 9, regla: "u8-biografia", grupo: "DB-" + j, items: [], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: pq, explicacion: pal.join(" ") + "." });
  });

  /* ── Módulo 10: antes y ahora ── */
  ASP.forEach((a, j) => {
    if (["за́втракать", "обе́дать", "у́жинать", "писа́ть", "де́лать"].indexOf(a[0]) >= 0) return;
    const I = pv[a[0]], P = pv[a[1]], g = j % 2 ? "f" : "m", o = a[2] ? " " + a[2] : "";
    const ok = "Ра́ньше я ча́сто " + I.p[g] + o + ".", mal = "Ра́ньше я ча́сто " + P.p[g] + o + ".", una = "Вчера́ я " + P.p[g] + o + ".";
    const base = { items: ["lex:" + I.id, "lex:" + P.id] };
    push(Object.assign({ id: "U8-nat-ra-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 10, regla: "u8-ranshe", grupo: "RA-" + j, oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Lo que se repetía va con el de proceso." }, base));
    push(Object.assign({ id: "U8-par-vs-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 10, regla: "u8-vez-siempre", grupo: "VS-" + j, oir: j % 2 ? una : ok,
      pide: (j % 2 ? "¿Cuál cuenta algo que pasó una vez?" : "¿Cuál cuenta algo que se repetía?"), opciones: baraja([ok, una], j + 1), correcta: j % 2 ? una : ok,
      explicacion: (j % 2 ? una + " Una vez: resultado." : ok + " ча́сто: se repetía, proceso.") }, base));
    if (j % 3 === 0) push(Object.assign({ id: "U8-diag-ra-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 10, regla: "u8-ranshe", grupo: "RAd-" + j, oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["El verbo: tiene que ser el de proceso", "La terminación del verbo", "Falta был"], correcta: "El verbo: tiene que ser el de proceso", esperadas: [ok], explicacion: ok + " ча́сто: se repetía, proceso." }, base));
    if (j % 3 === 1) push(Object.assign({ id: "U8-pq-ra-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 10, regla: "u8-vez-siempre", grupo: "RAp-" + j, oir: una, pide: "¿Por qué " + P.p[g] + "?", grande: una, audio: una, audioManual: true,
      opciones: ["Pasó una vez y terminó", "Se repetía"], correcta: "Pasó una vez y terminó", explicacion: una + " Una vez: resultado." }, base));
  });
  [["жить", "в Мадри́де", "в Барсело́не"], ["рабо́тать", "в ба́нке", "до́ма"], ["изуча́ть", "англи́йский", "ру́сский"], ["чита́ть", "газе́ту", "кни́ги"]].forEach(([vk, ant, aho], j) => {
    const v = V(vk), ok = "Тепе́рь я " + v.pres[0] + " " + aho + ".", mal = "Тепе́рь я " + v.p.m + " " + aho + ".";
    push({ id: "U8-nat-te-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 10, regla: "u8-teper", grupo: "TE-" + j, items: ["lex:" + v.id], oir: ok, pide: "¿Cuál es la correcta?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " тепе́рь: presente." });
    const b0 = "Ра́ньше я " + v.p.m + " " + ant + ".";
    push({ id: "U8-cad-te-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 10, regla: "u8-teper", grupo: "TEc-" + j, items: ["lex:" + v.id], oir: b0 + " А тепе́рь я " + v.pres[0] + " " + aho + ".",
      pide: "Cambia la frase paso a paso.", base: "Я " + v.pres[0] + " " + ant + ".",
      pasos: [{ pide: "Di que eso era antes (ра́ньше).", esperadas: [b0, "Ра́ньше я " + v.p.f + " " + ant + "."] },
              { pide: "Agrega qué haces ahora: " + aho + " (а тепе́рь).", esperadas: [b0.slice(0, -1) + ", а тепе́рь я " + v.pres[0] + " " + aho + ".", "Ра́ньше я " + v.p.f + " " + ant + ", а тепе́рь я " + v.pres[0] + " " + aho + "."] }],
      explicacion: b0 + " → " + b0.slice(0, -1) + ", а тепе́рь я " + v.pres[0] + " " + aho + ". ра́ньше: pasado; тепе́рь: presente." });
  });
  [["Я по́мню де́тство.", "Я вспо́мнил де́тство.", "Te acuerdas de tu infancia (la tienes en la memoria)."]].forEach(([ok, mal, es], j) => {
    push({ id: "U8-par-me-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 10, regla: "u8-vez-siempre", grupo: "ME-" + j, items: [], oir: ok, pide: es + " ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (j === 0 ? "по́мнить: está en la memoria." : "забы́л y вспо́мнил: pasaron una vez.") });
  });

  /* `regla` en los tipos viejos: prefijo del id → regla (11/10/2026) */
  const REGLA_ID = [[/^U8-(aa-|tr1-)/, "u8-un-pasado"], [/^U8-(pas|pel|pemp)-/, "u8-forma-l"], [/^U8-(gen|genw|det|gtr)-/, "u8-genero-quien"],
    [/^U8-(tsig|tw|cesru|cdic)-/, "u8-cuando"], [/^U8-(vesru|vdic|vord)-/, "u8-dia"], [/^U8-(byl|bytr|bsc)-/, "u8-byl-acento"], [/^U8-bylo-/, "u8-bylo"],
    [/^U8-(preg|resp|pgen)-/, "u8-preguntas"], [/^U8-(cosig|pq|coesru)-/, "u8-conectores"], [/^U8-ex[123]-/, "u8-byl-vs-ezdil"], [/^U8-(ah1|ah3|ah4)-/, "u8-ranshe"], [/^U8-ah2-/, "u8-teper"]];
  const lexDeItem = e => (lexComerById((e.items && e.items[0] || "").slice(4)) || {});
  out.forEach(e => { if (e.regla) return; const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1];
    const ac = lexDeItem(e).acento || "";
    if (/^U8-(pas|pel|pemp)-/.test(e.id) && /ся$/.test(ac)) e.regla = "u8-forma-sya";
    if (/^U8-(pas|pel|pemp)-/.test(e.id) && ac === "есть") e.regla = "u8-especiales";
    if (/^U8-(vesru|vdic|vord)-/.test(e.id) && (ac === "ходи́ть" || ac === "е́здить")) e.regla = "u8-hodil";
    if (/^U8-coesru-2/.test(e.id)) e.regla = "u8-orden-perf";
    if (/^U8-gtr-/.test(e.id) && /^(Мы|Де́ти)/.test(e.oir || "")) e.regla = "u8-plural"; });
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
