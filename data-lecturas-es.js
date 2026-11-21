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
    "es": "Soy enfermera, pero ahora soy estudiante de español. Vivo en Barcelona.",
    "ru": "Я медсестра, но сейчас я студентка, учу испанский. Живу в Барселоне."
   },
   {
    "es": "Hablo ruso, inglés y un poco de español.",
    "ru": "Я говорю по-русски, по-английски и немного по-испански."
   },
   {
    "es": "¿Y tú? ¿Cómo te llamas? ¿De dónde eres?",
    "ru": "А ты? Как тебя зовут? Откуда ты?"
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
     "Enfermera",
     "Profesora",
     "Camarera"
    ],
    "correcta": "Enfermera",
    "explicacion": "«Soy enfermera»."
   },
   {
    "id": "LEE-perfil-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ana habla muy bien español.",
    "verdadero": false,
    "explicacion": "«Hablo… un poco de español»: только немного."
   },
   {
    "id": "LEE-perfil-5",
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
    "es": "Los estudiantes son de muchos países.",
    "ru": "Студенты из многих стран."
   },
   {
    "es": "Ana es rusa. Tom es inglés y es ingeniero. Li es china y es médica.",
    "ru": "Аня — русская. Том — англичанин, он инженер. Ли — китаянка, она врач."
   },
   {
    "es": "Todos tienen un libro nuevo.",
    "ru": "У всех новый учебник."
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
     "Pablo"
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
    "forma": "vf",
    "afirmacion": "Li es médica.",
    "verdadero": true,
    "explicacion": "«Li es china y es médica»."
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
    "es": "Me llamo Lucía y soy de Barcelona. Tengo veinticinco años.",
    "ru": "Меня зовут Лусия, я из Барселоны. Мне двадцать пять лет."
   },
   {
    "es": "Mi padre se llama Jorge y es profesor. Mi madre, Carmen, es médica.",
    "ru": "Моего папу зовут Хорхе, он учитель. Мою маму, Кармен, — врач."
   },
   {
    "es": "Tengo un hermano: Pablo. Tiene treinta años y vive en Madrid.",
    "ru": "У меня есть брат — Пабло. Ему тридцать лет, и он живёт в Мадриде."
   },
   {
    "es": "Su novia es Marta. Es argentina.",
    "ru": "Его девушка — Марта. Она аргентинка."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-familia-1",
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
    "id": "LEE-familia-2",
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
    "id": "LEE-familia-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Откуда Марта?",
    "opciones": [
     "De Argentina",
     "De España",
     "De Rusia"
    ],
    "correcta": "De Argentina",
    "explicacion": "«Es argentina»."
   },
   {
    "id": "LEE-familia-4",
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
  "titulo": "Un correo de Pablo",
  "tituloRu": "Письмо от Пабло",
  "parrafos": [
   {
    "es": "¡Hola, Ana! Soy Pablo, el hermano de Lucía.",
    "ru": "Привет, Аня! Я Пабло, брат Лусии."
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
    "es": "¡Hasta luego!",
    "ru": "Пока!"
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
    "id": "LEE-mensaje-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Pablo es de Moscú.",
    "verdadero": false,
    "explicacion": "Pablo — брат Лусии, испанец."
   },
   {
    "id": "LEE-mensaje-4",
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
    "es": "Vivo en un piso pequeño en el centro de Barcelona. Está en el tercero.",
    "ru": "Я живу в маленькой квартире в центре Барселоны. Она на четвёртом этаже."
   },
   {
    "es": "El piso tiene dos habitaciones, una cocina y un baño. El salón es pequeño, pero muy bonito.",
    "ru": "В квартире две комнаты, кухня и ванная. Гостиная маленькая, но очень красивая."
   },
   {
    "es": "En mi habitación hay una cama, una mesa, una estantería y muchos libros.",
    "ru": "В моей комнате кровать, стол и стеллаж и много книг."
   },
   {
    "es": "La cocina es vieja, pero la nevera es nueva. ¡Mi piso es muy bonito!",
    "ru": "Кухня старая, но холодильник новый. Моя квартира очень красивая!"
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
     "En el centro",
     "Lejos del centro",
     "En Madrid"
    ],
    "correcta": "En el centro",
    "explicacion": "«…en el centro de Barcelona»."
   },
   {
    "id": "LEE-piso-2",
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
    "id": "LEE-piso-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "La cocina es nueva.",
    "verdadero": false,
    "explicacion": "«La cocina es vieja»."
   },
   {
    "id": "LEE-piso-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что новое на кухне?",
    "opciones": [
     "La nevera",
     "La mesa",
     "La cama"
    ],
    "correcta": "La nevera",
    "explicacion": "«…la nevera es nueva»."
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
    "es": "Piso en el barrio de Gràcia.",
    "ru": "Квартира в районе Грасия."
   },
   {
    "es": "Tiene tres habitaciones, un salón grande, una cocina, una lavadora y dos baños.",
    "ru": "В ней три комнаты, большая гостиная, кухня, стиральная машина и две ванные."
   },
   {
    "es": "Está en el segundo y tiene un balcón muy bonito.",
    "ru": "Она на третьем этаже, и у неё очень красивый балкон."
   },
   {
    "es": "Cerca hay una parada de autobús, un supermercado y un parque.",
    "ru": "Рядом автобусная остановка, супермаркет и парк."
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
    "pide": "Что ещё есть в квартире?",
    "opciones": [
     "Una lavadora",
     "Una cama",
     "Un sofá"
    ],
    "correcta": "Una lavadora",
    "explicacion": "«…una lavadora»."
   },
   {
    "id": "LEE-anuncio-3",
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
    "id": "LEE-anuncio-4",
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
    "es": "Mi barrio es tranquilo y muy bonito. Las calles son pequeñas y no hay muchos coches.",
    "ru": "Мой район тихий и очень красивый. Улицы маленькие, и машин немного."
   },
   {
    "es": "Al lado de mi casa hay una tienda y enfrente está la farmacia.",
    "ru": "Рядом с моим домом магазин, а напротив — аптека."
   },
   {
    "es": "El supermercado está a la derecha del banco.",
    "ru": "Супермаркет справа от банка."
   },
   {
    "es": "La plaza está cerca. En la plaza hay un bar y una cafetería. El parque está un poco lejos.",
    "ru": "Площадь близко. На площади есть бар и кафе. Парк немного далеко."
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
    "explicacion": "«Mi barrio es tranquilo»."
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
    "es": "Mi mochila es negra y bastante grande.",
    "ru": "Мой рюкзак чёрный и довольно большой."
   },
   {
    "es": "¿Qué hay en mi mochila? Hay dos libros, unos papeles y tres fotos.",
    "ru": "Что у меня в рюкзаке? Две книги, какие-то бумаги и три фотографии."
   },
   {
    "es": "También hay unas llaves, un móvil y unas gafas.",
    "ru": "Ещё там ключи, телефон и очки."
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
    "id": "LEE-mochila-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "El ordenador está en la mochila.",
    "verdadero": false,
    "explicacion": "«El ordenador no está en la mochila»."
   },
   {
    "id": "LEE-mochila-4",
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
    "es": "Javier es profesor de español. De lunes a viernes se levanta a las siete.",
    "ru": "Хавьер — преподаватель испанского. С понедельника по пятницу он встаёт в семь."
   },
   {
    "es": "Se ducha, desayuna un café y sale de casa a las ocho menos cuarto. Va al trabajo en metro.",
    "ru": "Он принимает душ, выпивает кофе на завтрак и выходит из дома без четверти восемь. На работу ездит на метро."
   },
   {
    "es": "Las clases empiezan a las nueve y terminan a las dos. Después come en un bar.",
    "ru": "Занятия начинаются в девять и заканчиваются в два. Потом он обедает в баре."
   },
   {
    "es": "Por la tarde lee, trabaja en casa y a veces juega al fútbol. Se acuesta a las once y media.",
    "ru": "Днём он читает, работает дома и иногда играет в футбол. Ложится спать в половине двенадцатого."
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
    "forma": "vf",
    "afirmacion": "Las clases terminan a las dos.",
    "verdadero": true,
    "explicacion": "«…y terminan a las dos»."
   },
   {
    "id": "LEE-javier-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что он иногда делает вечером?",
    "opciones": [
     "Juega al fútbol",
     "Ve la televisión",
     "Va al cine"
    ],
    "correcta": "Juega al fútbol",
    "explicacion": "«…a veces juega al fútbol»."
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
    "es": "Los sábados Lucía no trabaja. Se levanta tarde, a las diez. Ella y su amiga Marta desayunan en un bar.",
    "ru": "По субботам Лусия не работает. Она встаёт поздно, в десять. Они с подругой Мартой завтракают в баре."
   },
   {
    "es": "Después van a las tiendas o caminan por el centro.",
    "ru": "Потом они ходят по магазинам или гуляют по центру."
   },
   {
    "es": "Por la noche Lucía cena en casa y a veces sale a un bar.",
    "ru": "Вечером Лусия ужинает дома, а иногда идёт в бар."
   },
   {
    "es": "Los domingos siempre come en casa de sus padres. Su madre cocina muy bien. Por la tarde Lucía descansa y lee un libro.",
    "ru": "По воскресеньям она всегда обедает у родителей. Её мама очень хорошо готовит. Днём Лусия отдыхает и читает книгу."
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
     "Marta",
     "Su madre",
     "Javier"
    ],
    "correcta": "Marta",
    "explicacion": "«Ella y su amiga Marta desayunan en un bar»."
   },
   {
    "id": "LEE-finde-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Где она обедает в воскресенье?",
    "opciones": [
     "En casa de sus padres",
     "En un bar",
     "En casa de Marta"
    ],
    "correcta": "En casa de sus padres",
    "explicacion": "«…come en casa de sus padres»."
   },
   {
    "id": "LEE-finde-4",
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
    "es": "En España hay cuatro estaciones.",
    "ru": "В Испании четыре времени года."
   },
   {
    "es": "En primavera hace buen tiempo: no hace frío y no hace mucho calor. En verano hace mucho calor. En julio y agosto mucha gente va a la playa.",
    "ru": "Весной хорошая погода: не холодно и не очень жарко. Летом очень жарко. В июле и августе многие едут на пляж."
   },
   {
    "es": "En otoño llueve a veces y hace viento.",
    "ru": "Осенью иногда идёт дождь и дует ветер."
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
    "id": "LEE-estaciones-3",
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
    "id": "LEE-estaciones-4",
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
    "es": "Me llamo Pablo y vivo en Madrid. Me gusta mucho el deporte: juego al fútbol los martes y los jueves.",
    "ru": "Меня зовут Пабло, я живу в Мадриде. Я очень люблю спорт: играю в футбол по вторникам и четвергам."
   },
   {
    "es": "También me encanta la música. Por las noches escucho música y a veces voy a un concierto.",
    "ru": "Ещё я обожаю музыку. По вечерам слушаю музыку, а иногда хожу на концерт."
   },
   {
    "es": "No me gusta ver la televisión, pero me gustan las películas.",
    "ru": "Я не люблю смотреть телевизор, но мне нравятся фильмы."
   },
   {
    "es": "¿Y Marta, mi novia? Marta lee mucho y tiene dos gatos.",
    "ru": "А Марта, моя девушка? Марта много читает, и у неё две кошки."
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
    "forma": "vf",
    "afirmacion": "Pablo ve mucho la televisión.",
    "verdadero": false,
    "explicacion": "«No me gusta ver la televisión»."
   },
   {
    "id": "LEE-gustos-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "Что есть у Марты?",
    "opciones": [
     "Dos gatos",
     "Un perro",
     "Dos hermanos"
    ],
    "correcta": "Dos gatos",
    "explicacion": "«…tiene dos gatos»."
   },
   {
    "id": "LEE-gustos-4",
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
    "es": "Los sábados por la mañana Ana va al mercado de su barrio. Prefiere el mercado al supermercado: la fruta y la verdura son más frescas y la gente es muy simpática.",
    "ru": "По субботам утром Аня ходит на рынок в своём районе. Рынок ей нравится больше супермаркета: фрукты и овощи свежее, а люди очень приятные."
   },
   {
    "es": "Primero va a la frutería. Compra un kilo de naranjas, medio kilo de fresas y unos plátanos.",
    "ru": "Сначала она идёт в овощной магазин. Покупает килограмм апельсинов, полкило клубники и несколько бананов."
   },
   {
    "es": "Después va a la pescadería. Hoy el pescado está muy bien de precio: un kilo cuesta doce euros.",
    "ru": "Потом идёт в рыбный. Сегодня рыба по хорошей цене: килограмм стоит двенадцать евро."
   },
   {
    "es": "En la carnicería compra pollo para la semana. Paga con tarjeta: hoy no tiene efectivo. ¡Y vuelve a casa muy contenta!",
    "ru": "В мясной лавке она покупает курицу на неделю. Платит картой: сегодня у неё нет наличных. И возвращается домой очень довольная!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-mercado-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué día va Ana al mercado?",
    "opciones": [
     "El sábado",
     "El domingo",
     "El lunes"
    ],
    "correcta": "El sábado",
    "explicacion": "«Los sábados por la mañana»."
   },
   {
    "id": "LEE-mercado-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto cuesta un kilo de pescado?",
    "opciones": [
     "Doce euros",
     "Dos euros",
     "Veinte euros"
    ],
    "correcta": "Doce euros",
    "explicacion": "«…un kilo cuesta doce euros»."
   },
   {
    "id": "LEE-mercado-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana paga en efectivo.",
    "verdadero": false,
    "explicacion": "«Paga con tarjeta: hoy no tiene efectivo»."
   },
   {
    "id": "LEE-mercado-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué compra en la carnicería?",
    "opciones": [
     "Pollo",
     "Pescado",
     "Fresas"
    ],
    "correcta": "Pollo",
    "explicacion": "«…compra pollo para la semana»."
   },
   {
    "id": "LEE-mercado-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А ты что обычно покупаешь на неделю? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "что покупаешь",
       "formas": [
        "compro",
        "necesito",
        "quiero"
       ]
      }
     ],
     "modelos": [
      "Normalmente compro fruta, pan, leche y pollo."
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
    "es": "En España muchos restaurantes tienen menú del día de lunes a viernes. Normalmente cuesta entre doce y quince euros.",
    "ru": "В Испании во многих ресторанах с понедельника по пятницу есть комплексный обед. Обычно он стоит от двенадцати до пятнадцати евро."
   },
   {
    "es": "El menú tiene un primer plato, un segundo plato y un postre o un café. El pan y la bebida no cuestan más: están en el precio.",
    "ru": "В меню есть первое блюдо, второе блюдо и десерт или кофе. Хлеб и напиток не стоят дороже: они входят в цену."
   },
   {
    "es": "De primero hay ensalada, sopa o arroz. De segundo, carne o pescado con patatas.",
    "ru": "На первое — салат, суп или рис. На второе — мясо или рыба с картошкой."
   },
   {
    "es": "Javier come el menú del día casi todos los días: es bueno, hay mucha comida y no es caro.",
    "ru": "Хавьер обедает комплексным обедом почти каждый день: это вкусно, еды много, и это недорого."
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
     "Los domingos",
     "Todos los días del año"
    ],
    "correcta": "De lunes a viernes",
    "explicacion": "«…de lunes a viernes»."
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
     "Treinta euros"
    ],
    "correcta": "Entre doce y quince euros",
    "explicacion": "«…entre doce y quince euros»."
   },
   {
    "id": "LEE-menu-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay de segundo?",
    "opciones": [
     "Carne o pescado",
     "Sopa",
     "Ensalada"
    ],
    "correcta": "Carne o pescado",
    "explicacion": "«De segundo, carne o pescado»."
   },
   {
    "id": "LEE-menu-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El pan cuesta más.",
    "verdadero": false,
    "explicacion": "«El pan y la bebida no cuestan más»."
   },
   {
    "id": "LEE-menu-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué come Javier el menú?",
    "opciones": [
     "Es bueno y no es caro",
     "No sabe cocinar",
     "Es muy caro"
    ],
    "correcta": "Es bueno y no es caro",
    "explicacion": "«…es bueno, hay mucha comida y no es caro»."
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
    "ru": "Тапа — это маленькая тарелка: немного тортильи, хамона, сыра или картошки."
   },
   {
    "es": "En Granada pides una bebida y la tapa no cuesta nada.",
    "ru": "В Гранаде, например, заказываешь напиток — и тапа ничего не стоит."
   },
   {
    "es": "¿Tienes mucha hambre? Puedes pedir una ración: es un plato más grande, para dos o tres personas.",
    "ru": "Очень голоден? Можно заказать порцию: это блюдо побольше, на двух-трёх человек."
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
     "Un postre"
    ],
    "correcta": "Un plato pequeño",
    "explicacion": "«Una tapa es un plato pequeño»."
   },
   {
    "id": "LEE-tapas-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde la tapa no cuesta nada?",
    "opciones": [
     "En Granada",
     "En Madrid",
     "En Barcelona"
    ],
    "correcta": "En Granada",
    "explicacion": "«En Granada… la tapa no cuesta nada»."
   },
   {
    "id": "LEE-tapas-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Una ración es más pequeña que una tapa.",
    "verdadero": false,
    "explicacion": "«…es un plato más grande»."
   },
   {
    "id": "LEE-tapas-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piden en el bar?",
    "opciones": [
     "Una caña o un vino",
     "Un té",
     "Un zumo de naranja"
    ],
    "correcta": "Una caña o un vino",
    "explicacion": "«…piden una caña o un vino»."
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
    "es": "Lucía: Ana, el sábado es la cena en casa. ¿Qué compramos?",
    "ru": "Лусия: Аня, в субботу ужин у меня дома. Что купим?"
   },
   {
    "es": "Ana: Somos seis, ¿no? Podemos hacer una tortilla y una ensalada.",
    "ru": "Аня: Нас шестеро, да? Можем сделать тортилью и салат."
   },
   {
    "es": "Lucía: Vale. Para la tortilla necesitamos patatas, huevos y cebolla. Tengo aceite en casa.",
    "ru": "Лусия: Хорошо. Для тортильи нужны картошка, яйца и лук. Масло у меня дома есть."
   },
   {
    "es": "Ana: Yo compro el pan y el queso. ¿Y la bebida?",
    "ru": "Аня: Я куплю хлеб и сыр. А напитки?"
   },
   {
    "es": "Lucía: Pablo compra el vino. Tú, ¿puedes comprar agua y zumo?",
    "ru": "Лусия: Вино покупает Пабло. А ты можешь купить воду и сок?"
   },
   {
    "es": "Ana: Sí, claro. ¿Y el postre? Lucía: ¡Yo hago una tarta!",
    "ru": "Аня: Да, конечно. А десерт? Лусия: Я испеку торт!"
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
     "Dos",
     "Doce"
    ],
    "correcta": "Seis",
    "explicacion": "«Somos seis»."
   },
   {
    "id": "LEE-chat-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué necesitan para la tortilla?",
    "opciones": [
     "Patatas, huevos y cebolla",
     "Pan y queso",
     "Agua y zumo"
    ],
    "correcta": "Patatas, huevos y cebolla",
    "explicacion": "«…necesitamos patatas, huevos y cebolla»."
   },
   {
    "id": "LEE-chat-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Quién compra el vino?",
    "opciones": [
     "Pablo",
     "Ana",
     "Lucía"
    ],
    "correcta": "Pablo",
    "explicacion": "«Pablo compra el vino»."
   },
   {
    "id": "LEE-chat-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Lucía no tiene aceite en casa.",
    "verdadero": false,
    "explicacion": "«Tengo aceite en casa»."
   },
   {
    "id": "LEE-chat-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Что ты принесёшь на ужин? Ответь Лусии.",
    "sit": {
     "necesita": [
      {
       "es": "что принесёшь",
       "formas": [
        "compro",
        "traigo",
        "llevo",
        "hago",
        "puedo"
       ]
      }
     ],
     "modelos": [
      "Yo compro el pan y una tarta de chocolate."
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
    "es": "Madrid está en el centro de España. Es una ciudad muy grande y mucha gente vive allí.",
    "ru": "Мадрид находится в центре Испании. Это очень большой город, и в нём живёт много людей."
   },
   {
    "es": "En el centro está la Puerta del Sol. Desde allí puedes ir a pie a la Plaza Mayor y al Palacio Real.",
    "ru": "В центре находится площадь Пуэрта-дель-Соль. Оттуда можно дойти пешком до Пласа-Майор и до Королевского дворца."
   },
   {
    "es": "¿Quieres descansar? Ve al parque del Retiro: es muy grande y muy bonito. Los domingos hay muchas familias allí.",
    "ru": "Хочешь отдохнуть? Иди в парк Ретиро: он очень большой и красивый. По воскресеньям там много семей."
   },
   {
    "es": "Para ir por la ciudad, coge el metro. Tiene doce líneas y llega a todos los barrios.",
    "ru": "Чтобы передвигаться по городу, садись на метро. В нём двенадцать линий, и оно доходит до всех районов."
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
    "pide": "¿Dónde está Madrid?",
    "opciones": [
     "En el centro de España",
     "Al lado del mar",
     "Cerca de Barcelona"
    ],
    "correcta": "En el centro de España",
    "explicacion": "«Madrid está en el centro de España»."
   },
   {
    "id": "LEE-madrid-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo puedes ir de la Puerta del Sol a la Plaza Mayor?",
    "opciones": [
     "A pie",
     "En avión",
     "En barco"
    ],
    "correcta": "A pie",
    "explicacion": "«…puedes ir a pie»."
   },
   {
    "id": "LEE-madrid-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué es el Retiro?",
    "opciones": [
     "Un parque",
     "Una plaza",
     "Un museo"
    ],
    "correcta": "Un parque",
    "explicacion": "«…el parque del Retiro»."
   },
   {
    "id": "LEE-madrid-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Madrid es una ciudad pequeña.",
    "verdadero": false,
    "explicacion": "«Es una ciudad muy grande»."
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
    "es": "Ana va todos los días a clase en metro. Vive cerca de la estación de Sants y la escuela de español está en el centro, al lado de la plaza de Catalunya.",
    "ru": "Аня каждый день ездит на занятия на метро. Она живёт рядом со станцией Сантс, а школа испанского — в центре, рядом с площадью Каталонии."
   },
   {
    "es": "Coge la línea tres, la verde. Son siete paradas y tarda unos quince minutos.",
    "ru": "Она садится на третью, зелёную линию. Это семь остановок, дорога занимает около пятнадцати минут."
   },
   {
    "es": "Ana no compra un billete cada día: tiene una tarjeta para todo el mes. Es más barato.",
    "ru": "Аня не покупает билет каждый день: у неё проездной на весь месяц. Так дешевле."
   },
   {
    "es": "Por la mañana el metro va muy lleno. A veces Ana sale de casa más temprano y va a pie: tarda cuarenta minutos.",
    "ru": "Утром в метро очень много людей. Иногда Аня выходит из дома пораньше и идёт пешком: это сорок минут."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-metro-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué línea coge Ana?",
    "opciones": [
     "La tres",
     "La uno",
     "La cinco"
    ],
    "correcta": "La tres",
    "explicacion": "«Coge la línea tres, la verde»."
   },
   {
    "id": "LEE-metro-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tarda en metro?",
    "opciones": [
     "Unos quince minutos",
     "Una hora",
     "Cinco minutos"
    ],
    "correcta": "Unos quince minutos",
    "explicacion": "«…tarda unos quince minutos»."
   },
   {
    "id": "LEE-metro-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana compra un billete cada día.",
    "verdadero": false,
    "explicacion": "«Ana no compra un billete cada día»."
   },
   {
    "id": "LEE-metro-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo va el metro por la mañana?",
    "opciones": [
     "Muy lleno",
     "Vacío",
     "Muy caro"
    ],
    "correcta": "Muy lleno",
    "explicacion": "«…el metro va muy lleno»."
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
    "es": "El Museo del Prado está en Madrid. Es un museo muy grande y muy antiguo.",
    "ru": "Музей Прадо находится в Мадриде. Это очень большой и очень старый музей."
   },
   {
    "es": "Tiene cuadros de Velázquez, Goya y El Greco.",
    "ru": "В нём картины Веласкеса, Гойи и Эль Греко."
   },
   {
    "es": "El museo abre todos los días. De lunes a sábado, de seis a ocho de la tarde, no pagas.",
    "ru": "Музей открыт каждый день. С понедельника по субботу с шести до восьми вечера вход бесплатный."
   },
   {
    "es": "Para llegar, coge el metro hasta la estación de Atocha. Desde allí, camina diez minutos.",
    "ru": "Чтобы добраться, доезжай на метро до станции Аточа. Оттуда — десять минут пешком."
   },
   {
    "es": "El museo es muy grande: no tienes que verlo todo en un día. ¡Puedes volver!",
    "ru": "Музей очень большой: не нужно смотреть всё за один день. Можно вернуться!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-prado-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde está el Museo del Prado?",
    "opciones": [
     "En Madrid",
     "En Barcelona",
     "En Sevilla"
    ],
    "correcta": "En Madrid",
    "explicacion": "«…está en Madrid»."
   },
   {
    "id": "LEE-prado-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hay en el museo?",
    "opciones": [
     "Cuadros",
     "Coches",
     "Libros"
    ],
    "correcta": "Cuadros",
    "explicacion": "«Tiene cuadros de Velázquez, Goya…»."
   },
   {
    "id": "LEE-prado-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El museo está cerrado los lunes.",
    "verdadero": false,
    "explicacion": "«El museo abre todos los días»."
   },
   {
    "id": "LEE-prado-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo no pagas?",
    "opciones": [
     "De seis a ocho de la tarde",
     "Por la mañana",
     "Los domingos todo el día"
    ],
    "correcta": "De seis a ocho de la tarde",
    "explicacion": "«…de seis a ocho de la tarde, no pagas»."
   },
   {
    "id": "LEE-prado-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué dice el texto?",
    "opciones": [
     "No tienes que verlo todo en un día",
     "Tienes que ir en coche",
     "Solo abre los domingos"
    ],
    "correcta": "No tienes que verlo todo en un día",
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
    "es": "Hoy Marta está enferma: tiene tos y está muy cansada.",
    "ru": "Сегодня Марта заболела: у неё кашель, и она очень устала."
   },
   {
    "es": "Por la mañana llama al centro de salud y pide cita. La médica la ve a las once.",
    "ru": "Утром она звонит в поликлинику и записывается на приём. Врач принимает её в одиннадцать."
   },
   {
    "es": "—¿Qué te pasa? —Tengo tos y me duele mucho la cabeza. —Tienes que descansar y beber mucha agua.",
    "ru": "— Что с тобой? — У меня кашель и сильно болит голова. — Тебе нужно отдыхать и пить много воды."
   },
   {
    "es": "Después Marta va a la farmacia y compra unas pastillas para la tos.",
    "ru": "Потом Марта идёт в аптеку и покупает таблетки от кашля."
   },
   {
    "es": "Marta debe tomar una pastilla cada ocho horas. Hoy no va a trabajar: va a estar en la cama todo el día.",
    "ru": "Марта должна принимать по таблетке каждые восемь часов. Сегодня она не идёт на работу: весь день будет в постели."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-salud-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tiene Marta?",
    "opciones": [
     "Tos",
     "Hambre",
     "Frío"
    ],
    "correcta": "Tos",
    "explicacion": "«…tiene tos y está muy cansada»."
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
     "A las tres"
    ],
    "correcta": "A las once",
    "explicacion": "«La médica la ve a las once»."
   },
   {
    "id": "LEE-salud-3",
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
    "id": "LEE-salud-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Hoy Marta va a trabajar.",
    "verdadero": false,
    "explicacion": "«Hoy no va a trabajar»."
   },
   {
    "id": "LEE-salud-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Тебе плохо. Скажи врачу по-испански, что у тебя болит.",
    "sit": {
     "necesita": [
      {
       "es": "болит",
       "formas": [
        "me duele",
        "me duelen",
        "tengo"
       ]
      }
     ],
     "modelos": [
      "Me duele mucho la cabeza y tengo tos."
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
    "es": "Lucía: Vale. Hay una película nueva a las nueve y media. Dicen que es muy buena.",
    "ru": "Лусия: Хорошо. Есть новый фильм в половине десятого. Говорят, очень хороший."
   },
   {
    "es": "Ana: ¡Perfecto! ¿Quedamos a las nueve en la puerta del cine?",
    "ru": "Аня: Отлично! Встретимся в девять у входа в кинотеатр?"
   },
   {
    "es": "Lucía: Mejor a las nueve menos cuarto: los sábados hay mucha gente. ¿Y después cenamos algo?",
    "ru": "Лусия: Лучше без четверти девять: по субботам много людей. А потом поужинаем где-нибудь?"
   },
   {
    "es": "Ana: ¡Claro! Conozco un bar muy bueno al lado del cine. ¡Hasta el sábado!",
    "ru": "Аня: Конечно! Я знаю очень хороший бар рядом с кинотеатром. До субботы!"
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
    "id": "LEE-quedamos-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Después de la película van a cenar.",
    "verdadero": true,
    "explicacion": "«¿Y después cenamos algo? —¡Claro!»."
   },
   {
    "id": "LEE-quedamos-5",
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
        "genial"
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
    "es": "Ana vive en un edificio antiguo en el barrio de Gràcia. Se lleva muy bien con sus vecinos.",
    "ru": "Аня живёт в старом доме в районе Грасия. Она отлично ладит с соседями."
   },
   {
    "es": "En el primero vive la señora Rosa. Tiene ochenta años y es muy simpática. A veces Ana le compra el pan.",
    "ru": "На втором этаже живёт сеньора Роса. Ей восемьдесят лет, и она очень милая. Иногда Аня покупает ей хлеб."
   },
   {
    "es": "En el segundo viven Jordi y Laura con sus dos hijos. Los niños son muy simpáticos, pero no son nada tranquilos.",
    "ru": "На третьем живут Жорди и Лаура с двумя детьми. Дети очень милые, но совсем не спокойные."
   },
   {
    "es": "El vecino del cuarto es un chico joven. Pone la música muy alta por la noche, y a Ana no le gusta nada.",
    "ru": "Сосед с пятого этажа — молодой парень. По ночам он очень громко включает музыку, и Ане это совсем не нравится."
   },
   {
    "es": "Un día Ana habla con él. Él dice: «¡Lo siento!». Ahora la música está más baja.",
    "ru": "Однажды Аня с ним поговорила. Он сказал: «Извини!». Теперь музыка тише."
   },
   {
    "es": "A Ana le parece que tener buenos vecinos es lo mejor.",
    "ru": "Ане кажется, что хорошие соседи — это самое лучшее."
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
     "Ocho"
    ],
    "correcta": "Ochenta",
    "explicacion": "«Tiene ochenta años»."
   },
   {
    "id": "LEE-vecinos-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hace Ana para la señora Rosa?",
    "opciones": [
     "Le compra el pan",
     "Le limpia la casa",
     "Le hace la comida"
    ],
    "correcta": "Le compra el pan",
    "explicacion": "«A veces Ana le compra el pan»."
   },
   {
    "id": "LEE-vecinos-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuál es el problema con el vecino del cuarto?",
    "opciones": [
     "La música muy alta",
     "Tiene un perro",
     "Es antipático"
    ],
    "correcta": "La música muy alta",
    "explicacion": "«Pone la música muy alta por la noche»."
   },
   {
    "id": "LEE-vecinos-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana se lleva mal con sus vecinos.",
    "verdadero": false,
    "explicacion": "«Se lleva muy bien con sus vecinos»."
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
    "es": "Los domingos, en las comidas de familia, la sobremesa a veces es de una hora o más.",
    "ru": "По воскресеньям, на семейных обедах, собремеса иногда длится час и больше."
   },
   {
    "es": "A la gente de otros países le parece diferente. En Rusia, después de comer, normalmente la gente se levanta y se va.",
    "ru": "Людям из других стран это кажется непривычным. В России после обеда люди обычно встают и уходят."
   },
   {
    "es": "Ana cree que la sobremesa es muy bonita. Para ella, es la mejor hora del día para hablar.",
    "ru": "Аня считает, что собремеса — это очень красиво. Для неё это лучшее время дня, чтобы поговорить."
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
    "explicacion": "«…se queda allí, toma un café y habla»."
   },
   {
    "id": "LEE-sobremesa-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo es más larga?",
    "opciones": [
     "Los domingos",
     "Los lunes",
     "Por la mañana"
    ],
    "correcta": "Los domingos",
    "explicacion": "«Los domingos, en las comidas de familia…»."
   },
   {
    "id": "LEE-sobremesa-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En Rusia la gente hace lo mismo.",
    "verdadero": false,
    "explicacion": "«En Rusia, después de comer, normalmente la gente se levanta y se va»."
   },
   {
    "id": "LEE-sobremesa-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piensa Ana?",
    "opciones": [
     "Que es muy bonita",
     "Que es aburrida",
     "Que es demasiado larga"
    ],
    "correcta": "Que es muy bonita",
    "explicacion": "«Ana cree que la sobremesa es muy bonita»."
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
    "es": "Pablo vive en Madrid y su hermana Lucía, en Barcelona. Siempre discuten: ¿qué ciudad es mejor?",
    "ru": "Пабло живёт в Мадриде, а его сестра Лусия — в Барселоне. Они всегда спорят: какой город лучше?"
   },
   {
    "es": "Para Pablo, Madrid es mejor. Es más grande que Barcelona y tiene más museos. Además, la gente sale mucho por la noche.",
    "ru": "Для Пабло лучше Мадрид. Он больше Барселоны, и в нём больше музеев. Кроме того, люди там много гуляют по вечерам."
   },
   {
    "es": "Lucía no está de acuerdo. Barcelona tiene mar y playa, y en invierno no hace tanto frío como en Madrid.",
    "ru": "Лусия не согласна. В Барселоне есть море и пляж, и зимой не так холодно, как в Мадриде."
   },
   {
    "es": "Pero los dos están de acuerdo en una cosa: los pisos son muy caros en las dos ciudades.",
    "ru": "Но в одном они согласны: квартиры очень дорогие в обоих городах."
   },
   {
    "es": "¿Y Ana? A ella le gustan las dos, pero prefiere Barcelona, porque es menos grande y más tranquila.",
    "ru": "А Аня? Ей нравятся оба, но она предпочитает Барселону, потому что она меньше и спокойнее."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-madridbcn-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde vive Pablo?",
    "opciones": [
     "En Madrid",
     "En Barcelona",
     "En Moscú"
    ],
    "correcta": "En Madrid",
    "explicacion": "«Pablo vive en Madrid»."
   },
   {
    "id": "LEE-madridbcn-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Para Lucía, ¿qué tiene Barcelona?",
    "opciones": [
     "Mar y playa",
     "Más museos",
     "Pisos baratos"
    ],
    "correcta": "Mar y playa",
    "explicacion": "«Barcelona tiene mar y playa»."
   },
   {
    "id": "LEE-madridbcn-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "En invierno hace más frío en Madrid que en Barcelona.",
    "verdadero": true,
    "explicacion": "«…no hace tanto frío como en Madrid»."
   },
   {
    "id": "LEE-madridbcn-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿En qué están de acuerdo los dos?",
    "opciones": [
     "Los pisos son caros",
     "Madrid es mejor",
     "Barcelona tiene más museos"
    ],
    "correcta": "Los pisos son caros",
    "explicacion": "«…los pisos son muy caros en las dos ciudades»."
   },
   {
    "id": "LEE-madridbcn-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А тебе какой город нравится больше? Почему? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "что больше",
       "formas": [
        "prefiero",
        "me gusta más",
        "mejor",
        "más"
       ]
      },
      {
       "es": "почему",
       "formas": [
        "porque",
        "además",
        "también"
       ]
      }
     ],
     "modelos": [
      "Prefiero Barcelona, porque tiene mar."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-cervantes",
  "nivel": "A2",
  "desde": 8,
  "tema": "История",
  "titulo": "Miguel de Cervantes",
  "tituloRu": "Мигель де Сервантес",
  "parrafos": [
   {
    "es": "Miguel de Cervantes es el escritor más famoso de España. Nació en 1547 en Alcalá de Henares, una ciudad cerca de Madrid.",
    "ru": "Мигель де Сервантес — самый известный писатель Испании. Он родился в 1547 году в Алькала-де-Энарес, городе недалеко от Мадрида."
   },
   {
    "es": "Su vida fue muy difícil. De joven estuvo en la guerra y allí una de sus manos quedó muy mal.",
    "ru": "Его жизнь была очень трудной. В молодости он был на войне и там тяжело ранил руку."
   },
   {
    "es": "Después pasó cinco años en Argel, lejos de su familia. Volvió a España en 1580.",
    "ru": "Потом он пять лет провёл в Алжире, вдали от семьи (в плену). Вернулся в Испанию в 1580 году."
   },
   {
    "es": "En 1605 salió la primera parte de su libro más famoso: «Don Quijote de la Mancha». Es la historia de un hombre que lee demasiados libros y sale de casa a vivir historias como las de sus libros.",
    "ru": "В 1605 году вышла первая часть его самой известной книги — «Дон Кихот Ламанчский». Это история человека, который читает слишком много книг и уходит из дома, чтобы пережить такие же истории, как в его книгах."
   },
   {
    "es": "Cervantes murió en Madrid en 1616. Hoy el español también se llama «el idioma de Cervantes».",
    "ru": "Сервантес умер в Мадриде в 1616 году. Сегодня испанский язык называют ещё и «языком Сервантеса»."
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
     "En Sevilla"
    ],
    "correcta": "En Alcalá de Henares",
    "explicacion": "«Nació… en Alcalá de Henares»."
   },
   {
    "id": "LEE-cervantes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos años pasó en Argel?",
    "opciones": [
     "Cinco",
     "Dos",
     "Diez"
    ],
    "correcta": "Cinco",
    "explicacion": "«…pasó cinco años en Argel»."
   },
   {
    "id": "LEE-cervantes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo salió la primera parte del Quijote?",
    "opciones": [
     "En 1605",
     "En 1547",
     "En 1616"
    ],
    "correcta": "En 1605",
    "explicacion": "«En 1605 salió la primera parte»."
   },
   {
    "id": "LEE-cervantes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Cervantes murió en Alcalá de Henares.",
    "verdadero": false,
    "explicacion": "«Cervantes murió en Madrid»."
   },
   {
    "id": "LEE-cervantes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hace Don Quijote?",
    "opciones": [
     "Sale de casa a vivir historias",
     "Escribe libros",
     "Vende libros"
    ],
    "correcta": "Sale de casa a vivir historias",
    "explicacion": "«…sale de casa a vivir historias como las de sus libros»."
   }
  ]
 },
 {
  "id": "LEE-picasso",
  "nivel": "A2",
  "desde": 8,
  "tema": "История",
  "titulo": "Pablo Picasso",
  "tituloRu": "Пабло Пикассо",
  "parrafos": [
   {
    "es": "Pablo Picasso nació en Málaga en 1881. Su padre fue profesor, y Pablo empezó a hacer cuadros de muy pequeño.",
    "ru": "Пабло Пикассо родился в Малаге в 1881 году. Его отец был преподавателем, и Пабло начал писать картины совсем маленьким."
   },
   {
    "es": "Con catorce años se fue con su familia a Barcelona. Allí estudió y conoció a otros pintores jóvenes.",
    "ru": "В четырнадцать лет он с семьёй переехал в Барселону. Там он учился и познакомился с другими молодыми художниками."
   },
   {
    "es": "En 1904 se fue a vivir a París. Allí hizo cuadros muy diferentes de los cuadros de antes.",
    "ru": "В 1904 году он переехал жить в Париж. Там он писал картины, совсем не похожие на прежние."
   },
   {
    "es": "Su cuadro más famoso es el «Guernica». Lo hizo en 1937, durante la guerra en España. Es un cuadro muy grande y muy triste.",
    "ru": "Его самая известная картина — «Герника». Он написал её в 1937 году, во время войны в Испании. Это очень большая и очень грустная картина."
   },
   {
    "es": "Hoy el «Guernica» está en un museo de Madrid. Y en Barcelona y en Málaga hay un Museo Picasso.",
    "ru": "Сегодня «Герника» находится в музее в Мадриде. А в Барселоне и в Малаге есть музеи Пикассо."
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
    "pide": "¿Cuándo se fue a París?",
    "opciones": [
     "En 1904",
     "En 1881",
     "En 1937"
    ],
    "correcta": "En 1904",
    "explicacion": "«En 1904 se fue a vivir a París»."
   },
   {
    "id": "LEE-picasso-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El «Guernica» está en Barcelona.",
    "verdadero": false,
    "explicacion": "«…el Guernica está en un museo de Madrid»."
   },
   {
    "id": "LEE-picasso-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde hay un Museo Picasso?",
    "opciones": [
     "En Barcelona y en Málaga",
     "Solo en París",
     "En Sevilla"
    ],
    "correcta": "En Barcelona y en Málaga",
    "explicacion": "«…en Barcelona y en Málaga hay un Museo Picasso»."
   },
   {
    "id": "LEE-picasso-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Какой художник или писатель тебе нравится? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "кто",
       "formas": [
        "me gusta",
        "me gustan",
        "me encanta",
        "prefiero"
       ]
      }
     ],
     "modelos": [
      "Me gusta mucho Picasso."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-primerdia",
  "nivel": "A2",
  "desde": 8,
  "tema": "Путешествия",
  "titulo": "Mi primer día en Barcelona",
  "tituloRu": "Мой первый день в Барселоне",
  "parrafos": [
   {
    "es": "Llegué a Barcelona un día de septiembre. El avión salió de Moscú a las ocho de la mañana y llegó a las doce.",
    "ru": "Я прилетела в Барселону в один из сентябрьских дней. Самолёт вылетел из Москвы в восемь утра и прилетел в двенадцать."
   },
   {
    "es": "En el aeropuerto cogí un taxi. El conductor me habló mucho, pero no entendí casi nada.",
    "ru": "В аэропорту я взяла такси. Водитель много со мной говорил, но я почти ничего не поняла."
   },
   {
    "es": "Por la tarde fui a mi piso nuevo. Lucía me esperó en la puerta y me dio las llaves. ¡Fue muy simpática!",
    "ru": "Днём я поехала в свою новую квартиру. Лусия ждала меня у двери и отдала ключи. Она была очень милой!"
   },
   {
    "es": "Después salimos a cenar. Probé el jamón y la tortilla por primera vez.",
    "ru": "Потом мы пошли ужинать. Я впервые попробовала хамон и тортилью."
   },
   {
    "es": "Ese día estuve muy cansada, pero también muy contenta. Desde entonces he aprendido mucho español.",
    "ru": "В тот день я очень устала, но была и очень довольна. С тех пор я выучила много испанского."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-primerdia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿En qué mes llegó Ana?",
    "opciones": [
     "En septiembre",
     "En enero",
     "En julio"
    ],
    "correcta": "En septiembre",
    "explicacion": "«…un día de septiembre»."
   },
   {
    "id": "LEE-primerdia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo fue del aeropuerto?",
    "opciones": [
     "En taxi",
     "En metro",
     "En autobús"
    ],
    "correcta": "En taxi",
    "explicacion": "«En el aeropuerto cogí un taxi»."
   },
   {
    "id": "LEE-primerdia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Quién le dio las llaves?",
    "opciones": [
     "Lucía",
     "El conductor",
     "Pablo"
    ],
    "correcta": "Lucía",
    "explicacion": "«Lucía me esperó en la puerta y me dio las llaves»."
   },
   {
    "id": "LEE-primerdia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana entendió todo lo que dijo el conductor.",
    "verdadero": false,
    "explicacion": "«…no entendí casi nada»."
   }
  ]
 },
 {
  "id": "LEE-maldia",
  "nivel": "A2",
  "desde": 8,
  "tema": "Повседневная жизнь",
  "titulo": "Un mal día",
  "tituloRu": "Неудачный день",
  "parrafos": [
   {
    "es": "Hoy he tenido un día muy malo. Esta mañana no he escuchado el móvil y me he levantado a las nueve. ¡Tarde!",
    "ru": "Сегодня у меня был ужасный день. Утром я не услышал телефон и встал в девять. Поздно!"
   },
   {
    "es": "No he desayunado y he salido de casa corriendo. En la calle ha empezado a llover.",
    "ru": "Я не позавтракал и выбежал из дома. На улице пошёл дождь."
   },
   {
    "es": "He llegado al trabajo a las diez menos cuarto. Mi compañero no me ha dicho nada, pero ha mirado el reloj.",
    "ru": "Я пришёл на работу без четверти десять. Мой коллега ничего не сказал, но посмотрел на часы."
   },
   {
    "es": "A la hora de comer he ido a un bar, pero no he encontrado sitio.",
    "ru": "В обед я пошёл в бар, но не нашёл места."
   },
   {
    "es": "Por la tarde he perdido el móvil en el metro. Una chica lo ha encontrado y me lo ha dado.",
    "ru": "Днём я потерял телефон в метро. Одна девушка нашла его и отдала мне."
   },
   {
    "es": "Ahora estoy en casa, en el sofá. ¡Mañana va a ser un día mejor!",
    "ru": "Сейчас я дома, на диване. Завтра будет день получше!"
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
    "pide": "¿Qué ha hecho su compañero?",
    "opciones": [
     "Ha mirado el reloj",
     "Ha dicho muchas cosas",
     "Ha llegado tarde"
    ],
    "correcta": "Ha mirado el reloj",
    "explicacion": "«…ha mirado el reloj»."
   },
   {
    "id": "LEE-maldia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde ha perdido el móvil?",
    "opciones": [
     "En el metro",
     "En el bar",
     "En el trabajo"
    ],
    "correcta": "En el metro",
    "explicacion": "«…he perdido el móvil en el metro»."
   },
   {
    "id": "LEE-maldia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Una chica ha encontrado el móvil.",
    "verdadero": true,
    "explicacion": "«…una chica lo ha encontrado»."
   },
   {
    "id": "LEE-maldia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Расскажи по-испански о своём неудачном дне (одна-две фразы, в прошедшем).",
    "sit": {
     "necesita": [
      {
       "es": "прошедшее",
       "formas": [
        "he",
        "ha",
        "fui",
        "perdí",
        "llegué",
        "me levanté",
        "tuve"
       ]
      }
     ],
     "modelos": [
      "Hoy he perdido el autobús y he llegado tarde."
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
    "es": "Cuando era pequeña, vivía con mis padres y mi hermano en un piso pequeño de Moscú. Mi madre era profesora y mi padre trabajaba en un hospital.",
    "ru": "Когда я была маленькой, я жила с родителями и братом в маленькой квартире в Москве. Мама была учительницей, а папа работал в больнице."
   },
   {
    "es": "Todos los días iba al colegio a pie con mi hermano. Las clases empezaban a las ocho y media.",
    "ru": "Каждый день я ходила в школу пешком с братом. Уроки начинались в половине девятого."
   },
   {
    "es": "Por la tarde hacía los deberes y después jugaba en el parque con mis amigas. En invierno siempre hacía mucho frío y había nieve.",
    "ru": "Днём я делала уроки, а потом играла в парке с подругами. Зимой всегда было очень холодно и лежал снег."
   },
   {
    "es": "Los domingos solíamos ir a casa de mis abuelos. Mi abuela cocinaba muy bien y siempre nos contaba historias.",
    "ru": "По воскресеньям мы обычно ездили к бабушке с дедушкой. Бабушка очень хорошо готовила и всегда рассказывала нам истории."
   },
   {
    "es": "Era una niña muy tranquila, pero un poco tímida. Me encantaba leer. Quería ser médica, ¡y ahora soy enfermera!",
    "ru": "Я была очень спокойной девочкой, но немного застенчивой. Я обожала читать. Хотела стать врачом — и теперь я медсестра!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-pequena-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde vivía Ana de pequeña?",
    "opciones": [
     "En Moscú",
     "En Barcelona",
     "En un pueblo"
    ],
    "correcta": "En Moscú",
    "explicacion": "«…vivía… en un piso pequeño de Moscú»."
   },
   {
    "id": "LEE-pequena-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo iba al colegio?",
    "opciones": [
     "A pie",
     "En autobús",
     "En coche"
    ],
    "correcta": "A pie",
    "explicacion": "«…iba al colegio a pie»."
   },
   {
    "id": "LEE-pequena-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hacían los domingos?",
    "opciones": [
     "Iban a casa de los abuelos",
     "Iban al cine",
     "Trabajaban"
    ],
    "correcta": "Iban a casa de los abuelos",
    "explicacion": "«…solíamos ir a casa de mis abuelos»."
   },
   {
    "id": "LEE-pequena-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "De pequeña, Ana era un poco tímida.",
    "verdadero": true,
    "explicacion": "«…pero un poco tímida»."
   },
   {
    "id": "LEE-pequena-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Расскажи по-испански, что ты любил делать в детстве.",
    "sit": {
     "necesita": [
      {
       "es": "imperfecto",
       "formas": [
        "me gustaba",
        "me encantaba",
        "jugaba",
        "iba",
        "leía",
        "veía",
        "era",
        "tenía"
       ],
       "rx": "^[a-záéíóúñ]+(aba|ía)$"
      }
     ],
     "modelos": [
      "De pequeño me encantaba jugar al fútbol."
     ]
    }
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
    "es": "Mi abuela Carmen nació en un pueblo pequeño de Asturias.",
    "ru": "Моя бабушка Кармен родилась в маленькой деревне в Астурии."
   },
   {
    "es": "Cuando era joven, la vida allí era muy diferente. No había coches y no había televisión. La gente trabajaba en el campo desde muy temprano.",
    "ru": "Когда она была молодой, жизнь там была совсем другой. Не было машин, не было телевизора. Люди работали в поле с самого раннего утра."
   },
   {
    "es": "Mi abuela tenía cinco hermanos. Por la mañana ayudaba a su madre en casa y por la tarde iba a la escuela.",
    "ru": "У бабушки было пятеро братьев и сестёр. Утром она помогала маме по дому, а днём ходила в школу."
   },
   {
    "es": "Los domingos todo el pueblo iba a la plaza. Había música y la gente bailaba hasta la noche.",
    "ru": "По воскресеньям вся деревня собиралась на площади. Играла музыка, и люди танцевали до ночи."
   },
   {
    "es": "A los veinte años mi abuela se fue a vivir a Madrid. Allí conoció a mi abuelo.",
    "ru": "В двадцать лет бабушка уехала жить в Мадрид. Там она познакомилась с дедушкой."
   },
   {
    "es": "Ahora el pueblo es muy tranquilo: solo viven allí cien personas. Pero cada verano mi abuela vuelve.",
    "ru": "Сейчас деревня очень тихая: там живут всего сто человек. Но каждое лето бабушка возвращается туда."
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
     "En Madrid",
     "En Barcelona"
    ],
    "correcta": "En un pueblo de Asturias",
    "explicacion": "«…nació en un pueblo pequeño de Asturias»."
   },
   {
    "id": "LEE-pueblo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos hermanos tenía?",
    "opciones": [
     "Cinco",
     "Dos",
     "Diez"
    ],
    "correcta": "Cinco",
    "explicacion": "«Mi abuela tenía cinco hermanos»."
   },
   {
    "id": "LEE-pueblo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hacía la gente los domingos?",
    "opciones": [
     "Bailaba en la plaza",
     "Trabajaba en el campo",
     "Veía la televisión"
    ],
    "correcta": "Bailaba en la plaza",
    "explicacion": "«…la gente bailaba hasta la noche»."
   },
   {
    "id": "LEE-pueblo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ahora en el pueblo vive mucha gente.",
    "verdadero": false,
    "explicacion": "«…solo viven allí cien personas»."
   },
   {
    "id": "LEE-pueblo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde conoció a su marido?",
    "opciones": [
     "En Madrid",
     "En el pueblo",
     "En la escuela"
    ],
    "correcta": "En Madrid",
    "explicacion": "«Allí conoció a mi abuelo»."
   }
  ]
 },
 {
  "id": "LEE-bcnantes",
  "nivel": "A2",
  "desde": 9,
  "tema": "Города",
  "titulo": "Barcelona antes y ahora",
  "tituloRu": "Барселона раньше и сейчас",
  "parrafos": [
   {
    "es": "Javier llegó a Barcelona hace treinta años. Cuenta que la ciudad era muy diferente.",
    "ru": "Хавьер приехал в Барселону тридцать лет назад. Он рассказывает, что город был совсем другим."
   },
   {
    "es": "Antes la playa no era bonita: no estaba limpia y la gente casi no iba allí. Ahora hay playas muy bonitas y en verano están llenas.",
    "ru": "Раньше пляж не был красивым: она была грязной, и люди почти туда не ходили. Теперь там очень красивые пляжи, и летом они полные."
   },
   {
    "es": "Antes había pocos turistas. Ahora vienen millones de personas cada año.",
    "ru": "Раньше туристов было мало. Теперь каждый год приезжают миллионы людей."
   },
   {
    "es": "Los pisos eran baratos: Javier pagaba muy poco por un piso en el centro. Hoy un piso igual cuesta mucho más.",
    "ru": "Квартиры были дешёвыми: Хавьер платил совсем немного за квартиру в центре. Сегодня такая же квартира стоит гораздо дороже."
   },
   {
    "es": "También había menos líneas de metro. Ahora hay muchas más.",
    "ru": "И линий метро было меньше. Теперь их гораздо больше."
   },
   {
    "es": "¿Le gusta más la Barcelona de antes o la de ahora? «Las dos», dice Javier. «Antes era más tranquila, pero ahora es más bonita».",
    "ru": "Ему больше нравится прежняя Барселона или сегодняшняя? «Обе, — говорит Хавьер. — Раньше она была спокойнее, но сейчас красивее»."
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
     "Hace treinta años",
     "Hace tres años",
     "El año pasado"
    ],
    "correcta": "Hace treinta años",
    "explicacion": "«…hace treinta años»."
   },
   {
    "id": "LEE-bcnantes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo era la playa antes?",
    "opciones": [
     "No era bonita",
     "Era muy bonita",
     "Estaba llena"
    ],
    "correcta": "No era bonita",
    "explicacion": "«Antes la playa no era bonita»."
   },
   {
    "id": "LEE-bcnantes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Antes los pisos eran caros.",
    "verdadero": false,
    "explicacion": "«Los pisos eran baratos»."
   },
   {
    "id": "LEE-bcnantes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piensa Javier?",
    "opciones": [
     "Le gustan las dos",
     "Prefiere la de antes",
     "Prefiere la de ahora"
    ],
    "correcta": "Le gustan las dos",
    "explicacion": "«Las dos», dice Javier."
   },
   {
    "id": "LEE-bcnantes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Как изменился твой город? Скажи по-испански одну вещь «раньше» и одну «сейчас».",
    "sit": {
     "necesita": [
      {
       "es": "раньше",
       "formas": [
        "antes",
        "era",
        "había",
        "tenía"
       ]
      },
      {
       "es": "сейчас",
       "formas": [
        "ahora",
        "hoy",
        "es",
        "hay"
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
  "tema": "Истории",
  "titulo": "Un viaje en tren",
  "tituloRu": "Поездка на поезде",
  "parrafos": [
   {
    "es": "El verano pasado Lucía fue a Valencia en tren. Era muy temprano y en el tren había poca gente.",
    "ru": "Прошлым летом Лусия ездила в Валенсию на поезде. Было очень рано, и в поезде было мало людей."
   },
   {
    "es": "Lucía estaba leyendo un libro cuando, de repente, el tren paró.",
    "ru": "Лусия читала книгу, когда вдруг поезд остановился."
   },
   {
    "es": "Nadie sabía qué pasaba. Unas personas se levantaron y miraron por la ventana. Una señora estaba muy nerviosa.",
    "ru": "Никто не знал, что происходит. Несколько человек встали и посмотрели в окно. Одна женщина очень нервничала."
   },
   {
    "es": "Después de veinte minutos, un chico del tren dijo: «No pasa nada. Era un problema pequeño».",
    "ru": "Через двадцать минут парень из поездной бригады сказал: «Ничего страшного. Это была небольшая проблема»."
   },
   {
    "es": "El tren siguió y llegó a Valencia una hora tarde. Lucía perdió el autobús, ¡pero llegó!",
    "ru": "Поезд поехал дальше и прибыл в Валенсию с опозданием на час. Лусия опоздала на автобус, но доехала!"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-susto-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Adónde iba Lucía?",
    "opciones": [
     "A Valencia",
     "A Madrid",
     "A Sevilla"
    ],
    "correcta": "A Valencia",
    "explicacion": "«Lucía fue a Valencia en tren»."
   },
   {
    "id": "LEE-susto-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué estaba haciendo cuando paró el tren?",
    "opciones": [
     "Estaba leyendo",
     "Estaba durmiendo",
     "Estaba comiendo"
    ],
    "correcta": "Estaba leyendo",
    "explicacion": "«Lucía estaba leyendo un libro»."
   },
   {
    "id": "LEE-susto-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Había mucha gente en el tren.",
    "verdadero": false,
    "explicacion": "«…en el tren había poca gente»."
   },
   {
    "id": "LEE-susto-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuándo llegó a Valencia?",
    "opciones": [
     "Una hora tarde",
     "A tiempo",
     "Dos días después"
    ],
    "correcta": "Una hora tarde",
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
    "es": "Primero irá a Moscú a ver a su familia. Estará allí diez días. Su madre está muy contenta: dice que le preparará todos los platos que más le gustan.",
    "ru": "Сначала она поедет в Москву повидать семью. Пробудет там десять дней. Мама очень рада: говорит, что приготовит ей все её любимые блюда."
   },
   {
    "es": "Después volverá a España y viajará con Lucía por Andalucía. Visitarán Sevilla, Granada y Córdoba. Dormirán en hoteles pequeños y alquilarán un coche.",
    "ru": "Потом она вернётся в Испанию и поедет с Лусией по Андалусии. Они побывают в Севилье, Гранаде и Кордове. Будут ночевать в маленьких гостиницах и возьмут машину напрокат."
   },
   {
    "es": "Ana sabe que en agosto hará mucho calor en Andalucía. Por eso, saldrán temprano por la mañana y descansarán por la tarde, como hace la gente de allí.",
    "ru": "Аня знает, что в августе на юге будет очень жарко. Поэтому они будут выходить рано утром и отдыхать днём, как делают местные."
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
    "pide": "¿Cuántas semanas de vacaciones tendrá Ana?",
    "opciones": [
     "Tres",
     "Dos",
     "Cuatro"
    ],
    "correcta": "Tres",
    "explicacion": "«…tres semanas de vacaciones»."
   },
   {
    "id": "LEE-verano-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hará primero?",
    "opciones": [
     "Irá a Moscú",
     "Irá a la playa",
     "Viajará por Andalucía"
    ],
    "correcta": "Irá a Moscú",
    "explicacion": "«Primero irá a Moscú»."
   },
   {
    "id": "LEE-verano-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué saldrán temprano?",
    "opciones": [
     "Porque hará mucho calor",
     "Porque el hotel cierra",
     "Porque no tienen coche"
    ],
    "correcta": "Porque hará mucho calor",
    "explicacion": "«…en agosto hará mucho calor en Andalucía»."
   },
   {
    "id": "LEE-verano-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana y Lucía viajarán en tren.",
    "verdadero": false,
    "explicacion": "«…alquilarán un coche»."
   },
   {
    "id": "LEE-verano-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué harán si tienen tiempo?",
    "opciones": [
     "Pasarán dos días en la playa",
     "Volverán a Moscú",
     "Visitarán Madrid"
    ],
    "correcta": "Pasarán dos días en la playa",
    "explicacion": "«Si tienen tiempo… pasarán dos días en la playa»."
   },
   {
    "id": "LEE-verano-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А ты что будешь делать летом? Ответь по-испански (futuro или ir a).",
    "sit": {
     "necesita": [
      {
       "es": "будущее",
       "formas": [
        "voy a",
        "iré",
        "viajaré",
        "estaré",
        "visitaré",
        "pasaré",
        "me quedaré"
       ],
       "rx": "^[a-záéíóúñ]+(ré|rás|rá|remos|rán)$"
      }
     ],
     "modelos": [
      "Este verano iré a la playa con mi familia."
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
    "es": "El sábado hará sol en casi toda España. En Andalucía las temperaturas subirán: en Sevilla llegaremos a los treinta y cinco grados.",
    "ru": "В субботу почти по всей Испании будет солнечно. В Андалусии температура поднимется: в Севилье будет до тридцати пяти градусов."
   },
   {
    "es": "En Galicia y en Asturias estará nublado y por la tarde lloverá. Si vais a salir, vais a necesitar un abrigo.",
    "ru": "В Галисии и Астурии будет облачно, а днём пойдёт дождь. Если собираетесь выходить, понадобится куртка."
   },
   {
    "es": "En Madrid y en el centro hará buen tiempo, pero por la noche hará fresco: unos doce grados.",
    "ru": "В Мадриде и в центре будет хорошая погода, но ночью будет прохладно: около двенадцати градусов."
   },
   {
    "es": "El domingo cambiará el tiempo. Llegará viento frío y las temperaturas bajarán en todo el país. En las montañas podrá nevar.",
    "ru": "В воскресенье погода изменится. Придёт холодный ветер, и температура понизится по всей стране. В горах может пойти снег."
   },
   {
    "es": "En Barcelona, el sábado será un día perfecto para la playa; el domingo, mejor quedarse en casa.",
    "ru": "В Барселоне суббота будет идеальным днём для пляжа, а в воскресенье лучше остаться дома."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-tiempo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tiempo hará el sábado en Sevilla?",
    "opciones": [
     "Mucho calor",
     "Lloverá",
     "Nevará"
    ],
    "correcta": "Mucho calor",
    "explicacion": "«…en Sevilla llegaremos a los treinta y cinco grados»."
   },
   {
    "id": "LEE-tiempo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde lloverá el sábado?",
    "opciones": [
     "En Galicia y en Asturias",
     "En Sevilla",
     "En Barcelona"
    ],
    "correcta": "En Galicia y en Asturias",
    "explicacion": "«…lloverá en Galicia y en Asturias»."
   },
   {
    "id": "LEE-tiempo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "El domingo las temperaturas subirán.",
    "verdadero": false,
    "explicacion": "«…las temperaturas bajarán en todo el país»."
   },
   {
    "id": "LEE-tiempo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué día es mejor para ir a la playa en Barcelona?",
    "opciones": [
     "El sábado",
     "El domingo",
     "Los dos días"
    ],
    "correcta": "El sábado",
    "explicacion": "«…el sábado será un día perfecto para la playa»."
   },
   {
    "id": "LEE-tiempo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Какая погода будет завтра у тебя в городе? Ответь по-испански.",
    "sit": {
     "necesita": [
      {
       "es": "погода",
       "formas": [
        "hará",
        "lloverá",
        "nevará",
        "estará",
        "va a hacer",
        "va a llover"
       ]
      }
     ],
     "modelos": [
      "Mañana hará sol, pero hará un poco de frío."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-trabajo",
  "nivel": "B1",
  "desde": 10,
  "tema": "Работа",
  "titulo": "Buscar trabajo en España",
  "tituloRu": "Искать работу в Испании",
  "parrafos": [
   {
    "es": "Pablo es ingeniero y lleva un año buscando un trabajo nuevo. Ahora trabaja en una empresa pequeña, pero quiere un puesto mejor.",
    "ru": "Пабло — инженер, и уже год ищет новую работу. Сейчас он работает в небольшой компании, но хочет должность получше."
   },
   {
    "es": "Cada semana mira los anuncios de trabajo en internet y manda su currículum. A veces lo llaman para una entrevista.",
    "ru": "Каждую неделю он смотрит вакансии в интернете и отправляет резюме. Иногда его приглашают на собеседование."
   },
   {
    "es": "Ayer tuvo una entrevista en una empresa grande de Madrid. Le preguntaron por su experiencia, por los idiomas que habla y por sus planes para el futuro.",
    "ru": "Вчера у него было собеседование в большой мадридской компании. Его спросили об опыте, о языках, которыми он владеет, и о планах на будущее."
   },
   {
    "es": "Pablo contestó bien, pero estaba un poco nervioso. Al final le dijeron: «Le llamaremos la semana que viene».",
    "ru": "Пабло отвечал хорошо, но немного нервничал. В конце ему сказали: «Мы позвоним вам на следующей неделе»."
   },
   {
    "es": "Si le dan el trabajo, ganará más dinero y tendrá un contrato mejor. Pero tendrá que trabajar más horas.",
    "ru": "Если ему дадут эту работу, он будет больше зарабатывать и получит контракт получше. Но ему придётся работать больше часов."
   },
   {
    "es": "Marta le dice: «Tranquilo. Si no es esta, será otra. Tienes mucha experiencia».",
    "ru": "Марта говорит ему: «Не волнуйся. Не эта, так другая. У тебя большой опыт»."
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
     "Tres años"
    ],
    "correcta": "Un año",
    "explicacion": "«…lleva un año buscando un trabajo nuevo»."
   },
   {
    "id": "LEE-trabajo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde busca trabajo?",
    "opciones": [
     "En internet",
     "En la calle",
     "En la universidad"
    ],
    "correcta": "En internet",
    "explicacion": "«…mira los anuncios de trabajo en internet»."
   },
   {
    "id": "LEE-trabajo-3",
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
    "explicacion": "«Le preguntaron por su experiencia, por los idiomas…»."
   },
   {
    "id": "LEE-trabajo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Pablo ya tiene el trabajo nuevo.",
    "verdadero": false,
    "explicacion": "«Le llamaremos la semana que viene»: ещё неизвестно."
   },
   {
    "id": "LEE-trabajo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué tendrá que hacer en el trabajo nuevo?",
    "opciones": [
     "Trabajar más horas",
     "Viajar mucho",
     "Vivir en otra ciudad"
    ],
    "correcta": "Trabajar más horas",
    "explicacion": "«…tendrá que trabajar más horas»."
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
    "es": "Muchos estudiantes de otros países vienen a estudiar a España. Les gusta el tiempo, la comida y, sobre todo, aprender español.",
    "ru": "Многие студенты из других стран приезжают учиться в Испанию. Им нравится климат, еда и, главное, возможность учить испанский."
   },
   {
    "es": "En España la carrera normalmente es de cuatro años. Después, muchos estudiantes hacen un máster de uno o dos años.",
    "ru": "В Испании обучение в университете обычно длится четыре года. Потом многие студенты идут в магистратуру на год или два."
   },
   {
    "es": "Muchas universidades no son muy caras: una asignatura cuesta entre veinte y cincuenta euros, más o menos.",
    "ru": "Многие университеты не очень дорогие: предмет стоит примерно от двадцати до пятидесяти евро."
   },
   {
    "es": "Para estudiar aquí, hace falta hablar bien español. Por eso muchos estudiantes hacen primero un curso de idiomas.",
    "ru": "Чтобы учиться здесь, нужно хорошо говорить по-испански. Поэтому многие сначала проходят языковые курсы."
   },
   {
    "es": "Ana está pensando en estudiar un máster en Barcelona. «Primero aprobaré el examen de español. Después miraré las universidades», dice.",
    "ru": "Аня думает пойти в магистратуру в Барселоне. «Сначала сдам экзамен по испанскому. Потом посмотрю университеты», — говорит она."
   },
   {
    "es": "Lucía le aconseja: «Deberías hacer prácticas en un hospital. Te ayudarán mucho».",
    "ru": "Лусия советует ей: «Тебе стоит пройти практику в больнице. Это тебе очень поможет»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-estudiar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué vienen estudiantes a España?",
    "opciones": [
     "Para aprender español",
     "Porque es barato vivir",
     "Porque no hay exámenes"
    ],
    "correcta": "Para aprender español",
    "explicacion": "«…sobre todo, aprender español»."
   },
   {
    "id": "LEE-estudiar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿De cuántos años es la carrera normalmente?",
    "opciones": [
     "Cuatro",
     "Dos",
     "Seis"
    ],
    "correcta": "Cuatro",
    "explicacion": "«…la carrera normalmente es de cuatro años»."
   },
   {
    "id": "LEE-estudiar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Todas las universidades son muy caras.",
    "verdadero": false,
    "explicacion": "«Muchas universidades no son muy caras»."
   },
   {
    "id": "LEE-estudiar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué hará Ana primero?",
    "opciones": [
     "Aprobará el examen de español",
     "Buscará trabajo",
     "Hará prácticas"
    ],
    "correcta": "Aprobará el examen de español",
    "explicacion": "«Primero aprobaré el examen de español»."
   },
   {
    "id": "LEE-estudiar-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le aconseja Lucía?",
    "opciones": [
     "Hacer prácticas en un hospital",
     "Volver a Moscú",
     "Estudiar en Madrid"
    ],
    "correcta": "Hacer prácticas en un hospital",
    "explicacion": "«Deberías hacer prácticas en un hospital»."
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
    "es": "Llamó al casero. «Es que se ha roto algo», le explicó él. «Mañana vendrá alguien a mirarlo. Espero que no sea nada malo».",
    "ru": "Она позвонила хозяину квартиры. «Что-то сломалось, — объяснил он. — Завтра кто-нибудь придёт посмотреть. Надеюсь, ничего серьёзного»."
   },
   {
    "es": "Esa noche Ana se duchó en casa de Lucía. «Ojalá lo arreglen pronto», le dijo.",
    "ru": "В тот вечер Аня приняла душ у Лусии. «Надеюсь, скоро починят», — сказала она ей."
   },
   {
    "es": "El martes vino el hombre de la empresa. Trabajó dos horas y al final todo funcionó otra vez.",
    "ru": "Во вторник пришёл мастер из компании. Он работал два часа, и в конце концов всё снова заработало."
   },
   {
    "es": "Antes de irse le explicó: «Cuando haga mucho frío, no apague la calefacción por la noche. Si no, se estropeará otra vez».",
    "ru": "Перед уходом он объяснил: «Когда очень холодно, не выключайте отопление на ночь. Иначе оно снова сломается»."
   },
   {
    "es": "Ana no pagó nada: pagó el casero. «Menos mal», pensó Ana.",
    "ru": "Аня ничего не заплатила: заплатил хозяин. «Слава богу», — подумала Аня."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-averia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tenía Ana?",
    "opciones": [
     "No había agua caliente",
     "No había luz",
     "No funcionaba el wifi"
    ],
    "correcta": "No había agua caliente",
    "explicacion": "«…no salía agua caliente»."
   },
   {
    "id": "LEE-averia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿A quién llamó primero?",
    "opciones": [
     "Al casero",
     "A Lucía",
     "A su madre"
    ],
    "correcta": "Al casero",
    "explicacion": "«Llamó… al casero»."
   },
   {
    "id": "LEE-averia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde se duchó esa noche?",
    "opciones": [
     "En casa de Lucía",
     "En un hotel",
     "En el gimnasio"
    ],
    "correcta": "En casa de Lucía",
    "explicacion": "«…se duchó en casa de Lucía»."
   },
   {
    "id": "LEE-averia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ana pagó la reparación.",
    "verdadero": false,
    "explicacion": "«Ana no pagó nada: pagó el casero»."
   },
   {
    "id": "LEE-averia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué le explicó el hombre?",
    "opciones": [
     "No apagar la calefacción por la noche",
     "Cambiar de piso",
     "Comprar una calefacción nueva"
    ],
    "correcta": "No apagar la calefacción por la noche",
    "explicacion": "«…no apague la calefacción por la noche»."
   },
   {
    "id": "LEE-averia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "У тебя дома что-то сломалось. Напиши хозяину по-испански: что случилось и что ты хочешь, чтобы он сделал.",
    "sit": {
     "necesita": [
      {
       "es": "что сломалось",
       "formas": [
        "se ha roto",
        "no funciona",
        "está roto",
        "se ha estropeado",
        "avería"
       ]
      },
      {
       "es": "просьба",
       "formas": [
        "quiero que",
        "necesito que",
        "puede",
        "podría",
        "por favor"
       ]
      }
     ],
     "modelos": [
      "Hola, se ha roto la lavadora. ¿Puede venir alguien mañana, por favor?"
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
    "es": "Marta necesitaba un papel del ayuntamiento para su trabajo. Primero quiso hacerlo por internet, pero la página no funcionaba.",
    "ru": "Марте нужна была справка из мэрии для работы. Сначала она хотела сделать это через интернет, но сайт не работал."
   },
   {
    "es": "Entonces fue al ayuntamiento. Había mucha gente: cogió un número y esperó su turno. Esperó casi una hora.",
    "ru": "Тогда она пошла в мэрию. Там было много людей: она взяла номерок и ждала своей очереди. Ждала почти час."
   },
   {
    "es": "Cuando llegó a la ventanilla, la funcionaria le dijo: «Para este trámite es necesario que traiga el pasaporte, una fotocopia y un papel de su empresa».",
    "ru": "Когда она подошла к окошку, сотрудница сказала: «Для этой процедуры нужно, чтобы вы принесли паспорт, ксерокопию и справку с работы»."
   },
   {
    "es": "Marta tenía el pasaporte, pero no tenía la fotocopia. «Hay una tienda aquí al lado», le dijo la funcionaria. «Vaya y vuelva. No hace falta que espere otra vez».",
    "ru": "Паспорт у Марты был, а ксерокопии не было. «Здесь рядом есть магазин, — сказала сотрудница. — Сходите и возвращайтесь. Ждать заново не нужно»."
   },
   {
    "es": "Diez minutos después Marta volvió con la fotocopia. La funcionaria le dio el papel y le dijo: «Que tenga un buen día».",
    "ru": "Через десять минут Марта вернулась с ксерокопией. Сотрудница выдала ей справку и сказала: «Хорошего дня»."
   },
   {
    "es": "Marta salió contenta. «A veces los trámites no son tan difíciles», pensó.",
    "ru": "Марта вышла довольная. «Иногда бумажные дела не такие уж трудные», — подумала она."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-ayuntamiento-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué fue Marta al ayuntamiento?",
    "opciones": [
     "La página de internet no funcionaba",
     "Quería ver a un amigo",
     "Tenía una cita"
    ],
    "correcta": "La página de internet no funcionaba",
    "explicacion": "«…la página no funcionaba»."
   },
   {
    "id": "LEE-ayuntamiento-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto tiempo esperó?",
    "opciones": [
     "Casi una hora",
     "Diez minutos",
     "Todo el día"
    ],
    "correcta": "Casi una hora",
    "explicacion": "«Esperó casi una hora»."
   },
   {
    "id": "LEE-ayuntamiento-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué no tenía?",
    "opciones": [
     "La fotocopia",
     "El pasaporte",
     "El dinero"
    ],
    "correcta": "La fotocopia",
    "explicacion": "«…no tenía la fotocopia»."
   },
   {
    "id": "LEE-ayuntamiento-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Marta tuvo que esperar otra vez.",
    "verdadero": false,
    "explicacion": "«No hace falta que espere otra vez»."
   },
   {
    "id": "LEE-ayuntamiento-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cómo salió Marta?",
    "opciones": [
     "Contenta",
     "Enfadada",
     "Cansada"
    ],
    "correcta": "Contenta",
    "explicacion": "«Marta salió contenta»."
   }
  ]
 },
 {
  "id": "LEE-reclamacion",
  "nivel": "B1",
  "desde": 11,
  "tema": "Жалобы",
  "titulo": "Una reclamación",
  "tituloRu": "Жалоба",
  "parrafos": [
   {
    "es": "Estimados señores:",
    "ru": "Уважаемые господа!"
   },
   {
    "es": "Les escribo para hacer una reclamación. El día 3 de marzo compré una lavadora en su tienda de la calle Mayor. Pagué cuatrocientos euros.",
    "ru": "Пишу вам, чтобы подать жалобу. 3 марта я купил стиральную машину в вашем магазине на улице Майор. Я заплатил четыреста евро."
   },
   {
    "es": "La lavadora llegó a mi casa el día 10, pero desde el primer día no funciona bien: hace mucho ruido y no sale el agua.",
    "ru": "Машину доставили 10-го, но с первого дня она плохо работает: очень шумит, и вода не сливается."
   },
   {
    "es": "Llamé tres veces a su tienda, pero nadie me contestó.",
    "ru": "Я три раза звонил в ваш магазин, но никто не ответил."
   },
   {
    "es": "Por eso les pido que cambien la lavadora por una nueva o que me devuelvan el dinero. Es importante que me contesten lo antes posible, porque no puedo lavar la ropa.",
    "ru": "Поэтому прошу вас заменить машину на новую или вернуть мне деньги. Важно, чтобы вы ответили как можно скорее, потому что я не могу стирать."
   },
   {
    "es": "Adjunto una fotocopia de la factura.",
    "ru": "Прилагаю копию чека."
   },
   {
    "es": "Atentamente, Pablo García",
    "ru": "С уважением, Пабло Гарсия"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-reclamacion-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué compró Pablo?",
    "opciones": [
     "Una lavadora",
     "Una nevera",
     "Un móvil"
    ],
    "correcta": "Una lavadora",
    "explicacion": "«…compré una lavadora en su tienda»."
   },
   {
    "id": "LEE-reclamacion-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuánto pagó?",
    "opciones": [
     "Cuatrocientos euros",
     "Cuarenta euros",
     "Cuatro mil euros"
    ],
    "correcta": "Cuatrocientos euros",
    "explicacion": "«Pagué cuatrocientos euros»."
   },
   {
    "id": "LEE-reclamacion-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué problema tiene la lavadora?",
    "opciones": [
     "Hace mucho ruido",
     "Es demasiado grande",
     "Es de otro color"
    ],
    "correcta": "Hace mucho ruido",
    "explicacion": "«…hace mucho ruido y no sale el agua»."
   },
   {
    "id": "LEE-reclamacion-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "La tienda contestó a sus llamadas.",
    "verdadero": false,
    "explicacion": "«…nadie me contestó»."
   },
   {
    "id": "LEE-reclamacion-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué pide Pablo?",
    "opciones": [
     "Una lavadora nueva o el dinero",
     "Otra factura",
     "Una cita"
    ],
    "correcta": "Una lavadora nueva o el dinero",
    "explicacion": "«…que cambien la lavadora por una nueva o que me devuelvan el dinero»."
   },
   {
    "id": "LEE-reclamacion-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué manda con la carta?",
    "opciones": [
     "Una fotocopia de la factura",
     "Una foto de la lavadora",
     "Su pasaporte"
    ],
    "correcta": "Una fotocopia de la factura",
    "explicacion": "«Adjunto una fotocopia de la factura»."
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
    "es": "Alquilar un piso en una ciudad grande como Madrid o Barcelona no es fácil. Esto es lo que tienes que saber.",
    "ru": "Снять квартиру в большом городе вроде Мадрида или Барселоны непросто. Вот что нужно знать."
   },
   {
    "es": "Primero, es importante que decidas cuánto puedes pagar. Normalmente el alquiler no debería ser demasiado alto.",
    "ru": "Сначала важно, чтобы ты решил, сколько можешь платить. Обычно аренда не должна быть слишком высокой."
   },
   {
    "es": "Cuando visites un piso, mira bien todo: la cocina, el baño, las ventanas, la calefacción. Abre los grifos y enciende las luces. Es mejor que encuentres los problemas antes, no después.",
    "ru": "Когда будешь смотреть квартиру, внимательно осмотри всё: кухню, ванную, окна, отопление. Открой краны и включи свет. Лучше найти проблемы до, а не после."
   },
   {
    "es": "Antes de firmar el contrato, léelo con calma. Si no entiendes algo, pregunta. No firmes nada sin entenderlo.",
    "ru": "Прежде чем подписывать договор, спокойно прочитай его. Если что-то непонятно, спроси. Ничего не подписывай, не поняв."
   },
   {
    "es": "Normalmente tendrás que pagar un mes antes. Pide siempre un papel cuando pagues.",
    "ru": "Обычно нужно будет заплатить за месяц вперёд. Всегда проси бумагу, когда платишь."
   },
   {
    "es": "Y una última cosa: habla con los vecinos. Ellos te dirán si el barrio es tranquilo y si el casero es buena persona.",
    "ru": "И последнее: поговори с соседями. Они скажут, тихий ли район и хороший ли человек хозяин."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-alquilar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué es importante decidir primero?",
    "opciones": [
     "Cuánto puedes pagar",
     "Qué muebles quieres",
     "Dónde trabajas"
    ],
    "correcta": "Cuánto puedes pagar",
    "explicacion": "«…es importante que decidas cuánto puedes pagar»."
   },
   {
    "id": "LEE-alquilar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué debes hacer cuando visitas un piso?",
    "opciones": [
     "Mirar bien todo",
     "Firmar el primer día",
     "Pagar el primer mes"
    ],
    "correcta": "Mirar bien todo",
    "explicacion": "«…mira bien todo»."
   },
   {
    "id": "LEE-alquilar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Es mejor firmar el contrato sin leerlo.",
    "verdadero": false,
    "explicacion": "«…léelo con calma… No firmes nada sin entenderlo»."
   },
   {
    "id": "LEE-alquilar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Quién te puede decir si el barrio es tranquilo?",
    "opciones": [
     "Los vecinos",
     "El casero",
     "El banco"
    ],
    "correcta": "Los vecinos",
    "explicacion": "«Ellos te dirán si el barrio es tranquilo»."
   },
   {
    "id": "LEE-alquilar-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Друг снимает квартиру. Дай ему по-испански один совет (es importante que / te recomiendo que…).",
    "sit": {
     "necesita": [
      {
       "es": "совет",
       "formas": [
        "es importante que",
        "te recomiendo que",
        "es mejor que",
        "deberías",
        "tienes que",
        "no firmes",
        "mira"
       ]
      }
     ],
     "modelos": [
      "Te recomiendo que hables con los vecinos."
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
    "es": "En las ciudades españolas hay más calles para bicis que antes, y cada vez más personas van al trabajo en bici. Pero no todo el mundo está de acuerdo.",
    "ru": "В испанских городах стало больше улиц для велосипедов, и всё больше людей ездят на работу на велосипеде. Но не все с этим согласны."
   },
   {
    "es": "Pablo ha vendido su coche. «En mi opinión, en Madrid el coche no es necesario», dice. «Por un lado, el metro funciona muy bien. Por otro lado, aparcar es muy caro. Además, la bici es buena para la salud y para el medio ambiente».",
    "ru": "Пабло продал машину. «По-моему, в Мадриде машина не нужна, — говорит он. — С одной стороны, метро работает очень хорошо. С другой стороны, парковка очень дорогая. К тому же велосипед полезен для здоровья и для окружающей среды»."
   },
   {
    "es": "Su padre no piensa lo mismo. «Yo vivo lejos del centro y trabajo en otra ciudad. Sin coche, tardaría dos horas en llegar. Para mí, el coche es necesario».",
    "ru": "Его отец думает иначе. «Я живу далеко от центра и работаю в другом городе. Без машины я бы добирался два часа. Для меня машина необходима»."
   },
   {
    "es": "Marta está en el medio: «Depende. Para ir por el centro, la bici es perfecta. Pero cuando llueve o hace mucho calor, prefiero el metro».",
    "ru": "Марта где-то посередине: «Зависит от ситуации. Для поездок по центру велосипед — идеален. Но когда идёт дождь или очень жарко, я предпочитаю метро»."
   },
   {
    "es": "¿Y tú? ¿Qué es mejor para ti: el coche, la bici o el transporte público?",
    "ru": "А ты? Что для тебя лучше: машина, велосипед или общественный транспорт?"
   }
  ],
  "preguntas": [
   {
    "id": "LEE-cochebici-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ha hecho Pablo?",
    "opciones": [
     "Ha vendido su coche",
     "Ha comprado un coche",
     "Ha perdido su bici"
    ],
    "correcta": "Ha vendido su coche",
    "explicacion": "«Pablo ha vendido su coche»."
   },
   {
    "id": "LEE-cochebici-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Según Pablo, ¿por qué no necesita el coche?",
    "opciones": [
     "El metro funciona bien",
     "No sabe conducir",
     "Vive en el campo"
    ],
    "correcta": "El metro funciona bien",
    "explicacion": "«…el metro funciona muy bien»."
   },
   {
    "id": "LEE-cochebici-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué necesita el coche su padre?",
    "opciones": [
     "Trabaja en otra ciudad",
     "Le gusta conducir",
     "No hay metro en Madrid"
    ],
    "correcta": "Trabaja en otra ciudad",
    "explicacion": "«…trabajo en otra ciudad»."
   },
   {
    "id": "LEE-cochebici-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Marta siempre va en bici.",
    "verdadero": false,
    "explicacion": "«…cuando llueve o hace mucho calor, prefiero el metro»."
   },
   {
    "id": "LEE-cochebici-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "А ты что думаешь? Выскажи мнение по-испански и объясни почему.",
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
       "es": "почему",
       "formas": [
        "porque",
        "ya que",
        "por eso",
        "además"
       ]
      }
     ],
     "modelos": [
      "Para mí, la bici es mejor porque es más barata."
     ]
    }
   }
  ]
 },
 {
  "id": "LEE-redes",
  "nivel": "B1",
  "desde": 12,
  "tema": "Технологии",
  "titulo": "Las redes sociales",
  "tituloRu": "Социальные сети",
  "parrafos": [
   {
    "es": "Hoy casi todo el mundo está en las redes sociales. Se dice que los españoles pasan más de una hora y media al día en ellas.",
    "ru": "Сегодня почти все сидят в социальных сетях. Говорят, что испанцы проводят в них больше полутора часов в день."
   },
   {
    "es": "Las redes tienen ventajas. Son buenas para hablar con amigos que viven lejos, para leer las noticias y para conocer gente nueva. Para Ana, son muy buenas, porque ve las fotos de su familia en Rusia.",
    "ru": "У соцсетей есть плюсы. Они хороши, чтобы общаться с друзьями, которые живут далеко, читать новости и знакомиться с новыми людьми. Для Ани они очень полезны: она видит фото своей семьи в России."
   },
   {
    "es": "Pero también tienen desventajas. Mucha gente pasa demasiado tiempo con el móvil y habla menos con las personas que tiene al lado. Además, en internet hay muchas noticias falsas.",
    "ru": "Но у них есть и минусы. Многие проводят слишком много времени с телефоном и меньше разговаривают с теми, кто рядом. Кроме того, в интернете много фальшивых новостей."
   },
   {
    "es": "Javier lo tiene claro: el móvil no entra en la mesa. «Cuando comemos, hablamos», dice. Aunque a veces es difícil, cree que es una buena idea.",
    "ru": "У Хавьера всё чётко: телефона за столом нет. «Когда мы едим — мы разговариваем», — говорит он. Хотя иногда это трудно, он считает, что это хорошая идея."
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
     "Más de una hora y media al día",
     "Diez minutos al día",
     "Cinco horas a la semana"
    ],
    "correcta": "Más de una hora y media al día",
    "explicacion": "«…más de una hora y media al día»."
   },
   {
    "id": "LEE-redes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Para qué usa Ana las redes?",
    "opciones": [
     "Para ver fotos de su familia",
     "Para buscar trabajo",
     "Para vender cosas"
    ],
    "correcta": "Para ver fotos de su familia",
    "explicacion": "«…ve las fotos de su familia en Rusia»."
   },
   {
    "id": "LEE-redes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué desventaja tienen las redes?",
    "opciones": [
     "Hay noticias falsas",
     "Son muy caras",
     "No funcionan bien"
    ],
    "correcta": "Hay noticias falsas",
    "explicacion": "«…en internet hay muchas noticias falsas»."
   },
   {
    "id": "LEE-redes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Javier usa el móvil cuando come.",
    "verdadero": false,
    "explicacion": "«…el móvil no entra en la mesa»."
   },
   {
    "id": "LEE-redes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piensa Javier de su idea?",
    "opciones": [
     "Que es buena, aunque difícil",
     "Que es imposible",
     "Que es aburrida"
    ],
    "correcta": "Que es buena, aunque difícil",
    "explicacion": "«Aunque a veces es difícil, cree que es una buena idea»."
   }
  ]
 },
 {
  "id": "LEE-reciclar",
  "nivel": "B1",
  "desde": 12,
  "tema": "Окружающая среда",
  "titulo": "Reciclar en casa",
  "tituloRu": "Сортировка мусора дома",
  "parrafos": [
   {
    "es": "En España la basura va en contenedores de colores. Antes a Ana le parecía difícil, pero ahora lo hace todos los días.",
    "ru": "В Испании мусор сортируют по разноцветным контейнерам. Раньше Ане это казалось трудным, но сейчас она делает это каждый день."
   },
   {
    "es": "El contenedor amarillo es para el plástico. El azul, para el papel. El verde, para las botellas.",
    "ru": "Жёлтый контейнер — для пластика. Синий — для бумаги. Зелёный — для бутылок."
   },
   {
    "es": "El marrón es para la comida. En el gris va lo que no va en los otros.",
    "ru": "Коричневый — для пищевых отходов. В серый — всё остальное."
   },
   {
    "es": "Según el ayuntamiento, en Barcelona se recicla cada año más, pero todavía no es bastante.",
    "ru": "По данным мэрии, в Барселоне с каждым годом сортируют всё больше, но пока недостаточно."
   },
   {
    "es": "Ana cree que reciclar es muy importante para el medio ambiente. «Es fácil y no cuesta nada», dice. «Si todos lo hacemos, el planeta estará un poco mejor».",
    "ru": "Аня считает, что сортировать мусор очень важно для окружающей среды. «Это просто и ничего не стоит, — говорит она. — Если все будем это делать, планете станет немного лучше»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-reciclar-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Para qué es el contenedor azul?",
    "opciones": [
     "Para el papel",
     "Para las botellas",
     "Para la comida"
    ],
    "correcta": "Para el papel",
    "explicacion": "«El azul, para el papel»."
   },
   {
    "id": "LEE-reciclar-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Dónde va una botella?",
    "opciones": [
     "En el verde",
     "En el amarillo",
     "En el marrón"
    ],
    "correcta": "En el verde",
    "explicacion": "«El verde, para las botellas»."
   },
   {
    "id": "LEE-reciclar-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Antes a Ana le parecía fácil reciclar.",
    "verdadero": false,
    "explicacion": "«Antes a Ana le parecía difícil»."
   },
   {
    "id": "LEE-reciclar-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué piensa Ana de reciclar?",
    "opciones": [
     "Que es muy importante",
     "Que es demasiado difícil",
     "Que no sirve para nada"
    ],
    "correcta": "Que es muy importante",
    "explicacion": "«Ana cree que reciclar es muy importante»."
   }
  ]
 },
 {
  "id": "LEE-turismo",
  "nivel": "B1",
  "desde": 12,
  "tema": "Мнения",
  "titulo": "El turismo en Barcelona",
  "tituloRu": "Туризм в Барселоне",
  "parrafos": [
   {
    "es": "Barcelona es una ciudad con muchos turistas: cada año llegan más de diez millones. El turismo es muy importante para la ciudad, pero también trae problemas.",
    "ru": "В Барселоне очень много туристов: каждый год приезжает больше десяти миллионов человек. Туризм очень важен для города, но он приносит и проблемы."
   },
   {
    "es": "Por un lado, los turistas dejan mucho dinero en hoteles, restaurantes y tiendas. Gracias a ellos, miles de personas tienen trabajo.",
    "ru": "С одной стороны, туристы оставляют много денег в гостиницах, ресторанах и магазинах. Благодаря им тысячи людей имеют работу."
   },
   {
    "es": "Por otro lado, muchos vecinos están hartos. En el centro hay tanta gente que es difícil caminar. Además, muchos pisos se alquilan a turistas y por eso los precios de los pisos han subido mucho.",
    "ru": "С другой стороны, многие жители устали. В центре столько людей, что трудно пройти. К тому же многие квартиры сдают туристам, и поэтому цены на жильё сильно выросли."
   },
   {
    "es": "El ayuntamiento ha decidido que los turistas paguen un impuesto más alto.",
    "ru": "Мэрия решила, что туристы должны платить более высокий налог."
   },
   {
    "es": "Lucía lo ve así: «Me gusta que la gente venga a conocer mi ciudad. Pero es necesario que Barcelona sea una ciudad para vivir, no solo para visitar».",
    "ru": "Лусия видит это так: «Мне нравится, что люди приезжают познакомиться с моим городом. Но нужно, чтобы Барселона была городом для жизни, а не только для туристов»."
   }
  ],
  "preguntas": [
   {
    "id": "LEE-turismo-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Cuántos turistas llegan cada año?",
    "opciones": [
     "Más de diez millones",
     "Un millón",
     "Cien mil"
    ],
    "correcta": "Más de diez millones",
    "explicacion": "«…más de diez millones de turistas»."
   },
   {
    "id": "LEE-turismo-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Qué ventaja tiene el turismo?",
    "opciones": [
     "Hay más trabajo",
     "Los pisos son más baratos",
     "Hay menos gente"
    ],
    "correcta": "Hay más trabajo",
    "explicacion": "«Gracias a ellos, miles de personas tienen trabajo»."
   },
   {
    "id": "LEE-turismo-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "¿Por qué han subido los precios de los pisos?",
    "opciones": [
     "Muchos se alquilan a turistas",
     "Hay más vecinos",
     "El metro es caro"
    ],
    "correcta": "Muchos se alquilan a turistas",
    "explicacion": "«…muchos pisos se alquilan a turistas»."
   },
   {
    "id": "LEE-turismo-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Lucía no quiere que vengan turistas.",
    "verdadero": false,
    "explicacion": "«Me gusta que la gente venga a conocer mi ciudad»."
   },
   {
    "id": "LEE-turismo-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Что ты думаешь о туризме в твоём городе? Ответь по-испански: плюс и минус.",
    "sit": {
     "necesita": [
      {
       "es": "плюс",
       "formas": [
        "por un lado",
        "es bueno",
        "me gusta",
        "gracias a"
       ]
      },
      {
       "es": "минус",
       "formas": [
        "por otro lado",
        "pero",
        "sin embargo",
        "aunque"
       ]
      }
     ],
     "modelos": [
      "Por un lado, el turismo da trabajo; por otro lado, hay demasiada gente."
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
    "ru": "Когда они наконец пришли в Сантьяго, Хавьер был очень взволнован. «Это был один из самых прекрасных опытов в моей жизни. Я понял, что многое узнал о себе»."
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
    "es": "En España hay fiestas durante todo el año, y cada pueblo y cada ciudad tiene las suyas.",
    "ru": "В Испании праздники идут круглый год, и у каждой деревни и каждого города — свои."
   },
   {
    "es": "En marzo, en Valencia, se celebran las Fallas. Durante varios días hay por las calles enormes muñecos de papel. La última noche todos desaparecen en el fuego. «La primera vez que lo vi, no me lo podía creer», recuerda Marta.",
    "ru": "В марте в Валенсии празднуют Фальяс. Несколько дней на улицах стоят огромные куклы из папье-маше. В последнюю ночь их все сжигают. «Когда я впервые это увидела, не могла поверить», — вспоминает Марта."
   },
   {
    "es": "En abril, Sevilla celebra su Feria: la gente baila, come y bebe en la calle durante una semana entera.",
    "ru": "В апреле Севилья празднует свою Ярмарку: целую неделю люди танцуют, едят и пьют на улице."
   },
   {
    "es": "En julio, en Pamplona, son los Sanfermines. Es una semana de fiesta, de día y de noche, y es famosa en todo el mundo. Pero una parte de la fiesta es peligrosa.",
    "ru": "В июле в Памплоне проходят Сан-Фермин. Это неделя праздника днём и ночью, известная во всём мире. Но часть праздника опасна (бег с быками)."
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
    "pide": "¿Qué pasa la última noche de las Fallas?",
    "opciones": [
     "Los muñecos desaparecen en el fuego",
     "Llegan los Reyes",
     "Empieza la Feria"
    ],
    "correcta": "Los muñecos desaparecen en el fuego",
    "explicacion": "«La última noche todos desaparecen en el fuego»."
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
    "es": "«También fue difícil acostumbrarme al horario. En Rusia ceno a las siete; aquí la gente cena a las diez. ¡Al principio tenía mucha hambre!».",
    "ru": "«Ещё было трудно привыкнуть к распорядку. В России я ужинаю в семь, а здесь люди ужинают в десять. Сначала я очень хотела есть!»."
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
    "forma": "vf",
    "afirmacion": "Ana todavía tiene vergüenza al hablar.",
    "verdadero": false,
    "explicacion": "«…ya no me da vergüenza hablar»."
   },
   {
    "id": "LEE-primerano-5",
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
    "id": "LEE-primerano-6",
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
    "es": "Cada vez más españoles se van de las grandes ciudades a vivir a un pueblo. Hemos hablado con dos personas que han tomado decisiones muy diferentes.",
    "ru": "Всё больше испанцев уезжают из больших городов жить в деревню. Мы поговорили с двумя людьми, которые приняли совсем разные решения."
   },
   {
    "es": "Carlos, un amigo de Pablo, se fue de Madrid hace dos años. «Estaba agobiado: trabajaba diez horas al día y tardaba una hora en llegar a la oficina. Ahora trabajo desde casa, en un pueblo en la montaña. Tengo menos estrés, el aire es limpio y conozco a todos mis vecinos».",
    "ru": "Карлос, друг Пабло, уехал из Мадрида два года назад. «Я был измотан: работал по десять часов в день и час добирался до офиса. Теперь я работаю из дома, в деревне в горах. У меня меньше стресса, я дышу чистым воздухом и знаю всех соседей»."
   },
   {
    "es": "Pero reconoce que no todo es perfecto: «En el pueblo no hay cine y no hay hospital, y el autobús pasa solo dos veces al día».",
    "ru": "Но он признаёт, что не всё идеально: «В деревне нет ни кинотеатра, ни больницы, а автобус ходит всего два раза в день»."
   },
   {
    "es": "Lucía piensa lo contrario. «Yo nací en Barcelona y siempre he vivido aquí. En la ciudad hay de todo: trabajo, cultura, gente de todo el mundo. Nunca me aburro».",
    "ru": "Лусия думает наоборот. «Я родилась в Барселоне и всегда здесь жила. В городе есть всё: работа, культура, люди со всего мира. Мне никогда не скучно»."
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
    "forma": "vf",
    "afirmacion": "Lucía nació en un pueblo.",
    "verdadero": false,
    "explicacion": "«Yo nací en Barcelona»."
   },
   {
    "id": "LEE-ciudadpueblo-5",
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
    "id": "LEE-ciudadpueblo-6",
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
