/* ============================================================
   DATA-LECTURAS-ES.JS — Abecé · Чтение (20/11/2026)
   ------------------------------------------------------------
   El módulo Lecturas de Azbuka (data-lecturas.js, Contexto §6.23),
   con textos originales en español para rusohablantes (propuesta
   aprobada por Manu: claude/PROPUESTA_LECTURAS_ABECE.md).
   Cada texto:
     id        LEE-…, estable (el progreso depende de él)
     nivel     A1 · A2 · B1
     desde     la unidad desde la que se entiende: todo su vocabulario
               está visto hasta ahí (verificado con el léxico; solo los
               nombres propios no están en el diccionario)
     tema (ruso), titulo (español), tituloRu
     parrafos  [{ es, ru }]
     preguntas ejercicios de unidad.js (elegir, vf, situacion), con id
               LEE-…-N; entran al repaso espaciado.
   Como en Azbuka: 4 textos por unidad de la U2 a la U13, sin palabras
   nuevas en el diccionario, largo creciente (U2 ~45 palabras … U13 ~240).
   Lo propio de Abecé (PROGRAMA_ABECE.md §0): las preguntas, en ruso en
   las U2–U4 y en español desde la U5; las opciones, en español; las
   consignas de respuesta libre, en ruso. Sin dictados (como Azbuka).
   ============================================================ */
