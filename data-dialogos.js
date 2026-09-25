/* ============================================================
   DATA-DIALOGOS.JS — Diálogos del módulo Diálogos (dialogos.html)
   ------------------------------------------------------------
   Versión v3 (24/09/2026). Reemplaza al data-dialogos.js del repo viejo.

   Qué hay:
   - DLG_PERSONAJES: el elenco fijo. Cada personaje tiene género,
     porque en ruso cambia el pasado y los adjetivos (спал / спала́).
   - DLG_SITUACIONES: dónde pasa la conversación (conocer gente,
     comer y beber…). Organiza la lista de diálogos.
   - DLG_FUNCIONES: qué se hace con el idioma (saludar, pedir,
     orientarse…). Es el eje que crece de A1 a C1.
   - DIALOGOS: cada diálogo con id estable DLG-xxx, situación,
     función, nivel y sus líneas.

   Cada línea:
     p    personaje (clave de DLG_PERSONAJES)
     ru   texto con acento (U+0301)
     tr   transliteración, generada desde el acento con las reglas de
          CONVENCION_IPA.md (Parte B). Si la palabra está en el léxico
          tal cual, se usa la transliteración del léxico.
     es   traducción (español rioplatense)
     lex  un ID del léxico por cada palabra rusa, en orden.
          "PROPIO" = nombre propio. null = todavía no está en el léxico.
     f    frases (data-frases.js) que aparecen en la línea
     obs  gramática en contexto (opcional)
     cul  nota cultural (data-cultura.js), opcional
     vy   versión con вы de la línea (mismos campos). Si el diálogo
          tiene «vy», el personaje que cambia está en dialogo.vy
          (por ejemplo { masha: "olga" }).

   Regla de oro: acá no se repite nada del léxico. La traducción de
   cada palabra, su categoría y sus formas salen de data-lexicon.js,
   data-casos.js y data-verbos.js por el ID.
   ============================================================ */

const DLG_PERSONAJES = {
  "masha": {
    "ru": "Ма́ша",
    "es": "Masha",
    "genero": "f",
    "desc": "Estudiante, vive en Moscú. Hermana de Dima."
  },
  "dima": {
    "ru": "Ди́ма",
    "es": "Dima",
    "genero": "m",
    "desc": "Hermano de Masha."
  },
  "lucas": {
    "ru": "Лу́кас",
    "es": "Lucas",
    "genero": "m",
    "desc": "Estudiante de Buenos Aires que vive en Moscú."
  },
  "olga": {
    "ru": "О́льга Петро́вна",
    "es": "Olga Petrovna",
    "genero": "f",
    "desc": "Profesora de ruso de Lucas."
  },
  "mozo": {
    "ru": "Официа́нт",
    "es": "Mozo",
    "genero": "m"
  },
  "vendedora": {
    "ru": "Продавщи́ца",
    "es": "Vendedora",
    "genero": "f"
  },
  "transeunte": {
    "ru": "Прохо́жий",
    "es": "Transeúnte",
    "genero": "m"
  },
  "transeunta": {
    "ru": "Прохо́жая",
    "es": "Transeúnte",
    "genero": "f"
  },
  "recepcion": {
    "ru": "Администра́тор",
    "es": "Recepcionista",
    "genero": "f"
  }
};

const DLG_SITUACIONES = [["conocer","Conocer gente"],["cortesia","Cortesía y comunicación"],["comer","Comer y beber"],["compras","Compras"],["ciudad","Por la ciudad"],["casa","Casa y familia"],["dia","El día a día"],["ocio","Tiempo libre y planes"],["salud","Salud y emergencias"],["viajes","Viajes"]];

const DLG_FUNCIONES = [["saludar","Saludar"],["despedirse","Despedirse"],["presentarse","Presentarse y presentar"],["hablar-de-uno","Hablar de uno mismo"],["agradecer","Agradecer y disculparse"],["entender","Entender y hacerse entender"],["pedir","Pedir y comprar"],["orientarse","Orientarse"],["ayuda","Pedir ayuda"],["datos","Preguntar datos"],["gustos","Gustos y opiniones"],["invitar","Invitar y quedar"],["felicitar","Felicitar y elogiar"],["salud","Cómo se siente"]];

