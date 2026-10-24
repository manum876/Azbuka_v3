/* ============================================================
   DATA-UNIDAD-11.JS — Unidad 11: Comunicación cotidiana
   ------------------------------------------------------------
   Versión 12/10/2026 (profundización; la primera, del 05/10/2026). Contenido,
   vocabulario y banco de ejercicios.
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
   Profundización (12/10/2026, aprobada por Manu):
   · Teoría con ids de regla (u11-…), ejemplos explicados, errores
     típicos, chequeos y «Más a fondo»: ну́жен / нужна́ / ну́жно,
     Мо́жно…?, спроси́ть / попроси́ть / заказа́ть, рубль / рубля́ / рубле́й,
     сто́ит / сто́ят, ка́ртой, el registro en el restaurante (Я бу́ду…),
     Как дое́хать до…, сесть на / вы́йти, indicaciones, иска́ть → найти́,
     у меня́ укра́ли…, опозда́ть на…, Дава́й встре́тимся, присла́ть,
     нра́вятся, opinar.
   · Aspecto: хочу́ / мо́жно / ну́жно + el de resultado para una vez
     (U11_PARES, tabla del módulo 2).
   · Vocabulario nuevo: 81 palabras del léxico, en grupos por módulo
     (U11_GRUPOS), con su traducción corta (U11_GLOSA).
   · Banco: unos 1.000 ejercicios. Los tipos que practican la regla
     (porque, natural, oido, par, descubrir, cadena, diagnostico,
     desarmar, pareja, aspecto) son ~20 % de la sesión: las situaciones
     siguen pesando más. Todos llevan `regla`; los viejos que practican
     una regla la toman de REGLA_ID. Los pedidos modelo del café pasan
     de «Я хочу́…» a «Я бу́ду…» (el registro del módulo 3).
   ============================================================ */

/* Palabras que se ven por primera vez en cada módulo (verificador) */
const U11_VISTAS = {
  1: "ну́жный помо́чь сказа́ть ка́рта такси́ что́-нибудь зака́зывать о́чередь спроси́ть проси́ть попроси́ть а́дрес но́мер докуме́нт поня́ть заказа́ть",
  2: "цена́ нали́чные разме́р цвет друго́й купи́ть плати́ть сто́ить рубль сто ты́сяча продаве́ц руба́шка и́ли вот поку́пка сда́ча чек ски́дка паке́т банкома́т заплати́ть продава́ть прода́ть меня́ть поменя́ть возвраща́ть верну́ть джи́нсы футбо́лка сви́тер ю́бка ту́фля боти́нок сапо́г шарф костю́м о́бувь",
  3: "еда́ блю́до зака́з счёт зака́зывать рекомендова́ть принести́ дать что́-нибудь ещё коне́чно вку́сный холо́дный напи́ток десе́рт моро́женое фрукт яйцо́ карто́шка ку́рица горя́чий сла́дкий о́стрый солёный вкус сто́лик лёд приноси́ть порекомендова́ть",
  4: "остано́вка вы́ход вход касси́р дое́хать отправля́ться такси́ст пассажи́р сади́ться сесть выходи́ть проходи́ть пройти́",
  5: "пря́мо напра́во нале́во перекрёсток напро́тив ме́жду находи́ться поверну́ть тури́ст переходи́ть перейти́ перехо́д поворо́т",
  6: "найти́ пробле́ма что́-то опозда́ть поли́ция красть укра́сть лома́ть слома́ть бо́льно заря́дка паро́ль потеря́ться",
  7: "дава́ть договори́ться встре́титься мину́та ничего́ сообще́ние звоно́к присла́ть отправля́ть отпра́вить приглаше́ние предлага́ть предложи́ть соглаша́ться согласи́ться отка́зываться отказа́ться",
  8: "предпочита́ть счита́ть по-мо́ему ва́жный ва́жно удо́бно ску́чно мне́ние пра́вда", 9: "занима́ться увлече́ние", 10: "начина́ться"
};
/* Vocabulario nuevo (12/10/2026, aprobado por Manu): un grupo por módulo, con su lista en la página */
const U11_GRUPOS = [
  [1, "Preguntar y pedir", "спроси́ть проси́ть попроси́ть поня́ть о́чередь а́дрес но́мер докуме́нт"],
  [2, "Comprar y pagar", "поку́пка сда́ча чек ски́дка паке́т банкома́т заплати́ть"],
  [2, "Vender, cambiar, devolver", "продава́ть прода́ть меня́ть поменя́ть возвраща́ть верну́ть"],
  [2, "Ropa", "джи́нсы футбо́лка сви́тер ю́бка ту́фля боти́нок сапо́г шарф костю́м о́бувь"],
  [3, "En la carta", "напи́ток десе́рт моро́женое фрукт яйцо́ карто́шка ку́рица лёд"],
  [3, "Sabores y la mesa", "горя́чий сла́дкий о́стрый солёный вкус сто́лик приноси́ть порекомендова́ть"],
  [4, "Subir y bajar", "пассажи́р сади́ться сесть выходи́ть проходи́ть пройти́"],
  [5, "Cruzar", "переходи́ть перейти́ перехо́д поворо́т"],
  [6, "Problemas", "поли́ция красть укра́сть лома́ть слома́ть бо́льно заря́дка паро́ль потеря́ться"],
  [7, "Mensajes e invitaciones", "сообще́ние звоно́к присла́ть отправля́ть отпра́вить приглаше́ние предлага́ть предложи́ть соглаша́ться согласи́ться отка́зываться отказа́ться"],
  [8, "Opinar", "мне́ние пра́вда"],
  [9, "Gustos", "увлече́ние"]
];
/* Traducción corta de las palabras nuevas para los ejercicios de vocabulario */
const U11_GLOSA = {
  "о́чередь": "cola, fila", "спроси́ть": "preguntar (una vez)", "проси́ть": "pedir (un favor)", "попроси́ть": "pedir (un favor, una vez)", "а́дрес": "dirección",
  "но́мер": "número; habitación de hotel", "докуме́нт": "documento", "поня́ть": "entender (una vez)",
  "поку́пка": "compra", "сда́ча": "cambio", "чек": "ticket", "ски́дка": "descuento", "паке́т": "bolsa", "банкома́т": "cajero automático", "заплати́ть": "pagar (una vez)",
  "продава́ть": "vender", "прода́ть": "vender (una vez)", "меня́ть": "cambiar", "поменя́ть": "cambiar (una vez)", "возвраща́ть": "devolver", "верну́ть": "devolver (una vez)",
  "джи́нсы": "vaqueros", "футбо́лка": "camiseta", "сви́тер": "jersey", "ю́бка": "falda", "ту́фля": "zapato", "боти́нок": "botín", "сапо́г": "bota", "шарф": "bufanda",
  "костю́м": "traje", "о́бувь": "calzado",
  "напи́ток": "bebida", "десе́рт": "postre", "моро́женое": "helado", "фрукт": "fruta", "яйцо́": "huevo", "карто́шка": "patata", "ку́рица": "pollo, gallina", "лёд": "hielo",
  "горя́чий": "caliente", "сла́дкий": "dulce", "о́стрый": "picante", "солёный": "salado", "вкус": "sabor, gusto", "сто́лик": "mesa (de restaurante)",
  "приноси́ть": "traer", "порекомендова́ть": "recomendar (una vez)",
  "пассажи́р": "pasajero", "сади́ться": "subir, sentarse", "сесть": "subir, sentarse (una vez)", "выходи́ть": "bajar, salir", "проходи́ть": "pasar", "пройти́": "pasar (una vez)",
  "переходи́ть": "cruzar", "перейти́": "cruzar (una vez)", "перехо́д": "cruce peatonal", "поворо́т": "giro, curva",
  "поли́ция": "policía", "красть": "robar", "укра́сть": "robar (una vez)", "лома́ть": "romper", "слома́ть": "romper (una vez)", "бо́льно": "duele",
  "заря́дка": "batería, carga", "паро́ль": "contraseña", "потеря́ться": "perderse",
  "сообще́ние": "mensaje", "звоно́к": "llamada", "присла́ть": "mandar (a mí)", "отправля́ть": "enviar", "отпра́вить": "enviar (una vez)", "приглаше́ние": "invitación",
  "предлага́ть": "proponer, ofrecer", "предложи́ть": "proponer (una vez)", "соглаша́ться": "aceptar", "согласи́ться": "aceptar (una vez)",
  "отка́зываться": "rechazar", "отказа́ться": "rechazar (una vez)", "мне́ние": "opinión", "пра́вда": "verdad", "увлече́ние": "afición, pasión"
};
/* Parejas de esta unidad: [proceso, resultado, español] — la regla «una vez: хочу́ купи́ть» */
const U11_PARES = [["плати́ть", "заплати́ть", "pagar"], ["покупа́ть", "купи́ть", "comprar"], ["меня́ть", "поменя́ть", "cambiar"], ["возвраща́ть", "верну́ть", "devolver"],
  ["продава́ть", "прода́ть", "vender"], ["зака́зывать", "заказа́ть", "pedir (comida)"], ["спра́шивать", "спроси́ть", "preguntar"], ["проси́ть", "попроси́ть", "pedir (un favor)"],
  ["понима́ть", "поня́ть", "entender"], ["иска́ть", "найти́", "buscar → encontrar"], ["приноси́ть", "принести́", "traer"], ["переходи́ть", "перейти́", "cruzar"]];

/* Lo que se pide en el café: [ruso, español, emoji]. Las formas salen de Casos. */
const U11_COMIDA = [["суп", "una sopa", "🍲"], ["сала́т", "una ensalada", "🥗"], ["пи́цца", "una pizza", "🍕"], ["ры́ба", "pescado", "🐟"], ["мя́со", "carne", "🥩"],
  ["ко́фе", "un café", "☕"], ["чай", "un té", "🍵"], ["вода́", "agua", "💧"], ["сок", "un zumo", "🧃"], ["хлеб", "pan", "🍞"]];
