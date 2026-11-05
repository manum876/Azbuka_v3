/* ============================================================
   DATA-UNIDAD-ES-5.JS — Abecé · Урок 5: Еда, покупки и что мне нужно
   (Comer, comprar y resolver necesidades). Completa (05/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U5;
   propuesta aprobada por Manu el 05/11/2026: claude/PROPUESTA_U5_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-4.js (ver su cabecera): ejemplos { es, ru, por },
   tablas [{ titulo, encabezados, filas }], vocab, ampliacion { titulo, intro, vocab }
   (opcional: sus ejercicios, ampliacion: true, quedan fuera de la práctica de la
   unidad y de la evaluación). Las formas de los verbos salen de data-verbos-es.js
   (es5Pres): no se escriben a mano. Escenas con emoji: escena (elegir y escribir).
   Entrega 2, 05/11/2026: módulos 10–12 (conversaciones, proyecto con diálogos por turnos corregidos
   por intención —azSituacionEs, js/corrector-es.js— y evaluación).
   ============================================================ */

const ES5_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (на «ты»)"], ["ellos / ellas / ustedes", "они / вы"]];
const ES5_SE = ["me", "te", "se", "nos", "os", "se"];
function es5Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  return v ? (v.base ? Object.assign({ se: true }, VERBOS_ES[v.base]) : v) : null;
}
function es5Pres(inf, p) {
  const v = es5Verbo(inf); if (!v || !v.pres || !v.pres[p]) return "";
  return (v.se ? ES5_SE[p] + " " : "") + v.pres[p];
}
const es5Tabla = (inf, resto) => ES5_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es5Pres(inf, i) + (resto ? " " + resto : "") }]);

