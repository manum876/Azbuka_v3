const ES13_V = {"1": ["darse cuenta", "a punto de", "anterior", "notar", "resultar", "enseguida", "apenas", "rato", "faltar", "durar", "completamente", "directamente"], "2": ["comentar", "mencionar", "asegurar", "admitir", "reconocer", "declarar", "enterarse", "conversación", "consejo", "promesa", "voz", "intención"], "3": ["gritar", "callar", "averiguar", "comprobar", "seguramente", "exacto", "silencio"], "4": ["medio", "finalmente", "ni siquiera", "por lo visto", "intento", "fallar", "escapar", "mitad", "principio", "detalle", "secreto", "broma", "bromear", "aguantar", "echar", "echar una mano", "echar un vistazo", "vistazo", "duro", "lo que sea", "recoger", "acompañar", "abandonar", "recuperar", "enorme", "montón", "cantidad", "sonido", "imagen", "memoria", "destino", "desgracia"], "5": ["sentimiento", "emoción", "felicidad", "alegría", "tristeza", "orgullo", "esperanza", "deseo", "confianza", "respeto", "ganas", "estrés", "emocionado", "enamorado", "querido", "decepcionado", "asustar", "ponerse", "disfrutar", "sufrir", "odiar", "odio", "sonreír", "reírse", "besar", "abrazar", "superar", "soportar", "sensible", "humor", "soledad", "ilusión", "calmarse", "relajarse", "nostalgia", "agobiado", "pensamiento"], "6": ["choque", "navidad", "Nochevieja", "Reyes", "hogar", "acostumbrarse", "adaptarse", "integrarse", "emigrar", "diferencia", "origen", "acento", "esfuerzo", "etapa", "conducir", "carné", "tradicional", "típico", "común", "pertenecer", "necesidad", "posibilidad", "zona", "nivel", "cultural"], "7": ["reseña", "recomendación", "estrella", "oferta", "venta", "contacto", "espectáculo", "actuación", "canción", "cámara", "artista", "escena", "premio", "autor", "novela", "comentario", "arte", "pintura", "cantante", "maravilloso", "precioso", "excelente", "fantástico", "conocido", "talento", "belleza", "estilo", "representar", "incluir"], "9": ["equivocado", "corregir", "ambos", "varios", "demás", "simple", "complicado", "entero", "especialmente", "utilizar", "formar", "merecer", "obtener", "construir", "renunciar", "llenar", "cubrir", "espacio", "movimiento", "valor", "interés", "ocupar"], "11": ["párrafo", "borrador", "introducción", "escritura", "estructura"]};
const ES13_A = {"2": ["rumor", "susurrar"], "4": ["huir", "sobrevivir"], "5": ["celos", "rabia", "alma", "placer", "mente"], "6": ["raíz"], "7": ["estreno", "lector"]};

/* ============================================================
   DATA-UNIDAD-ES-13.JS — Abecé · Урок 13: Испанский для жизни
   (Español para la vida real). Completa (20/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U13;
   propuesta aprobada por Manu el 20/11/2026: claude/PROPUESTA_U13_ABECE.md):
   pluscuamperfecto, estilo indirecto, contar una historia, emociones, la vida
   en España, textos reales (tipo lectura), escuchar y conversar, repaso de
   tiempos, pronombres y preposiciones, taller de escritura (tipo taller) y el
   proyecto en seis partes (tipo proyecto6), como la U13 de Azbuka.
   Mismo formato que data-unidad-es-12.js, con la profundización desde el
   principio. Las formas salen de data-verbos-es.js (es13Verbo).
   Las frases que se entienden por sus partes (por primera vez, al día
   siguiente, en medio de, el choque cultural, el carné de conducir, al
   principio, por suerte…) van en «Фразы» del módulo, no como palabras
   (claude/EXPRESIONES_LEXICO_ABECE.md).
   Decisiones de Manu (20/11/2026): 11 entradas nuevas; toda la ampliación;
   nota cultural CUE-013 «Nochevieja y Reyes»; «me pidió que viniera» solo para
   reconocer; evaluación de 6 partes de 5; 5 frases nuevas; desafío del día
   «Что он сказал?».
   ============================================================ */

