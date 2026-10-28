/* ============================================================
   DATA-UNIDAD-ES-1.JS — Abecé · Урок 1: Испанский с нуля
   (El español desde cero). Entrega 1, 28/10/2026.
   ------------------------------------------------------------
   Contenido propio de la unidad: módulos, teoría (en ruso, borrador
   para Iván), qué letras entran en cada grupo, pares y ejemplos. Las
   letras (nombre, sonido, errores, consejos, palabras) viven en
   data-alfabeto-es.js (ALFABETO_ES) y las palabras en el léxico español:
   acá solo se las nombra por ID. El programa: claude/PROGRAMA_ABECE.md §2.

   Misma estructura que data-unidad-1.js de Azbuka (ver su cabecera),
   con los campos de Abecé:
     · tituloEs en lugar de tituloRu (el título en la lengua que se aprende);
     · ejemplos { es, ru, por, lex? }: es = la frase en español, ru = la traducción;
     · pares { letras, a, b } con IDs del léxico español (ESP-…);
     · palabras: IDs del léxico español.
   Módulos 9 a 12 (saludos, presentarse y números, evaluación y proyecto):
   «pronto» hasta que Manu apruebe el vocabulario de la U1.
   ============================================================ */

const UNIDAD_ES_1 = {
  id: 1,
  titulo: "Испанский с нуля",
  tituloEs: "El español desde cero",
  objetivo: "Читать вслух любое испанское слово, узнавать все буквы и сочетания, ставить ударение, здороваться, представляться и называть слово по буквам.",
  tiempo: "3–4 недели ежедневной практики (примерно 15–20 часов)",
  modulos: [
    {
      id: "es1m1", n: 1, tipo: "intro",
      titulo: "Перед началом",
      resumen: "Латинский алфавит, чтение и знак ударения.",
      secciones: [
        {
          titulo: "Латинский алфавит",
          texto: "В испанском алфавите **27 букв**. Почти все ты уже видел в английском, в математике или на вывесках, но читаются они по-своему. Есть одна буква, которой нет ни в английском, ни в русском: **ñ** (как «нь» в слове «няня»). Кроме того, есть пять **сочетаний букв**, которые читаются как один звук: **ch, ll, rr, qu, gu**.",
          destacado: "Шесть букв выглядят и звучат почти как русские (A, E, K, M, O, T). Ещё шесть только выглядят как русские, а звучат иначе (B, C, H, P, X, Y) — это самые коварные. Остальные — новые."
        },
        {
          id: "es1-como-se-escribe",
          titulo: "Как пишется, так и читается",
          texto: "Испанский — один из самых «честных» языков: почти каждая буква всегда читается одинаково. Правил чтения немного, и, когда ты их выучишь, сможешь прочитать вслух любое слово, даже незнакомое. В русском «молоко» читается «малако», а в испанском так не бывает: что написано, то и звучит.",
          ejemplos: [
            { es: "Barcelona", ru: "Барселона", por: "Все гласные звучат ясно: **бар-сэ-ло́-на**, а не «барсилона»." },
            { es: "mañana", ru: "завтра; утро", por: "Три **a**, и все одинаковые: **ма-ня́-на**." }
          ]
        },
        {
          id: "es1-tilde-intro",
          titulo: "Ударение и знак ударения",
          texto: "В каждом испанском слове один слог ударный. Иногда над гласной стоит знак ударения — **tilde** (´): **café**, **árbol**, **teléfono**. В отличие от русского, где знак ударения — просто подсказка, в испанском **tilde — часть написания**. Если её забыть, это ошибка, а иногда и другое слово: **tú** — «ты», **tu** — «твой».",
          ojo: "В упражнениях Abecé пропущенная tilde — это «Почти». А если из-за неё получается другое слово, а именно это и проверяется, — «Неверно»."
        },
        {
          titulo: "Произношение кириллицей",
          texto: "Под испанскими словами ты увидишь, как они звучат, кириллицей: **hola** — **о́ла**, **gracias** — **гра́сиас**. Это подсказка для первых уроков, а не правило: некоторых испанских звуков в русском нет. Например, **z** и **c** перед **e, i** в Испании звучат как английское **th**, а кириллицей пишутся просто «с». Точное звучание показывает **IPA** в словаре. Подсказку можно выключить в «Настройках».",
          truco: "Всегда слушай слово (▶) и повторяй вслух: кириллица помогает начать, но ухо учит лучше."
        },
        {
          id: "es1-teclado",
          titulo: "Испанская клавиатура в телефоне",
          texto: "Чтобы писать по-испански, добавь испанскую клавиатуру. На iPhone: **Настройки → Основные → Клавиатура → Клавиатуры → Новые клавиатуры → Испанский (Испания)**. На ней есть **ñ**, а гласные со знаком ударения (**á, é, í, ó, ú**) появляются, если подержать палец на букве. Перевёрнутые знаки **¿** и **¡** — если подержать **?** и **!**.",
          ojo: "Знаки ¿ и ¡ в упражнениях не обязательны: приложение только напомнит о них. А вот tilde и ñ — обязательны."
        },
        {
          titulo: "Сколько времени",
          texto: "Урок рассчитан на 3–4 недели ежедневной практики, по 15–20 минут. Лучше понемногу каждый день, чем много раз в неделю: буквы и звуки запоминаются повторением."
        }
      ]
    },
    {
      id: "es1m2", n: 2, tipo: "letras",
      titulo: "Знакомые буквы",
      resumen: "Выглядят и звучат почти как русские.",
      letras: ["A", "E", "K", "M", "O", "T"],
      intro: "Эти шесть букв ты узнаешь сразу: они выглядят как русские **А, Е, К, М, О, Т** и звучат почти так же. Разница одна, но важная: испанские гласные **никогда не ослабевают**, даже без ударения.",
      secciones: [
        {
          id: "es1-e-dura",
          titulo: "E — это «э»",
          texto: "Испанская **e** звучит как русское **э**, и согласная перед ней остаётся твёрдой: **te** — **тэ**, **mete** — **мэ́тэ**. Русское «е» с мягкой согласной («те») здесь не подходит.",
          ejemplos: [
            { es: "té", ru: "чай", por: "**тэ**, а не «те»." },
            { es: "mesa", ru: "стол", por: "**мэ́са**: **m** перед **e** твёрдая." }
          ]
        },
        {
          id: "es1-o-clara",
          titulo: "O — всегда «о»",
          texto: "В русском безударное «о» звучит как «а»: «молоко» — «малако». В испанском **o** всегда звучит как **о**, с ударением и без. **todo** — **то́до**, а не «то́да».",
          ejemplos: [
            { es: "todo", ru: "всё", por: "Обе **o** — **о**." },
            { es: "ocho", ru: "восемь", por: "**о́чо**: последняя **o** ясная." }
          ],
          chequeo: [
            { pide: "Как звучит последняя **o** в слове **todo**?", opciones: ["как «о»", "как «а»"], ok: "как «о»", por: "В испанском гласные не ослабевают: **то́до**." }
          ]
        },
        {
          titulo: "K — редкая гостья",
          texto: "**k** звучит как **к**, но встречается почти только в заимствованиях: **kilo**, **kilómetro**, **vodka**. Обычно звук **к** пишется буквой **c** (casa) или сочетанием **qu** (queso) — это ты увидишь дальше."
        }
      ]
    },
    {
      id: "es1m3", n: 3, tipo: "letras",
      titulo: "Ложные друзья",
      resumen: "Выглядят как русские, но звучат иначе.",
      letras: ["B", "C", "H", "P", "X", "Y"],
      intro: "Самые коварные буквы: глаз узнаёт русскую букву, а звук другой. **B** — это не «в», **H** — не «н», **P** — не «р», **C** — не «с», **X** — не «х», **Y** — не «у». Читай медленно, пока не привыкнешь.",
      secciones: [
        {
          id: "es1-falsas",
          titulo: "Шесть ловушек",
          texto: "**B** = **б** (bueno — **буэ́но**). **C** = **к** перед a, o, u (casa — **ка́са**). **H** не читается (hola — **о́ла**). **P** = **п** (padre — **па́дрэ**). **X** = **кс** (taxi — **та́кси**). **Y** = **й** перед гласной (yo — **йо**).",
          errores: [
            { mal: "hola — «нола»", bien: "hola", por: "**H** — не «н»: она вообще не читается. **о́ла**." },
            { mal: "padre — «радрэ»", bien: "padre", por: "**P** — это **п**: **па́дрэ**." },
            { mal: "bueno — «вуэно»", bien: "bueno", por: "**B** — это **б**: **буэ́но**." }
          ],
          chequeo: [
            { pide: "Как читается **pero**?", opciones: ["пэ́ро", "рэ́ро"], ok: "пэ́ро", por: "**P** — это **п**." },
            { pide: "Как читается **hoy**?", opciones: ["ой", "хой", "ной"], ok: "ой", por: "**H** не читается, а **y** в конце — как **й**." }
          ]
        },
        {
          id: "es1-c-dos",
          titulo: "C читается по-разному",
          texto: "Перед **a, o, u** и согласными **c** — это **к**: **casa**, **cuatro**, **clase**. Перед **e, i** — межзубный звук, как английское **th** в «think»: **cena**, **cine**. Кириллицей он пишется «с» (**сэ́на**), но язык нужно слегка зажать между зубами.",
          ejemplos: [
            { es: "casa", ru: "дом", por: "**ca** — **ка**." },
            { es: "cine", ru: "кино", por: "**ci** — межзубный звук + **и**." }
          ]
        }
      ]
    },
    {
      id: "es1m4", n: 4, tipo: "letras",
      titulo: "Новые буквы",
      resumen: "Буквы, которых нет в русском, и ñ.",
      letras: ["D", "F", "G", "I", "J", "L", "N", "Ñ", "Q", "R", "S", "U", "V", "W", "Z"],
      intro: "Этих букв нет в русском алфавите, но многие из них ты знаешь по английскому. Будь внимателен к четырём: **j** (сильное **х**), **g** (то **г**, то **х**), **v** (звучит как **б**!) и **z** (межзубный звук). А **ñ** — это просто **нь**.",
      secciones: [
        {
          id: "es1-g-j",
          titulo: "G и J",
          texto: "**j** всегда звучит как **х**, только сильнее, из горла: **joven** — **хо́бэн**. **g** перед **a, o, u** — это **г** (gato), а перед **e, i** — тоже **х** (gente — **хэ́нтэ**, página — **па́хина**).",
          ejemplos: [
            { es: "gato", ru: "кот", por: "**ga** — **га**." },
            { es: "gente", ru: "люди", por: "**ge** — **хэ**." }
          ]
        },
        {
          id: "es1-v-b",
          titulo: "V звучит как B",
          texto: "В испанском **v** и **b** звучат **одинаково** — как **б**: **vino** — **би́но**, **vaso** — **ба́со**. Русского «в» в испанском нет совсем. Как писать — через **b** или **v**, — нужно просто запомнить.",
          ojo: "Не говори «вино» с русским **в**: это самая частая ошибка русскоговорящих."
        },
        {
          titulo: "Ñ и N",
          texto: "**n** — обычное **н**. **ñ** — это **нь**, как в «няня»: **año** — **а́ньо**, **España** — **эспа́ня**. Чёрточка над буквой обязательна: **año** — «год», а **ano** — совсем другое слово."
        },
        {
          titulo: "Q и U",
          texto: "**q** встречается только в сочетаниях **que**, **qui**, и **u** в них не читается: **queso** — **кэ́со**, **aquí** — **аки́**. В остальных словах **u** — обычное **у**: **uno**, **mucho**."
        }
      ]
    },
    {
      id: "es1m5", n: 5, tipo: "letras",
      titulo: "Сочетания букв",
      resumen: "Две буквы — один звук: ch, ll, rr, qu, gu.",
      letras: ["CH", "LL", "RR", "QU", "GU"],
      intro: "Пять пар букв читаются как один звук. **ch** — **ч**, **ll** — **й** (не «ль»!), **rr** — раскатистое **рр**, **qu** — **к** перед e, i, **gu** — **г** перед e, i.",
      secciones: [
        {
          id: "es1-ll",
          titulo: "LL — это не «ль»",
          texto: "Кажется, что **ll** — это двойное **л**, но звучит оно как **й**: **llamar** — **йама́р**, **calle** — **ка́йэ**, **ella** — **э́йа**. В большинстве районов Испании **ll** и **y** звучат одинаково.",
          errores: [
            { mal: "calle — «калле»", bien: "calle", por: "**ll** — это **й**: **ка́йэ**." }
          ]
        },
        {
          id: "es1-gue",
          titulo: "Немая u в gue, gui",
          texto: "Чтобы перед **e, i** звучало **г**, а не **х**, между ними пишут **u**, которая не читается: **guerra** — **гэ́рра**, **guitarra** — **гита́рра**. Если **u** нужно прочитать, над ней ставят две точки: **vergüenza** — **бэргуэ́нса**, **pingüino** — **пингуи́но**."
        }
      ]
    },
    {
      id: "es1m6", n: 6, tipo: "pronunciacion",
      titulo: "Чистые гласные",
      resumen: "a, e, i, o, u звучат ясно всегда.",
      intro: "Главная привычка, от которой нужно избавиться: в русском безударные гласные ослабевают («молоко» — «малако»). В испанском **пять гласных звучат одинаково ясно в любом месте слова**, с ударением и без. Это главное, что делает речь «испанской».",
      bloques: [
        {
          id: "es1-cinco-vocales",
          titulo: "Пять гласных",
          texto: "**a** — **а**, **e** — **э**, **i** — **и**, **o** — **о**, **u** — **у**. Других гласных звуков нет: ни «ы», ни мягкого «я», ни слабого «ъ».",
          palabras: ["ESP-00087", "ESP-00703", "ESP-00826", "ESP-00076"]
        },
        {
          id: "es1-no-reducir",
          titulo: "Без ударения — так же ясно",
          texto: "Произнеси каждую гласную полностью, даже последнюю: **casa** — **ка́са**, а не «ка́съ»; **bueno** — **буэ́но**, а не «буэ́на»; **leche** — **лэ́чэ**, а не «ле́чи».",
          destacado: "Безударная **o** не становится «а», безударная **e** не становится «и».",
          errores: [
            { mal: "bueno — «буэна»", bien: "bueno", por: "Последняя **o** — **о**." },
            { mal: "leche — «лечи»", bien: "leche", por: "Последняя **e** — **э**." }
          ]
        },
        {
          id: "es1-pares-vocales",
          titulo: "Слова, которые различает одна гласная",
          texto: "Если ослабить гласную, может получиться другое слово. Послушай пары:",
          pares: [
            { letras: "e · i", a: "ESP-00703", b: "ESP-03625" },
            { letras: "e · i", a: "ESP-01367", b: "ESP-00826" },
            { letras: "a · o", a: "ESP-00200", b: "ESP-01217" },
            { letras: "a · o", a: "ESP-00087", b: "ESP-00076" }
          ]
        },
        {
          id: "es1-diptongos",
          titulo: "Две гласные рядом",
          texto: "Когда **i** или **u** стоит рядом с другой гласной без ударения, они сливаются в один слог: **bueno** — **буэ́-но**, **bien** — **бьен**, **agua** — **а́-гуа**. Обе гласные слышны, но быстро, на одном дыхании.",
          palabras: ["ESP-00037", "ESP-00036"]
        }
      ]
    },
    {
      id: "es1m7", n: 7, tipo: "pronunciacion",
      titulo: "Звуки",
      resumen: "r и rr, немая h, b = v, z и c, ll и y.",
      intro: "Здесь собраны звуки, на которых русскоговорящие ошибаются чаще всего. В разделе «Алфавит и произношение» у каждого — ещё примеры и фразы.",
      bloques: [
        {
          id: "es1-blandura",
          titulo: "Не смягчай перед e, i",
          texto: "В русском согласная перед «е, и» смягчается: «те», «де», «ни». В испанском нет: **te** — **тэ**, **de** — **дэ**, **dinero** — **динэ́ро**.",
          palabras: ["ESP-01019", "ESP-00002"]
        },
        {
          id: "es1-r-rr",
          titulo: "R и RR",
          texto: "Одна **r** между гласными — один короткий удар языка, как в русском «р»: **pero** — **пэ́ро**. **rr** и **r** в начале слова — раскатистое **рр**, несколько ударов: **perro** — **пэ́рро**, **rojo** — **рро́хо**.",
          pares: [
            { letras: "r · rr", a: "ESP-00031", b: "ESP-00334" }
          ],
          ojo: "**pero** — «но», **perro** — «собака»: от одного удара языка меняется смысл."
        },
        {
          id: "es1-h",
          titulo: "Немая H",
          texto: "**h** не читается никогда: **hola** — **о́ла**, **hombre** — **о́мбрэ**, **ahora** — **ао́ра**. Поэтому **hola** («привет») и **ola** («волна») звучат одинаково. Писать **h** всё равно нужно.",
          palabras: ["ESP-00088", "ESP-02335"]
        },
        {
          id: "es1-bv",
          titulo: "B = V",
          texto: "**b** и **v** звучат одинаково — как **б**. Между гласными губы почти не смыкаются, и звук получается мягче: **beber** — **бэбэ́р**, **nuevo** — **нуэ́бо**.",
          palabras: ["ESP-00717", "ESP-01830"]
        },
        {
          id: "es1-z-s",
          titulo: "Z и C перед e, i — это не S",
          texto: "В Испании **z** (перед любой гласной) и **c** перед **e, i** звучат как английское **th**: кончик языка между зубами. **s** — обычное **с**. Поэтому **casa** («дом») и **caza** («охота») звучат по-разному.",
          pares: [
            { letras: "s · z", a: "ESP-00087", b: "ESP-01983" }
          ],
          comparacion: "Звука **th** в русском нет. В Латинской Америке и на Канарах **z** и **c** звучат как **с** — это тоже правильно, просто по-другому."
        },
        {
          id: "es1-final",
          titulo: "Не оглушай в конце",
          texto: "В русском звонкая согласная в конце слова глохнет: «год» — «гот». В испанском нет: **d** в конце слова слабое, но не превращается в **т**: **usted** — **устэ́д**, **ciudad** — **сьуда́д**.",
          palabras: ["ESP-00084", "ESP-00298"]
        }
      ]
    },
    {
      id: "es1m8", n: 8, tipo: "reglas",
      titulo: "Ударение и знак ударения",
      resumen: "Слоги, ударный слог и когда пишется tilde.",
      intro: "В испанском ударение почти всегда видно по написанию. Если знака нет — работает простое правило. Если ударение стоит не там, куда указывает правило, пишется **tilde**. Проверить любое слово можно в «Лаборатории ударения» в разделе «Алфавит и произношение».",
      bloques: [
        {
          id: "es1-silabas",
          titulo: "Слоги",
          texto: "В каждом слоге одна гласная (или две слитые: **bue**, **bien**). Согласная между гласными отходит к следующему слогу: **ca-sa**, **me-sa**, **to-do**. Две согласные обычно делятся: **tar-de**, **gran-de**, но пары вроде **pr, bl, tr** не делятся: **li-bro**, **pa-dre**.",
          ejemplos: [
            { es: "ca·sa", ru: "дом", por: "Два слога.", lex: [] },
            { es: "te·lé·fo·no", ru: "телефон", por: "Четыре слога, ударение на втором.", lex: [] }
          ]
        },
        {
          id: "es1-regla-tonica",
          titulo: "Правило без знака",
          texto: "Если в слове нет знака ударения:\n· слово кончается на **гласную, -n или -s** → ударный **предпоследний** слог: **ca**sa, **jo**ven, **lu**nes;\n· слово кончается на **другую согласную** → ударный **последний** слог: ha**blar**, ciu**dad**, re**loj**.",
          destacado: "Знак ударения нужен только тогда, когда ударение нарушает это правило.",
          chequeo: [
            { pide: "Где ударение в слове **mesa**?", opciones: ["me", "sa"], ok: "me", por: "Кончается на гласную → предпоследний слог: **ME**·sa." },
            { pide: "Где ударение в слове **hablar**?", opciones: ["ha", "blar"], ok: "blar", por: "Кончается на **r** → последний слог: ha·**BLAR**." }
          ]
        },
        {
          id: "es1-cuando-tilde",
          titulo: "Когда пишется tilde",
          texto: "Знак ставится, когда ударение стоит **не там**, где его ждёт правило:\n· ударный последний слог, а слово кончается на гласную, -n, -s: **café**, **aquí**, **canción**;\n· ударный предпоследний слог, а слово кончается на другую согласную: **árbol**, **fácil**, **lápiz**;\n· ударение на третьем слоге от конца и дальше — **всегда**: **teléfono**, **página**, **México**.",
          errores: [
            { mal: "exámen", bien: "examen", por: "Кончается на **-n**, ударение на предпоследнем — это по правилу, знак не нужен." },
            { mal: "arbol", bien: "árbol", por: "Кончается на **l**, а ударение на предпоследнем — нужен знак." }
          ]
        },
        {
          id: "es1-diacritica",
          titulo: "Знак, который различает слова",
          texto: "Односложные слова обычно пишутся без знака. Но есть пары, где знак различает два разных слова:",
          ejemplos: [
            { es: "{tú} — {tu}", ru: "ты — твой", por: "**¿Tú eres Ana?** — «Ты Аня?»; **tu casa** — «твой дом»." },
            { es: "{él} — {el}", ru: "он — артикль", por: "**él** — «он»; **el** — артикль мужского рода." },
            { es: "{sí} — {si}", ru: "да — если", por: "**sí** — «да»; **si** — «если»." },
            { es: "{más} — {mas}", ru: "больше — но", por: "**más** — «больше, ещё»." },
            { es: "{té} — {te}", ru: "чай — тебя", por: "**té** — «чай»; **te** — «тебя, тебе»." },
            { es: "{mí} — {mi}", ru: "мне — мой", por: "**mí** — «мне» (после предлога); **mi** — «мой»." }
          ],
          ojo: "Вопросительные слова в вопросе тоже пишутся со знаком: **¿qué?**, **¿cómo?**, **¿dónde?**."
        },
        {
          id: "es1-signos",
          titulo: "¿ и ¡",
          texto: "Вопрос и восклицание в испанском открываются перевёрнутым знаком: **¿Cómo te llamas?**, **¡Hola!**. Так ещё до конца фразы видно, что это вопрос, и интонацию можно поднять сразу.",
          ejemplos: [
            { es: "¿Cómo te llamas?", ru: "Как тебя зовут?" },
            { es: "¡Hola!", ru: "Привет!" }
          ]
        },
        {
          id: "es1-mayusculas",
          titulo: "Заглавные буквы",
          texto: "С заглавной пишутся имена, фамилии, города и страны: **Ana**, **Madrid**, **España**. А **дни недели, месяцы, языки и национальности** — со строчной, как в русском: **lunes**, **enero**, **español**.",
          errores: [
            { mal: "Lunes", bien: "lunes", por: "Дни недели — со строчной (кроме начала фразы)." },
            { mal: "Español", bien: "español", por: "Языки и национальности — со строчной." }
          ]
        }
      ]
    },
    { id: "es1m9", n: 9, tipo: "pronto", titulo: "Здравствуйте!", resumen: "Приветствия, прощания и вежливость." },
    { id: "es1m10", n: 10, tipo: "pronto", titulo: "Знакомство и числа", resumen: "Me llamo…, по буквам и числа от 0 до 20." },
    { id: "es1m11", n: 11, tipo: "pronto", titulo: "Проверка урока", resumen: "Все темы урока." },
    { id: "es1m12", n: 12, tipo: "pronto", titulo: "Проект", resumen: "Представься вслух и назови имя по буквам." }
  ]
};

