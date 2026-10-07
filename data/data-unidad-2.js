/* ============================================================
   DATA-UNIDAD-2.JS — Unidad 2: Presentaciones y conversaciones básicas
   ------------------------------------------------------------
   Versión 07/10/2026: teoría ampliada (ids de regla, ejemplos explicados,
   frases desarmadas, errores típicos, chequeos, «Más a fondo») y ejercicios
   para entender la regla (situaciones, ¿por qué?, ¿suena natural?, oído),
   según PLAN_PROFUNDIZACION.md. Antes, 26/09/2026. Contenido de la unidad (módulos, textos,
   vocabulario por módulo) y banco de ejercicios. Las palabras viven
   en el léxico (introducedIn: [2]), las frases hechas en
   data-frases.js y los diálogos en data-dialogos.js (DLG-031 a 036,
   más algunos anteriores): acá solo se nombran por ID.

   U2_FRASES: frases verificadas de la unidad, con su traducción
   (varias válidas, la primera se muestra) y un ID del léxico por
   palabra. Los ejercicios se generan desde estas frases y desde el
   vocabulario; nunca combinando palabras al azar.
   ============================================================ */
const U2_FRASES = [{"id": "F2-001", "m": 1, "ru": "Здра́вствуйте!", "es": ["¡Hola!", "¡Buenos días!", "¡Buenas tardes!"], "lex": ["CMR-05479"]}, {"id": "F2-002", "m": 1, "ru": "Приве́т!", "es": ["¡Hola!"], "lex": ["CMR-02527"]}, {"id": "F2-003", "m": 1, "ru": "До́брое у́тро!", "es": ["¡Buen día!", "¡Buenos días!"], "lex": ["CMR-00662", "CMR-00336"]}, {"id": "F2-004", "m": 1, "ru": "До́брый день!", "es": ["¡Buenas tardes!", "¡Buen día!", "¡Buenos días!"], "lex": ["CMR-00662", "CMR-00071"]}, {"id": "F2-005", "m": 1, "ru": "До́брый ве́чер!", "es": ["¡Buenas noches!", "¡Buenas tardes!"], "lex": ["CMR-00662", "CMR-00295"]}, {"id": "F2-006", "m": 1, "ru": "Споко́йной но́чи!", "es": ["¡Que descanses!", "¡Buenas noches!"], "lex": ["CMR-01488", "CMR-00236"]}, {"id": "F2-007", "m": 1, "ru": "Пока́!", "es": ["¡Chau!", "¡Adiós!"], "lex": ["CMR-00267"]}, {"id": "F2-008", "m": 1, "ru": "До свида́ния!", "es": ["¡Hasta luego!", "¡Adiós!", "¡Hasta la vista!"], "lex": ["CMR-00051", "CMR-02946"]}, {"id": "F2-009", "m": 1, "ru": "До за́втра!", "es": ["¡Hasta mañana!"], "lex": ["CMR-00051", "CMR-00865"]}, {"id": "F2-010", "m": 1, "ru": "Спаси́бо!", "es": ["¡Gracias!"], "lex": ["CMR-02213"]}, {"id": "F2-011", "m": 1, "ru": "Пожа́луйста!", "es": ["¡De nada!", "¡Por favor!"], "lex": ["CMR-01243"]}, {"id": "F2-012", "m": 1, "ru": "Извини́те!", "es": ["¡Disculpe!", "¡Perdón!"], "lex": ["CMR-01992"]}, {"id": "F2-013", "m": 1, "ru": "Большо́е спаси́бо!", "es": ["¡Muchas gracias!"], "lex": ["CMR-00096", "CMR-02213"]}, {"id": "F2-014", "m": 1, "ru": "Приве́т, Ма́ша!", "es": ["¡Hola, Masha!"], "lex": ["CMR-02527", "CMR-05555"]}, {"id": "F2-015", "m": 1, "ru": "Здра́вствуйте, А́нна!", "es": ["¡Hola, Ana!", "¡Buenos días, Ana!"], "lex": ["CMR-05479", "CMR-05560"]}, {"id": "F2-016", "m": 1, "ru": "До за́втра, Ди́ма!", "es": ["¡Hasta mañana, Dima!"], "lex": ["CMR-00051", "CMR-00865", "CMR-05556"]}, {"id": "F2-017", "m": 1, "ru": "Спаси́бо, Лу́кас!", "es": ["¡Gracias, Lucas!"], "lex": ["CMR-02213", "CMR-05557"]}, {"id": "F2-018", "m": 1, "ru": "Пока́, А́нна!", "es": ["¡Chau, Ana!"], "lex": ["CMR-00267", "CMR-05560"]}, {"id": "F2-019", "m": 2, "ru": "Меня́ зову́т Ива́н.", "es": ["Me llamo Iván."], "lex": ["CMR-00005", "CMR-00912", "CMR-05559"]}, {"id": "F2-020", "m": 2, "ru": "Меня́ зову́т А́нна.", "es": ["Me llamo Ana."], "lex": ["CMR-00005", "CMR-00912", "CMR-05560"]}, {"id": "F2-021", "m": 2, "ru": "Я Лу́кас.", "es": ["Soy Lucas.", "Yo soy Lucas."], "lex": ["CMR-00005", "CMR-05557"]}, {"id": "F2-022", "m": 2, "ru": "Я Ма́ша.", "es": ["Soy Masha.", "Yo soy Masha."], "lex": ["CMR-00005", "CMR-05555"]}, {"id": "F2-023", "m": 2, "ru": "Э́то Ди́ма.", "es": ["Este es Dima.", "Es Dima."], "lex": ["CMR-00012", "CMR-05556"]}, {"id": "F2-024", "m": 2, "ru": "Э́то А́нна.", "es": ["Esta es Ana.", "Es Ana."], "lex": ["CMR-00012", "CMR-05560"]}, {"id": "F2-025", "m": 2, "ru": "О́чень прия́тно!", "es": ["¡Mucho gusto!", "¡Encantado!", "¡Encantada!"], "lex": ["CMR-00069", "CMR-02314"]}, {"id": "F2-026", "m": 2, "ru": "Мне то́же.", "es": ["Igualmente.", "A mí también."], "lex": ["CMR-00005", "CMR-00111"]}, {"id": "F2-027", "m": 2, "ru": "Рад познако́миться!", "es": ["¡Encantado!", "¡Encantado de conocerte!"], "lex": ["CMR-01976", "CMR-01793"]}, {"id": "F2-028", "m": 2, "ru": "Ра́да познако́миться!", "es": ["¡Encantada!", "¡Encantada de conocerte!"], "lex": ["CMR-01976", "CMR-01793"]}, {"id": "F2-029", "m": 2, "ru": "Э́то мой друг Ива́н.", "es": ["Este es mi amigo Iván."], "lex": ["CMR-00012", "CMR-00060", "CMR-00106", "CMR-05559"]}, {"id": "F2-030", "m": 2, "ru": "Э́то моя́ подру́га А́нна.", "es": ["Esta es mi amiga Ana."], "lex": ["CMR-00012", "CMR-00060", "CMR-01556", "CMR-05560"]}, {"id": "F2-031", "m": 2, "ru": "Меня́ зову́т Лу́кас, я студе́нт.", "es": ["Me llamo Lucas, soy estudiante."], "lex": ["CMR-00005", "CMR-00912", "CMR-05557", "CMR-00005", "CMR-01153"]}, {"id": "F2-032", "m": 2, "ru": "Я студе́нтка.", "es": ["Soy estudiante."], "lex": ["CMR-00005", "CMR-05448"]}, {"id": "F2-033", "m": 3, "ru": "Как тебя́ зову́т?", "es": ["¿Cómo te llamás?"], "lex": ["CMR-00019", "CMR-00033", "CMR-00912"]}, {"id": "F2-034", "m": 3, "ru": "Как вас зову́т?", "es": ["¿Cómo se llama?", "¿Cómo se llama usted?"], "lex": ["CMR-00019", "CMR-00038", "CMR-00912"]}, {"id": "F2-035", "m": 3, "ru": "Кто э́то?", "es": ["¿Quién es?", "¿Quién es este?", "¿Quién es esta?"], "lex": ["CMR-00067", "CMR-00012"]}, {"id": "F2-036", "m": 3, "ru": "Как его́ зову́т?", "es": ["¿Cómo se llama él?", "¿Cómo se llama?"], "lex": ["CMR-00019", "CMR-00007", "CMR-00912"]}, {"id": "F2-037", "m": 3, "ru": "Его́ зову́т Ди́ма.", "es": ["Se llama Dima.", "Él se llama Dima."], "lex": ["CMR-00007", "CMR-00912", "CMR-05556"]}, {"id": "F2-038", "m": 3, "ru": "Как её зову́т?", "es": ["¿Cómo se llama ella?", "¿Cómo se llama?"], "lex": ["CMR-00019", "CMR-00013", "CMR-00912"]}, {"id": "F2-039", "m": 3, "ru": "Её зову́т О́льга.", "es": ["Se llama Olga.", "Ella se llama Olga."], "lex": ["CMR-00013", "CMR-00912", "CMR-05558"]}, {"id": "F2-040", "m": 3, "ru": "Что э́то?", "es": ["¿Qué es esto?", "¿Qué es eso?"], "lex": ["CMR-00009", "CMR-00012"]}, {"id": "F2-041", "m": 3, "ru": "Кто э́то? Э́то Ма́ша.", "es": ["¿Quién es? Es Masha."], "lex": ["CMR-00067", "CMR-00012", "CMR-00012", "CMR-05555"]}, {"id": "F2-042", "m": 4, "ru": "Отку́да ты?", "es": ["¿De dónde sos?"], "lex": ["CMR-00761", "CMR-00033"]}, {"id": "F2-043", "m": 4, "ru": "Отку́да вы?", "es": ["¿De dónde es usted?", "¿De dónde es?", "¿De dónde son?"], "lex": ["CMR-00761", "CMR-00038"]}, {"id": "F2-044", "m": 4, "ru": "Я из Аргенти́ны.", "es": ["Soy de Argentina.", "Soy de la Argentina."], "lex": ["CMR-00005", "CMR-00020", "CMR-05503"]}, {"id": "F2-045", "m": 4, "ru": "Я из Испа́нии.", "es": ["Soy de España."], "lex": ["CMR-00005", "CMR-00020", "CMR-05487"]}, {"id": "F2-046", "m": 4, "ru": "Я из Росси́и.", "es": ["Soy de Rusia."], "lex": ["CMR-00005", "CMR-00020", "CMR-05481"]}, {"id": "F2-047", "m": 4, "ru": "Ма́ша из Росси́и.", "es": ["Masha es de Rusia."], "lex": ["CMR-05555", "CMR-00020", "CMR-05481"]}, {"id": "F2-048", "m": 4, "ru": "Лу́кас из Аргенти́ны.", "es": ["Lucas es de Argentina.", "Lucas es de la Argentina."], "lex": ["CMR-05557", "CMR-00020", "CMR-05503"]}, {"id": "F2-049", "m": 4, "ru": "Ива́н из Москвы́.", "es": ["Iván es de Moscú."], "lex": ["CMR-05559", "CMR-00020", "CMR-05513"]}, {"id": "F2-050", "m": 4, "ru": "Я из Барсело́ны.", "es": ["Soy de Barcelona."], "lex": ["CMR-00005", "CMR-00020", "CMR-05515"]}, {"id": "F2-051", "m": 4, "ru": "Ты ру́сский?", "es": ["¿Sos ruso?"], "lex": ["CMR-00033", "CMR-00173"]}, {"id": "F2-052", "m": 4, "ru": "Нет, я аргенти́нец.", "es": ["No, soy argentino.", "No, yo soy argentino."], "lex": ["CMR-00107", "CMR-00005", "CMR-05523"]}, {"id": "F2-053", "m": 4, "ru": "Она́ испа́нка.", "es": ["Ella es española.", "Es española."], "lex": ["CMR-00013", "CMR-05522"]}, {"id": "F2-054", "m": 4, "ru": "Он италья́нец.", "es": ["Él es italiano.", "Es italiano."], "lex": ["CMR-00007", "CMR-05530"]}, {"id": "F2-055", "m": 4, "ru": "Ты италья́нка?", "es": ["¿Sos italiana?"], "lex": ["CMR-00033", "CMR-05531"]}, {"id": "F2-056", "m": 4, "ru": "Да, я италья́нка.", "es": ["Sí, soy italiana."], "lex": ["CMR-00116", "CMR-00005", "CMR-05531"]}, {"id": "F2-057", "m": 4, "ru": "Мы из Брази́лии.", "es": ["Somos de Brasil.", "Nosotros somos de Brasil."], "lex": ["CMR-00018", "CMR-00020", "CMR-05502"]}, {"id": "F2-058", "m": 4, "ru": "Они́ из Кита́я.", "es": ["Son de China.", "Ellos son de China."], "lex": ["CMR-00017", "CMR-00020", "CMR-05506"]}, {"id": "F2-059", "m": 4, "ru": "Вы из Фра́нции?", "es": ["¿Usted es de Francia?", "¿Es de Francia?", "¿Ustedes son de Francia?"], "lex": ["CMR-00038", "CMR-00020", "CMR-05489"]}, {"id": "F2-060", "m": 4, "ru": "Он не́мец, а она́ францу́женка.", "es": ["Él es alemán y ella es francesa.", "Él es alemán, y ella, francesa."], "lex": ["CMR-00007", "CMR-00962", "CMR-00010", "CMR-00013", "CMR-05529"]}, {"id": "F2-061", "m": 5, "ru": "Я говорю́ по-ру́сски.", "es": ["Hablo ruso.", "Yo hablo ruso."], "lex": ["CMR-00005", "CMR-00058", "CMR-03512"]}, {"id": "F2-062", "m": 5, "ru": "Я говорю́ по-испа́нски.", "es": ["Hablo español.", "Yo hablo español."], "lex": ["CMR-00005", "CMR-00058", "CMR-05547"]}, {"id": "F2-063", "m": 5, "ru": "Ты говори́шь по-англи́йски?", "es": ["¿Hablás inglés?"], "lex": ["CMR-00033", "CMR-00058", "CMR-05475"]}, {"id": "F2-064", "m": 5, "ru": "Вы говори́те по-ру́сски?", "es": ["¿Habla ruso?", "¿Usted habla ruso?", "¿Hablan ruso?"], "lex": ["CMR-00038", "CMR-00058", "CMR-03512"]}, {"id": "F2-065", "m": 5, "ru": "Я немно́го говорю́ по-ру́сски.", "es": ["Hablo un poco de ruso.", "Hablo un poco ruso."], "lex": ["CMR-00005", "CMR-00770", "CMR-00058", "CMR-03512"]}, {"id": "F2-066", "m": 5, "ru": "Я учу́ ру́сский.", "es": ["Estudio ruso.", "Aprendo ruso."], "lex": ["CMR-00005", "CMR-01602", "CMR-00173"]}, {"id": "F2-067", "m": 5, "ru": "Я изуча́ю ру́сский язы́к.", "es": ["Estudio ruso.", "Estudio el idioma ruso.", "Estudio la lengua rusa."], "lex": ["CMR-00005", "CMR-02084", "CMR-00173", "CMR-00306"]}, {"id": "F2-068", "m": 5, "ru": "Она́ говори́т по-францу́зски.", "es": ["Ella habla francés.", "Habla francés."], "lex": ["CMR-00013", "CMR-00058", "CMR-05548"]}, {"id": "F2-069", "m": 5, "ru": "Мы говори́м по-испа́нски и по-катала́нски.", "es": ["Hablamos español y catalán.", "Nosotros hablamos español y catalán."], "lex": ["CMR-00018", "CMR-00058", "CMR-05547", "CMR-00001", "CMR-05551"]}, {"id": "F2-070", "m": 5, "ru": "Я понима́ю по-ру́сски, но пло́хо говорю́.", "es": ["Entiendo ruso, pero hablo mal.", "Entiendo el ruso, pero lo hablo mal."], "lex": ["CMR-00005", "CMR-00160", "CMR-03512", "CMR-00016", "CMR-00947", "CMR-00058"]}, {"id": "F2-071", "m": 5, "ru": "Я не говорю́ по-кита́йски.", "es": ["No hablo chino.", "Yo no hablo chino."], "lex": ["CMR-00005", "CMR-00003", "CMR-00058", "CMR-05553"]}, {"id": "F2-072", "m": 5, "ru": "Он изуча́ет италья́нский язы́к.", "es": ["Él estudia italiano.", "Estudia italiano.", "Él estudia el idioma italiano."], "lex": ["CMR-00007", "CMR-02084", "CMR-02747", "CMR-00306"]}, {"id": "F2-073", "m": 6, "ru": "Как дела́?", "es": ["¿Cómo andás?", "¿Cómo estás?", "¿Qué tal?"], "lex": ["CMR-00019", "CMR-00065"]}, {"id": "F2-074", "m": 6, "ru": "Как у вас дела́?", "es": ["¿Cómo le va?", "¿Cómo está?", "¿Cómo les va?"], "lex": ["CMR-00019", "CMR-00021", "CMR-00038", "CMR-00065"]}, {"id": "F2-075", "m": 6, "ru": "Хорошо́, спаси́бо.", "es": ["Bien, gracias."], "lex": ["CMR-00190", "CMR-02213"]}, {"id": "F2-076", "m": 6, "ru": "О́чень хорошо́!", "es": ["¡Muy bien!"], "lex": ["CMR-00069", "CMR-00190"]}, {"id": "F2-077", "m": 6, "ru": "Норма́льно.", "es": ["Bien.", "Normal.", "Bien, sin novedades."], "lex": ["CMR-03966"]}, {"id": "F2-078", "m": 6, "ru": "Пло́хо.", "es": ["Mal."], "lex": ["CMR-00947"]}, {"id": "F2-079", "m": 6, "ru": "Отли́чно!", "es": ["¡Excelente!", "¡Muy bien!", "¡Bárbaro!"], "lex": ["CMR-02554"]}, {"id": "F2-080", "m": 6, "ru": "Так себе́.", "es": ["Más o menos."], "lex": ["CMR-00030", "CMR-03476"]}, {"id": "F2-081", "m": 6, "ru": "А у тебя́?", "es": ["¿Y vos?", "¿Y a vos?"], "lex": ["CMR-00010", "CMR-00021", "CMR-00033"]}, {"id": "F2-082", "m": 6, "ru": "А у вас?", "es": ["¿Y usted?", "¿Y a usted?"], "lex": ["CMR-00010", "CMR-00021", "CMR-00038"]}, {"id": "F2-083", "m": 6, "ru": "Хорошо́, а у тебя́?", "es": ["Bien, ¿y vos?"], "lex": ["CMR-00190", "CMR-00010", "CMR-00021", "CMR-00033"]}, {"id": "F2-084", "m": 6, "ru": "Спаси́бо, отли́чно!", "es": ["¡Gracias, excelente!", "¡Muy bien, gracias!"], "lex": ["CMR-02213", "CMR-02554"]}, {"id": "F2-085", "m": 7, "ru": "Я Ива́н.", "es": ["Soy Iván.", "Yo soy Iván."], "lex": ["CMR-00005", "CMR-05559"]}, {"id": "F2-086", "m": 7, "ru": "Ты Ма́ша?", "es": ["¿Sos Masha?", "¿Vos sos Masha?"], "lex": ["CMR-00033", "CMR-05555"]}, {"id": "F2-087", "m": 7, "ru": "Он Лу́кас.", "es": ["Él es Lucas.", "Es Lucas."], "lex": ["CMR-00007", "CMR-05557"]}, {"id": "F2-088", "m": 7, "ru": "Она́ А́нна.", "es": ["Ella es Ana.", "Es Ana."], "lex": ["CMR-00013", "CMR-05560"]}, {"id": "F2-089", "m": 7, "ru": "Мы студе́нты.", "es": ["Somos estudiantes.", "Nosotros somos estudiantes."], "lex": ["CMR-00018", "CMR-01153"]}, {"id": "F2-090", "m": 7, "ru": "Вы студе́нт?", "es": ["¿Usted es estudiante?", "¿Es estudiante?"], "lex": ["CMR-00038", "CMR-01153"]}, {"id": "F2-091", "m": 7, "ru": "Они́ до́ма.", "es": ["Están en casa.", "Ellos están en casa."], "lex": ["CMR-00017", "CMR-00832"]}, {"id": "F2-092", "m": 7, "ru": "Он из Росси́и, а она́ из Испа́нии.", "es": ["Él es de Rusia y ella es de España.", "Él es de Rusia, y ella, de España."], "lex": ["CMR-00007", "CMR-00020", "CMR-05481", "CMR-00010", "CMR-00013", "CMR-00020", "CMR-05487"]}, {"id": "F2-093", "m": 7, "ru": "Мы из Аргенти́ны.", "es": ["Somos de Argentina.", "Somos de la Argentina."], "lex": ["CMR-00018", "CMR-00020", "CMR-05503"]}, {"id": "F2-094", "m": 7, "ru": "Они́ говоря́т по-ру́сски.", "es": ["Ellos hablan ruso.", "Hablan ruso."], "lex": ["CMR-00017", "CMR-02245", "CMR-03512"]}, {"id": "F2-095", "m": 8, "ru": "Я не понима́ю.", "es": ["No entiendo.", "No comprendo."], "lex": ["CMR-00005", "CMR-00003", "CMR-00160"]}, {"id": "F2-096", "m": 8, "ru": "Повтори́те, пожа́луйста.", "es": ["¿Puede repetir, por favor?", "Repita, por favor."], "lex": ["CMR-01531", "CMR-01243"]}, {"id": "F2-097", "m": 8, "ru": "Говори́те ме́дленнее, пожа́луйста.", "es": ["Hable más despacio, por favor."], "lex": ["CMR-00058", "CMR-01044", "CMR-01243"]}, {"id": "F2-098", "m": 8, "ru": "Что э́то?", "es": ["¿Qué es esto?", "¿Qué es eso?"], "lex": ["CMR-00009", "CMR-00012"]}, {"id": "F2-099", "m": 8, "ru": "Что зна́чит «спаси́бо»?", "es": ["¿Qué significa «spasiba»?", "¿Qué quiere decir «spasiba»?"], "lex": ["CMR-00009", "CMR-00382", "CMR-02213"]}, {"id": "F2-100", "m": 8, "ru": "Я учу́ ру́сский язы́к.", "es": ["Estudio ruso.", "Aprendo ruso.", "Estudio el idioma ruso."], "lex": ["CMR-00005", "CMR-01602", "CMR-00173", "CMR-00306"]}, {"id": "F2-101", "m": 8, "ru": "Извини́те, я не понима́ю.", "es": ["Disculpe, no entiendo.", "Perdón, no entiendo."], "lex": ["CMR-01992", "CMR-00005", "CMR-00003", "CMR-00160"]}, {"id": "F2-102", "m": 8, "ru": "Повтори́, пожа́луйста.", "es": ["Repetí, por favor.", "¿Podés repetir, por favor?"], "lex": ["CMR-01531", "CMR-01243"]}];
const U2_VOCAB = {"1": ["CMR-05479", "CMR-02527", "CMR-00662", "CMR-00336", "CMR-00071", "CMR-00295", "CMR-01488", "CMR-00236", "CMR-00267", "CMR-02946", "CMR-00865", "CMR-02213", "CMR-01243", "CMR-01992", "CMR-00096"], "2": ["CMR-00005", "CMR-00912", "CMR-00012", "CMR-00069", "CMR-02314", "CMR-01976", "CMR-01793", "CMR-00111", "CMR-00239", "CMR-01013", "CMR-00106", "CMR-01556", "CMR-01153", "CMR-05448", "CMR-05555", "CMR-05556", "CMR-05557", "CMR-05558", "CMR-05559", "CMR-05560"], "3": ["CMR-00019", "CMR-00067", "CMR-00009", "CMR-00033", "CMR-00038"], "4": ["CMR-00761", "CMR-05481", "CMR-05482", "CMR-05483", "CMR-05484", "CMR-05485", "CMR-05486", "CMR-05487", "CMR-05488", "CMR-05489", "CMR-05490", "CMR-05491", "CMR-05492", "CMR-05493", "CMR-05494", "CMR-05495", "CMR-05496", "CMR-05510", "CMR-05497", "CMR-05498", "CMR-05499", "CMR-05500", "CMR-05501", "CMR-05511", "CMR-05502", "CMR-05503", "CMR-05512", "CMR-05504", "CMR-05506", "CMR-05507", "CMR-05508", "CMR-05509", "CMR-05513", "CMR-05514", "CMR-05515", "CMR-05516", "CMR-05517", "CMR-05518", "CMR-05519", "CMR-05520", "CMR-00173", "CMR-05521", "CMR-05522", "CMR-05523", "CMR-05524", "CMR-05525", "CMR-05526", "CMR-05527", "CMR-05528", "CMR-03344", "CMR-05529", "CMR-05530", "CMR-05531", "CMR-00962", "CMR-05532", "CMR-05533", "CMR-05534", "CMR-01574", "CMR-05535", "CMR-03601", "CMR-05536", "CMR-04851", "CMR-05537", "CMR-04380", "CMR-05538", "CMR-05539", "CMR-05540", "CMR-05541", "CMR-05542", "CMR-05543", "CMR-05544", "CMR-00116", "CMR-00107"], "5": ["CMR-00306", "CMR-00058", "CMR-02084", "CMR-01602", "CMR-00160", "CMR-00061", "CMR-04760", "CMR-01121", "CMR-01191", "CMR-00966", "CMR-02747", "CMR-02043", "CMR-03170", "CMR-05545", "CMR-05546", "CMR-03512", "CMR-05547", "CMR-05475", "CMR-05548", "CMR-05549", "CMR-05550", "CMR-05551", "CMR-05552", "CMR-05553", "CMR-05554"], "6": ["CMR-00065", "CMR-00190", "CMR-03966", "CMR-00947", "CMR-02554", "CMR-00030", "CMR-00047", "CMR-00010", "CMR-00021"], "7": ["CMR-00007", "CMR-00013", "CMR-00245", "CMR-00018", "CMR-00017"], "8": ["CMR-00003", "CMR-01531", "CMR-01044", "CMR-00899", "CMR-00094"]};
/* Ampliación opcional (01/10/2026): países, gentilicios, continentes y ciudades
   del diccionario de bolsillo. No cuentan para el progreso ni para la evaluación. */
