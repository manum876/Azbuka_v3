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
   ============================================================ */
const LECTURAS = [
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
