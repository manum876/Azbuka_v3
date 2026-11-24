/* ============================================================
   DATA-UNIDAD-ES-14.JS — Abecé · Итоговый экзамен (Unidad 14)
   ------------------------------------------------------------
   20/11/2026. La misma lógica que el examen final de Azbuka
   (data-unidad-14.js; Manu: «sigamos la misma lógica que tiene
   Azbuka, que ya funciona bien. No inventemos»):
     Seis bloques, 100 puntos: Lectura 15 · Audio 15 · Gramática 20 ·
     Vocabulario 10 · Escritura 20 · Comunicación 20.
   · Cada bloque se hace por separado y se guarda (az_es_examen_final);
     el puntaje final aparece cuando están los seis.
   · Se aprueba con 80 → pantalla «Hablas español».
   · Una respuesta libre que «Понятно» vale medio punto.
   · Sin vocabulario nuevo: solo palabras de las unidades 1 a 13.
   · Audio, Gramática y Vocabulario sortean sus preguntas en cada intento
     (ES14_LUGARES, es14Intento) y cada pregunta dice qué regla evalúa
     (`regla` = id de la sección de su unidad): al terminar, «Что
     повторить» abre esa sección (las 13 unidades están cargadas).
   · La escritura se puntúa por cobertura de objetivos (ES13_DET, de
     data-unidad-es-13.js), con descuento por palabras que no existen y
     errores típicos: es una aproximación, y la página lo dice.
   Diferencias con Azbuka (las reglas de Abecé, PROGRAMA_ABECE.md §0):
   · Las preguntas de lectura y audio, en español (como desde la U5).
   · Sin traducir: donde Azbuka pide «Escribe en ruso», Abecé hace el
     dictado de la palabra (lo que hacen sus unidades).
   ============================================================ */

/* ── Bloque 1: lectura (tres textos de dificultad creciente) ── */
const ES14_LECTURAS = [
  { id: "msj", titulo: "Mensaje", lineas: [
      "¡Hola, Ana! Hoy trabajo hasta las seis.", "Después del trabajo quiero ir a un bar con unos amigos.", "Vamos a estar en el bar que está al lado del metro.", "¿Quieres venir con nosotros? ¡Escríbeme! Lucía"],
    preguntas: [["¿Hasta qué hora trabaja Lucía?", "Hasta las seis", ["Hasta las siete", "Hasta las cinco"]], ["¿Qué quiere hacer después del trabajo?", "Ir a un bar", ["Ir a casa", "Ir al teatro"]],
      ["¿Con quién?", "Con unos amigos", ["Con su madre", "Con su hermano"]], ["¿Dónde van a estar?", "Al lado del metro", ["En el centro", "En casa"]]],
    vf: [["Lucía invita a Ana.", true]] },
  { id: "viaje", titulo: "Mi viaje a Sevilla", lineas: [
      "En abril fui a Sevilla con una amiga.", "Estuvimos allí cinco días y dormimos en un hotel al lado del río.", "Cada día caminábamos mucho y veíamos la ciudad.",
      "El lunes visitamos un museo y por la noche fuimos a un espectáculo de música.", "Hacía buen tiempo: ya hacía calor.", "Me gustó mucho la comida, sobre todo la tortilla.",
      "Los restaurantes del centro eran demasiado caros, por eso a menudo comíamos en bares pequeños.", "El último día compramos regalos para nuestras familias.",
      "Fue el viaje más interesante de mi vida.", "El año que viene quiero volver."],
    preguntas: [["¿Con quién viajó?", "Con una amiga", ["Con su hermano", "Con su madre"]], ["¿Cuántos días estuvieron?", "Cinco días", ["Dos días", "Diez días"]],
      ["¿Qué hicieron el lunes por la noche?", "Fueron a un espectáculo", ["Visitaron un museo", "Caminaron por el parque"]], ["¿Por qué comían en bares pequeños?", "Los restaurantes eran caros", ["Hacía calor", "Los bares eran bonitos"]],
      ["¿Qué piensa del viaje?", "Fue el más interesante", ["Fue demasiado caro", "Fue aburrido"]]],
    vf: [["No le gustó la comida.", false], ["Quiere volver el año que viene.", true]] },
  { id: "barcelona", titulo: "Por qué me gusta Barcelona", lineas: [
      "Vivo en Barcelona desde hace cinco años y me gusta mucho.", "En mi opinión, es la ciudad más cómoda de España.",
      "El metro funciona muy bien, por eso no tengo coche.", "Además, aquí hay mar y montaña.", "En verano voy a menudo a la playa y en invierno voy a la montaña con mis amigos.",
      "El tiempo es mejor que en Moscú: en invierno no hace frío.", "Claro que también hay problemas.", "Los pisos son demasiado caros y en verano hay muchos turistas.",
      "Aunque vivir aquí es caro, creo que Barcelona es una ciudad muy buena.", "No me gustaría vivir en otra ciudad."],
    preguntas: [["¿Cuál es la idea principal?", "Le gusta mucho vivir allí", ["Quiere irse de allí", "Allí todo es caro"]], ["¿Por qué no tiene coche?", "Porque el metro funciona bien", ["Porque no tiene dinero", "Porque no tiene tiempo"]],
      ["¿Con qué ciudad la compara?", "Con Moscú", ["Con Madrid", "Con Sevilla"]], ["¿Qué problema menciona?", "Los pisos son caros", ["Hace mal tiempo", "No hay mar"]],
      ["¿Qué hace en invierno?", "Va a la montaña", ["Va a la playa", "Trabaja en casa"]]],
    vf: [["Quiere vivir en otra ciudad.", false], ["En invierno en Barcelona no hace frío.", true]] }
];

