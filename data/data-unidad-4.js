/* ============================================================
   DATA-UNIDAD-4.JS — Unidad 4: Casos I · nominativo y acusativo
   ------------------------------------------------------------
   Versión 02/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 02/10/2026):
   · Base de unas 80 palabras, todas del léxico (26 nuevas para el
     alumno y el resto de repaso), más una ampliación opcional en los
     módulos 4, 5 y 6. No se agregaron palabras al léxico.
   · Verbos solo en я, он / она́, мы y они́; ты y вы, en la Unidad 5.
   · Sin «tener» (у меня́ есть es genitivo, Unidad 10).
   · Cada explicación muestra el cambio: кни́га → кни́гу.
   · Formas del nominativo, el acusativo y los verbos: de Casos y de
     Verbos, nunca a mano. Las frases salen de una lista cerrada de
     verbo + objeto con sentido (U4_COMBOS).
   ============================================================ */

/* Sustantivos de la unidad: "ruso": [español, objeto indefinido o sin
   artículo, objeto definido, emoji]. Las personas llevan «a…» como objeto
   y su forma de sujeto. */
const U4_COSAS = {
  "кни́га": ["libro", "un libro", "el libro", "📕"], "газе́та": ["diario", "el diario", "el diario", "📰"], "му́зыка": ["música", "música", "la música", "🎵"],
  "маши́на": ["auto", "un auto", "el auto", "🚗"], "вода́": ["agua", "agua", "el agua", "💧"], "ры́ба": ["pescado", "pescado", "el pescado", "🐟"],
  "пи́цца": ["pizza", "pizza", "la pizza", "🍕"], "су́мка": ["cartera", "una cartera", "la cartera", "👜"], "карти́на": ["cuadro", "un cuadro", "el cuadro", "🖼️"],
  "кварти́ра": ["departamento", "un departamento", "el departamento", "🏢"], "ко́мната": ["habitación", "una habitación", "la habitación", ""], "ча́шка": ["taza", "una taza", "la taza", "☕"],
  "ру́чка": ["lapicera", "una lapicera", "la lapicera", "🖊️"], "пе́сня": ["canción", "una canción", "la canción", "🎶"], "исто́рия": ["historia", "una historia", "la historia", "📖"],
  "дом": ["casa", "una casa", "la casa", "🏠"], "парк": ["parque", "un parque", "el parque", "🏞️"], "журна́л": ["revista", "una revista", "la revista", ""],
  "фильм": ["película", "una película", "la película", "🎬"], "телефо́н": ["teléfono", "un teléfono", "el teléfono", "📱"], "компью́тер": ["computadora", "una computadora", "la computadora", "💻"],
  "стол": ["mesa", "una mesa", "la mesa", ""], "хлеб": ["pan", "pan", "el pan", "🍞"], "сок": ["jugo", "jugo", "el jugo", "🧃"], "суп": ["sopa", "sopa", "la sopa", "🍲"],
  "чай": ["té", "té", "el té", "🫖"], "слова́рь": ["diccionario", "un diccionario", "el diccionario", "📙"],
  "окно́": ["ventana", "una ventana", "la ventana", "🪟"], "мо́ре": ["mar", "el mar", "el mar", "🌊"], "сло́во": ["palabra", "una palabra", "la palabra", ""],
  "письмо́": ["carta", "una carta", "la carta", "✉️"], "молоко́": ["leche", "leche", "la leche", "🥛"], "я́блоко": ["manzana", "una manzana", "la manzana", "🍎"],
  "ко́фе": ["café", "café", "el café", "☕"], "кино́": ["cine", "el cine", "el cine", "🎬"],
  /* Animales: [español, indefinido, definido, emoji, «a…»] */
  "соба́ка": ["perro", "un perro", "el perro", "🐕", "al perro"], "ко́шка": ["gata", "una gata", "la gata", "🐈", "a la gata"], "кот": ["gato", "un gato", "el gato", "🐈‍⬛", "al gato"],
  /* Ampliación */
  "ло́жка": ["cuchara", "una cuchara", "la cuchara", "🥄"], "таре́лка": ["plato", "un plato", "el plato", ""], "колбаса́": ["fiambre", "fiambre", "el fiambre", ""],
  "ку́ртка": ["campera", "una campera", "la campera", ""], "гита́ра": ["guitarra", "una guitarra", "la guitarra", "🎸"],
  "сыр": ["queso", "queso", "el queso", "🧀"], "торт": ["torta", "una torta", "la torta", "🎂"], "сала́т": ["ensalada", "una ensalada", "la ensalada", "🥗"],
  "бутербро́д": ["sándwich", "un sándwich", "el sándwich", "🥪"], "мяч": ["pelota", "una pelota", "la pelota", "⚽"], "пода́рок": ["regalo", "un regalo", "el regalo", "🎁"],
  "велосипе́д": ["bicicleta", "una bicicleta", "la bicicleta", "🚲"], "рюкза́к": ["mochila", "una mochila", "la mochila", "🎒"], "пальто́": ["abrigo", "un abrigo", "el abrigo", "🧥"]
};
/* Personas: "ruso": [español, como objeto, como sujeto] */
const U4_PERSONAS = {
  "ма́ма": ["mamá", "a mamá", "Mamá"], "па́па": ["papá", "a papá", "Papá"], "ба́бушка": ["abuela", "a la abuela", "La abuela"], "де́душка": ["abuelo", "al abuelo", "El abuelo"],
  "брат": ["hermano", "a mi hermano", "Mi hermano"], "сестра́": ["hermana", "a mi hermana", "Mi hermana"], "сын": ["hijo", "a mi hijo", "Mi hijo"],
  "жена́": ["esposa", "a mi esposa", "Mi esposa"], "муж": ["esposo", "a mi esposo", "Mi esposo"], "друг": ["amigo", "a mi amigo", "Mi amigo"], "подру́га": ["amiga", "a mi amiga", "Mi amiga"],
  "сосе́д": ["vecino", "al vecino", "El vecino"], "сосе́дка": ["vecina", "a la vecina", "La vecina"], "учи́тель": ["maestro", "al maestro", "El maestro"],
  "учи́тельница": ["maestra", "a la maestra", "La maestra"], "врач": ["médico", "al médico", "El médico"], "ребёнок": ["chico (niño)", "al chico", "El chico"],
  "А́нна": ["Ana", "a Ana", "Ana"], "Ива́н": ["Iván", "a Iván", "Iván"], "Ма́ша": ["Masha", "a Masha", "Masha"], "Ди́ма": ["Dima", "a Dima", "Dima"],
  "О́льга": ["Olga", "a Olga", "Olga"], "Лу́кас": ["Lucas", "a Lucas", "Lucas"],
  /* Ampliación */
  "тётя": ["tía", "a la tía", "La tía"], "дя́дя": ["tío", "al tío", "El tío"], "ня́ня": ["niñera", "a la niñera", "La niñera"], "дочь": ["hija", "a mi hija", "Mi hija"],
  "актёр": ["actor", "al actor", "El actor"], "актри́са": ["actriz", "a la actriz", "La actriz"], "ма́льчик": ["chico", "al chico", "El chico"],
  "де́вочка": ["nena", "a la nena", "La nena"], "студе́нт": ["estudiante (hombre)", "al estudiante", "El estudiante"], "студе́нтка": ["estudiante (mujer)", "a la estudiante", "La estudiante"]
};

/* Verbos: "ruso": [infinitivo en español, yo, él / ella, nosotros, ellos, artículo del objeto]
   artículo: "un" (un libro, pan) · "el" (el libro) · "0" (sin artículo: estudio historia) */