function unidadEs1Modulo(id) { return UNIDAD_ES_1.modulos.find(m => m.id === id) || null; }

/* ── Banco de ejercicios ──
   Sin ejercicios de traducir (PROGRAMA_ABECE.md §0): todo con audio, la
   letra, la palabra, el sonido y la tilde. ids «ES1-…» (no chocan con los
   de Azbuka). items para el semáforo: «abc-es:A» (la letra, como en
   Alfabeto) y «lex:ESP-…» (la palabra). */
function ejerciciosUnidadEs1() {
  const L = ALFABETO_ES, out = [];
  const U = UNIDAD_ES_1;
  const modDe = {};
  U.modulos.forEach(m => (m.letras || []).forEach(x => { modDe[x] = m.n; }));
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const otros = (lista, excluir, n, semilla) => baraja(lista.filter(x => excluir.indexOf(x) < 0), semilla).slice(0, n);
  const letraDe = x => L.find(l => l.upper === x);
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  /* El ID del léxico de una palabra (la primera entrada que no es nombre propio) */
  const idDe = w => { if (typeof LEXICON_ES === "undefined") return null; const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w); return e ? e.id : null; };
  const muestra = l => l.upper.length > 1 ? l.lower : l.upper + " " + l.lower;   /* «B b» · «ch» */
  const base = t => t.toLowerCase().replace(/[áä]/g, "a").replace(/[é]/g, "e").replace(/[íï]/g, "i").replace(/[ó]/g, "o").replace(/[úü]/g, "u");

  /* Las letras de una palabra (con los dígrafos) → el módulo en que ya se vieron todas */
  const DIG = [["ch", "CH"], ["ll", "LL"], ["rr", "RR"], ["qu", "QU"], ["gu", "GU"]];
  function moduloPalabra(w) {
    let s = base(w).replace(/ñ/g, "\u0001");
    let m = 2;
    DIG.forEach(([d, D]) => { if ((D === "GU" ? /gu[ei]/ : new RegExp(d)).test(s)) m = Math.max(m, modDe[D]); });
    s.replace(/ü/g, "u").split("").forEach(ch => {
      const up = ch === "\u0001" ? "Ñ" : ch.toUpperCase();
      if (modDe[up]) m = Math.max(m, modDe[up]);
    });
    return m;
  }

  /* Palabras de las letras (una vez cada una) */
  const palabras = [];
  L.forEach(l => l.words.forEach(w => {
    if (!w.lexId || palabras.some(p => p.id === w.lexId)) return;
    palabras.push({ id: w.lexId, es: w.es, tr: w.translit, sig: w.meaning, nota: w.note, letra: l, modulo: moduloPalabra(w.es) });
  }));

  /* 1. Escuchar el nombre de la letra y elegirla */
  L.forEach((l, i) => {
    const vistas = L.filter(x => modDe[x.upper] <= Math.max(modDe[l.upper], 3) && x.upper.length === l.upper.length);
    const mal = otros(vistas, [l], 3, i + 7).map(muestra);
    out.push({ id: "ES1-ae-" + l.upper, tipo: "audio-letra", forma: "elegir", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Послушай: какая это буква?", audio: l.name, opciones: baraja([muestra(l)].concat(mal), i + 3), correcta: muestra(l),
      explicacion: "Прозвучало **" + l.name + "** — это " + muestra(l) + ". " + l.pronunciation, recordar: l.details.tips });
  });

  /* 2. Ver la letra y elegir su nombre */
  L.filter(l => l.upper.length === 1).forEach((l, i) => {
    const vistas = L.filter(x => x.upper.length === 1 && modDe[x.upper] <= Math.max(modDe[l.upper], 3));
    const mal = otros(vistas, [l], 3, i + 41).map(x => x.name);
    out.push({ id: "ES1-nom-" + l.upper, tipo: "nombre-letra", forma: "elegir", dificultad: 2, modulo: modDe[l.upper], grupo: l.upper,
      pide: "Как называется эта буква?", grande: l.upper + " " + l.lower, opciones: baraja([l.name].concat(mal), i + 43), correcta: l.name, oir: l.name,
      explicacion: "Буква " + l.upper + " называется **" + l.name + "** (" + l.nameTl + ")." });
  });

  /* 3. Escuchar el nombre y escribir la letra */
  L.forEach(l => {
    out.push({ id: "ES1-el-" + l.upper, tipo: "escuchar-letra", forma: "escribir", dificultad: 2, modulo: modDe[l.upper], grupo: l.upper,
      pide: l.upper.length > 1 ? "Послушай и напиши эти две буквы." : "Послушай и напиши букву.", audio: l.name, esperadas: [l.lower], idioma: "es",
      explicacion: "Прозвучало **" + l.name + "**: " + muestra(l) + ".", recordar: l.details.tips });
  });

  /* 4. Verdadero o falso con audio */
  L.forEach((l, i) => {
    const otra = otros(L.filter(x => modDe[x.upper] <= Math.max(modDe[l.upper], 3) && x.upper.length === l.upper.length), [l], 1, i + 11)[0];
    out.push({ id: "ES1-vf-" + l.upper + "-v", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      audio: l.name, afirmacion: "Звучит " + muestra(l) + ".", verdadero: true,
      explicacion: "Правда: прозвучало **" + l.name + "**." });
    if (otra) out.push({ id: "ES1-vf-" + l.upper + "-f", tipo: "vf", forma: "vf", dificultad: 1, modulo: modDe[l.upper], grupo: l.upper,
      audio: otra.name, afirmacion: "Звучит " + muestra(l) + ".", verdadero: false,
      explicacion: "Неправда: прозвучало **" + otra.name + "** (" + muestra(otra) + "), а " + muestra(l) + " называется **" + l.name + "**." });
  });

  /* 5. Unir nombres con letras: grupos de 4 distintos */
  const usadosEm = new Set();
  U.modulos.filter(m => m.letras).forEach(m => {
    const anteriores = L.filter(l => modDe[l.upper] < m.n).map(l => l.upper);
    for (let k = 0; k < m.letras.length; k += 4) {
      let set = m.letras.slice(k, k + 4);
      if (set.length < 4) set = set.concat(baraja(anteriores, m.n * 13 + k).filter(x => set.indexOf(x) < 0).slice(0, 4 - set.length));
      if (set.length < 4) continue;
      const clave = set.slice().sort().join("");
      if (usadosEm.has(clave)) continue;
      usadosEm.add(clave);
      const ls = set.map(letraDe);
      out.push({ id: "ES1-em-" + clave, tipo: "unir", forma: "emparejar", dificultad: 1, modulo: m.n, grupo: "unir",
        pide: "Послушай каждое название и соедини его с буквой.", audioIzq: true, pares: ls.map(l => [l.name, muestra(l)]),
        explicacion: ls.map(l => muestra(l) + " — " + l.name).join(" · ") });
    }
  });

  /* 6–8. Palabras: dictado, completar la letra, ordenar */
  palabras.forEach((p, i) => {
    const dif = p.es.length <= 4 ? 0 : 1;
    const b = { modulo: p.modulo, grupo: p.id, lex: [p.id], oir: p.es };
    out.push(Object.assign({ id: "ES1-dic-" + p.id, tipo: "dictado", forma: "escribir", dificultad: 2 + dif,
      pide: "Послушай и напиши слово.", audio: p.es, esperadas: [p.es], idioma: "es",
      explicacion: "**" + p.es + "** (" + p.tr + ") — «" + p.sig + "».", recordar: p.nota }, b));
    /* la letra de la ficha, en la palabra (sin dígrafos partidos) */
    const l = p.letra, w = p.es;
    if (l.upper.length === 1 && w.length > 1) {
      const pos = base(w).indexOf(base(l.lower));
      const partido = pos >= 0 && DIG.some(([d]) => { const k = base(w).indexOf(d); return k >= 0 && (pos === k || pos === k + 1); });
      if (pos >= 0 && !partido) {
        const falta = w[pos];
        out.push(Object.assign({ id: "ES1-comp-" + p.id + "-" + l.upper, tipo: "completar", forma: "escribir", dificultad: 2,
          pide: "Впиши недостающую букву (или всё слово).", grande: w.slice(0, pos) + "_" + w.slice(pos + 1), audio: p.es, pista: p.sig,
          esperadas: [falta, w], idioma: "es", completa: w,
          explicacion: "Не хватает **" + falta + "**: " + w + " (" + p.tr + ").", recordar: p.nota }, b));
      }
    }
    if (w.length >= 3 && w.length <= 7 && !/\s/.test(w)) {
      let fichas = baraja(w.split(""), i + 23);
      if (fichas.join("") === w) fichas = fichas.slice(1).concat(fichas[0]);
      out.push(Object.assign({ id: "ES1-ord-" + p.id, tipo: "ordenar", forma: "ordenar", dificultad: 1 + dif,
        pide: "Собери слово, которое слышишь.", audio: p.es, fichas, esperada: w,
        explicacion: "**" + w + "** (" + p.tr + ") — «" + p.sig + "»." }, b));
    }
  });

  /* 9. Pares: escuchar y elegir la palabra (módulos 6 y 7) */
  [U.modulos.find(m => m.id === "es1m6"), U.modulos.find(m => m.id === "es1m7")].forEach(m => (m.bloques || []).filter(bq => bq.pares).forEach(bq => bq.pares.forEach(par => {
    [par.a, par.b].forEach((id, k) => {
      const e = lexEs(id), o = lexEs(k ? par.a : par.b);
      if (!e || !o) return;
      out.push({ id: "ES1-pm-" + id + "-" + (k ? par.a : par.b), tipo: "pares", forma: "elegir", dificultad: 2, modulo: m.n, regla: bq.id, grupo: "pm" + par.a + par.b, lex: [par.a, par.b],
        pide: "Послушай: какое это слово?", audio: e.es, opciones: [e.es, o.es].sort(), correcta: e.es,
        explicacion: "Прозвучало **" + e.es + "** (" + e.translit + ") — «" + e.senses[0].ru + "». Другое слово, **" + o.es + "**, — «" + o.senses[0].ru + "». Разница: " + par.letras + "." });
    });
  })));

  /* 10. Vocales puras: ¿qué vocal suena? (módulo 6) */
  ES1_VOCALES.forEach(([w, hueco, ok, mal], i) => {
    const id = idDe(w);
    out.push({ id: "ES1-voc-" + w, tipo: "vocal", forma: "elegir", dificultad: 2, modulo: 6, regla: "es1-no-reducir", grupo: "voc-" + w, lex: id ? [id] : undefined,
      pide: "Послушай: какая гласная пропущена?", grande: hueco, audio: w, opciones: baraja([ok, mal], i + 51), correcta: ok, oir: w,
      explicacion: "**" + w + "**: безударная гласная звучит ясно — **" + ok + "**, а не «" + mal + "»." });
  });

  /* 11. Ortografía de los sonidos: ¿cuál está bien escrita? (módulo 7) */
  ES1_ORTO.forEach(([w, mal, regla], i) => {
    const id = idDe(w);
    out.push({ id: "ES1-or-" + w, tipo: "ortografia", forma: "elegir", dificultad: 2, modulo: 7, regla: ES1_REGLA_ID[regla], grupo: "or-" + w, lex: id ? [id] : undefined,
      pide: "Послушай: как пишется это слово?", audio: w, opciones: baraja([w, mal], i + 31), correcta: w, oir: w,
      explicacion: "Пишется **" + w + "**. " + ES1_REGLAS[regla] });
  });

  /* 12–15. La tilde (módulo 8): tónica, tipo, ¿lleva tilde?, dictado con tilde */
  if (typeof tdSilabas === "function") {
    ES1_TONICA.forEach((w, i) => {
      const id = idDe(w), e = id && lexEs(id); if (!e) return;
      const sil = tdSilabas(e.es), t = tdTonica(e.es, sil);
      if (sil.length < 2) return;
      out.push({ id: "ES1-ton-" + e.es, tipo: "tonica", forma: "tocar", dificultad: 2, modulo: 8, regla: "es1-regla-tonica", grupo: "ton-" + e.es, lex: [id],
        pide: "Послушай и нажми на ударный слог.", audio: e.es, palabras: sil, correcta: t, oir: e.es,
        explicacion: sil.map((s, k) => k === t ? s.toUpperCase() : s).join("·") + ". " + (tdAnalizar(e.es).explica[0] || "") });
      const desde = sil.length - 1 - t;
      const TIPOS = ["последний слог", "предпоследний слог", "третий слог от конца"];
      if (desde <= 2) out.push({ id: "ES1-tipo-" + e.es, tipo: "tonica", forma: "elegir", dificultad: 3, modulo: 8, regla: "es1-cuando-tilde", grupo: "ton-" + e.es, lex: [id],
        pide: "Какой слог ударный в слове **" + e.es + "**?", grande: e.es, audio: e.es, audioManual: true, opciones: TIPOS, correcta: TIPOS[desde], oir: e.es,
        explicacion: sil.map((s, k) => k === t ? s.toUpperCase() : s).join("·") + ": ударный — " + TIPOS[desde] + "." });
    });
    ES1_TILDE.forEach(([w, mal], i) => {
      const id = idDe(w);
      const a = tdAnalizar(w);
      out.push({ id: "ES1-til-" + w, tipo: "tilde", forma: "elegir", dificultad: 2, modulo: 8, regla: "es1-cuando-tilde", grupo: "til-" + w, lex: id ? [id] : undefined,
        pide: "Послушай: как правильно пишется?", audio: w, opciones: baraja([w, mal], i + 71), correcta: w, oir: w,
        explicacion: "Пишется **" + w + "** (" + a.silabas.map((s, k) => k === a.tonica ? s.toUpperCase() : s).join("·") + "). " + (a.explica[0] || "") });
      out.push({ id: "ES1-tild-" + w, tipo: "dictado-tilde", forma: "escribir", dificultad: 3, modulo: 8, regla: "es1-cuando-tilde", grupo: "til-" + w, lex: id ? [id] : undefined,
        pide: "Послушай и напиши слово. Не забудь знак ударения, если он нужен.", audio: w, esperadas: [w], idioma: "es", foco: true, oir: w,
        explicacion: "**" + w + "** (" + a.silabas.map((s, k) => k === a.tonica ? s.toUpperCase() : s).join("·") + "). " + (a.explica[0] || "") });
    });
  }

  /* 16. Tilde que cambia la palabra, ¿ ¡ y mayúsculas (módulo 8) */
  ES1_FRASES.forEach(([pide, frase, ops, ok, exp, regla, w], i) => {
    const id = w ? idDe(w) : null;
    out.push({ id: "ES1-fr-" + i, tipo: "diacritica", forma: "elegir", dificultad: 2, modulo: 8, regla, grupo: "fr-" + regla + "-" + Math.floor(i / 2), lex: id ? [id] : undefined,
      pide, grande: frase, audio: frase.replace("___", ok).replace(/_+/g, ok), audioManual: true, opciones: baraja(ops, i + 91), correcta: ok,
      explicacion: exp });
  });

  /* Semáforo: qué letra o palabra practica cada ejercicio */
  out.forEach(ex => {
    if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id);
    else if (ex.tipo === "unir") ex.items = ex.pares.map(p => "abc-es:" + (p[1].length > 2 ? p[1].charAt(0) : p[1].toUpperCase()));
    else if (letraDe(ex.grupo || "")) ex.items = ["abc-es:" + ex.grupo];
  });
  return out;
}

