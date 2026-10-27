/* ============================================================
   data-gramatica-es.js — Abecé: la guía de Gramática (GRAMATICA_ES).
   ------------------------------------------------------------
   El mismo formato que GRAMATICA_GUIA de Azbuka (data-gramatica.js),
   al revés de idioma: las explicaciones en ruso y los ejemplos en
   español. La lee gramatica.html (?guia=<id>).
   · capitulos: { id, grupo, titulo, sub (el nombre en español), desc, bloques }
   · bloques (t):
       texto  { texto }            párrafo; {…} se resalta
       lbl    { texto }            subtítulo
       nota   { texto }            recuadro con borde dorado
       tabla  { cols, filas }      tabla; {…} se resalta
       ejemplos { items: [[frase es, перевод, por qué, título?]] }
       par    { bien: [frase es, перевод], mal: [frase con error, por qué] }
       flujo  { pasos: [[pregunta, respuesta]] }   diagrama de pasos (el último, dorado)
       practica { items: [{ fr: "… ___ …", base, op: [...], ok, tr, por }] }
                                   (base no se muestra: el hueco va vacío)
   Reglas (claude/INSTRUCCIONES_MODULOS_ABECE.md §4): los ejemplos usan
   solo palabras del léxico español (o sus formas: FORMAS_ES, VERBOS_ES);
   español peninsular. Los textos en ruso son BORRADOR para Iván.
   Entregas: tanda 1 (27/10/2026) — capítulos 1 a 3; tanda 2 (27/10/2026) — 4 a 6; tanda 3 (27/10/2026) — 7 a 9; tanda 4 (27/10/2026) — 10 y 11. Guía completa.
   ============================================================ */