const U4_VERBOS = {
  "чита́ть": ["leer", "leo", "lee", "leemos", "leen", "un"], "писа́ть": ["escribir", "escribo", "escribe", "escribimos", "escriben", "un"],
  "люби́ть": ["querer, encantar", "quiero", "quiere", "queremos", "quieren", "el"], "ви́деть": ["ver", "veo", "ve", "vemos", "ven", "un"],
  "знать": ["conocer, saber", "conozco", "conoce", "conocemos", "conocen", "el"], "понима́ть": ["entender", "entiendo", "entiende", "entendemos", "entienden", "el"],
  "изуча́ть": ["estudiar", "estudio", "estudia", "estudiamos", "estudian", "0"], "смотре́ть": ["mirar", "miro", "mira", "miramos", "miran", "un"],
  "слу́шать": ["escuchar", "escucho", "escucha", "escuchamos", "escuchan", "un"], "покупа́ть": ["comprar", "compro", "compra", "compramos", "compran", "un"],
  "иска́ть": ["buscar", "busco", "busca", "buscamos", "buscan", "el"], "есть": ["comer", "como", "come", "comemos", "comen", "un"],
  "пить": ["tomar (beber)", "tomo", "toma", "tomamos", "toman", "un"], "ждать": ["esperar", "espero", "espera", "esperamos", "esperan", "el"],
  "открыва́ть": ["abrir", "abro", "abre", "abrimos", "abren", "el"], "закрыва́ть": ["cerrar", "cierro", "cierra", "cerramos", "cierran", "el"],
  "находи́ть": ["encontrar", "encuentro", "encuentra", "encontramos", "encuentran", "el"], "испо́льзовать": ["usar", "uso", "usa", "usamos", "usan", "el"],
  "де́лать": ["hacer", "hago", "hace", "hacemos", "hacen", "un"]
};

/* Qué recibe cada verbo: lista cerrada, para que las frases tengan sentido.
   Lo de «amp» es de la ampliación (opcional). */
const U4_COMBOS = {
  "чита́ть": "кни́га газе́та журна́л письмо́ исто́рия",
  "писа́ть": "письмо́ исто́рия пе́сня сло́во",
  "люби́ть": "му́зыка пи́цца ко́фе чай мо́ре кино́ ры́ба ма́ма па́па ба́бушка де́душка сестра́ брат сын жена́ муж соба́ка ко́шка кот",
  "ви́деть": "дом парк мо́ре окно́ маши́на карти́на соба́ка кот ко́шка брат сестра́ сосе́д сосе́дка учи́тель учи́тельница врач друг подру́га А́нна Ива́н Ма́ша Ди́ма",
  "знать": "А́нна Ива́н Ма́ша Ди́ма О́льга Лу́кас учи́тель учи́тельница врач сосе́д сосе́дка исто́рия пе́сня",
  "понима́ть": "сло́во исто́рия учи́тель учи́тельница ма́ма па́па",
  "изуча́ть": "исто́рия му́зыка",
  "смотре́ть": "фильм карти́на",
  "слу́шать": "му́зыка пе́сня исто́рия ма́ма па́па учи́тель учи́тельница ба́бушка",
  "покупа́ть": "кни́га газе́та журна́л хлеб сок ко́фе чай вода́ ры́ба пи́цца молоко́ я́блоко су́мка ру́чка компью́тер телефо́н маши́на кварти́ра дом слова́рь ча́шка карти́на пальто́",
  "иска́ть": "телефо́н ру́чка кни́га су́мка слова́рь кот ко́шка соба́ка кварти́ра ма́ма брат сестра́",
  "есть": "хлеб суп ры́ба пи́цца я́блоко",
  "пить": "ко́фе чай сок вода́ молоко́",
  "ждать": "ма́ма па́па брат сестра́ друг подру́га А́нна Ива́н Ма́ша Ди́ма сосе́д",
  "открыва́ть": "окно́ кни́га су́мка письмо́",
  "закрыва́ть": "окно́ кни́га су́мка",
  "находи́ть": "телефо́н ру́чка кни́га су́мка слова́рь кот ко́шка соба́ка",
  "испо́льзовать": "компью́тер телефо́н слова́рь ру́чка"
};
const U4_COMBOS_AMP = {
  "покупа́ть": "сыр торт сала́т бутербро́д колбаса́ ку́ртка гита́ра мяч велосипе́д рюкза́к ло́жка таре́лка",
  "есть": "сыр торт сала́т бутербро́д колбаса́",
  "ждать": "тётя дя́дя ня́ня дочь",
  "ви́деть": "актёр актри́са ма́льчик де́вочка студе́нт студе́нтка",
  "знать": "актёр актри́са студе́нт студе́нтка",
  "иска́ть": "мяч рюкза́к ку́ртка"
};

/* Desde qué módulo ve el alumno cada palabra (regla de Manu: ningún
   ejercicio usa una palabra que no se haya visto antes). */
const U4_VISTAS = {
  1: "кни́га вода́ пе́сня ры́ба брат кот учи́тель друг дом чай окно́ письмо́ чита́ть пить люби́ть ви́деть слу́шать кто что",
  2: "А́нна Ива́н Ма́ша Ди́ма О́льга Лу́кас ма́ма па́па ба́бушка де́душка сестра́ подру́га учи́тельница врач ребёнок маши́на соба́ка",
  3: "я он она́ мы они́ писа́ть люби́ть ви́деть знать понима́ть изуча́ть смотре́ть слу́шать покупа́ть иска́ть есть ждать открыва́ть закрыва́ть находи́ть испо́льзовать де́лать",
  4: "газе́та му́зыка пи́цца су́мка карти́на кварти́ра ко́мната ча́шка ру́чка исто́рия жена́ ко́шка сосе́дка",
  5: "парк журна́л фильм телефо́н компью́тер стол хлеб сок суп слова́рь муж сын сосе́д",
  6: "мо́ре сло́во молоко́ я́блоко ко́фе кино́ пальто́"
};
const U4_AMPLIACION_RU = {
  4: "ло́жка таре́лка колбаса́ ку́ртка гита́ра тётя дя́дя ня́ня актри́са де́вочка студе́нтка дочь",
  5: "сыр торт сала́т бутербро́д мяч пода́рок велосипе́д рюкза́к актёр ма́льчик студе́нт"
};

/* Frases de la lectura (módulo 8): cada texto con su traducción, preguntas
   y afirmaciones. Revisadas a mano. */
const U4_LECTURAS = [
  { id: "ivan", titulo: "Ива́н", lineas: [
      ["Ива́н лю́бит му́зыку.", "A Iván le encanta la música."], ["Он слу́шает пе́сню.", "Escucha una canción."],
      ["Ива́н зна́ет А́нну.", "Iván conoce a Ana."], ["Он ждёт А́нну.", "Espera a Ana."], ["Они́ смо́трят фильм.", "Miran una película."]],
    preguntas: [["¿Qué escucha Iván?", "пе́сню", ["пе́сня", "фильм"]], ["¿A quién espera Iván?", "А́нну", ["А́нна", "Ива́на"]], ["¿Qué miran?", "фильм", ["пе́сню", "му́зыку"]]],
    vf: [["Ива́н лю́бит му́зыку.", true], ["А́нна ждёт Ива́на.", false], ["Ива́н слу́шает пе́сню.", true]] },
  { id: "babushka", titulo: "Ба́бушка", lineas: [
      ["Ба́бушка пьёт чай.", "La abuela toma té."], ["Она́ чита́ет газе́ту.", "Lee el diario."], ["Она́ ждёт сы́на.", "Espera a su hijo."],
      ["Ба́бушка лю́бит ко́шку.", "A la abuela le encanta la gata."], ["Ко́шка пьёт молоко́.", "La gata toma leche."]],
    preguntas: [["¿Qué lee la abuela?", "газе́ту", ["газе́та", "кни́гу"]], ["¿Qué toma la gata?", "молоко́", ["чай", "во́ду"]], ["¿A quién espera la abuela?", "сы́на", ["сын", "ко́шку"]]],
    vf: [["Ба́бушка ждёт сы́на.", true], ["Сын ждёт ба́бушку.", false], ["Ко́шка пьёт чай.", false]] },
  { id: "compras", titulo: "Мы покупа́ем хлеб", lineas: [
      ["Мы покупа́ем хлеб и молоко́.", "Compramos pan y leche."], ["Ма́ма и́щет су́мку.", "Mamá busca la cartera."],
      ["Па́па покупа́ет газе́ту.", "Papá compra el diario."], ["Брат ест я́блоко.", "Mi hermano come una manzana."], ["Мы лю́бим пи́ццу.", "Nos encanta la pizza."]],
    preguntas: [["¿Qué busca mamá?", "су́мку", ["су́мка", "ру́чку"]], ["¿Qué compra papá?", "газе́ту", ["газе́та", "журна́л"]], ["¿Qué come el hermano?", "я́блоко", ["хлеб", "пи́ццу"]]],
    vf: [["Ма́ма и́щет су́мку.", true], ["Па́па ест я́блоко.", false], ["Мы лю́бим пи́ццу.", true]] },
  { id: "masha", titulo: "Ма́ша и Ди́ма", lineas: [
      ["Ма́ша пи́шет письмо́.", "Masha escribe una carta."], ["Ди́ма открыва́ет окно́.", "Dima abre la ventana."],
      ["Они́ ви́дят мо́ре.", "Ven el mar."], ["Ма́ша лю́бит Ди́му.", "Masha quiere a Dima."], ["Ди́ма лю́бит Ма́шу.", "Dima quiere a Masha."]],
    preguntas: [["¿Qué escribe Masha?", "письмо́", ["исто́рию", "пе́сню"]], ["¿Qué abre Dima?", "окно́", ["кни́гу", "письмо́"]], ["¿A quién quiere Masha?", "Ди́му", ["Ди́ма", "Ма́шу"]]],
    vf: [["Ди́ма пи́шет письмо́.", false], ["Они́ ви́дят мо́ре.", true], ["Ма́ша лю́бит Ди́му.", true]] }
];

