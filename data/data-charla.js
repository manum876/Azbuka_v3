/* ============================================================
   DATA-CHARLA.JS — Charla con Masha (MAQUETA, 01/10/2026)
   Conversación escrita con ramificaciones. Todo local: Masha no es
   una IA; reconoce raíces de palabras clave (claves) en lo que
   escribís y sigue el recorrido.

   CHARLA.nodos: el recorrido, en orden. Cada nodo:
     bot      líneas de Masha al llegar ({ ru, tr, es })
     botSi    otra línea si ya le preguntaste eso (id de pregunta)
     saltarSi se salta si ya se sabe ese dato (p. ej. el nombre); si
              lo dijiste antes, Masha ya se presentó en ese momento
     ideas    respuestas sugeridas (chips)
     ramas    en orden; la primera que coincide gana:
       claves   patrones: raíces separadas por espacio que tienen que
                estar todas. «=x» = palabra exacta; si no, comienzo de
                palabra (с una letra de margen en raíces de 5+ letras)
       captura  "nombre" | "pais" (U2_NACIONES de data-unidad-2.js) | "eco"
                (la palabra que sigue a «tras»)
       genero   palabra exacta → género del alumno (уста́л / уста́ла…)
       resp     respuesta de Masha; ir: nodo siguiente ("FIN" termina)
       comodin  cualquier otra respuesta (va última)
     aTi      respuesta si le devolvés la pregunta («А ты?»); aTiTema: la
              pregunta de su historia que equivale (no la repite)
     delega   la rama pasa tu respuesta a otro paso (p. ej. «я врач»)
     retomar  cómo vuelve a su pregunta después de un desvío
   CHARLA.preguntas: la historia de Masha (lo que sabe responder en
     cualquier momento). CHARLA.utiles: frases que sirven siempre.
   Plantillas: {nombre}, {pais}, {x}.
   Transliteración generada con generador-fonetica.py (CONVENCION_IPA,
   parte B); si la palabra está tal cual en el léxico, la del léxico.
   ============================================================ */