const U2_AMPLIACION = {"4": ["CMR-05937", "CMR-05938", "CMR-05939", "CMR-05940", "CMR-05941", "CMR-05978", "CMR-05979", "CMR-05980", "CMR-05981", "CMR-05982", "CMR-05983", "CMR-05984", "CMR-05985", "CMR-05986", "CMR-05987", "CMR-05988", "CMR-05989", "CMR-05990", "CMR-05991", "CMR-05992", "CMR-05993", "CMR-05994", "CMR-05995", "CMR-05996", "CMR-05997", "CMR-05998", "CMR-05999", "CMR-06000", "CMR-06001", "CMR-06002", "CMR-06003", "CMR-06004", "CMR-06014", "CMR-06015", "CMR-06016", "CMR-06017", "CMR-06018", "CMR-06019", "CMR-06020", "CMR-06021", "CMR-06022", "CMR-06023", "CMR-06024", "CMR-06025", "CMR-06026", "CMR-06027", "CMR-06028", "CMR-06029", "CMR-06030", "CMR-06031", "CMR-06032", "CMR-06033", "CMR-06034", "CMR-06035", "CMR-06036", "CMR-06037", "CMR-06038", "CMR-06039", "CMR-06040", "CMR-06041", "CMR-06042", "CMR-06043", "CMR-06044", "CMR-06045", "CMR-06046", "CMR-06047", "CMR-06048", "CMR-06049", "CMR-06050", "CMR-06051", "CMR-06052", "CMR-06053", "CMR-06054", "CMR-06055", "CMR-06056", "CMR-06057", "CMR-06058", "CMR-06059", "CMR-06060", "CMR-06061", "CMR-06062", "CMR-06063", "CMR-06064", "CMR-06065", "CMR-06066", "CMR-06067", "CMR-06068", "CMR-06069", "CMR-06070", "CMR-06071", "CMR-06072", "CMR-06073", "CMR-06074", "CMR-06075", "CMR-06076", "CMR-06077", "CMR-06078", "CMR-06079", "CMR-06080", "CMR-06081", "CMR-06082", "CMR-06083", "CMR-06084", "CMR-06085", "CMR-06086", "CMR-06087", "CMR-06088", "CMR-06089", "CMR-06090", "CMR-06091", "CMR-06092", "CMR-06093", "CMR-06094", "CMR-06095", "CMR-06096", "CMR-06097", "CMR-06098", "CMR-06099", "CMR-06100", "CMR-06101", "CMR-06102", "CMR-06103", "CMR-06104", "CMR-06105", "CMR-06106", "CMR-06107", "CMR-06108", "CMR-06109", "CMR-06110", "CMR-06111", "CMR-06112"]};
const UNIDAD_2 = {
  id: 2,
  titulo: "Presentaciones y conversaciones básicas",
  tituloRu: "Знако́мство и пе́рвые разгово́ры",
  objetivo: "Saludar y despedirte, presentarte, preguntar nombres, decir de dónde sos y qué idiomas hablás, y sostener una conversación de un minuto, todo en cirílico.",
  tiempo: "2 a 3 semanas con práctica diaria (unas 12–15 horas)",
  modulos: [
    {
      id: "u2m1", n: 1, tipo: "leccion", titulo: "Saludos", resumen: "Hola, chau, gracias: formal e informal.",
      intro: "En ruso hay un saludo para la confianza y otro para el respeto, y conviene no mezclarlos. En este módulo vas a aprender a saludar, despedirte y agradecer según a quién le hablás y a qué hora.",
      secciones: [
        { id: "u2-formal", titulo: "Formal e informal",
          texto: "Приве́т y пока́ son de confianza: amigos, familia, gente joven de tu edad. Здра́вствуйте y до свида́ния son formales: un profesor, alguien mayor, un desconocido, un negocio, o cuando le hablás a varias personas.\nNo tiene que ver con la simpatía: alguien puede ser muy amable y aun así decirte здра́вствуйте, porque todavía no hay confianza.",
          ejemplos: [
            { ru: "{Приве́т}, Ма́ша!", es: "¡Hola, Masha!", por: "Ма́ша es una amiga: va el saludo de confianza." },
            { ru: "{Здра́вствуйте}, А́нна!", es: "¡Buenos días, Ana!", por: "Si А́нна es tu profesora o alguien que conocés poco, va el saludo formal." },
            { ru: "{Пока́}, Ди́ма!", es: "¡Chau, Dima!", por: "Con un amigo, la despedida de confianza." },
            { ru: "{До свида́ния}!", es: "¡Hasta luego!", por: "Al irte de un negocio o de una clase: la despedida formal." }],
          destacado: "Con dudas, usá la forma formal: nunca queda mal.",
          truco: "Приве́т ↔ пока́ (confianza). Здра́вствуйте ↔ до свида́ния (respeto).",
          ojo: "En здра́вствуйте la primera **в** no se pronuncia: suena «zdrástvuiti».",
          mas: { texto: "¿Y si saludás a un grupo de amigos? Con varios amigos, lo natural sigue siendo приве́т. Pero si en el grupo hay alguien mayor o alguien que no conocés, здра́вствуйте es lo seguro.\nЗдра́вствуйте sirve a cualquier hora del día. Por eso es el saludo formal más útil: si no sabés cuál usar, usá ese. Y saludar a un profesor con приве́т suena demasiado familiar, aunque sea joven y simpático." },
          chequeo: [
            { pide: "Entrás a un negocio. ¿Qué decís?", opciones: ["Приве́т!", "Здра́вствуйте!"], ok: "Здра́вствуйте!", por: "Es un desconocido: va el saludo formal." },
            { pide: "Te despedís de un amigo. ¿Qué decís?", opciones: ["Пока́!", "До свида́ния!"], ok: "Пока́!", por: "Con un amigo, la despedida de confianza. До свида́ния no está mal, pero suena distante." }] },
        { id: "u2-hora", titulo: "Según la hora",
          texto: "До́брое у́тро va a la mañana, до́брый день durante el día y до́брый ве́чер a la tarde-noche, siempre para saludar al llegar. Споко́йной но́чи no es un saludo: se dice solo al irse a dormir, como «que descanses».",
          ejemplos: [
            { ru: "{До́брое у́тро}!", es: "¡Buen día!", por: "A la mañana, más o menos hasta el mediodía." },
            { ru: "{До́брый день}!", es: "¡Buenas tardes!", por: "Del mediodía a la tarde. Es un poco formal: queda bien en un negocio o en una oficina." },
            { ru: "{До́брый ве́чер}!", es: "¡Buenas noches!", por: "Al llegar a la noche, por ejemplo a una cena." },
            { ru: "{Споко́йной но́чи}!", es: "¡Que descanses!", por: "Solo cuando alguien se va a dormir, nunca al llegar." }],
          mas: { texto: "До́брое у́тро, до́брый день y до́брый ве́чер son un poco formales, pero se usan con todos: a un amigo, a la mañana, до́брое у́тро le queda perfecto. Entre amigos, a cualquier hora, lo más común sigue siendo приве́т.\nPara despedirse a la noche no hay una fórmula especial: до свида́ния o пока́. Споко́йной но́чи queda solo para cuando alguien se va a dormir." },
          chequeo: [{ pide: "Llegás a una cena a las nueve de la noche. ¿Qué decís?", opciones: ["До́брый ве́чер!", "Споко́йной но́чи!"], ok: "До́брый ве́чер!", por: "Споко́йной но́чи es para irse a dormir, no para llegar." }] },
        { id: "u2-cortesia", titulo: "Cortesía",
          texto: "Спаси́бо es «gracias» y большо́е спаси́бо, «muchas gracias». Пожа́луйста sirve para tres cosas: «por favor», «de nada» y «acá tiene» al alcanzar algo. Извини́те es «disculpe»: para pedir perdón o para llamar la atención de alguien antes de preguntar.",
          ejemplos: [
            { ru: "Спаси́бо! — {Пожа́луйста}!", es: "¡Gracias! —¡De nada!", por: "Пожа́луйста es la respuesta al спаси́бо." },
            { ru: "{Большо́е} спаси́бо!", es: "¡Muchas gracias!", por: "Большо́е quiere decir «grande»: un «gran gracias»." },
            { ru: "{Извини́те}!", es: "¡Disculpe!", por: "Para pedir perdón, o para llamar a alguien antes de preguntarle algo." }],
          chequeo: [{ pide: "Te dicen спаси́бо. ¿Qué contestás?", opciones: ["Пожа́луйста!", "Извини́те!", "Пока́!"], ok: "Пожа́луйста!", por: "Пожа́луйста también es «de nada»." }] }
      ],
      vocab: U2_VOCAB[1], frases: ["FRS-001", "FRS-002", "FRS-003", "FRS-004", "FRS-005", "FRS-014", "FRS-009", "FRS-010", "FRS-011", "FRS-024", "FRS-062", "FRS-025", "FRS-026", "FRS-027"],
      dialogos: ["DLG-001", "DLG-005", "DLG-006"]
    },
    {
      id: "u2m2", n: 2, tipo: "leccion", titulo: "Presentarse", resumen: "Меня́ зову́т…, я…, э́то…",
      intro: "Para decir tu nombre hay dos formas, y para presentar a alguien alcanza con э́то. En este módulo aparece además una sorpresa del ruso: en presente no se dice el verbo «ser».",
      secciones: [
        { id: "u2-me-llaman", titulo: "Меня́ зову́т…",
          texto: "Es la forma más común de decir tu nombre. Literalmente dice «a mí me llaman…». El nombre va al final, tal cual, sin cambios.",
          desarmar: { es: "Me llamo Iván.", partes: [
            { txt: "Меня́", rol: "a mí", nota: "Меня́ es una forma de я: «a mí». Por eso no se dice «я зову́т»." },
            { txt: "зову́т", rol: "me llaman", nota: "Зову́т = «llaman». No cambia: sirve para cualquier persona." },
            { txt: "Ива́н", rol: "el nombre", nota: "El nombre, tal cual." }] },
          ejemplos: [
            { ru: "{Меня́ зову́т} А́нна.", es: "Me llamo Ana.", por: "Igual para un hombre que para una mujer: solo cambia el nombre." },
            { ru: "{Меня́ зову́т} Лу́кас, я студе́нт.", es: "Me llamo Lucas, soy estudiante.", por: "Después del nombre se puede seguir con más datos." }],
          errores: [{ mal: "Я зову́т Ива́н.", bien: "{Меня́} зову́т Ива́н.", por: "Зову́т va con меня́, «a mí»." }],
          mas: { texto: "Зову́т no cambia nunca: sirve para «me llaman», «te llaman», «lo llaman». Lo que cambia es la palabra de adelante, que dice a quién. Por ahora conocés меня́, «a mí»; las demás aparecen cuando aprendas a preguntar el nombre.\nTambién vas a oír и́мя («nombre») y фами́лия («apellido»), sobre todo en formularios y en situaciones formales." },
          chequeo: [{ pide: "¿Cuál está bien?", opciones: ["Меня́ зову́т Ма́ша.", "Я зову́т Ма́ша."], ok: "Меня́ зову́т Ма́ша.", por: "Зову́т va con меня́: «a mí me llaman»." }] },
        { id: "u2-sin-ser", titulo: "Sin verbo «ser»",
          texto: "En presente, el ruso no usa «soy», «es», «somos»: я Лу́кас es «yo (soy) Lucas», э́то Ди́ма es «este (es) Dima», я студе́нт es «yo (soy) estudiante». Para decir quién o qué es alguien, alcanza con poner las dos palabras juntas.",
          ejemplos: [
            { ru: "Я студе́нт.", es: "Soy estudiante.", por: "Я y lo que sos, uno al lado del otro." },
            { ru: "Э́то Ди́ма.", es: "Este es Dima.", por: "Э́то presenta a alguien: «este (es)»." },
            { ru: "Э́то моя́ подру́га А́нна.", es: "Esta es mi amiga Ana.", por: "Э́то, quién es y el nombre: ningún verbo." }],
          destacado: "Я Лу́кас = Yo (soy) Lucas. Э́то А́нна = Esta (es) Ana.",
          errores: [{ mal: "Я есть Ива́н.", bien: "Я Ива́н.", por: "En presente no se dice есть para «soy»." }],
          chequeo: [{ pide: "¿Cuál suena natural?", opciones: ["Я студе́нт.", "Я есть студе́нт."], ok: "Я студе́нт.", por: "Sin verbo: я y lo que sos." }] },
        { id: "u2-dos-formas", titulo: "Меня́ зову́т Ива́н o я Ива́н",
          texto: "Las dos están bien. Меня́ зову́т Ива́н es la presentación completa; я Ива́н es más corta, como «soy Iván», y se usa mucho al contestar o al presentarse rápido.",
          ejemplos: [
            { ru: "Здра́вствуйте! {Меня́ зову́т} О́льга.", es: "¡Buenos días! Me llamo Olga.", por: "Presentación completa: en una clase, en una reunión." },
            { ru: "Приве́т! {Я} Ди́ма.", es: "¡Hola! Soy Dima.", por: "Corta y rápida: entre gente joven." }] },
        { id: "u2-genero-hablante", titulo: "Рад o ра́да: el género",
          texto: "Algunas palabras cambian según quién habla. Un hombre dice рад познако́миться («encantado»); una mujer, ра́да познако́миться («encantada»). Pasa lo mismo con студе́нт y студе́нтка, друг y подру́га. Es el género, que en ruso se ve en muchas palabras; por ahora alcanza con notarlo.",
          ejemplos: [
            { ru: "{Рад} познако́миться!", es: "¡Encantado!", por: "Lo dice Лу́кас: habla un hombre." },
            { ru: "{Ра́да} познако́миться!", es: "¡Encantada!", por: "Lo dice А́нна: la **-а** final muestra que habla una mujer." },
            { ru: "Э́то мой {друг} Ива́н.", es: "Este es mi amigo Iván.", por: "Друг: un amigo." },
            { ru: "Э́то {моя́ подру́га} А́нна.", es: "Esta es mi amiga Ana.", por: "Подру́га: una amiga. Fijate que también cambia мой → моя́." }],
          errores: [{ mal: "Ма́ша — студе́нт.", bien: "Ма́ша — {студе́нтка}.", por: "Ма́ша es mujer: студе́нтка." }],
          chequeo: [{ pide: "Habla А́нна. ¿Qué dice?", opciones: ["Рад познако́миться!", "Ра́да познако́миться!"], ok: "Ра́да познако́миться!", por: "Habla una mujer: ра́да." }] },
        { id: "u2-contestar", titulo: "Contestar",
          texto: "A о́чень прия́тно («mucho gusto») se contesta мне то́же («igualmente»). Para presentar a alguien: познако́мься, э́то Ди́ма («te presento a Dima»).",
          ejemplos: [
            { ru: "О́чень прия́тно! — {Мне то́же}.", es: "¡Mucho gusto! —Igualmente.", por: "Мне то́же = «a mí también»." },
            { ru: "{Познако́мься}, э́то Ди́ма.", es: "Te presento a Dima.", por: "Познако́мься = «conocé a…»: para presentar a alguien con confianza." }] }
      ],
      vocab: U2_VOCAB[2], frases: ["FRS-017", "FRS-018", "FRS-019", "FRS-053", "FRS-020"], dialogos: ["DLG-031", "DLG-034"]
    },
    {
      id: "u2m3", n: 3, tipo: "leccion", titulo: "Preguntar nombres", resumen: "¿Cómo te llamás? ¿Quién es?",
      intro: "Para preguntar el nombre, el ruso usa la misma construcción que para decirlo. Y acá aparece la diferencia más importante del trato: ты o вы.",
      secciones: [
        { id: "u2-preguntar-nombre", titulo: "Как тебя́ зову́т? / Как вас зову́т?",
          texto: "Para preguntar el nombre se usa la misma estructura que para decirlo, con как («cómo») adelante. Как тебя́ зову́т? es «¿cómo te llamás?», con confianza. Как вас зову́т? es «¿cómo se llama?», con respeto. Se contesta меня́ зову́т Ива́н o я Ива́н.",
          desarmar: { es: "¿Cómo te llamás?", partes: [
            { txt: "Как", rol: "cómo", nota: "Как = «cómo»." },
            { txt: "тебя́", rol: "a vos", nota: "Тебя́ es una forma de ты: «a vos». Con respeto va вас." },
            { txt: "зову́т", rol: "llaman", nota: "El mismo зову́т de меня́ зову́т." }] },
          ejemplos: [
            { ru: "Как {тебя́} зову́т? — Меня́ зову́т Ма́ша.", es: "¿Cómo te llamás? —Me llamo Masha.", por: "Entre gente de la misma edad: con confianza." },
            { ru: "Как {вас} зову́т? — Меня́ зову́т Ива́н.", es: "¿Cómo se llama? —Me llamo Iván.", por: "A un desconocido o a alguien mayor: con respeto." }],
          errores: [
            { mal: "Как ты зову́т?", bien: "Как {тебя́} зову́т?", por: "Igual que en меня́ зову́т: va тебя́, «a vos»." },
            { mal: "Как вы зову́т?", bien: "Как {вас} зову́т?", por: "Con respeto, la forma es вас." }],
          chequeo: [{ pide: "Как ___ зову́т? (con confianza)", opciones: ["ты", "тебя́", "вас"], ok: "тебя́", por: "Con зову́т va тебя́." }] },
        { id: "u2-ty-vy", titulo: "Ты o вы",
          texto: "Ты es para la confianza: familia, amigos, chicos, gente joven en un ambiente informal. Вы es para el respeto: desconocidos, gente mayor, profesores, cualquier situación formal. Y además вы es el plural: con dos personas o más va siempre вы, aunque sean amigos.",
          ejemplos: [
            { ru: "{Здра́вствуйте}! Как {вас} зову́т?", es: "¡Buenos días! ¿Cómo se llama?", por: "Primer día de clase, a la profesora: todo formal, el saludo y la pregunta." },
            { ru: "{Приве́т}! Как {тебя́} зову́т?", es: "¡Hola! ¿Cómo te llamás?", por: "En una fiesta, a alguien de tu edad: todo de confianza." },
            { ru: "Ма́ша, Ди́ма, {вы} студе́нты?", es: "Masha, Dima, ¿ustedes son estudiantes?", por: "Son amigos, pero son dos: вы." }],
          destacado: "Ты = vos. Вы = usted y ustedes.",
          mas: { titulo: "¿Cuándo se pasa de вы a ты?", texto: "Lo propone la persona mayor o la que tiene un cargo, como un profesor o un jefe. Mientras no lo proponga, seguí con вы. Entre gente joven, en cambio, se pasa a ты enseguida, a veces desde el primer приве́т.\nEn la familia se usa ты con todos, también con ма́ма, па́па y los abuelos. Y a un chico siempre se le habla de ты.\nLo importante es no mezclar: si usás вы, el saludo también es formal (здра́вствуйте, до свида́ния); si usás ты, va приве́т y пока́." },
          chequeo: [
            { pide: "Le preguntás el nombre a una señora mayor.", opciones: ["Как тебя́ зову́т?", "Как вас зову́т?"], ok: "Как вас зову́т?", por: "Es una persona mayor que no conocés: вас." },
            { pide: "Le hablás a dos amigos a la vez. ¿Qué pronombre va?", opciones: ["ты", "вы"], ok: "вы", por: "Son dos personas: siempre вы." }] },
        { id: "u2-kto-chto", titulo: "Кто э́то? Что э́то?",
          texto: "Кто э́то? pregunta por una persona («¿quién es?») y что э́то?, por una cosa («¿qué es esto?»). Se contesta igual, con э́то: э́то Ма́ша, э́то кни́га.",
          ejemplos: [
            { ru: "{Кто} э́то? — Э́то Ма́ша.", es: "¿Quién es? —Es Masha.", por: "Una persona: кто." },
            { ru: "{Что} э́то? — Э́то дом.", es: "¿Qué es esto? —Es una casa.", por: "Una cosa: что." }],
          ojo: "Что se pronuncia «shto»: la **ч** suena **ш**.",
          mas: { texto: "Para los animales también se usa кто, no что: Кто э́то? — Э́то кот. Para el ruso, un animal es un «quién»." },
          chequeo: [{ pide: "Señalás un libro. ¿Qué preguntás?", opciones: ["Кто э́то?", "Что э́то?"], ok: "Что э́то?", por: "Es una cosa: что." }] },
        { id: "u2-el-ella", titulo: "Él y ella",
          texto: "Para preguntar por otra persona: как его́ зову́т? («¿cómo se llama él?») y как её зову́т? («¿cómo se llama ella?»). La respuesta repite la forma: его́ зову́т Ди́ма, её зову́т О́льга. En его́ la **г** suena **v**: «yivó».",
          ejemplos: [
            { ru: "Как {его́} зову́т? — {Его́} зову́т Ди́ма.", es: "¿Cómo se llama él? —Se llama Dima.", por: "Его́: «a él»." },
            { ru: "Как {её} зову́т? — {Её} зову́т О́льга.", es: "¿Cómo se llama ella? —Se llama Olga.", por: "Её: «a ella»." }],
          truco: "меня́ · тебя́ · вас · его́ · её + зову́т." }
      ],
      vocab: U2_VOCAB[3], frases: ["FRS-015", "FRS-016", "FRS-054", "FRS-055"], dialogos: ["DLG-031", "DLG-033"]
    },
    {
      id: "u2m4", n: 4, tipo: "leccion", titulo: "Países y nacionalidades", resumen: "Отку́да ты? Я из…", mapa: true,
      intro: "En este módulo vas a aprender los nombres de más de treinta países y a decir de dónde sos. Hay una sola estructura nueva, я из…, que conviene aprender como un bloque. Al final hay una ampliación opcional con más países.",
      secciones: [
        { id: "u2-ya-iz", titulo: "Я из…",
          texto: "La pregunta es отку́да ты? u отку́да вы? («¿de dónde sos?», «¿de dónde es?»). Para contestar: я из + el país o la ciudad. Después de из la palabra cambia un poco la terminación: Росси́я → из Росси́и, Аргенти́на → из Аргенти́ны, Кита́й → из Кита́я, Москва́ → из Москвы́. Es un caso (el genitivo), que vas a estudiar más adelante; por ahora, aprendelo de memoria junto con cada país.",
          ejemplos: [
            { ru: "Я из {Аргенти́ны}.", es: "Soy de Argentina.", por: "Аргенти́на termina en **-а**: después de из, **-ы**." },
            { ru: "Я из {Росси́и}.", es: "Soy de Rusia.", por: "Росси́я termina en **-я**: después de из, **-и**." },
            { ru: "Я из {Кита́я}.", es: "Soy de China.", por: "Кита́й termina en **-й**: después de из, **-я**." },
            { ru: "Ива́н из {Москвы́}.", es: "Iván es de Moscú.", por: "Москва́ → Москвы́: también se mueve la sílaba fuerte." }],
          destacado: "Отку́да ты? — Я из Аргенти́ны.",
          errores: [{ mal: "Я из Аргенти́на.", bien: "Я из {Аргенти́ны}.", por: "Después de из el país cambia la terminación." }],
          truco: "Después de из: -а → -ы · -я → -и · -й → -я.",
          chequeo: [{ pide: "Я из …", opciones: ["Испа́ния", "Испа́нии"], ok: "Испа́нии", por: "Después de из, Испа́ния pasa a Испа́нии." }] },
        { id: "u2-no-cambian", titulo: "Países que no cambian",
          texto: "США, Перу́ y Чи́ли no cambian nunca: я из США, я из Перу́, я из Чи́ли. Son palabras que terminan en **-у** o **-и**, o siglas, y en ruso quedan siempre iguales." },
        { id: "u2-nacionalidades", titulo: "Nacionalidades",
          texto: "Cada nacionalidad tiene forma de hombre y de mujer: испа́нец / испа́нка, аргенти́нец / аргенти́нка, италья́нец / италья́нка. La de mujer casi siempre termina en **-ка**. Ру́сский / ру́сская es distinta: es un adjetivo, y cambia igual que los adjetivos.",
          ejemplos: [
            { ru: "Он {италья́нец}.", es: "Él es italiano.", por: "Hombre: **-ец**." },
            { ru: "Она́ {испа́нка}.", es: "Ella es española.", por: "Mujer: **-ка**." },
            { ru: "Ты ру́сский? — Нет, я {аргенти́нец}.", es: "¿Sos ruso? —No, soy argentino.", por: "Sin verbo «ser»: я y la nacionalidad." }],
          errores: [{ mal: "Ма́ша — ру́сский.", bien: "Ма́ша — {ру́сская}.", por: "Ма́ша es mujer: ру́сская." }],
          chequeo: [{ pide: "А́нна es de España. А́нна — …", opciones: ["испа́нец", "испа́нка"], ok: "испа́нка", por: "Mujer: **-ка**." }] },
        { titulo: "El mapa", texto: "Abajo tenés el mapa: tocá un país para escuchar su nombre y ver de dónde sale cada uno." }
      ],
      vocab: U2_VOCAB[4], frases: ["FRS-021", "FRS-022", "FRS-023"], dialogos: ["DLG-032"],
      tabla: { titulo: "País, hombre y mujer", encabezados: ["País", "Él", "Ella"], filas: "naciones" },
      ampliacion: { titulo: "Ampliación: más países", vocab: U2_AMPLIACION[4],
        intro: "Opcional: casi cuarenta países más, con sus gentilicios y su adjetivo, los continentes y algunas capitales. No cuenta para el progreso ni para la evaluación de la unidad: practicalo si querés ir más allá.",
        tabla: { titulo: "País, hombre y mujer", encabezados: ["País", "Él", "Ella"], filas: "nacionesAmp" } }
    },
    {
      id: "u2m5", n: 5, tipo: "leccion", titulo: "Idiomas", resumen: "Я говорю́ по-ру́сски. Я учу́ ру́сский.",
      intro: "Para hablar de idiomas hay dos construcciones distintas según el verbo. Es un error muy frecuente, así que vale la pena mirarlo con calma.",
      secciones: [
        { id: "u2-po-ski", titulo: "Говори́ть по-…",
          texto: "Con говори́ть («hablar») y понима́ть («entender»), el idioma va con **по-** y termina en **-ски**: я говорю́ по-ру́сски, я понима́ю по-испа́нски. Es una palabra que no cambia nunca.",
          ejemplos: [
            { ru: "Я говорю́ {по-ру́сски}.", es: "Hablo ruso.", por: "Con говори́ть, la forma con **по-**." },
            { ru: "Я понима́ю {по-испа́нски}.", es: "Entiendo español.", por: "Con понима́ть, también **по-**." },
            { ru: "Ты говори́шь {по-англи́йски}?", es: "¿Hablás inglés?", por: "La forma con **по-** es siempre igual, la diga quien la diga." }],
          destacado: "Я говорю́ по-ру́сски.",
          errores: [{ mal: "Я говорю́ ру́сский.", bien: "Я говорю́ {по-ру́сски}.", por: "Con говори́ть, el idioma va con **по-**." }],
          chequeo: [{ pide: "Я говорю́ …", opciones: ["испа́нский", "по-испа́нски"], ok: "по-испа́нски", por: "Con говори́ть, **по-**." }] },
        { id: "u2-uchit", titulo: "Учи́ть / изуча́ть… язы́к",
          texto: "Con учи́ть o изуча́ть («estudiar»), el idioma va como adjetivo: я учу́ ру́сский, я изуча́ю ру́сский язы́к. Учу́ ру́сский es lo más común; изуча́ю ру́сский язы́к suena un poco más formal.",
          ejemplos: [
            { ru: "Я учу́ {ру́сский}.", es: "Estudio ruso.", por: "Con учи́ть, el adjetivo, sin **по-**." },
            { ru: "Он изуча́ет {италья́нский язы́к}.", es: "Él estudia italiano.", por: "Con изуча́ть se suele agregar язы́к." }],
          errores: [{ mal: "Я учу́ по-ру́сски.", bien: "Я учу́ {ру́сский}.", por: "Para «estudiar», el adjetivo." }],
          chequeo: [{ pide: "Я изуча́ю … язы́к.", opciones: ["по-англи́йски", "англи́йский"], ok: "англи́йский", por: "Con изуча́ть y язы́к, el adjetivo." }] },
        { id: "u2-dos-formas-idioma", titulo: "Las dos formas de cada idioma",
          texto: "ру́сский → по-ру́сски, испа́нский → по-испа́нски, англи́йский → по-англи́йски, францу́зский → по-францу́зски, неме́цкий → по-неме́цки. El adjetivo sirve para «estudiar»; la forma con **по-**, para «hablar» y «entender».",
          truco: "¿Hablar o entender? по-…ски. ¿Estudiar? El adjetivo." },
        { id: "u2-cuanto", titulo: "Cuánto",
          texto: "Немно́го es «un poco»: я немно́го говорю́ по-ру́сски. Хорошо́ y пло́хо sirven para decir cómo: я пло́хо говорю́ по-ру́сски («hablo mal ruso»).",
          ejemplos: [
            { ru: "Я {немно́го} говорю́ по-ру́сски.", es: "Hablo un poco de ruso.", por: "Немно́го va antes del verbo." },
            { ru: "Я понима́ю по-ру́сски, но {пло́хо} говорю́.", es: "Entiendo ruso, pero hablo mal.", por: "Пло́хо, «mal», también va antes del verbo." }] }
      ],
      vocab: U2_VOCAB[5], frases: ["FRS-028", "FRS-029", "FRS-060"], dialogos: ["DLG-032", "DLG-033"],
      tabla: { titulo: "Estudiar y hablar", encabezados: ["Estudiar (я учу́…)", "Hablar (я говорю́…)"], filas: "idiomas" }
    },
    {
      id: "u2m6", n: 6, tipo: "leccion", titulo: "¿Cómo estás?", resumen: "Как дела́? Хорошо́, а у тебя́?",
      intro: "Как дела́? es una pregunta de verdad: los rusos esperan una respuesta sincera, no un «bien» automático. Estas son las respuestas, de mejor a peor.",
      secciones: [
        { id: "u2-kak-dela", titulo: "La pregunta",
          texto: "Как дела́? («¿cómo andás?») es de confianza: se le pregunta a alguien que conocés. Con вы: как у вас дела́? («¿cómo le va?»).\nNo es un saludo automático: a un desconocido no se le pregunta, y quien pregunta espera una respuesta de verdad.",
          ejemplos: [
            { ru: "Приве́т, Ди́ма! {Как дела́}?", es: "¡Hola, Dima! ¿Cómo andás?", por: "A un amigo." },
            { ru: "Здра́вствуйте! {Как у вас дела́}?", es: "¡Buenos días! ¿Cómo le va?", por: "A tu profesora: con вас." }],
          chequeo: [{ pide: "Le preguntás a tu profesora cómo le va.", opciones: ["Как дела́?", "Как у вас дела́?"], ok: "Как у вас дела́?", por: "Con respeto: как у вас дела́?" }] },
        { id: "u2-respuestas", titulo: "Las respuestas",
          texto: "Отли́чно (excelente) → о́чень хорошо́ (muy bien) → хорошо́ (bien) → норма́льно (bien, sin novedades) → так себе́ (más o menos) → пло́хо (mal). Норма́льно es la más común y no suena negativa.",
          ejemplos: [
            { ru: "Как дела́? — {Норма́льно}.", es: "¿Cómo andás? —Bien.", por: "La respuesta de todos los días: todo en orden." },
            { ru: "Как дела́? — {Так себе́}.", es: "¿Cómo andás? —Más o menos.", por: "Deja la puerta abierta: el otro seguramente pregunte qué pasa." }],
          destacado: "Норма́льно = «bien», no «normal» en sentido de aburrido.",
          mas: { titulo: "Qué transmite cada respuesta", texto: "Отли́чно y о́чень хорошо́ suenan entusiastas: decilas si de verdad estás muy bien. Хорошо́ y норма́льно son las de todos los días. Так себе́ y пло́хо invitan a preguntar qué pasó: con un amigo está bien; con alguien que conocés poco, mejor норма́льно.\nPor eso un ruso casi nunca contesta отли́чно por costumbre: si lo dice, es porque está muy bien." },
          chequeo: [{ pide: "¿Cuál es la respuesta más común y neutra?", opciones: ["Отли́чно!", "Норма́льно.", "Пло́хо."], ok: "Норма́льно.", por: "Норма́льно: bien, sin novedades." }] },
        { id: "u2-devolver", titulo: "Devolver la pregunta",
          texto: "Después de contestar, se devuelve con а у тебя́? («¿y vos?») o а у вас? («¿y usted?»). Спаси́бо se suele agregar: хорошо́, спаси́бо. А у тебя́?",
          ejemplos: [
            { ru: "Хорошо́, спаси́бо. {А у тебя́}?", es: "Bien, gracias. ¿Y vos?", por: "Con confianza: тебя́." },
            { ru: "Норма́льно. {А у вас}?", es: "Bien. ¿Y usted?", por: "Con respeto: вас, igual que en la pregunta." }] }
      ],
      vocab: U2_VOCAB[6], frases: ["FRS-006", "FRS-007", "FRS-008", "FRS-056", "FRS-057", "FRS-061"], dialogos: ["DLG-001", "DLG-035"]
    },
    {
      id: "u2m7", n: 7, tipo: "leccion", titulo: "Pronombres personales", resumen: "Я, ты, он, она́, мы, вы, они́.",
      intro: "Los pronombres personales son la base de cualquier frase. Por ahora alcanza con reconocerlos y usarlos sin verbo: я Ива́н, она́ А́нна, они́ до́ма.",
      pronombres: [["я", "yo"], ["ты", "vos"], ["он", "él"], ["она́", "ella"], ["оно́", "ello (neutro)"], ["мы", "nosotros"], ["вы", "usted / ustedes"], ["они́", "ellos, ellas"]],
      secciones: [
        { id: "u2-sin-verbo-pron", titulo: "Sin verbo",
          texto: "En presente no hace falta «ser» ni «estar»: он Лу́кас («él es Lucas»), мы студе́нты («somos estudiantes»), они́ до́ма («están en casa»). El pronombre y lo que sigue, uno al lado del otro.",
          ejemplos: [
            { ru: "{Мы} студе́нты.", es: "Somos estudiantes.", por: "Мы y lo que somos: sin verbo." },
            { ru: "{Они́} до́ма.", es: "Están en casa.", por: "Tampoco hace falta «estar»." }],
          errores: [{ mal: "Он есть Лу́кас.", bien: "Он Лу́кас.", por: "En presente, sin есть." }] },
        { id: "u2-on-ona", titulo: "Он, она́, оно́",
          texto: "Он y она́ son «él» y «ella». Оно́ es neutro: se usa para cosas de género neutro, como окно́ o мо́ре; el género de las palabras lo vas a ver más adelante. Они́ sirve para hombres, mujeres y cosas: no distingue.",
          ejemplos: [
            { ru: "Э́то Лу́кас. {Он} студе́нт.", es: "Este es Lucas. Él es estudiante.", por: "Лу́кас es hombre: он." },
            { ru: "Э́то А́нна. {Она́} студе́нтка.", es: "Esta es Ana. Ella es estudiante.", por: "А́нна es mujer: она́." },
            { ru: "Ма́ша и А́нна? {Они́} до́ма.", es: "¿Masha y Ana? Están en casa.", por: "Dos mujeres: они́, igual que para dos hombres." }],
          ojo: "Ди́ма termina en **-а**, pero es un hombre: он. Con las personas manda quién es, no la terminación.",
          chequeo: [{ pide: "Э́то Ди́ма. … студе́нт.", opciones: ["Он", "Она́", "Они́"], ok: "Он", por: "Ди́ма es un hombre: он." }] },
        { id: "u2-vy", titulo: "Вы, dos veces",
          texto: "Вы es a la vez «usted» (una persona, con respeto) y «ustedes» (varias personas). El contexto dice cuál.",
          ejemplos: [
            { ru: "{Вы} студе́нт?", es: "¿Usted es estudiante?", por: "Una persona, con respeto: студе́нт está en singular." },
            { ru: "{Вы} студе́нты?", es: "¿Ustedes son estudiantes?", por: "Varias personas: lo muestra студе́нты." }] }
      ],
      vocab: U2_VOCAB[7], frases: [], dialogos: []
    },
    {
      id: "u2m8", n: 8, tipo: "leccion", titulo: "Frases útiles", resumen: "No entiendo, repita, más despacio.",
      intro: "Estas frases te salvan desde el primer día: sirven para pedir que te repitan, que hablen más despacio o para preguntar qué significa una palabra.",
      secciones: [
        { id: "u2-no-entiendo", titulo: "Cuando no entendés",
          texto: "Я не понима́ю («no entiendo»). Повтори́те, пожа́луйста («¿puede repetir, por favor?»); con ты, повтори́, пожа́луйста («repetí, por favor»). Говори́те ме́дленнее, пожа́луйста («hable más despacio, por favor»).",
          ejemplos: [
            { ru: "{Повтори́те}, пожа́луйста.", es: "¿Puede repetir, por favor?", por: "Con вы: a un desconocido o a varias personas." },
            { ru: "{Повтори́}, пожа́луйста.", es: "Repetí, por favor.", por: "Con ты: a un amigo." }],
          mas: { texto: "Fijate en la **-те** del final: es la marca del вы. Aparece en todas las fórmulas de respeto: здра́вствуйте, извини́те, повтори́те, говори́те. Sin **-те**, son de confianza: извини́, повтори́." },
          chequeo: [{ pide: "Tu amigo habla rápido. ¿Qué le decís?", opciones: ["Повтори́, пожа́луйста.", "Повтори́те, пожа́луйста."], ok: "Повтори́, пожа́луйста.", por: "Con confianza, sin **-те**." }] },
        { id: "u2-palabras", titulo: "Preguntar palabras",
          texto: "Что э́то? («¿qué es esto?») y что зна́чит…? («¿qué significa…?»): что зна́чит «окно́»?",
          ejemplos: [{ ru: "{Что зна́чит} «спаси́бо»?", es: "¿Qué significa «спаси́бо»?", por: "Para preguntar por una palabra que no conocés." }] },
        { id: "u2-aprendo", titulo: "Contar que aprendés",
          texto: "Я учу́ ру́сский («estudio ruso») le avisa a la otra persona que tenga paciencia, y casi siempre la gente habla más despacio.", destacado: "Извини́те, я не понима́ю. Повтори́те, пожа́луйста." }
      ],
      vocab: U2_VOCAB[8], frases: ["FRS-030", "FRS-058", "FRS-031", "FRS-055", "FRS-059", "FRS-060"], dialogos: ["DLG-035", "DLG-036"]
    },
    {
      id: "u2m9", n: 9, tipo: "conversaciones", titulo: "Conversaciones reales", resumen: "Leer, escuchar, grabarte y chatear.",
      intro: "Ahora todo junto. Leé y escuchá las conversaciones, grabate diciendo cada línea y después probá los chats: un personaje te escribe y vos contestás.",
      dialogos: ["DLG-031", "DLG-032", "DLG-033", "DLG-034", "DLG-035", "DLG-036"]
    },
    {
      id: "u2m10", n: 10, tipo: "proyecto", titulo: "Proyecto final", resumen: "Escribir tu propia conversación.",
      intro: "Escribí una conversación completa en ruso, sin ayuda, como si conocieras a alguien. Tiene que incluir los seis puntos de la lista; la app te va marcando los que ya están.",
      requisitos: [
        { txt: "Un saludo", rx: "(привет|здравствуйте|доброе утро|добрый день|добрый вечер)" },
        { txt: "Presentarte", rx: "(меня зовут|я [а-яё]+)" },
        { txt: "Preguntar el nombre", rx: "(как тебя зовут|как вас зовут)" },
        { txt: "Decir de dónde sos", rx: "(я из [а-яе-]+|я (русский|русская|испанец|испанка|аргентинец|аргентинка|украинец|украинка|белорус|белоруска|француз|француженка|итальянец|итальянка|немец|немка|поляк|полька|американец|американка|англичанин|англичанка|китаец|китаянка|японец|японка|бразилец|бразильянка|мексиканец|мексиканка|каталонец|каталонка))" },
        { txt: "Decir qué idiomas hablás", rx: "(говорю по-[а-я]+|учу [а-я]+|изучаю [а-я]+)" },
        { txt: "Despedirte", rx: "(пока|до свидания|до завтра)" }
      ],
      consejos: [
        { rx: "говор[а-я]* (русский|испанский|английский|французский|немецкий|итальянский|китайский|украинский|каталанский|португальский)", msg: "Con говори́ть el idioma va con **по-**: говорю́ по-ру́сски, no «говорю русский»." },
        { rx: "я есть ", msg: "En presente no se dice «есть» para «soy»: я студе́нт, no «я есть студент»." },
        { rx: "меня зовут меня", msg: "Sobra una palabra: меня́ зову́т + tu nombre." },
        { rx: "как ты зовут", msg: "Se dice как тебя́ зову́т?, con тебя́." },
        { rx: "я из (россия|испания|аргентина|украина|франция|италия|германия|англия|бразилия|мексика|москва|барселона)", msg: "Después de из el país cambia: из Росси́и, из Испа́нии, из Аргенти́ны." }
      ]
    },
    {
      id: "u2m11", n: 11, tipo: "examen", titulo: "Evaluación", resumen: "Lectura, audio, escritura, conversación y pronunciación.",
      intro: "Veinticinco ejercicios y un chat final, en siete partes. Cada respuesta vale 1 punto; las que salen «Casi», medio. Con 80 % o más, la unidad está aprobada. La mayoría te pide escribir o decir, no elegir: se aprueba produciendo el idioma.",
      partes: [
        { nombre: "Lectura", tipos: ["elegir-traduccion", "dialogo-elegir"], n: 4 },
        { nombre: "Audio", tipos: ["escuchar-elegir"], n: 3 },
        { nombre: "Dictado", tipos: ["dictado"], n: 4 },
        { nombre: "Traducción", tipos: ["es-ru", "ru-es"], n: 5 },
        { nombre: "Conversaciones", tipos: ["dialogo-escribir", "nacionalidad", "soy-de"], n: 5 },
        { nombre: "Pronunciación", tipos: ["voz"], n: 3 },
        { nombre: "Chat", tipos: ["chat"], n: 1 }
      ],
      aprobado: 0.8
    }
  ]
};
function unidad2Modulo(id) { return UNIDAD_2.modulos.find(m => m.id === id) || null; }