/* ── Bloque 2: audio (diálogo, conversación, relato, de oído y dos respuestas escritas) ── */
const ES14_AUDIOS = [
  { id: "bar", rate: 0.85, titulo: "En un bar", lineas: [["camarero", "¡Hola! ¿Qué te pongo?"], ["f", "Un té y una ensalada, por favor."], ["camarero", "¿Té negro o verde?"], ["f", "Verde."], ["camarero", "¿Algo más?"], ["f", "No, gracias. ¿Puedo pagar con tarjeta?"], ["camarero", "Claro."]],
    preguntas: [["¿Qué té pide?", "Verde", ["Negro", "Con leche"]], ["¿Cómo paga?", "Con tarjeta", ["En efectivo", "No paga"]]], vf: [["Ella pide un café.", false]] },
  { id: "amigos", rate: 0.9, titulo: "Conversación entre amigos", lineas: [["pablo", "¡Hola, Ana! ¿Qué tal?"], ["ana", "¡Bien! Ahora trabajo en una oficina nueva."], ["pablo", "¿Dónde está?"], ["ana", "En el centro, al lado del museo. ¿Y tú? ¿Qué planes tienes para el verano?"],
      ["pablo", "En julio voy a ir a Madrid. Allí vive mi hermano."], ["ana", "¡Qué bien! Yo quiero ir a la playa, pero tengo poco tiempo."], ["pablo", "¿Y en agosto?"], ["ana", "Seguramente sí."]],
    preguntas: [["¿Dónde está la oficina nueva?", "En el centro", ["Al lado del mar", "En Madrid"]], ["¿Cuándo viaja él?", "En julio", ["En agosto", "En mayo"]], ["¿Quién vive en Madrid?", "Su hermano", ["Su hermana", "Ana"]],
      ["¿Por qué ella todavía no va a la playa?", "Tiene poco tiempo", ["No tiene dinero", "Hace mal tiempo"]]], vf: [["Ana, seguramente, irá a la playa en agosto.", true]] },
  { id: "sabado", rate: 0.95, titulo: "El sábado de Marta", lineas: [["marta", "El sábado por la mañana dormí mucho."], ["marta", "Después llamé a una amiga y fuimos al parque."], ["marta", "Allí caminamos dos horas y hablamos de muchas cosas."],
      ["marta", "Luego comimos en un bar pequeño."], ["marta", "Por la tarde estuve en casa: leí un libro y vi una película."], ["marta", "Fue un día muy bueno, aunque hacía frío."], ["marta", "El domingo voy a trabajar."]],
    preguntas: [["¿Qué hizo primero?", "Durmió mucho", ["Llamó a una amiga", "Leyó un libro"]], ["¿Cuánto tiempo caminaron?", "Dos horas", ["Todo el día", "Cinco horas"]],
      ["¿Qué hicieron después de caminar?", "Comieron", ["Fueron al parque", "Vieron una película"]], ["¿Qué va a hacer el domingo?", "Trabajar", ["Descansar", "Leer"]]],
    vf: [["Hacía calor.", false], ["Por la tarde estuvo en casa.", true]] }
];
/* Escuchar y contestar por escrito en español */
const ES14_AUDIO_RESP = [
  { audio: [{ texto: "¡Hola! Estamos en el bar de al lado del metro. ¿Vienes?", genero: "lucia" }], pide: "Послушай. Ответь: ты не можешь прийти, объясни почему и предложи другой день.",
    nec: [["не можешь", "no puedo|no voy|no podré|~no"], ["почему", "porque|tengo que|~trabajo|~estoy"], ["другой день", "el sábado|el domingo|mañana|el viernes|otro día|~el"]], modelo: "Lo siento, no puedo, porque tengo que trabajar. ¿Quedamos mañana?" },
  { audio: [{ texto: "¿Qué hiciste el verano pasado?", genero: "javier" }], pide: "Послушай. Расскажи, что ты делал прошлым летом (две вещи).",
    nec: [["прошедшее время", "fui|estuve|hice|viajé|visité|pasé|leí|trabajé|tuve", "^[a-záéíóúñ]+(é|í|aste|iste|ó|ió|amos|imos)$"], ["вторая вещь", "y|después|luego|también|además"]], modelo: "El verano pasado fui a la playa y leí mucho." }
];
/* De oído: [frase, pregunta, opciones (la primera es la correcta), explicación, regla] */
const ES14_OIDO = [
  ["Estoy cansada.", "Послушай. Кто говорит?", ["Женщина", "Мужчина"], "**cansada** — ж. р.", "es3-adj-concordancia"],
  ["Estoy muy contento.", "Послушай. Кто говорит?", ["Мужчина", "Женщина"], "**contento** — м. р.", "es3-adj-concordancia"],
  ["Habló con Ana.", "Послушай. Когда?", ["В прошлом", "Сейчас", "В будущем"], "**habló** — indefinido (ударение в конце).", "es8-indef-tilde"],
  ["Hablo con Ana.", "Послушай. Когда?", ["Сейчас", "В прошлом", "В будущем"], "**hablo** — presente.", "es8-indef-tilde"],
  ["Mañana iré a Madrid.", "Послушай. Когда?", ["В будущем", "В прошлом", "Сейчас"], "**iré** — futuro.", "es10-futuro-irr"],
  ["Cuando llegué, ya se había ido.", "Послушай. Кто ушёл раньше?", ["Он ушёл до того, как я пришёл", "Я пришёл, а потом он ушёл"], "**se había ido** — раньше.", "es13-pluscuam-uso"],
  ["Dice que vengas.", "Послушай. Что это?", ["Просьба", "Сообщение"], "**vengas** — subjuntivo: просьба.", "es13-pide-que"],
  ["Me dan miedo los perros.", "Послушай. Чего он боится?", ["Собак", "Одной собаки"], "**dan** — мн. ч.", "es13-me-da"],
  ["Se lo doy mañana.", "Послушай. Сколько местоимений перед глаголом?", ["Два", "Одно"], "**se lo** — ему + это.", "es12-se-lo"]
];

/* ── Bloque 3: gramática (con `regla` y sorteo por lugar) ──
   [frase con ___, correcta, opciones, explicación, regla, pista?] */