/* Números en palabras (para los ejercicios de oír y escribir números) */
function es5Num(n) {
  const U = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez", "once", "doce", "trece", "catorce", "quince",
    "dieciséis", "diecisiete", "dieciocho", "diecinueve", "veinte", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  const D = ["", "", "", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
  const C = ["", "ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];
  const menos100 = x => x < 30 ? U[x] : D[Math.floor(x / 10)] + (x % 10 ? " y " + U[x % 10] : "");
  const menos1000 = x => x === 100 ? "cien" : x < 100 ? menos100(x) : C[Math.floor(x / 100)] + (x % 100 ? " " + menos100(x % 100) : "");
  const apoc = t => t.replace(/(^|\s)uno$/, "$1un").replace(/veintiuno$/, "veintiún");
  if (n < 1000) return menos1000(n);
  if (n < 1000000) { const m = Math.floor(n / 1000), r = n % 1000; return (m === 1 ? "mil" : apoc(menos1000(m)) + " mil") + (r ? " " + menos1000(r) : ""); }
  const mm = Math.floor(n / 1000000), r = n % 1000000;
  return (mm === 1 ? "un millón" : apoc(menos1000(mm)) + " millones") + (r ? " " + es5Num(r) : "");
}

const UNIDAD_ES_5 = {
  id: 5,
  titulo: "Еда, покупки и что мне нужно",
  tituloEs: "Comer, comprar y resolver necesidades",
  objetivo: "Купить продукты и одежду, спросить цену, заказать в баре и в ресторане, сказать, что тебе нужно, что ты хочешь и что ты должен сделать.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es5m1", n: 1, tipo: "leccion",
      titulo: "Quiero, necesito, prefiero",
      resumen: "querer, poder, preferir, necesitar + существительное или инфинитив.",
      intro: "С этими четырьмя глаголами можно попросить почти что угодно: **quiero** — «хочу», **puedo** — «могу», **prefiero** — «предпочитаю», **necesito** — «мне нужно». Три из них меняют корень, как глаголы-«сапожки» из урока 4.",
      tablas: [
        { titulo: "Querer (e → ie)", encabezados: ["Кто", "Форма"], filas: es5Tabla("querer") },
        { titulo: "Poder (o → ue)", encabezados: ["Кто", "Форма"], filas: es5Tabla("poder") },
        { titulo: "Preferir (e → ie)", encabezados: ["Кто", "Форма"], filas: es5Tabla("preferir") }
      ],
      secciones: [
        {
          id: "es5-querer",
          titulo: "Quiero un café — quiero comer",
          texto: "**querer** — «хотеть». После него может стоять существительное или инфинитив:\n· **Quiero un café** — я хочу кофе;\n· **Quiero comer** — я хочу есть.\nКорень меняется, как в уроке 4: **qu**ie**ro**, **qu**ie**res**, **qu**ie**re**, но **queremos**, **queréis**.",
          ejemplos: [
            { es: "¿Quieres un té?", ru: "Хочешь чаю?" },
            { es: "Queremos aprender español.", ru: "Мы хотим выучить испанский.", por: "**nosotros** — корень не меняется: **queremos**." },
            { es: "Mis padres quieren vivir en el centro.", ru: "Мои родители хотят жить в центре." }
          ],
          chequeo: [
            { pide: "Nosotros ___ un café.", opciones: ["queremos", "quieremos", "quieren"], ok: "queremos", por: "В **nosotros** корень не меняется: **queremos**." }
          ],
          ojo: "С человеком **querer** значит «любить»: **Te quiero** — «я тебя люблю». С едой и вещами — «хотеть»: **Quiero un café**."
        },
        {
          id: "es5-poder",
          titulo: "¿Puedo…? ¿Puedes…?",
          texto: "**poder** — «мочь». Почти всегда с инфинитивом: **Puedo venir mañana** — «Я могу прийти завтра».\nВопрос **¿Puedo…?** — «можно мне…?»: **¿Puedo abrir la ventana?** Вопрос **¿Puedes…?** — вежливая просьба: **¿Puedes repetir, por favor?** (ты уже знаешь её из урока 1).\nКорень: p**ue**do, p**ue**des, p**ue**de, **podemos**, **podéis**, p**ue**den.",
          ejemplos: [
            { es: "¿Puedo abrir la ventana?", ru: "Можно открыть окно?" },
            { es: "Hoy no podemos trabajar.", ru: "Сегодня мы не можем работать." }
          ],
          chequeo: [
            { pide: "¿___ repetir, por favor? (tú)", opciones: ["Puedes", "Podes", "Puedas"], ok: "Puedes", por: "**tú** → **puedes**: o → ue." }
          ],
          mas: {
            titulo: "Poder и saber",
            texto: "«Я умею плавать» по-испански говорят другим глаголом — ты выучишь его позже. **Puedo nadar** — «могу плавать сейчас, мне ничто не мешает». Пока запомни: **puedo** — можно, есть возможность."
          }
        },
        {
          id: "es5-preferir",
          titulo: "Prefiero té",
          texto: "**preferir** — «предпочитать, больше хотеть». Так же меняет корень: pref**ie**ro, pref**ie**res, pref**ie**re, **preferimos**, **preferís**, pref**ie**ren.\nКогда выбирают из двух: **—¿Té o café? —Prefiero té.**",
          ejemplos: [
            { es: "—¿Té o café? —Prefiero té.", ru: "— Чай или кофе? — Лучше чай." },
            { es: "Ana prefiere leer en casa.", ru: "Аня больше любит читать дома." }
          ]
        },
        {
          id: "es5-necesitar",
          titulo: "Necesito…",
          texto: "**necesitar** — «нуждаться», а по смыслу — русское «мне нужно». Это правильный глагол на **-ar**: necesito, necesitas, necesita, necesitamos, necesitáis, necesitan.\nВ испанском тот, кому нужно, — подлежащее: **Necesito una mesa** — «Мне нужен стол» (буквально «я нуждаюсь в столе»).",
          comparacion: "Русское «мне нужно» строится с дательным падежом, а испанское **necesito** — как «я хочу»: **yo** + глагол.",
          ejemplos: [
            { es: "Necesito una mesa nueva.", ru: "Мне нужен новый стол." },
            { es: "¿Qué necesitas?", ru: "Что тебе нужно?" },
            { es: "Necesito dormir.", ru: "Мне нужно поспать." }
          ]
        },
        {
          id: "es5-infinitivo",
          titulo: "Второй глагол — в инфинитиве",
          texto: "После **querer**, **poder**, **preferir** и **necesitar** второй глагол не спрягается: он стоит в инфинитиве (на **-ar**, **-er**, **-ir**). Спрягается только первый: **Quiero comer**, **Puedes venir**, **Preferimos leer**.",
          errores: [
            { mal: "Quiero como.", bien: "Quiero comer.", por: "Второй глагол — инфинитив: **comer**." },
            { mal: "¿Puedes hablas más despacio?", bien: "¿Puedes hablar más despacio?", por: "Спрягается только **puedes**." }
          ],
          chequeo: [
            { pide: "Prefiero ___ en casa.", opciones: ["leer", "leo", "lee"], ok: "leer", por: "После **prefiero** — инфинитив." }
          ]
        }
      ],
      frases: ["FRE-081"],
      vocab: ["querer", "poder", "preferir", "necesitar"]
    },
    {
      id: "es5m2", n: 2, tipo: "leccion",
      titulo: "Tengo que, hay que",
      resumen: "tener que и hay que + инфинитив; tengo hambre, tengo sed.",
      intro: "«Я должен», «надо» по-испански — это **tener que** и **hay que** с инфинитивом. А «я голоден» и «хочу пить» говорят с тем же **tener**: **tengo hambre**, **tengo sed** — как **tengo frío** из урока 4.",
      tablas: [
        { titulo: "Tener que + инфинитив", encabezados: ["Кто", "Форма"], filas: es5Tabla("tener", "que…") },
        { titulo: "Hay que + инфинитив", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Hay que estudiar.", ru: "Надо учиться." }, { es: "Hay que dormir.", ru: "Надо спать." }],
          [{ es: "No hay que trabajar hoy.", ru: "Сегодня работать не нужно." }, { es: "¿Hay que hablar español?", ru: "Надо говорить по-испански?" }]] }
      ],
      secciones: [
        {
          id: "es5-tener-que",
          titulo: "Tengo que trabajar",
          texto: "**tener que** + инфинитив — «должен, надо» **конкретному человеку**: **Tengo que trabajar** — «Мне надо работать». Спрягается **tener** (tengo, tienes, tiene…), **que** не меняется, второй глагол — инфинитив.",
          comparacion: "Как русское «я должен» или «мне надо»: всегда понятно, кому.",
          ejemplos: [
            { es: "Mañana tengo que trabajar.", ru: "Завтра мне надо работать." },
            { es: "¿Tienes que estudiar hoy?", ru: "Тебе сегодня надо заниматься?" },
            { es: "No tengo que trabajar el domingo.", ru: "В воскресенье мне не надо работать.", por: "**no tener que** — «не обязан, не нужно»." }
          ],
          errores: [
            { mal: "Tengo trabajar.", bien: "Tengo que trabajar.", por: "**que** не пропускают." }
          ],
          chequeo: [
            { pide: "Javier ___ que trabajar mañana.", opciones: ["tiene", "tienes", "hay"], ok: "tiene", por: "**Javier** = **él** → **tiene que**." }
          ]
        },
        {
          id: "es5-hay-que",
          titulo: "Hay que pagar",
          texto: "**hay que** + инфинитив — «надо» **вообще, всем**: правило, совет, без конкретного человека. **Hay que estudiar todos los días** — «Надо заниматься каждый день». **hay** не меняется.",
          destacado: "**tengo que** — надо **мне**; **hay que** — надо **всем, вообще**.",
          ejemplos: [
            { es: "En clase hay que hablar español.", ru: "На уроке надо говорить по-испански." },
            { es: "No hay que llegar temprano.", ru: "Приходить рано не нужно." }
          ],
          chequeo: [
            { pide: "Por la mañana ___ que llegar temprano. (todos)", opciones: ["hay", "tengo", "es"], ok: "hay", por: "Правило для всех — **hay que**." }
          ]
        },
        {
          id: "es5-hambre",
          titulo: "Tengo hambre, tengo sed",
          texto: "«Я голоден» — **tengo hambre**, «хочу пить» — **tengo sed**: с глаголом **tener** и существительным, как **tengo frío** и **tengo calor** из урока 4.\n«Очень» здесь — **mucha**, потому что **hambre** и **sed** — женского рода: **tengo mucha hambre**, **tengo mucha sed**.",
          errores: [
            { mal: "Estoy hambre.", bien: "Tengo hambre.", por: "С **hambre** — глагол **tener**." },
            { mal: "Tengo mucho hambre.", bien: "Tengo mucha hambre.", por: "**hambre** — ж. р.: **mucha**." }
          ]
        }
      ],
      frases: ["FRE-083", "FRE-084"],
      vocab: ["tener que", "hay que", "hambre", "sed"]
    },
    {
      id: "es5m3", n: 3, tipo: "leccion",
      titulo: "Comida y bebida",
      resumen: "Еда и напитки. Quiero agua — без артикля; el agua está fría — с артиклем.",
      intro: "Здесь — слова для рынка, магазина и кафе. И главный вопрос урока: когда говорить **quiero agua**, без артикля, а когда **el agua**, с артиклем.",
      tablas: [
        { titulo: "Fruta y verdura", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "la fruta", ru: "фрукты" }, { es: "la verdura", ru: "овощи" }],
          [{ es: "la manzana", ru: "яблоко" }, { es: "el tomate", ru: "помидор" }],
          [{ es: "la pera", ru: "груша" }, { es: "la patata", ru: "картофель" }],
          [{ es: "la naranja", ru: "апельсин" }, { es: "la lechuga", ru: "салат-латук" }],
          [{ es: "el plátano", ru: "банан" }, { es: "la cebolla", ru: "лук" }],
          [{ es: "la uva", ru: "виноград" }, { es: "el ajo", ru: "чеснок" }],
          [{ es: "la fresa", ru: "клубника" }, { es: "el limón", ru: "лимон" }],
          [{ es: "la sandía", ru: "арбуз" }, { es: "", ru: "" }]] },
        { titulo: "Carne, pescado y más", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "la carne", ru: "мясо" }, { es: "la pasta", ru: "макароны" }],
          [{ es: "el pollo", ru: "курица" }, { es: "la ensalada", ru: "салат" }],
          [{ es: "el pescado", ru: "рыба (еда)" }, { es: "la tortilla", ru: "тортилья, омлет" }],
          [{ es: "el jamón", ru: "хамон, ветчина" }, { es: "el bocadillo", ru: "бутерброд из багета" }],
          [{ es: "el huevo", ru: "яйцо" }, { es: "el aceite", ru: "растительное масло" }],
          [{ es: "la mantequilla", ru: "сливочное масло" }, { es: "la sal", ru: "соль" }],
          [{ es: "el yogur", ru: "йогурт" }, { es: "el azúcar", ru: "сахар" }]] },
        { titulo: "Lo dulce y las bebidas", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "el chocolate", ru: "шоколад" }, { es: "la bebida", ru: "напиток" }],
          [{ es: "la galleta", ru: "печенье" }, { es: "el zumo", ru: "сок" }],
          [{ es: "la tarta", ru: "торт" }, { es: "el refresco", ru: "газировка" }],
          [{ es: "el helado", ru: "мороженое" }, { es: "el agua con gas / sin gas", ru: "вода с газом / без газа" }]] }
      ],
      secciones: [
        {
          id: "es5-incontable",
          titulo: "Quiero agua — без артикля",
          texto: "Когда говорят о веществе вообще или о неопределённом количестве («воды», «мяса»), артикль **не нужен**: **Quiero agua**, **No como carne**, **¿Hay pan?**\nТо, что можно сосчитать, по одной штуке — с **un / una**: **una manzana**, **un huevo**. Много штук вообще — во мн. ч. без артикля: **Quiero manzanas**.",
          comparacion: "Русское «хочу воды», «нет хлеба» — та же идея: какое-то количество, а не конкретная вода.",
          ejemplos: [
            { es: "Quiero agua, por favor.", ru: "Дайте воды, пожалуйста." },
            { es: "No como carne.", ru: "Я не ем мясо.", por: "Мясо вообще — без артикля." },
            { es: "Quiero una manzana y dos peras.", ru: "Я хочу одно яблоко и две груши." }
          ],
          errores: [
            { mal: "Quiero el agua.", bien: "Quiero agua.", por: "Просто «воды», любой — без артикля." }
          ],
          chequeo: [
            { pide: "¿Hay ___ pan en casa?", opciones: ["—", "el", "los"], ok: "—", por: "**¿Hay pan?** — без артикля: есть ли хлеб вообще." }
          ]
        },
        {
          id: "es5-conocido",
          titulo: "El agua está fría — с артиклем",
          texto: "Артикль **el / la** нужен, когда речь о **конкретной, известной** вещи: **El agua está fría** — вода (вот эта, которую пьём) холодная. **La tortilla de Lucía está muy buena.**\nИ после **gustar**: **Me gusta el café** (урок 4) — кофе как вид, «вообще», но с артиклем.",
          destacado: "**Quiero café** — какой-то кофе. **El café está frío** — вот этот кофе. **Me gusta el café** — кофе вообще, с **gustar**.",
          ejemplos: [
            { es: "La leche está en la nevera.", ru: "Молоко в холодильнике.", por: "Конкретное молоко — **la leche**." },
            { es: "Me gusta mucho el chocolate.", ru: "Я очень люблю шоколад." }
          ],
          chequeo: [
            { pide: "___ agua está muy fría.", opciones: ["El", "—", "Un"], ok: "El", por: "Конкретная вода — **el agua**." }
          ]
        },
        {
          id: "es5-genero-comida",
          titulo: "Род: el agua, la leche, el azúcar",
          texto: "Род испанских слов часто не совпадает с русским: **la leche** (молоко, ср. р.), **el azúcar** (сахар), **la sal** (соль), **el té**, **el café**.\n**agua** — женского рода, но перед ударной **a** вместо **la** говорят **el**: **el agua fría**, во мн. ч. — **las aguas**. Прилагательное — женского рода: **el agua está fría**, **mucha agua**.",
          ejemplos: [
            { es: "El agua está fría.", ru: "Вода холодная.", por: "**el**, но **fría** — ж. р." }
          ],
          ojo: "Запоминай существительные сразу с артиклем: **la leche**, **el azúcar**, **la sal**. Так род не потеряется."
        }
      ],
      vocab: ["fruta", "manzana", "pera", "naranja", "plátano", "uva", "fresa", "sandía", "limón", "verdura", "tomate", "patata", "lechuga", "cebolla", "ajo",
        "carne", "pollo", "pescado", "jamón", "huevo", "pasta", "ensalada", "tortilla", "bocadillo", "mantequilla", "yogur", "aceite", "sal", "azúcar",
        "galleta", "chocolate", "tarta", "helado", "zumo", "refresco", "bebida", "gas", "con", "sin", "frío"],
      ampliacion: {
        titulo: "Ещё на рынке",
        intro: "Ещё несколько слов для рынка и кухни. Они не входят в проверку урока. Морепродукты в Испании едят очень часто: **las gambas**, **el marisco**.",
        vocab: ["marisco", "gamba", "pimiento", "melocotón", "melón"]
      }
    },
    {
      id: "es5m4", n: 4, tipo: "leccion",
      titulo: "Mucho, poco, demasiado",
      resumen: "mucho / mucha / muchos / muchas; poco, demasiado, algo, nada; un kilo de…",
      intro: "«Много», «мало», «слишком много» перед существительным меняются по роду и числу: **mucha agua**, **muchos tomates**. А количество — «килограмм», «бутылка», «кусок» — всегда идёт с **de**: **un kilo de naranjas**.",
      tablas: [
        { titulo: "Mucho, poco, demasiado", encabezados: ["м. р.", "ж. р."], filas: [
          [{ es: "mucho pan", ru: "много хлеба" }, { es: "mucha agua", ru: "много воды" }],
          [{ es: "muchos tomates", ru: "много помидоров" }, { es: "muchas manzanas", ru: "много яблок" }],
          [{ es: "poco dinero", ru: "мало денег" }, { es: "poca fruta", ru: "мало фруктов" }],
          [{ es: "demasiado chocolate", ru: "слишком много шоколада" }, { es: "demasiadas cosas", ru: "слишком много вещей" }]] },
        { titulo: "¿Cuánto? Un kilo de…", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "un kilo de naranjas", ru: "килограмм апельсинов" }, { es: "una botella de agua", ru: "бутылка воды" }],
          [{ es: "medio kilo de fresas", ru: "полкило клубники" }, { es: "un litro de leche", ru: "литр молока" }],
          [{ es: "cien gramos de jamón", ru: "сто граммов хамона" }, { es: "una lata de tomate", ru: "банка томатов" }],
          [{ es: "una docena de huevos", ru: "десяток (дюжина) яиц" }, { es: "un paquete de galletas", ru: "пачка печенья" }],
          [{ es: "una barra de pan", ru: "батон хлеба" }, { es: "un trozo de tarta", ru: "кусок торта" }]] }
      ],
      secciones: [
        {
          id: "es5-mucho",
          titulo: "Mucha agua, muchos tomates",
          texto: "Перед существительным **mucho** согласуется с ним, как прилагательное: **mucho** pan, **mucha** agua, **muchos** tomates, **muchas** manzanas.\nС глаголом **mucho** не меняется: **Trabajas mucho**, **Me gusta mucho**. А перед прилагательным — **muy** (урок 3): **muy caro**.",
          ejemplos: [
            { es: "En el mercado hay muchos tomates.", ru: "На рынке много помидоров." },
            { es: "Bebo mucha agua.", ru: "Я пью много воды.", por: "**agua** — ж. р.: **mucha**." },
            { es: "Las fresas son muy caras.", ru: "Клубника очень дорогая.", por: "Перед прилагательным — **muy**." }
          ],
          errores: [
            { mal: "Hay muchas tomates.", bien: "Hay muchos tomates.", por: "**tomate** — м. р.: **muchos**." }
          ],
          chequeo: [
            { pide: "Tengo ___ hambre.", opciones: ["mucha", "mucho", "muchos"], ok: "mucha", por: "**hambre** — ж. р.: **mucha hambre**." }
          ]
        },
        {
          id: "es5-poco-demasiado",
          titulo: "Poco, demasiado, bastante",
          texto: "**poco** — «мало», **demasiado** — «слишком много». Перед существительным они тоже меняются: **poca** fruta, **pocos** amigos, **demasiada** sal, **demasiados** tomates.\nС глаголом и перед прилагательным не меняются: **Duermo poco**, **Es demasiado caro**.\n**bastante** — «достаточно, довольно много»: **Tengo bastante dinero**.",
          ejemplos: [
            { es: "Hay poca fruta en casa.", ru: "Дома мало фруктов." },
            { es: "Comes demasiado chocolate.", ru: "Ты ешь слишком много шоколада." },
            { es: "Es demasiado caro.", ru: "Это слишком дорого.", por: "Перед прилагательным — **demasiado**, не меняется." }
          ],
          mas: {
            titulo: "Un poco и poco",
            texto: "**un poco** — «немного» (это хорошо, хватает): **Hablo un poco de español**. **poco** — «мало» (это не хватает): **Hablo poco** — «я мало говорю». С существительным — **un poco de**: **un poco de agua** — «немного воды»."
          }
        },
        {
          id: "es5-algo-nada",
          titulo: "¿Algo más? — Nada, gracias",
          texto: "**algo** — «что-нибудь, что-то», **nada** — «ничего». **—¿Quieres algo? —No, nada, gracias.**\nС существительным — через **de**: **algo de comer** — «что-нибудь поесть», **nada de dinero** — «совсем нет денег».\nПри **nada** после глагола нужно **no**, как в уроке 4: **No quiero nada**.",
          ejemplos: [
            { es: "—¿Quieres algo? —No, nada, gracias.", ru: "— Хочешь что-нибудь? — Нет, ничего, спасибо." },
            { es: "No quiero nada.", ru: "Я ничего не хочу.", por: "**no** + глагол + **nada**, как по-русски «ничего не хочу»." }
          ]
        },
        {
          id: "es5-cantidades",
          titulo: "Un kilo de naranjas",
          texto: "После слова количества всегда стоит **de**, а артикля нет: **un kilo de naranjas**, **una botella de agua**, **un trozo de tarta**.\n«Пол» — **medio** (урок 4): **medio kilo de fresas**. «Сто граммов» — **cien gramos**.",
          comparacion: "Где в русском родительный падеж («бутылка воды»), в испанском — **de**: **una botella de agua**.",
          errores: [
            { mal: "Un kilo naranjas.", bien: "Un kilo de naranjas.", por: "Без **de** нельзя." },
            { mal: "Una botella del agua.", bien: "Una botella de agua.", por: "Артикля нет: просто **de**." }
          ],
          chequeo: [
            { pide: "Una barra ___ pan, por favor.", opciones: ["de", "del", "—"], ok: "de", por: "После количества — **de** без артикля." }
          ]
        }
      ],
      frases: [],
      vocab: ["poco", "demasiado", "algo", "suficiente", "dinero", "gramo", "litro", "docena", "paquete", "lata", "trozo", "barra", "botella"]
    },
    {
      id: "es5m5", n: 5, tipo: "leccion",
      titulo: "¿Cuánto cuesta?",
      resumen: "Числа от 100 до 1 000 000, цены в евро, cuesta и cuestan.",
      intro: "Цены, адреса, годы: нужны большие числа. Их немного, и они собираются из того, что ты уже знаешь: **doscientos cincuenta**, **mil doscientos**. А цена — это **euros con céntimos**: **tres euros con cincuenta**.",
      tablas: [
        { titulo: "Сотни", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "cien", ru: "100" }, { es: "ciento veinte", ru: "120" }],
          [{ es: "doscientos, doscientas", ru: "200" }, { es: "trescientos, trescientas", ru: "300" }],
          [{ es: "cuatrocientos", ru: "400" }, { es: "quinientos", ru: "500 (не «cincocientos»)" }],
          [{ es: "seiscientos", ru: "600" }, { es: "setecientos", ru: "700 (не «sietecientos»)" }],
          [{ es: "ochocientos", ru: "800" }, { es: "novecientos", ru: "900 (не «nuevecientos»)" }]] },
        { titulo: "Тысячи и миллион", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "mil", ru: "1.000 (без «un»)" }, { es: "dos mil", ru: "2.000" }],
          [{ es: "dos mil veintiséis", ru: "2.026" }, { es: "diez mil", ru: "10.000" }],
          [{ es: "cien mil", ru: "100.000" }, { es: "un millón", ru: "1.000.000" }],
          [{ es: "dos millones", ru: "2.000.000" }, { es: "un millón de personas", ru: "миллион человек" }]] },
        { titulo: "Цены", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "un euro", ru: "1 €" }, { es: "un euro con veinte", ru: "1,20 €" }],
          [{ es: "tres euros con cincuenta", ru: "3,50 € (или: tres cincuenta)" }, { es: "ochenta céntimos", ru: "0,80 €" }],
          [{ es: "doscientos cincuenta euros", ru: "250 €" }, { es: "veintiún euros", ru: "21 €" }]] }
      ],
      secciones: [
        {
          id: "es5-cien-ciento",
          titulo: "Cien и ciento",
          texto: "Ровно 100 — **cien**: **cien euros**, **cien mil**. Если за сотней идёт ещё число — **ciento**: **ciento uno**, **ciento veinte**, **ciento noventa y nueve**.\n**y** ставят только между десятками и единицами: **ciento treinta y cinco** (135). Между сотней и десятками **y** нет: **ciento veinte**, а не «ciento y veinte».",
          errores: [
            { mal: "Cuesta ciento euros.", bien: "Cuesta cien euros.", por: "Ровно сто — **cien**." },
            { mal: "Ciento y veinte.", bien: "Ciento veinte.", por: "После сотни **y** не ставят." }
          ],
          chequeo: [
            { pide: "120 €", opciones: ["ciento veinte euros", "cien veinte euros", "ciento y veinte euros"], ok: "ciento veinte euros", por: "За сотней ещё число — **ciento**." }
          ]
        },
        {
          id: "es5-cientos",
          titulo: "Doscientos, doscientas",
          texto: "Сотни от 200 до 900 согласуются с существительным: **doscientos euros**, но **doscientas personas**; **quinientos libros**, **quinientas palabras**.\nТри формы надо просто запомнить: **quinientos** (500), **setecientos** (700), **novecientos** (900).",
          ejemplos: [
            { es: "En el edificio viven doscientas personas.", ru: "В доме живут двести человек.", por: "**persona** — ж. р.: **doscientas**." },
            { es: "El ordenador cuesta quinientos euros.", ru: "Компьютер стоит пятьсот евро." }
          ],
          chequeo: [
            { pide: "300 casas", opciones: ["trescientas casas", "trescientos casas", "tres cientos casas"], ok: "trescientas casas", por: "**casa** — ж. р.: **trescientas**." }
          ]
        },
        {
          id: "es5-mil-millon",
          titulo: "Mil, un millón",
          texto: "1000 — **mil**, без «un»; **mil** не меняется: **dos mil**, **diez mil**. Годы читают так же: **dos mil veintiséis** (2026).\nМиллион — существительное: **un millón**, **dos millones**, а с существительным — через **de**: **un millón de personas**.\nНа письме испанцы отделяют тысячи точкой, а дробную часть — запятой: **1.500** — «тысяча пятьсот», **3,50 €** — «три евро пятьдесят».",
          errores: [
            { mal: "Un mil euros.", bien: "Mil euros.", por: "**mil** — без **un**." },
            { mal: "Un millón personas.", bien: "Un millón de personas.", por: "После **millón** — **de**." }
          ]
        },
        {
          id: "es5-precio",
          titulo: "¿Cuánto cuesta? — Tres euros con cincuenta",
          texto: "«Сколько стоит?» — **¿Cuánto cuesta?** (одна вещь) или **¿Cuánto cuestan?** (несколько вещей). Глагол **costar** меняет корень o → ue: **cuesta**, **cuestan**.\nЦена: **euros** + **con** + **céntimos**: **tres euros con cincuenta (céntimos)**. В разговоре часто короче: **tres cincuenta**.\nКогда пора платить за всё, спрашивают **¿Cuánto es?** — «Сколько с меня?».",
          ejemplos: [
            { es: "—¿Cuánto cuesta el pan? —Un euro con veinte.", ru: "— Сколько стоит хлеб? — Евро двадцать." },
            { es: "¿Cuánto cuestan las fresas?", ru: "Сколько стоит клубника?", por: "**fresas** — мн. ч.: **cuestan**." }
          ],
          errores: [
            { mal: "¿Cuánto cuesta las naranjas?", bien: "¿Cuánto cuestan las naranjas?", por: "Несколько вещей — **cuestan**." }
          ],
          ojo: "**un euro**, но **veintiún euros**: перед существительным **uno** теряет **-o**."
        }
      ],
      frases: ["FRE-085", "FRE-086"],
      vocab: ["ciento", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos", "mil", "millón",
        "euro", "céntimo", "precio", "costar", "billete", "moneda", "cambio"]
    },
    {
      id: "es5m6", n: 6, tipo: "leccion",
      titulo: "En la tienda y el mercado",
      resumen: "Магазины, ¿Me pone…?, Quería…, ¿Algo más?, платить наличными или картой.",
      intro: "В Испании продукты часто покупают на рынке и в маленьких магазинах: в булочной, мясной, фруктовой лавке. Разговор там почти всегда один и тот же. Выучи несколько формул — и ты сможешь купить что угодно.",
      tablas: [
        { titulo: "Tiendas", encabezados: ["Магазин", "Что там продают"], filas: [
          [{ es: "la panadería", ru: "булочная" }, { es: "el pan", ru: "хлеб" }],
          [{ es: "la carnicería", ru: "мясная лавка" }, { es: "la carne, el pollo", ru: "мясо, курица" }],
          [{ es: "la frutería", ru: "фруктовая лавка" }, { es: "la fruta, la verdura", ru: "фрукты, овощи" }],
          [{ es: "la pescadería", ru: "рыбная лавка" }, { es: "el pescado", ru: "рыба" }],
          [{ es: "el supermercado", ru: "супермаркет" }, { es: "de todo", ru: "всё" }],
          [{ es: "el centro comercial", ru: "торговый центр" }, { es: "muchas tiendas", ru: "много магазинов" }]] },
        { titulo: "Формулы", encabezados: ["Покупатель", "Продавец"], filas: [
          [{ es: "¿Me pone un kilo de…?", ru: "Дайте мне килограмм…" }, { es: "¿Qué le pongo?", ru: "Что вам дать?" }],
          [{ es: "Quería…", ru: "Я бы хотел(а)…" }, { es: "Aquí tiene.", ru: "Вот, пожалуйста." }],
          [{ es: "¿Cuánto cuesta?", ru: "Сколько стоит?" }, { es: "¿Algo más?", ru: "Что-нибудь ещё?" }],
          [{ es: "Nada más, gracias.", ru: "Больше ничего, спасибо." }, { es: "Son tres euros.", ru: "С вас три евро." }],
          [{ es: "¿Cuánto es?", ru: "Сколько с меня?" }, { es: "¿Efectivo o tarjeta?", ru: "Наличными или картой?" }]] }
      ],
      secciones: [
        {
          id: "es5-me-pone",
          titulo: "¿Me pone…?",
          texto: "Самая испанская просьба в магазине и в баре — **¿Me pone…?** (буквально «вы мне поставите…?», от **poner**): **¿Me pone un kilo de naranjas?** К продавцу обращаются на **usted**, поэтому **pone**. С другом — **¿Me pones…?**\nПродавец спрашивает **¿Qué le pongo?** — «Что вам дать?». **le** — «вам», это урок 7; пока просто узнавай фразу.",
          ejemplos: [
            { es: "¿Me pone medio kilo de fresas?", ru: "Дайте мне полкило клубники." },
            { es: "¿Me pone una barra de pan?", ru: "Дайте мне батон хлеба." }
          ]
        },
        {
          id: "es5-queria",
          titulo: "Quería…",
          texto: "**Quería** — «я бы хотел(а)»: это вежливее, чем **quiero**. Форма прошедшего времени, но здесь она просто смягчает просьбу, как русское «я бы хотел». Запомни её как готовую формулу: **Quería una barra de pan**.",
          ejemplos: [
            { es: "Quería un kilo de tomates.", ru: "Я бы хотел(а) килограмм помидоров." }
          ],
          ojo: "**quería** (я бы хотел) и **quiero** (я хочу) — одна и та же просьба. **Quería** звучит мягче, его любят в магазинах."
        },
        {
          id: "es5-algo-mas",
          titulo: "¿Algo más? — Nada más, gracias",
          texto: "Обычный разговор в магазине:\n· продавец: **¿Qué le pongo?**\n· ты: **¿Me pone…?** или **Quería…**\n· продавец: **Aquí tiene. ¿Algo más?**\n· ты: **Sí, …** или **Nada más, gracias. ¿Cuánto es?**\n· продавец: **Son… euros.**",
          comparacion: "**Aquí tiene** — «вот, пожалуйста», когда что-то даёшь. Его говорят и продавец, и покупатель, когда даёт деньги."
        },
        {
          id: "es5-pagar",
          titulo: "En efectivo o con tarjeta",
          texto: "Платить — **pagar**. Наличными — **en efectivo**, картой — **con tarjeta**: **¿Puedo pagar con tarjeta?** Платят в кассе — **en la caja**. Пакет — **una bolsa**; в Испании он обычно платный.\nПокупать — **comprar**, продавать — **vender**: **Compro pan en la panadería**, **En la frutería venden fruta y verdura**.",
          errores: [
            { mal: "Pago con efectivo.", bien: "Pago en efectivo.", por: "Наличными — **en efectivo**; картой — **con tarjeta**." }
          ],
          chequeo: [
            { pide: "¿Puedo pagar ___ tarjeta?", opciones: ["con", "en", "de"], ok: "con", por: "Картой — **con tarjeta**." }
          ]
        }
      ],
      frases: ["FRE-082", "FRE-087", "FRE-088", "FRE-089", "FRE-090", "FRE-091"],
      dialogos: ["DLE-020", "DLE-024"],
      vocab: ["panadería", "carnicería", "frutería", "pescadería", "centro comercial", "comprar", "vender", "pagar", "caja", "bolsa", "efectivo", "tarjeta", "cliente", "compra", "lista", "claro"]
    },
    {
      id: "es5m7", n: 7, tipo: "leccion",
      titulo: "La ropa y las tallas",
      resumen: "Одежда, цвета, размеры; llevar, probarse, el probador.",
      intro: "Одежда — ещё одна большая покупка. Нужны названия вещей, цвета из урока 3, размер и пара глаголов: **llevar** (носить) и **probarse** (примерять).",
      tablas: [
        { titulo: "La ropa", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "la camisa", ru: "рубашка" }, { es: "el abrigo", ru: "пальто" }],
          [{ es: "la camiseta", ru: "футболка" }, { es: "el jersey", ru: "свитер" }],
          [{ es: "el pantalón / los pantalones", ru: "брюки" }, { es: "la bufanda", ru: "шарф" }],
          [{ es: "la falda", ru: "юбка" }, { es: "la gorra", ru: "кепка" }],
          [{ es: "el vestido", ru: "платье" }, { es: "el calcetín", ru: "носок" }],
          [{ es: "la chaqueta", ru: "куртка, пиджак" }, { es: "el zapato", ru: "туфля, ботинок" }],
          [{ es: "la bota", ru: "сапог" }, { es: "la zapatilla", ru: "кроссовка; тапочка" }]] },
        { titulo: "Tallas y números", encabezados: ["Вопрос", "Ответ"], filas: [
          [{ es: "¿Qué talla tiene?", ru: "Какой у вас размер (одежды)?" }, { es: "La M. / La 38.", ru: "M. / 38-й." }],
          [{ es: "¿Qué número tiene?", ru: "Какой у вас размер обуви?" }, { es: "El 40.", ru: "40-й." }],
          [{ es: "pequeña, mediana, grande", ru: "S, M, L" }, { es: "¿Tiene una talla más grande?", ru: "У вас есть размер побольше?" }]] }
      ],
      secciones: [
        {
          id: "es5-llevar",
          titulo: "Llevo una camiseta roja",
          texto: "«Носить, быть одетым в» — **llevar**: **Hoy llevo una camiseta roja**, **¿Qué llevas?** Это правильный глагол на **-ar**.\nЦвет идёт после вещи и согласуется с ней (урок 3): **una falda negra**, **unos zapatos rojos**, **un jersey azul**. **rosa** и **naranja** не меняются: **una camisa naranja**.",
          ejemplos: [
            { es: "Hoy Ana lleva un vestido azul.", ru: "Сегодня Аня в синем платье." },
            { es: "Busco unos pantalones negros.", ru: "Я ищу чёрные брюки.", por: "**pantalones** — м. р., мн. ч.: **negros**." }
          ],
          chequeo: [
            { pide: "una falda ___", opciones: ["negra", "negro", "negras"], ok: "negra", por: "**falda** — ж. р., ед. ч.: **negra**." }
          ]
        },
        {
          id: "es5-talla",
          titulo: "¿Qué talla tiene?",
          texto: "Размер одежды — **la talla**: **la S, la M, la L** или числом: **la 38**. Размер обуви — **el número**: **el 40**.\nК продавцу и от продавца — на **usted**: **¿Qué talla tiene?** Другу — **¿Qué talla tienes?**\nИскать — **buscar**: **Busco un jersey**. Если мало: **¿Tiene una talla más grande?**",
          ejemplos: [
            { es: "—¿Qué número tiene? —El 39.", ru: "— Какой у вас размер обуви? — 39-й." },
            { es: "Es un poco pequeña. ¿Tiene una talla más grande?", ru: "Немного маловата. У вас есть размер побольше?" }
          ],
          errores: [
            { mal: "¿Qué número tiene de camiseta?", bien: "¿Qué talla tiene?", por: "Одежда — **talla**, обувь — **número**." }
          ]
        },
        {
          id: "es5-probarse",
          titulo: "Probarse: ¿puedo probarme…?",
          texto: "«Примерять» — **probarse**, с местоимением, как глаголы из урока 4: **me pruebo**, **te pruebas**, **se prueba**… Корень меняется o → ue.\nПосле **poder**, **querer** местоимение прирастает к инфинитиву: **¿Puedo probarme esta camisa?** Примерочная — **el probador**.\nБез **se** — **probar**, «пробовать» еду: **Quiero probar la tortilla**.",
          comparacion: "Как «примерять» и «пробовать» в русском — два разных слова: **probarse** и **probar**.",
          ejemplos: [
            { es: "¿Puedo probarme esta camisa?", ru: "Можно примерить эту рубашку?" },
            { es: "Ana se prueba el vestido en el probador.", ru: "Аня примеряет платье в примерочной." }
          ],
          chequeo: [
            { pide: "¿Puedo ___ este jersey?", opciones: ["probarme", "me probar", "probar me"], ok: "probarme", por: "Местоимение прирастает к инфинитиву: **probarme**." }
          ]
        }
      ],
      frases: ["FRE-092", "FRE-093"],
      vocab: ["camisa", "camiseta", "pantalón", "falda", "vestido", "chaqueta", "abrigo", "jersey", "zapatilla", "bota", "calcetín", "gorra", "bufanda", "talla", "mediano",
        "llevar", "buscar", "probar", "probarse", "probador"],
      ampliacion: {
        titulo: "Ещё о покупках",
        intro: "Ещё два слова для магазина. Они не входят в проверку урока. **Las rebajas** — большие распродажи в январе и в июле, их ждёт вся Испания.",
        vocab: ["rebajas", "vendedor"]
      }
    },
    {
      id: "es5m8", n: 8, tipo: "leccion",
      titulo: "¿La camiseta? La compro",
      resumen: "lo, la, los, las вместо уже названной вещи.",
      intro: "По-русски можно ответить без дополнения: «— Купишь футболку? — Куплю». По-испански так нельзя: вещь, о которой уже говорили, заменяют местоимением **lo, la, los, las**: **—¿Compras la camiseta? —Sí, la compro.**",
      tablas: [
        { titulo: "Lo, la, los, las", encabezados: ["Вещь", "Местоимение"], filas: [
          [{ es: "el pan", ru: "м. р., ед. ч." }, { es: "Lo compro.", ru: "Я его покупаю." }],
          [{ es: "la leche", ru: "ж. р., ед. ч." }, { es: "La compro.", ru: "Я его покупаю." }],
          [{ es: "los zapatos", ru: "м. р., мн. ч." }, { es: "Los compro.", ru: "Я их покупаю." }],
          [{ es: "las fresas", ru: "ж. р., мн. ч." }, { es: "Las compro.", ru: "Я её покупаю." }]] },
        { titulo: "Где стоит", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "La compro.", ru: "перед глаголом" }, { es: "No la compro.", ru: "с no: no + la + глагол" }],
          [{ es: "Quiero comprarla.", ru: "с инфинитивом: в конце" }, { es: "La quiero comprar.", ru: "или перед первым глаголом" }]] }
      ],
      secciones: [
        {
          id: "es5-od-que-es",
          titulo: "Вещь уже назвали — нужно местоимение",
          texto: "Если вещь уже прозвучала, второй раз её не повторяют, а заменяют на **lo, la, los, las**. Пропустить совсем, как в русском «— Купишь? — Куплю», нельзя: **—¿Compras el pan? —Sí, lo compro.**",
          comparacion: "Как русское «его, её, их»: **lo compro** — «покупаю его». Только в испанском оно обязательно.",
          ejemplos: [
            { es: "—¿Tienes el libro? —Sí, lo tengo.", ru: "— Книга у тебя? — Да, у меня." },
            { es: "—¿Quieres la tortilla? —No, no la quiero.", ru: "— Хочешь тортилью? — Нет, не хочу." }
          ],
          errores: [
            { mal: "¿La camiseta? Compro.", bien: "¿La camiseta? La compro.", por: "Вещь уже названа — нужно **la**." }
          ]
        },
        {
          id: "es5-od-concordancia",
          titulo: "Род и число — как у вещи",
          texto: "Местоимение берёт род и число **вещи**, а не того, кто говорит: **el pan** → **lo**, **la leche** → **la**, **los zapatos** → **los**, **las fresas** → **las**.\nСмотри на испанский род, а не на русский: **la leche** (молоко — оно) → **la**; **las fresas** (клубника — она) → **las**.",
          errores: [
            { mal: "¿La falda? Lo compro.", bien: "¿La falda? La compro.", por: "**la falda** — ж. р.: **la**." }
          ],
          chequeo: [
            { pide: "¿Los zapatos? ___ quiero negros.", opciones: ["Los", "Las", "Lo"], ok: "Los", por: "**los zapatos** — м. р., мн. ч.: **los**." }
          ]
        },
        {
          id: "es5-od-lugar",
          titulo: "Перед глаголом или в конце инфинитива",
          texto: "Обычно местоимение стоит **перед** спрягаемым глаголом: **La compro**, **No la compro** (**no** — ещё раньше).\nС инфинитивом (после **quiero**, **puedo**, **tengo que**…) есть два варианта, оба правильные:\n· в конце инфинитива, одним словом: **Quiero comprarla**;\n· перед первым глаголом: **La quiero comprar**.",
          destacado: "**Quiero comprarla** = **La quiero comprar**. Нельзя: «Quiero comprar la», «Compro la».",
          errores: [
            { mal: "Quiero comprar lo.", bien: "Quiero comprarlo.", por: "С инфинитивом — одним словом: **comprarlo**." },
            { mal: "Compro la.", bien: "La compro.", por: "Перед спрягаемым глаголом: **la compro**." }
          ],
          chequeo: [
            { pide: "¿El pescado? Quiero ___.", opciones: ["probarlo", "probar lo", "lo probar"], ok: "probarlo", por: "С инфинитивом — в конце, одним словом." }
          ]
        }
      ],
      dialogos: ["DLE-022"],
      vocab: ["lo", "la", "los", "las"]
    },
    {
      id: "es5m9", n: 9, tipo: "leccion",
      titulo: "En el bar y en el restaurante",
      resumen: "Меню дня, de primero / de segundo / de postre, para mí, la cuenta.",
      intro: "Испанцы много едят вне дома. В обед почти в каждом ресторане есть **menú del día** — комплексный обед: первое, второе, десерт, хлеб и напиток за одну цену. А в баре заказывают кофе и **tapas** — маленькие закуски.",
      tablas: [
        { titulo: "El menú del día", encabezados: ["Что", "Например"], filas: [
          [{ es: "de primero", ru: "на первое" }, { es: "ensalada, sopa, pasta", ru: "" }],
          [{ es: "de segundo", ru: "на второе" }, { es: "pollo, pescado, carne", ru: "" }],
          [{ es: "de postre", ru: "на десерт" }, { es: "fruta, helado, tarta", ru: "" }],
          [{ es: "para beber", ru: "пить" }, { es: "agua, vino, cerveza", ru: "" }]] },
        { titulo: "En la mesa", encabezados: ["Испанский", "Испанский"], filas: [
          [{ es: "la cuchara", ru: "ложка" }, { es: "el vaso", ru: "стакан" }],
          [{ es: "el cuchillo", ru: "нож" }, { es: "la copa", ru: "бокал" }],
          [{ es: "el tenedor", ru: "вилка" }, { es: "el plato", ru: "тарелка; блюдо" }]] },
        { titulo: "Фразы", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "La carta, por favor.", ru: "Меню, пожалуйста." }, { es: "Para mí, el pollo.", ru: "Мне — курицу." }],
          [{ es: "¿Me pone un café con leche?", ru: "Можно кофе с молоком?" }, { es: "Una caña, por favor.", ru: "Маленькое пиво, пожалуйста." }],
          [{ es: "La cuenta, por favor.", ru: "Счёт, пожалуйста." }, { es: "¡Qué rico!", ru: "Как вкусно!" }]] }
      ],
      secciones: [
        {
          id: "es5-menu",
          titulo: "Carta и menú del día",
          texto: "**la carta** — меню ресторана со всеми блюдами. **el menú del día** — комплексный обед: **de primero** (первое), **de segundo** (второе), **de postre** (десерт), хлеб и напиток, всё за одну цену.\nОбедают в Испании поздно, с 14 до 16 часов (урок 4).",
          ejemplos: [
            { es: "De primero, ensalada; de segundo, pescado.", ru: "На первое салат, на второе рыба." },
            { es: "¿Quieren postre?", ru: "Десерт будете?" }
          ],
          ojo: "**la carta** — меню, **la cuenta** — счёт. Не перепутай!"
        },
        {
          id: "es5-pedir",
          titulo: "Para mí… — как заказать",
          texto: "Официант спрашивает **¿Qué quieren?** или **¿Qué van a tomar?** Отвечают так:\n· **Para mí, una ensalada** — «Мне салат» (**para mí** — «для меня»);\n· **De primero, sopa**;\n· **¿Me pone un café con leche?**\n**pedir** (урок 4) — «заказывать»: **Pido el pollo**.\n**mí** в **para mí** пишется со знаком ударения, а **mi** без него — «мой».",
          errores: [
            { mal: "Para mi, el pollo.", bien: "Para mí, el pollo.", por: "«Для меня» — **mí** со знаком ударения." }
          ],
          chequeo: [
            { pide: "Para ___, un café.", opciones: ["mí", "mi", "yo"], ok: "mí", por: "**para mí** — со знаком ударения." }
          ]
        },
        {
          id: "es5-cuenta",
          titulo: "La cuenta, por favor",
          texto: "В Испании счёт приносят, только когда его попросишь: **La cuenta, por favor**. Чаевые — **la propina** — не обязательны: обычно оставляют немного мелочи или около 5–10 %.\nО еде говорят: **¡Qué rico!** — «Как вкусно!», **está muy rico** — «очень вкусно». **rico** о еде — «вкусный», о человеке — «богатый».",
          ejemplos: [
            { es: "La tortilla está muy rica.", ru: "Тортилья очень вкусная.", por: "**tortilla** — ж. р.: **rica**." },
            { es: "La sopa está muy caliente.", ru: "Суп очень горячий." }
          ]
        },
        {
          id: "es5-bar",
          titulo: "En el bar",
          texto: "В баре: **un café solo** (чёрный), **un café con leche**, **una caña** (маленький бокал разливного пива), **un zumo**. К напитку часто дают **una tapa** — маленькую закуску.\nСтол на вечер можно заказать заранее — **reservar**: **Tengo una reserva para dos personas**.",
          ejemplos: [
            { es: "Una caña y una tapa de tortilla, por favor.", ru: "Маленькое пиво и кусочек тортильи, пожалуйста." },
            { es: "Tengo una reserva para dos personas.", ru: "У меня бронь на двоих." }
          ]
        }
      ],
      frases: ["FRE-094", "FRE-095", "FRE-096", "FRE-097"],
      dialogos: ["DLE-021", "DLE-023"],
      vocab: ["carta", "menú", "cuenta", "propina", "postre", "tapa", "caña", "copa", "cuchara", "cuchillo", "tenedor", "reserva", "reservar", "rico", "fresco", "caliente", "para", "mí", "solo"],
      ampliacion: {
        titulo: "Ещё за столом",
        intro: "Ещё три слова для ресторана. Они не входят в проверку урока. **Una ración** — большая тарелка закуски на компанию.",
        vocab: ["pimienta", "servilleta", "ración"]
      }
    },
    {
      id: "es5m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе: рынок, кафе, магазин одежды, ресторан и список покупок. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом. Для тренировки чтения выключи подсказку кириллицей и перевод.",
      dialogos: ["DLE-020", "DLE-021", "DLE-022", "DLE-023", "DLE-024"]
    },
    {
      id: "es5m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Покупка и обед в ресторане: разговор по ролям.",
      intro: "Две части. **Сначала разговор по ролям:** продавщица и официант говорят с тобой, а ты отвечаешь своими словами — приложение проверяет, понятно ли тебя (не нужно повторять слово в слово). **Потом напиши** по-испански (8–12 фраз) свою покупку на рынке или в магазине и обед в ресторане: что ты просишь, сколько, сколько это стоит и что ты заказываешь. Приложение отмечает, какие пункты ты уже включил в текст.",
      turnos: true,
      requisitos: [
        { txt: "Приветствие (hola, buenos días…)", rx: "(hola|buenos días|buenas tardes|buenas noches)" },
        { txt: "Просьба (¿me pone…?, quería…, quiero…)", rx: "(me pone|me pones|quería|quiero|para mí|prefiero)" },
        { txt: "Количество (un kilo de, una botella de…)", rx: "(kilo|litro|gramos|botella|docena|paquete|lata|trozo|barra|poco) de" },
        { txt: "Цена (¿cuánto cuesta?, … euros)", rx: "(cuánto (cuesta|cuestan|es)|euros?\\b|céntimos)" },
        { txt: "Надо (tengo que, hay que)", rx: "\\b(tengo|tienes|tiene|tenemos|tenéis|tienen|hay) que " },
        { txt: "Местоимение вместо вещи (lo, la, los, las)", rx: "(\\b(lo|la|los|las) (compro|quiero|tengo|pruebo|como|bebo|pago|llevo|necesito|prefiero)\\b|\\w(r|rse)(lo|la|los|las)\\b)" },
        { txt: "Ресторан (de primero, de segundo, de postre)", rx: "de (primero|segundo|postre)" },
        { txt: "Счёт (la cuenta, por favor)", rx: "la cuenta" }
      ],
      consejos: [
        { rx: "\\b(quiero|quieres|puedo|puedes|prefiero|necesito) (como|bebo|compro|pago|hablo|vivo|tomo|pruebo)\\b", msg: "После **quiero / puedo / prefiero / necesito** — инфинитив: **quiero comer**." },
        { rx: "\\btengo (comer|beber|comprar|pagar|trabajar|estudiar|cocinar)\\b", msg: "«Надо» — **tengo que** + инфинитив." },
        { rx: "\\bmucho (hambre|sed|agua|fruta|leche|carne)\\b", msg: "Эти слова женского рода: **mucha hambre**, **mucha agua**." },
        { rx: "\\bcuesta (las|los) ", msg: "Несколько вещей — **cuestan**: **¿Cuánto cuestan las fresas?**" },
        { rx: "\\b(comprar|probar|pagar|comer|beber|llevar) (lo|la|los|las)\\b", msg: "С инфинитивом — одним словом: **comprarlo**, **probarla**." },
        { rx: "\\b(kilo|litro|botella|docena|paquete|lata|trozo|barra) (naranjas|manzanas|agua|leche|pan|huevos|fresas|tomates|patatas|galletas|tarta|vino)\\b", msg: "После количества — **de**: **un kilo de naranjas**." },
        { rx: "\\bpara mi\\b", msg: "«Для меня» — **para mí**, со знаком ударения." },
        { rx: "\\bciento euros\\b", msg: "Ровно сто — **cien**: **cien euros**." },
        { rx: "\\bcon efectivo\\b", msg: "Наличными — **en efectivo**; картой — **con tarjeta**." },
        { rx: "\\bquiero (el|la) (agua|leche|pan|carne|café|fruta)\\b", msg: "Просто «хочу воды, хлеба» — без артикля: **quiero agua**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es5m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Хочу и надо, еда и количество, цены, магазин, одежда, lo / la, общение.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Хочу, могу, надо", tipos: ["conjugar", "verbo-infinitivo", "tener-hay", "hambre-sed", "cambia-persona"], n: 4 },
        { nombre: "Еда и количество", tipos: ["comida-escribir", "articulo-cero", "mucho", "mucho-escribir", "cantidad", "algo-nada"], n: 4 },
        { nombre: "Числа и цены", tipos: ["numero-oir", "numero-escribir", "cientos", "precio-oir", "precio-escribir", "cuesta"], n: 4 },
        { nombre: "Магазин, одежда и lo / la", tipos: ["tienda", "pagar", "ropa-escribir", "ropa-color", "talla", "pronombre-od", "pronombre-od-escribir", "pronombre-infinitivo", "error"], n: 4 },
        { nombre: "Общение", tipos: ["situacion-frase", "respuesta", "dictado-frase", "ordenar-frase", "menu"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs5Modulo(id) { return UNIDAD_ES_5.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_5 = UNIDAD_ES_5;
window.unidadEs5Modulo = unidadEs5Modulo;

/* ── Vocabulario: palabras → IDs ──
   Palabras con dos entradas: poco y demasiado (los que cambian: poca fruta), efectivo (el sustantivo
   «наличные»), helado (el sustantivo «мороженое»), mil (el numeral), segundo (el ordinal), solo (adjetivo:
   café solo); lo, la, los, las (los pronombres de objeto, no el artículo). */
const ES5_ID_FIJO = { "frío": "ESP-00657", "poco": "ESP-00120", "demasiado": "ESP-05191", "efectivo": "ESP-05452", "helado": "ESP-01432", "mil": "ESP-00461", "segundo": "ESP-00258", "solo": "ESP-05178",
  "lo": "ESP-00025", "la": "ESP-00599", "los": "ESP-00885", "las": "ESP-01288" };
function es5Id(w) {
  if (ES5_ID_FIJO[w]) return ES5_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es5Vocab(m) { return (m.vocab || []).map(es5Id).filter(Boolean); }
function es5Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es5Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U5 (sin las que ya enseñaron la U1 a la U4, ni la ampliación) */
function es5Objetivo() {
  const antes = new Set([].concat(typeof es1Objetivo === "function" ? es1Objetivo() : [], typeof es2Objetivo === "function" ? es2Objetivo() : [],
    typeof es3Objetivo === "function" ? es3Objetivo() : [], typeof es4Objetivo === "function" ? es4Objetivo() : []));
  const out = [];
  UNIDAD_ES_5.modulos.forEach(m => es5Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs5() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const lex = w => { const id = es5Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const llenar = (frase, ok) => ok === "—" ? frase.replace(/___ /, "").replace(/^(¿?)([a-zé])/, (x, a, b) => a + b.toUpperCase()) : frase.replace("___", ok);
  /* Elegir: [frase con ___, correcta, opciones, explicación, palabra?, módulo?, regla?] */
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES5-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase.replace(/\s*\([^)]*\)/g, ""), ok) : ok, explicacion: exp });
  });
  /* Frases enteras: [correcta, otras, explicación, módulo, regla] */
  const frases = (pref, tipo, lista, pide, dif, semilla) => lista.forEach(([ok, mal, exp, mod, regla], i) => {
    out.push({ id: "ES5-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: mod, regla, grupo: pref + "-" + i,
      pide, opciones: baraja([ok].concat(mal), i + semilla), correcta: ok, oir: ok, explicacion: exp });
  });
  /* Escribir la palabra que falta: [frase con ___, correcta, explicación, módulo, regla, palabra?] */
  const escribirFalta = (pref, tipo, lista, pide, semilla) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok);
    out.push({ id: "ES5-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  /* Escena con emoji: elegir la palabra y escribirla (con o sin artículo) */
  const escenas = (pref, tipo, lista, mod, regla, semilla) => lista.forEach(([escena, w, mal], i) => {
    const id = es5Id(w), e = id && lexEs(id), art = e && e.gender === "f" ? ["la", "una"] : ["el", "un"];
    out.push({ id: "ES5-" + pref + "-" + i, tipo, forma: "elegir", dificultad: 1, modulo: mod, regla, grupo: pref + "-" + w, lex: lex(w),
      pide: "Что это?", escena, opciones: baraja([w].concat(mal), i + semilla), correcta: w, oir: w, explicacion: "**" + w + "**" + (e ? " — «" + (e.senses[0] || {}).ru + "»." : "") });
    out.push({ id: "ES5-" + pref + "w-" + i, tipo: tipo + "-escribir", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + w, lex: lex(w),
      pide: "Что это? Напиши по-испански.", escena, esperadas: [w, art[0] + " " + w, art[1] + " " + w], idioma: "es", oir: art[0] + " " + w,
      explicacion: "**" + art[0] + " " + w + "**" + (e ? " — «" + (e.senses[0] || {}).ru + "»." : "") });
  });

  /* 1. Conjugar en presente (escribir). Las formas salen de data-verbos-es.js. */
  ES5_CONJ.forEach(([frase, inf, p, mod, regla], i) => {
    const f = es5Pres(inf, p); if (!f) return;
    const sola = frase.replace(/\s*\([^)]*\)\s*$/, "");
    const audio = sola.replace("___", f).replace(/^(¿?)([a-zé])/, (x, a, b) => a + b.toUpperCase());
    out.push({ id: "ES5-cj-" + i, tipo: "conjugar", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "cj-" + i, lex: lex(inf),
      pide: "Впиши глагол «" + inf + "» в нужной форме.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES5_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (ES5_CONJ_NOTA[inf] ? ". " + ES5_CONJ_NOTA[inf] : ".") });
  });
  /* 2. Cambia la persona (cadena) */
  ES5_CADENAS.forEach(([inf, resto, pasos, mod, regla], j) => {
    const fr = p => cap(es5Pres(inf, p)) + " " + resto;
    const P = ["yo", "tú", "él", "nosotros", "vosotros", "ellos"];
    out.push({ id: "ES5-cad-" + j, tipo: "cambia-persona", forma: "cadena", dificultad: 3, modulo: mod, regla, grupo: "cad-" + j, lex: lex(inf), oir: fr(pasos[pasos.length - 1]),
      pide: "Измени фразу шаг за шагом.", base: fr(0),
      pasos: pasos.map(p => ({ pide: "Теперь — " + P[p] + ".", esperadas: [fr(p), P[p].replace("él", "Él") + " " + es5Pres(inf, p) + " " + resto] })),
      explicacion: pasos.map(p => "**" + P[p] + "** → **" + es5Pres(inf, p) + "**").join(" · ") });
  });
  /* 3. Verbo + infinitivo; tener que / hay que; tengo hambre */
  frases("inf", "verbo-infinitivo", ES5_INFINITIVO, "Какая фраза правильная?", 2, 11);
  elegir("th", "tener-hay", ES5_TENER_HAY, 2, "es5-hay-que", "Tener que или hay que? Что подходит?", 2, 21);
  elegir("hs", "hambre-sed", ES5_HAMBRE, 2, "es5-hambre", "Что подходит?", 1, 31);
  /* 4. Comida: escenas; con artículo o sin él */
  escenas("co", "comida", ES5_COMIDA, 3, "es5-incontable", 41);
  elegir("ar", "articulo-cero", ES5_ARTICULO, 3, "es5-incontable", "Нужен артикль? («—» — без артикля)", 2, 51);
  /* 5. Mucho, poco, demasiado; cantidades */
  elegir("mu", "mucho", ES5_MUCHO, 4, "es5-mucho", "Что подходит?", 2, 61);
  escribirFalta("mw", "mucho-escribir", ES5_MUCHO_ESC, "Впиши mucho, mucha, muchos или muchas.", 71);
  for (let k = 0; k + 4 <= ES5_CANTIDADES.length; k += 4) {
    const set = ES5_CANTIDADES.slice(k, k + 4);
    out.push({ id: "ES5-ca-" + k, tipo: "cantidad", forma: "emparejar", dificultad: 1, modulo: 4, regla: "es5-cantidades", grupo: "ca-" + k,
      pide: "Соедини: сколько и чего.", pares: set.map(p => [p[0], p[1]]), explicacion: set.map(p => p[0] + " " + p[1]).join(" · ") });
  }
  elegir("cd", "cantidad", ES5_CANTIDAD_DE, 4, "es5-cantidades", "Что подходит?", 2, 81);
  elegir("an", "algo-nada", ES5_ALGO_NADA, 4, "es5-algo-nada", "Что подходит?", 2, 91);
  /* 6. Números grandes y precios */
  ES5_NUMEROS.forEach((n, i) => {
    const w = es5Num(n), dig = String(n), pt = dig.replace(/\B(?=(\d{3})+(?!\d))/g, "."), sp = dig.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    const opts = [pt];
    [n + 100, n * 2, Math.max(1, n - 50), n + 1000, Math.round(n / 2)].forEach(x => { const d = String(x).replace(/\B(?=(\d{3})+(?!\d))/g, "."); if (opts.indexOf(d) < 0 && opts.length < 4) opts.push(d); });
    out.push({ id: "ES5-no-" + i, tipo: "numero-oir", forma: "elegir", dificultad: 2, modulo: 5, regla: n >= 1000 ? "es5-mil-millon" : "es5-cientos", grupo: "no-" + n,
      pide: "Послушай: какое это число?", audio: w, opciones: baraja(opts, i + 101), correcta: pt, oir: w, explicacion: "**" + w + "** — " + pt + "." });
    out.push({ id: "ES5-nw-" + i, tipo: "numero-escribir", forma: "escribir", dificultad: 3, modulo: 5, regla: n >= 1000 ? "es5-mil-millon" : "es5-cientos", grupo: "no-" + n,
      pide: "Послушай и напиши число цифрами.", audio: w, esperadas: [dig, pt, sp], idioma: "es", oir: w, explicacion: "**" + w + "** — " + pt + "." });
  });
  ES5_CIENTOS.forEach(([cifra, ok, mal, exp], i) => {
    out.push({ id: "ES5-ci-" + i, tipo: "cientos", forma: "elegir", dificultad: 2, modulo: 5, regla: /cien\b|ciento/.test(ok) ? "es5-cien-ciento" : /mil|millón/.test(ok) ? "es5-mil-millon" : "es5-cientos", grupo: "ci-" + i,
      pide: "Как это сказать?", grande: cifra, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  ES5_PRECIOS.forEach(([cifra, texto, otras], i) => {
    const opts = [cifra];
    ES5_PRECIOS.forEach(([c2], k) => { if (opts.length < 4 && k !== i && (k * 7 + i) % 3 === 0 && opts.indexOf(c2) < 0) opts.push(c2); });
    ES5_PRECIOS.forEach(([c2]) => { if (opts.length < 4 && opts.indexOf(c2) < 0) opts.push(c2); });
    out.push({ id: "ES5-po-" + i, tipo: "precio-oir", forma: "elegir", dificultad: 2, modulo: 5, regla: "es5-precio", grupo: "pr-" + i,
      pide: "Послушай: сколько стоит?", audio: texto, opciones: baraja(opts, i + 121), correcta: cifra, oir: texto, explicacion: "**" + texto + "** — " + cifra + "." });
    out.push({ id: "ES5-pw-" + i, tipo: "precio-escribir", forma: "escribir", dificultad: 3, modulo: 5, regla: "es5-precio", grupo: "pr-" + i, lex: lex(/céntimo/.test(texto) ? "céntimo" : "euro"),
      pide: "Как сказать эту цену? Напиши словами.", grande: cifra, esperadas: [texto].concat(otras || []), idioma: "es", oir: texto, explicacion: cifra + " — **" + texto + "**." });
  });
  elegir("cu", "cuesta", ES5_CUESTA, 5, "es5-precio", "Cuesta или cuestan?", 1, 131);
  /* 7. Tiendas y pagar */
  for (let k = 0; k + 4 <= ES5_TIENDAS.length; k += 4) {
    const set = ES5_TIENDAS.slice(k, k + 4);
    out.push({ id: "ES5-ti-" + k, tipo: "tienda", forma: "emparejar", dificultad: 1, modulo: 6, regla: "es5-pagar", grupo: "ti-" + k, lex: set.map(p => es5Id(p[1])).filter(Boolean),
      pide: "Где это покупают? Соедини.", pares: set.map(p => [p[0], p[1]]), explicacion: set.map(p => p[0] + " → " + p[1]).join(" · ") });
  }
  elegir("dt", "tienda", ES5_DONDE_TIENDA, 6, "es5-pagar", "Что подходит?", 1, 141);
  elegir("pg", "pagar", ES5_PAGAR, 6, "es5-pagar", "Что подходит?", 2, 151);
  /* 8. Ropa: escenas, colores, tallas, probarse */
  escenas("ro", "ropa", ES5_ROPA, 7, "es5-llevar", 161);
  elegir("rc", "ropa-color", ES5_ROPA_COLOR, 7, "es5-llevar", "Что подходит?", 2, 171);
  elegir("rt", "talla", ES5_TALLA, 7, "es5-talla", "Что подходит?", 2, 181);
  /* 9. Lo, la, los, las: elegir, escribir, con infinitivo y orden */
  elegir("od", "pronombre-od", ES5_OD, 8, "es5-od-concordancia", "Какое местоимение нужно?", 2, 191);
  escribirFalta("ow", "pronombre-od-escribir", ES5_OD_ESC, "Ответь: впиши lo, la, los или las.", 201);
  ES5_OD_INF.forEach(([frase, ok, otra, exp], i) => {
    out.push({ id: "ES5-oi-" + i, tipo: "pronombre-infinitivo", forma: "escribir", dificultad: 3, modulo: 8, regla: "es5-od-lugar", grupo: "oi-" + i,
      pide: "Замени выделенное местоимением и напиши фразу.", grande: frase, esperadas: [ok, otra], idioma: "es", foco: true, formaCasi: false, oir: ok, explicacion: exp });
  });
  ES5_OD_ORDEN.forEach(([pal, otras, exp], i) => {
    let fichas = baraja(pal, i + 211);
    if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
    const frase = pal.join(" ");
    out.push({ id: "ES5-oo-" + i, tipo: "pronombre-orden", forma: "ordenar", dificultad: 2, modulo: 8, regla: "es5-od-lugar", grupo: "oo-" + i,
      pide: "Собери фразу: где стоит местоимение?", fichas, sep: " ", esperada: frase, esperadas: otras, oir: frase, explicacion: exp });
  });
  /* 10. Restaurante */
  escenas("me", "mesa", ES5_MESA, 9, "es5-menu", 221);
  elegir("mn", "menu", ES5_MENU, 9, "es5-menu", "Что подходит?", 2, 231);
  /* 11. Preguntas */
  ES5_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES5-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 241), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 12. Errores típicos: toca la palabra mal y escríbela bien */
  ES5_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES5-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 13. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es5Objetivo());
  const dictado = (w, id, mod, ampl) => {
    const e = lexEs(id);
    if (!e || e.propio || /\s/.test(w) || ["lo", "la", "los", "las", "mí", "para"].indexOf(w) >= 0 || out.some(x => x.id === "ES5-dic-" + id)) return;
    const x = { id: "ES5-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_5.modulos.forEach(m => {
    (m.vocab || []).forEach(w => { const id = es5Id(w); if (id && OBJ.has(id)) dictado(w, id, m.n); });
    if (m.ampliacion) m.ampliacion.vocab.forEach(w => { const id = es5Id(w); if (id) dictado(w, id, m.n, true); });
  });
  /* 14. Situaciones y respuestas; dictado y orden de las frases de la U5 */
  ES5_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES5-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 251), correcta: ok, oir: ok, explicacion: exp });
  });
  ES5_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES5-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 261), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 5) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_5.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES5-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 271);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES5-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });

  /* 15. Conversaciones por turnos (proyecto): se corrigen por intención con azSituacionEs */
  ES5_TURNOS.forEach((T, i) => {
    out.push({ id: "ES5-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: "🗣️ " + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* Conjugar: [frase con ___ (y la persona entre paréntesis si no se ve), infinitivo, persona 0–5, módulo, regla] */
const ES5_CONJ = [
  ["Yo ___ un café.", "querer", 0, 1, "es5-querer"],
  ["¿___ comer ahora? (tú)", "querer", 1, 1, "es5-querer"],
  ["Nosotros ___ aprender español.", "querer", 3, 1, "es5-querer"],
  ["Mis padres ___ vivir en el centro.", "querer", 5, 1, "es5-querer"],
  ["¿___ abrir la ventana? (yo)", "poder", 0, 1, "es5-poder"],
  ["¿___ repetir, por favor? (tú)", "poder", 1, 1, "es5-poder"],
  ["Hoy no ___ trabajar. (nosotros)", "poder", 3, 1, "es5-poder"],
  ["¿Vosotros ___ venir el sábado?", "poder", 4, 1, "es5-poder"],
  ["Ana no ___ venir hoy.", "poder", 2, 1, "es5-poder"],
  ["Yo ___ el té.", "preferir", 0, 1, "es5-preferir"],
  ["¿Qué ___, té o café? (tú)", "preferir", 1, 1, "es5-preferir"],
  ["Ana ___ leer en casa.", "preferir", 2, 1, "es5-preferir"],
  ["Nosotros ___ estudiar por la mañana.", "preferir", 3, 1, "es5-preferir"],
  ["Yo ___ una mesa nueva.", "necesitar", 0, 1, "es5-necesitar"],
  ["¿Qué ___? (tú)", "necesitar", 1, 1, "es5-necesitar"],
  ["Mis amigos ___ dormir.", "necesitar", 5, 1, "es5-necesitar"],
  ["Yo ___ que trabajar mañana.", "tener", 0, 2, "es5-tener-que"],
  ["¿___ que estudiar hoy? (tú)", "tener", 1, 2, "es5-tener-que"],
  ["Javier ___ que trabajar el sábado.", "tener", 2, 2, "es5-tener-que"],
  ["Vosotros ___ que escribir en español.", "tener", 4, 2, "es5-tener-que"],
  ["Nosotros ___ que cocinar hoy.", "tener", 3, 2, "es5-tener-que"],
  ["¿Cuánto ___ el pan?", "costar", 2, 5, "es5-precio"],
  ["¿Cuánto ___ las naranjas?", "costar", 5, 5, "es5-precio"],
  ["Las fresas ___ cuatro euros.", "costar", 5, 5, "es5-precio"],
  ["El café ___ un euro con veinte.", "costar", 2, 5, "es5-precio"],
  ["Yo ___ con tarjeta.", "pagar", 0, 6, "es5-pagar"],
  ["¿___ en efectivo? (vosotros)", "pagar", 4, 6, "es5-pagar"],
  ["Ana ___ pan en la panadería.", "comprar", 2, 6, "es5-pagar"],
  ["Nosotros ___ fruta en el mercado.", "comprar", 3, 6, "es5-pagar"],
  ["En la frutería ___ fruta y verdura. (ellos)", "vender", 5, 6, "es5-pagar"],
  ["Hoy ___ una camiseta roja. (yo)", "llevar", 0, 7, "es5-llevar"],
  ["¿Qué ___ hoy? (tú)", "llevar", 1, 7, "es5-llevar"],
  ["Yo ___ un jersey azul.", "buscar", 0, 7, "es5-talla"],
  ["Ana ___ la falda.", "probarse", 2, 7, "es5-probarse"],
  ["Yo ___ los zapatos.", "probarse", 0, 7, "es5-probarse"],
  ["¿___ el abrigo? (tú)", "probarse", 1, 7, "es5-probarse"]
];
const ES5_CONJ_NOTA = {
  querer: "e → ie, кроме nosotros и vosotros.", poder: "o → ue, кроме nosotros и vosotros.", preferir: "e → ie, кроме nosotros и vosotros.",
  costar: "o → ue: **cuesta**, **cuestan**.", probarse: "o → ue и местоимение: **me pruebo**, **te pruebas**…", tener: "**tener que** + инфинитив."
};
/* Cambia la persona: [infinitivo, resto de la frase, personas, módulo, regla] */
const ES5_CADENAS = [
  ["querer", "un café.", [1, 2, 3], 1, "es5-querer"],
  ["poder", "venir mañana.", [1, 2, 4], 1, "es5-poder"],
  ["preferir", "el té.", [2, 3, 5], 1, "es5-preferir"],
  ["tener", "que trabajar.", [1, 2, 5], 2, "es5-tener-que"],
  ["probarse", "la camisa.", [1, 2, 3], 7, "es5-probarse"]
];
/* Verbo + infinitivo: [correcta, otras, explicación, módulo, regla] */
const ES5_INFINITIVO = [
  ["Quiero comer.", ["Quiero como.", "Quiero que comer."], "После **querer** — инфинитив: **comer**.", 1, "es5-infinitivo"],
  ["¿Puedes hablar más despacio?", ["¿Puedes hablas más despacio?", "¿Puedes que hablar más despacio?"], "Спрягается только **puedes**.", 1, "es5-infinitivo"],
  ["Prefiero leer en casa.", ["Prefiero leo en casa.", "Prefiero a leer en casa."], "После **prefiero** — инфинитив.", 1, "es5-infinitivo"],
  ["Necesito dormir.", ["Necesito duermo.", "Necesito a dormir."], "После **necesito** — инфинитив.", 1, "es5-infinitivo"],
  ["Tengo que trabajar.", ["Tengo trabajar.", "Tengo de trabajar."], "**tener que** + инфинитив: **que** обязательно.", 2, "es5-tener-que"],
  ["Hay que estudiar mucho.", ["Hay estudiar mucho.", "Hay que estudio mucho."], "**hay que** + инфинитив.", 2, "es5-hay-que"],
  ["No tengo que trabajar hoy.", ["Tengo no que trabajar hoy.", "No tengo trabajar hoy."], "**no** — перед **tengo**.", 2, "es5-tener-que"],
  ["Queremos aprender español.", ["Quieremos aprender español.", "Queremos aprendemos español."], "**nosotros** → **queremos** + инфинитив.", 1, "es5-querer"]
];
/* Tener que / hay que: [frase, correcta, opciones, explicación] */
const ES5_TENER_HAY = [
  ["Mañana ___ que trabajar. (yo)", "tengo", ["tengo", "hay", "tiene"], "Обязанность конкретного человека — **tengo que**.", null, 2, "es5-tener-que"],
  ["En clase ___ que hablar español. (todos)", "hay", ["hay", "tengo", "tienes"], "Правило для всех — **hay que**."],
  ["Ana ___ que estudiar. (ella)", "tiene", ["tiene", "hay", "tienes"], "**Ana** = **ella** → **tiene que**.", null, 2, "es5-tener-que"],
  ["___ que estudiar todos los días. (todos)", "Hay", ["Hay", "Tengo", "Tiene"], "Совет для всех — **hay que**."],
  ["¿___ que cocinar hoy? (tú)", "Tienes", ["Tienes", "Hay", "Tiene"], "**tú** → **tienes que**.", null, 2, "es5-tener-que"],
  ["Nosotros ___ que estudiar mucho. (nosotros)", "tenemos", ["tenemos", "hay", "tienen"], "**nosotros** → **tenemos que**.", null, 2, "es5-tener-que"],
  ["Por la mañana ___ que llegar temprano. (todos)", "hay", ["hay", "tengo", "es"], "Правило для всех — **hay que**."]
];
const ES5_HAMBRE = [
  ["Quiero comer: tengo ___.", "hambre", ["hambre", "sed", "frío"], "Хочу есть — **tengo hambre**."],
  ["Quiero agua: tengo ___.", "sed", ["sed", "hambre", "calor"], "Хочу пить — **tengo sed**."],
  ["Tengo ___ hambre.", "mucha", ["mucha", "mucho", "muy"], "**hambre** — ж. р.: **mucha hambre**."],
  ["¿___ sed? (tú)", "Tienes", ["Tienes", "Estás", "Eres"], "С **sed** — глагол **tener**: **¿Tienes sed?**"],
  ["Ana ___ mucha sed.", "tiene", ["tiene", "está", "es"], "**tener sed** — «хотеть пить»."]
];
/* Escenas de comida: [emoji, palabra, distractores] */
const ES5_COMIDA = [
  ["🍎", "manzana", ["pera", "naranja"]], ["🍐", "pera", ["manzana", "limón"]], ["🍌", "plátano", ["uva", "fresa"]], ["🍇", "uva", ["fresa", "pera"]],
  ["🍓", "fresa", ["uva", "tomate"]], ["🍉", "sandía", ["limón", "naranja"]], ["🍋", "limón", ["naranja", "pera"]], ["🍅", "tomate", ["patata", "fresa"]],
  ["🥔", "patata", ["cebolla", "tomate"]], ["🧅", "cebolla", ["ajo", "patata"]], ["🧄", "ajo", ["cebolla", "huevo"]], ["🥬", "lechuga", ["ensalada", "verdura"]],
  ["🥩", "carne", ["pollo", "pescado"]], ["🍗", "pollo", ["carne", "huevo"]], ["🐟", "pescado", ["pollo", "carne"]], ["🥚", "huevo", ["queso", "pan"]],
  ["🧈", "mantequilla", ["queso", "aceite"]], ["🍫", "chocolate", ["galleta", "tarta"]], ["🍰", "tarta", ["helado", "galleta"]], ["🍦", "helado", ["tarta", "chocolate"]],
  ["🍪", "galleta", ["tarta", "pan"]], ["🥗", "ensalada", ["lechuga", "sopa"]], ["🍝", "pasta", ["arroz", "sopa"]], ["🧃", "zumo", ["refresco", "leche"]],
  ["🥪", "bocadillo", ["pan", "tarta"]], ["🧂", "sal", ["azúcar", "aceite"]]
];
/* ¿Con artículo o sin él?: [frase, correcta («—» = sin artículo), opciones, explicación] */
const ES5_ARTICULO = [
  ["Quiero ___ agua, por favor.", "—", ["—", "el", "un"], "Просто воды, любой — без артикля: **Quiero agua**."],
  ["___ agua está muy fría.", "El", ["El", "—", "Un"], "Конкретная вода — **el agua** (перед ударной **a** — **el**)."],
  ["No como ___ carne.", "—", ["—", "la", "una"], "Мясо вообще — без артикля."],
  ["Me gusta ___ café.", "el", ["el", "—", "un"], "После **gustar** — с артиклем: **me gusta el café**."],
  ["¿Hay ___ pan en casa?", "—", ["—", "el", "los"], "Есть ли хлеб вообще — без артикля."],
  ["Quiero ___ manzana y dos peras.", "una", ["una", "—", "uno"], "Одно яблоко — его можно сосчитать: **una manzana**."],
  ["___ leche está en la nevera.", "La", ["La", "—", "Una"], "Конкретное молоко — **la leche**."],
  ["Bebo ___ leche todos los días.", "—", ["—", "una", "unas"], "Молоко вообще — без артикля."],
  ["___ sal está en la mesa.", "La", ["La", "El", "—"], "**sal** — ж. р., конкретная: **la sal**."],
  ["No hay ___ leche.", "—", ["—", "la", "una"], "После **no hay** — без артикля."],
  ["___ tortilla de Lucía está muy buena.", "La", ["La", "—", "Una"], "Конкретная тортилья — **la**."],
  ["Me encanta ___ chocolate.", "el", ["el", "—", "un"], "После **encantar** — как после **gustar**: **el chocolate**."]
];
/* Mucho, poco, demasiado: [frase, correcta, opciones, explicación, palabra?, módulo?] */
const ES5_MUCHO = [
  ["Hay ___ manzanas.", "muchas", ["muchas", "muchos", "mucho"], "**manzanas** — ж. р., мн. ч.: **muchas**."],
  ["Bebo ___ agua.", "mucha", ["mucha", "mucho", "muchas"], "**agua** — ж. р. (хоть и **el agua**): **mucha agua**."],
  ["En el mercado hay ___ tomates.", "muchos", ["muchos", "muchas", "mucho"], "**tomates** — м. р., мн. ч.: **muchos**."],
  ["Comes ___ pan.", "mucho", ["mucho", "mucha", "muchos"], "**pan** — м. р., ед. ч.: **mucho**."],
  ["Trabajas ___.", "mucho", ["mucho", "mucha", "muchos"], "С глаголом **mucho** не меняется."],
  ["Las fresas son ___ caras.", "muy", ["muy", "mucho", "muchas"], "Перед прилагательным — **muy**."],
  ["Hay ___ fruta en casa.", "poca", ["poca", "poco", "pocas"], "**fruta** — ж. р.: **poca**."],
  ["Tengo ___ amigos aquí.", "pocos", ["pocos", "pocas", "poco"], "**amigos** — м. р., мн. ч.: **pocos**."],
  ["Duermo ___.", "poco", ["poco", "pocos", "poca"], "С глаголом **poco** не меняется."],
  ["Comes ___ chocolate.", "demasiado", ["demasiado", "demasiada", "demasiados"], "**chocolate** — м. р.: **demasiado**."],
  ["Hay ___ cosas en la mesa.", "demasiadas", ["demasiadas", "demasiados", "demasiado"], "**cosas** — ж. р., мн. ч.: **demasiadas**."],
  ["Es ___ caro.", "demasiado", ["demasiado", "demasiada", "demasiados"], "Перед прилагательным **demasiado** не меняется."]
];
const ES5_MUCHO_ESC = [
  ["En la nevera hay ___ fruta.", "mucha", "**fruta** — ж. р.: **mucha**.", 4, "es5-mucho"],
  ["Tengo ___ libros.", "muchos", "**libros** — м. р., мн. ч.: **muchos**.", 4, "es5-mucho"],
  ["No bebo ___ café.", "mucho", "**café** — м. р.: **mucho**.", 4, "es5-mucho"],
  ["Hay ___ personas en el mercado.", "muchas", "**personas** — ж. р., мн. ч.: **muchas**.", 4, "es5-mucho"],
  ["Tengo ___ sed.", "mucha", "**sed** — ж. р.: **mucha sed**.", 4, "es5-mucho"]
];
/* Cantidades (unir): [cantidad, producto] de 4 en 4 */
const ES5_CANTIDADES = [
  ["una botella de", "agua"], ["una barra de", "pan"], ["una docena de", "huevos"], ["una lata de", "tomate"],
  ["un kilo de", "naranjas"], ["un litro de", "leche"], ["un paquete de", "galletas"], ["un trozo de", "tarta"]
];
const ES5_CANTIDAD_DE = [
  ["Un kilo ___ manzanas, por favor.", "de", ["de", "—", "del"], "После количества — **de**, без артикля."],
  ["Quería una botella ___ agua.", "de", ["de", "—", "del"], "**una botella de agua**."],
  ["¿Quieres un poco ___ leche?", "de", ["de", "—", "la"], "**un poco de** + существительное."],
  ["Una ___ de pan, por favor.", "barra", ["barra", "botella", "lata"], "Хлеб — **una barra de pan**."],
  ["Una ___ de huevos.", "docena", ["docena", "barra", "botella"], "12 яиц — **una docena de huevos**."],
  ["Cien ___ de jamón.", "gramos", ["gramos", "litros", "botellas"], "Хамон весят: **cien gramos**."],
  ["Medio ___ de fresas.", "kilo", ["kilo", "litro", "paquete"], "Полкило — **medio kilo**."]
];
const ES5_ALGO_NADA = [
  ["—¿Quieres ___? —No, nada, gracias.", "algo", ["algo", "nada", "mucho"], "«Что-нибудь» — **algo**."],
  ["No quiero ___, gracias.", "nada", ["nada", "algo", "poco"], "**no** + глагол + **nada** — «ничего не хочу»."],
  ["¿Hay ___ de comer?", "algo", ["algo", "nada", "mucho"], "«Что-нибудь поесть» — **algo de comer**."],
  ["—¿Algo más? —No, ___ más, gracias.", "nada", ["nada", "algo", "mucho"], "**Nada más** — «больше ничего»."]
];
/* Números para oír y escribir */
const ES5_NUMEROS = [101, 115, 150, 200, 250, 300, 365, 400, 500, 555, 600, 700, 750, 800, 900, 999, 1000, 1500, 2000, 2026, 10000, 15000, 100000, 500000, 1000000, 2500000];
/* Cien, ciento, doscientas…: [cifra, correcta, otras, explicación] */
const ES5_CIENTOS = [
  ["100 €", "cien euros", ["ciento euros", "un cien euros"], "Ровно сто — **cien**."],
  ["120 €", "ciento veinte euros", ["cien veinte euros", "ciento y veinte euros"], "За сотней ещё число — **ciento**, без **y**."],
  ["200 personas", "doscientas personas", ["doscientos personas", "dos cientos personas"], "**persona** — ж. р.: **doscientas**."],
  ["300 €", "trescientos euros", ["trescientas euros", "tres cientos euros"], "**euro** — м. р.: **trescientos**."],
  ["500 casas", "quinientas casas", ["quinientos casas", "cincocientas casas"], "500 — **quinientos / quinientas**; **casa** — ж. р."],
  ["700 libros", "setecientos libros", ["sietecientos libros", "setecientas libros"], "700 — **setecientos**."],
  ["900 palabras", "novecientas palabras", ["nuevecientas palabras", "novecientos palabras"], "900 — **novecientos / novecientas**; **palabra** — ж. р."],
  ["1.000 €", "mil euros", ["un mil euros", "mil de euros"], "**mil** — без **un**."],
  ["2.000 libros", "dos mil libros", ["dos mils libros", "dos mil de libros"], "**mil** не меняется: **dos mil**."],
  ["1.000.000 de personas", "un millón de personas", ["un millón personas", "millón de personas"], "**un millón de** + существительное."]
];
/* Precios: [cifra, cómo se dice, otras formas que valen] */
const ES5_PRECIOS = [
  ["1 €", "un euro", []],
  ["1,20 €", "un euro con veinte", ["un euro veinte", "un euro con veinte céntimos"]],
  ["3,50 €", "tres euros con cincuenta", ["tres cincuenta", "tres euros cincuenta", "tres euros con cincuenta céntimos"]],
  ["0,80 €", "ochenta céntimos", []],
  ["15 €", "quince euros", []],
  ["2,99 €", "dos euros con noventa y nueve", ["dos noventa y nueve", "dos euros noventa y nueve", "dos euros con noventa y nueve céntimos"]],
  ["12,50 €", "doce euros con cincuenta", ["doce cincuenta", "doce euros cincuenta", "doce euros con cincuenta céntimos"]],
  ["21 €", "veintiún euros", []],
  ["100 €", "cien euros", []],
  ["250 €", "doscientos cincuenta euros", []],
  ["4,75 €", "cuatro euros con setenta y cinco", ["cuatro setenta y cinco", "cuatro euros setenta y cinco", "cuatro euros con setenta y cinco céntimos"]]
];
const ES5_CUESTA = [
  ["¿Cuánto ___ las fresas?", "cuestan", ["cuestan", "cuesta"], "**fresas** — мн. ч.: **cuestan**."],
  ["¿Cuánto ___ el pan?", "cuesta", ["cuesta", "cuestan"], "**el pan** — ед. ч.: **cuesta**."],
  ["Las peras ___ dos euros el kilo.", "cuestan", ["cuestan", "cuesta"], "**peras** — мн. ч.: **cuestan**."],
  ["La tarta ___ quince euros.", "cuesta", ["cuesta", "cuestan"], "**tarta** — ед. ч.: **cuesta**."],
  ["¿Cuánto ___ los huevos?", "cuestan", ["cuestan", "cuesta"], "**huevos** — мн. ч.: **cuestan**."]
];
/* Tiendas (unir): [producto, tienda] */
const ES5_TIENDAS = [["pan", "panadería"], ["carne", "carnicería"], ["fruta", "frutería"], ["pescado", "pescadería"]];
const ES5_DONDE_TIENDA = [
  ["Compro pan en la ___.", "panadería", ["panadería", "carnicería", "pescadería"], "Хлеб — в **panadería**."],
  ["Compro pollo en la ___.", "carnicería", ["carnicería", "frutería", "panadería"], "Курица — в **carnicería**."],
  ["Compro naranjas en la ___.", "frutería", ["frutería", "pescadería", "carnicería"], "Апельсины — во **frutería**."],
  ["Compro pescado en la ___.", "pescadería", ["pescadería", "panadería", "frutería"], "Рыба — в **pescadería**."],
  ["En el ___ comercial hay muchas tiendas.", "centro", ["centro", "mercado", "banco"], "**el centro comercial** — торговый центр."]
];
const ES5_PAGAR = [
  ["¿Puedo pagar ___ tarjeta?", "con", ["con", "en", "de"], "Картой — **con tarjeta**."],
  ["Pago ___ efectivo.", "en", ["en", "con", "de"], "Наличными — **en efectivo**."],
  ["Hay que pagar en la ___.", "caja", ["caja", "bolsa", "lista"], "Платят в кассе — **en la caja**."],
  ["En la frutería ___ fruta y verdura.", "venden", ["venden", "compran", "pagan"], "Продают — **venden**."],
  ["¿Me pone una ___? —Sí, son diez céntimos.", "bolsa", ["bolsa", "caja", "tarjeta"], "Пакет — **una bolsa**; он платный."]
];
/* Escenas de ropa */
const ES5_ROPA = [
  ["👕", "camiseta", ["camisa", "vestido"]], ["👔", "camisa", ["camiseta", "chaqueta"]], ["👖", "pantalón", ["falda", "calcetín"]], ["👗", "vestido", ["falda", "abrigo"]],
  ["🧥", "abrigo", ["jersey", "vestido"]], ["🧣", "bufanda", ["gorra", "calcetín"]], ["🧦", "calcetín", ["zapato", "bufanda"]], ["👟", "zapatilla", ["bota", "zapato"]],
  ["👢", "bota", ["zapatilla", "calcetín"]], ["🧢", "gorra", ["bufanda", "camiseta"]], ["👞", "zapato", ["bota", "zapatilla"]]
];
const ES5_ROPA_COLOR = [
  ["una falda ___", "negra", ["negra", "negro", "negras"], "**falda** — ж. р., ед. ч.: **negra**."],
  ["unos zapatos ___", "rojos", ["rojos", "roja", "rojo"], "**zapatos** — м. р., мн. ч.: **rojos**."],
  ["un jersey ___", "azul", ["azul", "azula", "azules"], "**azul** не меняется по роду: **un jersey azul**."],
  ["unas botas ___", "blancas", ["blancas", "blancos", "blanca"], "**botas** — ж. р., мн. ч.: **blancas**."],
  ["una camiseta ___", "verde", ["verde", "verda", "verdes"], "**verde** не меняется по роду."],
  ["unos pantalones ___", "grises", ["grises", "gris", "grisas"], "Мн. ч. от **gris** — **grises**."],
  ["una camisa ___", "naranja", ["naranja", "naranjas", "naranjo"], "**naranja** как цвет не меняется (урок 3)."]
];
const ES5_TALLA = [
  ["—¿Qué ___ tiene? —La M.", "talla", ["talla", "número", "precio"], "Размер одежды — **talla**."],
  ["—¿Qué ___ tiene de zapato? —El 39.", "número", ["número", "talla", "precio"], "Размер обуви — **número**."],
  ["Hoy Ana ___ un vestido azul.", "lleva", ["lleva", "llevo", "llevan"], "**Ana** → **lleva**."],
  ["Es un poco pequeña. ¿Tiene una talla más ___?", "grande", ["grande", "pequeña", "cara"], "Мало — нужен размер побольше: **más grande**."],
  ["¿Puedo ___ esta camisa?", "probarme", ["probarme", "me probar", "probar me"], "Местоимение прирастает к инфинитиву: **probarme**.", null, 7, "es5-probarse"],
  ["Ana ___ prueba el jersey.", "se", ["se", "me", "te"], "**ella** → **se prueba**.", null, 7, "es5-probarse"],
  ["¿Dónde ___ el probador?", "está", ["está", "es", "hay"], "Где находится известное — **está** (урок 3)."],
  ["Quiero ___ la tortilla: ¿está buena?", "probar", ["probar", "probarme", "llevar"], "Еду **пробуют** — **probar**, без **se**.", null, 7, "es5-probarse"]
];
/* Lo, la, los, las */
const ES5_OD = [
  ["¿El pan? ___ compro yo.", "Lo", ["Lo", "La", "Los"], "**el pan** — м. р., ед. ч.: **lo**."],
  ["¿La leche? ___ compro en el supermercado.", "La", ["La", "Lo", "Las"], "**la leche** — ж. р.: **la**."],
  ["¿Los zapatos? ___ quiero negros.", "Los", ["Los", "Las", "Lo"], "**los zapatos** — м. р., мн. ч.: **los**."],
  ["¿Las fresas? ___ compro en la frutería.", "Las", ["Las", "Los", "La"], "**las fresas** — ж. р., мн. ч.: **las**."],
  ["—¿Tienes el libro? —Sí, ___ tengo.", "lo", ["lo", "la", "los"], "**el libro** → **lo**."],
  ["—¿Quieres la tortilla? —No, no ___ quiero.", "la", ["la", "lo", "las"], "**la tortilla** → **la**; **no** — перед ним."],
  ["—¿Dónde compras la fruta? —___ compro en el mercado.", "La", ["La", "Lo", "Las"], "**la fruta** → **la**."],
  ["—¿Comes pescado? —Sí, ___ como mucho.", "lo", ["lo", "la", "los"], "**el pescado** → **lo**."],
  ["—¿Me pone las naranjas? —Sí, aquí ___ tiene.", "las", ["las", "los", "la"], "**las naranjas** → **las**."],
  ["La camiseta es bonita. ¿___ compras?", "La", ["La", "Lo", "Los"], "**la camiseta** → **¿La compras?**"],
  ["Mis gafas… ¿dónde ___ tengo?", "las", ["las", "los", "la"], "**las gafas** — ж. р., мн. ч.: **las**."],
  ["El café ___ tomo sin azúcar.", "lo", ["lo", "la", "los"], "**el café** уже назван в начале — повторяем **lo**."]
];
const ES5_OD_ESC = [
  ["—¿Compras el pan? —Sí, ___ compro.", "lo", "**el pan** → **lo**.", 8, "es5-od-concordancia"],
  ["—¿Compras la camisa? —Sí, ___ compro.", "la", "**la camisa** → **la**.", 8, "es5-od-concordancia"],
  ["—¿Quieres los tomates? —Sí, ___ quiero.", "los", "**los tomates** → **los**.", 8, "es5-od-concordancia"],
  ["—¿Compramos las peras? —Sí, ___ compramos.", "las", "**las peras** → **las**.", 8, "es5-od-concordancia"],
  ["—¿Bebes leche? —No, no ___ bebo.", "la", "**la leche** — ж. р.: **la**.", 8, "es5-od-concordancia"],
  ["—¿Quieres el abrigo negro? —Sí, ___ quiero.", "lo", "**el abrigo** → **lo**.", 8, "es5-od-concordancia"]
];
/* Con infinitivo: [frase, una forma, la otra, explicación] */
const ES5_OD_INF = [
  ["Quiero comprar **la camiseta**.", "Quiero comprarla.", "La quiero comprar.", "**la camiseta** → **comprarla** или **la quiero comprar**."],
  ["Quiero probar **el pescado**.", "Quiero probarlo.", "Lo quiero probar.", "**el pescado** → **probarlo**."],
  ["Tengo que pagar **el pan**.", "Tengo que pagarlo.", "Lo tengo que pagar.", "**el pan** → **pagarlo**."],
  ["Puedo comprar **los zapatos**.", "Puedo comprarlos.", "Los puedo comprar.", "**los zapatos** → **comprarlos**."],
  ["Necesito leer **los libros**.", "Necesito leerlos.", "Los necesito leer.", "**los libros** → **leerlos**."],
  ["Quiero comer **las fresas**.", "Quiero comerlas.", "Las quiero comer.", "**las fresas** → **comerlas**."]
];
/* Orden: [palabras en el orden correcto, otros órdenes que valen, explicación] */
const ES5_OD_ORDEN = [
  [["No", "la", "quiero"], [], "**no** + местоимение + глагол."],
  [["Lo", "quiero", "comprar"], [], "Местоимение — перед первым глаголом. Можно и **Quiero comprarlo**."],
  [["No", "los", "compro"], [], "**No los compro.**"],
  [["Las", "compro", "en", "la", "frutería"], ["En la frutería las compro"], "Местоимение — перед глаголом."],
  [["Hoy", "no", "lo", "necesito"], ["No lo necesito hoy"], "**no** + **lo** + глагол."]
];
/* La mesa: escenas */
const ES5_MESA = [["🥄", "cuchara", ["cuchillo", "copa"]], ["🔪", "cuchillo", ["cuchara", "tenedor"]], ["🍷", "copa", ["vaso", "botella"]], ["🍽️", "plato", ["copa", "cuchara"]]];
const ES5_MENU = [
  ["De ___: ensalada o sopa.", "primero", ["primero", "segundo", "postre"], "Салат или суп — **de primero**."],
  ["De ___: pollo o pescado.", "segundo", ["segundo", "primero", "postre"], "Курица или рыба — **de segundo**."],
  ["De ___: helado, fruta o tarta.", "postre", ["postre", "primero", "segundo"], "Мороженое, фрукты, торт — **de postre**."],
  ["Quiero pagar: la ___, por favor.", "cuenta", ["cuenta", "carta", "propina"], "Счёт — **la cuenta**; **la carta** — меню."],
  ["Quiero ver los platos: la ___, por favor.", "carta", ["carta", "cuenta", "caja"], "Меню — **la carta**; счёт — **la cuenta**."],
  ["Para ___, el pollo.", "mí", ["mí", "mi", "yo"], "**para mí** — со знаком ударения."],
  ["El pescado es muy ___.", "fresco", ["fresco", "fresca", "frescos"], "**pescado** — м. р.: **fresco**."],
  ["La sopa está muy ___.", "caliente", ["caliente", "calientes", "calientos"], "**caliente** не меняется по роду."],
  ["¡Qué ___ está la tortilla!", "rica", ["rica", "rico", "ricas"], "**tortilla** — ж. р.: **rica**."],
  ["Tengo una ___ para dos personas.", "reserva", ["reserva", "cuenta", "propina"], "Бронь — **una reserva**."],
  ["Para el camarero, un poco de dinero: la ___.", "propina", ["propina", "cuenta", "carta"], "Чаевые — **la propina**."],
  ["Para comer la sopa necesito una ___.", "cuchara", ["cuchara", "copa", "botella"], "Суп едят ложкой — **cuchara**."]
];
/* Preguntas: [pregunta con ___, respuesta, correcta, opciones, módulo, regla] */
const ES5_PREGUNTAS = [
  ["¿___ cuesta?", "Dos euros.", "Cuánto", ["Cuánto", "Qué", "Dónde"], 5, "es5-precio"],
  ["¿___ talla tiene?", "La M.", "Qué", ["Qué", "Cuánto", "Dónde"], 7, "es5-talla"],
  ["¿___ está el probador?", "A la derecha.", "Dónde", ["Dónde", "Qué", "Cuánto"], 7, "es5-talla"],
  ["¿___ botellas de agua necesitamos?", "Seis.", "Cuántas", ["Cuántas", "Cuántos", "Dónde"], 4, "es5-cantidades"],
  ["¿___ pagas, en efectivo o con tarjeta?", "Con tarjeta.", "Cómo", ["Cómo", "Dónde", "Cuánto"], 6, "es5-pagar"],
  ["¿___ compras la fruta?", "En el mercado.", "Dónde", ["Dónde", "Cuánto", "Cómo"], 6, "es5-pagar"],
  ["¿___ quieres de primero?", "Una ensalada.", "Qué", ["Qué", "Dónde", "Cuánto"], 9, "es5-menu"]
];
/* Errores típicos: [palabras, índice de la mal, arreglo, módulo, regla, explicación] */
const ES5_ERRORES = [
  [["¿La", "camiseta?", "Compro."], 2, "La compro.", 8, "es5-od-que-es", "Вещь уже названа — нужно **la**: **La compro**."],
  [["Quiero", "comprar lo."], 1, "comprarlo.", 8, "es5-od-lugar", "С инфинитивом — одним словом: **comprarlo**."],
  [["¿La", "falda?", "Lo", "compro."], 2, "La", 8, "es5-od-concordancia", "**la falda** → **la**."],
  [["Tengo", "mucho", "hambre."], 1, "mucha", 2, "es5-hambre", "**hambre** — ж. р.: **mucha hambre**."],
  [["Quiero", "como", "ahora."], 1, "comer", 1, "es5-infinitivo", "После **quiero** — инфинитив: **comer**."],
  [["Tengo", "trabajar", "mañana."], 1, "que trabajar", 2, "es5-tener-que", "**tener que** + инфинитив."],
  [["¿Cuánto", "cuesta", "las", "naranjas?"], 1, "cuestan", 5, "es5-precio", "Несколько вещей — **cuestan**."],
  [["Doscientos", "personas", "viven", "aquí."], 0, "Doscientas", 5, "es5-cientos", "**persona** — ж. р.: **doscientas**."],
  [["Cuesta", "ciento", "euros."], 1, "cien", 5, "es5-cien-ciento", "Ровно сто — **cien**."],
  [["Para", "mi,", "un", "café."], 1, "mí,", 9, "es5-pedir", "**para mí** — со знаком ударения."],
  [["Pago", "con", "efectivo."], 1, "en", 6, "es5-pagar", "Наличными — **en efectivo**."],
  [["Quiero", "un", "kilo", "naranjas."], 2, "kilo de", 4, "es5-cantidades", "После количества — **de**: **un kilo de naranjas**."],
  [["Hay", "muchas", "tomates."], 1, "muchos", 4, "es5-mucho", "**tomates** — м. р.: **muchos**."],
  [["Estoy", "hambre."], 0, "Tengo", 2, "es5-hambre", "С **hambre** — **tener**: **Tengo hambre**."]
];
/* Situaciones: [situación en ruso, correcta, otras, explicación, módulo] */
const ES5_SITUACIONES = [
  ["Ты хочешь сказать, что голоден.", "Tengo hambre.", ["Soy hambre.", "Estoy hambre."], "«Голоден» — **tengo hambre**.", 2],
  ["Ты хочешь пить.", "Tengo sed.", ["Estoy sed.", "Soy sed."], "«Хочу пить» — **tengo sed**.", 2],
  ["Ты говоришь, что тебе надо купить хлеб.", "Tengo que comprar pan.", ["Tengo comprar pan.", "Hay que compro pan."], "**tengo que** + инфинитив.", 6],
  ["Ты спрашиваешь в магазине цену одной вещи.", "¿Cuánto cuesta?", ["¿Cuánto cuestan?", "¿Qué cuesta?"], "Одна вещь — **¿Cuánto cuesta?**", 5],
  ["Ты хочешь заплатить и спрашиваешь, сколько с тебя.", "¿Cuánto es?", ["¿Cuánto son?", "¿Qué es?"], "Общая сумма — **¿Cuánto es?**", 6],
  ["Продавец спрашивает «¿Algo más?», а тебе больше ничего не нужно.", "Nada más, gracias.", ["Algo más, gracias.", "No más nada, gracias."], "**Nada más, gracias.**", 6],
  ["Ты спрашиваешь, можно ли заплатить картой.", "¿Puedo pagar con tarjeta?", ["¿Puedo pago con tarjeta?", "¿Puedo pagar en tarjeta?"], "**poder** + инфинитив; картой — **con tarjeta**.", 6],
  ["Ты хочешь спросить, где примерочная.", "¿Dónde está el probador?", ["¿Dónde hay el probador?", "¿Dónde es el probador?"], "Где находится известное — **está**.", 7],
  ["Ты вежливо просишь в баре кофе с молоком.", "¿Me pone un café con leche?", ["¿Pone me un café con leche?", "¿Me pone un café con la leche?"], "**¿Me pone…?** — вежливая просьба в баре.", 9],
  ["Ты заказываешь в ресторане салат.", "Para mí, una ensalada.", ["Para mi, una ensalada.", "Para yo, una ensalada."], "**para mí** — со знаком ударения.", 9],
  ["Ты просишь счёт в ресторане.", "La cuenta, por favor.", ["La carta, por favor.", "El cuenta, por favor."], "Счёт — **la cuenta**; **la carta** — меню.", 9],
  ["Ты говоришь, что предпочитаешь чай.", "Prefiero té.", ["Prefiero a té.", "Prefiero tomo té."], "**preferir** + существительное.", 1]
];
/* Respuestas: [lo que te dicen, correcta, otras, explicación, módulo] */
const ES5_RESPUESTAS = [
  ["¿Algo más?", "No, nada más, gracias.", ["Sí, nada más.", "No, algo más."], "**Nada más, gracias.**", 6],
  ["¿Cuánto es?", "Son cinco euros con veinte.", ["Es cinco euros con veinte.", "Cuestan cinco euros con veinte."], "Сумма — **son… euros**.", 6],
  ["¿Qué talla tiene?", "La M.", ["El 40 euros.", "Tengo M años."], "Размер одежды — **la M**.", 7],
  ["¿Qué quieren de primero?", "Para mí, sopa.", ["De postre, sopa.", "Para mi sopa."], "**Para mí, sopa.**", 9],
  ["¿Efectivo o tarjeta?", "Con tarjeta, por favor.", ["En tarjeta, por favor.", "De tarjeta."], "Картой — **con tarjeta**.", 6],
  ["¿Tienes hambre?", "Sí, mucha.", ["Sí, mucho.", "Sí, muchas."], "**hambre** — ж. р.: **mucha**.", 2],
  ["¿Quieres la tortilla?", "Sí, la quiero.", ["Sí, lo quiero.", "Sí, quiero la."], "**la tortilla** → **la quiero**.", 8],
  ["¿Compras el pan hoy?", "Sí, lo compro.", ["Sí, compro.", "Sí, la compro."], "**el pan** → **lo compro**.", 8]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas «a|b|~c»]], modelo, pista?] */
function es5Turnos(quien, genero, titulo, pasos) {
  return { quien, genero, titulo, chat: false, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f]) => ({ es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES5_TURNOS = [
  es5Turnos("Dependienta", "f", "En el mercado", [
    ["¡Buenos días! ¿Qué le pongo?", "Доброе утро! Что вам дать?", "Поздоровайся и попроси килограмм апельсинов.",
      [["приветствие", "buenos días|hola|buenas"], ["килограмм апельсинов", "un kilo de naranjas|~kilo de naranjas|~naranjas"]], "Buenos días. ¿Me pone un kilo de naranjas?", "**¿Me pone…?** или **Quería…**"],
    ["Aquí tiene. ¿Algo más?", "Вот, пожалуйста. Что-нибудь ещё?", "Попроси ещё полкило клубники.",
      [["полкило", "medio kilo|~medio"], ["клубника", "de fresas|~fresas"]], "Sí, quería medio kilo de fresas.", "Полкило — **medio kilo de…**"],
    ["Muy bien. ¿Algo más?", "Хорошо. Что-нибудь ещё?", "Скажи, что больше ничего не нужно, и спроси, сколько с тебя.",
      [["больше ничего", "nada más|no gracias|~nada|~no"], ["сколько с меня", "cuánto es|~cuánto"]], "Nada más, gracias. ¿Cuánto es?"],
    ["Son cuatro euros con cincuenta. ¿Efectivo o tarjeta?", "Четыре евро пятьдесят. Наличными или картой?", "Скажи, что заплатишь картой.",
      [["картой", "con tarjeta|~tarjeta"]], "Con tarjeta, por favor."],
    ["Muy bien. ¡Gracias, hasta luego!", "Хорошо. Спасибо, до свидания!", "Попрощайся.",
      [["прощание", "adiós|hasta luego|hasta mañana|chao|gracias"]], "¡Gracias, adiós!"]
  ]),
  es5Turnos("Dependienta", "f", "En la tienda de ropa", [
    ["Hola, buenas tardes. ¿Qué busca?", "Здравствуйте, добрый день. Что вы ищете?", "Скажи, что ищешь чёрный свитер.",
      [["свитер", "un jersey|~jersey"], ["чёрный", "negro"]], "Busco un jersey negro."],
    ["¿Qué talla tiene?", "Какой у вас размер?", "Скажи, что у тебя размер M.",
      [["размер M", "la m|talla m|~m"]], "La M.", "Размер одежды — **la M**."],
    ["Aquí tiene. El probador está a la derecha.", "Вот, пожалуйста. Примерочная справа.", "Спроси, сколько он стоит.",
      [["сколько стоит", "cuánto cuesta|~cuánto"]], "¿Cuánto cuesta?"],
    ["Cuesta treinta y cinco euros.", "Тридцать пять евро.", "Скажи, что берёшь его (замени свитер местоимением).",
      [["беру его", "lo compro|lo quiero|~lo"]], "Vale, lo compro.", "**el jersey** → **lo**: **lo compro**."],
    ["Muy bien. ¿Con tarjeta?", "Хорошо. Картой?", "Скажи, что заплатишь наличными.",
      [["наличными", "en efectivo|~efectivo"]], "No, en efectivo."]
  ]),
  es5Turnos("Camarero", "m", "En el restaurante", [
    ["Buenas tardes. ¿Qué quiere de primero?", "Добрый день. Что будете на первое?", "Закажи на первое салат.",
      [["салат", "una ensalada|~ensalada"]], "De primero, una ensalada.", "**Para mí, …** или **De primero, …**"],
    ["¿Y de segundo?", "А на второе?", "Закажи на второе рыбу или курицу.",
      [["рыба или курица", "el pescado|el pollo|~pescado|~pollo"]], "De segundo, el pescado."],
    ["¿Y para beber?", "А пить что будете?", "Попроси воду без газа.",
      [["вода", "agua"], ["без газа", "sin gas"]], "Agua sin gas, por favor."],
    ["¿Quiere postre?", "Десерт будете?", "Закажи шоколадное мороженое.",
      [["мороженое", "un helado|~helado"], ["шоколадное", "de chocolate|~chocolate"]], "Sí, un helado de chocolate."],
    ["¿Qué tal todo?", "Как вам всё?", "Скажи, что было очень вкусно, и попроси счёт.",
      [["вкусно", "muy rico|rico|muy bueno|bueno|qué rico"], ["счёт", "la cuenta|~cuenta"]], "¡Muy rico! La cuenta, por favor."]
  ])
];
window.ejerciciosUnidadEs5 = ejerciciosUnidadEs5;
window.es5Vocab = es5Vocab;
window.es5Ampliacion = es5Ampliacion;
window.es5Objetivo = es5Objetivo;
window.es5Num = es5Num;
const ES5_MEZCLA = { conjugar: 3, "cambia-persona": 1, "verbo-infinitivo": 2, "tener-hay": 2, "hambre-sed": 1, comida: 1, "comida-escribir": 1, "articulo-cero": 2,
  mucho: 2, "mucho-escribir": 1, cantidad: 2, "algo-nada": 1, "numero-oir": 1, "numero-escribir": 1, cientos: 1, "precio-oir": 1, "precio-escribir": 1, cuesta: 1,
  tienda: 1, pagar: 1, ropa: 1, "ropa-escribir": 1, "ropa-color": 1, talla: 1, "pronombre-od": 2, "pronombre-od-escribir": 1, "pronombre-infinitivo": 1, "pronombre-orden": 1,
  mesa: 1, "mesa-escribir": 1, menu: 1, turnos: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1 };
window.ES5_MEZCLA = ES5_MEZCLA;
