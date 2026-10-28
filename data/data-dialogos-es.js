/* ============================================================
   DATA-DIALOGOS-ES.JS — Abecé: personajes, frases y diálogos
   (28/10/2026, Урок 1). Generado por un script a partir del texto
   de cada línea: no editar a mano los campos tr y lex.
   ------------------------------------------------------------
   Mismo formato que data-dialogos.js y data-frases.js de Azbuka, con
   los campos al revés (CONTEXTO_PROYECTO.md §6.28):
     es   la frase en español (lo que se aprende)
     tr   pronunciación en cirílico (la del léxico, o la del generador
          herramientas/abece/generador-fonetica-es.py)
     ru   la traducción al ruso (borrador para Iván)
     lex  un ID del léxico español por palabra, en orden; null = nombre
          propio, letra deletreada o palabra que no está en el léxico
     f    frases (FRASES_ES) que aparecen en la línea
     obs  nota en ruso (opcional)
   DLG_PERSONAJES_ES: es = nombre en español, ru = en ruso, genero
   (elige la voz: core.js, azHablarEs). Registro de las frases: "tú",
   "usted" o "" (sirve para los dos).
   ============================================================ */

const DLG_PERSONAJES_ES = {
 "ana": {
  "es": "Ana",
  "ru": "Аня",
  "genero": "f",
  "desc": "Аня из Москвы, переезжает в Барселону."
 },
 "javier": {
  "es": "Javier",
  "ru": "Хавьер",
  "genero": "m",
  "desc": "Преподаватель Ани."
 },
 "lucia": {
  "es": "Lucía",
  "ru": "Лусия",
  "genero": "f",
  "desc": "Испанская подруга Ани."
 },
 "recepcion": {
  "es": "Recepcionista",
  "ru": "Администратор",
  "genero": "m",
  "desc": "Администратор на ресепшене."
 }
};

