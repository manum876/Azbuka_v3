/* ============================================================
   DATA-UNIDAD-ES-9.JS — Abecé · Урок 9: Истории, привычки и перемены
   (Historias, hábitos y cambios). Completa (13/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U9;
   propuesta aprobada por Manu el 13/11/2026: claude/PROPUESTA_U9_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-8.js. Las formas de los verbos salen de
   data-verbos-es.js: imperfecto (es9Imperf), indefinido (es9Indef) y
   estaba + gerundio (es9Estaba), con «se» delante si el verbo lo lleva.
   Decisiones de Manu (13/11/2026): rizado, deberes, recreo, dibujos animados
   y hasta que entran al léxico (muñeca ya estaba, como femenino de muñeco);
   la ampliación entera; pidió / durmió en un módulo propio (el 7, con leyó,
   oyó, cayó); liso con «прямой (о волосах)» sin perder el sentido general;
   sin nota cultural nueva; desafío del día «Раньше и сейчас».
   ============================================================ */

const ES9_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES9_SE = ["me", "te", "se", "nos", "os", "se"];
const ES9_ESTAR = ["estaba", "estabas", "estaba", "estábamos", "estabais", "estaban"];
function es9Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  if (!v) return null;
  if (v.base) return Object.assign({ se: true }, VERBOS_ES[v.base]);
  return v.pronominal ? Object.assign({ se: true }, v) : v;
}
function es9Tiempo(t) {
  return (inf, p) => { const v = es9Verbo(inf); if (!v || !v[t] || !v[t][p]) return ""; return (v.se ? ES9_SE[p] + " " : "") + v[t][p]; };
}
const es9Imperf = es9Tiempo("imperf");
const es9Indef = es9Tiempo("indef");
const es9Pres = es9Tiempo("pres");
function es9Estaba(inf, p) { const v = es9Verbo(inf); if (!v || !v.ger) return ""; return ES9_ESTAR[p] + " " + v.ger; }
const es9Tabla = (inf, fn) => ES9_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: fn(inf, i) }]);
const es9Tabla3 = inf => [[{ es: "él / ella", ru: "он / она" }, { es: es9Indef(inf, 2) }], [{ es: "ellos / ellas", ru: "они" }, { es: es9Indef(inf, 5) }]];