/* Bebidas y cosas que se miden: también valen en genitivo («Да́йте воды́») */
const U11_PARTITIVO = ["вода́", "чай", "сок", "хлеб", "молоко́"];
/* Lo que se compra: [ruso, español] */
const U11_COMPRAS = [["руба́шка", "una camisa"], ["ку́ртка", "una chaqueta"], ["су́мка", "un bolso"], ["пла́тье", "un vestido"], ["кни́га", "un libro"], ["слова́рь", "un diccionario"]];
const U11_NUM = ["", "оди́н", "два", "три", "четы́ре", "пять", "шесть", "семь", "во́семь", "де́вять", "де́сять", "оди́ннадцать", "двена́дцать"];
/* Destinos del plano: [emoji, ruso, español «al …»] */
const U11_LUGARES = [["🏦", "банк", "el banco"], ["🏨", "гости́ница", "el hotel"], ["☕", "кафе́", "el café"], ["🏪", "магази́н", "la tienda"], ["🚇", "метро́", "el metro"],
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
  tiempo: "3 a 4 semanas con práctica diaria (unas 35–45 horas)",
  modulos: [
    { id: "u11m1", n: 1, tipo: "leccion", nPractica: 12, titulo: "Sobrevivir en ruso", resumen: "Мне ну́жен…, Мо́жно…?, Повтори́те, пожа́луйста.",
      intro: "En esta unidad cambia el objetivo: no es armar la frase perfecta, sino que te entiendan. Primero, lo que te saca de cualquier apuro: necesitar, pedir, preguntar y avisar que no entendiste.",
      secciones: [
        { titulo: "Cómo se corrige en esta unidad", texto: "Muchos ejercicios ya no tienen una sola respuesta: te cuentan una situación y escribes lo que dirías. La app se fija en que digas lo necesario.\n✓ **Bien**: se entiende y está correcto.\n💬 **Se entiende**: se entiende, pero hay un detalle (un caso, una terminación). Vale igual, y te muestra cómo queda perfecto.\n✗ **No se entiende**: falta algo importante." },
        { id: "u11-nuzhen", titulo: "Necesito: мне ну́жен, нужна́, ну́жно",
          antes: { pide: "Мне ну́жен биле́т. Мне нужна́ ка́рта. ¿Y «necesito un taxi» (такси́ es neutro)?", opciones: ["Мне ну́жно такси́.", "Мне ну́жен такси́."], ok: "Мне ну́жно такси́.", por: "Cambia con la cosa: masculino ну́жен, femenino нужна́, neutro ну́жно." },
          texto: "Para «necesito» el ruso dice «me es necesario»: мне (dativo) + ну́жен + lo que necesitas. Lo que necesitas es el sujeto, como en мне нра́вится; por eso ну́жен cambia con esa cosa, como un adjetivo:\nmasculino → ну́жен · femenino → нужна́ · neutro → ну́жно · plural → нужны́\nCon un verbo, siempre ну́жно: мне ну́жно рабо́тать.",
          ejemplos: [
            { ru: "Мне {ну́жен} биле́т.", es: "Necesito un billete.", por: "биле́т es masculino: ну́жен." },
            { ru: "Мне {нужна́} ка́рта.", es: "Necesito un mapa.", por: "ка́рта es femenino: нужна́." },
            { ru: "Нам {ну́жно} такси́.", es: "Necesitamos un taxi.", por: "такси́ es neutro: ну́жно. Quien necesita, en dativo: нам." },
            { ru: "Ему́ {нужны́} де́ньги.", es: "Él necesita dinero.", por: "де́ньги siempre es plural: нужны́." },
            { ru: "Мне {ну́жно} позвони́ть.", es: "Tengo que llamar.", por: "Con un verbo, ну́жно." }],
          destacado: "мне + ну́жен / нужна́ / ну́жно / нужны́ + lo que necesitas",
          errores: [
            { mal: "Я ну́жен биле́т.", bien: "Мне ну́жен биле́т.", por: "Quien necesita va en dativo, como con нра́вится." },
            { mal: "Мне ну́жно ка́рта.", bien: "Мне нужна́ ка́рта.", por: "ка́рта es femenino: la forma copia el género de la cosa." }],
          mas: { texto: "Por eso «¿necesitas algo?» es Тебе́ что́-нибудь ну́жно? (что́-нибудь va con el neutro). Y si te preguntan Вам ну́жен биле́т? («¿necesita un billete?»), se contesta con la misma palabra: Ну́жен, спаси́бо, o Нет, не ну́жен.",
            ejemplos: [{ ru: "Вам {ну́жен} биле́т? — Нет, не ну́жен.", es: "¿Necesita un billete? — No, no lo necesito.", por: "биле́т es masculino: ну́жен." }] },
          chequeo: [{ pide: "Мне ___ ка́рта.", opciones: ["нужна́", "ну́жен", "ну́жно"], ok: "нужна́", por: "ка́рта es femenino." },
            { pide: "Ей ___ де́ньги.", opciones: ["нужны́", "нужна́"], ok: "нужны́", por: "де́ньги es plural." }] },
        { id: "u11-pedir", titulo: "Pedir con cortesía: Мо́жно…?",
          texto: "Мо́жно…? («¿se puede?») es la llave para pedir casi cualquier cosa: lo que quieres, en acusativo, o lo que quieres hacer, en infinitivo. Para preguntar si tienen algo: У вас есть…?, con la cosa en nominativo, porque es lo que hay. Y si buscas algo: Я ищу́ + acusativo.",
          ejemplos: [
            { ru: "{Мо́жно} меню́, пожа́луйста?", es: "¿Me da la carta, por favor?", por: "Мо́жно + lo que quieres." },
            { ru: "Мо́жно {позвони́ть}?", es: "¿Puedo hacer una llamada?", por: "Мо́жно + lo que quieres hacer, en infinitivo." },
            { ru: "У вас есть {вода́}?", es: "¿Tienen agua?", por: "есть = hay: lo que hay va en nominativo." },
            { ru: "Извини́те, я ищу́ {апте́ку}.", es: "Disculpe, busco una farmacia.", por: "иска́ть + acusativo: апте́ка → апте́ку." }],
          errores: [{ mal: "У вас есть во́ду?", bien: "У вас есть {вода́}?", por: "Después de есть, nominativo: es el sujeto." }],
          truco: "Con desconocidos: извини́те al principio y пожа́луйста al final. Con eso, casi cualquier frase suena bien.",
          chequeo: [{ pide: "«Busco la estación»", opciones: ["Я ищу́ ста́нцию.", "Я ищу́ ста́нция."], ok: "Я ищу́ ста́нцию.", por: "Lo que buscas, en acusativo." }] },
        { id: "u11-no-entiendo", titulo: "Cuando no entiendes",
          texto: "Я не понима́ю dice que en general no entiendes (el idioma, el tema). Para algo concreto que te acaban de decir, el ruso usa el verbo de resultado: Я не по́нял (si eres hombre) o Я не поняла́ (si eres mujer), «no lo entendí». Después, pide que lo repitan o que te lo digan de otra forma.",
          ejemplos: [
            { ru: "Извини́те, я не {по́нял}.", es: "Disculpe, no entendí. (eres hombre)", por: "поня́ть, de resultado: no lo captaste. En femenino, поняла́." },
            { ru: "{Повтори́те}, пожа́луйста.", es: "Repita, por favor.", por: "Un pedido a otra persona, tratándola de вы." },
            { ru: "{Скажи́те}, пожа́луйста, где банк?", es: "Dígame, por favor, ¿dónde está el banco?", por: "Скажи́те abre una pregunta a un desconocido." },
            { ru: "Как {сказа́ть} «tarjeta» по-ру́сски?", es: "¿Cómo se dice «tarjeta» en ruso?", por: "Как сказа́ть…? sirve para cualquier palabra que te falte." }],
          ojo: "Повтори́те, Скажи́те, Помоги́те e Извини́те son pedidos a otra persona con вы. Por ahora van como fórmulas: más adelante vas a ver cómo se forman.",
          mas: { texto: "Si en una fila (о́чередь) alguien te habla rápido, alcanza con Ещё раз, пожа́луйста («otra vez, por favor»). Y si te piden un documento, te van a decir Па́спорт, пожа́луйста o А́дрес?: con la palabra ya sabes qué buscar." },
          chequeo: [{ pide: "Una mujer te habló y no entendiste nada. Eres mujer.", opciones: ["Я не поняла́.", "Я не по́нял."], ok: "Я не поняла́.", por: "Habla una mujer: поняла́." }] },
        { id: "u11-sprosit", titulo: "Preguntar o pedir: спроси́ть, попроси́ть",
          texto: "En español «pedir» y «preguntar» se usan para muchas cosas. En ruso hay un verbo para cada una:\nспра́шивать / спроси́ть → preguntar (una información)\nпроси́ть / попроси́ть → pedirle algo a alguien\nзака́зывать / заказа́ть → pedir comida o un servicio\nCon спроси́ть y попроси́ть, la persona va en acusativo: «le pregunto a mamá» es спрошу́ ма́му.",
          ejemplos: [
            { ru: "Я {спрошу́} ма́му.", es: "Le voy a preguntar a mamá.", por: "спроси́ть + acusativo: ма́ма → ма́му." },
            { ru: "Я {попрошу́} бра́та помо́чь.", es: "Le voy a pedir a mi hermano que me ayude.", por: "попроси́ть + acusativo + lo que tiene que hacer, en infinitivo." },
            { ru: "Мы {заказа́ли} пи́ццу.", es: "Pedimos una pizza.", por: "Comida: заказа́ть." }],
          comparacion: "«Pedir» en español sirve para un favor y para la comida; en ruso son verbos distintos: попроси́ть a una persona, заказа́ть en un restaurante.",
          errores: [{ mal: "Я спрошу́ ма́ме.", bien: "Я {спрошу́} ма́му.", por: "Con спроси́ть, la persona va en acusativo, no en dativo." }],
          chequeo: [{ pide: "«Pedí una sopa» (en un restaurante)", opciones: ["Я заказа́л суп.", "Я попроси́л суп."], ok: "Я заказа́л суп.", por: "Comida: заказа́ть." }] }
      ] },
    { id: "u11m2", n: 2, tipo: "leccion", nPractica: 12, titulo: "En una tienda", resumen: "Ско́лько сто́ит? Сто рубле́й. Ка́ртой, пожа́луйста.",
      intro: "Comprar: preguntar el precio, el talle y el color, pagar, y cambiar o devolver algo.",
      secciones: [
        { id: "u11-precios", titulo: "Los precios: рубль, рубля́, рубле́й",
          texto: "рубль sigue la cuenta que ya conoces de час y мину́та: después de 1, рубль; después de 2, 3 y 4, рубля́; de 5 en adelante, рубле́й. Manda el último número: два́дцать оди́н рубль, два́дцать два рубля́, два́дцать пять рубле́й.\nсто рубле́й (100) y ты́сяча рубле́й (1000) siempre así.",
          ejemplos: [
            { ru: "Э́то {оди́н рубль}.", es: "Es un rublo.", por: "1 → рубль." },
            { ru: "Ко́фе сто́ит {три рубля́}?", es: "¿El café cuesta tres rublos?", por: "2, 3, 4 → рубля́." },
            { ru: "Сок сто́ит {пять рубле́й}.", es: "El zumo cuesta cinco rublos.", por: "5 o más → рубле́й." },
            { ru: "Руба́шка сто́ит {ты́сяча рубле́й}.", es: "La camisa cuesta mil rublos.", por: "ты́сяча рубле́й, siempre así." }],
          destacado: "1 рубль · 2–4 рубля́ · 5 o más рубле́й",
          errores: [{ mal: "Пять рубля́.", bien: "Пять {рубле́й}.", por: "De 5 en adelante, рубле́й." },
            { mal: "Два рубле́й.", bien: "Два {рубля́}.", por: "Después de 2, 3 y 4, рубля́." }],
          mas: { texto: "Es la misma cuenta de час (два часа́, пять часо́в) y мину́та (две мину́ты, пять мину́т): después de 2–4, el genitivo singular; de 5 en adelante, el genitivo plural. Por eso también ты́сяча рубле́й: ты́сяча cuenta como una cantidad grande." },
          chequeo: [{ pide: "четы́ре ___", opciones: ["рубля́", "рубле́й", "рубль"], ok: "рубля́", por: "2, 3, 4 → рубля́." },
            { pide: "два́дцать оди́н ___", opciones: ["рубль", "рубле́й"], ok: "рубль", por: "Manda el último número: оди́н → рубль." }] },
        { id: "u11-stoit", titulo: "Сто́ит o сто́ят",
          texto: "сто́ить («costar») concuerda con lo que cuesta: una cosa → сто́ит; varias, o una palabra que siempre es plural (джи́нсы, де́ньги) → сто́ят. Para preguntar: Ско́лько сто́ит…? / Ско́лько сто́ят…?",
          ejemplos: [
            { ru: "Ско́лько {сто́ит} руба́шка?", es: "¿Cuánto cuesta la camisa?", por: "Una cosa: сто́ит." },
            { ru: "Ско́лько {сто́ят} джи́нсы?", es: "¿Cuánto cuestan los vaqueros?", por: "джи́нсы siempre es plural: сто́ят." },
            { ru: "Ту́фли {сто́ят} ты́сячу рубле́й.", es: "Los zapatos cuestan mil rublos.", por: "Varias cosas: сто́ят. El precio, en acusativo: ты́сяча → ты́сячу." }],
          errores: [{ mal: "Ско́лько сто́ит джи́нсы?", bien: "Ско́лько {сто́ят} джи́нсы?", por: "джи́нсы es plural." }],
          chequeo: [{ pide: "Ско́лько ___ футбо́лка?", opciones: ["сто́ит", "сто́ят"], ok: "сто́ит", por: "Una sola cosa." }] },
        { id: "u11-como-es", titulo: "Cómo es: talle, color y otro",
          texto: "Para decir cómo es algo, el adjetivo va después, en nominativo y con el género de la cosa: Руба́шка дорога́я. Сви́тер дешёвый. Si no te va, pide otro: У вас есть друго́й разме́р? ¿Otro color? Друго́й цвет.\nPara probar algo: Мо́жно?, señalándolo, alcanza.",
          ejemplos: [
            { ru: "Ку́ртка {дорога́я}.", es: "La chaqueta es cara.", por: "ку́ртка es femenino: дорога́я." },
            { ru: "Э́тот сви́тер {дешёвый}.", es: "Este jersey es barato.", por: "сви́тер es masculino: дешёвый." },
            { ru: "У вас есть {друго́й} разме́р?", es: "¿Tienen otro talle?", por: "разме́р es masculino: друго́й." }],
          errores: [{ mal: "Ю́бка дорого́й.", bien: "Ю́бка {дорога́я}.", por: "ю́бка es femenino: el adjetivo también." }],
          chequeo: [{ pide: "Шарф ___.", opciones: ["краси́вый", "краси́вая"], ok: "краси́вый", por: "шарф es masculino." }] },
        { id: "u11-pagar", titulo: "Pagar: ка́ртой o нали́чными",
          texto: "«Con tarjeta» es ка́ртой, sin с: es el instrumental de «con qué», como пишу́ ру́чкой. «En efectivo» es нали́чными. Al pagar te pueden ofrecer el ticket (чек) o una bolsa (паке́т), y te dan el cambio (сда́ча).",
          ejemplos: [
            { ru: "Я бу́ду плати́ть {ка́ртой}.", es: "Voy a pagar con tarjeta.", por: "Con qué pagas: instrumental, sin с." },
            { ru: "Ка́ртой и́ли {нали́чными}?", es: "¿Con tarjeta o en efectivo?", por: "нали́чными va así." },
            { ru: "Вот {сда́ча}.", es: "Aquí tiene el cambio.", por: "сда́ча, el cambio." },
            { ru: "Вам {ну́жен} чек?", es: "¿Necesita el ticket?", por: "чек es masculino: ну́жен." }],
          errores: [{ mal: "Я плачу́ с ка́ртой.", bien: "Я плачу́ {ка́ртой}.", por: "La herramienta va sin с: ка́ртой." }],
          mas: { texto: "Si buscas un cajero: Где банкома́т? Y si hay descuento, vas a ver ски́дка: Здесь есть ски́дка? («¿aquí hay descuento?»)." },
          chequeo: [{ pide: "«Pago con tarjeta»", opciones: ["Я плачу́ ка́ртой.", "Я плачу́ с ка́ртой."], ok: "Я плачу́ ка́ртой.", por: "Sin с." }] },
        { id: "u11-hochu-kupit", titulo: "Una vez: хочу́ купи́ть",
          texto: "Después de хочу́, мо́жно, ну́жно y не могу́, el verbo va en infinitivo. Si es una acción concreta, que se hace una vez y se termina (esta camisa, ahora), va el verbo de resultado: хочу́ купи́ть, мо́жно заплати́ть. Si es algo en general o que se repite, el de proceso: люблю́ покупа́ть, здесь мо́жно плати́ть ка́ртой? («¿aquí se acepta tarjeta?»).",
          ejemplos: [
            { ru: "Я хочу́ {купи́ть} э́ту руба́шку.", es: "Quiero comprar esta camisa.", por: "Una compra concreta: купи́ть." },
            { ru: "Мо́жно {заплати́ть} ка́ртой?", es: "¿Puedo pagar con tarjeta?", por: "Ahora, esta compra: заплати́ть." },
            { ru: "Здесь мо́жно {плати́ть} ка́ртой?", es: "¿Aquí se puede pagar con tarjeta?", por: "En general, siempre: плати́ть." },
            { ru: "Мне ну́жно {поменя́ть} разме́р.", es: "Tengo que cambiar el talle.", por: "Una vez: поменя́ть." },
            { ru: "Я хочу́ {верну́ть} ку́ртку.", es: "Quiero devolver la chaqueta.", por: "Una vez: верну́ть." }],
          destacado: "плати́ть → заплати́ть · покупа́ть → купи́ть · меня́ть → поменя́ть · возвраща́ть → верну́ть · продава́ть → прода́ть",
          errores: [{ mal: "Я хочу́ покупа́ть э́ту руба́шку.", bien: "Я хочу́ {купи́ть} э́ту руба́шку.", por: "Una compra concreta: el verbo de resultado." }],
          mas: { texto: "Здесь продаю́т биле́ты? («¿aquí venden billetes?»): con они́ sin decirlo, el verbo dice «venden», sin importar quién. Es lo mismo que «se venden». Y prometer algo concreto también va con resultado: Я заплачу́ за́втра («lo pago mañana»).",
            ejemplos: [{ ru: "Здесь {продаю́т} биле́ты?", es: "¿Aquí venden billetes?", por: "Sin sujeto, el verbo en они́: «venden»." }] },
          chequeo: [{ pide: "«¿Puedo pagar ahora?»", opciones: ["Мо́жно заплати́ть сейча́с?", "Мо́жно плати́ть сейча́с?"], ok: "Мо́жно заплати́ть сейча́с?", por: "Una vez, ahora: заплати́ть." },
            { pide: "«Me encanta comprar ropa»", opciones: ["Я люблю́ покупа́ть оде́жду.", "Я люблю́ купи́ть оде́жду."], ok: "Я люблю́ покупа́ть оде́жду.", por: "Algo que se repite: покупа́ть." }] }
      ] },
    { id: "u11m3", n: 3, tipo: "leccion", nPractica: 12, titulo: "Restaurante y café", resumen: "Мо́жно меню́? Я бу́ду суп. Счёт, пожа́луйста.",
      intro: "Uno de los escenarios más útiles: pedir, comentar la comida y pagar. Y sonar amable, que en ruso depende de cómo pides.",
      secciones: [
        { id: "u11-registro", titulo: "Pedir sin sonar brusco",
          antes: { pide: "Estás en un café. ¿Cuál suena más amable?", opciones: ["Мо́жно ко́фе, пожа́луйста?", "Я хочу́ ко́фе."], ok: "Мо́жно ко́фе, пожа́луйста?", por: "Мо́жно…? y пожа́луйста suavizan el pedido." },
          texto: "Я хочу́ ко́фе se entiende, pero a un camarero le suena directo, casi una exigencia. En un café o un restaurante se pide así:\nЯ бу́ду + lo que quieres («voy a querer»)\nМо́жно…?\nМне, пожа́луйста, + lo que quieres\nДа́йте / Принеси́те, пожа́луйста, … («deme», «tráigame»)\nЯ хочу́ queda para los amigos: Я хочу́ пи́ццу!",
          ejemplos: [
            { ru: "{Я бу́ду} суп и сала́т.", es: "Voy a querer una sopa y una ensalada.", por: "En un restaurante, бу́ду + lo que pides." },
            { ru: "{Мне, пожа́луйста,} чай.", es: "Para mí, un té, por favor.", por: "Мне = «para mí»: corto y amable." },
            { ru: "{Принеси́те}, пожа́луйста, счёт.", es: "Tráigame la cuenta, por favor.", por: "Принеси́те, con вы y пожа́луйста." }],
          comparacion: "En español «quiero un café» está bien en un bar. En ruso, a un camarero, se pide con Я бу́ду…, Мо́жно…? o Мне, пожа́луйста…",
          errores: [{ mal: "Да́йте меню́!", bien: "Мо́жно меню́, {пожа́луйста}?", por: "Sin пожа́луйста, Да́йте suena a orden." }],
          chequeo: [{ pide: "Le pides una ensalada al camarero.", opciones: ["Я бу́ду сала́т.", "Я хочу́ сала́т!"], ok: "Я бу́ду сала́т.", por: "En el restaurante, бу́ду." }] },
        { id: "u11-pedir-comida", titulo: "Lo que pides va en acusativo",
          texto: "Después de бу́ду, хочу́, да́йте y принеси́те, lo que pides recibe la acción: va en acusativo. Las femeninas cambian (ры́ба → ры́бу, вода́ → во́ду); las masculinas que son cosas y las neutras quedan igual (суп, моро́женое). Después de Мне, пожа́луйста también va acusativo: es un «deme» sin decirlo.",
          ejemplos: [
            { ru: "Я бу́ду {ры́бу}.", es: "Voy a querer pescado.", por: "ры́ба → ры́бу." },
            { ru: "Принеси́те, пожа́луйста, {во́ду}.", es: "Tráigame agua, por favor.", por: "вода́ → во́ду (el acento también se mueve)." },
            { ru: "Мне, пожа́луйста, {ку́рицу}.", es: "Para mí, pollo, por favor.", por: "ку́рица → ку́рицу." },
            { ru: "А на десе́рт — {моро́женое}.", es: "Y de postre, helado.", por: "Neutro: no cambia." }],
          errores: [{ mal: "Я бу́ду ры́ба.", bien: "Я бу́ду {ры́бу}.", por: "Lo que pides, en acusativo. Si te sale ры́ба, igual se entiende." }],
          mas: { texto: "Con bebidas y cosas que no se cuentan, a veces se pide en genitivo: Да́йте воды́ («deme un poco de agua»), Мо́жно ча́я? Es el genitivo de «un poco de» que ya conoces de стака́н воды́. Las dos formas están bien: во́ду (el agua, entera) o воды́ (un poco).",
            ejemplos: [{ ru: "Да́йте, пожа́луйста, {воды́}.", es: "Deme un poco de agua, por favor.", por: "Genitivo: «un poco de»." }] },
          chequeo: [{ pide: "Я бу́ду ___ (la ensalada).", opciones: ["сала́т", "сала́та"], ok: "сала́т", por: "Masculino, una cosa: no cambia." },
            { pide: "Принеси́те ___ (el pollo).", opciones: ["ку́рицу", "ку́рица"], ok: "ку́рицу", por: "ку́рица → ку́рицу." }] },
        { id: "u11-mozo", titulo: "Lo que dice el camarero",
          texto: "Al entrar: Здра́вствуйте! Вас ско́лько? («¿cuántos son?»). Para preguntar si hay lugar: У вас есть свобо́дный сто́лик? Después, el camarero pregunta Что бу́дете зака́зывать? («¿qué van a pedir?») y, al final, Что́-нибудь ещё? («¿algo más?»). Si no sabes qué pedir: Что вы порекоменду́ете?",
          ejemplos: [
            { ru: "У вас есть свобо́дный {сто́лик}?", es: "¿Tienen una mesa libre?", por: "сто́лик, la mesa de un restaurante." },
            { ru: "Что вы {порекоменду́ете}?", es: "¿Qué me recomienda?", por: "порекомендова́ть: una recomendación, ahora." },
            { ru: "Что́-нибудь ещё? — {Нет, спаси́бо}.", es: "¿Algo más? — No, gracias.", por: "La respuesta más común." }],
          mas: { texto: "Что бу́дете зака́зывать? va con el verbo de proceso: el camarero pregunta en general qué van a pedir. Cuando ya está decidido, el de resultado: Я хочу́ заказа́ть ры́бу." },
          chequeo: [{ pide: "Quieres saber si hay una mesa libre.", opciones: ["У вас есть свобо́дный сто́лик?", "Где сто́лик?"], ok: "У вас есть свобо́дный сто́лик?", por: "У вас есть…? para preguntar si hay." }] },
        { id: "u11-comentar", titulo: "Comentar la comida y pagar",
          texto: "Cómo está la comida, con el adjetivo en nominativo y con el género del plato: Суп вку́сный, ры́ба вку́сная. Para quejarte, empieza con Извини́те. Al final: Счёт, пожа́луйста y, si quieres, Мо́жно заплати́ть ка́ртой?",
          ejemplos: [
            { ru: "Суп о́чень {вку́сный}.", es: "La sopa está muy rica.", por: "суп es masculino: вку́сный." },
            { ru: "Ко́фе {горя́чий}.", es: "El café está caliente.", por: "ко́фе es masculino: горя́чий." },
            { ru: "Извини́те, чай {холо́дный}.", es: "Disculpe, el té está frío.", por: "Queja amable: Извини́те primero." },
            { ru: "Э́то {сла́дкое} и́ли {солёное}?", es: "¿Es dulce o salado?", por: "э́то: neutro." }],
          errores: [{ mal: "Ко́фе горя́чая.", bien: "Ко́фе {горя́чий}.", por: "ко́фе es masculino, aunque termine en **-е**." }],
          chequeo: [{ pide: "Ры́ба о́чень ___.", opciones: ["вку́сная", "вку́сный"], ok: "вку́сная", por: "ры́ба es femenino." }] }
      ] },
    { id: "u11m4", n: 4, tipo: "leccion", nPractica: 12, titulo: "Transporte", resumen: "Как дое́хать до це́нтра? Где мне вы́йти?",
      intro: "Moverte por una ciudad: encontrar el transporte, comprar el billete, subir, bajar y saber adónde vas.",
      secciones: [
        { titulo: "Las palabras", texto: "метро́, авто́бус, трамва́й, по́езд, самолёт y такси́; остано́вка (parada), ста́нция (estación), вокза́л (estación de tren), аэропо́рт, биле́т (billete), вход (entrada), вы́ход (salida), касси́р (el de la boletería), такси́ст (taxista), пассажи́р (pasajero)." },
        { id: "u11-doehat", titulo: "Как дое́хать до…?",
          texto: "Para preguntar cómo llegar en transporte: Как дое́хать до + el lugar en genitivo. до = «hasta». Para un billete: биле́т до Москвы́.",
          desarmar: { es: "¿Cómo llego al centro?", partes: [
            { txt: "Как", rol: "Cómo", nota: "La pregunta." },
            { txt: "дое́хать", rol: "Llegar", nota: "дое́хать = llegar hasta un lugar, en un vehículo. Va en infinitivo: «¿cómo llegar?»." },
            { txt: "до це́нтра", rol: "Hasta dónde", nota: "до + genitivo: центр → це́нтра." }] },
          ejemplos: [
            { ru: "Как дое́хать до {вокза́ла}?", es: "¿Cómo llego a la estación de tren?", por: "вокза́л → вокза́ла." },
            { ru: "Как дое́хать до {гости́ницы}?", es: "¿Cómo llego al hotel?", por: "гости́ница → гости́ницы." },
            { ru: "Мне ну́жен биле́т до {Москвы́}.", es: "Necesito un billete a Moscú.", por: "Москва́ → Москвы́." }],
          errores: [{ mal: "Как дое́хать до центр?", bien: "Как дое́хать до {це́нтра}?", por: "до + genitivo." }],
          chequeo: [{ pide: "Как дое́хать до ___ (la estación)?", opciones: ["ста́нции", "ста́нция"], ok: "ста́нции", por: "до + genitivo." }] },
        { id: "u11-gde-kuda", titulo: "Где, куда́, отку́да",
          texto: "Tres preguntas, tres casos:\nГде? (dónde estás) → в / на + prepositivo: в метро́, на вокза́ле\nКуда́? (adónde vas) → в / на + acusativo: в аэропо́рт, на вокза́л\nОтку́да? (de dónde vienes) → из / с + genitivo: из Москвы́, с вокза́ла\nLos lugares con на usan с para «de dónde».",
          ejemplos: [
            { ru: "Я {на вокза́ле}.", es: "Estoy en la estación.", por: "Где? → prepositivo." },
            { ru: "Я е́ду {в аэропо́рт}.", es: "Voy al aeropuerto.", por: "Куда́? → acusativo." },
            { ru: "Я е́ду {из Москвы́}.", es: "Vengo de Moscú.", por: "Отку́да? → genitivo." }],
          destacado: "Где → prepositivo · Куда́ → acusativo · Отку́да → genitivo",
          errores: [{ mal: "Я е́ду в аэропо́рте.", bien: "Я е́ду {в аэропо́рт}.", por: "Movimiento (куда́): acusativo." }],
          chequeo: [{ pide: "Мы е́дем ___.", opciones: ["в центр", "в це́нтре"], ok: "в центр", por: "Adónde: acusativo." }] },
        { id: "u11-subir-bajar", titulo: "Subir y bajar",
          texto: "«Subir» a un transporte es сесть на + acusativo (literalmente «sentarse en»): ся́ду на авто́бус. «Bajar» es вы́йти: Где мне вы́йти? («¿dónde tengo que bajar?», con мне en dativo). En el autobús lleno, para pasar, se pregunta Вы выхо́дите? («¿baja?»). Son parejas: сади́ться / сесть, выходи́ть / вы́йти.",
          ejemplos: [
            { ru: "Я {ся́ду} на авто́бус.", es: "Voy a tomar el autobús.", por: "Una vez: сесть, en futuro." },
            { ru: "Где мне {вы́йти}?", es: "¿Dónde tengo que bajar?", por: "мне + infinitivo: «¿dónde me toca?»." },
            { ru: "Вы́йдите на {сле́дующей} остано́вке.", es: "Baje en la próxima parada.", por: "Dónde: prepositivo de сле́дующая остано́вка." },
            { ru: "Вы {выхо́дите}?", es: "¿Baja?", por: "Ahora mismo, en proceso: выходи́ть." }],
          errores: [{ mal: "Я ся́ду в авто́бус на остано́вке.", bien: "Я {ся́ду на авто́бус} на остано́вке.", por: "Con el transporte se dice сесть на." }],
          chequeo: [{ pide: "«Voy a tomar el tren»", opciones: ["Я ся́ду на по́езд.", "Я ся́ду в по́езде."], ok: "Я ся́ду на по́езд.", por: "сесть на + acusativo." }] },
        { id: "u11-horario", titulo: "Cuándo sale",
          texto: "Para los horarios del transporte: Когда́ отправля́ется по́езд? («¿cuándo sale el tren?»). El horario va con в + la hora, y lo que falta con че́рез: Сле́дующий авто́бус че́рез пять мину́т.",
          ejemplos: [
            { ru: "По́езд {отправля́ется} в семь.", es: "El tren sale a las siete.", por: "Un horario fijo: proceso, en presente." },
            { ru: "Сле́дующий авто́бус {че́рез де́сять мину́т}.", es: "El próximo autobús pasa dentro de diez minutos.", por: "че́рез + lo que falta." }],
          chequeo: [{ pide: "«El tren sale a las ocho»", opciones: ["По́езд отправля́ется в во́семь.", "По́езд отправля́ется во́семь."], ok: "По́езд отправля́ется в во́семь.", por: "A qué hora: в + la hora." }] }
      ] },
    { id: "u11m5", n: 5, tipo: "leccion", nPractica: 12, titulo: "Direcciones", resumen: "Иди́те пря́мо, пото́м поверни́те нале́во.",
      intro: "Preguntar y explicar cómo llegar, y decir dónde queda algo.",
      secciones: [
        { titulo: "Para dónde", texto: "пря́мо (derecho), напра́во (a la derecha), нале́во (a la izquierda), ря́дом (cerca, al lado), далеко́ (lejos), здесь (aquí), там (allí).\nу́лица (calle), у́гол (esquina), перекрёсток (cruce de calles), перехо́д (cruce peatonal), поворо́т (giro, curva)." },
        { id: "u11-indicaciones", titulo: "Dar indicaciones",
          texto: "Las indicaciones son pedidos con вы: Иди́те («vaya»), Поверни́те («doble»), Перейди́те («cruce»), Пройди́те («pase, siga»). Hasta dónde, con до + genitivo. Entre paso y paso, пото́м.",
          ejemplos: [
            { ru: "{Иди́те} пря́мо до перекрёстка.", es: "Siga derecho hasta el cruce.", por: "до + genitivo: перекрёсток → перекрёстка." },
            { ru: "Пото́м {поверни́те} нале́во.", es: "Después doble a la izquierda.", por: "Поверни́те + para dónde." },
            { ru: "{Перейди́те} у́лицу.", es: "Cruce la calle.", por: "перейти́ + acusativo: у́лица → у́лицу." },
            { ru: "Банк {на углу́}.", es: "El banco está en la esquina.", por: "у́гол tiene un «dónde» especial: на углу́." }],
          destacado: "Иди́те пря́мо → поверни́те напра́во → перейди́те у́лицу",
          errores: [{ mal: "Иди́те пря́мо до перекрёсток.", bien: "Иди́те пря́мо до {перекрёстка}.", por: "до + genitivo." }],
          mas: { texto: "Con amigos, la misma indicación va con ты: Иди́ пря́мо, поверни́ нале́во. Y cruzar en general, como costumbre, es переходи́ть: Здесь нельзя́ переходи́ть у́лицу («aquí no se puede cruzar»)." },
          chequeo: [{ pide: "«Cruce la calle»", opciones: ["Перейди́те у́лицу.", "Перейди́те у́лица."], ok: "Перейди́те у́лицу.", por: "Lo que se cruza, en acusativo." }] },
        { id: "u11-donde-queda", titulo: "Dónde queda",
          texto: "Где нахо́дится…? = «¿dónde queda…?». Para ubicar algo, preposiciones que ya conoces, cada una con su caso:\nнапро́тив, о́коло → genitivo\nме́жду, ря́дом с → instrumental",
          ejemplos: [
            { ru: "Где {нахо́дится} апте́ка?", es: "¿Dónde queda la farmacia?", por: "нахо́дится = queda, está." },
            { ru: "Кафе́ напро́тив {ста́нции}.", es: "El café está enfrente de la estación.", por: "напро́тив + genitivo." },
            { ru: "Банк ме́жду {магази́ном} и {рестора́ном}.", es: "El banco está entre la tienda y el restaurante.", por: "ме́жду + instrumental." },
            { ru: "Гости́ница ря́дом {с вокза́лом}.", es: "El hotel está al lado de la estación.", por: "ря́дом с + instrumental." }],
          destacado: "напро́тив / о́коло + genitivo · ме́жду / ря́дом с + instrumental",
          errores: [{ mal: "Банк напро́тив ста́нция.", bien: "Банк напро́тив {ста́нции}.", por: "напро́тив + genitivo." },
            { mal: "Банк ме́жду магази́н и рестора́н.", bien: "Банк ме́жду {магази́ном} и {рестора́ном}.", por: "ме́жду + instrumental, las dos palabras." }],
          chequeo: [{ pide: "Музе́й ря́дом с ___.", opciones: ["па́рком", "па́рка"], ok: "па́рком", por: "ря́дом с + instrumental." }] }
      ] },
    { id: "u11m6", n: 6, tipo: "leccion", nPractica: 12, titulo: "Pedir ayuda y resolver problemas", resumen: "Я не могу́ найти́… У меня́ укра́ли телефо́н.",
      intro: "Aquí aparece un ruso mucho más real: perderse, que algo no funcione, que te roben algo. Lo importante son las estrategias.",
      secciones: [
        { id: "u11-naiti", titulo: "Buscar y encontrar: иска́ть, найти́",
          texto: "иска́ть es buscar (el proceso); найти́ es encontrar (el resultado). Por eso «no encuentro el hotel» es Я не могу́ найти́ гости́ницу: no logras el resultado. Cuando por fin lo encuentras: Я нашёл! (hombre) / Я нашла́! (mujer).",
          ejemplos: [
            { ru: "Я {ищу́} гости́ницу.", es: "Estoy buscando el hotel.", por: "Proceso: иска́ть." },
            { ru: "Я не могу́ {найти́} гости́ницу.", es: "No encuentro el hotel.", por: "No logras el resultado: найти́." },
            { ru: "Я {нашла́} ключ!", es: "¡Encontré la llave! (eres mujer)", por: "Resultado, en pasado." }],
          errores: [{ mal: "Я не могу́ иска́ть гости́ницу.", bien: "Я не могу́ {найти́} гости́ницу.", por: "No es que no puedas buscar: no logras encontrar." }],
          chequeo: [{ pide: "«¡Lo encontré!» (eres hombre)", opciones: ["Я нашёл!", "Я иска́л!"], ok: "Я нашёл!", por: "Resultado: найти́." }] },
        { id: "u11-net", titulo: "Cuando algo sale mal",
          texto: "Las frases para un problema usan casos que ya conoces:\nno tengo… → у меня́ нет + genitivo\nno funciona → не рабо́тает\nperdí… → потеря́л / потеря́ла + acusativo\nme robaron… → у меня́ укра́ли + acusativo (они́ sin decirlo: «robaron»)\nse me rompió → я слома́л / слома́ла + acusativo\nme duele → мне бо́льно",
          ejemplos: [
            { ru: "У меня́ нет {па́спорта}.", es: "No tengo el pasaporte.", por: "нет + genitivo: па́спорт → па́спорта." },
            { ru: "Телефо́н не {рабо́тает}.", es: "El teléfono no anda.", por: "рабо́тать también es «funcionar»." },
            { ru: "Я {потеря́л} кошелёк.", es: "Perdí la cartera. (eres hombre)", por: "Una vez, resultado: потеря́ть." },
            { ru: "У меня́ {укра́ли} телефо́н.", es: "Me robaron el teléfono.", por: "укра́ли sin sujeto = «robaron»." },
            { ru: "У меня́ нет {заря́дки}.", es: "No tengo batería.", por: "заря́дка → заря́дки." }],
          comparacion: "«Me robaron el teléfono»: el ruso no dice «me», dice «junto a mí robaron»: у меня́ укра́ли.",
          errores: [{ mal: "У меня́ нет па́спорт.", bien: "У меня́ нет {па́спорта}.", por: "Después de нет, genitivo." },
            { mal: "Я укра́ли телефо́н.", bien: "{У меня́} укра́ли телефо́н.", por: "Tú no robaste: «junto a mí robaron»." }],
          chequeo: [{ pide: "«No tengo dinero»", opciones: ["У меня́ нет де́нег.", "У меня́ нет де́ньги."], ok: "У меня́ нет де́нег.", por: "нет + genitivo: де́ньги → де́нег." }] },
        { id: "u11-opozdat", titulo: "Llegar tarde: опозда́ть на…",
          texto: "«Llegué tarde al tren» (= perdí el tren) es опозда́л на по́езд: на + acusativo, como con el trabajo o la clase. Cuánto tarde, también con на: опозда́ю на де́сять мину́т.",
          ejemplos: [
            { ru: "Я {опозда́ла} на по́езд.", es: "Perdí el tren. (eres mujer)", por: "опозда́ть на + acusativo." },
            { ru: "Я опозда́ю на {рабо́ту}.", es: "Voy a llegar tarde al trabajo.", por: "рабо́та → рабо́ту." },
            { ru: "Мы опозда́ем {на пять мину́т}.", es: "Vamos a llegar cinco minutos tarde.", por: "Cuánto tarde: на + la cantidad." }],
          errores: [{ mal: "Я опозда́л в по́езд.", bien: "Я опозда́л {на по́езд}.", por: "опозда́ть на." }],
          chequeo: [{ pide: "«Voy a llegar tarde a la clase»", opciones: ["Я опозда́ю на уро́к.", "Я опозда́ю в уро́ке."], ok: "Я опозда́ю на уро́к.", por: "на + acusativo." }] },
        { id: "u11-estrategias", titulo: "Estrategias",
          texto: "Si no te sale la frase entera, di lo esencial: Гости́ница? Где? Помоги́те, пожа́луйста! También se entiende.\nSi no sabes una palabra: Как сказа́ть…? O descríbela con lo que sabes.\nSi es grave: Помоги́те! Позвони́те в поли́цию!",
          ejemplos: [
            { ru: "{Помоги́те}, пожа́луйста! Я потеря́лся.", es: "¡Ayúdeme, por favor! Me perdí. (eres hombre)", por: "потеря́ться = perderse uno mismo." },
            { ru: "{Позвони́те} в поли́цию!", es: "¡Llame a la policía!", por: "звони́ть / позвони́ть в + acusativo: a un lugar." }],
          truco: "Primero lo esencial: qué necesitas. La gramática, después." }
      ] },
    { id: "u11m7", n: 7, tipo: "leccion", nPractica: 12, titulo: "Mensajes", resumen: "Дава́й встре́тимся в семь? Я опозда́ю на де́сять мину́т.",
      intro: "Del ruso hablado al ruso escrito de todos los días: invitar, aceptar, decir que no, mandar algo, avisar que llegas tarde.",
      secciones: [
        { id: "u11-davai", titulo: "Invitar: Дава́й…, Хо́чешь…?",
          texto: "Дава́й es «de acuerdo, hagamos…». Va con el verbo de resultado en la forma de мы: Дава́й встре́тимся («encontrémonos»), Дава́й пойдём в кино́. También solo: Дава́й за́втра? Para preguntar si el otro quiere: Хо́чешь + infinitivo. Con вы o con varios amigos, Дава́йте.",
          ejemplos: [
            { ru: "Дава́й {встре́тимся} в семь.", es: "Encontrémonos a las siete.", por: "Дава́й + verbo de resultado en мы." },
            { ru: "Дава́й {пойдём} в кино́!", es: "¡Vamos al cine!", por: "пойдём: мы de пойти́." },
            { ru: "Хо́чешь {пойти́} на конце́рт?", es: "¿Quieres ir a un concierto?", por: "Хо́чешь + infinitivo." },
            { ru: "{Дава́йте} за́втра?", es: "¿Lo dejamos para mañana? (a varios)", por: "Con вы: Дава́йте." }],
          errores: [{ mal: "Дава́й встре́титься в семь.", bien: "Дава́й {встре́тимся} в семь.", por: "Para «hagamos», Дава́й + la forma de мы." }],
          chequeo: [{ pide: "«Llamemos a mamá»", opciones: ["Дава́й позвони́м ма́ме.", "Дава́й позвони́ть ма́ме."], ok: "Дава́й позвони́м ма́ме.", por: "Дава́й + мы." }] },
        { id: "u11-responder", titulo: "Aceptar, decir que no, avisar",
          texto: "Para aceptar: Да, коне́чно. / Хорошо́. / Договори́лись («quedamos así»). Para decir que no, con amabilidad: Спаси́бо, но я не могу́. Agradecer una invitación: Спаси́бо за приглаше́ние (за + acusativo, como fórmula). Para avisar que llegas tarde: Я опозда́ю на де́сять мину́т. Извини́! — Ничего́!",
          ejemplos: [
            { ru: "{Договори́лись}! До встре́чи.", es: "¡Quedamos así! Nos vemos.", por: "Договори́лись cierra un plan." },
            { ru: "Спаси́бо за {приглаше́ние}, но я не могу́.", es: "Gracias por la invitación, pero no puedo.", por: "спаси́бо за + acusativo." },
            { ru: "{Хорошо́}, дава́й в семь.", es: "Bueno, de acuerdo, a las siete.", por: "Para aceptar alcanza Хорошо́." }],
          mas: { texto: "Aceptar y rechazar también tienen verbo: согласи́ться («aceptar, estar de acuerdo») y отказа́ться («rechazar, negarse»). Ella согласи́лась: aceptó. Он отказа́лся: dijo que no. Y proponer algo es предложи́ть: Я предложи́л пойти́ в кино́ («propuse ir al cine»)." },
          chequeo: [{ pide: "Quieres cerrar el plan: quedamos así.", opciones: ["Договори́лись!", "Ничего́!"], ok: "Договори́лись!", por: "Договори́лись = quedamos así." }] },
        { id: "u11-mandar", titulo: "Mandar algo: присла́ть, отпра́вить",
          texto: "En un mensaje se manda de todo. присла́ть es «mandarme a mí» (algo que llega aquí); отпра́вить, «enviar» (algo que sale). La persona a quien se manda va en dativo, como con дать.",
          ejemplos: [
            { ru: "{Пришли́} мне а́дрес, пожа́луйста.", es: "Mándame la dirección, por favor.", por: "присла́ть: que llegue a mí. мне, dativo." },
            { ru: "Я тебе́ {отпра́влю} сообще́ние.", es: "Te voy a mandar un mensaje.", por: "Una vez: отпра́вить, en futuro." },
            { ru: "Я тебе́ {позвоню́} ве́чером.", es: "Te llamo por la noche.", por: "позвони́ть + dativo." }],
          errores: [{ mal: "Я отпра́влю тебя́ сообще́ние.", bien: "Я отпра́влю {тебе́} сообще́ние.", por: "A quién se manda: dativo." }],
          chequeo: [{ pide: "«Mándame tu número»", opciones: ["Пришли́ мне но́мер.", "Пришли́ меня́ но́мер."], ok: "Пришли́ мне но́мер.", por: "A quién: dativo." }] },
        { id: "u11-ty-vy", titulo: "ты o вы también al escribir",
          texto: "Con amigos, ты: Дава́й…, Хо́чешь…?, Извини́, Пришли́. Con desconocidos, en una tienda o con alguien mayor, вы: Дава́йте…, Хоти́те…?, Извини́те, Пришли́те. El mensaje se escribe con la misma regla con la que se habla.",
          ejemplos: [
            { ru: "{Извини́}, я опозда́ю.", es: "Perdón, voy a llegar tarde. (a un amigo)", por: "Con ты." },
            { ru: "{Извини́те}, я опозда́ю.", es: "Disculpe, voy a llegar tarde. (a la profesora)", por: "Con вы." }],
          chequeo: [{ pide: "Le escribes a tu profesora.", opciones: ["Извини́те, я опозда́ю.", "Извини́, я опозда́ю."], ok: "Извини́те, я опозда́ю.", por: "Con вы." }] }
      ] },
    { id: "u11m8", n: 8, tipo: "leccion", nPractica: 12, titulo: "Gustos y opiniones", resumen: "Мне нра́вятся…, По-мо́ему, э́то интере́сно.",
      intro: "Hasta ahora podías decir qué te gusta. Ahora, también qué prefieres, qué te parece y por qué.",
      secciones: [
        { id: "u11-nravyatsya", titulo: "Мне нра́вится, мне нра́вятся",
          texto: "Lo que gusta es el sujeto, así que el verbo concuerda con eso: una cosa → нра́вится; varias, o una palabra que siempre es plural → нра́вятся. Para preferir: предпочита́ю + acusativo.",
          ejemplos: [
            { ru: "Мне {нра́вится} э́тот фильм.", es: "Me gusta esta película.", por: "Una cosa: нра́вится." },
            { ru: "Мне {нра́вятся} ру́сские фи́льмы.", es: "Me gustan las películas rusas.", por: "Varias cosas: нра́вятся." },
            { ru: "Ей {нра́вятся} джи́нсы.", es: "A ella le gustan los vaqueros.", por: "джи́нсы es plural." },
            { ru: "Я предпочита́ю {ры́бу}.", es: "Prefiero el pescado.", por: "предпочита́ть + acusativo." }],
          errores: [{ mal: "Мне нра́вится ту́фли.", bien: "Мне {нра́вятся} ту́фли.", por: "ту́фли es plural." }],
          chequeo: [{ pide: "Мне ___ сла́дкие десе́рты.", opciones: ["нра́вятся", "нра́вится"], ok: "нра́вятся", por: "Plural." }] },
        { id: "u11-opinar", titulo: "Opinar: ду́маю, счита́ю, по-мо́ему",
          texto: "Tres maneras de dar una opinión:\nЯ ду́маю, что… («creo que…»)\nЯ счита́ю, что… («considero que…», más firme)\nПо-мо́ему, … («para mí…», va solo, con una coma)\nPara preguntar: Как ты ду́маешь? Y para no estar de acuerdo: У меня́ друго́е мне́ние.",
          ejemplos: [
            { ru: "{Я ду́маю, что} э́то интере́сно.", es: "Creo que es interesante.", por: "ду́мать, что + la opinión." },
            { ru: "{По-мо́ему}, метро́ удо́бное.", es: "Para mí, el metro es cómodo.", por: "По-мо́ему, con coma." },
            { ru: "{Как ты ду́маешь}, э́то пра́вда?", es: "¿Qué te parece, es verdad?", por: "Pedir la opinión del otro." },
            { ru: "У меня́ {друго́е} мне́ние.", es: "Yo tengo otra opinión.", por: "мне́ние es neutro: друго́е." }],
          errores: [{ mal: "Я ду́маю, э́то хорошо́, что.", bien: "{Я ду́маю, что} э́то хорошо́.", por: "что va enseguida después de ду́маю." }],
          chequeo: [{ pide: "«Para mí, es interesante»", opciones: ["По-мо́ему, э́то интере́сно.", "Я по-мо́ему, что э́то интере́сно."], ok: "По-мо́ему, э́то интере́сно.", por: "По-мо́ему va solo, con una coma." }] },
        { id: "u11-eto", titulo: "Фильм интере́сный o э́то интере́сно",
          texto: "Para opinar de una cosa: el adjetivo con su género (Фильм интере́сный, Кни́га ску́чная, Метро́ удо́бное). Para opinar de algo en general, de una situación: Э́то + la forma en **-о** (Э́то интере́сно, Э́то ва́жно, Э́то удо́бно).",
          ejemplos: [
            { ru: "Кни́га {ску́чная}.", es: "El libro es aburrido.", por: "кни́га es femenino." },
            { ru: "Жить в це́нтре — {э́то удо́бно}.", es: "Vivir en el centro es cómodo.", por: "Una situación: Э́то + **-о**." }],
          chequeo: [{ pide: "«Es importante» (la situación)", opciones: ["Э́то ва́жно.", "Э́то ва́жный."], ok: "Э́то ва́жно.", por: "En general: **-о**." }] },
        { id: "u11-razon", titulo: "Dar una razón",
          texto: "Una opinión crece con una razón: потому́ что («porque»). Así se arma una respuesta completa: lo que piensas + por qué.",
          ejemplos: [
            { ru: "Мне нра́вится метро́, {потому́ что} э́то удо́бно.", es: "Me gusta el metro porque es cómodo.", por: "Opinión + потому́ что + razón." },
            { ru: "Мне не нра́вится э́тот рестора́н, потому́ что он {дорого́й}.", es: "No me gusta este restaurante porque es caro.", por: "он = рестора́н: masculino, дорого́й." }] }
      ] },
    { id: "u11m9", n: 9, tipo: "leccion", nPractica: 12, titulo: "Socializar", resumen: "Чем ты занима́ешься? Отку́да ты?",
      intro: "Charlar con alguien más allí de comprar o pedir: de dónde eres, qué haces, qué te gusta, qué planes tienes.",
      secciones: [
        { id: "u11-charla", titulo: "Las preguntas de una charla",
          texto: "Las preguntas de siempre, con los casos que ya conoces:\nЧем ты занима́ешься? («¿a qué te dedicas?»: занима́ться + instrumental)\nГде ты рабо́таешь? · Отку́да ты? · Где ты живёшь?\nЧто ты лю́бишь де́лать? · Что ты де́лал на выходны́х?\nКаки́е у тебя́ пла́ны? · Тебе́ нра́вится Барсело́на?",
          ejemplos: [
            { ru: "{Чем} ты занима́ешься?", es: "¿A qué te dedicas?", por: "Чем: instrumental de что, porque занима́ться pide instrumental." },
            { ru: "Что ты де́лал {на выходны́х}?", es: "¿Qué hiciste el fin de semana?", por: "на выходны́х va así." },
            { ru: "{Каки́е} у тебя́ пла́ны?", es: "¿Qué planes tienes?", por: "пла́ны es plural: каки́е." }],
          chequeo: [{ pide: "Quieres saber a qué se dedica.", opciones: ["Чем ты занима́ешься?", "Что ты занима́ешься?"], ok: "Чем ты занима́ешься?", por: "занима́ться + instrumental: чем." }] },
        { id: "u11-respuesta-larga", titulo: "Respuestas más largas",
          texto: "No contestes con una sola palabra: suma un detalle. Una respuesta y un dato más hacen que la charla siga.",
          ejemplos: [
            { ru: "Я из Аргенти́ны, {но} сейча́с живу́ в Барсело́не.", es: "Soy de Argentina, pero ahora vivo en Barcelona.", por: "из + genitivo y, con но, un dato más." },
            { ru: "Я гуля́л в па́рке, {а ве́чером} смотре́л фильм.", es: "Paseé por el parque y por la noche vi una película.", por: "а ве́чером agrega otro momento." },
            { ru: "Я рабо́таю {архите́ктором}. А ещё я люблю́ рисова́ть.", es: "Trabajo de arquitecto. Y además me gusta dibujar.", por: "рабо́тать + instrumental, y un gusto." },
            { ru: "Му́зыка — моё {увлече́ние}.", es: "La música es mi pasión.", por: "увлече́ние, la afición." }] },
        { id: "u11-devolver", titulo: "Devolver la pregunta",
          texto: "Después de contestar, devuelve la pregunta: А ты? / А у тебя́? / А тебе́? Va en el mismo caso que la pregunta: si te preguntaron con у тебя́, devuelves А у тебя́?",
          ejemplos: [
            { ru: "Каки́е у тебя́ пла́ны? — Я е́ду на мо́ре. {А у тебя́}?", es: "¿Qué planes tienes? — Me voy al mar. ¿Y tú?", por: "Pregunta con у тебя́ → А у тебя́?" },
            { ru: "Тебе́ нра́вится Москва́? — О́чень! {А тебе́}?", es: "¿Te gusta Moscú? — ¡Mucho! ¿Y a ti?", por: "Pregunta con тебе́ → А тебе́?" }],
          chequeo: [{ pide: "Te preguntaron «Тебе́ нра́вится ко́фе?». Devuelve la pregunta.", opciones: ["А тебе́?", "А ты?"], ok: "А тебе́?", por: "Mismo caso: dativo." }] }
      ] },
    { id: "u11m10", n: 10, tipo: "conversaciones", titulo: "Conversaciones completas", resumen: "Conocer a alguien, restaurante, viaje, quedar.",
      intro: "Aquí ya no hay frases sueltas: cuatro conversaciones de principio a fin. Léelas y escúchalas; después, en la práctica, las haces tú." },
    { id: "u11m11", n: 11, tipo: "leccion", nPractica: 12, titulo: "Reaccionar", resumen: "¿Qué dices?",
      intro: "Ya no te piden traducir: te cuentan una situación y decides qué decir.",
      secciones: [
        { id: "u11-situacion", titulo: "Pensar en la situación",
          texto: "Antes de escribir, tres preguntas:\n1. ¿Con quién hablo? → ты o вы.\n2. ¿Qué necesito? → la palabra clave (el hotel, el billete, la cuenta).\n3. ¿Qué es lo mínimo que tengo que decir? → una frase corta y clara.",
          ejemplos: [
            { ru: "Извини́те, где {ста́нция метро́}?", es: "Disculpe, ¿dónde está la estación de metro?", por: "No encuentras la estación. Desconocido: вы. Lo clave: ста́нция метро́." },
            { ru: "Приве́т! Я {опозда́ю} на де́сять мину́т.", es: "¡Hola! Voy a llegar diez minutos tarde.", por: "A un amigo: ты. Lo clave: llegas tarde." },
            { ru: "Мне {нужна́} апте́ка.", es: "Necesito una farmacia.", por: "Lo mínimo: qué necesitas." }],
          chequeo: [{ pide: "Te perdiste y le hablas a un señor en la calle.", opciones: ["Извини́те, вы мо́жете мне помо́чь?", "Помоги́ мне!"], ok: "Извини́те, вы мо́жете мне помо́чь?", por: "Desconocido: вы, con извини́те." }] },
        { id: "u11-suavizar", titulo: "Más natural",
          texto: "Una frase puede ser correcta y sonar brusca. Мо́жно…?, пожа́луйста e извини́те la suavizan. Para pedirle algo a alguien, una pregunta suena mejor que una orden: Вы мо́жете…?",
          ejemplos: [
            { ru: "{Мо́жно} меню́, пожа́луйста?", es: "¿Me da la carta, por favor?", por: "En lugar de Да́йте меню́!" },
            { ru: "{Извини́те}, где банк?", es: "Disculpe, ¿dónde está el banco?", por: "En lugar de Где банк?" },
            { ru: "Вы {мо́жете} повтори́ть?", es: "¿Puede repetirlo?", por: "Una pregunta en lugar de una orden." }],
          errores: [{ mal: "Дай меню́!", bien: "Мо́жно меню́, {пожа́луйста}?", por: "Con un camarero, вы y un pedido amable." }],
          truco: "Con desconocidos: извини́те al principio y пожа́луйста al final." }
      ] },
    { id: "u11m12", n: 12, tipo: "proyecto", titulo: "Proyecto: Мой день в Росси́и", resumen: "Un día en una ciudad rusa.",
      intro: "Llegas a una ciudad rusa y pasas un día ahí. Primero resuelve las siete situaciones del día; después cuéntalo en un relato de 20 a 25 frases.",
      requisitos: [], consejos: [] },
    { id: "u11m13", n: 13, tipo: "examen", titulo: "Evaluación", resumen: "Comprensión, situaciones, conversación, traducción, mensaje y versión natural.",
      intro: "Treinta y cinco ejercicios en seis partes. En las situaciones, «Se entiende» vale el punto entero; en el resto, «Casi» vale medio. Con 80 % o más, la unidad está aprobada.",
      partes: [
        { nombre: "Comprensión", tipos: ["comprension"], n: 5 },
        { nombre: "Situaciones", tipos: ["situacion", "ruta"], n: 8 },
        { nombre: "Completar la conversación", tipos: ["completar"], n: 8 },
        { nombre: "Traducción en contexto", tipos: ["traduccion"], n: 8 },
        { nombre: "Mensaje", tipos: ["mensaje"], n: 3 },
        { nombre: "¿Suena natural?", tipos: ["natural"], n: 3 }
      ],
      aprobado: 0.8 }
  ]
};