const ES14_GRAM = {
  serEstar: [["Madrid ___ en el centro de España.", "está", ["está", "es", "hay"], "Где находится — **estar**.", "es3-hay-esta"],
    ["En mi calle ___ una farmacia.", "hay", ["hay", "está", "es"], "Что есть — **hay** + un / una.", "es3-hay-esta"],
    ["Ana ___ muy simpática.", "es", ["es", "está", "hay"], "Характер — **ser**.", "es3-ser-estar"],
    ["Hoy Pablo ___ cansado.", "está", ["está", "es", "hay"], "Состояние — **estar**.", "es3-estados"],
    ["La sopa ___ muy rica.", "está", ["está", "es", "hay"], "О вкусе блюда — **estar rico**.", "es12-ser-estar-cambio"],
    ["La fiesta ___ en mi casa.", "es", ["es", "está", "hay"], "Событие — **ser**.", "es12-ser-estar-repaso"]],
  concord: [["Tengo dos hermanas ___.", "mayores", ["mayores", "mayor", "mayoras"], "Согласование: **hermanas mayores**.", "es3-adj-concordancia"],
    ["Quiero ___ agua, por favor.", "—", ["—", "la", "una"], "Неисчисляемое в общем — без артикля: **quiero agua**.", "es5-incontable"],
    ["___ problema es muy grande.", "El", ["El", "La", "Lo"], "**el problema** — м. р.", "es2-el-un"],
    ["Las ciudades ___ son caras.", "grandes", ["grandes", "grande", "grandas"], "Мн. ч.: **grandes**.", "es3-adj-concordancia"],
    ["La mayoría de mis amigos ___ en Madrid.", "vive", ["vive", "vivo", "vivís"], "**la mayoría** + глагол обычно в ед. ч. (можно и во мн. ч.).", "es13-concordancia"]],
  presente: [["Yo ___ las ocho horas cada noche. (dormir)", "duermo", ["duermo", "dormo", "durmo"], "o → ue: **duermo**.", "es4-o-ue"],
    ["Yo ___ deporte los sábados. (hacer)", "hago", ["hago", "haco", "hazo"], "yo -go: **hago**.", "es4-yo-go"],
    ["Mis padres ___ temprano. (levantarse)", "se levantan", ["se levantan", "levantan", "se levanta"], "С **se**: **se levantan**.", "es4-reflexivo"],
    ["¿A qué hora ___ la película? (empezar)", "empieza", ["empieza", "empeza", "empiezan"], "e → ie: **empieza**.", "es4-e-ie"]],
  pasados: [["Ayer ___ al cine con Lucía.", "fui", ["fui", "he ido", "iba"], "**ayer** — indefinido.", "es8-perf-indef"],
    ["Esta mañana ___ tarde.", "me he levantado", ["me he levantado", "me levanté", "me levantaba"], "**esta mañana** — perfecto.", "es8-perf-indef"],
    ["De niño ___ en un pueblo.", "vivía", ["vivía", "viví", "he vivido"], "Привычка, фон — imperfecto.", "es9-imperf-uso"],
    ["___ sol y fuimos a la playa.", "Hacía", ["Hacía", "Hizo", "Ha hecho"], "Фон — imperfecto.", "es9-fondo-suceso"],
    ["Estaba en casa cuando ___ el teléfono.", "sonó", ["sonó", "sonaba", "ha sonado"], "Событие прерывает фон — indefinido.", "es9-interrumpida"],
    ["Cuando llegué, el tren ya ___.", "había salido", ["había salido", "salió", "sale"], "Раньше другого события в прошлом — pluscuamperfecto.", "es13-pluscuam-uso"]],
  futuro: [["Si tengo tiempo, te ___.", "llamaré", ["llamaré", "llame", "llamaría"], "**si** + presente → futuro.", "es10-si"],
    ["Si ___ dinero, compraré un coche.", "tengo", ["tengo", "tendré", "tenga"], "В реальном условии после si — presente.", "es10-si"],
    ["¿___ abrir la ventana, por favor?", "Podrías", ["Podrías", "Podrás", "Puedas"], "Вежливая просьба — condicional.", "es10-cortesia"],
    ["El año que viene ___ a Rusia.", "viajaré", ["viajaré", "viajé", "viajaba"], "Будущее — futuro.", "es10-futuro-reg"]],
  subj: [["Quiero que ___ a mi fiesta.", "vengas", ["vengas", "vienes", "vendrás"], "**quiero que** + subjuntivo.", "es11-querer-que"],
    ["Cuando ___ a casa, te llamo.", "llegue", ["llegue", "llego", "llegaré"], "**cuando** о будущем — subjuntivo.", "es11-cuando"],
    ["No creo que ___ verdad.", "sea", ["sea", "es", "será"], "**no creo que** + subjuntivo.", "es11-duda"],
    ["Ojalá ___ buen tiempo mañana.", "haga", ["haga", "hace", "hará"], "**ojalá** + subjuntivo.", "es11-subj-irr"],
    ["Te lo explico para que lo ___.", "entiendas", ["entiendas", "entiendes", "entender"], "**para que** + subjuntivo.", "es11-para-que"]],
  pron: [["¿La camiseta? ___ compro.", "La", ["La", "Lo", "Le"], "**la camiseta** → **la**.", "es5-od-que-es"],
    ["A mi madre ___ escribo cada semana.", "le", ["le", "la", "lo"], "Кому? — **le**.", "es7-oi"],
    ["¿El libro? Ya ___ he dado a Marta.", "se lo", ["se lo", "le lo", "lo le"], "**le + lo → se lo**.", "es12-se-lo"],
    ["A Pablo le ___ los perros.", "gustan", ["gustan", "gusta", "gusto"], "**los perros** — мн. ч.: **gustan**.", "es4-gusta-gustan"],
    ["Voy a ___ mañana. (dar — a ti — el libro)", "dártelo", ["dártelo", "darte lo", "te lo dar"], "После инфинитива — слитно: **dártelo**.", "es12-lugar-inf"]],
  prep: [["Este regalo es ___ ti.", "para", ["para", "por", "a"], "Адресат — **para**.", "es12-para"],
    ["Gracias ___ tu ayuda.", "por", ["por", "para", "de"], "Причина — **por**.", "es12-por"],
    ["Mañana voy ___ Madrid.", "a", ["a", "en", "de"], "Куда — **a**.", "es6-a-en-de"],
    ["Voy al trabajo ___ metro.", "en", ["en", "con", "por"], "На транспорте — **en**.", "es6-en-metro"],
    ["Veo ___ Ana todos los días.", "a", ["a", "—", "en"], "Перед человеком — **a**.", "es13-pronombres"]],
  indirecto: [["Ana: «Estoy cansada.» → Ana dijo que ___ cansada.", "estaba", ["estaba", "está", "estará"], "presente → imperfecto.", "es13-dijo-que"],
    ["Pablo: «Te llamaré.» → Pablo dijo que me ___.", "llamaría", ["llamaría", "llamará", "llamaba"], "futuro → condicional.", "es13-dijo-que"],
    ["Marta: «¿Vienes?» → Marta me preguntó ___ iba.", "si", ["si", "que", "que si"], "**si** — без **que**.", "es13-pregunto-si"],
    ["Lucía: «He comido.» → Lucía dijo que ya ___.", "había comido", ["había comido", "ha comido", "comerá"], "perfecto → pluscuamperfecto.", "es13-dijo-que"]],
  /* [frase, traducción (ruso), regla] */
  orden: [["Ayer estuve en un restaurante con mis amigos.", "Вчера я был в ресторане с друзьями.", "es8-fuertes"], ["Mañana vamos a ir a la playa.", "Завтра мы пойдём на пляж.", "es6-ir-a"],
    ["Me gusta mucho esta ciudad.", "Мне очень нравится этот город.", "es4-gustar"], ["Si hace buen tiempo, iremos a la montaña.", "Если будет хорошая погода, поедем в горы.", "es10-si"]],
  /* [frase, palabra equivocada, arreglo, explicación, regla] */
  corr: [["Ana está de Moscú.", "está", "es", "Откуда — **ser de**.", "es2-ser-de"], ["Le lo he dicho.", "Le", "Se", "**le + lo → se lo**.", "es12-se-lo"],
    ["Ayer he ido al cine.", "he", "fui", "**ayer** — indefinido: **Ayer fui al cine.**", "es8-perf-indef"], ["Me gusta los libros.", "gusta", "gustan", "Мн. ч.: **gustan**.", "es4-gusta-gustan"],
    ["Quiero que vienes.", "vienes", "vengas", "**quiero que** + subjuntivo.", "es11-querer-que"]],
  /* «¿Qué falla?»: [frase mal, frase bien, falla (índice en FALLAS), regla] */
  FALLAS: ["Ser или estar", "Глагол не согласуется", "Нужен subjuntivo", "После si — presente", "Le + lo → se lo", "Не то прошедшее время", "Нет «a» перед человеком", "Нужен pluscuamperfecto", "Прилагательное не согласуется"],
  diag: [["El banco es en la plaza.", "El banco está en la plaza.", 0, "es3-hay-esta"], ["Me gusta los perros.", "Me gustan los perros.", 1, "es4-gusta-gustan"],
    ["Espero que vienes pronto.", "Espero que vengas pronto.", 2, "es11-querer-que"], ["Si tendré tiempo, iré.", "Si tengo tiempo, iré.", 3, "es10-si"], ["Le lo doy mañana.", "Se lo doy mañana.", 4, "es12-se-lo"],
    ["Ayer he comido tortilla.", "Ayer comí tortilla.", 5, "es8-perf-indef"], ["Veo mi hermana los lunes.", "Veo a mi hermana los lunes.", 6, "es13-pronombres"],
    ["Cuando llegué, ya salió.", "Cuando llegué, ya había salido.", 7, "es13-pluscuam-uso"], ["Las chicas son muy simpáticos.", "Las chicas son muy simpáticas.", 8, "es3-adj-concordancia"]],
  /* «¿Suena natural?»: [bien, calco, explicación, regla] */
  natural: [["Tengo treinta años.", "Soy treinta años.", "Возраст — **tener**.", "es2-edad"], ["Me gusta esta película.", "Yo gusto esta película.", "То, что нравится, — подлежащее.", "es4-gustar"],
    ["Soy médico.", "Soy un médico.", "Профессия — без артикля.", "es2-profesion"], ["Tengo frío.", "Estoy frío.", "Мне холодно — **tengo frío**.", "es4-hace-tengo"],
    ["Me pongo nervioso antes de los exámenes.", "Estoy nervioso siempre antes de los exámenes.", "Перемена — **ponerse**.", "es13-ponerse"], ["Habla español mejor que yo.", "Habla español más bien que yo.", "Сравнительная степень от bien — **mejor**.", "es7-mejor-peor"]],
  /* «¿Por qué?»: [frase, palabra, correcta, otras, regla] */
  porque: [["Cuando llegué, ya se había ido.", "se había ido", "Это произошло раньше другого события в прошлом.", ["Это будущее", "Это привычка"], "es13-pluscuam-uso"],
    ["Quiero que vengas.", "vengas", "После «quiero que» — subjuntivo", ["Это прошлое", "Это вопрос"], "es11-querer-que"],
    ["Hacía sol y fuimos a la playa.", "Hacía", "Это фон рассказа", ["Это событие", "Это будущее"], "es9-fondo-suceso"],
    ["Ana dijo que estaba cansada.", "estaba", "После «dijo que» время сдвигается назад", ["Она устала давно", "Это ошибка"], "es13-dijo-que"],
    ["Se lo doy a Ana.", "Se", "Перед lo «le» становится «se»", ["Это возвратный глагол", "Это ошибка"], "es12-se-lo"],
    ["Me gustan los perros.", "gustan", "«Los perros» — мн. ч.", ["Я люблю многих", "Это ошибка"], "es4-gusta-gustan"]]
};

