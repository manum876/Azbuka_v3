/* ============================================================
   DATA-MASHA.JS — Charla con Masha (módulo, 21/10/2026)
   ARCHIVO GENERADO: no se edita a mano. La fuente es
   herramientas/masha/fuente-masha.js; después de cambiarla se corre
   «node herramientas/masha/armar.js», que transliteración incluida
   arma este archivo y verifica el vocabulario de cada tema.

   MASHA.temas: temas de charla (6 por unidad), cada uno con
     desde      la unidad desde la que se entiende (vocabulario y
                gramática hasta esa unidad; U2–U4 estricto, desde la
                U5 cualquier palabra del léxico, como Lecturas)
     inicio     el primer paso; nodos: los pasos (bot, ideas, ramas…,
                mismo formato que la maqueta charla.html)
     preguntas  lo que Masha sabe contar en ese tema
   MASHA.vida: la historia de Masha, que se le puede preguntar en
     cualquier tema; cada respuesta tiene versiones por unidad (v: [{ d, l }])
     y se elige la más alta que el alumno ya puede entender.
   MASHA.apertura, comodines, utiles: lo que sirve en todos los temas.
   MASHA.naciones: países de la Unidad 2 [país, él, ella, genitivo, él (es), ella (es)].
   Plantillas: {nombre}, {pais}, {pais_gen}, {nac}, {x} y {él/ella}
   (según el género del alumno).
   ============================================================ */
const MASHA = {
 "personaje": "masha",
 "presentacion": "Masha es estudiante y vive en Moscú. Charla con ella por escrito, en ruso: te hace preguntas y tú también le puedes preguntar cosas de su vida.",
 "naciones": [
  [
   "Росси́я",
   "ру́сский",
   "ру́сская",
   "Росси́и",
   "ruso",
   "rusa"
  ],
  [
   "Испа́ния",
   "испа́нец",
   "испа́нка",
   "Испа́нии",
   "español",
   "española"
  ],
  [
   "Аргенти́на",
   "аргенти́нец",
   "аргенти́нка",
   "Аргенти́ны",
   "argentino",
   "argentina"
  ],
  [
   "Украи́на",
   "украи́нец",
   "украи́нка",
   "Украи́ны",
   "ucraniano",
   "ucraniana"
  ],
  [
   "Белару́сь",
   "белору́с",
   "белору́ска",
   "Белару́си",
   "bielorruso",
   "bielorrusa"
  ],
  [
   "Фра́нция",
   "францу́з",
   "францу́женка",
   "Фра́нции",
   "francés",
   "francesa"
  ],
  [
   "Ита́лия",
   "италья́нец",
   "италья́нка",
   "Ита́лии",
   "italiano",
   "italiana"
  ],
  [
   "Герма́ния",
   "не́мец",
   "не́мка",
   "Герма́нии",
   "alemán",
   "alemana"
  ],
  [
   "По́льша",
   "поля́к",
   "по́лька",
   "По́льши",
   "polaco",
   "polaca"
  ],
  [
   "США",
   "америка́нец",
   "америка́нка",
   "США",
   "estadounidense",
   "estadounidense"
  ],
  [
   "А́нглия",
   "англича́нин",
   "англича́нка",
   "А́нглии",
   "inglés",
   "inglesa"
  ],
  [
   "Кита́й",
   "кита́ец",
   "китая́нка",
   "Кита́я",
   "chino",
   "china"
  ],
  [
   "Япо́ния",
   "япо́нец",
   "япо́нка",
   "Япо́нии",
   "japonés",
   "japonesa"
  ],
  [
   "Брази́лия",
   "брази́лец",
   "бразилья́нка",
   "Брази́лии",
   "brasileño",
   "brasileña"
  ],
  [
   "Ме́ксика",
   "мексика́нец",
   "мексика́нка",
   "Ме́ксики",
   "mexicano",
   "mexicana"
  ],
  [
   "Катало́ния",
   "катало́нец",
   "катало́нка",
   "Катало́нии",
   "catalán",
   "catalana"
  ],
  [
   "Норве́гия",
   "норве́жец",
   "норве́жка",
   "Норве́гии",
   "noruego",
   "noruega"
  ],
  [
   "Финля́ндия",
   "финн",
   "фи́нка",
   "Финля́ндии",
   "finlandés",
   "finlandesa"
  ],
  [
   "Швейца́рия",
   "швейца́рец",
   "швейца́рка",
   "Швейца́рии",
   "suizo",
   "suiza"
  ],
  [
   "Ирла́ндия",
   "ирла́ндец",
   "ирла́ндка",
   "Ирла́ндии",
   "irlandés",
   "irlandesa"
  ],
  [
   "Румы́ния",
   "румы́н",
   "румы́нка",
   "Румы́нии",
   "rumano",
   "rumana"
  ],
  [
   "Хорва́тия",
   "хорва́т",
   "хорва́тка",
   "Хорва́тии",
   "croata",
   "croata"
  ],
  [
   "Коре́я",
   "коре́ец",
   "корея́нка",
   "Коре́и",
   "coreano",
   "coreana"
  ],
  [
   "Вьетна́м",
   "вьетна́мец",
   "вьетна́мка",
   "Вьетна́ма",
   "vietnamita",
   "vietnamita"
  ],
  [
   "Таила́нд",
   "та́ец",
   "та́йка",
   "Таила́нда",
   "tailandés",
   "tailandesa"
  ],
  [
   "Индоне́зия",
   "индонези́ец",
   "индонези́йка",
   "Индоне́зии",
   "indonesio",
   "indonesia"
  ],
  [
   "Пакиста́н",
   "пакиста́нец",
   "пакиста́нка",
   "Пакиста́на",
   "paquistaní",
   "paquistaní"
  ],
  [
   "Пана́ма",
   "пана́мец",
   "пана́мка",
   "Пана́мы",
   "panameño",
   "panameña"
  ],
  [
   "Австра́лия",
   "австрали́ец",
   "австрали́йка",
   "Австра́лии",
   "australiano",
   "australiana"
  ],
  [
   "Еги́пет",
   "египтя́нин",
   "египтя́нка",
   "Еги́пта",
   "egipcio",
   "egipcia"
  ],
  [
   "Маро́кко",
   "марокка́нец",
   "марокка́нка",
   "Маро́кко",
   "marroquí",
   "marroquí"
  ],
  [
   "Но́вая Зела́ндия",
   "новозела́ндец",
   "новозела́ндка",
   "Но́вой Зела́ндии",
   "neozelandés",
   "neozelandesa"
  ],
  [
   "Палести́на",
   "палести́нец",
   "палести́нка",
   "Палести́ны",
   "palestino",
   "palestina"
  ],
  [
   "Казахста́н",
   "каза́х",
   "каза́шка",
   "Казахста́на",
   "kazajo",
   "kazaja"
  ],
  [
   "Гру́зия",
   "грузи́н",
   "грузи́нка",
   "Гру́зии",
   "georgiano",
   "georgiana"
  ],
  [
   "Арме́ния",
   "армяни́н",
   "армя́нка",
   "Арме́нии",
   "armenio",
   "armenia"
  ],
  [
   "Португа́лия",
   "португа́лец",
   "португа́лка",
   "Португа́лии",
   "portugués",
   "portuguesa"
  ],
  [
   "Гре́ция",
   "грек",
   "греча́нка",
   "Гре́ции",
   "griego",
   "griega"
  ],
  [
   "Шве́ция",
   "швед",
   "шве́дка",
   "Шве́ции",
   "sueco",
   "sueca"
  ],
  [
   "Ту́рция",
   "ту́рок",
   "турча́нка",
   "Ту́рции",
   "turco",
   "turca"
  ],
  [
   "Кана́да",
   "кана́дец",
   "кана́дка",
   "Кана́ды",
   "canadiense",
   "canadiense"
  ],
  [
   "Ку́ба",
   "куби́нец",
   "куби́нка",
   "Ку́бы",
   "cubano",
   "cubana"
  ],
  [
   "Колу́мбия",
   "колумби́ец",
   "колумби́йка",
   "Колу́мбии",
   "colombiano",
   "colombiana"
  ],
  [
   "Венесуэ́ла",
   "венесуэ́лец",
   "венесуэ́лка",
   "Венесуэ́лы",
   "venezolano",
   "venezolana"
  ],
  [
   "Уругва́й",
   "уругва́ец",
   "уругва́йка",
   "Уругва́я",
   "uruguayo",
   "uruguaya"
  ],
  [
   "И́ндия",
   "инди́ец",
   "индиа́нка",
   "И́ндии",
   "indio",
   "india"
  ],
  [
   "Перу́",
   "перуа́нец",
   "перуа́нка",
   "Перу́",
   "peruano",
   "peruana"
  ],
  [
   "Чи́ли",
   "чили́ец",
   "чили́йка",
   "Чи́ли",
   "chileno",
   "chilena"
  ]
 ],
 "apertura": {
  "conNombre": [
   {
    "d": 2,
    "l": [
     {
      "ru": "Приве́т, {nombre}! 👋",
      "tr": "Priviét, {nombre}!",
      "es": "¡Hola, {nombre}!"
     }
    ]
   }
  ],
  "sinNombre": [
   {
    "d": 2,
    "l": [
     {
      "ru": "Приве́т! 👋",
      "tr": "Priviét!",
      "es": "¡Hola!"
     }
    ]
   }
  ],
  "ideas": [
   {
    "ru": "Приве́т, Ма́ша!",
    "es": "¡Hola, Masha!"
   },
   {
    "ru": "Приве́т!",
    "es": "¡Hola!"
   }
  ]
 },
 "comodines": {
  "noEntendi": [
   {
    "d": 2,
    "l": [
     {
      "ru": "Извини́, я не понима́ю. 🙈",
      "tr": "Izviní, ya nie panimáyu.",
      "es": "Perdón, no entiendo."
     }
    ]
   }
  ],
  "noSe": [
   {
    "d": 2,
    "l": [
     {
      "ru": "Хм… Я не зна́ю. 😅",
      "tr": "Jm… Ya nie znáyu.",
      "es": "Mmm… No sé."
     }
    ]
   }
  ],
  "latin": [
   {
    "d": 2,
    "l": [
     {
      "ru": "По-ру́сски, пожа́луйста! 😅",
      "tr": "Parússki, pazháluista!",
      "es": "¡En ruso, por favor!"
     }
    ]
   }
  ],
  "hola": [
   {
    "d": 2,
    "l": [
     {
      "ru": "«¡Hola!» — э́то по-испа́нски! А по-ру́сски — «Приве́т!» 😄",
      "tr": "«¡Hola!» — éta paispánski! A parússki — «Priviét!»",
      "es": "«¡Hola!» es español. ¡En ruso es «Привет»!"
     }
    ]
   }
  ],
  "masPreguntas": [
   {
    "d": 2,
    "l": [
     {
      "ru": "Хорошо́! 🙂",
      "tr": "Jarashó!",
      "es": "¡Bien!"
     }
    ]
   },
   {
    "d": 5,
    "l": [
     {
      "ru": "Ещё вопро́сы? 🙂",
      "tr": "Yischó vaprósy?",
      "es": "¿Más preguntas?"
     }
    ]
   }
  ],
  "yaDije": [
   {
    "d": 2,
    "l": [
     {
      "ru": "😄",
      "tr": "",
      "es": ""
     }
    ]
   }
  ]
 },
 "utiles": [
  {
   "id": "adios",
   "etiqueta": "Despedirse",
   "claves": [
    "пока",
    "=до свидания",
    "=до завтра"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Пока́, {nombre}! 👋",
       "tr": "Paká, {nombre}!",
       "es": "¡Chau, {nombre}!"
      }
     ]
    }
   ],
   "accion": "fin"
  },
  {
   "id": "no_entiendo",
   "etiqueta": "No entiende o pide que repita",
   "claves": [
    "=не понимаю",
    "=не понял",
    "=не поняла",
    "повтор",
    "медленн"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Хорошо́! Ме́дленно:",
       "tr": "Jarashó! Miédlinna:",
       "es": "¡Bueno! Despacio:"
      }
     ]
    }
   ],
   "accion": "repetir"
  },
  {
   "id": "gracias",
   "etiqueta": "Gracias",
   "claves": [
    "спасиб"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Пожа́луйста! 😊",
       "tr": "Pazháluista!",
       "es": "¡De nada!"
      }
     ]
    }
   ]
  },
  {
   "id": "tambien",
   "etiqueta": "Igualmente / encantado",
   "claves": [
    "=мне тоже",
    "=очень приятно",
    "=рад",
    "=рада"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "ru": "🙂",
       "tr": "",
       "es": ""
      }
     ]
    }
   ]
  },
  {
   "id": "hola",
   "etiqueta": "Saluda otra vez",
   "claves": [
    "привет",
    "здравств"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Приве́т! 😄",
       "tr": "Priviét!",
       "es": "¡Hola!"
      }
     ]
    }
   ]
  }
 ],
 "vida": [
  {
   "id": "nombre_m",
   "tema": "Su nombre",
   "desde": 2,
   "claves": [
    "как тебя зовут",
    "=кто ты"
   ],
   "idea": {
    "ru": "Как тебя́ зову́т?",
    "es": "¿Cómo te llamas?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Меня́ зову́т Ма́ша. 🙂",
       "tr": "Miniá zavút Másha.",
       "es": "Me llamo Masha."
      }
     ]
    }
   ]
  },
  {
   "id": "como_m",
   "tema": "Cómo está",
   "desde": 2,
   "claves": [
    "как дела",
    "=а у тебя",
    "=как ты"
   ],
   "idea": {
    "ru": "Как дела́?",
    "es": "¿Cómo estás?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "У меня́ всё хорошо́, спаси́бо! 😊",
       "tr": "U miniá fsio jarashó, spasíba!",
       "es": "¡Todo bien, gracias!"
      }
     ]
    }
   ]
  },
  {
   "id": "origen_m",
   "tema": "De dónde es",
   "desde": 2,
   "claves": [
    "откуда"
   ],
   "idea": {
    "ru": "Отку́да ты?",
    "es": "¿De dónde eres?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Я из Москвы́. Я ру́сская! 😊",
       "tr": "Ya is Maskvý. Ya rússkaya!",
       "es": "Soy de Moscú. ¡Soy rusa!"
      }
     ]
    },
    {
     "d": 5,
     "l": [
      {
       "ru": "Я из Москвы́. Я москви́чка! 😊",
       "tr": "Ya is Maskvý. Ya maskvíchka!",
       "es": "Soy de Moscú. ¡Soy moscovita!"
      }
     ]
    }
   ]
  },
  {
   "id": "idiomas_m",
   "tema": "Qué idiomas habla",
   "desde": 2,
   "claves": [
    "говоришь",
    "=язык",
    "языки"
   ],
   "idea": {
    "ru": "Ты говори́шь по-англи́йски?",
    "es": "¿Hablas inglés?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Я говорю́ по-ру́сски и по-англи́йски. И я учу́ испа́нский! 😄",
       "tr": "Ya gavariú parússki i paanglíiski. I ya uchú ispánskii!",
       "es": "Hablo ruso e inglés. ¡Y estudio español!"
      }
     ]
    }
   ]
  },
  {
   "id": "estudio",
   "tema": "Qué estudia",
   "desde": 2,
   "claves": [
    "студент",
    "учишь",
    "изучаешь",
    "=учишься"
   ],
   "idea": {
    "ru": "Ты студе́нтка?",
    "es": "¿Eres estudiante?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Да, я студе́нтка. Я изуча́ю англи́йский язы́к. 📚",
       "tr": "Da, ya studiéntka. Ya izucháyu anglíiskii yizýk.",
       "es": "Sí, soy estudiante. Estudio inglés."
      }
     ]
    }
   ]
  },
  {
   "id": "familia",
   "tema": "Su familia",
   "desde": 2,
   "claves": [
    "семь",
    "брат",
    "сестр",
    "мама",
    "папа",
    "дим"
   ],
   "idea": {
    "ru": "Кто Ди́ма?",
    "es": "¿Quién es Dima?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Мой брат — Ди́ма. Ма́ма, па́па, Ди́ма и я. И кот! 🐈",
       "tr": "Moi brat — Díma. Máma, pápa, Díma i ya. I kot!",
       "es": "Mi hermano es Dima. Mamá, papá, Dima y yo. ¡Y un gato!"
      }
     ]
    },
    {
     "d": 3,
     "l": [
      {
       "ru": "Ма́ма, па́па, Ди́ма и я. Па́па — инжене́р, ма́ма — врач, а Ди́ма — студе́нт. И кот Ба́рсик! 🐈‍⬛",
       "tr": "Máma, pápa, Díma i ya. Pápa — inzhiniér, máma — vrach, a Díma — studiént. I kot Bársik! ⬛",
       "es": "Mamá, papá, Dima y yo. Papá es ingeniero, mamá es médica y Dima es estudiante. ¡Y el gato Barsik!"
      }
     ]
    },
    {
     "d": 10,
     "l": [
      {
       "ru": "У меня́ есть брат Ди́ма. Ему́ шестна́дцать лет. Па́па рабо́тает инжене́ром, а ма́ма — врачо́м. И у нас есть кот Ба́рсик! 🐈‍⬛",
       "tr": "U miniá yest brat Díma. Yimú shisnáttsat liet. Pápa rabótayit inzhiniéram, a máma — vrachóm. I u nas yest kot Bársik! ⬛",
       "es": "Tengo un hermano, Dima, de dieciséis años. Papá trabaja de ingeniero y mamá de médica. ¡Y tenemos un gato, Barsik!"
      }
     ]
    }
   ]
  },
  {
   "id": "mascota",
   "tema": "Su gato",
   "desde": 2,
   "claves": [
    "=кот",
    "кошк"
   ],
   "idea": {
    "ru": "Кто э́то? 🐈",
    "es": "¿Quién es? 🐈"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Э́то мой кот. Его́ зову́т Ба́рсик! 🐈",
       "tr": "Éta moi kot. Yivó zavút Bársik!",
       "es": "Es mi gato. ¡Se llama Barsik!"
      }
     ]
    },
    {
     "d": 3,
     "l": [
      {
       "ru": "Мой кот — Ба́рсик. Он большо́й и чёрный! 🐈‍⬛",
       "tr": "Moi kot — Bársik. On balshói i chórnyi! ⬛",
       "es": "Mi gato es Barsik. ¡Es grande y negro!"
      }
     ]
    }
   ]
  },
  {
   "id": "moscu",
   "tema": "Su ciudad",
   "desde": 2,
   "claves": [
    "москв",
    "=город"
   ],
   "idea": {
    "ru": "Москва́? 🏙️",
    "es": "¿Y Moscú?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Да, Москва́ — мой го́род! 😍",
       "tr": "Da, Maskvá — moi górat!",
       "es": "¡Sí, Moscú es mi ciudad!"
      }
     ]
    },
    {
     "d": 3,
     "l": [
      {
       "ru": "Москва́ — мой го́род. Она́ больша́я и краси́вая! 😍",
       "tr": "Maskvá — moi górat. Aná balsháya i krasívaya!",
       "es": "Moscú es mi ciudad. ¡Es grande y bonita!"
      }
     ]
    }
   ]
  },
  {
   "id": "lucas",
   "tema": "Su amigo Lucas",
   "desde": 2,
   "claves": [
    "лукас"
   ],
   "idea": {
    "ru": "Кто Лу́кас?",
    "es": "¿Quién es Lucas?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "Лу́кас — мой друг. Он аргенти́нец, из Буэ́нос-А́йреса. Он говори́т по-испа́нски и по-ру́сски. 🇦🇷",
       "tr": "Lúkas — moi druk. On arguintínits, is Buinasáirisa. On gavarít paispánski i parússki.",
       "es": "Lucas es mi amigo. Es argentino, de Buenos Aires. Habla español y ruso."
      }
     ]
    }
   ]
  },
  {
   "id": "trabajo_m",
   "tema": "Si trabaja",
   "desde": 5,
   "claves": [
    "работаешь"
   ],
   "idea": {
    "ru": "Ты рабо́таешь?",
    "es": "¿Trabajas?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "Нет, я не рабо́таю. Я студе́нтка, я учу́сь. 📚",
       "tr": "Niet, ya nie rabótayu. Ya studiéntka, ya uchús.",
       "es": "No, no trabajo. Soy estudiante: estudio."
      }
     ]
    }
   ]
  },
  {
   "id": "deporte",
   "tema": "El deporte",
   "desde": 5,
   "claves": [
    "спорт",
    "плаваешь",
    "бегаешь",
    "футбол"
   ],
   "idea": {
    "ru": "Ты лю́бишь спорт?",
    "es": "¿Te gusta el deporte?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "Да! Я ча́сто пла́ваю. 🏊‍♀️ А Ди́ма о́чень лю́бит футбо́л. ⚽",
       "tr": "Da! Ya chásta plávayu. A Díma óchin liúbit fudból.",
       "es": "¡Sí! Nado a menudo. Y a Dima le encanta el fútbol."
      }
     ]
    }
   ]
  },
  {
   "id": "bebida",
   "tema": "Café o té",
   "desde": 5,
   "claves": [
    "кофе",
    "чай",
    "пьешь"
   ],
   "idea": {
    "ru": "Ты пьёшь ко́фе?",
    "es": "¿Tomas café?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "Да! Я пью ко́фе ка́ждый день. ☕",
       "tr": "Da! Ya pyu kófi kázhdyi dien.",
       "es": "¡Sí! Tomo café todos los días."
      }
     ]
    }
   ]
  },
  {
   "id": "dia_m",
   "tema": "Su día",
   "desde": 5,
   "claves": [
    "утром",
    "вечером",
    "днем",
    "встаешь",
    "делаешь"
   ],
   "idea": {
    "ru": "Что ты де́лаешь у́тром?",
    "es": "¿Qué haces por la mañana?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "У́тром я встаю́, за́втракаю и пью ко́фе. Днём я учу́сь, а ве́чером гуля́ю. ☀️🌙",
       "tr": "Útram ya fstayú, záftrakayu i pyu kófi. Dniom ya uchús, a viéchiram guliáyu.",
       "es": "Por la mañana me levanto, desayuno y tomo café. De día estudio y por la noche paseo."
      }
     ]
    }
   ]
  },
  {
   "id": "cantar",
   "tema": "Si canta",
   "desde": 5,
   "claves": [
    "поешь",
    "петь"
   ],
   "idea": {
    "ru": "Ты поёшь?",
    "es": "¿Cantas?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "Да, всегда́! Но о́чень пло́хо. 😂🎤",
       "tr": "Da, fsigdá! No óchin plója.",
       "es": "¡Sí, siempre! Pero muy mal."
      }
     ]
    }
   ]
  },
  {
   "id": "gustos_m",
   "tema": "Qué le gusta hacer",
   "desde": 5,
   "claves": [
    "любишь"
   ],
   "idea": {
    "ru": "Что ты лю́бишь де́лать?",
    "es": "¿Qué te gusta hacer?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "ru": "Я люблю́ пла́вать, петь и гото́вить! 🏊‍♀️🎤",
       "tr": "Ya liubliú plávat, piet i gatóvit!",
       "es": "Me encanta nadar, cantar y cocinar."
      }
     ]
    }
   ],
   "variantes": [
    {
     "claves": [
      "любишь есть",
      "блин",
      "еда",
      "едой"
     ],
     "v": [
      {
       "d": 5,
       "l": [
        {
         "ru": "Я о́чень люблю́ блины́! 🥞 Ба́бушка гото́вит блины́, а я ем! 😋",
         "tr": "Ya óchin liubliú bliný! Bábushka gatóvit bliný, a ya yem!",
         "es": "¡Me encantan los blinis! La abuela los hace y yo me los como."
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "vivir_m",
   "tema": "Dónde vive",
   "desde": 6,
   "claves": [
    "живешь",
    "=где ты"
   ],
   "idea": {
    "ru": "Где ты живёшь?",
    "es": "¿Dónde vives?"
   },
   "v": [
    {
     "d": 6,
     "l": [
      {
       "ru": "Я живу́ в Москве́, в це́нтре. Ря́дом метро́ и парк. 🏙️",
       "tr": "Ya zhivú v Maskvié, v tséntri. Riádam mitró i park.",
       "es": "Vivo en Moscú, en el centro. Cerca hay un metro y un parque."
      }
     ]
    }
   ]
  },
  {
   "id": "edad",
   "tema": "Su edad",
   "desde": 7,
   "claves": [
    "сколько лет",
    "=сколько тебе"
   ],
   "idea": {
    "ru": "Ско́лько тебе́ лет?",
    "es": "¿Cuántos años tienes?"
   },
   "v": [
    {
     "d": 7,
     "l": [
      {
       "ru": "Мне два́дцать лет. 🎂 А Ди́ме — шестна́дцать.",
       "tr": "Mnie dváttsat liet. A Dími — shisnáttsat.",
       "es": "Tengo veinte años. Y Dima, dieciséis."
      }
     ]
    }
   ]
  },
  {
   "id": "cumple_m",
   "tema": "Su cumpleaños",
   "desde": 7,
   "claves": [
    "день рождения",
    "рождени"
   ],
   "idea": {
    "ru": "Когда́ твой день рожде́ния?",
    "es": "¿Cuándo es tu cumpleaños?"
   },
   "v": [
    {
     "d": 7,
     "l": [
      {
       "ru": "В ма́е! 🎂 Я люблю́ май.",
       "tr": "V máyi! Ya liubliú mai.",
       "es": "¡En mayo! Me encanta mayo."
      }
     ]
    }
   ]
  },
  {
   "id": "finde_m",
   "tema": "Su fin de semana",
   "desde": 8,
   "claves": [
    "выходные",
    "суббот",
    "воскресен"
   ],
   "idea": {
    "ru": "Что ты де́лала в выходны́е?",
    "es": "¿Qué hiciste el fin de semana?"
   },
   "v": [
    {
     "d": 8,
     "l": [
      {
       "ru": "Я была́ на да́че. Я и ба́бушка рабо́тали в саду́ и пи́ли чай. 🏡",
       "tr": "Ya bylá na dáchi. Ya i bábushka rabótali v sadú i píli chai.",
       "es": "Estuve en la dacha. La abuela y yo Trabajamos en el jardín y tomamos té."
      }
     ]
    }
   ]
  },
  {
   "id": "infancia",
   "tema": "Su infancia",
   "desde": 8,
   "claves": [
    "маленьк",
    "детств",
    "раньше"
   ],
   "idea": {
    "ru": "Где ты жила́ ра́ньше?",
    "es": "¿Dónde vivías antes?"
   },
   "v": [
    {
     "d": 8,
     "l": [
      {
       "ru": "Когда́ я была́ ма́ленькая, я жила́ в дере́вне. 🏡",
       "tr": "Kagdá ya bylá málinkaya, ya zhilá v diriévni.",
       "es": "De pequeña vivía en un pueblo."
      }
     ]
    }
   ]
  },
  {
   "id": "planes_m",
   "tema": "Sus planes",
   "desde": 9,
   "claves": [
    "будешь",
    "планы",
    "летом",
    "завтра"
   ],
   "idea": {
    "ru": "Что ты бу́дешь де́лать ле́том?",
    "es": "¿Qué vas a hacer en verano?"
   },
   "v": [
    {
     "d": 9,
     "l": [
      {
       "ru": "Ле́том я пое́ду на мо́ре, в Сочи́! А пото́м бу́ду рабо́тать. 🏖️",
       "tr": "Liétam ya payédu na móri, v Sachí! A patóm búdu rabótat.",
       "es": "En verano voy a ir al mar, a Sochi. Y después voy a trabajar."
      }
     ]
    }
   ]
  },
  {
   "id": "suenos",
   "tema": "Su sueño",
   "desde": 9,
   "claves": [
    "мечта",
    "мечтаешь",
    "через пять"
   ],
   "idea": {
    "ru": "Кака́я у тебя́ мечта́?",
    "es": "¿Cuál es tu sueño?"
   },
   "v": [
    {
     "d": 9,
     "l": [
      {
       "ru": "Я хочу́ пое́хать в Испа́нию и в Аргенти́ну. И я бу́ду преподава́ть испа́нский! ✈️👩‍🏫",
       "tr": "Ya jachú payéjat v Ispániyu i v Arguintínu. I ya búdu pripadavát ispánskii!",
       "es": "Quiero ir a España y a Argentina. ¡Y voy a ser profesora de español!"
      }
     ]
    }
   ]
  },
  {
   "id": "olga",
   "tema": "Olga Petrovna",
   "desde": 2,
   "claves": [
    "ольг"
   ],
   "idea": {
    "ru": "Кто О́льга Петро́вна?",
    "es": "¿Quién es Olga Petrovna?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "ru": "О́льга Петро́вна — учи́тель. Она́ из Москвы́. 👩‍🏫",
       "tr": "Ólga Pitróvna — uchítil. Aná is Maskvý.",
       "es": "Olga Petrovna es profesora. Es de Moscú."
      }
     ]
    }
   ]
  }
 ],
 "temas": [
  {
   "id": "u2-conocer",
   "desde": 2,
   "titulo": "Знако́мство",
   "tituloEs": "Conocerse",
   "resumen": "Saludar, decir tu nombre y conocer a los amigos de Masha",
   "intro": "Masha te saluda y quiere saber cómo te llamas. Después te presenta a Lucas y a Olga Petrovna.",
   "inicio": "saludo",
   "apertura": false,
   "preguntas": [],
   "nodos": [
    {
     "id": "saludo",
     "titulo": "Saludo",
     "bot": [
      {
       "ru": "Приве́т! 👋",
       "tr": "Priviét!",
       "es": "¡Hola!"
      }
     ],
     "ideas": [
      {
       "ru": "Приве́т!",
       "es": "¡Hola!"
      },
      {
       "ru": "Приве́т, Ма́ша!",
       "es": "¡Hola, Masha!"
      },
      {
       "ru": "Здра́вствуйте!",
       "es": "¡Hola! (formal)"
      },
      {
       "ru": "До́брый день!",
       "es": "¡Buen día!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Saludo informal",
       "claves": [
        "привет",
        "=здравствуй",
        "=хай"
       ],
       "resp": [],
       "ir": "nombre"
      },
      {
       "etiqueta": "Saludo formal",
       "claves": [
        "здравств",
        "=добрый",
        "=доброе"
       ],
       "resp": [
        {
         "ru": "Здра́вствуйте! 🙂",
         "tr": "Zdrástvuiti!",
         "es": "¡Hola!"
        }
       ],
       "ir": "tuteo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [],
       "ir": "nombre",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Приве́т! 🙂",
      "tr": "Priviét!",
      "es": "¡Hola!"
     }
    },
    {
     "id": "tuteo",
     "titulo": "¿Nos tuteamos?",
     "bot": [
      {
       "ru": "Мо́жно на «ты»? 🙂",
       "tr": "Mózhna na «ty»?",
       "es": "¿Nos tuteamos? (¿Te hablo de «ты»?)"
      }
     ],
     "ideas": [
      {
       "ru": "Да, мо́жно!",
       "es": "¡Sí, claro!"
      },
      {
       "ru": "Да!",
       "es": "¡Sí!"
      },
      {
       "ru": "Нет, на «вы», пожа́луйста.",
       "es": "No, de «вы», por favor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Хорошо́, хорошо́! 😄 Я студе́нтка, а не учи́тель! Мо́жно на «ты».",
         "tr": "Jarashó, jarashó! Ya studiéntka, a nie uchítil! Mózhna na «ty».",
         "es": "¡Bueno, bueno! Soy estudiante, no profesora: podemos tutearnos."
        }
       ],
       "ir": "nombre"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "можно",
        "хорошо"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "nombre"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́, на «ты»! 🙂",
         "tr": "Jarashó, na «ty»!",
         "es": "¡Bueno, de «ты»!"
        }
       ],
       "ir": "nombre",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Мо́жно на «ты»?",
      "tr": "Mózhna na «ty»?",
      "es": "¿Nos tuteamos?"
     }
    },
    {
     "id": "nombre",
     "titulo": "Tu nombre",
     "bot": [
      {
       "ru": "Я Ма́ша. А как тебя́ зову́т?",
       "tr": "Ya Másha. A kak tibiá zavút?",
       "es": "Soy Masha. ¿Y cómo te llamas?"
      }
     ],
     "ideas": [
      {
       "ru": "Меня́ зову́т …",
       "es": "Me llamo …"
      },
      {
       "ru": "Я …",
       "es": "Soy …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Dice su nombre",
       "resp": [],
       "ir": "lucas",
       "dato": "Nombre",
       "captura": "nombre",
       "porNombre": {
        "маша|мария|маня": [
         {
          "ru": "Меня́ то́же зову́т Ма́ша! 😄",
          "tr": "Miniá tózhi zavút Másha!",
          "es": "¡Yo también me llamo Masha!"
         }
        ],
        "лукас": [
         {
          "ru": "Лу́кас? Мой друг то́же Лу́кас! 😄",
          "tr": "Lúkas? Moi druk tózhi Lúkas!",
          "es": "¿Lucas? ¡Mi amigo también se llama Lucas!"
         }
        ],
        "*": [
         {
          "ru": "О́чень прия́тно, {nombre}! 😊",
          "tr": "Óchin priyátna, {nombre}!",
          "es": "¡Mucho gusto, {nombre}!"
         }
        ]
       }
      }
     ],
     "aTi": [
      {
       "ru": "Я Ма́ша! 😄",
       "tr": "Ya Másha!",
       "es": "¡Soy Masha!"
      }
     ],
     "aTiTema": "nombre_m",
     "saltarSi": "nombre",
     "sig": "lucas",
     "alSaltar": [
      {
       "ru": "Я Ма́ша, а ты — {nombre}! 🙂",
       "tr": "Ya Másha, a ty — {nombre}!",
       "es": "Yo soy Masha, y tú eres {nombre}."
      }
     ],
     "retomar": {
      "ru": "Так как тебя́ зову́т?",
      "tr": "Tak kak tibiá zavút?",
      "es": "Entonces, ¿cómo te llamas?"
     }
    },
    {
     "id": "lucas",
     "titulo": "Lucas",
     "bot": [
      {
       "ru": "Познако́мься: э́то мой друг Лу́кас! 👋",
       "tr": "Paznakómsia: éta moi druk Lúkas!",
       "es": "Te presento a mi amigo Lucas."
      }
     ],
     "ideas": [
      {
       "ru": "Приве́т, Лу́кас!",
       "es": "¡Hola, Lucas!"
      },
      {
       "ru": "О́чень прия́тно!",
       "es": "¡Mucho gusto!"
      },
      {
       "ru": "Рад познако́миться!",
       "es": "¡Encantado!"
      },
      {
       "ru": "Ра́да познако́миться!",
       "es": "¡Encantada!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Рад / ра́да",
       "claves": [
        "=рад",
        "=рада"
       ],
       "resp": [
        {
         "ru": "Лу́кас то́же рад! 😄",
         "tr": "Lúkas tózhi rat!",
         "es": "¡Lucas también está encantado!"
        }
       ],
       "ir": "lucas_de",
       "genero": {
        "рад": "m",
        "рада": "f"
       }
      },
      {
       "etiqueta": "Saluda",
       "claves": [
        "привет",
        "приятно",
        "здравств"
       ],
       "resp": [
        {
         "ru": "Лу́кас говори́т: «Приве́т!» 😄",
         "tr": "Lúkas gavarít: «Priviét!»",
         "es": "Lucas dice: «¡Hola!»"
        }
       ],
       "ir": "lucas_de"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "🙂",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "lucas_de",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Э́то Лу́кас! 👋",
      "tr": "Éta Lúkas!",
      "es": "¡Este es Lucas!"
     }
    },
    {
     "id": "lucas_de",
     "titulo": "De dónde es Lucas",
     "bot": [
      {
       "ru": "Лу́кас не ру́сский. Отку́да он? 🤔",
       "tr": "Lúkas nie rússkii. Atkúda on?",
       "es": "Lucas no es ruso. ¿De dónde es?"
      }
     ],
     "ideas": [
      {
       "ru": "Он из Аргенти́ны?",
       "es": "¿Es de Argentina?"
      },
      {
       "ru": "Он из Испа́нии?",
       "es": "¿Es de España?"
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Argentina",
       "claves": [
        "аргентин",
        "буэнос"
       ],
       "resp": [
        {
         "ru": "Да! Он из Аргенти́ны, из Буэ́нос-А́йреса. 🇦🇷",
         "tr": "Da! On is Arguintíny, is Buinasáirisa.",
         "es": "¡Sí! Es de Argentina, de Buenos Aires."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Он из Аргенти́ны! Он аргенти́нец. 🇦🇷",
         "tr": "On is Arguintíny! On arguintínits.",
         "es": "¡Es de Argentina! Es argentino."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otro país",
       "resp": [],
       "ir": "olga",
       "captura": "pais",
       "guarda": "no",
       "porPais": {
        "*": {
         "resp": [
          {
           "ru": "Нет, не из {pais_gen}. 😄 Он из Аргенти́ны! 🇦🇷",
           "tr": "Niet, nie is {pais_gen}. On is Arguintíny!",
           "es": "No, no es de {pais}. ¡Es de Argentina!"
          }
         ],
         "ir": "olga"
        }
       }
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он из Аргенти́ны! 🇦🇷",
         "tr": "On is Arguintíny!",
         "es": "¡Es de Argentina!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Отку́да Лу́кас? 🤔",
      "tr": "Atkúda Lúkas?",
      "es": "¿De dónde es Lucas?"
     }
    },
    {
     "id": "olga",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "А э́то О́льга Петро́вна. 👩‍🏫 Она́ учи́тель.",
       "tr": "A éta Ólga Pitróvna. Aná uchítil.",
       "es": "Y esta es Olga Petrovna. Es profesora."
      },
      {
       "ru": "Как её зову́т? 😄",
       "tr": "Kak yiyó zavút?",
       "es": "¿Cómo se llama?"
      }
     ],
     "ideas": [
      {
       "ru": "Её зову́т О́льга Петро́вна.",
       "es": "Se llama Olga Petrovna."
      },
      {
       "ru": "О́льга Петро́вна!",
       "es": "¡Olga Petrovna!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Lo recuerda",
       "claves": [
        "ольг",
        "петровн"
       ],
       "resp": [
        {
         "ru": "Да! 😄 👍",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "olga_vy"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Её зову́т О́льга Петро́вна. 🙂",
         "tr": "Yiyó zavút Ólga Pitróvna.",
         "es": "Se llama Olga Petrovna."
        }
       ],
       "ir": "olga_vy",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Как её зову́т?",
      "tr": "Kak yiyó zavút?",
      "es": "¿Cómo se llama?"
     }
    },
    {
     "id": "olga_vy",
     "titulo": "¿Ты o вы?",
     "bot": [
      {
       "ru": "О́льга Петро́вна — на «ты»? 🤔",
       "tr": "Ólga Pitróvna — na «ty»?",
       "es": "¿A Olga Petrovna se le habla de «ты»?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, на «вы».",
       "es": "No, de «вы»."
      },
      {
       "ru": "Да, на «ты».",
       "es": "Sí, de «ты»."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Вы",
       "claves": [
        "=вы"
       ],
       "resp": [
        {
         "ru": "Да! На «вы»: она́ учи́тель. 👍",
         "tr": "Da! Na «vy»: aná uchítil.",
         "es": "¡Sí! De «вы»: es profesora."
        }
       ],
       "ir": "olga_hola"
      },
      {
       "etiqueta": "Ты",
       "claves": [
        "=ты",
        "=да"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Она́ учи́тель: на «вы».",
         "tr": "Niet! Aná uchítil: na «vy».",
         "es": "¡No! Es profesora: de «вы»."
        }
       ],
       "ir": "olga_hola"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Да, не на «ты». На «вы»! 👍",
         "tr": "Da, nie na «ty». Na «vy»!",
         "es": "Exacto, de «ты» no. ¡De «вы»!"
        }
       ],
       "ir": "olga_hola"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На «вы»: она́ учи́тель. 🙂",
         "tr": "Na «vy»: aná uchítil.",
         "es": "De «вы»: es profesora."
        }
       ],
       "ir": "olga_hola",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga_hola",
     "titulo": "Saludar a Olga Petrovna",
     "bot": [
      {
       "ru": "О́льга Петро́вна тут! 👩‍🏫 Что ты говори́шь?",
       "tr": "Ólga Pitróvna tut! Shto ty gavarísh?",
       "es": "¡Olga Petrovna está aquí! ¿Qué le dices?"
      }
     ],
     "ideas": [
      {
       "ru": "Здра́вствуйте!",
       "es": "¡Hola! (formal)"
      },
      {
       "ru": "До́брый день!",
       "es": "¡Buen día!"
      },
      {
       "ru": "Приве́т!",
       "es": "¡Hola!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Formal",
       "claves": [
        "здравствуйте",
        "добр"
       ],
       "resp": [
        {
         "ru": "👩‍🏫 «Здра́вствуйте! О́чень прия́тно!» 😊",
         "tr": "«Zdrástvuiti! Óchin priyátna!»",
         "es": "«¡Hola! ¡Mucho gusto!»"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Informal",
       "claves": [
        "привет",
        "=здравствуй"
       ],
       "resp": [
        {
         "ru": "«Приве́т»? 😅 Нет, нет! «Здра́вствуйте»!",
         "tr": "«Priviét»? Niet, niet! «Zdrástvuiti»!",
         "es": "¿«Привет»? ¡No, no! «Здравствуйте»."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Здра́вствуйте»! 🙂",
         "tr": "«Zdrástvuiti»!",
         "es": "¡«Здравствуйте»!"
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Что ты говори́шь О́льге Петро́вне?",
      "tr": "Shto ty gavarísh Ólgui Pitróvni?",
      "es": "¿Qué le dices a Olga Petrovna?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u2-origen",
   "desde": 2,
   "titulo": "Отку́да ты?",
   "tituloEs": "¿De dónde eres?",
   "resumen": "Países, ciudades y nacionalidades",
   "intro": "Masha quiere saber de dónde eres. Después te pregunta por países y ciudades.",
   "inicio": "pais",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pais",
     "titulo": "Tu país",
     "bot": [
      {
       "ru": "Отку́да ты, {nombre}? 🌍",
       "tr": "Atkúda ty, {nombre}?",
       "es": "¿De dónde eres, {nombre}?"
      }
     ],
     "ideas": [
      {
       "ru": "Я из Испа́нии.",
       "es": "Soy de España."
      },
      {
       "ru": "Я из Аргенти́ны.",
       "es": "Soy de Argentina."
      },
      {
       "ru": "Я из Барсело́ны.",
       "es": "Soy de Barcelona."
      },
      {
       "ru": "Я из …",
       "es": "Soy de …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Barcelona",
       "claves": [
        "барселон"
       ],
       "resp": [
        {
         "ru": "Из Барсело́ны! 😍 Э́то Испа́ния!",
         "tr": "Is Barsilóny! Éta Ispániya!",
         "es": "¡De Barcelona! ¡Eso es España!"
        }
       ],
       "ir": "nac",
       "dato": "Ciudad",
       "fijaPais": "Испа́ния",
       "datoValor": "Барсело́на"
      },
      {
       "etiqueta": "Madrid",
       "claves": [
        "мадрид"
       ],
       "resp": [
        {
         "ru": "Из Мадри́да! 🇪🇸",
         "tr": "Is Madrída!",
         "es": "¡De Madrid!"
        }
       ],
       "ir": "nac",
       "dato": "Ciudad",
       "fijaPais": "Испа́ния",
       "datoValor": "Мадри́д"
      },
      {
       "etiqueta": "Buenos Aires",
       "claves": [
        "буэнос"
       ],
       "resp": [
        {
         "ru": "Из Буэ́нос-А́йреса? Как Лу́кас! 😄",
         "tr": "Is Buinasáirisa? Kak Lúkas!",
         "es": "¿De Buenos Aires? ¡Como Lucas!"
        }
       ],
       "ir": "nac",
       "dato": "Ciudad",
       "fijaPais": "Аргенти́на",
       "datoValor": "Буэ́нос-А́йрес"
      },
      {
       "etiqueta": "Moscú",
       "claves": [
        "москв"
       ],
       "resp": [
        {
         "ru": "Из Москвы́? Я то́же! 😄",
         "tr": "Is Maskvý? Ya tózhi!",
         "es": "¿De Moscú? ¡Yo también!"
        }
       ],
       "ir": "nac",
       "dato": "Ciudad",
       "fijaPais": "Росси́я",
       "datoValor": "Москва́"
      },
      {
       "etiqueta": "Un país",
       "resp": [],
       "ir": "nac",
       "dato": "País",
       "captura": "pais",
       "porPais": {
        "Аргенти́на": {
         "resp": [
          {
           "ru": "Из Аргенти́ны? Мой друг Лу́кас то́же из Аргенти́ны! 🇦🇷",
           "tr": "Is Arguintíny? Moi druk Lúkas tózhi is Arguintíny!",
           "es": "¿De Argentina? ¡Mi amigo Lucas también es de Argentina!"
          }
         ],
         "ir": "nac"
        },
        "Испа́ния": {
         "resp": [
          {
           "ru": "Из Испа́нии! 🇪🇸 Отли́чно! 😊",
           "tr": "Is Ispánii! Atlíchna!",
           "es": "¡De España! ¡Genial!"
          }
         ],
         "ir": "nac"
        },
        "Катало́ния": {
         "resp": [
          {
           "ru": "Из Катало́нии! Барсело́на! 😍",
           "tr": "Is Katalónii! Barsilóna!",
           "es": "¡De Cataluña! ¡Barcelona!"
          }
         ],
         "ir": "nac"
        },
        "Росси́я": {
         "resp": [
          {
           "ru": "Из Росси́и? Я то́же! 😄",
           "tr": "Is Rassíi? Ya tózhi!",
           "es": "¿De Rusia? ¡Yo también!"
          }
         ],
         "ir": "nac"
        },
        "*": {
         "resp": [
          {
           "ru": "Из {pais_gen}? Отли́чно! 😊",
           "tr": "Is {pais_gen}? Atlíchna!",
           "es": "¿De {pais}? ¡Genial!"
          }
         ],
         "ir": "nac"
        }
       }
      },
      {
       "etiqueta": "Otra ciudad",
       "resp": [
        {
         "ru": "Из {x}? 😊",
         "tr": "Is {x}?",
         "es": "¿De {x}?"
        }
       ],
       "ir": "nac",
       "dato": "Ciudad",
       "captura": "eco",
       "tras": [
        "из"
       ]
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "nac",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я из Москвы́! 🙂",
       "tr": "Ya is Maskvý!",
       "es": "¡Soy de Moscú!"
      }
     ],
     "aTiTema": "origen_m",
     "retomar": {
      "ru": "Так отку́да ты? 🙂",
      "tr": "Tak atkúda ty?",
      "es": "Entonces, ¿de dónde eres?"
     }
    },
    {
     "id": "nac",
     "titulo": "Tu nacionalidad",
     "bot": [
      {
       "ru": "Я ру́сская. А ты? 🙂",
       "tr": "Ya rússkaya. A ty?",
       "es": "Yo soy rusa. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я испа́нец.",
       "es": "Soy español."
      },
      {
       "ru": "Я испа́нка.",
       "es": "Soy española."
      },
      {
       "ru": "Я аргенти́нец.",
       "es": "Soy argentino."
      },
      {
       "ru": "Я аргенти́нка.",
       "es": "Soy argentina."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Una nacionalidad",
       "resp": [],
       "ir": "olga",
       "dato": "Nacionalidad",
       "captura": "pais",
       "guarda": "nac",
       "porPais": {
        "*": {
         "resp": [
          {
           "ru": "Ты {nac}! Отли́чно! 😊",
           "tr": "Ty {nac}! Atlíchna!",
           "es": "¡Eres {nac_es}! ¡Genial!"
          }
         ],
         "ir": "olga"
        }
       }
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Я ру́сская. А ты?",
      "tr": "Ya rússkaya. A ty?",
      "es": "Yo soy rusa. ¿Y tú?"
     }
    },
    {
     "id": "olga",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "Мой друг Лу́кас — аргенти́нец. А О́льга Петро́вна? Она́ отку́да? 🤔",
       "tr": "Moi druk Lúkas — arguintínits. A Ólga Pitróvna? Aná atkúda?",
       "es": "Mi amigo Lucas es argentino. ¿Y Olga Petrovna? ¿De dónde es?"
      }
     ],
     "ideas": [
      {
       "ru": "Она́ из Росси́и?",
       "es": "¿Es de Rusia?"
      },
      {
       "ru": "Она́ ру́сская?",
       "es": "¿Es rusa?"
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusia",
       "claves": [
        "росси",
        "русск",
        "москв"
       ],
       "resp": [
        {
         "ru": "Да! Она́ ру́сская, из Москвы́. Как я! 😊",
         "tr": "Da! Aná rússkaya, is Maskvý. Kak ya!",
         "es": "¡Sí! Es rusa, de Moscú. ¡Como yo!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Она́ из Росси́и, из Москвы́. Она́ ру́сская! 🇷🇺",
         "tr": "Aná is Rassíi, is Maskvý. Aná rússkaya!",
         "es": "Es de Rusia, de Moscú. ¡Es rusa!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А э́то мой брат Ди́ма. 👦 Он ру́сский? 😄",
       "tr": "A éta moi brat Díma. On rússkii?",
       "es": "Este es mi hermano Dima. ¿Es ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, он ру́сский.",
       "es": "Sí, es ruso."
      },
      {
       "ru": "Нет.",
       "es": "No."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "русск"
       ],
       "resp": [
        {
         "ru": "Да! 😄 Он то́же из Москвы́.",
         "tr": "Da! On tózhi is Maskvý.",
         "es": "¡Sí! También es de Moscú."
        }
       ],
       "ir": "paris"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? 😄 Он ру́сский! Он из Москвы́!",
         "tr": "Niet? On rússkii! On is Maskvý!",
         "es": "¿No? ¡Es ruso! ¡Es de Moscú!"
        }
       ],
       "ir": "paris"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он ру́сский, из Москвы́. 🙂",
         "tr": "On rússkii, is Maskvý.",
         "es": "Es ruso, de Moscú."
        }
       ],
       "ir": "paris",
       "comodin": true
      }
     ]
    },
    {
     "id": "paris",
     "titulo": "París",
     "bot": [
      {
       "ru": "А Пари́ж — э́то Испа́ния? 🤔",
       "tr": "A Parísh — éta Ispániya?",
       "es": "¿Y París es España?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, э́то Фра́нция.",
       "es": "No, es Francia."
      },
      {
       "ru": "Да.",
       "es": "Sí."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Пари́ж — э́то Фра́нция! 🇫🇷",
         "tr": "Niet! Parísh — éta Frántsiya!",
         "es": "¡No! París es Francia."
        }
       ],
       "ir": "kiev"
      },
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "франц",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Да! Пари́ж — э́то Фра́нция. 🇫🇷 👍",
         "tr": "Da! Parísh — éta Frántsiya.",
         "es": "¡Sí! París es Francia."
        }
       ],
       "ir": "kiev"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Пари́ж — э́то Фра́нция. 🇫🇷",
         "tr": "Parísh — éta Frántsiya.",
         "es": "París es Francia."
        }
       ],
       "ir": "kiev"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пари́ж — э́то Фра́нция. 🇫🇷",
         "tr": "Parísh — éta Frántsiya.",
         "es": "París es Francia."
        }
       ],
       "ir": "kiev",
       "comodin": true
      }
     ]
    },
    {
     "id": "kiev",
     "titulo": "Kiev",
     "bot": [
      {
       "ru": "А Ки́ев? 🤔",
       "tr": "A Kíyif?",
       "es": "¿Y Kiev?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то Украи́на.",
       "es": "Es Ucrania."
      },
      {
       "ru": "Э́то Росси́я.",
       "es": "Es Rusia."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusia",
       "claves": [
        "росси"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Ки́ев — э́то Украи́на. 🇺🇦",
         "tr": "Niet! Kíyif — éta Ukraína.",
         "es": "¡No! Kiev es Ucrania."
        }
       ],
       "ir": "minsk"
      },
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "украин"
       ],
       "resp": [
        {
         "ru": "Да! Ки́ев — э́то Украи́на. 🇺🇦 👍",
         "tr": "Da! Kíyif — éta Ukraína.",
         "es": "¡Sí! Kiev es Ucrania."
        }
       ],
       "ir": "minsk"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Ки́ев — э́то Украи́на. 🇺🇦",
         "tr": "Kíyif — éta Ukraína.",
         "es": "Kiev es Ucrania."
        }
       ],
       "ir": "minsk"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ки́ев — э́то Украи́на. 🇺🇦",
         "tr": "Kíyif — éta Ukraína.",
         "es": "Kiev es Ucrania."
        }
       ],
       "ir": "minsk",
       "comodin": true
      }
     ]
    },
    {
     "id": "minsk",
     "titulo": "Minsk",
     "bot": [
      {
       "ru": "А Минск? 😄",
       "tr": "A Minsk?",
       "es": "¿Y Minsk?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то Белару́сь.",
       "es": "Es Bielorrusia."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "беларус",
        "белорус"
       ],
       "resp": [
        {
         "ru": "Да! Минск — э́то Белару́сь. Отли́чно! 😄",
         "tr": "Da! Minsk — éta Bilarús. Atlíchna!",
         "es": "¡Sí! Minsk es Bielorrusia. ¡Lo sabes todo!"
        }
       ],
       "ir": "lisboa"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Минск — э́то Белару́сь. 🙂",
         "tr": "Minsk — éta Bilarús.",
         "es": "Minsk es Bielorrusia."
        }
       ],
       "ir": "lisboa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Минск — э́то Белару́сь. 🙂",
         "tr": "Minsk — éta Bilarús.",
         "es": "Minsk es Bielorrusia."
        }
       ],
       "ir": "lisboa",
       "comodin": true
      }
     ]
    },
    {
     "id": "lisboa",
     "titulo": "Lisboa",
     "bot": [
      {
       "ru": "А Лиссабо́н? 🤔",
       "tr": "A Lissabón?",
       "es": "¿Y Lisboa?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то Португа́лия.",
       "es": "Es Portugal."
      },
      {
       "ru": "Э́то Испа́ния.",
       "es": "Es España."
      }
     ],
     "ramas": [
      {
       "etiqueta": "España",
       "claves": [
        "испан"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Лиссабо́н — э́то Португа́лия. 🇵🇹",
         "tr": "Niet! Lissabón — éta Partugáliya.",
         "es": "¡No! Lisboa es Portugal."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "португал"
       ],
       "resp": [
        {
         "ru": "Да! Лиссабо́н — э́то Португа́лия. 🇵🇹 Отли́чно!",
         "tr": "Da! Lissabón — éta Partugáliya. Atlíchna!",
         "es": "¡Sí! Lisboa es Portugal. ¡Excelente!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Лиссабо́н — э́то Португа́лия. 🇵🇹",
         "tr": "Lissabón — éta Partugáliya.",
         "es": "Lisboa es Portugal."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Лиссабо́н — э́то Португа́лия. 🇵🇹",
         "tr": "Lissabón — éta Partugáliya.",
         "es": "Lisboa es Portugal."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u2-idiomas",
   "desde": 2,
   "titulo": "Языки́",
   "tituloEs": "Idiomas",
   "resumen": "Qué idiomas hablas y un juego de palabras",
   "intro": "Masha te pregunta qué idiomas hablas y juegan a traducir palabras: ella pregunta en español y tú en ruso.",
   "inicio": "rus",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "rus",
     "titulo": "Ruso",
     "bot": [
      {
       "ru": "Ты говори́шь по-ру́сски? 😄",
       "tr": "Ty gavarísh parússki?",
       "es": "¿Hablas ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, говорю́.",
       "es": "Sí, hablo."
      },
      {
       "ru": "Да, немно́го.",
       "es": "Sí, un poco."
      },
      {
       "ru": "Пло́хо. 😅",
       "es": "Mal."
      },
      {
       "ru": "Нет.",
       "es": "No."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Un poco",
       "claves": [
        "немног"
       ],
       "resp": [
        {
         "ru": "Немно́го — э́то уже́ хорошо́! 👍",
         "tr": "Nimnóga — éta uzhé jarashó!",
         "es": "¡Un poco ya está muy bien!"
        }
       ],
       "ir": "uchish"
      },
      {
       "etiqueta": "Mal",
       "claves": [
        "плохо"
       ],
       "resp": [
        {
         "ru": "Пло́хо? Нет! Ты говори́шь хорошо́! 👍",
         "tr": "Plója? Niet! Ty gavarísh jarashó!",
         "es": "¿Mal? ¡No! ¡Hablas bien!"
        }
       ],
       "ir": "uchish"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? 😄 А э́то что? Э́то ру́сский!",
         "tr": "Niet? A éta shto? Éta rússkii!",
         "es": "¿No? ¿Y esto qué es? ¡Esto es ruso!"
        }
       ],
       "ir": "uchish"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "говорю",
        "хорошо"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "uchish"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "uchish",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Ты говори́шь по-ру́сски?",
      "tr": "Ty gavarísh parússki?",
      "es": "¿Hablas ruso?"
     }
    },
    {
     "id": "uchish",
     "titulo": "Estudias ruso",
     "bot": [
      {
       "ru": "А я учу́ испа́нский! 😄 А ты? Ру́сский? 📚",
       "tr": "A ya uchú ispánskii! A ty? Rússkii?",
       "es": "¡Yo estudio español! ¿Y tú? ¿Ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я учу́ ру́сский.",
       "es": "Sí, estudio ruso."
      },
      {
       "ru": "Да, я изуча́ю ру́сский язы́к.",
       "es": "Sí, estudio ruso."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "учу",
        "изучаю",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "ingles"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "ingles",
       "comodin": true
      }
     ]
    },
    {
     "id": "ingles",
     "titulo": "Inglés",
     "bot": [
      {
       "ru": "Ты говори́шь по-англи́йски? 🇬🇧",
       "tr": "Ty gavarísh paanglíiski?",
       "es": "¿Hablas inglés?"
      }
     ],
     "ideas": [
      {
       "ru": "Да.",
       "es": "Sí."
      },
      {
       "ru": "Да, хорошо́.",
       "es": "Sí, bien."
      },
      {
       "ru": "Немно́го.",
       "es": "Un poco."
      },
      {
       "ru": "Пло́хо.",
       "es": "Mal."
      },
      {
       "ru": "Нет.",
       "es": "No."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Un poco",
       "claves": [
        "немног"
       ],
       "resp": [
        {
         "ru": "Немно́го — э́то хорошо́! 😊 А я по-испа́нски говорю́ пло́хо. 😅",
         "tr": "Nimnóga — éta jarashó! A ya paispánski gavariú plója.",
         "es": "¡Un poco está bien! Yo hablo mal español."
        }
       ],
       "ir": "hola_es",
       "dato": "Inglés",
       "datoValor": "немно́го"
      },
      {
       "etiqueta": "No o mal",
       "claves": [
        "=нет",
        "плохо"
       ],
       "resp": [
        {
         "ru": "А я говорю́ по-англи́йски. А по-испа́нски — пло́хо! 😅",
         "tr": "A ya gavariú paanglíiski. A paispánski — plója!",
         "es": "Yo hablo inglés. ¡Y español, mal!"
        }
       ],
       "ir": "hola_es",
       "dato": "Inglés",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "хорошо",
        "говорю"
       ],
       "resp": [
        {
         "ru": "Я то́же! 😊 А по-испа́нски я говорю́ пло́хо. 😅",
         "tr": "Ya tózhi! A paispánski ya gavariú plója.",
         "es": "¡Yo también! Y español hablo mal."
        }
       ],
       "ir": "hola_es",
       "dato": "Inglés",
       "datoValor": "да"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я говорю́ по-англи́йски. А по-испа́нски — пло́хо! 😅",
         "tr": "Ya gavariú paanglíiski. A paispánski — plója!",
         "es": "Yo hablo inglés. ¡Y español, mal!"
        }
       ],
       "ir": "hola_es",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Да, я говорю́ по-англи́йски. 🇬🇧",
       "tr": "Da, ya gavariú paanglíiski.",
       "es": "Sí, hablo inglés."
      }
     ],
     "aTiTema": "idiomas_m"
    },
    {
     "id": "hola_es",
     "titulo": "«Привет» en español",
     "bot": [
      {
       "ru": "Как по-испа́нски «приве́т»? 🤔",
       "tr": "Kak paispánski «priviét»?",
       "es": "¿Cómo se dice «привет» en español?"
      }
     ],
     "ideas": [
      {
       "ru": "Hola",
       "es": "Hola"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Hola",
       "claves": [
        "hola"
       ],
       "resp": [
        {
         "ru": "«Hola»! 😄 Спаси́бо!",
         "tr": "«Hola»! Spasíba!",
         "es": "¡«Hola»! ¡Gracias!"
        }
       ],
       "ir": "gracias_es"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔 Лу́кас говори́т «hola».",
         "tr": "Jm… Lúkas gavarít «hola».",
         "es": "Mmm… Lucas dice «hola»."
        }
       ],
       "ir": "gracias_es",
       "comodin": true
      }
     ],
     "latin": true
    },
    {
     "id": "gracias_es",
     "titulo": "«Спасибо» en español",
     "bot": [
      {
       "ru": "А «спаси́бо»? 🙏",
       "tr": "A «spasíba»?",
       "es": "¿Y «спасибо»?"
      }
     ],
     "ideas": [
      {
       "ru": "Gracias",
       "es": "Gracias"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Gracias",
       "claves": [
        "gracias",
        "grasias"
       ],
       "resp": [
        {
         "ru": "«Gracias»! 😄 Отли́чно!",
         "tr": "«Gracias»! Atlíchna!",
         "es": "¡«Gracias»! ¡Genial!"
        }
       ],
       "ir": "gato"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Gracias»! 🙂",
         "tr": "«Gracias»!",
         "es": ""
        }
       ],
       "ir": "gato",
       "comodin": true
      }
     ],
     "latin": true
    },
    {
     "id": "gato",
     "titulo": "«Gato» en ruso",
     "bot": [
      {
       "ru": "А тепе́рь ты! Как по-ру́сски «gato»? 🐈",
       "tr": "A tipiér ty! Kak parússki «gato»?",
       "es": "¡Ahora tú! ¿Cómo se dice «gato» en ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Кот.",
       "es": "Gato."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "=кот"
       ],
       "resp": [
        {
         "ru": "Да! Кот! 🐈 Отли́чно! 👍",
         "tr": "Da! Kot! Atlíchna!",
         "es": "¡Sí! ¡Кот! ¡Genial!"
        }
       ],
       "ir": "agua"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "«Gato» — э́то кот! 🐈",
         "tr": "«Gato» — éta kot!",
         "es": "«Gato» es кот."
        }
       ],
       "ir": "agua"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Gato» — э́то кот! 🐈",
         "tr": "«Gato» — éta kot!",
         "es": "«Gato» es кот."
        }
       ],
       "ir": "agua",
       "comodin": true
      }
     ]
    },
    {
     "id": "agua",
     "titulo": "«Agua» en ruso",
     "bot": [
      {
       "ru": "А «agua»? 💧",
       "tr": "A «agua»?",
       "es": "¿Y «agua»?"
      }
     ],
     "ideas": [
      {
       "ru": "Вода́.",
       "es": "Agua."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "вод"
       ],
       "resp": [
        {
         "ru": "Да! Вода́! 💧 👍",
         "tr": "Da! Vadá!",
         "es": "¡Sí! ¡Вода!"
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "«Agua» — э́то вода́. 💧",
         "tr": "«Agua» — éta vadá.",
         "es": "«Agua» es вода."
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Agua» — э́то вода́. 💧",
         "tr": "«Agua» — éta vadá.",
         "es": "«Agua» es вода."
        }
       ],
       "ir": "libro",
       "comodin": true
      }
     ]
    },
    {
     "id": "libro",
     "titulo": "«Libro» en ruso",
     "bot": [
      {
       "ru": "А «libro»? 📖",
       "tr": "A «libro»?",
       "es": "¿Y «libro»?"
      }
     ],
     "ideas": [
      {
       "ru": "Кни́га.",
       "es": "Libro."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "книг"
       ],
       "resp": [
        {
         "ru": "Да! Кни́га! 📖 Ты хорошо́ говори́шь по-ру́сски! 👍",
         "tr": "Da! Kníga! Ty jarashó gavarísh parússki!",
         "es": "¡Sí! ¡Книга! ¡Hablas bien ruso!"
        }
       ],
       "ir": "kitai"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "«Libro» — э́то кни́га. 📖",
         "tr": "«Libro» — éta kníga.",
         "es": "«Libro» es книга."
        }
       ],
       "ir": "kitai"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Libro» — э́то кни́га. 📖",
         "tr": "«Libro» — éta kníga.",
         "es": "«Libro» es книга."
        }
       ],
       "ir": "kitai",
       "comodin": true
      }
     ]
    },
    {
     "id": "kitai",
     "titulo": "Chino",
     "bot": [
      {
       "ru": "А по-кита́йски ты говори́шь? 😄",
       "tr": "A pakitáiski ty gavarísh?",
       "es": "¿Y chino hablas?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет! 😄",
       "es": "¡No!"
      },
      {
       "ru": "Да!",
       "es": "¡Sí!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Я то́же нет! 😂",
         "tr": "Ya tózhi niet!",
         "es": "¡Yo tampoco!"
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "говорю"
       ],
       "resp": [
        {
         "ru": "По-кита́йски?! 😮 Отли́чно!",
         "tr": "Pakitáiski?! Atlíchna!",
         "es": "¿¡Chino!? ¡Genial!"
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я — нет! 😂",
         "tr": "Ya — niet!",
         "es": "¡Yo no!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "О́льга Петро́вна говори́т по-ру́сски, по-англи́йски и по-францу́зски! 👩‍🏫",
       "tr": "Ólga Pitróvna gavarít parússki, paanglíiski i pafrantsússki!",
       "es": "Olga Petrovna habla ruso, inglés y francés."
      },
      {
       "ru": "А ты говори́шь по-францу́зски? 🇫🇷",
       "tr": "A ty gavarísh pafrantsússki?",
       "es": "¿Y tú hablas francés?"
      }
     ],
     "ideas": [
      {
       "ru": "Да.",
       "es": "Sí."
      },
      {
       "ru": "Нет.",
       "es": "No."
      },
      {
       "ru": "Пло́хо.",
       "es": "Mal."
      },
      {
       "ru": "Я не понима́ю по-францу́зски.",
       "es": "No entiendo francés."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No o mal",
       "claves": [
        "=нет",
        "плохо",
        "=не понимаю"
       ],
       "resp": [
        {
         "ru": "Я то́же нет. 😅",
         "tr": "Ya tózhi niet.",
         "es": "Yo tampoco."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "понимаю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "🙂",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u2-dela",
   "desde": 2,
   "titulo": "Как дела́?",
   "tituloEs": "¿Cómo estás?",
   "resumen": "Contar cómo estás y hablar de «вы» con Olga Petrovna",
   "intro": "Masha te pregunta cómo estás. Después juega a ser Olga Petrovna, y a ella se le habla de «вы».",
   "inicio": "dela",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "dela",
     "titulo": "¿Cómo estás?",
     "bot": [
      {
       "ru": "Как дела́? 🙂",
       "tr": "Kak dilá?",
       "es": "¿Cómo estás?"
      }
     ],
     "ideas": [
      {
       "ru": "Хорошо́, спаси́бо. А у тебя́?",
       "es": "Bien, gracias. ¿Y tú?"
      },
      {
       "ru": "Отли́чно!",
       "es": "¡Excelente!"
      },
      {
       "ru": "Норма́льно.",
       "es": "Bien."
      },
      {
       "ru": "Так себе́.",
       "es": "Más o menos."
      },
      {
       "ru": "Пло́хо.",
       "es": "Mal."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mal",
       "claves": [
        "плохо"
       ],
       "resp": [
        {
         "ru": "Пло́хо? 😟",
         "tr": "Plója?",
         "es": "¿Mal?"
        }
       ],
       "ir": "mal",
       "dato": "Cómo estabas",
       "datoValor": "пло́хо"
      },
      {
       "etiqueta": "Más o menos",
       "claves": [
        "=так себе"
       ],
       "resp": [
        {
         "ru": "Так себе́? Хм… 🤔",
         "tr": "Tak sibié? Jm…",
         "es": "¿Más o menos? Mmm…"
        }
       ],
       "ir": "mal",
       "dato": "Cómo estabas",
       "datoValor": "так себе́"
      },
      {
       "etiqueta": "Bien",
       "claves": [
        "хорошо",
        "отлично",
        "нормальн"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "yo",
       "dato": "Cómo estabas",
       "datoValor": "хорошо́"
      }
     ],
     "aTi": [
      {
       "ru": "А у меня́ всё хорошо́! ☀️",
       "tr": "A u miniá fsio jarashó!",
       "es": "¡Yo estoy muy bien!"
      }
     ],
     "aTiTema": "como_m",
     "retomar": {
      "ru": "Так как дела́? 🙂",
      "tr": "Tak kak dilá?",
      "es": "Entonces, ¿cómo estás?"
     }
    },
    {
     "id": "mal",
     "titulo": "Café o té",
     "bot": [
      {
       "ru": "Ко́фе? ☕ Чай? 🍵",
       "tr": "Kófi? Chai?",
       "es": "¿Un café? ¿Un té?"
      }
     ],
     "ideas": [
      {
       "ru": "Ко́фе, пожа́луйста!",
       "es": "¡Café, por favor!"
      },
      {
       "ru": "Чай, пожа́луйста.",
       "es": "Té, por favor."
      },
      {
       "ru": "Нет, спаси́бо.",
       "es": "No, gracias."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Café",
       "claves": [
        "кофе"
       ],
       "resp": [
        {
         "ru": "Ко́фе! ☕ Пожа́луйста! 😊",
         "tr": "Kófi! Pazháluista!",
         "es": "¡Café! ¡Aquí tienes!"
        }
       ],
       "ir": "yo"
      },
      {
       "etiqueta": "Té",
       "claves": [
        "чай"
       ],
       "resp": [
        {
         "ru": "Чай! 🍵 Пожа́луйста! 😊",
         "tr": "Chai! Pazháluista!",
         "es": "¡Té! ¡Aquí tienes!"
        }
       ],
       "ir": "yo"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Хорошо́. 🤗",
         "tr": "Jarashó.",
         "es": "Bueno."
        }
       ],
       "ir": "yo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́. 🤗",
         "tr": "Jarashó.",
         "es": "Bueno."
        }
       ],
       "ir": "yo",
       "comodin": true
      }
     ]
    },
    {
     "id": "yo",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "А у меня́ всё хорошо́! ☀️",
       "tr": "A u miniá fsio jarashó!",
       "es": "Yo estoy muy bien."
      },
      {
       "ru": "А тепе́рь я — О́льга Петро́вна! 👩‍🏫 Здра́вствуйте!",
       "tr": "A tipiér ya — Ólga Pitróvna! Zdrástvuiti!",
       "es": "Y ahora yo soy Olga Petrovna. ¡Hola!"
      }
     ],
     "ideas": [
      {
       "ru": "Здра́вствуйте!",
       "es": "¡Hola! (formal)"
      },
      {
       "ru": "До́брый день!",
       "es": "¡Buen día!"
      },
      {
       "ru": "Приве́т!",
       "es": "¡Hola!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Formal",
       "claves": [
        "здравствуйте",
        "добр"
       ],
       "resp": [],
       "ir": "olga_dela"
      },
      {
       "etiqueta": "Informal",
       "claves": [
        "привет",
        "=здравствуй"
       ],
       "resp": [
        {
         "ru": "👩‍🏫 «Приве́т»?! 😄 Я О́льга Петро́вна! На «вы», пожа́луйста.",
         "tr": "«Priviét»?! Ya Ólga Pitróvna! Na «vy», pazháluista.",
         "es": "¿«Привет»? ¡Soy Olga Petrovna! De «вы», por favor."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👩‍🏫 «Здра́вствуйте», пожа́луйста! 🙂",
         "tr": "«Zdrástvuiti», pazháluista!",
         "es": "«Здравствуйте», por favor."
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "👩‍🏫 Здра́вствуйте!",
      "tr": "Zdrástvuiti!",
      "es": "¡Hola!"
     },
     "botSi": {
      "como_m": [
       {
        "ru": "А тепе́рь я — О́льга Петро́вна! 👩‍🏫 Здра́вствуйте!",
        "tr": "A tipiér ya — Ólga Pitróvna! Zdrástvuiti!",
        "es": "Y ahora yo soy Olga Petrovna. ¡Hola!"
       }
      ]
     }
    },
    {
     "id": "olga_dela",
     "titulo": "Как у вас дела́?",
     "bot": [
      {
       "ru": "👩‍🏫 Как у вас дела́?",
       "tr": "Kak u vas dilá?",
       "es": "¿Cómo le va?"
      }
     ],
     "ideas": [
      {
       "ru": "Спаси́бо, хорошо́. А у вас?",
       "es": "Bien, gracias. ¿Y a usted?"
      },
      {
       "ru": "Отли́чно, спаси́бо!",
       "es": "¡Excelente, gracias!"
      },
      {
       "ru": "Норма́льно. А у вас?",
       "es": "Bien. ¿Y a usted?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta con «у тебя́»",
       "claves": [
        "=у тебя"
       ],
       "resp": [
        {
         "ru": "👩‍🏫 «У тебя́»? 😄 «У вас», пожа́луйста!",
         "tr": "«U tibiá»? «U vas», pazháluista!",
         "es": "¿«У тебя»? ¡«У вас», por favor!"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Devuelve con «у вас»",
       "claves": [
        "=у вас"
       ],
       "resp": [
        {
         "ru": "👩‍🏫 Спаси́бо, то́же хорошо́! 😊",
         "tr": "Spasíba, tózhi jarashó!",
         "es": "Bien también, gracias."
        }
       ],
       "ir": "dima_hola"
      },
      {
       "etiqueta": "Contesta",
       "claves": [
        "хорош",
        "отлич",
        "нормал",
        "плох",
        "=так себе"
       ],
       "resp": [
        {
         "ru": "👩‍🏫 Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "dima_hola"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👩‍🏫 Хорошо́. 🙂",
         "tr": "Jarashó.",
         "es": "Bien."
        }
       ],
       "ir": "dima_hola",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima_hola",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "Всё! А тепе́рь я — Ди́ма! 👦 Приве́т!",
       "tr": "Fsio! A tipiér ya — Díma! Priviét!",
       "es": "¡Listo! Y ahora yo soy Dima. ¡Hola!"
      }
     ],
     "ideas": [
      {
       "ru": "Приве́т, Ди́ма!",
       "es": "¡Hola, Dima!"
      },
      {
       "ru": "Здра́вствуйте!",
       "es": "¡Hola! (formal)"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Formal",
       "claves": [
        "здравствуйте"
       ],
       "resp": [
        {
         "ru": "👦 «Здра́вствуйте»? 😄 Я не учи́тель! «Приве́т»!",
         "tr": "«Zdrástvuiti»? Ya nie uchítil! «Priviét»!",
         "es": "¿«Здравствуйте»? ¡No soy profesor! «Привет»."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Informal",
       "claves": [
        "привет",
        "=здравствуй"
       ],
       "resp": [],
       "ir": "dima_dela"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👦 Приве́т! 🙂",
         "tr": "Priviét!",
         "es": "¡Hola!"
        }
       ],
       "ir": "dima_dela",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "👦 Приве́т!",
      "tr": "Priviét!",
      "es": "¡Hola!"
     }
    },
    {
     "id": "dima_dela",
     "titulo": "Как дела́? (Dima)",
     "bot": [
      {
       "ru": "👦 Как дела́?",
       "tr": "Kak dilá?",
       "es": "¿Cómo estás?"
      }
     ],
     "ideas": [
      {
       "ru": "Хорошо́! А у тебя́?",
       "es": "¡Bien! ¿Y tú?"
      },
      {
       "ru": "Отли́чно! А у тебя́?",
       "es": "¡Excelente! ¿Y tú?"
      },
      {
       "ru": "Норма́льно.",
       "es": "Bien."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta con «у вас»",
       "claves": [
        "=у вас"
       ],
       "resp": [
        {
         "ru": "👦 «У вас»? 😄 Я Ди́ма! «А у тебя́?»",
         "tr": "«U vas»? Ya Díma! «A u tibiá?»",
         "es": "¿«У вас»? ¡Soy Dima! «А у тебя?»"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Devuelve con «у тебя́»",
       "claves": [
        "=у тебя"
       ],
       "resp": [
        {
         "ru": "👦 Норма́льно! 🙂",
         "tr": "Narmálna!",
         "es": "¡Bien!"
        }
       ],
       "ir": "olga_fin"
      },
      {
       "etiqueta": "Contesta",
       "claves": [
        "хорош",
        "отлич",
        "нормал",
        "плох",
        "=так себе"
       ],
       "resp": [
        {
         "ru": "👦 Отли́чно! 🙂",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "olga_fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👦 Хорошо́. 🙂",
         "tr": "Jarashó.",
         "es": "Bien."
        }
       ],
       "ir": "olga_fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga_fin",
     "titulo": "Buenas noches",
     "bot": [
      {
       "ru": "Всё! Я Ма́ша! 😄 На «ты» и на «вы» — ты говори́шь отли́чно! 👍",
       "tr": "Fsio! Ya Másha! Na «ty» i na «vy» — ty gavarísh atlíchna!",
       "es": "¡Listo! Soy Masha. ¡De «ты» y de «вы» hablas perfecto!"
      },
      {
       "ru": "«До́брое у́тро» — э́то у́тро. ☀️ А ве́чер? 🌙",
       "tr": "«Dóbrayi útra» — éta útra. A viéchir?",
       "es": "«Доброе утро» es para la mañana. ¿Y para la noche?"
      }
     ],
     "ideas": [
      {
       "ru": "До́брый ве́чер!",
       "es": "¡Buenas noches! (al llegar)"
      },
      {
       "ru": "Споко́йной но́чи!",
       "es": "¡Buenas noches! (al irse a dormir)"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Добрый вечер",
       "claves": [
        "вечер"
       ],
       "resp": [
        {
         "ru": "Да! До́брый ве́чер! 🌙 👍",
         "tr": "Da! Dóbryi viéchir!",
         "es": "¡Sí! ¡Добрый вечер!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Спокойной ночи",
       "claves": [
        "спокойн"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 «Споко́йной но́чи» — 😴! А «До́брый ве́чер» — 🌙!",
         "tr": "Niet! «Spakóinai nóchi» — ! A «Dóbryi viéchir» — !",
         "es": "¡No! «Спокойной ночи» es para ir a dormir; «Добрый вечер», para saludar a la noche."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ве́чер — «До́брый ве́чер»! 🌙",
         "tr": "Viéchir — «Dóbryi viéchir»!",
         "es": "Para la noche: «Добрый вечер»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Спаси́бо, {nombre}! До за́втра! 👋 Споко́йной но́чи! 😴",
       "tr": "Spasíba, {nombre}! Do záftra! Spakóinai nóchi!",
       "es": "¡Gracias, {nombre}! ¡Hasta mañana! ¡Que descanses!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u2-quien",
   "desde": 2,
   "titulo": "Кто э́то?",
   "tituloEs": "¿Quién es?",
   "resumen": "Personas, cosas y la familia de Masha",
   "intro": "Masha te muestra dibujos: ¿quién es?, ¿qué es? Al final conoces a su familia.",
   "inicio": "medico",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "medico",
     "titulo": "Médico",
     "bot": [
      {
       "ru": "Кто э́то? 👩‍⚕️",
       "tr": "Kto éta?",
       "es": "¿Quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то врач.",
       "es": "Es una médica."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "врач"
       ],
       "resp": [
        {
         "ru": "Да, э́то врач! 👍",
         "tr": "Da, éta vrach!",
         "es": "¡Sí, es una médica!"
        }
       ],
       "ir": "profe"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то врач! 🩺",
         "tr": "Éta vrach!",
         "es": "¡Es una médica!"
        }
       ],
       "ir": "profe"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то врач! 🩺",
         "tr": "Éta vrach!",
         "es": "¡Es una médica!"
        }
       ],
       "ir": "profe",
       "comodin": true
      }
     ]
    },
    {
     "id": "profe",
     "titulo": "Profesor",
     "bot": [
      {
       "ru": "А э́то кто? 👨‍🏫",
       "tr": "A éta kto?",
       "es": "¿Y este quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то учи́тель.",
       "es": "Es un profesor."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "учител",
        "преподават"
       ],
       "resp": [
        {
         "ru": "Да! Учи́тель. Как О́льга Петро́вна! 😄",
         "tr": "Da! Uchítil. Kak Ólga Pitróvna!",
         "es": "¡Sí! Un profesor. ¡Como Olga Petrovna!"
        }
       ],
       "ir": "casa"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то учи́тель. 👨‍🏫",
         "tr": "Éta uchítil.",
         "es": "Es un profesor."
        }
       ],
       "ir": "casa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то учи́тель. 👨‍🏫",
         "tr": "Éta uchítil.",
         "es": "Es un profesor."
        }
       ],
       "ir": "casa",
       "comodin": true
      }
     ]
    },
    {
     "id": "casa",
     "titulo": "Casa",
     "bot": [
      {
       "ru": "А э́то что? 🏠",
       "tr": "A éta shto?",
       "es": "¿Y esto qué es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то дом.",
       "es": "Es una casa."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "=дом"
       ],
       "resp": [
        {
         "ru": "Да, э́то дом! 🏠 👍",
         "tr": "Da, éta dom!",
         "es": "¡Sí, es una casa!"
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то дом. 🏠",
         "tr": "Éta dom.",
         "es": "Es una casa."
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то дом. 🏠",
         "tr": "Éta dom.",
         "es": "Es una casa."
        }
       ],
       "ir": "libro",
       "comodin": true
      }
     ]
    },
    {
     "id": "libro",
     "titulo": "Libro",
     "bot": [
      {
       "ru": "Что э́то? 📖",
       "tr": "Shto éta?",
       "es": "¿Qué es esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то кни́га.",
       "es": "Es un libro."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "книг"
       ],
       "resp": [
        {
         "ru": "Да! Кни́га. 📖 👍",
         "tr": "Da! Kníga.",
         "es": "¡Sí! Un libro."
        }
       ],
       "ir": "gato"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то кни́га. 📖",
         "tr": "Éta kníga.",
         "es": "Es un libro."
        }
       ],
       "ir": "gato"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то кни́га. 📖",
         "tr": "Éta kníga.",
         "es": "Es un libro."
        }
       ],
       "ir": "gato",
       "comodin": true
      }
     ]
    },
    {
     "id": "gato",
     "titulo": "Gato",
     "bot": [
      {
       "ru": "А кто э́то? 🐈",
       "tr": "A kto éta?",
       "es": "¿Y quién es este?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то кот.",
       "es": "Es un gato."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "=кот"
       ],
       "resp": [
        {
         "ru": "Да! Э́то мой кот! 😄",
         "tr": "Da! Éta moi kot!",
         "es": "¡Sí! ¡Es mi gato!"
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то кот! 🐈 Мой кот!",
         "tr": "Éta kot! Moi kot!",
         "es": "¡Es un gato! ¡Mi gato!"
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то кот! 🐈 Мой кот!",
         "tr": "Éta kot! Moi kot!",
         "es": "¡Es un gato! ¡Mi gato!"
        }
       ],
       "ir": "barsik",
       "comodin": true
      }
     ]
    },
    {
     "id": "barsik",
     "titulo": "Su nombre",
     "bot": [
      {
       "ru": "Как его́ зову́т? 😄",
       "tr": "Kak yivó zavút?",
       "es": "¿Cómo se llama?"
      }
     ],
     "ideas": [
      {
       "ru": "Как его́ зову́т?",
       "es": "¿Cómo se llama?"
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta",
       "claves": [
        "как зовут"
       ],
       "resp": [
        {
         "ru": "Его́ зову́т Ба́рсик! 🐈",
         "tr": "Yivó zavút Bársik!",
         "es": "¡Se llama Barsik!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "барсик"
       ],
       "resp": [
        {
         "ru": "Да! Ба́рсик! 😄",
         "tr": "Da! Bársik!",
         "es": "¡Sí! ¡Barsik!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Его́ зову́т Ба́рсик! 🐈",
         "tr": "Yivó zavút Bársik!",
         "es": "¡Se llama Barsik!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Его́ зову́т Ба́рсик! 🐈",
         "tr": "Yivó zavút Bársik!",
         "es": "¡Se llama Barsik!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Su hermano",
     "bot": [
      {
       "ru": "А э́то кто? 👦",
       "tr": "A éta kto?",
       "es": "¿Y este quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то брат?",
       "es": "¿Es tu hermano?"
      },
      {
       "ru": "Кто э́то?",
       "es": "¿Quién es?"
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "брат",
        "дим"
       ],
       "resp": [
        {
         "ru": "Да! Э́то мой брат Ди́ма. 👦",
         "tr": "Da! Éta moi brat Díma.",
         "es": "¡Sí! Es mi hermano Dima."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то мой брат! Его́ зову́т Ди́ма. 👦",
         "tr": "Éta moi brat! Yivó zavút Díma.",
         "es": "¡Es mi hermano! Se llama Dima."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то мой брат! Его́ зову́т Ди́ма. 👦",
         "tr": "Éta moi brat! Yivó zavút Díma.",
         "es": "¡Es mi hermano! Se llama Dima."
        }
       ],
       "ir": "mama",
       "comodin": true
      }
     ]
    },
    {
     "id": "mama",
     "titulo": "Su madre",
     "bot": [
      {
       "ru": "А э́то ма́ма. 👩 Как её зову́т? 🤔",
       "tr": "A éta máma. Kak yiyó zavút?",
       "es": "Y esta es mamá. ¿Cómo se llama?"
      }
     ],
     "ideas": [
      {
       "ru": "Не зна́ю. Как её зову́т?",
       "es": "No sé. ¿Cómo se llama?"
      },
      {
       "ru": "Её зову́т А́нна?",
       "es": "¿Se llama Ana?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ана",
       "claves": [
        "анн"
       ],
       "resp": [
        {
         "ru": "Да! Её зову́т А́нна! 😮 Отли́чно!",
         "tr": "Da! Yiyó zavút Ánna! Atlíchna!",
         "es": "¡Sí! ¡Se llama Ana! ¡Lo sabes todo!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Pregunta o no sabe",
       "claves": [
        "зовут",
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Её зову́т А́нна. 😊",
         "tr": "Yiyó zavút Ánna.",
         "es": "Se llama Ana."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Её зову́т А́нна. 😊",
         "tr": "Yiyó zavút Ánna.",
         "es": "Se llama Ana."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А ты? Кто ты? 😄",
       "tr": "A ty? Kto ty?",
       "es": "¿Y tú? ¿Quién eres?"
      }
     ],
     "ideas": [
      {
       "ru": "Я студе́нт.",
       "es": "Soy estudiante."
      },
      {
       "ru": "Я студе́нтка.",
       "es": "Soy estudiante (mujer)."
      },
      {
       "ru": "Я врач.",
       "es": "Soy médico."
      },
      {
       "ru": "Я учи́тель.",
       "es": "Soy profesor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Estudiante",
       "claves": [
        "студент"
       ],
       "resp": [
        {
         "ru": "Ты {студе́нт/студе́нтка}! Я то́же студе́нтка! 📚",
         "tr": "Ty {studiént/studiéntka}! Ya tózhi studiéntka!",
         "es": "¡Eres estudiante! ¡Yo también!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "genero": {
        "студент": "m",
        "студентка": "f"
       },
       "datoValor": "студе́нт"
      },
      {
       "etiqueta": "Médico",
       "claves": [
        "врач"
       ],
       "resp": [
        {
         "ru": "Ты врач! Отли́чно! 🩺",
         "tr": "Ty vrach! Atlíchna!",
         "es": "¡Eres médico! ¡Genial!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "datoValor": "врач"
      },
      {
       "etiqueta": "Profesor",
       "claves": [
        "учител",
        "преподават"
       ],
       "resp": [
        {
         "ru": "Ты учи́тель? Как О́льга Петро́вна! 😄",
         "tr": "Ty uchítil? Kak Ólga Pitróvna!",
         "es": "¿Eres profesor? ¡Como Olga Petrovna!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "datoValor": "учи́тель"
      },
      {
       "etiqueta": "Su nombre",
       "claves": [
        "зовут"
       ],
       "resp": [
        {
         "ru": "О́чень прия́тно! 😊",
         "tr": "Óchin priyátna!",
         "es": "¡Mucho gusto!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 🙂",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u2-frases",
   "desde": 2,
   "titulo": "Я не понима́ю!",
   "tituloEs": "Cuando no entiendes",
   "resumen": "Pedir que repita, preguntar qué significa y cómo se dice",
   "intro": "Masha usa palabras raras y habla rápido. Practica «Что зна́чит…?», «Повтори́, пожа́луйста» y «Как по-ру́сски…?».",
   "inicio": "ezh",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ezh",
     "titulo": "«Ёж»",
     "bot": [
      {
       "ru": "А сло́во «ёж»? 🤔 Что э́то?",
       "tr": "A slóva «yosh»? Shto éta?",
       "es": "¿Y la palabra «ёж»? ¿Qué es?"
      }
     ],
     "ideas": [
      {
       "ru": "Что зна́чит «ёж»?",
       "es": "¿Qué significa «ёж»?"
      },
      {
       "ru": "Да, зна́ю.",
       "es": "Sí, la conozco."
      },
      {
       "ru": "Нет.",
       "es": "No."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta o no sabe",
       "claves": [
        "значит",
        "=нет",
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "«Ёж» — э́то 🦔! 😄",
         "tr": "«Yosh» — éta !",
         "es": "«Ёж» es 🦔."
        }
       ],
       "ir": "med"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "знаю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Да, ёж — э́то 🦔. 👍",
         "tr": "Atlíchna! Da, yosh — éta .",
         "es": "¡Genial! Sí, ёж es 🦔."
        }
       ],
       "ir": "med"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Ёж» — э́то 🦔!",
         "tr": "«Yosh» — éta !",
         "es": "«Ёж» es 🦔."
        }
       ],
       "ir": "med",
       "comodin": true
      }
     ]
    },
    {
     "id": "med",
     "titulo": "«Мёд»",
     "bot": [
      {
       "ru": "А «мёд»? 🤔",
       "tr": "A «miot»?",
       "es": "¿Y «мёд»?"
      }
     ],
     "ideas": [
      {
       "ru": "Что зна́чит «мёд»?",
       "es": "¿Qué significa «мёд»?"
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      },
      {
       "ru": "Мёд — э́то 🍯.",
       "es": "Мёд es 🍯."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta o no sabe",
       "claves": [
        "значит",
        "=нет",
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Мёд — э́то 🍯! 😋",
         "tr": "Miot — éta !",
         "es": "Мёд es 🍯."
        }
       ],
       "ir": "rapido"
      },
      {
       "etiqueta": "Lo sabe",
       "claves": [
        "🍯",
        "=да",
        "знаю"
       ],
       "resp": [
        {
         "ru": "Да! 🍯 👍",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "rapido"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Мёд — э́то 🍯! 😋",
         "tr": "Miot — éta !",
         "es": "Мёд es 🍯."
        }
       ],
       "ir": "rapido",
       "comodin": true
      }
     ]
    },
    {
     "id": "rapido",
     "titulo": "Muy rápido",
     "bot": [
      {
       "ru": "Я Ма́ша я из Москвы́ я студе́нтка я учу́ испа́нский! 💨",
       "tr": "Ya Másha ya is Maskvý ya studiéntka ya uchú ispánskii!",
       "es": "(muy rápido) Soy Masha, soy de Moscú, soy estudiante, estudio español."
      }
     ],
     "ideas": [
      {
       "ru": "Повтори́, пожа́луйста.",
       "es": "Repite, por favor."
      },
      {
       "ru": "Ме́дленно, пожа́луйста!",
       "es": "¡Despacio, por favor!"
      },
      {
       "ru": "Я не понима́ю.",
       "es": "No entiendo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pide que repita",
       "claves": [
        "повтор",
        "медлен",
        "=не понимаю",
        "=не понима"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Ме́дленно: «Я Ма́ша. Я из Москвы́. Я студе́нтка.» 🐢",
         "tr": "Jarashó! Miédlinna: «Ya Másha. Ya is Maskvý. Ya studiéntka.»",
         "es": "¡Bueno! Despacio: «Soy Masha. Soy de Moscú. Soy estudiante.»"
        }
       ],
       "ir": "pan"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́, ме́дленно: «Я Ма́ша. Я из Москвы́. Я студе́нтка.» 🐢",
         "tr": "Jarashó, miédlinna: «Ya Másha. Ya is Maskvý. Ya studiéntka.»",
         "es": "Bueno, despacio: «Soy Masha. Soy de Moscú. Soy estudiante.»"
        }
       ],
       "ir": "pan",
       "comodin": true
      }
     ]
    },
    {
     "id": "pan",
     "titulo": "«Pan» en ruso",
     "bot": [
      {
       "ru": "Как по-ру́сски «pan»? 🍞",
       "tr": "Kak parússki «pan»?",
       "es": "¿Cómo se dice «pan» en ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Хлеб.",
       "es": "Pan."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "хлеб"
       ],
       "resp": [
        {
         "ru": "Да! Хлеб. 🍞 👍",
         "tr": "Da! Jliep.",
         "es": "¡Sí! Хлеб."
        }
       ],
       "ir": "leche"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "«Pan» — э́то хлеб. 🍞",
         "tr": "«Pan» — éta jliep.",
         "es": "«Pan» es хлеб."
        }
       ],
       "ir": "leche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Pan» — э́то хлеб. 🍞",
         "tr": "«Pan» — éta jliep.",
         "es": "«Pan» es хлеб."
        }
       ],
       "ir": "leche",
       "comodin": true
      }
     ]
    },
    {
     "id": "leche",
     "titulo": "«Leche» en ruso",
     "bot": [
      {
       "ru": "А «leche»? 🥛",
       "tr": "A «leche»?",
       "es": "¿Y «leche»?"
      }
     ],
     "ideas": [
      {
       "ru": "Молоко́.",
       "es": "Leche."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "молок"
       ],
       "resp": [
        {
         "ru": "Да! Молоко́! 🥛 Отли́чно!",
         "tr": "Da! Malakó! Atlíchna!",
         "es": "¡Sí! ¡Молоко! ¡Genial!"
        }
       ],
       "ir": "tu1"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "«Leche» — э́то молоко́. 🥛",
         "tr": "«Leche» — éta malakó.",
         "es": "«Leche» es молоко."
        }
       ],
       "ir": "tu1"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Leche» — э́то молоко́. 🥛",
         "tr": "«Leche» — éta malakó.",
         "es": "«Leche» es молоко."
        }
       ],
       "ir": "tu1",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu1",
     "titulo": "Pregunta tú",
     "bot": [
      {
       "ru": "А тепе́рь ты! 😄 «Как по-ру́сски…?»",
       "tr": "A tipiér ty! «Kak parússki…?»",
       "es": "¡Ahora tú! ¿Qué palabra no sabes? Pregúntame: «Как по-русски…?»"
      }
     ],
     "ideas": [
      {
       "ru": "Как по-ру́сски «gracias»?",
       "es": "¿Cómo se dice «gracias» en ruso?"
      },
      {
       "ru": "Как по-ру́сски «casa»?",
       "es": "¿Cómo se dice «casa»?"
      },
      {
       "ru": "Как по-ру́сски «agua»?",
       "es": "¿Cómo se dice «agua»?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta una palabra",
       "resp": [
        {
         "ru": "«{x}» по-ру́сски — {ru}! 😊",
         "tr": "«{x}» parússki — {ru}!",
         "es": "«{x}» en ruso es {ru}."
        }
       ],
       "ir": "tu2",
       "captura": "esru"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔 «Как по-ру́сски…?» и сло́во по-испа́нски!",
         "tr": "Jm… «Kak parússki…?» i slóva paispánski!",
         "es": "Mmm… Escribe «Как по-русски…?» y la palabra en español."
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "latin": true
    },
    {
     "id": "tu2",
     "titulo": "Otra palabra",
     "bot": [
      {
       "ru": "Хорошо́! А как по-ру́сски…? 🤔",
       "tr": "Jarashó! A kak parússki…?",
       "es": "¡Bien! ¿Y cómo se dice…?"
      }
     ],
     "ideas": [
      {
       "ru": "Как по-ру́сски «perro»?",
       "es": "¿Cómo se dice «perro»?"
      },
      {
       "ru": "Как по-ру́сски «amigo»?",
       "es": "¿Cómo se dice «amigo»?"
      },
      {
       "ru": "Как по-ру́сски «ciudad»?",
       "es": "¿Cómo se dice «ciudad»?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta una palabra",
       "resp": [
        {
         "ru": "«{x}» — {ru}! 😊",
         "tr": "«{x}» — {ru}!",
         "es": "«{x}» es {ru}."
        }
       ],
       "ir": "fin",
       "captura": "esru"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔 «Как по-ру́сски…?»",
         "tr": "Jm… «Kak parússki…?»",
         "es": "Mmm… ¿«Как по-русски…?»"
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "latin": true
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Спаси́бо, {nombre}! Ты говори́шь по-ру́сски хорошо́! 👍 Пока́!",
       "tr": "Spasíba, {nombre}! Ty gavarísh parússki jarashó! Paká!",
       "es": "¡Gracias, {nombre}! ¡Hablas bien ruso! ¡Chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-cuarto",
   "desde": 3,
   "titulo": "Моя́ ко́мната",
   "tituloEs": "Mi habitación",
   "resumen": "Muebles y cosas de la casa: grande, pequeño, nuevo, viejo",
   "intro": "Masha te muestra su habitación y te pregunta por la tuya. Atención al género: он, она́ u оно́.",
   "inicio": "komnata",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "komnata",
     "titulo": "Su habitación",
     "bot": [
      {
       "ru": "Э́то моя́ ко́мната! 🛏️ Она́ ма́ленькая, а кварти́ра больша́я.",
       "tr": "Éta mayá kómnata! Aná málinkaya, a kvartíra balsháya.",
       "es": "¡Esta es mi habitación! Es pequeña, y el piso es grande."
      },
      {
       "ru": "А у тебя́? Ко́мната больша́я? Ма́ленькая? 🤔",
       "tr": "A u tibiá? Kómnata balsháya? Málinkaya?",
       "es": "¿Y tú? ¿Tu habitación es grande? ¿Pequeña?"
      }
     ],
     "ideas": [
      {
       "ru": "Моя́ ко́мната больша́я.",
       "es": "Mi habitación es grande."
      },
      {
       "ru": "Она́ ма́ленькая.",
       "es": "Es pequeña."
      },
      {
       "ru": "Моя́ ко́мната но́вая и све́тлая.",
       "es": "Mi habitación es nueva y luminosa."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Grande",
       "claves": [
        "больш"
       ],
       "resp": [
        {
         "ru": "Больша́я? Отли́чно! 😍",
         "tr": "Balsháya? Atlíchna!",
         "es": "¿Grande? ¡Genial!"
        }
       ],
       "ir": "stol",
       "dato": "Habitación",
       "datoValor": "больша́я"
      },
      {
       "etiqueta": "Pequeña",
       "claves": [
        "маленьк"
       ],
       "resp": [
        {
         "ru": "Ма́ленькая? Как моя́! 😄",
         "tr": "Málinkaya? Kak mayá!",
         "es": "¿Pequeña? ¡Como la mía!"
        }
       ],
       "ir": "stol",
       "dato": "Habitación",
       "datoValor": "ма́ленькая"
      },
      {
       "etiqueta": "Otro adjetivo",
       "claves": [
        "нов",
        "светл",
        "красив",
        "хорош",
        "удобн",
        "темн",
        "стар"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "stol",
       "dato": "Habitación"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "stol",
       "comodin": true
      }
     ]
    },
    {
     "id": "stol",
     "titulo": "La mesa",
     "bot": [
      {
       "ru": "Э́то мой стол. Он но́вый. А стул ста́рый! 😄",
       "tr": "Éta moi stol. On nóvyi. A stul stáryi!",
       "es": "Esta es mi mesa. Es nueva. ¡Y la silla es vieja!"
      },
      {
       "ru": "Стул — он? Она́? 🤔",
       "tr": "Stul — on? Aná?",
       "es": "¿Стул es masculino? ¿Femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он.",
       "es": "Él (masculino)."
      },
      {
       "ru": "Стул — он.",
       "es": "Стул es masculino."
      },
      {
       "ru": "Она́.",
       "es": "Ella (femenino)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! Стул — он: стул ста́рый. 👍",
         "tr": "Da! Stul — on: stul stáryi.",
         "es": "¡Sí! Стул es masculino: стул старый."
        }
       ],
       "ir": "krovat"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Стул — он: стул ста́рый.",
         "tr": "Niet! Stul — on: stul stáryi.",
         "es": "¡No! Стул es masculino (termina en consonante): стул старый."
        }
       ],
       "ir": "krovat"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Стул — он. 🙂",
         "tr": "Stul — on.",
         "es": "Стул es masculino."
        }
       ],
       "ir": "krovat",
       "comodin": true
      }
     ]
    },
    {
     "id": "krovat",
     "titulo": "La cama",
     "bot": [
      {
       "ru": "А крова́ть? 🛏️ Она́? Он? 🤔",
       "tr": "A kravát? Aná? On?",
       "es": "¿Y la cama? ¿Femenino? ¿Masculino?"
      }
     ],
     "ideas": [
      {
       "ru": "Она́.",
       "es": "Femenino."
      },
      {
       "ru": "Он.",
       "es": "Masculino."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Да! Крова́ть — она́. Моя́ крова́ть больша́я! 😴",
         "tr": "Da! Kravát — aná. Mayá kravát balsháya!",
         "es": "¡Sí! Кровать es femenino. ¡Mi cama es grande!"
        }
       ],
       "ir": "okno"
      },
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Нет! Крова́ть — она́: моя́ крова́ть. 🙂",
         "tr": "Niet! Kravát — aná: mayá kravát.",
         "es": "¡No! Кровать es femenino: моя кровать."
        }
       ],
       "ir": "okno"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Крова́ть — она́: моя́ крова́ть. 🙂",
         "tr": "Kravát — aná: mayá kravát.",
         "es": "Кровать es femenino: моя кровать."
        }
       ],
       "ir": "okno",
       "comodin": true
      }
     ]
    },
    {
     "id": "okno",
     "titulo": "La ventana",
     "bot": [
      {
       "ru": "А э́то окно́. 🪟 Оно́ большо́е и све́тлое! Окно́ — оно́? 🤔",
       "tr": "A éta aknó. Anó balshóyi i sviétlayi! Aknó — anó?",
       "es": "Y esta es la ventana. ¡Es grande y luminosa! ¿Окно es neutro?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, оно́.",
       "es": "Sí, neutro."
      },
      {
       "ru": "Нет, он.",
       "es": "No, masculino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "=оно"
       ],
       "resp": [
        {
         "ru": "Да! Окно́ — оно́. 👍",
         "tr": "Da! Aknó — anó.",
         "es": "¡Sí! Окно es neutro."
        }
       ],
       "ir": "lampa"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет",
        "=он",
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Окно́ — оно́: большо́е окно́.",
         "tr": "Niet! Aknó — anó: balshóyi aknó.",
         "es": "¡No! Окно es neutro: большое окно."
        }
       ],
       "ir": "lampa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Окно́ — оно́. 🙂",
         "tr": "Aknó — anó.",
         "es": "Окно es neutro."
        }
       ],
       "ir": "lampa",
       "comodin": true
      }
     ]
    },
    {
     "id": "lampa",
     "titulo": "La lámpara",
     "bot": [
      {
       "ru": "Моя́ ла́мпа жёлтая. 💡 А у тебя́? Ла́мпа бе́лая? Чёрная?",
       "tr": "Mayá lámpa zhóltaya. A u tibiá? Lámpa biélaya? Chórnaya?",
       "es": "Mi lámpara es amarilla. ¿Y la tuya? ¿Blanca? ¿Negra?"
      }
     ],
     "ideas": [
      {
       "ru": "Моя́ ла́мпа бе́лая.",
       "es": "Mi lámpara es blanca."
      },
      {
       "ru": "Она́ чёрная.",
       "es": "Es negra."
      },
      {
       "ru": "Она́ зелёная.",
       "es": "Es verde."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma femenina",
       "claves": [
        "=белая",
        "=черная",
        "=зеленая",
        "=красная",
        "=синяя",
        "=серая",
        "=желтая",
        "=розовая",
        "=голубая",
        "=оранжевая",
        "=фиолетовая",
        "=коричневая"
       ],
       "resp": [
        {
         "ru": "Краси́вая! 😊",
         "tr": "Krasívaya!",
         "es": "¡Qué bonita!"
        }
       ],
       "ir": "knigi",
       "dato": "Lámpara"
      },
      {
       "etiqueta": "Forma masculina (error)",
       "claves": [
        "бел",
        "черн",
        "зелен",
        "красн",
        "син",
        "сер",
        "желт",
        "розов",
        "голуб"
       ],
       "resp": [
        {
         "ru": "Хм… Ла́мпа — она́: бе́лая, чёрная, зелёная… 🙂",
         "tr": "Jm… Lámpa — aná: biélaya, chórnaya, ziliónaya…",
         "es": "Mmm… Лампа es femenino: белая, чёрная, зелёная…"
        }
       ],
       "ir": "knigi"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "knigi",
       "comodin": true
      }
     ]
    },
    {
     "id": "knigi",
     "titulo": "Plural",
     "bot": [
      {
       "ru": "Э́то кни́га. 📕 А э́то? 📕📕📕",
       "tr": "Éta kníga. A éta?",
       "es": "Esto es un libro. ¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то кни́ги.",
       "es": "Son libros."
      },
      {
       "ru": "Кни́ги!",
       "es": "¡Libros!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Кни́ги",
       "claves": [
        "=книги"
       ],
       "resp": [
        {
         "ru": "Да! Кни́ги! 👍",
         "tr": "Da! Knígui!",
         "es": "¡Sí! Книги: después de г, к, х va «и»."
        }
       ],
       "ir": "foto"
      },
      {
       "etiqueta": "Кни́гы (error)",
       "claves": [
        "книгы",
        "книг"
       ],
       "resp": [
        {
         "ru": "Кни́ги! 🙂",
         "tr": "Knígui!",
         "es": "Después de «г» va «и»: книги."
        }
       ],
       "ir": "foto"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то кни́ги! 📚",
         "tr": "Éta knígui!",
         "es": "¡Son libros!"
        }
       ],
       "ir": "foto",
       "comodin": true
      }
     ]
    },
    {
     "id": "foto",
     "titulo": "La foto",
     "bot": [
      {
       "ru": "А э́то фо́то. 🖼️ Тут мой дом. Он ста́рый и краси́вый!",
       "tr": "A éta fóta. Tut moi dom. On stáryi i krasívyi!",
       "es": "Y esta es una foto: aquí está mi casa. ¡Es vieja y bonita!"
      },
      {
       "ru": "А у тебя́? Дом но́вый? Ста́рый?",
       "tr": "A u tibiá? Dom nóvyi? Stáryi?",
       "es": "¿Y tú? ¿Tu casa es nueva? ¿Vieja?"
      }
     ],
     "ideas": [
      {
       "ru": "Мой дом но́вый.",
       "es": "Mi casa es nueva."
      },
      {
       "ru": "Он ста́рый.",
       "es": "Es vieja."
      },
      {
       "ru": "Мой дом большо́й и краси́вый.",
       "es": "Mi casa es grande y bonita."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Describe (masculino)",
       "claves": [
        "=новый",
        "=старый",
        "=большой",
        "=маленький",
        "=красивый",
        "=белый",
        "=высокий",
        "=хороший"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🏠",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "dato": "Casa"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "нов",
        "стар",
        "больш",
        "маленьк",
        "красив"
       ],
       "resp": [
        {
         "ru": "Хм… Дом — он: но́вый, ста́рый, большо́й. 🙂",
         "tr": "Jm… Dom — on: nóvyi, stáryi, balshói.",
         "es": "Mmm… Дом es masculino: новый, старый, большой."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🏠",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-colores",
   "desde": 3,
   "titulo": "Кра́сная су́мка",
   "tituloEs": "Colores",
   "resumen": "Adjetivo + sustantivo: el adjetivo sigue el género",
   "intro": "Un juego: Masha te muestra una cosa y un color, y tú dices las dos palabras juntas, con el adjetivo en el género correcto.",
   "inicio": "zont",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "zont",
     "titulo": "Paraguas negro",
     "bot": [
      {
       "ru": "👜 + 🔴 = кра́сная су́мка! 😄",
       "tr": "+ = krásnaya súmka!",
       "es": "Bolso + rojo = красная сумка."
      },
      {
       "ru": "А тепе́рь ты! ☂️ + ⚫ = ? 🤔",
       "tr": "A tipiér ty! + = ?",
       "es": "¡Ahora tú! Paraguas + negro = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Чёрный зонт.",
       "es": "Paraguas negro."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Чёрный",
       "claves": [
        "=черный"
       ],
       "resp": [
        {
         "ru": "Да! Чёрный зонт! ☂️ 👍",
         "tr": "Da! Chórnyi zont!",
         "es": "¡Sí! Чёрный зонт."
        }
       ],
       "ir": "okno"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "черн"
       ],
       "resp": [
        {
         "ru": "Хм… Зонт — он: чёрный зонт. 🙂",
         "tr": "Jm… Zont — on: chórnyi zont.",
         "es": "Mmm… Зонт es masculino: чёрный зонт."
        }
       ],
       "ir": "okno"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Чёрный зонт! ☂️",
         "tr": "Chórnyi zont!",
         "es": "¡Paraguas negro!"
        }
       ],
       "ir": "okno",
       "comodin": true
      }
     ]
    },
    {
     "id": "okno",
     "titulo": "Ventana blanca",
     "bot": [
      {
       "ru": "🪟 + ⚪ = ?",
       "tr": "+ = ?",
       "es": "Ventana + blanco = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Бе́лое окно́.",
       "es": "Ventana blanca."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=белое"
       ],
       "resp": [
        {
         "ru": "Да! Бе́лое окно́! 🪟 👍",
         "tr": "Da! Biélayi aknó!",
         "es": "¡Sí! Белое окно."
        }
       ],
       "ir": "platye"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "бел"
       ],
       "resp": [
        {
         "ru": "Окно́ — оно́: бе́лое окно́. 🙂",
         "tr": "Aknó — anó: biélayi aknó.",
         "es": "Окно es neutro: белое окно."
        }
       ],
       "ir": "platye"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Окно́ — оно́: бе́лое окно́. 🙂",
         "tr": "Aknó — anó: biélayi aknó.",
         "es": "Окно es neutro: белое окно."
        }
       ],
       "ir": "platye",
       "comodin": true
      }
     ]
    },
    {
     "id": "platye",
     "titulo": "Vestido azul",
     "bot": [
      {
       "ru": "👗 + 🔵 = ?",
       "tr": "+ = ?",
       "es": "Vestido + azul = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Си́нее пла́тье.",
       "es": "Vestido azul."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=синее"
       ],
       "resp": [
        {
         "ru": "Да! Си́нее пла́тье! 👗 Отли́чно!",
         "tr": "Da! Síniyi plátyi! Atlíchna!",
         "es": "¡Sí! Синее платье. ¡Excelente!"
        }
       ],
       "ir": "chashka"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "син"
       ],
       "resp": [
        {
         "ru": "Пла́тье — оно́: си́нее пла́тье. 🙂",
         "tr": "Plátyi — anó: síniyi plátyi.",
         "es": "Платье es neutro, y синий es blando: синее платье."
        }
       ],
       "ir": "chashka"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пла́тье — оно́: си́нее пла́тье. 🙂",
         "tr": "Plátyi — anó: síniyi plátyi.",
         "es": "Платье es neutro, y синий es blando: синее платье."
        }
       ],
       "ir": "chashka",
       "comodin": true
      }
     ]
    },
    {
     "id": "chashka",
     "titulo": "Taza amarilla",
     "bot": [
      {
       "ru": "☕ ча́шка + 🟡 = ?",
       "tr": "cháshka + = ?",
       "es": "Taza + amarillo = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Жёлтая ча́шка.",
       "es": "Taza amarilla."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=желтая"
       ],
       "resp": [
        {
         "ru": "Да! Жёлтая ча́шка! ☕ 👍",
         "tr": "Da! Zhóltaya cháshka!",
         "es": "¡Sí! Жёлтая чашка."
        }
       ],
       "ir": "knigi"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "желт"
       ],
       "resp": [
        {
         "ru": "Ча́шка — она́: жёлтая ча́шка. 🙂",
         "tr": "Cháshka — aná: zhóltaya cháshka.",
         "es": "Чашка es femenino: жёлтая чашка."
        }
       ],
       "ir": "knigi"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ча́шка — она́: жёлтая ча́шка. 🙂",
         "tr": "Cháshka — aná: zhóltaya cháshka.",
         "es": "Чашка es femenino: жёлтая чашка."
        }
       ],
       "ir": "knigi",
       "comodin": true
      }
     ]
    },
    {
     "id": "knigi",
     "titulo": "Libros verdes",
     "bot": [
      {
       "ru": "📚 кни́ги + 🟢 = ?",
       "tr": "knígui + = ?",
       "es": "Libros + verde = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Зелёные кни́ги.",
       "es": "Libros verdes."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=зеленые"
       ],
       "resp": [
        {
         "ru": "Да! Зелёные кни́ги! 📚 👍",
         "tr": "Da! Ziliónyyi knígui!",
         "es": "¡Sí! Зелёные книги."
        }
       ],
       "ir": "mashina"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "зелен"
       ],
       "resp": [
        {
         "ru": "Кни́ги — они́: зелёные кни́ги. 🙂",
         "tr": "Knígui — aní: ziliónyyi knígui.",
         "es": "Книги es plural: зелёные книги."
        }
       ],
       "ir": "mashina"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Кни́ги — они́: зелёные кни́ги. 🙂",
         "tr": "Knígui — aní: ziliónyyi knígui.",
         "es": "Книги es plural: зелёные книги."
        }
       ],
       "ir": "mashina",
       "comodin": true
      }
     ]
    },
    {
     "id": "mashina",
     "titulo": "Coche gris",
     "bot": [
      {
       "ru": "🚗 маши́на + 🩶 = ?",
       "tr": "mashína + = ?",
       "es": "Coche + gris = ?"
      }
     ],
     "ideas": [
      {
       "ru": "Се́рая маши́на.",
       "es": "Coche gris."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=серая"
       ],
       "resp": [
        {
         "ru": "Да! Се́рая маши́на! 🚗 Отли́чно! 😄",
         "tr": "Da! Siéraya mashína! Atlíchna!",
         "es": "¡Sí! Серая машина. ¡Lo sabes todo!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "сер"
       ],
       "resp": [
        {
         "ru": "Маши́на — она́: се́рая маши́на. 🙂",
         "tr": "Mashína — aná: siéraya mashína.",
         "es": "Машина es femenino: серая машина."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Маши́на — она́: се́рая маши́на. 🙂",
         "tr": "Mashína — aná: siéraya mashína.",
         "es": "Машина es femenino: серая машина."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "Tu bolso",
     "bot": [
      {
       "ru": "А у тебя́? Су́мка кра́сная? Чёрная? 👜",
       "tr": "A u tibiá? Súmka krásnaya? Chórnaya?",
       "es": "¿Y tú? ¿Tu bolso es rojo? ¿Negro?"
      }
     ],
     "ideas": [
      {
       "ru": "Моя́ су́мка чёрная.",
       "es": "Mi bolso es negro."
      },
      {
       "ru": "Она́ кори́чневая.",
       "es": "Es marrón."
      },
      {
       "ru": "Она́ си́няя.",
       "es": "Es azul."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma femenina",
       "claves": [
        "=черная",
        "=красная",
        "=коричневая",
        "=синяя",
        "=белая",
        "=серая",
        "=зеленая",
        "=розовая",
        "=желтая",
        "=голубая",
        "=оранжевая",
        "=фиолетовая"
       ],
       "resp": [
        {
         "ru": "Краси́вая! 😍",
         "tr": "Krasívaya!",
         "es": "¡Qué bonito!"
        }
       ],
       "ir": "fin",
       "dato": "Bolso"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "черн",
        "красн",
        "коричнев",
        "син",
        "бел",
        "сер",
        "зелен",
        "розов",
        "желт",
        "голуб"
       ],
       "resp": [
        {
         "ru": "Хм… Су́мка — она́: чёрная, кра́сная, си́няя… 🙂",
         "tr": "Jm… Súmka — aná: chórnaya, krásnaya, síniya…",
         "es": "Mmm… Сумка es femenino: чёрная, красная, синяя…"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-moscu",
   "desde": 3,
   "titulo": "Москва́",
   "tituloEs": "Moscú",
   "resumen": "Lugares de la ciudad, el género y el plural",
   "intro": "Masha te muestra Moscú: la Plaza Roja, el metro, un parque… Y te pregunta por Barcelona.",
   "inicio": "plaza",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "plaza",
     "titulo": "La Plaza Roja",
     "bot": [
      {
       "ru": "Э́то Москва́! 🏙️ Москва́ — большо́й и краси́вый го́род.",
       "tr": "Éta Maskvá! Maskvá — balshói i krasívyi górat.",
       "es": "¡Esto es Moscú! Es una ciudad grande y bonita."
      },
      {
       "ru": "А э́то Кра́сная пло́щадь. Она́ о́чень больша́я! 😍",
       "tr": "A éta Krásnaya plóschit. Aná óchin balsháya!",
       "es": "Y esta es la Plaza Roja. ¡Es muy grande!"
      },
      {
       "ru": "Пло́щадь — она́? 🤔",
       "tr": "Plóschit — aná?",
       "es": "¿Площадь es femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, она́.",
       "es": "Sí, femenino."
      },
      {
       "ru": "Нет, он.",
       "es": "No, masculino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "=она"
       ],
       "resp": [
        {
         "ru": "Да! Кра́сная пло́щадь — она́. 👍",
         "tr": "Da! Krásnaya plóschit — aná.",
         "es": "¡Sí! Площадь es femenino: красная площадь."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет",
        "=он"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Пло́щадь — она́: Кра́сная пло́щадь.",
         "tr": "Niet! Plóschit — aná: Krásnaya plóschit.",
         "es": "¡No! Площадь es femenino: Красная площадь."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пло́щадь — она́. 🙂",
         "tr": "Plóschit — aná.",
         "es": "Площадь es femenino."
        }
       ],
       "ir": "metro",
       "comodin": true
      }
     ]
    },
    {
     "id": "metro",
     "titulo": "El metro",
     "bot": [
      {
       "ru": "А э́то метро́. 🚇 Оно́ о́чень краси́вое!",
       "tr": "A éta mitró. Anó óchin krasívayi!",
       "es": "Y este es el metro. ¡Es muy bonito!"
      },
      {
       "ru": "Метро́ — оно́. А кафе́? ☕ Оно́? Он?",
       "tr": "Mitró — anó. A kafé? Anó? On?",
       "es": "Метро es neutro. ¿Y кафе?"
      }
     ],
     "ideas": [
      {
       "ru": "Кафе́ — оно́.",
       "es": "Кафе es neutro."
      },
      {
       "ru": "Он.",
       "es": "Masculino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Оно",
       "claves": [
        "=оно"
       ],
       "resp": [
        {
         "ru": "Да! Кафе́ и метро́ — оно́. 👍",
         "tr": "Da! Kafé i mitró — anó.",
         "es": "¡Sí! Кафе y метро son neutros."
        }
       ],
       "ir": "museo"
      },
      {
       "etiqueta": "Он / она",
       "claves": [
        "=он",
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Кафе́ — оно́: но́вое кафе́.",
         "tr": "Niet! Kafé — anó: nóvayi kafé.",
         "es": "¡No! Кафе es neutro: новое кафе."
        }
       ],
       "ir": "museo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Кафе́ — оно́. 🙂",
         "tr": "Kafé — anó.",
         "es": "Кафе es neutro."
        }
       ],
       "ir": "museo",
       "comodin": true
      }
     ]
    },
    {
     "id": "museo",
     "titulo": "El museo",
     "bot": [
      {
       "ru": "Тут парк. 🌳 Он большо́й и зелёный.",
       "tr": "Tut park. On balshói i ziliónyi.",
       "es": "Aquí hay un parque. Es grande y verde."
      },
      {
       "ru": "А тут музе́й. 🏛️ Он ста́рый? Но́вый? 🤔",
       "tr": "A tut muzéi. On stáryi? Nóvyi?",
       "es": "Y aquí, un museo. ¿Es viejo? ¿Nuevo?"
      }
     ],
     "ideas": [
      {
       "ru": "Он ста́рый?",
       "es": "¿Es viejo?"
      },
      {
       "ru": "Он но́вый?",
       "es": "¿Es nuevo?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Viejo",
       "claves": [
        "стар"
       ],
       "resp": [
        {
         "ru": "Да! Ста́рый и о́чень интере́сный! 🏛️",
         "tr": "Da! Stáryi i óchin intiriésnyi!",
         "es": "¡Sí! Viejo y muy interesante."
        }
       ],
       "ir": "barcelona"
      },
      {
       "etiqueta": "Nuevo",
       "claves": [
        "нов"
       ],
       "resp": [
        {
         "ru": "Нет, он ста́рый! И о́чень интере́сный. 🏛️",
         "tr": "Niet, on stáryi! I óchin intiriésnyi.",
         "es": "¡No, es viejo! Y muy interesante."
        }
       ],
       "ir": "barcelona"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он ста́рый и о́чень интере́сный! 🏛️",
         "tr": "On stáryi i óchin intiriésnyi!",
         "es": "Es viejo y muy interesante."
        }
       ],
       "ir": "barcelona",
       "comodin": true
      }
     ]
    },
    {
     "id": "barcelona",
     "titulo": "Barcelona",
     "bot": [
      {
       "ru": "А Барсело́на? Она́ больша́я? Краси́вая? 😍",
       "tr": "A Barsilóna? Aná balsháya? Krasívaya?",
       "es": "¿Y Barcelona? ¿Es grande? ¿Bonita?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, она́ больша́я и краси́вая!",
       "es": "Sí, es grande y bonita."
      },
      {
       "ru": "О́чень краси́вая!",
       "es": "¡Muy bonita!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma femenina",
       "claves": [
        "=красивая",
        "=большая",
        "=интересная",
        "=хорошая",
        "=старая"
       ],
       "resp": [
        {
         "ru": "Да! Барсело́на — о́чень краси́вый го́род! 😍",
         "tr": "Da! Barsilóna — óchin krasívyi górat!",
         "es": "¡Sí! Barcelona es una ciudad muy bonita."
        }
       ],
       "ir": "mar"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "красив",
        "больш",
        "интерес",
        "хорош"
       ],
       "resp": [
        {
         "ru": "Хм… Барсело́на — она́: больша́я, краси́вая! 🙂",
         "tr": "Jm… Barsilóna — aná: balsháya, krasívaya!",
         "es": "Mmm… Barcelona es femenino: большая, красивая."
        }
       ],
       "ir": "mar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Барсело́на — краси́вый го́род! 😍",
         "tr": "Barsilóna — krasívyi górat!",
         "es": "¡Barcelona es una ciudad bonita!"
        }
       ],
       "ir": "mar",
       "comodin": true
      }
     ]
    },
    {
     "id": "mar",
     "titulo": "El mar",
     "bot": [
      {
       "ru": "А мо́ре? 🌊 Оно́ си́нее? Голубо́е? 🤔",
       "tr": "A móri? Anó síniyi? Galubóyi?",
       "es": "¿Y el mar? ¿Es azul? ¿Celeste?"
      }
     ],
     "ideas": [
      {
       "ru": "Мо́ре си́нее.",
       "es": "El mar es azul."
      },
      {
       "ru": "Оно́ голубо́е.",
       "es": "Es celeste."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=синее"
       ],
       "resp": [
        {
         "ru": "Да! Си́нее мо́ре! 🌊 😍",
         "tr": "Da! Síniyi móri!",
         "es": "¡Sí! Синее море."
        }
       ],
       "ir": "tiendas"
      },
      {
       "etiqueta": "Голубо́е",
       "claves": [
        "=голубое"
       ],
       "resp": [
        {
         "ru": "Да! Голубо́е мо́ре! 🌊 😍",
         "tr": "Da! Galubóyi móri!",
         "es": "¡Sí! Голубое море."
        }
       ],
       "ir": "tiendas"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "голуб"
       ],
       "resp": [
        {
         "ru": "Мо́ре — оно́: голубо́е мо́ре! 🙂",
         "tr": "Móri — anó: galubóyi móri!",
         "es": "Море es neutro: голубое море."
        }
       ],
       "ir": "tiendas"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "син"
       ],
       "resp": [
        {
         "ru": "Мо́ре — оно́: си́нее мо́ре! 🙂",
         "tr": "Móri — anó: síniyi móri!",
         "es": "Море es neutro: синее море."
        }
       ],
       "ir": "tiendas"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Мо́ре — оно́: си́нее мо́ре! 🙂",
         "tr": "Móri — anó: síniyi móri!",
         "es": "Море es neutro: синее море."
        }
       ],
       "ir": "tiendas",
       "comodin": true
      }
     ]
    },
    {
     "id": "tiendas",
     "titulo": "Plural",
     "bot": [
      {
       "ru": "Э́то магази́н. 🏪 А э́то? 🏪🏪🏪",
       "tr": "Éta magazín. A éta?",
       "es": "Esto es una tienda. ¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то магази́ны.",
       "es": "Son tiendas."
      },
      {
       "ru": "Магази́ны!",
       "es": "¡Tiendas!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Магази́ны",
       "claves": [
        "=магазины"
       ],
       "resp": [
        {
         "ru": "Да! Магази́ны! 🛍️ 👍",
         "tr": "Da! Magazíny!",
         "es": "¡Sí! Магазины."
        }
       ],
       "ir": "casas"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Магази́ны! 🙂",
         "tr": "Magazíny!",
         "es": "Plural: магазины."
        }
       ],
       "ir": "casas",
       "comodin": true
      }
     ]
    },
    {
     "id": "casas",
     "titulo": "Plural especial",
     "bot": [
      {
       "ru": "А тут? 🏠🏠🏠",
       "tr": "A tut?",
       "es": "¿Y aquí?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то дома́.",
       "es": "Son casas."
      },
      {
       "ru": "Дома́!",
       "es": "¡Casas!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дома́",
       "claves": [
        "=дома"
       ],
       "resp": [
        {
         "ru": "Да! Дома́! 👍 Отли́чно!",
         "tr": "Da! Damá! Atlíchna!",
         "es": "¡Sí! Дома (un plural especial). ¡Lo sabes todo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Домы (error)",
       "claves": [
        "=домы"
       ],
       "resp": [
        {
         "ru": "Хм… Дома́! 🙂",
         "tr": "Jm… Damá!",
         "es": "Es un plural especial: дома."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Дома́! 🙂",
         "tr": "Damá!",
         "es": "Es un plural especial: дома."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-familia",
   "desde": 3,
   "titulo": "Моя́ семья́",
   "tituloEs": "La familia de Masha",
   "resumen": "Profesiones, cómo es cada uno y las palabras de hombre que terminan en -а",
   "intro": "Masha te muestra fotos de su familia: quién es cada uno, cómo es y en qué trabaja.",
   "inicio": "papa",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "papa",
     "titulo": "Su papá",
     "bot": [
      {
       "ru": "Э́то моя́ семья́! 👨‍👩‍👦",
       "tr": "Éta mayá simyá!",
       "es": "¡Esta es mi familia!"
      },
      {
       "ru": "Э́то мой па́па. 👨 Он инжене́р.",
       "tr": "Éta moi pápa. On inzhiniér.",
       "es": "Este es mi papá. Es ingeniero."
      },
      {
       "ru": "Па́па — он? Она́? 😄",
       "tr": "Pápa — on? Aná?",
       "es": "¿Папа es masculino o femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он!",
       "es": "¡Masculino!"
      },
      {
       "ru": "Она́.",
       "es": "Femenino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! Па́па — он: мой па́па. 👍",
         "tr": "Da! Pápa — on: moi pápa.",
         "es": "¡Sí! Папа es masculino (es un hombre), aunque termine en -а: мой папа."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Па́па — он: мой па́па.",
         "tr": "Niet! Pápa — on: moi pápa.",
         "es": "¡No! Папа es masculino (es un hombre), aunque termine en -а."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Па́па — он: мой па́па. 🙂",
         "tr": "Pápa — on: moi pápa.",
         "es": "Папа es masculino: мой папа."
        }
       ],
       "ir": "mama",
       "comodin": true
      }
     ]
    },
    {
     "id": "mama",
     "titulo": "Su mamá",
     "bot": [
      {
       "ru": "А э́то ма́ма. 👩‍⚕️ Кто она́? 🤔",
       "tr": "A éta máma. Kto aná?",
       "es": "Y esta es mamá. ¿Qué es?"
      }
     ],
     "ideas": [
      {
       "ru": "Она́ врач?",
       "es": "¿Es médica?"
      },
      {
       "ru": "Она́ учи́тель?",
       "es": "¿Es profesora?"
      },
      {
       "ru": "Она́ медсестра́?",
       "es": "¿Es enfermera?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Médica",
       "claves": [
        "врач"
       ],
       "resp": [
        {
         "ru": "Да! Ма́ма — врач. 🩺",
         "tr": "Da! Máma — vrach.",
         "es": "¡Sí! Mamá es médica."
        }
       ],
       "ir": "tio"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Нет, ма́ма — врач! 🩺",
         "tr": "Niet, máma — vrach!",
         "es": "No, mamá es médica."
        }
       ],
       "ir": "tio",
       "comodin": true
      }
     ]
    },
    {
     "id": "tio",
     "titulo": "Su tío",
     "bot": [
      {
       "ru": "А э́то мой дя́дя. 👨‍🍳 Он по́вар! Он молодо́й? Ста́рый? 🤔",
       "tr": "A éta moi diádia. On póvar! On maladói? Stáryi?",
       "es": "Y este es mi tío. ¡Es cocinero! ¿Es joven? ¿Viejo?"
      }
     ],
     "ideas": [
      {
       "ru": "Он молодо́й?",
       "es": "¿Es joven?"
      },
      {
       "ru": "Он ста́рый?",
       "es": "¿Es viejo?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Joven",
       "claves": [
        "молод"
       ],
       "resp": [
        {
         "ru": "Да! Он молодо́й и высо́кий. 😄",
         "tr": "Da! On maladói i vysókii.",
         "es": "¡Sí! Es joven y alto."
        }
       ],
       "ir": "abuelo"
      },
      {
       "etiqueta": "Viejo",
       "claves": [
        "стар"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Он молодо́й и высо́кий!",
         "tr": "Niet! On maladói i vysókii!",
         "es": "¡No! ¡Es joven y alto!"
        }
       ],
       "ir": "abuelo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он молодо́й и высо́кий! 😄",
         "tr": "On maladói i vysókii!",
         "es": "¡Es joven y alto!"
        }
       ],
       "ir": "abuelo",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuelo",
     "titulo": "Su abuelo",
     "bot": [
      {
       "ru": "А э́то де́душка. 👴 Он ста́рый и о́чень до́брый! ❤️ Де́душка — он? Она́?",
       "tr": "A éta diédushka. On stáryi i óchin dóbryi! Diédushka — on? Aná?",
       "es": "Y este es el abuelo. ¡Es mayor y muy bueno! ¿Дедушка es masculino o femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он.",
       "es": "Masculino."
      },
      {
       "ru": "Она́.",
       "es": "Femenino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! До́брый де́душка. 👍",
         "tr": "Da! Dóbryi diédushka.",
         "es": "¡Sí! Добрый дедушка: masculino."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Де́душка — он, как па́па и дя́дя.",
         "tr": "Niet! Diédushka — on, kak pápa i diádia.",
         "es": "¡No! Дедушка es masculino, como папа y дядя."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Де́душка — он. 🙂",
         "tr": "Diédushka — on.",
         "es": "Дедушка es masculino."
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма? 👦 Он студе́нт. Ди́ма ма́ленький? 🤔",
       "tr": "A Díma? On studiént. Díma málinkii?",
       "es": "¿Y Dima? Es estudiante. ¿Es bajito?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, он высо́кий.",
       "es": "No, es alto."
      },
      {
       "ru": "Да.",
       "es": "Sí."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No / alto",
       "claves": [
        "высок",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Да! Он высо́кий! 😄 А я ма́ленькая. 🙈",
         "tr": "Da! On vysókii! A ya málinkaya.",
         "es": "¡Exacto! Es alto. Y yo soy bajita."
        }
       ],
       "ir": "hermanos"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "маленьк"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Он высо́кий! А я ма́ленькая. 🙈",
         "tr": "Niet! On vysókii! A ya málinkaya.",
         "es": "¡No! Es alto. Y yo soy bajita."
        }
       ],
       "ir": "hermanos"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он высо́кий! 😄",
         "tr": "On vysókii!",
         "es": "¡Es alto!"
        }
       ],
       "ir": "hermanos",
       "comodin": true
      }
     ]
    },
    {
     "id": "hermanos",
     "titulo": "Plural especial",
     "bot": [
      {
       "ru": "Ди́ма — брат. 👦 А тут? 👦👦",
       "tr": "Díma — brat. A tut?",
       "es": "Dima es un hermano. ¿Y aquí?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то бра́тья.",
       "es": "Son hermanos."
      },
      {
       "ru": "Бра́тья!",
       "es": "¡Hermanos!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Бра́тья",
       "claves": [
        "=братья"
       ],
       "resp": [
        {
         "ru": "Да! Бра́тья! 👍",
         "tr": "Da! Brátya!",
         "es": "¡Sí! Братья (un plural especial)."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "брат"
       ],
       "resp": [
        {
         "ru": "Хм… Бра́тья! 🙂",
         "tr": "Jm… Brátya!",
         "es": "Es un plural especial: братья."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Бра́тья! 🙂",
         "tr": "Brátya!",
         "es": "Es un plural especial: братья."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А ты? Кто ты? Студе́нт? Инжене́р? 🤔",
       "tr": "A ty? Kto ty? Studiént? Inzhiniér?",
       "es": "¿Y tú? ¿Qué eres? ¿Estudiante? ¿Ingeniero?"
      }
     ],
     "ideas": [
      {
       "ru": "Я студе́нт.",
       "es": "Soy estudiante."
      },
      {
       "ru": "Я студе́нтка.",
       "es": "Soy estudiante (mujer)."
      },
      {
       "ru": "Я инжене́р.",
       "es": "Soy ingeniero."
      },
      {
       "ru": "Я программи́ст.",
       "es": "Soy programador."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Estudiante",
       "claves": [
        "студент"
       ],
       "resp": [
        {
         "ru": "Как я! 📚",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "genero": {
        "студент": "m",
        "студентка": "f"
       },
       "datoValor": "студе́нт"
      },
      {
       "etiqueta": "Ingeniero",
       "claves": [
        "инженер"
       ],
       "resp": [
        {
         "ru": "Как мой па́па! 👷",
         "tr": "Kak moi pápa!",
         "es": "¡Como mi papá!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "datoValor": "инжене́р"
      },
      {
       "etiqueta": "Médico",
       "claves": [
        "врач"
       ],
       "resp": [
        {
         "ru": "Как моя́ ма́ма! 🩺",
         "tr": "Kak mayá máma!",
         "es": "¡Como mi mamá!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "datoValor": "врач"
      },
      {
       "etiqueta": "Cocinero",
       "claves": [
        "повар"
       ],
       "resp": [
        {
         "ru": "Как мой дя́дя! 👨‍🍳",
         "tr": "Kak moi diádia!",
         "es": "¡Como mi tío!"
        }
       ],
       "ir": "fin",
       "dato": "Es",
       "datoValor": "по́вар"
      },
      {
       "etiqueta": "Otra profesión",
       "claves": [
        "программист",
        "официант",
        "медсестр",
        "продавщиц",
        "полицейск",
        "учител",
        "преподават"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "dato": "Es"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-penal",
   "desde": 3,
   "titulo": "Мой пена́л",
   "tituloEs": "Cosas para estudiar",
   "resumen": "Útiles de estudio, el género de las palabras en -ь y el plural",
   "intro": "Masha abre su estuche y su mochila: ¿qué es cada cosa? ¿Es masculino o femenino?",
   "inicio": "penal",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "penal",
     "titulo": "El estuche",
     "bot": [
      {
       "ru": "Э́то мой пена́л. ✏️ Тут каранда́ш, ла́стик и лине́йка.",
       "tr": "Éta moi pinál. Tut karandásh, lástik i liniéika.",
       "es": "Este es mi estuche. Aquí hay un lápiz, una goma y una regla."
      },
      {
       "ru": "Пена́л — он? Она́? 🤔",
       "tr": "Pinál — on? Aná?",
       "es": "¿Пенал es masculino o femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он.",
       "es": "Masculino."
      },
      {
       "ru": "Она́.",
       "es": "Femenino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! Пена́л — он: мой пена́л. 👍",
         "tr": "Da! Pinál — on: moi pinál.",
         "es": "¡Sí! Masculino: мой пенал."
        }
       ],
       "ir": "tijeras"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Пена́л — он: мой пена́л.",
         "tr": "Niet! Pinál — on: moi pinál.",
         "es": "¡No! Пенал es masculino: termina en consonante."
        }
       ],
       "ir": "tijeras"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пена́л — он. 🙂",
         "tr": "Pinál — on.",
         "es": "Пенал es masculino."
        }
       ],
       "ir": "tijeras",
       "comodin": true
      }
     ]
    },
    {
     "id": "tijeras",
     "titulo": "Tijeras",
     "bot": [
      {
       "ru": "Что э́то? ✂️",
       "tr": "Shto éta?",
       "es": "¿Qué es esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то но́жницы.",
       "es": "Son unas tijeras."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "ножниц"
       ],
       "resp": [
        {
         "ru": "Да! Но́жницы. ✂️ 👍",
         "tr": "Da! Nózhnitsi.",
         "es": "¡Sí! Unas tijeras."
        }
       ],
       "ir": "regla"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то но́жницы. ✂️",
         "tr": "Éta nózhnitsi.",
         "es": "Son unas tijeras."
        }
       ],
       "ir": "regla"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то но́жницы. ✂️",
         "tr": "Éta nózhnitsi.",
         "es": "Son unas tijeras."
        }
       ],
       "ir": "regla",
       "comodin": true
      }
     ]
    },
    {
     "id": "regla",
     "titulo": "Regla",
     "bot": [
      {
       "ru": "А э́то? 📏",
       "tr": "A éta?",
       "es": "¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то лине́йка.",
       "es": "Es una regla."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "линейк"
       ],
       "resp": [
        {
         "ru": "Да! Лине́йка. 📏 👍",
         "tr": "Da! Liniéika.",
         "es": "¡Sí! Una regla."
        }
       ],
       "ir": "cuaderno"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то лине́йка. 📏",
         "tr": "Éta liniéika.",
         "es": "Es una regla."
        }
       ],
       "ir": "cuaderno"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то лине́йка. 📏",
         "tr": "Éta liniéika.",
         "es": "Es una regla."
        }
       ],
       "ir": "cuaderno",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuaderno",
     "titulo": "Cuaderno",
     "bot": [
      {
       "ru": "А э́то? 📓",
       "tr": "A éta?",
       "es": "¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то тетра́дь.",
       "es": "Es un cuaderno."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "тетрад"
       ],
       "resp": [
        {
         "ru": "Да! Тетра́дь. 📓",
         "tr": "Da! Titrát.",
         "es": "¡Sí! Un cuaderno."
        }
       ],
       "ir": "tetrad"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то тетра́дь. 📓",
         "tr": "Éta titrát.",
         "es": "Es un cuaderno."
        }
       ],
       "ir": "tetrad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то тетра́дь. 📓",
         "tr": "Éta titrát.",
         "es": "Es un cuaderno."
        }
       ],
       "ir": "tetrad",
       "comodin": true
      }
     ]
    },
    {
     "id": "tetrad",
     "titulo": "Тетра́дь: ¿él o ella?",
     "bot": [
      {
       "ru": "Тетра́дь — он? Она́? 🤔",
       "tr": "Titrát — on? Aná?",
       "es": "¿Тетрадь es masculino o femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Она́.",
       "es": "Femenino."
      },
      {
       "ru": "Он.",
       "es": "Masculino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Да! Тетра́дь — она́: моя́ тетра́дь. 👍",
         "tr": "Da! Titrát — aná: mayá titrát.",
         "es": "¡Sí! Femenino: моя тетрадь."
        }
       ],
       "ir": "slovar"
      },
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Нет! Тетра́дь — она́: моя́ тетра́дь. 🙂",
         "tr": "Niet! Titrát — aná: mayá titrát.",
         "es": "¡No! Тетрадь es femenino: моя тетрадь. Con -ь hay que aprenderlas."
        }
       ],
       "ir": "slovar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Тетра́дь — она́. 🙂",
         "tr": "Titrát — aná.",
         "es": "Тетрадь es femenino."
        }
       ],
       "ir": "slovar",
       "comodin": true
      }
     ]
    },
    {
     "id": "slovar",
     "titulo": "Слова́рь: ¿él o ella?",
     "bot": [
      {
       "ru": "А слова́рь? 📘 Он? Она́?",
       "tr": "A slavár? On? Aná?",
       "es": "¿Y словарь? ¿Masculino? ¿Femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он.",
       "es": "Masculino."
      },
      {
       "ru": "Она́.",
       "es": "Femenino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! Слова́рь — он: мой слова́рь. 👍 Отли́чно!",
         "tr": "Da! Slavár — on: moi slavár. Atlíchna!",
         "es": "¡Sí! Masculino: мой словарь. ¡Excelente!"
        }
       ],
       "ir": "lapices"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Слова́рь — он: мой слова́рь.",
         "tr": "Niet! Slavár — on: moi slavár.",
         "es": "¡No! Словарь es masculino: мой словарь."
        }
       ],
       "ir": "lapices"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Слова́рь — он. 🙂",
         "tr": "Slavár — on.",
         "es": "Словарь es masculino."
        }
       ],
       "ir": "lapices",
       "comodin": true
      }
     ]
    },
    {
     "id": "lapices",
     "titulo": "Plural",
     "bot": [
      {
       "ru": "Э́то каранда́ш. ✏️ А э́то? ✏️✏️✏️",
       "tr": "Éta karandásh. A éta?",
       "es": "Esto es un lápiz. ¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то карандаши́.",
       "es": "Son lápices."
      },
      {
       "ru": "Карандаши́!",
       "es": "¡Lápices!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Карандаши́",
       "claves": [
        "=карандаши"
       ],
       "resp": [
        {
         "ru": "Да! Карандаши́! 👍",
         "tr": "Da! Karandashí!",
         "es": "¡Sí! Карандаши: después de «ш» va «и»."
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "карандаш"
       ],
       "resp": [
        {
         "ru": "Карандаши́! 🙂",
         "tr": "Karandashí!",
         "es": "Después de «ш» va «и»: карандаши."
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Карандаши́! 🙂",
         "tr": "Karandashí!",
         "es": "Plural: карандаши."
        }
       ],
       "ir": "ruso",
       "comodin": true
      }
     ]
    },
    {
     "id": "ruso",
     "titulo": "El ruso",
     "bot": [
      {
       "ru": "Мой уче́бник — ру́сский язы́к! 📗 Ру́сский язы́к — интере́сный? 😄",
       "tr": "Moi uchébnik — rússkii yizýk! Rússkii yizýk — intiriésnyi?",
       "es": "Mi libro de texto es de ruso. ¿El ruso es interesante?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, о́чень интере́сный!",
       "es": "¡Sí, muy interesante!"
      },
      {
       "ru": "Да!",
       "es": "¡Sí!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "интерес",
        "=да"
       ],
       "resp": [
        {
         "ru": "Да! 😄 И ты говори́шь отли́чно! 👍",
         "tr": "Da! I ty gavarísh atlíchna!",
         "es": "¡Sí! ¡Y hablas genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😄 Ты говори́шь отли́чно! 👍",
         "tr": "Ty gavarísh atlíchna!",
         "es": "¡Hablas genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u3-animales",
   "desde": 3,
   "titulo": "Ба́рсик и друзья́",
   "tituloEs": "Animales",
   "resumen": "Animales, cómo son y el plural",
   "intro": "Masha te muestra animales: ¿quién es?, ¿es grande o pequeño? Al final, ¿qué es mejor, un gato o un perro?",
   "inicio": "elefante",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "elefante",
     "titulo": "Elefante",
     "bot": [
      {
       "ru": "Ба́рсик — мой кот. 🐈‍⬛ Он чёрный и большо́й.",
       "tr": "Bársik — moi kot. ⬛ On chórnyi i balshói.",
       "es": "Barsik es mi gato. Es negro y grande."
      },
      {
       "ru": "А э́то кто? 🐘",
       "tr": "A éta kto?",
       "es": "¿Y este quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то слон.",
       "es": "Es un elefante."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "=слон"
       ],
       "resp": [
        {
         "ru": "Да! Э́то слон. 🐘",
         "tr": "Da! Éta slon.",
         "es": "¡Sí! Es un elefante."
        }
       ],
       "ir": "grande"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то слон! 🐘",
         "tr": "Éta slon!",
         "es": "¡Es un elefante!"
        }
       ],
       "ir": "grande"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то слон! 🐘",
         "tr": "Éta slon!",
         "es": "¡Es un elefante!"
        }
       ],
       "ir": "grande",
       "comodin": true
      }
     ]
    },
    {
     "id": "grande",
     "titulo": "¿Grande?",
     "bot": [
      {
       "ru": "Он большо́й? Ма́ленький? 😄",
       "tr": "On balshói? Málinkii?",
       "es": "¿Es grande? ¿Pequeño?"
      }
     ],
     "ideas": [
      {
       "ru": "Он большо́й!",
       "es": "¡Es grande!"
      },
      {
       "ru": "Он о́чень большо́й!",
       "es": "¡Es muy grande!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Grande",
       "claves": [
        "больш"
       ],
       "resp": [
        {
         "ru": "Да! Слон о́чень большо́й! 🐘",
         "tr": "Da! Slon óchin balshói!",
         "es": "¡Sí! El elefante es muy grande."
        }
       ],
       "ir": "pato"
      },
      {
       "etiqueta": "Pequeño",
       "claves": [
        "маленьк"
       ],
       "resp": [
        {
         "ru": "Ма́ленький?! 😂 Нет! Слон большо́й!",
         "tr": "Málinkii?! Niet! Slon balshói!",
         "es": "¿¡Pequeño!? ¡No! El elefante es grande."
        }
       ],
       "ir": "pato"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Слон — большо́й! 😄",
         "tr": "Slon — balshói!",
         "es": "¡El elefante es grande!"
        }
       ],
       "ir": "pato",
       "comodin": true
      }
     ]
    },
    {
     "id": "pato",
     "titulo": "Pato",
     "bot": [
      {
       "ru": "А э́то? 🦆",
       "tr": "A éta?",
       "es": "¿Y esto?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то у́тка.",
       "es": "Es un pato."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "утк"
       ],
       "resp": [
        {
         "ru": "Да! У́тка. Она́ ма́ленькая. 🦆",
         "tr": "Da! Útka. Aná málinkaya.",
         "es": "¡Sí! Un pato. Es pequeño."
        }
       ],
       "ir": "oso"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то у́тка. 🦆 Она́ ма́ленькая.",
         "tr": "Éta útka. Aná málinkaya.",
         "es": "Es un pato. Es pequeño."
        }
       ],
       "ir": "oso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то у́тка. 🦆 Она́ ма́ленькая.",
         "tr": "Éta útka. Aná málinkaya.",
         "es": "Es un pato. Es pequeño."
        }
       ],
       "ir": "oso",
       "comodin": true
      }
     ]
    },
    {
     "id": "oso",
     "titulo": "Oso",
     "bot": [
      {
       "ru": "Кто э́то? 🐻",
       "tr": "Kto éta?",
       "es": "¿Quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то медве́дь.",
       "es": "Es un oso."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "медвед"
       ],
       "resp": [
        {
         "ru": "Да! Медве́дь. 🐻 Ру́сский медве́дь! 😄",
         "tr": "Da! Midviét. Rússkii midviét!",
         "es": "¡Sí! Un oso. ¡El oso ruso!"
        }
       ],
       "ir": "oso_g"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то медве́дь. 🐻",
         "tr": "Éta midviét.",
         "es": "Es un oso."
        }
       ],
       "ir": "oso_g"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то медве́дь. 🐻",
         "tr": "Éta midviét.",
         "es": "Es un oso."
        }
       ],
       "ir": "oso_g",
       "comodin": true
      }
     ]
    },
    {
     "id": "oso_g",
     "titulo": "Медве́дь: ¿él o ella?",
     "bot": [
      {
       "ru": "Медве́дь — он? Она́? 🤔",
       "tr": "Midviét — on? Aná?",
       "es": "¿Медведь es masculino o femenino?"
      }
     ],
     "ideas": [
      {
       "ru": "Он.",
       "es": "Masculino."
      },
      {
       "ru": "Она́.",
       "es": "Femenino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Он",
       "claves": [
        "=он"
       ],
       "resp": [
        {
         "ru": "Да! Большо́й медве́дь. 👍",
         "tr": "Da! Balshói midviét.",
         "es": "¡Sí! Masculino: большой медведь."
        }
       ],
       "ir": "zorro"
      },
      {
       "etiqueta": "Она",
       "claves": [
        "=она"
       ],
       "resp": [
        {
         "ru": "Нет! Медве́дь — он: большо́й медве́дь. 🙂",
         "tr": "Niet! Midviét — on: balshói midviét.",
         "es": "¡No! Медведь es masculino: большой медведь."
        }
       ],
       "ir": "zorro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Медве́дь — он. 🙂",
         "tr": "Midviét — on.",
         "es": "Медведь es masculino."
        }
       ],
       "ir": "zorro",
       "comodin": true
      }
     ]
    },
    {
     "id": "zorro",
     "titulo": "Zorro",
     "bot": [
      {
       "ru": "А э́то кто? 🦊",
       "tr": "A éta kto?",
       "es": "¿Y este quién es?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то лиса́.",
       "es": "Es un zorro."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta bien",
       "claves": [
        "лис"
       ],
       "resp": [
        {
         "ru": "Да! Лиса́. Она́ о́чень краси́вая! 🦊",
         "tr": "Da! Lisá. Aná óchin krasívaya!",
         "es": "¡Sí! Un zorro. ¡Es muy bonito!"
        }
       ],
       "ir": "caballos"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю",
        "=не понимаю",
        "=кто это",
        "=что это"
       ],
       "resp": [
        {
         "ru": "Э́то лиса́. Она́ краси́вая! 🦊",
         "tr": "Éta lisá. Aná krasívaya!",
         "es": "Es un zorro. ¡Es bonito!"
        }
       ],
       "ir": "caballos"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то лиса́. Она́ краси́вая! 🦊",
         "tr": "Éta lisá. Aná krasívaya!",
         "es": "Es un zorro. ¡Es bonito!"
        }
       ],
       "ir": "caballos",
       "comodin": true
      }
     ]
    },
    {
     "id": "caballos",
     "titulo": "Plural",
     "bot": [
      {
       "ru": "А тут? 🐴🐴",
       "tr": "A tut?",
       "es": "¿Y aquí?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то ло́шади.",
       "es": "Son caballos."
      },
      {
       "ru": "Ло́шади!",
       "es": "¡Caballos!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ло́шади",
       "claves": [
        "=лошади"
       ],
       "resp": [
        {
         "ru": "Да! Ло́шади! 🐴 👍",
         "tr": "Da! Lóshadi!",
         "es": "¡Sí! Лошади."
        }
       ],
       "ir": "perro"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "лошад"
       ],
       "resp": [
        {
         "ru": "Ло́шади! 🙂",
         "tr": "Lóshadi!",
         "es": "Con -ь, el plural lleva -и: лошади."
        }
       ],
       "ir": "perro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ло́шади! 🐴",
         "tr": "Lóshadi!",
         "es": "Plural: лошади."
        }
       ],
       "ir": "perro",
       "comodin": true
      }
     ]
    },
    {
     "id": "perro",
     "titulo": "¿Gato o perro?",
     "bot": [
      {
       "ru": "А соба́ка? 🐕 Соба́ка — хоро́шая? Кот — хоро́ший? 😄",
       "tr": "A sabáka? Sabáka — jaróshaya? Kot — jaróshii?",
       "es": "¿Y el perro? ¿El perro es bueno? ¿El gato es bueno?"
      }
     ],
     "ideas": [
      {
       "ru": "Соба́ка хоро́шая!",
       "es": "¡El perro es bueno!"
      },
      {
       "ru": "Кот хоро́ший!",
       "es": "¡El gato es bueno!"
      },
      {
       "ru": "Кот и соба́ка — хоро́шие!",
       "es": "¡El gato y el perro son buenos!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Los dos",
       "claves": [
        "=хорошие"
       ],
       "resp": [
        {
         "ru": "Да! Кот и соба́ка — хоро́шие! 😄",
         "tr": "Da! Kot i sabáka — jaróshiyi!",
         "es": "¡Sí! ¡Los dos son buenos!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Gato",
       "claves": [
        "=кот"
       ],
       "resp": [
        {
         "ru": "Да! Ба́рсик о́чень хоро́ший! 🐈‍⬛ 😄",
         "tr": "Da! Bársik óchin jaróshii! ⬛",
         "es": "¡Sí! ¡Barsik es muy bueno!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Perro",
       "claves": [
        "собак"
       ],
       "resp": [
        {
         "ru": "Соба́ка? 😄 Ба́рсик — нет! 🙀",
         "tr": "Sabáka? Bársik — niet!",
         "es": "¿El perro? ¡Barsik no está de acuerdo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😄 Ба́рсик о́чень хоро́ший!",
         "tr": "Bársik óchin jaróshii!",
         "es": "¡Barsik es muy bueno!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-leer",
   "desde": 4,
   "titulo": "Кто что де́лает?",
   "tituloEs": "¿Quién hace qué?",
   "resumen": "Leer, mirar, escuchar: quién hace la acción y qué la recibe",
   "intro": "Masha cuenta qué hace su familia. Contesta quién hace cada cosa y qué hace: cuidado con el acusativo (кни́га → кни́гу).",
   "inicio": "yo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "yo",
     "titulo": "Masha lee",
     "bot": [
      {
       "ru": "Сего́дня я чита́ю кни́гу. 📖 А ты? 🙂",
       "tr": "Sivódnia ya chitáyu knígu. A ty?",
       "es": "Hoy leo un libro. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я чита́ю кни́гу.",
       "es": "Leo un libro."
      },
      {
       "ru": "Я чита́ю газе́ту.",
       "es": "Leo el periódico."
      },
      {
       "ru": "Я чита́ю журна́л.",
       "es": "Leo una revista."
      },
      {
       "ru": "Я смотрю́ фильм.",
       "es": "Veo una película."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=книгу",
        "=газету",
        "=историю",
        "=журнал",
        "=письмо",
        "=фильм",
        "=сказку"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "abuela",
       "dato": "Lee o mira"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=книга",
        "=газета",
        "=история",
        "=сказка"
       ],
       "resp": [
        {
         "ru": "Хм… Кни́га → я чита́ю кни́гу. 🙂",
         "tr": "Jm… Kníga → ya chitáyu knígu.",
         "es": "Mmm… Lo que se lee recibe la acción: книга → читаю книгу, газета → газету."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "А ба́бушка чита́ет газе́ту. 👵📰 Кто чита́ет газе́ту? 🤔",
       "tr": "A bábushka chitáyit gazétu. Kto chitáyit gazétu?",
       "es": "La abuela lee el periódico. ¿Quién lee el periódico?"
      }
     ],
     "ideas": [
      {
       "ru": "Ба́бушка.",
       "es": "La abuela."
      },
      {
       "ru": "Ба́бушка чита́ет газе́ту.",
       "es": "La abuela lee el periódico."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ба́бушка",
       "claves": [
        "=бабушка"
       ],
       "resp": [
        {
         "ru": "Да! Ба́бушка чита́ет газе́ту. 👍",
         "tr": "Da! Bábushka chitáyit gazétu.",
         "es": "¡Sí! La abuela lee el periódico."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Ба́бушку (error)",
       "claves": [
        "=бабушку"
       ],
       "resp": [
        {
         "ru": "Хм… Ба́бушка чита́ет: она́ де́лает! Ба́бушка. 🙂",
         "tr": "Jm… Bábushka chitáyit: aná diélayit! Bábushka.",
         "es": "Mmm… La abuela hace la acción: nominativo, бабушка."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ба́бушка! 👵",
         "tr": "Bábushka!",
         "es": "¡La abuela!"
        }
       ],
       "ir": "papa",
       "comodin": true
      }
     ]
    },
    {
     "id": "papa",
     "titulo": "Papá",
     "bot": [
      {
       "ru": "Па́па смо́трит фильм. 📺 Что смо́трит па́па?",
       "tr": "Pápa smótrit film. Shto smótrit pápa?",
       "es": "Papá ve una película. ¿Qué ve papá?"
      }
     ],
     "ideas": [
      {
       "ru": "Фильм.",
       "es": "Una película."
      },
      {
       "ru": "Па́па смо́трит фильм.",
       "es": "Papá ve una película."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Фильм",
       "claves": [
        "фильм"
       ],
       "resp": [
        {
         "ru": "Да! Фильм. 🎬",
         "tr": "Da! Film.",
         "es": "¡Sí! Una película."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Фильм! 🎬",
         "tr": "Film!",
         "es": "¡Una película!"
        }
       ],
       "ir": "mama",
       "comodin": true
      }
     ]
    },
    {
     "id": "mama",
     "titulo": "Mamá",
     "bot": [
      {
       "ru": "А ма́ма слу́шает му́зыку. 🎵 Что слу́шает ма́ма?",
       "tr": "A máma slúshayit múzyku. Shto slúshayit máma?",
       "es": "Y mamá escucha música. ¿Qué escucha mamá?"
      }
     ],
     "ideas": [
      {
       "ru": "Му́зыку.",
       "es": "Música."
      },
      {
       "ru": "Ма́ма слу́шает му́зыку.",
       "es": "Mamá escucha música."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=музыку"
       ],
       "resp": [
        {
         "ru": "Да! Му́зыку. 🎵 👍",
         "tr": "Da! Múzyku.",
         "es": "¡Sí! Музыку."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "музык"
       ],
       "resp": [
        {
         "ru": "Му́зыку! Му́зыка → слу́шает му́зыку. 🙂",
         "tr": "Múzyku! Múzyka → slúshayit múzyku.",
         "es": "Музыку: lo que se escucha recibe la acción (-а → -у)."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Му́зыку! Му́зыка → слу́шает му́зыку. 🙂",
         "tr": "Múzyku! Múzyka → slúshayit múzyku.",
         "es": "Музыку: lo que se escucha recibe la acción (-а → -у)."
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "Ди́ма пи́шет письмо́. ✉️ Что пи́шет Ди́ма?",
       "tr": "Díma píshit pismó. Shto píshit Díma?",
       "es": "Dima escribe una carta. ¿Qué escribe Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "Письмо́.",
       "es": "Una carta."
      },
      {
       "ru": "Ди́ма пи́шет письмо́.",
       "es": "Dima escribe una carta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Письмо",
       "claves": [
        "письм"
       ],
       "resp": [
        {
         "ru": "Да! Письмо́. 👍",
         "tr": "Da! Pismó.",
         "es": "¡Sí! Письмо: el neutro no cambia."
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Письмо́! ✉️",
         "tr": "Pismó!",
         "es": "¡Una carta!"
        }
       ],
       "ir": "barsik",
       "comodin": true
      }
     ]
    },
    {
     "id": "barsik",
     "titulo": "Barsik",
     "bot": [
      {
       "ru": "А Ба́рсик? 🐈‍⬛ Он ест колбасу́! 😂 Что ест Ба́рсик?",
       "tr": "A Bársik? ⬛ On yest kalbasú! Shto yest Bársik?",
       "es": "¿Y Barsik? ¡Come embutido! ¿Qué come Barsik?"
      }
     ],
     "ideas": [
      {
       "ru": "Колбасу́!",
       "es": "¡Embutido!"
      },
      {
       "ru": "Ба́рсик ест колбасу́.",
       "es": "Barsik come embutido."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=колбасу"
       ],
       "resp": [
        {
         "ru": "Да! Колбасу́! 😂 Ба́рсик лю́бит колбасу́.",
         "tr": "Da! Kalbasú! Bársik liúbit kalbasú.",
         "es": "¡Sí! A Barsik le encanta el embutido."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "колбас"
       ],
       "resp": [
        {
         "ru": "Колбасу́! Колбаса́ → ест колбасу́. 😂",
         "tr": "Kalbasú! Kalbasá → yest kalbasú.",
         "es": "Колбасу: -а → -у."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Колбасу́! Колбаса́ → ест колбасу́. 😂",
         "tr": "Kalbasú! Kalbasá → yest kalbasú.",
         "es": "Колбасу: -а → -у."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А я смотрю́ фильм и ем пи́ццу! 🍕 А ты? 🙂",
       "tr": "A ya smatriú film i yem pítstsu! A ty?",
       "es": "Yo veo una película y como pizza. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я ем пи́ццу.",
       "es": "Como pizza."
      },
      {
       "ru": "Я слу́шаю му́зыку.",
       "es": "Escucho música."
      },
      {
       "ru": "Я пишу́ письмо́.",
       "es": "Escribo una carta."
      },
      {
       "ru": "Я чита́ю кни́гу.",
       "es": "Leo un libro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=пиццу",
        "=музыку",
        "=письмо",
        "=книгу",
        "=песню",
        "=газету",
        "=фильм",
        "=салат",
        "=суп",
        "=торт",
        "=колбасу"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😋",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=пицца",
        "=музыка",
        "=книга",
        "=песня",
        "=газета",
        "=колбаса"
       ],
       "resp": [
        {
         "ru": "Хм… пи́ццу, му́зыку, кни́гу. 🙂",
         "tr": "Jm… pítstsu, múzyku, knígu.",
         "es": "Mmm… Lo que recibe la acción va en acusativo: пиццу, музыку, книгу."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-regalo",
   "desde": 4,
   "titulo": "Пода́рок",
   "tituloEs": "Un regalo",
   "resumen": "Comprar regalos: el acusativo de las cosas",
   "intro": "Mañana es el cumpleaños de Dima y Masha busca un regalo. Ayúdala a elegir.",
   "inicio": "elegir",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "elegir",
     "titulo": "¿Qué compra?",
     "bot": [
      {
       "ru": "Я ищу́ пода́рок. 🎁 За́втра Ди́ма… 🎂",
       "tr": "Ya ischú padárak. Záftra Díma…",
       "es": "Busco un regalo. Mañana Dima… ¡cumple años!"
      },
      {
       "ru": "Я покупа́ю мяч? Гита́ру? Велосипе́д? 🤔",
       "tr": "Ya pakupáyu miach? Guitáru? Vilasipiét?",
       "es": "¿Compro una pelota? ¿Una guitarra? ¿Una bici?"
      }
     ],
     "ideas": [
      {
       "ru": "Гита́ру!",
       "es": "¡Una guitarra!"
      },
      {
       "ru": "Мяч!",
       "es": "¡Una pelota!"
      },
      {
       "ru": "Велосипе́д!",
       "es": "¡Una bici!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Гита́ру",
       "claves": [
        "=гитару"
       ],
       "resp": [
        {
         "ru": "Гита́ру! Ди́ма лю́бит му́зыку! 🎸",
         "tr": "Guitáru! Díma liúbit múzyku!",
         "es": "¡Una guitarra! A Dima le encanta la música."
        }
       ],
       "ir": "abuela",
       "dato": "Regalo para Dima",
       "datoValor": "гита́ра"
      },
      {
       "etiqueta": "Гита́ра (error)",
       "claves": [
        "=гитара"
       ],
       "resp": [
        {
         "ru": "Гита́ру! Я покупа́ю гита́ру. 🎸",
         "tr": "Guitáru! Ya pakupáyu guitáru.",
         "es": "Гитару: compro una guitarra (-а → -у)."
        }
       ],
       "ir": "abuela",
       "dato": "Regalo para Dima",
       "datoValor": "гита́ра"
      },
      {
       "etiqueta": "Мяч",
       "claves": [
        "=мяч"
       ],
       "resp": [
        {
         "ru": "Мяч! Отли́чно! ⚽",
         "tr": "Miach! Atlíchna!",
         "es": "¡Una pelota! ¡Genial!"
        }
       ],
       "ir": "abuela",
       "dato": "Regalo para Dima",
       "datoValor": "мяч"
      },
      {
       "etiqueta": "Велосипе́д",
       "claves": [
        "велосипед"
       ],
       "resp": [
        {
         "ru": "Велосипе́д? Он дорого́й! 😅 А… хорошо́! 🚲",
         "tr": "Vilasipiét? On daragói! A… jarashó!",
         "es": "¿Una bici? ¡Es cara! Pero… ¡vale!"
        }
       ],
       "ir": "abuela",
       "dato": "Regalo para Dima",
       "datoValor": "велосипе́д"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… Я покупа́ю гита́ру! 🎸",
         "tr": "Jm… Ya pakupáyu guitáru!",
         "es": "Mmm… ¡Compro una guitarra!"
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "А ба́бушка? 👵 Она́ лю́бит кни́ги и чай. 📚🍵 Я покупа́ю…? 🤔",
       "tr": "A bábushka? Aná liúbit knígui i chai. Ya pakupáyu…?",
       "es": "¿Y la abuela? Le gustan los libros y el té. ¿Qué compro?"
      }
     ],
     "ideas": [
      {
       "ru": "Кни́гу!",
       "es": "¡Un libro!"
      },
      {
       "ru": "Ча́шку!",
       "es": "¡Una taza!"
      },
      {
       "ru": "Чай!",
       "es": "¡Té!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=книгу",
        "=чашку",
        "=чай",
        "=картину",
        "=лампу"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Ба́бушка лю́бит пода́рки! 😊",
         "tr": "Atlíchna! Bábushka liúbit padárki!",
         "es": "¡Genial! A la abuela le encantan los regalos."
        }
       ],
       "ir": "tia"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=книга",
        "=чашка",
        "=картина",
        "=лампа"
       ],
       "resp": [
        {
         "ru": "Хм… кни́гу, ча́шку. 🙂",
         "tr": "Jm… knígu, cháshku.",
         "es": "Mmm… Compro un libro: книгу; una taza: чашку."
        }
       ],
       "ir": "tia"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! Я покупа́ю кни́гу. 📖",
         "tr": "Jarashó! Ya pakupáyu knígu.",
         "es": "¡Vale! Compro un libro."
        }
       ],
       "ir": "tia",
       "comodin": true
      }
     ]
    },
    {
     "id": "tia",
     "titulo": "La tía",
     "bot": [
      {
       "ru": "Тётя покупа́ет торт. 🎂 Что покупа́ет тётя?",
       "tr": "Tiótia pakupáyit tort. Shto pakupáyit tiótia?",
       "es": "La tía compra una torta. ¿Qué compra la tía?"
      }
     ],
     "ideas": [
      {
       "ru": "Торт.",
       "es": "Una torta."
      },
      {
       "ru": "Тётя покупа́ет торт.",
       "es": "La tía compra una torta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Торт",
       "claves": [
        "торт"
       ],
       "resp": [
        {
         "ru": "Да! Торт. 🎂 👍",
         "tr": "Da! Tort.",
         "es": "¡Sí! Торт: el masculino de cosa no cambia."
        }
       ],
       "ir": "quien"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Торт! 🎂",
         "tr": "Tort!",
         "es": "¡Una torta!"
        }
       ],
       "ir": "quien",
       "comodin": true
      }
     ]
    },
    {
     "id": "quien",
     "titulo": "¿Quién compra?",
     "bot": [
      {
       "ru": "А ма́ма покупа́ет сок и пи́ццу. 🧃🍕 Кто покупа́ет пи́ццу?",
       "tr": "A máma pakupáyit sok i pítstsu. Kto pakupáyit pítstsu?",
       "es": "Y mamá compra zumo y pizza. ¿Quién compra pizza?"
      }
     ],
     "ideas": [
      {
       "ru": "Ма́ма.",
       "es": "Mamá."
      },
      {
       "ru": "Ма́ма покупа́ет пи́ццу.",
       "es": "Mamá compra pizza."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ма́ма",
       "claves": [
        "=мама"
       ],
       "resp": [
        {
         "ru": "Да! Ма́ма. 👍",
         "tr": "Da! Máma.",
         "es": "¡Sí! Mamá."
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Ма́му (error)",
       "claves": [
        "=маму"
       ],
       "resp": [
        {
         "ru": "Хм… Ма́ма покупа́ет: она́ де́лает! Ма́ма. 🙂",
         "tr": "Jm… Máma pakupáyit: aná diélayit! Máma.",
         "es": "Mmm… Mamá hace la acción: nominativo, мама."
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ма́ма! 🙂",
         "tr": "Máma!",
         "es": "¡Mamá!"
        }
       ],
       "ir": "nosotros",
       "comodin": true
      }
     ]
    },
    {
     "id": "nosotros",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "Мы ждём Ди́му! 🎉 А ты? Пода́рок? 🎁",
       "tr": "My zhdiom Dímu! A ty? Padárak?",
       "es": "¡Esperamos a Dima! ¿Y tú? ¿Qué le regalas?"
      }
     ],
     "ideas": [
      {
       "ru": "Я покупа́ю кни́гу.",
       "es": "Compro un libro."
      },
      {
       "ru": "Я покупа́ю торт.",
       "es": "Compro una torta."
      },
      {
       "ru": "Я пишу́ письмо́.",
       "es": "Escribo una carta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=книгу",
        "=торт",
        "=письмо",
        "=мяч",
        "=гитару",
        "=чашку",
        "=сок",
        "=пиццу",
        "=картину",
        "=сумку",
        "=рюкзак",
        "=куртку"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Ди́ма лю́бит пода́рки! 🎁",
         "tr": "Atlíchna! Díma liúbit padárki!",
         "es": "¡Genial! A Dima le encantan los regalos."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=книга",
        "=гитара",
        "=чашка",
        "=пицца",
        "=картина",
        "=сумка",
        "=куртка"
       ],
       "resp": [
        {
         "ru": "Хм… кни́гу, гита́ру, ча́шку. 🙂",
         "tr": "Jm… knígu, guitáru, cháshku.",
         "es": "Mmm… Lo que compras recibe la acción: -а → -у."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🎁",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Спаси́бо, {nombre}! Пока́! 🎉",
       "tr": "Spasíba, {nombre}! Paká!",
       "es": "¡Gracias, {nombre}! ¡Chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-comida",
   "desde": 4,
   "titulo": "Что мы еди́м?",
   "tituloEs": "¿Qué comemos?",
   "resumen": "Comer y beber: ем, ест, пьёт, пьём",
   "intro": "Es la hora del desayuno en casa de Masha. ¿Quién come qué? ¿Quién bebe qué?",
   "inicio": "yo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "yo",
     "titulo": "El desayuno",
     "bot": [
      {
       "ru": "У́тро! ☀️ Я ем бутербро́д 🥪 и пью ко́фе ☕. А ты? 🙂",
       "tr": "Útra! Ya yem buterbrót i pyu kófi . A ty?",
       "es": "¡Es la mañana! Como un sándwich y tomo café. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я пью чай.",
       "es": "Tomo té."
      },
      {
       "ru": "Я ем хлеб и сыр.",
       "es": "Como pan y queso."
      },
      {
       "ru": "Я пью ко́фе.",
       "es": "Tomo café."
      },
      {
       "ru": "Я ем пи́ццу!",
       "es": "¡Como pizza!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Bebe",
       "claves": [
        "пью"
       ],
       "resp": [
        {
         "ru": "Отли́чно! ☕",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "dima",
       "dato": "Desayuno"
      },
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=пиццу",
        "=колбасу",
        "=воду",
        "=хлеб",
        "=сыр",
        "=бутерброд",
        "=салат",
        "=торт",
        "=суп",
        "=яблоко"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😋",
         "tr": "Atlíchna!",
         "es": "¡Qué rico!"
        }
       ],
       "ir": "dima",
       "dato": "Desayuno"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=пицца",
        "=колбаса",
        "=вода"
       ],
       "resp": [
        {
         "ru": "Хм… я ем пи́ццу, пью во́ду. 🙂",
         "tr": "Jm… ya yem pítstsu, pyu vódu.",
         "es": "Mmm… Lo que comes recibe la acción: пиццу, воду."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "Ди́ма пьёт сок. 🧃 Что пьёт Ди́ма?",
       "tr": "Díma pyot sok. Shto pyot Díma?",
       "es": "Dima toma zumo. ¿Qué toma Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "Сок.",
       "es": "Zumo."
      },
      {
       "ru": "Ди́ма пьёт сок.",
       "es": "Dima toma zumo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Сок",
       "claves": [
        "=сок"
       ],
       "resp": [
        {
         "ru": "Да! Сок. 🧃 👍",
         "tr": "Da! Sok.",
         "es": "¡Sí! Zumo."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Сок! 🧃",
         "tr": "Sok!",
         "es": "¡Zumo!"
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "Ба́бушка пьёт чай и ест торт! 🎂 Что ест ба́бушка? 😄",
       "tr": "Bábushka pyot chai i yest tort! Shto yest bábushka?",
       "es": "La abuela toma té y come torta. ¿Qué come la abuela?"
      }
     ],
     "ideas": [
      {
       "ru": "Торт!",
       "es": "¡Torta!"
      },
      {
       "ru": "Ба́бушка ест торт.",
       "es": "La abuela come torta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Торт",
       "claves": [
        "торт"
       ],
       "resp": [
        {
         "ru": "Да! Торт у́тром! 😂",
         "tr": "Da! Tort útram!",
         "es": "¡Sí! ¡Torta a la mañana!"
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Торт! 🎂 😂",
         "tr": "Tort!",
         "es": "¡Torta!"
        }
       ],
       "ir": "papa",
       "comodin": true
      }
     ]
    },
    {
     "id": "papa",
     "titulo": "Papá",
     "bot": [
      {
       "ru": "А па́па пьёт во́ду. 💧 Па́па не лю́бит ко́фе. Что пьёт па́па?",
       "tr": "A pápa pyot vódu. Pápa nie liúbit kófi. Shto pyot pápa?",
       "es": "Papá toma agua. No le gusta el café. ¿Qué toma papá?"
      }
     ],
     "ideas": [
      {
       "ru": "Во́ду.",
       "es": "Agua."
      },
      {
       "ru": "Па́па пьёт во́ду.",
       "es": "Papá toma agua."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=воду"
       ],
       "resp": [
        {
         "ru": "Да! Во́ду. 💧 👍",
         "tr": "Da! Vódu.",
         "es": "¡Sí! Воду."
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "вод"
       ],
       "resp": [
        {
         "ru": "Во́ду! Вода́ → пьёт во́ду. 🙂",
         "tr": "Vódu! Vadá → pyot vódu.",
         "es": "Воду: -а → -у (y el acento se mueve)."
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Во́ду! Вода́ → пьёт во́ду. 🙂",
         "tr": "Vódu! Vadá → pyot vódu.",
         "es": "Воду: -а → -у (y el acento se mueve)."
        }
       ],
       "ir": "barsik",
       "comodin": true
      }
     ]
    },
    {
     "id": "barsik",
     "titulo": "Barsik",
     "bot": [
      {
       "ru": "А кто пьёт молоко́? 🥛 Ма́ма? Ба́рсик? 😄",
       "tr": "A kto pyot malakó? Máma? Bársik?",
       "es": "¿Y quién toma leche? ¿Mamá? ¿Barsik?"
      }
     ],
     "ideas": [
      {
       "ru": "Ба́рсик!",
       "es": "¡Barsik!"
      },
      {
       "ru": "Ба́рсик пьёт молоко́.",
       "es": "Barsik toma leche."
      },
      {
       "ru": "Ма́ма.",
       "es": "Mamá."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Barsik",
       "claves": [
        "барсик"
       ],
       "resp": [
        {
         "ru": "Да! Ба́рсик пьёт молоко́! 🐈‍⬛🥛",
         "tr": "Da! Bársik pyot malakó! ⬛",
         "es": "¡Sí! Barsik toma leche."
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Mamá",
       "claves": [
        "мам"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Ба́рсик пьёт молоко́! 🐈‍⬛🥛",
         "tr": "Niet! Bársik pyot malakó! ⬛",
         "es": "¡No! Barsik toma leche."
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ба́рсик! 🐈‍⬛🥛",
         "tr": "Bársik! ⬛",
         "es": "¡Barsik!"
        }
       ],
       "ir": "nosotros",
       "comodin": true
      }
     ]
    },
    {
     "id": "nosotros",
     "titulo": "Nosotros",
     "bot": [
      {
       "ru": "Мы еди́м сала́т и пьём сок. 🥗 А они́? 👨‍👩 Они́ еди́м? Едя́т? 🤔",
       "tr": "My yidím salát i pyom sok. A aní? Aní yidím? Yidiát?",
       "es": "Nosotros comemos ensalada y tomamos zumo. ¿Y ellos? ¿Еди́м? ¿Едя́т?"
      }
     ],
     "ideas": [
      {
       "ru": "Они́ едя́т.",
       "es": "Ellos comen."
      },
      {
       "ru": "Они́ еди́м.",
       "es": "(?)"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Едят",
       "claves": [
        "едят"
       ],
       "resp": [
        {
         "ru": "Да! Мы еди́м, они́ едя́т. 👍",
         "tr": "Da! My yidím, aní yidiát.",
         "es": "¡Sí! мы едим, они едят."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Едим (error)",
       "claves": [
        "едим"
       ],
       "resp": [
        {
         "ru": "Хм… Мы еди́м, а они́ — едя́т. 🙂",
         "tr": "Jm… My yidím, a aní — yidiát.",
         "es": "Mmm… мы едим, pero они едят."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Они́ едя́т. 🙂",
         "tr": "Aní yidiát.",
         "es": "Они едят."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! 😋",
       "tr": "Fsio, {nombre}! Paká!",
       "es": "¡Listo, {nombre}! ¡Chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-barsik",
   "desde": 4,
   "titulo": "Где Ба́рсик?",
   "tituloEs": "¿Dónde está Barsik?",
   "resumen": "Buscar, ver, esperar: el acusativo de las personas y los animales",
   "intro": "Barsik desapareció y Masha lo busca por todo el edificio. Atención: con personas y animales, el masculino suma -а (Ба́рсик → Ба́рсика).",
   "inicio": "busca",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "busca",
     "titulo": "Masha busca",
     "bot": [
      {
       "ru": "Я ищу́ Ба́рсика! 😿 Где он?",
       "tr": "Ya ischú Bársika! Gdie on?",
       "es": "¡Busco a Barsik! ¿Dónde está?"
      },
      {
       "ru": "Ба́рсик → я ищу́ Ба́рсика. А сосе́д? 👨 Я ви́жу…?",
       "tr": "Bársik → ya ischú Bársika. A sasiét? Ya vízhu…?",
       "es": "Барсик → ищу Барсика. ¿Y el vecino? Veo a…"
      }
     ],
     "ideas": [
      {
       "ru": "Сосе́да.",
       "es": "Al vecino."
      },
      {
       "ru": "Я ви́жу сосе́да.",
       "es": "Veo al vecino."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Сосе́да",
       "claves": [
        "=соседа"
       ],
       "resp": [
        {
         "ru": "Да! Сосе́да. 👍",
         "tr": "Da! Sasiéda.",
         "es": "¡Sí! Соседа: es una persona, +а."
        }
       ],
       "ir": "vecina"
      },
      {
       "etiqueta": "Сосе́д (error)",
       "claves": [
        "=сосед"
       ],
       "resp": [
        {
         "ru": "Хм… Я ви́жу сосе́да. 🙂",
         "tr": "Jm… Ya vízhu sasiéda.",
         "es": "Mmm… El vecino es una persona: соседа (+а)."
        }
       ],
       "ir": "vecina"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я ви́жу сосе́да. 🙂",
         "tr": "Ya vízhu sasiéda.",
         "es": "Veo al vecino."
        }
       ],
       "ir": "vecina",
       "comodin": true
      }
     ]
    },
    {
     "id": "vecina",
     "titulo": "La vecina",
     "bot": [
      {
       "ru": "А тут сосе́дка. 👩 Она́ то́же и́щет Ба́рсика! Сосе́дка и́щет…? 🤔",
       "tr": "A tut sasiétka. Aná tózhi íschit Bársika! Sasiétka íschit…?",
       "es": "Aquí está la vecina. ¡También busca a Barsik! La vecina busca a…"
      }
     ],
     "ideas": [
      {
       "ru": "Ба́рсика!",
       "es": "¡A Barsik!"
      },
      {
       "ru": "Сосе́дка и́щет Ба́рсика.",
       "es": "La vecina busca a Barsik."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ба́рсика",
       "claves": [
        "=барсика"
       ],
       "resp": [
        {
         "ru": "Да! Ба́рсика. 🐈‍⬛ 👍",
         "tr": "Da! Bársika. ⬛",
         "es": "¡Sí! A Barsik."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Ба́рсик (error)",
       "claves": [
        "=барсик"
       ],
       "resp": [
        {
         "ru": "Хм… Сосе́дка и́щет Ба́рсика. 🙂",
         "tr": "Jm… Sasiétka íschit Bársika.",
         "es": "Mmm… Barsik es un animal: Барсика (+а)."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ба́рсика! 🐈‍⬛",
         "tr": "Bársika! ⬛",
         "es": "¡A Barsik!"
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "Ба́бушка ви́дит ко́шку! 🐈 А э́то не Ба́рсик. 😅 Ко́шка → ба́бушка ви́дит…?",
       "tr": "Bábushka vídit kóshku! A éta nie Bársik. Kóshka → bábushka vídit…?",
       "es": "La abuela ve una gata. Pero no es Barsik. Кошка → la abuela ve…"
      }
     ],
     "ideas": [
      {
       "ru": "Ко́шку.",
       "es": "Una gata."
      },
      {
       "ru": "Ба́бушка ви́дит ко́шку.",
       "es": "La abuela ve una gata."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ко́шку",
       "claves": [
        "=кошку"
       ],
       "resp": [
        {
         "ru": "Да! Ко́шку. 👍",
         "tr": "Da! Kóshku.",
         "es": "¡Sí! Кошку."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "кошк"
       ],
       "resp": [
        {
         "ru": "Ко́шку! 🙂",
         "tr": "Kóshku!",
         "es": "Кошку: -а → -у."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ко́шку! 🐈",
         "tr": "Kóshku!",
         "es": "¡Una gata!"
        }
       ],
       "ir": "papa",
       "comodin": true
      }
     ]
    },
    {
     "id": "papa",
     "titulo": "Papá",
     "bot": [
      {
       "ru": "А я ви́жу па́пу! 👨 Па́па — он, а па́пу! А дя́дя? 👨‍🍳 Я ви́жу…?",
       "tr": "A ya vízhu pápu! Pápa — on, a pápu! A diádia? Ya vízhu…?",
       "es": "¡Y veo a papá! Папа es él, pero папу. ¿Y el tío? Veo a…"
      }
     ],
     "ideas": [
      {
       "ru": "Дя́дю.",
       "es": "Al tío."
      },
      {
       "ru": "Я ви́жу дя́дю.",
       "es": "Veo al tío."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дя́дю",
       "claves": [
        "=дядю"
       ],
       "resp": [
        {
         "ru": "Да! Дя́дю. 👍",
         "tr": "Da! Diádiu.",
         "es": "¡Sí! Дядю: -я → -ю."
        }
       ],
       "ir": "encuentra"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "дяд"
       ],
       "resp": [
        {
         "ru": "Дя́дю! Как па́пу. 🙂",
         "tr": "Diádiu! Kak pápu.",
         "es": "Дядю: como папу, -я → -ю."
        }
       ],
       "ir": "encuentra"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Дя́дю! 🙂",
         "tr": "Diádiu!",
         "es": "¡Al tío!"
        }
       ],
       "ir": "encuentra",
       "comodin": true
      }
     ]
    },
    {
     "id": "encuentra",
     "titulo": "¡Lo encontró!",
     "bot": [
      {
       "ru": "Я нахожу́ Ба́рсика! 😻 Он тут: он ест колбасу́ сосе́да! 😂",
       "tr": "Ya najazhú Bársika! On tut: on yest kalbasú sasiéda!",
       "es": "¡Encuentro a Barsik! Está aquí: ¡se come el embutido del vecino!"
      },
      {
       "ru": "Кто ест колбасу́?",
       "tr": "Kto yest kalbasú?",
       "es": "¿Quién come embutido?"
      }
     ],
     "ideas": [
      {
       "ru": "Ба́рсик!",
       "es": "¡Barsik!"
      },
      {
       "ru": "Ба́рсик ест колбасу́.",
       "es": "Barsik come embutido."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ба́рсик",
       "claves": [
        "=барсик"
       ],
       "resp": [
        {
         "ru": "Да! Ба́рсик! 😂",
         "tr": "Da! Bársik!",
         "es": "¡Sí! ¡Barsik!"
        }
       ],
       "ir": "espera"
      },
      {
       "etiqueta": "Ба́рсика (error)",
       "claves": [
        "=барсика"
       ],
       "resp": [
        {
         "ru": "Хм… Ба́рсик ест: он де́лает! Ба́рсик. 🙂",
         "tr": "Jm… Bársik yest: on diélayit! Bársik.",
         "es": "Mmm… Barsik hace la acción: nominativo, Барсик."
        }
       ],
       "ir": "espera"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ба́рсик! 😂",
         "tr": "Bársik!",
         "es": "¡Barsik!"
        }
       ],
       "ir": "espera",
       "comodin": true
      }
     ]
    },
    {
     "id": "espera",
     "titulo": "Esperan",
     "bot": [
      {
       "ru": "Тепе́рь мы ждём ма́му. 👩 А ба́бушка ждёт…? Де́душку! 👴 Де́душка → ждёт…?",
       "tr": "Tipiér my zhdiom mámu. A bábushka zhdiot…? Diédushku! Diédushka → zhdiot…?",
       "es": "Ahora esperamos a mamá. ¿Y la abuela espera a…? ¡Al abuelo! Дедушка → espera a…"
      }
     ],
     "ideas": [
      {
       "ru": "Де́душку.",
       "es": "Al abuelo."
      },
      {
       "ru": "Ба́бушка ждёт де́душку.",
       "es": "La abuela espera al abuelo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Де́душку",
       "claves": [
        "=дедушку"
       ],
       "resp": [
        {
         "ru": "Да! Де́душку. 👍 Отли́чно!",
         "tr": "Da! Diédushku. Atlíchna!",
         "es": "¡Sí! Дедушку. ¡Excelente!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "дедушк"
       ],
       "resp": [
        {
         "ru": "Де́душку! Как па́пу. 🙂",
         "tr": "Diédushku! Kak pápu.",
         "es": "Дедушку: como папу, -а → -у."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Де́душку! 🙂",
         "tr": "Diédushku!",
         "es": "¡Al abuelo!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-cine",
   "desde": 4,
   "titulo": "Кино́ и му́зыка",
   "tituloEs": "Cine y música",
   "resumen": "Lo que te encanta: люблю́ + acusativo",
   "intro": "Masha habla de lo que le encanta: películas, canciones, cuadros. Y quiere saber qué te encanta a ti.",
   "inicio": "cine",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cine",
     "titulo": "Le encanta el cine",
     "bot": [
      {
       "ru": "Я люблю́ кино́! 🎬 А ты? 🙂",
       "tr": "Ya liubliú kinó! A ty?",
       "es": "¡Me encanta el cine! ¿Y a ti?"
      }
     ],
     "ideas": [
      {
       "ru": "Я люблю́ кино́.",
       "es": "Me encanta el cine."
      },
      {
       "ru": "Я люблю́ му́зыку.",
       "es": "Me encanta la música."
      },
      {
       "ru": "Я люблю́ кни́ги.",
       "es": "Me encantan los libros."
      },
      {
       "ru": "Я люблю́ пи́ццу!",
       "es": "¡Me encanta la pizza!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=кино",
        "=музыку",
        "=книги",
        "=пиццу",
        "=футбол",
        "=театр",
        "=гитару",
        "=песни",
        "=фильмы",
        "=кофе",
        "=чай",
        "=торт",
        "=море",
        "=собак",
        "=кошек"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "pelicula",
       "dato": "Le encanta"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=музыка",
        "=пицца",
        "=гитара",
        "=книга"
       ],
       "resp": [
        {
         "ru": "Хм… Я люблю́ му́зыку, пи́ццу. 🙂",
         "tr": "Jm… Ya liubliú múzyku, pítstsu.",
         "es": "Mmm… Lo que te encanta va en acusativo: музыку, пиццу."
        }
       ],
       "ir": "pelicula"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "pelicula",
       "comodin": true
      }
     ]
    },
    {
     "id": "pelicula",
     "titulo": "La película",
     "bot": [
      {
       "ru": "Сего́дня я смотрю́ ста́рый фильм. 📺 Мы смо́трим фильм: я, Ди́ма и ма́ма. Кто смо́трит фильм?",
       "tr": "Sivódnia ya smatriú stáryi film. My smótrim film: ya, Díma i máma. Kto smótrit film?",
       "es": "Hoy veo una película vieja. La vemos yo, Dima y mamá. ¿Quién ve la película?"
      }
     ],
     "ideas": [
      {
       "ru": "Ма́ша, Ди́ма и ма́ма.",
       "es": "Masha, Dima y mamá."
      },
      {
       "ru": "Они́ смо́трят фильм.",
       "es": "Ellos ven la película."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contesta",
       "claves": [
        "дим",
        "мам",
        "маш",
        "=они",
        "смотрят"
       ],
       "resp": [
        {
         "ru": "Да! Мы смо́трим фильм. 🍿",
         "tr": "Da! My smótrim film.",
         "es": "¡Sí! Vemos la película."
        }
       ],
       "ir": "actriz"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я, Ди́ма и ма́ма! 🍿",
         "tr": "Ya, Díma i máma!",
         "es": "¡Yo, Dima y mamá!"
        }
       ],
       "ir": "actriz",
       "comodin": true
      }
     ]
    },
    {
     "id": "actriz",
     "titulo": "La actriz",
     "bot": [
      {
       "ru": "Ди́ма лю́бит актри́су! 😍 Актри́са → Ди́ма лю́бит…?",
       "tr": "Díma liúbit aktrísu! Aktrísa → Díma liúbit…?",
       "es": "¡A Dima le encanta la actriz! Актриса → a Dima le encanta…"
      }
     ],
     "ideas": [
      {
       "ru": "Актри́су.",
       "es": "La actriz."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=актрису"
       ],
       "resp": [
        {
         "ru": "Да! Актри́су. 😄",
         "tr": "Da! Aktrísu.",
         "es": "¡Sí! Актрису."
        }
       ],
       "ir": "cancion"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "актрис"
       ],
       "resp": [
        {
         "ru": "Актри́су! 🙂",
         "tr": "Aktrísu!",
         "es": "Актрису: -а → -у."
        }
       ],
       "ir": "cancion"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Актри́су! 🙂",
         "tr": "Aktrísu!",
         "es": "Актрису: -а → -у."
        }
       ],
       "ir": "cancion",
       "comodin": true
      }
     ]
    },
    {
     "id": "cancion",
     "titulo": "La canción",
     "bot": [
      {
       "ru": "А я слу́шаю пе́сню. 🎵 Пе́сня → я слу́шаю…?",
       "tr": "A ya slúshayu piésniu. Piésnia → ya slúshayu…?",
       "es": "Yo escucho una canción. Песня → escucho…"
      }
     ],
     "ideas": [
      {
       "ru": "Пе́сню.",
       "es": "Una canción."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=песню"
       ],
       "resp": [
        {
         "ru": "Да! Пе́сню. 🎵 👍",
         "tr": "Da! Piésniu.",
         "es": "¡Sí! Песню: -я → -ю."
        }
       ],
       "ir": "cuadro"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "песн"
       ],
       "resp": [
        {
         "ru": "Пе́сню! 🙂",
         "tr": "Piésniu!",
         "es": "Песню: -я → -ю."
        }
       ],
       "ir": "cuadro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пе́сню! 🙂",
         "tr": "Piésniu!",
         "es": "Песню: -я → -ю."
        }
       ],
       "ir": "cuadro",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuadro",
     "titulo": "El cuadro",
     "bot": [
      {
       "ru": "Ма́ма смо́трит карти́ну. 🖼️ Что смо́трит ма́ма?",
       "tr": "Máma smótrit kartínu. Shto smótrit máma?",
       "es": "Mamá mira un cuadro. ¿Qué mira mamá?"
      }
     ],
     "ideas": [
      {
       "ru": "Карти́ну.",
       "es": "Un cuadro."
      },
      {
       "ru": "Ма́ма смо́трит карти́ну.",
       "es": "Mamá mira un cuadro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=картину"
       ],
       "resp": [
        {
         "ru": "Да! Карти́ну. 🖼️ 👍",
         "tr": "Da! Kartínu.",
         "es": "¡Sí! Картину."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "картин"
       ],
       "resp": [
        {
         "ru": "Карти́ну! 🙂",
         "tr": "Kartínu!",
         "es": "Картину: -а → -у."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Карти́ну! 🙂",
         "tr": "Kartínu!",
         "es": "Картину: -а → -у."
        }
       ],
       "ir": "papa",
       "comodin": true
      }
     ]
    },
    {
     "id": "papa",
     "titulo": "Papá",
     "bot": [
      {
       "ru": "А па́па не лю́бит кино́. 😅 Он лю́бит теа́тр! 🎭 А ты? Теа́тр? Кни́ги? 🤔",
       "tr": "A pápa nie liúbit kinó. On liúbit tiátr! A ty? Tiátr? Knígui?",
       "es": "Papá no es de cine: le encanta el teatro. ¿Y a ti? ¿El teatro? ¿Los libros?"
      }
     ],
     "ideas": [
      {
       "ru": "Я люблю́ теа́тр.",
       "es": "Me encanta el teatro."
      },
      {
       "ru": "Я люблю́ кни́ги.",
       "es": "Me encantan los libros."
      },
      {
       "ru": "Я не люблю́ теа́тр.",
       "es": "No me gusta el teatro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No le gusta",
       "claves": [
        "=не люблю"
       ],
       "resp": [
        {
         "ru": "Я то́же! 😄",
         "tr": "Ya tózhi!",
         "es": "¡Yo tampoco!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Le gusta",
       "claves": [
        "люблю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u4-casa",
   "desde": 4,
   "titulo": "До́ма",
   "tituloEs": "En casa",
   "resumen": "Abrir, cerrar, buscar: el acusativo en casa",
   "intro": "Un día normal en casa de Masha: alguien abre la ventana, otro cierra la puerta, todos buscan algo.",
   "inicio": "ventana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ventana",
     "titulo": "La ventana",
     "bot": [
      {
       "ru": "Я открыва́ю окно́. 🪟 А Ди́ма закрыва́ет дверь. 🚪 Что закрыва́ет Ди́ма?",
       "tr": "Ya atkryváyu aknó. A Díma zakryváyit dvier. Shto zakryváyit Díma?",
       "es": "Abro la ventana (окно no cambia). Y Dima cierra la puerta. ¿Qué cierra Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "Дверь.",
       "es": "La puerta."
      },
      {
       "ru": "Ди́ма закрыва́ет дверь.",
       "es": "Dima cierra la puerta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дверь",
       "claves": [
        "=дверь"
       ],
       "resp": [
        {
         "ru": "Да! Дверь. 👍",
         "tr": "Da! Dvier.",
         "es": "¡Sí! Дверь: las femeninas en -ь no cambian."
        }
       ],
       "ir": "regalo"
      },
      {
       "etiqueta": "Дверу (error)",
       "claves": [
        "двер"
       ],
       "resp": [
        {
         "ru": "Дверь! 🙂",
         "tr": "Dvier!",
         "es": "Дверь: las femeninas en -ь no cambian."
        }
       ],
       "ir": "regalo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Дверь! 🚪",
         "tr": "Dvier!",
         "es": "¡La puerta!"
        }
       ],
       "ir": "regalo",
       "comodin": true
      }
     ]
    },
    {
     "id": "regalo",
     "titulo": "Mamá abre",
     "bot": [
      {
       "ru": "Ма́ма открыва́ет пода́рок! 🎁 Что открыва́ет ма́ма?",
       "tr": "Máma atkryváyit padárak! Shto atkryváyit máma?",
       "es": "¡Mamá abre un regalo! ¿Qué abre mamá?"
      }
     ],
     "ideas": [
      {
       "ru": "Пода́рок.",
       "es": "Un regalo."
      },
      {
       "ru": "Ма́ма открыва́ет пода́рок.",
       "es": "Mamá abre un regalo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Пода́рок",
       "claves": [
        "подар"
       ],
       "resp": [
        {
         "ru": "Да! Пода́рок. 🎁 👍",
         "tr": "Da! Padárak.",
         "es": "¡Sí! Un regalo."
        }
       ],
       "ir": "busca"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пода́рок! 🎁",
         "tr": "Padárak!",
         "es": "¡Un regalo!"
        }
       ],
       "ir": "busca",
       "comodin": true
      }
     ]
    },
    {
     "id": "busca",
     "titulo": "Papá busca",
     "bot": [
      {
       "ru": "Па́па и́щет ру́чку. 🖊️ Ру́чка → па́па и́щет…?",
       "tr": "Pápa íschit rúchku. Rúchka → pápa íschit…?",
       "es": "Papá busca un bolígrafo. Ручка → papá busca…"
      }
     ],
     "ideas": [
      {
       "ru": "Ру́чку.",
       "es": "Un bolígrafo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=ручку"
       ],
       "resp": [
        {
         "ru": "Да! Ру́чку. 👍",
         "tr": "Da! Rúchku.",
         "es": "¡Sí! Ручку."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "ручк"
       ],
       "resp": [
        {
         "ru": "Ру́чку! 🙂",
         "tr": "Rúchku!",
         "es": "Ручку: -а → -у."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ру́чку! 🙂",
         "tr": "Rúchku!",
         "es": "Ручку: -а → -у."
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "А ба́бушка и́щет ло́жку и таре́лку. 🥄🍽️ Ло́жка → ба́бушка и́щет…?",
       "tr": "A bábushka íschit lóshku i tariélku. Lóshka → bábushka íschit…?",
       "es": "La abuela busca una cuchara y un plato. Ложка → la abuela busca…"
      }
     ],
     "ideas": [
      {
       "ru": "Ло́жку.",
       "es": "Una cuchara."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Forma correcta",
       "claves": [
        "=ложку"
       ],
       "resp": [
        {
         "ru": "Да! Ло́жку и таре́лку. 👍",
         "tr": "Da! Lóshku i tariélku.",
         "es": "¡Sí! Ложку y тарелку."
        }
       ],
       "ir": "nina"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "ложк"
       ],
       "resp": [
        {
         "ru": "Ло́жку! 🙂",
         "tr": "Lóshku!",
         "es": "Ложку: -а → -у."
        }
       ],
       "ir": "nina"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ло́жку! 🙂",
         "tr": "Lóshku!",
         "es": "Ложку: -а → -у."
        }
       ],
       "ir": "nina",
       "comodin": true
      }
     ]
    },
    {
     "id": "nina",
     "titulo": "La niñera",
     "bot": [
      {
       "ru": "Ди́ма ждёт ня́ню. 👩 Ня́ня → Ди́ма ждёт…?",
       "tr": "Díma zhdiot niániu. Niánia → Díma zhdiot…?",
       "es": "Dima espera a la niñera. Няня → Dima espera a…"
      }
     ],
     "ideas": [
      {
       "ru": "Ня́ню.",
       "es": "A la niñera."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ня́ню",
       "claves": [
        "=няню"
       ],
       "resp": [
        {
         "ru": "Да! Ня́ню. 👍",
         "tr": "Da! Niániu.",
         "es": "¡Sí! Няню: -я → -ю."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "нян"
       ],
       "resp": [
        {
         "ru": "Ня́ню! 🙂",
         "tr": "Niániu!",
         "es": "Няню: -я → -ю."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ня́ню! 🙂",
         "tr": "Niániu!",
         "es": "¡A la niñera!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А я ищу́ ключ! 🔑 А ты? 🔎",
       "tr": "A ya ischú kliuch! A ty?",
       "es": "Yo busco la llave. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я ищу́ су́мку.",
       "es": "Busco el bolso."
      },
      {
       "ru": "Я ищу́ телефо́н.",
       "es": "Busco el teléfono."
      },
      {
       "ru": "Я ищу́ ключ!",
       "es": "¡Busco la llave!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acusativo bien",
       "claves": [
        "=сумку",
        "=телефон",
        "=ключ",
        "=ручку",
        "=книгу",
        "=куртку",
        "=рюкзак",
        "=компьютер",
        "=ноутбук",
        "=кошелек",
        "=зонт",
        "=тетрадь"
       ],
       "resp": [
        {
         "ru": "Я то́же! 😅",
         "tr": "Ya tózhi!",
         "es": "¡Yo también!"
        }
       ],
       "ir": "fin",
       "dato": "Busca"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=сумка",
        "=ручка",
        "=книга",
        "=куртка"
       ],
       "resp": [
        {
         "ru": "Хм… су́мку, ру́чку. 🙂",
         "tr": "Jm… súmku, rúchku.",
         "es": "Mmm… Lo que buscas va en acusativo: сумку, ручку."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-dia",
   "desde": 5,
   "titulo": "Мой день",
   "tituloEs": "Mi día",
   "resumen": "La rutina: levantarse, desayunar, trabajar, descansar",
   "intro": "Masha te cuenta su día y te pregunta por el tuyo: qué haces por la mañana, por la tarde y por la noche.",
   "inicio": "manana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "manana",
     "titulo": "Por la mañana",
     "bot": [
      {
       "ru": "У́тром я встаю́, за́втракаю и пью ко́фе. ☕",
       "tr": "Útram ya fstayú, záftrakayu i pyu kófi.",
       "es": "Por la mañana me levanto, desayuno y tomo café."
      },
      {
       "ru": "А ты? Что ты де́лаешь у́тром? ☀️",
       "tr": "A ty? Shto ty diélayish útram?",
       "es": "¿Y tú? ¿Qué haces por la mañana?"
      }
     ],
     "ideas": [
      {
       "ru": "У́тром я за́втракаю.",
       "es": "Por la mañana desayuno."
      },
      {
       "ru": "Я встаю́ и пью чай.",
       "es": "Me levanto y tomo té."
      },
      {
       "ru": "У́тром я сплю! 😴",
       "es": "¡Por la mañana duermo!"
      },
      {
       "ru": "Я бе́гаю.",
       "es": "Salgo a correr."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Duerme",
       "claves": [
        "сплю"
       ],
       "resp": [
        {
         "ru": "Спишь? 😂 А я учу́сь! 📚",
         "tr": "Spish? A ya uchús!",
         "es": "¿Duermes? ¡Y yo estudiando!"
        }
       ],
       "ir": "desayuno",
       "dato": "Por la mañana"
      },
      {
       "etiqueta": "Corre",
       "claves": [
        "бегаю"
       ],
       "resp": [
        {
         "ru": "Бе́гаешь у́тром? Молоде́ц! 🏃",
         "tr": "Biégayish útram? Maladiéts!",
         "es": "¿Corres por la mañana? ¡Bien hecho!"
        }
       ],
       "ir": "desayuno",
       "dato": "Por la mañana"
      },
      {
       "etiqueta": "Algo en 1.ª persona",
       "claves": [
        "завтракаю",
        "встаю",
        "пью",
        "ем",
        "читаю",
        "гуляю",
        "работаю",
        "учусь",
        "слушаю",
        "просыпаюсь",
        "готовлю",
        "делаю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! ☀️",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "desayuno",
       "dato": "Por la mañana"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "desayuno",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я встаю́, за́втракаю и пью ко́фе. ☕",
       "tr": "Ya fstayú, záftrakayu i pyu kófi.",
       "es": "Me levanto, desayuno y tomo café."
      }
     ],
     "aTiTema": "dia_m"
    },
    {
     "id": "desayuno",
     "titulo": "El desayuno",
     "bot": [
      {
       "ru": "Что ты ешь у́тром? 🥪 Я ем бутербро́д.",
       "tr": "Shto ty yesh útram? Ya yem buterbrót.",
       "es": "¿Qué comes por la mañana? Yo como un sándwich."
      }
     ],
     "ideas": [
      {
       "ru": "Я ем хлеб и сыр.",
       "es": "Como pan y queso."
      },
      {
       "ru": "Я ничего́ не ем.",
       "es": "No como nada."
      },
      {
       "ru": "Я ем йо́гурт.",
       "es": "Como yogur."
      },
      {
       "ru": "Я пью то́лько ко́фе.",
       "es": "Solo tomo café."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего",
        "=не ем",
        "только"
       ],
       "resp": [
        {
         "ru": "Ничего́? Ой! 😮 За́втрак — э́то ва́жно!",
         "tr": "Nichivó? Oi! Záftrak — éta vázhna!",
         "es": "¿Nada? ¡Uy! El desayuno es importante."
        }
       ],
       "ir": "dia",
       "dato": "Desayuno"
      },
      {
       "etiqueta": "Come algo",
       "claves": [
        "ем",
        "=ем",
        "пью"
       ],
       "resp": [
        {
         "ru": "Вку́сно! 😋",
         "tr": "Fkúsna!",
         "es": "¡Qué rico!"
        }
       ],
       "ir": "dia",
       "dato": "Desayuno"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вку́сно! 😋",
         "tr": "Fkúsna!",
         "es": "¡Qué rico!"
        }
       ],
       "ir": "dia",
       "comodin": true
      }
     ]
    },
    {
     "id": "dia",
     "titulo": "Durante el día",
     "bot": [
      {
       "ru": "Днём я учу́сь, а пото́м обе́даю. А ты днём рабо́таешь и́ли у́чишься?",
       "tr": "Dniom ya uchús, a patóm abiédayu. A ty dniom rabótayish íli úchishsia?",
       "es": "De día estudio y después almuerzo. ¿Y tú, de día trabajas o estudias?"
      }
     ],
     "ideas": [
      {
       "ru": "Я рабо́таю.",
       "es": "Trabajo."
      },
      {
       "ru": "Я учу́сь.",
       "es": "Estudio."
      },
      {
       "ru": "И рабо́таю, и учу́сь.",
       "es": "Trabajo y estudio."
      },
      {
       "ru": "Я отдыха́ю!",
       "es": "¡Descanso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Las dos cosas",
       "claves": [
        "работаю учусь"
       ],
       "resp": [
        {
         "ru": "И рабо́таешь, и у́чишься? Молоде́ц! 💪",
         "tr": "I rabótayish, i úchishsia? Maladiéts!",
         "es": "¿Trabajas y estudias? ¡Bien hecho!"
        }
       ],
       "ir": "noche",
       "dato": "De día",
       "datoValor": "рабо́тает и у́чится"
      },
      {
       "etiqueta": "Trabaja",
       "claves": [
        "работаю"
       ],
       "resp": [
        {
         "ru": "Ты мно́го рабо́таешь? 😅 Я ду́маю, да!",
         "tr": "Ty mnóga rabótayish? Ya dúmayu, da!",
         "es": "¿Trabajas mucho? ¡Creo que sí!"
        }
       ],
       "ir": "noche",
       "dato": "De día",
       "datoValor": "рабо́тает"
      },
      {
       "etiqueta": "Estudia",
       "claves": [
        "учусь",
        "изучаю",
        "учу"
       ],
       "resp": [
        {
         "ru": "Как я! 📚",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "noche",
       "dato": "De día",
       "datoValor": "у́чится"
      },
      {
       "etiqueta": "Descansa",
       "claves": [
        "отдыхаю"
       ],
       "resp": [
        {
         "ru": "Отдыха́ешь? Отли́чно! 😄",
         "tr": "Addyjáyish? Atlíchna!",
         "es": "¿Descansas? ¡Genial!"
        }
       ],
       "ir": "noche"
      },
      {
       "etiqueta": "Forma de «ты» (error)",
       "claves": [
        "=работаешь",
        "=учишься"
       ],
       "resp": [
        {
         "ru": "Я рабо́таю, я учу́сь! А «ты рабо́таешь» — э́то я спра́шиваю. 😄",
         "tr": "Ya rabótayu, ya uchús! A «ty rabótayish» — éta ya spráshivayu.",
         "es": "Para hablar de ti: я работаю, я учусь."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "noche",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я учу́сь! Я студе́нтка. 📚",
       "tr": "Ya uchús! Ya studiéntka.",
       "es": "¡Estudio! Soy estudiante."
      }
     ],
     "aTiTema": "estudio"
    },
    {
     "id": "noche",
     "titulo": "Por la noche",
     "bot": [
      {
       "ru": "А ве́чером? 🌙 Я гуля́ю, у́жинаю и смотрю́ фильм. А ты?",
       "tr": "A viéchiram? Ya guliáyu, úzhinayu i smatriú film. A ty?",
       "es": "¿Y por la noche? Yo paseo, ceno y veo una película. ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Ве́чером я у́жинаю и чита́ю.",
       "es": "Por la noche ceno y leo."
      },
      {
       "ru": "Я смотрю́ телеви́зор.",
       "es": "Veo la tele."
      },
      {
       "ru": "Я гуля́ю.",
       "es": "Paseo."
      },
      {
       "ru": "Я гото́влю у́жин.",
       "es": "Preparo la cena."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tele",
       "claves": [
        "телевизор"
       ],
       "resp": [
        {
         "ru": "Телеви́зор? А что ты смо́тришь? Фи́льмы? 📺",
         "tr": "Tilivízar? A shto ty smótrish? Fílmy?",
         "es": "¿La tele? ¿Y qué ves? ¿Películas?"
        }
       ],
       "ir": "tele",
       "dato": "Por la noche"
      },
      {
       "etiqueta": "Cocina",
       "claves": [
        "готовлю"
       ],
       "resp": [
        {
         "ru": "Ты гото́вишь? Здо́рово! Я то́же люблю́ гото́вить. 🍳",
         "tr": "Ty gatóvish? Zdórava! Ya tózhi liubliú gatóvit.",
         "es": "¿Cocinas? ¡Genial! A mí también me gusta cocinar."
        }
       ],
       "ir": "dormir",
       "dato": "Por la noche"
      },
      {
       "etiqueta": "Algo en 1.ª persona",
       "claves": [
        "ужинаю",
        "читаю",
        "гуляю",
        "смотрю",
        "отдыхаю",
        "слушаю",
        "работаю",
        "учусь",
        "сплю",
        "танцую",
        "пою",
        "рисую",
        "бегаю",
        "плаваю"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🌙",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "dormir",
       "dato": "Por la noche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "dormir",
       "comodin": true
      }
     ]
    },
    {
     "id": "tele",
     "titulo": "La tele",
     "bot": [
      {
       "ru": "Что ты смо́тришь? Фи́льмы? Футбо́л? Но́вости? 📺",
       "tr": "Shto ty smótrish? Fílmy? Fudból? Nóvasti?",
       "es": "¿Qué ves? ¿Películas? ¿Fútbol? ¿Noticias?"
      }
     ],
     "ideas": [
      {
       "ru": "Я смотрю́ фи́льмы.",
       "es": "Veo películas."
      },
      {
       "ru": "Я смотрю́ футбо́л.",
       "es": "Veo fútbol."
      },
      {
       "ru": "Я смотрю́ но́вости.",
       "es": "Veo las noticias."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Fútbol",
       "claves": [
        "футбол"
       ],
       "resp": [
        {
         "ru": "Как Ди́ма! ⚽ Он то́же всегда́ смо́трит футбо́л.",
         "tr": "Kak Díma! On tózhi fsigdá smótrit fudból.",
         "es": "¡Como Dima! Él también siempre ve fútbol."
        }
       ],
       "ir": "dormir"
      },
      {
       "etiqueta": "Otra cosa",
       "claves": [
        "фильм",
        "новост",
        "сериал",
        "кино"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 🍿",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "dormir"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🍿",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "dormir",
       "comodin": true
      }
     ]
    },
    {
     "id": "dormir",
     "titulo": "Dormir",
     "bot": [
      {
       "ru": "Я ча́сто сплю ма́ло. 😴 А ты мно́го спишь?",
       "tr": "Ya chásta spliu mála. A ty mnóga spish?",
       "es": "Muchas veces duermo poco. ¿Y tú, duermes mucho?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я мно́го сплю.",
       "es": "Sí, duermo mucho."
      },
      {
       "ru": "Нет, я сплю ма́ло.",
       "es": "No, duermo poco."
      },
      {
       "ru": "Я всегда́ хочу́ спать!",
       "es": "¡Siempre tengo sueño!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Poco",
       "claves": [
        "мало",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Как я! 😅 Ко́фе — наш друг! ☕",
         "tr": "Kak ya! Kófi — nash druk!",
         "es": "¡Como yo! El café es nuestro amigo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Siempre sueño",
       "claves": [
        "хочу спать"
       ],
       "resp": [
        {
         "ru": "Я то́же! 😂",
         "tr": "Ya tózhi!",
         "es": "¡Yo también!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Mucho",
       "claves": [
        "много",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Спать — э́то хорошо́. 😴",
         "tr": "Atlíchna! Spat — éta jarashó.",
         "es": "¡Genial! Dormir es bueno."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😴",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Ой, уже́ ве́чер! Споко́йной но́чи, {nombre}! 😴",
       "tr": "Oi, uzhé viéchir! Spakóinai nóchi, {nombre}!",
       "es": "¡Uy, ya es de noche! ¡Que descanses, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-hobbies",
   "desde": 5,
   "titulo": "Что ты лю́бишь де́лать?",
   "tituloEs": "Tiempo libre",
   "resumen": "Hobbies: люблю́ + infinitivo, y cada cuánto lo haces",
   "intro": "Masha te cuenta qué le gusta hacer y te pregunta por tus hobbies. Usa часто, иногда́, всегда́, никогда́ не…",
   "inicio": "gusta",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "gusta",
     "titulo": "Qué te gusta hacer",
     "bot": [
      {
       "ru": "Я люблю́ пла́вать и петь! 🏊‍♀️🎤 А что ты лю́бишь де́лать?",
       "tr": "Ya liubliú plávat i piet! A shto ty liúbish diélat?",
       "es": "Me encanta nadar y cantar. ¿Y a ti qué te gusta hacer?"
      }
     ],
     "ideas": [
      {
       "ru": "Я люблю́ чита́ть.",
       "es": "Me gusta leer."
      },
      {
       "ru": "Я люблю́ гото́вить.",
       "es": "Me gusta cocinar."
      },
      {
       "ru": "Я люблю́ танцева́ть.",
       "es": "Me gusta bailar."
      },
      {
       "ru": "Я люблю́ гуля́ть.",
       "es": "Me gusta pasear."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nadar",
       "claves": [
        "плавать"
       ],
       "resp": [
        {
         "ru": "Пра́вда? Я то́же! 🏊‍♀️",
         "tr": "Právda? Ya tózhi!",
         "es": "¿En serio? ¡A mí también!"
        }
       ],
       "ir": "cuanto",
       "dato": "Le gusta",
       "datoValor": "пла́вать"
      },
      {
       "etiqueta": "Cocinar",
       "claves": [
        "готовить"
       ],
       "resp": [
        {
         "ru": "Ты лю́бишь гото́вить? А я люблю́ есть! 😄",
         "tr": "Ty liúbish gatóvit? A ya liubliú yest!",
         "es": "¿Te gusta cocinar? ¡A mí me gusta comer!"
        }
       ],
       "ir": "cuanto",
       "dato": "Le gusta",
       "datoValor": "гото́вить"
      },
      {
       "etiqueta": "Bailar",
       "claves": [
        "танцевать"
       ],
       "resp": [
        {
         "ru": "Танцева́ть! 💃 А я танцу́ю пло́хо. 😅",
         "tr": "Tantsivát! A ya tantsúyu plója.",
         "es": "¡Bailar! Yo bailo mal."
        }
       ],
       "ir": "cuanto",
       "dato": "Le gusta",
       "datoValor": "танцева́ть"
      },
      {
       "etiqueta": "Leer",
       "claves": [
        "читать"
       ],
       "resp": [
        {
         "ru": "Чита́ть — э́то здо́рово! 📚 Лу́кас то́же лю́бит чита́ть.",
         "tr": "Chitát — éta zdórava! Lúkas tózhi liúbit chitát.",
         "es": "¡Leer es genial! A Lucas también le gusta."
        }
       ],
       "ir": "cuanto",
       "dato": "Le gusta",
       "datoValor": "чита́ть"
      },
      {
       "etiqueta": "Otro verbo",
       "claves": [
        "гулять",
        "рисовать",
        "петь",
        "бегать",
        "спать",
        "смотреть",
        "слушать",
        "отдыхать",
        "работать",
        "путешествовать",
        "играть"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 😊",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "cuanto",
       "dato": "Le gusta"
      },
      {
       "etiqueta": "Conjugado (error)",
       "claves": [
        "=читаю",
        "=гуляю",
        "=танцую",
        "=готовлю",
        "=рисую",
        "=плаваю"
       ],
       "resp": [
        {
         "ru": "Я люблю́ чита́ть, я люблю́ гуля́ть. 🙂",
         "tr": "Ya liubliú chitát, ya liubliú guliát.",
         "es": "Después de люблю va el infinitivo: люблю читать, гулять."
        }
       ],
       "ir": "cuanto"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "cuanto",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я люблю́ пла́вать, петь и гото́вить! 🏊‍♀️",
       "tr": "Ya liubliú plávat, piet i gatóvit!",
       "es": "Me encanta nadar, cantar y cocinar."
      }
     ],
     "aTiTema": "gustos_m"
    },
    {
     "id": "cuanto",
     "titulo": "Cada cuánto",
     "bot": [
      {
       "ru": "А ты ча́сто э́то де́лаешь?",
       "tr": "A ty chásta éta diélayish?",
       "es": "¿Y lo haces a menudo?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, ча́сто.",
       "es": "Sí, a menudo."
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      },
      {
       "ru": "Всегда́!",
       "es": "¡Siempre!"
      },
      {
       "ru": "Ре́дко.",
       "es": "Pocas veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Siempre / a menudo",
       "claves": [
        "часто",
        "всегда",
        "каждый"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 👍",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "A veces / poco",
       "claves": [
        "иногда",
        "редко"
       ],
       "resp": [
        {
         "ru": "Иногда́ — э́то то́же хорошо́! 🙂",
         "tr": "Inagdá — éta tózhi jarashó!",
         "es": "¡A veces también está bien!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? 😂 Но ты лю́бишь!",
         "tr": "Nikagdá? No ty liúbish!",
         "es": "¿Nunca? ¡Pero te gusta!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "masha",
       "comodin": true
      }
     ]
    },
    {
     "id": "masha",
     "titulo": "Masha nada",
     "bot": [
      {
       "ru": "Я пла́ваю ча́сто, а пою́ всегда́: до́ма, у́тром, ве́чером! 🎤😂 Ди́ма говори́т: «Ма́ша, пожа́луйста, ти́хо!»",
       "tr": "Ya plávayu chásta, a payú fsigdá: dóma, útram, viéchiram! Díma gavarít: «Másha, pazháluista, tíja!»",
       "es": "Nado a menudo, y canto siempre: en casa, por la mañana, por la noche. Dima dice: «Masha, por favor, ¡silencio!»"
      }
     ],
     "ideas": [
      {
       "ru": "Ты хорошо́ поёшь?",
       "es": "¿Cantas bien?"
      },
      {
       "ru": "Хорошо́! 😂",
       "es": "¡Muy bien!"
      },
      {
       "ru": "Я то́же пою́!",
       "es": "¡Yo también canto!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta si canta bien",
       "claves": [
        "поешь"
       ],
       "resp": [
        {
         "ru": "Нет! Я пою́ о́чень пло́хо! 😂 Но я люблю́ петь.",
         "tr": "Niet! Ya payú óchin plója! No ya liubliú piet.",
         "es": "¡No! Canto muy mal. Pero me encanta."
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "También canta",
       "claves": [
        "пою"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Мы поём вме́сте! 🎶",
         "tr": "Atlíchna! My payóm vmiésti!",
         "es": "¡Genial! ¡Cantamos juntos!"
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😂",
         "tr": "",
         "es": "😂"
        }
       ],
       "ir": "deporte",
       "comodin": true
      }
     ]
    },
    {
     "id": "deporte",
     "titulo": "El deporte",
     "bot": [
      {
       "ru": "А спорт? Ты лю́бишь спорт? ⚽",
       "tr": "A sport? Ty liúbish sport?",
       "es": "¿Y el deporte? ¿Te gusta?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я люблю́ футбо́л.",
       "es": "Sí, me gusta el fútbol."
      },
      {
       "ru": "Нет, я не люблю́ спорт.",
       "es": "No, no me gusta el deporte."
      },
      {
       "ru": "Я бе́гаю.",
       "es": "Salgo a correr."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=не люблю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ничего́! Спорт — не для всех. 😄",
         "tr": "Nichivó! Sport — nie dlia fsiej.",
         "es": "¡No pasa nada! El deporte no es para todos."
        }
       ],
       "ir": "dima",
       "dato": "Deporte",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Fútbol",
       "claves": [
        "футбол"
       ],
       "resp": [
        {
         "ru": "Как Ди́ма! ⚽",
         "tr": "Kak Díma!",
         "es": "¡Como Dima!"
        }
       ],
       "ir": "dima",
       "dato": "Deporte",
       "datoValor": "футбо́л"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "люблю",
        "бегаю",
        "плаваю",
        "=да"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 💪",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "dima",
       "dato": "Deporte",
       "datoValor": "да"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "Ди́ма лю́бит футбо́л. А что лю́бит де́лать Ди́ма до́ма? Спать! 😂 Он всегда́ спит.",
       "tr": "Díma liúbit fudból. A shto liúbit diélat Díma dóma? Spat! On fsigdá spit.",
       "es": "A Dima le encanta el fútbol. ¿Y qué le gusta hacer en casa? ¡Dormir! Siempre duerme."
      }
     ],
     "ideas": [
      {
       "ru": "Хорошо́! 😂",
       "es": "¡Muy bien!"
      },
      {
       "ru": "Я то́же люблю́ спать!",
       "es": "¡A mí también me gusta dormir!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "También duerme",
       "claves": [
        "спать",
        "сплю"
       ],
       "resp": [
        {
         "ru": "Ты как Ди́ма! 😂",
         "tr": "Ty kak Díma!",
         "es": "¡Eres como Dima!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😂",
         "tr": "",
         "es": "😂"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-quiero",
   "desde": 5,
   "titulo": "Хочу́ и могу́",
   "tituloEs": "Quiero y puedo",
   "resumen": "Хоте́ть y мочь: qué quieres, qué puedes",
   "intro": "Masha te ofrece cosas, te propone planes y te pregunta qué puedes hacer. Ojo con хочу́, хо́чешь, хо́чет… y могу́, мо́жешь, мо́жет.",
   "inicio": "cafe",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cafe",
     "titulo": "¿Café?",
     "bot": [
      {
       "ru": "Ты хо́чешь ко́фе и́ли чай? ☕🍵",
       "tr": "Ty jóchish kófi íli chai?",
       "es": "¿Quieres café o té?"
      }
     ],
     "ideas": [
      {
       "ru": "Я хочу́ ко́фе.",
       "es": "Quiero café."
      },
      {
       "ru": "Я хочу́ чай.",
       "es": "Quiero té."
      },
      {
       "ru": "Спаси́бо, я ничего́ не хочу́.",
       "es": "Gracias, no quiero nada."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего",
        "=не хочу"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "cansada"
      },
      {
       "etiqueta": "Café",
       "claves": [
        "кофе"
       ],
       "resp": [
        {
         "ru": "Я то́же! Я всегда́ хочу́ ко́фе. ☕",
         "tr": "Ya tózhi! Ya fsigdá jachú kófi.",
         "es": "¡Yo también! Siempre quiero café."
        }
       ],
       "ir": "cansada",
       "dato": "Bebe",
       "datoValor": "ко́фе"
      },
      {
       "etiqueta": "Té",
       "claves": [
        "чай"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Чай. 🍵",
         "tr": "Jarashó! Chai.",
         "es": "¡Vale! Té."
        }
       ],
       "ir": "cansada",
       "dato": "Bebe",
       "datoValor": "чай"
      },
      {
       "etiqueta": "Хо́чет (error)",
       "claves": [
        "=хочет",
        "=хочешь"
       ],
       "resp": [
        {
         "ru": "Я хочу́! 😄 Я хочу́, ты хо́чешь.",
         "tr": "Ya jachú! Ya jachú, ty jóchish.",
         "es": "Para ti: я хочу (ты хочешь es lo que pregunto yo)."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "cansada",
       "comodin": true
      }
     ]
    },
    {
     "id": "cansada",
     "titulo": "Masha tiene sueño",
     "bot": [
      {
       "ru": "Ой, я хочу́ спать! 😴 А ты? Ты хо́чешь спать?",
       "tr": "Oi, ya jachú spat! A ty? Ty jóchish spat?",
       "es": "¡Uy, tengo sueño! ¿Y tú? ¿Tienes sueño?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я то́же хочу́ спать.",
       "es": "Sí, yo también tengo sueño."
      },
      {
       "ru": "Нет, я не хочу́ спать.",
       "es": "No, no tengo sueño."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=не хочу",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? Ты молоде́ц! 💪",
         "tr": "Niet? Ty maladiéts!",
         "es": "¿No? ¡Qué bien!"
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "хочу",
        "=да"
       ],
       "resp": [
        {
         "ru": "Мы как Ди́ма! 😂",
         "tr": "My kak Díma!",
         "es": "¡Somos como Dima!"
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😴",
         "tr": "",
         "es": "😴"
        }
       ],
       "ir": "pasear",
       "comodin": true
      }
     ]
    },
    {
     "id": "pasear",
     "titulo": "Pasear",
     "bot": [
      {
       "ru": "Сего́дня ве́чером я и Лу́кас гуля́ем. Ты хо́чешь гуля́ть? 🚶‍♀️",
       "tr": "Sivódnia viéchiram ya i Lúkas guliáyim. Ty jóchish guliát?",
       "es": "Esta noche Lucas y yo salimos a pasear. ¿Quieres venir?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, хочу́!",
       "es": "¡Sí, quiero!"
      },
      {
       "ru": "Не могу́, я рабо́таю.",
       "es": "No puedo, trabajo."
      },
      {
       "ru": "Не могу́, я учу́сь.",
       "es": "No puedo, estudio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No puede",
       "claves": [
        "=не могу"
       ],
       "resp": [
        {
         "ru": "Жаль! 😕 Мо́жет быть, за́втра?",
         "tr": "Zhal! Mózhit byt, záftra?",
         "es": "¡Qué pena! ¿Quizá mañana?"
        }
       ],
       "ir": "puedes"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "хочу",
        "=да",
        "могу"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "puedes"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "puedes",
       "comodin": true
      }
     ]
    },
    {
     "id": "puedes",
     "titulo": "¿Puedes…?",
     "bot": [
      {
       "ru": "Ты мо́жешь говори́ть по-ру́сски ме́дленно? 😄 Я — нет! Я всегда́ говорю́ бы́стро.",
       "tr": "Ty mózhish gavarít parússki miédlinna? Ya — niet! Ya fsigdá gavariú býstra.",
       "es": "¿Puedes hablar ruso despacio? ¡Yo no! Siempre hablo rápido."
      }
     ],
     "ideas": [
      {
       "ru": "Да, я могу́.",
       "es": "Sí, puedo."
      },
      {
       "ru": "Я могу́ говори́ть то́лько ме́дленно!",
       "es": "¡Solo puedo hablar despacio!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo despacio",
       "claves": [
        "только",
        "медленно"
       ],
       "resp": [
        {
         "ru": "И э́то хорошо́! 🐢",
         "tr": "I éta jarashó!",
         "es": "¡Y está bien!"
        }
       ],
       "ir": "lucas"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "могу",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "lucas"
      },
      {
       "etiqueta": "Мо́жет (error)",
       "claves": [
        "=может",
        "=можешь"
       ],
       "resp": [
        {
         "ru": "Я могу́! Я могу́, ты мо́жешь, он мо́жет. 🙂",
         "tr": "Ya magú! Ya magú, ty mózhish, on mózhit.",
         "es": "Para ti: я могу."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "lucas",
       "comodin": true
      }
     ]
    },
    {
     "id": "lucas",
     "titulo": "Lucas",
     "bot": [
      {
       "ru": "Лу́кас мо́жет говори́ть по-ру́сски, по-испа́нски и по-англи́йски! 😮 А ты? Что ты мо́жешь?",
       "tr": "Lúkas mózhit gavarít parússki, paispánski i paanglíiski! A ty? Shto ty mózhish?",
       "es": "Lucas puede hablar ruso, español e inglés. ¿Y tú? ¿Qué puedes hacer?"
      }
     ],
     "ideas": [
      {
       "ru": "Я могу́ говори́ть по-испа́нски.",
       "es": "Puedo hablar español."
      },
      {
       "ru": "Я могу́ гото́вить!",
       "es": "¡Puedo cocinar!"
      },
      {
       "ru": "Я могу́ петь.",
       "es": "Puedo cantar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Puede + infinitivo",
       "claves": [
        "могу"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 👍",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "quieres",
       "dato": "Puede"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Здо́рово! 🙂",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "quieres",
       "comodin": true
      }
     ]
    },
    {
     "id": "quieres",
     "titulo": "¿Qué quieres?",
     "bot": [
      {
       "ru": "А что ты хо́чешь де́лать сего́дня ве́чером? 🌙",
       "tr": "A shto ty jóchish diélat sivódnia viéchiram?",
       "es": "¿Y qué quieres hacer esta noche?"
      }
     ],
     "ideas": [
      {
       "ru": "Я хочу́ отдыха́ть.",
       "es": "Quiero descansar."
      },
      {
       "ru": "Я хочу́ смотре́ть фильм.",
       "es": "Quiero ver una película."
      },
      {
       "ru": "Я хочу́ спать!",
       "es": "¡Quiero dormir!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Dormir",
       "claves": [
        "спать"
       ],
       "resp": [
        {
         "ru": "Как я! 😂",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Quiere + infinitivo",
       "claves": [
        "хочу"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 👍",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin",
       "dato": "Esta noche quiere"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́ший план! 🙂",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-entrevista",
   "desde": 5,
   "titulo": "Спроси́ Ма́шу",
   "tituloEs": "Pregúntale a Masha",
   "resumen": "Tú haces las preguntas: кто, что, где, когда́, почему́…",
   "intro": "Ahora le haces tú las preguntas a Masha: su familia, sus gustos, su día. Cuando quieras terminar, escribe «Всё!».",
   "inicio": "abierto",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "abierto",
     "titulo": "Preguntas tú",
     "bot": [
      {
       "ru": "Тепе́рь ты спра́шиваешь, а я отвеча́ю! 😄 Что ты хо́чешь знать?",
       "tr": "Tipiér ty spráshivayish, a ya atvicháyu! Shto ty jóchish znat?",
       "es": "Ahora preguntas tú y yo contesto. ¿Qué quieres saber?"
      }
     ],
     "ideas": [
      {
       "ru": "Всё, спаси́бо!",
       "es": "¡Listo, gracias!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Termina",
       "claves": [
        "=все",
        "=всё",
        "=хватит",
        "=конец"
       ],
       "resp": [
        {
         "ru": "Хоро́шие вопро́сы! 😊",
         "tr": "Jaróshiyi vaprósy!",
         "es": "¡Buenas preguntas!"
        }
       ],
       "ir": "fin"
      }
     ],
     "abierto": true
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-no",
   "desde": 5,
   "titulo": "Нет, не так!",
   "tituloEs": "No, no es así",
   "resumen": "La negación: не, нет y никогда́ не",
   "intro": "Masha cree que sabe todo de ti… y se equivoca. Corrígela con не, нет y никогда́ не.",
   "inicio": "cafe",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cafe",
     "titulo": "El café",
     "bot": [
      {
       "ru": "Я зна́ю! Ты пьёшь ко́фе ка́ждый день. ☕ Да?",
       "tr": "Ya znáyu! Ty pyosh kófi kázhdyi dien. Da?",
       "es": "¡Ya sé! Tomas café todos los días. ¿Verdad?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я не пью ко́фе.",
       "es": "No, no tomo café."
      },
      {
       "ru": "Да, пью.",
       "es": "Sí, tomo."
      },
      {
       "ru": "Я никогда́ не пью ко́фе!",
       "es": "¡Nunca tomo café!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́?! 😱 А я пью ко́фе всегда́!",
         "tr": "Nikagdá?! A ya pyu kófi fsigdá!",
         "es": "¿¡Nunca!? ¡Yo tomo café siempre!"
        }
       ],
       "ir": "futbol"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не пью",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? Хорошо́, хорошо́! 😅",
         "tr": "Niet? Jarashó, jarashó!",
         "es": "¿No? ¡Vale, vale!"
        }
       ],
       "ir": "futbol"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "пью"
       ],
       "resp": [
        {
         "ru": "Я зна́ю! 😎",
         "tr": "Ya znáyu!",
         "es": "¡Lo sabía!"
        }
       ],
       "ir": "futbol"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "futbol",
       "comodin": true
      }
     ]
    },
    {
     "id": "futbol",
     "titulo": "El fútbol",
     "bot": [
      {
       "ru": "И ты лю́бишь футбо́л, как Ди́ма! ⚽",
       "tr": "I ty liúbish fudból, kak Díma!",
       "es": "¡Y te encanta el fútbol, como a Dima!"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я не люблю́ футбо́л.",
       "es": "No, no me gusta el fútbol."
      },
      {
       "ru": "Да, люблю́!",
       "es": "¡Sí, me encanta!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=не люблю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Не лю́бишь? Ди́ма пла́чет! 😭😂",
         "tr": "Nie liúbish? Díma pláchit!",
         "es": "¿No te gusta? ¡Dima llora!"
        }
       ],
       "ir": "dormir"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "люблю",
        "=да"
       ],
       "resp": [
        {
         "ru": "Я зна́ю! 😎",
         "tr": "Ya znáyu!",
         "es": "¡Lo sabía!"
        }
       ],
       "ir": "dormir"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "dormir",
       "comodin": true
      }
     ]
    },
    {
     "id": "dormir",
     "titulo": "Dormir",
     "bot": [
      {
       "ru": "Ты, наве́рное, спишь у́тром до́лго… 😴",
       "tr": "Ty, naviérnayi, spish útram dólga…",
       "es": "Seguro que por la mañana duermes mucho…"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я не сплю у́тром.",
       "es": "No, por la mañana no duermo."
      },
      {
       "ru": "Да, я люблю́ спать!",
       "es": "¡Sí, me encanta dormir!"
      },
      {
       "ru": "Я никогда́ не сплю у́тром.",
       "es": "Nunca duermo por la mañana."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? Молоде́ц! 💪",
         "tr": "Nikagdá? Maladiéts!",
         "es": "¿Nunca? ¡Bien hecho!"
        }
       ],
       "ir": "cantar"
      },
      {
       "etiqueta": "Никогда sin не (error)",
       "claves": [
        "=никогда сплю"
       ],
       "resp": [
        {
         "ru": "«Никогда́ не сплю»: с «никогда́» — всегда́ «не»! 🙂",
         "tr": "«Nikagdá nie spliu»: s «nikagdá» — fsigdá «nie»!",
         "es": "Con никогда siempre va не: никогда не сплю."
        }
       ],
       "ir": "cantar"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не сплю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? Хорошо́! 😅",
         "tr": "Niet? Jarashó!",
         "es": "¿No? ¡Vale!"
        }
       ],
       "ir": "cantar"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "люблю",
        "сплю"
       ],
       "resp": [
        {
         "ru": "Я зна́ю! 😎",
         "tr": "Ya znáyu!",
         "es": "¡Lo sabía!"
        }
       ],
       "ir": "cantar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "cantar",
       "comodin": true
      }
     ]
    },
    {
     "id": "cantar",
     "titulo": "Cantar",
     "bot": [
      {
       "ru": "А ты поёшь до́ма? Как я? 🎤",
       "tr": "A ty payósh dóma? Kak ya?",
       "es": "¿Y cantas en casa? ¿Como yo?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я никогда́ не пою́.",
       "es": "No, nunca canto."
      },
      {
       "ru": "Да, я пою́!",
       "es": "¡Sí, canto!"
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? Ди́ма говори́т: «Отли́чно!» 😂",
         "tr": "Nikagdá? Díma gavarít: «Atlíchna!»",
         "es": "¿Nunca? Dima dice: «¡Genial!»"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не пою",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Не поёшь? Жаль! 🎤",
         "tr": "Nie payósh? Zhal!",
         "es": "¿No cantas? ¡Qué pena!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "пою",
        "=да",
        "иногда"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎶",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "ruso",
       "comodin": true
      }
     ]
    },
    {
     "id": "ruso",
     "titulo": "El ruso",
     "bot": [
      {
       "ru": "И ты не понима́ешь меня́, пра́вда? 😄",
       "tr": "I ty nie panimáyish miniá, právda?",
       "es": "Y no me entiendes, ¿verdad?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я понима́ю!",
       "es": "¡No, te entiendo!"
      },
      {
       "ru": "Я понима́ю, но не всё.",
       "es": "Entiendo, pero no todo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No todo",
       "claves": [
        "=не все",
        "=не всё"
       ],
       "resp": [
        {
         "ru": "Не всё — э́то норма́льно! 😊",
         "tr": "Nie fsio — éta narmálna!",
         "es": "No todo es normal."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Entiende",
       "claves": [
        "понимаю"
       ],
       "resp": [
        {
         "ru": "Я зна́ю! Ты понима́ешь отли́чно! 👍",
         "tr": "Ya znáyu! Ty panimáyish atlíchna!",
         "es": "¡Ya lo sé! ¡Entiendes perfectamente!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😄",
         "tr": "",
         "es": "😄"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u5-familia",
   "desde": 5,
   "titulo": "Что де́лает семья́?",
   "tituloEs": "¿Qué hace la familia?",
   "resumen": "Todas las personas del verbo: я, ты, он, мы, вы, они",
   "intro": "Masha cuenta qué hace cada uno en su familia y te pregunta por la tuya. Practica todas las personas del verbo.",
   "inicio": "papa",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "papa",
     "titulo": "Papá",
     "bot": [
      {
       "ru": "Мой па́па — инжене́р. Он мно́го рабо́тает. 👷 Что де́лает па́па?",
       "tr": "Moi pápa — inzhiniér. On mnóga rabótayit. Shto diélayit pápa?",
       "es": "Mi papá es ingeniero. Trabaja mucho. ¿Qué hace papá?"
      }
     ],
     "ideas": [
      {
       "ru": "Он рабо́тает.",
       "es": "Trabaja."
      },
      {
       "ru": "Па́па мно́го рабо́тает.",
       "es": "Papá trabaja mucho."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Рабо́тает",
       "claves": [
        "=работает"
       ],
       "resp": [
        {
         "ru": "Да! 👍",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "работа"
       ],
       "resp": [
        {
         "ru": "Он рабо́тает! 🙂",
         "tr": "On rabótayit!",
         "es": "Él trabaja: работает."
        }
       ],
       "ir": "mama"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он рабо́тает. 🙂",
         "tr": "On rabótayit.",
         "es": "Trabaja."
        }
       ],
       "ir": "mama",
       "comodin": true
      }
     ]
    },
    {
     "id": "mama",
     "titulo": "Mamá",
     "bot": [
      {
       "ru": "Ма́ма — врач. Она́ то́же рабо́тает, а ве́чером гото́вит. 🍲 А ты гото́вишь?",
       "tr": "Máma — vrach. Aná tózhi rabótayit, a viéchiram gatóvit. A ty gatóvish?",
       "es": "Mamá es médica. También trabaja, y por la noche cocina. ¿Y tú cocinas?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я гото́влю.",
       "es": "Sí, cocino."
      },
      {
       "ru": "Нет, я не гото́влю.",
       "es": "No, no cocino."
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Гото́влю",
       "claves": [
        "=готовлю"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 🍳",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не готовлю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Я то́же не гото́влю. Я ем! 😂",
         "tr": "Ya tózhi nie gatóvliu. Ya yem!",
         "es": "Yo tampoco cocino. ¡Yo como!"
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "Гото́вю (error)",
       "claves": [
        "готовю"
       ],
       "resp": [
        {
         "ru": "Я гото́влю! 🙂",
         "tr": "Ya gatóvliu!",
         "es": "Я готовлю: con una л de más."
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "A veces",
       "claves": [
        "иногда"
       ],
       "resp": [
        {
         "ru": "Иногда́ — хорошо́! 🙂",
         "tr": "Inagdá — jarashó!",
         "es": "¡A veces está bien!"
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "padres",
       "comodin": true
      }
     ]
    },
    {
     "id": "padres",
     "titulo": "Ellos",
     "bot": [
      {
       "ru": "Ве́чером па́па и ма́ма смо́трят телеви́зор. 📺 Что они́ де́лают?",
       "tr": "Viéchiram pápa i máma smótrit tilivízar. Shto aní diélayut?",
       "es": "Por la noche papá y mamá ven la tele. ¿Qué hacen?"
      }
     ],
     "ideas": [
      {
       "ru": "Они́ смо́трят телеви́зор.",
       "es": "Ven la tele."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Смо́трят",
       "claves": [
        "=смотрят"
       ],
       "resp": [
        {
         "ru": "Да! 👍",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "смотр"
       ],
       "resp": [
        {
         "ru": "Они́ смо́трят! 🙂",
         "tr": "Aní smótrit!",
         "es": "Ellos: смотрят."
        }
       ],
       "ir": "nosotros"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Они́ смо́трят телеви́зор. 🙂",
         "tr": "Aní smótrit tilivízar.",
         "es": "Ven la tele."
        }
       ],
       "ir": "nosotros",
       "comodin": true
      }
     ]
    },
    {
     "id": "nosotros",
     "titulo": "Nosotros",
     "bot": [
      {
       "ru": "А я и Ди́ма гуля́ем! 🚶‍♀️🚶 Что мы де́лаем?",
       "tr": "A ya i Díma guliáyim! Shto my diélayim?",
       "es": "Y Dima y yo salimos a pasear. ¿Qué hacemos?"
      }
     ],
     "ideas": [
      {
       "ru": "Вы гуля́ете.",
       "es": "Ustedes pasean."
      },
      {
       "ru": "Вы гуля́ете ве́чером.",
       "es": "Ustedes pasean por la noche."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Гуля́ете",
       "claves": [
        "=гуляете"
       ],
       "resp": [
        {
         "ru": "Да! Мы гуля́ем, вы гуля́ете. 👍",
         "tr": "Da! My guliáyim, vy guliáyiti.",
         "es": "¡Sí! Мы гуляем, вы гуляете."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Гуля́ем (también vale)",
       "claves": [
        "=гуляем"
       ],
       "resp": [
        {
         "ru": "Мы гуля́ем! Но ты говори́шь «вы»: вы гуля́ете. 🙂",
         "tr": "My guliáyim! No ty gavarísh «vy»: vy guliáyiti.",
         "es": "Para nosotros: мы гуляем; tú dices вы гуляете."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "гуля"
       ],
       "resp": [
        {
         "ru": "Вы гуля́ете! 🙂",
         "tr": "Vy guliáyiti!",
         "es": "Вы гуляете."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вы гуля́ете! 🙂",
         "tr": "Vy guliáyiti!",
         "es": "Вы гуляете."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "Tu familia",
     "bot": [
      {
       "ru": "А что де́лает твоя́ семья́ ве́чером? 🏠",
       "tr": "A shto diélayit tvayá simyá viéchiram?",
       "es": "¿Y qué hace tu familia por la noche?"
      }
     ],
     "ideas": [
      {
       "ru": "Мы у́жинаем.",
       "es": "Cenamos."
      },
      {
       "ru": "Мы смо́трим фильм.",
       "es": "Vemos una película."
      },
      {
       "ru": "Я живу́ оди́н.",
       "es": "Vivo solo."
      },
      {
       "ru": "Я живу́ одна́.",
       "es": "Vivo sola."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Vive solo",
       "claves": [
        "=один",
        "=одна"
       ],
       "resp": [
        {
         "ru": "{Оди́н/Одна́}? Э́то то́же хорошо́: ти́хо! 😄",
         "tr": "{Adín/Adná}? Éta tózhi jarashó: tíja!",
         "es": "¿Solo? ¡También está bien: hay silencio!"
        }
       ],
       "ir": "fin",
       "genero": {
        "один": "m",
        "одна": "f"
       }
      },
      {
       "etiqueta": "Мы + verbo",
       "claves": [
        "=мы"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "fin",
       "dato": "Su familia por la noche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-vivir",
   "desde": 6,
   "titulo": "Где ты живёшь?",
   "tituloEs": "¿Dónde vives?",
   "resumen": "Ciudades, países y barrios: в + prepositivo",
   "intro": "Masha te pregunta dónde vives y te cuenta dónde vive ella. Recuerda: в Москве́, в Испа́нии, в Барсело́не.",
   "inicio": "vivir",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "vivir",
     "titulo": "¿Dónde vives?",
     "bot": [
      {
       "ru": "Где ты живёшь, {nombre}? 🏙️",
       "tr": "Gdie ty zhiviósh, {nombre}?",
       "es": "¿Dónde vives, {nombre}?"
      }
     ],
     "ideas": [
      {
       "ru": "Я живу́ в Барсело́не.",
       "es": "Vivo en Barcelona."
      },
      {
       "ru": "Я живу́ в Испа́нии.",
       "es": "Vivo en España."
      },
      {
       "ru": "Я живу́ в Мадри́де.",
       "es": "Vivo en Madrid."
      },
      {
       "ru": "Я живу́ в …",
       "es": "Vivo en …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Barcelona",
       "claves": [
        "барселон"
       ],
       "resp": [
        {
         "ru": "В Барсело́не? Я о́чень хочу́ в Барсело́ну! 😍 Там мо́ре!",
         "tr": "V Barsilóni? Ya óchin jachú v Barsilónu! Tam móri!",
         "es": "¿En Barcelona? ¡Tengo muchas ganas de ir! ¡Allí hay mar!"
        }
       ],
       "ir": "centro",
       "dato": "Vive en",
       "datoValor": "Барсело́на"
      },
      {
       "etiqueta": "Madrid",
       "claves": [
        "мадрид"
       ],
       "resp": [
        {
         "ru": "В Мадри́де? Э́то столи́ца! 🇪🇸",
         "tr": "V Madrídi? Éta stalítsa!",
         "es": "¿En Madrid? ¡Es la capital!"
        }
       ],
       "ir": "centro",
       "dato": "Vive en",
       "datoValor": "Мадри́д"
      },
      {
       "etiqueta": "Moscú",
       "claves": [
        "москв"
       ],
       "resp": [
        {
         "ru": "В Москве́? Я то́же! 😄",
         "tr": "V Maskvié? Ya tózhi!",
         "es": "¿En Moscú? ¡Yo también!"
        }
       ],
       "ir": "centro",
       "dato": "Vive en",
       "datoValor": "Москва́"
      },
      {
       "etiqueta": "Buenos Aires",
       "claves": [
        "буэнос"
       ],
       "resp": [
        {
         "ru": "В Буэ́нос-А́йресе? Там живёт семья́ Лу́каса! 🇦🇷",
         "tr": "V Buinasáirisi? Tam zhiviót simyá Lúkasa!",
         "es": "¿En Buenos Aires? ¡Allí vive la familia de Lucas!"
        }
       ],
       "ir": "centro",
       "dato": "Vive en",
       "datoValor": "Буэ́нос-А́йрес"
      },
      {
       "etiqueta": "Otro lugar",
       "resp": [
        {
         "ru": "В {x}? Интере́сно! 😊",
         "tr": "V {x}? Intiriésna!",
         "es": "¿En {x}? ¡Interesante!"
        }
       ],
       "ir": "centro",
       "dato": "Vive en",
       "captura": "eco",
       "tras": [
        "в",
        "во"
       ]
      },
      {
       "etiqueta": "Sin в (error)",
       "claves": [
        "=живу"
       ],
       "resp": [
        {
         "ru": "Где? В … ! Наприме́р: «Я живу́ в Испа́нии». 🙂",
         "tr": "Gdie? V … ! Naprimiér: «Ya zhivú v Ispánii».",
         "es": "¿Dónde? Con в: «Я живу в Испании»."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "centro",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я живу́ в Москве́, в це́нтре. 🏙️",
       "tr": "Ya zhivú v Maskvié, v tséntri.",
       "es": "Vivo en Moscú, en el centro."
      }
     ],
     "aTiTema": "vivir_m",
     "retomar": {
      "ru": "Так где ты живёшь?",
      "tr": "Tak gdie ty zhiviósh?",
      "es": "Entonces, ¿dónde vives?"
     }
    },
    {
     "id": "centro",
     "titulo": "El centro",
     "bot": [
      {
       "ru": "А ты живёшь в це́нтре? 🏢",
       "tr": "A ty zhiviósh v tséntri?",
       "es": "¿Y vives en el centro?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, в це́нтре.",
       "es": "Sí, en el centro."
      },
      {
       "ru": "Нет, я живу́ далеко́ от це́нтра.",
       "es": "No, vivo lejos del centro."
      },
      {
       "ru": "Я живу́ в дере́вне.",
       "es": "Vivo en un pueblo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pueblo",
       "claves": [
        "деревн"
       ],
       "resp": [
        {
         "ru": "В дере́вне? Там ти́хо и краси́во! 🌳",
         "tr": "V diriévni? Tam tíja i krasíva!",
         "es": "¿En un pueblo? ¡Allí todo es tranquilo y bonito!"
        }
       ],
       "ir": "masha",
       "dato": "Barrio",
       "datoValor": "в дере́вне"
      },
      {
       "etiqueta": "Lejos",
       "claves": [
        "далеко",
        "=нет"
       ],
       "resp": [
        {
         "ru": "А я в це́нтре. Там мно́го люде́й! 😅",
         "tr": "A ya v tséntri. Tam mnóga liudiéi!",
         "es": "Yo vivo en el centro. ¡Hay mucha gente!"
        }
       ],
       "ir": "masha",
       "dato": "Barrio",
       "datoValor": "не в це́нтре"
      },
      {
       "etiqueta": "Centro",
       "claves": [
        "центр",
        "=да"
       ],
       "resp": [
        {
         "ru": "Как я! В це́нтре всё бли́зко. 👍",
         "tr": "Kak ya! V tséntri fsio blíska.",
         "es": "¡Como yo! En el centro todo queda cerca."
        }
       ],
       "ir": "masha",
       "dato": "Barrio",
       "datoValor": "в це́нтре"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "masha",
       "comodin": true
      }
     ]
    },
    {
     "id": "masha",
     "titulo": "Masha",
     "bot": [
      {
       "ru": "А я живу́ в Москве́, в це́нтре. Ря́дом метро́ и парк. 🌳",
       "tr": "A ya zhivú v Maskvié, v tséntri. Riádam mitró i park.",
       "es": "Yo vivo en Moscú, en el centro. Cerca hay un metro y un parque."
      },
      {
       "ru": "А что у тебя́ ря́дом? Магази́н? Парк? Мо́ре? 🤔",
       "tr": "A shto u tibiá riádam? Magazín? Park? Móri?",
       "es": "¿Y qué tienes cerca? ¿Una tienda? ¿Un parque? ¿El mar?"
      }
     ],
     "ideas": [
      {
       "ru": "Ря́дом парк.",
       "es": "Cerca hay un parque."
      },
      {
       "ru": "Ря́дом мо́ре!",
       "es": "¡Cerca está el mar!"
      },
      {
       "ru": "Ря́дом магази́н и метро́.",
       "es": "Cerca hay una tienda y el metro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "El mar",
       "claves": [
        "мор"
       ],
       "resp": [
        {
         "ru": "Мо́ре?! 😍 Как я хочу́ на мо́ре!",
         "tr": "Móri?! Kak ya jachú na móri!",
         "es": "¡¿El mar?! ¡Cuántas ganas de ir al mar!"
        }
       ],
       "ir": "pais"
      },
      {
       "etiqueta": "Algo cerca",
       "claves": [
        "рядом",
        "парк",
        "магазин",
        "метро",
        "рынок",
        "школ",
        "университет",
        "кафе"
       ],
       "resp": [
        {
         "ru": "Удо́бно! 👍",
         "tr": "Udóbna!",
         "es": "¡Qué práctico!"
        }
       ],
       "ir": "pais"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "pais",
       "comodin": true
      }
     ]
    },
    {
     "id": "pais",
     "titulo": "Países",
     "bot": [
      {
       "ru": "Лу́кас живёт в Росси́и, а его́ семья́ — в Аргенти́не. 🇷🇺🇦🇷 Где живёт семья́ Лу́каса?",
       "tr": "Lúkas zhiviót v Rassíi, a yivó simyá — v Arguintíni. Gdie zhiviót simyá Lúkasa?",
       "es": "Lucas vive en Rusia, y su familia, en Argentina. ¿Dónde vive la familia de Lucas?"
      }
     ],
     "ideas": [
      {
       "ru": "В Аргенти́не.",
       "es": "En Argentina."
      },
      {
       "ru": "Его́ семья́ живёт в Аргенти́не.",
       "es": "Su familia vive en Argentina."
      }
     ],
     "ramas": [
      {
       "etiqueta": "В Аргенти́не",
       "claves": [
        "=аргентине"
       ],
       "resp": [
        {
         "ru": "Да! В Аргенти́не, в Буэ́нос-А́йресе. 👍",
         "tr": "Da! V Arguintíni, v Buinasáirisi.",
         "es": "¡Sí! En Argentina, en Buenos Aires."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "аргентин"
       ],
       "resp": [
        {
         "ru": "В Аргенти́не! 🙂",
         "tr": "V Arguintíni!",
         "es": "В Аргентине: -а → -е."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В Аргенти́не! 🇦🇷",
         "tr": "V Arguintíni!",
         "es": "¡En Argentina!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "А О́льга Петро́вна живёт в Росси́и? И́ли в Испа́нии? 🤔",
       "tr": "A Ólga Pitróvna zhiviót v Rassíi? Íli v Ispánii?",
       "es": "¿Y Olga Petrovna vive en Rusia? ¿O en España?"
      }
     ],
     "ideas": [
      {
       "ru": "В Росси́и.",
       "es": "En Rusia."
      },
      {
       "ru": "Она́ живёт в Москве́.",
       "es": "Vive en Moscú."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusia / Moscú",
       "claves": [
        "росси",
        "москв"
       ],
       "resp": [
        {
         "ru": "Да! В Москве́. 👍",
         "tr": "Da! V Maskvié.",
         "es": "¡Sí! En Moscú."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "España",
       "claves": [
        "испан"
       ],
       "resp": [
        {
         "ru": "Нет! 😄 Она́ живёт в Москве́.",
         "tr": "Niet! Aná zhiviót v Maskvié.",
         "es": "¡No! Vive en Moscú."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Она́ живёт в Москве́. 🙂",
         "tr": "Aná zhiviót v Maskvié.",
         "es": "Vive en Moscú."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-casa",
   "desde": 6,
   "titulo": "Моя́ кварти́ра",
   "tituloEs": "Mi piso",
   "resumen": "La casa: dónde está cada cosa, в y на",
   "intro": "Masha te muestra su piso y te pregunta dónde haces cada cosa en el tuyo: на ку́хне, в ко́мнате, на дива́не…",
   "inicio": "cocina",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cocina",
     "titulo": "La cocina",
     "bot": [
      {
       "ru": "У меня́ ма́ленькая кварти́ра: ку́хня, ко́мната и ва́нная. 🏠",
       "tr": "U miniá málinkaya kvartíra: kújnia, kómnata i vánnaya.",
       "es": "Tengo un piso pequeño: cocina, habitación y baño."
      },
      {
       "ru": "Я за́втракаю на ку́хне. А ты? Где ты за́втракаешь? ☕",
       "tr": "Ya záftrakayu na kújni. A ty? Gdie ty záftrakayish?",
       "es": "Desayuno en la cocina. ¿Y tú? ¿Dónde desayunas?"
      }
     ],
     "ideas": [
      {
       "ru": "На ку́хне.",
       "es": "En la cocina."
      },
      {
       "ru": "Я за́втракаю на ку́хне.",
       "es": "Desayuno en la cocina."
      },
      {
       "ru": "В ко́мнате.",
       "es": "En la habitación."
      },
      {
       "ru": "В кафе́!",
       "es": "¡En una cafetería!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "На ку́хне",
       "claves": [
        "=кухне"
       ],
       "resp": [
        {
         "ru": "Как я! 🍳",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "leer"
      },
      {
       "etiqueta": "В ку́хне (error)",
       "claves": [
        "=в кухне"
       ],
       "resp": [
        {
         "ru": "На ку́хне! С «ку́хня» — «на». 🙂",
         "tr": "Na kújni! S «kújnia» — «na».",
         "es": "Con кухня se dice на: на кухне."
        }
       ],
       "ir": "leer"
      },
      {
       "etiqueta": "Café",
       "claves": [
        "кафе"
       ],
       "resp": [
        {
         "ru": "В кафе́? Отли́чно! ☕",
         "tr": "V kafé? Atlíchna!",
         "es": "¿En una cafetería? ¡Genial!"
        }
       ],
       "ir": "leer"
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "комнат",
        "=дома",
        "работ",
        "офис"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "leer"
      },
      {
       "etiqueta": "Ку́хня (error)",
       "claves": [
        "=кухня"
       ],
       "resp": [
        {
         "ru": "Где? На ку́хне! 🙂",
         "tr": "Gdie? Na kújni!",
         "es": "¿Dónde? На кухне: -я → -е."
        }
       ],
       "ir": "leer"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "leer",
       "comodin": true
      }
     ]
    },
    {
     "id": "leer",
     "titulo": "Dónde lees",
     "bot": [
      {
       "ru": "Я чита́ю на дива́не. 🛋️ А где ты чита́ешь?",
       "tr": "Ya chitáyu na diváni. A gdie ty chitáyish?",
       "es": "Yo leo en el sofá. ¿Y dónde lees tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Я чита́ю в крова́ти.",
       "es": "Leo en la cama."
      },
      {
       "ru": "На дива́не.",
       "es": "En el sofá."
      },
      {
       "ru": "В метро́.",
       "es": "En el metro."
      },
      {
       "ru": "В кре́сле.",
       "es": "En el sillón."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Metro",
       "claves": [
        "метро"
       ],
       "resp": [
        {
         "ru": "В метро́? Я то́же! 🚇",
         "tr": "V mitró? Ya tózhi!",
         "es": "¿En el metro? ¡Yo también!"
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Lugar en prepositivo",
       "claves": [
        "=кровати",
        "=диване",
        "=кресле",
        "=комнате",
        "=парке",
        "=библиотеке",
        "=автобусе",
        "=кафе"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 📚",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=кровать",
        "=диван",
        "=кресло",
        "=комната",
        "=парк",
        "=библиотека"
       ],
       "resp": [
        {
         "ru": "Где? Тут на́до: в крова́ти, на дива́не, в кре́сле. 🙂",
         "tr": "Gdie? Tut náda: v kraváti, na diváni, v kriésli.",
         "es": "Para «dónde», prepositivo: в кровати, на диване, в кресле."
        }
       ],
       "ir": "barsik"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 📚",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "barsik",
       "comodin": true
      }
     ]
    },
    {
     "id": "barsik",
     "titulo": "¿Dónde duerme Barsik?",
     "bot": [
      {
       "ru": "А Ба́рсик спит… где? 🐈‍⬛ На крова́ти? На дива́не? В шкафу́? 🤔",
       "tr": "A Bársik spit… gdie? ⬛ Na kraváti? Na diváni? V shkafú?",
       "es": "¿Y Barsik duerme… dónde? ¿En la cama? ¿En el sofá? ¿En el armario?"
      }
     ],
     "ideas": [
      {
       "ru": "На крова́ти?",
       "es": "¿En la cama?"
      },
      {
       "ru": "На дива́не?",
       "es": "¿En el sofá?"
      },
      {
       "ru": "В шкафу́?",
       "es": "¿En el armario?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Armario",
       "claves": [
        "шкаф"
       ],
       "resp": [
        {
         "ru": "Да! В шкафу́! 😂 Он лю́бит спать в шкафу́.",
         "tr": "Da! V shkafú! On liúbit spat v shkafú.",
         "es": "¡Sí! En el armario. Le encanta dormir ahí."
        }
       ],
       "ir": "bano"
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "кроват",
        "диван",
        "кресл",
        "кухн",
        "окн"
       ],
       "resp": [
        {
         "ru": "Нет! Он спит в шкафу́! 😂",
         "tr": "Niet! On spit v shkafú!",
         "es": "¡No! Duerme en el armario."
        }
       ],
       "ir": "bano"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В шкафу́! 😂",
         "tr": "V shkafú!",
         "es": "¡En el armario!"
        }
       ],
       "ir": "bano",
       "comodin": true
      }
     ]
    },
    {
     "id": "bano",
     "titulo": "El baño",
     "bot": [
      {
       "ru": "А где твой телефо́н сейча́с? 📱",
       "tr": "A gdie tvoi tilifón siichás?",
       "es": "¿Dónde está tu teléfono ahora?"
      }
     ],
     "ideas": [
      {
       "ru": "На столе́.",
       "es": "En la mesa."
      },
      {
       "ru": "В руке́!",
       "es": "¡En la mano!"
      },
      {
       "ru": "В су́мке.",
       "es": "En el bolso."
      },
      {
       "ru": "В карма́не.",
       "es": "En el bolsillo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "En la mano",
       "claves": [
        "руке"
       ],
       "resp": [
        {
         "ru": "Коне́чно! Ты пи́шешь мне! 😂",
         "tr": "Kaniéshna! Ty píshish mnie!",
         "es": "¡Claro! ¡Me estás escribiendo!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Lugar en prepositivo",
       "claves": [
        "=столе",
        "=сумке",
        "=кармане",
        "=кровати",
        "=диване",
        "=рюкзаке",
        "=кухне",
        "=комнате"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 📱",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=стол",
        "=сумка",
        "=карман",
        "=рюкзак"
       ],
       "resp": [
        {
         "ru": "Где? На столе́, в су́мке, в карма́не. 🙂",
         "tr": "Gdie? Na stalié, v súmki, v karmáni.",
         "es": "Para «dónde», prepositivo: на столе, в сумке, в кармане."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😄",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "Tu piso",
     "bot": [
      {
       "ru": "А у тебя́ кварти́ра и́ли дом? 🏠",
       "tr": "A u tibiá kvartíra íli dom?",
       "es": "¿Y tú tienes un piso o una casa?"
      }
     ],
     "ideas": [
      {
       "ru": "Кварти́ра.",
       "es": "Un piso."
      },
      {
       "ru": "Дом.",
       "es": "Una casa."
      },
      {
       "ru": "Я живу́ в кварти́ре.",
       "es": "Vivo en un piso."
      },
      {
       "ru": "Я живу́ в до́ме.",
       "es": "Vivo en una casa."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Casa",
       "claves": [
        "=дом",
        "=доме"
       ],
       "resp": [
        {
         "ru": "Дом! Здо́рово! А сад есть? 🌳",
         "tr": "Dom! Zdórava! A sat yest?",
         "es": "¡Una casa! ¡Genial! ¿Y tiene jardín?"
        }
       ],
       "ir": "fin",
       "dato": "Vive en",
       "datoValor": "дом"
      },
      {
       "etiqueta": "Piso",
       "claves": [
        "квартир"
       ],
       "resp": [
        {
         "ru": "Как я! 🏢",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin",
       "dato": "Vive en",
       "datoValor": "кварти́ра"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-ciudad",
   "desde": 6,
   "titulo": "В го́роде",
   "tituloEs": "En la ciudad",
   "resumen": "Dónde haces cada cosa: в магази́не, на ры́нке, в па́рке",
   "intro": "Masha te cuenta dónde hace las cosas en Moscú y te pregunta dónde las haces tú.",
   "inicio": "pan",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pan",
     "titulo": "El pan",
     "bot": [
      {
       "ru": "Я покупа́ю хлеб в магази́не. 🍞 А ты? Где ты покупа́ешь хлеб?",
       "tr": "Ya pakupáyu jliep v magazíni. A ty? Gdie ty pakupáyish jliep?",
       "es": "Compro el pan en una tienda. ¿Y tú? ¿Dónde lo compras?"
      }
     ],
     "ideas": [
      {
       "ru": "В магази́не.",
       "es": "En una tienda."
      },
      {
       "ru": "На ры́нке.",
       "es": "En el mercado."
      },
      {
       "ru": "В суперма́ркете.",
       "es": "En el supermercado."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mercado",
       "claves": [
        "=рынке"
       ],
       "resp": [
        {
         "ru": "На ры́нке? Там всё вку́сно! 😋",
         "tr": "Na rýnki? Tam fsio fkúsna!",
         "es": "¿En el mercado? ¡Allí todo está rico!"
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Tienda",
       "claves": [
        "=магазине",
        "=супермаркете",
        "=пекарне",
        "=булочной"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🍞",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=магазин",
        "=рынок",
        "=супермаркет"
       ],
       "resp": [
        {
         "ru": "Где? В магази́не, на ры́нке. 🙂",
         "tr": "Gdie? V magazíni, na rýnki.",
         "es": "Para «dónde»: в магазине, на рынке."
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "pasear",
       "comodin": true
      }
     ]
    },
    {
     "id": "pasear",
     "titulo": "Pasear",
     "bot": [
      {
       "ru": "Ве́чером я гуля́ю в па́рке. 🌳 А ты? Где ты гуля́ешь?",
       "tr": "Viéchiram ya guliáyu v párki. A ty? Gdie ty guliáyish?",
       "es": "Por la noche paseo por el parque. ¿Y tú? ¿Dónde paseas?"
      }
     ],
     "ideas": [
      {
       "ru": "В па́рке.",
       "es": "En el parque."
      },
      {
       "ru": "В це́нтре.",
       "es": "En el centro."
      },
      {
       "ru": "На у́лице.",
       "es": "Por la calle."
      },
      {
       "ru": "На пля́же!",
       "es": "¡En la playa!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Playa",
       "claves": [
        "=пляже",
        "=море"
       ],
       "resp": [
        {
         "ru": "На пля́же?! 😍 Хочу́ на мо́ре!",
         "tr": "Na pliázhi?! Jachú na móri!",
         "es": "¿¡En la playa!? ¡Quiero ir al mar!"
        }
       ],
       "ir": "estudiar"
      },
      {
       "etiqueta": "Lugar en prepositivo",
       "claves": [
        "=парке",
        "=центре",
        "=улице",
        "=саду",
        "=лесу",
        "=городе"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🚶",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "estudiar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 🚶",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "estudiar",
       "comodin": true
      }
     ]
    },
    {
     "id": "estudiar",
     "titulo": "Estudiar",
     "bot": [
      {
       "ru": "Я учу́сь в университе́те, а Ди́ма — в шко́ле. 🎓 А ты? Где ты у́чишься и́ли рабо́таешь?",
       "tr": "Ya uchús v univirsitiéti, a Díma — v shkóli. A ty? Gdie ty úchishsia íli rabótayish?",
       "es": "Yo estudio en la universidad, y Dima en el colegio. ¿Y tú? ¿Dónde estudias o trabajas?"
      }
     ],
     "ideas": [
      {
       "ru": "Я рабо́таю в о́фисе.",
       "es": "Trabajo en una oficina."
      },
      {
       "ru": "Я учу́сь в университе́те.",
       "es": "Estudio en la universidad."
      },
      {
       "ru": "Я рабо́таю до́ма.",
       "es": "Trabajo en casa."
      },
      {
       "ru": "Я рабо́таю на заво́де.",
       "es": "Trabajo en una fábrica."
      }
     ],
     "ramas": [
      {
       "etiqueta": "En casa",
       "claves": [
        "=дома"
       ],
       "resp": [
        {
         "ru": "До́ма? Удо́бно! 😄",
         "tr": "Dóma? Udóbna!",
         "es": "¿En casa? ¡Qué cómodo!"
        }
       ],
       "ir": "correo",
       "dato": "Trabaja o estudia en",
       "datoValor": "до́ма"
      },
      {
       "etiqueta": "Lugar en prepositivo",
       "claves": [
        "=офисе",
        "=университете",
        "=заводе",
        "=школе",
        "=больнице",
        "=магазине",
        "=банке",
        "=ресторане",
        "=фирме",
        "=институте",
        "=фабрике"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 👍",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "correo",
       "dato": "Trabaja o estudia en"
      },
      {
       "etiqueta": "На + lugar",
       "claves": [
        "=на работе",
        "=на заводе",
        "=на почте",
        "=на фабрике"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 👍",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "correo",
       "dato": "Trabaja o estudia en"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "correo",
       "comodin": true
      }
     ]
    },
    {
     "id": "correo",
     "titulo": "Correos",
     "bot": [
      {
       "ru": "Ма́ма сейча́с на по́чте. ✉️ А па́па на рабо́те. Где па́па?",
       "tr": "Máma siichás na póchti. A pápa na rabóti. Gdie pápa?",
       "es": "Mamá está ahora en correos. Y papá en el trabajo. ¿Dónde está papá?"
      }
     ],
     "ideas": [
      {
       "ru": "На рабо́те.",
       "es": "En el trabajo."
      },
      {
       "ru": "Па́па на рабо́те.",
       "es": "Papá está en el trabajo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "На рабо́те",
       "claves": [
        "=работе"
       ],
       "resp": [
        {
         "ru": "Да! На рабо́те. 👍",
         "tr": "Da! Na rabóti.",
         "es": "¡Sí! En el trabajo."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "В рабо́те (error)",
       "claves": [
        "работ"
       ],
       "resp": [
        {
         "ru": "На рабо́те: с «рабо́та» — «на». 🙂",
         "tr": "Na rabóti: s «rabóta» — «na».",
         "es": "Con работа se dice на: на работе."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На рабо́те. 🙂",
         "tr": "Na rabóti.",
         "es": "En el trabajo."
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма? Он сейча́с на стадио́не! ⚽ Где Ди́ма?",
       "tr": "A Díma? On siichás na stadióni! Gdie Díma?",
       "es": "¿Y Dima? ¡Está en el estadio! ¿Dónde está Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "На стадио́не.",
       "es": "En el estadio."
      },
      {
       "ru": "Ди́ма на стадио́не.",
       "es": "Dima está en el estadio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "На стадио́не",
       "claves": [
        "стадион"
       ],
       "resp": [
        {
         "ru": "Да! Он смо́трит футбо́л. ⚽",
         "tr": "Da! On smótrit fudból.",
         "es": "¡Sí! Está viendo fútbol."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На стадио́не! ⚽",
         "tr": "Na stadióni!",
         "es": "¡En el estadio!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Dónde estás?",
     "bot": [
      {
       "ru": "А ты сейча́с где? 🤔",
       "tr": "A ty siichás gdie?",
       "es": "¿Y tú dónde estás ahora?"
      }
     ],
     "ideas": [
      {
       "ru": "Я до́ма.",
       "es": "Estoy en casa."
      },
      {
       "ru": "Я на рабо́те.",
       "es": "Estoy en el trabajo."
      },
      {
       "ru": "Я в метро́.",
       "es": "Estoy en el metro."
      },
      {
       "ru": "Я в кафе́.",
       "es": "Estoy en una cafetería."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Trabajo",
       "claves": [
        "=работе"
       ],
       "resp": [
        {
         "ru": "На рабо́те? 😮 А ты пи́шешь мне! 😂",
         "tr": "Na rabóti? A ty píshish mnie!",
         "es": "¿En el trabajo? ¡Y me estás escribiendo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Casa",
       "claves": [
        "=дома"
       ],
       "resp": [
        {
         "ru": "До́ма — э́то хорошо́! 🏠",
         "tr": "Dóma — éta jarashó!",
         "es": "¡En casa se está bien!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-ir",
   "desde": 6,
   "titulo": "Куда́ ты идёшь?",
   "tituloEs": "¿Adónde vas?",
   "resumen": "Где y куда́: в магази́не / в магази́н; идти́ y е́хать",
   "intro": "Masha sale a hacer cosas y te pregunta adónde vas tú. Cuidado: «dónde» lleva prepositivo y «adónde», acusativo.",
   "inicio": "voy",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "voy",
     "titulo": "Masha sale",
     "bot": [
      {
       "ru": "Я сейча́с иду́ в магази́н. 🛒 А ты? Куда́ ты идёшь?",
       "tr": "Ya siichás idú v magazín. A ty? Kudá ty idiósh?",
       "es": "Ahora voy a la tienda. ¿Y tú? ¿Adónde vas?"
      }
     ],
     "ideas": [
      {
       "ru": "Я иду́ домо́й.",
       "es": "Voy a casa."
      },
      {
       "ru": "Я иду́ на рабо́ту.",
       "es": "Voy al trabajo."
      },
      {
       "ru": "Я иду́ в парк.",
       "es": "Voy al parque."
      },
      {
       "ru": "Я никуда́ не иду́.",
       "es": "No voy a ningún sitio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "A ningún sitio",
       "claves": [
        "никуда"
       ],
       "resp": [
        {
         "ru": "Никуда́? Ты до́ма! 🏠",
         "tr": "Nikudá? Ty dóma!",
         "es": "¿A ningún sitio? ¡Estás en casa!"
        }
       ],
       "ir": "donde"
      },
      {
       "etiqueta": "A casa",
       "claves": [
        "домой"
       ],
       "resp": [
        {
         "ru": "Домо́й! Хорошо́! 🏠",
         "tr": "Damói! Jarashó!",
         "es": "¡A casa! ¡Qué bien!"
        }
       ],
       "ir": "donde"
      },
      {
       "etiqueta": "Prepositivo en vez de acusativo (error)",
       "claves": [
        "=парке",
        "=магазине",
        "=работе",
        "=школе",
        "=университете"
       ],
       "resp": [
        {
         "ru": "Куда́? В парк, на рабо́ту! 🙂",
         "tr": "Kudá? V park, na rabótu!",
         "es": "«Adónde» lleva acusativo: в парк, на работу (no в парке)."
        }
       ],
       "ir": "donde"
      },
      {
       "etiqueta": "Adónde",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🚶",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "donde",
       "dato": "Va a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "donde",
       "comodin": true
      }
     ]
    },
    {
     "id": "donde",
     "titulo": "¿Dónde o adónde?",
     "bot": [
      {
       "ru": "Я иду́ в магази́н. 🛒 Пото́м я в магази́не. Ты понима́ешь? Куда́ — в магази́н, где — в магази́не! 😄 А Ди́ма идёт в шко́лу. Где он пото́м?",
       "tr": "Ya idú v magazín. Patóm ya v magazíni. Ty panimáyish? Kudá — v magazín, gdie — v magazíni! A Díma idiót v shkólu. Gdie on patóm?",
       "es": "Voy a la tienda; después estoy en la tienda. Dima va al colegio. ¿Dónde está después?"
      }
     ],
     "ideas": [
      {
       "ru": "В шко́ле.",
       "es": "En el colegio."
      },
      {
       "ru": "Он в шко́ле.",
       "es": "Está en el colegio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "В шко́ле",
       "claves": [
        "=школе"
       ],
       "resp": [
        {
         "ru": "Да! Он в шко́ле. 👍",
         "tr": "Da! On v shkóli.",
         "es": "¡Sí! Está en el colegio."
        }
       ],
       "ir": "coche"
      },
      {
       "etiqueta": "В шко́лу (error)",
       "claves": [
        "=школу"
       ],
       "resp": [
        {
         "ru": "Хм… Где? В шко́ле. Куда́? В шко́лу. 🙂",
         "tr": "Jm… Gdie? V shkóli. Kudá? V shkólu.",
         "es": "Mmm… ¿Dónde? в школе. ¿Adónde? в школу."
        }
       ],
       "ir": "coche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В шко́ле. 🙂",
         "tr": "V shkóli.",
         "es": "En el colegio."
        }
       ],
       "ir": "coche",
       "comodin": true
      }
     ]
    },
    {
     "id": "coche",
     "titulo": "Ir a pie o en vehículo",
     "bot": [
      {
       "ru": "Па́па е́дет на рабо́ту. 🚗 Он не идёт, он е́дет: на маши́не! А ты? Ты идёшь и́ли е́дешь на рабо́ту?",
       "tr": "Pápa yédit na rabótu. On nie idiót, on yédit: na mashíni! A ty? Ty idiósh íli yédish na rabótu?",
       "es": "Papá va al trabajo en coche: no va a pie, va en vehículo. ¿Y tú? ¿Vas a pie o en vehículo?"
      }
     ],
     "ideas": [
      {
       "ru": "Я иду́.",
       "es": "Voy a pie."
      },
      {
       "ru": "Я е́ду.",
       "es": "Voy en vehículo."
      },
      {
       "ru": "Я е́ду на метро́.",
       "es": "Voy en metro."
      },
      {
       "ru": "Я рабо́таю до́ма!",
       "es": "¡Trabajo en casa!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "En casa",
       "claves": [
        "=дома"
       ],
       "resp": [
        {
         "ru": "Ты никуда́ не е́дешь! 😄",
         "tr": "Ty nikudá nie yédish!",
         "es": "¡No vas a ninguna parte!"
        }
       ],
       "ir": "dacha"
      },
      {
       "etiqueta": "En vehículo",
       "claves": [
        "еду"
       ],
       "resp": [
        {
         "ru": "Е́дешь! 🚇",
         "tr": "Yédish!",
         "es": "¡En vehículo!"
        }
       ],
       "ir": "dacha",
       "dato": "Va al trabajo",
       "datoValor": "е́дет"
      },
      {
       "etiqueta": "A pie",
       "claves": [
        "иду"
       ],
       "resp": [
        {
         "ru": "Идёшь! Э́то хорошо́: спорт! 🚶",
         "tr": "Idiósh! Éta jarashó: sport!",
         "es": "¡A pie! Muy bien: ¡es deporte!"
        }
       ],
       "ir": "dacha",
       "dato": "Va al trabajo",
       "datoValor": "идёт пешко́м"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "dacha",
       "comodin": true
      }
     ]
    },
    {
     "id": "dacha",
     "titulo": "La dacha",
     "bot": [
      {
       "ru": "Сейча́с ба́бушка е́дет на да́чу. 🏡 Куда́ е́дет ба́бушка?",
       "tr": "Siichás bábushka yédit na dáchu. Kudá yédit bábushka?",
       "es": "Ahora la abuela va a la dacha. ¿Adónde va la abuela?"
      }
     ],
     "ideas": [
      {
       "ru": "На да́чу.",
       "es": "A la dacha."
      },
      {
       "ru": "Ба́бушка е́дет на да́чу.",
       "es": "La abuela va a la dacha."
      }
     ],
     "ramas": [
      {
       "etiqueta": "На да́чу",
       "claves": [
        "=дачу"
       ],
       "resp": [
        {
         "ru": "Да! На да́чу: там сад и цветы́. 🌻",
         "tr": "Da! Na dáchu: tam sat i tsvitý.",
         "es": "¡Sí! A la dacha: allí hay jardín y flores."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "На да́че (error)",
       "claves": [
        "=даче"
       ],
       "resp": [
        {
         "ru": "Куда́? На да́чу! (А где? На да́че.) 🙂",
         "tr": "Kudá? Na dáchu! (A gdie? Na dáchi.)",
         "es": "¿Adónde? на дачу (¿dónde? на даче)."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На да́чу! 🏡",
         "tr": "Na dáchu!",
         "es": "¡A la dacha!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y ahora?",
     "bot": [
      {
       "ru": "А пото́м? Куда́ ты идёшь ве́чером? 🌙",
       "tr": "A patóm? Kudá ty idiósh viéchiram?",
       "es": "¿Y después? ¿Adónde vas por la noche?"
      }
     ],
     "ideas": [
      {
       "ru": "Я иду́ в кино́.",
       "es": "Voy al cine."
      },
      {
       "ru": "Я иду́ в рестора́н.",
       "es": "Voy a un restaurante."
      },
      {
       "ru": "Я иду́ в бассе́йн.",
       "es": "Voy a la piscina."
      },
      {
       "ru": "Я иду́ домо́й.",
       "es": "Voy a casa."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Piscina",
       "claves": [
        "бассейн"
       ],
       "resp": [
        {
         "ru": "В бассе́йн? Я то́же люблю́ пла́вать! 🏊‍♀️",
         "tr": "V bassiéin? Ya tózhi liubliú plávat!",
         "es": "¿A la piscina? ¡A mí también me encanta nadar!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Casa",
       "claves": [
        "домой"
       ],
       "resp": [
        {
         "ru": "Домо́й — отли́чный план! 🏠",
         "tr": "Damói — atlíchnyi plan!",
         "es": "¡A casa: gran plan!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Adónde",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-ir2",
   "desde": 6,
   "titulo": "Хо́дишь и́ли идёшь?",
   "tituloEs": "Ahora o habitualmente",
   "resumen": "Ходи́ть / е́здить (habitual) y идти́ / е́хать (ahora)",
   "intro": "Masha te pregunta adónde vas seguido y adónde vas ahora. Habitual: хожу́, е́зжу. Ahora mismo: иду́, е́ду.",
   "inicio": "cine",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cine",
     "titulo": "El cine",
     "bot": [
      {
       "ru": "Я ча́сто хожу́ в кино́. 🎬 А ты? Ты ча́сто хо́дишь в кино́?",
       "tr": "Ya chásta jazhú v kinó. A ty? Ty chásta jódish v kinó?",
       "es": "Voy mucho al cine. ¿Y tú? ¿Vas seguido?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я ча́сто хожу́ в кино́.",
       "es": "Sí, voy seguido."
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      },
      {
       "ru": "Нет, я ре́дко хожу́ в кино́.",
       "es": "No, voy poco."
      },
      {
       "ru": "Я никогда́ не хожу́ в кино́.",
       "es": "Nunca voy al cine."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Poco / no",
       "claves": [
        "редко",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ре́дко? А я ча́сто! 😄",
         "tr": "Riétka? A ya chásta!",
         "es": "¿Poco? ¡Yo voy mucho!"
        }
       ],
       "ir": "teatro"
      },
      {
       "etiqueta": "Иду (error)",
       "claves": [
        "=часто иду",
        "=иногда иду"
       ],
       "resp": [
        {
         "ru": "Ча́сто — хожу́! «Иду́» — э́то сейча́с. 🙂",
         "tr": "Chásta — jazhú! «Idú» — éta siichás.",
         "es": "Habitual: хожу. Иду es ahora mismo."
        }
       ],
       "ir": "teatro"
      },
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? А фи́льмы до́ма? 📺",
         "tr": "Nikagdá? A fílmy dóma?",
         "es": "¿Nunca? ¿Y películas en casa?"
        }
       ],
       "ir": "teatro"
      },
      {
       "etiqueta": "Хожу",
       "claves": [
        "хожу",
        "=да",
        "иногда"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🍿",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "teatro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "teatro",
       "comodin": true
      }
     ]
    },
    {
     "id": "teatro",
     "titulo": "Ahora mismo",
     "bot": [
      {
       "ru": "А сейча́с я иду́ в теа́тр! 🎭 Куда́ я иду́ сейча́с?",
       "tr": "A siichás ya idú v tiátr! Kudá ya idú siichás?",
       "es": "Y ahora voy al teatro. ¿Adónde voy ahora?"
      }
     ],
     "ideas": [
      {
       "ru": "Ты идёшь в теа́тр.",
       "es": "Vas al teatro."
      },
      {
       "ru": "В теа́тр.",
       "es": "Al teatro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "В теа́тр",
       "claves": [
        "театр"
       ],
       "resp": [
        {
         "ru": "Да! 🎭",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "viajar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В теа́тр! 🎭",
         "tr": "V tiátr!",
         "es": "¡Al teatro!"
        }
       ],
       "ir": "viajar",
       "comodin": true
      }
     ]
    },
    {
     "id": "viajar",
     "titulo": "Viajar",
     "bot": [
      {
       "ru": "Ле́том мы е́здим на да́чу. 🏡 Ка́ждое ле́то! А ты? Куда́ ты е́здишь ле́том?",
       "tr": "Liétam my yézdim na dáchu. Kázhdayi liéta! A ty? Kudá ty yézdish liétam?",
       "es": "En verano vamos a la dacha. ¡Cada verano! ¿Y tú? ¿Adónde vas en verano?"
      }
     ],
     "ideas": [
      {
       "ru": "Я е́зжу на мо́ре.",
       "es": "Voy al mar."
      },
      {
       "ru": "Я е́зжу в дере́вню.",
       "es": "Voy al pueblo."
      },
      {
       "ru": "Я никуда́ не е́зжу.",
       "es": "No voy a ninguna parte."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mar",
       "claves": [
        "мор"
       ],
       "resp": [
        {
         "ru": "На мо́ре! 😍 Как хорошо́!",
         "tr": "Na móri! Kak jarashó!",
         "es": "¡Al mar! ¡Qué bien!"
        }
       ],
       "ir": "metro",
       "dato": "En verano va a",
       "datoValor": "на мо́ре"
      },
      {
       "etiqueta": "Ninguna parte",
       "claves": [
        "никуда"
       ],
       "resp": [
        {
         "ru": "Никуда́? До́ма то́же хорошо́! 😄",
         "tr": "Nikudá? Dóma tózhi jarashó!",
         "es": "¿A ninguna parte? ¡En casa también se está bien!"
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Езжу",
       "claves": [
        "езжу"
       ],
       "resp": [
        {
         "ru": "Отли́чно! ✈️",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "metro",
       "dato": "En verano va a"
      },
      {
       "etiqueta": "Еду (error)",
       "claves": [
        "=еду"
       ],
       "resp": [
        {
         "ru": "Ка́ждое ле́то — е́зжу! «Е́ду» — э́то сейча́с. 🙂",
         "tr": "Kázhdayi liéta — yézhzhu! «Yédu» — éta siichás.",
         "es": "Cada verano: езжу. Еду es ahora mismo."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "metro",
       "comodin": true
      }
     ]
    },
    {
     "id": "metro",
     "titulo": "El metro",
     "bot": [
      {
       "ru": "Я е́зжу в университе́т на метро́. 🚇 А сейча́с… я е́ду на метро́ и пишу́ тебе́! 😂 Что я де́лаю сейча́с?",
       "tr": "Ya yézhzhu v univirsitiét na mitró. A siichás… ya yédu na mitró i pishú tibié! Shto ya diélayu siichás?",
       "es": "Voy a la universidad en metro. Y ahora… ¡voy en metro y te escribo! ¿Qué hago ahora?"
      }
     ],
     "ideas": [
      {
       "ru": "Ты е́дешь на метро́.",
       "es": "Vas en metro."
      },
      {
       "ru": "Ты пи́шешь мне.",
       "es": "Me escribes."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Едешь",
       "claves": [
        "едешь"
       ],
       "resp": [
        {
         "ru": "Да! Е́ду сейча́с! 🚇",
         "tr": "Da! Yédu siichás!",
         "es": "¡Sí! ¡Voy ahora!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Ездишь (error)",
       "claves": [
        "ездишь"
       ],
       "resp": [
        {
         "ru": "Сейча́с — е́ду: е́дешь! А ка́ждый день — е́зжу. 🙂",
         "tr": "Siichás — yédu: yédish! A kázhdyi dien — yézhzhu.",
         "es": "Ahora mismo: едешь. Cada día: ездишь."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Escribe",
       "claves": [
        "пишешь"
       ],
       "resp": [
        {
         "ru": "Да! 😂",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я е́ду на метро́! 🚇",
         "tr": "Ya yédu na mitró!",
         "es": "¡Voy en metro!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А ты как е́здишь на рабо́ту и́ли на учёбу? 🚌🚇🚲",
       "tr": "A ty kak yézdish na rabótu íli na uchóbu?",
       "es": "¿Y tú cómo vas al trabajo o a estudiar?"
      }
     ],
     "ideas": [
      {
       "ru": "Я е́зжу на метро́.",
       "es": "Voy en metro."
      },
      {
       "ru": "Я е́зжу на авто́бусе.",
       "es": "Voy en autobús."
      },
      {
       "ru": "Я хожу́ пешко́м.",
       "es": "Voy a pie."
      },
      {
       "ru": "Я е́зжу на маши́не.",
       "es": "Voy en coche."
      }
     ],
     "ramas": [
      {
       "etiqueta": "A pie",
       "claves": [
        "пешком",
        "хожу"
       ],
       "resp": [
        {
         "ru": "Пешко́м! Молоде́ц! 🚶",
         "tr": "Pishkóm! Maladiéts!",
         "es": "¡A pie! ¡Bien hecho!"
        }
       ],
       "ir": "fin",
       "dato": "Va al trabajo",
       "datoValor": "пешко́м"
      },
      {
       "etiqueta": "Bici",
       "claves": [
        "велосипед"
       ],
       "resp": [
        {
         "ru": "На велосипе́де! 🚲 Здо́рово!",
         "tr": "Na vilasipiédi! Zdórava!",
         "es": "¡En bici! ¡Genial!"
        }
       ],
       "ir": "fin",
       "dato": "Va al trabajo",
       "datoValor": "на велосипе́де"
      },
      {
       "etiqueta": "Vehículo",
       "claves": [
        "езжу"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🚌",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "dato": "Va al trabajo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u6-escondite",
   "desde": 6,
   "titulo": "Где Ба́рсик?",
   "tituloEs": "El escondite",
   "resumen": "Adivinar dónde está algo: в, на, ря́дом, спра́ва, сле́ва",
   "intro": "Barsik se escondió otra vez. Pregúntale a Masha: «Он на кухне?», «Он в шкафу?»… hasta encontrarlo. Después te toca esconder algo a ti.",
   "inicio": "juego",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "juego",
     "titulo": "¿Dónde está?",
     "bot": [
      {
       "ru": "Ба́рсик опя́ть игра́ет! 🐈‍⬛ Он где-то в кварти́ре. Где он? Твой вопро́с: «Он на ку́хне?» 😄",
       "tr": "Bársik apiát igráyit! ⬛ On gdita v kvartíri. Gdie on? Tvoi vaprós: «On na kújni?»",
       "es": "Barsik está jugando otra vez: está en algún lugar del piso. ¿Dónde? Pregunta: «Он на кухне?»"
      }
     ],
     "ideas": [
      {
       "ru": "Он на ку́хне?",
       "es": "¿Está en la cocina?"
      },
      {
       "ru": "Он в шкафу́?",
       "es": "¿Está en el armario?"
      },
      {
       "ru": "Он на дива́не?",
       "es": "¿Está en el sofá?"
      },
      {
       "ru": "Он в ва́нной?",
       "es": "¿Está en el baño?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "En la cocina (acierta)",
       "claves": [
        "кухн"
       ],
       "resp": [
        {
         "ru": "Да! Он на ку́хне! 😂 Он ест колбасу́… опя́ть!",
         "tr": "Da! On na kújni! On yest kalbasú… apiát!",
         "es": "¡Sí! ¡Está en la cocina! Comiendo embutido… ¡otra vez!"
        }
       ],
       "ir": "pista"
      },
      {
       "etiqueta": "Armario",
       "claves": [
        "шкаф"
       ],
       "resp": [
        {
         "ru": "Нет, в шкафу́ его́ нет. 🙈",
         "tr": "Niet, v shkafú yivó niet.",
         "es": "No, en el armario no está."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Sofá / cama",
       "claves": [
        "диван",
        "кроват",
        "кресл"
       ],
       "resp": [
        {
         "ru": "Нет! Там спит Ди́ма. 😴",
         "tr": "Niet! Tam spit Díma.",
         "es": "¡No! Ahí duerme Dima."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Baño",
       "claves": [
        "ванн",
        "туалет"
       ],
       "resp": [
        {
         "ru": "В ва́нной? Нет! Ба́рсик не лю́бит во́ду! 😂",
         "tr": "V vánnai? Niet! Bársik nie liúbit vódu!",
         "es": "¿En el baño? ¡No! A Barsik no le gusta el agua."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Нет! 🙈 Он ест… 🍗",
         "tr": "Niet! On yest…",
         "es": "¡No! Está comiendo…"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… Он ест колбасу́. 🍗 Где колбаса́? 😉",
         "tr": "Jm… On yest kalbasú. Gdie kalbasá?",
         "es": "Mmm… Está comiendo embutido. ¿Dónde está el embutido?"
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "alRendirse": [
      {
       "ru": "Он на ку́хне! 😂 Он ест колбасу́… опя́ть!",
       "tr": "On na kújni! On yest kalbasú… apiát!",
       "es": "¡Está en la cocina! Comiendo embutido… ¡otra vez!"
      }
     ]
    },
    {
     "id": "pista",
     "titulo": "Dónde exactamente",
     "bot": [
      {
       "ru": "А где на ку́хне? На столе́? На полу́? 🤔",
       "tr": "A gdie na kújni? Na stalié? Na palú?",
       "es": "¿Y dónde en la cocina? ¿En la mesa? ¿En el suelo?"
      }
     ],
     "ideas": [
      {
       "ru": "На столе́!",
       "es": "¡En la mesa!"
      },
      {
       "ru": "На полу́.",
       "es": "En el suelo."
      },
      {
       "ru": "На окне́.",
       "es": "En la ventana."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mesa",
       "claves": [
        "стол"
       ],
       "resp": [
        {
         "ru": "Да, на столе́! 😱 Ба́рсик, нет!",
         "tr": "Da, na stalié! Bársik, niet!",
         "es": "¡Sí, en la mesa! ¡Barsik, no!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Suelo (пол → на полу́)",
       "claves": [
        "=полу"
       ],
       "resp": [
        {
         "ru": "Нет, он на столе́! 😱 А «на полу́» — отли́чно! 👍",
         "tr": "Niet, on na stalié! A «na palú» — atlíchna!",
         "es": "No, ¡en la mesa! (Y на полу está perfecto: -у́.)"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Пол (error)",
       "claves": [
        "=поле",
        "=пол"
       ],
       "resp": [
        {
         "ru": "На полу́! А он на столе́! 😱",
         "tr": "Na palú! A on na stalié!",
         "es": "En el suelo: на полу, forma especial en -у́. Pero no: ¡en la mesa!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На столе́! 😱",
         "tr": "Na stalié!",
         "es": "¡En la mesa!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "Tu escondite",
     "bot": [
      {
       "ru": "Тепе́рь ты! Где твоя́ су́мка сейча́с? Я ду́маю… она́ в шкафу́? 😄",
       "tr": "Tipiér ty! Gdie tvayá súmka siichás? Ya dúmayu… aná v shkafú?",
       "es": "¡Ahora tú! ¿Dónde está tu bolso ahora? ¡Lo adivino! ¿Está en el armario?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет.",
       "es": "No."
      },
      {
       "ru": "Да!",
       "es": "¡Sí!"
      },
      {
       "ru": "Нет, она́ на сту́ле.",
       "es": "No, está en la silla."
      },
      {
       "ru": "Нет, она́ в ко́мнате.",
       "es": "No, está en la habitación."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да"
       ],
       "resp": [
        {
         "ru": "Да?! Я молоде́ц! 🎉",
         "tr": "Da?! Ya maladiéts!",
         "es": "¡Bien! ¡Acerté!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Dice dónde",
       "claves": [
        "=в",
        "=на",
        "рядом"
       ],
       "resp": [
        {
         "ru": "Ой, нет! 😅",
         "tr": "Oi, niet!",
         "es": "¡Uy, no acerté!"
        }
       ],
       "ir": "fin",
       "dato": "Su bolso"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? Тогда́… на сту́ле? 🤔",
         "tr": "Niet? Tagdá… na stúli?",
         "es": "¿No? Entonces… ¿en la silla?"
        }
       ],
       "ir": "tu2"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu2",
     "titulo": "Segundo intento",
     "bot": [
      {
       "ru": "На сту́ле? И́ли на крова́ти? 😄 Где она́?",
       "tr": "Na stúli? Íli na kraváti? Gdie aná?",
       "es": "¿En la silla? ¿O cerca de la cama? ¡Dime dónde!"
      }
     ],
     "ideas": [
      {
       "ru": "Она́ на сту́ле.",
       "es": "Está en la silla."
      },
      {
       "ru": "Она́ в прихо́жей.",
       "es": "Está en la entrada."
      },
      {
       "ru": "Она́ на дива́не.",
       "es": "Está en el sofá."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Silla",
       "claves": [
        "стул"
       ],
       "resp": [
        {
         "ru": "Я зна́ю всё! 🎉😄",
         "tr": "Ya znáyu fsio!",
         "es": "¡Acerté!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 😅",
         "tr": "Paniátna!",
         "es": "¡Ya veo! No acerté."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😅",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-horario",
   "desde": 7,
   "titulo": "Во ско́лько?",
   "tituloEs": "¿A qué hora?",
   "resumen": "La hora y la rutina: в семь, в во́семь часо́в",
   "intro": "Masha te cuenta a qué hora hace cada cosa y te pregunta tus horarios. Puedes contestar con palabras o con números: «В семь», «В 7».",
   "inicio": "despertar",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "despertar",
     "titulo": "Levantarse",
     "bot": [
      {
       "ru": "Я обы́чно встаю́ в семь часо́в. ⏰ А ты? Во ско́лько ты встаёшь?",
       "tr": "Ya abýchna fstayú v siem chisóf. ⏰ A ty? Vo skólka ty fstayósh?",
       "es": "Normalmente me levanto a las siete. ¿Y tú? ¿A qué hora te levantas?"
      }
     ],
     "ideas": [
      {
       "ru": "В шесть.",
       "es": "A las seis."
      },
      {
       "ru": "Я встаю́ в во́семь часо́в.",
       "es": "Me levanto a las ocho."
      },
      {
       "ru": "В де́сять!",
       "es": "¡A las diez!"
      },
      {
       "ru": "По-ра́зному.",
       "es": "Depende."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Muy temprano",
       "claves": [
        "=5",
        "=6",
        "пять",
        "шест"
       ],
       "resp": [
        {
         "ru": "Так ра́но?! 😱 Ты молоде́ц!",
         "tr": "Tak rána?! Ty maladiéts!",
         "es": "¿¡Tan temprano!? ¡Bien hecho!"
        }
       ],
       "ir": "desayuno",
       "dato": "Se levanta"
      },
      {
       "etiqueta": "Tarde",
       "claves": [
        "=10",
        "=11",
        "=12",
        "десят",
        "одиннадцат",
        "двенадцат"
       ],
       "resp": [
        {
         "ru": "В де́сять? Как Ди́ма! 😂 Он то́же встаёт по́здно.",
         "tr": "V diésit? Kak Díma! On tózhi fstayót pózna.",
         "es": "¿A las diez? ¡Como Dima! Él también se levanta tarde."
        }
       ],
       "ir": "desayuno",
       "dato": "Se levanta"
      },
      {
       "etiqueta": "Hora normal",
       "claves": [
        "=7",
        "=8",
        "=9",
        "семь",
        "восемь",
        "девят"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Как я. 🙂",
         "tr": "Jarashó! Kak ya.",
         "es": "¡Bien! Como yo."
        }
       ],
       "ir": "desayuno",
       "dato": "Se levanta"
      },
      {
       "etiqueta": "Depende",
       "claves": [
        "разному",
        "иногда"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "desayuno"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "desayuno",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "В семь. Но я не люблю́ встава́ть ра́но! 😴",
       "tr": "V siem. No ya nie liubliú fstavát rána!",
       "es": "A las siete. ¡Pero no me gusta madrugar!"
      }
     ],
     "aTiTema": "dia_m"
    },
    {
     "id": "desayuno",
     "titulo": "Después",
     "bot": [
      {
       "ru": "Снача́ла я умыва́юсь, пото́м за́втракаю, а зате́м е́ду в университе́т. 🚇 Заня́тия начина́ются в де́вять. А у тебя́? Во ско́лько начина́ется рабо́та и́ли учёба?",
       "tr": "Snachála ya umyváyus, patóm záftrakayu, a zatiém yédu v univirsitiét. Zaniátiya nachináyutsa v diévit. A u tibiá? Vo skólka nachináyitsa rabóta íli uchóba?",
       "es": "Primero me lavo, luego desayuno y después voy a la universidad. Las clases empiezan a las nueve. ¿Y a ti? ¿A qué hora empiezas?"
      }
     ],
     "ideas": [
      {
       "ru": "В де́вять.",
       "es": "A las nueve."
      },
      {
       "ru": "Рабо́та начина́ется в во́семь.",
       "es": "El trabajo empieza a las ocho."
      },
      {
       "ru": "Я не рабо́таю.",
       "es": "No trabajo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No trabaja",
       "claves": [
        "=не работаю",
        "=не учусь"
       ],
       "resp": [
        {
         "ru": "Поня́тно! Ты свобо́ден! 😄",
         "tr": "Paniátna! Ty svabódin!",
         "es": "¡Ya veo! ¡Eres libre!"
        }
       ],
       "ir": "fin_dia"
      },
      {
       "etiqueta": "Una hora",
       "claves": [
        "=в"
       ],
       "resp": [
        {
         "ru": "Хорошо́! ⏰",
         "tr": "Jarashó! ⏰",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin_dia",
       "dato": "Empieza a trabajar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin_dia",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin_dia",
     "titulo": "Terminar",
     "bot": [
      {
       "ru": "Я зака́нчиваю в три, а пото́м обе́даю. 🍲 А когда́ ты зака́нчиваешь?",
       "tr": "Ya zakánchivayu v tri, a patóm abiédayu. A kagdá ty zakánchivayish?",
       "es": "Termino a las tres y después almuerzo. ¿Y tú cuándo terminas?"
      }
     ],
     "ideas": [
      {
       "ru": "В пять.",
       "es": "A las cinco."
      },
      {
       "ru": "Я зака́нчиваю в шесть часо́в.",
       "es": "Termino a las seis."
      },
      {
       "ru": "О́чень по́здно! 😩",
       "es": "¡Muy tarde!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tarde",
       "claves": [
        "поздно",
        "=8",
        "=9",
        "восемь",
        "девят"
       ],
       "resp": [
        {
         "ru": "По́здно! Ты мно́го рабо́таешь. 😟",
         "tr": "Pózna! Ty mnóga rabótayish.",
         "es": "¡Tarde! Trabajas mucho."
        }
       ],
       "ir": "dormir"
      },
      {
       "etiqueta": "Una hora",
       "claves": [
        "=в"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Пото́м — о́тдых! 😊",
         "tr": "Atlíchna! Patóm — óddyj!",
         "es": "¡Genial! ¡Después, a descansar!"
        }
       ],
       "ir": "dormir",
       "dato": "Termina"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "dormir",
       "comodin": true
      }
     ]
    },
    {
     "id": "dormir",
     "titulo": "Acostarse",
     "bot": [
      {
       "ru": "Ве́чером я ложу́сь спать в двена́дцать. 😴 Э́то по́здно, да? А ты?",
       "tr": "Viéchiram ya lazhús spat v dvináttsat. Éta pózna, da? A ty?",
       "es": "Por la noche me acuesto a las doce. Es tarde, ¿no? ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, по́здно!",
       "es": "¡Sí, es tarde!"
      },
      {
       "ru": "Я ложу́сь в оди́ннадцать.",
       "es": "Me acuesto a las once."
      },
      {
       "ru": "Я то́же ложу́сь по́здно.",
       "es": "Yo también me acuesto tarde."
      }
     ],
     "ramas": [
      {
       "etiqueta": "También tarde",
       "claves": [
        "тоже",
        "=1",
        "=2",
        "час"
       ],
       "resp": [
        {
         "ru": "Мы похо́жи! 🦉😂",
         "tr": "My pajózhi!",
         "es": "¡Somos como búhos!"
        }
       ],
       "ir": "hora"
      },
      {
       "etiqueta": "Una hora",
       "claves": [
        "=в",
        "ложусь"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 😴",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "hora"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=да",
        "поздно"
       ],
       "resp": [
        {
         "ru": "Я зна́ю! 😅",
         "tr": "Ya znáyu!",
         "es": "¡Ya lo sé!"
        }
       ],
       "ir": "hora"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😴",
         "tr": "",
         "es": "😴"
        }
       ],
       "ir": "hora",
       "comodin": true
      }
     ]
    },
    {
     "id": "hora",
     "titulo": "¿Qué hora es?",
     "bot": [
      {
       "ru": "Ой! Кото́рый час? 🕐 У меня́ часы́ не рабо́тают!",
       "tr": "Oi! Katóryi chas? U miniá chisý nie rabótayut!",
       "es": "¡Uy! ¿Qué hora es? ¡Mi reloj no funciona!"
      }
     ],
     "ideas": [
      {
       "ru": "Сейча́с три часа́.",
       "es": "Ahora son las tres."
      },
      {
       "ru": "Час.",
       "es": "La una."
      },
      {
       "ru": "Пять часо́в.",
       "es": "Las cinco."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не знаю",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Ничего́! Я смотрю́ в телефо́не… 📱",
         "tr": "Nichivó! Ya smatriú v tilifóni…",
         "es": "¡No pasa nada! Miro el teléfono."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Una hora",
       "claves": [
        "час",
        "=1",
        "=2",
        "=3",
        "=4",
        "=5",
        "=6",
        "=7",
        "=8",
        "=9",
        "=10",
        "=11",
        "=12"
       ],
       "resp": [
        {
         "ru": "Спаси́бо! 😊 Ой, я опа́здываю! 🏃‍♀️",
         "tr": "Spasíba! Oi, ya apázdyvayu!",
         "es": "¡Gracias! ¡Uy, llego tarde!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Спаси́бо! 😊 Ой, я опа́здываю! 🏃‍♀️",
         "tr": "Spasíba! Oi, ya apázdyvayu!",
         "es": "¡Gracias! ¡Uy, llego tarde!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Пока́, {nombre}! Я спешу́! 🏃‍♀️",
       "tr": "Paká, {nombre}! Ya spishú!",
       "es": "¡Chau, {nombre}! ¡Tengo prisa!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-semana",
   "desde": 7,
   "titulo": "Моя́ неде́ля",
   "tituloEs": "Mi semana",
   "resumen": "Los días de la semana: в понеде́льник, в суббо́ту",
   "intro": "Masha te cuenta su semana y te pregunta qué haces cada día.",
   "inicio": "hoy",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hoy",
     "titulo": "¿Qué día es?",
     "bot": [
      {
       "ru": "Како́й сего́дня день? 📅 Я всегда́ забыва́ю! 😅",
       "tr": "Kakói sivódnia dien? Ya fsigdá zabyváyu!",
       "es": "¿Qué día es hoy? ¡Siempre me olvido!"
      }
     ],
     "ideas": [
      {
       "ru": "Сего́дня понеде́льник.",
       "es": "Hoy es lunes."
      },
      {
       "ru": "Сего́дня пя́тница!",
       "es": "¡Hoy es viernes!"
      },
      {
       "ru": "Сего́дня суббо́та.",
       "es": "Hoy es sábado."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Viernes",
       "claves": [
        "пятниц"
       ],
       "resp": [
        {
         "ru": "Пя́тница! Отли́чно! 🎉",
         "tr": "Piátnitsa! Atlíchna!",
         "es": "¡Viernes! ¡Genial!"
        }
       ],
       "ir": "lunes"
      },
      {
       "etiqueta": "Fin de semana",
       "claves": [
        "суббот",
        "воскресен"
       ],
       "resp": [
        {
         "ru": "Выходно́й! 😍",
         "tr": "Vyjadnói!",
         "es": "¡Día libre!"
        }
       ],
       "ir": "lunes"
      },
      {
       "etiqueta": "Lunes",
       "claves": [
        "понедельник"
       ],
       "resp": [
        {
         "ru": "Понеде́льник… 😩 Тру́дный день!",
         "tr": "Panidiélnik… Trúdnyi dien!",
         "es": "Lunes… ¡Un día difícil!"
        }
       ],
       "ir": "lunes"
      },
      {
       "etiqueta": "Otro día",
       "claves": [
        "вторник",
        "сред",
        "четверг"
       ],
       "resp": [
        {
         "ru": "Спаси́бо! 😊",
         "tr": "Spasíba!",
         "es": "¡Gracias!"
        }
       ],
       "ir": "lunes"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Спаси́бо! 😊",
         "tr": "Spasíba!",
         "es": "¡Gracias!"
        }
       ],
       "ir": "lunes",
       "comodin": true
      }
     ]
    },
    {
     "id": "lunes",
     "titulo": "Lunes",
     "bot": [
      {
       "ru": "В понеде́льник, во вто́рник и в сре́ду я учу́сь до трёх. 📚 А в четве́рг у меня́ трениро́вка: я пла́ваю. 🏊‍♀️ Что ты де́лаешь в четве́рг?",
       "tr": "V panidiélnik, vo ftórnik i v sriédu ya uchús do trioj. A v chitviérk u miniá trinirófka: ya plávayu. Shto ty diélayish v chitviérk?",
       "es": "El lunes, el martes y el miércoles estudio hasta las tres. Y el jueves tengo entrenamiento: nado. ¿Qué haces el jueves?"
      }
     ],
     "ideas": [
      {
       "ru": "В четве́рг я рабо́таю.",
       "es": "El jueves trabajo."
      },
      {
       "ru": "В четве́рг я хожу́ в бассе́йн.",
       "es": "El jueves voy a la piscina."
      },
      {
       "ru": "Я учу́ ру́сский!",
       "es": "¡Estudio ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 📚",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "sabado"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "работаю",
        "учусь",
        "хожу",
        "езжу",
        "играю",
        "отдыхаю",
        "смотрю",
        "занимаюсь",
        "плаваю",
        "гуляю"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "sabado",
       "dato": "Los jueves"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "sabado",
       "comodin": true
      }
     ]
    },
    {
     "id": "sabado",
     "titulo": "El sábado",
     "bot": [
      {
       "ru": "А в суббо́ту я сплю до десяти́! 😴 Пото́м я и Лу́кас гуля́ем. А ты? Что ты де́лаешь в суббо́ту?",
       "tr": "A v subbótu ya spliu do disití! Patóm ya i Lúkas guliáyim. A ty? Shto ty diélayish v subbótu?",
       "es": "Y el sábado duermo hasta las diez. Después paseo con Lucas. ¿Y tú? ¿Qué haces el sábado?"
      }
     ],
     "ideas": [
      {
       "ru": "В суббо́ту я отдыха́ю.",
       "es": "El sábado descanso."
      },
      {
       "ru": "Я сплю до́лго!",
       "es": "¡Duermo mucho!"
      },
      {
       "ru": "Я встреча́юсь с друзья́ми.",
       "es": "Quedo con amigos."
      },
      {
       "ru": "В суббо́ту я то́же рабо́таю. 😩",
       "es": "El sábado también trabajo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Trabaja",
       "claves": [
        "работаю"
       ],
       "resp": [
        {
         "ru": "И в суббо́ту?! Бе́дный! 😟",
         "tr": "I v subbótu?! Biédnyi!",
         "es": "¿¡También el sábado!? ¡Pobre!"
        }
       ],
       "ir": "domingo",
       "dato": "Los sábados"
      },
      {
       "etiqueta": "Duerme",
       "claves": [
        "сплю"
       ],
       "resp": [
        {
         "ru": "Как я! 😴",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "domingo",
       "dato": "Los sábados"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "отдыхаю",
        "гуляю",
        "встречаюсь",
        "смотрю",
        "хожу",
        "езжу",
        "играю",
        "читаю",
        "готовлю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "domingo",
       "dato": "Los sábados"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 🙂",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "domingo",
       "comodin": true
      }
     ]
    },
    {
     "id": "domingo",
     "titulo": "El domingo",
     "bot": [
      {
       "ru": "А в воскресе́нье вся семья́ обе́дает вме́сте. 🍲 Ба́бушка гото́вит блины́! Когда́ ты ешь блины́? Никогда́? 😄",
       "tr": "A v vaskrisiényi fsia simyá abiédayit vmiésti. Bábushka gatóvit bliný! Kagdá ty yesh bliný? Nikagdá?",
       "es": "Y el domingo toda la familia almuerza junta. ¡Hace blinis! ¿Cuándo comes blinis? ¿Nunca?"
      }
     ],
     "ideas": [
      {
       "ru": "Никогда́!",
       "es": "¡Nunca!"
      },
      {
       "ru": "Я никогда́ не ем блины́.",
       "es": "Nunca como blinis."
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́?! 😱 Тогда́ в воскресе́нье — блины́! 🥞",
         "tr": "Nikagdá?! Tagdá v vaskrisiényi — bliný!",
         "es": "¿¡Nunca!? ¡Entonces el domingo, blinis!"
        }
       ],
       "ir": "dia_fav"
      },
      {
       "etiqueta": "A veces",
       "claves": [
        "иногда",
        "часто",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🥞",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "dia_fav"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "🥞",
         "tr": "",
         "es": "🥞"
        }
       ],
       "ir": "dia_fav",
       "comodin": true
      }
     ]
    },
    {
     "id": "dia_fav",
     "titulo": "Día favorito",
     "bot": [
      {
       "ru": "Како́й день неде́ли ты лю́бишь? Я — пя́тницу! 🎉",
       "tr": "Kakói dien nidiéli ty liúbish? Ya — piátnitsu!",
       "es": "¿Qué día de la semana te gusta? ¡A mí, el viernes!"
      }
     ],
     "ideas": [
      {
       "ru": "Я люблю́ суббо́ту.",
       "es": "Me gusta el sábado."
      },
      {
       "ru": "Пя́тницу!",
       "es": "¡El viernes!"
      },
      {
       "ru": "Воскресе́нье.",
       "es": "El domingo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Viernes",
       "claves": [
        "пятниц"
       ],
       "resp": [
        {
         "ru": "Как я! 🎉",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Сре́да → сре́ду",
       "claves": [
        "=среду",
        "=субботу",
        "=воскресенье",
        "=понедельник",
        "=вторник",
        "=четверг"
       ],
       "resp": [
        {
         "ru": "Хоро́ший день! 😊",
         "tr": "Jaróshii dien!",
         "es": "¡Buen día!"
        }
       ],
       "ir": "fin",
       "dato": "Día favorito"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=суббота",
        "=пятница",
        "=среда"
       ],
       "resp": [
        {
         "ru": "Я люблю́ суббо́ту, пя́тницу! 🙂",
         "tr": "Ya liubliú subbótu, piátnitsu!",
         "es": "Me gusta… va en acusativo: субботу, пятницу."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́ший день! 😊",
         "tr": "Jaróshii dien!",
         "es": "¡Buen día!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Хоро́шей неде́ли, {nombre}! 👋",
       "tr": "Jaróshii nidiéli, {nombre}!",
       "es": "¡Buena semana, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-estaciones",
   "desde": 7,
   "titulo": "Вре́мя го́да",
   "tituloEs": "Estaciones y meses",
   "resumen": "Зимо́й, ле́том; в ма́е, в декабре́; tu cumpleaños",
   "intro": "Masha te habla del invierno de Moscú y te pregunta qué estación prefieres y cuándo es tu cumpleaños.",
   "inicio": "invierno",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "invierno",
     "titulo": "El invierno",
     "bot": [
      {
       "ru": "Зимо́й в Москве́ о́чень хо́лодно: ми́нус два́дцать! 🥶❄️ А у тебя́ зимо́й хо́лодно?",
       "tr": "Zimói v Maskvié óchin jóladna: mínus dváttsat! A u tibiá zimói jóladna?",
       "es": "En invierno en Moscú hace mucho frío: ¡veinte bajo cero! ¿Y donde vives hace frío en invierno?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, не о́чень.",
       "es": "No mucho."
      },
      {
       "ru": "Да, хо́лодно.",
       "es": "Sí, hace frío."
      },
      {
       "ru": "Нет, у нас зимо́й тепло́.",
       "es": "No, aquí en invierno hace buen tiempo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No / templado",
       "claves": [
        "=нет",
        "тепло",
        "=не очень"
       ],
       "resp": [
        {
         "ru": "Как я тебе́ зави́дую! 😅",
         "tr": "Kak ya tibié zavíduyu!",
         "es": "¡Qué envidia!"
        }
       ],
       "ir": "estacion"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "холодно"
       ],
       "resp": [
        {
         "ru": "Мы похо́жи! 🥶",
         "tr": "My pajózhi!",
         "es": "¡Nos parecemos!"
        }
       ],
       "ir": "estacion"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "estacion",
       "comodin": true
      }
     ]
    },
    {
     "id": "estacion",
     "titulo": "Estación favorita",
     "bot": [
      {
       "ru": "Я люблю́ ле́то: ле́том мы е́здим на да́чу! ☀️ А ты? Како́е вре́мя го́да ты лю́бишь?",
       "tr": "Ya liubliú liéta: liétam my yézdim na dáchu! A ty? Kakóyi vriémia góda ty liúbish?",
       "es": "Me gusta el verano: en verano vamos a la dacha. ¿Y a ti? ¿Qué estación te gusta?"
      }
     ],
     "ideas": [
      {
       "ru": "Я люблю́ ле́то.",
       "es": "Me gusta el verano."
      },
      {
       "ru": "Весну́.",
       "es": "La primavera."
      },
      {
       "ru": "О́сень.",
       "es": "El otoño."
      },
      {
       "ru": "Зи́му!",
       "es": "¡El invierno!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Invierno",
       "claves": [
        "=зиму"
       ],
       "resp": [
        {
         "ru": "Зи́му?! 😱 Москва́ — твой го́род! 😂",
         "tr": "Zímu?! Maskvá — tvoi górat!",
         "es": "¿¡El invierno!? ¡Te encantaría Moscú!"
        }
       ],
       "ir": "cumple",
       "dato": "Estación favorita",
       "datoValor": "зима́"
      },
      {
       "etiqueta": "Зима (error)",
       "claves": [
        "=зима",
        "=весна"
       ],
       "resp": [
        {
         "ru": "Я люблю́ зи́му, весну́! 🙂",
         "tr": "Ya liubliú zímu, visnú!",
         "es": "Me gusta… en acusativo: зиму, весну."
        }
       ],
       "ir": "cumple"
      },
      {
       "etiqueta": "Otra",
       "claves": [
        "=лето",
        "=весну",
        "=осень"
       ],
       "resp": [
        {
         "ru": "Хоро́ший вы́бор! 😊",
         "tr": "Jaróshii výbar!",
         "es": "¡Buena elección!"
        }
       ],
       "ir": "cumple",
       "dato": "Estación favorita"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "cumple",
       "comodin": true
      }
     ]
    },
    {
     "id": "cumple",
     "titulo": "Tu cumpleaños",
     "bot": [
      {
       "ru": "Мой день рожде́ния в ма́е. 🎂 А когда́ твой день рожде́ния?",
       "tr": "Moi dien razhdiéniya v máyi. A kagdá tvoi dien razhdiéniya?",
       "es": "Mi cumpleaños es en mayo. ¿Y cuándo es el tuyo?"
      }
     ],
     "ideas": [
      {
       "ru": "В январе́.",
       "es": "En enero."
      },
      {
       "ru": "В ию́ле.",
       "es": "En julio."
      },
      {
       "ru": "В октябре́.",
       "es": "En octubre."
      },
      {
       "ru": "Мой день рожде́ния в декабре́.",
       "es": "Mi cumpleaños es en diciembre."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mayo",
       "claves": [
        "=мае"
       ],
       "resp": [
        {
         "ru": "Как у меня́! 🎉",
         "tr": "Kak u miniá!",
         "es": "¡Como el mío!"
        }
       ],
       "ir": "navidad",
       "dato": "Cumpleaños",
       "datoValor": "в ма́е"
      },
      {
       "etiqueta": "Un mes en prepositivo",
       "claves": [
        "=январе",
        "=феврале",
        "=марте",
        "=апреле",
        "=июне",
        "=июле",
        "=августе",
        "=сентябре",
        "=октябре",
        "=ноябре",
        "=декабре"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "navidad",
       "dato": "Cumpleaños"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "январь",
        "февраль",
        "=март",
        "апрель",
        "=май",
        "июнь",
        "июль",
        "=август",
        "сентябрь",
        "октябрь",
        "ноябрь",
        "декабрь"
       ],
       "resp": [
        {
         "ru": "Когда́? В январе́, в ию́ле! 🙂",
         "tr": "Kagdá? V yinvarié, v iyúli!",
         "es": "¿Cuándo? в + prepositivo: в январе, в июле."
        }
       ],
       "ir": "navidad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "navidad",
       "comodin": true
      }
     ]
    },
    {
     "id": "navidad",
     "titulo": "Navidad",
     "bot": [
      {
       "ru": "В Росси́и Рождество́ седьмо́го января́. 🎄 А у тебя́? Когда́ Рождество́?",
       "tr": "V Rassíi Razhdistvó sidmóga yinvariá. A u tibiá? Kagdá Razhdistvó?",
       "es": "En Rusia la Navidad es el 7 de enero. ¿Y donde vives? ¿Cuándo es?"
      }
     ],
     "ideas": [
      {
       "ru": "В декабре́.",
       "es": "En diciembre."
      },
      {
       "ru": "Два́дцать пя́того декабря́.",
       "es": "El 25 de diciembre."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Diciembre",
       "claves": [
        "декабр",
        "25"
       ],
       "resp": [
        {
         "ru": "В декабре́! Интере́сно! 🎄",
         "tr": "V dikabrié! Intiriésna!",
         "es": "¡En diciembre! ¡Interesante!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🎄",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-ocio",
   "desde": 7,
   "titulo": "Свобо́дное вре́мя",
   "tituloEs": "Jugar y tocar",
   "resumen": "Игра́ть в (deportes y juegos) e игра́ть на (instrumentos)",
   "intro": "Masha te pregunta qué juegas y qué tocas. Recuerda: игра́ть в футбо́л, pero игра́ть на гита́ре.",
   "inicio": "dima",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "dima",
     "titulo": "Dima juega",
     "bot": [
      {
       "ru": "Ди́ма игра́ет в футбо́л ка́ждую суббо́ту. ⚽ А ты? Ты игра́ешь в футбо́л? В те́ннис?",
       "tr": "Díma igráyit v fudból kázhduyu subbótu. A ty? Ty igráyish v fudból? V ténnis?",
       "es": "Dima juega al fútbol cada sábado. ¿Y tú? ¿Juegas al fútbol? ¿Al tenis?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я игра́ю в футбо́л.",
       "es": "Sí, juego al fútbol."
      },
      {
       "ru": "Я игра́ю в те́ннис.",
       "es": "Juego al tenis."
      },
      {
       "ru": "Я игра́ю в ша́хматы.",
       "es": "Juego al ajedrez."
      },
      {
       "ru": "Нет, я не игра́ю.",
       "es": "No, no juego."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ajedrez",
       "claves": [
        "шахмат"
       ],
       "resp": [
        {
         "ru": "В ша́хматы? 😮 Ру́сская игра́! ♟️",
         "tr": "V shájmaty? Rússkaya igrá!",
         "es": "¿Al ajedrez? ¡El juego ruso!"
        }
       ],
       "ir": "instrumento",
       "dato": "Juega a",
       "datoValor": "ша́хматы"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не играю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ничего́! 🙂",
         "tr": "Nichivó!",
         "es": "¡No pasa nada!"
        }
       ],
       "ir": "instrumento"
      },
      {
       "etiqueta": "Juega en + acusativo",
       "claves": [
        "=в"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 💪",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "instrumento",
       "dato": "Juega a"
      },
      {
       "etiqueta": "Sin в (error)",
       "claves": [
        "играю футбол",
        "играю теннис"
       ],
       "resp": [
        {
         "ru": "Игра́ю в футбо́л: с «в»! 🙂",
         "tr": "Igráyu v fudból: s «v»!",
         "es": "Juego a algo: играю в футбол (con в)."
        }
       ],
       "ir": "instrumento"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "instrumento",
       "comodin": true
      }
     ]
    },
    {
     "id": "instrumento",
     "titulo": "Tocar",
     "bot": [
      {
       "ru": "А я игра́ю на гита́ре! 🎸 Немно́го. 😅 А ты игра́ешь на чём-нибудь? На пиани́но?",
       "tr": "A ya igráyu na guitári! Nimnóga. A ty igráyish na chómnibut? Na pianína?",
       "es": "Yo toco la guitarra. Un poco. ¿Y tú tocas algo? ¿El piano?"
      }
     ],
     "ideas": [
      {
       "ru": "Я игра́ю на пиани́но.",
       "es": "Toco el piano."
      },
      {
       "ru": "Я игра́ю на гита́ре.",
       "es": "Toco la guitarra."
      },
      {
       "ru": "Нет, я не игра́ю.",
       "es": "No toco nada."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Guitarra",
       "claves": [
        "гитар"
       ],
       "resp": [
        {
         "ru": "Как я! Мы игра́ем вме́сте? 🎸🎸",
         "tr": "Kak ya! My igráyim vmiésti?",
         "es": "¡Como yo! ¿Tocamos juntos?"
        }
       ],
       "ir": "lucas",
       "dato": "Toca",
       "datoValor": "гита́ра"
      },
      {
       "etiqueta": "Toca",
       "claves": [
        "=на"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 🎶",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "lucas",
       "dato": "Toca"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не играю",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ничего́! Слу́шать му́зыку то́же хорошо́! 🎧",
         "tr": "Nichivó! Slúshat múzyku tózhi jarashó!",
         "es": "¡No pasa nada! Escuchar música también está bien."
        }
       ],
       "ir": "lucas"
      },
      {
       "etiqueta": "В + instrumento (error)",
       "claves": [
        "=в гитару",
        "=в пианино"
       ],
       "resp": [
        {
         "ru": "На гита́ре, на пиани́но: инструме́нт — с «на»! 🙂",
         "tr": "Na guitári, na pianína: instrumiént — s «na»!",
         "es": "Instrumento: играть на + prepositivo (на гитаре)."
        }
       ],
       "ir": "lucas"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "lucas",
       "comodin": true
      }
     ]
    },
    {
     "id": "lucas",
     "titulo": "Lucas",
     "bot": [
      {
       "ru": "Лу́кас и О́льга Петро́вна игра́ют в ша́хматы. Она́ всегда́ выи́грывает! 😂 Во что игра́ет Лу́кас?",
       "tr": "Lúkas i Ólga Pitróvna igráyut v shájmaty. Aná fsigdá vyígryvayit! Vo shto igráyit Lúkas?",
       "es": "Lucas juega al ajedrez con Olga Petrovna. ¡Ella siempre gana! ¿A qué juega Lucas?"
      }
     ],
     "ideas": [
      {
       "ru": "В ша́хматы.",
       "es": "Al ajedrez."
      },
      {
       "ru": "Лу́кас игра́ет в ша́хматы.",
       "es": "Lucas juega al ajedrez."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ajedrez",
       "claves": [
        "шахмат"
       ],
       "resp": [
        {
         "ru": "Да! И всегда́ прои́грывает! 😂",
         "tr": "Da! I fsigdá praígryvayit!",
         "es": "¡Sí! ¡Y siempre pierde!"
        }
       ],
       "ir": "libre"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В ша́хматы! ♟️",
         "tr": "V shájmaty!",
         "es": "¡Al ajedrez!"
        }
       ],
       "ir": "libre",
       "comodin": true
      }
     ]
    },
    {
     "id": "libre",
     "titulo": "Tiempo libre",
     "bot": [
      {
       "ru": "А что ты обы́чно де́лаешь в свобо́дное вре́мя? 🌿",
       "tr": "A shto ty abýchna diélayish v svabódnayi vriémia?",
       "es": "¿Y qué haces normalmente en tu tiempo libre?"
      }
     ],
     "ideas": [
      {
       "ru": "Я чита́ю.",
       "es": "Leo."
      },
      {
       "ru": "Я гуля́ю.",
       "es": "Paseo."
      },
      {
       "ru": "Я хожу́ в кино́.",
       "es": "Voy al cine."
      },
      {
       "ru": "Я учу́ ру́сский!",
       "es": "¡Estudio ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! Э́то лу́чшее заня́тие! 😄",
         "tr": "Maladiéts! Éta lúchshiyi zaniátiyi!",
         "es": "¡Bien hecho! ¡El mejor hobby!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "читаю",
        "гуляю",
        "хожу",
        "смотрю",
        "играю",
        "слушаю",
        "готовлю",
        "рисую",
        "танцую",
        "сплю",
        "отдыхаю",
        "плаваю",
        "бегаю"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "dato": "Tiempo libre"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-frecuencia",
   "desde": 7,
   "titulo": "Как ча́сто?",
   "tituloEs": "¿Con qué frecuencia?",
   "resumen": "Ка́ждый день, раз в неде́лю, два ра́за, иногда́, никогда́ не",
   "intro": "Masha quiere saber cada cuánto haces algunas cosas. Practica каждый день, раз в неделю, два раза в месяц…",
   "inicio": "cafe",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cafe",
     "titulo": "Café",
     "bot": [
      {
       "ru": "Я пью ко́фе три ра́за в день! ☕☕☕ А ты? Ско́лько раз в день ты пьёшь ко́фе?",
       "tr": "Ya pyu kófi tri ráza v dien! A ty? Skólka ras v dien ty pyosh kófi?",
       "es": "Tomo café tres veces al día. ¿Y tú? ¿Cuántas veces al día?"
      }
     ],
     "ideas": [
      {
       "ru": "Оди́н раз.",
       "es": "Una vez."
      },
      {
       "ru": "Два ра́за в день.",
       "es": "Dos veces al día."
      },
      {
       "ru": "Я не пью ко́фе.",
       "es": "No tomo café."
      },
      {
       "ru": "Пять раз! 😅",
       "es": "¡Cinco veces!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mucho",
       "claves": [
        "=пять",
        "=шесть",
        "=5",
        "=6",
        "много"
       ],
       "resp": [
        {
         "ru": "Пять?! 😱 Бо́льше, чем я!",
         "tr": "Piat?! Bólshi, chem ya!",
         "es": "¿¡Cinco!? ¡Más que yo!"
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=не пью",
        "никогда"
       ],
       "resp": [
        {
         "ru": "Совсе́м? 😮 А чай?",
         "tr": "Safsiém? A chai?",
         "es": "¿Nada? ¿Y té?"
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "Раз / ра́за",
       "claves": [
        "раз"
       ],
       "resp": [
        {
         "ru": "Хорошо́! ☕",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "deporte",
       "dato": "Café al día"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! ☕",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "deporte",
       "comodin": true
      }
     ]
    },
    {
     "id": "deporte",
     "titulo": "Deporte",
     "bot": [
      {
       "ru": "Я пла́ваю два ра́за в неде́лю: во вто́рник и в четве́рг. 🏊‍♀️ А ты? Как ча́сто ты занима́ешься спо́ртом?",
       "tr": "Ya plávayu dva ráza v nidiéliu: vo ftórnik i v chitviérk. A ty? Kak chásta ty zanimáyishsia spórtam?",
       "es": "Nado dos veces por semana. ¿Y tú? ¿Cada cuánto haces deporte?"
      }
     ],
     "ideas": [
      {
       "ru": "Ка́ждый день.",
       "es": "Todos los días."
      },
      {
       "ru": "Раз в неде́лю.",
       "es": "Una vez por semana."
      },
      {
       "ru": "Ре́дко.",
       "es": "Pocas veces."
      },
      {
       "ru": "Никогда́! 😂",
       "es": "¡Nunca!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Todos los días",
       "claves": [
        "каждый день",
        "ежедневно"
       ],
       "resp": [
        {
         "ru": "Ка́ждый день?! Ты молоде́ц! 💪",
         "tr": "Kázhdyi dien?! Ty maladiéts!",
         "es": "¿¡Todos los días!? ¡Eres un atleta!"
        }
       ],
       "ir": "cine",
       "dato": "Deporte"
      },
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? 😂 Как Ди́ма… нет, Ди́ма игра́ет в футбо́л.",
         "tr": "Nikagdá? Kak Díma… niet, Díma igráyit v fudból.",
         "es": "¿Nunca? ¡Como Dima… no, Dima juega al fútbol!"
        }
       ],
       "ir": "cine"
      },
      {
       "etiqueta": "Raramente",
       "claves": [
        "редко",
        "иногда"
       ],
       "resp": [
        {
         "ru": "Иногда́ — э́то то́же хорошо́! 🙂",
         "tr": "Inagdá — éta tózhi jarashó!",
         "es": "¡A veces también está bien!"
        }
       ],
       "ir": "cine",
       "dato": "Deporte"
      },
      {
       "etiqueta": "Раз в …",
       "claves": [
        "раз"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 💪",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "cine",
       "dato": "Deporte"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "cine",
       "comodin": true
      }
     ]
    },
    {
     "id": "cine",
     "titulo": "Cine",
     "bot": [
      {
       "ru": "А в кино́ ты хо́дишь ча́сто? Я — раз в ме́сяц. 🎬",
       "tr": "A v kinó ty jódish chásta? Ya — ras v miésits.",
       "es": "¿Y vas seguido al cine? Yo, una vez al mes."
      }
     ],
     "ideas": [
      {
       "ru": "Я хожу́ в кино́ раз в неде́лю.",
       "es": "Voy al cine una vez por semana."
      },
      {
       "ru": "Ре́дко.",
       "es": "Pocas veces."
      },
      {
       "ru": "Я никогда́ не хожу́ в кино́.",
       "es": "Nunca voy al cine."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca sin не (error)",
       "claves": [
        "=никогда хожу"
       ],
       "resp": [
        {
         "ru": "Никогда́ не хожу́: с «никогда́» — «не»! 🙂",
         "tr": "Nikagdá nie jazhú: s «nikagdá» — «nie»!",
         "es": "Con никогда va не: никогда не хожу."
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Никогда́? А фи́льмы до́ма? 📺",
         "tr": "Nikagdá? A fílmy dóma?",
         "es": "¿Nunca? ¿Y películas en casa?"
        }
       ],
       "ir": "abuela"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "раз",
        "редко",
        "часто",
        "иногда",
        "каждую"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🍿",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "abuela",
       "dato": "Cine"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🍿",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "abuela",
       "comodin": true
      }
     ]
    },
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "Я звоню́ ба́бушке ка́ждый день. 📞 А ты? Как ча́сто ты звони́шь роди́телям?",
       "tr": "Ya zvaniú bábushki kázhdyi dien. A ty? Kak chásta ty zvanísh radítilim?",
       "es": "Llamo a la abuela todos los días. ¿Y tú? ¿Cada cuánto llamas a tus padres?"
      }
     ],
     "ideas": [
      {
       "ru": "Ка́ждый день.",
       "es": "Todos los días."
      },
      {
       "ru": "Раз в неде́лю.",
       "es": "Una vez por semana."
      },
      {
       "ru": "Иногда́.",
       "es": "A veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Seguido",
       "claves": [
        "каждый",
        "часто"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! Роди́тели ра́ды! 😊",
         "tr": "Maladiéts! Radítili rády!",
         "es": "¡Bien hecho! ¡Tus padres estarán contentos!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "раз",
        "иногда",
        "редко"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 📞",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 📞",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u7-cita",
   "desde": 7,
   "titulo": "Встре́ча",
   "tituloEs": "Quedar",
   "resumen": "Hacer un plan: qué día, a qué hora, dónde",
   "intro": "Masha quiere quedar contigo. Pónganse de acuerdo: qué día, a qué hora y dónde.",
   "inicio": "libre",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "libre",
     "titulo": "¿Estás libre?",
     "bot": [
      {
       "ru": "Ты {свобо́ден/свобо́дна} в суббо́ту? 🙂",
       "tr": "Ty {svabódin/svabódna} v subbótu?",
       "es": "Oye, ¿estás libre el sábado?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, свобо́ден.",
       "es": "Sí, estoy libre."
      },
      {
       "ru": "Да, свобо́дна.",
       "es": "Sí, estoy libre (mujer)."
      },
      {
       "ru": "Нет, я за́нят.",
       "es": "No, estoy ocupado."
      },
      {
       "ru": "Нет, я занята́.",
       "es": "No, estoy ocupada."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Libre",
       "claves": [
        "свобод"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "plan",
       "genero": {
        "свободен": "m",
        "свободна": "f"
       }
      },
      {
       "etiqueta": "Ocupado",
       "claves": [
        "занят"
       ],
       "resp": [
        {
         "ru": "Жаль! А в воскресе́нье? 🙂",
         "tr": "Zhal! A v vaskrisiényi?",
         "es": "¡Qué pena! ¿Y el domingo?"
        }
       ],
       "ir": "plan",
       "genero": {
        "занят": "m",
        "занята": "f"
       }
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "plan",
       "comodin": true
      }
     ]
    },
    {
     "id": "plan",
     "titulo": "El plan",
     "bot": [
      {
       "ru": "Мы идём в кино́? И́ли в кафе́? ☕🎬",
       "tr": "My idióm v kinó? Íli v kafé?",
       "es": "¿Vamos al cine? ¿O a una cafetería?"
      }
     ],
     "ideas": [
      {
       "ru": "В кино́!",
       "es": "¡Al cine!"
      },
      {
       "ru": "В кафе́.",
       "es": "A una cafetería."
      },
      {
       "ru": "В парк!",
       "es": "¡Al parque!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Cine",
       "claves": [
        "кино"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Я люблю́ кино́! 🎬",
         "tr": "Atlíchna! Ya liubliú kinó!",
         "es": "¡Genial! ¡Me encanta el cine!"
        }
       ],
       "ir": "hora",
       "dato": "Plan con Masha",
       "datoValor": "кино́"
      },
      {
       "etiqueta": "Café",
       "claves": [
        "кафе"
       ],
       "resp": [
        {
         "ru": "Кафе́! Я пью ко́фе, ты — чай? 😄",
         "tr": "Kafé! Ya pyu kófi, ty — chai?",
         "es": "¡Cafetería! Yo café, ¿tú té?"
        }
       ],
       "ir": "hora",
       "dato": "Plan con Masha",
       "datoValor": "кафе́"
      },
      {
       "etiqueta": "Otro lugar",
       "claves": [
        "=в",
        "=на"
       ],
       "resp": [
        {
         "ru": "Хоро́шая иде́я! 😊",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "hora",
       "dato": "Plan con Masha"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "hora",
       "comodin": true
      }
     ]
    },
    {
     "id": "hora",
     "titulo": "La hora",
     "bot": [
      {
       "ru": "Во ско́лько? В три? В шесть? ⏰",
       "tr": "Vo skólka? V tri? V shest? ⏰",
       "es": "¿A qué hora? ¿A las tres? ¿A las seis?"
      }
     ],
     "ideas": [
      {
       "ru": "В три.",
       "es": "A las tres."
      },
      {
       "ru": "В шесть часо́в.",
       "es": "A las seis."
      },
      {
       "ru": "В семь ве́чера.",
       "es": "A las siete de la tarde."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Una hora",
       "claves": [
        "=в"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Vale! ¡Quedamos así!"
        }
       ],
       "ir": "donde",
       "dato": "Hora"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! ⏰",
         "tr": "Jarashó! ⏰",
         "es": "¡Vale!"
        }
       ],
       "ir": "donde",
       "comodin": true
      }
     ]
    },
    {
     "id": "donde",
     "titulo": "¿Dónde?",
     "bot": [
      {
       "ru": "А где мы встреча́емся? У метро́? 🚇",
       "tr": "A gdie my fstricháyimsia? U mitró?",
       "es": "¿Y dónde nos encontramos? ¿En la boca del metro?"
      }
     ],
     "ideas": [
      {
       "ru": "У метро́.",
       "es": "En el metro."
      },
      {
       "ru": "В це́нтре.",
       "es": "En el centro."
      },
      {
       "ru": "Ря́дом с кафе́.",
       "es": "Al lado de la cafetería."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Lugar",
       "claves": [
        "=у",
        "=в",
        "=на",
        "рядом"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Тогда́ до суббо́ты! 😊",
         "tr": "Atlíchna! Tagdá do subbóty!",
         "es": "¡Genial! ¡Entonces hasta el sábado!"
        }
       ],
       "ir": "fin",
       "dato": "Lugar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! До суббо́ты! 😊",
         "tr": "Jarashó! Do subbóty!",
         "es": "¡Vale! ¡Hasta el sábado!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Пока́, {nombre}! До суббо́ты! 😄",
       "tr": "Paká, {nombre}! Do subbóty!",
       "es": "¡Chau, {nombre}! ¡Hasta el sábado!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-ayer",
   "desde": 8,
   "titulo": "Что ты де́лал вчера́?",
   "tituloEs": "Ayer",
   "resumen": "El pasado: -л, -ла, -ли; qué hiciste ayer",
   "intro": "Masha te cuenta su día de ayer y te pregunta por el tuyo. Recuerda: я был si eres hombre, я была́ si eres mujer.",
   "inicio": "ayer",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ayer",
     "titulo": "Ayer",
     "bot": [
      {
       "ru": "Вчера́ был тру́дный день! 😩 Я была́ в университе́те до шести́, а пото́м рабо́тала в библиоте́ке.",
       "tr": "Fchirá byl trúdnyi dien! Ya bylá v univirsitiéti do shistí, a patóm rabótala v bibliatiéki.",
       "es": "¡Ayer fue un día difícil! Estuve en la universidad hasta las seis y después trabajé en la biblioteca."
      },
      {
       "ru": "А ты? Что ты {де́лал/де́лала} вчера́?",
       "tr": "A ty? Shto ty {diélal/diélala} fchirá?",
       "es": "¿Y tú? ¿Qué hiciste ayer?"
      }
     ],
     "ideas": [
      {
       "ru": "Я рабо́тал.",
       "es": "Trabajé."
      },
      {
       "ru": "Я рабо́тала.",
       "es": "Trabajé (mujer)."
      },
      {
       "ru": "Я отдыха́л до́ма.",
       "es": "Descansé en casa."
      },
      {
       "ru": "Я была́ в кино́.",
       "es": "Fui al cine (mujer)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Descansó",
       "claves": [
        "отдыхал"
       ],
       "resp": [
        {
         "ru": "Везёт! А я рабо́тала… 😅",
         "tr": "Vizót! A ya rabótala…",
         "es": "¡Qué suerte! Y yo trabajando…"
        }
       ],
       "ir": "tarde",
       "dato": "Ayer"
      },
      {
       "etiqueta": "Presente (error)",
       "claves": [
        "=работаю",
        "=отдыхаю",
        "=учусь",
        "=смотрю"
       ],
       "resp": [
        {
         "ru": "Вчера́ — э́то про́шлое: я {рабо́тал/рабо́тала}, я {отдыха́л/отдыха́ла}! 🙂",
         "tr": "Fchirá — éta próshlayi: ya {rabótal/rabótala}, ya {addyjál/addyjála}!",
         "es": "Ayer es pasado: работал(а), отдыхал(а)."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Un verbo en pasado",
       "claves": [
        "~л",
        "~ла",
        "~ли",
        "~лся",
        "~лась"
       ],
       "resp": [],
       "ir": "tarde"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "tarde",
       "comodin": true
      }
     ]
    },
    {
     "id": "tarde",
     "titulo": "Por la tarde",
     "bot": [
      {
       "ru": "А ве́чером? Что ты {де́лал/де́лала} ве́чером? 🌙 Я пригото́вила у́жин и посмотре́ла фильм.",
       "tr": "A viéchiram? Shto ty {diélal/diélala} viéchiram? Ya prigatóvila úzhin i pasmatriéla film.",
       "es": "¿Y por la noche? Yo preparé la cena y vi una película."
      }
     ],
     "ideas": [
      {
       "ru": "Я смотре́л телеви́зор.",
       "es": "Vi la tele."
      },
      {
       "ru": "Я гуля́ла.",
       "es": "Paseé (mujer)."
      },
      {
       "ru": "Я чита́л кни́гу.",
       "es": "Leí un libro."
      },
      {
       "ru": "Я ра́но лёг спать.",
       "es": "Me acosté temprano."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Durmió temprano",
       "claves": [
        "лег",
        "легла",
        "спал"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! А я легла́ в час. 😴",
         "tr": "Maladiéts! A ya liglá v chas.",
         "es": "¡Bien hecho! Yo me acosté a la una."
        }
       ],
       "ir": "cena",
       "dato": "Ayer por la noche"
      },
      {
       "etiqueta": "Algo en pasado",
       "claves": [
        "смотрел",
        "гулял",
        "читал",
        "готовил",
        "ужинал",
        "слушал",
        "играл",
        "учил",
        "писал",
        "отдыхал",
        "работал",
        "был",
        "была",
        "ходил",
        "ездил"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🙂",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "cena",
       "dato": "Ayer por la noche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "cena",
       "comodin": true
      }
     ]
    },
    {
     "id": "cena",
     "titulo": "La cena",
     "bot": [
      {
       "ru": "А что ты {ел/е́ла} на у́жин? 🍽️ Я — пи́ццу! 🍕",
       "tr": "A shto ty {yel/yéla} na úzhin? Ya — pítstsu!",
       "es": "¿Y qué cenaste? Yo, ¡pizza!"
      }
     ],
     "ideas": [
      {
       "ru": "Я ел сала́т.",
       "es": "Comí ensalada."
      },
      {
       "ru": "Я е́ла суп.",
       "es": "Comí sopa (mujer)."
      },
      {
       "ru": "Я ничего́ не ел.",
       "es": "No comí nada."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего"
       ],
       "resp": [
        {
         "ru": "Ничего́?! 😮 На́до есть!",
         "tr": "Nichivó?! Náda yest!",
         "es": "¿¡Nada!? ¡Hay que comer!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Comió algo",
       "claves": [
        "ел",
        "ела"
       ],
       "resp": [
        {
         "ru": "Вку́сно! 😋",
         "tr": "Fkúsna!",
         "es": "¡Qué rico!"
        }
       ],
       "ir": "dima",
       "dato": "Cenó"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вку́сно! 😋",
         "tr": "Fkúsna!",
         "es": "¡Qué rico!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма вчера́ весь день игра́л в компью́тер. 🎮 Ма́ма была́ недово́льна! 😂 Что де́лал Ди́ма?",
       "tr": "A Díma fchirá vies dien igrál v kampyúter. Máma bylá nidavólna! Shto diélal Díma?",
       "es": "Y Dima ayer jugó todo el día al ordenador. ¡Mamá no estaba contenta! ¿Qué hizo Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "Он игра́л в компью́тер.",
       "es": "Jugó al ordenador."
      },
      {
       "ru": "Ди́ма игра́л весь день.",
       "es": "Dima jugó todo el día."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Игра́л",
       "claves": [
        "=играл"
       ],
       "resp": [
        {
         "ru": "Да! Весь день! 😂",
         "tr": "Da! Vies dien!",
         "es": "¡Sí! ¡Todo el día!"
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "игра"
       ],
       "resp": [
        {
         "ru": "Он игра́л! 🙂",
         "tr": "On igrál!",
         "es": "Él: играл (-л)."
        }
       ],
       "ir": "papa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он игра́л в компью́тер. 🎮",
         "tr": "On igrál v kampyúter.",
         "es": "Jugó al ordenador."
        }
       ],
       "ir": "papa",
       "comodin": true
      }
     ]
    },
    {
     "id": "papa",
     "titulo": "Papá y mamá",
     "bot": [
      {
       "ru": "А па́па и ма́ма бы́ли в теа́тре. 🎭 Где бы́ли па́па и ма́ма?",
       "tr": "A pápa i máma býli v tiátri. Gdie býli pápa i máma?",
       "es": "Y papá y mamá estuvieron en el teatro. ¿Dónde estuvieron?"
      }
     ],
     "ideas": [
      {
       "ru": "Они́ бы́ли в теа́тре.",
       "es": "Estuvieron en el teatro."
      },
      {
       "ru": "В теа́тре.",
       "es": "En el teatro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Были",
       "claves": [
        "=были"
       ],
       "resp": [
        {
         "ru": "Да! Они́ — бы́ли. 👍",
         "tr": "Da! Aní — býli.",
         "es": "¡Sí! Они: были."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Был / была (error)",
       "claves": [
        "=был",
        "=была"
       ],
       "resp": [
        {
         "ru": "Они́ бы́ли: мы, вы, они́ — всегда́ -ли! 🙂",
         "tr": "Aní býli: my, vy, aní — fsigdá -li!",
         "es": "Они: были (мы, вы, они siempre -ли)."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Teatro",
       "claves": [
        "театр"
       ],
       "resp": [
        {
         "ru": "Да! В теа́тре. 👍",
         "tr": "Da! V tiátri.",
         "es": "¡Sí! En el teatro."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В теа́тре! 🎭",
         "tr": "V tiátri!",
         "es": "¡En el teatro!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-finde",
   "desde": 8,
   "titulo": "Выходны́е",
   "tituloEs": "El fin de semana",
   "resumen": "Contar el fin de semana: dónde estuviste, qué hiciste, cómo fue",
   "intro": "Es lunes y Masha quiere saber qué hiciste el fin de semana. Ella también te cuenta el suyo.",
   "inicio": "como",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "como",
     "titulo": "¿Qué tal?",
     "bot": [
      {
       "ru": "Как прошли́ выходны́е? 😊",
       "tr": "Kak prashlí vyjadnýyi?",
       "es": "¿Qué tal el fin de semana?"
      }
     ],
     "ideas": [
      {
       "ru": "Хорошо́!",
       "es": "¡Bien!"
      },
      {
       "ru": "Отли́чно!",
       "es": "¡Genial!"
      },
      {
       "ru": "Так себе́.",
       "es": "Más o menos."
      },
      {
       "ru": "Ску́чно.",
       "es": "Aburrido."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Aburrido / regular",
       "claves": [
        "скучн",
        "=так себе",
        "плохо"
       ],
       "resp": [
        {
         "ru": "Почему́? Что случи́лось? 🤔",
         "tr": "Pachimú? Shto sluchílas?",
         "es": "¿Por qué? ¿Qué pasó?"
        }
       ],
       "ir": "donde"
      },
      {
       "etiqueta": "Bien",
       "claves": [
        "хорошо",
        "отлично",
        "нормально",
        "прекрасно"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 😄",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "donde"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "donde",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "У меня́ — отли́чно! Я была́ на да́че. 🏡",
       "tr": "U miniá — atlíchna! Ya bylá na dáchi.",
       "es": "¡Muy bien! Estuve en la dacha."
      }
     ],
     "aTiTema": "finde_m"
    },
    {
     "id": "donde",
     "titulo": "¿Dónde estuviste?",
     "bot": [
      {
       "ru": "Где ты {был/была́} в суббо́ту?",
       "tr": "Gdie ty {byl/bylá} v subbótu?",
       "es": "¿Dónde estuviste el sábado?"
      }
     ],
     "ideas": [
      {
       "ru": "Я был до́ма.",
       "es": "Estuve en casa."
      },
      {
       "ru": "Я была́ на мо́ре.",
       "es": "Estuve en el mar (mujer)."
      },
      {
       "ru": "Я ходи́л в кино́.",
       "es": "Fui al cine."
      }
     ],
     "ramas": [
      {
       "etiqueta": "En casa",
       "claves": [
        "=дома"
       ],
       "resp": [
        {
         "ru": "До́ма — э́то то́же хорошо́! 🛋️",
         "tr": "Dóma — éta tózhi jarashó!",
         "es": "¡En casa también se está bien!"
        }
       ],
       "ir": "que",
       "dato": "El sábado",
       "datoValor": "до́ма"
      },
      {
       "etiqueta": "Mar",
       "claves": [
        "мор"
       ],
       "resp": [
        {
         "ru": "На мо́ре?! 😍 Я зави́дую!",
         "tr": "Na móri?! Ya zavíduyu!",
         "es": "¿¡En el mar!? ¡Qué envidia!"
        }
       ],
       "ir": "que",
       "dato": "El sábado",
       "datoValor": "на мо́ре"
      },
      {
       "etiqueta": "Fue a… (ходил/ездил)",
       "claves": [
        "ходил",
        "ездил"
       ],
       "resp": [
        {
         "ru": "Отли́чно! А как бы́ло?",
         "tr": "Atlíchna! A kak býla?",
         "es": "¡Genial! ¿Y qué tal estuvo?"
        }
       ],
       "ir": "que",
       "dato": "El sábado"
      },
      {
       "etiqueta": "Estuvo en…",
       "claves": [
        "был",
        "была"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "que",
       "dato": "El sábado"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "que",
       "comodin": true
      }
     ]
    },
    {
     "id": "que",
     "titulo": "¿Qué hiciste?",
     "bot": [
      {
       "ru": "А что ты {де́лал/де́лала} в воскресе́нье?",
       "tr": "A shto ty {diélal/diélala} v vaskrisiényi?",
       "es": "¿Y qué hiciste el domingo?"
      }
     ],
     "ideas": [
      {
       "ru": "Я спал до двена́дцати!",
       "es": "¡Dormí hasta las doce!"
      },
      {
       "ru": "Я убира́ла кварти́ру.",
       "es": "Limpié el piso (mujer)."
      },
      {
       "ru": "Я гуля́л в па́рке.",
       "es": "Paseé por el parque."
      },
      {
       "ru": "Я учи́л ру́сский!",
       "es": "¡Estudié ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 📚 Вот почему́ ты так хорошо́ пи́шешь!",
         "tr": "Maladiéts! Vot pachimú ty tak jarashó píshish!",
         "es": "¡Bien hecho! ¡Por eso escribes tan bien!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Dormir",
       "claves": [
        "спал"
       ],
       "resp": [
        {
         "ru": "Как Ди́ма! 😂",
         "tr": "Kak Díma!",
         "es": "¡Como Dima!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Algo en pasado",
       "claves": [
        "~л",
        "~ла",
        "~лся",
        "~лась"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "masha",
       "dato": "El domingo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "masha",
       "comodin": true
      }
     ]
    },
    {
     "id": "masha",
     "titulo": "Masha",
     "bot": [
      {
       "ru": "А я была́ на да́че. 🏡 Я и ба́бушка рабо́тали в саду́, а ве́чером пи́ли чай.",
       "tr": "A ya bylá na dáchi. Ya i bábushka rabótali v sadú, a viéchiram píli chai.",
       "es": "Yo estuve en la dacha. La abuela y yo trabajamos en el jardín y por la noche tomamos té."
      },
      {
       "ru": "Где была́ Ма́ша? 😄",
       "tr": "Gdie bylá Másha?",
       "es": "¿Dónde estuvo Masha?"
      }
     ],
     "ideas": [
      {
       "ru": "На да́че.",
       "es": "En la dacha."
      },
      {
       "ru": "Ты была́ на да́че.",
       "es": "Estuviste en la dacha."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Dacha",
       "claves": [
        "дач"
       ],
       "resp": [
        {
         "ru": "Да! Там бы́ло о́чень хорошо́! 🌻",
         "tr": "Da! Tam býla óchin jarashó!",
         "es": "¡Sí! ¡Allí estuvo muy bien!"
        }
       ],
       "ir": "foto"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "На да́че! 🏡",
         "tr": "Na dáchi!",
         "es": "¡En la dacha!"
        }
       ],
       "ir": "foto",
       "comodin": true
      }
     ]
    },
    {
     "id": "foto",
     "titulo": "Fotos",
     "bot": [
      {
       "ru": "Я сфотографи́ровала наш сад! 📸 А ты что-нибудь {сфотографи́ровал/сфотографи́ровала}?",
       "tr": "Ya sfatagrafíravala nash sat! A ty shtanibut {sfatagrafíraval/sfatagrafíravala}?",
       "es": "¡Le saqué una foto a nuestro jardín! ¿Y tú sacaste alguna foto?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, ничего́.",
       "es": "No, nada."
      },
      {
       "ru": "Да, мо́ре!",
       "es": "¡Sí, el mar!"
      },
      {
       "ru": "Да, кота́!",
       "es": "¡Sí, al gato!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет",
        "ничего"
       ],
       "resp": [
        {
         "ru": "Ничего́! В сле́дующий раз! 📷",
         "tr": "Nichivó! V sliéduyuschii ras!",
         "es": "¡No pasa nada! ¡La próxima vez!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да"
       ],
       "resp": [
        {
         "ru": "Здо́рово! Я хочу́ посмотре́ть! 😊",
         "tr": "Zdórava! Ya jachú pasmatriét!",
         "es": "¡Genial! ¡Quiero verla!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Здо́рово! 📸",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-viajes",
   "desde": 8,
   "titulo": "Где ты был?",
   "tituloEs": "Experiencias",
   "resumen": "Был в… / е́здил в…: dónde estuviste alguna vez",
   "intro": "Masha te pregunta por los lugares donde estuviste. Ella nunca salió de Rusia… todavía.",
   "inicio": "rusia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "rusia",
     "titulo": "¿Estuviste en Rusia?",
     "bot": [
      {
       "ru": "Ты когда́-нибудь {был/была́} в Росси́и? 🇷🇺",
       "tr": "Ty kagdánibut {byl/bylá} v Rassíi?",
       "es": "¿Estuviste alguna vez en Rusia?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, никогда́ не был.",
       "es": "No, nunca."
      },
      {
       "ru": "Нет, никогда́ не была́.",
       "es": "No, nunca (mujer)."
      },
      {
       "ru": "Да, я был в Москве́!",
       "es": "¡Sí, estuve en Moscú!"
      },
      {
       "ru": "Да, я е́здила в Санкт-Петербу́рг.",
       "es": "Sí, fui a San Petersburgo (mujer)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Moscú",
       "claves": [
        "москв"
       ],
       "resp": [
        {
         "ru": "В Москве́?! 😍 Здо́рово!",
         "tr": "V Maskvié?! Zdórava!",
         "es": "¡¿En Moscú?! ¡Genial!"
        }
       ],
       "ir": "gusto",
       "dato": "Estuvo en Rusia",
       "datoValor": "да, в Москве́"
      },
      {
       "etiqueta": "San Petersburgo",
       "claves": [
        "петербург",
        "питер"
       ],
       "resp": [
        {
         "ru": "В Петербу́рге? Э́то о́чень краси́вый го́род! 😍",
         "tr": "V Pitirbúrgui? Éta óchin krasívyi górat!",
         "es": "¿En San Petersburgo? ¡Es una ciudad muy bonita!"
        }
       ],
       "ir": "gusto",
       "dato": "Estuvo en Rusia",
       "datoValor": "да, в Петербу́рге"
      },
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда",
        "=нет",
        "=не был",
        "=не была"
       ],
       "resp": [
        {
         "ru": "Ничего́! Москва́ ждёт тебя́! 😉",
         "tr": "Nichivó! Maskvá zhdiot tibiá!",
         "es": "¡No pasa nada! ¡Moscú te espera!"
        }
       ],
       "ir": "masha",
       "dato": "Estuvo en Rusia",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "был",
        "была"
       ],
       "resp": [
        {
         "ru": "Пра́вда?! 😍",
         "tr": "Právda?!",
         "es": "¿¡En serio!?"
        }
       ],
       "ir": "gusto",
       "dato": "Estuvo en Rusia",
       "datoValor": "да"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "masha",
       "comodin": true
      }
     ]
    },
    {
     "id": "gusto",
     "titulo": "¿Qué te gustó?",
     "bot": [
      {
       "ru": "А что ты там {ви́дел/ви́дела}?",
       "tr": "A shto ty tam {vídil/vídila}?",
       "es": "¿Y qué viste allí?"
      }
     ],
     "ideas": [
      {
       "ru": "Я ви́дел Кра́сную пло́щадь.",
       "es": "Vi la Plaza Roja."
      },
      {
       "ru": "Я была́ в Эрмита́же.",
       "es": "Estuve en el Hermitage."
      },
      {
       "ru": "Я ел блины́!",
       "es": "¡Comí blinis!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Blinis",
       "claves": [
        "блин"
       ],
       "resp": [
        {
         "ru": "Блины́! Пра́вильно! 🥞😄",
         "tr": "Bliný! Právilna!",
         "es": "¡Blinis! ¡Bien hecho!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Plaza Roja",
       "claves": [
        "красн площад",
        "площад"
       ],
       "resp": [
        {
         "ru": "Кра́сная пло́щадь! Я там гуля́ю ча́сто! 😊",
         "tr": "Krásnaya plóschit! Ya tam guliáyu chásta!",
         "es": "¡La Plaza Roja! ¡Paseo mucho por allí!"
        }
       ],
       "ir": "masha"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Здо́рово! 😊",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "masha",
       "comodin": true
      }
     ]
    },
    {
     "id": "masha",
     "titulo": "Masha nunca salió",
     "bot": [
      {
       "ru": "А я никогда́ не была́ за грани́цей! 😕 Ни в Испа́нии, ни в Аргенти́не. Где была́ Ма́ша? 😄",
       "tr": "A ya nikagdá nie bylá za granítsii! Ni v Ispánii, ni v Arguintíni. Gdie bylá Másha?",
       "es": "Yo nunca estuve en el extranjero. Ni en España ni en Argentina. ¿Dónde estuvo Masha?"
      }
     ],
     "ideas": [
      {
       "ru": "Нигде́!",
       "es": "¡En ningún sitio!"
      },
      {
       "ru": "Ты никогда́ не была́ за грани́цей.",
       "es": "Nunca estuviste en el extranjero."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ninguna parte",
       "claves": [
        "нигде",
        "никогда"
       ],
       "resp": [
        {
         "ru": "Да… 😅 Но э́то моя́ мечта́! ✈️",
         "tr": "Da… No éta mayá michtá!",
         "es": "Sí… ¡Pero es mi sueño!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Нигде́! 😅 Но э́то моя́ мечта́! ✈️",
         "tr": "Nigdié! No éta mayá michtá!",
         "es": "¡En ningún sitio! Pero es mi sueño."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Dónde estuviste?",
     "bot": [
      {
       "ru": "А ты? В каки́х стра́нах ты {был/была́}? 🌍",
       "tr": "A ty? V kakíj stránaj ty {byl/bylá}?",
       "es": "¿Y tú? ¿En qué países estuviste?"
      }
     ],
     "ideas": [
      {
       "ru": "Я был во Фра́нции и в Ита́лии.",
       "es": "Estuve en Francia e Italia."
      },
      {
       "ru": "Я была́ в Аргенти́не.",
       "es": "Estuve en Argentina (mujer)."
      },
      {
       "ru": "Я е́здил в Герма́нию.",
       "es": "Fui a Alemania."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Argentina",
       "claves": [
        "аргентин"
       ],
       "resp": [
        {
         "ru": "В Аргенти́не? Как Лу́кас! 🇦🇷",
         "tr": "V Arguintíni? Kak Lúkas!",
         "es": "¿En Argentina? ¡Como Lucas!"
        }
       ],
       "ir": "primera",
       "dato": "Estuvo en"
      },
      {
       "etiqueta": "Países",
       "claves": [
        "был",
        "была",
        "ездил"
       ],
       "resp": [
        {
         "ru": "О! 😮 Ты мно́го путеше́ствуешь!",
         "tr": "O! Ty mnóga putishéstvuyish!",
         "es": "¡Uau! ¡Viajas mucho!"
        }
       ],
       "ir": "primera",
       "dato": "Estuvo en"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🌍",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "primera",
       "comodin": true
      }
     ]
    },
    {
     "id": "primera",
     "titulo": "Por primera vez",
     "bot": [
      {
       "ru": "Когда́ ты в пе́рвый раз {е́здил/е́здила} за грани́цу? ✈️",
       "tr": "Kagdá ty v piérvyi ras {yézdil/yézdila} za granítsu?",
       "es": "¿Cuándo saliste al extranjero por primera vez?"
      }
     ],
     "ideas": [
      {
       "ru": "В два́дцать лет.",
       "es": "A los veinte años."
      },
      {
       "ru": "Давно́.",
       "es": "Hace mucho."
      },
      {
       "ru": "Я никогда́ не е́здил за грани́цу.",
       "es": "Nunca salí al extranjero."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда"
       ],
       "resp": [
        {
         "ru": "Как я! 😄",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "лет",
        "давно",
        "назад",
        "году"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-aspecto",
   "desde": 8,
   "titulo": "Прочита́л и́ли чита́л?",
   "tituloEs": "Proceso o resultado",
   "resumen": "El aspecto: чита́ть / прочита́ть, де́лать / сде́лать",
   "intro": "Masha te pregunta qué terminaste y qué hiciste un rato. Practica las parejas: читал (proceso) y прочитал (resultado).",
   "inicio": "libro",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "libro",
     "titulo": "El libro",
     "bot": [
      {
       "ru": "Вчера́ я чита́ла кни́гу три часа́ и прочита́ла её! 📖 А ты {прочита́л/прочита́ла} кни́гу «Война́ и мир»? 😄",
       "tr": "Fchirá ya chitála knígu tri chisá i prachitála yiyó! A ty {prachitál/prachitála} knígu «Vainá i mir»?",
       "es": "Ayer leí un libro tres horas y lo terminé. ¿Y tú leíste «Guerra y paz»?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет! 😂",
       "es": "¡No!"
      },
      {
       "ru": "Я чита́л, но не прочита́л.",
       "es": "La empecé, pero no la terminé."
      },
      {
       "ru": "Да, прочита́ла!",
       "es": "¡Sí, la terminé!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Empezó sin terminar",
       "claves": [
        "читал",
        "читала"
       ],
       "resp": [
        {
         "ru": "Чита́л, но не прочита́л — понима́ю! Она́ дли́нная! 😅",
         "tr": "Chitál, no nie prachitál — panimáyu! Aná dlínnaya!",
         "es": "Leíste, pero no la terminaste: ¡te entiendo! Es larga."
        }
       ],
       "ir": "deberes"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "прочитал",
        "=да"
       ],
       "resp": [
        {
         "ru": "Пра́вда?! Ты геро́й! 🏆",
         "tr": "Právda?! Ty guirói!",
         "es": "¿¡En serio!? ¡Eres un héroe!"
        }
       ],
       "ir": "deberes"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Я то́же! 😂 Она́ о́чень дли́нная!",
         "tr": "Ya tózhi! Aná óchin dlínnaya!",
         "es": "¡Yo tampoco! ¡Es larguísima!"
        }
       ],
       "ir": "deberes"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😂",
         "tr": "",
         "es": "😂"
        }
       ],
       "ir": "deberes",
       "comodin": true
      }
     ]
    },
    {
     "id": "deberes",
     "titulo": "La tarea",
     "bot": [
      {
       "ru": "Ди́ма де́лал дома́шнее зада́ние весь ве́чер… и не сде́лал! 😂 Ди́ма сде́лал зада́ние?",
       "tr": "Díma diélal damáshniyi zadániyi vies viéchir… i nie zdiélal! Díma zdiélal zadániyi?",
       "es": "Dima hizo la tarea toda la noche… ¡y no la terminó! ¿Terminó Dima la tarea?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, не сде́лал.",
       "es": "No, no la terminó."
      },
      {
       "ru": "Он де́лал, но не сде́лал.",
       "es": "La hizo, pero no la terminó."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No la terminó",
       "claves": [
        "=не сделал"
       ],
       "resp": [
        {
         "ru": "Да, не сде́лал! Ма́ма недово́льна! 😂",
         "tr": "Da, nie zdiélal! Máma nidavólna!",
         "es": "¡No la terminó! ¡Mamá no está contenta!"
        }
       ],
       "ir": "carta"
      },
      {
       "etiqueta": "Sí (error)",
       "claves": [
        "=сделал",
        "=да"
       ],
       "resp": [
        {
         "ru": "Нет! Он де́лал, но не сде́лал. 😄",
         "tr": "Niet! On diélal, no nie zdiélal.",
         "es": "¡No! La estuvo haciendo, pero no la terminó."
        }
       ],
       "ir": "carta"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Не сде́лал! 😂",
         "tr": "Nie zdiélal!",
         "es": "¡No la terminó!"
        }
       ],
       "ir": "carta",
       "comodin": true
      }
     ]
    },
    {
     "id": "carta",
     "titulo": "La carta",
     "bot": [
      {
       "ru": "А я написа́ла письмо́… по-испа́нски! ✉️ Я написа́ла и́ли писа́ла? Письмо́ гото́во!",
       "tr": "A ya napisála pismó… paispánski! Ya napisála íli pisála? Pismó gatóva!",
       "es": "Y yo escribí una carta… ¡en español! ¿Написала o писала? ¡La carta está lista!"
      }
     ],
     "ideas": [
      {
       "ru": "Написа́ла.",
       "es": "La terminaste: написала."
      },
      {
       "ru": "Ты написа́ла письмо́.",
       "es": "Escribiste la carta."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Написала",
       "claves": [
        "написал"
       ],
       "resp": [
        {
         "ru": "Да! Письмо́ гото́во — написа́ла! 👍",
         "tr": "Da! Pismó gatóva — napisála!",
         "es": "¡Sí! La carta está lista: написала."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Писала (error)",
       "claves": [
        "писал"
       ],
       "resp": [
        {
         "ru": "Письмо́ гото́во: э́то результа́т — написа́ла! 🙂",
         "tr": "Pismó gatóva: éta rizultát — napisála!",
         "es": "La carta está terminada: es un resultado, написала."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Написа́ла! ✉️",
         "tr": "Napisála!",
         "es": "¡Написала!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А что ты {сде́лал/сде́лала} сего́дня? Что ты уже́ {сде́лал/сде́лала}? ✅",
       "tr": "A shto ty {zdiélal/zdiélala} sivódnia? Shto ty uzhé {zdiélal/zdiélala}?",
       "es": "¿Y qué hiciste hoy? ¿Qué ya terminaste?"
      }
     ],
     "ideas": [
      {
       "ru": "Я сде́лал зада́ние.",
       "es": "Hice la tarea."
      },
      {
       "ru": "Я купи́ла хлеб.",
       "es": "Compré pan (mujer)."
      },
      {
       "ru": "Я пригото́вил обе́д.",
       "es": "Preparé el almuerzo."
      },
      {
       "ru": "Ничего́! 😅",
       "es": "¡Nada!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего"
       ],
       "resp": [
        {
         "ru": "Ничего́? Ещё не по́здно! 😄",
         "tr": "Nichivó? Yischó nie pózna!",
         "es": "¿Nada? ¡Todavía estás a tiempo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Algo en pasado",
       "claves": [
        "~л",
        "~ла",
        "~лся",
        "~лась"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! ✅",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "fin",
       "dato": "Hoy hizo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Молоде́ц! ✅",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-antes",
   "desde": 8,
   "titulo": "Ра́ньше и сейча́с",
   "tituloEs": "Antes y ahora",
   "resumen": "Ра́ньше + pasado, сейча́с + presente: cómo cambiaste",
   "intro": "Masha compara su vida de antes con la de ahora, y te pregunta cómo cambió la tuya.",
   "inicio": "nina",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "nina",
     "titulo": "De niña",
     "bot": [
      {
       "ru": "Ра́ньше, когда́ я была́ ма́ленькая, я жила́ в дере́вне. 🏡 А сейча́с я живу́ в Москве́. А ты? Где ты {жил/жила́} ра́ньше?",
       "tr": "Ránshi, kagdá ya bylá málinkaya, ya zhilá v diriévni. A siichás ya zhivú v Maskvié. A ty? Gdie ty {zhil/zhilá} ránshi?",
       "es": "Antes, cuando era pequeña, vivía en un pueblo. Ahora vivo en Moscú. ¿Y tú? ¿Dónde vivías antes?"
      }
     ],
     "ideas": [
      {
       "ru": "Ра́ньше я жил в друго́м го́роде.",
       "es": "Antes vivía en otra ciudad."
      },
      {
       "ru": "Я всегда́ жила́ здесь.",
       "es": "Siempre viví aquí (mujer)."
      },
      {
       "ru": "Я жил в Аргенти́не.",
       "es": "Vivía en Argentina."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Siempre aquí",
       "claves": [
        "всегда"
       ],
       "resp": [
        {
         "ru": "Всегда́? Ты лю́бишь свой го́род! 😊",
         "tr": "Fsigdá? Ty liúbish svoi górat!",
         "es": "¿Siempre? ¡Te gusta tu ciudad!"
        }
       ],
       "ir": "gustaba",
       "dato": "Antes vivía",
       "datoValor": "здесь же"
      },
      {
       "etiqueta": "Vivía en…",
       "claves": [
        "жил",
        "жила"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "gustaba",
       "dato": "Antes vivía"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "gustaba",
       "comodin": true
      }
     ]
    },
    {
     "id": "gustaba",
     "titulo": "Antes te gustaba",
     "bot": [
      {
       "ru": "Ра́ньше я не люби́ла ко́фе, а сейча́с пью его́ ка́ждый день! ☕😂 А ты? Что ты ра́ньше не {люби́л/люби́ла}, а сейча́с лю́бишь?",
       "tr": "Ránshi ya nie liubíla kófi, a siichás pyu yivó kázhdyi dien! A ty? Shto ty ránshi nie {liubíl/liubíla}, a siichás liúbish?",
       "es": "Antes no me gustaba el café, ¡y ahora lo tomo todos los días! ¿Y tú? ¿Qué no te gustaba antes y ahora sí?"
      }
     ],
     "ideas": [
      {
       "ru": "Ра́ньше я не люби́л спорт.",
       "es": "Antes no me gustaba el deporte."
      },
      {
       "ru": "Я не люби́ла ры́бу.",
       "es": "No me gustaba el pescado."
      },
      {
       "ru": "Ра́ньше я не люби́л ру́сский! 😄",
       "es": "¡Antes no me gustaba el ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "А сейча́с лю́бишь? 😍 Отли́чно!",
         "tr": "A siichás liúbish? Atlíchna!",
         "es": "¿Y ahora te gusta? ¡Genial!"
        }
       ],
       "ir": "hacia"
      },
      {
       "etiqueta": "No le gustaba",
       "claves": [
        "=не любил",
        "=не любила"
       ],
       "resp": [
        {
         "ru": "А сейча́с лю́бишь — здо́рово! 😊",
         "tr": "A siichás liúbish — zdórava!",
         "es": "¡Y ahora te gusta: genial!"
        }
       ],
       "ir": "hacia"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "hacia",
       "comodin": true
      }
     ]
    },
    {
     "id": "hacia",
     "titulo": "Antes hacías",
     "bot": [
      {
       "ru": "Ра́ньше я ча́сто танцева́ла, а сейча́с то́лько пла́ваю. 💃🏊‍♀️ Что ты ча́сто {де́лал/де́лала} ра́ньше?",
       "tr": "Ránshi ya chásta tantsivála, a siichás tólka plávayu. Shto ty chásta {diélal/diélala} ránshi?",
       "es": "Antes bailaba mucho, y ahora solo nado. ¿Qué hacías a menudo antes?"
      }
     ],
     "ideas": [
      {
       "ru": "Я ча́сто игра́л в футбо́л.",
       "es": "Jugaba mucho al fútbol."
      },
      {
       "ru": "Я мно́го чита́ла.",
       "es": "Leía mucho."
      },
      {
       "ru": "Я рисова́л.",
       "es": "Dibujaba."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Algo en pasado",
       "claves": [
        "~л",
        "~ла",
        "~лся",
        "~лась"
       ],
       "resp": [
        {
         "ru": "А сейча́с? Ты ещё э́то де́лаешь? 🤔",
         "tr": "A siichás? Ty yischó éta diélayish?",
         "es": "¿Y ahora? ¿Todavía lo haces?"
        }
       ],
       "ir": "ahora",
       "dato": "Antes hacía"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "ahora",
       "comodin": true
      }
     ]
    },
    {
     "id": "ahora",
     "titulo": "Ahora",
     "bot": [
      {
       "ru": "А сейча́с?",
       "tr": "A siichás?",
       "es": "¿Y ahora?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, сейча́с не игра́ю.",
       "es": "No, ahora no juego."
      },
      {
       "ru": "Да, и сейча́с то́же!",
       "es": "¡Sí, también ahora!"
      },
      {
       "ru": "Сейча́с я учу́ ру́сский!",
       "es": "¡Ahora estudio ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Отли́чный вы́бор! 😄",
         "tr": "Atlíchnyi výbar!",
         "es": "¡Excelente elección!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Pasado en vez de presente (error)",
       "claves": [
        "=сейчас играл",
        "=сейчас читал",
        "=сейчас рисовал"
       ],
       "resp": [
        {
         "ru": "Сейча́с — настоя́щее: игра́ю, чита́ю! 🙂",
         "tr": "Siichás — nastayáschiyi: igráyu, chitáyu!",
         "es": "Ahora va en presente: играю, читаю."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "=нет",
        "=да",
        "сейчас"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u8-historia",
   "desde": 8,
   "titulo": "Что случи́лось?",
   "tituloEs": "¿Qué pasó?",
   "resumen": "Una historia en orden: снача́ла, пото́м, наконе́ц; y preguntar qué pasó",
   "intro": "A Masha le pasó algo terrible ayer. Hazle preguntas: «Что случи́лось?», «А пото́м?», «Где?»…",
   "inicio": "triste",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "triste",
     "titulo": "Masha está triste",
     "bot": [
      {
       "ru": "Ох… 😢 Вчера́ был ужа́сный день!",
       "tr": "Oj… Fchirá byl uzhásnyi dien!",
       "es": "Uf… ¡Ayer fue un día horrible!"
      }
     ],
     "ideas": [
      {
       "ru": "Что случи́лось?",
       "es": "¿Qué pasó?"
      },
      {
       "ru": "Почему́?",
       "es": "¿Por qué?"
      },
      {
       "ru": "Ой! Что случи́лось?",
       "es": "¡Uy! ¿Qué pasó?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta",
       "claves": [
        "случил",
        "почему",
        "что",
        "=как"
       ],
       "resp": [],
       "ir": "telefono"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ты не спра́шиваешь, что случи́лось? 😢",
         "tr": "Ty nie spráshivayish, shto sluchílas?",
         "es": "¿No me preguntas qué pasó?"
        }
       ],
       "ir": null,
       "comodin": true
      }
     ],
     "alRendirse": [
      {
       "ru": "Вот что бы́ло… 😢",
       "tr": "Vot shto býla…",
       "es": "Esto fue lo que pasó…"
      }
     ]
    },
    {
     "id": "telefono",
     "titulo": "El teléfono",
     "bot": [
      {
       "ru": "Я потеря́ла телефо́н! 📱😱",
       "tr": "Ya patiriála tilifón!",
       "es": "¡Perdí el teléfono!"
      }
     ],
     "ideas": [
      {
       "ru": "Где?",
       "es": "¿Dónde?"
      },
      {
       "ru": "Ой! Где ты его́ потеря́ла?",
       "es": "¡Uy! ¿Dónde lo perdiste?"
      },
      {
       "ru": "Как?",
       "es": "¿Cómo?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta",
       "claves": [
        "где",
        "как",
        "когда",
        "что"
       ],
       "resp": [],
       "ir": "metro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Да! Потеря́ла! 😱",
         "tr": "Da! Patiriála!",
         "es": "¡Sí! ¡Lo perdí!"
        }
       ],
       "ir": "metro",
       "comodin": true
      }
     ]
    },
    {
     "id": "metro",
     "titulo": "En el metro",
     "bot": [
      {
       "ru": "Снача́ла я е́хала в метро́ и слу́шала му́зыку. 🎧 Пото́м я вы́шла на ста́нции… и телефо́на нет!",
       "tr": "Snachála ya yéjala v mitró i slúshala múzyku. Patóm ya výshla na stántsii… i tilifóna niet!",
       "es": "Primero iba en el metro escuchando música. Después bajé en la estación… ¡y no tenía el teléfono!"
      }
     ],
     "ideas": [
      {
       "ru": "А пото́м?",
       "es": "¿Y después?"
      },
      {
       "ru": "Что ты сде́лала?",
       "es": "¿Qué hiciste?"
      },
      {
       "ru": "Ты его́ нашла́?",
       "es": "¿Lo encontraste?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Lo encontró?",
       "claves": [
        "нашла",
        "нашли"
       ],
       "resp": [],
       "ir": "final"
      },
      {
       "etiqueta": "¿Y después?",
       "claves": [
        "потом",
        "сделала",
        "делала",
        "что",
        "дальше"
       ],
       "resp": [],
       "ir": "busco"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [],
       "ir": "busco",
       "comodin": true
      }
     ]
    },
    {
     "id": "busco",
     "titulo": "Lo buscó",
     "bot": [
      {
       "ru": "Я верну́лась в метро́ и иска́ла его́ час! 😩 Я спроси́ла всех…",
       "tr": "Ya virnúlas v mitró i iskála yivó chas! Ya sprasíla fsiej…",
       "es": "Volví al metro y lo busqué una hora. Pregunté a todos…"
      }
     ],
     "ideas": [
      {
       "ru": "И ты его́ нашла́?",
       "es": "¿Y lo encontraste?"
      },
      {
       "ru": "А пото́м?",
       "es": "¿Y después?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta",
       "claves": [
        "нашла",
        "потом",
        "что",
        "дальше",
        "=и"
       ],
       "resp": [],
       "ir": "final"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [],
       "ir": "final",
       "comodin": true
      }
     ]
    },
    {
     "id": "final",
     "titulo": "El final",
     "bot": [
      {
       "ru": "Наконе́ц, я пришла́ домо́й… и телефо́н был в су́мке! 😂🤦‍♀️ Он был там всё вре́мя!",
       "tr": "Nakaniéts, ya prishlá damói… i tilifón byl v súmki! On byl tam fsio vriémia!",
       "es": "Al final llegué a casa… ¡y el teléfono estaba en el bolso! ¡Estuvo ahí todo el tiempo!"
      }
     ],
     "ideas": [
      {
       "ru": "Ой! 😂",
       "es": "¡Uy!"
      },
      {
       "ru": "Где был телефо́н? В су́мке!",
       "es": "¿Dónde estaba? ¡En el bolso!"
      },
      {
       "ru": "У меня́ то́же так бы́ло!",
       "es": "¡A mí también me pasó!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "A él también",
       "claves": [
        "тоже",
        "было"
       ],
       "resp": [
        {
         "ru": "Пра́вда? Мы похо́жи! 😂",
         "tr": "Právda? My pajózhi!",
         "es": "¿En serio? ¡Nos parecemos!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Bolso",
       "claves": [
        "сумк"
       ],
       "resp": [
        {
         "ru": "Да! В су́мке! 🤦‍♀️",
         "tr": "Da! V súmki!",
         "es": "¡Sí! ¡En el bolso!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😂🤦‍♀️",
         "tr": "",
         "es": "😂🤦‍♀️"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y a ti?",
     "bot": [
      {
       "ru": "А ты когда́-нибудь {теря́л/теря́ла} что-нибудь? 🔑",
       "tr": "A ty kagdánibut {tiriál/tiriála} shtanibut?",
       "es": "¿Y tú perdiste algo alguna vez?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я потеря́л ключи́.",
       "es": "Sí, perdí las llaves."
      },
      {
       "ru": "Я потеря́ла кошелёк.",
       "es": "Perdí la cartera (mujer)."
      },
      {
       "ru": "Нет, никогда́!",
       "es": "¡No, nunca!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca",
       "claves": [
        "никогда",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Никогда́? Ты молоде́ц! 😄",
         "tr": "Nikagdá? Ty maladiéts!",
         "es": "¿Nunca? ¡Qué bien!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Perdió algo",
       "claves": [
        "потерял",
        "терял"
       ],
       "resp": [
        {
         "ru": "Ой! {Нашёл/Нашла́}? 😟",
         "tr": "Oi! {Nashól/Nashlá}?",
         "es": "¡Uy! ¿Lo encontraste?"
        }
       ],
       "ir": "fin",
       "dato": "Perdió"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-manana",
   "desde": 9,
   "titulo": "Что ты бу́дешь де́лать за́втра?",
   "tituloEs": "Mañana",
   "resumen": "El futuro con бу́ду + infinitivo",
   "intro": "Masha te cuenta sus planes para mañana y te pregunta los tuyos. Usa бу́ду, бу́дешь, бу́дет… + infinitivo.",
   "inicio": "manana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "manana",
     "titulo": "Mañana",
     "bot": [
      {
       "ru": "За́втра у меня́ бу́дет тру́дный день: у́тром я бу́ду учи́ться, а ве́чером бу́ду рабо́тать. 😅",
       "tr": "Záftra u miniá búdit trúdnyi dien: útram ya búdu uchítsa, a viéchiram búdu rabótat.",
       "es": "Mañana voy a tener un día difícil: por la mañana voy a estudiar y por la noche, a trabajar."
      },
      {
       "ru": "А ты? Что ты бу́дешь де́лать за́втра?",
       "tr": "A ty? Shto ty búdish diélat záftra?",
       "es": "¿Y tú? ¿Qué vas a hacer mañana?"
      }
     ],
     "ideas": [
      {
       "ru": "За́втра я бу́ду рабо́тать.",
       "es": "Mañana voy a trabajar."
      },
      {
       "ru": "Я бу́ду отдыха́ть!",
       "es": "¡Voy a descansar!"
      },
      {
       "ru": "Я бу́ду учи́ть ру́сский.",
       "es": "Voy a estudiar ruso."
      },
      {
       "ru": "Я бу́ду до́ма весь день.",
       "es": "Voy a estar en casa todo el día."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 📚 Я бу́ду ра́да!",
         "tr": "Maladiéts! Ya búdu ráda!",
         "es": "¡Bien hecho! ¡Me alegra!"
        }
       ],
       "ir": "noche",
       "dato": "Mañana",
       "datoValor": "учи́ть ру́сский"
      },
      {
       "etiqueta": "Descansar",
       "claves": [
        "отдыхать"
       ],
       "resp": [
        {
         "ru": "Везёт! 😄",
         "tr": "Vizót!",
         "es": "¡Qué suerte!"
        }
       ],
       "ir": "noche",
       "dato": "Mañana",
       "datoValor": "отдыха́ть"
      },
      {
       "etiqueta": "Буду + infinitivo",
       "claves": [
        "буду"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 👍",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "noche",
       "dato": "Mañana"
      },
      {
       "etiqueta": "Буду + presente (error)",
       "claves": [
        "=буду работаю",
        "=буду отдыхаю",
        "=буду учу"
       ],
       "resp": [
        {
         "ru": "Бу́ду рабо́тать, бу́ду отдыха́ть! 🙂",
         "tr": "Búdu rabótat, búdu addyját!",
         "es": "Буду + infinitivo: буду работать."
        }
       ],
       "ir": "noche"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "noche",
       "comodin": true
      }
     ]
    },
    {
     "id": "noche",
     "titulo": "Por la noche",
     "bot": [
      {
       "ru": "А ве́чером? Ты бу́дешь до́ма?",
       "tr": "A viéchiram? Ty búdish dóma?",
       "es": "¿Y por la noche? ¿Vas a estar en casa?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я бу́ду до́ма.",
       "es": "Sí, voy a estar en casa."
      },
      {
       "ru": "Нет, я бу́ду в кино́.",
       "es": "No, voy a estar en el cine."
      },
      {
       "ru": "Я бу́ду в кафе́.",
       "es": "Voy a estar en una cafetería."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Casa",
       "claves": [
        "дома",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Я позвоню́! 📞",
         "tr": "Atlíchna! Ya pazvaniú!",
         "es": "¡Genial! ¡Te llamo!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Fuera",
       "claves": [
        "=буду в",
        "=буду на",
        "=нет",
        "=буду у"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма за́втра бу́дет спать весь день. 😂 Что бу́дет де́лать Ди́ма?",
       "tr": "A Díma záftra búdit spat vies dien. Shto búdit diélat Díma?",
       "es": "Y Dima mañana va a dormir todo el día. ¿Qué va a hacer Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "Он бу́дет спать.",
       "es": "Va a dormir."
      },
      {
       "ru": "Ди́ма бу́дет спать весь день!",
       "es": "¡Dima va a dormir todo el día!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Будет спать",
       "claves": [
        "будет спать"
       ],
       "resp": [
        {
         "ru": "Да! Как всегда́! 😂",
         "tr": "Da! Kak fsigdá!",
         "es": "¡Sí! ¡Como siempre!"
        }
       ],
       "ir": "tiempo"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "спать",
        "спит"
       ],
       "resp": [
        {
         "ru": "Он бу́дет спать! 😂",
         "tr": "On búdit spat!",
         "es": "Él va a dormir: будет спать."
        }
       ],
       "ir": "tiempo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Он бу́дет спать! 😂",
         "tr": "On búdit spat!",
         "es": "¡Va a dormir!"
        }
       ],
       "ir": "tiempo",
       "comodin": true
      }
     ]
    },
    {
     "id": "tiempo",
     "titulo": "El tiempo",
     "bot": [
      {
       "ru": "За́втра бу́дет хо́лодно и бу́дет снег. ❄️ А у тебя́? Кака́я за́втра бу́дет пого́да?",
       "tr": "Záftra búdit jóladna i búdit sniek. A u tibiá? Kakáya záftra búdit pagóda?",
       "es": "Mañana va a hacer frío y va a nevar. ¿Y donde vives? ¿Qué tiempo va a hacer mañana?"
      }
     ],
     "ideas": [
      {
       "ru": "Бу́дет тепло́.",
       "es": "Va a hacer buen tiempo."
      },
      {
       "ru": "Бу́дет со́лнце!",
       "es": "¡Va a haber sol!"
      },
      {
       "ru": "Бу́дет дождь.",
       "es": "Va a llover."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sol / calor",
       "claves": [
        "тепло",
        "солнц",
        "жарко"
       ],
       "resp": [
        {
         "ru": "Как я тебе́ зави́дую! ☀️",
         "tr": "Kak ya tibié zavíduyu!",
         "es": "¡Qué envidia!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Lluvia / frío",
       "claves": [
        "дождь",
        "холодно",
        "снег"
       ],
       "resp": [
        {
         "ru": "Мы похо́жи! ☔",
         "tr": "My pajózhi!",
         "es": "¡Nos parecemos!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-verano",
   "desde": 9,
   "titulo": "Пла́ны на ле́то",
   "tituloEs": "Planes para el verano",
   "resumen": "Пое́ду, пойду́: adónde vas a ir, qué vas a ver",
   "intro": "Masha ya planea las vacaciones. ¿Adónde vas a ir tú? ¿Con quién? ¿Qué vas a hacer allí?",
   "inicio": "donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "donde",
     "titulo": "¿Adónde?",
     "bot": [
      {
       "ru": "Ле́том я пое́ду на мо́ре, в Сочи! 🏖️ А ты? Куда́ ты пое́дешь ле́том?",
       "tr": "Liétam ya payédu na móri, v Sachi! A ty? Kudá ty payédish liétam?",
       "es": "En verano voy a ir al mar, a Sochi. ¿Y tú? ¿Adónde vas a ir en verano?"
      }
     ],
     "ideas": [
      {
       "ru": "Я пое́ду в Ита́лию.",
       "es": "Voy a ir a Italia."
      },
      {
       "ru": "Я пое́ду домо́й.",
       "es": "Voy a ir a casa."
      },
      {
       "ru": "Я никуда́ не пое́ду.",
       "es": "No voy a ir a ninguna parte."
      },
      {
       "ru": "Я пое́ду в Москву́!",
       "es": "¡Voy a ir a Moscú!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Moscú",
       "claves": [
        "москв"
       ],
       "resp": [
        {
         "ru": "В Москву́?! 😍 Мы бу́дем гуля́ть вме́сте!",
         "tr": "V Maskvú?! My búdim guliát vmiésti!",
         "es": "¿¡A Moscú!? ¡Vamos a pasear juntos!"
        }
       ],
       "ir": "cuanto",
       "dato": "En verano va a",
       "datoValor": "Москва́"
      },
      {
       "etiqueta": "Ninguna parte",
       "claves": [
        "никуда"
       ],
       "resp": [
        {
         "ru": "Никуда́? Отдыха́ть до́ма то́же хорошо́! 😄",
         "tr": "Nikudá? Addyját dóma tózhi jarashó!",
         "es": "¿A ninguna parte? ¡Descansar en casa también está bien!"
        }
       ],
       "ir": "cuanto"
      },
      {
       "etiqueta": "Поеду в…",
       "claves": [
        "поеду",
        "полечу",
        "буду"
       ],
       "resp": [
        {
         "ru": "Здо́рово! ✈️",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "cuanto",
       "dato": "En verano va a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "cuanto",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuanto",
     "titulo": "¿Cuánto tiempo?",
     "bot": [
      {
       "ru": "А на ско́лько? На неде́лю? На ме́сяц? 🗓️",
       "tr": "A na skólka? Na nidiéliu? Na miésits?",
       "es": "¿Y por cuánto tiempo? ¿Una semana? ¿Un mes?"
      }
     ],
     "ideas": [
      {
       "ru": "На неде́лю.",
       "es": "Una semana."
      },
      {
       "ru": "На две неде́ли.",
       "es": "Dos semanas."
      },
      {
       "ru": "На ме́сяц!",
       "es": "¡Un mes!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mes",
       "claves": [
        "месяц"
       ],
       "resp": [
        {
         "ru": "На ме́сяц?! 😮 Как хорошо́!",
         "tr": "Na miésits?! Kak jarashó!",
         "es": "¿¡Un mes!? ¡Qué bien!"
        }
       ],
       "ir": "hacer"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "=на"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "hacer"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "hacer",
       "comodin": true
      }
     ]
    },
    {
     "id": "hacer",
     "titulo": "¿Qué vas a hacer?",
     "bot": [
      {
       "ru": "Что ты бу́дешь там де́лать? Я бу́ду пла́вать и загора́ть! 🏊‍♀️☀️",
       "tr": "Shto ty búdish tam diélat? Ya búdu plávat i zagarát!",
       "es": "¿Qué vas a hacer allí? ¡Yo voy a nadar y tomar el sol!"
      }
     ],
     "ideas": [
      {
       "ru": "Я бу́ду отдыха́ть.",
       "es": "Voy a descansar."
      },
      {
       "ru": "Я бу́ду гуля́ть и фотографи́ровать.",
       "es": "Voy a pasear y sacar fotos."
      },
      {
       "ru": "Я бу́ду мно́го есть! 😋",
       "es": "¡Voy a comer mucho!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Comer",
       "claves": [
        "есть"
       ],
       "resp": [
        {
         "ru": "Отли́чный план! 😋",
         "tr": "Atlíchnyi plan!",
         "es": "¡Excelente plan!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Буду + infinitivo",
       "claves": [
        "буду"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 😊",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "dima",
       "dato": "En vacaciones va a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Здо́рово! 😊",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма пое́дет в ла́герь. 🏕️ Куда́ пое́дет Ди́ма?",
       "tr": "A Díma payédit v láguir. Kudá payédit Díma?",
       "es": "Y Dima va a ir a un campamento. ¿Adónde va a ir Dima?"
      }
     ],
     "ideas": [
      {
       "ru": "В ла́герь.",
       "es": "A un campamento."
      },
      {
       "ru": "Он пое́дет в ла́герь.",
       "es": "Va a ir a un campamento."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Campamento",
       "claves": [
        "лагер"
       ],
       "resp": [
        {
         "ru": "Да! Ма́ма бу́дет ра́да: ти́хо до́ма! 😂",
         "tr": "Da! Máma búdit ráda: tíja dóma!",
         "es": "¡Sí! Mamá va a estar contenta: ¡silencio en casa!"
        }
       ],
       "ir": "otono"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "В ла́герь! 🏕️",
         "tr": "V láguir!",
         "es": "¡A un campamento!"
        }
       ],
       "ir": "otono",
       "comodin": true
      }
     ]
    },
    {
     "id": "otono",
     "titulo": "Después",
     "bot": [
      {
       "ru": "А что ты бу́дешь де́лать о́сенью, когда́ ты вернёшься? 🍂",
       "tr": "A shto ty búdish diélat ósinyu, kagdá ty virnióshsia?",
       "es": "¿Y qué vas a hacer en otoño, cuando vuelvas?"
      }
     ],
     "ideas": [
      {
       "ru": "Я бу́ду рабо́тать.",
       "es": "Voy a trabajar."
      },
      {
       "ru": "Я бу́ду учи́ться.",
       "es": "Voy a estudiar."
      },
      {
       "ru": "Я бу́ду учи́ть ру́сский да́льше!",
       "es": "¡Voy a seguir estudiando ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русск"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Буду + infinitivo",
       "claves": [
        "буду"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 👍",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Хоро́шего ле́та, {nombre}! ☀️",
       "tr": "Jaróshiga liéta, {nombre}!",
       "es": "¡Buen verano, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-terminar",
   "desde": 9,
   "titulo": "Сде́лаю!",
   "tituloEs": "Lo voy a terminar",
   "resumen": "El futuro perfectivo: прочита́ю, сде́лаю, куплю́",
   "intro": "Masha tiene mil cosas que hacer y te pide ayuda. Practica el futuro de resultado: сделаю, куплю, напишу.",
   "inicio": "lista",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "lista",
     "titulo": "La lista",
     "bot": [
      {
       "ru": "У меня́ спи́сок! 📝 Сего́дня я куплю́ хлеб, напишу́ письмо́ и пригото́влю у́жин.",
       "tr": "U miniá spísak! Sivódnia ya kupliú jliep, napishú pismó i prigatóvliu úzhin.",
       "es": "¡Tengo una lista de cosas! Hoy voy a comprar pan, escribir una carta y preparar la cena."
      },
      {
       "ru": "А ты что сде́лаешь сего́дня?",
       "tr": "A ty shto zdiélayish sivódnia?",
       "es": "¿Y tú qué vas a hacer (terminar) hoy?"
      }
     ],
     "ideas": [
      {
       "ru": "Я куплю́ молоко́.",
       "es": "Voy a comprar leche."
      },
      {
       "ru": "Я сде́лаю дома́шнее зада́ние.",
       "es": "Voy a hacer la tarea."
      },
      {
       "ru": "Я позвоню́ ма́ме.",
       "es": "Voy a llamar a mamá."
      },
      {
       "ru": "Я ничего́ не сде́лаю! 😅",
       "es": "¡No voy a hacer nada!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего"
       ],
       "resp": [
        {
         "ru": "Ничего́? 😂 Хоро́ший день!",
         "tr": "Nichivó? Jaróshii dien!",
         "es": "¿Nada? ¡Un buen día!"
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "Futuro perfectivo",
       "claves": [
        "куплю",
        "сделаю",
        "позвоню",
        "напишу",
        "приготовлю",
        "прочитаю",
        "уберу",
        "посмотрю"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! ✅",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "libro",
       "dato": "Hoy va a hacer"
      },
      {
       "etiqueta": "Буду + perfectivo (error)",
       "claves": [
        "=буду купить",
        "=буду сделать",
        "=буду прочитать"
       ],
       "resp": [
        {
         "ru": "Не «бу́ду купи́ть», а «куплю́»! 🙂",
         "tr": "Nie «búdu kupít», a «kupliú»!",
         "es": "No буду купить: el futuro de resultado es куплю."
        }
       ],
       "ir": "libro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "libro",
       "comodin": true
      }
     ]
    },
    {
     "id": "libro",
     "titulo": "El libro",
     "bot": [
      {
       "ru": "Я чита́ю кни́гу. Я её прочита́ю за́втра! 📖 Когда́ я прочита́ю кни́гу?",
       "tr": "Ya chitáyu knígu. Ya yiyó prachitáyu záftra! Kagdá ya prachitáyu knígu?",
       "es": "Estoy leyendo un libro. ¡Lo voy a terminar mañana! ¿Cuándo voy a terminar el libro?"
      }
     ],
     "ideas": [
      {
       "ru": "За́втра.",
       "es": "Mañana."
      },
      {
       "ru": "Ты прочита́ешь её за́втра.",
       "es": "Lo vas a terminar mañana."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mañana",
       "claves": [
        "завтра"
       ],
       "resp": [
        {
         "ru": "Да! За́втра! 📖",
         "tr": "Da! Záftra!",
         "es": "¡Sí! ¡Mañana!"
        }
       ],
       "ir": "ayuda"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "За́втра! 📖",
         "tr": "Záftra!",
         "es": "¡Mañana!"
        }
       ],
       "ir": "ayuda",
       "comodin": true
      }
     ]
    },
    {
     "id": "ayuda",
     "titulo": "¿Me ayudas?",
     "bot": [
      {
       "ru": "Ты помо́жешь? 🙏 Я не понима́ю испа́нское сло́во «madrugar»!",
       "tr": "Ty pamózhish? Ya nie panimáyu ispánskayi slóva «madrugar»!",
       "es": "¿Me ayudas? ¡No entiendo la palabra española «madrugar»!"
      }
     ],
     "ideas": [
      {
       "ru": "Помогу́!",
       "es": "¡Te ayudo!"
      },
      {
       "ru": "Коне́чно, помогу́.",
       "es": "Claro, te ayudo."
      },
      {
       "ru": "«Madrugar» — э́то встава́ть ра́но.",
       "es": "«Madrugar» es levantarse temprano."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Explica",
       "claves": [
        "вставать",
        "рано"
       ],
       "resp": [
        {
         "ru": "А! Встава́ть ра́но! Я не люблю́ «madrugar»! 😂",
         "tr": "A! Fstavát rána! Ya nie liubliú «madrugar»!",
         "es": "¡Ah! ¡Levantarse temprano! ¡No me gusta madrugar!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Te ayudo",
       "claves": [
        "помогу"
       ],
       "resp": [
        {
         "ru": "Спаси́бо! Что зна́чит «madrugar»? 🤔",
         "tr": "Spasíba! Shto znáchit «madrugar»?",
         "es": "¡Gracias! ¿Qué significa «madrugar»?"
        }
       ],
       "ir": "explica"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Спаси́бо! 😊",
         "tr": "Spasíba!",
         "es": "¡Gracias!"
        }
       ],
       "ir": "explica",
       "comodin": true
      }
     ]
    },
    {
     "id": "explica",
     "titulo": "Explicar",
     "bot": [
      {
       "ru": "Что зна́чит «madrugar»? 🤔",
       "tr": "Shto znáchit «madrugar»?",
       "es": "¿Qué significa «madrugar»?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то встава́ть ра́но.",
       "es": "Es levantarse temprano."
      },
      {
       "ru": "Встава́ть о́чень ра́но!",
       "es": "¡Levantarse muy temprano!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Explica",
       "claves": [
        "вставать",
        "рано",
        "утр"
       ],
       "resp": [
        {
         "ru": "А! Поня́тно! Я не люблю́ «madrugar»! 😂",
         "tr": "A! Paniátna! Ya nie liubliú «madrugar»!",
         "es": "¡Ah! ¡Entiendo! ¡No me gusta madrugar!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… А, встава́ть ра́но! Спаси́бо! 😊",
         "tr": "Jm… A, fstavát rána! Spasíba!",
         "es": "Mmm… ¡Ah, levantarse temprano! ¡Gracias!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-futuro",
   "desde": 9,
   "titulo": "Через пять лет",
   "tituloEs": "Dentro de cinco años",
   "resumen": "Sueños y planes: кем ты бу́дешь, где бу́дешь жить",
   "intro": "Masha imagina su vida dentro de cinco años y te pregunta cómo ves la tuya.",
   "inicio": "masha",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "masha",
     "titulo": "Masha en cinco años",
     "bot": [
      {
       "ru": "Че́рез пять лет я бу́ду преподава́ть испа́нский! 👩‍🏫 И я бу́ду жить… мо́жет быть, в Барсело́не! 😍",
       "tr": "Chéris piat liet ya búdu pripadavát ispánskii! I ya búdu zhit… mózhit byt, v Barsilóni!",
       "es": "Dentro de cinco años voy a ser profesora de español. Y voy a vivir… ¡quizá en Barcelona!"
      },
      {
       "ru": "А ты? Где ты бу́дешь жить че́рез пять лет?",
       "tr": "A ty? Gdie ty búdish zhit chéris piat liet?",
       "es": "¿Y tú? ¿Dónde vas a vivir dentro de cinco años?"
      }
     ],
     "ideas": [
      {
       "ru": "Я бу́ду жить здесь.",
       "es": "Voy a vivir aquí."
      },
      {
       "ru": "Я бу́ду жить в Москве́!",
       "es": "¡Voy a vivir en Moscú!"
      },
      {
       "ru": "Не зна́ю!",
       "es": "¡No sé!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Moscú",
       "claves": [
        "москв"
       ],
       "resp": [
        {
         "ru": "В Москве́?! А я — в Барсело́не! 😂 Мы поменя́емся!",
         "tr": "V Maskvié?! A ya — v Barsilóni! My paminiáyimsia!",
         "es": "¿¡En Moscú!? ¡Y yo en Barcelona! ¡Nos intercambiamos!"
        }
       ],
       "ir": "trabajo",
       "dato": "En cinco años",
       "datoValor": "в Москве́"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Никто́ не зна́ет! 😄",
         "tr": "Niktó nie znáyit!",
         "es": "¡Nadie lo sabe!"
        }
       ],
       "ir": "trabajo"
      },
      {
       "etiqueta": "Буду жить…",
       "claves": [
        "буду жить",
        "=здесь",
        "=там"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "trabajo",
       "dato": "En cinco años"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "trabajo",
       "comodin": true
      }
     ]
    },
    {
     "id": "trabajo",
     "titulo": "El trabajo",
     "bot": [
      {
       "ru": "А что ты бу́дешь де́лать? Бу́дешь рабо́тать здесь? 💼",
       "tr": "A shto ty búdish diélat? Búdish rabótat zdies?",
       "es": "¿Y a qué te vas a dedicar? ¿Vas a trabajar aquí?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я бу́ду рабо́тать здесь.",
       "es": "Sí, voy a trabajar aquí."
      },
      {
       "ru": "Я бу́ду отдыха́ть: я бу́ду на пе́нсии! 😎",
       "es": "¡Voy a descansar: voy a estar jubilado!"
      },
      {
       "ru": "Я бу́ду рабо́тать в Росси́и!",
       "es": "¡Voy a trabajar en Rusia!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Jubilado",
       "claves": [
        "пенси"
       ],
       "resp": [
        {
         "ru": "На пе́нсии? Везёт! 😎",
         "tr": "Na piénsii? Vizót!",
         "es": "¿Jubilado? ¡Qué suerte!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Rusia",
       "claves": [
        "росси"
       ],
       "resp": [
        {
         "ru": "В Росси́и?! 😍",
         "tr": "V Rassíi?!",
         "es": "¿¡En Rusia!?"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "буду",
        "=да"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "ruso",
       "comodin": true
      }
     ]
    },
    {
     "id": "ruso",
     "titulo": "El ruso",
     "bot": [
      {
       "ru": "А ру́сский? Ты бу́дешь говори́ть по-ру́сски хорошо́? 😉",
       "tr": "A rússkii? Ty búdish gavarít parússki jarashó?",
       "es": "¿Y el ruso? ¿Vas a hablar bien ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, отли́чно!",
       "es": "¡Sí, perfecto!"
      },
      {
       "ru": "Я наде́юсь!",
       "es": "¡Eso espero!"
      },
      {
       "ru": "Я бу́ду говори́ть, как ты!",
       "es": "¡Voy a hablar como tú!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Como tú",
       "claves": [
        "как ты"
       ],
       "resp": [
        {
         "ru": "Нет, лу́чше! 😄",
         "tr": "Niet, lúchshi!",
         "es": "¡No, mejor!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "надеюсь",
        "отлично",
        "буду"
       ],
       "resp": [
        {
         "ru": "Я уве́рена! 💪",
         "tr": "Ya uviérina!",
         "es": "¡Estoy segura!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я уве́рена! 💪",
         "tr": "Ya uviérina!",
         "es": "¡Estoy segura!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-viaje",
   "desde": 9,
   "titulo": "Пое́здка в Москву́",
   "tituloEs": "Un viaje a Moscú",
   "resumen": "Planear un viaje: cuándo, en qué, qué vas a ver",
   "intro": "Imagina que vas a visitar a Masha en Moscú. Planeen juntos el viaje.",
   "inicio": "cuando",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cuando",
     "titulo": "¿Cuándo?",
     "bot": [
      {
       "ru": "Ты прие́дешь в Москву́? 😍 Когда́?",
       "tr": "Ty priyédish v Maskvú? Kagdá?",
       "es": "¿Vas a venir a Moscú? ¿Cuándo?"
      }
     ],
     "ideas": [
      {
       "ru": "Ле́том.",
       "es": "En verano."
      },
      {
       "ru": "В декабре́!",
       "es": "¡En diciembre!"
      },
      {
       "ru": "Че́рез ме́сяц.",
       "es": "Dentro de un mes."
      },
      {
       "ru": "В сле́дующем году́.",
       "es": "El año que viene."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Invierno",
       "claves": [
        "зим",
        "декабр",
        "январ",
        "феврал"
       ],
       "resp": [
        {
         "ru": "Зимо́й?! Бу́дет о́чень хо́лодно! 🥶 Но краси́во! ❄️",
         "tr": "Zimói?! Búdit óchin jóladna! No krasíva!",
         "es": "¿¡En invierno!? ¡Va a hacer mucho frío! Pero será bonito."
        }
       ],
       "ir": "como",
       "dato": "Viaje a Moscú"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "летом",
        "весной",
        "осенью",
        "через",
        "следующ",
        "=в"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Я бу́ду ждать! 🎉",
         "tr": "Atlíchna! Ya búdu zhdat!",
         "es": "¡Genial! ¡Te voy a esperar!"
        }
       ],
       "ir": "como",
       "dato": "Viaje a Moscú"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 🎉",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "como",
       "comodin": true
      }
     ]
    },
    {
     "id": "como",
     "titulo": "¿Cómo?",
     "bot": [
      {
       "ru": "А как ты прие́дешь? На самолёте? На по́езде? ✈️🚆",
       "tr": "A kak ty priyédish? Na samalióti? Na póyizdi?",
       "es": "¿Y cómo vas a venir? ¿En avión? ¿En tren?"
      }
     ],
     "ideas": [
      {
       "ru": "На самолёте.",
       "es": "En avión."
      },
      {
       "ru": "Я полечу́ на самолёте.",
       "es": "Voy a ir en avión."
      },
      {
       "ru": "На по́езде!",
       "es": "¡En tren!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tren",
       "claves": [
        "поезд"
       ],
       "resp": [
        {
         "ru": "На по́езде?! Э́то о́чень до́лго! 😂",
         "tr": "Na póyizdi?! Éta óchin dólga!",
         "es": "¿¡En tren!? ¡Es larguísimo!"
        }
       ],
       "ir": "ver"
      },
      {
       "etiqueta": "Avión",
       "claves": [
        "самолет",
        "полечу"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Я тебя́ встре́чу в аэропорту́! 🛬",
         "tr": "Jarashó! Ya tibiá fstriéchu v airapartú!",
         "es": "¡Bien! ¡Te voy a buscar al aeropuerto!"
        }
       ],
       "ir": "ver"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "ver",
       "comodin": true
      }
     ]
    },
    {
     "id": "ver",
     "titulo": "¿Qué vas a ver?",
     "bot": [
      {
       "ru": "Что ты хо́чешь посмотре́ть в Москве́? Кра́сную пло́щадь? Большо́й теа́тр? Метро́? 🏰",
       "tr": "Shto ty jóchish pasmatriét v Maskvié? Krásnuyu plóschit? Balshói tiátr? Mitró?",
       "es": "¿Qué quieres ver en Moscú? ¿La Plaza Roja? ¿El Bolshói? ¿El metro?"
      }
     ],
     "ideas": [
      {
       "ru": "Кра́сную пло́щадь.",
       "es": "La Plaza Roja."
      },
      {
       "ru": "Метро́!",
       "es": "¡El metro!"
      },
      {
       "ru": "Всё!",
       "es": "¡Todo!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Todo",
       "claves": [
        "=все",
        "=всё"
       ],
       "resp": [
        {
         "ru": "Всё? Тогда́ ты бу́дешь здесь ме́сяц! 😂",
         "tr": "Fsio? Tagdá ty búdish zdies miésits!",
         "es": "¿Todo? ¡Entonces vas a quedarte un mes!"
        }
       ],
       "ir": "comer"
      },
      {
       "etiqueta": "Metro",
       "claves": [
        "метро"
       ],
       "resp": [
        {
         "ru": "Метро́! Оно́ о́чень краси́вое, как музе́й! 🚇",
         "tr": "Mitró! Anó óchin krasívayi, kak muzéi!",
         "es": "¡El metro! ¡Es muy bonito, como un museo!"
        }
       ],
       "ir": "comer"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "площад",
        "кремл",
        "музе",
        "театр",
        "парк"
       ],
       "resp": [
        {
         "ru": "Мы пойдём вме́сте! 😊",
         "tr": "My paidióm vmiésti!",
         "es": "¡Vamos a ir juntos!"
        }
       ],
       "ir": "comer"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Мы пойдём вме́сте! 😊",
         "tr": "My paidióm vmiésti!",
         "es": "¡Vamos a ir juntos!"
        }
       ],
       "ir": "comer",
       "comodin": true
      }
     ]
    },
    {
     "id": "comer",
     "titulo": "¿Qué vas a comer?",
     "bot": [
      {
       "ru": "А ещё ты попро́буешь блины́! Ба́бушка гото́вит их о́чень хорошо́! 🥞 Ты бу́дешь их есть?",
       "tr": "A yischó ty papróbuyish bliný! Bábushka gatóvit ij óchin jarashó! Ty búdish ij yest?",
       "es": "¡Y además vas a probar los blinis! La abuela los hace muy bien. ¿Los vas a comer?"
      }
     ],
     "ideas": [
      {
       "ru": "Коне́чно!",
       "es": "¡Claro!"
      },
      {
       "ru": "Да, бу́ду!",
       "es": "¡Sí!"
      },
      {
       "ru": "Я съем все блины́! 😋",
       "es": "¡Me voy a comer todos los blinis!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Todos",
       "claves": [
        "съем"
       ],
       "resp": [
        {
         "ru": "Ба́бушка бу́дет сча́стлива! 😂",
         "tr": "Bábushka búdit schástliva!",
         "es": "¡La abuela va a estar feliz!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "конечно",
        "=да",
        "буду"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🥞",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 🥞",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Жду тебя́ в Москве́, {nombre}! 🇷🇺",
       "tr": "Zhdu tibiá v Maskvié, {nombre}!",
       "es": "¡Te espero en Moscú, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u9-tiempos",
   "desde": 9,
   "titulo": "Вчера́, сего́дня, за́втра",
   "tituloEs": "Los tres tiempos",
   "resumen": "Pasado, presente y futuro juntos",
   "intro": "Masha mezcla ayer, hoy y mañana. Contesta en el tiempo correcto: я был, я есть… ¡no!, я бу́ду.",
   "inicio": "ayer",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ayer",
     "titulo": "Ayer",
     "bot": [
      {
       "ru": "Вчера́ я была́ в кино́. 🎬 А где ты {был/была́} вчера́?",
       "tr": "Fchirá ya bylá v kinó. A gdie ty {byl/bylá} fchirá?",
       "es": "Ayer estuve en el cine. ¿Y dónde estuviste ayer?"
      }
     ],
     "ideas": [
      {
       "ru": "Вчера́ я был до́ма.",
       "es": "Ayer estuve en casa."
      },
      {
       "ru": "Я была́ на рабо́те.",
       "es": "Estuve en el trabajo (mujer)."
      },
      {
       "ru": "Я был в па́рке.",
       "es": "Estuve en el parque."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Futuro (error)",
       "claves": [
        "буду"
       ],
       "resp": [
        {
         "ru": "Вчера́ — э́то про́шлое: {был/была́}! 🙂",
         "tr": "Fchirá — éta próshlayi: {byl/bylá}!",
         "es": "Ayer es pasado: был / была."
        }
       ],
       "ir": "hoy"
      },
      {
       "etiqueta": "Pasado",
       "claves": [
        "был",
        "была"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "hoy",
       "dato": "Ayer estuvo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "hoy",
       "comodin": true
      }
     ]
    },
    {
     "id": "hoy",
     "titulo": "Hoy",
     "bot": [
      {
       "ru": "Сего́дня я рабо́таю в библиоте́ке. 📚 А ты? Что ты де́лаешь сего́дня?",
       "tr": "Sivódnia ya rabótayu v bibliatiéki. A ty? Shto ty diélayish sivódnia?",
       "es": "Hoy trabajo en la biblioteca. ¿Y tú? ¿Qué haces hoy?"
      }
     ],
     "ideas": [
      {
       "ru": "Сего́дня я рабо́таю.",
       "es": "Hoy trabajo."
      },
      {
       "ru": "Я учу́ ру́сский.",
       "es": "Estudio ruso."
      },
      {
       "ru": "Я отдыха́ю.",
       "es": "Descanso."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pasado (error)",
       "claves": [
        "~л",
        "~ла"
       ],
       "resp": [
        {
         "ru": "Сего́дня — сейча́с: рабо́таю, отдыха́ю! 🙂",
         "tr": "Sivódnia — siichás: rabótayu, addyjáyu!",
         "es": "Hoy, ahora: presente (работаю, отдыхаю)."
        }
       ],
       "ir": "manana"
      },
      {
       "etiqueta": "Presente",
       "claves": [
        "~ю",
        "~у",
        "~юсь",
        "~усь"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🙂",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "manana",
       "dato": "Hoy"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "manana",
       "comodin": true
      }
     ]
    },
    {
     "id": "manana",
     "titulo": "Mañana",
     "bot": [
      {
       "ru": "А за́втра я и Лу́кас бу́дем гуля́ть. 🚶‍♀️ А ты? Что ты бу́дешь де́лать за́втра?",
       "tr": "A záftra ya i Lúkas búdim guliát. A ty? Shto ty búdish diélat záftra?",
       "es": "Y mañana voy a pasear con Lucas. ¿Y tú? ¿Qué vas a hacer mañana?"
      }
     ],
     "ideas": [
      {
       "ru": "За́втра я бу́ду рабо́тать.",
       "es": "Mañana voy a trabajar."
      },
      {
       "ru": "Я пое́ду на да́чу.",
       "es": "Voy a ir a la dacha."
      },
      {
       "ru": "Я бу́ду спать! 😴",
       "es": "¡Voy a dormir!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Futuro",
       "claves": [
        "буду",
        "поеду",
        "пойду",
        "~ую",
        "~аю"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 👍",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin",
       "dato": "Mañana"
      },
      {
       "etiqueta": "Pasado (error)",
       "claves": [
        "~л",
        "~ла"
       ],
       "resp": [
        {
         "ru": "За́втра — бу́ду рабо́тать, бу́ду гуля́ть! 🙂",
         "tr": "Záftra — búdu rabótat, búdu guliát!",
         "es": "Mañana es futuro: буду + infinitivo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-tener",
   "desde": 10,
   "titulo": "У тебя́ есть…?",
   "tituloEs": "¿Tienes…?",
   "resumen": "Tener y no tener: у меня́ есть, у меня́ нет + genitivo",
   "intro": "Masha te pregunta qué tienes y qué no tienes: hermanos, mascotas, coche… Recuerda: нет + genitivo (нет бра́та, нет маши́ны).",
   "inicio": "hermanos",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hermanos",
     "titulo": "Hermanos",
     "bot": [
      {
       "ru": "У меня́ есть брат, Ди́ма. 👦 А у тебя́ есть бра́тья и́ли сёстры?",
       "tr": "U miniá yest brat, Díma. A u tibiá yest brátya íli sióstry?",
       "es": "Tengo un hermano, Dima. ¿Y tú tienes hermanos o hermanas?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, у меня́ есть брат.",
       "es": "Sí, tengo un hermano."
      },
      {
       "ru": "У меня́ есть сестра́.",
       "es": "Tengo una hermana."
      },
      {
       "ru": "Нет, у меня́ нет бра́тьев и сестёр.",
       "es": "No, no tengo hermanos."
      },
      {
       "ru": "У меня́ два бра́та.",
       "es": "Tengo dos hermanos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No tiene",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ты оди́н в семье́? 😊",
         "tr": "Ty adín v simyé?",
         "es": "¿Eres hijo único?"
        }
       ],
       "ir": "mascota",
       "dato": "Hermanos",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Hermano(s)",
       "claves": [
        "брат"
       ],
       "resp": [
        {
         "ru": "Как у меня́! 👦",
         "tr": "Kak u miniá!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "nombre_h",
       "dato": "Hermanos"
      },
      {
       "etiqueta": "Hermana(s)",
       "claves": [
        "сестр"
       ],
       "resp": [
        {
         "ru": "Сестра́! Я всегда́ хоте́ла сестру́! 😍",
         "tr": "Sistrá! Ya fsigdá jatiéla sistrú!",
         "es": "¡Una hermana! ¡Siempre quise una!"
        }
       ],
       "ir": "nombre_h",
       "dato": "Hermanos"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "mascota",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "У меня́ есть брат Ди́ма. Ему́ шестна́дцать лет. 👦",
       "tr": "U miniá yest brat Díma. Yimú shisnáttsat liet.",
       "es": "Tengo un hermano, Dima. Tiene dieciséis años."
      }
     ],
     "aTiTema": "familia"
    },
    {
     "id": "nombre_h",
     "titulo": "Su nombre",
     "bot": [
      {
       "ru": "Как зову́т? 🙂",
       "tr": "Kak zavút?",
       "es": "¿Cómo se llama?"
      }
     ],
     "ideas": [
      {
       "ru": "Его́ зову́т …",
       "es": "Se llama …"
      },
      {
       "ru": "Её зову́т …",
       "es": "Se llama …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Dice el nombre",
       "resp": [
        {
         "ru": "{x}! Краси́вое и́мя! 😊",
         "tr": "{x}! Krasívayi ímia!",
         "es": "¡{x}! ¡Qué nombre bonito!"
        }
       ],
       "ir": "mascota",
       "dato": "Nombre del hermano o hermana",
       "captura": "eco",
       "tras": [
        "зовут"
       ]
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Краси́вое и́мя! 😊",
         "tr": "Krasívayi ímia!",
         "es": "¡Qué nombre bonito!"
        }
       ],
       "ir": "mascota",
       "comodin": true
      }
     ]
    },
    {
     "id": "mascota",
     "titulo": "Mascotas",
     "bot": [
      {
       "ru": "А у тебя́ есть кот и́ли соба́ка? 🐈🐕 У меня́ — Ба́рсик!",
       "tr": "A u tibiá yest kot íli sabáka? U miniá — Bársik!",
       "es": "¿Y tienes gato o perro? ¡Yo tengo a Barsik!"
      }
     ],
     "ideas": [
      {
       "ru": "У меня́ есть соба́ка.",
       "es": "Tengo un perro."
      },
      {
       "ru": "У меня́ есть ко́шка.",
       "es": "Tengo una gata."
      },
      {
       "ru": "Нет, у меня́ нет живо́тных.",
       "es": "No, no tengo animales."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Нет? Ба́рсик тебя́ ждёт! 😂",
         "tr": "Niet? Bársik tibiá zhdiot!",
         "es": "¿No? ¡Barsik te espera!"
        }
       ],
       "ir": "coche",
       "dato": "Mascota",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Perro",
       "claves": [
        "собак"
       ],
       "resp": [
        {
         "ru": "Соба́ка! Ба́рсик не бу́дет рад! 😂",
         "tr": "Sabáka! Bársik nie búdit rat!",
         "es": "¡Un perro! ¡Barsik no va a estar contento!"
        }
       ],
       "ir": "coche",
       "dato": "Mascota",
       "datoValor": "соба́ка"
      },
      {
       "etiqueta": "Gato",
       "claves": [
        "кот",
        "кошк"
       ],
       "resp": [
        {
         "ru": "Как у меня́! 🐈 Они́ мо́гут быть друзья́ми!",
         "tr": "Kak u miniá! Aní mógut byt druzyámi!",
         "es": "¡Como yo! ¡Pueden ser amigos!"
        }
       ],
       "ir": "coche",
       "dato": "Mascota",
       "datoValor": "кот"
      },
      {
       "etiqueta": "Otro animal",
       "claves": [
        "есть"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 😮",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "coche",
       "dato": "Mascota"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "coche",
       "comodin": true
      }
     ]
    },
    {
     "id": "coche",
     "titulo": "El coche",
     "bot": [
      {
       "ru": "У нас нет маши́ны: в Москве́ есть метро́! 🚇 А у тебя́ есть маши́на?",
       "tr": "U nas niet mashíny: v Maskvié yest mitró! A u tibiá yest mashína?",
       "es": "No tenemos coche: ¡en Moscú hay metro! ¿Y tú tienes coche?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, у меня́ есть маши́на.",
       "es": "Sí, tengo coche."
      },
      {
       "ru": "Нет, у меня́ нет маши́ны.",
       "es": "No, no tengo coche."
      },
      {
       "ru": "У меня́ есть велосипе́д!",
       "es": "¡Tengo una bici!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет машины",
       "claves": [
        "=нет машины"
       ],
       "resp": [
        {
         "ru": "Как у нас! 👍",
         "tr": "Kak u nas!",
         "es": "¡Como nosotros!"
        }
       ],
       "ir": "tiempo",
       "dato": "Coche",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Нет машина (error)",
       "claves": [
        "=нет машина"
       ],
       "resp": [
        {
         "ru": "Нет маши́ны! 🙂",
         "tr": "Niet mashíny!",
         "es": "Después de нет, genitivo: нет машины."
        }
       ],
       "ir": "tiempo"
      },
      {
       "etiqueta": "Bici",
       "claves": [
        "велосипед"
       ],
       "resp": [
        {
         "ru": "Велосипе́д — э́то лу́чше! 🚲",
         "tr": "Vilasipiét — éta lúchshi!",
         "es": "¡La bici es mejor!"
        }
       ],
       "ir": "tiempo",
       "dato": "Coche",
       "datoValor": "велосипе́д"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "есть"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 🚗",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "tiempo",
       "dato": "Coche",
       "datoValor": "да"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Как у нас! 👍",
         "tr": "Kak u nas!",
         "es": "¡Como nosotros!"
        }
       ],
       "ir": "tiempo",
       "dato": "Coche",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "tiempo",
       "comodin": true
      }
     ]
    },
    {
     "id": "tiempo",
     "titulo": "Tiempo libre",
     "bot": [
      {
       "ru": "А у тебя́ есть свобо́дное вре́мя сего́дня? У меня́ нет вре́мени! 😩",
       "tr": "A u tibiá yest svabódnayi vriémia sivódnia? U miniá niet vriémini!",
       "es": "¿Y tienes tiempo libre hoy? ¡Yo no tengo tiempo!"
      }
     ],
     "ideas": [
      {
       "ru": "Да, у меня́ есть вре́мя.",
       "es": "Sí, tengo tiempo."
      },
      {
       "ru": "Нет, у меня́ то́же нет вре́мени.",
       "es": "No, yo tampoco tengo tiempo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет"
       ],
       "resp": [
        {
         "ru": "Мы о́ба за́няты! 😅",
         "tr": "My óba zánity!",
         "es": "¡Los dos estamos ocupados!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "есть"
       ],
       "resp": [
        {
         "ru": "Везёт! 😄",
         "tr": "Vizót!",
         "es": "¡Qué suerte!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-gusta",
   "desde": 10,
   "titulo": "Тебе́ нра́вится?",
   "tituloEs": "¿Te gusta?",
   "resumen": "Мне нра́вится, мне ну́жно, мне хо́лодно: el dativo",
   "intro": "Masha habla de gustos y necesidades. En ruso, «me gusta» se dice мне нравится: la persona va en dativo.",
   "inicio": "ciudad",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ciudad",
     "titulo": "Tu ciudad",
     "bot": [
      {
       "ru": "Тебе́ нра́вится твой го́род? 🏙️ Мне о́чень нра́вится Москва́!",
       "tr": "Tibié nrávitsa tvoi górat? Mnie óchin nrávitsa Maskvá!",
       "es": "¿Te gusta tu ciudad? ¡A mí me encanta Moscú!"
      }
     ],
     "ideas": [
      {
       "ru": "Да, мне о́чень нра́вится.",
       "es": "Sí, me gusta mucho."
      },
      {
       "ru": "Не о́чень.",
       "es": "No mucho."
      },
      {
       "ru": "Мне нра́вится, но там до́рого.",
       "es": "Me gusta, pero es caro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Я нравится (error)",
       "claves": [
        "=я нравится"
       ],
       "resp": [
        {
         "ru": "Не «я нра́вится», а «мне нра́вится»! 🙂",
         "tr": "Nie «ya nrávitsa», a «mnie nrávitsa»!",
         "es": "No я нравится: мне нравится (dativo)."
        }
       ],
       "ir": "musica"
      },
      {
       "etiqueta": "Caro",
       "claves": [
        "дорого"
       ],
       "resp": [
        {
         "ru": "Москва́ то́же дорога́я! 😅",
         "tr": "Maskvá tózhi daragáya!",
         "es": "¡Moscú también es cara!"
        }
       ],
       "ir": "musica"
      },
      {
       "etiqueta": "No mucho",
       "claves": [
        "=не очень",
        "=не нравится",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Почему́? 🤔 Ну, ничего́!",
         "tr": "Pachimú? Nu, nichivó!",
         "es": "¿Por qué? ¡Bueno, no pasa nada!"
        }
       ],
       "ir": "musica"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "нравится",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "musica"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "musica",
       "comodin": true
      }
     ]
    },
    {
     "id": "musica",
     "titulo": "La música",
     "bot": [
      {
       "ru": "Кака́я му́зыка тебе́ нра́вится? Мне нра́вится рок! 🎸",
       "tr": "Kakáya múzyka tibié nrávitsa? Mnie nrávitsa rok!",
       "es": "¿Qué música te gusta? ¡A mí me gusta el rock!"
      }
     ],
     "ideas": [
      {
       "ru": "Мне нра́вится рок.",
       "es": "Me gusta el rock."
      },
      {
       "ru": "Мне нра́вится джаз.",
       "es": "Me gusta el jazz."
      },
      {
       "ru": "Мне нра́вится вся му́зыка!",
       "es": "¡Me gusta toda la música!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rock",
       "claves": [
        "рок"
       ],
       "resp": [
        {
         "ru": "Как мне! 🤘",
         "tr": "Kak mnie!",
         "es": "¡Como a mí!"
        }
       ],
       "ir": "frio",
       "dato": "Música",
       "datoValor": "рок"
      },
      {
       "etiqueta": "Otra",
       "claves": [
        "нравится",
        "нравятся"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 🎶",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "frio",
       "dato": "Música"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🎶",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "frio",
       "comodin": true
      }
     ]
    },
    {
     "id": "frio",
     "titulo": "Frío o calor",
     "bot": [
      {
       "ru": "Мне сейча́с хо́лодно! 🥶 В Москве́ ми́нус пять. А тебе́? Тебе́ хо́лодно и́ли жа́рко?",
       "tr": "Mnie siichás jóladna! V Maskvié mínus piat. A tibié? Tibié jóladna íli zhárka?",
       "es": "¡Ahora tengo frío! En Moscú hace cinco bajo cero. ¿Y tú? ¿Tienes frío o calor?"
      }
     ],
     "ideas": [
      {
       "ru": "Мне жа́рко! ☀️",
       "es": "¡Tengo calor!"
      },
      {
       "ru": "Мне то́же хо́лодно.",
       "es": "Yo también tengo frío."
      },
      {
       "ru": "Мне хорошо́.",
       "es": "Estoy bien."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Calor",
       "claves": [
        "жарко",
        "тепло"
       ],
       "resp": [
        {
         "ru": "Я тебе́ зави́дую! ☀️",
         "tr": "Ya tibié zavíduyu!",
         "es": "¡Te envidio!"
        }
       ],
       "ir": "necesito"
      },
      {
       "etiqueta": "Я холодно (error)",
       "claves": [
        "=я холодно",
        "=я жарко"
       ],
       "resp": [
        {
         "ru": "Не «я хо́лодно», а «мне хо́лодно»! 🙂",
         "tr": "Nie «ya jóladna», a «mnie jóladna»!",
         "es": "No я холодно: мне холодно."
        }
       ],
       "ir": "necesito"
      },
      {
       "etiqueta": "Frío / bien",
       "claves": [
        "холодно",
        "хорошо"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "necesito"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "necesito",
       "comodin": true
      }
     ]
    },
    {
     "id": "necesito",
     "titulo": "Necesito",
     "bot": [
      {
       "ru": "Мне ну́жно купи́ть но́вую ку́ртку! 🧥 А что тебе́ ну́жно сде́лать сего́дня?",
       "tr": "Mnie núzhna kupít nóvuyu kúrtku! A shto tibié núzhna zdiélat sivódnia?",
       "es": "¡Necesito comprar una chaqueta nueva! ¿Y qué tienes que hacer hoy?"
      }
     ],
     "ideas": [
      {
       "ru": "Мне ну́жно рабо́тать.",
       "es": "Tengo que trabajar."
      },
      {
       "ru": "Мне ну́жно купи́ть хлеб.",
       "es": "Tengo que comprar pan."
      },
      {
       "ru": "Мне ничего́ не ну́жно! 😎",
       "es": "¡No tengo que hacer nada!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего"
       ],
       "resp": [
        {
         "ru": "Везёт! 😎",
         "tr": "Vizót!",
         "es": "¡Qué suerte!"
        }
       ],
       "ir": "edad"
      },
      {
       "etiqueta": "Нужно + infinitivo",
       "claves": [
        "нужно",
        "надо"
       ],
       "resp": [
        {
         "ru": "Уда́чи! 💪",
         "tr": "Udáchi!",
         "es": "¡Suerte!"
        }
       ],
       "ir": "edad",
       "dato": "Hoy necesita"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "edad",
       "comodin": true
      }
     ]
    },
    {
     "id": "edad",
     "titulo": "La edad",
     "bot": [
      {
       "ru": "Мне два́дцать лет, а Ди́ме — шестна́дцать. А ско́лько тебе́ лет? 🎂 (Е́сли э́то не секре́т! 😄)",
       "tr": "Mnie dváttsat liet, a Dími — shisnáttsat. A skólka tibié liet? (Yésli éta nie sikriét! )",
       "es": "Tengo veinte años, y Dima, dieciséis. ¿Y cuántos años tienes? (¡Si no es un secreto!)"
      }
     ],
     "ideas": [
      {
       "ru": "Мне три́дцать лет.",
       "es": "Tengo treinta años."
      },
      {
       "ru": "Мне два́дцать пять.",
       "es": "Tengo veinticinco."
      },
      {
       "ru": "Э́то секре́т! 🤫",
       "es": "¡Es un secreto!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Secreto",
       "claves": [
        "секрет"
       ],
       "resp": [
        {
         "ru": "Хорошо́, хорошо́! 🤫😄",
         "tr": "Jarashó, jarashó!",
         "es": "¡Vale, vale!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Я … лет (error)",
       "claves": [
        "=я двадцать",
        "=я тридцать",
        "=я сорок"
       ],
       "resp": [
        {
         "ru": "По-ру́сски: «Мне … лет»! 🙂",
         "tr": "Parússki: «Mnie … liet»!",
         "es": "En ruso: Мне … лет (dativo)."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Мне … лет",
       "claves": [
        "=мне"
       ],
       "resp": [
        {
         "ru": "Отли́чный во́зраст! 😊",
         "tr": "Atlíchnyi vózrast!",
         "es": "¡Buena edad!"
        }
       ],
       "ir": "fin",
       "dato": "Edad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-con",
   "desde": 10,
   "titulo": "С кем?",
   "tituloEs": "¿Con quién?",
   "resumen": "El instrumental con с: с дру́гом, с ма́мой; мы с бра́том",
   "intro": "Masha te pregunta con quién vives, con quién paseas, con quién hablas. Usa с + instrumental.",
   "inicio": "vivir",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "vivir",
     "titulo": "¿Con quién vives?",
     "bot": [
      {
       "ru": "Я живу́ с роди́телями и с бра́том. 🏠 А ты? С кем ты живёшь?",
       "tr": "Ya zhivú s radítilimi i s brátam. A ty? S kem ty zhiviósh?",
       "es": "Vivo con mis padres y mi hermano. ¿Y tú? ¿Con quién vives?"
      }
     ],
     "ideas": [
      {
       "ru": "Я живу́ с семьёй.",
       "es": "Vivo con mi familia."
      },
      {
       "ru": "Я живу́ с му́жем.",
       "es": "Vivo con mi marido."
      },
      {
       "ru": "Я живу́ с жено́й.",
       "es": "Vivo con mi mujer."
      },
      {
       "ru": "Я живу́ оди́н.",
       "es": "Vivo solo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo/a",
       "claves": [
        "=один",
        "=одна"
       ],
       "resp": [
        {
         "ru": "{Оди́н/Одна́}? Ти́хо и споко́йно! 😊",
         "tr": "{Adín/Adná}? Tíja i spakóina!",
         "es": "¿Solo? ¡Tranquilidad!"
        }
       ],
       "ir": "pasear",
       "dato": "Vive con",
       "genero": {
        "один": "m",
        "одна": "f"
       },
       "datoValor": "оди́н / одна́"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=с жена",
        "=с муж",
        "=с друг",
        "=с мама",
        "=с семья"
       ],
       "resp": [
        {
         "ru": "С кем? С жено́й, с му́жем, с дру́гом! 🙂",
         "tr": "S kem? S zhinói, s múzhim, s drúgam!",
         "es": "Con quién: instrumental (с женой, с мужем, с другом)."
        }
       ],
       "ir": "pasear"
      },
      {
       "etiqueta": "Con alguien",
       "claves": [
        "=с",
        "=со"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 😊",
         "tr": "Zdórava!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "pasear",
       "dato": "Vive con"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "pasear",
       "comodin": true
      }
     ]
    },
    {
     "id": "pasear",
     "titulo": "Pasear",
     "bot": [
      {
       "ru": "Я ча́сто гуля́ю с Лу́касом. 🚶‍♀️🚶 А ты с кем гуля́ешь?",
       "tr": "Ya chásta guliáyu s Lúkasam. A ty s kem guliáyish?",
       "es": "Paseo mucho con Lucas. ¿Y tú con quién paseas?"
      }
     ],
     "ideas": [
      {
       "ru": "С дру́гом.",
       "es": "Con un amigo."
      },
      {
       "ru": "С подру́гой.",
       "es": "Con una amiga."
      },
      {
       "ru": "С соба́кой! 🐕",
       "es": "¡Con el perro!"
      },
      {
       "ru": "Оди́н.",
       "es": "Solo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Perro",
       "claves": [
        "собак"
       ],
       "resp": [
        {
         "ru": "С соба́кой! Ка́ждый день, да? 🐕",
         "tr": "S sabákai! Kázhdyi dien, da?",
         "es": "¡Con el perro! Todos los días, ¿no?"
        }
       ],
       "ir": "masha_dima"
      },
      {
       "etiqueta": "Con alguien",
       "claves": [
        "=с",
        "=со"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "masha_dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "masha_dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "masha_dima",
     "titulo": "Мы с бра́том",
     "bot": [
      {
       "ru": "Вчера́ мы с бра́том игра́ли в футбо́л. ⚽ «Мы с бра́том» — э́то я и брат! Кто игра́л в футбо́л?",
       "tr": "Fchirá my s brátam igráli v fudból. «My s brátam» — éta ya i brat! Kto igrál v fudból?",
       "es": "Ayer mi hermano y yo jugamos al fútbol. «Мы с братом» = mi hermano y yo. ¿Quién jugó al fútbol?"
      }
     ],
     "ideas": [
      {
       "ru": "Ты и Ди́ма.",
       "es": "Tú y Dima."
      },
      {
       "ru": "Ма́ша и Ди́ма.",
       "es": "Masha y Dima."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Masha y Dima",
       "claves": [
        "дим",
        "брат"
       ],
       "resp": [
        {
         "ru": "Да! Я и Ди́ма! И я вы́играла! 😎",
         "tr": "Da! Ya i Díma! I ya výigrala!",
         "es": "¡Sí! ¡Dima y yo! ¡Y gané yo!"
        }
       ],
       "ir": "cafe"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я и Ди́ма! ⚽",
         "tr": "Ya i Díma!",
         "es": "¡Dima y yo!"
        }
       ],
       "ir": "cafe",
       "comodin": true
      }
     ]
    },
    {
     "id": "cafe",
     "titulo": "El café",
     "bot": [
      {
       "ru": "Ты пьёшь ко́фе с молоко́м и́ли без молока́? ☕ Я — с молоко́м и с са́харом!",
       "tr": "Ty pyosh kófi s malakóm íli bies malaká? Ya — s malakóm i s sájaram!",
       "es": "¿Tomas el café con leche o sin leche? ¡Yo con leche y con azúcar!"
      }
     ],
     "ideas": [
      {
       "ru": "С молоко́м.",
       "es": "Con leche."
      },
      {
       "ru": "Без молока́ и без са́хара.",
       "es": "Sin leche y sin azúcar."
      },
      {
       "ru": "Я пью чай с лимо́ном.",
       "es": "Tomo té con limón."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sin",
       "claves": [
        "=без"
       ],
       "resp": [
        {
         "ru": "Без са́хара? Ты {си́льный/си́льная}! 💪",
         "tr": "Bies sájara? Ty {sílnyi/sílnaya}!",
         "es": "¿Sin azúcar? ¡Qué fuerte!"
        }
       ],
       "ir": "hablar"
      },
      {
       "etiqueta": "Con",
       "claves": [
        "=с"
       ],
       "resp": [
        {
         "ru": "Вку́сно! ☕",
         "tr": "Fkúsna!",
         "es": "¡Rico!"
        }
       ],
       "ir": "hablar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вку́сно! ☕",
         "tr": "Fkúsna!",
         "es": "¡Rico!"
        }
       ],
       "ir": "hablar",
       "comodin": true
      }
     ]
    },
    {
     "id": "hablar",
     "titulo": "Hablar ruso",
     "bot": [
      {
       "ru": "А с кем ты говори́шь по-ру́сски? Кро́ме меня́! 😄",
       "tr": "A s kem ty gavarísh parússki? Krómi miniá!",
       "es": "¿Y con quién hablas ruso? ¡Aparte de mí!"
      }
     ],
     "ideas": [
      {
       "ru": "С учи́телем.",
       "es": "Con el profesor."
      },
      {
       "ru": "С подру́гой.",
       "es": "Con una amiga."
      },
      {
       "ru": "То́лько с тобо́й!",
       "es": "¡Solo contigo!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo con Masha",
       "claves": [
        "тобой"
       ],
       "resp": [
        {
         "ru": "То́лько со мной?! Я так ра́да! 😍",
         "tr": "Tólka so mnoi?! Ya tak ráda!",
         "es": "¿¡Solo conmigo!? ¡Qué contenta estoy!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Con alguien",
       "claves": [
        "=с",
        "=со"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Говори́ть — э́то лу́чшая пра́ктика! 👍",
         "tr": "Atlíchna! Gavarít — éta lúchshaya práktika!",
         "es": "¡Genial! Hablar es la mejor práctica."
        }
       ],
       "ir": "fin",
       "dato": "Habla ruso con"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-profesion",
   "desde": 10,
   "titulo": "Кем ты рабо́таешь?",
   "tituloEs": "Trabajo e intereses",
   "resumen": "Рабо́тать кем, занима́ться чем, интересова́ться чем",
   "intro": "Masha quiere saber de qué trabajas y qué te interesa. Con работать, заниматься e интересоваться, el instrumental.",
   "inicio": "trabajo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "trabajo",
     "titulo": "¿De qué trabajas?",
     "bot": [
      {
       "ru": "Кем ты рабо́таешь, {nombre}? 💼",
       "tr": "Kem ty rabótayish, {nombre}?",
       "es": "¿De qué trabajas, {nombre}?"
      }
     ],
     "ideas": [
      {
       "ru": "Я рабо́таю инжене́ром.",
       "es": "Trabajo de ingeniero."
      },
      {
       "ru": "Я рабо́таю врачо́м.",
       "es": "Trabajo de médico."
      },
      {
       "ru": "Я рабо́таю учи́телем.",
       "es": "Trabajo de profesor."
      },
      {
       "ru": "Я не рабо́таю, я учу́сь.",
       "es": "No trabajo, estudio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No trabaja",
       "claves": [
        "=не работаю"
       ],
       "resp": [
        {
         "ru": "Как я! 📚",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "interes",
       "dato": "Trabajo",
       "datoValor": "не рабо́тает"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=работаю инженер",
        "=работаю врач",
        "=работаю учитель",
        "=работаю программист",
        "=работаю строитель"
       ],
       "resp": [
        {
         "ru": "Рабо́таю кем? Инжене́ром, врачо́м! 🙂",
         "tr": "Rabótayu kem? Inzhiniéram, vrachóm!",
         "es": "Trabajar de: instrumental (инженером, врачом)."
        }
       ],
       "ir": "interes"
      },
      {
       "etiqueta": "Работаю + instrumental",
       "claves": [
        "~ом",
        "~ем",
        "~ой",
        "~ей"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 👍",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "gusta",
       "dato": "Trabajo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 👍",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "interes",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "ru": "Я не рабо́таю, я студе́нтка. Но я хочу́ быть учи́тельницей! 👩‍🏫",
       "tr": "Ya nie rabótayu, ya studiéntka. No ya jachú byt uchítilnitsii!",
       "es": "No trabajo, soy estudiante. ¡Pero quiero ser profesora!"
      }
     ],
     "aTiTema": "trabajo_m"
    },
    {
     "id": "gusta",
     "titulo": "¿Te gusta?",
     "bot": [
      {
       "ru": "Тебе́ нра́вится твоя́ рабо́та? 🙂",
       "tr": "Tibié nrávitsa tvayá rabóta?",
       "es": "¿Te gusta tu trabajo?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, о́чень!",
       "es": "¡Sí, mucho!"
      },
      {
       "ru": "Не о́чень.",
       "es": "No mucho."
      },
      {
       "ru": "Иногда́. 😅",
       "es": "A veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "очень"
       ],
       "resp": [
        {
         "ru": "Э́то сча́стье! 😊",
         "tr": "Éta schástyi!",
         "es": "¡Eso es una suerte!"
        }
       ],
       "ir": "interes"
      },
      {
       "etiqueta": "No / a veces",
       "claves": [
        "=не",
        "=нет",
        "иногда"
       ],
       "resp": [
        {
         "ru": "Понима́ю. 😅",
         "tr": "Panimáyu.",
         "es": "Te entiendo."
        }
       ],
       "ir": "interes"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "interes",
       "comodin": true
      }
     ]
    },
    {
     "id": "interes",
     "titulo": "Intereses",
     "bot": [
      {
       "ru": "Я интересу́юсь исто́рией и иску́сством. 🏛️ А чем ты интересу́ешься?",
       "tr": "Ya intirisúyus istóriyii i iskússtvam. A chem ty intirisúyishsia?",
       "es": "Me interesan la historia y el arte. ¿Y a ti qué te interesa?"
      }
     ],
     "ideas": [
      {
       "ru": "Я интересу́юсь му́зыкой.",
       "es": "Me interesa la música."
      },
      {
       "ru": "Спо́ртом.",
       "es": "El deporte."
      },
      {
       "ru": "Ру́сским языко́м!",
       "es": "¡El ruso!"
      },
      {
       "ru": "Поли́тикой.",
       "es": "La política."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ruso",
       "claves": [
        "русским"
       ],
       "resp": [
        {
         "ru": "Я ви́жу! 😄",
         "tr": "Ya vízhu!",
         "es": "¡Ya lo veo!"
        }
       ],
       "ir": "deporte",
       "dato": "Le interesa",
       "datoValor": "ру́сский язы́к"
      },
      {
       "etiqueta": "Nominativo (error)",
       "claves": [
        "=интересуюсь музыка",
        "=интересуюсь спорт",
        "=интересуюсь история"
       ],
       "resp": [
        {
         "ru": "Интересу́юсь чем? Му́зыкой, спо́ртом! 🙂",
         "tr": "Intirisúyus chem? Múzykai, spórtam!",
         "es": "Interesarse por: instrumental (музыкой, спортом)."
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "Instrumental",
       "claves": [
        "~ой",
        "~ом",
        "~ей",
        "~ем"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "deporte",
       "dato": "Le interesa"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "deporte",
       "comodin": true
      }
     ]
    },
    {
     "id": "deporte",
     "titulo": "Deporte",
     "bot": [
      {
       "ru": "А каки́м спо́ртом ты занима́ешься? Я занима́юсь пла́ванием. 🏊‍♀️",
       "tr": "A kakím spórtam ty zanimáyishsia? Ya zanimáyus plávaniyim.",
       "es": "¿Y qué deporte practicas? Yo hago natación."
      }
     ],
     "ideas": [
      {
       "ru": "Я занима́юсь пла́ванием.",
       "es": "Hago natación."
      },
      {
       "ru": "Я занима́юсь те́ннисом.",
       "es": "Juego al tenis."
      },
      {
       "ru": "Я не занима́юсь спо́ртом. 😅",
       "es": "No hago deporte."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=не занимаюсь"
       ],
       "resp": [
        {
         "ru": "Ничего́! 😄",
         "tr": "Nichivó!",
         "es": "¡No pasa nada!"
        }
       ],
       "ir": "futuro"
      },
      {
       "etiqueta": "Instrumental",
       "claves": [
        "~ой",
        "~ом",
        "~ем",
        "~ей"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! 💪",
         "tr": "Maladiéts!",
         "es": "¡Bien hecho!"
        }
       ],
       "ir": "futuro",
       "dato": "Deporte"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "futuro",
       "comodin": true
      }
     ]
    },
    {
     "id": "futuro",
     "titulo": "Quería ser",
     "bot": [
      {
       "ru": "Когда́ я была́ ма́ленькой, я хоте́ла стать космона́втом! 🚀😂 А ты? Кем ты {хоте́л/хоте́ла} стать?",
       "tr": "Kagdá ya bylá málinkai, ya jatiéla stat kasmanáftam! A ty? Kem ty {jatiél/jatiéla} stat?",
       "es": "De pequeña quería ser astronauta. ¿Y tú? ¿Qué querías ser?"
      }
     ],
     "ideas": [
      {
       "ru": "Я хоте́л стать футболи́стом.",
       "es": "Quería ser futbolista."
      },
      {
       "ru": "Я хоте́ла стать врачо́м.",
       "es": "Quería ser médica."
      },
      {
       "ru": "Учи́телем.",
       "es": "Profesor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Instrumental",
       "claves": [
        "~ом",
        "~ем",
        "~ой",
        "~ей"
       ],
       "resp": [
        {
         "ru": "Интере́сно! А сейча́с? 😄",
         "tr": "Intiriésna! A siichás?",
         "es": "¡Interesante! ¿Y ahora?"
        }
       ],
       "ir": "fin",
       "dato": "De pequeño quería ser"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😄",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-regalos",
   "desde": 10,
   "titulo": "Кому́ пода́рок?",
   "tituloEs": "Regalos",
   "resumen": "El dativo: a quién le regalas, le escribes, le llamas",
   "intro": "Se acercan las fiestas y Masha compra regalos. ¿A quién le regala qué? Usa el dativo: ма́ме, бра́ту, дру́гу.",
   "inicio": "abuela",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "abuela",
     "titulo": "La abuela",
     "bot": [
      {
       "ru": "Я дарю́ ба́бушке тёплый шарф. 🧣 Кому́ я дарю́ шарф?",
       "tr": "Ya dariú bábushki tióplyi sharf. Kamú ya dariú sharf?",
       "es": "Le regalo a la abuela una bufanda calentita. ¿A quién le regalo la bufanda?"
      }
     ],
     "ideas": [
      {
       "ru": "Ба́бушке.",
       "es": "A la abuela."
      },
      {
       "ru": "Ты да́ришь шарф ба́бушке.",
       "es": "Le regalas la bufanda a la abuela."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Бабушке",
       "claves": [
        "=бабушке"
       ],
       "resp": [
        {
         "ru": "Да! Ба́бушке. 👍",
         "tr": "Da! Bábushki.",
         "es": "¡Sí! A la abuela."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra forma",
       "claves": [
        "бабушк"
       ],
       "resp": [
        {
         "ru": "Кому́? Ба́бушке! 🙂",
         "tr": "Kamú? Bábushki!",
         "es": "¿A quién? Dativo: бабушке."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ба́бушке! 🧣",
         "tr": "Bábushki!",
         "es": "¡A la abuela!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А что подари́ть Ди́ме? Он лю́бит футбо́л и компью́терные и́гры. 🤔",
       "tr": "A shto padarít Dími? On liúbit fudból i kampyútirnyyi ígry.",
       "es": "¿Y qué le regalo a Dima? Le encantan el fútbol y los videojuegos."
      }
     ],
     "ideas": [
      {
       "ru": "Мяч!",
       "es": "¡Una pelota!"
      },
      {
       "ru": "Но́вую игру́.",
       "es": "Un juego nuevo."
      },
      {
       "ru": "Мо́жет быть, кни́гу?",
       "es": "¿Quizá un libro?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Libro",
       "claves": [
        "книг"
       ],
       "resp": [
        {
         "ru": "Кни́гу? Ди́ме? 😂 Он не чита́ет!",
         "tr": "Knígu? Dími? On nie chitáyit!",
         "es": "¿Un libro? ¿A Dima? ¡No lee!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "мяч",
        "игру",
        "футбол",
        "компьютер"
       ],
       "resp": [
        {
         "ru": "Хоро́шая иде́я! Ди́ме понра́вится! 😊",
         "tr": "Jaróshaya idiéya! Dími panrávitsa!",
         "es": "¡Buena idea! ¡A Dima le va a gustar!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́шая иде́я! 😊",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А ты? Кому́ ты обы́чно да́ришь пода́рки? 🎁",
       "tr": "A ty? Kamú ty abýchna dárish padárki?",
       "es": "¿Y tú? ¿A quién le sueles hacer regalos?"
      }
     ],
     "ideas": [
      {
       "ru": "Ма́ме и па́пе.",
       "es": "A mamá y papá."
      },
      {
       "ru": "Друзья́м.",
       "es": "A los amigos."
      },
      {
       "ru": "Всем!",
       "es": "¡A todos!"
      },
      {
       "ru": "Жене́.",
       "es": "A mi mujer."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Todos",
       "claves": [
        "=всем"
       ],
       "resp": [
        {
         "ru": "Всем?! Ты о́чень {до́брый/до́брая}! 😍",
         "tr": "Fsiem?! Ty óchin {dóbryi/dóbraya}!",
         "es": "¿¡A todos!? ¡Eres muy generoso!"
        }
       ],
       "ir": "llamar"
      },
      {
       "etiqueta": "Dativo",
       "claves": [
        "~е",
        "~у",
        "~ю",
        "~ам",
        "~ям"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 🎁",
         "tr": "Zdórava!",
         "es": "¡Qué bien!"
        }
       ],
       "ir": "llamar",
       "dato": "Hace regalos a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🎁",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "llamar",
       "comodin": true
      }
     ]
    },
    {
     "id": "llamar",
     "titulo": "Llamar",
     "bot": [
      {
       "ru": "Я звоню́ ма́ме ка́ждый день. 📞 А ты? Кому́ ты звони́шь ча́сто?",
       "tr": "Ya zvaniú mámi kázhdyi dien. A ty? Kamú ty zvanísh chásta?",
       "es": "Llamo a mamá todos los días. ¿Y tú? ¿A quién llamas a menudo?"
      }
     ],
     "ideas": [
      {
       "ru": "Ма́ме.",
       "es": "A mamá."
      },
      {
       "ru": "Дру́гу.",
       "es": "A un amigo."
      },
      {
       "ru": "Сестре́.",
       "es": "A mi hermana."
      },
      {
       "ru": "Никому́! 😅",
       "es": "¡A nadie!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nadie",
       "claves": [
        "никому"
       ],
       "resp": [
        {
         "ru": "Никому́? Тогда́ ты пи́шешь мне! 😄",
         "tr": "Nikamú? Tagdá ty píshish mnie!",
         "es": "¿A nadie? ¡Entonces escríbeme a mí!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Acusativo (error)",
       "claves": [
        "=маму",
        "=папу",
        "=сестру",
        "=друга"
       ],
       "resp": [
        {
         "ru": "Звоню́ кому́? Ма́ме, дру́гу! 🙂",
         "tr": "Zvaniú kamú? Mámi, drúgu!",
         "es": "Llamar a alguien: dativo (маме, другу)."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Dativo",
       "claves": [
        "~е",
        "~у",
        "~ю"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 📞",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "dato": "Llama a menudo a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 📞",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u10-cuanto",
   "desde": 10,
   "titulo": "Ско́лько?",
   "tituloEs": "¿Cuánto?",
   "resumen": "Mucho, poco, un vaso de, dos horas: el genitivo de cantidad",
   "intro": "Masha te hace preguntas de cantidad: cuánto café, cuántos libros, cuántas horas. Después de мно́го, ма́ло, ско́лько, genitivo.",
   "inicio": "libros",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "libros",
     "titulo": "Libros",
     "bot": [
      {
       "ru": "У меня́ мно́го книг! 📚 А у тебя́? Ско́лько у тебя́ книг?",
       "tr": "U miniá mnóga knik! A u tibiá? Skólka u tibiá knik?",
       "es": "¡Tengo muchos libros! ¿Y tú? ¿Cuántos tienes?"
      }
     ],
     "ideas": [
      {
       "ru": "У меня́ мно́го книг.",
       "es": "Tengo muchos libros."
      },
      {
       "ru": "У меня́ ма́ло книг.",
       "es": "Tengo pocos libros."
      },
      {
       "ru": "У меня́ нет книг: я чита́ю в телефо́не.",
       "es": "No tengo libros: leo en el teléfono."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Teléfono",
       "claves": [
        "телефон"
       ],
       "resp": [
        {
         "ru": "Удо́бно! 📱",
         "tr": "Udóbna!",
         "es": "¡Práctico!"
        }
       ],
       "ir": "cafe"
      },
      {
       "etiqueta": "Много книга (error)",
       "claves": [
        "=много книги",
        "=много книга",
        "=мало книги"
       ],
       "resp": [
        {
         "ru": "Мно́го книг! 🙂",
         "tr": "Mnóga knik!",
         "es": "Después de много: genitivo plural, книг."
        }
       ],
       "ir": "cafe"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "много",
        "мало",
        "нет",
        "несколько"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 📚",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "cafe",
       "dato": "Libros"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 📚",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "cafe",
       "comodin": true
      }
     ]
    },
    {
     "id": "cafe",
     "titulo": "Café",
     "bot": [
      {
       "ru": "Я пью три ча́шки ко́фе в день! ☕☕☕ А ты?",
       "tr": "Ya pyu tri cháshki kófi v dien! A ty?",
       "es": "¡Tomo tres tazas de café al día! ¿Y tú?"
      }
     ],
     "ideas": [
      {
       "ru": "Одну́ ча́шку.",
       "es": "Una taza."
      },
      {
       "ru": "Две ча́шки.",
       "es": "Dos tazas."
      },
      {
       "ru": "Я пью стака́н воды́.",
       "es": "Tomo un vaso de agua."
      },
      {
       "ru": "Я не пью ко́фе.",
       "es": "No tomo café."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=не пью"
       ],
       "resp": [
        {
         "ru": "Совсе́м? 😮 Ты {здоро́вый/здоро́вая}!",
         "tr": "Safsiém? Ty {zdaróvyi/zdaróvaya}!",
         "es": "¿Nada? ¡Qué sano!"
        }
       ],
       "ir": "horas"
      },
      {
       "etiqueta": "Cantidad",
       "claves": [
        "чашк",
        "стакан",
        "одну",
        "две",
        "три",
        "пять",
        "много"
       ],
       "resp": [
        {
         "ru": "Поня́тно! ☕",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "horas",
       "dato": "Café al día"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! ☕",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "horas",
       "comodin": true
      }
     ]
    },
    {
     "id": "horas",
     "titulo": "Horas",
     "bot": [
      {
       "ru": "Ско́лько часо́в ты спишь? Я сплю шесть часо́в. 😴",
       "tr": "Skólka chisóf ty spish? Ya spliu shest chisóf.",
       "es": "¿Cuántas horas duermes? Yo duermo seis horas."
      }
     ],
     "ideas": [
      {
       "ru": "Семь часо́в.",
       "es": "Siete horas."
      },
      {
       "ru": "Во́семь часо́в.",
       "es": "Ocho horas."
      },
      {
       "ru": "Пять часо́в. 😩",
       "es": "Cinco horas."
      },
      {
       "ru": "Два часа́! 😱",
       "es": "¡Dos horas!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Muy poco",
       "claves": [
        "=два",
        "=три",
        "=четыре",
        "=2",
        "=3",
        "=4"
       ],
       "resp": [
        {
         "ru": "Так ма́ло?! 😱 На́до спать!",
         "tr": "Tak mála?! Náda spat!",
         "es": "¿¡Tan poco!? ¡Hay que dormir!"
        }
       ],
       "ir": "gente"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "час"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 😴",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "gente",
       "dato": "Duerme"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😴",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "gente",
       "comodin": true
      }
     ]
    },
    {
     "id": "gente",
     "titulo": "Gente",
     "bot": [
      {
       "ru": "В на́шем кла́ссе пятна́дцать студе́нтов. А ско́лько люде́й в твоём кла́ссе ру́сского? 👥",
       "tr": "V náshim klássi pitnáttsat studiéntaf. A skólka liudiéi v tvayóm klássi rússkaga?",
       "es": "En nuestra clase hay quince estudiantes. ¿Y cuántas personas hay en tu clase de ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Де́сять челове́к.",
       "es": "Diez personas."
      },
      {
       "ru": "Пять студе́нтов.",
       "es": "Cinco estudiantes."
      },
      {
       "ru": "Я учу́сь оди́н.",
       "es": "Estudio solo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo",
       "claves": [
        "=один",
        "=одна"
       ],
       "resp": [
        {
         "ru": "Оди́н? Тогда́ я твой класс! 😄",
         "tr": "Adín? Tagdá ya tvoi klass!",
         "es": "¿Solo? ¡Entonces yo soy tu clase!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Cantidad",
       "claves": [
        "человек",
        "студент",
        "людей"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 👥",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "fin",
       "dato": "Clase de ruso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 👥",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-tienda",
   "desde": 11,
   "titulo": "В магази́не",
   "tituloEs": "En una tienda",
   "resumen": "Comprar ropa: talla, color, precio, pagar",
   "intro": "Masha trabaja los sábados en una tienda de ropa. Hoy eres su cliente: pide, pregunta el precio y paga.",
   "inicio": "hola",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hola",
     "titulo": "Saludo",
     "bot": [
      {
       "ru": "Здра́вствуйте! 😊 Я сего́дня рабо́таю в магази́не. Что вы хоти́те купи́ть?",
       "tr": "Zdrástvuiti! Ya sivódnia rabótayu v magazíni. Shto vy jatíti kupít?",
       "es": "¡Hola! Hoy trabajo en la tienda. ¿Qué quiere comprar?"
      }
     ],
     "ideas": [
      {
       "ru": "Я хочу́ купи́ть ку́ртку.",
       "es": "Quiero comprar una chaqueta."
      },
      {
       "ru": "Мне ну́жен сви́тер.",
       "es": "Necesito un jersey."
      },
      {
       "ru": "Мо́жно посмотре́ть футбо́лки?",
       "es": "¿Puedo ver las camisetas?"
      },
      {
       "ru": "Я про́сто смотрю́.",
       "es": "Solo estoy mirando."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo mira",
       "claves": [
        "просто смотрю",
        "просто"
       ],
       "resp": [
        {
         "ru": "Коне́чно! 😊 Е́сли ну́жно — я тут.",
         "tr": "Kaniéshna! Yésli núzhna — ya tut.",
         "es": "¡Claro! Si necesita algo, estoy aquí."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Chaqueta / prenda",
       "claves": [
        "куртк",
        "свитер",
        "футболк",
        "рубашк",
        "платье",
        "брюк",
        "джинс",
        "пальто",
        "шапк",
        "юбк"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 👕",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "talla",
       "dato": "Quería comprar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 👕",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "talla",
       "comodin": true
      }
     ],
     "retomar": {
      "ru": "Что вы хоти́те купи́ть?",
      "tr": "Shto vy jatíti kupít?",
      "es": "¿Qué quiere comprar?"
     }
    },
    {
     "id": "talla",
     "titulo": "La talla",
     "bot": [
      {
       "ru": "Како́й у вас разме́р?",
       "tr": "Kakói u vas razmiér?",
       "es": "¿Qué talla tiene?"
      }
     ],
     "ideas": [
      {
       "ru": "Со́рок шесть.",
       "es": "Cuarenta y seis."
      },
      {
       "ru": "Со́рок во́семь, пожа́луйста.",
       "es": "Cuarenta y ocho, por favor."
      },
      {
       "ru": "Пятьдеся́т.",
       "es": "Cincuenta."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Ничего́! Мо́жно попро́бовать. 😊",
         "tr": "Nichivó! Mózhna papróbavat.",
         "es": "¡No pasa nada! Puede probárselo."
        }
       ],
       "ir": "color"
      },
      {
       "etiqueta": "Una talla",
       "claves": [
        "=эс",
        "=эм",
        "=эль",
        "сорок",
        "пятьдесят",
        "=s",
        "=m",
        "=l"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Perfecto!"
        }
       ],
       "ir": "color",
       "dato": "Talla"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "color",
       "comodin": true
      }
     ]
    },
    {
     "id": "color",
     "titulo": "El color",
     "bot": [
      {
       "ru": "Како́й цвет? У нас есть чёрный, си́ний и кра́сный. 🎨",
       "tr": "Kakói tsviet? U nas yest chórnyi, sínii i krásnyi.",
       "es": "¿Qué color? Tenemos negro, azul y rojo."
      }
     ],
     "ideas": [
      {
       "ru": "Чёрный, пожа́луйста.",
       "es": "Negro, por favor."
      },
      {
       "ru": "Си́ний.",
       "es": "Azul."
      },
      {
       "ru": "А зелёный есть?",
       "es": "¿Y verde hay?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Verde (no hay)",
       "claves": [
        "зелен"
       ],
       "resp": [
        {
         "ru": "Извини́те, зелёного нет. 😕 Есть то́лько чёрный, си́ний и кра́сный.",
         "tr": "Izviníti, ziliónaga niet. Yest tólka chórnyi, sínii i krásnyi.",
         "es": "Perdone, verde no hay. Solo negro, azul y rojo."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Color",
       "claves": [
        "черн",
        "син",
        "красн"
       ],
       "resp": [
        {
         "ru": "Хоро́ший вы́бор! 😊",
         "tr": "Jaróshii výbar!",
         "es": "¡Buena elección!"
        }
       ],
       "ir": "precio",
       "dato": "Color"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "precio",
       "comodin": true
      }
     ]
    },
    {
     "id": "precio",
     "titulo": "El precio",
     "bot": [
      {
       "ru": "Вот, пожа́луйста! 👕",
       "tr": "Vot, pazháluista!",
       "es": "¡Aquí tiene!"
      }
     ],
     "ideas": [
      {
       "ru": "Ско́лько сто́ит?",
       "es": "¿Cuánto cuesta?"
      },
      {
       "ru": "Э́то до́рого?",
       "es": "¿Es caro?"
      },
      {
       "ru": "Отли́чно, я беру́!",
       "es": "¡Perfecto, me lo llevo!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me lo llevo",
       "claves": [
        "беру",
        "возьму"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Э́то сто́ит две ты́сячи рубле́й. 💳",
         "tr": "Atlíchna! Éta stóit dvie týsichi rubliéi.",
         "es": "¡Perfecto! Cuesta dos mil rublos."
        }
       ],
       "ir": "pagar"
      },
      {
       "etiqueta": "Precio",
       "claves": [
        "сколько",
        "стоит",
        "дорого",
        "цена"
       ],
       "resp": [
        {
         "ru": "Две ты́сячи рубле́й. Не до́рого! 😊",
         "tr": "Dvie týsichi rubliéi. Nie dóraga!",
         "es": "Dos mil rublos. ¡No es caro!"
        }
       ],
       "ir": "decidir"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Э́то сто́ит две ты́сячи рубле́й. 😊",
         "tr": "Éta stóit dvie týsichi rubliéi.",
         "es": "Cuesta dos mil rublos."
        }
       ],
       "ir": "decidir",
       "comodin": true
      }
     ]
    },
    {
     "id": "decidir",
     "titulo": "¿Lo compra?",
     "bot": [
      {
       "ru": "Берёте? 🤔",
       "tr": "Birióti?",
       "es": "¿Se lo lleva?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, беру́.",
       "es": "Sí, me lo llevo."
      },
      {
       "ru": "Нет, спаси́бо, э́то до́рого.",
       "es": "No, gracias, es caro."
      },
      {
       "ru": "Я поду́маю.",
       "es": "Lo voy a pensar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No / pensar",
       "claves": [
        "=нет",
        "подумаю",
        "дорого"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Всего́ хоро́шего! 😊",
         "tr": "Jarashó! Fsivó jaróshiga!",
         "es": "¡Vale! ¡Que le vaya bien!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "беру",
        "возьму"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 😊",
         "tr": "Atlíchna!",
         "es": "¡Perfecto!"
        }
       ],
       "ir": "pagar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "pagar",
       "comodin": true
      }
     ]
    },
    {
     "id": "pagar",
     "titulo": "Pagar",
     "bot": [
      {
       "ru": "Вы бу́дете плати́ть ка́ртой и́ли нали́чными? 💳💵",
       "tr": "Vy búditi platít kártai íli nalíchnymi?",
       "es": "¿Va a pagar con tarjeta o en efectivo?"
      }
     ],
     "ideas": [
      {
       "ru": "Ка́ртой.",
       "es": "Con tarjeta."
      },
      {
       "ru": "Нали́чными.",
       "es": "En efectivo."
      },
      {
       "ru": "Мо́жно ка́ртой?",
       "es": "¿Se puede con tarjeta?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tarjeta",
       "claves": [
        "карт"
       ],
       "resp": [
        {
         "ru": "Коне́чно! 💳 Спаси́бо за поку́пку!",
         "tr": "Kaniéshna! Spasíba za pakúpku!",
         "es": "¡Claro! ¡Gracias por su compra!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Efectivo",
       "claves": [
        "наличн"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Вот ва́ша сда́ча. 💵 Спаси́бо!",
         "tr": "Jarashó! Vot vásha zdácha. Spasíba!",
         "es": "¡Bien! Aquí tiene el cambio. ¡Gracias!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! Спаси́бо за поку́пку! 😊",
         "tr": "Jarashó! Spasíba za pakúpku!",
         "es": "¡Bien! ¡Gracias por su compra!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всего́ хоро́шего! 😊 Всё, я сно́ва Ма́ша! Ты отли́чно покупа́ешь по-ру́сски! 👍",
       "tr": "Fsivó jaróshiga! Fsio, ya snóva Másha! Ty atlíchna pakupáyish parússki!",
       "es": "¡Que le vaya bien! Listo, vuelvo a ser Masha. ¡Compras perfecto en ruso!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-cafe",
   "desde": 11,
   "titulo": "В кафе́",
   "tituloEs": "En la cafetería",
   "resumen": "Pedir, preguntar qué hay, pedir la cuenta",
   "intro": "Masha y tú están en una cafetería de Moscú. Ella hace de camarera: pide algo de comer y de beber, y después la cuenta.",
   "inicio": "menu",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "menu",
     "titulo": "La carta",
     "bot": [
      {
       "ru": "До́брый день! Вот меню́. 📋 Что бу́дете пить?",
       "tr": "Dóbryi dien! Vot miniú. Shto búditi pit?",
       "es": "¡Buenas tardes! Aquí tiene la carta. ¿Qué va a tomar?"
      }
     ],
     "ideas": [
      {
       "ru": "Ко́фе, пожа́луйста.",
       "es": "Un café, por favor."
      },
      {
       "ru": "Мо́жно чай с лимо́ном?",
       "es": "¿Me trae un té con limón?"
      },
      {
       "ru": "Да́йте, пожа́луйста, во́ду.",
       "es": "Agua, por favor."
      },
      {
       "ru": "Что у вас есть?",
       "es": "¿Qué tienen?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Qué hay?",
       "claves": [
        "что у вас",
        "что есть"
       ],
       "resp": [
        {
         "ru": "У нас есть ко́фе, чай, сок и горя́чий шокола́д. ☕",
         "tr": "U nas yest kófi, chai, sok i gariáchii shakalát.",
         "es": "Tenemos café, té, zumo y chocolate caliente."
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Brusco: «Хочу…» sin пожалуйста",
       "claves": [
        "=хочу"
       ],
       "resp": [
        {
         "ru": "Хорошо́. 🙂 (По-ру́сски лу́чше: «Мо́жно…?» и́ли «… , пожа́луйста».)",
         "tr": "Jarashó. (Parússki lúchshi: «Mózhna…?» íli «… , pazháluista».)",
         "es": "Vale. (Suena más amable: Можно…? o … пожалуйста.)"
        }
       ],
       "ir": "comer"
      },
      {
       "etiqueta": "Bebida",
       "claves": [
        "кофе",
        "чай",
        "сок",
        "вод",
        "шоколад",
        "капучино",
        "латте"
       ],
       "resp": [
        {
         "ru": "Хорошо́! ☕",
         "tr": "Jarashó!",
         "es": "¡Muy bien!"
        }
       ],
       "ir": "comer",
       "dato": "En el café tomó"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! ☕",
         "tr": "Jarashó!",
         "es": "¡Muy bien!"
        }
       ],
       "ir": "comer",
       "comodin": true
      }
     ]
    },
    {
     "id": "comer",
     "titulo": "Comer",
     "bot": [
      {
       "ru": "А что бу́дете есть? У нас о́чень вку́сные блины́ и пироги́. 🥞",
       "tr": "A shto búditi yest? U nas óchin fkúsnyyi bliný i piraguí.",
       "es": "¿Y qué va a comer? Tenemos unos blinis y unas tartas muy ricos."
      }
     ],
     "ideas": [
      {
       "ru": "Блины́, пожа́луйста.",
       "es": "Blinis, por favor."
      },
      {
       "ru": "Мо́жно сала́т?",
       "es": "¿Me trae una ensalada?"
      },
      {
       "ru": "Пиро́г с я́блоками, пожа́луйста.",
       "es": "Una tarta de manzana, por favor."
      },
      {
       "ru": "Ничего́, спаси́бо.",
       "es": "Nada, gracias."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "pregunta"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "блин",
        "салат",
        "суп",
        "пирог",
        "торт",
        "бутерброд",
        "пицц"
       ],
       "resp": [
        {
         "ru": "Отли́чный вы́бор! 😋",
         "tr": "Atlíchnyi výbar!",
         "es": "¡Excelente elección!"
        }
       ],
       "ir": "pregunta",
       "dato": "En el café comió"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "pregunta",
       "comodin": true
      }
     ]
    },
    {
     "id": "pregunta",
     "titulo": "¿Algo más?",
     "bot": [
      {
       "ru": "Что́-нибудь ещё? 🙂",
       "tr": "Shtónibut yischó?",
       "es": "¿Algo más?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, спаси́бо.",
       "es": "No, gracias."
      },
      {
       "ru": "Ещё стака́н воды́, пожа́луйста.",
       "es": "Otro vaso de agua, por favor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Algo más",
       "claves": [
        "еще",
        "ещё"
       ],
       "resp": [
        {
         "ru": "Коне́чно! 💧",
         "tr": "Kaniéshna!",
         "es": "¡Claro!"
        }
       ],
       "ir": "rico"
      },
      {
       "etiqueta": "No",
       "claves": [
        "=нет",
        "спасибо"
       ],
       "resp": [
        {
         "ru": "Хорошо́! Сейча́с принесу́. 😊",
         "tr": "Jarashó! Siichás prinisú.",
         "es": "¡Bien! Enseguida se lo traigo."
        }
       ],
       "ir": "rico"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 😊",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "rico",
       "comodin": true
      }
     ]
    },
    {
     "id": "rico",
     "titulo": "¿Está rico?",
     "bot": [
      {
       "ru": "…Ну как? Вку́сно? 😊",
       "tr": "…Nu kak? Fkúsna?",
       "es": "…¿Y qué tal? ¿Está rico?"
      }
     ],
     "ideas": [
      {
       "ru": "О́чень вку́сно!",
       "es": "¡Muy rico!"
      },
      {
       "ru": "Норма́льно.",
       "es": "Está bien."
      },
      {
       "ru": "Ко́фе холо́дный. 😕",
       "es": "El café está frío."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Problema",
       "claves": [
        "холодн",
        "не вкусно",
        "плохо"
       ],
       "resp": [
        {
         "ru": "Ой, извини́те! Я сейча́с принесу́ друго́й. 🙏",
         "tr": "Oi, izviníti! Ya siichás prinisú drugói.",
         "es": "¡Uy, perdone! Enseguida le traigo otro."
        }
       ],
       "ir": "cuenta"
      },
      {
       "etiqueta": "Rico",
       "claves": [
        "вкусно",
        "нормально",
        "хорошо"
       ],
       "resp": [
        {
         "ru": "Я ра́да! 😊",
         "tr": "Ya ráda!",
         "es": "¡Me alegro!"
        }
       ],
       "ir": "cuenta"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я ра́да! 😊",
         "tr": "Ya ráda!",
         "es": "¡Me alegro!"
        }
       ],
       "ir": "cuenta",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuenta",
     "titulo": "La cuenta",
     "bot": [
      {
       "ru": "Что́-нибудь ещё? И́ли счёт? 🧾",
       "tr": "Shtónibut yischó? Íli schot?",
       "es": "¿Algo más? ¿O la cuenta?"
      }
     ],
     "ideas": [
      {
       "ru": "Счёт, пожа́луйста.",
       "es": "La cuenta, por favor."
      },
      {
       "ru": "Мо́жно счёт?",
       "es": "¿Me trae la cuenta?"
      },
      {
       "ru": "Мо́жно ка́ртой?",
       "es": "¿Se puede pagar con tarjeta?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Cuenta",
       "claves": [
        "счет",
        "заплатить",
        "карт",
        "наличн"
       ],
       "resp": [
        {
         "ru": "Коне́чно! С вас пятьсо́т рубле́й. Спаси́бо! 😊",
         "tr": "Kaniéshna! S vas pitsót rubliéi. Spasíba!",
         "es": "¡Claro! Son quinientos rublos. ¡Gracias!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! Вот счёт. 🧾",
         "tr": "Jarashó! Vot schot.",
         "es": "¡Bien! Aquí tiene la cuenta."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всего́ хоро́шего! 😊 …Всё, я сно́ва Ма́ша! Ты отли́чный клие́нт! 😄",
       "tr": "Fsivó jaróshiga! …Fsio, ya snóva Másha! Ty atlíchnyi kliyént!",
       "es": "¡Que le vaya bien! …Listo, vuelvo a ser Masha. ¡Eres un cliente estupendo!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-camino",
   "desde": 11,
   "titulo": "Как пройти́?",
   "tituloEs": "Preguntar el camino",
   "resumen": "Pedir y entender indicaciones: пря́мо, напра́во, нале́во",
   "intro": "Estás en Moscú y te perdiste. Le escribes a Masha para preguntarle cómo llegar. Lee bien sus indicaciones.",
   "inicio": "perdido",
   "apertura": false,
   "preguntas": [],
   "nodos": [
    {
     "id": "perdido",
     "titulo": "Perdido",
     "bot": [
      {
       "ru": "Приве́т! Ты где? Всё хорошо́? 📍",
       "tr": "Priviét! Ty gdie? Fsio jarashó?",
       "es": "¡Hola! ¿Dónde estás? ¿Todo bien?"
      }
     ],
     "ideas": [
      {
       "ru": "Я не зна́ю, где я! 😅",
       "es": "¡No sé dónde estoy!"
      },
      {
       "ru": "Я на Кра́сной пло́щади.",
       "es": "Estoy en la Plaza Roja."
      },
      {
       "ru": "Я у метро́.",
       "es": "Estoy en el metro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Ой! 😟",
         "tr": "Oi!",
         "es": "¡Uy!"
        }
       ],
       "ir": "vista"
      },
      {
       "etiqueta": "Dice dónde",
       "claves": [
        "=на",
        "=в",
        "=у",
        "рядом"
       ],
       "resp": [
        {
         "ru": "А, поня́тно!",
         "tr": "A, paniátna!",
         "es": "¡Ah, entiendo!"
        }
       ],
       "ir": "adonde",
       "dato": "Se perdió en"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно!",
         "tr": "Paniátna!",
         "es": "¡Entiendo!"
        }
       ],
       "ir": "adonde",
       "comodin": true
      }
     ]
    },
    {
     "id": "vista",
     "titulo": "¿Qué ves?",
     "bot": [
      {
       "ru": "Что ты ви́дишь? Магази́н? Банк? Метро́?",
       "tr": "Shto ty vídish? Magazín? Bank? Mitró?",
       "es": "¿Qué ves? ¿Una tienda? ¿Un banco? ¿El metro?"
      }
     ],
     "ideas": [
      {
       "ru": "Я ви́жу большо́й магази́н.",
       "es": "Veo una tienda grande."
      },
      {
       "ru": "Ря́дом банк.",
       "es": "Al lado hay un banco."
      },
      {
       "ru": "Я ви́жу метро́!",
       "es": "¡Veo el metro!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Algo",
       "claves": [
        "вижу",
        "рядом",
        "банк",
        "магазин",
        "метро"
       ],
       "resp": [
        {
         "ru": "Отли́чно, я зна́ю, где ты! 😄",
         "tr": "Atlíchna, ya znáyu, gdie ty!",
         "es": "¡Genial, ya sé dónde estás!"
        }
       ],
       "ir": "adonde"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́, я зна́ю! 😄",
         "tr": "Jarashó, ya znáyu!",
         "es": "¡Bien, ya sé!"
        }
       ],
       "ir": "adonde",
       "comodin": true
      }
     ]
    },
    {
     "id": "adonde",
     "titulo": "¿Adónde vas?",
     "bot": [
      {
       "ru": "А куда́ тебе́ ну́жно?",
       "tr": "A kudá tibié núzhna?",
       "es": "¿Y adónde tienes que ir?"
      }
     ],
     "ideas": [
      {
       "ru": "Мне ну́жно в гости́ницу.",
       "es": "Tengo que ir al hotel."
      },
      {
       "ru": "Как пройти́ к музе́ю?",
       "es": "¿Cómo llego al museo?"
      },
      {
       "ru": "Где ближа́йшая апте́ка?",
       "es": "¿Dónde está la farmacia más cercana?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Farmacia",
       "claves": [
        "аптек"
       ],
       "resp": [
        {
         "ru": "Апте́ка? Ты боле́ешь? 😟",
         "tr": "Aptiéka? Ty baliéyish?",
         "es": "¿Una farmacia? ¿Estás enfermo?"
        }
       ],
       "ir": "indicaciones",
       "dato": "Buscaba",
       "datoValor": "апте́ка"
      },
      {
       "etiqueta": "Un lugar",
       "claves": [
        "=в",
        "=к",
        "=до",
        "где",
        "пройти",
        "дойти",
        "доехать"
       ],
       "resp": [
        {
         "ru": "Хорошо́, вот как идти́! 😄",
         "tr": "Jarashó, vot kak ittí!",
         "es": "¡Bien, así se llega!"
        }
       ],
       "ir": "indicaciones",
       "dato": "Buscaba"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́!",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "indicaciones",
       "comodin": true
      }
     ]
    },
    {
     "id": "indicaciones",
     "titulo": "Indicaciones",
     "bot": [
      {
       "ru": "Ты идёшь пря́мо до светофо́ра, пото́м повора́чиваешь нале́во. Там бу́дет большо́й па́мятник. Э́то спра́ва. 🗺️ Поня́тно?",
       "tr": "Ty idiósh priáma do svitafóra, patóm pavaráchivayish naliéva. Tam búdit balshói pámitnik. Éta správa. Paniátna?",
       "es": "Sigue recto hasta el semáforo y después gira a la izquierda. Allí hay un monumento grande. Está a la derecha. ¿Entendido?"
      }
     ],
     "ideas": [
      {
       "ru": "Поня́тно, спаси́бо!",
       "es": "¡Entendido, gracias!"
      },
      {
       "ru": "Нале́во и́ли напра́во?",
       "es": "¿A la izquierda o a la derecha?"
      },
      {
       "ru": "Повтори́, пожа́луйста.",
       "es": "Repite, por favor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Izquierda o derecha?",
       "claves": [
        "налево или",
        "направо или",
        "налево",
        "направо"
       ],
       "resp": [
        {
         "ru": "Снача́ла пря́мо, пото́м нале́во. ⬅️ А па́мятник — спра́ва. ➡️",
         "tr": "Snachála priáma, patóm naliéva. ⬅ A pámitnik — správa.",
         "es": "Primero recto, después a la izquierda. Y el monumento, a la derecha."
        }
       ],
       "ir": "quiz"
      },
      {
       "etiqueta": "Entendido",
       "claves": [
        "понятно",
        "спасибо"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 👍",
         "tr": "Atlíchna!",
         "es": "¡Genial!"
        }
       ],
       "ir": "quiz"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Пря́мо, пото́м нале́во! 🙂",
         "tr": "Priáma, patóm naliéva!",
         "es": "¡Recto y después a la izquierda!"
        }
       ],
       "ir": "quiz",
       "comodin": true
      }
     ]
    },
    {
     "id": "quiz",
     "titulo": "¿Lo entendiste?",
     "bot": [
      {
       "ru": "Прове́рка! 😄 Ты идёшь пря́мо… а пото́м? Куда́ ты повора́чиваешь?",
       "tr": "Praviérka! Ty idiósh priáma… a patóm? Kudá ty pavaráchivayish?",
       "es": "¡Comprobación! Vas recto… ¿y después? ¿Hacia dónde giras?"
      }
     ],
     "ideas": [
      {
       "ru": "Нале́во.",
       "es": "A la izquierda."
      },
      {
       "ru": "Напра́во.",
       "es": "A la derecha."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Izquierda",
       "claves": [
        "налево"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Ты бу́дешь там че́рез пять мину́т! 🎉",
         "tr": "Právilna! Ty búdish tam chéris piat minút!",
         "es": "¡Correcto! ¡Vas a estar allí en cinco minutos!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Derecha (error)",
       "claves": [
        "направо"
       ],
       "resp": [
        {
         "ru": "Нет, нале́во! ⬅️ Напра́во — э́то па́мятник. 😄",
         "tr": "Niet, naliéva! ⬅ Napráva — éta pámitnik.",
         "es": "No, ¡a la izquierda! A la derecha está el monumento."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Нале́во! ⬅️",
         "tr": "Naliéva! ⬅",
         "es": "¡A la izquierda!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Уда́чи! Я жду сообще́ние, когда́ ты бу́дешь там! 📍",
       "tr": "Udáchi! Ya zhdu saapschéniyi, kagdá ty búdish tam!",
       "es": "¡Suerte! Espero tu mensaje cuando llegues."
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-problema",
   "desde": 11,
   "titulo": "Пробле́ма!",
   "tituloEs": "Un problema",
   "resumen": "Resolver problemas: pedir ayuda, avisar, disculparse",
   "intro": "Hoy todo sale mal: llegas tarde a quedar con Masha. Escríbele, discúlpate y busquen una solución.",
   "inicio": "donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "donde",
     "titulo": "¿Dónde estás?",
     "bot": [
      {
       "ru": "Ты где?! Я жду уже́ два́дцать мину́т! 😠⏰",
       "tr": "Ty gdie?! Ya zhdu uzhé dváttsat minút! ⏰",
       "es": "¿¡Dónde estás!? ¡Hace veinte minutos que espero!"
      }
     ],
     "ideas": [
      {
       "ru": "Извини́, я опа́здываю!",
       "es": "¡Perdona, llego tarde!"
      },
      {
       "ru": "Извини́! Я в метро́.",
       "es": "¡Perdón! Estoy en el metro."
      },
      {
       "ru": "Ой! Я забы́л!",
       "es": "¡Uy! ¡Me olvidé!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se olvidó",
       "claves": [
        "забыл",
        "забыла"
       ],
       "resp": [
        {
         "ru": "{Забы́л/Забы́ла}?! 😱",
         "tr": "{Zabýl/Zabýla}?!",
         "es": "¿¡Te olvidaste!?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Disculpa",
       "claves": [
        "извин",
        "прост",
        "опаздываю"
       ],
       "resp": [
        {
         "ru": "Хорошо́, хорошо́… 😤",
         "tr": "Jarashó, jarashó…",
         "es": "Vale, vale…"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 😤",
         "tr": "Jm…",
         "es": "Mmm…"
        }
       ],
       "ir": "porque",
       "comodin": true
      }
     ]
    },
    {
     "id": "porque",
     "titulo": "¿Por qué?",
     "bot": [
      {
       "ru": "Что случи́лось?",
       "tr": "Shto sluchílas?",
       "es": "¿Qué pasó?"
      }
     ],
     "ideas": [
      {
       "ru": "Метро́ не рабо́тает!",
       "es": "¡El metro no funciona!"
      },
      {
       "ru": "Я по́здно встал. 😅",
       "es": "Me levanté tarde."
      },
      {
       "ru": "Я потеря́л ключи́.",
       "es": "Perdí las llaves."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Metro",
       "claves": [
        "метро"
       ],
       "resp": [
        {
         "ru": "Ой, опя́ть! 😩 Тогда́ дава́й встре́тимся в кафе́ ря́дом с метро́.",
         "tr": "Oi, apiát! Tagdá davái fstriétimsia v kafé riádam s mitró.",
         "es": "¡Uf, otra vez! Entonces quedemos en la cafetería al lado del metro."
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Se levantó tarde",
       "claves": [
        "поздно",
        "проспал"
       ],
       "resp": [
        {
         "ru": "Как Ди́ма! 😂 Ла́дно.",
         "tr": "Kak Díma! Ládna.",
         "es": "¡Como Dima! Bueno."
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Llaves",
       "claves": [
        "ключ"
       ],
       "resp": [
        {
         "ru": "О нет! 😟 Ты их {нашёл/нашла́}?",
         "tr": "O niet! Ty ij {nashól/nashlá}?",
         "es": "¡Oh no! ¿Las encontraste?"
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно… 😅",
         "tr": "Paniátna…",
         "es": "Ya veo…"
        }
       ],
       "ir": "plan",
       "comodin": true
      }
     ]
    },
    {
     "id": "plan",
     "titulo": "Nuevo plan",
     "bot": [
      {
       "ru": "Ско́лько тебе́ ещё е́хать? Когда́ ты бу́дешь? ⏱️",
       "tr": "Skólka tibié yischó yéjat? Kagdá ty búdish? ⏱",
       "es": "¿Cuánto te falta? ¿Cuándo llegas?"
      }
     ],
     "ideas": [
      {
       "ru": "Че́рез де́сять мину́т.",
       "es": "En diez minutos."
      },
      {
       "ru": "Че́рез полчаса́. 😬",
       "es": "En media hora."
      },
      {
       "ru": "Я не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Media hora",
       "claves": [
        "полчаса",
        "час"
       ],
       "resp": [
        {
         "ru": "Полчаса́?! 😱 Хорошо́, я пью ко́фе и жду. ☕",
         "tr": "Palchisá?! Jarashó, ya pyu kófi i zhdu.",
         "es": "¿¡Media hora!? Bueno, me tomo un café y espero."
        }
       ],
       "ir": "fin_bien"
      },
      {
       "etiqueta": "Pronto",
       "claves": [
        "через",
        "минут",
        "скоро"
       ],
       "resp": [
        {
         "ru": "Хорошо́, жду! 👍",
         "tr": "Jarashó, zhdu!",
         "es": "¡Vale, te espero!"
        }
       ],
       "ir": "fin_bien"
      },
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не знаю"
       ],
       "resp": [
        {
         "ru": "Ла́дно… Я жду сообще́ние. 📱",
         "tr": "Ládna… Ya zhdu saapschéniyi.",
         "es": "Bueno… Espero tu mensaje."
        }
       ],
       "ir": "fin_bien"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́, жду! 👍",
         "tr": "Jarashó, zhdu!",
         "es": "¡Vale, te espero!"
        }
       ],
       "ir": "fin_bien",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin_bien",
     "titulo": "Llegas",
     "bot": [
      {
       "ru": "…О, вот ты! 😄 Ничего́ стра́шного. Ко́фе за тобо́й! ☕",
       "tr": "…O, vot ty! Nichivó stráshnaga. Kófi za tabói!",
       "es": "…¡Oh, aquí estás! No pasa nada. ¡Pero el café lo pagas tú!"
      }
     ],
     "ideas": [
      {
       "ru": "Коне́чно! Ещё раз извини́.",
       "es": "¡Claro! Perdón otra vez."
      },
      {
       "ru": "Договори́лись! 😄",
       "es": "¡Trato hecho!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Acepta",
       "claves": [
        "конечно",
        "договорились",
        "извини",
        "хорошо",
        "=да",
        "ладно"
       ],
       "resp": [
        {
         "ru": "😄 Всё в поря́дке!",
         "tr": "Fsio v pariátki!",
         "es": "¡Todo bien!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "😄 Всё в поря́дке!",
         "tr": "Fsio v pariátki!",
         "es": "¡Todo bien!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-invitar",
   "desde": 11,
   "titulo": "Пойдём?",
   "tituloEs": "Invitar",
   "resumen": "Invitar, aceptar, decir que no: Дава́й…, Хо́чешь…?",
   "intro": "Masha te invita a varias cosas por mensaje. Acepta, propón otra cosa o di que no… con amabilidad.",
   "inicio": "cine",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cine",
     "titulo": "El cine",
     "bot": [
      {
       "ru": "Хо́чешь пойти́ в кино́ в суббо́ту? 🎬 Там но́вый фильм!",
       "tr": "Jóchish paití v kinó v subbótu? Tam nóvyi film!",
       "es": "¿Quieres ir al cine el sábado? ¡Hay una peli nueva!"
      }
     ],
     "ideas": [
      {
       "ru": "Да, с удово́льствием!",
       "es": "¡Sí, con mucho gusto!"
      },
      {
       "ru": "Дава́й!",
       "es": "¡Vale!"
      },
      {
       "ru": "Извини́, в суббо́ту я не могу́.",
       "es": "Perdona, el sábado no puedo."
      },
      {
       "ru": "А како́й фильм?",
       "es": "¿Y qué película?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Qué película?",
       "claves": [
        "какой",
        "что за"
       ],
       "resp": [
        {
         "ru": "Коме́дия! 😂 Ру́сская коме́дия. Хо́чешь?",
         "tr": "Kamiédiya! Rússkaya kamiédiya. Jóchish?",
         "es": "¡Una comedia! Una comedia rusa. ¿Quieres?"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "No puede",
       "claves": [
        "=не могу",
        "занят"
       ],
       "resp": [
        {
         "ru": "Жаль! А в воскресе́нье? 🙂",
         "tr": "Zhal! A v vaskrisiényi?",
         "es": "¡Qué pena! ¿Y el domingo?"
        }
       ],
       "ir": "domingo"
      },
      {
       "etiqueta": "Acepta",
       "claves": [
        "удовольств",
        "давай",
        "=да",
        "хочу",
        "конечно",
        "пойдем",
        "пойду"
       ],
       "resp": [
        {
         "ru": "Отли́чно! 🎉 Тогда́ в шесть у кинотеа́тра!",
         "tr": "Atlíchna! Tagdá v shest u kinatiátra!",
         "es": "¡Genial! Entonces a las seis en el cine."
        }
       ],
       "ir": "cumple",
       "dato": "Aceptó",
       "datoValor": "кино́ в суббо́ту"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "cumple",
       "comodin": true
      }
     ]
    },
    {
     "id": "domingo",
     "titulo": "El domingo",
     "bot": [
      {
       "ru": "А в воскресе́нье ты свобо́д{ен/на}?",
       "tr": "A v vaskrisiényi ty svabót{yen/na}?",
       "es": "¿Y el domingo estás libre?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, в воскресе́нье могу́!",
       "es": "¡Sí, el domingo puedo!"
      },
      {
       "ru": "Нет, то́же не могу́. 😕",
       "es": "No, tampoco puedo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tampoco",
       "claves": [
        "=не могу",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Ничего́! В друго́й раз! 😊",
         "tr": "Nichivó! V drugói ras!",
         "es": "¡No pasa nada! ¡Otra vez será!"
        }
       ],
       "ir": "cumple"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "могу",
        "=да",
        "свобод"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Тогда́ в воскресе́нье! 🎬",
         "tr": "Atlíchna! Tagdá v vaskrisiényi!",
         "es": "¡Genial! ¡Entonces el domingo!"
        }
       ],
       "ir": "cumple"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "cumple",
       "comodin": true
      }
     ]
    },
    {
     "id": "cumple",
     "titulo": "El cumpleaños",
     "bot": [
      {
       "ru": "Ещё! В пя́тницу у Ди́мы день рожде́ния. 🎂 Ты придёшь?",
       "tr": "Yischó! V piátnitsu u Dímy dien razhdiéniya. Ty pridiósh?",
       "es": "¡Otra cosa! El viernes es el cumpleaños de Dima. ¿Vienes?"
      }
     ],
     "ideas": [
      {
       "ru": "Коне́чно, приду́!",
       "es": "¡Claro que voy!"
      },
      {
       "ru": "Спаси́бо за приглаше́ние! Приду́.",
       "es": "¡Gracias por la invitación! Voy."
      },
      {
       "ru": "А что подари́ть Ди́ме?",
       "es": "¿Y qué le regalo a Dima?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Regalo?",
       "claves": [
        "подарить",
        "подарок"
       ],
       "resp": [
        {
         "ru": "Он лю́бит футбо́л. Мяч — отли́чный пода́рок! ⚽ Так придёшь?",
         "tr": "On liúbit fudból. Miach — atlíchnyi padárak! Tak pridiósh?",
         "es": "Le encanta el fútbol. ¡Una pelota es un regalo perfecto! Entonces, ¿vienes?"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "No puede",
       "claves": [
        "=не могу",
        "=не приду"
       ],
       "resp": [
        {
         "ru": "Жаль! Ди́ма бу́дет скуча́ть. 😕",
         "tr": "Zhal! Díma búdit skuchát.",
         "es": "¡Qué pena! Dima te va a echar de menos."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Viene",
       "claves": [
        "приду",
        "конечно",
        "=да",
        "спасибо"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Ди́ма бу́дет рад! 🎉",
         "tr": "Atlíchna! Díma búdit rat!",
         "es": "¡Genial! ¡Dima va a estar contento!"
        }
       ],
       "ir": "fin",
       "dato": "Cumple de Dima",
       "datoValor": "придёт"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 🙂",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "До пя́тницы, {nombre}! 🎉",
       "tr": "Do piátnitsi, {nombre}!",
       "es": "¡Hasta el viernes, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u11-opinion",
   "desde": 11,
   "titulo": "Что ты ду́маешь?",
   "tituloEs": "Opiniones",
   "resumen": "Opinar y dar razones: по-мо́ему, я ду́маю, потому́ что",
   "intro": "Masha te pide tu opinión sobre la ciudad, el ruso y la comida. Da tu opinión y una razón: потому́ что…",
   "inicio": "ruso",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ruso",
     "titulo": "El ruso",
     "bot": [
      {
       "ru": "Как ты ду́маешь, ру́сский язы́к тру́дный? 🤔",
       "tr": "Kak ty dúmayish, rússkii yizýk trúdnyi?",
       "es": "¿Qué piensas? ¿El ruso es difícil?"
      }
     ],
     "ideas": [
      {
       "ru": "По-мо́ему, о́чень тру́дный!",
       "es": "¡Creo que es muy difícil!"
      },
      {
       "ru": "Я ду́маю, не о́чень.",
       "es": "Creo que no mucho."
      },
      {
       "ru": "Тру́дный, но интере́сный.",
       "es": "Difícil, pero interesante."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Difícil pero interesante",
       "claves": [
        "интересн"
       ],
       "resp": [
        {
         "ru": "Я согла́сна! 😊 А почему́ ты его́ у́чишь?",
         "tr": "Ya saglásna! A pachimú ty yivó úchish?",
         "es": "¡Estoy de acuerdo! ¿Y por qué lo estudias?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Difícil",
       "claves": [
        "трудн",
        "сложн"
       ],
       "resp": [
        {
         "ru": "Да, э́то тру́дно… 😅 А почему́ ты его́ у́чишь?",
         "tr": "Da, éta trúdna… A pachimú ty yivó úchish?",
         "es": "Sí, los casos… ¿Y por qué lo estudias?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "No mucho",
       "claves": [
        "=не очень",
        "легк",
        "легко"
       ],
       "resp": [
        {
         "ru": "Пра́вда? Молоде́ц! 💪 А почему́ ты его́ у́чишь?",
         "tr": "Právda? Maladiéts! A pachimú ty yivó úchish?",
         "es": "¿En serio? ¡Bien hecho! ¿Y por qué lo estudias?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! А почему́ ты у́чишь ру́сский?",
         "tr": "Intiriésna! A pachimú ty úchish rússkii?",
         "es": "¡Interesante! ¿Y por qué estudias ruso?"
        }
       ],
       "ir": "porque",
       "comodin": true
      }
     ]
    },
    {
     "id": "porque",
     "titulo": "¿Por qué?",
     "bot": [
      {
       "ru": "Почему́ ты у́чишь ру́сский?",
       "tr": "Pachimú ty úchish rússkii?",
       "es": "¿Por qué estudias ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Потому́ что мне нра́вится Росси́я.",
       "es": "Porque me gusta Rusia."
      },
      {
       "ru": "Потому́ что я хочу́ чита́ть ру́сскую литерату́ру!",
       "es": "¡Porque quiero leer literatura rusa!"
      },
      {
       "ru": "Потому́ что у меня́ ру́сская семья́.",
       "es": "Porque tengo familia rusa."
      },
      {
       "ru": "Для рабо́ты.",
       "es": "Por trabajo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tolstói / literatura",
       "claves": [
        "толст",
        "достоевск",
        "чехов",
        "пушкин",
        "литератур"
       ],
       "resp": [
        {
         "ru": "О, серьёзно! 📚 «Война́ и мир» тебя́ ждёт! 😄",
         "tr": "O, siryózna! «Vainá i mir» tibiá zhdiot!",
         "es": "¡Uau, en serio! ¡«Guerra y paz» te espera!"
        }
       ],
       "ir": "moscu",
       "dato": "Estudia ruso porque"
      },
      {
       "etiqueta": "Razón con потому что",
       "claves": [
        "потому"
       ],
       "resp": [
        {
         "ru": "Хоро́шая причи́на! 😊",
         "tr": "Jaróshaya prichína!",
         "es": "¡Buena razón!"
        }
       ],
       "ir": "moscu",
       "dato": "Estudia ruso porque"
      },
      {
       "etiqueta": "Trabajo",
       "claves": [
        "работ"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 💼",
         "tr": "Paniátna!",
         "es": "¡Entiendo!"
        }
       ],
       "ir": "moscu",
       "dato": "Estudia ruso porque",
       "datoValor": "для рабо́ты"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́шая причи́на! 😊",
         "tr": "Jaróshaya prichína!",
         "es": "¡Buena razón!"
        }
       ],
       "ir": "moscu",
       "comodin": true
      }
     ]
    },
    {
     "id": "moscu",
     "titulo": "La comida rusa",
     "bot": [
      {
       "ru": "А ру́сская ку́хня? Тебе́ нра́вится борщ? 🍲",
       "tr": "A rússkaya kújnia? Tibié nrávitsa borsch?",
       "es": "¿Y la cocina rusa? ¿Te gusta el borsch?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, по-мо́ему, о́чень вку́сно!",
       "es": "Sí, creo que está muy rico."
      },
      {
       "ru": "Я никогда́ не про́бовал борщ.",
       "es": "Nunca probé el borsch."
      },
      {
       "ru": "Не о́чень. Он сла́дкий!",
       "es": "No mucho. ¡Es dulce!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nunca probó",
       "claves": [
        "никогда",
        "не пробовал",
        "не пробовала"
       ],
       "resp": [
        {
         "ru": "Никогда́?! 😱 Ба́бушка пригото́вит!",
         "tr": "Nikagdá?! Bábushka prigatóvit!",
         "es": "¿¡Nunca!? ¡La abuela te lo prepara!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "No le gusta",
       "claves": [
        "=не очень",
        "=не нравится",
        "сладк"
       ],
       "resp": [
        {
         "ru": "Хм… Ба́бушка не услы́шит! 🤫😂",
         "tr": "Jm… Bábushka nie uslýshit!",
         "es": "Mmm… ¡Que no te oiga la abuela!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Le gusta",
       "claves": [
        "вкусно",
        "нравится",
        "=да"
       ],
       "resp": [
        {
         "ru": "Я согла́сна! 😋",
         "tr": "Ya saglásna!",
         "es": "¡Estoy de acuerdo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-consejos",
   "desde": 12,
   "titulo": "Что мне де́лать?",
   "tituloEs": "Dar consejos",
   "resumen": "El imperativo: дай совет, отдыха́й, не волну́йся",
   "intro": "Masha tiene problemas y te pide consejos. Responde con el imperativo: Отдыха́й!, Позвони́ ей!, Не волну́йся!",
   "inicio": "examen",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "examen",
     "titulo": "El examen",
     "bot": [
      {
       "ru": "За́втра у меня́ экза́мен, а я ничего́ не зна́ю! 😱 Что мне де́лать?",
       "tr": "Záftra u miniá igzámin, a ya nichivó nie znáyu! Shto mnie diélat?",
       "es": "¡Mañana tengo un examen y no sé nada! ¿Qué hago?"
      }
     ],
     "ideas": [
      {
       "ru": "Не волну́йся!",
       "es": "¡No te preocupes!"
      },
      {
       "ru": "Чита́й уче́бник весь ве́чер!",
       "es": "¡Lee el libro toda la noche!"
      },
      {
       "ru": "Спи! У́тром всё бу́дет лу́чше.",
       "es": "¡Duerme! Por la mañana todo será mejor."
      },
      {
       "ru": "Позвони́ Лу́касу, он помо́жет.",
       "es": "Llama a Lucas, te va a ayudar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Dormir",
       "claves": [
        "спи",
        "отдыхай",
        "ляг"
       ],
       "resp": [
        {
         "ru": "Спать? Хм… Мо́жет, ты {прав/права́}… 😴",
         "tr": "Spat? Jm… Mózhit, ty {praf/pravá}…",
         "es": "¿Dormir? Mmm… Quizá tienes razón…"
        }
       ],
       "ir": "ruido"
      },
      {
       "etiqueta": "No te preocupes",
       "claves": [
        "не волнуйся",
        "не переживай",
        "спокойно"
       ],
       "resp": [
        {
         "ru": "Спаси́бо, мне уже́ лу́чше! 😊",
         "tr": "Spasíba, mnie uzhé lúchshi!",
         "es": "¡Gracias, ya me siento mejor!"
        }
       ],
       "ir": "ruido"
      },
      {
       "etiqueta": "Presente (error)",
       "claves": [
        "=ты читаешь",
        "=ты спишь",
        "=ты звонишь"
       ],
       "resp": [
        {
         "ru": "Мне ну́жен сове́т: «Чита́й!», «Спи!», «Позвони́!» 🙂",
         "tr": "Mnie núzhin saviét: «Chitái!», «Spi!», «Pazvaní!»",
         "es": "Para aconsejar, imperativo: Читай!, Спи!, Позвони!"
        }
       ],
       "ir": null
      },
      {
       "etiqueta": "Un consejo (imperativo)",
       "claves": [
        "~й",
        "~и",
        "~ай",
        "~ей",
        "~ись",
        "~йся"
       ],
       "resp": [
        {
         "ru": "Хоро́ший сове́т! Спаси́бо! 🙏",
         "tr": "Jaróshii saviét! Spasíba!",
         "es": "¡Buen consejo! ¡Gracias!"
        }
       ],
       "ir": "ruido"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… Спаси́бо! 😅",
         "tr": "Jm… Spasíba!",
         "es": "Mmm… ¡Gracias!"
        }
       ],
       "ir": "ruido",
       "comodin": true
      }
     ]
    },
    {
     "id": "ruido",
     "titulo": "El vecino",
     "bot": [
      {
       "ru": "Ещё пробле́ма: мой сосе́д ка́ждую ночь игра́ет на гита́ре о́чень гро́мко! 🎸😩 Что мне де́лать?",
       "tr": "Yischó prabliéma: moi sasiét kázhduyu noch igráyit na guitári óchin grómka! Shto mnie diélat?",
       "es": "Otro problema: ¡mi vecino toca la guitarra muy fuerte todas las noches! ¿Qué hago?"
      }
     ],
     "ideas": [
      {
       "ru": "Поговори́ с ним!",
       "es": "¡Habla con él!"
      },
      {
       "ru": "Закро́й окно́!",
       "es": "¡Cierra la ventana!"
      },
      {
       "ru": "Позвони́ в поли́цию!",
       "es": "¡Llama a la policía!"
      },
      {
       "ru": "Пой о́чень гро́мко! 😂",
       "es": "¡Canta muy fuerte!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Venganza",
       "claves": [
        "пой",
        "громко"
       ],
       "resp": [
        {
         "ru": "Ой! Хоро́шая иде́я! 🎤😂",
         "tr": "Oi! Jaróshaya idiéya!",
         "es": "¡Uy! ¡Buena idea!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Policía",
       "claves": [
        "полици"
       ],
       "resp": [
        {
         "ru": "Поли́цию? Мо́жет, снача́ла поговорю́ с ним… 😅",
         "tr": "Palítsiyu? Mózhit, snachála pagavariú s nim…",
         "es": "¿A la policía? Quizá primero hablo con él…"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Hablar",
       "claves": [
        "поговори",
        "скажи"
       ],
       "resp": [
        {
         "ru": "Да, ты {прав/права́}: на́до поговори́ть. 🙂",
         "tr": "Da, ty {praf/pravá}: náda pagavarít.",
         "es": "Sí, tienes razón: hay que hablar."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Imperativo",
       "claves": [
        "~й",
        "~и",
        "~ай",
        "~ей"
       ],
       "resp": [
        {
         "ru": "Хоро́ший сове́т! 🙏",
         "tr": "Jaróshii saviét!",
         "es": "¡Buen consejo!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хм… 🤔 Спаси́бо!",
         "tr": "Jm… Spasíba!",
         "es": "Mmm… ¡Gracias!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма всё вре́мя игра́ет в компью́тер и не де́лает уро́ки. 🎮 Что ему́ сказа́ть? Как ему́ сказа́ть на «ты»?",
       "tr": "A Díma fsio vriémia igráyit v kampyúter i nie diélayit uróki. Shto yimú skazát? Kak yimú skazát na «ty»?",
       "es": "Y Dima juega todo el tiempo al ordenador y no hace los deberes. ¿Qué le digo? ¿Cómo se lo digo de «ты»?"
      }
     ],
     "ideas": [
      {
       "ru": "Ди́ма, сде́лай уро́ки!",
       "es": "¡Dima, haz los deberes!"
      },
      {
       "ru": "Не игра́й так мно́го!",
       "es": "¡No juegues tanto!"
      },
      {
       "ru": "Вы́ключи компью́тер!",
       "es": "¡Apaga el ordenador!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Negativo con imperfectivo",
       "claves": [
        "=не играй"
       ],
       "resp": [
        {
         "ru": "Отли́чно: «не игра́й»! 👍",
         "tr": "Atlíchna: «nie igrái»!",
         "es": "Perfecto: con не, el imperativo suele ir en imperfectivo."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Imperativo",
       "claves": [
        "сделай",
        "выключи",
        "~й",
        "~и"
       ],
       "resp": [
        {
         "ru": "Я ему́ так скажу́! 😂",
         "tr": "Ya yimú tak skazhú!",
         "es": "¡Se lo voy a decir así!"
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я ему́ скажу́! 😂",
         "tr": "Ya yimú skazhú!",
         "es": "¡Se lo voy a decir!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga",
     "titulo": "De «вы»",
     "bot": [
      {
       "ru": "А как сказа́ть О́льге Петро́вне на «вы»: «Повтори́, пожа́луйста»? 👩‍🏫",
       "tr": "A kak skazát Ólgui Pitróvni na «vy»: «Paftarí, pazháluista»?",
       "es": "¿Y cómo se le dice a Olga Petrovna de «вы» «repite, por favor»?"
      }
     ],
     "ideas": [
      {
       "ru": "Повтори́те, пожа́луйста.",
       "es": "Repita, por favor."
      },
      {
       "ru": "Повтори́, пожа́луйста.",
       "es": "Repite, por favor."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Вы",
       "claves": [
        "=повторите"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: на «вы» — «-те»! 👍",
         "tr": "Právilna: na «vy» — «-tie»!",
         "es": "Correcto: de «вы», -те."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Ты (error)",
       "claves": [
        "=повтори"
       ],
       "resp": [
        {
         "ru": "Э́то на «ты». О́льге Петро́вне — «повтори́те»! 🙂",
         "tr": "Éta na «ty». Ólgui Pitróvni — «paftaríti»!",
         "es": "Eso es de «ты». A Olga Petrovna: повторите."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Повтори́те, пожа́луйста»! 🙂",
         "tr": "«Paftaríti, pazháluista»!",
         "es": "¡Повторите, пожалуйста!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Спаси́бо за сове́ты, {nombre}! Ты настоя́щий друг! 💛",
       "tr": "Spasíba za saviéty, {nombre}! Ty nastayáschii druk!",
       "es": "¡Gracias por los consejos, {nombre}! ¡Eres un verdadero amigo!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-comparar",
   "desde": 12,
   "titulo": "Москва́ и́ли Барсело́на?",
   "tituloEs": "Comparar",
   "resumen": "Comparativos: бо́льше, лу́чше, доро́же, холодне́е, чем…",
   "intro": "Masha y tú comparan Moscú con tu ciudad: el tiempo, los precios, la comida… Usa los comparativos: теплее, дороже, лучше.",
   "inicio": "tiempo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "tiempo",
     "titulo": "El tiempo",
     "bot": [
      {
       "ru": "Где тепле́е зимо́й: в Москве́ и́ли у тебя́? 🥶☀️",
       "tr": "Gdie tipliéyi zimói: v Maskvié íli u tibiá?",
       "es": "¿Dónde hace más calor en invierno: en Moscú o donde vives?"
      }
     ],
     "ideas": [
      {
       "ru": "У меня́ тепле́е!",
       "es": "¡Donde vivo hace más calor!"
      },
      {
       "ru": "В Москве́ холодне́е.",
       "es": "En Moscú hace más frío."
      },
      {
       "ru": "У нас тепле́е, чем в Москве́.",
       "es": "Aquí hace más calor que en Moscú."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Comparativo",
       "claves": [
        "теплее",
        "холоднее"
       ],
       "resp": [
        {
         "ru": "Коне́чно! 😂 В Москве́ ми́нус два́дцать!",
         "tr": "Kaniéshna! V Maskvié mínus dváttsat!",
         "es": "¡Claro! ¡En Moscú hace veinte bajo cero!"
        }
       ],
       "ir": "caro"
      },
      {
       "etiqueta": "Sin comparativo",
       "claves": [
        "тепло",
        "холодно"
       ],
       "resp": [
        {
         "ru": "Да! Тепле́е! 🙂",
         "tr": "Da! Tipliéyi!",
         "es": "¡Sí! Comparando: теплее."
        }
       ],
       "ir": "caro"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я ду́маю, у тебя́ тепле́е! 😄",
         "tr": "Ya dúmayu, u tibiá tipliéyi!",
         "es": "¡Creo que donde vives hace más calor!"
        }
       ],
       "ir": "caro",
       "comodin": true
      }
     ]
    },
    {
     "id": "caro",
     "titulo": "Precios",
     "bot": [
      {
       "ru": "А где жизнь доро́же? 💸 Говоря́т, Москва́ о́чень дорога́я.",
       "tr": "A gdie zhizn darózhi? Gavariát, Maskvá óchin daragáya.",
       "es": "¿Y dónde es más cara la vida? Dicen que Moscú es muy cara."
      }
     ],
     "ideas": [
      {
       "ru": "Москва́ доро́же.",
       "es": "Moscú es más cara."
      },
      {
       "ru": "У нас доро́же!",
       "es": "¡Aquí es más caro!"
      },
      {
       "ru": "Не зна́ю, наве́рное, одина́ково.",
       "es": "No sé, quizá igual."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Igual",
       "claves": [
        "одинаково"
       ],
       "resp": [
        {
         "ru": "Мо́жет быть! 🤔",
         "tr": "Mózhit byt!",
         "es": "¡Quizá!"
        }
       ],
       "ir": "comida"
      },
      {
       "etiqueta": "Comparativo",
       "claves": [
        "дороже",
        "дешевле"
       ],
       "resp": [
        {
         "ru": "Интере́сно! 💸",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "comida"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 💸",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "comida",
       "comodin": true
      }
     ]
    },
    {
     "id": "comida",
     "titulo": "La comida",
     "bot": [
      {
       "ru": "А кака́я ку́хня лу́чше: ру́сская и́ли испа́нская? 🥞🥘 Я ду́маю, испа́нская!",
       "tr": "A kakáya kújnia lúchshi: rússkaya íli ispánskaya? Ya dúmayu, ispánskaya!",
       "es": "¿Y qué cocina es mejor: la rusa o la española? ¡Yo creo que la española!"
      }
     ],
     "ideas": [
      {
       "ru": "Испа́нская лу́чше!",
       "es": "¡La española es mejor!"
      },
      {
       "ru": "Ру́сская! Блины́ — са́мые вку́сные!",
       "es": "¡La rusa! ¡Los blinis son lo más rico!"
      },
      {
       "ru": "О́бе хоро́шие!",
       "es": "¡Las dos son buenas!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Las dos",
       "claves": [
        "обе",
        "обе вкусн"
       ],
       "resp": [
        {
         "ru": "Хоро́ший отве́т! 😂",
         "tr": "Jaróshii atviét!",
         "es": "¡Buena respuesta!"
        }
       ],
       "ir": "ciudad"
      },
      {
       "etiqueta": "Rusa",
       "claves": [
        "русск",
        "блин"
       ],
       "resp": [
        {
         "ru": "Ба́бушка бу́дет сча́стлива! 🥞😄",
         "tr": "Bábushka búdit schástliva!",
         "es": "¡La abuela va a estar feliz!"
        }
       ],
       "ir": "ciudad"
      },
      {
       "etiqueta": "Española",
       "claves": [
        "испанск",
        "паэл"
       ],
       "resp": [
        {
         "ru": "Я так и зна́ла! 🥘",
         "tr": "Ya tak i znála!",
         "es": "¡Lo sabía!"
        }
       ],
       "ir": "ciudad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😋",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "ciudad",
       "comodin": true
      }
     ]
    },
    {
     "id": "ciudad",
     "titulo": "La ciudad",
     "bot": [
      {
       "ru": "А как ты ду́маешь, како́й го́род краси́вее: Москва́ и́ли твой? 🏙️",
       "tr": "A kak ty dúmayish, kakói górat krasíviyi: Maskvá íli tvoi?",
       "es": "¿Y qué ciudad es más bonita, para ti: Moscú o tu ciudad?"
      }
     ],
     "ideas": [
      {
       "ru": "Мой го́род краси́вее!",
       "es": "¡Mi ciudad es más bonita!"
      },
      {
       "ru": "Москва́ бо́льше, но мой го́род краси́вее.",
       "es": "Moscú es más grande, pero mi ciudad es más bonita."
      },
      {
       "ru": "Не зна́ю, я не был в Москве́.",
       "es": "No sé, no estuve en Moscú."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No estuvo",
       "claves": [
        "не был",
        "не была"
       ],
       "resp": [
        {
         "ru": "Тогда́ приезжа́й и сравни́! 😉",
         "tr": "Tagdá priyizhzhái i sravní!",
         "es": "¡Entonces ven y compara!"
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Comparativo",
       "claves": [
        "красивее",
        "больше",
        "лучше",
        "интереснее"
       ],
       "resp": [
        {
         "ru": "Ты лю́бишь свой го́род! 😄",
         "tr": "Ty liúbish svoi górat!",
         "es": "¡Quieres a tu ciudad!"
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🙂",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "mejor",
       "comodin": true
      }
     ]
    },
    {
     "id": "mejor",
     "titulo": "Lo mejor",
     "bot": [
      {
       "ru": "А что са́мое лу́чшее в твоём го́роде? ⭐",
       "tr": "A shto sámayi lúchshiyi v tvayóm góradi? ⭐",
       "es": "¿Y qué es lo mejor de tu ciudad?"
      }
     ],
     "ideas": [
      {
       "ru": "Мо́ре!",
       "es": "¡El mar!"
      },
      {
       "ru": "Лю́ди.",
       "es": "La gente."
      },
      {
       "ru": "Еда́!",
       "es": "¡La comida!"
      },
      {
       "ru": "Пого́да.",
       "es": "El tiempo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Respuesta",
       "claves": [
        "мор",
        "люд",
        "ед",
        "погод",
        "архитектур",
        "парк"
       ],
       "resp": [
        {
         "ru": "Я хочу́ уви́деть! 😍",
         "tr": "Ya jachú uvídit!",
         "es": "¡Quiero verlo!"
        }
       ],
       "ir": "fin",
       "dato": "Lo mejor de su ciudad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Я хочу́ уви́деть! 😍",
         "tr": "Ya jachú uvídit!",
         "es": "¡Quiero verlo!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-receta",
   "desde": 12,
   "titulo": "Реце́пт блино́в",
   "tituloEs": "Una receta",
   "resumen": "Instrucciones: возьми́, смеша́й, жарь; los imperativos en orden",
   "intro": "La abuela de Masha le dicta la receta de los blinis. Después te toca a ti explicar una receta de tu país.",
   "inicio": "ingredientes",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ingredientes",
     "titulo": "Ingredientes",
     "bot": [
      {
       "ru": "Ба́бушка говори́т: «Возьми́ молоко́, два яйца́, муку́ и са́хар». 🥛🥚 Что ну́жно взять?",
       "tr": "Bábushka gavarít: «Vazmí malakó, dva yiitsá, mukú i sájar». Shto núzhna vzat?",
       "es": "La abuela dice: «Coge leche, dos huevos, harina y azúcar». ¿Qué hay que coger?"
      }
     ],
     "ideas": [
      {
       "ru": "Молоко́, я́йца, муку́ и са́хар.",
       "es": "Leche, huevos, harina y azúcar."
      },
      {
       "ru": "Молоко́ и я́йца.",
       "es": "Leche y huevos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ingredientes",
       "claves": [
        "молок",
        "яйц",
        "мук",
        "сахар"
       ],
       "resp": [
        {
         "ru": "Да! 👍",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "mezclar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Молоко́, я́йца, муку́ и са́хар! 🙂",
         "tr": "Malakó, yáitsa, mukú i sájar!",
         "es": "¡Leche, huevos, harina y azúcar!"
        }
       ],
       "ir": "mezclar",
       "comodin": true
      }
     ]
    },
    {
     "id": "mezclar",
     "titulo": "Mezclar",
     "bot": [
      {
       "ru": "Пото́м: «Меша́й всё. Не торопи́сь!» 🥣 Ба́бушка всегда́ говори́т «не торопи́сь». 😄 Как сказа́ть «no te apures» по-ру́сски?",
       "tr": "Patóm: «Mishái fsio. Nie tarapís!» Bábushka fsigdá gavarít «nie tarapís». Kak skazát «no te apures» parússki?",
       "es": "Después: «Mézclalo todo. ¡No te apures!» ¿Cómo se dice «no te apures» en ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Не торопи́сь!",
       "es": "¡No te apures!"
      },
      {
       "ru": "Не спеши́!",
       "es": "¡No te des prisa!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "No te apures",
       "claves": [
        "торопись",
        "спеши"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! 👍",
         "tr": "Právilna!",
         "es": "¡Correcto!"
        }
       ],
       "ir": "freir"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Не торопи́сь!» 🙂",
         "tr": "«Nie tarapís!»",
         "es": "¡Не торопись!"
        }
       ],
       "ir": "freir",
       "comodin": true
      }
     ]
    },
    {
     "id": "freir",
     "titulo": "Freír",
     "bot": [
      {
       "ru": "И наконе́ц: «Гото́вь блины́ на плите́ мину́ту с ка́ждой стороны́». 🍳 Ско́лько мину́т?",
       "tr": "I nakaniéts: «Gatóf bliný na plitié minútu s kázhdai staraný». Skólka minút?",
       "es": "Y por último: «Fríe los blinis en la sartén un minuto por cada lado». ¿Cuántos minutos?"
      }
     ],
     "ideas": [
      {
       "ru": "Мину́ту с ка́ждой стороны́.",
       "es": "Un minuto por cada lado."
      },
      {
       "ru": "Одну́ мину́ту.",
       "es": "Un minuto."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Un minuto",
       "claves": [
        "минут"
       ],
       "resp": [
        {
         "ru": "Да! И гото́во! 🥞",
         "tr": "Da! I gatóva!",
         "es": "¡Sí! ¡Y listo!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Мину́ту! 🥞",
         "tr": "Minútu!",
         "es": "¡Un minuto!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "Tu receta",
     "bot": [
      {
       "ru": "А тепе́рь ты! Како́е блю́до ты уме́ешь гото́вить? 🍽️",
       "tr": "A tipiér ty! Kakóyi bliúda ty umiéyish gatóvit?",
       "es": "¡Ahora tú! ¿Qué plato sabes cocinar?"
      }
     ],
     "ideas": [
      {
       "ru": "Суп.",
       "es": "Sopa."
      },
      {
       "ru": "Сала́т!",
       "es": "¡Ensalada!"
      },
      {
       "ru": "Пи́ццу.",
       "es": "Pizza."
      },
      {
       "ru": "Я не уме́ю гото́вить. 😅",
       "es": "No sé cocinar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No sabe",
       "claves": [
        "=не умею"
       ],
       "resp": [
        {
         "ru": "Ничего́! Начни́ с блино́в! 🥞😄",
         "tr": "Nichivó! Nachní s blinóf!",
         "es": "¡No pasa nada! ¡Empieza con los blinis!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Un plato",
       "claves": [
        "~у",
        "~ю"
       ],
       "resp": [
        {
         "ru": "Вку́сно! А что ну́жно сде́лать снача́ла? 👩‍🍳",
         "tr": "Fkúsna! A shto núzhna zdiélat snachála?",
         "es": "¡Qué rico! ¿Y qué hay que hacer primero?"
        }
       ],
       "ir": "paso",
       "dato": "Sabe cocinar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вку́сно! А что ну́жно сде́лать снача́ла? 👩‍🍳",
         "tr": "Fkúsna! A shto núzhna zdiélat snachála?",
         "es": "¡Qué rico! ¿Y qué hay que hacer primero?"
        }
       ],
       "ir": "paso",
       "comodin": true
      }
     ]
    },
    {
     "id": "paso",
     "titulo": "El primer paso",
     "bot": [
      {
       "ru": "Объясни́ мне, как ба́бушка: «Возьми́…», «Нарежь…» 🔪",
       "tr": "Abyisní mnie, kak bábushka: «Vazmí…», «Narish…»",
       "es": "Explícamelo como la abuela: «Coge…», «Corta…»"
      }
     ],
     "ideas": [
      {
       "ru": "Возьми́ хлеб и сыр.",
       "es": "Coge pan y queso."
      },
      {
       "ru": "Снача́ла возьми́ во́ду.",
       "es": "Primero coge agua."
      },
      {
       "ru": "Гото́вь суп час.",
       "es": "Cocina la sopa una hora."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Imperativo",
       "claves": [
        "возьми",
        "нарежь",
        "смешай",
        "положи",
        "налей",
        "жарь",
        "~й",
        "~и"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Ты хоро́ший учи́тель! 👩‍🍳👍",
         "tr": "Atlíchna! Ty jaróshii uchítil!",
         "es": "¡Genial! ¡Eres un buen profe!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Presente (error)",
       "claves": [
        "=я беру",
        "=я режу",
        "=ты берешь"
       ],
       "resp": [
        {
         "ru": "В реце́пте лу́чше: «Возьми́…», «Гото́вь…»! 🙂",
         "tr": "V ritsépti lúchshi: «Vazmí…», «Gatóf…»!",
         "es": "En una receta, imperativo: Возьми, Готовь."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Спаси́бо! Я попро́бую! 👩‍🍳",
         "tr": "Spasíba! Ya papróbuyu!",
         "es": "¡Gracias! ¡Lo voy a probar!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Прия́тного аппети́та, {nombre}! 🥞",
       "tr": "Priyátnaga appitíta, {nombre}!",
       "es": "¡Buen provecho, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-pronombres",
   "desde": 12,
   "titulo": "О ком ты ду́маешь?",
   "tituloEs": "Él, ella, ellos",
   "resumen": "Los pronombres en todos los casos: о нём, с ней, им, их",
   "intro": "Masha te cuenta cosas de Lucas, Olga Petrovna y su familia. Contesta usando pronombres: о нём, с ней, им…",
   "inicio": "lucas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "lucas",
     "titulo": "Lucas",
     "bot": [
      {
       "ru": "Я ча́сто ду́маю о Лу́касе. 🙈 Он мой лу́чший друг… и́ли не то́лько друг? 😳 О ком я ду́маю?",
       "tr": "Ya chásta dúmayu o Lúkasi. On moi lúchshii druk… íli nie tólka druk? O kom ya dúmayu?",
       "es": "Pienso mucho en Lucas. Es mi mejor amigo… ¿o algo más? ¿En quién pienso?"
      }
     ],
     "ideas": [
      {
       "ru": "О нём!",
       "es": "¡En él!"
      },
      {
       "ru": "Ты ду́маешь о Лу́касе.",
       "es": "Piensas en Lucas."
      },
      {
       "ru": "О Лу́касе! 😏",
       "es": "¡En Lucas!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "О нём",
       "claves": [
        "=нем",
        "=нём"
       ],
       "resp": [
        {
         "ru": "Да, о нём! 😳 Э́то секре́т! 🤫",
         "tr": "Da, o niom! Éta sikriét!",
         "es": "¡Sí, en él! ¡Es un secreto!"
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "О Лукасе",
       "claves": [
        "лукасе"
       ],
       "resp": [
        {
         "ru": "Да! А с местоиме́нием: о нём. 🤫",
         "tr": "Da! A s mistaimiéniyim: o niom.",
         "es": "¡Sí! Con pronombre: о нём."
        }
       ],
       "ir": "olga"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "О нём! 🤫",
         "tr": "O niom!",
         "es": "¡En él!"
        }
       ],
       "ir": "olga",
       "comodin": true
      }
     ]
    },
    {
     "id": "olga",
     "titulo": "Olga Petrovna",
     "bot": [
      {
       "ru": "Вчера́ я говори́ла с О́льгой Петро́вной. 👩‍🏫 С кем я говори́ла? Скажи́ с местоиме́нием!",
       "tr": "Fchirá ya gavaríla s Ólgai Pitróvnai. S kem ya gavaríla? Skazhí s mistaimiéniyim!",
       "es": "Ayer hablé con Olga Petrovna. ¿Con quién hablé? ¡Dilo con un pronombre!"
      }
     ],
     "ideas": [
      {
       "ru": "С ней.",
       "es": "Con ella."
      },
      {
       "ru": "Ты говори́ла с ней.",
       "es": "Hablaste con ella."
      }
     ],
     "ramas": [
      {
       "etiqueta": "С ней",
       "claves": [
        "=ней"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: с ней! 👍",
         "tr": "Právilna: s niei!",
         "es": "¡Correcto: с ней!"
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "С она (error)",
       "claves": [
        "=она",
        "=её",
        "=ее"
       ],
       "resp": [
        {
         "ru": "С кем? С ней! (по́сле «с» — «ней») 🙂",
         "tr": "S kem? S niei! (pósli «s» — «niei»)",
         "es": "Después de с: ней."
        }
       ],
       "ir": "padres"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "С ней! 🙂",
         "tr": "S niei!",
         "es": "¡Con ella!"
        }
       ],
       "ir": "padres",
       "comodin": true
      }
     ]
    },
    {
     "id": "padres",
     "titulo": "Los padres",
     "bot": [
      {
       "ru": "За́втра у роди́телей годовщи́на сва́дьбы. 💍 Я хочу́ подари́ть им цветы́. Кому́ я хочу́ подари́ть цветы́?",
       "tr": "Záftra u radítilii gadafschína svádby. Ya jachú padarít im tsvitý. Kamú ya jachú padarít tsvitý?",
       "es": "Mañana es el aniversario de boda de mis padres. Les quiero regalar flores. ¿A quién les quiero regalar flores?"
      }
     ],
     "ideas": [
      {
       "ru": "Им.",
       "es": "A ellos."
      },
      {
       "ru": "Роди́телям.",
       "es": "A los padres."
      },
      {
       "ru": "Ты хо́чешь подари́ть им цветы́.",
       "es": "Les quieres regalar flores."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Им",
       "claves": [
        "=им"
       ],
       "resp": [
        {
         "ru": "Да, им! 💐",
         "tr": "Da, im!",
         "es": "¡Sí, a ellos!"
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Родителям",
       "claves": [
        "родителям"
       ],
       "resp": [
        {
         "ru": "Да! А коро́че: им. 💐",
         "tr": "Da! A karóchi: im.",
         "es": "¡Sí! Más corto: им."
        }
       ],
       "ir": "dima"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Им! 💐",
         "tr": "Im!",
         "es": "¡A ellos!"
        }
       ],
       "ir": "dima",
       "comodin": true
      }
     ]
    },
    {
     "id": "dima",
     "titulo": "Dima",
     "bot": [
      {
       "ru": "А Ди́ма? Ты его́ по́мнишь? 👦 Что ты зна́ешь о нём?",
       "tr": "A Díma? Ty yivó pómnish? Shto ty znáyish o niom?",
       "es": "¿Y Dima? ¿Te acuerdas de él? ¿Qué sabes de él?"
      }
     ],
     "ideas": [
      {
       "ru": "Он твой брат.",
       "es": "Es tu hermano."
      },
      {
       "ru": "Он лю́бит футбо́л и спит весь день! 😂",
       "es": "¡Le encanta el fútbol y duerme todo el día!"
      },
      {
       "ru": "Ему́ шестна́дцать лет.",
       "es": "Tiene dieciséis años."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Duerme",
       "claves": [
        "спит"
       ],
       "resp": [
        {
         "ru": "О, ты его́ хорошо́ зна́ешь! 😂",
         "tr": "O, ty yivó jarashó znáyish!",
         "es": "¡Oh, lo conoces bien!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Algo",
       "claves": [
        "брат",
        "футбол",
        "лет",
        "ему"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Ты хорошо́ его́ зна́ешь! 👍",
         "tr": "Právilna! Ty jarashó yivó znáyish!",
         "es": "¡Correcto! ¡Lo conoces bien!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Да! 😄",
         "tr": "Da!",
         "es": "¡Sí!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ]
    },
    {
     "id": "tu",
     "titulo": "¿Y tú?",
     "bot": [
      {
       "ru": "А о ком ты ча́сто ду́маешь? 💭 (Е́сли э́то не секре́т! 😉)",
       "tr": "A o kom ty chásta dúmayish? (Yésli éta nie sikriét! )",
       "es": "¿Y en quién piensas mucho? (¡Si no es un secreto!)"
      }
     ],
     "ideas": [
      {
       "ru": "О семье́.",
       "es": "En mi familia."
      },
      {
       "ru": "О рабо́те! 😅",
       "es": "¡En el trabajo!"
      },
      {
       "ru": "О тебе́! 😄",
       "es": "¡En ti!"
      },
      {
       "ru": "Э́то секре́т! 🤫",
       "es": "¡Es un secreto!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "En Masha",
       "claves": [
        "=тебе"
       ],
       "resp": [
        {
         "ru": "Я?! 😳😄",
         "tr": "Ya?!",
         "es": "¿¡En mí!?"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Secreto",
       "claves": [
        "секрет"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 🤫😄",
         "tr": "Jarashó!",
         "es": "¡Vale!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "=о",
        "=об",
        "=обо"
       ],
       "resp": [
        {
         "ru": "Понима́ю. 😊",
         "tr": "Panimáyu.",
         "es": "Te entiendo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Понима́ю. 😊",
         "tr": "Panimáyu.",
         "es": "Te entiendo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-amigos",
   "desde": 12,
   "titulo": "Мои́ друзья́",
   "tituloEs": "Mis amigos",
   "resumen": "Plurales en todos los casos y свой",
   "intro": "Masha habla de sus amigos y te pregunta por los tuyos. Practica los plurales (с друзья́ми, о друзья́х) y свой.",
   "inicio": "cuantos",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cuantos",
     "titulo": "¿Cuántos amigos?",
     "bot": [
      {
       "ru": "У меня́ мно́го друзе́й, но лу́чших друзе́й — два: Лу́кас и Ка́тя. 👫 А у тебя́ мно́го друзе́й?",
       "tr": "U miniá mnóga druzéi, no lúchshij druzéi — dva: Lúkas i Kátia. A u tibiá mnóga druzéi?",
       "es": "Tengo muchos amigos, pero mejores amigos, dos: Lucas y Katia. ¿Y tú tienes muchos amigos?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, у меня́ мно́го друзе́й.",
       "es": "Sí, tengo muchos amigos."
      },
      {
       "ru": "У меня́ два лу́чших дру́га.",
       "es": "Tengo dos mejores amigos."
      },
      {
       "ru": "Не о́чень мно́го.",
       "es": "No muchos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Много друзья (error)",
       "claves": [
        "=много друзья",
        "=много друзьях"
       ],
       "resp": [
        {
         "ru": "Мно́го друзе́й! 🙂",
         "tr": "Mnóga druzéi!",
         "es": "Muchos amigos: много друзей (genitivo plural)."
        }
       ],
       "ir": "con"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "друзей",
        "друга",
        "много",
        "мало",
        "немного"
       ],
       "resp": [
        {
         "ru": "Здо́рово! 👫",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "con",
       "dato": "Amigos"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 👫",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "con",
       "comodin": true
      }
     ]
    },
    {
     "id": "con",
     "titulo": "Con los amigos",
     "bot": [
      {
       "ru": "Что ты обы́чно де́лаешь с друзья́ми? Мы с друзья́ми хо́дим в кафе́. ☕",
       "tr": "Shto ty abýchna diélayish s druzyámi? My s druzyámi jódim v kafé.",
       "es": "¿Qué sueles hacer con tus amigos? Mis amigos y yo vamos a cafeterías."
      }
     ],
     "ideas": [
      {
       "ru": "Мы с друзья́ми игра́ем в футбо́л.",
       "es": "Mis amigos y yo jugamos al fútbol."
      },
      {
       "ru": "Мы хо́дим в бар.",
       "es": "Vamos a un bar."
      },
      {
       "ru": "Мы гото́вим у́жин вме́сте.",
       "es": "Cocinamos juntos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Respuesta",
       "claves": [
        "мы",
        "друзьями",
        "вместе"
       ],
       "resp": [
        {
         "ru": "Ве́село! 🎉",
         "tr": "Viésila!",
         "es": "¡Qué divertido!"
        }
       ],
       "ir": "svoy",
       "dato": "Con los amigos"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Ве́село! 🎉",
         "tr": "Viésila!",
         "es": "¡Qué divertido!"
        }
       ],
       "ir": "svoy",
       "comodin": true
      }
     ]
    },
    {
     "id": "svoy",
     "titulo": "Свой",
     "bot": [
      {
       "ru": "Лу́кас пи́шет свои́м роди́телям в Аргенти́ну ка́ждый день. 📱 Кому́ пи́шет Лу́кас?",
       "tr": "Lúkas píshit svaím radítilim v Arguintínu kázhdyi dien. Kamú píshit Lúkas?",
       "es": "Lucas les escribe a sus padres todos los días. ¿A quién le escribe Lucas?"
      }
     ],
     "ideas": [
      {
       "ru": "Свои́м роди́телям.",
       "es": "A sus padres."
      },
      {
       "ru": "Он пи́шет свои́м роди́телям.",
       "es": "Les escribe a sus padres."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Своим",
       "claves": [
        "своим"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: свои́м — его́ роди́телям! 👍",
         "tr": "Právilna: svaím — yivó radítilim!",
         "es": "¡Correcto! своим: a sus propios padres."
        }
       ],
       "ir": "regalo"
      },
      {
       "etiqueta": "Его (ambiguo)",
       "claves": [
        "=его"
       ],
       "resp": [
        {
         "ru": "«Его́ роди́телям» — э́то роди́тели друго́го челове́ка! Тут: свои́м. 🙂",
         "tr": "«Yivó radítilim» — éta radítili drugóga chilaviéka! Tut: svaím.",
         "es": "его родителям serían los padres de otra persona: aquí, своим."
        }
       ],
       "ir": "regalo"
      },
      {
       "etiqueta": "Родителям",
       "claves": [
        "родител"
       ],
       "resp": [
        {
         "ru": "Да! Свои́м роди́телям. 👍",
         "tr": "Da! Svaím radítilim.",
         "es": "¡Sí! A sus padres: своим родителям."
        }
       ],
       "ir": "regalo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Свои́м роди́телям! 🙂",
         "tr": "Svaím radítilim!",
         "es": "¡A sus padres!"
        }
       ],
       "ir": "regalo",
       "comodin": true
      }
     ]
    },
    {
     "id": "regalo",
     "titulo": "Regalos",
     "bot": [
      {
       "ru": "А ты ча́сто звони́шь свои́м друзья́м? 📞",
       "tr": "A ty chásta zvanísh svaím druzyám?",
       "es": "¿Y llamas a menudo a tus amigos?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я звоню́ свои́м друзья́м ка́ждую неде́лю.",
       "es": "Sí, llamo a mis amigos cada semana."
      },
      {
       "ru": "Нет, я пишу́ им.",
       "es": "No, les escribo."
      },
      {
       "ru": "Ре́дко.",
       "es": "Pocas veces."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Les escribe",
       "claves": [
        "пишу им",
        "пишу"
       ],
       "resp": [
        {
         "ru": "Как я! 📱",
         "tr": "Kak ya!",
         "es": "¡Como yo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "своим",
        "звоню",
        "редко",
        "часто",
        "=да",
        "=нет"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u12-aspecto",
   "desde": 12,
   "titulo": "Оди́н раз и́ли всегда́?",
   "tituloEs": "El aspecto, a fondo",
   "resumen": "Elegir bien el aspecto: proceso, resultado, una vez, siempre",
   "intro": "Masha te pone a prueba con el aspecto: ¿proceso o resultado?, ¿una vez o siempre? Responde y mira cómo reacciona.",
   "inicio": "siempre",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "siempre",
     "titulo": "Siempre o una vez",
     "bot": [
      {
       "ru": "Я всегда́ покупа́ю хлеб в э́том магази́не. 🍞 А вчера́ я купи́ла торт! 🎂 Почему́ «покупа́ю», а пото́м «купи́ла»?",
       "tr": "Ya fsigdá pakupáyu jliep v étam magazíni. A fchirá ya kupíla tort! Pachimú «pakupáyu», a patóm «kupíla»?",
       "es": "Siempre compro el pan en esta tienda. Y ayer compré una torta. ¿Por qué покупаю y después купила?"
      }
     ],
     "ideas": [
      {
       "ru": "«Всегда́» — э́то проце́сс, а не результа́т.",
       "es": "«Siempre» es un proceso, no un resultado."
      },
      {
       "ru": "Потому́ что вчера́ — оди́н раз.",
       "es": "Porque ayer fue una vez."
      },
      {
       "ru": "Не зна́ю.",
       "es": "No sé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Explica",
       "claves": [
        "всегда",
        "раз",
        "несовершен",
        "совершен",
        "результат"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Всегда́ — покупа́ю, оди́н раз — купи́ла. 👍",
         "tr": "Právilna! Fsigdá — pakupáyu, adín ras — kupíla.",
         "es": "¡Correcto! Siempre: покупаю; una vez: купила."
        }
       ],
       "ir": "terminar"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Всегда́ — покупа́ю, оди́н раз — купи́ла. 🙂",
         "tr": "Fsigdá — pakupáyu, adín ras — kupíla.",
         "es": "Siempre: imperfectivo (покупаю); una vez: perfectivo (купила)."
        }
       ],
       "ir": "terminar",
       "comodin": true
      }
     ]
    },
    {
     "id": "terminar",
     "titulo": "Resultado",
     "bot": [
      {
       "ru": "Я прочита́ла твоё сообще́ние! 📱 А ты? Ты уже́ {прочита́л/прочита́ла} кни́гу, кото́рую я тебе́ сове́товала?",
       "tr": "Ya prachitála tvayó saapschéniyi! A ty? Ty uzhé {prachitál/prachitála} knígu, katóruyu ya tibié saviétavala?",
       "es": "¡Leí tu mensaje! ¿Y tú? ¿Ya terminaste el libro que te recomendé?"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, я ещё чита́ю.",
       "es": "No, todavía lo estoy leyendo."
      },
      {
       "ru": "Да, я её прочита́л!",
       "es": "¡Sí, lo terminé!"
      },
      {
       "ru": "Я её не чита́л. 😅",
       "es": "No lo leí."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Todavía",
       "claves": [
        "еще читаю",
        "читаю"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: ещё чита́ешь — проце́сс! 📖",
         "tr": "Právilna: yischó chitáyish — pratséss!",
         "es": "¡Bien! Todavía lo lees: es un proceso."
        }
       ],
       "ir": "imper"
      },
      {
       "etiqueta": "No lo leyó",
       "claves": [
        "=не читал",
        "=не читала"
       ],
       "resp": [
        {
         "ru": "«Не чита́л» — ты да́же не {начина́л/начина́ла}! 😂",
         "tr": "«Nie chitál» — ty dázhi nie {nachinál/nachinála}!",
         "es": "Не читал: ¡ni siquiera empezaste!"
        }
       ],
       "ir": "imper"
      },
      {
       "etiqueta": "Terminado",
       "claves": [
        "прочитал"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! Результа́т! ✅",
         "tr": "Maladiéts! Rizultát!",
         "es": "¡Bien hecho! ¡Resultado!"
        }
       ],
       "ir": "imper"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 📖",
         "tr": "Paniátna!",
         "es": "Ya veo."
        }
       ],
       "ir": "imper",
       "comodin": true
      }
     ]
    },
    {
     "id": "imper",
     "titulo": "Imperativo",
     "bot": [
      {
       "ru": "А е́сли я тебя́ прошу́ оди́н раз: «Закро́й окно́, пожа́луйста!» 🪟 А е́сли всегда́: «Всегда́ … окно́!» Как?",
       "tr": "A yésli ya tibiá prashú adín ras: «Zakrói aknó, pazháluista!» A yésli fsigdá: «Fsigdá … aknó!» Kak?",
       "es": "Si te lo pido una vez: Закрой окно. Y si es siempre: «Siempre … la ventana». ¿Cómo?"
      }
     ],
     "ideas": [
      {
       "ru": "Всегда́ закрыва́й окно́!",
       "es": "¡Cierra siempre la ventana!"
      },
      {
       "ru": "Закрыва́й!",
       "es": "¡Cierra! (siempre)"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Закрывай",
       "claves": [
        "закрывай"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Всегда́ — закрыва́й! 👍",
         "tr": "Atlíchna! Fsigdá — zakryvái!",
         "es": "¡Genial! Siempre: закрывай."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Закрой (error)",
       "claves": [
        "закрой"
       ],
       "resp": [
        {
         "ru": "«Закро́й» — оди́н раз. Всегда́ — «закрыва́й»! 🙂",
         "tr": "«Zakrói» — adín ras. Fsigdá — «zakryvái»!",
         "es": "Закрой es una vez; siempre: закрывай."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Всегда́ закрыва́й окно́!» 🙂",
         "tr": "«Fsigdá zakryvái aknó!»",
         "es": "¡Всегда закрывай окно!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Ты зна́ешь вид лу́чше меня́! 😄 Пока́, {nombre}!",
       "tr": "Ty znáyish vit lúchshi miniá! Paká, {nombre}!",
       "es": "¡Sabes el aspecto mejor que yo! ¡Chau, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-recuerdo",
   "desde": 13,
   "titulo": "Лу́чшее воспомина́ние",
   "tituloEs": "Un buen recuerdo",
   "resumen": "Contar una experiencia y lo que sentiste",
   "intro": "Masha te cuenta su mejor recuerdo y te pregunta por el tuyo. Cuenta en pasado qué pasó y qué sentiste: я обра́довался, я удиви́лась…",
   "inicio": "suyo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "suyo",
     "titulo": "Su recuerdo",
     "bot": [
      {
       "ru": "Моё лу́чшее воспомина́ние — пе́рвый снег в Москве́, когда́ мне бы́ло пять лет. ❄️ Я была́ така́я счастли́вая! А како́е у тебя́ лу́чшее воспомина́ние?",
       "tr": "Mayó lúchshiyi vaspaminániyi — piérvyi sniek v Maskvié, kagdá mnie býla piat liet. Ya bylá takáya schistlívaya! A kakóyi u tibiá lúchshiyi vaspaminániyi?",
       "es": "Mi mejor recuerdo es la primera nieve en Moscú, cuando tenía cinco años. ¡Estaba tan feliz! ¿Y cuál es tu mejor recuerdo?"
      }
     ],
     "ideas": [
      {
       "ru": "Моё лу́чшее воспомина́ние — путеше́ствие в Ита́лию.",
       "es": "Mi mejor recuerdo es un viaje a Italia."
      },
      {
       "ru": "Когда́ я был ма́леньким, мы жи́ли у мо́ря.",
       "es": "Cuando era pequeño, vivíamos junto al mar."
      },
      {
       "ru": "Ну… мой пе́рвый день в университе́те.",
       "es": "Bueno… mi primer día en la universidad."
      },
      {
       "ru": "Не зна́ю, у меня́ мно́го воспомина́ний.",
       "es": "No sé, tengo muchos recuerdos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Viaje",
       "claves": [
        "путешеств",
        "поездк",
        "ездил",
        "ездила",
        "летал",
        "летала"
       ],
       "resp": [
        {
         "ru": "О, путеше́ствие! ✈️ Э́то всегда́ хоро́шее воспомина́ние.",
         "tr": "O, putishéstviyi! Éta fsigdá jaróshiyi vaspaminániyi.",
         "es": "¡Oh, un viaje! Siempre es un buen recuerdo."
        }
       ],
       "ir": "cuando",
       "dato": "Mejor recuerdo"
      },
      {
       "etiqueta": "Infancia",
       "claves": [
        "маленьк",
        "детств",
        "ребенк"
       ],
       "resp": [
        {
         "ru": "Как и у меня́ — из де́тства! 🧸",
         "tr": "Kak i u miniá — is diétstva!",
         "es": "¡Como el mío, de la infancia!"
        }
       ],
       "ir": "cuando",
       "dato": "Mejor recuerdo"
      },
      {
       "etiqueta": "Muchos",
       "claves": [
        "много воспоминан",
        "не знаю"
       ],
       "resp": [
        {
         "ru": "Здо́рово! Тогда́ вы́бери одно́! 😄",
         "tr": "Zdórava! Tagdá výbiri adnó!",
         "es": "¡Genial! ¡Entonces elige uno!"
        }
       ],
       "ir": "cuando"
      },
      {
       "etiqueta": "Otro recuerdo",
       "claves": [
        "воспоминан",
        "когда",
        "день",
        "был",
        "была"
       ],
       "resp": [
        {
         "ru": "Как интере́сно! 😊",
         "tr": "Kak intiriésna!",
         "es": "¡Qué interesante!"
        }
       ],
       "ir": "cuando",
       "dato": "Mejor recuerdo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Как интере́сно! 😊",
         "tr": "Kak intiriésna!",
         "es": "¡Qué interesante!"
        }
       ],
       "ir": "cuando",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuando",
     "titulo": "¿Cuándo fue?",
     "bot": [
      {
       "ru": "А когда́ э́то бы́ло? Давно́?",
       "tr": "A kagdá éta býla? Davnó?",
       "es": "¿Y cuándo fue? ¿Hace mucho?"
      }
     ],
     "ideas": [
      {
       "ru": "Э́то бы́ло пять лет наза́д.",
       "es": "Fue hace cinco años."
      },
      {
       "ru": "Давно́, когда́ мне бы́ло де́сять лет.",
       "es": "Hace mucho, cuando tenía diez años."
      },
      {
       "ru": "В про́шлом году́.",
       "es": "El año pasado."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Hace X",
       "claves": [
        "назад",
        "давно",
        "году",
        "лет",
        "было"
       ],
       "resp": [
        {
         "ru": "Поня́тно! Ты хорошо́ по́мнишь! 🙂",
         "tr": "Paniátna! Ty jarashó pómnish!",
         "es": "¡Ya veo! ¡Te acuerdas bien!"
        }
       ],
       "ir": "sentir"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "sentir",
       "comodin": true
      }
     ]
    },
    {
     "id": "sentir",
     "titulo": "Lo que sentiste",
     "bot": [
      {
       "ru": "А что ты {почу́вствовал/почу́вствовала}? Ты {обра́довался/обра́довалась}? {Удиви́лся/Удиви́лась}? 😊😮",
       "tr": "A shto ty {pachústvaval/pachústvavala}? Ty {abrádavalsia/abrádavalas}? {Udivílsia/Udivílas}?",
       "es": "¿Y qué sentiste? ¿Te alegraste? ¿Te sorprendiste?"
      }
     ],
     "ideas": [
      {
       "ru": "Я о́чень обра́довался!",
       "es": "¡Me alegré mucho!"
      },
      {
       "ru": "Я удиви́лась, потому́ что всё бы́ло так краси́во.",
       "es": "Me sorprendí, porque todo era tan bonito."
      },
      {
       "ru": "Снача́ла я испуга́лся, а пото́м был счастли́вым.",
       "es": "Primero me asusté y después estuve feliz."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Miedo",
       "claves": [
        "испуга",
        "страх",
        "страшно"
       ],
       "resp": [
        {
         "ru": "{Испуга́лся/Испуга́лась}?! 😨 Но пото́м всё бы́ло хорошо́!",
         "tr": "{Ispugálsia/Ispugálas}?! No patóm fsio býla jarashó!",
         "es": "¿Te asustaste? ¡Pero después salió todo bien!"
        }
       ],
       "ir": "detalle"
      },
      {
       "etiqueta": "Sorpresa",
       "claves": [
        "удиви",
        "удивлен"
       ],
       "resp": [
        {
         "ru": "Удивле́ние — э́то прекра́сное чу́вство! 😮✨",
         "tr": "Udivliéniyi — éta prikrásnayi chústva!",
         "es": "¡La sorpresa es un sentimiento precioso!"
        }
       ],
       "ir": "detalle"
      },
      {
       "etiqueta": "Alegría",
       "claves": [
        "обрадова",
        "радост",
        "счастлив",
        "счастье",
        "рад",
        "рада"
       ],
       "resp": [
        {
         "ru": "Как я тебя́ понима́ю! 🥰",
         "tr": "Kak ya tibiá panimáyu!",
         "es": "¡Cómo te entiendo!"
        }
       ],
       "ir": "detalle"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Понима́ю. Э́то си́льное чу́вство! ❤️",
         "tr": "Panimáyu. Éta sílnayi chústva!",
         "es": "Te entiendo. ¡Es un sentimiento fuerte!"
        }
       ],
       "ir": "detalle",
       "comodin": true
      }
     ]
    },
    {
     "id": "detalle",
     "titulo": "Más detalles",
     "bot": [
      {
       "ru": "Расскажи́ ещё! С кем ты {был/была́}?",
       "tr": "Rasskazhí yischó! S kem ty {byl/bylá}?",
       "es": "¡Cuéntame más! ¿Con quién estabas?"
      }
     ],
     "ideas": [
      {
       "ru": "Я был с семьёй.",
       "es": "Estaba con mi familia."
      },
      {
       "ru": "С друзья́ми.",
       "es": "Con amigos."
      },
      {
       "ru": "Я была́ одна́.",
       "es": "Estaba sola."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Solo/a",
       "claves": [
        "=один",
        "=одна"
       ],
       "resp": [
        {
         "ru": "{Оди́н/Одна́}? Э́то то́же хоро́ший о́пыт! 🙂",
         "tr": "{Adín/Adná}? Éta tózhi jaróshii ópyt!",
         "es": "¿Solo? ¡También es una buena experiencia!"
        }
       ],
       "ir": "foto"
      },
      {
       "etiqueta": "Con alguien",
       "claves": [
        "семь",
        "друз",
        "мамой",
        "папой",
        "мужем",
        "женой",
        "братом",
        "сестрой",
        "=с"
       ],
       "resp": [
        {
         "ru": "Вме́сте всегда́ лу́чше! 👨‍👩‍👧",
         "tr": "Vmiésti fsigdá lúchshi!",
         "es": "¡Juntos siempre es mejor!"
        }
       ],
       "ir": "foto"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Здо́рово! 🙂",
         "tr": "Zdórava!",
         "es": "¡Genial!"
        }
       ],
       "ir": "foto",
       "comodin": true
      }
     ]
    },
    {
     "id": "foto",
     "titulo": "¿Fotos?",
     "bot": [
      {
       "ru": "У тебя́ есть фотогра́фии? Я ча́сто смотрю́ ста́рые фотогра́фии и вспомина́ю. 📷",
       "tr": "U tibiá yest fatagráfii? Ya chásta smatriú stáryyi fatagráfii i fspamináyu.",
       "es": "¿Tienes fotos? Yo miro a menudo fotos viejas y me acuerdo."
      }
     ],
     "ideas": [
      {
       "ru": "Да, у меня́ мно́го фотогра́фий.",
       "es": "Sí, tengo muchas fotos."
      },
      {
       "ru": "Нет, но я всё по́мню.",
       "es": "No, pero me acuerdo de todo."
      },
      {
       "ru": "Да, я иногда́ их смотрю́.",
       "es": "Sí, a veces las miro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No",
       "claves": [
        "=нет",
        "помню"
       ],
       "resp": [
        {
         "ru": "Гла́вное — по́мнить! 💭",
         "tr": "Glávnayi — pómnit!",
         "es": "¡Lo importante es acordarse!"
        }
       ],
       "ir": "otra"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "фотограф",
        "смотрю"
       ],
       "resp": [
        {
         "ru": "Покажи́ мне когда́-нибудь! 📸",
         "tr": "Pakazhí mnie kagdánibut!",
         "es": "¡Muéstramelas algún día!"
        }
       ],
       "ir": "otra"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 📷",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "otra",
       "comodin": true
      }
     ]
    },
    {
     "id": "otra",
     "titulo": "¿Lo repetirías?",
     "bot": [
      {
       "ru": "А ты хо́чешь сно́ва э́то сде́лать? Е́сли бу́дет возмо́жность, ты пое́дешь туда́ ещё раз?",
       "tr": "A ty jóchish snóva éta zdiélat? Yésli búdit vazmózhnast, ty payédish tudá yischó ras?",
       "es": "¿Y quieres volver a hacerlo? Si tienes la oportunidad, ¿vas a volver a ir?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, коне́чно! Е́сли бу́дут де́ньги, пое́ду!",
       "es": "¡Sí, claro! Si tengo dinero, voy a ir."
      },
      {
       "ru": "Нет, пусть э́то бу́дет то́лько воспомина́ние.",
       "es": "No, que quede solo como un recuerdo."
      },
      {
       "ru": "Мо́жет быть.",
       "es": "Puede ser."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Si + futuro",
       "claves": [
        "если"
       ],
       "resp": [
        {
         "ru": "Отли́чно: «е́сли бу́дут де́ньги» — бу́дущее! 👍 Я то́же так говорю́.",
         "tr": "Atlíchna: «yésli búdut diéngui» — búduschiyi! Ya tózhi tak gavariú.",
         "es": "¡Perfecto! «Если будут деньги», con futuro."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Sí",
       "claves": [
        "=да",
        "конечно",
        "поеду",
        "хочу"
       ],
       "resp": [
        {
         "ru": "Обяза́тельно поезжа́й! 😊",
         "tr": "Abizátilna payizhzhái!",
         "es": "¡Tienes que ir!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "No / quizá",
       "claves": [
        "=нет",
        "может",
        "только"
       ],
       "resp": [
        {
         "ru": "Понима́ю. Иногда́ воспомина́ние лу́чше всего́. 💭",
         "tr": "Panimáyu. Inagdá vaspaminániyi lúchshi fsivó.",
         "es": "Te entiendo. A veces el recuerdo es lo mejor."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Понима́ю! 😊",
         "tr": "Panimáyu!",
         "es": "¡Te entiendo!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Спаси́бо за твою́ исто́рию, {nombre}! Пока́! 👋",
       "tr": "Spasíba za tvayú istóriyu, {nombre}! Paká!",
       "es": "¡Gracias por tu historia, {nombre}! ¡Chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-debate",
   "desde": 13,
   "titulo": "Го́род и́ли дере́вня?",
   "tituloEs": "Un debate",
   "resumen": "Opinar con razones: во-пе́рвых, во-вторы́х, я согла́сен",
   "intro": "Masha y tú debaten: ¿se vive mejor en la ciudad o en el campo? Da tu opinión con razones (во-пе́рвых, во-вторы́х) y di si estás de acuerdo.",
   "inicio": "pregunta",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pregunta",
     "titulo": "La pregunta",
     "bot": [
      {
       "ru": "Дава́й поспо́рим! 😄 Где лу́чше жить: в го́роде и́ли в дере́вне?",
       "tr": "Davái paspórim! Gdie lúchshi zhit: v góradi íli v diriévni?",
       "es": "¡Vamos a debatir! ¿Dónde se vive mejor: en la ciudad o en el campo?"
      }
     ],
     "ideas": [
      {
       "ru": "По-мо́ему, в го́роде лу́чше.",
       "es": "Creo que en la ciudad se vive mejor."
      },
      {
       "ru": "Я ду́маю, в дере́вне.",
       "es": "Creo que en el campo."
      },
      {
       "ru": "Ну… везде́ есть свои́ ми́нусы.",
       "es": "Bueno… en todas partes hay contras."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pros y contras",
       "claves": [
        "плюс",
        "минус",
        "везде"
       ],
       "resp": [
        {
         "ru": "Хоро́ший отве́т! 😂 Но на́до вы́брать!",
         "tr": "Jaróshii atviét! No náda výbrat!",
         "es": "¡Buena respuesta! Pero hay que elegir."
        }
       ],
       "ir": "razon"
      },
      {
       "etiqueta": "Ciudad",
       "claves": [
        "город"
       ],
       "resp": [
        {
         "ru": "А я ду́маю, в дере́вне лу́чше! 🌳",
         "tr": "A ya dúmayu, v diriévni lúchshi!",
         "es": "¡Y yo creo que en el campo se vive mejor!"
        }
       ],
       "ir": "razon",
       "dato": "Prefiere vivir",
       "datoValor": "в го́роде"
      },
      {
       "etiqueta": "Campo",
       "claves": [
        "деревн",
        "природ"
       ],
       "resp": [
        {
         "ru": "Интере́сно! А я люблю́ го́род! 🏙️",
         "tr": "Intiriésna! A ya liubliú górat!",
         "es": "¡Interesante! ¡Y a mí me encanta la ciudad!"
        }
       ],
       "ir": "razon",
       "dato": "Prefiere vivir",
       "datoValor": "в дере́вне"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 🤔",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "razon",
       "comodin": true
      }
     ]
    },
    {
     "id": "razon",
     "titulo": "Tus razones",
     "bot": [
      {
       "ru": "Почему́? Дай две причи́ны: «во-пе́рвых…, во-вторы́х…» ✌️",
       "tr": "Pachimú? Dai dvie prichíny: «vapiérvyj…, vaftarýj…»",
       "es": "¿Por qué? Dame dos razones: «en primer lugar…, en segundo lugar…»"
      }
     ],
     "ideas": [
      {
       "ru": "Во-пе́рвых, там есть рабо́та. Во-вторы́х, там мно́го теа́тров.",
       "es": "En primer lugar, allí hay trabajo. En segundo, hay muchos teatros."
      },
      {
       "ru": "Во-пе́рвых, там ти́хо. Во-вторы́х, во́здух чи́стый.",
       "es": "En primer lugar, es tranquilo. En segundo, el aire es limpio."
      },
      {
       "ru": "Потому́ что там удо́бно.",
       "es": "Porque es cómodo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Во-первых / во-вторых",
       "claves": [
        "=во-первых",
        "=во-вторых",
        "первых",
        "вторых"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Ты говори́шь как настоя́щий журнали́ст! 🎤",
         "tr": "Atlíchna! Ty gavarísh kak nastayáschii zhurnalíst!",
         "es": "¡Genial! ¡Hablas como un periodista de verdad!"
        }
       ],
       "ir": "suya"
      },
      {
       "etiqueta": "Una razón",
       "claves": [
        "потому",
        "там",
        "есть"
       ],
       "resp": [
        {
         "ru": "Хорошо́! А на́до две причи́ны: «во-пе́рвых…, во-вторы́х…». Но я понима́ю! 🙂",
         "tr": "Jarashó! A náda dvie prichíny: «vapiérvyj…, vaftarýj…». No ya panimáyu!",
         "es": "¡Bien! Hacían falta dos razones, pero te entiendo."
        }
       ],
       "ir": "suya"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 🙂",
         "tr": "Paniátna!",
         "es": "¡Entendido!"
        }
       ],
       "ir": "suya",
       "comodin": true
      }
     ]
    },
    {
     "id": "suya",
     "titulo": "Su opinión",
     "bot": [
      {
       "ru": "А я ду́маю так: в го́роде всегда́ мно́го наро́да и гро́мко. 😩 А в дере́вне споко́йно и мо́жно гуля́ть в лесу́. Ты согла́сен со мной?",
       "tr": "A ya dúmayu tak: v góradi fsigdá mnóga naróda i grómka. A v diriévni spakóina i mózhna guliát v lisú. Ty saglásin so mnoi?",
       "es": "Yo pienso así: en la ciudad siempre hay mucha gente y ruido. Y en el campo hay calma y puedes pasear por el bosque. ¿Estás de acuerdo conmigo?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, я согла́сен.",
       "es": "Sí, estoy de acuerdo."
      },
      {
       "ru": "Нет, я не согла́сна. В го́роде интере́сно!",
       "es": "No, no estoy de acuerdo. ¡En la ciudad es interesante!"
      },
      {
       "ru": "Ты права́, но в дере́вне ску́чно.",
       "es": "Tienes razón, pero en el campo te aburres."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Пра́ва, но…",
       "claves": [
        "права",
        "=но"
       ],
       "resp": [
        {
         "ru": "«Ты права́, но…» — так говоря́т в спо́ре! 😄",
         "tr": "«Ty pravá, no…» — tak gavariát v spóri!",
         "es": "«Tienes razón, pero…»: así se discute."
        }
       ],
       "ir": "contra"
      },
      {
       "etiqueta": "No está de acuerdo",
       "claves": [
        "=не согласен",
        "=не согласна"
       ],
       "resp": [
        {
         "ru": "Не {согла́сен/согла́сна}? Хорошо́, э́то спор! 😄",
         "tr": "Nie {saglásin/saglásna}? Jarashó, éta spor!",
         "es": "¿No estás de acuerdo? ¡Bien, esto es un debate!"
        }
       ],
       "ir": "contra"
      },
      {
       "etiqueta": "De acuerdo",
       "claves": [
        "согласен",
        "согласна",
        "=да"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Мы ду́маем одина́ково! 🤝",
         "tr": "Atlíchna! My dúmayim adinákava!",
         "es": "¡Bien! ¡Pensamos igual!"
        }
       ],
       "ir": "contra"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сная мысль! 🤔",
         "tr": "Intiriésnaya mysl!",
         "es": "¡Una idea interesante!"
        }
       ],
       "ir": "contra",
       "comodin": true
      }
     ]
    },
    {
     "id": "contra",
     "titulo": "La desventaja",
     "bot": [
      {
       "ru": "А како́й гла́вный ми́нус в го́роде?",
       "tr": "A kakói glávnyi mínus v góradi?",
       "es": "¿Y cuál es la principal desventaja de la ciudad?"
      }
     ],
     "ideas": [
      {
       "ru": "Там всё до́рого.",
       "es": "Allí todo es caro."
      },
      {
       "ru": "Мно́го маши́н.",
       "es": "Muchos coches."
      },
      {
       "ru": "Лю́ди всегда́ спеша́т.",
       "es": "La gente siempre tiene prisa."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Caro",
       "claves": [
        "дорог",
        "деньг"
       ],
       "resp": [
        {
         "ru": "Да, кварти́ры в Москве́ о́чень дороги́е! 💸",
         "tr": "Da, kvartíry v Maskvié óchin daraguíyi!",
         "es": "Sí, los pisos en Moscú son carísimos."
        }
       ],
       "ir": "manana"
      },
      {
       "etiqueta": "Coches / prisa",
       "claves": [
        "машин",
        "спеш",
        "шум",
        "пробк"
       ],
       "resp": [
        {
         "ru": "Пра́вда! В метро́ все спеша́т! 🚇",
         "tr": "Právda! V mitró fsie spishát!",
         "es": "¡Es verdad! ¡En el metro todos tienen prisa!"
        }
       ],
       "ir": "manana"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Да, ты {прав/права́}… 🤔",
         "tr": "Da, ty {praf/pravá}…",
         "es": "Sí, tienes razón…"
        }
       ],
       "ir": "manana",
       "comodin": true
      }
     ]
    },
    {
     "id": "manana",
     "titulo": "El futuro",
     "bot": [
      {
       "ru": "А где ты бу́дешь жить, когда́ бу́дешь ста́рым? 👴👵",
       "tr": "A gdie ty búdish zhit, kagdá búdish stárym?",
       "es": "¿Y dónde vas a vivir cuando seas mayor?"
      }
     ],
     "ideas": [
      {
       "ru": "Когда́ я бу́ду ста́рым, я бу́ду жить в дере́вне.",
       "es": "Cuando sea mayor, voy a vivir en el campo."
      },
      {
       "ru": "В го́роде, коне́чно!",
       "es": "¡En la ciudad, claro!"
      },
      {
       "ru": "У мо́ря!",
       "es": "¡Junto al mar!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Когда + futuro",
       "claves": [
        "когда буду",
        "=буду"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: «когда́ бу́ду» — бу́дущее! 👍",
         "tr": "Právilna: «kagdá búdu» — búduschiyi!",
         "es": "¡Correcto! «Когда буду», con futuro."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Mar",
       "claves": [
        "мор"
       ],
       "resp": [
        {
         "ru": "У мо́ря — э́то и не го́род, и не дере́вня! 😄🌊",
         "tr": "U mória — éta i nie górat, i nie diriévnia!",
         "es": "Junto al mar: ¡ni ciudad ni campo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "город",
        "деревн",
        "конечно"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 😊",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́ший план! 😊",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Хоро́ший спор, {nombre}! Ла́дно, пока́! 👋",
       "tr": "Jaróshii spor, {nombre}! Ládna, paká!",
       "es": "¡Buen debate, {nombre}! Bueno, ¡chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-noticias",
   "desde": 13,
   "titulo": "Что но́вого?",
   "tituloEs": "Novedades",
   "resumen": "Reaccionar a noticias y hacer avanzar la charla: кста́ти, ну, да́же",
   "intro": "Masha te cuenta sus novedades y tú reaccionas (Пра́вда? Не мо́жет быть!), cuentas las tuyas y cambias de tema con кста́ти.",
   "inicio": "novedad",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "novedad",
     "titulo": "Su noticia",
     "bot": [
      {
       "ru": "У меня́ но́вость! 😃 Я прочита́ла статью́ в интерне́те: в Москве́ откры́ли но́вый музе́й. Я туда́ уже́ ходи́ла!",
       "tr": "U miniá nóvast! Ya prachitála statyú v intirniéti: v Maskvié atkrýli nóvyi muzéi. Ya tudá uzhé jadíla!",
       "es": "¡Tengo una novedad! Leí un artículo en internet: abrieron un museo nuevo en Moscú. ¡Ya fui!"
      }
     ],
     "ideas": [
      {
       "ru": "Пра́вда? Како́й музе́й?",
       "es": "¿En serio? ¿Qué museo?"
      },
      {
       "ru": "Здо́рово! Тебе́ понра́вилось?",
       "es": "¡Genial! ¿Te gustó?"
      },
      {
       "ru": "Ну и как?",
       "es": "¿Y qué tal?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Qué museo?",
       "claves": [
        "какой"
       ],
       "resp": [
        {
         "ru": "Музе́й ко́смоса! 🚀 Там да́же есть настоя́щая раке́та!",
         "tr": "Muzéi kósmasa! Tam dázhi yest nastayáschiya rakéta!",
         "es": "¡Un museo del espacio! ¡Hasta hay un cohete de verdad!"
        }
       ],
       "ir": "gusto"
      },
      {
       "etiqueta": "Reacción",
       "claves": [
        "правда",
        "здорово",
        "понравил",
        "как"
       ],
       "resp": [
        {
         "ru": "Да! Там да́же есть настоя́щая раке́та! 🚀",
         "tr": "Da! Tam dázhi yest nastayáschiya rakéta!",
         "es": "¡Sí! ¡Hasta hay un cohete de verdad!"
        }
       ],
       "ir": "gusto"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Да! Там да́же есть раке́та! 🚀",
         "tr": "Da! Tam dázhi yest rakéta!",
         "es": "¡Sí! ¡Hasta hay un cohete!"
        }
       ],
       "ir": "gusto",
       "comodin": true
      }
     ]
    },
    {
     "id": "gusto",
     "titulo": "Reaccionar",
     "bot": [
      {
       "ru": "И зна́ешь что? Я встре́тила там на́шу учи́тельницу, О́льгу Петро́вну! 😮",
       "tr": "I znáyish shto? Ya fstriétila tam náshu uchítilnitsu, Ólgu Pitróvnu!",
       "es": "¿Y sabes qué? ¡Me encontré allí con nuestra profesora, Olga Petrovna!"
      }
     ],
     "ideas": [
      {
       "ru": "Не мо́жет быть!",
       "es": "¡No puede ser!"
      },
      {
       "ru": "Пра́вда? Я так удиви́лся!",
       "es": "¿En serio? ¡Qué sorpresa!"
      },
      {
       "ru": "Ну и что она́ сказа́ла?",
       "es": "¿Y qué dijo?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "¿Qué dijo?",
       "claves": [
        "сказала",
        "что она"
       ],
       "resp": [
        {
         "ru": "Она́ сказа́ла: «Ма́ша, где твоё дома́шнее зада́ние?» 😂",
         "tr": "Aná skazála: «Másha, gdie tvayó damáshniyi zadániyi?»",
         "es": "Dijo: «Masha, ¿dónde está tu tarea?»"
        }
       ],
       "ir": "tuya"
      },
      {
       "etiqueta": "Sorpresa",
       "claves": [
        "не может",
        "правда",
        "удив",
        "ого"
       ],
       "resp": [
        {
         "ru": "Да! Я так удиви́лась! 😄 А она́ сказа́ла: «Ма́ша, где твоё дома́шнее зада́ние?» 😂",
         "tr": "Da! Ya tak udivílas! A aná skazála: «Másha, gdie tvayó damáshniyi zadániyi?»",
         "es": "¡Sí! ¡Me sorprendí tanto! Y ella me dijo: «Masha, ¿dónde está tu tarea?»"
        }
       ],
       "ir": "tuya"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Да! Я так удиви́лась! 😄",
         "tr": "Da! Ya tak udivílas!",
         "es": "¡Sí! ¡Me sorprendí tanto!"
        }
       ],
       "ir": "tuya",
       "comodin": true
      }
     ]
    },
    {
     "id": "tuya",
     "titulo": "Tu noticia",
     "bot": [
      {
       "ru": "А у тебя́ что но́вого?",
       "tr": "A u tibiá shto nóvaga?",
       "es": "¿Y tú qué tienes de nuevo?"
      }
     ],
     "ideas": [
      {
       "ru": "Ничего́ осо́бенного.",
       "es": "Nada especial."
      },
      {
       "ru": "Я нашёл но́вую рабо́ту!",
       "es": "¡Encontré un trabajo nuevo!"
      },
      {
       "ru": "Я купи́ла но́вый телефо́н.",
       "es": "Me compré un teléfono nuevo."
      },
      {
       "ru": "Я начала́ чита́ть кни́гу по-ру́сски!",
       "es": "¡Empecé a leer un libro en ruso!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nada",
       "claves": [
        "ничего",
        "особенн"
       ],
       "resp": [
        {
         "ru": "Ничего́? Ну, э́то то́же норма́льно! 😄",
         "tr": "Nichivó? Nu, éta tózhi narmálna!",
         "es": "¿Nada? ¡Bueno, también es normal!"
        }
       ],
       "ir": "kstati"
      },
      {
       "etiqueta": "Trabajo",
       "claves": [
        "работ"
       ],
       "resp": [
        {
         "ru": "Не мо́жет быть! Поздравля́ю! 🎉",
         "tr": "Nie mózhit byt! Pazdravliáyu!",
         "es": "¡No puede ser! ¡Felicidades!"
        }
       ],
       "ir": "kstati",
       "dato": "Novedad"
      },
      {
       "etiqueta": "Libro en ruso",
       "claves": [
        "по-русски",
        "русск"
       ],
       "resp": [
        {
         "ru": "О! Я так ра́да! 📚",
         "tr": "O! Ya tak ráda!",
         "es": "¡Guau! ¡Qué alegría!"
        }
       ],
       "ir": "kstati",
       "dato": "Novedad"
      },
      {
       "etiqueta": "Novedad",
       "claves": [
        "купил",
        "купила",
        "нашел",
        "нашла",
        "начал",
        "начала",
        "новый",
        "новую",
        "новое"
       ],
       "resp": [
        {
         "ru": "Здо́рово! Поздравля́ю! 🎉",
         "tr": "Zdórava! Pazdravliáyu!",
         "es": "¡Genial! ¡Felicidades!"
        }
       ],
       "ir": "kstati",
       "dato": "Novedad"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "kstati",
       "comodin": true
      }
     ]
    },
    {
     "id": "kstati",
     "titulo": "Кстати",
     "bot": [
      {
       "ru": "Кста́ти, ты {ви́дел/ви́дела} но́вую рекла́му на́шей шко́лы? На са́йте! 💻",
       "tr": "Kstáti, ty {vídil/vídila} nóvuyu riklámu náshii shkóly? Na sáiti!",
       "es": "Por cierto, ¿viste la nueva publicidad de nuestra escuela? ¡En la web!"
      }
     ],
     "ideas": [
      {
       "ru": "Нет, ещё не ви́дел.",
       "es": "No, todavía no la vi."
      },
      {
       "ru": "Да! Там твоя́ фотогра́фия!",
       "es": "¡Sí! ¡Sale tu foto!"
      },
      {
       "ru": "Кста́ти, како́й сайт?",
       "es": "Por cierto, ¿qué web?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Su foto",
       "claves": [
        "фотограф",
        "твоя"
       ],
       "resp": [
        {
         "ru": "Да! Мне немно́го стра́шно, все её ви́дят! 🙈",
         "tr": "Da! Mnie nimnóga stráshna, fsie yiyó vídit!",
         "es": "¡Sí! Me da un poco de miedo, ¡todos la ven!"
        }
       ],
       "ir": "fin2"
      },
      {
       "etiqueta": "No la vio",
       "claves": [
        "=нет",
        "не видел",
        "не видела"
       ],
       "resp": [
        {
         "ru": "Посмотри́! Там на пе́рвой страни́це моя́ фотогра́фия! 🙈",
         "tr": "Pasmatrí! Tam na piérvai stranítsi mayá fatagráfiya!",
         "es": "¡Mírala! ¡En la primera página está mi foto!"
        }
       ],
       "ir": "fin2"
      },
      {
       "etiqueta": "¿Qué web?",
       "claves": [
        "сайт",
        "какой"
       ],
       "resp": [
        {
         "ru": "Сайт на́шей шко́лы, на пе́рвой страни́це! 🙈",
         "tr": "Sait náshii shkóly, na piérvai stranítsi!",
         "es": "La web de nuestra escuela, en la primera página."
        }
       ],
       "ir": "fin2"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Посмотри́! Там моя́ фотогра́фия! 🙈",
         "tr": "Pasmatrí! Tam mayá fatagráfiya!",
         "es": "¡Mírala! ¡Sale mi foto!"
        }
       ],
       "ir": "fin2",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin2",
     "titulo": "Tu ánimo",
     "bot": [
      {
       "ru": "Ла́дно! А како́е у тебя́ сего́дня настрое́ние?",
       "tr": "Ládna! A kakóyi u tibiá sivódnia nastrayéniyi?",
       "es": "¡Bueno! ¿Y de qué humor estás hoy?"
      }
     ],
     "ideas": [
      {
       "ru": "Отли́чное!",
       "es": "¡Excelente!"
      },
      {
       "ru": "Ну… норма́льное.",
       "es": "Bueno… normal."
      },
      {
       "ru": "Немно́го гру́стное.",
       "es": "Un poco triste."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Triste",
       "claves": [
        "грустн",
        "плох"
       ],
       "resp": [
        {
         "ru": "Ой… Не волну́йся! Ты сего́дня {говори́л/говори́ла} по-ру́сски — э́то уже́ хорошо́! 🤗",
         "tr": "Oi… Nie valnúisia! Ty sivódnia {gavaríl/gavaríla} parússki — éta uzhé jarashó!",
         "es": "¡Uy! ¡No te preocupes! Hoy hablaste en ruso, ¡eso ya está bien!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Bien",
       "claves": [
        "отличн",
        "хорош",
        "нормальн",
        "прекрасн"
       ],
       "resp": [
        {
         "ru": "Отли́чно! У меня́ то́же! ☀️",
         "tr": "Atlíchna! U miniá tózhi!",
         "es": "¡Genial! ¡Yo también!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Всё, {nombre}! Пока́! До за́втра! 👋",
       "tr": "Fsio, {nombre}! Paká! Do záftra!",
       "es": "¡Listo, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-caracter",
   "desde": 13,
   "titulo": "Како́й у него́ хара́ктер?",
   "tituloEs": "Cómo es alguien",
   "resumen": "Describir el carácter de una persona y dar ejemplos",
   "intro": "Masha te describe a Lucas y te pregunta por alguien que conoces. Di cómo es (серьёзный, смешно́й, че́стный…) y da un ejemplo.",
   "inicio": "lucas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "lucas",
     "titulo": "Lucas",
     "bot": [
      {
       "ru": "Лу́кас о́чень смешно́й! 😂 Он всегда́ расска́зывает анекдо́ты. Но он не о́чень серьёзный… Он никогда́ не де́лает дома́шнее зада́ние! А како́й у тебя́ хара́ктер?",
       "tr": "Lúkas óchin smishnói! On fsigdá rasskázyvayit anigdóty. No on nie óchin siryóznyi… On nikagdá nie diélayit damáshniyi zadániyi! A kakói u tibiá jaráktir?",
       "es": "Lucas es muy gracioso. Siempre cuenta chistes. Pero no es muy serio… ¡Nunca hace la tarea! ¿Y cómo es tu carácter?"
      }
     ],
     "ideas": [
      {
       "ru": "Я серьёзный и че́стный.",
       "es": "Soy serio y honesto."
      },
      {
       "ru": "Я весёлая и смешна́я!",
       "es": "¡Soy alegre y graciosa!"
      },
      {
       "ru": "Ну… я споко́йный.",
       "es": "Bueno… soy tranquilo."
      },
      {
       "ru": "Не зна́ю! Спроси́ мои́х друзе́й. 😄",
       "es": "¡No sé! Pregúntales a mis amigos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pregunta a amigos",
       "claves": [
        "спроси",
        "не знаю"
       ],
       "resp": [
        {
         "ru": "Хоро́ший отве́т! 😄",
         "tr": "Jaróshii atviét!",
         "es": "¡Buena respuesta!"
        }
       ],
       "ir": "ejemplo"
      },
      {
       "etiqueta": "Serio",
       "claves": [
        "серьезн"
       ],
       "resp": [
        {
         "ru": "Серьёзный — как О́льга Петро́вна! 👩‍🏫😄",
         "tr": "Siryóznyi — kak Ólga Pitróvna!",
         "es": "¡Serio, como Olga Petrovna!"
        }
       ],
       "ir": "ejemplo",
       "dato": "Carácter"
      },
      {
       "etiqueta": "Gracioso",
       "claves": [
        "смешн",
        "весел"
       ],
       "resp": [
        {
         "ru": "Как Лу́кас! 😂",
         "tr": "Kak Lúkas!",
         "es": "¡Como Lucas!"
        }
       ],
       "ir": "ejemplo",
       "dato": "Carácter"
      },
      {
       "etiqueta": "Otro",
       "claves": [
        "=я",
        "честн",
        "споко",
        "добр",
        "талантлив",
        "умн"
       ],
       "resp": [
        {
         "ru": "Хоро́ший хара́ктер! 😊",
         "tr": "Jaróshii jaráktir!",
         "es": "¡Buen carácter!"
        }
       ],
       "ir": "ejemplo",
       "dato": "Carácter"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сно! 😊",
         "tr": "Intiriésna!",
         "es": "¡Interesante!"
        }
       ],
       "ir": "ejemplo",
       "comodin": true
      }
     ]
    },
    {
     "id": "ejemplo",
     "titulo": "Un ejemplo",
     "bot": [
      {
       "ru": "Приведи́ приме́р! Что ты де́лаешь, когда́ у тебя́ хоро́шее настрое́ние?",
       "tr": "Prividí primiér! Shto ty diélayish, kagdá u tibiá jaróshiyi nastrayéniyi?",
       "es": "¡Dame un ejemplo! ¿Qué haces cuando estás de buen humor?"
      }
     ],
     "ideas": [
      {
       "ru": "Я пою́!",
       "es": "¡Canto!"
      },
      {
       "ru": "Я звоню́ друзья́м.",
       "es": "Llamo a mis amigos."
      },
      {
       "ru": "Я гото́влю что-нибудь вку́сное.",
       "es": "Cocino algo rico."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Canta",
       "claves": [
        "пою",
        "пел",
        "танц"
       ],
       "resp": [
        {
         "ru": "Я то́же пою́! Но Ба́рсик убега́ет! 🐱😂",
         "tr": "Ya tózhi payú! No Bársik ubigáyit!",
         "es": "¡Yo también canto! ¡Pero Barsik se escapa!"
        }
       ],
       "ir": "amigo"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "=я",
        "звоню",
        "готовлю",
        "гуляю"
       ],
       "resp": [
        {
         "ru": "Хоро́шая иде́я! 😊",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "amigo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́шая иде́я! 😊",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "amigo",
       "comodin": true
      }
     ]
    },
    {
     "id": "amigo",
     "titulo": "Alguien que conoces",
     "bot": [
      {
       "ru": "А твой лу́чший друг и́ли лу́чшая подру́га — како́й у него́ и́ли у неё хара́ктер?",
       "tr": "A tvoi lúchshii druk íli lúchshaya padrúga — kakói u nivó íli u niyó jaráktir?",
       "es": "¿Y tu mejor amigo o amiga? ¿Cómo es su carácter?"
      }
     ],
     "ideas": [
      {
       "ru": "Мой друг о́чень тала́нтливый. Он игра́ет на гита́ре.",
       "es": "Mi amigo es muy talentoso. Toca la guitarra."
      },
      {
       "ru": "Моя́ подру́га че́стная и до́брая.",
       "es": "Mi amiga es honesta y buena."
      },
      {
       "ru": "Он немно́го лени́вый, но смешно́й.",
       "es": "Es un poco vago, pero gracioso."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Talentoso",
       "claves": [
        "талантлив"
       ],
       "resp": [
        {
         "ru": "Тала́нтливый! Как интере́сно! 🎸",
         "tr": "Talántlivyi! Kak intiriésna!",
         "es": "¡Talentoso! ¡Qué interesante!"
        }
       ],
       "ir": "conocer",
       "dato": "Su mejor amigo/a"
      },
      {
       "etiqueta": "Honesto",
       "claves": [
        "честн"
       ],
       "resp": [
        {
         "ru": "Че́стный друг — э́то сча́стье! 🤝",
         "tr": "Chésnyi druk — éta schástyi!",
         "es": "¡Un amigo honesto es una felicidad!"
        }
       ],
       "ir": "conocer",
       "dato": "Su mejor amigo/a"
      },
      {
       "etiqueta": "Descripción",
       "claves": [
        "друг",
        "подруг",
        "=он",
        "=она",
        "смешн",
        "серьезн",
        "добр"
       ],
       "resp": [
        {
         "ru": "Хоро́ший челове́к! 😊",
         "tr": "Jaróshii chilaviék!",
         "es": "¡Buena persona!"
        }
       ],
       "ir": "conocer",
       "dato": "Su mejor amigo/a"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "conocer",
       "comodin": true
      }
     ]
    },
    {
     "id": "conocer",
     "titulo": "¿Cómo se conocieron?",
     "bot": [
      {
       "ru": "А как вы познако́мились?",
       "tr": "A kak vy paznakómilis?",
       "es": "¿Y cómo se conocieron?"
      }
     ],
     "ideas": [
      {
       "ru": "В шко́ле.",
       "es": "En la escuela."
      },
      {
       "ru": "Мы вме́сте рабо́тали.",
       "es": "Trabajábamos juntos."
      },
      {
       "ru": "На дне рожде́ния дру́га.",
       "es": "En el cumpleaños de un amigo."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Escuela / trabajo",
       "claves": [
        "школ",
        "университет",
        "работал",
        "работали",
        "учил"
       ],
       "resp": [
        {
         "ru": "Как мы с Лу́касом! Мы познако́мились на ку́рсах. 📚",
         "tr": "Kak my s Lúkasam! My paznakómilis na kúrsaj.",
         "es": "¡Como Lucas y yo! Nos conocimos en el curso."
        }
       ],
       "ir": "nuevo"
      },
      {
       "etiqueta": "Otro",
       "claves": [
        "=на",
        "=в",
        "познаком"
       ],
       "resp": [
        {
         "ru": "Как интере́сно! 😊",
         "tr": "Kak intiriésna!",
         "es": "¡Qué interesante!"
        }
       ],
       "ir": "nuevo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Как интере́сно! 😊",
         "tr": "Kak intiriésna!",
         "es": "¡Qué interesante!"
        }
       ],
       "ir": "nuevo",
       "comodin": true
      }
     ]
    },
    {
     "id": "nuevo",
     "titulo": "El amigo ideal",
     "bot": [
      {
       "ru": "А как ты ду́маешь, како́й идеа́льный друг? Что важне́е всего́?",
       "tr": "A kak ty dúmayish, kakói idiálnyi druk? Shto vazhniéyi fsivó?",
       "es": "¿Y cómo es, para ti, el amigo ideal? ¿Qué es lo más importante?"
      }
     ],
     "ideas": [
      {
       "ru": "Во-пе́рвых, он че́стный. Во-вторы́х, он всегда́ помога́ет.",
       "es": "En primer lugar, es honesto. En segundo, siempre ayuda."
      },
      {
       "ru": "Гла́вное — чу́вство ю́мора!",
       "es": "¡Lo principal es el sentido del humor!"
      },
      {
       "ru": "Он до́лжен слу́шать.",
       "es": "Tiene que escuchar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Во-первых",
       "claves": [
        "первых",
        "вторых"
       ],
       "resp": [
        {
         "ru": "Отли́чный отве́т — и о́чень по-ру́сски! 👍",
         "tr": "Atlíchnyi atviét — i óchin parússki!",
         "es": "¡Excelente respuesta, y muy en ruso!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Humor",
       "claves": [
        "юмор",
        "смешн"
       ],
       "resp": [
        {
         "ru": "Согла́сна! Без ю́мора ску́чно! 😂",
         "tr": "Saglásna! Bies yúmara skúshna!",
         "es": "¡De acuerdo! ¡Sin humor es aburrido!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "честн",
        "помога",
        "слуша",
        "главное",
        "важн"
       ],
       "resp": [
        {
         "ru": "Я согла́сна! 🤝",
         "tr": "Ya saglásna!",
         "es": "¡Estoy de acuerdo!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Интере́сная мысль! 🤔",
         "tr": "Intiriésnaya mysl!",
         "es": "¡Una idea interesante!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Мне нра́вится говори́ть с тобо́й, {nombre}! Пока́! 👋",
       "tr": "Mnie nrávitsa gavarít s tabói, {nombre}! Paká!",
       "es": "¡Me gusta hablar contigo, {nombre}! ¡Chau!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-esli",
   "desde": 13,
   "titulo": "Е́сли бу́дет хоро́шая пого́да…",
   "tituloEs": "Si… / Cuando…",
   "resumen": "Planes con е́сли y когда́ + futuro",
   "intro": "Masha hace planes para el fin de semana y depende de todo: del tiempo, del dinero, de Barsik. Responde con е́сли / когда́ + futuro: Е́сли бу́дет дождь, я бу́ду до́ма.",
   "inicio": "tiempo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "tiempo",
     "titulo": "Si hace buen tiempo",
     "bot": [
      {
       "ru": "Е́сли в суббо́ту бу́дет хоро́шая пого́да, я пое́ду на да́чу. 🌞 А ты? Что ты бу́дешь де́лать, е́сли бу́дет хоро́шая пого́да?",
       "tr": "Yésli v subbótu búdit jaróshaya pagóda, ya payédu na dáchu. A ty? Shto ty búdish diélat, yésli búdit jaróshaya pagóda?",
       "es": "Si el sábado hace buen tiempo, me voy a la dacha. ¿Y tú? ¿Qué vas a hacer si hace buen tiempo?"
      }
     ],
     "ideas": [
      {
       "ru": "Е́сли бу́дет хоро́шая пого́да, я пойду́ в парк.",
       "es": "Si hace buen tiempo, voy a ir al parque."
      },
      {
       "ru": "Я пое́ду на мо́ре.",
       "es": "Voy a ir a la playa."
      },
      {
       "ru": "Я бу́ду гуля́ть с соба́кой.",
       "es": "Voy a pasear al perro."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Если + futuro",
       "claves": [
        "если будет"
       ],
       "resp": [
        {
         "ru": "Отли́чно! «Е́сли бу́дет…» — бу́дущее! 👍",
         "tr": "Atlíchna! «Yésli búdit…» — búduschiyi!",
         "es": "¡Perfecto! «Если будет…», con futuro."
        }
       ],
       "ir": "lluvia"
      },
      {
       "etiqueta": "Если + presente (error)",
       "claves": [
        "=если есть",
        "=если хорошая погода есть"
       ],
       "resp": [
        {
         "ru": "По-ру́сски тут бу́дущее: «е́сли бу́дет»! 🙂",
         "tr": "Parússki tut búduschiyi: «yésli búdit»!",
         "es": "En ruso aquí va futuro: если будет."
        }
       ],
       "ir": "lluvia"
      },
      {
       "etiqueta": "Plan",
       "claves": [
        "пойду",
        "поеду",
        "буду",
        "погуляю"
       ],
       "resp": [
        {
         "ru": "Хоро́ший план! 🌞",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "lluvia",
       "dato": "Si hace buen tiempo"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́ший план! 🌞",
         "tr": "Jaróshii plan!",
         "es": "¡Buen plan!"
        }
       ],
       "ir": "lluvia",
       "comodin": true
      }
     ]
    },
    {
     "id": "lluvia",
     "titulo": "Si llueve",
     "bot": [
      {
       "ru": "А е́сли бу́дет дождь? 🌧️",
       "tr": "A yésli búdit dosht?",
       "es": "¿Y si llueve?"
      }
     ],
     "ideas": [
      {
       "ru": "Е́сли бу́дет дождь, я бу́ду смотре́ть фильм до́ма.",
       "es": "Si llueve, voy a ver una película en casa."
      },
      {
       "ru": "Я пойду́ в кафе́.",
       "es": "Voy a ir a un café."
      },
      {
       "ru": "Ну, я всё равно́ пойду́ гуля́ть!",
       "es": "Bueno, ¡igual voy a salir a pasear!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Igual sale",
       "claves": [
        "все равно",
        "гулять"
       ],
       "resp": [
        {
         "ru": "Ты не бои́шься дождя́! 😄☔",
         "tr": "Ty nie baíshsia dazhdiá!",
         "es": "¡No le tienes miedo a la lluvia!"
        }
       ],
       "ir": "cuando"
      },
      {
       "etiqueta": "En casa",
       "claves": [
        "дома",
        "фильм",
        "читать",
        "спать"
       ],
       "resp": [
        {
         "ru": "Я то́же! С Ба́рсиком на дива́не! 🐱🛋️",
         "tr": "Ya tózhi! S Bársikam na diváni!",
         "es": "¡Yo también! ¡Con Barsik en el sofá!"
        }
       ],
       "ir": "cuando"
      },
      {
       "etiqueta": "Plan",
       "claves": [
        "пойду",
        "поеду",
        "буду",
        "если"
       ],
       "resp": [
        {
         "ru": "Хоро́шая иде́я! ☕",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "cuando"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́шая иде́я! ☕",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "cuando",
       "comodin": true
      }
     ]
    },
    {
     "id": "cuando",
     "titulo": "Cuando…",
     "bot": [
      {
       "ru": "А что ты бу́дешь де́лать, когда́ придёшь домо́й сего́дня? 🏠",
       "tr": "A shto ty búdish diélat, kagdá pridiósh damói sivódnia?",
       "es": "¿Y qué vas a hacer cuando llegues a casa hoy?"
      }
     ],
     "ideas": [
      {
       "ru": "Когда́ я приду́ домо́й, я бу́ду у́жинать.",
       "es": "Cuando llegue a casa, voy a cenar."
      },
      {
       "ru": "Я ля́гу спать! 😴",
       "es": "¡Me voy a acostar!"
      },
      {
       "ru": "Когда́ приду́, позвоню́ ма́ме.",
       "es": "Cuando llegue, voy a llamar a mamá."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Когда + futuro",
       "claves": [
        "когда приду"
       ],
       "resp": [
        {
         "ru": "Пра́вильно: «когда́ приду́» — бу́дущее, как по-испа́нски «cuando llegue»! 👍",
         "tr": "Právilna: «kagdá pridú» — búduschiyi, kak paispánski «cuando llegue»!",
         "es": "¡Correcto! «Когда приду» va en futuro, como «cuando llegue»."
        }
       ],
       "ir": "dinero"
      },
      {
       "etiqueta": "Когда + presente (error)",
       "claves": [
        "=когда прихожу"
       ],
       "resp": [
        {
         "ru": "Тут лу́чше бу́дущее: «когда́ приду́»! 🙂",
         "tr": "Tut lúchshi búduschiyi: «kagdá pridú»!",
         "es": "Aquí mejor el futuro: когда приду."
        }
       ],
       "ir": "dinero"
      },
      {
       "etiqueta": "Plan",
       "claves": [
        "буду",
        "позвоню",
        "лягу",
        "приготовлю"
       ],
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "dinero"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Поня́тно! 😊",
         "tr": "Paniátna!",
         "es": "¡Ya veo!"
        }
       ],
       "ir": "dinero",
       "comodin": true
      }
     ]
    },
    {
     "id": "dinero",
     "titulo": "Si tuvieras dinero",
     "bot": [
      {
       "ru": "А е́сли у тебя́ бу́дет мно́го де́нег, куда́ ты пое́дешь? 💰✈️",
       "tr": "A yésli u tibiá búdit mnóga diénik, kudá ty payédish?",
       "es": "¿Y si tienes mucho dinero, adónde vas a viajar?"
      }
     ],
     "ideas": [
      {
       "ru": "Е́сли у меня́ бу́дет мно́го де́нег, я пое́ду в Росси́ю!",
       "es": "¡Si tengo mucho dinero, me voy a Rusia!"
      },
      {
       "ru": "В Япо́нию!",
       "es": "¡A Japón!"
      },
      {
       "ru": "Я куплю́ дом у мо́ря.",
       "es": "Voy a comprar una casa junto al mar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusia",
       "claves": [
        "росси",
        "москв",
        "петербург"
       ],
       "resp": [
        {
         "ru": "Здо́рово! Тогда́ мы встре́тимся в Москве́! 🇷🇺🤗",
         "tr": "Zdórava! Tagdá my fstriétimsia v Maskvié!",
         "es": "¡Bien! ¡Entonces nos vemos en Moscú!"
        }
       ],
       "ir": "barsik",
       "dato": "Si tiene dinero"
      },
      {
       "etiqueta": "Casa",
       "claves": [
        "куплю",
        "дом"
       ],
       "resp": [
        {
         "ru": "Мечта́! 🏖️ Я приду́ в го́сти!",
         "tr": "Michtá! Ya pridú v gósti!",
         "es": "¡Un sueño! ¡Voy a ir de visita!"
        }
       ],
       "ir": "barsik",
       "dato": "Si tiene dinero"
      },
      {
       "etiqueta": "Viaje",
       "claves": [
        "поеду",
        "полечу",
        "если",
        "=в"
       ],
       "resp": [
        {
         "ru": "Отли́чный план! ✈️",
         "tr": "Atlíchnyi plan!",
         "es": "¡Excelente plan!"
        }
       ],
       "ir": "barsik",
       "dato": "Si tiene dinero"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чный план! ✈️",
         "tr": "Atlíchnyi plan!",
         "es": "¡Excelente plan!"
        }
       ],
       "ir": "barsik",
       "comodin": true
      }
     ]
    },
    {
     "id": "barsik",
     "titulo": "Barsik",
     "bot": [
      {
       "ru": "Ой, но е́сли я уе́ду, кто бу́дет корми́ть Ба́рсика? 🐱",
       "tr": "Oi, no yésli ya uyédu, kto búdit karmít Bársika?",
       "es": "Uy, pero si me voy, ¿quién va a darle de comer a Barsik?"
      }
     ],
     "ideas": [
      {
       "ru": "Я бу́ду его́ корми́ть!",
       "es": "¡Yo le voy a dar de comer!"
      },
      {
       "ru": "Ма́ма!",
       "es": "¡Tu mamá!"
      },
      {
       "ru": "Возьми́ его́ с собо́й!",
       "es": "¡Llévalo contigo!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Llévalo",
       "claves": [
        "возьми",
        "собой"
       ],
       "resp": [
        {
         "ru": "Ба́рсик в самолёте?! 😂 Он испуга́ется!",
         "tr": "Bársik v samalióti?! On ispugáyitsa!",
         "es": "¿Barsik en un avión? ¡Se va a asustar!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Yo",
       "claves": [
        "=я",
        "буду"
       ],
       "resp": [
        {
         "ru": "Спаси́бо! Ты настоя́щий друг! 🤗",
         "tr": "Spasíba! Ty nastayáschii druk!",
         "es": "¡Gracias! ¡Eres un amigo de verdad!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Su mamá",
       "claves": [
        "мам"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Ба́рсик лю́бит ма́му — она́ даёт ему́ ры́бу! 🐟",
         "tr": "Právilna! Bársik liúbit mámu — aná dayót yimú rýbu!",
         "es": "¡Exacto! Barsik quiere a mi mamá: le da pescado."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хоро́шая иде́я! 🐱",
         "tr": "Jaróshaya idiéya!",
         "es": "¡Buena idea!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Ла́дно, когда́ бу́дет суббо́та, посмо́трим! 😄 Пока́, {nombre}!",
       "tr": "Ládna, kagdá búdit subbóta, pasmótrim! Paká, {nombre}!",
       "es": "¡Bueno, cuando llegue el sábado, ya veremos! ¡Chau, {nombre}!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  },
  {
   "id": "u13-ruso",
   "desde": 13,
   "titulo": "Ты уже́ говори́шь по-ру́сски!",
   "tituloEs": "Tu ruso, hoy",
   "resumen": "Hablar del propio aprendizaje y corregir errores",
   "intro": "Masha y tú miran hacia atrás: qué fue lo más difícil, qué te gusta del ruso y qué vas a hacer ahora. Al final, Masha te pide que corrijas una frase.",
   "inicio": "inicio",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "inicio",
     "titulo": "Mirar atrás",
     "bot": [
      {
       "ru": "Ты {знал/зна́ла}, что ты уже́ говори́шь по-ру́сски? 🎉 По́мнишь, как ты {чита́л/чита́ла} пе́рвые бу́квы? А что бы́ло са́мым тру́дным?",
       "tr": "Ty {znal/znála}, shto ty uzhé gavarísh parússki? Pómnish, kak ty {chitál/chitála} piérvyyi búkvy? A shto býla sámym trúdnym?",
       "es": "¿Sabías que ya hablas ruso? ¿Te acuerdas de cuando leías las primeras letras? ¿Qué fue lo más difícil?"
      }
     ],
     "ideas": [
      {
       "ru": "Грамма́тика!",
       "es": "¡La gramática!"
      },
      {
       "ru": "Вид глаго́ла.",
       "es": "El aspecto verbal."
      },
      {
       "ru": "Произноше́ние!",
       "es": "¡La pronunciación!"
      },
      {
       "ru": "Бу́квы в нача́ле.",
       "es": "Las letras al principio."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Gramática",
       "claves": [
        "падеж",
        "грамматик"
       ],
       "resp": [
        {
         "ru": "Да, грамма́тика… 😅 Но ты её уже́ зна́ешь!",
         "tr": "Da, grammátika… No ty yiyó uzhé znáyish!",
         "es": "Sí, la gramática… ¡Pero ya la sabes!"
        }
       ],
       "ir": "gusta"
      },
      {
       "etiqueta": "Aspecto",
       "claves": [
        "вид",
        "глагол"
       ],
       "resp": [
        {
         "ru": "Вид — э́то тру́дно да́же для ру́сских! 😄",
         "tr": "Vit — éta trúdna dázhi dlia rússkij!",
         "es": "¡El aspecto es difícil hasta para los rusos!"
        }
       ],
       "ir": "gusta"
      },
      {
       "etiqueta": "Pronunciación",
       "claves": [
        "ударен",
        "произношен"
       ],
       "resp": [
        {
         "ru": "Произноше́ние — э́то моя́ люби́мая те́ма! 😂",
         "tr": "Praiznashéniyi — éta mayá liubímaya tiéma!",
         "es": "¡La pronunciación es mi tema favorito!"
        }
       ],
       "ir": "gusta"
      },
      {
       "etiqueta": "Letras",
       "claves": [
        "букв",
        "алфавит"
       ],
       "resp": [
        {
         "ru": "А тепе́рь ты чита́ешь всё! 📖",
         "tr": "A tipiér ty chitáyish fsio!",
         "es": "¡Y ahora lo lees todo!"
        }
       ],
       "ir": "gusta"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Понима́ю! Но ты молоде́ц! 💪",
         "tr": "Panimáyu! No ty maladiéts!",
         "es": "¡Te entiendo! ¡Pero lo hiciste genial!"
        }
       ],
       "ir": "gusta",
       "comodin": true
      }
     ]
    },
    {
     "id": "gusta",
     "titulo": "Lo que te gusta",
     "bot": [
      {
       "ru": "А что тебе́ бо́льше всего́ нра́вится в ру́сском языке́?",
       "tr": "A shto tibié bólshi fsivó nrávitsa v rússkam yizyké?",
       "es": "¿Y qué es lo que más te gusta del ruso?"
      }
     ],
     "ideas": [
      {
       "ru": "Мне нра́вится, как он звучи́т.",
       "es": "Me gusta cómo suena."
      },
      {
       "ru": "Мне нра́вятся ру́сские пе́сни.",
       "es": "Me gustan las canciones rusas."
      },
      {
       "ru": "Мне нра́вится говори́ть с тобо́й! 😊",
       "es": "¡Me gusta hablar contigo!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Contigo",
       "claves": [
        "тобой"
       ],
       "resp": [
        {
         "ru": "О! Мне то́же! 🥰",
         "tr": "O! Mnie tózhi!",
         "es": "¡Oh! ¡A mí también!"
        }
       ],
       "ir": "dificil"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "нравится",
        "нравятся",
        "звучит",
        "песни",
        "литератур"
       ],
       "resp": [
        {
         "ru": "Мне то́же э́то нра́вится! 😊",
         "tr": "Mnie tózhi éta nrávitsa!",
         "es": "¡A mí también me gusta!"
        }
       ],
       "ir": "dificil",
       "dato": "Le gusta del ruso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Мне то́же! 😊",
         "tr": "Mnie tózhi!",
         "es": "¡A mí también!"
        }
       ],
       "ir": "dificil",
       "comodin": true
      }
     ]
    },
    {
     "id": "dificil",
     "titulo": "Cómo estudias",
     "bot": [
      {
       "ru": "А как ты занима́ешься? Ка́ждый день?",
       "tr": "A kak ty zanimáyishsia? Kázhdyi dien?",
       "es": "¿Y cómo estudias? ¿Todos los días?"
      }
     ],
     "ideas": [
      {
       "ru": "Да, ка́ждый день немно́го.",
       "es": "Sí, un poco todos los días."
      },
      {
       "ru": "Ну… иногда́. 😅",
       "es": "Bueno… a veces."
      },
      {
       "ru": "Я слу́шаю пе́сни и чита́ю те́ксты.",
       "es": "Escucho canciones y leo textos."
      }
     ],
     "ramas": [
      {
       "etiqueta": "A veces",
       "claves": [
        "иногда",
        "редко"
       ],
       "resp": [
        {
         "ru": "Ла́дно, я не скажу́ О́льге Петро́вне! 🤫😂",
         "tr": "Ládna, ya nie skazhú Ólgui Pitróvni!",
         "es": "¡Bueno, no se lo digo a Olga Petrovna!"
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Todos los días",
       "claves": [
        "каждый день",
        "каждый"
       ],
       "resp": [
        {
         "ru": "Молоде́ц! Э́то лу́чший спо́соб! 💪",
         "tr": "Maladiéts! Éta lúchshii spósap!",
         "es": "¡Muy bien! ¡Es la mejor forma!"
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Respuesta",
       "claves": [
        "слушаю",
        "читаю",
        "смотрю",
        "пишу",
        "=да"
       ],
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "plan"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Хорошо́! 👍",
         "tr": "Jarashó!",
         "es": "¡Bien!"
        }
       ],
       "ir": "plan",
       "comodin": true
      }
     ]
    },
    {
     "id": "plan",
     "titulo": "El siguiente paso",
     "bot": [
      {
       "ru": "А что ты бу́дешь де́лать тепе́рь? Когда́ ты зако́нчишь курс?",
       "tr": "A shto ty búdish diélat tipiér? Kagdá ty zakónchish kurs?",
       "es": "¿Y qué vas a hacer ahora? ¿Cuando termines el curso?"
      }
     ],
     "ideas": [
      {
       "ru": "Когда́ я зако́нчу курс, я пое́ду в Росси́ю!",
       "es": "¡Cuando termine el curso, me voy a Rusia!"
      },
      {
       "ru": "Я бу́ду чита́ть кни́ги по-ру́сски.",
       "es": "Voy a leer libros en ruso."
      },
      {
       "ru": "Я бу́ду говори́ть с тобо́й ка́ждый день! 😄",
       "es": "¡Voy a hablar contigo todos los días!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusia",
       "claves": [
        "росси",
        "москв"
       ],
       "resp": [
        {
         "ru": "Здо́рово! Я тебе́ покажу́ Москву́! 🏙️",
         "tr": "Zdórava! Ya tibié pakazhú Maskvú!",
         "es": "¡Bien! ¡Te voy a mostrar Moscú!"
        }
       ],
       "ir": "corregir",
       "dato": "Después del curso"
      },
      {
       "etiqueta": "Contigo",
       "claves": [
        "тобой"
       ],
       "resp": [
        {
         "ru": "Отли́чно! Я бу́ду ждать! 🤗",
         "tr": "Atlíchna! Ya búdu zhdat!",
         "es": "¡Genial! ¡Te voy a esperar!"
        }
       ],
       "ir": "corregir"
      },
      {
       "etiqueta": "Plan",
       "claves": [
        "буду",
        "закончу",
        "поеду",
        "когда"
       ],
       "resp": [
        {
         "ru": "Отли́чный план! 👍",
         "tr": "Atlíchnyi plan!",
         "es": "¡Excelente plan!"
        }
       ],
       "ir": "corregir",
       "dato": "Después del curso"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Отли́чный план! 👍",
         "tr": "Atlíchnyi plan!",
         "es": "¡Excelente plan!"
        }
       ],
       "ir": "corregir",
       "comodin": true
      }
     ]
    },
    {
     "id": "corregir",
     "titulo": "Corrige la frase",
     "bot": [
      {
       "ru": "После́дний экза́мен! 😄 Испра́вь оши́бку: «Я живу́ в Москва́».",
       "tr": "Pasliédnii igzámin! Ispráf ashípku: «Ya zhivú v Maskvá».",
       "es": "¡El último examen! Corrige el error: «Я живу в Москва»."
      }
     ],
     "ideas": [
      {
       "ru": "Я живу́ в Москве́.",
       "es": "Vivo en Moscú."
      },
      {
       "ru": "В Москве́!",
       "es": "¡En Moscú!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Москве",
       "claves": [
        "москве"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Где? — в Москве́! 🎉",
         "tr": "Právilna! Gdie? — v Maskvié!",
         "es": "¡Correcto! «в» + ¿dónde?: preposicional, в Москве."
        }
       ],
       "ir": "corregir2"
      },
      {
       "etiqueta": "Москву (error)",
       "claves": [
        "москву"
       ],
       "resp": [
        {
         "ru": "Почти́! «В Москву́» — куда́? А тут где? — «в Москве́». 🙂",
         "tr": "Pachtí! «V Maskvú» — kudá? A tut gdie? — «v Maskvié».",
         "es": "¡Casi! в Москву es ¿adónde?; aquí es ¿dónde?: в Москве."
        }
       ],
       "ir": "corregir2"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "«Я живу́ в Москве́»: где? — в Москве́! 🙂",
         "tr": "«Ya zhivú v Maskvié»: gdie? — v Maskvié!",
         "es": "Я живу в Москве: ¿dónde?, preposicional."
        }
       ],
       "ir": "corregir2",
       "comodin": true
      }
     ]
    },
    {
     "id": "corregir2",
     "titulo": "Otra más",
     "bot": [
      {
       "ru": "И ещё одна́: «Вчера́ я бу́ду в кино́». Что не так? 🎬",
       "tr": "I yischó adná: «Fchirá ya búdu v kinó». Shto nie tak?",
       "es": "Y una más: «Вчера я буду в кино». ¿Qué está mal?"
      }
     ],
     "ideas": [
      {
       "ru": "Вчера́ я была́ в кино́.",
       "es": "Ayer estuve en el cine."
      },
      {
       "ru": "Вчера́ я был в кино́.",
       "es": "Ayer estuve en el cine."
      },
      {
       "ru": "За́втра я бу́ду в кино́.",
       "es": "Mañana voy a estar en el cine."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Pasado",
       "claves": [
        "был",
        "была"
       ],
       "resp": [
        {
         "ru": "Пра́вильно! Вчера́ — про́шлое: был / была́! 🏆 Ты {гото́в/гото́ва} к экза́мену!",
         "tr": "Právilna! Fchirá — próshlayi: byl / bylá! Ty {gatóf/gatóva} k igzáminu!",
         "es": "¡Correcto! Ayer es pasado: был / была. ¡Estás listo para el examen!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Завтра",
       "claves": [
        "завтра"
       ],
       "resp": [
        {
         "ru": "Хи́тро! 😄 Так то́же пра́вильно! 🏆",
         "tr": "Jítra! Tak tózhi právilna!",
         "es": "¡Qué astuto! Así también está bien."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "Вчера́ — про́шлое: «Вчера́ я {был/была́} в кино́». 🙂",
         "tr": "Fchirá — próshlayi: «Fchirá ya {byl/bylá} v kinó».",
         "es": "Ayer es pasado: Вчера я был / была в кино."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ]
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "ru": "Я горжу́сь тобо́й, {nombre}! 🥹 Пока́! До за́втра! 👋",
       "tr": "Ya garzhús tabói, {nombre}! Paká! Do záftra!",
       "es": "¡Estoy orgullosa de ti, {nombre}! ¡Chau! ¡Hasta mañana!"
      }
     ],
     "ideas": [
      {
       "ru": "Пока́!",
       "es": "¡Chau!"
      },
      {
       "ru": "До за́втра!",
       "es": "¡Hasta mañana!"
      },
      {
       "ru": "До свида́ния!",
       "es": "¡Adiós!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "пока",
        "=до",
        "свидан"
       ],
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Otra respuesta",
       "resp": [
        {
         "ru": "👋",
         "tr": "",
         "es": ""
        }
       ],
       "ir": "FIN",
       "comodin": true
      }
     ]
    }
   ]
  }
 ]
};
function mashaTema(id) { return MASHA.temas.find(t => t.id === id) || null; }
