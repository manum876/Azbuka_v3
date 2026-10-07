/* ============================================================
   DATA-UNIDAD-4.JS — Unidad 4: Casos I · nominativo y acusativo
   ------------------------------------------------------------
   Versión 07/10/2026 (teoría ampliada: ids de regla, ejemplos explicados,
   frases desarmadas, errores típicos, chequeos y «Más a fondo»); antes,
   02/10/2026. Contenido, vocabulario y banco de ejercicios.
   Ejercicios nuevos (07/10/2026): porque, natural, par, oido, descubrir,
   diagnostico, cadena y desarmar (~530, ~20 % de la mezcla), y «regla»
   en todos los tipos donde es directo (u4ReglaId, u4ReglaVerbo).
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
  tiempo: "3 a 4 semanas con práctica diaria (unas 25–30 horas)",
  modulos: [
    { id: "u4m1", n: 1, tipo: "leccion", nPractica: 10, titulo: "¿Qué es un caso?", resumen: "Ма́ма чита́ет кни́гу: quién hace y qué recibe.",
      intro: "En ruso, una palabra cambia la terminación según el papel que cumple en la frase. Esos cambios se llaman **casos**. Suena difícil, pero la idea es simple y en esta unidad ves los dos primeros.",
      secciones: [
        { id: "u4-caso", titulo: "Quién hace y qué recibe",
          antes: { pide: "En Ма́ма чита́ет кни́гу, кни́га aparece como кни́гу. ¿Por qué te parece que cambió?", opciones: ["Porque recibe la acción", "Porque está al final", "Porque es plural"], ok: "Porque recibe la acción", por: "Кни́гу es lo que mamá lee. El cambio no depende del lugar: aunque la muevas, sigue siendo кни́гу." },
          texto: "En Ма́ма чита́ет кни́гу («mamá lee un libro») hay alguien que hace la acción, ма́ма, y algo que la recibe, кни́гу. En español eso lo marca sobre todo el orden: el que hace va antes del verbo. En ruso lo marca la **terminación** de la palabra.\nCada forma que toma una palabra según su papel en la frase se llama **caso**.",
          desarmar: { es: "Mamá lee un libro.", partes: [
            { txt: "Ма́ма", rol: "quién hace", nota: "Nominativo: la forma del diccionario. Responde a кто? (¿quién?)." },
            { txt: "чита́ет", rol: "la acción", nota: "Чита́ть en la forma de он / она́: «lee»." },
            { txt: "кни́гу", rol: "qué recibe", nota: "Acusativo: кни́га cambia la **-а** por **-у**. Responde a что? (¿qué?)." }] },
          destacado: "Ма́ма чита́ет кни́гу: ма́ма hace, кни́гу recibe.",
          mas: { titulo: "Por qué el ruso puede cambiar el orden", texto: "Como la terminación ya dice quién hace y qué recibe, el ruso puede mover las palabras sin que cambie el sentido. En español, en cambio, el orden es justamente lo que avisa quién hace la acción, y por eso no se puede mover con tanta libertad.\nCambiar el orden no es un error, pero tampoco es lo más común: lo neutral es quién hace, la acción y qué recibe. Armá tus frases en ese orden; el orden cambiado lo vas a reconocer al leer.",
            ejemplos: [{ ru: "{Кни́гу} чита́ет ма́ма.", es: "Mamá lee el libro.", por: "Кни́гу está primero, pero sigue siendo lo que se lee: la **-у** lo dice." }] } },
        { id: "u4-nom-acu", titulo: "Кни́га y кни́гу",
          texto: "Es la misma palabra con dos terminaciones. Кни́га es la forma del diccionario, la que ya conocés: se llama **nominativo**. Кни́гу es la forma de lo que recibe la acción: se llama **acusativo**.\nEn la tabla de abajo ves doce palabras en los dos casos: algunas cambian y otras quedan igual. Las reglas que deciden cuáles cambian llegan más adelante en esta unidad.",
          destacado: "nominativo = quién hace · acusativo = qué recibe",
          mas: { texto: "El ruso tiene seis casos. Cada uno responde a una pregunta distinta: ¿quién?, ¿qué?, ¿dónde?, ¿a quién?, ¿con quién?, ¿de quién? En esta unidad ves los dos primeros, y los otros cuatro llegan de a uno en las próximas unidades.\nNo hace falta aprenderlos de memoria ahora: cada caso aparece cuando lo necesitás para decir algo nuevo." } },
        { id: "u4-kto-chto", titulo: "Кто? Что?",
          texto: "Para encontrar cada parte, hacé dos preguntas. ¿Quién hace la acción? Кто? (¿quién?). ¿Qué recibe la acción? Что? (¿qué?). La respuesta a кто? va en nominativo; la respuesta a что?, en acusativo.",
          ejemplos: [
            { ru: "{Па́па} пьёт ко́фе.", es: "Papá toma café.", por: "Кто пьёт? Па́па: es quien hace la acción, en nominativo." },
            { ru: "Брат лю́бит {пе́сню}.", es: "A mi hermano le encanta la canción.", por: "Что он лю́бит? Пе́сню: пе́сня recibe la acción y cambia la **-я** por **-ю**." },
            { ru: "Кот пьёт {во́ду}.", es: "El gato toma agua.", por: "Что пьёт кот? Во́ду: вода́ recibe la acción y cambia la **-а** por **-у**." },
            { ru: "Друг ви́дит {дом}.", es: "Mi amigo ve la casa.", por: "Что он ви́дит? Дом. Acá no cambia nada: algunas palabras quedan igual en acusativo." }],
          truco: "Primero buscá quién hace la acción; lo que queda es lo que la recibe.",
          mas: { texto: "Ко́фе no cambia nunca, porque viene de otro idioma. Por eso en Па́па пьёт ко́фе no se ve ninguna diferencia, y es la pregunta что? la que te dice que ко́фе recibe la acción.\nLo mismo pasa con muchas palabras masculinas, como дом o чай: la forma es la misma, pero el papel en la frase es otro.",
            ejemplos: [{ ru: "Учи́тель пьёт {чай}.", es: "El maestro toma té.", por: "Чай queda igual, pero responde a что?: recibe la acción." }] },
          chequeo: [
            { pide: "Брат слу́шает пе́сню. ¿Quién hace la acción?", opciones: ["брат", "пе́сню"], ok: "брат", por: "Кто слу́шает? Брат, en nominativo." },
            { pide: "Кот ви́дит ры́бу. ¿Qué recibe la acción?", opciones: ["кот", "ры́бу"], ok: "ры́бу", por: "Что ви́дит кот? Ры́бу: ры́ба pasa a **-у**." }] }
      ] },
    { id: "u4m2", n: 2, tipo: "leccion", nPractica: 10, titulo: "Nominativo", resumen: "La forma del diccionario: quién hace la acción.",
      intro: "El nominativo es la forma que ya usaste en las Unidades 2 y 3: la del diccionario.",
      secciones: [
        { id: "u4-nominativo", titulo: "El que hace la acción",
          texto: "Quien hace la acción va siempre en nominativo. Es la forma que ya usaste para presentarte y para decir qué es cada cosa, así que no hay ninguna terminación nueva para aprender: solo hay que reconocer el papel.",
          ejemplos: [
            { ru: "{А́нна} чита́ет кни́гу.", es: "Ana lee un libro.", por: "А́нна hace la acción: queda como en el diccionario." },
            { ru: "{Ба́бушка} слу́шает пе́сню.", es: "La abuela escucha una canción.", por: "Кто слу́шает? Ба́бушка, en nominativo." },
            { ru: "{Ива́н} пьёт чай.", es: "Iván toma té.", por: "Ива́н es quien toma: nominativo." },
            { ru: "{Соба́ка} ви́дит кота́.", es: "El perro ve al gato.", por: "Соба́ка hace la acción: nominativo. Кота́ es a quien ve." }],
          destacado: "Quién hace la acción → nominativo.",
          errores: [{ mal: "Ма́му чита́ет кни́гу.", bien: "{Ма́ма} чита́ет кни́гу.", por: "Ма́ма es la que lee: va en nominativo, la forma del diccionario." }],
          mas: { texto: "¿Y si el que hace la acción no es una persona? Da igual: también va en nominativo. La regla no mira si la palabra nombra a alguien o a algo, sino qué papel cumple en la frase.\nPor eso una misma palabra puede aparecer con dos formas en dos frases distintas: ма́ма cuando lee, ма́му cuando alguien la espera.",
            ejemplos: [{ ru: "{Кот} пьёт во́ду.", es: "El gato toma agua.", por: "Кот hace la acción: nominativo, aunque sea un animal." }] },
          chequeo: [
            { pide: "Ди́ма слу́шает пе́сню. ¿Quién hace la acción?", opciones: ["Ди́ма", "пе́сню"], ok: "Ди́ма", por: "Кто слу́шает? Ди́ма, en nominativo." },
            { pide: "¿Cuál está bien?", opciones: ["Ма́ша чита́ет кни́гу.", "Ма́шу чита́ет кни́гу."], ok: "Ма́ша чита́ет кни́гу.", por: "Ма́ша es la que lee: nominativo." }] },
        { id: "u4-eto", titulo: "Después de э́то",
          texto: "Con э́то («esto es», «este es») la palabra también va en nominativo. Э́то no es una acción que alguien hace sobre algo: solo señala. Por eso lo que viene después queda en la forma del diccionario.",
          ejemplos: [
            { ru: "Э́то {кни́га}.", es: "Es un libro.", por: "Después de э́то, nominativo: кни́га, no кни́гу." },
            { ru: "Э́то {мой брат}.", es: "Este es mi hermano.", por: "Мой y брат, los dos en nominativo." },
            { ru: "Э́то {соба́ка}.", es: "Es un perro.", por: "Solo se señala: nadie recibe ninguna acción." }],
          errores: [{ mal: "Э́то кни́гу.", bien: "Э́то {кни́га}.", por: "Э́то solo señala: no hay nada que reciba una acción." }],
          mas: { texto: "Э́то también sirve para presentar a alguien: Э́то А́нна. La persona queda en nominativo, porque solo se la señala. Y lo mismo con la pregunta: Кто э́то? («¿quién es?»), Что э́то? («¿qué es?»); la respuesta, otra vez en nominativo.",
            ejemplos: [{ ru: "Кто э́то? — Э́то {А́нна}.", es: "¿Quién es? — Es Ana.", por: "Se señala a una persona: nominativo." }] },
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["Э́то маши́на.", "Э́то маши́ну."], ok: "Э́то маши́на.", por: "Después de э́то va el nominativo." }] },
        { titulo: "Personas que vas a usar", texto: "En esta unidad, las frases las protagonizan personas que ya conocés: А́нна, Ива́н, Ма́ша, Ди́ма, О́льга, Лу́кас y la familia (ма́ма, па́па, ба́бушка, де́душка, брат, сестра́). Tocá cada una abajo para escucharla." }
      ] },
    { id: "u4m3", n: 3, tipo: "leccion", nPractica: 10, titulo: "Verbos de acción", resumen: "Я чита́ю, он чита́ет, мы чита́ем, они́ чита́ют.",
      intro: "Para que algo reciba una acción, primero hace falta la acción: el verbo. En ruso, el verbo cambia según quién la hace.",
      secciones: [
        { titulo: "Cuatro formas por ahora", texto: "En esta unidad ves cuatro formas de cada verbo, una por pronombre: {я} (yo), он / она́ (él / ella, y también cualquier persona: ма́ма чита́ет), мы (nosotros) y они́ (ellos). Las formas de ты y вы llegan en la Unidad 5, junto con la conjugación completa." },
        { id: "u4-verbos-chitat", titulo: "El modelo de чита́ть",
          texto: "Muchos verbos siguen el modelo de чита́ть: se saca la **-ть** del infinitivo y se agrega la terminación de cada persona. Igual que él van понима́ть, изуча́ть, слу́шать, покупа́ть, де́лать, открыва́ть y закрыва́ть.",
          ejemplos: [
            { ru: "Я {чита́ю} кни́гу.", es: "Leo un libro.", por: "Con {я}, la terminación es **-ю**." },
            { ru: "Ма́ма {слу́шает} пе́сню.", es: "Mamá escucha una canción.", por: "Ма́ма es una persona: forma de он / она́, **-ет**." },
            { ru: "Мы {понима́ем} учи́теля.", es: "Entendemos al maestro.", por: "Con мы, **-ем**." },
            { ru: "Они́ {покупа́ют} ры́бу.", es: "Ellos compran pescado.", por: "Con они́, **-ют**." }],
          destacado: "{я} -ю · он / она́ -ет · мы -ем · они́ -ют",
          errores: [
            { mal: "Мы чита́ет.", bien: "Мы {чита́ем}.", por: "Con мы, la terminación es **-ем**." },
            { mal: "Они́ чита́ет.", bien: "Они́ {чита́ют}.", por: "Con они́, **-ют**: cada persona tiene su terminación." }],
          mas: { texto: "El verbo no cambia con el género: он чита́ет y она́ чита́ет son iguales. Lo que cambia es la persona, no si es hombre o mujer.\nY cualquier persona, animal o cosa que hace la acción usa la forma de он / она́: ма́ма чита́ет, кот пьёт, учи́тель слу́шает. Si son varios, la de они́.",
            ejemplos: [{ ru: "Кот {пьёт} во́ду.", es: "El gato toma agua.", por: "Кот es uno solo: forma de он / она́." }] },
          chequeo: [
            { pide: "Мы ___ пе́сню. (слу́шать)", opciones: ["слу́шаю", "слу́шает", "слу́шаем", "слу́шают"], ok: "слу́шаем", por: "Con мы, **-ем**." },
            { pide: "А́нна ___ кни́гу. (чита́ть)", opciones: ["чита́ю", "чита́ет", "чита́ют"], ok: "чита́ет", por: "А́нна es una persona: forma de он / она́." }] },
        { id: "u4-verbos-otros", titulo: "Los que cambian más",
          texto: "Otros verbos cambian un poco más. No hace falta buscarles una regla ahora: conviene aprenderlos de a uno con la tabla de abajo, que tiene las cuatro formas de cada verbo de la unidad.",
          ejemplos: [
            { ru: "Я {пью} чай.", es: "Tomo té.", por: "Пить pierde la **и**: {я} пью, он пьёт." },
            { ru: "Кот {ест} ры́бу.", es: "El gato come pescado.", por: "Есть es irregular: {я} ем, он ест." },
            { ru: "Мы {ждём} ма́му.", es: "Esperamos a mamá.", por: "Ждать: {я} жду, мы ждём. La **ё** siempre lleva el acento." },
            { ru: "Она́ {пи́шет} письмо́.", es: "Ella escribe una carta.", por: "Писа́ть cambia la **с** por **ш**: {я} пишу́, она́ пи́шет." }],
          truco: "Casi todas las formas de {я} terminan en **-у** o **-ю** (la excepción es {я} ем, de есть), y las de они́ en **-ут**, **-ют**, **-ат** o **-ят**.",
          mas: { titulo: "La л de люблю́", texto: "En algunos verbos, la forma de {я} cambia la última consonante de la raíz: люби́ть → люблю́, ви́деть → ви́жу. Las otras personas vuelven a la raíz de siempre: он лю́бит, он ви́дит.\nEn la Unidad 5 vas a ver este cambio como un patrón; por ahora alcanza con reconocerlo.",
            ejemplos: [
              { ru: "Я {люблю́} ко́фе.", es: "Me encanta el café.", por: "Люби́ть suma una **л** solo con {я}: люблю́, pero он лю́бит." },
              { ru: "Я {ви́жу} кота́.", es: "Veo al gato.", por: "Ви́деть: la **д** pasa a **ж** solo con {я}." }] } },
        { titulo: "La ё", texto: "Algunas formas llevan ё: пьёт, ждёт, пьём. En Azbuka podés escribir е en su lugar, como hacen los rusos en el día a día." }
      ] },
    { id: "u4m4", n: 4, tipo: "leccion", grupo: "f", titulo: "Acusativo femenino", resumen: "-а → -у, -я → -ю.",
      intro: "Las palabras que terminan en **-а** o **-я** son las únicas que cambian siempre en acusativo. Por suerte, la regla es corta.",
      secciones: [
        { id: "u4-acu-a", titulo: "-а → -у",
          texto: "Las palabras que terminan en **-а** cambian esa **-а** por **-у** cuando reciben la acción. No importa qué nombran: una cosa, una persona o un animal.",
          ejemplos: [
            { ru: "Я чита́ю {кни́гу}.", es: "Leo un libro.", por: "кни́га → кни́гу: recibe la acción." },
            { ru: "Он лю́бит {му́зыку}.", es: "Le encanta la música.", por: "му́зыка → му́зыку." },
            { ru: "Мы ждём {ма́му}.", es: "Esperamos a mamá.", por: "ма́ма → ма́му: las personas también." },
            { ru: "Они́ покупа́ют {газе́ту}.", es: "Compran el diario.", por: "газе́та → газе́ту." }],
          destacado: "кни́га → кни́гу",
          errores: [{ mal: "Я люблю́ А́нна.", bien: "Я люблю́ {А́нну}.", por: "А́нна recibe la acción: la **-а** pasa a **-у**." }],
          mas: { texto: "Es la única regla del acusativo que cambia siempre: toda palabra en **-а** o **-я** cambia. Por eso es la primera que conviene dominar.\nOjo con no cambiar también al que hace la acción: en Ма́ма чита́ет кни́гу, ма́ма queda igual y solo cambia кни́га. La terminación depende del papel, no de la palabra.",
            ejemplos: [{ ru: "Сестра́ покупа́ет {ча́шку}.", es: "Mi hermana compra una taza.", por: "Сестра́ hace la acción y queda igual; ча́шка la recibe y pasa a **-у**." }] },
          chequeo: [{ pide: "Ива́н ждёт ___ (подру́га).", opciones: ["подру́га", "подру́гу"], ok: "подру́гу", por: "Подру́га recibe la acción: **-а** → **-у**." }] },
        { id: "u4-acu-ya", titulo: "-я → -ю",
          texto: "Las que terminan en **-я** hacen lo mismo con su vocal: la **-я** pasa a **-ю**. Es la misma regla, con la otra vocal.",
          ejemplos: [
            { ru: "Она́ слу́шает {пе́сню}.", es: "Ella escucha una canción.", por: "пе́сня → пе́сню." },
            { ru: "Мы изуча́ем {исто́рию}.", es: "Estudiamos historia.", por: "исто́рия → исто́рию." }],
          destacado: "пе́сня → пе́сню",
          chequeo: [{ pide: "Я пишу́ ___ (пе́сня).", opciones: ["пе́сня", "пе́сню", "пе́сну"], ok: "пе́сню", por: "Termina en **-я**: pasa a **-ю**." }] },
        { id: "u4-acu-hombres-a", titulo: "También los hombres en -а o -я",
          antes: { pide: "ма́ма → ма́му, кни́га → кни́гу. ¿Cómo queda па́па?", opciones: ["па́па", "па́пу", "па́пы"], ok: "па́пу", por: "Termina en **-а**: pasa a **-у**, aunque sea un hombre." },
          texto: "Па́па, де́душка y Ди́ма son masculinos, pero terminan en **-а**. En el acusativo lo que manda es la terminación, no el género: siguen la misma regla que ма́ма.",
          ejemplos: [
            { ru: "Я жду {па́пу}.", es: "Espero a papá.", por: "па́па → па́пу: termina en **-а**." },
            { ru: "Ма́ма лю́бит {де́душку}.", es: "Mamá quiere al abuelo.", por: "де́душка → де́душку." },
            { ru: "Ма́ша ви́дит {Ди́му}.", es: "Masha ve a Dima.", por: "Ди́ма → Ди́му." }],
          truco: "Mirá cómo termina la palabra: **-а** → **-у**, **-я** → **-ю**, sea hombre o mujer.",
          mas: { texto: "Con **-я** pasa lo mismo: дя́дя (tío) → дя́дю. Y lo que acompaña a estas palabras sigue siendo masculino: мой па́па. En el acusativo la palabra cambia como las femeninas, pero la persona sigue siendo un hombre.",
            ejemplos: [{ ru: "Мы ждём {дя́дю}.", es: "Esperamos al tío.", por: "дя́дя → дя́дю: **-я** → **-ю**." }] } },
        { id: "u4-acu-fem-soft", titulo: "Las femeninas en -ь no cambian",
          texto: "Las palabras femeninas que terminan en **-ь** quedan igual en acusativo: дочь → дочь (hija).",
          ejemplos: [{ ru: "Я жду {дочь}.", es: "Espero a mi hija.", por: "дочь → дочь: femenina en **-ь**, queda igual." }] },
        { id: "u4-acento-movil", titulo: "El acento puede moverse",
          texto: "En unas pocas palabras, el acento cambia de lugar en el acusativo. De las palabras de esta unidad, pasa con una sola: вода́ → во́ду. En casi todas, el acento se queda donde estaba: сестра́ → сестру́, жена́ → жену́, кни́га → кни́гу.",
          ejemplos: [{ ru: "Я пью {во́ду}.", es: "Tomo agua.", por: "вода́ → во́ду: cambia la terminación y el acento pasa a la primera sílaba." }],
          ojo: "Al escribir no hace falta marcar el acento. Si dudás de cómo suena una forma, tocá la palabra: la tabla de Casos muestra dónde va el acento en cada caso." }
      ] },
    { id: "u4m5", n: 5, tipo: "leccion", grupo: "m", titulo: "Acusativo masculino", resumen: "Cosas: igual. Personas y animales: +а.",
      intro: "En el masculino importa una pregunta: ¿la palabra nombra una cosa, o una persona o un animal?",
      secciones: [
        { id: "u4-masc-cosa", titulo: "Cosas: no cambian",
          texto: "Si la palabra masculina nombra una cosa, el acusativo es igual al nominativo. No hay que hacer nada: la forma del diccionario sirve también para lo que recibe la acción.",
          ejemplos: [
            { ru: "Я ви́жу {дом}.", es: "Veo la casa.", por: "Дом es una cosa: queda igual." },
            { ru: "Он покупа́ет {телефо́н}.", es: "Él compra un teléfono.", por: "Телефо́н, una cosa: igual." },
            { ru: "Мы пьём {чай}.", es: "Tomamos té.", por: "Чай queda igual: responde a что?, pero no cambia." }],
          destacado: "дом → дом · телефо́н → телефо́н",
          mas: { texto: "Si nada cambia, ¿cómo se sabe qué recibe la acción? Por la pregunta что? y por el orden neutral: quién hace, la acción y qué recibe. En Па́па покупа́ет хлеб no hay ninguna duda: el pan no compra a papá." } },
        { id: "u4-animacidad", titulo: "Personas y animales: +а",
          antes: { pide: "Я ви́жу дом, pero я ви́жу бра́та. ¿Qué tiene брат que no tenga дом?", opciones: ["Nombra a una persona", "Es femenino", "Es plural"], ok: "Nombra a una persona", por: "Брат es una persona: en acusativo suma **-а**. Дом es una cosa y queda igual." },
          texto: "Si la palabra masculina nombra a una persona o a un animal, en acusativo se agrega **-а**. Las que terminan en **-ь** cambian la **-ь** por **-я**.\nA esta diferencia entre seres vivos y cosas se la llama **animacidad**.",
          ejemplos: [
            { ru: "Я ви́жу {бра́та}.", es: "Veo a mi hermano.", por: "брат → бра́та: es una persona, +**а**." },
            { ru: "Мы ждём {дру́га}.", es: "Esperamos a nuestro amigo.", por: "друг → дру́га." },
            { ru: "Ма́ша лю́бит {кота́}.", es: "Masha quiere al gato.", por: "кот → кота́: los animales también. Fijate que el acento pasa a la **-а**." },
            { ru: "Они́ слу́шают {учи́теля}.", es: "Escuchan al maestro.", por: "учи́тель → учи́теля: la **-ь** pasa a **-я**." }],
          destacado: "брат → бра́та · учи́тель → учи́теля",
          comparacion: "también se distingue a las personas de las cosas: «veo la casa», pero «veo **a** Ana». Esa «a» es la misma idea que la **-а** del ruso: ви́жу дом, pero ви́жу бра́та.",
          errores: [
            { mal: "Я ви́жу брат.", bien: "Я ви́жу {бра́та}.", por: "Брат es una persona: en acusativo suma **-а**." },
            { mal: "Я жду сосе́д.", bien: "Я жду {сосе́да}.", por: "Сосе́д es una persona: +**а**." }],
          mas: { texto: "La regla mira lo que la palabra nombra, no cómo termina. Por eso стол y брат, que terminan los dos en consonante, se comportan distinto: стол queda igual y брат pasa a бра́та. Con los nombres de persona pasa lo mismo: Ива́н → Ива́на, Лу́кас → Лу́каса.\nEsto vale solo para el masculino. Las palabras en **-а** o **-я** cambian siempre por su terminación (ма́ма → ма́му, ко́шка → ко́шку), sean personas, animales o cosas.",
            ejemplos: [{ ru: "Мы зна́ем {Ива́на}.", es: "Conocemos a Iván.", por: "Ива́н es una persona: +**а**." }] },
          chequeo: [
            { pide: "Ма́ма ждёт ___ (сын).", opciones: ["сын", "сы́на"], ok: "сы́на", por: "Сын es una persona: +**а**." },
            { pide: "Па́па покупа́ет ___ (компью́тер).", opciones: ["компью́тер", "компью́тера"], ok: "компью́тер", por: "Es una cosa: queda igual." }] },
        { id: "u4-orden-libre", titulo: "El orden no manda",
          texto: "Como la terminación dice quién hace la acción, el orden puede cambiar. Ма́ма ждёт бра́та y Бра́та ждёт ма́ма dicen lo mismo: mamá espera a mi hermano.",
          ejemplos: [
            { ru: "Ма́ма ждёт {бра́та}.", es: "Mamá espera a mi hermano.", por: "El orden neutral: quién hace, la acción y a quién." },
            { ru: "{Бра́та} ждёт ма́ма.", es: "A mi hermano lo espera mamá.", por: "Бра́та sigue siendo a quien se espera: lo dice la **-а**, no el lugar." }],
          truco: "Para saber quién hace qué, mirá las terminaciones, no el orden.",
          chequeo: [{ pide: "Дру́га ждёт Ива́н. ¿Quién espera?", opciones: ["Ива́н", "друг"], ok: "Ива́н", por: "Дру́га está en acusativo: es a quien se espera. El que espera es Ива́н, en nominativo." }] }
      ] },
    { id: "u4m6", n: 6, tipo: "leccion", grupo: "n", titulo: "Acusativo neutro", resumen: "Окно́, мо́ре, письмо́: no cambian.",
      intro: "El neutro es el más fácil: en acusativo no cambia.",
      secciones: [
        { id: "u4-neutro", titulo: "No cambian",
          texto: "Las palabras neutras, las que terminan en **-о** o **-е**, quedan igual en acusativo. Es la regla más cómoda de la unidad.",
          ejemplos: [
            { ru: "Он открыва́ет {окно́}.", es: "Él abre la ventana.", por: "окно́ → окно́: neutro, igual." },
            { ru: "Я пью {молоко́}.", es: "Tomo leche.", por: "молоко́ queda igual." },
            { ru: "Она́ пи́шет {письмо́}.", es: "Ella escribe una carta.", por: "письмо́, neutro: igual." },
            { ru: "Мы ви́дим {мо́ре}.", es: "Vemos el mar.", por: "мо́ре termina en **-е**: neutro, igual." }],
          destacado: "окно́ → окно́",
          mas: { texto: "En el acusativo hay dos grupos que no cambian: el neutro y el masculino cuando nombra una cosa. Juntos son la mayoría de las palabras que nombran cosas. Por eso muchas frases con cosas no muestran el acusativo, y es la pregunta что? la que lo encuentra.",
            ejemplos: [{ ru: "Я ем {я́блоко}.", es: "Como una manzana.", por: "я́блоко: neutro, queda igual." }] },
          chequeo: [{ pide: "Мы чита́ем ___ (письмо́).", opciones: ["письмо́", "письму́"], ok: "письмо́", por: "Neutro: queda igual." }] },
        { id: "u4-indeclinables", titulo: "Las que vienen de otros idiomas",
          texto: "Ко́фе, кино́ y пальто́ (abrigo) vienen de otros idiomas y no cambian nunca, en ningún caso.",
          ejemplos: [
            { ru: "Я пью {ко́фе}.", es: "Tomo café.", por: "Ко́фе no cambia nunca." },
            { ru: "Мы лю́бим {кино́}.", es: "Nos encanta el cine.", por: "Кино́: igual." },
            { ru: "Она́ покупа́ет {пальто́}.", es: "Ella compra un abrigo.", por: "Пальто́: igual." }],
          ojo: "Ко́фе es masculino, pero como no cambia nunca, en el acusativo también queda igual.",
          mas: { texto: "Son pocas, pero muy usadas, y casi todas terminan en una vocal: **-о**, **-е**, **-и** o **-у**. Conviene aprenderlas como una lista corta. Las vas a reconocer porque en las tablas de Casos tienen la misma forma en todos los casos.",
            ejemplos: [{ ru: "Ба́бушка лю́бит {кино́}.", es: "A la abuela le encanta el cine.", por: "Кино́ no cambia: viene de otro idioma." }] } },
        { id: "u4-resumen", titulo: "Resumen del acusativo",
          texto: "Femenino en **-а** / **-я**: **-у** / **-ю** (y también los hombres en **-а** o **-я**). Femenino en **-ь**: igual. Masculino: igual si es una cosa; **+а** (o **-ь** → **-я**) si es una persona o un animal. Neutro: igual.",
          destacado: "кни́гу · пе́сню · дом · бра́та · учи́теля · окно́",
          chequeo: [
            { pide: "Я люблю́ ___ (ба́бушка).", opciones: ["ба́бушка", "ба́бушку"], ok: "ба́бушку", por: "Termina en **-а**: pasa a **-у**." },
            { pide: "Мы ви́дим ___ (врач).", opciones: ["врач", "врача́"], ok: "врача́", por: "Masculino y persona: +**а**." },
            { pide: "Она́ пьёт ___ (молоко́).", opciones: ["молоко́", "молоку́"], ok: "молоко́", por: "Neutro: queda igual." }] }
      ] },
    { id: "u4m7", n: 7, tipo: "leccion", nPractica: 10, titulo: "Construir frases", resumen: "Я + чита́ть + кни́га → Я чита́ю кни́гу.",
      intro: "Ya tenés todo para armar frases completas. Se hace en tres pasos.",
      secciones: [
        { id: "u4-tres-pasos", titulo: "Tres pasos",
          texto: "1. Quién hace la acción, en nominativo.\n2. El verbo, en la forma de esa persona.\n3. Lo que recibe la acción, en acusativo.",
          desarmar: { es: "Ana compra el diario.", partes: [
            { txt: "А́нна", rol: "quién hace", nota: "Paso 1: nominativo, la forma del diccionario." },
            { txt: "покупа́ет", rol: "la acción", nota: "Paso 2: А́нна es una persona, así que va la forma de он / она́." },
            { txt: "газе́ту", rol: "qué recibe", nota: "Paso 3: газе́та → газе́ту, acusativo." }] },
          ejemplos: [
            { ru: "Мы покупа́ем {хлеб}.", es: "Compramos pan.", por: "Мы + покупа́ть → покупа́ем; хлеб es una cosa: queda igual." },
            { ru: "Они́ ждут {Ива́на}.", es: "Esperan a Iván.", por: "Они́ + ждать → ждут; Ива́н es una persona: +**а**." },
            { ru: "Брат и́щет {соба́ку}.", es: "Mi hermano busca al perro.", por: "Брат usa la forma de он; соба́ка → соба́ку." }],
          destacado: "{я} + чита́ть + кни́га → Я чита́ю кни́гу.",
          mas: { texto: "Cuando termines de escribir una frase, revisala de atrás para adelante. Primero: ¿lo que recibe la acción está en acusativo? Después: ¿el verbo coincide con quien hace la acción? Son los dos errores más comunes, y se encuentran rápido si los buscás a propósito.",
            errores: [
              { mal: "Па́па лю́бит му́зыка.", bien: "Па́па лю́бит {му́зыку}.", por: "Му́зыка recibe la acción: **-а** → **-у**." },
              { mal: "Мы пьёт ко́фе.", bien: "Мы {пьём} ко́фе.", por: "Con мы, la forma es пьём." }] } },
        { id: "u4-sujeto-persona", titulo: "Cuando el que hace es una persona",
          texto: "Ма́ма, А́нна o брат van con la forma de он / она́. El verbo no cambia con el género: он чита́ет, она́ чита́ет.",
          ejemplos: [
            { ru: "Ма́ма {чита́ет} газе́ту.", es: "Mamá lee el diario.", por: "Ма́ма = она́: чита́ет." },
            { ru: "Брат {и́щет} телефо́н.", es: "Mi hermano busca el teléfono.", por: "Брат = он: и́щет." }] },
        { id: "u4-preguntas", titulo: "Preguntas",
          texto: "Para preguntar quién hace la acción, se usa кто; para preguntar qué la recibe, что. La respuesta va en el caso de lo que reemplaza.",
          ejemplos: [
            { ru: "{Кто} чита́ет кни́гу? — {Ма́ма}.", es: "¿Quién lee el libro? — Mamá.", por: "Кто pregunta por quien hace: la respuesta va en nominativo." },
            { ru: "{Что} чита́ет ма́ма? — {Кни́гу}.", es: "¿Qué lee mamá? — El libro.", por: "Что pregunta por lo que recibe: la respuesta va en acusativo." }],
          truco: "Si la respuesta es quién hace la acción, va en nominativo; si es lo que la recibe, en acusativo.",
          mas: { texto: "La respuesta puede ser una sola palabra: Кни́гу. Aunque esté sola, mantiene el acusativo, porque sigue siendo lo que se lee. Contestar Кни́га a esa pregunta suena raro en ruso, aunque se entienda." },
          chequeo: [{ pide: "Что ви́дит Ма́ша? — ___ (маши́на).", opciones: ["маши́на", "маши́ну"], ok: "маши́ну", por: "Responde a что?: es lo que recibe la acción, en acusativo." }] }
      ] },
    { id: "u4m8", n: 8, tipo: "lectura", titulo: "Lectura", resumen: "Textos cortos: ¿quién hace qué?",
      intro: "Cuatro textos cortos con lo que aprendiste. Leelos, escuchalos y después contestá: la respuesta siempre está en el texto." },
    { id: "u4m9", n: 9, tipo: "leccion", nPractica: 10, titulo: "Escribir en ruso", resumen: "Traducir y entender por qué.",
      intro: "Ahora al revés: del español al ruso. Si algo no está en el caso que corresponde, la corrección te dice cuál y por qué.",
      secciones: [
        { id: "u4-sin-articulos", titulo: "Lo que no se traduce",
          texto: "El ruso no tiene artículos: «un libro», «el libro» y «libro» son todos кни́га (y, cuando reciben la acción, кни́гу). Tampoco hace falta traducir «mi» en «mi hermano» cuando se entiende: брат alcanza.",
          ejemplos: [
            { ru: "Я покупа́ю {кни́гу}.", es: "Compro un libro / Compro el libro.", por: "Sin artículo: la misma frase sirve para «un» y para «el»." },
            { ru: "{Брат} пьёт чай.", es: "Mi hermano toma té.", por: "«Mi» no hace falta: se entiende por el contexto." }] },
        { id: "u4-a-personal-escrita", titulo: "La «a» de las personas",
          texto: "En «espero a mamá», la «a» no se escribe en ruso: la dice la terminación. Escribí la persona en acusativo y listo.",
          ejemplos: [
            { ru: "Я жду {ма́му}.", es: "Espero a mamá.", por: "Sin «a»: ма́му ya dice a quién se espera." },
            { ru: "Мы ви́дим {Ива́на}.", es: "Vemos a Iván.", por: "Ива́н → Ива́на: la **-а** hace el trabajo de la «a»." }],
          errores: [{ mal: "Я жду ма́ма.", bien: "Я жду {ма́му}.", por: "Ма́ма es a quien se espera: va en acusativo." }],
          mas: { texto: "Con los animales pasa lo mismo: «busco al gato» es Я ищу́ кота́. Y con las cosas no hay «a» en ninguno de los dos idiomas: «veo la casa», Я ви́жу дом. Si en la frase en español hay una «a» delante de una persona o un animal, en ruso esa palabra va en acusativo.",
            ejemplos: [{ ru: "Я ищу́ {кота́}.", es: "Busco al gato.", por: "Кот es un animal: +**а**, y la «a» no se escribe." }] } },
        { id: "u4-lyubit", titulo: "«Me encanta»",
          texto: "«Me encanta la música» en ruso se dice con люби́ть: Я люблю́ му́зыку. Lo que te encanta va en acusativo, porque es lo que recibe la acción de люби́ть.",
          ejemplos: [
            { ru: "Я люблю́ {пи́ццу}.", es: "Me encanta la pizza.", por: "пи́цца → пи́ццу: lo que encanta recibe la acción." },
            { ru: "Ма́ма лю́бит {чай}.", es: "A mamá le encanta el té.", por: "Чай es una cosa: queda igual." },
            { ru: "Они́ лю́бят {соба́ку}.", es: "Quieren al perro.", por: "соба́ка → соба́ку." }],
          mas: { texto: "Люби́ть sirve para personas y para cosas. Con personas es «querer»: Я люблю́ ма́му. Con cosas es «encantar»: Я люблю́ кино́. La frase se arma siempre igual: quién quiere, en nominativo, y qué o a quién, en acusativo." } }
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
  construir: 2, corregir: 1, "es-ru": 2, dictado: 2, ordenar: 1, significado: 1, "palabra-es-ru": 1, emparejar: 1, lectura: 2, "lectura-vf": 1,
  /* Tipos nuevos (07/10/2026): entender la regla, ~20 % de la sesión */
  porque: 1, natural: 1, par: 1, oido: 1, descubrir: 1, diagnostico: 1, cadena: 1, desarmar: 1 };

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

