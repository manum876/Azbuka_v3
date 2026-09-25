/* ============================================================
   DATA-ALPHABET.JS — Fuente única del alfabeto cirílico
   Usado por: azbuka-1.html (sección "Alfabeto") y alfabeto.html
   (módulo independiente). Cargar ANTES del script propio de cada
   archivo: <script src="data-alphabet.js"></script>
   Expone: ALPHABET (33 letras) y generateQuizQuestion(letter, allLetters)
   Si corregís una nota de pronunciación o agregás una palabra de
   ejemplo, se edita UNA sola vez acá y se refleja en ambos módulos.
   Transliteración (24/09/2026): sigue la Parte B de CONVENCION_IPA.md,
   la pronunciación figurada en español (х = j, щ = sch, й = i). La de
   cada palabra de ejemplo es la misma del léxico (campo translit de su
   lexId): si cambia allá, hay que copiarla acá.
   Actualizado el 25/09/2026 (Unidad 1): 5 palabras por letra (165);
   se quitaron журна́л de Ю y рабо́та de П, que no tenían esa letra;
   textos en español rioplatense (voseo) y corrección de notas con
   errores (ensordecimiento de муж y всё, acento de идти́, etc.).
   ============================================================ */

const ALPHABET=[
  {
    "id": 1,
    "upper": "А",
    "lower": "а",
    "name": "А",
    "translit": "a",
    "pronunciation": "Como la 'a' española en 'casa'",
    "sounds": [
      "a"
    ],
    "details": {
      "description": "Vocal abierta central, idéntica a la 'a' española.",
      "similar": "Exactamente como la 'a' en 'casa', 'amor', 'agua'.",
      "mistakes": "Los hispanohablantes no suelen tener problemas con esta letra. El error más común es pronunciarla demasiado breve en sílabas átonas, donde en ruso se relaja ligeramente.",
      "tips": "En sílabas sin acento, la А se pronuncia un poco más cerrada, casi como una 'a' corta. En sílabas tónicas es siempre clara y abierta.",
      "similar_letters": "No se confunde fácilmente. Visualmente puede parecerse a la A latina, que aquí tiene el mismo sonido."
    },
    "words": [
      {
        "cyrillic": "аптека",
        "translit": "aptiéka",
        "meaning": "farmacia",
        "note": "А inicial, sonido abierto y claro",
        "lexId": "CMR-05404"
      },
      {
        "cyrillic": "август",
        "translit": "ávgust",
        "meaning": "agosto",
        "note": "А tónica al inicio",
        "lexId": "CMR-01348"
      },
      {
        "cyrillic": "арбуз",
        "translit": "arbús",
        "meaning": "sandía",
        "note": "А inicial enfatizada",
        "lexId": "CMR-05405"
      },
      {
        "cyrillic": "алфавит",
        "translit": "alfavít",
        "meaning": "alfabeto",
        "note": "А aparece dos veces; la primera es tónica",
        "lexId": "CMR-05406"
      },
      {
        "cyrillic": "надо",
        "translit": "náda",
        "meaning": "hay que",
        "note": "Primera А tónica; la final, átona y más breve",
        "lexId": "CMR-00091"
      }
    ]
  },
  {
    "id": 2,
    "upper": "Б",
    "lower": "б",
    "name": "Бэ",
    "translit": "b",
    "pronunciation": "Como la 'b' española en 'boca'",
    "sounds": [
      "b"
    ],
    "details": {
      "description": "Consonante oclusiva bilabial sonora. Igual que la 'b' española cuando va al inicio de sílaba.",
      "similar": "Como la 'b' de 'barco', 'bota', 'bueno'.",
      "mistakes": "En ruso la Б se pronuncia siempre oclusiva (con cierre total de labios), nunca fricativa como la 'b' suave española entre vocales.",
      "tips": "Pensá siempre en una 'b' fuerte de inicio de palabra. Al final de palabra o ante consonante sorda, se ensordece y suena como 'п' (p).",
      "similar_letters": "Б vs В: Б es labial (labios), В es labiodental (labio-diente)."
    },
    "words": [
      {
        "cyrillic": "банан",
        "translit": "banán",
        "meaning": "banana",
        "note": "Б inicial fuerte y clara",
        "lexId": "CMR-05407"
      },
      {
        "cyrillic": "брат",
        "translit": "brat",
        "meaning": "hermano",
        "note": "Б ante r, sonido oclusivo limpio",
        "lexId": "CMR-00542"
      },
      {
        "cyrillic": "библиотека",
        "translit": "bibliatiéka",
        "meaning": "biblioteca",
        "note": "Б aparece dos veces, ambas sonoras",
        "lexId": "CMR-02059"
      },
      {
        "cyrillic": "большой",
        "translit": "balshói",
        "meaning": "grande",
        "note": "Б inicial seguida de vocal 'o'",
        "lexId": "CMR-00096"
      },
      {
        "cyrillic": "зуб",
        "translit": "zup",
        "meaning": "diente",
        "note": "Б al final se ensordece: suena 'zup'",
        "lexId": "CMR-01032"
      }
    ]
  },
  {
    "id": 3,
    "upper": "В",
    "lower": "в",
    "name": "Вэ",
    "translit": "v",
    "pronunciation": "Como la 'v' inglesa o la 'f' con voz",
    "sounds": [
      "v"
    ],
    "details": {
      "description": "Consonante fricativa labiodental sonora. Se pronuncia igual que la 'v' del inglés o italiano.",
      "similar": "El labio inferior toca los dientes superiores, como al decir 'v' en inglés 'very'.",
      "mistakes": "El hispanohablante tiende a pronunciarla como 'b' española. Son sonidos distintos: la В es fricativa, no oclusiva.",
      "tips": "Poné el labio inferior contra los dientes superiores y hacé vibrar las cuerdas vocales. Al final de palabra se ensordece: suena como 'ф' (f).",
      "similar_letters": "В vs Б: В es labiodental fricativa, Б es bilabial oclusiva."
    },
    "words": [
      {
        "cyrillic": "вода",
        "translit": "vadá",
        "meaning": "agua",
        "note": "В inicial fricativa, no oclusiva",
        "lexId": "CMR-00191"
      },
      {
        "cyrillic": "всё",
        "translit": "fsio",
        "meaning": "todo",
        "note": "В ante consonante sorda: se ensordece y suena 'f' (fsio)",
        "lexId": "CMR-05455"
      },
      {
        "cyrillic": "вечер",
        "translit": "viéchir",
        "meaning": "tarde/noche",
        "note": "В ante vocal frontal 'e'",
        "lexId": "CMR-00295"
      },
      {
        "cyrillic": "врач",
        "translit": "vrach",
        "meaning": "médico",
        "note": "В ante 'р', grupo consonántico",
        "lexId": "CMR-00653"
      },
      {
        "cyrillic": "голова",
        "translit": "galavá",
        "meaning": "cabeza",
        "note": "В entre vocales; las О átonas suenan 'a' (galavá)",
        "lexId": "CMR-00132"
      }
    ]
  },
  {
    "id": 4,
    "upper": "Г",
    "lower": "г",
    "name": "Гэ",
    "translit": "g",
    "pronunciation": "Como la 'g' española en 'gato'",
    "sounds": [
      "g"
    ],
    "details": {
      "description": "Consonante oclusiva velar sonora. Igual que la 'g' española fuerte.",
      "similar": "Como la 'g' de 'gato', 'grande'. Siempre oclusiva, nunca fricativa.",
      "mistakes": "En español la 'g' ante 'e' o 'i' se suaviza mucho. En ruso, la Г es siempre oclusiva y fuerte, independientemente de la vocal que sigue.",
      "tips": "La Г rusa es como la 'g' de 'gustar'. En la terminación -ого/-его se pronuncia como V (peculiaridad histórica).",
      "similar_letters": "Г vs К: Г es sonora, К es sorda. Mismo punto de articulación."
    },
    "words": [
      {
        "cyrillic": "город",
        "translit": "górat",
        "meaning": "ciudad",
        "note": "Г inicial oclusiva fuerte",
        "lexId": "CMR-00156"
      },
      {
        "cyrillic": "газета",
        "translit": "gazéta",
        "meaning": "periódico",
        "note": "Г ante 'а', sonido claro",
        "lexId": "CMR-00449"
      },
      {
        "cyrillic": "голос",
        "translit": "gólas",
        "meaning": "voz",
        "note": "Г inicial, seguida de 'o'",
        "lexId": "CMR-00221"
      },
      {
        "cyrillic": "говорить",
        "translit": "gavarít",
        "meaning": "hablar",
        "note": "Г en inicio, forma verbal clave",
        "lexId": "CMR-00058"
      },
      {
        "cyrillic": "сегодня",
        "translit": "sivódnia",
        "meaning": "hoy",
        "note": "Excepción: acá la Г suena 'v' (sivódnia)",
        "lexId": "CMR-00202"
      }
    ]
  },
  {
    "id": 5,
    "upper": "Д",
    "lower": "д",
    "name": "Дэ",
    "translit": "d",
    "pronunciation": "Como la 'd' española en 'dama'",
    "sounds": [
      "d"
    ],
    "details": {
      "description": "Consonante oclusiva alveolar sonora. Similar a la 'd' española inicial.",
      "similar": "Como la 'd' de 'dar', 'dedo'. Pero en ruso siempre es más tensa.",
      "mistakes": "La 'd' española entre vocales se relaja mucho (casi como 'th' inglesa). La Д rusa es siempre oclusiva, incluso entre vocales.",
      "tips": "Pronunciala siempre con cierre total de la lengua contra los alvéolos. Al final de palabra o ante sorda, se ensordece a 'т'.",
      "similar_letters": "Д vs Т: mismo punto, Д es sonora, Т es sorda."
    },
    "words": [
      {
        "cyrillic": "дом",
        "translit": "dom",
        "meaning": "casa",
        "note": "Д inicial breve y clara",
        "lexId": "CMR-00118"
      },
      {
        "cyrillic": "день",
        "translit": "dien",
        "meaning": "día",
        "note": "Д palatalizada ante 'е'",
        "lexId": "CMR-00071"
      },
      {
        "cyrillic": "дорога",
        "translit": "daróga",
        "meaning": "camino",
        "note": "Д inicial ante 'о'",
        "lexId": "CMR-00300"
      },
      {
        "cyrillic": "друг",
        "translit": "druk",
        "meaning": "amigo",
        "note": "Д ante grupo consonántico 'р'",
        "lexId": "CMR-00106"
      },
      {
        "cyrillic": "год",
        "translit": "got",
        "meaning": "año",
        "note": "Д al final se ensordece: suena 'got'",
        "lexId": "CMR-00028"
      }
    ]
  },
  {
    "id": 6,
    "upper": "Е",
    "lower": "е",
    "name": "Е",
    "translit": "ye",
    "pronunciation": "Como 'ye' en 'yerba' o 'e' después de consonante",
    "sounds": [
      "ye",
      "e"
    ],
    "details": {
      "description": "Vocal que representa dos sonidos: 'йэ' al inicio de sílaba o después de vocal, y 'э' palataliza la consonante anterior cuando va después de consonante.",
      "similar": "Al inicio: como 'ye' en 'yema'. Tras consonante: la consonante se palataliza y suena 'e'.",
      "mistakes": "El error común es pronunciarla siempre como 'ye'. Tras consonante, la Е no añade una 'y' separada: palataliza la consonante y suena 'e'.",
      "tips": "Regla práctica: ¿Va al inicio de palabra o tras vocal? → 'ye'. ¿Va tras consonante? → la consonante se suaviza y suena 'e'.",
      "similar_letters": "Е vs Э: Е palataliza y puede sonar 'ye'; Э es siempre 'e' pura sin palatalización."
    },
    "words": [
      {
        "cyrillic": "если",
        "translit": "yésli",
        "meaning": "si (condicional)",
        "note": "Е inicial → 'ye'",
        "lexId": "CMR-00053"
      },
      {
        "cyrillic": "лес",
        "translit": "lies",
        "meaning": "bosque",
        "note": "Е palataliza la 'л' anterior",
        "lexId": "CMR-00512"
      },
      {
        "cyrillic": "небо",
        "translit": "niéba",
        "meaning": "cielo",
        "note": "Е tras 'н', la palataliza",
        "lexId": "CMR-00600"
      },
      {
        "cyrillic": "есть",
        "translit": "yest",
        "meaning": "hay / comer",
        "note": "Е inicial con sonido 'ye'",
        "lexId": "CMR-01290"
      },
      {
        "cyrillic": "уже",
        "translit": "uzhé",
        "meaning": "ya",
        "note": "Е final tónica; tras Ж suena 'e' (uzhé)",
        "lexId": "CMR-00050"
      }
    ]
  },
  {
    "id": 7,
    "upper": "Ё",
    "lower": "ё",
    "name": "Ё",
    "translit": "yo",
    "pronunciation": "Como 'yo' en 'yogur'",
    "sounds": [
      "yo"
    ],
    "details": {
      "description": "Vocal que suena 'йо'. Siempre va en sílaba tónica. En textos modernos a veces se escribe sin diéresis (igual que Е).",
      "similar": "Exactamente como 'yo' en 'yodo', 'yogur'.",
      "mistakes": "En textos sin diéresis puede confundirse con Е. Siempre es tónica y siempre suena 'yo'.",
      "tips": "La Ё siempre lleva acento. Si ves la diéresis, sabés que esa sílaba es la tónica de la palabra.",
      "similar_letters": "Ё vs Е: Ё es siempre 'yo' y siempre tónica; Е puede ser 'ye' o 'e' y su acento varía."
    },
    "words": [
      {
        "cyrillic": "ёж",
        "translit": "yosh",
        "meaning": "erizo",
        "note": "Ё inicial siempre acentuada",
        "lexId": "CMR-05408"
      },
      {
        "cyrillic": "её",
        "translit": "yiyó",
        "meaning": "su / la (pron.)",
        "note": "Ё en posición tónica",
        "lexId": "CMR-00072"
      },
      {
        "cyrillic": "всё",
        "translit": "fsio",
        "meaning": "todo",
        "note": "Ё siempre tónica aquí",
        "lexId": "CMR-05455"
      },
      {
        "cyrillic": "мёд",
        "translit": "miot",
        "meaning": "miel",
        "note": "Ё palataliza la 'м' anterior",
        "lexId": "CMR-05409"
      },
      {
        "cyrillic": "ребёнок",
        "translit": "ribiónak",
        "meaning": "niño, niña",
        "note": "Ё en medio: siempre es la sílaba tónica",
        "lexId": "CMR-00137"
      }
    ]
  },
  {
    "id": 8,
    "upper": "Ж",
    "lower": "ж",
    "name": "Жэ",
    "translit": "zh",
    "pronunciation": "Como la 'y' argentina en '¡yo!' o la 'g' francesa",
    "sounds": [
      "zh"
    ],
    "details": {
      "description": "Consonante fricativa postalveolar sonora. El sonido de la 'j' francesa o la 'y' rioplatense fuerte.",
      "similar": "Como la 'g' de 'jambon' en francés, o la 'zh' en 'zhivago'. También como la 'y' argentina de '¡yo!' enfatizado.",
      "mistakes": "Los hispanohablantes tienden a pronunciarla como la 'j' española (aspirada). La Ж es fricativa sonora, no aspirada.",
      "tips": "Poné la lengua en la misma posición que para 'sh', pero hacé vibrar las cuerdas vocales. La Ж nunca se palataliza aunque le siga 'i' o 'e'.",
      "similar_letters": "Ж vs Ш: Ж es sonora, Ш es sorda. Mismo punto de articulación."
    },
    "words": [
      {
        "cyrillic": "журнал",
        "translit": "zhurnál",
        "meaning": "revista",
        "note": "Ж inicial fricativa sonora",
        "lexId": "CMR-00699"
      },
      {
        "cyrillic": "жизнь",
        "translit": "zhizn",
        "meaning": "vida",
        "note": "Ж siempre dura aunque le siga 'и'",
        "lexId": "CMR-00066"
      },
      {
        "cyrillic": "муж",
        "translit": "mush",
        "meaning": "marido",
        "note": "Ж al final se ensordece: suena como Ш (mush)",
        "lexId": "CMR-00397"
      },
      {
        "cyrillic": "ужин",
        "translit": "úzhin",
        "meaning": "cena",
        "note": "Ж en posición intervocálica",
        "lexId": "CMR-03030"
      },
      {
        "cyrillic": "жена",
        "translit": "zhiná",
        "meaning": "esposa",
        "note": "Ж ante Е: sigue dura (zhiná)",
        "lexId": "CMR-00255"
      }
    ]
  },
  {
    "id": 9,
    "upper": "З",
    "lower": "з",
    "name": "Зэ",
    "translit": "z",
    "pronunciation": "Como la 'z' o 's' sonora en 'mismo'",
    "sounds": [
      "z"
    ],
    "details": {
      "description": "Consonante fricativa alveolar sonora. Como la 's' sonora del inglés en 'zero' o la 'z' italiana.",
      "similar": "Como la 's' en 'mismo' (donde la 's' vibra antes de 'm'), o la 'z' en 'zona' del italiano.",
      "mistakes": "En español la 'z' es dental sorda. La З rusa es alveolar sonora, como la 's' sonora del inglés.",
      "tips": "Imaginá el sonido de una abeja: 'zzz'. Al final de palabra se ensordece: suena como С (s).",
      "similar_letters": "З vs С: З es sonora, С es sorda. Mismo punto de articulación."
    },
    "words": [
      {
        "cyrillic": "земля",
        "translit": "zimliá",
        "meaning": "tierra",
        "note": "З inicial sonora ante 'е'",
        "lexId": "CMR-00184"
      },
      {
        "cyrillic": "завтра",
        "translit": "záftra",
        "meaning": "mañana",
        "note": "З inicial ante 'а'",
        "lexId": "CMR-00865"
      },
      {
        "cyrillic": "зима",
        "translit": "zimá",
        "meaning": "invierno",
        "note": "З inicial ante 'и'",
        "lexId": "CMR-01147"
      },
      {
        "cyrillic": "газета",
        "translit": "gazéta",
        "meaning": "periódico",
        "note": "З intervocálica sonora",
        "lexId": "CMR-00449"
      },
      {
        "cyrillic": "глаз",
        "translit": "glas",
        "meaning": "ojo",
        "note": "З al final se ensordece: suena 'glas'",
        "lexId": "CMR-00110"
      }
    ]
  },
  {
    "id": 10,
    "upper": "И",
    "lower": "и",
    "name": "И",
    "translit": "i",
    "pronunciation": "Como la 'i' española en 'isla'",
    "sounds": [
      "i"
    ],
    "details": {
      "description": "Vocal anterior cerrada. Idéntica a la 'i' española.",
      "similar": "Como la 'i' de 'isla', 'libro', 'iglesia'.",
      "mistakes": "Pocos problemas para hispanohablantes. Tras Ж, Ш, Ц, la И se pronuncia ligeramente más central, casi como Ы.",
      "tips": "Tras las consonantes Ж, Ш y Ц ortográficamente se escribe И pero fonéticamente suena más como Ы. Regla práctica: pronunciá la И normal en todos los demás casos.",
      "similar_letters": "И vs Й: И es vocal pura; Й es semivocal (como 'y' en 'yema'). И vs Ы: И es frontal y clara; Ы es central y más cerrada."
    },
    "words": [
      {
        "cyrillic": "имя",
        "translit": "ímia",
        "meaning": "nombre",
        "note": "И inicial, vocal clara",
        "lexId": "CMR-00239"
      },
      {
        "cyrillic": "идти",
        "translit": "ittí",
        "meaning": "ir (a pie)",
        "note": "И inicial átona; la tónica es la última (ittí)",
        "lexId": "CMR-00095"
      },
      {
        "cyrillic": "книга",
        "translit": "kníga",
        "meaning": "libro",
        "note": "И en sílaba tónica interior",
        "lexId": "CMR-00230"
      },
      {
        "cyrillic": "писать",
        "translit": "pisát",
        "meaning": "escribir",
        "note": "И ante sílaba tónica",
        "lexId": "CMR-00213"
      },
      {
        "cyrillic": "мир",
        "translit": "mir",
        "meaning": "mundo; paz",
        "note": "И tónica en una palabra de una sílaba",
        "lexId": "CMR-00128"
      }
    ]
  },
  {
    "id": 11,
    "upper": "Й",
    "lower": "й",
    "name": "И краткое",
    "translit": "i",
    "pronunciation": "Como la 'y' en 'yema' o la 'i' en 'aire'",
    "sounds": [
      "i"
    ],
    "details": {
      "description": "Semivocal palatal. Sonido de deslizamiento, nunca forma sílaba sola.",
      "similar": "Como la 'y' de 'yema', 'yerba'. O como la 'i' de 'aire', 'peine' (no silábica).",
      "mistakes": "No es una vocal plena: no puede formar sílaba sola. No la pronuncies como una 'i' larga.",
      "tips": "Se usa en diptongos y al inicio de palabras préstamo. Pensala como una i muy breve, que se desliza hacia la vocal de al lado.",
      "similar_letters": "Й vs И: И es vocal silábica; Й es semivocal, no forma sílaba. Й es el componente vocálico de sonidos como ай, ей, ой."
    },
    "words": [
      {
        "cyrillic": "йогурт",
        "translit": "yógurt",
        "meaning": "yogur",
        "note": "Й inicial semivocal ante 'о'",
        "lexId": "CMR-05410"
      },
      {
        "cyrillic": "чай",
        "translit": "chai",
        "meaning": "té",
        "note": "Й final en diptongo 'ай'",
        "lexId": "CMR-01136"
      },
      {
        "cyrillic": "мой",
        "translit": "moi",
        "meaning": "mi (pron.)",
        "note": "Й final en diptongo 'ой'",
        "lexId": "CMR-00060"
      },
      {
        "cyrillic": "майор",
        "translit": "mayór",
        "meaning": "mayor (rango)",
        "note": "Й en diptongo interior",
        "lexId": "CMR-02052"
      },
      {
        "cyrillic": "русский",
        "translit": "rússkii",
        "meaning": "ruso",
        "note": "Й en la terminación -ий: casi no se oye",
        "lexId": "CMR-00173"
      }
    ]
  },
  {
    "id": 12,
    "upper": "К",
    "lower": "к",
    "name": "Ка",
    "translit": "k",
    "pronunciation": "Como la 'c' española en 'casa' o la 'k' en 'kilo'",
    "sounds": [
      "k"
    ],
    "details": {
      "description": "Consonante oclusiva velar sorda. Igual que la 'k' o la 'c' fuerte española.",
      "similar": "Como la 'c' de 'casa', 'color'. O la 'k' de 'kilómetro'.",
      "mistakes": "En ruso ante 'е' e 'и', la К puede palatalizarse ligeramente: suena casi como 'ki', 'ke', pero con la lengua más adelantada.",
      "tips": "La К es siempre sorda. Ante vocales palatales se adelanta el punto de articulación.",
      "similar_letters": "К vs Г: К sorda, Г sonora. К vs X: К es oclusiva (cierre total), X es fricativa (fricción)."
    },
    "words": [
      {
        "cyrillic": "кот",
        "translit": "kot",
        "meaning": "gato",
        "note": "К inicial ante 'о'",
        "lexId": "CMR-02793"
      },
      {
        "cyrillic": "книга",
        "translit": "kníga",
        "meaning": "libro",
        "note": "К en grupo consonántico 'кн'",
        "lexId": "CMR-00230"
      },
      {
        "cyrillic": "когда",
        "translit": "kagdá",
        "meaning": "cuando",
        "note": "К inicial ante 'о'",
        "lexId": "CMR-00055"
      },
      {
        "cyrillic": "красный",
        "translit": "krásnyi",
        "meaning": "rojo",
        "note": "К en grupo inicial 'кр'",
        "lexId": "CMR-00442"
      },
      {
        "cyrillic": "так",
        "translit": "tak",
        "meaning": "así, tan",
        "note": "К al final: siempre sorda y clara",
        "lexId": "CMR-00030"
      }
    ]
  },
  {
    "id": 13,
    "upper": "Л",
    "lower": "л",
    "name": "Эл",
    "translit": "l",
    "pronunciation": "Como la 'l' española, pero hay dos variantes: dura y suave",
    "sounds": [
      "l",
      "ly"
    ],
    "details": {
      "description": "Tiene dos variantes: Л dura (velarizada, como la 'l' final inglesa en 'full') y Л suave (palatalizada, como la 'll' española suave).",
      "similar": "Л dura: similar a la 'l' de 'ball' en inglés. Л suave: similar a 'lli' en 'millón'.",
      "mistakes": "El hispanohablante tiende a usar siempre la misma 'l'. En ruso, antes de vocales palatales (е, и, ё, я, ю) se palataliza.",
      "tips": "Ante Е, И, Ё, Я, Ю o signo blando (ь): Л suave. En los demás casos: Л dura. La diferencia es importante para el significado.",
      "similar_letters": "Л vs Р: л es lateral, р es vibrante. Л dura vs suave: cambio de significado en muchas palabras."
    },
    "words": [
      {
        "cyrillic": "луна",
        "translit": "luná",
        "meaning": "luna",
        "note": "Л dura ante 'у'",
        "lexId": "CMR-02525"
      },
      {
        "cyrillic": "лес",
        "translit": "lies",
        "meaning": "bosque",
        "note": "Л suave ante 'е'",
        "lexId": "CMR-00512"
      },
      {
        "cyrillic": "стол",
        "translit": "stol",
        "meaning": "mesa",
        "note": "Л dura al final",
        "lexId": "CMR-00237"
      },
      {
        "cyrillic": "любовь",
        "translit": "liubóf",
        "meaning": "amor",
        "note": "Л suave ante 'ю'",
        "lexId": "CMR-00307"
      },
      {
        "cyrillic": "делать",
        "translit": "diélat",
        "meaning": "hacer",
        "note": "Л dura en medio de la palabra",
        "lexId": "CMR-00134"
      }
    ]
  },
  {
    "id": 14,
    "upper": "М",
    "lower": "м",
    "name": "Эм",
    "translit": "m",
    "pronunciation": "Como la 'm' española en 'madre'",
    "sounds": [
      "m"
    ],
    "details": {
      "description": "Consonante nasal bilabial. Idéntica a la 'm' española.",
      "similar": "Como la 'm' de 'madre', 'mano', 'mundo'.",
      "mistakes": "Sin dificultades para hispanohablantes. Tené en cuenta que ante vocales palatales se palataliza ligeramente.",
      "tips": "М ante Е, И, Ё, Я, Ю se pronuncia palatalizada (suavizada). Es un cambio sutil pero existe.",
      "similar_letters": "М vs Н: М es bilabial, Н es alveolar. Ambas son nasales."
    },
    "words": [
      {
        "cyrillic": "мама",
        "translit": "máma",
        "meaning": "mamá",
        "note": "М inicial y media, clara",
        "lexId": "CMR-00309"
      },
      {
        "cyrillic": "море",
        "translit": "móri",
        "meaning": "mar",
        "note": "М inicial ante 'о'",
        "lexId": "CMR-00720"
      },
      {
        "cyrillic": "метро",
        "translit": "mitró",
        "meaning": "metro",
        "note": "М suave ante 'е'",
        "lexId": "CMR-02395"
      },
      {
        "cyrillic": "музыка",
        "translit": "múzyka",
        "meaning": "música",
        "note": "М inicial ante 'у'",
        "lexId": "CMR-00639"
      },
      {
        "cyrillic": "потом",
        "translit": "patóm",
        "meaning": "después, luego",
        "note": "М al final; la primera О, átona, suena 'a' (patóm)",
        "lexId": "CMR-00090"
      }
    ]
  },
  {
    "id": 15,
    "upper": "Н",
    "lower": "н",
    "name": "Эн",
    "translit": "n",
    "pronunciation": "Como la 'n' española en 'nada'",
    "sounds": [
      "n"
    ],
    "details": {
      "description": "Consonante nasal alveolar. Idéntica a la 'n' española estándar.",
      "similar": "Como la 'n' de 'nada', 'noche', 'nombre'.",
      "mistakes": "Sin dificultades especiales. Ante vocales palatales se palataliza: Н suave suena como 'ñ' muy suave.",
      "tips": "Н suave (ante Е, И, Ё, Я, Ю o signo blando) es similar a la 'ñ' española pero más sutil.",
      "similar_letters": "Н vs М: Н es alveolar, М es bilabial. Н vs Ñ española: parecidas pero Н suave es más sutil."
    },
    "words": [
      {
        "cyrillic": "ночь",
        "translit": "noch",
        "meaning": "noche",
        "note": "Н inicial ante 'о'",
        "lexId": "CMR-00236"
      },
      {
        "cyrillic": "небо",
        "translit": "niéba",
        "meaning": "cielo",
        "note": "Н suave ante 'е'",
        "lexId": "CMR-00600"
      },
      {
        "cyrillic": "нет",
        "translit": "niet",
        "meaning": "no",
        "note": "Н suave, palabra muy frecuente",
        "lexId": "CMR-00107"
      },
      {
        "cyrillic": "новый",
        "translit": "nóvyi",
        "meaning": "nuevo",
        "note": "Н inicial ante 'о'",
        "lexId": "CMR-00073"
      },
      {
        "cyrillic": "очень",
        "translit": "óchin",
        "meaning": "muy",
        "note": "Н suave por la Ь: suena parecido a 'ñ'",
        "lexId": "CMR-00069"
      }
    ]
  },
  {
    "id": 16,
    "upper": "О",
    "lower": "о",
    "name": "О",
    "translit": "o",
    "pronunciation": "Como la 'o' española, pero solo cuando es tónica",
    "sounds": [
      "o",
      "a"
    ],
    "details": {
      "description": "Vocal media posterior. En sílaba tónica suena como 'o' española. En sílaba átona se reduce a sonido cercano a 'a'.",
      "similar": "Tónica: como la 'o' de 'sol'. Átona: como una 'a' corta o neutra.",
      "mistakes": "El gran error: pronunciar siempre como 'o' aunque la sílaba no sea tónica. En ruso átona la О se 'akan' (suena como А).",
      "tips": "Regla de 'аканье': О átona → se pronuncia А. Ejemplo: молоко (leche) → se pronuncia 'малако', no 'молоко'.",
      "similar_letters": "О vs А: en posición átona ambas pueden sonar parecido. О vs Ё: Ё siempre es tónica y suena 'yo'."
    },
    "words": [
      {
        "cyrillic": "окно",
        "translit": "aknó",
        "meaning": "ventana",
        "note": "Primera О átona → suena 'а'",
        "lexId": "CMR-00370"
      },
      {
        "cyrillic": "молоко",
        "translit": "malakó",
        "meaning": "leche",
        "note": "Solo la última О es tónica",
        "lexId": "CMR-02072"
      },
      {
        "cyrillic": "отец",
        "translit": "atiéts",
        "meaning": "padre",
        "note": "О inicial átona → 'а'",
        "lexId": "CMR-00192"
      },
      {
        "cyrillic": "город",
        "translit": "górat",
        "meaning": "ciudad",
        "note": "Segunda О átona → 'а'",
        "lexId": "CMR-00156"
      },
      {
        "cyrillic": "можно",
        "translit": "mózhna",
        "meaning": "se puede",
        "note": "О tónica suena 'o'; la final, átona, suena 'a' (mózhna)",
        "lexId": "CMR-00082"
      }
    ]
  },
  {
    "id": 17,
    "upper": "П",
    "lower": "п",
    "name": "Пэ",
    "translit": "p",
    "pronunciation": "Como la 'p' española en 'padre'",
    "sounds": [
      "p"
    ],
    "details": {
      "description": "Consonante oclusiva bilabial sorda. Igual que la 'p' española pero sin aspiración.",
      "similar": "Como la 'p' de 'padre', 'pan', 'pueblo'.",
      "mistakes": "En inglés la 'p' inicial se aspira. En ruso, como en español, no hay aspiración.",
      "tips": "П es la sorda equivalente de Б. Fácil para hispanohablantes.",
      "similar_letters": "П vs Б: П sorda, Б sonora. П vs Ф: П es oclusiva, Ф es fricativa."
    },
    "words": [
      {
        "cyrillic": "папа",
        "translit": "pápa",
        "meaning": "papá",
        "note": "П inicial clara y sin aspiración",
        "lexId": "CMR-00826"
      },
      {
        "cyrillic": "письмо",
        "translit": "pismó",
        "meaning": "carta",
        "note": "П suave ante 'и'",
        "lexId": "CMR-00333"
      },
      {
        "cyrillic": "помощь",
        "translit": "pómasch",
        "meaning": "ayuda",
        "note": "П inicial ante 'о'",
        "lexId": "CMR-00338"
      },
      {
        "cyrillic": "погода",
        "translit": "pagóda",
        "meaning": "clima, tiempo",
        "note": "П inicial; la primera О, átona, suena 'a' (pagóda)",
        "lexId": "CMR-02268"
      },
      {
        "cyrillic": "суп",
        "translit": "sup",
        "meaning": "sopa",
        "note": "П al final, siempre sorda",
        "lexId": "CMR-03922"
      }
    ]
  },
  {
    "id": 18,
    "upper": "Р",
    "lower": "р",
    "name": "Эр",
    "translit": "r",
    "pronunciation": "Como la 'rr' española en 'perro', vibrantísima",
    "sounds": [
      "r"
    ],
    "details": {
      "description": "Consonante vibrante alveolar múltiple. Como la 'rr' española de 'perro', siempre vibrante.",
      "similar": "Como la 'rr' de 'carro', 'perro'. Nunca como la 'r' suave de 'pero'.",
      "mistakes": "Los hispanohablantes tienden a usar la 'r' suave a veces. En ruso, la Р siempre es vibrante, incluso en posición intervocálica.",
      "tips": "Pensá siempre en la 'rr' de 'perro'. La Р rusa nunca se relaja.",
      "similar_letters": "Р vs Л: Р es vibrante, Л es lateral. Confundidas por hablantes de otras lenguas pero no por hispanohablantes."
    },
    "words": [
      {
        "cyrillic": "река",
        "translit": "riká",
        "meaning": "río",
        "note": "Р inicial, siempre vibrante",
        "lexId": "CMR-00916"
      },
      {
        "cyrillic": "работа",
        "translit": "rabóta",
        "meaning": "trabajo",
        "note": "Р inicial ante 'а'",
        "lexId": "CMR-00087"
      },
      {
        "cyrillic": "рука",
        "translit": "ruká",
        "meaning": "mano",
        "note": "Р inicial ante 'у'",
        "lexId": "CMR-00074"
      },
      {
        "cyrillic": "красный",
        "translit": "krásnyi",
        "meaning": "rojo",
        "note": "Р en grupo consonántico",
        "lexId": "CMR-00442"
      },
      {
        "cyrillic": "театр",
        "translit": "tiátr",
        "meaning": "teatro",
        "note": "Р al final, después de consonante: sigue vibrante",
        "lexId": "CMR-00330"
      }
    ]
  },
  {
    "id": 19,
    "upper": "С",
    "lower": "с",
    "name": "Эс",
    "translit": "s",
    "pronunciation": "Como la 's' española en 'sol'",
    "sounds": [
      "s"
    ],
    "details": {
      "description": "Consonante fricativa alveolar sorda. Igual que la 's' española.",
      "similar": "Como la 's' de 'sol', 'casa', 'silla'.",
      "mistakes": "Sin dificultades. Ante vocal palatal se palataliza ligeramente.",
      "tips": "С es la sorda equivalente de З. Siempre sorda, nunca se sonoriza sola, pero sí asimila a consonante sonora siguiente.",
      "similar_letters": "С vs З: С sorda, З sonora. С vs Ш: С es alveolar, Ш es postalveolar."
    },
    "words": [
      {
        "cyrillic": "сон",
        "translit": "son",
        "meaning": "sueño",
        "note": "С inicial clara",
        "lexId": "CMR-00769"
      },
      {
        "cyrillic": "слово",
        "translit": "slóva",
        "meaning": "palabra",
        "note": "С en grupo consonántico 'сл'",
        "lexId": "CMR-00094"
      },
      {
        "cyrillic": "страна",
        "translit": "straná",
        "meaning": "país",
        "note": "С en grupo 'стр'",
        "lexId": "CMR-00125"
      },
      {
        "cyrillic": "сестра",
        "translit": "sistrá",
        "meaning": "hermana",
        "note": "С suave ante 'е'",
        "lexId": "CMR-00982"
      },
      {
        "cyrillic": "нос",
        "translit": "nos",
        "meaning": "nariz",
        "note": "С al final, siempre sorda",
        "lexId": "CMR-00863"
      }
    ]
  },
  {
    "id": 20,
    "upper": "Т",
    "lower": "т",
    "name": "Тэ",
    "translit": "t",
    "pronunciation": "Como la 't' española en 'toro'",
    "sounds": [
      "t"
    ],
    "details": {
      "description": "Consonante oclusiva alveolar sorda. Igual que la 't' española pero sin aspiración.",
      "similar": "Como la 't' de 'toro', 'tierra'. Dental, sin aspiración.",
      "mistakes": "En inglés la 't' inicial se aspira. En ruso, como en español, no.",
      "tips": "Т es la sorda equivalente de Д. Fácil para hispanohablantes.",
      "similar_letters": "Т vs Д: Т sorda, Д sonora."
    },
    "words": [
      {
        "cyrillic": "там",
        "translit": "tam",
        "meaning": "allí",
        "note": "Т inicial clara",
        "lexId": "CMR-00080"
      },
      {
        "cyrillic": "тут",
        "translit": "tut",
        "meaning": "aquí",
        "note": "Т inicial y final",
        "lexId": "CMR-00103"
      },
      {
        "cyrillic": "телефон",
        "translit": "tilifón",
        "meaning": "teléfono",
        "note": "Т suave ante 'е'",
        "lexId": "CMR-00676"
      },
      {
        "cyrillic": "три",
        "translit": "tri",
        "meaning": "tres",
        "note": "Т en grupo 'тр'",
        "lexId": "CMR-00150"
      },
      {
        "cyrillic": "место",
        "translit": "miésta",
        "meaning": "lugar",
        "note": "Т en el grupo 'ст', en medio de la palabra",
        "lexId": "CMR-00098"
      }
    ]
  },
  {
    "id": 21,
    "upper": "У",
    "lower": "у",
    "name": "У",
    "translit": "u",
    "pronunciation": "Como la 'u' española en 'luna'",
    "sounds": [
      "u"
    ],
    "details": {
      "description": "Vocal posterior cerrada. Idéntica a la 'u' española.",
      "similar": "Como la 'u' de 'luna', 'uva', 'único'.",
      "mistakes": "Sin dificultades para hispanohablantes. La У nunca se reduce en posición átona (a diferencia de О).",
      "tips": "La У siempre se pronuncia como 'u' clara, incluso sin acento. Esto la diferencia de О.",
      "similar_letters": "У vs О: У siempre clara; О se reduce en átona. У vs Ю: У dura, Ю palataliza la consonante anterior."
    },
    "words": [
      {
        "cyrillic": "улица",
        "translit": "úlitsa",
        "meaning": "calle",
        "note": "У inicial tónica",
        "lexId": "CMR-00292"
      },
      {
        "cyrillic": "утро",
        "translit": "útra",
        "meaning": "mañana",
        "note": "У inicial tónica",
        "lexId": "CMR-00336"
      },
      {
        "cyrillic": "рука",
        "translit": "ruká",
        "meaning": "mano",
        "note": "У en sílaba tónica",
        "lexId": "CMR-00074"
      },
      {
        "cyrillic": "слушать",
        "translit": "slúshat",
        "meaning": "escuchar",
        "note": "У en sílaba tónica",
        "lexId": "CMR-00445"
      },
      {
        "cyrillic": "почему",
        "translit": "pachimú",
        "meaning": "por qué",
        "note": "У final tónica",
        "lexId": "CMR-00179"
      }
    ]
  },
  {
    "id": 22,
    "upper": "Ф",
    "lower": "ф",
    "name": "Эф",
    "translit": "f",
    "pronunciation": "Como la 'f' española en 'foto'",
    "sounds": [
      "f"
    ],
    "details": {
      "description": "Consonante fricativa labiodental sorda. Igual que la 'f' española.",
      "similar": "Como la 'f' de 'foto', 'fácil', 'fuerte'.",
      "mistakes": "Sin dificultades. Ф es la sorda equivalente de В.",
      "tips": "Ф aparece principalmente en palabras de origen extranjero. En palabras rusas nativas es poco frecuente.",
      "similar_letters": "Ф vs В: Ф sorda, В sonora. Ambas labiodentales fricativas."
    },
    "words": [
      {
        "cyrillic": "фото",
        "translit": "fóta",
        "meaning": "foto",
        "note": "Ф inicial ante 'о'",
        "lexId": "CMR-03400"
      },
      {
        "cyrillic": "факт",
        "translit": "fakt",
        "meaning": "hecho",
        "note": "Ф inicial, préstamo del latín",
        "lexId": "CMR-00661"
      },
      {
        "cyrillic": "форма",
        "translit": "fórma",
        "meaning": "forma",
        "note": "Ф inicial ante 'о'",
        "lexId": "CMR-00282"
      },
      {
        "cyrillic": "кофе",
        "translit": "kófi",
        "meaning": "café",
        "note": "Ф intervocálica",
        "lexId": "CMR-01952"
      },
      {
        "cyrillic": "шкаф",
        "translit": "shkaf",
        "meaning": "armario, ropero",
        "note": "Ф al final de la palabra",
        "lexId": "CMR-02422"
      }
    ]
  },
  {
    "id": 23,
    "upper": "Х",
    "lower": "х",
    "name": "Ха",
    "translit": "j",
    "pronunciation": "Como la 'j' española en 'jardín'",
    "sounds": [
      "j"
    ],
    "details": {
      "description": "Consonante fricativa velar sorda. Muy similar a la 'j' española o a la 'ch' alemana en 'Bach'.",
      "similar": "Como la 'j' de 'jardín', 'jamón'. O la 'g' de 'genio' en castellano estándar.",
      "mistakes": "La pronunciación española es a menudo demasiado gutural. La Х rusa puede ser ligeramente más suave que la jota española.",
      "tips": "Para hispanohablantes es uno de los sonidos más fáciles: es prácticamente nuestra 'j'. La Х suave (ante е, и) es más palatal, como la 'ch' alemana en 'ich'.",
      "similar_letters": "Х vs К: Х es fricativa (fricción continua), К es oclusiva (cierre total). Х vs Г: Х sorda, Г sonora."
    },
    "words": [
      {
        "cyrillic": "хлеб",
        "translit": "jliep",
        "meaning": "pan",
        "note": "Х inicial, suena como 'j'",
        "lexId": "CMR-01130"
      },
      {
        "cyrillic": "холодно",
        "translit": "jóladna",
        "meaning": "hace frío",
        "note": "Х inicial ante 'о'",
        "lexId": "CMR-03218"
      },
      {
        "cyrillic": "хорошо",
        "translit": "jarashó",
        "meaning": "bien / está bien",
        "note": "Ш antes de la О final tónica",
        "lexId": "CMR-00190"
      },
      {
        "cyrillic": "плохо",
        "translit": "plója",
        "meaning": "mal",
        "note": "Х en posición interior",
        "lexId": "CMR-00947"
      },
      {
        "cyrillic": "воздух",
        "translit": "vózduj",
        "meaning": "aire",
        "note": "Х al final: suena como la 'j' española",
        "lexId": "CMR-00583"
      }
    ]
  },
  {
    "id": 24,
    "upper": "Ц",
    "lower": "ц",
    "name": "Цэ",
    "translit": "ts",
    "pronunciation": "Como 'ts' en 'tsar' o la 'z' italiana en 'pizza'",
    "sounds": [
      "ts"
    ],
    "details": {
      "description": "Africada alveolar sorda. Combinación rápida de 't' y 's'.",
      "similar": "Como 'ts' en 'tsunami', o la 'z' italiana de 'pizza', o la 'tz' alemana.",
      "mistakes": "Los hispanohablantes tienden a separar la 't' y la 's'. Son un único sonido fusionado.",
      "tips": "Empezá cerrando la boca como para 't' y termina con fricción de 's', todo en un impulso. La Ц nunca se palataliza.",
      "similar_letters": "Ц vs Ч: Ц es alveolar sorda; Ч es postalveolar y siempre suave."
    },
    "words": [
      {
        "cyrillic": "центр",
        "translit": "tsentr",
        "meaning": "centro",
        "note": "Ц inicial, siempre dura",
        "lexId": "CMR-00394"
      },
      {
        "cyrillic": "цена",
        "translit": "tsiná",
        "meaning": "precio",
        "note": "Ц inicial ante 'е'",
        "lexId": "CMR-00454"
      },
      {
        "cyrillic": "птица",
        "translit": "ptítsa",
        "meaning": "pájaro",
        "note": "Ц interior ante 'а'",
        "lexId": "CMR-01294"
      },
      {
        "cyrillic": "отец",
        "translit": "atiéts",
        "meaning": "padre",
        "note": "Ц al final",
        "lexId": "CMR-00192"
      },
      {
        "cyrillic": "месяц",
        "translit": "miésits",
        "meaning": "mes",
        "note": "Ц al final, siempre dura",
        "lexId": "CMR-00303"
      }
    ]
  },
  {
    "id": 25,
    "upper": "Ч",
    "lower": "ч",
    "name": "Чэ",
    "translit": "ch",
    "pronunciation": "Como 'ch' española en 'chocolate'",
    "sounds": [
      "ch"
    ],
    "details": {
      "description": "Africada postalveolar sorda y siempre palatalizada. Igual que la 'ch' española.",
      "similar": "Exactamente como la 'ch' de 'chocolate', 'muchacho', 'noche'.",
      "mistakes": "Ninguno para hispanohablantes. La Ч siempre es suave (palatal), no se puede endurecer.",
      "tips": "Después de Ч se escribe а, у, и, е; nunca я, ю ni ы.",
      "similar_letters": "Ч vs Ц: Ч es postalveolar y siempre suave; Ц es alveolar y siempre dura."
    },
    "words": [
      {
        "cyrillic": "чай",
        "translit": "chai",
        "meaning": "té",
        "note": "Ч inicial, sonido idéntico al español",
        "lexId": "CMR-01136"
      },
      {
        "cyrillic": "час",
        "translit": "chas",
        "meaning": "hora",
        "note": "Ч inicial ante 'а'",
        "lexId": "CMR-00200"
      },
      {
        "cyrillic": "ночь",
        "translit": "noch",
        "meaning": "noche",
        "note": "Ч al final con signo blando",
        "lexId": "CMR-00236"
      },
      {
        "cyrillic": "человек",
        "translit": "chilaviék",
        "meaning": "persona",
        "note": "Ч inicial en palabra muy común",
        "lexId": "CMR-00039"
      },
      {
        "cyrillic": "ключ",
        "translit": "kliuch",
        "meaning": "llave",
        "note": "Ч al final: suena 'ch'",
        "lexId": "CMR-01584"
      }
    ]
  },
  {
    "id": 26,
    "upper": "Ш",
    "lower": "ш",
    "name": "Ша",
    "translit": "sh",
    "pronunciation": "Como 'sh' en inglés 'show' o la 'll' argentina suave",
    "sounds": [
      "sh"
    ],
    "details": {
      "description": "Consonante fricativa postalveolar sorda. Como la 'sh' inglesa o la 'ch' francesa.",
      "similar": "Como 'sh' en 'show', 'she'. O la 'ch' de 'chocolat' en francés.",
      "mistakes": "No existe en español estándar. Algunos confunden con 'ch' española. La Ш es fricativa (sin oclusión inicial), la Ч es africada.",
      "tips": "Llevá la lengua hacia atrás más que para 's'. La Ш siempre es dura, nunca se palataliza.",
      "similar_letters": "Ш vs Щ: Ш es dura; Щ es suave y prolongada. Ш vs Ж: Ш sorda, Ж sonora."
    },
    "words": [
      {
        "cyrillic": "школа",
        "translit": "shkóla",
        "meaning": "escuela",
        "note": "Ш en grupo 'шк'",
        "lexId": "CMR-00315"
      },
      {
        "cyrillic": "шапка",
        "translit": "shápka",
        "meaning": "gorro",
        "note": "Ш inicial ante 'а'",
        "lexId": "CMR-02772"
      },
      {
        "cyrillic": "хорошо",
        "translit": "jarashó",
        "meaning": "bien",
        "note": "Ш antes de la О final tónica",
        "lexId": "CMR-00190"
      },
      {
        "cyrillic": "машина",
        "translit": "mashína",
        "meaning": "coche",
        "note": "Ш intervocálica",
        "lexId": "CMR-00187"
      },
      {
        "cyrillic": "карандаш",
        "translit": "karandásh",
        "meaning": "lápiz",
        "note": "Ш al final, siempre dura",
        "lexId": "CMR-02487"
      }
    ]
  },
  {
    "id": 27,
    "upper": "Щ",
    "lower": "щ",
    "name": "Ща",
    "translit": "sch",
    "pronunciation": "Como una 'sh' larga y suave",
    "sounds": [
      "sch"
    ],
    "details": {
      "description": "Consonante fricativa palatal sorda prolongada. Suave y larga, sin equivalente directo en español.",
      "similar": "Como una 'sh' suave y alargada, o 'sch' en alemán 'Schule' pero más palatal.",
      "mistakes": "No tiene equivalente en español. Muchos la pronuncian igual que Ш. La diferencia: Щ es palatal y puede sonar como 'sh' + 'ch' fusionadas.",
      "tips": "Pronunciá 'sh' y adelantá la lengua hacia el paladar. En la lengua moderna suena como una 'ш' larga y suavizada.",
      "similar_letters": "Щ vs Ш: Щ es siempre suave y palatal; Ш es siempre dura. Son completamente distintas."
    },
    "words": [
      {
        "cyrillic": "щи",
        "translit": "schi",
        "meaning": "sopa de col (plato típico)",
        "note": "Щ inicial, suave palatal",
        "lexId": "CMR-05411"
      },
      {
        "cyrillic": "щека",
        "translit": "schiká",
        "meaning": "mejilla",
        "note": "Щ inicial ante 'е'",
        "lexId": "CMR-01693"
      },
      {
        "cyrillic": "борщ",
        "translit": "borsch",
        "meaning": "borsch (sopa)",
        "note": "Щ al final de palabra",
        "lexId": "CMR-05412"
      },
      {
        "cyrillic": "овощи",
        "translit": "óvaschi",
        "meaning": "verduras",
        "note": "Щ interior palatal",
        "lexId": "CMR-04968"
      },
      {
        "cyrillic": "вещь",
        "translit": "viesch",
        "meaning": "cosa",
        "note": "Щ al final, seguida de Ь, que no cambia el sonido",
        "lexId": "CMR-00434"
      }
    ]
  },
  {
    "id": 28,
    "upper": "Ъ",
    "lower": "ъ",
    "name": "Твёрдый знак",
    "translit": "\"",
    "pronunciation": "Signo duro: no tiene sonido, separa sílabas",
    "sounds": [],
    "details": {
      "description": "El signo duro (твёрдый знак) no tiene sonido propio. Indica que la consonante anterior es dura y no se palataliza antes de la vocal siguiente (е, ё, ю, я).",
      "similar": "No hay equivalente en español. Actúa como separador de sílabas: la vocal siguiente empieza con su 'й' inicial.",
      "mistakes": "Pronunciarlo como vocal o consonante. Es invisible fonéticamente: solo afecta a las consonantes adyacentes.",
      "tips": "Ante Ъ, la vocal siguiente (е→йэ, ё→йо, ю→йу, я→йа) mantiene su 'й' inicial porque no va pegada a la consonante.",
      "similar_letters": "Ъ vs Ь: ambos son signos sin sonido. Ъ endurece (evita palatalización); Ь suaviza (palataliza la consonante anterior)."
    },
    "words": [
      {
        "cyrillic": "съезд",
        "translit": "syest",
        "meaning": "congreso",
        "note": "Ъ entre 'с' y 'е': la 'с' no se palataliza",
        "lexId": "CMR-02269"
      },
      {
        "cyrillic": "объект",
        "translit": "abyékt",
        "meaning": "objeto",
        "note": "Ъ mantiene 'б' dura ante 'е'",
        "lexId": "CMR-00528"
      },
      {
        "cyrillic": "подъезд",
        "translit": "padyést",
        "meaning": "entrada (edificio)",
        "note": "Ъ separa el prefijo",
        "lexId": "CMR-02121"
      },
      {
        "cyrillic": "объём",
        "translit": "abyóm",
        "meaning": "volumen",
        "note": "Ъ antes de 'ё'",
        "lexId": "CMR-00687"
      },
      {
        "cyrillic": "съесть",
        "translit": "syest",
        "meaning": "comer(se)",
        "note": "Ъ separa el prefijo: la Е suena 'ye' (syest)",
        "lexId": "CMR-02632"
      }
    ]
  },
  {
    "id": 29,
    "upper": "Ы",
    "lower": "ы",
    "name": "Ы",
    "translit": "y",
    "pronunciation": "Sonido central oscuro, sin equivalente en español",
    "sounds": [
      "ɨ"
    ],
    "details": {
      "description": "Vocal central cerrada. No existe en español. Es uno de los sonidos más difíciles para hispanohablantes.",
      "similar": "Intentá decir 'i' pero con la lengua retraída hacia la garganta, como si tuvieras la boca a medio abrir. A veces descrito como el sonido al recibir un golpe en el estómago.",
      "mistakes": "Pronunciarla como 'i'. Son muy distintas: И es frontal y clara; Ы es central/posterior y oscura.",
      "tips": "Truco: decí 'u' y, sin mover los labios, intentá decir 'i'. El resultado se acercará a Ы. O decí 'bi' y mantené los labios relajados (sin redondear ni estirar): eso es Ы.",
      "similar_letters": "Ы vs И: ambas son cerradas, pero Ы es central-posterior e И es frontal. La diferencia cambia el significado: быть vs бить."
    },
    "words": [
      {
        "cyrillic": "ты",
        "translit": "ty",
        "meaning": "tú",
        "note": "Ы final, sonido central oscuro",
        "lexId": "CMR-00033"
      },
      {
        "cyrillic": "рыба",
        "translit": "rýba",
        "meaning": "pez",
        "note": "Ы en sílaba tónica",
        "lexId": "CMR-01436"
      },
      {
        "cyrillic": "сын",
        "translit": "syn",
        "meaning": "hijo",
        "note": "Ы en sílaba tónica",
        "lexId": "CMR-00360"
      },
      {
        "cyrillic": "мыло",
        "translit": "mýla",
        "meaning": "jabón",
        "note": "Ы tónica, bien diferenciada de 'и'",
        "lexId": "CMR-05413"
      },
      {
        "cyrillic": "старый",
        "translit": "stáryi",
        "meaning": "viejo",
        "note": "Ы en la terminación -ый de los adjetivos",
        "lexId": "CMR-00264"
      }
    ]
  },
  {
    "id": 30,
    "upper": "Ь",
    "lower": "ь",
    "name": "Мягкий знак",
    "translit": "'",
    "pronunciation": "Signo blando: palataliza la consonante anterior",
    "sounds": [],
    "details": {
      "description": "El signo blando (мягкий знак) no tiene sonido propio. Indica que la consonante anterior se palataliza: la lengua se arquea hacia el paladar al pronunciarla.",
      "similar": "No hay equivalente directo. El efecto se parece a agregar una 'y' muy breve después de la consonante: ть suena como una 't' con una 'y' brevísima.",
      "mistakes": "Ignorarlo completamente. La palatalización cambia el significado: брат es 'hermano' y брать es 'tomar'.",
      "tips": "Cuando veas Ь, palatalizá la consonante anterior: arqueá la lengua hacia el paladar. Al final de palabra es especialmente importante.",
      "similar_letters": "Ь vs Ъ: Ь suaviza (palataliza), Ъ endurece (bloquea palatalización)."
    },
    "words": [
      {
        "cyrillic": "мать",
        "translit": "mat",
        "meaning": "madre",
        "note": "Ь final palataliza la 'т'",
        "lexId": "CMR-00301"
      },
      {
        "cyrillic": "день",
        "translit": "dien",
        "meaning": "día",
        "note": "Ь palataliza la 'н'",
        "lexId": "CMR-00071"
      },
      {
        "cyrillic": "письмо",
        "translit": "pismó",
        "meaning": "carta",
        "note": "Ь interior palataliza 'с'",
        "lexId": "CMR-00333"
      },
      {
        "cyrillic": "учитель",
        "translit": "uchítil",
        "meaning": "profesor",
        "note": "Ь final palataliza 'л'",
        "lexId": "CMR-01060"
      },
      {
        "cyrillic": "семья",
        "translit": "simyá",
        "meaning": "familia",
        "note": "Ь antes de vocal: separa y la Я suena 'ya' (simyá)",
        "lexId": "CMR-00378"
      }
    ]
  },
  {
    "id": 31,
    "upper": "Э",
    "lower": "э",
    "name": "Э",
    "translit": "e",
    "pronunciation": "Como la 'e' española pura en 'mesa'",
    "sounds": [
      "e"
    ],
    "details": {
      "description": "Vocal anterior media. Como la 'e' española pura, pero indica que la consonante anterior es DURA (no palatalizada).",
      "similar": "Exactamente como la 'e' de 'mesa', 'tema', 'verde'.",
      "mistakes": "Confundirla con Е. La diferencia es que Э mantiene la consonante anterior dura; Е la palataliza.",
      "tips": "Э aparece principalmente en palabras de origen extranjero y al inicio de algunas palabras.",
      "similar_letters": "Э vs Е: Э mantiene consonante dura; Е palataliza. Э es menos frecuente."
    },
    "words": [
      {
        "cyrillic": "это",
        "translit": "éta",
        "meaning": "esto / eso",
        "note": "Э inicial, muy frecuente",
        "lexId": "CMR-00012"
      },
      {
        "cyrillic": "этаж",
        "translit": "itásh",
        "meaning": "piso (de edificio)",
        "note": "Э inicial ante 'т' dura",
        "lexId": "CMR-01181"
      },
      {
        "cyrillic": "эхо",
        "translit": "éja",
        "meaning": "eco",
        "note": "Э inicial, préstamo del griego",
        "lexId": "CMR-05414"
      },
      {
        "cyrillic": "поэт",
        "translit": "paét",
        "meaning": "poeta",
        "note": "Э interior, consonante anterior dura",
        "lexId": "CMR-00747"
      },
      {
        "cyrillic": "этот",
        "translit": "état",
        "meaning": "este",
        "note": "Э inicial tónica",
        "lexId": "CMR-00014"
      }
    ]
  },
  {
    "id": 32,
    "upper": "Ю",
    "lower": "ю",
    "name": "Ю",
    "translit": "yu",
    "pronunciation": "Como 'yu' en 'yudo' o la 'u' después de consonante suavizada",
    "sounds": [
      "yu",
      "u"
    ],
    "details": {
      "description": "Al inicio de sílaba o tras vocal: suena 'йу'. Tras consonante: la palataliza y suena 'у'.",
      "similar": "Como 'yu' en 'yudo'. O como cuando en español decimos 'túu' muy suavemente.",
      "mistakes": "Como Е, la Ю tiene dos lecturas. Tras consonante no añade 'й' separado: palataliza.",
      "tips": "Regla paralela a Е/Я: inicio/tras vocal → 'йу'; tras consonante → palataliza + 'у'.",
      "similar_letters": "Ю vs У: Ю palataliza la consonante anterior; У la mantiene dura. Ю vs Е: misma lógica de palatalización pero con u/e."
    },
    "words": [
      {
        "cyrillic": "юг",
        "translit": "yuk",
        "meaning": "sur",
        "note": "Ю inicial → 'йу'",
        "lexId": "CMR-02849"
      },
      {
        "cyrillic": "люди",
        "translit": "liúdi",
        "meaning": "gente / personas",
        "note": "Ю palataliza la 'л'",
        "lexId": "CMR-05415"
      },
      {
        "cyrillic": "любовь",
        "translit": "liubóf",
        "meaning": "amor",
        "note": "Ю palataliza 'л'",
        "lexId": "CMR-00307"
      },
      {
        "cyrillic": "брюки",
        "translit": "briúki",
        "meaning": "pantalón",
        "note": "Ю ablanda la Р (briúki)",
        "lexId": "CMR-02977"
      },
      {
        "cyrillic": "меню",
        "translit": "miniú",
        "meaning": "carta, menú",
        "note": "Ю final tónica, ablanda la Н",
        "lexId": "CMR-05476"
      }
    ]
  },
  {
    "id": 33,
    "upper": "Я",
    "lower": "я",
    "name": "Я",
    "translit": "ya",
    "pronunciation": "Como 'ya' en 'yate' o la 'a' después de consonante suavizada",
    "sounds": [
      "ya",
      "a"
    ],
    "details": {
      "description": "Al inicio o tras vocal: suena 'йа'. Tras consonante: palataliza y suena 'а'.",
      "similar": "Como 'ya' en 'yate', 'yarda'. O como la 'ia' de 'piano' muy rápido.",
      "mistakes": "Siempre pronunciarla como 'ya'. Tras consonante no hay 'й' separado: la consonante se palataliza.",
      "tips": "Я también significa 'yo' en ruso. Es la última letra del alfabeto y una palabra clave.",
      "similar_letters": "Я vs А: Я palataliza; А mantiene consonante dura. Я vs Е/Ю: misma lógica palatalizadora."
    },
    "words": [
      {
        "cyrillic": "я",
        "translit": "ya",
        "meaning": "yo",
        "note": "Я sola = 'yo'",
        "lexId": "CMR-00005"
      },
      {
        "cyrillic": "яблоко",
        "translit": "yáblaka",
        "meaning": "manzana",
        "note": "Я inicial → 'йа'",
        "lexId": "CMR-02230"
      },
      {
        "cyrillic": "язык",
        "translit": "yizýk",
        "meaning": "lengua / idioma",
        "note": "Я inicial tónica",
        "lexId": "CMR-00306"
      },
      {
        "cyrillic": "земля",
        "translit": "zimliá",
        "meaning": "tierra",
        "note": "Я palataliza 'л' final",
        "lexId": "CMR-00184"
      },
      {
        "cyrillic": "опять",
        "translit": "apiát",
        "meaning": "de nuevo",
        "note": "Я tónica en medio: ablanda la П (apiát)",
        "lexId": "CMR-00288"
      }
    ]
  }
];
/* Aplana ALPHABET a su lista de palabras de ejemplo — usado por el
   buscador transversal (azRegisterAllKnownSearchIndexes en core.js).
   Mismo patrón que getAllDiccionarioWords() y getAllCasosWords(). */
