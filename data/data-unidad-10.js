/* ============================================================
   DATA-UNIDAD-10.JS — Unidad 10: Casos II · genitivo, dativo e instrumental
   ------------------------------------------------------------
   Versión 05/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 05/10/2026):
   · Los tres casos por función, en singular. Plurales solo como
     fórmulas (с друзья́ми, мно́го люде́й, нет де́нег, нет вре́мени).
   · Afuera: posesivos declinados (моему́ дру́гу), perfectivos
     (прие́хал, стал), «работает компью́тером» (incorrecto en ruso) y
     «до шести́ часо́в» (genitivo de números).
   · Entran нра́виться, «У меня́ есть», С кем? y с друзья́ми.
   · есть «hay, tengo» es una entrada propia (CMR-06144), homógrafa de
     есть «comer» (CMR-01290).
   · Pronombres: у меня́… y мне… en la base; со мной… en la ampliación.
   · Evaluación: 35 ejercicios; proyecto «Моя жизнь» con 3 de cada caso.
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
  "маши́на": ["un auto", "auto", "🚗"], "кни́га": ["un libro", "libro", "📕"], "телефо́н": ["un teléfono", "teléfono", "📱"], "компью́тер": ["una computadora", "computadora", "💻"],
  "кварти́ра": ["un departamento", "departamento", "🏢"], "соба́ка": ["un perro", "perro", "🐕"], "ко́шка": ["una gata", "gata", "🐈"], "слова́рь": ["un diccionario", "diccionario", "📙"],
  "ру́чка": ["una lapicera", "lapicera", "🖊️"], "су́мка": ["una cartera", "cartera", "👜"], "рабо́та": ["trabajo", "trabajo", "💼"], "вре́мя": ["tiempo", "tiempo", "⏰"]
};
/* Cantidades: "ruso": español */
const U10_CANT = { "вода́": "agua", "чай": "té", "хлеб": "pan", "молоко́": "leche", "суп": "sopa", "сок": "jugo", "вре́мя": "tiempo" };
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
const U10_CON_QUE = [["пишу́", "", "ру́чка", "Escribo con lapicera."], ["пишу́", "", "каранда́ш", "Escribo con lápiz."], ["ем суп", "", "ло́жка", "Tomo la sopa con cuchara."],
  ["ем пи́ццу", "", "ви́лка", "Como pizza con tenedor."], ["ре́жу хлеб", "", "нож", "Corto el pan con un cuchillo."]];
const U10_PROFES = { "врач": ["médico", "médica"], "учи́тель": ["maestro", null], "учи́тельница": [null, "maestra"], "инжене́р": ["ingeniero", "ingeniera"],
  "программи́ст": ["programador", "programadora"], "медсестра́": [null, "enfermera"], "архите́ктор": ["arquitecto", "arquitecta"], "студе́нт": ["estudiante", null] };
/* Genitivo con preposiciones: [preposición, sustantivo, español] */
const U10_PREP = [["из", "Испа́ния", "de España"], ["из", "Аргенти́на", "de Argentina"], ["из", "Москва́", "de Moscú"], ["без", "молоко́", "sin leche"], ["без", "хлеб", "sin pan"],
  ["для", "ма́ма", "para mamá"], ["для", "брат", "para mi hermano"], ["для", "А́нна", "para Ana"], ["по́сле", "рабо́та", "después del trabajo"], ["по́сле", "обе́д", "después del almuerzo"],
  ["до", "рабо́та", "antes del trabajo"], ["до", "обе́д", "antes del almuerzo"], ["о́коло", "дом", "cerca de la casa"], ["о́коло", "парк", "cerca del parque"], ["о́коло", "банк", "cerca del banco"]];
const U10_PRON = { gen: ["у меня́", "у тебя́", "у него́", "у неё", "у нас", "у вас", "у них"], dat: ["мне", "тебе́", "ему́", "ей", "нам", "вам", "им"],
  ins: ["со мной", "с тобо́й", "с ним", "с ней", "с на́ми", "с ва́ми", "с ни́ми"], es: ["yo", "vos", "él", "ella", "nosotros", "ustedes", "ellos"] };

const U10_VISTAS = { 1: "звони́ть с", 2: "есть колле́га", 3: "де́ньги", 4: "мно́го ма́ло немно́го стака́н лю́ди", 5: "без для о́коло во́зле по́сле", 6: "дава́ть помога́ть пока́зывать отвеча́ть сове́товать",
  7: "нра́виться ну́жно нельзя́ тру́дно легко́", 9: "нож ре́зать", 10: "архите́ктор" };

