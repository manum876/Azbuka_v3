/* ============================================================
   DATA-LECTURAS.JS — Lecturas graduadas (19/10/2026, Contexto §6.23)
   ------------------------------------------------------------
   Textos de lectura escritos para Azbuka (originales), con la
   traducción de cada párrafo y preguntas de comprensión.
   Cada texto:
     id        LEC-…, estable (el progreso depende de él)
     nivel     A1 · A2 · B1
     desde     la unidad desde la que se entiende: todo su vocabulario
               está visto hasta ahí (verificado con el léxico; solo los
               nombres propios no están en el diccionario)
     tema, titulo (ruso, con acento), tituloEs
     parrafos  [{ ru, es }]
     preguntas ejercicios de unidad.js (elegir, vf, situacion), con id
               LEC-…-N; entran al repaso espaciado.
   Decisión de Manu (19/10/2026): sin palabras nuevas en el
   diccionario; donde hacía falta, se reemplazaron por palabras vistas.
   Meta: 4 o 5 textos por unidad.
   20/10/2026: 12 textos para las U2–U4 (preguntas en español: en
   esas unidades todavía no se lee una pregunta en ruso). La U1 no
   tiene lecturas (Manu). Largo (Manu): unas 20 palabras más por
   unidad: U2 ~40, U3 ~60, U4 ~80, U5 ~100, U9 ~180, U13 ~250.
   ============================================================ */
