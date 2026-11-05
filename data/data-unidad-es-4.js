/* ============================================================
   DATA-UNIDAD-ES-4.JS — Abecé · Урок 4: Мой день и привычки
   (Mi día y mis hábitos). Entrega 1, 04/11/2026: módulos 1–9.
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U4;
   propuesta aprobada por Manu: claude/PROPUESTA_U4_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-3.js (ver su cabecera):
     · ejemplos { es, ru, por }: es = la frase en español, ru = la traducción;
     · tablas [{ titulo, encabezados, filas }]: celdas { es, ru? } (AzTablaGrupos);
     · vocab: palabras (se pasan a IDs con es4Id);
     · ampliacion { titulo, intro, vocab }: opcional, como en Azbuka: sus
       palabras no cuentan en «Слова выучены» y sus ejercicios (ampliacion: true)
       quedan fuera de la práctica de la unidad y de la evaluación.
   Las formas de los verbos salen de data-verbos-es.js (es4Pres, es4Ger):
   no se escriben a mano. Ejercicios con reloj: reloj { h, m } (AzReloj, js/unidad.js).
   Módulos 10–13 (conversaciones, proyecto, evaluación y repaso acumulativo
   U1–U4): entrega 2.
   ============================================================ */

const ES4_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (на «ты»)"], ["ellos / ellas / ustedes", "они / вы"]];

/* Formas del presente y gerundio, leídas de data-verbos-es.js (reflexivos: pronombre + forma de la base) */
const ES4_SE = ["me", "te", "se", "nos", "os", "se"];
function es4Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  return v ? (v.base ? Object.assign({ se: true }, VERBOS_ES[v.base]) : v) : null;
}
function es4Pres(inf, p) {
  const v = es4Verbo(inf); if (!v || !v.pres || !v.pres[p]) return "";
  return (v.se ? ES4_SE[p] + " " : "") + v.pres[p];
}
function es4Ger(inf) { const v = es4Verbo(inf); return v ? v.ger : ""; }
const es4Tabla = inf => ES4_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es4Pres(inf, i) }]);
const ES4_ESTAR = ["estoy", "estás", "está", "estamos", "estáis", "están"];

