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
                            acusativo y animacidad, numerales
     GRAMATICA_RECCION      grupos de rección de los verbos
                            (antes VERBOS_GUIA_RECCION, en data-verbos.js)
     gramaticaCaso(id)      devuelve un caso o null
     gramaticaReccion(gov)  divide el campo Governance del léxico
                            ("кого? что? кому?") en grupos
                            (antes verbosReccion, en data-verbos.js)

   CONVENCIONES
   · Todo el ruso lleva acento (U+0301), salvo palabras de una sola
     vocal o con ё. Para la voz se envía sin la marca.
   · Español rioplatense. Redacción propia de AZBUKA
     (CC BY-NC-ND 4.0, ver LICENSE-CONTENT).
   · ejemplos: pares [ruso, español].
   ============================================================ */

/* ── LOS 6 CASOS ──────────────────────────────────────────────
   id           clave usada por data-casos.js y por la rección
   nombre       nombre en español
   ru           nombre en ruso
   abrev        abreviatura para tablas
   preguntas    preguntas típicas del caso
   resumen      una o dos oraciones: para qué sirve
   usos         lista de usos, cada uno con su ejemplo
   preposiciones  [preposición, significado] que piden este caso
   ejemplos     frases completas                                  */
const GRAMATICA_CASOS = {
 nominativo: {
  id: "nominativo", nombre: "Nominativo", ru: "имени́тельный паде́ж", abrev: "Nom.",
  preguntas: "кто? что?",
  resumen: "Es la forma de diccionario. Se usa para el sujeto: quién o qué hace la acción, o de quién o de qué se habla.",
  usos: [
   ["Sujeto de la oración", "Ма́ма чита́ет.", "Mamá lee."],
   ["Para presentar algo con э́то", "Э́то мой брат.", "Este es mi hermano."],
   ["Lo que se tiene, con у меня́ есть", "У меня́ есть соба́ка.", "Tengo un perro."]
  ],
  preposiciones: [],
  ejemplos: [["Где ма́ма?", "¿Dónde está mamá?"], ["Э́то моя́ кни́га.", "Este es mi libro."]]
 },
 genitivo: {
  id: "genitivo", nombre: "Genitivo", ru: "роди́тельный паде́ж", abrev: "Gen.",
  preguntas: "кого? чего?",
  resumen: "Indica de quién o de qué es algo («de»), lo que falta o no hay, y las cantidades. Es el caso con más preposiciones.",
  usos: [
   ["Pertenencia: «de»", "кни́га бра́та", "el libro del hermano"],
   ["Lo que no hay, con нет", "У меня́ нет вре́мени.", "No tengo tiempo."],
   ["Cantidades: мно́го, ма́ло, ско́лько, не́сколько", "мно́го люде́й", "mucha gente"],
   ["Después de 2, 3 y 4 va el genitivo singular", "два бра́та", "dos hermanos"],
   ["Desde 5 en adelante va el genitivo plural", "пять книг", "cinco libros"]
  ],
  preposiciones: [
   ["без", "sin"], ["для", "para"], ["до", "hasta, antes de"], ["из", "de (desde adentro)"],
   ["от", "de (de parte de alguien), desde"], ["у", "junto a, en lo de; у меня́ = yo tengo"],
   ["с", "desde (de arriba de)"], ["о́коло", "cerca de"], ["по́сле", "después de"],
   ["кро́ме", "excepto, además de"], ["вокру́г", "alrededor de"], ["ми́мо", "por al lado de"],
   ["про́тив", "contra"], ["из-за", "por culpa de, de atrás de"], ["из-под", "de debajo de"]
  ],
  ejemplos: [["Э́то дом моего́ дру́га.", "Esta es la casa de mi amigo."], ["Я пью ко́фе без са́хара.", "Tomo café sin azúcar."]]
 },
 dativo: {
  id: "dativo", nombre: "Dativo", ru: "да́тельный паде́ж", abrev: "Dat.",
  preguntas: "кому? чему?",
  resumen: "Indica a quién va dirigida la acción: el destinatario («a» o «le» en español). También se usa para decir lo que alguien siente o necesita.",
  usos: [
   ["Destinatario: a quién se da, se dice o se escribe", "Я пишу́ ма́ме.", "Le escribo a mamá."],
   ["La edad", "Мне два́дцать лет.", "Tengo veinte años."],
   ["Lo que alguien siente o necesita", "Мне хо́лодно.", "Tengo frío."],
   ["Lo que a alguien le gusta, con нра́виться", "Мне нра́вится му́зыка.", "Me gusta la música."]
  ],
  preposiciones: [["к", "hacia, a lo de (una persona)"], ["по", "por, a lo largo de; по телефо́ну = por teléfono"], ["благодаря́", "gracias a"]],
  ejemplos: [["Я звоню́ дру́гу.", "Llamo a mi amigo."], ["Мы идём к врачу́.", "Vamos al médico."]]
 },
 acusativo: {
  id: "acusativo", nombre: "Acusativo", ru: "вини́тельный паде́ж", abrev: "Ac.",
  preguntas: "кого? что?",
  resumen: "Es el complemento directo: la cosa o la persona que recibe la acción. Con в y на indica hacia dónde se va.",
  usos: [
   ["Complemento directo", "Я чита́ю кни́гу.", "Leo un libro."],
   ["Dirección con в / на (¿adónde?)", "Я иду́ в шко́лу.", "Voy a la escuela."],
   ["Duración o momento", "Я рабо́тал всю неде́лю.", "Trabajé toda la semana."]
  ],
  preposiciones: [["в", "a, hacia adentro de (dirección)"], ["на", "a, hacia (dirección); para (un tiempo)"], ["за", "por (a cambio de)"], ["че́рез", "a través de; dentro de (tiempo)"], ["про", "sobre, acerca de (coloquial)"]],
  ejemplos: [["Я ви́жу ма́му.", "Veo a mamá."], ["Положи́ кни́гу на стол.", "Poné el libro en la mesa."]]
 },
 instrumental: {
  id: "instrumental", nombre: "Instrumental", ru: "твори́тельный паде́ж", abrev: "Instr.",
  preguntas: "кем? чем?",
  resumen: "Indica con qué se hace algo y con quién (con с). También qué es o en qué se convierte alguien.",
  usos: [
   ["Instrumento: con qué", "Я пишу́ ру́чкой.", "Escribo con birome."],
   ["Compañía, con с", "Я гуля́ю с дру́гом.", "Paseo con un amigo."],
   ["Profesión o estado, con рабо́тать, быть, стать", "Он рабо́тает врачо́м.", "Trabaja de médico."],
   ["Momentos del día y estaciones", "у́тром, ле́том", "a la mañana, en verano"]
  ],
  preposiciones: [["с", "con"], ["над", "sobre, encima de"], ["под", "debajo de (ubicación)"], ["пе́ред", "delante de, antes de"], ["за", "detrás de (ubicación)"], ["ме́жду", "entre"]],
  ejemplos: [["Мы еди́м суп ло́жкой.", "Tomamos la sopa con cuchara."], ["Ла́мпа виси́т над столо́м.", "La lámpara cuelga sobre la mesa."]]
 },
 preposicional: {
  id: "preposicional", nombre: "Preposicional", ru: "предло́жный паде́ж", abrev: "Prep.",
  preguntas: "о ком? о чём? где?",
  resumen: "Siempre va con preposición. Indica dónde está algo (con в o на) o de qué se habla (con о).",
  usos: [
   ["Ubicación con в / на (¿dónde?)", "Я живу́ в Москве́.", "Vivo en Moscú."],
   ["Tema con о / об: de qué se habla o se piensa", "Мы говори́м о фи́льме.", "Hablamos de la película."],
   ["Medio de transporte con на", "Я е́ду на авто́бусе.", "Voy en colectivo."]
  ],
  preposiciones: [["в", "en (adentro de)"], ["на", "en, sobre (superficie o evento)"], ["о / об / обо", "sobre, acerca de"], ["при", "en presencia de, en tiempos de"]],
  ejemplos: [["Кни́га лежи́т на столе́.", "El libro está sobre la mesa."], ["Я ду́маю о тебе́.", "Pienso en vos."]]
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
  ejemplos: [["Я ви́жу стол.", "Veo la mesa. (inanimado: igual al nominativo)"], ["Я ви́жу бра́та.", "Veo a mi hermano. (animado: igual al genitivo)"], ["Я ви́жу но́вых друзе́й.", "Veo a los amigos nuevos. (plural animado)"]]
 },
 locativo: {
  titulo: "Locativo (в лесу́, на полу́)",
  texto: "Algunos sustantivos masculinos tienen una forma especial terminada en -у́ (siempre acentuada) para decir dónde está algo. Solo aparece con в o на y con sentido de lugar. Para hablar de algo (con о) se usa el preposicional normal. Cada palabra lleva siempre la misma preposición, por eso se guarda junto con ella.",
  ejemplos: [["Мы гуля́ем в лесу́.", "Paseamos por el bosque."], ["Мы говори́м о ле́се.", "Hablamos del bosque."], ["Ко́шка спит на полу́.", "El gato duerme en el piso."]]
 },
 partitivo: {
  titulo: "Partitivo (coloquial)",
  texto: "Algunos sustantivos masculinos de cosas que no se cuentan tienen un genitivo alternativo terminado en -у / -ю, con el sentido de «un poco de». Es coloquial: el genitivo normal siempre es correcto. También aparece en algunas expresiones fijas.",
  ejemplos: [["ча́шка ча́ю", "una taza de té (también: ча́шка ча́я)"], ["Доба́вь са́хару.", "Agregá un poco de azúcar."], ["из до́му", "de casa (expresión fija)"]]
 },
 formaCorta: {
  titulo: "Forma corta de los adjetivos",
  texto: "Muchos adjetivos tienen una forma corta que va después del sujeto, como predicado, y no se declina: solo cambia por género y número. Algunas son muy comunes desde el principio, como гото́в (listo), рад (contento), до́лжен (tener que) o прав (tener razón).",
  ejemplos: [["Он гото́в.", "Él está listo."], ["Она́ гото́ва.", "Ella está lista."], ["Мы должны́ идти́.", "Tenemos que irnos."]]
 },
 numerales: {
  titulo: "Números y casos",
  texto: "El número decide el caso del sustantivo que lo sigue: después de 1 va el nominativo singular; después de 2, 3 y 4, el genitivo singular; desde 5 en adelante, el genitivo plural. Cuenta la última cifra: 21 va como 1, 22 como 2 y 25 como 5 (salvo 11 a 14, que van como 5).",
  ejemplos: [["оди́н брат", "un hermano"], ["два бра́та", "dos hermanos"], ["пять бра́тьев", "cinco hermanos"], ["два́дцать оди́н год", "veintiún años"]]
 },
 indeclinable: {
  titulo: "Palabras que no se declinan",
  texto: "Algunas palabras, casi todas tomadas de otros idiomas, tienen la misma forma en todos los casos.",
  ejemplos: [["Я пью ко́фе.", "Tomo café."], ["Мы е́дем на метро́.", "Vamos en subte."]]
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
 acusativo: { titulo: "Acusativo", caso: "acusativo", prep: null, preguntas: "кого? что?", explicacion: "Es el complemento directo: la cosa o la persona que recibe la acción («¿qué?» o «¿a quién?»).",
   ejemplos: [["Я чита́ю кни́гу.", "Leo un libro."], ["Я ви́жу ма́му.", "Veo a mamá."]] },
 genitivo: { titulo: "Genitivo", caso: "genitivo", prep: null, preguntas: "кого? чего?", explicacion: "Algunos verbos piden genitivo en vez de acusativo: sobre todo los de miedo, espera, búsqueda o falta.",
   ejemplos: [["Я жду отве́та.", "Espero una respuesta."], ["Он бои́тся темноты́.", "Le tiene miedo a la oscuridad."]] },
 dativo: { titulo: "Dativo", caso: "dativo", prep: null, preguntas: "кому? чему?", explicacion: "Indica a quién va dirigida la acción: el destinatario (en español suele llevar «a» o «le»).",
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
}