const LECTURAS = [
 {
  "id": "LEC-perfil",
  "nivel": "A1",
  "desde": 2,
  "tema": "Presentarse",
  "titulo": "Про́филь Ма́ши",
  "tituloEs": "El perfil de Masha",
  "parrafos": [
   {
    "ru": "Приве́т! Меня́ зову́т Ма́ша. Я из Москвы́. Я студе́нтка.",
    "es": "¡Hola! Me llamo Masha. Soy de Moscú y estudio en la universidad."
   },
   {
    "ru": "Я говорю́ по-ру́сски и по-англи́йски. Я учу́ испа́нский. Испа́нский — краси́вый язы́к, но тру́дный.",
    "es": "Hablo ruso e inglés. Estoy aprendiendo español: es un idioma bonito, pero difícil."
   },
   {
    "ru": "Мой друг Лу́кас из Аргенти́ны. Он студе́нт. Он говори́т по-испа́нски и немно́го по-ру́сски. А мой брат Ди́ма говори́т то́лько по-ру́сски.",
    "es": "Mi amigo Lucas es argentino. También es estudiante. Habla español y un poco de ruso. Mi hermano Dima, en cambio, solo habla ruso."
   },
   {
    "ru": "А ты? Как тебя́ зову́т? Отку́да ты?",
    "es": "¿Y tú? ¿Cómo te llamas? ¿De dónde eres?"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-perfil-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿De dónde es Masha?",
    "opciones": [
     "Из Москвы́.",
     "Из Аргенти́ны.",
     "Из Испа́нии."
    ],
    "correcta": "Из Москвы́.",
    "explicacion": "«Я из Москвы́»."
   },
   {
    "id": "LEC-perfil-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué idioma estudia Masha?",
    "opciones": [
     "Испа́нский.",
     "Англи́йский.",
     "Ру́сский."
    ],
    "correcta": "Испа́нский.",
    "explicacion": "«Я учу́ испа́нский»."
   },
   {
    "id": "LEC-perfil-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo habla ruso Lucas?",
    "opciones": [
     "Un poco",
     "Muy bien",
     "Nada"
    ],
    "correcta": "Un poco",
    "explicacion": "«Он говори́т… немно́го по-ру́сски»: un poco."
   },
   {
    "id": "LEC-perfil-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ди́ма говори́т по-англи́йски.",
    "verdadero": false,
    "explicacion": "«Ди́ма говори́т то́лько по-ру́сски»: solo ruso."
   },
   {
    "id": "LEC-perfil-5",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "situacion",
    "pide": "Contesta las preguntas de Masha: ¿cómo te llamas y de dónde eres?",
    "sit": {
     "necesita": [
      {
       "es": "cómo te llamas (Меня́ зову́т…)",
       "formas": [
        "меня́ зову́т",
        "я"
       ]
      },
      {
       "es": "de dónde eres (Я из…)",
       "formas": [
        "из"
       ]
      }
     ],
     "modelos": [
      "Меня́ зову́т А́на. Я из Испа́нии."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-grupo",
  "nivel": "A1",
  "desde": 2,
  "tema": "Presentarse",
  "titulo": "Но́вая гру́ппа",
  "tituloEs": "Grupo nuevo",
  "parrafos": [
   {
    "ru": "— Здра́вствуйте! Меня́ зову́т О́льга Петро́вна. Я учи́тельница. А как вас зову́т?",
    "es": "—¡Buenos días! Me llamo Olga Petrovna y soy la profesora. ¿Y ustedes cómo se llaman?"
   },
   {
    "ru": "— Меня́ зову́т Лу́кас. Я из Аргенти́ны.",
    "es": "—Yo soy Lucas, de Argentina."
   },
   {
    "ru": "— О́чень прия́тно, Лу́кас. А вы?",
    "es": "—Encantada, Lucas. ¿Y usted?"
   },
   {
    "ru": "— Я А́нна. Я из Испа́нии, из Барсело́ны. Я говорю́ по-испа́нски и по-катала́нски.",
    "es": "—Soy Anna. Vengo de España, de Barcelona. Hablo español y catalán."
   },
   {
    "ru": "— Прекра́сно. А вы говори́те по-ру́сски?",
    "es": "—Estupendo. ¿Y saben ruso?"
   },
   {
    "ru": "— Да, немно́го. Мы у́чим ру́сский.",
    "es": "—Sí, algo. Lo estamos aprendiendo."
   },
   {
    "ru": "— Молодцы́!",
    "es": "—¡Muy bien!"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-grupo-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Quién es Olga Petrovna?",
    "opciones": [
     "La profesora",
     "Una estudiante",
     "La mamá de Anna"
    ],
    "correcta": "La profesora",
    "explicacion": "«Я учи́тельница»."
   },
   {
    "id": "LEC-grupo-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué idiomas habla Anna?",
    "opciones": [
     "Испа́нский и катала́нский",
     "Англи́йский",
     "То́лько ру́сский"
    ],
    "correcta": "Испа́нский и катала́нский",
    "explicacion": "«Я говорю́ по-испа́нски и по-катала́нски»."
   },
   {
    "id": "LEC-grupo-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "О́льга Петро́вна говори́т «ты».",
    "verdadero": false,
    "explicacion": "Les habla de «вы»: «А как вас зову́т?», «А вы говори́те по-ру́сски?»."
   }
  ]
 },
 {
  "id": "LEC-kafe",
  "nivel": "A1",
  "desde": 2,
  "tema": "Saludar",
  "titulo": "В кафе́",
  "tituloEs": "En el café",
  "parrafos": [
   {
    "ru": "— Приве́т, Ма́ша! Как дела́?",
    "es": "—¡Hola, Masha! ¿Qué tal?"
   },
   {
    "ru": "— Приве́т! Хорошо́, спаси́бо. А у тебя́?",
    "es": "—¡Hola! Bien, gracias. ¿Y tú?"
   },
   {
    "ru": "— То́же хорошо́. Э́то мой брат.",
    "es": "—Bien también. Te presento a mi hermano."
   },
   {
    "ru": "— О́чень прия́тно! Как тебя́ зову́т?",
    "es": "—¡Mucho gusto! ¿Cómo te llamas?"
   },
   {
    "ru": "— Меня́ зову́т Ди́ма. А тебя́?",
    "es": "—Dima. ¿Y tú?"
   },
   {
    "ru": "— Меня́ зову́т Лу́кас. Я из Аргенти́ны.",
    "es": "—Yo me llamo Lucas. Soy argentino."
   },
   {
    "ru": "— Ты говори́шь по-ру́сски?",
    "es": "—¿Sabes ruso?"
   },
   {
    "ru": "— Да, немно́го. Я учу́ ру́сский.",
    "es": "—Sí, un poco. Lo estoy estudiando."
   },
   {
    "ru": "— Молоде́ц!",
    "es": "—¡Bravo!"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-kafe-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Quién es Dima?",
    "opciones": [
     "El hermano de Masha",
     "Un profesor",
     "Un amigo de Argentina"
    ],
    "correcta": "El hermano de Masha",
    "explicacion": "Masha dice «Э́то мой брат»."
   },
   {
    "id": "LEC-kafe-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo está Masha?",
    "opciones": [
     "Хорошо́.",
     "Пло́хо.",
     "Так себе."
    ],
    "correcta": "Хорошо́.",
    "explicacion": "«Хорошо́, спаси́бо»."
   },
   {
    "id": "LEC-kafe-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Лу́кас из Москвы́.",
    "verdadero": false,
    "explicacion": "«Я из Аргенти́ны»."
   }
  ]
 },
 {
  "id": "LEC-carta",
  "nivel": "A1",
  "desde": 2,
  "tema": "Presentarse",
  "titulo": "Письмо́",
  "tituloEs": "Una carta",
  "parrafos": [
   {
    "ru": "Здра́вствуйте!",
    "es": "¡Hola!"
   },
   {
    "ru": "Меня́ зову́т А́нна. Я из Барсело́ны. Я говорю́ по-испа́нски, по-катала́нски и по-англи́йски.",
    "es": "Me llamo Anna y soy de Barcelona. Hablo español, catalán e inglés."
   },
   {
    "ru": "По-ру́сски я говорю́ пло́хо, но я учу́ ру́сский. Ру́сский язы́к — о́чень интере́сный. Мой друг Лу́кас то́же у́чит ру́сский. Он из Аргенти́ны.",
    "es": "Mi ruso todavía es malo, pero lo estoy aprendiendo: es una lengua muy interesante. Mi amigo Lucas, que es argentino, también lo estudia."
   },
   {
    "ru": "А как вас зову́т? Отку́да вы?",
    "es": "¿Y tú cómo te llamas? ¿De dónde eres?"
   },
   {
    "ru": "До свида́ния!",
    "es": "¡Hasta pronto!"
   },
   {
    "ru": "А́нна",
    "es": "Anna"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-carta-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué idiomas habla Anna?",
    "opciones": [
     "Испа́нский, катала́нский и англи́йский",
     "То́лько ру́сский",
     "Ру́сский и англи́йский"
    ],
    "correcta": "Испа́нский, катала́нский и англи́йский",
    "explicacion": "«Я говорю́ по-испа́нски, по-катала́нски и по-англи́йски»."
   },
   {
    "id": "LEC-carta-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "А́нна хорошо́ говори́т по-ру́сски.",
    "verdadero": false,
    "explicacion": "«По-ру́сски я говорю́ пло́хо»."
   },
   {
    "id": "LEC-carta-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Quién más estudia ruso?",
    "opciones": [
     "Lucas",
     "Masha",
     "Olga"
    ],
    "correcta": "Lucas",
    "explicacion": "«Мой друг Лу́кас то́же у́чит ру́сский»."
   },
   {
    "id": "LEC-carta-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "situacion",
    "pide": "Contesta la carta de Anna: dile cómo te llamas y de dónde eres.",
    "sit": {
     "necesita": [
      {
       "es": "tu nombre (Меня́ зову́т…)",
       "formas": [
        "меня́ зову́т",
        "я"
       ]
      },
      {
       "es": "de dónde eres (Я из…)",
       "formas": [
        "из"
       ]
      }
     ],
     "modelos": [
      "Меня́ зову́т Ма́рта. Я из Испа́нии."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-piso",
  "nivel": "A1",
  "desde": 3,
  "tema": "La casa",
  "titulo": "Моя́ кварти́ра",
  "tituloEs": "Mi apartamento",
  "parrafos": [
   {
    "ru": "Вот моя́ кварти́ра. Она́ ма́ленькая, но краси́вая и о́чень све́тлая.",
    "es": "Este es mi apartamento. Es pequeño, pero bonito y con mucha luz."
   },
   {
    "ru": "Вот ко́мната. Тут стол, стул, крова́ть и шкаф. Стол но́вый, а стул ста́рый. Окно́ большо́е, а ла́мпа ма́ленькая и бе́лая.",
    "es": "Aquí está la habitación, con una mesa, una silla, una cama y un armario. La mesa es nueva; la silla, vieja. La ventana es grande, y la lámpara, pequeña y blanca."
   },
   {
    "ru": "Вот ку́хня. Она́ бе́лая и о́чень ую́тная. Тут холоди́льник и плита́. Холоди́льник ста́рый, но хоро́ший.",
    "es": "Esta es la cocina: blanca y muy acogedora. Tiene nevera y cocina. La nevera ya tiene años, pero funciona bien."
   },
   {
    "ru": "А э́то мой кот. Он чёрный и уже́ ста́рый. Его́ зову́т Ба́рсик.",
    "es": "Y este es mi gato. Es negro y ya es mayor. Se llama Bársik."
   },
   {
    "ru": "Ря́дом парк и магази́н.",
    "es": "Cerca hay un parque y una tienda."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-piso-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo es el piso?",
    "opciones": [
     "Ма́ленькая, но краси́вая",
     "Больша́я и ста́рая",
     "Но́вая и тёмная"
    ],
    "correcta": "Ма́ленькая, но краси́вая",
    "explicacion": "«Она́ ма́ленькая, но краси́вая и о́чень све́тлая»."
   },
   {
    "id": "LEC-piso-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Стул но́вый.",
    "verdadero": false,
    "explicacion": "«Стол но́вый, а стул ста́рый»."
   },
   {
    "id": "LEC-piso-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué es viejo en la cocina?",
    "opciones": [
     "Холоди́льник",
     "Плита́",
     "Ла́мпа"
    ],
    "correcta": "Холоди́льник",
    "explicacion": "«Холоди́льник ста́рый, но хоро́ший»."
   },
   {
    "id": "LEC-piso-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo se llama el gato?",
    "opciones": [
     "Ба́рсик",
     "Рекс",
     "Му́рка"
    ],
    "correcta": "Ба́рсик",
    "explicacion": "«Его́ зову́т Ба́рсик»."
   }
  ]
 },
 {
  "id": "LEC-anuncio",
  "nivel": "A1",
  "desde": 3,
  "tema": "La casa",
  "titulo": "Объявле́ние",
  "tituloEs": "Un anuncio",
  "parrafos": [
   {
    "ru": "Хоро́шая кварти́ра!",
    "es": "¡Un buen apartamento!"
   },
   {
    "ru": "Кварти́ра больша́я и све́тлая. Ко́мнаты больши́е и тёплые. Ку́хня но́вая и удо́бная. Холоди́льник и плита́ то́же но́вые. Ва́нная ма́ленькая, но краси́вая. О́кна больши́е, балко́н то́же большо́й.",
    "es": "Es grande y luminoso. Las habitaciones son amplias y cálidas. La cocina, nueva y práctica, y también la nevera y los fogones están a estrenar. El baño es pequeño, pero bonito. Tiene ventanales y un balcón grande."
   },
   {
    "ru": "Ме́бель но́вая: дива́н, кре́сло, стол и сту́лья. Дива́н большо́й и мя́гкий.",
    "es": "Los muebles son nuevos: sofá, sillón, mesa y sillas. El sofá es amplio y blando."
   },
   {
    "ru": "Дом но́вый. Тут лифт и гара́ж. Сосе́ди хоро́шие.",
    "es": "El edificio es nuevo, con ascensor y garaje. Los vecinos son amables."
   },
   {
    "ru": "Ря́дом метро́, парк, шко́ла и магази́н. Райо́н ти́хий и зелёный.",
    "es": "Al lado hay metro, un parque, un colegio y una tienda. El barrio es tranquilo y verde."
   },
   {
    "ru": "Цена́ ни́зкая.",
    "es": "Y el precio, bajo."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-anuncio-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ва́нная больша́я.",
    "verdadero": false,
    "explicacion": "«Ва́нная ма́ленькая, но краси́вая»."
   },
   {
    "id": "LEC-anuncio-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo es el barrio?",
    "opciones": [
     "Ти́хий и зелёный",
     "Большо́й",
     "Ста́рый"
    ],
    "correcta": "Ти́хий и зелёный",
    "explicacion": "«Райо́н ти́хий и зелёный»."
   },
   {
    "id": "LEC-anuncio-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué hay en el edificio?",
    "opciones": [
     "Лифт и гара́ж",
     "Парк и шко́ла",
     "Метро́"
    ],
    "correcta": "Лифт и гара́ж",
    "explicacion": "«Тут лифт и гара́ж». El metro y el parque están al lado."
   },
   {
    "id": "LEC-anuncio-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo es el sofá?",
    "opciones": [
     "Большо́й и мя́гкий",
     "Ма́ленький и ста́рый",
     "Бе́лый"
    ],
    "correcta": "Большо́й и мя́гкий",
    "explicacion": "«Дива́н большо́й и мя́гкий»."
   }
  ]
 },
 {
  "id": "LEC-mochila",
  "nivel": "A1",
  "desde": 3,
  "tema": "Objetos",
  "titulo": "Мой рюкза́к",
  "tituloEs": "Mi mochila",
  "parrafos": [
   {
    "ru": "Вот мой рюкза́к. Он си́ний и о́чень большо́й.",
    "es": "Esta es mi mochila. Es azul y enorme."
   },
   {
    "ru": "Тут кни́ги, тетра́ди, ру́чки и карандаши́. Кни́ги тяжёлые, а тетра́ди лёгкие. Ру́чки си́ние и чёрные. Вот слова́рь. Он большо́й и тяжёлый.",
    "es": "Dentro llevo libros, cuadernos, bolígrafos y lápices. Los libros pesan; los cuadernos, no. Los bolígrafos son azules y negros. Y aquí está el diccionario: grande y pesado."
   },
   {
    "ru": "Вот мой телефо́н. Он но́вый и дорого́й. А э́то мои́ очки́. Они́ ста́рые, но хоро́шие.",
    "es": "Este es mi teléfono, nuevo y caro. Y estas, mis gafas: viejas, pero buenas."
   },
   {
    "ru": "Ещё тут ключи́, кошелёк и зонт. Кошелёк кра́сный, а зонт чёрный.",
    "es": "También llevo las llaves, la cartera y el paraguas. La cartera es roja, y el paraguas, negro."
   },
   {
    "ru": "И ещё я́блоко. Оно́ кра́сное и вку́сное.",
    "es": "Y una manzana roja y rica."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-mochila-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿De qué color es la mochila?",
    "opciones": [
     "Си́ний",
     "Чёрный",
     "Кра́сный"
    ],
    "correcta": "Си́ний",
    "explicacion": "«Он си́ний и о́чень большо́й». Lo rojo es la cartera y la manzana."
   },
   {
    "id": "LEC-mochila-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Кни́ги лёгкие.",
    "verdadero": false,
    "explicacion": "«Кни́ги тяжёлые, а тетра́ди лёгкие»."
   },
   {
    "id": "LEC-mochila-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo son las gafas?",
    "opciones": [
     "Ста́рые, но хоро́шие",
     "Но́вые и дороги́е",
     "Чёрные"
    ],
    "correcta": "Ста́рые, но хоро́шие",
    "explicacion": "«Они́ ста́рые, но хоро́шие»."
   },
   {
    "id": "LEC-mochila-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué es negro?",
    "opciones": [
     "Зонт",
     "Кошелёк",
     "Я́блоко"
    ],
    "correcta": "Зонт",
    "explicacion": "«Кошелёк кра́сный, а зонт чёрный»."
   }
  ]
 },
 {
  "id": "LEC-suvenir",
  "nivel": "A1",
  "desde": 3,
  "tema": "Objetos",
  "titulo": "Сувени́ры",
  "tituloEs": "Recuerdos",
  "parrafos": [
   {
    "ru": "Вот ку́клы. Они́ краси́вые и ра́зные: больши́е и ма́ленькие.",
    "es": "Aquí están las muñecas: bonitas y de todos los tamaños."
   },
   {
    "ru": "Вот ча́йник. Он ста́рый и о́чень дорого́й.",
    "es": "Esta tetera es antigua y carísima."
   },
   {
    "ru": "А э́то ша́пка. Она́ тёплая и мя́гкая. Ша́пка бе́лая, а шарф кра́сный.",
    "es": "Este gorro es abrigado y suave. El gorro es blanco, y la bufanda, roja."
   },
   {
    "ru": "Вот ча́шки. Они́ бе́лые и си́ние. А э́то ло́жки. Они́ ма́ленькие и о́чень краси́вые.",
    "es": "Aquí hay tazas, blancas y azules, y cucharas, pequeñas y preciosas."
   },
   {
    "ru": "Тут ещё кни́га и календа́рь. Кни́га ру́сская, а календа́рь но́вый. Вот откры́тки. Они́ ста́рые, но о́чень интере́сные.",
    "es": "También hay un libro ruso y un calendario nuevo. Y unas postales antiguas, muy curiosas."
   },
   {
    "ru": "Э́то хоро́шие пода́рки!",
    "es": "¡Son buenos regalos!"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-suvenir-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo es la tetera?",
    "opciones": [
     "Ста́рый и дорого́й",
     "Но́вый и дешёвый",
     "Ма́ленький и бе́лый"
    ],
    "correcta": "Ста́рый и дорого́й",
    "explicacion": "«Он ста́рый и о́чень дорого́й»."
   },
   {
    "id": "LEC-suvenir-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Шарф бе́лый.",
    "verdadero": false,
    "explicacion": "«Ша́пка бе́лая, а шарф кра́сный»."
   },
   {
    "id": "LEC-suvenir-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo son las cucharas?",
    "opciones": [
     "Ма́ленькие и краси́вые",
     "Больши́е",
     "Си́ние"
    ],
    "correcta": "Ма́ленькие и краси́вые",
    "explicacion": "«Они́ ма́ленькие и о́чень краси́вые»."
   },
   {
    "id": "LEC-suvenir-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo son las postales?",
    "opciones": [
     "Ста́рые и интере́сные",
     "Но́вые",
     "Ру́сские"
    ],
    "correcta": "Ста́рые и интере́сные",
    "explicacion": "«Они́ ста́рые, но о́чень интере́сные»."
   }
  ]
 },
 {
  "id": "LEC-tarde",
  "nivel": "A1",
  "desde": 4,
  "tema": "La familia",
  "titulo": "Ве́чер до́ма",
  "tituloEs": "Una tarde en casa",
  "parrafos": [
   {
    "ru": "Ве́чер. Вся семья́ до́ма.",
    "es": "Es de noche y toda la familia está en casa."
   },
   {
    "ru": "Па́па чита́ет газе́ту. Ма́ма слу́шает му́зыку и пьёт чай.",
    "es": "Papá lee el diario. Mamá escucha música con un té."
   },
   {
    "ru": "Ма́ша чита́ет кни́гу. Она́ лю́бит рома́ны. Ди́ма смо́трит футбо́л. Он о́чень лю́бит спорт.",
    "es": "Masha lee un libro: le encantan las novelas. Dima mira el fútbol, porque le apasiona el deporte."
   },
   {
    "ru": "А ба́бушка пи́шет письмо́. Она́ лю́бит пи́сьма и не лю́бит телефо́н.",
    "es": "La abuela escribe una carta. Le gustan las cartas y no soporta el teléfono."
   },
   {
    "ru": "Де́душка гото́вит у́жин: суп и ры́бу. Ма́ма и Ма́ша лю́бят ры́бу, а Ди́ма не лю́бит.",
    "es": "El abuelo prepara la cena: sopa y pescado. A mamá y a Masha les gusta el pescado; a Dima, no."
   },
   {
    "ru": "Пото́м ма́ма и па́па смо́трят фильм. Ма́ша пьёт молоко́, а Ди́ма ест торт. Де́душка чита́ет журна́л.",
    "es": "Después, mamá y papá ven una película. Masha toma leche y Dima come tarta. El abuelo hojea una revista."
   },
   {
    "ru": "А ко́шка спит. Она́ лю́бит ве́чер и дива́н.",
    "es": "Y la gata duerme. Le gustan la noche y el sofá."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-tarde-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué lee papá?",
    "opciones": [
     "Газе́ту",
     "Кни́гу",
     "Журна́л"
    ],
    "correcta": "Газе́ту",
    "explicacion": "«Па́па чита́ет газе́ту»: газе́та → газе́ту."
   },
   {
    "id": "LEC-tarde-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Quién prepara la cena?",
    "opciones": [
     "Де́душка",
     "Ма́ма",
     "Ба́бушка"
    ],
    "correcta": "Де́душка",
    "explicacion": "«Де́душка гото́вит у́жин»."
   },
   {
    "id": "LEC-tarde-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ди́ма лю́бит ры́бу.",
    "verdadero": false,
    "explicacion": "«Ма́ма и Ма́ша лю́бят ры́бу, а Ди́ма не лю́бит»."
   },
   {
    "id": "LEC-tarde-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué no le gusta a la abuela?",
    "opciones": [
     "Телефо́н",
     "Пи́сьма",
     "Му́зыка"
    ],
    "correcta": "Телефо́н",
    "explicacion": "«Она́ лю́бит пи́сьма и не лю́бит телефо́н»."
   }
  ]
 },
 {
  "id": "LEC-compra",
  "nivel": "A1",
  "desde": 4,
  "tema": "Comida",
  "titulo": "Поку́пки",
  "tituloEs": "La compra",
  "parrafos": [
   {
    "ru": "Сего́дня суббо́та. Лу́кас покупа́ет еду́. Он берёт хлеб, сыр, ры́бу и мя́со.",
    "es": "Es sábado y Lucas hace la compra: pan, queso, pescado y carne."
   },
   {
    "ru": "Ещё он покупа́ет во́ду, молоко́ и сок. Он о́чень лю́бит сок.",
    "es": "Además se lleva agua, leche y zumo, que le encanta."
   },
   {
    "ru": "Он не пьёт ко́фе, но покупа́ет ко́фе. Почему́? Его́ друг Ди́ма лю́бит ко́фе. Ди́ма пьёт ко́фе у́тром и ве́чером.",
    "es": "No toma café, pero compra un paquete. ¿Por qué? Porque a su amigo Dima le gusta mucho: lo toma por la mañana y por la noche."
   },
   {
    "ru": "В магази́не он ви́дит Ма́шу. Ма́ша покупа́ет хлеб и я́блоки. Лу́кас берёт ещё сыр: Ма́ша лю́бит сыр.",
    "es": "En la tienda se encuentra con Masha, que compra pan y manzanas. Lucas compra más queso: a Masha le encanta."
   },
   {
    "ru": "Лу́кас ещё берёт торт. Ве́чером он ждёт Ма́шу и Ди́му. Они́ то́же лю́бят торт.",
    "es": "También compra una tarta. Esta noche espera a Masha y a Dima, y a ellos también les gusta."
   },
   {
    "ru": "А Ма́ша и Ди́ма покупа́ют цветы́ и вино́.",
    "es": "Masha y Dima, por su parte, compran flores y vino."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-compra-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué no toma Lucas?",
    "opciones": [
     "Ко́фе",
     "Сок",
     "Молоко́"
    ],
    "correcta": "Ко́фе",
    "explicacion": "«Он не пьёт ко́фе»."
   },
   {
    "id": "LEC-compra-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Para quién es el café?",
    "opciones": [
     "Para Dima",
     "Para Masha",
     "Para Lucas"
    ],
    "correcta": "Para Dima",
    "explicacion": "«Его́ друг Ди́ма лю́бит ко́фе»."
   },
   {
    "id": "LEC-compra-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿A quién ve Lucas en la tienda?",
    "opciones": [
     "Ма́шу",
     "Ди́му",
     "Ма́му"
    ],
    "correcta": "Ма́шу",
    "explicacion": "«Он ви́дит Ма́шу»: Ма́ша → Ма́шу."
   },
   {
    "id": "LEC-compra-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Ма́ша и Ди́ма покупа́ют торт.",
    "verdadero": false,
    "explicacion": "La tarta la compra Lucas; ellos compran «цветы́ и вино́»."
   }
  ]
 },
 {
  "id": "LEC-mascotas",
  "nivel": "A1",
  "desde": 4,
  "tema": "Animales",
  "titulo": "Соба́ка и ко́шка",
  "tituloEs": "El perro y la gata",
  "parrafos": [
   {
    "ru": "Ди́ма лю́бит соба́ку, а Ма́ша лю́бит ко́шку. Соба́ку зову́т Рекс, а ко́шку — Му́рка.",
    "es": "Dima adora al perro, y Masha, a la gata. El perro se llama Rex, y la gata, Murka."
   },
   {
    "ru": "Рекс большо́й и весёлый. Он лю́бит парк и мяч. Му́рка ма́ленькая и ти́хая. Она́ лю́бит дива́н и спит весь день.",
    "es": "Rex es grande y alegre; le encantan el parque y la pelota. Murka es pequeña y tranquila: le gusta el sofá y se pasa el día durmiendo."
   },
   {
    "ru": "Соба́ка лю́бит мя́со. Ко́шка лю́бит молоко́ и ры́бу. Ма́ма покупа́ет мя́со и ры́бу.",
    "es": "El perro prefiere la carne; a la gata, la leche y el pescado. Mamá compra carne y pescado."
   },
   {
    "ru": "Ди́ма и Рекс гуля́ют ка́ждый день. Рекс лю́бит Ди́му, а Му́рка лю́бит Ма́шу и ма́му. Па́па не лю́бит ко́шку, но ко́шка лю́бит па́пу!",
    "es": "Dima y Rex salen a pasear todos los días. Rex quiere a Dima, y Murka, a Masha y a mamá. Papá no soporta a la gata, ¡pero ella lo adora!"
   },
   {
    "ru": "Ве́чером соба́ка ждёт па́пу. А ко́шка смо́трит в окно́ и ждёт ма́му.",
    "es": "Por la tarde, el perro espera a papá. Y la gata mira por la ventana esperando a mamá."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-mascotas-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo es Rex?",
    "opciones": [
     "Большо́й и весёлый",
     "Ма́ленький и ти́хий",
     "Ста́рый"
    ],
    "correcta": "Большо́й и весёлый",
    "explicacion": "«Рекс большо́й и весёлый»."
   },
   {
    "id": "LEC-mascotas-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿A quién espera la gata?",
    "opciones": [
     "Ма́му",
     "Па́пу",
     "Ди́му"
    ],
    "correcta": "Ма́му",
    "explicacion": "«Ко́шка… ждёт ма́му»: ма́ма → ма́му."
   },
   {
    "id": "LEC-mascotas-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Па́па лю́бит ко́шку.",
    "verdadero": false,
    "explicacion": "«Па́па не лю́бит ко́шку, но ко́шка лю́бит па́пу»."
   },
   {
    "id": "LEC-mascotas-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué hace Murka todo el día?",
    "opciones": [
     "Спит",
     "Гуля́ет",
     "Игра́ет"
    ],
    "correcta": "Спит",
    "explicacion": "«Она́… спит весь день»."
   }
  ]
 },
 {
  "id": "LEC-regalos",
  "nivel": "A1",
  "desde": 4,
  "tema": "Fiestas",
  "titulo": "Пода́рки",
  "tituloEs": "Regalos",
  "parrafos": [
   {
    "ru": "Ско́ро пра́здник. Ма́ма покупа́ет пода́рки.",
    "es": "Se acerca una fiesta y mamá sale a comprar regalos."
   },
   {
    "ru": "Ба́бушка лю́бит цветы́, и ма́ма покупа́ет цветы́. Па́па лю́бит му́зыку: ма́ма покупа́ет пласти́нку. Ди́ма лю́бит футбо́л: ма́ма покупа́ет мяч. Ма́ша лю́бит кни́ги: ма́ма покупа́ет кни́гу. Де́душка лю́бит чай: ма́ма покупа́ет ча́шку и чай.",
    "es": "A la abuela le encantan las flores, así que le compra un ramo. Papá es aficionado a la música: para él, un disco. Dima es futbolero: para él, una pelota. A Masha le gustan los libros: le toca uno. Y al abuelo, que adora el té, le compra una taza y té."
   },
   {
    "ru": "А что покупа́ет па́па? Он покупа́ет духи́. Ма́ма о́чень лю́бит духи́.",
    "es": "¿Y papá qué compra? Un perfume, porque a mamá le encanta."
   },
   {
    "ru": "Ма́ша и Ди́ма де́лают торт. Они́ зна́ют: ба́бушка о́чень лю́бит торт.",
    "es": "Masha y Dima preparan una tarta. Saben que es la favorita de la abuela."
   },
   {
    "ru": "Что ещё? Ма́ша пи́шет откры́тку.",
    "es": "¿Algo más? Masha escribe una postal."
   },
   {
    "ru": "Ве́чером вся семья́ ждёт ба́бушку. Ба́бушка ви́дит торт и цветы́. Она́ о́чень ра́да!",
    "es": "Por la tarde, toda la familia espera a la abuela. Ve la tarta y las flores, y se pone muy contenta."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-regalos-1",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué compra mamá para Dima?",
    "opciones": [
     "Мяч",
     "Кни́гу",
     "Пласти́нку"
    ],
    "correcta": "Мяч",
    "explicacion": "«Ди́ма лю́бит футбо́л: ма́ма покупа́ет мяч»."
   },
   {
    "id": "LEC-regalos-2",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Qué hacen Masha y Dima?",
    "opciones": [
     "Торт",
     "Пода́рок",
     "У́жин"
    ],
    "correcta": "Торт",
    "explicacion": "«Ма́ша и Ди́ма де́лают торт»."
   },
   {
    "id": "LEC-regalos-3",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "vf",
    "afirmacion": "Па́па покупа́ет цветы́.",
    "verdadero": false,
    "explicacion": "Papá compra «духи́»; las flores las compra mamá."
   },
   {
    "id": "LEC-regalos-4",
    "tipo": "lectura",
    "dificultad": 1,
    "forma": "elegir",
    "pide": "¿Cómo está la abuela al final?",
    "opciones": [
     "Ра́да",
     "Уста́лая",
     "Гру́стная"
    ],
    "correcta": "Ра́да",
    "explicacion": "«Она́ о́чень ра́да!»."
   }
  ]
 },
 {
  "id": "LEC-chai",
  "nivel": "A1",
  "desde": 5,
  "tema": "La vida en Rusia",
  "titulo": "Чай",
  "tituloEs": "El té",
  "parrafos": [
   {
    "ru": "Ру́сские о́чень лю́бят чай. Они́ пьют чай у́тром, днём и ве́чером. Обы́чно чай чёрный и горя́чий.",
    "es": "A los rusos les encanta el té. Lo toman por la mañana, al mediodía y por la noche. Suele ser negro y bien caliente."
   },
   {
    "ru": "Ру́сские ча́сто пьют чай и едя́т торт, пече́нье и́ли варе́нье. Ко́фе они́ то́же пьют, но чай — э́то тради́ция.",
    "es": "Con el té acostumbran a comer tarta, galletas o mermelada. Café también beben, pero el té es una tradición."
   },
   {
    "ru": "Ба́бушка Ма́ши всегда́ гото́вит чай. Она́ ста́вит на стол ча́шки, ча́йник и варе́нье. Ма́ша и Ди́ма то́же пьют чай, а па́па пьёт ко́фе. Ба́бушка говори́т: «Ко́фе я не пью. Я пью то́лько чай!»",
    "es": "La abuela de Masha siempre prepara el té. Pone en la mesa las tazas, la tetera y la mermelada. Masha y Dima también se sirven, mientras que papá prefiere café. La abuela dice: «Yo café no tomo. ¡Solo té!»."
   },
   {
    "ru": "А Лу́кас? Он из Аргенти́ны и обы́чно пьёт ко́фе. Но тепе́рь он то́же лю́бит чай.",
    "es": "¿Y Lucas? Como buen argentino, normalmente toma café. Pero ahora el té también le gusta."
   },
   {
    "ru": "— Ты хо́чешь чай? — спра́шивает ба́бушка.",
    "es": "—¿Quieres té? —le pregunta la abuela."
   },
   {
    "ru": "— Да, коне́чно! И пече́нье, пожа́луйста!",
    "es": "—¡Sí, claro! ¡Y galletas, por favor!"
   },
   {
    "ru": "— Молоде́ц! Ты уже́ понима́ешь ру́сскую жизнь, — смеётся ба́бушка.",
    "es": "—¡Muy bien! Ya entiendes la vida rusa —se ríe la abuela."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-chai-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́й чай пьют ру́сские?",
    "opciones": [
     "Чёрный и горя́чий.",
     "Зелёный и холо́дный.",
     "Бе́лый."
    ],
    "correcta": "Чёрный и горя́чий.",
    "explicacion": "«Обы́чно чай чёрный и горя́чий»."
   },
   {
    "id": "LEC-chai-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что пьёт па́па?",
    "opciones": [
     "Ко́фе.",
     "Чай.",
     "Молоко́."
    ],
    "correcta": "Ко́фе.",
    "explicacion": "«Ма́ша и Ди́ма то́же пьют чай, а па́па пьёт ко́фе»."
   },
   {
    "id": "LEC-chai-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ба́бушка пьёт ко́фе.",
    "verdadero": false,
    "explicacion": "«Ко́фе я не пью. Я пью то́лько чай!»."
   },
   {
    "id": "LEC-chai-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что хо́чет Лу́кас?",
    "opciones": [
     "Чай и пече́нье.",
     "Ко́фе.",
     "Торт."
    ],
    "correcta": "Чай и пече́нье.",
    "explicacion": "«Да, коне́чно! И пече́нье, пожа́луйста!»."
   },
   {
    "id": "LEC-chai-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿qué tomas por la mañana? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "qué tomas (Я пью…)",
       "formas": [
        "пью"
       ]
      }
     ],
     "modelos": [
      "У́тром я пью ко́фе."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-dia",
  "nivel": "A1",
  "desde": 5,
  "tema": "La rutina",
  "titulo": "Мой день",
  "tituloEs": "Mi día",
  "parrafos": [
   {
    "ru": "Меня́ зову́т Лу́кас. Я студе́нт. Я встаю́ ра́но. Я умыва́юсь, одева́юсь и за́втракаю. Обы́чно я ем хлеб и сыр и пью ко́фе.",
    "es": "Me llamo Lucas y soy estudiante. Me levanto temprano, me lavo, me visto y desayuno. Normalmente como pan con queso y tomo un café."
   },
   {
    "ru": "Пото́м я учу́сь. Я изуча́ю ру́сский язы́к. Он тру́дный, но интере́сный. Я чита́ю, пишу́ и мно́го говорю́.",
    "es": "Después estudio. Aprendo ruso: es difícil, pero interesante. Leo, escribo y hablo mucho."
   },
   {
    "ru": "Днём я обе́даю и немно́го отдыха́ю. Иногда́ я смотрю́ футбо́л. В суббо́ту я не учу́сь. Я гуля́ю и́ли игра́ю в футбо́л.",
    "es": "Al mediodía como y descanso un poco. A veces veo fútbol. Los sábados no estudio: salgo a pasear o juego al fútbol."
   },
   {
    "ru": "Ве́чером я и мой сосе́д Ди́ма гото́вим у́жин. Ди́ма гото́вит мя́со, а я де́лаю сала́т. Пото́м мы смо́трим фильм и́ли слу́шаем му́зыку.",
    "es": "Por la noche, mi compañero de piso, Dima, y yo hacemos la cena. Él cocina la carne y yo preparo la ensalada. Luego vemos una película o escuchamos música."
   },
   {
    "ru": "Я никогда́ не ложу́сь ра́но. Я чита́ю кни́гу и сплю. А ты? Что ты де́лаешь ве́чером?",
    "es": "Nunca me acuesto temprano. Leo un libro y después a dormir. ¿Y tú? ¿Qué haces por las noches?"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-dia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Лу́кас ест у́тром?",
    "opciones": [
     "Хлеб и сыр.",
     "Суп.",
     "Мя́со и сала́т."
    ],
    "correcta": "Хлеб и сыр.",
    "explicacion": "«Обы́чно я ем хлеб и сыр и пью ко́фе»."
   },
   {
    "id": "LEC-dia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Лу́кас де́лает в суббо́ту?",
    "opciones": [
     "Гуля́ет и́ли игра́ет в футбо́л.",
     "У́чится.",
     "Рабо́тает."
    ],
    "correcta": "Гуля́ет и́ли игра́ет в футбо́л.",
    "explicacion": "«В суббо́ту я не учу́сь. Я гуля́ю и́ли игра́ю в футбо́л»."
   },
   {
    "id": "LEC-dia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто гото́вит мя́со?",
    "opciones": [
     "Ди́ма.",
     "Лу́кас.",
     "Ма́ша."
    ],
    "correcta": "Ди́ма.",
    "explicacion": "«Ди́ма гото́вит мя́со, а я де́лаю сала́т»."
   },
   {
    "id": "LEC-dia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас ложи́тся ра́но.",
    "verdadero": false,
    "explicacion": "«Я никогда́ не ложу́сь ра́но»."
   },
   {
    "id": "LEC-dia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Contesta a Lucas: ¿qué haces tú por la noche?",
    "sit": {
     "necesita": [
      {
       "es": "qué haces (un verbo en presente con я)",
       "formas": [
        "я"
       ]
      }
     ],
     "modelos": [
      "Ве́чером я чита́ю и слу́шаю му́зыку."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-kuhnia",
  "nivel": "A1",
  "desde": 5,
  "tema": "La vida en Rusia",
  "titulo": "Ру́сская ку́хня",
  "tituloEs": "La cocina rusa",
  "parrafos": [
   {
    "ru": "Что едя́т ру́сские? Они́ о́чень лю́бят суп. Суп едя́т ка́ждый день, обы́чно днём. Са́мый изве́стный суп — борщ. Он кра́сный и о́чень вку́сный.",
    "es": "¿Qué comen los rusos? Les encanta la sopa y la toman a diario, casi siempre al mediodía. La más famosa es el borsch: roja y riquísima."
   },
   {
    "ru": "Ру́сские ча́сто едя́т хлеб. Хлеб быва́ет бе́лый и чёрный. Мно́гие лю́бят чёрный хлеб.",
    "es": "El pan no falta en la mesa. Lo hay blanco y negro, y muchos prefieren el negro."
   },
   {
    "ru": "Ещё ру́сские лю́бят пироги́. Пироги́ гото́вят до́ма, и ба́бушки де́лают их о́чень хорошо́. У́тром мно́гие едя́т ка́шу.",
    "es": "También les gustan las empanadas rusas, los pirogí. Se hacen en casa, y a las abuelas les salen de maravilla. Para desayunar, muchos toman papilla de cereales."
   },
   {
    "ru": "Ле́том ру́сские иногда́ едя́т холо́дный суп, а зимо́й — то́лько горя́чий. Они́ лю́бят смета́ну и ча́сто едя́т борщ и смета́ну. А на пра́здник они́ едя́т икру́.",
    "es": "En verano, a veces comen sopa fría; en invierno, solo caliente. Les encanta la crema agria y la ponen en el borsch. Y en las fiestas no puede faltar el caviar."
   },
   {
    "ru": "Лу́кас не зна́ет ру́сскую ку́хню. Ма́ша говори́т: «Я гото́влю борщ. Ты хо́чешь?» Лу́кас ду́мает и отвеча́ет: «Да, хочу́! Но я не могу́ гото́вить. Ты мо́жешь меня́ учи́ть?»",
    "es": "Lucas no conoce la cocina rusa. Masha le dice: «Hago borsch. ¿Te apetece?». Lucas lo piensa y responde: «¡Sí! Pero no sé cocinar. ¿Me enseñas?»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-kuhnia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́й са́мый изве́стный суп?",
    "opciones": [
     "Борщ.",
     "Холо́дный суп.",
     "Горя́чий суп."
    ],
    "correcta": "Борщ.",
    "explicacion": "«Са́мый изве́стный суп — борщ»."
   },
   {
    "id": "LEC-kuhnia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́й хлеб лю́бят мно́гие?",
    "opciones": [
     "Чёрный.",
     "Бе́лый.",
     "Сла́дкий."
    ],
    "correcta": "Чёрный.",
    "explicacion": "«Мно́гие лю́бят чёрный хлеб»."
   },
   {
    "id": "LEC-kuhnia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что едя́т на пра́здник?",
    "opciones": [
     "Икру́.",
     "Ка́шу.",
     "Пи́ццу."
    ],
    "correcta": "Икру́.",
    "explicacion": "«А на пра́здник они́ едя́т икру́»."
   },
   {
    "id": "LEC-kuhnia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас хорошо́ гото́вит.",
    "verdadero": false,
    "explicacion": "«Я не могу́ гото́вить»: no sabe cocinar."
   }
  ]
 },
 {
  "id": "LEC-chat",
  "nivel": "A1",
  "desde": 5,
  "tema": "Planes",
  "titulo": "Чат",
  "tituloEs": "Chat",
  "parrafos": [
   {
    "ru": "— Приве́т, Лу́кас! Что ты де́лаешь?",
    "es": "—¡Hola, Lucas! ¿Qué haces?"
   },
   {
    "ru": "— Приве́т! Я сижу́ до́ма и учу́ ру́сские глаго́лы. Э́то тру́дно! А ты?",
    "es": "—¡Hola! Estoy en casa estudiando verbos rusos. ¡Qué difícil! ¿Y tú?"
   },
   {
    "ru": "— Я гуля́ю. Сего́дня тепло́. Ты хо́чешь гуля́ть?",
    "es": "—Estoy paseando. Hoy hace buen tiempo. ¿Te apuntas?"
   },
   {
    "ru": "— Хочу́, но не могу́. За́втра экза́мен.",
    "es": "—Me gustaría, pero no puedo. Mañana tengo examen."
   },
   {
    "ru": "— Поня́тно. А Ди́ма до́ма?",
    "es": "—Entiendo. ¿Dima está en casa?"
   },
   {
    "ru": "— Нет, он рабо́тает. Он всегда́ рабо́тает ве́чером.",
    "es": "—No, está trabajando. Por la noche siempre trabaja."
   },
   {
    "ru": "— А что ты де́лаешь за́втра ве́чером?",
    "es": "—¿Y mañana por la noche qué haces?"
   },
   {
    "ru": "— Ничего́. Я отдыха́ю.",
    "es": "—Nada. Descansar."
   },
   {
    "ru": "— Отли́чно! Мы смо́трим фильм. Ты хо́чешь смотре́ть фильм?",
    "es": "—¡Genial! Vamos a ver una película. ¿Vienes?"
   },
   {
    "ru": "— Коне́чно! А что вы смо́трите?",
    "es": "—¡Claro! ¿Y qué película es?"
   },
   {
    "ru": "— Ру́сский фильм. Он не о́чень тру́дный. Я ду́маю, ты всё понима́ешь.",
    "es": "—Una rusa. No es muy difícil. Creo que la vas a entender toda."
   },
   {
    "ru": "— Наде́юсь! Я понима́ю ма́ло.",
    "es": "—¡Ojalá! Entiendo poco."
   },
   {
    "ru": "— Не волну́йся. Мы смо́трим фильм, еди́м пи́ццу и разгова́риваем.",
    "es": "—Tranquilo. Vemos la película, comemos pizza y charlamos."
   },
   {
    "ru": "— Спаси́бо, Ма́ша!",
    "es": "—¡Gracias, Masha!"
   },
   {
    "ru": "— Не за что. Учи́ глаго́лы!",
    "es": "—De nada. ¡Y a estudiar esos verbos!"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-chat-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лает Лу́кас?",
    "opciones": [
     "У́чит глаго́лы.",
     "Гуля́ет.",
     "Рабо́тает."
    ],
    "correcta": "У́чит глаго́лы.",
    "explicacion": "«Я сижу́ до́ма и учу́ ру́сские глаго́лы»."
   },
   {
    "id": "LEC-chat-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Лу́кас не мо́жет гуля́ть?",
    "opciones": [
     "За́втра экза́мен.",
     "Он рабо́тает.",
     "Хо́лодно."
    ],
    "correcta": "За́втра экза́мен.",
    "explicacion": "«Хочу́, но не могу́. За́втра экза́мен»."
   },
   {
    "id": "LEC-chat-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ди́ма сейча́с до́ма.",
    "verdadero": false,
    "explicacion": "«Нет, он рабо́тает»."
   },
   {
    "id": "LEC-chat-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что они́ де́лают за́втра?",
    "opciones": [
     "Смо́трят фильм.",
     "Гуля́ют.",
     "Иду́т в теа́тр."
    ],
    "correcta": "Смо́трят фильм.",
    "explicacion": "«Мы смо́трим фильм, еди́м пи́ццу и разгова́риваем»."
   },
   {
    "id": "LEC-chat-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Masha te escribe: «Ты хо́чешь смотре́ть фильм?». Contesta que sí, pero que no puedes mañana.",
    "sit": {
     "necesita": [
      {
       "es": "que quieres (Хочу́…)",
       "formas": [
        "хочу́"
       ]
      },
      {
       "es": "que no puedes (не могу́)",
       "formas": [
        "не могу́"
       ]
      }
     ],
     "modelos": [
      "Хочу́, но за́втра не могу́."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-moskva",
  "nivel": "A1",
  "desde": 6,
  "tema": "Ciudades",
  "titulo": "Москва́",
  "tituloEs": "Moscú",
  "parrafos": [
   {
    "ru": "Москва́ — столи́ца Росси́и и о́чень большо́й го́род. Здесь живёт мно́го люде́й.",
    "es": "Moscú es la capital de Rusia y una ciudad enorme en la que vive muchísima gente."
   },
   {
    "ru": "В це́нтре го́рода Кремль и Кра́сная пло́щадь. Тури́сты гуля́ют там весь день. Ря́дом река́ и краси́вый парк.",
    "es": "En el centro están el Kremlin y la Plaza Roja, por donde los turistas pasean todo el día. Muy cerca hay un río y un parque precioso."
   },
   {
    "ru": "В Москве́ хоро́шее метро́. Ста́нции больши́е и краси́вые, как музе́и. Лю́ди е́здят на метро́ на рабо́ту, в университе́т и в шко́лу.",
    "es": "El metro de Moscú es muy bueno. Sus estaciones, grandes y bonitas, parecen museos. La gente lo usa para ir al trabajo, a la universidad y al colegio."
   },
   {
    "ru": "Ма́ша и Ди́ма живу́т в це́нтре, в ста́ром до́ме. Их кварти́ра на тре́тьем этаже́. Лу́кас живёт далеко́, в общежи́тии. Ка́ждый день он е́здит в университе́т на метро́.",
    "es": "Masha y Dima viven en el centro, en un edificio antiguo; su apartamento está en el tercer piso. Lucas vive lejos, en una residencia de estudiantes, y cada día va a la universidad en metro."
   },
   {
    "ru": "В суббо́ту они́ хо́дят в парк и́ли в кафе́. Ле́том они́ ча́сто гуля́ют на у́лице, а зимо́й сидя́т до́ма и́ли в теа́тре.",
    "es": "Los sábados van al parque o a un café. En verano salen mucho a la calle; en invierno se quedan en casa o van al teatro."
   },
   {
    "ru": "Где ещё мо́жно отдыха́ть? В Москве́ больши́е па́рки, музе́и и теа́тры. Са́мый изве́стный теа́тр — Большо́й теа́тр.",
    "es": "¿Dónde más se puede pasar el rato? Moscú tiene grandes parques, museos y teatros. El más famoso de todos es el Bolshói."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-moskva-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что в це́нтре Москвы́?",
    "opciones": [
     "Кремль и Кра́сная пло́щадь.",
     "Общежи́тие.",
     "О́зеро."
    ],
    "correcta": "Кремль и Кра́сная пло́щадь.",
    "explicacion": "«В це́нтре го́рода Кремль и Кра́сная пло́щадь»."
   },
   {
    "id": "LEC-moskva-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где живёт Лу́кас?",
    "opciones": [
     "В общежи́тии.",
     "В це́нтре.",
     "В ста́ром до́ме."
    ],
    "correcta": "В общежи́тии.",
    "explicacion": "«Лу́кас живёт далеко́, в общежи́тии». En el centro viven Masha y Dima."
   },
   {
    "id": "LEC-moskva-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как Лу́кас е́здит в университе́т?",
    "opciones": [
     "На метро́.",
     "На маши́не.",
     "Пешко́м."
    ],
    "correcta": "На метро́.",
    "explicacion": "«Ка́ждый день он е́здит в университе́т на метро́»."
   },
   {
    "id": "LEC-moskva-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Зимо́й они́ ча́сто гуля́ют на у́лице.",
    "verdadero": false,
    "explicacion": "En invierno «сидя́т до́ма и́ли в теа́тре»; pasean en verano."
   }
  ]
 },
 {
  "id": "LEC-ermitazh",
  "nivel": "A1",
  "desde": 6,
  "tema": "Ciudades",
  "titulo": "Эрмита́ж",
  "tituloEs": "El Hermitage",
  "parrafos": [
   {
    "ru": "Эрмита́ж — большо́й и о́чень ста́рый музе́й. Он нахо́дится в Санкт-Петербу́рге, на берегу́ реки́ Невы́. Э́то о́чень изве́стный музе́й.",
    "es": "El Hermitage es un museo grande y muy antiguo. Está en San Petersburgo, a orillas del río Nevá, y es famosísimo."
   },
   {
    "ru": "Музе́й нахо́дится во дворце́. Дворе́ц зелёный и бе́лый. Он стои́т в це́нтре го́рода, на Дворцо́вой пло́щади. В за́лах карти́ны, ста́рые часы́ и ме́бель.",
    "es": "Ocupa un palacio verde y blanco en pleno centro, en la Plaza del Palacio. En sus salas hay cuadros, relojes antiguos y muebles."
   },
   {
    "ru": "В музе́е всегда́ мно́го тури́стов. Они́ прихо́дят у́тром и смо́трят карти́ны весь день. Студе́нты то́же ча́сто хо́дят в Эрмита́ж.",
    "es": "Siempre está lleno de turistas, que llegan temprano y se pasan el día mirando cuadros. Los estudiantes también lo visitan a menudo."
   },
   {
    "ru": "Ма́ша е́дет в Петербу́рг на по́езде. Она́ идёт в Эрмита́ж. Ма́ша лю́бит иску́сство и зна́ет, где карти́ны Рембра́ндта. Она́ стои́т в за́ле и смо́трит на карти́ну. Она́ ду́мает: «Как краси́во!» Пото́м она́ идёт в кафе́ и пьёт ко́фе.",
    "es": "Masha viaja a Petersburgo en tren y va al Hermitage. Le apasiona el arte y sabe dónde están los cuadros de Rembrandt. Se para delante de uno y piensa: «¡Qué maravilla!». Después se toma un café en la cafetería."
   },
   {
    "ru": "А ещё в Эрмита́же живу́т ко́шки! Они́ живу́т в подва́ле и охраня́ют музе́й.",
    "es": "Y un detalle curioso: ¡en el Hermitage viven gatos! Están en el sótano y protegen el museo."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-ermitazh-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где нахо́дится Эрмита́ж?",
    "opciones": [
     "В Санкт-Петербу́рге.",
     "В Москве́.",
     "В Сиби́ри."
    ],
    "correcta": "В Санкт-Петербу́рге.",
    "explicacion": "«Он нахо́дится в Санкт-Петербу́рге, на берегу́ реки́ Невы́»."
   },
   {
    "id": "LEC-ermitazh-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́го цве́та дворе́ц?",
    "opciones": [
     "Зелёный и бе́лый.",
     "Кра́сный.",
     "Жёлтый."
    ],
    "correcta": "Зелёный и бе́лый.",
    "explicacion": "«Дворе́ц зелёный и бе́лый»."
   },
   {
    "id": "LEC-ermitazh-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как Ма́ша е́дет в Петербу́рг?",
    "opciones": [
     "На по́езде.",
     "На самолёте.",
     "На авто́бусе."
    ],
    "correcta": "На по́езде.",
    "explicacion": "«Ма́ша е́дет в Петербу́рг на по́езде»."
   },
   {
    "id": "LEC-ermitazh-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "В Эрмита́же живу́т ко́шки.",
    "verdadero": true,
    "explicacion": "«В Эрмита́же живу́т ко́шки! Они́ живу́т в подва́ле»."
   },
   {
    "id": "LEC-ermitazh-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где живу́т ко́шки?",
    "opciones": [
     "В подва́ле.",
     "В за́ле.",
     "В кафе́."
    ],
    "correcta": "В подва́ле.",
    "explicacion": "«Они́ живу́т в подва́ле и охраня́ют музе́й»."
   }
  ]
 },
 {
  "id": "LEC-baikal",
  "nivel": "A1",
  "desde": 6,
  "tema": "Naturaleza",
  "titulo": "Байка́л",
  "tituloEs": "El Baikal",
  "parrafos": [
   {
    "ru": "Байка́л — о́зеро в Сиби́ри. Э́то са́мое глубо́кое о́зеро на Земле́. Вода́ в о́зере чи́стая и холо́дная.",
    "es": "El Baikal es un lago de Siberia, el más profundo del planeta. Su agua es limpia y fría."
   },
   {
    "ru": "Вокру́г о́зера го́ры и лес. В лесу́ живу́т медве́ди и ли́сы, а в воде́ — ры́ба и тюле́ни.",
    "es": "Lo rodean montañas y bosques. En el bosque viven osos y zorros, y en el agua, peces y focas."
   },
   {
    "ru": "На Байка́ле большо́й о́стров. Его́ зову́т Ольхо́н. Там живу́т лю́ди, и там краси́вые ска́лы.",
    "es": "En el Baikal hay una isla grande llamada Oljón. Allí vive gente y hay unos acantilados preciosos."
   },
   {
    "ru": "Как е́хать на Байка́л? Снача́ла лю́ди лета́ют на самолёте и́ли е́дут на по́езде в Ирку́тск. Пото́м они́ е́дут на авто́бусе.",
    "es": "¿Cómo se llega? Primero, en avión o en tren hasta Irkutsk, y desde allí, en autobús."
   },
   {
    "ru": "Ле́том тури́сты е́здят на Байка́л. Они́ живу́т в гости́нице и́ли в пала́тке, гуля́ют в лесу́ и пла́вают в о́зере. Но вода́ холо́дная!",
    "es": "En verano llegan muchos turistas. Se alojan en un hotel o en una tienda de campaña, pasean por el bosque y se bañan en el lago. ¡Aunque el agua está helada!"
   },
   {
    "ru": "Зимо́й о́зеро бе́лое. Лю́ди хо́дят и е́здят по льду. Э́то о́чень краси́во.",
    "es": "En invierno el lago se pone blanco. La gente camina y hasta circula en coche sobre el hielo. Es un espectáculo."
   },
   {
    "ru": "Ди́ма мечта́ет: «Я хочу́ на Байка́л. Я люблю́ го́ры, лес и о́зеро».",
    "es": "Dima sueña: «Quiero ir al Baikal. Me encantan las montañas, los bosques y los lagos»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-baikal-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где Байка́л?",
    "opciones": [
     "В Сиби́ри.",
     "В Москве́.",
     "В Испа́нии."
    ],
    "correcta": "В Сиби́ри.",
    "explicacion": "«Байка́л — о́зеро в Сиби́ри»."
   },
   {
    "id": "LEC-baikal-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто живёт в лесу́?",
    "opciones": [
     "Медве́ди и ли́сы.",
     "Тюле́ни.",
     "Тури́сты."
    ],
    "correcta": "Медве́ди и ли́сы.",
    "explicacion": "«В лесу́ живу́т медве́ди и ли́сы». Las focas viven en el agua."
   },
   {
    "id": "LEC-baikal-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как называ́ется о́стров?",
    "opciones": [
     "Ольхо́н.",
     "Ирку́тск.",
     "Байка́л."
    ],
    "correcta": "Ольхо́н.",
    "explicacion": "«Его́ зову́т Ольхо́н». Irkutsk es una ciudad."
   },
   {
    "id": "LEC-baikal-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Вода́ в о́зере тёплая.",
    "verdadero": false,
    "explicacion": "«Вода́ в о́зере чи́стая и холо́дная»."
   },
   {
    "id": "LEC-baikal-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лают лю́ди зимо́й?",
    "opciones": [
     "Хо́дят и е́здят по льду.",
     "Пла́вают в о́зере.",
     "Живу́т в пала́тке."
    ],
    "correcta": "Хо́дят и е́здят по льду.",
    "explicacion": "«Зимо́й… лю́ди хо́дят и е́здят по льду»."
   },
   {
    "id": "LEC-baikal-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿quieres ir al Baikal? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "si quieres (Я хочу́… / Я не хочу́…)",
       "formas": [
        "хочу́"
       ]
      }
     ],
     "modelos": [
      "Да, я хочу́ на Байка́л."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-kliuchi",
  "nivel": "A1",
  "desde": 6,
  "tema": "La casa",
  "titulo": "Где ключи́?",
  "tituloEs": "¿Dónde están las llaves?",
  "parrafos": [
   {
    "ru": "У́тро. Ма́ма сиди́т на ку́хне и пьёт ко́фе. Па́па уже́ е́дет на рабо́ту на маши́не. А Ди́ма спеши́т на рабо́ту, но не мо́жет найти́ ключи́.",
    "es": "Es por la mañana. Mamá está en la cocina tomando café. Papá ya va en coche al trabajo. Dima tiene prisa por salir, pero no encuentra las llaves."
   },
   {
    "ru": "— Ма́ма, где мои́ ключи́?",
    "es": "—Mamá, ¿dónde están mis llaves?"
   },
   {
    "ru": "— Не зна́ю. Они́ не на столе́?",
    "es": "—Ni idea. ¿No están en la mesa?"
   },
   {
    "ru": "— Нет. На столе́ то́лько кни́ги и телефо́н.",
    "es": "—No. En la mesa solo hay libros y el teléfono."
   },
   {
    "ru": "— А на ку́хне?",
    "es": "—¿Y en la cocina?"
   },
   {
    "ru": "— Нет. Там их то́же нет.",
    "es": "—Tampoco."
   },
   {
    "ru": "— А в карма́не? В рюкзаке́?",
    "es": "—¿En el bolsillo? ¿En la mochila?"
   },
   {
    "ru": "— Нет, нет! Ни в карма́не, ни в рюкзаке́.",
    "es": "—¡Que no! Ni en el bolsillo ni en la mochila."
   },
   {
    "ru": "— А в спа́льне?",
    "es": "—¿Y en el dormitorio?"
   },
   {
    "ru": "— Сейча́с... Нет, в спа́льне их то́же нет.",
    "es": "—A ver... No, ahí tampoco."
   },
   {
    "ru": "Тут прихо́дит Ма́ша.",
    "es": "En ese momento llega Masha."
   },
   {
    "ru": "— Ди́ма, ключи́ в коридо́ре. Они́ вися́т на стене́.",
    "es": "—Dima, las llaves están en el pasillo, colgadas en la pared."
   },
   {
    "ru": "— Спаси́бо! — говори́т Ди́ма и бежи́т на у́лицу. Он опа́здывает и е́дет на рабо́ту на авто́бусе. Ма́ша смеётся: «Ка́ждый день одно́ и то же!»",
    "es": "—¡Gracias! —dice Dima, y sale corriendo a la calle. Llega tarde, así que va al trabajo en autobús. Masha se ríe: «¡Todos los días lo mismo!»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-kliuchi-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где ма́ма?",
    "opciones": [
     "На ку́хне.",
     "На рабо́те.",
     "В спа́льне."
    ],
    "correcta": "На ку́хне.",
    "explicacion": "«Ма́ма сиди́т на ку́хне и пьёт ко́фе»."
   },
   {
    "id": "LEC-kliuchi-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что на столе́?",
    "opciones": [
     "Кни́ги и телефо́н.",
     "Ключи́.",
     "Рюкза́к."
    ],
    "correcta": "Кни́ги и телефо́н.",
    "explicacion": "«На столе́ то́лько кни́ги и телефо́н»."
   },
   {
    "id": "LEC-kliuchi-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где ключи́?",
    "opciones": [
     "В коридо́ре, на стене́.",
     "В карма́не.",
     "В спа́льне."
    ],
    "correcta": "В коридо́ре, на стене́.",
    "explicacion": "«Ключи́ в коридо́ре. Они́ вися́т на стене́»."
   },
   {
    "id": "LEC-kliuchi-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как Ди́ма е́дет на рабо́ту?",
    "opciones": [
     "На авто́бусе.",
     "На маши́не.",
     "На метро́."
    ],
    "correcta": "На авто́бусе.",
    "explicacion": "«Он опа́здывает и е́дет на рабо́ту на авто́бусе». En coche va papá."
   },
   {
    "id": "LEC-kliuchi-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ди́ма опа́здывает.",
    "verdadero": true,
    "explicacion": "«Он опа́здывает»: llega tarde."
   }
  ]
 },
 {
  "id": "LEC-rynok",
  "nivel": "A1",
  "desde": 7,
  "tema": "La vida diaria",
  "titulo": "Суббо́та на ры́нке",
  "tituloEs": "Sábado en el mercado",
  "parrafos": [
   {
    "ru": "В суббо́ту у́тром Ма́ша и Ди́ма иду́т на ры́нок. Он бли́зко, и они́ иду́т пешко́м.",
    "es": "El sábado por la mañana, Masha y Dima van al mercado. Les queda cerca, así que van andando."
   },
   {
    "ru": "Ры́нок открыва́ется в семь часо́в утра́, а в три часа́ дня продавцы́ уже́ иду́т домо́й. В суббо́ту там всегда́ мно́го люде́й, а в понеде́льник ма́ло.",
    "es": "El mercado abre a las siete de la mañana, y a las tres de la tarde los vendedores ya se marchan a casa. Los sábados siempre está lleno de gente; los lunes, casi vacío."
   },
   {
    "ru": "На ры́нке ве́село и интере́сно. Тут о́вощи, мя́со, ры́ба, сыр и хлеб. Ма́ша покупа́ет я́блоки и молоко́. А Ди́ма берёт сыр: он его́ о́чень лю́бит.",
    "es": "En el mercado hay buen ambiente y mucho para ver: verdura, carne, pescado, queso y pan. Masha compra manzanas y leche. Dima, en cambio, se lleva queso, que le encanta."
   },
   {
    "ru": "Ле́том на ры́нке клубни́ка и я́годы, а о́сенью — я́блоки и грибы́. Зимо́й тут ме́ньше фру́ктов, но всегда́ есть мёд и карто́шка.",
    "es": "En verano hay fresas y frutos del bosque; en otoño, manzanas y setas. En invierno hay menos fruta, pero nunca faltan la miel y las patatas."
   },
   {
    "ru": "Ма́ша хо́дит на ры́нок ка́ждую суббо́ту, а Ди́ма — то́лько иногда́. Обы́чно в суббо́ту он спит до десяти́ часо́в.",
    "es": "Masha va al mercado todos los sábados; Dima, solo de vez en cuando. Los sábados suele dormir hasta las diez."
   },
   {
    "ru": "Пото́м они́ пьют чай в кафе́ ря́дом. Ма́ша говори́т: «Я люблю́ э́тот день. Мы не спеши́м, гуля́ем и отдыха́ем».",
    "es": "Después toman un té en un café de al lado. Masha dice: «Me encanta este día. No vamos con prisa: paseamos y descansamos»."
   },
   {
    "ru": "До́ма она́ гото́вит обе́д: суп и сала́т, а брат де́лает чай. Ма́ма и па́па прихо́дят в два часа́.",
    "es": "En casa, ella prepara la comida —sopa y ensalada— y su hermano hace el té. Mamá y papá llegan a las dos."
   },
   {
    "ru": "— Спаси́бо! Как хорошо́! — Па́па о́чень рад.",
    "es": "—¡Gracias! ¡Qué bien! —Papá está muy contento."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-rynok-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Куда́ иду́т Ма́ша и Ди́ма?",
    "opciones": [
     "На ры́нок.",
     "В шко́лу.",
     "В парк."
    ],
    "correcta": "На ры́нок.",
    "explicacion": "«Ма́ша и Ди́ма иду́т на ры́нок»."
   },
   {
    "id": "LEC-rynok-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что берёт Ди́ма?",
    "opciones": [
     "Сыр.",
     "Я́блоки.",
     "Молоко́."
    ],
    "correcta": "Сыр.",
    "explicacion": "«Ди́ма берёт сыр: он его́ о́чень лю́бит». Las manzanas y la leche las compra Masha."
   },
   {
    "id": "LEC-rynok-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́ша и Ди́ма спеша́т.",
    "verdadero": false,
    "explicacion": "Masha dice «Мы не спеши́м»: no tienen prisa."
   },
   {
    "id": "LEC-rynok-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́ма и па́па прихо́дят в два часа́.",
    "verdadero": true,
    "explicacion": "«Ма́ма и па́па прихо́дят в два часа́»."
   },
   {
    "id": "LEC-rynok-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ открыва́ется ры́нок?",
    "opciones": [
     "В семь часо́в утра́.",
     "В три часа́ дня.",
     "В де́сять часо́в."
    ],
    "correcta": "В семь часо́в утра́.",
    "explicacion": "«Ры́нок открыва́ется в семь часо́в утра́»."
   },
   {
    "id": "LEC-rynok-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что есть на ры́нке зимо́й?",
    "opciones": [
     "Мёд и карто́шка.",
     "Клубни́ка.",
     "Грибы́."
    ],
    "correcta": "Мёд и карто́шка.",
    "explicacion": "«Зимо́й… всегда́ есть мёд и карто́шка». La fresa es de verano y las setas, de otoño."
   },
   {
    "id": "LEC-rynok-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как ча́сто Ди́ма хо́дит на ры́нок?",
    "opciones": [
     "Иногда́.",
     "Ка́ждую суббо́ту.",
     "Никогда́."
    ],
    "correcta": "Иногда́.",
    "explicacion": "«Ма́ша хо́дит на ры́нок ка́ждую суббо́ту, а Ди́ма — то́лько иногда́»."
   }
  ]
 },
 {
  "id": "LEC-novgod",
  "nivel": "A1",
  "desde": 7,
  "tema": "Fiestas",
  "titulo": "Но́вый год",
  "tituloEs": "Año Nuevo",
  "preguntas": [
   {
    "id": "LEC-novgod-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́й са́мый люби́мый пра́здник в Росси́и?",
    "opciones": [
     "Но́вый год.",
     "Рождество́.",
     "День рожде́ния."
    ],
    "correcta": "Но́вый год.",
    "explicacion": "«Са́мый люби́мый пра́здник в Росси́и — Но́вый год»."
   },
   {
    "id": "LEC-novgod-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кого́ ждут де́ти?",
    "opciones": [
     "Де́да Моро́за.",
     "Ба́бушку.",
     "Лу́каса."
    ],
    "correcta": "Де́да Моро́за.",
    "explicacion": "«Де́ти ждут Де́да Моро́за»."
   },
   {
    "id": "LEC-novgod-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лают лю́ди в по́лночь?",
    "opciones": [
     "Пьют шампа́нское.",
     "Спят.",
     "Покупа́ют ёлку."
    ],
    "correcta": "Пьют шампа́нское.",
    "explicacion": "«В по́лночь все пьют шампа́нское и говоря́т: «С Но́вым го́дом!»»."
   },
   {
    "id": "LEC-novgod-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "В Росси́и Рождество́ в декабре́.",
    "verdadero": false,
    "explicacion": "«Рождество́ в Росси́и в январе́, а не в декабре́»."
   },
   {
    "id": "LEC-novgod-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько лю́ди не рабо́тают в январе́?",
    "opciones": [
     "Почти́ неде́лю.",
     "Оди́н день.",
     "Ме́сяц."
    ],
    "correcta": "Почти́ неде́лю.",
    "explicacion": "«Лю́ди не рабо́тают почти́ неде́лю»."
   }
  ],
  "parrafos": [
   {
    "ru": "Са́мый люби́мый пра́здник в Росси́и — Но́вый год. Его́ пра́зднуют в конце́ декабря́, в после́днюю ночь го́да.",
    "es": "La fiesta favorita de los rusos es el Año Nuevo, que se celebra a finales de diciembre, la última noche del año."
   },
   {
    "ru": "В декабре́ лю́ди покупа́ют пода́рки и ёлку. Обы́чно в декабре́ хо́лодно и мно́го сне́га. Де́ти гуля́ют ка́ждый день, а взро́слые спеша́т: в конце́ го́да мно́го рабо́ты.",
    "es": "Diciembre suele ser frío y con mucha nieve. Los niños salen a jugar todos los días, mientras que los adultos van de cabeza: a fin de año hay mucho trabajo."
   },
   {
    "ru": "Ёлку ста́вят до́ма, а на у́лицах и площадя́х то́же стоя́т больши́е ёлки.",
    "es": "Es el mes de comprar regalos y el árbol. Se pone uno en casa, y en calles y plazas también se levantan abetos enormes."
   },
   {
    "ru": "Ве́чером вся семья́ до́ма. Ма́ма гото́вит сала́ты, па́па покупа́ет шампа́нское, а де́ти ждут Де́да Моро́за. На столе́ мандари́ны, торт и мно́го еды́.",
    "es": "Esa noche toda la familia está reunida. Mamá prepara ensaladas, papá compra champán y los niños esperan a Ded Moroz, el Abuelo Frío. En la mesa hay mandarinas, tarta y comida de sobra."
   },
   {
    "ru": "В по́лночь все пьют шампа́нское и говоря́т: «С Но́вым го́дом!» Пото́м лю́ди выхо́дят на у́лицу. Там хо́лодно, но ве́село.",
    "es": "A medianoche todos brindan y se desean: «¡Feliz Año Nuevo!». Después salen a la calle: hace frío, pero el ambiente es estupendo."
   },
   {
    "ru": "У́тром все спят до обе́да. В январе́ в Росси́и дли́нные кани́кулы: лю́ди не рабо́тают почти́ неде́лю.",
    "es": "Por la mañana todo el mundo duerme hasta la hora de comer. En enero hay unas vacaciones largas: casi una semana sin trabajar."
   },
   {
    "ru": "А Рождество́ в Росси́и в январе́, а не в декабре́, как в Испа́нии. Лу́кас удивля́ется: «Снача́ла Но́вый год, а пото́м Рождество́? У вас всё наоборо́т!»",
    "es": "La Navidad en Rusia cae en enero, no en diciembre como en España. Lucas se sorprende: «¿Primero el Año Nuevo y después la Navidad? ¡Ustedes lo tienen todo al revés!»."
   }
  ]
 },
 {
  "id": "LEC-belnochi",
  "nivel": "A1",
  "desde": 7,
  "tema": "Ciudades",
  "titulo": "Бе́лые но́чи",
  "tituloEs": "Las noches blancas",
  "preguntas": [
   {
    "id": "LEC-belnochi-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ в Петербу́рге бе́лые но́чи?",
    "opciones": [
     "В ию́не.",
     "В декабре́.",
     "В сентябре́."
    ],
    "correcta": "В ию́не.",
    "explicacion": "«В ию́не в Санкт-Петербу́рге бе́лые но́чи»."
   },
   {
    "id": "LEC-belnochi-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ встаёт со́лнце в ию́не?",
    "opciones": [
     "В четы́ре часа́ утра́.",
     "В де́сять часо́в.",
     "О́коло полу́ночи."
    ],
    "correcta": "В четы́ре часа́ утра́.",
    "explicacion": "«Встаёт ра́но, в четы́ре часа́ утра́». A medianoche se pone."
   },
   {
    "id": "LEC-belnochi-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лают мосты́ но́чью?",
    "opciones": [
     "Поднима́ются.",
     "Закрыва́ют метро́.",
     "Ничего́."
    ],
    "correcta": "Поднима́ются.",
    "explicacion": "«Мост поднима́ется о́коло ча́са но́чи, и по реке́ иду́т корабли́»."
   },
   {
    "id": "LEC-belnochi-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́ша мно́го спит в Петербу́рге.",
    "verdadero": false,
    "explicacion": "«Я почти́ не сплю»."
   },
   {
    "id": "LEC-belnochi-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ захо́дит со́лнце в декабре́?",
    "opciones": [
     "В четы́ре.",
     "В де́сять.",
     "В по́лночь."
    ],
    "correcta": "В четы́ре.",
    "explicacion": "«В декабре́ со́лнце встаёт в де́сять часо́в, а захо́дит уже́ в четы́ре»."
   }
  ],
  "parrafos": [
   {
    "ru": "В ию́не в Санкт-Петербу́рге бе́лые но́чи. Что э́то зна́чит? Со́лнце захо́дит о́чень по́здно, о́коло полу́ночи, а встаёт ра́но, в четы́ре часа́ утра́. Но́чью на у́лице почти́ как днём. Бе́лые но́чи начина́ются в конце́ ма́я и зака́нчиваются в ию́ле.",
    "es": "En junio, San Petersburgo vive sus noches blancas. ¿Qué significa eso? Que el sol se pone tardísimo, hacia la medianoche, y sale muy pronto, a las cuatro de la madrugada. De noche hay casi tanta luz como de día. Las noches blancas empiezan a finales de mayo y terminan en julio."
   },
   {
    "ru": "В э́то вре́мя в го́роде мно́го тури́стов. Они́ гуля́ют всю ночь: в два и́ли в три часа́ но́чи на у́лице мно́го люде́й.",
    "es": "En esas semanas la ciudad se llena de turistas, que pasean toda la noche: a las dos o las tres de la madrugada las calles siguen llenas."
   },
   {
    "ru": "Ка́ждую ночь мосты́ на Неве́ разво́дят. Мост поднима́ется о́коло ча́са но́чи, и по реке́ иду́т корабли́. Тури́сты стоя́т на берегу́ и смо́трят. Э́то о́чень краси́во.",
    "es": "Cada noche se levantan los puentes del Nevá. Hacia la una se abren y pasan los barcos por el río. Los turistas lo miran desde la orilla: es todo un espectáculo."
   },
   {
    "ru": "Но лю́ди на друго́м берегу́ ча́сто смо́трят на часы́: мосты́ сво́дят то́лько ра́но у́тром.",
    "es": "Pero quien vive en la otra orilla está pendiente del reloj, porque los puentes no vuelven a bajar hasta primera hora de la mañana."
   },
   {
    "ru": "Ма́ша е́здит в Петербу́рг ка́ждое ле́то, обы́чно в конце́ ию́ня. Она́ говори́т: «Я почти́ не сплю. Но́чью я гуля́ю, а днём хожу́ в музе́и».",
    "es": "Masha va a Petersburgo cada verano, normalmente a finales de junio. Dice: «Casi no duermo. De noche paseo y de día voy a los museos»."
   },
   {
    "ru": "А зимо́й всё наоборо́т: в декабре́ со́лнце встаёт в де́сять часо́в, а захо́дит уже́ в четы́ре.",
    "es": "En invierno es justo al revés: en diciembre amanece a las diez y a las cuatro ya ha anochecido."
   }
  ]
 },
 {
  "id": "LEC-nedelia",
  "nivel": "A1",
  "desde": 7,
  "tema": "La rutina",
  "titulo": "Неде́ля Ди́мы",
  "tituloEs": "La semana de Dima",
  "preguntas": [
   {
    "id": "LEC-nedelia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Во ско́лько Ди́ма встаёт?",
    "opciones": [
     "В семь часо́в.",
     "В де́вять часо́в.",
     "В шесть часо́в."
    ],
    "correcta": "В семь часо́в.",
    "explicacion": "«Ка́ждое у́тро он встаёт в семь часо́в»."
   },
   {
    "id": "LEC-nedelia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ Ди́ма игра́ет в футбо́л?",
    "opciones": [
     "Во вто́рник и в четве́рг.",
     "В понеде́льник.",
     "В пя́тницу."
    ],
    "correcta": "Во вто́рник и в четве́рг.",
    "explicacion": "«Во вто́рник и в четве́рг ве́чером Ди́ма игра́ет в футбо́л»."
   },
   {
    "id": "LEC-nedelia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ зака́нчивается уро́к англи́йского?",
    "opciones": [
     "В де́вять три́дцать.",
     "В во́семь.",
     "В де́сять."
    ],
    "correcta": "В де́вять три́дцать.",
    "explicacion": "«Уро́к начина́ется в во́семь и зака́нчивается в де́вять три́дцать»."
   },
   {
    "id": "LEC-nedelia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "В пя́тницу у Ди́мы совеща́ние.",
    "verdadero": false,
    "explicacion": "El viernes está libre; la reunión es el lunes."
   },
   {
    "id": "LEC-nedelia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿qué haces los sábados? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "cuándo (В суббо́ту…)",
       "formas": [
        "в суббо́ту",
        "по суббо́там"
       ]
      },
      {
       "es": "qué haces (un verbo con я)",
       "formas": [
        "я"
       ]
      }
     ],
     "modelos": [
      "В суббо́ту я сплю до десяти́ и гуля́ю."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Ди́ма рабо́тает в о́фисе. Ка́ждое у́тро он встаёт в семь часо́в, принима́ет душ, за́втракает и в во́семь е́дет на рабо́ту. Его́ рабо́чий день начина́ется в де́вять часо́в и зака́нчивается в шесть. Обе́дает он в час дня в кафе́ ря́дом.",
    "es": "Dima trabaja en una oficina. Cada mañana se levanta a las siete, se ducha, desayuna y a las ocho sale hacia el trabajo. Su jornada empieza a las nueve y termina a las seis. A la una come en un café cercano."
   },
   {
    "ru": "В понеде́льник у́тром в о́фисе совеща́ние. Оно́ начина́ется в де́сять и зака́нчивается в оди́ннадцать. Ди́ма не лю́бит понеде́льник.",
    "es": "Los lunes por la mañana hay reunión en la oficina, de diez a once. A Dima no le gustan los lunes."
   },
   {
    "ru": "Во вто́рник и в четве́рг ве́чером Ди́ма игра́ет в футбо́л. Трениро́вка начина́ется в семь часо́в ве́чера.",
    "es": "Martes y jueves por la tarde juega al fútbol. El entrenamiento empieza a las siete."
   },
   {
    "ru": "В сре́ду ве́чером он у́чит англи́йский. Уро́к начина́ется в во́семь и зака́нчивается в де́вять три́дцать.",
    "es": "Los miércoles por la tarde estudia inglés. La clase va de las ocho a las nueve y media."
   },
   {
    "ru": "В пя́тницу Ди́ма свобо́ден. Ве́чером он встреча́ет дру́га в кафе́ и́ли идёт в кино́.",
    "es": "Los viernes los tiene libres: queda con un amigo en un café o se va al cine."
   },
   {
    "ru": "В суббо́ту он спит до десяти́, а пото́м иногда́ хо́дит на ры́нок. В воскресе́нье он обе́дает до́ма: ма́ма гото́вит его́ люби́мый суп.",
    "es": "Los sábados duerme hasta las diez y a veces se acerca al mercado. Los domingos come en casa de sus padres: su madre le prepara su sopa favorita."
   },
   {
    "ru": "Ди́ма говори́т: «Моя́ неде́ля о́чень бы́страя. Понеде́льник, пото́м сра́зу пя́тница!»",
    "es": "Dima dice: «Mi semana pasa volando. ¡Es lunes y de repente ya es viernes!»."
   }
  ]
 },
 {
  "id": "LEC-gagarin",
  "nivel": "A2",
  "desde": 8,
  "tema": "Historia",
  "titulo": "Ю́рий Гага́рин",
  "tituloEs": "Yuri Gagarin",
  "preguntas": [
   {
    "id": "LEC-gagarin-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где роди́лся Гага́рин?",
    "opciones": [
     "В дере́вне.",
     "В Москве́.",
     "В Петербу́рге."
    ],
    "correcta": "В дере́вне.",
    "explicacion": "«Он роди́лся в ма́ленькой дере́вне»."
   },
   {
    "id": "LEC-gagarin-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кем стал Гага́рин снача́ла?",
    "opciones": [
     "Лётчиком.",
     "Учи́телем.",
     "Врачо́м."
    ],
    "correcta": "Лётчиком.",
    "explicacion": "«Гага́рин стал лётчиком». Después, cosmonauta."
   },
   {
    "id": "LEC-gagarin-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что он сказа́л пе́ред полётом?",
    "opciones": [
     "«Пое́хали!»",
     "«До свида́ния!»",
     "«Спаси́бо!»"
    ],
    "correcta": "«Пое́хали!»",
    "explicacion": "«Пе́ред полётом он сказа́л: «Пое́хали!»»."
   },
   {
    "id": "LEC-gagarin-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Полёт был до́лгий: почти́ неде́лю.",
    "verdadero": false,
    "explicacion": "«Полёт был коро́ткий, почти́ два часа́»."
   },
   {
    "id": "LEC-gagarin-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ в Росси́и День космона́втики?",
    "opciones": [
     "В апре́ле.",
     "В январе́.",
     "Ле́том."
    ],
    "correcta": "В апре́ле.",
    "explicacion": "«Сего́дня э́тот день в апре́ле — пра́здник»."
   },
   {
    "id": "LEC-gagarin-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "¿Qué sabes ahora de Gagarin? Escribe en ruso una frase en pasado sobre él.",
    "sit": {
     "necesita": [
      {
       "es": "Gagarin (Гага́рин / он)",
       "formas": [
        "гага́рин",
        "он"
       ]
      },
      {
       "es": "un verbo en pasado",
       "rx": "(л|ла|ли|лся)$"
      }
     ],
     "modelos": [
      "Гага́рин полете́л в ко́смос."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Ю́рий Гага́рин — пе́рвый челове́к в ко́смосе. Его́ зна́ет весь мир.",
    "es": "Yuri Gagarin fue el primer ser humano en el espacio. Lo conoce el mundo entero."
   },
   {
    "ru": "Он роди́лся в ма́ленькой дере́вне. Его́ роди́тели бы́ли просты́е лю́ди: оте́ц стро́ил дома́, а мать рабо́тала на фе́рме.",
    "es": "Nació en una aldea pequeña. Sus padres eran gente sencilla: su padre construía casas y su madre trabajaba en una granja."
   },
   {
    "ru": "В де́тстве Ю́рий хорошо́ учи́лся. Пото́м он перее́хал в го́род. Там он учи́лся и рабо́тал на заво́де, а ве́чером учи́лся лета́ть. Он о́чень люби́л самолёты.",
    "es": "De niño sacaba buenas notas. Más tarde se mudó a la ciudad, donde estudió y trabajó en una fábrica; por las tardes aprendía a volar. Le apasionaban los aviones."
   },
   {
    "ru": "Гага́рин стал лётчиком. Одна́жды он узна́л, что в стране́ и́щут космона́втов. Он реши́л попро́бовать, и его́ вы́брали. Пото́м бы́ли до́лгие трениро́вки.",
    "es": "Se hizo piloto. Un día se enteró de que el país buscaba cosmonautas. Decidió presentarse, y lo eligieron. Vinieron después meses de entrenamiento."
   },
   {
    "ru": "Весно́й, в апре́ле, Гага́рин полете́л в ко́смос. Полёт был коро́ткий, почти́ два часа́, но о́чень опа́сный. У́тром в день полёта он встал ра́но, споко́йно поза́втракал и пое́хал к раке́те. Пе́ред полётом он сказа́л: «Пое́хали!»",
    "es": "En primavera, en abril, Gagarin despegó hacia el espacio. Aquella mañana se levantó temprano, desayunó con calma y fue hacia el cohete. Antes de despegar dijo: «¡Allá vamos!». El vuelo fue breve, de casi dos horas, pero muy peligroso."
   },
   {
    "ru": "Когда́ Гага́рин верну́лся, его́ встреча́ла вся страна́. Лю́ди выходи́ли на у́лицы, пе́ли и ра́довались. Он стал геро́ем. Пото́м он мно́го путеше́ствовал: он был в ра́зных стра́нах, и везде́ его́ встреча́ли как дру́га. Лю́ди люби́ли его́ улы́бку.",
    "es": "A su regreso, todo el país salió a recibirlo. La gente llenó las calles, cantaba y celebraba. Se convirtió en un héroe. Después viajó mucho: visitó muchos países y en todas partes lo recibían como a un amigo. A la gente le encantaba su sonrisa."
   },
   {
    "ru": "Сего́дня э́тот день в апре́ле — пра́здник в Росси́и, День космона́втики.",
    "es": "Hoy aquel día de abril es fiesta en Rusia: el Día de la Cosmonáutica."
   }
  ]
 },
 {
  "id": "LEC-pushkin",
  "nivel": "A2",
  "desde": 8,
  "tema": "Historia",
  "titulo": "Пу́шкин",
  "tituloEs": "Pushkin",
  "preguntas": [
   {
    "id": "LEC-pushkin-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто расска́зывал Пу́шкину ска́зки?",
    "opciones": [
     "Ня́ня.",
     "Ма́ма.",
     "Учи́тель."
    ],
    "correcta": "Ня́ня.",
    "explicacion": "«В де́тстве у него́ была́ ня́ня. Ве́чером она́ расска́зывала ру́сские ска́зки»."
   },
   {
    "id": "LEC-pushkin-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где Пу́шкин на́чал писа́ть стихи́?",
    "opciones": [
     "В шко́ле о́коло Петербу́рга.",
     "В Москве́.",
     "На ю́ге."
    ],
    "correcta": "В шко́ле о́коло Петербу́рга.",
    "explicacion": "«Пу́шкин учи́лся в шко́ле о́коло Петербу́рга. Там он на́чал писа́ть стихи́»."
   },
   {
    "id": "LEC-pushkin-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́е вре́мя го́да люби́л Пу́шкин?",
    "opciones": [
     "О́сень.",
     "Зи́му.",
     "Ле́то."
    ],
    "correcta": "О́сень.",
    "explicacion": "«Пу́шкин о́чень люби́л о́сень»."
   },
   {
    "id": "LEC-pushkin-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "У Пу́шкина бы́ло че́тверо дете́й.",
    "verdadero": true,
    "explicacion": "«У них бы́ло че́тверо дете́й»."
   },
   {
    "id": "LEC-pushkin-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что изуча́ют в шко́ле?",
    "opciones": [
     "«Евге́ния Оне́гина».",
     "Ска́зки.",
     "Пи́сьма."
    ],
    "correcta": "«Евге́ния Оне́гина».",
    "explicacion": "«…а «Евге́ния Оне́гина» изуча́ют в шко́ле». Los cuentos se leen a los niños."
   }
  ],
  "parrafos": [
   {
    "ru": "Алекса́ндр Пу́шкин — са́мый изве́стный ру́сский поэ́т. Ру́сские говоря́т: «Пу́шкин — э́то на́ше всё».",
    "es": "Alexandr Pushkin es el poeta ruso más famoso. Los rusos dicen: «Pushkin lo es todo para nosotros»."
   },
   {
    "ru": "Пу́шкин роди́лся в Москве́. В де́тстве у него́ была́ ня́ня. Ве́чером она́ расска́зывала ру́сские ска́зки, а ма́льчик слу́шал. Он по́мнил э́ти ска́зки всю жизнь.",
    "es": "Nació en Moscú. De niño tuvo una niñera que por las noches le contaba cuentos rusos, y él la escuchaba. Recordó esos cuentos toda su vida."
   },
   {
    "ru": "Пото́м Пу́шкин учи́лся в шко́ле о́коло Петербу́рга. Там он на́чал писа́ть стихи́. Его́ стихи́ сра́зу всем понра́вились.",
    "es": "Más tarde estudió en una escuela cerca de Petersburgo, y allí empezó a escribir poesía. Sus versos gustaron a todos desde el principio."
   },
   {
    "ru": "Пу́шкин жил в Петербу́рге, но мно́го путеше́ствовал. Он был на ю́ге, на мо́ре, в гора́х. Он писа́л стихи́, ска́зки и рома́ны. Са́мый изве́стный рома́н — «Евге́ний Оне́гин».",
    "es": "Vivió en Petersburgo, pero viajó mucho: conoció el sur, el mar y las montañas. Escribió poemas, cuentos y novelas. La más famosa es «Eugenio Oneguin»."
   },
   {
    "ru": "Пу́шкин о́чень люби́л о́сень. Одна́жды о́сенью он жил в дере́вне три ме́сяца и написа́л там о́чень мно́го.",
    "es": "A Pushkin le encantaba el otoño. Una vez pasó tres meses de otoño en el campo y escribió muchísimo."
   },
   {
    "ru": "Пото́м Пу́шкин жени́лся. Его́ жену́ зва́ли Ната́лья, она́ была́ о́чень краси́вая. У них бы́ло че́тверо дете́й.",
    "es": "Después se casó. Su mujer se llamaba Natalia y era muy guapa. Tuvieron cuatro hijos."
   },
   {
    "ru": "Пу́шкин у́мер молоды́м. Но его́ кни́ги живу́т. Сего́дня в Росси́и его́ стихи́ зна́ют все: и де́ти, и ба́бушки. Его́ ска́зки чита́ют де́тям, а «Евге́ния Оне́гина» изуча́ют в шко́ле. В Москве́ и в Петербу́рге стоя́т па́мятники Пу́шкину, и там всегда́ цветы́.",
    "es": "Pushkin murió joven, pero sus libros siguen vivos. Hoy en Rusia todo el mundo conoce sus versos, de los niños a las abuelas. Sus cuentos se leen a los pequeños y «Eugenio Oneguin» se estudia en el colegio. En Moscú y en Petersburgo hay monumentos a Pushkin, y siempre tienen flores."
   }
  ]
 },
 {
  "id": "LEC-llegada",
  "nivel": "A2",
  "desde": 8,
  "tema": "Viajes",
  "titulo": "Пе́рвый день в Москве́",
  "tituloEs": "El primer día en Moscú",
  "preguntas": [
   {
    "id": "LEC-llegada-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ Лу́кас прилете́л в Москву́?",
    "opciones": [
     "В сентябре́.",
     "В декабре́.",
     "В ию́не."
    ],
    "correcta": "В сентябре́.",
    "explicacion": "«Лу́кас прилете́л в Москву́ в сентябре́»."
   },
   {
    "id": "LEC-llegada-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ нашли́ чемода́н?",
    "opciones": [
     "Че́рез два дня.",
     "Че́рез час.",
     "Никогда́."
    ],
    "correcta": "Че́рез два дня.",
    "explicacion": "«Чемода́н нашли́ то́лько че́рез два дня!»."
   },
   {
    "id": "LEC-llegada-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто пригото́вил чай?",
    "opciones": [
     "Ди́ма.",
     "Лу́кас.",
     "Води́тель."
    ],
    "correcta": "Ди́ма.",
    "explicacion": "«Ди́ма показа́л ему́ ко́мнату и ку́хню и пригото́вил чай»."
   },
   {
    "id": "LEC-llegada-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас купи́л мно́го веще́й.",
    "verdadero": false,
    "explicacion": "«Лу́кас ничего́ не купи́л: все его́ де́ньги бы́ли в чемода́не!»."
   },
   {
    "id": "LEC-llegada-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Лу́кас ничего́ не купи́л?",
    "opciones": [
     "Де́ньги бы́ли в чемода́не.",
     "Магази́ны бы́ли закры́ты.",
     "Он не хоте́л."
    ],
    "correcta": "Де́ньги бы́ли в чемода́не.",
    "explicacion": "El dinero se había quedado en la maleta perdida."
   }
  ],
  "parrafos": [
   {
    "ru": "Лу́кас прилете́л в Москву́ в сентябре́. Самолёт прилете́л по́здно ве́чером.",
    "es": "Lucas llegó a Moscú en septiembre. Su avión aterrizó tarde, por la noche."
   },
   {
    "ru": "В аэропорту́ он до́лго ждал чемода́н. Все уже́ взя́ли свои́ чемода́ны, а его́ чемода́на не́ было. Лу́кас ждал час, пото́м пошёл и спроси́л. Чемода́н нашли́ то́лько че́рез два дня!",
    "es": "En el aeropuerto esperó mucho rato la maleta. Todos habían recogido ya las suyas, pero la de él no aparecía. Esperó una hora y luego fue a preguntar. ¡La encontraron dos días después!"
   },
   {
    "ru": "Пото́м Лу́кас взял такси́ и пое́хал в общежи́тие. Он пло́хо говори́л по-ру́сски и почти́ ничего́ не понима́л. Но води́тель был до́брый и всё объясни́л.",
    "es": "Luego tomó un taxi a la residencia. Hablaba poco ruso y casi no entendía nada, pero el conductor fue muy amable y se lo explicó todo."
   },
   {
    "ru": "В общежи́тии Лу́кас познако́мился с Ди́мой. Ди́ма показа́л ему́ ко́мнату и ку́хню и пригото́вил чай. Ко́мната была́ ма́ленькая, но све́тлая: там бы́ли две крова́ти, стол и шкаф.",
    "es": "En la residencia conoció a Dima, que le enseñó la habitación y la cocina y le preparó un té. La habitación era pequeña, pero luminosa: dos camas, una mesa y un armario."
   },
   {
    "ru": "Но́чью Лу́кас до́лго не спал. Он смотре́л в окно́ и ду́мал: «Я в Москве́! Здесь всё друго́е».",
    "es": "Esa noche Lucas tardó en dormirse. Miraba por la ventana y pensaba: «¡Estoy en Moscú! Aquí todo es distinto»."
   },
   {
    "ru": "У́тром он встал ра́но, позвони́л ма́ме и рассказа́л всё. Ма́ма спроси́ла: «Тебе́ нра́вится?» Лу́кас отве́тил: «Пока́ не зна́ю. Но мне о́чень интере́сно».",
    "es": "Por la mañana se levantó temprano, llamó a su madre y se lo contó todo. Ella le preguntó: «¿Te gusta?». Lucas respondió: «Todavía no lo sé. Pero me parece muy interesante»."
   },
   {
    "ru": "Пото́м Ди́ма показа́л ему́ го́род. Они́ погуля́ли в це́нтре и пое́хали на метро́. Лу́кас ничего́ не купи́л: все его́ де́ньги бы́ли в чемода́не!",
    "es": "Después, Dima le enseñó la ciudad: pasearon por el centro y se subieron al metro. Lucas no compró nada: ¡todo su dinero estaba en la maleta!"
   }
  ]
 },
 {
  "id": "LEC-maldia",
  "nivel": "A2",
  "desde": 8,
  "tema": "La vida diaria",
  "titulo": "Плохо́й день",
  "tituloEs": "Un mal día",
  "preguntas": [
   {
    "id": "LEC-maldia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Ма́ша вста́ла по́здно?",
    "opciones": [
     "Она́ не услы́шала буди́льник.",
     "Она́ уста́ла.",
     "Был выходно́й."
    ],
    "correcta": "Она́ не услы́шала буди́льник.",
    "explicacion": "«Она́ не услы́шала буди́льник и вста́ла по́здно»."
   },
   {
    "id": "LEC-maldia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ма́ша забы́ла до́ма?",
    "opciones": [
     "Телефо́н и зонт.",
     "Кни́ги.",
     "Ключи́."
    ],
    "correcta": "Телефо́н и зонт.",
    "explicacion": "Se dejó el teléfono y el paraguas (y no llevaba la cartera)."
   },
   {
    "id": "LEC-maldia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто купи́л Ма́ше суп?",
    "opciones": [
     "Подру́га.",
     "Ди́ма.",
     "Преподава́тель."
    ],
    "correcta": "Подру́га.",
    "explicacion": "«Подру́га купи́ла ей суп»."
   },
   {
    "id": "LEC-maldia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "До́ма Ди́ма и Лу́кас пригото́вили у́жин.",
    "verdadero": true,
    "explicacion": "«Они́ пригото́вили у́жин и купи́ли торт»."
   },
   {
    "id": "LEC-maldia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где был телефо́н?",
    "opciones": [
     "На столе́ на ку́хне.",
     "В су́мке.",
     "В университе́те."
    ],
    "correcta": "На столе́ на ку́хне.",
    "explicacion": "«Он всё вре́мя лежа́л на столе́ на ку́хне»."
   },
   {
    "id": "LEC-maldia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "¿Y tú? Cuenta en ruso algo que te pasó ayer (en pasado).",
    "sit": {
     "necesita": [
      {
       "es": "ayer (вчера́)",
       "formas": [
        "вчера́"
       ]
      },
      {
       "es": "un verbo en pasado",
       "rx": "(л|ла|ли|лся|лась)$"
      }
     ],
     "modelos": [
      "Вчера́ я опозда́л на рабо́ту."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Вчера́ у Ма́ши был о́чень плохо́й день.",
    "es": "Ayer Masha tuvo un día horrible."
   },
   {
    "ru": "У́тром она́ не услы́шала буди́льник и вста́ла по́здно. Она́ бы́стро оде́лась, вы́пила ко́фе и побежа́ла на ста́нцию. Но она́ забы́ла телефо́н до́ма!",
    "es": "Por la mañana no oyó el despertador y se levantó tarde. Se vistió a toda prisa, se tomó un café y salió corriendo hacia la estación. ¡Pero se dejó el teléfono en casa!"
   },
   {
    "ru": "Она́ опозда́ла на по́езд и пришла́ в университе́т в де́сять часо́в. Ле́кция уже́ начала́сь. Преподава́тель посмотре́л на Ма́шу, но ничего́ не сказа́л. Ле́кция была́ тру́дная, и Ма́ша почти́ ничего́ не поняла́.",
    "es": "Perdió el tren y llegó a la universidad a las diez. La clase ya había empezado. El profesor la miró, pero no dijo nada. Era una clase difícil y Masha casi no entendió nada."
   },
   {
    "ru": "В обе́д она́ хоте́ла пообе́дать в кафе́, но поняла́, что кошелька́ нет. Подру́га купи́ла ей суп.",
    "es": "A mediodía quiso comer en un café, pero se dio cuenta de que no llevaba la cartera. Una amiga le pagó la sopa."
   },
   {
    "ru": "Днём пошёл дождь. А зонт? Зонт то́же был до́ма. Ма́ша шла домо́й под дождём и ду́мала: «Како́й ужа́сный день!»",
    "es": "Por la tarde se puso a llover. ¿Y el paraguas? También estaba en casa. Masha volvía bajo la lluvia pensando: «¡Qué día más espantoso!»."
   },
   {
    "ru": "До́ма она́ откры́ла дверь — и уви́дела Ди́му и Лу́каса. Они́ пригото́вили у́жин и купи́ли торт.",
    "es": "Al abrir la puerta de casa, se encontró con Dima y Lucas: habían hecho la cena y comprado una tarta."
   },
   {
    "ru": "— Что случи́лось? — спроси́ла Ма́ша.",
    "es": "—¿Qué ha pasado? —preguntó Masha."
   },
   {
    "ru": "— Ничего́! Мы про́сто реши́ли сде́лать тебе́ пода́рок, — отве́тил Ди́ма.",
    "es": "—¡Nada! Simplemente quisimos darte una sorpresa —respondió Dima."
   },
   {
    "ru": "Ве́чером они́ до́лго пи́ли чай и смея́лись. Ма́ша сказа́ла: «Зна́ете, день был не тако́й плохо́й». А телефо́н? Он всё вре́мя лежа́л на столе́ на ку́хне.",
    "es": "Esa noche estuvieron mucho rato tomando té y riéndose. Masha dijo: «¿Saben? Al final no ha sido un día tan malo». ¿Y el teléfono? Se había pasado el día en la mesa de la cocina."
   }
  ]
 },
 {
  "id": "LEC-barcelona",
  "nivel": "A2",
  "desde": 9,
  "tema": "Ciudades",
  "titulo": "Барсело́на",
  "tituloEs": "Barcelona",
  "parrafos": [
   {
    "ru": "Барсело́на — большо́й и краси́вый го́род в Испа́нии, столи́ца Катало́нии. Он стои́т на берегу́ мо́ря.",
    "es": "Barcelona es una ciudad grande y bonita de España, la capital de Cataluña. Está a orillas del mar."
   },
   {
    "ru": "Здесь говоря́т по-испа́нски и по-катала́нски. Центр го́рода о́чень ста́рый: там ма́ленькие у́лицы и высо́кий собо́р. Тури́сты гуля́ют там весь день.",
    "es": "Aquí se habla español y catalán. El centro es muy antiguo: tiene calles pequeñas y una catedral alta. Los turistas pasean por allí todo el día."
   },
   {
    "ru": "Ле́том здесь жа́рко. Лю́ди отдыха́ют на пля́же, пла́вают в мо́ре, а пото́м пьют ко́фе в кафе́. Ве́чером они́ у́жинают по́здно, в де́вять, в де́сять часо́в.",
    "es": "En verano hace calor. La gente descansa en la playa, se baña en el mar y después toma un café en algún bar. Por la noche cenan tarde, a las nueve o a las diez."
   },
   {
    "ru": "Здесь игра́ет клуб «Ба́рса». Его́ лю́бят все. Ка́ждую неде́лю на стадио́не матч.",
    "es": "Aquí juega el Barça, un club que todos adoran. Cada semana hay partido en el estadio."
   },
   {
    "ru": "Сле́дующим ле́том Ма́ша пое́дет в Барсело́ну. Она́ полети́т на самолёте и бу́дет жить у подру́ги А́нны две неде́ли.",
    "es": "El próximo verano, Masha viajará a Barcelona. Irá en avión y se quedará dos semanas en casa de su amiga Anna."
   },
   {
    "ru": "Ма́ша уже́ купи́ла биле́т. Она́ возьмёт лёгкую оде́жду, очки́ и купа́льник, потому́ что в ию́ле там бу́дет о́чень жа́рко.",
    "es": "Ya tiene el billete. Se llevará ropa ligera, gafas de sol y bañador, porque en julio allí hará mucho calor."
   },
   {
    "ru": "Ма́ша уже́ зна́ет, что она́ бу́дет де́лать. Снача́ла она́ посмо́трит центр и собо́р Сагра́да Фами́лия. Пото́м они́ с А́нной пойду́т на пляж. Ве́чером они́ бу́дут гуля́ть и у́жинать по́здно, как испа́нцы.",
    "es": "Masha ya sabe lo que hará. Primero verá el centro y la Sagrada Familia. Después irá a la playa con Anna. Por las noches pasearán y cenarán tarde, como los españoles."
   },
   {
    "ru": "А Ди́ма? Он то́же хо́чет пое́хать. «Я обяза́тельно пойду́ на стадио́н и посмотрю́ матч», — говори́т он.",
    "es": "¿Y Dima? Él también quiere ir. «Pienso ir al estadio a ver un partido, seguro», dice."
   },
   {
    "ru": "Ма́ша смеётся: «Хорошо́. Но снача́ла ты вы́учишь испа́нский!»",
    "es": "Masha se ríe: «De acuerdo. ¡Pero antes aprenderás español!»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-barcelona-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Барсело́на — столи́ца Испа́нии.",
    "verdadero": false,
    "explicacion": "Es la capital de **Cataluña**: «столи́ца Катало́нии»."
   },
   {
    "id": "LEC-barcelona-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лают тури́сты в це́нтре?",
    "opciones": [
     "Гуля́ют весь день.",
     "Пла́вают в мо́ре.",
     "Игра́ют в футбо́л."
    ],
    "correcta": "Гуля́ют весь день.",
    "explicacion": "«Тури́сты гуля́ют там весь день»: pasean por el centro todo el día."
   },
   {
    "id": "LEC-barcelona-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ у́жинают в Барсело́не?",
    "opciones": [
     "По́здно.",
     "Ра́но.",
     "В два часа́."
    ],
    "correcta": "По́здно.",
    "explicacion": "«Ве́чером они́ у́жинают по́здно, в де́вять, в де́сять часо́в»."
   },
   {
    "id": "LEC-barcelona-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿qué te gusta hacer en verano? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "qué te gusta hacer (люблю́…)",
       "formas": [
        "люблю́"
       ]
      }
     ],
     "modelos": [
      "Ле́том я люблю́ пла́вать в мо́ре."
     ]
    }
   },
   {
    "id": "LEC-barcelona-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где Ма́ша бу́дет жить в Барсело́не?",
    "opciones": [
     "У подру́ги А́нны.",
     "В гости́нице.",
     "В общежи́тии."
    ],
    "correcta": "У подру́ги А́нны.",
    "explicacion": "«Она́… бу́дет жить у подру́ги А́нны две неде́ли»."
   },
   {
    "id": "LEC-barcelona-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ма́ша посмо́трит снача́ла?",
    "opciones": [
     "Центр и собо́р.",
     "Стадио́н.",
     "Пляж."
    ],
    "correcta": "Центр и собо́р.",
    "explicacion": "«Снача́ла она́ посмо́трит центр и собо́р Сагра́да Фами́лия»."
   },
   {
    "id": "LEC-barcelona-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что хо́чет сде́лать Ди́ма?",
    "opciones": [
     "Посмотре́ть матч.",
     "Вы́учить катала́нский.",
     "Пла́вать в мо́ре."
    ],
    "correcta": "Посмотре́ть матч.",
    "explicacion": "«Я обяза́тельно пойду́ на стадио́н и посмотрю́ матч»."
   },
   {
    "id": "LEC-barcelona-8",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́ша полети́т в Барсело́ну зимо́й.",
    "verdadero": false,
    "explicacion": "«Сле́дующим ле́том Ма́ша пое́дет в Барсело́ну»: en verano."
   }
  ]
 },
 {
  "id": "LEC-prognoz",
  "nivel": "A2",
  "desde": 9,
  "tema": "El tiempo",
  "titulo": "Прогно́з пого́ды",
  "tituloEs": "El pronóstico del tiempo",
  "preguntas": [
   {
    "id": "LEC-prognoz-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кака́я пого́да бу́дет в понеде́льник?",
    "opciones": [
     "Со́лнечно и тепло́.",
     "Дождь.",
     "Тума́н."
    ],
    "correcta": "Со́лнечно и тепло́.",
    "explicacion": "«В понеде́льник бу́дет со́лнечно и тепло́»."
   },
   {
    "id": "LEC-prognoz-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ бу́дет дождь весь день?",
    "opciones": [
     "В сре́ду и в четве́рг.",
     "В суббо́ту.",
     "В понеде́льник."
    ],
    "correcta": "В сре́ду и в четве́рг.",
    "explicacion": "«В сре́ду и в четве́рг бу́дет дождь весь день»."
   },
   {
    "id": "LEC-prognoz-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько гра́дусов бу́дет в пя́тницу?",
    "opciones": [
     "Во́семь.",
     "Пятна́дцать.",
     "Два́дцать."
    ],
    "correcta": "Во́семь.",
    "explicacion": "«Бу́дет хо́лодно, всего́ во́семь гра́дусов»."
   },
   {
    "id": "LEC-prognoz-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "На выходны́х бу́дет дождь.",
    "verdadero": false,
    "explicacion": "«На выходны́х бу́дет хоро́шая пого́да!»."
   },
   {
    "id": "LEC-prognoz-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ди́ма бу́дет де́лать в сре́ду?",
    "opciones": [
     "Смотре́ть фи́льмы до́ма.",
     "Игра́ть в футбо́л.",
     "Е́хать на да́чу."
    ],
    "correcta": "Смотре́ть фи́льмы до́ма.",
    "explicacion": "«А в сре́ду я бу́ду сиде́ть до́ма и смотре́ть фи́льмы»."
   },
   {
    "id": "LEC-prognoz-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "¿Qué harás tú el fin de semana si hace buen tiempo? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "qué harás (бу́ду + infinitivo, o un futuro como пое́ду, пойду́…)",
       "formas": [
        "бу́ду",
        "пое́ду",
        "пойду́",
        "погуля́ю"
       ]
      }
     ],
     "modelos": [
      "В суббо́ту я пое́ду за́ город."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Здра́вствуйте! Вот прогно́з пого́ды в Москве́ на сле́дующую неде́лю. Неде́ля бу́дет о́чень ра́зная: бу́дет и со́лнце, и дождь.",
    "es": "¡Buenos días! Este es el pronóstico del tiempo en Moscú para la semana que viene. Será una semana muy variada: habrá sol y también lluvia."
   },
   {
    "ru": "В понеде́льник бу́дет со́лнечно и тепло́, днём пятна́дцать гра́дусов. Хоро́ший день для прогу́лки!",
    "es": "El lunes hará sol y buena temperatura: quince grados durante el día. ¡Ideal para dar un paseo!"
   },
   {
    "ru": "Во вто́рник бу́дет о́блачно, но тепло́. Ве́чером пойдёт дождь, поэ́тому не забу́дьте зонт.",
    "es": "El martes estará nublado, pero no hará frío. Por la noche lloverá, así que no se olviden el paraguas."
   },
   {
    "ru": "В сре́ду и в четве́рг бу́дет дождь весь день. Бу́дет си́льный ве́тер, и ста́нет холодне́е: то́лько де́сять гра́дусов.",
    "es": "El miércoles y el jueves lloverá todo el día. Soplará un viento fuerte y bajarán las temperaturas: solo diez grados."
   },
   {
    "ru": "В пя́тницу дождь зако́нчится, но бу́дет хо́лодно, всего́ во́семь гра́дусов. Наде́ньте ку́ртку и ша́пку! Ве́чером, наве́рное, бу́дет тума́н, и води́телям ну́жно бу́дет е́хать ме́дленно.",
    "es": "El viernes dejará de llover, pero hará frío: apenas ocho grados. ¡Pónganse la chaqueta y el gorro! Por la noche probablemente habrá niebla, y los conductores tendrán que ir despacio."
   },
   {
    "ru": "А на выходны́х бу́дет хоро́шая пого́да! В суббо́ту и в воскресе́нье бу́дет со́лнце и почти́ два́дцать гра́дусов. Мо́жно бу́дет пое́хать за́ город и́ли погуля́ть в па́рке. В воскресе́нье ве́чером бу́дет немно́го ве́тра, но дождя́ не бу́дет. А в понеде́льник опя́ть пойдёт дождь.",
    "es": "¡Pero el fin de semana hará buen tiempo! El sábado y el domingo saldrá el sol y llegaremos casi a los veinte grados. Se podrá ir al campo o pasear por el parque. El domingo por la noche habrá algo de viento, pero no lloverá. Y el lunes volverá la lluvia."
   },
   {
    "ru": "Ма́ша слу́шает прогно́з и ду́мает: «Отли́чно! В суббо́ту мы пое́дем на да́чу. Я возьму́ ку́ртку, а Ди́ма возьмёт мяч».",
    "es": "Masha escucha el pronóstico y piensa: «¡Genial! El sábado vamos a la dacha. Yo me llevaré la chaqueta y Dima, la pelota»."
   },
   {
    "ru": "Ди́ма отвеча́ет: «А в сре́ду я бу́ду сиде́ть до́ма и смотре́ть фи́льмы. Пусть идёт дождь!»",
    "es": "Dima responde: «Y el miércoles me quedaré en casa viendo películas. ¡Que llueva todo lo que quiera!»."
   },
   {
    "ru": "А ма́ма, как всегда́, говори́т: «Возьми́те зонт и тёплые ве́щи!»",
    "es": "Y mamá, como siempre, dice: «¡Llévense el paraguas y ropa de abrigo!»."
   }
  ]
 },
 {
  "id": "LEC-planes",
  "nivel": "A2",
  "desde": 9,
  "tema": "Viajes",
  "titulo": "Пла́ны на ле́то",
  "tituloEs": "Planes para el verano",
  "preguntas": [
   {
    "id": "LEC-planes-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Куда́ пое́дет Лу́кас ле́том?",
    "opciones": [
     "На Байка́л.",
     "В Барсело́ну.",
     "В Петербу́рг."
    ],
    "correcta": "На Байка́л.",
    "explicacion": "«Он пое́дет на Байка́л». A Barcelona irá Masha."
   },
   {
    "id": "LEC-planes-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как Лу́кас пое́дет из Ирку́тска на о́зеро?",
    "opciones": [
     "На авто́бусе.",
     "На самолёте.",
     "На по́езде."
    ],
    "correcta": "На авто́бусе.",
    "explicacion": "«Пото́м он пое́дет на авто́бусе на о́зеро»."
   },
   {
    "id": "LEC-planes-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где Лу́кас бу́дет жить на Байка́ле?",
    "opciones": [
     "В пала́тке.",
     "В гости́нице.",
     "У Ди́мы."
    ],
    "correcta": "В пала́тке.",
    "explicacion": "«На Байка́ле он бу́дет жить в пала́тке». En el hotel, solo en Irkutsk."
   },
   {
    "id": "LEC-planes-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ди́ма бу́дет на Байка́ле всё ле́то.",
    "verdadero": false,
    "explicacion": "«Ди́ма то́же пое́дет на Байка́л, но то́лько на неде́лю»."
   },
   {
    "id": "LEC-planes-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Лу́кас бу́дет де́лать ка́ждый ве́чер?",
    "opciones": [
     "Писа́ть ма́ме сообще́ние.",
     "Смотре́ть фи́льмы.",
     "Гото́вить у́жин."
    ],
    "correcta": "Писа́ть ма́ме сообще́ние.",
    "explicacion": "«Ка́ждый ве́чер я бу́ду писа́ть тебе́ сообще́ние»."
   },
   {
    "id": "LEC-planes-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿adónde irás este verano? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "adónde irás (пое́ду в / на…)",
       "formas": [
        "пое́ду",
        "полечу́",
        "бу́ду"
       ]
      }
     ],
     "modelos": [
      "Ле́том я пое́ду на мо́ре."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Ско́ро ле́то, и Лу́кас уже́ ду́мает о кани́кулах. У него́ большо́й план: он пое́дет на Байка́л.",
    "es": "Ya casi es verano y Lucas está pensando en las vacaciones. Tiene un gran plan: irá al Baikal."
   },
   {
    "ru": "Снача́ла он полети́т на самолёте в Ирку́тск. Полёт до́лгий, почти́ шесть часо́в. В Ирку́тске он бу́дет жить в гости́нице два дня и посмо́трит го́род.",
    "es": "Primero volará a Irkutsk. Es un vuelo largo, de casi seis horas. En Irkutsk se alojará dos días en un hotel y conocerá la ciudad."
   },
   {
    "ru": "Пото́м он пое́дет на авто́бусе на о́зеро. На Байка́ле он бу́дет жить в пала́тке. Ка́ждый день он бу́дет гуля́ть в лесу́ и пла́вать в о́зере, е́сли вода́ бу́дет не о́чень холо́дная.",
    "es": "Después irá en autobús hasta el lago. En el Baikal dormirá en una tienda de campaña. Cada día paseará por el bosque y se bañará en el lago, si el agua no está demasiado fría."
   },
   {
    "ru": "Ещё Лу́кас хо́чет пое́хать на о́стров Ольхо́н. Там он сде́лает мно́го фотогра́фий. Он возьмёт тёплый сви́тер, рюкза́к и хоро́шие боти́нки, потому́ что но́чью там хо́лодно.",
    "es": "Lucas también quiere ir a la isla de Oljón. Allí hará muchas fotos. Se llevará un jersey de abrigo, una mochila y unas buenas botas, porque por la noche hace frío."
   },
   {
    "ru": "Ди́ма то́же пое́дет на Байка́л, но то́лько на неде́лю. Ему́ ну́жно рабо́тать. Они́ встре́тятся в Ирку́тске в конце́ ию́ля и вме́сте пое́дут на о́зеро. Пото́м Ди́ма полети́т домо́й, а Лу́кас оста́нется ещё на неде́лю.",
    "es": "Dima también irá al Baikal, pero solo una semana: tiene que trabajar. Se encontrarán en Irkutsk a finales de julio e irán juntos al lago. Luego Dima volverá a casa en avión y Lucas se quedará una semana más."
   },
   {
    "ru": "А Ма́ша? Ле́том она́ бу́дет рабо́тать, а в а́вгусте пое́дет в Барсело́ну.",
    "es": "¿Y Masha? En verano trabajará, y en agosto se irá a Barcelona."
   },
   {
    "ru": "Ма́ма Лу́каса волну́ется и ча́сто спра́шивает: «Ты бу́дешь звони́ть?» Лу́кас отвеча́ет: «Коне́чно, бу́ду. Ка́ждый ве́чер я бу́ду писа́ть тебе́ сообще́ние».",
    "es": "La madre de Lucas está preocupada y le pregunta a menudo: «¿Me vas a llamar?». Él responde: «Claro que sí. Te escribiré un mensaje cada noche»."
   },
   {
    "ru": "Лу́кас говори́т: «Я куплю́ биле́т за́втра. Я обяза́тельно уви́жу Байка́л!»",
    "es": "Lucas dice: «Mañana compro el billete. ¡Voy a ver el Baikal, seguro!»."
   }
  ]
 },
 {
  "id": "LEC-ekzamen",
  "nivel": "A2",
  "desde": 9,
  "tema": "Estudios",
  "titulo": "Ско́ро экза́мен",
  "tituloEs": "Se acerca el examen",
  "preguntas": [
   {
    "id": "LEC-ekzamen-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ у Ма́ши экза́мен?",
    "opciones": [
     "Че́рез две неде́ли.",
     "За́втра.",
     "Че́рез ме́сяц."
    ],
    "correcta": "Че́рез две неде́ли.",
    "explicacion": "«Че́рез две неде́ли у Ма́ши экза́мен»."
   },
   {
    "id": "LEC-ekzamen-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько часо́в в день Ма́ша бу́дет занима́ться?",
    "opciones": [
     "Два часа́.",
     "Пять часо́в.",
     "Час."
    ],
    "correcta": "Два часа́.",
    "explicacion": "«Ка́ждый день она́ бу́дет занима́ться два часа́»."
   },
   {
    "id": "LEC-ekzamen-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Куда́ Ма́ша пойдёт в суббо́ту?",
    "opciones": [
     "В библиоте́ку.",
     "В кино́.",
     "На ры́нок."
    ],
    "correcta": "В библиоте́ку.",
    "explicacion": "«В суббо́ту она́ пойдёт в библиоте́ку и возьмёт кни́ги»."
   },
   {
    "id": "LEC-ekzamen-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́ша бу́дет ложи́ться по́здно.",
    "verdadero": false,
    "explicacion": "«Она́ бу́дет ложи́ться ра́но, потому́ что ну́жно хорошо́ спать»."
   },
   {
    "id": "LEC-ekzamen-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ма́ша сде́лает, е́сли сдаст экза́мен на отли́чно?",
    "opciones": [
     "Пригото́вит у́жин и пригласи́т друзе́й.",
     "Пое́дет на Байка́л.",
     "Бу́дет спать неде́лю."
    ],
    "correcta": "Пригото́вит у́жин и пригласи́т друзе́й.",
    "explicacion": "«Я пригото́влю большо́й у́жин и приглашу́ всех друзе́й!»."
   },
   {
    "id": "LEC-ekzamen-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Escribe en ruso una cosa que harás mañana para estudiar ruso.",
    "sit": {
     "necesita": [
      {
       "es": "mañana (за́втра)",
       "formas": [
        "за́втра"
       ]
      },
      {
       "es": "un verbo en futuro (бу́ду + infinitivo, o прочита́ю, вы́учу…)",
       "formas": [
        "бу́ду",
        "прочита́ю",
        "вы́учу",
        "повторю́",
        "напишу́",
        "посмотрю́"
       ]
      }
     ],
     "modelos": [
      "За́втра я бу́ду чита́ть текст по-ру́сски."
     ]
    }
   }
  ],
  "parrafos": [
   {
    "ru": "Че́рез две неде́ли у Ма́ши экза́мен по англи́йскому языку́. Она́ немно́го волну́ется, но у неё есть план.",
    "es": "Dentro de dos semanas Masha tiene un examen de inglés. Está un poco nerviosa, pero tiene un plan."
   },
   {
    "ru": "Ка́ждый день она́ бу́дет занима́ться два часа́. У́тром она́ бу́дет чита́ть те́ксты, а ве́чером — слу́шать и писа́ть.",
    "es": "Estudiará dos horas cada día: por la mañana leerá textos, y por la tarde practicará la comprensión oral y la escritura."
   },
   {
    "ru": "На э́той неде́ле она́ повтори́т грамма́тику и вы́учит но́вые слова́. В суббо́ту она́ пойдёт в библиоте́ку и возьмёт кни́ги. Там ти́хо, и мо́жно рабо́тать весь день. Ещё она́ напи́шет письмо́ по-англи́йски и пока́жет его́ учи́тельнице. Ма́ша наде́ется, что всё бу́дет хорошо́.",
    "es": "Esta semana repasará la gramática y aprenderá vocabulario nuevo. El sábado irá a la biblioteca a sacar libros: allí hay silencio y se puede trabajar todo el día. También escribirá una carta en inglés y se la enseñará a la profesora. Masha confía en que todo saldrá bien."
   },
   {
    "ru": "На сле́дующей неде́ле она́ бу́дет говори́ть по-англи́йски с подру́гой. Подру́га хорошо́ зна́ет язы́к и помо́жет ей.",
    "es": "La semana que viene practicará la conversación con una amiga que domina el idioma y le echará una mano."
   },
   {
    "ru": "Ма́ша не бу́дет смотре́ть фи́льмы и не бу́дет гуля́ть до́лго. Она́ бу́дет ложи́ться ра́но, потому́ что ну́жно хорошо́ спать. В день экза́мена она́ вста́нет в семь часо́в, поза́втракает и пое́дет в университе́т на метро́. «По́сле экза́мена я бу́ду отдыха́ть це́лую неде́лю», — говори́т она́.",
    "es": "Masha no verá películas ni saldrá a pasear mucho rato. Se acostará temprano, porque hay que dormir bien. El día del examen se levantará a las siete, desayunará e irá en metro a la universidad. «Después del examen voy a descansar una semana entera», dice."
   },
   {
    "ru": "А Ди́ма спра́шивает: «А е́сли ты сдашь экза́мен на отли́чно, что ты сде́лаешь?»",
    "es": "Y Dima le pregunta: «¿Y si sacas la nota máxima, qué harás?»."
   },
   {
    "ru": "— Я пригото́влю большо́й у́жин и приглашу́ всех друзе́й!",
    "es": "—¡Prepararé una cena enorme e invitaré a todos mis amigos!"
   },
   {
    "ru": "— Тогда́ я то́же бу́ду тебе́ помога́ть, — смеётся Ди́ма.",
    "es": "—Entonces yo también te echaré una mano —se ríe Dima."
   }
  ]
 },
 {
  "id": "LEC-semia",
  "tema": "La familia",
  "tituloEs": "La familia de Masha",
  "nivel": "A2",
  "desde": 10,
  "titulo": "Семья́ Ма́ши",
  "parrafos": [
   {
    "ru": "У Ма́ши больша́я семья́. У неё есть роди́тели, брат, ба́бушка и де́душка. А ещё у них есть ко́шка, но соба́ки нет.",
    "es": "Masha tiene una familia grande: padres, un hermano, abuela y abuelo. Además tienen una gata, pero perro no."
   },
   {
    "ru": "Па́пу Ма́ши зову́т Серге́й. Ему́ со́рок во́семь лет. Он рабо́тает инжене́ром на большо́м заво́де. Ма́му зову́т Ири́на. Ей со́рок пять лет, она́ рабо́тает врачо́м в больни́це. У неё ма́ло свобо́дного вре́мени, но ве́чером она́ всегда́ гото́вит у́жин.",
    "es": "El padre de Masha se llama Serguéi y tiene cuarenta y ocho años. Es ingeniero en una fábrica grande. Su madre, Irina, tiene cuarenta y cinco y es médica en un hospital. Le queda poco tiempo libre, pero por las noches siempre hace la cena."
   },
   {
    "ru": "Ди́ме два́дцать три го́да. Он рабо́тает в о́фисе и мечта́ет стать архите́ктором. Ма́ше два́дцать лет. Она́ студе́нтка и хо́чет стать перево́дчиком.",
    "es": "Dima tiene veintitrés años. Trabaja en una oficina y sueña con ser arquitecto. Masha tiene veinte; estudia y quiere ser traductora."
   },
   {
    "ru": "Ба́бушка и де́душка живу́т недалеко́ от Ма́ши. Ба́бушке се́мьдесят лет, она́ уже́ не рабо́тает. Ра́ньше она́ была́ учи́тельницей. Де́душка занима́ется огоро́дом и чита́ет газе́ты.",
    "es": "Los abuelos viven cerca de Masha. La abuela tiene setenta años y ya no trabaja: antes era maestra. El abuelo se ocupa del huerto y lee el periódico."
   },
   {
    "ru": "Ещё у Ма́ши есть тётя и дя́дя. Они́ живу́т в Петербу́рге, и Ма́ша ча́сто е́здит к ним ле́том. У них дво́е дете́й, и Ма́ша лю́бит игра́ть с ни́ми.",
    "es": "Masha tiene también tíos. Viven en Petersburgo, y ella suele visitarlos en verano. Tienen dos hijos, y a Masha le encanta jugar con ellos."
   },
   {
    "ru": "В воскресе́нье вся семья́ обе́дает вме́сте у ба́бушки. Ба́бушка гото́вит суп и пироги́, а де́душка расска́зывает исто́рии. Ди́ма прихо́дит с подру́гой, а Ма́ша — с Лу́касом.",
    "es": "Los domingos toda la familia come junta en casa de la abuela. Ella prepara sopa y pirogí, y el abuelo cuenta historias. Dima viene con su novia, y Masha, con Lucas."
   },
   {
    "ru": "Ма́ше нра́вятся э́ти обе́ды. Она́ говори́т: «Без семьи́ мне бы́ло бы гру́стно». Лу́кас то́же их лю́бит: его́ семья́ далеко́, в Аргенти́не, и он ча́сто звони́т роди́телям.",
    "es": "A Masha le encantan esas comidas. Dice: «Sin mi familia me sentiría triste». A Lucas también le gustan: su familia está lejos, en Argentina, y llama a menudo a sus padres."
   },
   {
    "ru": "Ба́бушка всегда́ говори́т Лу́касу: «Ты у нас как внук!»",
    "es": "La abuela siempre le dice a Lucas: «¡Para nosotros eres como un nieto!»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-semia-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кем рабо́тает па́па Ма́ши?",
    "opciones": [
     "Инжене́ром.",
     "Врачо́м.",
     "Учи́телем."
    ],
    "correcta": "Инжене́ром.",
    "explicacion": "«Он рабо́тает инжене́ром на большо́м заво́де». Médica es la madre."
   },
   {
    "id": "LEC-semia-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько лет Ди́ме?",
    "opciones": [
     "Два́дцать три го́да.",
     "Два́дцать лет.",
     "Со́рок во́семь лет."
    ],
    "correcta": "Два́дцать три го́да.",
    "explicacion": "«Ди́ме два́дцать три го́да»: con el dativo se dice la edad."
   },
   {
    "id": "LEC-semia-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кем хо́чет стать Ма́ша?",
    "opciones": [
     "Перево́дчиком.",
     "Архите́ктором.",
     "Врачо́м."
    ],
    "correcta": "Перево́дчиком.",
    "explicacion": "«Она́… хо́чет стать перево́дчиком». Arquitecto quiere ser Dima."
   },
   {
    "id": "LEC-semia-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "У семьи́ Ма́ши есть соба́ка.",
    "verdadero": false,
    "explicacion": "«А ещё у них есть ко́шка, но соба́ки нет»: нет + genitivo."
   },
   {
    "id": "LEC-semia-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где обе́дает семья́ в воскресе́нье?",
    "opciones": [
     "У ба́бушки.",
     "В рестора́не.",
     "У Лу́каса."
    ],
    "correcta": "У ба́бушки.",
    "explicacion": "«В воскресе́нье вся семья́ обе́дает вме́сте у ба́бушки»."
   },
   {
    "id": "LEC-semia-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Habla de tu familia en ruso: quién hay en ella y a qué se dedica alguien.",
    "sit": {
     "necesita": [
      {
       "es": "quién hay (У меня́ есть…)",
       "formas": [
        "у меня́ есть",
        "у меня́"
       ]
      },
      {
       "es": "a qué se dedica (рабо́тает + instrumental)",
       "formas": [
        "рабо́тает",
        "рабо́таю"
       ]
      }
     ],
     "modelos": [
      "У меня́ есть брат. Он рабо́тает врачо́м."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-spisok",
  "tema": "Comida",
  "tituloEs": "La lista de la compra",
  "nivel": "A2",
  "desde": 10,
  "titulo": "Спи́сок поку́пок",
  "parrafos": [
   {
    "ru": "В суббо́ту у Ди́мы день рожде́ния. Придёт мно́го госте́й, поэ́тому ему́ ну́жно купи́ть мно́го еды́. Ма́ша помога́ет бра́ту и пи́шет спи́сок.",
    "es": "El sábado es el cumpleaños de Dima. Vendrán muchos invitados, así que tiene que comprar mucha comida. Masha ayuda a su hermano y hace la lista."
   },
   {
    "ru": "«Для сала́та нам ну́жно три помидо́ра, два огурца́ и немно́го лу́ка. Для горя́чего — два килогра́мма мя́са и килогра́мм карто́шки. Ещё ну́жно две буты́лки молока́, па́чка ма́сла, ба́нка смета́ны и кусо́к сы́ра».",
    "es": "«Para la ensalada necesitamos tres tomates, dos pepinos y un poco de cebolla. Para el plato principal, dos kilos de carne y uno de patatas. Además, dos botellas de leche, un paquete de mantequilla, un tarro de crema agria y un trozo de queso»."
   },
   {
    "ru": "Ди́ма чита́ет и спра́шивает:",
    "es": "Dima lo lee y pregunta:"
   },
   {
    "ru": "— А хлеб? Без хле́ба нельзя́!",
    "es": "—¿Y el pan? ¡Sin pan no puede ser!"
   },
   {
    "ru": "— Да, коне́чно. Бе́лый и чёрный хлеб.",
    "es": "—Claro. Pan blanco y pan negro."
   },
   {
    "ru": "— А что бу́дем пить?",
    "es": "—¿Y de beber?"
   },
   {
    "ru": "— Сок, во́ду и чай. Ещё ты хоте́л вино́, пра́вда?",
    "es": "—Zumo, agua y té. Y tú querías vino, ¿no?"
   },
   {
    "ru": "— Да, две буты́лки вина́. И не забу́дь торт!",
    "es": "—Sí, dos botellas. ¡Y no te olvides de la tarta!"
   },
   {
    "ru": "— Торт я сде́лаю сама́, — говори́т Ма́ша. — Для то́рта мне ну́жно шесть яи́ц, са́хар, мука́ и шокола́д.",
    "es": "—La tarta la hago yo —dice Masha—. Necesito seis huevos, azúcar, harina y chocolate."
   },
   {
    "ru": "Они́ иду́т в магази́н. В магази́не мно́го люде́й, и о́чередь дли́нная. Ди́ма берёт корзи́ну, а Ма́ша чита́ет спи́сок.",
    "es": "Van a la tienda. Está llena de gente y la cola es larga. Dima coge… mejor dicho, toma una cesta, y Masha va leyendo la lista."
   },
   {
    "ru": "Че́рез час у них всё есть. Нет то́лько шокола́да для то́рта: в магази́не его́ не́ было! Ма́ша звони́т Лу́касу:",
    "es": "Al cabo de una hora tienen todo. Solo falta el chocolate para la tarta: ¡en la tienda no había! Masha llama a Lucas:"
   },
   {
    "ru": "— Лу́кас, у тебя́ есть шокола́д?",
    "es": "—Lucas, ¿tienes chocolate?"
   },
   {
    "ru": "— Есть! Я сейча́с принесу́.",
    "es": "—¡Sí! Ahora te lo llevo."
   },
   {
    "ru": "Ди́ма смеётся: «Без Лу́каса у нас не́ было бы то́рта».",
    "es": "Dima se ríe: «Sin Lucas no tendríamos tarta»."
   },
   {
    "ru": "В суббо́ту ве́чером пришли́ друзья́ Ди́мы. Все е́ли сала́т и мя́со, пи́ли вино́ и сок. Пото́м Ма́ша принесла́ торт с шокола́дом. Ди́ма сказа́л: «Спаси́бо всем! Без вас э́тот день был бы не тако́й весёлый».",
    "es": "El sábado por la noche llegaron los amigos de Dima. Todos comieron ensalada y carne y bebieron vino y zumo. Luego Masha sacó la tarta de chocolate. Dima dijo: «¡Gracias a todos! Sin ustedes este día no habría sido tan divertido»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-spisok-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Ди́ме ну́жно купи́ть мно́го еды́?",
    "opciones": [
     "Придёт мно́го госте́й.",
     "До́ма нет еды́.",
     "Он лю́бит гото́вить."
    ],
    "correcta": "Придёт мно́го госте́й.",
    "explicacion": "«Придёт мно́го госте́й, поэ́тому ему́ ну́жно купи́ть мно́го еды́»."
   },
   {
    "id": "LEC-spisok-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько мя́са ну́жно?",
    "opciones": [
     "Два килогра́мма.",
     "Килогра́мм.",
     "Кусо́к."
    ],
    "correcta": "Два килогра́мма.",
    "explicacion": "«Два килогра́мма мя́са»: después de una cantidad, genitivo."
   },
   {
    "id": "LEC-spisok-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто сде́лает торт?",
    "opciones": [
     "Ма́ша.",
     "Ди́ма.",
     "Лу́кас."
    ],
    "correcta": "Ма́ша.",
    "explicacion": "«Торт я сде́лаю сама́, — говори́т Ма́ша»."
   },
   {
    "id": "LEC-spisok-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Чего́ не́ было в магази́не?",
    "opciones": [
     "Шокола́да.",
     "Хле́ба.",
     "Вина́."
    ],
    "correcta": "Шокола́да.",
    "explicacion": "«Нет то́лько шокола́да для то́рта: в магази́не его́ не́ было!»."
   },
   {
    "id": "LEC-spisok-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас принёс шокола́д.",
    "verdadero": true,
    "explicacion": "«Есть! Я сейча́с принесу́». Y la tarta salió con chocolate."
   }
  ]
 },
 {
  "id": "LEC-balet",
  "tema": "Cultura",
  "tituloEs": "El Teatro Bolshói",
  "nivel": "A2",
  "desde": 10,
  "titulo": "Большо́й теа́тр",
  "parrafos": [
   {
    "ru": "Большо́й теа́тр — оди́н из са́мых изве́стных теа́тров ми́ра. Он нахо́дится в це́нтре Москвы́, недалеко́ от Кра́сной пло́щади. В теа́тре мо́жно посмотре́ть о́перу и бале́т.",
    "es": "El Teatro Bolshói es uno de los más famosos del mundo. Está en el centro de Moscú, cerca de la Plaza Roja, y en él se puede ver ópera y ballet."
   },
   {
    "ru": "Ру́сский бале́т изве́стен во всём ми́ре. Мно́гие тури́сты приезжа́ют в Москву́ то́лько для того́, что́бы посмотре́ть бале́т в Большо́м теа́тре. Са́мый изве́стный бале́т — «Лебеди́ное о́зеро». Му́зыку к нему́ написа́л компози́тор Чайко́вский.",
    "es": "El ballet ruso tiene fama mundial. Muchos turistas viajan a Moscú solo para ver un ballet en el Bolshói. El más famoso es «El lago de los cisnes», con música del compositor Chaikovski."
   },
   {
    "ru": "Биле́ты в Большо́й теа́тр сто́ят до́рого, и купи́ть их тру́дно. Их покупа́ют за не́сколько ме́сяцев. Сейча́с биле́ты мо́жно купи́ть в интерне́те. В теа́тре есть пра́вило: на спекта́кль ну́жно приходи́ть во́время. По́сле тре́тьего звонка́ в зал уже́ не пуска́ют.",
    "es": "Las entradas son caras y difíciles de conseguir: se compran con varios meses de antelación. Hoy en día se pueden comprar por internet. El teatro tiene una norma: hay que llegar puntual. Después del tercer timbre ya no se deja entrar a la sala."
   },
   {
    "ru": "Ма́ша давно́ мечта́ла пойти́ на бале́т. На день рожде́ния роди́тели подари́ли ей два биле́та. Она́ пошла́ в теа́тр с подру́гой.",
    "es": "Masha soñaba desde hacía tiempo con ir al ballet. Por su cumpleaños, sus padres le regalaron dos entradas, y fue con una amiga."
   },
   {
    "ru": "Зал был о́чень краси́вый: кра́сный с зо́лотом, с большо́й ла́мпой над сце́ной. Ма́ша смотре́ла на танцо́ров и не могла́ пове́рить, что лю́ди так мо́гут. Танцо́ры танцева́ли почти́ три часа́. В переры́ве Ма́ша и подру́га пи́ли ко́фе и е́ли пиро́жные в буфе́те.",
    "es": "La sala era preciosa, roja y dorada, con una gran lámpara sobre el escenario. Masha miraba a los bailarines sin poder creer que alguien fuera capaz de moverse así. Bailaron casi tres horas. En el descanso, Masha y su amiga tomaron café y comieron pasteles en la cafetería del teatro."
   },
   {
    "ru": "По́сле спекта́кля они́ до́лго гуля́ли по це́нтру. Ма́ша сказа́ла подру́ге: «Спаси́бо тебе́ за э́тот ве́чер! Мне о́чень понра́вилось».",
    "es": "Después de la función pasearon un buen rato por el centro. Masha le dijo a su amiga: «¡Gracias por esta noche! Me ha encantado»."
   },
   {
    "ru": "Пото́м она́ написа́ла роди́телям: «Спаси́бо за пода́рок! Э́то был лу́чший ве́чер в мое́й жи́зни».",
    "es": "Luego escribió a sus padres: «¡Gracias por el regalo! Ha sido la mejor noche de mi vida»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-balet-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где нахо́дится Большо́й теа́тр?",
    "opciones": [
     "В це́нтре Москвы́.",
     "В Петербу́рге.",
     "Далеко́ от це́нтра."
    ],
    "correcta": "В це́нтре Москвы́.",
    "explicacion": "«Он нахо́дится в це́нтре Москвы́, недалеко́ от Кра́сной пло́щади»."
   },
   {
    "id": "LEC-balet-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто написа́л му́зыку к «Лебеди́ному о́зеру»?",
    "opciones": [
     "Чайко́вский.",
     "Пу́шкин.",
     "Гага́рин."
    ],
    "correcta": "Чайко́вский.",
    "explicacion": "«Му́зыку к нему́ написа́л компози́тор Чайко́вский»."
   },
   {
    "id": "LEC-balet-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кто подари́л Ма́ше биле́ты?",
    "opciones": [
     "Роди́тели.",
     "Подру́га.",
     "Ди́ма."
    ],
    "correcta": "Роди́тели.",
    "explicacion": "«На день рожде́ния роди́тели подари́ли ей два биле́та»."
   },
   {
    "id": "LEC-balet-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "По́сле тре́тьего звонка́ мо́жно войти́ в зал.",
    "verdadero": false,
    "explicacion": "«По́сле тре́тьего звонка́ в зал уже́ не пуска́ют»."
   },
   {
    "id": "LEC-balet-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лали Ма́ша и подру́га в переры́ве?",
    "opciones": [
     "Пи́ли ко́фе и е́ли пиро́жные.",
     "Гуля́ли по це́нтру.",
     "Покупа́ли биле́ты."
    ],
    "correcta": "Пи́ли ко́фе и е́ли пиро́жные.",
    "explicacion": "«В переры́ве Ма́ша и подру́га пи́ли ко́фе и е́ли пиро́жные в буфе́те»."
   },
   {
    "id": "LEC-balet-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Agradece a alguien en ruso un regalo o una noche (Спаси́бо за…).",
    "sit": {
     "necesita": [
      {
       "es": "gracias por… (Спаси́бо за + acusativo)",
       "formas": [
        "спаси́бо за"
       ]
      }
     ],
     "modelos": [
      "Спаси́бо за пода́рок!"
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-beztel",
  "tema": "La vida diaria",
  "tituloEs": "Una semana sin teléfono",
  "nivel": "A2",
  "desde": 10,
  "titulo": "Неде́ля без телефо́на",
  "parrafos": [
   {
    "ru": "Ди́ма реши́л провести́ экспериме́нт: одну́ неде́лю жить без телефо́на. Его́ друзья́ смея́лись: «Без телефо́на? Ты не смо́жешь!»",
    "es": "Dima decidió hacer un experimento: vivir una semana sin teléfono. Sus amigos se reían: «¿Sin teléfono? ¡No vas a poder!»."
   },
   {
    "ru": "В понеде́льник бы́ло тру́дно. У́тром Ди́ма просну́лся без буди́льника и опозда́л на рабо́ту. В метро́ ему́ бы́ло ску́чно: не́ было ни му́зыки, ни новосте́й. Он смотре́л на люде́й и ду́мал: «Все сидя́т с телефо́нами».",
    "es": "El lunes fue duro. Se despertó sin alarma y llegó tarde al trabajo. En el metro se aburrió: sin música ni noticias. Miraba a la gente y pensaba: «Todos van pegados al teléfono»."
   },
   {
    "ru": "Во вто́рник он купи́л газе́ту и кни́гу. В метро́ он чита́л, и вре́мя шло бы́стро.",
    "es": "El martes se compró un periódico y un libro. En el metro leyó, y el tiempo se le pasó volando."
   },
   {
    "ru": "В сре́ду бы́ло ещё лу́чше. Ве́чером он не сиде́л в интерне́те, а пошёл гуля́ть с сестро́й. Они́ до́лго разгова́ривали. Ди́ма узна́л, что у сестры́ ско́ро экза́мен и что она́ хо́чет пое́хать в Барсело́ну.",
    "es": "El miércoles fue todavía mejor. Por la noche, en lugar de estar en internet, salió a pasear con su hermana. Hablaron largo rato, y Dima se enteró de que ella tiene pronto un examen y quiere ir a Barcelona."
   },
   {
    "ru": "В четве́рг Ди́ма позвони́л ба́бушке с дома́шнего телефо́на. Ба́бушка была́ о́чень ра́да: «Ты мне никогда́ так ча́сто не звони́шь!»",
    "es": "El jueves llamó a su abuela desde el teléfono fijo. Ella se puso contentísima: «¡Nunca me llamas tan a menudo!»."
   },
   {
    "ru": "В пя́тницу он встре́тился с друзья́ми в кафе́. Все сиде́ли с телефо́нами, а Ди́ма слу́шал и разгова́ривал. Друзья́ спра́шивали: «Ну как тебе́ без телефо́на?» Ди́ма отвеча́л: «Снача́ла бы́ло тру́дно, а тепе́рь мне да́же нра́вится».",
    "es": "El viernes quedó con sus amigos en un café. Todos estaban con el móvil, mientras Dima escuchaba y charlaba. Sus amigos le preguntaban: «¿Qué tal sin teléfono?». Y él contestaba: «Al principio fue difícil, pero ahora hasta me gusta»."
   },
   {
    "ru": "В суббо́ту он сно́ва взял телефо́н. Там бы́ло сто сообще́ний. Но бо́льше всего́ его́ удиви́ло друго́е: ничего́ ва́жного он не пропусти́л.",
    "es": "El sábado volvió a encender el teléfono. Tenía cien mensajes. Pero lo que más le sorprendió fue otra cosa: no se había perdido nada importante."
   },
   {
    "ru": "Ди́ма говори́т: «Тепе́рь я выключа́ю телефо́н ве́чером. Без него́ у меня́ бо́льше вре́мени для семьи́ и для друзе́й».",
    "es": "Dima dice: «Ahora apago el teléfono por las noches. Sin él tengo más tiempo para mi familia y mis amigos»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-beztel-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Ди́ма опозда́л на рабо́ту в понеде́льник?",
    "opciones": [
     "Он просну́лся без буди́льника.",
     "Он уста́л.",
     "Не́ было метро́."
    ],
    "correcta": "Он просну́лся без буди́льника.",
    "explicacion": "«Ди́ма просну́лся без буди́льника и опозда́л на рабо́ту»."
   },
   {
    "id": "LEC-beztel-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ди́ма купи́л во вто́рник?",
    "opciones": [
     "Газе́ту и кни́гу.",
     "Но́вый телефо́н.",
     "Биле́т."
    ],
    "correcta": "Газе́ту и кни́гу.",
    "explicacion": "«Во вто́рник он купи́л газе́ту и кни́гу»."
   },
   {
    "id": "LEC-beztel-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кому́ Ди́ма позвони́л в четве́рг?",
    "opciones": [
     "Ба́бушке.",
     "Ма́ме.",
     "Дру́гу."
    ],
    "correcta": "Ба́бушке.",
    "explicacion": "«В четве́рг Ди́ма позвони́л ба́бушке»: позвони́ть + dativo."
   },
   {
    "id": "LEC-beztel-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ди́ма пропусти́л что́-то ва́жное.",
    "verdadero": false,
    "explicacion": "«Ничего́ ва́жного он не пропусти́л»."
   },
   {
    "id": "LEC-beztel-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ди́ма де́лает тепе́рь?",
    "opciones": [
     "Выключа́ет телефо́н ве́чером.",
     "Не по́льзуется телефо́ном.",
     "Сиди́т в интерне́те."
    ],
    "correcta": "Выключа́ет телефо́н ве́чером.",
    "explicacion": "«Тепе́рь я выключа́ю телефо́н ве́чером»."
   },
   {
    "id": "LEC-beztel-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "¿Podrías vivir sin teléfono? Contesta en ruso y di por qué.",
    "sit": {
     "necesita": [
      {
       "es": "si podrías o no (могу́ / не могу́)",
       "formas": [
        "могу́",
        "смогу́"
       ]
      },
      {
       "es": "por qué (потому́ что / без + genitivo)",
       "formas": [
        "потому́ что",
        "без"
       ]
      }
     ],
     "modelos": [
      "Я не могу́ жить без телефо́на, потому́ что там вся моя́ рабо́та."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-metro",
  "nivel": "A2",
  "desde": 11,
  "tema": "Ciudades",
  "titulo": "Метро́ в Москве́",
  "tituloEs": "El metro de Moscú",
  "parrafos": [
   {
    "ru": "Метро́ в Москве́ — э́то тра́нспорт и ещё музе́й. Оно́ рабо́тает почти́ сто лет. Ста́нции там как дворцы́: краси́вые ла́мпы и карти́ны на сте́нах.",
    "es": "El metro de Moscú es transporte y, a la vez, un museo. Funciona desde hace casi cien años. Sus estaciones parecen palacios: lámparas preciosas y cuadros en las paredes."
   },
   {
    "ru": "Ка́ждый день под землёй е́здит о́чень мно́го люде́й. Поезда́ хо́дят ча́сто, ка́ждые две мину́ты. У́тром и ве́чером в метро́ о́чень мно́го люде́й, поэ́тому лу́чше е́здить ра́но у́тром и́ли по́здно ве́чером.",
    "es": "Cada día viaja bajo tierra muchísima gente. Los trenes pasan muy a menudo, cada dos minutos. Por la mañana y por la tarde va llenísimo, así que conviene viajar muy temprano o tarde por la noche."
   },
   {
    "ru": "Как е́здить на метро́? Снача́ла ну́жно купи́ть биле́т и́ли ка́рту. Мо́жно заплати́ть и телефо́ном. Пото́м ну́жно найти́ свою́ ли́нию: у ка́ждой ли́нии свой цвет и свой но́мер. На ста́нции есть схе́ма метро́, и там всё поня́тно.",
    "es": "¿Cómo se usa? Primero hay que comprar un billete o una tarjeta; también se puede pagar con el teléfono. Luego hay que encontrar tu línea: cada una tiene su color y su número. En las estaciones hay un plano del metro y se entiende todo."
   },
   {
    "ru": "Вчера́ Лу́кас впервы́е е́хал оди́н. Снача́ла он не понима́л, куда́ е́хать: всё бы́ло по-ру́сски. Пото́м он спроси́л у же́нщины, как дое́хать до Кра́сной пло́щади. Она́ объясни́ла: «Вам ну́жно вы́йти на ста́нции „Охо́тный ряд“». Лу́кас дое́хал за пятна́дцать мину́т.",
    "es": "Ayer Lucas viajó solo por primera vez. Al principio no sabía hacia dónde ir: todo estaba en ruso. Entonces le preguntó a una mujer cómo llegar a la Plaza Roja, y ella le explicó: «Tiene que bajarse en la estación Ojotni Riad». Llegó en quince minutos."
   },
   {
    "ru": "В ваго́не он слу́шал, как объявля́ют ста́нции. Мужско́й го́лос говори́т, когда́ по́езд е́дет в центр, а же́нский — когда́ из це́нтра. Так мо́жно знать, куда́ ты е́дешь, да́же е́сли не смо́тришь на схе́му.",
    "es": "En el vagón escuchaba cómo anunciaban las estaciones. Una voz de hombre las anuncia cuando el tren va hacia el centro, y una de mujer cuando va hacia afuera. Así sabes en qué dirección vas aunque no mires el plano."
   },
   {
    "ru": "Ещё Лу́кас заме́тил: в метро́ лю́ди почти́ не разгова́ривают. Все чита́ют, слу́шают му́зыку и́ли смо́трят в телефо́н. А когда́ в ваго́н вхо́дит пожило́й челове́к, молодо́й обы́чно встаёт и говори́т: «Сади́тесь, пожа́луйста».",
    "es": "Lucas también se fijó en que en el metro la gente casi no habla: leen, escuchan música o miran el teléfono. Y cuando entra una persona mayor, normalmente un joven se levanta y le dice: «Siéntese, por favor»."
   },
   {
    "ru": "За́втра Лу́кас пое́дет на ста́нцию «Маяко́вская». Говоря́т, она́ о́чень интере́сная. Ма́ша сказа́ла ему́: «Е́сли потеря́ешься, позвони́ мне». Но Лу́кас уве́рен, что всё бу́дет хорошо́.",
    "es": "Mañana Lucas irá a la estación Mayakóvskaya, que dicen que es muy interesante. Masha le dijo: «Si te pierdes, llámame». Pero Lucas está seguro de que todo irá bien."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-metro-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ метро́ — э́то ещё и музе́й?",
    "opciones": [
     "Ста́нции как дворцы́.",
     "Там продаю́т карти́ны.",
     "Там мно́го тури́стов."
    ],
    "correcta": "Ста́нции как дворцы́.",
    "explicacion": "«Ста́нции там как дворцы́: краси́вые ла́мпы и карти́ны на стена́х»."
   },
   {
    "id": "LEC-metro-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как ча́сто хо́дят поезда́?",
    "opciones": [
     "Ка́ждые две мину́ты.",
     "Ка́ждые пятна́дцать мину́т.",
     "Ка́ждый час."
    ],
    "correcta": "Ка́ждые две мину́ты.",
    "explicacion": "«Поезда́ хо́дят ча́сто, ка́ждые две мину́ты». Los quince minutos son lo que tardó Lucas."
   },
   {
    "id": "LEC-metro-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас е́хал с Ма́шей.",
    "verdadero": false,
    "explicacion": "«Лу́кас впервы́е е́хал оди́н»: fue solo."
   },
   {
    "id": "LEC-metro-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿cómo vas al trabajo o a clase? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "cómo vas (е́зжу…, хожу́…)",
       "formas": [
        "е́зжу",
        "хожу́",
        "е́ду",
        "иду́"
       ]
      }
     ],
     "modelos": [
      "Я е́зжу на рабо́ту на метро́."
     ]
    }
   },
   {
    "id": "LEC-metro-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Как мо́жно заплати́ть в метро́?",
    "opciones": [
     "Биле́том, ка́ртой и́ли телефо́ном.",
     "То́лько деньга́ми.",
     "То́лько ка́ртой."
    ],
    "correcta": "Биле́том, ка́ртой и́ли телефо́ном.",
    "explicacion": "«Ну́жно купи́ть биле́т и́ли ка́рту. Мо́жно заплати́ть и телефо́ном»."
   },
   {
    "id": "LEC-metro-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Чей го́лос объявля́ет ста́нции, когда́ по́езд е́дет в центр?",
    "opciones": [
     "Мужско́й.",
     "Же́нский.",
     "Де́тский."
    ],
    "correcta": "Мужско́й.",
    "explicacion": "«Мужско́й го́лос говори́т, когда́ по́езд е́дет в центр, а же́нский — когда́ из це́нтра»."
   },
   {
    "id": "LEC-metro-7",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "В метро́ лю́ди мно́го разгова́ривают.",
    "verdadero": false,
    "explicacion": "«В метро́ лю́ди почти́ не разгова́ривают»."
   },
   {
    "id": "LEC-metro-8",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что говоря́т пожило́му челове́ку в ваго́не?",
    "opciones": [
     "«Сади́тесь, пожа́луйста».",
     "«Извини́те».",
     "«До свида́ния»."
    ],
    "correcta": "«Сади́тесь, пожа́луйста».",
    "explicacion": "Un joven se levanta y le dice «Сади́тесь, пожа́луйста»."
   }
  ]
 },
 {
  "id": "LEC-restoran",
  "tema": "Comer fuera",
  "tituloEs": "En el restaurante",
  "nivel": "A2",
  "desde": 11,
  "titulo": "В рестора́не",
  "parrafos": [
   {
    "ru": "В пя́тницу ве́чером Ма́ша, Ди́ма и Лу́кас пошли́ в ру́сский рестора́н. Они́ заказа́ли сто́лик зара́нее, потому́ что в пя́тницу там всегда́ мно́го люде́й.",
    "es": "El viernes por la noche, Masha, Dima y Lucas fueron a un restaurante ruso. Habían reservado mesa, porque los viernes siempre está lleno."
   },
   {
    "ru": "— До́брый ве́чер! У вас зака́з? — спроси́л официа́нт.",
    "es": "—¡Buenas noches! ¿Tienen reserva? —preguntó el camarero."
   },
   {
    "ru": "— Да, сто́лик на трои́х, на фами́лию Петро́ва.",
    "es": "—Sí, una mesa para tres, a nombre de Petrova."
   },
   {
    "ru": "— Пожа́луйста, проходи́те. Вот меню́.",
    "es": "—Adelante, por favor. Aquí tienen la carta."
   },
   {
    "ru": "В рестора́не игра́ла ти́хая му́зыка, а на сте́нах висе́ли ста́рые фотогра́фии Москвы́.",
    "es": "Sonaba una música suave y en las paredes colgaban fotos antiguas de Moscú."
   },
   {
    "ru": "Лу́кас до́лго чита́л меню́. Там бы́ло мно́го незнако́мых слов.",
    "es": "Lucas estuvo un buen rato leyendo la carta: había muchas palabras que no conocía."
   },
   {
    "ru": "— Что вы посове́туете? — спроси́л он официа́нта.",
    "es": "—¿Qué nos recomienda? —le preguntó al camarero."
   },
   {
    "ru": "— Попро́буйте борщ. Он у нас о́чень вку́сный. А на второ́е — ры́ба и́ли мя́со с карто́шкой.",
    "es": "—Prueben el borsch: aquí lo hacemos muy rico. Y de segundo, pescado o carne con patatas."
   },
   {
    "ru": "— Хорошо́. Мне, пожа́луйста, борщ и ры́бу.",
    "es": "—De acuerdo. Para mí, borsch y pescado, por favor."
   },
   {
    "ru": "— Борщ со смета́ной?",
    "es": "—¿El borsch con crema agria?"
   },
   {
    "ru": "— Да, и с чёрным хле́бом, пожа́луйста.",
    "es": "—Sí, y con pan negro, por favor."
   },
   {
    "ru": "— А мне сала́т и мя́со, — сказа́ла Ма́ша.",
    "es": "—Yo, ensalada y carne —dijo Masha."
   },
   {
    "ru": "— А я бу́ду суп и мя́со, как Ма́ша, — сказа́л Ди́ма.",
    "es": "—Y yo, sopa y carne, como Masha —dijo Dima."
   },
   {
    "ru": "— Что бу́дете пить?",
    "es": "—¿Qué van a beber?"
   },
   {
    "ru": "— Мо́жно воды́ и чай на всех? И ещё сок для меня́, — попроси́л Лу́кас.",
    "es": "—¿Nos trae agua y té para todos? Y un zumo para mí —pidió Lucas."
   },
   {
    "ru": "Еда́ была́ о́чень вку́сная. Лу́кас сказа́л: «Борщ — э́то моё но́вое люби́мое блю́до!»",
    "es": "La comida estaba buenísima. Lucas dijo: «¡El borsch es mi nuevo plato favorito!»."
   },
   {
    "ru": "Пото́м они́ заказа́ли десе́рт: торт и моро́женое. В конце́ ве́чера Ди́ма попроси́л счёт.",
    "es": "Después pidieron postre: tarta y helado. Al final de la noche, Dima pidió la cuenta."
   },
   {
    "ru": "— Мо́жно заплати́ть ка́ртой?",
    "es": "—¿Se puede pagar con tarjeta?"
   },
   {
    "ru": "— Коне́чно.",
    "es": "—Por supuesto."
   },
   {
    "ru": "В Росси́и обы́чно оставля́ют официа́нту немно́го де́нег, е́сли всё понра́вилось. Лу́кас оста́вил де́ньги и сказа́л: «Спаси́бо, всё бы́ло о́чень вку́сно!»",
    "es": "En Rusia se suele dejar algo de dinero al camarero si todo ha estado bien. Lucas dejó unas monedas y dijo: «¡Gracias, estaba todo riquísimo!»."
   },
   {
    "ru": "На у́лице Ди́ма предложи́л: «В сле́дующий раз пойдём в грузи́нский рестора́н. Там то́же о́чень вку́сно». Лу́кас отве́тил: «Отли́чная иде́я! Я хочу́ попро́бовать всё».",
    "es": "Ya en la calle, Dima propuso: «La próxima vez vamos a un restaurante georgiano. También se come muy bien». Lucas respondió: «¡Buena idea! Quiero probarlo todo»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-restoran-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ они́ заказа́ли сто́лик зара́нее?",
    "opciones": [
     "В пя́тницу там мно́го люде́й.",
     "Рестора́н ма́ленький.",
     "Они́ пришли́ по́здно."
    ],
    "correcta": "В пя́тницу там мно́го люде́й.",
    "explicacion": "«…потому́ что в пя́тницу там всегда́ мно́го люде́й»."
   },
   {
    "id": "LEC-restoran-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что посове́товал официа́нт?",
    "opciones": [
     "Борщ.",
     "Сала́т.",
     "Моро́женое."
    ],
    "correcta": "Борщ.",
    "explicacion": "«Попро́буйте борщ»."
   },
   {
    "id": "LEC-restoran-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что заказа́л Лу́кас?",
    "opciones": [
     "Борщ и ры́бу.",
     "Сала́т и мя́со.",
     "Суп и мя́со."
    ],
    "correcta": "Борщ и ры́бу.",
    "explicacion": "«Мне, пожа́луйста, борщ и ры́бу». Ensalada y carne pidió Masha."
   },
   {
    "id": "LEC-restoran-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Они́ плати́ли деньга́ми.",
    "verdadero": false,
    "explicacion": "«Мо́жно заплати́ть ка́ртой? — Коне́чно»."
   },
   {
    "id": "LEC-restoran-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Куда́ они́ пойду́т в сле́дующий раз?",
    "opciones": [
     "В грузи́нский рестора́н.",
     "В кафе́.",
     "Домо́й."
    ],
    "correcta": "В грузи́нский рестора́н.",
    "explicacion": "«В сле́дующий раз пойдём в грузи́нский рестора́н»."
   },
   {
    "id": "LEC-restoran-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Estás en un restaurante. Pide al camarero en ruso un plato y una bebida.",
    "sit": {
     "necesita": [
      {
       "es": "pedir con cortesía (Мне, пожа́луйста… / Я бу́ду…)",
       "formas": [
        "мне",
        "я бу́ду",
        "мо́жно"
       ]
      },
      {
       "es": "un plato o bebida",
       "formas": [
        "суп",
        "борщ",
        "сала́т",
        "ры́бу",
        "мя́со",
        "чай",
        "ко́фе",
        "во́ду",
        "сок"
       ]
      }
     ],
     "modelos": [
      "Мне, пожа́луйста, борщ и чай."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-kurtka",
  "tema": "Compras",
  "tituloEs": "Una chaqueta nueva",
  "nivel": "A2",
  "desde": 11,
  "titulo": "Но́вая ку́ртка",
  "parrafos": [
   {
    "ru": "Ско́ро зима́, а у Лу́каса нет тёплой ку́ртки. В Аргенти́не ему́ не нужна́ была́ така́я оде́жда. Ма́ша сказа́ла: «Без ку́ртки ты здесь не проживёшь. Пойдём в магази́н!»",
    "es": "Se acerca el invierno y Lucas no tiene chaqueta de abrigo: en Argentina nunca le hizo falta algo así. Masha le dijo: «Sin chaqueta aquí no sobrevives. ¡Vamos a comprarte una!»."
   },
   {
    "ru": "В суббо́ту они́ пое́хали в большо́й торго́вый центр. Там бы́ло мно́го магази́нов, и Лу́кас не знал, куда́ идти́.",
    "es": "El sábado fueron a un centro comercial grande. Había tantas tiendas que Lucas no sabía por dónde empezar."
   },
   {
    "ru": "— Извини́те, где здесь мужска́я оде́жда? — спроси́ла Ма́ша.",
    "es": "—Perdone, ¿dónde está la ropa de hombre? —preguntó Masha."
   },
   {
    "ru": "— На второ́м этаже́, спра́ва, — отве́тила же́нщина.",
    "es": "—En el segundo piso, a la derecha —contestó una mujer."
   },
   {
    "ru": "В магази́не Лу́кас уви́дел чёрную ку́ртку.",
    "es": "En la tienda, Lucas vio una chaqueta negra."
   },
   {
    "ru": "— Ско́лько она́ сто́ит? — спроси́л он продавца́.",
    "es": "—¿Cuánto cuesta? —le preguntó al vendedor."
   },
   {
    "ru": "— Пятна́дцать ты́сяч рубле́й. Но сего́дня ски́дка: двена́дцать ты́сяч.",
    "es": "—Quince mil rublos. Pero hoy hay descuento: doce mil."
   },
   {
    "ru": "— Мо́жно её наде́ть?",
    "es": "—¿Me la puedo probar?"
   },
   {
    "ru": "— Коне́чно. Како́й у вас разме́р?",
    "es": "—Claro. ¿Qué talla tiene?"
   },
   {
    "ru": "— Не зна́ю. В Аргенти́не други́е разме́ры.",
    "es": "—No lo sé. En Argentina las tallas son distintas."
   },
   {
    "ru": "Продаве́ц принёс две ку́ртки. Пе́рвая была́ ма́ленькая, а втора́я — как раз. Но Ма́ше она́ не понра́вилась.",
    "es": "El vendedor le trajo dos. La primera le quedaba pequeña; la segunda, perfecta. Pero a Masha no le gustó."
   },
   {
    "ru": "— По-мо́ему, чёрная — э́то ску́чно. Посмотри́ на си́нюю! Она́ краси́вее и тепле́е.",
    "es": "—Para mí, la negra es aburrida. ¡Mira la azul! Es más bonita y más abrigada."
   },
   {
    "ru": "Лу́кас наде́л си́нюю. Она́ действи́тельно была́ лу́чше, но сто́ила доро́же: восемна́дцать ты́сяч.",
    "es": "Lucas se probó la azul. Era mejor, sí, pero también más cara: dieciocho mil."
   },
   {
    "ru": "— Ну что? — спроси́л продаве́ц.",
    "es": "—¿Y bien? —preguntó el vendedor."
   },
   {
    "ru": "— Я возьму́ си́нюю, — сказа́л Лу́кас. — Мо́жно заплати́ть ка́ртой?",
    "es": "—Me llevo la azul —dijo Lucas—. ¿Puedo pagar con tarjeta?"
   },
   {
    "ru": "— Да, коне́чно. Ваш чек. Е́сли что́-то не так, вы мо́жете верну́ть ку́ртку в тече́ние двух неде́ль.",
    "es": "—Por supuesto. Aquí tiene el tique. Si algo no va bien, puede devolverla en un plazo de dos semanas."
   },
   {
    "ru": "Пото́м они́ ещё купи́ли ша́пку, шарф и тёплые боти́нки. Лу́кас потра́тил мно́го де́нег, но тепе́рь он гото́в к ру́сской зиме́.",
    "es": "Luego compraron también un gorro, una bufanda y unas botas de abrigo. Lucas gastó mucho dinero, pero ya está listo para el invierno ruso."
   },
   {
    "ru": "Ве́чером он сде́лал фотогра́фию в но́вой ку́ртке и посла́л её ма́ме. Ма́ма отве́тила: «Тепе́рь ты настоя́щий ру́сский!»",
    "es": "Por la noche se hizo una foto con la chaqueta nueva y se la mandó a su madre. Ella le contestó: «¡Ahora eres un ruso de verdad!»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-kurtka-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Почему́ Лу́касу нужна́ ку́ртка?",
    "opciones": [
     "Ско́ро зима́.",
     "Он потеря́л ку́ртку.",
     "Э́то пода́рок."
    ],
    "correcta": "Ско́ро зима́.",
    "explicacion": "«Ско́ро зима́, а у Лу́каса нет тёплой ку́ртки»."
   },
   {
    "id": "LEC-kurtka-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где мужска́я оде́жда?",
    "opciones": [
     "На второ́м этаже́.",
     "На пе́рвом этаже́.",
     "На тре́тьем этаже́."
    ],
    "correcta": "На второ́м этаже́.",
    "explicacion": "«На второ́м этаже́, спра́ва»."
   },
   {
    "id": "LEC-kurtka-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько сто́ит чёрная ку́ртка со ски́дкой?",
    "opciones": [
     "Двена́дцать ты́сяч.",
     "Пятна́дцать ты́сяч.",
     "Восемна́дцать ты́сяч."
    ],
    "correcta": "Двена́дцать ты́сяч.",
    "explicacion": "«Сего́дня ски́дка: двена́дцать ты́сяч»."
   },
   {
    "id": "LEC-kurtka-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Каку́ю ку́ртку купи́л Лу́кас?",
    "opciones": [
     "Си́нюю.",
     "Чёрную.",
     "Кра́сную."
    ],
    "correcta": "Си́нюю.",
    "explicacion": "«Я возьму́ си́нюю»."
   },
   {
    "id": "LEC-kurtka-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ку́ртку мо́жно верну́ть.",
    "verdadero": true,
    "explicacion": "«Вы мо́жете верну́ть ку́ртку в тече́ние двух неде́ль»."
   },
   {
    "id": "LEC-kurtka-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "En una tienda: pregunta en ruso cuánto cuesta algo y si te lo puedes probar.",
    "sit": {
     "necesita": [
      {
       "es": "cuánto cuesta (Ско́лько сто́ит…?)",
       "formas": [
        "ско́лько сто́ит",
        "ско́лько сто́ят"
       ]
      },
      {
       "es": "si te lo puedes probar (Мо́жно…?)",
       "formas": [
        "мо́жно"
       ]
      }
     ],
     "modelos": [
      "Ско́лько сто́ит э́та ку́ртка? Мо́жно её наде́ть?"
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-gostinitsa",
  "tema": "Viajes",
  "tituloEs": "Un problema en el hotel",
  "nivel": "A2",
  "desde": 11,
  "titulo": "Пробле́ма в гости́нице",
  "parrafos": [
   {
    "ru": "Ле́том Ди́ма пое́хал в Каза́нь. Он заброни́ровал но́мер в гости́нице в це́нтре го́рода на три но́чи.",
    "es": "En verano, Dima viajó a Kazán. Había reservado una habitación en un hotel del centro para tres noches."
   },
   {
    "ru": "По́здно ве́чером он пришёл в гости́ницу.",
    "es": "Llegó al hotel tarde por la noche."
   },
   {
    "ru": "— До́брый ве́чер! Я заброни́ровал но́мер на фами́лию Петро́в.",
    "es": "—Buenas noches. Tengo una habitación reservada a nombre de Petrov."
   },
   {
    "ru": "— Здра́вствуйте! Сейча́с посмотрю́… Да, ваш но́мер три́ста пять, на тре́тьем этаже́. Вот ключ. За́втрак с семи́ до десяти́.",
    "es": "—¡Hola! Un momento… Sí, la 305, en el tercer piso. Aquí tiene la llave. El desayuno es de siete a diez."
   },
   {
    "ru": "Ди́ма подня́лся в но́мер, но там всё бы́ло не так, как на фотогра́фиях. В ко́мнате бы́ло о́чень жа́рко, окно́ не открыва́лось, а в ва́нной не́ было горя́чей воды́. Ди́ма позвони́л администра́тору.",
    "es": "Dima subió a la habitación, pero nada era como en las fotos. Hacía muchísimo calor, la ventana no se abría y en el baño no salía agua caliente. Llamó al recepcionista."
   },
   {
    "ru": "— Извини́те, у меня́ пробле́ма. В но́мере нет горя́чей воды́, и окно́ не открыва́ется.",
    "es": "—Perdone, tengo un problema: no hay agua caliente y la ventana no se abre."
   },
   {
    "ru": "— Ой, извини́те, пожа́луйста! Сейча́с к вам придёт ма́стер.",
    "es": "—¡Ay, disculpe! Ahora mismo le mandamos al técnico."
   },
   {
    "ru": "Че́рез два́дцать мину́т пришёл ма́стер. Он посмотре́л и сказа́л: «Сего́дня я не могу́ э́то испра́вить. Ну́жно ждать до утра́».",
    "es": "A los veinte minutos llegó el técnico. Lo revisó y dijo: «Hoy no puedo arreglarlo. Habrá que esperar hasta mañana»."
   },
   {
    "ru": "Ди́ма спусти́лся вниз.",
    "es": "Dima bajó a recepción."
   },
   {
    "ru": "— Мо́жно поменя́ть но́мер? Я о́чень уста́л и хочу́ спать.",
    "es": "—¿Me pueden cambiar de habitación? Estoy muy cansado y quiero dormir."
   },
   {
    "ru": "— Коне́чно. Мы дади́м вам друго́й но́мер, бо́льше и с ви́дом на го́род. И за́втрак для вас бу́дет беспла́тный.",
    "es": "—Claro. Le daremos otra más grande y con vistas a la ciudad. Y el desayuno corre de nuestra cuenta."
   },
   {
    "ru": "Но́вый но́мер был отли́чный: большо́й, све́тлый и ти́хий. Из окна́ был ви́ден Кремль.",
    "es": "La habitación nueva era estupenda: grande, luminosa y tranquila. Desde la ventana se veía el Kremlin."
   },
   {
    "ru": "У́тром Ди́ма вку́сно поза́втракал и пошёл гуля́ть по го́роду. Он написа́л Ма́ше: «Снача́ла всё бы́ло пло́хо, но тепе́рь мне здесь о́чень нра́вится. Каза́нь — краси́вый го́род!»",
    "es": "Por la mañana, Dima desayunó de maravilla y salió a recorrer la ciudad. Le escribió a Masha: «Al principio todo salió mal, pero ahora me encanta esto. ¡Kazán es preciosa!»."
   },
   {
    "ru": "Пе́ред отъе́здом он написа́л на са́йте гости́ницы: «Пробле́мы быва́ют везде́. Ва́жно, как их реша́ют. Здесь их реши́ли бы́стро».",
    "es": "Antes de irse escribió en la web del hotel: «Problemas hay en todas partes. Lo importante es cómo se resuelven. Aquí los resolvieron rápido»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-gostinitsa-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "На ско́лько ноче́й Ди́ма заброни́ровал но́мер?",
    "opciones": [
     "На три но́чи.",
     "На одну́ ночь.",
     "На неде́лю."
    ],
    "correcta": "На три но́чи.",
    "explicacion": "«Он заброни́ровал но́мер… на три но́чи»."
   },
   {
    "id": "LEC-gostinitsa-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Кака́я была́ пробле́ма в но́мере?",
    "opciones": [
     "Не́ было горя́чей воды́.",
     "Не́ было ключа́.",
     "Бы́ло хо́лодно."
    ],
    "correcta": "Не́ было горя́чей воды́.",
    "explicacion": "«В ва́нной не́ было горя́чей воды́», y además hacía calor y la ventana no se abría."
   },
   {
    "id": "LEC-gostinitsa-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ма́стер испра́вил всё сра́зу.",
    "verdadero": false,
    "explicacion": "«Сего́дня я не могу́ э́то испра́вить»."
   },
   {
    "id": "LEC-gostinitsa-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что дала́ гости́ница Ди́ме?",
    "opciones": [
     "Друго́й но́мер и беспла́тный за́втрак.",
     "Де́ньги.",
     "Биле́т в музе́й."
    ],
    "correcta": "Друго́й но́мер и беспла́тный за́втрак.",
    "explicacion": "«Мы дади́м вам друго́й но́мер… И за́втрак для вас бу́дет беспла́тный»."
   },
   {
    "id": "LEC-gostinitsa-5",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что Ди́ма ви́дел из окна́ но́вого но́мера?",
    "opciones": [
     "Кремль.",
     "Мо́ре.",
     "Вокза́л."
    ],
    "correcta": "Кремль.",
    "explicacion": "«Из окна́ был ви́ден Кремль»: el Kremlin de Kazán."
   },
   {
    "id": "LEC-gostinitsa-6",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "En el hotel no funciona algo. Explícalo en ruso con cortesía.",
    "sit": {
     "necesita": [
      {
       "es": "disculpa (Извини́те…)",
       "formas": [
        "извини́те"
       ]
      },
      {
       "es": "qué falla (нет + genitivo, o не рабо́тает…)",
       "formas": [
        "нет",
        "не рабо́тает",
        "не открыва́ется"
       ]
      }
     ],
     "modelos": [
      "Извини́те, в но́мере нет горя́чей воды́."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-dacha",
  "nivel": "B1",
  "desde": 12,
  "tema": "La vida en Rusia",
  "titulo": "На да́че",
  "tituloEs": "En la dacha",
  "parrafos": [
   {
    "ru": "У семьи́ Ма́ши есть да́ча — ма́ленький дом в дере́вне, ря́дом с реко́й. Ле́том они́ отдыха́ют там почти́ ка́ждую неде́лю.",
    "es": "La familia de Masha tiene una dacha, una casita en un pueblo junto al río. En verano van a descansar casi todas las semanas."
   },
   {
    "ru": "Да́ча — э́то ва́жная часть ру́сской жи́зни. У мно́гих семе́й есть да́ча за́ городом. В пя́тницу ве́чером доро́ги из Москвы́ по́лные маши́н: все е́дут на свои́ да́чи. А в воскресе́нье ве́чером все возвраща́ются.",
    "es": "La dacha es una parte importante de la vida rusa: muchas familias tienen una fuera de la ciudad. Los viernes por la tarde, las carreteras que salen de Moscú están llenas de coches: todo el mundo va a su dacha. Y el domingo por la tarde, todos vuelven."
   },
   {
    "ru": "Там есть сад и огоро́д. Ба́бушка лю́бит рабо́тать в огоро́де: у неё расту́т помидо́ры, огурцы́, карто́шка и клубни́ка. Де́душка ча́сто гуля́ет в лесу́, и Ди́ма хо́дит с ним. Они́ собира́ют грибы́ и я́годы. Де́душка зна́ет все грибы́, а Ди́ма пока́ нет.",
    "es": "Tienen jardín y huerto. A la abuela le encanta trabajar en el huerto, donde crecen tomates, pepinos, patatas y fresas. El abuelo sale a menudo al bosque, y Dima lo acompaña. Recogen setas y frutos del bosque. El abuelo conoce todas las setas; Dima, todavía no."
   },
   {
    "ru": "— Э́тот гриб мо́жно есть? — спра́шивает Ди́ма.",
    "es": "—¿Esta seta se puede comer? —pregunta Dima."
   },
   {
    "ru": "— Нет, не тро́гай его́! Возьми́ лу́чше вот э́тот, — отвеча́ет де́душка.",
    "es": "—¡No, no la toques! Mejor coge esta otra —responde el abuelo."
   },
   {
    "ru": "В про́шлую суббо́ту бы́ло о́чень жа́рко. Ма́ша и Ди́ма купа́лись в реке́, а ве́чером все пи́ли чай в саду́. Бы́ло ти́хо, и никто́ не хоте́л возвраща́ться в го́род. Ма́ма сказа́ла: «Здесь лу́чше, чем в Москве́: во́здух чи́стый, и никто́ никуда́ не спеши́т».",
    "es": "El sábado pasado hacía mucho calor. Masha y Dima se bañaron en el río, y por la noche todos tomaron té en el jardín. Había tanta calma que nadie quería volver a la ciudad. Mamá dijo: «Aquí se está mejor que en Moscú: el aire es limpio y nadie tiene prisa»."
   },
   {
    "ru": "На да́че нет хоро́шего интерне́та, поэ́тому вечера́ там други́е. Они́ игра́ют в ша́хматы, чита́ют кни́ги и́ли про́сто разгова́ривают. Ди́ма снача́ла скуча́л без телефо́на, а тепе́рь говори́т, что э́то са́мые споко́йные дни го́да.",
    "es": "En la dacha no hay buen internet, así que las noches son distintas: juegan al ajedrez, leen o simplemente charlan. Al principio Dima se aburría sin el teléfono; ahora dice que son los días más tranquilos del año."
   },
   {
    "ru": "Ле́том на да́че ча́сто быва́ют го́сти. Сосе́ди прихо́дят в го́сти, прино́сят пироги́ и́ли о́вощи из своего́ огоро́да, и все вме́сте сидя́т в саду́ до по́здней но́чи.",
    "es": "En verano suelen venir visitas a la dacha. Los vecinos se pasan con pirogí o con verduras de su huerto, y todos se quedan en el jardín hasta muy tarde."
   },
   {
    "ru": "В а́вгусте в саду́ бу́дет мно́го я́блок. Ба́бушка пригото́вит из них сок и варе́нье, и зимо́й они́ бу́дут пить чай и ду́мать о ле́те.",
    "es": "En agosto el jardín estará lleno de manzanas. La abuela hará zumo y mermelada, y en invierno tomarán té pensando en el verano."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-dacha-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Где да́ча?",
    "opciones": [
     "В дере́вне, ря́дом с реко́й.",
     "В це́нтре Москвы́.",
     "На берегу́ мо́ря."
    ],
    "correcta": "В дере́вне, ря́дом с реко́й.",
    "explicacion": "«Ма́ленький дом в дере́вне, ря́дом с реко́й»."
   },
   {
    "id": "LEC-dacha-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что де́лали Ма́ша и Ди́ма в про́шлую суббо́ту?",
    "opciones": [
     "Купа́лись в реке́.",
     "Рабо́тали в огоро́де.",
     "Е́здили в го́род."
    ],
    "correcta": "Купа́лись в реке́.",
    "explicacion": "«Ма́ша и Ди́ма купа́лись в реке́»."
   },
   {
    "id": "LEC-dacha-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ба́бушка пригото́вит сок из я́блок.",
    "verdadero": true,
    "explicacion": "«Ба́бушка пригото́вит из них сок»: de las manzanas del jardín."
   },
   {
    "id": "LEC-dacha-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿dónde descansas en verano? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "dónde descansas (отдыха́ю…)",
       "formas": [
        "отдыха́ю",
        "е́зжу",
        "живу́"
       ]
      }
     ],
     "modelos": [
      "Ле́том я отдыха́ю на мо́ре."
     ]
    }
   },
   {
    "id": "LEC-dacha-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Почему́ в пя́тницу на доро́гах мно́го маши́н?",
    "opciones": [
     "Все е́дут на да́чи.",
     "Все е́дут на рабо́ту.",
     "Все е́дут в аэропо́рт."
    ],
    "correcta": "Все е́дут на да́чи.",
    "explicacion": "«В пя́тницу ве́чером доро́ги из Москвы́ по́лные маши́н: все е́дут на свои́ да́чи»."
   },
   {
    "id": "LEC-dacha-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что собира́ют Ди́ма и де́душка в лесу́?",
    "opciones": [
     "Грибы́ и я́годы.",
     "Цветы́.",
     "Я́блоки."
    ],
    "correcta": "Грибы́ и я́годы.",
    "explicacion": "«Они́ собира́ют грибы́ и я́годы»."
   },
   {
    "id": "LEC-dacha-7",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "На да́че хоро́ший интерне́т.",
    "verdadero": false,
    "explicacion": "«На да́че нет хоро́шего интерне́та»."
   },
   {
    "id": "LEC-dacha-8",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что де́лают на да́че ве́чером?",
    "opciones": [
     "Игра́ют в ша́хматы, чита́ют и разгова́ривают.",
     "Смо́трят телеви́зор.",
     "Рабо́тают."
    ],
    "correcta": "Игра́ют в ша́хматы, чита́ют и разгова́ривают.",
    "explicacion": "«Они́ игра́ют в ша́хматы, чита́ют кни́ги и́ли про́сто разгова́ривают»."
   }
  ]
 },
 {
  "id": "LEC-dvagoroda",
  "tema": "Ciudades",
  "tituloEs": "Moscú y Petersburgo",
  "nivel": "B1",
  "desde": 12,
  "titulo": "Москва́ и Петербу́рг",
  "parrafos": [
   {
    "ru": "В Росси́и мно́го спо́рят, како́й го́род лу́чше: Москва́ и́ли Петербу́рг. У ка́ждого из них есть что́-то своё, и у ка́ждого свои́ друзья́.",
    "es": "En Rusia se discute mucho qué ciudad es mejor: Moscú o Petersburgo. Cada una tiene lo suyo, y cada una tiene sus defensores."
   },
   {
    "ru": "Москва́ бо́льше и ста́рше. Э́то столи́ца, и жизнь здесь быстре́е: лю́ди бо́льше рабо́тают, бо́льше спеша́т и ме́ньше спят. В Москве́ бо́льше рабо́ты, и зарпла́ты обы́чно вы́ше. Но и кварти́ры здесь доро́же.",
    "es": "Moscú es más grande y más antigua. Es la capital, y la vida va más deprisa: la gente trabaja más, corre más y duerme menos. Hay más trabajo y los sueldos suelen ser más altos. Pero los apartamentos también son más caros."
   },
   {
    "ru": "Петербу́рг моло́же, но мно́гие счита́ют, что он краси́вее. Там ре́ки и кана́лы, ста́рые дворцы́ и мосты́. Го́род ти́ше, а лю́ди там, говоря́т, бо́льше чита́ют и бо́льше хо́дят в музе́и и теа́тры.",
    "es": "Petersburgo es más joven, pero muchos opinan que es más bonita: tiene ríos y canales, palacios antiguos y puentes. Es más tranquila, y dicen que allí la gente lee más y va más a museos y teatros."
   },
   {
    "ru": "Пого́да то́же ра́зная. В Петербу́рге ча́сто идёт дождь, а ве́тер с мо́ря сильне́е. Зато́ ле́том там бе́лые но́чи, а в Москве́ их нет. В Москве́ ле́том обы́чно тепле́е, а зимо́й холодне́е.",
    "es": "El clima también es distinto. En Petersburgo llueve a menudo y el viento del mar sopla más fuerte. A cambio, en verano tiene noches blancas, que en Moscú no hay. En Moscú suele hacer más calor en verano y más frío en invierno."
   },
   {
    "ru": "Ещё мо́жно сравни́ть еду́: в Москве́ бо́льше рестора́нов, а в Петербу́рге, говоря́т, лу́чше ко́фе и ма́ленькие кафе́. Ме́жду города́ми хо́дит бы́стрый по́езд «Сапса́н»: он е́дет всего́ четы́ре часа́.",
    "es": "También se puede comparar la comida: en Moscú hay más restaurantes, y en Petersburgo, dicen, mejor café y cafeterías pequeñas. Entre las dos ciudades circula un tren rápido, el Sapsán, que tarda solo cuatro horas."
   },
   {
    "ru": "Ма́ша живёт в Москве́, но ка́ждое ле́то е́здит в Петербу́рг. Она́ говори́т: «Москва́ — мой дом, а Петербу́рг — мой люби́мый го́род. В Москве́ интере́снее рабо́тать, а в Петербу́рге лу́чше гуля́ть».",
    "es": "Masha vive en Moscú, pero cada verano viaja a Petersburgo. Dice: «Moscú es mi casa, y Petersburgo, mi ciudad favorita. En Moscú es más interesante trabajar; en Petersburgo, pasear»."
   },
   {
    "ru": "Ди́ма с ней не согла́сен: «По-мо́ему, Москва́ лу́чше во всём. Здесь бо́льше рестора́нов, бо́льше конце́ртов и бо́льше возмо́жностей».",
    "es": "Dima no está de acuerdo: «Para mí, Moscú gana en todo. Hay más restaurantes, más conciertos y más oportunidades»."
   },
   {
    "ru": "Лу́кас был в обо́их города́х. Его́ мне́ние тако́е: «Москва́ бо́льше похо́жа на Буэ́нос-А́йрес: больша́я и жива́я. А Петербу́рг похо́ж на Евро́пу. Мне нра́вятся о́ба. Но е́сли выбира́ть, где жить, я вы́беру Москву́: здесь мои́ друзья́».",
    "es": "Lucas ha estado en las dos. Su opinión es esta: «Moscú se parece más a Buenos Aires: grande y llena de vida. Petersburgo parece Europa. Me gustan las dos. Pero si tuviera que elegir dónde vivir, elegiría Moscú: aquí están mis amigos»."
   },
   {
    "ru": "А вам како́й го́род бо́льше нра́вится?",
    "es": "¿Y a ti qué ciudad te gusta más?"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-dvagoroda-1",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Како́й го́род ста́рше?",
    "opciones": [
     "Москва́.",
     "Петербу́рг.",
     "Они́ одного́ во́зраста."
    ],
    "correcta": "Москва́.",
    "explicacion": "«Москва́ бо́льше и ста́рше»: comparativo de ста́рый."
   },
   {
    "id": "LEC-dvagoroda-2",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Где, говоря́т, бо́льше чита́ют?",
    "opciones": [
     "В Петербу́рге.",
     "В Москве́.",
     "В Буэ́нос-А́йресе."
    ],
    "correcta": "В Петербу́рге.",
    "explicacion": "«Лю́ди там, говоря́т, бо́льше чита́ют»."
   },
   {
    "id": "LEC-dvagoroda-3",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Где ле́том тепле́е?",
    "opciones": [
     "В Москве́.",
     "В Петербу́рге.",
     "Одина́ково."
    ],
    "correcta": "В Москве́.",
    "explicacion": "«В Москве́ ле́том обы́чно тепле́е, а зимо́й холодне́е»."
   },
   {
    "id": "LEC-dvagoroda-4",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "Ди́ма ду́мает, что Петербу́рг лу́чше.",
    "verdadero": false,
    "explicacion": "«По-мо́ему, Москва́ лу́чше во всём»."
   },
   {
    "id": "LEC-dvagoroda-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Почему́ Лу́кас вы́берет Москву́?",
    "opciones": [
     "Там его́ друзья́.",
     "Там тепле́е.",
     "Там деше́вле."
    ],
    "correcta": "Там его́ друзья́.",
    "explicacion": "«Я вы́беру Москву́: здесь мои́ друзья́»."
   },
   {
    "id": "LEC-dvagoroda-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "situacion",
    "pide": "Compara en ruso dos ciudades que conozcas (más grande, más bonita, más cara…).",
    "sit": {
     "necesita": [
      {
       "es": "un comparativo (бо́льше, краси́вее, доро́же…)",
       "rx": "(ее|ше|же|че|ще)$"
      }
     ],
     "modelos": [
      "Барсело́на ме́ньше, чем Мадри́д, но краси́вее."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-sovety",
  "tema": "Viajes",
  "tituloEs": "Consejos para el turista",
  "nivel": "B1",
  "desde": 12,
  "titulo": "Сове́ты тури́сту",
  "parrafos": [
   {
    "ru": "Вы пе́рвый раз е́дете в Росси́ю? Вот не́сколько сове́тов, кото́рые помо́гут вам.",
    "es": "¿Vas a Rusia por primera vez? Aquí tienes unos cuantos consejos que te ayudarán."
   },
   {
    "ru": "Во-пе́рвых, вы́учите не́сколько ру́сских слов. Скажи́те «здра́вствуйте», «спаси́бо» и «пожа́луйста» — и лю́ди бу́дут улыба́ться вам. Не все в Росси́и говоря́т по-англи́йски, осо́бенно в ма́леньких города́х.",
    "es": "Primero, aprende unas palabras en ruso. Di «здра́вствуйте», «спаси́бо» y «пожа́луйста», y la gente te sonreirá. No todo el mundo habla inglés, sobre todo en las ciudades pequeñas."
   },
   {
    "ru": "Во-вторы́х, не бо́йтесь метро́. Э́то са́мый бы́стрый и дешёвый тра́нспорт. Купи́те ка́рту и е́здите ско́лько хоти́те. Е́сли вы потеря́лись, спроси́те у люде́й: обы́чно ру́сские охо́тно помога́ют. А е́сли вы хоти́те сфотографи́ровать челове́ка, снача́ла спроси́те его́. А в рестора́не официа́нту обы́чно оставля́ют немно́го де́нег, е́сли всё понра́вилось.",
    "es": "Segundo, no le tengas miedo al metro: es el transporte más rápido y barato. Cómprate una tarjeta y viaja todo lo que quieras. Si te pierdes, pregunta: los rusos suelen ayudar con gusto. Y si quieres hacerle una foto a alguien, pídele permiso antes."
   },
   {
    "ru": "Е́сли вы е́дете зимо́й, возьми́те тёплую оде́жду: ша́пку, шарф и тёплые боти́нки. Не ду́майте, что вам не бу́дет хо́лодно! Сувени́ры не покупа́йте в са́мом це́нтре: там они́ доро́же. Лу́чше иди́те на ры́нок.",
    "es": "Si viajas en invierno, lleva ropa de abrigo: gorro, bufanda y botas calientes. ¡No pienses que no vas a pasar frío! Y no compres recuerdos en pleno centro, donde son más caros: mejor ve a un mercado."
   },
   {
    "ru": "Ещё оди́н сове́т: всегда́ носи́те с собо́й па́спорт. Он мо́жет быть ну́жен в гости́нице, на вокза́ле и́ли в ба́нке.",
    "es": "Otro consejo: lleva siempre el pasaporte encima. Puede que te lo pidan en el hotel, en la estación o en el banco. Y en los restaurantes se suele dejar algo de dinero al camarero si todo ha estado bien."
   },
   {
    "ru": "Е́сли вас пригласи́ли в го́сти, не приходи́те с пусты́ми рука́ми. Принеси́те торт, цветы́ и́ли шокола́д.",
    "es": "Si te invitan a una casa, no llegues con las manos vacías: lleva una tarta, flores o chocolate."
   },
   {
    "ru": "В гостя́х снима́йте о́бувь: в ру́сских дома́х так де́лают все. Хозя́йка, наве́рное, даст вам та́почки.",
    "es": "Al entrar, quítate los zapatos: en las casas rusas lo hace todo el mundo. Seguramente la anfitriona te dará unas zapatillas."
   },
   {
    "ru": "Не отка́зывайтесь от еды́. Ру́сские о́чень лю́бят госте́й, и стол всегда́ по́лный. Попро́буйте всё, но не еди́те сли́шком мно́го в нача́ле: по́сле сала́тов бу́дет ещё горя́чее, а пото́м чай с то́ртом.",
    "es": "No rechaces la comida. A los rusos les encantan las visitas, y la mesa siempre está llena. Prueba de todo, pero no comas demasiado al principio: después de las ensaladas viene el plato caliente, y luego el té con tarta."
   },
   {
    "ru": "И гла́вное: не ду́майте, что ру́сские серьёзные и холо́дные. На у́лице они́ ре́дко улыба́ются незнако́мым лю́дям, но до́ма, с друзья́ми, они́ о́чень тёплые и весёлые.",
    "es": "Y lo más importante: no pienses que los rusos son serios y fríos. En la calle rara vez sonríen a desconocidos, pero en casa, con sus amigos, son muy cálidos y divertidos."
   },
   {
    "ru": "Приезжа́йте — и вы са́ми уви́дите!",
    "es": "¡Ven, y lo verás con tus propios ojos!"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-sovety-1",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Каки́е слова́ сове́туют вы́учить?",
    "opciones": [
     "«Здра́вствуйте», «спаси́бо», «пожа́луйста».",
     "«Да» и «нет».",
     "Чи́сла."
    ],
    "correcta": "«Здра́вствуйте», «спаси́бо», «пожа́луйста».",
    "explicacion": "«Скажи́те «здра́вствуйте», «спаси́бо» и «пожа́луйста»»."
   },
   {
    "id": "LEC-sovety-2",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Где лу́чше покупа́ть сувени́ры?",
    "opciones": [
     "На ры́нке.",
     "В са́мом це́нтре.",
     "В аэропорту́."
    ],
    "correcta": "На ры́нке.",
    "explicacion": "«Сувени́ры не покупа́йте в са́мом це́нтре… Лу́чше иди́те на ры́нок»."
   },
   {
    "id": "LEC-sovety-3",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что ну́жно сде́лать в гостя́х?",
    "opciones": [
     "Снять о́бувь.",
     "Принести́ цветы́ из са́да.",
     "Принести́ вино́."
    ],
    "correcta": "Снять о́бувь.",
    "explicacion": "«В гостя́х снима́йте о́бувь». Y llevar algo: tarta, flores o chocolate."
   },
   {
    "id": "LEC-sovety-4",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "Ру́сские на у́лице ча́сто улыба́ются незнако́мым лю́дям.",
    "verdadero": false,
    "explicacion": "«На у́лице они́ ре́дко улыба́ются незнако́мым лю́дям»."
   },
   {
    "id": "LEC-sovety-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что всегда́ ну́жно носи́ть с собо́й?",
    "opciones": [
     "Па́спорт.",
     "Зонт.",
     "Шокола́д."
    ],
    "correcta": "Па́спорт.",
    "explicacion": "«Всегда́ носи́те с собо́й па́спорт»."
   },
   {
    "id": "LEC-sovety-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "situacion",
    "pide": "Dale a un amigo en ruso un consejo para viajar a tu país (con imperativo).",
    "sit": {
     "necesita": [
      {
       "es": "un imperativo (возьми́, купи́, иди́…)",
       "rx": "(и|й|ь|ите|йте|ьте)$"
      }
     ],
     "modelos": [
      "Возьми́ лёгкую оде́жду и попро́буй на́шу еду́!"
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-druzia",
  "tema": "Estudios",
  "tituloEs": "Amigos de distintos países",
  "nivel": "B1",
  "desde": 12,
  "titulo": "Друзья́ из ра́зных стран",
  "parrafos": [
   {
    "ru": "В гру́ппе О́льги Петро́вны у́чатся студе́нты из ра́зных стран. Их двена́дцать: из Испа́нии, Аргенти́ны, Кита́я, Брази́лии, Герма́нии и Фра́нции.",
    "es": "En el grupo de Olga Petrovna estudian alumnos de distintos países. Son doce: de España, Argentina, China, Brasil, Alemania y Francia."
   },
   {
    "ru": "Лу́кас дру́жит со все́ми, но бо́льше всего́ — с двумя́ студе́нтами: с А́нной из Испа́нии и с Ли из Кита́я. Они́ ча́сто занима́ются вме́сте и помога́ют друг дру́гу.",
    "es": "Lucas se lleva bien con todos, pero sobre todo con dos: Anna, de España, y Li, de China. Estudian juntos a menudo y se ayudan entre ellos."
   },
   {
    "ru": "А́нна прекра́сно зна́ет грамма́тику, а Ли пока́ пло́хо говори́т, но хорошо́ понима́ет. А Лу́кас говори́т бы́стро, но де́лает мно́го оши́бок. «Мы вме́сте — оди́н хоро́ший студе́нт», — шу́тит А́нна.",
    "es": "Anna domina la gramática; Li todavía habla con dificultad, pero entiende muy bien. Y Lucas habla rápido, pero comete muchos errores. «Juntos somos un buen estudiante», bromea Anna."
   },
   {
    "ru": "Ка́ждую пя́тницу студе́нты гото́вят блю́да свои́х стран и прино́сят их в общежи́тие. Ли гото́вит рис с овоща́ми. А́нна де́лает испа́нский торт, а Лу́кас гото́вит мя́со, как в Аргенти́не.",
    "es": "Cada viernes cocinan platos de sus países y los llevan a la residencia. Li hace arroz con verduras; Anna, una tarta española, y Lucas prepara carne como en Argentina."
   },
   {
    "ru": "Пото́м они́ расска́зывают о свои́х города́х и о свои́х се́мьях. Лу́кас пока́зывает фотогра́фии свои́х роди́телей и сестёр. У Ли два бра́та, а у А́нны нет ни бра́тьев, ни сестёр.",
    "es": "Después hablan de sus ciudades y de sus familias. Lucas enseña fotos de sus padres y de sus hermanas. Li tiene dos hermanos, y Anna no tiene ni hermanos ni hermanas."
   },
   {
    "ru": "По выходны́м они́ иногда́ е́здят вме́сте за́ город и́ли хо́дят в музе́и. В про́шлое воскресе́нье они́ бы́ли в Третьяко́вской галере́е и смотре́ли карти́ны ру́сских худо́жников.",
    "es": "Los fines de semana a veces se van juntos al campo o a un museo. El domingo pasado estuvieron en la Galería Tretiakov viendo cuadros de pintores rusos."
   },
   {
    "ru": "Иногда́ они́ спо́рят. Наприме́р, о футбо́ле: А́нна счита́ет, что лу́чшие игроки́ в Испа́нии, а Лу́кас — что в Аргенти́не. Ли смеётся и говори́т, что в Кита́е лу́чше игра́ют в те́ннис.",
    "es": "A veces discuten. Por ejemplo, de fútbol: Anna opina que los mejores jugadores son españoles, y Lucas, que argentinos. Li se ríe y dice que en China se juega mejor al tenis."
   },
   {
    "ru": "Но у них есть одно́ о́бщее: все они́ лю́бят Росси́ю и ру́сский язы́к. Когда́ они́ не зна́ют сло́ва, они́ не говоря́т на своём языке́ и не перехо́дят на англи́йский. Они́ объясня́ют по-ру́сски — друг дру́гу и себе́.",
    "es": "Pero tienen algo en común: a todos les encanta Rusia y el idioma ruso. Cuando no saben una palabra, no la dicen en su lengua ni se pasan al inglés: se la explican en ruso, unos a otros y a sí mismos."
   },
   {
    "ru": "О́льга Петро́вна дово́льна свое́й гру́ппой. Она́ говори́т: «Мои́ студе́нты у́чат не то́лько язы́к. Они́ у́чат друг дру́га понима́ть ра́зные культу́ры».",
    "es": "Olga Petrovna está contenta con su grupo. Dice: «Mis alumnos no solo aprenden un idioma. Aprenden a entender otras culturas»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-druzia-1",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Ско́лько студе́нтов в гру́ппе?",
    "opciones": [
     "Двена́дцать.",
     "Три.",
     "Шесть."
    ],
    "correcta": "Двена́дцать.",
    "explicacion": "«Их двена́дцать». De seis países distintos."
   },
   {
    "id": "LEC-druzia-2",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "С кем Лу́кас дру́жит бо́льше всего́?",
    "opciones": [
     "С А́нной и с Ли.",
     "С О́льгой Петро́вной.",
     "С Ма́шей."
    ],
    "correcta": "С А́нной и с Ли.",
    "explicacion": "«Бо́льше всего́ — с двумя́ студе́нтами: с А́нной… и с Ли…»."
   },
   {
    "id": "LEC-druzia-3",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что гото́вит Ли?",
    "opciones": [
     "Рис с овоща́ми.",
     "Торт.",
     "Мя́со."
    ],
    "correcta": "Рис с овоща́ми.",
    "explicacion": "«Ли гото́вит рис с овоща́ми». La tarta es de Anna y la carne, de Lucas."
   },
   {
    "id": "LEC-druzia-4",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "У А́нны есть два бра́та.",
    "verdadero": false,
    "explicacion": "«У Ли два бра́та, а у А́нны нет ни бра́тьев, ни сестёр»."
   },
   {
    "id": "LEC-druzia-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "На како́м языке́ студе́нты объясня́ют слова́?",
    "opciones": [
     "По-ру́сски.",
     "По-англи́йски.",
     "На своём языке́."
    ],
    "correcta": "По-ру́сски.",
    "explicacion": "«Они́ объясня́ют по-ру́сски — друг дру́гу и себе́»."
   },
   {
    "id": "LEC-druzia-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "situacion",
    "pide": "Cuenta en ruso algo de un amigo tuyo y de su familia (usa свой o его́ / её).",
    "sit": {
     "necesita": [
      {
       "es": "свой, его́ o её",
       "formas": [
        "свой",
        "своя́",
        "своё",
        "свои́",
        "свою́",
        "его́",
        "её"
       ]
      }
     ],
     "modelos": [
      "Мой друг лю́бит свою́ семью́. Его́ сестра́ живёт в Мадри́де."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-transsib",
  "nivel": "B1",
  "desde": 13,
  "tema": "Viajes",
  "titulo": "Транссиби́рская магистра́ль",
  "tituloEs": "El Transiberiano",
  "parrafos": [
   {
    "ru": "Мечта́ мно́гих тури́стов — Транссиби́рская магистра́ль. Э́то са́мая дли́нная доро́га для поездо́в в ми́ре: от Москвы́ до Владивосто́ка — семь дней в по́езде. По́езд проезжа́ет ра́зные города́, леса́ и ре́ки, и за э́ту неде́лю вре́мя меня́ется семь раз.",
    "es": "El sueño de muchos turistas es el Transiberiano, la vía férrea más larga del mundo: de Moscú a Vladivostok hay siete días de tren. El tren cruza ciudades, bosques y ríos, y en esa semana la hora cambia siete veces."
   },
   {
    "ru": "Ле́том Лу́кас наконе́ц реши́л пое́хать. Он купи́л биле́т и взял с собо́й кни́ги, чай и шокола́д. «Я ду́мал, что бу́ду скуча́ть, — написа́л он дру́гу, — но мне бы́ло о́чень интере́сно».",
    "es": "Este verano, Lucas por fin se decidió. Compró el billete y se llevó libros, té y chocolate. «Creía que me iba a aburrir —le escribió a un amigo—, pero fue fascinante»."
   },
   {
    "ru": "Жизнь в по́езде о́чень проста́я. В ваго́не есть горя́чая вода́, поэ́тому все пьют чай ка́ждый час. На ста́нциях по́езд стои́т не́сколько мину́т, и пассажи́ры выхо́дят купи́ть пироги́, фру́кты и́ли ры́бу у ме́стных ба́бушек.",
    "es": "La vida en el tren es muy sencilla. En el vagón hay agua caliente, así que todos toman té cada hora. En las estaciones el tren para unos minutos, y los pasajeros bajan a comprar pirogí, fruta o pescado a las abuelas del lugar."
   },
   {
    "ru": "В ваго́не он познако́мился с ра́зными людьми́: с ба́бушкой и де́душкой из Ирку́тска, со студе́нтом из Новосиби́рска и с семьёй, кото́рая е́хала в го́сти. Все вме́сте пи́ли чай, е́ли и расска́зывали исто́рии. Лу́кас по́нял, что в по́езде лю́ди открыва́ются: незнако́мые расска́зывают о свое́й жи́зни, как ста́рым друзья́м.",
    "es": "En el vagón conoció a gente de todo tipo: un matrimonio mayor de Irkutsk, un estudiante de Novosibirsk y una familia que iba de visita. Juntos tomaban té, comían y contaban historias. Lucas se dio cuenta de que en el tren la gente se abre: desconocidos te cuentan su vida como a viejos amigos."
   },
   {
    "ru": "За окно́м бы́ли поля́, ма́ленькие дере́вни и леса́, леса́, леса́. Са́мым си́льным впечатле́нием ста́ло о́зеро Байка́л. По́езд е́хал ря́дом с о́зером не́сколько часо́в, а Лу́кас смотре́л в окно́ и ничего́ не говори́л. Пото́м он на́чал писа́ть дневни́к, что́бы ничего́ не забы́ть.",
    "es": "Por la ventanilla pasaban campos, aldeas pequeñas y bosques, bosques y más bosques. Lo que más le impresionó fue el lago Baikal: el tren lo bordeó durante varias horas, y Lucas lo miraba sin decir nada. Después empezó a escribir un diario para no olvidar nada."
   },
   {
    "ru": "Коне́чно, бы́ли и ми́нусы. В ваго́не бы́ло жа́рко, а душа́ не́ было. Но, по-мо́ему, э́то ме́лочи, е́сли сравни́ть их с тем, что ты ви́дишь и чу́вствуешь.",
    "es": "Claro que también hubo pegas: en el vagón hacía calor y no había ducha. Pero, en mi opinión, son detalles si los comparas con lo que ves y lo que sientes."
   },
   {
    "ru": "«Е́сли мо́жете, обяза́тельно поезжа́йте, — сове́тует он. — То́лько возьми́те с собо́й хоро́шую кни́гу и хоро́шее настрое́ние. А ещё не спеши́те: лу́чше сде́лать не́сколько остано́вок и посмотре́ть города́».",
    "es": "«Si pueden, vayan sin falta —aconseja—. Eso sí, llévense un buen libro y buen humor. Y no tengan prisa: es mejor hacer varias paradas y conocer las ciudades»."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-transsib-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Ско́лько дней е́дет по́езд от Москвы́ до Владивосто́ка?",
    "opciones": [
     "Семь.",
     "Три.",
     "Два́дцать."
    ],
    "correcta": "Семь.",
    "explicacion": "«От Москвы́ до Владивосто́ка — семь дней в по́езде»."
   },
   {
    "id": "LEC-transsib-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Лу́кас скуча́л в по́езде.",
    "verdadero": false,
    "explicacion": "Pensaba que se iba a aburrir, pero «мне бы́ло о́чень интере́сно»."
   },
   {
    "id": "LEC-transsib-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Что ста́ло са́мым си́льным впечатле́нием?",
    "opciones": [
     "О́зеро Байка́л.",
     "Москва́.",
     "Ма́ленькие дере́вни."
    ],
    "correcta": "О́зеро Байка́л.",
    "explicacion": "«Са́мым си́льным впечатле́нием ста́ло о́зеро Байка́л»."
   },
   {
    "id": "LEC-transsib-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿adónde quieres viajar y por qué? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "adónde quieres ir (хочу́ пое́хать…)",
       "formas": [
        "хочу́"
       ]
      },
      {
       "es": "por qué (потому́ что…)",
       "formas": [
        "потому́ что"
       ]
      }
     ],
     "modelos": [
      "Я хочу́ пое́хать в Москву́, потому́ что там краси́вое метро́."
     ]
    }
   },
   {
    "id": "LEC-transsib-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Почему́ в по́езде все пьют чай?",
    "opciones": [
     "В ваго́не есть горя́чая вода́.",
     "Э́то беспла́тно.",
     "Нет друго́й еды́."
    ],
    "correcta": "В ваго́не есть горя́чая вода́.",
    "explicacion": "«В ваго́не есть горя́чая вода́, поэ́тому все пьют чай ка́ждый час»."
   },
   {
    "id": "LEC-transsib-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что Лу́кас по́нял в по́езде?",
    "opciones": [
     "Лю́ди там открыва́ются.",
     "Лю́ди там молча́т.",
     "Там о́чень ску́чно."
    ],
    "correcta": "Лю́ди там открыва́ются.",
    "explicacion": "«Лу́кас по́нял, что в по́езде лю́ди открыва́ются»."
   },
   {
    "id": "LEC-transsib-7",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "В ваго́не был душ.",
    "verdadero": false,
    "explicacion": "«В ваго́не бы́ло жа́рко, а ду́ша не́ было»."
   },
   {
    "id": "LEC-transsib-8",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что сове́тует Лу́кас?",
    "opciones": [
     "Не спеши́ть и де́лать остано́вки.",
     "Е́хать без остано́вок.",
     "Лете́ть на самолёте."
    ],
    "correcta": "Не спеши́ть и де́лать остано́вки.",
    "explicacion": "«Не спеши́те: лу́чше сде́лать не́сколько остано́вок и посмотре́ть города́»."
   }
  ]
 },
 {
  "id": "LEC-zima",
  "nivel": "B1",
  "desde": 13,
  "tema": "La vida en Rusia",
  "titulo": "Зима́ в Росси́и",
  "tituloEs": "El invierno en Rusia",
  "parrafos": [
   {
    "ru": "Тури́сты ча́сто ду́мают, что ру́сская зима́ — э́то снег, коро́ткий день и о́чень хо́лодно. И э́то пра́вда: в Москве́ мо́жет быть ми́нус два́дцать, а в Сиби́ри — ми́нус со́рок. В декабре́ светло́ то́лько семь часо́в.",
    "es": "Los turistas suelen pensar que el invierno ruso es nieve, días cortos y muchísimo frío. Y es verdad: en Moscú se puede llegar a veinte bajo cero, y en Siberia, a cuarenta. En diciembre solo hay luz siete horas."
   },
   {
    "ru": "Но са́ми ру́сские зи́му лю́бят. Во-пе́рвых, э́то вре́мя пра́здников. Но́вый год — лу́чший пра́здник в году́: лю́ди покупа́ют пода́рки, гото́вят сала́т «оливье́» и в по́лночь слу́шают часы́ на Кремле́. Рождество́ пра́зднуют в январе́.",
    "es": "Pero los propios rusos adoran el invierno. Primero, porque es época de fiestas. El Año Nuevo es la mejor del año: la gente compra regalos, prepara ensalada olivier y a medianoche escucha las campanadas del Kremlin. La Navidad se celebra en enero."
   },
   {
    "ru": "Во-вторы́х, зимо́й в па́рке мо́жно гуля́ть, а де́ти игра́ют в снегу́ весь день. Мно́гие лю́бят зи́мний спорт. В па́рках есть места́, где мо́жно ката́ться на льду. Ве́чером там игра́ет му́зыка, гори́т свет, и лю́ди ката́ются до по́здней но́чи. По́сле э́того все иду́т в кафе́ пить горя́чий чай.",
    "es": "Segundo, en invierno se puede pasear por el parque, y los niños juegan en la nieve todo el día. A muchos les encantan los deportes de invierno: en los parques hay pistas para patinar sobre hielo. Por la noche suena música, hay luces y la gente patina hasta muy tarde. Después, todos van a un café a tomar té bien caliente."
   },
   {
    "ru": "И ещё: зима́ — э́то краси́во. Когда́ вы́пал све́жий снег, го́род стано́вится бе́лым и ти́хим. Дере́вья стоя́т в снегу́, а со́лнце на снегу́ блести́т так, что ну́жно носи́ть очки́.",
    "es": "Y además, el invierno es precioso. Cuando cae nieve fresca, la ciudad se queda blanca y silenciosa. Los árboles se cubren de nieve, y el sol brilla tanto sobre ella que hay que llevar gafas."
   },
   {
    "ru": "Ру́сские говоря́т: «Нет плохо́й пого́ды, есть плоха́я оде́жда». Ва́жно тепло́ одева́ться: ша́пка, шарф и тёплые сапоги́. Мно́гие иностра́нцы снача́ла одева́ются сли́шком легко́, а пото́м покупа́ют ру́сскую ша́пку.",
    "es": "Los rusos dicen: «No hay mal tiempo, sino ropa inadecuada». Lo importante es abrigarse: gorro, bufanda y botas calientes. Muchos extranjeros al principio van demasiado ligeros y acaban comprándose un gorro ruso."
   },
   {
    "ru": "Коне́чно, у зимы́ есть и ми́нусы. На у́лицах лёд, маши́ны е́здят ме́дленно, лю́ди ча́сто па́дают, и ча́сто хо́чется спать. В конце́ зимы́ все уже́ ждут весну́ и со́лнце.",
    "es": "Claro que el invierno también tiene sus pegas. En las calles hay hielo, los coches van despacio, la gente se cae a menudo y uno tiene sueño constantemente. A finales del invierno todos esperan ya la primavera y el sol."
   },
   {
    "ru": "По-мо́ему, зима́ в Росси́и — э́то не то́лько моро́з. Э́то ещё и тёплый дом, горя́чий чай, дли́нные ве́чера и хоро́шие друзья́ ря́дом. Е́сли вы прие́дете зимо́й, вы са́ми э́то почу́вствуете.",
    "es": "En mi opinión, el invierno en Rusia no es solo frío. Es también una casa calentita, té caliente, tardes largas y buenos amigos cerca. Si vienen en invierno, lo sentirán ustedes mismos."
   }
  ],
  "preguntas": [
   {
    "id": "LEC-zima-1",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Како́й пра́здник лу́чший в году́?",
    "opciones": [
     "Но́вый год.",
     "Рождество́.",
     "День рожде́ния."
    ],
    "correcta": "Но́вый год.",
    "explicacion": "«Но́вый год — лу́чший пра́здник в году́»."
   },
   {
    "id": "LEC-zima-2",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "elegir",
    "pide": "Когда́ пра́зднуют Рождество́?",
    "opciones": [
     "В январе́.",
     "В декабре́.",
     "В феврале́."
    ],
    "correcta": "В январе́.",
    "explicacion": "«Рождество́ пра́зднуют в январе́»."
   },
   {
    "id": "LEC-zima-3",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "vf",
    "afirmacion": "Ру́сские говоря́т, что пого́да всегда́ плоха́я.",
    "verdadero": false,
    "explicacion": "El refrán dice lo contrario: «Нет плохо́й пого́ды, есть плоха́я оде́жда»."
   },
   {
    "id": "LEC-zima-4",
    "tipo": "lectura",
    "dificultad": 2,
    "forma": "situacion",
    "pide": "Y tú, ¿te gusta el invierno? ¿Por qué? Contéstalo en ruso.",
    "sit": {
     "necesita": [
      {
       "es": "si te gusta o no (люблю́…, нра́вится…)",
       "formas": [
        "люблю́",
        "нра́вится"
       ]
      },
      {
       "es": "por qué (потому́ что…)",
       "formas": [
        "потому́ что"
       ]
      }
     ],
     "modelos": [
      "Да, я люблю́ зи́му, потому́ что люблю́ снег."
     ]
    }
   },
   {
    "id": "LEC-zima-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что де́лают лю́ди ве́чером в па́рках зимо́й?",
    "opciones": [
     "Ката́ются на льду.",
     "Пла́вают.",
     "Собира́ют грибы́."
    ],
    "correcta": "Ката́ются на льду.",
    "explicacion": "«В па́рках есть места́, где мо́жно ката́ться на льду»."
   },
   {
    "id": "LEC-zima-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что ча́сто покупа́ют иностра́нцы?",
    "opciones": [
     "Ру́сскую ша́пку.",
     "Сапоги́.",
     "Шарф."
    ],
    "correcta": "Ру́сскую ша́пку.",
    "explicacion": "«Пото́м покупа́ют ру́сскую ша́пку»."
   },
   {
    "id": "LEC-zima-7",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Како́й ми́нус у зимы́?",
    "opciones": [
     "На у́лицах лёд.",
     "Нет пра́здников.",
     "Сли́шком жа́рко."
    ],
    "correcta": "На у́лицах лёд.",
    "explicacion": "«На у́лицах лёд, маши́ны е́здят ме́дленно, лю́ди ча́сто па́дают»."
   },
   {
    "id": "LEC-zima-8",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "В конце́ зимы́ все ждут весну́.",
    "verdadero": true,
    "explicacion": "«В конце́ зимы́ все уже́ ждут весну́ и со́лнце»."
   }
  ]
 },
 {
  "id": "LEC-onlain",
  "tema": "Estudios",
  "tituloEs": "¿Cómo aprender un idioma?",
  "nivel": "B1",
  "desde": 13,
  "titulo": "Как учи́ть язы́к?",
  "parrafos": [
   {
    "ru": "Сего́дня учи́ть иностра́нный язы́к мо́жно по-ра́зному. Мо́жно ходи́ть на ку́рсы, занима́ться с преподава́телем и́ли учи́ть язы́к самому́, в интерне́те. Како́й спо́соб лу́чше? Мне́ния ра́зные.",
    "es": "Hoy se puede aprender un idioma de muchas maneras: ir a una academia, dar clases con un profesor o estudiar por tu cuenta en internet. ¿Cuál es la mejor? Hay opiniones para todos los gustos."
   },
   {
    "ru": "Ма́ша счита́ет, что лу́чше всего́ занима́ться в гру́ппе. «Во-пе́рвых, в гру́ппе ты говори́шь с людьми́, а язы́к — э́то обще́ние. Во-вторы́х, преподава́тель исправля́ет оши́бки. И ещё: когда́ есть расписа́ние, ты не пропуска́ешь заня́тия», — говори́т она́.",
    "es": "Masha cree que lo mejor es estudiar en grupo. «Primero, en grupo hablas con gente, y un idioma es comunicación. Segundo, el profesor te corrige los errores. Y además, si tienes un horario, no te saltas las clases», dice."
   },
   {
    "ru": "Ди́ма не согла́сен. Он у́чит англи́йский в интерне́те и о́чень дово́лен. «Ку́рсы сто́ят до́рого, а в интерне́те мно́го беспла́тных уро́ков. Я занима́юсь, когда́ хочу́: в метро́, в обе́д и́ли по́здно ве́чером. Ещё я смотрю́ фи́льмы и слу́шаю пе́сни. На телефо́не у меня́ есть приложе́ние: ка́ждый день оно́ даёт мне де́сять но́вых слов. Так я учу́ живо́й язы́к, а не то́лько грамма́тику».",
    "es": "Dima no está de acuerdo. Aprende inglés por internet y está encantado. «Las academias son caras, y en internet hay muchas clases gratis. Estudio cuando quiero: en el metro, a la hora de comer o tarde por la noche. También veo películas y escucho canciones. Tengo una aplicación en el teléfono que cada día me da diez palabras nuevas. Así aprendo el idioma vivo, no solo la gramática»."
   },
   {
    "ru": "Но Ма́ша ду́мает, что у э́того спо́соба есть ми́нусы. Е́сли никто́ не проверя́ет, легко́ бро́сить. И кто испра́вит твои́ оши́бки, е́сли ты говори́шь то́лько с телефо́ном?",
    "es": "Pero Masha piensa que su método tiene inconvenientes. Si nadie te controla, es fácil abandonar. ¿Y quién te corrige los errores si solo hablas con el teléfono?"
   },
   {
    "ru": "Лу́кас ду́мает, что у ка́ждого из них своя́ пра́вда. Он хо́дит на ку́рсы к О́льге Петро́вне, но ещё мно́го занима́ется сам. Ка́ждый день он чита́ет ру́сские те́ксты, а ве́чером разгова́ривает с Ма́шей и Ди́мой. «По-мо́ему, гла́вное — не спо́соб, а привы́чка. Е́сли занима́ться немно́го, но ка́ждый день, результа́т обяза́тельно бу́дет», — говори́т он.",
    "es": "Lucas cree que los dos tienen parte de razón. Va a clase con Olga Petrovna, pero también estudia mucho por su cuenta: cada día lee textos en ruso y por la noche charla con Masha y Dima. «Para mí, lo principal no es el método, sino la constancia. Si estudias un poco, pero todos los días, los resultados llegan seguro», dice."
   },
   {
    "ru": "А ещё Лу́кас уве́рен, что язы́к лу́чше всего́ учи́ть в стране́, где на нём говоря́т. «Здесь я слы́шу ру́сский везде́: в магази́не, в метро́, на у́лице. Хочу́ я и́ли нет, я учу́сь ка́ждую мину́ту».",
    "es": "Además, Lucas está convencido de que un idioma se aprende mejor en el país donde se habla. «Aquí oigo ruso en todas partes: en la tienda, en el metro, en la calle. Quiera o no, estoy aprendiendo a cada minuto»."
   },
   {
    "ru": "А как вы у́чите ру́сский? Что вам помога́ет бо́льше всего́?",
    "es": "¿Y tú cómo aprendes ruso? ¿Qué es lo que más te ayuda?"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-onlain-1",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Как Ма́ша лю́бит учи́ть язы́к?",
    "opciones": [
     "В гру́ппе.",
     "В интерне́те.",
     "Одна́."
    ],
    "correcta": "В гру́ппе.",
    "explicacion": "«Ма́ша счита́ет, что лу́чше всего́ занима́ться в гру́ппе»."
   },
   {
    "id": "LEC-onlain-2",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Почему́ Ди́ма у́чит язы́к в интерне́те?",
    "opciones": [
     "Ку́рсы сто́ят до́рого.",
     "У него́ нет вре́мени.",
     "Он не лю́бит преподава́телей."
    ],
    "correcta": "Ку́рсы сто́ят до́рого.",
    "explicacion": "«Ку́рсы сто́ят до́рого, а в интерне́те мно́го беспла́тных уро́ков»."
   },
   {
    "id": "LEC-onlain-3",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Како́й ми́нус у интерне́та, по мне́нию Ма́ши?",
    "opciones": [
     "Легко́ бро́сить.",
     "Э́то до́рого.",
     "Там нет фи́льмов."
    ],
    "correcta": "Легко́ бро́сить.",
    "explicacion": "«Е́сли никто́ не проверя́ет, легко́ бро́сить»."
   },
   {
    "id": "LEC-onlain-4",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что гла́вное для Лу́каса?",
    "opciones": [
     "Привы́чка.",
     "Спо́соб.",
     "Преподава́тель."
    ],
    "correcta": "Привы́чка.",
    "explicacion": "«Гла́вное — не спо́соб, а привы́чка»."
   },
   {
    "id": "LEC-onlain-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "Лу́кас ду́мает, что язы́к лу́чше учи́ть в стране́, где на нём говоря́т.",
    "verdadero": true,
    "explicacion": "«Язы́к лу́чше всего́ учи́ть в стране́, где на нём говоря́т»."
   },
   {
    "id": "LEC-onlain-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "situacion",
    "pide": "¿Y tú cómo aprendes ruso? Da tu opinión en ruso y justifícala.",
    "sit": {
     "necesita": [
      {
       "es": "tu opinión (по-мо́ему, я ду́маю, что…)",
       "formas": [
        "по-мо́ему",
        "я ду́маю",
        "я счита́ю",
        "мне ка́жется"
       ]
      },
      {
       "es": "por qué (потому́ что…)",
       "formas": [
        "потому́ что",
        "поэ́тому"
       ]
      }
     ],
     "modelos": [
      "По-мо́ему, лу́чше учи́ть язы́к ка́ждый день, потому́ что так ле́гче запо́мнить слова́."
     ]
    }
   }
  ]
 },
 {
  "id": "LEC-gorod",
  "tema": "Opiniones",
  "tituloEs": "¿Ciudad o campo?",
  "nivel": "B1",
  "desde": 13,
  "titulo": "Го́род и́ли дере́вня?",
  "parrafos": [
   {
    "ru": "Мно́гие лю́ди мечта́ют уе́хать из большо́го го́рода в дере́вню. Други́е, наоборо́т, не мо́гут жить без го́рода. Где жить лу́чше? Об э́том мы спроси́ли на́ших геро́ев.",
    "es": "Mucha gente sueña con dejar la gran ciudad e irse al campo. Otros, al contrario, no pueden vivir sin ella. ¿Dónde se vive mejor? Se lo hemos preguntado a nuestros personajes."
   },
   {
    "ru": "Ба́бушка Ма́ши всю жизнь прожила́ в Москве́, но тепе́рь почти́ всё ле́то прово́дит на да́че. «В дере́вне во́здух чи́стый, ти́хо, и никто́ никуда́ не спеши́т. У меня́ есть огоро́д, и там растёт всё, что мы еди́м ле́том: помидо́ры, огурцы́, карто́шка. В го́роде я так не могу́», — говори́т она́.",
    "es": "La abuela de Masha ha vivido toda su vida en Moscú, pero ahora pasa casi todo el verano en la dacha. «En el campo el aire es limpio, hay calma y nadie tiene prisa. Tengo un huerto donde crece todo lo que comemos en verano: tomates, pepinos, patatas. En la ciudad no podría», dice."
   },
   {
    "ru": "Но Ди́ма ду́мает по-друго́му. «В дере́вне хорошо́ отдыха́ть, но жить там я бы не смог. Там нет рабо́ты, нет хоро́шего интерне́та, и до ближа́йшего магази́на ну́жно е́хать на маши́не. А в го́роде всё ря́дом: рабо́та, друзья́, кино́, рестора́ны».",
    "es": "Pero Dima lo ve de otra manera. «En el campo se descansa bien, pero yo no podría vivir allí. No hay trabajo ni buen internet, y para ir a la tienda más cercana necesitas el coche. En la ciudad lo tienes todo a mano: trabajo, amigos, cine, restaurantes»."
   },
   {
    "ru": "Ма́ша согла́сна с бра́том, но не во всём. «Коне́чно, в го́роде бо́льше возмо́жностей. Но здесь мно́го шу́ма, мно́го маши́н, и лю́ди всегда́ уста́лые. Иногда́ мне ка́жется, что мы живём то́лько для рабо́ты».",
    "es": "Masha está de acuerdo con su hermano, pero no del todo. «Claro que en la ciudad hay más oportunidades. Pero también mucho ruido, muchos coches y gente siempre cansada. A veces me parece que vivimos solo para trabajar»."
   },
   {
    "ru": "Лу́кас вы́рос в большо́м го́роде, в Буэ́нос-А́йресе. «Я городско́й челове́к, — смеётся он. — Но когда́ я был на Байка́ле, я по́нял, как важна́ приро́да. Тепе́рь я стара́юсь хотя́ бы раз в ме́сяц уезжа́ть за́ город. Там я отдыха́ю лу́чше, чем в любо́м рестора́не и́ли клу́бе».",
    "es": "Lucas creció en una gran ciudad, Buenos Aires. «Soy de ciudad —se ríe—. Pero cuando estuve en el Baikal entendí lo importante que es la naturaleza. Ahora intento salir al campo al menos una vez al mes. Allí descanso mejor que en cualquier restaurante o club»."
   },
   {
    "ru": "Получа́ется, что у ка́ждого ме́ста есть своё хоро́шее и своё плохо́е. Мо́жет быть, лу́чший вариа́нт — э́то жить в го́роде и ча́сто е́здить в дере́вню? Так де́лают мно́гие ру́сские: всю неде́лю они́ рабо́тают в го́роде, а на выходны́е уезжа́ют на да́чу.",
    "es": "Al final resulta que cada lugar tiene lo bueno y lo malo. ¿Quizá lo ideal sea vivir en la ciudad e ir a menudo al campo? Es lo que hacen muchos rusos: trabajan en la ciudad toda la semana y el fin de semana se van a la dacha."
   },
   {
    "ru": "А вы где хоти́те жить? Почему́?",
    "es": "¿Y tú dónde quieres vivir? ¿Por qué?"
   }
  ],
  "preguntas": [
   {
    "id": "LEC-gorod-1",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Где ба́бушка Ма́ши прово́дит ле́то?",
    "opciones": [
     "На да́че.",
     "В Москве́.",
     "На мо́ре."
    ],
    "correcta": "На да́че.",
    "explicacion": "«Тепе́рь почти́ всё ле́то прово́дит на да́че»."
   },
   {
    "id": "LEC-gorod-2",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Почему́ Ди́ма не хо́чет жить в дере́вне?",
    "opciones": [
     "Там нет рабо́ты и хоро́шего интерне́та.",
     "Там хо́лодно.",
     "Там нет приро́ды."
    ],
    "correcta": "Там нет рабо́ты и хоро́шего интерне́та.",
    "explicacion": "«Там нет рабо́ты, нет хоро́шего интерне́та»."
   },
   {
    "id": "LEC-gorod-3",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что Ма́ше не нра́вится в го́роде?",
    "opciones": [
     "Шум, маши́ны и уста́лые лю́ди.",
     "Рестора́ны.",
     "Рабо́та."
    ],
    "correcta": "Шум, маши́ны и уста́лые лю́ди.",
    "explicacion": "«Здесь мно́го шу́ма, мно́го маши́н, и лю́ди всегда́ уста́лые»."
   },
   {
    "id": "LEC-gorod-4",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "vf",
    "afirmacion": "Лу́кас вы́рос в дере́вне.",
    "verdadero": false,
    "explicacion": "«Лу́кас вы́рос в большо́м го́роде, в Буэ́нос-А́йресе»."
   },
   {
    "id": "LEC-gorod-5",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "elegir",
    "pide": "Что де́лают мно́гие ру́сские на выходны́х?",
    "opciones": [
     "Уезжа́ют на да́чу.",
     "Рабо́тают.",
     "Хо́дят в клуб."
    ],
    "correcta": "Уезжа́ют на да́чу.",
    "explicacion": "«А на выходны́е уезжа́ют на да́чу»."
   },
   {
    "id": "LEC-gorod-6",
    "tipo": "lectura",
    "dificultad": 3,
    "forma": "situacion",
    "pide": "¿Dónde prefieres vivir, en la ciudad o en el campo? Contéstalo en ruso con dos razones.",
    "sit": {
     "necesita": [
      {
       "es": "dónde (в го́роде / в дере́вне)",
       "formas": [
        "в го́роде",
        "в дере́вне"
       ]
      },
      {
       "es": "por qué (потому́ что, во-пе́рвых…)",
       "formas": [
        "потому́ что",
        "во-пе́рвых",
        "поэ́тому"
       ]
      }
     ],
     "modelos": [
      "Я хочу́ жить в го́роде, потому́ что там моя́ рабо́та и мои́ друзья́."
     ]
    }
   }
  ]
 }
];
function lecturaById(id) { return LECTURAS.find(l => l.id === id) || null; }
window.LECTURAS = LECTURAS;
window.lecturaById = lecturaById;