const UNIDAD_ES_4 = {
  id: 4,
  titulo: "Мой день и привычки",
  tituloEs: "Mi día y mis hábitos",
  objetivo: "Рассказать, как проходит обычный день: во сколько ты встаёшь, что делаешь и когда; что происходит прямо сейчас; какая погода; что тебе нравится.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es4m1", n: 1, tipo: "leccion",
      titulo: "Hablo, como, vivo",
      resumen: "Настоящее время правильных глаголов: hablo, como, vivo.",
      intro: "Испанский глагол, как и русский, меняет окончание по лицам: «работаю — работаешь» — **trabajo — trabajas**. Все глаголы делятся на три группы по окончанию инфинитива: **-ar**, **-er**, **-ir**. Выучив окончания трёх групп, ты сможешь спрягать сотни правильных глаголов.",
      tablas: [
        { titulo: "Trabajar (-ar)", encabezados: ["Кто", "Форма"], filas: es4Tabla("trabajar") },
        { titulo: "Comer (-er)", encabezados: ["Кто", "Форма"], filas: es4Tabla("comer") },
        { titulo: "Vivir (-ir)", encabezados: ["Кто", "Форма"], filas: es4Tabla("vivir") }
      ],
      secciones: [
        {
          id: "es4-presente-ar",
          titulo: "Глаголы на -ar",
          texto: "Это самая большая группа. Убираем **-ar** и добавляем окончание: **-o**, **-as**, **-a**, **-amos**, **-áis**, **-an**.\ntrabaj-**ar** → trabaj**o**, trabaj**as**, trabaj**a**, trabaj**amos**, trabaj**áis**, trabaj**an**.\nТак же: **hablar**, **estudiar**, **escuchar**, **mirar**, **cocinar**.",
          ejemplos: [
            { es: "Trabajo en una oficina.", ru: "Я работаю в офисе.", por: "**yo** → **-o**: **trabajo**." },
            { es: "¿Estudias español?", ru: "Ты учишь испанский?", por: "**tú** → **-as**: **estudias**." },
            { es: "Mis padres hablan ruso y español.", ru: "Мои родители говорят по-русски и по-испански.", por: "**ellos** → **-an**: **hablan**." }
          ],
          chequeo: [
            { pide: "Nosotros ___ en un banco.", opciones: ["trabajamos", "trabajan", "trabajáis"], ok: "trabajamos", por: "**nosotros** → **-amos**." }
          ]
        },
        {
          id: "es4-presente-er-ir",
          titulo: "Глаголы на -er и -ir",
          texto: "У **-er**: **-o**, **-es**, **-e**, **-emos**, **-éis**, **-en** (com**o**, com**es**, com**e**…).\nУ **-ir** почти то же самое, отличаются только **nosotros** и **vosotros**: **-imos**, **-ís** (viv**imos**, viv**ís**).\nТак же: **leer**, **aprender**, **beber** (-er); **escribir**, **abrir** (-ir).",
          destacado: "-er и -ir отличаются только в двух формах: **comemos / vivimos**, **coméis / vivís**.",
          ejemplos: [
            { es: "Como en casa.", ru: "Я ем дома." },
            { es: "Vivimos en Madrid.", ru: "Мы живём в Мадриде.", por: "**-ir**, nosotros → **-imos**." },
            { es: "¿Leéis en español?", ru: "Вы читаете по-испански?", por: "**-er**, vosotros → **-éis**." }
          ],
          chequeo: [
            { pide: "Vosotros ___ en el centro.", opciones: ["vivís", "vivéis", "vivimos"], ok: "vivís", por: "**vivir** — глагол на **-ir**: vosotros → **-ís**." }
          ],
          mas: {
            titulo: "Как запомнить окончания",
            texto: "Посмотри на гласную: у **-ar** везде **a** (trabaj**a**s, trabaj**a**), у **-er** и **-ir** — **e** (com**e**s, viv**e**s). Только **yo** во всех трёх группах кончается на **-o**. А в **nosotros** и **vosotros** слышна гласная самого инфинитива: trabaj**a**mos, com**e**mos, viv**i**mos."
          }
        },
        {
          id: "es4-sin-sujeto",
          titulo: "Окончание показывает, кто",
          texto: "Окончание само говорит, кто делает действие, поэтому **yo**, **tú**, **nosotros** обычно не произносят: **Trabajo en un banco** — «Работаю в банке». Местоимение ставят, когда хотят подчеркнуть или противопоставить: **Yo trabajo y tú estudias**.",
          comparacion: "Так же, как в русском «Работаю в банке» без «я»: форма глагола уже всё сказала.",
          ejemplos: [
            { es: "¿Hablas inglés? —Sí, un poco.", ru: "— Ты говоришь по-английски? — Да, немного." },
            { es: "Yo cocino y él escucha música.", ru: "Я готовлю, а он слушает музыку.", por: "Местоимения — для противопоставления." }
          ]
        },
        {
          id: "es4-acento-presente",
          titulo: "Ударение и знак ударения",
          texto: "В формах **yo**, **tú**, **él**, **ellos** ударение падает на основу: **TRA**-ba-jo, **CO**-mes, **VI**-ven. В **nosotros** и **vosotros** — на окончание: tra-ba-**JA**-mos, co-**MÉIS**, vi-**VÍS**. У **vosotros** всегда пишется знак ударения: **trabajáis**, **coméis**, **vivís**.",
          errores: [
            { mal: "Vosotros trabajais mucho.", bien: "Vosotros trabajáis mucho.", por: "**-áis**, **-éis**, **-ís** — со знаком ударения." }
          ],
          ojo: "Не путай: **trabajo** — «я работаю» и «работа» (**el trabajo**). Какое это слово, видно по фразе."
        }
      ],
      frases: ["FRE-063"],
      vocab: ["trabajar", "estudiar", "hablar", "escuchar", "mirar", "cocinar", "comer", "beber", "leer", "aprender", "vivir", "escribir", "abrir"]
    },
    {
      id: "es4m2", n: 2, tipo: "leccion",
      titulo: "¿Qué hora es?",
      resumen: "Es la una, son las dos; y cuarto, y media, menos cuarto; ¿a qué hora?",
      intro: "Время по-испански говорят почти как в русской разговорной речи: «полтретьего», «без четверти пять». Нужны только **es** и **son**, артикль **la / las** и несколько слов: **y cuarto**, **y media**, **menos**.",
      tablas: [{ titulo: "Который час", encabezados: ["Испанский", "По-русски"], filas: [
        [{ es: "Es la una.", ru: "Час." }, { es: "Son las dos.", ru: "Два часа." }],
        [{ es: "Son las tres y cinco.", ru: "Пять минут четвёртого." }, { es: "Son las tres y cuarto.", ru: "Четверть четвёртого." }],
        [{ es: "Son las tres y media.", ru: "Полчетвёртого." }, { es: "Son las cuatro menos cuarto.", ru: "Без четверти четыре." }],
        [{ es: "Son las cuatro menos diez.", ru: "Без десяти четыре." }, { es: "Son las cuatro en punto.", ru: "Ровно четыре." }]] }],
      secciones: [
        {
          id: "es4-hora-es-son",
          titulo: "Es la una, son las dos",
          texto: "Спрашивают: **¿Qué hora es?** Отвечают с артиклем **la / las** (имеется в виду **la hora**, «час»):\n· один час — **es la una**;\n· все остальные — **son las…**: **son las dos**, **son las once**.",
          errores: [
            { mal: "Son las una.", bien: "Es la una.", por: "Один час — **es la una**: единственное число." },
            { mal: "Son dos.", bien: "Son las dos.", por: "Артикль **las** не пропускают." }
          ],
          chequeo: [
            { pide: "13:00", opciones: ["Es la una.", "Son las una.", "Es una."], ok: "Es la una.", por: "Один час — **es la una**." }
          ]
        },
        {
          id: "es4-hora-minutos",
          titulo: "Y cuarto, y media, menos cuarto",
          texto: "До половины минуты прибавляют с **y**: **las tres y cinco**, **y diez**, **y cuarto** (15), **y veinte**, **y media** (30).\nПосле половины считают от **следующего** часа с **menos**: 3:45 — **las cuatro menos cuarto**, 3:50 — **las cuatro menos diez**.\nРовно — **en punto**: **son las ocho en punto**.",
          comparacion: "**menos** — как русское «без»: «без четверти четыре» — **las cuatro menos cuarto**.",
          ejemplos: [
            { es: "Son las siete y media.", ru: "Полвосьмого (7:30).", por: "**y media** — к семи прибавляем полчаса." },
            { es: "Es la una menos cuarto.", ru: "Без четверти час (12:45).", por: "Считаем от часа: **la una**, поэтому **es**." }
          ],
          chequeo: [
            { pide: "8:45", opciones: ["Son las nueve menos cuarto.", "Son las ocho menos cuarto.", "Son las ocho y media."], ok: "Son las nueve menos cuarto.", por: "После половины — от следующего часа: **las nueve menos cuarto**." }
          ]
        },
        {
          id: "es4-a-que-hora",
          titulo: "¿A qué hora…? — A las ocho",
          texto: "«Во сколько?» — **¿A qué hora…?** Ответ с **a**: **a las ocho**, **a la una**, **a las diez y media**.\nЧасть дня добавляют с **de**: **a las ocho de la mañana**, **a las cinco de la tarde**, **a las once de la noche**. 12:00 — **a mediodía**, 0:00 — **a medianoche**.",
          ejemplos: [
            { es: "—¿A qué hora abre el museo? —A las diez.", ru: "— Во сколько открывается музей? — В десять." },
            { es: "Como a las dos de la tarde.", ru: "Я обедаю в два часа дня.", por: "В Испании обедают поздно: в 14–15 часов." }
          ],
          errores: [
            { mal: "En las ocho.", bien: "A las ocho.", por: "«В восемь» — **a las ocho**." }
          ],
          mas: {
            titulo: "Расписания и 24 часа",
            texto: "В расписаниях поездов, в кино и на работе часто говорят по 24-часовой системе: **a las quince treinta** (15:30). В разговоре обычно: **a las tres y media de la tarde**. «Утро» — до обеда (примерно до 13–14 часов), **la tarde** — после обеда и до темноты, **la noche** — с темноты."
          }
        },
        {
          id: "es4-temprano-tarde",
          titulo: "Temprano и tarde",
          texto: "**temprano** — «рано», **tarde** — «поздно»: **El museo abre temprano**, **Trabajo hasta tarde**. Не путай наречие **tarde** («поздно») и существительное **la tarde** («день, вечер»): **Es tarde** — «поздно»; **por la tarde** — «днём, после обеда».",
          ejemplos: [
            { es: "Es muy tarde. Son las doce.", ru: "Уже очень поздно. Двенадцать часов." }
          ]
        }
      ],
      frases: ["FRE-064", "FRE-065", "FRE-066"],
      vocab: ["hora", "minuto", "medio", "cuarto", "menos", "en punto", "mediodía", "medianoche", "temprano", "tarde", "por la mañana", "por la tarde", "por la noche"]
    },
    {
      id: "es4m3", n: 3, tipo: "leccion",
      titulo: "Mi rutina",
      resumen: "Me levanto, me ducho: глаголы с «se». Завтрак, обед и ужин.",
      intro: "Чтобы рассказать о своём дне, нужны глаголы с **se**: **levantarse** («вставать»), **ducharse** («принимать душ»). В словаре у них на конце **-se**, а в предложении это **se** превращается в **me**, **te**, **se**, **nos**, **os**, **se** и встаёт перед глаголом.",
      tablas: [{ titulo: "Levantarse — вставать", encabezados: ["Кто", "Форма"], filas: es4Tabla("levantarse") }],
      secciones: [
        {
          id: "es4-reflexivo",
          titulo: "Глаголы с se",
          texto: "У таких глаголов два изменения: окончание (как у обычного глагола) и местоимение перед ним — **me**, **te**, **se**, **nos**, **os**, **se**. Местоимение показывает, что действие направлено на себя: **Me levanto** — «я встаю», **Te duchas** — «ты принимаешь душ», **Se lava** — «он умывается».",
          comparacion: "Похоже на русское «-ся»: мыть — мыться, **lavar** — **lavarse**. Но совпадает не всегда: «вставать» по-испански тоже с **se** — **levantarse**.",
          ejemplos: [
            { es: "Me levanto a las siete.", ru: "Я встаю в семь.", por: "**yo** → **me** **levanto**." },
            { es: "¿A qué hora te duchas?", ru: "Во сколько ты принимаешь душ?", por: "**tú** → **te** **duchas**." },
            { es: "Pablo se afeita por la mañana.", ru: "Пабло бреется утром.", por: "**él** → **se** **afeita**." }
          ],
          errores: [
            { mal: "Levanto a las siete.", bien: "Me levanto a las siete.", por: "Без **me** получается «поднимаю (что-то) в семь»." }
          ],
          chequeo: [
            { pide: "Nosotros ___ levantamos temprano.", opciones: ["nos", "se", "me"], ok: "nos", por: "**nosotros** → **nos**." }
          ]
        },
        {
          id: "es4-reflexivo-lugar",
          titulo: "Где стоит местоимение",
          texto: "Местоимение стоит **перед** глаголом и пишется отдельно: **me ducho**, **nos levantamos**. С **no** — сначала **no**, потом местоимение: **No me levanto temprano**. В инфинитиве **se** пишется слитно: **levantarse**, **ducharse**.",
          errores: [
            { mal: "Yo levanto me a las siete.", bien: "Yo me levanto a las siete.", por: "Местоимение — перед глаголом." },
            { mal: "Me no ducho por la noche.", bien: "No me ducho por la noche.", por: "Сначала **no**, потом **me**." }
          ]
        },
        {
          id: "es4-con-sin-se",
          titulo: "Lavar и lavarse",
          texto: "Многие глаголы бывают и с **se**, и без него. Без **se** действие направлено на кого-то или что-то другое, с **se** — на себя:\n· **Lavo la ropa** — «стираю одежду»; **Me lavo** — «умываюсь»;\n· **Levanto la mano** — «поднимаю руку»; **Me levanto** — «встаю».",
          ejemplos: [
            { es: "Me lavo los dientes.", ru: "Я чищу зубы.", por: "Дословно «мою себе зубы»: «мои» не говорят — **los dientes**." }
          ],
          ojo: "Части тела и одежду с **se** называют с артиклем, а не с **mi**: **me lavo las manos**, а не «me lavo mis manos»."
        },
        {
          id: "es4-comidas",
          titulo: "Desayunar, comer, cenar",
          texto: "Три главных приёма пищи и глаголы к ним:\n· **el desayuno** — завтрак, **desayunar** — завтракать;\n· **la comida** — обед (и вообще еда), **comer** — обедать (и вообще есть);\n· **la cena** — ужин, **cenar** — ужинать.\nВ Испании обедают поздно, около 14–15 часов, а ужинают около 21–22.",
          ejemplos: [
            { es: "Desayuno un café y pan.", ru: "На завтрак я пью кофе и ем хлеб.", por: "**desayunar** + что: «завтракать чем-то»." },
            { es: "Comemos a las dos y media.", ru: "Мы обедаем в полтретьего." }
          ],
          mas: {
            titulo: "Tomar un café",
            texto: "Для кофе, чая и напитков часто говорят **tomar**: **Tomo un café** — «выпиваю кофе». В кафе так и говорят: **Tomo un té**."
          }
        },
        {
          id: "es4-primero-despues",
          titulo: "Primero, después, luego",
          texto: "Чтобы рассказать по порядку: **primero** — «сначала», **después** и **luego** — «потом, затем». С **de** и инфинитивом: **después de desayunar** — «после завтрака», **antes de cenar** — «перед ужином».",
          ejemplos: [
            { es: "Primero me ducho y después desayuno.", ru: "Сначала я принимаю душ, а потом завтракаю." },
            { es: "Después de comer descanso un poco.", ru: "После обеда я немного отдыхаю.", por: "После **de** — инфинитив: **comer**." }
          ]
        }
      ],
      frases: ["FRE-067", "FRE-068"],
      vocab: ["levantarse", "ducharse", "lavarse", "afeitarse", "levantar", "lavar", "desayunar", "comer", "cenar", "tomar", "llegar", "terminar", "descansar", "desayuno", "comida", "cena", "diente", "pelo", "ropa", "primero", "después", "luego", "antes"],
      ampliacion: {
        titulo: "Ещё для твоего дня",
        intro: "Ещё несколько слов для рассказа о дне. Они не входят в проверку урока. **La merienda** — лёгкая еда около шести вечера, это очень по-испански.",
        vocab: ["peinarse", "maquillarse", "limpiar", "ayudar", "merienda"]
      }
    },
    {
      id: "es4m4", n: 4, tipo: "leccion",
      titulo: "Empiezo, vuelvo, pido",
      resumen: "e → ie, o → ue, e → i: глаголы, у которых меняется корень.",
      intro: "У части глаголов окончания обычные, а меняется гласная корня: **empezar** → **empiezo**, **volver** → **vuelvo**, **pedir** → **pido**. Это очень частые глаголы, поэтому их стоит выучить сразу.",
      tablas: [
        { titulo: "Empezar (e → ie)", encabezados: ["Кто", "Форма"], filas: es4Tabla("empezar") },
        { titulo: "Volver (o → ue)", encabezados: ["Кто", "Форма"], filas: es4Tabla("volver") },
        { titulo: "Pedir (e → i)", encabezados: ["Кто", "Форма"], filas: es4Tabla("pedir") }
      ],
      secciones: [
        {
          id: "es4-bota",
          titulo: "Меняется только под ударением",
          texto: "Гласная корня меняется там, где на неё падает ударение: в **yo**, **tú**, **él**, **ellos**. В **nosotros** и **vosotros** ударение уходит на окончание — и корень остаётся как в инфинитиве:\nv**ue**lvo, v**ue**lves, v**ue**lve, **volvemos**, **volvéis**, v**ue**lven.",
          destacado: "Меняется: yo, tú, él, ellos. Не меняется: **nosotros**, **vosotros**.",
          errores: [
            { mal: "Nosotros duermimos ocho horas.", bien: "Nosotros dormimos ocho horas.", por: "В **nosotros** корень не меняется: **dormimos**." }
          ],
          chequeo: [
            { pide: "Vosotros ___ a casa a las seis. (volver)", opciones: ["volvéis", "vuelvéis", "vuelven"], ok: "volvéis", por: "**vosotros** — корень без изменений." }
          ],
          mas: {
            titulo: "«Ботинок»",
            texto: "Если в таблице обвести формы, где корень меняется (yo, tú, él — слева сверху вниз, и ellos — внизу), получится фигура, похожая на ботинок. Поэтому испанские учителя называют такие глаголы «verbos de bota». **nosotros** и **vosotros** остаются снаружи."
          }
        },
        {
          id: "es4-e-ie",
          titulo: "e → ie",
          texto: "**empezar** (empiezo), **cerrar** (cierro), **pensar** (pienso), **entender** (entiendo), **despertarse** (me despierto).",
          ejemplos: [
            { es: "La clase empieza a las nueve.", ru: "Урок начинается в девять." },
            { es: "Me despierto a las siete.", ru: "Я просыпаюсь в семь.", por: "**despierto**: e → **ie**, плюс **me**." },
            { es: "Perdón, no entiendo.", ru: "Извините, я не понимаю." }
          ]
        },
        {
          id: "es4-o-ue",
          titulo: "o → ue",
          texto: "**dormir** (duermo), **volver** (vuelvo), **acostarse** (me acuesto), **almorzar** (almuerzo). У **jugar** меняется **u**: **juego**, **juegas**, **jugamos**.",
          ejemplos: [
            { es: "Duermo ocho horas.", ru: "Я сплю восемь часов." },
            { es: "Me acuesto a las once.", ru: "Я ложусь спать в одиннадцать." },
            { es: "Los niños juegan en el parque.", ru: "Дети играют в парке." }
          ],
          ojo: "**almorzar** в одних местах Испании значит «обедать», в других — «перекусывать днём». **comer** понятно везде."
        },
        {
          id: "es4-e-i",
          titulo: "e → i",
          texto: "Только у глаголов на **-ir**: **pedir** (pido) — «просить, заказывать», **repetir** (repito), **vestirse** (me visto) — «одеваться».",
          ejemplos: [
            { es: "Pido un café, por favor.", ru: "Я закажу кофе, пожалуйста.", por: "В кафе «заказывать» — **pedir**." },
            { es: "Javier repite la palabra.", ru: "Хавьер повторяет слово." }
          ],
          chequeo: [
            { pide: "Yo ___ un té. (pedir)", opciones: ["pido", "pide", "pedimos"], ok: "pido", por: "e → **i**: **pido**." }
          ]
        }
      ],
      frases: ["FRE-069"],
      vocab: ["empezar", "cerrar", "pensar", "entender", "despertarse", "dormir", "volver", "acostarse", "almorzar", "jugar", "pedir", "repetir", "vestirse"],
      dialogos: ["DLE-015"]
    },
    {
      id: "es4m5", n: 5, tipo: "leccion",
      titulo: "Hago, salgo, voy",
      resumen: "Неправильная форма yo: hago, salgo, pongo, tengo, vengo. Глагол ir.",
      intro: "У нескольких очень частых глаголов неправильная только форма **yo**: **hacer** → **hago**, **salir** → **salgo**. Остальные формы обычные. А глагол **ir** («идти, ехать») неправильный весь — его учат наизусть.",
      tablas: [
        { titulo: "Неправильная форма yo", encabezados: ["Глагол", "yo"], filas: [
          [{ es: "hacer", ru: "делать" }, { es: "hago" }], [{ es: "salir", ru: "выходить" }, { es: "salgo" }], [{ es: "poner", ru: "класть, ставить" }, { es: "pongo" }],
          [{ es: "tener", ru: "иметь" }, { es: "tengo" }], [{ es: "venir", ru: "приходить" }, { es: "vengo" }], [{ es: "ver", ru: "видеть, смотреть" }, { es: "veo" }]] },
        { titulo: "Ir — идти, ехать", encabezados: ["Кто", "Форма"], filas: es4Tabla("ir") },
        { titulo: "Venir — приходить", encabezados: ["Кто", "Форма"], filas: es4Tabla("venir") }
      ],
      secciones: [
        {
          id: "es4-yo-go",
          titulo: "Hago, salgo, pongo",
          texto: "У **hacer**, **salir**, **poner** неправильная только форма **yo** — с **-go**: **hago**, **salgo**, **pongo**. Дальше всё по правилам: haces, hace…; sales, sale…; pones, pone…\n**tener** и **venir** тоже дают **tengo**, **vengo**, а в tú / él / ellos ещё и **e → ie**: **tienes**, **vienes**. **ver** → **veo**.",
          ejemplos: [
            { es: "Salgo de casa a las ocho.", ru: "Я выхожу из дома в восемь.", por: "**salgo** — только yo с **-go**." },
            { es: "¿Qué haces? —Hago la cena.", ru: "— Что делаешь? — Готовлю ужин." },
            { es: "Pongo la televisión.", ru: "Я включаю телевизор.", por: "**poner** — «класть, ставить» и «включать»." }
          ],
          errores: [
            { mal: "Yo salo a las ocho.", bien: "Yo salgo a las ocho.", por: "**salir** → **salgo**." }
          ],
          chequeo: [
            { pide: "Yo ___ la cena. (hacer)", opciones: ["hago", "hace", "haco"], ok: "hago", por: "**hacer** → **hago**." }
          ]
        },
        {
          id: "es4-ir",
          titulo: "Ir: voy, vas, va…",
          texto: "**ir** — «идти» и «ехать»: в испанском это одно слово. Формы: **voy**, **vas**, **va**, **vamos**, **vais**, **van**. Куда — с **a**: **voy a casa**, **voy a clase**, **voy al trabajo** (a + el = **al**). Подробно о том, как говорить «куда» и «где», — в одном из следующих уроков.",
          comparacion: "В русском «идти» и «ехать» — разные глаголы. В испанском — один **ir**: и пешком, и на машине.",
          ejemplos: [
            { es: "Voy al trabajo a las nueve.", ru: "Я иду (еду) на работу в девять." },
            { es: "—¿Vas a casa? —Sí, voy a casa.", ru: "— Ты домой? — Да, домой." }
          ]
        },
        {
          id: "es4-ir-venir",
          titulo: "Ir или venir",
          texto: "**ir** — «туда», от говорящего; **venir** — «сюда», к говорящему: **Voy a tu casa** — «я иду к тебе»; **¿Vienes a mi casa?** — «Придёшь ко мне?»",
          ejemplos: [
            { es: "Mi hermano viene mañana.", ru: "Мой брат приезжает завтра.", por: "К нам, сюда — **viene**." }
          ],
          errores: [
            { mal: "—¿Vienes a mi casa? —Sí, vengo.", bien: "—¿Vienes a mi casa? —Sí, voy.", por: "Отвечая «приду», испанец говорит **voy**: он идёт туда, к собеседнику." }
          ]
        }
      ],
      frases: ["FRE-070"],
      vocab: ["hacer", "salir", "poner", "tener", "venir", "ver", "ir"]
    },
    {
      id: "es4m6", n: 6, tipo: "leccion",
      titulo: "El calendario y el tiempo",
      resumen: "Дни недели, месяцы, времена года. ¿Qué tiempo hace?",
      intro: "Дни недели, месяцы и времена года — и погода, о которой в Испании говорят почти так же часто, как в России. Главное слово о погоде — **hace**: **hace calor**, **hace frío**.",
      tablas: [
        { titulo: "Дни недели", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "lunes", ru: "понедельник" }, { es: "martes", ru: "вторник" }], [{ es: "miércoles", ru: "среда" }, { es: "jueves", ru: "четверг" }],
          [{ es: "viernes", ru: "пятница" }, { es: "sábado", ru: "суббота" }], [{ es: "domingo", ru: "воскресенье" }, { es: "el fin de semana", ru: "выходные" }],
          [{ es: "la semana", ru: "неделя" }, { es: "el mes", ru: "месяц" }]] },
        { titulo: "Месяцы", encabezados: ["1–4", "5–8", "9–12"], filas: [
          [{ es: "enero", ru: "январь" }, { es: "mayo", ru: "май" }, { es: "septiembre", ru: "сентябрь" }],
          [{ es: "febrero", ru: "февраль" }, { es: "junio", ru: "июнь" }, { es: "octubre", ru: "октябрь" }],
          [{ es: "marzo", ru: "март" }, { es: "julio", ru: "июль" }, { es: "noviembre", ru: "ноябрь" }],
          [{ es: "abril", ru: "апрель" }, { es: "agosto", ru: "август" }, { es: "diciembre", ru: "декабрь" }]] },
        { titulo: "Времена года", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la primavera", ru: "весна" }, { es: "el verano", ru: "лето" }], [{ es: "el otoño", ru: "осень" }, { es: "el invierno", ru: "зима" }]] },
        { titulo: "¿Qué tiempo hace?", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Hace calor.", ru: "Жарко." }, { es: "Hace frío.", ru: "Холодно." }],
          [{ es: "Hace sol.", ru: "Солнечно." }, { es: "Hace viento.", ru: "Ветрено." }],
          [{ es: "Llueve.", ru: "Идёт дождь." }, { es: "Nieva.", ru: "Идёт снег." }],
          [{ es: "Está nublado.", ru: "Пасмурно." }, { es: "Hace buen tiempo.", ru: "Хорошая погода." }]] }
      ],
      secciones: [
        {
          id: "es4-dias",
          titulo: "Дни недели",
          texto: "Дни недели и месяцы пишутся с маленькой буквы: **lunes**, **enero**. «В понедельник» — с артиклем **el**, без предлога: **el lunes**. «По понедельникам» (каждую неделю) — **los lunes**. А «сегодня понедельник» — без артикля: **Hoy es lunes**.",
          ejemplos: [
            { es: "El sábado voy a la playa.", ru: "В субботу (в эту) я иду на пляж.", por: "Одна суббота — **el** **sábado**." },
            { es: "Los domingos descanso.", ru: "По воскресеньям я отдыхаю.", por: "Каждое воскресенье — **los** **domingos**." }
          ],
          errores: [
            { mal: "En lunes trabajo.", bien: "El lunes trabajo.", por: "«В понедельник» — **el lunes**, без **en**." }
          ],
          chequeo: [
            { pide: "«По субботам я работаю»", opciones: ["Los sábados trabajo.", "En sábados trabajo.", "El sábados trabajo."], ok: "Los sábados trabajo.", por: "Регулярно — **los sábados**." }
          ],
          mas: {
            titulo: "Lunes, los lunes",
            texto: "У дней на **-s** (lunes, martes, miércoles, jueves, viernes) множественное число такое же: **el lunes — los lunes**. У **sábado** и **domingo** — с **-s**: **los sábados**, **los domingos**. **el fin de semana** — «выходные», во множественном **los fines de semana**."
          }
        },
        {
          id: "es4-meses",
          titulo: "Месяцы и времена года",
          texto: "«В январе», «летом» — с **en**: **en enero**, **en verano**, **en invierno**. Времена года: **la primavera**, **el verano**, **el otoño**, **el invierno**.",
          ejemplos: [
            { es: "En agosto hace mucho calor.", ru: "В августе очень жарко." },
            { es: "En invierno nieva en Moscú.", ru: "Зимой в Москве идёт снег." }
          ]
        },
        {
          id: "es4-tiempo",
          titulo: "¿Qué tiempo hace?",
          texto: "О погоде говорят с **hace** (от **hacer**): **hace calor**, **hace frío**, **hace sol**, **hace viento**, **hace buen tiempo**, **hace mal tiempo**. Температура — тоже с **hace**: **hace veinte grados**.\nДождь и снег — отдельные глаголы: **llueve** («идёт дождь»), **nieva** («идёт снег»). Облачно — **está nublado**.",
          comparacion: "В русском «холодно» — без глагола. В испанском погоду «делает» **hace**: **hace frío**, дословно «делает холод».",
          errores: [
            { mal: "Hoy es frío.", bien: "Hoy hace frío.", por: "Погода — **hace**." },
            { mal: "Hace lluvia.", bien: "Llueve.", por: "Дождь идёт — **llueve**." }
          ],
          chequeo: [
            { pide: "«Сегодня солнечно»", opciones: ["Hoy hace sol.", "Hoy es sol.", "Hoy está sol."], ok: "Hoy hace sol.", por: "Погода — **hace**." }
          ]
        },
        {
          id: "es4-hace-tengo",
          titulo: "Hace frío или tengo frío",
          texto: "**hace frío** — холодно вокруг, на улице. **tengo frío** — холодно мне, я замёрз. Так же с жарой: **hace calor** / **tengo calor**.",
          comparacion: "По-русски в обоих случаях «холодно»: «на улице холодно» и «мне холодно». В испанском — разные глаголы.",
          errores: [
            { mal: "Estoy frío.", bien: "Tengo frío.", por: "Мне холодно — **tengo frío**." }
          ]
        }
      ],
      frases: ["FRE-071", "FRE-072", "FRE-073"],
      vocab: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo", "semana", "fin de semana", "mes", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre", "primavera", "verano", "otoño", "invierno",
        "tiempo", "calor", "frío", "sol", "viento", "lluvia", "nieve", "nube", "llover", "nevar", "nublado", "temperatura", "grado"],
      dialogos: ["DLE-016", "DLE-019"]
    },
    {
      id: "es4m7", n: 7, tipo: "leccion",
      titulo: "Siempre, a veces, nunca",
      resumen: "Как часто; отрицание с no и nunca; вопросы.",
      intro: "Чтобы рассказать о привычках, нужно сказать, **как часто** что-то происходит: **siempre** — «всегда», **a veces** — «иногда», **nunca** — «никогда». И уметь отрицать и спрашивать.",
      tablas: [{ titulo: "Как часто", encabezados: ["Испанский", "По-русски"], filas: [
        [{ es: "siempre", ru: "всегда" }, { es: "todos los días", ru: "каждый день" }],
        [{ es: "normalmente", ru: "обычно" }, { es: "a menudo", ru: "часто" }],
        [{ es: "a veces", ru: "иногда" }, { es: "de vez en cuando", ru: "время от времени" }],
        [{ es: "casi nunca", ru: "почти никогда" }, { es: "nunca", ru: "никогда" }]] }],
      secciones: [
        {
          id: "es4-frecuencia",
          titulo: "Siempre, a menudo, a veces",
          texto: "Слова частоты обычно ставят в начало фразы или после глагола: **Siempre desayuno en casa** = **Desayuno siempre en casa**. «Каждый день» — **todos los días** (дословно «все дни»): **Estudio español todos los días**.",
          ejemplos: [
            { es: "Normalmente me levanto a las siete.", ru: "Обычно я встаю в семь." },
            { es: "A veces ceno en un restaurante.", ru: "Иногда я ужинаю в ресторане." },
            { es: "Voy al gimnasio de vez en cuando.", ru: "Я хожу в спортзал время от времени." }
          ]
        },
        {
          id: "es4-no",
          titulo: "No — перед глаголом",
          texto: "Отрицание **no** ставят прямо перед глаголом: **No trabajo los sábados**. Если есть **me / te / se**, **no** идёт перед ним: **No me levanto temprano**.",
          errores: [
            { mal: "Trabajo no los sábados.", bien: "No trabajo los sábados.", por: "**no** — перед глаголом." }
          ]
        },
        {
          id: "es4-nunca",
          titulo: "Nunca и no… nunca",
          texto: "«Никогда не» можно сказать двумя способами:\n· **nunca** перед глаголом, **без no**: **Nunca desayuno**;\n· **no** перед глаголом и **nunca** после: **No desayuno nunca**.\nСмысл одинаковый.",
          comparacion: "По-русски говорят «никогда **не** завтракаю». По-испански, если **nunca** стоит перед глаголом, второго отрицания нет: **Nunca desayuno**.",
          errores: [
            { mal: "Nunca no desayuno.", bien: "Nunca desayuno.", por: "Перед глаголом — только **nunca**." }
          ],
          chequeo: [
            { pide: "«Я никогда не ужинаю поздно»", opciones: ["Nunca ceno tarde.", "Nunca no ceno tarde.", "No nunca ceno tarde."], ok: "Nunca ceno tarde.", por: "**nunca** перед глаголом — без **no**." }
          ]
        },
        {
          id: "es4-preguntas",
          titulo: "Вопросы",
          texto: "Вопрос «да или нет» — та же фраза с вопросительной интонацией: **¿Trabajas hoy?** С вопросительным словом подлежащее обычно идёт после глагола: **¿Dónde trabaja tu hermano?**, **¿A qué hora empieza la clase?**, **¿Cuándo vuelves?**, **¿Qué haces los domingos?**",
          ejemplos: [
            { es: "¿Cuándo descansas?", ru: "Когда ты отдыхаешь?" },
            { es: "¿Qué hace Ana por la tarde?", ru: "Что Аня делает днём?", por: "Сначала глагол, потом **Ana**." }
          ]
        }
      ],
      frases: ["FRE-074", "FRE-075"],
      vocab: ["siempre", "normalmente", "a menudo", "a veces", "de vez en cuando", "casi", "nunca", "cuándo", "todo", "día"]
    },
    {
      id: "es4m8", n: 8, tipo: "leccion",
      titulo: "Ahora estoy comiendo",
      resumen: "Estar + gerundio: что происходит прямо сейчас.",
      intro: "Чтобы сказать, что происходит **прямо сейчас**, испанцы говорят **estar** + форма на **-ando / -iendo** (gerundio): **Estoy comiendo** — «Я сейчас ем». А обычное настоящее время — для того, что бывает всегда или регулярно.",
      tablas: [
        { titulo: "Gerundio", encabezados: ["Инфинитив", "Gerundio"], filas: [
          [{ es: "hablar", ru: "-ar" }, { es: "hablando" }], [{ es: "comer", ru: "-er" }, { es: "comiendo" }], [{ es: "vivir", ru: "-ir" }, { es: "viviendo" }],
          [{ es: "leer", ru: "e → y" }, { es: "leyendo" }], [{ es: "dormir", ru: "o → u" }, { es: "durmiendo" }], [{ es: "pedir", ru: "e → i" }, { es: "pidiendo" }]] },
        { titulo: "Estar + gerundio", encabezados: ["Кто", "Форма"], filas: ES4_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: ES4_ESTAR[i] + " trabajando" }]) }
      ],
      secciones: [
        {
          id: "es4-gerundio-formas",
          titulo: "Как образовать gerundio",
          texto: "У **-ar** — **-ando**: habl**ando**, trabaj**ando**. У **-er** и **-ir** — **-iendo**: com**iendo**, viv**iendo**.\nОсобые случаи: после гласной **-iendo** превращается в **-yendo** (**leer** → **leyendo**); у **dormir** — **durmiendo**; у **pedir**, **repetir**, **vestirse** — **i**: **pidiendo**, **repitiendo**.",
          chequeo: [
            { pide: "escribir → ?", opciones: ["escribiendo", "escribando", "escribendo"], ok: "escribiendo", por: "**-ir** → **-iendo**." }
          ]
        },
        {
          id: "es4-estar-gerundio",
          titulo: "Estar + gerundio — прямо сейчас",
          texto: "**estar** меняется по лицам, а gerundio — нет: **estoy trabajando**, **estás trabajando**, **están trabajando**. Так говорят о том, что происходит в этот момент: **¿Qué estás haciendo? —Estoy leyendo**.",
          ejemplos: [
            { es: "Ahora estoy cocinando.", ru: "Сейчас я готовлю." },
            { es: "Los niños están durmiendo.", ru: "Дети (сейчас) спят.", por: "**están** **durmiendo**: o → **u**." },
            { es: "Ahora está lloviendo.", ru: "Сейчас идёт дождь." }
          ],
          errores: [
            { mal: "Estoy trabajo.", bien: "Estoy trabajando.", por: "После **estar** — gerundio." },
            { mal: "Soy comiendo.", bien: "Estoy comiendo.", por: "Только **estar**." }
          ]
        },
        {
          id: "es4-ahora-siempre",
          titulo: "Сейчас или обычно",
          texto: "· Обычно, всегда, регулярно — простое настоящее: **Trabajo en un banco**, **Todos los días como a las dos**.\n· Прямо сейчас — **estar** + gerundio: **Ahora estoy comiendo**.\nПодсказки: **ahora** → estar + gerundio; **siempre**, **normalmente**, **todos los días**, **los lunes** → простое настоящее.",
          comparacion: "По-русски и «я ем в два часа», и «я сейчас ем» — одна форма. В испанском для «прямо сейчас» обычно берут **estar** + gerundio.",
          chequeo: [
            { pide: "«Сейчас Пабло читает»", opciones: ["Ahora Pablo está leyendo.", "Ahora Pablo es leyendo.", "Ahora Pablo está lee."], ok: "Ahora Pablo está leyendo.", por: "**estar** + gerundio: **está leyendo**." }
          ],
          mas: {
            titulo: "Me estoy duchando = estoy duchándome",
            texto: "У глаголов с **se** местоимение можно поставить перед **estar** или приклеить к gerundio: **Me estoy duchando** = **Estoy duchándome**. Во втором случае появляется знак ударения: **du-CHÁN-do-me**. Смысл одинаковый; первый вариант проще."
          }
        }
      ],
      frases: ["FRE-076", "FRE-077"],
      dialogos: ["DLE-018"]
    },
    {
      id: "es4m9", n: 9, tipo: "leccion",
      titulo: "Me gusta, me encanta",
      resumen: "Me gusta / me gustan, ¿te gusta?, me encanta. Свободное время.",
      intro: "**Me gusta** устроено как русское «мне нравится»: тот, кому нравится, — **me**, **te**; а то, что нравится, — подлежащее. Поэтому глагол согласуется не с человеком, а с тем, что нравится: **me gusta el fútbol**, **me gustan las películas**.",
      tablas: [{ titulo: "Gustar", encabezados: ["Одно или действие", "Несколько"], filas: [
        [{ es: "Me gusta el café.", ru: "Мне нравится кофе." }, { es: "Me gustan los libros.", ru: "Мне нравятся книги." }],
        [{ es: "¿Te gusta bailar?", ru: "Тебе нравится танцевать?" }, { es: "¿Te gustan las series?", ru: "Тебе нравятся сериалы?" }],
        [{ es: "Me encanta nadar.", ru: "Я обожаю плавать." }, { es: "Me encantan los perros.", ru: "Я обожаю собак." }],
        [{ es: "No me gusta nada.", ru: "Мне совсем не нравится." }, { es: "Me gusta mucho.", ru: "Мне очень нравится." }]] }],
      secciones: [
        {
          id: "es4-gustar",
          titulo: "Me gusta — «мне нравится»",
          texto: "**me** — «мне», **te** — «тебе». **gusta** — «нравится». То, что нравится, идёт после глагола: **Me gusta la música**. «Я нравлюсь» здесь не подходит: «yo gusto» значит совсем другое.",
          comparacion: "Как русское «мне нравится музыка»: «нравится» согласуется с «музыка», а не с «мне».",
          ejemplos: [
            { es: "Me gusta el verano.", ru: "Мне нравится лето." },
            { es: "¿Te gusta el tenis?", ru: "Тебе нравится теннис?" }
          ],
          errores: [
            { mal: "Yo gusto el fútbol.", bien: "Me gusta el fútbol.", por: "Кому нравится — **me**; глагол — **gusta**." }
          ]
        },
        {
          id: "es4-gusta-gustan",
          titulo: "Gusta или gustan",
          texto: "· одно (или неисчисляемое) — **gusta**: **me gusta el cine**;\n· несколько — **gustan**: **me gustan las películas**;\n· действие (инфинитив) — всегда **gusta**: **me gusta leer**, **me gusta bailar y cantar**.",
          destacado: "Одно или действие — **gusta**. Несколько — **gustan**.",
          errores: [
            { mal: "Me gusta los libros.", bien: "Me gustan los libros.", por: "**los libros** — несколько: **gustan**." }
          ],
          chequeo: [
            { pide: "Me ___ las fiestas.", opciones: ["gustan", "gusta", "gusto"], ok: "gustan", por: "**las fiestas** — несколько: **gustan**." }
          ]
        },
        {
          id: "es4-gustar-articulo",
          titulo: "Me gusta el fútbol — с артиклем",
          texto: "После **gusta** то, что нравится вообще, называют с артиклем **el / la / los / las**: **me gusta el fútbol**, **me gusta la música**, **me gustan los gatos**.",
          errores: [
            { mal: "Me gusta fútbol.", bien: "Me gusta el fútbol.", por: "Нужен артикль: **el fútbol**." }
          ]
        },
        {
          id: "es4-te-gusta",
          titulo: "¿Te gusta? Me encanta",
          texto: "Ответить на **¿Te gusta…?** можно так: **Sí, mucho** — «да, очень»; **Sí, me encanta** — «очень нравится, обожаю»; **No mucho** — «не очень»; **No, no me gusta nada** — «совсем не нравится».\n**encantar** устроен так же, как **gustar**: **me encanta**, **me encantan**. Он уже значит «очень», поэтому **mucho** к нему не добавляют.",
          ejemplos: [
            { es: "—¿Te gusta nadar? —¡Me encanta!", ru: "— Тебе нравится плавать? — Обожаю!" },
            { es: "No me gusta nada la lluvia.", ru: "Мне совсем не нравится дождь." }
          ]
        }
      ],
      frases: ["FRE-078", "FRE-079", "FRE-080"],
      vocab: ["gustar", "encantar", "deporte", "fútbol", "tenis", "música", "película", "serie", "fiesta", "paseo", "cine", "libro", "bailar", "cantar", "nadar", "nada"],
      dialogos: ["DLE-017"],
      ampliacion: {
        titulo: "Ещё о свободном времени",
        intro: "Ещё несколько слов о хобби. Они не входят в проверку урока.",
        vocab: ["natación", "videojuego", "concierto", "viajar", "caminar"]
      }
    },
    { id: "es4m10", n: 10, tipo: "pronto", titulo: "Разговоры", resumen: "Диалоги с записью голоса." },
    { id: "es4m11", n: 11, tipo: "pronto", titulo: "Проект", resumen: "«Mi día»: твой обычный день." },
    { id: "es4m12", n: 12, tipo: "pronto", titulo: "Проверка урока", resumen: "Настоящее время, распорядок дня, время, погода, вкусы." },
    { id: "es4m13", n: 13, tipo: "pronto", titulo: "Повторение: уроки 1–4", resumen: "Большая проверка всего, что ты уже знаешь." }
  ]
};

