/* ============================================================
   DATA-GRAMATICA.JS — Explicaciones de gramática compartidas
   ------------------------------------------------------------
   Una sola fuente para las explicaciones que usan varias partes
   de la app: los 6 casos, las formas especiales de la declinación
   y la guía de rección de los verbos. Lo leen casos.html,
   verbos.html y, más adelante, las unidades (Azbuka 4, 10…).
   Nunca repetir estas explicaciones dentro de un HTML.

   Cargar donde haga falta (no depende de ningún otro archivo):
     <script src="data-gramatica.js"></script>

   QUÉ EXPONE
     GRAMATICA_CASOS        los 6 casos (clave = id del caso)
     GRAMATICA_CASOS_ORDEN  orden tradicional ruso de los casos
     GRAMATICA_FORMAS       locativo, partitivo, forma corta,
                            acusativo y animacidad, numerales,
                            pronombres con н-, indeclinables
     GRAMATICA_RECCION      grupos de rección de los verbos
                            (antes VERBOS_GUIA_RECCION, en data-verbos.js)
     GRAMATICA_GUIA         guía larga «Cómo funcionan los casos»:
                            preguntas, rección, los 6 casos, trampas
                            del español y práctica (casos.html?guia=)
     gramaticaCaso(id)      devuelve un caso o null
     gramaticaGuia(id)      devuelve un capítulo de la guía o null
     gramaticaReccion(gov)  divide el campo Governance del léxico
                            ("кого? что? кому?") en grupos
                            (antes verbosReccion, en data-verbos.js)

   CONVENCIONES
   · Todo el ruso lleva acento (U+0301), salvo palabras de una sola
     vocal o con ё. Para la voz se envía sin la marca.
   · Español rioplatense. Redacción propia de AZBUKA
     (CC BY-NC-ND 4.0, ver LICENSE-CONTENT).
   · ejemplos de casos y formas: [ruso, español, explicación], con la
     palabra en el caso entre llaves {…}. Los de rección siguen siendo
     pares [ruso, español].
   ============================================================ */

/* ── LOS 6 CASOS ──────────────────────────────────────────────
   id           clave usada por data-casos.js y por la rección
   nombre       nombre en español
   ru           nombre en ruso
   abrev        abreviatura para tablas
   preguntas    preguntas típicas del caso
   resumen      una o dos oraciones: para qué sirve
   usos         lista de usos: [título, ejemplo ruso, traducción, explicación]
   preposiciones  [preposición, significado] que piden este caso
   ejemplos     frases completas: [ruso, traducción, explicación]
   En el ruso de usos y ejemplos, la palabra que está en el caso va
   entre llaves: кни́га {бра́та}. La página la resalta y la explicación
   dice de qué forma viene y por qué va en ese caso. Las llaves no se
   leen en voz alta.                                              */
const GRAMATICA_CASOS = {
 nominativo: {
  id: "nominativo", nombre: "Nominativo", ru: "имени́тельный паде́ж", abrev: "Nom.",
  preguntas: "кто? что?",
  resumen: "Es la forma de diccionario. Se usa para el sujeto: quién o qué hace la acción, o de quién o de qué se habla.",
  usos: [
   ["Sujeto de la oración","{Ма́ма} чита́ет.","Mamá lee.","ма́ма va en nominativo, la forma de diccionario, porque es quien lee: el sujeto."],
   ["Para presentar algo con э́то","Э́то мой {брат}.","Este es mi hermano.","брат queda en la forma de diccionario: después de э́то se nombra lo que se presenta."],
   ["Lo que se tiene, con у меня́ есть","У меня́ есть {соба́ка}.","Tengo un perro.","соба́ка va en nominativo: en ruso lo que se tiene es el sujeto («en mí hay un perro»)."]
  ],
  preposiciones: [],
  ejemplos: [
   ["Где {ма́ма}?","¿Dónde está mamá?","ма́ма es el sujeto: nominativo."],
   ["Э́то моя́ {кни́га}.","Este es mi libro.","кни́га es lo que se presenta: nominativo. моя́ concuerda con ella en femenino."]
  ]
 },
 genitivo: {
  id: "genitivo", nombre: "Genitivo", ru: "роди́тельный паде́ж", abrev: "Gen.",
  preguntas: "кого́? чего́?",
  resumen: "Indica de quién o de qué es algo («de»), lo que falta o no hay, y las cantidades. Es el caso con más preposiciones.",
  usos: [
   ["Pertenencia: «de»","кни́га {бра́та}","el libro del hermano","брат → бра́та (masculino: se agrega -а). Dice de quién es el libro."],
   ["Lo que no hay, con нет","У меня́ нет {вре́мени}.","No tengo tiempo.","вре́мя → вре́мени (neutro irregular en -мя). Lo que no hay va en genitivo después de нет."],
   ["Cantidades: мно́го, ма́ло, ско́лько, не́сколько","мно́го {люде́й}","mucha gente","лю́ди → люде́й. Después de мно́го, lo que se cuenta va en genitivo plural."],
   ["Después de 2, 3 y 4 va el genitivo singular","два {бра́та}","dos hermanos","брат → бра́та: genitivo singular, porque va después de два."],
   ["Desde 5 en adelante va el genitivo plural","пять {книг}","cinco libros","кни́га → книг: el genitivo plural no tiene terminación (se cae la -а). Va así después de пять."]
  ],
  preposiciones: [
   ["без","sin"], ["для","para"], ["до","hasta, antes de"], ["из","de (desde adentro)"], ["от","de (de parte de alguien), desde"], ["у","junto a, en lo de; у меня́ = yo tengo"], ["с","desde (de arriba de)"], ["о́коло","cerca de"], ["по́сле","después de"], ["кро́ме","excepto, además de"], ["вокру́г","alrededor de"], ["ми́мо","por al lado de"], ["про́тив","contra"], ["из-за","por culpa de, de atrás de"], ["из-под","de debajo de"]
  ],
  ejemplos: [
   ["Э́то дом {моего́ дру́га}.","Esta es la casa de mi amigo.","мой друг → моего́ дру́га: el posesivo (-его́) y el sustantivo (-а) van los dos en genitivo. Dice de quién es la casa."],
   ["Я пью ко́фе без {са́хара}.","Tomo café sin azúcar.","са́хар → са́хара: без siempre pide genitivo."]
  ]
 },
 dativo: {
  id: "dativo", nombre: "Dativo", ru: "да́тельный паде́ж", abrev: "Dat.",
  preguntas: "кому́? чему́?",
  resumen: "Indica a quién va dirigida la acción: el destinatario («a» o «le» en español). También se usa para decir lo que alguien siente o necesita.",
  usos: [
   ["Destinatario: a quién se da, se dice o se escribe","Я пишу́ {ма́ме}.","Le escribo a mamá.","ма́ма → ма́ме (femenino: la -а pasa a -е). Es a quién le escribo."],
   ["La edad","{Мне} два́дцать лет.","Tengo veinte años.","я → мне. La persona que tiene la edad va en dativo."],
   ["Lo que alguien siente o necesita","{Мне} хо́лодно.","Tengo frío.","я → мне. Quien siente algo va en dativo: literalmente, «a mí hace frío»."],
   ["Lo que a alguien le gusta, con нра́виться","{Мне} нра́вится му́зыка.","Me gusta la música.","я → мне. Con нра́виться, la persona a la que le gusta algo va en dativo, y lo que gusta (му́зыка) es el sujeto."]
  ],
  preposiciones: [
   ["к","hacia, a lo de (una persona)"], ["по","por, a lo largo de; по телефо́ну = por teléfono"], ["благодаря́","gracias a"]
  ],
  ejemplos: [
   ["Я звоню́ {дру́гу}.","Llamo a mi amigo.","друг → дру́гу (masculino: se agrega -у). Звони́ть pide dativo: a quién llamo."],
   ["Мы идём к {врачу́}.","Vamos al médico.","врач → врачу́: к siempre pide dativo."]
  ]
 },
 acusativo: {
  id: "acusativo", nombre: "Acusativo", ru: "вини́тельный паде́ж", abrev: "Ac.",
  preguntas: "кого́? что?",
  resumen: "Es el complemento directo: la cosa o la persona que recibe la acción. Con в y на indica hacia dónde se va.",
  usos: [
   ["Complemento directo","Я чита́ю {кни́гу}.","Leo un libro.","кни́га → кни́гу (femenino: la -а pasa a -у). Es lo que leo: el complemento directo."],
   ["Dirección con в / на (¿adónde?)","Я иду́ в {шко́лу}.","Voy a la escuela.","шко́ла → шко́лу. в + acusativo indica adónde voy (hay movimiento)."],
   ["Duración o momento","Я рабо́тал {всю неде́лю}.","Trabajé toda la semana.","вся неде́ля → всю неде́лю: cuánto duró algo va en acusativo, sin preposición."]
  ],
  preposiciones: [
   ["в","a, hacia adentro de (dirección)"], ["на","a, hacia (dirección); para (un tiempo)"], ["за","por (a cambio de)"], ["че́рез","a través de; dentro de (tiempo)"], ["про","sobre, acerca de (coloquial)"]
  ],
  ejemplos: [
   ["Я ви́жу {ма́му}.","Veo a mamá.","ма́ма → ма́му: es a quién veo, el complemento directo."],
   ["Положи́ кни́гу на {стол}.","Poné el libro en la mesa.","стол no cambia: en masculino inanimado el acusativo es igual al nominativo. на + acusativo dice adónde lo ponés."]
  ]
 },
 instrumental: {
  id: "instrumental", nombre: "Instrumental", ru: "твори́тельный паде́ж", abrev: "Instr.",
  preguntas: "кем? чем?",
  resumen: "Indica con qué se hace algo y con quién (con с). También qué es o en qué se convierte alguien.",
  usos: [
   ["Instrumento: con qué","Я пишу́ {ру́чкой}.","Escribo con birome.","ру́чка → ру́чкой (femenino: la -а pasa a -ой). Es con qué escribo."],
   ["Compañía, con с","Я гуля́ю с {дру́гом}.","Paseo con un amigo.","друг → дру́гом (masculino: se agrega -ом). с «con» pide instrumental."],
   ["Profesión o estado, con рабо́тать, быть, стать","Он рабо́тает {врачо́м}.","Trabaja de médico.","врач → врачо́м. Con рабо́тать, la profesión va en instrumental."],
   ["Momentos del día y estaciones","{у́тром}, {ле́том}","a la mañana, en verano","у́тро → у́тром, ле́то → ле́том: estos instrumentales funcionan como «a la mañana» o «en verano»."]
  ],
  preposiciones: [
   ["с","con"], ["над","sobre, encima de"], ["под","debajo de (ubicación)"], ["пе́ред","delante de, antes de"], ["за","detrás de (ubicación)"], ["ме́жду","entre"]
  ],
  ejemplos: [
   ["Мы еди́м суп {ло́жкой}.","Tomamos la sopa con cuchara.","ло́жка → ло́жкой: con qué tomamos la sopa."],
   ["Ла́мпа виси́т над {столо́м}.","La lámpara cuelga sobre la mesa.","стол → столо́м: над siempre pide instrumental."]
  ]
 },
 preposicional: {
  id: "preposicional", nombre: "Preposicional", ru: "предло́жный паде́ж", abrev: "Prep.",
  preguntas: "о ком? о чём? где?",
  resumen: "Siempre va con preposición. Indica dónde está algo (con в o на) o de qué se habla (con о).",
  usos: [
   ["Ubicación con в / на (¿dónde?)","Я живу́ в {Москве́}.","Vivo en Moscú.","Москва́ → Москве́ (la -а pasa a -е). в + preposicional indica dónde (sin movimiento)."],
   ["Tema con о / об: de qué se habla o se piensa","Мы говори́м о {фи́льме}.","Hablamos de la película.","фильм → фи́льме (se agrega -е). о + preposicional indica de qué se habla."],
   ["Medio de transporte con на","Я е́ду на {авто́бусе}.","Voy en colectivo.","авто́бус → авто́бусе. на + preposicional: en qué medio de transporte voy."]
  ],
  preposiciones: [
   ["в","en (adentro de)"], ["на","en, sobre (superficie o evento)"], ["о / об / обо","sobre, acerca de"], ["при","en presencia de, en tiempos de"]
  ],
  ejemplos: [
   ["Кни́га лежи́т на {столе́}.","El libro está sobre la mesa.","стол → столе́: на + preposicional dice dónde está (sin movimiento)."],
   ["Я ду́маю о {тебе́}.","Pienso en vos.","ты → тебе́: о + preposicional dice en qué o en quién pienso."]
  ]
 }
};
const GRAMATICA_CASOS_ORDEN = ["nominativo", "genitivo", "dativo", "acusativo", "instrumental", "preposicional"];