/* ── Bloque 4: vocabulario en contexto (palabras de las unidades 2 a 13) ── */
const ES14_LEX = [
  ["Espero el ___ en la parada.", "autobús", ["autobús", "tren", "avión"]], ["En la ___ compramos el pan y la leche.", "tienda", ["tienda", "farmacia", "biblioteca"]],
  ["Mi hermano trabaja en un hospital. Es ___.", "médico", ["médico", "profesor", "camarero"]], ["Tengo frío. ¿Puedes cerrar la ___, por favor?", "ventana", ["ventana", "mesa", "cama"]],
  ["Estás en un bar y quieres un café. ¿Qué dices?", "¿Me pones un café, por favor?", ["¿Me pones un café, por favor?", "¿Dónde está mi café?", "No bebo café."]],
  ["En julio en Sevilla hace mucho ___.", "calor", ["calor", "frío", "viento"]], ["No entiendo. ¿Puedes ___, por favor?", "repetir", ["repetir", "cerrar", "pagar"]],
  ["En mi tiempo libre me ___ leer.", "gusta", ["gusta", "trabaja", "llama"]], ["El billete de tren se puede comprar en la ___.", "estación", ["estación", "playa", "cocina"]],
  ["Es mi ___: vive en el piso de al lado.", "vecino", ["vecino", "jefe", "médico"]], ["Trabaja en un colegio. Es ___.", "profesora", ["profesora", "médica", "camarera"]],
  ["El tren sale a las ocho: lo he mirado en el ___.", "horario", ["horario", "menú", "periódico"]],
  ["Siempre dice la verdad: nunca dice ___.", "mentiras", ["mentiras", "bromas", "noticias"]],
  ["Hay un ___ en tu texto: se escribe «está», con tilde.", "error", ["error", "acento", "secreto"]],
  ["Estoy muy cansado, ___ me voy a dormir temprano.", "por eso", ["por eso", "porque", "aunque"]],
  ["___ hacía frío, salimos a caminar.", "Aunque", ["Aunque", "Por eso", "Porque"]],
  ["Mi móvil no funciona: se ha quedado sin ___.", "batería", ["batería", "rebajas", "cambio"]],
  ["Hoy en la tienda hay ___: todo es más barato.", "rebajas", ["rebajas", "facturas", "averías"]],
  ["Gracias por la ___: iré a tu cumpleaños.", "invitación", ["invitación", "reclamación", "noticia"]],
  ["Se ha roto el ___ y no hay agua en la cocina.", "grifo", ["grifo", "enchufe", "borrador"]],
  ["Mi amigo escribe novelas: es ___.", "escritor", ["escritor", "conductor", "dependiente"]],
  ["Me encanta cocinar: lo hago en mi tiempo ___.", "libre", ["libre", "ocupado", "lleno"]],
  ["¿Vienes al cine? — No sé, ___.", "a lo mejor", ["a lo mejor", "en primer lugar", "por ejemplo"]],
  ["Me olvidé de su nombre, pero después me ___.", "acordé", ["acordé", "olvidé", "perdí"]],
  ["Vivir lejos de mi familia es duro: siento mucha ___.", "nostalgia", ["nostalgia", "alegría", "confianza"]]
];
const ES14_LEX_EMP = [
  [["el horario", "¿A qué hora sale el tren?"], ["el menú", "¿Qué hay para comer?"], ["el billete", "Para viajar en tren"], ["el anuncio", "Se vende un piso"]],
  [["¡Hola!", "Te encuentras con un amigo"], ["¡Hasta luego!", "Te vas de una tienda"], ["¡Gracias!", "Alguien te ha ayudado"], ["¡Perdone!", "Le preguntas algo a una persona en la calle"]],
  [["En primer lugar…", "Das la primera razón"], ["Por cierto…", "Cambias de tema"], ["Bueno…", "Necesitas pensar"], ["Estoy de acuerdo.", "Piensas lo mismo"]],
  [["¡Qué bien!", "Una buena noticia"], ["¡Qué pena!", "Una mala noticia"], ["¡Menos mal!", "Algo malo no ha pasado"], ["¡No me digas!", "Una noticia sorprendente"]]
];
/* Palabras de las unidades 7 a 13 para «Что значит?» y el dictado (la traducción, de su ficha del léxico) */
const ES14_VOC = "horario=расписание|libre=свободный|ocupado=занятый|primavera=весна|otoño=осень|siglo=век|casi=почти|" +
  "lluvia=дождь|nieve=снег|viento=ветер|aburrido=скучный|perder=терять|regalar=дарить|maleta=чемодан|montaña=гора|infancia=детство|nacer=родиться|" +
  "avión=самолёт|prometer=обещать|decisión=решение|equipaje=багаж|pasaporte=паспорт|vuelo=рейс|quedarse=остаться|jefe=начальник|abogado=юрист|" +
  "bolsa=пакет|falda=юбка|postre=десерт|helado=мороженое|cruzar=переходить|contraseña=пароль|" +
  "invitación=приглашение|opinión=мнение|mitad=половина|mayoría=большинство|construir=строить|encender=включать|apagar=выключать|simple=простой|complicado=сложный|" +
  "experiencia=опыт|recuerdo=воспоминание|felicidad=счастье|miedo=страх|pregunta=вопрос|respuesta=ответ|publicidad=реклама|artículo=статья|pantalla=экран|" +
  "conversación=разговор|nostalgia=ностальгия|borrador=черновик|párrafo=абзац|reseña=отзыв|esfuerzo=усилие|esperanza=надежда|silencio=тишина|sonido=звук";

