/* ============================================================
   DATA-UNIDAD-10.JS — Unidad 10: Casos II · genitivo, dativo e instrumental
   ------------------------------------------------------------
   Versión 12/10/2026 (profundización, aprobada por Manu). Contenido,
   vocabulario y banco de ejercicios.
   · Los tres casos por función, en singular. Plurales solo como
     fórmulas (с друзья́ми, мно́го люде́й, нет де́нег, нет вре́мени, пять
     часо́в / лет). Por qué два часа́: genitivo singular después de 2–4.
   · Entran нра́виться / понра́виться, «У меня́ есть», не́ было / не бу́дет
     + genitivo, у + persona («en lo de»), к + dativo, la edad (мне … лет),
     над / под / пе́ред / за + instrumental, стать, занима́ться.
   · Aspecto: parejas con dativo (U10_PARES: дать, сказа́ть, помо́чь…) y
     ну́жно / мо́жно + el infinitivo que va.
   · Afuera: posesivos declinados (моему́ дру́гу), «работает компью́тером»
     y «до шести́ часо́в» (genitivo de números).
   · есть «hay, tengo» es una entrada propia (CMR-06144), homógrafa de
     есть «comer» (CMR-01290).
   · Vocabulario nuevo: 52 palabras del léxico, en grupos por módulo
     (U10_GRUPOS).
   · Banco: unos 830 ejercicios. Los tipos que practican la regla
     (porque, natural, oido, par, descubrir, cadena, diagnostico,
     desarmar, pareja, aspecto) son ~25 % de la sesión; todos llevan
     `regla`, y los viejos la toman de REGLA_ID. Examen: 40 en 8 partes,
     con «Por qué este caso».
   Las formas salen de Casos y de Verbos; la regla que muestran las
   explicaciones se calcula comparando las dos formas (u10Cambio).
   ============================================================ */

/* Personas: "ruso": [español sujeto, «a…», «de…», «con…»] */
const U10_PERS = {
  "А́нна": ["Ana", "a Ana", "de Ana", "con Ana"], "Ива́н": ["Iván", "a Iván", "de Iván", "con Iván"], "Ма́ша": ["Masha", "a Masha", "de Masha", "con Masha"],
  "Ди́ма": ["Dima", "a Dima", "de Dima", "con Dima"], "ма́ма": ["Mamá", "a mamá", "de mamá", "con mamá"], "па́па": ["Papá", "a papá", "de papá", "con papá"],
  "брат": ["Mi hermano", "a mi hermano", "de mi hermano", "con mi hermano"], "сестра́": ["Mi hermana", "a mi hermana", "de mi hermana", "con mi hermana"],
  "друг": ["Mi amigo", "a mi amigo", "de mi amigo", "con mi amigo"], "подру́га": ["Mi amiga", "a mi amiga", "de mi amiga", "con mi amiga"],
  "учи́тель": ["El maestro", "al maestro", "del maestro", "con el maestro"], "врач": ["El médico", "al médico", "del médico", "con el médico"],
  "колле́га": ["Mi colega", "a mi colega", "de mi colega", "con mi colega"], "ба́бушка": ["La abuela", "a la abuela", "de la abuela", "con la abuela"]
};
/* Cosas: "ruso": [indefinido, sin artículo (para «no tengo»), emoji] */
const U10_COSAS = {
  "маши́на": ["un coche", "coche", "🚗"], "кни́га": ["un libro", "libro", "📕"], "телефо́н": ["un teléfono", "teléfono", "📱"], "компью́тер": ["un ordenador", "ordenador", "💻"],
  "кварти́ра": ["un apartamento", "apartamento", "🏢"], "соба́ка": ["un perro", "perro", "🐕"], "ко́шка": ["una gata", "gata", "🐈"], "слова́рь": ["un diccionario", "diccionario", "📙"],
  "ру́чка": ["un bolígrafo", "bolígrafo", "🖊️"], "су́мка": ["un bolso", "bolso", "👜"], "рабо́та": ["trabajo", "trabajo", "💼"], "вре́мя": ["tiempo", "tiempo", "⏰"]
};
/* Cantidades: "ruso": español */
const U10_CANT = { "вода́": "agua", "чай": "té", "хлеб": "pan", "молоко́": "leche", "суп": "sopa", "сок": "zumo", "вре́мя": "tiempo" };
const U10_POCO = { "мно́го": "mucho/a", "ма́ло": "poco/a", "немно́го": "un poco de" };
/* Verbos con dativo: "ruso": [español (yo, él/ella), complemento ruso, complemento español] */
const U10_VDAT = {
  "дава́ть": [["le doy", "le da"], "кни́гу", "el libro"], "звони́ть": [["llamo", "llama"], "", ""], "помога́ть": [["ayudo", "ayuda"], "", ""],
  "пока́зывать": [["le muestro", "le muestra"], "дом", "la casa"], "писа́ть": [["le escribo", "le escribe"], "письмо́", "una carta"], "отвеча́ть": [["le respondo", "le responde"], "", ""]
};
/* Estados con dativo: [ruso, español «me…», necesita infinitivo] */
const U10_ESTADOS = [["нра́вится му́зыка", "me gusta la música", "le gusta la música", "nos gusta la música"], ["хо́лодно", "tengo frío", "tiene frío", "tenemos frío"],
  ["интере́сно", "me interesa", "le interesa", "nos interesa"], ["тру́дно", "me cuesta", "le cuesta", "nos cuesta"], ["легко́", "me resulta fácil", "le resulta fácil", "nos resulta fácil"],
  ["ну́жно рабо́тать", "tengo que trabajar", "tiene que trabajar", "tenemos que trabajar"], ["нельзя́ кури́ть", null, null, null], ["нра́вится Москва́", "me gusta Moscú", "le gusta Moscú", "nos gusta Moscú"]];
/* Instrumental: con qué. [verbo ruso (yo), objeto ruso o "", herramienta, español] */
const U10_CON_QUE = [["пишу́", "", "ру́чка", "Escribo con bolígrafo."], ["пишу́", "", "каранда́ш", "Escribo con lápiz."], ["ем суп", "", "ло́жка", "Tomo la sopa con cuchara."],
  ["ем пи́ццу", "", "ви́лка", "Como pizza con tenedor."], ["ре́жу хлеб", "", "нож", "Corto el pan con un cuchillo."]];
const U10_PROFES = { "врач": ["médico", "médica"], "учи́тель": ["maestro", null], "учи́тельница": [null, "maestra"], "инжене́р": ["ingeniero", "ingeniera"],
  "программи́ст": ["programador", "programadora"], "медсестра́": [null, "enfermera"], "архите́ктор": ["arquitecto", "arquitecta"], "студе́нт": ["estudiante", null] };
/* Genitivo con preposiciones: [preposición, sustantivo, español] */
const U10_PREP = [["из", "Испа́ния", "de España"], ["из", "Аргенти́на", "de Argentina"], ["из", "Москва́", "de Moscú"], ["без", "молоко́", "sin leche"], ["без", "хлеб", "sin pan"],
  ["для", "ма́ма", "para mamá"], ["для", "брат", "para mi hermano"], ["для", "А́нна", "para Ana"], ["по́сле", "рабо́та", "después del trabajo"], ["по́сле", "обе́д", "después del almuerzo"],
  ["до", "рабо́та", "antes del trabajo"], ["до", "обе́д", "antes del almuerzo"], ["о́коло", "дом", "cerca de la casa"], ["о́коло", "парк", "cerca del parque"], ["о́коло", "банк", "cerca del banco"]];
const U10_PRON = { gen: ["у меня́", "у тебя́", "у него́", "у неё", "у нас", "у вас", "у них"], dat: ["мне", "тебе́", "ему́", "ей", "нам", "вам", "им"],
  ins: ["со мной", "с тобо́й", "с ним", "с ней", "с на́ми", "с ва́ми", "с ни́ми"], es: ["yo", "tú", "él", "ella", "nosotros", "ustedes", "ellos"] };

const U10_VISTAS = { 1: "звони́ть с для дава́ть", 2: "есть колле́га без", 3: "де́ньги", 4: "мно́го ма́ло немно́го стака́н лю́ди буты́лка кусо́к килогра́мм литр па́чка па́ра ба́нка са́хар соль ма́сло рис шокола́д вино́ пи́во",
  5: "о́коло во́зле по́сле от кро́ме вме́сто напро́тив", 6: "помога́ть пока́зывать отвеча́ть сове́товать к дать сказа́ть помо́чь отве́тить посове́товать объясня́ть объясни́ть меша́ть",
  7: "нра́виться ну́жно нельзя́ тру́дно легко́ гру́стно жаль стра́шно пора́ понра́виться", 8: "внук вну́чка нача́льник клие́нт со", 9: "нож ре́зать над под пе́ред за",
  10: "архите́ктор занима́ться интересова́ться стать станови́ться води́тель юри́ст журнали́ст перево́дчик худо́жник музыка́нт писа́тель продаве́ц" };
/* Parejas con dativo (12/10/2026): [proceso, resultado, español] — tabla del módulo 6 */
const U10_PARES = [["дава́ть", "дать", "dar"], ["говори́ть", "сказа́ть", "decir"], ["помога́ть", "помо́чь", "ayudar"], ["отвеча́ть", "отве́тить", "responder"],
  ["сове́товать", "посове́товать", "aconsejar"], ["объясня́ть", "объясни́ть", "explicar"], ["пока́зывать", "показа́ть", "mostrar"], ["звони́ть", "позвони́ть", "llamar"]];
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario */
const U10_GLOSA = {
  "с": "con", "для": "para", "без": "sin", "о́коло": "cerca de", "во́зле": "cerca de, junto a", "по́сле": "después de", "колле́га": "colega", "де́ньги": "dinero",
  "мно́го": "mucho", "ма́ло": "poco", "немно́го": "un poco", "стака́н": "vaso", "дава́ть": "dar", "помога́ть": "ayudar", "пока́зывать": "mostrar", "отвеча́ть": "responder",
  "сове́товать": "aconsejar", "нра́виться": "gustar", "ну́жно": "hace falta, hay que", "нельзя́": "no se puede", "нож": "cuchillo", "ре́зать": "cortar", "архите́ктор": "arquitecto",
  "буты́лка": "botella", "кусо́к": "pedazo", "килогра́мм": "kilo", "литр": "litro", "па́чка": "paquete", "па́ра": "par", "ба́нка": "lata, frasco", "са́хар": "azúcar", "соль": "sal",
  "ма́сло": "aceite, mantequilla", "рис": "arroz", "шокола́д": "chocolate", "вино́": "vino", "пи́во": "cerveza", "от": "de (parte de)", "кро́ме": "excepto, además de",
  "вме́сто": "en lugar de", "напро́тив": "enfrente de", "к": "a (lo de alguien)", "дать": "dar (una vez)", "сказа́ть": "decir (una vez)", "помо́чь": "ayudar (una vez)",
  "отве́тить": "responder (una vez)", "посове́товать": "aconsejar (una vez)", "объясня́ть": "explicar", "объясни́ть": "explicar (una vez)", "меша́ть": "molestar",
  "гру́стно": "da tristeza", "жаль": "es una lástima", "стра́шно": "da miedo", "пора́": "es hora de", "понра́виться": "gustar (una vez)", "внук": "nieto", "вну́чка": "nieta",
  "нача́льник": "jefe", "клие́нт": "cliente", "над": "arriba de", "под": "debajo de", "пе́ред": "delante de", "за": "detrás de", "занима́ться": "dedicarse a, hacer (deporte)",
  "интересова́ться": "interesarse por", "стать": "llegar a ser (una vez)", "станови́ться": "llegar a ser", "води́тель": "conductor", "юри́ст": "abogado", "журнали́ст": "periodista",
  "перево́дчик": "traductor", "худо́жник": "pintor", "музыка́нт": "músico", "писа́тель": "escritor", "продаве́ц": "vendedor"
};
/* Vocabulario nuevo (12/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página */
const U10_GRUPOS = [
  [4, "Medidas y recipientes", "буты́лка кусо́к килогра́мм литр па́чка па́ра ба́нка"],
  [4, "En la cocina", "са́хар соль ма́сло рис шокола́д вино́ пи́во"],
  [5, "Más preposiciones con genitivo", "от кро́ме вме́сто напро́тив"],
  [6, "Con dativo", "к дать сказа́ть помо́чь отве́тить посове́товать объясня́ть объясни́ть меша́ть"],
  [7, "Cómo estás", "гру́стно жаль стра́шно пора́ понра́виться"],
  [8, "Gente", "внук вну́чка нача́льник клие́нт"],
  [9, "Dónde está", "над под пе́ред за"],
  [10, "Profesiones", "води́тель юри́ст журнали́ст перево́дчик худо́жник музыка́нт писа́тель продаве́ц"],
  [10, "Intereses y cambios", "занима́ться интересова́ться стать станови́ться"]
];

const U10_LECTURAS = [
  { id: "familia", titulo: "Семья́ А́нны", lineas: [
      ["У А́нны есть брат и сестра́.", "Ana tiene un hermano y una hermana."], ["Брат рабо́тает врачо́м.", "El hermano trabaja de médico."],
      ["У А́нны нет маши́ны.", "Ana no tiene coche."], ["Она́ ча́сто звони́т ма́ме.", "Llama seguido a su mamá."], ["В суббо́ту она́ гуля́ет с бра́том.", "El sábado pasea con su hermano."]],
    preguntas: [["¿De qué trabaja el hermano?", "врачо́м", ["учи́телем", "инжене́ром"]], ["¿A quién llama Ana seguido?", "ма́ме", ["ма́му", "ма́ма"]], ["¿Con quién pasea el sábado?", "с бра́том", ["с сестро́й", "с ма́мой"]]],
    vf: [["У А́нны есть маши́на.", false], ["У А́нны есть сестра́.", true], ["Она́ ча́сто звони́т ма́ме.", true]] },
  { id: "cafe", titulo: "В кафе́", lineas: [
      ["Ива́н и Ма́ша в кафе́.", "Iván y Masha están en el café."], ["Ива́н пьёт ко́фе без молока́.", "Iván toma café sin leche."], ["Ма́ше нра́вится чай.", "A Masha le gusta el té."],
      ["Ива́н даёт Ма́ше кни́гу.", "Iván le da un libro a Masha."], ["Э́то пода́рок для Ма́ши.", "Es un regalo para Masha."], ["По́сле обе́да они́ гуля́ют в па́рке.", "Después del almuerzo pasean por el parque."]],
    preguntas: [["¿Qué toma Iván?", "ко́фе без молока́", ["чай", "во́ду"]], ["¿A quién le da un libro?", "Ма́ше", ["Ма́шу", "Ма́ша"]], ["¿Para quién es el regalo?", "для Ма́ши", ["Ма́ше", "с Ма́шей"]]],
    vf: [["Ма́ше нра́вится ко́фе.", false], ["Ива́н даёт Ма́ше кни́гу.", true], ["По́сле обе́да они́ рабо́тают.", false]] },
  { id: "trabajo", titulo: "Рабо́та Ди́мы", lineas: [
      ["Ди́ма рабо́тает программи́стом.", "Dima trabaja de programador."], ["Он рабо́тает с колле́гой.", "Trabaja con un colega."], ["У него́ ма́ло вре́мени.", "Tiene poco tiempo."],
      ["Ему́ ну́жно мно́го рабо́тать.", "Tiene que trabajar mucho."], ["Но ему́ нра́вится рабо́та.", "Pero le gusta el trabajo."]],
    preguntas: [["¿De qué trabaja Dima?", "программи́стом", ["врачо́м", "архите́ктором"]], ["¿Con quién trabaja?", "с колле́гой", ["с бра́том", "с ма́мой"]], ["¿Cuánto tiempo tiene?", "ма́ло вре́мени", ["мно́го вре́мени", "нет вре́мени"]]],
    vf: [["Ди́ме нра́вится рабо́та.", true], ["У Ди́мы мно́го вре́мени.", false], ["Он рабо́тает с колле́гой.", true]] }
];