/* ── Vocales puras: [palabra, hueco, vocal que suena, la que pondría un ruso] ── */
const ES1_VOCALES = [
  ["todo", "tod_", "o", "a"], ["bueno", "buen_", "o", "a"], ["ocho", "och_", "o", "a"],
  ["hola", "h_la", "o", "a"], ["noche", "noch_", "e", "i"], ["leche", "lech_", "e", "i"],
  ["madre", "madr_", "e", "i"], ["Barcelona", "Barc_lona", "e", "i"], ["pero", "per_", "o", "a"],
  ["tarde", "tard_", "e", "i"]
];

/* ── Ortografía de los sonidos: [bien, mal, regla] ── */
const ES1_REGLAS = {
  h: "**h** не читается, но пишется: это нужно запомнить.",
  bv: "**b** и **v** звучат одинаково, как **б**: написание нужно запомнить.",
  jg: "Перед **e, i** звук **х** пишется то **j**, то **g**: это нужно запомнить. Перед **a, o, u** — всегда **j**.",
  z: "В Испании **z** и **c** перед **e, i** — межзубный звук, а **s** — обычное **с**: на слух их можно различить.",
  ll: "**ll** и **y** перед гласной звучат одинаково, как **й**: написание нужно запомнить.",
  qu: "Звук **к** перед **e, i** пишется **qu** (u не читается), перед **a, o, u** — **c**.",
  gu: "Чтобы **g** перед **e, i** звучала как **г**, пишут **gu** (u не читается).",
  rr: "Раскатистое **рр** между гласными пишется **rr**; одна **r** — один короткий удар.",
  n: "**ñ** — это **нь**: чёрточка обязательна."
};
const ES1_REGLA_ID = { h: "es1-h", bv: "es1-bv", jg: "es1-g-j", z: "es1-z-s", ll: "es1-ll", qu: "es1-c-dos", gu: "es1-gue", rr: "es1-r-rr", n: "es1-z-s" };
const ES1_ORTO = [
  ["hombre", "ombre", "h"], ["hoy", "oy", "h"], ["ahora", "aora", "h"], ["hijo", "ijo", "h"],
  ["vino", "bino", "bv"], ["vaso", "baso", "bv"], ["nuevo", "nuebo", "bv"], ["libro", "livro", "bv"], ["beber", "veber", "bv"],
  ["gente", "jente", "jg"], ["página", "pájina", "jg"], ["joven", "goven", "jg"], ["ojo", "ogo", "jg"],
  ["azul", "asul", "z"], ["cerveza", "serbesa", "z"], ["zapato", "sapato", "z"],
  ["calle", "caye", "ll"], ["llamar", "yamar", "ll"], ["ella", "eya", "ll"],
  ["queso", "keso", "qu"], ["aquí", "akí", "qu"], ["quince", "kince", "qu"],
  ["guitarra", "gitarra", "gu"], ["guerra", "gerra", "gu"],
  ["perro", "pero", "rr"], ["tierra", "tiera", "rr"],
  ["año", "ano", "n"], ["niño", "nino", "n"]
];

