/* ============================================================
   DATA-FRASES.JS — Frases útiles (fórmulas comunicativas)
   ------------------------------------------------------------
   Versión v3 (24/09/2026). Una frase es una expresión que se aprende
   entera: Здра́вствуйте, Как дела́?, Не за что… Muchas no son una
   palabra del léxico, por eso viven acá.
   Cada frase: id estable FRS-xxx, función (DLG_FUNCIONES), texto con
   acento, transliteración, traducción, registro ("ты", "вы" o "" si
   sirve para los dos), nivel, uso (cuándo se dice), cul (nota
   cultural, opcional) y lex (un ID del léxico por palabra, como en
   las líneas de los diálogos).
   Los diálogos en los que aparece cada frase se calculan en la
   página (campo f de cada línea de data-dialogos.js).
   ============================================================ */

const FRASES = [
  {"id":"FRS-001","funcion":"saludar","ru":"Приве́т!","tr":"Priviét!","es":"¡Hola!","registro":"ты","nivel":"A1","uso":"El saludo de confianza: amigos, familia, gente de tu edad.","cul":"CUL-001","lex":["CMR-02527"]},
  {"id":"FRS-002","funcion":"saludar","ru":"Здра́вствуйте!","tr":"Zdrástvuiti!","es":"¡Hola! (formal)","registro":"вы","nivel":"A1","uso":"El saludo formal. Sirve a cualquier hora, con quien tratás de вы o con varias personas. En el habla rápida suena «zdrásti».","cul":"CUL-001","lex":["CMR-05479"]},
  {"id":"FRS-003","funcion":"saludar","ru":"До́брое у́тро!","tr":"Dóbrayi útra!","es":"¡Buen día!","registro":"","nivel":"A1","uso":"Hasta el mediodía, más o menos.","lex":["CMR-00662","CMR-00336"]},
  {"id":"FRS-004","funcion":"saludar","ru":"До́брый день!","tr":"Dóbryi dien!","es":"¡Buenas tardes!","registro":"","nivel":"A1","uso":"Durante el día. Es un saludo neutro, muy común en negocios y oficinas.","lex":["CMR-00662","CMR-00071"]},
  {"id":"FRS-005","funcion":"saludar","ru":"До́брый ве́чер!","tr":"Dóbryi viéchir!","es":"¡Buenas noches! (al llegar)","registro":"","nivel":"A1","uso":"Para saludar a la tarde-noche. Para despedirse a la noche se usa споко́йной но́чи.","lex":["CMR-00662","CMR-00295"]},
  {"id":"FRS-006","funcion":"saludar","ru":"Как дела́?","tr":"Kak dilá?","es":"¿Cómo andás?","registro":"ты","nivel":"A1","uso":"Entre conocidos. Se espera una respuesta de verdad.","cul":"CUL-002","lex":["CMR-00019","CMR-00065"]},
  {"id":"FRS-007","funcion":"saludar","ru":"Как у вас дела́?","tr":"Kak u vas dilá?","es":"¿Cómo le va?","registro":"вы","nivel":"A1","uso":"La versión con вы de как дела́.","cul":"CUL-002","lex":["CMR-00019","CMR-00021","CMR-00038","CMR-00065"]},
  {"id":"FRS-008","funcion":"saludar","ru":"Норма́льно.","tr":"Narmálna.","es":"Bien, sin novedades.","registro":"","nivel":"A1","uso":"La respuesta más común a как дела́.","cul":"CUL-002","lex":["CMR-03966"]},
  {"id":"FRS-009","funcion":"despedirse","ru":"Пока́!","tr":"Paká!","es":"¡Chau!","registro":"ты","nivel":"A1","uso":"La despedida de confianza.","cul":"CUL-001","lex":["CMR-00267"]},
  {"id":"FRS-010","funcion":"despedirse","ru":"До свида́ния!","tr":"Do svidániya!","es":"¡Hasta luego!","registro":"вы","nivel":"A1","uso":"La despedida formal; literalmente, «hasta volver a vernos».","cul":"CUL-001","lex":["CMR-00051","CMR-02946"]},
  {"id":"FRS-011","funcion":"despedirse","ru":"До за́втра!","tr":"Do záftra!","es":"¡Hasta mañana!","registro":"","nivel":"A1","uso":"Sirve con ты y con вы.","lex":["CMR-00051","CMR-00865"]},
  {"id":"FRS-012","funcion":"despedirse","ru":"Уви́димся!","tr":"Uvídimsia!","es":"¡Nos vemos!","registro":"","nivel":"A1","uso":"Informal. Con fecha: уви́димся за́втра.","lex":["CMR-05249"]},
  {"id":"FRS-013","funcion":"despedirse","ru":"Мне пора́.","tr":"Mnie pará.","es":"Me tengo que ir.","registro":"","nivel":"A1","uso":"Literalmente, «para mí ya es hora». Para cortar una charla con amabilidad.","lex":["CMR-00005","CMR-00273"]},
  {"id":"FRS-014","funcion":"despedirse","ru":"Споко́йной но́чи!","tr":"Spakóinai nóchi!","es":"¡Que descanses!","registro":"","nivel":"A1","uso":"Solo antes de ir a dormir.","lex":["CMR-01488","CMR-00236"]},
  {"id":"FRS-015","funcion":"presentarse","ru":"Как тебя́ зову́т?","tr":"Kak tibiá zavút?","es":"¿Cómo te llamás?","registro":"ты","nivel":"A1","uso":"Literalmente, «¿cómo te llaman?».","lex":["CMR-00019","CMR-00033","CMR-00912"]},
  {"id":"FRS-016","funcion":"presentarse","ru":"Как вас зову́т?","tr":"Kak vas zavút?","es":"¿Cómo se llama?","registro":"вы","nivel":"A1","uso":"La versión con вы.","lex":["CMR-00019","CMR-00038","CMR-00912"]},
  {"id":"FRS-017","funcion":"presentarse","ru":"Меня́ зову́т…","tr":"Miniá zavút…","es":"Me llamo…","registro":"","nivel":"A1","uso":"Literalmente, «me llaman…». El nombre va en nominativo.","lex":["CMR-00005","CMR-00912"]},
  {"id":"FRS-018","funcion":"presentarse","ru":"О́чень прия́тно!","tr":"Óchin priyátna!","es":"¡Mucho gusto!","registro":"","nivel":"A1","uso":"Al conocer a alguien. Se contesta мне то́же.","lex":["CMR-00069","CMR-02314"]},
  {"id":"FRS-019","funcion":"presentarse","ru":"Мне то́же.","tr":"Mnie tózhi.","es":"Igualmente.","registro":"","nivel":"A1","uso":"Respuesta a о́чень прия́тно.","lex":["CMR-00005","CMR-00111"]},
  {"id":"FRS-020","funcion":"presentarse","ru":"Познако́мься, э́то…","tr":"Paznakómsia, éta…","es":"Te presento a…","registro":"ты","nivel":"A1","uso":"Para presentar a alguien. Con вы o a varios: познако́мьтесь.","lex":["CMR-01793","CMR-00012"]},
  {"id":"FRS-021","funcion":"hablar-de-uno","ru":"Отку́да ты?","tr":"Atkúda ty?","es":"¿De dónde sos?","registro":"ты","nivel":"A1","uso":"Se contesta я из… + genitivo.","lex":["CMR-00761","CMR-00033"]},
  {"id":"FRS-022","funcion":"hablar-de-uno","ru":"Отку́да вы?","tr":"Atkúda vy?","es":"¿De dónde es usted?","registro":"вы","nivel":"A1","uso":"La versión con вы.","lex":["CMR-00761","CMR-00038"]},
  {"id":"FRS-023","funcion":"hablar-de-uno","ru":"Я из…","tr":"Ya is…","es":"Soy de…","registro":"","nivel":"A1","uso":"Из + genitivo: я из Аргенти́ны.","lex":["CMR-00005","CMR-00020"]},
  {"id":"FRS-024","funcion":"agradecer","ru":"Спаси́бо!","tr":"Spasíba!","es":"¡Gracias!","registro":"","nivel":"A1","uso":"Con большо́е: «muchas gracias».","lex":["CMR-02213"]},
  {"id":"FRS-025","funcion":"agradecer","ru":"Пожа́луйста!","tr":"Pazháluista!","es":"¡Por favor! / ¡De nada! / Acá tiene.","registro":"","nivel":"A1","uso":"La palabra comodín: sirve para pedir, para responder a un gracias y para dar algo.","cul":"CUL-004","lex":["CMR-01243"]},
  {"id":"FRS-026","funcion":"agradecer","ru":"Не за что!","tr":"Nié za shta!","es":"¡No hay de qué!","registro":"","nivel":"A1","uso":"Respuesta a спаси́бо. Suena «nié-za-shta».","cul":"CUL-004","lex":["CMR-00003","CMR-00024","CMR-00009"]},
  {"id":"FRS-027","funcion":"agradecer","ru":"Извини́те!","tr":"Izviníti!","es":"¡Disculpe! / ¡Perdón!","registro":"вы","nivel":"A1","uso":"Para pedir perdón o para empezar una pregunta a un desconocido. Con ты: извини́.","cul":"CUL-009","lex":["CMR-01992"]},
  {"id":"FRS-028","funcion":"entender","ru":"Ты говори́шь по-ру́сски?","tr":"Ty gavarísh parússki?","es":"¿Hablás ruso?","registro":"ты","nivel":"A1","uso":"По-ру́сски: «en ruso», con verbos como hablar, leer o escribir.","lex":["CMR-00033","CMR-00058","CMR-03512"]},
  {"id":"FRS-029","funcion":"entender","ru":"Вы говори́те по-англи́йски?","tr":"Vy gavaríti paanglíiski?","es":"¿Habla inglés?","registro":"вы","nivel":"A1","uso":"Útil para pedir ayuda en otro idioma.","lex":["CMR-00038","CMR-00058","CMR-05475"]},
  {"id":"FRS-030","funcion":"entender","ru":"Я не понима́ю.","tr":"Ya nie panimáyu.","es":"No entiendo.","registro":"","nivel":"A1","uso":"Para frenar la conversación sin cortarla.","lex":["CMR-00005","CMR-00003","CMR-00160"]},
  {"id":"FRS-031","funcion":"entender","ru":"Говори́те ме́дленнее, пожа́луйста.","tr":"Gavaríti miédlinniyi, pazháluista.","es":"Hable más despacio, por favor.","registro":"вы","nivel":"A1","uso":"Con ты: говори́ ме́дленнее.","lex":["CMR-00058","CMR-01044","CMR-01243"]},
  {"id":"FRS-032","funcion":"pedir","ru":"Я бу́ду…","tr":"Ya búdu…","es":"Voy a pedir…","registro":"","nivel":"A1","uso":"La forma más natural de pedir en un café o restaurante.","cul":"CUL-005","lex":["CMR-00005","CMR-00006"]},
  {"id":"FRS-033","funcion":"pedir","ru":"Ско́лько сто́ит?","tr":"Skólka stóit?","es":"¿Cuánto sale?","registro":"","nivel":"A1","uso":"Para una cosa: ско́лько сто́ит э́та ша́пка?","lex":["CMR-00384","CMR-00182"]},
  {"id":"FRS-034","funcion":"pedir","ru":"Мо́жно посмотре́ть?","tr":"Mózhna pasmatriét?","es":"¿Puedo ver?","registro":"","nivel":"A1","uso":"Мо́жно + infinitivo: la forma más común de pedir permiso.","lex":["CMR-00082","CMR-00321"]},
  {"id":"FRS-035","funcion":"pedir","ru":"Возьму́.","tr":"Vazmú.","es":"Lo llevo.","registro":"","nivel":"A1","uso":"Futuro de взять: «lo voy a llevar».","lex":["CMR-00175"]},
  {"id":"FRS-036","funcion":"orientarse","ru":"Где…?","tr":"Gdie…?","es":"¿Dónde está…?","registro":"","nivel":"A1","uso":"Sin verbo: где метро́?, «¿dónde (está) el subte?».","lex":["CMR-00079"]},
  {"id":"FRS-037","funcion":"orientarse","ru":"Скажи́те, пожа́луйста…","tr":"Skazhíti, pazháluista…","es":"Disculpe…","registro":"вы","nivel":"A1","uso":"Literalmente, «dígame, por favor». Para empezar una pregunta en la calle.","cul":"CUL-009","lex":["CMR-00042","CMR-01243"]},
  {"id":"FRS-038","funcion":"orientarse","ru":"Как дое́хать до…?","tr":"Kak dayéjat do…?","es":"¿Cómo llego a…?","registro":"","nivel":"A1","uso":"En transporte. До + genitivo: до це́нтра.","lex":["CMR-00019","CMR-05472","CMR-00051"]},
  {"id":"FRS-039","funcion":"orientarse","ru":"Э́то далеко́?","tr":"Éta dalikó?","es":"¿Es lejos?","registro":"","nivel":"A1","uso":"Respuestas: далеко́ (lejos), бли́зко (cerca).","lex":["CMR-00012","CMR-00688"]},
  {"id":"FRS-040","funcion":"ayuda","ru":"Помоги́те!","tr":"Pamaguíti!","es":"¡Ayuda! / ¿Me ayuda?","registro":"вы","nivel":"A1","uso":"Para pedir ayuda a cualquiera, con urgencia o con пожа́луйста.","cul":"CUL-008","lex":["CMR-00497"]},
  {"id":"FRS-041","funcion":"ayuda","ru":"Что случи́лось?","tr":"Shto sluchílas?","es":"¿Qué pasó?","registro":"","nivel":"A1","uso":"Para preguntar qué sucede.","lex":["CMR-00009","CMR-00638"]},
  {"id":"FRS-042","funcion":"ayuda","ru":"Вы́зовите ско́рую!","tr":"Výzaviti skóruyu!","es":"¡Llame a una ambulancia!","registro":"вы","nivel":"A1","uso":"La ambulancia se llama ско́рая по́мощь. El número es el 103 (o el 112).","cul":"CUL-008","lex":["CMR-00750","CMR-00492"]},
  {"id":"FRS-043","funcion":"datos","ru":"Кото́рый час?","tr":"Katóryi chas?","es":"¿Qué hora es?","registro":"","nivel":"A1","uso":"También se dice ско́лько вре́мени?","lex":["CMR-00022","CMR-00200"]},
  {"id":"FRS-044","funcion":"datos","ru":"Кака́я сего́дня пого́да?","tr":"Kakáya sivódnia pagóda?","es":"¿Cómo está el tiempo hoy?","registro":"","nivel":"A1","uso":"Кака́я concuerda con пого́да (femenino).","lex":["CMR-00084","CMR-00202","CMR-02268"]},
  {"id":"FRS-045","funcion":"salud","ru":"Как ты себя́ чу́вствуешь?","tr":"Kak ty sibiá chústvuyish?","es":"¿Cómo te sentís?","registro":"ты","nivel":"A1","uso":"Con вы: как вы себя́ чу́вствуете?","lex":["CMR-00019","CMR-00033","CMR-00047","CMR-00428"]},
  {"id":"FRS-046","funcion":"salud","ru":"У меня́ боли́т…","tr":"U miniá balít…","es":"Me duele…","registro":"","nivel":"A1","uso":"Lo que duele va en nominativo: у меня́ боли́т голова́.","lex":["CMR-00021","CMR-00005","CMR-05466"]},
  {"id":"FRS-047","funcion":"gustos","ru":"Тебе́ нра́вится…?","tr":"Tibié nrávitsa…?","es":"¿Te gusta…?","registro":"ты","nivel":"A1","uso":"Lo que gusta va en nominativo; a quién le gusta, en dativo.","lex":["CMR-00033","CMR-00711"]},
  {"id":"FRS-048","funcion":"invitar","ru":"Пойдём…?","tr":"Paidióm…?","es":"¿Vamos…?","registro":"","nivel":"A1","uso":"Para invitar: пойдём в кино́?","lex":["CMR-00153"]},
  {"id":"FRS-049","funcion":"invitar","ru":"Дава́й!","tr":"Davái!","es":"¡Dale!","registro":"ты","nivel":"A1","uso":"Para aceptar una propuesta con confianza.","lex":["CMR-01204"]},
  {"id":"FRS-050","funcion":"invitar","ru":"Договори́лись!","tr":"Dagavarílis!","es":"¡Listo, quedamos!","registro":"","nivel":"A1","uso":"Para cerrar un acuerdo o un plan.","lex":["CMR-02168"]},
  {"id":"FRS-051","funcion":"felicitar","ru":"С днём рожде́ния!","tr":"S dniom razhdiéniya!","es":"¡Feliz cumpleaños!","registro":"","nivel":"A1","uso":"Solo el día del cumpleaños o después, nunca antes.","cul":"CUL-006","lex":["CMR-00008","CMR-00071","CMR-01230"]},
  {"id":"FRS-052","funcion":"felicitar","ru":"Молоде́ц!","tr":"Maladiéts!","es":"¡Bien hecho!","registro":"","nivel":"A1","uso":"Elogio para un hombre o una mujer.","lex":["CMR-02877"]}
];

function fraseById(id) { return FRASES.find(f => f.id === id) || null; }
if (typeof window !== "undefined") window.fraseById = fraseById;
