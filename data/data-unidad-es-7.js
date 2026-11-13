/* ============================================================
   DATA-UNIDAD-ES-7.JS — Abecé · Урок 7: Общение и отношения
   (Conversar y relacionarse). Completa (12/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U7;
   propuesta aprobada por Manu el 12/11/2026: claude/PROPUESTA_U7_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-6.js (ver su cabecera). Las formas de los
   verbos salen de data-verbos-es.js (es7Pres).
   Decisiones de Manu (12/11/2026): chat entra al léxico (finde, en la
   ampliación); las fórmulas sociales (¡felicidades!, no pasa nada, un beso…)
   no son entradas del léxico: se enseñan como frases (FRE-114 a FRE-130); el superlativo (el más…, el mejor) va en
   «Más a fondo» del módulo 6; «¿Te apetece…?» se presenta como fórmula en
   el módulo 1 y se explica en el 4; Marta hace el diálogo de los vecinos.
   Proyecto (módulo 11): conversaciones por turnos (ES7_TURNOS, la primera
   como chat) corregidas por intención con azSituacionEs, y el texto.
   ============================================================ */

const ES7_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES7_SE = ["me", "te", "se", "nos", "os", "se"];
function es7Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  return v ? (v.base ? Object.assign({ se: true }, VERBOS_ES[v.base]) : v) : null;
}
function es7Pres(inf, p) {
  const v = es7Verbo(inf); if (!v || !v.pres || !v.pres[p]) return "";
  return (v.se ? ES7_SE[p] + " " : "") + v.pres[p];
}
const es7Tabla = (inf, resto) => ES7_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es7Pres(inf, i) + (resto ? " " + resto : "") }]);