/* ── Tónica: palabras del léxico ── */
const ES1_TONICA = ["casa", "mesa", "hablar", "ciudad", "reloj", "joven", "lunes", "examen", "árbol", "noche", "todo", "bueno", "mañana", "teléfono", "café"];

/* ── ¿Lleva tilde? [bien, mal] ── */
const ES1_TILDE = [
  ["café", "cafe"], ["árbol", "arbol"], ["fácil", "facil"], ["teléfono", "telefono"], ["página", "pagina"],
  ["aquí", "aqui"], ["México", "Mexico"], ["examen", "exámen"], ["joven", "jóven"],
  ["ciudad", "ciúdad"], ["lunes", "lúnes"], ["hablar", "háblar"], ["canción", "cancion"], ["lápiz", "lapiz"]
];

/* ── Tilde que cambia la palabra, ¿ ¡ y mayúsculas:
   [consigna, frase, opciones, correcta, explicación, regla, palabra del léxico?] ── */
const ES1_FRASES = [
  ["Что подходит? «Ты Аня?»", "¿___ eres Ana?", ["Tú", "Tu"], "Tú", "**tú** со знаком — «ты». **tu** без знака — «твой».", "es1-diacritica", "tú"],
  ["Что подходит? «Твой дом»", "___ casa", ["Tu", "Tú"], "Tu", "**tu** без знака — «твой». **tú** — «ты».", "es1-diacritica", "tu"],
  ["Что подходит? «Да, спасибо»", "___, gracias.", ["Sí", "Si"], "Sí", "**sí** со знаком — «да». **si** — «если».", "es1-diacritica", "sí"],
  ["Что подходит? «Он — Хавьер»", "___ es Javier.", ["Él", "El"], "Él", "**él** со знаком — «он». **el** — артикль.", "es1-diacritica", "él"],
  ["Что подходит? «Чай»", "un ___", ["té", "te"], "té", "**té** со знаком — «чай». **te** — «тебя, тебе».", "es1-diacritica", "té"],
  ["Как правильно начинается вопрос?", "___ te llamas?", ["¿Cómo", "Cómo", "?Cómo"], "¿Cómo", "Вопрос открывается знаком **¿**, а вопросительное слово пишется со знаком ударения: **¿Cómo te llamas?**", "es1-signos", null],
  ["Как правильно?", "___ Hola!", ["¡", "!", "(ничего)"], "¡", "Восклицание открывается знаком **¡**: **¡Hola!**", "es1-signos", "hola"],
  ["Как правильно пишется «понедельник»?", "Hoy es ___.", ["lunes", "Lunes"], "lunes", "Дни недели пишутся со строчной буквы: **lunes**.", "es1-mayusculas", "lunes"],
  ["Как правильно пишется «испанский язык»?", "Hablo ___.", ["español", "Español"], "español", "Языки пишутся со строчной буквы: **español**.", "es1-mayusculas", "español"],
  ["Как правильно пишется «Мадрид»?", "Vivo en ___.", ["Madrid", "madrid"], "Madrid", "Города пишутся с заглавной: **Madrid**.", "es1-mayusculas", "Madrid"],
  ["Как правильно пишется «январь»?", "en ___", ["enero", "Enero"], "enero", "Месяцы пишутся со строчной буквы: **enero**.", "es1-mayusculas", "enero"]
];

/* Mezcla de la sesión */
const ES1_MEZCLA = { dictado: 3, "escuchar-letra": 2, completar: 2, ordenar: 2, "audio-letra": 1, "nombre-letra": 1, vf: 1, unir: 1,
  pares: 1, vocal: 2, ortografia: 2, tonica: 2, tilde: 2, "dictado-tilde": 2, diacritica: 2 };

window.UNIDAD_ES_1 = UNIDAD_ES_1;
window.unidadEs1Modulo = unidadEs1Modulo;
window.ejerciciosUnidadEs1 = ejerciciosUnidadEs1;
window.ES1_MEZCLA = ES1_MEZCLA;