const U2_NAC_LISTA = ["ру́сский", "ру́сская", "испа́нец", "испа́нка", "аргенти́нец", "аргенти́нка", "украи́нец", "украи́нка", "белору́с", "белору́ска", "францу́з", "францу́женка", "италья́нец", "италья́нка", "не́мец", "не́мка", "поля́к", "по́лька", "америка́нец", "америка́нка", "англича́нин", "англича́нка", "кита́ец", "китая́нка", "япо́нец", "япо́нка", "брази́лец", "бразилья́нка", "мексика́нец", "мексика́нка", "катало́нец", "катало́нка"];

/* ── Chats guiados (mini roleplay, sin IA) ──
   Cada paso: lo que dice el personaje y las respuestas válidas.
   {nombre} = cualquier nombre; {lugar} = cualquier lugar (1 o 2 palabras);
   "{nac}" = «Я» + cualquier nacionalidad de la unidad (я аргенти́нец, я испа́нка…). */
const U2_CHATS = [
  { id: "chat-masha", titulo: "Conocé a Masha", p: "masha", pasos: [
    { bot: "Приве́т!", es: "¡Hola!", ok: ["Приве́т!", "Здра́вствуйте!", "Приве́т, Ма́ша!", "До́брый день!", "До́брое у́тро!", "До́брый ве́чер!"] },
    { bot: "Как тебя́ зову́т?", es: "¿Cómo te llamás?", ok: ["Меня́ зову́т {nombre}.", "Я {nombre}.", "Меня́ зову́т {nombre}. А тебя́?", "{nombre}.", "Меня́ зову́т {nombre}, а тебя́?"] },
    { bot: "О́чень прия́тно!", es: "¡Mucho gusto!", ok: ["Мне то́же.", "О́чень прия́тно!", "Мне то́же о́чень прия́тно."] },
    { bot: "Отку́да ты?", es: "¿De dónde sos?", ok: ["Я из {lugar}.", "Из {lugar}.", "Я из {lugar}. А ты?", "Я из {lugar}, из {lugar}.", "{nac}"] },
    { bot: "Ты говори́шь по-ру́сски?", es: "¿Hablás ruso?", ok: ["Да.", "Да, немно́го.", "Немно́го.", "Да, я учу́ ру́сский.", "Я учу́ ру́сский.", "Нет.", "Нет, я учу́ ру́сский."] },
    { bot: "Отли́чно! Пока́!", es: "¡Bárbaro! ¡Chau!", ok: ["Пока́!", "До свида́ния!", "До за́втра!", "Пока́, Ма́ша!"] }
  ] },
  { id: "chat-olga", titulo: "Primera clase con Olga Petrovna", p: "olga", pasos: [
    { bot: "Здра́вствуйте!", es: "¡Buenos días!", ok: ["Здра́вствуйте!", "До́брый день!", "До́брое у́тро!"] },
    { bot: "Как вас зову́т?", es: "¿Cómo se llama?", ok: ["Меня́ зову́т {nombre}.", "Я {nombre}.", "{nombre}."] },
    { bot: "Отку́да вы?", es: "¿De dónde es usted?", ok: ["Я из {lugar}.", "Из {lugar}.", "Я из {lugar}, из {lugar}.", "{nac}"] },
    { bot: "Вы говори́те по-ру́сски?", es: "¿Habla ruso?", ok: ["Да, немно́го.", "Немно́го.", "Да.", "Я учу́ ру́сский.", "Да, я учу́ ру́сский.", "Нет."] },
    { bot: "Хорошо́. До свида́ния!", es: "Muy bien. ¡Hasta luego!", ok: ["До свида́ния!", "Спаси́бо, до свида́ния!"] }
  ] },
  { id: "chat-dima", titulo: "¿Cómo anda Dima?", p: "dima", pasos: [
    { bot: "Приве́т! Как дела́?", es: "¡Hola! ¿Cómo andás?", ok: ["Хорошо́, спаси́бо. А у тебя́?", "Хорошо́. А у тебя́?", "Норма́льно. А у тебя́?", "Отли́чно! А у тебя́?", "Так себе́. А у тебя́?", "Хорошо́, а у тебя́?", "Норма́льно, а у тебя́?", "Отли́чно, а у тебя́?", "Пло́хо. А у тебя́?"] },
    { bot: "Норма́льно. Ты говори́шь по-англи́йски?", es: "Bien. ¿Hablás inglés?", ok: ["Да.", "Нет.", "Да, немно́го.", "Немно́го.", "Нет, я говорю́ по-испа́нски.", "Да, я говорю́ по-англи́йски."] },
    { bot: "Извини́, я не понима́ю.", es: "Perdón, no entiendo.", ok: ["Я говорю́ по-испа́нски.", "Я говорю́ по-испа́нски и по-ру́сски.", "Я говорю́ по-испа́нски и немно́го по-ру́сски."] },
    { bot: "А! Поня́тно. Пока́!", es: "¡Ah! Entiendo. ¡Chau!", ok: ["Пока́!", "Пока́, Ди́ма!", "До за́втра!"] }
  ] }
];