const LECTURAS_ES = [
 {
  "id": "LEE-perfil",
  "nivel": "A1",
  "desde": 2,
  "tema": "Знакомство",
  "titulo": "Me llamo Ana",
  "tituloRu": "Меня зовут Аня",
  "parrafos": [
   {
    "es": "¡Hola! Me llamo Ana. Soy rusa, de Moscú. Tengo veintiocho años.",
    "ru": "Привет! Меня зовут Аня. Я русская, из Москвы. Мне двадцать восемь лет."
   },
   {
    "es": "Soy programadora, pero ahora soy estudiante de español. Vivo en Barcelona.",
    "ru": "Я программист, но сейчас я учу испанский. Живу в Барселоне."
   },
   {
    "es": "Mi profesor de español se llama Javier. Mi amiga se llama Lucía: es española y es profesora de inglés.",
    "ru": "Моего преподавателя испанского зовут Хавьер. Мою подругу зовут Лусия: она испанка и преподаёт английский."
   },
   {
    "es": "Hablo ruso, inglés y un poco de español.",
    "ru": "Я говорю по-русски, по-английски и немного по-испански."
   },
   {
    "es": "¿Y tú? ¿Cómo te llamas? ¿De dónde eres? ¿Cuántos años tienes?",
    "ru": "А ты? Как тебя зовут? Откуда ты? Сколько тебе лет?"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-perfil-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Откуда Аня?",
    "opciones": [
     "De Moscú",
     "De Barcelona",
     "De Madrid"
    ],
    "correcta": "De Moscú",
    "explicacion": "«Soy rusa, de Moscú»."
   },
   {
    "id": "LEE-perfil-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Сколько ей лет?",
    "opciones": [
     "Veintiocho",
     "Dieciocho",
     "Treinta y ocho"
    ],
    "correcta": "Veintiocho",
    "explicacion": "«Tengo veintiocho años»."
   },
   {
    "id": "LEE-perfil-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кем она работает?",
    "opciones": [
     "Programadora",
     "Profesora",
     "Camarera"
    ],
    "correcta": "Programadora",
    "explicacion": "«Soy programadora»."
   },
   {
    "id": "LEE-perfil-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Как зовут её подругу?",
    "opciones": [
     "Lucía",
     "Javier",
     "Marta"
    ],
    "correcta": "Lucía",
    "explicacion": "«Mi amiga se llama Lucía»."
   },
   {
    "id": "LEE-perfil-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ana habla muy bien español.",
    "verdadero": false,
    "explicacion": "«Hablo… un poco de español»: только немного."
   },
   {
    "id": "LEE-perfil-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "situacion",
    "pide": "Ответь Ане: как тебя зовут и откуда ты?",
    "sit": {
     "necesita": [
      {
       "es": "как тебя зовут",
       "formas": [
        "me llamo",
        "soy"
       ]
      },
      {
       "es": "откуда ты",
       "formas": [
        "soy de",
        "de"
       ]
      }
     ],
     "modelos": [
      "Me llamo Iván. Soy de Rusia."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-clase",
  "nivel": "A1",
  "desde": 2,
  "tema": "Учёба",
  "titulo": "Una clase nueva",
  "tituloRu": "Новая группа",
  "parrafos": [
   {
    "es": "Es la clase de español. El profesor se llama Javier. Es español, de Madrid.",
    "ru": "Это урок испанского. Преподавателя зовут Хавьер. Он испанец, из Мадрида."
   },
   {
    "es": "Los estudiantes son de cuatro países.",
    "ru": "Студенты из четырёх стран."
   },
   {
    "es": "Ana es rusa y es programadora. Tom es inglés y es ingeniero. Li es china y es médica. Paulo es brasileño y es estudiante.",
    "ru": "Аня — русская, она программист. Том — англичанин, он инженер. Ли — китаянка, она врач. Паулу — бразилец, он студент."
   },
   {
    "es": "Todos tienen un libro nuevo. Javier habla español, inglés y un poco de ruso.",
    "ru": "У всех новый учебник. Хавьер говорит по-испански, по-английски и немного по-русски."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-clase-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Как зовут преподавателя?",
    "opciones": [
     "Javier",
     "Tom",
     "Paulo"
    ],
    "correcta": "Javier",
    "explicacion": "«El profesor se llama Javier»."
   },
   {
    "id": "LEE-clase-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Откуда Хавьер?",
    "opciones": [
     "De Madrid",
     "De Barcelona",
     "De Moscú"
    ],
    "correcta": "De Madrid",
    "explicacion": "«Es español, de Madrid»."
   },
   {
    "id": "LEE-clase-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Откуда Паулу?",
    "opciones": [
     "De Brasil",
     "De China",
     "De Inglaterra"
    ],
    "correcta": "De Brasil",
    "explicacion": "«Paulo es brasileño»."
   },
   {
    "id": "LEE-clase-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Li es médica.",
    "verdadero": true,
    "explicacion": "«Li es china y es médica»."
   },
   {
    "id": "LEE-clase-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "На каких языках говорит Хавьер?",
    "opciones": [
     "Español, inglés y un poco de ruso",
     "Solo español",
     "Español y chino"
    ],
    "correcta": "Español, inglés y un poco de ruso",
    "explicacion": "«Javier habla español, inglés y un poco de ruso»."
   }
  ]
 },
 {
  "id": "LEE-familia",
  "nivel": "A1",
  "desde": 2,
  "tema": "Семья",
  "titulo": "La familia de Lucía",
  "tituloRu": "Семья Лусии",
  "parrafos": [
   {
    "es": "Me llamo Lucía. Soy de un pueblo de Madrid, pero vivo en Barcelona. Tengo treinta y dos años y soy profesora de inglés.",
    "ru": "Меня зовут Лусия. Я из деревни под Мадридом, но живу в Барселоне. Мне тридцать два года, я преподаю английский."
   },
   {
    "es": "Mi padre se llama Jorge y es profesor. Mi madre se llama Carmen y es médica.",
    "ru": "Моего папу зовут Хорхе, он учитель. Мою маму зовут Кармен, она врач."
   },
   {
    "es": "Tengo una hermana, Elena, y un hermano, Pablo. Pablo tiene treinta años, es ingeniero y vive en Madrid.",
    "ru": "У меня есть сестра Элена и брат Пабло. Пабло тридцать лет, он инженер и живёт в Мадриде."
   },
   {
    "es": "¿Y tú? ¿Tienes hermanos?",
    "ru": "А у тебя? Есть братья или сёстры?"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-familia-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кем работает Лусия?",
    "opciones": [
     "Profesora de inglés",
     "Médica",
     "Ingeniera"
    ],
    "correcta": "Profesora de inglés",
    "explicacion": "«…soy profesora de inglés»."
   },
   {
    "id": "LEE-familia-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кем работает отец Лусии?",
    "opciones": [
     "Profesor",
     "Médico",
     "Ingeniero"
    ],
    "correcta": "Profesor",
    "explicacion": "«Mi padre… es profesor»."
   },
   {
    "id": "LEE-familia-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Как зовут сестру Лусии?",
    "opciones": [
     "Elena",
     "Marta",
     "Carmen"
    ],
    "correcta": "Elena",
    "explicacion": "«Tengo una hermana, Elena…»."
   },
   {
    "id": "LEE-familia-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Сколько лет Пабло?",
    "opciones": [
     "Treinta",
     "Veinticinco",
     "Trece"
    ],
    "correcta": "Treinta",
    "explicacion": "«Tiene treinta años»."
   },
   {
    "id": "LEE-familia-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кем работает Пабло?",
    "opciones": [
     "Ingeniero",
     "Profesor",
     "Médico"
    ],
    "correcta": "Ingeniero",
    "explicacion": "«…es ingeniero»."
   },
   {
    "id": "LEE-familia-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Pablo vive en Barcelona.",
    "verdadero": false,
    "explicacion": "«…vive en Madrid»."
   }
  ]
 },
 {
  "id": "LEE-mensaje",
  "nivel": "A1",
  "desde": 2,
  "tema": "Знакомство",
  "titulo": "Un mensaje de Pablo",
  "tituloRu": "Сообщение от Пабло",
  "parrafos": [
   {
    "es": "¡Hola, Ana! Soy Pablo, el hermano de Lucía.",
    "ru": "Привет, Аня! Я Пабло, брат Лусии."
   },
   {
    "es": "Soy ingeniero y vivo en Madrid con mi novia, Marta.",
    "ru": "Я инженер и живу в Мадриде со своей девушкой, Мартой."
   },
   {
    "es": "Mi número de teléfono es el seis, uno, dos, cuarenta y cinco, sesenta, ochenta.",
    "ru": "Мой номер телефона — шесть, один, два, сорок пять, шестьдесят, восемьдесят."
   },
   {
    "es": "Mi correo es pablo arroba correo punto es.",
    "ru": "Моя почта — pablo собака correo точка es."
   },
   {
    "es": "¿Y tu número? ¿Tienes correo? ¡Hasta luego!",
    "ru": "А твой номер? У тебя есть почта? Пока!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-mensaje-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кто пишет Ане?",
    "opciones": [
     "El hermano de Lucía",
     "El profesor",
     "El padre de Lucía"
    ],
    "correcta": "El hermano de Lucía",
    "explicacion": "«Soy Pablo, el hermano de Lucía»."
   },
   {
    "id": "LEE-mensaje-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Кто такая Марта?",
    "opciones": [
     "La novia de Pablo",
     "La hermana de Pablo",
     "La madre de Pablo"
    ],
    "correcta": "La novia de Pablo",
    "explicacion": "«…con mi novia, Marta»."
   },
   {
    "id": "LEE-mensaje-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что Пабло даёт Ане?",
    "opciones": [
     "Su teléfono y su correo",
     "Su libro",
     "Su dirección"
    ],
    "correcta": "Su teléfono y su correo",
    "explicacion": "Номер телефона и почту."
   },
   {
    "id": "LEE-mensaje-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Pablo vive en Barcelona.",
    "verdadero": false,
    "explicacion": "«…vivo en Madrid»."
   },
   {
    "id": "LEE-mensaje-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "situacion",
    "pide": "Напиши Пабло свой номер телефона.",
    "sit": {
     "necesita": [
      {
       "es": "номер",
       "formas": [
        "mi número",
        "es el",
        "número"
       ]
      },
      {
       "es": "число",
       "formas": [
        "uno",
        "dos",
        "tres",
        "cuatro",
        "cinco",
        "seis",
        "siete",
        "ocho",
        "nueve",
        "cero"
       ]
      }
     ],
     "modelos": [
      "Mi número es el seis, cero, cero, uno, dos, tres."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-piso",
  "nivel": "A1",
  "desde": 3,
  "tema": "Дом",
  "titulo": "Mi piso en Barcelona",
  "tituloRu": "Моя квартира в Барселоне",
  "parrafos": [
   {
    "es": "Vivo en un piso pequeño en el barrio de Gràcia, en Barcelona. Está en el tercero y no hay ascensor.",
    "ru": "Я живу в маленькой квартире в районе Грасия, в Барселоне. Она на четвёртом этаже, и лифта нет."
   },
   {
    "es": "El piso tiene dos habitaciones, un salón, una cocina y un baño. El salón es pequeño, pero muy bonito.",
    "ru": "В квартире две комнаты, гостиная, кухня и ванная. Гостиная маленькая, но очень красивая."
   },
   {
    "es": "En mi habitación hay una cama, una mesa, una silla, una estantería y muchos libros.",
    "ru": "В моей комнате кровать, стол, стул, стеллаж и много книг."
   },
   {
    "es": "La cocina es vieja, pero la nevera y la lavadora son nuevas. Vivo sola y estoy muy contenta.",
    "ru": "Кухня старая, но холодильник и стиральная машина новые. Я живу одна и очень довольна."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-piso-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где квартира Ани?",
    "opciones": [
     "En Gràcia",
     "En el centro de Madrid",
     "Cerca de la playa"
    ],
    "correcta": "En Gràcia",
    "explicacion": "«…en el barrio de Gràcia»."
   },
   {
    "id": "LEE-piso-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "El edificio tiene ascensor.",
    "verdadero": false,
    "explicacion": "«…no hay ascensor»."
   },
   {
    "id": "LEE-piso-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какая гостиная?",
    "opciones": [
     "Pequeña y bonita",
     "Grande y bonita",
     "Pequeña y fea"
    ],
    "correcta": "Pequeña y bonita",
    "explicacion": "«El salón es pequeño, pero muy bonito»."
   },
   {
    "id": "LEE-piso-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "La cocina es nueva.",
    "verdadero": false,
    "explicacion": "«La cocina es vieja»."
   },
   {
    "id": "LEE-piso-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что новое на кухне?",
    "opciones": [
     "La nevera y la lavadora",
     "La mesa y la silla",
     "La cama"
    ],
    "correcta": "La nevera y la lavadora",
    "explicacion": "«…la nevera y la lavadora son nuevas»."
   },
   {
    "id": "LEE-piso-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "С кем живёт Аня?",
    "opciones": [
     "Sola",
     "Con Lucía",
     "Con su familia"
    ],
    "correcta": "Sola",
    "explicacion": "«Vivo sola»."
   }
  ]
 },
 {
  "id": "LEE-anuncio",
  "nivel": "A1",
  "desde": 3,
  "tema": "Дом",
  "titulo": "Un piso en Gràcia",
  "tituloRu": "Квартира в Грасии",
  "parrafos": [
   {
    "es": "Piso en alquiler en el barrio de Gràcia, en Barcelona.",
    "ru": "Сдаётся квартира в районе Грасия, в Барселоне."
   },
   {
    "es": "Tiene tres habitaciones, un salón grande, una cocina con lavadora y dos baños.",
    "ru": "В ней три комнаты, большая гостиная, кухня со стиральной машиной и две ванные."
   },
   {
    "es": "Está en el segundo, tiene ascensor y un balcón muy bonito. Es un piso luminoso y tranquilo.",
    "ru": "Она на третьем этаже, есть лифт и очень красивый балкон. Квартира светлая и тихая."
   },
   {
    "es": "Cerca hay una parada de metro, una parada de autobús, un supermercado y un parque.",
    "ru": "Рядом есть станция метро, автобусная остановка, супермаркет и парк."
   },
   {
    "es": "Precio: mil seiscientos euros al mes.",
    "ru": "Цена: тысяча шестьсот евро в месяц."
   },
   {
    "es": "Teléfono: seis, dos, nueve, cuarenta, cincuenta, setenta.",
    "ru": "Телефон: шесть, два, девять, сорок, пятьдесят, семьдесят."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-anuncio-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "El piso tiene un baño.",
    "verdadero": false,
    "explicacion": "«…y dos baños»."
   },
   {
    "id": "LEE-anuncio-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что есть на кухне?",
    "opciones": [
     "Una lavadora",
     "Una cama",
     "Un sofá"
    ],
    "correcta": "Una lavadora",
    "explicacion": "«…una cocina con lavadora»."
   },
   {
    "id": "LEE-anuncio-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какая квартира?",
    "opciones": [
     "Luminosa y tranquila",
     "Oscura y pequeña",
     "Vieja y fea"
    ],
    "correcta": "Luminosa y tranquila",
    "explicacion": "«Es un piso luminoso y tranquilo»."
   },
   {
    "id": "LEE-anuncio-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что рядом с домом?",
    "opciones": [
     "Un parque",
     "Un hospital",
     "Una playa"
    ],
    "correcta": "Un parque",
    "explicacion": "«Cerca hay… un parque»."
   },
   {
    "id": "LEE-anuncio-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "На каком этаже квартира?",
    "opciones": [
     "En el segundo",
     "En el tercero",
     "En el primero"
    ],
    "correcta": "En el segundo",
    "explicacion": "«Está en el segundo»."
   },
   {
    "id": "LEE-anuncio-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Сколько стоит квартира в месяц?",
    "opciones": [
     "Mil seiscientos euros",
     "Seiscientos euros",
     "Mil euros"
    ],
    "correcta": "Mil seiscientos euros",
    "explicacion": "«Precio: mil seiscientos euros al mes»."
   }
  ]
 },
 {
  "id": "LEE-barrio",
  "nivel": "A1",
  "desde": 3,
  "tema": "Город",
  "titulo": "Mi barrio",
  "tituloRu": "Мой район",
  "parrafos": [
   {
    "es": "Mi barrio es Gràcia. Es un barrio tranquilo y muy bonito. Las calles son pequeñas y no hay muchos coches.",
    "ru": "Мой район — Грасия. Это тихий и очень красивый район. Улицы маленькие, и машин немного."
   },
   {
    "es": "Al lado de mi casa hay una tienda y enfrente está la farmacia. El supermercado está a la derecha del banco.",
    "ru": "Рядом с моим домом есть магазин, а напротив — аптека. Супермаркет справа от банка."
   },
   {
    "es": "La plaza está cerca. En la plaza hay un bar, una cafetería y muchos árboles.",
    "ru": "Площадь близко. На площади есть бар, кафе и много деревьев."
   },
   {
    "es": "El parque está un poco lejos, pero la parada de metro está muy cerca, al lado de la plaza.",
    "ru": "Парк далековато, зато станция метро совсем рядом, возле площади."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-barrio-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какой район?",
    "opciones": [
     "Tranquilo",
     "Muy grande",
     "Feo"
    ],
    "correcta": "Tranquilo",
    "explicacion": "«Es un barrio tranquilo»."
   },
   {
    "id": "LEE-barrio-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что напротив дома?",
    "opciones": [
     "La farmacia",
     "El banco",
     "El parque"
    ],
    "correcta": "La farmacia",
    "explicacion": "«…enfrente está la farmacia»."
   },
   {
    "id": "LEE-barrio-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где супермаркет?",
    "opciones": [
     "A la derecha del banco",
     "A la izquierda del banco",
     "En la plaza"
    ],
    "correcta": "A la derecha del banco",
    "explicacion": "«…a la derecha del banco»."
   },
   {
    "id": "LEE-barrio-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что есть на площади?",
    "opciones": [
     "Un bar, una cafetería y árboles",
     "Un banco y una farmacia",
     "Un supermercado"
    ],
    "correcta": "Un bar, una cafetería y árboles",
    "explicacion": "«En la plaza hay un bar, una cafetería y muchos árboles»."
   },
   {
    "id": "LEE-barrio-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "El parque está muy cerca.",
    "verdadero": false,
    "explicacion": "«El parque está un poco lejos»."
   }
  ]
 },
 {
  "id": "LEE-mochila",
  "nivel": "A1",
  "desde": 3,
  "tema": "Вещи",
  "titulo": "¿Qué hay en mi mochila?",
  "tituloRu": "Что у меня в рюкзаке?",
  "parrafos": [
   {
    "es": "Mi mochila es negra y bastante grande. Es vieja, pero es muy buena.",
    "ru": "Мой рюкзак чёрный и довольно большой. Он старый, но очень хороший."
   },
   {
    "es": "¿Qué hay en mi mochila? Hay dos libros de español, un cuaderno, unos papeles y tres fotos de mi familia.",
    "ru": "Что у меня в рюкзаке? Две книги по испанскому, тетрадь, какие-то бумаги и три фотографии моей семьи."
   },
   {
    "es": "También hay unas llaves, un móvil, unas gafas y una botella de agua.",
    "ru": "Ещё там ключи, телефон, очки и бутылка воды."
   },
   {
    "es": "¿Y el ordenador? El ordenador no está en la mochila: está en casa, encima de la mesa.",
    "ru": "А ноутбук? Ноутбука в рюкзаке нет: он дома, на столе."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-mochila-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какого цвета рюкзак?",
    "opciones": [
     "Negra",
     "Azul",
     "Roja"
    ],
    "correcta": "Negra",
    "explicacion": "«Mi mochila es negra»."
   },
   {
    "id": "LEE-mochila-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какие фотографии в рюкзаке?",
    "opciones": [
     "De su familia",
     "De Barcelona",
     "De sus amigos"
    ],
    "correcta": "De su familia",
    "explicacion": "«…tres fotos de mi familia»."
   },
   {
    "id": "LEE-mochila-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Сколько фотографий?",
    "opciones": [
     "Tres",
     "Dos",
     "Una"
    ],
    "correcta": "Tres",
    "explicacion": "«…tres fotos»."
   },
   {
    "id": "LEE-mochila-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "El ordenador está en la mochila.",
    "verdadero": false,
    "explicacion": "«El ordenador no está en la mochila»."
   },
   {
    "id": "LEE-mochila-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где компьютер?",
    "opciones": [
     "Encima de la mesa",
     "Debajo de la cama",
     "En la mochila"
    ],
    "correcta": "Encima de la mesa",
    "explicacion": "«…encima de la mesa»."
   }
  ]
 },
 {
  "id": "LEE-javier",
  "nivel": "A1",
  "desde": 4,
  "tema": "Распорядок дня",
  "titulo": "Un día de Javier",
  "tituloRu": "Один день Хавьера",
  "parrafos": [
   {
    "es": "Javier es profesor de español en una escuela de Barcelona. De lunes a viernes se levanta a las siete.",
    "ru": "Хавьер — преподаватель испанского в школе в Барселоне. С понедельника по пятницу он встаёт в семь."
   },
   {
    "es": "Se ducha, desayuna un café con leche y pan con tomate y sale de casa a las ocho menos cuarto. Va al trabajo en metro: tarda veinte minutos.",
    "ru": "Он принимает душ, завтракает кофе с молоком и хлебом с помидором и выходит из дома без четверти восемь. На работу ездит на метро: дорога занимает двадцать минут."
   },
   {
    "es": "Las clases empiezan a las nueve y terminan a las dos. Después come con sus compañeros en un bar.",
    "ru": "Занятия начинаются в девять и заканчиваются в два. Потом он обедает с коллегами в баре."
   },
   {
    "es": "Por la tarde prepara las clases en casa, lee o juega al fútbol con unos amigos. Cena a las nueve y media y se acuesta a las once y media.",
    "ru": "Во второй половине дня он готовится к урокам дома, читает или играет в футбол с друзьями. Ужинает в половине десятого и ложится спать в половине двенадцатого."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-javier-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Во сколько Хавьер встаёт?",
    "opciones": [
     "A las siete",
     "A las ocho",
     "A las nueve"
    ],
    "correcta": "A las siete",
    "explicacion": "«…se levanta a las siete»."
   },
   {
    "id": "LEE-javier-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Как он ездит на работу?",
    "opciones": [
     "En metro",
     "En coche",
     "En autobús"
    ],
    "correcta": "En metro",
    "explicacion": "«Va al trabajo en metro»."
   },
   {
    "id": "LEE-javier-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Сколько времени у него занимает дорога?",
    "opciones": [
     "Veinte minutos",
     "Una hora",
     "Cinco minutos"
    ],
    "correcta": "Veinte minutos",
    "explicacion": "«…tarda veinte minutos»."
   },
   {
    "id": "LEE-javier-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Las clases terminan a las dos.",
    "verdadero": true,
    "explicacion": "«…y terminan a las dos»."
   },
   {
    "id": "LEE-javier-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "С кем он обедает?",
    "opciones": [
     "Con sus compañeros",
     "Solo",
     "Con su familia"
    ],
    "correcta": "Con sus compañeros",
    "explicacion": "«…come con sus compañeros en un bar»."
   },
   {
    "id": "LEE-javier-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что он иногда делает днём?",
    "opciones": [
     "Juega al fútbol",
     "Ve la televisión",
     "Va al cine"
    ],
    "correcta": "Juega al fútbol",
    "explicacion": "«…o juega al fútbol con unos amigos»."
   }
  ]
 },
 {
  "id": "LEE-finde",
  "nivel": "A1",
  "desde": 4,
  "tema": "Свободное время",
  "titulo": "El fin de semana de Lucía",
  "tituloRu": "Выходные Лусии",
  "parrafos": [
   {
    "es": "Los sábados Lucía no trabaja. Se levanta tarde, a las diez, y desayuna con su amiga Ana en un bar de la plaza.",
    "ru": "По субботам Лусия не работает. Она встаёт поздно, в десять, и завтракает с подругой Аней в баре на площади."
   },
   {
    "es": "Después van de compras o caminan por el centro. A veces van a la playa, porque en Barcelona la playa está muy cerca.",
    "ru": "Потом они ходят по магазинам или гуляют по центру. Иногда они идут на пляж: в Барселоне пляж совсем рядом."
   },
   {
    "es": "Por la noche Lucía cena en casa y a veces sale con sus amigos.",
    "ru": "Вечером Лусия ужинает дома, а иногда встречается с друзьями."
   },
   {
    "es": "Los domingos come con unos amigos y llama por teléfono a sus padres, que viven en un pueblo cerca de Madrid. Por la tarde Lucía descansa, lee un libro o ve una película.",
    "ru": "По воскресеньям она обедает с друзьями и звонит родителям, которые живут в деревне под Мадридом. Во второй половине дня Лусия отдыхает, читает книгу или смотрит фильм."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-finde-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Во сколько Лусия встаёт в субботу?",
    "opciones": [
     "A las diez",
     "A las siete",
     "A las doce"
    ],
    "correcta": "A las diez",
    "explicacion": "«Se levanta tarde, a las diez»."
   },
   {
    "id": "LEE-finde-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "С кем она завтракает?",
    "opciones": [
     "Con Ana",
     "Con su madre",
     "Con Javier"
    ],
    "correcta": "Con Ana",
    "explicacion": "«…desayuna con su amiga Ana»."
   },
   {
    "id": "LEE-finde-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Почему они иногда идут на пляж?",
    "opciones": [
     "Está muy cerca",
     "Hace frío",
     "No hay tiendas"
    ],
    "correcta": "Está muy cerca",
    "explicacion": "«…en Barcelona la playa está muy cerca»."
   },
   {
    "id": "LEE-finde-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где живут её родители?",
    "opciones": [
     "En un pueblo cerca de Madrid",
     "En Barcelona",
     "En Moscú"
    ],
    "correcta": "En un pueblo cerca de Madrid",
    "explicacion": "«…sus padres, que viven en un pueblo cerca de Madrid»."
   },
   {
    "id": "LEE-finde-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что она делает в воскресенье?",
    "opciones": [
     "Come con amigos y llama a sus padres",
     "Trabaja",
     "Va a casa de Ana"
    ],
    "correcta": "Come con amigos y llama a sus padres",
    "explicacion": "«Los domingos come con unos amigos y llama por teléfono a sus padres»."
   },
   {
    "id": "LEE-finde-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Lucía trabaja los sábados.",
    "verdadero": false,
    "explicacion": "«Los sábados Lucía no trabaja»."
   }
  ]
 },
 {
  "id": "LEE-estaciones",
  "nivel": "A1",
  "desde": 4,
  "tema": "Погода",
  "titulo": "Las estaciones en España",
  "tituloRu": "Времена года в Испании",
  "parrafos": [
   {
    "es": "En España hay cuatro estaciones, pero el tiempo no es igual en todo el país.",
    "ru": "В Испании четыре времени года, но погода не везде одинаковая."
   },
   {
    "es": "En primavera hace buen tiempo: no hace frío y no hace mucho calor. En verano hace mucho calor, sobre todo en el sur. En julio y agosto mucha gente va a la playa.",
    "ru": "Весной хорошая погода: не холодно и не очень жарко. Летом очень жарко, особенно на юге. В июле и августе многие едут на пляж."
   },
   {
    "es": "En otoño llueve a veces y hace viento. En el norte, en Galicia o en Asturias, llueve mucho.",
    "ru": "Осенью иногда идёт дождь и дует ветер. На севере, в Галисии или в Астурии, дожди идут часто."
   },
   {
    "es": "En invierno hace frío en Madrid y en las montañas nieva. Pero en Sevilla o en Málaga casi nunca hace mucho frío.",
    "ru": "Зимой в Мадриде холодно, а в горах идёт снег. Но в Севилье или в Малаге почти никогда не бывает очень холодно."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-estaciones-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Какая погода весной?",
    "opciones": [
     "Hace buen tiempo",
     "Hace mucho calor",
     "Nieva"
    ],
    "correcta": "Hace buen tiempo",
    "explicacion": "«En primavera hace buen tiempo»."
   },
   {
    "id": "LEE-estaciones-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где летом особенно жарко?",
    "opciones": [
     "En el sur",
     "En el norte",
     "En las montañas"
    ],
    "correcta": "En el sur",
    "explicacion": "«…sobre todo en el sur»."
   },
   {
    "id": "LEE-estaciones-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Когда многие едут на пляж?",
    "opciones": [
     "En julio y agosto",
     "En enero",
     "En otoño"
    ],
    "correcta": "En julio y agosto",
    "explicacion": "«En julio y agosto mucha gente va a la playa»."
   },
   {
    "id": "LEE-estaciones-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где часто идут дожди?",
    "opciones": [
     "En el norte",
     "En Sevilla",
     "En Málaga"
    ],
    "correcta": "En el norte",
    "explicacion": "«En el norte, en Galicia o en Asturias, llueve mucho»."
   },
   {
    "id": "LEE-estaciones-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где идёт снег?",
    "opciones": [
     "En las montañas",
     "En Sevilla",
     "En la playa"
    ],
    "correcta": "En las montañas",
    "explicacion": "«…en las montañas nieva»."
   },
   {
    "id": "LEE-estaciones-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "En Sevilla hace mucho frío en invierno.",
    "verdadero": false,
    "explicacion": "«…en Sevilla o en Málaga casi nunca hace mucho frío»."
   }
  ]
 },
 {
  "id": "LEE-gustos",
  "nivel": "A1",
  "desde": 4,
  "tema": "Вкусы",
  "titulo": "Lo que me gusta",
  "tituloRu": "Что мне нравится",
  "parrafos": [
   {
    "es": "Me llamo Pablo y vivo en Madrid. Me gusta mucho el deporte: juego al fútbol los martes y los jueves con mis amigos del trabajo.",
    "ru": "Меня зовут Пабло, я живу в Мадриде. Я очень люблю спорт: играю в футбол по вторникам и четвергам с друзьями с работы."
   },
   {
    "es": "También me encanta la música. Por las noches escucho música y a veces voy a un concierto.",
    "ru": "Ещё я обожаю музыку. По вечерам слушаю музыку, а иногда хожу на концерт."
   },
   {
    "es": "No me gusta ver la televisión, pero me gustan mucho las películas. Los domingos voy al cine.",
    "ru": "Я не люблю смотреть телевизор, но очень люблю фильмы. По воскресеньям хожу в кино."
   },
   {
    "es": "¿Y Marta, mi novia? A ella no le gusta el fútbol. Le encanta leer, cocinar y viajar, y tiene dos gatos.",
    "ru": "А Марта, моя девушка? Она не любит футбол. Она обожает читать, готовить и путешествовать, и у неё две кошки."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-gustos-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Когда Пабло играет в футбол?",
    "opciones": [
     "Los martes y los jueves",
     "Los sábados",
     "Todos los días"
    ],
    "correcta": "Los martes y los jueves",
    "explicacion": "«…los martes y los jueves»."
   },
   {
    "id": "LEE-gustos-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "С кем он играет?",
    "opciones": [
     "Con sus amigos del trabajo",
     "Con Marta",
     "Con su padre"
    ],
    "correcta": "Con sus amigos del trabajo",
    "explicacion": "«…con mis amigos del trabajo»."
   },
   {
    "id": "LEE-gustos-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Pablo ve mucho la televisión.",
    "verdadero": false,
    "explicacion": "«No me gusta ver la televisión»."
   },
   {
    "id": "LEE-gustos-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Куда он ходит по воскресеньям?",
    "opciones": [
     "Al cine",
     "Al fútbol",
     "A un concierto"
    ],
    "correcta": "Al cine",
    "explicacion": "«Los domingos voy al cine»."
   },
   {
    "id": "LEE-gustos-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что не нравится Марте?",
    "opciones": [
     "El fútbol",
     "Leer",
     "Viajar"
    ],
    "correcta": "El fútbol",
    "explicacion": "«A ella no le gusta el fútbol»."
   },
   {
    "id": "LEE-gustos-6",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "situacion",
    "pide": "А тебе что нравится? Ответь одной-двумя фразами.",
    "sit": {
     "necesita": [
      {
       "es": "нравится",
       "formas": [
        "me gusta",
        "me gustan",
        "me encanta",
        "me encantan"
       ]
      }
     ],
     "modelos": [
      "Me gusta leer y me encanta la música."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-mercado",
  "nivel": "A2",
  "desde": 5,
  "tema": "Покупки",
  "titulo": "En el mercado",
  "tituloRu": "На рынке",
  "parrafos": [
   {
    "es": "Los sábados por la mañana Ana va al mercado de su barrio. Prefiere el mercado al supermercado: la fruta y la verdura son muy frescas y la gente es muy simpática.",
    "ru": "По субботам утром Аня ходит на рынок в своём районе. Рынок ей нравится больше супермаркета: фрукты и овощи очень свежие, а люди очень приятные."
   },
   {
    "es": "Primero va a la frutería. Compra un kilo de naranjas, medio kilo de fresas y unos plátanos.",
    "ru": "Сначала она идёт во фруктовую лавку. Покупает килограмм апельсинов, полкило клубники и несколько бананов."
   },
   {
    "es": "Después va a la pescadería. Hoy el pescado está muy bien de precio: un kilo cuesta doce euros.",
    "ru": "Потом она идёт в рыбную лавку. Сегодня рыба по хорошей цене: килограмм стоит двенадцать евро."
   },
   {
    "es": "En la carnicería compra pollo y un poco de jamón para la semana. En total paga treinta euros. Paga con tarjeta, porque hoy no tiene efectivo.",
    "ru": "В мясной лавке она покупает курицу и немного хамона на неделю. Всего она платит тридцать евро. Платит картой, потому что сегодня у неё нет наличных."
   },
   {
    "es": "Ana vuelve a casa muy contenta. Ahora tiene que cocinar: ¡quiere comer bien toda la semana!",
    "ru": "Аня возвращается домой очень довольная. Теперь ей нужно готовить: она хочет хорошо питаться всю неделю!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-mercado-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué prefiere Ana el mercado?",
    "opciones": [
     "La fruta es muy fresca",
     "Es más barato",
     "Está más cerca"
    ],
    "correcta": "La fruta es muy fresca",
    "explicacion": "«…la fruta y la verdura son muy frescas»."
   },
   {
    "id": "LEE-mercado-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué compra en la frutería?",
    "opciones": [
     "Naranjas, fresas y plátanos",
     "Pollo y jamón",
     "Pan y queso"
    ],
    "correcta": "Naranjas, fresas y plátanos",
    "explicacion": "«Compra un kilo de naranjas, medio kilo de fresas y unos plátanos»."
   },
   {
    "id": "LEE-mercado-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto cuesta un kilo de pescado hoy?",
    "opciones": [
     "Doce euros",
     "Dos euros",
     "Veinte euros"
    ],
    "correcta": "Doce euros",
    "explicacion": "«…un kilo cuesta doce euros»."
   },
   {
    "id": "LEE-mercado-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto paga en total?",
    "opciones": [
     "Treinta euros",
     "Doce euros",
     "Trece euros"
    ],
    "correcta": "Treinta euros",
    "explicacion": "«En total paga treinta euros»."
   },
   {
    "id": "LEE-mercado-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana paga en efectivo.",
    "verdadero": false,
    "explicacion": "«Paga con tarjeta, porque hoy no tiene efectivo»."
   },
   {
    "id": "LEE-mercado-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Ты в овощной лавке. Попроси нужный продукт, назвав его количество.",
    "sit": {
     "necesita": [
      {
       "es": "количество",
       "formas": [
        "un kilo",
        "medio kilo",
        "dos kilos",
        "cien gramos",
        "unos",
        "unas",
        "un",
        "una"
       ]
      },
      {
       "es": "просьба",
       "formas": [
        "quería",
        "quiero",
        "me pones",
        "póngame",
        "necesito"
       ]
      }
     ],
     "modelos": [
      "Hola, quería un kilo de naranjas, por favor."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-menu",
  "nivel": "A2",
  "desde": 5,
  "tema": "В ресторане",
  "titulo": "El menú del día",
  "tituloRu": "Комплексный обед",
  "parrafos": [
   {
    "es": "En España muchos restaurantes tienen menú del día de lunes a viernes a la hora de comer. Normalmente cuesta entre doce y quince euros.",
    "ru": "В Испании во многих ресторанах с понедельника по пятницу в обеденное время подают комплексный обед. Обычно он стоит от двенадцати до пятнадцати евро."
   },
   {
    "es": "El menú tiene un primer plato, un segundo plato y un postre o un café. El pan y la bebida están en el precio: agua, vino o un refresco.",
    "ru": "В меню есть первое, второе и десерт или кофе. Хлеб и напиток входят в цену: вода, вино или газировка."
   },
   {
    "es": "De primero hay ensalada, sopa, verdura o arroz. De segundo, carne o pescado con patatas. De postre, fruta o helado.",
    "ru": "На первое — салат, суп, овощи или рис. На второе — мясо или рыба с картошкой. На десерт — фрукты или мороженое."
   },
   {
    "es": "Muchos trabajadores comen el menú del día, porque es rápido y barato. Javier lo come casi todos los días con sus compañeros. «Es bueno, hay mucha comida y no es caro», dice.",
    "ru": "Многие работающие люди обедают комплексным обедом, потому что это быстро и дёшево. Хавьер ест его почти каждый день с коллегами. «Вкусно, еды много, и недорого», — говорит он."
   },
   {
    "es": "Pero cuidado: los fines de semana muchos restaurantes no tienen menú del día.",
    "ru": "Но учти: по выходным во многих ресторанах комплексного обеда нет."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-menu-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo hay menú del día?",
    "opciones": [
     "De lunes a viernes",
     "Solo los domingos",
     "Por la noche"
    ],
    "correcta": "De lunes a viernes",
    "explicacion": "«…de lunes a viernes, a la hora de comer»."
   },
   {
    "id": "LEE-menu-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto cuesta normalmente?",
    "opciones": [
     "Entre doce y quince euros",
     "Cinco euros",
     "Más de treinta euros"
    ],
    "correcta": "Entre doce y quince euros",
    "explicacion": "«Normalmente cuesta entre doce y quince euros»."
   },
   {
    "id": "LEE-menu-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El pan y la bebida cuestan más.",
    "verdadero": false,
    "explicacion": "«El pan y la bebida están en el precio»."
   },
   {
    "id": "LEE-menu-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay de postre?",
    "opciones": [
     "Fruta o helado",
     "Sopa",
     "Pescado"
    ],
    "correcta": "Fruta o helado",
    "explicacion": "«De postre, fruta o helado»."
   },
   {
    "id": "LEE-menu-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué come Javier el menú del día?",
    "opciones": [
     "Es bueno y no es caro",
     "No sabe cocinar",
     "Le gusta comer solo"
    ],
    "correcta": "Es bueno y no es caro",
    "explicacion": "«Es bueno, hay mucha comida y no es caro»."
   },
   {
    "id": "LEE-menu-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Los sábados todos los restaurantes tienen menú del día.",
    "verdadero": false,
    "explicacion": "«…los fines de semana muchos restaurantes no tienen menú del día»."
   }
  ]
 },
 {
  "id": "LEE-tapas",
  "nivel": "A2",
  "desde": 5,
  "tema": "Испанская кухня",
  "titulo": "Las tapas",
  "tituloRu": "Тапас",
  "parrafos": [
   {
    "es": "En España, por la tarde, mucha gente sale a tomar algo con los amigos. Van a un bar, piden una caña o un vino y comen tapas.",
    "ru": "В Испании вечером многие идут куда-нибудь выпить с друзьями. Они идут в бар, заказывают маленькое пиво или вино и едят тапас."
   },
   {
    "es": "Una tapa es un plato pequeño: un poco de tortilla, jamón, queso o patatas.",
    "ru": "Тапа — это небольшая порция: немного тортильи, хамона, сыра или картошки."
   },
   {
    "es": "En muchos bares de Granada, de León o de Jaén, pides una bebida y la tapa no cuesta nada: es gratis.",
    "ru": "Во многих барах Гранады, Леона или Хаэна заказываешь напиток — и тапа ничего не стоит: она бесплатная."
   },
   {
    "es": "En otras ciudades una tapa cuesta entre dos y cinco euros. ¿Tienes mucha hambre? Puedes pedir una ración: es un plato grande, para dos o tres personas.",
    "ru": "В других городах тапа стоит от двух до пяти евро. Очень голоден? Можно заказать порцию (ración): это большое блюдо на двух-трёх человек."
   },
   {
    "es": "Ir de tapas es una costumbre muy española: la gente come de pie, habla mucho y va de bar en bar.",
    "ru": "Ходить по тапас — очень испанская традиция: люди едят стоя, много разговаривают и переходят из бара в бар."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-tapas-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué es una tapa?",
    "opciones": [
     "Un plato pequeño",
     "Una bebida",
     "Un postre grande"
    ],
    "correcta": "Un plato pequeño",
    "explicacion": "«Una tapa es un plato pequeño»."
   },
   {
    "id": "LEE-tapas-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piden para beber?",
    "opciones": [
     "Una caña o un vino",
     "Un café",
     "Un zumo"
    ],
    "correcta": "Una caña o un vino",
    "explicacion": "«…piden una caña o un vino»."
   },
   {
    "id": "LEE-tapas-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde la tapa es gratis en muchos bares?",
    "opciones": [
     "En Granada",
     "En Barcelona",
     "En Madrid"
    ],
    "correcta": "En Granada",
    "explicacion": "«En muchos bares de Granada, de León o de Jaén… es gratis»."
   },
   {
    "id": "LEE-tapas-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Para cuántas personas es una ración?",
    "opciones": [
     "Para dos o tres",
     "Para una",
     "Para diez"
    ],
    "correcta": "Para dos o tres",
    "explicacion": "«…para dos o tres personas»."
   },
   {
    "id": "LEE-tapas-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Para ir de tapas, la gente se queda en un solo bar.",
    "verdadero": false,
    "explicacion": "«…va de bar en bar»."
   }
  ]
 },
 {
  "id": "LEE-chat",
  "nivel": "A2",
  "desde": 5,
  "tema": "Планы",
  "titulo": "La cena del sábado",
  "tituloRu": "Ужин в субботу",
  "parrafos": [
   {
    "es": "Lucía: Ana, el sábado es la cena en mi casa. ¿Qué compramos?",
    "ru": "Лусия: Аня, в субботу ужин у меня дома. Что купим?"
   },
   {
    "es": "Ana: Somos seis, ¿no? Podemos hacer una tortilla de patatas y una ensalada.",
    "ru": "Аня: Нас шестеро, да? Можем сделать картофельную тортилью и салат."
   },
   {
    "es": "Lucía: Vale. Para la tortilla necesitamos patatas, huevos y cebolla. Tengo aceite en casa.",
    "ru": "Лусия: Хорошо. Для тортильи нужны картошка, яйца и лук. Масло у меня есть."
   },
   {
    "es": "Ana: ¿Y para la ensalada? Lucía: Lechuga, tomates y un poco de queso. Hay que comprar casi todo: mi nevera está vacía.",
    "ru": "Аня: А для салата? Лусия: Салат-латук, помидоры и немного сыра. Купить нужно почти всё: холодильник у меня пустой."
   },
   {
    "es": "Ana: Yo compro el pan, el queso y la verdura. ¿Y la bebida?",
    "ru": "Аня: Я куплю хлеб, сыр и овощи. А напитки?"
   },
   {
    "es": "Lucía: Pablo y Marta vienen de Madrid y traen el vino. Tú, ¿puedes comprar agua y zumo?",
    "ru": "Лусия: Пабло и Марта приедут из Мадрида и привезут вино. А ты можешь купить воду и сок?"
   },
   {
    "es": "Ana: Sí, claro. ¿Y el postre? Lucía: ¡Yo hago una tarta de chocolate!",
    "ru": "Аня: Да, конечно. А десерт? Лусия: Я испеку шоколадный торт!"
   },
   {
    "es": "Ana: ¡Qué rica! ¿A qué hora voy? Lucía: A las nueve. ¡Hasta el sábado!",
    "ru": "Аня: Как вкусно! Во сколько мне прийти? Лусия: В девять. До субботы!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-chat-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántas personas van a la cena?",
    "opciones": [
     "Seis",
     "Tres",
     "Diez"
    ],
    "correcta": "Seis",
    "explicacion": "«Somos seis, ¿no?»."
   },
   {
    "id": "LEE-chat-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué necesitan para la tortilla?",
    "opciones": [
     "Patatas, huevos y cebolla",
     "Lechuga y tomates",
     "Pan y queso"
    ],
    "correcta": "Patatas, huevos y cebolla",
    "explicacion": "«Para la tortilla necesitamos patatas, huevos y cebolla»."
   },
   {
    "id": "LEE-chat-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "La nevera de Lucía está llena.",
    "verdadero": false,
    "explicacion": "«…mi nevera está vacía»."
   },
   {
    "id": "LEE-chat-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Quién trae el vino?",
    "opciones": [
     "Pablo y Marta",
     "Ana",
     "Lucía"
    ],
    "correcta": "Pablo y Marta",
    "explicacion": "«Pablo y Marta vienen de Madrid y traen el vino»."
   },
   {
    "id": "LEE-chat-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué postre hace Lucía?",
    "opciones": [
     "Una tarta de chocolate",
     "Un helado",
     "Fruta"
    ],
    "correcta": "Una tarta de chocolate",
    "explicacion": "«¡Yo hago una tarta de chocolate!»."
   },
   {
    "id": "LEE-chat-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Ты тоже идёшь на ужин. Напиши, что ты купишь или приготовишь.",
    "sit": {
     "necesita": [
      {
       "es": "что",
       "formas": [
        "compro",
        "traigo",
        "hago",
        "puedo",
        "llevo",
        "preparo"
       ]
      }
     ],
     "modelos": [
      "Yo compro el pan y hago una ensalada."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-madrid",
  "nivel": "A2",
  "desde": 6,
  "tema": "Города",
  "titulo": "Madrid",
  "tituloRu": "Мадрид",
  "parrafos": [
   {
    "es": "Madrid es la capital de España y está en el centro del país. Es una ciudad muy grande: allí viven más de tres millones de personas.",
    "ru": "Мадрид — столица Испании, он находится в центре страны. Это очень большой город: там живут больше трёх миллионов человек."
   },
   {
    "es": "En el centro está la Puerta del Sol. Desde allí puedes ir a pie a la Plaza Mayor y al Palacio Real. Muy cerca está también la Gran Vía, con muchas tiendas, cines y teatros.",
    "ru": "В центре находится площадь Пуэрта-дель-Соль. Оттуда можно дойти пешком до Пласа-Майор и до Королевского дворца. Совсем рядом и Гран-Виа, где много магазинов, кинотеатров и театров."
   },
   {
    "es": "¿Te gusta el arte? Madrid tiene museos muy importantes: el Prado, el Reina Sofía y el Thyssen.",
    "ru": "Любишь искусство? В Мадриде есть несколько очень известных музеев: Прадо, Музей королевы Софии и Тиссен."
   },
   {
    "es": "¿Quieres descansar? Ve al parque del Retiro: es muy grande y muy bonito, y tiene un lago pequeño. Los domingos hay muchas familias allí.",
    "ru": "Хочешь отдохнуть? Иди в парк Ретиро: он очень большой и красивый, и в нём есть небольшое озеро. По воскресеньям там много семей."
   },
   {
    "es": "Para ir por la ciudad, coge el metro: tiene doce líneas y llega a casi todos los barrios.",
    "ru": "Чтобы передвигаться по городу, садись на метро: в нём двенадцать линий, и оно доходит почти до всех районов."
   },
   {
    "es": "La gente de Madrid dice: «De Madrid al cielo».",
    "ru": "Мадридцы говорят: «Из Мадрида — прямо на небо»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-madrid-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántas personas viven en Madrid?",
    "opciones": [
     "Más de tres millones",
     "Trescientas mil",
     "Más de treinta millones"
    ],
    "correcta": "Más de tres millones",
    "explicacion": "«…allí viven más de tres millones de personas»."
   },
   {
    "id": "LEE-madrid-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Adónde puedes ir a pie desde la Puerta del Sol?",
    "opciones": [
     "A la Plaza Mayor",
     "Al aeropuerto",
     "A la playa"
    ],
    "correcta": "A la Plaza Mayor",
    "explicacion": "«Desde allí puedes ir a pie a la Plaza Mayor…»."
   },
   {
    "id": "LEE-madrid-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay en la Gran Vía?",
    "opciones": [
     "Tiendas, cines y teatros",
     "Un lago",
     "Un museo"
    ],
    "correcta": "Tiendas, cines y teatros",
    "explicacion": "«…la Gran Vía, con muchas tiendas, cines y teatros»."
   },
   {
    "id": "LEE-madrid-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde puedes descansar?",
    "opciones": [
     "En el parque del Retiro",
     "En el Palacio Real",
     "En el metro"
    ],
    "correcta": "En el parque del Retiro",
    "explicacion": "«¿Quieres descansar? Ve al parque del Retiro»."
   },
   {
    "id": "LEE-madrid-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El metro de Madrid tiene tres líneas.",
    "verdadero": false,
    "explicacion": "«…tiene doce líneas»."
   }
  ]
 },
 {
  "id": "LEE-metro",
  "nivel": "A2",
  "desde": 6,
  "tema": "Транспорт",
  "titulo": "El metro de Barcelona",
  "tituloRu": "Барселонское метро",
  "parrafos": [
   {
    "es": "Ana va todos los días a clase en metro. Vive en Gràcia, cerca de la estación de Fontana, y la escuela de español está en el centro, al lado de la plaza de Catalunya.",
    "ru": "Аня каждый день ездит на занятия на метро. Она живёт в Грасии, рядом со станцией Фонтана, а школа испанского — в центре, рядом с площадью Каталонии."
   },
   {
    "es": "Coge la línea tres, la verde. Son solo tres paradas y tarda unos diez minutos.",
    "ru": "Она садится на третью, зелёную линию. Всего три остановки, дорога занимает минут десять."
   },
   {
    "es": "Ana no compra un billete cada día: tiene una tarjeta para todo el mes. Con esta tarjeta puede coger el metro, el autobús y el tren en la ciudad. Es mucho más barato.",
    "ru": "Аня не покупает билет каждый день: у неё проездной на весь месяц. С ним можно ездить на метро, автобусе и поезде по городу. Так гораздо дешевле."
   },
   {
    "es": "Por la mañana el metro va muy lleno. Cuando hace buen tiempo, Ana sale de casa más temprano y va a pie: baja por el paseo de Gràcia y tarda media hora.",
    "ru": "Утром в метро очень много людей. Когда хорошая погода, Аня выходит из дома пораньше и идёт пешком: спускается по проспекту Пасео-де-Грасия — дорога занимает полчаса."
   },
   {
    "es": "¿Un consejo? En el metro de Barcelona, ten cuidado con el bolso y con el móvil.",
    "ru": "Совет? В барселонском метро следи за сумкой и телефоном."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-metro-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde vive Ana?",
    "opciones": [
     "En Gràcia",
     "En el centro",
     "Cerca de la playa"
    ],
    "correcta": "En Gràcia",
    "explicacion": "«Vive en Gràcia, cerca de la estación de Fontana»."
   },
   {
    "id": "LEE-metro-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué línea coge?",
    "opciones": [
     "La tres, la verde",
     "La uno, la roja",
     "La cinco, la azul"
    ],
    "correcta": "La tres, la verde",
    "explicacion": "«Coge la línea tres, la verde»."
   },
   {
    "id": "LEE-metro-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántas paradas son?",
    "opciones": [
     "Tres",
     "Siete",
     "Diez"
    ],
    "correcta": "Tres",
    "explicacion": "«Son solo tres paradas»."
   },
   {
    "id": "LEE-metro-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana compra un billete cada día.",
    "verdadero": false,
    "explicacion": "«Ana no compra un billete cada día: tiene una tarjeta para todo el mes»."
   },
   {
    "id": "LEE-metro-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tarda a pie?",
    "opciones": [
     "Media hora",
     "Diez minutos",
     "Dos horas"
    ],
    "correcta": "Media hora",
    "explicacion": "«…y tarda media hora»."
   },
   {
    "id": "LEE-metro-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué consejo da el texto?",
    "opciones": [
     "Tener cuidado con el bolso",
     "Ir siempre a pie",
     "Comprar un billete cada día"
    ],
    "correcta": "Tener cuidado con el bolso",
    "explicacion": "«…ten cuidado con el bolso y con el móvil»."
   }
  ]
 },
 {
  "id": "LEE-prado",
  "nivel": "A2",
  "desde": 6,
  "tema": "Культура",
  "titulo": "El Museo del Prado",
  "tituloRu": "Музей Прадо",
  "parrafos": [
   {
    "es": "El Museo del Prado está en Madrid, en el paseo del Prado. Es un museo muy importante y muy antiguo: tiene más de doscientos años.",
    "ru": "Музей Прадо находится в Мадриде, на бульваре Прадо. Это очень важный и очень старый музей: ему больше двухсот лет."
   },
   {
    "es": "Tiene cuadros de pintores españoles muy famosos, como Velázquez, Goya y El Greco. Allí está «Las meninas», el famoso cuadro de Velázquez.",
    "ru": "В музее представлены картины очень известных испанских художников: Веласкеса, Гойи и Эль Греко. Там можно увидеть знаменитую картину Веласкеса «Менины»."
   },
   {
    "es": "También tiene cuadros de pintores de otros países, como Rubens, Tiziano o el Bosco.",
    "ru": "Есть и картины художников из других стран: Рубенса, Тициана или Босха."
   },
   {
    "es": "El museo abre todos los días. De lunes a sábado, de seis a ocho de la tarde, y los domingos, de cinco a siete, no pagas.",
    "ru": "Музей открыт каждый день. С понедельника по субботу с шести до восьми вечера, а по воскресеньям с пяти до семи вход бесплатный."
   },
   {
    "es": "Para llegar, coge la línea uno del metro hasta Estación del Arte. Desde allí, camina cinco minutos.",
    "ru": "Чтобы добраться, поезжай по первой линии метро до станции Эстасьон-дель-Арте. Оттуда — пять минут пешком."
   },
   {
    "es": "El museo es muy grande: no tienes que verlo todo en un día. Elige unas salas, mira bien los cuadros y vuelve otro día.",
    "ru": "Музей очень большой: не нужно смотреть всё за один день. Выбери несколько залов, внимательно посмотри картины и приходи в другой раз."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-prado-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años tiene el museo?",
    "opciones": [
     "Más de doscientos",
     "Veinte",
     "Cincuenta"
    ],
    "correcta": "Más de doscientos",
    "explicacion": "«…tiene más de doscientos años»."
   },
   {
    "id": "LEE-prado-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿De quién es «Las meninas»?",
    "opciones": [
     "De Velázquez",
     "De Goya",
     "De Picasso"
    ],
    "correcta": "De Velázquez",
    "explicacion": "«…«Las meninas», el famoso cuadro de Velázquez»."
   },
   {
    "id": "LEE-prado-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En el Prado solo hay pintores españoles.",
    "verdadero": false,
    "explicacion": "«También tiene cuadros de pintores de otros países»."
   },
   {
    "id": "LEE-prado-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo no pagas los domingos?",
    "opciones": [
     "De cinco a siete",
     "De seis a ocho",
     "Por la mañana"
    ],
    "correcta": "De cinco a siete",
    "explicacion": "«…y los domingos, de cinco a siete, no pagas»."
   },
   {
    "id": "LEE-prado-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿En qué estación bajas?",
    "opciones": [
     "Estación del Arte",
     "Puerta del Sol",
     "Gran Vía"
    ],
    "correcta": "Estación del Arte",
    "explicacion": "«…coge la línea uno del metro hasta Estación del Arte»."
   },
   {
    "id": "LEE-prado-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué consejo da el texto?",
    "opciones": [
     "No verlo todo en un día",
     "Ir solo por la mañana",
     "Ir siempre en coche"
    ],
    "correcta": "No verlo todo en un día",
    "explicacion": "«…no tienes que verlo todo en un día»."
   }
  ]
 },
 {
  "id": "LEE-salud",
  "nivel": "A2",
  "desde": 6,
  "tema": "Здоровье",
  "titulo": "En el centro de salud",
  "tituloRu": "В поликлинике",
  "parrafos": [
   {
    "es": "Hoy Marta está enferma: tiene tos, le duele la garganta y está muy cansada.",
    "ru": "Сегодня Марта заболела: у неё кашель, болит горло, и она очень устала."
   },
   {
    "es": "Por la mañana llama al centro de salud y pide cita. Tiene que dar su nombre y su número de teléfono. La médica la puede ver a las once.",
    "ru": "Утром она звонит в поликлинику и записывается на приём. Нужно назвать имя и номер телефона. Врач может принять её в одиннадцать."
   },
   {
    "es": "En la consulta, la médica pregunta: «¿Qué te pasa?». «Tengo tos y me duele mucho la cabeza», dice Marta. La médica la mira y dice: «No es nada grave. Tienes que descansar y beber mucha agua».",
    "ru": "В кабинете врач спрашивает: «Что с тобой?». «У меня кашель и сильно болит голова», — говорит Марта. Врач её осматривает и говорит: «Ничего серьёзного. Тебе нужно отдыхать и пить много воды»."
   },
   {
    "es": "Después Marta va a la farmacia y compra unas pastillas para la tos y otras para la cabeza.",
    "ru": "Потом Марта идёт в аптеку и покупает таблетки от кашля и от головной боли."
   },
   {
    "es": "Tiene que tomar una pastilla cada ocho horas. Hoy no va a trabajar: va a estar en la cama todo el día. Con fiebre, tiene que volver al médico.",
    "ru": "Ей нужно принимать по таблетке каждые восемь часов. Сегодня она не идёт на работу: весь день будет в постели. Если поднимется температура, нужно снова идти к врачу."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-salud-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le pasa a Marta?",
    "opciones": [
     "Tiene tos y le duele la garganta",
     "Le duele la pierna",
     "Tiene hambre"
    ],
    "correcta": "Tiene tos y le duele la garganta",
    "explicacion": "«…tiene tos, le duele la garganta…»."
   },
   {
    "id": "LEE-salud-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿A qué hora la ve la médica?",
    "opciones": [
     "A las once",
     "A las ocho",
     "A las cinco"
    ],
    "correcta": "A las once",
    "explicacion": "«La médica la puede ver a las once»."
   },
   {
    "id": "LEE-salud-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "La médica dice que es algo grave.",
    "verdadero": false,
    "explicacion": "«No es nada grave»."
   },
   {
    "id": "LEE-salud-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tiene que hacer Marta?",
    "opciones": [
     "Descansar y beber agua",
     "Ir a trabajar",
     "Hacer deporte"
    ],
    "correcta": "Descansar y beber agua",
    "explicacion": "«Tienes que descansar y beber mucha agua»."
   },
   {
    "id": "LEE-salud-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cada cuánto tiene que tomar una pastilla?",
    "opciones": [
     "Cada ocho horas",
     "Cada hora",
     "Una vez a la semana"
    ],
    "correcta": "Cada ocho horas",
    "explicacion": "«…una pastilla cada ocho horas»."
   },
   {
    "id": "LEE-salud-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Ты у врача. Скажи, что с тобой (что болит).",
    "sit": {
     "necesita": [
      {
       "es": "симптом",
       "formas": [
        "me duele",
        "me duelen",
        "tengo tos",
        "tengo fiebre",
        "estoy enfermo",
        "estoy enferma",
        "estoy cansado",
        "estoy cansada"
       ]
      }
     ],
     "modelos": [
      "Me duele la cabeza y tengo tos."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-quedamos",
  "nivel": "A2",
  "desde": 7,
  "tema": "Планы",
  "titulo": "¿Quedamos el sábado?",
  "tituloRu": "Встретимся в субботу?",
  "parrafos": [
   {
    "es": "Lucía: ¡Hola, Ana! ¿Qué haces el sábado? ¿Te apetece ir al cine?",
    "ru": "Лусия: Привет, Аня! Что делаешь в субботу? Хочешь пойти в кино?"
   },
   {
    "es": "Ana: ¡Hola! El sábado por la tarde no puedo: tengo clase de baile. ¿Y por la noche?",
    "ru": "Аня: Привет! В субботу днём не могу: у меня танцы. А вечером?"
   },
   {
    "es": "Lucía: Vale. Hay una película española nueva a las nueve y media. Dicen que es muy buena.",
    "ru": "Лусия: Хорошо. В половине десятого идёт новый испанский фильм. Говорят, очень хороший."
   },
   {
    "es": "Ana: ¿Es una comedia? Me gustan más que las películas de miedo. Lucía: Sí, es una comedia. A mí tampoco me gustan las de miedo.",
    "ru": "Аня: Это комедия? Они мне нравятся больше, чем фильмы ужасов. Лусия: Да, комедия. Мне фильмы ужасов тоже не нравятся."
   },
   {
    "es": "Ana: ¡Perfecto! ¿Quedamos a las nueve en la puerta del cine?",
    "ru": "Аня: Отлично! Встретимся в девять у входа в кинотеатр?"
   },
   {
    "es": "Lucía: Mejor a las nueve menos cuarto: los sábados hay mucha gente. ¿Compro yo las entradas por internet?",
    "ru": "Лусия: Лучше без четверти девять: по субботам много людей. Купить мне билеты через интернет?"
   },
   {
    "es": "Ana: Sí, gracias. Te pago el sábado. ¿Y después cenamos algo? ¿Llamamos también a Javier? Le encanta el cine.",
    "ru": "Аня: Да, спасибо. Я тебе отдам в субботу. А потом поужинаем где-нибудь? Позовём и Хавьера? Он обожает кино."
   },
   {
    "es": "Lucía: ¡Buena idea! Conozco un bar muy bueno al lado del cine, con tapas muy ricas. ¡Hasta el sábado!",
    "ru": "Лусия: Отличная идея! Я знаю очень хороший бар рядом с кинотеатром, там очень вкусные тапас. До субботы!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-quedamos-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué Ana no puede por la tarde?",
    "opciones": [
     "Tiene clase de baile",
     "Trabaja",
     "Está enferma"
    ],
    "correcta": "Tiene clase de baile",
    "explicacion": "«…tengo clase de baile»."
   },
   {
    "id": "LEE-quedamos-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿A qué hora empieza la película?",
    "opciones": [
     "A las nueve y media",
     "A las nueve",
     "A las ocho"
    ],
    "correcta": "A las nueve y media",
    "explicacion": "«…a las nueve y media»."
   },
   {
    "id": "LEE-quedamos-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué películas le gustan más a Ana?",
    "opciones": [
     "Las comedias",
     "Las de miedo",
     "Las antiguas"
    ],
    "correcta": "Las comedias",
    "explicacion": "«Me gustan más que las películas de miedo»."
   },
   {
    "id": "LEE-quedamos-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿A qué hora quedan al final?",
    "opciones": [
     "A las nueve menos cuarto",
     "A las nueve y media",
     "A las diez"
    ],
    "correcta": "A las nueve menos cuarto",
    "explicacion": "«Mejor a las nueve menos cuarto»."
   },
   {
    "id": "LEE-quedamos-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana compra las entradas.",
    "verdadero": false,
    "explicacion": "Las compra Lucía: «¿Compro yo las entradas por internet?»."
   },
   {
    "id": "LEE-quedamos-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Друг зовёт тебя в кино в субботу. Ответь: согласись или откажись и предложи другое.",
    "sit": {
     "necesita": [
      {
       "es": "ответ",
       "formas": [
        "vale",
        "sí",
        "claro",
        "no puedo",
        "lo siento",
        "perfecto",
        "genial",
        "me apetece"
       ]
      }
     ],
     "modelos": [
      "Lo siento, el sábado no puedo. ¿Quedamos el domingo?"
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-vecinos",
  "nivel": "A2",
  "desde": 7,
  "tema": "Люди",
  "titulo": "Los vecinos de Ana",
  "tituloRu": "Соседи Ани",
  "parrafos": [
   {
    "es": "Ana vive en un edificio antiguo en el barrio de Gràcia, en el tercero. Se lleva muy bien con casi todos sus vecinos.",
    "ru": "Аня живёт в старом доме в районе Грасия, на четвёртом этаже. Она прекрасно ладит почти со всеми соседями."
   },
   {
    "es": "En el primero vive la señora Rosa. Tiene ochenta años y es muy simpática. Vive sola, y a veces Ana le compra el pan o le sube la compra, porque el edificio no tiene ascensor.",
    "ru": "На втором этаже живёт сеньора Роса. Ей восемьдесят лет, и она очень милая. Она живёт одна, и Аня иногда покупает ей хлеб или помогает донести покупки до квартиры, потому что в доме нет лифта."
   },
   {
    "es": "En el segundo viven Jordi y Laura con sus dos hijos. Los niños son muy simpáticos, pero no son nada tranquilos: por las tardes juegan al fútbol en el pasillo.",
    "ru": "На третьем живут Жорди и Лаура с двумя детьми. Дети очень милые, но совсем не спокойные: по вечерам они играют в футбол в коридоре."
   },
   {
    "es": "El vecino del cuarto es un chico joven. Pone la música muy alta por la noche, y a Ana no le gusta nada.",
    "ru": "Сосед с пятого этажа — молодой парень. По ночам он очень громко включает музыку, и Ане это совсем не нравится."
   },
   {
    "es": "Un día Ana sube y habla con él. Él dice: «¡Lo siento! Ahora la bajo». Ahora la música está más baja y los dos se saludan en la escalera.",
    "ru": "Однажды Аня поднимается к нему и разговаривает с ним. Он отвечает: «Извини! Сейчас убавлю музыку». Теперь музыка играет тише, и они здороваются на лестнице."
   },
   {
    "es": "Para Ana, tener buenos vecinos es tan importante como tener un buen piso.",
    "ru": "Для Ани хорошие соседи так же важны, как хорошая квартира."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-vecinos-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años tiene la señora Rosa?",
    "opciones": [
     "Ochenta",
     "Dieciocho",
     "Cincuenta"
    ],
    "correcta": "Ochenta",
    "explicacion": "«Tiene ochenta años»."
   },
   {
    "id": "LEE-vecinos-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué Ana le sube la compra?",
    "opciones": [
     "No hay ascensor",
     "La señora Rosa está enferma",
     "Es su abuela"
    ],
    "correcta": "No hay ascensor",
    "explicacion": "«…porque el edificio no tiene ascensor»."
   },
   {
    "id": "LEE-vecinos-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde juegan los niños al fútbol?",
    "opciones": [
     "En el pasillo",
     "En el parque",
     "En la calle"
    ],
    "correcta": "En el pasillo",
    "explicacion": "«…juegan al fútbol en el pasillo»."
   },
   {
    "id": "LEE-vecinos-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema hay con el vecino del cuarto?",
    "opciones": [
     "Pone la música muy alta",
     "No saluda",
     "Tiene un perro"
    ],
    "correcta": "Pone la música muy alta",
    "explicacion": "«Pone la música muy alta por la noche»."
   },
   {
    "id": "LEE-vecinos-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ahora Ana y el chico no se hablan.",
    "verdadero": false,
    "explicacion": "«…los dos se saludan en la escalera»."
   }
  ]
 },
 {
  "id": "LEE-sobremesa",
  "nivel": "A2",
  "desde": 7,
  "tema": "Испанская культура",
  "titulo": "La sobremesa",
  "tituloRu": "Собремеса",
  "parrafos": [
   {
    "es": "En España, la comida es mucho más que comer. Después de comer, la gente no se levanta de la mesa: se queda allí, toma un café y habla. Esto se llama la sobremesa.",
    "ru": "В Испании обед — это гораздо больше, чем просто еда. После обеда люди не встают из-за стола: они остаются, пьют кофе и разговаривают. Это называется «собремеса»."
   },
   {
    "es": "En la sobremesa la gente habla de todo: de la familia, del trabajo, de fútbol, de política… A veces hay discusiones, pero normalmente terminan bien.",
    "ru": "Во время собремесы люди говорят обо всём: о семье, о работе, о футболе, о политике… Иногда бывают споры, но обычно они хорошо заканчиваются."
   },
   {
    "es": "Los domingos, en las comidas de familia, la sobremesa a veces es de una hora o más. En Navidad, ¡puede ser de toda la tarde!",
    "ru": "По воскресеньям, на семейных обедах, собремеса иногда длится час и больше. А на Рождество — хоть весь вечер!"
   },
   {
    "es": "En Rusia la gente también habla mucho en la mesa, sobre todo en casa, con un té y algo dulce. Pero en un restaurante, después de comer, normalmente se levanta y se va.",
    "ru": "В России за столом тоже много разговаривают, особенно дома, за чаем со сладким. Но в ресторане после еды люди обычно встают и уходят."
   },
   {
    "es": "Ana cree que la sobremesa es muy bonita. Para ella, es la mejor hora del día para hablar con sus amigos españoles y practicar español.",
    "ru": "Аня считает, что собремеса — это очень хорошо. Для неё это лучшее время дня, чтобы поговорить с испанскими друзьями и попрактиковаться в испанском."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-sobremesa-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué es la sobremesa?",
    "opciones": [
     "Hablar en la mesa después de comer",
     "Un postre",
     "Una mesa grande"
    ],
    "correcta": "Hablar en la mesa después de comer",
    "explicacion": "«…se queda allí, toma un café y habla. Esto se llama la sobremesa»."
   },
   {
    "id": "LEE-sobremesa-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿De qué habla la gente en la sobremesa?",
    "opciones": [
     "De todo",
     "Solo de fútbol",
     "Solo de comida"
    ],
    "correcta": "De todo",
    "explicacion": "«…la gente habla de todo»."
   },
   {
    "id": "LEE-sobremesa-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo puede durar toda la tarde?",
    "opciones": [
     "En Navidad",
     "Los lunes",
     "En el trabajo"
    ],
    "correcta": "En Navidad",
    "explicacion": "«En Navidad, ¡puede ser de toda la tarde!»."
   },
   {
    "id": "LEE-sobremesa-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En la sobremesa nunca hay discusiones.",
    "verdadero": false,
    "explicacion": "«A veces hay discusiones, pero normalmente terminan bien»."
   },
   {
    "id": "LEE-sobremesa-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué le gusta la sobremesa a Ana?",
    "opciones": [
     "Puede hablar y practicar español",
     "Le gusta el café",
     "No le gusta cocinar"
    ],
    "correcta": "Puede hablar y practicar español",
    "explicacion": "«…para hablar con sus amigos españoles y practicar español»."
   },
   {
    "id": "LEE-sobremesa-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Как у тебя дома после обеда: вы сразу встаёте или остаётесь за столом? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "что делаете",
       "formas": [
        "nos quedamos",
        "nos levantamos",
        "hablamos",
        "tomamos",
        "me levanto",
        "me quedo"
       ]
      }
     ],
     "modelos": [
      "En mi casa nos quedamos en la mesa y tomamos un té."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-madridbcn",
  "nivel": "A2",
  "desde": 7,
  "tema": "Города",
  "titulo": "¿Madrid o Barcelona?",
  "tituloRu": "Мадрид или Барселона?",
  "parrafos": [
   {
    "es": "Pablo vive en Madrid y su hermana Lucía, en Barcelona. Cuando hablan por teléfono, siempre discuten: ¿qué ciudad es mejor?",
    "ru": "Пабло живёт в Мадриде, а его сестра Лусия — в Барселоне. Когда они говорят по телефону, всегда спорят: какой город лучше?"
   },
   {
    "es": "Para Pablo, Madrid es mejor. Es más grande que Barcelona y tiene más museos. Además, la gente sale mucho por la noche y los bares están siempre llenos.",
    "ru": "Для Пабло лучше Мадрид. Он больше Барселоны, и в нём больше музеев. Кроме того, люди там много гуляют по вечерам, и в барах всегда полно народу."
   },
   {
    "es": "Lucía no está de acuerdo. Barcelona tiene mar y playa, y en invierno no hace tanto frío como en Madrid. Además, tiene montañas muy cerca y los edificios de Gaudí, como la Sagrada Familia.",
    "ru": "Лусия не согласна. В Барселоне есть море и пляж, и зимой не так холодно, как в Мадриде. К тому же рядом горы, а ещё здания Гауди, например Саграда Фамилия."
   },
   {
    "es": "«En Madrid, en verano, hace demasiado calor», dice Lucía. «Y en Barcelona hay demasiados turistas», contesta Pablo.",
    "ru": "«В Мадриде летом слишком жарко», — говорит Лусия. «А в Барселоне слишком много туристов», — отвечает Пабло."
   },
   {
    "es": "Pero los dos están de acuerdo en una cosa: los pisos son muy caros en las dos ciudades.",
    "ru": "Но в одном они согласны: квартиры очень дорогие в обоих городах."
   },
   {
    "es": "¿Y Ana? A ella le gustan las dos, pero prefiere Barcelona, porque es menos grande y más tranquila. Y porque allí viven sus amigos.",
    "ru": "А Аня? Ей нравятся оба города, но она предпочитает Барселону, потому что она меньше и спокойнее. И потому что там живут её друзья."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-madridbcn-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué discuten Pablo y Lucía?",
    "opciones": [
     "Por qué ciudad es mejor",
     "Por dinero",
     "Por el fútbol"
    ],
    "correcta": "Por qué ciudad es mejor",
    "explicacion": "«…siempre discuten: ¿qué ciudad es mejor?»."
   },
   {
    "id": "LEE-madridbcn-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tiene Madrid, según Pablo?",
    "opciones": [
     "Más museos",
     "Mar y playa",
     "Menos turistas"
    ],
    "correcta": "Más museos",
    "explicacion": "«…tiene más museos»."
   },
   {
    "id": "LEE-madridbcn-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Según Lucía, en Barcelona hace más frío en invierno.",
    "verdadero": false,
    "explicacion": "«…en invierno no hace tanto frío como en Madrid»."
   },
   {
    "id": "LEE-madridbcn-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tiene Barcelona, según Pablo?",
    "opciones": [
     "Hay demasiados turistas",
     "Hace demasiado frío",
     "No hay playa"
    ],
    "correcta": "Hay demasiados turistas",
    "explicacion": "«Y en Barcelona hay demasiados turistas»."
   },
   {
    "id": "LEE-madridbcn-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿En qué están de acuerdo los dos?",
    "opciones": [
     "Los pisos son muy caros",
     "Madrid es mejor",
     "Barcelona es fea"
    ],
    "correcta": "Los pisos son muy caros",
    "explicacion": "«…los pisos son muy caros en las dos ciudades»."
   },
   {
    "id": "LEE-madridbcn-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Какой город тебе нравится больше и почему? Сравни два города по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "сравнение",
       "formas": [
        "más",
        "menos",
        "mejor",
        "peor",
        "tan",
        "como",
        "que"
       ]
      },
      {
       "es": "почему",
       "formas": [
        "porque",
        "además"
       ]
      }
     ],
     "modelos": [
      "Prefiero Barcelona, porque es más tranquila que Madrid."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-cervantes",
  "nivel": "A2",
  "desde": 8,
  "tema": "Известные люди",
  "titulo": "Miguel de Cervantes",
  "tituloRu": "Мигель де Сервантес",
  "parrafos": [
   {
    "es": "Miguel de Cervantes es el escritor más famoso de España. Nació en 1547 en Alcalá de Henares, una ciudad cerca de Madrid.",
    "ru": "Мигель де Сервантес — самый известный писатель Испании. Он родился в 1547 году в Алькала-де-Энарес, городе недалеко от Мадрида."
   },
   {
    "es": "De joven se fue a Italia y fue soldado. En 1571 luchó en la batalla de Lepanto, en el mar. Allí perdió el uso de la mano izquierda.",
    "ru": "В молодости он уехал в Италию и был солдатом. В 1571 году он сражался в морской битве при Лепанто. Там у него перестала действовать левая рука."
   },
   {
    "es": "En 1575, en el viaje de vuelta a España, unos piratas lo cogieron y lo llevaron a Argel. Pasó cinco años allí, lejos de su familia, y volvió a España en 1580.",
    "ru": "В 1575 году, на обратном пути в Испанию, его захватили пираты и увезли в Алжир. Он провёл там пять лет, вдали от семьи, и вернулся в Испанию в 1580 году."
   },
   {
    "es": "En 1605 salió la primera parte de su libro más famoso: «Don Quijote de la Mancha». Es la historia de un hombre que lee demasiados libros de caballeros y sale de casa a vivir aventuras con su amigo Sancho Panza. La segunda parte salió en 1615.",
    "ru": "В 1605 году вышла первая часть его самой известной книги — «Дон Кихот Ламанчский». Это история человека, который читает слишком много рыцарских романов и уходит из дома искать приключений со своим другом Санчо Пансой. Вторая часть вышла в 1615 году."
   },
   {
    "es": "Cervantes murió en Madrid en 1616. Hoy el español también se llama «la lengua de Cervantes», y el premio más importante de la literatura en español es el Premio Cervantes.",
    "ru": "Сервантес умер в Мадриде в 1616 году. Сегодня испанский язык также называют «языком Сервантеса», а самая престижная литературная премия испаноязычного мира — премия Сервантеса."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-cervantes-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde nació Cervantes?",
    "opciones": [
     "En Alcalá de Henares",
     "En Madrid",
     "En Argel"
    ],
    "correcta": "En Alcalá de Henares",
    "explicacion": "«Nació en 1547 en Alcalá de Henares»."
   },
   {
    "id": "LEE-cervantes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le pasó en la batalla de Lepanto?",
    "opciones": [
     "Perdió el uso de una mano",
     "Murió",
     "Conoció a su mujer"
    ],
    "correcta": "Perdió el uso de una mano",
    "explicacion": "«Allí perdió el uso de la mano izquierda»."
   },
   {
    "id": "LEE-cervantes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años pasó en Argel?",
    "opciones": [
     "Cinco",
     "Uno",
     "Diez"
    ],
    "correcta": "Cinco",
    "explicacion": "«Pasó cinco años allí»."
   },
   {
    "id": "LEE-cervantes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hace don Quijote?",
    "opciones": [
     "Lee muchos libros y sale a vivir aventuras",
     "Viaja a Italia",
     "Cobra impuestos"
    ],
    "correcta": "Lee muchos libros y sale a vivir aventuras",
    "explicacion": "«…lee demasiados libros de caballeros y sale de casa a vivir aventuras»."
   },
   {
    "id": "LEE-cervantes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo salió la segunda parte del Quijote?",
    "opciones": [
     "En 1615",
     "En 1605",
     "En 1547"
    ],
    "correcta": "En 1615",
    "explicacion": "«La segunda parte salió en 1615»."
   },
   {
    "id": "LEE-cervantes-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El Premio Cervantes es un premio de literatura.",
    "verdadero": true,
    "explicacion": "«…el premio más importante de la literatura en español es el Premio Cervantes»."
   }
  ]
 },
 {
  "id": "LEE-picasso",
  "nivel": "A2",
  "desde": 8,
  "tema": "Известные люди",
  "titulo": "Pablo Picasso",
  "tituloRu": "Пабло Пикассо",
  "parrafos": [
   {
    "es": "Pablo Picasso nació en Málaga en 1881. Su padre fue profesor de dibujo, y Pablo empezó a pintar de muy pequeño.",
    "ru": "Пабло Пикассо родился в Малаге в 1881 году. Его отец был учителем рисования, и Пабло начал рисовать совсем маленьким."
   },
   {
    "es": "En 1895, con trece años, se fue con su familia a Barcelona. Allí estudió en una escuela de arte, donde su padre trabajó como profesor, y conoció a otros pintores jóvenes.",
    "ru": "В 1895 году, в тринадцать лет, он переехал с семьёй в Барселону. Там он учился в художественной школе, где преподавал его отец, и познакомился с другими молодыми художниками."
   },
   {
    "es": "En 1904 se fue a vivir a París. Allí pintó cuadros muy diferentes de los de antes y, con el pintor Georges Braque, creó un estilo de pintura completamente nuevo.",
    "ru": "В 1904 году он переехал жить в Париж. Там он писал картины, совсем не похожие на прежние, и вместе с художником Жоржем Браком создал совершенно новый стиль живописи — кубизм."
   },
   {
    "es": "Su cuadro más famoso es el «Guernica». Lo pintó en 1937, durante la guerra civil española, después del bombardeo de Guernica, una pequeña ciudad del País Vasco. Es un cuadro enorme, en blanco y negro, y muy triste.",
    "ru": "Его самая известная картина — «Герника». Он написал её в 1937 году, во время гражданской войны в Испании, после бомбардировки Герники, небольшого города в Стране Басков. Это огромная картина, чёрно-белая и очень печальная."
   },
   {
    "es": "Picasso vivió casi toda su vida en Francia y murió allí en 1973, a los noventa y un años. Pintó miles de cuadros y también hizo muchos dibujos.",
    "ru": "Пикассо прожил почти всю жизнь во Франции и умер там в 1973 году в возрасте девяноста одного года. Он написал тысячи картин и создал множество рисунков."
   },
   {
    "es": "Hoy el «Guernica» está en el Museo Reina Sofía de Madrid. Y en Barcelona y en Málaga hay un Museo Picasso.",
    "ru": "Сегодня «Герника» находится в Музее королевы Софии в Мадриде. А в Барселоне и Малаге есть музеи Пикассо."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-picasso-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde nació Picasso?",
    "opciones": [
     "En Málaga",
     "En Barcelona",
     "En París"
    ],
    "correcta": "En Málaga",
    "explicacion": "«Pablo Picasso nació en Málaga»."
   },
   {
    "id": "LEE-picasso-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué trabajo tuvo su padre?",
    "opciones": [
     "Profesor de dibujo",
     "Médico",
     "Escritor"
    ],
    "correcta": "Profesor de dibujo",
    "explicacion": "«Su padre fue profesor de dibujo»."
   },
   {
    "id": "LEE-picasso-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años tenía cuando se fue a Barcelona?",
    "opciones": [
     "Trece",
     "Veinte",
     "Cinco"
    ],
    "correcta": "Trece",
    "explicacion": "«En 1895, con trece años, se fue con su familia a Barcelona»."
   },
   {
    "id": "LEE-picasso-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué creó en París con Georges Braque?",
    "opciones": [
     "Un estilo de pintura nuevo",
     "Un museo",
     "Una escuela"
    ],
    "correcta": "Un estilo de pintura nuevo",
    "explicacion": "«…creó un estilo de pintura completamente nuevo»."
   },
   {
    "id": "LEE-picasso-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El «Guernica» es un cuadro pequeño y alegre.",
    "verdadero": false,
    "explicacion": "«Es un cuadro enorme… y muy triste»."
   },
   {
    "id": "LEE-picasso-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde está hoy el «Guernica»?",
    "opciones": [
     "En el Museo Reina Sofía",
     "En el Museo del Prado",
     "En Málaga"
    ],
    "correcta": "En el Museo Reina Sofía",
    "explicacion": "«Hoy el «Guernica» está en el Museo Reina Sofía de Madrid»."
   }
  ]
 },
 {
  "id": "LEE-primerdia",
  "nivel": "A2",
  "desde": 8,
  "tema": "Жизнь в Испании",
  "titulo": "Mi primer día en Barcelona",
  "tituloRu": "Мой первый день в Барселоне",
  "parrafos": [
   {
    "es": "Llegué a Barcelona un día de septiembre. No hay vuelo directo de Moscú a Barcelona: hice escala en Estambul. El viaje fue muy largo: salí de casa a las cinco de la mañana y llegué por la noche.",
    "ru": "Я прилетела в Барселону в один из сентябрьских дней. Прямого рейса из Москвы в Барселону нет: я летела с пересадкой в Стамбуле. Дорога была очень долгой: я вышла из дома в пять утра и прилетела вечером."
   },
   {
    "es": "En el aeropuerto cogí un taxi. El taxista me habló mucho, pero no entendí casi nada. Solo entendí «¿De dónde eres?» y «¡Bienvenida!».",
    "ru": "В аэропорту я взяла такси. Таксист много со мной разговаривал, но я почти ничего не поняла. Поняла только «Откуда ты?» и «Добро пожаловать!»."
   },
   {
    "es": "Llegué a mi piso nuevo a las diez de la noche. Allí me esperó Lucía, una amiga del casero, con las llaves. ¡Fue muy simpática! Me enseñó el piso y me explicó cómo funciona todo.",
    "ru": "В новую квартиру я приехала в десять вечера. Там меня ждала Лусия, подруга хозяина квартиры, с ключами. Она была очень милой! Она показала мне квартиру и объяснила, как всё работает."
   },
   {
    "es": "Después salimos a cenar a un bar del barrio. Cenamos a las once de la noche: ¡para mí fue muy tarde! Probé el jamón y la tortilla por primera vez y me encantaron.",
    "ru": "Потом мы пошли ужинать в один из баров нашего района. Мы ужинали в одиннадцать вечера — для меня это было очень поздно! Я впервые попробовала хамон и тортилью, и они мне очень понравились."
   },
   {
    "es": "Ese día estuve muy cansada, pero también muy contenta. Desde entonces he aprendido mucho español, y Lucía es mi mejor amiga en Barcelona.",
    "ru": "В тот день я очень устала, но и была очень довольна. С тех пор я многому научилась и стала лучше говорить по-испански, а Лусия — моя лучшая подруга в Барселоне."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-primerdia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo llegó Ana a Barcelona?",
    "opciones": [
     "En septiembre",
     "En enero",
     "En agosto"
    ],
    "correcta": "En septiembre",
    "explicacion": "«Llegué a Barcelona un día de septiembre»."
   },
   {
    "id": "LEE-primerdia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde hizo escala?",
    "opciones": [
     "En Estambul",
     "En Madrid",
     "En París"
    ],
    "correcta": "En Estambul",
    "explicacion": "«…hice escala en Estambul»."
   },
   {
    "id": "LEE-primerdia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué entendió del taxista?",
    "opciones": [
     "Casi nada",
     "Todo",
     "La dirección"
    ],
    "correcta": "Casi nada",
    "explicacion": "«…no entendí casi nada»."
   },
   {
    "id": "LEE-primerdia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Quién la esperó en el piso?",
    "opciones": [
     "Lucía",
     "El casero",
     "Javier"
    ],
    "correcta": "Lucía",
    "explicacion": "«Allí me esperó Lucía, una amiga del casero»."
   },
   {
    "id": "LEE-primerdia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué probó por primera vez?",
    "opciones": [
     "El jamón y la tortilla",
     "La sopa",
     "El vino"
    ],
    "correcta": "El jamón y la tortilla",
    "explicacion": "«Probé el jamón y la tortilla por primera vez»."
   },
   {
    "id": "LEE-primerdia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana llegó al piso por la mañana.",
    "verdadero": false,
    "explicacion": "«Llegué a mi piso nuevo a las diez de la noche»."
   }
  ]
 },
 {
  "id": "LEE-maldia",
  "nivel": "A2",
  "desde": 8,
  "tema": "Повседневная жизнь",
  "titulo": "Un mal día",
  "tituloRu": "Плохой день",
  "parrafos": [
   {
    "es": "Hoy he tenido un día horrible. Esta mañana no he oído el despertador y me he levantado a las nueve. ¡Tarde!",
    "ru": "Сегодня у меня был ужасный день. Утром я не услышал будильник и встал в девять. Поздно!"
   },
   {
    "es": "No he desayunado y he salido de casa corriendo. En la calle ha empezado a llover y, claro, no he cogido el paraguas.",
    "ru": "Я не позавтракал и выбежал из дома. На улице начался дождь, и, конечно, я не взял зонт."
   },
   {
    "es": "He llegado a la oficina a las diez menos cuarto, mojado de la cabeza a los pies. Mi jefe no me ha dicho nada, pero ha mirado el reloj.",
    "ru": "Я пришёл в офис без четверти десять, мокрый с головы до ног. Начальник ничего мне не сказал, но посмотрел на часы."
   },
   {
    "es": "A la hora de comer he ido a un bar, pero no he encontrado sitio. Al final he comido un bocadillo en la oficina, delante del ordenador.",
    "ru": "В обед я пошёл в бар, но не нашёл свободного места. В итоге я съел бутерброд в офисе, перед компьютером."
   },
   {
    "es": "Por la tarde he perdido el móvil en el metro. Por suerte, una chica lo ha encontrado y lo ha dejado en la oficina de la estación. Allí lo he recogido a las ocho.",
    "ru": "Вечером я потерял телефон в метро. К счастью, девушка его нашла и отнесла в бюро находок на станции. Там я забрал его в восемь."
   },
   {
    "es": "Ahora estoy en casa, en el sofá, con Marta y una pizza. ¡Mañana va a ser un día mejor!",
    "ru": "Сейчас я дома, на диване, с Мартой и пиццей. Завтра будет день получше!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-maldia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿A qué hora se ha levantado?",
    "opciones": [
     "A las nueve",
     "A las siete",
     "A las diez"
    ],
    "correcta": "A las nueve",
    "explicacion": "«…me he levantado a las nueve»."
   },
   {
    "id": "LEE-maldia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué ha llegado mojado?",
    "opciones": [
     "Ha llovido y no tenía paraguas",
     "Se ha duchado",
     "Ha ido a la playa"
    ],
    "correcta": "Ha llovido y no tenía paraguas",
    "explicacion": "«…ha empezado a llover y… no he cogido el paraguas»."
   },
   {
    "id": "LEE-maldia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ha hecho su jefe?",
    "opciones": [
     "Ha mirado el reloj",
     "Le ha gritado",
     "Le ha dado un café"
    ],
    "correcta": "Ha mirado el reloj",
    "explicacion": "«Mi jefe no me ha dicho nada, pero ha mirado el reloj»."
   },
   {
    "id": "LEE-maldia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde ha comido?",
    "opciones": [
     "En la oficina",
     "En un bar",
     "En casa"
    ],
    "correcta": "En la oficina",
    "explicacion": "«…he comido un bocadillo en la oficina»."
   },
   {
    "id": "LEE-maldia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ha perdido el móvil para siempre.",
    "verdadero": false,
    "explicacion": "«…una chica lo ha encontrado… Allí lo he recogido»."
   },
   {
    "id": "LEE-maldia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А какой у тебя был день сегодня? Расскажи 2–3 фразами в pretérito perfecto.",
    "sit": {
     "necesita": [
      {
       "es": "pretérito perfecto",
       "formas": [
        "he ",
        "has ",
        "ha ",
        "hemos "
       ]
      }
     ],
     "modelos": [
      "Hoy he trabajado mucho y por la tarde he ido al cine."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-pequena",
  "nivel": "A2",
  "desde": 9,
  "tema": "Детство",
  "titulo": "Cuando era pequeña",
  "tituloRu": "Когда я была маленькой",
  "parrafos": [
   {
    "es": "Cuando era pequeña, vivía con mis padres en un piso pequeño de Moscú, cerca del centro, en un edificio alto de nueve plantas.",
    "ru": "Когда я была маленькой, я жила с родителями в небольшой квартире в Москве, недалеко от центра, в высоком девятиэтажном доме."
   },
   {
    "es": "Mi madre, Olga, era médica y trabajaba en un hospital. Mi padre era ingeniero.",
    "ru": "Моя мама, Ольга, была врачом и работала в больнице. Папа был инженером."
   },
   {
    "es": "Todos los días iba al colegio a pie con mis amigas. Las clases empezaban a las ocho y media y terminaban a la una o a las dos. Cuando yo tenía ocho años, nació mi hermano Iván. Yo lo cuidaba mucho y jugaba con él, pero a veces también discutíamos, como todos los hermanos.",
    "ru": "Каждый день я ходила в школу пешком с подругами. Уроки начинались в половине девятого и заканчивались в час или в два. Когда мне было восемь лет, родился мой брат Иван. Я много с ним возилась и играла, но иногда мы и ссорились, как все братья и сёстры."
   },
   {
    "es": "Por la tarde hacía los deberes y después jugaba en el patio con mis amigas. En invierno siempre hacía mucho frío y había mucha nieve: patinábamos y hacíamos muñecos de nieve.",
    "ru": "После обеда я делала уроки, а потом играла во дворе с подругами. Зимой всегда было очень холодно и много снега: мы катались на коньках и лепили снеговиков."
   },
   {
    "es": "En verano solíamos ir a la dacha de mis abuelos, cerca de Moscú. Mi abuela cocinaba muy bien y siempre nos contaba historias.",
    "ru": "Летом мы обычно ездили на дачу к бабушке с дедушкой, недалеко от Москвы. Бабушка очень хорошо готовила и всегда рассказывала нам истории."
   },
   {
    "es": "Era una niña muy tranquila, pero un poco tímida. Me encantaba leer y quería ser médica, como mi madre. Pero al final me gustaron más los ordenadores, ¡y ahora soy programadora!",
    "ru": "Я была очень спокойной девочкой, но немного застенчивой. Я обожала читать и хотела стать врачом, как мама. Но в итоге компьютеры понравились мне больше, и теперь я программист!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-pequena-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde vivía Ana?",
    "opciones": [
     "En un piso de Moscú",
     "En una casa en el campo",
     "En Barcelona"
    ],
    "correcta": "En un piso de Moscú",
    "explicacion": "«…vivía… en un piso de Moscú»."
   },
   {
    "id": "LEE-pequena-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿En qué trabajaba su madre?",
    "opciones": [
     "Era médica",
     "Era profesora",
     "Era ingeniera"
    ],
    "correcta": "Era médica",
    "explicacion": "«Mi madre, Olga, era médica»."
   },
   {
    "id": "LEE-pequena-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años tenía Ana cuando nació su hermano?",
    "opciones": [
     "Ocho",
     "Tres",
     "Quince"
    ],
    "correcta": "Ocho",
    "explicacion": "«Cuando yo tenía ocho años, nació mi hermano Iván»."
   },
   {
    "id": "LEE-pequena-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hacían en invierno?",
    "opciones": [
     "Patinaban y hacían muñecos de nieve",
     "Iban a la playa",
     "Jugaban al fútbol en el patio"
    ],
    "correcta": "Patinaban y hacían muñecos de nieve",
    "explicacion": "«…patinábamos y hacíamos muñecos de nieve»."
   },
   {
    "id": "LEE-pequena-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Adónde iban en verano?",
    "opciones": [
     "A la dacha de sus abuelos",
     "A España",
     "A un hotel"
    ],
    "correcta": "A la dacha de sus abuelos",
    "explicacion": "«En verano solíamos ir a la dacha de mis abuelos»."
   },
   {
    "id": "LEE-pequena-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "De pequeña, Ana quería ser programadora.",
    "verdadero": false,
    "explicacion": "«…quería ser médica, como mi madre»."
   }
  ]
 },
 {
  "id": "LEE-pueblo",
  "nivel": "A2",
  "desde": 9,
  "tema": "Семья",
  "titulo": "El pueblo de mi abuela",
  "tituloRu": "Деревня моей бабушки",
  "parrafos": [
   {
    "es": "Mi abuela Pilar nació en 1950 en un pueblo pequeño de Asturias, en el norte de España.",
    "ru": "Моя бабушка Пилар родилась в 1950 году в маленькой деревне в Астурии, на севере Испании."
   },
   {
    "es": "Cuando era joven, la vida allí era muy diferente. Casi nadie tenía coche y no había televisión. La gente trabajaba en el campo desde muy temprano y casi todas las familias tenían vacas. Para ir a la ciudad, la gente cogía un autobús que pasaba una vez al día.",
    "ru": "Когда она была молодой, жизнь там была совсем другой. Машины почти ни у кого не было, телевизора не было. Люди работали в поле с самого утра, и почти в каждой семье были коровы. Чтобы съездить в город, люди садились на автобус, который ходил раз в день."
   },
   {
    "es": "Mi abuela tenía cinco hermanos. Por la mañana iba a la escuela y por la tarde ayudaba a su madre en casa y con los animales.",
    "ru": "У бабушки было пятеро братьев и сестёр. Утром она ходила в школу, а после обеда помогала маме по дому и с животными."
   },
   {
    "es": "Los domingos todo el pueblo iba a la plaza después de misa. Había música y la gente bailaba hasta la noche.",
    "ru": "По воскресеньям после мессы вся деревня шла на площадь. Играла музыка, и люди танцевали до ночи."
   },
   {
    "es": "A los veinte años mi abuela se fue a vivir a Barcelona, como muchos jóvenes de los pueblos en aquella época. Allí trabajó en una fábrica y conoció a mi abuelo.",
    "ru": "В двадцать лет бабушка уехала жить в Барселону, как многие молодые люди из деревень в то время. Там она работала на фабрике и познакомилась с дедушкой."
   },
   {
    "es": "Ahora el pueblo es muy tranquilo: solo viven allí cien personas, casi todas mayores. Pero cada verano mi abuela vuelve y dice que es el sitio más bonito del mundo.",
    "ru": "Сейчас в деревне очень тихо: там живут всего сто человек, почти все пожилые. Но каждое лето бабушка возвращается туда и говорит, что это самое красивое место на свете."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-pueblo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde nació la abuela?",
    "opciones": [
     "En un pueblo de Asturias",
     "En Barcelona",
     "En Madrid"
    ],
    "correcta": "En un pueblo de Asturias",
    "explicacion": "«…nació… en un pueblo pequeño de Asturias»."
   },
   {
    "id": "LEE-pueblo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En el pueblo había televisión.",
    "verdadero": false,
    "explicacion": "«…no había televisión»."
   },
   {
    "id": "LEE-pueblo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hacía la abuela por la tarde?",
    "opciones": [
     "Ayudaba a su madre",
     "Iba a la escuela",
     "Veía la televisión"
    ],
    "correcta": "Ayudaba a su madre",
    "explicacion": "«…por la tarde ayudaba a su madre en casa y con los animales»."
   },
   {
    "id": "LEE-pueblo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pasaba los domingos?",
    "opciones": [
     "Había música y la gente bailaba",
     "Todos trabajaban en el campo",
     "La gente iba a la playa"
    ],
    "correcta": "Había música y la gente bailaba",
    "explicacion": "«Había música y la gente bailaba hasta la noche»."
   },
   {
    "id": "LEE-pueblo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué se fue a Barcelona?",
    "opciones": [
     "Como muchos jóvenes de su época",
     "Para estudiar en la universidad",
     "Por su abuelo"
    ],
    "correcta": "Como muchos jóvenes de su época",
    "explicacion": "«…como muchos jóvenes de los pueblos en aquella época»."
   },
   {
    "id": "LEE-pueblo-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántas personas viven hoy en el pueblo?",
    "opciones": [
     "Cien",
     "Mil",
     "Cinco"
    ],
    "correcta": "Cien",
    "explicacion": "«…solo viven allí cien personas»."
   }
  ]
 },
 {
  "id": "LEE-bcnantes",
  "nivel": "A2",
  "desde": 9,
  "tema": "Город",
  "titulo": "Barcelona antes y ahora",
  "tituloRu": "Барселона раньше и сейчас",
  "parrafos": [
   {
    "es": "Javier llegó a Barcelona en 1988, cuando era estudiante. Cuenta que la ciudad era muy diferente. En aquella época compartía piso con tres estudiantes y por las noches salían por el barrio Gótico, porque allí todo era barato.",
    "ru": "Хавьер приехал в Барселону в 1988 году, когда был студентом. Он рассказывает, что город был совсем другим. В то время он снимал квартиру вместе с тремя студентами, и по вечерам они гуляли по Готическому кварталу, потому что там всё было дёшево."
   },
   {
    "es": "Antes de los Juegos Olímpicos de 1992, la playa no era bonita: no estaba limpia y la gente casi no iba allí. Después la ciudad cambió mucho. Ahora hay playas muy bonitas y en verano están llenas.",
    "ru": "До Олимпийских игр 1992 года пляж был некрасивым: он был грязным, и люди туда почти не ходили. Потом город сильно изменился. Теперь здесь очень красивые пляжи, и летом они полные."
   },
   {
    "es": "Antes había pocos turistas. Ahora vienen millones de personas cada año, y en el centro a veces es difícil caminar.",
    "ru": "Раньше туристов было мало. Теперь каждый год приезжают миллионы людей, и в центре иногда трудно пройти."
   },
   {
    "es": "Los pisos eran baratos: Javier pagaba muy poco por un piso en el centro. Hoy un piso igual cuesta mucho más, y muchos jóvenes no pueden vivir solos.",
    "ru": "Квартиры были дешёвыми: Хавьер платил совсем немного за квартиру в центре. Сегодня такая же квартира стоит гораздо дороже, и многие молодые люди не могут жить отдельно."
   },
   {
    "es": "También había menos líneas de metro y casi nadie iba en bici. Ahora hay muchas más líneas y calles para bicis.",
    "ru": "Ещё было меньше линий метро, и почти никто не ездил на велосипеде. Теперь линий гораздо больше, и есть велодорожки."
   },
   {
    "es": "¿Le gusta más la Barcelona de antes o la de ahora? «Las dos», dice Javier. «Antes era más tranquila y más barata, pero ahora es más bonita y más internacional».",
    "ru": "Какая Барселона ему нравится больше — прежняя или нынешняя? «Обе, — говорит Хавьер. — Раньше она была спокойнее и дешевле, а теперь красивее и интернациональнее»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-bcnantes-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo llegó Javier a Barcelona?",
    "opciones": [
     "En 1988",
     "En 1992",
     "Hace dos años"
    ],
    "correcta": "En 1988",
    "explicacion": "«Javier llegó a Barcelona en 1988»."
   },
   {
    "id": "LEE-bcnantes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo era la playa antes de 1992?",
    "opciones": [
     "No estaba limpia",
     "Estaba llena",
     "Era muy bonita"
    ],
    "correcta": "No estaba limpia",
    "explicacion": "«…no estaba limpia y la gente casi no iba allí»."
   },
   {
    "id": "LEE-bcnantes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Antes había muchos turistas.",
    "verdadero": false,
    "explicacion": "«Antes había pocos turistas»."
   },
   {
    "id": "LEE-bcnantes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo eran los pisos antes?",
    "opciones": [
     "Baratos",
     "Muy caros",
     "Muy grandes"
    ],
    "correcta": "Baratos",
    "explicacion": "«Los pisos eran baratos»."
   },
   {
    "id": "LEE-bcnantes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay ahora que antes no había?",
    "opciones": [
     "Calles para bicis",
     "Pisos baratos",
     "Playas sucias"
    ],
    "correcta": "Calles para bicis",
    "explicacion": "«Ahora hay muchas más líneas y calles para bicis»."
   },
   {
    "id": "LEE-bcnantes-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Как изменился твой город? Сравни «раньше» и «сейчас» по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "раньше",
       "formas": [
        "antes",
        "cuando era",
        "había",
        "era"
       ]
      },
      {
       "es": "сейчас",
       "formas": [
        "ahora",
        "hoy"
       ]
      }
     ],
     "modelos": [
      "Antes mi ciudad era más tranquila; ahora hay más coches."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-susto",
  "nivel": "A2",
  "desde": 9,
  "tema": "Путешествия",
  "titulo": "Un viaje en tren",
  "tituloRu": "Поездка на поезде",
  "parrafos": [
   {
    "es": "El verano pasado Lucía fue a Valencia en tren para visitar a una amiga. Era muy temprano, las siete de la mañana, y en el tren había poca gente.",
    "ru": "Прошлым летом Лусия ездила в Валенсию на поезде к подруге. Было очень рано, семь утра, и в поезде было мало людей."
   },
   {
    "es": "Lucía estaba leyendo un libro y escuchaba música cuando, de repente, el tren paró en medio del campo.",
    "ru": "Лусия читала книгу и слушала музыку, когда вдруг поезд остановился посреди поля."
   },
   {
    "es": "Nadie sabía qué pasaba. Unas personas se levantaron y miraron por la ventana. Una señora mayor estaba muy nerviosa y un niño empezó a llorar.",
    "ru": "Никто не знал, что происходит. Несколько человек встали и посмотрели в окно. Пожилая женщина очень нервничала, а один ребёнок заплакал."
   },
   {
    "es": "Lucía también estaba un poco nerviosa, pero quiso ayudar a la señora: habló con ella de su viaje y le dio un poco de agua.",
    "ru": "Лусия тоже немного нервничала, но захотела помочь женщине: поговорила с ней о поездке и дала ей немного воды."
   },
   {
    "es": "Después de veinte minutos, un chico del tren pasó por los vagones y dijo: «No pasa nada. Era un problema pequeño. Vamos a continuar el viaje».",
    "ru": "Через двадцать минут проводник прошёл по вагонам и сказал: «Ничего страшного. Это была небольшая проблема. Сейчас поедем дальше»."
   },
   {
    "es": "El tren siguió y llegó a Valencia una hora tarde. Lucía perdió el autobús a la playa, pero no le importó: ¡llegó bien y tenía una historia para contar! Por la noche llamó a Ana y le contó todo. «¡Qué susto!», dijo Ana.",
    "ru": "Поезд поехал дальше и прибыл в Валенсию с опозданием на час. Лусия опоздала на автобус до пляжа, но её это уже не волновало: она благополучно добралась до места, и ей было что рассказать! Вечером она позвонила Ане и всё ей рассказала. «Вот это да, как страшно!» — сказала Аня."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-susto-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Adónde fue Lucía?",
    "opciones": [
     "A Valencia",
     "A Madrid",
     "A Sevilla"
    ],
    "correcta": "A Valencia",
    "explicacion": "«…Lucía fue a Valencia en tren»."
   },
   {
    "id": "LEE-susto-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hacía cuando el tren paró?",
    "opciones": [
     "Leía un libro y escuchaba música",
     "Dormía",
     "Hablaba por teléfono"
    ],
    "correcta": "Leía un libro y escuchaba música",
    "explicacion": "«Lucía estaba leyendo un libro y escuchaba música cuando…»."
   },
   {
    "id": "LEE-susto-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo estaba la señora mayor?",
    "opciones": [
     "Muy nerviosa",
     "Muy contenta",
     "Dormida"
    ],
    "correcta": "Muy nerviosa",
    "explicacion": "«Una señora mayor estaba muy nerviosa»."
   },
   {
    "id": "LEE-susto-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hizo Lucía?",
    "opciones": [
     "Ayudó a la señora",
     "Llamó a la policía",
     "Salió del tren"
    ],
    "correcta": "Ayudó a la señora",
    "explicacion": "«…quiso ayudar a la señora»."
   },
   {
    "id": "LEE-susto-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El problema del tren fue grave.",
    "verdadero": false,
    "explicacion": "«Era un problema pequeño»."
   },
   {
    "id": "LEE-susto-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Con cuánto retraso llegó el tren?",
    "opciones": [
     "Una hora",
     "Veinte minutos",
     "Tres horas"
    ],
    "correcta": "Una hora",
    "explicacion": "«…llegó a Valencia una hora tarde»."
   }
  ]
 },
 {
  "id": "LEE-verano",
  "nivel": "B1",
  "desde": 10,
  "tema": "Планы",
  "titulo": "Planes para el verano",
  "tituloRu": "Планы на лето",
  "parrafos": [
   {
    "es": "Este verano Ana va a tener tres semanas de vacaciones y ya tiene muchos planes.",
    "ru": "Этим летом у Ани будет три недели отпуска, и у неё уже много планов."
   },
   {
    "es": "Primero irá a Moscú a ver a su familia. No hay vuelos directos: hará escala en Estambul. Estará allí diez días. Su madre está muy contenta: dice que le preparará todos los platos que más le gustan.",
    "ru": "Сначала она полетит в Москву к семье. Прямых рейсов нет: будет пересадка в Стамбуле. Она пробудет там десять дней. Мама очень рада: говорит, что приготовит ей все её любимые блюда."
   },
   {
    "es": "Después volverá a España y viajará con Lucía por Andalucía. Visitarán Sevilla, Granada y Córdoba. Dormirán en hoteles pequeños y alquilarán un coche, porque Lucía tiene carné de conducir.",
    "ru": "Потом она вернётся в Испанию и поедет с Лусией по Андалусии. Они побывают в Севилье, Гранаде и Кордове. Будут ночевать в маленьких гостиницах и возьмут машину напрокат, потому что у Лусии есть права."
   },
   {
    "es": "En Granada verán la Alhambra. Ana ya ha comprado las entradas por internet, porque en verano hay mucha gente y se acaban pronto.",
    "ru": "В Гранаде они увидят Альгамбру. Аня уже купила билеты через интернет, потому что летом очень много людей и билеты быстро раскупают."
   },
   {
    "es": "Ana sabe que en agosto hará mucho calor en Andalucía: en Sevilla o en Córdoba puede haber más de cuarenta grados. Por eso, saldrán temprano por la mañana y descansarán por la tarde, como hace la gente de allí.",
    "ru": "Аня знает, что в августе в Андалусии будет очень жарко: в Севилье или Кордове может быть больше сорока градусов. Поэтому они будут выходить рано утром и отдыхать днём, как делают местные."
   },
   {
    "es": "Ana también quiere probar la comida del sur: el pescado de Cádiz y las tapas gratis de Granada.",
    "ru": "Ещё Аня хочет попробовать андалусскую кухню: рыбу в Кадисе и бесплатные тапас в Гранаде."
   },
   {
    "es": "Si tienen tiempo, al final del viaje pasarán dos días en la playa de Cádiz.",
    "ru": "Если будет время, в конце поездки они проведут два дня на пляже в Кадисе."
   },
   {
    "es": "«Va a ser el mejor verano de mi vida», dice Ana.",
    "ru": "«Это будет лучшее лето в моей жизни», — говорит Аня."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-verano-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos días estará Ana en Moscú?",
    "opciones": [
     "Diez",
     "Tres",
     "Veinte"
    ],
    "correcta": "Diez",
    "explicacion": "«Estará allí diez días»."
   },
   {
    "id": "LEE-verano-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ciudades visitarán en Andalucía?",
    "opciones": [
     "Sevilla, Granada y Córdoba",
     "Madrid y Valencia",
     "Málaga y Cádiz"
    ],
    "correcta": "Sevilla, Granada y Córdoba",
    "explicacion": "«Visitarán Sevilla, Granada y Córdoba»."
   },
   {
    "id": "LEE-verano-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué alquilarán un coche?",
    "opciones": [
     "Lucía tiene carné de conducir",
     "No hay trenes",
     "Es más barato que el hotel"
    ],
    "correcta": "Lucía tiene carné de conducir",
    "explicacion": "«…alquilarán un coche, porque Lucía tiene carné de conducir»."
   },
   {
    "id": "LEE-verano-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana todavía no ha comprado las entradas de la Alhambra.",
    "verdadero": false,
    "explicacion": "«Ana ya ha comprado las entradas por internet»."
   },
   {
    "id": "LEE-verano-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué harán por la tarde?",
    "opciones": [
     "Descansarán",
     "Irán a la playa",
     "Visitarán museos"
    ],
    "correcta": "Descansarán",
    "explicacion": "«…saldrán temprano por la mañana y descansarán por la tarde»."
   },
   {
    "id": "LEE-verano-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Какие у тебя планы на лето? Напиши 2–3 фразы в futuro.",
    "sit": {
     "necesita": [
      {
       "es": "будущее",
       "formas": [
        "é ",
        "ás ",
        "á ",
        "emos ",
        "án ",
        "iré",
        "haré",
        "tendré",
        "podré",
        "saldré",
        "viajaré",
        "visitaré",
        "estaré",
        "iremos",
        "voy a"
       ]
      }
     ],
     "modelos": [
      "Este verano iré a la playa y visitaré a mi familia."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-tiempo",
  "nivel": "B1",
  "desde": 10,
  "tema": "Погода",
  "titulo": "El tiempo del fin de semana",
  "tituloRu": "Погода на выходные",
  "parrafos": [
   {
    "es": "Buenas noches. Este es el tiempo para el fin de semana.",
    "ru": "Добрый вечер. Прогноз погоды на выходные."
   },
   {
    "es": "El sábado hará sol en casi toda España. En Andalucía las temperaturas subirán: en Sevilla llegaremos a los treinta y cinco grados, y en Córdoba, a los treinta y siete.",
    "ru": "В субботу почти по всей Испании будет солнечно. В Андалусии температура поднимется: в Севилье до тридцати пяти градусов, а в Кордове — до тридцати семи."
   },
   {
    "es": "En Galicia y en Asturias estará nublado y por la tarde lloverá. Si vais a salir, vais a necesitar un paraguas y un abrigo.",
    "ru": "В Галисии и Астурии будет облачно, а после обеда пойдёт дождь. Если собираетесь выходить, возьмите с собой зонт и куртку."
   },
   {
    "es": "En Madrid y en el centro hará buen tiempo durante el día, pero por la noche hará fresco: unos doce grados.",
    "ru": "В Мадриде и в центре страны днём будет хорошая погода, но ночью будет прохладно: около двенадцати градусов."
   },
   {
    "es": "En Valencia y en Murcia hará calor, pero por la mañana estará nublado; por la tarde saldrá el sol. Si vais a la playa, llevad crema para el sol.",
    "ru": "В Валенсии и Мурсии будет жарко, но утром будет облачно; после обеда выглянет солнце. Если пойдёте на пляж, возьмите солнцезащитный крем."
   },
   {
    "es": "En las islas Canarias, como siempre, tendrán unos veinticuatro grados y un poco de viento.",
    "ru": "На Канарских островах, как всегда, будет около двадцати четырёх градусов и небольшой ветер."
   },
   {
    "es": "El domingo cambiará el tiempo. Llegará viento frío del norte y las temperaturas bajarán en todo el país, entre cinco y ocho grados. En los Pirineos podrá nevar por encima de los dos mil metros.",
    "ru": "В воскресенье погода изменится. С севера придёт холодный ветер, и температура по всей стране опустится на пять–восемь градусов. В Пиренеях выше двух тысяч метров возможен снег."
   },
   {
    "es": "En Barcelona, el sábado será un día perfecto para la playa; el domingo, mejor quedarse en casa con una buena película. ¡Buen fin de semana!",
    "ru": "В Барселоне суббота будет идеальным днём для пляжа, а в воскресенье лучше остаться дома с хорошим фильмом. Хороших выходных!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-tiempo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos grados hará en Córdoba el sábado?",
    "opciones": [
     "Treinta y siete",
     "Treinta y cinco",
     "Doce"
    ],
    "correcta": "Treinta y siete",
    "explicacion": "«…y en Córdoba, a los treinta y siete»."
   },
   {
    "id": "LEE-tiempo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tiempo hará en Galicia?",
    "opciones": [
     "Nublado y con lluvia",
     "Mucho calor",
     "Nieve"
    ],
    "correcta": "Nublado y con lluvia",
    "explicacion": "«En Galicia y en Asturias estará nublado y por la tarde lloverá»."
   },
   {
    "id": "LEE-tiempo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué necesitarás en Asturias?",
    "opciones": [
     "Un paraguas y un abrigo",
     "Ropa de verano",
     "Gafas de sol"
    ],
    "correcta": "Un paraguas y un abrigo",
    "explicacion": "«…vais a necesitar un paraguas y un abrigo»."
   },
   {
    "id": "LEE-tiempo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pasará el domingo?",
    "opciones": [
     "Bajarán las temperaturas",
     "Hará más calor",
     "Lloverá en Sevilla"
    ],
    "correcta": "Bajarán las temperaturas",
    "explicacion": "«…las temperaturas bajarán en todo el país»."
   },
   {
    "id": "LEE-tiempo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En los Pirineos podrá nevar el domingo.",
    "verdadero": true,
    "explicacion": "«En los Pirineos podrá nevar por encima de los dos mil metros»."
   },
   {
    "id": "LEE-tiempo-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué día es mejor para la playa en Barcelona?",
    "opciones": [
     "El sábado",
     "El domingo",
     "Ninguno"
    ],
    "correcta": "El sábado",
    "explicacion": "«…el sábado será un día perfecto para la playa»."
   }
  ]
 },
 {
  "id": "LEE-trabajo",
  "nivel": "B1",
  "desde": 10,
  "tema": "Работа",
  "titulo": "Buscar trabajo en España",
  "tituloRu": "Поиск работы в Испании",
  "parrafos": [
   {
    "es": "Pablo es ingeniero y lleva un año buscando un trabajo nuevo. Ahora trabaja en una empresa pequeña de Madrid, pero quiere un puesto mejor, con más responsabilidad.",
    "ru": "Пабло — инженер, и уже год ищет новую работу. Сейчас он работает в небольшой компании в Мадриде, но хочет должность получше, с большей ответственностью."
   },
   {
    "es": "Cada semana mira los anuncios de trabajo en internet y manda su currículum. Muchas empresas no contestan, pero a veces lo llaman para una entrevista. Por ahora ha hecho seis entrevistas.",
    "ru": "Каждую неделю он смотрит вакансии в интернете и отправляет резюме. Многие компании не отвечают, но иногда его приглашают на собеседование. Пока он прошёл шесть собеседований."
   },
   {
    "es": "Ayer tuvo una entrevista en una empresa grande. Le preguntaron por su experiencia, por los idiomas que habla y por sus planes para el futuro. También le preguntaron: «¿Dónde se ve dentro de cinco años?».",
    "ru": "Вчера у него было собеседование в крупной компании. Его спросили об опыте, о языках, которые он знает, и о планах на будущее. А ещё спросили: «Где вы видите себя через пять лет?»."
   },
   {
    "es": "Pablo contestó bien, pero estaba un poco nervioso. Al final le dijeron: «Le llamaremos la semana que viene».",
    "ru": "Пабло хорошо ответил, но немного нервничал. В конце ему сказали: «Мы вам позвоним на следующей неделе»."
   },
   {
    "es": "Si le dan el trabajo, ganará más dinero y tendrá un contrato fijo. Pero también tendrá que trabajar más horas y viajar mucho. Además, la empresa está lejos de su casa: tardaría una hora en llegar.",
    "ru": "Если его возьмут, он будет больше зарабатывать и получит бессрочный договор. Но ему также придётся работать больше часов и много ездить в командировки. К тому же компания далеко от дома: дорога занимала бы час."
   },
   {
    "es": "Pablo no sabe qué hará. «Me gustaría tener más tiempo libre, pero también quiero crecer en mi profesión», dice.",
    "ru": "Пабло не знает, что будет делать. «Мне хотелось бы иметь больше свободного времени, но я также хочу расти в профессии», — говорит он."
   },
   {
    "es": "Marta le dice: «Tranquilo. Si no es esta empresa, será otra. Tienes mucha experiencia y hablas inglés. Seguro que encontrarás algo bueno».",
    "ru": "Марта говорит ему: «Не волнуйся. Не эта компания — так другая. У тебя большой опыт, и ты говоришь по-английски. Наверняка найдёшь что-нибудь хорошее»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-trabajo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo lleva Pablo buscando trabajo?",
    "opciones": [
     "Un año",
     "Un mes",
     "Cinco años"
    ],
    "correcta": "Un año",
    "explicacion": "«…lleva un año buscando un trabajo nuevo»."
   },
   {
    "id": "LEE-trabajo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le preguntaron en la entrevista?",
    "opciones": [
     "Por su experiencia y sus idiomas",
     "Por su familia",
     "Por su coche"
    ],
    "correcta": "Por su experiencia y sus idiomas",
    "explicacion": "«Le preguntaron por su experiencia, por los idiomas que habla…»."
   },
   {
    "id": "LEE-trabajo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo estaba Pablo en la entrevista?",
    "opciones": [
     "Un poco nervioso",
     "Muy tranquilo",
     "Enfadado"
    ],
    "correcta": "Un poco nervioso",
    "explicacion": "«…pero estaba un poco nervioso»."
   },
   {
    "id": "LEE-trabajo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pasará si le dan el trabajo?",
    "opciones": [
     "Ganará más, pero trabajará más horas",
     "Ganará menos",
     "Trabajará desde casa"
    ],
    "correcta": "Ganará más, pero trabajará más horas",
    "explicacion": "«…ganará más dinero… Pero también tendrá que trabajar más horas»."
   },
   {
    "id": "LEE-trabajo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Pablo está seguro de que quiere el trabajo.",
    "verdadero": false,
    "explicacion": "«Pablo no sabe qué hará»."
   },
   {
    "id": "LEE-trabajo-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Что бы ты сказал Пабло? Дай ему совет (condicional или futuro).",
    "sit": {
     "necesita": [
      {
       "es": "совет",
       "formas": [
        "deberías",
        "podrías",
        "yo que tú",
        "tendrás",
        "encontrarás",
        "será",
        "seguro que"
       ]
      }
     ],
     "modelos": [
      "Deberías esperar la respuesta. Seguro que encontrarás algo."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-estudiar",
  "nivel": "B1",
  "desde": 10,
  "tema": "Учёба",
  "titulo": "Estudiar en España",
  "tituloRu": "Учиться в Испании",
  "parrafos": [
   {
    "es": "Muchos estudiantes de otros países vienen a estudiar a España. Les gusta el clima, la comida, la vida en la calle y, sobre todo, aprender español.",
    "ru": "Многие студенты из других стран приезжают учиться в Испанию. Им нравятся климат, еда, оживлённая уличная жизнь и, главное, возможность выучить испанский."
   },
   {
    "es": "En España una carrera universitaria normalmente dura cuatro años. Después, muchos estudiantes hacen un máster de uno o dos años.",
    "ru": "В Испании обучение в университете обычно длится четыре года. Потом многие студенты идут в магистратуру на один-два года."
   },
   {
    "es": "Las universidades públicas no son muy caras: un curso entero cuesta normalmente entre setecientos y dos mil euros, según la región. Las privadas son mucho más caras.",
    "ru": "Государственные университеты не очень дорогие: учебный год обычно стоит от семисот до двух тысяч евро, в зависимости от региона. Частные — гораздо дороже."
   },
   {
    "es": "Para estudiar aquí hace falta hablar bien español. Muchas universidades piden un examen oficial, como el DELE. Por eso muchos estudiantes hacen primero un curso de idiomas.",
    "ru": "Чтобы учиться здесь, нужно хорошо говорить по-испански. Многие университеты требуют сдать официальный экзамен, например DELE. Поэтому многие студенты сначала проходят языковой курс."
   },
   {
    "es": "En las universidades españolas las clases son normalmente en español, pero cada vez hay más cursos de máster en inglés. Además, muchos estudiantes europeos vienen un año con el programa Erasmus.",
    "ru": "В испанских университетах занятия обычно идут на испанском, но магистерских программ на английском становится всё больше. Кроме того, многие европейские студенты приезжают на год по программе Erasmus."
   },
   {
    "es": "Ana está pensando en estudiar un máster de inteligencia artificial en Barcelona. «Primero aprobaré el examen de español. Después miraré las universidades y pediré información», dice. Para entrar en el máster, también tendrá que pedir que España reconozca su título de Rusia.",
    "ru": "Аня думает поступить в магистратуру по искусственному интеллекту в Барселоне. «Сначала сдам экзамен по испанскому. Потом изучу предложения университетов и узнаю подробности», — говорит она. А чтобы поступить в магистратуру, ей нужно будет подтвердить в Испании свой российский диплом."
   },
   {
    "es": "Lucía le aconseja: «Deberías hacer prácticas en una empresa. Conocerás a gente y mejorarás tu español muy rápido». Ana cree que es un buen consejo.",
    "ru": "Лусия советует ей: «Тебе стоит пройти стажировку в компании. Познакомишься с людьми и очень быстро улучшишь испанский». Аня считает, что это хороший совет."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-estudiar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años dura normalmente una carrera?",
    "opciones": [
     "Cuatro",
     "Dos",
     "Seis"
    ],
    "correcta": "Cuatro",
    "explicacion": "«…una carrera universitaria normalmente dura cuatro años»."
   },
   {
    "id": "LEE-estudiar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto cuesta un curso en una universidad pública?",
    "opciones": [
     "Entre setecientos y dos mil euros",
     "Más de diez mil euros",
     "Nada"
    ],
    "correcta": "Entre setecientos y dos mil euros",
    "explicacion": "«…entre setecientos y dos mil euros, según la región»."
   },
   {
    "id": "LEE-estudiar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piden muchas universidades?",
    "opciones": [
     "Un examen oficial de español",
     "Un carné de conducir",
     "Un contrato de trabajo"
    ],
    "correcta": "Un examen oficial de español",
    "explicacion": "«Muchas universidades piden un examen oficial, como el DELE»."
   },
   {
    "id": "LEE-estudiar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué quiere estudiar Ana?",
    "opciones": [
     "Un máster de inteligencia artificial",
     "Medicina",
     "Español"
    ],
    "correcta": "Un máster de inteligencia artificial",
    "explicacion": "«…un máster de inteligencia artificial en Barcelona»."
   },
   {
    "id": "LEE-estudiar-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana puede entrar en el máster sin hacer nada.",
    "verdadero": false,
    "explicacion": "«…también tendrá que pedir que España reconozca su título de Rusia»."
   },
   {
    "id": "LEE-estudiar-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le aconseja Lucía?",
    "opciones": [
     "Hacer prácticas en una empresa",
     "Volver a Rusia",
     "Estudiar en Madrid"
    ],
    "correcta": "Hacer prácticas en una empresa",
    "explicacion": "«Deberías hacer prácticas en una empresa»."
   }
  ]
 },
 {
  "id": "LEE-averia",
  "nivel": "B1",
  "desde": 11,
  "tema": "Дом",
  "titulo": "Una avería en casa",
  "tituloRu": "Поломка дома",
  "parrafos": [
   {
    "es": "El lunes por la mañana Ana se levantó, abrió el grifo de la ducha y… no salía agua caliente. ¡Qué mala suerte! Fuera hacía frío y la calefacción tampoco funcionaba.",
    "ru": "В понедельник утром Аня встала, открыла кран в душе и… горячая вода не шла. Вот невезение! На улице было холодно, и отопление тоже не работало."
   },
   {
    "es": "Primero miró el aparato del agua caliente, en la cocina, pero no entendía nada: solo veía una luz roja. Entonces llamó al casero.",
    "ru": "Сначала она посмотрела на водонагреватель на кухне, но ничего не поняла: горела только красная лампочка. Тогда она позвонила хозяину квартиры."
   },
   {
    "es": "«Es que se ha roto algo», le explicó él. «Mañana vendrá alguien de la empresa a mirarlo. Espero que no sea nada grave». Ana le dijo: «Por favor, que venga por la mañana, porque por la tarde trabajo».",
    "ru": "«Видимо, что-то сломалось, — объяснил он. — Завтра придёт мастер из компании и посмотрит. Надеюсь, ничего серьёзного». Аня сказала: «Пожалуйста, пусть придёт утром, потому что во второй половине дня я работаю»."
   },
   {
    "es": "Esa noche Ana se duchó en casa de Lucía y cenaron juntas. «Ojalá lo arreglen pronto», dijo Ana. «No te preocupes», contestó Lucía. «Si mañana no viene nadie, llama otra vez y no aceptes un no». Lucía le dejó una toalla y le preparó una sopa caliente.",
    "ru": "В тот вечер Аня приняла душ у Лусии, и они вместе поужинали. «Хоть бы поскорее починили», — сказала Аня. «Не волнуйся, — ответила Лусия. — Если завтра никто не придёт, позвони ещё раз и не отступай, если тебе откажут». Лусия дала ей полотенце и приготовила горячий суп."
   },
   {
    "es": "El martes a las nueve vino el técnico. Trabajó dos horas y cambió una pieza. Al final todo funcionó otra vez.",
    "ru": "Во вторник в девять пришёл мастер. Он работал два часа и заменил одну деталь. В итоге всё снова заработало."
   },
   {
    "es": "Antes de irse le explicó: «Cuando haga mucho frío, no apague la calefacción por la noche. Y si vuelve a ver la luz roja, llámenos enseguida».",
    "ru": "Перед уходом он объяснил: «Когда будет очень холодно, не выключайте отопление на ночь. А если снова увидите красную лампочку, сразу звоните нам»."
   },
   {
    "es": "Ana no pagó nada: la reparación la pagó el casero, porque en un piso alquilado las reparaciones importantes las paga el propietario. «Menos mal», pensó Ana.",
    "ru": "Аня ничего не заплатила: ремонт оплатил хозяин, потому что в съёмной квартире серьёзный ремонт оплачивает владелец. «Слава богу», — подумала Аня."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-averia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tenía Ana el lunes?",
    "opciones": [
     "No había agua caliente",
     "No había luz",
     "No podía abrir la puerta"
    ],
    "correcta": "No había agua caliente",
    "explicacion": "«…no salía agua caliente»."
   },
   {
    "id": "LEE-averia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué veía en el aparato del agua caliente?",
    "opciones": [
     "Una luz roja",
     "Agua",
     "Fuego"
    ],
    "correcta": "Una luz roja",
    "explicacion": "«…solo veía una luz roja»."
   },
   {
    "id": "LEE-averia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo quiere Ana que venga el técnico?",
    "opciones": [
     "Por la mañana",
     "Por la tarde",
     "Por la noche"
    ],
    "correcta": "Por la mañana",
    "explicacion": "«Por favor, que venga por la mañana, porque por la tarde trabajo»."
   },
   {
    "id": "LEE-averia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde se duchó Ana esa noche?",
    "opciones": [
     "En casa de Lucía",
     "En un hotel",
     "En el gimnasio"
    ],
    "correcta": "En casa de Lucía",
    "explicacion": "«Esa noche Ana se duchó en casa de Lucía»."
   },
   {
    "id": "LEE-averia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le aconsejó el técnico?",
    "opciones": [
     "No apagar la calefacción por la noche",
     "Cambiar de piso",
     "No ducharse por la mañana"
    ],
    "correcta": "No apagar la calefacción por la noche",
    "explicacion": "«…no apague la calefacción por la noche»."
   },
   {
    "id": "LEE-averia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana pagó la reparación.",
    "verdadero": false,
    "explicacion": "«Ana no pagó nada: la reparación la pagó el casero»."
   },
   {
    "id": "LEE-averia-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "У тебя дома что-то сломалось. Напиши хозяину квартиры короткое сообщение: что случилось и чего ты хочешь.",
    "sit": {
     "necesita": [
      {
       "es": "что сломалось",
       "formas": [
        "se ha roto",
        "no funciona",
        "está roto",
        "está rota",
        "no sale",
        "hay un problema"
       ]
      },
      {
       "es": "просьба",
       "formas": [
        "que venga",
        "que mande",
        "puede",
        "podría",
        "necesito",
        "por favor",
        "quiero que"
       ]
      }
     ],
     "modelos": [
      "Hola, se ha roto la calefacción. ¿Puede mandar a alguien mañana, por favor?"
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-ayuntamiento",
  "nivel": "B1",
  "desde": 11,
  "tema": "Учреждения",
  "titulo": "En el ayuntamiento",
  "tituloRu": "В мэрии",
  "parrafos": [
   {
    "es": "Marta necesitaba un certificado del ayuntamiento para su trabajo nuevo. Primero quiso pedir cita por internet, pero no había citas libres hasta dentro de un mes.",
    "ru": "Марте нужна была справка из мэрии для новой работы. Сначала она хотела записаться на приём через интернет, но на ближайший месяц свободных мест для записи не было."
   },
   {
    "es": "Una compañera le dijo: «Ve muy temprano. A veces atienden a gente sin cita, pero es importante que llegues antes de que abran».",
    "ru": "Коллега сказала ей: «Иди пораньше. Иногда принимают и без записи, но важно прийти до открытия»."
   },
   {
    "es": "El jueves Marta se levantó a las seis y media y a las ocho ya estaba en la puerta. Había mucha gente. Cuando abrieron, cogió un número y esperó su turno casi una hora.",
    "ru": "В четверг Марта встала в половине седьмого и в восемь уже была у дверей. Людей было много. Когда открыли, она взяла номерок и ждала своей очереди почти час."
   },
   {
    "es": "Mientras esperaba, leyó las noticias en el móvil y ayudó a una señora mayor con un formulario.",
    "ru": "Пока она ждала, она читала новости в телефоне и помогла пожилой женщине заполнить бланк."
   },
   {
    "es": "Cuando llegó a la ventanilla, la funcionaria le dijo: «Para este trámite es necesario que traiga el pasaporte, una fotocopia y un papel de su empresa». Marta tenía el pasaporte y el papel, pero no tenía la fotocopia.",
    "ru": "Когда она подошла к окошку, сотрудница сказала: «Для этой процедуры нужно принести паспорт, копию и документ от вашей компании». У Марты были паспорт и документ, но копии не было."
   },
   {
    "es": "«No se preocupe», le dijo la funcionaria. «Hay una tienda aquí al lado. Vaya, haga la fotocopia y vuelva. No hace falta que coja otro número».",
    "ru": "«Не волнуйтесь, — сказала ей сотрудница. — Рядом есть магазин. Сходите, сделайте копию и возвращайтесь. Новый номерок брать не нужно»."
   },
   {
    "es": "Diez minutos después Marta volvió con la fotocopia. La funcionaria le dio el certificado y le dijo: «Que tenga un buen día».",
    "ru": "Через десять минут Марта вернулась с копией. Сотрудница выдала ей справку и сказала: «Хорошего вам дня»."
   },
   {
    "es": "Marta salió contenta. «A veces los trámites no son tan difíciles», pensó. «Lo importante es tener paciencia y llevar todos los papeles».",
    "ru": "Марта вышла довольная. «Иногда оформление документов не такое уж сложное, — подумала она. — Главное — терпение и все документы с собой»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-ayuntamiento-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Para qué necesitaba Marta el certificado?",
    "opciones": [
     "Para su trabajo nuevo",
     "Para alquilar un piso",
     "Para estudiar"
    ],
    "correcta": "Para su trabajo nuevo",
    "explicacion": "«…un certificado del ayuntamiento para su trabajo nuevo»."
   },
   {
    "id": "LEE-ayuntamiento-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué no pidió cita por internet?",
    "opciones": [
     "No había citas libres",
     "La página no funcionaba",
     "No tenía ordenador"
    ],
    "correcta": "No había citas libres",
    "explicacion": "«…no había citas libres hasta dentro de un mes»."
   },
   {
    "id": "LEE-ayuntamiento-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le aconsejó su compañera?",
    "opciones": [
     "Ir muy temprano",
     "Ir por la tarde",
     "Llamar por teléfono"
    ],
    "correcta": "Ir muy temprano",
    "explicacion": "«Ve muy temprano»."
   },
   {
    "id": "LEE-ayuntamiento-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo esperó su turno?",
    "opciones": [
     "Casi una hora",
     "Diez minutos",
     "Todo el día"
    ],
    "correcta": "Casi una hora",
    "explicacion": "«…esperó su turno casi una hora»."
   },
   {
    "id": "LEE-ayuntamiento-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le faltaba a Marta?",
    "opciones": [
     "La fotocopia",
     "El pasaporte",
     "El papel de su empresa"
    ],
    "correcta": "La fotocopia",
    "explicacion": "«…no tenía la fotocopia»."
   },
   {
    "id": "LEE-ayuntamiento-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Marta tuvo que coger otro número.",
    "verdadero": false,
    "explicacion": "«No hace falta que coja otro número»."
   }
  ]
 },
 {
  "id": "LEE-reclamacion",
  "nivel": "B1",
  "desde": 11,
  "tema": "Письма",
  "titulo": "Una reclamación",
  "tituloRu": "Жалоба",
  "parrafos": [
   {
    "es": "Estimados señores:",
    "ru": "Уважаемые господа!"
   },
   {
    "es": "Les escribo para hacer una reclamación por una lavadora que compré en su tienda de la calle Mayor el día 3 de marzo. Pagué cuatrocientos euros.",
    "ru": "Пишу вам, чтобы подать претензию по поводу стиральной машины, которую я купил в вашем магазине на улице Майор 3 марта. Я заплатил четыреста евро."
   },
   {
    "es": "La lavadora llegó a mi casa el día 10, dos días más tarde de lo prometido. Desde el primer día no funciona bien: hace mucho ruido, no sale el agua y la ropa queda sucia. El técnico de su empresa vino el día 15, pero no pudo arreglarla y me dijo que tenía que llamar a la tienda.",
    "ru": "Стиральную машину доставили 10-го, на два дня позже обещанного. С первого дня она плохо работает: очень шумит, вода не сливается, и бельё остаётся грязным. Мастер вашей компании приходил 15-го, но не смог её починить и сказал, что нужно звонить в магазин."
   },
   {
    "es": "Desde entonces he llamado cuatro veces a su tienda, pero nadie me ha dado una solución. Una vez esperé media hora al teléfono y después se cortó la llamada.",
    "ru": "С тех пор я четыре раза звонил в ваш магазин, но никто не предложил решения. Однажды я полчаса ждал на линии, а потом звонок оборвался."
   },
   {
    "es": "Les recuerdo que la lavadora tiene tres años de garantía y que, según la ley, la tienda tiene que arreglar o cambiar un producto con defectos. Por eso les pido que la cambien por una nueva o que me devuelvan el dinero. Es importante que me contesten lo antes posible, porque ahora tengo que lavar la ropa en una lavandería.",
    "ru": "Напоминаю, что на стиральную машину действует трёхлетняя гарантия и что по закону магазин обязан отремонтировать или заменить товар с дефектом. Поэтому прошу заменить её на новую или вернуть мне деньги. Мне важно, чтобы вы ответили как можно скорее, потому что сейчас мне приходится стирать в прачечной."
   },
   {
    "es": "Si no recibo una respuesta en quince días, pediré la hoja de reclamaciones y buscaré ayuda en una asociación que defiende a los clientes.",
    "ru": "Если в течение пятнадцати дней я не получу ответа, я попрошу официальный бланк для подачи жалобы и обращусь за помощью в общество защиты прав потребителей."
   },
   {
    "es": "Adjunto una fotocopia de la factura y de la garantía.",
    "ru": "Прилагаю копию счёта и гарантийного талона."
   },
   {
    "es": "Atentamente,\nPablo García",
    "ru": "С уважением,\nПабло Гарсия"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-reclamacion-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo compró Pablo la lavadora?",
    "opciones": [
     "El 3 de marzo",
     "El 10 de marzo",
     "El 15 de marzo"
    ],
    "correcta": "El 3 de marzo",
    "explicacion": "«…el día 3 de marzo»."
   },
   {
    "id": "LEE-reclamacion-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tiene la lavadora?",
    "opciones": [
     "Hace mucho ruido y no lava bien",
     "No llegó nunca",
     "Es muy pequeña"
    ],
    "correcta": "Hace mucho ruido y no lava bien",
    "explicacion": "«…hace mucho ruido, no sale el agua y la ropa queda sucia»."
   },
   {
    "id": "LEE-reclamacion-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pasó cuando vino el técnico?",
    "opciones": [
     "No pudo arreglarla",
     "La arregló",
     "No vino"
    ],
    "correcta": "No pudo arreglarla",
    "explicacion": "«…no pudo arreglarla»."
   },
   {
    "id": "LEE-reclamacion-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pide Pablo?",
    "opciones": [
     "Una lavadora nueva o su dinero",
     "Un descuento",
     "Otro técnico"
    ],
    "correcta": "Una lavadora nueva o su dinero",
    "explicacion": "«…les pido que la cambien por una nueva o que me devuelvan el dinero»."
   },
   {
    "id": "LEE-reclamacion-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hará si no recibe respuesta?",
    "opciones": [
     "Pedirá la hoja de reclamaciones",
     "Comprará otra lavadora",
     "No hará nada"
    ],
    "correcta": "Pedirá la hoja de reclamaciones",
    "explicacion": "«…pediré la hoja de reclamaciones»."
   },
   {
    "id": "LEE-reclamacion-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Pablo escribe a un amigo.",
    "verdadero": false,
    "explicacion": "Es una carta formal a una tienda: «Estimados señores», «Les escribo», «Atentamente»."
   }
  ]
 },
 {
  "id": "LEE-alquilar",
  "nivel": "B1",
  "desde": 11,
  "tema": "Дом",
  "titulo": "Alquilar un piso",
  "tituloRu": "Как снять квартиру",
  "parrafos": [
   {
    "es": "Alquilar un piso en una ciudad grande como Madrid o Barcelona no es fácil: hay pocos pisos y son caros. Esto es lo que tienes que saber.",
    "ru": "Снять квартиру в большом городе, например в Мадриде или Барселоне, непросто: квартир мало, и они дорогие. Вот что нужно знать."
   },
   {
    "es": "Primero, es importante que decidas cuánto puedes pagar. Los expertos aconsejan que el alquiler no sea más de un tercio de lo que ganas. En Madrid y en Barcelona, un piso de dos habitaciones cuesta hoy más de mil euros al mes.",
    "ru": "Во-первых, важно решить, сколько ты можешь платить. Специалисты советуют, чтобы аренда составляла не больше трети твоего дохода. В Мадриде и Барселоне квартира с двумя спальнями стоит сегодня больше тысячи евро в месяц."
   },
   {
    "es": "Cuando visites un piso, mira bien todo: la cocina, el baño, las ventanas, la calefacción. Abre los grifos y enciende las luces. Es mejor que encuentres los problemas antes, no después.",
    "ru": "Когда будешь смотреть квартиру, внимательно проверь всё: кухню, ванную, окна, отопление. Открой краны и включи свет. Лучше обнаружить проблемы заранее, а не потом."
   },
   {
    "es": "Antes de firmar el contrato, léelo con calma. Si no entiendes algo, pregunta. No firmes nada sin entenderlo. Normalmente el contrato es de un año, pero si quieres, puedes quedarte en el piso hasta cinco años.",
    "ru": "Прежде чем подписать договор, спокойно прочитай его. Если что-то непонятно, спроси. Не подписывай ничего, пока всё не поймёшь. Обычно договор заключается на год, но, если захочешь, можно жить в квартире до пяти лет."
   },
   {
    "es": "Normalmente tendrás que pagar el primer mes y una fianza de un mes. El propietario te devuelve la fianza al final, si dejas el piso bien. Y una cosa importante: si alquilas con una agencia, no tienes que pagarle nada a la agencia; lo paga el propietario.",
    "ru": "Обычно нужно заплатить за первый месяц и залог в размере месячной платы. Владелец возвращает залог в конце, если ты оставишь квартиру в порядке. И важный момент: если снимаешь через агентство, агентству ты ничего не платишь — платит владелец."
   },
   {
    "es": "Paga siempre por el banco o pide un papel cuando pagues: así tendrás una prueba.",
    "ru": "Всегда плати через банк или проси расписку при оплате: так у тебя будет доказательство."
   },
   {
    "es": "Y un último consejo: habla con los vecinos. Ellos te dirán si el barrio es tranquilo y si el casero es buena persona.",
    "ru": "И последний совет: поговори с соседями. Они расскажут, тихо ли в районе и какой человек хозяин квартиры."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-alquilar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto debería ser el alquiler, según los expertos?",
    "opciones": [
     "No más de un tercio de lo que ganas",
     "La mitad de lo que ganas",
     "Todo lo que ganas"
    ],
    "correcta": "No más de un tercio de lo que ganas",
    "explicacion": "«…el alquiler no sea más de un tercio de lo que ganas»."
   },
   {
    "id": "LEE-alquilar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tienes que hacer cuando visitas un piso?",
    "opciones": [
     "Mirarlo todo bien",
     "Firmar enseguida",
     "Pagar la fianza"
    ],
    "correcta": "Mirarlo todo bien",
    "explicacion": "«…mira bien todo»."
   },
   {
    "id": "LEE-alquilar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Hasta cuántos años puedes quedarte en el piso?",
    "opciones": [
     "Hasta cinco",
     "Solo uno",
     "Toda la vida"
    ],
    "correcta": "Hasta cinco",
    "explicacion": "«…puedes quedarte en el piso hasta cinco años»."
   },
   {
    "id": "LEE-alquilar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo te devuelven la fianza?",
    "opciones": [
     "Al final, si dejas el piso bien",
     "Nunca",
     "Al primer mes"
    ],
    "correcta": "Al final, si dejas el piso bien",
    "explicacion": "«El propietario te devuelve la fianza al final, si dejas el piso bien»."
   },
   {
    "id": "LEE-alquilar-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Si alquilas con una agencia, tienes que pagar a la agencia.",
    "verdadero": false,
    "explicacion": "«…no tienes que pagarle nada a la agencia; lo paga el propietario»."
   },
   {
    "id": "LEE-alquilar-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Твой друг ищет квартиру в Испании. Дай ему два совета по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "совет",
       "formas": [
        "es importante que",
        "te aconsejo que",
        "es mejor que",
        "deberías",
        "no firmes",
        "mira",
        "pregunta",
        "habla"
       ]
      }
     ],
     "modelos": [
      "Es importante que leas bien el contrato. No firmes nada sin entenderlo."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-cochebici",
  "nivel": "B1",
  "desde": 12,
  "tema": "Мнения",
  "titulo": "¿Coche o bici?",
  "tituloRu": "Машина или велосипед?",
  "parrafos": [
   {
    "es": "En las ciudades españolas hay cada vez más calles para bicis, y cada vez más personas van al trabajo en bici. Pero no todo el mundo está de acuerdo con este cambio.",
    "ru": "В испанских городах становится всё больше велодорожек, и всё больше людей ездят на работу на велосипеде. Но не все согласны с этими переменами."
   },
   {
    "es": "Raúl, un amigo de Pablo, vendió su coche el año pasado. «En mi opinión, en Madrid el coche no es necesario», dice. «Por un lado, el metro funciona muy bien. Por otro lado, aparcar es muy caro y en el centro hay calles por las que ya no se puede pasar en coche. Además, la bici es buena para la salud y para el medio ambiente».",
    "ru": "Рауль, друг Пабло, продал машину в прошлом году. «По-моему, в Мадриде машина не нужна, — говорит он. — С одной стороны, метро отлично работает. С другой стороны, парковка очень дорогая, а в центре есть улицы, по которым на машине уже не проедешь. Кроме того, велосипед полезен для здоровья и для окружающей среды»."
   },
   {
    "es": "Ahora Raúl usa las bicis públicas de la ciudad, que se alquilan con una aplicación del móvil. «Es barato y no tengo que preocuparme de que me la roben», explica.",
    "ru": "Теперь Рауль пользуется городскими прокатными велосипедами, которые берут через приложение в телефоне. «Это дёшево, и мне не нужно волноваться, что его украдут», — объясняет он."
   },
   {
    "es": "Pablo no piensa lo mismo. «¿Vender mi coche? ¡Ni hablar! Trabajo fuera de Madrid y, sin coche, tardaría dos horas en llegar, porque el tren no pasa cerca de la empresa. Además, los fines de semana lo usamos para ir al pueblo de mis padres.».",
    "ru": "Пабло думает иначе. «Продать машину? Ни за что! Я работаю за городом, и без машины добирался бы два часа, потому что поезд не проходит рядом с компанией. К тому же по выходным мы ездим на ней в деревню к моим родителям»."
   },
   {
    "es": "Marta está en el medio: «Depende. Para ir por el centro, la bici es perfecta. Pero cuando llueve o hace mucho calor, prefiero el metro. Y para ir al pueblo, el coche de Pablo es muy cómodo».",
    "ru": "Марта придерживается промежуточной позиции: «Зависит от ситуации. Для поездок по центру велосипед идеален. Но когда идёт дождь или очень жарко, я предпочитаю метро. А чтобы ездить в деревню, машина Пабло очень удобна»."
   },
   {
    "es": "Lo que está claro es que las ciudades están cambiando: se construyen calles para bicis, se cierran calles a los coches y el objetivo es que haya menos contaminación.",
    "ru": "Ясно одно: города меняются. Строят велодорожки, закрывают улицы для машин, и цель этих мер — уменьшить загрязнение."
   },
   {
    "es": "¿Y tú? ¿Qué es mejor para ti: el coche, la bici o el transporte público?",
    "ru": "А ты? Что лучше для тебя: машина, велосипед или общественный транспорт?"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-cochebici-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué vendió Raúl su coche?",
    "opciones": [
     "No lo necesita en Madrid",
     "Era muy viejo",
     "Necesitaba dinero"
    ],
    "correcta": "No lo necesita en Madrid",
    "explicacion": "«En mi opinión, en Madrid el coche no es necesario»."
   },
   {
    "id": "LEE-cochebici-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué bici usa Raúl ahora?",
    "opciones": [
     "Las bicis públicas de la ciudad",
     "La bici de Pablo",
     "Una bici muy cara"
    ],
    "correcta": "Las bicis públicas de la ciudad",
    "explicacion": "«Ahora Raúl usa las bicis públicas de la ciudad»."
   },
   {
    "id": "LEE-cochebici-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué necesita Pablo el coche?",
    "opciones": [
     "Trabaja fuera de Madrid y el tren no pasa cerca",
     "Le gusta conducir",
     "Trabaja en el centro"
    ],
    "correcta": "Trabaja fuera de Madrid y el tren no pasa cerca",
    "explicacion": "«…el tren no pasa cerca de la empresa»."
   },
   {
    "id": "LEE-cochebici-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué opina Marta?",
    "opciones": [
     "Depende de la situación",
     "La bici es siempre mejor",
     "El coche es siempre mejor"
    ],
    "correcta": "Depende de la situación",
    "explicacion": "«Depende»."
   },
   {
    "id": "LEE-cochebici-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuál es el objetivo de los cambios en las ciudades?",
    "opciones": [
     "Que haya menos contaminación",
     "Que haya más coches",
     "Que el metro sea más barato"
    ],
    "correcta": "Que haya menos contaminación",
    "explicacion": "«…el objetivo es que haya menos contaminación»."
   },
   {
    "id": "LEE-cochebici-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Marta usa la bici también cuando llueve.",
    "verdadero": false,
    "explicacion": "«…cuando llueve o hace mucho calor, prefiero el metro»."
   },
   {
    "id": "LEE-cochebici-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Что ты предпочитаешь: машину, велосипед или общественный транспорт? Выскажи мнение и приведи аргумент по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "мнение",
       "formas": [
        "en mi opinión",
        "creo que",
        "para mí",
        "pienso que",
        "prefiero"
       ]
      },
      {
       "es": "аргумент",
       "formas": [
        "porque",
        "ya que",
        "además",
        "por eso",
        "aunque"
       ]
      }
     ],
     "modelos": [
      "En mi opinión, el metro es mejor, porque es rápido y barato."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-redes",
  "nivel": "B1",
  "desde": 12,
  "tema": "Общество",
  "titulo": "Las redes sociales",
  "tituloRu": "Социальные сети",
  "parrafos": [
   {
    "es": "Hoy casi todo el mundo está en las redes sociales. Según algunos estudios, los españoles pasan casi dos horas al día en ellas, y los jóvenes, todavía más.",
    "ru": "Сегодня почти все сидят в социальных сетях. Согласно некоторым исследованиям, испанцы проводят в них почти два часа в день, а молодёжь — ещё больше."
   },
   {
    "es": "Las redes tienen ventajas. Son útiles para hablar con amigos que viven lejos, para leer las noticias y para conocer gente nueva. Para Ana son muy importantes, porque gracias a ellas ve las fotos de su familia en Rusia todos los días.",
    "ru": "У соцсетей есть плюсы. Они удобны, чтобы общаться с друзьями, которые живут далеко, читать новости и знакомиться с новыми людьми. Для Ани они очень важны: благодаря им она каждый день видит фотографии своей семьи в России."
   },
   {
    "es": "Pero también tienen desventajas. Mucha gente pasa demasiado tiempo con el móvil y habla menos con las personas que tiene al lado. Además, en internet hay muchas noticias falsas, y no siempre es fácil saber lo que es verdad.",
    "ru": "Но есть и минусы. Многие проводят слишком много времени в телефоне и меньше разговаривают с теми, кто рядом. Кроме того, в интернете много фейковых новостей, и не всегда легко понять, что правда."
   },
   {
    "es": "Otro problema es la privacidad: lo que se publica en internet se queda allí para siempre. Por eso los expertos aconsejan que pensemos bien antes de publicar una foto o un comentario.",
    "ru": "Ещё одна проблема — конфиденциальность: всё, что публикуется в интернете, остаётся там навсегда. Поэтому специалисты советуют хорошо подумать, прежде чем выкладывать фото или комментарий."
   },
   {
    "es": "Las redes también han cambiado el trabajo: hoy muchas empresas buscan trabajadores en internet, y algunas personas ganan dinero publicando vídeos.",
    "ru": "Соцсети изменили и работу: сегодня многие компании ищут сотрудников в интернете, а некоторые люди зарабатывают, публикуя видео."
   },
   {
    "es": "En España se habla mucho de los niños y las redes. Muchos padres creen que los niños no deberían tener móvil antes de los dieciséis años, y en muchos colegios ya no se puede usar el móvil en clase.",
    "ru": "В Испании много говорят о детях и соцсетях. Многие родители считают, что детям не стоит иметь телефон до шестнадцати лет, и во многих школах телефоном на уроках пользоваться уже нельзя."
   },
   {
    "es": "Javier lo tiene claro: el móvil no entra en la mesa. «Cuando comemos, hablamos», dice. Aunque a veces es difícil, cree que es una buena idea, y algunos de sus amigos ya lo hacen también.",
    "ru": "У Хавьера чёткое правило: телефон за стол не берут. «Когда мы едим, мы разговариваем», — говорит он. Хотя иногда это непросто, он считает, что это хорошая идея, и некоторые его друзья уже делают так же."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-redes-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo pasan los españoles en las redes?",
    "opciones": [
     "Casi dos horas al día",
     "Diez minutos al día",
     "Ocho horas al día"
    ],
    "correcta": "Casi dos horas al día",
    "explicacion": "«…pasan casi dos horas al día en ellas»."
   },
   {
    "id": "LEE-redes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué son importantes las redes para Ana?",
    "opciones": [
     "Ve las fotos de su familia",
     "Trabaja en internet",
     "Lee las noticias de España"
    ],
    "correcta": "Ve las fotos de su familia",
    "explicacion": "«…gracias a ellas ve las fotos de su familia en Rusia»."
   },
   {
    "id": "LEE-redes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué desventaja tienen las redes?",
    "opciones": [
     "Hay muchas noticias falsas",
     "Son muy caras",
     "No hay fotos"
    ],
    "correcta": "Hay muchas noticias falsas",
    "explicacion": "«…en internet hay muchas noticias falsas»."
   },
   {
    "id": "LEE-redes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué aconsejan los expertos?",
    "opciones": [
     "Pensar bien antes de publicar",
     "No usar nunca internet",
     "Publicar muchas fotos"
    ],
    "correcta": "Pensar bien antes de publicar",
    "explicacion": "«…aconsejan que pensemos bien antes de publicar»."
   },
   {
    "id": "LEE-redes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En muchos colegios españoles se puede usar el móvil en clase.",
    "verdadero": false,
    "explicacion": "«…en muchos colegios ya no se puede usar el móvil en clase»."
   },
   {
    "id": "LEE-redes-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuál es la regla de Javier?",
    "opciones": [
     "El móvil no entra en la mesa",
     "No tener redes sociales",
     "No ver la televisión"
    ],
    "correcta": "El móvil no entra en la mesa",
    "explicacion": "«…el móvil no entra en la mesa»."
   }
  ]
 },
 {
  "id": "LEE-reciclar",
  "nivel": "B1",
  "desde": 12,
  "tema": "Экология",
  "titulo": "Reciclar en casa",
  "tituloRu": "Сортировка мусора дома",
  "parrafos": [
   {
    "es": "En España la basura se separa en contenedores de colores. Al principio a Ana le parecía difícil, pero ahora lo hace todos los días sin pensar.",
    "ru": "В Испании мусор сортируют и раскладывают по контейнерам разных цветов. Сначала Ане это казалось сложным, но теперь она делает это каждый день не задумываясь."
   },
   {
    "es": "El contenedor amarillo es para el plástico y las latas. El azul es para el papel y las cajas.",
    "ru": "Жёлтый контейнер — для пластика и банок. Синий — для бумаги и коробок."
   },
   {
    "es": "El verde es para el vidrio: las botellas de vino, de cerveza o de aceite. El marrón es para los restos de comida, y en el gris va todo lo demás.",
    "ru": "Зелёный — для стекла: бутылок из-под вина, пива или масла. Коричневый — для остатков еды, а в серый идёт всё остальное."
   },
   {
    "es": "Las botellas de vidrio que se reciclan sirven para hacer botellas nuevas, una y otra vez. Y en algunos barrios de Barcelona la basura ya no se deja en la calle: cada día se recoge un tipo de basura en la puerta de las casas.",
    "ru": "Из переработанного стекла снова и снова делают новые бутылки. А в некоторых районах Барселоны мусор уже не оставляют на улице: каждый день у дверей домов забирают определённый вид отходов."
   },
   {
    "es": "Hay cosas que no van en ningún contenedor de la calle: las pilas, los muebles viejos o los aparatos electrónicos. Para eso hay puntos limpios, donde se recogen y se reciclan.",
    "ru": "Есть вещи, которые нельзя выбрасывать ни в один уличный контейнер: батарейки, старую мебель или электронику. Для этого есть специальные пункты приёма, где их собирают и перерабатывают."
   },
   {
    "es": "Según los datos oficiales, en España se recicla cada año más, pero todavía no es bastante: se recicla menos de la mitad de la basura de las casas.",
    "ru": "По официальным данным, в Испании с каждым годом перерабатывают всё больше отходов, но этого всё ещё недостаточно: перерабатывается меньше половины бытового мусора."
   },
   {
    "es": "Ana cree que reciclar es muy importante para el medio ambiente. «Es fácil y no cuesta nada», dice. «Si todos lo hacemos, el planeta estará un poco mejor».",
    "ru": "Аня считает, что переработка отходов очень важна для окружающей среды. «Это просто и ничего не стоит, — говорит она. — Если мы все будем так делать, планете станет немного лучше»."
   },
   {
    "es": "Lo que más le cuesta es no usar bolsas de plástico. Como en las tiendas las bolsas se pagan, ahora siempre lleva una bolsa de tela en la mochila.",
    "ru": "Труднее всего ей отказаться от пластиковых пакетов. Поскольку в магазинах пакеты платные, теперь она всегда носит в рюкзаке тканевую сумку."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-reciclar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Para qué es el contenedor amarillo?",
    "opciones": [
     "Para el plástico y las latas",
     "Para el papel",
     "Para el vidrio"
    ],
    "correcta": "Para el plástico y las latas",
    "explicacion": "«El contenedor amarillo es para el plástico y las latas»."
   },
   {
    "id": "LEE-reciclar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde van las botellas de vino?",
    "opciones": [
     "En el verde",
     "En el azul",
     "En el marrón"
    ],
    "correcta": "En el verde",
    "explicacion": "«El verde es para el vidrio: las botellas de vino…»."
   },
   {
    "id": "LEE-reciclar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde se llevan las pilas?",
    "opciones": [
     "A un punto limpio",
     "Al contenedor gris",
     "Al supermercado"
    ],
    "correcta": "A un punto limpio",
    "explicacion": "«Para eso hay puntos limpios»."
   },
   {
    "id": "LEE-reciclar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En España se recicla más de la mitad de la basura de las casas.",
    "verdadero": false,
    "explicacion": "«…se recicla menos de la mitad de la basura de las casas»."
   },
   {
    "id": "LEE-reciclar-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le cuesta más a Ana?",
    "opciones": [
     "No usar bolsas de plástico",
     "Separar el papel",
     "Bajar la basura"
    ],
    "correcta": "No usar bolsas de plástico",
    "explicacion": "«Lo que más le cuesta es no usar bolsas de plástico»."
   },
   {
    "id": "LEE-reciclar-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué lleva Ana una bolsa de tela?",
    "opciones": [
     "Porque las bolsas se pagan",
     "Porque es más bonita",
     "Porque no hay bolsas"
    ],
    "correcta": "Porque las bolsas se pagan",
    "explicacion": "«Como en las tiendas las bolsas se pagan…»."
   }
  ]
 },
 {
  "id": "LEE-turismo",
  "nivel": "B1",
  "desde": 12,
  "tema": "Общество",
  "titulo": "El turismo en Barcelona",
  "tituloRu": "Туризм в Барселоне",
  "parrafos": [
   {
    "es": "Barcelona es una de las ciudades con más turistas de Europa: cada año llegan más de diez millones de visitantes. El turismo es muy importante para la ciudad, pero también trae problemas.",
    "ru": "Барселона — один из самых туристических городов Европы: каждый год сюда приезжают больше десяти миллионов человек. Туризм очень важен для города, но он приносит и проблемы."
   },
   {
    "es": "Por un lado, los turistas dejan mucho dinero en hoteles, restaurantes y tiendas. Gracias a ellos, miles de personas tienen trabajo. Pero muchos turistas llegan en grandes barcos y pasan solo unas horas en la ciudad.",
    "ru": "С одной стороны, туристы оставляют много денег в гостиницах, ресторанах и магазинах. Благодаря им тысячи людей работают в сфере туризма. Но многие туристы прибывают на больших круизных лайнерах и проводят в городе всего несколько часов."
   },
   {
    "es": "Por otro lado, muchos vecinos están hartos. En el centro y en zonas como la Sagrada Familia o el parque Güell hay tanta gente que es difícil caminar. Además, muchos pisos se alquilan a turistas, y por eso los alquileres para los vecinos han subido mucho.",
    "ru": "С другой стороны, многим жителям это надоело. В центре и в таких местах, как Саграда Фамилия или парк Гуэль, столько людей, что трудно пройти. Кроме того, многие квартиры сдают туристам, и поэтому аренда для местных жителей сильно подорожала."
   },
   {
    "es": "Por eso el ayuntamiento ha tomado varias medidas. Los turistas pagan un impuesto más alto por cada noche de hotel, y la ciudad ha decidido que los pisos para turistas desaparezcan antes de 2029.",
    "ru": "Поэтому мэрия приняла ряд мер. Туристы платят более высокий налог за каждую ночь в гостинице, а город решил, что к 2029 году в нём не должно остаться квартир, сдаваемых туристам."
   },
   {
    "es": "En el verano de 2024 miles de vecinos salieron a la calle para protestar contra el turismo masivo. Algunos llevaban carteles con frases como «Turistas, volved a casa». No están en contra de los turistas, dicen, sino de que la ciudad sea solo para ellos.",
    "ru": "Летом 2024 года тысячи жителей вышли на улицы протестовать против массового туризма. У некоторых были плакаты с надписями вроде «Туристы, возвращайтесь домой». Они говорят, что выступают не против туристов, а против того, чтобы город был только для них."
   },
   {
    "es": "Lucía lo ve así: «Me gusta que la gente venga a conocer mi ciudad. Pero es necesario que Barcelona sea una ciudad para vivir, no solo para visitar». Pablo, que vive en Madrid, dice que en el centro de su ciudad pasa lo mismo.",
    "ru": "Лусия смотрит на это так: «Мне нравится, что люди приезжают посмотреть мой город. Но нужно, чтобы Барселона была городом для жизни, а не только для туристов». Пабло, который живёт в Мадриде, говорит, что в центре его города происходит то же самое."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-turismo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos visitantes llegan a Barcelona cada año?",
    "opciones": [
     "Más de diez millones",
     "Un millón",
     "Cien mil"
    ],
    "correcta": "Más de diez millones",
    "explicacion": "«…cada año llegan más de diez millones de visitantes»."
   },
   {
    "id": "LEE-turismo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ventaja tiene el turismo?",
    "opciones": [
     "Da trabajo a miles de personas",
     "Baja los precios",
     "Hay menos gente en el centro"
    ],
    "correcta": "Da trabajo a miles de personas",
    "explicacion": "«Gracias a ellos, miles de personas tienen trabajo»."
   },
   {
    "id": "LEE-turismo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué han subido los alquileres?",
    "opciones": [
     "Muchos pisos se alquilan a turistas",
     "Hay más vecinos",
     "Los pisos son nuevos"
    ],
    "correcta": "Muchos pisos se alquilan a turistas",
    "explicacion": "«…muchos pisos se alquilan a turistas, y por eso los alquileres… han subido mucho»."
   },
   {
    "id": "LEE-turismo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ha decidido el ayuntamiento?",
    "opciones": [
     "Que desaparezcan los pisos para turistas",
     "Cerrar los hoteles",
     "Bajar los impuestos"
    ],
    "correcta": "Que desaparezcan los pisos para turistas",
    "explicacion": "«…la ciudad ha decidido que los pisos para turistas desaparezcan antes de 2029»."
   },
   {
    "id": "LEE-turismo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Los vecinos que protestaron están en contra de todos los turistas.",
    "verdadero": false,
    "explicacion": "«No están en contra de los turistas… sino de que la ciudad sea solo para ellos»."
   },
   {
    "id": "LEE-turismo-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Что ты думаешь о массовом туризме? Напиши мнение с аргументами «за» и «против».",
    "sit": {
     "necesita": [
      {
       "es": "за",
       "formas": [
        "por un lado",
        "es bueno",
        "gracias a",
        "ventaja"
       ]
      },
      {
       "es": "против",
       "formas": [
        "por otro lado",
        "pero",
        "sin embargo",
        "aunque",
        "desventaja",
        "problema"
       ]
      }
     ],
     "modelos": [
      "Por un lado, el turismo da trabajo. Por otro lado, los pisos son cada vez más caros."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-camino",
  "nivel": "B1",
  "desde": 13,
  "tema": "Путешествия",
  "titulo": "El Camino de Santiago",
  "tituloRu": "Путь Святого Иакова",
  "parrafos": [
   {
    "es": "El Camino de Santiago es un camino muy antiguo que termina en Santiago de Compostela, en Galicia. Cada año lo hacen más de cuatrocientas mil personas de todo el mundo, a pie o en bici.",
    "ru": "Путь Святого Иакова — очень древний маршрут, который заканчивается в Сантьяго-де-Компостела, в Галисии. Каждый год его проходят больше четырёхсот тысяч человек со всего мира — пешком или на велосипеде."
   },
   {
    "es": "El Camino tiene más de mil años. Según la tradición, en Santiago está la tumba de un santo muy importante para los cristianos, y por eso en la Edad Media miles de personas iban allí a pie desde toda Europa.",
    "ru": "Этому пути больше тысячи лет. По преданию, в Сантьяго находится могила святого, очень почитаемого христианами, и поэтому в Средние века тысячи людей шли туда пешком со всей Европы."
   },
   {
    "es": "Hoy hay muchos caminos, pero el más famoso es el Camino Francés. Para no perderse, solo hay que seguir las flechas amarillas. Y para recibir la Compostela, el documento que dice que has hecho el Camino, hay que caminar por lo menos los últimos cien kilómetros.",
    "ru": "Сегодня маршрутов много, но самый известный — Французский путь. Чтобы не заблудиться, достаточно следовать жёлтым стрелкам. А чтобы получить «Компостелу» — документ, подтверждающий, что ты прошёл Путь, — нужно пройти пешком как минимум последние сто километров."
   },
   {
    "es": "El verano pasado Javier hizo los últimos cien kilómetros con un amigo. Caminaron cinco días, unos veinte kilómetros al día.",
    "ru": "Прошлым летом Хавьер прошёл последние сто километров с другом. Они шли пять дней, примерно по двадцать километров в день."
   },
   {
    "es": "«Nunca había caminado tanto», cuenta. «El segundo día me dolían tanto los pies que pensé en volver a casa. Pero mi amigo me echó una mano y seguimos».",
    "ru": "«Я никогда раньше столько не ходил, — рассказывает он. — На второй день у меня так болели ноги, что я подумывал вернуться домой. Но друг меня поддержал, и мы пошли дальше»."
   },
   {
    "es": "Por la noche dormían en hoteles pequeños y baratos, donde conocieron a gente de muchos países. «Una chica de Corea me dijo que había venido sola y que era su tercer Camino. ¡No me lo podía creer!».",
    "ru": "По ночам они спали в маленьких дешёвых гостиницах и познакомились там с людьми из многих стран. «Одна девушка из Кореи сказала мне, что пришла одна и что это её третий Путь. Я не мог поверить!»."
   },
   {
    "es": "Cuando por fin llegaron a Santiago, Javier estaba muy emocionado. «Fue una de las experiencias más bonitas de mi vida. Me di cuenta de que había aprendido mucho sobre mí mismo».",
    "ru": "Когда они наконец пришли в Сантьяго, Хавьер был очень взволнован. «Это было одно из самых прекрасных впечатлений в моей жизни. Я понял, что многое узнал о себе»."
   },
   {
    "es": "Ahora quiere volver y hacer el Camino entero: ochocientos kilómetros desde Francia.",
    "ru": "Теперь он хочет вернуться и пройти весь Путь: восемьсот километров от Франции."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-camino-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde termina el Camino?",
    "opciones": [
     "En Santiago de Compostela",
     "En Madrid",
     "En Francia"
    ],
    "correcta": "En Santiago de Compostela",
    "explicacion": "«…termina en Santiago de Compostela, en Galicia»."
   },
   {
    "id": "LEE-camino-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos días caminó Javier?",
    "opciones": [
     "Cinco",
     "Veinte",
     "Cien"
    ],
    "correcta": "Cinco",
    "explicacion": "«Caminaron cinco días»."
   },
   {
    "id": "LEE-camino-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le pasó el segundo día?",
    "opciones": [
     "Le dolían mucho los pies",
     "Se perdió",
     "Perdió a su amigo"
    ],
    "correcta": "Le dolían mucho los pies",
    "explicacion": "«El segundo día me dolían tanto los pies…»."
   },
   {
    "id": "LEE-camino-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "La chica de Corea hacía el Camino por primera vez.",
    "verdadero": false,
    "explicacion": "«…me dijo que… era su tercer Camino»."
   },
   {
    "id": "LEE-camino-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo se sintió Javier al llegar?",
    "opciones": [
     "Muy emocionado",
     "Muy aburrido",
     "Enfadado"
    ],
    "correcta": "Muy emocionado",
    "explicacion": "«Javier estaba muy emocionado»."
   },
   {
    "id": "LEE-camino-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay que hacer para recibir la Compostela?",
    "opciones": [
     "Caminar por lo menos cien kilómetros",
     "Caminar ochocientos kilómetros",
     "Ir en coche"
    ],
    "correcta": "Caminar por lo menos cien kilómetros",
    "explicacion": "«…hay que caminar por lo menos los últimos cien kilómetros»."
   },
   {
    "id": "LEE-camino-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué quiere hacer ahora?",
    "opciones": [
     "Hacer el Camino entero",
     "Vivir en Galicia",
     "No caminar más"
    ],
    "correcta": "Hacer el Camino entero",
    "explicacion": "«Ahora quiere volver y hacer el Camino entero»."
   }
  ]
 },
 {
  "id": "LEE-fiestas",
  "nivel": "B1",
  "desde": 13,
  "tema": "Испанская культура",
  "titulo": "Las fiestas de España",
  "tituloRu": "Праздники Испании",
  "parrafos": [
   {
    "es": "En España hay fiestas durante todo el año, y cada pueblo y cada ciudad tiene las suyas. Algunas son famosas en todo el mundo.",
    "ru": "В Испании праздники отмечают круглый год, и у каждой деревни и каждого города есть свои праздники. Некоторые из них известны во всём мире."
   },
   {
    "es": "En marzo, en Valencia, se celebran las Fallas. Durante varios días hay por las calles enormes muñecos de madera y papel, algunos tan altos como un edificio. La noche del 19 de marzo todos desaparecen en el fuego. «La primera vez que lo vi, no me lo podía creer», recuerda Marta.",
    "ru": "В марте в Валенсии празднуют Фальяс. Несколько дней на улицах стоят огромные фигуры из дерева и папье-маше, некоторые высотой с дом. В ночь на 19 марта их все сжигают. «Когда я впервые это увидела, не могла поверить», — вспоминает Марта."
   },
   {
    "es": "En marzo o en abril, según el año, llega la Semana Santa. En muchas ciudades, sobre todo en Andalucía, hay desfiles religiosos por las calles durante toda la semana.",
    "ru": "В марте или апреле, в зависимости от года, наступает Страстная неделя. Во многих городах, особенно в Андалусии, всю неделю по улицам идут религиозные шествия."
   },
   {
    "es": "Después, normalmente en abril, Sevilla celebra su Feria: durante una semana entera la gente baila, come y bebe hasta muy tarde.",
    "ru": "Затем, обычно в апреле, в Севилье проходит ярмарка: целую неделю люди танцуют, едят и пьют до поздней ночи."
   },
   {
    "es": "La noche del 23 de junio es la de San Juan. En Cataluña y en otras regiones la gente hace fuegos en la playa y celebra la llegada del verano hasta la mañana.",
    "ru": "Ночь на 24 июня — ночь Сан-Хуана. В Каталонии и других регионах люди жгут костры на пляже и до утра празднуют приход лета."
   },
   {
    "es": "En julio, en Pamplona, son los Sanfermines. Es una semana de fiesta, de día y de noche, y es famosa en todo el mundo. Pero una parte de la fiesta es peligrosa.",
    "ru": "В июле в Памплоне проходит праздник Сан-Фермин. Это неделя гуляний днём и ночью, известная во всём мире. Но одна из частей праздника опасна (бег с быками)."
   },
   {
    "es": "Y en diciembre llegan la Navidad y la Nochevieja, y el 6 de enero, los Reyes.",
    "ru": "А в декабре наступают Рождество и Новогодняя ночь, а 6 января — праздник Трёх королей."
   },
   {
    "es": "Ana ya ha estado en las Fallas y le encantaron. Este año quiere ir a la Feria de Sevilla. «Lucía dice que es lo más alegre que ha visto nunca», cuenta.",
    "ru": "Аня уже была на Фальяс, и ей очень понравилось. В этом году она хочет поехать на Севильскую ярмарку. «Лусия говорит, что ничего веселее она в жизни не видела», — рассказывает она."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-fiestas-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde se celebran las Fallas?",
    "opciones": [
     "En Valencia",
     "En Sevilla",
     "En Pamplona"
    ],
    "correcta": "En Valencia",
    "explicacion": "«En marzo, en Valencia, se celebran las Fallas»."
   },
   {
    "id": "LEE-fiestas-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pasa la noche del 19 de marzo en Valencia?",
    "opciones": [
     "Los muñecos desaparecen en el fuego",
     "Llegan los Reyes",
     "Empieza la Feria"
    ],
    "correcta": "Los muñecos desaparecen en el fuego",
    "explicacion": "«La noche del 19 de marzo todos desaparecen en el fuego»."
   },
   {
    "id": "LEE-fiestas-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo dura la Feria de Sevilla?",
    "opciones": [
     "Una semana",
     "Un día",
     "Un mes"
    ],
    "correcta": "Una semana",
    "explicacion": "«…durante una semana entera»."
   },
   {
    "id": "LEE-fiestas-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Los Sanfermines no tienen nada peligroso.",
    "verdadero": false,
    "explicacion": "«Pero una parte de la fiesta es peligrosa»."
   },
   {
    "id": "LEE-fiestas-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Adónde quiere ir Ana este año?",
    "opciones": [
     "A la Feria de Sevilla",
     "A las Fallas",
     "A Pamplona"
    ],
    "correcta": "A la Feria de Sevilla",
    "explicacion": "«Este año quiere ir a la Feria de Sevilla»."
   },
   {
    "id": "LEE-fiestas-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Какой праздник ты хотел бы увидеть в Испании? Почему? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "праздник",
       "formas": [
        "me gustaría",
        "quiero",
        "quisiera",
        "me encantaría"
       ]
      },
      {
       "es": "почему",
       "formas": [
        "porque",
        "ya que",
        "como"
       ]
      }
     ],
     "modelos": [
      "Me gustaría ver las Fallas, porque me encanta la música en la calle."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-primerano",
  "nivel": "B1",
  "desde": 13,
  "tema": "Жизнь в Испании",
  "titulo": "Mi primer año en España",
  "tituloRu": "Мой первый год в Испании",
  "parrafos": [
   {
    "es": "Hace un año que Ana llegó a Barcelona. Le hemos preguntado cómo ha sido.",
    "ru": "Год назад Аня приехала в Барселону. Мы спросили её, как всё было."
   },
   {
    "es": "«Al principio fue duro. Nunca había vivido sola y no conocía a nadie. Además, la gente hablaba muy alto y sin parar, y yo no entendía casi nada. A veces me sentía muy sola y echaba de menos a mi familia».",
    "ru": "«Сначала было тяжело. Я никогда раньше не жила одна и никого не знала. К тому же люди говорили громко и без остановки, и я почти ничего не понимала. Иногда мне было очень одиноко, и я скучала по семье»."
   },
   {
    "es": "«Por suerte, el primer día conocí a Lucía. Me dijo que me ayudaría con todo, y lo hizo. Me echó una mano con el piso, con los papeles y con el idioma».",
    "ru": "«К счастью, в первый же день я познакомилась с Лусией. Она сказала, что поможет мне во всём, — и помогла. Она помогла мне с квартирой, с документами и с языком»."
   },
   {
    "es": "«Con el idioma cometí muchos errores. Una vez, en el ayuntamiento, me preguntaron por mi familia y yo dije mi apellido, porque en ruso la palabra que suena como “familia” significa “apellido”. ¡La funcionaria no entendía nada! Ahora me río, pero en ese momento me dio mucha vergüenza».",
    "ru": "«Я часто ошибалась, когда говорила по-испански. Однажды в мэрии меня спросили о моей семье (familia), а я назвала свою фамилию — ведь русское слово „фамилия“ похоже на испанское familia, но означает apellido. Сотрудница ничего не поняла! Сейчас мне смешно, но тогда мне было очень стыдно»."
   },
   {
    "es": "«También fue difícil acostumbrarme al horario. En Rusia cenaba a las siete; aquí la gente cena a las diez. ¡Al principio tenía mucha hambre!».",
    "ru": "«Ещё было трудно привыкнуть к распорядку. В России я ужинала в семь, а здесь люди ужинают в десять. Сначала я очень хотела есть!»."
   },
   {
    "es": "«Otra cosa que me sorprendió fueron los dos besos. En Rusia no saludamos así a una persona que acabamos de conocer. Al principio me ponía nerviosa, pero ahora lo hago sin pensar. Y cuando vuelvo a Moscú, ¡a veces quiero dar dos besos a todo el mundo!».",
    "ru": "«Ещё меня удивили два поцелуя при встрече. В России так не здороваются с человеком, с которым только что познакомились. Сначала я нервничала, а теперь делаю это не задумываясь. А когда приезжаю в Москву, мне иногда хочется расцеловать всех подряд!»."
   },
   {
    "es": "«Ahora me siento en casa. Tengo amigos, me he integrado en el barrio y hablo español todos los días. Todavía tengo acento, claro, pero ya no me da vergüenza hablar».",
    "ru": "«Теперь я чувствую себя как дома. У меня есть друзья, я освоилась в районе и говорю по-испански каждый день. Акцент у меня, конечно, ещё есть, но говорить мне уже не стыдно»."
   },
   {
    "es": "¿Y el futuro? «Me gustaría quedarme aquí. Cuando tenga el carné de conducir, quiero conocer toda España».",
    "ru": "А будущее? «Я бы хотела остаться здесь. Когда получу права, хочу объездить всю Испанию»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-primerano-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo lleva Ana en Barcelona?",
    "opciones": [
     "Un año",
     "Un mes",
     "Cinco años"
    ],
    "correcta": "Un año",
    "explicacion": "«Hace un año que Ana llegó a Barcelona»."
   },
   {
    "id": "LEE-primerano-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le dijo Lucía el primer día?",
    "opciones": [
     "Que la ayudaría con todo",
     "Que no tenía tiempo",
     "Que volviera a Rusia"
    ],
    "correcta": "Que la ayudaría con todo",
    "explicacion": "«Me dijo que me ayudaría con todo»."
   },
   {
    "id": "LEE-primerano-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué fue difícil al principio?",
    "opciones": [
     "El horario de las comidas",
     "El tiempo",
     "El metro"
    ],
    "correcta": "El horario de las comidas",
    "explicacion": "«…fue difícil acostumbrarme al horario»."
   },
   {
    "id": "LEE-primerano-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué error cometió Ana en el ayuntamiento?",
    "opciones": [
     "Confundió «familia» con «apellido»",
     "Olvidó su pasaporte",
     "Habló en inglés"
    ],
    "correcta": "Confundió «familia» con «apellido»",
    "explicacion": "«…me preguntaron por mi familia y yo dije mi apellido»."
   },
   {
    "id": "LEE-primerano-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le sorprendió a Ana?",
    "opciones": [
     "Los dos besos al saludar",
     "Los precios",
     "El metro"
    ],
    "correcta": "Los dos besos al saludar",
    "explicacion": "«Otra cosa que me sorprendió fueron los dos besos»."
   },
   {
    "id": "LEE-primerano-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana todavía tiene vergüenza al hablar.",
    "verdadero": false,
    "explicacion": "«…ya no me da vergüenza hablar»."
   },
   {
    "id": "LEE-primerano-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué quiere hacer cuando tenga el carné?",
    "opciones": [
     "Conocer toda España",
     "Volver a Rusia",
     "Comprar un piso"
    ],
    "correcta": "Conocer toda España",
    "explicacion": "«…quiero conocer toda España»."
   },
   {
    "id": "LEE-primerano-8",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Как прошёл твой первый месяц в новом месте? Расскажи по-испански (al principio…, ahora…).",
    "sit": {
     "necesita": [
      {
       "es": "вначале",
       "formas": [
        "al principio",
        "antes",
        "el primer",
        "nunca había"
       ]
      },
      {
       "es": "сейчас",
       "formas": [
        "ahora",
        "hoy",
        "ya"
       ]
      }
     ],
     "modelos": [
      "Al principio fue difícil, pero ahora me siento en casa."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-ciudadpueblo",
  "nivel": "B1",
  "desde": 13,
  "tema": "Мнения",
  "titulo": "¿Ciudad o pueblo?",
  "tituloRu": "Город или деревня?",
  "parrafos": [
   {
    "es": "Cada vez más españoles se van de las grandes ciudades a vivir a un pueblo. Pero todavía no son muchos: en España hay miles de pueblos que se están quedando vacíos: en más de la mitad viven menos de mil personas. Por eso algunos ofrecen casas baratas o ayudas para que lleguen familias jóvenes. Hemos hablado con dos personas que han tomado decisiones muy diferentes.",
    "ru": "Всё больше испанцев уезжают из больших городов жить в деревню. Но их пока немного: в Испании тысячи деревень пустеют: больше чем в половине из них живёт меньше тысячи человек. Поэтому некоторые предлагают дешёвое жильё или помощь, чтобы туда приезжали молодые семьи. Мы поговорили с двумя людьми, которые приняли совсем разные решения."
   },
   {
    "es": "Carlos, un amigo de Pablo, se fue de Madrid hace dos años. «Estaba agobiado: trabajaba diez horas al día y tardaba una hora en llegar a la oficina. Ahora trabajo desde casa, en un pueblo en la montaña. Tengo menos estrés, el aire es limpio y conozco a todos mis vecinos. Ahora tengo un huerto y por las mañanas salgo a caminar con el perro».",
    "ru": "Карлос, друг Пабло, уехал из Мадрида два года назад. «Я был измотан: работал по десять часов в день и час добирался до офиса. Теперь я работаю из дома, в деревне в горах. У меня меньше стресса, я дышу чистым воздухом и знаю всех соседей. Теперь у меня есть огород, а по утрам я гуляю с собакой»."
   },
   {
    "es": "Pero reconoce que no todo es perfecto: «En el pueblo no hay cine y no hay hospital, y el autobús pasa solo dos veces al día. Si necesito algo, tengo que coger el coche y conducir media hora».",
    "ru": "Но он признаёт, что не всё идеально: «В деревне нет ни кинотеатра, ни больницы, а автобус ходит всего два раза в день. Если что-то нужно, приходится садиться в машину и ехать полчаса»."
   },
   {
    "es": "Lucía piensa lo contrario. «Yo crecí en un pueblo cerca de Madrid y, cuando terminé la universidad, me vine a Barcelona. Y no vuelvo al pueblo: aquí lo tengo todo. En la ciudad hay de todo: trabajo, cultura, gente de todo el mundo. Nunca me aburro.».",
    "ru": "Лусия думает иначе. «Я выросла в деревне под Мадридом, а после университета переехала в Барселону. И в деревню не вернусь: здесь у меня есть всё. В городе есть всё: работа, культура, люди со всего мира. Мне никогда не скучно»."
   },
   {
    "es": "Eso sí, admite que la vida en Barcelona es cara y que a veces echa de menos el silencio.",
    "ru": "Правда, она признаёт, что жизнь в Барселоне дорогая и что иногда ей не хватает тишины."
   },
   {
    "es": "Al final, los dos están de acuerdo en una cosa: «Depende de cada persona y de cada etapa de la vida».",
    "ru": "В итоге оба согласны в одном: «Всё зависит от человека и от этапа жизни»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-ciudadpueblo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué se fue Carlos de Madrid?",
    "opciones": [
     "Estaba agobiado",
     "Perdió su trabajo",
     "Se casó"
    ],
    "correcta": "Estaba agobiado",
    "explicacion": "«Estaba agobiado»."
   },
   {
    "id": "LEE-ciudadpueblo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde trabaja Carlos ahora?",
    "opciones": [
     "Desde casa",
     "En una oficina de Madrid",
     "En un hospital"
    ],
    "correcta": "Desde casa",
    "explicacion": "«Ahora trabajo desde casa»."
   },
   {
    "id": "LEE-ciudadpueblo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tiene el pueblo?",
    "opciones": [
     "El autobús pasa poco",
     "Hay mucho ruido",
     "Es muy caro"
    ],
    "correcta": "El autobús pasa poco",
    "explicacion": "«…el autobús pasa solo dos veces al día»."
   },
   {
    "id": "LEE-ciudadpueblo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ofrecen algunos pueblos?",
    "opciones": [
     "Casas baratas o ayudas",
     "Trabajo en la ciudad",
     "Más autobuses"
    ],
    "correcta": "Casas baratas o ayudas",
    "explicacion": "«…algunos ofrecen casas baratas o ayudas para que lleguen familias jóvenes»."
   },
   {
    "id": "LEE-ciudadpueblo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Lucía creció en Barcelona.",
    "verdadero": false,
    "explicacion": "«Yo crecí en un pueblo cerca de Madrid»."
   },
   {
    "id": "LEE-ciudadpueblo-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué echa de menos Lucía a veces?",
    "opciones": [
     "El silencio",
     "A sus vecinos",
     "El trabajo"
    ],
    "correcta": "El silencio",
    "explicacion": "«…a veces echa de menos el silencio»."
   },
   {
    "id": "LEE-ciudadpueblo-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А ты где бы предпочёл жить: в городе или в деревне? Ответь по-испански и объясни почему.",
    "sit": {
     "necesita": [
      {
       "es": "выбор",
       "formas": [
        "prefiero",
        "me gustaría",
        "en la ciudad",
        "en un pueblo",
        "en el campo"
       ]
      },
      {
       "es": "почему",
       "formas": [
        "porque",
        "ya que",
        "por eso",
        "aunque"
       ]
      }
     ],
     "modelos": [
      "Prefiero la ciudad, porque hay más trabajo, aunque es más cara."
     ]
    }
   }
  ]
 }
];

function lecturaEsById(id) { return LECTURAS_ES.find(l => l.id === id) || null; }
window.LECTURAS_ES = LECTURAS_ES;
window.lecturaEsById = lecturaEsById;