const UNIDAD_ES_9 = {
  id: 9,
  titulo: "Истории, привычки и перемены",
  tituloEs: "Historias, hábitos y cambios",
  objetivo: "Описать, каким было что-то раньше, рассказать, что происходило, когда что-то случилось, и сравнить прошлое с настоящим.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es9m1", n: 1, tipo: "leccion",
      titulo: "Antes vivía en Moscú",
      resumen: "Pretérito imperfecto: -aba, -ía. Привычки и описания в прошлом.",
      intro: "Третье прошедшее время — **pretérito imperfecto**: **vivía** — «я жил», **jugaba** — «я играл». Им рассказывают, **как было** и **что обычно происходило**: **Antes vivía en Moscú. De pequeño jugaba mucho.**",
      tablas: [
        { titulo: "-ar: hablar", encabezados: ["Кто", "Форма"], filas: es9Tabla("hablar", es9Imperf) },
        { titulo: "-er, -ir: comer, vivir", encabezados: ["Кто", "Форма"], filas: ES9_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es9Imperf("comer", i) + " · " + es9Imperf("vivir", i) }]) }
      ],
      secciones: [
        {
          id: "es9-imperf-reg",
          titulo: "-aba, -ía",
          texto: "Формы очень простые:\n· **-ar → -aba**: **hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban**;\n· **-er, -ir → -ía**: **comía, comías, comía, comíamos, comíais, comían** (так же **vivía**).\nВ **-ía** знак ударения есть **всегда**. В **-aba** — только у **nosotros**: **hablábamos**.\nФормы **yo** и **él** одинаковые: **yo vivía**, **él vivía** — кто, понятно из контекста или по местоимению.\nПочти все глаголы правильные — даже те, что в настоящем меняют корень: **quería**, **podía**, **tenía**, **dormía**, **jugaba**.",
          ejemplos: [
            { es: "Antes vivía en Moscú.", ru: "Раньше я жил в Москве." },
            { es: "De pequeño jugaba mucho en el parque.", ru: "В детстве я много играл в парке." },
            { es: "Mis abuelos tenían un perro.", ru: "У моих бабушки и дедушки была собака." }
          ],
          errores: [
            { mal: "Antes vivia en Moscú.", bien: "Antes vivía en Moscú.", por: "В **-ía** знак ударения есть всегда." },
            { mal: "Antes quiería ir.", bien: "Antes quería ir.", por: "В imperfecto корень не меняется: **quería**." }
          ],
          chequeo: [
            { pide: "De pequeño ___ mucho. (yo, jugar)", opciones: ["jugaba", "juegaba", "jugué"], ok: "jugaba", por: "Imperfecto: **jug-** + **-aba** (корень не меняется)." }
          ]
        },
        {
          id: "es9-imperf-uso",
          titulo: "Antes, de pequeño, siempre",
          texto: "Imperfecto нужен в двух случаях:\n1) **что обычно происходило** — привычка в прошлом: **Antes iba a clase en metro. Todos los días comíamos a las dos.**\n2) **как было** — описание: **La casa era grande. Hacía frío.**\nЧасто рядом: **antes** (раньше), **de pequeño** (в детстве), **cuando era niño** (когда я был ребёнком), **siempre**, **a menudo**, **todos los días**, **los domingos**.",
          comparacion: "Похоже на русский несовершенный вид: «я жил», «я играл», «мы ели» — что было и повторялось.",
          ejemplos: [
            { es: "Antes trabajaba en un banco; ahora trabajo en casa.", ru: "Раньше я работал в банке, а сейчас работаю дома." },
            { es: "Los domingos comíamos con mis abuelos.", ru: "По воскресеньям мы обедали у бабушки с дедушкой." }
          ],
          chequeo: [
            { pide: "Antes ___ en un banco. (yo, trabajar)", opciones: ["trabajaba", "trabajo", "trabajé ayer"], ok: "trabajaba", por: "«Раньше» и привычка — **imperfecto**." }
          ]
        }
      ],
      frases: ["FRE-140"],
      vocab: ["infancia", "juventud", "época", "costumbre"]
    },
    {
      id: "es9m2", n: 2, tipo: "leccion",
      titulo: "Era, iba, veía",
      resumen: "Ser, ir, ver; había. Каким был человек, каким было место.",
      intro: "Неправильных глаголов в imperfecto всего три: **ser → era**, **ir → iba**, **ver → veía**. И одна важная форма: **hay → había** — «было, имелось».",
      tablas: [
        { titulo: "Ser, ir, ver", encabezados: ["Кто", "ser · ir · ver"], filas: ES9_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es9Imperf("ser", i) + " · " + es9Imperf("ir", i) + " · " + es9Imperf("ver", i) }]) },
        { titulo: "¿Cómo era?", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "delgado", ru: "худой" }, { es: "gordo", ru: "толстый" }],
          [{ es: "rubio", ru: "светловолосый" }, { es: "moreno", ru: "темноволосый, смуглый" }],
          [{ es: "el pelo rizado", ru: "кудрявые волосы" }, { es: "el pelo liso", ru: "прямые волосы" }],
          [{ es: "la barba", ru: "борода" }, { es: "el bigote", ru: "усы" }],
          [{ es: "tímido", ru: "застенчивый" }, { es: "travieso", ru: "озорной" }],
          [{ es: "alegre", ru: "весёлый" }, { es: "serio", ru: "серьёзный" }],
          [{ es: "feliz", ru: "счастливый" }, { es: "triste", ru: "грустный" }]] }
      ],
      secciones: [
        {
          id: "es9-ser-ir-ver",
          titulo: "Era, iba, veía",
          texto: "**ser:** **era, eras, era, éramos, erais, eran**.\n**ir:** **iba, ibas, iba, íbamos, ibais, iban**.\n**ver:** **veía, veías, veía, veíamos, veíais, veían**.\nВсе остальные глаголы — по правилу.",
          ejemplos: [
            { es: "Mi abuelo era muy alegre.", ru: "Мой дедушка был очень весёлым." },
            { es: "Íbamos al colegio a pie.", ru: "Мы ходили в школу пешком." },
            { es: "Veía la tele todas las tardes.", ru: "Я смотрел телевизор каждый вечер." }
          ],
          errores: [
            { mal: "De pequeño fui muy tímido.", bien: "De pequeño era muy tímido.", por: "Каким был человек — описание: **era**." }
          ],
          chequeo: [
            { pide: "Antes ___ al colegio en bici. (nosotros, ir)", opciones: ["íbamos", "ibamos", "iríamos"], ok: "íbamos", por: "**ir** — **íbamos**, со знаком ударения." }
          ]
        },
        {
          id: "es9-habia",
          titulo: "Había",
          texto: "**hay** в прошлом (описание) — **había**. Как и **hay**, у неё одна форма для всего: **había un parque**, **había muchos árboles**, **no había tiendas**.\nТолько не «habían muchos árboles» — **había**.",
          ejemplos: [
            { es: "En mi pueblo había un río.", ru: "В моей деревне была речка." },
            { es: "Antes no había tantos coches.", ru: "Раньше не было столько машин." }
          ],
          errores: [
            { mal: "Habían muchos árboles.", bien: "Había muchos árboles.", por: "Как **hay** — одна форма: **había**." }
          ],
          chequeo: [
            { pide: "En la calle ___ muchas tiendas.", opciones: ["había", "habían", "era"], ok: "había", por: "«Было, имелось» — **había**, всегда в ед. ч." }
          ]
        },
        {
          id: "es9-describir",
          titulo: "Era alto, tenía el pelo rizado",
          texto: "Портрет в прошлом:\n· **era** + каким был: **era alto**, **era tímido**, **era rubio**;\n· **tenía** + что у него было: **tenía el pelo rizado**, **tenía barba**, **tenía los ojos azules**;\n· **llevaba** + что носил: **llevaba gafas**, **llevaba barba**.\nПрилагательное согласуется: **mi abuela era delgada y morena**.",
          ejemplos: [
            { es: "Mi padre era alto y tenía bigote.", ru: "Мой отец был высоким и носил усы." },
            { es: "De pequeña Lucía era rubia y llevaba gafas.", ru: "В детстве Лусия была светловолосой и носила очки." }
          ],
          chequeo: [
            { pide: "Mi abuelo ___ barba.", opciones: ["tenía", "era", "estaba"], ok: "tenía", por: "Борода — **tenía barba** (или **llevaba barba**)." }
          ]
        }
      ],
      dialogos: ["DLE-040"],
      vocab: ["delgado", "gordo", "rubio", "moreno", "rizado", "liso", "barba", "bigote", "tímido", "travieso", "alegre", "serio", "feliz"],
      ampliacion: {
        titulo: "Ещё о характере",
        intro: "Ещё три слова. Они не входят в проверку урока. **cariñoso** — ласковый: **Mi abuela era muy cariñosa.** **valiente** — смелый. **curioso** — любопытный: **De pequeño era muy curioso.**",
        vocab: ["cariñoso", "valiente", "curioso"]
      }
    },
    {
      id: "es9m3", n: 3, tipo: "leccion",
      titulo: "De pequeño jugaba en el parque",
      resumen: "Детство и школа; soler + инфинитив.",
      intro: "О детстве говорят в imperfecto: **De pequeño jugaba con mis amigos. En el recreo jugábamos al fútbol.** И глагол, который нужен именно здесь, — **soler**: «обычно, как правило».",
      tablas: [
        { titulo: "Los juegos", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el juguete", ru: "игрушка" }, { es: "el juego", ru: "игра" }],
          [{ es: "la muñeca", ru: "кукла" }, { es: "la pelota", ru: "мяч" }],
          [{ es: "la bici", ru: "велосипед (разг.)" }, { es: "el patio", ru: "двор" }],
          [{ es: "los dibujos animados", ru: "мультфильмы" }, { es: "el dibujo", ru: "рисунок" }],
          [{ es: "dibujar", ru: "рисовать (карандашом)" }, { es: "pintar", ru: "рисовать (красками), красить" }]] },
        { titulo: "El colegio", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el maestro / la maestra", ru: "учитель (в начальной школе)" }, { es: "el instituto", ru: "средняя школа (с 12 лет)" }],
          [{ es: "el recreo", ru: "перемена" }, { es: "los deberes", ru: "домашнее задание" }],
          [{ es: "la nota", ru: "оценка" }, { es: "el adolescente", ru: "подросток" }],
          [{ es: "aprobar", ru: "сдать (экзамен)" }, { es: "suspender", ru: "провалить (экзамен)" }]] },
        { titulo: "Soler", encabezados: ["Кто", "Форма"], filas: es9Tabla("soler", es9Imperf) }
      ],
      secciones: [
        {
          id: "es9-de-pequeno",
          titulo: "De pequeño, en el colegio",
          texto: "**de pequeño / de pequeña** — «в детстве»; так же **de niño**, **de joven**: **De pequeña tenía muchas muñecas.**\nВ Испании **el colegio** — это школа для детей, **el instituto** — средняя школа (с 12 лет). Учитель в начальной школе — **el maestro / la maestra**, в институте — **el profesor**.\n**aprobar** — сдать, **suspender** — провалить: **Suspendí el examen de inglés.** Один раз — indefinido; **siempre aprobaba** — привычка.",
          ejemplos: [
            { es: "En el recreo jugábamos con la pelota.", ru: "На перемене мы играли в мяч." },
            { es: "Nunca hacía los deberes.", ru: "Я никогда не делал домашнее задание." }
          ],
          errores: [
            { mal: "Hacía la deber.", bien: "Hacía los deberes.", por: "**los deberes** — только во мн. ч." }
          ]
        },
        {
          id: "es9-soler",
          titulo: "Soler + infinitivo",
          texto: "**soler** + инфинитив — «обычно…, как правило…». В настоящем: **suelo comer a las dos**; в прошлом — **solía**: **De pequeño solía ir al pueblo en verano.**\nПосле **soler** сразу инфинитив, без предлога: не «suelo de ir».",
          ejemplos: [
            { es: "Los sábados solíamos ver dibujos animados.", ru: "По субботам мы обычно смотрели мультфильмы." },
            { es: "Normalmente suelo cenar a las nueve.", ru: "Обычно я ужинаю в девять." }
          ],
          errores: [
            { mal: "Solía de jugar en el patio.", bien: "Solía jugar en el patio.", por: "**soler** + инфинитив, без **de**." }
          ],
          chequeo: [
            { pide: "En verano ___ ir a la playa. (nosotros)", opciones: ["solíamos", "solíamos de", "soliamos"], ok: "solíamos", por: "**solíamos** + инфинитив, со знаком ударения." }
          ]
        }
      ],
      frases: ["FRE-139"],
      dialogos: ["DLE-041"],
      vocab: ["soler", "juguete", "muñeco", "juego", "pelota", "patio", "bici", "dibujos animados", "dibujo", "dibujar", "pintar", "maestro", "instituto", "recreo", "deberes", "nota", "adolescente", "aprobar", "suspender"],
      ampliacion: {
        titulo: "Как ты себя вёл?",
        intro: "Ещё три глагола. Они не входят в проверку урока. **portarse bien / mal** — хорошо / плохо себя вести: **De pequeño me portaba mal.** **castigar** — наказывать: **Mis padres me castigaban.** **pelearse** — ссориться, драться: **Me peleaba con mi hermano.**",
        vocab: ["portarse", "castigar", "pelearse"]
      }
    },
    {
      id: "es9m4", n: 4, tipo: "leccion",
      titulo: "Antes y ahora",
      resumen: "Ya no, todavía; acabar de, dejar de, seguir, empezar a, volver a.",
      intro: "Сравнить прошлое и настоящее: **Antes vivía en Moscú; ahora vivo en Barcelona.** И пять сочетаний с инфинитивом или gerundio, которые делают то же, что в русском приставки и слова «уже», «снова», «только что».",
      tablas: [
        { titulo: "Perífrasis", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "acabar de + inf.", ru: "только что (сделать)" }, { es: "Acabo de llegar.", ru: "Я только что пришёл." }],
          [{ es: "empezar a + inf.", ru: "начать" }, { es: "Empecé a correr.", ru: "Я начал бегать." }],
          [{ es: "volver a + inf.", ru: "снова (сделать)" }, { es: "Volví a jugar.", ru: "Я снова стал играть." }],
          [{ es: "dejar de + inf.", ru: "перестать" }, { es: "Dejé de jugar.", ru: "Я перестал играть." }],
          [{ es: "seguir + gerundio", ru: "продолжать, всё ещё" }, { es: "Sigo viviendo aquí.", ru: "Я всё ещё живу здесь." }]] }
      ],
      secciones: [
        {
          id: "es9-antes-ahora",
          titulo: "Ya no, todavía",
          texto: "**Antes…, ahora…** — imperfecto и настоящее: **Antes era tímido; ahora no.**\n**ya no** — «уже не»: **Ya no vivo en Moscú.** (без «más» в конце).\n**todavía** — «всё ещё»: **Todavía vivo con mis padres.**\n**actualmente** — «в настоящее время» (не «актуально»!): **Actualmente trabajo en una tienda.**",
          ejemplos: [
            { es: "Antes vivía con mis padres; ya no.", ru: "Раньше я жил с родителями, а теперь уже нет." },
            { es: "¿Todavía juegas al fútbol?", ru: "Ты всё ещё играешь в футбол?" }
          ],
          errores: [
            { mal: "Ya no vivo en Moscú más.", bien: "Ya no vivo en Moscú.", por: "**ya no** — без **más**." }
          ],
          chequeo: [
            { pide: "Antes comía carne, pero ___ como carne.", opciones: ["ya no", "todavía", "ya"], ok: "ya no", por: "«Уже не» — **ya no**." }
          ]
        },
        {
          id: "es9-perifrasis",
          titulo: "Acabo de, dejé de, sigo…",
          texto: "**acabar de** + инфинитив — «только что»: **Acabo de comer** — я только что поел (форма в настоящем, а смысл — прошлое).\n**empezar a** + инфинитив — начать: **Empecé a estudiar español en 2024.**\n**volver a** + инфинитив — снова: **Volví a ver la película.**\n**dejar de** + инфинитив — перестать: **Dejé de comer carne.**\n**seguir** + gerundio — продолжать, всё ещё: **Sigo estudiando.** (не «sigo a estudiar»).\nПредлог после **acabar**, **dejar** — **de**; после **empezar**, **volver** — **a**.",
          ejemplos: [
            { es: "Acabo de llegar a casa.", ru: "Я только что пришёл домой." },
            { es: "Mi padre dejó de trabajar el año pasado.", ru: "Мой отец перестал работать в прошлом году." },
            { es: "Sigo viviendo en el piso de antes.", ru: "Я всё ещё живу в той же квартире, что и раньше." }
          ],
          errores: [
            { mal: "Sigo a estudiar español.", bien: "Sigo estudiando español.", por: "**seguir** + gerundio." },
            ],
          chequeo: [
            { pide: "___ llegar. Todavía no he comido. (только что)", opciones: ["Acabo de", "Dejo de", "Vuelvo a"], ok: "Acabo de", por: "«Только что» — **acabar de**." }
          ]
        }
      ],
      frases: ["FRE-141"],
      dialogos: ["DLE-043"],
      vocab: ["acabar", "dejar", "actualmente", "decidir"]
    },
    {
      id: "es9m5", n: 5, tipo: "leccion",
      titulo: "Hacía sol y fuimos a la playa",
      resumen: "Imperfecto или indefinido: фон и события.",
      intro: "В одном рассказе встречаются два прошедших: **imperfecto** — фон, обстановка (**hacía sol**, **había mucha gente**), **indefinido** — то, что случилось (**fuimos a la playa**, **llegó Pablo**).",
      tablas: [
        { titulo: "¿Imperfecto o indefinido?", encabezados: ["Imperfecto", "Indefinido"], filas: [
          [{ es: "Hacía sol.", ru: "Светило солнце. (фон)" }, { es: "Fuimos a la playa.", ru: "Мы пошли на пляж. (событие)" }],
          [{ es: "Iba al colegio a pie.", ru: "Я ходил в школу пешком. (обычно)" }, { es: "Ayer fui en metro.", ru: "Вчера я поехал на метро. (один раз)" }],
          [{ es: "La casa era grande.", ru: "Дом был большой. (описание)" }, { es: "Viví diez años en Moscú.", ru: "Я прожил десять лет в Москве. (закончено)" }]] }
      ],
      secciones: [
        {
          id: "es9-fondo-suceso",
          titulo: "El fondo y lo que pasó",
          texto: "Представь фильм: **imperfecto** — декорации и то, что повторялось; **indefinido** — то, что произошло, шаг за шагом.\n**Era sábado. Hacía sol y había mucha gente en la calle. De repente empezó a llover y entramos en un bar.**\nПервые три — фон (**era, hacía, había**), потом — события (**empezó, entramos**).\nВопрос себе: это **обстановка** (как было?) или **событие** (что случилось?)",
          comparacion: "Похоже на вид: imperfecto близко к «делал» (было, повторялось), indefinido — к «сделал» (случилось).",
          ejemplos: [
            { es: "Era tarde y estaba muy cansado.", ru: "Было поздно, и я очень устал." },
            { es: "Hacía frío y cogimos un taxi.", ru: "Было холодно, поэтому мы взяли такси." }
          ],
          errores: [
            { mal: "Fue un día bonito, hizo sol y fuimos a la playa.", bien: "Era un día bonito, hacía sol y fuimos a la playa.", por: "Фон рассказа — **imperfecto**: **era**, **hacía**." }
          ],
          chequeo: [
            { pide: "___ mucha gente en la playa. (фон)", opciones: ["Había", "Hubo", "Hay"], ok: "Había", por: "Обстановка — **imperfecto**: **había**." },
            { pide: "De repente ___ a llover. (empezar — событие)", opciones: ["empezó", "empezaba", "empieza"], ok: "empezó", por: "Что случилось — **indefinido**: **empezó**." }
          ]
        },
        {
          id: "es9-limite",
          titulo: "Trabajé tres horas",
          texto: "Осторожно: русский вид помогает не всегда. Долгое действие, у которого есть **конец** (сколько времени, с какого по какое), — **indefinido**, хотя по-русски «работал», «жил»:\n**Ayer trabajé tres horas.** — вчера я работал три часа.\n**Viví diez años en Moscú.** — я жил в Москве десять лет (и больше не живу).\n**Estuve en Madrid toda la semana.**\nА **imperfecto** — когда конец не важен: **Vivía en Moscú y trabajaba en un banco** (так было, это фон).",
          errores: [
            { mal: "Ayer trabajaba tres horas.", bien: "Ayer trabajé tres horas.", por: "Сколько времени — действие закончено: **indefinido**." }
          ],
          chequeo: [
            { pide: "Ayer ___ dos horas en el parque. (yo, estar)", opciones: ["estuve", "estaba", "estoy"], ok: "estuve", por: "**dos horas** — закончено: **estuve**." }
          ]
        }
      ],
      vocab: ["tormenta"]
    },
    {
      id: "es9m6", n: 6, tipo: "leccion",
      titulo: "Estaba durmiendo cuando sonó el teléfono",
      resumen: "Estaba + gerundio; cuando, mientras, de repente.",
      intro: "Одно действие шло, другое его прервало: **Estaba durmiendo cuando sonó el teléfono.** — Я спал, когда зазвонил телефон.",
      tablas: [
        { titulo: "Estaba + gerundio", encabezados: ["Кто", "Форма"], filas: es9Tabla("leer", es9Estaba) }
      ],
      secciones: [
        {
          id: "es9-interrumpida",
          titulo: "Estaba… cuando…",
          texto: "**estaba** (imperfecto от **estar**) + gerundio — действие в процессе: **estaba durmiendo**, **estábamos comiendo**.\nЕго прерывает событие в **indefinido** после **cuando**: **Estaba leyendo cuando llegó Ana.**\nМожно и без gerundio: **Dormía cuando sonó el teléfono.** Смысл тот же.",
          ejemplos: [
            { es: "Estábamos cenando cuando llegó Pablo.", ru: "Мы ужинали, когда пришёл Пабло." },
            { es: "Cuando me llamaste, estaba en la ducha.", ru: "Когда ты мне позвонил, я был в душе." }
          ],
          errores: [
            { mal: "Estuve durmiendo cuando sonó el teléfono.", bien: "Estaba durmiendo cuando sonó el teléfono.", por: "Процесс, который прервали, — **estaba**." }
          ],
          chequeo: [
            { pide: "___ cuando sonó el teléfono. (yo, dormir)", opciones: ["Estaba durmiendo", "Estuve durmiendo", "Dormí"], ok: "Estaba durmiendo", por: "Фон, который прервали, — **estaba durmiendo**." }
          ]
        },
        {
          id: "es9-mientras",
          titulo: "Mientras, de repente",
          texto: "**mientras** — «пока, в то время как»; после него обычно фон в imperfecto: **Mientras yo cocinaba, Ana veía la tele.**\n**de repente / de pronto** — «вдруг»; после него — событие: **De repente se fue la luz.**\nСтрах: **tener miedo** — бояться, **asustado** — испуганный: **Tenía miedo de la oscuridad.**",
          ejemplos: [
            { es: "Mientras esperaba el autobús, empezó a llover.", ru: "Пока я ждал автобус, начался дождь." },
            { es: "De repente se fue la luz y estábamos muy asustados.", ru: "Вдруг погас свет, и нам стало очень страшно." }
          ],
          chequeo: [
            { pide: "___ yo leía, mi hermano jugaba. (пока)", opciones: ["Mientras", "De repente", "Cuando de pronto"], ok: "Mientras", por: "Два действия одновременно, фон — **mientras**." }
          ]
        }
      ],
      frases: ["FRE-138"],
      dialogos: ["DLE-042"],
      vocab: ["cuando", "mientras", "de repente", "de pronto", "sonar", "miedo", "asustado"]
    },
    {
      id: "es9m7", n: 7, tipo: "leccion",
      titulo: "Pidió, durmió, leyó",
      resumen: "Indefinido у él и ellos: e → i, o → u, i → y.",
      intro: "У некоторых глаголов на **-ir** в indefinido меняется корень, но **только у él / ella и ellos / ellas**: **pedí**, но **pidió**; **dormí**, но **durmió**.",
      tablas: [
        { titulo: "Pedir", encabezados: ["Кто", "Форма"], filas: es9Tabla("pedir", es9Indef) },
        { titulo: "Dormir", encabezados: ["Кто", "Форма"], filas: es9Tabla("dormir", es9Indef) },
        { titulo: "Leer, oír, caer", encabezados: ["Кто", "leer · oír · caer"], filas: [2, 5].map(i => [{ es: ES9_PERS[i][0], ru: ES9_PERS[i][1] }, { es: es9Indef("leer", i) + " · " + es9Indef("oír", i) + " · " + es9Indef("caer", i) }]) }
      ],
      secciones: [
        {
          id: "es9-e-i-o-u",
          titulo: "Pidió, durmió",
          texto: "Глаголы на **-ir**, у которых в настоящем меняется корень, в indefinido меняют его в **él** и **ellos**:\n· **e → i**: **pedir → pidió, pidieron**; так же **repetir → repitió**, **preferir → prefirió**, **seguir → siguió**, **vestirse → se vistió**, **divertirse → se divirtió**;\n· **o → u**: **dormir → durmió, durmieron**; **morir → murió, murieron**.\nУ **yo, tú, nosotros, vosotros** — всё по правилу: **pedí, pediste, pedimos, pedisteis**.\nГлаголы на **-ar** и **-er** так не делают: **jugó**, **volvió**, **empezó**.",
          ejemplos: [
            { es: "Pablo pidió una cerveza.", ru: "Пабло заказал пиво." },
            { es: "Los niños durmieron muy bien.", ru: "Дети спали очень хорошо." }
          ],
          errores: [
            { mal: "Marta pedió la cuenta.", bien: "Marta pidió la cuenta.", por: "**pedir**, она — **pidió**." },
            { mal: "Ayer dormió diez horas.", bien: "Ayer durmió diez horas.", por: "**dormir**, он — **durmió**." }
          ],
          chequeo: [
            { pide: "Anoche Ana ___ ocho horas. (dormir)", opciones: ["durmió", "dormió", "dormí"], ok: "durmió", por: "**dormir**, она — **durmió**." }
          ]
        },
        {
          id: "es9-y",
          titulo: "Leyó, oyó, cayó",
          texto: "Если перед окончанием гласная, **-ió** и **-ieron** превращаются в **-yó** и **-yeron**: **leer → leyó, leyeron**; **oír → oyó, oyeron**; **caer → cayó, cayeron**; **creer → creyó**.\nВ **yo** и **tú** — знак ударения: **leí, leíste**; **oí, oíste**.",
          ejemplos: [
            { es: "Lucía leyó el libro en dos días.", ru: "Лусия прочитала книгу за два дня." },
            { es: "¿Oyeron la música?", ru: "Они слышали музыку?" }
          ],
          errores: [
            { mal: "Pablo leió el mensaje.", bien: "Pablo leyó el mensaje.", por: "**leer**, он — **leyó**." }
          ],
          chequeo: [
            { pide: "Ana ___ la música. (oír)", opciones: ["oyó", "oió", "oyo"], ok: "oyó", por: "**oír**, она — **oyó**." }
          ]
        }
      ]
    },
    {
      id: "es9m8", n: 8, tipo: "leccion",
      titulo: "Érase una vez",
      resumen: "Рассказать историю: начало, события, конец.",
      intro: "Теперь всё вместе — история целиком: **обстановка** (imperfecto) → **что случилось** (indefinido) → **конец**. Так рассказывают сказку, случай из жизни или новость.",
      tablas: [
        { titulo: "Para contar", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "aunque", ru: "хотя" }, { es: "sin embargo", ru: "однако" }],
          [{ es: "mientras tanto", ru: "тем временем" }, { es: "hasta que", ru: "пока не, до тех пор пока" }],
          [{ es: "antes de + inf.", ru: "перед тем как" }, { es: "al final", ru: "в конце концов" }]] },
        { titulo: "Historias", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el cuento", ru: "сказка" }, { es: "el bosque", ru: "лес" }],
          [{ es: "el lobo", ru: "волк" }, { es: "la oscuridad", ru: "темнота" }],
          [{ es: "el ladrón", ru: "вор" }, { es: "robar", ru: "красть" }],
          [{ es: "el accidente", ru: "авария" }, { es: "esconder", ru: "прятать" }],
          [{ es: "llorar", ru: "плакать" }, { es: "reír", ru: "смеяться" }]] }
      ],
      secciones: [
        {
          id: "es9-historia",
          titulo: "Una historia entera",
          texto: "1) **Начало — обстановка:** **Érase una vez una niña que vivía en un pueblo. Era muy curiosa.** / **Era domingo y hacía mucho calor.**\n2) **События по порядку:** **Un día fue al bosque. De repente vio un lobo.**\n3) **Конец:** **Al final volvió a casa.**\nВ сказке всё начало — imperfecto, а события — indefinido, как в жизни.\n**hasta que** + indefinido — «пока не»: **Esperé hasta que llegó el autobús.**\n**antes de** + инфинитив — «перед тем как»: **Antes de salir, cerré la puerta.**",
          ejemplos: [
            { es: "Era tarde y estaba oscuro. De repente vio un lobo.", ru: "Было поздно и темно. Вдруг появился волк." },
            { es: "La niña lloró hasta que llegó su madre.", ru: "Девочка плакала, пока не пришла мама." }
          ],
          errores: [
            { mal: "Esperé hasta llegó el autobús.", bien: "Esperé hasta que llegó el autobús.", por: "Перед глаголом — **hasta que**." }
          ]
        },
        {
          id: "es9-conectores",
          titulo: "Aunque, sin embargo",
          texto: "**aunque** — «хотя»: **Fuimos a la playa aunque hacía frío.**\n**sin embargo** — «однако» (начинает новую фразу): **Hacía frío. Sin embargo, fuimos a la playa.**\n**mientras tanto** — «тем временем»: **Ana compraba el pan. Mientras tanto, Pablo hacía la cena.**",
          chequeo: [
            { pide: "Salimos ___ llovía.", opciones: ["aunque", "sin embargo", "mientras tanto"], ok: "aunque", por: "«Хотя» внутри фразы — **aunque**." }
          ]
        }
      ],
      frases: ["FRE-137"],
      dialogos: ["DLE-044"],
      vocab: ["cuento", "lobo", "bosque", "oscuridad", "accidente", "ladrón", "robar", "esconder", "llorar", "reír", "aunque", "sin embargo", "mientras tanto", "hasta que", "antes de"]
    },
    {
      id: "es9m9", n: 9, tipo: "leccion",
      titulo: "Mi infancia y mi ciudad",
      resumen: "Описать место и жизнь, какими они были.",
      intro: "Как выглядели твой город, улица, дом, когда ты был маленьким? И как жили люди без интернета и телефонов? Всё это — описание: **imperfecto**.",
      secciones: [
        {
          id: "es9-lugar-antes",
          titulo: "En mi pueblo había…",
          texto: "Место: **había / no había** + что, **era** + какое: **En mi barrio había un parque muy grande. Las calles eran pequeñas.**\nЖизнь: **antes no había móviles**, **veíamos la tele**, **escribíamos cartas**, **jugábamos en la calle**.\n**el campo** — сельская местность (а также поле): **Mis abuelos vivían en el campo y tenían un jardín.**\n**cuidar** — заботиться, присматривать: **Mi abuela me cuidaba por las tardes.**\nИ вывод — в настоящем: **Ahora todo es diferente.**",
          ejemplos: [
            { es: "En casa de mis abuelos había un jardín con árboles.", ru: "У бабушки с дедушкой был сад с деревьями." },
            { es: "Antes no había móviles y escribíamos cartas.", ru: "Раньше не было мобильных, и мы писали письма." }
          ],
          chequeo: [
            { pide: "Antes la tele ___ en blanco y negro.", opciones: ["era", "fue", "estaba siendo"], ok: "era", por: "Описание — **imperfecto**: **era**." }
          ]
        }
      ],
      vocab: ["campo", "jardín", "tele", "cuidar"],
      ampliacion: {
        titulo: "В деревне",
        intro: "Ещё четыре слова. Они не входят в проверку урока. **la granja** — ферма; **el caballo** — лошадь; **la vaca** — корова; **pescar** — ловить рыбу: **En verano pescábamos en el río.**",
        vocab: ["granja", "caballo", "vaca", "pescar"]
      }
    },
    {
      id: "es9m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе: какой была Москва, детство Лусии, звонок, на который Марта не ответила, «я только что пришла» и украденный телефон. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-040", "DLE-041", "DLE-042", "DLE-043", "DLE-044"]
    },
    {
      id: "es9m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Рассказать историю и сравнить «раньше» и «сейчас».",
      intro: "Две части. **Разговор по ролям:** Лусия спрашивает, каким ты был в детстве, Хавьер — как изменился твой город, Пабло просит рассказать, что с тобой случилось; ты отвечаешь своими словами. **Потом напиши** по-испански (12–16 фраз): историю (обстановка, что случилось, чем закончилось) и сравнение твоей жизни раньше и сейчас. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Imperfecto (vivía, jugaba, era…)", rx: "\\b(era|eras|éramos|eran|iba|íbamos|iban|había|[a-záéíóúñ]+(aba|abas|ábamos|aban|ía|ías|íamos|ían))\\b" },
        { txt: "Indefinido (fui, llegó, empezó…)", rx: "\\b(fui|fue|fuimos|fueron|estuve|tuve|hice|vi|vio|[a-záéíóúñ]+(é|ó|aste|iste|aron|ieron))\\b" },
        { txt: "Estaba + gerundio", rx: "\\b(estaba|estabas|estábamos|estaban) [a-záéíóúñ]+(ando|iendo|yendo)\\b" },
        { txt: "Antes… ahora…", rx: "\\bantes\\b[\\s\\S]*\\bahora\\b" },
        { txt: "Ya no, todavía, sigo…", rx: "\\b(ya no|todavía|sigo|sigue|seguimos|acabo de|dejé de|volví a|empecé a)\\b" },
        { txt: "Cuando, mientras, de repente", rx: "\\b(cuando|mientras|de repente|de pronto)\\b" },
        { txt: "Como era (descripción: era, tenía, había)", rx: "\\b(era|tenía|había|llevaba)\\b" },
        { txt: "Не меньше 12 фраз", fn: t => azFrases(t).length >= 12 }
      ],
      consejos: [
        { rx: "\\b(sol[eí]a|suelo|solíamos|suele)s? de\\b", msg: "После **soler** — сразу инфинитив: **solía ir**." },
        { rx: "\\b(pedió|pedieron|dormió|dormieron|morió|sentió|repetió|preferió|seguió)\\b", msg: "У **él / ellos** корень меняется: **pidió, durmió, murió, repitió, prefirió, siguió**." },
        { rx: "\\b(leió|oió|caió|creió|leieron)\\b", msg: "**leyó, oyó, cayó, creyó** — через **y**." },
        { rx: "\\bhabían (un|una|unos|unas|muchos|muchas|mucha|mucho|dos|tres|[a-záéíóúñ]+s)\\b", msg: "**había** — одна форма: **había muchos árboles**." },
        { rx: "\\b(trabajaba|vivía|estaba|estudiaba) (dos|tres|cuatro|cinco|seis|diez|muchas?|veinte) (horas|años|días|meses|semanas)\\b", msg: "Если сказано, сколько времени длилось, обычно **indefinido**: **trabajé tres horas**, **viví diez años**." },
        { rx: "\\b(fue|hizo) (un día |)(muy |)(bonito|sol|calor|frío)\\b", msg: "Обстановка, фон рассказа — **imperfecto**: **era un día bonito**, **hacía sol**." },
        { rx: "\\bya no [^.!?]* más\\b", msg: "**ya no** — без **más** в конце." },
        { rx: "\\bsig(o|ue|uimos) a [a-záéíóúñ]+(ar|er|ir)\\b", msg: "**seguir** + gerundio: **sigo estudiando**." },
        { rx: "\\b(vivia|tenia|comia|hacia frío|queria|podia|sabia|habia)\\b", msg: "В **-ía** знак ударения нужен всегда: **vivía, tenía, había**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es9m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Imperfecto, описание, imperfecto или indefinido, рассказ.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Imperfecto", tipos: ["imperfecto", "imperf-tilde", "soler", "habia"], n: 4 },
        { nombre: "Каким было и что изменилось", tipos: ["como-era", "antes-ahora", "perifrasis"], n: 4 },
        { nombre: "Imperfecto или indefinido", tipos: ["cual-imperf", "cual-imperf-escribir", "error"], n: 4 },
        { nombre: "Рассказ", tipos: ["estaba-gerundio", "cuando-mientras", "indef-cambio", "ordenar-historia"], n: 4 },
        { nombre: "Общение", tipos: ["pregunta", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs9Modulo(id) { return UNIDAD_ES_9.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_9 = UNIDAD_ES_9;
window.unidadEs9Modulo = unidadEs9Modulo;

/* ── Vocabulario: palabras → IDs (cuando: ESP-00060) ── */
const ES9_ID_FIJO = { "cuando": "ESP-00060" };
function es9Id(w) {
  if (ES9_ID_FIJO[w]) return ES9_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es9Vocab(m) { return (m.vocab || []).map(es9Id).filter(Boolean); }
function es9Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es9Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U9 (sin las que ya enseñaron la U1 a la U8, ni la ampliación) */
function es9Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7, 8].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_9.modulos.forEach(m => es9Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs9() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es9Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  const llenar = (frase, ok) => mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES9-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES9-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  /* Formas del verbo desde data-verbos-es.js: [frase, infinitivo, persona, módulo, regla] */
  const escribirVerbo = (pref, tipo, lista, fn, pide, nota) => lista.forEach(([frase, inf, p, mod, regla], i) => {
    const f = fn(inf, p); if (!f) return;
    const audio = llenar(frase, f);
    out.push({ id: "ES9-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: lex(inf),
      pide: pide(inf), grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES9_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (nota && nota[inf] ? ". " + nota[inf] : ".") });
  });

  /* 1. Imperfecto */
  escribirVerbo("im", "imperfecto", ES9_IMPERF, es9Imperf, inf => "Впиши «" + inf + "» в pretérito imperfecto.", ES9_NOTA_IMPERF);
  elegir("it", "imperf-tilde", ES9_TILDE, 1, "es9-imperf-reg", "Какая форма правильная?", 2, 11);
  escribirVerbo("so", "soler", ES9_SOLER, es9Imperf, () => "Впиши «soler» в pretérito imperfecto.", { soler: "Дальше — сразу инфинитив, без **de**." });
  elegir("ha", "habia", ES9_HABIA, 2, "es9-habia", "Что подходит?", 2, 21);
  /* 2. Cómo era; antes y ahora; perífrasis */
  elegir("ce", "como-era", ES9_COMO_ERA, 2, "es9-describir", "Что подходит?", 2, 31);
  escribirFalta("aa", "antes-ahora", ES9_ANTES_AHORA, "Впиши недостающее слово.");
  elegir("pe", "perifrasis", ES9_PERIF, 4, "es9-perifrasis", "Что подходит?", 2, 41);
  /* 3. Imperfecto o indefinido */
  elegir("cu", "cual-imperf", ES9_CUAL, 5, "es9-fondo-suceso", "Какое прошедшее время подходит?", 2, 51);
  escribirFalta("cw", "cual-imperf-escribir", ES9_CUAL_ESC, "Впиши глагол в нужном прошедшем времени.");
  /* 4. Estaba + gerundio; cuando, mientras */
  escribirVerbo("eg", "estaba-gerundio", ES9_ESTABA, es9Estaba, inf => "Впиши «estaba + gerundio» глагола «" + inf + "».", ES9_NOTA_GER);
  elegir("cm", "cuando-mientras", ES9_CUANDO, 6, "es9-mientras", "Что подходит?", 2, 61);
  /* 5. Pidió, durmió, leyó */
  escribirVerbo("ic", "indef-cambio", ES9_INDEF3, es9Indef, inf => "Впиши «" + inf + "» в pretérito indefinido.", ES9_NOTA_INDEF);
  /* 6. Ordenar una historia */
  ES9_HISTORIAS.forEach((l, i) => {
    let fichas = baraja(l, 71 + i); if (fichas.join("\n") === l.join("\n")) fichas = fichas.slice(1).concat(fichas[0]);
    out.push({ id: "ES9-oh-" + i, tipo: "ordenar-historia", forma: "ordenar", bloques: true, sep: "\n", dificultad: 2, modulo: 8, regla: "es9-historia", grupo: "oh-" + i,
      pide: "Собери историю по порядку.", fichas, esperada: l.join("\n"), explicacion: l.join(" ") });
  });
  /* 7. Preguntas */
  ES9_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES9-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 81), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 8. Errores típicos */
  ES9_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES9-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 9. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es9Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES9-dic-" + id)) return;
    const x = { id: "ES9-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_9.modulos.forEach(m => {
    es9Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es9Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 10. Situaciones y respuestas; dictado y orden de las frases de la U9 */
  ES9_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES9-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES9_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES9-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 9) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_9.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 8; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES9-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES9-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 11. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES9_TURNOS.forEach((T, i) => {
    out.push({ id: "ES9-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });

  /* 12. Profundización y formas (13/11/2026) */
  if (typeof es9Prof === "function") es9Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
const ES9_NOTA_IMPERF = { ser: "Неправильный: **era, eras, era…**", ir: "Неправильный: **iba, ibas, iba…**", ver: "Неправильный: **veía, veías…**",
  tener: "В imperfecto корень не меняется: **tenía**.", querer: "Корень не меняется: **quería**.", poder: "Корень не меняется: **podía**.", jugar: "Корень не меняется: **jugaba**.",
  hacer: "Корень не меняется: **hacía**.", levantarse: "Глагол с **se**." };
const ES9_NOTA_GER = { leer: "**leyendo** — через **y**.", dormir: "**durmiendo** — o → u.", oír: "**oyendo** — через **y**.", ducharse: "Глагол с **se**: **me estaba duchando** / **estaba duchándome**." };
const ES9_NOTA_INDEF = { pedir: "e → i у él / ellos.", repetir: "e → i у él / ellos.", preferir: "e → i у él / ellos.", seguir: "e → i у él / ellos.",
  dormir: "o → u у él / ellos.", morir: "o → u у él / ellos.", leer: "Через **y**.", oír: "Через **y**.", caer: "Через **y**.", creer: "Через **y**.",
  vestirse: "e → i у él / ellos; глагол с **se**.", divertirse: "e → i у él / ellos; глагол с **se**." };
/* Imperfecto: [frase, infinitivo, persona 0–5, módulo, regla] */
const ES9_IMPERF = [
  ["Antes ___ en Moscú. (yo)", "vivir", 0, 1, "es9-imperf-reg"],
  ["De pequeño ___ mucho en el parque. (yo)", "jugar", 0, 1, "es9-imperf-reg"],
  ["Mis abuelos ___ un perro.", "tener", 5, 1, "es9-imperf-reg"],
  ["Los domingos ___ con mis abuelos. (nosotros)", "comer", 3, 1, "es9-imperf-uso"],
  ["Antes Ana ___ en un banco.", "trabajar", 2, 1, "es9-imperf-uso"],
  ["¿Dónde ___ de pequeño? (tú)", "vivir", 1, 1, "es9-imperf-reg"],
  ["Antes ___ mucho. (vosotros)", "hablar", 4, 1, "es9-imperf-reg"],
  ["De pequeña no ___ el pescado. (yo, querer)", "querer", 0, 1, "es9-imperf-reg"],
  ["Todos los días ___ a las siete. (nosotros)", "levantarse", 3, 1, "es9-imperf-uso"],
  ["Mi abuelo ___ muy alegre.", "ser", 2, 2, "es9-ser-ir-ver"],
  ["Antes ___ al colegio a pie. (nosotros)", "ir", 3, 2, "es9-ser-ir-ver"],
  ["Por las tardes ___ la tele. (yo)", "ver", 0, 2, "es9-ser-ir-ver"],
  ["De pequeños ___ muy traviesos. (vosotros)", "ser", 4, 2, "es9-ser-ir-ver"],
  ["¿Adónde ___ en verano? (tú)", "ir", 1, 2, "es9-ser-ir-ver"],
  ["Mis padres ___ dibujos animados conmigo.", "ver", 5, 2, "es9-ser-ir-ver"]
];
const ES9_TILDE = [
  ["Antes ___ en Moscú. (yo, vivir)", "vivía", ["vivía", "vivia", "viví"], "В **-ía** знак ударения всегда: **vivía**."],
  ["De pequeños ___ en el patio. (nosotros, jugar)", "jugábamos", ["jugábamos", "jugabamos", "jugamos"], "У **nosotros** в **-aba** — знак: **jugábamos**."],
  ["Mi hermano ___ mucho. (leer)", "leía", ["leía", "leia", "leyía"], "**leer** — **leía**."],
  ["Antes ___ un perro. (yo, tener)", "tenía", ["tenía", "tienía", "tenia"], "Корень не меняется, знак есть: **tenía**."],
  ["Los sábados ___ al cine. (ellos, ir)", "iban", ["iban", "íban", "fueban"], "**ir** — **iban**, без знака."],
  ["De pequeño ___ muy tímido. (yo, ser)", "era", ["era", "fui", "eraba"], "Описание — **era**.", null, 2, "es9-ser-ir-ver"]
];
const ES9_SOLER = [
  ["De pequeño ___ ir al pueblo en verano. (yo)", "soler", 0, 3, "es9-soler"],
  ["Los domingos ___ comer en casa de mis abuelos. (nosotros)", "soler", 3, 3, "es9-soler"],
  ["Mi abuela ___ cuidarme por las tardes.", "soler", 2, 3, "es9-soler"],
  ["¿Qué ___ hacer en el recreo? (tú)", "soler", 1, 3, "es9-soler"],
  ["Mis padres ___ ver la tele después de cenar.", "soler", 5, 3, "es9-soler"]
];
const ES9_HABIA = [
  ["En mi pueblo ___ un río.", "había", ["había", "habían", "estaba"], "«Было, имелось» — **había**.", "haber"],
  ["Antes ___ muchos árboles en la calle.", "había", ["había", "habían", "eran"], "Одна форма для всего: **había**.", "haber"],
  ["Antes no ___ móviles.", "había", ["había", "habían", "eran"], "**no había** — «не было».", "haber"],
  ["El parque ___ cerca de mi casa.", "estaba", ["estaba", "había", "era de"], "Где было известное место — **estaba** (как **está**).", null, 2, "es9-habia"],
  ["En la clase ___ veinte niños.", "había", ["había", "habían", "eran en"], "**había veinte niños**.", "haber"]
];
const ES9_COMO_ERA = [
  ["Mi abuelo ___ alto y delgado.", "era", ["era", "estaba", "tenía"], "Какой был — **era**.", "delgado"],
  ["Mi abuela ___ el pelo rizado.", "tenía", ["tenía", "era", "estaba"], "Волосы — **tenía el pelo…**", "rizado"],
  ["De pequeña Lucía ___ gafas.", "llevaba", ["llevaba", "era", "estaba"], "Очки — **llevaba gafas**.", "gafas"],
  ["Mi padre tenía ___. (усы)", "bigote", ["bigote", "barba", "pelo"], "Усы — **el bigote**.", "bigote"],
  ["Pablo era ___: siempre jugaba y no hacía los deberes.", "travieso", ["travieso", "tímido", "serio"], "Озорной — **travieso**.", "travieso"],
  ["Ana era ___: no hablaba mucho con otros niños.", "tímida", ["tímida", "tímido", "alegre"], "Она — **tímida**.", "tímido"],
  ["Mi hermana era ___ y tenía el pelo liso.", "rubia", ["rubia", "rubio", "rubias"], "Она — **rubia**.", "rubio"],
  ["Mi abuelo tenía ___. (борода)", "barba", ["barba", "bigote", "gafas"], "Борода — **la barba**.", "barba"]
];
const ES9_ANTES_AHORA = [
  ["Antes vivía en Moscú; ___ vivo en Barcelona.", "ahora", "**antes… ahora…**", 4, "es9-antes-ahora"],
  ["Antes jugaba al fútbol, pero ya ___ juego.", "no", "«Уже не» — **ya no**.", 4, "es9-antes-ahora"],
  ["¿___ vives con tus padres? (всё ещё)", "Todavía", "«Всё ещё» — **todavía**.", 4, "es9-antes-ahora", "todavía"],
  ["___ trabajo en una tienda. (в настоящее время)", "Actualmente", "«В настоящее время» — **actualmente**.", 4, "es9-antes-ahora", "actualmente"],
  ["Antes ___ tímido; ahora no. (yo, ser)", "era", "Раньше — imperfecto: **era**.", 4, "es9-antes-ahora"]
];
const ES9_PERIF = [
  ["___ llegar a casa. (только что)", "Acabo de", ["Acabo de", "Dejo de", "Sigo"], "«Только что» — **acabar de**.", "acabar"],
  ["___ comer carne hace dos años. (перестал)", "Dejé de", ["Dejé de", "Acabé de", "Volví a"], "«Перестать» — **dejar de**.", "dejar"],
  ["___ estudiando español. (всё ещё)", "Sigo", ["Sigo", "Sigo a", "Dejo de"], "**seguir** + gerundio.", "seguir"],
  ["___ correr en septiembre. (начал)", "Empecé a", ["Empecé a", "Empecé de", "Acabé de"], "«Начать» — **empezar a**.", "empezar"],
  ["Ayer ___ ver la película. (снова)", "volví a", ["volví a", "volví de", "seguí"], "«Снова» — **volver a**.", "volver"],
  ["Lucía ___ jugar al tenis el año pasado. (перестала)", "dejó de", ["dejó de", "dejó", "acabó de"], "**dejar de** + инфинитив.", "dejar"],
  ["Mis padres ___ viviendo en el piso de antes. (всё ещё)", "siguen", ["siguen", "siguen a", "dejan de"], "**seguir** + gerundio: **siguen viviendo**.", "seguir"],
  ["___ decidir: me quedo en Barcelona. (только что)", "Acabo de", ["Acabo de", "Vuelvo a", "Empiezo a"], "**Acabo de decidir** — я только что решил.", "decidir"]
];
const ES9_CUAL = [
  ["___ sol y fuimos a la playa. (hacer)", "Hacía", ["Hacía", "Hizo"], "Фон — **imperfecto**: **hacía sol**."],
  ["Hacía sol y ___ a la playa. (nosotros, ir)", "fuimos", ["fuimos", "íbamos"], "Что сделали — **indefinido**: **fuimos**."],
  ["De pequeño ___ al colegio en bici. (yo, ir)", "iba", ["iba", "fui"], "Обычно, каждый день — **imperfecto**."],
  ["Ayer ___ al trabajo en bici. (yo, ir)", "fui", ["fui", "iba"], "Один раз, вчера — **indefinido**."],
  ["Ayer ___ tres horas. (yo, trabajar)", "trabajé", ["trabajé", "trabajaba"], "Сколько времени — закончено: **trabajé**.", null, 5, "es9-limite"],
  ["Antes ___ en un banco. (yo, trabajar)", "trabajaba", ["trabajaba", "trabajé"], "Как было раньше — **imperfecto**."],
  ["___ diez años en Moscú; ahora vivo aquí. (yo, vivir)", "Viví", ["Viví", "Vivía"], "**diez años** — отрезок закончен: **viví**.", null, 5, "es9-limite"],
  ["La casa ___ grande y tenía un jardín. (ser)", "era", ["era", "fue"], "Описание — **era**."],
  ["Era tarde y ___ mucha gente en la calle. (haber)", "había", ["había", "hubo"], "Обстановка — **había**."],
  ["De repente ___ a llover. (empezar)", "empezó", ["empezó", "empezaba"], "После **de repente** — событие: **empezó**.", null, 6, "es9-mientras"],
  ["Estaba leyendo cuando ___ Ana. (llegar)", "llegó", ["llegó", "llegaba"], "Событие, которое прервало, — **llegó**.", null, 6, "es9-interrumpida"],
  ["Todos los veranos ___ al pueblo. (nosotros, ir)", "íbamos", ["íbamos", "fuimos"], "Каждое лето — привычка: **íbamos**."]
];
const ES9_CUAL_ESC = [
  ["Antes ___ en Moscú. (yo, vivir)", "vivía", "Как было раньше — **vivía**.", 5, "es9-fondo-suceso", "vivir"],
  ["El año pasado ___ a Madrid. (yo, ir)", "fui", "Один раз — **fui**.", 5, "es9-fondo-suceso", "ir"],
  ["___ frío y no había gente en la calle. (hacer)", "Hacía", "Фон — **hacía**.", 5, "es9-fondo-suceso", "hacer"],
  ["Ayer ___ dos horas en el parque. (nosotros, estar)", "estuvimos", "**dos horas** — **estuvimos**.", 5, "es9-limite", "estar"],
  ["De pequeña Ana ___ muy tímida. (ser)", "era", "Описание — **era**.", 5, "es9-fondo-suceso", "ser"],
  ["Cuando ___ el teléfono, estaba en la ducha. (sonar)", "sonó", "Событие — **sonó**.", 6, "es9-interrumpida", "sonar"],
  ["Mientras yo ___, mi hermano jugaba. (cocinar)", "cocinaba", "**mientras** — фон: **cocinaba**.", 6, "es9-mientras", "mientras"],
  ["La niña ___ hasta que llegó su madre. (llorar)", "lloró", "**hasta que** — до конца: **lloró**.", 8, "es9-historia", "llorar"]
];
/* Estaba + gerundio: [frase, infinitivo, persona, módulo, regla] */
const ES9_ESTABA = [
  ["___ cuando sonó el teléfono. (yo, dormir)", "dormir", 0, 6, "es9-interrumpida"],
  ["___ cuando llegó Pablo. (nosotros, cenar)", "cenar", 3, 6, "es9-interrumpida"],
  ["Ana ___ cuando se fue la luz.", "leer", 2, 6, "es9-interrumpida"],
  ["¿Qué ___ cuando te llamé? (tú, hacer)", "hacer", 1, 6, "es9-interrumpida"],
  ["Los niños ___ en el patio cuando empezó a llover.", "jugar", 5, 6, "es9-interrumpida"],
  ["___ música cuando entró el ladrón. (yo, escuchar)", "escuchar", 0, 6, "es9-interrumpida"]
];
const ES9_CUANDO = [
  ["___ yo leía, mi hermano veía la tele.", "Mientras", ["Mientras", "De repente", "Hasta que"], "Два действия одновременно — **mientras**.", "mientras"],
  ["Estaba en casa ___ sonó el teléfono.", "cuando", ["cuando", "mientras", "aunque"], "Событие, которое прервало, — **cuando**.", "cuando"],
  ["Caminábamos por el bosque y ___ vimos un lobo.", "de repente", ["de repente", "mientras", "todavía"], "«Вдруг» — **de repente**.", "de repente"],
  ["Tenía mucho ___ de la oscuridad.", "miedo", ["miedo", "asustado", "tormenta"], "**tener miedo** — бояться.", "miedo", 6, "es9-mientras"],
  ["Fuimos a la playa ___ hacía frío.", "aunque", ["aunque", "sin embargo", "mientras tanto"], "«Хотя» внутри фразы — **aunque**.", "aunque", 8, "es9-conectores"],
  ["Esperé ___ llegó el autobús.", "hasta que", ["hasta que", "hasta", "mientras tanto"], "Перед глаголом — **hasta que**.", "hasta que", 8, "es9-historia"]
];
/* Indefinido de él y ellos: [frase, infinitivo, persona, módulo, regla] */
const ES9_INDEF3 = [
  ["Pablo ___ una cerveza.", "pedir", 2, 7, "es9-e-i-o-u"],
  ["Los niños ___ muy bien.", "dormir", 5, 7, "es9-e-i-o-u"],
  ["Anoche Ana ___ ocho horas.", "dormir", 2, 7, "es9-e-i-o-u"],
  ["Mi abuelo ___ en 2015.", "morir", 2, 7, "es9-e-i-o-u"],
  ["El profesor ___ la pregunta.", "repetir", 2, 7, "es9-e-i-o-u"],
  ["Marta ___ quedarse en casa.", "preferir", 2, 7, "es9-e-i-o-u"],
  ["Mis amigos ___ la cuenta.", "pedir", 5, 7, "es9-e-i-o-u"],
  ["Ayer ___ un libro. (yo, pedir)", "pedir", 0, 7, "es9-e-i-o-u"],
  ["Lucía ___ el libro en dos días.", "leer", 2, 7, "es9-y"],
  ["¿___ la música? (ellos, oír)", "oír", 5, 7, "es9-y"],
  ["La pelota ___ en el jardín.", "caer", 2, 7, "es9-y"],
  ["Pablo no me ___.", "creer", 2, 7, "es9-y"]
];
const ES9_HISTORIAS = [
  ["Era sábado y hacía mucho sol.", "Fuimos a la playa con mis amigos.", "De repente empezó a llover.", "Al final volvimos a casa en metro."],
  ["Érase una vez una niña que vivía en un pueblo.", "Un día fue al bosque.", "De repente vio un lobo.", "Al final volvió a casa con su abuela."],
  ["Estaba durmiendo en casa.", "De pronto sonó el teléfono.", "Era mi hermano: estaba en el aeropuerto.", "Fui a buscarlo y llegamos a casa a las tres."]
];
const ES9_PREGUNTAS = [
  ["¿Dónde ___ de pequeño?", "Vivía en Moscú.", "vivías", ["vivías", "viviste ayer", "vives"], 1, "es9-imperf-uso"],
  ["¿Cómo ___ tu abuelo?", "Era alto y tenía bigote.", "era", ["era", "fue", "estaba"], 2, "es9-describir"],
  ["¿Qué ___ cuando te llamé?", "Estaba durmiendo.", "estabas haciendo", ["estabas haciendo", "hiciste", "has hecho"], 6, "es9-interrumpida"],
  ["¿Qué ___ hacer en verano?", "Solía ir al pueblo.", "solías", ["solías", "solías de", "suelas"], 3, "es9-soler"],
  ["¿___ vives en Moscú?", "No, ya no.", "Todavía", ["Todavía", "Ya", "Antes"], 4, "es9-antes-ahora"],
  ["¿Qué ___?", "Me robaron el móvil.", "pasó", ["pasó", "pasaba", "pasa de"], 8, "es9-historia"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES9_ERRORES = [
  [["Ayer", "trabajaba", "tres", "horas."], 1, "trabajé", 5, "es9-limite", "Сколько времени — закончено: **trabajé**."],
  [["De", "pequeño", "fui", "muy", "tímido."], 2, "era", 2, "es9-ser-ir-ver", "Каким был — описание: **era**."],
  [["Marta", "pedió", "la", "cuenta."], 1, "pidió", 7, "es9-e-i-o-u", "**pedir**, она — **pidió**."],
  [["Pablo", "dormió", "diez", "horas."], 1, "durmió", 7, "es9-e-i-o-u", "**dormir**, он — **durmió**."],
  [["Habían", "muchos", "árboles", "en", "la", "calle."], 0, "Había", 2, "es9-habia", "**había** — одна форма."],
  [["Antes", "vivia", "en", "Moscú."], 1, "vivía", 1, "es9-imperf-reg", "В **-ía** — знак ударения: **vivía**."],
  [["Sigo", "a", "estudiar", "español."], 2, "estudiando", 4, "es9-perifrasis", "**seguir** + gerundio: **sigo estudiando**."],
  [["Lucía", "leió", "el", "libro."], 1, "leyó", 7, "es9-y", "**leer**, она — **leyó**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES9_SITUACIONES = [
  ["Ты рассказываешь, что раньше жил в Москве.", "Antes vivía en Moscú.", ["Antes viví en Moscú ayer.", "Antes vivia en Moscú."], "Как было раньше — **vivía**, со знаком.", 1],
  ["Ты описываешь своего дедушку: высокий, с усами.", "Mi abuelo era alto y tenía bigote.", ["Mi abuelo fue alto y tuvo bigote.", "Mi abuelo estaba alto y tenía bigote."], "Описание — **era**, **tenía**.", 2],
  ["Ты говоришь, что в детстве обычно ездил в деревню летом.", "De pequeño solía ir al pueblo en verano.", ["De pequeño solía de ir al pueblo en verano.", "De pequeño suelo ir al pueblo en verano."], "**solía** + инфинитив.", 3],
  ["Ты говоришь, что только что пришёл.", "Acabo de llegar.", ["Acabo llegar.", "Dejo de llegar."], "**acabar de** + инфинитив.", 4],
  ["Ты объясняешь, что спал, когда зазвонил телефон.", "Estaba durmiendo cuando sonó el teléfono.", ["Estuve durmiendo cuando sonaba el teléfono.", "Dormí cuando sonaba el teléfono."], "Фон — **estaba durmiendo**, событие — **sonó**.", 6],
  ["Ты рассказываешь, что Пабло заказал тортилью.", "Pablo pidió una tortilla.", ["Pablo pedió una tortilla.", "Pablo pedía una tortilla ayer a las dos."], "**pedir**, он — **pidió**.", 7],
  ["Ты начинаешь сказку.", "Érase una vez un niño que vivía en un bosque.", ["Érase una vez un niño que vivió en un bosque siempre.", "Fue una vez un niño que vive en un bosque."], "Начало — **Érase una vez…** + imperfecto.", 8],
  ["Ты говоришь другу, которого давно не видел, что он изменился.", "¡Cómo has cambiado!", ["¡Cómo cambiabas!", "¡Cómo has cambiada!"], "**¡Cómo has cambiado!**", 4]
];
const ES9_RESPUESTAS = [
  ["¿Cómo eras de pequeño?", "Era muy travieso.", ["Fui muy travieso ayer.", "Estaba muy travieso siempre."], "Описание — **era**.", 2],
  ["¿Todavía vives con tus padres?", "No, ya no.", ["No, ya no más.", "Sí, ya no."], "**No, ya no.**", 4],
  ["¿Qué estabas haciendo?", "Estaba viendo la tele.", ["Estuve viendo la tele.", "Vi la tele mañana."], "**estaba** + gerundio.", 6],
  ["¿Te acuerdas de tu primer colegio?", "Sí, era pequeño y tenía un patio muy grande.", ["Sí, fue pequeño y tuvo un patio.", "Sí, es pequeño y tenía patio ayer."], "Описание — **era**, **tenía**.", 3],
  ["¿Qué hacías en el recreo?", "Jugábamos con la pelota.", ["Jugamos con la pelota mañana.", "Jugabamos con la pelota."], "Привычка — **jugábamos**, со знаком.", 3],
  ["¡Me robaron el móvil!", "¡Qué susto! ¿Cómo fue?", ["¡Qué susto! ¿Cómo era?", "¡Felicidades! ¿Cómo fue?"], "О случившемся — **¿Cómo fue?**", 8]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas «a|b|~c», rx?]], modelo, pista?] */
function es9Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f, rx]) => (rx ? { es, formas: f ? f.split("|") : [], rx } : { es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const IMPERF_RX = "^(era|eras|éramos|eran|iba|íbamos|iban|veía|veíamos|había|[a-záéíóúñ]+(aba|abas|ábamos|aban|ía|ías|íamos|ían))$";
const ES9_TURNOS = [
  es9Turnos("Lucía", "lucia", "Chat con Lucía: ¿cómo eras de pequeño?", true, [
    ["¡Hola! ¿Cómo eras de pequeño?", "Привет! Каким ты был(а) в детстве?", "Опиши себя: каким ты был(а).",
      [["был(а)", "era"], ["какой", "tímido|tímida|travieso|traviesa|alegre|serio|seria|rubio|rubia|moreno|morena|delgado|delgada|feliz|curioso|curiosa|~muy"]], "Era muy tímido.", "**Era…**"],
    ["¿Y qué hacías en verano?", "А что ты делал(а) летом?", "Расскажи, что ты обычно делал(а) летом.",
      [["imperfecto", "", IMPERF_RX]], "Iba al pueblo de mis abuelos.", "**Iba…, jugaba…, solía…**"],
    ["¿Todavía vas allí?", "Ты всё ещё туда ездишь?", "Ответь: уже нет — или да, всё ещё.",
      [["ответ", "ya no|todavía|sí|no"]], "No, ya no.", "**No, ya no.** / **Sí, todavía.**"]
  ]),
  es9Turnos("Javier", "javier", "Antes y ahora", false, [
    ["¿Cómo era tu ciudad antes?", "Каким был твой город раньше?", "Скажи, что было (или чего не было) раньше.",
      [["было", "había|no había|era"]], "Antes no había tantos coches.", "**Antes había… / no había…**"],
    ["¿Y ahora?", "А сейчас?", "Скажи, какой он сейчас.",
      [["сейчас", "ahora|es|hay|actualmente"]], "Ahora es más moderna.", "**Ahora es… / hay…**"],
    ["¿Sigues viviendo allí?", "Ты всё ещё там живёшь?", "Ответь: да, всё ещё живу — или нет, уже не живу.",
      [["ответ", "sigo|ya no|todavía|vivo"]], "No, ya no vivo allí.", "**Sigo viviendo…** / **Ya no vivo…**"]
  ]),
  es9Turnos("Pablo", "pablo", "¿Qué te pasó?", false, [
    ["¿Qué te pasó ayer?", "Что с тобой вчера случилось?", "Скажи, что ты делал(а), когда что-то случилось: estaba + gerundio.",
      [["estaba", "estaba"], ["gerundio", "", "^[a-záéíóúñ]+(ando|iendo|yendo)$"]], "Estaba comiendo en un bar.", "**Estaba…ando / …iendo**"],
    ["¿Y qué pasó?", "И что случилось?", "Расскажи, что случилось вдруг.",
      [["вдруг", "de repente|de pronto|cuando"], ["indefinido", "", "^[a-záéíóúñ]+(ó|é|aron|ieron)$|^(fue|vino|vi|vio|hizo|tuve|tuvo|estuvo)$"]], "De repente se fue la luz.", "**De repente…** + indefinido"],
    ["¡Qué susto! ¿Y al final?", "Ну и страх! И чем всё закончилось?", "Скажи, чем закончилось.",
      [["в конце", "al final|después|luego|por fin"]], "Al final volví a casa.", "**Al final…**"]
  ])
];
window.ejerciciosUnidadEs9 = ejerciciosUnidadEs9;
window.es9Vocab = es9Vocab;
window.es9Ampliacion = es9Ampliacion;
window.es9Objetivo = es9Objetivo;
/* Desafío del día U9 (js/hoy.js): [verbo, tema] — una frase sobre uno mismo en imperfecto */
const ES9_HOY = [["vivir", "antes"], ["jugar", "de pequeño"], ["ir", "en verano, de pequeño"], ["ver", "antes"], ["tener", "de pequeño"], ["comer", "los domingos, antes"],
  ["ser", "de pequeño"], ["estudiar", "antes"], ["leer", "de pequeño"], ["trabajar", "antes"], ["escuchar", "antes"], ["levantarse", "antes"], ["salir", "de joven"], ["querer", "de pequeño"]];
window.ES9_HOY = ES9_HOY;
window.es9Imperf = es9Imperf;
window.es9Indef = es9Indef;
window.es9Pres = es9Pres;
const ES9_MEZCLA = { imperfecto: 3, "imperf-tilde": 2, soler: 1, habia: 1, "como-era": 2, "antes-ahora": 1, perifrasis: 2, "cual-imperf": 3, "cual-imperf-escribir": 2,
  "estaba-gerundio": 2, "cuando-mientras": 1, "indef-cambio": 2, "ordenar-historia": 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1 };
window.ES9_MEZCLA = ES9_MEZCLA;

/* ── Profundización (13/11/2026, repaso Abecé / Azbuka pedido por Manu) ──────────────
   Más a fondo y ejemplos que se suman a la teoría al cargar; tipos de profundización de
   Azbuka (¿Cuál es la correcta?, ¿Por qué?, de oído, par, descubrir, cadena, diagnóstico,
   desarmar) y ejercicios de formas generados desde data-verbos-es.js. */
const ES9_MAS = {
  "es9-imperf-reg": { titulo: "Почему yo и él совпадают", texto: "В imperfecto у **yo** и **él / ella** одна форма: **yo vivía**, **ella vivía**. Поэтому здесь местоимение **yo** говорят чаще, чем в других временах, — если из фразы не понятно, кто: **Yo vivía en Moscú y él vivía en Madrid.**\nЕсли понятно, местоимение не нужно: **De pequeño vivía en un pueblo.**", ejemplos: [{ es: "Yo trabajaba y ella estudiaba.", ru: "Я работал, а она училась." }] },
  "es9-imperf-uso": { titulo: "Quería… — вежливая просьба", texto: "**Quería…** в магазине — это не прошлое, а вежливость: **Quería un café, por favor** — я бы хотел кофе. Ты уже видел это в пятом уроке.", ejemplos: [{ es: "Quería una mesa para dos.", ru: "Я бы хотел столик на двоих." }] },
  "es9-ser-ir-ver": { titulo: "Era или fue?", texto: "**Era** — каким что-то было, описание: **La fiesta era en casa de Lucía** (где проходила). **Fue** — оценка всего события целиком, когда оно закончилось: **La fiesta fue genial** — праздник удался.\nЧасто говорят и так, и так, но смысл разный: **era bonito** — фон рассказа; **fue bonito** — итог.", ejemplos: [{ es: "El viaje fue muy bonito.", ru: "Поездка была очень красивой (итог)." }, { es: "El pueblo era muy bonito.", ru: "Деревня была очень красивой (описание)." }] },
  "es9-habia": { titulo: "Había или hubo?", texto: "**Había** — что было вокруг, описание: **Había mucha gente.** **Hubo** — что случилось один раз: **Hubo un accidente en la calle** — на улице произошла авария. В рассказе почти всегда нужно **había**; **hubo** — для событий." , ejemplos: [{ es: "Ayer hubo una tormenta.", ru: "Вчера была гроза (случилась)." }] },
  "es9-describir": { titulo: "Era или estaba?", texto: "Как и в настоящем: **era** — какой человек был (характер, внешность): **era alto**, **era tímido**; **estaba** — в каком состоянии в тот момент: **estaba cansado**, **estaba enfermo**.", ejemplos: [{ es: "Era muy alegre, pero ese día estaba triste.", ru: "Он был очень весёлым, но в тот день был грустным." }] },
  "es9-soler": { titulo: "Soler — только «обычно»", texto: "**soler** используют почти только в настоящем (**suelo**) и в imperfecto (**solía**): это привычка. Сказать «я обычно сделал» нельзя — для одного раза **soler** не подходит.\nВместо **soler** можно сказать **normalmente** + глагол: **Normalmente iba en metro** = **Solía ir en metro**.", ejemplos: [{ es: "Normalmente iba en metro.", ru: "Обычно я ездил на метро." }] },
  "es9-perifrasis": { titulo: "Volver a или otra vez?", texto: "**volver a** + инфинитив и **otra vez** значат одно и то же: **Volví a ver la película** = **Vi la película otra vez**. **volver a** звучит естественнее в разговоре.\n**acabar de** — только «только что»: **Acabo de comer**; а **acabar** без **de** — «закончить»: **Acabé el libro**.", ejemplos: [{ es: "Vi la película otra vez.", ru: "Я снова посмотрел фильм." }, { es: "Acabé el libro ayer.", ru: "Я дочитал книгу вчера." }] },
  "es9-fondo-suceso": { titulo: "Conocía или conocí?", texto: "У некоторых глаголов два прошедших дают разный смысл:\n**conocía a Pablo** — я был знаком с Пабло; **conocí a Pablo** — я познакомился с Пабло.\n**tenía un perro** — у меня была собака; **tuve un perro** — у меня (когда-то, какое-то время) была собака, и всё.\n**quería ir** — хотел пойти (и неизвестно, пошёл ли); **no quise ir** — отказался идти.", ejemplos: [{ es: "Conocí a Pablo en 2024.", ru: "Я познакомился с Пабло в 2024 году." }, { es: "Ya conocía a Pablo.", ru: "Я уже был знаком с Пабло." }] },
  "es9-interrumpida": { titulo: "Estaba haciendo или hacía?", texto: "**Estaba durmiendo** и **dormía** значат почти одно и то же. **estaba** + gerundio сильнее подчёркивает: «в тот самый момент». Для привычки (каждый день, обычно) — только простое imperfecto: **Todos los días dormía después de comer**, а не «estaba durmiendo».", ejemplos: [{ es: "Todos los días dormía después de comer.", ru: "Каждый день я спал после обеда." }] },
  "es9-e-i-o-u": { titulo: "И в gerundio", texto: "Та же смена корня есть в gerundio: **pedir → pidiendo**, **dormir → durmiendo**, **seguir → siguiendo**, **morir → muriendo**. Поэтому **estaba durmiendo**, **sigo pidiendo**.", ejemplos: [{ es: "Estaba durmiendo cuando llegaste.", ru: "Я спал, когда ты пришёл." }] },
  "es9-historia": { titulo: "Había una vez", texto: "В Латинской Америке сказку чаще начинают словами **Había una vez…** — это то же самое, что **Érase una vez…** (так обычно говорят в Испании). Конец сказки по-испански: **…y fueron felices** — «и жили они счастливо».", ejemplos: [{ es: "Había una vez un niño que vivía en un bosque.", ru: "Жил-был мальчик, который жил в лесу." }] },
  "es9-lugar-antes": { titulo: "Hace años, antes", texto: "**antes** — «раньше» (вообще, без даты): **Antes no había móviles.** **hace años** — «много лет назад»: **Hace años vivía en el campo.** **en aquella época** — «в то время»: **En aquella época no había ordenador en casa.**", ejemplos: [{ es: "En aquella época vivíamos en el campo.", ru: "В то время мы жили за городом." }] }
};
UNIDAD_ES_9.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES9_MAS[s.id] && !s.mas) s.mas = ES9_MAS[s.id]; }));

/* Profundización: [tipo, módulo, regla, datos…] */
const ES9_NAT = [   /* [correcta, [equivocadas], explicación, módulo, regla] */
  ["De pequeño vivía en Moscú.", ["De pequeño vivió en Moscú siempre.", "De pequeño vivo en Moscú."], "Как было в детстве — **vivía**.", 1, "es9-imperf-uso"],
  ["Antes jugábamos en la calle.", ["Antes jugamos en la calle todos los días.", "Antes jugabamos en la calle."], "Привычка — **jugábamos**, со знаком.", 1, "es9-imperf-reg"],
  ["Mi abuela era muy cariñosa.", ["Mi abuela estaba muy cariñosa siempre.", "Mi abuela fue muy cariñosa todos los días."], "Характер — **era**.", 2, "es9-describir"],
  ["En mi calle había dos tiendas.", ["En mi calle habían dos tiendas.", "En mi calle estaban dos tiendas."], "**había** — одна форма.", 2, "es9-habia"],
  ["De pequeño solía ir al río.", ["De pequeño solía de ir al río.", "De pequeño solí ir al río."], "**solía** + инфинитив.", 3, "es9-soler"],
  ["Ya no vivo con mis padres.", ["Ya no vivo con mis padres más.", "Todavía no vivo con mis padres ya."], "**ya no** — без **más**.", 4, "es9-antes-ahora"],
  ["Sigo estudiando español.", ["Sigo a estudiar español.", "Sigo de estudiar español."], "**seguir** + gerundio.", 4, "es9-perifrasis"],
  ["Acabo de comer.", ["Acabo comer.", "Acabo a comer."], "**acabar de** + инфинитив.", 4, "es9-perifrasis"],
  ["Ayer trabajé ocho horas.", ["Ayer trabajaba ocho horas.", "Ayer trabajo ocho horas."], "Сколько времени — закончено: **trabajé**.", 5, "es9-limite"],
  ["Era sábado y hacía sol.", ["Fue sábado y hizo sol.", "Era sábado y hizo sol todo el tiempo."], "Фон — **era**, **hacía**.", 5, "es9-fondo-suceso"],
  ["Estaba leyendo cuando llegó Ana.", ["Estuve leyendo cuando llegaba Ana.", "Leí cuando llegaba Ana."], "Фон — **estaba leyendo**, событие — **llegó**.", 6, "es9-interrumpida"],
  ["Marta pidió un café.", ["Marta pedió un café.", "Marta pedí un café."], "**pedir**, она — **pidió**.", 7, "es9-e-i-o-u"],
  ["Los niños durmieron bien.", ["Los niños dormieron bien.", "Los niños durmió bien."], "**dormir**, они — **durmieron**.", 7, "es9-e-i-o-u"],
  ["Pablo leyó el mensaje.", ["Pablo leió el mensaje.", "Pablo leyo el mensaje."], "**leer**, он — **leyó**.", 7, "es9-y"],
  ["Esperé hasta que llegó el tren.", ["Esperé hasta llegó el tren.", "Esperé hasta que llegaba el tren siempre."], "**hasta que** + indefinido.", 8, "es9-historia"],
  ["Fuimos a la playa aunque hacía frío.", ["Fuimos a la playa sin embargo hacía frío.", "Íbamos a la playa aunque hizo frío una vez."], "«Хотя» внутри фразы — **aunque**.", 8, "es9-conectores"]
];
const ES9_POR = [   /* [frase, pregunta, correcta, [otras], explicación, módulo, regla] */
  ["De pequeño iba al colegio en bici.", "Почему «iba», а не «fui»?", "Это повторялось, привычка", ["Это случилось один раз", "Это будущее"], "Привычка в прошлом — **imperfecto**.", 1, "es9-imperf-uso"],
  ["Ayer fui al colegio en bici.", "Почему «fui», а не «iba»?", "Это было один раз, вчера", ["Это описание", "Это привычка"], "Одно событие — **indefinido**.", 5, "es9-fondo-suceso"],
  ["Hacía sol y fuimos a la playa.", "Почему «hacía»?", "Это фон, обстановка", ["Это событие", "Это будущее"], "Обстановка — **imperfecto**.", 5, "es9-fondo-suceso"],
  ["Viví diez años en Moscú.", "Почему «viví», а не «vivía»?", "Сказано, сколько длилось: отрезок закончен", ["Это привычка", "Это описание места"], "**diez años** — закончено: **indefinido**.", 5, "es9-limite"],
  ["Estaba durmiendo cuando sonó el teléfono.", "Почему «sonó»?", "Это событие, которое прервало действие", ["Это фон", "Это привычка"], "Событие — **indefinido**.", 6, "es9-interrumpida"],
  ["Estaba durmiendo cuando sonó el teléfono.", "Почему «estaba durmiendo»?", "Это действие шло в тот момент", ["Это закончилось раньше", "Это привычка"], "Процесс — **estaba** + gerundio.", 6, "es9-interrumpida"],
  ["Ana pidió la cuenta.", "Почему «pidió», а не «pedió»?", "У él / ella корень меняется: e → i", ["Это imperfecto", "Это ошибка, правильно pedió"], "**pedir**: él — **pidió**.", 7, "es9-e-i-o-u"],
  ["Pablo leyó el libro.", "Почему «leyó»?", "Между гласными -ió превращается в -yó", ["Это imperfecto", "Это настоящее"], "**leer** — **leyó**.", 7, "es9-y"],
  ["En mi pueblo había un río.", "Почему «había», а не «habían»?", "Как hay — одна форма для всего", ["Потому что río — ед. ч.", "Это indefinido"], "**había** не меняется.", 2, "es9-habia"],
  ["Mi abuelo tenía barba.", "Почему «tenía», а не «era»?", "Борода — это то, что у него было", ["Потому что это характер", "Потому что это событие"], "Что у человека было — **tenía**.", 2, "es9-describir"]
];
const ES9_OIDO = [  /* [audio, pregunta, correcta, opciones, explicación, módulo, regla] */
  ["Hablaba con Ana.", "Послушай: это imperfecto или indefinido?", "Imperfecto", ["Imperfecto", "Indefinido"], "**hablaba** — imperfecto.", 1, "es9-imperf-reg"],
  ["Hablé con Ana.", "Послушай: это imperfecto или indefinido?", "Indefinido", ["Imperfecto", "Indefinido"], "**hablé** — indefinido.", 5, "es9-fondo-suceso"],
  ["Comíamos en casa.", "Послушай: это imperfecto или indefinido?", "Imperfecto", ["Imperfecto", "Indefinido"], "**comíamos** — imperfecto.", 1, "es9-imperf-reg"],
  ["Comimos en casa.", "Послушай: это imperfecto или indefinido?", "Indefinido", ["Imperfecto", "Indefinido"], "**comimos** — indefinido.", 5, "es9-fondo-suceso"],
  ["Íbamos a la playa.", "Послушай: какой глагол?", "ir", ["ir", "ver", "ser"], "**íbamos** — от **ir**.", 2, "es9-ser-ir-ver"],
  ["Veíamos la tele.", "Послушай: какой глагол?", "ver", ["ver", "ir", "venir"], "**veíamos** — от **ver**.", 2, "es9-ser-ir-ver"],
  ["Durmió muy bien.", "Послушай: кто?", "él / ella", ["yo", "él / ella", "nosotros"], "**durmió** — он / она.", 7, "es9-e-i-o-u"],
  ["Pedí un café.", "Послушай: кто?", "yo", ["yo", "él / ella", "ellos"], "**pedí** — я.", 7, "es9-e-i-o-u"],
  ["Estaba leyendo.", "Послушай: что это?", "Действие в процессе", ["Действие в процессе", "Одно событие", "Будущее"], "**estaba leyendo** — в процессе.", 6, "es9-interrumpida"],
  ["Acabo de llegar.", "Послушай: когда он пришёл?", "Только что", ["Только что", "Давно", "Завтра"], "**acabo de** — только что.", 4, "es9-perifrasis"]
];
const ES9_PAR = [   /* [situación, correcta, otra, explicación, módulo, regla] */
  ["Ты рассказываешь, что в детстве каждое лето ездил на море.", "De pequeño iba a la playa en verano.", "De pequeño fui a la playa en verano.", "Каждое лето — привычка: **iba**.", 5, "es9-fondo-suceso"],
  ["Ты рассказываешь, что прошлым летом один раз ездил на море.", "El verano pasado fui a la playa.", "El verano pasado iba a la playa.", "Один раз — **fui**.", 5, "es9-fondo-suceso"],
  ["Ты говоришь, что познакомился с Пабло в 2024 году.", "Conocí a Pablo en 2024.", "Conocía a Pablo en 2024.", "Познакомиться (событие) — **conocí**.", 5, "es9-fondo-suceso"],
  ["Ты говоришь, что раньше уже был знаком с Пабло.", "Ya conocía a Pablo.", "Ya conocí a Pablo.", "Быть знакомым (состояние) — **conocía**.", 5, "es9-fondo-suceso"],
  ["Ты говоришь, что только что поел.", "Acabo de comer.", "Acabé de comer.", "«Только что» — **acabo de** (в настоящем).", 4, "es9-perifrasis"],
  ["Ты говоришь, что перестал играть в футбол.", "Dejé de jugar al fútbol.", "Acabé de jugar al fútbol.", "«Перестать» — **dejar de**.", 4, "es9-perifrasis"],
  ["Ты говоришь, что вчера в восемь ты ужинал (и тут позвонили).", "Estaba cenando.", "Cené.", "В процессе — **estaba cenando**.", 6, "es9-interrumpida"],
  ["Ты говоришь, что прожил в Москве пять лет (и уехал).", "Viví cinco años en Moscú.", "Vivía cinco años en Moscú.", "Отрезок закончен — **viví**.", 5, "es9-limite"]
];
const ES9_DESC = [  /* [pide, correcta, [otras], explicación, módulo, regla] */
  ["hablar → hablaba · trabajar → trabajaba. А jugar?", "jugaba", ["jugía", "juegaba"], "**-ar → -aba**, корень не меняется.", 1, "es9-imperf-reg"],
  ["comer → comía · vivir → vivía. А escribir?", "escribía", ["escribaba", "escribia"], "**-er, -ir → -ía**, со знаком.", 1, "es9-imperf-reg"],
  ["pedir → pidió · repetir → repitió. А preferir?", "prefirió", ["preferió", "prefiró"], "e → i у él: **prefirió**.", 7, "es9-e-i-o-u"],
  ["leer → leyó · creer → creyó. А caer?", "cayó", ["caió", "cayó de"], "**-yó** между гласными.", 7, "es9-y"],
  ["yo pedí · tú pediste. А él?", "pidió", ["pedió", "pidí"], "Меняется только él / ellos: **pidió**.", 7, "es9-e-i-o-u"],
  ["dormir → durmiendo · pedir → pidiendo. А seguir?", "siguiendo", ["seguiendo", "siguendo"], "e → i и в gerundio.", 7, "es9-e-i-o-u"]
];
const ES9_CAD = [   /* [base, [[pide, esperada]…], módulo, regla] */
  ["Ahora vivo en Barcelona.", [["Теперь: раньше (antes) — в Москве.", "Antes vivía en Moscú."], ["Теперь: мы (nosotros).", "Antes vivíamos en Moscú."]], 1, "es9-imperf-reg"],
  ["Juego al fútbol.", [["Теперь: в детстве (de pequeño).", "De pequeño jugaba al fútbol."], ["Теперь: вчера, один раз (ayer).", "Ayer jugué al fútbol."]], 5, "es9-fondo-suceso"],
  ["Ana lee un libro.", [["Теперь: в прошлом, в процессе (estaba + gerundio).", "Ana estaba leyendo un libro."], ["Теперь: indefinido (она прочитала).", "Ana leyó un libro."]], 7, "es9-y"],
  ["Pido un café.", [["Теперь: вчера (ayer), я.", "Ayer pedí un café."], ["Теперь: вчера, Pablo.", "Ayer Pablo pidió un café."]], 7, "es9-e-i-o-u"],
  ["Hay un parque en mi barrio.", [["Теперь: раньше (antes).", "Antes había un parque en mi barrio."], ["Теперь: не было (no).", "Antes no había un parque en mi barrio."]], 2, "es9-habia"],
  ["Duermo ocho horas.", [["Теперь: вчера (ayer), я.", "Ayer dormí ocho horas."], ["Теперь: вчера, mis hermanos.", "Ayer mis hermanos durmieron ocho horas."]], 7, "es9-e-i-o-u"]
];
const ES9_DIAG = [  /* [frase, correcta (motivo), [otros], bien, módulo, regla] */
  ["Antes habían muchos árboles.", "Форма había не меняется", ["Нужно indefinido", "Нужен другой предлог"], "Antes había muchos árboles.", 2, "es9-habia"],
  ["De pequeño solía de ir al río.", "После soler не нужен de", ["Нужно indefinido", "Нужно настоящее время"], "De pequeño solía ir al río.", 3, "es9-soler"],
  ["Marta pedió una tortilla.", "У ella корень меняется: pidió", ["Нужно imperfecto", "Не хватает знака ударения"], "Marta pidió una tortilla.", 7, "es9-e-i-o-u"],
  ["Ayer trabajaba seis horas.", "Отрезок закончен: нужно indefinido", ["Неправильная форма imperfecto", "Нужно настоящее время"], "Ayer trabajé seis horas.", 5, "es9-limite"],
  ["Sigo a vivir en Moscú.", "seguir + gerundio", ["Нужно indefinido", "Нужно de"], "Sigo viviendo en Moscú.", 4, "es9-perifrasis"],
  ["Estuve durmiendo cuando sonó el teléfono.", "Процесс, который прервали: estaba", ["Нужно sonaba", "Нужно настоящее время"], "Estaba durmiendo cuando sonó el teléfono.", 6, "es9-interrumpida"],
  ["Fue un día bonito y hizo sol.", "Фон рассказа — imperfecto: era, hacía", ["Нужно perfecto", "Нужно estaba"], "Era un día bonito y hacía sol.", 5, "es9-fondo-suceso"]
];
const ES9_DES = [   /* [frase, [[pregunta, índice]…], módulo, regla] */
  ["Estaba leyendo cuando llegó Ana", [["Какое слово — событие?", 3], ["Какое слово — действие в процессе?", 1], ["Кто пришёл?", 4]], 6, "es9-interrumpida"],
  ["Hacía frío y entramos en un bar", [["Какое слово — фон?", 0], ["Какое слово — событие?", 3]], 5, "es9-fondo-suceso"],
  ["De pequeño solía jugar en el patio", [["Какое слово — привычка (soler)?", 2], ["Где играл?", 6], ["Когда?", 1]], 3, "es9-soler"],
  ["Mi abuelo era alto y tenía barba", [["Какое слово — описание (каким был)?", 2], ["Что у него было?", 6]], 2, "es9-describir"]
];
/* Formas: [infinitivo] — imperfecto en tres personas; él / ellos del indefinido; estaba + gerundio */
const ES9_VERBOS_IMP = ["hablar", "trabajar", "estudiar", "jugar", "cantar", "bailar", "escuchar", "llegar", "comprar", "cocinar", "viajar", "comer", "beber", "leer", "vivir",
  "escribir", "salir", "tener", "querer", "poder", "hacer", "saber", "venir", "decir", "poner", "dormir", "ser", "ir", "ver", "levantarse", "ducharse", "acostarse"];
const ES9_VERBOS_CAMBIO = ["pedir", "repetir", "preferir", "seguir", "vestirse", "divertirse", "dormir", "morir", "leer", "oír", "caer", "creer"];
const ES9_VERBOS_GER = ["hablar", "trabajar", "comer", "leer", "dormir", "escribir", "jugar", "cocinar", "ver", "hacer", "pedir", "oír", "estudiar", "escuchar", "salir", "decir", "seguir", "venir"];
function es9Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES9-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES9_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES9_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES9_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oi-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES9_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES9_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("de-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES9_CAD.forEach(([base, pasos, mod, regla], i) => P("cad-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES9_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES9_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* Formas generadas */
  ES9_VERBOS_IMP.forEach((inf, i) => [0, 3, 5].map(k => (k + i) % 6).forEach(p => {
    const f = es9Imperf(inf, p); if (!f) return;
    P("if-" + inf + "-" + p, "imperf-forma", "escribir", ["ser", "ir", "ver"].indexOf(inf) >= 0 ? 2 : 1, ["ser", "ir", "ver"].indexOf(inf) >= 0 ? "es9-ser-ir-ver" : "es9-imperf-reg",
      { grupo: "if-" + inf, lex: lex(inf), pide: "Напиши форму в pretérito imperfecto.", grande: inf + " — " + ES9_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
        explicacion: "**" + inf + "**, " + ES9_PERS[p][0].split(" / ")[0] + " → **" + f + "**." + (ES9_NOTA_IMPERF[inf] ? " " + ES9_NOTA_IMPERF[inf] : "") });
  }));
  ES9_VERBOS_CAMBIO.forEach(inf => [2, 5].forEach(p => {
    const f = es9Indef(inf, p); if (!f) return;
    P("cf-" + inf + "-" + p, "indef-cambio-forma", "escribir", 7, /^(leer|oír|caer|creer)$/.test(inf) ? "es9-y" : "es9-e-i-o-u",
      { grupo: "cf-" + inf, lex: lex(inf), pide: "Напиши форму в pretérito indefinido.", grande: inf + " — " + ES9_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
        explicacion: "**" + inf + "**, " + ES9_PERS[p][0].split(" / ")[0] + " → **" + f + "**." + (ES9_NOTA_INDEF[inf] ? " " + ES9_NOTA_INDEF[inf] : "") });
  }));
  ES9_VERBOS_GER.forEach((inf, i) => {
    const p = [0, 1, 2, 3, 5][i % 5], f = es9Estaba(inf, p); if (!f) return;
    P("ef-" + inf, "estaba-forma", "escribir", 6, "es9-interrumpida", { grupo: "ef-" + inf, lex: lex(inf), pide: "Напиши «estaba + gerundio».", grande: inf + " — " + ES9_PERS[p][0].split(" / ")[0],
      esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f, explicacion: "**" + f + "**." + (ES9_NOTA_GER[inf] ? " " + ES9_NOTA_GER[inf] : "") });
  });
}
Object.assign(ES9_MEZCLA, { natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, "imperf-forma": 2, "indef-cambio-forma": 1, "estaba-forma": 1 });