/* País → nacionalidad (hombre, mujer) y su traducción (hombre, mujer) */
const U2_NACIONES = [["Росси́я", "ру́сский", "ру́сская", "ruso", "rusa"], ["Испа́ния", "испа́нец", "испа́нка", "español", "española"], ["Аргенти́на", "аргенти́нец", "аргенти́нка", "argentino", "argentina"],
  ["Украи́на", "украи́нец", "украи́нка", "ucraniano", "ucraniana"], ["Белару́сь", "белору́с", "белору́ска", "bielorruso", "bielorrusa"], ["Фра́нция", "францу́з", "францу́женка", "francés", "francesa"],
  ["Ита́лия", "италья́нец", "италья́нка", "italiano", "italiana"], ["Герма́ния", "не́мец", "не́мка", "alemán", "alemana"], ["По́льша", "поля́к", "по́лька", "polaco", "polaca"], ["США", "америка́нец", "америка́нка", "estadounidense", "estadounidense"],
  ["А́нглия", "англича́нин", "англича́нка", "inglés", "inglesa"], ["Кита́й", "кита́ец", "китая́нка", "chino", "china"], ["Япо́ния", "япо́нец", "япо́нка", "japonés", "japonesa"], ["Брази́лия", "брази́лец", "бразилья́нка", "brasileño", "brasileña"],
  ["Ме́ксика", "мексика́нец", "мексика́нка", "mexicano", "mexicana"], ["Катало́ния", "катало́нец", "катало́нка", "catalán", "catalana"]];