const UNIDAD_4 = {
  id: 4,
  titulo: "Casos I: nominativo y acusativo",
  tituloRu: "Падежи́ I: имени́тельный и вини́тельный",
  objetivo: "Distinguir quién hace la acción y qué la recibe, usar los primeros verbos de acción y poner en acusativo los sustantivos de los tres géneros.",
  tiempo: "25–30 horas",
  modulos: [
    { id: "u4m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "¿Qué es un caso?", resumen: "Ма́ма чита́ет кни́гу: quién hace y qué recibe.",
      intro: "En ruso, una palabra cambia la terminación según el papel que cumple en la frase. Esos cambios se llaman **casos**. Suena difícil, pero la idea es simple y en esta unidad ves los dos primeros.",
      secciones: [
        { titulo: "Quién hace y qué recibe", texto: "En Ма́ма чита́ет кни́гу («mamá lee un libro») hay alguien que hace la acción, ма́ма, y algo que la recibe: кни́гу. En español eso lo marca el orden de las palabras. En ruso lo marca la terminación.", destacado: "Ма́ма чита́ет кни́гу. ¿Quién lee? Ма́ма. ¿Qué lee? Кни́гу." },
        { titulo: "Кни́га y кни́гу", texto: "Es la misma palabra con dos terminaciones. Кни́га es la forma del diccionario, la que ya conocés: se llama **nominativo**. Кни́гу es la forma de lo que recibe la acción: se llama **acusativo**. El ruso tiene seis casos; los otros cuatro llegan en las próximas unidades. En la tabla de abajo ves cómo cambian doce palabras comunes: algunas cambian y otras quedan igual. Las reglas, en los módulos 4, 5 y 6." },
        { titulo: "Кто? Что?", texto: "Para encontrar cada parte, preguntá. ¿Quién hace la acción? Кто? (¿quién?). ¿Qué la recibe? Что? (¿qué?). Па́па пьёт ко́фе («papá toma café»): кто пьёт? («¿quién toma?») Па́па. Что он пьёт? («¿qué toma?») Ко́фе.", truco: "Primero buscá quién hace la acción; lo que queda es lo que la recibe." }
      ] },
    { id: "u4m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "Nominativo", resumen: "La forma del diccionario: quién hace la acción.",
      intro: "El nominativo es la forma que ya usaste en las Unidades 2 y 3: la del diccionario.",
      secciones: [
        { titulo: "El que hace la acción", texto: "Quien hace la acción va siempre en nominativo: А́нна чита́ет кни́гу («Ana lee un libro»), брат пьёт ко́фе («mi hermano toma café»), ба́бушка чита́ет («la abuela lee»).", destacado: "Quién hace la acción → nominativo." },
        { titulo: "Después de э́то", texto: "Con э́то («esto es», «este es») la palabra también va en nominativo, como en la Unidad 3: Э́то дом. Э́то маши́на. Э́то мой брат." },
        { titulo: "Personas que vas a usar", texto: "En esta unidad, las frases las protagonizan personas que ya conocés: А́нна, Ива́н, Ма́ша, Ди́ма, О́льга, Лу́кас y la familia (ма́ма, па́па, ба́бушка, де́душка, брат, сестра́). Tocá cada una abajo para escucharla." }
      ] },
    { id: "u4m3", n: 3, tipo: "leccion", nPractica: 10, titulo: "Verbos de acción", resumen: "Я чита́ю, он чита́ет, мы чита́ем, они́ чита́ют.",
      intro: "Para que algo reciba una acción, primero hace falta la acción: el verbo. En ruso, el verbo cambia según quién la hace.",
      secciones: [
        { titulo: "Cuatro formas por ahora", texto: "En esta unidad ves cuatro formas de cada verbo, una por pronombre: {я} (yo), он / она́ (él / ella, y también cualquier persona: ма́ма чита́ет), мы (nosotros) y они́ (ellos). Las formas de ты y вы llegan en la Unidad 5, junto con la conjugación completa." },
        { titulo: "El modelo de чита́ть", texto: "Muchos verbos siguen el modelo de чита́ть: я чита́ю, он чита́ет, мы чита́ем, они́ чита́ют. Igual que él van понима́ть, изуча́ть, слу́шать, покупа́ть, де́лать, открыва́ть y закрыва́ть.", destacado: "{я} -ю · он / она́ -ет · мы -ем · они́ -ют" },
        { titulo: "Los que cambian más", texto: "Otros cambian un poco más, y conviene aprenderlos de a uno con la tabla: пить → {я} пью, он пьёт; есть → {я} ем, он ест; ждать → {я} жду, он ждёт; писа́ть → {я} пишу́, он пи́шет; люби́ть → {я} люблю́, он лю́бит. En el módulo Verbos tenés la conjugación completa de cada uno.", truco: "Casi todas las formas de {я} terminan en -у o -ю (la excepción es {я} ем, de есть), y las de они́ en -ут, -ют, -ат o -ят." },
        { titulo: "La ё", texto: "Algunas formas llevan ё: пьёт, ждёт, пьём. En Azbuka podés escribir е en su lugar, como hacen los rusos en el día a día." }
      ] },
    { id: "u4m4", n: 4, tipo: "leccion", grupo: "f", titulo: "Acusativo femenino", resumen: "-а → -у, -я → -ю.",
      intro: "Las palabras que terminan en **-а** o **-я** son las únicas que cambian siempre en acusativo. Por suerte, la regla es corta.",
      secciones: [
        { titulo: "-а → -у", texto: "Кни́га → кни́гу, му́зыка → му́зыку, ма́ма → ма́му: Я чита́ю кни́гу. Он лю́бит му́зыку. Мы ждём ма́му.", destacado: "кни́га → кни́гу" },
        { titulo: "-я → -ю", texto: "Пе́сня → пе́сню, исто́рия → исто́рию: Она́ слу́шает пе́сню («ella escucha una canción»)." },
        { titulo: "También los hombres en -а o -я", texto: "Па́па, де́душка, Ди́ма y дя́дя son masculinos, pero terminan en **-а** o **-я** (los viste en la Unidad 3). Siguen la regla de la terminación: па́па → па́пу, де́душка → де́душку, Ди́ма → Ди́му, дя́дя → дя́дю.", truco: "Mirá cómo termina la palabra: -а → -у, -я → -ю, sea hombre o mujer." },
        { titulo: "Las femeninas en -ь no cambian", texto: "Las palabras femeninas que terminan en **-ь** quedan igual en acusativo: дочь → дочь (hija). Я жду дочь: «espero a mi hija»." },
        { titulo: "El acento puede moverse", texto: "Вода́ → во́ду, сестра́ → сестру́, жена́ → жену́: en algunas palabras el acento cambia de lugar. Al escribir no hace falta marcarlo; al leer en voz alta, escuchá el audio." }
      ] },
    { id: "u4m5", n: 5, tipo: "leccion", grupo: "m", titulo: "Acusativo masculino", resumen: "Cosas: igual. Personas y animales: +а.",
      intro: "En el masculino importa una pregunta: ¿la palabra nombra una cosa, o una persona o un animal?",
      secciones: [
        { titulo: "Cosas: no cambian", texto: "Si es una cosa, el acusativo es igual al nominativo: Я ви́жу дом. Он покупа́ет телефо́н. Мы пьём чай.", destacado: "дом → дом · телефо́н → телефо́н" },
        { titulo: "Personas y animales: +а", texto: "Si es una persona o un animal, se agrega **-а**: брат → бра́та, друг → дру́га, Ива́н → Ива́на, кот → кота́. Los que terminan en **-ь** cambian la **-ь** por **-я**: учи́тель → учи́теля.", destacado: "брат → бра́та · учи́тель → учи́теля" },
        { titulo: "El orden no manda", texto: "Como la terminación dice quién hace la acción, el orden puede cambiar. Ма́ма ждёт бра́та y Бра́та ждёт ма́ма dicen lo mismo: mamá espera a mi hermano. En los dos casos, бра́та es a quien se espera.", truco: "Para saber quién hace qué, mirá las terminaciones, no el orden." }
      ] },
    { id: "u4m6", n: 6, tipo: "leccion", grupo: "n", titulo: "Acusativo neutro", resumen: "Окно́, мо́ре, письмо́: no cambian.",
      intro: "El neutro es el más fácil: en acusativo no cambia.",
      secciones: [
        { titulo: "No cambian", texto: "Окно́, мо́ре, сло́во, письмо́, молоко́, я́блоко: Он открыва́ет окно́. Я пью молоко́. Она́ пи́шет письмо́.", destacado: "окно́ → окно́" },
        { titulo: "Las que vienen de otros idiomas", texto: "Ко́фе, кино́ y пальто́ (abrigo) no cambian nunca, en ningún caso: Я пью ко́фе. Мы лю́бим кино́. Она́ покупа́ет пальто́." },
        { titulo: "Resumen del acusativo", texto: "Femenino en **-а** / **-я**: -у / -ю (y también los hombres en -а o -я). Femenino en **-ь**: igual. Masculino: igual si es una cosa; **+а** (o -ь → -я) si es una persona o un animal. Neutro: igual.", destacado: "кни́гу · пе́сню · дом · бра́та · учи́теля · окно́" }
      ] },
    { id: "u4m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "Construir frases", resumen: "Я + чита́ть + кни́га → Я чита́ю кни́гу.",
      intro: "Ya tenés todo para armar frases completas. Se hace en tres pasos.",
      secciones: [
        { titulo: "Tres pasos", texto: "1. Quién hace la acción, en nominativo: **я**.\n2. El verbo, en la forma de esa persona: **чита́ю**.\n3. Lo que recibe la acción, en acusativo: **кни́гу**.", destacado: "{я} + чита́ть + кни́га → Я чита́ю кни́гу." },
        { titulo: "Cuando el que hace es una persona", texto: "Ма́ма, А́нна o брат van con la forma de он / она́: Ма́ма чита́ет газе́ту. Брат и́щет телефо́н. El verbo no cambia con el género: он чита́ет, она́ чита́ет." },
        { titulo: "Preguntas", texto: "Кто чита́ет кни́гу? («¿quién lee el libro?») — Ма́ма. Что чита́ет ма́ма? («¿qué lee mamá?») — Кни́гу. La pregunta va en el mismo caso que la respuesta.", truco: "Si la respuesta es quién hace la acción, va en nominativo; si es lo que la recibe, en acusativo." }
      ] },
    { id: "u4m8", n: 8, tipo: "lectura", titulo: "Lectura", resumen: "Textos cortos: ¿quién hace qué?",
      intro: "Cuatro textos cortos con lo que aprendiste. Leelos, escuchalos y después contestá: la respuesta siempre está en el texto." },
    { id: "u4m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Escribir en ruso", resumen: "Traducir y entender por qué.",
      intro: "Ahora al revés: del español al ruso. Si algo no está en el caso que corresponde, la corrección te dice cuál y por qué.",
      secciones: [
        { titulo: "Lo que no se traduce", texto: "El ruso no tiene artículos: «un libro», «el libro» y «libro» son todos кни́га (y, cuando reciben la acción, кни́гу). Tampoco hace falta traducir «mi» en «mi hermano»: брат alcanza. Y el «a» de «espero a mamá» no se traduce: lo dice la terminación, ма́му." },
        { titulo: "«Me encanta»", texto: "«Me encanta la música» en ruso se dice con люби́ть: я люблю́ му́зыку. Lo que te encanta va en acusativo." }
      ] },
    { id: "u4m10", n: 10, tipo: "proyecto", titulo: "Proyecto final", resumen: "Quién hace qué en tu familia, tu casa o tus amigos.",
      intro: "Escribí un texto sobre tu familia, tu casa o tus amigos: quién hace qué. Por ejemplo: Ма́ма чита́ет газе́ту. Мой брат лю́бит пи́ццу. Я пью ко́фе. No importa que sea simple: lo importante es que lo que recibe la acción esté en acusativo.",
      requisitos: [], consejos: [] },
    { id: "u4m11", n: 11, tipo: "examen", titulo: "Evaluación", resumen: "Casos, verbos, frases y traducción.",
      intro: "Veinticinco ejercicios en seis partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Quién y qué", tipos: ["tocar", "quien-a-quien", "tocar-caso", "nom-elegir"], n: 4 },
        { nombre: "Verbos", tipos: ["conjugar", "conjugar-escribir", "persona"], n: 4 },
        { nombre: "Acusativo", tipos: ["acusativo", "acu-elegir", "completar"], n: 6 },
        { nombre: "Frases", tipos: ["construir", "corregir"], n: 4 },
        { nombre: "Traducción", tipos: ["es-ru"], n: 4 },
        { nombre: "Audio", tipos: ["dictado"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};
function unidad4Modulo(id) { return UNIDAD_4.modulos.find(m => m.id === id) || null; }

/* Mezcla: ~65 % de producción (escribir, construir, ordenar) */
const U4_MEZCLA = { "tocar-caso": 2, "nom-elegir": 1, tocar: 2, "quien-a-quien": 1, conjugar: 1, "conjugar-escribir": 2, persona: 1, acusativo: 2, "acu-elegir": 1, completar: 2, cambia: 1,
  construir: 2, corregir: 1, "es-ru": 2, dictado: 2, ordenar: 1, significado: 1, "palabra-es-ru": 1, emparejar: 1, lectura: 2, "lectura-vf": 1 };

/* ── Datos armados una vez ─────────────────────────────────── */
function u4Datos() {
  if (u4Datos.cache) return u4Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => { const c = (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos); return c[0] || null; };
  const desde = {};
  Object.keys(U4_VISTAS).forEach(m => U4_VISTAS[m].split(" ").forEach(ru => { if (desde[sin(ru)] == null) desde[sin(ru)] = +m; }));
  const amp = {};
  Object.keys(U4_AMPLIACION_RU).forEach(m => U4_AMPLIACION_RU[m].split(" ").forEach(ru => { amp[sin(ru)] = +m; }));

  /* Sustantivos con nominativo y acusativo de Casos */
  const sust = {};
  const alta = (ru, es, persona) => {
    const e = lex(ru, "sustantivo"); if (!e) return;
    const cz = typeof casosById === "function" ? casosById(e.id) : null; if (!cz) return;
    const indecl = cz.tipo === "indeclinable";
    const nom = indecl ? cz.ru : cz.sg[0], acc = indecl ? cz.ru : cz.sg[3];
    const k = sin(ru);
    const anim = e.animate === "sí" || e.animate === true;
    const s = { id: e.id, ac: e.acento || e.ru, nom, acc, dat: indecl ? cz.ru : cz.sg[2], g: e.gender, anim, indecl, persona: !!persona,
      es: es[0], desde: desde[k] || amp[k] || 99, amp: amp[k] || 0 };
    if (persona) { s.a = es[1]; s.suj = es[2]; } else { s.un = es[1]; s.el = es[2]; s.emoji = es[3] || ""; s.aAnim = es[4] || null; }
    /* Módulo de su género para el acusativo */
    s.mod = s.g === "f" || /[ая]$/.test(sin(nom)) ? 4 : s.g === "m" ? 5 : 6;
    if (indecl) s.mod = 6;
    if (s.g === "f" && /ь$/.test(sin(nom))) s.mod = 4;
    sust[k] = s;
  };
  Object.keys(U4_COSAS).forEach(ru => alta(ru, U4_COSAS[ru], false));
  Object.keys(U4_PERSONAS).forEach(ru => alta(ru, U4_PERSONAS[ru], true));

  /* Verbos con sus cuatro formas (я, он / она́, мы, они́) de Verbos */
  const verb = {};
  Object.keys(U4_VERBOS).forEach(ru => {
    const e = lex(ru, "verbo"); if (!e) return;
    const v = typeof verboById === "function" ? verboById(e.id) : null; if (!v || !v.presente) return;
    const x = U4_VERBOS[ru];
    verb[sin(ru)] = { id: e.id, ac: e.acento || e.ru, f: [v.presente[0], v.presente[2], v.presente[3], v.presente[5]], es: x[0], esF: x.slice(1, 5), art: x[5], desde: desde[sin(ru)] || 3 };
  });
  return (u4Datos.cache = { sust, verb, sin });
}

/* Por qué el acusativo queda así (para las explicaciones): «кни́га → кни́гу: …» */
function u4Regla(s) {
  const n = s.nom.replace(/\u0301/g, ""), fin = n.slice(-1);
  let r;
  if (s.indecl) r = "viene de otro idioma y no cambia nunca";
  else if (fin === "а") r = s.g === "m" ? "termina en -а: aunque sea masculino, pasa a -у" : "termina en -а: en acusativo pasa a -у";
  else if (fin === "я") r = s.g === "m" ? "termina en -я: aunque sea masculino, pasa a -ю" : "termina en -я: en acusativo pasa a -ю";
  else if (s.g === "f") r = "es femenino en -ь: no cambia";
  else if (s.g === "n") r = "es neutro: no cambia";
  else if (!s.anim) r = "es masculino y nombra una cosa: no cambia";
  else if (fin === "ь") r = "es masculino y nombra a una persona: la -ь pasa a -я";
  else if (fin === "й") r = "es masculino y nombra a una persona: la -й pasa a -я";
  else r = "es masculino y nombra a " + (/кот|соба/.test(n) ? "un animal" : "una persona") + ": se agrega -а";
  /* ¿se movió el acento? */
  const pos = w => { const i = w.indexOf("\u0301"); return i < 0 ? (w.indexOf("ё") >= 0 ? w.indexOf("ё") + 1 : -1) : i; };
  const vocal = (w, i) => (w.slice(0, i).match(/[аеёиоуыэюя]/gi) || []).length;
  let mueve = "";
  if (s.nom !== s.acc && pos(s.nom) > 0 && pos(s.acc) > 0 && vocal(s.nom, pos(s.nom)) !== vocal(s.acc, pos(s.acc))) mueve = " Fijate que el acento se mueve.";
  return "**" + s.nom + " → " + s.acc + "**: " + r + "." + mueve;
}

/* Minúscula al principio, salvo los nombres propios (А́нна, Ива́н…) */
function u4Min(ru) { return /^(А́нна|Ива́н|Ма́ша|Ди́ма|О́льга|Лу́кас)$/.test(ru) ? ru : ru.charAt(0).toLowerCase() + ru.slice(1); }
function u4MinEs(es) { return /^(La|El|Mi|Mamá|Papá) /.test(es + " ") || /^(Mamá|Papá)$/.test(es) ? es.charAt(0).toLowerCase() + es.slice(1) : es; }
const U4_SUJ = [["Я", "", 0, null], ["Он", "Él", 1, null], ["Она́", "Ella", 1, null], ["Мы", "", 2, null], ["Они́", "Ellos", 3, null]];
const U4_SUJ_P = "А́нна Ива́н Ма́ша Ди́ма ма́ма па́па ба́бушка де́душка брат сестра́ учи́тель учи́тельница друг подру́га врач О́льга Лу́кас";

/* modo: null (rota entre todos) · "pron" (solo я, он, она́, мы, они́) · "pers" (solo personas, vistas hasta el módulo maxDesde) */
function u4Frase(vk, ok, k, modo, maxDesde) {
  const { sust, verb, sin } = u4Datos();
  const v = verb[sin(vk)], o = sust[sin(ok)]; if (!v || !o) return null;
  /* Quién: un patrón que cubre las cuatro formas del verbo */
  let patron = [0, 1, 2, 3, 4, 1, 3, 4][k % 8];   /* 0 я · 1 persona · 2 он/она́ · 3 мы · 4 они́ */
  /* Esposa, esposo e hijo: solo con я («quiero a mi esposa»), para que tenga sentido */
  if (/^(жена|муж|сын)$/.test(sin(ok))) patron = 0;
  if (modo === "pron") patron = [0, 2, 3, 4][k % 4];
  if (modo === "pers") patron = 1;
  let suj;
  if (patron === 1) {
    const lista = U4_SUJ_P.split(" ").map(x => sust[sin(x)]).filter(x => x && x.id !== o.id && (!maxDesde || x.desde <= maxDesde));
    const p = lista[(k * 7 + vk.length * 3) % lista.length];
    suj = { ru: p.nom.charAt(0).toUpperCase() + p.nom.slice(1), es: p.suj, p: 1, s: p };
  } else {
    const t = patron === 0 ? U4_SUJ[0] : patron === 2 ? U4_SUJ[1 + ((k >> 3) % 2)] : patron === 3 ? U4_SUJ[3] : U4_SUJ[4];
    suj = { ru: t[0], es: t[1], p: t[2], s: null };
  }
  const forma = v.f[suj.p];
  const ru = suj.ru + " " + forma + " " + o.acc + ".";
  /* Español */
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  let es;
  if (sin(vk) === "любить" && !o.persona) {
    const dat = suj.s ? ("A " + u4MinEs(suj.es)).replace(/^A el /, "Al ") : suj.es ? "A " + suj.es.toLowerCase() : "";
    const enc = ["me encanta", "le encanta", "nos encanta", "les encanta"][suj.p];
    es = cap(((dat ? dat + " " : "") + enc + " " + o.el).trim()) + ".";
  } else {
    const verboEs = sin(vk) === "любить" ? ["quiero", "quiere", "queremos", "quieren"][suj.p] : v.esF[suj.p];
    let obj = o.persona ? o.a : (o.aAnim && (v.art === "el")) ? o.aAnim : v.art === "el" ? o.el : v.art === "0" ? o.es : o.un;
    /* «Queremos a nuestro hermano», no «a mi hermano» */
    if (suj.p === 2) obj = obj.replace(/^a mi /, o.g === "f" ? "a nuestra " : "a nuestro ");
    es = cap(((suj.es ? suj.es + " " : "") + verboEs + " " + obj).trim()) + ".";
  }
  /* Variantes rusas aceptadas: sin я / мы, y мой / моя́ delante de la familia */
  const esperadas = [ru];
  if (suj.p === 0 || suj.p === 2) esperadas.push(cap(forma) + " " + o.acc + ".");
  if (suj.s && /^Mi /.test(suj.es)) esperadas.push((suj.s.g === "f" ? "Моя́ " : "Мой ") + suj.s.nom + " " + forma + " " + o.acc + ".");
  return { id: sin(vk) + "-" + sin(ok) + "-" + k, ru, es, esperadas, v, o, suj, forma, ids: [suj.s ? suj.s.id : null, v.id, o.id].filter(Boolean) };
}

function ejerciciosUnidad4() {
  const { sust, verb, sin } = u4Datos();
  const out = [];
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const uniq = a => [...new Set(a)];
  const PERS = ["я", "он / она́", "мы", "они́"];
  const sinP = t => t.replace(/[.,!?]/g, "");

  /* ── Vocabulario: palabras nuevas para el alumno ── */
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(4) >= 0);
  const enAmp = new Set(Object.values(U4_AMPLIACION_RU).join(" ").split(" ").map(sin));
  nuevas.forEach((e, i) => {
    const k = sin(e.acento || e.ru), s = sust[k], v = verb[k];
    const es = s ? s.es : v ? v.es : e.senses[0].es;
    const mod = s ? (s.amp || s.mod) : v ? 3 : 4;   /* vocabulario de cosas: en el módulo de su género */
    const ampl = enAmp.has(k);
    if (s && s.persona) return;   /* las personas no se practican como vocabulario: aparecen en las frases (Manu, 02/10/2026) */
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru, ampliacion: ampl || undefined };
    const misma = Object.values(s ? sust : verb).filter(x => x.id !== e.id && x.es !== es && (s ? x.amp === s.amp : true));
    const dis = baraja(misma, i + 3).slice(0, 3).map(x => x.es);
    if (dis.length >= 2) out.push(Object.assign({ id: "U4-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: mod, pide: "¿Qué significa?", grande: e.acento || e.ru, audio: e.ru,
      opciones: baraja([es].concat(dis), i + 5), correcta: es, explicacion: (e.acento || e.ru) + " — " + es }, base));
    out.push(Object.assign({ id: "U4-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: mod, pide: "Escribí en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento || e.ru], idioma: "ru", explicacion: (e.acento || e.ru) + " — " + es }, base));
  });

  /* ── Verbos (módulo 3): las cuatro formas ── */
  Object.values(verb).forEach((v, i) => {
    const base = { grupo: v.id, items: ["lex:" + v.id] };
    v.f.forEach((f, p) => {
      const pr = ["Я", "Он", "Мы", "Они́"][p];
      out.push(Object.assign({ id: "U4-conj-" + v.id + "-" + p, tipo: "conjugar", forma: "elegir", dificultad: 1, modulo: 3, pide: "Elegí la forma de «" + v.ac + "» (" + v.es + ").",
        grande: pr + " _____", opciones: baraja(uniq(v.f), i + p), correcta: f, oir: pr + " " + f,
        explicacion: "**" + v.ac + " → " + PERS[p] + " " + f + "** (" + ["yo", "él / ella", "nosotros", "ellos"][p] + " " + v.esF[p] + ")." }, base));
      out.push(Object.assign({ id: "U4-conjw-" + v.id + "-" + p, tipo: "conjugar-escribir", forma: "escribir", dificultad: 2, modulo: 3, pide: "Escribí la forma del verbo.",
        grande: PERS[p] + " + " + v.ac, audio: pr + " " + f, audioManual: true, esperadas: [f, pr + " " + f], idioma: "ru",
        explicacion: "**" + v.ac + " → " + PERS[p] + " " + f + "** (" + v.esF[p] + ")." }, base));
      out.push(Object.assign({ id: "U4-pers-" + v.id + "-" + p, tipo: "persona", forma: "elegir", dificultad: 1, modulo: 3, pide: "¿Quién lo hace?", grande: f, audio: f,
        opciones: p === 1 ? ["я", "он / она́", "мы", "они́"] : ["я", "он / она́", "мы", "они́"], correcta: PERS[p],
        explicacion: "**" + f + "** es la forma de " + PERS[p].replace(/^я$/, "{я}") + " (" + v.esF[p] + ")." }, base));
    });
    out.push(Object.assign({ id: "U4-emp-v-" + v.id, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 3, pide: "Uní cada persona con su forma de «" + v.ac + "».",
      pares: [["я", v.f[0]], ["он / она́", v.f[1]], ["мы", v.f[2]], ["они́", v.f[3]]], explicacion: v.ac + ": я " + v.f[0] + " · он / она́ " + v.f[1] + " · мы " + v.f[2] + " · они́ " + v.f[3] + "." }, base));
  });

  /* ── Sustantivos: acusativo de cada palabra (módulos 4, 5 y 6) ── */
  const objetos = Object.values(sust).filter(s => s.id && !/ребенок/.test(sin(s.nom)));
  objetos.forEach((s, i) => {
    const base = { grupo: s.id, items: ["lex:" + s.id], oir: s.acc, ampliacion: s.amp ? true : undefined };
    const m = s.mod;
    out.push(Object.assign({ id: "U4-acu-" + s.id, tipo: "acusativo", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribí el acusativo (lo que recibe la acción).", grande: s.nom, audio: s.nom, audioManual: true,
      esperadas: [s.acc], idioma: "ru", explicacion: u4Regla(s) + " (" + s.es + ")" }, base));
    out.push(Object.assign({ id: "U4-camb-" + s.id, tipo: "cambia", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Cambia en acusativo?", grande: s.nom, audio: s.nom,
      opciones: ["Sí, cambia", "No, queda igual"], correcta: s.nom === s.acc ? "No, queda igual" : "Sí, cambia", explicacion: u4Regla(s) }, base));
  });
  /* Memoria nominativo ↔ acusativo: de a cuatro, por módulo */
  [4, 5, 6].forEach(m => {
    [false, true].forEach(amp => {
      const l = objetos.filter(s => s.mod === m && !!s.amp === amp && s.nom !== s.acc);
      for (let j = 0; j + 4 <= l.length; j += 4) {
        const g = l.slice(j, j + 4);
        out.push({ id: "U4-mem-" + m + (amp ? "a" : "") + "-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: m, grupo: "mem-" + m + "-" + j + (amp ? "a" : ""), ampliacion: amp || undefined,
          pide: "Uní cada palabra con su acusativo.", pares: g.map(s => [s.nom, s.acc]), items: g.map(s => "lex:" + s.id), explicacion: g.map(s => s.nom + " → " + s.acc).join(" · ") });
      }
    });
  });

  /* ── Frases: verbo + objeto (lista cerrada) ── */
  const frases = [];
  const armar = (tabla, amp) => Object.keys(tabla).forEach((vk, vi) => tabla[vk].split(" ").forEach((ok, oi) => {
    [0, 1].forEach(r => { const f = u4Frase(vk, ok, vi * 3 + oi * 2 + r * 5); if (f) { f.amp = amp; f.r = r; frases.push(f); } });
  }));
  armar(U4_COMBOS, false); armar(U4_COMBOS_AMP, true);
  const vistas = new Set();
  frases.forEach((f, i) => {
    const key = f.ru; if (vistas.has(key)) return; vistas.add(key);
    const o = f.o, m = o.mod;
    const base = { grupo: "F4-" + f.id, items: ["lex:" + o.id, "lex:" + f.v.id], oir: f.ru, ampliacion: f.amp || undefined };
    const exp = u4Regla(o) + " " + f.ru + " — " + f.es;
    const conHueco = f.ru.replace(new RegExp(o.acc.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\.$"), "_____.");
    const verbo = f.suj.ru + " " + f.forma;
    if (f.r === 0) {
      /* Elegir la forma del objeto */
      const ops = uniq([o.acc, o.nom, o.dat]);
      if (ops.length >= 2) out.push(Object.assign({ id: "U4-acel-" + f.id, tipo: "acu-elegir", forma: "elegir", dificultad: 1, modulo: m, pide: "Completá: «" + f.es + "»", grande: conHueco,
        opciones: baraja(ops, i), correcta: o.acc, explicacion: exp }, base));
      /* Completar escribiendo */
      out.push(Object.assign({ id: "U4-comp-" + f.id, tipo: "completar", forma: "escribir", dificultad: 2, modulo: m, pide: "Completá con «" + o.nom + "» en el caso que corresponde.", grande: conHueco, pista: f.es,
        audio: f.ru, audioManual: true, esperadas: [o.acc], idioma: "ru", explicacion: exp }, base));
      /* ¿Cuál está bien? (solo si el acusativo cambia) */
      if (o.nom !== o.acc) out.push(Object.assign({ id: "U4-corr-" + f.id, tipo: "corregir", forma: "elegir", dificultad: 2, modulo: m, pide: "¿Cuál está bien?",
        opciones: baraja([f.ru, verbo + " " + o.nom + "."], i + 1), correcta: f.ru, explicacion: exp }, base));
      /* Tocá lo que recibe la acción */
      const pals = sinP(f.ru).split(" ");
      out.push(Object.assign({ id: "U4-toc-o-" + f.id, tipo: "tocar", forma: "tocar", dificultad: 1, modulo: m, pide: "Tocá lo que recibe la acción.", palabras: pals, correcta: pals.length - 1, audio: f.ru,
        explicacion: "**" + o.acc + "** recibe la acción: está en acusativo (" + (o.nom === o.acc ? "queda igual que " + o.nom : o.nom + " → " + o.acc) + "). " + f.ru + " — " + f.es }, base));
      /* Armar la frase (módulo 7) */
      out.push(Object.assign({ id: "U4-cons-" + f.id, tipo: "construir", forma: "escribir", dificultad: 3, modulo: f.amp ? m : 7, pide: "Armá la frase con estas palabras.",
        grande: u4Min(f.suj.ru) + " · " + f.v.ac + " · " + o.nom, pista: f.es, audio: f.ru, audioManual: true, esperadas: f.esperadas, idioma: "ru",
        explicacion: f.suj.ru.replace(/^Я$/, "{Я}") + " → " + f.forma + " → " + o.acc + ". " + u4Regla(o) }, base));
    } else {
      /* Traducir al ruso (módulo 9) */
      out.push(Object.assign({ id: "U4-esru-" + f.id, tipo: "es-ru", forma: "escribir", dificultad: 3, modulo: f.amp ? m : 9, pide: "Escribí en ruso: «" + f.es + "»", audio: f.ru, audioManual: true,
        esperadas: f.esperadas, idioma: "ru", explicacion: f.ru + " " + u4Regla(o) }, base));
      /* Dictado */
      out.push(Object.assign({ id: "U4-dic-" + f.id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo: m, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru",
        explicacion: f.ru + " — " + f.es + " " + u4Regla(o) }, base));
      /* Ordenar (módulo 7) */
      const w = sinP(f.ru).split(" ");
      let fi = baraja(w, i + 7); if (fi.join(" ") === w.join(" ")) fi = fi.slice(1).concat(fi[0]);
      out.push(Object.assign({ id: "U4-ord-" + f.id, tipo: "ordenar", forma: "ordenar", dificultad: 2, modulo: f.amp ? m : 7, pide: "Ordená: «" + f.es + "»", audio: f.ru, fichas: fi, sep: " ", esperada: w.join(" "),
        explicacion: f.ru + " " + u4Regla(o) }, base));
    }
  });

  /* ── Módulo 1: el acusativo de doce palabras comunes ── */
  const tabla1 = U4_VISTAS[1].split(" ").map(ru => sust[sin(ru)]).filter(Boolean);
  const cambian1 = tabla1.filter(s => s.nom !== s.acc);
  cambian1.forEach((s, j) => {
    [[s.nom, "Nominativo", "la forma del diccionario"], [s.acc, "Acusativo", "la forma de lo que recibe la acción (" + s.nom + " → " + s.acc + ")"]].forEach(([w, cs, por], r) => {
      const base = { grupo: "C4-" + s.id, items: ["lex:" + s.id] };
      out.push(Object.assign({ id: "U4-caso-" + s.id + "-" + r, tipo: "tocar-caso", forma: "elegir", dificultad: 1, modulo: 1, pide: "¿Qué forma es?", grande: w, audio: w,
        opciones: ["Nominativo", "Acusativo"], correcta: cs, explicacion: "**" + w + "** es " + cs.toLowerCase() + ": " + por + ". Significa «" + s.es + "»." }, base));
      out.push(Object.assign({ id: "U4-casoa-" + s.id + "-" + r, tipo: "tocar-caso", forma: "elegir", dificultad: 2, modulo: 1, pide: "Escuchá: ¿nominativo o acusativo?", audio: w,
        opciones: ["Nominativo", "Acusativo"], correcta: cs, explicacion: "Sonó **" + w + "**: " + cs.toLowerCase() + " (" + s.nom + " → " + s.acc + ")." }, base));
    });
  });
  /* Uní el audio con su acusativo: ▶ suena la palabra en nominativo; a la derecha, los acusativos */
  for (let j = 0; j + 4 <= tabla1.length; j += 4) {
    const g = baraja(tabla1, 41).slice(j, j + 4);
    out.push({ id: "U4-memaud-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 1, grupo: "MA4-" + j, audioIzq: true,
      pide: "Tocá ▶, escuchá la palabra y uníla con su acusativo.", pista: "Tocá ▶ para escuchar y después su acusativo.", pares: g.map(s => [s.nom, s.acc]), items: g.map(s => "lex:" + s.id),
      explicacion: g.map(s => s.nom + " → " + s.acc).join(" · ") });
  }
  /* Tocá lo que recibe la acción, en frases con las palabras de la tabla */
  const frases1 = [["чита́ть", "кни́га"], ["чита́ть", "письмо́"], ["пить", "вода́"], ["пить", "чай"], ["люби́ть", "ры́ба"], ["люби́ть", "кот"], ["люби́ть", "брат"],
    ["ви́деть", "дом"], ["ви́деть", "окно́"], ["ви́деть", "друг"], ["ви́деть", "учи́тель"], ["слу́шать", "пе́сня"]];
  frases1.forEach(([vk, ok], j) => {
    const f = u4Frase(vk, ok, j, "pron"); if (!f) return;
    const pals = sinP(f.ru).split(" ");
    out.push({ id: "U4-toc1-" + j, tipo: "tocar", forma: "tocar", dificultad: 1, modulo: 1, grupo: "T4-" + f.o.id, items: ["lex:" + f.o.id], oir: f.ru,
      pide: "Tocá lo que recibe la acción.", palabras: pals, correcta: pals.length - 1, audio: f.ru,
      explicacion: "**" + f.o.acc + "** recibe la acción: está en acusativo (" + (f.o.nom === f.o.acc ? "queda igual que " + f.o.nom : f.o.nom + " → " + f.o.acc) + "). " + f.ru + " — " + f.es });
  });

  /* ── Módulo 2: quién hace la acción va en nominativo ── */
  const frases2 = [["чита́ть", "кни́га"], ["чита́ть", "письмо́"], ["пить", "вода́"], ["пить", "чай"], ["люби́ть", "ры́ба"], ["люби́ть", "кот"], ["ви́деть", "дом"],
    ["ви́деть", "окно́"], ["слу́шать", "пе́сня"], ["ви́деть", "кот"], ["чита́ть", "кни́га"], ["пить", "вода́"], ["слу́шать", "пе́сня"], ["люби́ть", "чай"]];
  frases2.forEach(([vk, ok], j) => {
    const f = u4Frase(vk, ok, j * 3 + 1, "pers", 2); if (!f || !f.suj.s) return;
    const S = f.suj.s, pals = sinP(f.ru).split(" ");
    const base = { grupo: "S4-" + S.id + "-" + j, items: ["lex:" + S.id], oir: f.ru };
    out.push(Object.assign({ id: "U4-toc2-" + j, tipo: "tocar", forma: "tocar", dificultad: 1, modulo: 2, pide: "Tocá quién hace la acción.", palabras: pals, correcta: 0, audio: f.ru,
      explicacion: "**" + S.nom + "** hace la acción: está en nominativo. " + f.ru + " — " + f.es }, base));
    /* Elegir la forma de quien hace la acción: nominativo, no acusativo */
    if (S.nom !== S.acc) {
      const cap = w => w.charAt(0).toUpperCase() + w.slice(1);
      out.push(Object.assign({ id: "U4-nom2-" + j, tipo: "nom-elegir", forma: "elegir", dificultad: 2, modulo: 2, pide: "Completá: «" + f.es + "»", grande: "_____ " + pals.slice(1).join(" ") + ".",
        opciones: baraja([cap(S.nom), cap(S.acc)], j), correcta: cap(S.nom), explicacion: "**" + S.nom + "** hace la acción: va en nominativo, la forma del diccionario (" + S.acc + " es el acusativo). " + f.ru }, base));
    }
  });
  /* Э́то + nominativo (módulo 2) */
  Object.values(sust).filter(s => s.desde <= 2 && !s.amp && s.persona).forEach((s, j) => {
    const ru = "Э́то " + s.nom + ".";
    out.push({ id: "U4-eto-" + s.id, tipo: "dictado", forma: "escribir", dificultad: 1, modulo: 2, grupo: "E4-" + s.id, items: ["lex:" + s.id], oir: ru, pide: "Escuchá y escribí.", audio: ru, esperadas: [ru], idioma: "ru",
      explicacion: ru + " — Es " + u4MinEs(s.suj) + ". Después de э́то, nominativo." });
  });

  /* ── Quién a quién (módulo 5): dos personas, la terminación decide ── */
  const pares = [["ма́ма", "ждать", "брат"], ["А́нна", "знать", "Ива́н"], ["сестра́", "ждать", "друг"], ["Ма́ша", "люби́ть", "Ди́ма"], ["учи́тельница", "ви́деть", "сосе́д"], ["ба́бушка", "ждать", "сын"],
    ["па́па", "искать", "брат"], ["Ди́ма", "люби́ть", "Ма́ша"], ["Ива́н", "ждать", "А́нна"], ["сосе́дка", "знать", "учи́тель"]];
  pares.forEach(([a, vk, b], j) => {
    const A = sust[sin(a)], B = sust[sin(b)], v = verb[sin(vk)]; if (!A || !B || !v) return;
    const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
    const vEs = sin(vk) === "любить" ? "quiere" : v.esF[1];
    const bien = A.suj + " " + vEs + " " + B.a + ".", mal = B.suj + " " + vEs + " " + A.a + ".";
    const ruN = cap(A.nom) + " " + v.f[1] + " " + B.acc + ".", ruI = cap(B.acc) + " " + v.f[1] + " " + A.nom + ".";
    [ruN, ruI].forEach((ru, r) => out.push({ id: "U4-qaq-" + j + "-" + r, tipo: "quien-a-quien", forma: "elegir", dificultad: r ? 3 : 2, modulo: Math.max(5, A.mod === 5 || B.mod === 5 ? 5 : 4),
      grupo: "Q4-" + j, items: ["lex:" + A.id, "lex:" + B.id], pide: "¿Qué significa?", grande: ru, audio: ru, opciones: baraja([bien, mal], j + r), correcta: bien,
      explicacion: "**" + A.nom + "** está en nominativo: es quien hace la acción. **" + B.acc + "** está en acusativo (" + B.nom + " → " + B.acc + ")." + (r ? " El orden no importa: manda la terminación." : "") }));
  });

  /* ── Lectura (módulo 8) ── */
  U4_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]);
    const todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U4-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 8, grupo: "L4-" + L.id + "-" + k, items: [],
      texto: lineas, pide: q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, oir: todo,
      explicacion: "**" + ok + "**: " + (L.lineas.find(l => sin(l[0]).toLowerCase().indexOf(sin(ok).toLowerCase()) >= 0) || L.lineas[0]).join(" — ") }));
    L.vf.forEach(([af, v], k) => out.push({ id: "U4-lvf-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 8, grupo: "L4v-" + L.id + "-" + k, items: [],
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Verdadero. " : "Falso. ") + L.lineas.map(l => l[0]).join(" ") }));
  });
  return out;
}

