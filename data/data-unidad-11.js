/* ============================================================
   DATA-UNIDAD-11.JS — Unidad 11: Comunicación cotidiana
   ------------------------------------------------------------
   Versión 05/10/2026. Contenido, vocabulario y banco de ejercicios.
   Decisiones (con Manu, 05/10/2026):
   · Corrección por comunicación: los ejercicios de situación se corrigen
     por intención (azSituacion, corrector.js) con tres resultados:
     ✓ Bien · 💬 Se entiende (vale el punto entero) · ✗ No se entiende.
   · Sin gramática nueva. Imperativos y perfectivos van como fórmulas:
     Помоги́те, Повтори́те, Извини́те, Иди́те пря́мо, Поверни́те напра́во /
     нале́во, Да́йте…, Принеси́те…, Дава́й…, Договори́лись, Я опозда́ю…,
     Я опозда́л(а)…, Как дое́хать до…?, Дава́й встре́тимся… y los
     infinitivos купи́ть, заказа́ть, найти́ después de хочу́ / мо́жно / не могу́.
   · Adjetivos solo en nominativo («Руба́шка дорога́я»); no «э́ту руба́шку».
   · Precios: рубль con la regla de час (1 рубль · 2–4 рубля́ · 5+ рубле́й);
     сто рубле́й y ты́сяча рубле́й como fórmulas.
   · Léxico nuevo: нале́во (CMR-06145) y по-мо́ему (CMR-06146).
   · Evaluación: 35 ejercicios con formato propio (comprensión, situaciones,
     conversación, traducción en contexto, mensaje, versión más natural).
   · Proyecto «Мой день в Росси́и»: siete situaciones y un relato de 20–25
     frases con conteo automático.
   Las formas declinadas salen de Casos (u11Datos().sust).
   ============================================================ */

/* Palabras que se ven por primera vez en cada módulo (verificador) */
const U11_VISTAS = {
  1: "ну́жный помо́чь сказа́ть ка́рта такси́", 2: "цена́ нали́чные разме́р цвет друго́й купи́ть плати́ть сто́ить рубль сто ты́сяча продаве́ц руба́шка и́ли вот",
  3: "еда́ блю́до зака́з счёт заказа́ть зака́зывать рекомендова́ть принести́ дать что́-нибудь ещё коне́чно вку́сный холо́дный",
  4: "остано́вка вы́ход вход касси́р дое́хать отправля́ться такси́ст", 5: "пря́мо напра́во нале́во перекрёсток напро́тив ме́жду находи́ться поверну́ть тури́ст",
  6: "найти́ пробле́ма что́-то опозда́ть", 7: "дава́ть договори́ться встре́титься мину́та ничего́",
  8: "предпочита́ть счита́ть по-мо́ему ва́жный ва́жно удо́бно ску́чно", 9: "занима́ться", 10: "начина́ться"
};

/* Lo que se pide en el café: [ruso, español, emoji]. Las formas salen de Casos. */
const U11_COMIDA = [["суп", "una sopa", "🍲"], ["сала́т", "una ensalada", "🥗"], ["пи́цца", "una pizza", "🍕"], ["ры́ба", "pescado", "🐟"], ["мя́со", "carne", "🥩"],
  ["ко́фе", "un café", "☕"], ["чай", "un té", "🍵"], ["вода́", "agua", "💧"], ["сок", "un jugo", "🧃"], ["хлеб", "pan", "🍞"]];
/* Bebidas y cosas que se miden: también valen en genitivo («Да́йте воды́») */
const U11_PARTITIVO = ["вода́", "чай", "сок", "хлеб", "молоко́"];
/* Lo que se compra: [ruso, español] */
const U11_COMPRAS = [["руба́шка", "una camisa"], ["ку́ртка", "una campera"], ["су́мка", "una cartera"], ["пла́тье", "un vestido"], ["кни́га", "un libro"], ["слова́рь", "un diccionario"]];
const U11_NUM = ["", "оди́н", "два", "три", "четы́ре", "пять", "шесть", "семь", "во́семь", "де́вять", "де́сять", "оди́ннадцать", "двена́дцать"];
/* Destinos del plano: [emoji, ruso, español «al …»] */
const U11_LUGARES = [["🏦", "банк", "el banco"], ["🏨", "гости́ница", "el hotel"], ["☕", "кафе́", "el café"], ["🏪", "магази́н", "la tienda"], ["🚇", "метро́", "el subte"],
  ["🍽️", "рестора́н", "el restaurante"], ["🏛️", "музе́й", "el museo"], ["💊", "апте́ка", "la farmacia"], ["🌳", "парк", "el parque"]];
/* Caminos del plano (S = recto n cuadras, R = derecha, L = izquierda) */
const U11_RUTAS = ["S1 R S1", "S1 L S1", "S2 R S1", "S2 L S2", "S1 R S1 L S1", "S1 L S1 R S2", "S2 R S2 L S1", "S3 L S1 L S1", "S2 L S1 R S1", "S1 R S2 L S2", "S3 R S1", "S3"];
/* Ciudades para los boletos */
const U11_CIUDADES = ["Москва́", "Санкт-Петербу́рг"];

