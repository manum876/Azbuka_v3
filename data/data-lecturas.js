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
  "titulo": "Профи́ль Ма́ши",
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
      "Меня́ зову́т Ана. Я из Испа́нии."
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
     "Шу́мный",
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
  "id": "LEC-rynok",
  "nivel": "A1",
  "desde": 7,
  "tema": "La vida diaria",
  "titulo": "Суббо́та на ры́нке",
  "tituloEs": "Sábado en el mercado",
  "parrafos": [
   {
    "ru": "В суббо́ту у́тром Ма́ша и Ди́ма иду́т на ры́нок. Он бли́зко.",
    "es": "El sábado por la mañana, Masha y Dima van al mercado. Les queda cerca."
   },
   {
    "ru": "На ры́нке ве́село и интере́сно. Тут о́вощи, мя́со, ры́ба, сыр и хлеб. Ма́ша покупа́ет я́блоки и молоко́. А Ди́ма берёт сыр: он его́ о́чень лю́бит.",
    "es": "En el mercado hay buen ambiente y mucho para ver: verdura, carne, pescado, queso y pan. Masha compra manzanas y leche. Dima, en cambio, se lleva queso, que le encanta."
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
   }
  ]
 },
 {
  "id": "LEC-barcelona",
  "nivel": "A1",
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
    "ru": "Метро́ в Москве́ — э́то тра́нспорт и ещё музе́й. Оно́ рабо́тает почти́ сто лет. Ста́нции там как дворцы́: краси́вые ла́мпы и карти́ны на стена́х.",
    "es": "El metro de Moscú es transporte y, a la vez, un museo. Funciona desde hace casi cien años. Sus estaciones parecen palacios: lámparas preciosas y cuadros en las paredes."
   },
   {
    "ru": "Ка́ждый день под землёй е́здит о́чень мно́го люде́й. Поезда́ хо́дят ча́сто, ка́ждые две мину́ты.",
    "es": "A diario viaja bajo tierra muchísima gente. Los trenes pasan seguido, cada dos minutos."
   },
   {
    "ru": "Вчера́ Лу́кас впервы́е е́хал оди́н. Снача́ла он не понима́л, куда́ е́хать: всё бы́ло по-ру́сски. Пото́м он спроси́л у же́нщины, как дое́хать до Кра́сной пло́щади. Она́ объясни́ла: «Вам ну́жно вы́йти на ста́нции „Охо́тный ряд“». Лу́кас дое́хал за пятна́дцать мину́т.",
    "es": "Ayer, Lucas viajó solo por primera vez. Al principio no sabía hacia dónde ir: todo estaba en ruso. Entonces le preguntó a una señora cómo llegar a la Plaza Roja, y ella le explicó: «Tiene que bajarse en la estación Ojotni Riad». Llegó en quince minutos."
   },
   {
    "ru": "За́втра он пое́дет на ста́нцию «Маяко́вская». Говоря́т, она́ о́чень интере́сная.",
    "es": "Mañana irá a la estación Mayakóvskaya. Dicen que vale la pena."
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
   }
  ]
 },
 {
  "id": "LEC-dacha",
  "nivel": "A2",
  "desde": 12,
  "tema": "La vida en Rusia",
  "titulo": "На да́че",
  "tituloEs": "En la dacha",
  "parrafos": [
   {
    "ru": "У семьи́ Ма́ши есть да́ча — ма́ленький дом в дере́вне, ря́дом с реко́й. Ле́том они́ отдыха́ют там почти́ ка́ждую неде́лю.",
    "es": "La familia de Masha tiene una dacha: una casita en el campo, junto a un río. En verano pasan allí casi todas las semanas."
   },
   {
    "ru": "Там есть сад и огоро́д. Ба́бушка лю́бит рабо́тать в огоро́де. Де́душка ча́сто гуля́ет в лесу́, и Ди́ма хо́дит с ним.",
    "es": "Tiene jardín y huerto. A la abuela le encanta trabajar en el huerto. El abuelo suele pasear por el bosque, y Dima lo acompaña."
   },
   {
    "ru": "В про́шлую суббо́ту бы́ло о́чень жа́рко. Ма́ша и Ди́ма купа́лись в реке́, а ве́чером все пи́ли чай в саду́. Бы́ло ти́хо, и никто́ не хоте́л возвраща́ться в го́род.",
    "es": "El sábado pasado hizo mucho calor. Los chicos se bañaron en el río y, al atardecer, todos tomaron té en el jardín. Reinaba la calma y nadie quería volver a la ciudad."
   },
   {
    "ru": "В а́вгусте в саду́ бу́дет мно́го я́блок. Ба́бушка пригото́вит из них сок, и зимо́й они́ бу́дут пить его́ и ду́мать о ле́те.",
    "es": "En agosto el jardín estará lleno de manzanas. La abuela hará zumo con ellas, y en invierno lo beberán acordándose del verano."
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
    "ru": "Мечта́ мно́гих тури́стов — Транссиби́рская магистра́ль. Э́то са́мая дли́нная доро́га для поездо́в в ми́ре: от Москвы́ до Владивосто́ка — семь дней в по́езде.",
    "es": "El sueño de muchos viajeros es el Transiberiano, la línea de tren más larga del mundo: de Moscú a Vladivostok hay siete días de viaje."
   },
   {
    "ru": "Ле́том Лу́кас наконе́ц реши́л пое́хать. Он купи́л биле́т и взял с собо́й кни́ги, чай и шокола́д. «Я ду́мал, что бу́ду скуча́ть, — написа́л он дру́гу, — но мне бы́ло о́чень интере́сно».",
    "es": "Este verano, Lucas por fin se animó. Compró el billete y se llevó libros, té y chocolate. «Pensaba que me iba a aburrir —le escribió a un amigo—, pero me pareció fascinante»."
   },
   {
    "ru": "В ваго́не он познако́мился с ра́зными людьми́: с ба́бушкой и де́душкой из Ирку́тска, со студе́нтом из Новосиби́рска и с семьёй, кото́рая е́хала в го́сти. Все вме́сте пи́ли чай, е́ли и расска́зывали исто́рии.",
    "es": "En el vagón conoció a gente de lo más variada: una pareja de abuelos de Irkutsk, un estudiante de Novosibirsk y una familia que iba de visita. Juntos tomaban té, compartían la comida y contaban historias."
   },
   {
    "ru": "За окно́м бы́ли поля́, ма́ленькие дере́вни и леса́, леса́, леса́. Са́мым си́льным впечатле́нием ста́ло о́зеро Байка́л. По́езд е́хал ря́дом с о́зером не́сколько часо́в, а Лу́кас смотре́л в окно́ и ничего́ не говори́л.",
    "es": "Por la ventana pasaban campos, pueblitos y bosques sin fin. Lo que más le impresionó fue el lago Baikal: el tren lo bordeó durante horas, y Lucas lo contemplaba en silencio."
   },
   {
    "ru": "«Е́сли мо́жете, обяза́тельно пое́зжайте, — сове́тует он. — То́лько возьми́те с собо́й хоро́шую кни́гу и хоро́шее настрое́ние».",
    "es": "«Si pueden, no se lo pierdan —aconseja—. Eso sí: llévense un buen libro y buen humor»."
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
    "es": "Los turistas suelen pensar que el invierno ruso es nieve, días cortos y mucho frío. Y tienen razón: en Moscú el termómetro puede marcar veinte bajo cero, y en Siberia, cuarenta. En diciembre hay luz apenas siete horas."
   },
   {
    "ru": "Но са́ми ру́сские зи́му лю́бят. Во-пе́рвых, э́то вре́мя пра́здников. Но́вый год — лу́чший пра́здник в году́: лю́ди покупа́ют пода́рки, гото́вят сала́т «оливье́» и в по́лночь слу́шают часы́ на Кремле́. Рождество́ пра́зднуют в январе́.",
    "es": "Sin embargo, a los rusos el invierno les gusta. Para empezar, es temporada de fiestas. El Año Nuevo es la mejor del año: se compran regalos, se prepara la ensalada «olivier» y a medianoche se escuchan las campanadas del Kremlin. La Navidad se celebra en enero."
   },
   {
    "ru": "Во-вторы́х, зимо́й в па́рке мо́жно гуля́ть, а де́ти игра́ют в снегу́ весь день.",
    "es": "Además, en invierno se puede pasear por el parque, donde los niños juegan en la nieve todo el día."
   },
   {
    "ru": "Ру́сские говоря́т: «Нет плохо́й пого́ды, есть плоха́я оде́жда». Ва́жно тепло́ одева́ться: ша́пка, шарф и тёплые сапоги́.",
    "es": "Los rusos dicen: «No hay mal tiempo, sino ropa inadecuada». Lo importante es abrigarse: gorro, bufanda y botas calentitas."
   },
   {
    "ru": "По-мо́ему, зима́ в Росси́и — э́то не то́лько моро́з. Э́то ещё и тёплый дом, горя́чий чай, дли́нные ве́чера и хоро́шие друзья́ ря́дом.",
    "es": "Para mí, el invierno en Rusia no es solo helada. Es también una casa cálida, té caliente, tardes largas y buenos amigos cerca."
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
   }
  ]
 }
];
function lecturaById(id) { return LECTURAS.find(l => l.id === id) || null; }
window.LECTURAS = LECTURAS;
window.lecturaById = lecturaById;