/* Ampliación: más países con sus gentilicios */
const U2_NACIONES_AMP = [["Норве́гия", "норве́жец", "норве́жка", "noruego", "noruega"],
  ["Финля́ндия", "финн", "фи́нка", "finlandés", "finlandesa"],
  ["Швейца́рия", "швейца́рец", "швейца́рка", "suizo", "suiza"],
  ["Ирла́ндия", "ирла́ндец", "ирла́ндка", "irlandés", "irlandesa"],
  ["Румы́ния", "румы́н", "румы́нка", "rumano", "rumana"],
  ["Хорва́тия", "хорва́т", "хорва́тка", "croata", "croata"],
  ["Коре́я", "коре́ец", "корея́нка", "coreano", "coreana"],
  ["Вьетна́м", "вьетна́мец", "вьетна́мка", "vietnamita", "vietnamita"],
  ["Таила́нд", "та́ец", "та́йка", "tailandés", "tailandesa"],
  ["Индоне́зия", "индонези́ец", "индонези́йка", "indonesio", "indonesia"],
  ["Пакиста́н", "пакиста́нец", "пакиста́нка", "paquistaní", "paquistaní"],
  ["Пана́ма", "пана́мец", "пана́мка", "panameño", "panameña"],
  ["Австра́лия", "австрали́ец", "австрали́йка", "australiano", "australiana"],
  ["Еги́пет", "египтя́нин", "египтя́нка", "egipcio", "egipcia"],
  ["Маро́кко", "марокка́нец", "марокка́нка", "marroquí", "marroquí"],
  ["Но́вая Зела́ндия", "новозела́ндец", "новозела́ндка", "neozelandés", "neozelandesa"],
  ["Палести́на", "палести́нец", "палести́нка", "palestino", "palestina"],
  ["Казахста́н", "каза́х", "каза́шка", "kazajo", "kazaja"],
  ["Гру́зия", "грузи́н", "грузи́нка", "georgiano", "georgiana"],
  ["Арме́ния", "армяни́н", "армя́нка", "armenio", "armenia"],
  ["Португа́лия", "португа́лец", "португа́лка", "portugués", "portuguesa"],
  ["Гре́ция", "грек", "греча́нка", "griego", "griega"],
  ["Шве́ция", "швед", "шве́дка", "sueco", "sueca"],
  ["Ту́рция", "ту́рок", "турча́нка", "turco", "turca"],
  ["Кана́да", "кана́дец", "кана́дка", "canadiense", "canadiense"],
  ["Ку́ба", "куби́нец", "куби́нка", "cubano", "cubana"],
  ["Колу́мбия", "колумби́ец", "колумби́йка", "colombiano", "colombiana"],
  ["Венесуэ́ла", "венесуэ́лец", "венесуэ́лка", "venezolano", "venezolana"],
  ["Уругва́й", "уругва́ец", "уругва́йка", "uruguayo", "uruguaya"],
  ["И́ндия", "инди́ец", "индиа́нка", "indio", "india"],
  ["Перу́", "перуа́нец", "перуа́нка", "peruano", "peruana"],
  ["Чи́ли", "чили́ец", "чили́йка", "chileno", "chilena"]];