/* ── Bloque 6: comunicación ── */
const ES14_SITUACIONES = [
  { escena: "👕", pide: "Ты в магазине. Рубашка мала, ищешь другую. Попроси продавца о помощи.", nec: [["попросить", "perdona|perdone|¿tienes|tienes|¿tiene|tiene|me puedes|puedes|~por favor"], ["рубашка", "camisa|otra|~talla"], ["проблема", "pequeña|grande|más grande|otra talla|~talla"]], modelo: "Perdona, ¿tienes esta camisa en una talla más grande? Esta es pequeña." },
  { escena: "🚇", pide: "Ты на улице и не можешь найти метро. Спроси прохожего.", nec: [["извиниться", "perdone|perdona|disculpe|~oiga"], ["метро", "metro"], ["где", "dónde|donde|cómo llego|~cerca"]], modelo: "Perdone, ¿dónde está el metro?" },
  { escena: "🍽️", pide: "В ресторане попроси счёт и спроси, можно ли заплатить картой.", nec: [["счёт", "la cuenta|cuenta"], ["картой", "con tarjeta|tarjeta"]], modelo: "La cuenta, por favor. ¿Puedo pagar con tarjeta?" },
  { escena: "⏰", pide: "Ты опаздываешь на встречу с другом. Напиши сообщение: предупреди и скажи, на сколько.", nec: [["опаздываешь", "llego tarde|voy a llegar tarde|llegaré tarde|~tarde"], ["на сколько", "minutos|media hora|una hora|~en"]], modelo: "Perdona, llego tarde: estoy ahí en diez minutos." }
];
const ES14_ESPONT = [
  { audio: "¿Qué hiciste el sábado?", quien: "javier", pide: "Ответь свободно (в прошедшем).", nec: [["прошедшее время", "fui|estuve|hice|vi|leí|comí|salí|dormí", "^[a-záéíóúñ]+(é|í|aste|iste|ó|ió|amos|imos)$"]], modelo: "El sábado fui al cine con unos amigos." },
  { audio: "¿Qué planes tienes para la semana que viene?", quien: "lucia", pide: "Ответь свободно (планы).", nec: [["план", "voy a|vamos a|quiero|pienso|me gustaría", "^[a-záéíóúñ]+(ré|rás|rá|remos|rán)$"]], modelo: "La semana que viene voy a trabajar mucho." },
  { audio: "¿Qué te gusta de tu ciudad?", quien: "marta", pide: "Ответь и объясни почему.", nec: [["что нравится", "me gusta|me gustan|me encanta|me encantan|lo que más"], ["причина", "porque|por eso|ya que|como"]], modelo: "Me gusta el mar, porque me encanta caminar por la playa." }
];
/* Conversación de diez intervenciones con Javier (la forma de los turnos de Abecé: es13Turnos) */
function ES14_CONV() {
  if (ES14_CONV.cache) return ES14_CONV.cache;
  const P = "fui|estuve|hice|vi|leí|comí|salí|me quedé|era|estaba|tenía";
  const PRX = "^[a-záéíóúñ]+(é|í|aste|iste|ó|ió|amos|imos|aba|ía)$";
  return (ES14_CONV.cache = es13Turnos("Javier", "javier", "Conversación con Javier", false, 6, [
    ["¡Hola! ¿Qué tal?", "Привет! Как дела?", "Ответь и задай вопрос в ответ.", [["как дела", "bien|muy bien|genial|regular|mal|~fenomenal"], ["вопрос в ответ", "y tú|¿y tú|y a ti|~tú"]], "Muy bien, gracias. ¿Y tú?"],
    ["Bien también. ¿Qué planes tienes para el fin de semana?", "Тоже хорошо. Какие у тебя планы на выходные?", "Расскажи о плане.", [["план", "voy a|vamos a|quiero|pienso|me gustaría", "^[a-záéíóúñ]+(ré|rás|rá|remos|rán)$"]], "El sábado voy a ir al cine."],
    ["¡Genial! ¿Con quién?", "Здорово! С кем?", "Скажи, с кем.", [["с кем", "con mi|con unos|con una|con un|con mis|solo|sola|~con"]], "Con una amiga."],
    ["¿Y qué vais a ver?", "А что вы будете смотреть?", "Ответь.", [["что", "película|una|la nueva|~de"]], "Una película española nueva."],
    ["Yo ya la he visto. No me gustó.", "Я её уже видел. Мне не понравилось.", "Спроси почему.", [["почему", "por qué|¿por qué|y eso|~qué"]], "¿Por qué?"],
    ["Es demasiado larga. ¿Y a ti te gusta el cine?", "Он слишком длинный. А тебе нравится кино?", "Ответь с причиной.", [["ответ", "sí|no|me gusta|me encanta|no me gusta"], ["причина", "porque|por eso|ya que|como"]], "Sí, me encanta, porque me ayuda a aprender español."],
    ["¿Y qué hiciste el fin de semana pasado?", "А что ты делал в прошлые выходные?", "Ответь в прошедшем.", [["прошедшее время", P, PRX]], "Me quedé en casa y leí un libro."],
    ["Yo fui a la playa. ¿Has estado en la playa este año?", "Я ездил на пляж. Ты был на пляже в этом году?", "Ответь.", [["ответ", "sí|no|he estado|he ido|nunca|~fui"]], "Sí, he estado en julio."],
    ["¿Qué te gusta más, el mar o la montaña?", "Что тебе больше нравится: море или горы?", "Сравни и объясни.", [["что больше", "más|mejor|prefiero|~me gusta"], ["причина", "porque|que|por eso|ya que"]], "Me gusta más el mar, porque me encanta nadar."],
    ["Bueno, me tengo que ir. ¡Hasta luego!", "Ладно, мне пора. Пока!", "Попрощайся.", [["прощание", "hasta luego|adiós|hasta pronto|nos vemos|chao|~hasta"]], "¡Hasta luego! ¡Nos vemos!"]
  ]));
}