function unidadEs4Modulo(id) { return UNIDAD_ES_4.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_4 = UNIDAD_ES_4;
window.unidadEs4Modulo = unidadEs4Modulo;

/* ── Vocabulario: palabras → IDs ──
   Palabras con dos entradas: tarde (поздно, no «вторая половина дня»), cuarto (el ordinal, «четверть»),
   medio (половина, no «середина»), frío (el sustantivo «холод»), mañana (завтра). */
const ES4_ID_FIJO = { "tarde": "ESP-05185", "cuarto": "ESP-00508", "medio": "ESP-05193", "frío": "ESP-05434", "mañana": "ESP-05181" };
function es4Id(w) {
  if (ES4_ID_FIJO[w]) return ES4_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es4Vocab(m) { return (m.vocab || []).map(es4Id).filter(Boolean); }
function es4Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es4Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U4 (sin las que ya enseñaron la U1, la U2 y la U3, ni la ampliación) */
function es4Objetivo() {
  const antes = new Set([].concat(typeof es1Objetivo === "function" ? es1Objetivo() : [], typeof es2Objetivo === "function" ? es2Objetivo() : [], typeof es3Objetivo === "function" ? es3Objetivo() : []));
  const out = [];
  UNIDAD_ES_4.modulos.forEach(m => es4Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs4() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const lex = w => { const id = es4Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  /* Elegir: [frase con ___, correcta, opciones, explicación, palabra?, módulo?, regla?] */
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES4-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok) : ok, explicacion: exp });
  });
  /* Frases enteras: [correcta, otras, explicación, módulo, regla, consigna?] */
  const frases = (pref, tipo, lista, pide, dif, semilla) => lista.forEach(([ok, mal, exp, mod, regla, pide2], i) => {
    out.push({ id: "ES4-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: mod, regla, grupo: pref + "-" + i,
      pide: pide2 || pide, opciones: baraja([ok].concat(mal), i + semilla), correcta: ok, oir: ok, explicacion: exp });
  });

  /* 1. Conjugar en presente (escribir). Las formas salen de data-verbos-es.js. */
  ES4_CONJ.forEach(([frase, inf, p, mod, regla], i) => {
    const f = es4Pres(inf, p); if (!f) return;
    const sola = frase.replace(/\s*\([^)]*\)\s*$/, "");
    const audio = sola.replace("___", f).replace(/^(¿?)([a-zé])/, (x, a, b) => a + b.toUpperCase());
    out.push({ id: "ES4-cj-" + i, tipo: "conjugar", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "cj-" + i, lex: lex(inf),
      pide: "Впиши глагол «" + inf + "» в нужной форме.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES4_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (ES4_CONJ_NOTA[inf] ? ". " + ES4_CONJ_NOTA[inf] : ".") });
  });
  /* 2. Cambia la persona (cadena) */
  ES4_CADENAS.forEach(([inf, resto, pasos, mod, regla], j) => {
    const fr = p => cap(es4Pres(inf, p)) + " " + resto;
    const P = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];
    out.push({ id: "ES4-cad-" + j, tipo: "cambia-persona", forma: "cadena", dificultad: 3, modulo: mod, regla, grupo: "cad-" + j, lex: lex(inf), oir: fr(pasos[pasos.length - 1]),
      pide: "Измени фразу шаг за шагом.", base: fr(0),
      pasos: pasos.map(p => ({ pide: "Теперь — " + P[p] + ".", esperadas: [fr(p), P[p].replace("él", "Él") + " " + es4Pres(inf, p) + " " + resto] })),
      explicacion: pasos.map(p => "**" + P[p] + "** → **" + es4Pres(inf, p) + "**").join(" · ") });
  });
  /* 3. La hora: escribir con el reloj, oír y elegir es / son */
  const dig = (hh, mm) => hh + ":" + (mm < 10 ? "0" : "") + mm;
  ES4_HORAS.forEach(([hh, mm, texto, otras], i) => {
    out.push({ id: "ES4-hw-" + i, tipo: "hora-escribir", forma: "escribir", dificultad: 3, modulo: 2, regla: mm > 30 ? "es4-hora-minutos" : mm === 0 ? "es4-hora-es-son" : "es4-hora-minutos", grupo: "h-" + i, lex: lex(mm === 0 ? "hora" : mm % 15 === 0 ? (mm === 30 ? "medio" : "cuarto") : "minuto"),
      pide: "¿Qué hora es? Напиши словами.", reloj: { h: hh, m: mm }, esperadas: [texto].concat(otras || []), idioma: "es", oir: texto,
      explicacion: "**" + dig(hh, mm) + "** — **" + texto + "**" + (mm > 30 ? " Считаем от следующего часа: **menos**." : "") });
    const opts = [dig(hh, mm)];
    [[hh, (60 - mm) % 60], [hh % 12 + 1, mm], [hh, (mm + 30) % 60], [(hh + 10) % 12 + 1, mm]].forEach(([a, b]) => { const d = dig(a, b); if (opts.indexOf(d) < 0 && opts.length < 4) opts.push(d); });
    out.push({ id: "ES4-ho-" + i, tipo: "hora-oir", forma: "elegir", dificultad: 2, modulo: 2, regla: "es4-hora-minutos", grupo: "h-" + i,
      pide: "Послушай: который час?", audio: texto, opciones: baraja(opts, i + 31), correcta: dig(hh, mm), oir: texto, explicacion: "**" + texto + "** — " + dig(hh, mm) + "." });
  });
  elegir("es", "hora-es-son", ES4_ES_SON, 2, "es4-hora-es-son", "Es или son?", 1, 41);
  /* 4. El pronombre del reflexivo */
  elegir("rf", "reflexivo", ES4_REFLEXIVO, 3, "es4-reflexivo", "Какое местоимение нужно?", 2, 51);
  /* 5. Verbos que cambian la raíz */
  elegir("bo", "bota", ES4_BOTA, 4, "es4-bota", "Какая форма правильная?", 2, 61);
  /* 6. Días, meses y estaciones */
  elegir("dm", "calendario", ES4_CALENDARIO, 6, "es4-dias", "Что подходит?", 1, 71);
  /* 7. El tiempo: elegir con la escena y escribir */
  ES4_TIEMPO.forEach(([escena, ok, mal, otras], i) => {
    out.push({ id: "ES4-te-" + i, tipo: "tiempo", forma: "elegir", dificultad: 1, modulo: 6, regla: "es4-tiempo", grupo: "te-" + i,
      pide: "¿Qué tiempo hace?", escena, opciones: baraja([ok].concat(mal), i + 81), correcta: ok, oir: ok, explicacion: "**" + ok + "**" });
    out.push({ id: "ES4-tw-" + i, tipo: "tiempo-escribir", forma: "escribir", dificultad: 3, modulo: 6, regla: "es4-tiempo", grupo: "te-" + i,
      pide: "¿Qué tiempo hace? Напиши фразу.", escena, esperadas: [ok].concat(otras || []), idioma: "es", oir: ok, explicacion: "**" + ok + "**" });
  });
  elegir("ht", "hace-tengo", ES4_HACE_TENGO, 6, "es4-hace-tengo", "Что подходит?", 2, 91);
  /* 8. Frecuencia: ordenar la escala */
  ES4_ESCALAS.forEach((esc, i) => {
    let fichas = baraja(esc, i + 101);
    if (fichas.join("|") === esc.join("|")) fichas = fichas.slice(1).concat(fichas[0]);
    out.push({ id: "ES4-fr-" + i, tipo: "frecuencia", forma: "ordenar", dificultad: 2, modulo: 7, regla: "es4-frecuencia", grupo: "fr-esc-" + i,
      pide: "Расставь от «всегда» к «никогда».", fichas, sep: " · ", esperada: esc.join(" · "), explicacion: esc.join(" → ") });
  });
  /* 9. Negación y orden */
  frases("ng", "negacion", ES4_NEGACION, "Какая фраза правильная?", 2, 111);
  /* 10. Gerundio y estar + gerundio */
  ES4_GERUNDIO.forEach((inf, i) => {
    const g = es4Ger(inf);
    out.push({ id: "ES4-ge-" + i, tipo: "gerundio", forma: "escribir", dificultad: 2, modulo: 8, regla: "es4-gerundio-formas", grupo: "ge-" + inf, lex: lex(inf),
      pide: "Напиши gerundio.", grande: inf, esperadas: [g], idioma: "es", foco: true, oir: g, explicacion: "**" + inf + "** → **" + g + "**" });
  });
  ES4_ESTAR_GER.forEach(([frase, inf, p], i) => {
    const f = ES4_ESTAR[p] + " " + es4Ger(inf), audio = frase.replace(/\s*\([^)]*\)/, "").replace("___", f);
    out.push({ id: "ES4-eg-" + i, tipo: "estar-gerundio", forma: "escribir", dificultad: 3, modulo: 8, regla: "es4-estar-gerundio", grupo: "eg-" + i, lex: lex(inf),
      pide: "Что происходит сейчас? Впиши estar + gerundio.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES4_PERS[p][0].split(" / ")[0] + "** → **" + f + "**." });
  });
  elegir("as", "ahora-siempre", ES4_AHORA_SIEMPRE, 8, "es4-ahora-siempre", "Сейчас или обычно? Что подходит?", 2, 121);
  /* 11. Gustar */
  elegir("gu", "gustar", ES4_GUSTA, 9, "es4-gusta-gustan", "Что подходит?", 2, 131);
  ES4_GUSTA_ESC.forEach(([frase, ok, exp], i) => {
    const audio = frase.replace("___", ok);
    out.push({ id: "ES4-gw-" + i, tipo: "gustar-escribir", forma: "escribir", dificultad: 3, modulo: 9, regla: "es4-gusta-gustan", grupo: "gw-" + i, lex: lex("gustar"),
      pide: "Впиши gusta или gustan.", grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  frases("gf", "gustar-frase", ES4_GUSTA_FRASE, "Какая фраза правильная?", 2, 141);
  /* 12. Preguntas */
  ES4_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES4-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 151), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 13. Errores típicos: toca la palabra mal y escríbela bien */
  ES4_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES4-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 14. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es4Objetivo());
  const dictado = (w, id, mod, ampl) => {
    const e = lexEs(id);
    if (!e || e.propio || /\s/.test(w) || ["y", "me", "te", "se", "nos", "os"].indexOf(w) >= 0 || out.some(x => x.id === "ES4-dic-" + id)) return;
    const x = { id: "ES4-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_4.modulos.forEach(m => {
    (m.vocab || []).forEach(w => { const id = es4Id(w); if (id && OBJ.has(id)) dictado(w, id, m.n); });
    if (m.ampliacion) m.ampliacion.vocab.forEach(w => { const id = es4Id(w); if (id) dictado(w, id, m.n, true); });
  });
  /* 15. Situaciones y respuestas; dictado y orden de las frases de la U4 */
  ES4_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES4-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 161), correcta: ok, oir: ok, explicacion: exp });
  });
  ES4_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES4-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 171), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 4) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_4.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES4-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 181);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES4-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* Conjugar: [frase con ___ (y la persona entre paréntesis si no se ve), infinitivo, persona 0–5, módulo, regla] */