const U10_LECTURAS = [
  { id: "familia", titulo: "Семья́ А́нны", lineas: [
      ["У А́нны есть брат и сестра́.", "Ana tiene un hermano y una hermana."], ["Брат рабо́тает врачо́м.", "El hermano trabaja de médico."],
      ["У А́нны нет маши́ны.", "Ana no tiene auto."], ["Она́ ча́сто звони́т ма́ме.", "Llama seguido a su mamá."], ["В суббо́ту она́ гуля́ет с бра́том.", "El sábado pasea con su hermano."]],
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
  objetivo: "Decir qué tenés y qué no, cantidades, a quién le das o decís algo, qué te gusta o necesitás, con quién y con qué hacés las cosas y de qué trabajás.",
  tiempo: "35–45 horas",
  modulos: [
    { id: "u10m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "¿Por qué más casos?", resumen: "А́нна, А́нну, А́нне, с А́нной, у А́нны.",
      intro: "Ya conocés tres casos: nominativo (quién hace), acusativo (qué recibe) y prepositivo (dónde). En esta unidad se suman los otros tres.",
      secciones: [
        { titulo: "La misma persona, cinco formas", texto: "А́нна чита́ет. («Ana lee»: hace la acción)\nЯ ви́жу А́нну. («veo a Ana»: recibe la acción)\nЯ звоню́ А́нне. («llamo a Ana»: a quién)\nЯ гуля́ю с А́нной. («paseo con Ana»: con quién)\nУ А́нны есть кни́га. («Ana tiene un libro»: quién tiene)", destacado: "La palabra cambia porque cambia su relación con las demás." },
        { titulo: "Los tres nuevos", texto: "**Genitivo**: de quién es algo, lo que no hay, cuánto hay. **Dativo**: a quién se le da o dice algo. **Instrumental**: con quién o con qué.\nNo hace falta memorizar todas las formas: en cada módulo tenés la tabla, y el módulo Casos tiene todas." },
        { titulo: "Lo importante", texto: "Antes de buscar la terminación, preguntate qué relación querés expresar.", truco: "¿Quién? ¿Qué? ¿A quién? ¿Con quién? ¿De quién? → el caso." }
      ] },
    { id: "u10m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "Genitivo: tener y de quién", resumen: "У меня́ есть кни́га. Кни́га А́нны.",
      intro: "En ruso no hay un verbo «tener» de uso diario: se dice «junto a mí hay».",
      secciones: [
        { titulo: "Tener: у + genitivo + есть", texto: "У меня́ есть кни́га. («tengo un libro»)\nУ А́нны есть маши́на. («Ana tiene un auto»)\nУ Ива́на есть брат. («Iván tiene un hermano»)\nLo que se tiene va en nominativo: es lo que «hay».", destacado: "у + quién (genitivo) + есть + qué (nominativo)" },
        { titulo: "Los pronombres", texto: "у меня́ (yo tengo), у тебя́ (vos tenés), у него́ (él tiene), у неё (ella tiene), у нас (tenemos), у вас (ustedes tienen), у них (ellos tienen). Es la misma fórmula que «А у тебя́?» de la Unidad 2." },
        { titulo: "Есть: dos palabras", texto: "Este есть significa «hay» y no cambia nunca. No tiene nada que ver con есть «comer» de la Unidad 5 (я ем, ты ешь…): se escriben igual, pero son palabras distintas." },
        { titulo: "De quién es", texto: "кни́га А́нны («el libro de Ana»), маши́на Ива́на («el auto de Iván»): el dueño va después, en genitivo." },
        { titulo: "Las terminaciones del genitivo", texto: "-а → -ы: ма́ма → ма́мы, маши́на → маши́ны\nDespués de **г, к, х, ж, ш, ч, щ** se escribe **и**: кни́га → кни́ги, ко́шка → ко́шки\n-я → -и, -ь (femenino) → -и\nmasculino: se agrega -а: брат → бра́та, Ива́н → Ива́на; -ь / -й → -я: учи́тель → учи́теля\nneutro: -о → -а: молоко́ → молока́", truco: "Ojo: до́ма («en casa») no es el genitivo de дом, aunque se escriba igual." }
      ] },
    { id: "u10m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Genitivo: lo que no hay", resumen: "У меня́ нет маши́ны.",
      intro: "Para decir que no tenés algo, есть se vuelve нет y lo que falta pasa a genitivo.",
      secciones: [
        { titulo: "Есть → нет", texto: "У меня́ есть маши́на. → У меня́ нет маши́ны.\nУ меня́ есть вре́мя. → У меня́ нет вре́мени.\nУ А́нны есть брат. → У А́нны нет бра́та.", destacado: "нет + genitivo" },
        { titulo: "Fórmulas frecuentes", texto: "нет вре́мени (no hay tiempo), нет де́нег (no hay plata), нет рабо́ты (no hay trabajo). Вре́мя es irregular (вре́мени) y де́ньги está siempre en plural (де́нег): van así." }
      ] },
    { id: "u10m4", n: 4, tipo: "leccion", nPractica: 10, titulo: "Genitivo: cantidad", resumen: "мно́го вре́мени, ча́шка ко́фе.",
      intro: "Después de una cantidad, lo que se cuenta va en genitivo.",
      secciones: [
        { titulo: "Mucho, poco, un poco", texto: "мно́го (mucho), ма́ло (poco), немно́го (un poco):\nмно́го вре́мени (mucho tiempo)\nма́ло воды́ (poca agua)\nнемно́го молока́ (un poco de leche)\nмно́го люде́й (mucha gente) y мно́го де́нег (mucha plata) van así, como fórmulas." },
        { titulo: "Un vaso de…", texto: "стака́н воды́ (un vaso de agua), стака́н со́ка (un vaso de jugo), ча́шка ча́я (una taza de té), ча́шка ко́фе (una taza de café: ко́фе no cambia).", destacado: "мно́го / ма́ло / немно́го / стака́н + genitivo" }
      ] },
    { id: "u10m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Genitivo con preposiciones", resumen: "без молока́, для ма́мы, по́сле рабо́ты.",
      intro: "Algunas preposiciones van siempre con genitivo.",
      secciones: [
        { titulo: "Las preposiciones", texto: "из (de, desde): Я из Испа́нии.\nбез (sin): ко́фе без молока́.\nдля (para): пода́рок для ма́мы.\nпо́сле (después de): по́сле рабо́ты.\nдо (antes de, hasta): до рабо́ты.\nо́коло y во́зле (cerca de): о́коло до́ма." },
        { titulo: "Lo que ya sabías", texto: "Я из Аргенти́ны, de la Unidad 2, ya era genitivo: Аргенти́на → Аргенти́ны.", truco: "из, без, для, по́сле, до, о́коло → genitivo." }
      ] },
    { id: "u10m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Dativo: ¿a quién?", resumen: "Я даю́ кни́гу А́нне. Я звоню́ ма́ме.",
      intro: "El dativo es la persona a la que le das, le decís o le hacés algo. Se pregunta con кому́? («¿a quién?»).",
      secciones: [
        { titulo: "Los verbos", texto: "дава́ть (dar): Я даю́ кни́гу А́нне.\nзвони́ть (llamar): Я звоню́ ма́ме.\nпомога́ть (ayudar): Я помога́ю дру́гу.\nпока́зывать (mostrar): Я пока́зываю дом бра́ту.\nписа́ть (escribir): Я пишу́ письмо́ Ива́ну.\nотвеча́ть (responder): Я отвеча́ю учи́телю.\nсове́товать (aconsejar)." },
        { titulo: "Las terminaciones del dativo", texto: "-а / -я → -е: ма́ма → ма́ме, А́нна → А́нне\nmasculino: se agrega -у: брат → бра́ту, друг → дру́гу; -ь / -й → -ю: учи́тель → учи́телю\nneutro: -о → -у", destacado: "кому́? → ма́ме, бра́ту, учи́телю" },
        { titulo: "Ojo con звони́ть y помога́ть", texto: "En español «llamo a mamá» parece acusativo, pero en ruso звони́ть y помога́ть van con dativo: Я звоню́ ма́ме, no «ма́му»." }
      ] },
    { id: "u10m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Dativo: me gusta, necesito", resumen: "Мне нра́вится му́зыка. Мне ну́жно рабо́тать.",
      intro: "Muchas cosas que en español dicen «me…» en ruso se dicen con el dativo.",
      secciones: [
        { titulo: "Los pronombres", texto: "мне (a mí), тебе́ (a vos), ему́ (a él), ей (a ella), нам (a nosotros), вам (a ustedes), им (a ellos)." },
        { titulo: "Me gusta", texto: "Мне нра́вится му́зыка («me gusta la música»). А́нне нра́вится Москва́. Ему́ нра́вится рабо́та. Lo que gusta va en nominativo, como en español." },
        { titulo: "Estados y necesidades", texto: "Мне хо́лодно (tengo frío). Мне интере́сно (me interesa). Мне тру́дно (me cuesta). Мне легко́ (me resulta fácil). Мне ну́жно рабо́тать (tengo que trabajar). Мне мо́жно? (¿puedo?). Нельзя́ (no se puede).", destacado: "мне + нра́вится / ну́жно / хо́лодно…" }
      ] },
    { id: "u10m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Instrumental: ¿con quién?", resumen: "Я гуля́ю с А́нной.",
      intro: "с + instrumental es «con alguien». Se pregunta с кем? («¿con quién?»).",
      secciones: [
        { titulo: "Con quién", texto: "Я гуля́ю с А́нной. Я живу́ с ба́бушкой. Он рабо́тает с колле́гой. Мы обе́даем с бра́том. И с друзья́ми («con amigos»), que va así, como fórmula.", destacado: "с кем? → с А́нной, с бра́том" },
        { titulo: "Las terminaciones del instrumental", texto: "-а → -ой: ма́ма → ма́мой, А́нна → А́нной\n-я → -ей\nmasculino: se agrega -ом: брат → бра́том; -ь / -й → -ем: учи́тель → учи́телем\nneutro: -о → -ом" },
        { titulo: "En los tres tiempos", texto: "Вчера́ я был с друзья́ми. Сейча́с я с А́нной. За́втра я бу́ду рабо́тать с колле́гой." }
      ] },
    { id: "u10m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Instrumental: ¿con qué?", resumen: "Я пишу́ ру́чкой.",
      intro: "Sin preposición, el instrumental es la herramienta: «con qué».",
      secciones: [
        { titulo: "La herramienta", texto: "Я пишу́ ру́чкой («escribo con lapicera»). Я пишу́ карандашо́м. Мы еди́м ви́лкой. Я ем суп ло́жкой. Она́ ре́жет хлеб ножо́м («corta el pan con un cuchillo»).", destacado: "con qué → instrumental, sin с" },
        { titulo: "En tren, en avión", texto: "También se dice е́хать по́ездом, лете́ть самолётом. En la Unidad 9 aprendiste на по́езде, на самолёте: las dos formas están bien." }
      ] },
    { id: "u10m10", n: 10, tipo: "leccion", nPractica: 10, titulo: "Instrumental: profesión", resumen: "Я рабо́таю врачо́м.",
      intro: "Para decir de qué trabajás, la profesión va en instrumental.",
      secciones: [
        { titulo: "De qué trabajás", texto: "Кем ты рабо́таешь? («¿de qué trabajás?») — Я рабо́таю врачо́м. Она́ рабо́тает медсестро́й. Он рабо́тает программи́стом. Я рабо́таю архите́ктором.", destacado: "рабо́тать + instrumental" },
        { titulo: "Con быть en pasado y futuro", texto: "Ра́ньше я был студе́нтом («antes era estudiante»). За́втра я бу́ду рабо́тать учи́телем. En presente быть no se dice: Я врач." }
      ] },
    { id: "u10m11", n: 11, tipo: "lectura", titulo: "Los seis casos juntos", resumen: "Pensar en la relación.",
      intro: "Tres textos con todos los casos. Al leer, preguntate qué relación expresa cada palabra; después contestá." },
    { id: "u10m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Моя жизнь", resumen: "Tu vida, con todos los casos.",
      intro: "Escribí sobre tu vida: qué tenés y qué no, quiénes son importantes, con quién hacés las cosas, a quién llamás, de qué trabajás, qué te gusta, qué hiciste y qué vas a hacer. Por ejemplo: У меня́ есть брат. У меня́ нет маши́ны. Я рабо́таю архите́ктором. По́сле рабо́ты я звоню́ ма́ме. Мне нра́вится му́зыка. Вчера́ я был в рестора́не с бра́том. За́втра я бу́ду рабо́тать с колле́гой.",
      requisitos: [], consejos: [] },
    { id: "u10m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Relación, caso, есть / нет, a quién, con quién, traducción y audio.",
      intro: "Treinta y cinco ejercicios en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Qué relación expresa", tipos: ["relacion"], n: 4 },
        { nombre: "Identificar el caso", tipos: ["caso-id"], n: 4 },
        { nombre: "Есть → нет", tipos: ["no-tener"], n: 5 },
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
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u10Palabras(s[k]); }));
});
function unidad10Modulo(id) { return UNIDAD_10.modulos.find(m => m.id === id) || null; }