function u11Palabras(t) { return String(t).replace(/(^|[^\-А-Яа-яЁё\u0301{])([вВаАиИсСуУкКоОяЯ])(?=$|[^А-Яа-яЁё\u0301}])/g, "$1{$2}"); }
UNIDAD_11.modulos.forEach(m => {
  if (m.intro) m.intro = u11Palabras(m.intro);
  (m.secciones || []).forEach(s => {
    /* Todo el texto en español de la teoría (12/10/2026): también por, «Más a fondo», errores y preguntas */
    ["texto", "destacado", "truco", "comparacion", "ojo"].forEach(k => { if (s[k]) s[k] = u11Palabras(s[k]); });
    const por = o => { if (o && o.por) o.por = u11Palabras(o.por); if (o && o.pide) o.pide = u11Palabras(o.pide); };
    (s.ejemplos || []).forEach(por); (s.errores || []).forEach(por); (s.chequeo || []).forEach(por); por(s.antes);
    if (s.desarmar) s.desarmar.partes.forEach(p => { if (p.nota) p.nota = u11Palabras(p.nota); });
    if (s.mas) { if (s.mas.texto) s.mas.texto = u11Palabras(s.mas.texto); (s.mas.ejemplos || []).forEach(por); (s.mas.errores || []).forEach(por); }
  });
});
function unidad11Modulo(id) { return UNIDAD_11.modulos.find(m => m.id === id) || null; }