const FRASES_ES = [
 {"id": "FRE-001", "funcion": "saludar", "es": "¡Hola!", "tr": "¡О́ла!", "ru": "Привет! Здравствуйте!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Подходит для всех и в любое время. В Испании с «hola» здороваются даже с незнакомыми.", "lex": ["ESP-00088"]},
 {"id": "FRE-002", "funcion": "saludar", "es": "¡Buenos días!", "tr": "¡Буэ́нос ди́ас!", "ru": "Доброе утро! Добрый день!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "До обеда, то есть примерно до 14–15 часов, а не до полудня.", "lex": ["ESP-00037", "ESP-00082"]},
 {"id": "FRE-003", "funcion": "saludar", "es": "¡Buenas tardes!", "tr": "¡Буэ́нас та́рдэс!", "ru": "Добрый день! Добрый вечер!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "После обеда и до темноты (в Испании — часов до 20–21).", "lex": ["ESP-00037", "ESP-00217"]},
 {"id": "FRE-004", "funcion": "saludar", "es": "¡Buenas noches!", "tr": "¡Буэ́нас но́чэс!", "ru": "Добрый вечер! Спокойной ночи!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Вечером: и при встрече, и при прощании.", "lex": ["ESP-00037", "ESP-00107"]},
 {"id": "FRE-005", "funcion": "saludar", "es": "¿Qué tal?", "tr": "¿Кэ тал?", "ru": "Как дела? Как ты? Как вы?", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Очень частый вопрос, и с «tú», и с «usted». Часто идёт сразу после «hola»: «¡Hola! ¿Qué tal?»", "lex": ["ESP-00014", "ESP-05183"]},
 {"id": "FRE-006", "funcion": "saludar", "es": "¿Cómo estás?", "tr": "¿Ко́мо эста́с?", "ru": "Как ты?", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "С друзьями, с родными, с ровесниками.", "lex": ["ESP-00064", "ESP-00008"]},
 {"id": "FRE-007", "funcion": "saludar", "es": "¿Cómo está usted?", "tr": "¿Ко́мо эста́ устэ́д?", "ru": "Как вы?", "registro": "usted", "nivel": "A1", "unidad": 1, "uso": "Вежливо: с незнакомым взрослым, с преподавателем на первой встрече.", "lex": ["ESP-00064", "ESP-00008", "ESP-00084"]},
 {"id": "FRE-008", "funcion": "saludar", "es": "Muy bien, gracias. ¿Y tú?", "tr": "Муй бьен, гра́сьяс. ¿И ту?", "ru": "Очень хорошо, спасибо. А ты?", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "Обычный ответ на «¿qué tal?» или «¿cómo estás?».", "lex": ["ESP-00054", "ESP-00036", "ESP-00069", "ESP-00009", "ESP-00075"]},
 {"id": "FRE-009", "funcion": "saludar", "es": "Bien, gracias. ¿Y usted?", "tr": "Бьен, гра́сьяс. ¿И устэ́д?", "ru": "Хорошо, спасибо. А вы?", "registro": "usted", "nivel": "A1", "unidad": 1, "uso": "Тот же ответ на «usted».", "lex": ["ESP-00036", "ESP-00069", "ESP-00009", "ESP-00084"]},
 {"id": "FRE-010", "funcion": "despedirse", "es": "¡Adiós!", "tr": "¡Адьо́с!", "ru": "До свидания! Пока!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Подходит всегда. Испанцы говорят «adiós» и при короткой встрече на улице.", "lex": ["ESP-00303"]},
 {"id": "FRE-011", "funcion": "despedirse", "es": "¡Hasta luego!", "tr": "¡А́ста луэ́го!", "ru": "До встречи! Пока!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Самое частое прощание: даже если вы больше не увидитесь сегодня.", "lex": ["ESP-00135", "ESP-00190"]},
 {"id": "FRE-012", "funcion": "despedirse", "es": "¡Hasta mañana!", "tr": "¡А́ста маня́на!", "ru": "До завтра!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Если увидитесь завтра.", "lex": ["ESP-00135", "ESP-05181"]},
 {"id": "FRE-013", "funcion": "despedirse", "es": "¡Chao!", "tr": "¡Ча́о!", "ru": "Пока!", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "Неформально, с друзьями.", "lex": ["ESP-05225"]},
 {"id": "FRE-014", "funcion": "agradecer", "es": "Gracias.", "tr": "Гра́сьяс.", "ru": "Спасибо.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "«Muchas gracias» — большое спасибо.", "lex": ["ESP-00069"]},
 {"id": "FRE-015", "funcion": "agradecer", "es": "De nada.", "tr": "Дэ на́да.", "ru": "Не за что. Пожалуйста.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Ответ на «gracias».", "lex": ["ESP-00002", "ESP-00070"]},
 {"id": "FRE-016", "funcion": "agradecer", "es": "Por favor.", "tr": "Пор фабо́р.", "ru": "Пожалуйста (просьба).", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Когда о чём-то просишь. В ответ на «gracias» говорят не «por favor», а «de nada».", "lex": ["ESP-00013", "ESP-00102"]},
 {"id": "FRE-017", "funcion": "agradecer", "es": "Perdón.", "tr": "Пэрдо́н.", "ru": "Извините. Простите.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Чтобы извиниться или привлечь внимание.", "lex": ["ESP-00538"]},
 {"id": "FRE-018", "funcion": "agradecer", "es": "Lo siento.", "tr": "Ло сье́нто.", "ru": "Мне жаль. Простите.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Когда сожалеешь о чём-то: опоздал, не можешь помочь.", "lex": ["ESP-00025", "ESP-00079"]},
 {"id": "FRE-019", "funcion": "entender", "es": "No entiendo.", "tr": "Но энтье́ндо.", "ru": "Я не понимаю.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Главная фраза ученика: говори её смело.", "lex": ["ESP-00005", "ESP-00143"]},
 {"id": "FRE-020", "funcion": "entender", "es": "¿Puedes repetir, por favor?", "tr": "¿Пуэ́дэс рэпэти́р, пор фабо́р?", "ru": "Можешь повторить, пожалуйста?", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "С «usted»: «¿Puede repetir, por favor?».", "lex": ["ESP-00017", "ESP-01169", "ESP-00013", "ESP-00102"]},
 {"id": "FRE-021", "funcion": "entender", "es": "¿Puede repetir, por favor?", "tr": "¿Пуэ́дэ рэпэти́р, пор фабо́р?", "ru": "Можете повторить, пожалуйста?", "registro": "usted", "nivel": "A1", "unidad": 1, "uso": "Вежливо: с преподавателем, с незнакомым человеком.", "lex": ["ESP-00017", "ESP-01169", "ESP-00013", "ESP-00102"]},
 {"id": "FRE-022", "funcion": "entender", "es": "Más despacio, por favor.", "tr": "Мас дэспа́сьо, пор фабо́р.", "ru": "Помедленнее, пожалуйста.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Испанцы говорят быстро: эта фраза тебе пригодится.", "lex": ["ESP-00047", "ESP-01424", "ESP-00013", "ESP-00102"]},
 {"id": "FRE-023", "funcion": "entender", "es": "¿Cómo se escribe?", "tr": "¿Ко́мо сэ эскри́бэ?", "ru": "Как это пишется?", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Ответ — по буквам: «eme, a, eñe, a…».", "lex": ["ESP-00064", "ESP-00019", "ESP-00321"]},
 {"id": "FRE-024", "funcion": "entender", "es": "¿Cómo se dice en español?", "tr": "¿Ко́мо сэ ди́сэ эн эспаньо́л?", "ru": "Как это сказать по-испански?", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Можно показать на предмет или назвать слово по-русски.", "lex": ["ESP-00064", "ESP-00019", "ESP-00024", "ESP-00010", "ESP-01802"]},
 {"id": "FRE-025", "funcion": "presentarse", "es": "¿Cómo te llamas?", "tr": "¿Ко́мо тэ я́мас?", "ru": "Как тебя зовут?", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "Дословно: «как ты себя называешь?».", "lex": ["ESP-00064", "ESP-00020", "ESP-02076"]},
 {"id": "FRE-026", "funcion": "presentarse", "es": "¿Cómo se llama usted?", "tr": "¿Ко́мо сэ я́ма устэ́д?", "ru": "Как вас зовут?", "registro": "usted", "nivel": "A1", "unidad": 1, "uso": "Вежливый вариант.", "lex": ["ESP-00064", "ESP-00019", "ESP-02076", "ESP-00084"]},
 {"id": "FRE-027", "funcion": "presentarse", "es": "Me llamo Ana.", "tr": "Мэ я́мо А́на.", "ru": "Меня зовут Аня.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Дословно: «я себя называю Аня». Можно сказать и просто «Ana».", "lex": ["ESP-00015", "ESP-02076", null]},
 {"id": "FRE-028", "funcion": "presentarse", "es": "Encantado.", "tr": "Энканта́до.", "ru": "Очень приятно (говорит мужчина).", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Мужчина говорит «encantado», женщина — «encantada», как «рад» и «рада».", "lex": ["ESP-00942"]},
 {"id": "FRE-029", "funcion": "presentarse", "es": "Encantada.", "tr": "Энканта́да.", "ru": "Очень приятно (говорит женщина).", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Женщина говорит «encantada».", "lex": ["ESP-00942"]},
 {"id": "FRE-030", "funcion": "presentarse", "es": "Mucho gusto.", "tr": "Му́чо гу́сто.", "ru": "Очень приятно.", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Одинаково для мужчин и женщин.", "lex": ["ESP-00066", "ESP-00673"]},
 {"id": "FRE-031", "funcion": "presentarse", "es": "¿Puedes deletrear tu nombre?", "tr": "¿Пуэ́дэс дэлэтрэа́р ту но́мбрэ?", "ru": "Можешь назвать своё имя по буквам?", "registro": "tú", "nivel": "A1", "unidad": 1, "uso": "Ответ — названия букв: «a, ene, a».", "lex": ["ESP-00017", "ESP-05409", "ESP-00035", "ESP-00189"]},
 {"id": "FRE-032", "funcion": "agradecer", "es": "¡Vale!", "tr": "¡Ба́лэ!", "ru": "Ладно! Хорошо! Договорились!", "registro": "", "nivel": "A1", "unidad": 1, "uso": "Самое испанское «да, договорились». В Латинской Америке так почти не говорят.", "lex": ["ESP-05408"]}
];

const DIALOGOS_ES = [
 {"id": "DLE-001", "titulo": "На ресепшене", "tituloEs": "En la recepción", "situacion": "conocer", "nivel": "A1", "unidad": 1, "personajes": ["recepcion", "ana"], "lineas": [{"p": "recepcion", "es": "¡Buenos días!", "tr": "¡Буэ́нос ди́ас!", "ru": "Доброе утро!", "lex": ["ESP-00037", "ESP-00082"], "f": ["FRE-002"]}, {"p": "ana", "es": "¡Hola! Buenos días.", "tr": "¡О́ла! Буэ́нос ди́ас.", "ru": "Здравствуйте! Доброе утро.", "lex": ["ESP-00088", "ESP-00037", "ESP-00082"], "f": ["FRE-001", "FRE-002"]}, {"p": "recepcion", "es": "¿Cómo se llama usted?", "tr": "¿Ко́мо сэ я́ма устэ́д?", "ru": "Как вас зовут?", "lex": ["ESP-00064", "ESP-00019", "ESP-02076", "ESP-00084"], "f": ["FRE-026"], "obs": "Администратор говорит с Аней на «usted»: они не знакомы."}, {"p": "ana", "es": "Me llamo Ana. Ana Petrova.", "tr": "Мэ я́мо А́на. А́на Пэтро́ба.", "ru": "Меня зовут Аня. Аня Петрова.", "lex": ["ESP-00015", "ESP-02076", null, null, null], "f": ["FRE-027"]}, {"p": "recepcion", "es": "¿Cómo se escribe?", "tr": "¿Ко́мо сэ эскри́бэ?", "ru": "Как это пишется?", "lex": ["ESP-00064", "ESP-00019", "ESP-00321"], "f": ["FRE-023"]}, {"p": "ana", "es": "Pe, e, te, erre, o, uve, a.", "tr": "Пэ, э, тэ, э́ррэ, о, у́бэ, а.", "ru": "П, е, т, р, о, в, а.", "lex": [null, null, null, null, null, null, null], "obs": "Аня называет буквы по-испански: «uve» — это **v**."}, {"p": "recepcion", "es": "Muy bien. Gracias.", "tr": "Муй бьен. Гра́сьяс.", "ru": "Очень хорошо. Спасибо.", "lex": ["ESP-00054", "ESP-00036", "ESP-00069"], "f": ["FRE-014"]}, {"p": "ana", "es": "De nada. ¡Hasta luego!", "tr": "Дэ на́да. ¡А́ста луэ́го!", "ru": "Не за что. До свидания!", "lex": ["ESP-00002", "ESP-00070", "ESP-00135", "ESP-00190"], "f": ["FRE-011", "FRE-015"]}, {"p": "recepcion", "es": "¡Adiós!", "tr": "¡Адьо́с!", "ru": "До свидания!", "lex": ["ESP-00303"], "f": ["FRE-010"]}]},
 {"id": "DLE-002", "titulo": "Знакомство с Хавьером", "tituloEs": "Javier", "situacion": "conocer", "nivel": "A1", "unidad": 1, "personajes": ["javier", "ana"], "lineas": [{"p": "javier", "es": "¡Buenas tardes! Me llamo Javier.", "tr": "¡Буэ́нас та́рдэс! Мэ я́мо Хабье́р.", "ru": "Добрый день! Меня зовут Хавьер.", "lex": ["ESP-00037", "ESP-00217", "ESP-00015", "ESP-02076", null], "f": ["FRE-003", "FRE-027"]}, {"p": "ana", "es": "Buenas tardes. Me llamo Ana.", "tr": "Буэ́нас та́рдэс. Мэ я́мо А́на.", "ru": "Добрый день. Меня зовут Аня.", "lex": ["ESP-00037", "ESP-00217", "ESP-00015", "ESP-02076", null], "f": ["FRE-003", "FRE-027"]}, {"p": "javier", "es": "Encantado, Ana.", "tr": "Энканта́до, А́на.", "ru": "Очень приятно, Аня.", "lex": ["ESP-00942", null], "f": ["FRE-028"], "obs": "Хавьер — мужчина, поэтому «encantado»."}, {"p": "ana", "es": "Encantada.", "tr": "Энканта́да.", "ru": "Очень приятно.", "lex": ["ESP-00942"], "f": ["FRE-029"], "obs": "Аня — женщина, поэтому «encantada»."}, {"p": "javier", "es": "¿Qué tal?", "tr": "¿Кэ тал?", "ru": "Как дела?", "lex": ["ESP-00014", "ESP-05183"], "f": ["FRE-005"]}, {"p": "ana", "es": "Muy bien, gracias. ¿Y usted?", "tr": "Муй бьен, гра́сьяс. ¿И устэ́д?", "ru": "Очень хорошо, спасибо. А вы?", "lex": ["ESP-00054", "ESP-00036", "ESP-00069", "ESP-00009", "ESP-00084"], "f": ["FRE-009", "FRE-014"], "obs": "С преподавателем Аня говорит на «usted»."}, {"p": "javier", "es": "Bien, gracias. Y de tú, por favor.", "tr": "Бьен, гра́сьяс. И дэ ту, пор фабо́р.", "ru": "Хорошо, спасибо. И давай на «ты», пожалуйста.", "lex": ["ESP-00036", "ESP-00069", "ESP-00009", "ESP-00002", "ESP-00075", "ESP-00013", "ESP-00102"], "f": ["FRE-014", "FRE-016"], "obs": "«De tú» — на «ты». В Испании быстро переходят на «tú», даже с преподавателем."}, {"p": "ana", "es": "¡Vale!", "tr": "¡Ба́лэ!", "ru": "Хорошо!", "lex": ["ESP-05408"], "f": ["FRE-032"]}]},
 {"id": "DLE-003", "titulo": "Как это пишется?", "tituloEs": "¿Cómo se escribe?", "situacion": "conocer", "nivel": "A1", "unidad": 1, "personajes": ["javier", "ana"], "lineas": [{"p": "javier", "es": "La palabra: mañana.", "tr": "Ла пала́бра: маня́на.", "ru": "Слово: mañana.", "lex": ["ESP-00001", "ESP-00292", "ESP-05181"]}, {"p": "ana", "es": "Perdón, no entiendo. ¿Puedes repetir, por favor?", "tr": "Пэрдо́н, но энтье́ндо. ¿Пуэ́дэс рэпэти́р, пор фабо́р?", "ru": "Извини, я не понимаю. Можешь повторить, пожалуйста?", "lex": ["ESP-00538", "ESP-00005", "ESP-00143", "ESP-00017", "ESP-01169", "ESP-00013", "ESP-00102"], "f": ["FRE-016", "FRE-017", "FRE-019", "FRE-020"]}, {"p": "javier", "es": "Mañana.", "tr": "Маня́на.", "ru": "Mañana.", "lex": ["ESP-05181"]}, {"p": "ana", "es": "¿Cómo se escribe?", "tr": "¿Ко́мо сэ эскри́бэ?", "ru": "Как это пишется?", "lex": ["ESP-00064", "ESP-00019", "ESP-00321"], "f": ["FRE-023"]}, {"p": "javier", "es": "Eme, a, eñe, a, ene, a.", "tr": "Э́мэ, а, э́не, а, э́нэ, а.", "ru": "M, a, ñ, a, n, a.", "lex": [null, null, null, null, null, null]}, {"p": "ana", "es": "Más despacio, por favor.", "tr": "Мас дэспа́сьо, пор фабо́р.", "ru": "Помедленнее, пожалуйста.", "lex": ["ESP-00047", "ESP-01424", "ESP-00013", "ESP-00102"], "f": ["FRE-016", "FRE-022"]}, {"p": "javier", "es": "Eme… a… eñe… a… ene… a.", "tr": "Э́мэ… а… э́не… а… э́нэ… а.", "ru": "M… a… ñ… a… n… a.", "lex": [null, null, null, null, null, null]}, {"p": "ana", "es": "¡Gracias!", "tr": "¡Гра́сьяс!", "ru": "Спасибо!", "lex": ["ESP-00069"], "f": ["FRE-014"]}, {"p": "javier", "es": "De nada.", "tr": "Дэ на́да.", "ru": "Не за что.", "lex": ["ESP-00002", "ESP-00070"], "f": ["FRE-015"]}]},
 {"id": "DLE-004", "titulo": "Аня и Лусия", "tituloEs": "Ana y Lucía", "situacion": "conocer", "nivel": "A1", "unidad": 1, "personajes": ["lucia", "ana"], "lineas": [{"p": "lucia", "es": "¡Hola! ¿Cómo te llamas?", "tr": "¡О́ла! ¿Ко́мо тэ я́мас?", "ru": "Привет! Как тебя зовут?", "lex": ["ESP-00088", "ESP-00064", "ESP-00020", "ESP-02076"], "f": ["FRE-001", "FRE-025"]}, {"p": "ana", "es": "Ana. ¿Y tú?", "tr": "А́на. ¿И ту?", "ru": "Аня. А тебя?", "lex": [null, "ESP-00009", "ESP-00075"]}, {"p": "lucia", "es": "Lucía. ¡Mucho gusto!", "tr": "Луси́а. ¡Му́чо гу́сто!", "ru": "Лусия. Очень приятно!", "lex": [null, "ESP-00066", "ESP-00673"], "f": ["FRE-030"]}, {"p": "ana", "es": "Encantada.", "tr": "Энканта́да.", "ru": "Очень приятно.", "lex": ["ESP-00942"], "f": ["FRE-029"]}, {"p": "lucia", "es": "¿Tu número de teléfono?", "tr": "¿Ту ну́мэро дэ тэлэ́фоно?", "ru": "Твой номер телефона?", "lex": ["ESP-00035", "ESP-00352", "ESP-00002", "ESP-00377"]}, {"p": "ana", "es": "Seis, cero, cinco, uno, ocho, dos, nueve, siete, tres.", "tr": "Сэйс, сэ́ро, си́нко, у́но, о́чо, дос, нуэ́бэ, сье́тэ, трэс.", "ru": "Шесть, ноль, пять, один, восемь, два, девять, семь, три.", "lex": ["ESP-00494", "ESP-01749", "ESP-00358", "ESP-00071", "ESP-00868", "ESP-00097", "ESP-01187", "ESP-00792", "ESP-00195"], "obs": "Номер телефона в Испании — девять цифр. Их можно называть по одной."}, {"p": "lucia", "es": "Más despacio, por favor.", "tr": "Мас дэспа́сьо, пор фабо́р.", "ru": "Помедленнее, пожалуйста.", "lex": ["ESP-00047", "ESP-01424", "ESP-00013", "ESP-00102"], "f": ["FRE-016", "FRE-022"]}, {"p": "ana", "es": "Seis… cero… cinco… uno… ocho… dos… nueve… siete… tres.", "tr": "Сэйс… сэ́ро… си́нко… у́но… о́чо… дос… нуэ́бэ… сье́тэ… трэс.", "ru": "Шесть… ноль… пять… один… восемь… два… девять… семь… три.", "lex": ["ESP-00494", "ESP-01749", "ESP-00358", "ESP-00071", "ESP-00868", "ESP-00097", "ESP-01187", "ESP-00792", "ESP-00195"]}, {"p": "lucia", "es": "¡Vale, gracias! ¡Hasta mañana!", "tr": "¡Ба́лэ, гра́сьяс! ¡А́ста маня́на!", "ru": "Хорошо, спасибо! До завтра!", "lex": ["ESP-05408", "ESP-00069", "ESP-00135", "ESP-05181"], "f": ["FRE-012", "FRE-014", "FRE-032"]}, {"p": "ana", "es": "¡Chao!", "tr": "¡Ча́о!", "ru": "Пока!", "lex": ["ESP-05225"], "f": ["FRE-013"]}]}
];

function dialogoEsById(id) { return DIALOGOS_ES.find(d => d.id === id) || null; }
function fraseEsById(id) { return FRASES_ES.find(f => f.id === id) || null; }
if (typeof window !== "undefined") Object.assign(window, { DLG_PERSONAJES_ES, FRASES_ES, DIALOGOS_ES, dialogoEsById, fraseEsById });