const GRAMATICA_ES = {
 titulo: "Как устроена испанская грамматика",
 intro: "Справочник для тех, кто говорит по-русски: что в испанском устроено иначе, как это работает и где легко ошибиться. В каждой главе — примеры с переводом и упражнения в конце.",
 capitulos: [

 /* ─── Существительное ─── */
 {
  id: "articulo", grupo: "Существительное",
  titulo: "Артикль", sub: "el artículo",
  desc: "Маленькое слово перед существительным: el, la, un, una. Когда какое и когда без него.",
  bloques: [
   { t: "texto", texto: "В русском языке артиклей нет, а в испанском перед существительным почти всегда стоит маленькое слово — артикль. Он показывает род и число ({el} libro, {la} casa, {los} libros, {las} casas) и то, знаем ли мы, о каком именно предмете речь." },
   { t: "tabla", cols: ["", "el, la…", "un, una…"], filas: [
    ["М. р. ед. ч.", "{el} libro", "{un} libro"],
    ["Ж. р. ед. ч.", "{la} casa", "{una} casa"],
    ["М. р. мн. ч.", "{los} libros", "{unos} libros"],
    ["Ж. р. мн. ч.", "{las} casas", "{unas} casas"]
   ] },
   { t: "texto", texto: "{el, la, los, las} — определённый артикль, {un, una, unos, unas} — неопределённый." },
   { t: "lbl", texto: "el или un?" },
   { t: "texto", texto: "{un}, {una} — когда предмет появляется впервые или это «какой-то, один из»: Tengo {un} perro. {el}, {la} — когда понятно, какой именно: {El} perro es negro. Это похоже на русские «один, какой-то» и «этот, тот самый», только в испанском их нельзя пропустить." },
   { t: "ejemplos", items: [
    ["Hay {un} gato en la calle.", "На улице кошка.", "Кошка появляется впервые — un."],
    ["{El} gato es negro.", "Кошка чёрная.", "Теперь мы знаем, о какой кошке речь — el."],
    ["¿Dónde está {el} baño?", "Где туалет?", "Туалет в доме один, все знают, какой именно, — el."]
   ] },
   { t: "lbl", texto: "Когда артикля нет" },
   { t: "texto", texto: "Без артикля говорят о каком-то количестве вообще, а не о конкретном предмете: Quiero café. Bebo agua. Тоже без артикля — профессия после ser: Soy médico." },
   { t: "ejemplos", items: [
    ["Quiero café.", "Я хочу кофе.", "Кофе вообще, сколько-нибудь — без артикля."],
    ["{El} café está frío.", "Кофе холодный.", "Конкретный кофе, тот, что в чашке, — el."],
    ["Mi padre es médico.", "Мой отец — врач.", "Профессия после ser — без артикля."]
   ] },
   { t: "lbl", texto: "Артикль там, где по-русски его не ждёшь" },
   { t: "par", bien: ["Me gusta {el} chocolate.", "Я люблю шоколад."], mal: ["Me gusta chocolate.", "Когда говорят о чём-то вообще (шоколад как таковой), особенно с gustar, артикль нужен."] },
   { t: "par", bien: ["{El} lunes voy al médico.", "В понедельник я иду к врачу."], mal: ["En lunes voy al médico.", "Дни недели — с артиклем и без предлога: el lunes — в понедельник, los lunes — по понедельникам."] },
   { t: "par", bien: ["Son {las} tres.", "Сейчас три часа."], mal: ["Son tres.", "Время — с артиклем la / las: es la una, son las tres."] },
   { t: "lbl", texto: "el agua: «el» перед женским родом" },
   { t: "nota", texto: "Перед словом женского рода, которое начинается с ударного a- или ha-, ставят el и un: {el} agua, {un} arma, {el} hambre. Слово остаётся женского рода: el agua {fría}, и во множественном числе — las aguas." },
   { t: "lbl", texto: "lo — средний род" },
   { t: "texto", texto: "{lo} не ставят перед существительными: оно превращает прилагательное в «то, что…»: {lo} bueno — хорошее, {lo} importante — главное, {lo} que quieres — то, что ты хочешь." },
   { t: "lbl", texto: "del и al" },
   { t: "texto", texto: "Предлоги de и a сливаются с артиклем el: de + el = {del}, a + el = {al}. La casa {del} padre, voy {al} cine. С la, los, las слияния нет: de la madre, a los niños." },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Tengo ___ hermana.", base: "…", op: ["una", "la", "el"], ok: "una", tr: "У меня есть сестра.", por: "Сестра появляется впервые — неопределённый артикль: una." },
    { fr: "___ niños juegan en el parque.", base: "…", op: ["Los", "Las", "El"], ok: "Los", tr: "Дети играют в парке.", por: "Известные нам дети, м. р. мн. ч. — los." },
    { fr: "___ agua está muy fría.", base: "…", op: ["El", "La", "Lo"], ok: "El", tr: "Вода очень холодная.", por: "agua — женского рода, но начинается с ударного a-: el agua." },
    { fr: "Voy ___ cine con mi amigo.", base: "…", op: ["al", "a el", "a la"], ok: "al", tr: "Я иду в кино с другом.", por: "a + el всегда сливаются: al." },
    { fr: "Me gusta ___ música.", base: "…", op: ["la", "el", "lo"], ok: "la", tr: "Мне нравится музыка.", por: "С gustar — с артиклем; música — ж. р.: la." }
   ] }
  ]
 },
 {
  id: "genero", grupo: "Существительное",
  titulo: "Род и число", sub: "género y número",
  desc: "Два рода вместо трёх, как узнать род и как образуется множественное число.",
  bloques: [
   { t: "texto", texto: "В испанском только два рода — мужской и женский. Среднего рода у существительных нет. Род лучше учить вместе со словом: запоминай слово сразу с артиклем — {el} libro, {la} mesa." },
   { t: "lbl", texto: "Как узнать род" },
   { t: "tabla", cols: ["Окончание", "Род", "Примеры"], filas: [
    ["-o", "обычно м. р.", "{el} libro, {el} vaso"],
    ["-a", "обычно ж. р.", "{la} casa, {la} mesa"],
    ["-ción, -sión, -dad, -tad", "ж. р.", "{la} canción, {la} ciudad, {la} libertad"],
    ["-or, -aje", "обычно м. р.", "{el} color, {el} viaje"],
    ["-e, согласная", "по-разному", "{el} coche, {la} noche, {el} mes, {la} sal"]
   ] },
   { t: "lbl", texto: "Исключения, которые надо знать" },
   { t: "texto", texto: "На -o, но женского рода: {la} mano, {la} foto, {la} moto, {la} radio. На -a, но мужского: {el} día, {el} mapa, {el} problema, {el} idioma, {el} sistema, {el} programa. Слова греческого происхождения на -ma почти все мужского рода." },
   { t: "lbl", texto: "Род не такой, как в русском" },
   { t: "tabla", cols: ["По-русски", "По-испански"], filas: [
    ["собака (ж. р.)", "{el} perro"],
    ["книга (ж. р.)", "{el} libro"],
    ["стол (м. р.)", "{la} mesa"],
    ["дом (м. р.)", "{la} casa"],
    ["молоко (ср. р.)", "{la} leche"],
    ["окно (ср. р.)", "{la} ventana"],
    ["море (ср. р.)", "{el} mar"]
   ] },
   { t: "nota", texto: "Не переноси род из русского: «собака» — женского рода, а {perro} — мужского. Смотри на испанское окончание и артикль." },
   { t: "lbl", texto: "Мужчина и женщина" },
   { t: "texto", texto: "У людей и многих животных две формы: {el niño} — {la niña}, {el profesor} — {la profesora}. У слов на -ista, -nte и некоторых других форма одна, а род виден по артиклю: {el / la} estudiante, {el / la} periodista, {el / la} joven." },
   { t: "lbl", texto: "Множественное число" },
   { t: "tabla", cols: ["Слово кончается на…", "Что добавляем", "Пример"], filas: [
    ["гласную", "-s", "libro → {libros}, casa → {casas}"],
    ["согласную", "-es", "ciudad → {ciudades}, profesor → {profesores}"],
    ["-z", "-z → -ces", "lápiz → {lápices}, vez → {veces}"],
    ["-s, ударение не на последнем слоге", "ничего", "el lunes → {los lunes}, la crisis → {las crisis}"]
   ] },
   { t: "nota", texto: "Ударение остаётся на том же слоге, поэтому знак ударения может исчезнуть или появиться: canción → {canciones}, examen → {exámenes}, joven → {jóvenes}." },
   { t: "lbl", texto: "Только в одном числе" },
   { t: "texto", texto: "Некоторые слова почти всегда во множественном числе: {las gafas} — очки, {las vacaciones} — отпуск, каникулы. Другие — только в единственном: {la sangre}, {la salud}." },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Tengo un problema con ___ mapa.", base: "…", op: ["el", "la"], ok: "el", tr: "У меня проблема с картой.", por: "mapa — мужского рода, хотя кончается на -a." },
    { fr: "Me duele ___ mano.", base: "…", op: ["la", "el"], ok: "la", tr: "У меня болит рука.", por: "mano — женского рода, хотя кончается на -o." },
    { fr: "Mi hijo tiene dos ___.", base: "lápiz", op: ["lápices", "lápizes", "lápiz"], ok: "lápices", tr: "У моего сына два карандаша.", por: "На -z: z меняется на c и добавляется -es." },
    { fr: "Me gustan tus ___.", base: "canción", op: ["canciones", "canciónes", "cancións"], ok: "canciones", tr: "Мне нравятся твои песни.", por: "На согласную — -es; ударение на том же слоге, знак больше не нужен." },
    { fr: "Los ___ no hay clase.", base: "viernes", op: ["viernes", "vierneses"], ok: "viernes", tr: "По пятницам занятий нет.", por: "На -s, ударение не на последнем слоге — слово не меняется, число видно по артиклю." }
   ] }
  ]
 },
 {
  id: "concordancia", grupo: "Существительное",
  titulo: "Согласование", sub: "la concordancia",
  desc: "Прилагательное, артикль и другие слова согласуются с существительным в роде и числе.",
  bloques: [
   { t: "texto", texto: "Прилагательное согласуется с существительным в роде и числе, как в русском. Но стоит оно обычно после существительного: una casa {blanca}, unos coches {rojos}." },
   { t: "tabla", cols: ["", "М. р.", "Ж. р."], filas: [
    ["Ед. ч.", "el vestido {negro}", "la camisa {negra}"],
    ["Мн. ч.", "los vestidos {negros}", "las camisas {negras}"]
   ] },
   { t: "lbl", texto: "Прилагательные с одной формой" },
   { t: "texto", texto: "На -e и на большинство согласных — одна форма для обоих родов: un chico {inteligente}, una chica {inteligente}; un libro {fácil}, una pregunta {fácil}. Меняется только число: {inteligentes}, {fáciles}." },
   { t: "nota", texto: "Прилагательные национальности на согласную имеют женскую форму: español → {española}, francés → {francesa}, alemán → {alemana}." },
   { t: "lbl", texto: "Где стоит прилагательное" },
   { t: "texto", texto: "Обычно после существительного: un coche rojo. Перед существительным ставят числительные, mucho, poco, otro, este, mi… и некоторые прилагательные. Некоторые из них перед существительным сокращаются: un {buen} amigo, un {mal} día, el {primer} día, una {gran} ciudad." },
   { t: "ejemplos", items: [
    ["Es un {buen} libro.", "Это хорошая книга.", "bueno перед существительным м. р. ед. ч. → buen."],
    ["Es una {buena} idea.", "Это хорошая идея.", "Перед женским родом не сокращается."],
    ["Es una {gran} ciudad.", "Это замечательный город.", "grande перед существительным ед. ч. любого рода → gran, и значение меняется: «великий, замечательный»."]
   ] },
   { t: "lbl", texto: "Мужской и женский вместе" },
   { t: "texto", texto: "Если существительные разного рода, прилагательное ставят в мужском роде мн. ч.: el padre y la madre son {altos}." },
   { t: "lbl", texto: "Согласуется всё" },
   { t: "texto", texto: "Артикль, указательные и притяжательные слова, числительные и прилагательные — всё согласуется с существительным: {estas} dos casas {blancas}, {mis} amigas {españolas}." },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["Mi madre es {alta}.", "Моя мама высокая."], mal: ["Mi madre es alto.", "Прилагательное согласуется с madre (ж. р.): alta."] },
   { t: "par", bien: ["Tengo {muchos} amigos.", "У меня много друзей."], mal: ["Tengo mucho amigos.", "mucho согласуется с существительным: muchos amigos, muchas amigas."] },
   { t: "par", bien: ["Es una casa {grande}.", "Это большой дом."], mal: ["Es una casa granda.", "grande — одна форма для обоих родов."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Las calles son muy ___.", base: "bonito", op: ["bonitas", "bonitos", "bonita"], ok: "bonitas", tr: "Улицы очень красивые.", por: "calles — ж. р. мн. ч.: bonitas." },
    { fr: "Mi hermano es ___.", base: "inteligente", op: ["inteligente", "inteligenta", "inteligentes"], ok: "inteligente", tr: "Мой брат умный.", por: "На -e — одна форма для обоих родов; брат один — ед. ч." },
    { fr: "Mi madre es ___.", base: "español", op: ["española", "español", "españole"], ok: "española", tr: "Моя мама — испанка.", por: "Национальность на согласную: в женском роде добавляется -a." },
    { fr: "Hoy es un ___ día.", base: "bueno", op: ["buen", "bueno", "buena"], ok: "buen", tr: "Сегодня хороший день.", por: "Перед существительным м. р. ед. ч. bueno сокращается: buen." },
    { fr: "El niño y la niña están ___.", base: "cansado", op: ["cansados", "cansadas", "cansado"], ok: "cansados", tr: "Мальчик и девочка устали.", por: "Мужской и женский род вместе — м. р. мн. ч." }
   ] }
  ]
 }

 ,

 /* ─── Ser, estar и hay ─── */
 {
  id: "ser-estar", grupo: "Ser, estar и hay",
  titulo: "Ser, estar и hay", sub: "ser, estar y hay",
  desc: "Три испанских «быть»: что это, где и в каком состоянии, есть ли вообще.",
  bloques: [
   { t: "texto", texto: "В русском в настоящем времени «быть» обычно пропускают: «Я врач», «Я дома». В испанском глагол нужен всегда, и их три: {ser}, {estar} и {hay}." },
   { t: "tabla", cols: ["", "ser", "estar"], filas: [
    ["yo", "{soy}", "{estoy}"],
    ["tú", "{eres}", "{estás}"],
    ["él, ella, usted", "{es}", "{está}"],
    ["nosotros", "{somos}", "{estamos}"],
    ["vosotros", "{sois}", "{estáis}"],
    ["ellos, ellas, ustedes", "{son}", "{están}"]
   ] },
   { t: "lbl", texto: "ser — что это, какой по сути" },
   { t: "texto", texto: "{ser} отвечает на вопросы «кто? что? какой по природе?»: профессия, происхождение, характер, материал, время и дата — и где проходит событие." },
   { t: "ejemplos", items: [
    ["{Soy} médico.", "Я врач.", "Профессия — ser."],
    ["{Somos} de Rusia.", "Мы из России.", "Происхождение — ser de."],
    ["Mi hermana {es} muy simpática.", "Моя сестра очень приятный человек.", "Характер — ser."],
    ["{Son} las cinco.", "Сейчас пять часов.", "Время — ser."],
    ["La fiesta {es} en mi casa.", "Праздник у меня дома.", "Где проходит событие — ser, хотя речь о месте."]
   ] },
   { t: "lbl", texto: "estar — где и в каком состоянии" },
   { t: "texto", texto: "{estar} отвечает на вопросы «где?» и «в каком состоянии сейчас?»: местонахождение, самочувствие, настроение, временное состояние, результат действия." },
   { t: "ejemplos", items: [
    ["{Estoy} en casa.", "Я дома.", "Где — estar."],
    ["Barcelona {está} en España.", "Барселона находится в Испании.", "Местонахождение, даже постоянное, — estar."],
    ["{Estoy} cansado.", "Я устал.", "Состояние сейчас — estar."],
    ["La sopa {está} fría.", "Суп холодный.", "Каким суп стал сейчас — estar."],
    ["La puerta {está} abierta.", "Дверь открыта.", "Результат действия — estar."]
   ] },
   { t: "lbl", texto: "Одно прилагательное — два смысла" },
   { t: "tabla", cols: ["ser", "estar"], filas: [
    ["{Es} aburrido. — Он скучный человек.", "{Está} aburrido. — Ему скучно."],
    ["{Es} listo. — Он умный.", "{Está} listo. — Он готов."],
    ["{Es} malo. — Он плохой.", "{Está} malo. — Он болен."],
    ["{Es} rico. — Он богатый.", "{Está} rico. — Это вкусно."]
   ] },
   { t: "lbl", texto: "hay — есть, имеется" },
   { t: "texto", texto: "{hay} — особая форма глагола haber: «есть, имеется». Говорит о том, что что-то вообще существует. Одна форма для ед. и мн. ч. Обычно стоит перед un, una, числом, mucho или существительным без артикля." },
   { t: "ejemplos", items: [
    ["{Hay} un banco cerca.", "Рядом есть банк.", "Есть ли вообще — hay + un."],
    ["{Hay} muchos turistas en verano.", "Летом много туристов.", "Во мн. ч. — тоже hay."],
    ["¿{Hay} leche?", "Молоко есть?", "Без артикля — неопределённое количество."]
   ] },
   { t: "lbl", texto: "Как выбрать" },
   { t: "flujo", pasos: [
    ["1 · Есть ли это вообще? Предмет новый: un, una, dos, mucho", "{hay}: Hay un banco en la calle."],
    ["2 · Где он или в каком состоянии? Предмет известный: el, mi, este", "{estar}: El banco está en la calle."],
    ["3 · Что это, кто, какой по сути? Профессия, происхождение, характер, время", "{ser}: Es un banco grande."]
   ] },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["{Hay} un perro en el jardín.", "В саду собака."], mal: ["Está un perro en el jardín.", "Собака появляется впервые (un) — значит hay."] },
   { t: "par", bien: ["Mi casa {está} cerca.", "Мой дом рядом."], mal: ["Mi casa es cerca.", "Где находится — estar, даже если дом всегда там."] },
   { t: "par", bien: ["{Estoy} bien, gracias.", "Хорошо, спасибо."], mal: ["Soy bien, gracias.", "Самочувствие — estar."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Mi padre ___ profesor.", base: "", op: ["es", "está", "hay"], ok: "es", tr: "Мой отец — учитель.", por: "Профессия — ser." },
    { fr: "Los niños ___ en el parque.", base: "", op: ["están", "son", "hay"], ok: "están", tr: "Дети в парке.", por: "Где находятся известные нам дети — estar." },
    { fr: "___ un supermercado en mi calle.", base: "", op: ["Hay", "Está", "Es"], ok: "Hay", tr: "На моей улице есть супермаркет.", por: "Есть ли вообще, с un — hay." },
    { fr: "Hoy ___ muy cansada.", base: "", op: ["estoy", "soy", "hay"], ok: "estoy", tr: "Сегодня я очень устала.", por: "Состояние сейчас — estar." },
    { fr: "La reunión ___ en la oficina.", base: "", op: ["es", "está", "hay"], ok: "es", tr: "Собрание проходит в офисе.", por: "Где проходит событие — ser." }
   ] }
  ]
 },

 /* ─── Местоимения ─── */
 {
  id: "pronombres", grupo: "Местоимения",
  titulo: "Местоимения по функциям", sub: "los pronombres personales",
  desc: "me, lo, le, mí, conmigo: самое похожее на падежи. Где ставить местоимение: me lo da, dámelo.",
  bloques: [
   { t: "texto", texto: "Это самая похожая на падежи часть испанского: у личного местоимения своя форма для каждой функции. Сравни: я — меня — мне — со мной и {yo} — {me} — {me} — {conmigo}." },
   { t: "tabla", cols: ["кто?", "кого? что?", "кому?", "после предлога"], filas: [
    ["yo", "{me}", "{me}", "{mí}"],
    ["tú", "{te}", "{te}", "{ti}"],
    ["él", "{lo}", "{le}", "él"],
    ["ella", "{la}", "{le}", "ella"],
    ["usted", "{lo, la}", "{le}", "usted"],
    ["nosotros", "{nos}", "{nos}", "nosotros"],
    ["vosotros", "{os}", "{os}", "vosotros"],
    ["ellos", "{los}", "{les}", "ellos"],
    ["ellas", "{las}", "{les}", "ellas"],
    ["ustedes", "{los, las}", "{les}", "ustedes"]
   ] },
   { t: "nota", texto: "Полная таблица — в разделе «Таблицы» → «Личные местоимения»." },
   { t: "lbl", texto: "Подлежащее обычно не нужно" },
   { t: "texto", texto: "Глагол и так показывает лицо: Hablo español — я говорю по-испански. yo, tú, él ставят для ясности или контраста: {Yo} trabajo, y {tú} no." },
   { t: "lbl", texto: "lo, la ≈ винительный падеж" },
   { t: "texto", texto: "Отвечают на вопрос «кого? что?» и заменяют прямое дополнение. Род — как у испанского слова: ¿Ves el coche? — Sí, {lo} veo. ¿Tienes la llave? — Sí, {la} tengo." },
   { t: "lbl", texto: "le, les ≈ дательный падеж" },
   { t: "texto", texto: "Отвечают на вопрос «кому?»: {Le} doy el libro a mi hermano. Часто le стоит вместе с самим дополнением (le… a mi hermano) — так и надо, это не ошибка." },
   { t: "lbl", texto: "Два местоимения подряд" },
   { t: "texto", texto: "Сначала «кому» (me, te, le…), потом «что» (lo, la…): Me {lo} da. Если встречаются le или les и lo, la, los, las, то le и les превращаются в {se}: le doy el libro → {se lo} doy (никогда не «le lo»)." },
   { t: "ejemplos", items: [
    ["Mi madre {me lo} da.", "Мама мне это даёт.", "me (кому) + lo (что)."],
    ["{Se lo} doy a mi hermano.", "Я даю это брату.", "le + lo → se lo."]
   ] },
   { t: "lbl", texto: "Где стоят местоимения" },
   { t: "tabla", cols: ["Форма глагола", "Где", "Пример"], filas: [
    ["Обычная форма", "перед глаголом", "{Me lo} da."],
    ["С отрицанием", "между no и глаголом", "No {me lo} da."],
    ["Императив (да)", "приклеиваются в конце", "Dá{melo}."],
    ["Инфинитив, герундий", "в конце или перед всей группой", "Voy a dár{telo}. = {Te lo} voy a dar."]
   ] },
   { t: "nota", texto: "Когда местоимение приклеивается, ударение остаётся на своём слоге, поэтому часто появляется знак ударения: da → {dámelo}, dar → {dártelo}, levanta → {levántate}." },
   { t: "lbl", texto: "После предлога" },
   { t: "texto", texto: "После предлогов — {mí} и {ti}, а остальные как подлежащее: para {mí}, de {ti}, con {él}. С con — особые формы: {conmigo}, {contigo}." },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["Este regalo es para {mí}.", "Этот подарок для меня."], mal: ["Este regalo es para me.", "После предлога — mí, а не me."] },
   { t: "par", bien: ["¿Vienes {conmigo}?", "Пойдёшь со мной?"], mal: ["¿Vienes con mí?", "С con — одно слово: conmigo, contigo."] },
   { t: "par", bien: ["{Se lo} digo.", "Я ему это говорю."], mal: ["Le lo digo.", "le + lo → se lo."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "¿El libro? ___ tengo en casa.", base: "", op: ["Lo", "Le", "La"], ok: "Lo", tr: "Книга? Она у меня дома.", por: "libro — м. р., «что?» — lo (хотя «книга» по-русски женского рода)." },
    { fr: "___ escribo a mi abuela todos los días.", base: "", op: ["Le", "La", "Lo"], ok: "Le", tr: "Я пишу бабушке каждый день.", por: "«кому?» — le." },
    { fr: "Esta pregunta es para ___.", base: "", op: ["ti", "te", "tú"], ok: "ti", tr: "Этот вопрос для тебя.", por: "После предлога — ti." },
    { fr: "¿Quieres venir ___?", base: "", op: ["conmigo", "con mí", "con me"], ok: "conmigo", tr: "Хочешь пойти со мной?", por: "con + mí → conmigo." },
    { fr: "Las flores son para mi madre. ___ doy mañana.", base: "", op: ["Se las", "Le las", "Las le"], ok: "Se las", tr: "Цветы для мамы. Я подарю их ей завтра.", por: "Сначала «кому», потом «что»; le + las → se las." }
   ] }
  ]
 },
 {
  id: "gustar", grupo: "Местоимения",
  titulo: "Gustar и похожие глаголы", sub: "gustar y verbos como gustar",
  desc: "Me gusta = мне нравится: кому — местоимение, что — подлежащее.",
  bloques: [
   { t: "texto", texto: "{gustar} устроен как русское «нравиться»: тот, кому нравится, — в дательном (me, te, le…), а то, что нравится, — подлежащее. Me gusta la música — мне нравится музыка. Поэтому глагол согласуется с тем, что нравится: одно — {gusta}, много — {gustan}." },
   { t: "tabla", cols: ["Кому", "Одно или действие", "Много"], filas: [
    ["(a mí)", "me {gusta}", "me {gustan}"],
    ["(a ti)", "te {gusta}", "te {gustan}"],
    ["(a él, a ella, a usted)", "le {gusta}", "le {gustan}"],
    ["(a nosotros)", "nos {gusta}", "nos {gustan}"],
    ["(a vosotros)", "os {gusta}", "os {gustan}"],
    ["(a ellos, a ellas, a ustedes)", "les {gusta}", "les {gustan}"]
   ] },
   { t: "ejemplos", items: [
    ["Me {gusta} leer.", "Я люблю читать.", "С инфинитивом — gusta."],
    ["Me {gustan} los gatos.", "Я люблю кошек.", "Нравятся кошки (мн. ч.) — gustan."],
    ["¿Te {gusta} esta ciudad?", "Тебе нравится этот город?", "ciudad — ед. ч.: gusta."]
   ] },
   { t: "lbl", texto: "a mí, a ella: для ясности и контраста" },
   { t: "texto", texto: "le может значить «ему», «ей» и «вам», поэтому часто добавляют a + кто: {A ella} le gusta el té. И для контраста: {A mí} me gusta, ¿y {a ti}?" },
   { t: "nota", texto: "me gusta — о вещах и занятиях. О людях «я тебя люблю» — {te quiero}." },
   { t: "lbl", texto: "Глаголы, устроенные так же" },
   { t: "tabla", cols: ["Глагол", "Значение", "Пример"], filas: [
    ["encantar", "очень нравиться", "Me {encanta} el chocolate."],
    ["interesar", "интересовать", "Me {interesa} la historia."],
    ["doler", "болеть", "Me {duele} la cabeza."],
    ["importar", "быть важным", "No me {importa}."],
    ["faltar", "не хватать", "Me {falta} tiempo."],
    ["parecer", "казаться", "Me {parece} bien."]
   ] },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["Me {gustan} las películas de terror.", "Я люблю фильмы ужасов."], mal: ["Me gusta las películas de terror.", "Глагол согласуется с тем, что нравится: películas — мн. ч., значит gustan."] },
   { t: "par", bien: ["{A mi hermano} le gusta el fútbol.", "Мой брат любит футбол."], mal: ["Mi hermano le gusta el fútbol.", "Тот, кому нравится, — с предлогом a: a mi hermano."] },
   { t: "par", bien: ["Me duele {la} cabeza.", "У меня болит голова."], mal: ["Me duele mi cabeza.", "С частями тела — артикль, а не mi: me duele la cabeza."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Me ___ mucho los perros.", base: "", op: ["gustan", "gusta", "gusto"], ok: "gustan", tr: "Я очень люблю собак.", por: "Нравятся собаки (мн. ч.) — gustan." },
    { fr: "A mi madre ___ gusta cocinar.", base: "", op: ["le", "la", "se"], ok: "le", tr: "Моя мама любит готовить.", por: "«кому?» — le." },
    { fr: "¿___ gusta el té?", base: "", op: ["Te", "Tú", "Ti"], ok: "Te", tr: "Тебе нравится чай?", por: "«кому?» — te." },
    { fr: "Nos ___ esta música.", base: "", op: ["encanta", "encantan", "encantamos"], ok: "encanta", tr: "Нам очень нравится эта музыка.", por: "música — ед. ч.: encanta." },
    { fr: "Me ___ los pies.", base: "", op: ["duelen", "duele", "dolen"], ok: "duelen", tr: "У меня болят ноги.", por: "Болят ноги (мн. ч.) — duelen; o → ue." }
   ] }
  ]
 }
 ,

 /* ─── Глагол ─── */
 {
  id: "tiempos", grupo: "Глагол",
  titulo: "Времена: когда какое", sub: "los usos de los tiempos",
  desc: "he hablado или hablé, hablé или hablaba, будущее, «бы» и первые шаги в subjuntivo.",
  bloques: [
   { t: "texto", texto: "В русском одно прошедшее время, а разницу передаёт вид глагола (делал / сделал). В испанском прошедших времён несколько. Таблицы форм — в разделе «Глаголы»; здесь — когда какое время нужно." },
   { t: "lbl", texto: "he hablado — прошлое, связанное с настоящим" },
   { t: "texto", texto: "Pretérito perfecto ({he hablado}) — для того, что произошло в период, который ещё не закончился: сегодня, на этой неделе, в этом году; и с ya, todavía no, nunca — «в жизни до сих пор». В Испании так говорят обо всём, что было сегодня." },
   { t: "ejemplos", items: [
    ["Hoy {he comido} mucho.", "Сегодня я много съел.", "Сегодня ещё не закончилось — he comido."],
    ["¿{Has estado} en España?", "Ты бывал в Испании?", "В жизни до сих пор — has estado."],
    ["Todavía no {he terminado}.", "Я ещё не закончил.", "todavía no — perfecto."]
   ] },
   { t: "lbl", texto: "hablé — законченное событие" },
   { t: "texto", texto: "Indefinido ({hablé}) — для события в законченном периоде: вчера, вчера вечером, в понедельник, на прошлой неделе, в 2020 году. Отвечает на вопрос «что случилось?»." },
   { t: "ejemplos", items: [
    ["Ayer {comí} en casa.", "Вчера я обедал дома.", "Вчера закончилось — indefinido."],
    ["El año pasado {fuimos} a Moscú.", "В прошлом году мы ездили в Москву.", "Законченный период — indefinido."]
   ] },
   { t: "tabla", cols: ["he hablado", "hablé"], filas: [
    ["hoy, esta semana, este año", "ayer, anoche, el lunes"],
    ["ya, todavía no, nunca", "la semana pasada, el año pasado"],
    ["¿Has estado…? — в жизни", "en 2020, hace dos años"]
   ] },
   { t: "lbl", texto: "hablé или hablaba — как русские виды" },
   { t: "texto", texto: "Indefinido ({hablé}) — событие, которое произошло и закончилось: похоже на совершенный вид («сделал»). Imperfecto ({hablaba}) — фон, описание, привычка в прошлом («как было», «что обычно делал»): похоже на несовершенный вид." },
   { t: "ejemplos", items: [
    ["Cuando {era} pequeño, {jugaba} al fútbol.", "Когда я был маленьким, я играл в футбол.", "Описание и привычка в прошлом — imperfecto."],
    ["{Leía} un libro cuando {sonó} el teléfono.", "Я читал книгу, когда зазвонил телефон.", "Фон — imperfecto (читал), событие — indefinido (зазвонил)."],
    ["Ayer {llovía} y {hacía} frío.", "Вчера шёл дождь и было холодно.", "Описание погоды — imperfecto."]
   ] },
   { t: "nota", texto: "Тест: по-русски это «делал, бывало»? Скорее всего, imperfecto. «Сделал»? — indefinido. Но вид и время совпадают не всегда: «Я два часа читал» — {leí} dos horas, потому что период закончился и ограничен." },
   { t: "lbl", texto: "Будущее" },
   { t: "texto", texto: "Планы и намерения — {ir a} + инфинитив: {Voy a} estudiar. Простое будущее ({estudiaré}) — для прогнозов и обещаний: Mañana {lloverá}. О договорённостях и расписании часто говорят настоящим временем: Mañana {trabajo}." },
   { t: "lbl", texto: "«бы»: condicional" },
   { t: "texto", texto: "Condicional передаёт русское «бы» и вежливость: Me {gustaría} — я бы хотел; ¿{Podrías} ayudarme? — не мог бы ты мне помочь?" },
   { t: "lbl", texto: "Subjuntivo: первые шаги" },
   { t: "texto", texto: "Subjuntivo — особое наклонение. Оно нужно после выражений желания, просьбы, чувства и сомнения, когда во второй части другое лицо: Quiero que {vengas} — я хочу, чтобы ты пришёл. По-русски это часто «чтобы» + прошедшее время. Ещё — после cuando о будущем ({Cuando llegues}, llámame) и после ojalá (Ojalá {haga} sol)." },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["Ayer {fui} al cine.", "Вчера я ходил в кино."], mal: ["Ayer he ido al cine.", "С ayer в Испании — indefinido."] },
   { t: "par", bien: ["Cuando {llegues}, llámame.", "Когда приедешь, позвони мне."], mal: ["Cuando llegarás, llámame.", "После cuando о будущем — subjuntivo, а не будущее время."] },
   { t: "par", bien: ["Quiero que {vengas}.", "Я хочу, чтобы ты пришёл."], mal: ["Quiero que vienes.", "Хочу, чтобы другой человек что-то сделал, — subjuntivo."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Ayer ___ con mi madre.", base: "", op: ["hablé", "he hablado", "hablaba"], ok: "hablé", tr: "Вчера я говорил с мамой.", por: "Вчера — законченный период: indefinido." },
    { fr: "Hoy ___ mucho.", base: "", op: ["he trabajado", "trabajé", "trabajaba"], ok: "he trabajado", tr: "Сегодня я много работал.", por: "Сегодня ещё не закончилось — perfecto." },
    { fr: "De pequeño ___ en el campo.", base: "", op: ["vivía", "viví", "he vivido"], ok: "vivía", tr: "В детстве я жил в деревне.", por: "Описание прошлого, «как было» — imperfecto." },
    { fr: "Ayer ___ mucho frío.", base: "", op: ["hacía", "ha hecho", "hará"], ok: "hacía", tr: "Вчера было очень холодно.", por: "Описание погоды в прошлом — imperfecto." },
    { fr: "Quiero que ___ conmigo.", base: "", op: ["vengas", "vienes", "vendrás"], ok: "vengas", tr: "Я хочу, чтобы ты пошёл со мной.", por: "querer que + другое лицо — subjuntivo." }
   ] }
  ]
 },

 /* ─── Предлоги ─── */
 {
  id: "preposiciones", grupo: "Предлоги и «se»",
  titulo: "Предлоги", sub: "las preposiciones",
  desc: "a (и «a» перед человеком), en, de, por и para, управление глаголов.",
  bloques: [
   { t: "texto", texto: "Падежей в испанском нет, и их работу делают предлоги. Главные: {a}, {en}, {de}, {con}, {por}, {para}. Не переводи их одним русским словом: у каждого несколько значений." },
   { t: "lbl", texto: "a" },
   { t: "tabla", cols: ["Значение", "Пример"], filas: [
    ["куда?", "Voy {a} la playa."],
    ["во сколько?", "{A} las ocho."],
    ["кому?", "Doy el libro {a} mi hermano."],
    ["кого? — если это человек", "Veo {a} mi madre."]
   ] },
   { t: "nota", texto: "«a» перед человеком: если прямое дополнение — конкретный человек, перед ним ставят a: Veo {a} mi madre, но Veo la casa. Это похоже на русский винительный падеж одушевлённых. Исключение — tener: Tengo dos hermanos." },
   { t: "lbl", texto: "en" },
   { t: "texto", texto: "{en} — где? (в, на): en casa, en la mesa, en España; транспорт: en coche, en tren; время года, месяц, год: en verano, en 2020. Но куда? — a: voy a casa." },
   { t: "lbl", texto: "de" },
   { t: "texto", texto: "{de} — откуда, чей, из чего, какой: Soy {de} Rusia, la casa {de} mi padre, una mesa {de} madera, la clase {de} español. Часто соответствует русскому родительному падежу." },
   { t: "lbl", texto: "para или por" },
   { t: "tabla", cols: ["para — вперёд, к цели", "por — причина, путь, обмен"], filas: [
    ["цель: Estudio {para} trabajar.", "причина: Lo hago {por} ti."],
    ["кому: Es {para} ti.", "через, по: Paseo {por} el parque."],
    ["срок: {Para} el lunes.", "часть дня: {por} la mañana"],
    ["куда: Salgo {para} Madrid.", "за что: Gracias {por} todo."]
   ] },
   { t: "nota", texto: "Подсказка: para — «для, чтобы, к (сроку)», смотрит вперёд, на цель. por — «из-за, ради, через, по, за», смотрит на причину или путь." },
   { t: "lbl", texto: "Управление: глагол выбирает предлог" },
   { t: "texto", texto: "Как и в русском (думать о, ждать чего-то), у испанских глаголов свои предлоги, и с русскими они не совпадают. Учи их вместе с глаголом: в словаре они указаны в «Управление»." },
   { t: "tabla", cols: ["По-испански", "По-русски"], filas: [
    ["pensar {en} algo", "думать о чём-то"],
    ["casarse {con} alguien", "жениться на ком-то"],
    ["depender {de} algo", "зависеть от чего-то"],
    ["soñar {con} algo", "мечтать о чём-то"],
    ["enamorarse {de} alguien", "влюбиться в кого-то"],
    ["esperar algo", "ждать чего-то (без предлога)"],
    ["buscar algo", "искать что-то (без предлога)"]
   ] },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["Veo {a} mi hermana.", "Я вижу сестру."], mal: ["Veo mi hermana.", "Конкретный человек — с a."] },
   { t: "par", bien: ["Pienso {en} ti.", "Я думаю о тебе."], mal: ["Pienso de ti.", "pensar en — «думать о»."] },
   { t: "par", bien: ["Gracias {por} tu ayuda.", "Спасибо за помощь."], mal: ["Gracias para tu ayuda.", "За что благодарят — por."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Mañana voy ___ la playa.", base: "", op: ["a", "en", "de"], ok: "a", tr: "Завтра я иду на пляж.", por: "Куда? — a." },
    { fr: "Mi hermano vive ___ Barcelona.", base: "", op: ["en", "a", "de"], ok: "en", tr: "Мой брат живёт в Барселоне.", por: "Где? — en." },
    { fr: "Llamo ___ mi madre todos los días.", base: "", op: ["a", "de", "en"], ok: "a", tr: "Я звоню маме каждый день.", por: "Конкретный человек — с a." },
    { fr: "Estudio español ___ trabajar en España.", base: "", op: ["para", "por", "de"], ok: "para", tr: "Я учу испанский, чтобы работать в Испании.", por: "Цель, «чтобы» — para." },
    { fr: "Gracias ___ todo.", base: "", op: ["por", "para", "de"], ok: "por", tr: "Спасибо за всё.", por: "За что благодарят — por." }
   ] }
  ]
 },
 {
  id: "se", grupo: "Предлоги и «se»",
  titulo: "Маленькое «se»", sub: "los usos de «se»",
  desc: "Себя, друг друга, se lo, «здесь говорят», «se me olvidó» и глаголы, которые меняют смысл.",
  bloques: [
   { t: "texto", texto: "Маленькое {se} делает много работы. Главное — понять, какое оно в этой фразе." },
   { t: "lbl", texto: "1. Возвратное — «себя», «-ся»" },
   { t: "texto", texto: "Действие направлено на себя: lavarse (мыться), levantarse (вставать): me levanto, te levantas, {se} levanta. В разделе «Глаголы» такие глаголы записаны с -se." },
   { t: "ejemplos", items: [
    ["Mi hijo {se} levanta a las siete.", "Мой сын встаёт в семь.", "levantarse — возвратный глагол."],
    ["{Me} lavo las manos.", "Я мою руки.", "С частями тела — артикль, а «чьи» показывает me."]
   ] },
   { t: "lbl", texto: "2. Взаимное — «друг друга»" },
   { t: "ejemplos", items: [
    ["Mis padres {se} quieren mucho.", "Мои родители очень любят друг друга.", "Друг друга — se."],
    ["{Nos} vemos mañana.", "Увидимся завтра.", "Мы друг друга — nos."]
   ] },
   { t: "lbl", texto: "3. Вместо le: se lo" },
   { t: "texto", texto: "Перед lo, la, los, las местоимение le превращается в se: {Se lo} doy (см. главу «Местоимения»)." },
   { t: "lbl", texto: "4. Безличное — «здесь говорят», «продаётся»" },
   { t: "texto", texto: "se + глагол в 3-м лице — никто конкретно: ¿Cómo {se dice} en español? — Как это сказать по-испански? Aquí {se habla} español. Если предмет во мн. ч., глагол тоже: En esta tienda {se venden} libros." },
   { t: "lbl", texto: "5. Случайно: se me olvidó" },
   { t: "texto", texto: "Когда что-то произошло «само», без нашей воли: {Se me olvidó} la llave — я забыл ключ (ключ «забылся мне»). {Se me rompió} el teléfono. {Se nos perdió} el perro. Глагол согласуется с предметом, а человек — в форме «кому» (me, te, le…). Похоже на русское «у меня сломался телефон»." },
   { t: "lbl", texto: "6. С se меняется смысл" },
   { t: "tabla", cols: ["Без se", "С se"], filas: [
    ["ir — идти, ехать", "{irse} — уходить, уезжать"],
    ["dormir — спать", "{dormirse} — засыпать"],
    ["llamar — звать, звонить", "{llamarse} — называться, зваться"],
    ["quedar — договориться о встрече", "{quedarse} — остаться"]
   ] },
   { t: "lbl", texto: "Типичные ошибки" },
   { t: "par", bien: ["¿Cómo {te} llamas?", "Как тебя зовут?"], mal: ["¿Cómo llamas?", "llamarse — возвратный: te llamas."] },
   { t: "par", bien: ["{Se me} olvidó el libro.", "Я забыл книгу."], mal: ["Me olvidó el libro.", "Либо se me olvidó el libro (книга «забылась»), либо olvidé el libro."] },
   { t: "par", bien: ["Mi hijo {se} levanta temprano.", "Мой сын встаёт рано."], mal: ["Mi hijo levanta temprano.", "«Вставать» — levantarse: se levanta. Без se levantar значит «поднимать что-то»."] },
   { t: "lbl", texto: "Проверь себя" },
   { t: "practica", items: [
    { fr: "Mis hijos ___ acuestan a las nueve.", base: "", op: ["se", "les", "los"], ok: "se", tr: "Мои дети ложатся спать в девять.", por: "acostarse — возвратный: se acuestan." },
    { fr: "¿Cómo ___ dice «gracias» en ruso?", base: "", op: ["se", "le", "lo"], ok: "se", tr: "Как сказать «gracias» по-русски?", por: "Безличное: se dice." },
    { fr: "___ me rompió el vaso.", base: "", op: ["Se", "Me", "Le"], ok: "Se", tr: "У меня разбился стакан.", por: "Случайно: se me rompió." },
    { fr: "¿Cómo ___ llamas?", base: "", op: ["te", "se", "tú"], ok: "te", tr: "Как тебя зовут?", por: "llamarse, 2-е лицо: te llamas." },
    { fr: "En esta tienda se ___ libros.", base: "", op: ["venden", "vende", "vendes"], ok: "venden", tr: "В этом магазине продаются книги.", por: "libros — мн. ч., значит venden." }
   ] }
  ]
 }
 ,

 /* ─── Практика ─── */
 {
  id: "trampas", grupo: "Практика",
  titulo: "Ловушки для русскоговорящих", sub: "las trampas",
  desc: "Ошибки, которые русскоговорящие делают чаще всего, — и как сказать правильно.",
  bloques: [
   { t: "texto", texto: "Эти ошибки появляются не от незнания, а от привычки думать по-русски. Если знать их заранее, их легко избежать. В каждой паре сверху — как правильно, внизу — типичная ошибка и почему." },
   { t: "lbl", texto: "Знакомство и о себе" },
   { t: "par", bien: ["{Tengo} veinte años.", "Мне двадцать лет."], mal: ["Soy veinte años.", "Возраст «имеют»: tengo veinte años (буквально «имею двадцать лет»)."] },
   { t: "par", bien: ["Es {un} libro.", "Это книга."], mal: ["Es libro.", "Перед существительным нужен артикль: es un libro."] },
   { t: "par", bien: ["{La} profesor{a} es muy simpática.", "Учительница очень приятная."], mal: ["La profesor es muy simpática.", "У женщины — женская форма: la profesora."] },
   { t: "par", bien: ["{Él} es mi amigo.", "Он мой друг."], mal: ["El es mi amigo.", "él (он) — со знаком ударения, el (артикль) — без. Так же tú (ты) и tu (твой)."] },
   { t: "lbl", texto: "Где и что есть" },
   { t: "par", bien: ["El banco {está} en la plaza.", "Банк на площади."], mal: ["El banco es en la plaza.", "Где находится — estar."] },
   { t: "par", bien: ["{Hay} un banco en la plaza.", "На площади есть банк."], mal: ["En la plaza está un banco.", "Новый предмет (un) — hay."] },
   { t: "par", bien: ["Es una casa {muy} grande.", "Это очень большой дом."], mal: ["Es una casa mucho grande.", "Перед прилагательным — muy; mucho — с существительным и глаголом: mucho tiempo, trabajo mucho."] },
   { t: "lbl", texto: "Повседневная жизнь" },
   { t: "par", bien: ["{Me} levanto a las siete.", "Я встаю в семь."], mal: ["Levanto a las siete.", "levantarse — возвратный глагол: me levanto."] },
   { t: "par", bien: ["{Es la} una.", "Сейчас час."], mal: ["Son las una.", "Один час — ед. ч.: es la una; дальше — son las dos."] },
   { t: "par", bien: ["{Me gusta} el fútbol.", "Мне нравится футбол."], mal: ["Yo gusto el fútbol.", "gustar — как «нравиться»: me gusta."] },
   { t: "lbl", texto: "Покупки и еда" },
   { t: "par", bien: ["¿La camiseta? {La} compro.", "Футболка? Беру."], mal: ["¿La camiseta? Compro.", "В испанском дополнение нельзя просто опустить, как в русском: его заменяет местоимение — la compro."] },
   { t: "par", bien: ["Quiero comprar{lo}.", "Я хочу это купить."], mal: ["Quiero comprar lo.", "После инфинитива местоимение пишется слитно: comprarlo."] },
   { t: "par", bien: ["Quiero {agua}.", "Я хочу воды."], mal: ["Quiero el agua.", "Вода вообще, сколько-нибудь — без артикля (el agua — та самая, конкретная)."] },
   { t: "lbl", texto: "Город и движение" },
   { t: "par", bien: ["Voy {a} la playa.", "Я иду на пляж."], mal: ["Voy en la playa.", "Куда? — a (как русское в / на + винительный). Где? — en."] },
   { t: "par", bien: ["Voy {en} metro.", "Я еду на метро."], mal: ["Voy con metro.", "Транспорт — en: en metro, en coche. Пешком — a pie."] },
   { t: "lbl", texto: "Письмо" },
   { t: "par", bien: ["Hablo {ruso} y {español}.", "Я говорю по-русски и по-испански."], mal: ["Hablo Ruso y Español.", "Языки, национальности, дни и месяцы пишутся с маленькой буквы."] },
   { t: "par", bien: ["{¿}Dónde vives?", "Где ты живёшь?"], mal: ["Dónde vives?", "В начале вопроса — перевёрнутый знак ¿, в начале восклицания — ¡."] }
  ]
 },
 {
  id: "practica", grupo: "Практика",
  titulo: "Смешанная практика", sub: "práctica mezclada",
  desc: "Упражнения по всем главам вперемешку.",
  bloques: [
   { t: "texto", texto: "Здесь собраны упражнения по всем главам. Если ошибёшься, прочитай объяснение и вернись к нужной главе." },
   { t: "practica", items: [
    { fr: "___ agua de esta fuente está muy fría.", base: "", op: ["El", "La", "Lo"], ok: "El", tr: "Вода в этом источнике очень холодная.", por: "agua — ж. р., но перед ударным a- — el (глава «Артикль»)." },
    { fr: "Necesito dos ___.", base: "", op: ["lápices", "lápizes", "lápiz"], ok: "lápices", tr: "Мне нужны два карандаша.", por: "-z → -ces (глава «Род и число»)." },
    { fr: "Tengo una amiga ___.", base: "", op: ["francesa", "francés", "franceses"], ok: "francesa", tr: "У меня есть подруга-француженка.", por: "Национальность в ж. р. — -a (глава «Согласование»)." },
    { fr: "Mis padres ___ en Barcelona.", base: "", op: ["están", "son", "hay"], ok: "están", tr: "Мои родители в Барселоне.", por: "Где — estar (глава «Ser, estar и hay»)." },
    { fr: "En mi calle ___ dos farmacias.", base: "", op: ["hay", "están", "son"], ok: "hay", tr: "На моей улице две аптеки.", por: "Есть ли вообще, с числом — hay." },
    { fr: "¿Las llaves? No ___ encuentro.", base: "", op: ["las", "les", "los"], ok: "las", tr: "Ключи? Не могу их найти.", por: "llaves — ж. р. мн. ч., «что?» — las (глава «Местоимения»)." },
    { fr: "A mis hijos les ___ los videojuegos.", base: "", op: ["encantan", "encanta", "encantamos"], ok: "encantan", tr: "Мои дети обожают видеоигры.", por: "Нравятся игры (мн. ч.) — encantan (глава «Gustar»)." },
    { fr: "El sábado pasado ___ a mis abuelos.", base: "", op: ["visité", "he visitado", "visitaba"], ok: "visité", tr: "В прошлую субботу я навестил бабушку и дедушку.", por: "Законченный период — indefinido (глава «Времена»)." },
    { fr: "Cuando era niño, ___ al fútbol todos los días.", base: "", op: ["jugaba", "jugué", "he jugado"], ok: "jugaba", tr: "В детстве я каждый день играл в футбол.", por: "Привычка в прошлом («каждый день») — imperfecto." },
    { fr: "Este regalo es ___ ti.", base: "", op: ["para", "por", "a"], ok: "para", tr: "Этот подарок для тебя.", por: "Кому предназначено — para (глава «Предлоги»)." },
    { fr: "Veo ___ mi hermano en el parque.", base: "", op: ["a", "de", "en"], ok: "a", tr: "Я вижу брата в парке.", por: "Конкретный человек — с a." },
    { fr: "¿A qué hora ___ acuestas?", base: "", op: ["te", "se", "tú"], ok: "te", tr: "Во сколько ты ложишься спать?", por: "acostarse, 2-е лицо: te acuestas (глава «se»)." }
   ] }
  ]
 }

 ]
};

/* Un capítulo por id, o null. */
function gramaticaEsGuia(id) {
  return GRAMATICA_ES.capitulos.find(function (c) { return c.id === id; }) || null;
}

window.GRAMATICA_ES = GRAMATICA_ES;
window.gramaticaEsGuia = gramaticaEsGuia;