const ES13_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
function es13Verbo(inf) {
  if (typeof VERBOS_ES === "undefined" || typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  return e && VERBOS_ES[e.id] ? VERBOS_ES[e.id] : null;
}
const ES13_HABER = ["había", "habías", "había", "habíamos", "habíais", "habían"];
function es13Part(inf) { const v = es13Verbo(inf); return v && v.part ? v.part : ""; }
function es13Pluscuam(inf, p) { const pa = es13Part(inf); return pa ? ES13_HABER[p] + " " + pa : ""; }
function es13Tiempo(t) { return (inf, p) => { const v = es13Verbo(inf); return v && v[t] && v[t][p] ? v[t][p] : ""; }; }
const es13Pres = es13Tiempo("pres");
const es13Imperf = es13Tiempo("imperf");
const es13Indef = es13Tiempo("indef");
const es13Cond = es13Tiempo("cond");
const es13Mayus = t => t.replace(/^([¿¡—«]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());

const UNIDAD_ES_13 = {
  id: 13,
  titulo: "Испанский для жизни",
  tituloEs: "Español para la vida real",
  objetivo: "Рассказать историю, передать чужие слова, говорить о чувствах и о жизни в Испании, понимать настоящие тексты и писать связный текст — самостоятельно.",
  tiempo: "4 недели ежедневной практики (примерно 25–30 часов)",
  modulos: [
    {
      id: "es13m1", n: 1, tipo: "leccion",
      titulo: "Cuando llegué, ya se había ido",
      resumen: "Pluscuamperfecto: что случилось раньше.",
      intro: "В русском одно прошедшее время, а порядок событий показывают слова «уже», «до этого». В испанском для того, что произошло **раньше другого события в прошлом**, есть своё время — **pretérito pluscuamperfecto**: **Cuando llegué, Ana ya se había ido.** — Когда я пришёл, Аня уже ушла.",
      tablas: [
        { titulo: "Había + participio", encabezados: ["Кто", "haber", "+ participio"], filas: [
          [{ es: "yo", ru: "я" }, { es: "había" }, { es: "hablado · comido · vivido" }],
          [{ es: "tú", ru: "ты" }, { es: "habías" }, { es: "hecho · dicho · visto" }],
          [{ es: "él / ella / usted", ru: "он, она, вы" }, { es: "había" }, { es: "escrito · puesto · vuelto" }],
          [{ es: "nosotros", ru: "мы" }, { es: "habíamos" }, { es: "abierto · roto · ido" }],
          [{ es: "vosotros", ru: "вы" }, { es: "habíais" }, { es: "estado · sido · tenido" }],
          [{ es: "ellos / ustedes", ru: "они, вы" }, { es: "habían" }, { es: "salido · llegado · empezado" }]] }
      ],
      secciones: [
        {
          id: "es13-pluscuam",
          titulo: "Había + participio",
          texto: "Pluscuamperfecto строится как pretérito perfecto (**he comido**), только **haber** стоит в imperfecto: **había, habías, había, habíamos, habíais, habían** + participio. Participio не меняется: **Ana había salido**, **ellas habían salido**.\nНеправильные participios ты уже знаешь из урока 8: **hecho, dicho, visto, escrito, puesto, vuelto, abierto, roto**.\nМежду **había** и participio ничего не ставят; **no** и местоимения — перед **había**: **No lo había visto.**",
          ejemplos: [
            { es: "Cuando llegué a la estación, el tren ya había salido.", ru: "Когда я пришёл на вокзал, поезд уже ушёл.", por: "Сначала ушёл поезд (**había salido**), потом пришёл я (**llegué**)." },
            { es: "Ana no había visto nunca el mar en invierno.", ru: "Аня никогда раньше не видела море зимой." },
            { es: "Me dijo que ya lo había hecho.", ru: "Он сказал мне, что уже это сделал." }
          ],
          errores: [
            { mal: "Cuando llegué, el tren ya salió.", bien: "Cuando llegué, el tren ya había salido.", por: "Поезд ушёл **раньше**, чем я пришёл: нужно **había salido**." },
            { mal: "Había hacido los deberes.", bien: "Había hecho los deberes.", por: "**hacer** → **hecho**." }
          ],
          chequeo: [
            { pide: "Cuando llegamos, la película ya ___ (empezar).", opciones: ["había empezado", "empezó", "ha empezado"], ok: "había empezado", por: "Фильм начался **раньше**, чем мы пришли." }
          ]
        },
        {
          id: "es13-pluscuam-uso",
          titulo: "Что было раньше",
          texto: "Когда рассказываешь о прошлом, у тебя есть «главный момент» (**indefinido**: llegué, abrí, vi). Всё, что случилось **до** него, — в **pluscuamperfecto**:\n**Abrí la puerta y me di cuenta de que había perdido las llaves.** — Я открыл дверь и понял, что потерял ключи (раньше).\nЧасто рядом стоят **ya** (уже) и **todavía no** (ещё не): **Cuando llamé, todavía no se había levantado.**\nЕсли события идут **по порядку**, хватает indefinido: **Llegué, cené y me acosté.**",
          ejemplos: [
            { es: "Cuando me di cuenta, ya era tarde: había perdido el autobús.", ru: "Когда я спохватился, было уже поздно: я опоздал на автобус." },
            { es: "Cuando llamé a Lucía, todavía no se había levantado.", ru: "Когда я позвонил Лусии, она ещё не встала." },
            { es: "Llegué a casa, cené y me acosté.", ru: "Я пришёл домой, поужинал и лёг спать.", por: "По порядку — только indefinido." }
          ],
          errores: [
            { mal: "Cuando abrí la nevera, Pablo se comió la tarta.", bien: "Cuando abrí la nevera, Pablo ya se había comido la tarta.", por: "Пабло съел торт **до** того, как я открыл холодильник." }
          ],
          chequeo: [
            { pide: "Llegué a casa y vi que alguien ___ la ventana.", opciones: ["había abierto", "abría", "abrirá"], ok: "había abierto", por: "Окно открыли **раньше**, чем я пришёл." }
          ]
        },
        {
          id: "es13-nunca-habia",
          titulo: "Nunca había… — первый раз",
          texto: "Чтобы сказать, что что-то случилось **в первый раз**, испанцы часто говорят **nunca había…** — «никогда раньше не…»:\n**Nunca había comido algo tan rico.** — Никогда раньше не ел ничего такого вкусного.\n**¡Nunca había visto tanta gente!**\nТо же самое: **Era la primera vez que…** — Это было в первый раз, что…",
          ejemplos: [
            { es: "Nunca había estado en una fiesta tan grande.", ru: "Я никогда раньше не был на таком большом празднике." },
            { es: "Era la primera vez que viajaba sola.", ru: "Она впервые путешествовала одна." }
          ]
        }
      ],
      frases: ["por primera vez"],
      dialogos: ["DLE-060"],
      vocab: ES13_V["1"]
    },
    {
      id: "es13m2", n: 2, tipo: "leccion",
      titulo: "Dice que vendrá",
      resumen: "Передать чужие слова: dice que…",
      intro: "Как передать, что сказал другой человек? Если он говорит **сейчас** (dice, pregunta, quiere saber), время глагола **не меняется** — как в русском. Меняются только **лица**: «я» становится «он», «мой» — «его».",
      tablas: [
        { titulo: "Что меняется", encabezados: ["Ana dice:", "Ana dice que…"], filas: [
          [{ es: "«Estoy cansada.»", ru: "Я устала." }, { es: "Ana dice que está cansada.", ru: "Аня говорит, что устала." }],
          [{ es: "«Mi hermano vive en Madrid.»", ru: "Мой брат живёт в Мадриде." }, { es: "Ana dice que su hermano vive en Madrid.", ru: "Аня говорит, что её брат живёт в Мадриде." }],
          [{ es: "«Vendré mañana.»", ru: "Я приду завтра." }, { es: "Ana dice que vendrá mañana.", ru: "Аня говорит, что придёт завтра." }],
          [{ es: "«¿Vienes?»", ru: "Ты придёшь?" }, { es: "Ana pregunta si vienes.", ru: "Аня спрашивает, придёшь ли ты." }],
          [{ es: "«¿Dónde vives?»", ru: "Где ты живёшь?" }, { es: "Ana pregunta dónde vives.", ru: "Аня спрашивает, где ты живёшь." }],
          [{ es: "«¡Ven!»", ru: "Приходи!" }, { es: "Ana me pide que venga.", ru: "Аня просит меня прийти." }]] }
      ],
      secciones: [
        {
          id: "es13-dice-que",
          titulo: "Dice que…",
          texto: "После **dice que, explica que, comenta que, asegura que, cuenta que** время не меняется: **«Tengo frío» → Dice que tiene frío.**\nМеняются **лица и притяжательные**: **yo → él / ella**, **mi → su**, **nosotros → ellos**: **«Mi casa es pequeña» → Dice que su casa es pequeña.**\n**que** опускать нельзя: «Dice tiene frío» — неправильно.",
          ejemplos: [
            { es: "Javier dice que el examen es el viernes.", ru: "Хавьер говорит, что экзамен в пятницу." },
            { es: "Lucía comenta que su piso es muy pequeño.", ru: "Лусия говорит, что её квартира очень маленькая.", por: "**mi piso** → **su piso**." },
            { es: "Pablo asegura que llegará a tiempo.", ru: "Пабло уверяет, что придёт вовремя." }
          ],
          errores: [
            { mal: "Dice tiene frío.", bien: "Dice que tiene frío.", por: "**que** нужно всегда." }
          ],
          chequeo: [
            { pide: "Ana: «Mi madre es médica.» → Ana dice que ___ madre es médica.", opciones: ["su", "mi", "tu"], ok: "su", por: "**mi** → **su**." }
          ]
        },
        {
          id: "es13-pregunta-si",
          titulo: "Pregunta si… / pregunta dónde…",
          texto: "Вопрос **без вопросительного слова** («¿Vienes?») передают через **si** — «ли»: **Pregunta si vienes.**\nВопрос **с вопросительным словом** (dónde, cuándo, qué, cómo, por qué) — через это слово, со знаком ударения: **Pregunta dónde vives. Quiere saber qué haces.**\n**que** перед **si** и перед вопросительным словом не ставят: «Pregunta que si vienes» — так говорят в разговоре, но правильно **Pregunta si vienes.**",
          ejemplos: [
            { es: "Marta pregunta si vamos a la fiesta.", ru: "Марта спрашивает, пойдём ли мы на праздник." },
            { es: "Javier quiere saber cuándo empieza la clase.", ru: "Хавьер хочет знать, когда начинается урок." },
            { es: "Me pregunta por qué estoy triste.", ru: "Он спрашивает меня, почему я грустный." }
          ],
          errores: [
            { mal: "Pregunta que si vienes.", bien: "Pregunta si vienes.", por: "Перед **si** — без **que**." },
            { mal: "Pregunta donde vives.", bien: "Pregunta dónde vives.", por: "Вопросительное слово — со знаком ударения." }
          ],
          chequeo: [
            { pide: "Lucía: «¿Tienes hambre?» → Lucía pregunta ___ tienes hambre.", opciones: ["si", "que", "qué"], ok: "si", por: "Вопрос без вопросительного слова → **si**." }
          ]
        },
        {
          id: "es13-pide-que",
          titulo: "Me pide que + subjuntivo",
          texto: "Просьбу или совет передают через **pedir que, decir que, recomendar que** + **subjuntivo** (урок 11): **«¡Ven!» → Me pide que venga.**\nОбрати внимание: **dice que vienes** — сообщает (ты придёшь); **dice que vengas** — просит (приходи!).",
          ejemplos: [
            { es: "Mi madre me pide que la llame más.", ru: "Мама просит меня звонить ей чаще." },
            { es: "Javier dice que leamos el texto en casa.", ru: "Хавьер говорит, чтобы мы прочитали текст дома.", por: "Это просьба → **leamos**." },
            { es: "Javier dice que el texto es fácil.", ru: "Хавьер говорит, что текст лёгкий.", por: "Это сообщение → **es**." }
          ],
          chequeo: [
            { pide: "Lucía: «¡Cierra la ventana!» → Lucía me pide que ___ la ventana.", opciones: ["cierre", "cierro", "cerré"], ok: "cierre", por: "Просьба → subjuntivo: **cierre**." }
          ]
        }
      ],
      dialogos: ["DLE-061"],
      vocab: ES13_V["2"],
      ampliacion: { titulo: "Слухи и шёпот", intro: "Ещё два слова о том, как передают новости.", vocab: ES13_A["2"] }
    },
    {
      id: "es13m3", n: 3, tipo: "leccion",
      titulo: "Me dijo que vendría",
      resumen: "Dijo que…: время сдвигается назад.",
      intro: "А вот если глагол передачи стоит **в прошедшем** (dijo, explicó, preguntó), испанское время **сдвигается на шаг назад**. В русском так не делают («Она сказала, что устала»), поэтому это самая частая ошибка: **Ana dijo que estaba cansada.**",
      tablas: [
        { titulo: "Время сдвигается", encabezados: ["Ana dijo:", "Ana dijo que…"], filas: [
          [{ es: "«Estoy cansada.»", ru: "presente" }, { es: "estaba cansada", ru: "imperfecto" }],
          [{ es: "«He terminado.»", ru: "perfecto" }, { es: "había terminado", ru: "pluscuamperfecto" }],
          [{ es: "«Terminé ayer.»", ru: "indefinido" }, { es: "había terminado el día anterior", ru: "pluscuamperfecto" }],
          [{ es: "«Vendré.»", ru: "futuro" }, { es: "vendría", ru: "condicional" }],
          [{ es: "«Vivía allí.»", ru: "imperfecto" }, { es: "vivía allí", ru: "не меняется" }]] },
        { titulo: "Слова времени и места", encabezados: ["Ana dijo:", "Ana dijo que…"], filas: [
          [{ es: "hoy", ru: "сегодня" }, { es: "aquel día", ru: "в тот день" }],
          [{ es: "mañana", ru: "завтра" }, { es: "al día siguiente", ru: "на следующий день" }],
          [{ es: "ayer", ru: "вчера" }, { es: "el día anterior", ru: "накануне" }],
          [{ es: "aquí", ru: "здесь" }, { es: "allí", ru: "там" }],
          [{ es: "este", ru: "этот" }, { es: "aquel / ese", ru: "тот" }]] }
      ],
      secciones: [
        {
          id: "es13-dijo-que",
          titulo: "Dijo que estaba…",
          texto: "После **dijo que, explicó que, contó que, aseguró que, me escribió que** время делает шаг назад:\n**presente → imperfecto:** «Tengo frío» → **Dijo que tenía frío.**\n**perfecto и indefinido → pluscuamperfecto:** «He comido» / «Comí» → **Dijo que había comido.**\n**futuro → condicional:** «Llamaré» → **Dijo que llamaría.**\n**imperfecto** и **condicional** не меняются.\nЕсли то, что сказали, **до сих пор правда**, можно не менять время: **Me dijo que es de Moscú** (она и сейчас из Москвы). Но сдвиг никогда не ошибка.",
          comparacion: "По-русски: «Она сказала, что **устала**», «…что **придёт**» — время не меняется. По-испански: **estaba cansada**, **vendría**.",
          ejemplos: [
            { es: "Lucía me dijo que estaba muy cansada.", ru: "Лусия сказала мне, что очень устала." },
            { es: "Pablo dijo que había perdido las llaves.", ru: "Пабло сказал, что потерял ключи." },
            { es: "Javier explicó que el examen sería el viernes.", ru: "Хавьер объяснил, что экзамен будет в пятницу." }
          ],
          errores: [
            { mal: "Me dijo que vendrá mañana.", bien: "Me dijo que vendría al día siguiente.", por: "После **dijo** будущее → condicional; **mañana** → **al día siguiente**." },
            { mal: "Dijo que tiene frío.", bien: "Dijo que tenía frío.", por: "Обычно время сдвигается: **tenía**." }
          ],
          chequeo: [
            { pide: "Marta: «Estoy enferma.» → Marta dijo que ___ enferma.", opciones: ["estaba", "está", "estuvo"], ok: "estaba", por: "**presente → imperfecto**." },
            { pide: "Pablo: «Te llamaré.» → Pablo dijo que me ___.", opciones: ["llamaría", "llamará", "llamaba"], ok: "llamaría", por: "**futuro → condicional**." }
          ]
        },
        {
          id: "es13-palabras-tiempo",
          titulo: "Mañana → al día siguiente",
          texto: "Если передаёшь слова **через какое-то время**, меняются и слова времени и места: **hoy → aquel día**, **mañana → al día siguiente**, **ayer → el día anterior**, **aquí → allí**, **este → aquel**.\n«Ana me dijo ayer: Mañana iré a Madrid» → **Ana me dijo que al día siguiente iría a Madrid.**\nЕсли передаёшь в тот же день, **hoy** и **mañana** остаются.",
          ejemplos: [
            { es: "Me dijo que aquel día no podía venir.", ru: "Он сказал, что в тот день не может прийти." },
            { es: "Nos explicó que al día siguiente cerraban la tienda.", ru: "Он объяснил нам, что на следующий день магазин закрывают." }
          ],
          chequeo: [
            { pide: "Hace un mes Ana me dijo: «Mañana empiezo.» → Ana me dijo que ___ empezaba.", opciones: ["al día siguiente", "mañana", "ayer"], ok: "al día siguiente", por: "Прошло время → **al día siguiente**." }
          ]
        },
        {
          id: "es13-pregunto-si",
          titulo: "Me preguntó si… · me pidió que…",
          texto: "Вопросы — так же: **«¿Vienes?» → Me preguntó si iba.** **«¿Dónde vives?» → Me preguntó dónde vivía.**\nОбрати внимание: **venir → ir**, **traer → llevar**, если меняется место: «¿Vienes a mi casa?» → **Me preguntó si iba a su casa.**\nПросьба в прошлом: **Me pidió que viniera** — здесь стоит другое время, **imperfecto de subjuntivo** (viniera, hiciera, fuera). Его ты пока только **узнаёшь**: в своих фразах можно сказать **Me pidió venir** или **Me dijo: «Ven».**",
          ejemplos: [
            { es: "Lucía me preguntó si quería ir al cine.", ru: "Лусия спросила, хочу ли я пойти в кино." },
            { es: "El médico me preguntó cómo me sentía.", ru: "Врач спросил меня, как я себя чувствую." },
            { es: "Mi madre me pidió que la llamara.", ru: "Мама попросила меня позвонить ей.", por: "**llamara** — imperfecto de subjuntivo: пока только узнаём." }
          ],
          chequeo: [
            { pide: "Javier: «¿Tienes preguntas?» → Javier me preguntó ___ tenía preguntas.", opciones: ["si", "que", "cuándo"], ok: "si", por: "**si** — «ли»." }
          ]
        }
      ],
      frases: ["al día siguiente"],
      vocab: ES13_V["3"]
    },
    {
      id: "es13m4", n: 4, tipo: "leccion",
      titulo: "¿Qué te pasó?",
      resumen: "Рассказать историю: все прошедшие времена вместе.",
      intro: "Теперь у тебя есть все прошедшие времена. В рассказе у каждого своя работа: **imperfecto** — фон (какая была погода, что делали люди), **indefinido** — события, которые двигают историю, **pluscuamperfecto** — то, что случилось ещё раньше. А связки помогают слушателю не потеряться.",
      tablas: [
        { titulo: "Кто что делает в рассказе", encabezados: ["Время", "Пример"], filas: [
          [{ es: "imperfecto", ru: "фон, описание" }, { es: "Era tarde y llovía mucho.", ru: "Было поздно, шёл сильный дождь." }],
          [{ es: "indefinido", ru: "события" }, { es: "De repente, se fue la luz.", ru: "Вдруг выключили свет." }],
          [{ es: "pluscuamperfecto", ru: "то, что было раньше" }, { es: "No había cerrado la ventana.", ru: "Я не закрыл окно (до этого)." }],
          [{ es: "perfecto", ru: "итог на сегодня" }, { es: "Desde entonces, siempre la he cerrado.", ru: "С тех пор я всегда его закрываю." }]] },
        { titulo: "Связки рассказа", encabezados: ["Связка", "Связка"], filas: [
          [{ es: "al principio", ru: "сначала, вначале" }, { es: "de repente", ru: "вдруг" }],
          [{ es: "enseguida", ru: "сразу же" }, { es: "en medio de", ru: "посреди" }],
          [{ es: "por suerte", ru: "к счастью" }, { es: "por desgracia", ru: "к сожалению" }],
          [{ es: "ni siquiera", ru: "даже не" }, { es: "al final · finalmente", ru: "в конце концов" }]] }
      ],
      secciones: [
        {
          id: "es13-relato",
          titulo: "Фон, события и «раньше»",
          texto: "Представь фильм. **Imperfecto** — декорации: **Era sábado, hacía sol y la playa estaba llena.** **Indefinido** — то, что происходит в кадре, одно за другим: **Llegué, dejé mis cosas y entré en el agua.** **Pluscuamperfecto** — взгляд назад: **Me di cuenta de que había olvidado el agua.**\nПравило: если можно спросить «и что потом?» — это indefinido. Если это «как всё выглядело» — imperfecto.",
          ejemplos: [
            { es: "Era muy tarde y no había nadie en la calle. De repente, oí un ruido.", ru: "Было очень поздно, и на улице никого не было. Вдруг я услышал шум.", por: "**era, había** — фон; **oí** — событие." },
            { es: "Cuando llegó la policía, el ladrón ya se había escapado.", ru: "Когда приехала полиция, вор уже сбежал." },
            { es: "Estaba en medio de la reunión cuando sonó mi móvil.", ru: "Я был посреди совещания, когда зазвонил мой телефон." }
          ],
          errores: [
            { mal: "Fue un día precioso y hizo sol cuando salí.", bien: "Era un día precioso y hacía sol cuando salí.", por: "Описание фона — **imperfecto**." },
            { mal: "Cuando llegué, ya salió.", bien: "Cuando llegué, ya había salido.", por: "Раньше другого прошлого — **pluscuamperfecto**." }
          ],
          chequeo: [
            { pide: "___ mucho frío y no había nadie en la calle.", opciones: ["Hacía", "Hizo", "Había hecho"], ok: "Hacía", por: "Это фон — **imperfecto**." },
            { pide: "De repente, alguien ___ a la puerta.", opciones: ["llamó", "llamaba", "había llamado"], ok: "llamó", por: "Событие — **indefinido**." }
          ]
        },
        {
          id: "es13-conectores-relato",
          titulo: "Связки рассказа",
          texto: "Хороший рассказ ведёт слушателя: **al principio** (вначале), **de repente** (вдруг), **enseguida** (сразу же), **en medio de** (посреди), **por suerte / por desgracia** (к счастью / к сожалению), **al final, finalmente** (в конце концов).\n**ni siquiera** — «даже не»: **Ni siquiera me dijo adiós.** — Он даже не попрощался.\n**por lo visto** — «судя по всему»: **Por lo visto, no había leído mi mensaje.**",
          ejemplos: [
            { es: "Al principio no entendía nada, pero poco a poco me acostumbré.", ru: "Сначала я ничего не понимал, но постепенно привык." },
            { es: "Por suerte, un vecino me echó una mano.", ru: "К счастью, сосед мне помог.", por: "**echar una mano** — помочь (выражение)." },
            { es: "Se fue sin decir nada: ni siquiera me miró.", ru: "Он ушёл, ничего не сказав: даже не посмотрел на меня." }
          ],
          chequeo: [
            { pide: "Perdí las llaves, pero ___, mi vecina tenía otras.", opciones: ["por suerte", "por desgracia", "ni siquiera"], ok: "por suerte", por: "Хорошая новость — **por suerte**." }
          ]
        },
        {
          id: "es13-parrafos",
          titulo: "Рассказ по абзацам",
          texto: "Длинный рассказ легче понять, если в нём три части:\n1. **Начало** — где, когда, кто (imperfecto): **Era el verano de 2020. Yo vivía en Moscú…**\n2. **Середина** — что случилось (indefinido, связки): **Un día, de repente…**\n3. **Конец** — чем всё кончилось и что ты думаешь сейчас: **Al final… Desde entonces…**\nУ каждой части — свой абзац (**el párrafo**).",
          ejemplos: [
            { es: "Desde entonces, siempre llevo un mapa.", ru: "С тех пор я всегда ношу с собой карту." },
            { es: "Fue un año duro, pero aprendí mucho.", ru: "Это был тяжёлый год, но я многому научился.", por: "**duro** — здесь «тяжёлый, трудный», а не «твёрдый»." }
          ]
        }
      ],
      frases: ["en medio de", "al principio", "por suerte", "por desgracia", "FRE-159", "FRE-160", "FRE-161"],
      dialogos: ["DLE-061"],
      vocab: ES13_V["4"],
      ampliacion: { titulo: "Сбежать и выжить", intro: "Два слова для драматичных историй. **huir** — бежать, спасаться бегством; **sobrevivir** — выжить.", vocab: ES13_A["4"] }
    },
    {
      id: "es13m5", n: 5, tipo: "leccion",
      titulo: "¿Cómo te sientes?",
      resumen: "Эмоции: ponerse nervioso, me da miedo.",
      intro: "О чувствах по-испански говорят несколькими способами: **estar** + прилагательное (состояние), **ponerse** + прилагательное (становиться), **me da miedo / pena / vergüenza** (мне страшно, жаль, стыдно) и существительные: **la alegría, la tristeza, el orgullo**.",
      tablas: [
        { titulo: "Чувство и слово", encabezados: ["Прилагательное", "Существительное"], filas: [
          [{ es: "feliz", ru: "счастливый" }, { es: "la felicidad", ru: "счастье" }],
          [{ es: "alegre · contento", ru: "весёлый, довольный" }, { es: "la alegría", ru: "радость" }],
          [{ es: "triste", ru: "грустный" }, { es: "la tristeza", ru: "грусть" }],
          [{ es: "orgulloso", ru: "гордый" }, { es: "el orgullo", ru: "гордость" }],
          [{ es: "solo", ru: "одинокий" }, { es: "la soledad", ru: "одиночество" }],
          [{ es: "emocionado", ru: "взволнованный (радостно)" }, { es: "la emoción", ru: "волнение, эмоция" }]] }
      ],
      secciones: [
        {
          id: "es13-ponerse",
          titulo: "Estar nervioso и ponerse nervioso",
          texto: "**estar** + прилагательное — состояние: **Estoy nervioso** — я нервничаю (сейчас).\n**ponerse** + прилагательное — изменение, «становиться»: **Me pongo nervioso antes de los exámenes** — я начинаю нервничать перед экзаменами.\nТак говорят о чувствах и о цвете лица: **ponerse triste, contento, rojo, enfermo**.\n**ponerse** ты знаешь как «надевать» (урок 6). Здесь — его второе значение.",
          comparacion: "Русское «я нервничаю перед экзаменами» — это не состояние сейчас, а то, что с тобой происходит: **me pongo nervioso**.",
          ejemplos: [
            { es: "Me pongo muy nerviosa cuando hablo en público.", ru: "Я очень нервничаю, когда выступаю перед людьми." },
            { es: "Cuando le dije la verdad, se puso rojo.", ru: "Когда я сказал ему правду, он покраснел." },
            { es: "Hoy estoy contento: he aprobado el examen.", ru: "Сегодня я довольный: я сдал экзамен.", por: "Состояние сейчас — **estar**." }
          ],
          errores: [
            { mal: "Siempre estoy nervioso antes de un examen.", bien: "Siempre me pongo nervioso antes de un examen.", por: "Повторяющаяся перемена — **ponerse**." }
          ],
          chequeo: [
            { pide: "Cuando veo una película triste, ___ triste.", opciones: ["me pongo", "estoy", "soy"], ok: "me pongo", por: "Становлюсь грустным — **me pongo**." }
          ]
        },
        {
          id: "es13-me-da",
          titulo: "Me da miedo, me dan miedo",
          texto: "**dar** + чувство работает как **gustar**: **me da miedo** — мне страшно (меня пугает), **me da pena** — мне жаль, **me da vergüenza** — мне стыдно, **me da igual** — мне всё равно.\nЕсли «что пугает» во мн. ч. — **me dan**: **Me dan miedo los perros.**\nС глаголом — инфинитив: **Me da vergüenza hablar en público.** С другим человеком — **que** + subjuntivo: **Me da pena que te vayas.**",
          ejemplos: [
            { es: "Me dan miedo los aviones.", ru: "Я боюсь летать на самолётах." },
            { es: "¿No te da vergüenza llegar tan tarde?", ru: "Тебе не стыдно приходить так поздно?" },
            { es: "Me da mucha pena que te vayas.", ru: "Мне очень жаль, что ты уезжаешь.", por: "**que** + subjuntivo: **te vayas**." }
          ],
          errores: [
            { mal: "Me da miedo los perros.", bien: "Me dan miedo los perros.", por: "**los perros** — мн. ч.: **me dan**." },
            { mal: "Yo doy miedo de los aviones.", bien: "Me dan miedo los aviones.", por: "Как **gustar**: **me dan miedo**." }
          ],
          chequeo: [
            { pide: "A mi hermana le ___ miedo los aviones.", opciones: ["dan", "da", "dar"], ok: "dan", por: "**los aviones** — мн. ч.: **dan**." }
          ]
        },
        {
          id: "es13-ganas",
          titulo: "Tengo ganas de… · disfrutar, sufrir, superar",
          texto: "**tener ganas de** + инфинитив — «очень хотеть»: **Tengo ganas de verte.** — Очень хочу тебя увидеть. **No tengo ganas** — неохота.\n**disfrutar de** — наслаждаться: **Disfruta del viaje.** **sufrir** — страдать. **superar** — преодолеть: **superar el miedo**. **calmarse, relajarse** — успокоиться, расслабиться: **¡Cálmate!**\n**la ilusión** — радостное ожидание: **Me hace mucha ilusión el viaje** — я очень жду поездку (с радостью). Это не «иллюзия».\n**agobiado** — в Испании очень частое «замученный, в стрессе»: **Estoy agobiado con tanto trabajo.**",
          ejemplos: [
            { es: "Tengo muchas ganas de ver a mi familia.", ru: "Я очень хочу увидеть свою семью." },
            { es: "Me hace mucha ilusión ir a Madrid.", ru: "Я с радостью жду поездку в Мадрид." },
            { es: "Esta semana estoy agobiada: tengo tres exámenes.", ru: "На этой неделе у меня завал: три экзамена." }
          ],
          chequeo: [
            { pide: "Estoy cansado, no tengo ___ de salir.", opciones: ["ganas", "deseo", "ilusión"], ok: "ganas", por: "**no tengo ganas de** — неохота." }
          ]
        }
      ],
      frases: ["FRE-162"],
      dialogos: ["DLE-062"],
      vocab: ES13_V["5"],
      ampliacion: { titulo: "Ещё о чувствах", intro: "**los celos** — ревность; **la rabia** — ярость, злость (**¡Qué rabia!** — «Как обидно!»); **el alma** — душа; **el placer** — удовольствие (**Es un placer** — «очень приятно»); **la mente** — ум, разум.", vocab: ES13_A["5"] }
    },
    {
      id: "es13m6", n: 6, tipo: "leccion",
      titulo: "Mi vida en España",
      resumen: "Привыкнуть, освоиться, праздники.",
      intro: "Переехать в другую страну — это и радость, и **el choque cultural**. В этом модуле — слова, чтобы рассказать, как ты привыкаешь, по чему скучаешь и какие испанские праздники уже знаешь.",
      secciones: [
        {
          id: "es13-acostumbrarse",
          titulo: "Acostumbrarse a, adaptarse, integrarse",
          texto: "**acostumbrarse a** — привыкнуть к: **Me he acostumbrado a cenar tarde.** После **a** — существительное или инфинитив.\n**adaptarse a** — приспособиться: **Los niños se adaptan enseguida.** **integrarse en** — влиться, стать своим: **integrarse en el barrio**.\n**echar de menos** — скучать по: **Echo de menos a mi familia. Echo de menos la nieve.** О человеке — с **a**.\n**emigrar** — эмигрировать; кто приехал — **el inmigrante** (урок 12).",
          ejemplos: [
            { es: "Todavía no me he acostumbrado al horario español.", ru: "Я ещё не привык к испанскому распорядку дня." },
            { es: "Echo de menos a mis amigos y la comida de mi madre.", ru: "Я скучаю по друзьям и по маминой еде." },
            { es: "Para integrarse, lo más importante es el idioma.", ru: "Чтобы освоиться, самое важное — язык." }
          ],
          errores: [
            { mal: "Me he acostumbrado cenar tarde.", bien: "Me he acostumbrado a cenar tarde.", por: "**acostumbrarse a**." },
            { mal: "Echo de menos mi madre.", bien: "Echo de menos a mi madre.", por: "О человеке — **a**." }
          ],
          chequeo: [
            { pide: "Ya me he acostumbrado ___ calor.", opciones: ["al", "del", "en el"], ok: "al", por: "**acostumbrarse a** + **el** → **al**." }
          ]
        },
        {
          id: "es13-choque",
          titulo: "El choque cultural",
          texto: "**el choque cultural** — культурный шок. Обычно у него есть этапы (**las etapas**): **al principio** всё кажется чудесным, потом приходят трудности и **la nostalgia** (тоска по дому), а **poco a poco** ты привыкаешь и чувствуешь себя **en casa**.\nПомогают **el esfuerzo** (усилие), **la confianza** (уверенность) и **el humor**.\n**el origen** — происхождение: **Soy de origen ruso.** **el acento** — акцент: **Tienes un acento muy bonito.**",
          ejemplos: [
            { es: "Al principio todo me parecía maravilloso.", ru: "Сначала всё казалось мне чудесным." },
            { es: "Después llegó la nostalgia: echaba de menos mi hogar.", ru: "Потом пришла тоска: я скучал по дому." },
            { es: "Aunque tengo acento, la gente me entiende sin problema.", ru: "Хотя у меня акцент, люди понимают меня без проблем." }
          ]
        },
        {
          id: "es13-fiestas",
          titulo: "Navidad, Nochevieja y Reyes · el carné",
          texto: "Главные зимние праздники: **la Navidad** (25 декабря), **la Nochevieja** (31 декабря: двенадцать виноградин) и **los Reyes** (6 января: подарки детям). Пишутся с большой буквы.\nДля жизни в Испании нужен и **el carné**: **el carné de conducir** (права). Говорят и пишут также carnet.",
          ejemplos: [
            { es: "En Nochevieja comemos doce uvas.", ru: "В новогоднюю ночь мы едим двенадцать виноградин." },
            { es: "Los niños reciben los regalos el día de Reyes.", ru: "Дети получают подарки в день Трёх королей." },
            { es: "Estoy sacando el carné de conducir.", ru: "Я получаю права (учусь на права).", por: "**sacar el carné** — получить права, сдав экзамен." }
          ]
        }
      ],
      frases: ["el choque cultural", "el carné de conducir", "FRE-153"],
      dialogos: ["DLE-063"],
      vocab: ES13_V["6"],
      ampliacion: { titulo: "Корни", intro: "**las raíces** — корни: и у растения, и у человека: **Nunca olvido mis raíces.** — Я никогда не забываю свои корни.", vocab: ES13_A["6"] }
    },
    {
      id: "es13m7", n: 7, tipo: "lectura",
      titulo: "Textos de la vida real",
      resumen: "Объявление, новость, отзыв, интервью, письмо.",
      intro: "Тексты, которые встречаются в Испании на каждом шагу: объявление, короткая новость, отзыв о ресторане, интервью и письмо. Не нужно понимать каждое слово: сначала прочитай всё и пойми главное, потом найди детали. Нажми на слово, чтобы открыть его карточку.",
      secciones: [
        {
          id: "es13-leer",
          titulo: "Как читать настоящий текст",
          texto: "1. **Название и вид текста.** Объявление, новость, отзыв? Это уже подсказка, что в нём будет.\n2. **Главная мысль.** Прочитай всё, не останавливаясь. О чём это?\n3. **Детали.** Прочитай вопрос и найди в тексте нужное место: число, дату, место, имя.\n4. **Мнение автора.** В отзыве и интервью ищи слова-оценки: **maravilloso, excelente, decepcionado, recomiendo, no merece la pena**.\nНезнакомое слово? Часто смысл понятен из соседних слов.",
          ejemplos: [
            { es: "Lo recomiendo: el servicio es excelente.", ru: "Рекомендую: обслуживание отличное.", por: "Мнение автора — **lo recomiendo**." },
            { es: "Cuatro estrellas de cinco.", ru: "Четыре звезды из пяти." }
          ]
        }
      ],
      vocab: ES13_V["7"],
      ampliacion: { titulo: "Кино и книги", intro: "**el estreno** — премьера (фильма, спектакля); **el lector, la lectora** — читатель.", vocab: ES13_A["7"] }
    },
    {
      id: "es13m8", n: 8, tipo: "leccion",
      titulo: "Escuchar y conversar",
      resumen: "Аудио в четыре уровня и пять диалогов.",
      intro: "Четыре уровня аудирования: от медленного голоса до живого разговора двух человек. Слушай сколько хочешь; текст спрятан за кнопкой «Показать текст». А потом — пять диалогов урока: послушай, запиши себя и сравни.",
      secciones: [
        {
          id: "es13-escuchar",
          titulo: "Четыре уровня",
          texto: "**Уровень 1:** медленно, один голос, короткие фразы.\n**Уровень 2:** обычный разговор в быту.\n**Уровень 3:** человек рассказывает, что с ним случилось.\n**Уровень 4:** нужно понять то, что прямо не сказано.\nКак слушать: сначала **всё, без остановок** — общая мысль. Потом прочитай вопрос и послушай ещё раз, ища **этот факт**. Текст смотри только в конце.",
          ejemplos: [
            { es: "Bueno… no sé. A lo mejor sí.", ru: "Ну… не знаю. Может быть, да.", por: "Уровень 4: человек ещё не решил." }
          ]
        },
        {
          id: "es13-seguir",
          titulo: "Ответить, добавить, спросить в ответ",
          texto: "Живой разговор — это не «вопрос — ответ». Хороший ответ состоит из трёх частей: **ответ** + **деталь или причина** + **вопрос в ответ**: **—¿Te gusta Barcelona? —Sí, mucho, sobre todo el mar. ¿Y a ti?**\nЧтобы выиграть время, испанцы говорят: **Bueno…, Pues…, A ver…, ¡Buena pregunta!** Чтобы поддержать рассказ: **¿Y entonces?, ¡No me digas!, ¡Qué fuerte!, ¡Menos mal!**",
          ejemplos: [
            { es: "—¿Qué hiciste el fin de semana? —Pues… fui a la playa con unos amigos. ¿Y tú?", ru: "— Что ты делал на выходных? — Ну… ездил на пляж с друзьями. А ты?" },
            { es: "—¡Me he quedado sin trabajo! —¡No me digas! ¿Y qué vas a hacer?", ru: "— Я остался без работы! — Да ты что! И что будешь делать?" }
          ]
        }
      ],
      frases: ["FRE-163"],
      dialogos: ["DLE-060", "DLE-061", "DLE-062", "DLE-063", "DLE-064"]
    },
    {
      id: "es13m9", n: 9, tipo: "leccion",
      titulo: "Todos los tiempos",
      resumen: "Повторение: какое время выбрать.",
      intro: "Ты знаешь уже много времён. Главный вопрос теперь не «как образовать», а «какое выбрать». Подсказку почти всегда дают слова рядом: **ayer, ya, mañana, si, cuando, quiero que…**",
      tablas: [
        { titulo: "Подсказки рядом с глаголом", encabezados: ["Слова", "Время"], filas: [
          [{ es: "siempre, normalmente, cada día", ru: "что бывает обычно" }, { es: "presente: trabajo", ru: "" }],
          [{ es: "hoy, esta semana, ya, nunca", ru: "прошлое, связанное с сегодня" }, { es: "perfecto: he trabajado", ru: "" }],
          [{ es: "ayer, en 2020, el lunes pasado", ru: "закрытое прошлое" }, { es: "indefinido: trabajé", ru: "" }],
          [{ es: "antes, de niño, siempre (en el pasado)", ru: "фон, привычка в прошлом" }, { es: "imperfecto: trabajaba", ru: "" }],
          [{ es: "cuando llegué, ya…", ru: "раньше другого прошлого" }, { es: "pluscuamperfecto: había trabajado", ru: "" }],
          [{ es: "mañana, el año que viene", ru: "будущее" }, { es: "futuro: trabajaré", ru: "" }],
          [{ es: "si fuera…, me gustaría…", ru: "вежливо, мечта" }, { es: "condicional: trabajaría", ru: "" }],
          [{ es: "quiero que, cuando (будущее), para que", ru: "желание, будущее после cuando" }, { es: "subjuntivo: trabaje", ru: "" }]] }
      ],
      secciones: [
        {
          id: "es13-elegir-tiempo",
          titulo: "Как выбрать время",
          texto: "Задай себе три вопроса:\n1. **Когда?** Сейчас, в прошлом или в будущем?\n2. **Если в прошлом:** это закрытый момент (**indefinido**), фон и привычка (**imperfecto**), связь с сегодня (**perfecto**) или то, что было ещё раньше (**pluscuamperfecto**)?\n3. **Есть ли перед глаголом que, cuando, para que, ojalá?** Если это желание, просьба или будущее после **cuando** — **subjuntivo**.",
          ejemplos: [
            { es: "Cuando era pequeño, vivía en un pueblo.", ru: "Когда я был маленьким, я жил в деревне.", por: "Привычка, фон — **imperfecto**." },
            { es: "Cuando sea mayor, viviré en el campo.", ru: "Когда я стану старше, я буду жить за городом.", por: "**cuando** о будущем — **subjuntivo**, потом **futuro**." },
            { es: "Esta mañana he desayunado tarde.", ru: "Сегодня утром я поздно позавтракал.", por: "**esta mañana** — связь с сегодня: **perfecto**." }
          ],
          errores: [
            { mal: "Cuando llegaré a casa, te llamo.", bien: "Cuando llegue a casa, te llamo.", por: "**cuando** о будущем — **subjuntivo**." },
            { mal: "Ayer he ido al cine.", bien: "Ayer fui al cine.", por: "**ayer** — **indefinido**." },
            { mal: "Quiero que vienes.", bien: "Quiero que vengas.", por: "**quiero que** — **subjuntivo**." }
          ],
          chequeo: [
            { pide: "El año pasado ___ en Moscú.", opciones: ["viví", "he vivido", "viviré"], ok: "viví", por: "**el año pasado** — **indefinido**." },
            { pide: "Cuando ___ dinero, compraré un coche.", opciones: ["tenga", "tengo", "tendré"], ok: "tenga", por: "**cuando** о будущем — **subjuntivo**." }
          ]
        },
        {
          id: "es13-concordancia",
          titulo: "Согласование: всё сходится",
          texto: "В длинной фразе проверь, что всё согласовано: **артикль + существительное + прилагательное** (**las ciudades grandes**), **подлежащее + глагол** (**la mayoría de la gente vive…**), **время главной части + время после que** (**quiero que vengas — quería que vinieras**, второе пока только узнаём).\n**ambos, ambas** — оба: **Ambos son de Madrid.** **varios, varias** — несколько. **los demás** — остальные.",
          ejemplos: [
            { es: "Ambas hermanas viven en Valencia.", ru: "Обе сестры живут в Валенсии." },
            { es: "Yo me quedo; los demás se van.", ru: "Я остаюсь, остальные уходят." }
          ]
        }
      ],
      vocab: ES13_V["9"]
    },
    {
      id: "es13m10", n: 10, tipo: "leccion",
      titulo: "Pronombres y preposiciones",
      resumen: "Повторение и самопроверка: найди свою ошибку.",
      intro: "Самые частые ошибки русскоязычных — в местоимениях (**lo / le / se lo**), предлогах (**por / para, a / en**) и в выборе **ser / estar / hay**. Здесь ты не только повторяешь правила, но и учишься находить ошибки сам.",
      secciones: [
        {
          id: "es13-pronombres",
          titulo: "Lo, le, se lo — повторение",
          texto: "**lo, la, los, las** — кого? что?: **La veo. Lo compro.**\n**le, les** — кому?: **Le escribo.**\nДва вместе: сначала «кому», потом «что»; **le / les** + **lo, la** → **se**: **Se lo doy.**\nМесто: перед глаголом в личной форме; слитно — после инфинитива и утвердительного imperativo: **Voy a dártelo. Dámelo.**\n**«a» перед человеком**: **Veo a Ana. Echo de menos a mi madre.**",
          errores: [
            { mal: "Le lo he dicho.", bien: "Se lo he dicho.", por: "**le + lo → se lo**." },
            { mal: "Veo Ana todos los días.", bien: "Veo a Ana todos los días.", por: "Перед человеком — **a**." },
            { mal: "La he dicho la verdad.", bien: "Le he dicho la verdad.", por: "Кому? — **le**." }
          ],
          chequeo: [
            { pide: "¿El regalo? Ya ___ he dado a Marta.", opciones: ["se lo", "le lo", "lo le"], ok: "se lo", por: "**le + lo → se lo**." }
          ]
        },
        {
          id: "es13-preposiciones",
          titulo: "Por, para, a, en, de — повторение",
          texto: "**para** — цель, адресат, срок: **para aprender, para ti, para el lunes**.\n**por** — причина, через, цена, время дня: **por la lluvia, por el parque, por diez euros, por la mañana**.\n**a** — куда (с движением): **voy a Madrid**; **en** — где: **estoy en Madrid**; **en** — на транспорте: **en metro**.\n**de** — откуда, из чего, чей: **soy de Moscú, un vaso de agua, el coche de Pablo**.\nГлаголы со своим предлогом: **pensar en, soñar con, depender de, acostumbrarse a, enamorarse de, darse cuenta de**.",
          errores: [
            { mal: "Voy en Madrid.", bien: "Voy a Madrid.", por: "Куда — **a**." },
            { mal: "Pienso a ti.", bien: "Pienso en ti.", por: "**pensar en**." },
            { mal: "Me he dado cuenta que es tarde.", bien: "Me he dado cuenta de que es tarde.", por: "**darse cuenta de que**." }
          ],
          chequeo: [
            { pide: "Este regalo es ___ ti.", opciones: ["para", "por", "a"], ok: "para", por: "Адресат — **para**." }
          ]
        },
        {
          id: "es13-autocorreccion",
          titulo: "Найди свою ошибку",
          texto: "Прежде чем отправить текст, прочитай его **несколько раз**, и каждый раз ищи **одно**:\n1. Согласование (род, число, лицо глагола).\n2. Прошедшие времена (indefinido, imperfecto, pluscuamperfecto).\n3. **ser / estar / hay**.\n4. Предлоги и **a** перед человеком.\n5. Местоимения и их место.\n6. Знаки ударения и **¿ ¡**.\nКогда находишь ошибку, назови правило: «здесь нужно **estar**, потому что это место». Так она больше не повторится.",
          ejemplos: [
            { es: "Madrid es en el centro de España. → Madrid está en el centro de España.", ru: "Мадрид находится в центре Испании.", por: "Где находится — **estar**." },
            { es: "Hay el libro en la mesa. → El libro está en la mesa.", ru: "Книга лежит на столе.", por: "Конкретный предмет — **estar**; **hay** — с **un, una**, без артикля." }
          ],
          truco: "Читай текст вслух: многие ошибки слышно, даже если их не видно."
        }
      ]
    },
    {
      id: "es13m11", n: 11, tipo: "taller",
      titulo: "Taller de escritura",
      resumen: "Пять текстов в четыре шага.",
      intro: "Хороший текст пишут в четыре шага: **план, черновик (el borrador), проверка и новый вариант**. Выбери текст и пройди все шаги. Оба варианта сохраняются, так что видно, насколько текст стал лучше. Не забудь о структуре: **la introducción**, основная часть по абзацам (**los párrafos**) и вывод.",
      vocab: ES13_V["11"]
    },
    {
      id: "es13m12", n: 12, tipo: "proyecto6",
      titulo: "Proyecto: Mi historia en España",
      resumen: "Твой рассказ по-испански в шести частях.",
      intro: "Твой портрет по-испански в шести частях: кто ты, твоя жизнь раньше, как ты приехал, твоя жизнь сейчас, твои планы и твоё мнение. А потом — разговор с Хавьером без готовых ответов. Части можно делать в любом порядке и возвращаться к ним: всё сохраняется."
    },
    {
      id: "es13m13", n: 13, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Времена, косвенная речь, чувства, чтение и аудио.",
      intro: "Тридцать упражнений в шести частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %.",
      partes: [
        { nombre: "Pluscuamperfecto и рассказ", tipos: ["pluscuam", "pluscuam-forma", "relato"], n: 5 },
        { nombre: "Косвенная речь", tipos: ["indirecto", "indirecto-elegir"], n: 5 },
        { nombre: "Чувства и жизнь в Испании", tipos: ["emocion", "vida", "situacion-frase"], n: 5 },
        { nombre: "Чтение и аудио", tipos: ["lectura", "lectura-vf", "audio", "audio-vf"], n: 5 },
        { nombre: "Времена, местоимения, предлоги", tipos: ["tiempos", "pronombre", "preposicion", "error"], n: 5 },
        { nombre: "Общение", tipos: ["pregunta", "respuesta", "dictado-frase", "dictado"], n: 5 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs13Modulo(id) { return UNIDAD_ES_13.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_13 = UNIDAD_ES_13;
window.unidadEs13Modulo = unidadEs13Modulo;

/* ── Vocabulario: palabras → IDs ── */
const ES13_ID_FIJO = { "medio": "ESP-00355" };
function es13Id(w) {
  if (/^ESP-/.test(w)) return w;
  if (ES13_ID_FIJO[w]) return ES13_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio && (x.introducedIn || []).indexOf(13) >= 0) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es13Vocab(m) { return (m.vocab || []).map(es13Id).filter(Boolean); }
function es13Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es13Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U13 (sin las que ya enseñaron la U1 a la U12, ni la ampliación) */
function es13Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_13.modulos.forEach(m => es13Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs13() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es13Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const llenar = (frase, ok) => es13Mayus(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES13-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES13-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  const transformar = (pref, tipo, lista, dif) => lista.forEach(([pide, frase, oks, exp, mod, regla], i) => {
    out.push({ id: "ES13-" + pref + "-" + i, tipo, forma: "escribir", dificultad: dif, modulo: mod, regla, grupo: pref + "-" + i,
      pide, grande: frase, esperadas: oks, idioma: "es", foco: true, formaCasi: false, oir: oks[0], explicacion: exp });
  });

  /* 1. Pluscuamperfecto */
  elegir("pq", "pluscuam", ES13_PLUSCUAM, 1, "es13-pluscuam-uso", "Что подходит?", 2, 11);
  transformar("un", "pluscuam", ES13_UNIR, 3);
  ES13_PLUS_GEN.forEach(([inf, p, frase, regla], i) => {
    const ok = es13Pluscuam(inf, p); if (!ok) return;
    const audio = llenar(frase, ok);
    out.push({ id: "ES13-pg-" + i, tipo: "pluscuam-forma", forma: "escribir", dificultad: 3, modulo: 1, regla: regla || "es13-pluscuam", grupo: "pg-" + inf, lex: lex(inf),
      pide: "Впиши глагол в pluscuamperfecto.", grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES13_HABER[p] + "** + **" + es13Part(inf) + "**: " + audio });
  });
  /* 2–3. Estilo indirecto */
  transformar("ip", "indirecto", ES13_IND_PRES, 3);
  transformar("id", "indirecto", ES13_IND_PAS, 3);
  elegir("ie", "indirecto-elegir", ES13_IND_ELEGIR, 3, "es13-dijo-que", "Что подходит?", 2, 21);
  /* 4. Relato */
  elegir("rl", "relato", ES13_RELATO, 4, "es13-relato", "Что подходит?", 2, 31);
  /* 5–6. Emociones y vida en España */
  elegir("em", "emocion", ES13_EMOCION, 5, "es13-ponerse", "Что подходит?", 2, 41);
  elegir("vi", "vida", ES13_VIDA, 6, "es13-acostumbrarse", "Что подходит?", 2, 51);
  /* 7. Textos de la vida real */
  ES13_LECTURAS.forEach((L, j) => {
    const lineas = L.lineas.map(l => l[0]), todo = lineas.join(" ");
    L.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "ES13-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", dificultad: 2, modulo: 7, grupo: "le-" + L.id + "-" + k,
      texto: lineas, pide: L.titulo + ". " + q, opciones: baraja([ok].concat(malas), j + k + 61), correcta: ok, oir: todo, explicacion: "**" + ok + "**" }));
    L.vf.forEach(([af, v], k) => out.push({ id: "ES13-lev-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", dificultad: 2, modulo: 7, grupo: "lev-" + L.id + "-" + k,
      afirmacion: af, verdadero: v, audio: todo, texto: lineas, textoOculto: true, explicacion: (v ? "Верно. " : "Неверно. ") + todo }));
  });
  /* 8. Escuchar: cuatro niveles */
  ES13_AUDIO.forEach((A, j) => {
    const dial = A.lineas.map(([g, t]) => ({ texto: t, genero: g, rate: A.rate })), lineas = A.lineas.map(l => l[1]);
    const nota = "Уровень " + A.nivel + ". ";
    A.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "ES13-au-" + j + "-" + k, tipo: "audio", forma: "elegir", dificultad: 1 + Math.ceil(A.nivel / 2), modulo: 8, regla: "es13-escuchar", grupo: "au-" + j + "-" + k,
      audio: dial, audioManual: k > 0, texto: lineas, textoOculto: true, pide: nota + "Послушай. " + q, opciones: baraja([ok].concat(malas), j + k + 71), correcta: ok, explicacion: lineas.join(" ") }));
    A.vf.forEach(([af, v], k) => out.push({ id: "ES13-auv-" + j + "-" + k, tipo: "audio-vf", forma: "vf", dificultad: 1 + Math.ceil(A.nivel / 2), modulo: 8, regla: "es13-escuchar", grupo: "auv-" + j + "-" + k,
      afirmacion: af, verdadero: v, audio: dial, texto: lineas, textoOculto: true, explicacion: (v ? "Верно. " : "Неверно. ") + lineas.join(" ") }));
  });
  /* 9. Todos los tiempos */
  elegir("ti", "tiempos", ES13_TIEMPOS, 9, "es13-elegir-tiempo", "Какое время подходит?", 2, 81);
  escribirFalta("tw", "tiempos", ES13_TIEMPOS_ESC, "Впиши глагол в нужной форме.");
  /* 10. Pronombres y preposiciones */
  elegir("pr", "pronombre", ES13_PRON, 10, "es13-pronombres", "Что подходит?", 2, 91);
  elegir("pp", "preposicion", ES13_PREP, 10, "es13-preposiciones", "Какой предлог подходит?", 2, 95);
  /* Preguntas */
  ES13_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES13-pg2-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pr2-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 97), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* Errores típicos */
  ES13_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES13-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es13Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES13-dic-" + id)) return;
    const x = { id: "ES13-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_13.modulos.forEach(m => {
    es13Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es13Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* Situaciones y respuestas; dictado y orden de las frases de la U13 */
  ES13_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES13-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES13_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES13-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 13) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_13.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 8; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES13-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES13-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* Las frases de los módulos que salen del léxico (por primera vez, al día siguiente…): dictado */
  UNIDAD_ES_13.modulos.forEach(m => (m.frases || []).filter(x => !/^FRE-/.test(x)).forEach((t, k) => {
    out.push({ id: "ES13-dfl-" + m.n + "-" + k, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: m.n, grupo: "fl-" + t,
      pide: "Послушай и напиши фразу.", audio: t, esperadas: [t], idioma: "es", oir: t, explicacion: "**" + t + "**" });
  }));
  /* Conversaciones por turnos (módulos 2, 5 y 8) y la conversación final del proyecto */
  ES13_TURNOS.forEach((T, i) => {
    out.push({ id: "ES13-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: T.modulo, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });
  const FIN = es13ConvFinal();
  out.push({ id: "ES13-final", tipo: "final", ampliacion: true, forma: "turnos", dificultad: 3, modulo: 12, grupo: "fin", pide: "🗣️ " + FIN.titulo, turnos: FIN,
    explicacion: "Образец: " + FIN.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  /* Profundización y formas */
  es13Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* [frase, correcta, opciones, explicación, palabra?, módulo?, regla?] */
const ES13_PLUSCUAM = [
  ["Cuando llegué a la fiesta, Ana ya ___.", "se había ido", ["se había ido", "se fue", "se va"], "Аня ушла **раньше**, чем я пришёл."],
  ["Llegué a casa, ___ y me acosté.", "cené", ["cené", "había cenado", "cenaba"], "События по порядку — **indefinido**."],
  ["No pude entrar porque ___ las llaves.", "había perdido", ["había perdido", "perdí", "pierdo"], "Ключи потерялись **раньше**.", "perder"],
  ["Nunca ___ un lugar tan bonito.", "había visto", ["había visto", "vi", "veía"], "**nunca había…** — в первый раз.", null, 1, "es13-nunca-habia"],
  ["Cuando me di cuenta, el autobús ya ___.", "había salido", ["había salido", "salía", "sale"], "Автобус ушёл раньше.", "darse cuenta"],
  ["Cuando llamé, todavía no ___.", "se había levantado", ["se había levantado", "se levantó", "se levanta"], "**todavía no** + pluscuamperfecto."],
  ["Era la primera vez que ___ en avión.", "viajaba", ["viajaba", "viajé", "viajo"], "**era la primera vez que** + imperfecto.", null, 1, "es13-nunca-habia"],
  ["Me sentía mal porque no ___ nada en todo el día.", "había comido", ["había comido", "comí", "como"], "Не ел **до того** момента."],
  ["Resultó que Pablo ya ___ el problema.", "había resuelto", ["había resuelto", "resolvía", "resolverá"], "Пабло решил проблему **раньше**.", "resultar"]
];
/* [consigna, frases, esperadas, explicación, módulo, regla] */
const ES13_UNIR = [
  ["Соедини: cuando + ya.", "Llegué a la estación. El tren ya se había ido.", ["Cuando llegué a la estación, el tren ya se había ido."], "**Cuando llegué…, ya se había ido.**", 1, "es13-pluscuam-uso"],
  ["Соедини: cuando + ya.", "Llegamos al cine. La película ya había empezado.", ["Cuando llegamos al cine, la película ya había empezado."], "**Cuando llegamos…, ya había empezado.**", 1, "es13-pluscuam-uso"],
  ["Скажи, что это было в первый раз: Nunca había…", "Vi el mar por primera vez.", ["Nunca había visto el mar.", "Nunca antes había visto el mar."], "**Nunca había visto…**", 1, "es13-nunca-habia"],
  ["Скажи, что это было в первый раз: Nunca había…", "Comí tortilla por primera vez.", ["Nunca había comido tortilla.", "Nunca antes había comido tortilla."], "**Nunca había comido…**", 1, "es13-nunca-habia"]
];
/* [infinitivo, persona, frase con ___, regla?] */
const ES13_PLUS_GEN = [
  ["salir", 2, "Cuando llegué, Ana ya ___ (salir)."], ["empezar", 2, "Cuando entramos, la clase ya ___ (empezar)."], ["terminar", 0, "A las diez yo ya ___ (terminar) el trabajo."],
  ["hacer", 0, "No pude salir porque no ___ (hacer) los deberes."], ["ver", 0, "Nunca ___ (ver) tanta nieve.", "es13-nunca-habia"], ["decir", 2, "Mi madre me preguntó por qué no le ___ (decir) nada."],
  ["escribir", 1, "¿Por qué no me ___ (escribir) antes?"], ["volver", 5, "Cuando llamé, mis padres todavía no ___ (volver)."], ["abrir", 3, "Cuando llegó el jefe, ya ___ (abrir) la tienda."],
  ["romper", 2, "Pablo estaba triste porque ___ (romper) su móvil."], ["estar", 0, "Nunca ___ (estar) en Galicia.", "es13-nunca-habia"], ["comprar", 4, "¿Ya ___ (comprar) los billetes cuando os llamé?"],
  ["poner", 2, "Cuando llegamos, Lucía ya ___ (poner) la mesa."], ["olvidar", 0, "Me di cuenta de que ___ (olvidar) el pasaporte."], ["leer", 3, "Nunca ___ (leer) una novela en español.", "es13-nunca-habia"],
  ["perder", 5, "Estaban preocupados porque ___ (perder) el último tren."]
];
/* Estilo indirecto en presente: [consigna, frase, esperadas, explicación, módulo, regla] */
const ES13_IND_PRES = [
  ["Передай: Ana dice que…", "Ana: «Estoy cansada.»", ["Ana dice que está cansada."], "Время не меняется; **estoy → está**.", 2, "es13-dice-que"],
  ["Передай: Pablo dice que…", "Pablo: «Mi hermano vive en Madrid.»", ["Pablo dice que su hermano vive en Madrid."], "**mi → su**.", 2, "es13-dice-que"],
  ["Передай: Lucía dice que…", "Lucía: «Vendré a las ocho.»", ["Lucía dice que vendrá a las ocho."], "**vendré → vendrá**.", 2, "es13-dice-que"],
  ["Передай: Marta pregunta…", "Marta: «¿Tienes hambre?»", ["Marta pregunta si tengo hambre.", "Marta me pregunta si tengo hambre."], "Без вопросительного слова — **si**.", 2, "es13-pregunta-si"],
  ["Передай: Javier pregunta…", "Javier: «¿Dónde vives?»", ["Javier pregunta dónde vivo.", "Javier me pregunta dónde vivo."], "**dónde** — со знаком ударения.", 2, "es13-pregunta-si"],
  ["Передай: Mi madre me pide que…", "Mi madre: «¡Llámame!»", ["Mi madre me pide que la llame."], "Просьба — **que** + subjuntivo.", 2, "es13-pide-que"]
];
/* Estilo indirecto en pasado */
const ES13_IND_PAS = [
  ["Передай: Ana dijo que…", "Ana: «Estoy cansada.»", ["Ana dijo que estaba cansada."], "**presente → imperfecto**.", 3, "es13-dijo-que"],
  ["Передай: Pablo dijo que…", "Pablo: «He perdido las llaves.»", ["Pablo dijo que había perdido las llaves."], "**perfecto → pluscuamperfecto**.", 3, "es13-dijo-que"],
  ["Передай: Lucía dijo que…", "Lucía: «Te llamaré.»", ["Lucía dijo que me llamaría."], "**futuro → condicional**; **te → me**.", 3, "es13-dijo-que"],
  ["Передай: Marta dijo que…", "Marta: «Ayer fui al médico.»", ["Marta dijo que el día anterior había ido al médico.", "Marta dijo que había ido al médico el día anterior."], "**indefinido → pluscuamperfecto**; **ayer → el día anterior**.", 3, "es13-palabras-tiempo"],
  ["Передай: Javier dijo que…", "Javier: «Mañana hay examen.»", ["Javier dijo que al día siguiente había examen.", "Javier dijo que había examen al día siguiente."], "**hay → había**; **mañana → al día siguiente**.", 3, "es13-palabras-tiempo"],
  ["Передай: Ana me preguntó…", "Ana: «¿Vienes a la fiesta?»", ["Ana me preguntó si iba a la fiesta."], "**si**; **vienes → iba** (venir → ir).", 3, "es13-pregunto-si"],
  ["Передай: Pablo me preguntó…", "Pablo: «¿Qué haces?»", ["Pablo me preguntó qué hacía."], "**haces → hacía**.", 3, "es13-pregunto-si"],
  ["Передай: Lucía dijo que…", "Lucía: «No puedo venir.»", ["Lucía dijo que no podía venir.", "Lucía dijo que no podía ir."], "**puedo → podía**.", 3, "es13-dijo-que"]
];
const ES13_IND_ELEGIR = [
  ["Ana: «Tengo frío.» → Ana dijo que ___ frío.", "tenía", ["tenía", "tiene", "tendrá"], "**presente → imperfecto**."],
  ["Pablo: «Iré mañana.» → Pablo dijo que ___ al día siguiente.", "iría", ["iría", "irá", "va"], "**futuro → condicional**."],
  ["Lucía: «He comido.» → Lucía dijo que ya ___.", "había comido", ["había comido", "ha comido", "comerá"], "**perfecto → pluscuamperfecto**."],
  ["Marta: «¿Vienes?» → Marta me preguntó ___ iba.", "si", ["si", "que", "que si"], "**si** — без **que**.", null, 3, "es13-pregunto-si"],
  ["Javier: «¡Lee el texto!» → Javier me dice que ___ el texto.", "lea", ["lea", "leo", "leía"], "Просьба → subjuntivo.", null, 2, "es13-pide-que"],
  ["Ana: «Mi piso es pequeño.» → Ana dice que ___ piso es pequeño.", "su", ["su", "mi", "tu"], "**mi → su**.", null, 2, "es13-dice-que"],
  ["Hace un mes, Pablo: «Hoy no trabajo.» → Pablo dijo que ___ no trabajaba.", "aquel día", ["aquel día", "hoy", "mañana"], "Прошло время → **aquel día**.", null, 3, "es13-palabras-tiempo"]
];
const ES13_RELATO = [
  ["___ las once de la noche y llovía mucho.", "Eran", ["Eran", "Fueron", "Habían sido"], "Время, фон — **imperfecto**."],
  ["Estaba en casa cuando de repente ___ la luz.", "se fue", ["se fue", "se iba", "se había ido"], "Событие — **indefinido**."],
  ["___ no entendía nada, pero poco a poco me acostumbré.", "Al principio", ["Al principio", "Al final", "Ni siquiera"], "**al principio** — вначале.", null, 4, "es13-conectores-relato"],
  ["Se fue sin decir nada: ___ me dijo adiós.", "ni siquiera", ["ni siquiera", "por suerte", "enseguida"], "**ni siquiera** — даже не.", "ni siquiera", 4, "es13-conectores-relato"],
  ["Perdí el móvil, pero ___ un chico me lo devolvió.", "por suerte", ["por suerte", "por desgracia", "de hecho"], "Хорошая новость — **por suerte**.", null, 4, "es13-conectores-relato"],
  ["Llamé a la puerta y Lucía abrió ___.", "enseguida", ["enseguida", "apenas", "nunca"], "**enseguida** — сразу же.", "enseguida", 4, "es13-conectores-relato"],
  ["Mi móvil sonó en ___ de la clase.", "medio", ["medio", "mitad", "principio"], "**en medio de** — посреди.", null, 4, "es13-conectores-relato"],
  ["Fue un año ___, pero aprendí mucho.", "duro", ["duro", "seguro", "lleno"], "**duro** — тяжёлый.", "duro", 4, "es13-parrafos"],
  ["Cuando salí del cine, ya ___ de noche.", "era", ["era", "fue", "será"], "Фон — **imperfecto**."],
  ["___ no había leído mi mensaje: no vino.", "Por lo visto", ["Por lo visto", "Por suerte", "Ni siquiera"], "**por lo visto** — судя по всему.", "por lo visto", 4, "es13-conectores-relato"]
];
const ES13_EMOCION = [
  ["Siempre ___ nervioso antes de un examen.", "me pongo", ["me pongo", "estoy", "soy"], "Повторяющаяся перемена — **ponerse**.", "ponerse"],
  ["Hoy ___ muy contenta: he aprobado.", "estoy", ["estoy", "me pongo", "soy"], "Состояние сейчас — **estar**."],
  ["Me ___ miedo los perros grandes.", "dan", ["dan", "da", "doy"], "**los perros** — мн. ч.: **me dan**.", null, 5, "es13-me-da"],
  ["Me ___ vergüenza hablar en público.", "da", ["da", "dan", "doy"], "С инфинитивом — **da**.", null, 5, "es13-me-da"],
  ["Tengo muchas ___ de ver a mi familia.", "ganas", ["ganas", "ilusiones", "deseos"], "**tener ganas de**.", "ganas", 5, "es13-ganas"],
  ["Esta semana tengo cinco exámenes: estoy ___.", "agobiado", ["agobiado", "enamorado", "orgulloso"], "**agobiado** — в стрессе.", "agobiado", 5, "es13-ganas"],
  ["Mis padres sienten mucho ___ de mí.", "orgullo", ["orgullo", "odio", "estrés"], "**el orgullo** — гордость.", "orgullo"],
  ["Después de la noticia, todos estábamos llenos de ___.", "alegría", ["alegría", "alegre", "contento"], "Существительное — **la alegría**.", "alegría"],
  ["Cuando vivo lejos de casa, siento ___.", "nostalgia", ["nostalgia", "felicidad", "confianza"], "**la nostalgia** — тоска по дому.", "nostalgia"],
  ["¡___ de las vacaciones!", "Disfruta", ["Disfruta", "Sufre", "Odia"], "**disfrutar de** — наслаждаться.", "disfrutar", 5, "es13-ganas"],
  ["Me hace mucha ___ el viaje a Madrid.", "ilusión", ["ilusión", "ganas", "esperanza"], "**hacer ilusión** — радостно ждать.", "ilusión", 5, "es13-ganas"],
  ["Tranquilo, ___. No pasa nada.", "cálmate", ["cálmate", "enamórate", "abrázate"], "**calmarse** — успокоиться.", "calmarse", 5, "es13-ganas"]
];
const ES13_VIDA = [
  ["Todavía no me he acostumbrado ___ horario español.", "al", ["al", "del", "con el"], "**acostumbrarse a**."],
  ["Echo de menos ___ mi familia.", "a", ["a", "de", "—"], "О человеке — **a**.", null, 6, "es13-acostumbrarse"],
  ["Al llegar a otro país, muchos sienten el choque ___.", "cultural", ["cultural", "típico", "común"], "**el choque cultural**.", "choque", 6, "es13-choque"],
  ["Para integrarse, hace falta mucho ___.", "esfuerzo", ["esfuerzo", "acento", "origen"], "**el esfuerzo** — усилие.", "esfuerzo", 6, "es13-choque"],
  ["Hablo bien, pero tengo ___ ruso.", "acento", ["acento", "origen", "hogar"], "**el acento** — акцент.", "acento", 6, "es13-choque"],
  ["El 31 de diciembre es ___.", "Nochevieja", ["Nochevieja", "Navidad", "Reyes"], "**la Nochevieja** — 31 декабря.", "Nochevieja", 6, "es13-fiestas"],
  ["Los niños reciben los regalos el día de ___.", "Reyes", ["Reyes", "Nochevieja", "Navidad"], "**los Reyes** — 6 января.", "Reyes", 6, "es13-fiestas"],
  ["Para conducir en España necesito el ___ de conducir.", "carné", ["carné", "papel", "permiso"], "**el carné de conducir**.", "carné", 6, "es13-fiestas"],
  ["Mis padres ___ a Alemania en los años noventa.", "emigraron", ["emigraron", "pertenecieron", "abandonaron"], "**emigrar** — эмигрировать.", "emigrar", 6, "es13-acostumbrarse"],
  ["Los niños se ___ enseguida a un país nuevo.", "adaptan", ["adaptan", "pertenecen", "integran"], "**adaptarse a** — приспособиться.", "adaptarse"]
];
/* Textos del módulo 7: [línea en español, traducción] */
const ES13_LECTURAS = [
  { id: "anuncio", titulo: "Anuncio", lineas: [
      ["Se busca camarero o camarera para bar en el centro de Valencia.", "Требуется официант или официантка в бар в центре Валенсии."],
      ["Horario: de jueves a domingo, de seis de la tarde a doce de la noche.", "График: с четверга по воскресенье, с шести вечера до двенадцати ночи."],
      ["Es necesario hablar español e inglés. No hace falta experiencia.", "Нужно говорить по-испански и по-английски. Опыт не обязателен."],
      ["Si te interesa, manda tu currículum por correo.", "Если тебе интересно, пришли резюме по электронной почте."]],
    preguntas: [["¿Qué días es el trabajo?", "De jueves a domingo", ["De lunes a viernes", "Solo los sábados"]], ["¿Qué idiomas hay que hablar?", "Español e inglés", ["Solo español", "Español y francés"]], ["¿Cómo hay que mandar el currículum?", "Por correo", ["Por teléfono", "En persona"]]],
    vf: [["Hace falta tener experiencia.", false], ["El bar está en el centro.", true]] },
  { id: "noticia", titulo: "Noticia", lineas: [
      ["Barcelona tendrá veinte kilómetros más de calles para bicis el año que viene.", "В следующем году в Барселоне станет на двадцать километров больше улиц для велосипедов."],
      ["Según el ayuntamiento, el número de personas que van en bici ha aumentado un 30 % en dos años.", "По данным мэрии, число людей на велосипедах выросло на 30 % за два года."],
      ["Los vecinos están a favor, pero algunas tiendas se quejan de que habrá menos sitio para aparcar.", "Жители — за, но некоторые магазины жалуются, что будет меньше мест для парковки."]],
    preguntas: [["¿Qué va a pasar?", "Habrá más calles para bicis", ["Habrá más coches", "Cerrarán el centro"]], ["¿Cuánto ha aumentado la gente que va en bici?", "Un 30 %", ["Un 20 %", "Un 50 %"]], ["¿Quién se queja?", "Algunas tiendas", ["Los vecinos", "El ayuntamiento"]]],
    vf: [["Todos están en contra del proyecto.", false], ["Habrá menos sitio para aparcar.", true]] },
  { id: "resena", titulo: "Reseña", lineas: [
      ["★★★★☆ Un restaurante pequeño con comida casera.", "★★★★☆ Маленький ресторан с домашней едой."],
      ["Fuimos un sábado sin reservar y tuvimos que esperar media hora, pero mereció la pena.", "Мы пришли в субботу без брони и полчаса ждали, но оно того стоило."],
      ["La tortilla estaba muy rica y el camarero fue muy amable. Lo único malo: la música estaba demasiado alta.", "Тортилья была очень вкусной, а официант — очень любезным. Единственный минус: музыка играла слишком громко."],
      ["Lo recomiendo, pero es mejor reservar.", "Рекомендую, но лучше бронировать."]],
    preguntas: [["¿Cuántas estrellas le da?", "Cuatro", ["Tres", "Cinco"]], ["¿Qué fue lo malo?", "La música", ["La comida", "El camarero"]], ["¿Qué recomienda el autor?", "Reservar", ["Ir un sábado", "Pedir pescado"]]],
    vf: [["Tuvieron que esperar.", true], ["Al autor no le gustó la comida.", false]] },
  { id: "entrevista", titulo: "Entrevista", lineas: [
      ["—¿Cuándo empezó a cantar?", "— Когда вы начали петь?"],
      ["—De niña. Mi abuela cantaba en casa todo el día, y yo cantaba con ella.", "— В детстве. Моя бабушка пела дома целый день, а я пела вместе с ней."],
      ["—¿Y cómo llegó a ser artista?", "— А как вы стали артисткой?"],
      ["—Por suerte, alguien de la radio me oyó en un bar. Al principio no me lo creía: ¡nunca había cantado delante de tanta gente!", "— К счастью, меня услышал в баре человек с радио. Сначала я не могла в это поверить: я никогда раньше не пела перед столькими людьми!"],
      ["—¿Qué planes tiene?", "— Какие у вас планы?"],
      ["—Este verano sale mi primera canción, y en otoño haré conciertos por toda España.", "— Этим летом выходит моя первая песня, а осенью у меня концерты по всей Испании."]],
    preguntas: [["¿Quién cantaba en casa?", "Su abuela", ["Su madre", "Su hermana"]], ["¿Dónde la oyeron?", "En un bar", ["En un concierto", "En la calle"]], ["¿Qué hará en otoño?", "Conciertos", ["Una canción", "Una película"]]],
    vf: [["Antes ya había cantado muchas veces ante mucha gente.", false], ["Su primera canción sale este verano.", true]] },
  { id: "correo", titulo: "Correo", lineas: [
      ["Hola, Lucía:", "Привет, Лусия!"],
      ["¿Qué tal todo? Te escribo desde Sevilla. Llegué el lunes y estoy encantada.", "Как дела? Пишу тебе из Севильи. Я приехала в понедельник и в восторге."],
      ["Ayer fui a un espectáculo de música. ¡Nunca había visto nada igual!", "Вчера я была на музыкальном представлении. Никогда не видела ничего подобного!"],
      ["Mañana vuelvo a Barcelona. ¿Quedamos el sábado y te lo cuento todo?", "Завтра возвращаюсь в Барселону. Встретимся в субботу, и я тебе всё расскажу?"],
      ["Un abrazo, Ana", "Обнимаю, Аня"]],
    preguntas: [["¿Dónde está Ana?", "En Sevilla", ["En Barcelona", "En Madrid"]], ["¿Qué hizo ayer?", "Fue a un espectáculo de música", ["Fue a la playa", "Fue a un museo"]], ["¿Qué propone?", "Quedar el sábado", ["Llamar el lunes", "Ir a Sevilla juntas"]]],
    vf: [["Ana ya había visto un espectáculo así antes.", false], ["Ana vuelve a Barcelona mañana.", true]] }
];
/* Audios del módulo 8: { nivel, rate, lineas: [[voz, texto]], preguntas, vf } */
const ES13_AUDIO = [
  { nivel: 1, rate: 0.8, lineas: [["lucia", "Hola, soy Lucía. Ayer fue mi cumpleaños. Por la tarde fui al cine con mis amigos y después cenamos en un restaurante italiano. Fue un día muy bonito."]],
    preguntas: [["¿Qué celebró Lucía?", "Su cumpleaños", ["Nochevieja", "Un examen"]], ["¿Dónde cenaron?", "En un restaurante italiano", ["En casa", "En un bar de tapas"]]],
    vf: [["Lucía fue al cine sola.", false]] },
  { nivel: 2, rate: 0.9, lineas: [["pablo", "Oye, Marta, ¿has visto mis llaves?"], ["marta", "Esta mañana estaban en la mesa de la cocina."], ["pablo", "Ya he mirado allí y no están."], ["marta", "¿Y en el abrigo? Ayer lo llevabas puesto."], ["pablo", "¡Menos mal! Aquí están."]],
    preguntas: [["¿Qué busca Pablo?", "Sus llaves", ["Su móvil", "Su abrigo"]], ["¿Dónde estaban al final?", "En el abrigo", ["En la cocina", "En la mesa"]]],
    vf: [["Pablo no había mirado en la cocina.", false]] },
  { nivel: 3, rate: 1, lineas: [["javier", "El verano pasado fui a Asturias con mi mujer. El primer día hacía muy buen tiempo y decidimos subir a una montaña. Cuando estábamos en medio del camino, empezó a llover muchísimo. Por desgracia, nos habíamos dejado los abrigos en el coche. Llegamos al hotel con mucho frío, pero nos reímos mucho."]],
    preguntas: [["¿Qué tiempo hacía al principio?", "Muy bueno", ["Llovía", "Hacía frío"]], ["¿Por qué tuvieron frío?", "Se habían dejado los abrigos en el coche", ["No tenían dinero", "Se perdieron"]]],
    vf: [["Javier estaba enfadado al final.", false], ["Empezó a llover en medio del camino.", true]] },
  { nivel: 4, rate: 1.05, lineas: [["ana", "Javier, ¿vienes el sábado a la cena de Lucía?"], ["javier", "Uf… El sábado tengo que terminar un informe, y el domingo trabajo temprano…"], ["ana", "Bueno, si te da tiempo, pásate aunque sea un rato."], ["javier", "Vale, ya veremos. Ya te contaré."]],
    preguntas: [["¿Va a ir Javier a la cena?", "Seguramente no", ["Sí, seguro", "Sí, a las ocho"]], ["¿Qué le propone Ana?", "Ir aunque sea un rato", ["Cenar el domingo", "Terminar el informe juntos"]]],
    vf: [["Javier dice claramente que no irá.", false]] }
];
const ES13_TIEMPOS = [
  ["Ayer ___ al cine con Lucía.", "fui", ["fui", "he ido", "iba"], "**ayer** — **indefinido**."],
  ["Esta mañana ___ tarde.", "me he levantado", ["me he levantado", "me levanté", "me levantaba"], "**esta mañana** — **perfecto**."],
  ["De niño ___ en un pueblo pequeño.", "vivía", ["vivía", "viví", "he vivido"], "Привычка, фон — **imperfecto**."],
  ["Cuando ___ a casa, te llamo.", "llegue", ["llegue", "llego", "llegaré"], "**cuando** о будущем — **subjuntivo**."],
  ["El año que viene ___ a Rusia.", "viajaré", ["viajaré", "viajé", "viajaba"], "Будущее — **futuro**."],
  ["Si tengo tiempo, te ___.", "ayudaré", ["ayudaré", "ayude", "ayudaría"], "**si** + presente → **futuro**."],
  ["Quiero que ___ a mi fiesta.", "vengas", ["vengas", "vienes", "vendrás"], "**quiero que** — **subjuntivo**."],
  ["Me ___ vivir cerca del mar.", "gustaría", ["gustaría", "gustará", "guste"], "Мечта, вежливо — **condicional**."],
  ["Cuando llegué, todos ___.", "se habían ido", ["se habían ido", "se fueron", "se van"], "Раньше другого прошлого — **pluscuamperfecto**."],
  ["Normalmente ___ en metro.", "voy", ["voy", "fui", "iré"], "Обычно — **presente**."]
];
/* [frase, correcta, explicación, módulo, regla, palabra?] */
const ES13_TIEMPOS_ESC = [
  ["El lunes pasado ___ (empezar) el curso.", "empezó", "**el lunes pasado** — **indefinido**.", 9, "es13-elegir-tiempo"],
  ["Cuando era joven, ___ (jugar) al fútbol todos los días.", "jugaba", "Привычка в прошлом — **imperfecto**.", 9, "es13-elegir-tiempo"],
  ["Nunca ___ (estar) en Sevilla, pero quiero ir.", "he estado", "**nunca** до сегодня — **perfecto**.", 9, "es13-elegir-tiempo"],
  ["Ojalá ___ (hacer) buen tiempo mañana.", "haga", "**ojalá** — **subjuntivo**.", 9, "es13-elegir-tiempo"],
  ["Mañana ___ (tener) tiempo, te lo prometo.", "tendré", "Будущее — **futuro**.", 9, "es13-elegir-tiempo"],
  ["Cuando ___ (terminar) la carrera, buscaré trabajo.", "termine", "**cuando** о будущем — **subjuntivo**.", 9, "es13-elegir-tiempo"]
];
const ES13_PRON = [
  ["¿El libro? Ya ___ he dado a Marta.", "se lo", ["se lo", "le lo", "lo le"], "**le + lo → se lo**."],
  ["¿Has visto a Ana? Sí, ___ vi ayer.", "la", ["la", "le", "lo"], "Кого? — **la**."],
  ["A mis padres ___ escribo cada semana.", "les", ["les", "los", "las"], "Кому? — **les**."],
  ["Esta es la llave. ¿___ das a Pablo?", "Se la", ["Se la", "Le la", "La le"], "**le + la → se la**."],
  ["Voy a ___ mañana. (dar — tú — lo)", "dártelo", ["dártelo", "darte lo", "te lo dar"], "После инфинитива — слитно: **dártelo**."],
  ["Veo ___ Ana todos los días.", "a", ["a", "—", "en"], "Перед человеком — **a**."],
  ["Ana ___ ha dicho la verdad a su madre.", "le", ["le", "la", "lo"], "Кому? — **le**."]
];
const ES13_PREP = [
  ["Este regalo es ___ ti.", "para", ["para", "por", "a"], "Адресат — **para**."],
  ["Gracias ___ la ayuda.", "por", ["por", "para", "de"], "Причина — **por**."],
  ["Mañana voy ___ Madrid.", "a", ["a", "en", "de"], "Куда — **a**."],
  ["Siempre pienso ___ ti.", "en", ["en", "a", "de"], "**pensar en**."],
  ["Me di cuenta ___ que era tarde.", "de", ["de", "—", "en"], "**darse cuenta de que**."],
  ["Todavía no me he acostumbrado ___ frío.", "al", ["al", "del", "en el"], "**acostumbrarse a**."],
  ["Depende ___ tiempo.", "del", ["del", "al", "en el"], "**depender de**."],
  ["Se enamoró ___ una chica de Madrid.", "de", ["de", "con", "a"], "**enamorarse de**."]
];
const ES13_PREGUNTAS = [
  ["¿Qué te ___ ?", "Me dijo que estaba cansada.", "dijo", ["dijo", "dice", "decía"], 3, "es13-dijo-que"],
  ["¿Qué te ___ ?", "Me caí por la escalera.", "pasó", ["pasó", "pasa", "pasaba"], 4, "es13-relato"],
  ["¿Cómo te ___ ?", "Un poco triste, la verdad.", "sientes", ["sientes", "pones", "das"], 5, "es13-ponerse"],
  ["¿Qué ___ de menos?", "A mi familia y la nieve.", "echas", ["echas", "das", "haces"], 6, "es13-acostumbrarse"],
  ["¿Ya ___ comido cuando llegué?", "Sí, ya había comido.", "habías", ["habías", "has", "hubiste"], 1, "es13-pluscuam"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES13_ERRORES = [
  [["Cuando", "llegué,", "ya", "salió."], 3, "había salido.", 1, "es13-pluscuam-uso", "Раньше другого прошлого — **había salido**."],
  [["Me", "dijo", "que", "vendrá", "al", "día", "siguiente."], 3, "vendría", 3, "es13-dijo-que", "После **dijo**: futuro → **condicional**."],
  [["Me", "preguntó", "donde", "vivía."], 2, "dónde", 3, "es13-pregunto-si", "Вопросительное слово — со знаком ударения: **dónde**."],
  [["Siempre", "estoy", "nervioso", "antes", "de", "un", "examen."], 1, "me pongo", 5, "es13-ponerse", "Повторяющаяся перемена — **me pongo**."],
  [["Me", "da", "miedo", "los", "perros."], 1, "dan", 5, "es13-me-da", "**los perros** — мн. ч.: **me dan**."],
  [["Echo", "de", "menos", "mi", "madre."], 3, "a mi", 6, "es13-acostumbrarse", "О человеке — **a mi madre**."],
  [["Le", "lo", "he", "dicho."], 0, "Se", 10, "es13-pronombres", "**le + lo → se lo**."],
  [["Ayer", "he", "ido", "al", "cine."], 1, "fui", 9, "es13-elegir-tiempo", "**ayer** — **indefinido**: **fui**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES13_SITUACIONES = [
  ["Ты пришёл на вокзал, а поезда уже нет.", "Cuando llegué, el tren ya había salido.", ["Cuando llegué, el tren ya salió.", "Cuando llegaba, el tren ya sale."], "Раньше — **había salido**.", 1],
  ["Ты впервые видишь снег в Испании.", "¡Nunca había visto nieve aquí!", ["¡Nunca vi nieve aquí!", "¡Nunca he visto nieve aquí ayer!"], "**nunca había visto**.", 1],
  ["Ты передаёшь, что Аня сказала, что устала.", "Ana dijo que estaba cansada.", ["Ana dijo que está cansada mañana.", "Ana dijo estaba cansada."], "**dijo que estaba**.", 3],
  ["Ты рассказываешь, что всегда нервничаешь перед экзаменами.", "Siempre me pongo nervioso antes de los exámenes.", ["Siempre soy nervioso antes de los exámenes.", "Siempre me doy nervioso antes de los exámenes."], "**ponerse nervioso**.", 5],
  ["Ты говоришь, что скучаешь по семье.", "Echo de menos a mi familia.", ["Echo de menos mi familia.", "Echo menos a mi familia."], "**echar de menos a**.", 6],
  ["Тебе рассказали удивительную новость.", "¡No me digas!", ["¡No me dices!", "¡No dime!"], "**¡No me digas!** — Да ты что!", 4],
  ["Всё кончилось хорошо, и ты облегчённо вздыхаешь.", "¡Menos mal!", ["¡Más mal!", "¡Menos bien!"], "**¡Menos mal!**", 4],
  ["Ты обещаешь рассказать новости позже.", "Ya te contaré.", ["Ya te cuento ayer.", "Ya te contaba."], "**Ya te contaré.**", 8]
];
const ES13_RESPUESTAS = [
  ["¡Me han dado el trabajo!", "¡No me digas! ¡Qué bien!", ["¡Menos mal que no!", "¡Que te mejores!"], "Удивиться и порадоваться.", 4],
  ["Perdí el pasaporte, pero un chico me lo devolvió.", "¡Menos mal!", ["¡Qué pena!", "¡Ni hablar!"], "Облегчение — **¡Menos mal!**", 4],
  ["¿Qué te dijo Pablo?", "Que vendría más tarde.", ["Que vendrá ayer.", "Que viene mañana pasado."], "**dijo que vendría**.", 3],
  ["¿Cómo te sientes en España?", "Al principio fue duro, pero ya me he acostumbrado.", ["Al principio es duro, pero ya me acostumbraré ayer.", "Me he acostumbrado duro."], "Рассказ: **al principio… ya me he acostumbrado**.", 6],
  ["Pablo y Marta se casan.", "¡Quién lo iba a decir!", ["¡Quién lo va a decir mañana!", "¡Ya te contaré!"], "Неожиданно — **¡Quién lo iba a decir!**", 5],
  ["Bueno, me voy, que llego tarde.", "Vale, ya me contarás.", ["Vale, ya me contabas.", "Vale, me cuentas ayer."], "**ya me contarás** — потом расскажешь.", 8]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas, rx?]], modelo, pista?] */
function es13Turnos(quien, genero, titulo, chat, modulo, pasos) {
  return { quien, genero, titulo, chat, modulo, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f, rx]) => (rx ? { es, formas: f ? f.split("|") : [], rx } : { es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES13_PASADO = "fui|estuve|tuve|hice|vine|dije|pude|puse|supe|quise|di|vi|llegué|empecé|viví|trabajé|estudié|conocí|salí|aprendí|era|estaba|tenía|vivía|había";
const ES13_PASADO_RX = "^[a-záéíóúñ]+(é|aste|ó|amos|aron|í|iste|ió|imos|ieron|aba|ía|aban|ían)$";
const ES13_TURNOS = [
  es13Turnos("Lucía", "lucia", "¿Qué te dijo Marta?", true, 3, [
    ["¿Has hablado con Marta? ¿Qué te dijo? 🤔", "Ты говорил с Мартой? Что она тебе сказала?", "Передай: она сказала, что устала (dijo que estaba…).",
      [["dijo que", "dijo que|me dijo que"], ["imperfecto", "estaba|tenía|quería|podía|iba"]], "Me dijo que estaba muy cansada.", "**Me dijo que estaba…**"],
    ["¿Y va a venir a la cena?", "А она придёт на ужин?", "Передай: она сказала, что придёт / не придёт (condicional).",
      [["condicional", "vendría|iría|llegaría|podría", "^[a-záéíóúñ]+(ría|rían)$"]], "Dijo que no vendría, que lo sentía mucho.", "**Dijo que vendría / no vendría.**"],
    ["¡Qué pena! ¿Te preguntó algo?", "Жаль! Она тебя что-нибудь спросила?", "Передай вопрос: me preguntó si…",
      [["me preguntó si", "preguntó si|me preguntó si|preguntó qué|preguntó dónde|preguntó cuándo"]], "Me preguntó si podíamos quedar el domingo.", "**Me preguntó si…**"]
  ]),
  es13Turnos("Marta", "marta", "¿Cómo te sientes?", false, 5, [
    ["Te veo un poco triste. ¿Qué te pasa?", "Ты какой-то грустный. Что с тобой?", "Скажи, как ты себя чувствуешь.",
      [["чувство", "me siento|estoy|echo de menos|tengo|me pongo|nostalgia|triste|cansado|cansada|agobiado|agobiada|solo|sola"]], "Me siento un poco solo. Echo de menos a mi familia.", "**Me siento…, Echo de menos…**"],
    ["¿Y qué te da miedo?", "А чего ты боишься?", "Ответь: me da miedo / me dan miedo…",
      [["me da(n) miedo", "me da miedo|me dan miedo|me da|me dan"]], "Me da miedo no encontrar trabajo.", "**Me da miedo…**"],
    ["¿Y qué te hace ilusión?", "А чего ты с радостью ждёшь?", "Ответь: me hace ilusión… / tengo ganas de…",
      [["ilusión / ganas", "me hace ilusión|tengo ganas|tengo muchas ganas|me hace mucha ilusión|me hacen ilusión"]], "Tengo muchas ganas de ver a mis padres en Navidad.", "**Tengo ganas de…**"]
  ]),
  es13Turnos("Ana", "ana", "¿Qué te pasó?", false, 4, [
    ["¡Llegas tarde! ¿Qué te pasó?", "Ты опоздал! Что случилось?", "Расскажи, что случилось (indefinido).",
      [["прошлое", ES13_PASADO, ES13_PASADO_RX]], "Perdí el autobús y tuve que venir andando.", "**Perdí…, tuve que…**"],
    ["¿Y por qué lo perdiste?", "А почему ты на него опоздал?", "Объясни, что было раньше (había + participio).",
      [["pluscuamperfecto", "había|habías|habíamos|habían"]], "Porque me había dejado el móvil en casa y volví a buscarlo.", "**Me había dejado…**"],
    ["¡Vaya! ¿Y al final?", "Ну и ну! А в конце?", "Закончи историю: al final, por suerte…",
      [["конец", "al final|finalmente|por suerte|por desgracia|menos mal"]], "Al final llegué, ¡y por suerte la clase no había empezado!", "**Al final…, por suerte…**"]
  ])
];
/* La conversación final del proyecto: una entrevista con Javier, sin respuestas fijas */
function es13ConvFinal() {
  if (es13ConvFinal.cache) return es13ConvFinal.cache;
  return (es13ConvFinal.cache = es13Turnos("Javier", "javier", "Entrevista con Javier", false, 12, [
    ["¿De dónde eres y cuánto tiempo llevas en España?", "Откуда ты и сколько ты уже в Испании?", "Ответь.",
      [["откуда", "soy de|vengo de|nací en|~soy"], ["сколько", "llevo|hace|desde|años|meses|~año"]], "Soy de Moscú y llevo dos años en España.", "**Soy de…, llevo…**"],
    ["¿Por qué viniste?", "Почему ты приехал?", "Объясни причину, в прошлом.",
      [["прошлое", ES13_PASADO, ES13_PASADO_RX], ["причина", "porque|para|por|como|ya que"]], "Vine porque mi pareja había encontrado trabajo aquí.", "**Vine porque…**"],
    ["¿Qué te dijeron tus amigos cuando decidiste venir?", "Что сказали твои друзья, когда ты решил приехать?", "Передай их слова: me dijeron que…",
      [["dijeron que", "me dijeron que|dijeron que|me dijo que|dijo que"]], "Me dijeron que era una idea muy rara, pero que me echarían de menos.", "**Me dijeron que…**"],
    ["¿Cómo fue al principio?", "Как было вначале?", "Расскажи о чувствах вначале.",
      [["вначале", "al principio|los primeros|el primer|~principio"], ["чувство", "me sentía|estaba|me ponía|me daba|echaba de menos|era|fue|difícil|duro"]], "Al principio fue duro: me sentía solo y echaba de menos a mi familia.", "**Al principio…**"],
    ["¿Y ahora? ¿Qué es lo que más te gusta de España?", "А сейчас? Что тебе больше всего нравится в Испании?", "Ответь.",
      [["что нравится", "me gusta|me encanta|lo que más|me gustan|me encantan"]], "Ahora me encanta: lo que más me gusta es la gente.", "**Lo que más me gusta es…**"],
    ["¿Qué planes tienes para el futuro?", "Какие у тебя планы на будущее?", "Расскажи о планах: futuro, condicional или cuando + subjuntivo.",
      [["планы", "voy a|quiero|me gustaría|cuando|pienso", "^[a-záéíóúñ]+(ré|rás|rá|remos|rán|ría|ríamos)$"]], "Cuando tenga el carné de conducir, me gustaría vivir en un pueblo.", "**Me gustaría…, Cuando tenga…**"],
    ["¿Qué le recomiendas a una persona que acaba de llegar?", "Что ты посоветуешь человеку, который только что приехал?", "Дай совет.",
      [["совет", "te recomiendo|le recomiendo|que aprenda|que hable|tiene que|hay que|debería|es importante|que no tenga"]], "Le recomiendo que aprenda el idioma y que no tenga miedo de equivocarse.", "**Le recomiendo que…**"]
  ]));
}
window.ejerciciosUnidadEs13 = ejerciciosUnidadEs13;
window.es13Vocab = es13Vocab;
window.es13Ampliacion = es13Ampliacion;
window.es13Objetivo = es13Objetivo;
/* Desafío del día U13 (js/hoy.js): «Что он сказал?» — [quién, frase directa, correcta, con el tiempo sin cambiar (Почти), equivocadas, explicación] */
const ES13_HOY = [
  ["Lucía", "Tengo frío.", "Lucía dijo que tenía frío.", "Lucía dijo que tiene frío.", ["Lucía dijo que tendrá frío.", "Lucía dijo que tuvo frío."], "presente → imperfecto"],
  ["Pablo", "Iré al médico.", "Pablo dijo que iría al médico.", "Pablo dijo que irá al médico.", ["Pablo dijo que fue al médico.", "Pablo dijo que vaya al médico."], "futuro → condicional"],
  ["Ana", "He terminado el trabajo.", "Ana dijo que había terminado el trabajo.", "Ana dijo que ha terminado el trabajo.", ["Ana dijo que terminará el trabajo.", "Ana dijo que terminaba el trabajo."], "perfecto → pluscuamperfecto"],
  ["Javier", "Estoy muy ocupado.", "Javier dijo que estaba muy ocupado.", "Javier dijo que está muy ocupado.", ["Javier dijo que estará muy ocupado.", "Javier dijo que estuvo muy ocupado."], "presente → imperfecto"],
  ["Marta", "Vivo en Barcelona.", "Marta dijo que vivía en Barcelona.", "Marta dijo que vive en Barcelona.", ["Marta dijo que vivirá en Barcelona.", "Marta dijo que viviría en Barcelona."], "presente → imperfecto"],
  ["Lucía", "Compré un coche.", "Lucía dijo que había comprado un coche.", "Lucía dijo que compró un coche.", ["Lucía dijo que compra un coche.", "Lucía dijo que comprará un coche."], "indefinido → pluscuamperfecto"],
  ["Pablo", "Llegaré tarde.", "Pablo dijo que llegaría tarde.", "Pablo dijo que llegará tarde.", ["Pablo dijo que llegó tarde.", "Pablo dijo que llega tarde ayer."], "futuro → condicional"],
  ["Ana", "No puedo venir.", "Ana dijo que no podía venir.", "Ana dijo que no puede venir.", ["Ana dijo que no podrá venir.", "Ana dijo que no pudo venir."], "presente → imperfecto"],
  ["Javier", "He visto la película.", "Javier dijo que había visto la película.", "Javier dijo que ha visto la película.", ["Javier dijo que verá la película.", "Javier dijo que veía la película."], "perfecto → pluscuamperfecto"],
  ["Marta", "Tengo hambre.", "Marta dijo que tenía hambre.", "Marta dijo que tiene hambre.", ["Marta dijo que tendrá hambre.", "Marta dijo que tuvo hambre."], "presente → imperfecto"],
  ["Lucía", "Te ayudaré.", "Lucía dijo que me ayudaría.", "Lucía dijo que me ayudará.", ["Lucía dijo que te ayudaría.", "Lucía dijo que me ayudó."], "futuro → condicional; te → me"],
  ["Pablo", "Me gusta este barrio.", "Pablo dijo que le gustaba aquel barrio.", "Pablo dijo que le gusta este barrio.", ["Pablo dijo que me gustaba este barrio.", "Pablo dijo que le gustará aquel barrio."], "presente → imperfecto; me → le; este → aquel"]
];
window.ES13_HOY = ES13_HOY;
const ES13_MEZCLA = { pluscuam: 2, "pluscuam-forma": 2, indirecto: 3, "indirecto-elegir": 2, relato: 2, emocion: 2, vida: 1, lectura: 2, "lectura-vf": 1, audio: 2, "audio-vf": 1,
  tiempos: 2, pronombre: 1, preposicion: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 1, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1,
  natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1 };
window.ES13_MEZCLA = ES13_MEZCLA;

/* ── Taller de escritura (módulo 11) y proyecto en seis partes (módulo 12) ──
   Los requisitos cuentan formas con data-verbos-es.js: tiempos, conectores, opinión. */
const ES13_DET = {
  idx: null,
  n: t => String(t || "").toLowerCase(),
  pal: t => (String(t || "").toLowerCase().match(/[a-záéíóúüñ]+/g) || []),
  indice() {
    if (this.idx) return this.idx;
    const I = {};
    if (typeof VERBOS_ES !== "undefined") Object.keys(VERBOS_ES).forEach(id => {
      const v = VERBOS_ES[id]; if (!v || v.base) return;
      ["pres", "indef", "imperf", "fut", "cond", "subj"].forEach(t => (v[t] || []).forEach(f => { if (f) (I[f] = I[f] || new Set()).add(t); }));
      if (v.part) (I[v.part] = I[v.part] || new Set()).add("part");
    });
    return (this.idx = I);
  },
  cuenta(t, tiempos) { const I = this.indice(); return this.pal(t).filter(w => I[w] && tiempos.some(x => I[w].has(x))).length; },
  pluscuam(t) { return (this.n(t).match(/\b(había|habías|habíamos|habíais|habían)\s+(no\s+)?[a-záéíóúñ]+(ado|ido|to|cho|sto)\b/g) || []).length; },
  tiene(t, lista) { const n = " " + this.n(t).replace(/[^a-záéíóúüñ]+/g, " ") + " "; return lista.filter(x => n.indexOf(" " + x + " ") >= 0).length; },
  CONECT: ["primero", "después", "luego", "entonces", "al principio", "al final", "finalmente", "de repente", "enseguida", "por eso", "además", "sin embargo", "aunque", "porque", "así que", "mientras", "por suerte", "por desgracia", "en cambio", "por un lado", "por otro lado", "en conclusión", "en resumen", "por lo tanto"],
  OPIN: ["en mi opinión", "creo que", "pienso que", "me parece que", "para mí", "desde mi punto de vista", "opino que", "no creo que"],
  RAZON: ["porque", "por eso", "ya que", "como", "por lo tanto", "así que", "debido a", "gracias a"],
  EMO: ["me siento", "me sentía", "me pongo", "me puse", "me ponía", "me da", "me dan", "me daba", "echo de menos", "echaba de menos", "estaba triste", "estoy contento", "estoy contenta", "tengo ganas", "me hace ilusión", "nostalgia", "alegría", "tristeza", "miedo", "orgulloso", "orgullosa", "feliz", "agobiado", "agobiada"]
};
const ES13_R = {
  frases: (a, b) => ({ txt: "От " + a + " до " + b + " фраз", fn: t => { const k = azFrases(t).length; return k >= a && k <= b; } }),
  palabras: (a, b) => ({ txt: "От " + a + " до " + b + " слов", fn: t => { const k = azContarPalabras(t); return k >= a && k <= b; } }),
  pasado: k => ({ txt: "Не меньше " + k + " глаголов в прошедшем (fui, vivía…)", fn: t => ES13_DET.cuenta(t, ["indef", "imperf"]) + ES13_DET.pluscuam(t) >= k }),
  presente: k => ({ txt: "Не меньше " + k + " глаголов в presente", fn: t => ES13_DET.cuenta(t, ["pres"]) >= k }),
  futuro: k => ({ txt: "Не меньше " + k + " форм будущего (iré, me gustaría, voy a…)", fn: t => ES13_DET.cuenta(t, ["fut", "cond"]) + (ES13_DET.n(t).match(/\b(voy|vas|va|vamos|van) a [a-záéíóúñ]+r\b/g) || []).length >= k }),
  pluscuam: k => ({ txt: k > 1 ? "Не меньше " + k + " pluscuamperfecto (había + participio)" : "Pluscuamperfecto (había + participio)", fn: t => ES13_DET.pluscuam(t) >= k }),
  conect: k => ({ txt: "Не меньше " + k + " связок (al principio, después, por eso, sin embargo…)", fn: t => ES13_DET.tiene(t, ES13_DET.CONECT) >= k }),
  opinion: () => ({ txt: "Мнение (en mi opinión, creo que…)", fn: t => ES13_DET.tiene(t, ES13_DET.OPIN) >= 1 }),
  razones: k => ({ txt: k > 1 ? "Не меньше " + k + " причин (porque, por eso…)" : "Причина (porque, por eso…)", fn: t => ES13_DET.n(t).split(/\b(?:porque|por eso|ya que|por lo tanto|así que|debido a|gracias a)\b/).length - 1 >= k }),
  emocion: () => ({ txt: "Чувство (me siento, me pongo, echo de menos…)", fn: t => ES13_DET.tiene(t, ES13_DET.EMO) >= 1 }),
  indirecto: () => ({ txt: "Чужие слова (me dijo que…, me preguntó si…)", fn: t => /\b(dijo|dijeron|dice|dicen|explicó|contó|preguntó|preguntaron|pregunta) (que|si|qué|dónde|cuándo|cómo|por qué)\b/.test(ES13_DET.n(t)) }),
  pregunta: () => ({ txt: "Вопрос (¿…?)", fn: t => /¿[^?]+\?/.test(t) }),
  palabra: (txt, lista) => ({ txt, fn: t => ES13_DET.tiene(t, lista) >= 1 })
};
/* Consejos del corrector (los de las U10–U12 y los propios de la U13) */
const ES13_CONSEJOS = [
  { rx: "\\bcuando (llegué|llegamos|entré|entramos|volví|volvimos),? (ya|todavía no) (salió|se fue|empezó|terminó|comió|llegó)\\b", msg: "То, что было раньше другого прошлого, — **pluscuamperfecto**: **cuando llegué, ya había salido**." },
  { rx: "\\b(dijo|dijeron|explicó|contó) que [a-záéíóúñ]+(ré|rás|rá|remos|rán)\\b", msg: "После **dijo que** будущее → **condicional**: **dijo que vendría**." },
  { rx: "\\bpreguntó que si\\b", msg: "**Me preguntó si…** — без **que**." },
  { rx: "\\bsiempre (estoy|está|estaba) (nervioso|nerviosa|triste|rojo|roja)\\b", msg: "Перемена — **ponerse**: **siempre me pongo nervioso**." },
  { rx: "\\bme da miedo (los|las) ", msg: "Мн. ч.: **me dan miedo los…**" },
  { rx: "\\becho de menos (mi|mis|tu|su|sus) ", msg: "О человеке — с **a**: **echo de menos a mi madre**." },
  { rx: "\\bsi (tendré|tendrás|tendrá|podré|podrá|será|habrá)\\b", msg: "После **si** — presente: **si tengo tiempo…**" },
  { rx: "\\bcuando (llegaré|tendré|seré|terminaré|podré)\\b", msg: "**cuando** о будущем — subjuntivo: **cuando llegue, cuando tenga**." },
  { rx: "\\b(le|les) (lo|la|los|las) (?!que\\b)[a-záéíóúñ]+", msg: "**le / les** перед **lo, la** → **se**: **se lo dije**." },
  { rx: "\\bquiero que (vienes|tienes|haces|eres|estás|puedes|vas)\\b", msg: "**quiero que** + subjuntivo: **vengas, tengas, hagas…**" },
  { rx: "\\bgracias para\\b", msg: "**gracias por…**" },
  { rx: "\\bme he dado cuenta que\\b|\\bme di cuenta que\\b", msg: "**darse cuenta de que**." },
  { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
];
function ES13_TALLER() {
  if (ES13_TALLER.cache) return ES13_TALLER.cache;
  const R = ES13_R;
  return (ES13_TALLER.cache = [
    { id: "mensaje", emoji: "💬", titulo: "Mensaje a un amigo", formato: "Письмо другу", palabras: [80, 110],
      consigna: "Напиши другу: расскажи новость (что с тобой случилось на этой неделе), как ты себя чувствуешь, и предложи встретиться.",
      ideas: ["Что случилось? Что было раньше? (había…)", "Как ты себя чувствуешь? (estoy…, me siento…)", "Где и когда встретиться?", "Как поздороваться и попрощаться? (¡Hola!… Un abrazo)"],
      requisitos: [R.palabras(80, 110), R.pasado(4), R.emocion(), R.pregunta(), R.palabra("Прощание (un abrazo, besos, hasta pronto, ya te contaré)", ["un abrazo", "besos", "hasta pronto", "ya te contaré", "nos vemos", "hasta luego"])], consejos: ES13_CONSEJOS },
    { id: "relato", emoji: "📖", titulo: "Una historia que me pasó", formato: "Рассказ", palabras: [120, 160],
      consigna: "Расскажи историю, которая с тобой случилась (смешную, страшную или неожиданную): фон, события, что было раньше и чем всё кончилось.",
      ideas: ["Где и когда? Какая была погода, что ты делал? (imperfecto)", "Что случилось? (indefinido: de repente…)", "Что было ещё раньше? (había…)", "Чем кончилось? Что ты думаешь сейчас? (al final, desde entonces)"],
      requisitos: [R.palabras(120, 160), R.pasado(8), R.pluscuam(1), R.conect(3)], consejos: ES13_CONSEJOS },
    { id: "resena", emoji: "⭐", titulo: "Una reseña", formato: "Отзыв", palabras: [80, 120],
      consigna: "Напиши отзыв о ресторане, фильме, книге или концерте: что это, что понравилось, что нет, сколько звёзд и рекомендуешь ли.",
      ideas: ["Что это и когда ты там был?", "Что понравилось больше всего?", "Что не понравилось?", "Рекомендуешь? Кому? (lo recomiendo…)"],
      requisitos: [R.palabras(80, 120), R.opinion(), R.palabra("Рекомендация (lo recomiendo, no lo recomiendo, merece la pena)", ["lo recomiendo", "la recomiendo", "los recomiendo", "recomiendo", "merece la pena", "no merece la pena"]), R.palabra("Оценка (maravilloso, excelente, decepcionado…)", ["maravilloso", "maravillosa", "excelente", "fantástico", "fantástica", "precioso", "preciosa", "decepcionado", "decepcionada", "buenísimo", "buenísima", "horrible"])], consejos: ES13_CONSEJOS },
    { id: "opinion", emoji: "💭", titulo: "Opinión: ¿vivir en otro país?", formato: "Мнение", palabras: [120, 160],
      consigna: "Хорошо ли жить в другой стране? Выскажи мнение, дай минимум две причины и признай что-то с другой стороны (aunque…, sin embargo…).",
      ideas: ["Твоё мнение (en mi opinión…)", "Первая причина (porque…)", "Вторая причина (además…)", "Другая сторона (sin embargo…, aunque…)", "Вывод (en conclusión…)"],
      requisitos: [R.palabras(120, 160), R.opinion(), R.razones(2), R.palabra("Другая сторона (sin embargo, aunque, por otro lado)", ["sin embargo", "aunque", "por otro lado", "en cambio"]), R.palabra("Вывод (en conclusión, en resumen)", ["en conclusión", "en resumen", "por eso creo"])], consejos: ES13_CONSEJOS },
    { id: "carta", emoji: "✉️", titulo: "Lo que me dijeron", formato: "Рассказ с чужими словами", palabras: [100, 140],
      consigna: "Вспомни важный разговор (с другом, врачом, начальником): что тебе сказали, что спросили, что ты ответил. Передай всё косвенной речью.",
      ideas: ["С кем ты говорил и когда?", "Что тебе сказали? (me dijo que…)", "Что спросили? (me preguntó si…)", "Что ты ответил и что было потом?"],
      requisitos: [R.palabras(100, 140), R.indirecto(), R.palabra("Вопрос в косвенной речи (me preguntó si…, preguntó qué…)", ["preguntó si", "preguntó qué", "preguntó dónde", "preguntó cuándo", "preguntó cómo", "preguntó por qué"]), R.pasado(5)], consejos: ES13_CONSEJOS }
  ]);
}
function ES13_PROYECTO() {
  if (ES13_PROYECTO.cache) return ES13_PROYECTO.cache;
  const R = ES13_R;
  return (ES13_PROYECTO.cache = [
    { id: "quien", titulo: "¿Quién soy?", sub: "Кто я", intro: "Представься: имя, откуда ты, где живёшь, чем занимаешься, какой ты.",
      requisitos: [R.frases(8, 14), R.palabra("Имя (me llamo…, soy…)", ["me llamo", "mi nombre es", "soy"]), R.palabra("Где живёшь (vivo en…)", ["vivo en", "vivo"]), R.presente(4)] },
    { id: "antes", titulo: "Mi vida antes", sub: "Моя жизнь раньше", intro: "Как ты жил до Испании: где, с кем, что делал, что любил (imperfecto).",
      requisitos: [R.frases(10, 16), R.pasado(6), R.palabra("Привычка в прошлом (antes, de niño, siempre, todos los días)", ["antes", "de niño", "de niña", "siempre", "todos los días", "cuando era"])] },
    { id: "llegue", titulo: "Cómo llegué", sub: "Как я приехал", intro: "Как ты приехал и что случилось вначале: события, то, что было раньше, и что тебе говорили люди.",
      requisitos: [R.frases(10, 16), R.pasado(6), R.pluscuam(1), R.indirecto(), R.conect(2)] },
    { id: "ahora", titulo: "Mi vida ahora", sub: "Моя жизнь сейчас", intro: "Твоя жизнь в Испании сейчас: к чему ты привык, по чему скучаешь, что чувствуешь, какие обычаи уже знаешь.",
      requisitos: [R.frases(10, 16), R.emocion(), R.palabra("Привыкнуть (me he acostumbrado, me acostumbro, adaptarme…)", ["acostumbrado", "acostumbrada", "acostumbrarme", "me acostumbro", "adaptado", "adaptada", "adaptarme", "integrado", "integrada", "integrarme"]), R.presente(4)] },
    { id: "planes", titulo: "Mis planes", sub: "Мои планы", intro: "Твои планы и мечты: в следующем году и потом. Используй futuro, condicional и cuando + subjuntivo.",
      requisitos: [R.frases(8, 14), R.futuro(3), R.palabra("Cuando + subjuntivo (cuando tenga, cuando pueda…)", ["cuando tenga", "cuando pueda", "cuando sea", "cuando termine", "cuando hable", "cuando viva", "cuando encuentre", "cuando vuelva", "cuando consiga"])] },
    { id: "opinion", titulo: "Mi opinión sobre España", sub: "Моё мнение об Испании", intro: "Что тебе нравится в Испании и что нет? Мнение, две причины и другая сторона (aunque, sin embargo).",
      requisitos: [R.palabras(100, 150), R.opinion(), R.razones(2), R.palabra("Другая сторона (sin embargo, aunque, por otro lado)", ["sin embargo", "aunque", "por otro lado", "en cambio"])] },
    { id: "entrevista", titulo: "Entrevista", sub: "Разговор с Хавьером", intro: "Хавьер задаёт семь вопросов о твоей жизни в Испании. Готовых ответов нет: отвечай как хочешь, тем, что знаешь." }
  ]);
}
window.ES13_TALLER = ES13_TALLER;
window.ES13_PROYECTO = ES13_PROYECTO;
window.ES13_CONSEJOS = ES13_CONSEJOS;

/* ── Profundización (desde el principio, regla del 13/11/2026) ───────────────
   Más a fondo que se suma a la teoría al cargar y los tipos de profundización de Azbuka. */
const ES13_MAS = {
  "es13-pluscuam": { titulo: "Había + participio всегда вместе", texto: "**había** и participio не разделяют: **Ya lo había hecho**, а не «Lo había ya hecho». Наречия **ya, nunca, todavía** ставят перед **había** или после всей формы: **Nunca había estado aquí. Había estado aquí antes.**", ejemplos: [{ es: "Todavía no había llegado nadie.", ru: "Ещё никто не пришёл." }] },
  "es13-pluscuam-uso": { titulo: "Antes de que llegara…", texto: "Порядок можно показать и словами: **antes de** + инфинитив (**Antes de salir, cerré la ventana**) или **después de** + инфинитив (**Después de cenar, salimos**). Тогда pluscuamperfecto не нужен — порядок уже понятен.", ejemplos: [{ es: "Después de comer, descansé un rato.", ru: "Пообедав, я немного отдохнул." }] },
  "es13-nunca-habia": { titulo: "Ya había… — уже успел", texto: "**ya había** + participio — «уже успел» к тому моменту: **A los veinte años ya había vivido en tres países.** — К двадцати годам он уже пожил в трёх странах.", ejemplos: [{ es: "A las ocho ya había terminado.", ru: "К восьми я уже закончил." }] },
  "es13-dice-que": { titulo: "Глаголы вместо decir", texto: "Чтобы не повторять **dice que**, испанцы говорят: **comenta que** (замечает), **cuenta que** (рассказывает), **explica que** (объясняет), **asegura que** (уверяет), **reconoce que** (признаёт), **menciona que** (упоминает). Здесь **reconocer** — «признавать» (второе значение; первое — «узнавать»).", ejemplos: [{ es: "Pablo reconoce que se equivocó.", ru: "Пабло признаёт, что ошибся." }] },
  "es13-pregunta-si": { titulo: "Quiere saber si…", texto: "Вместо **pregunta** часто говорят **quiere saber** (хочет знать): **Quiere saber si vienes.** А **no sé si…** — «не знаю, …ли»: **No sé si tengo tiempo.**", ejemplos: [{ es: "No sé si Ana viene a la fiesta.", ru: "Не знаю, придёт ли Аня на праздник." }] },
  "es13-pide-que": { titulo: "Dile que venga", texto: "Передать просьбу третьему человеку: **dile que** + subjuntivo — «скажи ему, чтобы…»: **Dile a Pablo que me llame.** — Скажи Пабло, чтобы он мне позвонил.", ejemplos: [{ es: "Dile que no se preocupe.", ru: "Скажи ему, чтобы не волновался." }] },
  "es13-dijo-que": { titulo: "Когда время не сдвигается", texto: "Если сказанное **до сих пор правда**, можно оставить настоящее: **Me dijo que es de Moscú** (он и сейчас оттуда). **Me dijo que estaba cansada** — о том моменте. Сдвиг — никогда не ошибка; отсутствие сдвига — не всегда.", ejemplos: [{ es: "Me dijo que la tierra es redonda.", ru: "Он сказал мне, что Земля круглая.", por: "Всегда правда — **es**." }] },
  "es13-palabras-tiempo": { titulo: "Venir → ir, traer → llevar", texto: "Если меняется место, меняются и глаголы движения: «Ven a mi casa» → **Me dijo que fuera a su casa**; «Trae el vino» → **Me pidió que llevara el vino**. Пока достаточно узнавать.", ejemplos: [{ es: "Me dijo que fuera a su casa.", ru: "Он сказал, чтобы я пришёл к нему домой." }] },
  "es13-pregunto-si": { titulo: "Me pidió que viniera", texto: "Просьба в прошлом: **me pidió que** + **imperfecto de subjuntivo**: **viniera, hiciera, fuera, llamara**. Эти формы ты пока только **узнаёшь**: они кончаются на **-ra** (**hablara, comiera**). В своей речи можно сказать **Me pidió venir** или передать дословно: **Me dijo: «Ven».**", ejemplos: [{ es: "Me pidió que la llamara.", ru: "Она попросила меня ей позвонить." }] },
  "es13-relato": { titulo: "Estaba + gerundio: «как раз делал»", texto: "Фон часто описывают через **estaba** + gerundio: **Estaba cocinando cuando sonó el teléfono.** — Я как раз готовил, когда зазвонил телефон. Длительное действие прерывается событием.", ejemplos: [{ es: "Estábamos cenando cuando llegó Pablo.", ru: "Мы как раз ужинали, когда пришёл Пабло." }] },
  "es13-conectores-relato": { titulo: "Echar una mano, echar un vistazo", texto: "**echar** — «бросать», но в выражениях смысл другой: **echar una mano** — помочь, **echar un vistazo** — взглянуть, **echar de menos** — скучать. Значение выражения не складывается из слов — учи его целиком.", ejemplos: [{ es: "¿Me echas una mano con la mudanza?", ru: "Поможешь мне с переездом?" }, { es: "Échale un vistazo a mi texto.", ru: "Взгляни на мой текст." }] },
  "es13-parrafos": { titulo: "Desde entonces · al cabo de", texto: "Для финала рассказа: **desde entonces** (с тех пор), **un mes después** (через месяц), **a partir de ese día** (с того дня). Они показывают, что история изменила твою жизнь.", ejemplos: [{ es: "A partir de ese día, nunca más llegué tarde.", ru: "С того дня я больше никогда не опаздывал." }] },
  "es13-ponerse": { titulo: "Ponerse, volverse, hacerse", texto: "Есть и другие глаголы «становиться»: **hacerse** — по своей воле, постепенно (**se hizo médico, se hizo rico**), **volverse** — сильная перемена характера (**se volvió muy serio**). **ponerse** — быстрая перемена, чувство или цвет. Пока достаточно узнавать.", ejemplos: [{ es: "Se hizo famoso con su primera novela.", ru: "Он стал знаменитым после первого романа." }] },
  "es13-me-da": { titulo: "Qué pena · qué vergüenza · qué miedo", texto: "Короткие восклицания: **¡Qué pena!** — Как жаль! **¡Qué vergüenza!** — Какой стыд! **¡Qué miedo!** — Как страшно! **¡Qué rabia!** — Как обидно! (злость).", ejemplos: [{ es: "¡Qué pena que no puedas venir!", ru: "Как жаль, что ты не можешь прийти!" }] },
  "es13-ganas": { titulo: "Ilusión — ложный друг", texto: "**la ilusión** почти никогда не «иллюзия». **Me hace ilusión** — мне очень радостно (это ждать). **¡Qué ilusión!** — Как здорово! (радостное ожидание).", ejemplos: [{ es: "¡Qué ilusión verte!", ru: "Как я рад тебя видеть!" }] },
  "es13-acostumbrarse": { titulo: "Llevar + время", texto: "Сколько ты уже где-то: **llevar** + время: **Llevo dos años en España.** — Я уже два года в Испании. **¿Cuánto tiempo llevas aquí?** Очень частый вопрос к иностранцам.", ejemplos: [{ es: "Llevo un año estudiando español.", ru: "Я уже год учу испанский." }] },
  "es13-choque": { titulo: "Sentirse como en casa", texto: "**sentirse como en casa** — чувствовать себя как дома. Хозяева говорят гостям: **¡Estás en tu casa!** — Будь как дома!", ejemplos: [{ es: "Por fin me siento como en casa.", ru: "Наконец я чувствую себя как дома." }] },
  "es13-fiestas": { titulo: "Feliz Navidad y próspero Año Nuevo", texto: "Поздравления: **¡Feliz Navidad!**, **¡Feliz Año Nuevo!**, **¡Felices fiestas!** В полночь 31 декабря друг другу говорят просто **¡Feliz año!**", ejemplos: [{ es: "¡Feliz año a todos!", ru: "С Новым годом всех!" }] },
  "es13-elegir-tiempo": { titulo: "Perfecto или indefinido в Испании", texto: "В Испании о том, что было **сегодня**, говорят perfecto: **Hoy he comido tortilla.** В Латинской Америке и на Канарах чаще indefinido: **Hoy comí tortilla.** В Abecé мы учим испанский вариант.", ejemplos: [{ es: "¿Qué has hecho hoy?", ru: "Что ты сегодня делал?" }] },
  "es13-pronombres": { titulo: "Lo в ответе: «да, это так»", texto: "**lo** заменяет целую мысль: **—¿Sabías que Ana se va? —Sí, lo sabía.** **—¿Estás cansado? —Sí, lo estoy.** По-русски здесь ничего не ставят.", ejemplos: [{ es: "—¿Es verdad? —No lo sé.", ru: "— Это правда? — Не знаю." }] },
  "es13-preposiciones": { titulo: "Soñar con, casarse con", texto: "Ещё глаголы со своим предлогом: **soñar con** (мечтать о), **casarse con** (жениться на, выйти замуж за), **contar con** (рассчитывать на), **quedar con** (договориться встретиться с).", ejemplos: [{ es: "Puedes contar conmigo.", ru: "Можешь на меня рассчитывать." }] }
};
/* [correcta, equivocadas, explicación, módulo, regla] */
const ES13_NAT = [
  ["Cuando llegué, ya se había ido.", ["Cuando llegué, ya se fue.", "Cuando llegaba, ya se va."], "Раньше другого прошлого — **pluscuamperfecto**.", 1, "es13-pluscuam-uso"],
  ["Nunca había visto tanta gente.", ["Nunca vi tanta gente antes ahora.", "Nunca había ver tanta gente."], "**nunca había visto**.", 1, "es13-nunca-habia"],
  ["Ana dice que está cansada.", ["Ana dice está cansada.", "Ana dice que estoy cansada."], "**que** + смена лица.", 2, "es13-dice-que"],
  ["Me pregunta si vienes.", ["Me pregunta que si vienes.", "Me pregunta si que vienes."], "Перед **si** — без **que**.", 2, "es13-pregunta-si"],
  ["Me dijo que vendría.", ["Me dijo que vendrá.", "Me dijo que venga ayer."], "**futuro → condicional**.", 3, "es13-dijo-que"],
  ["Era tarde y llovía.", ["Fue tarde y llovió.", "Ha sido tarde y llueve."], "Фон — **imperfecto**.", 4, "es13-relato"],
  ["Me pongo nervioso en los exámenes.", ["Estoy nervioso siempre en los exámenes.", "Me hago nervioso en los exámenes."], "Перемена — **ponerse**.", 5, "es13-ponerse"],
  ["Me dan miedo los aviones.", ["Me da miedo los aviones.", "Yo doy miedo de los aviones."], "Мн. ч. — **dan**.", 5, "es13-me-da"],
  ["Echo de menos a mi familia.", ["Echo de menos mi familia.", "Echo menos a mi familia."], "О человеке — **a**.", 6, "es13-acostumbrarse"],
  ["Me he acostumbrado a cenar tarde.", ["Me he acostumbrado cenar tarde.", "Me he acostumbrado de cenar tarde."], "**acostumbrarse a**.", 6, "es13-acostumbrarse"],
  ["Cuando tenga tiempo, te llamo.", ["Cuando tendré tiempo, te llamo.", "Cuando tengo tiempo mañana, te llamo."], "**cuando** о будущем — **subjuntivo**.", 9, "es13-elegir-tiempo"],
  ["Me di cuenta de que era tarde.", ["Me di cuenta que era tarde.", "Me di cuenta en que era tarde."], "**darse cuenta de que**.", 10, "es13-preposiciones"]
];
/* [frase, pregunta, correcta, otras, explicación, módulo, regla] */
const ES13_POR = [
  ["Cuando llegué, ya había salido.", "Почему «había salido»?", "Он ушёл раньше, чем я пришёл", ["Он уходит сейчас", "Это будущее"], "Раньше другого прошлого — **pluscuamperfecto**.", 1, "es13-pluscuam-uso"],
  ["Dijo que estaba cansada.", "Почему «estaba», а не «está»?", "После «dijo» время сдвигается назад", ["Она устала давно", "Это ошибка"], "**presente → imperfecto**.", 3, "es13-dijo-que"],
  ["Me pide que venga.", "Почему «venga»?", "Это просьба: que + subjuntivo", ["Это прошлое", "Это вопрос"], "Просьба — **subjuntivo**.", 2, "es13-pide-que"],
  ["Me pongo nervioso.", "Почему «me pongo», а не «estoy»?", "Это перемена: «становлюсь»", ["Это постоянная черта", "Это прошлое"], "**ponerse** — становиться.", 5, "es13-ponerse"],
  ["Me dan miedo los perros.", "Почему «dan»?", "«Los perros» — мн. ч.", ["Я их боюсь много", "Это ошибка"], "Как **gustan**.", 5, "es13-me-da"],
  ["Echo de menos a Ana.", "Почему «a»?", "Ana — человек", ["Это направление", "Это ошибка"], "Перед человеком — **a**.", 6, "es13-acostumbrarse"]
];
/* [audio, pregunta, correcta, opciones, explicación, módulo, regla] */
const ES13_OIDO = [
  ["Cuando llegué, se fue.", "Когда он ушёл?", "Когда я пришёл", ["Когда я пришёл", "Ещё до того, как я пришёл"], "**se fue** — после моего прихода.", 1, "es13-pluscuam-uso"],
  ["Cuando llegué, ya se había ido.", "Когда он ушёл?", "Ещё до того, как я пришёл", ["Когда я пришёл", "Ещё до того, как я пришёл"], "**se había ido** — раньше.", 1, "es13-pluscuam-uso"],
  ["Dice que vengas.", "Что это?", "Просьба", ["Просьба", "Сообщение"], "**vengas** — subjuntivo: просьба.", 2, "es13-pide-que"],
  ["Dice que vienes.", "Что это?", "Сообщение", ["Просьба", "Сообщение"], "**vienes** — сообщение.", 2, "es13-pide-que"],
  ["Me puse rojo.", "Что с ним случилось?", "Он покраснел", ["Он покраснел", "Он надел красное"], "**ponerse rojo** — покраснеть.", 5, "es13-ponerse"],
  ["Me puse el jersey rojo.", "Что с ним случилось?", "Он надел красное", ["Он покраснел", "Он надел красное"], "**ponerse el jersey** — надеть.", 5, "es13-ponerse"]
];
/* [situación, correcta, otra, explicación, módulo, regla] */
const ES13_PAR = [
  ["Поезд ушёл до того, как ты пришёл.", "Cuando llegué, el tren ya había salido.", "Cuando llegué, el tren ya salió.", "Раньше — **había salido**.", 1, "es13-pluscuam-uso"],
  ["Ты передаёшь вчерашние слова Пабло: «Llamaré».", "Pablo dijo que llamaría.", "Pablo dijo que llamará ayer.", "**futuro → condicional**.", 3, "es13-dijo-que"],
  ["Ты всегда краснеешь, когда говоришь по-испански.", "Me pongo rojo cuando hablo español.", "Estoy rojo cuando hablo español.", "Перемена — **ponerse**.", 5, "es13-ponerse"],
  ["Ты боишься самолётов.", "Me dan miedo los aviones.", "Me da miedo los aviones.", "Мн. ч. — **dan**.", 5, "es13-me-da"],
  ["Ты скучаешь по маме.", "Echo de menos a mi madre.", "Echo de menos mi madre.", "О человеке — **a**.", 6, "es13-acostumbrarse"],
  ["Ты позвонишь, когда приедешь.", "Te llamo cuando llegue.", "Te llamo cuando llegaré.", "**cuando** — subjuntivo.", 9, "es13-elegir-tiempo"]
];
/* [pregunta, correcta, otras, explicación, módulo, regla] */
const ES13_DESC = [
  ["he comido → había comido · he visto → había visto. А he hecho?", "había hecho", ["había hacido", "hubo hecho"], "**hacer → hecho**.", 1, "es13-pluscuam"],
  ["«Estoy» → dijo que estaba · «Tengo» → dijo que tenía. А «Puedo»?", "dijo que podía", ["dijo que pudo", "dijo que podrá"], "**presente → imperfecto**.", 3, "es13-dijo-que"],
  ["«Iré» → dijo que iría · «Vendré» → dijo que vendría. А «Haré»?", "dijo que haría", ["dijo que hará", "dijo que hacía"], "**futuro → condicional**.", 3, "es13-dijo-que"],
  ["hoy → aquel día · ayer → el día anterior. А mañana?", "al día siguiente", ["el día siguiente anterior", "mañana mismo"], "**mañana → al día siguiente**.", 3, "es13-palabras-tiempo"],
  ["triste → la tristeza · alegre → la alegría. А feliz?", "la felicidad", ["la feliz", "el feliz"], "**feliz → la felicidad**.", 5, "es13-me-da"],
  ["me da miedo el perro · me dan miedo los perros. А la oscuridad?", "me da miedo la oscuridad", ["me dan miedo la oscuridad", "me doy miedo la oscuridad"], "Ед. ч. — **da**.", 5, "es13-me-da"]
];
/* [frase base, pasos [[consigna, esperada]], módulo, regla] */
const ES13_CAD = [
  ["Ana: «Estoy cansada.»", [["Передай в настоящем: Ana dice que…", "Ana dice que está cansada."], ["Теперь в прошлом: Ana dijo que…", "Ana dijo que estaba cansada."]], 3, "es13-dijo-que"],
  ["Pablo: «Iré mañana.»", [["Передай в настоящем: Pablo dice que…", "Pablo dice que irá mañana."], ["Теперь в прошлом, через неделю: Pablo dijo que…", "Pablo dijo que iría al día siguiente."]], 3, "es13-palabras-tiempo"],
  ["Llegué. Ana se fue.", [["Скажи, что Аня ушла после тебя: Cuando llegué, Ana…", "Cuando llegué, Ana se fue."], ["Теперь — что она ушла раньше: …ya…", "Cuando llegué, Ana ya se había ido."]], 1, "es13-pluscuam-uso"],
  ["Estoy nervioso.", [["Скажи, что так бывает всегда перед экзаменами: Siempre…", "Siempre me pongo nervioso antes de los exámenes."], ["Теперь о прошлом разе: Ayer…", "Ayer me puse nervioso antes del examen."]], 5, "es13-ponerse"]
];
/* [frase con error, explicación correcta, otras, frase corregida, módulo, regla] */
const ES13_DIAG = [
  ["Cuando llegué, ya salió.", "То, что было раньше, — в pluscuamperfecto", ["Нужен imperfecto", "Нужно убрать ya"], "Cuando llegué, ya había salido.", 1, "es13-pluscuam-uso"],
  ["Me dijo que vendrá.", "После dijo будущее становится condicional", ["Нужен subjuntivo", "Нужно убрать que"], "Me dijo que vendría.", 3, "es13-dijo-que"],
  ["Me preguntó que si venía.", "Перед si не ставят que", ["Нужен subjuntivo", "Нужно qué"], "Me preguntó si venía.", 3, "es13-pregunto-si"],
  ["Me da miedo los perros.", "Los perros — мн. ч.: dan", ["Нужно estar", "Нужно de"], "Me dan miedo los perros.", 5, "es13-me-da"],
  ["Echo de menos mi madre.", "Перед человеком нужна a", ["Нужно la madre", "Нужно echo menos"], "Echo de menos a mi madre.", 6, "es13-acostumbrarse"],
  ["Me he dado cuenta que es tarde.", "Darse cuenta de que", ["Нужен subjuntivo", "Нужно me di"], "Me he dado cuenta de que es tarde.", 10, "es13-preposiciones"]
];
/* [frase, preguntas [[qué, índice]], módulo, regla] */
const ES13_DES = [
  ["Cuando llegué ya se había ido", [["Какое слово — событие в прошлом?", 1], ["Какое слово — haber?", 5]], 1, "es13-pluscuam-uso"],
  ["Ana dijo que estaba cansada", [["Какое слово сдвинулось назад во времени?", 3], ["Какой глагол передаёт чужие слова?", 1]], 3, "es13-dijo-que"],
  ["Me dan miedo los perros grandes", [["Какой глагол согласуется с «los perros»?", 1], ["Какое слово значит «мне»?", 0]], 5, "es13-me-da"]
];
/* Formas generadas: «Yo + presente» en estilo indirecto — [quién, infinitivo, resto] */
const ES13_IND_GEN = [
  ["Ana", "estar", "cansada"], ["Pablo", "tener", "hambre"], ["Lucía", "vivir", "en Valencia"], ["Javier", "trabajar", "mucho"], ["Marta", "querer", "un café"],
  ["Ana", "necesitar", "ayuda"], ["Pablo", "buscar", "trabajo"], ["Lucía", "hablar", "tres idiomas"], ["Javier", "saber", "la respuesta"], ["Marta", "poder", "venir"],
  ["Ana", "echar", "de menos a su familia"], ["Pablo", "ser", "de Sevilla"], ["Lucía", "estudiar", "derecho"], ["Javier", "conocer", "a mi hermano"]
];

function es13Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES13-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES13_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES13_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES13_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oid-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES13_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES13_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("dsc-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES13_CAD.forEach(([base, pasos, mod, regla], i) => P("cdn-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES13_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES13_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* Formas generadas: «Ana: “Estoy cansada.”» → «Ana dijo que estaba cansada.» */
  ES13_IND_GEN.forEach(([quien, inf, resto], i) => {
    const yo = es13Pres(inf, 0), im = es13Imperf(inf, 2); if (!yo || !im) return;
    const ok = quien + " dijo que " + im + " " + resto + ".";
    P("ig-" + i, "indirecto", "escribir", 3, "es13-dijo-que", { dificultad: 3, grupo: "ig-" + inf, lex: lex(inf), pide: "Передай в прошлом: " + quien + " dijo que…",
      grande: quien + ": «" + es13Mayus(yo + " " + resto) + ".»", esperadas: [ok], idioma: "es", foco: true, formaCasi: false, oir: ok,
      explicacion: "**" + yo + "** → **" + im + "**: " + ok });
  });
}
UNIDAD_ES_13.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES13_MAS[s.id] && !s.mas) s.mas = ES13_MAS[s.id]; }));