/* Fix: varias palabras se usan como ejemplo de MÁS DE UNA letra (ej.
   "город" ilustra tanto Г como О) — intencional para el estudio del
   alfabeto letra por letra. Pero al aplanar TODAS las palabras para
   el buscador transversal, eso las duplicaba en los resultados de
   búsqueda. Acá se deduplica por texto ruso (se conserva la primera
   aparición); las tarjetas de cada letra individual NO se tocan —
   siguen mostrando la palabra completa como antes. */
function getAllAlphabetWords(){
  const out=[];
  const seen=new Set();
  ALPHABET.forEach(l=>l.words.forEach(w=>{
    const key=w.cyrillic.trim().toLowerCase();
    if(seen.has(key))return;
    seen.add(key);
    out.push({ru:w.cyrillic, es:w.meaning, tr:w.translit});
  }));
  return out;
}
function generateQuizQuestion(letter, allLetters) {
  const types = ["sound", "letter", "word"];
  const type = types[Math.floor(Math.random() * types.length)];
  if (type === "sound") {
    const wrong = allLetters.filter(l => l.id !== letter.id).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [letter, ...wrong].sort(() => Math.random() - 0.5);
    return {
      type: "sound",
      question: `¿Cómo se pronuncia la letra ${letter.upper}?`,
      hint: "Elegí la pronunciación correcta",
      options: options.map(l => ({
        id: l.id,
        text: l.pronunciation,
        isCorrect: l.id === letter.id
      }))
    };
  }
  if (type === "letter") {
    const wrong = allLetters.filter(l => l.id !== letter.id).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [letter, ...wrong].sort(() => Math.random() - 0.5);
    return {
      type: "letter",
      question: `¿Qué letra representa el sonido "${letter.translit}"?`,
      hint: "Elegí la letra correcta",
      options: options.map(l => ({
        id: l.id,
        text: l.upper,
        isCorrect: l.id === letter.id
      }))
    };
  }
  // word type
  const word = letter.words[Math.floor(Math.random() * letter.words.length)];
  const wrongLetters = allLetters.filter(l => l.id !== letter.id).sort(() => Math.random() - 0.5).slice(0, 3);
  const options = [letter, ...wrongLetters].sort(() => Math.random() - 0.5);
  return {
    type: "word",
    question: `En la palabra "${word.cyrillic}" (${word.meaning}), ¿cuál es el sonido de la letra ${letter.upper}?`,
    hint: word.note,
    options: options.map(l => ({
      id: l.id,
      text: l.upper + " → " + l.pronunciation.split(",")[0].slice(0, 30),
      isCorrect: l.id === letter.id
    }))
  };
}