/* ── FORMAS ESPECIALES DE LA DECLINACIÓN ─────────────────────
   Explican los campos extra de data-casos.js y las reglas que la
   página de Casos muestra junto a las tablas.                      */
const GRAMATICA_FORMAS = {
 acusativoAnimado: {
  titulo: "Acusativo: personas y animales",
  texto: "En el acusativo importa si la palabra es de una persona o de un animal (animada) o de una cosa (inanimada). En el masculino singular y en todo el plural, lo animado toma la forma del genitivo y lo inanimado la del nominativo. Por eso las tablas de adjetivos y determinantes muestran dos acusativos.",
  ejemplos: [
   ["Я ви́жу {стол}.","Veo la mesa.","стол es inanimado: el acusativo es igual al nominativo."],
   ["Я ви́жу {бра́та}.","Veo a mi hermano.","брат es animado: el acusativo es igual al genitivo (бра́та)."],
   ["Я ви́жу {но́вых друзе́й}.","Veo a los amigos nuevos.","но́вые друзья́ → но́вых друзе́й: en el plural animado, adjetivo y sustantivo toman la forma del genitivo."]
  ]
 },
 locativo: {
  titulo: "Locativo (в лесу́, на полу́)",
  texto: "Algunos sustantivos masculinos tienen una forma especial terminada en -у́ (siempre acentuada) para decir dónde está algo. Solo aparece con в o на y con sentido de lugar. Para hablar de algo (con о) se usa el preposicional normal. Cada palabra lleva siempre la misma preposición, por eso se guarda junto con ella.",
  ejemplos: [
   ["Мы гуля́ем в {лесу́}.","Paseamos por el bosque.","лес → в лесу́: forma especial de lugar, con la -у́ acentuada."],
   ["Мы говори́м о {ле́се}.","Hablamos del bosque.","Para hablar del bosque se usa el preposicional normal: о ле́се."],
   ["Ко́шка спит на {полу́}.","El gato duerme en el piso.","пол → на полу́: locativo, siempre con на."]
  ]
 },
 partitivo: {
  titulo: "Partitivo (coloquial)",
  texto: "Algunos sustantivos masculinos de cosas que no se cuentan tienen un genitivo alternativo terminado en -у / -ю, con el sentido de «un poco de». Es coloquial: el genitivo normal siempre es correcto. También aparece en algunas expresiones fijas.",
  ejemplos: [
   ["ча́шка {ча́ю}","una taza de té","чай → ча́ю: partitivo coloquial, «un poco de té». También se puede decir ча́шка ча́я."],
   ["Доба́вь {са́хару}.","Agregá un poco de azúcar.","са́хар → са́хару: partitivo, «un poco de azúcar». El genitivo normal también sirve: доба́вь са́хара."],
   ["из {до́му}","de casa (expresión fija)","дом → до́му: expresión fija. Hoy es más común из до́ма."]
  ]
 },
 formaCorta: {
  titulo: "Forma corta de los adjetivos",
  texto: "Muchos adjetivos tienen una forma corta que va después del sujeto, como predicado, y no se declina: solo cambia por género y número. Algunas son muy comunes desde el principio, como гото́в (listo), рад (contento), до́лжен (tener que) o прав (tener razón).",
  ejemplos: [
   ["Он {гото́в}.","Él está listo.","гото́вый → гото́в: forma corta masculina, va como predicado."],
   ["Она́ {гото́ва}.","Ella está lista.","Forma corta femenina: se agrega -а."],
   ["Мы {должны́} идти́.","Tenemos que irnos.","до́лжен → должны́: forma corta plural. Va con el infinitivo (идти́)."]
  ]
 },
 numerales: {
  titulo: "Números y casos",
  texto: "El número decide el caso del sustantivo que lo sigue: después de 1 va el nominativo singular; después de 2, 3 y 4, el genitivo singular; desde 5 en adelante, el genitivo plural. Cuenta la última cifra: 21 va como 1, 22 como 2 y 25 como 5 (salvo 11 a 14, que van como 5).",
  ejemplos: [
   ["оди́н {брат}","un hermano","Después de 1 va el nominativo singular."],
   ["два {бра́та}","dos hermanos","Después de 2, 3 y 4 va el genitivo singular: бра́та."],
   ["пять {бра́тьев}","cinco hermanos","Desde 5 va el genitivo plural: бра́тья → бра́тьев."],
   ["два́дцать оди́н {год}","veintiún años","Cuenta la última cifra: 21 termina en 1, así que va en nominativo singular."]
  ]
 },
 pronombreN: {
  titulo: "Pronombres con н- después de preposición",
  texto: "Los pronombres de tercera persona (он, она́, оно́, они́) agregan una н- al principio cuando van después de una preposición. Sin preposición no llevan н-. En el preposicional siempre hay preposición, por eso esa forma empieza siempre con н-.",
  ejemplos: [
   ["Я ви́жу {его́}.","Lo veo.","Sin preposición: его́, sin н-."],
   ["Я иду́ к {нему́}.","Voy hacia él.","Con la preposición к: ему́ → нему́."],
   ["Мы говори́м о {ней}.","Hablamos de ella.","Preposicional, que siempre lleva preposición: ней."],
   ["У {них} есть маши́на.","Ellos tienen auto.","Con у: их → них."]
  ]
 },
 indeclinable: {
  titulo: "Palabras que no se declinan",
  texto: "Algunas palabras, casi todas tomadas de otros idiomas, tienen la misma forma en todos los casos.",
  ejemplos: [
   ["Я пью {ко́фе}.","Tomo café.","ко́фе no cambia: acá está en acusativo, pero se ve igual."],
   ["Мы е́дем на {метро́}.","Vamos en subte.","метро́ no cambia: acá está en preposicional."]
  ]
 }
};