const UNIDAD_11 = {
  id: 11,
  titulo: "Comunicación cotidiana",
  tituloRu: "Повседне́вное обще́ние",
  objetivo: "Desenvolverte en situaciones reales: comprar, pedir en un café, moverte en transporte, preguntar y dar indicaciones, resolver problemas, escribir mensajes, opinar y charlar con alguien.",
  tiempo: "35–45 horas",
  modulos: [
    { id: "u11m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "Sobrevivir en ruso", resumen: "Мне ну́жен…, Я ищу́…, Повтори́те, пожа́луйста.",
      intro: "En esta unidad cambia el objetivo: no es armar la frase perfecta, sino que te entiendan. Primero, las fórmulas que te sacan de cualquier apuro.",
      secciones: [
        { titulo: "Cómo se corrige en esta unidad", texto: "Muchos ejercicios ya no tienen una sola respuesta: te cuentan una situación y escribís lo que dirías. La app se fija en que digas lo necesario.\n✓ **Bien**: se entiende y está correcto.\n💬 **Se entiende**: se entiende, pero hay un detalle (un caso, una terminación). Vale igual, y te muestra cómo queda perfecto.\n✗ **No se entiende**: falta algo importante." },
        { titulo: "Pedir lo que necesitás", texto: "Я хочу́ ко́фе. («quiero un café»)\nМне ну́жен биле́т. («necesito un boleto»)\nМне нужна́ ка́рта. («necesito un mapa»)\nМне ну́жно рабо́тать. («tengo que trabajar»: de la Unidad 10)\nУ вас есть вода́? («¿tienen agua?»)\nМо́жно? Мо́жно мне ко́фе? («¿puedo?», «¿me da un café?»)\nЯ ищу́ метро́. («busco el subte»)",
          destacado: "**ну́жен** con palabras masculinas, **нужна́** con femeninas, **ну́жно** con verbos y con palabras neutras: como мой, моя́, моё." },
        { titulo: "Preguntar", texto: "Где банк? («¿dónde está el banco?»)\nСко́лько сто́ит? («¿cuánto cuesta?»)\nЧто э́то зна́чит? («¿qué significa?»)\nКак сказа́ть «tarjeta» по-ру́сски? («¿cómo se dice ‹tarjeta› en ruso?»)" },
        { titulo: "Cuando no entendés", texto: "Я не понима́ю. («no entiendo»)\nПовтори́те, пожа́луйста. («repita, por favor»)\nИзвини́те. («disculpe»)\nПомоги́те, пожа́луйста! («¡ayúdeme, por favor!»)",
          truco: "Повтори́те, Помоги́те e Извини́те son pedidos a otra persona, tratándola de вы. Por ahora van como fórmulas: no hace falta saber cómo se forman." }
      ] },
    { id: "u11m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "En una tienda", resumen: "Ско́лько сто́ит? Сто рубле́й. Ка́ртой, пожа́луйста.",
      intro: "Comprar: preguntar el precio, el talle y el color, y pagar.",
      secciones: [
        { titulo: "Las palabras de la tienda", texto: "цена́ (precio), де́ньги (plata), ка́рта (tarjeta), нали́чные (efectivo), разме́р (talle), цвет (color), продаве́ц (vendedor), друго́й (otro).\nкупи́ть (comprar): por ahora, después de хочу́, ну́жно o мо́жно: Я хочу́ купи́ть руба́шку.\nплати́ть (pagar): я плачу́, ты пла́тишь, он пла́тит.\nсто́ить (costar): Ско́лько сто́ит руба́шка?" },
        { titulo: "Los precios", texto: "рубль sigue la misma regla que час (Unidad 7):\n1 → оди́н рубль\n2, 3, 4 → два, три, четы́ре рубля́\n5 a 12 → пять … двена́дцать рубле́й\nсто рубле́й (100 rublos) y ты́сяча рубле́й (1000 rublos) van así, como fórmulas.",
          destacado: "1 рубль · 2–4 рубля́ · 5 o más рубле́й" },
        { titulo: "Cómo es", texto: "Los adjetivos van en nominativo, como en la Unidad 3: Руба́шка дорога́я. Ку́ртка дешёвая. Разме́р большо́й. Цвет краси́вый.\nPara cambiar: У вас есть друго́й разме́р? У вас есть друго́й цвет?" },
        { titulo: "Pagar", texto: "Я бу́ду плати́ть ка́ртой. («voy a pagar con tarjeta»: el instrumental de la Unidad 10)\nНали́чными. («en efectivo»: va así)\nКа́ртой и́ли нали́чными? («¿con tarjeta o en efectivo?»: и́ли = o)\nВот, пожа́луйста. («acá tiene»)" }
      ] },
    { id: "u11m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Restaurante y café", resumen: "Мо́жно меню́? Я бу́ду суп. Счёт, пожа́луйста.",
      intro: "Uno de los escenarios más útiles: pedir, comentar la comida y pagar.",
      secciones: [
        { titulo: "Las palabras", texto: "меню́ (carta), официа́нт / официа́нтка (mozo / moza), еда́ (comida), блю́до (plato), зака́з (pedido), счёт (cuenta).\nза́втрак, обе́д, у́жин: ya los conocés." },
        { titulo: "Pedir", texto: "Мо́жно меню́, пожа́луйста?\nЯ хочу́ суп и сала́т.\nЯ бу́ду ры́бу. («voy a querer pescado»: en el restaurante se dice así)\nДа́йте, пожа́луйста, чай. («deme un té»)\nПринеси́те, пожа́луйста, во́ду. («tráigame agua»)\nМо́жно заказа́ть? («¿puedo pedir?»)",
          destacado: "Lo que pedís va en acusativo: ры́ба → ры́бу, вода́ → во́ду. Si te sale el nominativo, igual se entiende." },
        { titulo: "Lo que dice el mozo", texto: "Что вы хоти́те? / Что бу́дете зака́зывать? («¿qué va a pedir?»)\nЧто́-нибудь ещё? («¿algo más?») — Нет, спаси́бо.\nКоне́чно. («claro»)\nЧто вы рекоменду́ете? («¿qué recomienda?»): esta la decís vos." },
        { titulo: "Comentar y pagar", texto: "Суп о́чень вку́сный. («la sopa está muy rica»)\nИзвини́те, чай холо́дный. («disculpe, el té está frío»)\nСчёт, пожа́луйста. («la cuenta, por favor»)" }
      ] },
    { id: "u11m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Transporte", resumen: "Где остано́вка? Как дое́хать до це́нтра?",
      intro: "Moverte por una ciudad: encontrar el transporte, comprar el boleto y saber adónde vas.",
      secciones: [
        { titulo: "Las palabras", texto: "метро́, авто́бус, по́езд, самолёт y такси́ (taxi); остано́вка (parada), ста́нция (estación), вокза́л (estación de tren), аэропо́рт, биле́т (boleto), вход (entrada), вы́ход (salida), касси́р (el de la boletería), такси́ст (taxista)." },
        { titulo: "Las preguntas", texto: "Где ста́нция метро́?\nГде остано́вка?\nСко́лько сто́ит биле́т?\nКак дое́хать до це́нтра? («¿cómo llego al centro?»: до + genitivo, Unidad 10)\nМне ну́жен биле́т до Москвы́.\nКогда́ отправля́ется по́езд? («¿cuándo sale el tren?»)\nГде вы́ход?" },
        { titulo: "Где, куда́, отку́да", texto: "Где? → в метро́, на вокза́ле (prepositivo)\nКуда́? → в аэропо́рт, на вокза́л (acusativo)\nОтку́да? → из Москвы́ (genitivo)\nЯ е́ду в аэропо́рт на такси́. За́втра я пое́ду в Москву́ на по́езде.",
          destacado: "Где → prepositivo · Куда́ → acusativo · Отку́да → genitivo" },
        { titulo: "En el taxi", texto: "Куда́ е́дем? («¿adónde vamos?») — В центр, пожа́луйста. / В аэропо́рт, пожа́луйста." }
      ] },
    { id: "u11m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Direcciones", resumen: "Иди́те пря́мо, пото́м поверни́те нале́во.",
      intro: "Preguntar y explicar cómo llegar.",
      secciones: [
        { titulo: "Para dónde", texto: "пря́мо (derecho), напра́во (a la derecha), нале́во (a la izquierda), ря́дом (cerca, al lado), далеко́ (lejos), здесь (acá), там (allá).\nу́лица (calle), у́гол (esquina), перекрёсток (cruce)." },
        { titulo: "Dar indicaciones", texto: "Иди́те пря́мо. («siga derecho»)\nПоверни́те напра́во. («doble a la derecha»)\nПоверни́те нале́во. («doble a la izquierda»)\nПото́м… («después…»)\nИди́те y Поверни́те son pedidos con вы, como Повтори́те: van como fórmulas.",
          destacado: "Иди́те пря́мо, пото́м поверни́те напра́во." },
        { titulo: "Dónde queda", texto: "Где нахо́дится банк? («¿dónde queda el banco?»: нахо́дится = queda, está)\nБанк ря́дом. / Банк далеко́.\nКафе́ напро́тив ста́нции. («enfrente de la estación»)\nБанк ме́жду магази́ном и рестора́ном. («entre la tienda y el restaurante»)",
          destacado: "напро́тив + genitivo · ме́жду + instrumental" }
      ] },
    { id: "u11m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Pedir ayuda y resolver problemas", resumen: "Я не могу́ найти́… У меня́ пробле́ма.",
      intro: "Acá aparece un ruso mucho más real: perderse, que algo no funcione, no entender. Lo importante son las estrategias.",
      secciones: [
        { titulo: "Cuando algo sale mal", texto: "Извини́те, я не могу́ найти́ гости́ницу. («no encuentro el hotel»: найти́ = encontrar; lo que buscás va en acusativo)\nУ меня́ пробле́ма. («tengo un problema»)\nЗдесь что́-то не рабо́тает. («acá algo no funciona»)\nТелефо́н не рабо́тает.\nУ меня́ нет де́нег. («no tengo plata»: нет + genitivo)\nЧто мне де́лать? («¿qué hago?»)" },
        { titulo: "Llegué tarde", texto: "Я опозда́л на по́езд. / Я опозда́ла на по́езд. («perdí el tren», literalmente «llegué tarde al tren»: опозда́л si sos hombre, опозда́ла si sos mujer)\nКогда́ сле́дующий по́езд? («¿cuándo sale el próximo?»)" },
        { titulo: "Estrategias", texto: "Si no entendés: Я не понима́ю. Повтори́те, пожа́луйста.\nSi no sabés una palabra: Как сказа́ть…? O describila con lo que sabés.\nSi no te sale la frase entera, decí lo esencial: Гости́ница? Где? Помоги́те, пожа́луйста! También se entiende.",
          truco: "Primero lo esencial: qué necesitás. La gramática, después." }
      ] },
    { id: "u11m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Mensajes", resumen: "Дава́й за́втра? Я опозда́ю на де́сять мину́т.",
      intro: "Del ruso hablado al ruso escrito de todos los días: invitar, confirmar, cambiar un plan, avisar que llegás tarde.",
      secciones: [
        { titulo: "Invitar", texto: "Приве́т! Что де́лаешь ве́чером?\nХо́чешь пойти́ в кино́? («¿querés ir al cine?»)\nДава́й встре́тимся в семь. («encontrémonos a las siete»)",
          destacado: "Дава́й… = «dale, hagamos…»: Дава́й за́втра? Дава́й в семь." },
        { titulo: "Responder", texto: "Да, коне́чно. / Хорошо́. / Договори́лись. («quedamos así»)\nЯ сего́дня не могу́. Дава́й за́втра? («hoy no puedo, ¿lo dejamos para mañana?»)\nЯ опозда́ю на де́сять мину́т. («voy a llegar diez minutos tarde»)\nИзвини́! («¡perdón!»)\nНичего́! («¡no pasa nada!»)" },
        { titulo: "ты o вы", texto: "Con amigos, ты: Дава́й…, Хо́чешь…?, Извини́.\nCon desconocidos, en tiendas y restaurantes, вы: Да́йте…, Хоти́те…?, Извини́те." }
      ] },
    { id: "u11m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Gustos y opiniones", resumen: "Мне нра́вится… По-мо́ему, э́то интере́сно.",
      intro: "Hasta ahora podías decir qué te gusta. Ahora, también qué te parece y por qué.",
      secciones: [
        { titulo: "Gustos", texto: "Мне нра́вится э́тот рестора́н. Мне не нра́вится э́тот фильм. (Unidad 10)\nЯ люблю́ ко́фе.\nЯ предпочита́ю чай. («prefiero el té»: lo que preferís va en acusativo)" },
        { titulo: "Opinar", texto: "Я ду́маю, что э́то интере́сно. («creo que es interesante»)\nЯ счита́ю, что э́то ва́жно. («considero que es importante»)\nПо-мо́ему, э́то хорошо́. («para mí, está bien»)",
          destacado: "Я ду́маю, что… · Я счита́ю, что… · По-мо́ему, …" },
        { titulo: "Cómo es", texto: "El adjetivo va en nominativo, con el género de la palabra: Фильм интере́сный. Кни́га ску́чная. Метро́ удо́бное.\nPara opinar de algo en general: Э́то интере́сно. Э́то ва́жно. Э́то удо́бно. Э́то ску́чно." },
        { titulo: "Dar una razón", texto: "Una opinión y una razón: Мне нра́вится метро́, потому́ что э́то удо́бно. (потому́ что, de la Unidad 8)" }
      ] },
    { id: "u11m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Socializar", resumen: "Чем ты занима́ешься? Отку́да ты?",
      intro: "Charlar con alguien más allá de comprar o pedir: de dónde sos, qué hacés, qué te gusta, qué planes tenés.",
      secciones: [
        { titulo: "Las preguntas", texto: "Чем ты занима́ешься? («¿a qué te dedicás?»)\nГде ты рабо́таешь?\nОтку́да ты?\nГде ты живёшь?\nЧто ты лю́бишь де́лать?\nЧто ты де́лал на выходны́х? («¿qué hiciste el fin de semana?»: на выходны́х va así)\nКаки́е у тебя́ пла́ны? («¿qué planes tenés?»)\nТебе́ нра́вится Барсело́на?" },
        { titulo: "Respuestas más largas", texto: "No contestes con una sola palabra: sumá un detalle.\nОтку́да ты? — Я из Аргенти́ны, но сейча́с живу́ в Барсело́не.\nЧто ты де́лал на выходны́х? — Я гуля́л в па́рке, а ве́чером смотре́л фильм.\nЧем ты занима́ешься? — Я рабо́таю архите́ктором. / Я учу́сь." },
        { titulo: "Devolver la pregunta", texto: "А ты? / А у тебя́? (Unidad 2): así la charla sigue." }
      ] },
    { id: "u11m10", n: 10, tipo: "conversaciones", titulo: "Conversaciones completas", resumen: "Conocer a alguien, restaurante, viaje, quedar.",
      intro: "Acá ya no hay frases sueltas: cuatro conversaciones de principio a fin. Leelas y escuchalas; después, en la práctica, las hacés vos." },
    { id: "u11m11", n: 11, tipo: "leccion", nPractica: 12, titulo: "Reaccionar", resumen: "¿Qué decís?",
      intro: "Ya no te piden traducir: te cuentan una situación y decidís qué decir.",
      secciones: [
        { titulo: "Pensar en la situación", texto: "Antes de escribir, preguntate: ¿con quién hablo (ты o вы)? ¿Qué necesito? ¿Qué es lo mínimo que tengo que decir?\nEjemplo: estás en Moscú y no encontrás la estación. → Извини́те, где ста́нция метро́?" },
        { titulo: "Más natural", texto: "Una frase puede ser correcta y sonar brusca. Мо́жно…?, пожа́луйста e извини́те la suavizan:\nДа́йте меню́! → Мо́жно меню́, пожа́луйста?\nГде банк? → Извини́те, где банк?",
          truco: "Con desconocidos: извини́те al principio y пожа́луйста al final." }
      ] },
    { id: "u11m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мой день в Росси́и", resumen: "Un día en una ciudad rusa.",
      intro: "Llegás a una ciudad rusa y pasás un día ahí. Primero resolvé las siete situaciones del día; después contalo en un relato de 20 a 25 frases.",
      requisitos: [], consejos: [] },
    { id: "u11m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Comprensión, situaciones, conversación, traducción, mensaje y versión natural.",
      intro: "Treinta y cinco ejercicios en seis partes. En las situaciones, «Se entiende» vale el punto entero; en el resto, «Casi» vale medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Comprensión", tipos: ["comprension"], n: 5 },
        { nombre: "Situaciones", tipos: ["situacion", "ruta"], n: 8 },
        { nombre: "Completar la conversación", tipos: ["completar"], n: 8 },
        { nombre: "Traducción en contexto", tipos: ["traduccion"], n: 8 },
        { nombre: "Mensaje", tipos: ["mensaje"], n: 3 },
        { nombre: "Versión más natural", tipos: ["natural"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};

function u11Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_11.modulos.forEach(m => {
  if (m.intro) m.intro = u11Palabras(m.intro);
  (m.secciones || []).forEach(s => ["texto", "destacado", "truco"].forEach(k => { if (s[k]) s[k] = u11Palabras(s[k]); }));
});
function unidad11Modulo(id) { return UNIDAD_11.modulos.find(m => m.id === id) || null; }

const U11_MEZCLA = { "elegir-expr": 2, situacion: 3, ruta: 2, nuzhen: 1, precio: 2, dialogo: 1, chat: 1, completar: 2, traduccion: 3, dictado: 2, natural: 1, mensaje: 1,
  ubicacion: 1, donde: 1, concordancia: 1, comprension: 1, "palabra-es-ru": 1, emparejar: 1 };

/* ── Datos ─────────────────────────────────────────────────── */
function u11Datos() {
  if (u11Datos.cache) return u11Datos.cache;
  const sin = s => s.replace(/\u0301/g, "").replace(/ё/g, "е");
  const porAc = {};
  LEXICON_COMER.forEach(e => { const k = sin(e.acento || e.ru); (porAc[k] = porAc[k] || []).push(e); });
  const lex = (ac, pos) => (porAc[sin(ac)] || []).filter(e => !pos || e.posNormalized === pos)[0] || null;
  const sust = ru => { const e = lex(ru, "sustantivo"), cz = e && casosById(e.id); if (!e) return null;
    if (!cz || cz.tipo === "indeclinable") return { id: e.id, ac: e.acento, nom: e.acento, gen: e.acento, dat: e.acento, acc: e.acento, ins: e.acento, prep: e.acento, indecl: true, g: e.gender || "n" };
    if (!cz.sg) return { id: e.id, ac: e.acento, nom: cz.pl[0], gen: cz.pl[1], dat: cz.pl[2], acc: cz.pl[3], ins: cz.pl[4], prep: cz.pl[5], plural: true };
    return { id: e.id, ac: e.acento, nom: cz.sg[0], gen: cz.sg[1], dat: cz.sg[2], acc: cz.sg[3], ins: cz.sg[4], prep: cz.sg[5], g: e.gender }; };
  const adj = ru => { const e = lex(ru, "adjetivo"), cz = e && casosById(e.id); return cz && cz.m ? { id: e.id, m: cz.m[0], f: cz.f[0], n: cz.n[0] } : null; };
  /* Verbos en pasado de las unidades anteriores (para «¿qué hiciste?») */
  const pasados = new Set();
  LEXICON_COMER.forEach(e => { if (e.posNormalized !== "verbo" || !(e.introducedIn || []).some(n => n < 11)) return;
    const v = verboById(e.id); if (v && v.pasado) Object.values(v.pasado).forEach(f => pasados.add(sin(f).toLowerCase())); });
  const rxPasado = "^(" + [...pasados].join("|") + ")$";
  return (u11Datos.cache = { sin, lex, sust, adj, rxPasado });
}

/* Elemento de una situación: E("el agua", "во́ду|воды́") */
/* consigna: requisito de la consigna (no de la comprensión): si falta, «✗ Mal» con ese aviso */
function u11E(es, formas, rx, consigna) { const e = { es, formas: formas ? formas.split("|") : [] }; if (rx) e.rx = rx; if (consigna) e.consigna = consigna; return e; }

/* Conversaciones por turnos: [bot, español, tarea, necesita, modelo, pista?, quien?, genero?] */
function u11Turnos(quien, genero, titulo, pasos, chat) {
  return { quien, genero, titulo, chat: !!chat, pasos: pasos.map(p => ({ bot: p[0], es: p[1], tarea: p[2], sit: { necesita: p[3], modelos: [p[4]] }, pista: p[5] || "", quien: p[6], genero: p[7] })) };
}
const U11_SI = "да|коне́чно|хочу́|дава́й|хорошо́|отли́чно|с удово́льствием";
const U11_CHAO = "до свида́ния|пока́|спаси́бо|до встре́чи|до суббо́ты|до ве́чера|до за́втра|всего́ хоро́шего";
const U11_OK = "договори́лись|хорошо́|да|отли́чно|коне́чно|дава́й|ла́дно";

/* Las conversaciones (módulos 2, 3, 4, 7 y 10) */
function u11Conversaciones() {
  if (u11Conversaciones.cache) return u11Conversaciones.cache;
  const D = u11Datos(), E = u11E;
  const out = {};
  out.tienda = u11Turnos("Продаве́ц", "m", "En la tienda", [
    ["Здра́вствуйте! Что вы и́щете?", "¡Hola! ¿Qué busca?", "Decí que buscás una campera.", [E("una campera", "ищу́ ку́ртку|хочу́ ку́ртку|хочу́ купи́ть ку́ртку|нужна́ ку́ртка|ку́ртку")], "Я ищу́ ку́ртку.", "Я ищу́… + acusativo"],
    ["Вот ку́ртка. Вам нра́вится?", "Acá tiene una campera. ¿Le gusta?", "Decí que sí, pero preguntá si tienen otro talle.", [E("otro talle", "друго́й разме́р")], "Да, но у вас есть друго́й разме́р?", "У вас есть…?"],
    ["Да, вот друго́й разме́р.", "Sí, acá tiene otro talle.", "Preguntá cuánto cuesta.", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько")], "Ско́лько сто́ит?"],
    ["Ты́сяча рубле́й.", "Mil rublos.", "Decí que pagás con tarjeta.", [E("con tarjeta", "ка́ртой")], "Я бу́ду плати́ть ка́ртой.", "con tarjeta: instrumental"],
    ["Хорошо́. Спаси́бо!", "Bien. ¡Gracias!", "Agradecé y despedite.", [E("una despedida", U11_CHAO)], "Спаси́бо, до свида́ния!"]
  ]);
  /* Café: una variante por pareja de platos */
  out.cafe = [["ко́фе", "сала́т"], ["суп", "чай"], ["пи́цца", "сок"], ["ры́ба", "вода́"]].map(([a, b]) => {
    const fa = u11Pedido(a), fb = u11Pedido(b), ca = U11_COMIDA.find(x => x[0] === a), cb = U11_COMIDA.find(x => x[0] === b);
    const sa = D.sust(a), adj = { m: "вку́сный", f: "вку́сная", n: "вку́сное" }[sa.g] || "вку́сный";
    return u11Turnos("Официа́нт", "m", "En el café: " + ca[1].replace(/^(un|una) /, "") + " y " + cb[1].replace(/^(un|una) /, ""), [
      ["Здра́вствуйте!", "¡Hola!", "Saludá y pedí la carta.", [E("la carta", "меню́")], "Здра́вствуйте. Мо́жно меню́, пожа́луйста?", "Мо́жно…?"],
      ["Коне́чно. Что вы хоти́те?", "Claro. ¿Qué desea?", "Pedí " + ca[1] + " y " + cb[1] + ".", [E(ca[1], fa.formas), E(cb[1], fb.formas)], "Я хочу́ " + fa.acc + " и " + fb.acc + ".", "Lo que pedís va en acusativo."],
      ["Что́-нибудь ещё?", "¿Algo más?", "Decí que no, gracias.", [E("que no", "нет")], "Нет, спаси́бо."],
      ["Вот, пожа́луйста.", "Acá tiene.", "Decí que " + (sa.g === "f" ? "la " : "el ") + ca[1].replace(/^(un|una) /, "") + " está muy rico.", [E("que está rico", "вку́сный|вку́сная|вку́сное|вку́сно|о́чень вку́сно")], "Спаси́бо! " + u11Cap(sa.nom) + " о́чень " + adj + "."],
      ["Спаси́бо!", "¡Gracias!", "Pedí la cuenta.", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
      ["Ка́ртой и́ли нали́чными?", "¿Con tarjeta o en efectivo?", "Decí que pagás en efectivo.", [E("en efectivo", "нали́чными")], "Нали́чными."]
    ]);
  });
  out.estacion = U11_CIUDADES.map(cd => { const s = D.sust(cd), es = cd === "Москва́" ? "Moscú" : "San Petersburgo";
    return u11Turnos("Касси́р", "f", "En la estación: un boleto a " + es, [
      ["Здра́вствуйте! Куда́ вы е́дете?", "¡Hola! ¿Adónde viaja?", "Pedí un boleto a " + es + ".", [E("el boleto", "биле́т"), E("adónde", "до " + s.gen + "|в " + s.acc)], "Мне ну́жен биле́т до " + s.gen + ".", "до + genitivo"],
      ["На сего́дня и́ли на за́втра?", "¿Para hoy o para mañana?", "Decí que para mañana.", [E("mañana", "за́втра")], "На за́втра, пожа́луйста."],
      ["Хорошо́. Ты́сяча рубле́й.", "Bien. Mil rublos.", "Preguntá cuándo sale el tren.", [E("cuándo", "когда́"), E("el tren", "по́езд|отправля́ется")], "Когда́ отправля́ется по́езд?"],
      ["В де́сять часо́в.", "A las diez.", "Preguntá si podés pagar con tarjeta.", [E("con tarjeta", "ка́ртой")], "Мо́жно ка́ртой?"],
      ["Коне́чно. Вот биле́т.", "Claro. Acá tiene el boleto.", "Agradecé y despedite.", [E("una despedida", U11_CHAO)], "Спаси́бо! До свида́ния!"]
    ]); });
  out.chats = [
    u11Turnos("Ма́ша", "f", "Chat con Masha: una invitación", [
      ["Приве́т! Что ты де́лаешь ве́чером?", "¡Hola! ¿Qué hacés esta noche?", "Decí que vas a estar en casa.", [E("en casa", "бу́ду до́ма|до́ма")], "Приве́т! Я бу́ду до́ма.", "бу́ду + до́ма"],
      ["Хо́чешь пойти́ в рестора́н?", "¿Querés ir a un restaurante?", "Aceptá.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в семь?", "¿Nos encontramos a las siete?", "Confirmá.", [E("que está bien", U11_OK)], "Хорошо́, договори́лись!"]
    ], true),
    u11Turnos("Ди́ма", "m", "Chat con Dima: cambiar el plan", [
      ["Приве́т! Мы сего́дня идём в кино́?", "¡Hola! ¿Hoy vamos al cine?", "Decí que hoy no podés.", [E("que no podés", "не могу́")], "Извини́, я сего́дня не могу́."],
      ["Почему́?", "¿Por qué?", "Explicá que tenés que trabajar.", [E("que trabajás", "рабо́тать|рабо́таю|бу́ду рабо́тать")], "Мне ну́жно рабо́тать.", "Мне ну́жно…"],
      ["Хорошо́. А когда́?", "Bueno. ¿Y cuándo?", "Proponé mañana.", [E("mañana", "за́втра")], "Дава́й за́втра?", "Дава́й…"],
      ["Дава́й! За́втра в шесть.", "¡Dale! Mañana a las seis.", "Confirmá.", [E("que está bien", U11_OK)], "Договори́лись!"]
    ], true),
    u11Turnos("А́нна", "f", "Chat con Ana: llegás tarde", [
      ["Ты где? Я уже́ в кафе́.", "¿Dónde estás? Ya estoy en el café.", "Avisá que vas a llegar diez minutos tarde.", [E("que llegás tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́, я опозда́ю на де́сять мину́т.", "Я опозда́ю на…"],
      ["Хорошо́, жду.", "Bueno, te espero.", "Pedí perdón y agradecé.", [E("perdón o gracias", "извини́|извини́те|спаси́бо|прости́")], "Спаси́бо! Извини́!"]
    ], true),
    u11Turnos("Ива́н", "m", "Chat con Iván: confirmar", [
      ["Приве́т! За́втра идём в музе́й?", "¡Hola! ¿Mañana vamos al museo?", "Decí que sí, claro.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в де́сять?", "¿Nos encontramos a las diez?", "Proponé a las once.", [E("a las once", "в оди́ннадцать|в 11")], "Дава́й в оди́ннадцать?"],
      ["Хорошо́, в оди́ннадцать.", "Bueno, a las once.", "Confirmá.", [E("que está bien", U11_OK)], "Договори́лись! До за́втра!"]
    ], true)
  ];
  /* Módulo 10: cuatro conversaciones completas */
  const paises = ["Аргенти́на", "Испа́ния", "Ме́ксика", "Брази́лия", "Ита́лия", "Фра́нция", "Герма́ния", "Росси́я", "Кита́й", "Япо́ния", "А́нглия", "Кана́да", "Чи́ли", "Колу́мбия", "Перу́", "Уругва́й", "Аме́рика"]
    .map(p => D.sust(p)).filter(Boolean);
  const ciudades = ["Барсело́на", "Мадри́д", "Москва́", "Санкт-Петербу́рг", "Буэ́нос-А́йрес", "Ло́ндон", "Пари́ж", "Берли́н", "Рим"].map(p => D.sust(p)).filter(Boolean);
  u11Conversaciones.paises = paises; u11Conversaciones.ciudades = ciudades;
  out.completas = [
    u11Turnos("Ма́ша", "f", "Conocer a alguien", [
      ["Приве́т! Я Ма́ша. А как тебя́ зову́т?", "¡Hola! Soy Masha. ¿Y vos cómo te llamás?", "Presentate.", [E("tu nombre", "меня́ зову́т|я")], "Приве́т! Меня́ зову́т Ива́н."],
      ["О́чень прия́тно! Отку́да ты?", "¡Mucho gusto! ¿De dónde sos?", "Decí de dónde sos.", [E("de dónde", "из"), E("el país", paises.map(p => p.gen).join("|"))], "Я из Аргенти́ны.", "из + genitivo"],
      ["А где ты живёшь?", "¿Y dónde vivís?", "Decí dónde vivís.", [E("dónde vivís", "живу́"), E("la ciudad o el país", ciudades.concat(paises).map(p => "в " + p.prep + "|" + p.prep).join("|"))], "Я живу́ в Барсело́не.", "в + prepositivo"],
      ["Чем ты занима́ешься?", "¿A qué te dedicás?", "Decí de qué trabajás o qué estudiás.", [E("qué hacés", "рабо́таю|учу́сь|студе́нт|студе́нтка|не рабо́таю")], "Я рабо́таю архите́ктором.", "рабо́таю + instrumental"],
      ["Интере́сно! А что ты лю́бишь де́лать?", "¡Qué interesante! ¿Y qué te gusta hacer?", "Decí qué te gusta hacer.", [E("qué te gusta", "люблю́|нра́вится")], "Я люблю́ чита́ть и гуля́ть."],
      ["А Росси́я тебе́ нра́вится?", "¿Y te gusta Rusia?", "Dá tu opinión.", [E("tu opinión", "нра́вится|люблю́|интере́сно|краси́вая|по-мо́ему|ду́маю|счита́ю")], "Да, о́чень! По-мо́ему, Росси́я о́чень краси́вая."],
      ["Хо́чешь пойти́ в кафе́ в суббо́ту?", "¿Querés ir a un café el sábado?", "Aceptá.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Отли́чно! До суббо́ты!", "¡Genial! ¡Hasta el sábado!", "Despedite.", [E("una despedida", U11_CHAO)], "Пока́! До суббо́ты!"]
    ]),
    u11Turnos("Официа́нтка", "f", "En el restaurante", [
      ["До́брый ве́чер!", "¡Buenas noches!", "Saludá y pedí la carta.", [E("la carta", "меню́")], "До́брый ве́чер! Мо́жно меню́, пожа́луйста?"],
      ["Коне́чно. Вот меню́.", "Claro. Acá tiene la carta.", "Preguntá qué recomienda.", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?", "рекомендова́ть: вы рекоменду́ете"],
      ["Сего́дня о́чень вку́сная ры́ба.", "Hoy el pescado está muy rico.", "Pedí el pescado y un té.", [E("el pescado", u11Pedido("ры́ба").formas), E("un té", u11Pedido("чай").formas)], "Хорошо́, я бу́ду ры́бу и чай."],
      ["Что́-нибудь ещё?", "¿Algo más?", "Pedí también agua.", [E("agua", u11Pedido("вода́").formas)], "И во́ду, пожа́луйста."],
      ["Вот чай и вода́.", "Acá tiene el té y el agua.", "Decí, con amabilidad, que el té está frío.", [E("que está frío", "холо́дный")], "Извини́те, чай холо́дный."],
      ["Извини́те! Сейча́с принесу́ друго́й.", "¡Ay, disculpe! Ya le traigo otro.", "Agradecé.", [E("gracias", "спаси́бо")], "Спаси́бо."],
      ["Вам нра́вится ры́ба?", "¿Le gusta el pescado?", "Decí que está muy rico.", [E("que está rico", "вку́сная|вку́сно|нра́вится|о́чень")], "Да, о́чень вку́сная!"],
      ["Спаси́бо!", "¡Gracias!", "Pedí la cuenta.", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
      ["Ка́ртой и́ли нали́чными?", "¿Con tarjeta o en efectivo?", "Decí que con tarjeta.", [E("con tarjeta", "ка́ртой")], "Ка́ртой."]
    ]),
    u11Turnos("Касси́р", "f", "Un viaje", [
      ["Здра́вствуйте! Куда́ вы е́дете?", "¡Hola! ¿Adónde viaja?", "Pedí un boleto a San Petersburgo.", [E("el boleto", "биле́т"), E("adónde", "до Санкт-Петербу́рга|в Санкт-Петербу́рг")], "Мне ну́жен биле́т до Санкт-Петербу́рга."],
      ["Вот биле́т. По́езд в во́семь часо́в.", "Acá tiene el boleto. El tren sale a las ocho.", "Preguntá dónde está la salida.", [E("dónde", "где"), E("la salida", "вы́ход")], "Спаси́бо. Где вы́ход?"],
      ["Вы́ход там, напра́во.", "La salida está allá, a la derecha.", "Agradecé.", [E("gracias", "спаси́бо")], "Спаси́бо!"],
      ["Вам помо́чь?", "¿Lo ayudo?", "(Ya en San Petersburgo.) Preguntá dónde está la estación de subte.", [E("dónde", "где|ищу́|не могу́ найти́"), E("el subte", "метро́|ста́нцию|ста́нция")], "Да, пожа́луйста. Где ста́нция метро́?", "", "Же́нщина", "f"],
      ["Иди́те пря́мо, пото́м нале́во.", "Siga derecho, después a la izquierda.", "No entendiste: pedile que lo repita.", [E("que lo repita", "повтори́те|не понима́ю|ещё раз|повтори́")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста.", "", "Же́нщина", "f"],
      ["Пря́мо, пото́м нале́во. Э́то ря́дом.", "Derecho, después a la izquierda. Está cerca.", "Agradecé.", [E("gracias", "спаси́бо")], "Спаси́бо большо́е!", "", "Же́нщина", "f"],
      ["Здра́вствуйте! Куда́ е́дем?", "¡Hola! ¿Adónde vamos?", "(Tomaste un taxi.) Decí que vas al centro.", [E("al centro", "в центр|до це́нтра")], "В центр, пожа́луйста.", "", "Такси́ст", "m"],
      ["Хорошо́. Э́то ты́сяча рубле́й.", "Bien. Son mil rublos.", "Preguntá si podés pagar con tarjeta.", [E("con tarjeta", "ка́ртой")], "Мо́жно ка́ртой?", "", "Такси́ст", "m"],
      ["Коне́чно. Вот центр!", "Claro. ¡Este es el centro!", "Agradecé y despedite.", [E("una despedida", U11_CHAO)], "Спаси́бо! До свида́ния!", "", "Такси́ст", "m"]
    ]),
    u11Turnos("Ди́ма", "m", "Quedar con un amigo", [
      ["Приве́т! Что ты де́лаешь в суббо́ту?", "¡Hola! ¿Qué hacés el sábado?", "Decí que todavía no sabés.", [E("que no sabés", "не зна́ю")], "Приве́т! Ещё не зна́ю. А что?"],
      ["Хо́чешь пойти́ в кино́?", "¿Querés ir al cine?", "Aceptá.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в шесть?", "¿Nos encontramos a las seis?", "Proponé a las siete.", [E("a las siete", "в семь|в 7")], "Дава́й в семь?"],
      ["Хорошо́, в семь. Где?", "Bueno, a las siete. ¿Dónde?", "Proponé encontrarse en el café.", [E("en el café", "в кафе́")], "Дава́й в кафе́."],
      ["Договори́лись!", "¡Quedamos así!", "Confirmá y despedite.", [E("que está bien", U11_OK + "|" + U11_CHAO)], "Отли́чно! До суббо́ты!"],
      ["Ты где? Фильм начина́ется в семь!", "(El sábado.) ¿Dónde estás? ¡La película empieza a las siete!", "Avisá que vas a llegar diez minutos tarde.", [E("que llegás tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́! Я опозда́ю на де́сять мину́т."],
      ["Ничего́! Жду.", "¡No pasa nada! Te espero.", "Agradecé.", [E("gracias", "спаси́бо")], "Спаси́бо!"]
    ], true)
  ];
  return (u11Conversaciones.cache = out);
}
/* Formas válidas al pedir algo: acusativo (y genitivo para bebidas, «Да́йте воды́») */
function u11Pedido(ru) {
  const s = u11Datos().sust(ru);
  const f = [s.acc]; if (U11_PARTITIVO.indexOf(ru) >= 0 && s.gen !== s.acc) f.push(s.gen);
  if (ru === "чай") f.push("ча́ю");
  return { acc: s.acc, formas: f.join("|") };
}
function u11Cap(t) { return t.charAt(0).toUpperCase() + t.slice(1); }

/* ── Contenido de los ejercicios ───────────────────────────── */
/* Módulo 1: situación → fórmula [situación, fórmula, escena] */
const U11_EXPR = [
  ["No entendiste lo que te dijeron.", "Я не понима́ю.", "🤷"], ["Te hablaron muy rápido y querés que lo digan otra vez.", "Повтори́те, пожа́луйста.", "🔁"],
  ["Querés saber el precio de algo.", "Ско́лько сто́ит?", "🏷️"], ["Te perdiste y necesitás ayuda.", "Помоги́те, пожа́луйста!", "🆘"],
  ["Ves una palabra que no conocés en un cartel.", "Что э́то зна́чит?", "🪧"], ["Querés saber si en el kiosco tienen agua.", "У вас есть вода́?", "💧"],
  ["Le pisaste el pie a alguien sin querer.", "Извини́те!", "😬"], ["No sabés cómo se dice «tarjeta» en ruso.", "Как сказа́ть «tarjeta» по-ру́сски?", "💬"],
  ["Estás buscando el subte.", "Я ищу́ метро́.", "🚇"], ["En la boletería: necesitás un boleto.", "Мне ну́жен биле́т.", "🎫"],
  ["En la oficina de turismo: necesitás un mapa.", "Мне нужна́ ка́рта.", "🗺️"], ["Querés saber dónde queda el banco.", "Где банк?", "🏦"],
  ["Querés pedir permiso para sentarte en una silla libre.", "Мо́жно?", "🪑"], ["En un café: querés un café.", "Мо́жно мне ко́фе?", "☕"]
];
/* ну́жен / нужна́ / ну́жно: [ruso, español] */
const U11_NUZHEN = [["биле́т", "un boleto"], ["ка́рта", "un mapa"], ["телефо́н", "un teléfono"], ["ру́чка", "una lapicera"], ["слова́рь", "un diccionario"], ["кни́га", "un libro"],
  ["маши́на", "un auto"], ["врач", "un médico"], ["гости́ница", "un hotel"], ["такси́", "un taxi"], ["рабо́тать", "trabajar"], ["отдыха́ть", "descansar"]];
/* Traducción en contexto: [módulo, contexto, español, ruso (o lista)] */
const U11_TRAD = [
  [1, "Al vendedor", "No entiendo.", "Я не понима́ю."], [1, "A alguien que habla rápido", "Repita, por favor.", "Повтори́те, пожа́луйста."],
  [1, "Señalando algo en una tienda", "¿Cuánto cuesta?", "Ско́лько сто́ит?"], [1, "Mirando un cartel", "¿Qué significa esto?", "Что э́то зна́чит?"],
  [1, "En la calle, perdido", "¡Ayúdeme, por favor!", "Помоги́те, пожа́луйста!"], [1, "En un kiosco", "¿Tienen agua?", "У вас есть вода́?"],
  [1, "A un desconocido", "Disculpe, ¿dónde está el banco?", "Извини́те, где банк?"], [1, "En la calle", "Busco el subte.", "Я ищу́ метро́."],
  [2, "Al vendedor", "¿Tienen otro talle?", "У вас есть друго́й разме́р?"], [2, "Al vendedor", "¿Tienen otro color?", "У вас есть друго́й цвет?"],
  [2, "En la caja", "Voy a pagar con tarjeta.", "Я бу́ду плати́ть ка́ртой."], [2, "Al vendedor", "Quiero comprar una camisa.", "Я хочу́ купи́ть руба́шку."],
  [2, "Mirando el precio", "La campera es cara.", "Ку́ртка дорога́я."], [2, "Al pagar", "Acá tiene.", "Вот, пожа́луйста."],
  [2, "Te preguntan cuánto costó un libro", "Mil rublos.", "Ты́сяча рубле́й."], [2, "El vendedor pregunta", "¿Con tarjeta o en efectivo?", "Ка́ртой и́ли нали́чными?"],
  [3, "Al mozo", "¿Me trae la carta, por favor?", "Мо́жно меню́, пожа́луйста?"], [3, "Al mozo", "La cuenta, por favor.", "Счёт, пожа́луйста."],
  [3, "Al mozo", "¿Qué recomienda?", "Что вы рекоменду́ете?"], [3, "Al mozo", "Voy a querer pescado.", "Я бу́ду ры́бу."],
  [3, "Al mozo", "Tráigame agua, por favor.", "Принеси́те, пожа́луйста, во́ду."], [3, "El mozo pregunta si querés algo más", "No, gracias.", "Нет, спаси́бо."],
  [3, "Comiendo", "La sopa está muy rica.", "Суп о́чень вку́сный."], [3, "Al mozo", "Disculpe, el té está frío.", "Извини́те, чай холо́дный."],
  [4, "En la calle", "¿Dónde está la parada?", "Где остано́вка?"], [4, "En la boletería", "Necesito un boleto a Moscú.", "Мне ну́жен биле́т до Москвы́."],
  [4, "En la estación", "¿Cuándo sale el tren?", "Когда́ отправля́ется по́езд?"], [4, "A un desconocido", "¿Cómo llego al centro?", "Как дое́хать до це́нтра?"],
  [4, "En el aeropuerto", "¿Dónde está la salida?", "Где вы́ход?"], [4, "Al taxista", "Al aeropuerto, por favor.", "В аэропо́рт, пожа́луйста."],
  [4, "A un amigo", "Voy al centro en subte.", "Я е́ду в центр на метро́."], [4, "En la boletería", "¿Cuánto cuesta el boleto?", "Ско́лько сто́ит биле́т?"],
  [5, "A un turista", "Siga derecho.", "Иди́те пря́мо."], [5, "A un turista", "Doble a la izquierda.", "Поверни́те нале́во."],
  [5, "A un turista", "Doble a la derecha.", "Поверни́те напра́во."], [5, "A un desconocido", "¿Dónde queda el banco?", "Где нахо́дится банк?"],
  [5, "A un turista", "El banco está cerca.", "Банк ря́дом."], [5, "A un turista", "El museo está lejos.", "Музе́й далеко́."],
  [5, "A un turista", "El café está enfrente de la estación.", "Кафе́ напро́тив ста́нции."], [5, "A un turista", "El banco está entre la tienda y el restaurante.", "Банк ме́жду магази́ном и рестора́ном."],
  [6, "En la recepción", "Tengo un problema.", "У меня́ пробле́ма."], [6, "En la calle", "Disculpe, no encuentro el hotel.", "Извини́те, я не могу́ найти́ гости́ницу."],
  [6, "En el hotel", "El teléfono no funciona.", "Телефо́н не рабо́тает."], [6, "A un amigo", "No tengo plata.", "У меня́ нет де́нег."],
  [6, "En la estación", "Perdí el tren.", ["Я опозда́л на по́езд.", "Я опозда́ла на по́езд."]], [6, "En la estación", "¿Cuándo sale el próximo tren?", "Когда́ сле́дующий по́езд?"],
  [6, "Pensando en voz alta", "¿Qué hago?", "Что мне де́лать?"], [6, "En la recepción", "Acá algo no funciona.", "Здесь что́-то не рабо́тает."],
  [7, "A un amigo", "¿Qué hacés esta noche?", "Что ты де́лаешь ве́чером?"], [7, "A un amigo", "¿Lo dejamos para mañana?", "Дава́й за́втра?"],
  [7, "A una amiga", "Voy a llegar diez minutos tarde.", "Я опозда́ю на де́сять мину́т."], [7, "A un amigo", "Hoy no puedo.", "Я сего́дня не могу́."],
  [7, "Respondiendo a un plan", "Quedamos así.", "Договори́лись."], [7, "A una amiga", "¿Querés ir al cine?", "Хо́чешь пойти́ в кино́?"],
  [7, "A un amigo", "Encontrémonos a las siete.", "Дава́й встре́тимся в семь."],
  [8, "En un café", "Prefiero el té.", "Я предпочита́ю чай."], [8, "Hablando de un libro", "Creo que es interesante.", "Я ду́маю, что э́то интере́сно."],
  [8, "Te piden tu opinión", "Para mí, está bien.", "По-мо́ему, э́то хорошо́."], [8, "En el trabajo", "Considero que es importante.", "Я счита́ю, что э́то ва́жно."],
  [8, "En el cine", "No me gusta esta película.", "Мне не нра́вится э́тот фильм."], [8, "Hablando de la ciudad", "El subte es cómodo.", "Метро́ удо́бное."],
  [8, "Hablando de un libro", "El libro es aburrido.", "Кни́га ску́чная."], [8, "Hablando de un viaje", "Me gusta Moscú porque es linda.", "Мне нра́вится Москва́, потому́ что она́ краси́вая."],
  [9, "Conociendo a alguien", "¿A qué te dedicás?", "Чем ты занима́ешься?"], [9, "Conociendo a alguien", "¿De dónde sos?", "Отку́да ты?"],
  [9, "Conociendo a alguien", "¿Dónde vivís?", "Где ты живёшь?"], [9, "Conociendo a alguien", "¿Qué te gusta hacer?", "Что ты лю́бишь де́лать?"],
  [9, "El lunes, a un amigo", "¿Qué hiciste el fin de semana?", "Что ты де́лал на выходны́х?"], [9, "A un amigo", "¿Qué planes tenés?", "Каки́е у тебя́ пла́ны?"],
  [9, "A una amiga", "¿Te gusta Barcelona?", "Тебе́ нра́вится Барсело́на?"], [9, "Contando de vos", "Soy de Argentina, pero ahora vivo en Barcelona.", "Я из Аргенти́ны, но сейча́с живу́ в Барсело́не."]
];
/* Módulo 6: problema → frase */
const U11_PROBLEMAS = [["No encontrás el hotel.", "Я не могу́ найти́ гости́ницу.", "🏨"], ["Tu teléfono no anda.", "Телефо́н не рабо́тает.", "📱"], ["No tenés plata.", "У меня́ нет де́нег.", "💸"],
  ["No sabés qué hacer.", "Что мне де́лать?", "🤔"], ["Querés contar que te pasa algo.", "У меня́ пробле́ма.", "⚠️"], ["Algo de la habitación no funciona.", "Здесь что́-то не рабо́тает.", "🔧"],
  ["Perdiste el tren.", "Я опозда́л на по́езд.", "🚆"], ["Querés saber cuándo sale el próximo tren.", "Когда́ сле́дующий по́езд?", "🕒"]];
/* Versión más natural: [situación, natural, otras] */
const U11_NATURAL = [
  ["Le pedís la carta a un mozo.", "Мо́жно меню́, пожа́луйста?", ["Да́й меню́!", "Меню́!"]],
  ["Le preguntás a un desconocido dónde está el banco.", "Извини́те, где банк?", ["Где банк?", "Банк?"]],
  ["Le escribís a un amigo para invitarlo al cine.", "Хо́чешь пойти́ в кино́?", ["Хоти́те пойти́ в кино́?", "Кино́."]],
  ["Le pedís a la vendedora que lo repita.", "Повтори́те, пожа́луйста.", ["Повтори́!", "Что?"]],
  ["Le pedís agua al mozo.", "Принеси́те, пожа́луйста, во́ду.", ["Вода́!", "Принеси́ во́ду!"]],
  ["Le avisás a una amiga que llegás tarde.", "Извини́, я опозда́ю на де́сять мину́т.", ["Я опозда́ю.", "Извини́те, я опозда́ю на де́сять мину́т."]],
  ["Le decís al mozo que el té está frío.", "Извини́те, чай холо́дный.", ["Чай холо́дный!", "Плохо́й чай!"]],
  ["Cancelás un plan con un amigo.", "Извини́, я сего́дня не могу́. Дава́й за́втра?", ["Нет.", "Я не могу́."]],
  ["Le pedís la cuenta al mozo.", "Счёт, пожа́луйста.", ["Счёт!", "Да́й счёт!"]],
  ["Le agradecés al taxista y te despedís.", "Спаси́бо! До свида́ния!", ["Пока́!", "Хорошо́."]]
];
/* Módulo 8: cosa + adjetivo [sustantivo, adjetivo, español] */
const U11_ADJ = [["фильм", "интере́сный", "La película es interesante."], ["кни́га", "ску́чный", "El libro es aburrido."], ["го́род", "краси́вый", "La ciudad es linda."],
  ["суп", "вку́сный", "La sopa está rica."], ["метро́", "удо́бный", "El subte es cómodo."], ["рабо́та", "ва́жный", "El trabajo es importante."], ["Москва́", "краси́вый", "Moscú es linda."],
  ["рестора́н", "хоро́ший", "El restaurante es bueno."], ["пи́цца", "вку́сный", "La pizza está rica."], ["кварти́ра", "удо́бный", "El departamento es cómodo."],
  ["му́зыка", "интере́сный", "La música es interesante."], ["по́езд", "удо́бный", "El tren es cómodo."], ["ры́ба", "вку́сный", "El pescado está rico."], ["кафе́", "хоро́ший", "El café es bueno."]];
/* Comprensión: diálogos que se escuchan */
const U11_COMPRENSION = [
  { id: "cafe", lineas: ["— Здра́вствуйте! Что вы хоти́те?", "— Я бу́ду суп и чай.", "— Что́-нибудь ещё?", "— Нет, спаси́бо."],
    preguntas: [["¿Qué pide el cliente?", "Sopa y té", ["Ensalada y café", "Pescado y agua"]], ["¿Quiere algo más?", "No", ["Sí, agua", "Sí, pan"]]] },
  { id: "tienda", lineas: ["— Ско́лько сто́ит руба́шка?", "— Ты́сяча рубле́й.", "— У вас есть друго́й цвет?", "— Да, вот.", "— Я бу́ду плати́ть ка́ртой."],
    preguntas: [["¿Cuánto cuesta la camisa?", "Mil rublos", ["Cien rublos", "Diez rublos"]], ["¿Qué pregunta el cliente?", "Si hay otro color", ["Si hay otro talle", "Dónde está la caja"]], ["¿Cómo paga?", "Con tarjeta", ["En efectivo", "No paga"]]] },
  { id: "calle", lineas: ["— Извини́те, где банк?", "— Иди́те пря́мо, пото́м поверни́те нале́во.", "— Э́то далеко́?", "— Нет, ря́дом."],
    preguntas: [["¿Qué busca la persona?", "El banco", ["El subte", "El hotel"]], ["¿Hacia dónde tiene que doblar?", "A la izquierda", ["A la derecha", "No dobla"]], ["¿Está lejos?", "No, está cerca", ["Sí, muy lejos", "No lo sabe"]]] },
  { id: "chat", lineas: ["— Приве́т! Мы сего́дня идём в кино́?", "— Извини́, я сего́дня не могу́. Мне ну́жно рабо́тать.", "— Хорошо́. Дава́й за́втра?", "— Дава́й! В семь."],
    preguntas: [["¿Por qué no puede hoy?", "Tiene que trabajar", ["No le gusta el cine", "No tiene plata"]], ["¿Cuándo van al cine?", "Mañana a las siete", ["Hoy a las siete", "El sábado"]]] },
  { id: "estacion", lineas: ["— Мне ну́жен биле́т до Москвы́.", "— На сего́дня?", "— Нет, на за́втра.", "— Хорошо́. По́езд отправля́ется в де́вять часо́в."],
    preguntas: [["¿Adónde viaja?", "A Moscú", ["A San Petersburgo", "Al aeropuerto"]], ["¿Para cuándo es el boleto?", "Para mañana", ["Para hoy", "Para el sábado"]], ["¿A qué hora sale el tren?", "A las nueve", ["A las diez", "A las ocho"]]] },
  { id: "hotel", lineas: ["— Здра́вствуйте! У меня́ пробле́ма.", "— Кака́я пробле́ма?", "— Телефо́н не рабо́тает.", "— Извини́те! Я вам помогу́."],
    preguntas: [["¿Qué problema tiene?", "No funciona el teléfono", ["No tiene plata", "Perdió el tren"]], ["¿Qué le responden?", "Que lo van a ayudar", ["Que no pueden hacer nada", "Que vuelva mañana"]]] }
];

/* ── Banco de ejercicios ───────────────────────────────────── */
function ejerciciosUnidad11() {
  const D = u11Datos(), E = u11E, C = u11Conversaciones();
  const out = [];
  const baraja = (a, k) => { const r = a.slice(); const n = r.length; return r.map((x, i) => r[(i + k) % n]); };
  const lexId = ru => { const e = D.lex(ru); return e ? e.id : null; };
  /* Situación abierta: se corrige por intención */
  const situ = (id, tipo, modulo, o) => out.push({ id: "U11-" + id, tipo, forma: "situacion", dificultad: o.dif || 2, modulo, grupo: o.grupo || id, items: o.items || [],
    pide: o.pide, escena: o.escena, contexto: o.contexto, pista: o.pista, plano: o.plano, audio: o.audio, audioManual: o.audioManual,
    sit: { necesita: o.nec, modelos: [o.modelo], orden: !!o.orden }, oir: o.modelo, nota: o.nota, explicacion: "Una forma de decirlo: **" + o.modelo + "**" + (o.nota ? " " + o.nota : "") });
  const trad = (id, modulo, ctx, es, ru) => { const l = Array.isArray(ru) ? ru : [ru];
    out.push({ id: "U11-tr-" + id, tipo: "traduccion", forma: "escribir", dificultad: 3, modulo, grupo: "TR-" + id, items: [], oir: l[0],
      pide: ctx + ". Decí en ruso: «" + es + "»", audio: l[0], audioManual: true, esperadas: l, idioma: "ru", explicacion: l[0] + " — " + es });
    out.push({ id: "U11-dc-" + id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo, grupo: "DC-" + id, items: [], pide: "Escuchá y escribí.", audio: l[0], esperadas: [l[0]], idioma: "ru", explicacion: l[0] + " — " + es }); };

  /* ── Módulo 1: sobrevivir ── */
  U11_EXPR.forEach(([sit, ru, esc], j) => {
    const otras = baraja(U11_EXPR.filter(x => x[1] !== ru), j * 3).slice(0, 2).map(x => x[1]);
    out.push({ id: "U11-ex-" + j, tipo: "elegir-expr", forma: "elegir", dificultad: 1, modulo: 1, grupo: "EX-" + j, items: [], escena: esc, pide: sit + " ¿Qué decís?",
      opciones: baraja([ru].concat(otras), j), correcta: ru, oir: ru, explicacion: "**" + ru + "**" });
  });
  [
    ["No entendiste lo que te dijo el vendedor. ¿Qué le decís?", "🤷", [E("que no entendés", "не понима́ю|не по́нял|не поняла́")], "Извини́те, я не понима́ю."],
    ["Te hablaron muy rápido. Pedí que lo repitan.", "🔁", [E("que lo repitan", "повтори́те|повтори́|ещё раз")], "Повтори́те, пожа́луйста."],
    ["Querés saber cuánto cuesta el pan.", "🍞", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el pan", "хлеб")], "Ско́лько сто́ит хлеб?"],
    ["En un kiosco: preguntá si tienen agua.", "💧", [E("si tienen", "у вас есть|есть"), E("agua", "вода́")], "У вас есть вода́?"],
    ["En la boletería: decí que necesitás un boleto.", "🎫", [E("que lo necesitás o lo querés", "ну́жен|ну́жно|хочу́|мо́жно|да́йте"), E("un boleto", "биле́т")], "Мне ну́жен биле́т."],
    ["Te perdiste. Pedí ayuda.", "🆘", [E("un pedido de ayuda", "помоги́те|помоги́")], "Извини́те, помоги́те, пожа́луйста!"],
    ["Ves una palabra en un cartel y no sabés qué es. Preguntá qué significa.", "🪧", [E("qué significa", "что э́то зна́чит|что зна́чит")], "Что э́то зна́чит?"],
    ["Buscás el subte. Preguntale a alguien.", "🚇", [E("que lo buscás o dónde está", "ищу́|где"), E("el subte", "метро́")], "Извини́те, где метро́?"],
    ["Necesitás un mapa de la ciudad. Pedilo.", "🗺️", [E("que lo necesitás o lo querés", "нужна́|ну́жно|хочу́|мо́жно|да́йте|есть"), E("un mapa", "ка́рта|ка́рту")], "Мне нужна́ ка́рта."],
    ["No sabés cómo se dice «cuchara» en ruso. Preguntalo.", "🥄", [E("cómo se dice", "как сказа́ть|как бу́дет")], "Как сказа́ть «cuchara» по-ру́сски?"],
    ["En un café: pedí un café.", "☕", [E("un café", "ко́фе")], "Мо́жно мне ко́фе, пожа́луйста?"],
    ["Querés saber dónde queda el banco.", "🏦", [E("dónde", "где"), E("el banco", "банк")], "Извини́те, где банк?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s1-" + j, "situacion", 1, { pide, escena: esc, nec, modelo, grupo: "S1-" + j }));
  U11_NUZHEN.forEach(([ru, es], j) => {
    const verbo = /ть$/.test(ru), s = verbo ? null : D.sust(ru);
    const f = verbo ? "ну́жно" : s.g === "f" ? "нужна́" : s.g === "m" ? "ну́жен" : "ну́жно";
    const frase = "Мне " + f + " " + ru + ".", esF = "Necesito " + es + ".";
    out.push({ id: "U11-nz-" + j, tipo: "nuzhen", forma: "elegir", dificultad: 1, modulo: 1, grupo: "NZ-" + j, items: [], pide: "Completá: «" + (verbo ? "Tengo que " + es : esF) + "»",
      grande: "Мне _____ " + ru + ".", opciones: ["ну́жен", "нужна́", "ну́жно"], correcta: f, oir: frase,
      explicacion: "**" + frase + "**: " + (verbo ? "con un verbo va ну́жно." : f === "ну́жен" ? ru + " es masculina." : f === "нужна́" ? ru + " es femenina." : ru + " es neutra.") });
    out.push({ id: "U11-nzw-" + j, tipo: "traduccion", forma: "escribir", dificultad: 2, modulo: 1, grupo: "NZw-" + j, items: [], pide: "Decí en ruso: «" + (verbo ? "Tengo que " + es : esF) + "»",
      audio: frase, audioManual: true, esperadas: [frase], idioma: "ru", oir: frase, explicacion: frase });
  });

  /* ── Módulo 2: tienda ── */
  for (let n = 1; n <= 12; n++) {
    const f = n === 1 ? "рубль" : n <= 4 ? "рубля́" : "рубле́й", fr = U11_NUM[n] + " " + f;
    out.push({ id: "U11-pr-" + n, tipo: "precio", forma: "elegir", dificultad: 1, modulo: 2, grupo: "PR-" + n, items: [], pide: "Completá el precio: " + n + " ₽",
      grande: U11_NUM[n] + " _____", opciones: ["рубль", "рубля́", "рубле́й"], correcta: f, oir: fr, explicacion: "**" + fr + "**: " + (n === 1 ? "con 1, рубль." : n <= 4 ? "con 2, 3 y 4, рубля́." : "con 5 o más, рубле́й.") });
    out.push({ id: "U11-prw-" + n, tipo: "precio", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PRw-" + n, items: [], pide: "Escribí en ruso: «Cuesta " + n + " " + (n === 1 ? "rublo" : "rublos") + ".»",
      audio: "Сто́ит " + fr + ".", audioManual: true, esperadas: ["Сто́ит " + fr + ".", "Сто́ит " + n + " " + f + "."], idioma: "ru", oir: "Сто́ит " + fr + ".", explicacion: "Сто́ит " + fr + "." });
  }
  [["сто рубле́й", "100 ₽"], ["ты́сяча рубле́й", "1000 ₽"]].forEach(([ru, n], j) =>
    out.push({ id: "U11-prg-" + j, tipo: "precio", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PRg-" + j, items: [], pide: "Escribí el precio en ruso: " + n,
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", oir: ru, explicacion: ru + " — " + n }));
  [["Ко́фе сто́ит сто рубле́й.", "100 ₽", ["10 ₽", "1000 ₽"]], ["Кни́га сто́ит ты́сяча рубле́й.", "1000 ₽", ["100 ₽", "10 ₽"]], ["Хлеб сто́ит пять рубле́й.", "5 ₽", ["4 ₽", "500 ₽"]],
   ["Ру́чка сто́ит три рубля́.", "3 ₽", ["13 ₽", "300 ₽"]], ["Вода́ сто́ит два рубля́.", "2 ₽", ["12 ₽", "200 ₽"]], ["Биле́т сто́ит де́сять рубле́й.", "10 ₽", ["100 ₽", "2 ₽"]],
   ["Сок сто́ит оди́н рубль.", "1 ₽", ["11 ₽", "100 ₽"]], ["Чай сто́ит семь рубле́й.", "7 ₽", ["8 ₽", "6 ₽"]]].forEach(([ru, ok, malas], j) =>
    out.push({ id: "U11-pra-" + j, tipo: "precio", forma: "elegir", dificultad: 2, modulo: 2, grupo: "PRa-" + j, items: [], pide: "Escuchá. ¿Cuánto cuesta?", audio: ru,
      opciones: baraja([ok].concat(malas), j), correcta: ok, explicacion: ru + " — " + ok }));
  U11_COMPRAS.forEach(([ru, es], j) => { const s = D.sust(ru), nz = s.g === "f" ? "нужна́" : s.g === "m" ? "ну́жен" : "ну́жно";
    situ("s2c-" + j, "situacion", 2, { pide: "En una tienda: decile a la vendedora que querés comprar " + es + ".", escena: "🛍️",
      nec: [E(es, "хочу́ купи́ть " + s.acc + "|хочу́ " + s.acc + "|ищу́ " + s.acc + "|мне " + nz + " " + s.nom + "|" + s.acc + "|~" + s.nom)], modelo: "Я хочу́ купи́ть " + s.acc + ".", grupo: "S2c-" + j }); });
  [
    ["Preguntá cuánto cuesta la camisa.", "🏷️", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("la camisa", "руба́шка")], "Ско́лько сто́ит руба́шка?"],
    ["Preguntá cuánto cuesta la cartera.", "👜", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("la cartera", "су́мка")], "Ско́лько сто́ит су́мка?"],
    ["La campera te queda chica. Preguntá si tienen otro talle.", "🧥", [E("si tienen", "у вас есть|есть|мо́жно"), E("otro talle", "друго́й разме́р")], "У вас есть друго́й разме́р?"],
    ["No te gusta el color. Preguntá si tienen otro.", "🎨", [E("si tienen", "у вас есть|есть|мо́жно"), E("otro color", "друго́й цвет")], "У вас есть друго́й цвет?"],
    ["En la caja: decí que vas a pagar con tarjeta.", "💳", [E("con tarjeta", "ка́ртой")], "Я бу́ду плати́ть ка́ртой."],
    ["En la caja: decí que pagás en efectivo.", "💵", [E("en efectivo", "нали́чными")], "Нали́чными, пожа́луйста."],
    ["Mirás el precio de una camisa: decí que es cara.", "😮", [E("que es cara", "дорога́я|до́рого")], "Руба́шка дорога́я."],
    ["Mirás el precio de una campera: decí que es barata.", "🙂", [E("que es barata", "дешёвая|дёшево")], "Ку́ртка дешёвая."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s2-" + j, "situacion", 2, { pide, escena: esc, nec, modelo, grupo: "S2-" + j }));

  /* ── Módulo 3: café ── */
  [[0, 5], [1, 6], [2, 8], [3, 7], [4, 9], [5, 9], [6, 1], [7, 0], [8, 2], [9, 3]].forEach(([a, b], j) => {
    const A = U11_COMIDA[a], B = U11_COMIDA[b], pa = u11Pedido(A[0]), pb = u11Pedido(B[0]);
    situ("s3p-" + j, "situacion", 3, { pide: "Estás en un café. Pedí " + A[1] + " y " + B[1] + ".", escena: A[2] + " " + B[2],
      nec: [E(A[1], pa.formas), E(B[1], pb.formas)], modelo: "Я хочу́ " + pa.acc + " и " + pb.acc + ".", nota: "Lo que pedís va en acusativo.", grupo: "S3p-" + j });
  });
  [
    ["Te sentaste en un café. Pedí la carta.", "📋", [E("la carta", "меню́")], "Мо́жно меню́, пожа́луйста?"],
    ["Terminaste de comer. Pedí la cuenta.", "🧾", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
    ["No sabés qué elegir. Preguntale al mozo qué recomienda.", "🤔", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?"],
    ["Probaste la sopa: decí que está muy rica.", "🍲", [E("que está rica", "вку́сный|вку́сно")], "Суп о́чень вку́сный!"],
    ["El mozo pregunta «Что́-нибудь ещё?». Decí que no, gracias.", "🙅", [E("que no", "нет")], "Нет, спаси́бо."],
    ["Te trajeron el café frío. Avisale al mozo con amabilidad.", "☕", [E("que está frío", "холо́дный|холо́дное")], "Извини́те, ко́фе холо́дный."],
    ["Querés pedir ya. Preguntá si podés pedir.", "🙋", [E("si podés pedir", "мо́жно заказа́ть|заказа́ть|зака́з")], "Мо́жно заказа́ть?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s3-" + j, "situacion", 3, { pide, escena: esc, nec, modelo, grupo: "S3-" + j }));
  /* Reconstruir el diálogo del café */
  [["ко́фе", "сала́т"], ["суп", "чай"]].forEach(([a, b], j) => { const l = ["Здра́вствуйте. Мо́жно меню́, пожа́луйста?", "Коне́чно.", "Я хочу́ " + u11Pedido(a).acc + " и " + u11Pedido(b).acc + ".", "Что́-нибудь ещё?", "Нет, спаси́бо.", "Счёт, пожа́луйста."];
    out.push({ id: "U11-ord-" + j, tipo: "ordenar-dlg", forma: "ordenar", bloques: true, sep: "\n", dificultad: 2, modulo: 3, grupo: "OR-" + j, items: [], pide: "Ordená la conversación en el café.",
      fichas: baraja(l, 2 + j), esperada: l.join("\n"), explicacion: l.join(" / ") }); });

  /* ── Módulo 4: transporte ── */
  [
    ["Querés tomar el colectivo. Preguntá dónde está la parada.", "🚌", [E("dónde", "где"), E("la parada", "остано́вка")], "Извини́те, где остано́вка?"],
    ["Preguntá dónde está la estación de subte.", "🚇", [E("dónde", "где|ищу́"), E("el subte", "ста́нция метро́|метро́|~ста́нция")], "Где ста́нция метро́?"],
    ["Preguntá cómo llegar al centro.", "🏙️", [E("cómo llegar", "как дое́хать|как"), E("al centro", "до це́нтра|в центр|~центр")], "Как дое́хать до це́нтра?"],
    ["En la boletería: pedí un boleto a Moscú.", "🎫", [E("el boleto", "биле́т"), E("adónde", "до Москвы́|в Москву́|~Москва́")], "Мне ну́жен биле́т до Москвы́."],
    ["Preguntá cuánto cuesta el boleto.", "🎫", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el boleto", "биле́т")], "Ско́лько сто́ит биле́т?"],
    ["Preguntá cuándo sale el tren.", "🚆", [E("cuándo", "когда́"), E("el tren", "по́езд|отправля́ется")], "Когда́ отправля́ется по́езд?"],
    ["Estás en el aeropuerto. Preguntá dónde está la salida.", "🚪", [E("dónde", "где"), E("la salida", "вы́ход")], "Где вы́ход?"],
    ["Estás frente al museo. Preguntá dónde está la entrada.", "🚪", [E("dónde", "где"), E("la entrada", "вход")], "Где вход?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s4-" + j, "situacion", 4, { pide, escena: esc, nec, modelo, grupo: "S4-" + j }));
  [["в аэропо́рт", "al aeropuerto", "✈️"], ["на вокза́л", "a la estación de tren", "🚉"], ["в гости́ницу", "al hotel", "🏨"], ["в центр", "al centro", "🏙️"]].forEach(([ru, es, esc], j) => {
    const w = ru.split(" ")[1];
    situ("s4t-" + j, "situacion", 4, { pide: "El taxista te pregunta adónde vas. Decí que vas " + es + ".", escena: "🚕" + esc, contexto: [{ p: "Такси́ст", ru: "Здра́вствуйте! Куда́ е́дем?" }],
      nec: [E("adónde", ru + "|~" + w)], modelo: u11Cap(ru) + ", пожа́луйста.", grupo: "S4t-" + j });
  });
  /* Где / куда́ / отку́да con las formas de Casos */
  [["аэропо́рт", "в"], ["вокза́л", "на"], ["гости́ница", "в"], ["центр", "в"], ["Москва́", "в"], ["ста́нция", "на"]].forEach(([ru, pr], j) => {
    const s = D.sust(ru), op = [s.nom, s.acc, s.prep, s.gen].filter((x, i, a) => a.indexOf(x) === i);
    const tres = (corr) => baraja(op.filter(x => x !== corr).slice(0, 2).concat(corr), j);
    out.push({ id: "U11-dg-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DG-" + j, items: [], pide: "¿Dónde? Completá.", grande: "Я " + pr + " _____.",
      opciones: tres(s.prep), correcta: s.prep, oir: "Я " + pr + " " + s.prep + ".", explicacion: "**Я " + pr + " " + s.prep + "**: ¿dónde? → prepositivo." });
    out.push({ id: "U11-dk-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DK-" + j, items: [], pide: "¿Adónde? Completá.", grande: "Я е́ду " + pr + " _____.",
      opciones: tres(s.acc).length === 3 ? tres(s.acc) : baraja([s.acc, s.prep, s.gen], j), correcta: s.acc, oir: "Я е́ду " + pr + " " + s.acc + ".", explicacion: "**Я е́ду " + pr + " " + s.acc + "**: ¿adónde? → acusativo." });
    if (pr === "в") out.push({ id: "U11-do-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DO-" + j, items: [], pide: "¿De dónde? Completá.", grande: "Я е́ду из _____.",
      opciones: baraja([s.gen, s.prep, s.acc].filter((x, i, a) => a.indexOf(x) === i), j), correcta: s.gen, oir: "Я е́ду из " + s.gen + ".", explicacion: "**из " + s.gen + "**: ¿de dónde? → genitivo." });
  });

  /* ── Módulo 5: direcciones ── */
  const giro = m => m === "R" ? ["напра́во", "a la derecha"] : ["нале́во", "a la izquierda"];
  const frasesRuta = r => { const g = r.split(" ").filter(m => m === "R" || m === "L").map(giro);
    return "Иди́те пря́мо" + g.map(x => ", пото́м поверни́те " + x[0]).join("") + "."; };
  U11_RUTAS.forEach((r, j) => {
    const L = U11_LUGARES[j % U11_LUGARES.length], g = r.split(" ").filter(m => m === "R" || m === "L").map(giro), modelo = frasesRuta(r);
    situ("rt-" + j, "ruta", 5, { pide: "Un turista te pregunta por " + L[2] + ". Explicale el camino del plano.", contexto: [{ p: "Тури́ст", ru: "Извини́те, где " + L[1] + "?" }],
      plano: { ruta: r, destino: L[0] }, orden: true, nec: [E("que siga derecho", "пря́мо")].concat(g.map(x => E(x[1], x[0]))), modelo, grupo: "RT-" + j,
      pista: "Иди́те пря́мo… Поверни́те напра́во / нале́во…".replace("пря́мo", "пря́мо") });
    const otras = U11_RUTAS.map(frasesRuta).filter(x => x !== modelo).filter((x, i, a) => a.indexOf(x) === i);
    out.push({ id: "U11-rte-" + j, tipo: "ruta-elegir", forma: "elegir", dificultad: 1, modulo: 5, grupo: "RTe-" + j, items: [], pide: "¿Qué indicación corresponde al camino del plano?",
      plano: { ruta: r, destino: L[0] }, opciones: baraja([modelo].concat(baraja(otras, j).slice(0, 2)), j), correcta: modelo, oir: modelo, explicacion: modelo });
  });
  [[3, 0, 5], [5, 2, 3], [2, 6, 0], [6, 7, 4], [0, 8, 2], [7, 3, 6]].forEach(([a, b, c], j) => {
    const A = U11_LUGARES[a], B = U11_LUGARES[b], Cc = U11_LUGARES[c], sa = D.sust(A[1]), sb = D.sust(B[1]), sc = D.sust(Cc[1]);
    const ok = u11Cap(sb.nom) + " ме́жду " + sa.ins + " и " + sc.ins + ".";
    const malas = [u11Cap(sb.nom) + " далеко́.", u11Cap(sa.nom) + " ме́жду " + sb.ins + " и " + sc.ins + "."];
    out.push({ id: "U11-ub-" + j, tipo: "ubicacion", forma: "elegir", dificultad: 2, modulo: 5, grupo: "UB-" + j, items: [], pide: "Mirá la calle. ¿Dónde está " + B[2].replace(/^(el|la) /, "$1 ") + "?",
      grande: A[0] + " " + B[0] + " " + Cc[0], opciones: baraja([ok].concat(malas), j), correcta: ok, oir: ok, explicacion: "**" + ok + "**: ме́жду + instrumental." });
    situ("ubs-" + j, "situacion", 5, { pide: "Explicale a un turista dónde está " + B[2] + ": entre " + A[2] + " y " + Cc[2] + ".", escena: A[0] + " " + B[0] + " " + Cc[0],
      nec: [E("entre", "ме́жду"), E(A[2], sa.ins), E(Cc[2], sc.ins)], modelo: ok, nota: "ме́жду va con instrumental.", grupo: "UBs-" + j });
  });

  /* ── Módulo 6: problemas ── */
  U11_PROBLEMAS.forEach(([sit, ru, esc], j) => {
    const otras = baraja(U11_PROBLEMAS.filter(x => x[1] !== ru), j * 2).slice(0, 2).map(x => x[1]);
    out.push({ id: "U11-pb-" + j, tipo: "elegir-expr", forma: "elegir", dificultad: 1, modulo: 6, grupo: "PB-" + j, items: [], escena: esc, pide: sit + " ¿Qué decís?",
      opciones: baraja([ru].concat(otras), j), correcta: ru, oir: ru, explicacion: "**" + ru + "**" });
  });
  [
    ["No encontrás tu hotel. Pedile ayuda a alguien en la calle.", "🏨", [E("qué buscás", "не могу́ найти́ гости́ницу|ищу́ гости́ницу|где гости́ница|~гости́ница")], "Извини́те, я не могу́ найти́ гости́ницу."],
    ["Tu teléfono no anda. Contalo en la recepción.", "📱", [E("el teléfono", "телефо́н"), E("que no funciona", "не рабо́тает")], "Телефо́н не рабо́тает."],
    ["Querés tomar un taxi, pero no tenés plata. Contáselo a un amigo.", "💸", [E("que no tenés plata", "нет де́нег")], "У меня́ нет де́нег."],
    ["Perdiste el tren. Preguntá en la boletería cuándo sale el próximo.", "🚆", [E("cuándo", "когда́"), E("el próximo", "сле́дующий|по́езд")], "Когда́ сле́дующий по́езд?"],
    ["En la habitación del hotel algo no funciona. Avisá en la recepción.", "🔧", [E("que hay un problema", "не рабо́тает|пробле́ма")], "Здесь что́-то не рабо́тает."],
    ["No sabés qué hacer. Preguntale a la persona de la boletería.", "🤔", [E("qué hacer", "что мне де́лать|что де́лать")], "Что мне де́лать?"],
    ["Buscás la estación de subte y no la encontrás.", "🚇", [E("qué buscás", "не могу́ найти́ ста́нцию|ищу́ ста́нцию|ищу́ метро́|где ста́нция|где метро́|~метро́|~ста́нция")], "Извини́те, я не могу́ найти́ ста́нцию метро́."],
    ["Llegás a la recepción. Decí que tenés un problema.", "⚠️", [E("que tenés un problema", "пробле́ма")], "У меня́ пробле́ма."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s6-" + j, "situacion", 6, { pide, escena: esc, nec, modelo, grupo: "S6-" + j }));

  /* ── Módulo 7: mensajes ── */
  [
    ["Escribile a un amigo: hoy no podés; proponé mañana.", [E("que no podés", "не могу́"), E("otro día", "за́втра")], "Приве́т! Извини́, я сего́дня не могу́. Дава́й за́втра?"],
    ["Escribile a una amiga para invitarla al cine.", [E("la invitación", "хо́чешь|дава́й|пойдём"), E("al cine", "в кино́|кино́")], "Приве́т! Хо́чешь пойти́ в кино́?"],
    ["Avisale a un amigo que vas a llegar diez minutos tarde.", [E("que llegás tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́, я опозда́ю на де́сять мину́т."],
    ["Confirmale a una amiga el encuentro de mañana a las siete.", [E("que está bien", U11_OK), E("a las siete", "в семь|в 7")], "Хорошо́, за́втра в семь. Договори́лись!"],
    ["Proponele a un amigo encontrarse a las ocho en el café.", [E("a las ocho", "в во́семь|в 8"), E("en el café", "в кафе́")], "Дава́й встре́тимся в во́семь в кафе́?"],
    ["Cancelá el encuentro del sábado y proponé el domingo.", [E("que no podés", "не могу́"), E("el domingo", "в воскресе́нье|воскресе́нье")], "Извини́, в суббо́ту я не могу́. Дава́й в воскресе́нье?"]
  ].forEach(([pide, nec, modelo], j) => situ("ms-" + j, "mensaje", 7, { pide, escena: "💬", nec, modelo, grupo: "MS-" + j, dif: 3 }));

  /* ── Módulo 8: opiniones ── */
  U11_ADJ.forEach(([sus, adj, es], j) => {
    const s = D.sust(sus), a = D.adj(adj); if (!s || !a) return;
    const g = s.g === "f" ? "f" : s.g === "n" || s.indecl ? "n" : "m", ok = a[g], fr = u11Cap(s.nom) + " " + ok + ".";
    out.push({ id: "U11-cc-" + j, tipo: "concordancia", forma: "elegir", dificultad: 1, modulo: 8, grupo: "CC-" + j, items: [], pide: "Completá: «" + es + "»", grande: u11Cap(s.nom) + " _____.",
      opciones: [a.m, a.f, a.n], correcta: ok, oir: fr, explicacion: "**" + fr + "**: " + s.nom + " es " + { m: "masculina", f: "femenina", n: "neutra" }[g] + "." });
  });
  const OPI = "по-мо́ему|ду́маю|счита́ю|нра́вится|люблю́";
  [
    ["Un amigo te pregunta qué te parece Moscú. Decí que te gusta y que es linda.", "🏙️", [E("que te gusta", "нра́вится|люблю́"), E("que es linda", "краси́вая|краси́во")], "Мне о́чень нра́вится Москва́. Она́ краси́вая."],
    ["Te ofrecen café, pero preferís té. Decilo.", "🍵", [E("que preferís", "предпочита́ю|хочу́|люблю́|нра́вится"), E("el té", "чай")], "Спаси́бо, я предпочита́ю чай."],
    ["Dá tu opinión sobre el subte: es cómodo.", "🚇", [E("que es cómodo", "удо́бное|удо́бно")], "По-мо́ему, метро́ удо́бное."],
    ["Decí que no te gusta la película porque es aburrida.", "🎬", [E("que no te gusta", "не нра́вится|не люблю́"), E("por qué", "потому́ что"), E("que es aburrida", "ску́чный|ску́чно")], "Мне не нра́вится э́тот фильм, потому́ что он ску́чный."],
    ["Decí que, para vos, el trabajo es importante.", "💼", [E("tu opinión", OPI), E("que es importante", "ва́жная|ва́жно")], "Я счита́ю, что рабо́та ва́жная."],
    ["Decí que te gusta el restaurante porque la comida es rica.", "🍽️", [E("que te gusta", "нра́вится|люблю́"), E("por qué", "потому́ что"), E("que es rica", "вку́сная|вку́сно")], "Мне нра́вится э́тот рестора́н, потому́ что еда́ вку́сная."],
    ["Te preguntan si preferís café o té. Contestá.", "☕", [E("qué preferís", "предпочита́ю|люблю́|хочу́|нра́вится"), E("café o té", "ко́фе|чай")], "Я предпочита́ю ко́фе."],
    ["Opiná sobre Barcelona.", "🌇", [E("tu opinión", OPI + "|краси́вая|интере́сная")], "По-мо́ему, Барсело́на о́чень краси́вая."],
    ["Decí que creés que el ruso es interesante.", "📚", [E("tu opinión", "ду́маю|счита́ю|по-мо́ему"), E("que es interesante", "интере́сный|интере́сно")], "Я ду́маю, что ру́сский язы́к интере́сный."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s8-" + j, "situacion", 8, { pide, escena: esc, nec, modelo, grupo: "S8-" + j }));

  /* ── Módulo 9: socializar ── */
  const P = u11Conversaciones.paises, Cd = u11Conversaciones.ciudades;
  const LUGAR = Cd.concat(P).map(p => "в " + p.prep + "|" + p.prep).join("|");
  [
    ["Чем ты занима́ешься?", "Contestá a qué te dedicás.", [E("qué hacés", "рабо́таю|учу́сь|студе́нт|студе́нтка|не рабо́таю")], "Я рабо́таю архите́ктором."],
    ["Где ты рабо́таешь?", "Contestá dónde trabajás.", [E("dónde trabajás", "рабо́таю|не рабо́таю|учу́сь")], "Я рабо́таю в ба́нке."],
    ["Отку́да ты?", "Contestá de dónde sos.", [E("de dónde", "из"), E("el país", P.map(p => p.gen).join("|"))], "Я из Аргенти́ны."],
    ["Где ты живёшь?", "Contestá dónde vivís.", [E("dónde vivís", "живу́"), E("la ciudad o el país", LUGAR)], "Я живу́ в Барсело́не."],
    ["Что ты лю́бишь де́лать?", "Contestá qué te gusta hacer.", [E("qué te gusta", "люблю́|нра́вится")], "Я люблю́ чита́ть и гуля́ть."],
    ["Что ты де́лал на выходны́х?", "Contá qué hiciste el fin de semana.", [E("algo en pasado", "", D.rxPasado, "Se entiende, pero la pregunta es qué hiciste: hay que usar el pasado (гуля́л, смотре́л…).")], "Я гуля́л в па́рке и смотре́л фильм."],
    ["Каки́е у тебя́ пла́ны?", "Contá un plan.", [E("un plan", "бу́ду|пойду́|пое́ду|хочу́|плани́рую|собира́юсь", null, "Se entiende, pero la pregunta es por tus planes: hay que usar el futuro (бу́ду + infinitivo, пойду́, пое́ду) o хочу́ / плани́рую…")], "За́втра я бу́ду рабо́тать, а ве́чером пойду́ в кино́."],
    ["Тебе́ нра́вится Барсело́на?", "Contestá y dá una razón.", [E("tu respuesta", "да|нет|нра́вится|о́чень"), E("una razón", "потому́ что")], "Да, о́чень нра́вится, потому́ что э́то краси́вый го́род."],
    ["Я из Москвы́. А ты?", "Contestá de dónde sos y devolvé la pregunta: dónde vive.", [E("de dónde sos", "из"), E("la pregunta", "где ты живёшь|а ты|где живёшь")], "Я из Аргенти́ны. А где ты живёшь?"]
  ].forEach(([q, tarea, nec, modelo], j) => situ("s9-" + j, "situacion", 9, { pide: tarea, contexto: [{ p: "Ма́ша", ru: q }], audio: q, audioManual: true, nec, modelo, grupo: "S9-" + j, dif: 3 }));
  [[["Чем ты занима́ешься?", "Я учу́сь."], ["Отку́да ты?", "Я из Испа́нии."], ["Где ты живёшь?", "Я живу́ в Мадри́де."], ["Каки́е у тебя́ пла́ны?", "За́втра я пое́ду в Москву́."]],
   [["Что ты лю́бишь де́лать?", "Я люблю́ гуля́ть."], ["Где ты рабо́таешь?", "Я рабо́таю в ба́нке."], ["Тебе́ нра́вится Барсело́на?", "Да, о́чень!"], ["Что ты де́лал на выходны́х?", "Я смотре́л фильм."]]]
    .forEach((pares, j) => out.push({ id: "U11-em-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 9, grupo: "EM-" + j, items: [], pide: "Uní cada pregunta con su respuesta.", pares, explicacion: pares.map(p => p.join(" — ")).join(" · ") }));

  /* ── Diálogos por turnos y «completar la conversación» ── */
  const dialogo = (T, id, modulo, tipo) => {
    out.push({ id: "U11-dl-" + id, tipo, forma: "turnos", dificultad: 3, modulo, grupo: "DL-" + id, items: [], pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Así podía quedar: " + T.pasos.map(p => p.sit.modelos[0]).join(" / ") });
    T.pasos.forEach((st, k) => {
      const ok = st.sit.modelos[0];
      const otras = T.pasos.map(x => x.sit.modelos[0]).filter(x => x !== ok);
      if (otras.length < 2) return;
      const ctx = [];
      if (k > 0) ctx.push({ p: "Вы", ru: T.pasos[k - 1].sit.modelos[0] });
      ctx.push({ p: st.quien || T.quien, ru: st.bot });
      out.push({ id: "U11-cp-" + id + "-" + k, tipo: "completar", forma: "elegir", dificultad: 2, modulo, grupo: "CP-" + id + "-" + k, items: [], contexto: ctx, quien: "Вы",
        pide: "Completá la conversación: " + st.tarea.charAt(0).toLowerCase() + st.tarea.slice(1), opciones: baraja([ok].concat(baraja(otras, k).slice(0, 2)), k), correcta: ok, oir: ok,
        explicacion: "**" + ok + "**" });
    });
  };
  dialogo(C.tienda, "tienda", 2, "dialogo");
  C.cafe.forEach((T, j) => dialogo(T, "cafe" + j, 3, "dialogo"));
  C.estacion.forEach((T, j) => dialogo(T, "est" + j, 4, "dialogo"));
  C.chats.forEach((T, j) => dialogo(T, "chat" + j, 7, "chat"));
  C.completas.forEach((T, j) => dialogo(T, "comp" + j, 10, T.chat ? "chat" : "dialogo"));

  /* ── Módulo 11: reaccionar ── */
  [
    ["Llegaste tarde a la clase. ¿Qué le decís a la profesora?", "⏰", [E("perdón", "извини́те|извини́|прости́те"), E("que llegaste tarde", "опозда́л|опозда́ла")], "Извини́те, я опозда́л."],
    ["El taxista te dijo algo y no lo entendiste.", "🚕", [E("que no entendiste", "не понима́ю|повтори́те|ещё раз")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста."],
    ["Compraste una camisa y te queda chica. Pedí otro talle.", "👕", [E("otro talle", "друго́й разме́р")], "Извини́те, мо́жно друго́й разме́р?"],
    ["Estás en Moscú. Tenés que llegar a la estación de tren y no sabés dónde está. Preguntale a alguien.", "🚉", [E("la pregunta", "где|как дое́хать|ищу́|не могу́ найти́"), E("la estación", "вокза́л|до вокза́ла|~ста́нция")], "Извини́те, где вокза́л?"],
    ["En el restaurante, querés una recomendación.", "🍽️", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?"],
    ["Querés invitar a una amiga a tomar un café.", "☕", [E("la invitación", "хо́чешь|дава́й|пойдём"), E("el café", "кафе́|ко́фе")], "Хо́чешь пойти́ в кафе́?"],
    ["Tenés que cancelar el plan de hoy con un amigo.", "📵", [E("que no podés", "не могу́")], "Извини́, я сего́дня не могу́."],
    ["Querés saber cuánto cuesta un vestido.", "👗", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el vestido", "пла́тье")], "Ско́лько сто́ит пла́тье?"],
    ["Pediste una ensalada y te trajeron sopa. Avisale al mozo.", "🥗", [E("lo que pediste", "сала́т")], "Извини́те, я хоте́л сала́т."],
    ["Alguien te habla en ruso muy rápido.", "🗯️", [E("que no entendés", "не понима́ю|повтори́те|ещё раз")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста."],
    ["Te preguntan si hablás ruso. Contestá.", "🇷🇺", [E("tu respuesta", "говорю́|немно́го|да|нет")], "Да, немно́го говорю́ по-ру́сски."],
    ["Perdiste el tren. Explicalo en la boletería y preguntá qué hacer.", "🚆", [E("qué pasó", "опозда́л|опозда́ла"), E("qué hacer", "что мне де́лать|что де́лать|когда́|сле́дующий")], "Я опозда́л на по́езд. Что мне де́лать?"],
    ["No encontrás tu hotel y le preguntás a un policía.", "👮", [E("qué buscás", "не могу́ найти́ гости́ницу|ищу́ гости́ницу|где гости́ница|~гости́ница")], "Извини́те, где гости́ница?"],
    ["Una vendedora te pregunta «Ка́ртой и́ли нали́чными?».", "💳", [E("cómo pagás", "ка́ртой|нали́чными")], "Ка́ртой, пожа́луйста."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s11-" + j, "situacion", 11, { pide, escena: esc, nec, modelo, grupo: "S11-" + j, dif: 3 }));
  U11_NATURAL.forEach(([sit, ok, otras], j) => out.push({ id: "U11-nt-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 11, grupo: "NT-" + j, items: [],
    pide: sit + " ¿Cuál es la forma más natural?", opciones: baraja([ok].concat(otras), j), correcta: ok, oir: ok,
    explicacion: "**" + ok + "**: " + (/Хо́чешь|Извини́,|Извини́ /.test(ok) ? "con un amigo, ты." : "con un desconocido, вы, извини́те o пожа́луйста.") }));
  U11_COMPRENSION.forEach((T, j) => { const todo = T.lineas.join(" ");
    T.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U11-co-" + T.id + "-" + k, tipo: "comprension", forma: "elegir", dificultad: 2, modulo: 11, grupo: "CO-" + T.id + "-" + k, items: [],
      pide: "Escuchá la conversación. " + q, audio: todo, texto: T.lineas, textoOculto: true, opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: "**" + ok + "**. " + todo })); });

  /* ── Módulo 12: el día en Rusia (proyecto, parte 1) ── */
  const HORAS = [7, 8, 9, 10, 11, 12].map(n => "в " + U11_NUM[n] + "|в " + n).join("|");
  [
    ["1. Transporte", "Llegaste en tren a San Petersburgo y querés tomar el subte. Comprá un boleto.", "🎫", [E("el boleto", "биле́т")], "Мне ну́жен биле́т, пожа́луйста."],
    ["2. Llegada", "Salís del subte. Preguntá cómo llegar a tu hotel.", "🏨", [E("la pregunta", "как дое́хать до гости́ницы|где гости́ница|ищу́ гости́ницу|не могу́ найти́ гости́ницу|~гости́ница")], "Извини́те, где гости́ница?"],
    ["3. Tienda", "En un kiosco: pedí un mapa de la ciudad y preguntá el precio.", "🗺️", [E("el mapa", "ка́рту|ка́рта"), E("el precio", "ско́лько")], "У вас есть ка́рта? Ско́лько она́ сто́ит?"],
    ["4. Restaurante", "Al mediodía: pedí una sopa y pescado.", "🍲", [E("la sopa", u11Pedido("суп").formas), E("el pescado", u11Pedido("ры́ба").formas)], "Я бу́ду суп и ры́бу."],
    ["5. Social", "En la mesa de al lado alguien te pregunta «Отку́да вы?». Contestá y preguntale lo mismo.", "🙂", [E("de dónde sos", "из"), E("la pregunta", "а вы|отку́да вы")], "Я из Аргенти́ны. А вы?"],
    ["6. Plan", "Tu nuevo amigo te invita a salir a la noche. Aceptá y proponé una hora.", "🌙", [E("que sí", U11_SI), E("una hora", HORAS)], "Да, коне́чно! Дава́й в во́семь?"],
    ["7. Problema", "A la noche, en el hotel, el teléfono no funciona. Avisá en la recepción.", "📱", [E("que no funciona", "не рабо́тает|пробле́ма")], "Извини́те, телефо́н не рабо́тает."]
  ].forEach(([t, pide, esc, nec, modelo], j) => situ("dia-" + j, "dia", 12, { pide: "**" + t + "**. " + pide, escena: esc, nec, modelo, grupo: "DIA-" + j }));

  /* ── Traducción en contexto y dictado ── */
  U11_TRAD.forEach(([m, ctx, es, ru], j) => trad(j, m, ctx, es, ru));

  /* ── Vocabulario nuevo ── */
  const dicEs = { "цена́": ["precio", 2], "ка́рта": ["tarjeta (para pagar)", 2], "нали́чные": ["efectivo", 2], "разме́р": ["talle", 2], "цвет": ["color", 2], "друго́й": ["otro", 2],
    "купи́ть": ["comprar", 2], "плати́ть": ["pagar", 2], "сто́ить": ["costar", 2], "рубль": ["rublo", 2], "сто": ["cien", 2], "ты́сяча": ["mil", 2], "продаве́ц": ["vendedor", 2],
    "руба́шка": ["camisa", 2], "еда́": ["comida", 3], "блю́до": ["plato (de comida)", 3], "зака́з": ["pedido", 3], "счёт": ["cuenta", 3], "заказа́ть": ["pedir (en un restaurante)", 3],
    "рекомендова́ть": ["recomendar", 3], "вку́сный": ["rico, sabroso", 3], "холо́дный": ["frío", 3], "такси́": ["taxi", 4], "остано́вка": ["parada", 4], "вы́ход": ["salida", 4],
    "вход": ["entrada", 4], "пря́мо": ["derecho (hacia adelante)", 5], "напра́во": ["a la derecha", 5], "нале́во": ["a la izquierda", 5], "перекрёсток": ["cruce", 5],
    "напро́тив": ["enfrente", 5], "ме́жду": ["entre", 5], "найти́": ["encontrar", 6], "пробле́ма": ["problema", 6], "опозда́ть": ["llegar tarde", 6], "мину́та": ["minuto", 7],
    "предпочита́ть": ["preferir", 8], "счита́ть": ["considerar", 8], "по-мо́ему": ["en mi opinión", 8], "ва́жный": ["importante", 8] };
  Object.keys(dicEs).forEach(ac => { const e = D.lex(ac); if (!e) return;
    out.push({ id: "U11-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: dicEs[ac][1], grupo: e.id, items: ["lex:" + e.id], oir: e.ru, pide: "Escribí en ruso: «" + dicEs[ac][0] + "»",
      audio: e.ru, audioManual: true, pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.replace(/-/g, "").length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + dicEs[ac][0] }); });
  out.forEach(e => { if (e.explicacion) e.explicacion = u11Palabras(e.explicacion); if (e.pide) e.pide = u11Palabras(e.pide); if (e.nota) e.nota = u11Palabras(e.nota); });
  return out;
}

/* Proyecto «Мой день в Росси́и»: el relato (parte 2) */
(function () {
  const m = UNIDAD_11.modulos.find(x => x.id === "u11m12");
  const pal = t => t.match(/[А-Яа-яЁё\u0301-]+/g) || [];
  const K = w => azFormaClave(w);
  const info = w => azIndiceFormas().get(K(w)) || [];
  const frases = t => t.split(/(?<=[.!?])\s*|\n+/)   /* también el renglón nuevo (06/10/2026) */
    .map(x => x.trim()).filter(x => pal(x).length >= 1);
  const etiq = w => info(w).map(x => x[2] || "");
  const CASOS = { gen: /genitivo/, dat: /dativo/, acc: /acusativo/, ins: /instrumental/, prep: /prepos/ };
  /* Un caso cuenta si la palabra solo puede ser ese caso (sin ambigüedad) */
  const casos = t => { const r = new Set(["nom"]); pal(t).forEach(w => { const e = etiq(w).filter(x => /singular|plural|masculino|femenino|neutro|^[a-z]+$/.test(x) || Object.values(CASOS).some(rx => rx.test(x)));
    Object.keys(CASOS).forEach(k => { if (e.length && e.every(x => CASOS[k].test(x))) r.add(k); }); });
    ["мне", "тебе", "ему", "ей", "нам", "вам", "им"].forEach(p => { if (pal(t).map(K).indexOf(p) >= 0) r.add("dat"); });
    if (/(^|\s)у (меня|тебя|него|нее|нас|вас|них)/i.test(t.replace(/\u0301/g, "").replace(/ё/g, "е"))) r.add("gen");
    return r; };
  const pasado = w => info(w).some(x => { const v = verboById(x[0]); return v && v.pasado && Object.values(v.pasado).some(f => K(f) === K(w)); });
  const presente = w => info(w).some(x => { const v = verboById(x[0]); return v && v.presente && v.presente.some(f => K(f) === K(w)); });
  const FUT = /^(буду|будешь|будет|будем|будете|будут|пойду|поеду|пойдем|поедем)$/;
  const MOV = /^(иду|идешь|идет|идем|идете|идут|еду|едешь|едет|едем|едете|едут|шел|шла|шли|ехал|ехала|ехали|пойду|поеду|ходил|ходила|ездил|ездила|пошел|пошла|поехал|поехала|приехал|приехала)$/;
  const n = t => t.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();
  m.requisitos = [
    { txt: "Entre 20 y 25 frases", fn: t => { const k = frases(t).length; return k >= 20 && k <= 25; } },
    { txt: "Pasado, presente y futuro", fn: t => { const w = pal(t); return w.some(pasado) && w.some(presente) && w.some(x => FUT.test(K(x))); } },
    { txt: "Al menos 5 casos distintos", fn: t => casos(t).size >= 5 },
    { txt: "Una pregunta (?)", fn: t => /\?/.test(t) },
    { txt: "Una negación (не, нет)", fn: t => /(^|\s)(не|нет)(\s|[.,!?])/.test(n(t)) },
    { txt: "Una opinión (по-мо́ему, ду́маю, нра́вится…)", fn: t => /(по-моему|думаю|считаю|нравится|нравился|нравилась|люблю|предпочитаю)/.test(n(t)) },
    { txt: "Un pedido (мо́жно, да́йте, пожа́луйста…)", fn: t => /(можно|дайте|принесите|помогите|повторите|пожалуйста)/.test(n(t)) },
    { txt: "Un lugar (в / на + dónde)", fn: t => pal(t).some((w, i, a) => /^(в|во|на)$/.test(K(w)) && a[i + 1] && etiq(a[i + 1]).some(x => /prepos/.test(x))) },
    { txt: "Un movimiento (иду́, е́ду, пошёл, пое́хал…)", fn: t => pal(t).some(w => MOV.test(K(w))) },
    { txt: "Una charla con otra persona (говори́л, спра́шивал, с + alguien…)", fn: t => /(сказал|сказала|спросил|спросила|спрашивал|спрашивала|говорил|говорила|ответил|ответила|отвечал|отвечала|разговаривал|разговаривала)/.test(n(t)) || /(^|\s)с [а-я]+(ом|ой|ем|ей)(\s|[.,!?])/.test(n(t)) }
  ];
  m.consejos = [{ fn: t => {
    const out = [];
    frases(t).forEach(f => { const w = pal(f), k = w.map(K);
      k.forEach((x, i) => { const sig = w[i + 1]; if (!sig) return;
        info(sig).forEach(z => { const cz = casosById(z[0]); if (!cz || !cz.sg) return; const nom = K(cz.sg[0]) === K(sig);
          if (/^(хочу|буду|ищу|купить|заказать|найти)$/.test(x) && nom && K(cz.sg[3]) !== K(sig) && z[2] && /nominativo/.test(z[2])) out.push("Lo que pedís o buscás va en acusativo: **" + w[i] + " " + cz.sg[3] + "**.");
          if (x === "нет" && nom && K(cz.sg[1]) !== K(sig)) out.push("Después de нет va el genitivo: **нет " + cz.sg[1] + "**.");
          if (x === "с" && nom && K(cz.sg[4]) !== K(sig)) out.push("Con с («con alguien») va el instrumental: **с " + cz.sg[4] + "**.");
        }); }); });
    return [...new Set(out)];
  } }];
})();

window.UNIDAD_11 = UNIDAD_11;
window.unidad11Modulo = unidad11Modulo;
window.ejerciciosUnidad11 = ejerciciosUnidad11;
window.u11Datos = u11Datos;
window.u11Conversaciones = u11Conversaciones;
window.U11_MEZCLA = U11_MEZCLA;