const UNIDAD_ES_7 = {
  id: 7,
  titulo: "Общение и отношения",
  tituloEs: "Conversar y relacionarse",
  objetivo: "Предложить встречу, согласиться или отказаться, сказать, что тебе интересно и что мешает, согласиться или не согласиться с мнением, сравнить и написать приглашение.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es7m1", n: 1, tipo: "leccion",
      titulo: "¿Quedamos?",
      resumen: "Предложить встречу: quedar, ¿te apetece…?, invitar; libre и ocupado; conmigo, contigo.",
      intro: "Чтобы встретиться с друзьями, в Испании говорят **quedar**: **¿Quedamos?** — «встретимся?». В этом модуле — как предложить план, пригласить и сказать, свободен ли ты.",
      tablas: [
        { titulo: "Proponer un plan", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "¿Quedamos?", ru: "Встретимся?" }, { es: "¿Quedamos el viernes?", ru: "Встретимся в пятницу?" }],
          [{ es: "¿Te apetece ir al cine?", ru: "Хочешь пойти в кино?" }, { es: "¿Vamos a la playa?", ru: "Пойдём на пляж?" }],
          [{ es: "¿Por qué no vamos al museo?", ru: "Почему бы нам не пойти в музей?" }, { es: "¿Vienes conmigo?", ru: "Пойдёшь со мной?" }]] },
        { titulo: "Quedar", encabezados: ["Кто", "Форма"], filas: es7Tabla("quedar") }
      ],
      secciones: [
        {
          id: "es7-quedar",
          titulo: "Quedar — договориться о встрече",
          texto: "**quedar** — встретиться, договориться о встрече: **¿Quedamos mañana?** С кем — **quedar con**: **Quedo con Lucía a las siete**. Где и когда — как обычно: **Quedamos en la plaza a las ocho**.\n**quedarse** (с **se**) — другое слово: «остаться»: **Me quedo en casa** — я остаюсь дома.\nПредложить план — **proponer un plan**; у **proponer** форма **yo** — **propongo** (как **pongo**).",
          ejemplos: [
            { es: "¿Quedamos el sábado por la tarde?", ru: "Встретимся в субботу днём?" },
            { es: "Hoy quedo con mis amigos.", ru: "Сегодня я встречаюсь с друзьями." },
            { es: "Hoy me quedo en casa.", ru: "Сегодня я остаюсь дома." }
          ],
          errores: [
            { mal: "Me quedo con Lucía a las siete. (встречаюсь)", bien: "Quedo con Lucía a las siete.", por: "Встретиться — **quedar**, без **se**. **quedarse** — «остаться»." }
          ],
          chequeo: [
            { pide: "¿___ a las ocho en la plaza?", opciones: ["Quedamos", "Nos quedamos", "Estamos"], ok: "Quedamos", por: "Договориться о встрече — **quedar**: **¿Quedamos…?**" }
          ]
        },
        {
          id: "es7-proponer",
          titulo: "¿Te apetece…? ¿Vamos…?",
          texto: "Предложить план можно по-разному:\n· **¿Quedamos…?** — встретимся?\n· **¿Vamos a…?** — пойдём? (урок 6): **¿Vamos al cine?**\n· **¿Te apetece…?** + инфинитив — «тебе хочется…?», «не хочешь…?»: **¿Te apetece ir a la playa?** Это мягкий и очень частый вопрос. Как он устроен, разберём в модуле 4 — пока запомни его целиком.\n· **¿Por qué no…?** — «почему бы не…?»: **¿Por qué no vamos al museo?**",
          ejemplos: [
            { es: "¿Te apetece tomar algo?", ru: "Хочешь чего-нибудь выпить? (зайти в бар)" },
            { es: "¿Por qué no cenamos en casa?", ru: "Почему бы нам не поужинать дома?" }
          ],
          chequeo: [
            { pide: "¿Te ___ ir al cine?", opciones: ["apetece", "quedas", "vamos"], ok: "apetece", por: "Предложение — **¿Te apetece…?**" }
          ]
        },
        {
          id: "es7-invitar",
          titulo: "Invitar a…",
          texto: "**invitar a** + кого / куда: **Te invito a mi cumpleaños** — приглашаю тебя на день рождения. **Te invito** значит ещё и «я угощаю»: **Hoy te invito yo** — сегодня плачу я.\nПриглашение — **la invitación**; день рождения — **el cumpleaños** (в ед. и мн. ч. одинаково: **los cumpleaños**).",
          ejemplos: [
            { es: "Te invito a cenar.", ru: "Приглашаю тебя на ужин (я угощаю)." },
            { es: "Pablo nos invita a su casa.", ru: "Пабло приглашает нас к себе домой." }
          ]
        },
        {
          id: "es7-libre",
          titulo: "Estoy libre; conmigo, contigo",
          texto: "Свободен ли ты — с **estar** (состояние, урок 3): **¿Estás libre el sábado?** — **No, estoy ocupado / ocupada**.\n«Со мной» и «с тобой» — одним словом: **conmigo**, **contigo**: **¿Vienes conmigo?** — **Sí, voy contigo**. С остальными — обычно: **con él**, **con ella**, **con nosotros**.",
          errores: [
            { mal: "¿Vienes con mí?", bien: "¿Vienes conmigo?", por: "«Со мной» — одно слово: **conmigo**." }
          ],
          chequeo: [
            { pide: "¿Vienes ___ al concierto?", opciones: ["conmigo", "con mí", "con yo"], ok: "conmigo", por: "«Со мной» — **conmigo**." }
          ]
        }
      ],
      frases: ["FRE-114", "FRE-115", "FRE-116"],
      dialogos: ["DLE-030"],
      vocab: ["quedar", "quedarse", "proponer", "plan", "invitar", "invitación", "cumpleaños", "libre", "conmigo", "contigo"],
      ampliacion: {
        titulo: "Ещё о планах",
        intro: "Ещё несколько слов для планов. Они не входят в проверку урока. **el finde** — разговорное «выходные» (от **fin de semana**): **¿Qué haces este finde?**",
        vocab: ["finde", "exposición", "partido", "piscina"]
      }
    },
    {
      id: "es7m2", n: 2, tipo: "leccion",
      titulo: "Vale / Lo siento, no puedo",
      resumen: "Согласиться, отказаться, засомневаться и перенести план.",
      intro: "На приглашение отвечают «да», «нет» или «может быть». Отказ в Испании обычно звучит мягко: с извинением и причиной.",
      tablas: [
        { titulo: "Sí", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Vale.", ru: "Ладно, хорошо." }, { es: "¡Genial!", ru: "Отлично!" }],
          [{ es: "¡Perfecto!", ru: "Прекрасно!" }, { es: "¡Estupendo!", ru: "Замечательно!" }],
          [{ es: "Por supuesto.", ru: "Конечно." }, { es: "Me parece bien.", ru: "Меня устраивает." }]] },
        { titulo: "No", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Lo siento, no puedo.", ru: "Извини, не могу." }, { es: "No puedo: tengo que trabajar.", ru: "Не могу: мне надо работать." }],
          [{ es: "¡Qué pena! / ¡Qué lástima!", ru: "Как жаль!" }, { es: "Otro día.", ru: "В другой раз." }]] },
        { titulo: "Quizá", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Quizá.", ru: "Может быть." }, { es: "A lo mejor.", ru: "Может быть (разговорное)." }],
          [{ es: "¿Y mejor el sábado?", ru: "А может, лучше в субботу?" }, { es: "Te aviso.", ru: "Я тебе сообщу." }]] }
      ],
      secciones: [
        {
          id: "es7-aceptar",
          titulo: "Vale, genial, por supuesto",
          texto: "Согласиться: **vale** (самое частое в Испании), **genial**, **perfecto**, **estupendo**, **por supuesto** — «конечно». О плане — **Me parece bien** («меня устраивает»).\nНа приглашение часто отвечают с **claro**: **¡Claro que sí!**",
          ejemplos: [
            { es: "—¿Quedamos a las ocho? —¡Perfecto!", ru: "— Встретимся в восемь? — Отлично!" },
            { es: "—¿Vienes a mi cumpleaños? —¡Claro que sí!", ru: "— Придёшь на мой день рождения? — Конечно!" }
          ]
        },
        {
          id: "es7-rechazar",
          titulo: "Lo siento, no puedo",
          texto: "Отказаться вежливо: **Lo siento, no puedo** + причина: **tengo que trabajar**, **tengo clase**, **estoy ocupado**. Без причины отказ звучит резко.\nТот, кто приглашал, отвечает: **¡Qué pena!** или **¡Qué lástima!** — «как жаль!». А если человек немного опаздывает или меняет план — **No pasa nada** («ничего страшного») или **No hay problema** («без проблем»).",
          truco: "**¡Qué pena!** здесь — не «горе», а просто «жаль».",
          ejemplos: [
            { es: "—¿Vienes al cine? —Lo siento, no puedo: tengo que estudiar.", ru: "— Пойдёшь в кино? — Извини, не могу: мне надо заниматься." }
          ],
          chequeo: [
            { pide: "—¿Vienes? —Lo siento, no ___: tengo clase.", opciones: ["puedo", "puede", "poder"], ok: "puedo", por: "О себе — **no puedo**." }
          ]
        },
        {
          id: "es7-cambiar",
          titulo: "¿Y mejor el sábado?",
          texto: "Перенести план: **¿Y mejor el sábado?** — «а может, лучше в субботу?»; **mejor** здесь — «лучше». Или **otro día** — «в другой раз».\nЕсли не уверен: **quizá** или **a lo mejor** — «может быть». После них — обычный глагол: **A lo mejor voy**.\nПредупредить, сообщить — **avisar**: **Te aviso mañana** — я тебе завтра скажу.",
          ejemplos: [
            { es: "—¿Vienes el domingo? —A lo mejor. Te aviso.", ru: "— Придёшь в воскресенье? — Может быть. Я тебе сообщу." }
          ],
          chequeo: [
            { pide: "El viernes no puedo. ¿Y ___ el sábado?", opciones: ["mejor", "bueno", "más"], ok: "mejor", por: "«Лучше» — **mejor**." }
          ]
        }
      ],
      frases: ["FRE-117", "FRE-118", "FRE-119", "FRE-120", "FRE-130"],
      vocab: ["genial", "perfecto", "estupendo", "por supuesto", "problema", "pena", "lástima", "otro", "quizá", "a lo mejor", "mejor·adv", "avisar"]
    },
    {
      id: "es7m3", n: 3, tipo: "leccion",
      titulo: "Le escribo, les explico",
      resumen: "Кому: me, te, le, nos, os, les; dar, regalar, explicar, preguntar.",
      intro: "В уроке 5 ты выучил **lo, la, los, las** — кого? что? Теперь — **кому?**: **me, te, le, nos, os, les**. **Le escribo** — я пишу ему (ей, вам).",
      tablas: [
        { titulo: "¿A quién? — кому?", encabezados: ["Кому", "Местоимение"], filas: [
          [{ es: "a mí", ru: "мне" }, { es: "me" }],
          [{ es: "a ti", ru: "тебе" }, { es: "te" }],
          [{ es: "a él, a ella, a usted", ru: "ему, ей, вам (вежливо)" }, { es: "le" }],
          [{ es: "a nosotros", ru: "нам" }, { es: "nos" }],
          [{ es: "a vosotros", ru: "вам (неформально)" }, { es: "os" }],
          [{ es: "a ellos, a ellas, a ustedes", ru: "им, вам (вежливо)" }, { es: "les" }]] },
        { titulo: "Verbos con «a quién»", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Le doy un regalo.", ru: "Я дарю (даю) ему подарок." }, { es: "Te escribo un mensaje.", ru: "Я пишу тебе сообщение." }],
          [{ es: "Nos explica el plan.", ru: "Он объясняет нам план." }, { es: "Les pregunto la hora.", ru: "Я спрашиваю у них время." }],
          [{ es: "¿Me prestas el libro?", ru: "Одолжишь мне книгу?" }, { es: "Te enseño mi piso.", ru: "Я покажу тебе свою квартиру." }],
          [{ es: "Le cuento todo.", ru: "Я ему всё рассказываю." }, { es: "Le regalo un libro.", ru: "Я дарю ему книгу." }]] }
      ],
      secciones: [
        {
          id: "es7-oi",
          titulo: "Me, te, le, nos, os, les — кому",
          texto: "Когда действие направлено **кому-то** (дать, сказать, написать, подарить), испанский ставит перед глаголом короткое местоимение: **me, te, le, nos, os, les**.\n· **Te escribo mañana** — напишу тебе завтра;\n· **Le doy el libro** — я даю ему (ей) книгу;\n· **Les explico el plan** — я объясняю им план.\nМесто — как у **lo, la** (урок 5): перед глаголом, а с инфинитивом — можно в конце, одним словом: **Voy a escribirte**.\nУ **dar** форма **yo** — **doy**; у **contar** корень меняется: **cuento**.",
          comparacion: "Как русский дательный падеж: **кому?** — **me** (мне), **te** (тебе), **le** (ему, ей, вам), **les** (им).",
          ejemplos: [
            { es: "¿Me das tu número?", ru: "Дашь мне свой номер?" },
            { es: "Te mando una foto.", ru: "Я пришлю тебе фото." },
            { es: "Voy a escribirte mañana.", ru: "Я напишу тебе завтра." }
          ],
          chequeo: [
            { pide: "A mis amigos ___ escribo un mensaje.", opciones: ["les", "los", "nos"], ok: "les", por: "Кому — **les** (им)." }
          ]
        },
        {
          id: "es7-le-lo",
          titulo: "Le или lo?",
          texto: "**lo, la, los, las** — кого? что?: **Lo compro** — я это покупаю.\n**le, les** — кому?: **Le compro un regalo** — я покупаю ему подарок.\nПроверка: если по-русски «ему, ей, им» — **le, les**; если «его, её, их» — **lo, la, los, las**.",
          errores: [
            { mal: "Lo escribo un mensaje a Ana.", bien: "Le escribo un mensaje a Ana.", por: "Кому — **le**." },
            { mal: "¿El libro? Le compro mañana.", bien: "¿El libro? Lo compro mañana.", por: "Что? — **lo**." }
          ],
          mas: {
            titulo: "Le о мужчине",
            texto: "В Испании о мужчине часто говорят **le** и в значении «его»: **Le veo mañana** — я увижу его завтра. Так говорят многие, и о человеке-мужчине это допустимо. Сам пользуйся правилом выше: «кому» — **le**, «кого, что» — **lo, la**."
          }
        },
        {
          id: "es7-a-ana-le",
          titulo: "A Ana le…",
          texto: "Часто испанский называет «кому» дважды: местоимением и словами: **A Ana le regalo un libro**, **Les escribo a mis padres**. Это нормально и не считается повтором. Местоимение при этом нужно всегда, а **a Ana** можно опустить: **Le regalo un libro**.\n**le** — и «ему», и «ей», и «вам (usted)»: если непонятно кому, добавляют **a él**, **a ella**, **a usted**.",
          errores: [
            { mal: "A Ana regalo un libro.", bien: "A Ana le regalo un libro.", por: "С **a Ana** нужно и **le**." }
          ],
          chequeo: [
            { pide: "A mi madre ___ compro un regalo.", opciones: ["le", "la", "lo"], ok: "le", por: "Кому — **le**." }
          ]
        }
      ],
      vocab: ["le", "les", "dar", "regalar", "regalo", "contar", "explicar", "preguntar", "prestar", "enseñar"]
    },
    {
      id: "es7m4", n: 4, tipo: "leccion",
      titulo: "Me interesa, me parece…",
      resumen: "Глаголы как gustar: interesar, parecer, importar, molestar, apetecer, caer bien.",
      intro: "В уроке 4 был **gustar**: **me gusta el café** — нравится **кофе**, а **me** — кому. Так же устроены и другие частые глаголы: что-то интересует, мешает, кажется, хочется.",
      tablas: [
        { titulo: "Como gustar", encabezados: ["Кому", "Пример"], filas: [
          [{ es: "(a mí) me", ru: "мне, меня" }, { es: "Me interesa la música.", ru: "Меня интересует музыка." }],
          [{ es: "(a ti) te", ru: "тебе, тебя" }, { es: "¿Te molesta la música?", ru: "Тебе мешает музыка?" }],
          [{ es: "(a él, a ella, a usted) le", ru: "ему, ей, вам" }, { es: "Le parece bien.", ru: "Его (её) это устраивает." }],
          [{ es: "(a nosotros) nos", ru: "нам, нас" }, { es: "Nos encanta el mar.", ru: "Мы обожаем море." }],
          [{ es: "(a vosotros) os", ru: "вам, вас" }, { es: "¿Os apetece un café?", ru: "Хотите кофе?" }],
          [{ es: "(a ellos, a ellas) les", ru: "им, их" }, { es: "Les importa mucho.", ru: "Для них это очень важно." }]] },
        { titulo: "Los verbos", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "interesar", ru: "интересовать" }, { es: "parecer", ru: "казаться" }],
          [{ es: "importar", ru: "быть важным" }, { es: "molestar", ru: "мешать, раздражать" }],
          [{ es: "apetecer", ru: "хотеться" }, { es: "caer bien / mal", ru: "нравиться / не нравиться (о человеке)" }],
          [{ es: "preocupar", ru: "беспокоить, тревожить" }, { es: "doler", ru: "болеть (урок 6)" }]] }
      ],
      secciones: [
        {
          id: "es7-como-gustar",
          titulo: "Me interesa, me interesan",
          texto: "Глагол согласуется **не с человеком, а с тем, что интересует, мешает, кажется**:\n· одно — **interesa**, **molesta**, **parece**: **Me interesa la música**;\n· несколько — **interesan**, **molestan**, **parecen**: **Me interesan los idiomas**;\n· инфинитив — как одно: **Me interesa viajar**.",
          ejemplos: [
            { es: "¿Te molesta la música?", ru: "Тебе мешает музыка?" },
            { es: "Nos interesan mucho los museos.", ru: "Нас очень интересуют музеи." }
          ],
          errores: [
            { mal: "Yo intereso la música.", bien: "Me interesa la música.", por: "Как **gustar**: **me interesa**." },
            { mal: "Me interesa los idiomas.", bien: "Me interesan los idiomas.", por: "**los idiomas** — мн. ч.: **interesan**." }
          ],
          chequeo: [
            { pide: "Me ___ mucho los coches.", opciones: ["interesan", "interesa", "intereso"], ok: "interesan", por: "**los coches** — мн. ч.: **interesan**." }
          ]
        },
        {
          id: "es7-parecer",
          titulo: "¿Qué te parece?",
          texto: "**parecer** — «казаться»: **¿Qué te parece Barcelona?** — «как тебе Барселона?», «что ты думаешь о…?». Ответ: **Me parece muy bonita**, **Me parece bien** («меня устраивает»), **Me parece caro** («по-моему, дорого»).\nПрилагательное согласуется с тем, о чём говорят: **la ciudad me parece bonita**, **los pisos me parecen caros**.",
          ejemplos: [
            { es: "—¿Qué te parece el plan? —Me parece genial.", ru: "— Как тебе план? — По-моему, отлично." }
          ]
        },
        {
          id: "es7-caer-apetecer",
          titulo: "Me cae bien, me apetece, me importa",
          texto: "**caer bien / mal** — о людях: «нравиться / не нравиться как человек»: **Tu hermano me cae muy bien**. О вещах так не говорят — там **gustar**.\n**apetecer** — «хотеться (сейчас)»: **¿Te apetece un café?** — хочешь кофе? **No me apetece salir** — мне не хочется выходить.\n**importar** — «быть важным»: **Me importa mucho mi familia**; **No me importa** — мне всё равно.\n**preocupar** — «беспокоить, тревожить»: **Me preocupa el examen**.\n**doler** ты уже знаешь (урок 6): **Me duele la cabeza**.",
          ejemplos: [
            { es: "Marta me cae muy bien.", ru: "Марта мне очень нравится." },
            { es: "Hoy no me apetece cocinar.", ru: "Сегодня мне не хочется готовить." }
          ],
          chequeo: [
            { pide: "Tu amiga me ___ muy bien.", opciones: ["cae", "llevo", "interesa"], ok: "cae", por: "О человеке — **me cae bien**." }
          ]
        },
        {
          id: "es7-a-mi-me",
          titulo: "A mí me, a ellos les",
          texto: "Чтобы подчеркнуть, кому, добавляют **a mí**, **a ti**, **a él**, **a ella**, **a nosotros**, **a ellos**: **A mí me encanta el mar. ¿Y a ti?** После **a** — **mí** и **ti** (не «yo», не «tú»).\nС именем — всегда и местоимение: **A Juan le gusta el fútbol**, **A mis padres les interesa la música**.",
          errores: [
            { mal: "A Juan gusta el fútbol.", bien: "A Juan le gusta el fútbol.", por: "Местоимение нужно: **a Juan le**." },
            { mal: "A yo me gusta.", bien: "A mí me gusta.", por: "После **a** — **mí**." }
          ],
          chequeo: [
            { pide: "A mis padres ___ encanta viajar.", opciones: ["les", "le", "se"], ok: "les", por: "**mis padres** — мн. ч.: **les**." }
          ]
        }
      ],
      frases: ["FRE-125", "FRE-126"],
      dialogos: ["DLE-032"],
      vocab: ["interesar", "parecer", "importar", "molestar", "apetecer", "caer", "preocupar", "interesante", "gracioso", "ti"],
      ampliacion: {
        titulo: "Ещё о чувствах",
        intro: "Ещё два глагола. Они не входят в проверку урока. Это глаголы с **se**, как **levantarse**: **Me divierto mucho en las fiestas** — мне очень весело на вечеринках; **Me aburro en casa** — мне скучно дома.",
        vocab: ["divertirse", "aburrirse"]
      }
    },
    {
      id: "es7m5", n: 5, tipo: "leccion",
      titulo: "Yo también, a mí tampoco",
      resumen: "Согласие и несогласие; мнение: creo que, tienes razón, estoy de acuerdo.",
      intro: "Чтобы поддержать разговор, нужно уметь сказать «я тоже», «я нет», «ты прав». В испанском ответ зависит от того, была ли фраза с **no** и был ли это глагол как **gustar**.",
      tablas: [
        { titulo: "Con verbos normales", encabezados: ["Фраза", "Ответ"], filas: [
          [{ es: "Vivo en Barcelona.", ru: "Я живу в Барселоне." }, { es: "Yo también. / Yo no.", ru: "Я тоже. / А я нет." }],
          [{ es: "No tengo coche.", ru: "У меня нет машины." }, { es: "Yo tampoco. / Yo sí.", ru: "У меня тоже нет. / А у меня есть." }]] },
        { titulo: "Con verbos como gustar", encabezados: ["Фраза", "Ответ"], filas: [
          [{ es: "Me gusta el café.", ru: "Мне нравится кофе." }, { es: "A mí también. / A mí no.", ru: "Мне тоже. / А мне нет." }],
          [{ es: "No me gusta el fútbol.", ru: "Мне не нравится футбол." }, { es: "A mí tampoco. / A mí sí.", ru: "Мне тоже нет. / А мне нравится." }]] }
      ],
      secciones: [
        {
          id: "es7-tambien-tampoco",
          titulo: "También и tampoco",
          texto: "Согласие:\n· с утвердительной фразой — **también** («тоже»): **Yo también**;\n· с отрицательной — **tampoco** («тоже не»): **Yo tampoco**.\nНесогласие — наоборот: **Yo no** (на утвердительную), **Yo sí** (на отрицательную).\nНе говорят «también no»: «тоже не» — одно слово, **tampoco**.",
          ejemplos: [
            { es: "—Trabajo los sábados. —Yo también.", ru: "— Я работаю по субботам. — Я тоже." },
            { es: "—No hablo inglés. —Yo sí.", ru: "— Я не говорю по-английски. — А я говорю." }
          ],
          errores: [
            { mal: "—No tengo coche. —Yo también no.", bien: "Yo tampoco.", por: "«Тоже не» — **tampoco**." }
          ],
          chequeo: [
            { pide: "—No trabajo los sábados. —Yo ___. (согласен)", opciones: ["tampoco", "también", "nunca"], ok: "tampoco", por: "На отрицательную фразу — **tampoco**." }
          ]
        },
        {
          id: "es7-a-mi-tambien",
          titulo: "A mí también, a mí tampoco",
          texto: "С **gustar** и похожими глаголами отвечают с **a mí**: **—Me encanta el mar. —A mí también.** / **—No me gusta el fútbol. —A mí tampoco.** Несогласие: **A mí no**, **A mí sí**.\n«Yo también» здесь не подходит: в первой фразе нет **yo**, есть **me**.",
          comparacion: "Как в русском: «Я люблю…» — «Я тоже»; «Мне нравится…» — «Мне тоже».",
          chequeo: [
            { pide: "—Me interesa la música. —A mí ___. (согласен)", opciones: ["también", "tampoco", "sí"], ok: "también", por: "На утвердительную — **también**." }
          ]
        },
        {
          id: "es7-opinion",
          titulo: "Creo que…, tienes razón",
          texto: "Мнение: **creo que…** — «я думаю, что…», **me parece que…** — «мне кажется, что…»: **Creo que el museo está cerrado**.\nСогласиться: **Tienes razón** («ты прав(а)»), **Estoy de acuerdo** («я согласен, согласна»). Не согласиться: **No estoy de acuerdo**, **No creo** («не думаю»).\nСпросить мнение: **¿Qué te parece?**, **¿Cuál es tu opinión?**",
          ejemplos: [
            { es: "—Creo que es muy tarde. —Tienes razón.", ru: "— По-моему, уже очень поздно. — Ты прав(а)." }
          ],
          errores: [
            { mal: "Estoy acuerdo.", bien: "Estoy de acuerdo.", por: "**de acuerdo** — с **de**." }
          ],
          chequeo: [
            { pide: "No estoy ___ acuerdo.", opciones: ["de", "en", "a"], ok: "de", por: "**estar de acuerdo**." }
          ]
        }
      ],
      frases: ["FRE-121", "FRE-122", "FRE-123", "FRE-124"],
      vocab: ["tampoco", "creer", "opinión", "tener razón", "de acuerdo"]
    },
    {
      id: "es7m6", n: 6, tipo: "leccion",
      titulo: "Más alto que…",
      resumen: "Сравнение: más… que, menos… que, tan… como; mejor, peor, mayor, menor.",
      intro: "Чтобы выбрать между двумя планами или двумя местами, нужно сравнивать: больше, меньше, такой же. В испанском для этого хватает трёх конструкций и четырёх особых слов.",
      tablas: [
        { titulo: "Comparar", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "más grande que", ru: "больше, чем" }, { es: "menos caro que", ru: "дешевле, чем (менее дорогой)" }],
          [{ es: "tan grande como", ru: "такой же большой, как" }, { es: "tanto como", ru: "столько же, сколько" }]] },
        { titulo: "Formas especiales", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "bueno → mejor", ru: "хороший → лучше" }, { es: "malo → peor", ru: "плохой → хуже" }],
          [{ es: "mayor", ru: "старше" }, { es: "menor", ru: "младше" }]] },
        { titulo: "Para comparar", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "rápido", ru: "быстрый" }, { es: "lento", ru: "медленный" }],
          [{ es: "fácil", ru: "лёгкий" }, { es: "difícil", ru: "трудный" }],
          [{ es: "igual", ru: "одинаковый, такой же" }, { es: "diferente", ru: "другой, разный" }]] }
      ],
      secciones: [
        {
          id: "es7-mas-que",
          titulo: "Más… que, menos… que",
          texto: "Сравнение: **más** + прилагательное + **que** — «более…, чем»: **Madrid es más grande que Barcelona**. **menos… que** — «менее…, чем»: **El metro es menos caro que el taxi**.\nПрилагательное согласуется как обычно: **Lucía es más alta que Ana**.\nС глаголом — **más que**, **menos que**: **Trabajo más que tú** (после **que** — **tú**, **yo**).",
          comparacion: "**más… que** — как «-ее, чем»: «быстрее, чем», «дороже, чем».",
          ejemplos: [
            { es: "El tren es más rápido que el autobús.", ru: "Поезд быстрее автобуса." },
            { es: "Mi piso es más pequeño que tu piso.", ru: "Моя квартира меньше твоей." }
          ],
          errores: [
            { mal: "Madrid es más grande de Barcelona.", bien: "Madrid es más grande que Barcelona.", por: "Сравнение — **que**." }
          ],
          chequeo: [
            { pide: "El avión es más rápido ___ el tren.", opciones: ["que", "de", "como"], ok: "que", por: "**más… que**." }
          ]
        },
        {
          id: "es7-tan-como",
          titulo: "Tan… como, tanto como",
          texto: "Равенство: **tan** + прилагательное + **como** — «такой же…, как»: **Ana es tan alta como Lucía**.\nС существительным — **tanto / tanta / tantos / tantas… como**: **Tengo tantos libros como tú** (как прилагательное: согласуется).\nС глаголом — **tanto como**: **Trabajo tanto como tú**.\nТакже: **igual que** — «так же, как»: **Pienso igual que tú**; **diferente** — «другой, не такой»: **Mi barrio es muy diferente**.",
          errores: [
            { mal: "Ana es tan alta que Lucía.", bien: "Ana es tan alta como Lucía.", por: "Равенство — **tan… como**." }
          ],
          chequeo: [
            { pide: "Mi hermano es tan alto ___ mi padre.", opciones: ["como", "que", "de"], ok: "como", por: "**tan… como**." }
          ]
        },
        {
          id: "es7-mejor-peor",
          titulo: "Mejor, peor, mayor, menor",
          texto: "У четырёх слов — особые формы:\n· **bueno** → **mejor** (лучше): **Este café es mejor que el otro**;\n· **malo** → **peor** (хуже);\n· о возрасте — **mayor** (старше) и **menor** (младше): **Mi hermana es mayor que yo**.\nНе говорят «más bueno» в значении «лучше»: **mejor**. И не «más mayor»: **mayor** уже значит «старше». О размере можно **más grande**, **más pequeño**.",
          errores: [
            { mal: "Este café es más bueno que el otro.", bien: "Este café es mejor que el otro.", por: "**bueno** → **mejor**." },
            { mal: "Mi hermana es más mayor que yo.", bien: "Mi hermana es mayor que yo.", por: "**mayor** уже значит «старше»: без **más**." }
          ],
          chequeo: [
            { pide: "Pablo tiene 30 años y Lucía 32: Lucía es ___ que Pablo.", opciones: ["mayor", "menor", "mejor"], ok: "mayor", por: "Старше — **mayor**." }
          ],
          mas: {
            titulo: "Самый: el más…",
            texto: "«Самый» — **el / la / los / las** + **más** + прилагательное + **de**: **Es la ciudad más bonita de España** — самый красивый город Испании; **Es el más alto de la clase** — он самый высокий в классе.\nС особыми формами — без **más**: **el mejor**, **el peor**, **el mayor**, **el menor**: **Es el mejor restaurante del barrio**.",
            ejemplos: [
              { es: "Marta es la mayor de la familia.", ru: "Марта — старшая в семье." },
              { es: "Es el mejor café de la ciudad.", ru: "Это лучший кофе в городе." }
            ]
          }
        }
      ],
      dialogos: ["DLE-033"],
      vocab: ["tan", "como", "tanto", "tanto·det", "mejor", "peor", "mayor", "menor", "malo", "rápido", "lento", "difícil", "igual", "diferente"]
    },
    {
      id: "es7m7", n: 7, tipo: "leccion",
      titulo: "Porque, entonces, además",
      resumen: "Связать идеи: porque и ¿por qué?, entonces, además, también, tampoco.",
      intro: "Чтобы объяснить, почему тебе нравится один план больше другого, нужны связки: **porque** — «потому что», **entonces** — «тогда, значит», **además** — «к тому же».",
      tablas: [
        { titulo: "Conectores", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "y", ru: "и" }, { es: "pero", ru: "но" }],
          [{ es: "porque", ru: "потому что" }, { es: "¿por qué?", ru: "почему?" }],
          [{ es: "entonces", ru: "тогда, значит" }, { es: "además", ru: "кроме того, к тому же" }],
          [{ es: "también", ru: "тоже" }, { es: "tampoco", ru: "тоже не" }]] }
      ],
      secciones: [
        {
          id: "es7-porque",
          titulo: "¿Por qué? — Porque…",
          texto: "Вопрос «почему?» — **¿por qué?** (два слова, со знаком ударения); ответ «потому что» — **porque** (одно слово, без знака): **—¿Por qué no vienes? —Porque estoy cansada.**\nЗвучат почти одинаково — разница в написании.",
          errores: [
            { mal: "¿Porque no vienes?", bien: "¿Por qué no vienes?", por: "Вопрос — **¿por qué?**, два слова." },
            { mal: "No voy por qué estoy enfermo.", bien: "No voy porque estoy enfermo.", por: "Ответ — **porque**, одно слово." }
          ],
          chequeo: [
            { pide: "¿___ estudias español?", opciones: ["Por qué", "Porque", "Por que"], ok: "Por qué", por: "Вопрос — **¿Por qué…?**" }
          ]
        },
        {
          id: "es7-entonces-ademas",
          titulo: "Entonces, además",
          texto: "**entonces** — «тогда, значит» (вывод): **No tengo coche. Entonces voy en metro.**\n**además** — «кроме того, к тому же» (ещё одна причина): **El piso es bonito. Además, está cerca del metro.**\nВместе с **y**, **pero** и **porque** этого хватает, чтобы объяснить свой выбор.",
          ejemplos: [
            { es: "Hoy llueve. Entonces vamos al cine.", ru: "Сегодня идёт дождь. Тогда идём в кино." },
            { es: "El hotel es barato. Además, está en el centro.", ru: "Гостиница дешёвая. К тому же она в центре." }
          ],
          chequeo: [
            { pide: "El piso es grande. ___, tiene terraza.", opciones: ["Además", "Entonces", "Porque"], ok: "Además", por: "Ещё одна причина — **además**." }
          ]
        }
      ],
      vocab: ["porque", "entonces", "además"]
    },
    {
      id: "es7m8", n: 8, tipo: "leccion",
      titulo: "Amigos y vecinos",
      resumen: "Отношения: conocer a alguien, llevarse bien, discutir, enfadarse, charlar.",
      intro: "Друзья, соседи, коллеги: с кем мы знакомы, с кем ладим, с кем спорим.",
      tablas: [
        { titulo: "Relaciones", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el amigo, la amiga", ru: "друг, подруга" }, { es: "el vecino, la vecina", ru: "сосед, соседка" }],
          [{ es: "la amistad", ru: "дружба" }, { es: "la relación", ru: "отношения" }],
          [{ es: "conocer a una persona", ru: "знать человека; познакомиться" }, { es: "llevarse bien / mal", ru: "ладить / не ладить" }],
          [{ es: "charlar", ru: "болтать, беседовать" }, { es: "discutir", ru: "спорить, ссориться" }],
          [{ es: "enfadarse", ru: "рассердиться" }, { es: "estar enfadado", ru: "сердиться (быть сердитым)" }]] },
        { titulo: "Llevarse", encabezados: ["Кто", "Форма"], filas: es7Tabla("llevarse", "bien") }
      ],
      secciones: [
        {
          id: "es7-conocer",
          titulo: "Conocer a alguien",
          texto: "**conocer** — «знать кого-то, быть знакомым» или «познакомиться»: **¿Conoces a Marta?** — ты знаком с Мартой? Форма **yo** — **conozco**: **No conozco a tu hermano**.\nПеред человеком ставят **a**: **Conozco a Pablo**. Пока запомни как формулу: с людьми — **conocer a**.\nО фактах — **saber** (урок 5): **Sé dónde vive** — я знаю, где он живёт.",
          ejemplos: [
            { es: "—¿Conoces a mi vecina? —Sí, la conozco.", ru: "— Ты знаешь мою соседку? — Да, знаю." }
          ],
          chequeo: [
            { pide: "No ___ a tu hermano. (yo)", opciones: ["conozco", "sé", "conoco"], ok: "conozco", por: "Знать человека — **conocer**; форма **yo** — **conozco**." }
          ]
        },
        {
          id: "es7-llevarse",
          titulo: "Me llevo bien con…",
          texto: "**llevarse bien / mal con** — «ладить / не ладить с»: **Me llevo bien con mis vecinos**. Это глагол с **se**, как **levantarse**: **me llevo, te llevas, se lleva…**\nСравни: **Marta me cae bien** — Марта мне нравится (модуль 4); **Me llevo bien con Marta** — мы с Мартой ладим.",
          chequeo: [
            { pide: "¿Te ___ bien con tu hermana?", opciones: ["llevas", "caes", "gustas"], ok: "llevas", por: "Ладить — **llevarse bien con**." }
          ]
        },
        {
          id: "es7-discutir",
          titulo: "Discutir, enfadarse, charlar",
          texto: "**discutir** — «спорить, ссориться»: **Discuto mucho con mi hermano**.\n**enfadarse** — «рассердиться» (с **se**): **Mi vecino se enfada mucho**. Быть сердитым — **estar enfadado** (урок 3).\n**charlar** — «болтать, беседовать»: **Charlamos en el bar**.",
          ejemplos: [
            { es: "Los sábados charlo con mis amigos en la terraza.", ru: "По субботам я болтаю с друзьями на террасе." }
          ]
        }
      ],
      dialogos: ["DLE-034"],
      vocab: ["conocer", "llevarse", "amistad", "vecino", "relación", "charlar", "discutir", "enfadarse"]
    },
    {
      id: "es7m9", n: 9, tipo: "leccion",
      titulo: "Mensajes e invitaciones",
      resumen: "Написать сообщение и приглашение: приветствие, план, прощание; ¡Felicidades!",
      intro: "В Испании о встречах договариваются в чатах. У сообщения, как у письма, есть привычные начало и конец.",
      tablas: [
        { titulo: "Un mensaje", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "¡Hola, Lucía! ¿Qué tal?", ru: "Привет, Лусия! Как дела?" }, { es: "¿Quedamos mañana?", ru: "Встретимся завтра?" }],
          [{ es: "Un beso.", ru: "Целую." }, { es: "Un abrazo.", ru: "Обнимаю." }],
          [{ es: "el mensaje", ru: "сообщение" }, { es: "el chat", ru: "чат" }],
          [{ es: "mandar, enviar", ru: "посылать, отправлять" }, { es: "contestar", ru: "отвечать" }]] }
      ],
      secciones: [
        {
          id: "es7-mensaje",
          titulo: "Un beso, un abrazo",
          texto: "Сообщение другу: приветствие (**¡Hola!**, **¿Qué tal?**), предложение (**¿Quedamos…?**, **¿Te apetece…?**) и прощание: **Un beso** («целую»), **Besos**, **Un abrazo** («обнимаю»). **Un beso** пишут друзьям и семье и женщины, и мужчины; мужчины между собой чаще пишут **Un abrazo**.\nПослать — **mandar** или **enviar**: **Te mando una foto**; ответить — **contestar**: **No me contesta** — он мне не отвечает. Семейный чат — **el chat de la familia**.",
          ejemplos: [
            { es: "¡Hola, Pablo! ¿Quedamos mañana? Un abrazo.", ru: "Привет, Пабло! Встретимся завтра? Обнимаю." }
          ]
        },
        {
          id: "es7-invitacion",
          titulo: "Una invitación",
          texto: "Приглашение на день рождения: **Te invito a mi cumpleaños**, когда и где, и **¿Vienes?** Поздравить — **¡Felicidades!** («поздравляю!»): так поздравляют с днём рождения и с праздником.",
          ejemplos: [
            { es: "El sábado es mi cumpleaños. Te invito a mi casa a las nueve. ¿Vienes?", ru: "В субботу мой день рождения. Приглашаю тебя ко мне домой в девять. Придёшь?" }
          ],
          chequeo: [
            { pide: "Es el cumpleaños de Marta. Le digo: «¡___!»", opciones: ["Felicidades", "Gracias", "Perdón"], ok: "Felicidades", por: "Поздравить — **¡Felicidades!**" }
          ]
        }
      ],
      frases: ["FRE-127", "FRE-128", "FRE-129"],
      dialogos: ["DLE-031"],
      vocab: ["mensaje", "chat", "mandar", "contestar", "beso", "abrazo"],
      ampliacion: {
        titulo: "Праздник",
        intro: "Ещё два слова. Они не входят в проверку урока. **una fiesta sorpresa** — вечеринка-сюрприз; **celebrar** — праздновать: **Celebramos el cumpleaños de Marta**.",
        vocab: ["sorpresa", "celebrar"]
      }
    },
    {
      id: "es7m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе: договориться о встрече, день рождения, что нравится и что мешает, какая квартира лучше и соседи. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-030", "DLE-031", "DLE-032", "DLE-033", "DLE-034"]
    },
    {
      id: "es7m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Договориться в чате и написать приглашение.",
      intro: "Две части. **Разговор по ролям:** Лусия пишет тебе в чат и предлагает план, Пабло зовёт на день рождения, Хавьер спрашивает твоё мнение — ты отвечаешь своими словами. **Потом напиши** по-испански (8–12 фраз): сообщение-приглашение друзьям (что, когда, где и почему тебе этого хочется) и сравни два плана или два места. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Предложение (¿quedamos?, ¿te apetece?, ¿vamos?)", rx: "(quedamos|quedar|apetece|vamos a|te invito|os invito)" },
        { txt: "Когда и во сколько (el sábado, a las…)", rx: "(lunes|martes|miércoles|jueves|viernes|sábado|domingo|mañana|finde|fin de semana|a las? (una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|once|doce))" },
        { txt: "Кому: me, te, le, nos, os, les", rx: "\\b(te|le|os|les) (escribo|mando|invito|regalo|doy|explico|cuento|pregunto|parece|apetece|gusta|gustan|interesa|interesan|encanta|encantan)\\b" },
        { txt: "Глагол как gustar (me interesa, me apetece…)", rx: "\\b(me|te|le|nos|os|les) (interesa|interesan|apetece|apetecen|parece|parecen|molesta|molestan|importa|importan|encanta|encantan|cae|caen)\\b" },
        { txt: "Сравнение (más… que, tan… como, mejor)", rx: "(más [a-záéíóúñ]+ que|menos [a-záéíóúñ]+ que|tan [a-záéíóúñ]+ como|\\b(mejor|peor|mayor|menor)\\b)" },
        { txt: "Причина (porque, además, entonces)", rx: "\\b(porque|además|entonces)\\b" },
        { txt: "Мнение (creo que, me parece…)", rx: "(creo que|me parece|estoy de acuerdo|tienes razón|para mí)" },
        { txt: "Прощание (un beso, un abrazo…)", rx: "(un beso|besos|un abrazo|abrazos|hasta (luego|mañana|el))" }
      ],
      consejos: [
        { rx: "\\byo (intereso|apetezco|gusto|molesto)\\b", msg: "Как **gustar**: **me interesa**, **me apetece**." },
        { rx: "\\b(me|te|le|nos|os|les) (interesa|gusta|apetece|molesta|encanta|importa) (los|las|mis|tus|sus) ", msg: "Если то, что нравится или интересует, во мн. ч. — **interesan**, **gustan**, **encantan**." },
        { rx: "\\ba (juan|ana|lucía|pablo|marta|javier|mi [a-záéíóúñ]+) (gusta|gustan|interesa|interesan|encanta|encantan|molesta|apetece)\\b", msg: "С именем тоже нужно местоимение: **a Ana le gusta**." },
        { rx: "\\bmás (bueno|buena|buenos|buenas)\\b", msg: "«Лучше» — **mejor**, не «más bueno»." },
        { rx: "\\bmás (mayor|menor)\\b", msg: "**mayor** и **menor** — без **más**." },
        { rx: "\\btambién no\\b", msg: "«Тоже не» — **tampoco**." },
        { rx: "\\btan [a-záéíóúñ]+ que\\b", msg: "Равенство — **tan… como**." },
        { rx: "\\bcon (mí|ti|yo|tú)\\b", msg: "«Со мной», «с тобой» — **conmigo**, **contigo**." },
        { rx: "\\bestoy acuerdo\\b", msg: "**estoy de acuerdo**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es7m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Планы, кому, глаголы как gustar, согласие, сравнение и связки.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Планы", tipos: ["conjugar", "plan", "pregunta"], n: 4 },
        { nombre: "Кому", tipos: ["pronombre", "error"], n: 4 },
        { nombre: "Как gustar", tipos: ["gustar-escribir", "reaccion", "opinion"], n: 4 },
        { nombre: "Сравнение и связки", tipos: ["comparar", "comparar-escribir", "conector", "relacion"], n: 4 },
        { nombre: "Общение", tipos: ["mensaje", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs7Modulo(id) { return UNIDAD_ES_7.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_7 = UNIDAD_ES_7;
window.unidadEs7Modulo = unidadEs7Modulo;

/* ── Vocabulario: palabras → IDs ──
   Palabras con dos entradas: mejor (adjetivo «лучший» y adverbio «лучше»: «mejor·adv»
   en el módulo 2), tanto (el adverbio), igual (el adjetivo), peor (el adjetivo). */
const ES7_ID_FIJO = { "mejor": "ESP-00098", "mejor·adv": "ESP-05180", "tanto": "ESP-00196", "tanto·det": "ESP-05182", "igual": "ESP-00351", "peor": "ESP-00477" };
function es7Id(w) {
  if (ES7_ID_FIJO[w]) return ES7_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es7Vocab(m) { return (m.vocab || []).map(es7Id).filter(Boolean); }
function es7Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es7Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U7 (sin las que ya enseñaron la U1 a la U6, ni la ampliación) */
function es7Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_7.modulos.forEach(m => es7Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs7() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es7Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  const llenar = (frase, ok) => mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  /* Elegir: [frase con ___, correcta, opciones, explicación, palabra?, módulo?, regla?] */
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES7-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES7-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });

  /* 1. Conjugar en presente */
  ES7_CONJ.forEach(([frase, inf, p, mod, regla], i) => {
    const f = es7Pres(inf, p); if (!f) return;
    const audio = llenar(frase, f);
    out.push({ id: "ES7-cj-" + i, tipo: "conjugar", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "cj-" + i, lex: lex(inf),
      pide: "Впиши глагол «" + inf + "» в нужной форме.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES7_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (ES7_CONJ_NOTA[inf] ? ". " + ES7_CONJ_NOTA[inf] : ".") });
  });
  /* 2. Planes: quedar, apetecer, conmigo, aceptar y rechazar */
  elegir("pl", "plan", ES7_PLAN, 1, "es7-quedar", "Что подходит?", 2, 11);
  /* 3. Pronombres: me, te, le… (y le o lo) */
  elegir("pr", "pronombre", ES7_PRON, 3, "es7-oi", "Какое местоимение нужно?", 2, 21);
  /* 4. La familia de gustar: escribir la forma */
  escribirFalta("gu", "gustar-escribir", ES7_GUSTAR, "Впиши глагол в нужной форме (что нравится, интересует…?).");
  /* 5. Yo también, a mí tampoco */
  ES7_REACCION.forEach(([dice, sentido, ok, ops, exp, regla], i) => {
    out.push({ id: "ES7-rc-" + i, tipo: "reaccion", forma: "elegir", dificultad: 2, modulo: 5, regla, grupo: "rc-" + i,
      pide: "Тебе говорят это. Ответь: ты " + sentido + ".", grande: dice, audio: dice, opciones: baraja(ops, i + 31), correcta: ok, oir: ok, explicacion: exp });
  });
  elegir("op", "opinion", ES7_OPINION, 5, "es7-opinion", "Что подходит?", 2, 41);
  /* 6. Comparar */
  elegir("cm", "comparar", ES7_COMPARAR, 6, "es7-mas-que", "Что подходит?", 2, 51);
  escribirFalta("cw", "comparar-escribir", ES7_COMPARAR_ESC, "Впиши слово для сравнения (+ больше, − меньше, = так же).");
  /* 7. Conectores */
  elegir("co", "conector", ES7_CONECTOR, 7, "es7-porque", "Что подходит?", 2, 61);
  /* 8. Relaciones */
  elegir("rl", "relacion", ES7_RELACION, 8, "es7-llevarse", "Что подходит?", 2, 71);
  /* 9. Mensajes */
  elegir("ms", "mensaje", ES7_MENSAJE, 9, "es7-mensaje", "Что подходит?", 2, 81);
  /* 10. Preguntas */
  ES7_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES7-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 91), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 11. Errores típicos */
  ES7_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES7-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 12. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es7Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES7-dic-" + id)) return;
    const x = { id: "ES7-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w, mayus: e.propio || undefined,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_7.modulos.forEach(m => {
    es7Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es7Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 13. Situaciones y respuestas; dictado y orden de las frases de la U7 */
  ES7_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES7-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES7_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES7-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 7) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_7.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES7-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES7-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 14. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES7_TURNOS.forEach((T, i) => {
    out.push({ id: "ES7-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });

  /* Profundización y formas (13/11/2026) */
  if (typeof es7Prof === "function") es7Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* Presente: [frase con ___, infinitivo, persona 0–5, módulo, regla] */
const ES7_CONJ = [
  ["¿___ a las ocho? (nosotros)", "quedar", 3, 1, "es7-quedar"],
  ["Hoy ___ con Lucía. (yo)", "quedar", 0, 1, "es7-quedar"],
  ["Te ___ a mi cumpleaños. (yo)", "invitar", 0, 1, "es7-invitar"],
  ["Yo ___ un plan: ir a la playa.", "proponer", 0, 1, "es7-quedar"],
  ["Mañana te ___. (yo)", "avisar", 0, 2, "es7-cambiar"],
  ["Le ___ un libro a Marta. (yo)", "regalar", 0, 3, "es7-oi"],
  ["Te ___ mi número. (yo)", "dar", 0, 3, "es7-oi"],
  ["Os ___ el plan. (yo)", "explicar", 0, 3, "es7-oi"],
  ["Le ___ la hora a un señor. (yo)", "preguntar", 0, 3, "es7-oi"],
  ["Ana nos ___ su libro.", "prestar", 2, 3, "es7-oi"],
  ["Te ___ todo mañana. (yo)", "contar", 0, 3, "es7-oi"],
  ["Te ___ mi piso. (yo)", "enseñar", 0, 3, "es7-oi"],
  ["No ___ que es caro. (yo)", "creer", 0, 5, "es7-opinion"],
  ["No ___ a tu hermano. (yo)", "conocer", 0, 8, "es7-conocer"],
  ["¿___ a Marta? (tú)", "conocer", 1, 8, "es7-conocer"],
  ["Yo ___ bien con mis vecinos.", "llevarse", 0, 8, "es7-llevarse"],
  ["Ana y Lucía ___ muy bien.", "llevarse", 5, 8, "es7-llevarse"],
  ["Mi vecino ___ con todos.", "discutir", 2, 8, "es7-discutir"],
  ["Mi hermano ___ mucho.", "enfadarse", 2, 8, "es7-discutir"],
  ["Pablo no me ___ los mensajes.", "contestar", 2, 9, "es7-mensaje"],
  ["Te ___ una foto. (yo)", "mandar", 0, 9, "es7-mensaje"]
];
const ES7_CONJ_NOTA = { proponer: "Как **poner**: **propongo**.", dar: "**yo** — **doy**.", contar: "o → ue: **cuento**.", conocer: "**yo** — **conozco**.",
  llevarse: "Глагол с **se**: **me llevo, te llevas, se lleva…**", enfadarse: "Глагол с **se**: **se enfada**." };
const ES7_PLAN = [
  ["¿___ a las siete en la plaza?", "Quedamos", ["Quedamos", "Nos quedamos", "Estamos"], "Договориться о встрече — **quedar**: **¿Quedamos…?**", "quedar"],
  ["Hoy me ___ en casa: estoy cansado.", "quedo", ["quedo", "quedamos", "invito"], "Остаться — **quedarse**: **me quedo**.", "quedarse"],
  ["¿Te ___ ir a la playa?", "apetece", ["apetece", "quedas", "vamos"], "Предложение — **¿Te apetece…?**", null, 1, "es7-proponer"],
  ["¿Vienes ___ al concierto?", "conmigo", ["conmigo", "con mí", "con yo"], "«Со мной» — **conmigo**.", "conmigo", 1, "es7-libre"],
  ["Voy ___ al cine, Lucía.", "contigo", ["contigo", "con ti", "con tú"], "«С тобой» — **contigo**.", "contigo", 1, "es7-libre"],
  ["¿Estás ___ el sábado? —Sí, no tengo planes.", "libre", ["libre", "ocupado", "cansado"], "Свободен — **libre**.", "libre", 1, "es7-libre"],
  ["Te ___ a mi cumpleaños.", "invito", ["invito", "quedo", "apetece"], "Пригласить — **invitar**.", "invitar", 1, "es7-invitar"],
  ["—¿Vienes? —Lo siento, no ___: tengo clase.", "puedo", ["puedo", "puede", "poder"], "О себе — **no puedo**.", null, 2, "es7-rechazar"],
  ["El viernes no puedo. ¿Y ___ el sábado?", "mejor", ["mejor", "bueno", "más"], "«Лучше» — **mejor**.", "mejor·adv", 2, "es7-cambiar"],
  ["—No puedo ir. —¡Qué ___!", "pena", ["pena", "plan", "bien"], "Как жаль — **¡Qué pena!**", "pena", 2, "es7-rechazar"],
  ["—¿Vienes mañana? —No sé, a lo ___.", "mejor", ["mejor", "bien", "más"], "«Может быть» — **a lo mejor**.", "a lo mejor", 2, "es7-cambiar"],
  ["No sé. Te ___ mañana.", "aviso", ["aviso", "quedo", "apetece"], "Сообщить — **avisar**: **te aviso**.", "avisar", 2, "es7-cambiar"],
  ["—¿Quedamos a las ocho? —¡___!", "Perfecto", ["Perfecto", "Qué pena", "Lo siento"], "Согласие — **¡Perfecto!**", "perfecto", 2, "es7-aceptar"]
];
const ES7_PRON = [
  ["A mis padres ___ gusta el cine.", "les", ["les", "le", "se"], "**mis padres** — мн. ч.: **les**.", null, 4, "es7-a-mi-me"],
  ["A Ana ___ molesta la música.", "le", ["le", "la", "les"], "Кому — **le**.", null, 4, "es7-a-mi-me"],
  ["A nosotros ___ encanta el mar.", "nos", ["nos", "les", "os"], "**a nosotros** — **nos**.", null, 4, "es7-a-mi-me"],
  ["¿A vosotros ___ apetece un café?", "os", ["os", "les", "nos"], "**a vosotros** — **os**.", null, 4, "es7-a-mi-me"],
  ["A mí ___ parece bien.", "me", ["me", "mí", "yo"], "**a mí** — **me**.", null, 4, "es7-a-mi-me"],
  ["¿A ti ___ interesa la música?", "te", ["te", "ti", "tú"], "**a ti** — **te**.", null, 4, "es7-a-mi-me"],
  ["A ___ me encanta bailar.", "mí", ["mí", "me", "yo"], "После **a** — **mí**.", null, 4, "es7-a-mi-me"],
  ["Y a ___, ¿te gusta?", "ti", ["ti", "te", "tú"], "После **a** — **ti**.", "ti", 4, "es7-a-mi-me"],
  ["___ escribo un mensaje a Lucía.", "Le", ["Le", "La", "Lo"], "Кому — **le**.", "le"],
  ["___ explico el plan a mis amigos.", "Les", ["Les", "Los", "Le"], "Кому, мн. ч. — **les**.", "les"],
  ["¿___ das tu número? (a mí)", "Me", ["Me", "Mí", "Te"], "Мне — **me**.", "dar"],
  ["¿El libro? ___ compro mañana.", "Lo", ["Lo", "Le", "La"], "Что? — **lo**: **el libro** → **lo**.", null, 3, "es7-le-lo"],
  ["A Marta ___ compro un regalo.", "le", ["le", "la", "lo"], "Кому — **le**.", "regalo", 3, "es7-a-ana-le"],
  ["¿___ prestas tu bicicleta? (a mí)", "Me", ["Me", "Mi", "Te"], "Мне — **me**.", "prestar"]
];
const ES7_GUSTAR = [
  ["Me ___ la música. (interesar)", "interesa", "Одно — **interesa**.", 4, "es7-como-gustar", "interesar"],
  ["Me ___ los museos. (interesar)", "interesan", "Несколько — **interesan**.", 4, "es7-como-gustar", "interesar"],
  ["¿Te ___ la música? (molestar)", "molesta", "Одно — **molesta**.", 4, "es7-como-gustar", "molestar"],
  ["Me ___ los coches en la calle. (molestar)", "molestan", "Несколько — **molestan**.", 4, "es7-como-gustar", "molestar"],
  ["¿Qué te ___ el plan? (parecer)", "parece", "**el plan** — одно: **parece**.", 4, "es7-parecer", "parecer"],
  ["Los pisos del centro me ___ caros. (parecer)", "parecen", "**los pisos** — мн. ч.: **parecen**.", 4, "es7-parecer", "parecer"],
  ["Hoy no me ___ salir. (apetecer)", "apetece", "Инфинитив — как одно: **apetece**.", 4, "es7-caer-apetecer", "apetecer"],
  ["A mis padres les ___ mucho la familia. (importar)", "importa", "**la familia** — одно: **importa**.", 4, "es7-caer-apetecer", "importar"],
  ["Tus amigos me ___ muy bien. (caer)", "caen", "**tus amigos** — мн. ч.: **caen**.", 4, "es7-caer-apetecer", "caer"],
  ["Me ___ las piernas. (doler)", "duelen", "**las piernas** — мн. ч.: **duelen**.", 4, "es7-caer-apetecer"],
  ["¿Os ___ un café? (apetecer)", "apetece", "**un café** — одно: **apetece**.", 4, "es7-caer-apetecer", "apetecer"],
  ["Me ___ el examen. (preocupar)", "preocupa", "**el examen** — одно: **preocupa**.", 4, "es7-caer-apetecer", "preocupar"]
];
/* [lo que te dicen, тип ответа, correcta, opciones, explicación, regla] */
const ES7_REACCION = [
  ["Vivo en Barcelona.", "согласен (у тебя так же)", "Yo también.", ["Yo también.", "Yo tampoco.", "A mí también."], "Обычный глагол, утвердительная фраза — **Yo también**.", "es7-tambien-tampoco"],
  ["No tengo coche.", "согласен (у тебя так же)", "Yo tampoco.", ["Yo tampoco.", "Yo también.", "A mí tampoco."], "Отрицательная фраза — **Yo tampoco**.", "es7-tambien-tampoco"],
  ["Trabajo los sábados.", "не согласен (у тебя иначе)", "Yo no.", ["Yo no.", "Yo sí.", "A mí no."], "На утвердительную — **Yo no**.", "es7-tambien-tampoco"],
  ["No hablo inglés.", "не согласен (у тебя иначе)", "Yo sí.", ["Yo sí.", "Yo no.", "A mí sí."], "На отрицательную — **Yo sí**.", "es7-tambien-tampoco"],
  ["Me encanta el mar.", "согласен (у тебя так же)", "A mí también.", ["A mí también.", "Yo también.", "A mí tampoco."], "Как **gustar** — **A mí también**.", "es7-a-mi-tambien"],
  ["No me gusta el fútbol.", "согласен (у тебя так же)", "A mí tampoco.", ["A mí tampoco.", "A mí también.", "Yo tampoco."], "Как **gustar**, отрицание — **A mí tampoco**.", "es7-a-mi-tambien"],
  ["Me gustan las series.", "не согласен (у тебя иначе)", "A mí no.", ["A mí no.", "A mí sí.", "Yo no."], "Как **gustar**, утвердительная — **A mí no**.", "es7-a-mi-tambien"],
  ["No me interesan los coches.", "не согласен (у тебя иначе)", "A mí sí.", ["A mí sí.", "A mí no.", "Yo sí."], "Как **gustar**, отрицательная — **A mí sí**.", "es7-a-mi-tambien"],
  ["Me molesta el calor.", "согласен (у тебя так же)", "A mí también.", ["A mí también.", "A mí tampoco.", "Yo también."], "Как **gustar** — **A mí también**.", "es7-a-mi-tambien"],
  ["No estudio los domingos.", "согласен (у тебя так же)", "Yo tampoco.", ["Yo tampoco.", "Yo también.", "A mí tampoco."], "Отрицательная фраза — **Yo tampoco**.", "es7-tambien-tampoco"]
];
const ES7_OPINION = [
  ["No estoy ___ acuerdo.", "de", ["de", "en", "a"], "**estar de acuerdo**.", "de acuerdo"],
  ["Tienes ___: el museo está cerrado.", "razón", ["razón", "acuerdo", "opinión"], "**tener razón** — быть правым.", "tener razón"],
  ["___ que el plan es muy bueno. (yo)", "Creo", ["Creo", "Parezco", "Opino de"], "Мнение — **creo que…**", "creer"],
  ["Para mí, es una buena idea. ¿Cuál es tu ___?", "opinión", ["opinión", "razón", "acuerdo"], "**tu opinión** — твоё мнение.", "opinión"],
  ["Me ___ que es muy tarde.", "parece", ["parece", "parezco", "creo"], "Мнение — **me parece que…**", "parecer", 5]
];
const ES7_COMPARAR = [
  ["El avión es más rápido ___ el tren.", "que", ["que", "de", "como"], "**más… que**.", "rápido"],
  ["Ana es tan alta ___ Lucía.", "como", ["como", "que", "de"], "**tan… como**.", "tan", 6, "es7-tan-como"],
  ["Este café es ___ que el otro. (bueno)", "mejor", ["mejor", "más bueno", "bueno"], "**bueno** → **mejor**.", "mejor", 6, "es7-mejor-peor"],
  ["Este bar es ___ que el otro. (malo)", "peor", ["peor", "más malo", "mejor"], "**malo** → **peor**.", "peor", 6, "es7-mejor-peor"],
  ["Mi hermana tiene 25 años y yo 20: ella es ___ que yo.", "mayor", ["mayor", "menor", "mejor"], "Старше — **mayor**.", "mayor", 6, "es7-mejor-peor"],
  ["Pablo tiene 30 años y Marta 32: Pablo es ___ que Marta.", "menor", ["menor", "mayor", "peor"], "Младше — **menor**.", "menor", 6, "es7-mejor-peor"],
  ["Tengo ___ libros como tú.", "tantos", ["tantos", "tan", "tanto"], "С существительным во мн. ч. — **tantos… como**.", "tanto", 6, "es7-tan-como"],
  ["Trabajo ___ como tú.", "tanto", ["tanto", "tan", "tantos"], "С глаголом — **tanto como**.", "tanto", 6, "es7-tan-como"],
  ["El metro es ___ caro que el taxi.", "menos", ["menos", "tan", "mayor"], "Дешевле — **menos caro que**.", null],
  ["Es la ciudad ___ bonita de España.", "más", ["más", "mejor", "tan"], "«Самый» — **la más** + прилагательное.", null, 6, "es7-mejor-peor"]
];
const ES7_COMPARAR_ESC = [
  ["El tren es ___ rápido que el autobús. (+)", "más", "Больше — **más… que**.", 6, "es7-mas-que", "rápido"],
  ["El taxi es ___ barato que el metro. (−)", "menos", "Меньше — **menos… que**.", 6, "es7-mas-que"],
  ["Ana es ___ simpática como Lucía. (=)", "tan", "Так же — **tan… como**.", 6, "es7-tan-como", "tan"],
  ["Este restaurante es ___ que el otro. (bueno, +)", "mejor", "**bueno** → **mejor**.", 6, "es7-mejor-peor", "mejor"],
  ["Este hotel es ___ que el otro. (malo, +)", "peor", "**malo** → **peor**.", 6, "es7-mejor-peor", "peor"],
  ["Mi hermano es ___ que yo. (возраст, +)", "mayor", "Старше — **mayor**.", 6, "es7-mejor-peor", "mayor"],
  ["Mi hermana es ___ que yo. (возраст, −)", "menor", "Младше — **menor**.", 6, "es7-mejor-peor", "menor"],
  ["El español es ___ difícil como el ruso. (=)", "tan", "Так же — **tan… como**.", 6, "es7-tan-como", "difícil"]
];
const ES7_CONECTOR = [
  ["¿___ no vienes al cine?", "Por qué", ["Por qué", "Porque", "Por que"], "Вопрос — **¿Por qué…?**", null],
  ["No voy ___ estoy enfermo.", "porque", ["porque", "por qué", "pero"], "Причина — **porque**.", "porque"],
  ["Hoy llueve. ___ vamos al cine.", "Entonces", ["Entonces", "Además", "Porque"], "Вывод — **entonces**.", "entonces", 7, "es7-entonces-ademas"],
  ["El piso es bonito. ___, está cerca del metro.", "Además", ["Además", "Entonces", "Pero"], "Ещё одна причина — **además**.", "además", 7, "es7-entonces-ademas"],
  ["Me gusta el mar, ___ no me gusta la playa en agosto.", "pero", ["pero", "porque", "además"], "Противопоставление — **pero**.", null, 7, "es7-entonces-ademas"],
  ["No tengo coche. Mi hermano no tiene coche ___.", "tampoco", ["tampoco", "también", "además"], "«Тоже не» — **tampoco**.", "tampoco", 7, "es7-tambien-tampoco"]
];
const ES7_RELACION = [
  ["¿Te ___ bien con tu hermana?", "llevas", ["llevas", "caes", "gustas"], "Ладить — **llevarse bien con**.", "llevarse"],
  ["Tu amiga me ___ muy bien.", "cae", ["cae", "lleva", "interesa"], "О человеке — **me cae bien**.", "caer", 8, "es7-llevarse"],
  ["No ___ a tu vecino. (yo)", "conozco", ["conozco", "sé", "conoco"], "Знать человека — **conocer**: **conozco**.", "conocer", 8, "es7-conocer"],
  ["¿Conoces ___ Marta?", "a", ["a", "de", "en"], "С людьми — **conocer a**.", null, 8, "es7-conocer"],
  ["Mi vecino ___ con todos: es muy antipático.", "discute", ["discute", "charla", "cae"], "Спорить, ссориться — **discutir**.", "discutir", 8, "es7-discutir"],
  ["Pablo y Marta ___ mucho: no se llevan bien.", "discuten", ["discuten", "charlan", "caen"], "Спорить — **discutir**.", "discutir", 8, "es7-discutir"],
  ["Mi hermano está ___: no me habla.", "enfadado", ["enfadado", "contento", "libre"], "Сердитый — **enfadado**.", null, 8, "es7-discutir"]
];
const ES7_MENSAJE = [
  ["Termino el mensaje a mi amiga: «___»", "Un beso.", ["Un beso.", "Buenos días.", "Perdone."], "Прощание с другом — **Un beso**.", "beso"],
  ["Es el cumpleaños de Marta. Le digo: «¡___!»", "Felicidades", ["Felicidades", "Gracias", "Perdón"], "Поздравить — **¡Felicidades!**", null, 9, "es7-invitacion"],
  ["Pablo no me ___ los mensajes.", "contesta", ["contesta", "pregunta", "cae"], "Отвечать — **contestar**.", "contestar"],
  ["Te ___ una foto del piso.", "mando", ["mando", "contesto", "cuento"], "Послать — **mandar**.", "mandar"],
  ["Escribo en el ___ de la familia.", "chat", ["chat", "abrazo", "beso"], "Чат — **el chat**.", "chat"],
  ["Termino el mensaje a mi amigo Pablo: «Un ___.»", "abrazo", ["abrazo", "chat", "regalo"], "**Un abrazo** — обнимаю.", "abrazo"]
];
const ES7_PREGUNTAS = [
  ["¿___ quedamos?", "A las ocho.", "A qué hora", ["A qué hora", "Dónde", "Por qué"], 1, "es7-quedar"],
  ["¿Dónde ___?", "En la plaza.", "quedamos", ["quedamos", "nos quedamos", "apetece"], 1, "es7-quedar"],
  ["¿Qué te ___ el plan?", "Me parece genial.", "parece", ["parece", "gusta", "cae"], 4, "es7-parecer"],
  ["¿___ no vienes?", "Porque tengo que trabajar.", "Por qué", ["Por qué", "Cuándo", "Qué"], 7, "es7-porque"],
  ["¿___ es mayor, tú o tu hermano?", "Mi hermano.", "Quién", ["Quién", "Qué", "Dónde"], 6, "es7-mejor-peor"],
  ["¿Te ___ un café?", "Sí, gracias.", "apetece", ["apetece", "quedas", "cae"], 4, "es7-caer-apetecer"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES7_ERRORES = [
  [["Me", "interesa", "los", "museos."], 1, "interesan", 4, "es7-como-gustar", "**los museos** — мн. ч.: **interesan**."],
  [["A", "Juan", "gusta", "el", "fútbol."], 2, "le gusta", 4, "es7-a-mi-me", "Местоимение нужно: **a Juan le gusta**."],
  [["Madrid", "es", "más", "grande", "de", "Barcelona."], 4, "que", 6, "es7-mas-que", "Сравнение — **que**."],
  [["Ana", "es", "tan", "alta", "que", "Lucía."], 4, "como", 6, "es7-tan-como", "Равенство — **tan… como**."],
  [["Lo", "escribo", "un", "mensaje", "a", "Ana."], 0, "Le", 3, "es7-le-lo", "Кому — **le**."],
  [["No", "estoy", "acuerdo."], 2, "de acuerdo.", 5, "es7-opinion", "**estar de acuerdo**."],
  [["A", "mis", "padres", "le", "gusta", "viajar."], 3, "les", 4, "es7-a-mi-me", "**mis padres** — мн. ч.: **les**."],
  [["No", "conoco", "a", "tu", "hermano."], 1, "conozco", 8, "es7-conocer", "Форма **yo** — **conozco**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES7_SITUACIONES = [
  ["Ты предлагаешь другу встретиться в субботу.", "¿Quedamos el sábado?", ["¿Nos quedamos el sábado?", "¿Estamos el sábado?"], "Встретиться — **quedar**.", 1],
  ["Тебя приглашают, а ты не можешь.", "Lo siento, no puedo.", ["Lo siento, no pueda.", "Me siento, no puedo."], "**Lo siento, no puedo.**", 2],
  ["Ты предлагаешь другой день.", "¿Y mejor el domingo?", ["¿Y más bueno el domingo?", "¿Y bien el domingo?"], "«Лучше» — **mejor**.", 2],
  ["Ты говоришь, что тебя интересуют музеи.", "Me interesan los museos.", ["Me interesa los museos.", "Yo intereso los museos."], "Как **gustar**: **me interesan**.", 4],
  ["Ты спрашиваешь подругу, как ей план.", "¿Qué te parece el plan?", ["¿Qué tú parece el plan?", "¿Qué te pareces el plan?"], "**¿Qué te parece…?**", 4],
  ["Ты соглашаешься с другом.", "Tienes razón.", ["Eres razón.", "Estás razón."], "**tener razón**.", 5],
  ["Другу не нравится футбол, тебе тоже.", "A mí tampoco.", ["A mí también.", "Yo tampoco."], "Как **gustar**, отрицание — **A mí tampoco**.", 5],
  ["Ты говоришь, что твоя сестра старше тебя.", "Mi hermana es mayor que yo.", ["Mi hermana es más mayor que yo.", "Mi hermana es mayor de yo."], "**mayor que** — без **más**.", 6],
  ["Ты поздравляешь подругу с днём рождения.", "¡Felicidades!", ["¡Felicidad!", "¡Gracias!"], "**¡Felicidades!** — всегда во мн. ч.", 9],
  ["Ты заканчиваешь сообщение другу.", "Un abrazo.", ["Un abrazos.", "Una abrazo."], "**Un abrazo.**", 9]
];
/* [lo que te dicen, correcta, equivocadas, explicación, módulo] */
const ES7_RESPUESTAS = [
  ["¿Quedamos mañana?", "Vale, ¿a qué hora?", ["Vale, ¿a qué horas?", "Vale, ¿en qué hora?"], "**¿A qué hora?**", 1],
  ["¿Te apetece un café?", "Sí, me apetece mucho.", ["Sí, apetezco mucho.", "Sí, me apetezco mucho."], "Как **gustar**: **me apetece**.", 4],
  ["No puedo ir, lo siento.", "¡Qué pena!", ["¡Qué bien!", "¡Felicidades!"], "Когда план не получается — **¡Qué pena!**", 2],
  ["Me encanta el mar.", "A mí también.", ["A mí tampoco.", "Yo también me."], "На утвердительную — **A mí también**.", 5],
  ["¿Qué te parece Barcelona?", "Me parece muy bonita.", ["Parezco muy bonita.", "Me parezco muy bonita."], "**Me parece…**", 4],
  ["¿Te llevas bien con tus vecinos?", "Sí, me llevo muy bien.", ["Sí, llevo muy bien.", "Sí, me llevas muy bien."], "**me llevo bien**.", 8],
  ["¿Por qué no vienes?", "Porque estoy cansada.", ["Por qué estoy cansada.", "Porqué estoy cansada."], "Ответ — **porque**.", 7],
  ["Es mi cumpleaños.", "¡Felicidades!", ["¡Qué pena!", "¡Perdón!"], "Поздравить — **¡Felicidades!**", 9]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas «a|b|~c»]], modelo, pista?] */
function es7Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f]) => ({ es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES7_TURNOS = [
  es7Turnos("Lucía", "lucia", "Chat con Lucía", true, [
    ["¡Hola! ¿Te apetece ir al cine el viernes?", "Привет! Хочешь пойти в кино в пятницу?", "Извинись: в пятницу ты не можешь.",
      [["извини", "lo siento|perdona|~siento"], ["не могу", "no puedo"]], "Lo siento, el viernes no puedo.", "**Lo siento, no puedo…**"],
    ["¡Qué pena! ¿Por qué?", "Как жаль! Почему?", "Объясни причину: тебе надо работать.",
      [["потому что", "porque|~tengo que"], ["работать", "trabajar|~trabajo"]], "Porque tengo que trabajar.", "**Porque tengo que…**"],
    ["Vale. ¿Y otro día?", "Ладно. А в другой день?", "Предложи субботу.",
      [["суббота", "el sábado|~sábado"]], "¿Y mejor el sábado?", "**¿Y mejor el sábado?**"],
    ["¡Perfecto! ¿A qué hora quedamos?", "Отлично! Во сколько встретимся?", "Предложи время и место.",
      [["время", "a las|~las"], ["место", "en la|en el|~plaza|~cine|~casa|~bar"]], "A las siete en la plaza."],
    ["Muy bien. ¡Hasta el sábado!", "Хорошо. До субботы!", "Попрощайся, как друзья в чате.",
      [["прощание", "un beso|besos|un abrazo|abrazos|hasta el sábado|hasta luego|chao|adiós"]], "¡Hasta el sábado! Un beso."]
  ]),
  es7Turnos("Pablo", "pablo", "El cumpleaños de Marta", false, [
    ["El domingo es el cumpleaños de Marta. ¿Vienes a la fiesta?", "В воскресенье день рождения Марты. Придёшь на праздник?", "Согласись.",
      [["да", "sí|claro|vale|genial|perfecto|por supuesto"]], "¡Claro que sí!"],
    ["¡Genial! ¿Qué le regalamos?", "Здорово! Что мы ей подарим?", "Спроси, что ей нравится.",
      [["ей", "le"], ["нравится", "gusta|gustan|interesa|interesan|encanta|encantan"]], "¿Qué le gusta?", "**¿Qué le gusta?**"],
    ["Le encantan los libros.", "Она обожает книги.", "Предложи подарить ей книгу.",
      [["ей", "le"], ["книга", "un libro|~libro"]], "Le regalamos un libro."]
  ]),
  es7Turnos("Javier", "javier", "¿Qué te parece?", false, [
    ["¿Qué te parece Barcelona?", "Как тебе Барселона?", "Скажи, что она тебе кажется очень красивой.",
      [["кажется", "me parece|~parece"], ["красивая", "bonita|preciosa|~bonita"]], "Me parece muy bonita.", "**Me parece…**"],
    ["¿Es más bonita que Moscú?", "Красивее Москвы?", "Скажи, что она такая же красивая, как Москва.",
      [["такая же…, как", "tan bonita como|~tan|~como"], ["Москва", "Moscú|~moscú"]], "Es tan bonita como Moscú.", "**tan… como**"],
    ["A mí me molesta un poco el calor.", "Меня немного раздражает жара.", "Скажи, что тебя тоже.",
      [["мне тоже", "a mí también"]], "A mí también.", "Как **gustar**: **a mí…**"]
  ])
];
window.ejerciciosUnidadEs7 = ejerciciosUnidadEs7;
window.es7Vocab = es7Vocab;
window.es7Ampliacion = es7Ampliacion;
window.es7Objetivo = es7Objetivo;
window.ES7_REACCION = ES7_REACCION;
const ES7_MEZCLA = { conjugar: 2, plan: 2, pronombre: 3, "gustar-escribir": 3, reaccion: 2, opinion: 1, comparar: 2, "comparar-escribir": 2,
  conector: 1, relacion: 1, mensaje: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1, turnos: 1 };
window.ES7_MEZCLA = ES7_MEZCLA;

/* ── Profundización (13/11/2026, repaso Abecé / Azbuka pedido por Manu) ──────────────
   Más a fondo que se suma a la teoría al cargar; tipos de profundización de Azbuka y
   ejercicios generados (la familia de gustar, el objeto indirecto, comparar). */
const ES7_MAS = {
  "es7-quedar": { titulo: "Quedar con alguien", texto: "С кем встречаешься — **quedar con**: **He quedado con Lucía** / **Quedé con Lucía a las ocho**. Где — **quedar en**: **¿Quedamos en la plaza?** Не путай с **quedarse** — остаться: **Me quedo en casa**.", ejemplos: [{ es: "¿Quedamos en la plaza a las ocho?", ru: "Встретимся на площади в восемь?" }] },
  "es7-proponer": { titulo: "Предложить мягче", texto: "Самый мягкий вариант — **¿Te apetece…?**; прямее — **¿Vamos…?**; **¿Te apetece ir a la playa?**", ejemplos: [{ es: "¿Te apetece ir a la playa?", ru: "Хочешь пойти на пляж?" }] },
  "es7-rechazar": { titulo: "Отказ по-испански", texto: "Испанцы редко говорят просто **no**: обычно добавляют причину и предлагают другое: **Lo siento, no puedo, tengo que trabajar. ¿Y mejor el domingo?** Голое «No» звучит резко.", ejemplos: [{ es: "Me encantaría, pero no puedo.", ru: "Я бы с радостью, но не могу." }] },
  "es7-oi": { titulo: "Le и les — одна форма для «вы»", texto: "**le** — и «ему», и «ей», и «вам» (usted): **Le escribo mañana** может значить «напишу ему / ей / вам». Если непонятно, добавляют: **a él**, **a ella**, **a usted**.", ejemplos: [{ es: "Le escribo a usted mañana.", ru: "Я напишу вам завтра." }] },
  "es7-a-ana-le": { titulo: "Почему два раза?", texto: "**A Ana le escribo** — «Ане» сказано два раза: **a Ana** и **le**. По-испански это нормально и даже нужно: **le** почти всегда стоит, а **a Ana** уточняет, кому. Без **le** («A Ana escribo») звучит странно.", ejemplos: [{ es: "A mis padres les escribo cada semana.", ru: "Родителям я пишу каждую неделю." }] },
  "es7-como-gustar": { titulo: "Глагол — по вещи, а не по человеку", texto: "В **me interesan los libros** глагол согласуется с **los libros**, а не с **me**: **A nosotros nos interesa el cine** — ед. ч., потому что **el cine** одно. С инфинитивом — всегда ед. ч.: **Me encanta bailar y cantar**.", ejemplos: [{ es: "Nos interesa el cine.", ru: "Нас интересует кино." }] },
  "es7-parecer": { titulo: "Parecer без me", texto: "Без местоимения **parecer** значит «казаться, выглядеть»: **Parece cansado** — он выглядит усталым. С местоимением — мнение: **Me parece caro** — по-моему, дорого.", ejemplos: [{ es: "Pablo parece cansado.", ru: "Пабло выглядит усталым." }] },
  "es7-tambien-tampoco": { titulo: "Yo no / yo sí", texto: "Если ты **не согласен**: на «Me gusta» — **A mí no**; на «No me gusta» — **A mí sí**. На «Tengo coche» — **Yo no**; на «No tengo coche» — **Yo sí**.", ejemplos: [{ es: "—No me gusta el fútbol. —A mí sí.", ru: "— Мне не нравится футбол. — А мне нравится." }] },
  "es7-opinion": { titulo: "Creo que no", texto: "Короткий ответ: **Creo que sí** — думаю, да; **Creo que no** — думаю, нет. Не согласен вежливо: **No sé, yo creo que…**", ejemplos: [{ es: "—¿Viene Pablo? —Creo que no.", ru: "— Пабло придёт? — Думаю, нет." }] },
  "es7-mas-que": { titulo: "Más de + число", texto: "С числом — **más de**, а не **más que**: **Tengo más de veinte libros** — у меня больше двадцати книг. **más que** — при сравнении двух вещей: **Tengo más libros que tú**.", ejemplos: [{ es: "Tengo más de veinte libros.", ru: "У меня больше двадцати книг." }] },
  "es7-tan-como": { titulo: "Tan / tanto", texto: "**tan** — перед прилагательным или наречием: **tan alto**, **tan rápido**. **tanto, tanta, tantos, tantas** — перед существительным, согласуется с ним: **tantas tiendas como**. После глагола — **tanto**: **Trabajo tanto como tú**.", ejemplos: [{ es: "No tengo tanto tiempo como tú.", ru: "У меня нет столько времени, сколько у тебя." }] },
  "es7-porque": { titulo: "Por qué и porque", texto: "Вопрос — **¿por qué?** (два слова, со знаком); ответ — **porque** (одно слово, без знака).", ejemplos: [{ es: "¿Por qué no vienes? — Porque estoy cansado.", ru: "Почему ты не идёшь? — Потому что я устал." }] },
  "es7-conocer": { titulo: "Conocer или saber?", texto: "**conocer** — быть знакомым с человеком, местом: **Conozco a Pablo**, **Conozco Madrid**. **saber** — знать факт или уметь: **Sé dónde vive**, **Sé nadar**.", ejemplos: [{ es: "Conozco Madrid, pero no sé dónde está el museo.", ru: "Я знаю Мадрид, но не знаю, где музей." }] },
  "es7-llevarse": { titulo: "Llevarse bien и caer bien", texto: "**Me cae bien Pablo** — мне нравится Пабло (как человек). **Me llevo bien con Pablo** — у нас хорошие отношения (мы оба ладим). Первое — моё впечатление, второе — наши отношения.", ejemplos: [{ es: "Me llevo muy bien con mi hermana.", ru: "Я очень хорошо лажу с сестрой." }] },
  "es7-mensaje": { titulo: "Как закончить сообщение", texto: "Друзьям: **Un beso**, **Besos**, **Un abrazo**. Мужчины между собой чаще пишут **Un abrazo**.", ejemplos: [{ es: "Hasta mañana. Un abrazo.", ru: "До завтра. Обнимаю." }] }
};
UNIDAD_ES_7.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES7_MAS[s.id] && !s.mas) s.mas = ES7_MAS[s.id]; }));

const ES7_NAT = [
  ["¿Quedamos el viernes?", ["¿Nos quedamos el viernes para el cine?", "¿Quedamos en viernes?"], "Договориться — **quedar**; день — с **el**.", 1, "es7-quedar"],
  ["¿Te apetece ir al cine?", ["¿Tú apeteces ir al cine?", "¿Te apeteces ir al cine?"], "**apetecer** — как gustar: **te apetece**.", 1, "es7-proponer"],
  ["¿Vienes conmigo?", ["¿Vienes con mí?", "¿Vienes con yo?"], "**conmigo** — одно слово.", 1, "es7-libre"],
  ["Le escribo a Lucía.", ["Lo escribo a Lucía.", "Escribo le a Lucía."], "Кому — **le**, перед глаголом.", 3, "es7-oi"],
  ["A Ana le gusta el cine.", ["A Ana gusta el cine.", "Ana le gusta el cine."], "**A Ana le** gusta.", 3, "es7-a-ana-le"],
  ["Me interesan los libros.", ["Me interesa los libros.", "Yo intereso los libros."], "Глагол — по вещи: **interesan**.", 4, "es7-como-gustar"],
  ["¿Qué te parece Barcelona?", ["¿Qué tú pareces Barcelona?", "¿Cómo te parece Barcelona?"], "**¿Qué te parece…?**", 4, "es7-parecer"],
  ["Me cae bien tu hermano.", ["Caigo bien tu hermano.", "Me cae bueno tu hermano."], "**caer bien** — как gustar.", 4, "es7-caer-apetecer"],
  ["—No me gusta el café. —A mí tampoco.", ["—No me gusta el café. —A mí también no.", "—No me gusta el café. —Yo tampoco."], "На «no me gusta» — **a mí tampoco**.", 5, "es7-a-mi-tambien"],
  ["—Tengo hambre. —Yo también.", ["—Tengo hambre. —A mí también.", "—Tengo hambre. —Yo tampoco también."], "Обычный глагол — **yo también**.", 5, "es7-tambien-tampoco"],
  ["Pablo es más alto que Javier.", ["Pablo es más alto de Javier.", "Pablo es más alto como Javier."], "**más… que**.", 6, "es7-mas-que"],
  ["Este café es mejor.", ["Este café es más bueno.", "Este café es más mejor."], "**bueno** → **mejor**.", 6, "es7-mejor-peor"],
  ["Ana es tan alta como Lucía.", ["Ana es tan alta que Lucía.", "Ana es tanto alta como Lucía."], "**tan… como**.", 6, "es7-tan-como"],
  ["No vengo porque estoy cansado.", ["No vengo por qué estoy cansado.", "No vengo porqué estoy cansado."], "Ответ — **porque**.", 7, "es7-porque"],
  ["Me llevo bien con mis vecinos.", ["Me llevo bien a mis vecinos.", "Llevo bien con mis vecinos."], "**llevarse bien con**.", 8, "es7-llevarse"]
];
const ES7_POR = [
  ["A Ana le gusta el cine.", "Зачем «le», если уже есть «a Ana»?", "Le нужно почти всегда; a Ana уточняет", ["Это ошибка", "Le значит «его»"], "**A Ana le…**", 3, "es7-a-ana-le"],
  ["Le escribo a Pablo.", "Почему «le», а не «lo»?", "Кому? — le; кого? — lo", ["Потому что Пабло — мужчина", "Так говорят только в Испании"], "**escribir a alguien** — кому: **le**.", 3, "es7-le-lo"],
  ["Me encantan las películas.", "Почему «encantan» во мн. ч.?", "Глагол согласуется с «las películas»", ["Потому что «me» — мн. ч.", "Это ошибка"], "Как gustar.", 4, "es7-como-gustar"],
  ["—No tengo coche. —Yo tampoco.", "Почему «tampoco»?", "Согласие с отрицанием", ["Несогласие", "Вопрос"], "«Тоже не» — **tampoco**.", 5, "es7-tambien-tampoco"],
  ["—Me gusta el mar. —A mí también.", "Почему «a mí», а не «yo»?", "gustar говорит «мне», а не «я»", ["Так вежливее", "Это ошибка"], "Как gustar — **a mí**.", 5, "es7-a-mi-tambien"],
  ["Este café es mejor.", "Почему не «más bueno»?", "У bueno особая форма: mejor", ["Más bueno — тоже правильно всегда", "Mejor — это наречие"], "**bueno → mejor**.", 6, "es7-mejor-peor"],
  ["Ana es tan alta como Lucía.", "Почему «como», а не «que»?", "tan всегда идёт с como", ["que — только с числами", "como — вопрос"], "**tan… como**.", 6, "es7-tan-como"],
  ["Conozco a Pablo.", "Зачем «a» перед Pablo?", "Перед человеком-дополнением ставят a", ["Это направление", "Это ошибка"], "**conocer a** alguien.", 8, "es7-conocer"]
];
const ES7_OIDO = [
  ["Le escribo mañana.", "Послушай: какое местоимение?", "le", ["le", "lo", "les"], "**le** — кому (ед. ч.).", 3, "es7-oi"],
  ["Les explico el plan.", "Послушай: кому — одному или нескольким?", "Нескольким", ["Одному", "Нескольким"], "**les** — им.", 3, "es7-oi"],
  ["Me interesan.", "Послушай: интересует одно или несколько?", "Несколько", ["Одно", "Несколько"], "**interesan** — мн. ч.", 4, "es7-como-gustar"],
  ["A mí tampoco.", "Послушай: это согласие или несогласие?", "Согласие", ["Согласие", "Несогласие"], "**tampoco** — тоже не: согласие.", 5, "es7-a-mi-tambien"],
  ["A mí sí.", "Послушай: это согласие или несогласие?", "Несогласие", ["Согласие", "Несогласие"], "**a mí sí** — а мне да: несогласие.", 5, "es7-tambien-tampoco"],
  ["Es menos caro.", "Послушай: дороже или дешевле?", "Дешевле", ["Дороже", "Дешевле", "Так же"], "**menos caro** — дешевле.", 6, "es7-mas-que"],
  ["Es tan caro como el otro.", "Послушай: дороже, дешевле или так же?", "Так же", ["Дороже", "Дешевле", "Так же"], "**tan… como** — так же.", 6, "es7-tan-como"],
  ["Me cae bien.", "Послушай: нравится или нет?", "Нравится", ["Нравится", "Не нравится", "Падает"], "**caer bien** — нравиться (о человеке).", 4, "es7-caer-apetecer"]
];
const ES7_PAR = [
  ["Ты говоришь, что тебе нравится Пабло как человек.", "Me cae bien Pablo.", "Me gusta a Pablo.", "О человеке — **me cae bien**.", 4, "es7-caer-apetecer"],
  ["Ты говоришь, что вы с соседом хорошо ладите.", "Me llevo bien con mi vecino.", "Me cae bien con mi vecino.", "Отношения — **llevarse bien con**.", 8, "es7-llevarse"],
  ["Ты договариваешься встретиться с Лусией.", "He quedado con Lucía.", "Me he quedado con Lucía.", "Встреча — **quedar con**.", 1, "es7-quedar"],
  ["Ты говоришь, что останешься дома.", "Me quedo en casa.", "Quedo en casa.", "Остаться — **quedarse**.", 1, "es7-quedar"],
  ["Ты говоришь, что знаешь Мадрид.", "Conozco Madrid.", "Sé Madrid.", "Место — **conocer**.", 8, "es7-conocer"],
  ["Ты говоришь, что у тебя больше двадцати книг.", "Tengo más de veinte libros.", "Tengo más que veinte libros.", "С числом — **más de**.", 6, "es7-mas-que"]
];
const ES7_DESC = [
  ["me gusta · te gusta. А ему?", "le gusta", ["lo gusta", "se gusta"], "Кому — **le**.", 4, "es7-como-gustar"],
  ["nos gusta · os gusta. А им?", "les gusta", ["los gusta", "le gustan"], "Им — **les**.", 4, "es7-como-gustar"],
  ["alto → más alto · caro → más caro. А bueno?", "mejor", ["más bueno", "más mejor"], "**bueno → mejor**.", 6, "es7-mejor-peor"],
  ["alto → más alto · caro → más caro. А malo?", "peor", ["más malo", "menos"], "**malo → peor**.", 6, "es7-mejor-peor"],
  ["con + yo → conmigo. А con + tú?", "contigo", ["con tú", "conti"], "**contigo**.", 1, "es7-libre"]
];
const ES7_CAD = [
  ["Me gusta el cine.", [["Теперь: ему (a él).", "A él le gusta el cine."], ["Теперь: películas (las películas).", "A él le gustan las películas."]], 4, "es7-como-gustar"],
  ["Escribo un mensaje a Ana.", [["Замени «a Ana» местоимением.", "Le escribo un mensaje."], ["Теперь: им (a mis padres) — местоимением.", "Les escribo un mensaje."]], 3, "es7-oi"],
  ["Pablo es alto.", [["Сравни с Хавьером: Pablo больше (+).", "Pablo es más alto que Javier."], ["Теперь: так же (=).", "Pablo es tan alto como Javier."]], 6, "es7-tan-como"],
  ["Me interesa la música.", [["Теперь: нам (a nosotros).", "Nos interesa la música."], ["Теперь: los libros.", "Nos interesan los libros."]], 4, "es7-como-gustar"]
];
const ES7_DIAG = [
  ["A Juan gusta el fútbol.", "Не хватает le", ["Нужно gustan", "Нужно a mí"], "A Juan le gusta el fútbol.", 3, "es7-a-ana-le"],
  ["Me gusta los libros.", "Глагол — по вещи: gustan", ["Нужно le", "Не хватает a"], "Me gustan los libros.", 4, "es7-como-gustar"],
  ["Yo intereso la música.", "Нужно me interesa", ["Нужно más", "Нужно интересан"], "Me interesa la música.", 4, "es7-como-gustar"],
  ["Este café es más bueno.", "bueno → mejor", ["Нужно que", "Нужно tan"], "Este café es mejor.", 6, "es7-mejor-peor"],
  ["Yo también no.", "Нужно tampoco", ["Нужно a mí", "Нужно sí"], "Yo tampoco.", 5, "es7-tambien-tampoco"],
  ["¿Vienes con mí?", "con + mí → conmigo", ["Нужно a mí", "Нужно me"], "¿Vienes conmigo?", 1, "es7-libre"]
];
const ES7_DES = [
  ["A Ana le gusta mucho el cine", [["Кому нравится? (имя)", 1], ["Какое слово — местоимение «ей»?", 2], ["Что нравится?", 6]], 3, "es7-a-ana-le"],
  ["Pablo es más alto que Javier", [["Кто выше?", 0], ["Какое слово — «чем»?", 4]], 6, "es7-mas-que"]
];
/* Generados: la familia de gustar [quién, pronombre]; verbos; [objeto singular, objeto plural] */
const ES7_GUSTAR_P = [["a mí", "me"], ["a ti", "te"], ["a él", "le"], ["a ella", "le"], ["a nosotros", "nos"], ["a vosotros", "os"], ["a ellos", "les"], ["a mis padres", "les"]];
const ES7_GUSTAR_V = [["gustar", "gusta", "gustan"], ["encantar", "encanta", "encantan"], ["interesar", "interesa", "interesan"], ["molestar", "molesta", "molestan"], ["importar", "importa", "importan"]];
const ES7_GUSTAR_O = [["el cine", "las películas"], ["la música", "los libros"], ["el fútbol", "los perros"], ["el mar", "las fiestas"], ["el dinero", "los coches"]];
const ES7_OI_ESC = [
  ["Escribo un mensaje a Ana.", "Le escribo un mensaje."], ["Explico el plan a mis amigos.", "Les explico el plan."], ["Doy un regalo a Marta.", "Le doy un regalo."],
  ["Mando una foto a mis padres.", "Les mando una foto."], ["Doy las llaves a Pablo.", "Le doy las llaves."], ["Enseño la casa a mis amigos.", "Les enseño la casa."],
  ["Contesto a Lucía mañana.", "Le contesto mañana."], ["Compro un libro a mi hermano.", "Le compro un libro."], ["Pregunto la hora a un señor.", "Le pregunto la hora."], ["Escribo una carta a mis abuelos.", "Les escribo una carta."]
];
function es7Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES7-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES7_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES7_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES7_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oi-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES7_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES7_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("de-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES7_CAD.forEach(([base, pasos, mod, regla], i) => P("cad-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES7_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES7_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* La familia de gustar: cada verbo con cada persona, una vez en singular y otra en plural */
  ES7_GUSTAR_V.forEach(([inf, sg, pl], v) => ES7_GUSTAR_P.forEach(([quien, pr], k) => {
    const o = ES7_GUSTAR_O[(v + k) % ES7_GUSTAR_O.length], plural = (v + k) % 2 === 1, obj = plural ? o[1] : o[0], f = pr + " " + (plural ? pl : sg);
    const frase = quien.charAt(0).toUpperCase() + quien.slice(1) + " ___ " + obj + ".";
    P("gf-" + inf + "-" + k, "gustar-forma", "escribir", 4, "es7-como-gustar", { grupo: "gf-" + inf + "-" + pr, lex: lex(inf), pide: "Впиши «" + inf + "» с местоимением.", grande: frase,
      esperadas: [f, frase.replace("___", f)], idioma: "es", foco: true, formaCasi: false, completa: frase.replace("___", f), oir: frase.replace("___", f),
      explicacion: "**" + quien + " → " + pr + "**; " + (plural ? "**" + obj + "** — мн. ч.: **" + pl + "**." : "**" + obj + "** — ед. ч.: **" + sg + "**.") });
  }));
  ES7_OI_ESC.forEach(([fr, ok], i) => P("oe-" + i, "oi-escribir", "escribir", 3, "es7-oi", { dificultad: 3, pide: "Замени, кому, местоимением (le / les) и напиши фразу.", grande: fr,
    esperadas: [ok], idioma: "es", foco: true, formaCasi: false, oir: ok, explicacion: "**" + ok + "**" }));
}
Object.assign(ES7_MEZCLA, { natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, "gustar-forma": 2, "oi-escribir": 1 });