/* ── RECCIÓN DE LOS VERBOS ────────────────────────────────────
   Un grupo por construcción. titulo = cómo se muestra;
   caso = id en GRAMATICA_CASOS (null si la construcción no es un
   caso: infinitivo, adverbio, cantidad…); prep = preposición;
   preguntas = cómo aparece en el campo Governance del léxico;
   explicacion = qué verbos la piden (la explicación general del
   caso vive en GRAMATICA_CASOS, no se repite acá).                 */
const GRAMATICA_RECCION = {
 acusativo: { titulo: "Acusativo", caso: "acusativo", prep: null, preguntas: "кого́? что?", explicacion: "Es el complemento directo: la cosa o la persona que recibe la acción («¿qué?» o «¿a quién?»).",
   ejemplos: [["Я чита́ю кни́гу.", "Leo un libro."], ["Я ви́жу ма́му.", "Veo a mamá."]] },
 genitivo: { titulo: "Genitivo", caso: "genitivo", prep: null, preguntas: "кого́? чего́?", explicacion: "Algunos verbos piden genitivo en vez de acusativo: sobre todo los de miedo, espera, búsqueda o falta.",
   ejemplos: [["Я жду отве́та.", "Espero una respuesta."], ["Он бои́тся темноты́.", "Le tiene miedo a la oscuridad."]] },
 dativo: { titulo: "Dativo", caso: "dativo", prep: null, preguntas: "кому́? чему́?", explicacion: "Indica a quién va dirigida la acción: el destinatario (en español suele llevar «a» o «le»).",
   ejemplos: [["Я звоню́ ма́ме.", "Llamo a mamá."], ["Он помога́ет дру́гу.", "Ayuda a su amigo."]] },
 instrumental: { titulo: "Instrumental", caso: "instrumental", prep: null, preguntas: "кем? чем?", explicacion: "Indica con qué se hace algo, o en qué se convierte o de qué trabaja alguien.",
   ejemplos: [["Я пишу́ ру́чкой.", "Escribo con birome."], ["Он рабо́тает врачо́м.", "Trabaja de médico."]] },
 o_prep: { titulo: "о + preposicional", caso: "preposicional", prep: "о", preguntas: "о ком? о чём?", explicacion: "Indica de qué o de quién se habla, se piensa o se sabe algo.",
   ejemplos: [["Мы говори́м о фи́льме.", "Hablamos de la película."], ["Я ду́маю о тебе́.", "Pienso en vos."]] },
 na_acc: { titulo: "на + acusativo", caso: "acusativo", prep: "на", preguntas: "на кого? на что?", explicacion: "Indica hacia qué o hacia quién se dirige la acción (mirar a, contar con, enojarse con…).",
   ejemplos: [["Я смотрю́ на не́бо.", "Miro el cielo."], ["Я наде́юсь на тебя́.", "Cuento con vos."]] },
 na_prep: { titulo: "на + preposicional", caso: "preposicional", prep: "на", preguntas: "на ком? на чём?", explicacion: "Indica sobre qué o en qué se apoya la acción. También se usa para tocar instrumentos y para casarse (un hombre).",
   ejemplos: [["Он игра́ет на гита́ре.", "Toca la guitarra."], ["Он жени́лся на А́не.", "Se casó con Ana."]] },
 v_acc: { titulo: "в + acusativo", caso: "acusativo", prep: "в", preguntas: "в кого? во что?", explicacion: "Indica hacia adentro de qué va la acción, o en qué se cree. También se usa para jugar juegos y deportes.",
   ejemplos: [["Я ве́рю в тебя́.", "Creo en vos."], ["Де́ти игра́ют в футбо́л.", "Los chicos juegan al fútbol."]] },
 v_prep: { titulo: "в + preposicional", caso: "preposicional", prep: "в", preguntas: "в ком? в чём?", explicacion: "Indica en qué terreno o asunto ocurre la acción (dudar de algo, ayudar en algo…).",
   ejemplos: [["Я сомнева́юсь в э́том.", "Lo dudo."], ["Она́ помога́ет мне в рабо́те.", "Me ayuda en el trabajo."]] },
 s_instr: { titulo: "с + instrumental", caso: "instrumental", prep: "с", preguntas: "с кем? с чем?", explicacion: "Indica compañía: con quién o con qué.",
   ejemplos: [["Я говорю́ с дру́гом.", "Hablo con un amigo."], ["Мы встре́тились с друзья́ми.", "Nos encontramos con amigos."]] },
 s_gen: { titulo: "с + genitivo", caso: "genitivo", prep: "с", preguntas: "с кого? с чего?", explicacion: "Indica el punto de partida: desde dónde, a partir de qué, o de arriba de qué se saca algo.",
   ejemplos: [["Начнём с нача́ла.", "Empecemos desde el principio."], ["Он верну́лся с рабо́ты.", "Volvió del trabajo."]] },
 k_dat: { titulo: "к + dativo", caso: "dativo", prep: "к", preguntas: "к кому? к чему?", explicacion: "Indica hacia quién o hacia qué se va o se acerca uno (también en sentido figurado).",
   ejemplos: [["Я иду́ к врачу́.", "Voy al médico."], ["Мы привы́кли к хо́лоду.", "Nos acostumbramos al frío."]] },
 ot_gen: { titulo: "от + genitivo", caso: "genitivo", prep: "от", preguntas: "от кого? от чего?", explicacion: "Indica de quién o de qué viene algo, o de qué se aleja, se protege o se cansa uno.",
   ejemplos: [["Я получи́л письмо́ от ма́мы.", "Recibí una carta de mamá."], ["Он уста́л от рабо́ты.", "Se cansó del trabajo."]] },
 za_acc: { titulo: "за + acusativo", caso: "acusativo", prep: "за", preguntas: "за кого? за что?", explicacion: "Indica el motivo o a cambio de qué: agradecer por, pagar por, votar por.",
   ejemplos: [["Я благодарю́ тебя́ за по́мощь.", "Te agradezco la ayuda."], ["Я плачу́ за ко́фе.", "Pago el café."]] },
 za_instr: { titulo: "за + instrumental", caso: "instrumental", prep: "за", preguntas: "за кем? за чем?", explicacion: "Indica lo que se sigue, se vigila o se va a buscar.",
   ejemplos: [["Я иду́ за хле́бом.", "Voy a buscar pan."], ["Следи́ за ребёнком.", "Vigilá al nene."]] },
 u_gen: { titulo: "у + genitivo", caso: "genitivo", prep: "у", preguntas: "у кого? у чего?", explicacion: "Indica de quién se recibe algo: a quién se le pregunta, se le pide o de quién se aprende.",
   ejemplos: [["Я спроси́л у учи́теля.", "Le pregunté al profesor."], ["Я учу́сь у ма́мы.", "Aprendo de mamá."]] },
 nad_instr: { titulo: "над + instrumental", caso: "instrumental", prep: "над", preguntas: "над кем? над чем?", explicacion: "Indica sobre qué se trabaja o se piensa, o de quién uno se ríe.",
   ejemplos: [["Он рабо́тает над прое́ктом.", "Trabaja en un proyecto."], ["Не сме́йся надо мной.", "No te rías de mí."]] },
 do_gen: { titulo: "до + genitivo", caso: "genitivo", prep: "до", preguntas: "до кого? до чего?", explicacion: "Indica el límite: hasta dónde o hasta quién se llega.",
   ejemplos: [["Мы дошли́ до па́рка.", "Llegamos hasta el parque."], ["Я не могу́ дозвони́ться до него́.", "No logro comunicarme con él."]] },
 iz_gen: { titulo: "из + genitivo", caso: "genitivo", prep: "из", preguntas: "из кого? из чего?", explicacion: "Indica de adentro de dónde sale algo, o de qué está hecho.",
   ejemplos: [["Он вы́шел из до́ма.", "Salió de casa."], ["Суп де́лают из овоще́й.", "La sopa se hace con verduras."]] },
 po_dat: { titulo: "по + dativo", caso: "dativo", prep: "по", preguntas: "по кому? по чему?", explicacion: "Indica por dónde se mueve uno, o a quién se extraña.",
   ejemplos: [["Я скуча́ю по тебе́.", "Te extraño."], ["Он гуля́ет по па́рку.", "Pasea por el parque."]] },
 mimo_gen: { titulo: "ми́мо + genitivo", caso: "genitivo", prep: "ми́мо", preguntas: "мимо кого? мимо чего?", explicacion: "Indica que se pasa por al lado de algo o de alguien, sin detenerse.",
   ejemplos: [["Мы прошли́ ми́мо магази́на.", "Pasamos por al lado del negocio."]] },
 ob_acc: { titulo: "о (обо) + acusativo", caso: "acusativo", prep: "о", preguntas: "обо что?", explicacion: "Indica contra qué se choca o se golpea algo.",
   ejemplos: [["Он уда́рился голово́й о дверь.", "Se golpeó la cabeza contra la puerta."]] },
 cherez_acc: { titulo: "че́рез + acusativo", caso: "acusativo", prep: "че́рез", preguntas: "через что?", explicacion: "Indica que se atraviesa algo: a través de, de un lado al otro.",
   ejemplos: [["Мы перешли́ че́рез у́лицу.", "Cruzamos la calle."]] },
 protiv_gen: { titulo: "про́тив + genitivo", caso: "genitivo", prep: "про́тив", preguntas: "против кого? против чего?", explicacion: "Indica oposición: contra quién o contra qué.",
   ejemplos: [["Они́ игра́ют про́тив нас.", "Juegan contra nosotros."]] },
 bez_gen: { titulo: "без + genitivo", caso: "genitivo", prep: "без", preguntas: "без кого? без чего?", explicacion: "Indica ausencia: sin quién o sin qué.",
   ejemplos: [["Я не могу́ жить без му́зыки.", "No puedo vivir sin música."]] },
 infinitivo: { titulo: "+ infinitivo", caso: null, prep: null, preguntas: "делать что? сделать что?", explicacion: "El verbo va seguido de otro verbo en infinitivo. «делать что?» admite cualquier aspecto; «сделать что?» pide un infinitivo perfectivo.",
   ejemplos: [["Я люблю́ чита́ть.", "Me encanta leer."], ["Я успе́л зако́нчить рабо́ту.", "Llegué a terminar el trabajo."]] },
 donde: { titulo: "Lugar (dónde)", caso: "preposicional", prep: null, preguntas: "где?", explicacion: "Indica dónde ocurre la acción, sin movimiento. Se construye con в / на + preposicional.",
   ejemplos: [["Я живу́ в Москве́.", "Vivo en Moscú."], ["Кни́га лежи́т на столе́.", "El libro está sobre la mesa."]] },
 adonde: { titulo: "Dirección (adónde)", caso: "acusativo", prep: null, preguntas: "куда?", explicacion: "Indica hacia dónde va el movimiento. Se construye con в / на + acusativo (o к + dativo si es una persona).",
   ejemplos: [["Я иду́ в шко́лу.", "Voy a la escuela."], ["Положи́ кни́гу на стол.", "Poné el libro en la mesa."]] },
 dedonde: { titulo: "Origen (de dónde)", caso: "genitivo", prep: null, preguntas: "откуда?", explicacion: "Indica de dónde viene el movimiento. Se construye con из / с / от + genitivo.",
   ejemplos: [["Мы прие́хали из Испа́нии.", "Llegamos de España."], ["Он верну́лся с рабо́ты.", "Volvió del trabajo."]] },
 modo: { titulo: "Modo (cómo)", caso: null, prep: null, preguntas: "как?", explicacion: "El verbo va acompañado de un adverbio o una expresión que dice cómo.",
   ejemplos: [["Я чу́вствую себя́ хорошо́.", "Me siento bien."]] },
 cantidad: { titulo: "Cantidad (cuánto)", caso: null, prep: null, preguntas: "сколько? сколько времени? на сколько?", explicacion: "El verbo va acompañado de una cantidad: un precio, un tiempo o una diferencia.",
   ejemplos: [["Кни́га сто́ит сто рубле́й.", "El libro cuesta cien rublos."], ["Це́ны вы́росли на де́сять проце́нтов.", "Los precios subieron un diez por ciento."]] },
 sebya: { titulo: "Reflexivo себя́", caso: null, prep: null, preguntas: "себя", explicacion: "El verbo va con el pronombre себя́ («a sí mismo»), que se declina según el caso.",
   ejemplos: [["Он лю́бит то́лько себя́.", "Solo se quiere a sí mismo."]] }
};