/* Idioma: para estudiar (adjetivo) y para hablar (по-…), con su traducción */
const U2_IDIOMAS = [["ру́сский", "по-ру́сски", "ruso"], ["испа́нский", "по-испа́нски", "español"], ["англи́йский", "по-англи́йски", "inglés"], ["францу́зский", "по-францу́зски", "francés"],
  ["неме́цкий", "по-неме́цки", "alemán"], ["италья́нский", "по-италья́нски", "italiano"], ["катала́нский", "по-катала́нски", "catalán"], ["португа́льский", "по-португа́льски", "portugués"],
  ["кита́йский", "по-кита́йски", "chino"], ["украи́нский", "по-украи́нски", "ucraniano"]];

/* Mezcla: ~65 % de producción (escribir, ordenar, decir) */
const U2_MEZCLA = { dictado: 3, "es-ru": 3, "ru-es": 2, completar: 2, ordenar: 2, voz: 1, "escuchar-elegir": 1, "elegir-traduccion": 1,
  "palabra-es-ru": 2, significado: 1, mapa: 1, "soy-de": 2, nacionalidad: 2, "dialogo-elegir": 1, "dialogo-escribir": 2, "ordenar-dialogo": 1, chat: 1,
  /* Entender la regla (07/10/2026): ~15 % de la sesión */
  porque: 2, natural: 2, oido: 1 };