const DIALOGOS = [
{ "id":"DLG-001","titulo":"Saludo básico","tituloRu":"Как дела́?","situacion":"conocer","funcion":"saludar","nivel":"A1","personajes":["masha","lucas"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"masha","ru":"Приве́т, Лу́кас!","tr":"Priviét, Lúkas!","es":"¡Hola, Lucas!","lex":["CMR-02527","PROPIO"],"f":["FRS-001"],"cul":"CUL-001","vy":{"ru":"Здра́вствуйте, Лу́кас!","tr":"Zdrástvuiti, Lúkas!","es":"¡Hola, Lucas!","lex":["CMR-05479","PROPIO"],"f":["FRS-002"],"obs":"Здра́вствуйте es el saludo formal: se usa con вы."}},
    {"p":"lucas","ru":"Приве́т! Как дела́?","tr":"Priviét! Kak dilá?","es":"¡Hola! ¿Cómo andás?","lex":["CMR-02527","CMR-00019","CMR-00065"],"f":["FRS-001","FRS-006"],"cul":"CUL-002","vy":{"ru":"Здра́вствуйте, О́льга Петро́вна! Как у вас дела́?","tr":"Zdrástvuiti, Ólga Pitróvna! Kak u vas dilá?","es":"¡Hola, Olga Petrovna! ¿Cómo le va?","lex":["CMR-05479","PROPIO","PROPIO","CMR-00019","CMR-00021","CMR-00038","CMR-00065"],"f":["FRS-002","FRS-007"],"cul":"CUL-003"}},
    {"p":"masha","ru":"Хорошо́, спаси́бо. А у тебя́?","tr":"Jarashó, spasíba. A u tibiá?","es":"Bien, gracias. ¿Y vos?","lex":["CMR-00190","CMR-02213","CMR-00010","CMR-00021","CMR-00033"],"f":["FRS-024"],"vy":{"ru":"Хорошо́, спаси́бо. А у вас?","tr":"Jarashó, spasíba. A u vas?","es":"Bien, gracias. ¿Y usted?","lex":["CMR-00190","CMR-02213","CMR-00010","CMR-00021","CMR-00038"],"f":["FRS-024"]}},
    {"p":"lucas","ru":"Норма́льно.","tr":"Narmálna.","es":"Bien, sin novedades.","lex":["CMR-03966"],"f":["FRS-008"],"obs":"Норма́льно no es «normal»: es la respuesta neutra, «bien»."}
  ] },
{ "id":"DLG-002","titulo":"Buen día","tituloRu":"До́брое у́тро!","situacion":"conocer","funcion":"saludar","nivel":"A1","personajes":["masha","dima"],
  "lineas": [
    {"p":"masha","ru":"До́брое у́тро!","tr":"Dóbrayi útra!","es":"¡Buen día!","lex":["CMR-00662","CMR-00336"],"f":["FRS-003"]},
    {"p":"dima","ru":"До́брое у́тро!","tr":"Dóbrayi útra!","es":"¡Buen día!","lex":["CMR-00662","CMR-00336"],"f":["FRS-003"]},
    {"p":"masha","ru":"Как спал?","tr":"Kak spal?","es":"¿Cómo dormiste?","lex":["CMR-00019","CMR-00486"],"obs":"Спал es pasado masculino, porque le habla a Dima. A una mujer: спала́."},
    {"p":"dima","ru":"Хорошо́, спаси́бо. А ты?","tr":"Jarashó, spasíba. A ty?","es":"Bien, gracias. ¿Y vos?","lex":["CMR-00190","CMR-02213","CMR-00010","CMR-00033"],"f":["FRS-024"]},
    {"p":"masha","ru":"Отли́чно!","tr":"Atlíchna!","es":"¡Bárbaro!","lex":["CMR-02554"]}
  ] },
{ "id":"DLG-003","titulo":"¿Cómo te llamás?","tituloRu":"Как тебя́ зову́т?","situacion":"conocer","funcion":"presentarse","nivel":"A1","personajes":["lucas","masha"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"lucas","ru":"Приве́т! Как тебя́ зову́т?","tr":"Priviét! Kak tibiá zavút?","es":"¡Hola! ¿Cómo te llamás?","lex":["CMR-02527","CMR-00019","CMR-00033","CMR-00912"],"f":["FRS-001","FRS-015"],"obs":"Literalmente «¿cómo te llaman?»: тебя́ es acusativo de ты.","vy":{"ru":"Здра́вствуйте! Как вас зову́т?","tr":"Zdrástvuiti! Kak vas zavút?","es":"¡Hola! ¿Cómo se llama?","lex":["CMR-05479","CMR-00019","CMR-00038","CMR-00912"],"f":["FRS-002","FRS-016"],"obs":"Literalmente «¿cómo lo llaman?»: вас es acusativo de вы."}},
    {"p":"masha","ru":"Меня́ зову́т Ма́ша. А тебя́?","tr":"Miniá zavút Másha. A tibiá?","es":"Me llamo Masha. ¿Y vos?","lex":["CMR-00005","CMR-00912","PROPIO","CMR-00010","CMR-00033"],"f":["FRS-017"],"vy":{"ru":"Меня́ зову́т О́льга Петро́вна. А вас?","tr":"Miniá zavút Ólga Pitróvna. A vas?","es":"Me llamo Olga Petrovna. ¿Y usted?","lex":["CMR-00005","CMR-00912","PROPIO","PROPIO","CMR-00010","CMR-00038"],"f":["FRS-017"],"cul":"CUL-003"}},
    {"p":"lucas","ru":"Лу́кас.","tr":"Lúkas.","es":"Lucas.","lex":["PROPIO"]},
    {"p":"masha","ru":"О́чень прия́тно!","tr":"Óchin priyátna!","es":"¡Mucho gusto!","lex":["CMR-00069","CMR-02314"],"f":["FRS-018"]},
    {"p":"lucas","ru":"Мне то́же!","tr":"Mnie tózhi!","es":"¡Igualmente!","lex":["CMR-00005","CMR-00111"],"f":["FRS-019"]}
  ] },
{ "id":"DLG-004","titulo":"¿De dónde sos?","tituloRu":"Отку́да ты?","situacion":"conocer","funcion":"hablar-de-uno","nivel":"A1","personajes":["masha","lucas"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"masha","ru":"Лу́кас, отку́да ты?","tr":"Lúkas, atkúda ty?","es":"Lucas, ¿de dónde sos?","lex":["PROPIO","CMR-00761","CMR-00033"],"f":["FRS-021"],"cul":"CUL-001","vy":{"ru":"Лу́кас, отку́да вы?","tr":"Lúkas, atkúda vy?","es":"Lucas, ¿de dónde es usted?","lex":["PROPIO","CMR-00761","CMR-00038"],"f":["FRS-022"]}},
    {"p":"lucas","ru":"Я из Аргенти́ны. А ты?","tr":"Ya is Arguintíny. A ty?","es":"Soy de Argentina. ¿Y vos?","lex":["CMR-00005","CMR-00020","PROPIO","CMR-00010","CMR-00033"],"f":["FRS-023"],"obs":"Из + genitivo: Аргенти́на → из Аргенти́ны.","vy":{"ru":"Я из Аргенти́ны. А вы?","tr":"Ya is Arguintíny. A vy?","es":"Soy de Argentina. ¿Y usted?","lex":["CMR-00005","CMR-00020","PROPIO","CMR-00010","CMR-00038"],"f":["FRS-023"],"obs":"Из + genitivo: Аргенти́на → из Аргенти́ны."}},
    {"p":"masha","ru":"А я из Москвы́.","tr":"A ya is Maskvý.","es":"Y yo, de Moscú.","lex":["CMR-00010","CMR-00005","CMR-00020","PROPIO"],"f":["FRS-023"]},
    {"p":"lucas","ru":"Интере́сно!","tr":"Intiriésna!","es":"¡Qué interesante!","lex":["CMR-01266"]}
  ] },
{ "id":"DLG-005","titulo":"Despedirse","tituloRu":"Пока́!","situacion":"conocer","funcion":"despedirse","nivel":"A1","personajes":["lucas","masha"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"lucas","ru":"Ну, мне пора́. Пока́!","tr":"Nu, mnie pará. Paká!","es":"Bueno, me tengo que ir. ¡Chau!","lex":["CMR-00083","CMR-00005","CMR-00273","CMR-00267"],"f":["FRS-009","FRS-013"],"obs":"Мне пора́: «ya es hora (de irme)».","vy":{"ru":"Ну, мне пора́. До свида́ния!","tr":"Nu, mnie pará. Do svidániya!","es":"Bueno, me tengo que ir. ¡Hasta luego!","lex":["CMR-00083","CMR-00005","CMR-00273","CMR-00051","CMR-02946"],"f":["FRS-010","FRS-013"],"obs":"До свида́ния es la despedida formal: se usa con вы."}},
    {"p":"masha","ru":"Пока́! Уви́димся за́втра?","tr":"Paká! Uvídimsia záftra?","es":"¡Chau! ¿Nos vemos mañana?","lex":["CMR-00267","CMR-05249","CMR-00865"],"f":["FRS-009","FRS-012"],"vy":{"ru":"До свида́ния! Уви́димся за́втра?","tr":"Do svidániya! Uvídimsia záftra?","es":"¡Hasta luego! ¿Nos vemos mañana?","lex":["CMR-00051","CMR-02946","CMR-05249","CMR-00865"],"f":["FRS-010","FRS-012"]}},
    {"p":"lucas","ru":"Да, до за́втра!","tr":"Da, do záftra!","es":"Sí, ¡hasta mañana!","lex":["CMR-00116","CMR-00051","CMR-00865"],"f":["FRS-011"]}
  ] },
{ "id":"DLG-006","titulo":"Gracias y de nada","tituloRu":"Спаси́бо!","situacion":"cortesia","funcion":"agradecer","nivel":"A1","personajes":["lucas","dima"],
  "lineas": [
    {"p":"lucas","ru":"Спаси́бо большо́е!","tr":"Spasíba balshóyi!","es":"¡Muchas gracias!","lex":["CMR-02213","CMR-00096"],"f":["FRS-024"]},
    {"p":"dima","ru":"Пожа́луйста!","tr":"Pazháluista!","es":"¡De nada!","lex":["CMR-01243"],"f":["FRS-025"],"cul":"CUL-004"},
    {"p":"lucas","ru":"Ты о́чень до́брый.","tr":"Ty óchin dóbryi.","es":"Sos muy amable.","lex":["CMR-00033","CMR-00069","CMR-00662"],"obs":"До́брый es masculino, porque habla de Dima. De una mujer: до́брая."},
    {"p":"dima","ru":"Не за что!","tr":"Nié za shta!","es":"¡No hay de qué!","lex":["CMR-00003","CMR-00024","CMR-00009"],"f":["FRS-026"],"obs":"Se dice todo junto, con el acento en не: «nié-za-shta»."}
  ] },
{ "id":"DLG-007","titulo":"¿Hablás ruso?","tituloRu":"Ты говори́шь по-ру́сски?","situacion":"cortesia","funcion":"entender","nivel":"A1","personajes":["masha","lucas"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"masha","ru":"Ты говори́шь по-ру́сски?","tr":"Ty gavarísh parússki?","es":"¿Hablás ruso?","lex":["CMR-00033","CMR-00058","CMR-03512"],"f":["FRS-028"],"obs":"По-ру́сски: «en ruso», para hablar. El idioma es ру́сский язы́к.","cul":"CUL-001","vy":{"ru":"Вы говори́те по-ру́сски?","tr":"Vy gavaríti parússki?","es":"¿Habla ruso?","lex":["CMR-00038","CMR-00058","CMR-03512"],"obs":"Con вы el verbo va en 2.ª persona plural: говори́те."}},
    {"p":"lucas","ru":"Да, немно́го.","tr":"Da, nimnóga.","es":"Sí, un poco.","lex":["CMR-00116","CMR-00770"]},
    {"p":"masha","ru":"А ты меня́ понима́ешь?","tr":"A ty miniá panimáyish?","es":"¿Y me entendés?","lex":["CMR-00010","CMR-00033","CMR-00005","CMR-00160"],"vy":{"ru":"А вы меня́ понима́ете?","tr":"A vy miniá panimáyiti?","es":"¿Y me entiende?","lex":["CMR-00010","CMR-00038","CMR-00005","CMR-00160"]}},
    {"p":"lucas","ru":"Нет, не о́чень.","tr":"Niet, nie óchin.","es":"No, no mucho.","lex":["CMR-00107","CMR-00003","CMR-00069"]}
  ] },
{ "id":"DLG-008","titulo":"En el café","tituloRu":"В кафе́","situacion":"comer","funcion":"pedir","nivel":"A1","personajes":["mozo","lucas"],
  "lineas": [
    {"p":"mozo","ru":"Здра́вствуйте! Что бу́дете?","tr":"Zdrástvuiti! Shto búditi?","es":"¡Buenas! ¿Qué va a tomar?","lex":["CMR-05479","CMR-00009","CMR-00006"],"f":["FRS-002"],"cul":"CUL-005"},
    {"p":"lucas","ru":"Ко́фе, пожа́луйста.","tr":"Kófi, pazháluista.","es":"Un café, por favor.","lex":["CMR-01952","CMR-01243"],"f":["FRS-025"],"obs":"Ко́фе es masculino aunque termine en -е.","cul":"CUL-004"},
    {"p":"mozo","ru":"С молоко́м?","tr":"S malakóm?","es":"¿Con leche?","lex":["CMR-00008","CMR-02072"],"obs":"С + instrumental: молоко́ → с молоко́м."},
    {"p":"lucas","ru":"Да, спаси́бо.","tr":"Da, spasíba.","es":"Sí, gracias.","lex":["CMR-00116","CMR-02213"],"f":["FRS-024"]}
  ] },
{ "id":"DLG-009","titulo":"¿Cuánto sale?","tituloRu":"Ско́лько сто́ит?","situacion":"compras","funcion":"pedir","nivel":"A1","personajes":["lucas","vendedora"],
  "lineas": [
    {"p":"lucas","ru":"Извини́те, ско́лько сто́ит э́та ша́пка?","tr":"Izviníti, skólka stóit éta shápka?","es":"Disculpe, ¿cuánto sale este gorro?","lex":["CMR-01992","CMR-00384","CMR-00182","CMR-00014","CMR-02772"],"f":["FRS-027","FRS-033"],"obs":"Э́та concuerda con ша́пка (femenino)."},
    {"p":"vendedora","ru":"Две ты́сячи рубле́й.","tr":"Dvie týsichi rubliéi.","es":"Dos mil rublos.","lex":["CMR-00070","CMR-00226","CMR-00343"]},
    {"p":"lucas","ru":"Хорошо́, возьму́.","tr":"Jarashó, vazmú.","es":"Bueno, lo llevo.","lex":["CMR-00190","CMR-00175"],"f":["FRS-035"],"obs":"Возьму́ es futuro de взять: «(lo) voy a llevar»."},
    {"p":"vendedora","ru":"Спаси́бо! Вот, пожа́луйста.","tr":"Spasíba! Vot, pazháluista.","es":"¡Gracias! Acá tiene.","lex":["CMR-02213","CMR-00057","CMR-01243"],"f":["FRS-024","FRS-025"],"cul":"CUL-004"}
  ] },
{ "id":"DLG-010","titulo":"¿Dónde queda?","tituloRu":"Где вокза́л?","situacion":"ciudad","funcion":"orientarse","nivel":"A1","personajes":["lucas","transeunte"],
  "lineas": [
    {"p":"lucas","ru":"Извини́те, где вокза́л?","tr":"Izviníti, gdie vagzál?","es":"Disculpe, ¿dónde queda la estación de tren?","lex":["CMR-01992","CMR-00079","CMR-02290"],"f":["FRS-027","FRS-036"],"cul":"CUL-009"},
    {"p":"transeunte","ru":"Пря́мо, пото́м напра́во.","tr":"Priáma, patóm napráva.","es":"Derecho y después a la derecha.","lex":["CMR-00924","CMR-00090","CMR-05471"]},
    {"p":"lucas","ru":"Э́то далеко́?","tr":"Éta dalikó?","es":"¿Es lejos?","lex":["CMR-00012","CMR-00688"],"f":["FRS-039"]},
    {"p":"transeunte","ru":"Нет, бли́зко. Мину́т пять.","tr":"Niet, blíska. Minút piat.","es":"No, cerca. Unos cinco minutos.","lex":["CMR-00107","CMR-02509","CMR-00285","CMR-00362"],"obs":"Con el número después (мину́т пять) significa «más o menos cinco minutos»."},
    {"p":"lucas","ru":"Спаси́бо!","tr":"Spasíba!","es":"¡Gracias!","lex":["CMR-02213"],"f":["FRS-024"]}
  ] },
{ "id":"DLG-011","titulo":"La familia","tituloRu":"Семья́","situacion":"casa","funcion":"hablar-de-uno","nivel":"A1","personajes":["lucas","masha"],
  "lineas": [
    {"p":"lucas","ru":"Ма́ша, у тебя́ есть брат?","tr":"Másha, u tibiá yest brat?","es":"Masha, ¿tenés hermano?","lex":["PROPIO","CMR-00021","CMR-00033","CMR-00006","CMR-00542"],"obs":"У тебя́ есть: «tenés». Literalmente, «junto a vos hay»."},
    {"p":"masha","ru":"Да, есть. Его́ зову́т Ди́ма.","tr":"Da, yest. Yivó zavút Díma.","es":"Sí. Se llama Dima.","lex":["CMR-00116","CMR-00006","CMR-00007","CMR-00912","PROPIO"],"cul":"CUL-003"},
    {"p":"lucas","ru":"А сестра́?","tr":"A sistrá?","es":"¿Y hermana?","lex":["CMR-00010","CMR-00982"]},
    {"p":"masha","ru":"Нет, сестры́ нет.","tr":"Niet, sistrý niet.","es":"No, hermana no tengo.","lex":["CMR-00107","CMR-00982","CMR-00107"],"obs":"Нет + genitivo: сестра́ → сестры́."}
  ] },
{ "id":"DLG-012","titulo":"¿Qué hora es?","tituloRu":"Кото́рый час?","situacion":"dia","funcion":"datos","nivel":"A1","personajes":["lucas","dima"],
  "lineas": [
    {"p":"lucas","ru":"Ди́ма, кото́рый час?","tr":"Díma, katóryi chas?","es":"Dima, ¿qué hora es?","lex":["PROPIO","CMR-00022","CMR-00200"],"f":["FRS-043"]},
    {"p":"dima","ru":"Три часа́. А что?","tr":"Tri chisá. A shto?","es":"Las tres. ¿Por?","lex":["CMR-00150","CMR-00200","CMR-00010","CMR-00009"],"obs":"Два, три y четы́re van con genitivo singular: час → три часа́."},
    {"p":"lucas","ru":"Я опа́здываю!","tr":"Ya apázdyvayu!","es":"¡Llego tarde!","lex":["CMR-00005","CMR-05146"]},
    {"p":"dima","ru":"Тогда́ беги́!","tr":"Tagdá biguí!","es":"¡Entonces corré!","lex":["CMR-00112","CMR-00824"],"obs":"Беги́ es imperativo de бежа́ть («correr»), con ты."}
  ] },
{ "id":"DLG-013","titulo":"¿Tenés hambre?","tituloRu":"Ты хо́чешь есть?","situacion":"comer","funcion":"pedir","nivel":"A1","personajes":["masha","lucas"],
  "lineas": [
    {"p":"masha","ru":"Ты хо́чешь есть?","tr":"Ty jóchish yest?","es":"¿Tenés hambre?","lex":["CMR-00033","CMR-00092","CMR-01290"],"obs":"Literalmente «¿querés comer?». Есть acá es «comer», no «hay»."},
    {"p":"lucas","ru":"Да, о́чень!","tr":"Da, óchin!","es":"¡Sí, mucha!","lex":["CMR-00116","CMR-00069"]},
    {"p":"masha","ru":"Что ты хо́чешь?","tr":"Shto ty jóchish?","es":"¿Qué querés?","lex":["CMR-00009","CMR-00033","CMR-00092"]},
    {"p":"lucas","ru":"Суп и́ли борщ.","tr":"Sup íli borsch.","es":"Sopa o borsch.","lex":["CMR-03922","CMR-00044","CMR-05412"]}
  ] },
{ "id":"DLG-014","titulo":"El tiempo","tituloRu":"Пого́да","situacion":"dia","funcion":"datos","nivel":"A1","personajes":["lucas","masha"],
  "lineas": [
    {"p":"lucas","ru":"Кака́я сего́дня пого́да?","tr":"Kakáya sivódnia pagóda?","es":"¿Cómo está el tiempo hoy?","lex":["CMR-00084","CMR-00202","CMR-02268"],"f":["FRS-044"]},
    {"p":"masha","ru":"Сего́дня хо́лодно.","tr":"Sivódnia jóladna.","es":"Hoy hace frío.","lex":["CMR-00202","CMR-03218"]},
    {"p":"lucas","ru":"Идёт дождь?","tr":"Idiót dosht?","es":"¿Está lloviendo?","lex":["CMR-00095","CMR-01490"],"obs":"Идёт дождь: la lluvia «va», como en «cae»."},
    {"p":"masha","ru":"Нет, со́лнечно.","tr":"Niet, sólnichna.","es":"No, está soleado.","lex":["CMR-00107","CMR-05474"]}
  ] },
{ "id":"DLG-015","titulo":"En casa","tituloRu":"До́ма","situacion":"casa","funcion":"datos","nivel":"A1","personajes":["dima","masha"],
  "lineas": [
    {"p":"dima","ru":"Ма́ша, ты до́ма?","tr":"Másha, ty dóma?","es":"Masha, ¿estás en casa?","lex":["PROPIO","CMR-00033","CMR-00832"]},
    {"p":"masha","ru":"Да, я до́ма.","tr":"Da, ya dóma.","es":"Sí, estoy en casa.","lex":["CMR-00116","CMR-00005","CMR-00832"],"obs":"En presente no se dice «estoy»: я до́ма, «yo en casa»."},
    {"p":"dima","ru":"А где ма́ма?","tr":"A gdie máma?","es":"¿Y mamá dónde está?","lex":["CMR-00010","CMR-00079","CMR-00309"],"f":["FRS-036"]},
    {"p":"masha","ru":"Она́ на ку́хне.","tr":"Aná na kújni.","es":"Está en la cocina.","lex":["CMR-00013","CMR-00004","CMR-00997"],"obs":"На + preposicional para decir dónde: ку́хня → на ку́хне."}
  ] },
{ "id":"DLG-016","titulo":"Me gusta","tituloRu":"Тебе́ нра́вится?","situacion":"ocio","funcion":"gustos","nivel":"A1","personajes":["masha","lucas"],
  "lineas": [
    {"p":"masha","ru":"Тебе́ нра́вится ру́сская му́зыка?","tr":"Tibié nrávitsa rússkaya múzyka?","es":"¿Te gusta la música rusa?","lex":["CMR-00033","CMR-00711","CMR-00173","CMR-00639"],"f":["FRS-047"],"obs":"Como en castellano, el que gusta va en dativo: тебе́ («a vos»)."},
    {"p":"lucas","ru":"Да, о́чень!","tr":"Da, óchin!","es":"¡Sí, mucho!","lex":["CMR-00116","CMR-00069"]},
    {"p":"masha","ru":"А ру́сское кино́?","tr":"A rússkayi kinó?","es":"¿Y el cine ruso?","lex":["CMR-00010","CMR-00173","CMR-01219"],"obs":"Ру́сское: neutro, porque кино́ es neutro."},
    {"p":"lucas","ru":"Не о́чень.","tr":"Nie óchin.","es":"No mucho.","lex":["CMR-00003","CMR-00069"]}
  ] },
{ "id":"DLG-017","titulo":"Pedir ayuda","tituloRu":"Помоги́те, пожа́луйста!","situacion":"ciudad","funcion":"ayuda","nivel":"A1","personajes":["lucas","transeunta"],
  "lineas": [
    {"p":"lucas","ru":"Извини́те, помоги́те, пожа́луйста!","tr":"Izviníti, pamaguíti, pazháluista!","es":"Disculpe, ¿me ayuda, por favor?","lex":["CMR-01992","CMR-00497","CMR-01243"],"f":["FRS-025","FRS-027","FRS-040"],"cul":"CUL-009"},
    {"p":"transeunta","ru":"Что случи́лось?","tr":"Shto sluchílas?","es":"¿Qué pasó?","lex":["CMR-00009","CMR-00638"],"f":["FRS-041"]},
    {"p":"lucas","ru":"Я потеря́лся.","tr":"Ya patiriálsia.","es":"Me perdí.","lex":["CMR-00005","CMR-05473"],"obs":"Потеря́лся es masculino. Una mujer dice потеря́лась."},
    {"p":"transeunta","ru":"Не волну́йтесь! Я вам помогу́.","tr":"Nie valnúitis! Ya vam pamagú.","es":"¡No se preocupe! Yo lo ayudo.","lex":["CMR-00003","CMR-02334","CMR-00005","CMR-00038","CMR-00497"],"obs":"Помога́ть / помо́чь + dativo: вам, «a usted»."}
  ] },
{ "id":"DLG-018","titulo":"De compras","tituloRu":"В магази́не","situacion":"compras","funcion":"pedir","nivel":"A1","personajes":["lucas","vendedora"],
  "lineas": [
    {"p":"lucas","ru":"Мо́жно посмотре́ть?","tr":"Mózhna pasmatriét?","es":"¿Puedo ver?","lex":["CMR-00082","CMR-00321"],"f":["FRS-034"],"obs":"Мо́жно + infinitivo: «¿se puede…?», la forma más común de pedir permiso."},
    {"p":"vendedora","ru":"Коне́чно!","tr":"Kaniéshna!","es":"¡Claro!","lex":["CMR-00139"]},
    {"p":"lucas","ru":"Есть друго́й разме́р?","tr":"Yest drugói razmiér?","es":"¿Hay otro talle?","lex":["CMR-00006","CMR-00056","CMR-00593"]},
    {"p":"vendedora","ru":"Да, есть. Вот, пожа́луйста.","tr":"Da, yest. Vot, pazháluista.","es":"Sí, hay. Acá tiene.","lex":["CMR-00116","CMR-00006","CMR-00057","CMR-01243"],"f":["FRS-025"]}
  ] },
{ "id":"DLG-019","titulo":"¿Habla inglés?","tituloRu":"Вы говори́те по-англи́йски?","situacion":"cortesia","funcion":"entender","nivel":"A1","personajes":["lucas","transeunte"],
  "lineas": [
    {"p":"lucas","ru":"Извини́те, вы говори́те по-англи́йски?","tr":"Izviníti, vy gavaríti paanglíiski?","es":"Disculpe, ¿habla inglés?","lex":["CMR-01992","CMR-00038","CMR-00058","CMR-05475"],"f":["FRS-027","FRS-029"],"cul":"CUL-009"},
    {"p":"transeunte","ru":"Нет, то́лько по-ру́сски.","tr":"Niet, tólka parússki.","es":"No, solo ruso.","lex":["CMR-00107","CMR-00043","CMR-03512"]},
    {"p":"lucas","ru":"Я не понима́ю. Говори́те ме́дленнее, пожа́луйста.","tr":"Ya nie panimáyu. Gavaríti miédlinniyi, pazháluista.","es":"No entiendo. Hable más despacio, por favor.","lex":["CMR-00005","CMR-00003","CMR-00160","CMR-00058","CMR-01044","CMR-01243"],"f":["FRS-025","FRS-030","FRS-031"],"obs":"Ме́дленнее es el comparativo de ме́дленно: «más despacio»."},
    {"p":"transeunte","ru":"Хорошо́!","tr":"Jarashó!","es":"¡Bueno!","lex":["CMR-00190"]}
  ] },
{ "id":"DLG-020","titulo":"Presentar a un amigo","tituloRu":"Познако́мься!","situacion":"conocer","funcion":"presentarse","nivel":"A1","personajes":["masha","dima","lucas"],
  "lineas": [
    {"p":"masha","ru":"Ди́ма, познако́мься, э́то мой друг Лу́кас.","tr":"Díma, paznakómsia, éta moi druk Lúkas.","es":"Dima, te presento a mi amigo Lucas.","lex":["PROPIO","CMR-01793","CMR-00012","CMR-00060","CMR-00106","PROPIO"],"f":["FRS-020"],"obs":"Познако́мься, con ты. A varios o con вы: познако́мьтесь."},
    {"p":"dima","ru":"Приве́т, Лу́кас!","tr":"Priviét, Lúkas!","es":"¡Hola, Lucas!","lex":["CMR-02527","PROPIO"],"f":["FRS-001"]},
    {"p":"lucas","ru":"Приве́т! О́чень прия́тно.","tr":"Priviét! Óchin priyátna.","es":"¡Hola! Mucho gusto.","lex":["CMR-02527","CMR-00069","CMR-02314"],"f":["FRS-001","FRS-018"]},
    {"p":"dima","ru":"Отку́да ты?","tr":"Atkúda ty?","es":"¿De dónde sos?","lex":["CMR-00761","CMR-00033"],"f":["FRS-021"]},
    {"p":"lucas","ru":"Из Аргенти́ны.","tr":"Is Arguintíny.","es":"De Argentina.","lex":["CMR-00020","PROPIO"]}
  ] },
{ "id":"DLG-021","titulo":"Número de teléfono","tituloRu":"Но́мер телефо́на","situacion":"conocer","funcion":"datos","nivel":"A1","personajes":["masha","lucas"],
  "lineas": [
    {"p":"masha","ru":"Како́й у тебя́ но́мер телефо́на?","tr":"Kakói u tibiá nómir tilifóna?","es":"¿Cuál es tu número de teléfono?","lex":["CMR-00084","CMR-00021","CMR-00033","CMR-00548","CMR-00676"],"obs":"Но́мер телефо́на: «número del teléfono», con телефо́н en genitivo."},
    {"p":"lucas","ru":"Запиши́: сто два́дцать три, со́рок пять, шестьдеся́т семь.","tr":"Zapishí: sto dváttsat tri, sórak piat, shizdisiát siem.","es":"Anotá: 123-45-67.","lex":["CMR-01956","CMR-00987","CMR-00637","CMR-00150","CMR-01218","CMR-00362","CMR-03779","CMR-01175"],"cul":"CUL-007"},
    {"p":"masha","ru":"Записа́ла. Я тебе́ позвоню́!","tr":"Zapisála. Ya tibié pazvaniú!","es":"Listo, anotado. ¡Te llamo!","lex":["CMR-01956","CMR-00005","CMR-00033","CMR-00915"],"obs":"Записа́ла es femenino, porque lo dice Masha."}
  ] },
{ "id":"DLG-022","titulo":"Me siento mal","tituloRu":"Мне пло́хо","situacion":"salud","funcion":"salud","nivel":"A1","personajes":["masha","lucas"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"masha","ru":"Лу́кас, как ты себя́ чу́вствуешь?","tr":"Lúkas, kak ty sibiá chústvuyish?","es":"Lucas, ¿cómo te sentís?","lex":["PROPIO","CMR-00019","CMR-00033","CMR-00047","CMR-00428"],"f":["FRS-045"],"cul":"CUL-001","vy":{"ru":"Лу́кас, как вы себя́ чу́вствуете?","tr":"Lúkas, kak vy sibiá chústvuyiti?","es":"Lucas, ¿cómo se siente?","lex":["PROPIO","CMR-00019","CMR-00038","CMR-00047","CMR-00428"]}},
    {"p":"lucas","ru":"Пло́хо. У меня́ боли́т голова́.","tr":"Plója. U miniá balít galavá.","es":"Mal. Me duele la cabeza.","lex":["CMR-00947","CMR-00021","CMR-00005","CMR-05466","CMR-00132"],"f":["FRS-046"],"obs":"У меня́ боли́т + lo que duele, en nominativo."},
    {"p":"masha","ru":"Тебе́ ну́жен врач?","tr":"Tibié núzhin vrach?","es":"¿Necesitás un médico?","lex":["CMR-00033","CMR-00279","CMR-00653"],"obs":"Ну́жен concuerda con врач (masculino).","vy":{"ru":"Вам ну́жен врач?","tr":"Vam núzhin vrach?","es":"¿Necesita un médico?","lex":["CMR-00038","CMR-00279","CMR-00653"],"obs":"Ну́жен concuerda con врач (masculino)."}},
    {"p":"lucas","ru":"Нет, я про́сто уста́л.","tr":"Niet, ya prósta ustál.","es":"No, estoy cansado, nada más.","lex":["CMR-00107","CMR-00005","CMR-00138","CMR-02037"],"obs":"Уста́л: pasado de уста́ть, «me cansé». Una mujer dice уста́ла."}
  ] },
{ "id":"DLG-023","titulo":"En el restaurante","tituloRu":"В рестора́не","situacion":"comer","funcion":"pedir","nivel":"A1","personajes":["lucas","mozo"],
  "lineas": [
    {"p":"lucas","ru":"Меню́, пожа́луйста.","tr":"Miniú, pazháluista.","es":"La carta, por favor.","lex":["CMR-05476","CMR-01243"],"f":["FRS-025"],"cul":"CUL-005"},
    {"p":"mozo","ru":"Вот, пожа́луйста.","tr":"Vot, pazháluista.","es":"Acá tiene.","lex":["CMR-00057","CMR-01243"],"f":["FRS-025"]},
    {"p":"lucas","ru":"Я бу́ду борщ.","tr":"Ya búdu borsch.","es":"Voy a pedir borsch.","lex":["CMR-00005","CMR-00006","CMR-05412"],"f":["FRS-032"],"obs":"Я бу́ду + lo que pedís: así se pide en ruso.","cul":"CUL-005"},
    {"p":"mozo","ru":"Отли́чный вы́бор!","tr":"Atlíchnyi výbar!","es":"¡Excelente elección!","lex":["CMR-02310","CMR-00977"]}
  ] },
{ "id":"DLG-024","titulo":"Cómo llegar","tituloRu":"Как дое́хать?","situacion":"ciudad","funcion":"orientarse","nivel":"A1","personajes":["lucas","transeunta"],
  "lineas": [
    {"p":"lucas","ru":"Скажи́те, пожа́луйста, как дое́хать до це́нтра?","tr":"Skazhíti, pazháluista, kak dayéjat do tséntra?","es":"Disculpe, ¿cómo llego al centro?","lex":["CMR-00042","CMR-01243","CMR-00019","CMR-05472","CMR-00051","CMR-00394"],"f":["FRS-025","FRS-037","FRS-038"],"obs":"До + genitivo: центр → до це́нтра.","cul":"CUL-009"},
    {"p":"transeunta","ru":"На метро́ и́ли на авто́бусе.","tr":"Na mitró íli na aftóbusi.","es":"En subte o en colectivo.","lex":["CMR-00004","CMR-02395","CMR-00044","CMR-00004","CMR-01862"],"obs":"На + preposicional para el medio de transporte. Метро́ no cambia."},
    {"p":"lucas","ru":"А где ста́нция метро́?","tr":"A gdie stántsiya mitró?","es":"¿Y dónde está la estación de subte?","lex":["CMR-00010","CMR-00079","CMR-01176","CMR-02395"],"f":["FRS-036"]},
    {"p":"transeunta","ru":"Вон там, напра́во.","tr":"Von tam, napráva.","es":"Allá, a la derecha.","lex":["CMR-01856","CMR-00080","CMR-05471"]}
  ] },
{ "id":"DLG-025","titulo":"Planes para el viernes","tituloRu":"Ты свобо́ден в пя́тницу?","situacion":"ocio","funcion":"invitar","nivel":"A1","personajes":["dima","lucas"],
  "lineas": [
    {"p":"dima","ru":"Ты свобо́ден в пя́тницу?","tr":"Ty svabódin v piátnitsu?","es":"¿Estás libre el viernes?","lex":["CMR-00033","CMR-00786","CMR-00002","CMR-03611"],"obs":"Свобо́ден, masculino. A una mujer: свобо́дна."},
    {"p":"lucas","ru":"Да. А что?","tr":"Da. A shto?","es":"Sí. ¿Por?","lex":["CMR-00116","CMR-00010","CMR-00009"]},
    {"p":"dima","ru":"Пойдём в кино́?","tr":"Paidióm v kinó?","es":"¿Vamos al cine?","lex":["CMR-00153","CMR-00002","CMR-01219"],"f":["FRS-048"]},
    {"p":"lucas","ru":"Дава́й! Во ско́лько?","tr":"Davái! Vo skólka?","es":"¡Dale! ¿A qué hora?","lex":["CMR-01204","CMR-00076","CMR-00384"],"f":["FRS-049"]},
    {"p":"dima","ru":"В шесть.","tr":"V shest.","es":"A las seis.","lex":["CMR-00002","CMR-00984"],"obs":"В + la hora: в шесть, «a las seis»."},
    {"p":"lucas","ru":"Договори́лись!","tr":"Dagavarílis!","es":"¡Listo, quedamos!","lex":["CMR-02168"],"f":["FRS-050"]}
  ] },
{ "id":"DLG-026","titulo":"Un elogio","tituloRu":"Молоде́ц!","situacion":"cortesia","funcion":"felicitar","nivel":"A1","personajes":["masha","lucas"],"vy":{"masha":"olga"},
  "lineas": [
    {"p":"masha","ru":"Ты хорошо́ говори́шь по-ру́сски!","tr":"Ty jarashó gavarísh parússki!","es":"¡Hablás muy bien ruso!","lex":["CMR-00033","CMR-00190","CMR-00058","CMR-03512"],"vy":{"ru":"Вы хорошо́ говори́те по-ру́сски!","tr":"Vy jarashó gavaríti parússki!","es":"¡Habla muy bien ruso!","lex":["CMR-00038","CMR-00190","CMR-00058","CMR-03512"]}},
    {"p":"lucas","ru":"Спаси́бо, но я ещё учу́сь.","tr":"Spasíba, no ya yischó uchús.","es":"Gracias, pero todavía estoy aprendiendo.","lex":["CMR-02213","CMR-00016","CMR-00005","CMR-00045","CMR-00946"],"f":["FRS-024"]},
    {"p":"masha","ru":"Молоде́ц! Продолжа́й!","tr":"Maladiéts! Pradalzhái!","es":"¡Bien ahí! ¡Seguí así!","lex":["CMR-02877","CMR-00441"],"f":["FRS-052"],"obs":"Молоде́ц: «¡bien hecho!». Sirve para un hombre y para una mujer.","vy":{"ru":"Молоде́ц! Продолжа́йте!","tr":"Maladiéts! Pradalzháiti!","es":"¡Muy bien! ¡Siga así!","lex":["CMR-02877","CMR-00441"],"f":["FRS-052"],"obs":"Con вы, el imperativo suma -те: продолжа́йте."}},
    {"p":"lucas","ru":"Постара́юсь!","tr":"Pastaráyus!","es":"¡Lo voy a intentar!","lex":["CMR-02546"]}
  ] },
{ "id":"DLG-027","titulo":"Tiempo libre","tituloRu":"Свобо́дное вре́мя","situacion":"ocio","funcion":"gustos","nivel":"A1","personajes":["masha","lucas"],
  "lineas": [
    {"p":"masha","ru":"Что ты де́лаешь в свобо́дное вре́мя?","tr":"Shto ty diélayish v svabódnayi vriémia?","es":"¿Qué hacés en tu tiempo libre?","lex":["CMR-00009","CMR-00033","CMR-00134","CMR-00002","CMR-00786","CMR-00052"]},
    {"p":"lucas","ru":"Я чита́ю кни́ги и игра́ю в футбо́л.","tr":"Ya chitáyu knígui i igráyu v fudból.","es":"Leo libros y juego al fútbol.","lex":["CMR-00005","CMR-00332","CMR-00230","CMR-00001","CMR-00310","CMR-00002","CMR-03905"],"obs":"Игра́ть в + deporte, en acusativo."},
    {"p":"masha","ru":"А я пла́ваю.","tr":"A ya plávayu.","es":"Y yo nado.","lex":["CMR-00010","CMR-00005","CMR-03306"]},
    {"p":"lucas","ru":"Здо́рово!","tr":"Zdórava!","es":"¡Qué bueno!","lex":["CMR-03282"]}
  ] },
{ "id":"DLG-028","titulo":"Cumpleaños","tituloRu":"День рожде́ния","situacion":"ocio","funcion":"felicitar","nivel":"A2","personajes":["lucas","masha"],
  "lineas": [
    {"p":"lucas","ru":"Ма́ша, когда́ у тебя́ день рожде́ния?","tr":"Másha, kagdá u tibiá dien razhdiéniya?","es":"Masha, ¿cuándo es tu cumpleaños?","lex":["PROPIO","CMR-00055","CMR-00021","CMR-00033","CMR-00071","CMR-01230"]},
    {"p":"masha","ru":"За́втра!","tr":"Záftra!","es":"¡Mañana!","lex":["CMR-00865"]},
    {"p":"lucas","ru":"Пра́вда? Тогда́ с днём рожде́ния!","tr":"Právda? Tagdá s dniom razhdiéniya!","es":"¿En serio? ¡Entonces feliz cumpleaños!","lex":["CMR-00418","CMR-00112","CMR-00008","CMR-00071","CMR-01230"],"f":["FRS-051"],"obs":"С днём рожде́ния: с + instrumental, fórmula fija."},
    {"p":"masha","ru":"Нет, нет, ещё ра́но! Поздра́вишь за́втра.","tr":"Niet, niet, yischó rána! Pazdrávish záftra.","es":"¡No, no, todavía es temprano! Me saludás mañana.","lex":["CMR-00107","CMR-00107","CMR-00045","CMR-00817","CMR-05117","CMR-00865"],"cul":"CUL-006"}
  ] },
{ "id":"DLG-029","titulo":"En el hotel","tituloRu":"В гости́нице","situacion":"viajes","funcion":"pedir","nivel":"A1","personajes":["lucas","recepcion"],
  "lineas": [
    {"p":"lucas","ru":"Здра́вствуйте! У вас есть свобо́дные номера́?","tr":"Zdrástvuiti! U vas yest svabódnyyi namirá?","es":"¡Buenas! ¿Tienen habitaciones libres?","lex":["CMR-05479","CMR-00021","CMR-00038","CMR-00006","CMR-00786","CMR-00548"],"f":["FRS-002"],"obs":"Но́мер en un hotel es la habitación. Plural: номера́."},
    {"p":"recepcion","ru":"Да. На ско́лько ноче́й?","tr":"Da. Na skólka nachéi?","es":"Sí. ¿Para cuántas noches?","lex":["CMR-00116","CMR-00004","CMR-00384","CMR-00236"],"obs":"Ско́лько + genitivo plural: ночь → ноче́й."},
    {"p":"lucas","ru":"На три но́чи.","tr":"Na tri nóchi.","es":"Para tres noches.","lex":["CMR-00004","CMR-00150","CMR-00236"]},
    {"p":"recepcion","ru":"Хорошо́. Ваш па́спорт, пожа́луйста.","tr":"Jarashó. Vash páspart, pazháluista.","es":"Bien. Su pasaporte, por favor.","lex":["CMR-00190","CMR-00166","CMR-02355","CMR-01243"],"f":["FRS-025"]},
    {"p":"recepcion","ru":"Вот ваш ключ.","tr":"Vot vash kliuch.","es":"Acá tiene su llave.","lex":["CMR-00057","CMR-00166","CMR-01584"]}
  ] },
{ "id":"DLG-030","titulo":"Una emergencia","tituloRu":"Ско́рая по́мощь","situacion":"salud","funcion":"ayuda","nivel":"A1","personajes":["lucas","transeunta"],
  "lineas": [
    {"p":"lucas","ru":"Помоги́те!","tr":"Pamaguíti!","es":"¡Ayuda!","lex":["CMR-00497"],"f":["FRS-040"]},
    {"p":"transeunta","ru":"Что случи́лось?","tr":"Shto sluchílas?","es":"¿Qué pasó?","lex":["CMR-00009","CMR-00638"],"f":["FRS-041"]},
    {"p":"lucas","ru":"Челове́ку пло́хо! Вы́зовите ско́рую!","tr":"Chilaviéku plója! Výzaviti skóruyu!","es":"¡Alguien se siente mal! ¡Llame a una ambulancia!","lex":["CMR-00039","CMR-00947","CMR-00750","CMR-00492"],"f":["FRS-042"],"obs":"Ско́рая (по́мощь) es la ambulancia; se declina como adjetivo: вы́звать ско́рую.","cul":"CUL-008"},
    {"p":"transeunta","ru":"Уже́ звоню́!","tr":"Uzhé zvaniú!","es":"¡Ya llamo!","lex":["CMR-00050","CMR-01043"]}
  ] }
];

function dialogoById(id) { return DIALOGOS.find(d => d.id === id) || null; }
if (typeof window !== "undefined") window.dialogoById = dialogoById;