/* Los seis bloques. es = título en español (lo que se aprende), ru = en ruso (la pantalla) */
const ES14_BLOQUES = [
  { id: "lectura", es: "Comprensión lectora", ru: "Чтение", puntos: 15, emoji: "📖", min: "30–40 мин", intro: "Три текста по возрастающей сложности: сообщение, рассказ о поездке и мнение. Не нужно переводить всё: найди то, о чём спрашивают.", repaso: "урок 13, модуль 7 (Textos de la vida real)" },
  { id: "audio", es: "Comprensión auditiva", ru: "Аудирование", puntos: 15, emoji: "🎧", min: "30–40 мин", intro: "В этой части — диалог, разговор и рассказ, а также три короткие фразы для тренировки восприятия грамматических форм. В конце — два аудио, на которые нужно ответить письменно по-испански. Слушай, сколько хочешь.", repaso: "урок 13, модуль 8 («Аудио и разговоры»)" },
  { id: "gramatica", es: "Gramática en contexto", ru: "Грамматика", puntos: 20, emoji: "🧩", min: "40–50 мин", intro: "В этой части проверяются ser, estar и hay, согласование, настоящее и прошедшие времена, будущее и si, subjuntivo, местоимения, предлоги, косвенная речь и порядок слов. Нужно будет исправить ошибку и объяснить, что не так. Вопросы каждый раз разные.", repaso: "уроки 8–13 (в конце «Что повторить» покажет правила)" },
  { id: "lexica", es: "Vocabulario en contexto", ru: "Лексика", puntos: 10, emoji: "🗂️", min: "20–30 мин", intro: "Слова в деле: выбери подходящее по ситуации, скажи, что они значат, и напиши слово, которое слышишь. Каждый раз слова другие.", repaso: "уроки 6–13 и Словарь" },
  { id: "escritura", es: "Producción escrita", ru: "Письмо", puntos: 20, emoji: "✍️", min: "40–50 мин", intro: "Два текста: сообщение (80–100 слов) и «Mi historia» (200–250 слов).", repaso: "урок 13, модули 11 и 12 (мастерская и проект)" },
  { id: "comunicacion", es: "Comunicación", ru: "Общение", puntos: 20, emoji: "💬", min: "20–30 мин", intro: "Ситуации, вопросы со свободным ответом и разговор из десяти реплик. Единственного правильного ответа нет.", repaso: "уроки 11–13 (проекты и разговоры)" }
];
const ES14_NIVELES = [[90, "Отличный уровень", "Ты уже довольно свободно общаешься и уверенно пользуешься изученными конструкциями."], [80, "Очень хороший уровень", "Ты хорошо общаешься, с редкими ошибками."],
  [70, "Рабочий уровень", "Ты справляешься, но некоторые конструкции нужно закрепить."], [60, "Уровень в развитии", "Ты многое понимаешь, но говорить и писать пока трудно."], [0, "Нужно закрепить", "Стоит повторить некоторые уроки, прежде чем идти дальше."]];

/* Lugares con sorteo: cuántos salen en cada intento */
const ES14_LUGARES = {
  audio: [["oido", 3]],
  gramatica: [["serEstar", 3], ["concord", 2], ["presente", 2], ["pasados", 4], ["futuro", 2], ["subj", 3], ["pron", 4], ["prep", 3], ["indirecto", 2], ["orden", 2], ["corr", 2], ["diag", 3], ["natural", 2], ["porque", 2]],
  lexica: [["lex", 6], ["emp", 1], ["sig", 3], ["dic", 2]]
};

/* ── Bloque 5: escritura (dos tareas; puntaje por cobertura de objetivos) ── */
function ES14_ESCRITURA() {
  if (ES14_ESCRITURA.cache) return ES14_ESCRITURA.cache;
  const D = ES13_DET;
  const pal = t => azContarPalabras(t);
  const cuentaFrase = (t, lista) => { const n = " " + D.n(t).replace(/[^a-záéíóúüñ]+/g, " ") + " "; return lista.reduce((a, x) => a + (n.split(" " + x + " ").length - 1), 0); };
  const obj = (txt, meta, fn) => ({ txt, meta, fn });
  const TEMP = ["ayer", "hoy", "mañana", "ahora", "antes", "pronto", "en verano", "en invierno", "en primavera", "en otoño", "todos los días", "normalmente", "a menudo", "siempre", "a veces", "por la mañana", "por la tarde", "por la noche", "el sábado", "el domingo", "después", "ya", "el año pasado", "el año que viene", "hace", "de niño", "de niña", "cuando era"];
  const COMP = ["más", "menos", "mejor", "peor", "tan", "mayor", "menor"];
  return (ES14_ESCRITURA.cache = {
    t1: { titulo: "Задание 1 · Сообщение", puntos: 8, palabras: [80, 100], opciones: [
        { id: "a", txt: "A · Напиши другу, чтобы перенести встречу (и предложи другую)." }, { id: "b", txt: "B · Организуй встречу: когда, где и что вы будете делать." },
        { id: "c", txt: "C · Опиши проблему (в квартире, на работе…) и попроси помощи." }, { id: "d", txt: "D · Напиши короткий отзыв о ресторане или о каком-нибудь месте." }],
      objetivos: [obj("От 80 до 100 слов", 1, t => { const k = pal(t); return k >= 80 && k <= 100 ? 1 : k >= 60 && k <= 120 ? .5 : 0; }),
        obj("Не меньше 2 связок", 2, t => D.tiene(t, D.CONECT)), obj("Причина (porque, por eso…)", 1, t => D.tiene(t, D.RAZON)),
        obj("Глаголы в двух разных временах", 2, t => [["pres"], ["indef", "imperf"], ["fut", "cond"], ["subj"]].filter(x => D.cuenta(t, x) > 0).length),
        obj("Вопрос или предложение (¿…?, ¿quedamos…?, podemos…)", 1, t => /\?/.test(t) || D.tiene(t, ["podemos", "quedamos", "vamos", "te parece"]) ? 1 : 0)] },
    t2: { titulo: "Задание 2 · Mi historia", puntos: 12, palabras: [200, 250], consigna: "Cuéntame tu historia: tu pasado, tu vida ahora y tus planes. Расскажи о себе: случай из прошлого, твоя жизнь сейчас, планы, что тебе нравится или нет (и почему), важные люди и места.",
      objetivos: [obj("От 200 до 250 слов", 1, t => { const k = pal(t); return k >= 200 && k <= 250 ? 1 : k >= 160 && k <= 290 ? .5 : 0; }),
        obj("3–5 форм прошедшего времени", 3, t => D.cuenta(t, ["indef", "imperf"]) + D.pluscuam(t)), obj("3–5 форм настоящего времени", 3, t => D.cuenta(t, ["pres"])),
        obj("3–5 форм будущего (iré, me gustaría, voy a…)", 3, t => D.cuenta(t, ["fut", "cond"]) + (D.n(t).match(/\b(voy|vas|va|vamos|van) a [a-záéíóúñ]+r\b/g) || []).length),
        obj("5 и больше слов времени (ayer, en verano, todos los días…)", 5, t => cuentaFrase(t, TEMP)), obj("3 и больше связок", 3, t => D.tiene(t, D.CONECT)),
        obj("2 мнения (creo que, en mi opinión, me gusta…)", 2, t => cuentaFrase(t, D.OPIN.concat(["me gusta", "no me gusta", "me encanta"]))),
        obj("2 объяснения (porque, por eso…)", 2, t => cuentaFrase(t, D.RAZON)), obj("Отрицание (no…)", 1, t => / no /.test(" " + D.n(t) + " ") ? 1 : 0),
        obj("Сравнение (más… que, mejor…)", 1, t => D.tiene(t, COMP) ? 1 : 0)] }
  });
}
function es14PuntuarTexto(texto, tarea) {
  const det = tarea.objetivos.map(o => { const v = o.fn(texto); return { txt: o.txt, v: Math.min(1, v / o.meta), n: v, meta: o.meta }; });
  const cobertura = det.reduce((a, d) => a + d.v, 0) / det.length;
  const rev = typeof azRevisarTexto === "function" ? azRevisarTexto(texto, [], typeof ES13_CONSEJOS !== "undefined" ? ES13_CONSEJOS : []) : { dudas: [], tips: [] };
  const descuento = Math.min(.3, .05 * (rev.dudas.length + rev.tips.length));
  return { det, cobertura, descuento, rev, pct: Math.max(0, Math.round((cobertura - descuento) * 100)) };
}