const CHARLA = {
 "personaje": "masha",
 "inicio": "saludo",
 "presentacion": "Masha es estudiante y vive en Moscú. Charlá con ella por escrito, en ruso: te va a hacer preguntas y vos también le podés preguntar cosas de su vida.",
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
   "trasPregunta": "como_estas",
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
     "es": "¡Buenas tardes!"
    }
   ],
   "ramas": [
    {
     "etiqueta": "Saludo informal (приве́т…)",
     "claves": [
      "привет",
      "=здравствуй",
      "=хай",
      "=здорово"
     ],
     "resp": [],
     "ir": "como_estas"
    },
    {
     "etiqueta": "Saludo formal (здра́вствуйте, до́брый день…)",
     "claves": [
      "здравств",
      "=добрый",
      "=доброе",
      "=добрый вечер"
     ],
     "resp": [
      {
       "ru": "Здра́вствуй! 🙂",
       "tr": "Zdrástvui!",
       "es": "¡Hola!"
      }
     ],
     "ir": "tuteo"
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
     "ru": "Мо́жно на «ты»?",
     "tr": "Mózhna na «ty»?",
     "es": "¿Nos tuteamos? (¿Te puedo tratar de «ты»?)"
    }
   ],
   "ideas": [
    {
     "ru": "Да, коне́чно!",
     "es": "¡Sí, claro!"
    },
    {
     "ru": "Коне́чно, мо́жно.",
     "es": "Claro, dale."
    },
    {
     "ru": "Нет, лу́чше на «вы».",
     "es": "No, mejor de «вы»."
    }
   ],
   "ramas": [
    {
     "etiqueta": "No (лу́чше на «вы»)",
     "claves": [
      "=нет",
      "лучше"
     ],
     "resp": [
      {
       "ru": "Пра́вда? Мне два́дцать лет, я студе́нтка! 😄 Дава́й на «ты».",
       "tr": "Právda? Mnie dváttsat liet, ya studiéntka! Davái na «ty».",
       "es": "¿En serio? ¡Tengo veinte años, soy estudiante! Tuteémonos."
      }
     ],
     "ir": "como_estas"
    },
    {
     "etiqueta": "Sí (да, коне́чно, мо́жно…)",
     "claves": [
      "=да",
      "конечно",
      "можно",
      "давай",
      "=ок",
      "хорошо"
     ],
     "resp": [
      {
       "ru": "Отли́чно! 😊",
       "tr": "Atlíchna!",
       "es": "¡Genial!"
      }
     ],
     "ir": "como_estas"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Хорошо́, на «ты»! 🙂",
       "tr": "Jarashó, na «ty»!",
       "es": "Bueno, ¡de «ты»!"
      }
     ],
     "ir": "como_estas"
    }
   ]
  },
  {
   "id": "como_estas",
   "titulo": "¿Cómo andás?",
   "bot": [
    {
     "ru": "Как дела́?",
     "tr": "Kak dilá?",
     "es": "¿Cómo andás?"
    }
   ],
   "botSi": {
    "como_m": [
     {
      "ru": "А у тебя́ как дела́?",
      "tr": "A u tibiá kak dilá?",
      "es": "¿Y a vos cómo te va?"
     }
    ]
   },
   "ideas": [
    {
     "ru": "Хорошо́, спаси́бо. А у тебя́?",
     "es": "Bien, gracias. ¿Y vos?"
    },
    {
     "ru": "Отли́чно!",
     "es": "¡Bárbaro!"
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
     "etiqueta": "Nada mal (непло́хо)",
     "claves": [
      "неплох",
      "=не плохо"
     ],
     "resp": [
      {
       "ru": "Здо́рово! 😊",
       "tr": "Zdórava!",
       "es": "¡Qué bueno!"
      }
     ],
     "ir": "nombre"
    },
    {
     "etiqueta": "Mal (пло́хо, не о́чень)",
     "claves": [
      "плохо",
      "=не очен",
      "ужасн"
     ],
     "resp": [
      {
       "ru": "Ой!",
       "tr": "Oi!",
       "es": "¡Uy!"
      }
     ],
     "ir": "mal"
    },
    {
     "etiqueta": "Más o menos (так себе́)",
     "claves": [
      "=так себе"
     ],
     "resp": [
      {
       "ru": "Так себе́? Ничего́, сейча́с бу́дет лу́чше! ☕",
       "tr": "Tak sibié? Nichivó, siichás búdit lúchshi!",
       "es": "¿Más o menos? Tranqui, ya se va a poner mejor."
      }
     ],
     "ir": "nombre"
    },
    {
     "etiqueta": "Bien (хорошо́, отли́чно, норма́льно…)",
     "claves": [
      "хорошо",
      "отлично",
      "нормальн",
      "прекрасн",
      "=супер",
      "замечательн",
      "=ок"
     ],
     "resp": [
      {
       "ru": "Здо́рово! 😊",
       "tr": "Zdórava!",
       "es": "¡Qué bueno!"
      }
     ],
     "ir": "nombre"
    }
   ],
   "aTi": {
    "ru": "У меня́ всё хорошо́, спаси́бо!",
    "tr": "U miniá fsio jarashó, spasíba!",
    "es": "Yo, todo bien, ¡gracias!"
   },
   "aTiTema": "como_m",
   "retomar": {
    "ru": "Так как дела́? 🙂",
    "tr": "Tak kak dilá?",
    "es": "Entonces, ¿cómo andás?"
   }
  },
  {
   "id": "mal",
   "titulo": "¿Qué pasó?",
   "soloSi": "si respondiste «пло́хо»",
   "bot": [
    {
     "ru": "Что случи́лось?",
     "tr": "Shto sluchílas?",
     "es": "¿Qué pasó?"
    }
   ],
   "ideas": [
    {
     "ru": "Я уста́л.",
     "es": "Estoy cansado."
    },
    {
     "ru": "Я уста́ла.",
     "es": "Estoy cansada."
    },
    {
     "ru": "Мно́го рабо́ты.",
     "es": "Mucho trabajo."
    },
    {
     "ru": "Не хочу́ говори́ть.",
     "es": "No quiero hablar."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Cansancio (уста́л / уста́ла)",
     "claves": [
      "устал"
     ],
     "genero": {
      "устал": "m",
      "устала": "f"
     },
     "resp": [
      {
       "ru": "Понима́ю. Тебе́ ну́жен ко́фе! ☕",
       "tr": "Panimáyu. Tibié núzhin kófi!",
       "es": "Te entiendo. ¡Necesitás un café!"
      }
     ],
     "ir": "nombre"
    },
    {
     "etiqueta": "No quiere hablar (не хочу́)",
     "claves": [
      "=не хочу"
     ],
     "resp": [
      {
       "ru": "Хорошо́, хорошо́. Всё бу́дет хорошо́! 🤗",
       "tr": "Jarashó, jarashó. Fsio búdit jarashó!",
       "es": "Está bien, está bien. ¡Todo va a estar bien!"
      }
     ],
     "ir": "nombre"
    },
    {
     "etiqueta": "Trabajo (рабо́та)",
     "claves": [
      "работ"
     ],
     "resp": [
      {
       "ru": "Мно́го рабо́ты — э́то тяжело́. Держи́сь! 💪",
       "tr": "Mnóga rabóty — éta tizhiló. Dirzhís!",
       "es": "Mucho trabajo es pesado. ¡Fuerza!"
      }
     ],
     "ir": "nombre"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Понима́ю. Всё бу́дет хорошо́! 🤗",
       "tr": "Panimáyu. Fsio búdit jarashó!",
       "es": "Te entiendo. ¡Todo va a estar bien!"
      }
     ],
     "ir": "nombre"
    }
   ]
  },
  {
   "id": "nombre",
   "titulo": "Nombre",
   "bot": [
    {
     "ru": "Кста́ти, я Ма́ша. А как тебя́ зову́т?",
     "tr": "Kstáti, ya Másha. A kak tibiá zavút?",
     "es": "Por cierto, soy Masha. ¿Y vos cómo te llamás?"
    }
   ],
   "botSi": {
    "nombre_m": [
     {
      "ru": "А тебя́ как зову́т?",
      "tr": "A tibiá kak zavút?",
      "es": "¿Y a vos cómo te llaman?"
     }
    ]
   },
   "saltarSi": "nombre",
   "alSaltar": [
    {
     "ru": "О́чень прия́тно, {nombre}! Я Ма́ша.",
     "tr": "Óchin priyátna, {nombre}! Ya Másha.",
     "es": "¡Mucho gusto, {nombre}! Soy Masha."
    }
   ],
   "sig": "origen",
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
     "etiqueta": "Tu nombre (меня́ зову́т…, я…)",
     "captura": "nombre",
     "dato": "Nombre",
     "porNombre": {
      "маша|мария|маня|маруся": [
       {
        "ru": "Пра́вда? Меня́ то́же! Две Ма́ши! 😄",
        "tr": "Právda? Miniá tózhi! Dvie Máshi!",
        "es": "¿En serio? ¡Yo también! ¡Dos Mashas!"
       }
      ],
      "лукас": [
       {
        "ru": "Лу́кас? Как мой друг! 😄",
        "tr": "Lúkas? Kak moi druk!",
        "es": "¿Lucas? ¡Como mi amigo!"
       }
      ],
      "*": [
       {
        "ru": "О́чень прия́тно, {nombre}!",
        "tr": "Óchin priyátna, {nombre}!",
        "es": "¡Mucho gusto, {nombre}!"
       }
      ]
     },
     "ir": "origen"
    }
   ],
   "aTi": {
    "ru": "Я же сказа́ла: Ма́ша! 😄",
    "tr": "Ya zhe skazála: Másha!",
    "es": "¡Ya te dije: Masha!"
   },
   "retomar": {
    "ru": "Так как тебя́ зову́т?",
    "tr": "Tak kak tibiá zavút?",
    "es": "Entonces, ¿cómo te llamás?"
   }
  },
  {
   "id": "origen",
   "titulo": "¿De dónde sos?",
   "bot": [
    {
     "ru": "Отку́да ты?",
     "tr": "Atkúda ty?",
     "es": "¿De dónde sos?"
    }
   ],
   "ideas": [
    {
     "ru": "Я из Аргенти́ны.",
     "es": "Soy de Argentina."
    },
    {
     "ru": "Я из Испа́нии.",
     "es": "Soy de España."
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
     "etiqueta": "Buenos Aires",
     "claves": [
      "буэнос"
     ],
     "fijaPais": "Аргенти́на",
     "dato": "Origen",
     "datoValor": "Буэ́нос-А́йрес",
     "resp": [
      {
       "ru": "Из Буэ́нос-А́йреса? Как мой друг Лу́кас! 😄",
       "tr": "Is Buénasáirisa? Kak moi druk Lúkas!",
       "es": "¿De Buenos Aires? ¡Como mi amigo Lucas!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "Barcelona",
     "claves": [
      "барселон"
     ],
     "fijaPais": "Испа́ния",
     "dato": "Origen",
     "datoValor": "Барсело́на",
     "resp": [
      {
       "ru": "Из Барсело́ны? Барсело́на — моя́ мечта́! ✨",
       "tr": "Is Barsilóny? Barsilóna — mayá michtá!",
       "es": "¿De Barcelona? ¡Barcelona es mi sueño!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "Moscú",
     "claves": [
      "москв"
     ],
     "fijaPais": "Росси́я",
     "dato": "Origen",
     "datoValor": "Москва́",
     "resp": [
      {
       "ru": "Из Москвы́? Я то́же! 😄",
       "tr": "Is Maskvý? Ya tózhi!",
       "es": "¿De Moscú? ¡Yo también!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "Un país (por el nombre o la nacionalidad)",
     "captura": "pais",
     "dato": "Origen",
     "porPais": {
      "Аргенти́на": {
       "resp": [
        {
         "ru": "Из Аргенти́ны? Мой друг Лу́кас то́же аргенти́нец! Он из Буэ́нос-А́йреса.",
         "tr": "Is Arguintíny? Moi druk Lúkas tózhi arguintínits! On is Buénasáirisa.",
         "es": "¿De Argentina? ¡Mi amigo Lucas también es argentino! Es de Buenos Aires."
        }
       ],
       "ir": "bsas"
      },
      "Испа́ния": {
       "resp": [
        {
         "ru": "Из Испа́нии? Здо́рово! Я о́чень хочу́ пое́хать в Барсело́ну.",
         "tr": "Is Ispánii? Zdórava! Ya óchin jachú payéjat v Barsilónu.",
         "es": "¿De España? ¡Qué bueno! Tengo muchas ganas de ir a Barcelona."
        }
       ],
       "ir": "vivir"
      },
      "Катало́ния": {
       "resp": [
        {
         "ru": "Из Катало́нии? Барсело́на — моя́ мечта́! ✨",
         "tr": "Is Katalónii? Barsilóna — mayá michtá!",
         "es": "¿De Cataluña? ¡Barcelona es mi sueño!"
        }
       ],
       "ir": "vivir"
      },
      "Росси́я": {
       "resp": [
        {
         "ru": "Из Росси́и? Пра́вда? Ты шу́тишь! 😄",
         "tr": "Is Rassíi? Právda? Ty shútish!",
         "es": "¿De Rusia? ¿En serio? ¡Me estás cargando!"
        }
       ],
       "ir": "vivir"
      },
      "*": {
       "resp": [
        {
         "ru": "{pais}? Интере́сно! Я там никогда́ не была́.",
         "tr": "{pais}? Intiriésna! Ya tam nikagdá nie bylá.",
         "es": "¡Qué interesante! Nunca estuve ahí."
        }
       ],
       "ir": "vivir"
      }
     }
    },
    {
     "etiqueta": "Otro lugar (из …)",
     "captura": "eco",
     "tras": [
      "из"
     ],
     "mayus": true,
     "dato": "Origen",
     "resp": [
      {
       "ru": "Из {x}? Интере́сно! Я там никогда́ не была́.",
       "tr": "Is {x}? Intiriésna! Ya tam nikagdá nie bylá.",
       "es": "¡Qué interesante! Nunca estuve ahí."
      }
     ],
     "ir": "vivir"
    }
   ],
   "aTi": {
    "ru": "А я из Москвы́.",
    "tr": "A ya is Maskvý.",
    "es": "Y yo, de Moscú."
   },
   "aTiTema": "origen_m",
   "retomar": {
    "ru": "Так отку́да ты? 🙂",
    "tr": "Tak atkúda ty?",
    "es": "Entonces, ¿de dónde sos?"
   }
  },
  {
   "id": "bsas",
   "titulo": "¿De Buenos Aires?",
   "soloSi": "si sos de Argentina",
   "bot": [
    {
     "ru": "А ты то́же из Буэ́нос-А́йреса?",
     "tr": "A ty tózhi is Buénasáirisa?",
     "es": "¿Y vos también sos de Buenos Aires?"
    }
   ],
   "ideas": [
    {
     "ru": "Да, из Буэ́нос-А́йреса.",
     "es": "Sí, de Buenos Aires."
    },
    {
     "ru": "Нет.",
     "es": "No."
    },
    {
     "ru": "Нет, я из …",
     "es": "No, soy de …"
    }
   ],
   "ramas": [
    {
     "etiqueta": "Sí, de Buenos Aires",
     "claves": [
      "буэнос"
     ],
     "dato": "Ciudad",
     "datoValor": "Буэ́нос-А́йрес",
     "resp": [
      {
       "ru": "Как Лу́кас! Мир те́сен! 😄",
       "tr": "Kak Lúkas! Mir tiésin!",
       "es": "¡Como Lucas! ¡El mundo es un pañuelo!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "No, de otra ciudad (из …)",
     "captura": "eco",
     "tras": [
      "из"
     ],
     "mayus": true,
     "dato": "Ciudad",
     "resp": [
      {
       "ru": "Из {x}? Я не зна́ю э́тот го́род, но звучи́т краси́во!",
       "tr": "Is {x}? Ya nie znáyu état górat, no zvuchít krasíva!",
       "es": "No conozco esa ciudad, ¡pero suena lindo!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "Sí (да)",
     "claves": [
      "=да"
     ],
     "resp": [
      {
       "ru": "Как Лу́кас! Мир те́сен! 😄",
       "tr": "Kak Lúkas! Mir tiésin!",
       "es": "¡Como Lucas! ¡El mundo es un pañuelo!"
      }
     ],
     "ir": "vivir"
    },
    {
     "etiqueta": "No (нет)",
     "claves": [
      "=нет"
     ],
     "resp": [
      {
       "ru": "Поня́тно! Аргенти́на больша́я.",
       "tr": "Paniátna! Arguintína balsháya.",
       "es": "¡Entiendo! Argentina es grande."
      }
     ],
     "ir": "vivir"
    }
   ],
   "aTi": {
    "ru": "Нет, я из Москвы́.",
    "tr": "Niet, ya is Maskvý.",
    "es": "No, yo soy de Moscú."
   },
   "retomar": {
    "ru": "Ты из Буэ́нос-А́йреса?",
    "tr": "Ty is Buénasáirisa?",
    "es": "¿Sos de Buenos Aires?"
   }
  },
  {
   "id": "vivir",
   "titulo": "¿Dónde vivís?",
   "bot": [
    {
     "ru": "А где ты живёшь сейча́с?",
     "tr": "A gdie ty zhiviósh siichás?",
     "es": "¿Y dónde vivís ahora?"
    }
   ],
   "ideas": [
    {
     "ru": "Я живу́ в Барсело́не.",
     "es": "Vivo en Barcelona."
    },
    {
     "ru": "Я живу́ в Москве́.",
     "es": "Vivo en Moscú."
    },
    {
     "ru": "В Буэ́нос-А́йресе.",
     "es": "En Buenos Aires."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Moscú",
     "claves": [
      "москв"
     ],
     "dato": "Vive en",
     "datoValor": "Москва́",
     "resp": [
      {
       "ru": "В Москве́? Я то́же! Мо́жет, уви́димся? ☕",
       "tr": "V Maskvié? Ya tózhi! Mózhit, uvídimsia?",
       "es": "¿En Moscú? ¡Yo también! ¿Capaz nos vemos?"
      }
     ],
     "ir": "idiomas"
    },
    {
     "etiqueta": "Barcelona",
     "claves": [
      "барселон"
     ],
     "dato": "Vive en",
     "datoValor": "Барсело́на",
     "resp": [
      {
       "ru": "В Барсело́не? Как я тебе́ зави́дую! ☀️",
       "tr": "V Barsilóni? Kak ya tibié zavíduyu!",
       "es": "¿En Barcelona? ¡Qué envidia me das!"
      }
     ],
     "ir": "idiomas"
    },
    {
     "etiqueta": "Buenos Aires",
     "claves": [
      "буэнос"
     ],
     "dato": "Vive en",
     "datoValor": "Буэ́нос-А́йрес",
     "resp": [
      {
       "ru": "В Буэ́нос-А́йресе? Там живёт семья́ Лу́каса!",
       "tr": "V Buénasáirisi? Tam zhiviót simyá Lúkasa!",
       "es": "¿En Buenos Aires? ¡Ahí vive la familia de Lucas!"
      }
     ],
     "ir": "idiomas"
    },
    {
     "etiqueta": "Otra ciudad (в …)",
     "captura": "eco",
     "tras": [
      "в",
      "во"
     ],
     "mayus": true,
     "dato": "Vive en",
     "resp": [
      {
       "ru": "В {x}? Здо́рово!",
       "tr": "V {x}? Zdórava!",
       "es": "¡Qué bueno!"
      }
     ],
     "ir": "idiomas"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Поня́тно! 🙂",
       "tr": "Paniátna!",
       "es": "¡Entiendo!"
      }
     ],
     "ir": "idiomas"
    }
   ],
   "aTi": {
    "ru": "Я живу́ в Москве́, с ма́мой, па́пой и бра́том.",
    "tr": "Ya zhivú v Maskvié, s mámai, pápai i brátam.",
    "es": "Vivo en Moscú, con mi mamá, mi papá y mi hermano."
   },
   "aTiTema": "vivir_m",
   "retomar": {
    "ru": "А где ты живёшь?",
    "tr": "A gdie ty zhiviósh?",
    "es": "¿Y dónde vivís?"
   }
  },
  {
   "id": "idiomas",
   "titulo": "Idiomas",
   "bot": [
    {
     "ru": "Ты говори́шь по-англи́йски?",
     "tr": "Ty gavarísh paanglíiski?",
     "es": "¿Hablás inglés?"
    }
   ],
   "ideas": [
    {
     "ru": "Да, немно́го.",
     "es": "Sí, un poco."
    },
    {
     "ru": "Нет, я говорю́ по-испа́нски.",
     "es": "No, hablo español."
    },
    {
     "ru": "Да, я говорю́ по-англи́йски и по-испа́нски.",
     "es": "Sí, hablo inglés y español."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Un poco (немно́го)",
     "claves": [
      "немног",
      "=чуть"
     ],
     "resp": [
      {
       "ru": "Немно́го — э́то уже́ хорошо́!",
       "tr": "Nimnóga — éta uzhé jarashó!",
       "es": "¡Un poco ya está bien!"
      }
     ],
     "ir": "ocupacion"
    },
    {
     "etiqueta": "No, pero español (нет… по-испа́нски)",
     "claves": [
      "=нет испанск",
      "=не испанск"
     ],
     "resp": [
      {
       "ru": "По-испа́нски? Я не говорю́ по-испа́нски, но Лу́кас меня́ у́чит: «¡Hola! ¿Qué tal?» 😄",
       "tr": "Paispánski? Ya nie gavariú paispánski, no Lúkas miniá úchit: «¡Hola! ¿Qué tal?»",
       "es": "¿Español? Yo no hablo, pero Lucas me está enseñando: «¡Hola! ¿Qué tal?»"
      }
     ],
     "ir": "ocupacion"
    },
    {
     "etiqueta": "No (нет)",
     "claves": [
      "=нет",
      "=не говорю"
     ],
     "resp": [
      {
       "ru": "Ничего́! Твой ру́сский уже́ хоро́ший. 👍",
       "tr": "Nichivó! Tvoi rússkii uzhé jaróshii.",
       "es": "¡No pasa nada! Tu ruso ya está bueno."
      }
     ],
     "ir": "ocupacion"
    },
    {
     "etiqueta": "Sí (да, говорю́)",
     "claves": [
      "=да",
      "конечно",
      "говорю"
     ],
     "resp": [
      {
       "ru": "Отли́чно! Я то́же. Но дава́й говори́ть по-ру́сски! 😉",
       "tr": "Atlíchna! Ya tózhi. No davái gavarít parússki!",
       "es": "¡Bárbaro! Yo también. ¡Pero hablemos en ruso!"
      }
     ],
     "ir": "ocupacion"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Поня́тно! 🙂",
       "tr": "Paniátna!",
       "es": "¡Entiendo!"
      }
     ],
     "ir": "ocupacion"
    }
   ],
   "aTi": {
    "ru": "Да, я говорю́ по-англи́йски. Я изуча́ю его́ в университе́те.",
    "tr": "Da, ya gavariú paanglíiski. Ya izucháyu yivó v univirsitiéti.",
    "es": "Sí, hablo inglés. Lo estudio en la facultad."
   },
   "aTiTema": "idiomas_m",
   "retomar": {
    "ru": "Так ты говори́шь по-англи́йски?",
    "tr": "Tak ty gavarísh paanglíiski?",
    "es": "Entonces, ¿hablás inglés?"
   }
  },
  {
   "id": "ocupacion",
   "titulo": "¿Estudiás o trabajás?",
   "bot": [
    {
     "ru": "Ты у́чишься и́ли рабо́таешь?",
     "tr": "Ty úchishsia íli rabótayish?",
     "es": "¿Estudiás o trabajás?"
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
     "ru": "Я студе́нт.",
     "es": "Soy estudiante (hombre)."
    },
    {
     "ru": "Я студе́нтка.",
     "es": "Soy estudiante (mujer)."
    },
    {
     "ru": "И учу́сь, и рабо́таю.",
     "es": "Estudio y trabajo."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Las dos cosas",
     "claves": [
      "учусь работаю"
     ],
     "dato": "Ocupación",
     "datoValor": "estudia y trabaja",
     "resp": [
      {
       "ru": "И у́чишься, и рабо́таешь? Молоде́ц! 💪",
       "tr": "I úchishsia, i rabótayish? Maladiéts!",
       "es": "¿Estudiás y trabajás? ¡Bien ahí!"
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "No trabaja (не рабо́таю)",
     "claves": [
      "=не работаю",
      "пенси"
     ],
     "dato": "Ocupación",
     "datoValor": "no trabaja",
     "resp": [
      {
       "ru": "Поня́тно! Отдыха́ть то́же ну́жно 😄",
       "tr": "Paniátna! Addyját tózhi núzhna",
       "es": "¡Entiendo! Descansar también hace falta."
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Estudia (учу́сь, студе́нт / студе́нтка)",
     "claves": [
      "учусь",
      "студент"
     ],
     "genero": {
      "студент": "m",
      "студентка": "f"
     },
     "dato": "Ocupación",
     "datoValor": "estudia",
     "resp": [
      {
       "ru": "Я то́же студе́нтка! 📚",
       "tr": "Ya tózhi studiéntka!",
       "es": "¡Yo también soy estudiante!"
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Trabaja (рабо́таю)",
     "claves": [
      "работаю"
     ],
     "dato": "Ocupación",
     "datoValor": "trabaja",
     "resp": [],
     "ir": "trabajo"
    },
    {
     "etiqueta": "Dice directamente su profesión (я врач…): se responde como en «¿De qué trabajás?»",
     "captura": "eco",
     "tras": [
      "я"
     ],
     "dato": "Ocupación",
     "datoValor": "trabaja",
     "delega": "trabajo",
     "resp": [],
     "ir": "gustos"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "А, поня́тно! 🙂",
       "tr": "A, paniátna!",
       "es": "¡Ah, entiendo!"
      }
     ],
     "ir": "gustos"
    }
   ],
   "aTi": {
    "ru": "Я учу́сь. Я студе́нтка, изуча́ю англи́йский язы́к.",
    "tr": "Ya uchús. Ya studiéntka, izucháyu anglíiskii yizýk.",
    "es": "Estudio. Soy estudiante, estudio inglés."
   },
   "aTiTema": "estudio",
   "retomar": {
    "ru": "Так ты у́чишься и́ли рабо́таешь?",
    "tr": "Tak ty úchishsia íli rabótayish?",
    "es": "Entonces, ¿estudiás o trabajás?"
   }
  },
  {
   "id": "trabajo",
   "titulo": "¿De qué trabajás?",
   "soloSi": "si trabajás",
   "bot": [
    {
     "ru": "А кем ты рабо́таешь?",
     "tr": "A kem ty rabótayish?",
     "es": "¿Y de qué trabajás?"
    }
   ],
   "ideas": [
    {
     "ru": "Я инжене́р.",
     "es": "Soy ingeniero."
    },
    {
     "ru": "Я врач.",
     "es": "Soy médico."
    },
    {
     "ru": "Я учи́тель.",
     "es": "Soy docente."
    },
    {
     "ru": "Я строи́тель.",
     "es": "Trabajo en la construcción."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Médico/a (врач)",
     "claves": [
      "врач"
     ],
     "dato": "Trabajo",
     "datoValor": "врач",
     "resp": [
      {
       "ru": "Врач? Моя́ ма́ма то́же врач! 🩺",
       "tr": "Vrach? Mayá máma tózhi vrach!",
       "es": "¿Médico? ¡Mi mamá también es médica!"
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Ingeniero/a (инжене́р)",
     "claves": [
      "инженер"
     ],
     "dato": "Trabajo",
     "datoValor": "инжене́р",
     "resp": [
      {
       "ru": "Инжене́р? Как мой па́па! 👷",
       "tr": "Inzhiniér? Kak moi pápa!",
       "es": "¿Ingeniero? ¡Como mi papá!"
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Docente (учи́тель, преподава́тель)",
     "claves": [
      "учител",
      "преподават"
     ],
     "dato": "Trabajo",
     "datoValor": "docente",
     "resp": [
      {
       "ru": "Здо́рово! Я то́же хочу́ преподава́ть.",
       "tr": "Zdórava! Ya tózhi jachú pripadavát.",
       "es": "¡Qué bueno! Yo también quiero enseñar."
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Otra profesión (я …, рабо́таю …)",
     "captura": "eco",
     "tras": [
      "я",
      "работаю"
     ],
     "dato": "Trabajo",
     "resp": [
      {
       "ru": "{x}? Интере́сно! 👍",
       "tr": "{x}? Intiriésna!",
       "es": "¡Qué interesante!"
      }
     ],
     "ir": "gustos"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Интере́сно! 👍",
       "tr": "Intiriésna!",
       "es": "¡Qué interesante!"
      }
     ],
     "ir": "gustos"
    }
   ],
   "aTi": {
    "ru": "Я не рабо́таю, я студе́нтка.",
    "tr": "Ya nie rabótayu, ya studiéntka.",
    "es": "No trabajo, soy estudiante."
   },
   "aTiTema": "trabajo_m",
   "retomar": {
    "ru": "Так кем ты рабо́таешь?",
    "tr": "Tak kem ty rabótayish?",
    "es": "Entonces, ¿de qué trabajás?"
   }
  },
  {
   "id": "gustos",
   "titulo": "¿Qué te gusta hacer?",
   "bot": [
    {
     "ru": "А что ты лю́бишь де́лать?",
     "tr": "A shto ty liúbish diélat?",
     "es": "¿Y qué te gusta hacer?"
    }
   ],
   "ideas": [
    {
     "ru": "Я люблю́ чита́ть.",
     "es": "Me gusta leer."
    },
    {
     "ru": "Я люблю́ му́зыку.",
     "es": "Me gusta la música."
    },
    {
     "ru": "Я люблю́ футбо́л.",
     "es": "Me gusta el fútbol."
    },
    {
     "ru": "Я люблю́ путеше́ствовать.",
     "es": "Me gusta viajar."
    }
   ],
   "ramas": [
    {
     "etiqueta": "Nadar (пла́вать)",
     "claves": [
      "плава"
     ],
     "dato": "Le gusta",
     "datoValor": "nadar",
     "resp": [
      {
       "ru": "Пра́вда? Я то́же люблю́ пла́вать! 🏊‍♀️",
       "tr": "Právda? Ya tózhi liubliú plávat!",
       "es": "¿En serio? ¡A mí también me gusta nadar!"
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Música (му́зыка)",
     "claves": [
      "музык"
     ],
     "dato": "Le gusta",
     "datoValor": "la música",
     "resp": [
      {
       "ru": "Я то́же! Я всё вре́мя слу́шаю му́зыку 🎧",
       "tr": "Ya tózhi! Ya fsio vriémia slúshayu múzyku",
       "es": "¡A mí también! Escucho música todo el tiempo."
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Leer (чита́ть, кни́ги)",
     "claves": [
      "читать",
      "читаю",
      "книг"
     ],
     "dato": "Le gusta",
     "datoValor": "leer",
     "resp": [
      {
       "ru": "Чита́ть — э́то здо́рово! Мой друг Лу́кас то́же лю́бит чита́ть 📚",
       "tr": "Chitát — éta zdórava! Moi druk Lúkas tózhi liúbit chitát",
       "es": "¡Leer está buenísimo! A mi amigo Lucas también le gusta leer."
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Fútbol (футбо́л)",
     "claves": [
      "футбол"
     ],
     "dato": "Le gusta",
     "datoValor": "el fútbol",
     "resp": [
      {
       "ru": "Футбо́л? Мой брат Ди́ма то́же лю́бит футбо́л! ⚽",
       "tr": "Fudból? Moi brat Díma tózhi liúbit fudból!",
       "es": "¿Fútbol? ¡A mi hermano Dima también le gusta el fútbol!"
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Viajar (путеше́ствовать)",
     "claves": [
      "путешеств"
     ],
     "dato": "Le gusta",
     "datoValor": "viajar",
     "resp": [
      {
       "ru": "Путеше́ствовать — моя́ мечта́! ✈️",
       "tr": "Putishéstvavat — mayá michtá!",
       "es": "¡Viajar es mi sueño!"
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Cocinar (гото́вить)",
     "claves": [
      "готовить"
     ],
     "dato": "Le gusta",
     "datoValor": "cocinar",
     "resp": [
      {
       "ru": "Ты лю́бишь гото́вить? А я люблю́ есть! 😄",
       "tr": "Ty liúbish gatóvit? A ya liubliú yest!",
       "es": "¿Te gusta cocinar? ¡A mí me gusta comer!"
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Cine (кино́, фи́льмы)",
     "claves": [
      "=кино",
      "фильм"
     ],
     "dato": "Le gusta",
     "datoValor": "el cine",
     "resp": [
      {
       "ru": "Кино́ — э́то здо́рово! 🎬",
       "tr": "Kinó — éta zdórava!",
       "es": "¡El cine está buenísimo!"
      }
     ],
     "ir": "preguntame"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Здо́рово! 😊",
       "tr": "Zdórava!",
       "es": "¡Qué bueno!"
      }
     ],
     "ir": "preguntame"
    }
   ],
   "aTi": {
    "ru": "Я люблю́ пла́вать и слу́шать му́зыку.",
    "tr": "Ya liubliú plávat i slúshat múzyku.",
    "es": "Me gusta nadar y escuchar música."
   },
   "aTiTema": "gustos_m",
   "retomar": {
    "ru": "Так что ты лю́бишь де́лать?",
    "tr": "Tak shto ty liúbish diélat?",
    "es": "Entonces, ¿qué te gusta hacer?"
   }
  },
  {
   "id": "preguntame",
   "titulo": "Tu turno: preguntale",
   "abierto": true,
   "bot": [
    {
     "ru": "Слу́шай, а ты хо́чешь меня́ что́-нибудь спроси́ть?",
     "tr": "Slúshai, a ty jóchish miniá shtónibut sprasít?",
     "es": "Che, ¿y vos querés preguntarme algo?"
    }
   ],
   "ideas": [
    {
     "ru": "Нет, спаси́бо.",
     "es": "No, gracias."
    }
   ],
   "ramas": [
    {
     "etiqueta": "No / ya está (нет, всё)",
     "claves": [
      "=нет",
      "=все"
     ],
     "resp": [],
     "ir": "despedida"
    },
    {
     "etiqueta": "Sí (да, хочу́)",
     "claves": [
      "=да",
      "конечно",
      "=хочу"
     ],
     "resp": [
      {
       "ru": "Дава́й, спра́шивай! 🙂",
       "tr": "Davái, spráshivai!",
       "es": "¡Dale, preguntá!"
      }
     ],
     "ir": null
    }
   ],
   "retomar": {
    "ru": "Спроси́ меня́ что́-нибудь! 🙂",
    "tr": "Sprasí miniá shtónibut!",
    "es": "¡Preguntame algo!"
   }
  },
  {
   "id": "despedida",
   "titulo": "Despedida",
   "bot": [
    {
     "ru": "Ой, мне пора́! У меня́ ле́кция. Бы́ло о́чень прия́тно, {nombre}!",
     "tr": "Oi, mnie pará! U miniá liéktsiya. Býla óchin priyátna, {nombre}!",
     "es": "¡Uy, me tengo que ir! Tengo clase. ¡Fue un placer, {nombre}!"
    }
   ],
   "ideas": [
    {
     "ru": "Пока́!",
     "es": "¡Chau!"
    },
    {
     "ru": "Мне то́же. Пока́, Ма́ша!",
     "es": "Igualmente. ¡Chau, Masha!"
    },
    {
     "ru": "До свида́ния!",
     "es": "¡Hasta luego!"
    },
    {
     "ru": "До за́втра!",
     "es": "¡Hasta mañana!"
    }
   ],
   "ramas": [
    {
     "etiqueta": "Hasta mañana (до за́втра)",
     "claves": [
      "=до завтра"
     ],
     "resp": [
      {
       "ru": "До за́втра! 👋",
       "tr": "Da záftra!",
       "es": "¡Hasta mañana!"
      }
     ],
     "ir": "FIN"
    },
    {
     "etiqueta": "Despedida (пока́, до свида́ния, мне то́же…)",
     "claves": [
      "пока",
      "=до свидан",
      "=до встреч",
      "тоже"
     ],
     "resp": [
      {
       "ru": "Пока́! До встре́чи! 👋",
       "tr": "Paká! Da fstriéchi!",
       "es": "¡Chau! ¡Nos vemos!"
      }
     ],
     "ir": "FIN"
    },
    {
     "etiqueta": "Cualquier otra cosa",
     "comodin": true,
     "resp": [
      {
       "ru": "Пока́! 👋",
       "tr": "Paká!",
       "es": "¡Chau!"
      }
     ],
     "ir": "FIN"
    }
   ]
  }
 ],
 "preguntas": [
  {
   "id": "edad",
   "tema": "Su edad",
   "claves": [
    "сколько лет",
    "=возраст"
   ],
   "idea": {
    "ru": "Ско́лько тебе́ лет?",
    "es": "¿Cuántos años tenés?"
   },
   "resp": [
    {
     "ru": "Мне два́дцать лет.",
     "tr": "Mnie dváttsat liet.",
     "es": "Tengo veinte años."
    }
   ]
  },
  {
   "id": "nombre_m",
   "tema": "Su nombre completo",
   "claves": [
    "зовут тебя",
    "=твое имя",
    "полное имя"
   ],
   "idea": {
    "ru": "Ма́ша — э́то по́лное и́мя?",
    "es": "¿Masha es el nombre completo?"
   },
   "resp": [
    {
     "ru": "Ма́ша. А по́лное и́мя — Мари́я.",
     "tr": "Másha. A pólnayi ímia — Maríya.",
     "es": "Masha. El nombre completo es María."
    }
   ]
  },
  {
   "id": "como_m",
   "tema": "Cómo está",
   "claves": [
    "=как дела",
    "=как ты"
   ],
   "idea": {
    "ru": "Как дела́?",
    "es": "¿Cómo andás?"
   },
   "resp": [
    {
     "ru": "У меня́ всё хорошо́, спаси́бо!",
     "tr": "U miniá fsio jarashó, spasíba!",
     "es": "Todo bien, ¡gracias!"
    }
   ]
  },
  {
   "id": "origen_m",
   "tema": "De dónde es",
   "claves": [
    "откуда"
   ],
   "idea": {
    "ru": "Отку́да ты?",
    "es": "¿De dónde sos?"
   },
   "resp": [
    {
     "ru": "Я из Москвы́. Я москви́чка! 😊",
     "tr": "Ya is Maskvý. Ya maskvíchka!",
     "es": "Soy de Moscú. ¡Soy moscovita!"
    }
   ]
  },
  {
   "id": "vivir_m",
   "tema": "Dónde y con quién vive",
   "claves": [
    "живешь"
   ],
   "idea": {
    "ru": "Где ты живёшь?",
    "es": "¿Dónde vivís?"
   },
   "resp": [
    {
     "ru": "Я живу́ в Москве́, с ма́мой, па́пой и бра́том.",
     "tr": "Ya zhivú v Maskvié, s mámai, pápai i brátam.",
     "es": "Vivo en Moscú, con mi mamá, mi papá y mi hermano."
    }
   ]
  },
  {
   "id": "estudio",
   "tema": "Qué estudia",
   "claves": [
    "изучаешь",
    "учишься",
    "=ты студентка",
    "университет",
    "=что учишь"
   ],
   "idea": {
    "ru": "Что ты изуча́ешь?",
    "es": "¿Qué estudiás?"
   },
   "resp": [
    {
     "ru": "Я студе́нтка. Я изуча́ю англи́йский язы́к в университе́те.",
     "tr": "Ya studiéntka. Ya izucháyu anglíiskii yizýk v univirsitiéti.",
     "es": "Soy estudiante. Estudio inglés en la universidad."
    }
   ]
  },
  {
   "id": "trabajo_m",
   "tema": "Si trabaja",
   "claves": [
    "работаешь",
    "=кем"
   ],
   "idea": {
    "ru": "Ты рабо́таешь?",
    "es": "¿Trabajás?"
   },
   "resp": [
    {
     "ru": "Нет, я не рабо́таю. Я студе́нтка.",
     "tr": "Niet, ya nie rabótayu. Ya studiéntka.",
     "es": "No, no trabajo. Soy estudiante."
    }
   ]
  },
  {
   "id": "idiomas_m",
   "tema": "Qué idiomas habla",
   "claves": [
    "говоришь",
    "языки",
    "языков"
   ],
   "idea": {
    "ru": "Ты говори́шь по-испа́нски?",
    "es": "¿Hablás español?"
   },
   "variantes": [
    {
     "claves": [
      "испанск"
     ],
     "resp": [
      {
       "ru": "Нет, но Лу́кас меня́ у́чит: «¡Hola! ¿Qué tal?» 😄",
       "tr": "Niet, no Lúkas miniá úchit: «¡Hola! ¿Qué tal?»",
       "es": "No, pero Lucas me está enseñando: «¡Hola! ¿Qué tal?»"
      }
     ]
    },
    {
     "claves": [
      "русск"
     ],
     "resp": [
      {
       "ru": "Коне́чно! Я ру́сская 😄",
       "tr": "Kaniéshna! Ya rússkaya",
       "es": "¡Obvio! Soy rusa."
      }
     ]
    },
    {
     "claves": [
      "англ"
     ],
     "resp": [
      {
       "ru": "Да, хорошо́ говорю́. Я изуча́ю англи́йский в университе́те.",
       "tr": "Da, jarashó gavariú. Ya izucháyu anglíiskii v univirsitiéti.",
       "es": "Sí, lo hablo bien. Estudio inglés en la facultad."
      }
     ]
    }
   ],
   "resp": [
    {
     "ru": "Я говорю́ по-ру́сски и по-англи́йски.",
     "tr": "Ya gavariú parússki i paanglíiski.",
     "es": "Hablo ruso e inglés."
    }
   ]
  },
  {
   "id": "hermanos",
   "tema": "Sus hermanos",
   "claves": [
    "брат",
    "сестр"
   ],
   "idea": {
    "ru": "У тебя́ есть брат?",
    "es": "¿Tenés hermanos?"
   },
   "variantes": [
    {
     "claves": [
      "сестр"
     ],
     "resp": [
      {
       "ru": "Нет, сестры́ нет. То́лько брат, Ди́ма.",
       "tr": "Niet, sistrý niet. Tólka brat, Díma.",
       "es": "No, hermana no tengo. Solo un hermano, Dima."
      }
     ]
    }
   ],
   "resp": [
    {
     "ru": "Да, есть. Его́ зову́т Ди́ма. Он мла́дший.",
     "tr": "Da, yest. Yivó zavút Díma. On mlátshii.",
     "es": "Sí. Se llama Dima. Es el menor."
    }
   ]
  },
  {
   "id": "familia",
   "tema": "Su familia",
   "claves": [
    "=семья",
    "=семье",
    "=семью",
    "родител",
    "=мама",
    "=маме",
    "=мамы",
    "=папа",
    "=папе",
    "=папы"
   ],
   "idea": {
    "ru": "Расскажи́ о семье́.",
    "es": "Contame de tu familia."
   },
   "variantes": [
    {
     "claves": [
      "=мама",
      "=маме",
      "=мамы",
      "=папа",
      "=папе",
      "=папы",
      "родител"
     ],
     "resp": [
      {
       "ru": "Ма́ма — врач, а па́па — инжене́р.",
       "tr": "Máma — vrach, a pápa — inzhiniér.",
       "es": "Mi mamá es médica y mi papá, ingeniero."
      }
     ]
    }
   ],
   "resp": [
    {
     "ru": "Ма́ма, па́па, брат Ди́ма и я. И ещё кот! 🐈",
     "tr": "Máma, pápa, brat Díma i ya. I yischó kot!",
     "es": "Mi mamá, mi papá, mi hermano Dima y yo. ¡Y también un gato!"
    }
   ]
  },
  {
   "id": "mascota",
   "tema": "Su mascota",
   "claves": [
    "=кот",
    "=кота",
    "кошк",
    "собак",
    "животн"
   ],
   "idea": {
    "ru": "У тебя́ есть кот?",
    "es": "¿Tenés un gato?"
   },
   "variantes": [
    {
     "claves": [
      "собак"
     ],
     "resp": [
      {
       "ru": "Соба́ки нет, но есть кот Ба́рсик! 🐈",
       "tr": "Sabáki niet, no yest kot Bársik!",
       "es": "Perro no tengo, ¡pero tengo un gato, Barsik!"
      }
     ]
    }
   ],
   "resp": [
    {
     "ru": "Да, у меня́ есть кот. Его́ зову́т Ба́рсик! 🐈",
     "tr": "Da, u miniá yest kot. Yivó zavút Bársik!",
     "es": "Sí, tengo un gato. ¡Se llama Barsik!"
    }
   ]
  },
  {
   "id": "comida",
   "tema": "Su comida favorita",
   "claves": [
    "любишь =есть",
    "=еда",
    "=еду",
    "блин",
    "блюдо"
   ],
   "idea": {
    "ru": "Что ты лю́бишь есть?",
    "es": "¿Qué te gusta comer?"
   },
   "resp": [
    {
     "ru": "Я обожа́ю блины́! С мёдом 🥞",
     "tr": "Ya abazháyu bliný! S miódam",
     "es": "¡Me encantan los blinís (panqueques rusos)! Con miel."
    }
   ]
  },
  {
   "id": "bebida",
   "tema": "Café o té",
   "claves": [
    "кофе",
    "=чай"
   ],
   "idea": {
    "ru": "Ты лю́бишь ко́фе?",
    "es": "¿Te gusta el café?"
   },
   "variantes": [
    {
     "claves": [
      "=чай"
     ],
     "resp": [
      {
       "ru": "Чай то́же люблю́. С лимо́ном! 🍋",
       "tr": "Chai tózhi liubliú. S limónam!",
       "es": "El té también me gusta. ¡Con limón!"
      }
     ]
    }
   ],
   "resp": [
    {
     "ru": "Да, о́чень! Я пью ко́фе ка́ждый день ☕",
     "tr": "Da, óchin! Ya pyu kófi kázhdyi dien",
     "es": "¡Sí, mucho! Tomo café todos los días."
    }
   ]
  },
  {
   "id": "moscu",
   "tema": "Su ciudad",
   "claves": [
    "москв"
   ],
   "idea": {
    "ru": "Тебе́ нра́вится Москва́?",
    "es": "¿Te gusta Moscú?"
   },
   "resp": [
    {
     "ru": "Москва́ — мой го́род. Она́ больша́я и краси́вая!",
     "tr": "Maskvá — moi górat. Aná balsháya i krasívaya!",
     "es": "Moscú es mi ciudad. ¡Es grande y linda!"
    }
   ]
  },
  {
   "id": "deporte",
   "tema": "El deporte",
   "claves": [
    "спорт",
    "плава"
   ],
   "idea": {
    "ru": "Ты занима́ешься спо́ртом?",
    "es": "¿Hacés deporte?"
   },
   "resp": [
    {
     "ru": "Да, я пла́ваю. Три ра́за в неде́лю! 🏊‍♀️",
     "tr": "Da, ya plávayu. Tri ráza v nidiéliu!",
     "es": "Sí, nado. ¡Tres veces por semana!"
    }
   ]
  },
  {
   "id": "lucas",
   "tema": "Su amigo Lucas",
   "claves": [
    "лукас",
    "=друг",
    "=друга",
    "=друзья",
    "подруг"
   ],
   "idea": {
    "ru": "Кто тако́й Лу́кас?",
    "es": "¿Quién es Lucas?"
   },
   "resp": [
    {
     "ru": "Мой друг Лу́кас — аргенти́нец, из Буэ́нос-А́йреса. Он у́чит ру́сский здесь, в Москве́.",
     "tr": "Moi druk Lúkas — arguintínits, is Buénasáirisa. On úchit rússkii zdies, v Maskvié.",
     "es": "Mi amigo Lucas es argentino, de Buenos Aires. Estudia ruso acá, en Moscú."
    }
   ]
  },
  {
   "id": "viajes",
   "tema": "Viajes y sueños",
   "claves": [
    "=была",
    "=был",
    "путешеств",
    "мечта",
    "=ездила"
   ],
   "idea": {
    "ru": "Ты была́ в Аргенти́не?",
    "es": "¿Estuviste en Argentina?"
   },
   "resp": [
    {
     "ru": "Я ещё не была́ ни в Аргенти́не, ни в Испа́нии. Но э́то моя́ мечта́! ✈️",
     "tr": "Ya yischó nie bylá ni v Arguintíni, ni v Ispánii. No éta mayá michtá!",
     "es": "Todavía no estuve ni en Argentina ni en España. ¡Pero es mi sueño!"
    }
   ]
  },
  {
   "id": "gustos_m",
   "tema": "Qué le gusta hacer",
   "claves": [
    "любишь",
    "нравится",
    "хобби"
   ],
   "idea": {
    "ru": "Что ты лю́бишь де́лать?",
    "es": "¿Qué te gusta hacer?"
   },
   "resp": [
    {
     "ru": "Я люблю́ пла́вать, слу́шать му́зыку и пить ко́фе ☕",
     "tr": "Ya liubliú plávat, slúshat múzyku i pit kófi",
     "es": "Me gusta nadar, escuchar música y tomar café."
    }
   ]
  }
 ],
 "utiles": [
  {
   "id": "despedida_u",
   "etiqueta": "Despedirse antes de tiempo (пока́, до свида́ния…)",
   "claves": [
    "пока",
    "=до свидан",
    "=до завтра",
    "=до встреч"
   ],
   "accion": "fin",
   "resp": [
    {
     "ru": "Уже́ ухо́дишь? Ну ла́дно. Пока́, {nombre}! 👋",
     "tr": "Uzhé ujódish? Nu ládna. Paká, {nombre}!",
     "es": "¿Ya te vas? Bueno. ¡Chau, {nombre}!"
    }
   ]
  },
  {
   "id": "no_entiendo",
   "etiqueta": "No entender (не понима́ю, повтори́…)",
   "claves": [
    "=не понима",
    "=не понял",
    "=не поняла",
    "повтор",
    "медленн",
    "=что значит"
   ],
   "accion": "repetir",
   "resp": [
    {
     "ru": "Извини́! Ещё раз, ме́дленно:",
     "tr": "Izviní! Yischó ras, miédlinna:",
     "es": "¡Perdón! Otra vez, despacio:"
    }
   ]
  },
  {
   "id": "gracias",
   "etiqueta": "Agradecer (спаси́бо)",
   "claves": [
    "спасиб"
   ],
   "accion": "retomar",
   "resp": [
    {
     "ru": "Пожа́луйста! 😊",
     "tr": "Pazháluista!",
     "es": "¡De nada!"
    }
   ]
  },
  {
   "id": "tambien",
   "etiqueta": "Cortesía (мне то́же, о́чень прия́тно…)",
   "claves": [
    "=мне тоже",
    "=очень приятно",
    "=рад",
    "=рада"
   ],
   "accion": "retomar",
   "resp": [
    {
     "ru": "🙂",
     "tr": "",
     "es": ""
    }
   ]
  },
  {
   "id": "hola",
   "etiqueta": "Volver a saludar (приве́т)",
   "claves": [
    "привет",
    "здравств"
   ],
   "accion": "retomar",
   "resp": [
    {
     "ru": "Приве́т ещё раз! 😄",
     "tr": "Priviét yischó ras!",
     "es": "¡Hola otra vez!"
    }
   ]
  }
 ],
 "comodines": {
  "noEntendi": {
   "ru": "Извини́, я не поняла́. 🙈",
   "tr": "Izviní, ya nie panilá.",
   "es": "Perdón, no entendí."
  },
  "noSe": {
   "ru": "Хм… Не зна́ю, что сказа́ть 😅 Спроси́ что́-нибудь друго́е!",
   "tr": "Jm… Nie znáyu, shto skazát Sprasí shtónibut drugóyi!",
   "es": "Mmm… No sé qué decirte. ¡Preguntame otra cosa!"
  },
  "latin": {
   "ru": "Ой, я не понима́ю по-испа́нски! 😅 Напиши́ по-ру́сски.",
   "tr": "Oi, ya nie panimáyu paispánski! Napishí parússki.",
   "es": "¡Uy, no entiendo español! Escribime en ruso."
  },
  "hola": {
   "ru": "«¡Hola!» — э́то я зна́ю! 😄 Но дава́й по-ру́сски.",
   "tr": "«¡Hola!» — éta ya znáyu! No davái parússki.",
   "es": "«¡Hola!» ¡Eso lo sé! Pero hablemos en ruso."
  },
  "masPreguntas": {
   "ru": "Ещё вопро́сы? 🙂",
   "tr": "Yischó vaprósy?",
   "es": "¿Más preguntas?"
  },
  "yaDije": {
   "ru": "Я же тебе́ сказа́ла 🙂",
   "tr": "Ya zhe tibié skazála",
   "es": "¡Ya te lo dije!"
  }
 }
};
window.CHARLA = CHARLA;