/* Pregunta del léxico → grupo. "кого" no está porque depende de su
   vecina: junto a "чего" es genitivo; en cualquier otro caso,
   acusativo. Las claves van sin acento, tal como las trae el léxico. */
const GRAMATICA_RECCION_TOKENS = {
 "без кого": "bez_gen", "без чего": "bez_gen",
 "в кого": "v_acc", "в ком": "v_prep", "в чём": "v_prep", "во что": "v_acc",
 "где": "donde", "делать что": "infinitivo",
 "до кого": "do_gen", "до чего": "do_gen",
 "за кем": "za_instr", "за кого": "za_acc", "за чем": "za_instr", "за что": "za_acc",
 "из кого": "iz_gen", "из чего": "iz_gen",
 "к кому": "k_dat", "к чему": "k_dat",
 "как": "modo", "кем": "instrumental", "кому": "dativo", "куда": "adonde",
 "мимо кого": "mimo_gen", "мимо чего": "mimo_gen",
 "на кого": "na_acc", "на ком": "na_prep", "на сколько": "cantidad", "на что": "na_acc", "на чём": "na_prep",
 "над кем": "nad_instr", "над чем": "nad_instr",
 "о ком": "o_prep", "о чём": "o_prep", "обо что": "ob_acc",
 "от кого": "ot_gen", "от чего": "ot_gen", "откуда": "dedonde",
 "по кому": "po_dat", "по чему": "po_dat",
 "против кого": "protiv_gen", "против чего": "protiv_gen",
 "с кем": "s_instr", "с кого": "s_gen", "с чего": "s_gen", "с чем": "s_instr",
 "сделать что": "infinitivo", "себя": "sebya",
 "сколько": "cantidad", "сколько времени": "cantidad",
 "у кого": "u_gen", "у чего": "u_gen",
 "чего": "genitivo", "чем": "instrumental", "чему": "dativo",
 "через что": "cherez_acc", "что": "acusativo"
};

/* ── GUÍA: CÓMO FUNCIONAN LOS CASOS ──────────────────────────
   La explicación larga que se abre desde la portada de Casos
   (botón «Cómo funcionan los casos») y desde cada hoja de caso
   («Explicación completa»). Enlace directo: casos.html?guia=<id>.

   capitulos: lista ordenada. Cada capítulo:
     id       clave (para ?guia=<id>)
     grupo    título del grupo en el índice
     titulo   título del capítulo
     sub      subtítulo (opcional; en los casos sale de GRAMATICA_CASOS)
     desc     una línea para el índice
     caso     (opcional) id de GRAMATICA_CASOS: la página toma de ahí
              el nombre ruso, las preguntas y las preposiciones
     bloques  contenido, en orden. Tipos:
       { t:"texto", texto }                  párrafo
       { t:"lbl", texto }                    título de sección
       { t:"nota", texto }                   recuadro con borde dorado
       { t:"flujo", pasos:[[etiqueta, valor]] }
                                             diagrama de pasos con flechas
       { t:"tabla", cols:[…], filas:[[…]] }  tabla simple
       { t:"par", bien:[ru, es], mal:[ru, por] }
                                             frase correcta ✔ y error típico ✘
       { t:"ejemplos", items:[[ru, es, explicación, título?]] }
       { t:"practica", items:[{ ru, base, op, ok, caso, es, por }] }
              ru   frase con ___ en el hueco
              base la palabra en nominativo (tiene que estar en CASOS)
              op   opciones (formas reales de la palabra)
              ok   la correcta (la forma de CASOS en ese caso)
   En cualquier texto, el ruso entre llaves {…} se resalta en dorado.
   Todas las formas están verificadas contra data-casos.js.          */
