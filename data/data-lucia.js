/* ============================================================
   DATA-LUCIA.JS — Charla con Lucía, «Болтаем с Лусией» (Abecé, 21/11/2026)
   ARCHIVO GENERADO: no se edita a mano. La fuente es
   herramientas/lucia/fuente-lucia.js; después de cambiarla se corre
   «node herramientas/lucia/armar.js», que pone la pronunciación en
   cirílico y verifica el vocabulario y la gramática de cada tema.

   El espejo de data-masha.js (Contexto §6.24 y §6.29): las líneas son
   { es, tr, ru } (español, pronunciación en cirílico, traducción rusa).
   LUCIA.temas: 6 por unidad (U2–U13), cada uno con desde, inicio,
     nodos (los pasos) y preguntas.
   LUCIA.vida: lo que Lucía cuenta de sí misma, con versiones por unidad
     (v: [{ d, l }]); se elige la más alta que el alumno ya entiende.
   LUCIA.apertura, comodines, utiles: lo que sirve en todos los temas.
   LUCIA.naciones: [país, él, ella, país (ru), él (ru), ella (ru)].
   Plantillas: {nombre}, {pais}, {nac}, {pais_ru}, {nac_ru}, {x} y
   {cansado/cansada} (según el género del alumno).
   ============================================================ */
const LUCIA = {
 "personaje": "lucia",
 "presentacion": "Лусия — испанка, преподаёт английский и живёт в Барселоне. Переписывайся с ней по-испански: она задаёт вопросы, а ты можешь спрашивать её о жизни.",
 "naciones": [
  [
   "España",
   "español",
   "española",
   "Испания",
   "испанец",
   "испанка"
  ],
  [
   "Rusia",
   "ruso",
   "rusa",
   "Россия",
   "русский",
   "русская"
  ],
  [
   "Ucrania",
   "ucraniano",
   "ucraniana",
   "Украина",
   "украинец",
   "украинка"
  ],
  [
   "Bielorrusia",
   "bielorruso",
   "bielorrusa",
   "Беларусь",
   "белорус",
   "белоруска"
  ],
  [
   "Kazajistán",
   "kazajo",
   "kazaja",
   "Казахстан",
   "казах",
   "казашка"
  ],
  [
   "Georgia",
   "georgiano",
   "georgiana",
   "Грузия",
   "грузин",
   "грузинка"
  ],
  [
   "Francia",
   "francés",
   "francesa",
   "Франция",
   "француз",
   "француженка"
  ],
  [
   "Alemania",
   "alemán",
   "alemana",
   "Германия",
   "немец",
   "немка"
  ],
  [
   "Italia",
   "italiano",
   "italiana",
   "Италия",
   "итальянец",
   "итальянка"
  ],
  [
   "Inglaterra",
   "inglés",
   "inglesa",
   "Англия",
   "англичанин",
   "англичанка"
  ],
  [
   "Irlanda",
   "irlandés",
   "irlandesa",
   "Ирландия",
   "ирландец",
   "ирландка"
  ],
  [
   "Portugal",
   "portugués",
   "portuguesa",
   "Португалия",
   "португалец",
   "португалка"
  ],
  [
   "Polonia",
   "polaco",
   "polaca",
   "Польша",
   "поляк",
   "полька"
  ],
  [
   "Grecia",
   "griego",
   "griega",
   "Греция",
   "грек",
   "гречанка"
  ],
  [
   "Suecia",
   "sueco",
   "sueca",
   "Швеция",
   "швед",
   "шведка"
  ],
  [
   "Turquía",
   "turco",
   "turca",
   "Турция",
   "турок",
   "турчанка"
  ],
  [
   "China",
   "chino",
   "china",
   "Китай",
   "китаец",
   "китаянка"
  ],
  [
   "Japón",
   "japonés",
   "japonesa",
   "Япония",
   "японец",
   "японка"
  ],
  [
   "Estados Unidos",
   "estadounidense",
   "estadounidense",
   "США",
   "американец",
   "американка"
  ],
  [
   "Canadá",
   "canadiense",
   "canadiense",
   "Канада",
   "канадец",
   "канадка"
  ],
  [
   "México",
   "mexicano",
   "mexicana",
   "Мексика",
   "мексиканец",
   "мексиканка"
  ],
  [
   "Cuba",
   "cubano",
   "cubana",
   "Куба",
   "кубинец",
   "кубинка"
  ],
  [
   "Colombia",
   "colombiano",
   "colombiana",
   "Колумбия",
   "колумбиец",
   "колумбийка"
  ],
  [
   "Perú",
   "peruano",
   "peruana",
   "Перу",
   "перуанец",
   "перуанка"
  ],
  [
   "Venezuela",
   "venezolano",
   "venezolana",
   "Венесуэла",
   "венесуэлец",
   "венесуэлка"
  ],
  [
   "Argentina",
   "argentino",
   "argentina",
   "Аргентина",
   "аргентинец",
   "аргентинка"
  ],
  [
   "Uruguay",
   "uruguayo",
   "uruguaya",
   "Уругвай",
   "уругваец",
   "уругвайка"
  ],
  [
   "Brasil",
   "brasileño",
   "brasileña",
   "Бразилия",
   "бразилец",
   "бразильянка"
  ]
 ],
 "apertura": {
  "conNombre": [
   {
    "d": 2,
    "l": [
     {
      "es": "¡Hola, {nombre}! 👋",
      "tr": "¡О́ла, {nombre}!",
      "ru": "Привет, {nombre}!"
     }
    ]
   }
  ],
  "sinNombre": [
   {
    "d": 2,
    "l": [
     {
      "es": "¡Hola! 👋",
      "tr": "¡О́ла!",
      "ru": "Привет!"
     }
    ]
   }
  ],
  "ideas": [
   {
    "es": "¡Hola, Lucía!",
    "ru": "Привет, Лусия!"
   },
   {
    "es": "¡Hola!",
    "ru": "Привет!"
   }
  ]
 },
 "comodines": {
  "noEntendi": [
   {
    "d": 2,
    "l": [
     {
      "es": "¡Uy! No entiendo. 🙈",
      "tr": "¡Уй! Но энтье́ндо.",
      "ru": "Ой! Не понимаю."
     }
    ]
   }
  ],
  "noSe": [
   {
    "d": 2,
    "l": [
     {
      "es": "Mmm… No sé. 😅",
      "tr": "Ммм… Но сэ.",
      "ru": "Хм… Не знаю."
     }
    ]
   }
  ],
  "latin": [
   {
    "d": 2,
    "l": [
     {
      "es": "¡En español, por favor! 😅",
      "tr": "¡Эн эспаньо́л, пор фабо́р!",
      "ru": "По-испански, пожалуйста!"
     }
    ]
   }
  ],
  "hola": [
   {
    "d": 2,
    "l": [
     {
      "es": "«Привет» es ruso. ¡En español es «hola»! 😄",
      "tr": "«Привет» эс ру́со. ¡Эн эспаньо́л эс «о́ла»!",
      "ru": "«Привет» — это по-русски. А по-испански — «hola»!"
     }
    ]
   }
  ],
  "masPreguntas": [
   {
    "d": 2,
    "l": [
     {
      "es": "¡Bien! 🙂",
      "tr": "¡Бьен!",
      "ru": "Хорошо!"
     }
    ]
   },
   {
    "d": 5,
    "l": [
     {
      "es": "¿Más preguntas? 🙂",
      "tr": "¿Мас прэгу́нтас?",
      "ru": "Ещё вопросы?"
     }
    ]
   }
  ],
  "yaDije": [
   {
    "d": 2,
    "l": [
     {
      "es": "😄",
      "tr": "",
      "ru": ""
     }
    ]
   }
  ]
 },
 "utiles": [
  {
   "id": "adios",
   "etiqueta": "Прощается",
   "claves": [
    "adios",
    "=hasta luego",
    "=hasta manana",
    "=chao",
    "=chau"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "es": "¡Adiós, {nombre}! 👋",
       "tr": "¡Адьо́с, {nombre}!",
       "ru": "Пока, {nombre}!"
      }
     ]
    }
   ],
   "accion": "fin"
  },
  {
   "id": "no_entiendo",
   "etiqueta": "Не понимает или просит повторить",
   "claves": [
    "=no entiendo",
    "repet",
    "despacio"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "es": "¡Vale! Más despacio:",
       "tr": "¡Ба́лэ! Мас дэспа́сьо:",
       "ru": "Хорошо! Помедленнее:"
      }
     ]
    }
   ],
   "accion": "repetir"
  },
  {
   "id": "gracias",
   "etiqueta": "Спасибо",
   "claves": [
    "gracias"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "es": "¡De nada! 😊",
       "tr": "¡Дэ на́да!",
       "ru": "Не за что!"
      }
     ]
    }
   ]
  },
  {
   "id": "tambien",
   "etiqueta": "Взаимно / очень приятно",
   "claves": [
    "=igualmente",
    "=encantado",
    "=encantada",
    "=mucho gusto"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "es": "🙂",
       "tr": "",
       "ru": ""
      }
     ]
    }
   ]
  },
  {
   "id": "hola",
   "etiqueta": "Снова здоровается",
   "claves": [
    "hola",
    "=buenas"
   ],
   "resp": [
    {
     "d": 2,
     "l": [
      {
       "es": "¡Hola! 😄",
       "tr": "¡О́ла!",
       "ru": "Привет!"
      }
     ]
    }
   ]
  }
 ],
 "vida": [
  {
   "id": "nombre_l",
   "tema": "Её имя",
   "desde": 2,
   "claves": [
    "como te llamas",
    "=quien eres"
   ],
   "idea": {
    "es": "¿Cómo te llamas?",
    "ru": "Как тебя зовут?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Me llamo Lucía. 🙂",
       "tr": "Мэ я́мо Луси́а.",
       "ru": "Меня зовут Лусия."
      }
     ]
    }
   ]
  },
  {
   "id": "como_l",
   "tema": "Как у неё дела",
   "desde": 2,
   "claves": [
    "que tal",
    "como estas",
    "=y tu que tal"
   ],
   "idea": {
    "es": "¿Qué tal?",
    "ru": "Как дела?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "¡Muy bien, gracias! 😊",
       "tr": "¡Муй бьен, гра́сьяс!",
       "ru": "Очень хорошо, спасибо!"
      }
     ]
    }
   ]
  },
  {
   "id": "origen_l",
   "tema": "Откуда она",
   "desde": 2,
   "claves": [
    "de donde",
    "=eres de"
   ],
   "idea": {
    "es": "¿De dónde eres?",
    "ru": "Откуда ты?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Soy española, de Madrid. Pero vivo en Barcelona. 😊",
       "tr": "Сой эспаньо́ла, дэ Мадри́д. Пэ́ро би́бо эн Барсэло́на.",
       "ru": "Я испанка, из Мадрида. Но живу в Барселоне."
      }
     ]
    },
    {
     "d": 8,
     "l": [
      {
       "es": "Soy de un pueblo pequeño cerca de Madrid. Vivo en Barcelona desde que terminé la universidad. 😊",
       "tr": "Сой дэ ун пуэ́бло пэкэ́ньо сэ́рка дэ Мадри́д. Би́бо эн Барсэло́на дэ́сдэ кэ тэрминэ́ ла унибэрсида́д.",
       "ru": "Я из маленькой деревни под Мадридом. Живу в Барселоне с тех пор, как окончила университет."
      }
     ]
    }
   ]
  },
  {
   "id": "edad_l",
   "tema": "Её возраст",
   "desde": 2,
   "claves": [
    "cuantos años",
    "=tu edad"
   ],
   "idea": {
    "es": "¿Cuántos años tienes?",
    "ru": "Сколько тебе лет?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Tengo treinta y dos años. 🎂",
       "tr": "Тэ́нго трэ́йнта и дос а́ньос.",
       "ru": "Мне тридцать два года."
      }
     ]
    }
   ]
  },
  {
   "id": "trabajo_l",
   "tema": "Её работа",
   "desde": 2,
   "claves": [
    "dedicas",
    "trabajas",
    "=tu trabajo",
    "profesion",
    "=que eres"
   ],
   "idea": {
    "es": "¿Qué eres?",
    "ru": "Кем ты работаешь?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Soy profesora de inglés. 👩‍🏫",
       "tr": "Сой профэсо́ра дэ инглэ́с.",
       "ru": "Я преподаю английский."
      }
     ]
    },
    {
     "d": 4,
     "l": [
      {
       "es": "Soy profesora de inglés en una escuela. Trabajo por la tarde, de cuatro a nueve. 👩‍🏫",
       "tr": "Сой профэсо́ра дэ инглэ́с эн у́на эскуэ́ла. Траба́хо пор ла та́рдэ, дэ куа́тро а нуэ́бэ.",
       "ru": "Я преподаю английский в школе. Работаю во второй половине дня, с четырёх до девяти."
      }
     ]
    }
   ]
  },
  {
   "id": "idiomas_l",
   "tema": "Языки",
   "desde": 2,
   "claves": [
    "idiomas",
    "hablas"
   ],
   "idea": {
    "es": "¿Qué idiomas hablas?",
    "ru": "На каких языках ты говоришь?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Hablo español, inglés y un poco de francés. ¿Y ruso? ¡No! 😅",
       "tr": "А́бло эспаньо́л, инглэ́с и ун по́ко дэ франсэ́с. ¿И ру́со? ¡Но!",
       "ru": "Я говорю по-испански, по-английски и немного по-французски. А по-русски? Нет!"
      }
     ]
    }
   ]
  },
  {
   "id": "familia_l",
   "tema": "Её семья",
   "desde": 2,
   "claves": [
    "hermano",
    "hermana",
    "familia",
    "pablo",
    "elena"
   ],
   "idea": {
    "es": "¿Tienes hermanos?",
    "ru": "У тебя есть братья или сёстры?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Sí: un hermano, Pablo, y una hermana, Elena. Pablo vive en Madrid. La novia de Pablo es Marta.",
       "tr": "Си: ун эрма́но, Па́бло, и у́на эрма́на, Элэ́на. Па́бло би́бэ эн Мадри́д. Ла но́бья дэ Па́бло эс Ма́рта.",
       "ru": "Да: брат Пабло и сестра Элена. Пабло живёт в Мадриде. Девушку Пабло зовут Марта."
      }
     ]
    }
   ]
  },
  {
   "id": "padres_l",
   "tema": "Её родители",
   "desde": 2,
   "claves": [
    "padre",
    "madre",
    "padres",
    "jorge",
    "carmen"
   ],
   "idea": {
    "es": "¿Y tu padre?",
    "ru": "А твой папа?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Mi padre se llama Jorge y es profesor. Mi madre, Carmen, es médica.",
       "tr": "Ми па́дрэ сэ я́ма Хо́рхэ и эс профэсо́р. Ми ма́дрэ, Ка́рмэн, эс мэ́дика.",
       "ru": "Моего папу зовут Хорхе, он учитель. Мою маму зовут Кармен, она врач."
      }
     ]
    },
    {
     "d": 4,
     "l": [
      {
       "es": "Mi padre, Jorge, es profesor y mi madre, Carmen, es médica. Viven cerca de Madrid. Los domingos los llamo por teléfono. 📞",
       "tr": "Ми па́дрэ, Хо́рхэ, эс профэсо́р и ми ма́дрэ, Ка́рмэн, эс мэ́дика. Би́бэн сэ́рка дэ Мадри́д. Лос доми́нгос лос я́мо пор тэлэ́фоно.",
       "ru": "Мой папа Хорхе — учитель, а мама Кармен — врач. Они живут под Мадридом. По воскресеньям я им звоню."
      }
     ]
    }
   ]
  },
  {
   "id": "ana_l",
   "tema": "Её подруга Аня",
   "desde": 2,
   "claves": [
    "=ana",
    "tu amiga"
   ],
   "idea": {
    "es": "¿Quién es Ana?",
    "ru": "Кто такая Аня?"
   },
   "v": [
    {
     "d": 2,
     "l": [
      {
       "es": "Ana es mi amiga. Es rusa, de Moscú, y es programadora. 😊",
       "tr": "А́на эс ми ами́га. Эс ру́са, дэ Моску́, и эс програмадо́ра.",
       "ru": "Аня — моя подруга. Она русская, из Москвы, и она программист."
      }
     ]
    }
   ]
  },
  {
   "id": "vivir_l",
   "tema": "Где она живёт",
   "desde": 3,
   "claves": [
    "donde vives",
    "=tu piso",
    "=tu casa",
    "=tu barrio"
   ],
   "idea": {
    "es": "¿Dónde vives?",
    "ru": "Где ты живёшь?"
   },
   "v": [
    {
     "d": 3,
     "l": [
      {
       "es": "Vivo en un piso pequeño en Gràcia, cerca de Ana. Hay un balcón y muchas plantas. 🌿",
       "tr": "Би́бо эн ун пи́со пэкэ́ньо эн Грàсья, сэ́рка дэ А́на. Ай ун балко́н и му́час пла́нтас.",
       "ru": "Я живу в маленькой квартире в Грасии, рядом с Аней. Там есть балкон и много растений."
      }
     ]
    }
   ]
  },
  {
   "id": "gustos_l",
   "tema": "Что она любит",
   "desde": 4,
   "claves": [
    "te gusta",
    "te encanta",
    "=tiempo libre"
   ],
   "idea": {
    "es": "¿Qué te gusta hacer?",
    "ru": "Что ты любишь делать?"
   },
   "v": [
    {
     "d": 4,
     "l": [
      {
       "es": "Me encanta el cine y la playa. ¡Y la música! 🎶",
       "tr": "Мэ энка́нта эл си́нэ и ла пла́я. ¡И ла му́сика!",
       "ru": "Я обожаю кино и пляж. И музыку!"
      }
     ]
    }
   ]
  },
  {
   "id": "dia_l",
   "tema": "Её день",
   "desde": 4,
   "claves": [
    "te levantas",
    "=dia normal",
    "por la manana",
    "a que hora"
   ],
   "idea": {
    "es": "¿A qué hora te levantas?",
    "ru": "Во сколько ты встаёшь?"
   },
   "v": [
    {
     "d": 4,
     "l": [
      {
       "es": "Me levanto a las ocho y desayuno un café y pan. Por la tarde trabajo. ☕",
       "tr": "Мэ лэба́нто а лас о́чо и дэсаю́но ун кафэ́ и пан. Пор ла та́рдэ траба́хо.",
       "ru": "Встаю в восемь и завтракаю кофе с хлебом. Во второй половине дня работаю."
      }
     ]
    }
   ]
  },
  {
   "id": "finde_l",
   "tema": "Её выходные",
   "desde": 4,
   "claves": [
    "fin de semana",
    "sabado",
    "domingo",
    "=finde"
   ],
   "idea": {
    "es": "¿Qué haces el fin de semana?",
    "ru": "Что ты делаешь на выходных?"
   },
   "v": [
    {
     "d": 4,
     "l": [
      {
       "es": "Los sábados Ana y yo desayunamos en un bar de la plaza. Los domingos llamo a mis padres. 😊",
       "tr": "Лос са́бадос А́на и йо дэсаюна́мос эн ун бар дэ ла пла́са. Лос доми́нгос я́мо а мис па́дрэс.",
       "ru": "По субботам мы с Аней завтракаем в баре на площади. По воскресеньям я звоню родителям."
      }
     ]
    }
   ]
  },
  {
   "id": "comida_l",
   "tema": "Что она ест",
   "desde": 5,
   "claves": [
    "te gusta comer",
    "comida",
    "cocinar",
    "cocinas",
    "=que comes"
   ],
   "idea": {
    "es": "¿Qué te gusta comer?",
    "ru": "Что ты любишь есть?"
   },
   "v": [
    {
     "d": 5,
     "l": [
      {
       "es": "Me encanta el pan con tomate y la tortilla. ¡Pero no sé cocinar mucho! 😅",
       "tr": "Мэ энка́нта эл пан кон тома́тэ и ла торти́я. ¡Пэ́ро но сэ косина́р му́чо!",
       "ru": "Обожаю хлеб с помидором и тортилью. Но готовить я умею не очень!"
      }
     ]
    }
   ]
  },
  {
   "id": "transporte_l",
   "tema": "Как она ездит на работу",
   "desde": 6,
   "claves": [
    "como vas",
    "metro",
    "en coche",
    "bici"
   ],
   "idea": {
    "es": "¿Cómo vas a la escuela?",
    "ru": "Как ты ездишь в школу?"
   },
   "v": [
    {
     "d": 6,
     "l": [
      {
       "es": "Voy a la escuela en metro. Tardo quince minutos. No tengo coche. 🚇",
       "tr": "Бой а ла эскуэ́ла эн мэ́тро. Та́рдо ки́нсэ мину́тос. Но тэ́нго ко́чэ.",
       "ru": "Я езжу в школу на метро. Дорога занимает пятнадцать минут. Машины у меня нет."
      }
     ]
    }
   ]
  },
  {
   "id": "infancia_l",
   "tema": "Её детство",
   "desde": 9,
   "claves": [
    "pequena",
    "infancia",
    "de nina",
    "nina"
   ],
   "idea": {
    "es": "¿Cómo era tu infancia?",
    "ru": "Каким было твоё детство?"
   },
   "v": [
    {
     "d": 9,
     "l": [
      {
       "es": "Vivía en un pueblo pequeño cerca de Madrid. Iba al río con Pablo y jugaba en la calle todo el día. 🏞️",
       "tr": "Биби́а эн ун пуэ́бло пэкэ́ньо сэ́рка дэ Мадри́д. И́ба ал ри́о кон Па́бло и хуга́ба эн ла ка́е то́до эл ди́а.",
       "ru": "Я жила в маленькой деревне под Мадридом. Ходила на речку с Пабло и целыми днями играла на улице."
      }
     ]
    }
   ]
  },
  {
   "id": "futuro_l",
   "tema": "Её будущее",
   "desde": 10,
   "claves": [
    "futuro",
    "cinco años",
    "manana",
    "haras",
    "seras"
   ],
   "idea": {
    "es": "¿Dónde estarás dentro de cinco años?",
    "ru": "Где ты будешь через пять лет?"
   },
   "v": [
    {
     "d": 10,
     "l": [
      {
       "es": "Creo que seguiré en Barcelona, dando clases. ¡Y tendré un perro! 🐕",
       "tr": "Крэ́о кэ сэгирэ́ эн Барсэло́на, да́ндо кла́сэс. ¡И тэндрэ́ ун пэ́рро!",
       "ru": "Думаю, я всё ещё буду в Барселоне и буду преподавать. И у меня будет собака!"
      }
     ]
    }
   ]
  },
  {
   "id": "viajes_l",
   "tema": "Её поездки",
   "desde": 8,
   "claves": [
    "viaje",
    "viajado",
    "has estado",
    "sevilla"
   ],
   "idea": {
    "es": "¿Cuál fue tu último viaje?",
    "ru": "Куда ты ездила в последний раз?"
   },
   "v": [
    {
     "d": 8,
     "l": [
      {
       "es": "Fui a Sevilla con mi hermana Elena. Estuve cuatro días y me encantó. ☀️",
       "tr": "Фуи а Сэби́я кон ми эрма́на Элэ́на. Эсту́бэ куа́тро ди́ас и мэ энканто́.",
       "ru": "Я ездила в Севилью с сестрой Эленой. Пробыла четыре дня, и мне очень понравилось."
      }
     ]
    }
   ]
  },
  {
   "id": "planes_l",
   "tema": "Её планы",
   "desde": 6,
   "claves": [
    "vas a hacer",
    "planes",
    "verano",
    "vacaciones"
   ],
   "idea": {
    "es": "¿Qué vas a hacer en verano?",
    "ru": "Что ты будешь делать летом?"
   },
   "v": [
    {
     "d": 6,
     "l": [
      {
       "es": "En verano voy a ir al pueblo de mis padres, cerca de Madrid. ☀️",
       "tr": "Эн бэра́но бой а ир ал пуэ́бло дэ мис па́дрэс, сэ́рка дэ Мадри́д.",
       "ru": "Летом я поеду в деревню к родителям, под Мадрид."
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
   "titulo": "¿Cómo te llamas?",
   "tituloRu": "Как тебя зовут?",
   "resumen": "Поздороваться, назвать своё имя и сказать, как дела",
   "intro": "Лусия здоровается и хочет узнать, как тебя зовут и как у тебя дела.",
   "inicio": "saludo",
   "apertura": false,
   "preguntas": [],
   "nodos": [
    {
     "id": "saludo",
     "titulo": "Приветствие",
     "bot": [
      {
       "es": "¡Hola! 👋",
       "tr": "¡О́ла!",
       "ru": "Привет!"
      }
     ],
     "ideas": [
      {
       "es": "¡Hola!",
       "ru": "Привет!"
      },
      {
       "es": "¡Hola, Lucía!",
       "ru": "Привет, Лусия!"
      },
      {
       "es": "¡Buenos días!",
       "ru": "Доброе утро!"
      },
      {
       "es": "¡Buenas tardes!",
       "ru": "Добрый день!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Здоровается",
       "claves": [
        "hola",
        "=buenos",
        "=buenas"
       ],
       "resp": [],
       "ir": "nombre"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [],
       "ir": "nombre",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¡Hola! 🙂",
      "tr": "¡О́ла!",
      "ru": "Привет!"
     }
    },
    {
     "id": "nombre",
     "titulo": "Твоё имя",
     "bot": [
      {
       "es": "Me llamo Lucía. ¿Y tú? ¿Cómo te llamas?",
       "tr": "Мэ я́мо Луси́а. ¿И ту? ¿Ко́мо тэ я́мас?",
       "ru": "Меня зовут Лусия. А тебя? Как тебя зовут?"
      }
     ],
     "ideas": [
      {
       "es": "Me llamo …",
       "ru": "Меня зовут …"
      },
      {
       "es": "Soy …",
       "ru": "Я …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет имя",
       "resp": [],
       "ir": "encantado",
       "dato": "Имя",
       "captura": "nombre",
       "porNombre": {
        "lucia": [
         {
          "es": "¿Lucía? ¡Yo también me llamo Lucía! 😄",
          "tr": "¿Луси́а? ¡Йо тамбье́н мэ я́мо Луси́а!",
          "ru": "Лусия? Меня тоже зовут Лусия!"
         }
        ],
        "ana": [
         {
          "es": "¿Ana? ¡Mi amiga también se llama Ana! 😄",
          "tr": "¿А́на? ¡Ми ами́га тамбье́н сэ я́ма А́на!",
          "ru": "Аня? Мою подругу тоже зовут Аня!"
         }
        ],
        "*": [
         {
          "es": "¡Hola, {nombre}! 😊",
          "tr": "¡О́ла, {nombre}!",
          "ru": "Привет, {nombre}!"
         }
        ]
       }
      }
     ],
     "aTi": [
      {
       "es": "¡Me llamo Lucía! 😄",
       "tr": "¡Мэ я́мо Луси́а!",
       "ru": "Меня зовут Лусия!"
      }
     ],
     "aTiTema": "nombre_l",
     "saltarSi": "nombre",
     "sig": "encantado",
     "alSaltar": [
      {
       "es": "¡Tú eres {nombre}! 🙂",
       "tr": "¡Ту э́рэс {nombre}!",
       "ru": "Ты — {nombre}!"
      }
     ],
     "retomar": {
      "es": "¿Cómo te llamas?",
      "tr": "¿Ко́мо тэ я́мас?",
      "ru": "Как тебя зовут?"
     }
    },
    {
     "id": "encantado",
     "titulo": "Очень приятно",
     "bot": [
      {
       "es": "¡Encantada! 😊",
       "tr": "¡Энканта́да!",
       "ru": "Очень приятно!"
      }
     ],
     "ideas": [
      {
       "es": "¡Encantado!",
       "ru": "Очень приятно! (говорит мужчина)"
      },
      {
       "es": "¡Encantada!",
       "ru": "Очень приятно! (говорит женщина)"
      },
      {
       "es": "¡Mucho gusto!",
       "ru": "Очень приятно!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Encantado / encantada",
       "claves": [
        "=encantado",
        "=encantada"
       ],
       "resp": [],
       "ir": "que_tal",
       "genero": {
        "encantado": "m",
        "encantada": "f"
       }
      },
      {
       "etiqueta": "Mucho gusto",
       "claves": [
        "gusto",
        "igualmente"
       ],
       "resp": [],
       "ir": "que_tal"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [],
       "ir": "que_tal",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¡Encantada!",
      "tr": "¡Энканта́да!",
      "ru": "Очень приятно!"
     }
    },
    {
     "id": "que_tal",
     "titulo": "Как дела?",
     "bot": [
      {
       "es": "¿Qué tal?",
       "tr": "¿Кэ тал?",
       "ru": "Как дела?"
      }
     ],
     "ideas": [
      {
       "es": "Bien, gracias. ¿Y tú?",
       "ru": "Хорошо, спасибо. А ты?"
      },
      {
       "es": "Muy bien.",
       "ru": "Очень хорошо."
      },
      {
       "es": "Mal. 😞",
       "ru": "Плохо."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Хорошо",
       "claves": [
        "bien",
        "genial"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Так себе",
       "claves": [
        "regular",
        "=mas o menos"
       ],
       "resp": [
        {
         "es": "Mmm… 😕",
         "tr": "Ммм…",
         "ru": "Хм…"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Плохо",
       "claves": [
        "=mal"
       ],
       "resp": [
        {
         "es": "¡Oh, no! 😞",
         "tr": "¡О, но!",
         "ru": "Ой, нет!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "¡Muy bien, gracias! 😊",
       "tr": "¡Муй бьен, гра́сьяс!",
       "ru": "Очень хорошо, спасибо!"
      }
     ],
     "aTiTema": "como_l",
     "retomar": {
      "es": "¿Qué tal?",
      "tr": "¿Кэ тал?",
      "ru": "Как дела?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Hasta mañana, {nombre}! 👋",
       "tr": "¡А́ста маня́на, {nombre}!",
       "ru": "До завтра, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "titulo": "¿De dónde eres?",
   "tituloRu": "Откуда ты?",
   "resumen": "Сказать, откуда ты и где живёшь",
   "intro": "Лусия спрашивает, откуда ты, и рассказывает, откуда она сама.",
   "inicio": "de_donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "de_donde",
     "titulo": "Откуда ты",
     "bot": [
      {
       "es": "¿De dónde eres?",
       "tr": "¿Дэ до́ндэ э́рэс?",
       "ru": "Откуда ты?"
      }
     ],
     "ideas": [
      {
       "es": "Soy de Rusia.",
       "ru": "Я из России."
      },
      {
       "es": "Soy ruso.",
       "ru": "Я русский."
      },
      {
       "es": "Soy rusa.",
       "ru": "Я русская."
      },
      {
       "es": "Soy de Ucrania.",
       "ru": "Я из Украины."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет страну",
       "resp": [],
       "ir": "lucia_de",
       "dato": "Страна",
       "captura": "pais",
       "porPais": {
        "España": {
         "resp": [
          {
           "es": "¿De España? ¡Yo también! 😄",
           "tr": "¿Дэ Эспа́ня? ¡Йо тамбье́н!",
           "ru": "Из Испании? Я тоже!"
          }
         ],
         "ir": "lucia_de"
        },
        "Rusia": {
         "resp": [
          {
           "es": "¿De Rusia? ¡Mi amiga Ana también es de Rusia! 😊",
           "tr": "¿Дэ Ру́сья? ¡Ми ами́га А́на тамбье́н эс дэ Ру́сья!",
           "ru": "Из России? Моя подруга Аня тоже из России!"
          }
         ],
         "ir": "lucia_de"
        },
        "*": {
         "resp": [
          {
           "es": "¿De {pais}? ¡Qué bien! 😊",
           "tr": "¿Дэ {pais}? ¡Кэ бьен!",
           "ru": "Из страны {pais}? Как здорово!"
          }
         ],
         "ir": "lucia_de"
        }
       }
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "lucia_de",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Soy española, de Madrid. 😊",
       "tr": "Сой эспаньо́ла, дэ Мадри́д.",
       "ru": "Я испанка, из Мадрида."
      }
     ],
     "aTiTema": "origen_l",
     "retomar": {
      "es": "¿De dónde eres?",
      "tr": "¿Дэ до́ндэ э́рэс?",
      "ru": "Откуда ты?"
     }
    },
    {
     "id": "lucia_de",
     "titulo": "Откуда Лусия",
     "bot": [
      {
       "es": "Yo soy española, de Madrid. 😊",
       "tr": "Йо сой эспаньо́ла, дэ Мадри́д.",
       "ru": "Я испанка, из Мадрида."
      },
      {
       "es": "Pero vivo en Barcelona. ¿Y tú? ¿Dónde vives?",
       "tr": "Пэ́ро би́бо эн Барсэло́на. ¿И ту? ¿До́ндэ би́бэс?",
       "ru": "Но живу в Барселоне. А ты? Где ты живёшь?"
      }
     ],
     "ideas": [
      {
       "es": "Vivo en Moscú.",
       "ru": "Я живу в Москве."
      },
      {
       "es": "Vivo en Barcelona.",
       "ru": "Я живу в Барселоне."
      },
      {
       "es": "Vivo en Madrid.",
       "ru": "Я живу в Мадриде."
      }
     ],
     "ramas": [
      {
       "etiqueta": "В Барселоне",
       "claves": [
        "barcelona"
       ],
       "resp": [
        {
         "es": "¿En Barcelona? ¡Yo también vivo en Barcelona! 😄",
         "tr": "¿Эн Барсэло́на? ¡Йо тамбье́н би́бо эн Барсэло́на!",
         "ru": "В Барселоне? Я тоже живу в Барселоне!"
        }
       ],
       "ir": "nac",
       "dato": "Город",
       "datoValor": "Barcelona"
      },
      {
       "etiqueta": "Называет город",
       "resp": [
        {
         "es": "¿En {x}? ¡Qué bien! 🙂",
         "tr": "¿Эн {x}? ¡Кэ бьен!",
         "ru": "В городе {x}? Здорово!"
        }
       ],
       "ir": "nac",
       "dato": "Город",
       "captura": "eco",
       "tras": [
        "en"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 🙂",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "nac",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde vives?",
      "tr": "¿До́ндэ би́бэс?",
      "ru": "Где ты живёшь?"
     }
    },
    {
     "id": "nac",
     "titulo": "Национальность Ани",
     "bot": [
      {
       "es": "Mi amiga Ana es de Rusia. ¿Es rusa o ruso? 🤔",
       "tr": "Ми ами́га А́на эс дэ Ру́сья. ¿Эс ру́са о ру́со?",
       "ru": "Моя подруга Аня из России. Она rusa или ruso?"
      }
     ],
     "ideas": [
      {
       "es": "Es rusa.",
       "ru": "Она русская."
      },
      {
       "es": "Es ruso.",
       "ru": "Он русский."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Rusa",
       "claves": [
        "=rusa"
       ],
       "resp": [
        {
         "es": "¡Sí! Ana es una mujer: es rusa. 👍",
         "tr": "¡Си! А́на эс у́на мухэ́р: эс ру́са.",
         "ru": "Да! Аня — женщина: она rusa."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Ruso",
       "claves": [
        "=ruso"
       ],
       "resp": [
        {
         "es": "Mmm… Ana es una mujer: es rusa. 😉",
         "tr": "Ммм… А́на эс у́на мухэ́р: эс ру́са.",
         "ru": "Хм… Аня — женщина: она rusa."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Ana es rusa. 😉",
         "tr": "А́на эс ру́са.",
         "ru": "Аня — rusa."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Rusa o ruso?",
      "tr": "¿Ру́са о ру́со?",
      "ru": "Rusa или ruso?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "titulo": "¿Qué idiomas hablas?",
   "tituloRu": "На каких языках ты говоришь?",
   "resumen": "Сказать, на каких языках ты говоришь",
   "intro": "Лусия преподаёт английский. Она спрашивает, какие языки знаешь ты.",
   "inicio": "idiomas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "idiomas",
     "titulo": "Языки",
     "bot": [
      {
       "es": "¿Qué idiomas hablas?",
       "tr": "¿Кэ идьо́мас а́блас?",
       "ru": "На каких языках ты говоришь?"
      }
     ],
     "ideas": [
      {
       "es": "Hablo ruso y un poco de español.",
       "ru": "Я говорю по-русски и немного по-испански."
      },
      {
       "es": "Hablo ruso, inglés y español.",
       "ru": "Я говорю по-русски, по-английски и по-испански."
      },
      {
       "es": "Hablo ucraniano y ruso.",
       "ru": "Я говорю по-украински и по-русски."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Говорит по-английски",
       "claves": [
        "hablo ingles",
        "ingles"
       ],
       "resp": [
        {
         "es": "¿Inglés? ¡Yo soy profesora de inglés! 😄",
         "tr": "¿Инглэ́с? ¡Йо сой профэсо́ра дэ инглэ́с!",
         "ru": "Английский? Я преподаю английский!"
        }
       ],
       "ir": "espanol",
       "dato": "Языки"
      },
      {
       "etiqueta": "Называет языки",
       "claves": [
        "hablo",
        "ruso",
        "ucraniano",
        "frances",
        "aleman"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "espanol",
       "dato": "Языки"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "espanol",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Hablo español, inglés y un poco de francés. 😊",
       "tr": "А́бло эспаньо́л, инглэ́с и ун по́ко дэ франсэ́с.",
       "ru": "Я говорю по-испански, по-английски и немного по-французски."
      }
     ],
     "aTiTema": "idiomas_l",
     "retomar": {
      "es": "¿Qué idiomas hablas?",
      "tr": "¿Кэ идьо́мас а́блас?",
      "ru": "На каких языках ты говоришь?"
     }
    },
    {
     "id": "espanol",
     "titulo": "Испанский",
     "bot": [
      {
       "es": "¿Y hablas bien español? 🤔",
       "tr": "¿И а́блас бьен эспаньо́л?",
       "ru": "А по-испански ты хорошо говоришь?"
      }
     ],
     "ideas": [
      {
       "es": "Un poco.",
       "ru": "Немного."
      },
      {
       "es": "No muy bien.",
       "ru": "Не очень хорошо."
      },
      {
       "es": "¡Sí, muy bien!",
       "ru": "Да, очень хорошо!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Немного / не очень",
       "claves": [
        "poco",
        "=no muy bien",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Pero hablas español! 😄 👍",
         "tr": "¡Пэ́ро а́блас эспаньо́л!",
         "ru": "Но ты же говоришь по-испански!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Хорошо",
       "claves": [
        "bien",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Sí, hablas muy bien! 😊",
         "tr": "¡Си, а́блас муй бьен!",
         "ru": "Да, ты говоришь очень хорошо!"
        }
       ],
       "ir": "ruso"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Hablas muy bien! 😊",
         "tr": "¡А́блас муй бьен!",
         "ru": "Ты говоришь очень хорошо!"
        }
       ],
       "ir": "ruso",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Hablas bien español?",
      "tr": "¿А́блас бьен эспаньо́л?",
      "ru": "Ты хорошо говоришь по-испански?"
     }
    },
    {
     "id": "ruso",
     "titulo": "А русский?",
     "bot": [
      {
       "es": "Yo no hablo ruso. 😅 ¿Cómo es «hola» en ruso?",
       "tr": "Йо но а́бло ру́со. ¿Ко́мо эс «о́ла» эн ру́со?",
       "ru": "Я не говорю по-русски. Как будет «hola» по-русски?"
      }
     ],
     "ideas": [
      {
       "es": "«Привет».",
       "ru": "«Привет»."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Привет",
       "claves": [
        "привет",
        "здравств"
       ],
       "resp": [
        {
         "es": "¡Gracias! 😄",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Gracias! 😄",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "cirilico": true,
     "retomar": {
      "es": "¿«Hola» en ruso?",
      "tr": "¿«О́ла» эн ру́со?",
      "ru": "«Hola» по-русски?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u2-profesion",
   "desde": 2,
   "titulo": "¿A qué te dedicas?",
   "tituloRu": "Чем ты занимаешься?",
   "resumen": "Рассказать, кем ты работаешь или где учишься.",
   "intro": "Лусия рассказывает о своей работе и спрашивает о твоей.",
   "inicio": "profesion",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "profesion",
     "titulo": "Профессия",
     "bot": [
      {
       "es": "Yo soy profesora de inglés. 👩‍🏫",
       "tr": "Йо сой профэсо́ра дэ инглэ́с.",
       "ru": "Я преподаю английский."
      },
      {
       "es": "¿Y tú? ¿Qué eres?",
       "tr": "¿И ту? ¿Кэ э́рэс?",
       "ru": "А ты? Кем ты работаешь?"
      }
     ],
     "ideas": [
      {
       "es": "Soy estudiante.",
       "ru": "Я студент(ка)."
      },
      {
       "es": "Soy programador.",
       "ru": "Я программист."
      },
      {
       "es": "Soy médica.",
       "ru": "Я врач (женщина)."
      },
      {
       "es": "Soy ingeniero.",
       "ru": "Я инженер."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Студент",
       "claves": [
        "estudiante"
       ],
       "resp": [
        {
         "es": "¿Estudiante? ¡Qué bien! 📚",
         "tr": "¿Эстудья́нтэ? ¡Кэ бьен!",
         "ru": "Студент? Здорово!"
        }
       ],
       "ir": "ana",
       "dato": "Профессия",
       "datoValor": "estudiante"
      },
      {
       "etiqueta": "Преподаватель",
       "claves": [
        "profesor",
        "profesora"
       ],
       "resp": [
        {
         "es": "¿Profesor? ¡Yo también soy profesora! 😄",
         "tr": "¿Профэсо́р? ¡Йо тамбье́н сой профэсо́ра!",
         "ru": "Преподаватель? Я тоже преподаю!"
        }
       ],
       "ir": "ana",
       "dato": "Профессия",
       "genero": {
        "profesor": "m",
        "profesora": "f"
       }
      },
      {
       "etiqueta": "Называет профессию",
       "resp": [
        {
         "es": "¿{x}? ¡Qué bien! 😊",
         "tr": "¿{x}? ¡Кэ бьен!",
         "ru": "{x}? Здорово!"
        }
       ],
       "ir": "ana",
       "dato": "Профессия",
       "captura": "eco",
       "tras": [
        "soy"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Soy profesora de inglés. 😊",
       "tr": "Сой профэсо́ра дэ инглэ́с.",
       "ru": "Я преподаю английский."
      }
     ],
     "aTiTema": "trabajo_l",
     "retomar": {
      "es": "¿Qué eres?",
      "tr": "¿Кэ э́рэс?",
      "ru": "Кем ты работаешь?"
     }
    },
    {
     "id": "ana",
     "titulo": "Работа Ани",
     "bot": [
      {
       "es": "Mi amiga Ana es de Moscú. ¿Qué es Ana? 🤔 ¿Médica? ¿Programadora?",
       "tr": "Ми ами́га А́на эс дэ Моску́. ¿Кэ эс А́на? ¿Мэ́дика? ¿Програмадо́ра?",
       "ru": "Моя подруга Аня из Москвы. Кем она работает? Врач? Программист?"
      }
     ],
     "ideas": [
      {
       "es": "¿Es médica?",
       "ru": "Она врач?"
      },
      {
       "es": "¿Es programadora?",
       "ru": "Она программист?"
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Программист",
       "claves": [
        "programador"
       ],
       "resp": [
        {
         "es": "¡Sí! Ana es programadora. 💻",
         "tr": "¡Си! А́на эс програмадо́ра.",
         "ru": "Да! Аня — программист."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Врач",
       "claves": [
        "medic"
       ],
       "resp": [
        {
         "es": "No, no es médica. Es programadora. 💻",
         "tr": "Но, но эс мэ́дика. Эс програмадо́ра.",
         "ru": "Нет, она не врач. Она программист."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Ana es programadora. 💻",
         "tr": "А́на эс програмадо́ра.",
         "ru": "Аня — программист."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué es Ana?",
      "tr": "¿Кэ эс А́на?",
      "ru": "Кем работает Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u2-datos",
   "desde": 2,
   "titulo": "Teléfono y correo",
   "tituloRu": "Телефон и почта",
   "resumen": "Возраст, номер телефона и электронная почта",
   "intro": "Лусия хочет записать твои данные: возраст, телефон и почту.",
   "inicio": "edad",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "edad",
     "titulo": "Возраст",
     "bot": [
      {
       "es": "¿Cuántos años tienes?",
       "tr": "¿Куа́нтос а́ньос тье́нэс?",
       "ru": "Сколько тебе лет?"
      }
     ],
     "ideas": [
      {
       "es": "Tengo veinte años.",
       "ru": "Мне двадцать лет."
      },
      {
       "es": "Tengo treinta y cinco años.",
       "ru": "Мне тридцать пять лет."
      },
      {
       "es": "Tengo … años.",
       "ru": "Мне … лет."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Soy … años (ошибка)",
       "claves": [
        "=soy años",
        "soy anos"
       ],
       "resp": [
        {
         "es": "😉 En español es «tengo … años».",
         "tr": "Эн эспаньо́л эс «тэ́нго … а́ньос».",
         "ru": "По-испански говорят «tengo … años»."
        }
       ],
       "ir": "telefono"
      },
      {
       "etiqueta": "Называет возраст",
       "claves": [
        "tengo",
        "años",
        "=anos"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Хорошо!"
        }
       ],
       "ir": "telefono",
       "dato": "Возраст"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Хорошо!"
        }
       ],
       "ir": "telefono",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Tengo treinta y dos años. 🎂",
       "tr": "Тэ́нго трэ́йнта и дос а́ньос.",
       "ru": "Мне тридцать два года."
      }
     ],
     "aTiTema": "edad_l",
     "retomar": {
      "es": "¿Cuántos años tienes?",
      "tr": "¿Куа́нтос а́ньос тье́нэс?",
      "ru": "Сколько тебе лет?"
     }
    },
    {
     "id": "telefono",
     "titulo": "Телефон",
     "bot": [
      {
       "es": "¿Y tu número de teléfono? 📱",
       "tr": "¿И ту ну́мэро дэ тэлэ́фоно?",
       "ru": "А твой номер телефона?"
      }
     ],
     "ideas": [
      {
       "es": "Es el seis, cero, cero…",
       "ru": "Это шесть, ноль, ноль…"
      },
      {
       "es": "Mi número es el …",
       "ru": "Мой номер …"
      },
      {
       "es": "No tengo teléfono.",
       "ru": "У меня нет телефона."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет телефона",
       "claves": [
        "=no tengo"
       ],
       "resp": [
        {
         "es": "¿No tienes teléfono? 😮 ¡Vale!",
         "tr": "¿Но тье́нэс тэлэ́фоно? ¡Ба́лэ!",
         "ru": "У тебя нет телефона? Ладно!"
        }
       ],
       "ir": "correo"
      },
      {
       "etiqueta": "Называет номер",
       "claves": [
        "cero",
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
        "numero"
       ],
       "resp": [
        {
         "es": "¡Gracias! 📱",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "correo",
       "dato": "Телефон"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Gracias! 📱",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "correo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Tu número de teléfono?",
      "tr": "¿Ту ну́мэро дэ тэлэ́фоно?",
      "ru": "Твой номер телефона?"
     }
    },
    {
     "id": "correo",
     "titulo": "Почта",
     "bot": [
      {
       "es": "¿Y tu correo? ✉️",
       "tr": "¿И ту коррэ́о?",
       "ru": "А твоя почта?"
      }
     ],
     "ideas": [
      {
       "es": "Es iván arroba correo punto es.",
       "ru": "Это ivan собака correo точка es."
      },
      {
       "es": "Mi correo es …",
       "ru": "Моя почта …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "С arroba",
       "claves": [
        "arroba",
        "@"
       ],
       "resp": [
        {
         "es": "¡Muy bien, gracias! ✉️",
         "tr": "¡Муй бьен, гра́сьяс!",
         "ru": "Отлично, спасибо!"
        }
       ],
       "ir": "fin",
       "dato": "Почта"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mmm… ¿Y la arroba? Un correo tiene una arroba: @. 😉",
         "tr": "Ммм… ¿И ла арро́ба? Ун коррэ́о тье́нэ у́на арро́ба: @.",
         "ru": "Хм… А где arroba? В адресе почты есть «собака»: @."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Tu correo?",
      "tr": "¿Ту коррэ́о?",
      "ru": "Твоя почта?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u2-familia",
   "desde": 2,
   "titulo": "Mi familia",
   "tituloRu": "Моя семья",
   "resumen": "Рассказать о семье: братья, сёстры, родители",
   "intro": "Лусия рассказывает о своей семье и спрашивает о твоей.",
   "inicio": "hermanos",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hermanos",
     "titulo": "Братья и сёстры",
     "bot": [
      {
       "es": "Yo tengo un hermano, Pablo, y una hermana, Elena. 👫",
       "tr": "Йо тэ́нго ун эрма́но, Па́бло, и у́на эрма́на, Элэ́на.",
       "ru": "У меня есть брат Пабло и сестра Элена."
      },
      {
       "es": "¿Y tú? ¿Tienes hermanos?",
       "tr": "¿И ту? ¿Тье́нэс эрма́нос?",
       "ru": "А у тебя? Есть братья или сёстры?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, tengo un hermano.",
       "ru": "Да, у меня есть брат."
      },
      {
       "es": "Sí, tengo una hermana.",
       "ru": "Да, у меня есть сестра."
      },
      {
       "es": "No, no tengo hermanos.",
       "ru": "Нет, у меня нет братьев и сестёр."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "=no tengo",
        "=no"
       ],
       "resp": [
        {
         "es": "¿No tienes hermanos? Mmm… ¡pero tienes amigos! 😄",
         "tr": "¿Но тье́нэс эрма́нос? Ммм… ¡пэ́ро тье́нэс ами́гос!",
         "ru": "Нет братьев и сестёр? Хм… зато у тебя есть друзья!"
        }
       ],
       "ir": "padres",
       "dato": "Братья и сёстры",
       "datoValor": "нет"
      },
      {
       "etiqueta": "Есть",
       "claves": [
        "hermano",
        "hermana",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "como_se_llama",
       "dato": "Братья и сёстры"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "padres",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Tengo un hermano, Pablo, y una hermana, Elena. 😊",
       "tr": "Тэ́нго ун эрма́но, Па́бло, и у́на эрма́на, Элэ́на.",
       "ru": "У меня есть брат Пабло и сестра Элена."
      }
     ],
     "aTiTema": "familia_l",
     "retomar": {
      "es": "¿Tienes hermanos?",
      "tr": "¿Тье́нэс эрма́нос?",
      "ru": "У тебя есть братья или сёстры?"
     }
    },
    {
     "id": "como_se_llama",
     "titulo": "Как зовут",
     "bot": [
      {
       "es": "¿Cómo se llama?",
       "tr": "¿Ко́мо сэ я́ма?",
       "ru": "Как его (её) зовут?"
      }
     ],
     "ideas": [
      {
       "es": "Se llama …",
       "ru": "Его (её) зовут …"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет имя",
       "resp": [
        {
         "es": "¿{x}? ¡Hola, {x}! 😄",
         "tr": "¿{x}? ¡О́ла, {x}!",
         "ru": "{x}? Привет, {x}!"
        }
       ],
       "ir": "padres",
       "dato": "Имя брата / сестры",
       "captura": "eco",
       "tras": [
        "llama"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 😊",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "padres",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo se llama?",
      "tr": "¿Ко́мо сэ я́ма?",
      "ru": "Как его (её) зовут?"
     }
    },
    {
     "id": "padres",
     "titulo": "Родители Лусии",
     "bot": [
      {
       "es": "Mi padre se llama Jorge y es profesor. Mi madre, Carmen, es médica. 👨‍🏫👩‍⚕️",
       "tr": "Ми па́дрэ сэ я́ма Хо́рхэ и эс профэсо́р. Ми ма́дрэ, Ка́рмэн, эс мэ́дика.",
       "ru": "Моего папу зовут Хорхе, он учитель. Мою маму зовут Кармен, она врач."
      },
      {
       "es": "¿Y tu madre? ¿Qué es?",
       "tr": "¿И ту ма́дрэ? ¿Кэ эс?",
       "ru": "А твоя мама? Кем она работает?"
      }
     ],
     "ideas": [
      {
       "es": "Mi madre es médica.",
       "ru": "Моя мама — врач."
      },
      {
       "es": "Mi madre es profesora.",
       "ru": "Моя мама — учительница."
      },
      {
       "es": "Es ingeniera.",
       "ru": "Она инженер."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Врач",
       "claves": [
        "medic"
       ],
       "resp": [
        {
         "es": "¿Médica? ¡Mi madre también es médica! 😄",
         "tr": "¿Мэ́дика? ¡Ми ма́дрэ тамбье́н эс мэ́дика!",
         "ru": "Врач? Моя мама тоже врач!"
        }
       ],
       "ir": "fin",
       "dato": "Мама"
      },
      {
       "etiqueta": "Учительница",
       "claves": [
        "profesora"
       ],
       "resp": [
        {
         "es": "¿Profesora? ¡Yo también soy profesora! 😄",
         "tr": "¿Профэсо́ра? ¡Йо тамбье́н сой профэсо́ра!",
         "ru": "Учительница? Я тоже!"
        }
       ],
       "ir": "fin",
       "dato": "Мама"
      },
      {
       "etiqueta": "Называет профессию",
       "resp": [
        {
         "es": "¿{x}? ¡Qué bien! 😊",
         "tr": "¿{x}? ¡Кэ бьен!",
         "ru": "{x}? Здорово!"
        }
       ],
       "ir": "fin",
       "dato": "Мама",
       "captura": "eco",
       "tras": [
        "es"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Mi madre, Carmen, es médica. 😊",
       "tr": "Ми ма́дрэ, Ка́рмэн, эс мэ́дика.",
       "ru": "Моя мама Кармен — врач."
      }
     ],
     "aTiTema": "padres_l",
     "retomar": {
      "es": "¿Qué es tu madre?",
      "tr": "¿Кэ эс ту ма́дрэ?",
      "ru": "Кем работает твоя мама?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u3-piso",
   "desde": 3,
   "titulo": "Mi piso",
   "tituloRu": "Моя квартира",
   "resumen": "Рассказать, какая у тебя квартира и что в ней есть",
   "intro": "Лусия рассказывает о своей квартире и спрашивает о твоей.",
   "inicio": "piso",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "piso",
     "titulo": "Квартира",
     "bot": [
      {
       "es": "Mi piso es pequeño, pero es muy bonito. 🏠",
       "tr": "Ми пи́со эс пэкэ́ньо, пэ́ро эс муй бони́то.",
       "ru": "Моя квартира маленькая, но очень красивая."
      },
      {
       "es": "¿Y tu piso? ¿Cómo es? ¿Grande o pequeño?",
       "tr": "¿И ту пи́со? ¿Ко́мо эс? ¿Гра́ндэ о пэкэ́ньо?",
       "ru": "А твоя квартира? Какая она? Большая или маленькая?"
      }
     ],
     "ideas": [
      {
       "es": "Es pequeño.",
       "ru": "Она маленькая."
      },
      {
       "es": "Es grande y bonito.",
       "ru": "Она большая и красивая."
      },
      {
       "es": "Vivo en una casa.",
       "ru": "Я живу в доме."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дом",
       "claves": [
        "=una casa",
        "=en una casa"
       ],
       "resp": [
        {
         "es": "¿Una casa? ¡Qué bien! 🏡",
         "tr": "¿У́на ка́са? ¡Кэ бьен!",
         "ru": "Дом? Как здорово!"
        }
       ],
       "ir": "habitaciones",
       "dato": "Жильё",
       "datoValor": "una casa"
      },
      {
       "etiqueta": "Маленькая",
       "claves": [
        "pequeñ"
       ],
       "resp": [
        {
         "es": "¡Mi piso también es pequeño! 😄",
         "tr": "¡Ми пи́со тамбье́н эс пэкэ́ньо!",
         "ru": "Моя квартира тоже маленькая!"
        }
       ],
       "ir": "habitaciones",
       "dato": "Жильё",
       "datoValor": "un piso pequeño"
      },
      {
       "etiqueta": "Большая",
       "claves": [
        "grande"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "habitaciones",
       "dato": "Жильё",
       "datoValor": "un piso grande"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "habitaciones",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Mi piso es pequeño, pero es muy bonito. 😊",
       "tr": "Ми пи́со эс пэкэ́ньо, пэ́ро эс муй бони́то.",
       "ru": "Моя квартира маленькая, но очень красивая."
      }
     ],
     "aTiTema": "vivir_l",
     "retomar": {
      "es": "¿Cómo es tu piso?",
      "tr": "¿Ко́мо эс ту пи́со?",
      "ru": "Какая у тебя квартира?"
     }
    },
    {
     "id": "habitaciones",
     "titulo": "Комнаты",
     "bot": [
      {
       "es": "¿Cuántas habitaciones hay?",
       "tr": "¿Куа́нтас абитасьо́нэс ай?",
       "ru": "Сколько там комнат?"
      }
     ],
     "ideas": [
      {
       "es": "Hay una habitación.",
       "ru": "Одна комната."
      },
      {
       "es": "Hay dos habitaciones.",
       "ru": "Две комнаты."
      },
      {
       "es": "Hay tres habitaciones.",
       "ru": "Три комнаты."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Одна",
       "claves": [
        "=una",
        "=un"
       ],
       "resp": [
        {
         "es": "¡En mi piso también! Hay una habitación, un salón, una cocina y un baño.",
         "tr": "¡Эн ми пи́со тамбье́н! Ай у́на абитасьо́н, ун сало́н, у́на коси́на и ун ба́ньо.",
         "ru": "У меня тоже! Одна комната, гостиная, кухня и ванная."
        }
       ],
       "ir": "balcon"
      },
      {
       "etiqueta": "Несколько",
       "claves": [
        "dos",
        "tres",
        "cuatro",
        "cinco"
       ],
       "resp": [
        {
         "es": "¡Qué bien! En mi piso hay una habitación. 😅",
         "tr": "¡Кэ бьен! Эн ми пи́со ай у́на абитасьо́н.",
         "ru": "Здорово! А у меня одна комната."
        }
       ],
       "ir": "balcon"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "En mi piso hay una habitación. 😅",
         "tr": "Эн ми пи́со ай у́на абитасьо́н.",
         "ru": "У меня одна комната."
        }
       ],
       "ir": "balcon",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuántas habitaciones hay?",
      "tr": "¿Куа́нтас абитасьо́нэс ай?",
      "ru": "Сколько комнат?"
     }
    },
    {
     "id": "balcon",
     "titulo": "Балкон",
     "bot": [
      {
       "es": "En mi piso hay un balcón y muchas plantas. 🌿 ¿Hay un balcón en tu piso?",
       "tr": "Эн ми пи́со ай ун балко́н и му́час пла́нтас. ¿Ай ун балко́н эн ту пи́со?",
       "ru": "У меня в квартире есть балкон и много растений. А у тебя есть балкон?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, hay un balcón.",
       "ru": "Да, есть балкон."
      },
      {
       "es": "No, no hay balcón.",
       "ru": "Нет, балкона нет."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "=no hay",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Oh! 😞",
         "tr": "¡О!",
         "ru": "Ой!"
        }
       ],
       "ir": "piso_planta"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "=hay"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 🌿",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "piso_planta"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "piso_planta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Hay un balcón?",
      "tr": "¿Ай ун балко́н?",
      "ru": "Есть балкон?"
     }
    },
    {
     "id": "piso_planta",
     "titulo": "Этаж",
     "bot": [
      {
       "es": "Yo vivo en el tercero. ¿Y tú? ¿En qué piso vives?",
       "tr": "Йо би́бо эн эл тэрсэ́ро. ¿И ту? ¿Эн кэ пи́со би́бэс?",
       "ru": "Я живу на четвёртом этаже (tercero). А ты? На каком этаже ты живёшь?"
      }
     ],
     "ideas": [
      {
       "es": "Vivo en el primero.",
       "ru": "Я живу на втором этаже (primero)."
      },
      {
       "es": "Vivo en el segundo.",
       "ru": "Я живу на третьем этаже (segundo)."
      },
      {
       "es": "Vivo en la planta baja.",
       "ru": "Я живу на первом этаже."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет этаж",
       "claves": [
        "primer",
        "segundo",
        "tercer",
        "cuarto",
        "quinto",
        "baja"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "dato": "Этаж"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿En qué piso vives?",
      "tr": "¿Эн кэ пи́со би́бэс?",
      "ru": "На каком этаже ты живёшь?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u3-habitacion",
   "desde": 3,
   "titulo": "¿Qué hay en tu habitación?",
   "tituloRu": "Что есть в твоей комнате?",
   "resumen": "Hay: что есть в комнате и в квартире",
   "intro": "Лусия рассказывает, что есть в её комнате, и спрашивает о твоей.",
   "inicio": "hay",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hay",
     "titulo": "Что есть",
     "bot": [
      {
       "es": "En mi habitación hay una cama, una mesa y muchos libros. 📚",
       "tr": "Эн ми абитасьо́н ай у́на ка́ма, у́на мэ́са и му́чос ли́брос.",
       "ru": "В моей комнате есть кровать, стол и много книг."
      },
      {
       "es": "¿Qué hay en tu habitación?",
       "tr": "¿Кэ ай эн ту абитасьо́н?",
       "ru": "А что есть в твоей комнате?"
      }
     ],
     "ideas": [
      {
       "es": "Hay una cama y una mesa.",
       "ru": "Там кровать и стол."
      },
      {
       "es": "Hay un ordenador.",
       "ru": "Там компьютер."
      },
      {
       "es": "Hay muchos libros.",
       "ru": "Там много книг."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Компьютер",
       "claves": [
        "ordenador"
       ],
       "resp": [
        {
         "es": "¡Yo no tengo ordenador en mi habitación! Está en el salón. 💻",
         "tr": "¡Йо но тэ́нго ордэнадо́р эн ми абитасьо́н! Эста́ эн эл сало́н.",
         "ru": "А у меня в комнате компьютера нет! Он в гостиной."
        }
       ],
       "ir": "donde_ordenador"
      },
      {
       "etiqueta": "Называет вещи",
       "claves": [
        "hay",
        "cama",
        "mesa",
        "silla",
        "libro",
        "armario",
        "estanter"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 🙂",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "donde_ordenador",
       "dato": "В комнате"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 🙂",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "donde_ordenador",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hay en tu habitación?",
      "tr": "¿Кэ ай эн ту абитасьо́н?",
      "ru": "Что есть в твоей комнате?"
     }
    },
    {
     "id": "donde_ordenador",
     "titulo": "Где компьютер",
     "bot": [
      {
       "es": "Mi ordenador está en el salón, encima de la mesa. ¿Dónde está mi ordenador? 🤔",
       "tr": "Ми ордэнадо́р эста́ эн эл сало́н, энси́ма дэ ла мэ́са. ¿До́ндэ эста́ ми ордэнадо́р?",
       "ru": "Мой компьютер в гостиной, на столе. Где мой компьютер?"
      }
     ],
     "ideas": [
      {
       "es": "Está en el salón.",
       "ru": "Он в гостиной."
      },
      {
       "es": "Está encima de la mesa.",
       "ru": "Он на столе."
      },
      {
       "es": "Está en la cocina.",
       "ru": "Он на кухне."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "salon",
        "encima",
        "mesa"
       ],
       "resp": [
        {
         "es": "¡Sí! 👍",
         "tr": "¡Си!",
         "ru": "Да!"
        }
       ],
       "ir": "hay_esta"
      },
      {
       "etiqueta": "Кухня / другое",
       "claves": [
        "cocina",
        "baño",
        "habitacion"
       ],
       "resp": [
        {
         "es": "No, no. 😄 Está en el salón, encima de la mesa.",
         "tr": "Но, но. Эста́ эн эл сало́н, энси́ма дэ ла мэ́са.",
         "ru": "Нет-нет. Он в гостиной, на столе."
        }
       ],
       "ir": "hay_esta"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Está en el salón, encima de la mesa. 🙂",
         "tr": "Эста́ эн эл сало́н, энси́ма дэ ла мэ́са.",
         "ru": "Он в гостиной, на столе."
        }
       ],
       "ir": "hay_esta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde está mi ordenador?",
      "tr": "¿До́ндэ эста́ ми ордэнадо́р?",
      "ru": "Где мой компьютер?"
     }
    },
    {
     "id": "hay_esta",
     "titulo": "Hay или está",
     "bot": [
      {
       "es": "¿«Hay un libro en la mesa» o «está un libro en la mesa»? 🤔",
       "tr": "¿«Ай ун ли́бро эн ла мэ́са» о «эста́ ун ли́бро эн ла мэ́са»?",
       "ru": "Как правильно: «Hay un libro…» или «Está un libro…»?"
      }
     ],
     "ideas": [
      {
       "es": "Hay un libro en la mesa.",
       "ru": "Hay un libro en la mesa."
      },
      {
       "es": "Está un libro en la mesa.",
       "ru": "Está un libro en la mesa."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Hay",
       "claves": [
        "=hay"
       ],
       "resp": [
        {
         "es": "¡Sí! «Hay un libro». 👍 Pero «el libro está en la mesa».",
         "tr": "¡Си! «Ай ун ли́бро». Пэ́ро «эл ли́бро эста́ эн ла мэ́са».",
         "ru": "Да! «Hay un libro». Но «el libro está en la mesa»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Está",
       "claves": [
        "esta"
       ],
       "resp": [
        {
         "es": "Mmm… «Hay un libro en la mesa». Y «el libro está en la mesa». 😉",
         "tr": "Ммм… «Ай ун ли́бро эн ла мэ́са». И «эл ли́бро эста́ эн ла мэ́са».",
         "ru": "Хм… «Hay un libro en la mesa». И «el libro está en la mesa»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Hay un libro en la mesa». 😉",
         "tr": "«Ай ун ли́бро эн ла мэ́са».",
         "ru": "«Hay un libro en la mesa»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Hay o está?",
      "tr": "¿Ай о эста́?",
      "ru": "Hay или está?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u3-barrio",
   "desde": 3,
   "titulo": "Mi barrio",
   "tituloRu": "Мой район",
   "resumen": "Что есть в твоём районе: бар, парк, метро…",
   "intro": "Лусия живёт в Грасии. Она рассказывает о своём районе и спрашивает о твоём.",
   "inicio": "barrio",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "barrio",
     "titulo": "Район",
     "bot": [
      {
       "es": "Vivo en Gràcia, un barrio de Barcelona. Es muy bonito. 😍",
       "tr": "Би́бо эн Грàсья, ун ба́ррьо дэ Барсэло́на. Эс муй бони́то.",
       "ru": "Я живу в Грасии, это район Барселоны. Он очень красивый."
      },
      {
       "es": "¿Y tu barrio? ¿Cómo es?",
       "tr": "¿И ту ба́ррьо? ¿Ко́мо эс?",
       "ru": "А твой район? Какой он?"
      }
     ],
     "ideas": [
      {
       "es": "Mi barrio es tranquilo.",
       "ru": "Мой район тихий."
      },
      {
       "es": "Es grande y bonito.",
       "ru": "Он большой и красивый."
      },
      {
       "es": "Es feo.",
       "ru": "Он некрасивый."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Тихий",
       "claves": [
        "tranquilo"
       ],
       "resp": [
        {
         "es": "¡Qué bien! Gràcia también es tranquilo. 😊",
         "tr": "¡Кэ бьен! Грàсья тамбье́н эс транки́ло.",
         "ru": "Как здорово! Грасия тоже тихий район."
        }
       ],
       "ir": "que_hay",
       "dato": "Район"
      },
      {
       "etiqueta": "Некрасивый",
       "claves": [
        "feo",
        "=no es bonito"
       ],
       "resp": [
        {
         "es": "¿Feo? ¡Oh! 😅",
         "tr": "¿Фэ́о? ¡О!",
         "ru": "Некрасивый? Ой!"
        }
       ],
       "ir": "que_hay",
       "dato": "Район"
      },
      {
       "etiqueta": "Описывает",
       "claves": [
        "bonito",
        "grande",
        "pequeñ",
        "es"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "que_hay",
       "dato": "Район"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "que_hay",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Mi barrio es Gràcia. Es tranquilo y muy bonito. 😊",
       "tr": "Ми ба́ррьо эс Грàсья. Эс транки́ло и муй бони́то.",
       "ru": "Мой район — Грасия. Он тихий и очень красивый."
      }
     ],
     "aTiTema": "vivir_l",
     "retomar": {
      "es": "¿Cómo es tu barrio?",
      "tr": "¿Ко́мо эс ту ба́ррьо?",
      "ru": "Какой у тебя район?"
     }
    },
    {
     "id": "que_hay",
     "titulo": "Что есть в районе",
     "bot": [
      {
       "es": "En mi barrio hay muchos bares y una plaza muy bonita. ¿Qué hay en tu barrio?",
       "tr": "Эн ми ба́ррьо ай му́чос ба́рэс и у́на пла́са муй бони́та. ¿Кэ ай эн ту ба́ррьо?",
       "ru": "В моём районе много баров и очень красивая площадь. А что есть в твоём районе?"
      }
     ],
     "ideas": [
      {
       "es": "Hay un parque.",
       "ru": "Есть парк."
      },
      {
       "es": "Hay un supermercado y una farmacia.",
       "ru": "Есть супермаркет и аптека."
      },
      {
       "es": "Hay una parada de metro.",
       "ru": "Есть станция метро."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Парк",
       "claves": [
        "parque"
       ],
       "resp": [
        {
         "es": "¡Qué bien! En Gràcia no hay un parque grande. 😅",
         "tr": "¡Кэ бьен! Эн Грàсья но ай ун па́ркэ гра́ндэ.",
         "ru": "Здорово! А в Грасии нет большого парка."
        }
       ],
       "ir": "cerca",
       "dato": "В районе"
      },
      {
       "etiqueta": "Называет места",
       "claves": [
        "hay",
        "bar",
        "super",
        "farmacia",
        "metro",
        "banco",
        "tienda",
        "escuela",
        "colegio",
        "hospital",
        "plaza"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "cerca",
       "dato": "В районе"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "cerca",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hay en tu barrio?",
      "tr": "¿Кэ ай эн ту ба́ррьо?",
      "ru": "Что есть в твоём районе?"
     }
    },
    {
     "id": "cerca",
     "titulo": "Близко или далеко",
     "bot": [
      {
       "es": "¿El metro está cerca o lejos de tu casa? 🚇",
       "tr": "¿Эл мэ́тро эста́ сэ́рка о лэ́хос дэ ту ка́са?",
       "ru": "Метро близко или далеко от твоего дома?"
      }
     ],
     "ideas": [
      {
       "es": "Está cerca.",
       "ru": "Близко."
      },
      {
       "es": "Está lejos.",
       "ru": "Далеко."
      },
      {
       "es": "No hay metro.",
       "ru": "Метро нет."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет метро",
       "claves": [
        "=no hay"
       ],
       "resp": [
        {
         "es": "¿No hay metro? ¡Uf! 😮",
         "tr": "¿Но ай мэ́тро? ¡Уф!",
         "ru": "Метро нет? Ох!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Близко",
       "claves": [
        "cerca"
       ],
       "resp": [
        {
         "es": "¡Muy bien! Mi parada también está muy cerca. 🚇",
         "tr": "¡Муй бьен! Ми пара́да тамбье́н эста́ муй сэ́рка.",
         "ru": "Отлично! Моя станция тоже совсем рядом."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Далеко",
       "claves": [
        "lejos"
       ],
       "resp": [
        {
         "es": "¡Oh! 😅",
         "tr": "¡О!",
         "ru": "Ой!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cerca o lejos?",
      "tr": "¿Сэ́рка о лэ́хос?",
      "ru": "Близко или далеко?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u3-donde",
   "desde": 3,
   "titulo": "¿Dónde está?",
   "tituloRu": "Где это?",
   "resumen": "Игра: помочь Лусии найти её вещи",
   "intro": "Лусия не может найти свои вещи. Помоги ей: посмотри на подсказки и скажи, где они.",
   "inicio": "llaves",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "llaves",
     "titulo": "Ключи",
     "bot": [
      {
       "es": "¡Ay! ¿Dónde están mis llaves? 🔑",
       "tr": "¡Ай! ¿До́ндэ эста́н мис я́бэс?",
       "ru": "Ой! Где мои ключи?"
      },
      {
       "es": "Mmm… La mesa, la cama, la mochila… 🤔 ¡Ah! ¡Están encima de la mesa! 😄",
       "tr": "Ммм… Ла мэ́са, ла ка́ма, ла мочи́ла… ¡А! ¡Эста́н энси́ма дэ ла мэ́са!",
       "ru": ""
      },
      {
       "es": "Ahora tú: ¿dónde están mis llaves?",
       "tr": "Ао́ра ту: ¿до́ндэ эста́н мис я́бэс?",
       "ru": "Теперь ты: где мои ключи?"
      }
     ],
     "ideas": [
      {
       "es": "Están encima de la mesa.",
       "ru": "Они на столе."
      },
      {
       "es": "Están en la mochila.",
       "ru": "Они в рюкзаке."
      },
      {
       "es": "Están debajo de la cama.",
       "ru": "Они под кроватью."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "encima",
        "mesa"
       ],
       "resp": [
        {
         "es": "¡Sí! 👍",
         "tr": "¡Си!",
         "ru": "Да!"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Неправильно",
       "claves": [
        "mochila",
        "debajo",
        "cama"
       ],
       "resp": [
        {
         "es": "No, no. 😄 ¡Están encima de la mesa!",
         "tr": "Но, но. ¡Эста́н энси́ма дэ ла мэ́са!",
         "ru": "Нет-нет. Они на столе!"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Están encima de la mesa! 😄",
         "tr": "¡Эста́н энси́ма дэ ла мэ́са!",
         "ru": "Они на столе!"
        }
       ],
       "ir": "movil",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde están mis llaves?",
      "tr": "¿До́ндэ эста́н мис я́бэс?",
      "ru": "Где мои ключи?"
     }
    },
    {
     "id": "movil",
     "titulo": "Телефон",
     "bot": [
      {
       "es": "Y mi móvil… 📱 No está en la mesa. No está en la cocina. ¡Está en la mochila! ¿Dónde está mi móvil?",
       "tr": "И ми мо́бил… Но эста́ эн ла мэ́са. Но эста́ эн ла коси́на. ¡Эста́ эн ла мочи́ла! ¿До́ндэ эста́ ми мо́бил?",
       "ru": "А мой телефон… Не на столе. Не на кухне. Он в рюкзаке! Где мой телефон?"
      }
     ],
     "ideas": [
      {
       "es": "Está en la mochila.",
       "ru": "Он в рюкзаке."
      },
      {
       "es": "Está en la cocina.",
       "ru": "Он на кухне."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "mochila"
       ],
       "resp": [
        {
         "es": "¡Sí! 👍",
         "tr": "¡Си!",
         "ru": "Да!"
        }
       ],
       "ir": "gafas"
      },
      {
       "etiqueta": "Неправильно",
       "claves": [
        "cocina",
        "mesa"
       ],
       "resp": [
        {
         "es": "No, no está en la cocina. ¡Está en la mochila! 😄",
         "tr": "Но, но эста́ эн ла коси́на. ¡Эста́ эн ла мочи́ла!",
         "ru": "Нет, он не на кухне. Он в рюкзаке!"
        }
       ],
       "ir": "gafas"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Está en la mochila! 😄",
         "tr": "¡Эста́ эн ла мочи́ла!",
         "ru": "Он в рюкзаке!"
        }
       ],
       "ir": "gafas",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde está mi móvil?",
      "tr": "¿До́ндэ эста́ ми мо́бил?",
      "ru": "Где мой телефон?"
     }
    },
    {
     "id": "gafas",
     "titulo": "Очки",
     "bot": [
      {
       "es": "¿Y mis gafas? 👓 Mmm… No sé. ¿Dónde están tus gafas? 😄",
       "tr": "¿И мис га́фас? Ммм… Но сэ. ¿До́ндэ эста́н тус га́фас?",
       "ru": "А мои очки? Хм… Не знаю. А где твои очки?"
      }
     ],
     "ideas": [
      {
       "es": "Mis gafas están en la mesa.",
       "ru": "Мои очки на столе."
      },
      {
       "es": "No tengo gafas.",
       "ru": "У меня нет очков."
      },
      {
       "es": "Están en la mochila.",
       "ru": "Они в рюкзаке."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет очков",
       "claves": [
        "=no tengo"
       ],
       "resp": [
        {
         "es": "¿No tienes gafas? ¡Qué bien! 😄",
         "tr": "¿Но тье́нэс га́фас? ¡Кэ бьен!",
         "ru": "У тебя нет очков? Повезло!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Говорит, где",
       "claves": [
        "estan",
        "encima",
        "debajo",
        "en la",
        "en el",
        "al lado"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂 ¡Ah! ¡Mis gafas están aquí! 😂",
         "tr": "¡Ба́лэ! ¡А! ¡Мис га́фас эста́н аки́!",
         "ru": "Понятно! А! Вот же мои очки!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Ah! ¡Mis gafas están aquí! 😂",
         "tr": "¡А! ¡Мис га́фас эста́н аки́!",
         "ru": "А! Вот же мои очки!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde están tus gafas?",
      "tr": "¿До́ндэ эста́н тус га́фас?",
      "ru": "Где твои очки?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "titulo": "Colores y cosas",
   "tituloRu": "Цвета и вещи",
   "resumen": "Какого цвета твои вещи",
   "intro": "Лусия любит цвета. Она спрашивает, какого цвета твои вещи.",
   "inicio": "mochila",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "mochila",
     "titulo": "Рюкзак",
     "bot": [
      {
       "es": "Mi mochila es roja. 🎒",
       "tr": "Ми мочи́ла эс ро́ха.",
       "ru": "Мой рюкзак красный."
      },
      {
       "es": "¿De qué color es tu mochila?",
       "tr": "¿Дэ кэ коло́р эс ту мочи́ла?",
       "ru": "Какого цвета твой рюкзак?"
      }
     ],
     "ideas": [
      {
       "es": "Es negra.",
       "ru": "Он чёрный."
      },
      {
       "es": "Es azul.",
       "ru": "Он синий."
      },
      {
       "es": "Es roja.",
       "ru": "Он красный."
      },
      {
       "es": "No tengo mochila.",
       "ru": "У меня нет рюкзака."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет рюкзака",
       "claves": [
        "=no tengo"
       ],
       "resp": [
        {
         "es": "¿No tienes mochila? ¡Vale! 😄",
         "tr": "¿Но тье́нэс мочи́ла? ¡Ба́лэ!",
         "ru": "Нет рюкзака? Ладно!"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Красный",
       "claves": [
        "=roja",
        "=rojo"
       ],
       "resp": [
        {
         "es": "¿Roja? ¡Mi mochila también es roja! 😄",
         "tr": "¿Ро́ха? ¡Ми мочи́ла тамбье́н эс ро́ха!",
         "ru": "Красный? Мой тоже красный!"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Цвет (м. р. — ошибка)",
       "claves": [
        "=negro",
        "=blanco",
        "=amarillo",
        "=morado"
       ],
       "resp": [
        {
         "es": "😉 «La mochila»: es negra, blanca, amarilla…",
         "tr": "«Ла мочи́ла»: эс нэ́гра, бла́нка, амари́я…",
         "ru": "«La mochila» — женского рода: negra, blanca, amarilla…"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Называет цвет",
       "claves": [
        "negra",
        "blanca",
        "azul",
        "verde",
        "amarilla",
        "gris",
        "marron",
        "rosa",
        "naranja",
        "morada"
       ],
       "resp": [
        {
         "es": "¡Muy bonito! 😊",
         "tr": "¡Муй бони́то!",
         "ru": "Очень красиво!"
        }
       ],
       "ir": "movil"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bonito! 😊",
         "tr": "¡Муй бони́то!",
         "ru": "Очень красиво!"
        }
       ],
       "ir": "movil",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿De qué color es tu mochila?",
      "tr": "¿Дэ кэ коло́р эс ту мочи́ла?",
      "ru": "Какого цвета твой рюкзак?"
     }
    },
    {
     "id": "movil",
     "titulo": "Телефон",
     "bot": [
      {
       "es": "¿Y tu móvil? ¿De qué color es? 📱",
       "tr": "¿И ту мо́бил? ¿Дэ кэ коло́р эс?",
       "ru": "А твой телефон? Какого он цвета?"
      }
     ],
     "ideas": [
      {
       "es": "Es negro.",
       "ru": "Он чёрный."
      },
      {
       "es": "Es blanco.",
       "ru": "Он белый."
      },
      {
       "es": "Es azul.",
       "ru": "Он синий."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Цвет (ж. р. — ошибка)",
       "claves": [
        "=negra",
        "=blanca",
        "=roja",
        "=amarilla"
       ],
       "resp": [
        {
         "es": "😉 «El móvil»: es negro, blanco, rojo…",
         "tr": "«Эл мо́бил»: эс нэ́гро, бла́нко, ро́хо…",
         "ru": "«El móvil» — мужского рода: negro, blanco, rojo…"
        }
       ],
       "ir": "favorito"
      },
      {
       "etiqueta": "Называет цвет",
       "claves": [
        "negro",
        "blanco",
        "azul",
        "verde",
        "rojo",
        "gris",
        "amarillo",
        "rosa",
        "marron",
        "naranja"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂 Mi móvil es blanco.",
         "tr": "¡Ба́лэ! Ми мо́бил эс бла́нко.",
         "ru": "Понятно! Мой телефон белый."
        }
       ],
       "ir": "favorito"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mi móvil es blanco. 🙂",
         "tr": "Ми мо́бил эс бла́нко.",
         "ru": "Мой телефон белый."
        }
       ],
       "ir": "favorito",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿De qué color es tu móvil?",
      "tr": "¿Дэ кэ коло́р эс ту мо́бил?",
      "ru": "Какого цвета твой телефон?"
     }
    },
    {
     "id": "favorito",
     "titulo": "Цвет Барселоны",
     "bot": [
      {
       "es": "Y el mar de Barcelona… ¿de qué color es? 🌊",
       "tr": "И эл мар дэ Барсэло́на… ¿дэ кэ коло́р эс?",
       "ru": "А море в Барселоне… какого оно цвета?"
      }
     ],
     "ideas": [
      {
       "es": "Es azul.",
       "ru": "Синее."
      },
      {
       "es": "Es verde.",
       "ru": "Зелёное."
      },
      {
       "es": "Es gris.",
       "ru": "Серое."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Синее",
       "claves": [
        "azul"
       ],
       "resp": [
        {
         "es": "¡Sí! ¡Muy azul y muy bonito! 😍",
         "tr": "¡Си! ¡Муй асу́л и муй бони́то!",
         "ru": "Да! Очень синее и очень красивое!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Серое / зелёное",
       "claves": [
        "gris",
        "verde"
       ],
       "resp": [
        {
         "es": "¿Gris? ¡No, no! ¡Es azul! 😄",
         "tr": "¿Грис? ¡Но, но! ¡Эс асу́л!",
         "ru": "Серое? Нет-нет! Оно синее!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Es azul! 😍",
         "tr": "¡Эс асу́л!",
         "ru": "Оно синее!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿De qué color es el mar?",
      "tr": "¿Дэ кэ коло́р эс эл мар?",
      "ru": "Какого цвета море?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u3-como",
   "desde": 3,
   "titulo": "¿Cómo es? ¿Cómo está?",
   "tituloRu": "Какой он? Как он себя чувствует?",
   "resumen": "Ser и estar: характер и состояние",
   "intro": "Лусия рассказывает о своих друзьях: какие они и как они сегодня. Ser — какой человек, estar — как он сейчас.",
   "inicio": "ana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ana",
     "titulo": "Какая Аня",
     "bot": [
      {
       "es": "Mi amiga Ana es muy simpática. 😊",
       "tr": "Ми ами́га А́на эс муй симпа́тика.",
       "ru": "Моя подруга Аня очень милая."
      },
      {
       "es": "¿Y tú? ¿Cómo eres?",
       "tr": "¿И ту? ¿Ко́мо э́рэс?",
       "ru": "А ты? Какой (какая) ты?"
      }
     ],
     "ideas": [
      {
       "es": "Soy simpático.",
       "ru": "Я милый."
      },
      {
       "es": "Soy simpática.",
       "ru": "Я милая."
      },
      {
       "es": "Soy tranquila.",
       "ru": "Я спокойная."
      },
      {
       "es": "Soy alto.",
       "ru": "Я высокий."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Описывает себя",
       "claves": [
        "soy",
        "simpatic",
        "tranquil",
        "alt",
        "baj",
        "rubi",
        "moren",
        "inteligente",
        "divertid",
        "timid",
        "nervios"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 😊",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "hoy",
       "dato": "Характер"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 😊",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "hoy",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Soy simpática y un poco nerviosa. 😄",
       "tr": "Сой симпа́тика и ун по́ко нэрбьо́са.",
       "ru": "Я милая и немного нервная."
      }
     ],
     "retomar": {
      "es": "¿Cómo eres?",
      "tr": "¿Ко́мо э́рэс?",
      "ru": "Какой (какая) ты?"
     }
    },
    {
     "id": "hoy",
     "titulo": "Как ты сегодня",
     "bot": [
      {
       "es": "Y hoy, ¿cómo estás?",
       "tr": "И ой, ¿ко́мо эста́с?",
       "ru": "А сегодня как ты?"
      }
     ],
     "ideas": [
      {
       "es": "Estoy bien.",
       "ru": "Хорошо."
      },
      {
       "es": "Estoy cansado.",
       "ru": "Я устал."
      },
      {
       "es": "Estoy cansada.",
       "ru": "Я устала."
      },
      {
       "es": "Estoy contenta.",
       "ru": "Я довольна."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Устал(а)",
       "claves": [
        "cansad"
       ],
       "resp": [
        {
         "es": "¿{Cansado/Cansada}? ¡Yo también! 😴",
         "tr": "¿{Канса́до/Канса́да}? ¡Йо тамбье́н!",
         "ru": "Устал(а)? Я тоже!"
        }
       ],
       "ir": "ser_estar"
      },
      {
       "etiqueta": "Хорошо / доволен",
       "claves": [
        "bien",
        "content",
        "genial"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "ser_estar"
      },
      {
       "etiqueta": "Плохо",
       "claves": [
        "mal",
        "triste",
        "enferm"
       ],
       "resp": [
        {
         "es": "¡Oh! 😞",
         "tr": "¡О!",
         "ru": "Ой!"
        }
       ],
       "ir": "ser_estar"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "ser_estar",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo estás hoy?",
      "tr": "¿Ко́мо эста́с ой?",
      "ru": "Как ты сегодня?"
     }
    },
    {
     "id": "ser_estar",
     "titulo": "Ser или estar",
     "bot": [
      {
       "es": "Pablo, mi hermano, está en Madrid. Hoy… ¿«Pablo es cansado» o «Pablo está cansado»? 🤔",
       "tr": "Па́бло, ми эрма́но, эста́ эн Мадри́д. Ой… ¿«Па́бло эс канса́до» о «Па́бло эста́ канса́до»?",
       "ru": "Мой брат Пабло в Мадриде. Сегодня… «Pablo es cansado» или «Pablo está cansado»?"
      }
     ],
     "ideas": [
      {
       "es": "Pablo está cansado.",
       "ru": "Pablo está cansado."
      },
      {
       "es": "Pablo es cansado.",
       "ru": "Pablo es cansado."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Está",
       "claves": [
        "esta"
       ],
       "resp": [
        {
         "es": "¡Sí! Hoy está cansado: es un estado. 👍",
         "tr": "¡Си! Ой эста́ канса́до: эс ун эста́до.",
         "ru": "Да! Сегодня он устал: это состояние."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Es",
       "claves": [
        "=es"
       ],
       "resp": [
        {
         "es": "Mmm… «Está cansado»: es hoy, es un estado. 😉",
         "tr": "Ммм… «Эста́ канса́до»: эс ой, эс ун эста́до.",
         "ru": "Хм… «Está cansado»: это сегодня, это состояние."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Pablo está cansado». 😉",
         "tr": "«Па́бло эста́ канса́до».",
         "ru": "«Pablo está cansado»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Es o está?",
      "tr": "¿Эс о эста́?",
      "ru": "Es или está?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-dia",
   "desde": 4,
   "titulo": "Un día normal",
   "tituloRu": "Обычный день",
   "resumen": "Рассказать, как проходит твой день",
   "intro": "Лусия рассказывает, как проходит её обычный день, и спрашивает о твоём.",
   "inicio": "levantas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "levantas",
     "titulo": "Встаёшь",
     "bot": [
      {
       "es": "Yo me levanto a las ocho. ☀️",
       "tr": "Йо мэ лэба́нто а лас о́чо.",
       "ru": "Я встаю в восемь."
      },
      {
       "es": "¿Y tú? ¿A qué hora te levantas?",
       "tr": "¿И ту? ¿А кэ о́ра тэ лэба́нтас?",
       "ru": "А ты? Во сколько ты встаёшь?"
      }
     ],
     "ideas": [
      {
       "es": "Me levanto a las siete.",
       "ru": "Я встаю в семь."
      },
      {
       "es": "Me levanto a las seis y media.",
       "ru": "Я встаю в половине седьмого."
      },
      {
       "es": "Me levanto tarde.",
       "ru": "Я встаю поздно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Поздно",
       "claves": [
        "tarde",
        "diez",
        "once",
        "doce"
       ],
       "resp": [
        {
         "es": "¿Tarde? ¡Qué bien! 😴",
         "tr": "¿Та́рдэ? ¡Кэ бьен!",
         "ru": "Поздно? Везёт!"
        }
       ],
       "ir": "desayuno",
       "dato": "Встаёт"
      },
      {
       "etiqueta": "Рано",
       "claves": [
        "cinco",
        "seis",
        "siete",
        "temprano"
       ],
       "resp": [
        {
         "es": "¡Qué temprano! 😮",
         "tr": "¡Кэ тэмпра́но!",
         "ru": "Как рано!"
        }
       ],
       "ir": "desayuno",
       "dato": "Встаёт"
      },
      {
       "etiqueta": "Называет время",
       "claves": [
        "levanto",
        "=a las",
        "ocho",
        "nueve"
       ],
       "resp": [
        {
         "es": "¡Como yo! 😄",
         "tr": "¡Ко́мо йо!",
         "ru": "Как я!"
        }
       ],
       "ir": "desayuno",
       "dato": "Встаёт"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "desayuno",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Me levanto a las ocho. 🙂",
       "tr": "Мэ лэба́нто а лас о́чо.",
       "ru": "Я встаю в восемь."
      }
     ],
     "aTiTema": "dia_l",
     "retomar": {
      "es": "¿A qué hora te levantas?",
      "tr": "¿А кэ о́ра тэ лэба́нтас?",
      "ru": "Во сколько ты встаёшь?"
     }
    },
    {
     "id": "desayuno",
     "titulo": "Завтрак",
     "bot": [
      {
       "es": "Desayuno un café y pan. ☕ ¿Qué desayunas tú?",
       "tr": "Дэсаю́но ун кафэ́ и пан. ¿Кэ дэсаю́нас ту?",
       "ru": "Я завтракаю кофе с хлебом. А ты что ешь на завтрак?"
      }
     ],
     "ideas": [
      {
       "es": "Desayuno un café.",
       "ru": "Я пью кофе."
      },
      {
       "es": "Desayuno té y pan.",
       "ru": "Я пью чай и ем хлеб."
      },
      {
       "es": "No desayuno.",
       "ru": "Я не завтракаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не завтракает",
       "claves": [
        "=no desayuno"
       ],
       "resp": [
        {
         "es": "¿No desayunas? ¡Uf! 😮",
         "tr": "¿Но дэсаю́нас? ¡Уф!",
         "ru": "Не завтракаешь? Ох!"
        }
       ],
       "ir": "trabajo",
       "dato": "Завтрак",
       "datoValor": "nada"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "desayuno",
        "cafe",
        "te",
        "pan",
        "leche",
        "fruta",
        "huevo"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 😋",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "trabajo",
       "dato": "Завтрак"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 😋",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "trabajo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué desayunas?",
      "tr": "¿Кэ дэсаю́нас?",
      "ru": "Что ты ешь на завтрак?"
     }
    },
    {
     "id": "trabajo",
     "titulo": "Работа / учёба",
     "bot": [
      {
       "es": "Yo trabajo por la tarde, de cuatro a nueve. ¿Trabajas o estudias?",
       "tr": "Йо траба́хо пор ла та́рдэ, дэ куа́тро а нуэ́бэ. ¿Траба́хас о эсту́дьяс?",
       "ru": "Я работаю во второй половине дня, с четырёх до девяти. Ты работаешь или учишься?"
      }
     ],
     "ideas": [
      {
       "es": "Trabajo.",
       "ru": "Я работаю."
      },
      {
       "es": "Estudio.",
       "ru": "Я учусь."
      },
      {
       "es": "Trabajo y estudio.",
       "ru": "Я работаю и учусь."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Работает и учится",
       "claves": [
        "trabajo estudio"
       ],
       "resp": [
        {
         "es": "¡Uf! ¡Mucho trabajo! 💪",
         "tr": "¡Уф! ¡Му́чо траба́хо!",
         "ru": "Ох! Много дел!"
        }
       ],
       "ir": "noche"
      },
      {
       "etiqueta": "Учится",
       "claves": [
        "estudio"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 📚",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "noche"
      },
      {
       "etiqueta": "Работает",
       "claves": [
        "trabajo"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 💼",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "noche"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "noche",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Trabajas o estudias?",
      "tr": "¿Траба́хас о эсту́дьяс?",
      "ru": "Ты работаешь или учишься?"
     }
    },
    {
     "id": "noche",
     "titulo": "Вечер",
     "bot": [
      {
       "es": "Ceno a las diez y me acuesto a las doce. ¿A qué hora te acuestas? 🌙",
       "tr": "Сэ́но а лас дьес и мэ акуэ́сто а лас до́сэ. ¿А кэ о́ра тэ акуэ́стас?",
       "ru": "Я ужинаю в десять и ложусь в двенадцать. А ты во сколько ложишься?"
      }
     ],
     "ideas": [
      {
       "es": "Me acuesto a las once.",
       "ru": "Я ложусь в одиннадцать."
      },
      {
       "es": "Me acuesto a las doce.",
       "ru": "Я ложусь в двенадцать."
      },
      {
       "es": "Me acuesto muy tarde.",
       "ru": "Я ложусь очень поздно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "acuesto",
        "=a las",
        "tarde",
        "once",
        "doce",
        "diez"
       ],
       "resp": [
        {
         "es": "¡Vale! ¡Buenas noches! 😴",
         "tr": "¡Ба́лэ! ¡Буэ́нас но́чэс!",
         "ru": "Понятно! Спокойной ночи!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buenas noches! 😴",
         "tr": "¡Буэ́нас но́чэс!",
         "ru": "Спокойной ночи!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué hora te acuestas?",
      "tr": "¿А кэ о́ра тэ акуэ́стас?",
      "ru": "Во сколько ты ложишься?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-hora",
   "desde": 4,
   "titulo": "¿Qué hora es?",
   "tituloRu": "Который час?",
   "resumen": "Время: es la una, son las dos…",
   "intro": "Лусия всегда опаздывает. Помоги ей со временем!",
   "inicio": "hora",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hora",
     "titulo": "Который час",
     "bot": [
      {
       "es": "¡Ay! No tengo reloj. 😅",
       "tr": "¡Ай! Но тэ́нго рэло́х.",
       "ru": "Ой! У меня нет часов."
      },
      {
       "es": "Son las cuatro. ¿Qué hora es? 🕓",
       "tr": "Сон лас куа́тро. ¿Кэ о́ра эс?",
       "ru": "Сейчас четыре. Который час?"
      }
     ],
     "ideas": [
      {
       "es": "Son las cuatro.",
       "ru": "Четыре часа."
      },
      {
       "es": "Es la cuatro.",
       "ru": "Es la cuatro."
      },
      {
       "es": "Son las cinco.",
       "ru": "Пять часов."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Son las cuatro",
       "claves": [
        "=son las cuatro"
       ],
       "resp": [
        {
         "es": "¡Sí! ¡Son las cuatro! 👍",
         "tr": "¡Си! ¡Сон лас куа́тро!",
         "ru": "Да! Четыре часа!"
        }
       ],
       "ir": "clase"
      },
      {
       "etiqueta": "Es la… (ошибка)",
       "claves": [
        "=es la cuatro",
        "=es las"
       ],
       "resp": [
        {
         "es": "😉 «Es la una», pero «son las dos», «son las cuatro».",
         "tr": "«Эс ла у́на», пэ́ро «сон лас дос», «сон лас куа́тро».",
         "ru": "«Es la una», но «son las dos», «son las cuatro»."
        }
       ],
       "ir": "clase"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Son las cuatro. 🙂",
         "tr": "Сон лас куа́тро.",
         "ru": "Четыре часа."
        }
       ],
       "ir": "clase",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hora es?",
      "tr": "¿Кэ о́ра эс?",
      "ru": "Который час?"
     }
    },
    {
     "id": "clase",
     "titulo": "Во сколько урок",
     "bot": [
      {
       "es": "Mi clase empieza a las cuatro y media. ¿A qué hora empieza mi clase? 🤔",
       "tr": "Ми кла́сэ эмпье́са а лас куа́тро и мэ́дья. ¿А кэ о́ра эмпье́са ми кла́сэ?",
       "ru": "Мой урок начинается в половине пятого. Во сколько начинается мой урок?"
      }
     ],
     "ideas": [
      {
       "es": "A las cuatro y media.",
       "ru": "В половине пятого."
      },
      {
       "es": "A las cuatro.",
       "ru": "В четыре."
      },
      {
       "es": "A las cinco.",
       "ru": "В пять."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "=y media"
       ],
       "resp": [
        {
         "es": "¡Sí! ¡Tengo media hora! 🏃‍♀️",
         "tr": "¡Си! ¡Тэ́нго мэ́дья о́ра!",
         "ru": "Да! У меня полчаса!"
        }
       ],
       "ir": "una"
      },
      {
       "etiqueta": "Неправильно",
       "claves": [
        "cuatro",
        "cinco"
       ],
       "resp": [
        {
         "es": "No, no: a las cuatro y media. 😄",
         "tr": "Но, но: а лас куа́тро и мэ́дья.",
         "ru": "Нет-нет: в половине пятого."
        }
       ],
       "ir": "una"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "A las cuatro y media. 🙂",
         "tr": "А лас куа́тро и мэ́дья.",
         "ru": "В половине пятого."
        }
       ],
       "ir": "una",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué hora empieza mi clase?",
      "tr": "¿А кэ о́ра эмпье́са ми кла́сэ?",
      "ru": "Во сколько урок?"
     }
    },
    {
     "id": "una",
     "titulo": "Час дня",
     "bot": [
      {
       "es": "Y tú, ¿a qué hora comes? 🍽️ En España comemos a las dos.",
       "tr": "И ту, ¿а кэ о́ра ко́мэс? Эн Эспа́ня комэ́мос а лас дос.",
       "ru": "А ты во сколько обедаешь? В Испании обедают в два."
      }
     ],
     "ideas": [
      {
       "es": "Como a la una.",
       "ru": "Я обедаю в час."
      },
      {
       "es": "Como a las dos.",
       "ru": "Я обедаю в два."
      },
      {
       "es": "Como a las doce.",
       "ru": "Я обедаю в двенадцать."
      }
     ],
     "ramas": [
      {
       "etiqueta": "В час",
       "claves": [
        "=la una"
       ],
       "resp": [
        {
         "es": "¿A la una? En España comemos a las dos o a las tres. 😄",
         "tr": "¿А ла у́на? Эн Эспа́ня комэ́мос а лас дос о а лас трэс.",
         "ru": "В час? В Испании обедают в два или в три."
        }
       ],
       "ir": "fin",
       "dato": "Обед"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "como",
        "=a las",
        "dos",
        "tres",
        "doce"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "dato": "Обед"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué hora comes?",
      "tr": "¿А кэ о́ра ко́мэс?",
      "ru": "Во сколько ты обедаешь?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Me voy a clase! ¡Adiós, {nombre}! 🏃‍♀️",
       "tr": "¡Мэ бой а кла́сэ! ¡Адьо́с, {nombre}!",
       "ru": "Бегу на урок! Пока, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-finde",
   "desde": 4,
   "titulo": "El fin de semana",
   "tituloRu": "Выходные",
   "resumen": "Что ты делаешь в выходные?",
   "intro": "Сегодня пятница! Лусия рассказывает о своих выходных.",
   "inicio": "sabado",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "sabado",
     "titulo": "Суббота",
     "bot": [
      {
       "es": "¡Hoy es viernes! 🎉",
       "tr": "¡Ой эс бье́рнэс!",
       "ru": "Сегодня пятница!"
      },
      {
       "es": "Los sábados Ana y yo desayunamos en un bar. ¿Qué haces tú los sábados?",
       "tr": "Лос са́бадос А́на и йо дэсаюна́мос эн ун бар. ¿Кэ а́сэс ту лос са́бадос?",
       "ru": "По субботам мы с Аней завтракаем в баре. А ты что делаешь по субботам?"
      }
     ],
     "ideas": [
      {
       "es": "Duermo mucho.",
       "ru": "Я долго сплю."
      },
      {
       "es": "Juego al fútbol.",
       "ru": "Я играю в футбол."
      },
      {
       "es": "Trabajo.",
       "ru": "Я работаю."
      },
      {
       "es": "Leo mucho.",
       "ru": "Я много читаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Работает",
       "claves": [
        "=trabajo"
       ],
       "resp": [
        {
         "es": "¿Trabajas los sábados? ¡Uf! 😮",
         "tr": "¿Траба́хас лос са́бадос? ¡Уф!",
         "ru": "Ты работаешь по субботам? Ох!"
        }
       ],
       "ir": "domingo",
       "dato": "Суббота"
      },
      {
       "etiqueta": "Спит",
       "claves": [
        "duermo"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😴",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "domingo",
       "dato": "Суббота"
      },
      {
       "etiqueta": "Рассказывает",
       "claves": [
        "juego",
        "voy",
        "salgo",
        "leo",
        "veo",
        "camino",
        "como",
        "ceno",
        "estudio",
        "limpio"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "domingo",
       "dato": "Суббота"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "domingo",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Los sábados Ana y yo desayunamos en un bar de la plaza. 😊",
       "tr": "Лос са́бадос А́на и йо дэсаюна́мос эн ун бар дэ ла пла́са.",
       "ru": "По субботам мы с Аней завтракаем в баре на площади."
      }
     ],
     "aTiTema": "finde_l",
     "retomar": {
      "es": "¿Qué haces los sábados?",
      "tr": "¿Кэ а́сэс лос са́бадос?",
      "ru": "Что ты делаешь по субботам?"
     }
    },
    {
     "id": "domingo",
     "titulo": "Воскресенье",
     "bot": [
      {
       "es": "Los domingos llamo a mis padres. ¿Y tú? ¿Qué haces los domingos?",
       "tr": "Лос доми́нгос я́мо а мис па́дрэс. ¿И ту? ¿Кэ а́сэс лос доми́нгос?",
       "ru": "По воскресеньям я звоню родителям. А ты? Что ты делаешь по воскресеньям?"
      }
     ],
     "ideas": [
      {
       "es": "Descanso.",
       "ru": "Отдыхаю."
      },
      {
       "es": "Como en casa de mis padres.",
       "ru": "Обедаю у родителей."
      },
      {
       "es": "Veo una película.",
       "ru": "Смотрю фильм."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отдыхает",
       "claves": [
        "descanso",
        "=nada"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 😌",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "playa",
       "dato": "Воскресенье"
      },
      {
       "etiqueta": "Рассказывает",
       "claves": [
        "como",
        "veo",
        "leo",
        "voy",
        "salgo",
        "juego",
        "llamo",
        "camino"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "playa",
       "dato": "Воскресенье"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "playa",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué haces los domingos?",
      "tr": "¿Кэ а́сэс лос доми́нгос?",
      "ru": "Что ты делаешь по воскресеньям?"
     }
    },
    {
     "id": "playa",
     "titulo": "Пляж",
     "bot": [
      {
       "es": "A veces voy a la playa. 🏖️ ¿Te gusta la playa?",
       "tr": "А бэ́сэс бой а ла пла́я. ¿Тэ гу́ста ла пла́я?",
       "ru": "Иногда я хожу на пляж. Тебе нравится пляж?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me gusta mucho.",
       "ru": "Да, очень нравится."
      },
      {
       "es": "No, no me gusta.",
       "ru": "Нет, не нравится."
      },
      {
       "es": "Me encanta.",
       "ru": "Обожаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "=no me gusta",
        "=no"
       ],
       "resp": [
        {
         "es": "¿No? ¿Y la montaña? ⛰️",
         "tr": "¿Но? ¿И ла монта́ня?",
         "ru": "Нет? А горы?"
        }
       ],
       "ir": "fin",
       "dato": "Пляж",
       "datoValor": "no"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "gusta",
        "encanta",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😍",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin",
       "dato": "Пляж",
       "datoValor": "sí"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te gusta la playa?",
      "tr": "¿Тэ гу́ста ла пла́я?",
      "ru": "Тебе нравится пляж?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Buen fin de semana, {nombre}! 👋",
       "tr": "¡Буэн фин дэ сэма́на, {nombre}!",
       "ru": "Хороших выходных, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-gustos",
   "desde": 4,
   "titulo": "Me gusta…",
   "tituloRu": "Мне нравится…",
   "resumen": "Me gusta, me encanta: что тебе нравится",
   "intro": "Лусия рассказывает, что ей нравится, и спрашивает о тебе. Помни: «me gusta», а не «yo gusto».",
   "inicio": "musica",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "musica",
     "titulo": "Музыка",
     "bot": [
      {
       "es": "Me encanta la música. 🎶",
       "tr": "Мэ энка́нта ла му́сика.",
       "ru": "Обожаю музыку."
      },
      {
       "es": "¿Te gusta la música?",
       "tr": "¿Тэ гу́ста ла му́сика?",
       "ru": "Тебе нравится музыка?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me gusta mucho.",
       "ru": "Да, очень нравится."
      },
      {
       "es": "Me encanta.",
       "ru": "Обожаю."
      },
      {
       "es": "No mucho.",
       "ru": "Не очень."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Yo gusto (ошибка)",
       "claves": [
        "=yo gusto",
        "=yo gusta"
       ],
       "resp": [
        {
         "es": "😉 En español: «me gusta».",
         "tr": "Эн эспаньо́л: «мэ гу́ста».",
         "ru": "По-испански — «me gusta»."
        }
       ],
       "ir": "deporte"
      },
      {
       "etiqueta": "Не очень",
       "claves": [
        "=no mucho",
        "=no me gusta",
        "=no"
       ],
       "resp": [
        {
         "es": "¿No? ¡Oh! 😅",
         "tr": "¿Но? ¡О!",
         "ru": "Нет? Ой!"
        }
       ],
       "ir": "deporte",
       "dato": "Музыка",
       "datoValor": "no mucho"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "gusta",
        "encanta",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 🎶",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "deporte",
       "dato": "Музыка",
       "datoValor": "sí"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "deporte",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Me encanta el cine y la playa. 😊",
       "tr": "Мэ энка́нта эл си́нэ и ла пла́я.",
       "ru": "Обожаю кино и пляж."
      }
     ],
     "aTiTema": "gustos_l",
     "retomar": {
      "es": "¿Te gusta la música?",
      "tr": "¿Тэ гу́ста ла му́сика?",
      "ru": "Тебе нравится музыка?"
     }
    },
    {
     "id": "deporte",
     "titulo": "Спорт",
     "bot": [
      {
       "es": "No me gusta mucho el deporte. 😅 ¿Y tú? ¿Qué deporte te gusta?",
       "tr": "Но мэ гу́ста му́чо эл дэпо́ртэ. ¿И ту? ¿Кэ дэпо́ртэ тэ гу́ста?",
       "ru": "Я не очень люблю спорт. А ты? Какой спорт тебе нравится?"
      }
     ],
     "ideas": [
      {
       "es": "Me gusta el fútbol.",
       "ru": "Мне нравится футбол."
      },
      {
       "es": "Me gusta nadar.",
       "ru": "Мне нравится плавать."
      },
      {
       "es": "No me gusta el deporte.",
       "ru": "Я не люблю спорт."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не любит",
       "claves": [
        "=no me gusta"
       ],
       "resp": [
        {
         "es": "¡Uf, el deporte! 😄",
         "tr": "¡Уф, эл дэпо́ртэ!",
         "ru": "Ох уж этот спорт!"
        }
       ],
       "ir": "comida",
       "dato": "Спорт",
       "datoValor": "no"
      },
      {
       "etiqueta": "Футбол",
       "claves": [
        "futbol"
       ],
       "resp": [
        {
         "es": "¿El fútbol? ¡Mi hermano Pablo juega al fútbol! ⚽",
         "tr": "¿Эл фу́тбол? ¡Ми эрма́но Па́бло хуэ́га ал фу́тбол!",
         "ru": "Футбол? Мой брат Пабло играет в футбол!"
        }
       ],
       "ir": "comida",
       "dato": "Спорт",
       "datoValor": "el fútbol"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "gusta",
        "encanta"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 💪",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "comida",
       "dato": "Спорт"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 💪",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "comida",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué deporte te gusta?",
      "tr": "¿Кэ дэпо́ртэ тэ гу́ста?",
      "ru": "Какой спорт тебе нравится?"
     }
    },
    {
     "id": "comida",
     "titulo": "Gusta / gustan",
     "bot": [
      {
       "es": "Y ahora: ¿«me gusta los libros» o «me gustan los libros»? 🤔",
       "tr": "И ао́ра: ¿«мэ гу́ста лос ли́брос» о «мэ гу́стан лос ли́брос»?",
       "ru": "А теперь: «me gusta los libros» или «me gustan los libros»?"
      }
     ],
     "ideas": [
      {
       "es": "Me gustan los libros.",
       "ru": "Me gustan los libros."
      },
      {
       "es": "Me gusta los libros.",
       "ru": "Me gusta los libros."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Gustan",
       "claves": [
        "gustan"
       ],
       "resp": [
        {
         "es": "¡Sí! «Los libros» son muchos: «me gustan». 👍",
         "tr": "¡Си! «Лос ли́брос» сон му́чос: «мэ гу́стан».",
         "ru": "Да! «Los libros» — их много: «me gustan»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Gusta",
       "claves": [
        "gusta"
       ],
       "resp": [
        {
         "es": "Mmm… «Los libros» son muchos: «me gustan». 😉",
         "tr": "Ммм… «Лос ли́брос» сон му́чос: «мэ гу́стан».",
         "ru": "Хм… «Los libros» — их много: «me gustan»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Me gustan los libros». 😉",
         "tr": "«Мэ гу́стан лос ли́брос».",
         "ru": "«Me gustan los libros»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Gusta o gustan?",
      "tr": "¿Гу́ста о гу́стан?",
      "ru": "Gusta или gustan?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-tiempo",
   "desde": 4,
   "titulo": "¿Qué tiempo hace?",
   "tituloRu": "Какая погода?",
   "resumen": "Погода: hace calor, hace frío, llueve",
   "intro": "Лусия рассказывает, какая погода в Барселоне, и спрашивает, какая у тебя.",
   "inicio": "hoy",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hoy",
     "titulo": "Погода сегодня",
     "bot": [
      {
       "es": "Hoy en Barcelona hace sol y mucho calor. ☀️",
       "tr": "Ой эн Барсэло́на а́сэ сол и му́чо кало́р.",
       "ru": "Сегодня в Барселоне солнечно и очень жарко."
      },
      {
       "es": "¿Qué tiempo hace hoy en tu ciudad?",
       "tr": "¿Кэ тье́мпо а́сэ ой эн ту сьюда́д?",
       "ru": "А какая сегодня погода в твоём городе?"
      }
     ],
     "ideas": [
      {
       "es": "Hace frío.",
       "ru": "Холодно."
      },
      {
       "es": "Llueve.",
       "ru": "Идёт дождь."
      },
      {
       "es": "Hace sol.",
       "ru": "Солнечно."
      },
      {
       "es": "Nieva.",
       "ru": "Идёт снег."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Снег",
       "claves": [
        "nieva",
        "nieve"
       ],
       "resp": [
        {
         "es": "¿Nieva? ¡Qué bonito! ❄️ En Barcelona casi nunca nieva.",
         "tr": "¿Нье́ба? ¡Кэ бони́то! Эн Барсэло́на ка́си ну́нка нье́ба.",
         "ru": "Идёт снег? Как красиво! В Барселоне снег почти никогда не идёт."
        }
       ],
       "ir": "estacion",
       "dato": "Погода"
      },
      {
       "etiqueta": "Холодно / дождь",
       "claves": [
        "frio",
        "llueve",
        "nublado",
        "viento"
       ],
       "resp": [
        {
         "es": "¡Uf! 🥶",
         "tr": "¡Уф!",
         "ru": "Ох!"
        }
       ],
       "ir": "estacion",
       "dato": "Погода"
      },
      {
       "etiqueta": "Солнечно / жарко",
       "claves": [
        "sol",
        "calor",
        "buen tiempo"
       ],
       "resp": [
        {
         "es": "¡Como aquí! ☀️",
         "tr": "¡Ко́мо аки́!",
         "ru": "Как здесь!"
        }
       ],
       "ir": "estacion",
       "dato": "Погода"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "estacion",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué tiempo hace?",
      "tr": "¿Кэ тье́мпо а́сэ?",
      "ru": "Какая погода?"
     }
    },
    {
     "id": "estacion",
     "titulo": "Время года",
     "bot": [
      {
       "es": "Me gusta mucho la primavera. 🌸 ¿Y tú? ¿Qué estación te gusta?",
       "tr": "Мэ гу́ста му́чо ла примабэ́ра. ¿И ту? ¿Кэ эстасьо́н тэ гу́ста?",
       "ru": "Я очень люблю весну. А ты? Какое время года тебе нравится?"
      }
     ],
     "ideas": [
      {
       "es": "El verano.",
       "ru": "Лето."
      },
      {
       "es": "El invierno.",
       "ru": "Зима."
      },
      {
       "es": "El otoño.",
       "ru": "Осень."
      },
      {
       "es": "La primavera.",
       "ru": "Весна."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Весна",
       "claves": [
        "primavera"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 🌸",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin",
       "dato": "Время года"
      },
      {
       "etiqueta": "Зима",
       "claves": [
        "invierno"
       ],
       "resp": [
        {
         "es": "¿El invierno? ¡Y la nieve! ❄️ ¡Qué bonito!",
         "tr": "¿Эл инбье́рно? ¡И ла нье́бэ! ¡Кэ бони́то!",
         "ru": "Зима? И снег! Как красиво!"
        }
       ],
       "ir": "fin",
       "dato": "Время года"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "verano",
        "otoño",
        "otono"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 😊",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "fin",
       "dato": "Время года"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué estación te gusta?",
      "tr": "¿Кэ эстасьо́н тэ гу́ста?",
      "ru": "Какое время года тебе нравится?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u4-ahora",
   "desde": 4,
   "titulo": "¿Qué estás haciendo?",
   "tituloRu": "Что ты сейчас делаешь?",
   "resumen": "Estar + gerundio: что ты делаешь прямо сейчас",
   "intro": "Лусия пишет тебе вечером. Что ты делаешь прямо сейчас? Estar + gerundio.",
   "inicio": "ahora",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ahora",
     "titulo": "Сейчас",
     "bot": [
      {
       "es": "Estoy cenando. 🍽️",
       "tr": "Эсто́й сэна́ндо.",
       "ru": "Я сейчас ужинаю."
      },
      {
       "es": "¿Y tú? ¿Qué estás haciendo?",
       "tr": "¿И ту? ¿Кэ эста́с асье́ндо?",
       "ru": "А ты? Что ты делаешь?"
      }
     ],
     "ideas": [
      {
       "es": "Estoy estudiando español.",
       "ru": "Я учу испанский."
      },
      {
       "es": "Estoy trabajando.",
       "ru": "Я работаю."
      },
      {
       "es": "Estoy viendo una película.",
       "ru": "Я смотрю фильм."
      },
      {
       "es": "Estoy cenando.",
       "ru": "Я ужинаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Учит испанский",
       "claves": [
        "estudiando"
       ],
       "resp": [
        {
         "es": "¡Muy bien! ¡Y estás hablando español! 😄",
         "tr": "¡Муй бьен! ¡И эста́с абла́ндо эспаньо́л!",
         "ru": "Отлично! И говоришь по-испански!"
        }
       ],
       "ir": "ana",
       "dato": "Сейчас"
      },
      {
       "etiqueta": "Estar + gerundio",
       "claves": [
        "~ando",
        "~iendo",
        "~yendo"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "ana",
       "dato": "Сейчас"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Estoy estudiando», «estoy comiendo»…",
         "tr": "«Эсто́й эстудья́ндо», «эсто́й комье́ндо»…",
         "ru": "Вот так: «estoy estudiando», «estoy comiendo»…"
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué estás haciendo?",
      "tr": "¿Кэ эста́с асье́ндо?",
      "ru": "Что ты сейчас делаешь?"
     }
    },
    {
     "id": "ana",
     "titulo": "Что делает Аня",
     "bot": [
      {
       "es": "Ana no escribe. 📱 Mmm… ¿Qué está haciendo Ana? ¿Durmiendo? ¿Trabajando?",
       "tr": "А́на но эскри́бэ. Ммм… ¿Кэ эста́ асье́ндо А́на? ¿Дурмье́ндо? ¿Трабаха́ндо?",
       "ru": "Аня не пишет. Хм… Что делает Аня? Спит? Работает?"
      }
     ],
     "ideas": [
      {
       "es": "Está durmiendo.",
       "ru": "Она спит."
      },
      {
       "es": "Está trabajando.",
       "ru": "Она работает."
      },
      {
       "es": "Está leyendo.",
       "ru": "Она читает."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Estar + gerundio",
       "claves": [
        "~ando",
        "~iendo",
        "~yendo"
       ],
       "resp": [
        {
         "es": "¡Sí! 😄",
         "tr": "¡Си!",
         "ru": "Да!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Está trabajando! 😄",
         "tr": "¡Эста́ трабаха́ндо!",
         "ru": "Она работает!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué está haciendo Ana?",
      "tr": "¿Кэ эста́ асье́ндо А́на?",
      "ru": "Что делает Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-desayuno",
   "desde": 5,
   "titulo": "¿Qué desayunas?",
   "tituloRu": "Что ты ешь на завтрак?",
   "resumen": "Еда и напитки: что ты ешь и пьёшь, mucho / poco",
   "intro": "Лусия рассказывает, что она ест, и спрашивает о тебе. Помни: «quiero agua», без артикля.",
   "inicio": "desayuno",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "desayuno",
     "titulo": "Завтрак",
     "bot": [
      {
       "es": "Yo desayuno un café con leche y pan con tomate. ☕🍅",
       "tr": "Йо дэсаю́но ун кафэ́ кон лэ́чэ и пан кон тома́тэ.",
       "ru": "Я завтракаю кофе с молоком и хлебом с помидором."
      },
      {
       "es": "¿Qué desayunas tú?",
       "tr": "¿Кэ дэсаю́нас ту?",
       "ru": "А ты что ешь на завтрак?"
      }
     ],
     "ideas": [
      {
       "es": "Desayuno café y fruta.",
       "ru": "Я завтракаю кофе и фруктами."
      },
      {
       "es": "Desayuno té y huevos.",
       "ru": "Я завтракаю чаем и яйцами."
      },
      {
       "es": "No desayuno nada.",
       "ru": "Я ничего не ем на завтрак."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "=no desayuno",
        "nada"
       ],
       "resp": [
        {
         "es": "¿Nada? ¡Uf! Yo sin café no puedo vivir. 😅",
         "tr": "¿На́да? ¡Уф! Йо син кафэ́ но пуэ́до биби́р.",
         "ru": "Ничего? Ох! Я без кофе жить не могу."
        }
       ],
       "ir": "pan_tomate",
       "dato": "Завтрак",
       "datoValor": "nada"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "desayuno",
        "cafe",
        "te",
        "pan",
        "leche",
        "fruta",
        "huevo",
        "queso",
        "yogur",
        "cereales",
        "zumo"
       ],
       "resp": [
        {
         "es": "¡Qué rico! 😋",
         "tr": "¡Кэ ри́ко!",
         "ru": "Вкусно!"
        }
       ],
       "ir": "pan_tomate",
       "dato": "Завтрак"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué rico! 😋",
         "tr": "¡Кэ ри́ко!",
         "ru": "Вкусно!"
        }
       ],
       "ir": "pan_tomate",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Un café con leche y pan con tomate. ¡Siempre! ☕",
       "tr": "Ун кафэ́ кон лэ́чэ и пан кон тома́тэ. ¡Сье́мпрэ!",
       "ru": "Кофе с молоком и хлеб с помидором. Всегда!"
      }
     ],
     "aTiTema": "comida_l",
     "retomar": {
      "es": "¿Qué desayunas?",
      "tr": "¿Кэ дэсаю́нас?",
      "ru": "Что ты ешь на завтрак?"
     }
    },
    {
     "id": "pan_tomate",
     "titulo": "Хлеб с помидором",
     "bot": [
      {
       "es": "En Barcelona comemos mucho pan con tomate. 🍅 ¿Lo conoces?",
       "tr": "Эн Барсэло́на комэ́мос му́чо пан кон тома́тэ. ¿Ло коно́сэс?",
       "ru": "В Барселоне едят много хлеба с помидором. Ты его знаешь?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, lo conozco.",
       "ru": "Да, знаю."
      },
      {
       "es": "No, no lo conozco.",
       "ru": "Нет, не знаю."
      },
      {
       "es": "Sí, me encanta.",
       "ru": "Да, обожаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "=no lo conozco",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Es muy fácil: pan, tomate, aceite y sal! 😋",
         "tr": "¡Эс муй фа́сил: пан, тома́тэ, асэ́йтэ и сал!",
         "ru": "Это очень просто: хлеб, помидор, масло и соль!"
        }
       ],
       "ir": "agua"
      },
      {
       "etiqueta": "Conozco (без lo)",
       "claves": [
        "=si conozco",
        "=conozco"
       ],
       "resp": [
        {
         "es": "😉 «Sí, lo conozco». ¡Y es muy rico!",
         "tr": "«Си, ло коно́ско». ¡И эс муй ри́ко!",
         "ru": "«Sí, lo conozco». И это очень вкусно!"
        }
       ],
       "ir": "agua"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "lo conozco",
        "=si",
        "encanta",
        "gusta"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 😄",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "agua"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Es pan, tomate, aceite y sal! 😋",
         "tr": "¡Эс пан, тома́тэ, асэ́йтэ и сал!",
         "ru": "Это хлеб, помидор, масло и соль!"
        }
       ],
       "ir": "agua",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Conoces el pan con tomate?",
      "tr": "¿Коно́сэс эл пан кон тома́тэ?",
      "ru": "Ты знаешь, что такое хлеб с помидором?"
     }
    },
    {
     "id": "agua",
     "titulo": "Вода или кофе",
     "bot": [
      {
       "es": "Yo bebo mucho café y poca agua. 😅 ¿Y tú? ¿Bebes mucha agua?",
       "tr": "Йо бэ́бо му́чо кафэ́ и по́ка а́гуа. ¿И ту? ¿Бэ́бэс му́ча а́гуа?",
       "ru": "Я пью много кофе и мало воды. А ты? Ты пьёшь много воды?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, bebo mucha agua.",
       "ru": "Да, я пью много воды."
      },
      {
       "es": "No, bebo poca agua.",
       "ru": "Нет, я пью мало воды."
      },
      {
       "es": "Bebo mucho té.",
       "ru": "Я пью много чая."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mucho agua (ошибка)",
       "claves": [
        "=mucho agua",
        "bebo mucho agua"
       ],
       "resp": [
        {
         "es": "😉 «Mucha agua»: el agua es femenina.",
         "tr": "«Му́ча а́гуа»: эл а́гуа эс фэмэни́на.",
         "ru": "«Mucha agua»: agua — женского рода."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Мало",
       "claves": [
        "poca",
        "poco",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Como yo! 😄 Tenemos que beber más agua.",
         "tr": "¡Ко́мо йо! Тэнэ́мос кэ бэбэ́р мас а́гуа.",
         "ru": "Как я! Нам надо пить больше воды."
        }
       ],
       "ir": "fin",
       "dato": "Вода",
       "datoValor": "poca"
      },
      {
       "etiqueta": "Много",
       "claves": [
        "mucha",
        "mucho",
        "=si",
        "bastante"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 💧",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "fin",
       "dato": "Вода",
       "datoValor": "mucha"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Bebes mucha agua?",
      "tr": "¿Бэ́бэс му́ча а́гуа?",
      "ru": "Ты пьёшь много воды?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Buen provecho, {nombre}! 👋",
       "tr": "¡Буэн пробэ́чо, {nombre}!",
       "ru": "Приятного аппетита, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-mercado",
   "desde": 5,
   "titulo": "En el mercado",
   "tituloRu": "На рынке",
   "resumen": "Купить фрукты: quería…, ¿cuánto es?, цены",
   "intro": "Сегодня Лусия помогает подруге в её лавке на рынке. Ты покупатель!",
   "inicio": "hola",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hola",
     "titulo": "Что желаете?",
     "bot": [
      {
       "es": "Hoy trabajo en la tienda de mi amiga, en el mercado. 🍎🍊",
       "tr": "Ой траба́хо эн ла тье́нда дэ ми ами́га, эн эл мэрка́до.",
       "ru": "Сегодня я работаю в лавке подруги на рынке."
      },
      {
       "es": "¿Qué quieres?",
       "tr": "¿Кэ кье́рэс?",
       "ru": "Что тебе?"
      }
     ],
     "ideas": [
      {
       "es": "Quería un kilo de naranjas.",
       "ru": "Мне бы килограмм апельсинов."
      },
      {
       "es": "¿Me pones medio kilo de tomates?",
       "ru": "Взвесишь полкило помидоров?"
      },
      {
       "es": "Quiero manzanas, por favor.",
       "ru": "Мне яблок, пожалуйста."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Просит",
       "claves": [
        "quer",
        "pones",
        "kilo",
        "naranja",
        "manzana",
        "tomate",
        "platano",
        "fresa",
        "fruta",
        "patata",
        "cebolla"
       ],
       "resp": [
        {
         "es": "¡Muy bien! Aquí tienes. 🛍️",
         "tr": "¡Муй бьен! Аки́ тье́нэс.",
         "ru": "Отлично! Держи."
        }
       ],
       "ir": "mas",
       "dato": "Покупка"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mmm… ¿Naranjas? Aquí tienes. 🍊",
         "tr": "Ммм… ¿Нара́нхас? Аки́ тье́нэс.",
         "ru": "Хм… Апельсины? Держи."
        }
       ],
       "ir": "mas",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué quieres?",
      "tr": "¿Кэ кье́рэс?",
      "ru": "Что тебе?"
     }
    },
    {
     "id": "mas",
     "titulo": "Что-нибудь ещё?",
     "bot": [
      {
       "es": "¿Algo más?",
       "tr": "¿А́лго мас?",
       "ru": "Что-нибудь ещё?"
      }
     ],
     "ideas": [
      {
       "es": "Nada más, gracias.",
       "ru": "Больше ничего, спасибо."
      },
      {
       "es": "Sí, dos limones.",
       "ru": "Да, два лимона."
      },
      {
       "es": "No, gracias.",
       "ru": "Нет, спасибо."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "nada mas",
        "=no",
        "=no gracias",
        "=nada"
       ],
       "resp": [],
       "ir": "cuanto"
      },
      {
       "etiqueta": "Ещё что-то",
       "claves": [
        "=si",
        "limon",
        "kilo",
        "quer",
        "pones",
        "tambien"
       ],
       "resp": [
        {
         "es": "¡Vale! 👍",
         "tr": "¡Ба́лэ!",
         "ru": "Хорошо!"
        }
       ],
       "ir": "cuanto"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [],
       "ir": "cuanto",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Algo más?",
      "tr": "¿А́лго мас?",
      "ru": "Что-нибудь ещё?"
     }
    },
    {
     "id": "cuanto",
     "titulo": "Сколько стоит",
     "bot": [
      {
       "es": "Muy bien. ¿Y ahora? ¿Qué me preguntas para pagar? 🙂",
       "tr": "Муй бьен. ¿И ао́ра? ¿Кэ мэ прэгу́нтас па́ра пага́р?",
       "ru": "Хорошо. А теперь? Что ты спросишь, чтобы заплатить?"
      }
     ],
     "ideas": [
      {
       "es": "¿Cuánto es?",
       "ru": "Сколько с меня?"
      },
      {
       "es": "¿Cuánto cuesta?",
       "ru": "Сколько стоит?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Спрашивает цену",
       "claves": [
        "cuanto"
       ],
       "resp": [
        {
         "es": "Son cuatro euros con cincuenta. 💶",
         "tr": "Сон куа́тро э́урос кон синкуэ́нта.",
         "ru": "С тебя четыре евро пятьдесят."
        }
       ],
       "ir": "pagar"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Para pagar: «¿Cuánto es?». Son cuatro euros con cincuenta.",
         "tr": "Па́ра пага́р: «¿Куа́нто эс?». Сон куа́тро э́урос кон синкуэ́нта.",
         "ru": "Чтобы заплатить: «¿Cuánto es?». С тебя четыре евро пятьдесят."
        }
       ],
       "ir": "pagar",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué preguntas para pagar?",
      "tr": "¿Кэ прэгу́нтас па́ра пага́р?",
      "ru": "Что спросить, чтобы заплатить?"
     }
    },
    {
     "id": "pagar",
     "titulo": "Сколько это",
     "bot": [
      {
       "es": "Cuatro euros con cincuenta: ¿cuántos céntimos son? 🤔 ¿Cuatrocientos cincuenta o cuarenta y cinco?",
       "tr": "Куа́тро э́урос кон синкуэ́нта: ¿куа́нтос сэ́нтимос сон? ¿Куатросье́нтос синкуэ́нта о куарэ́нта и си́нко?",
       "ru": "Четыре евро пятьдесят — это сколько центов? Четыреста пятьдесят или сорок пять?"
      }
     ],
     "ideas": [
      {
       "es": "Cuatrocientos cincuenta.",
       "ru": "Четыреста пятьдесят."
      },
      {
       "es": "Cuarenta y cinco.",
       "ru": "Сорок пять."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "cuatrocientos",
        "450"
       ],
       "resp": [
        {
         "es": "¡Sí! Muy bien. ¡Gracias y hasta pronto! 😊",
         "tr": "¡Си! Муй бьен. ¡Гра́сьяс и а́ста про́нто!",
         "ru": "Да! Отлично. Спасибо и до скорого!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Неправильно",
       "claves": [
        "cuarenta",
        "45"
       ],
       "resp": [
        {
         "es": "No, no: cuatrocientos cincuenta. 😄",
         "tr": "Но, но: куатросье́нтос синкуэ́нта.",
         "ru": "Нет-нет: четыреста пятьдесят."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Son cuatrocientos cincuenta céntimos. 😉",
         "tr": "Сон куатросье́нтос синкуэ́нта сэ́нтимос.",
         "ru": "Это четыреста пятьдесят центов."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuántos céntimos?",
      "tr": "¿Куа́нтос сэ́нтимос?",
      "ru": "Сколько центов?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Gracias, {nombre}! ¡Hasta la próxima! 👋",
       "tr": "¡Гра́сьяс, {nombre}! ¡А́ста ла про́ксима!",
       "ru": "Спасибо, {nombre}! До следующего раза!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-bar",
   "desde": 5,
   "titulo": "En el bar",
   "tituloRu": "В баре",
   "resumen": "Заказать в баре: ¿me pones…?, la cuenta, por favor",
   "intro": "Вы с Лусией в баре на площади. Лусия — официантка: сделай заказ!",
   "inicio": "pedir",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pedir",
     "titulo": "Заказ",
     "bot": [
      {
       "es": "¡Hoy yo soy la camarera! 😄",
       "tr": "¡Ой йо сой ла камарэ́ра!",
       "ru": "Сегодня я официантка!"
      },
      {
       "es": "Hola, ¿qué te pongo?",
       "tr": "О́ла, ¿кэ тэ по́нго?",
       "ru": "Привет, что тебе принести?"
      }
     ],
     "ideas": [
      {
       "es": "¿Me pones un café con leche?",
       "ru": "Принесёшь кофе с молоком?"
      },
      {
       "es": "Quería una cerveza, por favor.",
       "ru": "Мне бы пиво, пожалуйста."
      },
      {
       "es": "Un agua, por favor.",
       "ru": "Воду, пожалуйста."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Вежливо (¿me pones…? / quería)",
       "claves": [
        "me pones",
        "querria",
        "queria",
        "por favor"
       ],
       "resp": [
        {
         "es": "¡Muy bien! ¡Muy educado! 👍",
         "tr": "¡Муй бьен! ¡Муй эдука́до!",
         "ru": "Отлично! Очень вежливо!"
        }
       ],
       "ir": "comer",
       "dato": "В баре"
      },
      {
       "etiqueta": "Прямой запрос: quiero…",
       "claves": [
        "quiero",
        "cafe",
        "cerveza",
        "agua",
        "te",
        "vino",
        "zumo",
        "refresco",
        "cortado"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉 Más amable: «¿Me pones…?».",
         "tr": "¡Ба́лэ! Мас ама́блэ: «¿Мэ по́нэс…?».",
         "ru": "Хорошо! Вежливее будет сказать: «¿Me pones…?»"
        }
       ],
       "ir": "comer",
       "dato": "В баре"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Se dice: «¿Me pones un café?».",
         "tr": "Сэ ди́сэ: «¿Мэ по́нэс ун кафэ́?».",
         "ru": "Так говорят: «¿Me pones un café?»"
        }
       ],
       "ir": "comer",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te pongo?",
      "tr": "¿Кэ тэ по́нго?",
      "ru": "Что тебе принести?"
     }
    },
    {
     "id": "comer",
     "titulo": "Поесть",
     "bot": [
      {
       "es": "¿Y para comer? Tenemos tortilla y bocadillos. 🥪",
       "tr": "¿И па́ра комэ́р? Тэнэ́мос торти́я и бокади́йос.",
       "ru": "А поесть? Есть тортилья и бутерброды."
      }
     ],
     "ideas": [
      {
       "es": "Una tortilla, por favor.",
       "ru": "Тортилью, пожалуйста."
      },
      {
       "es": "Un bocadillo de jamón.",
       "ru": "Бутерброд с хамоном."
      },
      {
       "es": "Nada, gracias.",
       "ru": "Ничего, спасибо."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "nada",
        "=no",
        "=no gracias"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Хорошо!"
        }
       ],
       "ir": "cuenta"
      },
      {
       "etiqueta": "Тортилья",
       "claves": [
        "tortilla"
       ],
       "resp": [
        {
         "es": "¡La tortilla de aquí es muy buena! 😋",
         "tr": "¡Ла торти́я дэ аки́ эс муй буэ́на!",
         "ru": "Тортилья здесь очень вкусная! 😋"
        }
       ],
       "ir": "cuenta"
      },
      {
       "etiqueta": "Заказывает",
       "claves": [
        "bocadillo",
        "jamon",
        "queso",
        "por favor",
        "pones",
        "quer"
       ],
       "resp": [
        {
         "es": "¡Ahora mismo! 😊",
         "tr": "¡Ао́ра ми́смо!",
         "ru": "Сейчас принесу!"
        }
       ],
       "ir": "cuenta"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Хорошо!"
        }
       ],
       "ir": "cuenta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Y para comer?",
      "tr": "¿И па́ра комэ́р?",
      "ru": "А поесть?"
     }
    },
    {
     "id": "cuenta",
     "titulo": "Счёт",
     "bot": [
      {
       "es": "… 🍽️ ¿Todo bien? ¿Qué me dices para pagar?",
       "tr": "… ¿То́до бьен? ¿Кэ мэ ди́сэс па́ра пага́р?",
       "ru": "… Всё хорошо? Что ты скажешь, чтобы заплатить?"
      }
     ],
     "ideas": [
      {
       "es": "La cuenta, por favor.",
       "ru": "Счёт, пожалуйста."
      },
      {
       "es": "¿Cuánto es?",
       "ru": "Сколько с меня?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Просит счёт",
       "claves": [
        "cuenta",
        "cuanto",
        "pagar"
       ],
       "resp": [
        {
         "es": "Son siete euros. 💶 ¡Gracias!",
         "tr": "Сон сье́тэ э́урос. ¡Гра́сьяс!",
         "ru": "С тебя семь евро. Спасибо!"
        }
       ],
       "ir": "propina"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «La cuenta, por favor». Son siete euros.",
         "tr": "«Ла куэ́нта, пор фабо́р». Сон сье́тэ э́урос.",
         "ru": "«La cuenta, por favor». С тебя семь евро."
        }
       ],
       "ir": "propina",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué dices para pagar?",
      "tr": "¿Кэ ди́сэс па́ра пага́р?",
      "ru": "Что ты скажешь, чтобы заплатить?"
     }
    },
    {
     "id": "propina",
     "titulo": "Чаевые",
     "bot": [
      {
       "es": "Una pregunta: en tu país, ¿dejáis propina en los bares? 🤔 En España, poca o ninguna.",
       "tr": "У́на прэгу́нта: эн ту паи́с, ¿дэха́йс пропи́на эн лос ба́рэс? Эн Эспа́ня, по́ка о нингу́на.",
       "ru": "Вопрос: в твоей стране оставляют чаевые в барах? В Испании оставляют мало или вообще не оставляют."
      }
     ],
     "ideas": [
      {
       "es": "Sí, un poco.",
       "ru": "Да, немного."
      },
      {
       "es": "No, no mucho.",
       "ru": "Нет, не особо."
      },
      {
       "es": "Sí, el diez por ciento.",
       "ru": "Да, десять процентов."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "poco",
        "diez",
        "por ciento",
        "siempre"
       ],
       "resp": [
        {
         "es": "¡Ah, mira! 🙂",
         "tr": "¡А, ми́ра!",
         "ru": "А, вот как!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "nunca",
        "no mucho"
       ],
       "resp": [
        {
         "es": "¡Como aquí! 😄",
         "tr": "¡Ко́мо аки́!",
         "ru": "Как здесь!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Ah, mira! 🙂",
         "tr": "¡А, ми́ра!",
         "ru": "А, вот как!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dejáis propina?",
      "tr": "¿Дэха́йс пропи́на?",
      "ru": "Вы оставляете чаевые?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-ropa",
   "desde": 5,
   "titulo": "Ropa y tallas",
   "tituloRu": "Одежда и размеры",
   "resumen": "Одежда, цвета и размеры: ¿la tienes en…?, ¿me la puedo probar?",
   "intro": "Лусия покупает одежду и просит твоего совета. Помни: «¿La camiseta? La compro».",
   "inicio": "que",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "que",
     "titulo": "Что купить",
     "bot": [
      {
       "es": "¡Estoy en una tienda de ropa! 🛍️",
       "tr": "¡Эсто́й эн у́на тье́нда дэ ро́па!",
       "ru": "Я в магазине одежды!"
      },
      {
       "es": "Necesito una chaqueta para el invierno. ¿Y tú? ¿Qué ropa necesitas?",
       "tr": "Нэсэси́то у́на чакэ́та па́ра эл инбье́рно. ¿И ту? ¿Кэ ро́па нэсэси́тас?",
       "ru": "Мне нужна куртка на зиму. А тебе? Какая одежда тебе нужна?"
      }
     ],
     "ideas": [
      {
       "es": "Necesito unos zapatos.",
       "ru": "Мне нужны туфли."
      },
      {
       "es": "Necesito una camiseta.",
       "ru": "Мне нужна футболка."
      },
      {
       "es": "No necesito nada.",
       "ru": "Мне ничего не нужно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "=no necesito nada",
        "nada"
       ],
       "resp": [
        {
         "es": "¡Qué suerte! 😄",
         "tr": "¡Кэ суэ́ртэ!",
         "ru": "Везёт!"
        }
       ],
       "ir": "color"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "necesito",
        "zapato",
        "camiseta",
        "pantalon",
        "abrigo",
        "chaqueta",
        "falda",
        "vestido",
        "camisa",
        "jersey",
        "botas",
        "zapatillas"
       ],
       "resp": [
        {
         "es": "¡Vale! 👍",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "color",
       "dato": "Одежда"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 👍",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "color",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué ropa necesitas?",
      "tr": "¿Кэ ро́па нэсэси́тас?",
      "ru": "Какая одежда тебе нужна?"
     }
    },
    {
     "id": "color",
     "titulo": "Цвет",
     "bot": [
      {
       "es": "Hay una chaqueta negra y una roja. 🧥 ¿Qué color me queda mejor, el negro o el rojo?",
       "tr": "Ай у́на чакэ́та нэ́гра и у́на ро́ха. ¿Кэ коло́р мэ кэ́да мэхо́р, эл нэ́гро о эл ро́хо?",
       "ru": "Есть чёрная куртка и красная. Какой цвет мне больше подойдёт: чёрный или красный?"
      }
     ],
     "ideas": [
      {
       "es": "El rojo.",
       "ru": "Красный."
      },
      {
       "es": "El negro.",
       "ru": "Чёрный."
      },
      {
       "es": "La roja.",
       "ru": "Красная."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Красная",
       "claves": [
        "rojo",
        "roja"
       ],
       "resp": [
        {
         "es": "¡Sí! Mi mochila también es roja. 😄",
         "tr": "¡Си! Ми мочи́ла тамбье́н эс ро́ха.",
         "ru": "Да! Мой рюкзак тоже красный."
        }
       ],
       "ir": "talla",
       "dato": "Цвет для Лусии",
       "datoValor": "rojo"
      },
      {
       "etiqueta": "Чёрная",
       "claves": [
        "negro",
        "negra"
       ],
       "resp": [
        {
         "es": "¿El negro? Es muy elegante. 🖤",
         "tr": "¿Эл нэ́гро? Эс муй элэга́нтэ.",
         "ru": "Чёрный? Очень элегантно."
        }
       ],
       "ir": "talla",
       "dato": "Цвет для Лусии",
       "datoValor": "negro"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mmm… ¡La roja! 😄",
         "tr": "Ммм… ¡Ла ро́ха!",
         "ru": "Хм… Красную!"
        }
       ],
       "ir": "talla",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿El negro o el rojo?",
      "tr": "¿Эл нэ́гро о эл ро́хо?",
      "ru": "Чёрный или красный?"
     }
    },
    {
     "id": "talla",
     "titulo": "Размер",
     "bot": [
      {
       "es": "Yo uso la talla M. ¿Y tú? ¿Qué talla usas?",
       "tr": "Йо у́со ла та́я М. ¿И ту? ¿Кэ та́я у́сас?",
       "ru": "Я ношу размер M. А ты? Какой у тебя размер?"
      }
     ],
     "ideas": [
      {
       "es": "Uso la talla S.",
       "ru": "Я ношу размер S."
      },
      {
       "es": "La M.",
       "ru": "M."
      },
      {
       "es": "La L.",
       "ru": "L."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет",
       "claves": [
        "talla",
        "=la s",
        "=la m",
        "=la l",
        "=la xl",
        "=s",
        "=m",
        "=l",
        "=xl",
        "uso"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "probar",
       "dato": "Размер"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "probar",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué talla usas?",
      "tr": "¿Кэ та́я у́сас?",
      "ru": "Какой у тебя размер?"
     }
    },
    {
     "id": "probar",
     "titulo": "Примерить",
     "bot": [
      {
       "es": "Me gusta la chaqueta roja. ¿Qué hago? ¿La compro o no la compro? 🤔",
       "tr": "Мэ гу́ста ла чакэ́та ро́ха. ¿Кэ а́го? ¿Ла ко́мпро о но ла ко́мпро?",
       "ru": "Мне нравится красная куртка. Что делать? Купить её или нет?"
      }
     ],
     "ideas": [
      {
       "es": "¡Sí, la compras!",
       "ru": "Да, бери!"
      },
      {
       "es": "Sí, cómprala.",
       "ru": "Да, купи её."
      },
      {
       "es": "No, no la compras.",
       "ru": "Нет, не покупай."
      },
      {
       "es": "¿Cuánto cuesta?",
       "ru": "Сколько стоит?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Сколько стоит",
       "claves": [
        "cuanto"
       ],
       "resp": [
        {
         "es": "Cuesta sesenta euros… ¡Pero la compro! 😄",
         "tr": "Куэ́ста сэсэ́нта э́урос… ¡Пэ́ро ла ко́мпро!",
         "ru": "Стоит шестьдесят евро… Но я её беру!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "no la compr"
       ],
       "resp": [
        {
         "es": "¡Vale, no la compro! 😅",
         "tr": "¡Ба́лэ, но ла ко́мпро!",
         "ru": "Ладно, не покупаю!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да (с la)",
       "claves": [
        "la compr",
        "comprala"
       ],
       "resp": [
        {
         "es": "¡Vale, la compro! 🛍️😄",
         "tr": "¡Ба́лэ, ла ко́мпро!",
         "ru": "Хорошо, беру!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Compras (без la)",
       "claves": [
        "=si compras",
        "=compras",
        "=si compra"
       ],
       "resp": [
        {
         "es": "😉 «¡Sí, la compras!». Y… ¡la compro! 🛍️",
         "tr": "«¡Си, ла ко́мпрас!». И… ¡ла ко́мпро!",
         "ru": "«¡Sí, la compras!». И… я её беру!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "compra",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Vale, la compro! 🛍️😄",
         "tr": "¡Ба́лэ, ла ко́мпро!",
         "ru": "Хорошо, беру!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡La compro! 😄",
         "tr": "¡Ла ко́мпро!",
         "ru": "Беру!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿La compro?",
      "tr": "¿Ла ко́мпро?",
      "ru": "Покупать её?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-cena",
   "desde": 5,
   "titulo": "La cena del sábado",
   "tituloRu": "Ужин в субботу",
   "resumen": "Организовать ужин: lo / la / los / las",
   "intro": "Лусия устраивает ужин в субботу у себя дома. Кто что приносит? Lo, la, los, las.",
   "inicio": "invita",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "invita",
     "titulo": "Приглашение",
     "bot": [
      {
       "es": "El sábado hay cena en mi casa con Ana y unos amigos. 🍷",
       "tr": "Эл са́бадо ай сэ́на эн ми ка́са кон А́на и у́нос ами́гос.",
       "ru": "В субботу у меня дома ужин с Аней и друзьями."
      },
      {
       "es": "¿Puedes venir?",
       "tr": "¿Пуэ́дэс бэни́р?",
       "ru": "Ты сможешь прийти?"
      }
     ],
     "ideas": [
      {
       "es": "¡Sí, claro!",
       "ru": "Да, конечно!"
      },
      {
       "es": "Sí, puedo.",
       "ru": "Да, могу."
      },
      {
       "es": "No puedo, lo siento.",
       "ru": "Не могу, извини."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не может",
       "claves": [
        "=no puedo",
        "no puedo",
        "lo siento"
       ],
       "resp": [
        {
         "es": "¡Oh! Bueno, pero hoy me ayudas a preparar la cena, ¿vale? 😉",
         "tr": "¡О! Буэ́но, пэ́ро ой мэ аю́дас а прэпара́р ла сэ́на, ¿ба́лэ?",
         "ru": "Ой! Ну ладно, но сегодня ты поможешь мне приготовить ужин, хорошо? 😉"
        }
       ],
       "ir": "vino"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "claro",
        "puedo",
        "vale",
        "genial"
       ],
       "resp": [
        {
         "es": "¡Genial! 😄",
         "tr": "¡Хэнья́л!",
         "ru": "Здорово!"
        }
       ],
       "ir": "vino"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Genial! 😄",
         "tr": "¡Хэнья́л!",
         "ru": "Здорово!"
        }
       ],
       "ir": "vino",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Puedes venir?",
      "tr": "¿Пуэ́дэс бэни́р?",
      "ru": "Ты сможешь прийти?"
     }
    },
    {
     "id": "vino",
     "titulo": "Вино",
     "bot": [
      {
       "es": "Necesitamos vino. ¿Lo compras tú? 🍷",
       "tr": "Нэсэсита́мос би́но. ¿Ло ко́мпрас ту?",
       "ru": "Нам нужно вино. Купишь его ты?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, lo compro yo.",
       "ru": "Да, я куплю."
      },
      {
       "es": "Vale, lo compro.",
       "ru": "Хорошо, куплю."
      },
      {
       "es": "No, no lo compro.",
       "ru": "Нет, не куплю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "no lo compro"
       ],
       "resp": [
        {
         "es": "¡Vale! Lo compra Ana. 😄",
         "tr": "¡Ба́лэ! Ло ко́мпра А́на.",
         "ru": "Ладно! Купит Аня."
        }
       ],
       "ir": "postre"
      },
      {
       "etiqueta": "Да (с lo)",
       "claves": [
        "lo compro"
       ],
       "resp": [
        {
         "es": "¡Gracias! 🍷",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "postre",
       "dato": "Вино",
       "datoValor": "lo compra"
      },
      {
       "etiqueta": "Compro (без lo)",
       "claves": [
        "=si compro",
        "=compro",
        "=si compro yo",
        "=vale compro"
       ],
       "resp": [
        {
         "es": "😉 «Sí, lo compro». ¡Gracias!",
         "tr": "«Си, ло ко́мпро». ¡Гра́сьяс!",
         "ru": "«Sí, lo compro». Спасибо!"
        }
       ],
       "ir": "postre",
       "dato": "Вино"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "vale",
        "claro"
       ],
       "resp": [
        {
         "es": "¡Gracias! 🍷",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "postre",
       "dato": "Вино",
       "datoValor": "lo compra"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 La respuesta: «Sí, lo compro».",
         "tr": "Ла рэспуэ́ста: «Си, ло ко́мпро».",
         "ru": "Ответ: «Sí, lo compro»."
        }
       ],
       "ir": "postre",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Lo compras tú?",
      "tr": "¿Ло ко́мпрас ту?",
      "ru": "Купишь его ты?"
     }
    },
    {
     "id": "postre",
     "titulo": "Десерт",
     "bot": [
      {
       "es": "¿Y la tarta? ¿La hago yo o la compramos? 🍰",
       "tr": "¿И ла та́рта? ¿Ла а́го йо о ла компра́мос?",
       "ru": "А торт? Мне его испечь или мы купим?"
      }
     ],
     "ideas": [
      {
       "es": "La haces tú.",
       "ru": "Ты его испечёшь."
      },
      {
       "es": "La compramos.",
       "ru": "Купим."
      },
      {
       "es": "La hago yo.",
       "ru": "Я испеку."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Испечёт сам",
       "claves": [
        "la hago"
       ],
       "resp": [
        {
         "es": "¿La haces tú? ¡Qué bien! 😍",
         "tr": "¿Ла а́сэс ту? ¡Кэ бьен!",
         "ru": "Ты испечёшь? Как здорово!"
        }
       ],
       "ir": "sillas",
       "dato": "Торт",
       "datoValor": "la hace"
      },
      {
       "etiqueta": "Лусия",
       "claves": [
        "la haces"
       ],
       "resp": [
        {
         "es": "¡Vale, la hago yo! 🍰",
         "tr": "¡Ба́лэ, ла а́го йо!",
         "ru": "Ладно, испеку я!"
        }
       ],
       "ir": "sillas"
      },
      {
       "etiqueta": "Купим",
       "claves": [
        "la compr"
       ],
       "resp": [
        {
         "es": "¡Vale, la compramos! Es más fácil. 😄",
         "tr": "¡Ба́лэ, ла компра́мос! Эс мас фа́сил.",
         "ru": "Хорошо, купим! Так проще."
        }
       ],
       "ir": "sillas"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mmm… ¡La compramos! 😄",
         "tr": "Ммм… ¡Ла компра́мос!",
         "ru": "Хм… Купим!"
        }
       ],
       "ir": "sillas",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿La hago o la compramos?",
      "tr": "¿Ла а́го о ла компра́мос?",
      "ru": "Испечь или купить?"
     }
    },
    {
     "id": "sillas",
     "titulo": "Стулья",
     "bot": [
      {
       "es": "¡Un problema! Tengo cuatro sillas y somos seis. 🪑 ¿Las traes tú?",
       "tr": "¡Ун проблэ́ма! Тэ́нго куа́тро си́яс и со́мос сэйс. ¿Лас тра́эс ту?",
       "ru": "Проблема! У меня четыре стула, а нас шестеро. Принесёшь их?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, las traigo.",
       "ru": "Да, принесу."
      },
      {
       "es": "No tengo sillas.",
       "ru": "У меня нет стульев."
      },
      {
       "es": "Las trae Ana.",
       "ru": "Их принесёт Аня."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Принесёт",
       "claves": [
        "las traigo",
        "=si",
        "vale",
        "claro"
       ],
       "resp": [
        {
         "es": "¡Gracias! ¡Hasta el sábado! 😊",
         "tr": "¡Гра́сьяс! ¡А́ста эл са́бадо!",
         "ru": "Спасибо! До субботы!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Аня",
       "claves": [
        "las trae"
       ],
       "resp": [
        {
         "es": "¡Buena idea! Ana vive cerca. 😄",
         "tr": "¡Буэ́на идэ́а! А́на би́бэ сэ́рка.",
         "ru": "Хорошая идея! Аня живёт рядом."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Нет стульев",
       "claves": [
        "no tengo",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Vale! Las trae Ana. 😄",
         "tr": "¡Ба́лэ! Лас тра́э А́на.",
         "ru": "Ладно! Их принесёт Аня."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! Las trae Ana. 😄",
         "tr": "¡Ба́лэ! Лас тра́э А́на.",
         "ru": "Ладно! Их принесёт Аня."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Las traes tú?",
      "tr": "¿Лас тра́эс ту?",
      "ru": "Принесёшь их?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Hasta el sábado, {nombre}! 👋",
       "tr": "¡А́ста эл са́бадо, {nombre}!",
       "ru": "До субботы, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u5-necesitas",
   "desde": 5,
   "titulo": "¿Qué necesitas?",
   "tituloRu": "Что тебе нужно?",
   "resumen": "Necesitar, tener que, hay que, poder и saber",
   "intro": "У Лусии сломался ноутбук, а Аня — программист. Какая помощь нужна, что нужно сделать и что ты умеешь?",
   "inicio": "problema",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "problema",
     "titulo": "Проблема",
     "bot": [
      {
       "es": "¡Ay! Mi ordenador no funciona. 💻😩",
       "tr": "¡Ай! Ми ордэнадо́р но фунсьо́на.",
       "ru": "Ой! Мой компьютер не работает."
      },
      {
       "es": "Tengo que preparar mis clases. ¿Sabes arreglar ordenadores?",
       "tr": "Тэ́нго кэ прэпара́р мис кла́сэс. ¿Са́бэс аррэгла́р ордэнадо́рэс?",
       "ru": "Мне нужно подготовить занятия. Ты умеешь чинить компьютеры?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, sé un poco.",
       "ru": "Да, немного умею."
      },
      {
       "es": "No, no sé.",
       "ru": "Нет, не умею."
      },
      {
       "es": "No, pero Ana sabe.",
       "ru": "Нет, но Аня умеет."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Аня",
       "claves": [
        "ana"
       ],
       "resp": [
        {
         "es": "¡Claro! Ana es programadora. ¡La llamo! 📞",
         "tr": "¡Кла́ро! А́на эс програмадо́ра. ¡Ла я́мо!",
         "ru": "Точно! Аня — программист. Позвоню ей!"
        }
       ],
       "ir": "saber"
      },
      {
       "etiqueta": "No puedo (ошибка)",
       "claves": [
        "=no puedo"
       ],
       "resp": [
        {
         "es": "😉 Para algo que aprendes: «no sé». «No puedo» es cuando no tienes tiempo. ¡Llamo a Ana!",
         "tr": "Па́ра а́лго кэ апрэ́ндэс: «но сэ». «Но пуэ́до» эс куа́ндо но тье́нэс тье́мпо. ¡Я́мо а А́на!",
         "ru": "Если речь об умении — «no sé». «No puedo» — когда нет времени. Позвоню Ане!"
        }
       ],
       "ir": "saber"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "no se"
       ],
       "resp": [
        {
         "es": "¡No pasa nada! Ana es programadora: ¡la llamo! 📞",
         "tr": "¡Но па́са на́да! А́на эс програмадо́ра: ¡ла я́мо!",
         "ru": "Ничего страшного! Аня — программист: позвоню ей!"
        }
       ],
       "ir": "saber"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "se un poco",
        "=se",
        "un poco"
       ],
       "resp": [
        {
         "es": "¡Genial! Pero llamo a Ana también. 😄",
         "tr": "¡Хэнья́л! Пэ́ро я́мо а А́на тамбье́н.",
         "ru": "Здорово! Но Ане тоже позвоню."
        }
       ],
       "ir": "saber"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! Llamo a Ana. 📞",
         "tr": "¡Ба́лэ! Я́мо а А́на.",
         "ru": "Ладно! Позвоню Ане."
        }
       ],
       "ir": "saber",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Sabes arreglar ordenadores?",
      "tr": "¿Са́бэс аррэгла́р ордэнадо́рэс?",
      "ru": "Ты умеешь чинить компьютеры?"
     }
    },
    {
     "id": "saber",
     "titulo": "Saber или poder",
     "bot": [
      {
       "es": "Una pregunta de español: ¿cómo se dice «я умею плавать»? ¿«Sé nadar» o «puedo nadar»? 🤔",
       "tr": "У́на прэгу́нта дэ эспаньо́л: ¿ко́мо сэ ди́сэ «я умею плавать»? ¿«Сэ нада́р» о «пуэ́до нада́р»?",
       "ru": "Вопрос по испанскому: как сказать «я умею плавать»? «Sé nadar» или «puedo nadar»?"
      }
     ],
     "ideas": [
      {
       "es": "Sé nadar.",
       "ru": "Sé nadar."
      },
      {
       "es": "Puedo nadar.",
       "ru": "Puedo nadar."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Sé",
       "claves": [
        "=se"
       ],
       "resp": [
        {
         "es": "¡Sí! «Sé nadar»: sabes hacerlo. «Puedo» es cuando hoy tienes tiempo. 👍",
         "tr": "¡Си! «Сэ нада́р»: са́бэс асэ́рло. «Пуэ́до» эс куа́ндо ой тье́нэс тье́мпо.",
         "ru": "Да! «Sé nadar» — умею, знаю, как это делать. «Puedo» — когда сегодня есть возможность."
        }
       ],
       "ir": "hay_que"
      },
      {
       "etiqueta": "Puedo",
       "claves": [
        "puedo"
       ],
       "resp": [
        {
         "es": "Mmm… «Sé nadar»: sabes hacerlo. «Hoy no puedo»: hoy no tienes tiempo. 😉",
         "tr": "Ммм… «Сэ нада́р»: са́бэс асэ́рло. «Ой но пуэ́до»: ой но тье́нэс тье́мпо.",
         "ru": "Хм… «Sé nadar» — умею. «Hoy no puedo» — сегодня нет времени."
        }
       ],
       "ir": "hay_que"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Sé nadar». 😉",
         "tr": "«Сэ нада́р».",
         "ru": "«Sé nadar»."
        }
       ],
       "ir": "hay_que",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Sé nadar o puedo nadar?",
      "tr": "¿Сэ нада́р о пуэ́до нада́р?",
      "ru": "Sé nadar или puedo nadar?"
     }
    },
    {
     "id": "hay_que",
     "titulo": "Что надо сделать",
     "bot": [
      {
       "es": "Y tú, ¿qué tienes que hacer hoy? 📝",
       "tr": "И ту, ¿кэ тье́нэс кэ асэ́р ой?",
       "ru": "А тебе что надо сделать сегодня?"
      }
     ],
     "ideas": [
      {
       "es": "Tengo que trabajar.",
       "ru": "Мне надо работать."
      },
      {
       "es": "Tengo que estudiar español.",
       "ru": "Мне надо учить испанский."
      },
      {
       "es": "Tengo que comprar comida.",
       "ru": "Мне надо купить еду."
      },
      {
       "es": "No tengo que hacer nada.",
       "ru": "Мне ничего не надо делать."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "nada"
       ],
       "resp": [
        {
         "es": "¡Qué suerte! 😄",
         "tr": "¡Кэ суэ́ртэ!",
         "ru": "Везёт!"
        }
       ],
       "ir": "fin",
       "dato": "Дела",
       "datoValor": "nada"
      },
      {
       "etiqueta": "Испанский",
       "claves": [
        "espanol"
       ],
       "resp": [
        {
         "es": "¡Muy bien! ¡Y ya lo estás haciendo! 😄",
         "tr": "¡Муй бьен! ¡И я ло эста́с асье́ндо!",
         "ru": "Отлично! И ты уже этим занимаешься!"
        }
       ],
       "ir": "fin",
       "dato": "Дела"
      },
      {
       "etiqueta": "Tener que + infinitivo",
       "claves": [
        "tengo que",
        "hay que",
        "necesito"
       ],
       "resp": [
        {
         "es": "¡Uf, mucho trabajo! 💪",
         "tr": "¡Уф, му́чо траба́хо!",
         "ru": "Ох, много дел!"
        }
       ],
       "ir": "fin",
       "dato": "Дела"
      },
      {
       "etiqueta": "Tengo + infinitivo (ошибка)",
       "claves": [
        "~ar",
        "~er",
        "~ir"
       ],
       "resp": [
        {
         "es": "😉 «Tengo que trabajar», con «que».",
         "tr": "«Тэ́нго кэ трабаха́р», кон «кэ».",
         "ru": "«Tengo que trabajar» — с «que»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué tienes que hacer hoy?",
      "tr": "¿Кэ тье́нэс кэ асэ́р ой?",
      "ru": "Что тебе надо сделать сегодня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-transporte",
   "desde": 6,
   "titulo": "¿Cómo vas al trabajo?",
   "tituloRu": "Как ты добираешься на работу?",
   "resumen": "Транспорт: ir en metro, ir a pie, tardar",
   "intro": "Лусия рассказывает, как она ездит в школу. А ты? Помни: «en metro», а не «con metro».",
   "inicio": "como",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "como",
     "titulo": "Как добираешься",
     "bot": [
      {
       "es": "Yo voy a la escuela en metro. 🚇",
       "tr": "Йо бой а ла эскуэ́ла эн мэ́тро.",
       "ru": "Я езжу в школу на метро."
      },
      {
       "es": "¿Y tú? ¿Cómo vas al trabajo o a clase?",
       "tr": "¿И ту? ¿Ко́мо бас ал траба́хо о а кла́сэ?",
       "ru": "А ты? Как ты добираешься на работу или на учёбу?"
      }
     ],
     "ideas": [
      {
       "es": "Voy en autobús.",
       "ru": "Я езжу на автобусе."
      },
      {
       "es": "Voy a pie.",
       "ru": "Я хожу пешком."
      },
      {
       "es": "Voy en coche.",
       "ru": "Я езжу на машине."
      },
      {
       "es": "Voy en bici.",
       "ru": "Я езжу на велосипеде."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Con metro (ошибка)",
       "claves": [
        "con metro",
        "con autobus",
        "con coche",
        "con bici",
        "con tren"
       ],
       "resp": [
        {
         "es": "😉 En español: «en metro», «en autobús»… pero «a pie».",
         "tr": "Эн эспаньо́л: «эн мэ́тро», «эн аутобу́с»… пэ́ро «а пье».",
         "ru": "По-испански: «en metro», «en autobús»… но «a pie»."
        }
       ],
       "ir": "tiempo",
       "dato": "Транспорт"
      },
      {
       "etiqueta": "Пешком",
       "claves": [
        "a pie",
        "andando",
        "caminando"
       ],
       "resp": [
        {
         "es": "¡Qué bien! Es muy sano. 🚶",
         "tr": "¡Кэ бьен! Эс муй са́но.",
         "ru": "Здорово! Это очень полезно."
        }
       ],
       "ir": "tiempo",
       "dato": "Транспорт",
       "datoValor": "a pie"
      },
      {
       "etiqueta": "На метро",
       "claves": [
        "metro"
       ],
       "resp": [
        {
         "es": "¡Como yo! 🚇",
         "tr": "¡Ко́мо йо!",
         "ru": "Как я!"
        }
       ],
       "ir": "tiempo",
       "dato": "Транспорт",
       "datoValor": "en metro"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "autobus",
        "coche",
        "bici",
        "tren",
        "moto",
        "taxi",
        "tranvia",
        "en"
       ],
       "resp": [
        {
         "es": "¡Vale! 👍",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "tiempo",
       "dato": "Транспорт"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 👍",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "tiempo",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Voy en metro. Son quince minutos. 🚇",
       "tr": "Бой эн мэ́тро. Сон ки́нсэ мину́тос.",
       "ru": "Я езжу на метро. Дорога занимает пятнадцать минут. 🚇"
      }
     ],
     "aTiTema": "transporte_l",
     "retomar": {
      "es": "¿Cómo vas al trabajo?",
      "tr": "¿Ко́мо бас ал траба́хо?",
      "ru": "Как ты добираешься на работу?"
     }
    },
    {
     "id": "tiempo",
     "titulo": "Сколько времени",
     "bot": [
      {
       "es": "Yo tardo quince minutos. ⏱️ ¿Cuánto tardas tú?",
       "tr": "Йо та́рдо ки́нсэ мину́тос. ⏱ ¿Куа́нто та́рдас ту?",
       "ru": "У меня уходит пятнадцать минут. А у тебя сколько?"
      }
     ],
     "ideas": [
      {
       "es": "Tardo diez minutos.",
       "ru": "Десять минут."
      },
      {
       "es": "Tardo una hora.",
       "ru": "Час."
      },
      {
       "es": "Media hora.",
       "ru": "Полчаса."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Долго",
       "claves": [
        "hora",
        "horas"
       ],
       "resp": [
        {
         "es": "¡Uf, mucho tiempo! 😮",
         "tr": "¡Уф, му́чо тье́мпо!",
         "ru": "Ох, долго!"
        }
       ],
       "ir": "billete",
       "dato": "Дорога"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "minuto",
        "tardo",
        "media",
        "poco"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "billete",
       "dato": "Дорога"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "billete",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuánto tardas?",
      "tr": "¿Куа́нто та́рдас?",
      "ru": "Сколько времени у тебя уходит?"
     }
    },
    {
     "id": "billete",
     "titulo": "Билет",
     "bot": [
      {
       "es": "En Barcelona hay una tarjeta para el metro y el autobús. 🎫 ¿En tu ciudad hay metro?",
       "tr": "Эн Барсэло́на ай у́на тархэ́та па́ра эл мэ́тро и эл аутобу́с. ¿Эн ту сьюда́д ай мэ́тро?",
       "ru": "В Барселоне есть единая транспортная карта для метро и автобуса. 🎫 А в твоём городе есть метро?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, hay metro.",
       "ru": "Да, есть метро."
      },
      {
       "es": "No, no hay metro.",
       "ru": "Нет, метро нет."
      },
      {
       "es": "Sí, el metro de Moscú es muy bonito.",
       "ru": "Да, московское метро очень красивое."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Москва",
       "claves": [
        "moscu"
       ],
       "resp": [
        {
         "es": "¡Sí! Ana dice que el metro de Moscú es precioso. 😍",
         "tr": "¡Си! А́на ди́сэ кэ эл мэ́тро дэ Моску́ эс прэсьо́со.",
         "ru": "Да! Аня говорит, что московское метро — просто чудо."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "no hay"
       ],
       "resp": [
        {
         "es": "¿No? ¡Entonces, a pie o en autobús! 😄",
         "tr": "¿Но? ¡Энто́нсэс, а пье о эн аутобу́с!",
         "ru": "Нет? Тогда пешком или на автобусе!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "hay metro",
        "hay"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 🚇",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿En tu ciudad hay metro?",
      "tr": "¿Эн ту сьюда́д ай мэ́тро?",
      "ru": "В твоём городе есть метро?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-llegar",
   "desde": 6,
   "titulo": "¿Cómo llego a…?",
   "tituloRu": "Как пройти к…?",
   "resumen": "Спросить и объяснить дорогу: gira, sigue, cruza",
   "intro": "Лусия ждёт тебя в кафе. Спроси дорогу, а потом объясни её сама!",
   "inicio": "pregunta",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pregunta",
     "titulo": "Спроси дорогу",
     "bot": [
      {
       "es": "¡Estoy en un café en la plaza del Sol! ☕ ¿Vienes?",
       "tr": "¡Эсто́й эн ун кафэ́ эн ла пла́са дэл Сол! ¿Бье́нэс?",
       "ru": "Я в кафе на площади Солнца! Придёшь?"
      },
      {
       "es": "¿Qué me preguntas para llegar? 🙂",
       "tr": "¿Кэ мэ прэгу́нтас па́ра ега́р?",
       "ru": "Что ты у меня спросишь, чтобы дойти?"
      }
     ],
     "ideas": [
      {
       "es": "¿Cómo llego a la plaza?",
       "ru": "Как дойти до площади?"
      },
      {
       "es": "¿Dónde está el café?",
       "ru": "Где кафе?"
      },
      {
       "es": "¿Está lejos?",
       "ru": "Это далеко?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Спрашивает",
       "claves": [
        "como llego",
        "donde esta",
        "lejos",
        "cerca",
        "como voy",
        "por donde"
       ],
       "resp": [],
       "ir": "indicaciones"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Pregunta: «¿Cómo llego a la plaza?».",
         "tr": "Прэгу́нта: «¿Ко́мо е́го а ла пла́са?».",
         "ru": "Спроси: «¿Cómo llego a la plaza?»"
        }
       ],
       "ir": "indicaciones",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "Что ты спросишь?"
     }
    },
    {
     "id": "indicaciones",
     "titulo": "Объяснение",
     "bot": [
      {
       "es": "Está cerca. Sal del metro, sigue todo recto y gira a la derecha en la segunda calle. 🗺️ ¿A la derecha o a la izquierda?",
       "tr": "Эста́ сэ́рка. Сал дэл мэ́тро, си́гэ то́до рэ́кто и хи́ра а ла дэрэ́ча эн ла сэгу́нда ка́е. ¿А ла дэрэ́ча о а ла искье́рда?",
       "ru": "Это близко. Выйди из метро, иди прямо и поверни направо на второй улице. Направо или налево?"
      }
     ],
     "ideas": [
      {
       "es": "A la derecha.",
       "ru": "Направо."
      },
      {
       "es": "A la izquierda.",
       "ru": "Налево."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Направо",
       "claves": [
        "derecha"
       ],
       "resp": [
        {
         "es": "¡Sí! A la derecha. 👍",
         "tr": "¡Си! А ла дэрэ́ча.",
         "ru": "Да! Направо."
        }
       ],
       "ir": "explica"
      },
      {
       "etiqueta": "Налево",
       "claves": [
        "izquierda"
       ],
       "resp": [
        {
         "es": "No, no: ¡a la derecha! 😄",
         "tr": "Но, но: ¡а ла дэрэ́ча!",
         "ru": "Нет-нет: направо!"
        }
       ],
       "ir": "explica"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "A la derecha. 😉",
         "tr": "А ла дэрэ́ча.",
         "ru": "Направо."
        }
       ],
       "ir": "explica",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A la derecha o a la izquierda?",
      "tr": "¿А ла дэрэ́ча о а ла искье́рда?",
      "ru": "Направо или налево?"
     }
    },
    {
     "id": "explica",
     "titulo": "Теперь объясняешь ты",
     "bot": [
      {
       "es": "Ahora tú: yo estoy en tu casa y quiero ir a la tienda más cercana. ¿Cómo llego? 🏪",
       "tr": "Ао́ра ту: йо эсто́й эн ту ка́са и кье́ро ир а ла тье́нда мас сэрка́на. ¿Ко́мо е́го?",
       "ru": "Теперь ты: я у тебя дома и хочу дойти до ближайшего магазина. Как мне дойти?"
      }
     ],
     "ideas": [
      {
       "es": "Sal de casa y gira a la izquierda.",
       "ru": "Выйди из дома и поверни налево."
      },
      {
       "es": "Sigue recto y cruza la calle.",
       "ru": "Иди прямо и перейди улицу."
      },
      {
       "es": "Está al lado, a la derecha.",
       "ru": "Он рядом, справа."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Imperativo",
       "claves": [
        "gira",
        "sigue",
        "cruza",
        "sal",
        "coge",
        "toma",
        "baja",
        "sube",
        "ve "
       ],
       "resp": [
        {
         "es": "¡Perfecto! ¡Muy claro! 👍",
         "tr": "¡Пэрфэ́кто! ¡Муй кла́ро!",
         "ru": "Отлично! Очень понятно!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Giras / sigues (настоящее)",
       "claves": [
        "giras",
        "sigues",
        "cruzas",
        "sales",
        "coges"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉 También: «gira», «sigue», «cruza».",
         "tr": "¡Ба́лэ! Тамбье́н: «хи́ра», «си́гэ», «кру́са».",
         "ru": "Понятно! Ещё можно: «gira», «sigue», «cruza»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Рядом",
       "claves": [
        "al lado",
        "cerca",
        "enfrente",
        "derecha",
        "izquierda",
        "recto"
       ],
       "resp": [
        {
         "es": "¡Vale, gracias! 😊",
         "tr": "¡Ба́лэ, гра́сьяс!",
         "ru": "Понятно, спасибо!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale, gracias! 😊",
         "tr": "¡Ба́лэ, гра́сьяс!",
         "ru": "Понятно, спасибо!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo llego a la tienda?",
      "tr": "¿Ко́мо е́го а ла тье́нда?",
      "ru": "Как дойти до магазина?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Te espero en el café, {nombre}! 👋",
       "tr": "¡Тэ эспэ́ро эн эл кафэ́, {nombre}!",
       "ru": "Жду тебя в кафе, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-planes",
   "desde": 6,
   "titulo": "¿Qué vas a hacer?",
   "tituloRu": "Что ты собираешься делать?",
   "resumen": "Ir a + infinitivo: планы на вечер и на выходные",
   "intro": "Лусия рассказывает о своих планах. Ir a + infinitivo: «voy a ver una película».",
   "inicio": "esta_noche",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "esta_noche",
     "titulo": "Сегодня вечером",
     "bot": [
      {
       "es": "Esta noche voy a ver una película con Ana. 🎬",
       "tr": "Э́ста но́чэ бой а бэр у́на пэли́кула кон А́на.",
       "ru": "Сегодня вечером я буду смотреть фильм с Аней."
      },
      {
       "es": "¿Y tú? ¿Qué vas a hacer esta noche?",
       "tr": "¿И ту? ¿Кэ бас а асэ́р э́ста но́чэ?",
       "ru": "А ты? Что ты собираешься делать вечером?"
      }
     ],
     "ideas": [
      {
       "es": "Voy a estudiar.",
       "ru": "Я буду заниматься."
      },
      {
       "es": "Voy a cenar con amigos.",
       "ru": "Я поужинаю с друзьями."
      },
      {
       "es": "Voy a descansar.",
       "ru": "Я буду отдыхать."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Voy + infinitivo (без a)",
       "claves": [
        "=voy estudiar",
        "=voy cenar",
        "=voy descansar",
        "=voy ver",
        "=voy dormir",
        "=voy trabajar"
       ],
       "resp": [
        {
         "es": "😉 «Voy a estudiar», con «a».",
         "tr": "«Бой а эстудья́р», кон «а».",
         "ru": "«Voy a estudiar» — с «a»."
        }
       ],
       "ir": "finde",
       "dato": "Вечер"
      },
      {
       "etiqueta": "Ir a + infinitivo",
       "claves": [
        "voy a",
        "vamos a"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "finde",
       "dato": "Вечер"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Voy a + …»: «Voy a descansar».",
         "tr": "Ди: «Бой а + …»: «Бой а дэсканса́р».",
         "ru": "Скажи: «Voy a + …»: «Voy a descansar»."
        }
       ],
       "ir": "finde",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué vas a hacer esta noche?",
      "tr": "¿Кэ бас а асэ́р э́ста но́чэ?",
      "ru": "Что ты собираешься делать вечером?"
     }
    },
    {
     "id": "finde",
     "titulo": "На выходных",
     "bot": [
      {
       "es": "El fin de semana voy a ir a la playa. 🏖️ ¿Vas a hacer algo especial?",
       "tr": "Эл фин дэ сэма́на бой а ир а ла пла́я. ¿Бас а асэ́р а́лго эспэсья́л?",
       "ru": "На выходных я поеду на пляж. А ты собираешься сделать что-нибудь особенное?"
      }
     ],
     "ideas": [
      {
       "es": "Voy a visitar a mi familia.",
       "ru": "Я поеду к родным."
      },
      {
       "es": "Voy a ir al cine.",
       "ru": "Я пойду в кино."
      },
      {
       "es": "No, voy a estar en casa.",
       "ru": "Нет, буду дома."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дома",
       "claves": [
        "en casa",
        "=no",
        "nada"
       ],
       "resp": [
        {
         "es": "¡También está bien! 😌",
         "tr": "¡Тамбье́н эста́ бьен!",
         "ru": "Тоже неплохо!"
        }
       ],
       "ir": "ana",
       "dato": "Выходные"
      },
      {
       "etiqueta": "Ir a + infinitivo",
       "claves": [
        "voy a",
        "vamos a"
       ],
       "resp": [
        {
         "es": "¡Qué plan tan bueno! 😄",
         "tr": "¡Кэ план тан буэ́но!",
         "ru": "Отличный план!"
        }
       ],
       "ir": "ana",
       "dato": "Выходные"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Vas a hacer algo especial?",
      "tr": "¿Бас а асэ́р а́лго эспэсья́л?",
      "ru": "Собираешься сделать что-нибудь особенное?"
     }
    },
    {
     "id": "ana",
     "titulo": "Планы Ани",
     "bot": [
      {
       "es": "Ana tiene un examen el lunes. ¿Qué va a hacer el domingo? 🤔",
       "tr": "А́на тье́нэ ун экса́мэн эл лу́нэс. ¿Кэ ба а асэ́р эл доми́нго?",
       "ru": "У Ани экзамен в понедельник. Что она будет делать в воскресенье?"
      }
     ],
     "ideas": [
      {
       "es": "Va a estudiar.",
       "ru": "Она будет заниматься."
      },
      {
       "es": "Va a estudiar mucho.",
       "ru": "Она будет много заниматься."
      },
      {
       "es": "Va a ir a la playa.",
       "ru": "Она поедет на пляж."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Учиться",
       "claves": [
        "va a estudiar",
        "estudiar"
       ],
       "resp": [
        {
         "es": "¡Sí! ¡Pobre Ana! 📚😅",
         "tr": "¡Си! ¡По́брэ А́на!",
         "ru": "Да! Бедная Аня!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Va a + другое",
       "claves": [
        "va a"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! No, creo que va a estudiar. 😄",
         "tr": "¡Ха, ха! Но, крэ́о кэ ба а эстудья́р.",
         "ru": "Ха-ха! Нет, думаю, она будет заниматься."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Va a estudiar. 📚",
         "tr": "Ба а эстудья́р.",
         "ru": "Она будет заниматься."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué va a hacer Ana?",
      "tr": "¿Кэ ба а асэ́р А́на?",
      "ru": "Что будет делать Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-salud",
   "desde": 6,
   "titulo": "Me duele…",
   "tituloRu": "У меня болит…",
   "resumen": "Здоровье: me duele, estoy enfermo, la farmacia",
   "intro": "Лусия сегодня плохо себя чувствует. Спроси, что с ней, и дай совет.",
   "inicio": "mal",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "mal",
     "titulo": "Что случилось",
     "bot": [
      {
       "es": "Hoy no voy a clase. Estoy enferma. 🤒",
       "tr": "Ой но бой а кла́сэ. Эсто́й энфэ́рма.",
       "ru": "Сегодня я не иду на занятия. Я заболела."
      }
     ],
     "ideas": [
      {
       "es": "¿Qué te pasa?",
       "ru": "Что с тобой?"
      },
      {
       "es": "¿Qué te duele?",
       "ru": "Что у тебя болит?"
      },
      {
       "es": "¡Oh, lo siento!",
       "ru": "Ой, сочувствую!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Спрашивает",
       "claves": [
        "que te pasa",
        "que te duele",
        "que tienes",
        "estas bien",
        "que pasa"
       ],
       "resp": [
        {
         "es": "Me duele la cabeza y la garganta. 😷",
         "tr": "Мэ дуэ́лэ ла кабэ́са и ла гарга́нта.",
         "ru": "У меня болит голова и горло."
        }
       ],
       "ir": "consejo"
      },
      {
       "etiqueta": "Сочувствует",
       "claves": [
        "lo siento",
        "pobre",
        "oh"
       ],
       "resp": [
        {
         "es": "Gracias… Me duele la cabeza y la garganta. 😷",
         "tr": "Гра́сьяс… Мэ дуэ́лэ ла кабэ́са и ла гарга́нта.",
         "ru": "Спасибо… У меня болит голова и горло."
        }
       ],
       "ir": "consejo"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Me duele la cabeza y la garganta. 😷",
         "tr": "Мэ дуэ́лэ ла кабэ́са и ла гарга́нта.",
         "ru": "У меня болит голова и горло."
        }
       ],
       "ir": "consejo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "Что ты спросишь?"
     }
    },
    {
     "id": "consejo",
     "titulo": "Совет",
     "bot": [
      {
       "es": "¿Qué hago? 🤔",
       "tr": "¿Кэ а́го?",
       "ru": "Что мне делать?"
      }
     ],
     "ideas": [
      {
       "es": "Tienes que descansar.",
       "ru": "Тебе надо отдохнуть."
      },
      {
       "es": "Toma un té con miel.",
       "ru": "Выпей чаю с мёдом."
      },
      {
       "es": "Ve al médico.",
       "ru": "Сходи к врачу."
      },
      {
       "es": "Bebe mucha agua.",
       "ru": "Пей много воды."
      }
     ],
     "ramas": [
      {
       "etiqueta": "К врачу",
       "claves": [
        "medico",
        "doctor",
        "farmacia"
       ],
       "resp": [
        {
         "es": "Sí, tienes razón. Voy a pedir cita. 📞",
         "tr": "Си, тье́нэс расо́н. Бой а пэди́р си́та.",
         "ru": "Да, ты прав(а). Запишусь к врачу."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "tienes que",
        "debes",
        "toma",
        "bebe",
        "descansa",
        "duerme",
        "quedate",
        "te"
       ],
       "resp": [
        {
         "es": "¡Buena idea! Gracias. 😊",
         "tr": "¡Буэ́на идэ́а! Гра́сьяс.",
         "ru": "Хорошая идея! Спасибо."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Mmm… Voy a descansar. 😴",
         "tr": "Ммм… Бой а дэсканса́р.",
         "ru": "Хм… Пойду отдыхать."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hago?",
      "tr": "¿Кэ а́го?",
      "ru": "Что мне делать?"
     }
    },
    {
     "id": "tu",
     "titulo": "А ты?",
     "bot": [
      {
       "es": "¿Y tú? ¿Estás bien? ¿Te duele algo?",
       "tr": "¿И ту? ¿Эста́с бьен? ¿Тэ дуэ́лэ а́лго?",
       "ru": "А ты? Ты в порядке? У тебя что-нибудь болит?"
      }
     ],
     "ideas": [
      {
       "es": "Estoy bien, gracias.",
       "ru": "Я в порядке, спасибо."
      },
      {
       "es": "Me duele un poco la espalda.",
       "ru": "У меня немного болит спина."
      },
      {
       "es": "No, no me duele nada.",
       "ru": "Нет, ничего не болит."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me duelen (мн. ч.)",
       "claves": [
        "me duelen"
       ],
       "resp": [
        {
         "es": "¡Oh! ¡Pues los dos a descansar! 😅",
         "tr": "¡О! ¡Пуэс лос дос а дэсканса́р!",
         "ru": "Ой! Ну тогда обоим отдыхать!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Yo duele (ошибка)",
       "claves": [
        "=yo duele",
        "mi duele",
        "yo me duele"
       ],
       "resp": [
        {
         "es": "😉 «Me duele la espalda». ¡Descansa tú también!",
         "tr": "«Мэ дуэ́лэ ла эспа́лда». ¡Дэска́нса ту тамбье́н!",
         "ru": "«Me duele la espalda». Ты тоже отдохни!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Болит",
       "claves": [
        "me duele",
        "enfermo",
        "enferma",
        "mal"
       ],
       "resp": [
        {
         "es": "¡Oh! ¡Pues los dos a descansar! 😅",
         "tr": "¡О! ¡Пуэс лос дос а дэсканса́р!",
         "ru": "Ой! Ну тогда обоим отдыхать!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Всё хорошо",
       "claves": [
        "bien",
        "nada",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как хорошо!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te duele algo?",
      "tr": "¿Тэ дуэ́лэ а́лго?",
      "ru": "У тебя что-нибудь болит?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Gracias, {nombre}! Me voy a la cama. 😴",
       "tr": "¡Гра́сьяс, {nombre}! Мэ бой а ла ка́ма.",
       "ru": "Спасибо, {nombre}! Пойду спать. 😴"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-consejos",
   "desde": 6,
   "titulo": "Consejos",
   "tituloRu": "Советы",
   "resumen": "Советы и просьбы: tienes que, debes, императив",
   "intro": "Подруга Лусии из России приезжает в Барселону. Какие советы ей дать?",
   "inicio": "amiga",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "amiga",
     "titulo": "Подруга едет",
     "bot": [
      {
       "es": "Una amiga rusa de Ana va a vivir en Barcelona. 🧳",
       "tr": "У́на ами́га ру́са дэ А́на ба а биби́р эн Барсэло́на.",
       "ru": "Подруга Ани из России будет жить в Барселоне."
      },
      {
       "es": "Ella no habla español. ¿Qué tiene que hacer?",
       "tr": "Э́я но а́бла эспаньо́л. ¿Кэ тье́нэ кэ асэ́р?",
       "ru": "Она не говорит по-испански. Что ей надо делать?"
      }
     ],
     "ideas": [
      {
       "es": "Tiene que estudiar español.",
       "ru": "Ей надо учить испанский."
      },
      {
       "es": "Debe hablar con la gente.",
       "ru": "Ей стоит говорить с людьми."
      },
      {
       "es": "Puede usar Abecé.",
       "ru": "Она может заниматься в Abecé."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Abecé",
       "claves": [
        "abece"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Claro! 😄",
         "tr": "¡Ха, ха! ¡Кла́ро!",
         "ru": "Ха-ха! Конечно!"
        }
       ],
       "ir": "imperativo"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "tiene que",
        "debe",
        "puede",
        "hay que",
        "necesita",
        "estudiar",
        "hablar",
        "clase"
       ],
       "resp": [
        {
         "es": "¡Muy buen consejo! 👍",
         "tr": "¡Муй буэн консэ́хо!",
         "ru": "Очень хороший совет!"
        }
       ],
       "ir": "imperativo"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "imperativo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué tiene que hacer?",
      "tr": "¿Кэ тье́нэ кэ асэ́р?",
      "ru": "Что ей надо делать?"
     }
    },
    {
     "id": "imperativo",
     "titulo": "Скажи ей",
     "bot": [
      {
       "es": "Ahora habla con ella. Un consejo con «tú»: «Estudia…», «Habla…», «Ve…». 💬",
       "tr": "Ао́ра а́бла кон э́я. Ун консэ́хо кон «ту»: «Эсту́дья…», «А́бла…», «Бэ…».",
       "ru": "Теперь поговори с ней. Дай ей совет на «ты»: «Estudia…», «Habla…», «Ve…»."
      }
     ],
     "ideas": [
      {
       "es": "Estudia español todos los días.",
       "ru": "Учи испанский каждый день."
      },
      {
       "es": "Habla con la gente.",
       "ru": "Говори с людьми."
      },
      {
       "es": "Ve a clases de español.",
       "ru": "Ходи на уроки испанского."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Imperativo",
       "claves": [
        "estudia",
        "habla",
        "ve ",
        "=ve",
        "lee",
        "escucha",
        "aprende",
        "come",
        "sal",
        "toma",
        "coge",
        "camina",
        "pregunta",
        "mira",
        "escribe",
        "practica",
        "busca"
       ],
       "resp": [
        {
         "es": "¡Perfecto! «Estudia», «habla»: es el imperativo. 👍",
         "tr": "¡Пэрфэ́кто! «Эсту́дья», «а́бла»: эс эл импэрати́бо.",
         "ru": "Отлично! «Estudia», «habla» — это повелительное наклонение."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Tienes que…",
       "claves": [
        "tienes que",
        "debes"
       ],
       "resp": [
        {
         "es": "¡Muy bien! Y también: «estudia», «habla». 😉",
         "tr": "¡Муй бьен! И тамбье́н: «эсту́дья», «а́бла».",
         "ru": "Отлично! А ещё можно: «estudia», «habla»."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Por ejemplo: «Habla con la gente».",
         "tr": "Пор эхэ́мпло: «А́бла кон ла хэ́нтэ».",
         "ru": "Например: «Habla con la gente»."
        }
       ],
       "ir": "metro",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Un consejo con «tú».",
      "tr": "Ун консэ́хо кон «ту».",
      "ru": "Совет на «ты»."
     }
    },
    {
     "id": "metro",
     "titulo": "Tómalo",
     "bot": [
      {
       "es": "Y el metro: ¿«cógelo» o «lo coge»? Ella pregunta: «¿Cojo el metro?» y tú dices… 🚇",
       "tr": "И эл мэ́тро: ¿«ко́хэло» о «ло ко́хэ»? Э́я прэгу́нта: «¿Ко́хо эл мэ́тро?» и ту ди́сэс…",
       "ru": "А как сказать про метро: «cógelo» или «lo coge»? Она спрашивает: «¿Cojo el metro?», а ты отвечаешь… 🚇"
      }
     ],
     "ideas": [
      {
       "es": "Sí, cógelo.",
       "ru": "Да, садись на него."
      },
      {
       "es": "Sí, lo coge.",
       "ru": "Да, он садится."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Cógelo",
       "claves": [
        "cogelo",
        "tomalo"
       ],
       "resp": [
        {
         "es": "¡Sí! «Lo» va pegado: «cógelo». 👍",
         "tr": "¡Си! «Ло» ба пэга́до: «ко́хэло».",
         "ru": "Да! «Lo» пишется слитно: «cógelo»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Lo coge",
       "claves": [
        "lo coge",
        "lo coges"
       ],
       "resp": [
        {
         "es": "Mmm… Con el imperativo, junto: «cógelo». 😉",
         "tr": "Ммм… Кон эл импэрати́бо, ху́нто: «ко́хэло».",
         "ru": "Хм… С императивом — слитно: «cógelo»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«¡Cógelo!» 😉",
         "tr": "«¡Ко́хэло!»",
         "ru": "«¡Cógelo!»"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cógelo o lo coge?",
      "tr": "¿Ко́хэло о ло ко́хэ?",
      "ru": "Cógelo или lo coge?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u6-barcelona",
   "desde": 6,
   "titulo": "Un día en Barcelona",
   "tituloRu": "День в Барселоне",
   "resumen": "Ir a / estar en / venir de: план прогулки по Барселоне",
   "intro": "Ты приезжаешь в Барселону! Лусия предлагает план. Помни: «voy a Barcelona», «estoy en Barcelona».",
   "inicio": "llegas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "llegas",
     "titulo": "Ты приезжаешь",
     "bot": [
      {
       "es": "¡Vienes a Barcelona el sábado! 🎉",
       "tr": "¡Бье́нэс а Барсэло́на эл са́бадо!",
       "ru": "Ты приезжаешь в Барселону в субботу!"
      },
      {
       "es": "¿De dónde vienes? ¿Y cómo vienes, en avión o en tren?",
       "tr": "¿Дэ до́ндэ бье́нэс? ¿И ко́мо бье́нэс, эн абьо́н о эн трэн?",
       "ru": "Откуда ты приезжаешь? И на чём — на самолёте или на поезде?"
      }
     ],
     "ideas": [
      {
       "es": "Vengo de Madrid en tren.",
       "ru": "Я еду из Мадрида на поезде."
      },
      {
       "es": "Vengo de Moscú en avión.",
       "ru": "Я прилетаю из Москвы на самолёте."
      },
      {
       "es": "Vengo en avión.",
       "ru": "Я прилетаю на самолёте."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Voy en / Voy a (ошибка)",
       "claves": [
        "=voy en barcelona",
        "estoy a barcelona"
       ],
       "resp": [
        {
         "es": "😉 «Voy a Barcelona», «estoy en Barcelona».",
         "tr": "«Бой а Барсэло́на», «эсто́й эн Барсэло́на».",
         "ru": "«Voy a Barcelona», «estoy en Barcelona»."
        }
       ],
       "ir": "sitios"
      },
      {
       "etiqueta": "Самолёт",
       "claves": [
        "avion"
       ],
       "resp": [
        {
         "es": "¡Vale! Del aeropuerto, coge el metro o el autobús. ✈️",
         "tr": "¡Ба́лэ! Дэл аэропуэ́рто, ко́хэ эл мэ́тро о эл аутобу́с.",
         "ru": "Хорошо! Из аэропорта садись на метро или автобус."
        }
       ],
       "ir": "sitios",
       "dato": "Приезд"
      },
      {
       "etiqueta": "Поезд",
       "claves": [
        "tren"
       ],
       "resp": [
        {
         "es": "¡Vale! El tren llega a la estación de Sants. 🚆",
         "tr": "¡Ба́лэ! Эл трэн е́га а ла эстасьо́н дэ Сантс.",
         "ru": "Хорошо! Поезд приходит на вокзал Сантс."
        }
       ],
       "ir": "sitios",
       "dato": "Приезд"
      },
      {
       "etiqueta": "Откуда",
       "claves": [
        "vengo",
        "de"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "sitios",
       "dato": "Приезд"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "sitios",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿De dónde vienes y cómo?",
      "tr": "¿Дэ до́ндэ бье́нэс и ко́мо?",
      "ru": "Откуда ты едешь и как?"
     }
    },
    {
     "id": "sitios",
     "titulo": "Что посмотреть",
     "bot": [
      {
       "es": "Por la mañana vamos a ir a la Sagrada Familia, y por la tarde a la playa o al parque Güell. ¿Qué prefieres? 🏛️🏖️",
       "tr": "Пор ла маня́на ба́мос а ир а ла Сагра́да Фами́лья, и пор ла та́рдэ а ла пла́я о ал па́ркэ Гуэй. ¿Кэ прэфье́рэс?",
       "ru": "Утром пойдём к храму Саграда Фамилия, а после обеда — на пляж или в парк Гуэль. Что тебе больше нравится?"
      }
     ],
     "ideas": [
      {
       "es": "Prefiero la playa.",
       "ru": "Лучше пляж."
      },
      {
       "es": "Prefiero el parque.",
       "ru": "Лучше парк."
      },
      {
       "es": "¡Los dos!",
       "ru": "И то, и другое!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Оба",
       "claves": [
        "los dos",
        "todo",
        "las dos"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! Vale, ¡vamos a caminar mucho! 🚶‍♀️",
         "tr": "¡Ха, ха! Ба́лэ, ¡ба́мос а камина́р му́чо!",
         "ru": "Ха-ха! Ладно, будем много ходить!"
        }
       ],
       "ir": "comer",
       "dato": "Прогулка",
       "datoValor": "todo"
      },
      {
       "etiqueta": "Пляж",
       "claves": [
        "playa"
       ],
       "resp": [
        {
         "es": "¡La playa! ¡Me encanta! 🏖️",
         "tr": "¡Ла пла́я! ¡Мэ энка́нта!",
         "ru": "Пляж! Обожаю!"
        }
       ],
       "ir": "comer",
       "dato": "Прогулка",
       "datoValor": "la playa"
      },
      {
       "etiqueta": "Парк",
       "claves": [
        "parque",
        "guell"
       ],
       "resp": [
        {
         "es": "¡El parque Güell es precioso! 😍",
         "tr": "¡Эл па́ркэ Гуэй эс прэсьо́со!",
         "ru": "Парк Гуэль — просто чудо!"
        }
       ],
       "ir": "comer",
       "dato": "Прогулка",
       "datoValor": "el parque"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale, vamos a ver! 😄",
         "tr": "¡Ба́лэ, ба́мос а бэр!",
         "ru": "Ладно, посмотрим!"
        }
       ],
       "ir": "comer",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿La playa o el parque?",
      "tr": "¿Ла пла́я о эл па́ркэ?",
      "ru": "Пляж или парк?"
     }
    },
    {
     "id": "comer",
     "titulo": "Где встречаемся",
     "bot": [
      {
       "es": "¿Quedamos en la estación o en mi casa? 🤔",
       "tr": "¿Кэда́мос эн ла эстасьо́н о эн ми ка́са?",
       "ru": "Встретимся на вокзале или у меня дома?"
      }
     ],
     "ideas": [
      {
       "es": "En la estación.",
       "ru": "На вокзале."
      },
      {
       "es": "En tu casa.",
       "ru": "У тебя дома."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Вокзал",
       "claves": [
        "estacion",
        "aeropuerto"
       ],
       "resp": [
        {
         "es": "¡Vale! Te espero allí. 😊",
         "tr": "¡Ба́лэ! Тэ эспэ́ро айи́.",
         "ru": "Хорошо! Буду ждать тебя там."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Дома",
       "claves": [
        "casa"
       ],
       "resp": [
        {
         "es": "¡Vale! Vivo en Gràcia: coge el metro, línea verde. 🚇",
         "tr": "¡Ба́лэ! Би́бо эн Грàсья: ко́хэ эл мэ́тро, ли́нэа бэ́рдэ.",
         "ru": "Хорошо! Я живу в Грасии: доберись на метро по зелёной линии. 🚇"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! Te espero en la estación. 😊",
         "tr": "¡Ба́лэ! Тэ эспэ́ро эн ла эстасьо́н.",
         "ru": "Хорошо! Буду ждать тебя на вокзале."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿En la estación o en mi casa?",
      "tr": "¿Эн ла эстасьо́н о эн ми ка́са?",
      "ru": "На вокзале или у меня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Hasta el sábado, {nombre}! 🎉",
       "tr": "¡А́ста эл са́бадо, {nombre}!",
       "ru": "До субботы, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-quedamos",
   "desde": 7,
   "titulo": "¿Quedamos?",
   "tituloRu": "Встретимся?",
   "resumen": "Договориться о встрече: ¿te apetece…?, ¿quedamos…?",
   "intro": "Лусия хочет встретиться. Договоритесь: что, когда и где.",
   "inicio": "propone",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "propone",
     "titulo": "Предложение",
     "bot": [
      {
       "es": "¿Qué tal la semana? 😊",
       "tr": "¿Кэ тал ла сэма́на?",
       "ru": "Как проходит неделя?"
      },
      {
       "es": "¿Te apetece ir al cine el viernes? 🎬",
       "tr": "¿Тэ апэтэ́сэ ир ал си́нэ эл бье́рнэс?",
       "ru": "Хочешь сходить в кино в пятницу?"
      }
     ],
     "ideas": [
      {
       "es": "¡Sí, me apetece mucho!",
       "ru": "Да, очень хочу!"
      },
      {
       "es": "¡Vale! ¿A qué hora?",
       "ru": "Давай! Во сколько?"
      },
      {
       "es": "Prefiero ir a cenar.",
       "ru": "Я бы предпочёл(а) пойти поужинать."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Другое предложение",
       "claves": [
        "prefiero",
        "mejor",
        "y si"
       ],
       "resp": [
        {
         "es": "¡Vale, buena idea! 😄",
         "tr": "¡Ба́лэ, буэ́на идэ́а!",
         "ru": "Давай, хорошая идея!"
        }
       ],
       "ir": "hora",
       "dato": "План"
      },
      {
       "etiqueta": "Не может",
       "claves": [
        "no puedo",
        "=no"
       ],
       "resp": [
        {
         "es": "¿No puedes? ¡Vaya! ¿Y el sábado? 😊",
         "tr": "¿Но пуэ́дэс? ¡Ба́я! ¿И эл са́бадо?",
         "ru": "Не можешь? Жаль! А в субботу?"
        }
       ],
       "ir": "hora"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "apetece",
        "vale",
        "claro",
        "genial",
        "a que hora"
       ],
       "resp": [
        {
         "es": "¡Genial! 🎉",
         "tr": "¡Хэнья́л!",
         "ru": "Здорово!"
        }
       ],
       "ir": "hora",
       "dato": "План",
       "datoValor": "el cine"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Genial! 🎉",
         "tr": "¡Хэнья́л!",
         "ru": "Здорово!"
        }
       ],
       "ir": "hora",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te apetece?",
      "tr": "¿Тэ апэтэ́сэ?",
      "ru": "Хочешь?"
     }
    },
    {
     "id": "hora",
     "titulo": "Когда",
     "bot": [
      {
       "es": "¿A qué hora quedamos? Yo termino de trabajar a las nueve. 🕘",
       "tr": "¿А кэ о́ра кэда́мос? Йо тэрми́но дэ трабаха́р а лас нуэ́бэ.",
       "ru": "Во сколько встретимся? Я заканчиваю работать в девять."
      }
     ],
     "ideas": [
      {
       "es": "¿Quedamos a las nueve y media?",
       "ru": "Встретимся в полдесятого?"
      },
      {
       "es": "A las diez.",
       "ru": "В десять."
      },
      {
       "es": "¿Te va bien a las diez?",
       "ru": "Тебе удобно в десять?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Предлагает время",
       "claves": [
        "a las",
        "quedamos",
        "nueve",
        "diez",
        "once",
        "te va bien"
       ],
       "resp": [
        {
         "es": "¡Perfecto! 👍",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "donde",
       "dato": "Время встречи"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¿A las nueve y media? ¡Perfecto! 👍",
         "tr": "¿А лас нуэ́бэ и мэ́дья? ¡Пэрфэ́кто!",
         "ru": "В полдесятого? Отлично!"
        }
       ],
       "ir": "donde",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué hora quedamos?",
      "tr": "¿А кэ о́ра кэда́мос?",
      "ru": "Во сколько встретимся?"
     }
    },
    {
     "id": "donde",
     "titulo": "Где",
     "bot": [
      {
       "es": "¿Y dónde quedamos? 📍",
       "tr": "¿И до́ндэ кэда́мос?",
       "ru": "А где встретимся?"
      }
     ],
     "ideas": [
      {
       "es": "En la puerta del cine.",
       "ru": "У входа в кинотеатр."
      },
      {
       "es": "En el metro.",
       "ru": "В метро."
      },
      {
       "es": "En la plaza.",
       "ru": "На площади."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Место",
       "claves": [
        "en la",
        "en el",
        "puerta",
        "metro",
        "plaza",
        "casa",
        "bar",
        "cine"
       ],
       "resp": [
        {
         "es": "¡Vale! ¡Nos vemos allí! 😊",
         "tr": "¡Ба́лэ! ¡Нос бэ́мос айи́!",
         "ru": "Договорились! Увидимся там!"
        }
       ],
       "ir": "ana",
       "dato": "Место встречи"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! En la puerta del cine. 😊",
         "tr": "¡Ба́лэ! Эн ла пуэ́рта дэл си́нэ.",
         "ru": "Договорились! У входа в кинотеатр."
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde quedamos?",
      "tr": "¿До́ндэ кэда́мос?",
      "ru": "Где встретимся?"
     }
    },
    {
     "id": "ana",
     "titulo": "Аня тоже?",
     "bot": [
      {
       "es": "¿Le digo a Ana también? 🙂",
       "tr": "¿Лэ ди́го а А́на тамбье́н?",
       "ru": "Может, позвать Аню тоже? 🙂"
      }
     ],
     "ideas": [
      {
       "es": "¡Sí, claro!",
       "ru": "Да, конечно!"
      },
      {
       "es": "Mejor solo nosotros.",
       "ru": "Лучше только вдвоём."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Только вдвоём",
       "claves": [
        "solo",
        "=no",
        "nosotros"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉",
         "tr": "¡Ба́лэ!",
         "ru": "Ладно!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "claro",
        "vale",
        "dile"
       ],
       "resp": [
        {
         "es": "¡Genial! Le escribo ahora. 📱",
         "tr": "¡Хэнья́л! Лэ эскри́бо ао́ра.",
         "ru": "Здорово! Сейчас ей напишу."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Le escribo! 📱",
         "tr": "¡Лэ эскри́бо!",
         "ru": "Напишу ей!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Le digo a Ana?",
      "tr": "¿Лэ ди́го а А́на?",
      "ru": "Сказать Ане?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Hasta el viernes, {nombre}! 🎬",
       "tr": "¡А́ста эл бье́рнэс, {nombre}!",
       "ru": "До пятницы, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-nopuedo",
   "desde": 7,
   "titulo": "Lo siento, no puedo",
   "tituloRu": "Извини, не могу",
   "resumen": "Отказаться и перенести: lo siento, ¿y si…?, no pasa nada",
   "intro": "Лусия приглашает тебя, а ты занят(а). Вежливо откажись и предложи другой день.",
   "inicio": "invita",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "invita",
     "titulo": "Приглашение",
     "bot": [
      {
       "es": "¿Vienes mañana a mi casa a cenar? Hago tortilla. 🍳",
       "tr": "¿Бье́нэс маня́на а ми ка́са а сэна́р? А́го торти́я.",
       "ru": "Придёшь завтра ко мне на ужин? Я приготовлю тортилью. 🍳"
      }
     ],
     "ideas": [
      {
       "es": "Lo siento, no puedo. Tengo que trabajar.",
       "ru": "Извини, не могу. Мне надо работать."
      },
      {
       "es": "¡Qué pena! Mañana no puedo.",
       "ru": "Как жаль! Завтра не могу."
      },
      {
       "es": "Gracias, pero no puedo.",
       "ru": "Спасибо, но не могу."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отказ с причиной",
       "claves": [
        "porque",
        "tengo que",
        "tengo"
       ],
       "resp": [
        {
         "es": "¡Vaya! No pasa nada. 😊",
         "tr": "¡Ба́я! Но па́са на́да.",
         "ru": "Жаль! Ничего страшного."
        }
       ],
       "ir": "otro_dia",
       "dato": "Причина"
      },
      {
       "etiqueta": "Отказ",
       "claves": [
        "no puedo",
        "lo siento",
        "pena",
        "no",
        "imposible"
       ],
       "resp": [
        {
         "es": "¡Vaya! ¿Por qué? 🤔",
         "tr": "¡Ба́я! ¿Пор кэ?",
         "ru": "Жаль! А почему?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "vale",
        "claro"
       ],
       "resp": [
        {
         "es": "¡Genial! 😄 Pero… ¡imagina que no puedes! ¿Qué dices?",
         "tr": "¡Хэнья́л! Пэ́ро… ¡имахи́на кэ но пуэ́дэс! ¿Кэ ди́сэс?",
         "ru": "Здорово! Но… представь, что не можешь! Что скажешь?"
        }
       ],
       "ir": "porque"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vaya! ¿Por qué? 🤔",
         "tr": "¡Ба́я! ¿Пор кэ?",
         "ru": "Жаль! А почему?"
        }
       ],
       "ir": "porque",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Vienes mañana?",
      "tr": "¿Бье́нэс маня́на?",
      "ru": "Придёшь завтра?"
     }
    },
    {
     "id": "porque",
     "titulo": "Почему",
     "bot": [
      {
       "es": "¿Y por qué no puedes?",
       "tr": "¿И пор кэ но пуэ́дэс?",
       "ru": "А почему не можешь?"
      }
     ],
     "ideas": [
      {
       "es": "Porque tengo que trabajar.",
       "ru": "Потому что мне надо работать."
      },
      {
       "es": "Porque tengo un examen.",
       "ru": "Потому что у меня экзамен."
      },
      {
       "es": "Porque estoy enfermo.",
       "ru": "Потому что я болею."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Причина",
       "claves": [
        "porque",
        "tengo",
        "estoy",
        "voy a"
       ],
       "resp": [
        {
         "es": "¡Vale, no pasa nada! 😊",
         "tr": "¡Ба́лэ, но па́са на́да!",
         "ru": "Ладно, ничего страшного!"
        }
       ],
       "ir": "otro_dia",
       "dato": "Причина"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale, no pasa nada! 😊",
         "tr": "¡Ба́лэ, но па́са на́да!",
         "ru": "Ладно, ничего страшного!"
        }
       ],
       "ir": "otro_dia",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Por qué no puedes?",
      "tr": "¿Пор кэ но пуэ́дэс?",
      "ru": "Почему не можешь?"
     }
    },
    {
     "id": "otro_dia",
     "titulo": "Другой день",
     "bot": [
      {
       "es": "¿Y otro día? ¿Qué día te va bien? 📅",
       "tr": "¿И о́тро ди́а? ¿Кэ ди́а тэ ба бьен?",
       "ru": "А в другой день? Какой день тебе удобен?"
      }
     ],
     "ideas": [
      {
       "es": "¿Y si quedamos el sábado?",
       "ru": "А если в субботу?"
      },
      {
       "es": "El domingo me va bien.",
       "ru": "В воскресенье мне удобно."
      },
      {
       "es": "¿Te va bien el jueves?",
       "ru": "Тебе удобно в четверг?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Предлагает день",
       "claves": [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo",
        "y si",
        "semana"
       ],
       "resp": [
        {
         "es": "¡Perfecto! ¡Tortilla ese día! 🍳😄",
         "tr": "¡Пэрфэ́кто! ¡Торти́я э́сэ ди́а!",
         "ru": "Отлично! Значит, тортилья в тот день!"
        }
       ],
       "ir": "fin",
       "dato": "Новый день"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¿El sábado? ¡Perfecto! 🍳",
         "tr": "¿Эл са́бадо? ¡Пэрфэ́кто!",
         "ru": "В субботу? Отлично!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué día te va bien?",
      "tr": "¿Кэ ди́а тэ ба бьен?",
      "ru": "Какой день тебе удобен?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-parece",
   "desde": 7,
   "titulo": "¿Qué te parece?",
   "tituloRu": "Как тебе?",
   "resumen": "Мнения: me parece, me interesa, a mí también / a mí no",
   "intro": "Лусия и Аня спорят о фильме. А тебе как? «A mí me parece…», «a mí también», «a mí no».",
   "inicio": "pelicula",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pelicula",
     "titulo": "Фильм",
     "bot": [
      {
       "es": "A Ana le encantan las películas de terror. 😱",
       "tr": "А А́на лэ энка́нтан лас пэли́кулас дэ тэрро́р.",
       "ru": "Аня обожает фильмы ужасов."
      },
      {
       "es": "A mí no me gustan nada. ¿Y a ti?",
       "tr": "А ми но мэ гу́стан на́да. ¿И а ти?",
       "ru": "А мне они совсем не нравятся. А тебе?"
      }
     ],
     "ideas": [
      {
       "es": "A mí tampoco.",
       "ru": "Мне тоже нет."
      },
      {
       "es": "A mí sí.",
       "ru": "А мне нравятся."
      },
      {
       "es": "A mí me encantan.",
       "ru": "Я их обожаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "También no (ошибка)",
       "claves": [
        "tambien no",
        "=yo tambien no"
       ],
       "resp": [
        {
         "es": "😉 En español: «a mí tampoco».",
         "tr": "Эн эспаньо́л: «а ми тампо́ко».",
         "ru": "По-испански: «a mí tampoco»."
        }
       ],
       "ir": "interesa",
       "dato": "Фильмы ужасов",
       "datoValor": "no"
      },
      {
       "etiqueta": "Тоже нет",
       "claves": [
        "tampoco",
        "=a mi no",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Como yo! 🙌",
         "tr": "¡Ко́мо йо!",
         "ru": "Как я!"
        }
       ],
       "ir": "interesa",
       "dato": "Фильмы ужасов",
       "datoValor": "no"
      },
      {
       "etiqueta": "Нравятся",
       "claves": [
        "a mi si",
        "encantan",
        "gustan",
        "=si"
       ],
       "resp": [
        {
         "es": "¿Sí? ¡Como Ana! 😄",
         "tr": "¿Си? ¡Ко́мо А́на!",
         "ru": "Да? Как Аня!"
        }
       ],
       "ir": "interesa",
       "dato": "Фильмы ужасов",
       "datoValor": "sí"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "interesa",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te gustan las películas de terror?",
      "tr": "¿Тэ гу́стан лас пэли́кулас дэ тэрро́р?",
      "ru": "Тебе нравятся фильмы ужасов?"
     }
    },
    {
     "id": "interesa",
     "titulo": "Что тебе интересно",
     "bot": [
      {
       "es": "A Ana le interesa mucho la tecnología. A mí me interesan los idiomas. 📚 ¿Y a ti? ¿Qué te interesa?",
       "tr": "А А́на лэ интэрэ́са му́чо ла тэкнолохи́а. А ми мэ интэрэ́сан лос идьо́мас. ¿И а ти? ¿Кэ тэ интэрэ́са?",
       "ru": "Аню очень интересуют технологии. Меня — языки. А тебя? Что тебя интересует?"
      }
     ],
     "ideas": [
      {
       "es": "Me interesa la historia.",
       "ru": "Меня интересует история."
      },
      {
       "es": "Me interesan los idiomas.",
       "ru": "Меня интересуют языки."
      },
      {
       "es": "A mí me interesa el arte.",
       "ru": "Меня интересует искусство."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Yo intereso (ошибка)",
       "claves": [
        "yo intereso",
        "yo interesa",
        "=intereso"
       ],
       "resp": [
        {
         "es": "😉 Como «gustar»: «me interesa».",
         "tr": "Ко́мо «густа́р»: «мэ интэрэ́са».",
         "ru": "Как с «gustar»: «me interesa»."
        }
       ],
       "ir": "opinion",
       "dato": "Интересы"
      },
      {
       "etiqueta": "Языки",
       "claves": [
        "idiomas",
        "lenguas"
       ],
       "resp": [
        {
         "es": "¡Como a mí! 😄",
         "tr": "¡Ко́мо а ми!",
         "ru": "Как и меня!"
        }
       ],
       "ir": "opinion",
       "dato": "Интересы",
       "datoValor": "los idiomas"
      },
      {
       "etiqueta": "Me interesa",
       "claves": [
        "interesa",
        "interesan",
        "gusta",
        "encanta"
       ],
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "opinion",
       "dato": "Интересы"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "opinion",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te interesa?",
      "tr": "¿Кэ тэ интэрэ́са?",
      "ru": "Что тебя интересует?"
     }
    },
    {
     "id": "opinion",
     "titulo": "Мнение",
     "bot": [
      {
       "es": "Y una pregunta difícil: ¿qué te parece el español? ¿Fácil o difícil? 🤔",
       "tr": "И у́на прэгу́нта дифи́сил: ¿кэ тэ парэ́сэ эл эспаньо́л? ¿Фа́сил о дифи́сил?",
       "ru": "И трудный вопрос: как тебе испанский? Лёгкий или трудный?"
      }
     ],
     "ideas": [
      {
       "es": "Me parece fácil.",
       "ru": "По-моему, лёгкий."
      },
      {
       "es": "Me parece difícil, pero bonito.",
       "ru": "По-моему, трудный, но красивый."
      },
      {
       "es": "Me parece muy interesante.",
       "ru": "По-моему, очень интересный."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Трудный",
       "claves": [
        "dificil"
       ],
       "resp": [
        {
         "es": "¡Pero lo hablas muy bien! 😊",
         "tr": "¡Пэ́ро ло а́блас муй бьен!",
         "ru": "Но ты говоришь на нём очень хорошо!"
        }
       ],
       "ir": "fin",
       "dato": "Испанский"
      },
      {
       "etiqueta": "Лёгкий / интересный",
       "claves": [
        "facil",
        "interesante",
        "bonito",
        "me parece",
        "me gusta",
        "me encanta"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😄",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin",
       "dato": "Испанский"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Me parece…».",
         "tr": "Ди: «Мэ парэ́сэ…».",
         "ru": "Скажи: «Me parece…»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te parece el español?",
      "tr": "¿Кэ тэ парэ́сэ эл эспаньо́л?",
      "ru": "Как тебе испанский?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-comparar",
   "desde": 7,
   "titulo": "Comparar ciudades",
   "tituloRu": "Сравнить города",
   "resumen": "Сравнение: más… que, menos… que, tan… como, mejor, peor",
   "intro": "Лусия сравнивает Мадрид и Барселону. А как твой город?",
   "inicio": "madrid",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "madrid",
     "titulo": "Мадрид и Барселона",
     "bot": [
      {
       "es": "Madrid es más grande que Barcelona, pero Barcelona tiene playa. 🏖️",
       "tr": "Мадри́д эс мас гра́ндэ кэ Барсэло́на, пэ́ро Барсэло́на тье́нэ пла́я.",
       "ru": "Мадрид больше Барселоны, но в Барселоне есть пляж."
      },
      {
       "es": "¿Tu ciudad es más grande o más pequeña que Barcelona?",
       "tr": "¿Ту сьюда́д эс мас гра́ндэ о мас пэкэ́ня кэ Барсэло́на?",
       "ru": "Твой город больше или меньше Барселоны?"
      }
     ],
     "ideas": [
      {
       "es": "Es más grande.",
       "ru": "Он больше."
      },
      {
       "es": "Es más pequeña.",
       "ru": "Он меньше."
      },
      {
       "es": "Es tan grande como Barcelona.",
       "ru": "Он такой же большой, как Барселона."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Такой же",
       "claves": [
        "tan",
        "igual",
        "como"
       ],
       "resp": [
        {
         "es": "¡Ah, como Barcelona! 🙂",
         "tr": "¡А, ко́мо Барсэло́на!",
         "ru": "А, как Барселона!"
        }
       ],
       "ir": "tiempo",
       "dato": "Размер города"
      },
      {
       "etiqueta": "Больше / меньше",
       "claves": [
        "mas grande",
        "mas pequen",
        "menos grande",
        "mas"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "tiempo",
       "dato": "Размер города"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Es más grande» o «es más pequeña».",
         "tr": "Ди: «Эс мас гра́ндэ» о «эс мас пэкэ́ня».",
         "ru": "Скажи: «Es más grande» или «es más pequeña»."
        }
       ],
       "ir": "tiempo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Más grande o más pequeña?",
      "tr": "¿Мас гра́ндэ о мас пэкэ́ня?",
      "ru": "Больше или меньше?"
     }
    },
    {
     "id": "tiempo",
     "titulo": "Погода",
     "bot": [
      {
       "es": "¿Y el clima? ¿Hace más frío en tu ciudad que en Barcelona? ❄️☀️",
       "tr": "¿И эл кли́ма? ¿А́сэ мас фри́о эн ту сьюда́д кэ эн Барсэло́на?",
       "ru": "А климат? В твоём городе холоднее, чем в Барселоне?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, hace mucho más frío.",
       "ru": "Да, гораздо холоднее."
      },
      {
       "es": "No, hace más calor.",
       "ru": "Нет, жарче."
      },
      {
       "es": "Hace el mismo tiempo.",
       "ru": "Погода такая же."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Холоднее",
       "claves": [
        "mas frio",
        "=si",
        "mucho mas"
       ],
       "resp": [
        {
         "es": "¡Uf! Aquí en invierno hace diez grados. 😄",
         "tr": "¡Уф! Аки́ эн инбье́рно а́сэ дьес гра́дос.",
         "ru": "Ох! Здесь зимой десять градусов."
        }
       ],
       "ir": "mejor",
       "dato": "Климат"
      },
      {
       "etiqueta": "Жарче / так же",
       "claves": [
        "mas calor",
        "=no",
        "mismo",
        "igual"
       ],
       "resp": [
        {
         "es": "¡Ah, mira! 🙂",
         "tr": "¡А, ми́ра!",
         "ru": "А, вот как!"
        }
       ],
       "ir": "mejor",
       "dato": "Климат"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Ah, mira! 🙂",
         "tr": "¡А, ми́ра!",
         "ru": "А, вот как!"
        }
       ],
       "ir": "mejor",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Hace más frío en tu ciudad?",
      "tr": "¿А́сэ мас фри́о эн ту сьюда́д?",
      "ru": "В твоём городе холоднее?"
     }
    },
    {
     "id": "mejor",
     "titulo": "Mejor / más bueno",
     "bot": [
      {
       "es": "Y ahora: ¿«la comida de aquí es más buena» o «es mejor»? 🤔",
       "tr": "И ао́ра: ¿«ла коми́да дэ аки́ эс мас буэ́на» о «эс мэхо́р»?",
       "ru": "А теперь: «la comida de aquí es más buena» или «es mejor»?"
      }
     ],
     "ideas": [
      {
       "es": "Es mejor.",
       "ru": "Лучше."
      },
      {
       "es": "Es más buena.",
       "ru": "Más buena."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Mejor",
       "claves": [
        "mejor"
       ],
       "resp": [
        {
         "es": "¡Sí! «Mejor», no «más bueno». 👍",
         "tr": "¡Си! «Мэхо́р», но «мас буэ́но».",
         "ru": "Да! «Mejor», а не «más bueno»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Más buena",
       "claves": [
        "mas buen"
       ],
       "resp": [
        {
         "es": "Mmm… Se dice «mejor». 😉 Y «peor», no «más malo».",
         "tr": "Ммм… Сэ ди́сэ «мэхо́р». И «пэо́р», но «мас ма́ло».",
         "ru": "Хм… Говорят «mejor». И «peor», а не «más malo»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Es mejor». 😉",
         "tr": "«Эс мэхо́р».",
         "ru": "«Es mejor»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Más buena o mejor?",
      "tr": "¿Мас буэ́на о мэхо́р?",
      "ru": "Más buena или mejor?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-amigos",
   "desde": 7,
   "titulo": "Amigos y vecinos",
   "tituloRu": "Друзья и соседи",
   "resumen": "Me, te, le, nos, les: llevarse bien, a Ana le…",
   "intro": "Лусия рассказывает о соседях и друзьях. Помни: «a Ana le gusta», а не «a Ana gusta».",
   "inicio": "vecinos",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "vecinos",
     "titulo": "Соседи",
     "bot": [
      {
       "es": "Mis vecinos son muy simpáticos. Me llevo muy bien con ellos. 😊",
       "tr": "Мис бэси́нос сон муй симпа́тикос. Мэ е́бо муй бьен кон э́йос.",
       "ru": "Мои соседи очень милые. Я с ними прекрасно лажу."
      },
      {
       "es": "¿Y tú? ¿Te llevas bien con tus vecinos?",
       "tr": "¿И ту? ¿Тэ е́бас бьен кон тус бэси́нос?",
       "ru": "А ты? Ты ладишь со своими соседями?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me llevo bien con ellos.",
       "ru": "Да, я с ними хорошо лажу."
      },
      {
       "es": "No los conozco.",
       "ru": "Я их не знаю."
      },
      {
       "es": "Más o menos.",
       "ru": "Так себе."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не знает",
       "claves": [
        "no los conozco",
        "no conozco"
       ],
       "resp": [
        {
         "es": "¡Como mucha gente en las ciudades grandes! 🏙️",
         "tr": "¡Ко́мо му́ча хэ́нтэ эн лас сьюда́дэс гра́ндэс!",
         "ru": "Как и многие жители больших городов!"
        }
       ],
       "ir": "ana",
       "dato": "Соседи"
      },
      {
       "etiqueta": "Так себе / плохо",
       "claves": [
        "=mas o menos",
        "mal",
        "regular",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Vaya! 😕",
         "tr": "¡Ба́я!",
         "ru": "Жаль!"
        }
       ],
       "ir": "ana",
       "dato": "Соседи"
      },
      {
       "etiqueta": "Хорошо",
       "claves": [
        "bien",
        "=si",
        "simpatic"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как хорошо!"
        }
       ],
       "ir": "ana",
       "dato": "Соседи"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te llevas bien con tus vecinos?",
      "tr": "¿Тэ е́бас бьен кон тус бэси́нос?",
      "ru": "Ты ладишь с соседями?"
     }
    },
    {
     "id": "ana",
     "titulo": "Подарок для Ани",
     "bot": [
      {
       "es": "El martes es el cumpleaños de Ana. 🎁 A Ana le encantan los libros y la música. ¿Qué le regalo?",
       "tr": "Эл ма́ртэс эс эл кумплэа́ньос дэ А́на. А А́на лэ энка́нтан лос ли́брос и ла му́сика. ¿Кэ лэ рэга́ло?",
       "ru": "Во вторник день рождения Ани. Аня обожает книги и музыку. Что ей подарить?"
      }
     ],
     "ideas": [
      {
       "es": "Regálale un libro.",
       "ru": "Подари ей книгу."
      },
      {
       "es": "Un libro de ciencia ficción.",
       "ru": "Научно-фантастическую книгу."
      },
      {
       "es": "Entradas para un concierto.",
       "ru": "Билеты на концерт."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Концерт",
       "claves": [
        "concierto",
        "entrada"
       ],
       "resp": [
        {
         "es": "¡Qué buena idea! ¡Le va a encantar! 🎶",
         "tr": "¡Кэ буэ́на идэ́а! ¡Лэ ба а энканта́р!",
         "ru": "Отличная идея! Ей понравится!"
        }
       ],
       "ir": "le"
      },
      {
       "etiqueta": "Книга",
       "claves": [
        "libro"
       ],
       "resp": [
        {
         "es": "¡Sí! Le compro un libro. 📚",
         "tr": "¡Си! Лэ ко́мпро ун ли́бро.",
         "ru": "Да! Куплю ей книгу."
        }
       ],
       "ir": "le"
      },
      {
       "etiqueta": "Предлагает",
       "claves": [
        "regala",
        "le",
        "un ",
        "una "
       ],
       "resp": [
        {
         "es": "¡Buena idea! 🎁",
         "tr": "¡Буэ́на идэ́а!",
         "ru": "Хорошая идея!"
        }
       ],
       "ir": "le"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buena idea! 🎁",
         "tr": "¡Буэ́на идэ́а!",
         "ru": "Хорошая идея!"
        }
       ],
       "ir": "le",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le regalo?",
      "tr": "¿Кэ лэ рэга́ло?",
      "ru": "Что ей подарить?"
     }
    },
    {
     "id": "le",
     "titulo": "A Ana le…",
     "bot": [
      {
       "es": "Una pregunta: ¿«a Ana gusta el chocolate» o «a Ana le gusta el chocolate»? 🍫",
       "tr": "У́на прэгу́нта: ¿«а А́на гу́ста эл чокола́тэ» о «а А́на лэ гу́ста эл чокола́тэ»?",
       "ru": "Вопрос: «a Ana gusta el chocolate» или «a Ana le gusta el chocolate»?"
      }
     ],
     "ideas": [
      {
       "es": "A Ana le gusta el chocolate.",
       "ru": "A Ana le gusta el chocolate."
      },
      {
       "es": "A Ana gusta el chocolate.",
       "ru": "A Ana gusta el chocolate."
      }
     ],
     "ramas": [
      {
       "etiqueta": "С le",
       "claves": [
        "le gusta"
       ],
       "resp": [
        {
         "es": "¡Sí! «A Ana le gusta». ¡Y le encanta! 😄",
         "tr": "¡Си! «А А́на лэ гу́ста». ¡И лэ энка́нта!",
         "ru": "Да! «A Ana le gusta». И она его обожает!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Без le",
       "claves": [
        "ana gusta",
        "gusta"
       ],
       "resp": [
        {
         "es": "Mmm… Falta «le»: «a Ana le gusta». 😉",
         "tr": "Ммм… Фа́лта «лэ»: «а А́на лэ гу́ста».",
         "ru": "Хм… Не хватает «le»: «a Ana le gusta»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«A Ana le gusta el chocolate». 😉",
         "tr": "«А А́на лэ гу́ста эл чокола́тэ».",
         "ru": "«A Ana le gusta el chocolate»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Con «le» o sin «le»?",
      "tr": "¿Кон «лэ» о син «лэ»?",
      "ru": "С «le» или без?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u7-felicidades",
   "desde": 7,
   "titulo": "¡Felicidades!",
   "tituloRu": "Поздравляю!",
   "resumen": "Поздравления и сообщения: ¡felicidades!, ¡enhorabuena!, ¡que te mejores!",
   "intro": "Сегодня день рождения Ани! Лусия просит помочь с сообщениями.",
   "inicio": "cumple",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cumple",
     "titulo": "День рождения",
     "bot": [
      {
       "es": "¡Hoy es el cumpleaños de Ana! 🎂",
       "tr": "¡Ой эс эл кумплэа́ньос дэ А́на!",
       "ru": "Сегодня день рождения Ани!"
      },
      {
       "es": "Escríbele un mensaje. ¿Qué le dices?",
       "tr": "Эскри́бэлэ ун мэнса́хэ. ¿Кэ лэ ди́сэс?",
       "ru": "Напиши ей сообщение. Что ты ей скажешь?"
      }
     ],
     "ideas": [
      {
       "es": "¡Feliz cumpleaños, Ana!",
       "ru": "С днём рождения, Аня!"
      },
      {
       "es": "¡Felicidades!",
       "ru": "Поздравляю!"
      },
      {
       "es": "¡Muchas felicidades, Ana!",
       "ru": "Поздравляю, Аня!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Поздравляет",
       "claves": [
        "felicidades",
        "feliz",
        "cumpleanos"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! Se lo mando. 📱",
         "tr": "¡Кэ бони́то! Сэ ло ма́ндо.",
         "ru": "Как мило! Я ей это отправлю. 📱"
        }
       ],
       "ir": "situaciones"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Se dice: «¡Feliz cumpleaños!» o «¡Felicidades!».",
         "tr": "Сэ ди́сэ: «¡Фэли́с кумплэа́ньос!» о «¡Фэлисида́дэс!».",
         "ru": "Говорят: «¡Feliz cumpleaños!» или «¡Felicidades!»"
        }
       ],
       "ir": "situaciones",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le dices a Ana?",
      "tr": "¿Кэ лэ ди́сэс а А́на?",
      "ru": "Что ты скажешь Ане?"
     }
    },
    {
     "id": "situaciones",
     "titulo": "Экзамен",
     "bot": [
      {
       "es": "Y otra noticia: ¡Pablo tiene un trabajo nuevo! 🎉 ¿Qué le dices?",
       "tr": "И о́тра ноти́сья: ¡Па́бло тье́нэ ун траба́хо нуэ́бо! ¿Кэ лэ ди́сэс?",
       "ru": "И ещё новость: у Пабло новая работа! Что ты ему скажешь?"
      }
     ],
     "ideas": [
      {
       "es": "¡Enhorabuena, Pablo!",
       "ru": "Поздравляю, Пабло!"
      },
      {
       "es": "¡Felicidades!",
       "ru": "Поздравляю!"
      },
      {
       "es": "¡Muy bien, Pablo!",
       "ru": "Молодец, Пабло!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Поздравляет",
       "claves": [
        "enhorabuena",
        "felicidades",
        "muy bien",
        "genial",
        "bravo"
       ],
       "resp": [
        {
         "es": "¡Perfecto! Para un éxito, «¡enhorabuena!». 👏",
         "tr": "¡Пэрфэ́кто! Па́ра ун э́ксито, «¡энорабуэ́на!».",
         "ru": "Отлично! С успехом поздравляют «¡enhorabuena!»."
        }
       ],
       "ir": "enfermo"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Para un éxito: «¡Enhorabuena!».",
         "tr": "Па́ра ун э́ксито: «¡Энорабуэ́на!».",
         "ru": "Для поздравления с успехом говорят: «¡Enhorabuena!»"
        }
       ],
       "ir": "enfermo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le dices a Pablo?",
      "tr": "¿Кэ лэ ди́сэс а Па́бло?",
      "ru": "Что ты скажешь Пабло?"
     }
    },
    {
     "id": "enfermo",
     "titulo": "Elena болеет",
     "bot": [
      {
       "es": "Y mi hermana Elena está enferma. 🤒 ¿Qué le escribo?",
       "tr": "И ми эрма́на Элэ́на эста́ энфэ́рма. ¿Кэ лэ эскри́бо?",
       "ru": "А моя сестра Элена болеет. Что ей написать?"
      }
     ],
     "ideas": [
      {
       "es": "¡Que te mejores!",
       "ru": "Выздоравливай!"
      },
      {
       "es": "¡Que te mejores pronto, Elena!",
       "ru": "Скорее выздоравливай, Элена!"
      },
      {
       "es": "¡Mucho ánimo!",
       "ru": "Держись!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Выздоравливай",
       "claves": [
        "mejores",
        "animo",
        "pronto"
       ],
       "resp": [
        {
         "es": "¡Perfecto! Gracias. 😊",
         "tr": "¡Пэрфэ́кто! Гра́сьяс.",
         "ru": "Отлично! Спасибо."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Felicidades (ошибка)",
       "claves": [
        "felicidades",
        "enhorabuena"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! No, no: «¡Que te mejores!». 😅",
         "tr": "¡Ха, ха! Но, но: «¡Кэ тэ мэхо́рэс!».",
         "ru": "Ха-ха! Нет-нет: «¡Que te mejores!»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Se dice: «¡Que te mejores!».",
         "tr": "Сэ ди́сэ: «¡Кэ тэ мэхо́рэс!».",
         "ru": "Говорят: «¡Que te mejores!»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le escribo a Elena?",
      "tr": "¿Кэ лэ эскри́бо а Элэ́на?",
      "ru": "Что написать Элене?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u8-hoy",
   "desde": 8,
   "titulo": "¿Qué has hecho hoy?",
   "tituloRu": "Что ты сегодня делал(а)?",
   "resumen": "Pretérito perfecto: hoy he…, esta semana he…",
   "intro": "Вечер. Лусия рассказывает, что она сделала сегодня, и спрашивает тебя. «Hoy he trabajado», «he comido».",
   "inicio": "hoy",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hoy",
     "titulo": "Сегодня",
     "bot": [
      {
       "es": "¡Qué día! Hoy he dado cinco clases y he comido muy tarde. 😩",
       "tr": "¡Кэ ди́а! Ой э да́до си́нко кла́сэс и э коми́до муй та́рдэ.",
       "ru": "Ну и день! Сегодня я провела пять уроков и очень поздно пообедала."
      },
      {
       "es": "¿Y tú? ¿Qué has hecho hoy?",
       "tr": "¿И ту? ¿Кэ ас э́чо ой?",
       "ru": "А ты? Что ты сегодня делал(а)?"
      }
     ],
     "ideas": [
      {
       "es": "He trabajado mucho.",
       "ru": "Я много работал(а)."
      },
      {
       "es": "He estudiado español.",
       "ru": "Я занимался(-ась) испанским."
      },
      {
       "es": "He ido al médico.",
       "ru": "Я ходил(а) к врачу."
      },
      {
       "es": "No he hecho nada.",
       "ru": "Я ничего не делал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ничего",
       "claves": [
        "nada"
       ],
       "resp": [
        {
         "es": "¡Qué suerte! Un día tranquilo. 😌",
         "tr": "¡Кэ суэ́ртэ! Ун ди́а транки́ло.",
         "ru": "Везёт! Спокойный день."
        }
       ],
       "ir": "comer",
       "dato": "Сегодня",
       "datoValor": "nada"
      },
      {
       "etiqueta": "Испанский",
       "claves": [
        "espanol"
       ],
       "resp": [
        {
         "es": "¡Muy bien! ¡Y ahora estás practicando! 😄",
         "tr": "¡Муй бьен! ¡И ао́ра эста́с практика́ндо!",
         "ru": "Отлично! А теперь ещё и практикуешься!"
        }
       ],
       "ir": "comer",
       "dato": "Сегодня"
      },
      {
       "etiqueta": "Indefinido вместо perfecto",
       "claves": [
        "=trabaje",
        "=estudie",
        "=fui",
        "=comi",
        "=hice"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉 Con «hoy», en España se dice: «hoy he trabajado».",
         "tr": "¡Ба́лэ! Кон «ой», эн Эспа́ня сэ ди́сэ: «ой э трабаха́до».",
         "ru": "Понятно! С «hoy» в Испании говорят: «hoy he trabajado»."
        }
       ],
       "ir": "comer",
       "dato": "Сегодня"
      },
      {
       "etiqueta": "Perfecto",
       "claves": [
        "=he",
        "=hemos",
        "~ado",
        "~ido"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "comer",
       "dato": "Сегодня"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Hoy he…»: «Hoy he trabajado».",
         "tr": "Ди: «Ой э…»: «Ой э трабаха́до».",
         "ru": "Скажи: «Hoy he…»: «Hoy he trabajado»."
        }
       ],
       "ir": "comer",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "¡Cinco clases! Y he comido a las cuatro. 😩",
       "tr": "¡Си́нко кла́сэс! И э коми́до а лас куа́тро.",
       "ru": "Пять уроков! И пообедала в четыре."
      }
     ],
     "retomar": {
      "es": "¿Qué has hecho hoy?",
      "tr": "¿Кэ ас э́чо ой?",
      "ru": "Что ты сегодня делал(а)?"
     }
    },
    {
     "id": "comer",
     "titulo": "Что ты ел(а)",
     "bot": [
      {
       "es": "¿Y qué has comido hoy? 🍽️ Yo, solo un bocadillo. 😅",
       "tr": "¿И кэ ас коми́до ой? Йо, со́ло ун бокади́йо.",
       "ru": "А что ты сегодня ел(а)? 🍽️ Я съел(а) только бутерброд. 😅"
      }
     ],
     "ideas": [
      {
       "es": "He comido pasta.",
       "ru": "Я ел(а) пасту."
      },
      {
       "es": "He comido en casa.",
       "ru": "Я обедал(а) дома."
      },
      {
       "es": "Todavía no he comido.",
       "ru": "Я ещё не обедал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ещё не",
       "claves": [
        "todavia no",
        "aun no",
        "=no he comido"
       ],
       "resp": [
        {
         "es": "¿Todavía no? ¡Ve a comer! 😄",
         "tr": "¿Тодаби́а но? ¡Бэ а комэ́р!",
         "ru": "Ещё нет? Иди поешь!"
        }
       ],
       "ir": "semana"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "he comido",
        "comido",
        "=he"
       ],
       "resp": [
        {
         "es": "¡Qué rico! 😋",
         "tr": "¡Кэ ри́ко!",
         "ru": "Вкусно!"
        }
       ],
       "ir": "semana"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué rico! 😋",
         "tr": "¡Кэ ри́ко!",
         "ru": "Вкусно!"
        }
       ],
       "ir": "semana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué has comido hoy?",
      "tr": "¿Кэ ас коми́до ой?",
      "ru": "Что ты сегодня ел(а)?"
     }
    },
    {
     "id": "semana",
     "titulo": "Эта неделя",
     "bot": [
      {
       "es": "Esta semana he visto dos películas con Ana. 🎬 ¿Has visto alguna película esta semana?",
       "tr": "Э́ста сэма́на э би́сто дос пэли́кулас кон А́на. ¿Ас би́сто алгу́на пэли́кула э́ста сэма́на?",
       "ru": "На этой неделе я посмотрела с Аней два фильма. А ты смотрел(а) какой-нибудь фильм на этой неделе?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, he visto una.",
       "ru": "Да, я посмотрел(а) один фильм."
      },
      {
       "es": "No, no he visto ninguna.",
       "ru": "Нет, ни одного."
      },
      {
       "es": "No he tenido tiempo.",
       "ru": "У меня не было времени."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Visto / vido",
       "claves": [
        "he vido",
        "he veido",
        "he vedido"
       ],
       "resp": [
        {
         "es": "😉 De «ver»: «he visto».",
         "tr": "Дэ «бэр»: «э би́сто».",
         "ru": "От «ver»: «he visto»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "=no",
        "ninguna",
        "tiempo"
       ],
       "resp": [
        {
         "es": "¡Vaya! El fin de semana, entonces. 🍿",
         "tr": "¡Ба́я! Эл фин дэ сэма́на, энто́нсэс.",
         "ru": "Жаль! Тогда на выходных."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "he visto",
        "visto",
        "una",
        "dos"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 🍿",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Has visto alguna película?",
      "tr": "¿Ас би́сто алгу́на пэли́кула?",
      "ru": "Ты смотрел(а) какой-нибудь фильм?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Buenas noches, {nombre}! 🌙",
       "tr": "¡Буэ́нас но́чэс, {nombre}!",
       "ru": "Спокойной ночи, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "titulo": "El fin de semana pasado",
   "tituloRu": "Прошлые выходные",
   "resumen": "Pretérito indefinido: el sábado fui, vi, comí…",
   "intro": "Понедельник. Лусия рассказывает о прошлых выходных. «El sábado fui…», «el domingo comí…».",
   "inicio": "sabado",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "sabado",
     "titulo": "Суббота",
     "bot": [
      {
       "es": "El sábado fui a la playa con Ana y por la noche cenamos en el puerto. 🏖️",
       "tr": "Эл са́бадо фуи а ла пла́я кон А́на и пор ла но́чэ сэна́мос эн эл пуэ́рто.",
       "ru": "В субботу я ездила с Аней на пляж, а вечером мы ужинали в порту."
      },
      {
       "es": "¿Y tú? ¿Qué hiciste el sábado?",
       "tr": "¿И ту? ¿Кэ иси́стэ эл са́бадо?",
       "ru": "А ты? Что ты делал(а) в субботу?"
      }
     ],
     "ideas": [
      {
       "es": "Fui al cine.",
       "ru": "Я ходил(а) в кино."
      },
      {
       "es": "Trabajé todo el día.",
       "ru": "Я работал(а) весь день."
      },
      {
       "es": "Visité a mis padres.",
       "ru": "Я ездил(а) к родителям."
      },
      {
       "es": "No hice nada.",
       "ru": "Я ничего не делал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Perfecto вместо indefinido",
       "claves": [
        "=he",
        "=hemos"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉 Con «el sábado» se dice: «fui», «trabajé», «vi».",
         "tr": "¡Ба́лэ! Кон «эл са́бадо» сэ ди́сэ: «фуи», «трабахэ́», «би».",
         "ru": "Понятно! С «el sábado» говорят: «fui», «trabajé», «vi»."
        }
       ],
       "ir": "domingo",
       "dato": "Прошлая суббота"
      },
      {
       "etiqueta": "Ничего",
       "claves": [
        "nada",
        "descanse"
       ],
       "resp": [
        {
         "es": "¡También está bien! 😌",
         "tr": "¡Тамбье́н эста́ бьен!",
         "ru": "Тоже неплохо!"
        }
       ],
       "ir": "domingo",
       "dato": "Прошлая суббота"
      },
      {
       "etiqueta": "Работал",
       "claves": [
        "trabaje"
       ],
       "resp": [
        {
         "es": "¿El sábado? ¡Uf! 😮",
         "tr": "¿Эл са́бадо? ¡Уф!",
         "ru": "В субботу? Ох!"
        }
       ],
       "ir": "domingo",
       "dato": "Прошлая суббота"
      },
      {
       "etiqueta": "Indefinido",
       "claves": [
        "=fui",
        "=fuimos",
        "=vi",
        "=hice",
        "=comi",
        "=sali",
        "~e",
        "~i",
        "~o"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "domingo",
       "dato": "Прошлая суббота"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «El sábado fui…».",
         "tr": "Ди: «Эл са́бадо фуи…».",
         "ru": "Скажи: «El sábado fui…»"
        }
       ],
       "ir": "domingo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hiciste el sábado?",
      "tr": "¿Кэ иси́стэ эл са́бадо?",
      "ru": "Что ты делал(а) в субботу?"
     }
    },
    {
     "id": "domingo",
     "titulo": "Воскресенье",
     "bot": [
      {
       "es": "El domingo me levanté tarde y llamé a mis padres, como siempre. 📞 ¿A qué hora te levantaste el domingo?",
       "tr": "Эл доми́нго мэ лэбантэ́ та́рдэ и ямэ́ а мис па́дрэс, ко́мо сье́мпрэ. ¿А кэ о́ра тэ лэбанта́стэ эл доми́нго?",
       "ru": "В воскресенье я встала поздно и позвонила родителям, как всегда. А ты во сколько встал(а) в воскресенье?"
      }
     ],
     "ideas": [
      {
       "es": "Me levanté a las diez.",
       "ru": "Я встал(а) в десять."
      },
      {
       "es": "Me levanté muy tarde.",
       "ru": "Я встал(а) очень поздно."
      },
      {
       "es": "Me levanté temprano.",
       "ru": "Я встал(а) рано."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "levante",
        "temprano",
        "tarde",
        "=a las"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "ana",
       "dato": "Воскресенье: подъём"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué hora te levantaste?",
      "tr": "¿А кэ о́ра тэ лэбанта́стэ?",
      "ru": "Во сколько ты встал(а)?"
     }
    },
    {
     "id": "ana",
     "titulo": "А Аня?",
     "bot": [
      {
       "es": "Ana no vino el domingo. ¿Sabes por qué? Estudió todo el día para su examen. 📚 ¿Qué hizo Ana el domingo?",
       "tr": "А́на но би́но эл доми́нго. ¿Са́бэс пор кэ? Эстудьо́ то́до эл ди́а па́ра су экса́мэн. ¿Кэ и́со А́на эл доми́нго?",
       "ru": "Аня в воскресенье не пришла. Знаешь почему? Она весь день готовилась к экзамену. Что делала Аня в воскресенье?"
      }
     ],
     "ideas": [
      {
       "es": "Estudió.",
       "ru": "Она занималась."
      },
      {
       "es": "Estudió todo el día.",
       "ru": "Она занималась весь день."
      },
      {
       "es": "Fue a la playa.",
       "ru": "Она ходила на пляж."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Правильно",
       "claves": [
        "estudio"
       ],
       "resp": [
        {
         "es": "¡Sí! ¡Pobre Ana! 😅",
         "tr": "¡Си! ¡По́брэ А́на!",
         "ru": "Да! Бедная Аня!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Неправильно",
       "claves": [
        "fue",
        "playa"
       ],
       "resp": [
        {
         "es": "No, no: estudió todo el día. 📚",
         "tr": "Но, но: эстудьо́ то́до эл ди́а.",
         "ru": "Нет-нет: она весь день занималась."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Estudió todo el día. 📚",
         "tr": "Эстудьо́ то́до эл ди́а.",
         "ru": "Она весь день занималась."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hizo Ana?",
      "tr": "¿Кэ и́со А́на?",
      "ru": "Что делала Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u8-alguna",
   "desde": 8,
   "titulo": "¿Alguna vez has…?",
   "tituloRu": "Ты когда-нибудь…?",
   "resumen": "Опыт: ¿alguna vez has…?, nunca he…, ya / todavía no",
   "intro": "Игра «Ты когда-нибудь…?». Лусия спрашивает о твоём опыте и рассказывает о своём.",
   "inicio": "espana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "espana",
     "titulo": "Испания",
     "bot": [
      {
       "es": "¿Alguna vez has estado en España? 🇪🇸",
       "tr": "¿Алгу́на бэс ас эста́до эн Эспа́ня?",
       "ru": "Ты когда-нибудь был(а) в Испании?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, he estado en Barcelona.",
       "ru": "Да, я был(а) в Барселоне."
      },
      {
       "es": "No, nunca he estado.",
       "ru": "Нет, ни разу не был(а)."
      },
      {
       "es": "Vivo en España.",
       "ru": "Я живу в Испании."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Живёт",
       "claves": [
        "vivo"
       ],
       "resp": [
        {
         "es": "¡Ah, claro! ¡Vives aquí! 😄",
         "tr": "¡А, кла́ро! ¡Би́бэс аки́!",
         "ru": "А, точно! Ты здесь живёшь!"
        }
       ],
       "ir": "comida",
       "dato": "Испания",
       "datoValor": "vive"
      },
      {
       "etiqueta": "Нет",
       "claves": [
        "nunca",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Tienes que venir! 😊",
         "tr": "¡Тье́нэс кэ бэни́р!",
         "ru": "Тебе надо приехать!"
        }
       ],
       "ir": "comida",
       "dato": "Испания",
       "datoValor": "nunca"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "he estado",
        "=si",
        "estuve"
       ],
       "resp": [
        {
         "es": "¡Qué bien! ¿Y te gustó? 😊",
         "tr": "¡Кэ бьен! ¿И тэ густо́?",
         "ru": "Здорово! И тебе понравилось?"
        }
       ],
       "ir": "comida",
       "dato": "Испания",
       "datoValor": "sí"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "comida",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Has estado en España?",
      "tr": "¿Ас эста́до эн Эспа́ня?",
      "ru": "Ты был(а) в Испании?"
     }
    },
    {
     "id": "comida",
     "titulo": "Еда",
     "bot": [
      {
       "es": "Yo nunca he probado la comida rusa. 😅 ¿Alguna vez has comido tortilla de patatas?",
       "tr": "Йо ну́нка э проба́до ла коми́да ру́са. ¿Алгу́на бэс ас коми́до торти́я дэ пата́тас?",
       "ru": "Я никогда не пробовала русскую еду. А ты когда-нибудь ел(а) испанскую тортилью?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, la he comido.",
       "ru": "Да, ел(а)."
      },
      {
       "es": "No, nunca la he probado.",
       "ru": "Нет, никогда не пробовал(а)."
      },
      {
       "es": "Sí, muchas veces.",
       "ru": "Да, много раз."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "nunca",
        "=no",
        "todavia no"
       ],
       "resp": [
        {
         "es": "¡Un día la comemos juntos! 🥘",
         "tr": "¡Ун ди́а ла комэ́мос ху́нтос!",
         "ru": "Как-нибудь поедим её вместе!"
        }
       ],
       "ir": "rusa",
       "dato": "Тортилья",
       "datoValor": "nunca"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "he comido",
        "la he",
        "veces",
        "probado"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😋",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "rusa",
       "dato": "Тортилья",
       "datoValor": "sí"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "rusa",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Has comido tortilla?",
      "tr": "¿Ас коми́до торти́я?",
      "ru": "Ты ел(а) тортилью?"
     }
    },
    {
     "id": "rusa",
     "titulo": "Русская еда",
     "bot": [
      {
       "es": "¿Qué comida rusa tengo que probar? 🤔",
       "tr": "¿Кэ коми́да ру́са тэ́нго кэ проба́р?",
       "ru": "Какую русскую еду мне надо попробовать?"
      }
     ],
     "ideas": [
      {
       "es": "Tienes que probar el borsch.",
       "ru": "Тебе надо попробовать борщ."
      },
      {
       "es": "La ensalada rusa.",
       "ru": "Салат оливье."
      },
      {
       "es": "La sopa rusa.",
       "ru": "Русский суп."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Называет",
       "claves": [
        "borsch",
        "borscht",
        "pelmeni",
        "blini",
        "sopa",
        "tienes que",
        "ensalada"
       ],
       "resp": [
        {
         "es": "¡Apuntado! Ana va a cocinar para mí. 😄",
         "tr": "¡Апунта́до! А́на ба а косина́р па́ра ми.",
         "ru": "Записала! Аня приготовит для меня."
        }
       ],
       "ir": "ya"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Apuntado! 😄",
         "tr": "¡Апунта́до!",
         "ru": "Записала!"
        }
       ],
       "ir": "ya",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué tengo que probar?",
      "tr": "¿Кэ тэ́нго кэ проба́р?",
      "ru": "Что мне надо попробовать?"
     }
    },
    {
     "id": "ya",
     "titulo": "Ya / todavía no",
     "bot": [
      {
       "es": "Una más: ¿ya has hecho los ejercicios de la unidad 8? 📝",
       "tr": "У́на мас: ¿я ас э́чо лос эхэрси́сьос дэ ла унида́д 8?",
       "ru": "Ещё один вопрос: ты уже сделал(а) упражнения восьмого урока? 📝"
      }
     ],
     "ideas": [
      {
       "es": "Sí, ya los he hecho.",
       "ru": "Да, уже сделал(а)."
      },
      {
       "es": "Todavía no.",
       "ru": "Ещё нет."
      },
      {
       "es": "No, todavía no los he hecho.",
       "ru": "Нет, ещё не сделал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ещё нет",
       "claves": [
        "todavia",
        "aun no",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Pues después de hablar conmigo! 😉",
         "tr": "¡Пуэс дэспуэ́с дэ абла́р конми́го!",
         "ru": "Тогда после разговора со мной!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Уже",
       "claves": [
        "ya",
        "=si",
        "he hecho"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 👏",
         "tr": "¡Муй бьен!",
         "ru": "Молодец!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Ya has hecho los ejercicios?",
      "tr": "¿Я ас э́чо лос эхэрси́сьос?",
      "ru": "Ты уже сделал(а) упражнения?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u8-viaje",
   "desde": 8,
   "titulo": "Un viaje",
   "tituloRu": "Путешествие",
   "resumen": "Рассказать о поездке: fui, estuve, me gustó",
   "intro": "Лусия вернулась из поездки в Севилью. Расспроси её и расскажи о своём путешествии.",
   "inicio": "volvi",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "volvi",
     "titulo": "Поездка Лусии",
     "bot": [
      {
       "es": "Ayer volví de Sevilla. Estuve allí cuatro días. ☀️",
       "tr": "Ае́р болби́ дэ Сэби́я. Эсту́бэ айи́ куа́тро ди́ас.",
       "ru": "Вчера я вернулась из Севильи. Пробыла там четыре дня."
      }
     ],
     "ideas": [
      {
       "es": "¿Qué tal el viaje?",
       "ru": "Как съездила?"
      },
      {
       "es": "¿Te gustó?",
       "ru": "Тебе понравилось?"
      },
      {
       "es": "¿Con quién fuiste?",
       "ru": "С кем ты ездила?"
      },
      {
       "es": "¿Qué hiciste?",
       "ru": "Что ты делала?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "С кем",
       "claves": [
        "con quien"
       ],
       "resp": [
        {
         "es": "Fui con mi hermana Elena. Lo pasamos genial. 😄",
         "tr": "Фуи кон ми эрма́на Элэ́на. Ло паса́мос хэнья́л.",
         "ru": "Я ездила с сестрой Эленой. Мы отлично провели время."
        }
       ],
       "ir": "tu_viaje"
      },
      {
       "etiqueta": "Что делала",
       "claves": [
        "que hiciste",
        "que visitaste",
        "que viste"
       ],
       "resp": [
        {
         "es": "Visité la catedral, paseé mucho y comí muy bien. ¡Y vi un espectáculo de baile! 💃",
         "tr": "Биситэ́ ла катэдра́л, пасээ́ му́чо и коми́ муй бьен. ¡И би ун эспэкта́куло дэ ба́йлэ!",
         "ru": "Я побывала в соборе, много гуляла и очень вкусно ела. И ещё посмотрела танцевальное шоу! 💃"
        }
       ],
       "ir": "tu_viaje"
      },
      {
       "etiqueta": "Как съездила",
       "claves": [
        "que tal",
        "te gusto",
        "como fue",
        "bien"
       ],
       "resp": [
        {
         "es": "¡Me encantó! Hizo mucho calor, pero la ciudad es preciosa. 😍",
         "tr": "¡Мэ энканто́! И́со му́чо кало́р, пэ́ро ла сьюда́д эс прэсьо́са.",
         "ru": "Мне очень понравилось! Было очень жарко, но город прекрасный."
        }
       ],
       "ir": "tu_viaje"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Me encantó! Fui con mi hermana Elena. 😍",
         "tr": "¡Мэ энканто́! Фуи кон ми эрма́на Элэ́на.",
         "ru": "Мне очень понравилось! Я ездила с сестрой Эленой."
        }
       ],
       "ir": "tu_viaje",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "О чём ты меня спросишь?"
     }
    },
    {
     "id": "tu_viaje",
     "titulo": "Твоя поездка",
     "bot": [
      {
       "es": "¿Y tú? ¿Cuál fue tu último viaje? ✈️",
       "tr": "¿И ту? ¿Куал фуэ ту у́лтимо бья́хэ?",
       "ru": "А ты? Куда ты ездил(а) в последний раз?"
      }
     ],
     "ideas": [
      {
       "es": "El verano pasado fui a Italia.",
       "ru": "Прошлым летом я ездил(а) в Италию."
      },
      {
       "es": "Fui a Moscú en mayo.",
       "ru": "В мае я ездил(а) в Москву."
      },
      {
       "es": "Hace mucho que no viajo.",
       "ru": "Я давно никуда не ездил(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Давно не ездил",
       "claves": [
        "no viajo",
        "hace mucho",
        "no he viajado"
       ],
       "resp": [
        {
         "es": "¡Vaya! ¡Necesitas unas vacaciones! 😄",
         "tr": "¡Ба́я! ¡Нэсэси́тас у́нас бакасьо́нэс!",
         "ru": "Ох! Тебе нужен отпуск!"
        }
       ],
       "ir": "que_tal",
       "dato": "Последняя поездка",
       "datoValor": "hace mucho"
      },
      {
       "etiqueta": "Fui a…",
       "claves": [
        "fui",
        "estuve",
        "viaje"
       ],
       "resp": [
        {
         "es": "¿A {x}? ¡Qué bien! 😊",
         "tr": "¿А {x}? ¡Кэ бьен!",
         "ru": "В {x}? Здорово!"
        }
       ],
       "ir": "que_tal",
       "dato": "Последняя поездка",
       "captura": "eco",
       "tras": [
        "a"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "que_tal",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuál fue tu último viaje?",
      "tr": "¿Куал фуэ ту у́лтимо бья́хэ?",
      "ru": "Куда ты ездил(а) в последний раз?"
     }
    },
    {
     "id": "que_tal",
     "titulo": "Как было",
     "bot": [
      {
       "es": "¿Y qué tal? ¿Qué te gustó más?",
       "tr": "¿И кэ тал? ¿Кэ тэ густо́ мас?",
       "ru": "И как? Что тебе понравилось больше всего?"
      }
     ],
     "ideas": [
      {
       "es": "Me gustó mucho la comida.",
       "ru": "Мне очень понравилась еда."
      },
      {
       "es": "Me encantaron las playas.",
       "ru": "Мне очень понравились пляжи."
      },
      {
       "es": "No me gustó mucho.",
       "ru": "Мне не очень понравилось."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me gustaron (мн. ч.)",
       "claves": [
        "gustaron",
        "encantaron"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😍",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Не понравилось",
       "claves": [
        "no me gusto"
       ],
       "resp": [
        {
         "es": "¡Vaya! El próximo, mejor. 😅",
         "tr": "¡Ба́я! Эл про́ксимо, мэхо́р.",
         "ru": "Жаль! В следующий раз будет лучше. 😅"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Понравилось",
       "claves": [
        "gusto",
        "encanto",
        "bonit",
        "genial"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😍",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te gustó más?",
      "tr": "¿Кэ тэ густо́ мас?",
      "ru": "Что тебе понравилось больше всего?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u8-vida",
   "desde": 8,
   "titulo": "Mi vida",
   "tituloRu": "Моя жизнь",
   "resumen": "Биография: nací en…, en 2015 empecé…, hace … años",
   "intro": "Лусия рассказывает о своей жизни в нескольких фразах. Теперь твоя очередь: nací, estudié, empecé.",
   "inicio": "nacio",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "nacio",
     "titulo": "Где ты родился(-лась)",
     "bot": [
      {
       "es": "Yo nací en un pueblo cerca de Madrid. Estudié en Madrid y después me mudé a Barcelona. 🏘️",
       "tr": "Йо наси́ эн ун пуэ́бло сэ́рка дэ Мадри́д. Эстудье́ эн Мадри́д и дэспуэ́с мэ мудэ́ а Барсэло́на.",
       "ru": "Я родилась в деревне под Мадридом. Училась в Мадриде, а потом переехала в Барселону."
      },
      {
       "es": "¿Y tú? ¿Dónde naciste?",
       "tr": "¿И ту? ¿До́ндэ наси́стэ?",
       "ru": "А ты? Где ты родился(-лась)?"
      }
     ],
     "ideas": [
      {
       "es": "Nací en Moscú.",
       "ru": "Я родился(-лась) в Москве."
      },
      {
       "es": "Nací en un pueblo pequeño.",
       "ru": "Я родился(-лась) в маленькой деревне."
      },
      {
       "es": "Nací en Kiev en 1995.",
       "ru": "Я родился(-лась) в Киеве в 1995 году."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Nació (ошибка)",
       "claves": [
        "=yo nacio",
        "=nacio"
       ],
       "resp": [
        {
         "es": "😉 «Yo nací». ¡Muy bien!",
         "tr": "«Йо наси́». ¡Муй бьен!",
         "ru": "«Yo nací». Отлично!"
        }
       ],
       "ir": "estudio"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "naci"
       ],
       "resp": [
        {
         "es": "¿En {x}? ¡Qué bien! 😊",
         "tr": "¿Эн {x}? ¡Кэ бьен!",
         "ru": "В {x}? Здорово!"
        }
       ],
       "ir": "estudio",
       "dato": "Место рождения",
       "captura": "eco",
       "tras": [
        "en"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "estudio",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Nací en un pueblo pequeño cerca de Madrid. 🏘️",
       "tr": "Наси́ эн ун пуэ́бло пэкэ́ньо сэ́рка дэ Мадри́д.",
       "ru": "Я родилась в маленькой деревне под Мадридом."
      }
     ],
     "aTiTema": "origen_l",
     "retomar": {
      "es": "¿Dónde naciste?",
      "tr": "¿До́ндэ наси́стэ?",
      "ru": "Где ты родился(-лась)?"
     }
    },
    {
     "id": "estudio",
     "titulo": "Учёба",
     "bot": [
      {
       "es": "Yo estudié Filología Inglesa en la universidad. 🎓 ¿Qué estudiaste tú?",
       "tr": "Йо эстудье́ Филолохи́а Инглэ́са эн ла унибэрсида́д. ¿Кэ эстудья́стэ ту?",
       "ru": "Я изучала английскую филологию в университете. 🎓 А ты что изучал(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Estudié Informática.",
       "ru": "Я изучал(а) информатику."
      },
      {
       "es": "Estudié Medicina.",
       "ru": "Я изучал(а) медицину."
      },
      {
       "es": "No fui a la universidad.",
       "ru": "Я не учился(-лась) в университете."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не учился",
       "claves": [
        "no fui",
        "no estudie",
        "no tengo"
       ],
       "resp": [
        {
         "es": "¡No pasa nada! Hay muchos caminos. 😊",
         "tr": "¡Но па́са на́да! Ай му́чос ками́нос.",
         "ru": "Ничего страшного! Путей много."
        }
       ],
       "ir": "barcelona",
       "dato": "Учёба",
       "datoValor": "—"
      },
      {
       "etiqueta": "Называет",
       "claves": [
        "estudie",
        "estudio",
        "carrera",
        "universidad"
       ],
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "barcelona",
       "dato": "Учёба"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "barcelona",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué estudiaste?",
      "tr": "¿Кэ эстудья́стэ?",
      "ru": "Что ты изучал(а)?"
     }
    },
    {
     "id": "barcelona",
     "titulo": "Hace … años",
     "bot": [
      {
       "es": "Llegué a Barcelona hace nueve años. ¿Cuándo empezaste a estudiar español? 📚",
       "tr": "Егэ́ а Барсэло́на а́сэ нуэ́бэ а́ньос. ¿Куа́ндо эмпэса́стэ а эстудья́р эспаньо́л?",
       "ru": "Я приехала в Барселону девять лет назад. А когда ты начал(а) учить испанский?"
      }
     ],
     "ideas": [
      {
       "es": "Empecé hace un año.",
       "ru": "Я начал(а) год назад."
      },
      {
       "es": "Empecé hace dos meses.",
       "ru": "Я начал(а) два месяца назад."
      },
      {
       "es": "Empecé este año.",
       "ru": "Я начал(а) в этом году."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Hace / este año",
       "claves": [
        "hace",
        "este",
        "empece",
        "en 20",
        "mes",
        "año",
        "ano"
       ],
       "resp": [
        {
         "es": "¡Y ya hablas muy bien! 👏",
         "tr": "¡И я а́блас муй бьен!",
         "ru": "И уже очень хорошо говоришь!"
        }
       ],
       "ir": "fin",
       "dato": "Испанский с"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Y ya hablas muy bien! 👏",
         "tr": "¡И я а́блас муй бьен!",
         "ru": "И уже очень хорошо говоришь!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuándo empezaste?",
      "tr": "¿Куа́ндо эмпэса́стэ?",
      "ru": "Когда ты начал(а)?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u8-primerdia",
   "desde": 8,
   "titulo": "Mi primer día en España",
   "tituloRu": "Мой первый день в Испании",
   "resumen": "Рассказ о первом дне: llegué, conocí, me perdí",
   "intro": "Лусия вспоминает, как познакомилась с Аней в её первый день в Барселоне.",
   "inicio": "conoci",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "conoci",
     "titulo": "Как они познакомились",
     "bot": [
      {
       "es": "¿Sabes cómo conocí a Ana? 😊",
       "tr": "¿Са́бэс ко́мо коноси́ а А́на?",
       "ru": "Знаешь, как я познакомилась с Аней?"
      },
      {
       "es": "El casero de Ana es amigo mío. El día que llegó Ana, él no pudo ir y yo la esperé con las llaves. 🔑",
       "tr": "Эл касэ́ро дэ А́на эс ами́го ми́о. Эл ди́а кэ его́ А́на, эл но пу́до ир и йо ла эспэрэ́ кон лас я́бэс.",
       "ru": "Хозяин Аниной квартиры — мой друг. В день, когда Аня приехала, он не смог прийти, и я ждала её с ключами."
      }
     ],
     "ideas": [
      {
       "es": "¡Qué casualidad!",
       "ru": "Какое совпадение!"
      },
      {
       "es": "¿Y qué pasó después?",
       "ru": "А что было потом?"
      },
      {
       "es": "¿Cuándo llegó Ana?",
       "ru": "Когда Аня приехала?"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Когда",
       "claves": [
        "cuando"
       ],
       "resp": [
        {
         "es": "Llegó un septiembre, hace un año. Su avión llegó tarde. ✈️",
         "tr": "Его́ ун сэптье́мбрэ, а́сэ ун а́ньо. Су абьо́н его́ та́рдэ.",
         "ru": "Она приехала в сентябре, год назад. Её самолёт задержался. ✈️"
        }
       ],
       "ir": "tu_llegada"
      },
      {
       "etiqueta": "Что потом",
       "claves": [
        "despues",
        "que paso",
        "y luego",
        "y entonces"
       ],
       "resp": [
        {
         "es": "Después fuimos a cenar y hablamos tres horas. ¡Desde ese día somos amigas! 😄",
         "tr": "Дэспуэ́с фуи́мос а сэна́р и абла́мос трэс о́рас. ¡Дэ́сдэ э́сэ ди́а со́мос ами́гас!",
         "ru": "Потом мы пошли ужинать и проговорили три часа. С того дня мы подруги!"
        }
       ],
       "ir": "tu_llegada"
      },
      {
       "etiqueta": "Реагирует",
       "claves": [
        "casualidad",
        "bonito",
        "que bien",
        "genial",
        "suerte"
       ],
       "resp": [
        {
         "es": "¡Sí! Esa noche cenamos juntas y desde entonces somos amigas. 😄",
         "tr": "¡Си! Э́са но́чэ сэна́мос ху́нтас и дэ́сдэ энто́нсэс со́мос ами́гас.",
         "ru": "Да! В тот вечер мы вместе поужинали и с тех пор дружим."
        }
       ],
       "ir": "tu_llegada"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Esa noche cenamos juntas. ¡Y desde entonces somos amigas! 😄",
         "tr": "Э́са но́чэ сэна́мос ху́нтас. ¡И дэ́сдэ энто́нсэс со́мос ами́гас!",
         "ru": "В тот вечер мы вместе поужинали. И с тех пор дружим!"
        }
       ],
       "ir": "tu_llegada",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "О чём ты меня спросишь?"
     }
    },
    {
     "id": "tu_llegada",
     "titulo": "Твой первый день",
     "bot": [
      {
       "es": "¿Y tú? ¿Has estado en otro país? ¿Qué tal fue tu primer día allí? 🌍",
       "tr": "¿И ту? ¿Ас эста́до эн о́тро паи́с? ¿Кэ тал фуэ ту примэ́р ди́а айи́?",
       "ru": "А ты? Ты бывал(а) в другой стране? Каким был твой первый день там?"
      }
     ],
     "ideas": [
      {
       "es": "Me perdí en el metro.",
       "ru": "Я заблудился(-лась) в метро."
      },
      {
       "es": "Fue muy difícil: no entendí nada.",
       "ru": "Было очень трудно: я ничего не понял(а)."
      },
      {
       "es": "Conocí a mucha gente.",
       "ru": "Я познакомился(-лась) со многими людьми."
      },
      {
       "es": "Nunca he vivido en otro país.",
       "ru": "Я никогда не жил(а) в другой стране."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Никогда",
       "claves": [
        "nunca",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Un día! 😉",
         "tr": "¡Ун ди́а!",
         "ru": "Когда-нибудь!"
        }
       ],
       "ir": "consejo"
      },
      {
       "etiqueta": "Заблудился",
       "claves": [
        "perdi"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! A Ana también le pasó. 😄",
         "tr": "¡Ха, ха! А А́на тамбье́н лэ пасо́.",
         "ru": "Ха-ха! С Аней тоже такое было."
        }
       ],
       "ir": "consejo",
       "dato": "Первый день"
      },
      {
       "etiqueta": "Рассказывает",
       "claves": [
        "fue",
        "conoci",
        "llegue",
        "entendi",
        "fui",
        "estuve",
        "~e",
        "~i"
       ],
       "resp": [
        {
         "es": "¡Qué historia! 😊",
         "tr": "¡Кэ исто́рья!",
         "ru": "Вот это история!"
        }
       ],
       "ir": "consejo",
       "dato": "Первый день"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué historia! 😊",
         "tr": "¡Кэ исто́рья!",
         "ru": "Вот это история!"
        }
       ],
       "ir": "consejo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué tal fue tu primer día?",
      "tr": "¿Кэ тал фуэ ту примэ́р ди́а?",
      "ru": "Каким был твой первый день?"
     }
    },
    {
     "id": "consejo",
     "titulo": "Что ты узнал(а)",
     "bot": [
      {
       "es": "¿Y qué aprendiste ese día? 🤔",
       "tr": "¿И кэ апрэнди́стэ э́сэ ди́а?",
       "ru": "И чему ты научился(-лась) в тот день?"
      }
     ],
     "ideas": [
      {
       "es": "Aprendí a pedir ayuda.",
       "ru": "Я научился(-лась) просить о помощи."
      },
      {
       "es": "Aprendí que la gente es amable.",
       "ru": "Я понял(а), что люди добрые."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "aprendi",
        "que",
        "ayuda",
        "amable"
       ],
       "resp": [
        {
         "es": "¡Muy bonito! 😊",
         "tr": "¡Муй бони́то!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bonito! 😊",
         "tr": "¡Муй бони́то!",
         "ru": "Как здорово!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué aprendiste?",
      "tr": "¿Кэ апрэнди́стэ?",
      "ru": "Чему ты научился(-лась)?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-pequeno",
   "desde": 9,
   "titulo": "Cuando eras pequeño",
   "tituloRu": "Когда ты был(а) маленьким",
   "resumen": "Pretérito imperfecto: cuando era pequeña, vivía, jugaba…",
   "intro": "Лусия вспоминает детство в деревне. А каким было твоё? «Cuando era pequeño, vivía…».",
   "inicio": "donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "donde",
     "titulo": "Где ты жил(а)",
     "bot": [
      {
       "es": "Cuando era pequeña, vivía en un pueblo. Iba al río con mi hermano Pablo. 🏞️",
       "tr": "Куа́ндо э́ра пэкэ́ня, биби́а эн ун пуэ́бло. И́ба ал ри́о кон ми эрма́но Па́бло.",
       "ru": "Когда я была маленькой, я жила в деревне. Ходила на речку с братом Пабло."
      },
      {
       "es": "¿Y tú? ¿Dónde vivías cuando eras {pequeño/pequeña}?",
       "tr": "¿И ту? ¿До́ндэ биби́ас куа́ндо э́рас {пэкэ́ньо/пэкэ́ня}?",
       "ru": "А ты? Где ты жил(а), когда был(а) маленьким?"
      }
     ],
     "ideas": [
      {
       "es": "Vivía en Moscú.",
       "ru": "Я жил(а) в Москве."
      },
      {
       "es": "Vivía en un pueblo.",
       "ru": "Я жил(а) в деревне."
      },
      {
       "es": "Vivía en un piso pequeño.",
       "ru": "Я жил(а) в маленькой квартире."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Indefinido (ошибка)",
       "claves": [
        "=vivi"
       ],
       "resp": [
        {
         "es": "😉 Para describir el pasado: «vivía».",
         "tr": "Па́ра дэскриби́р эл паса́до: «биби́а».",
         "ru": "Чтобы описать прошлое: «vivía»."
        }
       ],
       "ir": "jugar",
       "dato": "Детство"
      },
      {
       "etiqueta": "Деревня",
       "claves": [
        "pueblo"
       ],
       "resp": [
        {
         "es": "¿En un pueblo? ¡Como yo! 😄",
         "tr": "¿Эн ун пуэ́бло? ¡Ко́мо йо!",
         "ru": "В деревне? Как и я! 😄"
        }
       ],
       "ir": "jugar",
       "dato": "Детство",
       "datoValor": "en un pueblo"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "vivia",
        "en"
       ],
       "resp": [
        {
         "es": "¿En {x}? ¡Qué bien! 😊",
         "tr": "¿Эн {x}? ¡Кэ бьен!",
         "ru": "В {x}? Здорово!"
        }
       ],
       "ir": "jugar",
       "dato": "Детство",
       "captura": "eco",
       "tras": [
        "en"
       ]
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "jugar",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Vivía en un pueblo pequeño cerca de Madrid. 🏞️",
       "tr": "Биби́а эн ун пуэ́бло пэкэ́ньо сэ́рка дэ Мадри́д.",
       "ru": "Я жила в маленькой деревне под Мадридом."
      }
     ],
     "aTiTema": "infancia_l",
     "retomar": {
      "es": "¿Dónde vivías?",
      "tr": "¿До́ндэ биби́ас?",
      "ru": "Где ты жил(а)?"
     }
    },
    {
     "id": "jugar",
     "titulo": "Игры",
     "bot": [
      {
       "es": "Yo jugaba en la calle todo el día con mis amigos. ¿A qué jugabas tú? ⚽",
       "tr": "Йо хуга́ба эн ла ка́е то́до эл ди́а кон мис ами́гос. ¿А кэ хуга́бас ту?",
       "ru": "Я весь день играла на улице с друзьями. А ты во что играл(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Jugaba al fútbol.",
       "ru": "Я играл(а) в футбол."
      },
      {
       "es": "Jugaba con mis amigos en el patio.",
       "ru": "Я играл(а) с друзьями во дворе."
      },
      {
       "es": "Leía mucho.",
       "ru": "Я много читал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Imperfecto",
       "claves": [
        "jugaba",
        "leia",
        "iba",
        "veia",
        "~aba",
        "~ia"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 😊",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "escuela",
       "dato": "Игры"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Jugaba…», «leía…».",
         "tr": "«Хуга́ба…», «лэи́а…».",
         "ru": "«Jugaba…», «leía…»."
        }
       ],
       "ir": "escuela",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué jugabas?",
      "tr": "¿А кэ хуга́бас?",
      "ru": "Во что ты играл(а)?"
     }
    },
    {
     "id": "escuela",
     "titulo": "Школа",
     "bot": [
      {
       "es": "¿Y en la escuela? ¿Eras buen alumno o mal alumno? 😄 Yo hablaba mucho en clase.",
       "tr": "¿И эн ла эскуэ́ла? ¿Э́рас буэн алу́мно о мал алу́мно? Йо абла́ба му́чо эн кла́сэ.",
       "ru": "А в школе? Ты хорошо или плохо учился(ась)? 😄 Я на уроках много болтала."
      }
     ],
     "ideas": [
      {
       "es": "Era muy buen alumno.",
       "ru": "Я был отличником."
      },
      {
       "es": "Era buena alumna.",
       "ru": "Я была хорошей ученицей."
      },
      {
       "es": "Hablaba mucho, como tú.",
       "ru": "Я много болтал(а), как ты."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Как ты",
       "claves": [
        "como tu",
        "hablaba"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Somos iguales! 😄",
         "tr": "¡Ха, ха! ¡Со́мос игуа́лэс!",
         "ru": "Ха-ха! Мы одинаковые!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "era",
        "buen",
        "mal",
        "regular"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Qué bien! 😄",
         "tr": "¡Ха, ха! ¡Кэ бьен!",
         "ru": "Ха-ха! Здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😄",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Eras buen alumno?",
      "tr": "¿Э́рас буэн алу́мно?",
      "ru": "Ты был(а) хорошим учеником?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-antes",
   "desde": 9,
   "titulo": "Antes y ahora",
   "tituloRu": "Раньше и сейчас",
   "resumen": "Сравнить прошлое и настоящее: antes vivía…, ahora vivo…",
   "intro": "Лусия сравнивает свою жизнь раньше и сейчас. А ты? «Antes… , ahora…».",
   "inicio": "lucia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "lucia",
     "titulo": "Лусия: раньше и сейчас",
     "bot": [
      {
       "es": "Antes vivía con mis padres y no tenía trabajo. Ahora vivo sola y soy profesora. 🙂",
       "tr": "А́нтэс биби́а кон мис па́дрэс и но тэни́а траба́хо. Ао́ра би́бо со́ла и сой профэсо́ра.",
       "ru": "Раньше я жила с родителями и не работала. Теперь живу одна и преподаю."
      },
      {
       "es": "¿Y tú? ¿Qué hacías antes que ahora no haces?",
       "tr": "¿И ту? ¿Кэ аси́ас а́нтэс кэ ао́ра но а́сэс?",
       "ru": "А ты? Что ты делал(а) раньше, а сейчас нет?"
      }
     ],
     "ideas": [
      {
       "es": "Antes fumaba, ahora no.",
       "ru": "Раньше я курил(а), а сейчас нет."
      },
      {
       "es": "Antes vivía en Rusia, ahora vivo en España.",
       "ru": "Раньше я жил(а) в России, теперь в Испании."
      },
      {
       "es": "Antes no hablaba español.",
       "ru": "Раньше я не говорил(а) по-испански."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Испанский",
       "claves": [
        "espanol"
       ],
       "resp": [
        {
         "es": "¡Y ahora sí! 😄",
         "tr": "¡И ао́ра си!",
         "ru": "А теперь говоришь!"
        }
       ],
       "ir": "cambio",
       "dato": "Раньше"
      },
      {
       "etiqueta": "Antes + imperfecto",
       "claves": [
        "antes",
        "~aba",
        "~ia"
       ],
       "resp": [
        {
         "es": "¡Qué cambio! 😮",
         "tr": "¡Кэ ка́мбьо!",
         "ru": "Вот это перемены!"
        }
       ],
       "ir": "cambio",
       "dato": "Раньше"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Antes…, ahora…».",
         "tr": "Ди: «А́нтэс…, ао́ра…».",
         "ru": "Скажи: «Antes…, ahora…»."
        }
       ],
       "ir": "cambio",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hacías antes?",
      "tr": "¿Кэ аси́ас а́нтэс?",
      "ru": "Что ты делал(а) раньше?"
     }
    },
    {
     "id": "cambio",
     "titulo": "Технологии",
     "bot": [
      {
       "es": "Antes no había móviles. Mis padres escribían cartas. ✉️ ¿Cómo hablabas con tus amigos cuando eras joven?",
       "tr": "А́нтэс но аби́а мо́билэс. Мис па́дрэс эскриби́ан ка́ртас. ¿Ко́мо абла́бас кон тус ами́гос куа́ндо э́рас хо́бэн?",
       "ru": "Раньше не было мобильных. Мои родители писали письма. А как ты общался(-лась) с друзьями в юности?"
      }
     ],
     "ideas": [
      {
       "es": "Los llamaba por teléfono.",
       "ru": "Я им звонил(а) по телефону."
      },
      {
       "es": "Nos veíamos en la calle.",
       "ru": "Мы встречались на улице."
      },
      {
       "es": "Ya había móviles.",
       "ru": "Мобильные уже были."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Уже были мобильные",
       "claves": [
        "ya habia",
        "movil"
       ],
       "resp": [
        {
         "es": "¡Ah, eres más joven que mis padres! 😄",
         "tr": "¡А, э́рэс мас хо́бэн кэ мис па́дрэс!",
         "ru": "А, ты моложе моих родителей!"
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Imperfecto",
       "claves": [
        "llamaba",
        "veiamos",
        "escribia",
        "~aba",
        "~ia"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 😊",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "mejor",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo hablabas con tus amigos?",
      "tr": "¿Ко́мо абла́бас кон тус ами́гос?",
      "ru": "Как ты общался(-лась) с друзьями?"
     }
    },
    {
     "id": "mejor",
     "titulo": "Лучше раньше?",
     "bot": [
      {
       "es": "Mi abuela siempre dice: «Antes todo era mejor». 👵 ¿Qué piensas tú?",
       "tr": "Ми абуэ́ла сье́мпрэ ди́сэ: «А́нтэс то́до э́ра мэхо́р». ¿Кэ пье́нсас ту?",
       "ru": "Моя бабушка всегда говорит: «Раньше всё было лучше». А ты что думаешь?"
      }
     ],
     "ideas": [
      {
       "es": "No, ahora es mejor.",
       "ru": "Нет, сейчас лучше."
      },
      {
       "es": "Algunas cosas sí.",
       "ru": "Кое-что — да."
      },
      {
       "es": "Sí, la vida era más tranquila.",
       "ru": "Да, жизнь была спокойнее."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "mejor",
        "=si",
        "=no",
        "tranquil",
        "cosas",
        "depende",
        "creo",
        "pienso"
       ],
       "resp": [
        {
         "es": "¡Buena respuesta! 😄",
         "tr": "¡Буэ́на рэспуэ́ста!",
         "ru": "Хороший ответ!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buena respuesta! 😄",
         "tr": "¡Буэ́на рэспуэ́ста!",
         "ru": "Хороший ответ!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Antes era mejor?",
      "tr": "¿А́нтэс э́ра мэхо́р?",
      "ru": "Раньше было лучше?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-paso",
   "desde": 9,
   "titulo": "¿Qué pasó?",
   "tituloRu": "Что случилось?",
   "resumen": "Estaba… cuando…: фон и событие",
   "intro": "С Лусией произошёл необычный случай в метро. Расспроси её: «¿Qué pasó?». Estaba + gerundio… cuando + indefinido.",
   "inicio": "historia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "historia",
     "titulo": "История",
     "bot": [
      {
       "es": "¡No te lo vas a creer! Ayer estaba en el metro cuando… 😱",
       "tr": "¡Но тэ ло бас а крээ́р! Ае́р эста́ба эн эл мэ́тро куа́ндо…",
       "ru": "Ты не поверишь! Вчера я была в метро, и тут…"
      }
     ],
     "ideas": [
      {
       "es": "¿Qué pasó?",
       "ru": "Что случилось?"
      },
      {
       "es": "¿Cuándo?",
       "ru": "Когда?"
      },
      {
       "es": "¡Cuéntame!",
       "ru": "Рассказывай!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Спрашивает",
       "claves": [
        "que paso",
        "cuentame",
        "cuando",
        "dime",
        "y luego",
        "y entonces"
       ],
       "resp": [
        {
         "es": "Estaba leyendo un libro cuando un señor me tocó el hombro. ¡Era mi profesor del colegio! 👨‍🏫",
         "tr": "Эста́ба лэе́ндо ун ли́бро куа́ндо ун сэньо́р мэ токо́ эл о́мбро. ¡Э́ра ми профэсо́р дэл колэ́хьо!",
         "ru": "Я читала книгу, и тут какой-то мужчина тронул меня за плечо. Это был мой школьный учитель!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Estaba leyendo un libro cuando un señor me tocó el hombro. ¡Era mi profesor del colegio! 👨‍🏫",
         "tr": "Эста́ба лэе́ндо ун ли́бро куа́ндо ун сэньо́р мэ токо́ эл о́мбро. ¡Э́ра ми профэсо́р дэл колэ́хьо!",
         "ru": "Я читала книгу, и тут какой-то мужчина тронул меня за плечо. Это был мой школьный учитель!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "О чём ты спросишь?"
     }
    },
    {
     "id": "tu",
     "titulo": "Твоя история",
     "bot": [
      {
       "es": "¡Qué casualidad! ¿Y a ti? ¿Te ha pasado algo así? Cuéntamelo: «Estaba… cuando…».",
       "tr": "¡Кэ касуалида́д! ¿И а ти? ¿Тэ а паса́до а́лго аси́? Куэ́нтамэло: «Эста́ба… куа́ндо…».",
       "ru": "Вот совпадение! А с тобой? Случалось что-нибудь такое? Расскажи: «Estaba… cuando…»."
      }
     ],
     "ideas": [
      {
       "es": "Estaba en la calle cuando vi a un amigo.",
       "ru": "Я был(а) на улице, и тут увидел(а) друга."
      },
      {
       "es": "Estaba durmiendo cuando sonó el teléfono.",
       "ru": "Я спал(а), когда зазвонил телефон."
      },
      {
       "es": "No, nunca.",
       "ru": "Нет, никогда."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "nunca",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Mejor! 😄",
         "tr": "¡Мэхо́р!",
         "ru": "Тем лучше!"
        }
       ],
       "ir": "elige"
      },
      {
       "etiqueta": "Estaba… cuando",
       "claves": [
        "estaba cuando",
        "estaba",
        "cuando"
       ],
       "resp": [
        {
         "es": "¡Qué historia! 😮",
         "tr": "¡Кэ исто́рья!",
         "ru": "Вот это история!"
        }
       ],
       "ir": "elige",
       "dato": "История"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué historia! 😮",
         "tr": "¡Кэ исто́рья!",
         "ru": "Вот это история!"
        }
       ],
       "ir": "elige",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Cuéntame tu historia.",
      "tr": "Куэ́нтамэ ту исто́рья.",
      "ru": "Расскажи свою историю."
     }
    },
    {
     "id": "elige",
     "titulo": "Estaba или estuve",
     "bot": [
      {
       "es": "Una pregunta: «___ en casa cuando llamó Ana». ¿«Estaba» o «estuve»? 🤔",
       "tr": "У́на прэгу́нта: «___ эн ка́са куа́ндо ямо́ А́на». ¿«Эста́ба» о «эсту́бэ»?",
       "ru": "Вопрос: «___ en casa cuando llamó Ana». «Estaba» или «estuve»?"
      }
     ],
     "ideas": [
      {
       "es": "Estaba.",
       "ru": "Estaba."
      },
      {
       "es": "Estuve.",
       "ru": "Estuve."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Estaba",
       "claves": [
        "estaba"
       ],
       "resp": [
        {
         "es": "¡Sí! «Estaba» es la situación; «llamó», la acción. 👍",
         "tr": "¡Си! «Эста́ба» эс ла ситуасьо́н; «ямо́», ла аксьо́н.",
         "ru": "Да! «Estaba» — это обстановка, «llamó» — действие."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Estuve",
       "claves": [
        "estuve"
       ],
       "resp": [
        {
         "es": "Mmm… «Estaba en casa» es la situación, y «cuando llamó Ana», la acción. 😉",
         "tr": "Ммм… «Эста́ба эн ка́са» эс ла ситуасьо́н, и «куа́ндо ямо́ А́на», ла аксьо́н.",
         "ru": "Хм… «Estaba en casa» — обстановка, «cuando llamó Ana» — действие."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "«Estaba en casa cuando llamó Ana». 😉",
         "tr": "«Эста́ба эн ка́са куа́ндо ямо́ А́на».",
         "ru": "«Estaba en casa cuando llamó Ana»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Estaba o estuve?",
      "tr": "¿Эста́ба о эсту́бэ?",
      "ru": "Estaba или estuve?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-ciudad",
   "desde": 9,
   "titulo": "Tu ciudad antes",
   "tituloRu": "Твой город раньше",
   "resumen": "Описать, каким был город: había, era, tenía",
   "intro": "Лусия рассказывает, какой была Барселона раньше, по словам Хавьера. А каким был твой город?",
   "inicio": "bcn",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "bcn",
     "titulo": "Барселона раньше",
     "bot": [
      {
       "es": "Javier dice que antes Barcelona era muy diferente: no había playas bonitas y había muchas fábricas. 🏭",
       "tr": "Хабье́р ди́сэ кэ а́нтэс Барсэло́на э́ра муй дифэрэ́нтэ: но аби́а пла́яс бони́тас и аби́а му́час фа́брикас.",
       "ru": "Хавьер говорит, что раньше Барселона была совсем другой: красивых пляжей не было, зато было много фабрик."
      },
      {
       "es": "¿Y tu ciudad? ¿Cómo era antes?",
       "tr": "¿И ту сьюда́д? ¿Ко́мо э́ра а́нтэс?",
       "ru": "А твой город? Каким он был раньше?"
      }
     ],
     "ideas": [
      {
       "es": "Era más pequeña.",
       "ru": "Он был меньше."
      },
      {
       "es": "Había menos coches.",
       "ru": "Машин было меньше."
      },
      {
       "es": "No había metro.",
       "ru": "Метро не было."
      },
      {
       "es": "Era más tranquila.",
       "ru": "Он был спокойнее."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Hubo (ошибка)",
       "claves": [
        "=hubo"
       ],
       "resp": [
        {
         "es": "😉 Para describir: «había».",
         "tr": "Па́ра дэскриби́р: «аби́а».",
         "ru": "Для описания: «había»."
        }
       ],
       "ir": "lugar",
       "dato": "Город раньше"
      },
      {
       "etiqueta": "Описывает",
       "claves": [
        "era",
        "habia",
        "tenia",
        "~aba",
        "menos",
        "mas"
       ],
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "lugar",
       "dato": "Город раньше"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "lugar",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo era tu ciudad?",
      "tr": "¿Ко́мо э́ра ту сьюда́д?",
      "ru": "Каким был твой город?"
     }
    },
    {
     "id": "lugar",
     "titulo": "Любимое место",
     "bot": [
      {
       "es": "¿Qué lugar de tu ciudad te gustaba más cuando eras {pequeño/pequeña}? 🌳",
       "tr": "¿Кэ луга́р дэ ту сьюда́д тэ густа́ба мас куа́ндо э́рас {пэкэ́ньо/пэкэ́ня}?",
       "ru": "Какое место в твоём городе тебе больше всего нравилось в детстве?"
      }
     ],
     "ideas": [
      {
       "es": "Me gustaba el parque.",
       "ru": "Мне нравился парк."
      },
      {
       "es": "Me encantaba la casa de mi abuela.",
       "ru": "Я обожал(а) бабушкин дом."
      },
      {
       "es": "Me gustaba ir al río.",
       "ru": "Мне нравилось ходить на речку."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Речка",
       "claves": [
        "rio"
       ],
       "resp": [
        {
         "es": "¡Como yo! Yo iba al río con Pablo. 😄",
         "tr": "¡Ко́мо йо! Йо и́ба ал ри́о кон Па́бло.",
         "ru": "Как и я! Я ходила на речку с Пабло."
        }
       ],
       "ir": "ahora",
       "dato": "Любимое место"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "gustaba",
        "encantaba",
        "parque",
        "casa",
        "playa",
        "plaza"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 😊",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "ahora",
       "dato": "Любимое место"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bonito! 😊",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "ahora",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué lugar te gustaba?",
      "tr": "¿Кэ луга́р тэ густа́ба?",
      "ru": "Какое место тебе нравилось?"
     }
    },
    {
     "id": "ahora",
     "titulo": "Сейчас",
     "bot": [
      {
       "es": "¿Y todavía existe ese lugar? 🤔",
       "tr": "¿И тодаби́а экси́стэ э́сэ луга́р?",
       "ru": "А это место ещё существует?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, todavía está.",
       "ru": "Да, ещё есть."
      },
      {
       "es": "No, ya no existe.",
       "ru": "Нет, его больше нет."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Больше нет",
       "claves": [
        "ya no",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Qué pena! 😢",
         "tr": "¡Кэ пэ́на!",
         "ru": "Как жаль!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "todavia",
        "esta",
        "existe"
       ],
       "resp": [
        {
         "es": "¡Qué bien! Un día lo visitas. 😊",
         "tr": "¡Кэ бьен! Ун ди́а ло биси́тас.",
         "ru": "Здорово! Как-нибудь съезди туда."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Todavía existe?",
      "tr": "¿Тодаби́а экси́стэ?",
      "ru": "Оно ещё существует?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-soler",
   "desde": 9,
   "titulo": "Lo que solías hacer",
   "tituloRu": "Что ты обычно делал(а)",
   "resumen": "Привычки в прошлом: soler + infinitivo, siempre, todos los veranos",
   "intro": "Лусия вспоминает свои лета в деревне. «Solía…», «todos los veranos…».",
   "inicio": "verano",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "verano",
     "titulo": "Лето",
     "bot": [
      {
       "es": "Todos los veranos íbamos al pueblo de mis abuelos. Solíamos bañarnos en el río. ☀️",
       "tr": "То́дос лос бэра́нос и́бамос ал пуэ́бло дэ мис абуэ́лос. Соли́амос баня́рнос эн эл ри́о.",
       "ru": "Каждое лето мы ездили в деревню к бабушке с дедушкой. Мы обычно купались в речке."
      },
      {
       "es": "¿Qué solías hacer tú en verano?",
       "tr": "¿Кэ соли́ас асэ́р ту эн бэра́но?",
       "ru": "А что ты обычно делал(а) летом?"
      }
     ],
     "ideas": [
      {
       "es": "Solía ir a la dacha.",
       "ru": "Я обычно ездил(а) на дачу."
      },
      {
       "es": "Íbamos a la playa.",
       "ru": "Мы ездили на море."
      },
      {
       "es": "Solía estar en la ciudad.",
       "ru": "Я обычно был(а) в городе."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Дача",
       "claves": [
        "dacha"
       ],
       "resp": [
        {
         "es": "¡La dacha! Ana también iba a la dacha de sus abuelos. 🏡",
         "tr": "¡Ла да́ча! А́на тамбье́н и́ба а ла да́ча дэ сус абуэ́лос.",
         "ru": "Дача! Аня тоже ездила на дачу к бабушке с дедушкой."
        }
       ],
       "ir": "fiesta",
       "dato": "Лето",
       "datoValor": "la dacha"
      },
      {
       "etiqueta": "Soler / imperfecto",
       "claves": [
        "solia",
        "soliamos",
        "iba",
        "ibamos",
        "~aba",
        "~ia"
       ],
       "resp": [
        {
         "es": "¡Qué bien! ☀️",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "fiesta",
       "dato": "Лето"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Solía…» o «íbamos…».",
         "tr": "«Соли́а…» о «и́бамос…».",
         "ru": "«Solía…» или «íbamos…»."
        }
       ],
       "ir": "fiesta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué solías hacer en verano?",
      "tr": "¿Кэ соли́ас асэ́р эн бэра́но?",
      "ru": "Что ты обычно делал(а) летом?"
     }
    },
    {
     "id": "fiesta",
     "titulo": "Праздники",
     "bot": [
      {
       "es": "En Navidad siempre comíamos en casa de mi abuela. 🎄 ¿Cómo celebrabais el Año Nuevo en tu familia?",
       "tr": "Эн Набида́д сье́мпрэ коми́амос эн ка́са дэ ми абуэ́ла. ¿Ко́мо сэлэбра́байс эл А́ньо Нуэ́бо эн ту фами́лья?",
       "ru": "На Рождество мы всегда обедали у бабушки. А как в твоей семье встречали Новый год?"
      }
     ],
     "ideas": [
      {
       "es": "Cenábamos en casa con la familia.",
       "ru": "Мы ужинали дома с семьёй."
      },
      {
       "es": "Veíamos la tele y comíamos ensalada.",
       "ru": "Мы смотрели телевизор и ели салат."
      },
      {
       "es": "Íbamos a casa de los abuelos.",
       "ru": "Мы ездили к бабушке с дедушкой."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Imperfecto",
       "claves": [
        "~abamos",
        "~iamos",
        "ibamos",
        "cenabamos",
        "comiamos",
        "veiamos"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 🎉",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "ahora",
       "dato": "Новый год"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "cena",
        "familia",
        "casa",
        "abuel",
        "tele",
        "ensalada"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 🎉",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "ahora",
       "dato": "Новый год"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bonito! 🎉",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "ahora",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo celebrabais el Año Nuevo?",
      "tr": "¿Ко́мо сэлэбра́байс эл А́ньо Нуэ́бо?",
      "ru": "Как вы встречали Новый год?"
     }
    },
    {
     "id": "ahora",
     "titulo": "А сейчас?",
     "bot": [
      {
       "es": "¿Y ahora? ¿Lo sigues haciendo igual?",
       "tr": "¿И ао́ра? ¿Ло си́гэс асье́ндо игуа́л?",
       "ru": "А сейчас? Ты до сих пор так делаешь?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, todavía.",
       "ru": "Да, до сих пор."
      },
      {
       "es": "No, ahora es diferente.",
       "ru": "Нет, сейчас всё иначе."
      },
      {
       "es": "A veces.",
       "ru": "Иногда."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "=no",
        "todavia",
        "diferente",
        "veces",
        "igual",
        "ya no"
       ],
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Lo sigues haciendo?",
      "tr": "¿Ло си́гэс асье́ндо?",
      "ru": "Ты до сих пор так делаешь?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u9-susto",
   "desde": 9,
   "titulo": "Un susto",
   "tituloRu": "Испуг",
   "resumen": "Рассказать историю: era de noche, hacía frío, de repente…",
   "intro": "Лусия рассказывает страшную историю. Слушай, спрашивай и потом расскажи свою.",
   "inicio": "noche",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "noche",
     "titulo": "Ночь",
     "bot": [
      {
       "es": "Una historia: era de noche, hacía mucho viento y yo estaba sola en casa. De repente, oí un ruido en el balcón… 😨",
       "tr": "У́на исто́рья: э́ра дэ но́чэ, аси́а му́чо бье́нто и йо эста́ба со́ла эн ка́са. Дэ рэпэ́нтэ, ои́ ун руи́до эн эл балко́н…",
       "ru": "История: была ночь, дул сильный ветер, и я была дома одна. Вдруг я услышала шум на балконе…"
      }
     ],
     "ideas": [
      {
       "es": "¿Y qué hiciste?",
       "ru": "И что ты сделала?"
      },
      {
       "es": "¿Qué era?",
       "ru": "Что это было?"
      },
      {
       "es": "¡Qué miedo!",
       "ru": "Как страшно!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Спрашивает",
       "claves": [
        "que hiciste",
        "que era",
        "que paso",
        "y despues",
        "y luego"
       ],
       "resp": [
        {
         "es": "Abrí la puerta muy despacio y… ¡era un gato! 🐈 Estaba comiéndose mis plantas.",
         "tr": "Абри́ ла пуэ́рта муй дэспа́сьо и… ¡э́ра ун га́то! Эста́ба комье́ндосэ мис пла́нтас.",
         "ru": "Я очень медленно открыла дверь и… это была кошка! Она ела мои растения."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Страшно",
       "claves": [
        "miedo",
        "horror",
        "uf",
        "dios"
       ],
       "resp": [
        {
         "es": "¡Sí! Abrí la puerta y… ¡era un gato! 🐈",
         "tr": "¡Си! Абри́ ла пуэ́рта и… ¡э́ра ун га́то!",
         "ru": "Да! Я открыла дверь и… это была кошка!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Abrí la puerta y… ¡era un gato! 🐈",
         "tr": "Абри́ ла пуэ́рта и… ¡э́ра ун га́то!",
         "ru": "Я открыла дверь и… это была кошка!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me preguntas?",
      "tr": "¿Кэ мэ прэгу́нтас?",
      "ru": "О чём ты спросишь?"
     }
    },
    {
     "id": "tu",
     "titulo": "Твоя история",
     "bot": [
      {
       "es": "¿Y tú? ¿Has tenido algún susto? ¿Qué pasó?",
       "tr": "¿И ту? ¿Ас тэни́до алгу́н су́сто? ¿Кэ пасо́?",
       "ru": "А ты? С тобой когда-нибудь случалось что-нибудь пугающее? Что произошло?"
      }
     ],
     "ideas": [
      {
       "es": "Una vez me perdí en un bosque.",
       "ru": "Однажды я заблудился(-лась) в лесу."
      },
      {
       "es": "Estaba solo en casa y se fue la luz.",
       "ru": "Я был(а) один(одна) дома, и вдруг погас свет."
      },
      {
       "es": "No, nunca.",
       "ru": "Нет, никогда."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "nunca",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Qué suerte! 😄",
         "tr": "¡Кэ суэ́ртэ!",
         "ru": "Везёт!"
        }
       ],
       "ir": "como"
      },
      {
       "etiqueta": "Рассказывает",
       "claves": [
        "una vez",
        "estaba",
        "era",
        "perdi",
        "paso",
        "~e",
        "~o"
       ],
       "resp": [
        {
         "es": "¡Uf, qué susto! 😱",
         "tr": "¡Уф, кэ су́сто!",
         "ru": "Ох, вот это, наверное, было страшно! 😱"
        }
       ],
       "ir": "como",
       "dato": "Испуг"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Uf, qué susto! 😱",
         "tr": "¡Уф, кэ су́сто!",
         "ru": "Ох, вот это, наверное, было страшно! 😱"
        }
       ],
       "ir": "como",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué pasó?",
      "tr": "¿Кэ пасо́?",
      "ru": "Что случилось?"
     }
    },
    {
     "id": "como",
     "titulo": "Как ты себя чувствовал(а)",
     "bot": [
      {
       "es": "¿Y cómo te sentiste? 😬",
       "tr": "¿И ко́мо тэ сэнти́стэ?",
       "ru": "И что ты почувствовал(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Tenía mucho miedo.",
       "ru": "Мне было очень страшно."
      },
      {
       "es": "Estaba muy nervioso.",
       "ru": "Я очень нервничал."
      },
      {
       "es": "Al final me reí mucho.",
       "ru": "В конце я много смеялся(-лась)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "tenia",
        "estaba",
        "miedo",
        "nervios",
        "rei",
        "senti"
       ],
       "resp": [
        {
         "es": "¡Te entiendo! 😅",
         "tr": "¡Тэ энтье́ндо!",
         "ru": "Понимаю тебя!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Te entiendo! 😅",
         "tr": "¡Тэ энтье́ндо!",
         "ru": "Понимаю тебя!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo te sentiste?",
      "tr": "¿Ко́мо тэ сэнти́стэ?",
      "ru": "Что ты почувствовал(а)?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Buenas noches, {nombre}! Y cuidado con los gatos. 🐈",
       "tr": "¡Буэ́нас но́чэс, {nombre}! И куида́до кон лос га́тос.",
       "ru": "Спокойной ночи, {nombre}! И будь осторожен(на) с кошками. 🐈"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-verano",
   "desde": 10,
   "titulo": "Planes para el verano",
   "tituloRu": "Планы на лето",
   "resumen": "Futuro simple: iré, haré, viajaré",
   "intro": "Лусия планирует лето. А ты? «Iré…», «haré…», «estaré…».",
   "inicio": "planes",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "planes",
     "titulo": "Планы",
     "bot": [
      {
       "es": "Este verano iré al pueblo de mis padres y después viajaré a Portugal con Ana. 🌊",
       "tr": "Э́стэ бэра́но ирэ́ ал пуэ́бло дэ мис па́дрэс и дэспуэ́с бьяхарэ́ а Португа́л кон А́на.",
       "ru": "Этим летом я поеду в деревню к родителям, а потом мы с Аней поедем в Португалию."
      },
      {
       "es": "¿Y tú? ¿Qué harás este verano?",
       "tr": "¿И ту? ¿Кэ ара́с э́стэ бэра́но?",
       "ru": "А ты? Что ты будешь делать этим летом?"
      }
     ],
     "ideas": [
      {
       "es": "Iré a la playa.",
       "ru": "Я поеду на море."
      },
      {
       "es": "Trabajaré todo el verano.",
       "ru": "Я буду работать всё лето."
      },
      {
       "es": "Visitaré a mi familia.",
       "ru": "Я навещу семью."
      },
      {
       "es": "Todavía no lo sé.",
       "ru": "Я ещё не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не знает",
       "claves": [
        "no lo se",
        "=no se",
        "todavia no"
       ],
       "resp": [
        {
         "es": "¡Todavía hay tiempo! 😊",
         "tr": "¡Тодаби́а ай тье́мпо!",
         "ru": "Ещё есть время!"
        }
       ],
       "ir": "tiempo",
       "dato": "Лето",
       "datoValor": "no sabe"
      },
      {
       "etiqueta": "Работать",
       "claves": [
        "trabajare"
       ],
       "resp": [
        {
         "es": "¡Uf! Pero tendrás un fin de semana libre, ¿no? 😅",
         "tr": "¡Уф! Пэ́ро тэндра́с ун фин дэ сэма́на ли́брэ, ¿но?",
         "ru": "Ох! Но выходные-то у тебя будут?"
        }
       ],
       "ir": "tiempo",
       "dato": "Лето"
      },
      {
       "etiqueta": "Futuro",
       "claves": [
        "~re",
        "~ra",
        "~remos",
        "voy a"
       ],
       "resp": [
        {
         "es": "¡Qué buen plan! 😎",
         "tr": "¡Кэ буэн план!",
         "ru": "Отличный план!"
        }
       ],
       "ir": "tiempo",
       "dato": "Лето"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Iré…», «haré…».",
         "tr": "Ди: «Ирэ́…», «арэ́…».",
         "ru": "Скажи: «Iré…», «haré…»"
        }
       ],
       "ir": "tiempo",
       "comodin": true
      }
     ],
     "aTi": [
      {
       "es": "Iré al pueblo de mis padres y después a Portugal con Ana. 🌊",
       "tr": "Ирэ́ ал пуэ́бло дэ мис па́дрэс и дэспуэ́с а Португа́л кон А́на.",
       "ru": "Поеду в деревню к родителям, а потом в Португалию с Аней."
      }
     ],
     "aTiTema": "futuro_l",
     "retomar": {
      "es": "¿Qué harás este verano?",
      "tr": "¿Кэ ара́с э́стэ бэра́но?",
      "ru": "Что ты будешь делать летом?"
     }
    },
    {
     "id": "tiempo",
     "titulo": "Сколько",
     "bot": [
      {
       "es": "¿Cuántos días de vacaciones tendrás? 🏖️",
       "tr": "¿Куа́нтос ди́ас дэ бакасьо́нэс тэндра́с?",
       "ru": "Сколько у тебя будет дней отпуска?"
      }
     ],
     "ideas": [
      {
       "es": "Tendré dos semanas.",
       "ru": "У меня будет две недели."
      },
      {
       "es": "Tendré un mes.",
       "ru": "У меня будет месяц."
      },
      {
       "es": "No tendré vacaciones.",
       "ru": "У меня не будет отпуска."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Tener irregular",
       "claves": [
        "=tenere"
       ],
       "resp": [
        {
         "es": "😉 De «tener»: «tendré».",
         "tr": "Дэ «тэнэ́р»: «тэндрэ́».",
         "ru": "От «tener»: «tendré»."
        }
       ],
       "ir": "llevar"
      },
      {
       "etiqueta": "Нет отпуска",
       "claves": [
        "no tendre",
        "ninguno"
       ],
       "resp": [
        {
         "es": "¡Vaya! 😢",
         "tr": "¡Ба́я!",
         "ru": "Жаль!"
        }
       ],
       "ir": "llevar"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "tendre",
        "semana",
        "mes",
        "dias"
       ],
       "resp": [
        {
         "es": "¡Genial! 😎",
         "tr": "¡Хэнья́л!",
         "ru": "Отлично!"
        }
       ],
       "ir": "llevar"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Genial! 😎",
         "tr": "¡Хэнья́л!",
         "ru": "Отлично!"
        }
       ],
       "ir": "llevar",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuántos días tendrás?",
      "tr": "¿Куа́нтос ди́ас тэндра́с?",
      "ru": "Сколько дней у тебя будет?"
     }
    },
    {
     "id": "llevar",
     "titulo": "Что взять",
     "bot": [
      {
       "es": "Una pregunta para Portugal: ¿qué tiempo hará en agosto? ¿Qué me llevo? 🧳",
       "tr": "У́на прэгу́нта па́ра Португа́л: ¿кэ тье́мпо ара́ эн аго́сто? ¿Кэ мэ е́бо?",
       "ru": "Вопрос про Португалию: какая будет погода в августе? Что мне взять с собой? 🧳"
      }
     ],
     "ideas": [
      {
       "es": "Hará calor: lleva crema de sol.",
       "ru": "Будет жарко: возьми солнцезащитный крем."
      },
      {
       "es": "Hará sol. Lleva un sombrero.",
       "ru": "Будет солнечно. Возьми шляпу."
      },
      {
       "es": "Lleva un jersey para la noche.",
       "ru": "Возьми свитер на вечер."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "hara",
        "lleva",
        "calor",
        "sol",
        "crema",
        "jersey",
        "sombrero",
        "banador"
       ],
       "resp": [
        {
         "es": "¡Gracias! ¡Lo apunto! 📝",
         "tr": "¡Гра́сьяс! ¡Ло апу́нто!",
         "ru": "Спасибо! Записываю!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Gracias! 😊",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me llevo?",
      "tr": "¿Кэ мэ е́бо?",
      "ru": "Что мне взять?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-cinco",
   "desde": 10,
   "titulo": "Dentro de cinco años",
   "tituloRu": "Через пять лет",
   "resumen": "Будущее и предположения: dentro de…, creo que…, seguramente",
   "intro": "Лусия думает о будущем. Где ты будешь через пять лет?",
   "inicio": "donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "donde",
     "titulo": "Где ты будешь",
     "bot": [
      {
       "es": "Dentro de cinco años creo que seguiré en Barcelona. ¡Y tendré un perro! 🐕",
       "tr": "Дэ́нтро дэ си́нко а́ньос крэ́о кэ сэгирэ́ эн Барсэло́на. ¡И тэндрэ́ ун пэ́рро!",
       "ru": "Думаю, через пять лет я всё ещё буду в Барселоне. И у меня будет собака!"
      },
      {
       "es": "¿Y tú? ¿Dónde estarás dentro de cinco años?",
       "tr": "¿И ту? ¿До́ндэ эстара́с дэ́нтро дэ си́нко а́ньос?",
       "ru": "А ты? Где ты будешь через пять лет?"
      }
     ],
     "ideas": [
      {
       "es": "Viviré en España.",
       "ru": "Я буду жить в Испании."
      },
      {
       "es": "Creo que estaré en Rusia.",
       "ru": "Думаю, я буду в России."
      },
      {
       "es": "No lo sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Испания",
       "claves": [
        "espana",
        "barcelona",
        "madrid"
       ],
       "resp": [
        {
         "es": "¡Entonces seremos vecinos! 😄",
         "tr": "¡Энто́нсэс сэрэ́мос бэси́нос!",
         "ru": "Значит, будем соседями!"
        }
       ],
       "ir": "espanol",
       "dato": "Через пять лет"
      },
      {
       "etiqueta": "Не знает",
       "claves": [
        "no lo se",
        "=no se",
        "quien sabe"
       ],
       "resp": [
        {
         "es": "¡Nadie lo sabe! 😄",
         "tr": "¡На́дье ло са́бэ!",
         "ru": "Никто не знает!"
        }
       ],
       "ir": "espanol",
       "dato": "Через пять лет",
       "datoValor": "no sabe"
      },
      {
       "etiqueta": "Futuro",
       "claves": [
        "~re",
        "~ra",
        "estare",
        "vivire",
        "creo"
       ],
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "espanol",
       "dato": "Через пять лет"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué interesante! 🤓",
         "tr": "¡Кэ интэрэса́нтэ!",
         "ru": "Как интересно!"
        }
       ],
       "ir": "espanol",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde estarás?",
      "tr": "¿До́ндэ эстара́с?",
      "ru": "Где ты будешь?"
     }
    },
    {
     "id": "espanol",
     "titulo": "Испанский",
     "bot": [
      {
       "es": "¿Y tu español? ¿Cómo hablarás dentro de cinco años? 😄",
       "tr": "¿И ту эспаньо́л? ¿Ко́мо аблара́с дэ́нтро дэ си́нко а́ньос?",
       "ru": "А твой испанский? Как ты будешь говорить через пять лет?"
      }
     ],
     "ideas": [
      {
       "es": "Hablaré perfectamente.",
       "ru": "Буду говорить идеально."
      },
      {
       "es": "Hablaré mucho mejor.",
       "ru": "Буду говорить гораздо лучше."
      },
      {
       "es": "Hablaré como un español.",
       "ru": "Буду говорить как испанец."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "hablare",
        "mejor",
        "perfect",
        "bien",
        "como"
       ],
       "resp": [
        {
         "es": "¡Seguro que sí! 💪",
         "tr": "¡Сэгу́ро кэ си!",
         "ru": "Конечно!"
        }
       ],
       "ir": "ana"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Seguro que sí! 💪",
         "tr": "¡Сэгу́ро кэ си!",
         "ru": "Конечно!"
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo hablarás?",
      "tr": "¿Ко́мо аблара́с?",
      "ru": "Как ты будешь говорить?"
     }
    },
    {
     "id": "ana",
     "titulo": "Аня",
     "bot": [
      {
       "es": "Ana hará un máster de inteligencia artificial. ¿Qué crees que hará después? 🤔",
       "tr": "А́на ара́ ун ма́стэр дэ интэлихэ́нсья артифисья́л. ¿Кэ крэ́эс кэ ара́ дэспуэ́с?",
       "ru": "Аня будет учиться в магистратуре по искусственному интеллекту. Как думаешь, что она будет делать потом?"
      }
     ],
     "ideas": [
      {
       "es": "Trabajará en una empresa grande.",
       "ru": "Будет работать в большой компании."
      },
      {
       "es": "Volverá a Moscú.",
       "ru": "Вернётся в Москву."
      },
      {
       "es": "Se quedará en Barcelona.",
       "ru": "Останется в Барселоне."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Останется",
       "claves": [
        "quedara",
        "barcelona"
       ],
       "resp": [
        {
         "es": "¡Eso espero! 😊",
         "tr": "¡Э́со эспэ́ро!",
         "ru": "Надеюсь!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Вернётся",
       "claves": [
        "volvera",
        "moscu"
       ],
       "resp": [
        {
         "es": "¡Oh, no! ¡La echaré de menos! 😢",
         "tr": "¡О, но! ¡Ла эчарэ́ дэ мэ́нос!",
         "ru": "Ой, нет! Я буду по ней скучать!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Futuro",
       "claves": [
        "~ra"
       ],
       "resp": [
        {
         "es": "¡Puede ser! 🙂",
         "tr": "¡Пуэ́дэ сэр!",
         "ru": "Может быть!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Puede ser! 🙂",
         "tr": "¡Пуэ́дэ сэр!",
         "ru": "Может быть!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hará Ana?",
      "tr": "¿Кэ ара́ А́на?",
      "ru": "Что будет делать Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-si",
   "desde": 10,
   "titulo": "Si…",
   "tituloRu": "Если…",
   "resumen": "Si + presente, futuro: si llueve, iremos al cine",
   "intro": "Лусия строит планы на выходные с «если». «Si hace sol, iremos a la playa».",
   "inicio": "sol",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "sol",
     "titulo": "Если будет солнце",
     "bot": [
      {
       "es": "Este sábado, si hace sol, iré a la playa con Ana. ☀️",
       "tr": "Э́стэ са́бадо, си а́сэ сол, ирэ́ а ла пла́я кон А́на.",
       "ru": "В эту субботу, если будет солнечно, я поеду с Аней на пляж."
      },
      {
       "es": "¿Y si llueve? ¿Qué hacemos? 🌧️",
       "tr": "¿И си йуэ́бэ? ¿Кэ асэ́мос?",
       "ru": "А если пойдёт дождь? Что будем делать?"
      }
     ],
     "ideas": [
      {
       "es": "Si llueve, iremos al cine.",
       "ru": "Если пойдёт дождь, пойдём в кино."
      },
      {
       "es": "Si llueve, nos quedaremos en casa.",
       "ru": "Если пойдёт дождь, останемся дома."
      },
      {
       "es": "Si llueve, iremos a un museo.",
       "ru": "Если пойдёт дождь, пойдём в музей."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Si + futuro (ошибка)",
       "claves": [
        "si llovera",
        "si va a llover"
       ],
       "resp": [
        {
         "es": "😉 Con «si», presente: «si llueve, iremos…».",
         "tr": "Кон «си», прэсэ́нтэ: «си йуэ́бэ, ирэ́мос…».",
         "ru": "После «si» — настоящее: «si llueve, iremos…»."
        }
       ],
       "ir": "dinero"
      },
      {
       "etiqueta": "Si + presente + futuro",
       "claves": [
        "si llueve",
        "~remos",
        "~re",
        "cine",
        "museo",
        "casa"
       ],
       "resp": [
        {
         "es": "¡Buena idea! 👍",
         "tr": "¡Буэ́на идэ́а!",
         "ru": "Хорошая идея!"
        }
       ],
       "ir": "dinero",
       "dato": "Если дождь"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Si llueve, iremos al cine».",
         "tr": "«Си йуэ́бэ, ирэ́мос ал си́нэ».",
         "ru": "«Si llueve, iremos al cine»."
        }
       ],
       "ir": "dinero",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Y si llueve?",
      "tr": "¿И си йуэ́бэ?",
      "ru": "А если дождь?"
     }
    },
    {
     "id": "dinero",
     "titulo": "Если будет время",
     "bot": [
      {
       "es": "Y tú: ¿qué harás si tienes un día libre la semana que viene? 🗓️",
       "tr": "И ту: ¿кэ ара́с си тье́нэс ун ди́а ли́брэ ла сэма́на кэ бье́нэ?",
       "ru": "А ты: что ты будешь делать, если на следующей неделе у тебя будет свободный день?"
      }
     ],
     "ideas": [
      {
       "es": "Si tengo un día libre, dormiré mucho.",
       "ru": "Если будет свободный день, буду долго спать."
      },
      {
       "es": "Si tengo tiempo, te llamaré.",
       "ru": "Если будет время, позвоню тебе."
      },
      {
       "es": "Iré a la montaña.",
       "ru": "Поеду в горы."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Позвонит",
       "claves": [
        "te llamare",
        "te escribire",
        "contigo"
       ],
       "resp": [
        {
         "es": "¡Genial! Te espero. 😄",
         "tr": "¡Хэнья́л! Тэ эспэ́ро.",
         "ru": "Здорово! Жду!"
        }
       ],
       "ir": "completa",
       "dato": "Свободный день"
      },
      {
       "etiqueta": "Futuro",
       "claves": [
        "~re",
        "~remos",
        "si tengo"
       ],
       "resp": [
        {
         "es": "¡Me parece muy bien! 😊",
         "tr": "¡Мэ парэ́сэ муй бьен!",
         "ru": "По-моему, отлично!"
        }
       ],
       "ir": "completa",
       "dato": "Свободный день"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Me parece muy bien! 😊",
         "tr": "¡Мэ парэ́сэ муй бьен!",
         "ru": "По-моему, отлично!"
        }
       ],
       "ir": "completa",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harás?",
      "tr": "¿Кэ ара́с?",
      "ru": "Что ты будешь делать?"
     }
    },
    {
     "id": "completa",
     "titulo": "Закончи фразу",
     "bot": [
      {
       "es": "Termina la frase: «Si estudio todos los días…» 📚",
       "tr": "Тэрми́на ла фра́сэ: «Си эсту́дьо то́дос лос ди́ас…»",
       "ru": "Закончи фразу: «Si estudio todos los días…»"
      }
     ],
     "ideas": [
      {
       "es": "…hablaré muy bien.",
       "ru": "…буду говорить очень хорошо."
      },
      {
       "es": "…aprobaré el examen.",
       "ru": "…сдам экзамен."
      },
      {
       "es": "…aprenderé mucho.",
       "ru": "…многому научусь."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Futuro",
       "claves": [
        "~re",
        "~remos",
        "~ra"
       ],
       "resp": [
        {
         "es": "¡Exacto! 👏",
         "tr": "¡Экса́кто!",
         "ru": "Именно!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «…hablaré muy bien».",
         "tr": "«…абларэ́ муй бьен».",
         "ru": "«…hablaré muy bien»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Si estudio todos los días…",
      "tr": "Си эсту́дьо то́дос лос ди́ас…",
      "ru": "Если я буду заниматься каждый день…"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-suenos",
   "desde": 10,
   "titulo": "El trabajo de mis sueños",
   "tituloRu": "Работа мечты",
   "resumen": "Condicional: me gustaría, sería, trabajaría…",
   "intro": "Лусия мечтает о другой работе. А какая работа была бы у тебя? «Me gustaría…», «sería…».",
   "inicio": "sueno",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "sueno",
     "titulo": "Мечта",
     "bot": [
      {
       "es": "Me gusta ser profesora, pero me gustaría trabajar de traductora en un festival de cine. 🎬",
       "tr": "Мэ гу́ста сэр профэсо́ра, пэ́ро мэ густари́а трабаха́р дэ традукто́ра эн ун фэстиба́л дэ си́нэ.",
       "ru": "Мне нравится преподавать, но я бы хотела работать переводчицей на кинофестивале."
      },
      {
       "es": "¿Y a ti? ¿Qué trabajo te gustaría tener?",
       "tr": "¿И а ти? ¿Кэ траба́хо тэ густари́а тэнэ́р?",
       "ru": "А тебе? Кем бы ты хотел(а) работать?"
      }
     ],
     "ideas": [
      {
       "es": "Me gustaría ser piloto.",
       "ru": "Я бы хотел(а) быть пилотом."
      },
      {
       "es": "Me gustaría trabajar en España.",
       "ru": "Я бы хотел(а) работать в Испании."
      },
      {
       "es": "Me gustaría tener mi propia empresa.",
       "ru": "Я бы хотел(а) открыть собственную компанию."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me gusta (без условного)",
       "claves": [
        "=me gusta ser"
       ],
       "resp": [
        {
         "es": "😉 Para un sueño: «me gustaría».",
         "tr": "Па́ра ун суэ́ньо: «мэ густари́а».",
         "ru": "Для мечты: «me gustaría»."
        }
       ],
       "ir": "por_que",
       "dato": "Работа мечты"
      },
      {
       "etiqueta": "Me gustaría",
       "claves": [
        "gustaria",
        "encantaria",
        "querria",
        "seria"
       ],
       "resp": [
        {
         "es": "¡Qué bonito sueño! ✨",
         "tr": "¡Кэ бони́то суэ́ньо!",
         "ru": "Какая прекрасная мечта!"
        }
       ],
       "ir": "por_que",
       "dato": "Работа мечты"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Me gustaría…».",
         "tr": "Ди: «Мэ густари́а…».",
         "ru": "Скажи: «Me gustaría…»."
        }
       ],
       "ir": "por_que",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué trabajo te gustaría?",
      "tr": "¿Кэ траба́хо тэ густари́а?",
      "ru": "Кем бы ты хотел(а) работать?"
     }
    },
    {
     "id": "por_que",
     "titulo": "Почему",
     "bot": [
      {
       "es": "¿Por qué te gustaría? 🤔",
       "tr": "¿Пор кэ тэ густари́а?",
       "ru": "Почему тебе хотелось бы этим заниматься?"
      }
     ],
     "ideas": [
      {
       "es": "Porque viajaría mucho.",
       "ru": "Потому что я бы много путешествовал(а)."
      },
      {
       "es": "Porque ganaría más dinero.",
       "ru": "Потому что я бы больше зарабатывал(а)."
      },
      {
       "es": "Porque sería muy interesante.",
       "ru": "Потому что это было бы очень интересно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Condicional",
       "claves": [
        "~ria",
        "~rias",
        "porque"
       ],
       "resp": [
        {
         "es": "¡Tiene sentido! 👍",
         "tr": "¡Тье́нэ сэнти́до!",
         "ru": "Логично!"
        }
       ],
       "ir": "dia"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Tiene sentido! 👍",
         "tr": "¡Тье́нэ сэнти́до!",
         "ru": "Логично!"
        }
       ],
       "ir": "dia",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Por qué?",
      "tr": "¿Пор кэ?",
      "ru": "Почему?"
     }
    },
    {
     "id": "dia",
     "titulo": "Один день",
     "bot": [
      {
       "es": "Imagina un día en ese trabajo. ¿Qué harías por la mañana? ☀️",
       "tr": "Имахи́на ун ди́а эн э́сэ траба́хо. ¿Кэ ари́ас пор ла маня́на?",
       "ru": "Представь один день на этой работе. Что бы ты делал(а) утром?"
      }
     ],
     "ideas": [
      {
       "es": "Tomaría un café y leería el correo.",
       "ru": "Выпил(а) бы кофе и прочитал(а) почту."
      },
      {
       "es": "Viajaría a otra ciudad.",
       "ru": "Поехал(а) бы в другой город."
      },
      {
       "es": "Hablaría con los clientes.",
       "ru": "Говорил(а) бы с клиентами."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Condicional",
       "claves": [
        "~ria",
        "~riamos"
       ],
       "resp": [
        {
         "es": "¡Suena genial! 😎",
         "tr": "¡Суэ́на хэнья́л!",
         "ru": "Звучит здорово!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Futuro вместо condicional",
       "claves": [
        "~re",
        "~ra"
       ],
       "resp": [
        {
         "es": "¡Bien! 😉 Para imaginar: «tomaría», «viajaría».",
         "tr": "¡Бьен! Па́ра имахина́р: «томари́а», «бьяхари́а».",
         "ru": "Хорошо! Чтобы представить: «tomaría», «viajaría»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Tomaría un café…».",
         "tr": "«Томари́а ун кафэ́…».",
         "ru": "«Tomaría un café…»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harías por la mañana?",
      "tr": "¿Кэ ари́ас пор ла маня́на?",
      "ru": "Что бы ты делал(а) утром?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-yoquetu",
   "desde": 10,
   "titulo": "Yo que tú…",
   "tituloRu": "На твоём месте…",
   "resumen": "Советы: yo que tú…, yo en tu lugar…, deberías",
   "intro": "У Лусии проблема, и она просит совета. «Yo que tú, hablaría con él». «Deberías…».",
   "inicio": "problema",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "problema",
     "titulo": "Проблема",
     "bot": [
      {
       "es": "Tengo un problema: mi vecino pone la música muy alta por la noche. 🎶😩 No puedo dormir.",
       "tr": "Тэ́нго ун проблэ́ма: ми бэси́но по́нэ ла му́сика муй а́лта пор ла но́чэ. Но пуэ́до дорми́р.",
       "ru": "У меня проблема: сосед по ночам очень громко включает музыку. Не могу спать."
      },
      {
       "es": "¿Qué harías tú?",
       "tr": "¿Кэ ари́ас ту?",
       "ru": "Что бы ты сделал(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Yo que tú, hablaría con él.",
       "ru": "На твоём месте я бы с ним поговорил(а)."
      },
      {
       "es": "Deberías llamar a la policía.",
       "ru": "Тебе стоит вызвать полицию."
      },
      {
       "es": "Yo dormiría en el salón.",
       "ru": "Я бы спал(а) в гостиной."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Полиция",
       "claves": [
        "policia"
       ],
       "resp": [
        {
         "es": "¿A la policía? Mmm… primero hablaré con él. 😅",
         "tr": "¿А ла полиси́а? Ммм… примэ́ро абларэ́ кон эл.",
         "ru": "Полицию? Хм… сначала я с ним поговорю."
        }
       ],
       "ir": "ana"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "yo que tu",
        "deberias",
        "~ria",
        "hablar"
       ],
       "resp": [
        {
         "es": "¡Buena idea! Mañana hablaré con él. 👍",
         "tr": "¡Буэ́на идэ́а! Маня́на абларэ́ кон эл.",
         "ru": "Хорошая идея! Завтра с ним поговорю."
        }
       ],
       "ir": "ana"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Di: «Yo que tú, hablaría con él».",
         "tr": "Ди: «Йо кэ ту, аблари́а кон эл».",
         "ru": "Скажи: «Yo que tú, hablaría con él»."
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harías tú?",
      "tr": "¿Кэ ари́ас ту?",
      "ru": "Что бы ты сделал(а)?"
     }
    },
    {
     "id": "ana",
     "titulo": "Проблема Ани",
     "bot": [
      {
       "es": "Y Ana tiene dos opciones de trabajo: una empresa grande, con más dinero pero muchas horas, o traductora autónoma, con menos dinero y más tiempo libre. 💼 ¿Qué le aconsejarías?",
       "tr": "И А́на тье́нэ дос опсьо́нэс дэ траба́хо: у́на эмпрэ́са гра́ндэ, кон мас динэ́ро пэ́ро му́час о́рас, о традукто́ра ауто́нома, кон мэ́нос динэ́ро и мас тье́мпо ли́брэ. ¿Кэ лэ аконсэхари́ас?",
       "ru": "А у Ани два варианта работы: большая компания — больше денег, но много рабочих часов; или работа на себя в качестве переводчицы — меньше денег, зато больше свободного времени. Что бы ты ей посоветовал(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Yo en su lugar, elegiría la empresa grande.",
       "ru": "На её месте я бы выбрал(а) большую компанию."
      },
      {
       "es": "Debería elegir el tiempo libre.",
       "ru": "Ей стоит выбрать свободное время."
      },
      {
       "es": "Yo sería traductora.",
       "ru": "Я бы стала переводчицей."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Компания",
       "claves": [
        "empresa",
        "dinero"
       ],
       "resp": [
        {
         "es": "¡Eso cree ella también! Dice que va a aprender mucho. 😊",
         "tr": "¡Э́со крэ́э э́я тамбье́н! Ди́сэ кэ ба а апрэндэ́р му́чо.",
         "ru": "Она тоже так думает! Говорит, что многому научится."
        }
       ],
       "ir": "tu",
       "dato": "Совет Ане",
       "datoValor": "la empresa"
      },
      {
       "etiqueta": "Переводчица",
       "claves": [
        "traductora",
        "tiempo libre",
        "autonoma"
       ],
       "resp": [
        {
         "es": "¡Yo también lo pienso! Pero ella prefiere la empresa. 😅",
         "tr": "¡Йо тамбье́н ло пье́нсо! Пэ́ро э́я прэфье́рэ ла эмпрэ́са.",
         "ru": "Я тоже так думаю! Но она предпочитает большую компанию. 😅"
        }
       ],
       "ir": "tu",
       "dato": "Совет Ане",
       "datoValor": "traductora"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "~ria",
        "deberia"
       ],
       "resp": [
        {
         "es": "¡Buen consejo! 👍",
         "tr": "¡Буэн консэ́хо!",
         "ru": "Хороший совет!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buen consejo! 👍",
         "tr": "¡Буэн консэ́хо!",
         "ru": "Хороший совет!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le aconsejarías?",
      "tr": "¿Кэ лэ аконсэхари́ас?",
      "ru": "Что бы ты ей посоветовал(а)?"
     }
    },
    {
     "id": "tu",
     "titulo": "Твоя проблема",
     "bot": [
      {
       "es": "¿Y tú? ¿Tienes algún problema? Yo te doy un consejo. 😊",
       "tr": "¿И ту? ¿Тье́нэс алгу́н проблэ́ма? Йо тэ дой ун консэ́хо.",
       "ru": "А у тебя? Есть какая-нибудь проблема? Я дам тебе совет."
      }
     ],
     "ideas": [
      {
       "es": "No tengo tiempo para estudiar.",
       "ru": "У меня нет времени на учёбу."
      },
      {
       "es": "El español es muy difícil.",
       "ru": "Испанский очень трудный."
      },
      {
       "es": "No, todo va bien.",
       "ru": "Нет, всё хорошо."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Всё хорошо",
       "claves": [
        "todo va bien",
        "=no",
        "ninguno"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 😊",
         "tr": "¡Кэ бьен!",
         "ru": "Как хорошо!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Время",
       "claves": [
        "tiempo"
       ],
       "resp": [
        {
         "es": "Yo que tú, estudiaría diez minutos cada día, en el metro. 🚇",
         "tr": "Йо кэ ту, эстудьяри́а дьес мину́тос ка́да ди́а, эн эл мэ́тро.",
         "ru": "На твоём месте я бы занималась по десять минут каждый день, в метро."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Трудно",
       "claves": [
        "gramatica",
        "verbo",
        "entiendo",
        "dificil"
       ],
       "resp": [
        {
         "es": "Yo que tú, practicaría un poco cada día en Abecé. ¡Y hablaría mucho conmigo! 😉",
         "tr": "Йо кэ ту, практикари́а ун по́ко ка́да ди́а эн Абэсэ́. ¡И аблари́а му́чо конми́го!",
         "ru": "На твоём месте я бы немного занималась в Abecé каждый день. И почаще болтала бы со мной!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Yo que tú, hablaría mucho conmigo. 😄",
         "tr": "Йо кэ ту, аблари́а му́чо конми́го.",
         "ru": "На твоём месте я бы почаще болтала со мной."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Tienes algún problema?",
      "tr": "¿Тье́нэс алгу́н проблэ́ма?",
      "ru": "У тебя есть проблема?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u10-vivirias",
   "desde": 10,
   "titulo": "¿Dónde vivirías?",
   "tituloRu": "Где бы ты жил(а)?",
   "resumen": "Condicional: viviría, preferiría, me encantaría",
   "intro": "Игра: если бы можно было жить где угодно… Лусия мечтает, а ты?",
   "inicio": "donde",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "donde",
     "titulo": "Где",
     "bot": [
      {
       "es": "Yo viviría en una casa pequeña cerca del mar, con un jardín. 🏡🌊",
       "tr": "Йо бибири́а эн у́на ка́са пэкэ́ня сэ́рка дэл мар, кон ун харди́н.",
       "ru": "Я бы жила в маленьком доме у моря, с садом."
      },
      {
       "es": "¿Y tú? ¿Dónde vivirías?",
       "tr": "¿И ту? ¿До́ндэ бибири́ас?",
       "ru": "А ты? Где бы ты жил(а)?"
      }
     ],
     "ideas": [
      {
       "es": "Viviría en una ciudad grande.",
       "ru": "Я бы жил(а) в большом городе."
      },
      {
       "es": "Viviría en la montaña.",
       "ru": "Я бы жил(а) в горах."
      },
      {
       "es": "Viviría en Barcelona, claro.",
       "ru": "Я бы жил(а) в Барселоне, конечно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Барселона",
       "claves": [
        "barcelona"
       ],
       "resp": [
        {
         "es": "¡Buena elección! 😄",
         "tr": "¡Буэ́на элэксьо́н!",
         "ru": "Хороший выбор!"
        }
       ],
       "ir": "con_quien",
       "dato": "Где бы жил(а)",
       "datoValor": "Barcelona"
      },
      {
       "etiqueta": "Viviré (будущее)",
       "claves": [
        "=vivire"
       ],
       "resp": [
        {
         "es": "¡Bien! 😉 Para imaginar: «viviría».",
         "tr": "¡Бьен! Па́ра имахина́р: «бибири́а».",
         "ru": "Хорошо! Чтобы представить: «viviría»."
        }
       ],
       "ir": "con_quien",
       "dato": "Где бы жил(а)"
      },
      {
       "etiqueta": "Condicional",
       "claves": [
        "viviria",
        "~ria",
        "en"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 😍",
         "tr": "¡Кэ бони́то!",
         "ru": "Как красиво!"
        }
       ],
       "ir": "con_quien",
       "dato": "Где бы жил(а)"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué bonito! 😍",
         "tr": "¡Кэ бони́то!",
         "ru": "Как красиво!"
        }
       ],
       "ir": "con_quien",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Dónde vivirías?",
      "tr": "¿До́ндэ бибири́ас?",
      "ru": "Где бы ты жил(а)?"
     }
    },
    {
     "id": "con_quien",
     "titulo": "С кем",
     "bot": [
      {
       "es": "¿Y con quién vivirías? 🐕 Yo, con un perro.",
       "tr": "¿И кон кьен бибири́ас? Йо, кон ун пэ́рро.",
       "ru": "А с кем бы ты жил(а)? Я — с собакой."
      }
     ],
     "ideas": [
      {
       "es": "Con mi familia.",
       "ru": "С семьёй."
      },
      {
       "es": "Con mis amigos.",
       "ru": "С друзьями."
      },
      {
       "es": "Solo, con un gato.",
       "ru": "Один, с котом."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "con",
        "solo",
        "sola",
        "familia",
        "gato",
        "perro",
        "pareja",
        "amigos"
       ],
       "resp": [
        {
         "es": "¡Perfecto! 😊",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "que_haria"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Perfecto! 😊",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "que_haria",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Con quién vivirías?",
      "tr": "¿Кон кьен бибири́ас?",
      "ru": "С кем бы ты жил(а)?"
     }
    },
    {
     "id": "que_haria",
     "titulo": "Что бы ты делал(а)",
     "bot": [
      {
       "es": "¿Y qué harías todos los días allí?",
       "tr": "¿И кэ ари́ас то́дос лос ди́ас айи́?",
       "ru": "И что бы ты там делал(а) каждый день?"
      }
     ],
     "ideas": [
      {
       "es": "Pasearía por la playa.",
       "ru": "Гулял(а) бы по пляжу."
      },
      {
       "es": "Leería y cocinaría.",
       "ru": "Читал(а) бы и готовил(а)."
      },
      {
       "es": "Trabajaría desde casa.",
       "ru": "Работал(а) бы из дома."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Condicional",
       "claves": [
        "~ria"
       ],
       "resp": [
        {
         "es": "¡Qué vida tan tranquila! 😌",
         "tr": "¡Кэ би́да тан транки́ла!",
         "ru": "Какая спокойная жизнь!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Pasearía…», «leería…».",
         "tr": "«Пасэари́а…», «лээри́а…».",
         "ru": "«Pasearía…», «leería…»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harías?",
      "tr": "¿Кэ ари́ас?",
      "ru": "Что бы ты делал(а)?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Hasta pronto, {nombre}! ¡A soñar! ✨",
       "tr": "¡А́ста про́нто, {nombre}! ¡А соня́р!",
       "ru": "До скорого, {nombre}! Мечтай!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-ojala",
   "desde": 11,
   "titulo": "Ojalá…",
   "tituloRu": "Хоть бы…",
   "resumen": "Желания: ojalá, espero que, quiero que + subjuntivo",
   "intro": "Лусия делится своими желаниями. «Ojalá haga sol», «espero que vengas». После ojalá, espero que и quiero que — subjuntivo.",
   "inicio": "deseo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "deseo",
     "titulo": "Желание",
     "bot": [
      {
       "es": "El sábado voy a la playa con Ana. ¡Ojalá haga sol! ☀️",
       "tr": "Эл са́бадо бой а ла пла́я кон А́на. ¡Охала́ а́га сол!",
       "ru": "В субботу я еду с Аней на пляж. Хоть бы было солнечно! ☀️"
      },
      {
       "es": "¿Y tú? ¿Qué deseas para esta semana? Empieza con «ojalá».",
       "tr": "¿И ту? ¿Кэ дэсэ́ас па́ра э́ста сэма́на? Эмпье́са кон «охала́».",
       "ru": "А ты? Чего ты хочешь на этой неделе? Начни с «ojalá»."
      }
     ],
     "ideas": [
      {
       "es": "Ojalá tenga más tiempo.",
       "ru": "Хоть бы у меня было больше времени."
      },
      {
       "es": "Ojalá no llueva.",
       "ru": "Хоть бы не было дождя."
      },
      {
       "es": "Ojalá apruebe el examen.",
       "ru": "Хоть бы я сдал(а) экзамен."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ojalá + indicativo (ошибка)",
       "claves": [
        "=ojala tengo",
        "=ojala hace",
        "=ojala apruebo",
        "=ojala llueve",
        "=ojala puedo"
       ],
       "resp": [
        {
         "es": "😉 Después de «ojalá», subjuntivo: «ojalá tenga», «ojalá haga».",
         "tr": "Дэспуэ́с дэ «охала́», субхунти́бо: «охала́ тэ́нга», «охала́ а́га».",
         "ru": "После «ojalá» — subjuntivo: «ojalá tenga», «ojalá haga»."
        }
       ],
       "ir": "espero",
       "dato": "Желание"
      },
      {
       "etiqueta": "Ojalá + subjuntivo",
       "claves": [
        "ojala"
       ],
       "resp": [
        {
         "es": "¡Ojalá! 🤞",
         "tr": "¡Охала́!",
         "ru": "Хоть бы!"
        }
       ],
       "ir": "espero",
       "dato": "Желание"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 Empieza con «ojalá»: «ojalá tenga tiempo».",
         "tr": "Эмпье́са кон «охала́»: «охала́ тэ́нга тье́мпо».",
         "ru": "Начни с «ojalá»: «ojalá tenga tiempo»."
        }
       ],
       "ir": "espero",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué deseas?",
      "tr": "¿Кэ дэсэ́ас?",
      "ru": "Чего ты хочешь?"
     }
    },
    {
     "id": "espero",
     "titulo": "Espero que",
     "bot": [
      {
       "es": "Ana tiene un examen el viernes. ¿Qué le dices? «Espero que…» 📚",
       "tr": "А́на тье́нэ ун экса́мэн эл бье́рнэс. ¿Кэ лэ ди́сэс? «Эспэ́ро кэ…»",
       "ru": "У Ани в пятницу экзамен. Что ты ей скажешь? «Espero que…»"
      }
     ],
     "ideas": [
      {
       "es": "Espero que te vaya bien.",
       "ru": "Надеюсь, всё пройдёт хорошо."
      },
      {
       "es": "Espero que apruebes.",
       "ru": "Надеюсь, ты сдашь экзамен."
      },
      {
       "es": "¡Suerte, Ana!",
       "ru": "Удачи, Аня!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Espero que + indicativo",
       "claves": [
        "=espero que apruebas",
        "=espero que vas",
        "=espero que tienes"
       ],
       "resp": [
        {
         "es": "😉 «Espero que apruebes», con subjuntivo.",
         "tr": "«Эспэ́ро кэ апруэ́бэс», кон субхунти́бо.",
         "ru": "«Espero que apruebes» — с subjuntivo."
        }
       ],
       "ir": "quiero"
      },
      {
       "etiqueta": "Espero que / suerte",
       "claves": [
        "espero que",
        "suerte",
        "ojala",
        "animo"
       ],
       "resp": [
        {
         "es": "¡Se lo digo! Gracias. 😊",
         "tr": "¡Сэ ло ди́го! Гра́сьяс.",
         "ru": "Передам! Спасибо."
        }
       ],
       "ir": "quiero"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Espero que te vaya bien».",
         "tr": "«Эспэ́ро кэ тэ ба́я бьен».",
         "ru": "«Espero que te vaya bien»."
        }
       ],
       "ir": "quiero",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le dices a Ana?",
      "tr": "¿Кэ лэ ди́сэс а А́на?",
      "ru": "Что ты скажешь Ане?"
     }
    },
    {
     "id": "quiero",
     "titulo": "Quiero que",
     "bot": [
      {
       "es": "Y yo quiero que vengas a mi cumpleaños. 🎂 ¿Y tú? ¿Qué quieres que haga yo? 😄",
       "tr": "И йо кье́ро кэ бэ́нгас а ми кумплэа́ньос. ¿И ту? ¿Кэ кье́рэс кэ а́га йо?",
       "ru": "А я хочу, чтобы ты пришёл (пришла) на мой день рождения. А ты? Что ты хочешь, чтобы я сделала? 😄"
      }
     ],
     "ideas": [
      {
       "es": "Quiero que me hables más despacio.",
       "ru": "Хочу, чтобы ты говорила медленнее."
      },
      {
       "es": "Quiero que me enseñes palabras nuevas.",
       "ru": "Хочу, чтобы ты учила меня новым словам."
      },
      {
       "es": "Quiero que hagas una tarta.",
       "ru": "Хочу, чтобы ты испекла торт."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Медленнее",
       "claves": [
        "despacio"
       ],
       "resp": [
        {
         "es": "¡Vale! Hablaré más despacio. 😊",
         "tr": "¡Ба́лэ! Абларэ́ мас дэспа́сьо.",
         "ru": "Хорошо! Буду говорить медленнее."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Торт",
       "claves": [
        "tarta"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! Vale, pero no sé cocinar mucho. 😅",
         "tr": "¡Ха, ха! Ба́лэ, пэ́ро но сэ косина́р му́чо.",
         "ru": "Ха-ха! Ладно, но я не очень умею готовить."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Quiero que + subjuntivo",
       "claves": [
        "quiero que",
        "~es",
        "~as"
       ],
       "resp": [
        {
         "es": "¡Hecho! 👍",
         "tr": "¡Э́чо!",
         "ru": "Договорились!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Hecho! 👍",
         "tr": "¡Э́чо!",
         "ru": "Договорились!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué quieres que haga?",
      "tr": "¿Кэ кье́рэс кэ а́га?",
      "ru": "Чего ты хочешь от меня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-roto",
   "desde": 11,
   "titulo": "Se ha roto algo",
   "tituloRu": "Что-то сломалось",
   "resumen": "Позвонить хозяину квартиры: se ha roto, no funciona, ¿puede venir?",
   "intro": "Лусия играет роль хозяйки квартиры. У тебя дома что-то сломалось: позвони ей!",
   "inicio": "llamada",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "llamada",
     "titulo": "Звонок",
     "bot": [
      {
       "es": "Hoy yo soy tu casera. 😄",
       "tr": "Ой йо сой ту касэ́ра.",
       "ru": "Сегодня я — твоя хозяйка квартиры."
      },
      {
       "es": "¿Dígame?",
       "tr": "¿Ди́гамэ?",
       "ru": "Алло?"
      }
     ],
     "ideas": [
      {
       "es": "Hola, soy su inquilino. Se ha roto la lavadora.",
       "ru": "Здравствуйте, я ваш жилец. Сломалась стиральная машина."
      },
      {
       "es": "No funciona la calefacción.",
       "ru": "Не работает отопление."
      },
      {
       "es": "Hay agua en el suelo del baño.",
       "ru": "В ванной на полу вода."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Вода",
       "claves": [
        "agua"
       ],
       "resp": [
        {
         "es": "¡Uy! 😟",
         "tr": "¡Уй!",
         "ru": "Ой!"
        }
       ],
       "ir": "cuando",
       "dato": "Поломка"
      },
      {
       "etiqueta": "Сломалось",
       "claves": [
        "roto",
        "rompio",
        "funciona",
        "estropeado",
        "averiado",
        "problema"
       ],
       "resp": [
        {
         "es": "¡Vaya! 😟",
         "tr": "¡Ба́я!",
         "ru": "Ну вот!"
        }
       ],
       "ir": "cuando",
       "dato": "Поломка"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Dígame, ¿qué problema hay?",
         "tr": "Ди́гамэ, ¿кэ проблэ́ма ай?",
         "ru": "Говорите, что случилось?"
        }
       ],
       "ir": "cuando",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué pasa?",
      "tr": "¿Кэ па́са?",
      "ru": "Что случилось?"
     }
    },
    {
     "id": "cuando",
     "titulo": "С какого времени",
     "bot": [
      {
       "es": "¿Y desde cuándo pasa?",
       "tr": "¿И дэ́сдэ куа́ндо па́са?",
       "ru": "И с какого времени это так?"
      }
     ],
     "ideas": [
      {
       "es": "Desde ayer.",
       "ru": "Со вчерашнего дня."
      },
      {
       "es": "Desde esta mañana.",
       "ru": "С сегодняшнего утра."
      },
      {
       "es": "Desde hace una semana.",
       "ru": "Уже неделю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Неделю",
       "claves": [
        "semana",
        "mes"
       ],
       "resp": [
        {
         "es": "¿Una semana? ¿Y por qué no me ha llamado antes? 😅",
         "tr": "¿У́на сэма́на? ¿И пор кэ но мэ а яма́до а́нтэс?",
         "ru": "Неделю? А почему вы мне раньше не позвонили?"
        }
       ],
       "ir": "pedir"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "desde",
        "ayer",
        "manana",
        "hoy",
        "hace"
       ],
       "resp": [
        {
         "es": "Vale, vale. 📝",
         "tr": "Ба́лэ, ба́лэ.",
         "ru": "Хорошо, хорошо."
        }
       ],
       "ir": "pedir"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Vale. 📝",
         "tr": "Ба́лэ.",
         "ru": "Хорошо."
        }
       ],
       "ir": "pedir",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Desde cuándo?",
      "tr": "¿Дэ́сдэ куа́ндо?",
      "ru": "С какого времени?"
     }
    },
    {
     "id": "pedir",
     "titulo": "Попроси",
     "bot": [
      {
       "es": "Bueno… ¿y qué quiere que haga yo? 🤔",
       "tr": "Буэ́но… ¿и кэ кье́рэ кэ а́га йо?",
       "ru": "Ну… а что вы хотите, чтобы я сделала?"
      }
     ],
     "ideas": [
      {
       "es": "Quiero que venga un técnico.",
       "ru": "Хочу, чтобы пришёл мастер."
      },
      {
       "es": "¿Puede enviar a alguien hoy?",
       "ru": "Можете кого-нибудь прислать сегодня?"
      },
      {
       "es": "Necesito que lo arregle pronto.",
       "ru": "Мне нужно, чтобы вы скоро это починили."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Quiero que + indicativo",
       "claves": [
        "=quiero que viene",
        "=necesito que arregla",
        "=necesito que lo arregla"
       ],
       "resp": [
        {
         "es": "😉 «Quiero que venga», «necesito que lo arregle». Bueno, mañana va un técnico.",
         "tr": "«Кье́ро кэ бэ́нга», «нэсэси́то кэ ло аррэ́глэ». Буэ́но, маня́на ба ун тэ́книко.",
         "ru": "«Quiero que venga», «necesito que lo arregle». Ладно, завтра придёт мастер."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Просит",
       "claves": [
        "quiero que",
        "necesito que",
        "puede",
        "podria",
        "tecnico",
        "venga",
        "arregle",
        "hoy",
        "pronto"
       ],
       "resp": [
        {
         "es": "De acuerdo. Mañana a las diez va un técnico. ¿Le va bien? 🔧",
         "tr": "Дэ акуэ́рдо. Маня́на а лас дьес ба ун тэ́книко. ¿Лэ ба бьен?",
         "ru": "Договорились. Завтра в десять придёт мастер. Вам удобно?"
        }
       ],
       "ir": "hora"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "De acuerdo, mañana va un técnico. 🔧",
         "tr": "Дэ акуэ́рдо, маня́на ба ун тэ́книко.",
         "ru": "Договорились, завтра придёт мастер."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué quiere que haga?",
      "tr": "¿Кэ кье́рэ кэ а́га?",
      "ru": "Что вы хотите, чтобы я сделала?"
     }
    },
    {
     "id": "hora",
     "titulo": "Время",
     "bot": [
      {
       "es": "¿A las diez le va bien? 🕙",
       "tr": "¿А лас дьес лэ ба бьен?",
       "ru": "В десять вам удобно?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, perfecto.",
       "ru": "Да, отлично."
      },
      {
       "es": "Mejor por la tarde.",
       "ru": "Лучше после обеда."
      },
      {
       "es": "No estaré en casa, lo siento.",
       "ru": "Меня не будет дома, извините."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "perfecto",
        "vale",
        "mejor",
        "tarde",
        "no estare",
        "=no"
       ],
       "resp": [
        {
         "es": "Muy bien, lo apunto. ¡Y perdone las molestias! 😊",
         "tr": "Муй бьен, ло апу́нто. ¡И пэрдо́нэ лас молэ́стьяс!",
         "ru": "Хорошо, записала. И извините за неудобства!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Muy bien, lo apunto. 😊",
         "tr": "Муй бьен, ло апу́нто.",
         "ru": "Хорошо, записала."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A las diez le va bien?",
      "tr": "¿А лас дьес лэ ба бьен?",
      "ru": "В десять вам удобно?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Muy bien, {nombre}! Ya puedes llamar a tu casero de verdad. 😄",
       "tr": "¡Муй бьен, {nombre}! Я пуэ́дэс яма́р а ту касэ́ро дэ бэрда́д.",
       "ru": "Отлично, {nombre}! Теперь можешь звонить своему настоящему хозяину квартиры. 😄"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-recomiendo",
   "desde": 11,
   "titulo": "Te recomiendo que…",
   "tituloRu": "Советую тебе…",
   "resumen": "Советы: te recomiendo que, es mejor que, no hace falta que + subjuntivo",
   "intro": "Друг Лусии едет в Россию. Что ты ему посоветуешь? «Te recomiendo que…», «es mejor que…».",
   "inicio": "amigo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "amigo",
     "titulo": "Друг едет в Россию",
     "bot": [
      {
       "es": "Mi amigo Raúl va a Moscú en diciembre. ❄️",
       "tr": "Ми ами́го Рау́л ба а Моску́ эн дисье́мбрэ.",
       "ru": "Мой друг Рауль едет в Москву в декабре."
      },
      {
       "es": "¿Qué le recomiendas? «Te recomiendo que…»",
       "tr": "¿Кэ лэ рэкомье́ндас? «Тэ рэкомье́ндо кэ…»",
       "ru": "Что ты ему посоветуешь? «Te recomiendo que…»"
      }
     ],
     "ideas": [
      {
       "es": "Le recomiendo que lleve ropa de abrigo.",
       "ru": "Советую ему взять тёплую одежду."
      },
      {
       "es": "Es mejor que aprenda unas palabras en ruso.",
       "ru": "Лучше ему выучить несколько слов по-русски."
      },
      {
       "es": "Le recomiendo que vaya al teatro.",
       "ru": "Советую ему сходить в театр."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Recomiendo que + indicativo",
       "claves": [
        "=recomiendo que lleva",
        "=recomiendo que va",
        "=mejor que aprende",
        "=mejor que lleva"
       ],
       "resp": [
        {
         "es": "😉 Con subjuntivo: «que lleve», «que vaya», «que aprenda».",
         "tr": "Кон субхунти́бо: «кэ е́бэ», «кэ ба́я», «кэ апрэ́нда».",
         "ru": "С subjuntivo: «que lleve», «que vaya», «que aprenda»."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Тёплая одежда",
       "claves": [
        "abrigo",
        "frio",
        "ropa"
       ],
       "resp": [
        {
         "es": "¡Sí! Dice Ana que en diciembre hace mucho frío. 🥶",
         "tr": "¡Си! Ди́сэ А́на кэ эн дисье́мбрэ а́сэ му́чо фри́о.",
         "ru": "Да! Аня говорит, что в декабре там очень холодно. 🥶"
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "recomiendo",
        "mejor que",
        "deberia",
        "tiene que",
        "que"
       ],
       "resp": [
        {
         "es": "¡Buen consejo! Se lo digo. 👍",
         "tr": "¡Буэн консэ́хо! Сэ ло ди́го.",
         "ru": "Хороший совет! Передам ему."
        }
       ],
       "ir": "metro"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buen consejo! 👍",
         "tr": "¡Буэн консэ́хо!",
         "ru": "Хороший совет!"
        }
       ],
       "ir": "metro",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le recomiendas?",
      "tr": "¿Кэ лэ рэкомье́ндас?",
      "ru": "Что ты ему посоветуешь?"
     }
    },
    {
     "id": "metro",
     "titulo": "Не нужно",
     "bot": [
      {
       "es": "Raúl pregunta si tiene que cambiar mucho dinero. ¿Qué le dices? «No hace falta que…» 💶",
       "tr": "Рау́л прэгу́нта си тье́нэ кэ камбья́р му́чо динэ́ро. ¿Кэ лэ ди́сэс? «Но а́сэ фа́лта кэ…»",
       "ru": "Рауль спрашивает, нужно ли менять много денег. Что ты скажешь? «No hace falta que…»"
      }
     ],
     "ideas": [
      {
       "es": "No hace falta que cambie mucho dinero.",
       "ru": "Не нужно менять много денег."
      },
      {
       "es": "Es mejor que pague con tarjeta.",
       "ru": "Лучше платить картой."
      },
      {
       "es": "No sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No hace falta que",
       "claves": [
        "no hace falta",
        "mejor que",
        "tarjeta"
       ],
       "resp": [
        {
         "es": "¡Perfecto! 👍",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «No hace falta que cambie mucho».",
         "tr": "«Но а́сэ фа́лта кэ ка́мбье му́чо».",
         "ru": "«No hace falta que cambie mucho»."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le dices?",
      "tr": "¿Кэ лэ ди́сэс?",
      "ru": "Что ты скажешь?"
     }
    },
    {
     "id": "tu",
     "titulo": "Совет тебе",
     "bot": [
      {
       "es": "Y a ti, ¿qué me recomiendas para aprender ruso? 😄 Quiero empezar.",
       "tr": "И а ти, ¿кэ мэ рэкомье́ндас па́ра апрэндэ́р ру́со? Кье́ро эмпэса́р.",
       "ru": "А мне что посоветуешь, чтобы выучить русский? Я хочу начать."
      }
     ],
     "ideas": [
      {
       "es": "Te recomiendo que uses Azbuka.",
       "ru": "Советую тебе заниматься в Azbuka."
      },
      {
       "es": "Es mejor que empieces por el alfabeto.",
       "ru": "Лучше начни с алфавита."
      },
      {
       "es": "Te recomiendo que hables con Ana.",
       "ru": "Советую тебе говорить с Аней."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Аня",
       "claves": [
        "ana"
       ],
       "resp": [
        {
         "es": "¡Claro! Tengo una profesora en casa. 😄",
         "tr": "¡Кла́ро! Тэ́нго у́на профэсо́ра эн ка́са.",
         "ru": "Точно! У меня учительница под боком."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Алфавит",
       "claves": [
        "alfabeto",
        "letras"
       ],
       "resp": [
        {
         "es": "¡Buena idea! Primero las letras. 🔤",
         "tr": "¡Буэ́на идэ́а! Примэ́ро лас лэ́трас.",
         "ru": "Хорошая идея! Сначала буквы."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Совет",
       "claves": [
        "recomiendo",
        "mejor que",
        "que"
       ],
       "resp": [
        {
         "es": "¡Gracias! Empiezo mañana. 😊",
         "tr": "¡Гра́сьяс! Эмпье́со маня́на.",
         "ru": "Спасибо! Начну завтра."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Gracias! Empiezo mañana. 😊",
         "tr": "¡Гра́сьяс! Эмпье́со маня́на.",
         "ru": "Спасибо! Начну завтра."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué me recomiendas?",
      "tr": "¿Кэ мэ рэкомье́ндас?",
      "ru": "Что ты мне посоветуешь?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-tramites",
   "desde": 11,
   "titulo": "Trámites",
   "tituloRu": "Документы и формальности",
   "resumen": "Документы и очереди: pedir cita, el NIE, me piden que…",
   "intro": "Лусия помогает тебе с документами. Что нужно? Когда? Что нужно принести?",
   "inicio": "cita",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "cita",
     "titulo": "Запись",
     "bot": [
      {
       "es": "¿Ya tienes el NIE? Ana lo hizo hace un año: ¡fue una aventura! 😅",
       "tr": "¿Я тье́нэс эл Нье? А́на ло и́со а́сэ ун а́ньо: ¡фуэ у́на абэнту́ра!",
       "ru": "У тебя уже есть NIE? Аня оформляла его год назад — это было целое приключение! 😅"
      },
      {
       "es": "Primero hay que pedir cita por internet. ¿Ya la has pedido?",
       "tr": "Примэ́ро ай кэ пэди́р си́та пор интэрнэ́т. ¿Я ла ас пэди́до?",
       "ru": "Сначала надо записаться через интернет. Ты уже записался(-лась)?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, ya la he pedido.",
       "ru": "Да, уже записался(-лась)."
      },
      {
       "es": "No, todavía no.",
       "ru": "Нет, ещё нет."
      },
      {
       "es": "No sé cómo se hace.",
       "ru": "Не знаю, как это делается."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не знает",
       "claves": [
        "no se",
        "como"
       ],
       "resp": [
        {
         "es": "Es fácil: entras en la web, eliges la oficina y el día. Te ayudo si quieres. 💻",
         "tr": "Эс фа́сил: э́нтрас эн ла уэб, эли́хэс ла офиси́на и эл ди́а. Тэ аю́до си кье́рэс.",
         "ru": "Это просто: заходишь на сайт, выбираешь отделение и день. Если хочешь, помогу."
        }
       ],
       "ir": "papeles"
      },
      {
       "etiqueta": "Ещё нет",
       "claves": [
        "todavia",
        "=no",
        "aun no"
       ],
       "resp": [
        {
         "es": "¡Pues te recomiendo que la pidas pronto: hay pocas! 😉",
         "tr": "¡Пуэс тэ рэкомье́ндо кэ ла пи́дас про́нто: ай по́кас!",
         "ru": "Тогда советую записаться поскорее: свободных мест мало! 😉"
        }
       ],
       "ir": "papeles"
      },
      {
       "etiqueta": "Да",
       "claves": [
        "=si",
        "ya",
        "he pedido"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 👍",
         "tr": "¡Муй бьен!",
         "ru": "Отлично!"
        }
       ],
       "ir": "papeles"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Te recomiendo que la pidas pronto. 😉",
         "tr": "Тэ рэкомье́ндо кэ ла пи́дас про́нто.",
         "ru": "Советую записаться поскорее."
        }
       ],
       "ir": "papeles",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Ya has pedido cita?",
      "tr": "¿Я ас пэди́до си́та?",
      "ru": "Ты уже записался(-лась)?"
     }
    },
    {
     "id": "papeles",
     "titulo": "Документы",
     "bot": [
      {
       "es": "¿Y qué te piden que lleves? 📄",
       "tr": "¿И кэ тэ пи́дэн кэ е́бэс?",
       "ru": "А что тебя просят принести?"
      }
     ],
     "ideas": [
      {
       "es": "Me piden que lleve el pasaporte.",
       "ru": "Меня просят принести паспорт."
      },
      {
       "es": "El pasaporte y una foto.",
       "ru": "Паспорт и фото."
      },
      {
       "es": "No lo sé.",
       "ru": "Не знаю."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Не знает",
       "claves": [
        "no lo se",
        "=no se"
       ],
       "resp": [
        {
         "es": "Normalmente, el pasaporte, una foto y un formulario. Es mejor que lo mires en la web. 😉",
         "tr": "Нормалмэ́нтэ, эл пасапо́ртэ, у́на фо́то и ун формула́рьо. Эс мэхо́р кэ ло ми́рэс эн ла уэб.",
         "ru": "Обычно паспорт, фото и анкету. Лучше проверь на сайте."
        }
       ],
       "ir": "cola"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "pasaporte",
        "foto",
        "formulario",
        "lleve",
        "papel",
        "documento"
       ],
       "resp": [
        {
         "es": "¡Bien! Y te recomiendo que hagas fotocopias de todo. 📎",
         "tr": "¡Бьен! И тэ рэкомье́ндо кэ а́гас фотоко́пьяс дэ то́до.",
         "ru": "Хорошо! И советую сделать копии всего."
        }
       ],
       "ir": "cola"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Es mejor que lo mires en la web. 😉",
         "tr": "Эс мэхо́р кэ ло ми́рэс эн ла уэб.",
         "ru": "Лучше посмотри на сайте."
        }
       ],
       "ir": "cola",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te piden?",
      "tr": "¿Кэ тэ пи́дэн?",
      "ru": "Что тебя просят принести?"
     }
    },
    {
     "id": "cola",
     "titulo": "Очередь",
     "bot": [
      {
       "es": "Último consejo: lleva algo para leer. ¡Las colas son largas! 📖 ¿En tu país también hay muchos trámites?",
       "tr": "У́лтимо консэ́хо: е́ба а́лго па́ра лээ́р. ¡Лас ко́лас сон ла́ргас! ¿Эн ту паи́с тамбье́н ай му́чос тра́митэс?",
       "ru": "Последний совет: возьми что-нибудь почитать. Очереди длинные! А в твоей стране тоже много бумажной волокиты?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, muchos.",
       "ru": "Да, много."
      },
      {
       "es": "No, ahora todo es por internet.",
       "ru": "Нет, сейчас всё через интернет."
      },
      {
       "es": "Más o menos.",
       "ru": "Более-менее."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "=no",
        "muchos",
        "internet",
        "menos",
        "igual"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! Los papeles son iguales en todo el mundo. 😄",
         "tr": "¡Ха, ха! Лос папэ́лэс сон игуа́лэс эн то́до эл му́ндо.",
         "ru": "Ха-ха! Бюрократия везде одинаковая. 😄"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Los papeles son iguales en todo el mundo! 😄",
         "tr": "¡Лос папэ́лэс сон игуа́лэс эн то́до эл му́ндо!",
         "ru": "Бумаги везде одинаковые!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿En tu país hay muchos trámites?",
      "tr": "¿Эн ту паи́с ай му́чос тра́митэс?",
      "ru": "В твоей стране много волокиты?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Mucha suerte con el NIE, {nombre}! 🍀",
       "tr": "¡Му́ча суэ́ртэ кон эл Нье, {nombre}!",
       "ru": "Удачи с NIE, {nombre}!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-reclamacion",
   "desde": 11,
   "titulo": "Una reclamación",
   "tituloRu": "Жалоба",
   "resumen": "Пожаловаться: quería hacer una reclamación, me parece injusto que…",
   "intro": "Лусия работает в магазине. Ты купил(а) телефон, а он не работает. Пожалуйся вежливо!",
   "inicio": "tienda",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "tienda",
     "titulo": "В магазине",
     "bot": [
      {
       "es": "Hoy soy dependienta en una tienda de móviles. 📱",
       "tr": "Ой сой дэпэндье́нта эн у́на тье́нда дэ мо́билэс.",
       "ru": "Сегодня я продавщица в магазине телефонов."
      },
      {
       "es": "Buenos días, ¿en qué puedo ayudarle?",
       "tr": "Буэ́нос ди́ас, ¿эн кэ пуэ́до аюда́рлэ?",
       "ru": "Добрый день, чем могу помочь?"
      }
     ],
     "ideas": [
      {
       "es": "Quería hacer una reclamación.",
       "ru": "Я хотел(а) бы подать жалобу."
      },
      {
       "es": "Compré este móvil y no funciona.",
       "ru": "Я купил(а) этот телефон, а он не работает."
      },
      {
       "es": "Tengo un problema con este móvil.",
       "ru": "У меня проблема с этим телефоном."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Жалоба",
       "claves": [
        "reclamacion",
        "queja",
        "problema",
        "no funciona",
        "compre",
        "roto"
       ],
       "resp": [
        {
         "es": "Lo siento mucho.",
         "tr": "Ло сье́нто му́чо.",
         "ru": "Мне очень жаль."
        }
       ],
       "ir": "problema"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Lo siento mucho.",
         "tr": "Ло сье́нто му́чо.",
         "ru": "Мне очень жаль."
        }
       ],
       "ir": "problema",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿En qué puedo ayudarle?",
      "tr": "¿Эн кэ пуэ́до аюда́рлэ?",
      "ru": "Чем могу помочь?"
     }
    },
    {
     "id": "problema",
     "titulo": "Что не так",
     "bot": [
      {
       "es": "¿Qué le pasa exactamente?",
       "tr": "¿Кэ лэ па́са эксактамэ́нтэ?",
       "ru": "А что именно с ним?"
      }
     ],
     "ideas": [
      {
       "es": "No se enciende.",
       "ru": "Он не включается."
      },
      {
       "es": "La pantalla no funciona.",
       "ru": "Не работает экран."
      },
      {
       "es": "La batería dura muy poco.",
       "ru": "Батарея быстро садится."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Описывает",
       "claves": [
        "no se",
        "pantalla",
        "bateria",
        "enciende",
        "carga",
        "funciona",
        "dura"
       ],
       "resp": [
        {
         "es": "Vale. ¿Tiene el recibo? 🧾",
         "tr": "Ба́лэ. ¿Тье́нэ эл рэси́бо?",
         "ru": "Понятно. У вас есть чек?"
        }
       ],
       "ir": "ticket"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Vale. ¿Tiene el recibo? 🧾",
         "tr": "Ба́лэ. ¿Тье́нэ эл рэси́бо?",
         "ru": "Понятно. У вас есть чек?"
        }
       ],
       "ir": "ticket",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le pasa?",
      "tr": "¿Кэ лэ па́са?",
      "ru": "Что с ним?"
     }
    },
    {
     "id": "ticket",
     "titulo": "Чек",
     "bot": [
      {
       "es": "Sin el recibo no podemos cambiarlo, pero podemos repararlo. Tardará dos semanas. ¿Qué le parece?",
       "tr": "Син эл рэси́бо но подэ́мос камбья́рло, пэ́ро подэ́мос рэпара́рло. Тардара́ дос сэма́нас. ¿Кэ лэ парэ́сэ?",
       "ru": "Без чека мы не можем его обменять, но можем отремонтировать. Это займёт две недели. Что скажете?"
      }
     ],
     "ideas": [
      {
       "es": "Me parece injusto que tarde tanto.",
       "ru": "По-моему, несправедливо, что это занимает столько времени."
      },
      {
       "es": "Aquí tiene el recibo. Quiero que me lo cambien.",
       "ru": "Вот чек. Я хочу, чтобы мне его обменяли."
      },
      {
       "es": "Vale, de acuerdo.",
       "ru": "Хорошо, согласен (согласна)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Чек",
       "claves": [
        "aqui tiene",
        "tiquet",
        "ticket",
        "cambien",
        "cambiar"
       ],
       "resp": [
        {
         "es": "¡Ah, perfecto! Con el recibo se lo cambiamos ahora mismo. 😊",
         "tr": "¡А, пэрфэ́кто! Кон эл рэси́бо сэ ло камбья́мос ао́ра ми́смо.",
         "ru": "А, отлично! С чеком мы обменяем его прямо сейчас."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Несправедливо",
       "claves": [
        "injusto",
        "no es justo",
        "mucho tiempo",
        "tanto",
        "hoja de reclamaciones",
        "jefe"
       ],
       "resp": [
        {
         "es": "Lo entiendo. Hablaré con mi jefe para que lo hagan antes. 🙏",
         "tr": "Ло энтье́ндо. Абларэ́ кон ми хэ́фэ па́ра кэ ло а́ган а́нтэс.",
         "ru": "Понимаю. Поговорю с начальником, чтобы ремонт сделали быстрее. 🙏"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Согласен",
       "claves": [
        "vale",
        "de acuerdo",
        "=si",
        "bien"
       ],
       "resp": [
        {
         "es": "Muy bien. Le llamamos cuando esté listo. 📞",
         "tr": "Муй бьен. Лэ яма́мос куа́ндо эстэ́ ли́сто.",
         "ru": "Хорошо. Мы позвоним вам, когда он будет готов. 📞"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Le llamamos cuando esté listo. 📞",
         "tr": "Лэ яма́мос куа́ндо эстэ́ ли́сто.",
         "ru": "Мы позвоним, когда будет готово."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué le parece?",
      "tr": "¿Кэ лэ парэ́сэ?",
      "ru": "Что скажете?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u11-cuando",
   "desde": 11,
   "titulo": "Cuando termine el curso…",
   "tituloRu": "Когда закончится курс…",
   "resumen": "Будущее с cuando: cuando termine, cuando tenga, cuando hable bien…",
   "intro": "Лусия думает о будущем. «Cuando tenga vacaciones, iré…». После cuando о будущем — subjuntivo.",
   "inicio": "lucia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "lucia",
     "titulo": "Планы Лусии",
     "bot": [
      {
       "es": "Cuando terminen las clases en junio, iré al pueblo de mis padres. ☀️",
       "tr": "Куа́ндо тэрми́нэн лас кла́сэс эн ху́ньо, ирэ́ ал пуэ́бло дэ мис па́дрэс.",
       "ru": "Когда в июне закончатся занятия, я поеду в деревню к родителям."
      },
      {
       "es": "¿Y tú? ¿Qué harás cuando termines este curso de español?",
       "tr": "¿И ту? ¿Кэ ара́с куа́ндо тэрми́нэс э́стэ ку́рсо дэ эспаньо́л?",
       "ru": "А ты? Что ты будешь делать, когда закончишь этот курс испанского?"
      }
     ],
     "ideas": [
      {
       "es": "Cuando termine, viajaré a España.",
       "ru": "Когда закончу, поеду в Испанию."
      },
      {
       "es": "Cuando termine, empezaré otro curso.",
       "ru": "Когда закончу, начну другой курс."
      },
      {
       "es": "Cuando hable bien, buscaré trabajo aquí.",
       "ru": "Когда буду хорошо говорить, поищу здесь работу."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Cuando + futuro (ошибка)",
       "claves": [
        "=cuando terminare",
        "=cuando hablare",
        "=cuando tendre"
       ],
       "resp": [
        {
         "es": "😉 Después de «cuando», subjuntivo: «cuando termine», «cuando hable».",
         "tr": "Дэспуэ́с дэ «куа́ндо», субхунти́бо: «куа́ндо тэрми́нэ», «куа́ндо а́блэ».",
         "ru": "После «cuando» — subjuntivo: «cuando termine», «cuando hable»."
        }
       ],
       "ir": "dinero",
       "dato": "После курса"
      },
      {
       "etiqueta": "Cuando + presente (ошибка)",
       "claves": [
        "=cuando termino",
        "=cuando hablo",
        "=cuando tengo"
       ],
       "resp": [
        {
         "es": "😉 Para el futuro: «cuando termine», no «termino».",
         "tr": "Па́ра эл футу́ро: «куа́ндо тэрми́нэ», но «тэрми́но».",
         "ru": "О будущем: «cuando termine», а не «termino»."
        }
       ],
       "ir": "dinero",
       "dato": "После курса"
      },
      {
       "etiqueta": "Cuando + subjuntivo",
       "claves": [
        "cuando",
        "~re",
        "~ra"
       ],
       "resp": [
        {
         "es": "¡Qué buen plan! 😊",
         "tr": "¡Кэ буэн план!",
         "ru": "Отличный план!"
        }
       ],
       "ir": "dinero",
       "dato": "После курса"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Cuando termine, …».",
         "tr": "«Куа́ндо тэрми́нэ, …».",
         "ru": "«Cuando termine, …»."
        }
       ],
       "ir": "dinero",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harás cuando termines?",
      "tr": "¿Кэ ара́с куа́ндо тэрми́нэс?",
      "ru": "Что ты будешь делать, когда закончишь?"
     }
    },
    {
     "id": "dinero",
     "titulo": "Когда будет…",
     "bot": [
      {
       "es": "Termina mi frase: «Cuando tenga mucho dinero, …» 💰",
       "tr": "Тэрми́на ми фра́сэ: «Куа́ндо тэ́нга му́чо динэ́ро, …»",
       "ru": "Закончи мою фразу: «Cuando tenga mucho dinero, …»"
      }
     ],
     "ideas": [
      {
       "es": "…me compraré una casa.",
       "ru": "…куплю дом."
      },
      {
       "es": "…viajaré por todo el mundo.",
       "ru": "…объезжу весь мир."
      },
      {
       "es": "…dejaré de trabajar.",
       "ru": "…брошу работу."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Futuro",
       "claves": [
        "~re",
        "~remos"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Yo también! 😄",
         "tr": "¡Ха, ха! ¡Йо тамбье́н!",
         "ru": "Ха-ха! Я тоже!"
        }
       ],
       "ir": "ana"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «…viajaré por todo el mundo».",
         "tr": "«…бьяхарэ́ пор то́до эл му́ндо».",
         "ru": "«…viajaré por todo el mundo»."
        }
       ],
       "ir": "ana",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Cuando tenga mucho dinero…",
      "tr": "Куа́ндо тэ́нга му́чо динэ́ро…",
      "ru": "Когда у меня будет много денег…"
     }
    },
    {
     "id": "ana",
     "titulo": "Аня",
     "bot": [
      {
       "es": "Ana dice: «Cuando termine el máster, …». ¿Qué crees que hará? 🎓",
       "tr": "А́на ди́сэ: «Куа́ндо тэрми́нэ эл ма́стэр, …». ¿Кэ крэ́эс кэ ара́?",
       "ru": "Аня говорит: «Когда закончу магистратуру, …». Как думаешь, что она сделает?"
      }
     ],
     "ideas": [
      {
       "es": "Trabajará en una empresa grande.",
       "ru": "Будет работать в большой компании."
      },
      {
       "es": "Se quedará en Barcelona.",
       "ru": "Останется в Барселоне."
      },
      {
       "es": "Hará una fiesta.",
       "ru": "Устроит праздник."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Праздник",
       "claves": [
        "fiesta"
       ],
       "resp": [
        {
         "es": "¡Seguro! ¡Y yo iré! 🎉",
         "tr": "¡Сэгу́ро! ¡И йо ирэ́!",
         "ru": "Точно! И я приду!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Futuro",
       "claves": [
        "~ra",
        "~re"
       ],
       "resp": [
        {
         "es": "¡Puede ser! 🙂",
         "tr": "¡Пуэ́дэ сэр!",
         "ru": "Может быть!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Puede ser! 🙂",
         "tr": "¡Пуэ́дэ сэр!",
         "ru": "Может быть!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué hará Ana?",
      "tr": "¿Кэ ара́ А́на?",
      "ru": "Что сделает Аня?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-redes",
   "desde": 12,
   "titulo": "Las redes sociales",
   "tituloRu": "Соцсети",
   "resumen": "Мнение: creo que / no creo que + subjuntivo, estoy de acuerdo",
   "intro": "Лусия и Аня спорят о соцсетях. А ты что думаешь? «Creo que…», «no creo que…».",
   "inicio": "horas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "horas",
     "titulo": "Сколько часов",
     "bot": [
      {
       "es": "Ana dice que paso demasiado tiempo en el móvil. ¡Tres horas al día! 📱😳",
       "tr": "А́на ди́сэ кэ па́со дэмасья́до тье́мпо эн эл мо́бил. ¡Трэс о́рас ал ди́а!",
       "ru": "Аня говорит, что я слишком много сижу в телефоне. Три часа в день!"
      },
      {
       "es": "¿Y tú? ¿Cuánto tiempo pasas en las redes?",
       "tr": "¿И ту? ¿Куа́нто тье́мпо па́сас эн лас рэ́дэс?",
       "ru": "А ты? Сколько времени ты проводишь в соцсетях?"
      }
     ],
     "ideas": [
      {
       "es": "Paso más de dos horas.",
       "ru": "Больше двух часов."
      },
      {
       "es": "Muy poco, no me gustan.",
       "ru": "Очень мало, я их не люблю."
      },
      {
       "es": "No tengo redes sociales.",
       "ru": "У меня нет соцсетей."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет соцсетей",
       "claves": [
        "no tengo"
       ],
       "resp": [
        {
         "es": "¿No? ¡Qué valiente! 😮",
         "tr": "¿Но? ¡Кэ балье́нтэ!",
         "ru": "Нет? Вот это смелость!"
        }
       ],
       "ir": "opinion",
       "dato": "Соцсети",
       "datoValor": "no tiene"
      },
      {
       "etiqueta": "Мало",
       "claves": [
        "poco",
        "nada",
        "no me gustan"
       ],
       "resp": [
        {
         "es": "¡Como Ana! 😄",
         "tr": "¡Ко́мо А́на!",
         "ru": "Как Аня!"
        }
       ],
       "ir": "opinion",
       "dato": "Соцсети",
       "datoValor": "poco"
      },
      {
       "etiqueta": "Много",
       "claves": [
        "hora",
        "mucho",
        "demasiado"
       ],
       "resp": [
        {
         "es": "¡Como yo! 😅",
         "tr": "¡Ко́мо йо!",
         "ru": "Как я!"
        }
       ],
       "ir": "opinion",
       "dato": "Соцсети",
       "datoValor": "mucho"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "🙂",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "opinion",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuánto tiempo pasas?",
      "tr": "¿Куа́нто тье́мпо па́сас?",
      "ru": "Сколько времени ты проводишь?"
     }
    },
    {
     "id": "opinion",
     "titulo": "Мнение",
     "bot": [
      {
       "es": "Yo creo que las redes nos acercan a los amigos que están lejos. Ana no cree que sean buenas. ¿Tú qué opinas?",
       "tr": "Йо крэ́о кэ лас рэ́дэс нос асэ́ркан а лос ами́гос кэ эста́н лэ́хос. А́на но крэ́э кэ сэ́ан буэ́нас. ¿Ту кэ опи́нас?",
       "ru": "Я думаю, что соцсети сближают нас с друзьями, которые далеко. Аня не считает, что они хороши. А ты что думаешь?"
      }
     ],
     "ideas": [
      {
       "es": "Estoy de acuerdo contigo.",
       "ru": "Я согласен (согласна) с тобой."
      },
      {
       "es": "No creo que sean tan buenas.",
       "ru": "Не думаю, что они такие уж хорошие."
      },
      {
       "es": "Depende de cómo las uses.",
       "ru": "Зависит от того, как ими пользоваться."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No creo que + indicativo",
       "claves": [
        "=no creo que son",
        "=no creo que hay"
       ],
       "resp": [
        {
         "es": "😉 «No creo que sean», con subjuntivo. ¡Pero entiendo tu idea!",
         "tr": "«Но крэ́о кэ сэ́ан», кон субхунти́бо. ¡Пэ́ро энтье́ндо ту идэ́а!",
         "ru": "«No creo que sean» — с subjuntivo. Но я тебя понимаю!"
        }
       ],
       "ir": "ninos",
       "dato": "Мнение о соцсетях"
      },
      {
       "etiqueta": "Зависит",
       "claves": [
        "depende"
       ],
       "resp": [
        {
         "es": "¡Muy sabio! 🦉",
         "tr": "¡Муй са́бьо!",
         "ru": "Очень мудро!"
        }
       ],
       "ir": "ninos",
       "dato": "Мнение о соцсетях",
       "datoValor": "depende"
      },
      {
       "etiqueta": "Против",
       "claves": [
        "no creo",
        "no estoy de acuerdo",
        "con ana",
        "malas"
       ],
       "resp": [
        {
         "es": "¡Ana va a estar contenta! 😄",
         "tr": "¡А́на ба а эста́р контэ́нта!",
         "ru": "Аня будет довольна!"
        }
       ],
       "ir": "ninos",
       "dato": "Мнение о соцсетях",
       "datoValor": "como Ana"
      },
      {
       "etiqueta": "Согласен",
       "claves": [
        "de acuerdo",
        "contigo",
        "creo que",
        "tienes razon",
        "buenas"
       ],
       "resp": [
        {
         "es": "¡Gracias! ¡Uno a uno! 😄",
         "tr": "¡Гра́сьяс! ¡У́но а у́но!",
         "ru": "Спасибо! Один — один!"
        }
       ],
       "ir": "ninos",
       "dato": "Мнение о соцсетях",
       "datoValor": "como Lucía"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Interesante… 🤔",
         "tr": "Интэрэса́нтэ…",
         "ru": "Интересно…"
        }
       ],
       "ir": "ninos",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Tú qué opinas?",
      "tr": "¿Ту кэ опи́нас?",
      "ru": "А ты что думаешь?"
     }
    },
    {
     "id": "ninos",
     "titulo": "Дети",
     "bot": [
      {
       "es": "Y los niños: ¿a qué edad deberían tener móvil? 🧒",
       "tr": "И лос ни́ньос: ¿а кэ эда́д дэбэри́ан тэнэ́р мо́бил?",
       "ru": "А дети: с какого возраста им стоит иметь мобильный телефон? 🧒"
      }
     ],
     "ideas": [
      {
       "es": "No antes de los doce años.",
       "ru": "Не раньше двенадцати лет."
      },
      {
       "es": "Creo que a los dieciséis.",
       "ru": "Думаю, в шестнадцать."
      },
      {
       "es": "Es mejor que esperen.",
       "ru": "Лучше подождать."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "anos",
        "años",
        "antes",
        "esperen",
        "creo",
        "nunca",
        "mejor"
       ],
       "resp": [
        {
         "es": "Es un tema difícil. ¡Javier dice lo mismo! 😊",
         "tr": "Эс ун тэ́ма дифи́сил. ¡Хабье́р ди́сэ ло ми́смо!",
         "ru": "Сложная тема. Хавьер говорит то же самое!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Es un tema difícil. 🤔",
         "tr": "Эс ун тэ́ма дифи́сил.",
         "ru": "Сложная тема."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué edad?",
      "tr": "¿А кэ эда́д?",
      "ru": "Со скольких лет?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-cochebici",
   "desde": 12,
   "titulo": "¿Coche o bici?",
   "tituloRu": "Машина или велосипед?",
   "resumen": "Аргументы: por un lado… por otro…, sin embargo, además",
   "intro": "Пабло не хочет продавать машину, а его друг Рауль свою уже продал. А ты что предпочитаешь?",
   "inicio": "pablo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pablo",
     "titulo": "Пабло и Рауль",
     "bot": [
      {
       "es": "Raúl, el amigo de Pablo, vendió su coche y ahora va en bici. Pablo dice que él necesita el coche para trabajar. 🚗🚲",
       "tr": "Рау́л, эл ами́го дэ Па́бло, бэндьо́ су ко́чэ и ао́ра ба эн би́си. Па́бло ди́сэ кэ эл нэсэси́та эл ко́чэ па́ра трабаха́р.",
       "ru": "Рауль, друг Пабло, продал машину и теперь ездит на велосипеде. Пабло говорит, что ему машина нужна для работы."
      },
      {
       "es": "¿Tú qué prefieres, coche o bici? ¿Por qué?",
       "tr": "¿Ту кэ прэфье́рэс, ко́чэ о би́си? ¿Пор кэ?",
       "ru": "А ты что предпочитаешь — машину или велосипед? Почему?"
      }
     ],
     "ideas": [
      {
       "es": "Prefiero la bici porque es más sana.",
       "ru": "Предпочитаю велосипед: это полезнее."
      },
      {
       "es": "El coche, porque vivo lejos.",
       "ru": "Машину, потому что живу далеко."
      },
      {
       "es": "Ni uno ni otro: el metro.",
       "ru": "Ни то ни другое: метро."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Метро",
       "claves": [
        "metro",
        "transporte publico",
        "autobus",
        "ni uno"
       ],
       "resp": [
        {
         "es": "¡Como yo! 🚇",
         "tr": "¡Ко́мо йо!",
         "ru": "Как я!"
        }
       ],
       "ir": "argumentos",
       "dato": "Транспорт (мнение)",
       "datoValor": "el metro"
      },
      {
       "etiqueta": "Велосипед",
       "claves": [
        "bici"
       ],
       "resp": [
        {
         "es": "¡Como Raúl! 🚲",
         "tr": "¡Ко́мо Рау́л!",
         "ru": "Как Рауль!"
        }
       ],
       "ir": "argumentos",
       "dato": "Транспорт (мнение)",
       "datoValor": "la bici"
      },
      {
       "etiqueta": "Машина",
       "claves": [
        "coche"
       ],
       "resp": [
        {
         "es": "¡Como Pablo! 🚗",
         "tr": "¡Ко́мо Па́бло!",
         "ru": "Как Пабло!"
        }
       ],
       "ir": "argumentos",
       "dato": "Транспорт (мнение)",
       "datoValor": "el coche"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Interesante… 🤔",
         "tr": "Интэрэса́нтэ…",
         "ru": "Интересно…"
        }
       ],
       "ir": "argumentos",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Coche o bici?",
      "tr": "¿Ко́чэ о би́си?",
      "ru": "Машина или велосипед?"
     }
    },
    {
     "id": "argumentos",
     "titulo": "С одной стороны…",
     "bot": [
      {
       "es": "Ahora, un argumento a favor y otro en contra del coche: «Por un lado…, por otro lado…». 🤔",
       "tr": "Ао́ра, ун аргумэ́нто а фабо́р и о́тро эн ко́нтра дэл ко́чэ: «Пор ун ла́до…, пор о́тро ла́до…».",
       "ru": "А теперь один аргумент за машину и один против: «Por un lado…, por otro lado…»."
      }
     ],
     "ideas": [
      {
       "es": "Por un lado es cómodo; por otro, contamina.",
       "ru": "С одной стороны, машина удобна; с другой — загрязняет окружающую среду."
      },
      {
       "es": "Es rápido, pero es caro.",
       "ru": "Быстро, но дорого."
      },
      {
       "es": "Por un lado es libre; sin embargo, no hay aparcamiento.",
       "ru": "С одной стороны, на машине можно свободно передвигаться; однако с парковкой есть проблемы."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Por un lado / sin embargo",
       "claves": [
        "por un lado",
        "por otro",
        "sin embargo",
        "aunque",
        "ademas"
       ],
       "resp": [
        {
         "es": "¡Muy bien argumentado! 👏",
         "tr": "¡Муй бьен аргумэнта́до!",
         "ru": "Очень хорошая аргументация!"
        }
       ],
       "ir": "ciudad"
      },
      {
       "etiqueta": "Pero",
       "claves": [
        "pero",
        "contamina",
        "caro",
        "comodo",
        "rapido"
       ],
       "resp": [
        {
         "es": "¡Bien! 😉 Y para sonar más formal: «por un lado…, por otro…».",
         "tr": "¡Бьен! И па́ра сона́р мас форма́л: «пор ун ла́до…, пор о́тро…».",
         "ru": "Хорошо! 😉 А чтобы звучать более официально, используй: «por un lado…, por otro…»."
        }
       ],
       "ir": "ciudad"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Por un lado es cómodo; por otro, contamina».",
         "tr": "«Пор ун ла́до эс ко́модо; пор о́тро, контами́на».",
         "ru": "«Por un lado es cómodo; por otro, contamina»."
        }
       ],
       "ir": "ciudad",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Un argumento a favor y otro en contra.",
      "tr": "Ун аргумэ́нто а фабо́р и о́тро эн ко́нтра.",
      "ru": "Один аргумент за и один против."
     }
    },
    {
     "id": "ciudad",
     "titulo": "Город без машин",
     "bot": [
      {
       "es": "En Barcelona hay calles sin coches. ¿Te gustaría tener más calles así en tu ciudad?",
       "tr": "Эн Барсэло́на ай ка́ес син ко́чэс. ¿Тэ густари́а тэнэ́р мас ка́ес аси́ эн ту сьюда́д?",
       "ru": "В Барселоне есть улицы без машин. Хотел(а) бы ты больше таких улиц в своём городе?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me encantaría.",
       "ru": "Да, было бы здорово."
      },
      {
       "es": "No, sería un problema para los coches.",
       "ru": "Нет, это было бы проблемой для машин."
      },
      {
       "es": "Creo que sí.",
       "ru": "Думаю, да."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "=no",
        "encantaria",
        "seria",
        "creo",
        "problema",
        "gustaria"
       ],
       "resp": [
        {
         "es": "¡Buena respuesta! Se lo cuento a Pablo y a Raúl. 😄",
         "tr": "¡Буэ́на рэспуэ́ста! Сэ ло куэ́нто а Па́бло и а Рау́л.",
         "ru": "Хороший ответ! Расскажу Пабло и Раулю."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buena respuesta! 😄",
         "tr": "¡Буэ́на рэспуэ́ста!",
         "ru": "Хороший ответ!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te gustaría?",
      "tr": "¿Тэ густари́а?",
      "ru": "Хотел(а) бы ты?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-turismo",
   "desde": 12,
   "titulo": "El turismo",
   "tituloRu": "Туризм",
   "resumen": "Плюсы и минусы: es verdad que…, no es verdad que…, me molesta que…",
   "intro": "В Барселону приезжает очень много туристов. Лусия рассказывает о плюсах и минусах.",
   "inicio": "turistas",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "turistas",
     "titulo": "Туристы",
     "bot": [
      {
       "es": "Cada año vienen millones de turistas a Barcelona. 🧳 Es bueno para el trabajo, pero los pisos son cada vez más caros.",
       "tr": "Ка́да а́ньо бье́нэн мийо́нэс дэ тури́стас а Барсэло́на. Эс буэ́но па́ра эл траба́хо, пэ́ро лос пи́сос сон ка́да бэс мас ка́рос.",
       "ru": "Каждый год в Барселону приезжают миллионы туристов. Это хорошо для работы, но квартиры всё дороже."
      },
      {
       "es": "¿Qué piensas del turismo?",
       "tr": "¿Кэ пье́нсас дэл тури́смо?",
       "ru": "Что ты думаешь о туризме?"
      }
     ],
     "ideas": [
      {
       "es": "Es bueno para la economía.",
       "ru": "Это хорошо для экономики."
      },
      {
       "es": "Creo que hay demasiados turistas.",
       "ru": "Думаю, туристов слишком много."
      },
      {
       "es": "Yo también soy turista a veces. 😄",
       "ru": "Я тоже иногда бываю туристом / туристкой. 😄"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Тоже турист",
       "claves": [
        "soy turista",
        "tambien"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Todos lo somos! 😄",
         "tr": "¡Ха, ха! ¡То́дос ло со́мос!",
         "ru": "Ха-ха! Все мы туристы!"
        }
       ],
       "ir": "molesta"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "economia",
        "trabajo",
        "demasiado",
        "creo",
        "bueno",
        "malo",
        "pienso"
       ],
       "resp": [
        {
         "es": "Es verdad. Es un tema complicado. 🤔",
         "tr": "Эс бэрда́д. Эс ун тэ́ма комплика́до.",
         "ru": "Правда. Сложная тема."
        }
       ],
       "ir": "molesta",
       "dato": "Туризм"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "Es un tema complicado. 🤔",
         "tr": "Эс ун тэ́ма комплика́до.",
         "ru": "Сложная тема."
        }
       ],
       "ir": "molesta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué piensas del turismo?",
      "tr": "¿Кэ пье́нсас дэл тури́смо?",
      "ru": "Что ты думаешь о туризме?"
     }
    },
    {
     "id": "molesta",
     "titulo": "Что раздражает",
     "bot": [
      {
       "es": "A mí me molesta que la gente haga ruido por la noche en mi calle. 😩 ¿Y a ti? ¿Qué te molesta cuando viajas?",
       "tr": "А ми мэ молэ́ста кэ ла хэ́нтэ а́га руи́до пор ла но́чэ эн ми ка́е. ¿И а ти? ¿Кэ тэ молэ́ста куа́ндо бья́хас?",
       "ru": "Меня раздражает, что люди шумят ночью на моей улице. А тебя? Что тебя раздражает в поездках?"
      }
     ],
     "ideas": [
      {
       "es": "Me molesta que todo sea tan caro.",
       "ru": "Меня раздражает, что всё так дорого."
      },
      {
       "es": "Me molestan las colas.",
       "ru": "Меня раздражают очереди."
      },
      {
       "es": "Me molesta que la gente no hable inglés.",
       "ru": "Меня раздражает, что люди не говорят по-английски."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me molesta que + indicativo",
       "claves": [
        "=molesta que hay",
        "=molesta que la gente hace",
        "=molesta que no hablan"
       ],
       "resp": [
        {
         "es": "😉 «Me molesta que sea…», con subjuntivo.",
         "tr": "«Мэ молэ́ста кэ сэ́а…», кон субхунти́бо.",
         "ru": "«Me molesta que sea…» — с subjuntivo."
        }
       ],
       "ir": "verdad"
      },
      {
       "etiqueta": "Английский",
       "claves": [
        "ingles"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Yo soy profesora de inglés: es mi culpa! 😅",
         "tr": "¡Ха, ха! ¡Йо сой профэсо́ра дэ инглэ́с: эс ми ку́лпа!",
         "ru": "Ха-ха! Я учительница английского — это моя вина!"
        }
       ],
       "ir": "verdad"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "molesta",
        "molestan",
        "no me gusta"
       ],
       "resp": [
        {
         "es": "¡Te entiendo! 😅",
         "tr": "¡Тэ энтье́ндо!",
         "ru": "Понимаю!"
        }
       ],
       "ir": "verdad"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Te entiendo! 😅",
         "tr": "¡Тэ энтье́ндо!",
         "ru": "Понимаю!"
        }
       ],
       "ir": "verdad",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te molesta?",
      "tr": "¿Кэ тэ молэ́ста?",
      "ru": "Что тебя раздражает?"
     }
    },
    {
     "id": "verdad",
     "titulo": "Правда или нет",
     "bot": [
      {
       "es": "Algunos dicen: «En España todos duermen la siesta». ¿Es verdad o no es verdad? 😴",
       "tr": "Алгу́нос ди́сэн: «Эн Эспа́ня то́дос дуэ́рмэн ла сье́ста». ¿Эс бэрда́д о но эс бэрда́д?",
       "ru": "Некоторые говорят: «В Испании все спят днём». Это правда или нет? 😴"
      }
     ],
     "ideas": [
      {
       "es": "No es verdad que todos duerman la siesta.",
       "ru": "Неправда, что все спят после обеда."
      },
      {
       "es": "Creo que es un mito.",
       "ru": "Думаю, это миф."
      },
      {
       "es": "Es verdad.",
       "ru": "Это правда."
      }
     ],
     "ramas": [
      {
       "etiqueta": "No es verdad que + subj",
       "claves": [
        "no es verdad que",
        "no creo que"
       ],
       "resp": [
        {
         "es": "¡Exacto! Yo nunca tengo tiempo. 😄",
         "tr": "¡Экса́кто! Йо ну́нка тэ́нго тье́мпо.",
         "ru": "Именно! У меня никогда нет времени."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Миф",
       "claves": [
        "mito",
        "=no",
        "falso",
        "mentira"
       ],
       "resp": [
        {
         "es": "¡Exacto! 😄",
         "tr": "¡Экса́кто!",
         "ru": "Именно!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Правда",
       "claves": [
        "es verdad",
        "=si"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Ojalá! Yo nunca tengo tiempo. 😴",
         "tr": "¡Ха, ха! ¡Охала́! Йо ну́нка тэ́нго тье́мпо.",
         "ru": "Ха-ха! Если бы! У меня никогда нет времени."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «No es verdad que todos duerman la siesta».",
         "tr": "«Но эс бэрда́д кэ то́дос дуэ́рман ла сье́ста».",
         "ru": "«No es verdad que todos duerman la siesta»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Es verdad?",
      "tr": "¿Эс бэрда́д?",
      "ru": "Это правда?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-medio",
   "desde": 12,
   "titulo": "El medio ambiente",
   "tituloRu": "Окружающая среда",
   "resumen": "Экология: es importante que, hay que, deberíamos",
   "intro": "Лусия рассказывает, что делает для экологии. А ты? «Es importante que…», «deberíamos…».",
   "inicio": "hago",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hago",
     "titulo": "Что ты делаешь",
     "bot": [
      {
       "es": "Yo reciclo, no tengo coche y llevo mi bolsa al supermercado. ♻️",
       "tr": "Йо рэси́кло, но тэ́нго ко́чэ и е́бо ми бо́лса ал супэрмэрка́до.",
       "ru": "Я сортирую мусор, у меня нет машины, и в супермаркет беру с собой свою сумку. ♻️"
      },
      {
       "es": "¿Y tú? ¿Qué haces por el medio ambiente?",
       "tr": "¿И ту? ¿Кэ а́сэс пор эл мэ́дьо амбье́нтэ?",
       "ru": "А ты? Что ты делаешь для окружающей среды?"
      }
     ],
     "ideas": [
      {
       "es": "Reciclo la basura.",
       "ru": "Я сортирую мусор."
      },
      {
       "es": "Voy en bici.",
       "ru": "Я езжу на велосипеде."
      },
      {
       "es": "No mucho, la verdad.",
       "ru": "Честно говоря, немного."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Немного",
       "claves": [
        "no mucho",
        "nada",
        "poco"
       ],
       "resp": [
        {
         "es": "¡Bueno, nunca es tarde! 😉",
         "tr": "¡Буэ́но, ну́нка эс та́рдэ!",
         "ru": "Ну, никогда не поздно!"
        }
       ],
       "ir": "importante",
       "dato": "Экология"
      },
      {
       "etiqueta": "Делает",
       "claves": [
        "reciclo",
        "bici",
        "agua",
        "luz",
        "bolsa",
        "plastico",
        "a pie",
        "metro"
       ],
       "resp": [
        {
         "es": "¡Muy bien! 🌱",
         "tr": "¡Муй бьен!",
         "ru": "Молодец!"
        }
       ],
       "ir": "importante",
       "dato": "Экология"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Muy bien! 🌱",
         "tr": "¡Муй бьен!",
         "ru": "Молодец!"
        }
       ],
       "ir": "importante",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué haces?",
      "tr": "¿Кэ а́сэс?",
      "ru": "Что ты делаешь?"
     }
    },
    {
     "id": "importante",
     "titulo": "Es importante que",
     "bot": [
      {
       "es": "¿Qué es lo más importante para el planeta? Empieza con «es importante que…». 🌍",
       "tr": "¿Кэ эс ло мас импорта́нтэ па́ра эл планэ́та? Эмпье́са кон «эс импорта́нтэ кэ…».",
       "ru": "Что важнее всего для планеты? Начни с «es importante que…»."
      }
     ],
     "ideas": [
      {
       "es": "Es importante que usemos menos plástico.",
       "ru": "Важно, чтобы мы использовали меньше пластика."
      },
      {
       "es": "Es importante que haya más trenes.",
       "ru": "Важно, чтобы было больше поездов."
      },
      {
       "es": "Es importante que los niños aprendan a reciclar.",
       "ru": "Важно, чтобы дети учились сортировать мусор."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Es importante que + indicativo",
       "claves": [
        "=importante que usamos",
        "=importante que hay",
        "=importante que aprenden"
       ],
       "resp": [
        {
         "es": "😉 Con subjuntivo: «que usemos», «que haya».",
         "tr": "Кон субхунти́бо: «кэ усэ́мос», «кэ а́я».",
         "ru": "С subjuntivo: «que usemos», «que haya»."
        }
       ],
       "ir": "gobierno"
      },
      {
       "etiqueta": "Es importante que + subj",
       "claves": [
        "importante",
        "hay que",
        "deberiamos",
        "necesario"
       ],
       "resp": [
        {
         "es": "¡Totalmente de acuerdo! 👍",
         "tr": "¡Тоталмэ́нтэ дэ акуэ́рдо!",
         "ru": "Полностью согласна!"
        }
       ],
       "ir": "gobierno"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Es importante que usemos menos plástico».",
         "tr": "«Эс импорта́нтэ кэ усэ́мос мэ́нос пла́стико».",
         "ru": "«Es importante que usemos menos plástico»."
        }
       ],
       "ir": "gobierno",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué es importante?",
      "tr": "¿Кэ эс импорта́нтэ?",
      "ru": "Что важно?"
     }
    },
    {
     "id": "gobierno",
     "titulo": "Правительство",
     "bot": [
      {
       "es": "Y el gobierno, ¿qué debería hacer? 🏛️",
       "tr": "И эл гобье́рно, ¿кэ дэбэри́а асэ́р?",
       "ru": "А правительство что должно делать?"
      }
     ],
     "ideas": [
      {
       "es": "Debería mejorar el transporte público.",
       "ru": "Улучшить общественный транспорт."
      },
      {
       "es": "Debería poner más impuestos a la contaminación.",
       "ru": "Ввести больше налогов на загрязнение."
      },
      {
       "es": "No sé, es complicado.",
       "ru": "Не знаю, это сложно."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "deberia",
        "tendria",
        "tiene que",
        "hay que",
        "transporte",
        "complicado",
        "no se"
       ],
       "resp": [
        {
         "es": "¡Buena idea! Deberías ser ministro. 😄",
         "tr": "¡Буэ́на идэ́а! Дэбэри́ас сэр мини́стро.",
         "ru": "Хорошая идея! Тебе бы министром быть."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Buena idea! 😄",
         "tr": "¡Буэ́на идэ́а!",
         "ru": "Хорошая идея!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué debería hacer?",
      "tr": "¿Кэ дэбэри́а асэ́р?",
      "ru": "Что должно делать правительство?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-prestas",
   "desde": 12,
   "titulo": "¿Me lo prestas?",
   "tituloRu": "Одолжишь мне?",
   "resumen": "Двойные местоимения: me lo, te la, se lo",
   "intro": "Лусия переезжает на выходные к Ане и просит вещи. Отвечай с двумя местоимениями: «te lo presto».",
   "inicio": "libro",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "libro",
     "titulo": "Книга",
     "bot": [
      {
       "es": "El sábado voy a pintar mi piso y duermo en casa de Ana. 🎨 Necesito varias cosas…",
       "tr": "Эл са́бадо бой а пинта́р ми пи́со и дуэ́рмо эн ка́са дэ А́на. Нэсэси́то ба́рьяс ко́сас…",
       "ru": "В субботу я буду красить квартиру и ночевать у Ани. 🎨 Мне нужны кое-какие вещи…"
      },
      {
       "es": "¿Me prestas tu libro de ciencia ficción? 📖",
       "tr": "¿Мэ прэ́стас ту ли́бро дэ сье́нсья фиксьо́н?",
       "ru": "Одолжишь мне свою научно-фантастическую книгу? 📖"
      }
     ],
     "ideas": [
      {
       "es": "Sí, te lo presto.",
       "ru": "Да, одолжу."
      },
      {
       "es": "Claro, te lo dejo.",
       "ru": "Конечно, дам."
      },
      {
       "es": "Lo siento, no te lo puedo prestar.",
       "ru": "Извини, не могу одолжить."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нет",
       "claves": [
        "no te lo",
        "lo siento",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Vale, no pasa nada! 😊",
         "tr": "¡Ба́лэ, но па́са на́да!",
         "ru": "Ладно, ничего страшного!"
        }
       ],
       "ir": "bici"
      },
      {
       "etiqueta": "Te lo",
       "claves": [
        "te lo"
       ],
       "resp": [
        {
         "es": "¡Gracias! 😍",
         "tr": "¡Гра́сьяс!",
         "ru": "Спасибо!"
        }
       ],
       "ir": "bici"
      },
      {
       "etiqueta": "Te presto (без lo)",
       "claves": [
        "=si te presto",
        "=te presto",
        "=si presto"
       ],
       "resp": [
        {
         "es": "😉 «Te lo presto»: «te» (a mí) + «lo» (el libro). ¡Gracias!",
         "tr": "«Тэ ло прэ́сто»: «тэ» (а ми) + «ло» (эл ли́бро). ¡Гра́сьяс!",
         "ru": "«Te lo presto»: «te» (мне) + «lo» (книгу). Спасибо!"
        }
       ],
       "ir": "bici"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Sí, te lo presto».",
         "tr": "«Си, тэ ло прэ́сто».",
         "ru": "«Sí, te lo presto»."
        }
       ],
       "ir": "bici",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Me prestas el libro?",
      "tr": "¿Мэ прэ́стас эл ли́бро?",
      "ru": "Одолжишь книгу?"
     }
    },
    {
     "id": "bici",
     "titulo": "Ане",
     "bot": [
      {
       "es": "Y Ana necesita una escalera para ayudarme. ¿Se la dejas? 🪜",
       "tr": "И А́на нэсэси́та у́на эскалэ́ра па́ра аюда́рмэ. ¿Сэ ла дэ́хас?",
       "ru": "А Ане нужна лестница, чтобы мне помочь. Одолжишь ей?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, se la dejo.",
       "ru": "Да, одолжу ей."
      },
      {
       "es": "Claro, se la llevo mañana.",
       "ru": "Конечно, завтра ей принесу."
      },
      {
       "es": "No tengo escalera.",
       "ru": "У меня нет лестницы."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Le la (ошибка)",
       "claves": [
        "le la",
        "le lo"
       ],
       "resp": [
        {
         "es": "😉 «Le» + «la» = «se la»: «se la dejo».",
         "tr": "«Лэ» + «ла» = «сэ ла»: «сэ ла дэ́хо».",
         "ru": "«Le» + «la» = «se la»: «se la dejo»."
        }
       ],
       "ir": "llaves"
      },
      {
       "etiqueta": "Нет лестницы",
       "claves": [
        "no tengo"
       ],
       "resp": [
        {
         "es": "¡Vale! Se la pido a mi vecino. 😄",
         "tr": "¡Ба́лэ! Сэ ла пи́до а ми бэси́но.",
         "ru": "Ладно! Попрошу у соседа."
        }
       ],
       "ir": "llaves"
      },
      {
       "etiqueta": "Se la",
       "claves": [
        "se la"
       ],
       "resp": [
        {
         "es": "¡Perfecto! «Se la dejo». 👍",
         "tr": "¡Пэрфэ́кто! «Сэ ла дэ́хо».",
         "ru": "Отлично! «Se la dejo»."
        }
       ],
       "ir": "llaves"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Sí, se la dejo».",
         "tr": "«Си, сэ ла дэ́хо».",
         "ru": "«Sí, se la dejo»."
        }
       ],
       "ir": "llaves",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Se la dejas?",
      "tr": "¿Сэ ла дэ́хас?",
      "ru": "Одолжишь ей?"
     }
    },
    {
     "id": "llaves",
     "titulo": "Ключи",
     "bot": [
      {
       "es": "Última: ¿quién tiene las llaves de mi piso, tú o Ana? 🔑 Te las di el lunes, ¿no?",
       "tr": "У́лтима: ¿кьен тье́нэ лас я́бэс дэ ми пи́со, ту о А́на? Тэ лас ди эл лу́нэс, ¿но?",
       "ru": "Последнее: у кого ключи от моей квартиры, у тебя или у Ани? Я тебе их дала в понедельник, да?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me las diste a mí.",
       "ru": "Да, ты мне их дала."
      },
      {
       "es": "No, se las diste a Ana.",
       "ru": "Нет, ты их дала Ане."
      },
      {
       "es": "Te las devuelvo mañana.",
       "ru": "Верну тебе их завтра."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me las / se las / te las",
       "claves": [
        "me las",
        "se las",
        "te las"
       ],
       "resp": [
        {
         "es": "¡Perfecto! ¡«Me las», «se las»… sin problema! 👏",
         "tr": "¡Пэрфэ́кто! ¡«Мэ лас», «сэ лас»… син проблэ́ма!",
         "ru": "Отлично! «Me las», «se las»… без проблем!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Без двойных",
       "claves": [
        "llaves",
        "ana",
        "yo"
       ],
       "resp": [
        {
         "es": "¡Vale! 😉 Mejor así: «me las diste», «se las diste a Ana».",
         "tr": "¡Ба́лэ! Мэхо́р аси́: «мэ лас ди́стэ», «сэ лас ди́стэ а А́на».",
         "ru": "Понятно! Лучше так: «me las diste», «se las diste a Ana»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Me las diste a mí».",
         "tr": "«Мэ лас ди́стэ а ми».",
         "ru": "«Me las diste a mí»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Quién tiene las llaves?",
      "tr": "¿Кьен тье́нэ лас я́бэс?",
      "ru": "У кого ключи?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u12-noticias",
   "desde": 12,
   "titulo": "Las noticias",
   "tituloRu": "Новости",
   "resumen": "Обсудить новости: ¿has leído que…?, me parece increíble que…",
   "intro": "Лусия прочитала новости и хочет их обсудить. Реагируй: «¡No me digas!», «me parece increíble que…».",
   "inicio": "noticia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "noticia",
     "titulo": "Новость",
     "bot": [
      {
       "es": "¿Has leído las noticias? ¡Van a cerrar mi calle a los coches! 🚧",
       "tr": "¿Ас лэи́до лас ноти́сьяс? ¡Бан а сэрра́р ми ка́е а лос ко́чэс!",
       "ru": "Ты читал(а) новости? Мою улицу закроют для машин!"
      },
      {
       "es": "¿Qué te parece?",
       "tr": "¿Кэ тэ парэ́сэ?",
       "ru": "Что скажешь?"
      }
     ],
     "ideas": [
      {
       "es": "¡No me digas!",
       "ru": "Да ты что!"
      },
      {
       "es": "Me parece genial.",
       "ru": "По-моему, здорово."
      },
      {
       "es": "Me parece bien que haya menos coches.",
       "ru": "По-моему, хорошо, что машин станет меньше."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Удивление",
       "claves": [
        "no me digas",
        "en serio",
        "de verdad",
        "increible"
       ],
       "resp": [
        {
         "es": "¡Sí, de verdad! 😄 Yo estoy muy contenta.",
         "tr": "¡Си, дэ бэрда́д! Йо эсто́й муй контэ́нта.",
         "ru": "Да, правда! Я очень рада."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Мнение",
       "claves": [
        "me parece",
        "creo",
        "bien",
        "genial",
        "mal"
       ],
       "resp": [
        {
         "es": "¡Yo también lo creo! 😊",
         "tr": "¡Йо тамбье́н ло крэ́о!",
         "ru": "Я тоже так думаю!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Yo estoy muy contenta! 😊",
         "tr": "¡Йо эсто́й муй контэ́нта!",
         "ru": "Я очень рада!"
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te parece?",
      "tr": "¿Кэ тэ парэ́сэ?",
      "ru": "Что скажешь?"
     }
    },
    {
     "id": "tu",
     "titulo": "Твоя новость",
     "bot": [
      {
       "es": "¿Y tú? ¿Cómo te informas? ¿Lees el periódico, ves la tele…? 📰",
       "tr": "¿И ту? ¿Ко́мо тэ инфо́рмас? ¿Лэ́эс эл пэрьо́дико, бэс ла тэ́лэ…?",
       "ru": "А ты? Как ты узнаёшь новости? Читаешь газету, смотришь телевизор…?"
      }
     ],
     "ideas": [
      {
       "es": "Leo las noticias en el móvil.",
       "ru": "Читаю новости с телефона."
      },
      {
       "es": "Escucho la radio en el coche.",
       "ru": "Слушаю радио в машине."
      },
      {
       "es": "No me informo mucho.",
       "ru": "Я не особо слежу за новостями."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "leo",
        "veo",
        "escucho",
        "movil",
        "radio",
        "tele",
        "periodico",
        "internet",
        "redes",
        "no me informo",
        "poco"
       ],
       "resp": [
        {
         "es": "¡Vale! Yo las leo en el móvil, en el metro. 📱",
         "tr": "¡Ба́лэ! Йо лас лэ́о эн эл мо́бил, эн эл мэ́тро.",
         "ru": "Понятно! Я читаю их с телефона, в метро. 📱"
        }
       ],
       "ir": "verdad",
       "dato": "Новости"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Vale! 🙂",
         "tr": "¡Ба́лэ!",
         "ru": "Понятно!"
        }
       ],
       "ir": "verdad",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo te informas?",
      "tr": "¿Ко́мо тэ инфо́рмас?",
      "ru": "Как ты узнаёшь новости?"
     }
    },
    {
     "id": "verdad",
     "titulo": "Фейк?",
     "bot": [
      {
       "es": "Ana leyó en internet que los españoles comen doce uvas a las doce en Nochevieja. ¿Crees que es verdad? 🍇",
       "tr": "А́на лэйо́ эн интэрнэ́т кэ лос эспаньо́лэс ко́мэн до́сэ у́бас а лас до́сэ эн Ночэбье́ха. ¿Крэ́эс кэ эс бэрда́д?",
       "ru": "Аня прочитала в интернете, что испанцы в новогоднюю ночь в полночь едят двенадцать виноградин. Думаешь, это правда?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, es verdad.",
       "ru": "Да, это правда."
      },
      {
       "es": "No creo que sea verdad.",
       "ru": "Не думаю, что это правда."
      },
      {
       "es": "¡No me digas!",
       "ru": "Да ты что!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "No creo que + subj",
       "claves": [
        "no creo que sea"
       ],
       "resp": [
        {
         "es": "¡Pues sí es verdad! Una uva cada vez que suena el reloj. 😄🍇",
         "tr": "¡Пуэс си эс бэрда́д! У́на у́ба ка́да бэс кэ суэ́на эл рэло́х.",
         "ru": "А вот и правда! По виноградине на каждый удар часов."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "No creo que es",
       "claves": [
        "=no creo que es verdad"
       ],
       "resp": [
        {
         "es": "😉 «No creo que sea». ¡Y sí es verdad! 🍇",
         "tr": "«Но крэ́о кэ сэ́а». ¡И си эс бэрда́д!",
         "ru": "«No creo que sea». А ведь это правда! 🍇"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Правда",
       "claves": [
        "=si",
        "es verdad",
        "verdad"
       ],
       "resp": [
        {
         "es": "¡Sí! Una uva cada vez que suena el reloj. 😄🍇",
         "tr": "¡Си! У́на у́ба ка́да бэс кэ суэ́на эл рэло́х.",
         "ru": "Да! По виноградине на каждый удар часов."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Удивление",
       "claves": [
        "no me digas",
        "=no",
        "mentira"
       ],
       "resp": [
        {
         "es": "¡Sí, de verdad! Una uva cada vez que suena el reloj. 😄",
         "tr": "¡Си, дэ бэрда́д! У́на у́ба ка́да бэс кэ суэ́на эл рэло́х.",
         "ru": "Да, правда! По виноградине на каждый удар часов."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Es verdad! 🍇",
         "tr": "¡Эс бэрда́д!",
         "ru": "Это правда!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Crees que es verdad?",
      "tr": "¿Крэ́эс кэ эс бэрда́д?",
      "ru": "Думаешь, это правда?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-dijo",
   "desde": 13,
   "titulo": "¿Qué te dijo?",
   "tituloRu": "Что он тебе сказал?",
   "resumen": "Косвенная речь: me dijo que…, me preguntó si…",
   "intro": "Лусия пересказывает разговоры. Ты тоже: «Me dijo que…», «me preguntó si…».",
   "inicio": "pablo",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "pablo",
     "titulo": "Пабло позвонил",
     "bot": [
      {
       "es": "Ayer me llamó Pablo. Me dijo que Marta y él vendrían a Barcelona en Navidad. 🎄",
       "tr": "Ае́р мэ ямо́ Па́бло. Мэ ди́хо кэ Ма́рта и эл бэндри́ан а Барсэло́на эн Набида́д.",
       "ru": "Вчера мне позвонил Пабло. Сказал, что они с Мартой приедут в Барселону на Рождество."
      },
      {
       "es": "¿Qué te dije? Repítelo: «Me dijiste que…»",
       "tr": "¿Кэ тэ ди́хэ? Рэпи́тэло: «Мэ дихи́стэ кэ…»",
       "ru": "Что я тебе сказала? Повтори: «Me dijiste que…»"
      }
     ],
     "ideas": [
      {
       "es": "Me dijiste que Pablo y Marta vendrían en Navidad.",
       "ru": "Ты сказала, что Пабло и Марта приедут на Рождество."
      },
      {
       "es": "Que vienen en Navidad.",
       "ru": "Что они приезжают на Рождество."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Vendrían",
       "claves": [
        "vendrian"
       ],
       "resp": [
        {
         "es": "¡Perfecto! «Vendrán» → «vendrían». 👏",
         "tr": "¡Пэрфэ́кто! «Бэндра́н» → «бэндри́ан».",
         "ru": "Отлично! «Vendrán» → «vendrían»."
        }
       ],
       "ir": "pregunta"
      },
      {
       "etiqueta": "Vienen / vendrán",
       "claves": [
        "vienen",
        "vendran",
        "venian",
        "navidad"
       ],
       "resp": [
        {
         "es": "¡Bien! 😉 Más correcto: «me dijiste que vendrían».",
         "tr": "¡Бьен! Мас коррэ́кто: «мэ дихи́стэ кэ бэндри́ан».",
         "ru": "Хорошо! Правильнее: «me dijiste que vendrían»."
        }
       ],
       "ir": "pregunta"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Me dijiste que vendrían en Navidad».",
         "tr": "«Мэ дихи́стэ кэ бэндри́ан эн Набида́д».",
         "ru": "«Me dijiste que vendrían en Navidad»."
        }
       ],
       "ir": "pregunta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te dije?",
      "tr": "¿Кэ тэ ди́хэ?",
      "ru": "Что я тебе сказала?"
     }
    },
    {
     "id": "pregunta",
     "titulo": "Me preguntó si…",
     "bot": [
      {
       "es": "Y Ana me preguntó: «¿Vienes a cenar el viernes?». ¿Cómo lo cuentas tú? «Ana te preguntó si…»",
       "tr": "И А́на мэ прэгунто́: «¿Бье́нэс а сэна́р эл бье́рнэс?». ¿Ко́мо ло куэ́нтас ту? «А́на тэ прэгунто́ си…»",
       "ru": "А Аня меня спросила: «Придёшь в пятницу на ужин?» Как ты это перескажешь? «Ana te preguntó si…»"
      }
     ],
     "ideas": [
      {
       "es": "Ana te preguntó si ibas a cenar el viernes.",
       "ru": "Аня спросила, придёшь ли ты на ужин в пятницу."
      },
      {
       "es": "Te preguntó si venías a cenar.",
       "ru": "Она спросила, придёшь ли ты на ужин."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Si + imperfecto",
       "claves": [
        "si ibas",
        "si venias",
        "si irias",
        "si vendrias"
       ],
       "resp": [
        {
         "es": "¡Perfecto! 👏",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Si + presente",
       "claves": [
        "si vienes",
        "si vas",
        "si"
       ],
       "resp": [
        {
         "es": "¡Bien! 😉 En pasado: «te preguntó si venías».",
         "tr": "¡Бьен! Эн паса́до: «тэ прэгунто́ си бэни́ас».",
         "ru": "Хорошо! В прошедшем: «te preguntó si venías»."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Ana te preguntó si venías a cenar».",
         "tr": "«А́на тэ прэгунто́ си бэни́ас а сэна́р».",
         "ru": "«Ana te preguntó si venías a cenar»."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "Ana te preguntó si…",
      "tr": "А́на тэ прэгунто́ си…",
      "ru": "Аня тебя спросила, …"
     }
    },
    {
     "id": "tu",
     "titulo": "Тебе что сказали",
     "bot": [
      {
       "es": "¿Y a ti? ¿Qué te dijo alguien esta semana? Cuéntamelo. 💬",
       "tr": "¿И а ти? ¿Кэ тэ ди́хо а́лгьен э́ста сэма́на? Куэ́нтамэло.",
       "ru": "А тебе? Что тебе кто-нибудь сказал на этой неделе? Расскажи."
      }
     ],
     "ideas": [
      {
       "es": "Mi jefe me dijo que trabajaba muy bien.",
       "ru": "Начальник сказал, что я хорошо работаю."
      },
      {
       "es": "Mi madre me dijo que me echaba de menos.",
       "ru": "Мама сказала, что скучает по мне."
      },
      {
       "es": "Un amigo me preguntó si quería ir al cine.",
       "ru": "Друг спросил, хочу ли я пойти в кино."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me dijo / me preguntó",
       "claves": [
        "me dijo",
        "me pregunto",
        "me conto",
        "me explico"
       ],
       "resp": [
        {
         "es": "¡Muy bien contado! 👏",
         "tr": "¡Муй бьен конта́до!",
         "ru": "Отлично пересказано!"
        }
       ],
       "ir": "fin",
       "dato": "Новость недели"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Me dijo que…».",
         "tr": "«Мэ ди́хо кэ…».",
         "ru": "«Me dijo que…»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te dijo alguien?",
      "tr": "¿Кэ тэ ди́хо а́лгьен?",
      "ru": "Что тебе сказали?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-yahabia",
   "desde": 13,
   "titulo": "Cuando llegué, ya…",
   "tituloRu": "Когда я пришёл (пришла), уже…",
   "resumen": "Pretérito pluscuamperfecto: cuando llegué, ya había empezado",
   "intro": "У Лусии был ужасный день: всё случилось раньше, чем она пришла. «Ya se había ido», «ya había empezado».",
   "inicio": "dia",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "dia",
     "titulo": "Ужасный день",
     "bot": [
      {
       "es": "¡Qué día! Cuando llegué a la estación, el tren ya se había ido. 🚆😩",
       "tr": "¡Кэ ди́а! Куа́ндо егэ́ а ла эстасьо́н, эл трэн я сэ аби́а и́до.",
       "ru": "Что за день! Когда я пришла на вокзал, поезд уже ушёл."
      },
      {
       "es": "Y cuando llegué al cine, ¿qué crees que pasó? 🎬",
       "tr": "И куа́ндо егэ́ ал си́нэ, ¿кэ крэ́эс кэ пасо́?",
       "ru": "А когда я пришла в кино, как думаешь, что случилось?"
      }
     ],
     "ideas": [
      {
       "es": "La película ya había empezado.",
       "ru": "Фильм уже начался."
      },
      {
       "es": "Ya habían cerrado.",
       "ru": "Уже закрыли."
      },
      {
       "es": "Tus amigos ya se habían ido.",
       "ru": "Твои друзья уже ушли."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ya había + participio",
       "claves": [
        "habia",
        "habian"
       ],
       "resp": [
        {
         "es": "¡Exacto! La película ya había empezado. 😅",
         "tr": "¡Экса́кто! Ла пэли́кула я аби́а эмпэса́до.",
         "ru": "Именно! Фильм уже начался."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Empezó (indefinido)",
       "claves": [
        "empezo",
        "cerraron",
        "se fueron",
        "se fue"
       ],
       "resp": [
        {
         "es": "¡Sí! 😉 Antes de llegar yo: «ya había empezado».",
         "tr": "¡Си! А́нтэс дэ ега́р йо: «я аби́а эмпэса́до».",
         "ru": "Да! До моего прихода: «ya había empezado»."
        }
       ],
       "ir": "tu"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "La película ya había empezado. 😅",
         "tr": "Ла пэли́кула я аби́а эмпэса́до.",
         "ru": "Фильм уже начался."
        }
       ],
       "ir": "tu",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué pasó?",
      "tr": "¿Кэ пасо́?",
      "ru": "Что случилось?"
     }
    },
    {
     "id": "tu",
     "titulo": "С тобой",
     "bot": [
      {
       "es": "¿Te ha pasado algo así? «Cuando llegué, ya…»",
       "tr": "¿Тэ а паса́до а́лго аси́? «Куа́ндо егэ́, я…»",
       "ru": "С тобой такое бывало? «Cuando llegué, ya…»"
      }
     ],
     "ideas": [
      {
       "es": "Cuando llegué a la fiesta, ya se había terminado.",
       "ru": "Когда я пришёл на праздник, он уже закончился."
      },
      {
       "es": "Cuando llegué a clase, el examen ya había empezado.",
       "ru": "Когда я пришёл на урок, экзамен уже начался."
      },
      {
       "es": "No, siempre llego pronto.",
       "ru": "Нет, я всегда прихожу рано."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Всегда вовремя",
       "claves": [
        "pronto",
        "temprano",
        "nunca",
        "=no"
       ],
       "resp": [
        {
         "es": "¡Qué envidia! 😄",
         "tr": "¡Кэ энби́дья!",
         "ru": "Завидую!"
        }
       ],
       "ir": "antes"
      },
      {
       "etiqueta": "Ya había",
       "claves": [
        "ya habia",
        "habia",
        "habian"
       ],
       "resp": [
        {
         "es": "¡Uf, qué mala suerte! 😅",
         "tr": "¡Уф, кэ ма́ла суэ́ртэ!",
         "ru": "Ох, не повезло!"
        }
       ],
       "ir": "antes",
       "dato": "Опоздание"
      },
      {
       "etiqueta": "Без pluscuamperfecto",
       "claves": [
        "cuando llegue",
        "ya"
       ],
       "resp": [
        {
         "es": "😉 «…ya había empezado». ¡Qué mala suerte!",
         "tr": "«…я аби́а эмпэса́до». ¡Кэ ма́ла суэ́ртэ!",
         "ru": "«…ya había empezado». Не повезло!"
        }
       ],
       "ir": "antes"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué mala suerte! 😅",
         "tr": "¡Кэ ма́ла суэ́ртэ!",
         "ru": "Не повезло!"
        }
       ],
       "ir": "antes",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Te ha pasado algo así?",
      "tr": "¿Тэ а паса́до а́лго аси́?",
      "ru": "С тобой такое бывало?"
     }
    },
    {
     "id": "antes",
     "titulo": "До Испании",
     "bot": [
      {
       "es": "Antes de venir a Barcelona, ¿ya habías estudiado español? 📚",
       "tr": "А́нтэс дэ бэни́р а Барсэло́на, ¿я аби́ас эстудья́до эспаньо́л?",
       "ru": "До приезда в Барселону ты уже учил(а) испанский?"
      }
     ],
     "ideas": [
      {
       "es": "No, nunca había estudiado español.",
       "ru": "Нет, я никогда раньше не учил(а) испанский."
      },
      {
       "es": "Sí, ya había estudiado un poco.",
       "ru": "Да, я уже немного учил(а)."
      },
      {
       "es": "No he venido todavía.",
       "ru": "Я ещё не приезжал(а)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ещё не приезжал",
       "claves": [
        "no he venido",
        "todavia no",
        "no vivo"
       ],
       "resp": [
        {
         "es": "¡Pues cuando vengas, ya hablarás muy bien! 😊",
         "tr": "¡Пуэс куа́ндо бэ́нгас, я аблара́с муй бьен!",
         "ru": "Ну, когда приедешь, будешь уже отлично говорить!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Había estudiado",
       "claves": [
        "habia estudiado",
        "nunca habia",
        "ya habia",
        "habia"
       ],
       "resp": [
        {
         "es": "¡Muy bien dicho! 👏",
         "tr": "¡Муй бьен ди́чо!",
         "ru": "Отлично сказано!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "=no",
        "estudie",
        "un poco"
       ],
       "resp": [
        {
         "es": "😉 «Ya había estudiado» / «nunca había estudiado».",
         "tr": "«Я аби́а эстудья́до» / «ну́нка аби́а эстудья́до».",
         "ru": "«Ya había estudiado» / «nunca había estudiado»."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Nunca había estudiado español».",
         "tr": "«Ну́нка аби́а эстудья́до эспаньо́л».",
         "ru": "«Nunca había estudiado español»."
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Ya habías estudiado español?",
      "tr": "¿Я аби́ас эстудья́до эспаньо́л?",
      "ru": "Ты уже учил(а) испанский?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-sientes",
   "desde": 13,
   "titulo": "¿Cómo te sientes?",
   "tituloRu": "Как ты себя чувствуешь?",
   "resumen": "Чувства: me siento, me pone nervioso que, me alegra que",
   "intro": "Лусия рассказывает, как она себя чувствует, и спрашивает тебя. «Me alegra que…», «me pone nerviosa que…».",
   "inicio": "hoy",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "hoy",
     "titulo": "Сегодня",
     "bot": [
      {
       "es": "Hoy me siento un poco cansada, pero contenta: ¡mis alumnos aprobaron! 😊",
       "tr": "Ой мэ сье́нто ун по́ко канса́да, пэ́ро контэ́нта: ¡мис алу́мнос апроба́рон!",
       "ru": "Сегодня я немного устала, но довольна: мои ученики сдали экзамен!"
      },
      {
       "es": "¿Y tú? ¿Cómo te sientes hoy?",
       "tr": "¿И ту? ¿Ко́мо тэ сье́нтэс ой?",
       "ru": "А ты? Как ты себя сегодня чувствуешь?"
      }
     ],
     "ideas": [
      {
       "es": "Me siento {contento/contenta}.",
       "ru": "Я доволен (довольна)."
      },
      {
       "es": "Me siento un poco {cansado/cansada}.",
       "ru": "Я немного устал(а)."
      },
      {
       "es": "Estoy {nervioso/nerviosa} por el trabajo.",
       "ru": "Я нервничаю из-за работы."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Нервничает",
       "claves": [
        "nervios",
        "estres",
        "preocupad"
       ],
       "resp": [
        {
         "es": "¡Ánimo! Seguro que todo sale bien. 💪",
         "tr": "¡А́нимо! Сэгу́ро кэ то́до са́лэ бьен.",
         "ru": "Держись! Наверняка всё будет хорошо."
        }
       ],
       "ir": "alegra",
       "dato": "Настроение"
      },
      {
       "etiqueta": "Устал",
       "claves": [
        "cansad",
        "mal",
        "triste"
       ],
       "resp": [
        {
         "es": "¡Vaya! Descansa un poco hoy. 🫂",
         "tr": "¡Ба́я! Дэска́нса ун по́ко ой.",
         "ru": "Ох! Отдохни сегодня немного."
        }
       ],
       "ir": "alegra",
       "dato": "Настроение"
      },
      {
       "etiqueta": "Хорошо",
       "claves": [
        "content",
        "bien",
        "feliz",
        "genial",
        "alegre"
       ],
       "resp": [
        {
         "es": "¡Me alegro mucho! 😊",
         "tr": "¡Мэ алэ́гро му́чо!",
         "ru": "Очень рада!"
        }
       ],
       "ir": "alegra",
       "dato": "Настроение"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Gracias por contármelo! 😊",
         "tr": "¡Гра́сьяс пор конта́рмэло!",
         "ru": "Спасибо, что рассказал(а)!"
        }
       ],
       "ir": "alegra",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cómo te sientes?",
      "tr": "¿Ко́мо тэ сье́нтэс?",
      "ru": "Как ты себя чувствуешь?"
     }
    },
    {
     "id": "alegra",
     "titulo": "Me alegra que",
     "bot": [
      {
       "es": "A mí me alegra que mis amigos me llamen. ¿Qué te alegra a ti? Empieza con «me alegra que…». 😊",
       "tr": "А ми мэ алэ́гра кэ мис ами́гос мэ я́мэн. ¿Кэ тэ алэ́гра а ти? Эмпье́са кон «мэ алэ́гра кэ…».",
       "ru": "Меня радует, когда мне звонят друзья. А тебя что радует? Начни с «me alegra que…»."
      }
     ],
     "ideas": [
      {
       "es": "Me alegra que haga sol.",
       "ru": "Меня радует, что светит солнце."
      },
      {
       "es": "Me alegra que mi familia esté bien.",
       "ru": "Меня радует, что у моей семьи всё хорошо."
      },
      {
       "es": "Me alegra que hablemos en español.",
       "ru": "Меня радует, что мы говорим по-испански."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Me alegra que + indicativo",
       "claves": [
        "=alegra que hace",
        "=alegra que esta",
        "=alegra que hablamos"
       ],
       "resp": [
        {
         "es": "😉 Con subjuntivo: «que haga», «que esté», «que hablemos».",
         "tr": "Кон субхунти́бо: «кэ а́га», «кэ эстэ́», «кэ аблэ́мос».",
         "ru": "С subjuntivo: «que haga», «que esté», «que hablemos»."
        }
       ],
       "ir": "molesta"
      },
      {
       "etiqueta": "По-испански",
       "claves": [
        "espanol",
        "hablemos"
       ],
       "resp": [
        {
         "es": "¡A mí también! 🥰",
         "tr": "¡А ми тамбье́н!",
         "ru": "Меня тоже!"
        }
       ],
       "ir": "molesta"
      },
      {
       "etiqueta": "Me alegra que",
       "claves": [
        "alegra",
        "me gusta que",
        "me encanta que"
       ],
       "resp": [
        {
         "es": "¡Qué bonito! 😊",
         "tr": "¡Кэ бони́то!",
         "ru": "Как мило!"
        }
       ],
       "ir": "molesta"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Me alegra que haga sol».",
         "tr": "«Мэ алэ́гра кэ а́га сол».",
         "ru": "«Me alegra que haga sol»."
        }
       ],
       "ir": "molesta",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te alegra?",
      "tr": "¿Кэ тэ алэ́гра?",
      "ru": "Что тебя радует?"
     }
    },
    {
     "id": "molesta",
     "titulo": "Что раздражает",
     "bot": [
      {
       "es": "Y al revés: a mí me pone nerviosa que la gente llegue tarde. 😤 ¿Y a ti?",
       "tr": "И ал рэбэ́с: а ми мэ по́нэ нэрбьо́са кэ ла хэ́нтэ е́гэ та́рдэ. ¿И а ти?",
       "ru": "А наоборот: меня нервирует, когда люди опаздывают. 😤 А тебя?"
      }
     ],
     "ideas": [
      {
       "es": "Me pone {nervioso/nerviosa} que no me contesten.",
       "ru": "Меня нервирует, когда мне не отвечают."
      },
      {
       "es": "Me molesta que haya mucho ruido.",
       "ru": "Меня раздражает, когда много шума."
      },
      {
       "es": "A mí también.",
       "ru": "Меня тоже."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Тоже",
       "claves": [
        "a mi tambien",
        "tambien",
        "igual"
       ],
       "resp": [
        {
         "es": "¡Choca esos cinco! ✋😄",
         "tr": "¡Чо́ка э́сос си́нко!",
         "ru": "Дай пять!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "pone",
        "molesta",
        "no soporto",
        "odio",
        "que"
       ],
       "resp": [
        {
         "es": "¡Te entiendo perfectamente! 😅",
         "tr": "¡Тэ энтье́ндо пэрфэктамэ́нтэ!",
         "ru": "Прекрасно тебя понимаю!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Te entiendo! 😅",
         "tr": "¡Тэ энтье́ндо!",
         "ru": "Понимаю!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te pone nervioso?",
      "tr": "¿Кэ тэ по́нэ нэрбьо́со?",
      "ru": "Что тебя нервирует?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-historia",
   "desde": 13,
   "titulo": "Mi historia en España",
   "tituloRu": "Моя история в Испании",
   "resumen": "Связный рассказ о себе: все времена прошедшего",
   "intro": "Лусия рассказывает историю Ани в Испании, а потом ты — свою (или историю, которую хочешь прожить).",
   "inicio": "ana",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "ana",
     "titulo": "История Ани",
     "bot": [
      {
       "es": "Ana llegó a Barcelona hace un año. No conocía a nadie y hablaba muy poco español. Ahora tiene amigos, trabajo… ¡y está a punto de empezar un máster! 🎓",
       "tr": "А́на его́ а Барсэло́на а́сэ ун а́ньо. Но коноси́а а на́дье и абла́ба муй по́ко эспаньо́л. Ао́ра тье́нэ ами́гос, траба́хо… ¡и эста́ а пу́нто дэ эмпэса́р ун ма́стэр!",
       "ru": "Аня приехала в Барселону год назад. Она никого не знала и почти не говорила по-испански. Теперь у неё есть друзья, работа… и скоро она начнёт учиться в магистратуре! 🎓"
      },
      {
       "es": "¿Y tu historia? ¿Cuándo empezó tu relación con España o con el español?",
       "tr": "¿И ту исто́рья? ¿Куа́ндо эмпэсо́ ту рэласьо́н кон Эспа́ня о кон эл эспаньо́л?",
       "ru": "А твоя история? Когда ты впервые познакомился(-лась) с Испанией или с испанским?"
      }
     ],
     "ideas": [
      {
       "es": "Empezó hace dos años, cuando vine de vacaciones.",
       "ru": "Всё началось два года назад, когда я приехал(а) в отпуск."
      },
      {
       "es": "Me mudé aquí por trabajo.",
       "ru": "Я переехал(а) сюда по работе."
      },
      {
       "es": "Todavía no he venido, pero quiero venir.",
       "ru": "Я ещё не приезжал(а), но хочу."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ещё не приезжал",
       "claves": [
        "no he venido",
        "todavia no",
        "quiero venir"
       ],
       "resp": [
        {
         "es": "¡Pues aquí te esperamos! 🤗",
         "tr": "¡Пуэс аки́ тэ эспэра́мос!",
         "ru": "Ну, мы тебя здесь ждём!"
        }
       ],
       "ir": "dificil",
       "dato": "История"
      },
      {
       "etiqueta": "Рассказывает",
       "claves": [
        "hace",
        "cuando",
        "vine",
        "llegue",
        "me mude",
        "empezo",
        "empece",
        "~e",
        "~o"
       ],
       "resp": [
        {
         "es": "¡Qué historia tan bonita! 😊",
         "tr": "¡Кэ исто́рья тан бони́та!",
         "ru": "Какая красивая история!"
        }
       ],
       "ir": "dificil",
       "dato": "История"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Qué historia tan bonita! 😊",
         "tr": "¡Кэ исто́рья тан бони́та!",
         "ru": "Какая красивая история!"
        }
       ],
       "ir": "dificil",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Cuál es tu historia?",
      "tr": "¿Куал эс ту исто́рья?",
      "ru": "Какая у тебя история?"
     }
    },
    {
     "id": "dificil",
     "titulo": "Самое трудное",
     "bot": [
      {
       "es": "Ana dice que lo más difícil fue que no entendía a la gente cuando hablaba rápido. ¿Qué ha sido lo más difícil para ti?",
       "tr": "А́на ди́сэ кэ ло мас дифи́сил фуэ кэ но энтэнди́а а ла хэ́нтэ куа́ндо абла́ба ра́пидо. ¿Кэ а си́до ло мас дифи́сил па́ра ти?",
       "ru": "Аня говорит, что труднее всего было то, что она не понимала людей, когда они говорили быстро. А что было самым трудным для тебя?"
      }
     ],
     "ideas": [
      {
       "es": "Lo más difícil fue el idioma.",
       "ru": "Самым трудным был язык."
      },
      {
       "es": "Los papeles.",
       "ru": "Документы."
      },
      {
       "es": "Estar lejos de mi familia.",
       "ru": "Быть далеко от семьи."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Семья",
       "claves": [
        "familia",
        "lejos",
        "echo de menos"
       ],
       "resp": [
        {
         "es": "Te entiendo. Yo también echo de menos a mis padres. 🫂",
         "tr": "Тэ энтье́ндо. Йо тамбье́н э́чо дэ мэ́нос а мис па́дрэс.",
         "ru": "Понимаю. Я тоже скучаю по родителям."
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "idioma",
        "papeles",
        "tramites",
        "dificil",
        "fue",
        "lo mas"
       ],
       "resp": [
        {
         "es": "¡Es normal! Pero mira: ya lo has superado. 💪",
         "tr": "¡Эс норма́л! Пэ́ро ми́ра: я ло ас супэра́до.",
         "ru": "Это нормально! Но смотри: ты уже справился(-лась)."
        }
       ],
       "ir": "mejor"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Es normal! 💪",
         "tr": "¡Эс норма́л!",
         "ru": "Это нормально!"
        }
       ],
       "ir": "mejor",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué ha sido lo más difícil?",
      "tr": "¿Кэ а си́до ло мас дифи́сил?",
      "ru": "Что было самым трудным?"
     }
    },
    {
     "id": "mejor",
     "titulo": "Самое лучшее",
     "bot": [
      {
       "es": "¿Y lo mejor? 🌟",
       "tr": "¿И ло мэхо́р?",
       "ru": "А самое лучшее?"
      }
     ],
     "ideas": [
      {
       "es": "Lo mejor es la gente.",
       "ru": "Лучшее — это люди."
      },
      {
       "es": "La comida y el sol.",
       "ru": "Еда и солнце."
      },
      {
       "es": "Haber conocido a nuevos amigos.",
       "ru": "То, что я познакомился(-лась) с новыми друзьями."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "gente",
        "comida",
        "sol",
        "amigos",
        "mar",
        "playa",
        "todo",
        "lo mejor",
        "vida"
       ],
       "resp": [
        {
         "es": "¡Estoy totalmente de acuerdo! 😍",
         "tr": "¡Эсто́й тоталмэ́нтэ дэ акуэ́рдо!",
         "ru": "Полностью согласна!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Estoy de acuerdo! 😍",
         "tr": "¡Эсто́й дэ акуэ́рдо!",
         "ru": "Согласна!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Y lo mejor?",
      "tr": "¿И ло мэхо́р?",
      "ru": "А самое лучшее?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-choque",
   "desde": 13,
   "titulo": "El choque cultural",
   "tituloRu": "Культурный шок",
   "resumen": "Сравнить культуры: me sorprendió que, me costó acostumbrarme a…",
   "intro": "Аня рассказала Лусии, что её удивило в Испании. А тебя? «Me sorprendió que…» — с subjuntivo в прошедшем.",
   "inicio": "horarios",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "horarios",
     "titulo": "Расписание",
     "bot": [
      {
       "es": "A Ana le sorprendió que cenáramos a las diez de la noche. 😄 Y a mí me sorprende que en Rusia se cene a las seis.",
       "tr": "А А́на лэ сорпрэндьо́ кэ сэна́рамос а лас дьес дэ ла но́чэ. И а ми мэ сорпрэ́ндэ кэ эн Ру́сья сэ сэ́нэ а лас сэйс.",
       "ru": "Аню удивило, что мы ужинаем в десять вечера. А меня удивляет, что в России ужинают в шесть."
      },
      {
       "es": "¿Qué te sorprendió a ti de España (o de los españoles)?",
       "tr": "¿Кэ тэ сорпрэндьо́ а ти дэ Эспа́ня (о дэ лос эспаньо́лэс)?",
       "ru": "А тебя что удивило в Испании (или в испанцах)?"
      }
     ],
     "ideas": [
      {
       "es": "Me sorprendió que la gente se diera dos besos.",
       "ru": "Меня удивило, что люди целуются в обе щеки при встрече."
      },
      {
       "es": "Me sorprendieron los horarios.",
       "ru": "Меня удивило местное расписание."
      },
      {
       "es": "Me sorprendió que todos hablaran tan alto.",
       "ru": "Меня удивило, что все так громко говорят."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Поцелуи",
       "claves": [
        "besos",
        "beso"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡A Ana también! Al principio no sabía qué hacer. 😘",
         "tr": "¡Ха, ха! ¡А А́на тамбье́н! Ал принси́пьо но саби́а кэ асэ́р.",
         "ru": "Ха-ха! Аню это тоже удивило! Сначала она не знала, что делать. 😘"
        }
       ],
       "ir": "costo",
       "dato": "Удивило"
      },
      {
       "etiqueta": "Громко",
       "claves": [
        "alto",
        "gritan",
        "ruido"
       ],
       "resp": [
        {
         "es": "¡Es verdad! Hablamos muy alto. 😅",
         "tr": "¡Эс бэрда́д! Абла́мос муй а́лто.",
         "ru": "Правда! Мы говорим очень громко."
        }
       ],
       "ir": "costo",
       "dato": "Удивило"
      },
      {
       "etiqueta": "Me sorprendió que + subj",
       "claves": [
        "sorprendio",
        "sorprendieron",
        "sorprende",
        "~ara",
        "~iera"
       ],
       "resp": [
        {
         "es": "¡Interesante! 🤓",
         "tr": "¡Интэрэса́нтэ!",
         "ru": "Интересно!"
        }
       ],
       "ir": "costo",
       "dato": "Удивило"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Interesante! 🤓",
         "tr": "¡Интэрэса́нтэ!",
         "ru": "Интересно!"
        }
       ],
       "ir": "costo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te sorprendió?",
      "tr": "¿Кэ тэ сорпрэндьо́?",
      "ru": "Что тебя удивило?"
     }
    },
    {
     "id": "costo",
     "titulo": "Привыкнуть",
     "bot": [
      {
       "es": "¿Y a qué te costó acostumbrarte? 🤔 A Ana, a la siesta de las tiendas.",
       "tr": "¿И а кэ тэ косто́ акостумбра́ртэ? А А́на, а ла сье́ста дэ лас тье́ндас.",
       "ru": "А к чему тебе было трудно привыкнуть? Ане было трудно привыкнуть к тому, что магазины закрываются днём."
      }
     ],
     "ideas": [
      {
       "es": "Me costó acostumbrarme a cenar tan tarde.",
       "ru": "Мне было трудно привыкнуть ужинать так поздно."
      },
      {
       "es": "A que las tiendas cierren a mediodía.",
       "ru": "К тому, что магазины закрываются днём."
      },
      {
       "es": "A nada, me adapté rápido.",
       "ru": "Ни к чему, я быстро привык(ла)."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Ни к чему",
       "claves": [
        "a nada",
        "rapido",
        "facil",
        "ninguno"
       ],
       "resp": [
        {
         "es": "¡Qué bien! 🤸",
         "tr": "¡Кэ бьен!",
         "ru": "Здорово!"
        }
       ],
       "ir": "rusia"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "costo",
        "acostumbr",
        "cenar",
        "tiendas",
        "tarde",
        "a que"
       ],
       "resp": [
        {
         "es": "¡Te entiendo! Al principio cuesta. 😅",
         "tr": "¡Тэ энтье́ндо! Ал принси́пьо куэ́ста.",
         "ru": "Понимаю! Сначала трудно."
        }
       ],
       "ir": "rusia"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Al principio cuesta! 😅",
         "tr": "¡Ал принси́пьо куэ́ста!",
         "ru": "Сначала трудно!"
        }
       ],
       "ir": "rusia",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿A qué te costó acostumbrarte?",
      "tr": "¿А кэ тэ косто́ акостумбра́ртэ?",
      "ru": "К чему было трудно привыкнуть?"
     }
    },
    {
     "id": "rusia",
     "titulo": "Наоборот",
     "bot": [
      {
       "es": "Y al revés: ¿qué crees que sorprendería a un español en Rusia? ❄️",
       "tr": "И ал рэбэ́с: ¿кэ крэ́эс кэ сорпрэндэри́а а ун эспаньо́л эн Ру́сья?",
       "ru": "А наоборот: как думаешь, что удивило бы испанца в России?"
      }
     ],
     "ideas": [
      {
       "es": "El frío, seguro.",
       "ru": "Холод, конечно."
      },
      {
       "es": "Que la gente no sonría en la calle.",
       "ru": "Что люди не улыбаются на улице."
      },
      {
       "es": "Que nos quitemos los zapatos en casa.",
       "ru": "Что дома мы снимаем обувь."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "frio",
        "sonri",
        "zapatos",
        "invierno",
        "nieve",
        "que",
        "creo"
       ],
       "resp": [
        {
         "es": "¡Ja, ja! ¡Ana me dijo lo mismo! 😄",
         "tr": "¡Ха, ха! ¡А́на мэ ди́хо ло ми́смо!",
         "ru": "Ха-ха! Аня мне то же самое говорила!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Ja, ja! ¡Seguro que sí! 😄",
         "tr": "¡Ха, ха! ¡Сэгу́ро кэ си!",
         "ru": "Ха-ха! Наверняка!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué sorprendería a un español?",
      "tr": "¿Кэ сорпрэндэри́а а ун эспаньо́л?",
      "ru": "Что удивило бы испанца?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Adiós, {nombre}! ¡Hasta mañana! 👋",
       "tr": "¡Адьо́с, {nombre}! ¡А́ста маня́на!",
       "ru": "Пока, {nombre}! До завтра!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
   "id": "u13-balance",
   "desde": 13,
   "titulo": "Balance del curso",
   "tituloRu": "Итоги курса",
   "resumen": "Итоги: he aprendido, me ha costado, si hubiera…, me gustaría seguir",
   "intro": "Последний разговор курса! Лусия хочет знать, как всё прошло и что дальше.",
   "inicio": "aprendido",
   "apertura": true,
   "preguntas": [],
   "nodos": [
    {
     "id": "aprendido",
     "titulo": "Что ты выучил(а)",
     "bot": [
      {
       "es": "¡Es nuestra última charla del curso, {nombre}! 🥹",
       "tr": "¡Эс нуэ́стра у́лтима ча́рла дэл ку́рсо, {nombre}!",
       "ru": "Это наш последний разговор на курсе, {nombre}!"
      },
      {
       "es": "¿Qué es lo más importante que has aprendido?",
       "tr": "¿Кэ эс ло мас импорта́нтэ кэ ас апрэнди́до?",
       "ru": "Что самое важное ты выучил(а)?"
      }
     ],
     "ideas": [
      {
       "es": "He aprendido a hablar sin miedo.",
       "ru": "Я научился(-лась) говорить без страха."
      },
      {
       "es": "He aprendido muchas palabras.",
       "ru": "Я выучил(а) много слов."
      },
      {
       "es": "He aprendido a pedir en un bar. 😄",
       "ru": "Я научился(-лась) заказывать в баре."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Отвечает",
       "claves": [
        "he aprendido",
        "aprendi",
        "hablar",
        "bar",
        "miedo",
        "mucho"
       ],
       "resp": [
        {
         "es": "¡Es mucho! ¡Estoy muy orgullosa de ti! 🥰",
         "tr": "¡Эс му́чо! ¡Эсто́й муй оргуйо́са дэ ти!",
         "ru": "Это очень много! Я тобой горжусь!"
        }
       ],
       "ir": "costo",
       "dato": "Итоги курса"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Estoy muy orgullosa de ti! 🥰",
         "tr": "¡Эсто́й муй оргуйо́са дэ ти!",
         "ru": "Я тобой горжусь!"
        }
       ],
       "ir": "costo",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué has aprendido?",
      "tr": "¿Кэ ас апрэнди́до?",
      "ru": "Что ты выучил(а)?"
     }
    },
    {
     "id": "costo",
     "titulo": "Самое трудное",
     "bot": [
      {
       "es": "¿Y qué te ha costado más? 😅",
       "tr": "¿И кэ тэ а коста́до мас?",
       "ru": "А что далось труднее всего?"
      }
     ],
     "ideas": [
      {
       "es": "El subjuntivo, claro.",
       "ru": "Сослагательное, конечно."
      },
      {
       "es": "Ser y estar.",
       "ru": "Ser и estar."
      },
      {
       "es": "El pasado.",
       "ru": "Прошедшее время."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Subjuntivo",
       "claves": [
        "subjuntivo"
       ],
       "resp": [
        {
         "es": "¡A todo el mundo! Pero ya lo usas muy bien. 😉",
         "tr": "¡А то́до эл му́ндо! Пэ́ро я ло у́сас муй бьен.",
         "ru": "Всем трудно! Но ты уже отлично им пользуешься."
        }
       ],
       "ir": "si"
      },
      {
       "etiqueta": "Ser / estar",
       "claves": [
        "ser",
        "estar"
       ],
       "resp": [
        {
         "es": "¡El clásico! Hasta los españoles a veces dudan. 😄",
         "tr": "¡Эл кла́сико! А́ста лос эспаньо́лэс а бэ́сэс ду́дан.",
         "ru": "Классика! Даже испанцы иногда сомневаются."
        }
       ],
       "ir": "si"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "pasado",
        "preposicion",
        "verbo",
        "pronunciacion",
        "todo",
        "costado",
        "dificil"
       ],
       "resp": [
        {
         "es": "¡Es normal! Poco a poco. 💪",
         "tr": "¡Эс норма́л! По́ко а по́ко.",
         "ru": "Это нормально! Потихоньку."
        }
       ],
       "ir": "si"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Es normal! 💪",
         "tr": "¡Эс норма́л!",
         "ru": "Это нормально!"
        }
       ],
       "ir": "si",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué te ha costado más?",
      "tr": "¿Кэ тэ а коста́до мас?",
      "ru": "Что было труднее всего?"
     }
    },
    {
     "id": "si",
     "titulo": "Если бы…",
     "bot": [
      {
       "es": "Si pudieras empezar otra vez, ¿qué harías diferente? 🤔",
       "tr": "Си пудье́рас эмпэса́р о́тра бэс, ¿кэ ари́ас дифэрэ́нтэ?",
       "ru": "Если бы ты мог (могла) начать заново, что бы ты сделал(а) иначе?"
      }
     ],
     "ideas": [
      {
       "es": "Hablaría más desde el principio.",
       "ru": "Говорил(а) бы больше с самого начала."
      },
      {
       "es": "Estudiaría un poco cada día.",
       "ru": "Занимался(-лась) бы понемногу каждый день."
      },
      {
       "es": "Nada, lo haría igual.",
       "ru": "Ничего, сделал(а) бы так же."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Так же",
       "claves": [
        "nada",
        "igual"
       ],
       "resp": [
        {
         "es": "¡Perfecto! 😊",
         "tr": "¡Пэрфэ́кто!",
         "ru": "Отлично!"
        }
       ],
       "ir": "seguir"
      },
      {
       "etiqueta": "Condicional",
       "claves": [
        "~ria",
        "~riamos"
       ],
       "resp": [
        {
         "es": "¡Buen consejo para los nuevos alumnos! 👍",
         "tr": "¡Буэн консэ́хо па́ра лос нуэ́бос алу́мнос!",
         "ru": "Хороший совет для новых учеников!"
        }
       ],
       "ir": "seguir"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "😉 «Hablaría más…».",
         "tr": "«Аблари́а мас…».",
         "ru": "«Hablaría más…»."
        }
       ],
       "ir": "seguir",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Qué harías diferente?",
      "tr": "¿Кэ ари́ас дифэрэ́нтэ?",
      "ru": "Что бы ты сделал(а) иначе?"
     }
    },
    {
     "id": "seguir",
     "titulo": "Что дальше",
     "bot": [
      {
       "es": "¿Y ahora? ¿Vas a seguir estudiando? 📚",
       "tr": "¿И ао́ра? ¿Бас а сэги́р эстудья́ндо?",
       "ru": "А теперь? Будешь продолжать учиться?"
      }
     ],
     "ideas": [
      {
       "es": "Sí, me gustaría llegar al B2.",
       "ru": "Да, хотел(а) бы дойти до B2."
      },
      {
       "es": "Voy a leer libros en español.",
       "ru": "Буду читать книги по-испански."
      },
      {
       "es": "Voy a seguir hablando contigo. 😄",
       "ru": "Буду и дальше болтать с тобой."
      }
     ],
     "ramas": [
      {
       "etiqueta": "Со мной",
       "claves": [
        "contigo"
       ],
       "resp": [
        {
         "es": "¡Siempre que quieras! Aquí estoy. 🤗",
         "tr": "¡Сье́мпрэ кэ кье́рас! Аки́ эсто́й.",
         "ru": "Когда захочешь! Я здесь."
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Отвечает",
       "claves": [
        "=si",
        "seguir",
        "gustaria",
        "voy a",
        "leer",
        "b2",
        "curso"
       ],
       "resp": [
        {
         "es": "¡Me parece genial! 🎉",
         "tr": "¡Мэ парэ́сэ хэнья́л!",
         "ru": "По-моему, отлично!"
        }
       ],
       "ir": "fin"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "¡Me parece genial! 🎉",
         "tr": "¡Мэ парэ́сэ хэнья́л!",
         "ru": "По-моему, отлично!"
        }
       ],
       "ir": "fin",
       "comodin": true
      }
     ],
     "retomar": {
      "es": "¿Vas a seguir?",
      "tr": "¿Бас а сэги́р?",
      "ru": "Будешь продолжать?"
     }
    },
    {
     "id": "fin",
     "titulo": "Despedida",
     "bot": [
      {
       "es": "¡Enhorabuena por terminar el curso, {nombre}! 🎓🎉 ¡Ha sido un placer!",
       "tr": "¡Энорабуэ́на пор тэрмина́р эл ку́рсо, {nombre}! ¡А си́до ун пласэ́р!",
       "ru": "Поздравляю с окончанием курса, {nombre}! Было очень приятно!"
      }
     ],
     "ideas": [
      {
       "es": "¡Adiós!",
       "ru": "Пока!"
      },
      {
       "es": "¡Hasta mañana!",
       "ru": "До завтра!"
      },
      {
       "es": "¡Hasta luego!",
       "ru": "Пока! До встречи!"
      }
     ],
     "ramas": [
      {
       "etiqueta": "Se despide",
       "claves": [
        "adios",
        "=hasta",
        "=chao",
        "=chau"
       ],
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
        }
       ],
       "ir": "FIN"
      },
      {
       "etiqueta": "Другой ответ",
       "resp": [
        {
         "es": "👋",
         "tr": "",
         "ru": ""
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
function luciaTema(id) { return LUCIA.temas.find(t => t.id === id) || null; }