/* El id de la sección de teoría que explica el acusativo de una palabra (07/10/2026) */
function u4ReglaId(s) {
  const n = s.nom.replace(/\u0301/g, "").replace(/ё/g, "е");
  if (s.indecl) return "u4-indeclinables";
  if (n === "вода") return "u4-acento-movil";
  if (/[ая]$/.test(n)) return s.g === "m" ? "u4-acu-hombres-a" : /я$/.test(n) ? "u4-acu-ya" : "u4-acu-a";
  if (s.g === "f") return "u4-acu-fem-soft";
  if (s.g === "n") return "u4-neutro";
  return s.anim ? "u4-animacidad" : "u4-masc-cosa";
}
/* Verbos del modelo de чита́ть frente a los que cambian más */
function u4ReglaVerbo(v) {
  return /^(читать|понимать|изучать|слушать|покупать|делать|открывать|закрывать)$/.test(v.ac.replace(/\u0301/g, "")) ? "u4-verbos-chitat" : "u4-verbos-otros";
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

  /* ── Tipos nuevos (07/10/2026): entender la regla, ~20 % de la sesión ──
     porque · natural · par · oido · descubrir · diagnostico · cadena · desarmar.
     Todos llevan «regla» (el id de la sección de teoría que practican). */
  const sinAc = t => t.replace(/́/g, "");
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const RAZON = {
    "u4-nominativo": ["Es quien hace la acción", 2],
    "u4-acu-a": ["Termina en -а: pasa a -у", 4], "u4-acu-ya": ["Termina en -я: pasa a -ю", 4],
    "u4-acu-hombres-a": ["Termina en -а o -я, aunque sea un hombre", 4], "u4-acu-fem-soft": ["Es femenina en -ь: no cambia", 4],
    "u4-masc-cosa": ["Es masculino y nombra una cosa: no cambia", 5], "u4-animacidad": ["Es masculino y nombra a una persona o un animal", 5],
    "u4-neutro": ["Es neutro: no cambia", 6], "u4-indeclinables": ["Viene de otro idioma: no cambia nunca", 6]
  };
  /* Razones que también serían ciertas para una palabra de otra regla: nunca juntas */
  const CHOCAN = { "u4-acu-hombres-a": ["u4-acu-a", "u4-acu-ya", "u4-animacidad"], "u4-acu-a": ["u4-acu-hombres-a"], "u4-acu-ya": ["u4-acu-hombres-a"],
    "u4-indeclinables": ["u4-masc-cosa", "u4-neutro"], "u4-masc-cosa": ["u4-indeclinables"], "u4-neutro": ["u4-indeclinables"], "u4-animacidad": ["u4-acu-hombres-a"] };
  const razonDe = r => r === "u4-acento-movil" ? "u4-acu-a" : r;
  const opcionesPorque = (ok, mod, semilla) => {
    const otras = Object.keys(RAZON).filter(k => k !== ok && RAZON[k][1] <= mod && (CHOCAN[ok] || []).indexOf(k) < 0);
    return baraja([RAZON[ok][0]].concat(baraja(otras, semilla).slice(0, 2).map(k => RAZON[k][0])), semilla + 1);
  };
  /* Módulo: nunca antes de que se vean la palabra, el verbo y quien hace la acción */
  const modF = (f, m) => Math.max(m, f.o.desde, f.v.desde, f.suj.s ? f.suj.s.desde : 0);
  const base1 = frases.filter(f => f.r === 0 && !f.amp && f.o.desde <= 6);
  const base2 = frases.filter(f => f.r === 1 && !f.amp && f.o.desde <= 6);

  /* ¿Por qué? La forma de lo que recibe la acción (y, a veces, la de quien la hace) */
  base1.forEach((f, i) => {
    if (i % 4 === 3) return;
    const o = f.o, rg = razonDe(u4ReglaId(o)), mod = modF(f, Math.max(o.mod, RAZON[rg][1]));
    const igual = o.nom === o.acc;
    out.push({ id: "U4-porq-" + f.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: mod, regla: u4ReglaId(o), grupo: "F4-" + f.id, items: ["lex:" + o.id], oir: f.ru,
      pide: igual ? "¿Por qué " + o.acc + " queda igual?" : "¿Por qué " + o.acc + " y no " + o.nom + "?", grande: f.ru, audio: f.ru, audioManual: true,
      opciones: opcionesPorque(rg, mod, i + 51), correcta: RAZON[rg][0], explicacion: u4Regla(o) + " " + f.ru + " — " + f.es });
  });
  base1.filter(f => f.suj.s && f.suj.s.nom !== f.suj.s.acc).forEach((f, i) => {
    if (i % 2) return;
    const S = f.suj.s, mod = modF(f, Math.max(4, S.mod, f.o.mod)), malas = baraja([razonDe(u4ReglaId(S)), "u4-masc-cosa", "u4-neutro"].filter(k => RAZON[k][1] <= mod && k !== "u4-nominativo"), i + 61).slice(0, 2);
    out.push({ id: "U4-porqs-" + f.id, tipo: "porque", forma: "elegir", dificultad: 2, modulo: mod, regla: "u4-nominativo", grupo: "S4p-" + f.id, items: ["lex:" + S.id], oir: f.ru,
      pide: "¿Por qué " + S.nom + " y no " + S.acc + "?", grande: f.ru, audio: f.ru, audioManual: true,
      opciones: baraja([RAZON["u4-nominativo"][0]].concat(malas.map(k => RAZON[k][0])), i + 63), correcta: RAZON["u4-nominativo"][0],
      explicacion: "**" + S.nom + "** hace la acción: va en nominativo, la forma del diccionario. " + f.ru + " — " + f.es });
  });

  /* ¿Suena natural? Tres errores típicos, siempre en ruso */
  base2.forEach((f, i) => {
    const o = f.o, S = f.suj.s, k = i % 3;
    if (k === 0 && S && S.nom !== S.acc) {
      /* Quien hace la acción en acusativo */
      const mal = cap(S.acc) + " " + f.forma + " " + o.acc + ".", mod = modF(f, Math.max(4, S.mod, o.mod));
      out.push({ id: "U4-nat-s-" + f.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: mod, regla: "u4-nominativo", grupo: "F4-" + f.id, items: ["lex:" + S.id], oir: f.ru,
        pide: "¿Cuál suena natural?", opciones: baraja([f.ru, mal], i + 71), correcta: f.ru,
        explicacion: f.ru + " " + cap(S.nom) + " hace la acción: va en nominativo. Con " + S.acc + " la frase no tiene a nadie que la haga." });
    } else if (k === 1 && !S) {
      /* La forma del verbo no coincide con quien hace la acción */
      const p = f.suj.p, otra = f.v.f[p === 1 ? 2 : 1];
      if (otra === f.forma) return;
      const mal = f.suj.ru + " " + otra + " " + o.acc + ".";
      out.push({ id: "U4-nat-v-" + f.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: modF(f, Math.max(3, o.mod)), regla: u4ReglaVerbo(f.v), grupo: "F4-" + f.id, items: ["lex:" + f.v.id], oir: f.ru,
        pide: "¿Cuál suena natural?", opciones: baraja([f.ru, mal], i + 73), correcta: f.ru,
        explicacion: f.ru + " Con " + u4Min(f.suj.ru).replace(/^я$/, "{я}") + ", la forma es " + f.forma + "." });
    } else if (o.nom !== o.acc && (o.anim || o.persona || o.g === "m")) {
      /* El error del español: la persona o el animal sin acusativo */
      const mal = f.suj.ru + " " + f.forma + " " + o.nom + ".";
      out.push({ id: "U4-nat-o-" + f.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: modF(f, o.mod), regla: u4ReglaId(o), grupo: "F4-" + f.id, items: ["lex:" + o.id], oir: f.ru,
        pide: "¿Cuál suena natural?", opciones: baraja([f.ru, mal], i + 75), correcta: f.ru, explicacion: f.ru + " " + u4Regla(o) });
    }
  });
  /* Э́то + nominativo */
  Object.values(sust).filter(s => !s.amp && s.desde <= 6 && s.nom !== s.acc && !/ребенок/.test(sin(s.nom))).forEach((s, i) => {
    const bien = "Э́то " + s.nom + ".", mal = "Э́то " + s.acc + ".";
    out.push({ id: "U4-nat-eto-" + s.id, tipo: "natural", forma: "elegir", dificultad: 2, modulo: Math.max(4, s.mod, s.desde), regla: "u4-eto", grupo: "E4n-" + s.id, items: ["lex:" + s.id], oir: bien,
      pide: "¿Cuál suena natural?", opciones: baraja([bien, mal], i + 77), correcta: bien, explicacion: bien + " Э́то solo señala: lo que sigue va en nominativo." });
  });

  /* Par mínimo y oído: dos personas, quién espera (ve, busca…) a quién */
  const VERBOS_PAR = ["ждать", "ви́деть", "знать", "люби́ть", "слу́шать", "иска́ть"];
  const nPar = { n: 0 };
  VERBOS_PAR.forEach((vk, vi) => {
    const v = verb[sin(vk)]; if (!v) return;
    const pers = U4_COMBOS[vk].split(" ").map(x => sust[sin(x)]).filter(s => s && s.persona && !s.amp && s.nom !== s.acc && !/^(жена|муж|сын)$/.test(sin(s.nom)) && U4_SUJ_P.split(" ").map(sin).indexOf(sin(s.nom)) >= 0);
    const l = baraja(pers, vi + 81), duplas = [];
    for (let x = 0; x < l.length; x++) for (let y = x + 1; y < l.length; y++) duplas.push((x + y) % 2 ? [l[x], l[y]] : [l[y], l[x]]);
    baraja(duplas, vi + 85).slice(0, 7).forEach(([A, B]) => {
      const n = nPar.n++;
      const vEs = sin(vk) === "любить" ? "quiere" : v.esF[1];
      const ab = cap(A.nom) + " " + v.f[1] + " " + B.acc + ".", ba = cap(B.nom) + " " + v.f[1] + " " + A.acc + ".";
      const esAB = A.suj + " " + vEs + " " + B.a + ".";
      const mod = Math.max(A.mod === 5 || B.mod === 5 ? 5 : 4, A.desde, B.desde);
      const items = ["lex:" + A.id, "lex:" + B.id];
      const inv = n % 2 === 1;
      /* par: ¿cuál dice…? (la mitad, con el orden cambiado: manda la terminación) */
      const opAB = inv ? cap(B.acc) + " " + v.f[1] + " " + A.nom + "." : ab, opBA = inv ? cap(A.acc) + " " + v.f[1] + " " + B.nom + "." : ba;
      out.push({ id: "U4-par-" + n, tipo: "par", forma: "elegir", dificultad: inv ? 3 : 2, modulo: inv ? 5 : mod, regla: inv ? "u4-orden-libre" : u4ReglaId(B), grupo: "P4-" + n, items, oir: opAB,
        pide: "¿Cuál dice «" + esAB.replace(/\.$/, "") + "»?", opciones: baraja([opAB, opBA], n + 83), correcta: opAB,
        explicacion: opAB + " **" + cap(A.nom) + "** está en nominativo: es quien hace la acción. **" + B.acc + "** está en acusativo (" + B.nom + " → " + B.acc + ")." + (inv ? " El orden no importa: manda la terminación." : "") });
      /* oído: suena una de las dos frases; ¿qué forma de B sonó? */
      const sonoAB = n % 3 !== 0, audio = sonoAB ? ab : ba, ok = sonoAB ? B.acc : B.nom;
      out.push({ id: "U4-oido-" + n, tipo: "oido", forma: "elegir", dificultad: 2, modulo: mod, regla: u4ReglaId(B), grupo: "O4-" + n, items, oir: audio,
        pide: "Escuchá: ¿qué forma de «" + B.nom + "» sonó?", audio, opciones: [B.nom, B.acc], correcta: ok,
        explicacion: "Sonó: " + audio + " " + (sonoAB ? cap(B.acc) + " es acusativo: recibe la acción." : cap(B.nom) + " es nominativo: hace la acción.") });
    });
  });
  /* Oído con cosas: suena la palabra sola o la frase; nominativo o acusativo */
  base1.filter(f => f.o.nom !== f.o.acc && !f.o.persona).forEach((f, i) => {
    if (i % 3) return;
    const o = f.o, sola = i % 2 === 0, audio = sola ? "Э́то " + o.nom + "." : f.ru, ok = sola ? o.nom : o.acc;
    out.push({ id: "U4-oidoc-" + f.id, tipo: "oido", forma: "elegir", dificultad: 2, modulo: modF(f, o.mod), regla: u4ReglaId(o), grupo: "F4-" + f.id, items: ["lex:" + o.id], oir: audio,
      pide: "Escuchá: ¿qué forma sonó?", audio, opciones: [o.nom, o.acc], correcta: ok,
      explicacion: "Sonó: " + audio + " " + u4Regla(o) });
  });

  /* Descubrir: dos pares de la misma clase y uno para completar */
  const claseAcu = s => { const n = sin(s.nom); if (s.indecl || s.nom === s.acc) return null;
    if (/а$/.test(n)) return s.g === "m" ? "ma" : "a"; if (/я$/.test(n)) return s.g === "m" ? "mya" : "ya"; if (/ь$/.test(n)) return "mь"; return "mc"; };
  const porClase = {};
  Object.values(sust).filter(s => !s.amp && s.desde <= 6 && !/ребенок|вода/.test(sin(s.nom))).forEach(s => { const c = claseAcu(s); if (c) (porClase[c] = porClase[c] || []).push(s); });
  /* Los hombres en -а y en -я se descubren con las palabras femeninas de su misma letra */
  const modelo = { ma: "a", mya: "ya" };
  Object.keys(porClase).forEach(c => porClase[c].forEach((s, i) => {
    const fuente = (porClase[modelo[c] || c] || []).filter(x => x !== s && x.desde <= Math.max(s.mod, s.desde));
    const ej = baraja(fuente, i + 91).slice(0, 2);
    if (ej.length < 2) return;
    out.push({ id: "U4-desc-" + s.id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo: Math.max(s.mod, s.desde), regla: u4ReglaId(s), grupo: "D4-" + s.id, items: ["lex:" + s.id], oir: s.acc,
      pide: ej.map(x => x.nom + " → " + x.acc).join(" · ") + ". ¿Y " + s.nom + "?", opciones: baraja([sinAc(s.acc), sinAc(s.nom)], i + 93), correcta: sinAc(s.acc),
      explicacion: s.nom + " → " + s.acc + ": la misma regla que " + ej[0].nom + " → " + ej[0].acc + ". " + u4Regla(s) });
  }));

  /* Diagnosticar: qué falla y escribirla bien (módulo 7: armar frases) */
  const FALLAS = ["El caso de lo que recibe la acción", "El caso de quien hace la acción", "La forma del verbo"];
  base1.forEach((f, i) => {
    if (i % 3 !== 1) return;
    const o = f.o, S = f.suj.s, k = Math.floor(i / 3) % 3;
    let mal, ok, regla;
    if (k === 0 && o.nom !== o.acc) { mal = f.suj.ru + " " + f.forma + " " + o.nom + "."; ok = FALLAS[0]; regla = u4ReglaId(o); }
    else if (k === 1 && S && S.nom !== S.acc) { mal = cap(S.acc) + " " + f.forma + " " + o.acc + "."; ok = FALLAS[1]; regla = "u4-nominativo"; }
    else { const otra = f.v.f[f.suj.p === 1 ? 3 : 1]; if (otra === f.forma) return; mal = f.suj.ru + " " + otra + " " + o.acc + "."; ok = FALLAS[2]; regla = u4ReglaVerbo(f.v); }
    out.push({ id: "U4-diag-" + f.id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo: 7, regla, grupo: "F4-" + f.id, items: ["lex:" + o.id, "lex:" + f.v.id], oir: f.ru,
      pide: "Esta frase tiene un error. ¿Qué falla?", grande: mal, opciones: FALLAS.slice(), correcta: ok, esperadas: f.esperadas,
      explicacion: f.ru + " — " + f.es + " " + (ok === FALLAS[0] ? u4Regla(o) : ok === FALLAS[1] ? "**" + S.nom + "** hace la acción: nominativo." : "Con " + u4Min(f.suj.ru).replace(/^я$/, "{я}") + ", la forma es " + f.forma + ".") });
  });

  /* Cadena: cambiar quién lo hace, después lo que recibe, después otra persona */
  const nCad = { n: 0 };
  Object.keys(U4_COMBOS).forEach((vk, vi) => {
    const v = verb[sin(vk)]; if (!v) return;
    const objs = U4_COMBOS[vk].split(" ").map(x => sust[sin(x)]).filter(s => s && !s.amp && s.desde <= 6 && !/^(жена|муж|сын)$/.test(sin(s.nom)));
    const cambian = objs.filter(s => s.nom !== s.acc), quedan = objs.filter(s => s.nom === s.acc);
    const pers = U4_SUJ_P.split(" ").map(x => sust[sin(x)]).filter(s => s && s.desde <= 2);
    for (let j = 0; j < 3 && j < cambian.length; j++) {
      const o2 = cambian[(j * 2 + vi) % cambian.length], o1 = (quedan.length ? quedan : cambian.filter(x => x !== o2))[(j + vi) % Math.max(1, (quedan.length ? quedan : cambian.filter(x => x !== o2)).length)];
      if (!o1 || o1 === o2) continue;
      const P = pers.filter(x => x.id !== o2.id)[(vi * 5 + j * 3) % (pers.length - 1)];
      const n = nCad.n++;
      const s0 = "Я " + v.f[0] + " " + o1.acc + ".", s1 = "Мы " + v.f[2] + " " + o1.acc + ".", s2 = "Мы " + v.f[2] + " " + o2.acc + ".", s3 = cap(P.nom) + " " + v.f[1] + " " + o2.acc + ".";
      const sinMy = t => cap(t.replace(/^Мы /, ""));
      const conMi = /^Mi /.test(P.suj) ? [(P.g === "f" ? "Моя́ " : "Мой ") + P.nom + " " + v.f[1] + " " + o2.acc + "."] : [];
      out.push({ id: "U4-cad-" + n, tipo: "cadena", forma: "cadena", dificultad: 3, modulo: 7, regla: u4ReglaId(o2), grupo: "C4c-" + n, items: ["lex:" + o2.id, "lex:" + v.id], oir: s3,
        pide: "Cambiá la frase paso a paso.", base: s0,
        pasos: [
          { pide: "Ahora lo hacemos nosotros (мы).", esperadas: [s1, sinMy(s1)] },
          { pide: "Ahora lo que recibe la acción es " + o2.nom + ".", esperadas: [s2, sinMy(s2)] },
          { pide: "Ahora lo hace " + P.nom + ".", esperadas: [s3].concat(conMi) }],
        explicacion: s0 + " → " + s1 + " → " + s2 + " → " + s3 + " " + u4Regla(o2) });
    }
  });

  /* Desarmar: la misma frase, tres preguntas (la mitad con el orden cambiado) */
  const PREG = ["¿Quién hace la acción?", "¿Cuál es la acción?", "¿Qué recibe la acción?"];
  base1.filter(f => f.suj.s && f.o.nom !== f.o.acc).forEach((f, i) => {
    const S = f.suj.s, o = f.o, inv = i % 2 === 1;
    const palabras = inv ? [cap(o.acc), f.forma, S.nom] : [cap(S.nom), f.forma, o.acc];
    const ru = palabras.join(" ") + ".";
    const idx = inv ? [2, 1, 0] : [0, 1, 2];
    out.push({ id: "U4-desarm-" + f.id, tipo: "desarmar", forma: "desarmar", dificultad: inv ? 3 : 2, modulo: modF(f, inv ? Math.max(5, o.mod) : Math.max(2, o.mod)), regla: inv ? "u4-orden-libre" : "u4-caso",
      grupo: "F4-" + f.id, items: ["lex:" + S.id, "lex:" + o.id], oir: ru, audio: ru, audioManual: true,
      pide: "Respondé tocando las palabras de la frase.", palabras, preguntas: PREG.map((p, k) => ({ pide: p, correcta: idx[k] })),
      explicacion: ru + " — " + f.es + " **" + cap(S.nom) + "**: nominativo, hace la acción. **" + cap(o.acc) + "**: acusativo, la recibe." + (inv ? " El orden cambió, pero las terminaciones no." : "") });
  });

  /* «regla» en los tipos viejos donde es directo */
  const RV = { "U4-acu-": "obj", "U4-camb-": "obj", "U4-acel-": "obj", "U4-comp-": "obj", "U4-corr-": "obj", "U4-toc-o-": "obj", "U4-cons-": "u4-tres-pasos", "U4-ord-": "u4-tres-pasos",
    "U4-esru-": "u4-sin-articulos", "U4-caso-": "u4-nom-acu", "U4-casoa-": "u4-nom-acu", "U4-memaud-": "u4-nom-acu", "U4-toc1-": "u4-kto-chto", "U4-toc2-": "u4-nominativo",
    "U4-nom2-": "u4-nominativo", "U4-eto-": "u4-eto", "U4-conj-": "verbo", "U4-conjw-": "verbo", "U4-pers-": "verbo" };
  const porId = {}; Object.values(sust).forEach(s => { porId[s.id] = s; });
  const verbId = {}; Object.values(verb).forEach(v => { verbId[v.id] = v; });
  out.forEach(e => {
    if (e.regla) return;
    const pre = Object.keys(RV).find(p => e.id.indexOf(p) === 0); if (!pre) return;
    const t = RV[pre];
    if (t === "obj") { const s = (e.items || []).map(x => porId[String(x).slice(4)]).find(Boolean); if (s) e.regla = u4ReglaId(s); }
    else if (t === "verbo") { const v = verbId[e.id.split("-").slice(2, 4).join("-")]; if (v) e.regla = u4ReglaVerbo(v); }
    else e.regla = t;
  });
  out.filter(e => e.tipo === "quien-a-quien").forEach(e => { const B = porId[String(e.items[1]).slice(4)]; e.regla = /-1$/.test(e.id) || !B ? "u4-orden-libre" : u4ReglaId(B); });

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
  const frases = t => t.split(/[.!?\n]+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 2);
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