const U11_MEZCLA = { "elegir-expr": 2, situacion: 5, ruta: 2, "ruta-elegir": 1, nuzhen: 1, precio: 2, dialogo: 1, chat: 1, completar: 3, traduccion: 3, dictado: 2, natural: 2, mensaje: 1,
  ubicacion: 1, donde: 1, concordancia: 1, comprension: 1, "palabra-es-ru": 1, significado: 1, emparejar: 1, "ordenar-dlg": 1,
  /* Profundización (12/10/2026): ~20 % de la sesión, sin tapar las situaciones */
  porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, pareja: 1, aspecto: 1 };

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
    ["Здра́вствуйте! Что вы и́щете?", "¡Hola! ¿Qué busca?", "Di que buscas una chaqueta.", [E("una chaqueta", "ищу́ ку́ртку|хочу́ ку́ртку|хочу́ купи́ть ку́ртку|нужна́ ку́ртка|ку́ртку")], "Я ищу́ ку́ртку.", "Я ищу́… + acusativo"],
    ["Вот ку́ртка. Вам нра́вится?", "Aquí tiene una chaqueta. ¿Le gusta?", "Di que sí, pero pregunta si tienen otro talle.", [E("otro talle", "друго́й разме́р")], "Да, но у вас есть друго́й разме́р?", "У вас есть…?"],
    ["Да, вот друго́й разме́р.", "Sí, aquí tiene otro talle.", "Pregunta cuánto cuesta.", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько")], "Ско́лько сто́ит?"],
    ["Ты́сяча рубле́й.", "Mil rublos.", "Di que pagas con tarjeta.", [E("con tarjeta", "ка́ртой")], "Я бу́ду плати́ть ка́ртой.", "con tarjeta: instrumental"],
    ["Хорошо́. Спаси́бо!", "Bien. ¡Gracias!", "Agradece y despídete.", [E("una despedida", U11_CHAO)], "Спаси́бо, до свида́ния!"]
  ]);
  /* Café: una variante por pareja de platos */
  out.cafe = [["ко́фе", "сала́т"], ["суп", "чай"], ["пи́цца", "сок"], ["ры́ба", "вода́"]].map(([a, b]) => {
    const fa = u11Pedido(a), fb = u11Pedido(b), ca = U11_COMIDA.find(x => x[0] === a), cb = U11_COMIDA.find(x => x[0] === b);
    const sa = D.sust(a), adj = { m: "вку́сный", f: "вку́сная", n: "вку́сное" }[sa.g] || "вку́сный";
    return u11Turnos("Официа́нт", "m", "En el café: " + ca[1].replace(/^(un|una) /, "") + " y " + cb[1].replace(/^(un|una) /, ""), [
      ["Здра́вствуйте!", "¡Hola!", "Saluda y pide la carta.", [E("la carta", "меню́")], "Здра́вствуйте. Мо́жно меню́, пожа́луйста?", "Мо́жно…?"],
      ["Коне́чно. Что вы хоти́те?", "Claro. ¿Qué desea?", "Pide " + ca[1] + " y " + cb[1] + ".", [E(ca[1], fa.formas), E(cb[1], fb.formas)], "Я бу́ду " + fa.acc + " и " + fb.acc + ".", "Lo que pides va en acusativo."],
      ["Что́-нибудь ещё?", "¿Algo más?", "Di que no, gracias.", [E("que no", "нет")], "Нет, спаси́бо."],
      ["Вот, пожа́луйста.", "Aquí tiene.", "Di que " + (sa.g === "f" ? "la " : "el ") + ca[1].replace(/^(un|una) /, "") + " está muy rico.", [E("que está rico", "вку́сный|вку́сная|вку́сное|вку́сно|о́чень вку́сно")], "Спаси́бо! " + u11Cap(sa.nom) + " о́чень " + adj + "."],
      ["Спаси́бо!", "¡Gracias!", "Pide la cuenta.", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
      ["Ка́ртой и́ли нали́чными?", "¿Con tarjeta o en efectivo?", "Di que pagas en efectivo.", [E("en efectivo", "нали́чными")], "Нали́чными."]
    ]);
  });
  out.estacion = U11_CIUDADES.map(cd => { const s = D.sust(cd), es = cd === "Москва́" ? "Moscú" : "San Petersburgo";
    return u11Turnos("Касси́р", "f", "En la estación: un billete a " + es, [
      ["Здра́вствуйте! Куда́ вы е́дете?", "¡Hola! ¿Adónde viaja?", "Pide un billete a " + es + ".", [E("el billete", "биле́т"), E("adónde", "до " + s.gen + "|в " + s.acc)], "Мне ну́жен биле́т до " + s.gen + ".", "до + genitivo"],
      ["На сего́дня и́ли на за́втра?", "¿Para hoy o para mañana?", "Di que para mañana.", [E("mañana", "за́втра")], "На за́втра, пожа́луйста."],
      ["Хорошо́. Ты́сяча рубле́й.", "Bien. Mil rublos.", "Pregunta cuándo sale el tren.", [E("cuándo", "когда́"), E("el tren", "по́езд|отправля́ется")], "Когда́ отправля́ется по́езд?"],
      ["В де́сять часо́в.", "A las diez.", "Pregunta si puedes pagar con tarjeta.", [E("con tarjeta", "ка́ртой")], "Мо́жно ка́ртой?"],
      ["Коне́чно. Вот биле́т.", "Claro. Aquí tiene el billete.", "Agradece y despídete.", [E("una despedida", U11_CHAO)], "Спаси́бо! До свида́ния!"]
    ]); });
  out.chats = [
    u11Turnos("Ма́ша", "f", "Chat con Masha: una invitación", [
      ["Приве́т! Что ты де́лаешь ве́чером?", "¡Hola! ¿Qué haces esta noche?", "Di que vas a estar en casa.", [E("en casa", "бу́ду до́ма|до́ма")], "Приве́т! Я бу́ду до́ма.", "бу́ду + до́ма"],
      ["Хо́чешь пойти́ в рестора́н?", "¿Quieres ir a un restaurante?", "Acepta.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в семь?", "¿Nos encontramos a las siete?", "Confirma.", [E("que está bien", U11_OK)], "Хорошо́, договори́лись!"]
    ], true),
    u11Turnos("Ди́ма", "m", "Chat con Dima: cambiar el plan", [
      ["Приве́т! Мы сего́дня идём в кино́?", "¡Hola! ¿Hoy vamos al cine?", "Di que hoy no puedes.", [E("que no puedes", "не могу́")], "Извини́, я сего́дня не могу́."],
      ["Почему́?", "¿Por qué?", "Explica que tienes que trabajar.", [E("que trabajas", "рабо́тать|рабо́таю|бу́ду рабо́тать")], "Мне ну́жно рабо́тать.", "Мне ну́жно…"],
      ["Хорошо́. А когда́?", "Bueno. ¿Y cuándo?", "Propón mañana.", [E("mañana", "за́втра")], "Дава́й за́втра?", "Дава́й…"],
      ["Дава́й! За́втра в шесть.", "¡De acuerdo! Mañana a las seis.", "Confirma.", [E("que está bien", U11_OK)], "Договори́лись!"]
    ], true),
    u11Turnos("А́нна", "f", "Chat con Ana: llegas tarde", [
      ["Ты где? Я уже́ в кафе́.", "¿Dónde estás? Ya estoy en el café.", "Avisa que vas a llegar diez minutos tarde.", [E("que llegas tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́, я опозда́ю на де́сять мину́т.", "Я опозда́ю на…"],
      ["Хорошо́, жду.", "Bueno, te espero.", "Pide perdón y agradece.", [E("perdón o gracias", "извини́|извини́те|спаси́бо|прости́")], "Спаси́бо! Извини́!"]
    ], true),
    u11Turnos("Ива́н", "m", "Chat con Iván: confirmar", [
      ["Приве́т! За́втра идём в музе́й?", "¡Hola! ¿Mañana vamos al museo?", "Di que sí, claro.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в де́сять?", "¿Nos encontramos a las diez?", "Propón a las once.", [E("a las once", "в оди́ннадцать|в 11")], "Дава́й в оди́ннадцать?"],
      ["Хорошо́, в оди́ннадцать.", "Bueno, a las once.", "Confirma.", [E("que está bien", U11_OK)], "Договори́лись! До за́втра!"]
    ], true)
  ];
  /* Módulo 10: cuatro conversaciones completas */
  const paises = ["Аргенти́на", "Испа́ния", "Ме́ксика", "Брази́лия", "Ита́лия", "Фра́нция", "Герма́ния", "Росси́я", "Кита́й", "Япо́ния", "А́нглия", "Кана́да", "Чи́ли", "Колу́мбия", "Перу́", "Уругва́й", "Аме́рика"]
    .map(p => D.sust(p)).filter(Boolean);
  const ciudades = ["Барсело́на", "Мадри́д", "Москва́", "Санкт-Петербу́рг", "Буэ́нос-А́йрес", "Ло́ндон", "Пари́ж", "Берли́н", "Рим"].map(p => D.sust(p)).filter(Boolean);
  u11Conversaciones.paises = paises; u11Conversaciones.ciudades = ciudades;
  out.completas = [
    u11Turnos("Ма́ша", "f", "Conocer a alguien", [
      ["Приве́т! Я Ма́ша. А как тебя́ зову́т?", "¡Hola! Soy Masha. ¿Y tú cómo te llamas?", "Preséntate.", [E("tu nombre", "меня́ зову́т|я")], "Приве́т! Меня́ зову́т Ива́н."],
      ["О́чень прия́тно! Отку́да ты?", "¡Mucho gusto! ¿De dónde eres?", "Di de dónde eres.", [E("de dónde", "из"), E("el país", paises.map(p => p.gen).join("|"))], "Я из Аргенти́ны.", "из + genitivo"],
      ["А где ты живёшь?", "¿Y dónde vives?", "Di dónde vives.", [E("dónde vives", "живу́"), E("la ciudad o el país", ciudades.concat(paises).map(p => "в " + p.prep + "|" + p.prep).join("|"))], "Я живу́ в Барсело́не.", "в + prepositivo"],
      ["Чем ты занима́ешься?", "¿A qué te dedicas?", "Di de qué trabajas o qué estudias.", [E("qué haces", "рабо́таю|учу́сь|студе́нт|студе́нтка|не рабо́таю")], "Я рабо́таю архите́ктором.", "рабо́таю + instrumental"],
      ["Интере́сно! А что ты лю́бишь де́лать?", "¡Qué interesante! ¿Y qué te gusta hacer?", "Di qué te gusta hacer.", [E("qué te gusta", "люблю́|нра́вится")], "Я люблю́ чита́ть и гуля́ть."],
      ["А Росси́я тебе́ нра́вится?", "¿Y te gusta Rusia?", "Da tu opinión.", [E("tu opinión", "нра́вится|люблю́|интере́сно|краси́вая|по-мо́ему|ду́маю|счита́ю")], "Да, о́чень! По-мо́ему, Росси́я о́чень краси́вая."],
      ["Хо́чешь пойти́ в кафе́ в суббо́ту?", "¿Quieres ir a un café el sábado?", "Acepta.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Отли́чно! До суббо́ты!", "¡Genial! ¡Hasta el sábado!", "Despídete.", [E("una despedida", U11_CHAO)], "Пока́! До суббо́ты!"]
    ]),
    u11Turnos("Официа́нтка", "f", "En el restaurante", [
      ["До́брый ве́чер!", "¡Buenas noches!", "Saluda y pide la carta.", [E("la carta", "меню́")], "До́брый ве́чер! Мо́жно меню́, пожа́луйста?"],
      ["Коне́чно. Вот меню́.", "Claro. Aquí tiene la carta.", "Pregunta qué recomienda.", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?", "рекомендова́ть: вы рекоменду́ете"],
      ["Сего́дня о́чень вку́сная ры́ба.", "Hoy el pescado está muy rico.", "Pide el pescado y un té.", [E("el pescado", u11Pedido("ры́ба").formas), E("un té", u11Pedido("чай").formas)], "Хорошо́, я бу́ду ры́бу и чай."],
      ["Что́-нибудь ещё?", "¿Algo más?", "Pide también agua.", [E("agua", u11Pedido("вода́").formas)], "И во́ду, пожа́луйста."],
      ["Вот чай и вода́.", "Aquí tiene el té y el agua.", "Di, con amabilidad, que el té está frío.", [E("que está frío", "холо́дный")], "Извини́те, чай холо́дный."],
      ["Извини́те! Сейча́с принесу́ друго́й.", "¡Ay, disculpe! Ya le traigo otro.", "Agradece.", [E("gracias", "спаси́бо")], "Спаси́бо."],
      ["Вам нра́вится ры́ба?", "¿Le gusta el pescado?", "Di que está muy rico.", [E("que está rico", "вку́сная|вку́сно|нра́вится|о́чень")], "Да, о́чень вку́сная!"],
      ["Спаси́бо!", "¡Gracias!", "Pide la cuenta.", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
      ["Ка́ртой и́ли нали́чными?", "¿Con tarjeta o en efectivo?", "Di que con tarjeta.", [E("con tarjeta", "ка́ртой")], "Ка́ртой."]
    ]),
    u11Turnos("Касси́р", "f", "Un viaje", [
      ["Здра́вствуйте! Куда́ вы е́дете?", "¡Hola! ¿Adónde viaja?", "Pide un billete a San Petersburgo.", [E("el billete", "биле́т"), E("adónde", "до Санкт-Петербу́рга|в Санкт-Петербу́рг")], "Мне ну́жен биле́т до Санкт-Петербу́рга."],
      ["Вот биле́т. По́езд в во́семь часо́в.", "Aquí tiene el billete. El tren sale a las ocho.", "Pregunta dónde está la salida.", [E("dónde", "где"), E("la salida", "вы́ход")], "Спаси́бо. Где вы́ход?"],
      ["Вы́ход там, напра́во.", "La salida está allí, a la derecha.", "Agradece.", [E("gracias", "спаси́бо")], "Спаси́бо!"],
      ["Вам помо́чь?", "¿Lo ayudo?", "(Ya en San Petersburgo.) Pregunta dónde está la estación de metro.", [E("dónde", "где|ищу́|не могу́ найти́"), E("el metro", "метро́|ста́нцию|ста́нция")], "Да, пожа́луйста. Где ста́нция метро́?", "", "Же́нщина", "f"],
      ["Иди́те пря́мо, пото́м нале́во.", "Siga derecho, después a la izquierda.", "No entendiste: pídele que lo repita.", [E("que lo repita", "повтори́те|не понима́ю|ещё раз|повтори́")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста.", "", "Же́нщина", "f"],
      ["Пря́мо, пото́м нале́во. Э́то ря́дом.", "Derecho, después a la izquierda. Está cerca.", "Agradece.", [E("gracias", "спаси́бо")], "Спаси́бо большо́е!", "", "Же́нщина", "f"],
      ["Здра́вствуйте! Куда́ е́дем?", "¡Hola! ¿Adónde vamos?", "(Tomaste un taxi.) Di que vas al centro.", [E("al centro", "в центр|до це́нтра")], "В центр, пожа́луйста.", "", "Такси́ст", "m"],
      ["Хорошо́. Э́то ты́сяча рубле́й.", "Bien. Son mil rublos.", "Pregunta si puedes pagar con tarjeta.", [E("con tarjeta", "ка́ртой")], "Мо́жно ка́ртой?", "", "Такси́ст", "m"],
      ["Коне́чно. Вот центр!", "Claro. ¡Este es el centro!", "Agradece y despídete.", [E("una despedida", U11_CHAO)], "Спаси́бо! До свида́ния!", "", "Такси́ст", "m"]
    ]),
    u11Turnos("Ди́ма", "m", "Quedar con un amigo", [
      ["Приве́т! Что ты де́лаешь в суббо́ту?", "¡Hola! ¿Qué haces el sábado?", "Di que todavía no sabes.", [E("que no sabes", "не зна́ю")], "Приве́т! Ещё не зна́ю. А что?"],
      ["Хо́чешь пойти́ в кино́?", "¿Quieres ir al cine?", "Acepta.", [E("que sí", U11_SI)], "Да, коне́чно!"],
      ["Дава́й встре́тимся в шесть?", "¿Nos encontramos a las seis?", "Propón a las siete.", [E("a las siete", "в семь|в 7")], "Дава́й в семь?"],
      ["Хорошо́, в семь. Где?", "Bueno, a las siete. ¿Dónde?", "Propón encontrarse en el café.", [E("en el café", "в кафе́")], "Дава́й в кафе́."],
      ["Договори́лись!", "¡Quedamos así!", "Confirma y despídete.", [E("que está bien", U11_OK + "|" + U11_CHAO)], "Отли́чно! До суббо́ты!"],
      ["Ты где? Фильм начина́ется в семь!", "(El sábado.) ¿Dónde estás? ¡La película empieza a las siete!", "Avisa que vas a llegar diez minutos tarde.", [E("que llegas tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́! Я опозда́ю на де́сять мину́т."],
      ["Ничего́! Жду.", "¡No pasa nada! Te espero.", "Agradece.", [E("gracias", "спаси́бо")], "Спаси́бо!"]
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
  ["No entendiste lo que te dijeron.", "Я не понима́ю.", "🤷"], ["Te hablaron muy rápido y quieres que lo digan otra vez.", "Повтори́те, пожа́луйста.", "🔁"],
  ["Quieres saber el precio de algo.", "Ско́лько сто́ит?", "🏷️"], ["Te perdiste y necesitas ayuda.", "Помоги́те, пожа́луйста!", "🆘"],
  ["Ves una palabra que no conoces en un cartel.", "Что э́то зна́чит?", "🪧"], ["Quieres saber si en el kiosco tienen agua.", "У вас есть вода́?", "💧"],
  ["Le pisaste el pie a alguien sin querer.", "Извини́те!", "😬"], ["No sabes cómo se dice «tarjeta» en ruso.", "Как сказа́ть «tarjeta» по-ру́сски?", "💬"],
  ["Estás buscando el metro.", "Я ищу́ метро́.", "🚇"], ["En la boletería: necesitas un billete.", "Мне ну́жен биле́т.", "🎫"],
  ["En la oficina de turismo: necesitas un mapa.", "Мне нужна́ ка́рта.", "🗺️"], ["Quieres saber dónde queda el banco.", "Где банк?", "🏦"],
  ["Quieres pedir permiso para sentarte en una silla libre.", "Мо́жно?", "🪑"], ["En un café: quieres un café.", "Мо́жно мне ко́фе?", "☕"]
];
/* ну́жен / нужна́ / ну́жно: [ruso, español] */
const U11_NUZHEN = [["биле́т", "un billete"], ["ка́рта", "un mapa"], ["телефо́н", "un teléfono"], ["ру́чка", "un bolígrafo"], ["слова́рь", "un diccionario"], ["кни́га", "un libro"],
  ["маши́на", "un coche"], ["врач", "un médico"], ["гости́ница", "un hotel"], ["такси́", "un taxi"], ["рабо́тать", "trabajar"], ["отдыха́ть", "descansar"]];
/* Traducción en contexto: [módulo, contexto, español, ruso (o lista)] */
const U11_TRAD = [
  [1, "Al vendedor", "No entiendo.", "Я не понима́ю."], [1, "A alguien que habla rápido", "Repita, por favor.", "Повтори́те, пожа́луйста."],
  [1, "Señalando algo en una tienda", "¿Cuánto cuesta?", "Ско́лько сто́ит?"], [1, "Mirando un cartel", "¿Qué significa esto?", "Что э́то зна́чит?"],
  [1, "En la calle, perdido", "¡Ayúdeme, por favor!", "Помоги́те, пожа́луйста!"], [1, "En un kiosco", "¿Tienen agua?", "У вас есть вода́?"],
  [1, "A un desconocido", "Disculpe, ¿dónde está el banco?", "Извини́те, где банк?"], [1, "En la calle", "Busco el metro.", "Я ищу́ метро́."],
  [2, "Al vendedor", "¿Tienen otro talle?", "У вас есть друго́й разме́р?"], [2, "Al vendedor", "¿Tienen otro color?", "У вас есть друго́й цвет?"],
  [2, "En la caja", "Voy a pagar con tarjeta.", "Я бу́ду плати́ть ка́ртой."], [2, "Al vendedor", "Quiero comprar una camisa.", "Я хочу́ купи́ть руба́шку."],
  [2, "Mirando el precio", "La chaqueta es cara.", "Ку́ртка дорога́я."], [2, "Al pagar", "Aquí tiene.", "Вот, пожа́луйста."],
  [2, "Te preguntan cuánto costó un libro", "Mil rublos.", "Ты́сяча рубле́й."], [2, "El vendedor pregunta", "¿Con tarjeta o en efectivo?", "Ка́ртой и́ли нали́чными?"],
  [3, "Al camarero", "¿Me trae la carta, por favor?", "Мо́жно меню́, пожа́луйста?"], [3, "Al camarero", "La cuenta, por favor.", "Счёт, пожа́луйста."],
  [3, "Al camarero", "¿Qué recomienda?", "Что вы рекоменду́ете?"], [3, "Al camarero", "Voy a querer pescado.", "Я бу́ду ры́бу."],
  [3, "Al camarero", "Tráigame agua, por favor.", "Принеси́те, пожа́луйста, во́ду."], [3, "El camarero pregunta si quieres algo más", "No, gracias.", "Нет, спаси́бо."],
  [3, "Comiendo", "La sopa está muy rica.", "Суп о́чень вку́сный."], [3, "Al camarero", "Disculpe, el té está frío.", "Извини́те, чай холо́дный."],
  [4, "En la calle", "¿Dónde está la parada?", "Где остано́вка?"], [4, "En la boletería", "Necesito un billete a Moscú.", "Мне ну́жен биле́т до Москвы́."],
  [4, "En la estación", "¿Cuándo sale el tren?", "Когда́ отправля́ется по́езд?"], [4, "A un desconocido", "¿Cómo llego al centro?", "Как дое́хать до це́нтра?"],
  [4, "En el aeropuerto", "¿Dónde está la salida?", "Где вы́ход?"], [4, "Al taxista", "Al aeropuerto, por favor.", "В аэропо́рт, пожа́луйста."],
  [4, "A un amigo", "Voy al centro en metro.", "Я е́ду в центр на метро́."], [4, "En la boletería", "¿Cuánto cuesta el billete?", "Ско́лько сто́ит биле́т?"],
  [5, "A un turista", "Siga derecho.", "Иди́те пря́мо."], [5, "A un turista", "Doble a la izquierda.", "Поверни́те нале́во."],
  [5, "A un turista", "Doble a la derecha.", "Поверни́те напра́во."], [5, "A un desconocido", "¿Dónde queda el banco?", "Где нахо́дится банк?"],
  [5, "A un turista", "El banco está cerca.", "Банк ря́дом."], [5, "A un turista", "El museo está lejos.", "Музе́й далеко́."],
  [5, "A un turista", "El café está enfrente de la estación.", "Кафе́ напро́тив ста́нции."], [5, "A un turista", "El banco está entre la tienda y el restaurante.", "Банк ме́жду магази́ном и рестора́ном."],
  [6, "En la recepción", "Tengo un problema.", "У меня́ пробле́ма."], [6, "En la calle", "Disculpe, no encuentro el hotel.", "Извини́те, я не могу́ найти́ гости́ницу."],
  [6, "En el hotel", "El teléfono no funciona.", "Телефо́н не рабо́тает."], [6, "A un amigo", "No tengo dinero.", "У меня́ нет де́нег."],
  [6, "En la estación", "Perdí el tren.", ["Я опозда́л на по́езд.", "Я опозда́ла на по́езд."]], [6, "En la estación", "¿Cuándo sale el próximo tren?", "Когда́ сле́дующий по́езд?"],
  [6, "Pensando en voz alta", "¿Qué hago?", "Что мне де́лать?"], [6, "En la recepción", "Aquí algo no funciona.", "Здесь что́-то не рабо́тает."],
  [7, "A un amigo", "¿Qué haces esta noche?", "Что ты де́лаешь ве́чером?"], [7, "A un amigo", "¿Lo dejamos para mañana?", "Дава́й за́втра?"],
  [7, "A una amiga", "Voy a llegar diez minutos tarde.", "Я опозда́ю на де́сять мину́т."], [7, "A un amigo", "Hoy no puedo.", "Я сего́дня не могу́."],
  [7, "Respondiendo a un plan", "Quedamos así.", "Договори́лись."], [7, "A una amiga", "¿Quieres ir al cine?", "Хо́чешь пойти́ в кино́?"],
  [7, "A un amigo", "Encontrémonos a las siete.", "Дава́й встре́тимся в семь."],
  [8, "En un café", "Prefiero el té.", "Я предпочита́ю чай."], [8, "Hablando de un libro", "Creo que es interesante.", "Я ду́маю, что э́то интере́сно."],
  [8, "Te piden tu opinión", "Para mí, está bien.", "По-мо́ему, э́то хорошо́."], [8, "En el trabajo", "Considero que es importante.", "Я счита́ю, что э́то ва́жно."],
  [8, "En el cine", "No me gusta esta película.", "Мне не нра́вится э́тот фильм."], [8, "Hablando de la ciudad", "El metro es cómodo.", "Метро́ удо́бное."],
  [8, "Hablando de un libro", "El libro es aburrido.", "Кни́га ску́чная."], [8, "Hablando de un viaje", "Me gusta Moscú porque es bonita.", "Мне нра́вится Москва́, потому́ что она́ краси́вая."],
  [9, "Conociendo a alguien", "¿A qué te dedicas?", "Чем ты занима́ешься?"], [9, "Conociendo a alguien", "¿De dónde eres?", "Отку́да ты?"],
  [9, "Conociendo a alguien", "¿Dónde vives?", "Где ты живёшь?"], [9, "Conociendo a alguien", "¿Qué te gusta hacer?", "Что ты лю́бишь де́лать?"],
  [9, "El lunes, a un amigo", "¿Qué hiciste el fin de semana?", "Что ты де́лал на выходны́х?"], [9, "A un amigo", "¿Qué planes tienes?", "Каки́е у тебя́ пла́ны?"],
  [9, "A una amiga", "¿Te gusta Barcelona?", "Тебе́ нра́вится Барсело́на?"], [9, "Contando de ti", "Soy de Argentina, pero ahora vivo en Barcelona.", "Я из Аргенти́ны, но сейча́с живу́ в Барсело́не."]
];
/* Módulo 6: problema → frase */
const U11_PROBLEMAS = [["No encuentras el hotel.", "Я не могу́ найти́ гости́ницу.", "🏨"], ["Tu teléfono no anda.", "Телефо́н не рабо́тает.", "📱"], ["No tienes dinero.", "У меня́ нет де́нег.", "💸"],
  ["No sabes qué hacer.", "Что мне де́лать?", "🤔"], ["Quieres contar que te pasa algo.", "У меня́ пробле́ма.", "⚠️"], ["Algo de la habitación no funciona.", "Здесь что́-то не рабо́тает.", "🔧"],
  ["Perdiste el tren.", "Я опозда́л на по́езд.", "🚆"], ["Quieres saber cuándo sale el próximo tren.", "Когда́ сле́дующий по́езд?", "🕒"]];
/* Versión más natural: [situación, natural, otras] */
const U11_NATURAL = [
  ["Le pides la carta a un camarero.", "Мо́жно меню́, пожа́луйста?", ["Дай меню́!", "Меню́!"]],
  ["Le preguntas a un desconocido dónde está el banco.", "Извини́те, где банк?", ["Где банк?", "Банк?"]],
  ["Le escribes a un amigo para invitarlo al cine.", "Хо́чешь пойти́ в кино́?", ["Хоти́те пойти́ в кино́?", "Кино́."]],
  ["Le pides a la vendedora que lo repita.", "Повтори́те, пожа́луйста.", ["Повтори́!", "Что?"]],
  ["Le pides agua al camarero.", "Принеси́те, пожа́луйста, во́ду.", ["Вода́!", "Принеси́ во́ду!"]],
  ["Le avisas a una amiga que llegas tarde.", "Извини́, я опозда́ю на де́сять мину́т.", ["Я опозда́ю.", "Извини́те, я опозда́ю на де́сять мину́т."]],
  ["Le dices al camarero que el té está frío.", "Извини́те, чай холо́дный.", ["Чай холо́дный!", "Плохо́й чай!"]],
  ["Cancelas un plan con un amigo.", "Извини́, я сего́дня не могу́. Дава́й за́втра?", ["Нет.", "Я не могу́."]],
  ["Le pides la cuenta al camarero.", "Счёт, пожа́луйста.", ["Счёт!", "Дай счёт!"]],
  ["Le agradeces al taxista y te despides.", "Спаси́бо! До свида́ния!", ["Пока́!", "Хорошо́."]]
];
/* Módulo 8: cosa + adjetivo [sustantivo, adjetivo, español] */
const U11_ADJ = [["фильм", "интере́сный", "La película es interesante."], ["кни́га", "ску́чный", "El libro es aburrido."], ["го́род", "краси́вый", "La ciudad es bonita."],
  ["суп", "вку́сный", "La sopa está rica."], ["метро́", "удо́бный", "El metro es cómodo."], ["рабо́та", "ва́жный", "El trabajo es importante."], ["Москва́", "краси́вый", "Moscú es bonita."],
  ["рестора́н", "хоро́ший", "El restaurante es bueno."], ["пи́цца", "вку́сный", "La pizza está rica."], ["кварти́ра", "удо́бный", "El apartamento es cómodo."],
  ["му́зыка", "интере́сный", "La música es interesante."], ["по́езд", "удо́бный", "El tren es cómodo."], ["ры́ба", "вку́сный", "El pescado está rico."], ["кафе́", "хоро́ший", "El café es bueno."]];
/* Comprensión: diálogos que se escuchan */
const U11_COMPRENSION = [
  { id: "cafe", lineas: ["— Здра́вствуйте! Что вы хоти́те?", "— Я бу́ду суп и чай.", "— Что́-нибудь ещё?", "— Нет, спаси́бо."],
    preguntas: [["¿Qué pide el cliente?", "Sopa y té", ["Ensalada y café", "Pescado y agua"]], ["¿Quiere algo más?", "No", ["Sí, agua", "Sí, pan"]]] },
  { id: "tienda", lineas: ["— Ско́лько сто́ит руба́шка?", "— Ты́сяча рубле́й.", "— У вас есть друго́й цвет?", "— Да, вот.", "— Я бу́ду плати́ть ка́ртой."],
    preguntas: [["¿Cuánto cuesta la camisa?", "Mil rublos", ["Cien rublos", "Diez rublos"]], ["¿Qué pregunta el cliente?", "Si hay otro color", ["Si hay otro talle", "Dónde está la caja"]], ["¿Cómo paga?", "Con tarjeta", ["En efectivo", "No paga"]]] },
  { id: "calle", lineas: ["— Извини́те, где банк?", "— Иди́те пря́мо, пото́м поверни́те нале́во.", "— Э́то далеко́?", "— Нет, ря́дом."],
    preguntas: [["¿Qué busca la persona?", "El banco", ["El metro", "El hotel"]], ["¿Hacia dónde tiene que doblar?", "A la izquierda", ["A la derecha", "No dobla"]], ["¿Está lejos?", "No, está cerca", ["Sí, muy lejos", "No lo sabe"]]] },
  { id: "chat", lineas: ["— Приве́т! Мы сего́дня идём в кино́?", "— Извини́, я сего́дня не могу́. Мне ну́жно рабо́тать.", "— Хорошо́. Дава́й за́втра?", "— Дава́й! В семь."],
    preguntas: [["¿Por qué no puede hoy?", "Tiene que trabajar", ["No le gusta el cine", "No tiene dinero"]], ["¿Cuándo van al cine?", "Mañana a las siete", ["Hoy a las siete", "El sábado"]]] },
  { id: "estacion", lineas: ["— Мне ну́жен биле́т до Москвы́.", "— На сего́дня?", "— Нет, на за́втра.", "— Хорошо́. По́езд отправля́ется в де́вять часо́в."],
    preguntas: [["¿Adónde viaja?", "A Moscú", ["A San Petersburgo", "Al aeropuerto"]], ["¿Para cuándo es el billete?", "Para mañana", ["Para hoy", "Para el sábado"]], ["¿A qué hora sale el tren?", "A las nueve", ["A las diez", "A las ocho"]]] },
  { id: "hotel", lineas: ["— Здра́вствуйте! У меня́ пробле́ма.", "— Кака́я пробле́ма?", "— Телефо́н не рабо́тает.", "— Извини́те! Я вам помогу́."],
    preguntas: [["¿Qué problema tiene?", "No funciona el teléfono", ["No tiene dinero", "Perdió el tren"]], ["¿Qué le responden?", "Que lo van a ayudar", ["Que no pueden hacer nada", "Que vuelva mañana"]]] }
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
      pide: ctx + ". Di en ruso: «" + es + "»", audio: l[0], audioManual: true, esperadas: l, idioma: "ru", explicacion: l[0] + " — " + es });
    out.push({ id: "U11-dc-" + id, tipo: "dictado", forma: "escribir", dificultad: 2, modulo, grupo: "DC-" + id, items: [], pide: "Escucha y escribe.", audio: l[0], esperadas: [l[0]], idioma: "ru", explicacion: l[0] + " — " + es }); };

  /* ── Módulo 1: sobrevivir ── */
  U11_EXPR.forEach(([sit, ru, esc], j) => {
    const otras = baraja(U11_EXPR.filter(x => x[1] !== ru), j * 3).slice(0, 2).map(x => x[1]);
    out.push({ id: "U11-ex-" + j, tipo: "elegir-expr", forma: "elegir", dificultad: 1, modulo: 1, grupo: "EX-" + j, items: [], escena: esc, pide: sit + " ¿Qué dices?",
      opciones: baraja([ru].concat(otras), j), correcta: ru, oir: ru, explicacion: "**" + ru + "**" });
  });
  [
    ["No entendiste lo que te dijo el vendedor. ¿Qué le dices?", "🤷", [E("que no entiendes", "не понима́ю|не по́нял|не поняла́")], "Извини́те, я не понима́ю."],
    ["Te hablaron muy rápido. Pide que lo repitan.", "🔁", [E("que lo repitan", "повтори́те|повтори́|ещё раз")], "Повтори́те, пожа́луйста."],
    ["Quieres saber cuánto cuesta el pan.", "🍞", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el pan", "хлеб")], "Ско́лько сто́ит хлеб?"],
    ["En un kiosco: pregunta si tienen agua.", "💧", [E("si tienen", "у вас есть|есть"), E("agua", "вода́")], "У вас есть вода́?"],
    ["En la boletería: di que necesitas un billete.", "🎫", [E("que lo necesitas o lo quieres", "ну́жен|ну́жно|хочу́|мо́жно|да́йте"), E("un billete", "биле́т")], "Мне ну́жен биле́т."],
    ["Te perdiste. Pide ayuda.", "🆘", [E("un pedido de ayuda", "помоги́те|помоги́")], "Извини́те, помоги́те, пожа́луйста!"],
    ["Ves una palabra en un cartel y no sabes qué es. Pregunta qué significa.", "🪧", [E("qué significa", "что э́то зна́чит|что зна́чит")], "Что э́то зна́чит?"],
    ["Buscas el metro. Pregúntale a alguien.", "🚇", [E("que lo buscas o dónde está", "ищу́|где"), E("el metro", "метро́")], "Извини́те, где метро́?"],
    ["Necesitas un mapa de la ciudad. Pídelo.", "🗺️", [E("que lo necesitas o lo quieres", "нужна́|ну́жно|хочу́|мо́жно|да́йте|есть"), E("un mapa", "ка́рта|ка́рту")], "Мне нужна́ ка́рта."],
    ["No sabes cómo se dice «cuchara» en ruso. Pregúntalo.", "🥄", [E("cómo se dice", "как сказа́ть|как бу́дет")], "Как сказа́ть «cuchara» по-ру́сски?"],
    ["En un café: pide un café.", "☕", [E("un café", "ко́фе")], "Мо́жно мне ко́фе, пожа́луйста?"],
    ["Quieres saber dónde queda el banco.", "🏦", [E("dónde", "где"), E("el banco", "банк")], "Извини́те, где банк?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s1-" + j, "situacion", 1, { pide, escena: esc, nec, modelo, grupo: "S1-" + j }));
  U11_NUZHEN.forEach(([ru, es], j) => {
    const verbo = /ть$/.test(ru), s = verbo ? null : D.sust(ru);
    const f = verbo ? "ну́жно" : s.g === "f" ? "нужна́" : s.g === "m" ? "ну́жен" : "ну́жно";
    const frase = "Мне " + f + " " + ru + ".", esF = "Necesito " + es + ".";
    out.push({ id: "U11-nz-" + j, tipo: "nuzhen", forma: "elegir", dificultad: 1, modulo: 1, grupo: "NZ-" + j, items: [], pide: "Completa: «" + (verbo ? "Tengo que " + es : esF) + "»",
      grande: "Мне _____ " + ru + ".", opciones: ["ну́жен", "нужна́", "ну́жно"], correcta: f, oir: frase,
      explicacion: "**" + frase + "**: " + (verbo ? "con un verbo va ну́жно." : f === "ну́жен" ? ru + " es masculina." : f === "нужна́" ? ru + " es femenina." : ru + " es neutra.") });
    out.push({ id: "U11-nzw-" + j, tipo: "traduccion", forma: "escribir", dificultad: 2, modulo: 1, grupo: "NZw-" + j, items: [], pide: "Di en ruso: «" + (verbo ? "Tengo que " + es : esF) + "»",
      audio: frase, audioManual: true, esperadas: [frase], idioma: "ru", oir: frase, explicacion: frase });
  });

  /* ── Módulo 2: tienda ── */
  for (let n = 1; n <= 12; n++) {
    const f = n === 1 ? "рубль" : n <= 4 ? "рубля́" : "рубле́й", fr = U11_NUM[n] + " " + f;
    out.push({ id: "U11-pr-" + n, tipo: "precio", forma: "elegir", dificultad: 1, modulo: 2, grupo: "PR-" + n, items: [], pide: "Completa el precio: " + n + " ₽",
      grande: U11_NUM[n] + " _____", opciones: ["рубль", "рубля́", "рубле́й"], correcta: f, oir: fr, explicacion: "**" + fr + "**: " + (n === 1 ? "con 1, рубль." : n <= 4 ? "con 2, 3 y 4, рубля́." : "con 5 o más, рубле́й.") });
    out.push({ id: "U11-prw-" + n, tipo: "precio", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PRw-" + n, items: [], pide: "Escribe en ruso: «Cuesta " + n + " " + (n === 1 ? "rublo" : "rublos") + ".»",
      audio: "Сто́ит " + fr + ".", audioManual: true, esperadas: ["Сто́ит " + fr + ".", "Сто́ит " + n + " " + f + "."], idioma: "ru", oir: "Сто́ит " + fr + ".", explicacion: "Сто́ит " + fr + "." });
  }
  [["сто рубле́й", "100 ₽"], ["ты́сяча рубле́й", "1000 ₽"]].forEach(([ru, n], j) =>
    out.push({ id: "U11-prg-" + j, tipo: "precio", forma: "escribir", dificultad: 2, modulo: 2, grupo: "PRg-" + j, items: [], pide: "Escribe el precio en ruso: " + n,
      audio: ru, audioManual: true, esperadas: [ru], idioma: "ru", oir: ru, explicacion: ru + " — " + n }));
  [["Ко́фе сто́ит сто рубле́й.", "100 ₽", ["10 ₽", "1000 ₽"]], ["Кни́га сто́ит ты́сяча рубле́й.", "1000 ₽", ["100 ₽", "10 ₽"]], ["Хлеб сто́ит пять рубле́й.", "5 ₽", ["4 ₽", "500 ₽"]],
   ["Ру́чка сто́ит три рубля́.", "3 ₽", ["13 ₽", "300 ₽"]], ["Вода́ сто́ит два рубля́.", "2 ₽", ["12 ₽", "200 ₽"]], ["Биле́т сто́ит де́сять рубле́й.", "10 ₽", ["100 ₽", "2 ₽"]],
   ["Сок сто́ит оди́н рубль.", "1 ₽", ["11 ₽", "100 ₽"]], ["Чай сто́ит семь рубле́й.", "7 ₽", ["8 ₽", "6 ₽"]]].forEach(([ru, ok, malas], j) =>
    out.push({ id: "U11-pra-" + j, tipo: "precio", forma: "elegir", dificultad: 2, modulo: 2, grupo: "PRa-" + j, items: [], pide: "Escucha. ¿Cuánto cuesta?", audio: ru,
      opciones: baraja([ok].concat(malas), j), correcta: ok, explicacion: ru + " — " + ok }));
  U11_COMPRAS.forEach(([ru, es], j) => { const s = D.sust(ru), nz = s.g === "f" ? "нужна́" : s.g === "m" ? "ну́жен" : "ну́жно";
    situ("s2c-" + j, "situacion", 2, { pide: "En una tienda: dile a la vendedora que quieres comprar " + es + ".", escena: "🛍️",
      nec: [E(es, "хочу́ купи́ть " + s.acc + "|хочу́ " + s.acc + "|ищу́ " + s.acc + "|мне " + nz + " " + s.nom + "|" + s.acc + "|~" + s.nom)], modelo: "Я хочу́ купи́ть " + s.acc + ".", grupo: "S2c-" + j }); });
  [
    ["Pregunta cuánto cuesta la camisa.", "🏷️", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("la camisa", "руба́шка")], "Ско́лько сто́ит руба́шка?"],
    ["Pregunta cuánto cuesta el bolso.", "👜", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el bolso", "су́мка")], "Ско́лько сто́ит су́мка?"],
    ["La chaqueta te queda chica. Pregunta si tienen otro talle.", "🧥", [E("si tienen", "у вас есть|есть|мо́жно"), E("otro talle", "друго́й разме́р")], "У вас есть друго́й разме́р?"],
    ["No te gusta el color. Pregunta si tienen otro.", "🎨", [E("si tienen", "у вас есть|есть|мо́жно"), E("otro color", "друго́й цвет")], "У вас есть друго́й цвет?"],
    ["En la caja: di que vas a pagar con tarjeta.", "💳", [E("con tarjeta", "ка́ртой")], "Я бу́ду плати́ть ка́ртой."],
    ["En la caja: di que pagas en efectivo.", "💵", [E("en efectivo", "нали́чными")], "Нали́чными, пожа́луйста."],
    ["Miras el precio de una camisa: di que es cara.", "😮", [E("que es cara", "дорога́я|до́рого")], "Руба́шка дорога́я."],
    ["Miras el precio de una chaqueta: di que es barata.", "🙂", [E("que es barata", "дешёвая|дёшево")], "Ку́ртка дешёвая."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s2-" + j, "situacion", 2, { pide, escena: esc, nec, modelo, grupo: "S2-" + j }));

  /* ── Módulo 3: café ── */
  [[0, 5], [1, 6], [2, 8], [3, 7], [4, 9], [5, 9], [6, 1], [7, 0], [8, 2], [9, 3]].forEach(([a, b], j) => {
    const A = U11_COMIDA[a], B = U11_COMIDA[b], pa = u11Pedido(A[0]), pb = u11Pedido(B[0]);
    situ("s3p-" + j, "situacion", 3, { pide: "Estás en un café. Pide " + A[1] + " y " + B[1] + ".", escena: A[2] + " " + B[2],
      nec: [E(A[1], pa.formas), E(B[1], pb.formas)], modelo: "Я бу́ду " + pa.acc + " и " + pb.acc + ".", nota: "Lo que pides va en acusativo.", grupo: "S3p-" + j });
  });
  [
    ["Te sentaste en un café. Pide la carta.", "📋", [E("la carta", "меню́")], "Мо́жно меню́, пожа́луйста?"],
    ["Terminaste de comer. Pide la cuenta.", "🧾", [E("la cuenta", "счёт")], "Счёт, пожа́луйста."],
    ["No sabes qué elegir. Pregúntale al camarero qué recomienda.", "🤔", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?"],
    ["Probaste la sopa: di que está muy rica.", "🍲", [E("que está rica", "вку́сный|вку́сно")], "Суп о́чень вку́сный!"],
    ["El camarero pregunta «Что́-нибудь ещё?». Di que no, gracias.", "🙅", [E("que no", "нет")], "Нет, спаси́бо."],
    ["Te trajeron el café frío. Avísale al camarero con amabilidad.", "☕", [E("que está frío", "холо́дный|холо́дное")], "Извини́те, ко́фе холо́дный."],
    ["Quieres pedir ya. Pregunta si puedes pedir.", "🙋", [E("si puedes pedir", "мо́жно заказа́ть|заказа́ть|зака́з")], "Мо́жно заказа́ть?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s3-" + j, "situacion", 3, { pide, escena: esc, nec, modelo, grupo: "S3-" + j }));
  /* Reconstruir el diálogo del café */
  [["ко́фе", "сала́т"], ["суп", "чай"]].forEach(([a, b], j) => { const l = ["Здра́вствуйте. Мо́жно меню́, пожа́луйста?", "Коне́чно.", "Я бу́ду " + u11Pedido(a).acc + " и " + u11Pedido(b).acc + ".", "Что́-нибудь ещё?", "Нет, спаси́бо.", "Счёт, пожа́луйста."];
    out.push({ id: "U11-ord-" + j, tipo: "ordenar-dlg", forma: "ordenar", bloques: true, sep: "\n", dificultad: 2, modulo: 3, grupo: "OR-" + j, items: [], pide: "Ordena la conversación en el café.",
      fichas: baraja(l, 2 + j), esperada: l.join("\n"), explicacion: l.join(" / ") }); });

  /* ── Módulo 4: transporte ── */
  [
    ["Quieres tomar el autobús. Pregunta dónde está la parada.", "🚌", [E("dónde", "где"), E("la parada", "остано́вка")], "Извини́те, где остано́вка?"],
    ["Pregunta dónde está la estación de metro.", "🚇", [E("dónde", "где|ищу́"), E("el metro", "ста́нция метро́|метро́|~ста́нция")], "Где ста́нция метро́?"],
    ["Pregunta cómo llegar al centro.", "🏙️", [E("cómo llegar", "как дое́хать|как"), E("al centro", "до це́нтра|в центр|~центр")], "Как дое́хать до це́нтра?"],
    ["En la boletería: pide un billete a Moscú.", "🎫", [E("el billete", "биле́т"), E("adónde", "до Москвы́|в Москву́|~Москва́")], "Мне ну́жен биле́т до Москвы́."],
    ["Pregunta cuánto cuesta el billete.", "🎫", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el billete", "биле́т")], "Ско́лько сто́ит биле́т?"],
    ["Pregunta cuándo sale el tren.", "🚆", [E("cuándo", "когда́"), E("el tren", "по́езд|отправля́ется")], "Когда́ отправля́ется по́езд?"],
    ["Estás en el aeropuerto. Pregunta dónde está la salida.", "🚪", [E("dónde", "где"), E("la salida", "вы́ход")], "Где вы́ход?"],
    ["Estás frente al museo. Pregunta dónde está la entrada.", "🚪", [E("dónde", "где"), E("la entrada", "вход")], "Где вход?"]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s4-" + j, "situacion", 4, { pide, escena: esc, nec, modelo, grupo: "S4-" + j }));
  [["в аэропо́рт", "al aeropuerto", "✈️"], ["на вокза́л", "a la estación de tren", "🚉"], ["в гости́ницу", "al hotel", "🏨"], ["в центр", "al centro", "🏙️"]].forEach(([ru, es, esc], j) => {
    const w = ru.split(" ")[1];
    situ("s4t-" + j, "situacion", 4, { pide: "El taxista te pregunta adónde vas. Di que vas " + es + ".", escena: "🚕" + esc, contexto: [{ p: "Такси́ст", ru: "Здра́вствуйте! Куда́ е́дем?" }],
      nec: [E("adónde", ru + "|~" + w)], modelo: u11Cap(ru) + ", пожа́луйста.", grupo: "S4t-" + j });
  });
  /* Где / куда́ / отку́да con las formas de Casos */
  [["аэропо́рт", "в"], ["вокза́л", "на"], ["гости́ница", "в"], ["центр", "в"], ["Москва́", "в"], ["ста́нция", "на"]].forEach(([ru, pr], j) => {
    const s = D.sust(ru), op = [s.nom, s.acc, s.prep, s.gen].filter((x, i, a) => a.indexOf(x) === i);
    const tres = (corr) => baraja(op.filter(x => x !== corr).slice(0, 2).concat(corr), j);
    out.push({ id: "U11-dg-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DG-" + j, items: [], pide: "¿Dónde? Completa.", grande: "Я " + pr + " _____.",
      opciones: tres(s.prep), correcta: s.prep, oir: "Я " + pr + " " + s.prep + ".", explicacion: "**Я " + pr + " " + s.prep + "**: ¿dónde? → prepositivo." });
    out.push({ id: "U11-dk-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DK-" + j, items: [], pide: "¿Adónde? Completa.", grande: "Я е́ду " + pr + " _____.",
      opciones: tres(s.acc).length === 3 ? tres(s.acc) : baraja([s.acc, s.prep, s.gen], j), correcta: s.acc, oir: "Я е́ду " + pr + " " + s.acc + ".", explicacion: "**Я е́ду " + pr + " " + s.acc + "**: ¿adónde? → acusativo." });
    if (pr === "в") out.push({ id: "U11-do-" + j, tipo: "donde", forma: "elegir", dificultad: 2, modulo: 4, grupo: "DO-" + j, items: [], pide: "¿De dónde? Completa.", grande: "Я е́ду из _____.",
      opciones: baraja([s.gen, s.prep, s.acc].filter((x, i, a) => a.indexOf(x) === i), j), correcta: s.gen, oir: "Я е́ду из " + s.gen + ".", explicacion: "**из " + s.gen + "**: ¿de dónde? → genitivo." });
  });

  /* ── Módulo 5: direcciones ── */
  const giro = m => m === "R" ? ["напра́во", "a la derecha"] : ["нале́во", "a la izquierda"];
  const frasesRuta = r => { const g = r.split(" ").filter(m => m === "R" || m === "L").map(giro);
    return "Иди́те пря́мо" + g.map(x => ", пото́м поверни́те " + x[0]).join("") + "."; };
  U11_RUTAS.forEach((r, j) => {
    const L = U11_LUGARES[j % U11_LUGARES.length], g = r.split(" ").filter(m => m === "R" || m === "L").map(giro), modelo = frasesRuta(r);
    situ("rt-" + j, "ruta", 5, { pide: "Un turista te pregunta por " + L[2] + ". Explícale el camino del plano.", contexto: [{ p: "Тури́ст", ru: "Извини́те, где " + L[1] + "?" }],
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
    out.push({ id: "U11-ub-" + j, tipo: "ubicacion", forma: "elegir", dificultad: 2, modulo: 5, grupo: "UB-" + j, items: [], pide: "Mira la calle. ¿Dónde está " + B[2].replace(/^(el|la) /, "$1 ") + "?",
      grande: A[0] + " " + B[0] + " " + Cc[0], opciones: baraja([ok].concat(malas), j), correcta: ok, oir: ok, explicacion: "**" + ok + "**: ме́жду + instrumental." });
    situ("ubs-" + j, "situacion", 5, { pide: "Explícale a un turista dónde está " + B[2] + ": entre " + A[2] + " y " + Cc[2] + ".", escena: A[0] + " " + B[0] + " " + Cc[0],
      nec: [E("entre", "ме́жду"), E(A[2], sa.ins), E(Cc[2], sc.ins)], modelo: ok, nota: "ме́жду va con instrumental.", grupo: "UBs-" + j });
  });

  /* ── Módulo 6: problemas ── */
  U11_PROBLEMAS.forEach(([sit, ru, esc], j) => {
    const otras = baraja(U11_PROBLEMAS.filter(x => x[1] !== ru), j * 2).slice(0, 2).map(x => x[1]);
    out.push({ id: "U11-pb-" + j, tipo: "elegir-expr", forma: "elegir", dificultad: 1, modulo: 6, grupo: "PB-" + j, items: [], escena: esc, pide: sit + " ¿Qué dices?",
      opciones: baraja([ru].concat(otras), j), correcta: ru, oir: ru, explicacion: "**" + ru + "**" });
  });
  [
    ["No encuentras tu hotel. Pídele ayuda a alguien en la calle.", "🏨", [E("qué buscas", "не могу́ найти́ гости́ницу|ищу́ гости́ницу|где гости́ница|~гости́ница")], "Извини́те, я не могу́ найти́ гости́ницу."],
    ["Tu teléfono no anda. Cuéntalo en la recepción.", "📱", [E("el teléfono", "телефо́н"), E("que no funciona", "не рабо́тает")], "Телефо́н не рабо́тает."],
    ["Quieres tomar un taxi, pero no tienes dinero. Cuéntaselo a un amigo.", "💸", [E("que no tienes dinero", "нет де́нег")], "У меня́ нет де́нег."],
    ["Perdiste el tren. Pregunta en la boletería cuándo sale el próximo.", "🚆", [E("cuándo", "когда́"), E("el próximo", "сле́дующий|по́езд")], "Когда́ сле́дующий по́езд?"],
    ["En la habitación del hotel algo no funciona. Avisa en la recepción.", "🔧", [E("que hay un problema", "не рабо́тает|пробле́ма")], "Здесь что́-то не рабо́тает."],
    ["No sabes qué hacer. Pregúntale a la persona de la boletería.", "🤔", [E("qué hacer", "что мне де́лать|что де́лать")], "Что мне де́лать?"],
    ["Buscas la estación de metro y no la encuentras.", "🚇", [E("qué buscas", "не могу́ найти́ ста́нцию|ищу́ ста́нцию|ищу́ метро́|где ста́нция|где метро́|~метро́|~ста́нция")], "Извини́те, я не могу́ найти́ ста́нцию метро́."],
    ["Llegas a la recepción. Di que tienes un problema.", "⚠️", [E("que tienes un problema", "пробле́ма")], "У меня́ пробле́ма."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s6-" + j, "situacion", 6, { pide, escena: esc, nec, modelo, grupo: "S6-" + j }));

  /* ── Módulo 7: mensajes ── */
  [
    ["Escríbele a un amigo: hoy no puedes; propón mañana.", [E("que no puedes", "не могу́"), E("otro día", "за́втра")], "Приве́т! Извини́, я сего́дня не могу́. Дава́й за́втра?"],
    ["Escríbele a una amiga para invitarla al cine.", [E("la invitación", "хо́чешь|дава́й|пойдём"), E("al cine", "в кино́|кино́")], "Приве́т! Хо́чешь пойти́ в кино́?"],
    ["Avísale a un amigo que vas a llegar diez minutos tarde.", [E("que llegas tarde", "опозда́ю"), E("diez minutos", "на де́сять мину́т|на 10 мину́т|де́сять мину́т|10 мину́т")], "Извини́, я опозда́ю на де́сять мину́т."],
    ["Confírmale a una amiga el encuentro de mañana a las siete.", [E("que está bien", U11_OK), E("a las siete", "в семь|в 7")], "Хорошо́, за́втра в семь. Договори́лись!"],
    ["Proponle a un amigo encontrarse a las ocho en el café.", [E("a las ocho", "в во́семь|в 8"), E("en el café", "в кафе́")], "Дава́й встре́тимся в во́семь в кафе́?"],
    ["Cancela el encuentro del sábado y propón el domingo.", [E("que no puedes", "не могу́"), E("el domingo", "в воскресе́нье|воскресе́нье")], "Извини́, в суббо́ту я не могу́. Дава́й в воскресе́нье?"]
  ].forEach(([pide, nec, modelo], j) => situ("ms-" + j, "mensaje", 7, { pide, escena: "💬", nec, modelo, grupo: "MS-" + j, dif: 3 }));

  /* ── Módulo 8: opiniones ── */
  U11_ADJ.forEach(([sus, adj, es], j) => {
    const s = D.sust(sus), a = D.adj(adj); if (!s || !a) return;
    const g = s.g === "f" ? "f" : s.g === "n" || s.indecl ? "n" : "m", ok = a[g], fr = u11Cap(s.nom) + " " + ok + ".";
    out.push({ id: "U11-cc-" + j, tipo: "concordancia", forma: "elegir", dificultad: 1, modulo: 8, grupo: "CC-" + j, items: [], pide: "Completa: «" + es + "»", grande: u11Cap(s.nom) + " _____.",
      opciones: [a.m, a.f, a.n], correcta: ok, oir: fr, explicacion: "**" + fr + "**: " + s.nom + " es " + { m: "masculina", f: "femenina", n: "neutra" }[g] + "." });
  });
  const OPI = "по-мо́ему|ду́маю|счита́ю|нра́вится|люблю́";
  [
    ["Un amigo te pregunta qué te parece Moscú. Di que te gusta y que es bonita.", "🏙️", [E("que te gusta", "нра́вится|люблю́"), E("que es bonita", "краси́вая|краси́во")], "Мне о́чень нра́вится Москва́. Она́ краси́вая."],
    ["Te ofrecen café, pero prefieres té. Dilo.", "🍵", [E("que prefieres", "предпочита́ю|хочу́|люблю́|нра́вится"), E("el té", "чай")], "Спаси́бо, я предпочита́ю чай."],
    ["Da tu opinión sobre el metro: es cómodo.", "🚇", [E("que es cómodo", "удо́бное|удо́бно")], "По-мо́ему, метро́ удо́бное."],
    ["Di que no te gusta la película porque es aburrida.", "🎬", [E("que no te gusta", "не нра́вится|не люблю́"), E("por qué", "потому́ что"), E("que es aburrida", "ску́чный|ску́чно")], "Мне не нра́вится э́тот фильм, потому́ что он ску́чный."],
    ["Di que, para ti, el trabajo es importante.", "💼", [E("tu opinión", OPI), E("que es importante", "ва́жная|ва́жно")], "Я счита́ю, что рабо́та ва́жная."],
    ["Di que te gusta el restaurante porque la comida es rica.", "🍽️", [E("que te gusta", "нра́вится|люблю́"), E("por qué", "потому́ что"), E("que es rica", "вку́сная|вку́сно")], "Мне нра́вится э́тот рестора́н, потому́ что еда́ вку́сная."],
    ["Te preguntan si prefieres café o té. Contesta.", "☕", [E("qué prefieres", "предпочита́ю|люблю́|хочу́|нра́вится"), E("café o té", "ко́фе|чай")], "Я предпочита́ю ко́фе."],
    ["Opina sobre Barcelona.", "🌇", [E("tu opinión", OPI + "|краси́вая|интере́сная")], "По-мо́ему, Барсело́на о́чень краси́вая."],
    ["Di que crees que el ruso es interesante.", "📚", [E("tu opinión", "ду́маю|счита́ю|по-мо́ему"), E("que es interesante", "интере́сный|интере́сно")], "Я ду́маю, что ру́сский язы́к интере́сный."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s8-" + j, "situacion", 8, { pide, escena: esc, nec, modelo, grupo: "S8-" + j }));

  /* ── Módulo 9: socializar ── */
  const P = u11Conversaciones.paises, Cd = u11Conversaciones.ciudades;
  const LUGAR = Cd.concat(P).map(p => "в " + p.prep + "|" + p.prep).join("|");
  [
    ["Чем ты занима́ешься?", "Contesta a qué te dedicas.", [E("qué haces", "рабо́таю|учу́сь|студе́нт|студе́нтка|не рабо́таю")], "Я рабо́таю архите́ктором."],
    ["Где ты рабо́таешь?", "Contesta dónde trabajas.", [E("dónde trabajas", "рабо́таю|не рабо́таю|учу́сь")], "Я рабо́таю в ба́нке."],
    ["Отку́да ты?", "Contesta de dónde eres.", [E("de dónde", "из"), E("el país", P.map(p => p.gen).join("|"))], "Я из Аргенти́ны."],
    ["Где ты живёшь?", "Contesta dónde vives.", [E("dónde vives", "живу́"), E("la ciudad o el país", LUGAR)], "Я живу́ в Барсело́не."],
    ["Что ты лю́бишь де́лать?", "Contesta qué te gusta hacer.", [E("qué te gusta", "люблю́|нра́вится")], "Я люблю́ чита́ть и гуля́ть."],
    ["Что ты де́лал на выходны́х?", "Cuenta qué hiciste el fin de semana.", [E("algo en pasado", "", D.rxPasado, "Se entiende, pero la pregunta es qué hiciste: hay que usar el pasado (гуля́л, смотре́л…).")], "Я гуля́л в па́рке и смотре́л фильм."],
    ["Каки́е у тебя́ пла́ны?", "Cuenta un plan.", [E("un plan", "бу́ду|пойду́|пое́ду|хочу́|плани́рую|собира́юсь", null, "Se entiende, pero la pregunta es por tus planes: hay que usar el futuro (бу́ду + infinitivo, пойду́, пое́ду) o хочу́ / плани́рую…")], "За́втра я бу́ду рабо́тать, а ве́чером пойду́ в кино́."],
    ["Тебе́ нра́вится Барсело́на?", "Contesta y da una razón.", [E("tu respuesta", "да|нет|нра́вится|о́чень"), E("una razón", "потому́ что")], "Да, о́чень нра́вится, потому́ что э́то краси́вый го́род."],
    ["Я из Москвы́. А ты?", "Contesta de dónde eres y devuelve la pregunta: dónde vive.", [E("de dónde eres", "из"), E("la pregunta", "где ты живёшь|а ты|где живёшь")], "Я из Аргенти́ны. А где ты живёшь?"]
  ].forEach(([q, tarea, nec, modelo], j) => situ("s9-" + j, "situacion", 9, { pide: tarea, contexto: [{ p: "Ма́ша", ru: q }], audio: q, audioManual: true, nec, modelo, grupo: "S9-" + j, dif: 3 }));
  [[["Чем ты занима́ешься?", "Я учу́сь."], ["Отку́да ты?", "Я из Испа́нии."], ["Где ты живёшь?", "Я живу́ в Мадри́де."], ["Каки́е у тебя́ пла́ны?", "За́втра я пое́ду в Москву́."]],
   [["Что ты лю́бишь де́лать?", "Я люблю́ гуля́ть."], ["Где ты рабо́таешь?", "Я рабо́таю в ба́нке."], ["Тебе́ нра́вится Барсело́на?", "Да, о́чень!"], ["Что ты де́лал на выходны́х?", "Я смотре́л фильм."]]]
    .forEach((pares, j) => out.push({ id: "U11-em-" + j, tipo: "emparejar", forma: "emparejar", dificultad: 2, modulo: 9, grupo: "EM-" + j, items: [], pide: "Une cada pregunta con su respuesta.", pares, explicacion: pares.map(p => p.join(" — ")).join(" · ") }));

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
        pide: "Completa la conversación: " + st.tarea.charAt(0).toLowerCase() + st.tarea.slice(1), opciones: baraja([ok].concat(baraja(otras, k).slice(0, 2)), k), correcta: ok, oir: ok,
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
    ["Llegaste tarde a la clase. ¿Qué le dices a la profesora?", "⏰", [E("perdón", "извини́те|извини́|прости́те"), E("que llegaste tarde", "опозда́л|опозда́ла")], "Извини́те, я опозда́л."],
    ["El taxista te dijo algo y no lo entendiste.", "🚕", [E("que no entendiste", "не понима́ю|повтори́те|ещё раз")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста."],
    ["Compraste una camisa y te queda chica. Pide otro talle.", "👕", [E("otro talle", "друго́й разме́р")], "Извини́те, мо́жно друго́й разме́р?"],
    ["Estás en Moscú. Tienes que llegar a la estación de tren y no sabes dónde está. Pregúntale a alguien.", "🚉", [E("la pregunta", "где|как дое́хать|ищу́|не могу́ найти́"), E("la estación", "вокза́л|до вокза́ла|~ста́нция")], "Извини́те, где вокза́л?"],
    ["En el restaurante, quieres una recomendación.", "🍽️", [E("qué recomienda", "рекоменду́ете|сове́туете")], "Что вы рекоменду́ете?"],
    ["Quieres invitar a una amiga a tomar un café.", "☕", [E("la invitación", "хо́чешь|дава́й|пойдём"), E("el café", "кафе́|ко́фе")], "Хо́чешь пойти́ в кафе́?"],
    ["Tienes que cancelar el plan de hoy con un amigo.", "📵", [E("que no puedes", "не могу́")], "Извини́, я сего́дня не могу́."],
    ["Quieres saber cuánto cuesta un vestido.", "👗", [E("cuánto cuesta", "ско́лько сто́ит|ско́лько"), E("el vestido", "пла́тье")], "Ско́лько сто́ит пла́тье?"],
    ["Pediste una ensalada y te trajeron sopa. Avísale al camarero.", "🥗", [E("lo que pediste", "сала́т")], "Извини́те, я хоте́л сала́т."],
    ["Alguien te habla en ruso muy rápido.", "🗯️", [E("que no entiendes", "не понима́ю|повтори́те|ещё раз")], "Извини́те, я не понима́ю. Повтори́те, пожа́луйста."],
    ["Te preguntan si hablas ruso. Contesta.", "🇷🇺", [E("tu respuesta", "говорю́|немно́го|да|нет")], "Да, немно́го говорю́ по-ру́сски."],
    ["Perdiste el tren. Explícalo en la boletería y pregunta qué hacer.", "🚆", [E("qué pasó", "опозда́л|опозда́ла"), E("qué hacer", "что мне де́лать|что де́лать|когда́|сле́дующий")], "Я опозда́л на по́езд. Что мне де́лать?"],
    ["No encuentras tu hotel y le preguntas a un policía.", "👮", [E("qué buscas", "не могу́ найти́ гости́ницу|ищу́ гости́ницу|где гости́ница|~гости́ница")], "Извини́те, где гости́ница?"],
    ["Una vendedora te pregunta «Ка́ртой и́ли нали́чными?».", "💳", [E("cómo pagas", "ка́ртой|нали́чными")], "Ка́ртой, пожа́луйста."]
  ].forEach(([pide, esc, nec, modelo], j) => situ("s11-" + j, "situacion", 11, { pide, escena: esc, nec, modelo, grupo: "S11-" + j, dif: 3 }));
  U11_NATURAL.forEach(([sit, ok, otras], j) => out.push({ id: "U11-nt-" + j, tipo: "natural", forma: "elegir", dificultad: 2, modulo: 11, grupo: "NT-" + j, items: [],
    pide: sit + " ¿Cuál es la forma más natural?", opciones: baraja([ok].concat(otras), j), correcta: ok, oir: ok,
    explicacion: "**" + ok + "**: " + (/Хо́чешь|Извини́,|Извини́ /.test(ok) ? "con un amigo, ты." : "con un desconocido, вы, извини́те o пожа́луйста.") }));
  U11_COMPRENSION.forEach((T, j) => { const todo = T.lineas.join(" ");
    T.preguntas.forEach(([q, ok, malas], k) => out.push({ id: "U11-co-" + T.id + "-" + k, tipo: "comprension", forma: "elegir", dificultad: 2, modulo: 11, grupo: "CO-" + T.id + "-" + k, items: [],
      pide: "Escucha la conversación. " + q, audio: todo, texto: T.lineas, textoOculto: true, opciones: baraja([ok].concat(malas), j + k), correcta: ok, explicacion: "**" + ok + "**. " + todo })); });

  /* ── Módulo 12: el día en Rusia (proyecto, parte 1) ── */
  const HORAS = [7, 8, 9, 10, 11, 12].map(n => "в " + U11_NUM[n] + "|в " + n).join("|");
  [
    ["1. Transporte", "Llegaste en tren a San Petersburgo y quieres tomar el metro. Compra un billete.", "🎫", [E("el billete", "биле́т")], "Мне ну́жен биле́т, пожа́луйста."],
    ["2. Llegada", "Sales del metro. Pregunta cómo llegar a tu hotel.", "🏨", [E("la pregunta", "как дое́хать до гости́ницы|где гости́ница|ищу́ гости́ницу|не могу́ найти́ гости́ницу|~гости́ница")], "Извини́те, где гости́ница?"],
    ["3. Tienda", "En un kiosco: pide un mapa de la ciudad y pregunta el precio.", "🗺️", [E("el mapa", "ка́рту|ка́рта"), E("el precio", "ско́лько")], "У вас есть ка́рта? Ско́лько она́ сто́ит?"],
    ["4. Restaurante", "Al mediodía: pide una sopa y pescado.", "🍲", [E("la sopa", u11Pedido("суп").formas), E("el pescado", u11Pedido("ры́ба").formas)], "Я бу́ду суп и ры́бу."],
    ["5. Social", "En la mesa de al lado alguien te pregunta «Отку́да вы?». Contesta y pregúntale lo mismo.", "🙂", [E("de dónde eres", "из"), E("la pregunta", "а вы|отку́да вы")], "Я из Аргенти́ны. А вы?"],
    ["6. Plan", "Tu nuevo amigo te invita a salir por la noche. Acepta y propón una hora.", "🌙", [E("que sí", U11_SI), E("una hora", HORAS)], "Да, коне́чно! Дава́й в во́семь?"],
    ["7. Problema", "Por la noche, en el hotel, el teléfono no funciona. Avisa en la recepción.", "📱", [E("que no funciona", "не рабо́тает|пробле́ма")], "Извини́те, телефо́н не рабо́тает."]
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
    out.push({ id: "U11-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: dicEs[ac][1], grupo: e.id, items: ["lex:" + e.id], oir: e.ru, pide: "Escribe en ruso: «" + dicEs[ac][0] + "»",
      audio: e.ru, audioManual: true, pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.replace(/-/g, "").length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + dicEs[ac][0] }); });

  /* ══ Profundización (12/10/2026): tipos que practican la regla, con `regla` ══════════════════
     porque · natural · oido · par · descubrir · cadena · diagnostico · desarmar, más pareja
     (el futuro de yo del verbo de resultado) y aspecto (escribir con el verbo que va).
     En esta unidad pesan menos que las situaciones (~20 % de la sesión). */
  const push = o => out.push(o);
  const S = ru => D.sust(ru);
  const A = ru => D.adj(ru);
  const V = ru => { const e = D.lex(ru, "verbo"); return e ? Object.assign({ id: e.id, ac: e.acento }, verboById(e.id) || {}) : null; };
  const uniq = a => a.filter((x, i) => a.indexOf(x) === i);
  const it = (...w) => w.map(x => { const e = D.lex(x); return e ? "lex:" + e.id : null; }).filter(Boolean);
  /* ¿Suena natural?: dos frases, la natural y la del error típico */
  const nat = (id, modulo, regla, ok, mal, expl, o) => push(Object.assign({ id: "U11-nat-" + id, tipo: "natural", forma: "elegir", dificultad: 2, modulo, regla, grupo: "NA-" + id, items: [],
    oir: ok, pide: "¿Cuál suena natural?", opciones: baraja([ok, mal], id.length), correcta: ok, explicacion: ok + " " + expl }, o || {}));
  /* ¿Por qué?: una frase, una palabra y tres razones */
  const pq = (id, modulo, regla, frase, w, ok, otras, expl, o) => push(Object.assign({ id: "U11-pq-" + id, tipo: "porque", forma: "elegir", dificultad: 2, modulo, regla, grupo: "PQ-" + id, items: [],
    oir: frase, grande: frase, audio: frase, audioManual: true, pide: "¿Por qué «" + w + "»?", opciones: baraja([ok].concat(otras), id.length + 1), correcta: ok, explicacion: frase + " " + expl }, o || {}));
  const diag = (id, modulo, regla, mal, ok, falla, otras, expl) => push({ id: "U11-diag-" + id, tipo: "diagnostico", forma: "diagnostico", dificultad: 3, modulo, regla, grupo: "DI-" + id, items: [],
    oir: ok, pide: "La frase tiene un error. ¿Qué falla?", grande: mal, opciones: baraja([falla].concat(otras), id.length), correcta: falla, esperadas: [ok], explicacion: ok + " " + expl });
  const cad = (id, modulo, regla, base, pasos, expl) => push({ id: "U11-cad-" + id, tipo: "cadena", forma: "cadena", dificultad: 3, modulo, regla, grupo: "CA-" + id, items: [],
    oir: pasos[pasos.length - 1][1][0], pide: "Cambia la frase paso a paso.", base, pasos: pasos.map(([p, e]) => ({ pide: p, esperadas: e })), explicacion: [base].concat(pasos.map(p => p[1][0])).join(" → ") + " " + expl });
  const par = (id, modulo, regla, pide, ok, mal, expl) => push({ id: "U11-par-" + id, tipo: "par", forma: "elegir", dificultad: 2, modulo, regla, grupo: "PA-" + id, items: [],
    oir: ok, pide, opciones: baraja([ok, mal], id.length), correcta: ok, explicacion: ok + " " + expl });
  const oido = (id, modulo, regla, frase, pide, opciones, ok, expl) => push({ id: "U11-oido-" + id, tipo: "oido", forma: "elegir", dificultad: 2, modulo, regla, grupo: "OI-" + id, items: [],
    oir: frase, audio: frase, pide, opciones, correcta: ok, explicacion: frase + " " + expl });
  const desc = (id, modulo, regla, ejemplos, preg, ok, mal, expl) => push({ id: "U11-desc-" + id, tipo: "descubrir", forma: "elegir", dificultad: 2, modulo, regla, grupo: "DE-" + id, items: [],
    oir: ok, pide: ejemplos.join(" · ") + ". ¿Y " + preg + "?", opciones: baraja([ok, mal], id.length), correcta: ok, explicacion: expl });
  const desarm = (id, modulo, regla, pal, preguntas, expl) => push({ id: "U11-desarm-" + id, tipo: "desarmar", forma: "desarmar", dificultad: 2, modulo, regla, grupo: "DS-" + id, items: [],
    oir: pal.join(" "), audio: pal.join(" "), audioManual: true, pide: "Responde tocando las palabras de la frase.", palabras: pal, preguntas: preguntas.map(([p, c]) => ({ pide: p, correcta: c })), explicacion: pal.join(" ") + " " + expl });
  const GEN = { m: "ну́жен", f: "нужна́", n: "ну́жно", pl: "нужны́" };
  const genDe = s => s.plural ? "pl" : s.g === "f" ? "f" : s.g === "n" ? "n" : "m";
  const RAZON_N = { m: "Lo que necesitas es masculino", f: "Lo que necesitas es femenino", n: "Lo que necesitas es neutro", pl: "Lo que necesitas es plural" };

  /* ── Módulo 1: ну́жен, pedir, preguntar ── */
  [["биле́т", "un billete"], ["ка́рта", "un mapa"], ["такси́", "un taxi"], ["де́ньги", "dinero"], ["па́спорт", "el pasaporte"], ["вода́", "agua"], ["ключ", "la llave"],
    ["апте́ка", "una farmacia"], ["телефо́н", "un teléfono"], ["ру́чка", "un bolígrafo"], ["врач", "un médico"], ["метро́", "el metro"]].forEach(([ru, es], j) => {
    const s = S(ru); if (!s) return; const g = genDe(s), f = GEN[g], ok = "Мне " + f + " " + s.nom + ".";
    const malG = g === "f" ? "m" : g === "m" ? "f" : g === "pl" ? "f" : "m", mal = "Мне " + GEN[malG] + " " + s.nom + ".";
    nat("nz-" + j, 1, "u11-nuzhen", ok, mal, s.nom + (g === "pl" ? " es plural" : g === "f" ? " es femenino" : g === "n" ? " es neutro" : " es masculino") + ": " + f + ".", { items: ["lex:" + s.id] });
    if (j < 8) pq("nz-" + j, 1, "u11-nuzhen", ok, f, RAZON_N[g], ["m", "f", "pl", "n"].filter(x => x !== g && !(g === "n" && x === "m")).slice(0, 2).map(x => RAZON_N[x]),
      "ну́жен cambia con lo que necesitas: " + s.nom + " → " + f + ".", { items: ["lex:" + s.id] });
    if (j < 4) oido("nz-" + j, 1, "u11-nuzhen", ok, "Escucha. ¿Qué forma sonó?", ["ну́жен", "нужна́", "ну́жно", "нужны́"], f, "Con " + s.nom + ", " + f + ".");
  });
  desc("nz-0", 1, "u11-nuzhen", ["Мне ну́жен биле́т", "Мне ну́жен ключ"], "па́спорт", "Мне ну́жен па́спорт.", "Мне нужна́ па́спорт.", "па́спорт es masculino, como биле́т y ключ: ну́жен.");
  desc("nz-1", 1, "u11-nuzhen", ["Мне нужна́ ка́рта", "Мне нужна́ апте́ка"], "ру́чка", "Мне нужна́ ру́чка.", "Мне ну́жен ру́чка.", "ру́чка es femenino, como ка́рта y апте́ка: нужна́.");
  diag("nz-0", 1, "u11-nuzhen", "Я ну́жен биле́т.", "Мне ну́жен биле́т.", "Quien necesita va en dativo", ["La forma de ну́жен", "El caso de биле́т"], "Quien necesita, en dativo: мне.");
  diag("nz-1", 1, "u11-nuzhen", "Мне ну́жно ка́рта.", "Мне нужна́ ка́рта.", "La forma de ну́жен", ["Quien necesita va en dativo", "El caso de ка́рта"], "ка́рта es femenino: нужна́.");
  desarm("nz-0", 1, "u11-nuzhen", ["Мне", "нужна́", "ка́рта."], [["¿Quién necesita? (en dativo)", 0], ["¿Qué se necesita? (el sujeto)", 2]], "мне + нужна́ + lo que necesitas, que es el sujeto.");
  desarm("nz-1", 1, "u11-nuzhen", ["Ему́", "ну́жен", "биле́т."], [["¿Qué se necesita? (el sujeto)", 2], ["¿Quién necesita? (en dativo)", 0]], "ему́, dativo de он; биле́т es masculino: ну́жен.");
  cad("nz-0", 1, "u11-nuzhen", "Мне ну́жен биле́т.", [["Ahora necesitas un mapa (ка́рта).", ["Мне нужна́ ка́рта."]], ["Ahora: no tienes mapa.", ["У меня́ нет ка́рты."]]], "ну́жен cambia con la cosa; нет + genitivo.");
  cad("nz-1", 1, "u11-nuzhen", "Мне ну́жно такси́.", [["Ahora quien lo necesita es ella (ей).", ["Ей ну́жно такси́."]], ["Ahora ella necesita dinero (де́ньги).", ["Ей нужны́ де́ньги."]]], "Quien necesita, en dativo; де́ньги es plural: нужны́.");
  [["апте́ка", "una farmacia"], ["ста́нция", "la estación"], ["остано́вка", "la parada"], ["гости́ница", "el hotel"], ["у́лица", "la calle"], ["ры́ба", "pescado"]].forEach(([ru, es], j) => {
    const s = S(ru); if (!s || s.acc === s.nom) return;
    if (j < 3) nat("ish-" + j, ru === "остано́вка" ? 4 : 1, "u11-pedir", "Я ищу́ " + s.acc + ".", "Я ищу́ " + s.nom + ".", "Lo que buscas, en acusativo: " + s.nom + " → " + s.acc + ".");
    else nat("est-" + j, ru === "ры́ба" ? 3 : 1, "u11-pedir", "У вас есть " + s.nom + "?", "У вас есть " + s.acc + "?", "Después de есть va el nominativo: es lo que hay.");
  });
  pq("est-0", 1, "u11-pedir", "У вас есть вода́?", "вода́", "Es lo que hay: nominativo", ["Recibe la acción: acusativo", "Es «un poco de»: genitivo"], "есть = hay: lo que hay es el sujeto.");
  pq("ish-0", 1, "u11-pedir", "Я ищу́ апте́ку.", "апте́ку", "Recibe la acción: acusativo", ["Es lo que hay: nominativo", "Es «un poco de»: genitivo"], "иска́ть + acusativo: апте́ка → апте́ку.");
  [["ма́ма", "a mamá"], ["па́па", "a papá"], ["брат", "a mi hermano"], ["сестра́", "a mi hermana"], ["учи́тель", "al maestro"], ["подру́га", "a mi amiga"]].forEach(([ru, es], j) => {
    const s = S(ru); if (!s) return;
    nat("spr-" + j, 1, "u11-sprosit", "Я спрошу́ " + s.acc + ".", "Я спрошу́ " + s.dat + ".", "Con спроси́ть, la persona va en acusativo: " + s.nom + " → " + s.acc + ".", { items: ["lex:" + s.id] });
  });
  par("spr-0", 1, "u11-sprosit", "En un restaurante. ¿Cuál dice «pedí una sopa»?", "Я заказа́л суп.", "Я попроси́л суп.", "Comida: заказа́ть.");
  par("spr-1", 1, "u11-sprosit", "¿Cuál dice «le pregunté a mamá»?", "Я спроси́л ма́му.", "Я попроси́л ма́му.", "Preguntar: спроси́ть. попроси́ть es pedirle algo.");
  par("spr-2", 1, "u11-sprosit", "¿Cuál dice «le pedí a mi hermano que me ayudara»?", "Я попроси́л бра́та помо́чь.", "Я спроси́л бра́та помо́чь.", "Pedirle algo a alguien: попроси́ть.");
  [["Повтори́", "Повтори́те", "repita"], ["Извини́", "Извини́те", "disculpe"], ["Скажи́", "Скажи́те", "dígame"], ["Помоги́", "Помоги́те", "ayúdeme"]].forEach(([ty, vy, es], j) => {
    par("tv-" + j, 1, "u11-no-entiendo", "Le hablas a un desconocido. ¿Cuál dices?", vy + ", пожа́луйста.", ty + ", пожа́луйста.", "Con un desconocido, вы: " + vy + ".");
    if (j < 2) oido("tv-" + j, 1, "u11-no-entiendo", (j ? vy : ty) + ", пожа́луйста.", "Escucha. ¿A quién le habla?", ["A un amigo (ты)", "A un desconocido (вы)"], j ? "A un desconocido (вы)" : "A un amigo (ты)", j ? "Con -те: вы." : "Sin -те: ты.");
  });
  par("pon-0", 1, "u11-no-entiendo", "Una mujer no entendió lo que le acabas de decir. ¿Qué dice?", "Я не поняла́.", "Я не по́нял.", "Habla una mujer: поняла́.");
  par("pon-1", 1, "u11-no-entiendo", "Un hombre no entendió lo que le acabas de decir. ¿Qué dice?", "Я не по́нял.", "Я не поняла́.", "Habla un hombre: по́нял.");

  /* ── Parejas de la unidad (módulo 2): pareja y aspecto ── */
  U11_PARES.forEach(([i, r, es], j) => {
    const vi = V(i), vr = V(r); if (!vi || !vr || !vr.futuro || !vi.presente) return;
    const m = ["зака́зывать", "приноси́ть"].indexOf(i) >= 0 ? 3 : ["иска́ть"].indexOf(i) >= 0 ? 6 : ["переходи́ть"].indexOf(i) >= 0 ? 5 : 2;
    push({ id: "U11-parj-" + j, tipo: "pareja", forma: "elegir", dificultad: 1, modulo: m, regla: "u11-hochu-kupit", grupo: "PJ-" + j, items: ["lex:" + vr.id], oir: vr.futuro[0],
      pide: "¿Cómo es «voy a " + es.replace(/ \(.*\)$/, "").replace(/^buscar → /, "") + "» (я), una vez?", opciones: baraja(uniq([vr.futuro[0], "бу́ду " + vr.ac, vi.presente[0]]), j), correcta: vr.futuro[0],
      explicacion: vi.ac + " → " + vr.ac + ": я " + vr.futuro[0] + "." });
  });
  [["Quiero comprar esta camisa.", "Я хочу́ купи́ть э́ту руба́шку.", ["Хочу́ купи́ть э́ту руба́шку."], 2],
   ["¿Puedo pagar con tarjeta?", "Мо́жно заплати́ть ка́ртой?", [], 2],
   ["Tengo que cambiar el talle.", "Мне ну́жно поменя́ть разме́р.", [], 2],
   ["Quiero devolver la chaqueta.", "Я хочу́ верну́ть ку́ртку.", ["Хочу́ верну́ть ку́ртку."], 2],
   ["Quiero pedir una pizza.", "Я хочу́ заказа́ть пи́ццу.", ["Хочу́ заказа́ть пи́ццу."], 3],
   ["No encuentro el hotel.", "Я не могу́ найти́ гости́ницу.", ["Не могу́ найти́ гости́ницу."], 6],
   ["Me encanta comprar ropa.", "Я люблю́ покупа́ть оде́жду.", ["Люблю́ покупа́ть оде́жду."], 2],
   ["¿Aquí se puede pagar con tarjeta? (en general)", "Здесь мо́жно плати́ть ка́ртой?", ["Мо́жно здесь плати́ть ка́ртой?"], 2]].forEach(([es, ok, mas, m], j) =>
    push({ id: "U11-asp-" + j, tipo: "aspecto", forma: "escribir", dificultad: 3, modulo: m, regla: "u11-hochu-kupit", grupo: "AS-" + j, items: [], oir: ok,
      pide: "Escribe en ruso: «" + es + "»", audio: ok, audioManual: true, esperadas: [ok].concat(mas), idioma: "ru",
      explicacion: ok + (j >= 6 ? " En general, lo que se repite: el verbo de proceso." : " Una vez, algo concreto: el verbo de resultado.") }));
  pq("asp-0", 2, "u11-hochu-kupit", "Я хочу́ купи́ть э́ту руба́шку.", "купи́ть", "Es una compra concreta, una vez", ["Es algo que se repite", "Es en pasado"], "Una vez: el verbo de resultado.");
  pq("asp-1", 2, "u11-hochu-kupit", "Я люблю́ покупа́ть оде́жду.", "покупа́ть", "Es algo que se repite, en general", ["Es una compra concreta, una vez", "Es en pasado"], "En general: el verbo de proceso.");
  pq("asp-2", 2, "u11-hochu-kupit", "Мо́жно заплати́ть ка́ртой?", "заплати́ть", "Es esta compra, ahora", ["Es en general: si se acepta tarjeta", "Es en pasado"], "Una vez, ahora: заплати́ть.");
  par("asp-0", 2, "u11-hochu-kupit", "¿Cuál pregunta si en ese negocio, en general, aceptan tarjeta?", "Здесь мо́жно плати́ть ка́ртой?", "Мо́жно заплати́ть ка́ртой?", "En general: плати́ть.");
  par("asp-1", 2, "u11-hochu-kupit", "¿Cuál dice «quiero comprar este jersey»?", "Я хочу́ купи́ть э́тот сви́тер.", "Я люблю́ покупа́ть сви́теры.", "Una compra concreta: купи́ть.");
  nat("asp-0", 2, "u11-hochu-kupit", "Я хочу́ купи́ть э́ту ку́ртку.", "Я хочу́ покупа́ть э́ту ку́ртку.", "Una compra concreta: купи́ть.");
  nat("asp-1", 2, "u11-hochu-kupit", "Мне ну́жно верну́ть ку́ртку.", "Мне ну́жно возвраща́ть ку́ртку.", "Una vez: верну́ть.");
  nat("asp-2", 6, "u11-naiti", "Я не могу́ найти́ ключ.", "Я не могу́ иска́ть ключ.", "No logras el resultado: найти́.");
  diag("asp-0", 2, "u11-hochu-kupit", "Я хочу́ покупа́ть э́ту руба́шку.", "Я хочу́ купи́ть э́ту руба́шку.", "El verbo: tiene que ser el de resultado", ["El caso de руба́шка", "La forma de хочу́"], "Una compra concreta: купи́ть.");

  /* ── Módulo 2: precios, сто́ит / сто́ят, cómo es, pagar ── */
  const NUM = U11_NUM;
  [1, 2, 3, 4, 5, 7, 10, 12].forEach((n, j) => {
    const f = n === 1 ? "рубль" : n <= 4 ? "рубля́" : "рубле́й", ok = NUM[n] + " " + f, mal = NUM[n] + " " + (n === 1 ? "рубля́" : n <= 4 ? "рубле́й" : "рубля́");
    pq("rub-" + j, 2, "u11-precios", "Э́то сто́ит " + ok + ".", f, n === 1 ? "Después de 1" : n <= 4 ? "Después de 2, 3 o 4" : "Después de 5 o más",
      [n === 1 ? "Después de 2, 3 o 4" : "Después de 1", n >= 5 ? "Después de 2, 3 o 4" : "Después de 5 o más"], "1 рубль · 2–4 рубля́ · 5 o más рубле́й.");
    if (n > 1) nat("rub-" + j, 2, "u11-precios", "Э́то сто́ит " + ok + ".", "Э́то сто́ит " + mal + ".", (n <= 4 ? "Después de 2, 3 y 4, рубля́." : "De 5 en adelante, рубле́й."));
  });
  desc("rub-0", 2, "u11-precios", ["два рубля́", "три рубля́"], "четы́ре", "четы́ре рубля́", "четы́ре рубле́й", "2, 3 y 4 van igual: рубля́.");
  desc("rub-1", 2, "u11-precios", ["пять рубле́й", "шесть рубле́й"], "де́сять", "де́сять рубле́й", "де́сять рубля́", "De 5 en adelante: рубле́й.");
  oido("rub-0", 2, "u11-precios", "Сок сто́ит три рубля́.", "Escucha. ¿Cuánto cuesta?", ["3 ₽", "5 ₽", "1 ₽"], "3 ₽", "три рубля́: 3.");
  oido("rub-1", 2, "u11-precios", "Чай сто́ит пять рубле́й.", "Escucha. ¿Cuánto cuesta?", ["5 ₽", "3 ₽", "2 ₽"], "5 ₽", "пять рубле́й: 5.");
  [["руба́шка", 0], ["ку́ртка", 0], ["футбо́лка", 0], ["сви́тер", 0], ["шарф", 0], ["джи́нсы", 1], ["ту́фли", 1], ["боти́нки", 1]].forEach(([ru, pl], j) => {
    const ok = "Ско́лько " + (pl ? "сто́ят " : "сто́ит ") + ru + "?", mal = "Ско́лько " + (pl ? "сто́ит " : "сто́ят ") + ru + "?";
    nat("st-" + j, 2, "u11-stoit", ok, mal, pl ? ru + " es plural: сто́ят." : "Una sola cosa: сто́ит.");
    if (j % 2 === 0 || pl) pq("st-" + j, 2, "u11-stoit", ok, pl ? "сто́ят" : "сто́ит", pl ? "Lo que cuesta es plural" : "Lo que cuesta es una sola cosa", [pl ? "Lo que cuesta es una sola cosa" : "Lo que cuesta es plural"], "сто́ить concuerda con lo que cuesta.");
  });
  diag("st-0", 2, "u11-stoit", "Ско́лько сто́ит джи́нсы?", "Ско́лько сто́ят джи́нсы?", "La forma del verbo", ["El caso de джи́нсы", "Falta есть"], "джи́нсы es plural: сто́ят.");
  [["руба́шка", "дорого́й"], ["сви́тер", "дешёвый"], ["ю́бка", "краси́вый"], ["шарф", "краси́вый"], ["ку́ртка", "дешёвый"], ["костю́м", "дорого́й"], ["футбо́лка", "но́вый"], ["пла́тье", "дорого́й"]].forEach(([ru, ad], j) => {
    const s = S(ru), a = A(ad); if (!s || !a) return; const ok = a[s.g === "f" ? "f" : s.g === "n" ? "n" : "m"], mal = s.g === "f" ? a.m : a.f;
    nat("adj-" + j, 2, "u11-como-es", u11Cap(s.nom) + " " + ok + ".", u11Cap(s.nom) + " " + mal + ".", s.nom + " es " + (s.g === "f" ? "femenino" : s.g === "n" ? "neutro" : "masculino") + ": " + ok + ".", { items: ["lex:" + s.id] });
  });
  nat("pag-0", 2, "u11-pagar", "Я плачу́ ка́ртой.", "Я плачу́ с ка́ртой.", "Con qué pagas: instrumental, sin с.");
  nat("pag-1", 2, "u11-pagar", "Я бу́ду плати́ть нали́чными.", "Я бу́ду плати́ть с нали́чными.", "нали́чными va sin с.");
  pq("pag-0", 2, "u11-pagar", "Я плачу́ ка́ртой.", "ка́ртой", "Con qué: instrumental, sin с", ["A quién: dativo", "Dónde: prepositivo"], "La herramienta, en instrumental: ка́рта → ка́ртой.");
  cad("st-0", 2, "u11-hochu-kupit", "Я хочу́ купи́ть руба́шку.", [["Ayer la compraste (eres hombre, вчера́).", ["Вчера́ я купи́л руба́шку.", "Я купи́л руба́шку вчера́."]], ["Ahora pregunta cuánto cuesta.", ["Ско́лько сто́ит руба́шка?"]]], "Resultado en pasado; сто́ит con una cosa.");
  cad("st-1", 2, "u11-stoit", "Ско́лько сто́ит руба́шка?", [["Ahora pregunta por los vaqueros (джи́нсы).", ["Ско́лько сто́ят джи́нсы?"]], ["Ahora di que cuesta mil rublos.", ["Джи́нсы сто́ят ты́сячу рубле́й.", "Они́ сто́ят ты́сячу рубле́й."]]], "джи́нсы es plural: сто́ят.");

  /* ── Módulo 3: registro, lo que pides, comentar ── */
  [["суп", "Я бу́ду суп."], ["ры́ба", "Я бу́ду ры́бу."], ["чай", "Мне, пожа́луйста, чай."], ["пи́цца", "Мо́жно пи́ццу, пожа́луйста?"]].forEach(([ru, ok], j) => {
    const s = S(ru); nat("reg-" + j, 3, "u11-registro", ok, "Я хочу́ " + s.acc + "!", "En un café se pide con бу́ду, Мо́жно…? o Мне, пожа́луйста; Я хочу́ suena directo.", { pide: "Le pides al camarero. ¿Cuál suena más natural?" });
  });
  pq("reg-0", 3, "u11-registro", "Мо́жно меню́, пожа́луйста?", "Мо́жно", "Es un pedido amable", ["Pide permiso para entrar", "Es una orden"], "Мо́жно…? y пожа́луйста suavizan el pedido.");
  [["ры́ба", "pescado"], ["пи́цца", "una pizza"], ["вода́", "agua"], ["ку́рица", "pollo"], ["карто́шка", "patatas"]].forEach(([ru, es], j) => {
    const s = S(ru); if (!s) return;
    nat("com-" + j, 3, "u11-pedir-comida", "Я бу́ду " + s.acc + ".", "Я бу́ду " + s.nom + ".", "Lo que pides, en acusativo: " + s.nom + " → " + s.acc + ".", { items: ["lex:" + s.id] });
    if (j < 3) pq("com-" + j, 3, "u11-pedir-comida", "Принеси́те, пожа́луйста, " + s.acc + ".", s.acc, "Recibe la acción: acusativo", ["Es lo que hay: nominativo", "Es «un poco de»: genitivo"], s.nom + " → " + s.acc + ".");
  });
  pq("com-gen", 3, "u11-pedir-comida", "Да́йте, пожа́луйста, воды́.", "воды́", "Es «un poco de»: genitivo", ["Recibe la acción: acusativo", "Es lo que hay: nominativo"], "Un poco de agua: genitivo, como стака́н воды́.");
  desc("com-0", 3, "u11-pedir-comida", ["ры́ба → Я бу́ду ры́бу", "пи́цца → Я бу́ду пи́ццу"], "ку́рица", "Я бу́ду ку́рицу.", "Я бу́ду ку́рица.", "Femeninas en -а: -а → -у.");
  diag("com-0", 3, "u11-pedir-comida", "Я бу́ду ры́ба.", "Я бу́ду ры́бу.", "El caso de ры́ба", ["La forma del verbo", "Falta мне"], "Lo que pides, en acusativo.");
  cad("com-0", 3, "u11-pedir-comida", "Я бу́ду суп.", [["Ahora pide pescado (ры́ба).", ["Я бу́ду ры́бу."]], ["Ahora pídele agua al camarero con Принеси́те.", ["Принеси́те, пожа́луйста, во́ду.", "Принеси́те во́ду, пожа́луйста.", "Принеси́те во́ду."]]], "Lo que pides, en acusativo.");
  [["ко́фе", "горя́чий"], ["суп", "вку́сный"], ["ры́ба", "вку́сный"], ["чай", "холо́дный"], ["пи́цца", "о́стрый"], ["десе́рт", "сла́дкий"], ["моро́женое", "сла́дкий"]].forEach(([ru, ad], j) => {
    const s = S(ru), a = A(ad); if (!s || !a) return; const g = ru === "ко́фе" ? "m" : s.g === "f" ? "f" : s.g === "n" ? "n" : "m";
    const ok = a[g], mal = g === "f" ? a.m : a.f;
    nat("cm-" + j, 3, "u11-comentar", u11Cap(s.nom) + " " + ok + ".", u11Cap(s.nom) + " " + mal + ".", s.nom + " es " + (g === "f" ? "femenino" : g === "n" ? "neutro" : "masculino") + ": " + ok + ".");
  });
  pq("cm-0", 3, "u11-comentar", "Ко́фе горя́чий.", "горя́чий", "ко́фе es masculino", ["ко́фе es femenino", "Es plural"], "Aunque termine en -е, ко́фе es masculino.");
  nat("moz-0", 3, "u11-mozo", "У вас есть свобо́дный сто́лик?", "У вас есть свобо́дного сто́лика?", "Lo que hay, en nominativo.");

  /* ── Módulo 4: дое́хать до, где / куда́ / отку́да, subir y bajar ── */
  [["вокза́л"], ["центр"], ["гости́ница"], ["ста́нция"], ["аэропо́рт"], ["музе́й"], ["парк"], ["университе́т"]].forEach(([ru], j) => {
    const s = S(ru); if (!s) return;
    nat("do-" + j, 4, "u11-doehat", "Как дое́хать до " + s.gen + "?", "Как дое́хать до " + s.nom + "?", "до + genitivo: " + s.nom + " → " + s.gen + ".", { items: ["lex:" + s.id] });
    if (j < 4) pq("do-" + j, 4, "u11-doehat", "Как дое́хать до " + s.gen + "?", s.gen, "Después de до: genitivo", ["Adónde: acusativo", "Dónde: prepositivo"], s.nom + " → " + s.gen + ".");
  });
  desc("do-0", 4, "u11-doehat", ["до вокза́ла", "до музе́я"], "парк", "до па́рка", "до парк", "Masculino: se agrega -а (o -я).");
  desc("do-1", 4, "u11-doehat", ["до гости́ницы", "до шко́лы"], "апте́ка", "до апте́ки", "до апте́ку", "Femenino en -а: -ы, y después de к, -и.");
  diag("do-0", 4, "u11-doehat", "Как дое́хать до центр?", "Как дое́хать до це́нтра?", "El caso de центр", ["La forma del verbo", "Falta в"], "до + genitivo.");
  desarm("do-0", 4, "u11-doehat", ["Как", "дое́хать", "до", "це́нтра?"], [["¿Qué palabra es «llegar»?", 1], ["¿Hasta dónde? (en genitivo)", 3]], "до + genitivo: центр → це́нтра.");
  [["центр", "в"], ["парк", "в"], ["вокза́л", "на"], ["музе́й", "в"]].forEach(([ru, pr], j) => {
    const s = S(ru); par("gk-" + j, 4, "u11-gde-kuda", "¿Cuál dice adónde vas?", "Я е́ду " + pr + " " + s.acc + ".", "Я " + pr + " " + s.prep + ".", "Adónde: acusativo.");
  });
  nat("gk-0", 4, "u11-gde-kuda", "Я е́ду в центр.", "Я е́ду в це́нтре.", "Movimiento (куда́): acusativo.");
  cad("gk-0", 4, "u11-gde-kuda", "Я е́ду в центр.", [["Ahora ya estás en el centro (dónde).", ["Я в це́нтре."]], ["Ahora pregunta cómo llegar al centro.", ["Как дое́хать до це́нтра?"]]], "Где → prepositivo; до → genitivo.");
  [["авто́бус"], ["по́езд"], ["трамва́й"], ["такси́"]].forEach(([ru], j) => {
    const s = S(ru); if (!s) return;
    nat("sb-" + j, 4, "u11-subir-bajar", "Я ся́ду на " + s.acc + ".", "Я ся́ду в " + s.prep + ".", "Con el transporte: сесть на + acusativo.");
  });
  par("sb-0", 4, "u11-subir-bajar", "En el autobús, quieres pasar. ¿Qué preguntas?", "Вы выхо́дите?", "Вы вы́йдете?", "Ahora mismo, en proceso: выхо́дите.");

  /* ── Módulo 5: indicaciones y dónde queda ── */
  [["перекрёсток"], ["у́гол"], ["апте́ка"], ["банк"]].forEach(([ru], j) => {
    const s = S(ru); if (!s) return;
    nat("ind-" + j, 5, "u11-indicaciones", "Иди́те пря́мо до " + s.gen + ".", "Иди́те пря́мо до " + s.nom + ".", "Hasta dónde: до + genitivo.");
  });
  nat("ind-u", 5, "u11-indicaciones", "Перейди́те у́лицу.", "Перейди́те у́лица.", "Lo que se cruza, en acusativo.");
  par("ind-0", 5, "u11-indicaciones", "Le explicas el camino a un desconocido. ¿Cuál dices?", "Поверни́те нале́во.", "Поверни́ нале́во.", "A un desconocido, con вы: Поверни́те.");
  [["ста́нция", "банк", "напро́тив"], ["рестора́н", "кафе́", "напро́тив"], ["парк", "музе́й", "ря́дом с"], ["вокза́л", "гости́ница", "ря́дом с"], ["магази́н", "банк", "ря́дом с"], ["апте́ка", "кафе́", "о́коло"]].forEach(([ru, que, pr], j) => {
    const s = S(ru); if (!s) return; const c = pr === "ря́дом с" ? s.ins : s.gen, cm = pr === "ря́дом с" ? s.gen : s.nom;
    const ok = u11Cap(que) + " " + pr + " " + c + ".", mal = u11Cap(que) + " " + pr + " " + cm + ".";
    nat("dq-" + j, 5, "u11-donde-queda", ok, mal, pr + (pr === "ря́дом с" ? " + instrumental: " : " + genitivo: ") + s.nom + " → " + c + ".");
    if (j % 2 === 0) pq("dq-" + j, 5, "u11-donde-queda", ok, c, pr === "ря́дом с" ? "ря́дом с + instrumental" : pr + " + genitivo", [pr === "ря́дом с" ? "напро́тив + genitivo" : "ря́дом с + instrumental", "в + prepositivo"], s.nom + " → " + c + ".");
  });
  nat("dq-m", 5, "u11-donde-queda", "Банк ме́жду магази́ном и рестора́ном.", "Банк ме́жду магази́н и рестора́н.", "ме́жду + instrumental, las dos palabras.");
  diag("dq-0", 5, "u11-donde-queda", "Банк напро́тив ста́нция.", "Банк напро́тив ста́нции.", "El caso de ста́нция", ["Falta в", "La forma de банк"], "напро́тив + genitivo.");
  desarm("dq-0", 5, "u11-donde-queda", ["Кафе́", "напро́тив", "ста́нции."], [["¿Qué está ahí? (el sujeto)", 0], ["¿Enfrente de qué? (en genitivo)", 2]], "напро́тив + genitivo.");

  /* ── Módulo 6: problemas ── */
  [["па́спорт"], ["ключ"], ["телефо́н"], ["биле́т"], ["ка́рта"], ["заря́дка"], ["де́ньги"]].forEach(([ru], j) => {
    const s = S(ru); if (!s) return;
    nat("net-" + j, 6, "u11-net", "У меня́ нет " + s.gen + ".", "У меня́ нет " + s.nom + ".", "Después de нет, genitivo: " + s.nom + " → " + s.gen + ".", { items: ["lex:" + s.id] });
    if (j < 3) pq("net-" + j, 6, "u11-net", "У меня́ нет " + s.gen + ".", s.gen, "Después de нет: genitivo", ["Recibe la acción: acusativo", "Es lo que hay: nominativo"], s.nom + " → " + s.gen + ".");
  });
  [["гости́ница"], ["ста́нция"], ["остано́вка"], ["ключ"]].forEach(([ru], j) => {
    const s = S(ru); nat("nai-" + j, 6, "u11-naiti", "Я не могу́ найти́ " + s.acc + ".", "Я не могу́ иска́ть " + s.acc + ".", "No logras encontrarlo: найти́, el resultado.");
  });
  pq("nai-0", 6, "u11-naiti", "Я не могу́ найти́ гости́ницу.", "найти́", "No logras el resultado: encontrar", ["Estás buscando, en proceso", "Es algo que se repite"], "иска́ть es buscar; найти́, encontrar.");
  oido("nai-0", 6, "u11-naiti", "Я нашла́ ключ!", "Escucha. ¿Quién habla?", ["Una mujer", "Un hombre"], "Una mujer", "нашла́: femenino.");
  oido("nai-1", 6, "u11-net", "Я потеря́л кошелёк.", "Escucha. ¿Quién habla?", ["Un hombre", "Una mujer"], "Un hombre", "потеря́л: masculino.");
  nat("ukr-0", 6, "u11-net", "У меня́ укра́ли телефо́н.", "Я укра́ли телефо́н.", "«Junto a mí robaron»: у меня́ укра́ли.");
  nat("ukr-1", 6, "u11-net", "У меня́ укра́ли па́спорт.", "Меня́ укра́ли па́спорт.", "у меня́ укра́ли + lo que robaron.");
  [["по́езд"], ["авто́бус"], ["самолёт"], ["уро́к"], ["рабо́та"]].forEach(([ru], j) => {
    const s = S(ru); if (!s) return;
    nat("opo-" + j, 6, "u11-opozdat", "Я опозда́л на " + s.acc + ".", "Я опозда́л в " + s.acc + ".", "опозда́ть на + acusativo.", { pide: "Eres hombre. ¿Cuál suena natural?" });
  });
  diag("net-0", 6, "u11-net", "У меня́ нет па́спорт.", "У меня́ нет па́спорта.", "El caso de па́спорт", ["Falta есть", "La forma de нет"], "нет + genitivo.");
  cad("net-0", 6, "u11-net", "У меня́ есть па́спорт.", [["Di que no tienes.", ["У меня́ нет па́спорта."]], ["Ahora: lo perdiste (eres hombre).", ["Я потеря́л па́спорт."]]], "нет + genitivo; потеря́ть + acusativo.");
  cad("nai-0", 6, "u11-naiti", "Я ищу́ гости́ницу.", [["Ahora: no la encuentras.", ["Я не могу́ найти́ гости́ницу."]], ["Ahora: la encontraste (eres mujer).", ["Я нашла́ гости́ницу."]]], "иска́ть → найти́: del proceso al resultado.");
  desarm("ukr-0", 6, "u11-net", ["У", "меня́", "укра́ли", "телефо́н."], [["¿Qué robaron? (en acusativo)", 3], ["¿Qué palabra es «robaron»?", 2]], "у меня́ укра́ли + acusativo.");

  /* ── Módulo 7: mensajes ── */
  [["встре́титься", "встре́тимся", "в семь"], ["позвони́ть", "позвони́м", "ма́ме"], ["пойти́", "пойдём", "в кино́"], ["заказа́ть", "зака́жем", "пи́ццу"]].forEach(([inf, my, resto], j) => {
    nat("dav-" + j, 7, "u11-davai", "Дава́й " + my + " " + resto + ".", "Дава́й " + inf + " " + resto + ".", "Дава́й + la forma de мы del verbo de resultado.");
    if (j < 2) pq("dav-" + j, 7, "u11-davai", "Дава́й " + my + " " + resto + ".", my, "Дава́й + la forma de мы", ["Дава́й + infinitivo", "Es en pasado"], "Para «hagamos»: Дава́й + мы.");
  });
  cad("dav-0", 7, "u11-davai", "Дава́й встре́тимся в семь.", [["Ahora propón ir al cine (пойти́ в кино́).", ["Дава́й пойдём в кино́.", "Дава́й пойдём в кино́!"]], ["Ahora pregúntale si quiere ir al cine.", ["Хо́чешь пойти́ в кино́?"]]], "Дава́й + мы; Хо́чешь + infinitivo.");
  [["Извини́, я опозда́ю.", "Извини́те, я опозда́ю."], ["Пришли́ мне а́дрес.", "Пришли́те мне а́дрес."], ["Дава́й за́втра?", "Дава́йте за́втра?"], ["Хо́чешь пойти́ в кино́?", "Хоти́те пойти́ в кино́?"]].forEach(([ty, vy], j) => {
    par("tv7-" + j, 7, "u11-ty-vy", j % 2 ? "Le escribes a tu profesora. ¿Cuál mandas?" : "Le escribes a un amigo. ¿Cuál mandas?", j % 2 ? vy : ty, j % 2 ? ty : vy, j % 2 ? "Con la profesora, вы." : "Con un amigo, ты.");
  });
  nat("man-0", 7, "u11-mandar", "Пришли́ мне а́дрес.", "Пришли́ меня́ а́дрес.", "A quién se manda: dativo.");
  nat("man-1", 7, "u11-mandar", "Я отпра́влю тебе́ сообще́ние.", "Я отпра́влю тебя́ сообще́ние.", "A quién se manda: dativo.");
  nat("res-0", 7, "u11-responder", "Спаси́бо за приглаше́ние!", "Спаси́бо для приглаше́ния!", "«Gracias por»: спаси́бо за + acusativo.");
  nat("res-1", 7, "u11-responder", "Я опозда́ю на де́сять мину́т.", "Я опозда́ю в де́сять мину́т.", "Cuánto tarde: на + la cantidad.");

  /* ── Módulo 8: gustos y opiniones ── */
  [["фильм", 0], ["му́зыка", 0], ["Москва́", 0], ["фи́льмы", 1], ["ту́фли", 1], ["джи́нсы", 1], ["кни́ги", 1], ["десе́рты", 1]].forEach(([ru, pl], j) => {
    const ok = "Мне " + (pl ? "нра́вятся " : "нра́вится ") + ru + ".", mal = "Мне " + (pl ? "нра́вится " : "нра́вятся ") + ru + ".";
    nat("nr-" + j, 8, "u11-nravyatsya", ok, mal, pl ? "Varias cosas: нра́вятся." : "Una cosa: нра́вится.");
    if (j % 2) pq("nr-" + j, 8, "u11-nravyatsya", ok, pl ? "нра́вятся" : "нра́вится", pl ? "Lo que gusta es plural" : "Lo que gusta es una sola cosa", [pl ? "Lo que gusta es una sola cosa" : "Lo que gusta es plural"], "нра́виться concuerda con lo que gusta.");
    if (j === 2 || j === 5) oido("nr-" + j, 8, "u11-nravyatsya", ok, "Escucha. ¿Qué forma sonó?", ["нра́вится", "нра́вятся"], pl ? "нра́вятся" : "нра́вится", pl ? "Plural." : "Una cosa.");
  });
  cad("nr-0", 8, "u11-nravyatsya", "Мне нра́вится фильм.", [["Ahora en plural: películas (фи́льмы).", ["Мне нра́вятся фи́льмы."]], ["Ahora a ella (ей).", ["Ей нра́вятся фи́льмы."]]], "Varias cosas: нра́вятся; a quién, en dativo.");
  diag("nr-0", 8, "u11-nravyatsya", "Мне нра́вится ту́фли.", "Мне нра́вятся ту́фли.", "La forma del verbo", ["El caso de ту́фли", "Falta я"], "ту́фли es plural: нра́вятся.");
  [["ры́ба"], ["пи́цца"], ["вода́"]].forEach(([ru], j) => { const s = S(ru);
    nat("pre-" + j, 8, "u11-nravyatsya", "Я предпочита́ю " + s.acc + ".", "Я предпочита́ю " + s.nom + ".", "предпочита́ть + acusativo."); });
  nat("op-0", 8, "u11-opinar", "Я ду́маю, что э́то интере́сно.", "Я ду́маю э́то интере́сно, что.", "что va enseguida después de ду́маю.");
  nat("op-1", 8, "u11-opinar", "По-мо́ему, э́то ва́жно.", "Я по-мо́ему, что э́то ва́жно.", "По-мо́ему va solo, con una coma.");
  [["Э́то интере́сно.", "Э́то интере́сный."], ["Э́то ва́жно.", "Э́то ва́жный."], ["Э́то удо́бно.", "Э́то удо́бный."]].forEach(([ok, mal], j) =>
    nat("eto-" + j, 8, "u11-eto", ok, mal, "De algo en general: Э́то + la forma en -о."));

  /* ── Módulo 9: charla ── */
  nat("ch-0", 9, "u11-charla", "Чем ты занима́ешься?", "Что ты занима́ешься?", "занима́ться + instrumental: чем.");
  nat("ch-1", 9, "u11-charla", "Каки́е у тебя́ пла́ны?", "Како́й у тебя́ пла́ны?", "пла́ны es plural: каки́е.");
  par("dev-0", 9, "u11-devolver", "Te preguntaron «Тебе́ нра́вится Москва́?». ¿Cómo devuelves la pregunta?", "А тебе́?", "А у тебя́?", "Mismo caso que la pregunta: тебе́.");
  par("dev-1", 9, "u11-devolver", "Te preguntaron «Каки́е у тебя́ пла́ны?». ¿Cómo devuelves la pregunta?", "А у тебя́?", "А тебе́?", "Mismo caso que la pregunta: у тебя́.");
  par("dev-2", 9, "u11-devolver", "Te preguntaron «Где ты живёшь?». ¿Cómo devuelves la pregunta?", "А ты?", "А тебе́?", "Mismo caso que la pregunta: ты.");

  /* ── Módulo 11: suavizar ── */
  [["Где банк?", "Извини́те, где банк?"], ["Дай меню́!", "Мо́жно меню́, пожа́луйста?"], ["Повтори́!", "Повтори́те, пожа́луйста."]].forEach(([mal, ok], j) =>
    nat("sua-" + j, 11, "u11-suavizar", ok, mal, "Con un desconocido: вы, извини́те y пожа́луйста.", { pide: "Le hablas a un desconocido. ¿Cuál suena natural?" }));

  /* ── Vocabulario nuevo (12/10/2026): significado y palabra-es-ru, en el módulo donde se presenta ── */
  const modDe = {};
  U11_GRUPOS.forEach(([m, t, pal]) => pal.split(" ").forEach(ru => { if (U11_GLOSA[ru] && !modDe[ru]) modDe[ru] = m; }));
  const nuevas = LEXICON_COMER.filter(e => (e.introducedIn || []).indexOf(11) >= 0 && U11_GLOSA[e.acento] && modDe[e.acento]);
  nuevas.forEach((e, i) => {
    const es = U11_GLOSA[e.acento], m = modDe[e.acento];
    const dis = baraja(nuevas.filter(x => x.id !== e.id && U11_GLOSA[x.acento] !== es && Math.abs(modDe[x.acento] - m) <= 1).map(x => U11_GLOSA[x.acento]), i).slice(0, 3);
    const base = { grupo: e.id, items: ["lex:" + e.id], oir: e.ru };
    if (dis.length >= 2) out.push(Object.assign({ id: "U11-sig-" + e.id, tipo: "significado", forma: "elegir", dificultad: 1, modulo: m, pide: "¿Qué significa?", grande: e.acento, audio: e.ru,
      opciones: baraja([es].concat(dis), i), correcta: es, explicacion: e.acento + " — " + es }, base));
    out.push(Object.assign({ id: "U11-pal-" + e.id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, modulo: m, pide: "Escribe en ruso: «" + es + "»", audio: e.ru, audioManual: true,
      pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + es }, base));
  });

  /* Cada ejercicio viejo apunta a su regla (para «Repasar la regla») */
  const REGLA_ID = [[/^U11-(nz|nzw)-/, "u11-nuzhen"], [/^U11-(pr|prw|prg|pra)-/, "u11-precios"], [/^U11-s2c-/, "u11-hochu-kupit"], [/^U11-s3p-/, "u11-pedir-comida"],
    [/^U11-(dg|dk|do|s4t)-/, "u11-gde-kuda"], [/^U11-(rt|rte)-/, "u11-indicaciones"], [/^U11-(ub|ubs)-/, "u11-donde-queda"], [/^U11-pb-/, "u11-net"],
    [/^U11-ms-/, "u11-responder"], [/^U11-cc-/, "u11-eto"], [/^U11-(s11|nt)-/, "u11-suavizar"]];
  out.forEach(e => { if (e.regla) return; const r = REGLA_ID.find(([rx]) => rx.test(e.id)); if (r) e.regla = r[1]; });
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
          if (/^(хочу|буду|ищу|купить|заказать|найти)$/.test(x) && nom && K(cz.sg[3]) !== K(sig) && z[2] && /nominativo/.test(z[2])) out.push("Lo que pides o buscas va en acusativo: **" + w[i] + " " + cz.sg[3] + "**.");
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