const ES4_CONJ = [
  ["Yo ___ en una oficina.", "trabajar", 0, 1, "es4-presente-ar"],
  ["¿___ español? (tú)", "estudiar", 1, 1, "es4-presente-ar"],
  ["Nosotros ___ en casa.", "comer", 3, 1, "es4-presente-er-ir"],
  ["Ana ___ en Barcelona.", "vivir", 2, 1, "es4-presente-er-ir"],
  ["¿Vosotros ___ música?", "escuchar", 4, 1, "es4-acento-presente"],
  ["Mis padres ___ mucho.", "leer", 5, 1, "es4-presente-er-ir"],
  ["Javier ___ muy bien.", "cocinar", 2, 1, "es4-presente-ar"],
  ["Nosotras ___ en Madrid.", "vivir", 3, 1, "es4-presente-er-ir"],
  ["¿Tú ___ la televisión?", "mirar", 1, 1, "es4-presente-ar"],
  ["Vosotras ___ mucho.", "aprender", 4, 1, "es4-acento-presente"],
  ["Yo ___ un libro.", "escribir", 0, 1, "es4-presente-er-ir"],
  ["Ellos ___ agua.", "beber", 5, 1, "es4-presente-er-ir"],
  ["¿Usted ___ ruso?", "hablar", 2, 1, "es4-presente-ar"],
  ["Lucía y yo ___ en un restaurante.", "trabajar", 3, 1, "es4-presente-ar"],
  ["¿Vosotros ___ en el centro?", "vivir", 4, 1, "es4-acento-presente"],
  ["Ellas ___ la puerta.", "abrir", 5, 1, "es4-presente-er-ir"],
  ["Yo ___ a las siete.", "levantarse", 0, 3, "es4-reflexivo"],
  ["¿A qué hora ___? (tú, levantarse)", "levantarse", 1, 3, "es4-reflexivo"],
  ["Ana ___ por la mañana.", "ducharse", 2, 3, "es4-reflexivo"],
  ["Nosotros ___ las manos.", "lavarse", 3, 3, "es4-reflexivo"],
  ["Pablo ___ por la mañana.", "afeitarse", 2, 3, "es4-reflexivo"],
  ["¿Vosotros ___ por la noche?", "ducharse", 4, 3, "es4-reflexivo"],
  ["Mis hijos ___ a las ocho.", "levantarse", 5, 3, "es4-reflexivo"],
  ["Yo ___ los dientes.", "lavarse", 0, 3, "es4-con-sin-se"],
  ["Yo ___ a las ocho.", "desayunar", 0, 3, "es4-comidas"],
  ["Nosotros ___ a las nueve de la noche.", "cenar", 3, 3, "es4-comidas"],
  ["¿___ un café? (tú)", "tomar", 1, 3, "es4-comidas"],
  ["Javier ___ a casa a las seis.", "llegar", 2, 3, "es4-presente-ar"],
  ["La clase ___ a las doce.", "terminar", 2, 3, "es4-presente-ar"],
  ["Por la tarde ___ un poco. (yo)", "descansar", 0, 3, "es4-presente-ar"],
  ["La clase ___ a las nueve.", "empezar", 2, 4, "es4-e-ie"],
  ["Yo ___ ocho horas.", "dormir", 0, 4, "es4-o-ue"],
  ["Nosotros ___ ocho horas.", "dormir", 3, 4, "es4-bota"],
  ["¿A qué hora ___ a casa? (tú)", "volver", 1, 4, "es4-o-ue"],
  ["Ellos ___ tarde.", "volver", 5, 4, "es4-o-ue"],
  ["Yo ___ un café.", "pedir", 0, 4, "es4-e-i"],
  ["Nosotros ___ agua.", "pedir", 3, 4, "es4-bota"],
  ["¿Tú ___ en español?", "pensar", 1, 4, "es4-e-ie"],
  ["Perdón, no ___. (yo)", "entender", 0, 4, "es4-e-ie"],
  ["¿Vosotros ___ mucho?", "jugar", 4, 4, "es4-bota"],
  ["Ana ___ a las siete.", "despertarse", 2, 4, "es4-e-ie"],
  ["Yo ___ a las once.", "acostarse", 0, 4, "es4-o-ue"],
  ["Nosotros ___ a las doce.", "acostarse", 3, 4, "es4-bota"],
  ["Los niños ___ a las ocho.", "vestirse", 5, 4, "es4-e-i"],
  ["¿Usted ___ la puerta?", "cerrar", 2, 4, "es4-e-ie"],
  ["Mi hermano ___ a las dos.", "almorzar", 2, 4, "es4-o-ue"],
  ["Ana ___ la palabra.", "repetir", 2, 4, "es4-e-i"],
  ["Yo ___ de casa a las ocho.", "salir", 0, 5, "es4-yo-go"],
  ["Yo ___ la televisión.", "poner", 0, 5, "es4-yo-go"],
  ["¿Qué ___ hoy? (tú)", "hacer", 1, 5, "es4-yo-go"],
  ["Yo ___ la cena.", "hacer", 0, 5, "es4-yo-go"],
  ["Yo ___ a clase.", "ir", 0, 5, "es4-ir"],
  ["Nosotros ___ al trabajo.", "ir", 3, 5, "es4-ir"],
  ["¿___ al cine? (vosotros)", "ir", 4, 5, "es4-ir"],
  ["Ellos ___ a casa.", "ir", 5, 5, "es4-ir"],
  ["Mi hermano ___ mañana.", "venir", 2, 5, "es4-ir-venir"],
  ["Yo ___ a las diez.", "venir", 0, 5, "es4-yo-go"],
  ["¿Tú ___ hoy?", "venir", 1, 5, "es4-yo-go"],
  ["Ana ___ de casa a las nueve.", "salir", 2, 5, "es4-yo-go"],
  ["Yo no ___ coche.", "tener", 0, 5, "es4-yo-go"],
  ["Yo ___ la televisión por la noche.", "ver", 0, 5, "es4-yo-go"],
  ["Pablo ___ la mesa.", "poner", 2, 5, "es4-yo-go"]
];
const ES4_CONJ_NOTA = {
  "levantarse": "Глагол с **se**: местоимение перед глаголом", "ducharse": "Глагол с **se**: местоимение перед глаголом", "lavarse": "Глагол с **se**: местоимение перед глаголом",
  "afeitarse": "Глагол с **se**", "despertarse": "e → **ie** и **se**", "acostarse": "o → **ue** и **se**", "vestirse": "e → **i** и **se**",
  "empezar": "e → **ie**", "pensar": "e → **ie**", "entender": "e → **ie**", "cerrar": "e → **ie**", "dormir": "o → **ue** (не в nosotros и vosotros)", "volver": "o → **ue**",
  "almorzar": "o → **ue**", "jugar": "u → **ue**, кроме nosotros и vosotros", "pedir": "e → **i** (не в nosotros и vosotros)", "repetir": "e → **i**",
  "salir": "yo — **salgo**", "poner": "yo — **pongo**", "hacer": "yo — **hago**", "venir": "yo — **vengo**, tú / él / ellos — **ie**", "tener": "yo — **tengo**", "ver": "yo — **veo**", "ir": "**ir** неправильный весь"
};
/* Cambia la persona: [infinitivo, resto de la frase, personas de los pasos, módulo, regla] */
const ES4_CADENAS = [
  ["trabajar", "en una oficina.", [2, 3, 4], 1, "es4-presente-ar"],
  ["comer", "en casa.", [1, 3, 5], 1, "es4-presente-er-ir"],
  ["vivir", "en el centro.", [2, 3, 4], 1, "es4-presente-er-ir"],
  ["levantarse", "a las siete.", [1, 2, 3], 3, "es4-reflexivo"],
  ["dormir", "ocho horas.", [1, 3, 5], 4, "es4-bota"],
  ["volver", "a casa a las seis.", [2, 3, 4], 4, "es4-bota"],
  ["salir", "de casa a las ocho.", [1, 2, 3], 5, "es4-yo-go"],
  ["ir", "a clase por la mañana.", [1, 3, 5], 5, "es4-ir"]
];
/* La hora: [hora, minutos, texto, otras respuestas que valen] */
const ES4_HORAS = [
  [1, 0, "Es la una.", ["Es la una en punto."]], [1, 15, "Es la una y cuarto."], [2, 0, "Son las dos.", ["Son las dos en punto."]],
  [3, 30, "Son las tres y media."], [4, 45, "Son las cinco menos cuarto."], [5, 10, "Son las cinco y diez."], [6, 20, "Son las seis y veinte."],
  [7, 5, "Son las siete y cinco."], [8, 15, "Son las ocho y cuarto."], [9, 50, "Son las diez menos diez."], [10, 30, "Son las diez y media."],
  [11, 40, "Son las doce menos veinte."], [12, 0, "Son las doce.", ["Son las doce en punto."]], [12, 45, "Es la una menos cuarto."],
  [8, 0, "Son las ocho en punto.", ["Son las ocho."]], [3, 55, "Son las cuatro menos cinco."], [7, 25, "Son las siete y veinticinco."], [12, 30, "Son las doce y media."]
];
const ES4_ES_SON = [
  ["___ la una.", "Es", ["Es", "Son"], "Один час — **es la una**."],
  ["___ las tres.", "Son", ["Son", "Es"], "Больше одного — **son las…**"],
  ["___ la una y media.", "Es", ["Es", "Son"], "**la una** — **es**, даже с минутами."],
  ["___ las doce menos cuarto.", "Son", ["Son", "Es"], "**las doce** — **son**."],
  ["___ la una menos diez.", "Es", ["Es", "Son"], "Считаем от **la una** — **es**."],
  ["___ las dos y cuarto.", "Son", ["Son", "Es"], "**las dos** — **son**."]
];
const ES4_REFLEXIVO = [
  ["Yo ___ levanto a las siete.", "me", ["me", "te", "se"], "**yo** → **me**."],
  ["¿A qué hora ___ duchas?", "te", ["te", "se", "me"], "**tú** → **te**."],
  ["Ana ___ lava los dientes.", "se", ["se", "te", "me"], "**ella** → **se**."],
  ["Nosotros ___ levantamos temprano.", "nos", ["nos", "se", "os"], "**nosotros** → **nos**."],
  ["¿Vosotros ___ ducháis por la mañana?", "os", ["os", "nos", "se"], "**vosotros** → **os**."],
  ["Mis padres ___ levantan a las seis.", "se", ["se", "nos", "os"], "**ellos** → **se**."],
  ["Pablo ___ afeita todos los días.", "se", ["se", "me", "te"], "**él** → **se**.", null, 7],
  ["Yo ___ despierto a las siete.", "me", ["me", "se", "te"], "**yo** → **me**.", null, 4],
  ["¿Tú ___ acuestas tarde?", "te", ["te", "me", "se"], "**tú** → **te**.", null, 4],
  ["Los niños ___ visten a las ocho.", "se", ["se", "nos", "os"], "**ellos** → **se**.", null, 4]
];
const ES4_BOTA = [
  ["Nosotros ___ ocho horas. (dormir)", "dormimos", ["dormimos", "duermimos", "dormemos"], "В **nosotros** корень не меняется: **dormimos**.", "dormir"],
  ["Yo ___ a casa a las seis. (volver)", "vuelvo", ["vuelvo", "volvo", "vuelve"], "o → **ue**: **vuelvo**.", "volver"],
  ["La clase ___ a las nueve. (empezar)", "empieza", ["empieza", "empeza", "empiezan"], "e → **ie**: **empieza**.", "empezar"],
  ["Vosotros ___ mucho. (pensar)", "pensáis", ["pensáis", "piensáis", "piensan"], "В **vosotros** корень не меняется: **pensáis**.", "pensar"],
  ["Yo ___ un café. (pedir)", "pido", ["pido", "pide", "pedimos"], "e → **i**: **pido**.", "pedir"],
  ["Tú ___ al tenis. (jugar)", "juegas", ["juegas", "jugas", "juega"], "u → **ue**: **juegas**.", "jugar", 9],
  ["¿___ el español? (entender, tú)", "Entiendes", ["Entiendes", "Entendes", "Entiende"], "e → **ie**: **entiendes**.", "entender"],
  ["Nosotros ___ la tienda a las ocho. (cerrar)", "cerramos", ["cerramos", "cierramos", "cierran"], "В **nosotros** — **cerramos**.", "cerrar"],
  ["Mis hijos ___ mucho. (dormir)", "duermen", ["duermen", "dormen", "dormimos"], "**ellos** — **duermen**.", "dormir"],
  ["Ana ___ la palabra. (repetir)", "repite", ["repite", "repete", "repetimos"], "e → **i**: **repite**.", "repetir"],
  ["Vosotros ___ a las dos. (almorzar)", "almorzáis", ["almorzáis", "almuerzáis", "almuerzan"], "В **vosotros** — **almorzáis**.", "almorzar"],
  ["Yo me ___ a las once. (acostarse)", "acuesto", ["acuesto", "acosto", "acostamos"], "o → **ue**: **me acuesto**.", "acostarse"],
  ["Ana se ___ a las siete. (despertarse)", "despierta", ["despierta", "desperta", "despertamos"], "e → **ie**: **se despierta**.", "despertarse"],
  ["Los niños se ___ a las ocho. (vestirse)", "visten", ["visten", "vesten", "vestimos"], "e → **i**: **se visten**.", "vestirse"]
];
const ES4_CALENDARIO = [
  ["Después del lunes viene el ___.", "martes", ["martes", "miércoles", "domingo"], "lunes → **martes**.", "martes"],
  ["Después del jueves viene el ___.", "viernes", ["viernes", "miércoles", "sábado"], "jueves → **viernes**.", "viernes"],
  ["El fin de semana: el sábado y el ___.", "domingo", ["domingo", "lunes", "viernes"], "**el sábado y el domingo**.", "domingo"],
  ["Hoy es miércoles. Mañana es ___.", "jueves", ["jueves", "martes", "viernes"], "miércoles → **jueves**.", "jueves"],
  ["Hoy es domingo. Mañana es ___.", "lunes", ["lunes", "sábado", "martes"], "domingo → **lunes**.", "lunes"],
  ["Después de marzo viene ___.", "abril", ["abril", "mayo", "febrero"], "marzo → **abril**.", "abril", null, "es4-meses"],
  ["Antes de agosto viene ___.", "julio", ["julio", "junio", "septiembre"], "**julio** → agosto.", "julio", null, "es4-meses"],
  ["Después de octubre viene ___.", "noviembre", ["noviembre", "septiembre", "diciembre"], "octubre → **noviembre**.", "noviembre", null, "es4-meses"],
  ["En España, junio, julio y agosto son los meses de ___.", "verano", ["verano", "invierno", "otoño"], "Летние месяцы — **verano**.", "verano", null, "es4-meses"],
  ["En España, diciembre, enero y febrero son los meses de ___.", "invierno", ["invierno", "verano", "primavera"], "Зимние месяцы — **invierno**.", "invierno", null, "es4-meses"],
  ["Marzo, abril y mayo son los meses de ___.", "primavera", ["primavera", "otoño", "invierno"], "Весна — **primavera**.", "primavera", null, "es4-meses"],
  ["Septiembre, octubre y noviembre son los meses de ___.", "otoño", ["otoño", "primavera", "verano"], "Осень — **otoño**.", "otoño", null, "es4-meses"],
  ["Voy al gimnasio ___ lunes. (каждую неделю)", "los", ["los", "el", "en"], "Регулярно — **los lunes**."],
  ["___ sábado voy a la playa. (в эту субботу)", "El", ["El", "Los", "En"], "Одна суббота — **el sábado**."],
  ["Hoy ___ martes.", "es", ["es", "está", "hay"], "**Hoy es martes** — без артикля."],
  ["Hace mucho calor ___ verano.", "en", ["en", "el", "a"], "«Летом» — **en verano**.", null, null, "es4-meses"]
];
/* El tiempo: [escena, frase correcta, otras (mal), otras respuestas que valen al escribir] */
const ES4_TIEMPO = [
  ["☀️", "Hace sol.", ["Es sol.", "Está sol."]],
  ["🥵", "Hace calor.", ["Es calor.", "Está calor."], ["Hace mucho calor."]],
  ["🥶", "Hace frío.", ["Es frío.", "Hay frío."], ["Hace mucho frío."]],
  ["🌧️", "Llueve.", ["Hace lluvia.", "Es lluvia."], ["Está lloviendo."]],
  ["🌨️", "Nieva.", ["Hace nieve.", "Es nieve."], ["Está nevando."]],
  ["💨", "Hace viento.", ["Es viento.", "Está viento."], ["Hace mucho viento."]],
  ["☁️", "Está nublado.", ["Hace nublado.", "Es nublado."]],
  ["🌡️ 25 °C", "Hace veinticinco grados.", ["Es veinticinco grados.", "Está veinticinco grados."]]
];
const ES4_HACE_TENGO = [
  ["En invierno ___ frío en Moscú.", "hace", ["hace", "tengo", "es"], "Холодно на улице — **hace frío**."],
  ["¿Tienes frío? —Sí, ___ mucho frío.", "tengo", ["tengo", "hace", "estoy"], "Холодно мне — **tengo frío**."],
  ["Yo ___ calor.", "tengo", ["tengo", "estoy", "soy"], "Мне жарко — **tengo calor**."],
  ["Hoy ___ calor en Barcelona.", "hace", ["hace", "tiene", "es"], "Погода — **hace calor**."],
  ["Ana ___ frío.", "tiene", ["tiene", "está", "es"], "Ане холодно — **tiene frío**."],
  ["En agosto ___ mucho calor.", "hace", ["hace", "tiene", "está"], "Погода — **hace**."]
];
/* Escalas de frecuencia (de «siempre» a «nunca») */
const ES4_ESCALAS = [["siempre", "normalmente", "a veces", "nunca"], ["a menudo", "de vez en cuando", "casi nunca", "nunca"]];
/* Negación: [correcta, otras, explicación, módulo, regla] */
const ES4_NEGACION = [
  ["No me levanto temprano.", ["Me no levanto temprano.", "Me levanto no temprano."], "Сначала **no**, потом **me**.", 7, "es4-no"],
  ["Nunca bebo café.", ["Nunca no bebo café.", "No nunca bebo café."], "**nunca** перед глаголом — без **no**.", 7, "es4-nunca"],
  ["No bebo café nunca.", ["Bebo café nunca.", "Nunca no bebo café."], "**no** перед глаголом и **nunca** после.", 7, "es4-nunca"],
  ["No trabajo los sábados.", ["Trabajo no los sábados.", "Los sábados trabajo no."], "**no** — прямо перед глаголом.", 7, "es4-no"],
  ["Casi nunca veo la televisión.", ["Casi nunca no veo la televisión.", "No casi nunca veo la televisión."], "**casi nunca** перед глаголом — без **no**.", 7, "es4-nunca"],
  ["Ana no se ducha por la noche.", ["Ana se no ducha por la noche.", "Ana se ducha no por la noche."], "**no** + **se** + глагол.", 7, "es4-no"]
];
const ES4_GERUNDIO = ["hablar", "comer", "vivir", "trabajar", "escribir", "leer", "dormir", "pedir", "estudiar", "cocinar", "escuchar", "repetir", "aprender", "descansar"];
/* Estar + gerundio: [frase con ___ (infinitivo), infinitivo, persona] */
const ES4_ESTAR_GER = [
  ["Ahora yo ___ (trabajar).", "trabajar", 0], ["¿Qué ___ (hacer) tú?", "hacer", 1], ["Lucía ___ (dormir).", "dormir", 2],
  ["Nosotros ___ (comer).", "comer", 3], ["¿Vosotros ___ (estudiar)?", "estudiar", 4], ["Los niños ___ (jugar) en el parque.", "jugar", 5],
  ["Pablo ___ (leer) un libro.", "leer", 2], ["Ahora ___ (llover).", "llover", 2], ["Yo ___ (escuchar) música.", "escuchar", 0]
];
const ES4_AHORA_SIEMPRE = [
  ["Ahora Lucía ___. (comer)", "está comiendo", ["está comiendo", "comiendo", "es comiendo"], "Прямо сейчас — **estar** + gerundio."],
  ["Normalmente Lucía ___ a las dos. (comer)", "come", ["come", "comiendo", "está come"], "Обычно — простое настоящее: **come**."],
  ["Ahora el niño ___. (dormir)", "está durmiendo", ["está durmiendo", "está dormiendo", "es durmiendo"], "Сейчас — **está durmiendo** (o → u)."],
  ["Siempre ___ ocho horas. (dormir, yo)", "duermo", ["duermo", "durmiendo", "estoy duermo"], "Всегда — простое настоящее: **duermo**."],
  ["¿Qué ___ ahora? (hacer, tú)", "estás haciendo", ["estás haciendo", "eres haciendo", "estás hacer"], "Сейчас — **estás haciendo**."],
  ["Mi padre ___ en un banco. (trabajar)", "trabaja", ["trabaja", "trabajando", "está trabaja"], "Его работа, обычно — **trabaja**."],
  ["Hoy no salgo: ___. (llover)", "está lloviendo", ["está lloviendo", "está llueve", "es lloviendo"], "Сейчас — **está lloviendo**."],
  ["Todos los días Pablo ___ un poco. (leer)", "lee", ["lee", "leyendo", "está lee"], "Каждый день — простое настоящее: **lee**."]
];
const ES4_GUSTA = [
  ["Me ___ el café.", "gusta", ["gusta", "gustan", "gusto"], "**el café** — одно: **gusta**."],
  ["Me ___ las películas.", "gustan", ["gustan", "gusta", "gusto"], "**las películas** — несколько: **gustan**."],
  ["¿Te ___ bailar?", "gusta", ["gusta", "gustas", "gustan"], "Действие — **gusta**."],
  ["Me ___ leer y escuchar música.", "gusta", ["gusta", "gustan", "gusto"], "Действия (инфинитивы) — всегда **gusta**."],
  ["No me ___ los deportes.", "gustan", ["gustan", "gusta", "gusto"], "**los deportes** — несколько: **gustan**."],
  ["¿Te ___ las series?", "gustan", ["gustan", "gusta", "gustas"], "**las series** — несколько: **gustan**."],
  ["Me ___ mucho el verano.", "gusta", ["gusta", "gustan", "gusto"], "**el verano** — одно: **gusta**."],
  ["Me ___ nadar.", "encanta", ["encanta", "encantan", "encanto"], "Действие — **encanta**.", "encantar", null, "es4-te-gusta"],
  ["Me ___ los perros.", "encantan", ["encantan", "encanta", "encanto"], "Несколько — **encantan**.", "encantar", null, "es4-te-gusta"]
];
const ES4_GUSTA_ESC = [
  ["Me ___ el fútbol.", "gusta", "**el fútbol** — **gusta**."], ["¿Te ___ los gatos?", "gustan", "**los gatos** — **gustan**."],
  ["Me ___ cocinar.", "gusta", "Действие — **gusta**."], ["No me ___ la lluvia.", "gusta", "**la lluvia** — **gusta**."],
  ["Me ___ las fiestas.", "gustan", "**las fiestas** — **gustan**."], ["¿Te ___ el tenis?", "gusta", "**el tenis** — **gusta**."]
];
const ES4_GUSTA_FRASE = [
  ["Me gusta el fútbol.", ["Yo gusto el fútbol.", "Me gusta fútbol."], "**Me gusta** + артикль: **el fútbol**.", 9, "es4-gustar"],
  ["Me gustan los libros.", ["Me gusta los libros.", "Yo gusto los libros."], "Несколько — **gustan**.", 9, "es4-gusta-gustan"],
  ["¿Te gusta la música?", ["¿Tú gustas la música?", "¿Te gusta música?"], "**¿Te gusta…?** + артикль.", 9, "es4-gustar-articulo"],
  ["Me encanta bailar.", ["Me encantan bailar.", "Yo encanto bailar."], "Действие — **encanta**.", 9, "es4-te-gusta"]
];
/* Preguntas: [pregunta con ___, respuesta, correcta, opciones, módulo, regla] */
const ES4_PREGUNTAS = [
  ["¿___ hora es?", "Son las tres.", "Qué", ["Qué", "Cuál", "Cómo", "Dónde"], 2, "es4-hora-es-son"],
  ["¿A ___ hora empieza la clase?", "A las nueve.", "qué", ["qué", "cuál", "cómo", "dónde"], 4, "es4-a-que-hora"],
  ["¿___ te levantas?", "A las siete.", "Cuándo", ["Cuándo", "Dónde", "Qué", "Cuál"], 7, "es4-preguntas"],
  ["¿___ haces los domingos?", "Descanso y leo.", "Qué", ["Qué", "Cuándo", "Cómo", "Dónde"], 7, "es4-preguntas"],
  ["¿___ tiempo hace?", "Hace sol.", "Qué", ["Qué", "Cuál", "Cómo", "Dónde"], 6, "es4-tiempo"],
  ["¿___ día es hoy?", "Es martes.", "Qué", ["Qué", "Cómo", "Dónde", "Quién"], 6, "es4-dias"],
  ["¿___ trabaja tu hermano?", "En un hospital.", "Dónde", ["Dónde", "Qué", "Cuándo", "Cómo"], 7, "es4-preguntas"],
  ["¿Qué estás ___?", "Estoy leyendo.", "haciendo", ["haciendo", "hacer", "haces"], 8, "es4-estar-gerundio"]
];
/* Errores típicos: [palabras, índice mal, arreglo, módulo, regla, explicación] */
const ES4_ERRORES = [
  [["Vosotros", "trabajais", "mucho."], 1, "trabajáis", 1, "es4-acento-presente", "**vosotros** — со знаком ударения: **trabajáis**."],
  [["Levanto", "a", "las", "siete."], 0, "Me levanto", 3, "es4-reflexivo", "Вставать — **levantarse**: **Me levanto a las siete**."],
  [["Es", "las", "dos."], 0, "Son", 2, "es4-hora-es-son", "Два часа — **son las dos**."],
  [["Nosotros", "duermimos", "ocho", "horas."], 1, "dormimos", 4, "es4-bota", "В **nosotros** корень не меняется: **dormimos**."],
  [["Yo", "salo", "de", "casa", "a", "las", "ocho."], 1, "salgo", 5, "es4-yo-go", "**salir** → **salgo**."],
  [["Perdón,", "no", "entendo."], 2, "entiendo", 4, "es4-e-ie", "e → **ie**: **entiendo**."],
  [["Hoy", "es", "frío."], 1, "hace", 6, "es4-tiempo", "Погода — **hace frío**."],
  [["Estoy", "frío."], 0, "Tengo", 6, "es4-hace-tengo", "Мне холодно — **tengo frío**."],
  [["Ahora", "estoy", "trabajo."], 2, "trabajando", 8, "es4-estar-gerundio", "После **estar** — gerundio: **estoy trabajando**."],
  [["Me", "gusta", "los", "libros."], 1, "gustan", 9, "es4-gusta-gustan", "**los libros** — несколько: **me gustan**."],
  [["Me", "gusta", "fútbol."], 2, "el fútbol", 9, "es4-gustar-articulo", "Нужен артикль: **el fútbol**."],
  [["Voy", "al", "gimnasio", "en", "lunes."], 3, "el", 6, "es4-dias", "«В понедельник» — **el lunes**."]
];
/* Situación → frase: [consigna, correcta, otras, explicación, módulo] */
const ES4_SITUACIONES = [
  ["Ты хочешь спросить, который час.", "¿Qué hora es?", ["¿Cuál hora es?", "¿Qué hora son?"], "**¿Qué hora es?**", 2],
  ["Ты говоришь, что работаешь в офисе.", "Trabajo en una oficina.", ["Trabaja en una oficina.", "Trabajar en una oficina."], "**yo** → **trabajo**.", 1],
  ["Ты говоришь, что встаёшь в семь.", "Me levanto a las siete.", ["Levanto a las siete.", "Yo levanto me a las siete."], "**Me levanto**.", 3],
  ["Ты говоришь, что выходишь из дома в восемь.", "Salgo de casa a las ocho.", ["Salo de casa a las ocho.", "Sale de casa a las ocho."], "**salir** → **salgo**.", 5],
  ["Ты говоришь, что сегодня холодно.", "Hoy hace frío.", ["Hoy es frío.", "Hoy tengo frío."], "Погода — **hace**. **Tengo frío** — это «мне холодно».", 6],
  ["Ты говоришь, что никогда не завтракаешь.", "Nunca desayuno.", ["Nunca no desayuno.", "No nunca desayuno."], "**nunca** перед глаголом — без **no**.", 7],
  ["Тебе звонят. Ты говоришь, что сейчас готовишь.", "Estoy cocinando.", ["Soy cocinando.", "Estoy cocino."], "Сейчас — **estoy** + gerundio.", 8],
  ["Ты спрашиваешь друга, нравится ли ему футбол.", "¿Te gusta el fútbol?", ["¿Tú gustas el fútbol?", "¿Te gustan el fútbol?"], "**¿Te gusta…?**", 9],
  ["Ты говоришь подруге, что обожаешь танцевать.", "¡Me encanta bailar!", ["¡Yo encanto bailar!", "¡Me encantan bailar!"], "Действие — **me encanta**.", 9]
];
/* Respuesta: [lo que te dicen, respuesta, otras, explicación, módulo] */
const ES4_RESPUESTAS = [
  ["¿Qué hora es?", "Son las cuatro y media.", ["Es cuatro y media.", "Hace las cuatro."], "**Son las…**", 2],
  ["¿A qué hora te levantas?", "A las siete.", ["En las siete.", "Es la siete."], "«В семь» — **a las siete**.", 3],
  ["¿Qué tiempo hace?", "Hace sol y calor.", ["Es sol y calor.", "Tengo sol."], "Погода — **hace**.", 6],
  ["¿Qué haces los domingos?", "Descanso y leo.", ["El domingo.", "Soy en casa."], "Что делаешь — глагол: **descanso**.", 7],
  ["¿Qué estás haciendo?", "Estoy leyendo un libro.", ["Soy leyendo un libro.", "Estoy leo un libro."], "**estoy** + gerundio.", 8],
  ["¿Te gusta el cine?", "Sí, me gusta mucho.", ["Sí, me gustan mucho.", "Sí, gusto mucho."], "**el cine** — **gusta**.", 9]
];

window.ejerciciosUnidadEs4 = ejerciciosUnidadEs4;
window.es4Vocab = es4Vocab;
window.es4Ampliacion = es4Ampliacion;
window.es4Objetivo = es4Objetivo;
const ES4_MEZCLA = { conjugar: 3, "cambia-persona": 1, "hora-escribir": 2, "hora-oir": 1, "hora-es-son": 1, reflexivo: 2, bota: 2, calendario: 1, tiempo: 1, "tiempo-escribir": 1,
  "hace-tengo": 1, frecuencia: 1, negacion: 2, gerundio: 1, "estar-gerundio": 2, "ahora-siempre": 2, gustar: 2, "gustar-escribir": 1, "gustar-frase": 1, pregunta: 2, error: 2,
  dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1 };
window.ES4_MEZCLA = ES4_MEZCLA;