/* Requisitos y consejos del proyecto: se cuentan con Casos y Verbos */
(function () {
  const m = UNIDAD_4.modulos.find(x => x.id === "u4m10");
  const pal = t => t.match(/[А-Яа-яЁё\u0301]+/g) || [];
  const info = w => { const idx = azIndiceFormas(); const r = idx.get(azFormaClave(w)); return r || []; };
  /* Es verbo si todas sus lecturas son de un verbo y no es un imperativo (мой es «mi» y también «lavá»: no cuenta) */
  const esVerbo = w => { const r = info(w); return r.length > 0 && r.every(x => (lexComerById(x[0]) || {}).posNormalized === "verbo" && !/imper/i.test(x[2] || "")); };
  const frases = t => t.split(/[.!?]+/).map(x => x.trim()).filter(x => pal(x).length >= 2);
  const acusativos = t => {
    let n = 0;
    frases(t).forEach(f => { const w = pal(f); for (let i = 0; i + 1 < w.length; i++) if (esVerbo(w[i])) {
      const cand = info(w[i + 1]).find(x => { const cz = typeof casosById === "function" ? casosById(x[0]) : null; return cz && (cz.tipo === "indeclinable" || (cz.sg && azFormaClave(cz.sg[3]) === azFormaClave(w[i + 1]))); });
      if (cand) { n++; break; } } });
    return n;
  };
  const verbos = t => new Set(pal(t).map(w => { const v = info(w).find(x => (lexComerById(x[0]) || {}).posNormalized === "verbo"); return v ? v[0] : null; }).filter(Boolean)).size;
  m.requisitos = [
    { txt: "Al menos 12 frases", fn: t => frases(t).length >= 12 },
    { txt: "Al menos 6 verbos distintos", fn: t => verbos(t) >= 6 },
    { txt: "Al menos 8 cosas o personas en acusativo (después del verbo)", fn: t => acusativos(t) >= 8 }
  ];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f); for (let i = 0; i + 1 < w.length; i++) if (esVerbo(w[i])) {
      const sig = w[i + 1];
      info(sig).forEach(x => { const cz = casosById(x[0]); if (cz && cz.sg && azFormaClave(cz.sg[0]) === azFormaClave(sig) && azFormaClave(cz.sg[3]) !== azFormaClave(sig))
        out.push("Después de «" + w[i] + "», si " + cz.sg[0] + " es lo que recibe la acción, va en acusativo: **" + cz.sg[3] + "**."); });
    } });
    return [...new Set(out)];
  } }];
})();

/* Palabra del día de la unidad: un objeto con su acusativo y una frase */
function u4PalabraDelDia(fecha) {
  const { sust } = u4Datos();
  const con = Object.values(sust).filter(s => !s.persona && s.emoji && !s.amp && s.nom !== s.acc);
  const d = fecha || new Date();
  const n = Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / 86400000);
  const s = con[n % con.length];
  const vk = Object.keys(U4_COMBOS).find(v => U4_COMBOS[v].split(" ").indexOf(s.ac) >= 0) || "ви́деть";
  const f = u4Frase(vk, s.ac, 0);
  return Object.assign({}, s, { ejemplo: f ? f.ru : "", ejemploEs: f ? f.es : "" });
}

window.UNIDAD_4 = UNIDAD_4;
window.unidad4Modulo = unidad4Modulo;
window.ejerciciosUnidad4 = ejerciciosUnidad4;
window.u4Datos = u4Datos;
window.u4Regla = u4Regla;
window.u4PalabraDelDia = u4PalabraDelDia;
window.U4_MEZCLA = U4_MEZCLA;