const GRAMATICA_GUIA = {
 titulo: "Cómo funcionan los casos",
 intro: "Una guía para entender por qué las palabras rusas cambian, cómo saber qué caso usar y dónde el español te puede confundir. Cada parte tiene ejemplos traducidos y, al final, práctica.",
 capitulos: [

 /* ─── Lo básico ─── */
 {
  id: "preguntas", grupo: "Lo básico",
  titulo: "Las preguntas de los casos", sub: "вопро́сы падеже́й",
  desc: "Cada caso responde a una pregunta. Así sabés qué terminación usar.",
  bloques: [
   { t: "texto", texto: "En español, la función de una palabra se marca con el orden y con preposiciones: «a mamá», «de mamá», «con mamá». En ruso se marca con la terminación: {ма́ме}, {ма́мы}, {ма́мой}. Para elegir la terminación, los rusos se hacen una pregunta, y cada pregunta corresponde a un caso." },
   { t: "tabla", cols: ["Caso", "Pregunta", "En español"], filas: [
    ["Nominativo", "кто? что?", "¿quién? ¿qué? (el sujeto)"],
    ["Genitivo", "кого́? чего́?", "¿de quién? ¿de qué?"],
    ["Dativo", "кому́? чему́?", "¿a quién? (le)"],
    ["Acusativo", "кого́? что?", "¿a quién? ¿qué? (lo, la)"],
    ["Instrumental", "кем? чем?", "¿con quién? ¿con qué?"],
    ["Preposicional", "о ком? о чём?", "¿de quién? ¿de qué? (hablar de…)"]
   ] },
   { t: "lbl", texto: "Por qué funcionan" },
   { t: "texto", texto: "Las preguntas son las mismas palabras кто («quién») y что («qué») declinadas. Кто cambia así: кто → {кого́} → {кому́} → {кем} → о {ком}. Что cambia así: что → {чего́} → {чему́} → {чем} → о {чём}. Por eso sirven de modelo: la pregunta ya tiene el caso adentro." },
   { t: "lbl", texto: "La regla de oro" },
   { t: "nota", texto: "La respuesta va en el mismo caso que la pregunta. Si la pregunta es кому́? (dativo), la respuesta también va en dativo." },
   { t: "ejemplos", items: [
    ["{Кого́} ты ви́дишь? — Я ви́жу {ма́му}.", "¿A quién ves? — Veo a mamá.", "кого́? con что? es acusativo. La respuesta también: ма́ма → ма́му."],
    ["{Кому́} ты пи́шешь? — {Бра́ту}.", "¿A quién le escribís? — A mi hermano.", "кому́? es dativo, y la respuesta también: брат → бра́ту."],
    ["С {кем} ты идёшь? — С {подру́гой}.", "¿Con quién vas? — Con una amiga.", "с кем? es instrumental, y la respuesta también: подру́га → подру́гой."]
   ] },
   { t: "lbl", texto: "Ojo con кого́?" },
   { t: "nota", texto: "кого́? aparece dos veces: en genitivo y en acusativo. Para saber cuál es, mirá con qué va: «кого́? чего́?» es genitivo y «кого́? что?» es acusativo. Así aparece en las fichas de Verbos." }
  ]
 },
 {
  id: "reccion", grupo: "Lo básico",
  titulo: "Qué es la rección", sub: "управле́ние",
  desc: "Los verbos y las preposiciones deciden el caso. Cómo usar esa información.",
  bloques: [
   { t: "texto", texto: "Rección (en ruso управле́ние, «gobierno») quiere decir que una palabra decide el caso de la que viene después. Los verbos y las preposiciones «rigen» un caso: no lo elegís vos, viene con el verbo." },
   { t: "texto", texto: "En la ficha de cada verbo, en Verbos, aparece «Rige:» con su pregunta. Esa pregunta es la instrucción: te dice en qué caso va lo que sigue." },
   { t: "lbl", texto: "Cómo se usa, paso a paso" },
   { t: "flujo", pasos: [
    ["1 · El verbo", "помога́ть (ayudar)"],
    ["2 · Su pregunta, en Verbos", "кому́?"],
    ["3 · El caso", "dativo"],
    ["4 · La palabra, en Casos", "ма́ма → {ма́ме}"],
    ["5 · La frase", "Я помога́ю {ма́ме}. (Ayudo a mamá.)"]
   ] },
   { t: "lbl", texto: "Las preposiciones también rigen" },
   { t: "tabla", cols: ["Preposición", "Caso", "Ejemplo"], filas: [
    ["без (sin)", "genitivo", "без {са́хара}"],
    ["к (hacia)", "dativo", "к {врачу́}"],
    ["в (adónde)", "acusativo", "в {шко́лу}"],
    ["с (con)", "instrumental", "с {дру́гом}"],
    ["в (dónde)", "preposicional", "в {шко́ле}"],
    ["о (sobre)", "preposicional", "о {фи́льме}"]
   ] },
   { t: "texto", texto: "в y на rigen dos casos según el sentido: acusativo si hay movimiento (куда́? ¿adónde?) y preposicional si no lo hay (где? ¿dónde?)." },
   { t: "ejemplos", items: [
    ["Я иду́ в {шко́лу}.", "Voy a la escuela.", "Hay movimiento, куда́?: в + acusativo."],
    ["Я в {шко́ле}.", "Estoy en la escuela.", "No hay movimiento, где?: в + preposicional."]
   ] },
   { t: "lbl", texto: "Por qué no alcanza con traducir" },
   { t: "nota", texto: "En español, «veo a mamá» y «ayudo a mamá» tienen la misma forma. En ruso piden casos distintos: ви́жу {ма́му} (acusativo) y помога́ю {ма́ме} (dativo). La única forma segura es preguntarle al verbo, no al español." }
  ]
 },

 /* ─── Los 6 casos ─── */
 {
  id: "nominativo", grupo: "Los 6 casos", caso: "nominativo",
  titulo: "Nominativo", desc: "El sujeto: quién hace la acción. La forma de diccionario.",
  bloques: [
   { t: "texto", texto: "Es el sujeto: quien hace la acción o de quien se habla. Es la forma que aparece en el diccionario, así que no hay que cambiar nada." },
   { t: "flujo", pasos: [
    ["En español", "Mamá lee."],
    ["Pregunta", "кто чита́ет? (¿quién lee?)"],
    ["Caso", "nominativo, sin cambios"],
    ["En ruso", "{Ма́ма} чита́ет."]
   ] },
   { t: "ejemplos", items: [
    ["{Брат} рабо́тает.", "Mi hermano trabaja.", "брат es quien trabaja: el sujeto."],
    ["Э́то мой {друг}.", "Este es mi amigo.", "Después de э́то se nombra lo que se presenta, en nominativo."],
    ["Где {кни́га}?", "¿Dónde está el libro?", "кни́га es el sujeto de la pregunta."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["У меня́ есть {соба́ка}.", "Tengo un perro."], mal: ["У меня́ есть соба́ку.", "En español el perro es lo que tengo (complemento directo). En ruso se dice «en mí hay un perro»: el perro es el sujeto, en nominativo."] },
   { t: "par", bien: ["Мне нра́вится {му́зыка}.", "Me gusta la música."], mal: ["Мне нра́вится му́зыку.", "Igual que en español, lo que gusta es el sujeto: «la música me gusta». Va en nominativo."] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "У меня́ есть ___.", base: "маши́на", op: ["маши́на", "маши́ну", "маши́ны"], ok: "маши́на", caso: "nominativo", es: "Tengo un auto.", por: "Lo que se tiene, con у меня́ есть, es el sujeto: nominativo." },
    { ru: "Мне нра́вится ___.", base: "кни́га", op: ["кни́гу", "кни́га", "кни́ге"], ok: "кни́га", caso: "nominativo", es: "Me gusta el libro.", por: "Lo que gusta es el sujeto: nominativo." }
   ] }
  ]
 },
 {
  id: "genitivo", grupo: "Los 6 casos", caso: "genitivo",
  titulo: "Genitivo", desc: "«De»: de quién es algo, lo que no hay, las cantidades.",
  bloques: [
   { t: "texto", texto: "Casi siempre equivale a «de»: de quién es algo, de qué está lleno o hecho. También se usa para lo que no hay (con нет), después de cantidades y después de muchas preposiciones." },
   { t: "flujo", pasos: [
    ["En español", "el libro de mi hermano"],
    ["Pregunta", "кни́га кого́? (¿de quién?)"],
    ["Caso", "genitivo: брат → бра́та"],
    ["En ruso", "кни́га {бра́та}"],
    ["Palabra por palabra", "libro del-hermano (sin «de»: lo dice la terminación)"]
   ] },
   { t: "ejemplos", items: [
    ["У меня́ нет {вре́мени}.", "No tengo tiempo.", "Lo que no hay va en genitivo después de нет."],
    ["стака́н {воды́}", "un vaso de agua", "De qué está lleno: вода́ → воды́."],
    ["мно́го {люде́й}", "mucha gente", "Después de мно́го va el genitivo plural: лю́ди → люде́й."],
    ["Я пью чай без {са́хара}.", "Tomo té sin azúcar.", "без siempre pide genitivo."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["У меня́ нет {бра́та}.", "No tengo hermano."], mal: ["У меня́ нет брат.", "Con нет, lo que falta deja de ser sujeto y pasa a genitivo."] },
   { t: "par", bien: ["два {бра́та}", "dos hermanos"], mal: ["два бра́тья", "Después de 2, 3 y 4 va el genitivo singular, aunque en español sea plural. Desde 5: genitivo plural (пять {бра́тьев})."] },
   { t: "par", bien: ["Я бою́сь {соба́к}.", "Les tengo miedo a los perros."], mal: ["Я бою́сь соба́кам.", "En español decimos «a los perros», pero боя́ться no pide dativo: pide кого́? чего́?, genitivo."] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "У меня́ нет ___.", base: "маши́на", op: ["маши́на", "маши́ны", "маши́ну"], ok: "маши́ны", caso: "genitivo", es: "No tengo auto.", por: "Con нет, lo que no hay va en genitivo." },
    { ru: "Я пью чай без ___.", base: "молоко́", op: ["молоко́", "молоку́", "молока́"], ok: "молока́", caso: "genitivo", es: "Tomo té sin leche.", por: "без siempre pide genitivo." },
    { ru: "У меня́ три ___.", base: "брат", op: ["брат", "бра́та", "бра́ту"], ok: "бра́та", caso: "genitivo", es: "Tengo tres hermanos.", por: "Después de 2, 3 y 4 va el genitivo singular." }
   ] }
  ]
 },
 {
  id: "dativo", grupo: "Los 6 casos", caso: "dativo",
  titulo: "Dativo", desc: "«A» o «le»: a quién va dirigida la acción.",
  bloques: [
   { t: "texto", texto: "Es el destinatario: a quién le das, le decís, le escribís o le mostrás algo. En español es el complemento indirecto, el que se reemplaza por «le». También se usa para lo que alguien siente o necesita." },
   { t: "flujo", pasos: [
    ["En español", "Le escribo a mamá."],
    ["Prueba", "«le escribo» → complemento indirecto"],
    ["Pregunta", "кому́? (¿a quién?)"],
    ["Caso", "dativo: ма́ма → ма́ме"],
    ["En ruso", "Я пишу́ {ма́ме}."]
   ] },
   { t: "ejemplos", items: [
    ["Я даю́ {бра́ту} кни́гу.", "Le doy el libro a mi hermano.", "A quién se lo doy: dativo. Lo que doy, кни́гу, va en acusativo."],
    ["{Мне} два́дцать лет.", "Tengo veinte años.", "La persona que tiene la edad va en dativo: я → мне."],
    ["{Мне} хо́лодно.", "Tengo frío.", "Quien siente algo va en dativo: literalmente, «a mí hace frío»."],
    ["Мы идём к {врачу́}.", "Vamos al médico.", "к siempre pide dativo."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["Я помога́ю {ма́ме}.", "Ayudo a mamá. (La ayudo.)"], mal: ["Я помога́ю ма́му.", "En español es complemento directo («la ayudo»), pero помога́ть pide dativo: en ruso es «darle ayuda a alguien». Está explicado en «¿Acusativo o dativo?»."] },
   { t: "par", bien: ["Я звоню́ {дру́гу}.", "Llamo a mi amigo. (Lo llamo.)"], mal: ["Я звоню́ дру́га.", "звони́ть pide кому́?: se piensa como «hacerle un llamado a alguien»."] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "Я помога́ю ___.", base: "сестра́", op: ["сестру́", "сестре́", "сестра́"], ok: "сестре́", caso: "dativo", es: "Ayudo a mi hermana.", por: "помога́ть pide кому́?: dativo." },
    { ru: "Я звоню́ ___.", base: "па́па", op: ["па́пу", "па́па", "па́пе"], ok: "па́пе", caso: "dativo", es: "Llamo a papá.", por: "звони́ть pide кому́?: dativo." },
    { ru: "___ хо́лодно.", base: "я", op: ["Я", "Меня́", "Мне"], ok: "Мне", caso: "dativo", es: "Tengo frío.", por: "Quien siente algo va en dativo: я → мне." }
   ] }
  ]
 },
 {
  id: "acusativo", grupo: "Los 6 casos", caso: "acusativo",
  titulo: "Acusativo", desc: "«Lo» o «la»: lo que recibe la acción. Y el «adónde».",
  bloques: [
   { t: "texto", texto: "Es el complemento directo: lo que recibe la acción. En español es lo que se reemplaza por «lo» o «la». Con в y на, además, indica adónde vas." },
   { t: "flujo", pasos: [
    ["En español", "Veo a mamá."],
    ["Prueba", "«la veo» → complemento directo"],
    ["Pregunta", "кого́? что?"],
    ["Caso", "acusativo: ма́ма → ма́му"],
    ["En ruso", "Я ви́жу {ма́му}."]
   ] },
   { t: "nota", texto: "La «a» de «veo a mamá» no la convierte en indirecto: en español las personas llevan «a» aunque sean complemento directo («la veo»). En ruso no hay preposición: va en acusativo y listo." },
   { t: "lbl", texto: "Cuándo cambia y cuándo no" },
   { t: "tabla", cols: ["Palabra", "Nominativo", "Acusativo"], filas: [
    ["Femenina en -а/-я", "ма́ма", "{ма́му}"],
    ["Masculina, cosa", "стол", "{стол} (igual)"],
    ["Masculina, persona o animal", "брат", "{бра́та} (como el genitivo)"],
    ["Neutra", "молоко́", "{молоко́} (igual)"]
   ] },
   { t: "ejemplos", items: [
    ["Я чита́ю {кни́гу}.", "Leo un libro.", "Lo que leo: acusativo."],
    ["Я люблю́ {бра́та}.", "Quiero a mi hermano.", "Masculino animado: el acusativo es igual al genitivo."],
    ["Я иду́ в {шко́лу}.", "Voy a la escuela.", "в + acusativo: adónde voy."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["Я благодарю́ {дру́га}.", "Le agradezco a mi amigo."], mal: ["Я благодарю́ дру́гу.", "En español es «le» (indirecto), pero благодари́ть pide кого́?: acusativo."] },
   { t: "par", bien: ["Я спра́шиваю {учи́теля}.", "Le pregunto al profesor."], mal: ["Я спра́шиваю учи́телю.", "спра́шивать también pide кого́?: a quien le preguntás va en acusativo."] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "Я ви́жу ___.", base: "ма́ма", op: ["ма́ма", "ма́ме", "ма́му"], ok: "ма́му", caso: "acusativo", es: "Veo a mamá.", por: "ви́деть pide кого́? что?: acusativo." },
    { ru: "Я благодарю́ ___.", base: "друг", op: ["дру́гу", "дру́га", "друг"], ok: "дру́га", caso: "acusativo", es: "Le agradezco a mi amigo.", por: "благодари́ть pide кого́?: acusativo. Masculino animado: igual al genitivo." },
    { ru: "Я иду́ в ___.", base: "шко́ла", op: ["шко́ле", "шко́лу", "шко́ла"], ok: "шко́лу", caso: "acusativo", es: "Voy a la escuela.", por: "Hay movimiento: в + acusativo." }
   ] }
  ]
 },
 {
  id: "instrumental", grupo: "Los 6 casos", caso: "instrumental",
  titulo: "Instrumental", desc: "«Con»: con qué y con quién. También la profesión.",
  bloques: [
   { t: "texto", texto: "Equivale a «con»: con qué hacés algo (sin preposición) y con quién (con с). También se usa para lo que alguien es o llega a ser: «trabaja de médico», «quiere ser médico»." },
   { t: "flujo", pasos: [
    ["En español", "Escribo con birome."],
    ["Pregunta", "чем? (¿con qué?)"],
    ["Caso", "instrumental: ру́чка → ру́чкой"],
    ["En ruso", "Я пишу́ {ру́чкой}."],
    ["Palabra por palabra", "escribo birome-con (sin preposición)"]
   ] },
   { t: "ejemplos", items: [
    ["Я гуля́ю с {дру́гом}.", "Paseo con un amigo.", "Con quién: с + instrumental."],
    ["Он рабо́тает {врачо́м}.", "Trabaja de médico.", "La profesión, con рабо́тать, va en instrumental."],
    ["Я занима́юсь {спо́ртом}.", "Hago deporte.", "занима́ться pide чем?: instrumental."],
    ["{Зимо́й} хо́лодно.", "En invierno hace frío.", "Las estaciones y los momentos del día van en instrumental, sin preposición."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["Я пишу́ {ру́чкой}.", "Escribo con birome."], mal: ["Я пишу́ с ру́чкой.", "с es para compañía: con quién. El instrumento va solo, sin preposición."] },
   { t: "par", bien: ["Я занима́юсь {спо́ртом}.", "Hago deporte."], mal: ["Я занима́юсь спорт.", "En español el deporte es lo que hacés («lo hago»), pero занима́ться pide instrumental."] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "Я ем суп ___.", base: "ло́жка", op: ["ло́жку", "ло́жкой", "ло́жка"], ok: "ло́жкой", caso: "instrumental", es: "Tomo la sopa con cuchara.", por: "El instrumento va en instrumental, sin с." },
    { ru: "Я гуля́ю с ___.", base: "подру́га", op: ["подру́гой", "подру́гу", "подру́ге"], ok: "подру́гой", caso: "instrumental", es: "Paseo con una amiga.", por: "с «con» pide instrumental." },
    { ru: "Он хо́чет стать ___.", base: "врач", op: ["врач", "врача́", "врачо́м"], ok: "врачо́м", caso: "instrumental", es: "Quiere ser médico.", por: "стать pide кем?: instrumental." }
   ] }
  ]
 },
 {
  id: "preposicional", grupo: "Los 6 casos", caso: "preposicional",
  titulo: "Preposicional", desc: "Siempre con preposición: dónde está algo y de qué se habla.",
  bloques: [
   { t: "texto", texto: "Siempre va con una preposición. Con в o на dice dónde está algo (sin movimiento). Con о dice de qué o de quién se habla o se piensa." },
   { t: "flujo", pasos: [
    ["En español", "Vivo en la ciudad."],
    ["Pregunta", "где? (¿dónde?)"],
    ["Caso", "preposicional: го́род → го́роде"],
    ["En ruso", "Я живу́ в {го́роде}."]
   ] },
   { t: "ejemplos", items: [
    ["Кни́га лежи́т на {столе́}.", "El libro está sobre la mesa.", "Dónde está: на + preposicional."],
    ["Мы говори́м о {фи́льме}.", "Hablamos de la película.", "De qué se habla: о + preposicional."],
    ["Я е́ду на {авто́бусе}.", "Voy en colectivo.", "En qué medio de transporte: на + preposicional."]
   ] },
   { t: "lbl", texto: "Donde el español confunde" },
   { t: "par", bien: ["Я ду́маю о {тебе́}.", "Pienso en vos."], mal: ["Я ду́маю в тебе́.", "En español se piensa «en» alguien; en ruso, «sobre» alguien: о + preposicional."] },
   { t: "par", bien: ["Я живу́ в {го́роде}.", "Vivo en la ciudad."], mal: ["Я живу́ в го́род.", "Sin movimiento (где?) va el preposicional. в го́род (acusativo) sería «a la ciudad», con movimiento."] },
   { t: "nota", texto: "Algunas palabras tienen una forma especial para decir dónde: в {лесу́} (en el bosque), на {полу́} (en el piso). En la tabla de la palabra aparece como «locativo»." },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "Я живу́ в ___.", base: "го́род", op: ["го́род", "го́роде", "го́рода"], ok: "го́роде", caso: "preposicional", es: "Vivo en la ciudad.", por: "Dónde, sin movimiento: в + preposicional." },
    { ru: "Мы говори́м о ___.", base: "фильм", op: ["фи́льме", "фильм", "фи́льма"], ok: "фи́льме", caso: "preposicional", es: "Hablamos de la película.", por: "о + preposicional: de qué se habla." },
    { ru: "Кни́га лежи́т на ___.", base: "стол", op: ["стол", "столо́м", "столе́"], ok: "столе́", caso: "preposicional", es: "El libro está sobre la mesa.", por: "Dónde, sin movimiento: на + preposicional." }
   ] }
  ]
 },

 /* ─── Las trampas ─── */
 {
  id: "acusativo-dativo", grupo: "Las trampas",
  titulo: "¿Acusativo o dativo?", sub: "La prueba de «lo» y «le»",
  desc: "Directo e indirecto en español, y por qué помога́ть pide dativo.",
  bloques: [
   { t: "texto", texto: "En español hay dos complementos que se confunden: el directo, que se reemplaza por «lo» o «la» (lo que recibe la acción), y el indirecto, que se reemplaza por «le» (a quién va dirigida). En ruso, el directo es el acusativo y el indirecto es el dativo." },
   { t: "tabla", cols: ["Español", "Prueba", "En ruso"], filas: [
    ["Veo a mamá.", "la veo → directo", "Я ви́жу {ма́му}. (acusativo)"],
    ["Le escribo a mamá.", "le escribo → indirecto", "Я пишу́ {ма́ме}. (dativo)"],
    ["Le doy el libro a mamá.", "se lo doy → los dos", "Я даю́ {ма́ме} {кни́гу}."]
   ] },
   { t: "texto", texto: "Casi siempre funciona: «lo/la» → acusativo, «le» → dativo. Pero hay verbos en los que el español y el ruso ven la acción de otra manera. El más común es помога́ть, «ayudar»." },
   { t: "lbl", texto: "El caso de помога́ть" },
   { t: "par", bien: ["Я помога́ю {ма́ме}.", "Ayudo a mamá."], mal: ["Я помога́ю ма́му.", "Es el error más común de los hispanohablantes."] },
   { t: "texto", texto: "En español decimos «la ayudo»: mamá es el complemento directo. En ruso, помога́ть se piensa como «dar ayuda a alguien»: la ayuda es lo que se da, y la persona es quien la recibe. Por eso va en dativo, igual que con дава́ть («dar»)." },
   { t: "flujo", pasos: [
    ["Español", "La ayudo."],
    ["Cómo lo piensa el ruso", "Le doy ayuda."],
    ["Pregunta", "кому́?"],
    ["Caso", "dativo: она́ → ей"],
    ["En ruso", "Я помога́ю {ей}."]
   ] },
   { t: "nota", texto: "En partes de España se dice «le ayudo». Esa forma se parece a la lógica rusa, pero en el Río de la Plata se dice «la ayudo». Por eso conviene memorizar el verbo con su pregunta: помога́ть кому́?" },
   { t: "tabla", cols: ["Español", "Ruso"], filas: [
    ["La ayudo (a ella).", "Я помога́ю {ей}."],
    ["Lo ayudo (a él).", "Я помога́ю {ему́}."],
    ["¿Me ayudás?", "Ты помога́ешь {мне}?"],
    ["Te ayudo.", "Я помога́ю {тебе́}."],
    ["Los ayudamos.", "Мы помога́ем {им}."],
    ["Ayudo a mi hermano.", "Я помога́ю {бра́ту}."]
   ] },
   { t: "lbl", texto: "Lado a lado: ver y ayudar" },
   { t: "tabla", cols: ["", "ви́деть (ver)", "помога́ть (ayudar)"], filas: [
    ["En español", "la veo", "la ayudo"],
    ["Pregunta", "кого́?", "кому́?"],
    ["Caso", "acusativo", "dativo"],
    ["ма́ма", "{ма́му}", "{ма́ме}"],
    ["она́", "{её}", "{ей}"],
    ["брат", "{бра́та}", "{бра́ту}"]
   ] },
   { t: "lbl", texto: "Probá vos" },
   { t: "practica", items: [
    { ru: "Я ви́жу ___.", base: "па́па", op: ["па́пе", "па́пу", "па́па"], ok: "па́пу", caso: "acusativo", es: "Veo a papá.", por: "ви́деть pide кого́?: acusativo." },
    { ru: "Я помога́ю ___.", base: "па́па", op: ["па́пу", "па́па", "па́пе"], ok: "па́пе", caso: "dativo", es: "Ayudo a papá.", por: "помога́ть pide кому́?: dativo." },
    { ru: "Я пишу́ ___.", base: "сестра́", op: ["сестре́", "сестру́", "сестры́"], ok: "сестре́", caso: "dativo", es: "Le escribo a mi hermana.", por: "A quién le escribo: dativo." },
    { ru: "Я люблю́ ___.", base: "сестра́", op: ["сестре́", "сестра́", "сестру́"], ok: "сестру́", caso: "acusativo", es: "Quiero a mi hermana.", por: "люби́ть pide кого́?: acusativo." },
    { ru: "Ты помога́ешь ___?", base: "я", op: ["меня́", "мне", "я"], ok: "мне", caso: "dativo", es: "¿Me ayudás?", por: "помога́ть pide кому́?: я → мне." }
   ] }
  ]
 },
 {
  id: "verbos", grupo: "Las trampas",
  titulo: "Verbos que engañan", sub: "Cuando el español te lleva al caso equivocado",
  desc: "Los verbos que piden un caso distinto del que esperás.",
  bloques: [
   { t: "texto", texto: "La mayoría de los verbos piden el caso que esperás desde el español. Estos no. Aprendelos siempre con su pregunta: no «ayudar», sino помога́ть кому́?" },
   { t: "lbl", texto: "En español «lo», en ruso dativo" },
   { t: "ejemplos", items: [
    ["Я помога́ю {ма́ме}.", "Ayudo a mamá. (La ayudo.)", "Se piensa como «darle ayuda a alguien».", "помога́ть · кому́?"],
    ["Я звоню́ {дру́гу}.", "Llamo a mi amigo. (Lo llamo.)", "Se piensa como «hacerle un llamado a alguien».", "звони́ть · кому́?"],
    ["Не меша́й {бра́ту}!", "¡No molestes a tu hermano! (No lo molestes.)", "Se piensa como «ponerle un obstáculo a alguien». Con что? меша́ть es otra cosa: «revolver» (меша́ть суп).", "меша́ть · кому́?"]
   ] },
   { t: "lbl", texto: "En español «le», en ruso acusativo" },
   { t: "ejemplos", items: [
    ["Я благодарю́ {дру́га}.", "Le agradezco a mi amigo.", "La persona es el objeto directo del agradecimiento. Lo que se agradece va con за + acusativo: благодарю́ за по́мощь.", "благодари́ть · кого́?"],
    ["Я спра́шиваю {учи́теля}.", "Le pregunto al profesor.", "A quien le preguntás va en acusativo.", "спра́шивать · кого́?"],
    ["Я прошу́ {ма́му} помо́чь.", "Le pido a mamá que me ayude.", "A quien le pedís va en acusativo.", "проси́ть · кого́?"]
   ] },
   { t: "lbl", texto: "Al revés que en español: учи́ть" },
   { t: "ejemplos", items: [
    ["Я учу́ {бра́та} {ру́сскому языку́}.", "Le enseño ruso a mi hermano.", "En español, la persona es indirecta («le enseño») y la materia es directa («lo enseño»). En ruso es al revés: la persona va en acusativo y la materia en dativo.", "учи́ть · кого́? чему́?"]
   ] },
   { t: "lbl", texto: "Con «a» en español, genitivo en ruso" },
   { t: "ejemplos", items: [
    ["Я бою́сь {соба́к}.", "Les tengo miedo a los perros.", "боя́ться pide кого́? чего́?: genitivo, no dativo.", "боя́ться · кого́? чего́?"]
   ] },
   { t: "lbl", texto: "Ojo con ждать" },
   { t: "texto", texto: "ждать («esperar») acepta dos casos. Para personas y cosas concretas, acusativo. Para cosas abstractas (una respuesta, una ayuda), genitivo." },
   { t: "ejemplos", items: [
    ["Я жду {ма́му}.", "Espero a mamá.", "Persona: acusativo."],
    ["Я жду {авто́бус}.", "Espero el colectivo.", "Cosa concreta: acusativo (masculino inanimado, igual al nominativo)."],
    ["Я жду {отве́та}.", "Espero una respuesta.", "Algo abstracto: genitivo."]
   ] },
   { t: "lbl", texto: "Y los que coinciden con el español" },
   { t: "tabla", cols: ["Verbo", "Pregunta", "Ejemplo"], filas: [
    ["ви́деть (ver)", "кого́? что?", "ви́жу {ма́му} · la veo"],
    ["люби́ть (querer)", "кого́? что?", "люблю́ {ма́му} · la quiero"],
    ["писа́ть (escribir)", "кому́?", "пишу́ {ма́ме} · le escribo"],
    ["дава́ть (dar)", "кому́? что?", "даю́ {ма́ме} {кни́гу} · se lo doy"],
    ["ве́рить (creer)", "кому́?", "ве́рю {ма́ме} · le creo"]
   ] },
   { t: "nota", texto: "Cuando dudes, abrí el verbo en Verbos y mirá «Rige:». La pregunta que aparece ahí manda, no la traducción." }
  ]
 },

 /* ─── Práctica ─── */
 {
  id: "practica", grupo: "Práctica",
  titulo: "Probá vos", sub: "Todo mezclado",
  desc: "Diez frases para elegir la forma correcta, con explicación.",
  bloques: [
   { t: "texto", texto: "Elegí la forma que va en el hueco. Pensá primero la pregunta del verbo o de la preposición: te dice el caso." },
   { t: "practica", items: [
    { ru: "Я помога́ю ___.", base: "друг", op: ["дру́га", "дру́гу", "друг"], ok: "дру́гу", caso: "dativo", es: "Ayudo a mi amigo.", por: "помога́ть pide кому́?: dativo." },
    { ru: "Я благодарю́ ___.", base: "ма́ма", op: ["ма́ме", "ма́ма", "ма́му"], ok: "ма́му", caso: "acusativo", es: "Le agradezco a mamá.", por: "благодари́ть pide кого́?: acusativo." },
    { ru: "У меня́ нет ___.", base: "брат", op: ["брат", "бра́та", "бра́ту"], ok: "бра́та", caso: "genitivo", es: "No tengo hermano.", por: "Con нет, lo que no hay va en genitivo." },
    { ru: "Я живу́ в ___.", base: "го́род", op: ["го́роде", "го́род", "го́рода"], ok: "го́роде", caso: "preposicional", es: "Vivo en la ciudad.", por: "Dónde, sin movimiento: в + preposicional." },
    { ru: "Я пишу́ ___.", base: "каранда́ш", op: ["каранда́ш", "карандаша́", "карандашо́м"], ok: "карандашо́м", caso: "instrumental", es: "Escribo con lápiz.", por: "Con qué: instrumental, sin с." },
    { ru: "Я звоню́ ___.", base: "сестра́", op: ["сестре́", "сестру́", "сестры́"], ok: "сестре́", caso: "dativo", es: "Llamo a mi hermana.", por: "звони́ть pide кому́?: dativo." },
    { ru: "Я бою́сь ___.", base: "соба́ка", op: ["соба́ку", "соба́ке", "соба́ки"], ok: "соба́ки", caso: "genitivo", es: "Le tengo miedo al perro.", por: "боя́ться pide кого́? чего́?: genitivo." },
    { ru: "Я учу́ ___ ру́сскому языку́.", base: "брат", op: ["бра́ту", "бра́та", "брат"], ok: "бра́та", caso: "acusativo", es: "Le enseño ruso a mi hermano.", por: "учи́ть кого́? чему́?: la persona va en acusativo." },
    { ru: "Мы идём к ___.", base: "врач", op: ["врачу́", "врача́", "врачо́м"], ok: "врачу́", caso: "dativo", es: "Vamos al médico.", por: "к siempre pide dativo." },
    { ru: "Он рабо́тает ___.", base: "учи́тель", op: ["учи́теля", "учи́телем", "учи́тель"], ok: "учи́телем", caso: "instrumental", es: "Trabaja de profesor.", por: "La profesión, con рабо́тать, va en instrumental." }
   ] }
  ]
 }
 ]
};

