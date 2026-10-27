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
       practica { items: [{ fr: "… ___ …", base, op: [...], ok, tr, por }] }
                                   (base no se muestra: el hueco va vacío)
   Reglas (claude/INSTRUCCIONES_MODULOS_ABECE.md §4): los ejemplos usan
   solo palabras del léxico español (o sus formas: FORMAS_ES, VERBOS_ES);
   español peninsular. Los textos en ruso son BORRADOR para Iván.
   Entregas: tanda 1 (27/10/2026) — capítulos 1 a 3.
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

 ]
};

/* Un capítulo por id, o null. */
function gramaticaEsGuia(id) {
  return GRAMATICA_ES.capitulos.find(function (c) { return c.id === id; }) || null;
}

window.GRAMATICA_ES = GRAMATICA_ES;
window.gramaticaEsGuia = gramaticaEsGuia;