const UNIDAD_10 = {
  id: 10,
  titulo: "Casos II: genitivo, dativo e instrumental",
  tituloRu: "Роди́тельный, да́тельный и твори́тельный падежи́",
  objetivo: "Decir qué tienes y qué no, cantidades, a quién le das o dices algo, qué te gusta o necesitas, con quién y con qué haces las cosas y de qué trabajas.",
  tiempo: "4 a 5 semanas con práctica diaria (unas 40–50 horas)",
  modulos: [
    { id: "u10m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "¿Por qué más casos?", resumen: "А́нна, А́нну, А́нне, с А́нной, у А́нны.",
      intro: "Ya conoces tres casos: nominativo (quién hace), acusativo (qué recibe) y prepositivo (dónde). En esta unidad se suman los otros tres, y con ellos puedes decir casi todo.",
      secciones: [
        { id: "u10-seis-casos", titulo: "Una persona, seis formas",
          texto: "La misma palabra cambia la terminación según el papel que cumple en la frase. Cada caso responde una pregunta:\nnominativo: ¿quién? (кто?)\nacusativo: ¿a quién? ¿qué? (кого́? что?), lo que recibe la acción\nprepositivo: ¿dónde? (где?)\ngenitivo: ¿de quién? ¿quién no está? (кого́? чего́?)\ndativo: ¿a quién se le da o se le dice? (кому́?)\ninstrumental: ¿con quién? ¿con qué? (с кем? чем?)",
          ejemplos: [
            { ru: "{А́нна} чита́ет.", es: "Ana lee.", por: "Quién hace la acción: nominativo." },
            { ru: "Я ви́жу {А́нну}.", es: "Veo a Ana.", por: "Quién la recibe: acusativo." },
            { ru: "У {А́нны} есть кни́га.", es: "Ana tiene un libro.", por: "Quién tiene: genitivo, después de у." },
            { ru: "Я звоню́ {А́нне}.", es: "Llamo a Ana.", por: "A quién: dativo." },
            { ru: "Я гуля́ю с {А́нной}.", es: "Paseo con Ana.", por: "Con quién: instrumental." }],
          destacado: "La palabra cambia porque cambia su relación con las demás.",
          chequeo: [{ pide: "«Paseo con Ana» va en…", opciones: ["instrumental", "dativo", "genitivo"], ok: "instrumental", por: "Con quién: instrumental." }] },
        { id: "u10-relacion", titulo: "Primero la relación, después la terminación",
          texto: "No hace falta memorizar todas las formas de una vez: en cada módulo tienes la tabla, y el módulo Casos tiene todas. Lo que sí hace falta es preguntarse, antes de escribir, qué relación quieres expresar. Esa pregunta elige el caso; la tabla te da la terminación.",
          ejemplos: [
            { ru: "Э́то пода́рок для {ма́мы}.", es: "Es un regalo para mamá.", por: "для siempre pide genitivo: ма́мы." },
            { ru: "Я даю́ пода́рок {ма́ме}.", es: "Le doy un regalo a mamá.", por: "A quién se le da: dativo, ма́ме." }],
          truco: "¿Quién? ¿Qué? ¿A quién? ¿Con quién? ¿De quién? → el caso.",
          mas: { texto: "Los nombres de los casos cuentan su función: dativo viene de «dar» (el caso de a quién se le da) e instrumental, de «instrumento» (el caso de con qué se hace). Genitivo viene de «origen»: de quién es, de dónde sale. No hace falta aprenderlos: basta con las preguntas." },
          chequeo: [{ pide: "«El libro de Ana» va en…", opciones: ["genitivo", "dativo", "instrumental"], ok: "genitivo", por: "De quién: genitivo, кни́га А́нны." }] }
      ] },
    { id: "u10m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Genitivo: tener y de quién", resumen: "У меня́ есть кни́га. Кни́га А́нны.",
      intro: "En ruso no hay un verbo «tener» de uso diario: se dice «junto a mí hay». Y el mismo caso, el genitivo, dice de quién es algo.",
      secciones: [
        { id: "u10-tener", titulo: "Tener: у + genitivo + есть",
          texto: "Para «tengo» se dice «junto a mí hay»: у + quién (en genitivo) + есть + qué (en nominativo). Lo que se tiene es el sujeto, lo que «hay».\nу меня́ · у тебя́ · у него́ · у неё · у нас · у вас · у них",
          desarmar: { es: "Ana tiene un coche.", partes: [
            { txt: "У А́нны", rol: "Quién tiene", nota: "у + genitivo: А́нна → А́нны. Literal: «junto a Ana»." },
            { txt: "есть", rol: "Hay", nota: "есть «hay» no cambia nunca." },
            { txt: "маши́на", rol: "Qué", nota: "Lo que hay va en nominativo: es el sujeto." }] },
          ejemplos: [
            { ru: "{У меня́} есть кни́га.", es: "Tengo un libro.", por: "у меня́: genitivo de я." },
            { ru: "{У Ива́на} есть брат.", es: "Iván tiene un hermano.", por: "Ива́н → Ива́на." },
            { ru: "{У неё} есть соба́ка.", es: "Ella tiene un perro.", por: "у неё: genitivo de она́." }],
          destacado: "у + quién (genitivo) + есть + qué (nominativo)",
          errores: [{ mal: "Я есть маши́на.", bien: "{У меня́} есть маши́на.", por: "есть no es «tengo»: es «hay». Hace falta у меня́." }],
          mas: { texto: "Este есть significa «hay» y no cambia nunca. No tiene nada que ver con есть «comer» (я ем, ты ешь): se escriben igual, pero son palabras distintas. Cuando lo importante no es si hay algo, sino cómo es, есть se omite: У меня́ больша́я кварти́ра («tengo un apartamento grande»)." },
          chequeo: [{ pide: "«Tienes un coche?»", opciones: ["У тебя́ есть маши́на?", "Ты есть маши́на?"], ok: "У тебя́ есть маши́на?", por: "у тебя́ + есть." }] },
        { id: "u10-de-quien", titulo: "De quién es",
          texto: "El dueño va después de la cosa, en genitivo: кни́га А́нны («el libro de Ana»), маши́на Ива́на («el coche de Iván»). Es el «de» del español, sin preposición.",
          ejemplos: [
            { ru: "Э́то кни́га {А́нны}.", es: "Es el libro de Ana.", por: "А́нна → А́нны." },
            { ru: "Где маши́на {бра́та}?", es: "¿Dónde está el coche de mi hermano?", por: "брат → бра́та." },
            { ru: "Э́то дом {ба́бушки}.", es: "Es la casa de la abuela.", por: "ба́бушка → ба́бушки: después de **к**, **и**." }],
          errores: [{ mal: "Э́то кни́га из А́нны.", bien: "Э́то кни́га {А́нны}.", por: "Para «de quién», sin preposición." }],
          chequeo: [{ pide: "«El teléfono de mamá»", opciones: ["телефо́н ма́мы", "телефо́н ма́ма"], ok: "телефо́н ма́мы", por: "ма́ма → ма́мы." }] },
        { id: "u10-gen-fin", titulo: "Las terminaciones del genitivo",
          texto: "femenino (y па́па, Ди́ма…): **-а** → **-ы**: ма́ма → ма́мы\ndespués de **г, к, х, ж, ш, ч, щ**, **-и**: кни́га → кни́ги\nfemenino en **-я** o **-ь** → **-и**: Росси́я → Росси́и\nmasculino: se agrega **-а**: брат → бра́та\nmasculino en **-ь** o **-й** → **-я**: учи́тель → учи́теля\nneutro: **-о** → **-а**: молоко́ → молока́",
          ejemplos: [
            { ru: "у {сестры́}", es: "mi hermana tiene", por: "сестра́ → сестры́: **-а** → **-ы**." },
            { ru: "у {учи́теля}", es: "el maestro tiene", por: "**-ь** → **-я**." },
            { ru: "без {молока́}", es: "sin leche", por: "neutro: **-о** → **-а**." }],
          destacado: "-а → -ы / -и · consonante → -а · -ь, -й → -я",
          mas: { texto: "до́ма («en casa») no es el genitivo de дом, aunque se escriba igual: el genitivo es до́ма también, pero «en casa» es una palabra aparte. El contexto los separa: у до́ма («junto a la casa») / Я до́ма («estoy en casa»)." },
          chequeo: [{ pide: "у ___ (врач)", opciones: ["врача́", "врачи́"], ok: "врача́", por: "masculino: se agrega **-а**." }] },
        { id: "u10-u-kogo", titulo: "En lo de alguien: у + genitivo",
          texto: "у + una persona también es «en lo de», «en la casa de» o «en el consultorio de»: Я у ба́бушки («estoy en lo de la abuela»), Он у врача́ («está en el médico»).",
          ejemplos: [
            { ru: "Сейча́с я {у ба́бушки}.", es: "Ahora estoy en lo de la abuela.", por: "у + genitivo: dónde, con una persona." },
            { ru: "Ма́ма {у врача́}.", es: "Mamá está en el médico.", por: "врач → врача́." }],
          comparacion: "Para un lugar se dice в / на + prepositivo (в шко́ле); para la casa de una persona, у + genitivo (у ба́бушки), como «en lo de».",
          chequeo: [{ pide: "«Estoy en lo de mi hermano»", opciones: ["Я у бра́та.", "Я в бра́те."], ok: "Я у бра́та.", por: "En lo de alguien: у + genitivo." }] }
      ] },
    { id: "u10m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Genitivo: lo que no hay", resumen: "У меня́ нет маши́ны.",
      intro: "Para decir que no tienes algo, есть se vuelve нет y lo que falta pasa a genitivo.",
      secciones: [
        { id: "u10-net", titulo: "Есть → нет",
          antes: { pide: "У меня́ есть маши́на. ¿Cómo será «no tengo coche»?", opciones: ["У меня́ нет маши́ны.", "У меня́ нет маши́на."], ok: "У меня́ нет маши́ны.", por: "Lo que falta pasa a genitivo: маши́ны." },
          texto: "есть → нет, y lo que no hay va en genitivo. Vale para «no tengo» y para «no hay» en general. También para personas: Ива́на нет до́ма («Iván no está en casa»).",
          ejemplos: [
            { ru: "У меня́ {нет маши́ны}.", es: "No tengo coche.", por: "маши́на → маши́ны." },
            { ru: "У А́нны {нет бра́та}.", es: "Ana no tiene hermano.", por: "брат → бра́та." },
            { ru: "{Ива́на нет} до́ма.", es: "Iván no está en casa.", por: "Quien no está, en genitivo." },
            { ru: "У нас {нет вре́мени}.", es: "No tenemos tiempo.", por: "вре́мя → вре́мени: irregular." }],
          destacado: "нет + genitivo",
          errores: [
            { mal: "У меня́ есть не маши́на.", bien: "У меня́ {нет маши́ны}.", por: "Para «no tengo» va нет, y el genitivo." },
            { mal: "У меня́ нет маши́на.", bien: "У меня́ нет {маши́ны}.", por: "Después de нет, genitivo." }],
          mas: { texto: "Algunas van como fórmulas: нет вре́мени (no hay tiempo), нет де́нег (no hay dinero), нет рабо́ты (no hay trabajo). вре́мя es irregular (вре́мени) y де́ньги está siempre en plural (де́нег)." },
          chequeo: [{ pide: "У меня́ нет ___ (кни́га).", opciones: ["кни́ги", "кни́га", "кни́гу"], ok: "кни́ги", por: "Después de нет, genitivo; después de **г**, **и**." }] },
        { id: "u10-net-tiempos", titulo: "No había, no va a haber",
          texto: "En pasado y en futuro, нет se dice con быть, que queda siempre en neutro: не́ было (no había) y не бу́дет (no va a haber). Lo que falta sigue en genitivo.",
          ejemplos: [
            { ru: "Вчера́ у меня́ {не́ было} вре́мени.", es: "Ayer no tuve tiempo.", por: "Pasado: не́ было, siempre neutro." },
            { ru: "За́втра у нас {не бу́дет} рабо́ты.", es: "Mañana no vamos a tener trabajo.", por: "Futuro: не бу́дет." },
            { ru: "Ива́на {не́ было} до́ма.", es: "Iván no estaba en casa.", por: "No importa el género: не́ было." }],
          destacado: "нет · не́ было · не бу́дет + genitivo",
          errores: [{ mal: "Вчера́ у меня́ не была́ маши́на.", bien: "Вчера́ у меня́ {не́ было маши́ны}.", por: "Con не, siempre не́ было + genitivo." }],
          chequeo: [{ pide: "«Ayer no había leche».", opciones: ["Вчера́ не́ было молока́.", "Вчера́ не́ было молоко́."], ok: "Вчера́ не́ было молока́.", por: "не́ было + genitivo." }] }
      ] },
    { id: "u10m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Genitivo: cantidad", resumen: "мно́го вре́мени, буты́лка воды́.",
      intro: "Después de una palabra de cantidad, lo que se cuenta o se mide va en genitivo. Y aquí se aclara algo que venías usando desde la hora.",
      secciones: [
        { id: "u10-cantidad", titulo: "Mucho, poco, un poco",
          texto: "мно́го (mucho), ма́ло (poco), немно́го (un poco) + genitivo:\nмно́го вре́мени (mucho tiempo)\nма́ло воды́ (poca agua)\nнемно́го молока́ (un poco de leche)\nмно́го люде́й (mucha gente) y мно́го де́нег (mucho dinero) van así, como fórmulas.",
          ejemplos: [
            { ru: "У меня́ {мно́го рабо́ты}.", es: "Tengo mucho trabajo.", por: "рабо́та → рабо́ты." },
            { ru: "В стака́не {ма́ло воды́}.", es: "En el vaso hay poca agua.", por: "вода́ → воды́." },
            { ru: "В ча́е {немно́го са́хара}.", es: "En el té hay un poco de azúcar.", por: "са́хар → са́хара." }],
          chequeo: [{ pide: "«Mucho tiempo»", opciones: ["мно́го вре́мени", "мно́го вре́мя"], ok: "мно́го вре́мени", por: "Después de мно́го, genitivo." }] },
        { id: "u10-envases", titulo: "Un vaso de, un pedazo de",
          texto: "Las medidas y los recipientes funcionan igual: el recipiente y, después, lo que contiene en genitivo, sin preposición.\nстака́н воды́ (un vaso de agua) · буты́лка вина́ (una botella de vino)\nкусо́к сы́ра (un pedazo de queso) · килогра́мм ри́са (un kilo de arroz)\nлитр молока́ (un litro de leche) · па́чка ча́я (un paquete de té)\nба́нка ко́фе (un frasco de café: ко́фе no cambia)",
          ejemplos: [
            { ru: "Я куплю́ {буты́лку воды́}.", es: "Voy a comprar una botella de agua.", por: "буты́лка en acusativo (lo que compro); вода́ en genitivo." },
            { ru: "{Кусо́к сы́ра}, пожа́луйста.", es: "Un pedazo de queso, por favor.", por: "сыр → сы́ра." },
            { ru: "{Килогра́мм ри́са}, пожа́луйста.", es: "Un kilo de arroz, por favor.", por: "рис → ри́са." }],
          destacado: "recipiente + genitivo, sin preposición",
          errores: [{ mal: "Буты́лка вода́.", bien: "Буты́лка {воды́}.", por: "Lo que contiene va en genitivo." }],
          chequeo: [{ pide: "«Un litro de leche»", opciones: ["литр молока́", "литр молоко́"], ok: "литр молока́", por: "Lo que se mide, en genitivo." }] },
        { id: "u10-por-que-chasa", titulo: "Por qué два часа́",
          texto: "Desde la hora vienes usando un patrón: час, два часа́, пять часо́в. Ahora se entiende: después de 2, 3 y 4 va el **genitivo singular**, el mismo de este módulo. Por eso два стака́на, три килогра́мма, четы́ре ли́тра.\nDesde 5, va otra forma del genitivo, la del plural: пять часо́в, пять лет, пять дней. Esa forma la vas a ver con más palabras más adelante; por ahora, con las que ya conoces.",
          ejemplos: [
            { ru: "два {стака́на}", es: "dos vasos", por: "стака́н → стака́на: genitivo singular, como ча́са." },
            { ru: "три {килогра́мма}", es: "tres kilos", por: "Igual: **-а**." },
            { ru: "пять {часо́в}", es: "cinco horas", por: "Desde 5: el genitivo plural." }],
          destacado: "2, 3, 4 + genitivo singular · 5 o más + genitivo plural",
          mas: { texto: "Por eso el patrón vale para todo lo que se cuenta: es una regla de los números, no de cada palabra. Y por eso con 21, 31 o 41 vuelve la forma de 1 (два́дцать оди́н год), y con 22, 23 o 24, la de 2 (два́дцать два го́да): manda la última palabra del número." },
          chequeo: [{ pide: "«Dos litros»", opciones: ["два ли́тра", "два литр"], ok: "два ли́тра", por: "Después de 2, genitivo singular." }] }
      ] },
    { id: "u10m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Genitivo con preposiciones", resumen: "без молока́, для ма́мы, от бра́та.",
      intro: "Hay preposiciones que siempre piden genitivo. Conviene aprenderlas juntas.",
      secciones: [
        { id: "u10-prep-gen", titulo: "Las preposiciones con genitivo",
          texto: "из (de, desde un lugar): Я из Испа́нии.\nот (de parte de, desde una persona): пода́рок от ма́мы.\nбез (sin): ко́фе без молока́.\nдля (para): пода́рок для ма́мы.\nпо́сле (después de): по́сле рабо́ты.\nдо (antes de, hasta): до рабо́ты.\nо́коло / во́зле (cerca de): о́коло до́ма.\nнапро́тив (enfrente de): напро́тив па́рка.\nвме́сто (en lugar de): чай вме́сто ко́фе.\nкро́ме (excepto, además de): Кро́ме бра́та, у меня́ есть сестра́ («además de mi hermano, tengo una hermana»).",
          ejemplos: [
            { ru: "Я пью ко́фе {без молока́}.", es: "Tomo café sin leche.", por: "без + genitivo." },
            { ru: "Э́то пода́рок {для ма́мы}.", es: "Es un regalo para mamá.", por: "для + genitivo." },
            { ru: "{По́сле рабо́ты} я гуля́ю.", es: "Después del trabajo paseo.", por: "по́сле + genitivo." },
            { ru: "Банк {напро́тив па́рка}.", es: "El banco está enfrente del parque.", por: "напро́тив + genitivo." },
            { ru: "Я пью чай {вме́сто ко́фе}.", es: "Tomo té en lugar de café.", por: "вме́сто + genitivo; ко́фе no cambia." }],
          destacado: "из, от, без, для, по́сле, до, о́коло, напро́тив, кро́ме, вме́сто → genitivo",
          mas: { texto: "Я из Аргенти́ны, que usas desde el principio, ya era genitivo: Аргенти́на → Аргенти́ны. La frase venía armada; ahora sabes por qué termina así." },
          chequeo: [{ pide: "ко́фе без ___ (са́хар)", opciones: ["са́хара", "са́хар", "са́харом"], ok: "са́хара", por: "без + genitivo." }] },
        { id: "u10-iz-ot", titulo: "Из o от",
          texto: "Las dos son «de», pero no se cruzan:\nиз: de un lugar (de adentro de algo): из Москвы́, из магази́на.\nот: de una persona: письмо́ от бра́та («una carta de mi hermano»), пода́рок от ма́мы.",
          ejemplos: [
            { ru: "Я {из Москвы́}.", es: "Soy de Moscú.", por: "Un lugar: из." },
            { ru: "Письмо́ {от бра́та}.", es: "Una carta de mi hermano.", por: "Una persona: от." },
            { ru: "Пода́рок {от А́нны}.", es: "Un regalo de Ana.", por: "Quién lo manda: от." }],
          errores: [{ mal: "Письмо́ из бра́та.", bien: "Письмо́ {от бра́та}.", por: "De una persona, от." }],
          chequeo: [{ pide: "«Un mensaje de mamá»: письмо́ ___ ма́мы", opciones: ["от", "из"], ok: "от", por: "De una persona: от." }] }
      ] },
    { id: "u10m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Dativo: ¿a quién?", resumen: "Я даю́ кни́гу А́нне. Я иду́ к врачу́.",
      intro: "El dativo es la persona a la que le das, le dices o le haces algo. Se pregunta con кому́? («¿a quién?»).",
      secciones: [
        { id: "u10-dat-verbos", titulo: "Los verbos con dativo",
          texto: "Van con dativo los verbos de dar y decir, y algunos más:\nдава́ть (dar): Я даю́ кни́гу А́нне.\nпока́зывать (mostrar): Я пока́зываю фо́то бра́ту.\nписа́ть (escribir): Я пишу́ письмо́ Ива́ну.\nотвеча́ть (responder): Я отвеча́ю учи́телю.\nобъясня́ть (explicar): Учи́тель объясня́ет уро́к студе́нту.\nсове́товать (aconsejar): Врач сове́тует ма́ме отдыха́ть.\nзвони́ть (llamar) y помога́ть (ayudar): Я звоню́ ма́ме. Я помога́ю дру́гу.",
          ejemplos: [
            { ru: "Я даю́ кни́гу {А́нне}.", es: "Le doy el libro a Ana.", por: "Lo que doy: acusativo; a quién: dativo." },
            { ru: "Я звоню́ {ма́ме}.", es: "Llamo a mamá.", por: "звони́ть + dativo." },
            { ru: "Он помога́ет {бра́ту}.", es: "Ayuda a su hermano.", por: "помога́ть + dativo." },
            { ru: "Э́то меша́ет {сестре́}.", es: "Eso le molesta a mi hermana.", por: "меша́ть + dativo." }],
          comparacion: "En español «llamo a mamá» y «ayudo a mi amigo» parecen como «veo a mamá». En ruso no: звони́ть, помога́ть y меша́ть van con dativo, como «le doy».",
          errores: [
            { mal: "Я звоню́ ма́му.", bien: "Я звоню́ {ма́ме}.", por: "звони́ть pide dativo." },
            { mal: "Я помога́ю дру́га.", bien: "Я помога́ю {дру́гу}.", por: "помога́ть pide dativo." }],
          chequeo: [{ pide: "Я помога́ю ___ (ма́ма).", opciones: ["ма́ме", "ма́му", "ма́мы"], ok: "ма́ме", por: "помога́ть + dativo." }] },
        { id: "u10-dat-fin", titulo: "Las terminaciones del dativo",
          texto: "femenino (y па́па, Ди́ма…): **-а** / **-я** → **-е**: ма́ма → ма́ме\nfemenino en **-ь** → **-и**; en **-ия** → **-ии**\nmasculino: se agrega **-у**: брат → бра́ту\nmasculino en **-ь** o **-й** → **-ю**: учи́тель → учи́телю\nneutro: **-о** → **-у**",
          ejemplos: [
            { ru: "{па́пе}", es: "a papá", por: "па́па termina en **-а**: **-е**, aunque sea un hombre." },
            { ru: "{дру́гу}", es: "a mi amigo", por: "consonante: **-у**." },
            { ru: "{учи́телю}", es: "al maestro", por: "**-ь** → **-ю**." }],
          destacado: "кому́? → ма́ме, бра́ту, учи́телю",
          chequeo: [{ pide: "Я пишу́ ___ (Ива́н).", opciones: ["Ива́ну", "Ива́на", "Ива́не"], ok: "Ива́ну", por: "masculino: **-у**." }] },
        { id: "u10-k-u", titulo: "Ir a ver a alguien: к + dativo",
          texto: "Para ir a una persona (a su casa, a su consultorio), va к + dativo: Я иду́ к врачу́ («voy al médico»). Y para estar ahí, у + genitivo: Я у врача́ («estoy en el médico»). Es el mismo par que в / на: adónde y dónde.",
          ejemplos: [
            { ru: "Я иду́ {к врачу́}.", es: "Voy al médico.", por: "Adónde, a una persona: к + dativo." },
            { ru: "Я {у врача́}.", es: "Estoy en el médico.", por: "Dónde, con una persona: у + genitivo." },
            { ru: "За́втра мы пое́дем {к ба́бушке}.", es: "Mañana vamos a ir a lo de la abuela.", por: "ба́бушка → ба́бушке." }],
          destacado: "в / на шко́лу (adónde, lugar) · к врачу́ (adónde, persona) · у врача́ (dónde, persona)",
          errores: [{ mal: "Я иду́ в врача́.", bien: "Я иду́ {к врачу́}.", por: "A una persona se va con к." }],
          chequeo: [{ pide: "«Voy a lo de mi hermano»", opciones: ["Я иду́ к бра́ту.", "Я иду́ у бра́та."], ok: "Я иду́ к бра́ту.", por: "Adónde, a una persona: к + dativo." }] },
        { id: "u10-pares-dat", titulo: "Las parejas: dar, decir, ayudar, responder",
          texto: "Casi todos los verbos con dativo tienen pareja de resultado, con su futuro sin бу́ду:\nдава́ть → дать: дам, дашь, даст, дади́м, дади́те, даду́т\nговори́ть → сказа́ть: скажу́, ска́жешь\nпомога́ть → помо́чь: помогу́, помо́жешь\nотвеча́ть → отве́тить: отве́чу, отве́тишь\nсове́товать → посове́товать · объясня́ть → объясни́ть · пока́зывать → показа́ть · звони́ть → позвони́ть",
          ejemplos: [
            { ru: "Я {дам} тебе́ кни́гу.", es: "Te voy a dar el libro.", por: "дать → дам: una vez." },
            { ru: "Я {скажу́} ма́ме.", es: "Le voy a decir a mamá.", por: "сказа́ть → скажу́." },
            { ru: "Вчера́ он {помо́г} бра́ту.", es: "Ayer ayudó a su hermano.", por: "помо́чь → помо́г: sin **-л**, como мог." },
            { ru: "Учи́тель {объясни́л} уро́к.", es: "El maestro explicó la lección.", por: "Una vez, terminado: resultado." }],
          ojo: "дать es especial: дам, дашь, даст, дади́м, дади́те, даду́т. Y помо́чь en pasado es помо́г, помогла́.",
          mas: { texto: "говори́ть tiene dos caras: «hablar» y «decir». Para «hablar» no tiene pareja de resultado (existe una versión «un rato», que vas a ver más adelante); para «decir», su pareja es otra palabra: сказа́ть. Por eso Я скажу́ es «voy a decir».",
            ejemplos: [{ ru: "Я {скажу́} бра́ту.", es: "Le voy a decir a mi hermano.", por: "«Decir»: сказа́ть, con dativo." }] },
          chequeo: [{ pide: "«Te voy a ayudar»", opciones: ["Я тебе́ помогу́.", "Я тебе́ бу́ду помо́чь."], ok: "Я тебе́ помогу́.", por: "Futuro de resultado, sin бу́ду." }] }
      ] },
    { id: "u10m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Dativo: me gusta, necesito", resumen: "Мне нра́вится му́зыка. Мне два́дцать лет.",
      intro: "Muchas cosas que en español dicen «me…» en ruso se dicen con el dativo: gustos, estados, necesidades y hasta la edad.",
      secciones: [
        { id: "u10-gustar", titulo: "Me gusta: мне нра́вится",
          texto: "мне (a mí), тебе́ (a ti), ему́ (a él), ей (a ella), нам (a nosotros), вам (a ustedes), им (a ellos).\nМне нра́вится му́зыка funciona igual que «me gusta la música»: lo que gusta es el sujeto (en nominativo) y a quién le gusta va en dativo. Si lo que gusta es plural, el verbo va en plural: Мне нра́вятся фи́льмы.",
          ejemplos: [
            { ru: "{Мне} нра́вится {му́зыка}.", es: "Me gusta la música.", por: "A quién: dativo. Qué: nominativo, el sujeto." },
            { ru: "{А́нне} нра́вится Москва́.", es: "A Ana le gusta Moscú.", por: "А́нна → А́нне." },
            { ru: "{Ему́} нра́вятся фи́льмы.", es: "A él le gustan las películas.", por: "Varias cosas: нра́вятся." }],
          comparacion: "Aquí el español ayuda: «me gusta» y Мне нра́вится tienen la misma forma. Lo que gusta es el sujeto en los dos idiomas.",
          errores: [{ mal: "Я нра́влюсь ко́фе.", bien: "{Мне} нра́вится {ко́фе}.", por: "Я нра́влюсь quiere decir «yo le gusto (a alguien)»." }],
          mas: { texto: "En pasado, para algo que te gustó una vez (una película, un viaje), va понра́виться, que concuerda con lo que gustó: Мне понра́вился фильм, Мне понра́вилась Москва́, Мне понра́вилось («me gustó», sin sujeto).",
            ejemplos: [
              { ru: "Мне {понра́вился} фильм.", es: "Me gustó la película.", por: "фильм, masculino: понра́вился." },
              { ru: "Нам {понра́вилась} Москва́.", es: "Nos gustó Moscú.", por: "Москва́, femenino: понра́вилась." }] },
          chequeo: [{ pide: "«A mamá le gusta el té»", opciones: ["Ма́ме нра́вится чай.", "Ма́ма нра́вится чай."], ok: "Ма́ме нра́вится чай.", por: "A quién: dativo." }] },
        { id: "u10-estados", titulo: "Tengo frío, me da pena",
          texto: "Los estados también van con dativo y una palabra en **-о**, sin verbo en presente:\nМне хо́лодно (tengo frío) · Мне жа́рко (tengo calor)\nМне ве́село (me divierto) · Мне гру́стно (estoy triste)\nМне стра́шно (tengo miedo) · Мне интере́сно (me interesa)\nМне жаль (me da pena) · Мне пора́ (ya me tengo que ir)",
          ejemplos: [
            { ru: "{Мне} хо́лодно.", es: "Tengo frío.", por: "Dativo + **-о**." },
            { ru: "{Ей} гру́стно.", es: "Ella está triste.", por: "ей: dativo de она́." },
            { ru: "{Нам} пора́.", es: "Ya nos tenemos que ir.", por: "пора́: «es hora»." },
            { ru: "Вчера́ {мне} бы́ло ве́село.", es: "Ayer me divertí.", por: "En pasado, бы́ло." }],
          errores: [{ mal: "Я хо́лодно.", bien: "{Мне} хо́лодно.", por: "El estado va con dativo." }],
          chequeo: [{ pide: "«Tengo miedo»", opciones: ["Мне стра́шно.", "Я стра́шно."], ok: "Мне стра́шно.", por: "Dativo + **-о**." }] },
        { id: "u10-edad", titulo: "Cuántos años tienes: мне … лет",
          texto: "La edad se dice con dativo y la cuenta de siempre: Мне два́дцать лет («tengo veinte años»). Ско́лько тебе́ лет? («¿cuántos años tienes?»). Con 1, год; con 2, 3 y 4, го́да; desde 5, лет.",
          ejemplos: [
            { ru: "{Мне} три́дцать {лет}.", es: "Tengo treinta años.", por: "Desde 5: лет." },
            { ru: "{Ему́} четы́ре {го́да}.", es: "Él tiene cuatro años.", por: "2, 3 y 4: го́да." },
            { ru: "— Ско́лько {тебе́} лет? — Со́рок.", es: "—¿Cuántos años tienes? —Cuarenta.", por: "La pregunta, con dativo." }],
          destacado: "Мне два́дцать лет. · Ско́лько тебе́ лет?",
          errores: [{ mal: "У меня́ два́дцать лет.", bien: "{Мне} два́дцать лет.", por: "La edad no se «tiene»: va con dativo." }],
          mas: { texto: "Con los números compuestos manda la última palabra: два́дцать оди́н год, два́дцать два го́да, два́дцать пять лет." },
          chequeo: [{ pide: "«Mi hermano tiene dos años»", opciones: ["Бра́ту два го́да.", "Брат два го́да."], ok: "Бра́ту два го́да.", por: "A quién: dativo." }] },
        { id: "u10-nuzhno", titulo: "Necesito, puedo: ну́жно, мо́жно, нельзя́",
          texto: "Мне ну́жно + infinitivo es «tengo que»: Мне ну́жно рабо́тать. мо́жно es «se puede» y нельзя́, «no se puede»: Мо́жно? («¿puedo?»).\nEl infinitivo sigue la regla del aspecto: para una acción concreta, que se va a terminar, el de resultado (Мне ну́жно купи́ть хлеб); para algo que se repite o dura, el de proceso (Мне ну́жно ка́ждый день покупа́ть хлеб).",
          ejemplos: [
            { ru: "{Мне ну́жно} рабо́тать.", es: "Tengo que trabajar.", por: "Una actividad: proceso." },
            { ru: "{Ему́ ну́жно} позвони́ть ма́ме.", es: "Él tiene que llamar a mamá.", por: "Una llamada: resultado." },
            { ru: "{Мо́жно} взять кни́гу?", es: "¿Puedo llevarme el libro?", por: "Una vez: resultado." },
            { ru: "Здесь {нельзя́} спать.", es: "Aquí no se puede dormir.", por: "Una prohibición general: proceso." }],
          destacado: "ну́жно купи́ть (una vez) · ну́жно покупа́ть (siempre)",
          mas: { texto: "на́до dice lo mismo que ну́жно, y se usa tanto como él: Мне на́до рабо́тать. Con нельзя́ va casi siempre el de proceso: Здесь нельзя́ спать («aquí no se puede dormir»)." },
          chequeo: [{ pide: "«Tengo que comprar pan» (hoy)", opciones: ["Мне ну́жно купи́ть хлеб.", "Мне ну́жно покупа́ть хлеб."], ok: "Мне ну́жно купи́ть хлеб.", por: "Una compra concreta: resultado." }] }
      ] },
    { id: "u10m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Instrumental: ¿con quién?", resumen: "Я гуля́ю с А́нной.",
      intro: "с + instrumental es «con alguien». Se pregunta с кем? («¿con quién?»).",
      secciones: [
        { id: "u10-s-kem", titulo: "Con quién",
          texto: "с + la persona en instrumental. Sirve para hacer algo con alguien, para vivir con alguien o para hablar con alguien.",
          ejemplos: [
            { ru: "Я гуля́ю {с А́нной}.", es: "Paseo con Ana.", por: "А́нна → А́нной." },
            { ru: "Я живу́ {с ба́бушкой}.", es: "Vivo con la abuela.", por: "ба́бушка → ба́бушкой." },
            { ru: "Он рабо́тает {с колле́гой}.", es: "Trabaja con un colega.", por: "колле́га → колле́гой." },
            { ru: "Мы обе́даем {с бра́том}.", es: "Almorzamos con mi hermano.", por: "брат → бра́том." }],
          destacado: "с кем? → с А́нной, с бра́том",
          mas: { texto: "с друзья́ми («con amigos») va así, como fórmula: es plural. Y con los pronombres: со мной, с тобо́й, с ним, с ней, с на́ми, с ва́ми, с ни́ми (со, con **о**, delante de мной)." },
          chequeo: [{ pide: "Я живу́ с ___ (сестра́).", opciones: ["сестро́й", "сестре́", "сестры́"], ok: "сестро́й", por: "с + instrumental: **-ой**." }] },
        { id: "u10-ins-fin", titulo: "Las terminaciones del instrumental",
          texto: "femenino (y па́па, Ди́ма…): **-а** → **-ой**: ма́ма → ма́мой\nfemenino en **-я** → **-ей**\nmasculino: se agrega **-ом**: брат → бра́том\nmasculino en **-ь** o **-й** → **-ем**: учи́тель → учи́телем\nneutro: **-о** → **-ом**",
          ejemplos: [
            { ru: "с {па́пой}", es: "con papá", por: "**-а** → **-ой**." },
            { ru: "с {дру́гом}", es: "con un amigo", por: "consonante: **-ом**." },
            { ru: "с {учи́телем}", es: "con el maestro", por: "**-ь** → **-ем**." }],
          destacado: "-ой / -ей · -ом / -ем",
          mas: { texto: "Después de **ж, ш, ч, щ, ц**, si la terminación no lleva acento, **-ой** se escribe **-ей**: с Ма́шей. Las demás palabras en **-а** llevan **-ой**: с ба́бушкой, с колле́гой. En la tabla de Casos de cada palabra está la forma exacta." },
          chequeo: [{ pide: "с ___ (врач)", opciones: ["врачо́м", "врача́", "врачу́"], ok: "врачо́м", por: "masculino: **-ом**." }] },
        { id: "u10-my-s", titulo: "Мы с бра́том: «mi hermano y yo»",
          texto: "мы с + instrumental es la forma natural de decir «yo y otra persona»: Мы с бра́том («mi hermano y yo»), Мы с А́нной («Ana y yo»). El verbo va en plural.",
          ejemplos: [
            { ru: "{Мы с бра́том} живём в Москве́.", es: "Mi hermano y yo vivimos en Moscú.", por: "мы с + instrumental; verbo en plural." },
            { ru: "{Мы с ма́мой} гото́вим у́жин.", es: "Mamá y yo preparamos la cena.", por: "Dos personas: plural." }],
          errores: [{ mal: "Я и брат живём…", bien: "{Мы с бра́том} живём…", por: "Se entiende, pero suena traducido: lo natural es мы с…" }],
          chequeo: [{ pide: "«Ana y yo»", opciones: ["мы с А́нной", "я с А́нна"], ok: "мы с А́нной", por: "мы с + instrumental." }] }
      ] },
    { id: "u10m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Instrumental: ¿con qué? ¿dónde?", resumen: "Я пишу́ ру́чкой. Кот под столо́м.",
      intro: "Sin preposición, el instrumental es la herramienta. Con algunas preposiciones, dice dónde está algo.",
      secciones: [
        { id: "u10-con-que", titulo: "La herramienta, sin с",
          texto: "Para «con qué» (la herramienta), el instrumental va solo, sin preposición: Я пишу́ ру́чкой («escribo con bolígrafo»). с es para «con quién» o «junto con».",
          ejemplos: [
            { ru: "Я пишу́ {ру́чкой}.", es: "Escribo con bolígrafo.", por: "Herramienta: sin с." },
            { ru: "Я ем суп {ло́жкой}.", es: "Tomo la sopa con cuchara.", por: "ло́жка → ло́жкой." },
            { ru: "Она́ ре́жет хлеб {ножо́м}.", es: "Corta el pan con un cuchillo.", por: "нож → ножо́м." }],
          destacado: "con qué → instrumental, sin с",
          errores: [{ mal: "Я пишу́ с ру́чкой.", bien: "Я пишу́ {ру́чкой}.", por: "La herramienta va sin с." }],
          chequeo: [{ pide: "«Como con tenedor»", opciones: ["Я ем ви́лкой.", "Я ем с ви́лкой."], ok: "Я ем ви́лкой.", por: "Herramienta: sin с." }] },
        { id: "u10-pod-nad", titulo: "Arriba, abajo, delante, detrás",
          texto: "над (sobre, arriba de), под (debajo de), пе́ред (delante de), за (detrás de) y ря́дом с (al lado de) van con instrumental para decir dónde está algo:\nнад столо́м · под столо́м · пе́ред до́мом · за до́мом · ря́дом с па́рком",
          ejemplos: [
            { ru: "Ко́шка {под столо́м}.", es: "La gata está debajo de la mesa.", por: "под + instrumental." },
            { ru: "Ла́мпа {над столо́м}.", es: "La lámpara está sobre la mesa (colgada arriba).", por: "над: arriba, sin tocar." },
            { ru: "Маши́на {пе́ред до́мом}.", es: "El coche está delante de la casa.", por: "дом → до́мом." },
            { ru: "Парк {за до́мом}.", es: "El parque está detrás de la casa.", por: "за + instrumental: detrás." }],
          comparacion: "на столе́ es «sobre la mesa», apoyado; над столо́м es «arriba de la mesa», sin tocarla.",
          chequeo: [{ pide: "«Debajo de la cama»", opciones: ["под посте́лью", "под посте́ль"], ok: "под посте́лью", por: "под + instrumental." }] },
        { id: "u10-transporte-ins", titulo: "En tren: по́ездом",
          texto: "El medio de transporte también puede ir en instrumental, sin preposición: е́хать по́ездом, лете́ть самолётом. Dice lo mismo que на по́езде, на самолёте: las dos formas están bien.",
          ejemplos: [
            { ru: "Мы пое́дем {по́ездом}.", es: "Vamos a ir en tren.", por: "по́езд → по́ездом: el medio." },
            { ru: "За́втра мы лети́м {самолётом}.", es: "Mañana volamos en avión.", por: "самолёт → самолётом." }],
          chequeo: [{ pide: "«Voy a ir en tren» (las dos formas)", opciones: ["по́ездом / на по́езде", "с по́ездом / в по́езд"], ok: "по́ездом / на по́езде", por: "Instrumental solo o на + prepositivo." }] }
      ] },
    { id: "u10m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Instrumental: profesión e intereses", resumen: "Я рабо́таю врачо́м.",
      intro: "Para decir de qué trabajas, qué quieres ser o qué haces en tu tiempo libre, va el instrumental.",
      secciones: [
        { id: "u10-rabotat-kem", titulo: "De qué trabajas",
          texto: "рабо́тать + la profesión en instrumental: Я рабо́таю врачо́м («trabajo de médico»). La pregunta es Кем ты рабо́таешь? («¿de qué trabajas?»).",
          ejemplos: [
            { ru: "Я рабо́таю {врачо́м}.", es: "Trabajo de médico.", por: "врач → врачо́м." },
            { ru: "Она́ рабо́тает {журнали́стом}.", es: "Ella trabaja de periodista.", por: "журнали́ст → журнали́стом." },
            { ru: "Он рабо́тает {води́телем}.", es: "Trabaja de chofer.", por: "**-ь** → **-ем**." }],
          destacado: "Кем ты рабо́таешь? — Я рабо́таю врачо́м.",
          errores: [{ mal: "Я рабо́таю как врач.", bien: "Я рабо́таю {врачо́м}.", por: "Para la profesión, instrumental, sin как." }],
          chequeo: [{ pide: "«Trabaja de traductor»", opciones: ["Он рабо́тает перево́дчиком.", "Он рабо́тает перево́дчик."], ok: "Он рабо́тает перево́дчиком.", por: "рабо́тать + instrumental." }] },
        { id: "u10-byt-ins", titulo: "Era, voy a ser, llegó a ser",
          texto: "Con быть en pasado o futuro, y con стать («llegar a ser»), la profesión va en instrumental. En presente быть no se dice, y queda el nominativo: Я врач.\nРа́ньше я был студе́нтом («antes era estudiante»).\nЯ хочу́ стать врачо́м («quiero ser médico»). Он стал писа́телем («se hizo escritor»).",
          ejemplos: [
            { ru: "Ра́ньше я {был студе́нтом}.", es: "Antes era estudiante.", por: "был + instrumental." },
            { ru: "Сейча́с я {врач}.", es: "Ahora soy médico.", por: "Presente: nominativo, sin быть." },
            { ru: "Я {ста́ну} {музыка́нтом}.", es: "Voy a ser músico.", por: "стать → ста́ну + instrumental." }],
          destacado: "был / бу́ду / стать + instrumental · presente: nominativo",
          chequeo: [{ pide: "«Quiero ser escritor»", opciones: ["Я хочу́ стать писа́телем.", "Я хочу́ стать писа́тель."], ok: "Я хочу́ стать писа́телем.", por: "стать + instrumental." }] },
        { id: "u10-zanimatsya", titulo: "Lo que te interesa: занима́ться, интересова́ться",
          texto: "Dos verbos con **-ся** van con instrumental:\nзанима́ться (hacer, dedicarse a): Я занима́юсь спо́ртом («hago deporte»).\nинтересова́ться (interesarse por): Я интересу́юсь му́зыкой («me interesa la música»).",
          ejemplos: [
            { ru: "Я {занима́юсь} {спо́ртом}.", es: "Hago deporte.", por: "спорт → спо́ртом." },
            { ru: "Он {интересу́ется} {исто́рией}.", es: "Le interesa la historia.", por: "исто́рия → исто́рией." },
            { ru: "Чем ты {занима́ешься}?", es: "¿A qué te dedicas?", por: "чем: instrumental de что." }],
          errores: [{ mal: "Я занима́юсь спорт.", bien: "Я занима́юсь {спо́ртом}.", por: "занима́ться pide instrumental." }],
          chequeo: [{ pide: "«Me interesa la música»", opciones: ["Я интересу́юсь му́зыкой.", "Я интересу́юсь му́зыку."], ok: "Я интересу́юсь му́зыкой.", por: "интересова́ться + instrumental." }] }
      ] },
    { id: "u10m11", n: 11, tipo: "lectura", titulo: "Los seis casos juntos", resumen: "Pensar en la relación.",
      intro: "Tres textos con todos los casos. Al leer, pregúntate qué relación expresa cada palabra; después contesta." },
    { id: "u10m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Моя жизнь", resumen: "Tu vida, con todos los casos.",
      intro: "Escribe sobre tu vida: qué tienes y qué no, quiénes son importantes, con quién haces las cosas, a quién llamas, de qué trabajas, qué te gusta, qué hiciste y qué vas a hacer. Por ejemplo: У меня́ есть брат. У меня́ нет маши́ны. Я рабо́таю архите́ктором. По́сле рабо́ты я звоню́ ма́ме. Мне нра́вится му́зыка. Вчера́ я был в рестора́не с бра́том. За́втра я бу́ду рабо́тать с колле́гой.",
      requisitos: [], consejos: [] },
    { id: "u10m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Relación, caso y por qué, есть / нет, a quién, con quién, traducción y audio.",
      intro: "Cuarenta ejercicios en ocho partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Qué relación expresa", tipos: ["relacion"], n: 4 },
        { nombre: "Identificar el caso", tipos: ["caso-id"], n: 4 },
        { nombre: "Есть → нет", tipos: ["no-tener"], n: 5 },
        { nombre: "Por qué este caso", tipos: ["porque"], n: 5 },
        { nombre: "Completar la relación", tipos: ["completar-rel", "forma"], n: 7 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 8 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Comprensión", tipos: ["lectura", "lectura-vf"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};

function u10Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_10.modulos.forEach(m => {
  if (m.intro) m.intro = u10Palabras(m.intro);
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (12/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u10Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u10Palabras(o.por); if (o && o.pide) o.pide = u10Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u10Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u10Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad10Modulo(id) { return UNIDAD_10.modulos.find(m => m.id === id) || null; }

const U10_MEZCLA = { relacion: 2, "caso-id": 1, tener: 2, "no-tener": 2, cantidad: 2, prep: 2, "completar-rel": 2, forma: 2, "a-quien": 2, estado: 2, "con-quien": 2, "con-que": 2, profesion: 2,
  construir: 2, "es-ru": 3, dictado: 3, emparejar: 1, significado: 1, "palabra-es-ru": 1, lectura: 2, "lectura-vf": 1,
  detectar: 1, pareja: 1, aspecto: 2, porque: 2, natural: 2, oido: 1, cadena: 1, diagnostico: 1, descubrir: 1, par: 1, desarmar: 1 };

/* ── Datos ─────────────────────────────────────────────────── */
function u10Datos() {
  if (u10Datos.cache) return u10Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null;
  const sust = ru => { const e = lex(ru, "sustantivo"), cz = e && casosById(e.id); if (!cz) return null;
    if (cz.tipo === "indeclinable") return { id: e.id, ac: e.acento, nom: e.acento, gen: e.acento, dat: e.acento, ins: e.acento, indecl: true, g: e.gender };
    if (!cz.sg) return { id: e.id, ac: e.acento, nom: cz.pl[0], gen: cz.pl[1], dat: cz.pl[2], ins: cz.pl[4], plural: true };
    return { id: e.id, ac: e.acento, nom: cz.sg[0], gen: cz.sg[1], dat: cz.sg[2], acc: cz.sg[3], ins: cz.sg[4], prep: cz.sg[5], g: e.gender }; };
  const verbo = ru => { const e = lex(ru, "verbo"), v = e && verboById(e.id); return v ? Object.assign({ id: e.id, ac: e.acento }, v) : null; };
  return (u10Datos.cache = { sin, lex, sust, verbo, estaId: "CMR-06144" });
}
/* La regla, calculada: «**ма́ма → ма́ме**: -а → -е (dativo)» */
const U10_CASO = { gen: "genitivo", dat: "dativo", ins: "instrumental", nom: "nominativo", acc: "acusativo", prep: "prepositivo" };
function u10Cambio(s, caso) {
  const a = s.nom.replace(/\u0301/g, ""), b = s[caso].replace(/\u0301/g, "");
  if (a === b) return "**" + s.nom + "**: " + (s.indecl ? "no cambia nunca" : "queda igual") + " (" + U10_CASO[caso] + ").";
  let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++;
  const de = a.slice(i), a2 = b.slice(i);
  return "**" + s.nom + " → " + s[caso] + "**: " + (de ? "-" + de + " → -" + a2 : "se agrega -" + a2) + " (" + U10_CASO[caso] + ").";
}

function ejerciciosUnidad10() {
  const { sin, lex, sust, verbo, estaId } = u10Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const sinP = t => t.replace(/[.,!?]/g, "");
  const P = Object.keys(U10_PERS).map(ru => Object.assign(sust(ru) || {}, { esS: U10_PERS[ru][0], esA: U10_PERS[ru][1], esDe: U10_PERS[ru][2], esCon: U10_PERS[ru][3] })).filter(x => x.id);
  const C = Object.keys(U10_COSAS).map(ru => Object.assign(sust(ru) || {}, { un: U10_COSAS[ru][0], bare: U10_COSAS[ru][1], emoji: U10_COSAS[ru][2] })).filter(x => x.id);
  const capN = s => cap(s.nom);
  const REL = ["Hace la acción", "Recibe la acción", "A quién (se le da o dice algo)", "Con quién", "Quién tiene / de quién"];

  /* ── Módulo 1: qué relación ── */
  P.slice(0, 8).forEach((p, j) => {
    const frases = [[capN(p) + " чита́ет.", 0, "nom"], ["Я ви́жу " + p.acc + ".", 1, "acc"], ["Я звоню́ " + p.dat + ".", 2, "dat"], ["Я гуля́ю с " + p.ins + ".", 3, "ins"], ["У " + p.gen + " есть кни́га.", 4, "gen"]];
    frases.forEach(([ru, k, caso], z) => {
      if ((j + z) % 2) return;
      out.push({ id: "U10-rel-" + p.id + "-" + z, tipo: "relacion", forma: "elegir", dificultad: 1, modulo: 1, grupo: "RL-" + j + "-" + z, items: ["lex:" + p.id], oir: ru,
        pide: "¿Qué relación tiene «" + p.nom + "» en esta frase?", grande: ru, audio: ru, opciones: REL.slice(), correcta: REL[k],
        explicacion: "**" + (p[caso] || p.nom) + "**: " + REL[k].toLowerCase() + " → " + U10_CASO[caso] + "." });
    });
  });

  /* ── Módulo 2: tener y de quién ── */
  P.forEach((p, j) => {
    const c = C[j % C.length]; if (!c) return;
    const ru = "У " + p.gen + " есть " + c.nom + ".", esF = p.esS + " tiene " + c.un + ".";
    const base = { grupo: "TN-" + j, items: ["lex:" + p.id, "lex:" + estaId], oir: ru };
    out.push(Object.assign({ id: "U10-ten-" + j, tipo: "tener", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribe en ruso: «" + esF + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "у + genitivo: " + u10Cambio(p, "gen") + " " + ru }, base));
    out.push(Object.assign({ id: "U10-tenf-" + j, tipo: "forma", forma: "elegir", dificultad: 1, modulo: 2, pide: "Completa: «" + esF + "»", grande: "У _____ есть " + c.nom + ".",
      opciones: baraja(uniq([p.gen, p.nom, p.dat, p.acc].filter(Boolean)).slice(0, 4), j), correcta: p.gen, explicacion: u10Cambio(p, "gen") + " " + ru }, base, { grupo: "TNf-" + j }));
    out.push(Object.assign({ id: "U10-genw-" + j, tipo: "forma", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribe el genitivo: «de " + p.esS.toLowerCase().replace(/^(el|la|mi) /, "") + "».", grande: p.nom,
      audio: p.gen, audioManual: true, esperadas: [p.gen], idioma: "ru", explicacion: u10Cambio(p, "gen") }, base, { grupo: "TNg-" + j }));
    const ruDe = cap(c.nom) + " " + p.gen + ".";
    if (j % 2 === 0 && /^(un|una) /.test(c.un)) out.push(Object.assign({ id: "U10-de-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribe en ruso: «" + cap(c.un.replace(/^(un|una) /, (m, a) => a === "un" ? "el " : "la ")) + " " + p.esDe + "»",
      audio: ruDe, audioManual: true, esperadas: [ruDe.replace(/\.$/, ""), ruDe], idioma: "ru", explicacion: "El dueño va después, en genitivo: " + u10Cambio(p, "gen") }, base, { grupo: "TNd-" + j }));
  });
  U10_PRON.gen.forEach((g, i) => {
    const c = C[(i * 3) % C.length], ru = cap(g) + " есть " + c.nom + ".";
    const es = ["Tengo", "Tú tienes", "Él tiene", "Ella tiene", "Tenemos", "Ustedes tienen", "Ellos tienen"][i] + " " + c.un + ".";
    out.push({ id: "U10-tenp-" + i, tipo: "tener", forma: "escribir", dificultad: 2, modulo: 2, grupo: "TP-" + i, items: ["lex:" + estaId], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: "**" + g + "** = " + U10_PRON.es[i] + " (tener). " + ru });
  });
  /* ¿Quién tiene qué? (escena) */
  P.slice(0, 6).forEach((p, j) => {
    const c = C[(j + 2) % C.length], q = "У кого́ есть " + c.nom + "?", r = "У " + p.gen + " есть " + c.nom + ".";
    out.push({ id: "U10-quien-" + j, tipo: "tener", forma: "escribir", dificultad: 2, modulo: 2, grupo: "QT-" + j, items: ["lex:" + p.id], oir: r, contexto: [{ p: "—", ru: q }],
      pide: c.emoji + " → " + p.esS + ". Contesta en ruso.", audio: q, audioManual: true, esperadas: [r, "У " + p.gen + "."], idioma: "ru", explicacion: "— " + q + " — " + r });
  });

  /* ── Módulo 3: lo que no hay ── */
  C.forEach((c, j) => {
    const yes = "У меня́ есть " + c.nom + ".", no = "У меня́ нет " + c.gen + ".";
    const base = { grupo: "NO-" + j, items: ["lex:" + c.id], oir: no };
    out.push(Object.assign({ id: "U10-no-" + j, tipo: "no-tener", forma: "escribir", dificultad: 2, modulo: 3, pide: "Pásala a negativo.", grande: yes, audio: no, audioManual: true, esperadas: [no], idioma: "ru",
      explicacion: "нет + genitivo: " + u10Cambio(c, "gen") + " " + no }, base));
    out.push(Object.assign({ id: "U10-noel-" + j, tipo: "no-tener", forma: "elegir", dificultad: 1, modulo: 3, pide: "Completa: «No tengo " + c.bare + ".»", grande: "У меня́ нет _____.",
      opciones: baraja(uniq([c.gen, c.nom, c.dat || c.nom]), j), correcta: c.gen, explicacion: u10Cambio(c, "gen") }, base, { grupo: "NOe-" + j }));
    const p = P[j % P.length], ru = "У " + p.gen + " нет " + c.gen + ".", es = p.esS + " no tiene " + c.bare + ".";
    out.push(Object.assign({ id: "U10-noesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "у " + p.gen + " (quién) + нет + " + c.gen + " (genitivo). " + ru }, base, { grupo: "NOr-" + j }));
    if (j % 2 === 0) { const pals = sinP(no).split(" "); pals[pals.length - 1] = c.nom;
      if (c.nom !== c.gen) out.push(Object.assign({ id: "U10-nodet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, pide: "Toca la palabra que está mal.", palabras: pals, correcta: pals.length - 1,
        explicacion: "Después de нет va el genitivo: " + u10Cambio(c, "gen") }, base, { grupo: "NOd-" + j })); }
  });
  [["У меня́ нет вре́мени.", "No tengo tiempo."], ["У меня́ нет де́нег.", "No tengo dinero."], ["У него́ нет рабо́ты.", "Él no tiene trabajo."]].forEach(([ru, es], j) =>
    out.push({ id: "U10-nofor-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 3, grupo: "NF-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 4: cantidad ── */
  Object.keys(U10_CANT).forEach((ru, j) => {
    const s = sust(ru); if (!s) return;
    Object.keys(U10_POCO).forEach((q, k) => {
      if ((j + k) % 2) return;
      const fr = q + " " + s.gen, es = U10_POCO[q].replace("mucho/a", /^(agua|leche|sopa)$/.test(U10_CANT[ru]) ? "mucha" : "mucho").replace("poco/a", /^(agua|leche|sopa)$/.test(U10_CANT[ru]) ? "poca" : "poco") + " " + U10_CANT[ru];
      out.push({ id: "U10-cant-" + j + "-" + k, tipo: "cantidad", forma: "escribir", dificultad: 2, modulo: 4, grupo: "CA-" + j + "-" + k, items: ["lex:" + s.id], oir: fr, pide: "Escribe en ruso: «" + es + "»", audio: fr, audioManual: true,
        esperadas: [fr], idioma: "ru", explicacion: q + " + genitivo: " + u10Cambio(s, "gen") });
    });
    out.push({ id: "U10-cantel-" + j, tipo: "cantidad", forma: "elegir", dificultad: 1, modulo: 4, grupo: "CAe-" + j, items: ["lex:" + s.id], pide: "Completa: «un poco de " + U10_CANT[ru] + "»", grande: "немно́го _____",
      opciones: baraja(uniq([s.gen, s.nom, s.dat]), j), correcta: s.gen, explicacion: u10Cambio(s, "gen") });
  });
  [["стака́н воды́", "un vaso de agua"], ["стака́н со́ка", "un vaso de zumo"], ["ча́шка ча́я", "una taza de té"], ["ча́шка ко́фе", "una taza de café"], ["мно́го люде́й", "mucha gente"], ["мно́го де́нег", "mucho dinero"]].forEach(([ru, es], j) =>
    out.push({ id: "U10-cantf-" + j, tipo: "cantidad", forma: "escribir", dificultad: 2, modulo: 4, grupo: "CF-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 5: preposiciones ── */
  U10_PREP.forEach(([pr, ru, es], j) => {
    const s = sust(ru); if (!s) return;
    const fr = pr + " " + s.gen;
    out.push({ id: "U10-prep-" + j, tipo: "prep", forma: "escribir", dificultad: 2, modulo: 5, grupo: "PP-" + j, items: ["lex:" + s.id], oir: fr, pide: "Escribe en ruso: «" + es + "»", audio: fr, audioManual: true,
      esperadas: [fr], idioma: "ru", explicacion: "**" + pr + "** + genitivo: " + u10Cambio(s, "gen") });
    if (j % 2 === 0) out.push({ id: "U10-prepel-" + j, tipo: "prep", forma: "elegir", dificultad: 1, modulo: 5, grupo: "PPe-" + j, items: ["lex:" + s.id], pide: "Completa: «" + es + "»", grande: pr + " _____",
      opciones: baraja(uniq([s.gen, s.nom, s.dat, s.prep || s.nom]).slice(0, 3), j), correcta: s.gen, explicacion: u10Cambio(s, "gen") });
  });
  [["Я пью ко́фе без молока́.", "Tomo café sin leche."], ["Э́то пода́рок для ма́мы.", "Es un regalo para mamá."], ["По́сле рабо́ты я иду́ в парк.", "Después del trabajo voy al parque."],
   ["До обе́да я рабо́таю.", "Antes del almuerzo trabajo."], ["Банк о́коло до́ма.", "El banco está cerca de la casa."]].forEach(([ru, es], j) => {
    out.push({ id: "U10-prepf-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "PF-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U10-prepd-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, grupo: "PD-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 6: a quién ── */
  Object.keys(U10_VDAT).forEach((vk, a) => {
    const v = verbo(vk); if (!v) return;
    const [esV, cRu, cEs] = U10_VDAT[vk];
    P.forEach((p, j) => {
      if ((a + j) % 3) return;
      const ru = "Я " + v.presente[0] + (cRu ? " " + cRu : "") + " " + p.dat + ".", es = cap(esV[0] + (cEs ? " " + cEs : "") + " " + p.esA) + ".";
      const base = { grupo: "AQ-" + a + "-" + j, items: ["lex:" + v.id, "lex:" + p.id], oir: ru };
      out.push(Object.assign({ id: "U10-aq-" + a + "-" + j, tipo: "a-quien", forma: "escribir", dificultad: 3, modulo: 6, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
        esperadas: [ru, ru.replace(/^Я /, "").replace(/^(.)/, m => m.toUpperCase())], idioma: "ru", explicacion: "кому́? → dativo: " + u10Cambio(p, "dat") + " " + ru }, base));
      out.push(Object.assign({ id: "U10-aqel-" + a + "-" + j, tipo: "completar-rel", forma: "elegir", dificultad: 2, modulo: 6, pide: "Completa: «" + es + "»", grande: "Я " + v.presente[0] + (cRu ? " " + cRu : "") + " _____.",
        opciones: baraja(uniq([p.dat, p.acc, p.nom]), a + j), correcta: p.dat, explicacion: u10Cambio(p, "dat") + (vk === "звони́ть" || vk === "помога́ть" ? " Con " + v.ac + " va dativo, aunque en español diga «a…»." : "") }, base, { grupo: "AQe-" + a + "-" + j }));
    });
  });
  /* Construir: я · пода́рок · ма́ма · дава́ть */
  [["пода́рок", "ма́ма", "Le doy un regalo a mamá."], ["кни́гу", "брат", "Le doy el libro a mi hermano."], ["письмо́", "А́нна", "Le escribo una carta a Ana."]].forEach(([obj, pr, es], j) => {
    const p = sust(pr), v = verbo(j === 2 ? "писа́ть" : "дава́ть"), o = sust(obj.replace("кни́гу", "кни́га")) || { nom: obj, acc: obj };
    const ru = "Я " + v.presente[0] + " " + (o.acc || obj) + " " + p.dat + ".";
    out.push({ id: "U10-cons-" + j, tipo: "construir", forma: "escribir", dificultad: 3, modulo: 6, grupo: "CS-" + j, items: [], oir: ru, pide: "🎁 Arma la frase con estas palabras.", grande: "я · " + (o.nom || obj) + " · " + p.nom + " · " + v.ac,
      pista: es, audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: "Lo que se da: acusativo. A quién: dativo (" + u10Cambio(p, "dat") + ") " + ru });
  });
  P.slice(0, 8).forEach((p, j) => out.push({ id: "U10-datw-" + j, tipo: "forma", forma: "escribir", dificultad: 2, modulo: 6, grupo: "DW-" + j, items: ["lex:" + p.id], pide: "Escribe el dativo (¿a quién?).", grande: p.nom,
    audio: p.dat, audioManual: true, esperadas: [p.dat], idioma: "ru", explicacion: u10Cambio(p, "dat") }));

  /* ── Módulo 7: me gusta, necesito ── */
  U10_ESTADOS.forEach(([ru, e1, e3, e4], j) => {
    if (!e1) return;
    [[0, "мне", e1, ""], [2, "ему́", e3, "Él: "], [4, "нам", e4, ""]].forEach(([i, pr, es], k) => {
      const fr = cap(pr) + " " + ru + ".";
      const esF = (k === 1 ? (/^le /.test(es) ? "A él " + es : "Él " + es) : cap(es)) + ".";
      out.push({ id: "U10-est-" + j + "-" + k, tipo: "estado", forma: "escribir", dificultad: 2 + (k ? 1 : 0), modulo: 7, grupo: "ES-" + j + "-" + k, items: [], oir: fr,
        pide: "Escribe en ruso: «" + esF + "»", audio: fr, audioManual: true, esperadas: [fr], idioma: "ru", explicacion: "**" + pr + "** (dativo) + " + ru + ". " + fr });
    });
  });
  U10_PRON.dat.forEach((d, i) => out.push({ id: "U10-datp-" + i, tipo: "estado", forma: "elegir", dificultad: 1, modulo: 7, grupo: "DP-" + i, items: [], pide: "¿Cómo se dice «a " + U10_PRON.es[i].replace("yo", "mí") + "»?",
    opciones: baraja([d].concat(baraja(U10_PRON.dat.filter(x => x !== d), i).slice(0, 2)), i), correcta: d, explicacion: "a " + U10_PRON.es[i].replace("yo", "mí") + " = " + d }));
  P.slice(0, 6).forEach((p, j) => {
    const fr = cap(p.dat) + " нра́вится му́зыка.", es = "A " + p.esS.charAt(0).toLowerCase() + p.esS.slice(1) + " le gusta la música.";
    out.push({ id: "U10-gus-" + j, tipo: "estado", forma: "escribir", dificultad: 3, modulo: 7, grupo: "GU-" + j, items: ["lex:" + p.id], oir: fr, pide: "Escribe en ruso: «" + es.replace(/^A Ana|^A Iván|^A Masha|^A Dima/, m => m) + "»",
      audio: fr, audioManual: true, esperadas: [fr], idioma: "ru", explicacion: "A quién le gusta: dativo (" + u10Cambio(p, "dat") + ") " + fr });
  });

  /* ── Módulo 8: con quién ── */
  [["гуля́ть", "paseo", "Я гуля́ю"], ["рабо́тать", "trabajo", "Я рабо́таю"], ["жить", "vivo", "Я живу́"], ["обе́дать", "almuerzo", "Я обе́даю"], ["говори́ть", "hablo", "Я говорю́"]].forEach(([vk, esV, ruV], a) =>
    P.forEach((p, j) => {
      if ((a + j) % 3) return;
      const ru = ruV + " с " + p.ins + ".", es = cap(esV + " " + p.esCon) + ".";
      const base = { grupo: "CQ-" + a + "-" + j, items: ["lex:" + p.id], oir: ru };
      out.push(Object.assign({ id: "U10-cq-" + a + "-" + j, tipo: "con-quien", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
        esperadas: [ru, ru.replace(/^Я /, "").replace(/^(.)/, m => m.toUpperCase())], idioma: "ru", explicacion: "с + instrumental: " + u10Cambio(p, "ins") + " " + ru }, base));
      out.push(Object.assign({ id: "U10-cqel-" + a + "-" + j, tipo: "completar-rel", forma: "elegir", dificultad: 2, modulo: 8, pide: "Completa: «" + es + "»", grande: ruV + " с _____.",
        opciones: baraja(uniq([p.ins, p.nom, p.dat, p.gen]).slice(0, 3).concat([p.ins]).filter((x, i, a) => a.indexOf(x) === i), a + j), correcta: p.ins, explicacion: u10Cambio(p, "ins") }, base, { grupo: "CQe-" + a + "-" + j }));
    }));
  P.slice(0, 6).forEach((p, j) => {
    const q = "С кем А́нна?", r = "А́нна с " + p.ins + ".";
    if (p.nom === "А́нна") return;
    out.push({ id: "U10-cqesc-" + j, tipo: "con-quien", forma: "escribir", dificultad: 2, modulo: 8, grupo: "CE-" + j, items: ["lex:" + p.id], oir: r, contexto: [{ p: "—", ru: q }], pide: "👩 + " + p.esS + ". Contesta en ruso.",
      audio: q, audioManual: true, esperadas: [r, "С " + p.ins + "."], idioma: "ru", explicacion: "— " + q + " — " + r });
  });
  [["Вчера́ я был с друзья́ми.", "Ayer estuve con amigos. (eres hombre)"], ["За́втра я бу́ду рабо́тать с колле́гой.", "Mañana voy a trabajar con un colega."], ["Мы живём с ба́бушкой.", "Vivimos con la abuela."]].forEach(([ru, es], j) =>
    out.push({ id: "U10-cqt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "CT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 9: con qué ── */
  U10_CON_QUE.forEach(([vb, _o, t, es], j) => {
    const s = sust(t); if (!s) return;
    const ru = "Я " + vb + " " + s.ins + ".";
    out.push({ id: "U10-cqu-" + j, tipo: "con-que", forma: "escribir", dificultad: 3, modulo: 9, grupo: "QU-" + j, items: ["lex:" + s.id], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: "Con qué: instrumental, sin с. " + u10Cambio(s, "ins") + " " + ru });
    out.push({ id: "U10-cquel-" + j, tipo: "con-que", forma: "elegir", dificultad: 2, modulo: 9, grupo: "QUe-" + j, items: ["lex:" + s.id], pide: "Completa: «" + es + "»", grande: "Я " + vb + " _____.",
      opciones: baraja(uniq(["с " + s.ins, s.ins, s.nom]), j), correcta: s.ins, explicacion: "La herramienta va en instrumental **sin** с (с es «junto con alguien»). " + ru });
  });

  /* ── Módulo 10: profesión ── */
  Object.keys(U10_PROFES).forEach((ru, j) => {
    const s = sust(ru); if (!s) return;
    const [m, f] = U10_PROFES[ru];
    [[m, "Я рабо́таю", "Trabajo de ", "(eres hombre)"], [f, "Я рабо́таю", "Trabajo de ", "(eres mujer)"]].forEach(([es, ruV, esV, quien], k) => {
      if (!es) return;
      const r = ruV + " " + s.ins + ".";
      out.push({ id: "U10-pro-" + j + "-" + k, tipo: "profesion", forma: "escribir", dificultad: 2, modulo: 10, grupo: "PR-" + j + "-" + k, items: ["lex:" + s.id], oir: r, contexto: [{ p: "—", ru: "Кем ты рабо́таешь?" }],
        pide: "Contesta: «" + esV + es + "».", audio: r, audioManual: true, esperadas: [r, r.replace(/^Я /, "").replace(/^(.)/, x => x.toUpperCase())], idioma: "ru", explicacion: "рабо́тать + instrumental: " + u10Cambio(s, "ins") + " " + r });
    });
    out.push({ id: "U10-proel-" + j, tipo: "profesion", forma: "elegir", dificultad: 1, modulo: 10, grupo: "PRe-" + j, items: ["lex:" + s.id], pide: "Completa la frase.", grande: "Она́ рабо́тает _____.",
      opciones: baraja(uniq([s.ins, s.nom, s.dat]), j), correcta: s.ins, explicacion: u10Cambio(s, "ins") });
  });
  [["Ра́ньше я был студе́нтом.", "Antes era estudiante. (eres hombre)"], ["За́втра я бу́ду рабо́тать учи́телем.", "Mañana voy a trabajar de maestro."], ["Кем ты рабо́таешь?", "¿De qué trabajas?"]].forEach(([ru, es], j) =>
    out.push({ id: "U10-prot-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "PT-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 11: los seis casos juntos ── */
  const CASOS6 = ["Nominativo", "Acusativo", "Prepositivo", "Genitivo", "Dativo", "Instrumental"];
  [["Я гуля́ю с А́нной.", "А́нной", 5], ["У Ива́на есть маши́на.", "Ива́на", 3], ["Я звоню́ ма́ме.", "ма́ме", 4], ["Я ви́жу бра́та.", "бра́та", 1], ["Мы в Москве́.", "Москве́", 2],
   ["Ма́ша чита́ет.", "Ма́ша", 0], ["У меня́ нет вре́мени.", "вре́мени", 3], ["Я рабо́таю врачо́м.", "врачо́м", 5], ["Я пишу́ ру́чкой.", "ру́чкой", 5], ["Э́то пода́рок для ма́мы.", "ма́мы", 3],
   ["Мне нра́вится му́зыка.", "му́зыка", 0], ["Я даю́ кни́гу дру́гу.", "дру́гу", 4]].forEach(([ru, w, k], j) =>
    out.push({ id: "U10-cid-" + j, tipo: "caso-id", forma: "elegir", dificultad: 2, modulo: 11, grupo: "CI-" + j, items: [], oir: ru, pide: "¿En qué caso está «" + w + "»?", grande: ru, audio: ru,
      opciones: CASOS6.slice(), correcta: CASOS6[k], explicacion: "**" + w + "**: " + CASOS6[k].toLowerCase() + "." }));
  [["Le doy un regalo a mi hermana.", "Я даю́ пода́рок сестре́."], ["Ayer estuve en el restaurante con mi hermano. (eres hombre)", "Вчера́ я был в рестора́не с бра́том."], ["Ana no tiene coche.", "У А́нны нет маши́ны."],
   ["Después del trabajo llamo a Iván.", "По́сле рабо́ты я звоню́ Ива́ну."], ["Compro un regalo para mamá.", "Я покупа́ю пода́рок для ма́мы."], ["Me gusta Moscú.", "Мне нра́вится Москва́."]].forEach(([es, ru], j) => {
    out.push({ id: "U10-mix-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 11, grupo: "MX-" + j, items: [], oir: ru, pide: "Escribe en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U10-mixd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 11, grupo: "MXd-" + j, items: [], pide: "Escucha y escribe.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  U10_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U10-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 11, grupo: "L10-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U10-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 11, grupo: "L10v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* ── Vocabulario nuevo (12/10/2026): significado y palabra-es-ru, en el módulo donde se presenta ── */
  const modDe = {};
  Object.keys(U10_VISTAS).forEach(m => U10_VISTAS[m].split(" ").forEach(ru => { if (U10_GLOSA[ru] && !modDe[ru]) modDe[ru] = +m; }));
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(10) >= 0 && U10_GLOSA[e.acento] && modDe[e.acento]);
  nuevas.forEach((e, i) => {
    const es = U10_GLOSA[e.acento], m = modDe[e.acento];
    const dis = baraja(nuevas.filter(x => x.id !== e.id && U10_GLOSA[x.acento] !== es && Math.abs(modDe[x.acento] - m) <= 1).map(x => U10_GLOSA[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru };
    if (dis.length >= 2) out.push(Object.assign({ id: "U10-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U10-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + (e.ru.length === 1 ? " letra." : " letras."), esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });
  /* Ampliación: со мной… */
  U10_PRON.ins.forEach((x, i) => out.push({ id: "U10-amp-" + i, tipo: "con-quien", forma: "escribir", dificultad: 2, modulo: 8, ampliacion: true, grupo: "AM-" + i, items: [], oir: x,
    pide: "Escribe en ruso: «" + ["conmigo", "contigo", "con él", "con ella", "con nosotros", "con ustedes", "con ellos"][i] + "»", audio: x, audioManual: true,
    esperadas: [x], idioma: "ru", explicacion: x }));

  /* ══ Profundización (12/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar (~20 % de la sesión),
     más pareja (el futuro de resultado de los verbos con dativo) y aspecto (escribir con el verbo que va). */
  const push = o => out.push(o);
  const low = t => t.charAt(0).toLowerCase() + t.slice(1);
  const S = ru => sust(ru);
  const fin = (a, b) => { a = a.replace(/́/g, ""); b = b.replace(/́/g, ""); let i = 0; while (i < a.length && i < b.length && a[i] === b[i]) i++; return [a.slice(i), b.slice(i)]; };
  const clase = s => { const n = s.nom.replace(/́/g, ""); if (/[ая]$/.test(n)) return /[гкхжшчщ]а$/.test(n) ? "a-i" : /я$/.test(n) ? "ya" : "a"; if (/ь$/.test(n)) return s.g === "f" ? "f-soft" : "m-soft"; if (/й$/.test(n)) return "m-soft"; if (/[оe]$/.test(n)) return "o"; return "m"; };
  const PP = P.filter(p => p.dat && p.ins && p.gen);
  const QUIEN6 = { gen: "De quién / quién tiene: genitivo", dat: "A quién: dativo", ins: "Con quién: instrumental", acc: "A quién recibe la acción: acusativo" };

  /* ── Módulo 1: qué caso y por qué ── */
  PP.slice(0, 8).forEach((p, j) => {
    const fr = [["Я звоню́ " + p.dat + ".", "dat", p.dat], ["Я гуля́ю с " + p.ins + ".", "ins", p.ins], ["У " + p.gen + " есть кни́га.", "gen", p.gen], ["Я ви́жу " + p.acc + ".", "acc", p.acc]][j % 4];
    const ops = ["A quién: dativo", "Con quién: instrumental", "De quién / quién tiene: genitivo", "A quién recibe la acción: acusativo"];
    push({ id: "U10-pq-c-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 1, regla: "u10-seis-casos", grupo: "PC-" + j, items: ["lex:" + p.id], oir: fr[0], pide: "¿Por qué " + fr[2] + "?", grande: fr[0], audio: fr[0], audioManual: true,
      opciones: baraja([QUIEN6[fr[1]]].concat(baraja(ops.filter(x => x !== QUIEN6[fr[1]]), j).slice(0, 2)), j), correcta: QUIEN6[fr[1]], explicacion: fr[0] + " " + u10Cambio(p, fr[1]) });
    const ok = "Я гуля́ю с " + p.ins + ".", mal = "Я гуля́ю с " + p.dat + ".";
    if (p.ins !== p.dat) push({ id: "U10-nat-c-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 1, regla: "u10-relacion", grupo: "NC-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Cuál suena natural?",
      opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " Con quién: instrumental. " + u10Cambio(p, "ins") });
  });

  /* ── Módulo 2: tener, de quién, terminaciones, у + persona ── */
  PP.forEach((p, j) => {
    const c = C[(j + 1) % C.length], ok = "У " + p.gen + " есть " + c.nom + ".", mal = "У " + p.nom + " есть " + c.nom + ".";
    if (j < 10) push({ id: "U10-nat-t-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 2, regla: "u10-tener", grupo: "NT-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Cuál suena natural?",
      opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " у + genitivo: " + u10Cambio(p, "gen") });
    const d = "Э́то " + c.nom + " " + p.gen + ".", dm = "Э́то " + c.nom + " " + p.nom + ".";
    if (j % 2 === 0) push({ id: "U10-nat-d-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u10-de-quien", grupo: "ND-" + j, items: ["lex:" + p.id], oir: d, pide: "¿Cuál suena natural?",
      opciones: baraja([d, dm], j + 1), correcta: d, explicacion: d + " El dueño, después y en genitivo: " + u10Cambio(p, "gen") });
  });
  [["сестра́", ["ма́ма", "А́нна"]], ["Ма́ша", ["ма́ма", "па́па"]], ["кни́га", ["ба́бушка", "су́мка"]], ["Ива́н", ["брат", "друг"]], ["учи́тель", ["слова́рь", "учи́тель"]], ["компью́тер", ["телефо́н", "брат"]]].forEach(([w, ej], j) => {
    const s = S(w), E = ej.map(S).filter(x => x && x.nom !== s.nom).slice(0, 2); if (!s || E.length < 2) return;
    const mal = s.nom.replace(/[ая]́?$/, m => m.replace(/[ая]/, "е")) === s.nom ? s.dat : s.dat;
    push({ id: "U10-desc-g-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 2, regla: "u10-gen-fin", grupo: "DG-" + j, items: ["lex:" + s.id], oir: "у " + s.gen,
      pide: E.map(x => x.nom + " → у " + x.gen).join(" · ") + ". ¿Y " + s.nom + "?", opciones: baraja(uniq(["у " + s.gen, "у " + mal]), j), correcta: "у " + s.gen, explicacion: u10Cambio(s, "gen") });
  });
  [["кни́га", "Después de **г**, **к**, **х**… va **и**"], ["ба́бушка", "Después de **г**, **к**, **х**… va **и**"], ["ма́ма", "Termina en **-а**: va **-ы**"], ["брат", "Es masculino: se agrega **-а**"]].forEach(([w, r], j) => {
    const s = S(w), ru = "у " + s.gen, ops = ["Después de г, к, х… va и", "Termina en -а: va -ы", "Es masculino: se agrega -а"];
    push({ id: "U10-pq-g-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 2, regla: "u10-gen-fin", grupo: "PG-" + j, items: ["lex:" + s.id], oir: ru, pide: "¿Por qué «" + s.gen + "»?", grande: ru, audio: ru, audioManual: true,
      opciones: ops, correcta: r.replace(/\*\*/g, ""), explicacion: u10Cambio(s, "gen") });
  });
  [["ба́бушка", "en lo de la abuela"], ["брат", "en lo de mi hermano"], ["врач", "en el médico"], ["ма́ма", "en lo de mamá"]].forEach(([w, es], j) => {
    const s = S(w), ok = "Я у " + s.gen + ".", mal = "Я в " + s.prep + ".";
    push({ id: "U10-nat-u-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 2, regla: "u10-u-kogo", grupo: "NU-" + j, items: ["lex:" + s.id], oir: ok, pide: "«Estoy " + es + "». ¿Cuál suena natural?",
      opciones: baraja([ok, mal], j), correcta: ok, explicacion: ok + " En lo de alguien: у + genitivo." });
  });
  [["А́нна", "маши́на"], ["Ива́н", "соба́ка"]].forEach(([w, c], j) => {
    const s = S(w), pal = ["У", s.gen, "есть", S(c).nom];
    push({ id: "U10-desarm-t-" + j, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo: 2, regla: "u10-tener", grupo: "DT-" + j, items: [], oir: pal.join(" ") + ".", audio: pal.join(" ") + ".", audioManual: true,
      pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: [{ pide: "¿Quién tiene? (en genitivo)", correcta: 1 }, { pide: "¿Qué hay? (el sujeto)", correcta: 3 }, { pide: "¿Qué palabra es «hay»?", correcta: 2 }],
      explicacion: pal.join(" ") + ". у + genitivo + есть + nominativo." });
  });

  /* ── Módulo 3: lo que no hay ── */
  C.forEach((c, j) => {
    if (c.nom === c.gen) return;
    const ok = "У меня́ нет " + c.gen + ".", mal = "У меня́ нет " + c.nom + ".";
    push({ id: "U10-nat-n-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 3, regla: "u10-net", grupo: "NN-" + j, items: ["lex:" + c.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Después de нет, genitivo: " + u10Cambio(c, "gen") });
    if (j % 2 === 0) push({ id: "U10-diag-n-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 3, regla: "u10-net", grupo: "DN-" + j, items: ["lex:" + c.id], oir: ok, pide: "Quieres decir que no tienes. ¿Qué falla?",
      grande: "У меня́ есть не " + c.nom + ".", opciones: ["Para «no tengo»: нет + genitivo", "Falta у меня́", "El orden"], correcta: "Para «no tengo»: нет + genitivo", esperadas: [ok], explicacion: ok });
    if (j < 6) push({ id: "U10-cad-n-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 3, regla: "u10-net-tiempos", grupo: "CN-" + j, items: ["lex:" + c.id], oir: "Вчера́ у меня́ не́ было " + c.gen + ".",
      pide: "Cambia la frase paso a paso.", base: "У меня́ есть " + c.nom + ".",
      pasos: [{ pide: "Di que no tienes.", esperadas: [ok] }, { pide: "Ahora: ayer no tenías (вчера́).", esperadas: ["Вчера́ у меня́ не́ было " + c.gen + ".", "У меня́ не́ было " + c.gen + " вчера́."] }],
      explicacion: "У меня́ есть " + c.nom + ". → " + ok + " → Вчера́ у меня́ не́ было " + c.gen + ". En pasado, siempre не́ было + genitivo." });
  });
  ["маши́на", "соба́ка", "кни́га", "кварти́ра"].forEach((w, j) => {
    const c = S(w), ok = "Вчера́ у меня́ не́ было " + c.gen + ".", mal = "Вчера́ у меня́ не была́ " + c.nom + ".";
    push({ id: "U10-nat-nb-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 3, regla: "u10-net-tiempos", grupo: "NB-" + j, items: ["lex:" + c.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Con не, siempre не́ было + genitivo." });
    push({ id: "U10-pq-nb-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 3, regla: "u10-net-tiempos", grupo: "PB-" + j, items: ["lex:" + c.id], oir: ok, pide: "¿Por qué не́ было y no не была́?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Con не, siempre не́ было: neutro", "Porque " + c.nom + " es neutro"], correcta: "Con не, siempre не́ было: neutro", explicacion: ok + " No importa el género de lo que falta." });
  });
  PP.slice(0, 6).forEach((p, j) => {
    const est = j % 2 === 0, ru = est ? cap(p.nom) + " до́ма." : cap(p.gen) + " нет до́ма.";
    push({ id: "U10-oido-n-" + j, tipo: "oido", forma: "elegir", dificultad: 2, modulo: 3, regla: "u10-net", grupo: "ON-" + j, items: ["lex:" + p.id], oir: ru, pide: "Escucha: ¿está o no está?", audio: ru,
      opciones: ["Está en casa", "No está en casa"], correcta: est ? "Está en casa" : "No está en casa", explicacion: ru + (est ? "" : " Quien no está, en genitivo: " + p.gen + ".") });
  });

  /* ── Módulo 4: cantidad ── */
  [["буты́лка", "вода́"], ["кусо́к", "сыр"], ["килогра́мм", "рис"], ["литр", "молоко́"], ["па́чка", "чай"], ["стака́н", "сок"], ["буты́лка", "вино́"]].forEach(([e0, w], j) => {
    const E = S(e0), X = S(w), ok = cap(E.nom) + " " + X.gen + ".", mal = cap(E.nom) + " " + X.nom + ".";
    push({ id: "U10-nat-e-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 4, regla: "u10-envases", grupo: "NE-" + j, items: ["lex:" + E.id, "lex:" + X.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Lo que contiene, en genitivo: " + u10Cambio(X, "gen") });
  });
  [["мно́го", "рабо́та"], ["ма́ло", "вода́"], ["немно́го", "са́хар"], ["мно́го", "вре́мя"]].forEach(([q, w], j) => {
    const X = S(w), ok = "У меня́ " + q + " " + X.gen + ".", mal = "У меня́ " + q + " " + X.nom + ".";
    push({ id: "U10-nat-q-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 4, regla: "u10-cantidad", grupo: "NQ-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Después de " + q + ", genitivo." });
  });
  [["стака́н", 2, "два"], ["килогра́мм", 3, "три"], ["литр", 4, "четы́ре"], ["кусо́к", 2, "два"]].forEach(([w, n, num], j) => {
    const X = S(w), ok = num + " " + X.gen;
    push({ id: "U10-pq-ch-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 4, regla: "u10-por-que-chasa", grupo: "PCH-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Por qué «" + X.gen + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Después de 2, 3 o 4 va el genitivo singular", "Es el plural de " + X.nom], correcta: "Después de 2, 3 o 4 va el genitivo singular", explicacion: ok + ": como два часа́." });
    push({ id: "U10-desc-ch-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 4, regla: "u10-por-que-chasa", grupo: "DCH-" + j, items: ["lex:" + X.id], oir: ok,
      pide: "два часа́ · три часа́. ¿Y " + num + " + " + X.nom + "?", opciones: baraja([ok, num + " " + X.nom], j), correcta: ok, explicacion: ok + ": el mismo genitivo singular que часа́." });
  });

  /* ── Módulo 5: preposiciones ── */
  [["без", "молоко́", "Tomo café sin leche", "Я пью ко́фе "], ["для", "ма́ма", "Es un regalo para mamá", "Э́то пода́рок "], ["по́сле", "рабо́та", "Después del trabajo paseo", ""], ["от", "брат", "Una carta de mi hermano", "Письмо́ "],
   ["вме́сто", "чай", "Agua en lugar de té", "Вода́ "], ["напро́тив", "парк", "El banco está enfrente del parque", "Банк "], ["о́коло", "дом", "El parque está cerca de la casa", "Парк "], ["кро́ме", "брат", "Además de mi hermano, tengo una hermana", ""]].forEach(([pr, w, es, pre], j) => {
    const X = S(w), frag = pr + " " + X.gen;
    const ok = pr === "по́сле" ? "По́сле " + X.gen + " я гуля́ю." : pr === "кро́ме" ? "Кро́ме " + X.gen + ", у меня́ есть сестра́." : pre + frag + ".";
    const mal = ok.replace(new RegExp(X.gen + "(?=[ .,])"), X.nom);
    if (ok === mal) return;
    push({ id: "U10-nat-p-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 5, regla: "u10-prep-gen", grupo: "NP-" + j, items: ["lex:" + X.id], oir: ok, pide: "«" + es + "». ¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + pr + " + genitivo: " + u10Cambio(X, "gen") });
    if (j % 2 === 0) push({ id: "U10-pq-p-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 5, regla: "u10-prep-gen", grupo: "PP-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Por qué " + X.gen + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Después de " + pr + " va genitivo", "Es a quién: dativo"], correcta: "Después de " + pr + " va genitivo", explicacion: ok });
  });
  [["брат", "от", "Una carta de mi hermano", "Письмо́"], ["ма́ма", "от", "Un regalo de mamá", "Пода́рок"], ["Москва́", "из", "Soy de Moscú", "Я"], ["магази́н", "из", "Vuelvo del negocio", "Я иду́"]].forEach(([w, pr, es, a0], j) => {
    const X = S(w), otro = pr === "от" ? "из" : "от", ok = a0 + " " + pr + " " + X.gen + ".", mal = a0 + " " + otro + " " + X.gen + ".";
    push({ id: "U10-par-io-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 5, regla: "u10-iz-ot", grupo: "IO-" + j, items: ["lex:" + X.id], oir: ok, pide: "«" + es + "». ¿Cuál dices?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + (pr === "от" ? "De una persona: от." : "De un lugar: из.") });
  });
  push({ id: "U10-diag-io-0", tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 5, regla: "u10-iz-ot", grupo: "DIO-0", items: [], oir: "Письмо́ от бра́та.", pide: "La frase tiene un error. ¿Qué falla?", grande: "Письмо́ из бра́та.",
    opciones: ["De una persona va от", "El caso de брат", "Falta есть"], correcta: "De una persona va от", esperadas: ["Письмо́ от бра́та."], explicacion: "Письмо́ от бра́та. De una persona: от." });

  /* ── Módulo 6: dativo, к / у, parejas ── */
  PP.slice(0, 8).forEach((p, j) => {
    const v = ["звоню́", "помога́ю", "пишу́", "отвеча́ю"][j % 4], ok = "Я " + v + " " + p.dat + ".", mal = "Я " + v + " " + p.acc + ".";
    if (p.dat === p.acc) return;
    push({ id: "U10-nat-a-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-dat-verbos", grupo: "NA-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + v + " va con dativo: " + u10Cambio(p, "dat") });
    if (j % 2 === 0) push({ id: "U10-pq-a-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-dat-verbos", grupo: "PA-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Por qué " + p.dat + " y no " + p.acc + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Ese verbo va con dativo: a quién", "Es un lugar: prepositivo"], correcta: "Ese verbo va con dativo: a quién", explicacion: ok });
    if (j < 4) push({ id: "U10-diag-a-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 6, regla: "u10-dat-verbos", grupo: "DA-" + j, items: ["lex:" + p.id], oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal,
      opciones: ["Va dativo, no acusativo", "El verbo", "Falta у"], correcta: "Va dativo, no acusativo", esperadas: [ok], explicacion: ok });
  });
  [["брат", ["друг", "Ива́н"]], ["сестра́", ["ма́ма", "А́нна"]], ["учи́тель", ["слова́рь", "учи́тель"]], ["Ма́ша", ["ма́ма", "ба́бушка"]], ["па́па", ["ма́ма", "Ди́ма"]], ["Ива́н", ["брат", "друг"]]].forEach(([w, ej], j) => {
    const s = S(w), E = ej.map(S).filter(x => x && x.nom !== s.nom && x.dat).slice(0, 2); if (!s || E.length < 2) return;
    push({ id: "U10-desc-d-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-dat-fin", grupo: "DD-" + j, items: ["lex:" + s.id], oir: s.dat,
      pide: E.map(x => x.nom + " → " + x.dat).join(" · ") + ". ¿Y " + s.nom + "?", opciones: baraja(uniq([s.dat, s.gen]), j), correcta: s.dat, explicacion: u10Cambio(s, "dat") });
  });
  [["врач", "Vas al médico", "Estás en el médico"], ["ма́ма", "Vas a lo de mamá", "Estás en lo de mamá"], ["брат", "Vas a lo de tu hermano", "Estás en lo de tu hermano"], ["ба́бушка", "Vas a lo de la abuela", "Estás en lo de la abuela"]].forEach(([w, ir, estar], j) => {
    const s = S(w), a = "Я иду́ к " + s.dat + ".", b = "Я у " + s.gen + ".", vamos = j % 2 === 0;
    push({ id: "U10-par-ku-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-k-u", grupo: "KU-" + j, items: ["lex:" + s.id], oir: vamos ? a : b, pide: "«" + (vamos ? ir : estar) + "». ¿Cuál dices?", opciones: baraja([a, b], j), correcta: vamos ? a : b,
      explicacion: vamos ? a + " Adónde, a una persona: к + dativo." : b + " Dónde, con una persona: у + genitivo." });
    push({ id: "U10-nat-k-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-k-u", grupo: "NK-" + j, items: ["lex:" + s.id], oir: a, pide: "¿Cuál suena natural?", opciones: baraja([a, "Я иду́ в " + s.acc + "."], j + 1), correcta: a,
      explicacion: a + " A una persona se va con к + dativo." });
  });
  const OBJ2 = { "дать": ["кни́гу", "el libro"], "сказа́ть": ["но́вость", "la noticia"] };
  const PAR6 = U10_PARES.map(([i, r, es]) => ({ i: verbo(i), r: verbo(r), es })).filter(x => x.i && x.r && x.r.futuro);
  PAR6.forEach((x, j) => {
    const p = PP[j % PP.length], ok = "За́втра я " + x.r.futuro[0] + " " + p.dat + ".", mal = "За́втра я бу́ду " + x.r.ac + " " + p.dat + ".";
    push({ id: "U10-nat-pd-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 6, regla: "u10-pares-dat", grupo: "NPD-" + j, items: ["lex:" + x.r.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + x.r.ac + " es de resultado: su futuro, sin бу́ду." });
    push({ id: "U10-parj-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: 6, regla: "u10-pares-dat", grupo: "PJ-" + j, items: ["lex:" + x.r.id], oir: x.r.futuro[0], pide: "¿Cómo es «voy a " + x.es + "» (я), una vez?",
      opciones: baraja(uniq([x.r.futuro[0], "бу́ду " + x.r.ac, x.i.presente[0]]), j), correcta: x.r.futuro[0], explicacion: x.i.ac + " → " + x.r.ac + ": я " + x.r.futuro[0] + "." });
    const OBJ = OBJ2[x.r.ac];
    const ob = OBJ ? " " + OBJ[0] : "", okA = "За́втра я " + x.r.futuro[0] + " " + p.dat + ob + ".";
    if (j < 5) push({ id: "U10-asp-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: 6, regla: "u10-pares-dat", grupo: "AS-" + j, items: ["lex:" + x.r.id], oir: okA,
      pide: "Escribe en ruso: «Mañana " + (OBJ ? "le voy a " + x.es + " " + OBJ[1] + " " : "voy a " + x.es + " ") + p.esA + "» (una vez).", audio: okA, audioManual: true,
      esperadas: [okA, "Я " + x.r.futuro[0] + " " + p.dat + ob + " за́втра.", "За́втра " + x.r.futuro[0] + " " + p.dat + ob + "."].concat(ob ? ["За́втра я " + x.r.futuro[0] + ob + " " + p.dat + "."] : []), idioma: "ru", explicacion: okA });
  });
  PP.slice(0, 5).forEach((p, j) => {
    const q = PP[(j + 3) % PP.length], b0 = "Я звоню́ " + p.dat + ".";
    push({ id: "U10-cad-d-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 6, regla: "u10-dat-verbos", grupo: "CD-" + j, items: ["lex:" + p.id, "lex:" + q.id], oir: "За́втра я позвоню́ " + q.dat + ".", pide: "Cambia la frase paso a paso.", base: b0,
      pasos: [{ pide: "Ahora a otra persona: " + q.nom + ".", esperadas: ["Я звоню́ " + q.dat + "."] }, { pide: "Ahora: mañana, una vez (за́втра).", esperadas: ["За́втра я позвоню́ " + q.dat + ".", "Я позвоню́ " + q.dat + " за́втра."] }],
      explicacion: b0 + " → Я звоню́ " + q.dat + ". → За́втра я позвоню́ " + q.dat + ". " + u10Cambio(q, "dat") });
  });

  /* ── Módulo 7: gustar, estados, edad, ну́жно ── */
  PP.slice(0, 6).forEach((p, j) => {
    const w = ["му́зыка", "Москва́", "ко́фе", "рабо́та", "чай", "кни́га"][j], ok = cap(p.dat) + " нра́вится " + w + ".", mal = cap(p.nom) + " нра́вится " + w + ".";
    push({ id: "U10-nat-g-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-gustar", grupo: "NG-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " A quién le gusta: dativo. " + u10Cambio(p, "dat") });
  });
  [["Мне нра́вится му́зыка.", "Я нра́влюсь му́зыка."], ["Мне нра́вятся фи́льмы.", "Мне нра́вится фи́льмы."], ["Мне понра́вился фильм.", "Мне понра́вилась фильм."], ["Нам понра́вилась Москва́.", "Нам понра́вился Москва́."]].forEach(([ok, mal], j) => {
    push({ id: "U10-nat-g2-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-gustar", grupo: "NG2-" + j, items: [], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + ["A quién: dativo; lo que gusta, sujeto.", "Lo que gusta es plural: нра́вятся.", "фильм es masculino: понра́вился.", "Москва́ es femenino: понра́вилась."][j] });
    if (j >= 1) push({ id: "U10-pq-g2-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-gustar", grupo: "PG2-" + j, items: [], oir: ok, pide: "¿Por qué " + ok.split(" ")[1].replace(".", "") + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Concuerda con lo que gusta", "Concuerda con a quién le gusta"], correcta: "Concuerda con lo que gusta", explicacion: ok + " Lo que gusta es el sujeto." });
  });
  [["хо́лодно", "Я"], ["гру́стно", "Она́"], ["стра́шно", "Мы"], ["ве́село", "Он"], ["жа́рко", "Я"], ["интере́сно", "Они́"]].forEach(([w, s], j) => {
    const dat = { "Я": "Мне", "Она́": "Ей", "Мы": "Нам", "Он": "Ему́", "Они́": "Им" }[s], ok = dat + " " + w + ".", mal = s + " " + w + ".";
    push({ id: "U10-nat-es-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 7, regla: "u10-estados", grupo: "NES-" + j, items: [], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " El estado va con dativo: " + low(dat) + "." });
  });
  [[20, "два́дцать", "Мне"], [3, "три", "Ему́"], [30, "три́дцать", "Ей"], [2, "два", "Бра́ту"], [45, null, null], [4, "четы́ре", "Сестре́"]].forEach(([n, num, d], j) => {
    if (!num) return;
    const f = n <= 4 ? "го́да" : "лет", ok = d + " " + num + " " + f + ".";
    push({ id: "U10-nat-ed-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-edad", grupo: "NED-" + j, items: [], oir: ok, pide: "¿Cuál suena natural?",
      opciones: baraja([ok, j % 2 ? d + " " + num + " " + (n <= 4 ? "лет" : "го́да") + "." : "У " + ({ "Мне": "меня́", "Ему́": "него́", "Ей": "неё", "Бра́ту": "бра́та", "Сестре́": "сестры́" }[d]) + " " + num + " " + f + "."], j), correcta: ok,
      explicacion: ok + " La edad: dativo + " + (n <= 4 ? "го́да (2, 3, 4)." : "лет (5 o más).") });
    push({ id: "U10-pq-ed-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-edad", grupo: "PED-" + j, items: [], oir: ok, pide: "¿Por qué «" + f + "»?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Va después de 2, 3 o 4", "Va después de 5 o más"], correcta: n <= 4 ? "Va después de 2, 3 o 4" : "Va después de 5 o más", explicacion: ok });
  });
  [["купи́ть", "покупа́ть", "хлеб", "comprar pan"], ["позвони́ть", "звони́ть", "ма́ме", "llamar a mamá"], ["сде́лать", "де́лать", "рабо́ту", "hacer el trabajo"]].forEach(([r, i, o, es], j) => {
    const una = "Мне ну́жно " + r + " " + o + ".", siempre = "Мне ну́жно ка́ждый день " + i + " " + o + ".";
    push({ id: "U10-par-nz-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-nuzhno", grupo: "NZ-" + j, items: [], oir: una, pide: "«Tengo que " + es + "» (hoy, una vez). ¿Cuál dices?",
      opciones: baraja([una, "Мне ну́жно " + i + " " + o + "."], j), correcta: una, explicacion: una + " Una acción concreta: resultado." });
    push({ id: "U10-par-nzs-" + j, tipo: "par", forma: "elegir", dificultad: 2, modulo: 7, regla: "u10-nuzhno", grupo: "NZs-" + j, items: [], oir: siempre, pide: "«Tengo que " + es + " todos los días». ¿Cuál dices?",
      opciones: baraja([siempre, "Мне ну́жно ка́ждый день " + r + " " + o + "."], j + 1), correcta: siempre, explicacion: siempre + " Se repite: proceso." });
  });

  /* ── Módulo 8: con quién ── */
  PP.slice(0, 8).forEach((p, j) => {
    const ok = "Я гуля́ю с " + p.ins + ".", mal = "Я гуля́ю с " + p.nom + ".";
    push({ id: "U10-nat-i-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 8, regla: "u10-s-kem", grupo: "NI-" + j, items: ["lex:" + p.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + u10Cambio(p, "ins") });
  });
  [["брат", ["друг", "Ива́н"]], ["сестра́", ["ма́ма", "А́нна"]], ["учи́тель", ["слова́рь", "учи́тель"]], ["па́па", ["ма́ма", "ба́бушка"]], ["Ива́н", ["брат", "друг"]]].forEach(([w, ej], j) => {
    const s = S(w), E = ej.map(S).filter(x => x && x.nom !== s.nom && x.ins).slice(0, 2); if (!s || E.length < 2) return;
    push({ id: "U10-desc-i-" + j, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: 8, regla: "u10-ins-fin", grupo: "DI-" + j, items: ["lex:" + s.id], oir: "с " + s.ins,
      pide: E.map(x => x.nom + " → с " + x.ins).join(" · ") + ". ¿Y " + s.nom + "?", opciones: baraja(uniq(["с " + s.ins, "с " + s.dat]), j), correcta: "с " + s.ins, explicacion: u10Cambio(s, "ins") });
  });
  [["брат", "живём в Москве́", "живу́ в Москве́", "Mi hermano y yo vivimos en Moscú"], ["ма́ма", "гото́вим у́жин", "гото́влю у́жин", "Mamá y yo preparamos la cena"], ["А́нна", "гуля́ем", "гуля́ю", "Ana y yo paseamos"]].forEach(([w, pl, sg, es], j) => {
    const s = S(w), ok = "Мы с " + s.ins + " " + pl + ".", mal = "Мы с " + s.ins + " " + sg + ".";
    push({ id: "U10-nat-ms-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 8, regla: "u10-my-s", grupo: "MS-" + j, items: ["lex:" + s.id], oir: ok, pide: "«" + es + "». ¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " мы с…: son dos, el verbo va en plural." });
    push({ id: "U10-cad-ms-" + j, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 8, regla: "u10-my-s", grupo: "CMS-" + j, items: ["lex:" + s.id], oir: ok, pide: "Cambia la frase paso a paso.", base: "Я " + sg + ".",
      pasos: [{ pide: "Agrega con quién: " + s.nom + ".", esperadas: ["Я " + sg + " с " + s.ins + ".", "Я с " + s.ins + " " + sg + "."] }, { pide: "Ahora di «" + (s.nom === "ма́ма" ? "mamá" : s.nom === "брат" ? "mi hermano" : "Ana") + " y yo» (мы с…).", esperadas: [ok] }],
      explicacion: "Я " + sg + ". → Я " + sg + " с " + s.ins + ". → " + ok });
  });

  /* ── Módulo 9: con qué, dónde ── */
  [["пишу́", "ру́чка", ""], ["ем суп", "ло́жка", ""], ["ре́жу хлеб", "нож", ""], ["ем", "ви́лка", ""], ["пишу́", "каранда́ш", ""]].forEach(([v, w], j) => {
    const X = S(w); if (!X) return;
    const ok = "Я " + v + " " + X.ins + ".", mal = "Я " + v + " с " + X.ins + ".";
    push({ id: "U10-nat-cq-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u10-con-que", grupo: "NCQ-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " La herramienta: instrumental, sin с." });
    if (j < 3) push({ id: "U10-pq-cq-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 9, regla: "u10-con-que", grupo: "PCQ-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Por qué no lleva с?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Es la herramienta: con qué", "Es una persona: con quién"], correcta: "Es la herramienta: con qué", explicacion: ok });
  });
  [["под", "стол", "Ко́шка", "debajo de la mesa"], ["над", "стол", "Ла́мпа", "arriba de la mesa"], ["пе́ред", "дом", "Маши́на", "delante de la casa"], ["за", "дом", "Парк", "detrás de la casa"], ["под", "посте́ль", "Соба́ка", "debajo de la cama"]].forEach(([pr, w, s0, es], j) => {
    const X = S(w); if (!X) return;
    const ok = s0 + " " + pr + " " + X.ins + ".", mal = s0 + " " + pr + " " + X.acc + ".";
    if (ok === mal) return;
    push({ id: "U10-nat-pn-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 9, regla: "u10-pod-nad", grupo: "NPN-" + j, items: ["lex:" + X.id], oir: ok, pide: "«" + es + "». ¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + pr + " + instrumental: dónde." });
  });
  push({ id: "U10-par-nad-0", tipo: "par", forma: "elegir", dificultad: 2, modulo: 9, regla: "u10-pod-nad", grupo: "PNA-0", items: [], oir: "Ла́мпа над столо́м.", pide: "La lámpara cuelga arriba de la mesa, sin tocarla. ¿Cuál dices?",
    opciones: baraja(["Ла́мпа над столо́м.", "Ла́мпа на столе́."], 1), correcta: "Ла́мпа над столо́м.", explicacion: "над: arriba, sin tocar. на столе́: apoyada." });

  /* ── Módulo 10: profesión e intereses ── */
  ["води́тель", "журнали́ст", "перево́дчик", "худо́жник", "музыка́нт", "писа́тель", "юри́ст", "продаве́ц"].forEach((w, j) => {
    const X = S(w); if (!X) return;
    const s = j % 2 ? "Она́ рабо́тает" : "Я рабо́таю", ok = s + " " + X.ins + ".", mal = s + " " + X.nom + ".";
    push({ id: "U10-nat-pr-" + j, tipo: "natural", forma: "elegir", dificultad: 1, modulo: 10, regla: "u10-rabotat-kem", grupo: "NPR-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + u10Cambio(X, "ins") });
    if (j < 3) push({ id: "U10-diag-pr-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 10, regla: "u10-rabotat-kem", grupo: "DPR-" + j, items: ["lex:" + X.id], oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: s + " как " + X.nom + ".",
      opciones: ["La profesión va en instrumental, sin как", "El verbo", "Falta есть"], correcta: "La profesión va en instrumental, sin как", esperadas: [ok], explicacion: ok });
  });
  [["студе́нт", "Ра́ньше я был", "Antes era estudiante"], ["врач", "Я хочу́ стать", "Quiero ser médico"], ["писа́тель", "Он стал", "Se hizo escritor"]].forEach(([w, a0, es], j) => {
    const X = S(w), ok = a0 + " " + X.ins + ".", mal = a0 + " " + X.nom + ".";
    push({ id: "U10-nat-bi-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 10, regla: "u10-byt-ins", grupo: "NBI-" + j, items: ["lex:" + X.id], oir: ok, pide: "«" + es + "». ¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " Con был, бу́ду y стать, instrumental." });
  });
  push({ id: "U10-par-bi-0", tipo: "par", forma: "elegir", dificultad: 2, modulo: 10, regla: "u10-byt-ins", grupo: "PBI-0", items: [], oir: "Сейча́с я врач.", pide: "«Ahora soy médico». ¿Cuál dices?",
    opciones: baraja(["Сейча́с я врач.", "Сейча́с я врачо́м."], 0), correcta: "Сейча́с я врач.", explicacion: "En presente, sin быть: nominativo." });
  [["занима́юсь", "спорт"], ["интересу́юсь", "му́зыка"], ["занима́юсь", "ру́сский"], ["интересу́юсь", "исто́рия"]].forEach(([v, w], j) => {
    const X = S(w); if (!X || !X.ins) return;
    const ok = "Я " + v + " " + X.ins + ".", mal = "Я " + v + " " + X.nom + ".";
    push({ id: "U10-nat-z-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 10, regla: "u10-zanimatsya", grupo: "NZA-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], j), correcta: ok,
      explicacion: ok + " " + v + " + instrumental." });
    if (j < 2) push({ id: "U10-pq-z-" + j, tipo: "porque", forma: "elegir", dificultad: 2, modulo: 10, regla: "u10-zanimatsya", grupo: "PZA-" + j, items: ["lex:" + X.id], oir: ok, pide: "¿Por qué " + X.ins + "?", grande: ok, audio: ok, audioManual: true,
      opciones: ["Ese verbo va con instrumental", "Es con quién: с + instrumental"], correcta: "Ese verbo va con instrumental", explicacion: ok + " Sin с." });
  });

  /* Cada ejercicio viejo apunta a su regla (para «Por qué» y el repaso por regla) */
  const REGLA_ID = [[/^U10-rel-/, "u10-relacion"], [/^U10-(ten|tenf|quien|tenp)-/, "u10-tener"], [/^U10-de-/, "u10-de-quien"], [/^U10-genw-/, "u10-gen-fin"],
    [/^U10-(no|noel|nodet|noesru|nofor)-/, "u10-net"], [/^U10-(cant|cantel|cantf)-/, "u10-cantidad"], [/^U10-(prep|prepel|prepf|prepd)-/, "u10-prep-gen"],
    [/^U10-(aq|aqel|cons)-/, "u10-dat-verbos"], [/^U10-datw-/, "u10-dat-fin"], [/^U10-(datp|est)-/, "u10-estados"], [/^U10-gus-/, "u10-gustar"],
    [/^U10-(cq|cqel|cqesc|cqt)-/, "u10-s-kem"], [/^U10-amp-/, "u10-ins-fin"], [/^U10-(cqu|cquel)-/, "u10-con-que"], [/^U10-(pro|proel|prot)-/, "u10-rabotat-kem"],
    [/^U10-(cid|mix|mixd)-/, "u10-seis-casos"]];
  out.forEach(e => { if (e.regla) return; const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1]; });
  out.forEach(e => { if (e.explicacion) e.explicacion = u10Palabras(e.explicacion); if (e.pide) e.pide = u10Palabras(e.pide); });
  return out;
}

/* Proyecto «Моя жизнь»: 3 de cada caso nuevo, tres tiempos y 2 negaciones */
(function () {
  const m = UNIDAD_10.modulos.find(x => x.id === "u10m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const forma = (w, i) => info(w).some(x => { const cz = casosById(x[0]); if (!cz) return false; const a = cz.sg || cz.pl; return a && K(a[i]) === K(w) && K(a[0]) !== K(w); });
  const GEN_P = ["у", "нет", "без", "для", "после", "до", "из", "около", "возле", "много", "мало", "немного", "стакан", "чашка"];
  const DAT_PR = ["мне", "тебе", "ему", "ей", "нам", "вам", "им"];
  const VDAT = /^(да|звон|помога|показыва|отвеча|советува|совету|пиш|говор)/;
  const contar = t => {
    const r = { gen: 0, dat: 0, ins: 0 };
    frases(t).forEach(f => { const w = pal(f), k = w.map(K);
      k.forEach((x, i) => {
        if (/^(у меня|у тебя|у него|у нее|у нас|у вас|у них)$/.test(x + " " + (k[i + 1] || "")) && x === "у") r.gen++;
        else if (GEN_P.indexOf(x) >= 0 && w[i + 1] && forma(w[i + 1], 1)) r.gen++;
        if (DAT_PR.indexOf(x) >= 0) r.dat++;
        /* verbo de dativo y, en las 3 palabras siguientes, una forma de dativo */
        else if (VDAT.test(x) && w.slice(i + 1, i + 4).some(y => forma(y, 2))) r.dat++;
        if ((x === "с" || x === "со") && w[i + 1] && (forma(w[i + 1], 4) || /^(друзьями|мной|тобой|ним|ней|нами|вами|ними)$/.test(k[i + 1]))) r.ins++;
        else if (/^(работаю|работаешь|работает|работаем|работаете|работают|был|была|были|пишу|ем|режу)$/.test(x) && w[i + 1] && forma(w[i + 1], 4)) r.ins++;
      }); });
    return r;
  };
  const pasado = w => info(w).some(x => { const v = verboById(x[0]); return v && v.pasado && Object.values(v.pasado).some(f => K(f) === K(w)); });
  const BUDU = ["буду", "будешь", "будет", "будем", "будете", "будут"];
  const negs = t => frases(t).filter(f => /(^|\s)(не|нет)\s/i.test(f.replace(/\u0301/g, ""))).length;
  m.requisitos = [
    { txt: "Entre 15 y 20 frases", fn: t => { const n = frases(t).length; return n >= 15 && n <= 20; } },
    { txt: "Al menos 3 genitivos (у меня́, нет…, без, для, по́сле, мно́го…)", fn: t => contar(t).gen >= 3 },
    { txt: "Al menos 3 dativos (мне, звоню́ ма́ме…)", fn: t => contar(t).dat >= 3 },
    { txt: "Al menos 3 instrumentales (с бра́том, рабо́таю врачо́м…)", fn: t => contar(t).ins >= 3 },
    { txt: "Pasado, presente y futuro", fn: t => pal(t).some(pasado) && pal(t).some(w => BUDU.indexOf(K(w)) >= 0) },
    { txt: "Al menos 2 frases negativas (не, нет)", fn: t => negs(t) >= 2 }
  ];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f), k = w.map(K);
      k.forEach((x, i) => { const sig = w[i + 1]; if (!sig) return;
        info(sig).forEach(z => { const cz = casosById(z[0]); if (!cz || !cz.sg) return; const nom = K(cz.sg[0]) === K(sig);
          if (x === "нет" && nom && K(cz.sg[1]) !== K(sig)) out.push("Después de нет va el genitivo: **нет " + cz.sg[1] + "**.");
          if ((x === "с") && nom && K(cz.sg[4]) !== K(sig)) out.push("Con с («con alguien») va el instrumental: **с " + cz.sg[4] + "**.");
          if (/^(звоню|звонишь|звонит|звоним|звоните|звонят|помогаю|помогаешь|помогает|помогаем|помогаете|помогают)$/.test(x) && (nom || K(cz.sg[3]) === K(sig)) && K(cz.sg[2]) !== K(sig)) out.push("«" + w[i] + "» va con dativo: **" + w[i] + " " + cz.sg[2] + "**.");
          if (/^(работаю|работаешь|работает|работаем|работаете|работают)$/.test(x) && nom && /врач|учител|инженер|программист|медсестр|архитектор|студент/.test(K(sig))) out.push("La profesión va en instrumental: **" + w[i] + " " + cz.sg[4] + "**.");
        });
        if (x === "есть" && i > 0 && k.slice(0, i).indexOf("у") >= 0) info(sig).forEach(z => { const cz = casosById(z[0]); if (cz && cz.sg && K(cz.sg[3]) === K(sig) && K(cz.sg[0]) !== K(sig)) out.push("Lo que se tiene va en nominativo: **есть " + cz.sg[0] + "**."); });
      }); });
    return [...new Set(out)];
  } }];
})();

window.UNIDAD_10 = UNIDAD_10;
window.unidad10Modulo = unidad10Modulo;
window.ejerciciosUnidad10 = ejerciciosUnidad10;
window.u10Datos = u10Datos;
window.u10Cambio = u10Cambio;
window.U10_MEZCLA = U10_MEZCLA;