const U10_MEZCLA = { relacion: 2, "caso-id": 1, tener: 2, "no-tener": 2, cantidad: 2, prep: 2, "completar-rel": 2, forma: 2, "a-quien": 2, estado: 2, "con-quien": 2, "con-que": 2, profesion: 2,
  construir: 2, "es-ru": 3, dictado: 3, emparejar: 1, significado: 1, "palabra-es-ru": 1, lectura: 2, "lectura-vf": 1 };

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
    out.push(Object.assign({ id: "U10-ten-" + j, tipo: "tener", forma: "escribir", dificultad: 3, modulo: 2, pide: "Escribí en ruso: «" + esF + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "у + genitivo: " + u10Cambio(p, "gen") + " " + ru }, base));
    out.push(Object.assign({ id: "U10-tenf-" + j, tipo: "forma", forma: "elegir", dificultad: 1, modulo: 2, pide: "Completá: «" + esF + "»", grande: "У _____ есть " + c.nom + ".",
      opciones: baraja(uniq([p.gen, p.nom, p.dat, p.acc].filter(Boolean)).slice(0, 4), j), correcta: p.gen, explicacion: u10Cambio(p, "gen") + " " + ru }, base, { grupo: "TNf-" + j }));
    out.push(Object.assign({ id: "U10-genw-" + j, tipo: "forma", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribí el genitivo: «de " + p.esS.toLowerCase().replace(/^(el|la|mi) /, "") + "».", grande: p.nom,
      audio: p.gen, audioManual: true, esperadas: [p.gen], idioma: "ru", explicacion: u10Cambio(p, "gen") }, base, { grupo: "TNg-" + j }));
    const ruDe = cap(c.nom) + " " + p.gen + ".";
    if (j % 2 === 0 && /^(un|una) /.test(c.un)) out.push(Object.assign({ id: "U10-de-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 2, pide: "Escribí en ruso: «" + cap(c.un.replace(/^(un|una) /, (m, a) => a === "un" ? "el " : "la ")) + " " + p.esDe + "»",
      audio: ruDe, audioManual: true, esperadas: [ruDe.replace(/\.$/, ""), ruDe], idioma: "ru", explicacion: "El dueño va después, en genitivo: " + u10Cambio(p, "gen") }, base, { grupo: "TNd-" + j }));
  });
  U10_PRON.gen.forEach((g, i) => {
    const c = C[(i * 3) % C.length], ru = cap(g) + " есть " + c.nom + ".";
    const es = ["Tengo", "Vos tenés", "Él tiene", "Ella tiene", "Tenemos", "Ustedes tienen", "Ellos tienen"][i] + " " + c.un + ".";
    out.push({ id: "U10-tenp-" + i, tipo: "tener", forma: "escribir", dificultad: 2, modulo: 2, grupo: "TP-" + i, items: ["lex:" + estaId], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: "**" + g + "** = " + U10_PRON.es[i] + " (tener). " + ru });
  });
  /* ¿Quién tiene qué? (escena) */
  P.slice(0, 6).forEach((p, j) => {
    const c = C[(j + 2) % C.length], q = "У кого́ есть " + c.nom + "?", r = "У " + p.gen + " есть " + c.nom + ".";
    out.push({ id: "U10-quien-" + j, tipo: "tener", forma: "escribir", dificultad: 2, modulo: 2, grupo: "QT-" + j, items: ["lex:" + p.id], oir: r, contexto: [{ p: "—", ru: q }],
      pide: c.emoji + " → " + p.esS + ". Contestá en ruso.", audio: q, audioManual: true, esperadas: [r, "У " + p.gen + "."], idioma: "ru", explicacion: "— " + q + " — " + r });
  });

  /* ── Módulo 3: lo que no hay ── */
  C.forEach((c, j) => {
    const yes = "У меня́ есть " + c.nom + ".", no = "У меня́ нет " + c.gen + ".";
    const base = { grupo: "NO-" + j, items: ["lex:" + c.id], oir: no };
    out.push(Object.assign({ id: "U10-no-" + j, tipo: "no-tener", forma: "escribir", dificultad: 2, modulo: 3, pide: "Pasala a negativo.", grande: yes, audio: no, audioManual: true, esperadas: [no], idioma: "ru",
      explicacion: "нет + genitivo: " + u10Cambio(c, "gen") + " " + no }, base));
    out.push(Object.assign({ id: "U10-noel-" + j, tipo: "no-tener", forma: "elegir", dificultad: 1, modulo: 3, pide: "Completá: «No tengo " + c.bare + ".»", grande: "У меня́ нет _____.",
      opciones: baraja(uniq([c.gen, c.nom, c.dat || c.nom]), j), correcta: c.gen, explicacion: u10Cambio(c, "gen") }, base, { grupo: "NOe-" + j }));
    const p = P[j % P.length], ru = "У " + p.gen + " нет " + c.gen + ".", es = p.esS + " no tiene " + c.bare + ".";
    out.push(Object.assign({ id: "U10-noesru-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 3, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru",
      explicacion: "у " + p.gen + " (quién) + нет + " + c.gen + " (genitivo). " + ru }, base, { grupo: "NOr-" + j }));
    if (j % 2 === 0) { const pals = sinP(no).split(" "); pals[pals.length - 1] = c.nom;
      if (c.nom !== c.gen) out.push(Object.assign({ id: "U10-nodet-" + j, tipo: "detectar", forma: "tocar", dificultad: 2, modulo: 3, pide: "Tocá la palabra que está mal.", palabras: pals, correcta: pals.length - 1,
        explicacion: "Después de нет va el genitivo: " + u10Cambio(c, "gen") }, base, { grupo: "NOd-" + j })); }
  });
  [["У меня́ нет вре́мени.", "No tengo tiempo."], ["У меня́ нет де́нег.", "No tengo plata."], ["У него́ нет рабо́ты.", "Él no tiene trabajo."]].forEach(([ru, es], j) =>
    out.push({ id: "U10-nofor-" + j, tipo: "es-ru", forma: "escribir", dificultad: 2, modulo: 3, grupo: "NF-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 4: cantidad ── */
  Object.keys(U10_CANT).forEach((ru, j) => {
    const s = sust(ru); if (!s) return;
    Object.keys(U10_POCO).forEach((q, k) => {
      if ((j + k) % 2) return;
      const fr = q + " " + s.gen, es = U10_POCO[q].replace("mucho/a", /^(agua|leche|sopa)$/.test(U10_CANT[ru]) ? "mucha" : "mucho").replace("poco/a", /^(agua|leche|sopa)$/.test(U10_CANT[ru]) ? "poca" : "poco") + " " + U10_CANT[ru];
      out.push({ id: "U10-cant-" + j + "-" + k, tipo: "cantidad", forma: "escribir", dificultad: 2, modulo: 4, grupo: "CA-" + j + "-" + k, items: ["lex:" + s.id], oir: fr, pide: "Escribí en ruso: «" + es + "»", audio: fr, audioManual: true,
        esperadas: [fr], idioma: "ru", explicacion: q + " + genitivo: " + u10Cambio(s, "gen") });
    });
    out.push({ id: "U10-cantel-" + j, tipo: "cantidad", forma: "elegir", dificultad: 1, modulo: 4, grupo: "CAe-" + j, items: ["lex:" + s.id], pide: "Completá: «un poco de " + U10_CANT[ru] + "»", grande: "немно́го _____",
      opciones: baraja(uniq([s.gen, s.nom, s.dat]), j), correcta: s.gen, explicacion: u10Cambio(s, "gen") });
  });
  [["стака́н воды́", "un vaso de agua"], ["стака́н со́ка", "un vaso de jugo"], ["ча́шка ча́я", "una taza de té"], ["ча́шка ко́фе", "una taza de café"], ["мно́го люде́й", "mucha gente"], ["мно́го де́нег", "mucha plata"]].forEach(([ru, es], j) =>
    out.push({ id: "U10-cantf-" + j, tipo: "cantidad", forma: "escribir", dificultad: 2, modulo: 4, grupo: "CF-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 5: preposiciones ── */
  U10_PREP.forEach(([pr, ru, es], j) => {
    const s = sust(ru); if (!s) return;
    const fr = pr + " " + s.gen;
    out.push({ id: "U10-prep-" + j, tipo: "prep", forma: "escribir", dificultad: 2, modulo: 5, grupo: "PP-" + j, items: ["lex:" + s.id], oir: fr, pide: "Escribí en ruso: «" + es + "»", audio: fr, audioManual: true,
      esperadas: [fr], idioma: "ru", explicacion: "**" + pr + "** + genitivo: " + u10Cambio(s, "gen") });
    if (j % 2 === 0) out.push({ id: "U10-prepel-" + j, tipo: "prep", forma: "elegir", dificultad: 1, modulo: 5, grupo: "PPe-" + j, items: ["lex:" + s.id], pide: "Completá: «" + es + "»", grande: pr + " _____",
      opciones: baraja(uniq([s.gen, s.nom, s.dat, s.prep || s.nom]).slice(0, 3), j), correcta: s.gen, explicacion: u10Cambio(s, "gen") });
  });
  [["Я пью ко́фе без молока́.", "Tomo café sin leche."], ["Э́то пода́рок для ма́мы.", "Es un regalo para mamá."], ["По́сле рабо́ты я иду́ в парк.", "Después del trabajo voy al parque."],
   ["До обе́да я рабо́таю.", "Antes del almuerzo trabajo."], ["Банк о́коло до́ма.", "El banco está cerca de la casa."]].forEach(([ru, es], j) => {
    out.push({ id: "U10-prepf-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 5, grupo: "PF-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U10-prepd-" + j, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: 5, grupo: "PD-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });

  /* ── Módulo 6: a quién ── */
  Object.keys(U10_VDAT).forEach((vk, a) => {
    const v = verbo(vk); if (!v) return;
    const [esV, cRu, cEs] = U10_VDAT[vk];
    P.forEach((p, j) => {
      if ((a + j) % 3) return;
      const ru = "Я " + v.presente[0] + (cRu ? " " + cRu : "") + " " + p.dat + ".", es = cap(esV[0] + (cEs ? " " + cEs : "") + " " + p.esA) + ".";
      const base = { grupo: "AQ-" + a + "-" + j, items: ["lex:" + v.id, "lex:" + p.id], oir: ru };
      out.push(Object.assign({ id: "U10-aq-" + a + "-" + j, tipo: "a-quien", forma: "escribir", dificultad: 3, modulo: 6, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
        esperadas: [ru, ru.replace(/^Я /, "").replace(/^(.)/, m => m.toUpperCase())], idioma: "ru", explicacion: "кому́? → dativo: " + u10Cambio(p, "dat") + " " + ru }, base));
      out.push(Object.assign({ id: "U10-aqel-" + a + "-" + j, tipo: "completar-rel", forma: "elegir", dificultad: 2, modulo: 6, pide: "Completá: «" + es + "»", grande: "Я " + v.presente[0] + (cRu ? " " + cRu : "") + " _____.",
        opciones: baraja(uniq([p.dat, p.acc, p.nom]), a + j), correcta: p.dat, explicacion: u10Cambio(p, "dat") + (vk === "звони́ть" || vk === "помога́ть" ? " Con " + v.ac + " va dativo, aunque en español diga «a…»." : "") }, base, { grupo: "AQe-" + a + "-" + j }));
    });
  });
  /* Construir: я · пода́рок · ма́ма · дава́ть */
  [["пода́рок", "ма́ма", "Le doy un regalo a mamá."], ["кни́гу", "брат", "Le doy el libro a mi hermano."], ["письмо́", "А́нна", "Le escribo una carta a Ana."]].forEach(([obj, pr, es], j) => {
    const p = sust(pr), v = verbo(j === 2 ? "писа́ть" : "дава́ть"), o = sust(obj.replace("кни́гу", "кни́га")) || { nom: obj, acc: obj };
    const ru = "Я " + v.presente[0] + " " + (o.acc || obj) + " " + p.dat + ".";
    out.push({ id: "U10-cons-" + j, tipo: "construir", forma: "escribir", dificultad: 3, modulo: 6, grupo: "CS-" + j, items: [], oir: ru, pide: "🎁 Armá la frase con estas palabras.", grande: "я · " + (o.nom || obj) + " · " + p.nom + " · " + v.ac,
      pista: es, audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: "Lo que se da: acusativo. A quién: dativo (" + u10Cambio(p, "dat") + ") " + ru });
  });
  P.slice(0, 8).forEach((p, j) => out.push({ id: "U10-datw-" + j, tipo: "forma", forma: "escribir", dificultad: 2, modulo: 6, grupo: "DW-" + j, items: ["lex:" + p.id], pide: "Escribí el dativo (¿a quién?).", grande: p.nom,
    audio: p.dat, audioManual: true, esperadas: [p.dat], idioma: "ru", explicacion: u10Cambio(p, "dat") }));

  /* ── Módulo 7: me gusta, necesito ── */
  U10_ESTADOS.forEach(([ru, e1, e3, e4], j) => {
    if (!e1) return;
    [[0, "мне", e1, ""], [2, "ему́", e3, "Él: "], [4, "нам", e4, ""]].forEach(([i, pr, es], k) => {
      const fr = cap(pr) + " " + ru + ".";
      const esF = (k === 1 ? (/^le /.test(es) ? "A él " + es : "Él " + es) : cap(es)) + ".";
      out.push({ id: "U10-est-" + j + "-" + k, tipo: "estado", forma: "escribir", dificultad: 2 + (k ? 1 : 0), modulo: 7, grupo: "ES-" + j + "-" + k, items: [], oir: fr,
        pide: "Escribí en ruso: «" + esF + "»", audio: fr, audioManual: true, esperadas: [fr], idioma: "ru", explicacion: "**" + pr + "** (dativo) + " + ru + ". " + fr });
    });
  });
  U10_PRON.dat.forEach((d, i) => out.push({ id: "U10-datp-" + i, tipo: "estado", forma: "elegir", dificultad: 1, modulo: 7, grupo: "DP-" + i, items: [], pide: "¿Cómo se dice «a " + U10_PRON.es[i].replace("yo", "mí") + "»?",
    opciones: baraja([d].concat(baraja(U10_PRON.dat.filter(x => x !== d), i).slice(0, 2)), i), correcta: d, explicacion: "a " + U10_PRON.es[i].replace("yo", "mí") + " = " + d }));
  P.slice(0, 6).forEach((p, j) => {
    const fr = cap(p.dat) + " нра́вится му́зыка.", es = "A " + p.esS.charAt(0).toLowerCase() + p.esS.slice(1) + " le gusta la música.";
    out.push({ id: "U10-gus-" + j, tipo: "estado", forma: "escribir", dificultad: 3, modulo: 7, grupo: "GU-" + j, items: ["lex:" + p.id], oir: fr, pide: "Escribí en ruso: «" + es.replace(/^A Ana|^A Iván|^A Masha|^A Dima/, m => m) + "»",
      audio: fr, audioManual: true, esperadas: [fr], idioma: "ru", explicacion: "A quién le gusta: dativo (" + u10Cambio(p, "dat") + ") " + fr });
  });

  /* ── Módulo 8: con quién ── */
  [["гуля́ть", "paseo", "Я гуля́ю"], ["рабо́тать", "trabajo", "Я рабо́таю"], ["жить", "vivo", "Я живу́"], ["обе́дать", "almuerzo", "Я обе́даю"], ["говори́ть", "hablo", "Я говорю́"]].forEach(([vk, esV, ruV], a) =>
    P.forEach((p, j) => {
      if ((a + j) % 3) return;
      const ru = ruV + " с " + p.ins + ".", es = cap(esV + " " + p.esCon) + ".";
      const base = { grupo: "CQ-" + a + "-" + j, items: ["lex:" + p.id], oir: ru };
      out.push(Object.assign({ id: "U10-cq-" + a + "-" + j, tipo: "con-quien", forma: "escribir", dificultad: 3, modulo: 8, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
        esperadas: [ru, ru.replace(/^Я /, "").replace(/^(.)/, m => m.toUpperCase())], idioma: "ru", explicacion: "с + instrumental: " + u10Cambio(p, "ins") + " " + ru }, base));
      out.push(Object.assign({ id: "U10-cqel-" + a + "-" + j, tipo: "completar-rel", forma: "elegir", dificultad: 2, modulo: 8, pide: "Completá: «" + es + "»", grande: ruV + " с _____.",
        opciones: baraja(uniq([p.ins, p.nom, p.dat, p.gen]).slice(0, 3).concat([p.ins]).filter((x, i, a) => a.indexOf(x) === i), a + j), correcta: p.ins, explicacion: u10Cambio(p, "ins") }, base, { grupo: "CQe-" + a + "-" + j }));
    }));
  P.slice(0, 6).forEach((p, j) => {
    const q = "С кем А́нна?", r = "А́нна с " + p.ins + ".";
    if (p.nom === "А́нна") return;
    out.push({ id: "U10-cqesc-" + j, tipo: "con-quien", forma: "escribir", dificultad: 2, modulo: 8, grupo: "CE-" + j, items: ["lex:" + p.id], oir: r, contexto: [{ p: "—", ru: q }], pide: "👩 + " + p.esS + ". Contestá en ruso.",
      audio: q, audioManual: true, esperadas: [r, "С " + p.ins + "."], idioma: "ru", explicacion: "— " + q + " — " + r });
  });
  [["Вчера́ я был с друзья́ми.", "Ayer estuve con amigos. (sos hombre)"], ["За́втра я бу́ду рабо́тать с колле́гой.", "Mañana voy a trabajar con un colega."], ["Мы живём с ба́бушкой.", "Vivimos con la abuela."]].forEach(([ru, es], j) =>
    out.push({ id: "U10-cqt-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 8, grupo: "CT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 9: con qué ── */
  U10_CON_QUE.forEach(([vb, _o, t, es], j) => {
    const s = sust(t); if (!s) return;
    const ru = "Я " + vb + " " + s.ins + ".";
    out.push({ id: "U10-cqu-" + j, tipo: "con-que", forma: "escribir", dificultad: 3, modulo: 9, grupo: "QU-" + j, items: ["lex:" + s.id], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true,
      esperadas: [ru], idioma: "ru", explicacion: "Con qué: instrumental, sin с. " + u10Cambio(s, "ins") + " " + ru });
    out.push({ id: "U10-cquel-" + j, tipo: "con-que", forma: "elegir", dificultad: 2, modulo: 9, grupo: "QUe-" + j, items: ["lex:" + s.id], pide: "Completá: «" + es + "»", grande: "Я " + vb + " _____.",
      opciones: baraja(uniq(["с " + s.ins, s.ins, s.nom]), j), correcta: s.ins, explicacion: "La herramienta va en instrumental **sin** с (с es «junto con alguien»). " + ru });
  });

  /* ── Módulo 10: profesión ── */
  Object.keys(U10_PROFES).forEach((ru, j) => {
    const s = sust(ru); if (!s) return;
    const [m, f] = U10_PROFES[ru];
    [[m, "Я рабо́таю", "Trabajo de ", "(sos hombre)"], [f, "Я рабо́таю", "Trabajo de ", "(sos mujer)"]].forEach(([es, ruV, esV, quien], k) => {
      if (!es) return;
      const r = ruV + " " + s.ins + ".";
      out.push({ id: "U10-pro-" + j + "-" + k, tipo: "profesion", forma: "escribir", dificultad: 2, modulo: 10, grupo: "PR-" + j + "-" + k, items: ["lex:" + s.id], oir: r, contexto: [{ p: "—", ru: "Кем ты рабо́таешь?" }],
        pide: "Contestá: «" + esV + es + "».", audio: r, audioManual: true, esperadas: [r, r.replace(/^Я /, "").replace(/^(.)/, x => x.toUpperCase())], idioma: "ru", explicacion: "рабо́тать + instrumental: " + u10Cambio(s, "ins") + " " + r });
    });
    out.push({ id: "U10-proel-" + j, tipo: "profesion", forma: "elegir", dificultad: 1, modulo: 10, grupo: "PRe-" + j, items: ["lex:" + s.id], pide: "Completá la frase.", grande: "Она́ рабо́тает _____.",
      opciones: baraja(uniq([s.ins, s.nom, s.dat]), j), correcta: s.ins, explicacion: u10Cambio(s, "ins") });
  });
  [["Ра́ньше я был студе́нтом.", "Antes era estudiante. (sos hombre)"], ["За́втра я бу́ду рабо́тать учи́телем.", "Mañana voy a trabajar de maestro."], ["Кем ты рабо́таешь?", "¿De qué trabajás?"]].forEach(([ru, es], j) =>
    out.push({ id: "U10-prot-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 10, grupo: "PT-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru }));

  /* ── Módulo 11: los seis casos juntos ── */
  const CASOS6 = ["Nominativo", "Acusativo", "Prepositivo", "Genitivo", "Dativo", "Instrumental"];
  [["Я гуля́ю с А́нной.", "А́нной", 5], ["У Ива́на есть маши́на.", "Ива́на", 3], ["Я звоню́ ма́ме.", "ма́ме", 4], ["Я ви́жу бра́та.", "бра́та", 1], ["Мы в Москве́.", "Москве́", 2],
   ["Ма́ша чита́ет.", "Ма́ша", 0], ["У меня́ нет вре́мени.", "вре́мени", 3], ["Я рабо́таю врачо́м.", "врачо́м", 5], ["Я пишу́ ру́чкой.", "ру́чкой", 5], ["Э́то пода́рок для ма́мы.", "ма́мы", 3],
   ["Мне нра́вится му́зыка.", "му́зыка", 0], ["Я даю́ кни́гу дру́гу.", "дру́гу", 4]].forEach(([ru, w, k], j) =>
    out.push({ id: "U10-cid-" + j, tipo: "caso-id", forma: "elegir", dificultad: 2, modulo: 11, grupo: "CI-" + j, items: [], oir: ru, pide: "¿En qué caso está «" + w + "»?", grande: ru, audio: ru,
      opciones: CASOS6.slice(), correcta: CASOS6[k], explicacion: "**" + w + "**: " + CASOS6[k].toLowerCase() + "." }));
  [["Le doy un regalo a mi hermana.", "Я даю́ пода́рок сестре́."], ["Ayer estuve en el restaurante con mi hermano. (sos hombre)", "Вчера́ я был в рестора́не с бра́том."], ["Ana no tiene auto.", "У А́нны нет маши́ны."],
   ["Después del trabajo llamo a Iván.", "По́сле рабо́ты я звоню́ Ива́ну."], ["Compro un regalo para mamá.", "Я покупа́ю пода́рок для ма́мы."], ["Me gusta Moscú.", "Мне нра́вится Москва́."]].forEach(([es, ru], j) => {
    out.push({ id: "U10-mix-" + j, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: 11, grupo: "MX-" + j, items: [], oir: ru, pide: "Escribí en ruso: «" + es + "»", audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", explicacion: ru });
    out.push({ id: "U10-mixd-" + j, tipo: "dictado", forma: "escribir", dificultad: 3, modulo: 11, grupo: "MXd-" + j, items: [], pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru", explicacion: ru + " — " + es });
  });
  U10_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U10-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 11, grupo: "L10-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U10-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 11, grupo: "L10v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + todo }));
  });

  /* ── Vocabulario nuevo ── */
  const dicEs = { "мно́го": ["mucho", 4], "ма́ло": ["poco", 4], "немно́го": ["un poco", 4], "стака́н": ["vaso", 4], "без": ["sin", 5], "для": ["para", 5], "о́коло": ["cerca de", 5], "по́сле": ["después de", 5],
    "дава́ть": ["dar", 6], "звони́ть": ["llamar (por teléfono)", 6], "помога́ть": ["ayudar", 6], "пока́зывать": ["mostrar", 6], "отвеча́ть": ["responder", 6], "сове́товать": ["aconsejar", 6],
    "нра́виться": ["gustar", 7], "ну́жно": ["hace falta", 7], "нельзя́": ["no se puede", 7], "тру́дно": ["difícil", 7], "легко́": ["fácil", 7], "нож": ["cuchillo", 9], "ре́зать": ["cortar", 9],
    "архите́ктор": ["arquitecto", 10], "колле́га": ["colega", 2] };
  Object.keys(dicEs).forEach(ac => { const e = lex(ac); if (!e) return;
    out.push({ id: "U10-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: dicEs[ac][1], grupo: e.id, items: ["lex:" + e.id], oir: e.ru, pide: "Escribí en ruso: «" + dicEs[ac][0] + "»",
      audio: e.ru, audioManual: true, pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + dicEs[ac][0] }); });
  /* Ampliación: со мной… */
  U10_PRON.ins.forEach((x, i) => out.push({ id: "U10-amp-" + i, tipo: "con-quien", forma: "escribir", dificultad: 2, modulo: 8, ampliacion: true, grupo: "AM-" + i, items: [], oir: x,
    pide: "Escribí en ruso: «" + ["conmigo", "con vos", "con él", "con ella", "con nosotros", "con ustedes", "con ellos"][i] + "»", audio: x, audioManual: true,
    esperadas: [x], idioma: "ru", explicacion: x }));
  out.forEach(e => { if (e.explicacion) e.explicacion = u10Palabras(e.explicacion); if (e.pide) e.pide = u10Palabras(e.pide); });
  return out;
}

/* Proyecto «Моя жизнь»: 3 de cada caso nuevo, tres tiempos y 2 negaciones */
(function () {
  const m = UNIDAD_10.modulos.find(x => x.id === "u10m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*/).map(x => x.trim()).filter(x => pal(x).length >= 1);
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