/* ── El banco: un arreglo por bloque (la escritura va aparte) ── */
function ejerciciosExamenFinalEs() {
  if (ejerciciosExamenFinalEs.cache) return ejerciciosExamenFinalEs.cache;
  const sinT = s => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla + 11; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const sinP = t => t.replace(/[.,!?¡¿«»:—]/g, "").replace(/\s+/g, " ").trim();
  const nec = l => l.map(([es, f, rx]) => { const e = { es, formas: f ? f.split("|") : [] }; if (rx) e.rx = rx; return e; });
  const B = { lectura: [], audio: [], gramatica: [], lexica: [], comunicacion: [] };
  const add = (b, e) => B[b].push(Object.assign({ items: [], dificultad: 2, modulo: 1 }, e));
  const llenar = (fr, ok) => fr.replace("___", ok === "—" ? "" : ok).replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").replace(/^ /, "");

  /* 1. Lectura */
  ES14_LECTURAS.forEach((L, j) => {
    L.preguntas.forEach(([q, ok, malas], k) => add("lectura", { id: "EFE-lec-" + L.id + "-" + k, tipo: "lectura", forma: "elegir", grupo: "lec-" + L.id + "-" + k, texto: L.lineas, pide: L.titulo + ". " + q,
      opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: "**" + ok + "**" }));
    L.vf.forEach(([af, v], k) => add("lectura", { id: "EFE-lev-" + L.id + "-" + k, tipo: "lectura-vf", forma: "vf", grupo: "lev-" + L.id + "-" + k, afirmacion: af, verdadero: v, texto: L.lineas,
      explicacion: v ? "Верно." : "Неверно." }));
  });
  /* 2. Audio */
  ES14_AUDIOS.forEach((A, j) => {
    const dial = A.lineas.map(([g, t]) => ({ texto: t, genero: g, rate: A.rate })), lineas = A.lineas.map(l => l[1]);
    A.preguntas.forEach(([q, ok, malas], k) => add("audio", { id: "EFE-au-" + A.id + "-" + k, tipo: "audio", forma: "elegir", grupo: "au-" + A.id + "-" + k, audio: dial, audioManual: k > 0, texto: lineas, textoOculto: true,
      pide: A.titulo + ". " + q, opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: lineas.join(" ") }));
    A.vf.forEach(([af, v], k) => add("audio", { id: "EFE-auv-" + A.id + "-" + k, tipo: "audio-vf", forma: "vf", grupo: "auv-" + A.id + "-" + k, afirmacion: af, verdadero: v, audio: dial, texto: lineas, textoOculto: true,
      explicacion: (v ? "Верно. " : "Неверно. ") + lineas.join(" ") }));
  });
  ES14_OIDO.forEach(([fr, q, ops, ex, regla], j) => add("audio", { id: "EFE-oi-" + j, tipo: "oido", forma: "elegir", lugar: "oido", regla, grupo: "oi-" + j, audio: fr, oir: fr, pide: q,
    opciones: baraja(ops, j + 5), correcta: ops[0], explicacion: "«" + fr + "» — " + ex }));
  ES14_AUDIO_RESP.forEach((r, j) => add("audio", { id: "EFE-aur-" + j, tipo: "audio-resp", forma: "situacion", grupo: "aur-" + j, audio: r.audio, audioManual: false, pide: r.pide,
    sit: { necesita: nec(r.nec), modelos: [r.modelo] }, oir: r.modelo, explicacion: "Можно сказать так: **" + r.modelo + "**" }));

  /* 3. Gramática: cada ítem con su lugar (sorteo) y su regla («Что повторить») */
  const G = ES14_GRAM;
  const gid = { n: 0 };
  const elegir = (lugar, tipo, [fr, ok, ops, por, regla, pista]) => { const j = gid.n++;
    add("gramatica", { id: "EFE-g" + lugar + "-" + j, tipo, forma: "elegir", lugar, regla, grupo: "g-" + lugar + "-" + j, pide: pista ? "Заполни пропуск (" + pista + ")." : "Заполни пропуск.", grande: fr,
      opciones: baraja(ops, j), correcta: ok, oir: llenar(fr, ok), explicacion: "**" + llenar(fr, ok) + "** " + por }); };
  G.serEstar.forEach(x => elegir("serEstar", "ser-estar", x));
  G.concord.forEach(x => elegir("concord", "concordancia", x));
  G.presente.forEach(x => elegir("presente", "presente", x));
  G.pasados.forEach(x => elegir("pasados", "tiempo", x));
  G.futuro.forEach(x => elegir("futuro", "tiempo", x));
  G.subj.forEach(x => elegir("subj", "subjuntivo", x));
  G.pron.forEach(x => elegir("pron", "pronombre", x));
  G.prep.forEach(x => elegir("prep", "preposicion", x));
  G.indirecto.forEach(x => elegir("indirecto", "indirecto", x));
  G.orden.forEach(([es, ru, regla], j) => { const w = sinP(es).split(" ");
    add("gramatica", { id: "EFE-go-" + j, tipo: "construir", forma: "ordenar", lugar: "orden", regla, grupo: "go-" + j, pide: "Собери фразу: «" + ru + "»", audio: es, fichas: baraja(w, j + 3), sep: " ", esperada: w.join(" "), oir: es, explicacion: es }); });
  G.corr.forEach(([fr, mal, arr, expl, regla], j) => { const pals = sinP(fr).split(" ");
    add("gramatica", { id: "EFE-gx-" + j, tipo: "corregir", forma: "corregir", lugar: "corr", regla, grupo: "gx-" + j, pide: "Нажми на неправильное слово и напиши его правильно.", palabras: pals, correcta: pals.indexOf(mal), arreglo: arr,
      oir: fr.replace(mal, arr), explicacion: expl }); });
  G.diag.forEach(([mal, ok, k, regla], j) => add("gramatica", { id: "EFE-gd-" + j, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, lugar: "diag", regla, grupo: "gd-" + j, oir: ok,
    pide: "В этой фразе ошибка. Что не так?", grande: mal, opciones: baraja([G.FALLAS[k]].concat(baraja(G.FALLAS.filter((x, i) => i !== k), j).slice(0, 2)), j + 4), correcta: G.FALLAS[k],
    esperadas: [ok], idioma: "es", explicacion: "**" + ok + "**" }));
  G.natural.forEach(([ok, mal, ex, regla], j) => add("gramatica", { id: "EFE-gn-" + j, tipo: "natural", forma: "elegir", lugar: "natural", regla, grupo: "gn-" + j, oir: ok, pide: "Какая фраза правильная?",
    opciones: baraja([ok, mal], j + 2), correcta: ok, explicacion: "**" + ok + "** " + ex }));
  G.porque.forEach(([fr, w, ok, otras, regla], j) => add("gramatica", { id: "EFE-gq-" + j, tipo: "porque", forma: "elegir", lugar: "porque", regla, grupo: "gq-" + j, grande: fr, audio: fr, audioManual: true, oir: fr,
    pide: "Почему «" + w + "»?", opciones: baraja([ok].concat(otras), j + 1), correcta: ok, explicacion: fr + " — " + ok + "." }));

  /* 4. Vocabulario: en contexto, emparejar, «Что значит?» y dictado. `palabra`: para «Что повторить» */
  ES14_LEX.forEach(([fr, ok, ops], j) => add("lexica", { id: "EFE-lx-" + j, tipo: "lexica", forma: "elegir", lugar: "lex", palabra: ok.replace(/^[¿¡]/, "").toLowerCase(), grupo: "lx-" + j, pide: "Выбери подходящее.", grande: fr, opciones: baraja(ops, j), correcta: ok,
    oir: fr.indexOf("___") >= 0 ? llenar(fr, ok) : ok, explicacion: fr.indexOf("___") >= 0 ? "**" + llenar(fr, ok) + "**" : "**" + ok + "**" }));
  ES14_LEX_EMP.forEach((pares, j) => add("lexica", { id: "EFE-lxe-" + j, tipo: "lexica", forma: "emparejar", lugar: "emp", grupo: "lxe-" + j, pide: "Соедини каждое слово или выражение с ситуацией.", pares, explicacion: pares.map(p => p.join(" — ")).join(" · ") }));
  const VOC = ES14_VOC.split("|").map(x => x.split("="));
  VOC.forEach(([es, ru], j) => {
    const dis = baraja(VOC.filter(v => v[0] !== es), j + 7).slice(0, 3).map(v => v[1]);
    add("lexica", { id: "EFE-ls-" + j, tipo: "significado", forma: "elegir", dificultad: 1, lugar: "sig", palabra: es, grupo: "ls-" + j, pide: "Что значит?", grande: es, audio: es, oir: es,
      opciones: baraja([ru].concat(dis), j), correcta: ru, explicacion: "**" + es + "** — " + ru });
    add("lexica", { id: "EFE-ld-" + j, tipo: "dictado", forma: "escribir", lugar: "dic", palabra: es, grupo: "ld-" + j, pide: "Послушай и напиши слово.", audio: es, oir: es,
      esperadas: [es], idioma: "es", explicacion: "**" + es + "** — " + ru });
  });

  /* 6. Comunicación */
  ES14_SITUACIONES.forEach((x, j) => add("comunicacion", { id: "EFE-cs-" + j, tipo: "situacion", forma: "situacion", dificultad: 3, grupo: "cs-" + j, escena: x.escena, pide: x.pide, sit: { necesita: nec(x.nec), modelos: [x.modelo] }, oir: x.modelo,
    explicacion: "Можно сказать так: **" + x.modelo + "**" }));
  ES14_ESPONT.forEach((x, j) => add("comunicacion", { id: "EFE-ce-" + j, tipo: "espontanea", forma: "situacion", dificultad: 3, grupo: "ce-" + j, audio: [{ texto: x.audio, genero: x.quien }], audioManual: false, contexto: [{ p: "", es: x.audio }], pide: x.pide,
    sit: { necesita: nec(x.nec), modelos: [x.modelo] }, oir: x.modelo, explicacion: "Можно сказать так: **" + x.modelo + "**" }));
  add("comunicacion", { id: "EFE-conv", tipo: "conversacion", forma: "turnos", dificultad: 3, grupo: "cv", pide: "🗣️ Conversación con Javier", turnos: ES14_CONV(), peso: 5,
    explicacion: "Образец: " + ES14_CONV().pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  return (ejerciciosExamenFinalEs.cache = B);
}

/* Un intento de un bloque: los ítems sin lugar van siempre; de cada lugar salen los que dice
   ES14_LUGARES, sorteados con la semilla del intento. Se respeta el orden del banco. */
function es14Intento(bloque, semilla) {
  const B = ejerciciosExamenFinalEs()[bloque] || [];
  const L = ES14_LUGARES[bloque];
  if (!L) return B.slice();
  let s = (semilla || 1) % 233280;
  const azar = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
  const elegidos = new Set(), palabras = new Set();
  L.forEach(([lugar, n]) => { const pool = B.filter(e => e.lugar === lugar).slice();
    for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(azar() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
    let k = 0; pool.forEach(e => { if (k >= n || (e.palabra && palabras.has(e.palabra))) return; elegidos.add(e.id); if (e.palabra) palabras.add(e.palabra); k++; }); });
  return B.filter(e => !e.lugar || elegidos.has(e.id));
}

/* Las reglas que evalúa el examen, en el orden del curso: { id: [unidad, módulo, título del módulo, título de la sección] }.
   Se arma con las unidades cargadas (abece-14.html carga las trece). */
function es14Reglas() {
  if (es14Reglas.cache) return es14Reglas.cache;
  const ids = new Set();
  const B = ejerciciosExamenFinalEs();
  Object.keys(B).forEach(k => B[k].forEach(e => { if (e.regla) ids.add(e.regla); }));
  const out = {};
  for (let n = 1; n <= 13; n++) {
    const U = window["UNIDAD_ES_" + n]; if (!U) continue;
    U.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ids.has(s.id)) out[s.id] = [n, m.n, m.titulo, s.titulo]; }));
  }
  return (es14Reglas.cache = out);
}

Object.assign(window, { ES14_BLOQUES, ES14_NIVELES, ES14_LUGARES, ES14_ESCRITURA, es14PuntuarTexto, ejerciciosExamenFinalEs, es14Intento, es14Reglas, ES14_CONV });