function ejerciciosUnidad2() {
  const out = [];
  const lex = id => (typeof lexComerById === "function" ? lexComerById(id) : null);
  const porAcento = {};
  LEXICON_COMER.forEach(e => { porAcento[e.acento || e.ru] = e; });
  const sinAc = s => s.replace(/\u0301/g, "");
  const baraja = (arr, semilla) => { const a = arr.slice(); let s = semilla; for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const palabras = ru => (ru.match(/[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g) || []);
  const items = ids => [...new Set(ids.filter(id => /^CMR-/.test(id)))].filter(id => { const e = lex(id); return e && (e.introducedIn || []).concat(e.appearsIn || []).indexOf(2) >= 0; }).map(id => "lex:" + id);
  const vocabMod = {}; Object.keys(U2_VOCAB).forEach(m => U2_VOCAB[m].forEach(id => { vocabMod[id] = +m; }));

  /* 1. Frases */
  U2_FRASES.forEach((f, i) => {
    const n = palabras(f.ru).length, dif = n <= 2 ? 1 : n <= 4 ? 2 : 3;
    const base = { modulo: f.m, grupo: f.id, lex: f.lex, items: items(f.lex), oir: f.ru };
    const mismas = U2_FRASES.filter(x => x.es[0] === f.es[0]).map(x => x.ru);          /* traducciones rusas equivalentes */
    const otras = baraja(U2_FRASES.filter(x => x.m === f.m && x.id !== f.id && x.es[0] !== f.es[0]), i + 5);
    out.push(Object.assign({ id: "U2-dic-" + f.id, tipo: "dictado", forma: "escribir", dificultad: dif, pide: "Escuchá y escribí la frase.", audio: f.ru, esperadas: [f.ru], idioma: "ru",
      explicacion: f.ru + " — " + f.es[0] }, base));
    out.push(Object.assign({ id: "U2-esru-" + f.id, tipo: "es-ru", forma: "escribir", dificultad: dif + 1, pide: "Escribí en ruso: «" + f.es[0] + "»", audio: f.ru, audioManual: true,
      esperadas: mismas, idioma: "ru", explicacion: "En ruso: " + mismas.join(" / ") }, base));
    out.push(Object.assign({ id: "U2-rues-" + f.id, tipo: "ru-es", forma: "escribir", dificultad: dif, pide: "¿Qué significa?", grande: f.ru, audio: f.ru, esperadas: f.es, idioma: "es",
      explicacion: f.ru + " — " + f.es.join(" / ") }, base));
    if (otras.length >= 2) {
      out.push(Object.assign({ id: "U2-el-" + f.id, tipo: "elegir-traduccion", forma: "elegir", dificultad: 1, pide: "¿Qué significa?", grande: f.ru, audio: f.ru,
        opciones: baraja([f.es[0]].concat(otras.slice(0, 2).map(x => x.es[0])), i + 7), correcta: f.es[0], explicacion: f.ru + " — " + f.es[0] }, base));
      out.push(Object.assign({ id: "U2-ee-" + f.id, tipo: "escuchar-elegir", forma: "elegir", dificultad: 1, pide: "Escuchá: ¿qué frase es?", audio: f.ru,
        opciones: baraja([f.ru].concat(otras.slice(0, 2).map(x => x.ru)), i + 9), correcta: f.ru, explicacion: f.ru + " — " + f.es[0] }, base));
    }
    const ws = palabras(f.ru);
    if (ws.length >= 3 && ws.length <= 8) {
      let fichas = baraja(ws, i + 11); if (fichas.join(" ") === ws.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push(Object.assign({ id: "U2-ord-" + f.id, tipo: "ordenar", forma: "ordenar", dificultad: 2, pide: "Ordená las palabras: «" + f.es[0] + "»", audio: f.ru, fichas, sep: " ",
        esperada: ws.join(" "), explicacion: f.ru + " — " + f.es[0] }, base));
    }
    /* completar: la palabra de la unidad más «de contenido» de la frase */
    const idx = f.lex.map((id, k) => ({ id, k })).filter(x => vocabMod[x.id] && !["CMR-00005", "CMR-00033", "CMR-00038", "CMR-00010", "CMR-00021"].includes(x.id));
    if (idx.length && ws.length >= 2) {
      const x = idx[i % idx.length], w = ws[x.k];
      const hueco = f.ru.replace(w, "_____");
      out.push(Object.assign({ id: "U2-comp-" + f.id, tipo: "completar", forma: "escribir", dificultad: 2, pide: "Completá la frase.", grande: hueco, pista: f.es[0], audio: f.ru, audioManual: true,
        esperadas: [w], idioma: "ru", explicacion: f.ru + " — " + f.es[0] }, base));
    }
    if (f.m >= 2 && i % 2 === 0) {
      out.push(Object.assign({ id: "U2-voz-" + f.id, tipo: "voz", forma: "escribir", voz: true, dificultad: 2, pide: "Decilo en voz alta.", grande: f.ru, pista: f.es[0],
        esperadas: [f.ru], idioma: "ru", explicacion: f.ru + " — " + f.es[0] }, base));
    }
  });

  /* 2. Vocabulario */
  const AMP = new Set([].concat(...Object.values(U2_AMPLIACION)));
  [[U2_VOCAB, false], [U2_AMPLIACION, true]].forEach(([V, amp]) => Object.keys(V).forEach(m => V[m].forEach((id, i) => {
    const e = lex(id); if (!e) return;
    const es = (e.senses[0] || {}).es || "", ac = e.acento || e.ru;
    const base = { modulo: +m, grupo: id, lex: [id], items: ["lex:" + id], oir: e.ru, ampliacion: amp };
    if (["pronombre", "conjunción", "preposición", "partícula"].indexOf(e.posNormalized) < 0) {
      out.push(Object.assign({ id: "U2-pal-" + id, tipo: "palabra-es-ru", forma: "escribir", dificultad: 2, pide: "Escribí en ruso: «" + es + "»", audio: e.ru, audioManual: true,
        pista: "Empieza con " + e.ru[0].toUpperCase() + " y tiene " + e.ru.length + " letras.", esperadas: [ac], idioma: "ru", explicacion: ac + " — " + es }, base));
    }
    const dis = baraja(V[m].filter(x => x !== id), i + 3).slice(0, 3).map(x => (lex(x).senses[0] || {}).es).filter(x => x && x !== es);
    if (dis.length >= 2) out.push(Object.assign({ id: "U2-sig-" + id, tipo: "significado", forma: "elegir", dificultad: 1, pide: "¿Qué significa?", grande: ac, audio: e.ru,
      opciones: baraja([es].concat(dis.slice(0, 3)), i + 5), correcta: es, explicacion: ac + " — " + es }, base));
  })));

  /* 3. Mapa: tocá el país y escribí su nombre */
  if (typeof MAPA !== "undefined") Object.keys(MAPA.paises).forEach((iso, i) => {
    const p = MAPA.paises[iso], e = lex(p.lex); if (!e) return;
    const vista = ["RUS", "UKR", "BLR", "POL", "DEU", "FRA", "ESP", "PRT", "ITA", "GBR", "GRC", "SWE", "TUR", "GEO", "ARM", "NOR", "FIN", "CHE", "IRL", "ROU", "HRV"].includes(iso) ? "europa"
      : ["CHN", "JPN", "IND", "KAZ", "KOR", "VNM", "THA", "PAK", "PSX"].includes(iso) ? "asia"
      : ["EGY", "MAR"].includes(iso) ? "africa"
      : ["AUS", "NZL", "IDN"].includes(iso) ? "oceania" : "america";
    out.push({ id: "U2-mapa-" + iso, tipo: "mapa", forma: "escribir", dificultad: 2, modulo: 4, ampliacion: AMP.has(p.lex), grupo: p.lex, lex: [p.lex], items: ["lex:" + p.lex], oir: e.ru,
      pide: "¿Qué país es? Escribilo en ruso.", mapa: { iso, vista }, esperadas: [e.acento], idioma: "ru", explicacion: e.acento + " — " + e.senses[0].es });
  });

  /* 4. «Я из…»: el país después de из (genitivo, aprendido como bloque) */
  if (typeof MAPA !== "undefined") Object.keys(MAPA.paises).concat([]).forEach((iso, i) => {
    const id = MAPA.paises[iso].lex, e = lex(id), c = typeof CASOS !== "undefined" ? CASOS[id] : null; if (!e || !c) return;
    const gen = c.tipo === "indeclinable" ? e.acento : c.sg[1];
    out.push({ id: "U2-soyde-" + iso, tipo: "soy-de", forma: "escribir", dificultad: 3, modulo: 4, ampliacion: AMP.has(id), grupo: id, lex: [id], items: ["lex:" + id], oir: "Я из " + gen,
      pide: "Decí que sos de " + e.senses[0].es + ".", pista: "Я из …", esperadas: ["Я из " + gen + "."], idioma: "ru", regla: "u2-ya-iz",
      explicacion: "Я из " + gen + ". Después de из, " + e.acento + (c.tipo === "indeclinable" ? " no cambia." : " pasa a " + gen + ".") });
  });
  ["Москва́", "Барсело́на", "Буэ́нос-А́йрес", "Мадри́д", "Санкт-Петербу́рг"].forEach(ac => {
    const e = porAcento[ac], c = e && CASOS[e.id]; if (!c) return;
    out.push({ id: "U2-soyde-" + e.id, tipo: "soy-de", forma: "escribir", dificultad: 3, modulo: 4, grupo: e.id, lex: [e.id], items: ["lex:" + e.id], oir: "Я из " + c.sg[1],
      pide: "Decí que sos de " + e.senses[0].es + ".", pista: "Я из …", esperadas: ["Я из " + c.sg[1] + "."], idioma: "ru", regla: "u2-ya-iz", explicacion: "Я из " + c.sg[1] + "." });
  });

  /* 5. Nacionalidad: «Él es de Italia: он …» */
  U2_NACIONES.map(x => [x, false]).concat(U2_NACIONES_AMP.map(x => [x, true])).forEach(([[pais, m, f], amp], i) => {
    const ep = porAcento[pais]; if (!ep) return;
    [["m", "Él", "Он", m], ["f", "Ella", "Она́", f]].forEach(([g, es, ru, nac]) => {
      const en = porAcento[nac];
      out.push({ id: "U2-nac-" + ep.id + "-" + g, tipo: "nacionalidad", forma: "escribir", dificultad: 3, modulo: 4, ampliacion: amp, grupo: "nac-" + ep.id, lex: [en ? en.id : ep.id],
        items: en ? ["lex:" + en.id] : [], oir: ru + " " + nac, pide: es + " es de " + ep.senses[0].es + ". ¿Cómo se dice su nacionalidad?", grande: ru + " _____.",
        esperadas: [ru + " " + nac + ".", nac], idioma: "ru", regla: "u2-nacionalidades", explicacion: ru + " " + nac + ". " + (g === "m" ? "Hombre" : "Mujer") + ": " + nac + "." });
    });
  });

  /* 6. Diálogos: completar una línea (elegir o escribir) y ordenar */
  const dlg = typeof DIALOGOS !== "undefined" ? DIALOGOS.filter(d => d.unidad === 2) : [];
  const todas = [].concat(...dlg.map(d => d.lineas.map(l => l.ru)));
  const personaje = p => (typeof DLG_PERSONAJES !== "undefined" && DLG_PERSONAJES[p]) ? DLG_PERSONAJES[p].ru : p;
  const modDlg = { "DLG-031": 2, "DLG-032": 4, "DLG-033": 3, "DLG-034": 2, "DLG-035": 6, "DLG-036": 8 };
  dlg.forEach((d, di) => {
    d.lineas.forEach((l, k) => {
      if (k === 0) return;
      const ctx = d.lineas.slice(Math.max(0, k - 3), k).map(x => ({ p: personaje(x.p), ru: x.ru }));
      const base = { modulo: modDlg[d.id] || 9, grupo: d.id + "-" + k, lex: l.lex, items: items(l.lex), oir: l.ru, contexto: ctx, quien: personaje(l.p) };
      const dis = baraja(todas.filter(x => x !== l.ru), di * 7 + k).slice(0, 2);
      out.push(Object.assign({ id: "U2-dle-" + d.id + "-" + k, tipo: "dialogo-elegir", forma: "elegir", dificultad: 2, pide: "¿Qué dice " + personaje(l.p) + "?",
        opciones: baraja([l.ru].concat(dis), k + di), correcta: l.ru, explicacion: l.ru + " — " + l.es }, base));
      if (palabras(l.ru).length <= 5) out.push(Object.assign({ id: "U2-dlw-" + d.id + "-" + k, tipo: "dialogo-escribir", forma: "escribir", dificultad: 3,
        pide: "Escribí lo que dice " + personaje(l.p) + ": «" + l.es + "»", esperadas: [l.ru], idioma: "ru", explicacion: l.ru + " — " + l.es }, base));
    });
    let orden = baraja(d.lineas.map((x, k) => k), di + 3); if (orden.join() === d.lineas.map((x, k) => k).join()) orden = orden.slice(1).concat(orden[0]);
    out.push({ id: "U2-odl-" + d.id, tipo: "ordenar-dialogo", forma: "ordenar", bloques: true, dificultad: 2, modulo: modDlg[d.id] || 9, grupo: d.id, items: [],
      pide: "Ordená la conversación: " + d.titulo + (/[?!.]$/.test(d.titulo) ? "" : "."), fichas: orden.map(k => personaje(d.lineas[k].p) + ": " + d.lineas[k].ru),
      esperada: d.lineas.map(x => personaje(x.p) + ": " + x.ru).join("\n"), sep: "\n", explicacion: d.lineas.map(x => x.ru).join(" / ") });
  });

  /* 8. Entender la regla (07/10/2026, PLAN_PROFUNDIZACION.md): ¿qué decís en esta situación?,
     ¿por qué?, ¿cuál suena natural? y ¿qué oíste? Todo con frases de la unidad. */
  const RZ = { resp: "Se le habla con respeto", grupo: "Son varias personas", conf: "Hay confianza",
    dormir: "Se dice solo al irse a dormir", llegar: "Es un saludo para llegar", mujer: "Habla una mujer", hombre: "Habla un hombre" };
  const SIT = [
    { m: 1, r: "u2-formal", sit: "Llegás a clase y saludás a tu profesora.", ok: "Здра́вствуйте!", mal: "Приве́т!", rz: "resp" },
    { m: 1, r: "u2-formal", sit: "Te encontrás con un amigo en la calle.", ok: "Приве́т!", mal: "Здра́вствуйте!", rz: "conf" },
    { m: 1, r: "u2-formal", sit: "Te vas de un negocio.", ok: "До свида́ния!", mal: "Пока́!", rz: "resp" },
    { m: 1, r: "u2-formal", sit: "Te despedís de tu hermano.", ok: "Пока́!", mal: "До свида́ния!", rz: "conf" },
    { m: 1, r: "u2-formal", sit: "Saludás a un grupo de personas que no conocés.", ok: "Здра́вствуйте!", mal: "Приве́т!", rz: "resp" },
    { m: 1, r: "u2-hora", sit: "Llegás a una cena a la noche.", ok: "До́брый ве́чер!", mal: "Споко́йной но́чи!", rz: "llegar" },
    { m: 1, r: "u2-hora", sit: "Tu amiga se va a dormir.", ok: "Споко́йной но́чи!", mal: "До́брый ве́чер!", rz: "dormir" },
    { m: 1, r: "u2-hora", sit: "Llegás a la oficina a las nueve de la mañana.", ok: "До́брое у́тро!", mal: "Споко́йной но́чи!", rz: "llegar" },
    { m: 2, r: "u2-genero-hablante", sit: "Ana conoce a alguien nuevo.", ok: "Ра́да познако́миться!", mal: "Рад познако́миться!", rz: "mujer", ella: 1 },
    { m: 2, r: "u2-genero-hablante", sit: "Lucas conoce a alguien nuevo.", ok: "Рад познако́миться!", mal: "Ра́да познако́миться!", rz: "hombre", ella: 1 },
    { m: 2, r: "u2-genero-hablante", sit: "Masha cuenta que estudia.", ok: "Я студе́нтка.", mal: "Я студе́нт.", rz: "mujer", ella: 1 },
    { m: 3, r: "u2-ty-vy", sit: "Le preguntás el nombre a un chico de tu edad en una fiesta.", ok: "Как тебя́ зову́т?", mal: "Как вас зову́т?", rz: "conf" },
    { m: 3, r: "u2-ty-vy", sit: "Le preguntás el nombre a una señora mayor.", ok: "Как вас зову́т?", mal: "Как тебя́ зову́т?", rz: "resp" },
    { m: 3, r: "u2-ty-vy", sit: "Le preguntás el nombre a tu profesor nuevo.", ok: "Как вас зову́т?", mal: "Как тебя́ зову́т?", rz: "resp" },
    { m: 4, r: "u2-ty-vy", sit: "Le preguntás a tu profesor de dónde es.", ok: "Отку́да вы?", mal: "Отку́да ты?", rz: "resp" },
    { m: 4, r: "u2-ty-vy", sit: "Le preguntás a una amiga de dónde es.", ok: "Отку́да ты?", mal: "Отку́да вы?", rz: "conf" },
    { m: 4, r: "u2-ty-vy", sit: "Le preguntás a dos amigos de dónde son.", ok: "Отку́да вы?", mal: "Отку́да ты?", rz: "grupo" },
    { m: 5, r: "u2-ty-vy", sit: "Le preguntás a un vendedor si habla inglés.", ok: "Вы говори́те по-англи́йски?", mal: "Ты говори́шь по-англи́йски?", rz: "resp" },
    { m: 5, r: "u2-ty-vy", sit: "Le preguntás a tu amigo si habla inglés.", ok: "Ты говори́шь по-англи́йски?", mal: "Вы говори́те по-англи́йски?", rz: "conf" },
    { m: 6, r: "u2-kak-dela", sit: "Le preguntás a un amigo cómo anda.", ok: "Как дела́?", mal: "Как у вас дела́?", rz: "conf" },
    { m: 6, r: "u2-kak-dela", sit: "Le preguntás a tu profesora cómo le va.", ok: "Как у вас дела́?", mal: "Как дела́?", rz: "resp" },
    { m: 6, r: "u2-devolver", sit: "Tu profesora te preguntó cómo estás. Contestás y le devolvés la pregunta.", ok: "Хорошо́, спаси́бо. А у вас?", mal: "Хорошо́, спаси́бо. А у тебя́?", rz: "resp" },
    { m: 6, r: "u2-devolver", sit: "Dos amigos te preguntan cómo estás. Contestás y les devolvés la pregunta.", ok: "Норма́льно. А у вас?", mal: "Норма́льно. А у тебя́?", rz: "grupo" },
    { m: 8, r: "u2-no-entiendo", sit: "Un desconocido habla rápido y no lo entendés.", ok: "Повтори́те, пожа́луйста.", mal: "Повтори́, пожа́луйста.", rz: "resp" },
    { m: 8, r: "u2-no-entiendo", sit: "Tu amigo habla rápido.", ok: "Повтори́, пожа́луйста.", mal: "Повтори́те, пожа́луйста.", rz: "conf" },
    { m: 8, r: "u2-no-entiendo", sit: "No entendés lo que dice tu profesora.", ok: "Извини́те, я не понима́ю.", mal: "Извини́, я не понима́ю.", rz: "resp" }
  ];
  SIT.forEach((s, i) => {
    const base = { modulo: s.m, regla: s.r, grupo: "sit-" + i, items: [], oir: s.ok };
    const otras = baraja(Object.keys(RZ).filter(k => k !== s.rz && (["mujer", "hombre"].includes(s.rz) === ["mujer", "hombre"].includes(k)) && (["dormir", "llegar"].includes(s.rz) === ["dormir", "llegar"].includes(k)) && (s.m >= 3 || k !== "grupo") && !(s.rz === "grupo" && k === "conf")), i + 41).slice(0, 2);
    out.push(Object.assign({ id: "U2-sit-" + i, tipo: "porque", forma: "elegir", dificultad: 2, pide: s.sit + (s.ella ? " ¿Qué dice?" : " ¿Qué decís?"),
      opciones: baraja([s.ok, s.mal], i + 43), correcta: s.ok, explicacion: s.ok + " " + RZ[s.rz] + "." }, base));
    if (otras.length) out.push(Object.assign({ id: "U2-porq-" + i, tipo: "porque", forma: "elegir", dificultad: 2, pide: s.sit + (s.ella ? " Dice «" : " Decís «") + s.ok + (/[.!?]$/.test(s.ok) ? "» ¿Por qué?" : "». ¿Por qué?"),
      opciones: baraja([RZ[s.rz]].concat(otras.map(k => RZ[k])), i + 45), correcta: RZ[s.rz], explicacion: RZ[s.rz] + ": " + s.ok }, base));
  });

  /* ¿Suena natural? Frases rusas, una con el error típico de quien empieza */
  const NAT = [];
  ["F2-021", "F2-022", "F2-032", "F2-052", "F2-056"].forEach(id => { const f = U2_FRASES.find(x => x.id === id); NAT.push({ m: f.m, r: "u2-sin-ser", ok: f.ru, mal: f.ru.replace(/([Яя]) /, "$1 есть "), por: "En presente no se dice есть: я y lo que sos.", lex: f.lex }); });
  ["F2-087", "F2-088", "F2-089"].forEach(id => { const f = U2_FRASES.find(x => x.id === id); NAT.push({ m: 7, r: "u2-sin-verbo-pron", ok: f.ru, mal: f.ru.replace(/^(\S+) /, "$1 есть "), por: "En presente, sin есть.", lex: f.lex }); });
  [["Меня́ зову́т Ива́н.", "Я зову́т Ива́н.", 2, "u2-me-llaman", "Зову́т va con меня́, «a mí»."],
   ["Меня́ зову́т А́нна.", "Я зову́т А́нна.", 2, "u2-me-llaman", "Зову́т va con меня́, «a mí»."],
   ["Как тебя́ зову́т?", "Как ты зову́т?", 3, "u2-preguntar-nombre", "Con зову́т va тебя́."],
   ["Как вас зову́т?", "Как вы зову́т?", 3, "u2-preguntar-nombre", "Con зову́т va вас."],
   ["Его́ зову́т Ди́ма.", "Он зову́т Ди́ма.", 7, "u2-el-ella", "Con зову́т va его́, «a él»."],
   ["Её зову́т О́льга.", "Она́ зову́т О́льга.", 7, "u2-el-ella", "Con зову́т va её, «a ella»."]
  ].forEach(([ok, mal, m, r, por]) => NAT.push({ m, r, ok, mal, por }));
  U2_NACIONES.forEach(([pais]) => {
    const e = porAcento[pais], c = e && typeof CASOS !== "undefined" ? CASOS[e.id] : null;
    if (!c || c.tipo === "indeclinable" || !c.sg || sinAc(c.sg[1]) === sinAc(pais)) return;
    NAT.push({ m: 4, r: "u2-ya-iz", ok: "Я из " + c.sg[1] + ".", mal: "Я из " + pais + ".", por: "Después de из, " + pais + " pasa a " + c.sg[1] + ".", lex: [e.id] });
  });
  U2_IDIOMAS.forEach(([adj, po], k) => {
    NAT.push({ m: 5, r: "u2-po-ski", ok: "Я говорю́ " + po + ".", mal: "Я говорю́ " + adj + ".", por: "Con говори́ть, el idioma va con по-: " + po + "." });
    if (k < 5) NAT.push({ m: 5, r: "u2-uchit", ok: "Я учу́ " + adj + ".", mal: "Я учу́ " + po + ".", por: "Con учи́ть, el adjetivo: " + adj + "." });
  });
  NAT.forEach((n, i) => out.push({ id: "U2-nat-" + i, tipo: "natural", forma: "elegir", dificultad: 2, modulo: n.m, regla: n.r, grupo: "nat-" + i,
    lex: n.lex, items: n.lex ? items(n.lex) : [], oir: n.ok, pide: "¿Cuál suena natural?", opciones: baraja([n.ok, n.mal], i + 51), correcta: n.ok, explicacion: n.ok + " " + n.por }));

  /* Oído: dos formas que se parecen, ¿cuál sonó? */
  const OIDO = [
    ["Рад познако́миться!", "Ра́да познако́миться!", 2, "u2-genero-hablante"], ["Я студе́нт.", "Я студе́нтка.", 2, "u2-genero-hablante"],
    ["Э́то мой друг.", "Э́то моя́ подру́га.", 2, "u2-genero-hablante"],
    ["Как тебя́ зову́т?", "Как вас зову́т?", 3, "u2-preguntar-nombre"], ["Как его́ зову́т?", "Как её зову́т?", 3, "u2-el-ella"],
    ["Кто э́то?", "Что э́то?", 3, "u2-kto-chto"], ["Как дела́?", "Как у вас дела́?", 6, "u2-kak-dela"],
    ["А у тебя́?", "А у вас?", 6, "u2-devolver"], ["Повтори́, пожа́луйста.", "Повтори́те, пожа́луйста.", 8, "u2-no-entiendo"],
    ["Вы студе́нт?", "Вы студе́нты?", 7, "u2-vy"]
  ];
  U2_NACIONES.forEach(([pais, m, f]) => OIDO.push([m, f, 4, "u2-nacionalidades"]));
  OIDO.forEach(([a, b, m, r], i) => { const suena = i % 2 ? b : a;
    out.push({ id: "U2-oido-" + i, tipo: "oido", forma: "elegir", dificultad: 2, modulo: m, regla: r, grupo: "oido-" + i, items: [],
      pide: "Escuchá: ¿qué oíste?", audio: suena, opciones: [a, b], correcta: suena, explicacion: a + " · " + b }); });

  /* 7. Chats */
  U2_CHATS.forEach(ch => ch.pasos.forEach(st => {
    const k = st.ok.indexOf("{nac}");
    if (k >= 0) st.ok.splice(k, 1, ...U2_NAC_LISTA.map(n => "Я " + n + "."), ...U2_NAC_LISTA.map(n => "Я " + n + ", я из {lugar}."));
  }));
  U2_CHATS.forEach(ch => out.push({ id: "U2-chat-" + ch.id, tipo: "chat", forma: "chat", dificultad: 3, modulo: 9, grupo: ch.id, items: [], chat: ch,
    pide: ch.titulo, explicacion: "Conversación completa con " + personaje(ch.p) + "." }));

  return out;
}

window.UNIDAD_2 = UNIDAD_2;
window.unidad2Modulo = unidad2Modulo;
window.ejerciciosUnidad2 = ejerciciosUnidad2;
window.U2_MEZCLA = U2_MEZCLA;
window.U2_CHATS = U2_CHATS;