/* Devuelve un capítulo de la guía por id, o null. */
function gramaticaGuia(id) {
  return GRAMATICA_GUIA.capitulos.find(function (c) { return c.id === id; }) || null;
}

/* Devuelve un caso por id ("genitivo"…), o null. */
function gramaticaCaso(id) {
  return (id && GRAMATICA_CASOS[id]) || null;
}

/* Divide el texto Governance del léxico ("кого? что? кому?") en
   grupos consecutivos: [{ grupo: "acusativo", texto: "кого? что?" },
   { grupo: "dativo", texto: "кому?" }]. grupo = null si la pregunta
   no está en la guía (no debería pasar: está verificado). */
function gramaticaReccion(gov) {
  const t = (gov || "").split("?").map(function (s) { return s.trim(); }).filter(Boolean);
  const out = [];
  t.forEach(function (tok, i) {
    let g;
    if (tok === "кого") g = (t[i - 1] === "чего" || t[i + 1] === "чего") ? "genitivo" : "acusativo";
    else g = GRAMATICA_RECCION_TOKENS[tok] || null;
    const txt = tok === "себя" ? tok : tok + "?";
    const last = out[out.length - 1];
    if (last && g && last.grupo === g) last.texto += " " + txt;
    else out.push({ grupo: g, texto: txt });
  });
  return out;
}

if (typeof window !== "undefined") {
  window.gramaticaCaso = gramaticaCaso;
  window.gramaticaReccion = gramaticaReccion;
  window.gramaticaGuia = gramaticaGuia;
}
