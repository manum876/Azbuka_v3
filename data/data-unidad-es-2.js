/* ============================================================
   DATA-UNIDAD-ES-2.JS — Abecé · Урок 2: Кто я и кто мы
   (Quién soy y quiénes somos). Borrador, 28/10/2026.
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U2):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-1.js (ver su cabecera):
     · ejemplos { es, ru, por }: es = la frase en español, ru = la traducción;
     · tablas [{ titulo, encabezados, filas }]: celdas { es, ru? } (AzTablaGrupos);
     · vocab: palabras (se pasan a IDs con es2Id).
   Vocabulario aprobado por Manu el 28/10/2026 y ampliado el 02/11/2026
   (unas 190 palabras, para quedar a la par de la U2 de Azbuka).
   ============================================================ */

const ES2_PRON = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const es2Tabla = (formas) => ES2_PRON.map(([p, r], i) => [{ es: p, ru: r }, { es: formas[i] }]);   /* filas de una conjugación: [pronombre, forma] */

const UNIDAD_ES_2 = {
  id: 2,
  titulo: "Кто я и кто мы",
  tituloEs: "Quién soy y quiénes somos",
  objetivo: "Рассказать о себе и спросить о другом: имя, откуда ты, сколько тебе лет, кем работаешь, какие языки знаешь; представить другого человека и свою семью.",
  tiempo: "3–4 недели ежедневной практики (примерно 15–20 часов)",
  modulos: [
    {
      id: "es2m1", n: 1, tipo: "leccion",
      titulo: "Я, ты, он…",
      resumen: "Личные местоимения, tú и usted, vosotros и ustedes.",
      intro: "Личные местоимения в испанском устроены почти как в русском, но форм больше: в испанском есть отдельные формы для женщин во множественном числе и два вида вежливого «вы». А ещё местоимение-подлежащее часто **опускают**: лицо и так понятно по форме глагола.",
      tablas: [{ titulo: "Местоимения", encabezados: ["Единственное", "Множественное"], filas: [
        [{ es: "yo", ru: "я" }, { es: "nosotros / nosotras", ru: "мы" }],
        [{ es: "tú", ru: "ты" }, { es: "vosotros / vosotras", ru: "вы (неформально, нескольким)" }],
        [{ es: "él", ru: "он" }, { es: "ellos", ru: "они" }],
        [{ es: "ella", ru: "она" }, { es: "ellas", ru: "они (только женщины)" }],
        [{ es: "usted", ru: "вы (вежливо, одному)" }, { es: "ustedes", ru: "вы (вежливо, нескольким)" }]] }],
      secciones: [
        {
          id: "es2-nosotras",
          titulo: "Nosotros и nosotras",
          texto: "Во множественном числе у местоимений есть женская форма: **nosotras** — «мы» (только женщины), **vosotras**, **ellas**. Если в группе есть хотя бы один мужчина — мужская форма: Ana y Javier → **ellos**.",
          ejemplos: [
            { es: "Ana y Lucía: ellas.", ru: "Аня и Лусия: они.", por: "Только женщины — **ellas**." },
            { es: "Ana y Javier: ellos.", ru: "Аня и Хавьер: они.", por: "Есть мужчина — **ellos**." }
          ],
          chequeo: [
            { pide: "Аня говорит о себе и Лусии: «мы». Какое слово?", opciones: ["nosotras", "nosotros"], ok: "nosotras", por: "Только женщины — **nosotras**." }
          ]
        },
        {
          id: "es2-cuatro-vy",
          titulo: "Четыре формы обращения",
          texto: "В русском два слова, в испанском — четыре:\n· **tú** — «ты», одному человеку;\n· **usted** — вежливое «вы», одному человеку;\n· **vosotros** — «вы» нескольким людям, с которыми ты на «ты» (друзьям, семье);\n· **ustedes** — вежливое «вы» нескольким людям.\nВ Латинской Америке **vosotros** не используют: там **ustedes** — любое «вы» нескольким людям.",
          comparacion: "Русское «вы» делится на три испанских: вежливое одному (**usted**), неформальное нескольким (**vosotros**) и вежливое нескольким (**ustedes**).",
          ojo: "**Vosotros** говорят только в Испании. В Латинской Америке всем говорят **ustedes**. Приложение примет и то, и другое, но учит испанский вариант."
        },
        {
          id: "es2-usted-verbo",
          titulo: "Usted и форма 3-го лица",
          texto: "С **usted** глагол стоит в той же форме, что с **él** и **ella**: **usted es** — «вы (есть)», как **él es**. С **ustedes** — как с **ellos**: **ustedes son**.",
          ejemplos: [
            { es: "¿Usted es Javier?", ru: "Вы Хавьер?", por: "**es** — как с él." },
            { es: "¿Ustedes son de Rusia?", ru: "Вы из России?", por: "**son** — как с ellos." }
          ]
        },
        {
          id: "es2-sin-sujeto",
          titulo: "Местоимение можно опустить",
          texto: "По форме глагола и так понятно, кто говорит: **soy** — это только «я», **eres** — только «ты». Поэтому испанцы обычно говорят **Soy Ana**, а не «Yo soy Ana». Местоимение добавляют, чтобы подчеркнуть или противопоставить: **Yo soy rusa, ¿y tú?**",
          ejemplos: [
            { es: "Soy Ana. Soy de Moscú.", ru: "Я Аня. Я из Москвы.", por: "Без **yo** — это обычно." },
            { es: "Yo soy de Moscú, y tú, ¿de dónde eres?", ru: "Я из Москвы, а ты откуда?", por: "**yo** и **tú** — чтобы противопоставить." }
          ],
          errores: [
            { mal: "Yo soy Ana. Yo soy de Moscú. Yo soy estudiante.", bien: "Soy Ana. Soy de Moscú. Soy estudiante.", por: "Повторять **yo** в каждой фразе — по-русски естественно, по-испански звучит тяжело." }
          ]
        }
      ],
      vocab: ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "ustedes"]
    },
    {
      id: "es2m2", n: 2, tipo: "leccion",
      titulo: "Soy…",
      resumen: "Глагол ser: кто ты, откуда, кем работаешь.",
      intro: "**Ser** — «быть». В русском в настоящем времени «быть» обычно пропускают («я студент»), а в испанском в таких фразах глагол обязателен: **soy estudiante**. Это первый глагол, который нужно знать во всех формах.",
      tablas: [{ titulo: "Ser — настоящее время", encabezados: ["Кто", "Форма"], filas: es2Tabla(["soy", "eres", "es", "somos", "sois", "son"]) }],
      secciones: [
        {
          id: "es2-ser-siempre",
          titulo: "Глагол нельзя пропустить",
          texto: "«Я Аня», «она врач», «мы из России» — в испанском во всех этих фразах есть глагол: **Soy Ana**, **Es médica**, **Somos de Rusia**.",
          errores: [
            { mal: "Yo Ana.", bien: "Soy Ana.", por: "Без глагола фраза неполная." },
            { mal: "Ella médica.", bien: "Es médica.", por: "Нужен **es**." }
          ]
        },
        {
          id: "es2-ser-usos",
          titulo: "Для чего ser",
          texto: "С **ser** говорят, **кто** ты и откуда:\n· имя: **Soy Ana**;\n· профессия: **Soy profesor**;\n· национальность: **Soy rusa**;\n· откуда: **Soy de Moscú** (**de** — «из»).",
          ejemplos: [
            { es: "Javier es profesor.", ru: "Хавьер — преподаватель." },
            { es: "Somos de Rusia.", ru: "Мы из России.", por: "**de** + страна или город — откуда." }
          ]
        },
        {
          id: "es2-profesion",
          titulo: "Профессия — без артикля",
          texto: "Когда говорят о профессии после **ser**, артикль не нужен: **Soy médico**, **Es profesora**. Это удобно: как в русском, «я врач».",
          ojo: "Профессия меняется по роду: **profesor** — **profesora**, **médico** — **médica**, **camarero** — **camarera**. Некоторые одинаковые для обоих: **estudiante**, **periodista**.",
          chequeo: [
            { pide: "Лусия — учительница. Как сказать?", opciones: ["Es profesora.", "Es una profesor.", "Es profesor."], ok: "Es profesora.", por: "Без артикля и в женском роде: **es profesora**." }
          ]
        },
        {
          id: "es2-sois",
          titulo: "Sois — для vosotros",
          texto: "Форма **sois** нужна, когда обращаешься к нескольким друзьям: **¿Sois de Barcelona?** — «Вы из Барселоны?». Вежливо нескольким — **¿Son ustedes de Barcelona?**",
          ojo: "**sois** пишется без знака ударения: это один слог."
        },
        {
          id: "es2-jubilado",
          titulo: "На пенсии или без работы",
          texto: "Кто на пенсии, говорит **Estoy jubilado** (**jubilada**), кто без работы — **Estoy parado** (**parada**). Так говорят в Испании; в Латинской Америке **parado** обычно значит «стоящий». Здесь не **ser**, а другой глагол — **estar**: его ты выучишь в следующем уроке, а пока запомни эти фразы целиком."
        }
      ],
      vocab: ["ser", "profesor", "estudiante", "médico", "ingeniero", "abogado", "camarero", "enfermero", "programador", "arquitecto", "periodista", "cocinero", "traductor",
        "policía", "dependiente", "empresario", "funcionario", "actor", "músico", "conductor", "secretario", "peluquero", "jubilado", "parado", "profesión", "trabajo"]
    },
    {
      id: "es2m3", n: 3, tipo: "leccion",
      titulo: "¿De dónde eres?",
      resumen: "Страны, национальности и языки.",
      intro: "Откуда ты, какой ты национальности и на каких языках говоришь. Слов здесь много, но правил всего три: **de** + страна, национальность меняется по роду, а название языка обычно совпадает с национальностью в мужском роде (**ruso**, **español**).",
      tablas: [
        { titulo: "Страны, национальности и языки", encabezados: ["Страна", "Национальность", "Язык"], filas: [
          [{ es: "España", ru: "Испания" }, { es: "español / española" }, { es: "español" }],
          [{ es: "Rusia", ru: "Россия" }, { es: "ruso / rusa" }, { es: "ruso" }],
          [{ es: "Ucrania", ru: "Украина" }, { es: "ucraniano / ucraniana" }, { es: "ucraniano" }],
          [{ es: "Bielorrusia", ru: "Беларусь" }, { es: "bielorruso / bielorrusa" }, { es: "bielorruso" }],
          [{ es: "Kazajistán", ru: "Казахстан" }, { es: "kazajo / kazaja" }, { es: "kazajo" }],
          [{ es: "Georgia", ru: "Грузия" }, { es: "georgiano / georgiana" }, { es: "georgiano" }],
          [{ es: "Francia", ru: "Франция" }, { es: "francés / francesa" }, { es: "francés" }],
          [{ es: "Alemania", ru: "Германия" }, { es: "alemán / alemana" }, { es: "alemán" }],
          [{ es: "Italia", ru: "Италия" }, { es: "italiano / italiana" }, { es: "italiano" }],
          [{ es: "Inglaterra", ru: "Англия" }, { es: "inglés / inglesa" }, { es: "inglés" }],
          [{ es: "Irlanda", ru: "Ирландия" }, { es: "irlandés / irlandesa" }, { es: "inglés" }],
          [{ es: "Portugal", ru: "Португалия" }, { es: "portugués / portuguesa" }, { es: "portugués" }],
          [{ es: "Polonia", ru: "Польша" }, { es: "polaco / polaca" }, { es: "polaco" }],
          [{ es: "Grecia", ru: "Греция" }, { es: "griego / griega" }, { es: "griego" }],
          [{ es: "Suecia", ru: "Швеция" }, { es: "sueco / sueca" }, { es: "sueco" }],
          [{ es: "Turquía", ru: "Турция" }, { es: "turco / turca" }, { es: "turco" }],
          [{ es: "China", ru: "Китай" }, { es: "chino / china" }, { es: "chino" }],
          [{ es: "Japón", ru: "Япония" }, { es: "japonés / japonesa" }, { es: "japonés" }],
          [{ es: "Estados Unidos", ru: "США" }, { es: "estadounidense", ru: "или americano / americana" }, { es: "inglés" }],
          [{ es: "Canadá", ru: "Канада" }, { es: "canadiense" }, { es: "inglés, francés" }],
          [{ es: "México", ru: "Мексика" }, { es: "mexicano / mexicana" }, { es: "español" }],
          [{ es: "Cuba", ru: "Куба" }, { es: "cubano / cubana" }, { es: "español" }],
          [{ es: "Colombia", ru: "Колумбия" }, { es: "colombiano / colombiana" }, { es: "español" }],
          [{ es: "Perú", ru: "Перу" }, { es: "peruano / peruana" }, { es: "español" }],
          [{ es: "Venezuela", ru: "Венесуэла" }, { es: "venezolano / venezolana" }, { es: "español" }],
          [{ es: "Argentina", ru: "Аргентина" }, { es: "argentino / argentina" }, { es: "español" }],
          [{ es: "Uruguay", ru: "Уругвай" }, { es: "uruguayo / uruguaya" }, { es: "español" }],
          [{ es: "Brasil", ru: "Бразилия" }, { es: "brasileño / brasileña" }, { es: "portugués" }]] },
        { titulo: "Города", encabezados: ["Город", "Город"], filas: [
          [{ es: "Madrid", ru: "Мадрид" }, { es: "Barcelona", ru: "Барселона" }],
          [{ es: "Moscú", ru: "Москва" }, { es: "Kiev", ru: "Киев" }],
          [{ es: "Minsk", ru: "Минск" }, { es: "Londres", ru: "Лондон" }],
          [{ es: "París", ru: "Париж" }, { es: "Berlín", ru: "Берлин" }],
          [{ es: "Roma", ru: "Рим" }, { es: "Lisboa", ru: "Лиссабон" }]] }
      ],
      secciones: [
        {
          id: "es2-ser-de",
          titulo: "Soy de… — откуда ты",
          texto: "«Я из России» — **Soy de Rusia**: глагол **ser** + **de** + страна или город. Вопрос: **¿De dónde eres?** (на usted — **¿De dónde es usted?**).",
          ejemplos: [
            { es: "— ¿De dónde eres? — Soy de Rusia, de Moscú.", ru: "— Откуда ты? — Из России, из Москвы." },
            { es: "Javier es de Madrid.", ru: "Хавьер из Мадрида." }
          ],
          ojo: "Страны и города пишутся с заглавной: **Rusia**, **Madrid**. Национальности и языки — со строчной: **ruso**, **español**."
        },
        {
          id: "es2-nacionalidad-genero",
          titulo: "Ruso, rusa: национальность по роду",
          texto: "Национальность выражается прилагательным, и оно согласуется по роду:\n· на **-o** → **-a**: ruso → **rusa**, italiano → **italiana**;\n· на согласную → добавь **-a**: español → **española**, alemán → **alemana**, francés → **francesa**;\n· на **-e** и на **-a** — одинаково для обоих: **canadiense**, **estadounidense**.",
          ojo: "**francés → francesa**, **alemán → alemana**, **inglés → inglesa**: в женском роде знак ударения пропадает — ударение теперь падает по правилу (U1, модуль 8).",
          errores: [
            { mal: "Ana es ruso.", bien: "Ana es rusa.", por: "Аня — женщина: **rusa**." },
            { mal: "Lucía es españolа.", bien: "Lucía es española.", por: "Последняя буква — латинская **a**, а не русская «а»: на русской клавиатуре легко перепутать." }
          ],
          chequeo: [
            { pide: "Марта из Аргентины. Марта — …", opciones: ["argentina", "argentino"], ok: "argentina", por: "Женщина — **argentina**." },
            { pide: "Пьер из Франции. Пьер — …", opciones: ["francés", "francesa", "franceso"], ok: "francés", por: "Мужчина — **francés**, женщина — **francesa**." }
          ]
        },
        {
          id: "es2-idiomas",
          titulo: "Hablo ruso: языки",
          texto: "Язык — это национальность в мужском роде: **ruso**, **español**, **inglés**. После **hablar** он стоит **без предлога и без артикля**: **Hablo ruso** — «я говорю по-русски». Пока нам хватит двух форм: **hablo** («я говорю») и **hablas** («ты говоришь»).",
          ejemplos: [
            { es: "Hablo ruso, inglés y un poco de español.", ru: "Я говорю по-русски, по-английски и немного по-испански." },
            { es: "¿Hablas catalán?", ru: "Ты говоришь по-каталански?", por: "В Барселоне говорят на двух языках: **español** и **catalán**." }
          ],
          errores: [
            { mal: "Hablo en ruso.", bien: "Hablo ruso.", por: "«Говорить по-русски» — без **en**. «En ruso» — «на русском»: **¿Cómo se dice en ruso?**" }
          ]
        },
        {
          id: "es2-vivo-en",
          titulo: "Vivo en… — где ты живёшь",
          texto: "«Я живу в Барселоне» — **Vivo en Barcelona**: глагол **vivir** + **en** + город. Вопрос: **¿Dónde vives?** Глагол целиком — в уроке 4; пока — **vivo** и **vives**.",
          comparacion: "**de** — откуда (из России), **en** — где (в Барселоне). Как русские «из» и «в»."
        }
      ],
      frases: ["FRE-033", "FRE-034", "FRE-037", "FRE-038", "FRE-039", "FRE-040"],
      vocab: ["España", "Rusia", "Ucrania", "Bielorrusia", "Kazajistán", "Georgia", "Francia", "Alemania", "Italia", "Inglaterra", "Irlanda", "Portugal", "Polonia", "Grecia", "Suecia", "Turquía",
        "China", "Japón", "Estados Unidos", "Canadá", "México", "Cuba", "Colombia", "Perú", "Venezuela", "Argentina", "Uruguay", "Brasil",
        "español", "ruso", "ucraniano", "bielorruso", "kazajo", "georgiano", "francés", "alemán", "italiano", "inglés", "irlandés", "portugués", "polaco", "griego", "sueco", "turco",
        "chino", "japonés", "estadounidense", "americano", "canadiense", "mexicano", "cubano", "colombiano", "peruano", "venezolano", "argentino", "uruguayo", "brasileño", "catalán",
        "Madrid", "Barcelona", "Moscú", "Kiev", "Minsk", "Londres", "París", "Berlín", "Roma", "Lisboa",
        "hablar", "vivir", "país", "ciudad", "idioma", "nacionalidad", "poco"],
      dialogos: ["DLE-005"]
    },
    {
      id: "es2m4", n: 4, tipo: "leccion",
      titulo: "Me llamo, tengo…",
      resumen: "Llamarse и tener во всех лицах; сколько тебе лет.",
      intro: "Два глагола, без которых не обойтись, когда знакомишься: **llamarse** («называться», как тебя зовут) и **tener** («иметь»). С **tener** говорят и о возрасте — и вот здесь русскоговорящие ошибаются чаще всего.",
      tablas: [
        { titulo: "Llamarse — настоящее время", encabezados: ["Кто", "Форма"], filas: es2Tabla(["me llamo", "te llamas", "se llama", "nos llamamos", "os llamáis", "se llaman"]) },
        { titulo: "Tener — настоящее время", encabezados: ["Кто", "Форма"], filas: es2Tabla(["tengo", "tienes", "tiene", "tenemos", "tenéis", "tienen"]) }
      ],
      secciones: [
        {
          id: "es2-llamarse",
          titulo: "Me llamo, se llama",
          texto: "**Llamarse** — глагол с местоимением **se**, как русский «называться» с «-ся». Местоимение меняется по лицу и стоит **перед** глаголом: **me llamo**, **te llamas**, **se llama**.",
          ejemplos: [
            { es: "¿Cómo se llama tu hermana?", ru: "Как зовут твою сестру?" },
            { es: "Nos llamamos Ana y Lucía.", ru: "Нас зовут Аня и Лусия." }
          ],
          errores: [
            { mal: "Mi nombre es Ana.", bien: "Me llamo Ana.", por: "«Mi nombre es» — правильно, но звучит официально, как в анкете. В разговоре говорят **me llamo**." }
          ]
        },
        {
          id: "es2-edad",
          titulo: "Сколько тебе лет: tener",
          texto: "По-русски «мне 25 лет», а по-испански — дословно «я **имею** 25 лет»: **Tengo veinticinco años**. Вопрос: **¿Cuántos años tienes?** — «сколько тебе лет?» (дословно «сколько лет ты имеешь?»).",
          destacado: "Возраст — всегда с **tener**: tengo, tienes, tiene… + число + **años**.",
          errores: [
            { mal: "Soy 25 años.", bien: "Tengo 25 años.", por: "Не **ser**, а **tener**." },
            { mal: "Me 25.", bien: "Tengo 25 años.", por: "Калька с «мне 25». Нужен глагол **tener**." }
          ],
          chequeo: [
            { pide: "«Ему 30 лет»", opciones: ["Tiene treinta años.", "Es treinta años.", "Le treinta años."], ok: "Tiene treinta años.", por: "Возраст — с **tener**: **tiene**." }
          ]
        },
        {
          id: "es2-tener",
          titulo: "Tener — «у меня есть»",
          texto: "**Tener** — это и русское «у меня есть»: **Tengo un hermano** — «у меня есть брат». Отдельной конструкции, как «у меня есть», в испанском нет: говорят **tengo** — «имею».",
          ejemplos: [
            { es: "Tengo dos hermanos.", ru: "У меня два брата (или брат и сестра)." },
            { es: "¿Tienes hijos?", ru: "У тебя есть дети?" }
          ],
          ojo: "**tener** — неправильный глагол: **tengo** (с **g**), **tienes** (с **ie**). Позже ты встретишь и другие глаголы с таким же изменением корня."
        }
      ],
      vocab: ["llamarse", "tener", "año", "edad", "nos", "os"]
    },
    {
      id: "es2m5", n: 5, tipo: "leccion",
      titulo: "Числа до 100 и данные",
      resumen: "Возраст, телефон, электронная почта.",
      intro: "Числа до ста нужны для возраста, телефона и адреса. Правило простое: до 29 — одно слово, а начиная с 31 — через **y**: **treinta y uno**.",
      tablas: [
        { titulo: "Двадцать с чем-то", encabezados: ["", ""], filas: [
          [{ es: "veintiuno", ru: "21" }, { es: "veintidós", ru: "22" }], [{ es: "veintitrés", ru: "23" }, { es: "veinticuatro", ru: "24" }],
          [{ es: "veinticinco", ru: "25" }, { es: "veintiséis", ru: "26" }], [{ es: "veintisiete", ru: "27" }, { es: "veintiocho", ru: "28" }],
          [{ es: "veintinueve", ru: "29" }, null]] },
        { titulo: "Десятки", encabezados: ["", ""], filas: [
          [{ es: "treinta", ru: "30" }, { es: "cuarenta", ru: "40" }], [{ es: "cincuenta", ru: "50" }, { es: "sesenta", ru: "60" }],
          [{ es: "setenta", ru: "70" }, { es: "ochenta", ru: "80" }], [{ es: "noventa", ru: "90" }, { es: "cien", ru: "100" }]] }
      ],
      secciones: [
        {
          id: "es2-veinti",
          titulo: "От 21 до 29 — одним словом",
          texto: "Числа от 21 до 29 пишутся слитно: **veinte** превращается в **veinti-**, и к нему добавляется число: **veintiuno**, **veintidós**, **veintitrés**… Обрати внимание на знак ударения: **veintidós**, **veintitrés**, **veintiséis** — ударение на последнем слоге.",
          ojo: "Перед существительным **veintiuno** → **veintiún**: **veintiún años**."
        },
        {
          id: "es2-treinta-y",
          titulo: "После 30 — через y",
          texto: "С 31 числа пишутся тремя словами: **treinta y uno** (31), **cuarenta y cinco** (45), **noventa y nueve** (99). 100 — **cien**.",
          errores: [
            { mal: "treintaiuno", bien: "treinta y uno", por: "После 30 — отдельными словами." },
            { mal: "ciento", bien: "cien", por: "Ровно 100 — **cien**. «Ciento» — только в 101, 102… (это урок 5)." }
          ],
          chequeo: [
            { pide: "Как пишется 47?", opciones: ["cuarenta y siete", "cuarentaisiete", "cuarenta siete"], ok: "cuarenta y siete", por: "После 30 — через **y**, отдельными словами." }
          ]
        },
        {
          id: "es2-telefono",
          titulo: "Номер телефона",
          texto: "В Испании номер — девять цифр. Его называют по одной цифре или группами: **seis, cuatro, uno — treinta y dos — cincuenta — noventa y ocho** (641 32 50 98). Вопрос: **¿Cuál es tu número de teléfono?**",
          ojo: "Не «¿qué es tu número?», а **¿cuál es…?**: «какой (из всех)»."
        },
        {
          id: "es2-correo",
          titulo: "Электронная почта",
          texto: "**@** — **arroba**, точка — **punto**, дефис — **guion**. **ana.petrova@gmail.com** читается: **ana punto petrova arroba gmail punto com**. Вопрос: **¿Cuál es tu correo?**"
        }
      ],
      frases: ["FRE-035", "FRE-036", "FRE-044", "FRE-045"],
      vocab: ["veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve",
        "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa", "cien", "número", "teléfono", "correo", "arroba", "punto", "dirección", "guion"],
      dialogos: ["DLE-006", "DLE-007"]
    },
    {
      id: "es2m6", n: 6, tipo: "leccion",
      titulo: "El, la, un, una",
      resumen: "Род и число, артикли, согласование.",
      intro: "В русском артиклей нет, поэтому их так легко забыть. В испанском перед существительным очень часто стоит **артикль**. Он показывает род и число, а иногда — знакомо ли это уже собеседнику. Здесь — первое знакомство; к артиклям мы будем возвращаться весь курс.",
      tablas: [{ titulo: "Артикли", encabezados: ["Мужской род", "Женский род"], filas: [
        [{ es: "el libro", ru: "книга (та самая)" }, { es: "la casa", ru: "дом (тот самый)" }],
        [{ es: "los libros", ru: "книги (те самые)" }, { es: "las casas", ru: "дома (те самые)" }],
        [{ es: "un libro", ru: "(какая-то) книга" }, { es: "una casa", ru: "(какой-то) дом" }],
        [{ es: "unos libros", ru: "несколько книг" }, { es: "unas casas", ru: "несколько домов" }]] }],
      secciones: [
        {
          id: "es2-genero",
          titulo: "Мужской или женский",
          texto: "У существительных в испанском только два рода: мужской и женский (среднего нет). Обычно на **-o** — мужской (**el libro**), на **-a** — женский (**la casa**). Но есть исключения: **el día**, **la mano**. А слова на другие буквы нужно запоминать вместе с артиклем: **el hombre**, **la noche**.",
          truco: "Учи слово сразу с артиклем: не «casa», а **la casa**. Так род запомнится сам.",
          comparacion: "Род в испанском часто не совпадает с русским: **la leche** («молоко», среднего рода), **el coche** («машина», женского рода)."
        },
        {
          id: "es2-el-un",
          titulo: "El или un",
          texto: "**un / una** — обычно когда предмет упоминается впервые, «какой-то, один»: **Tengo un hermano**. **el / la** — когда понятно, о чём речь, или он один такой: **El hermano de Ana es médico**.",
          ejemplos: [
            { es: "Tengo un hermano. El hermano se llama Iván.", ru: "У меня есть брат. Брата зовут Иван.", por: "Сначала **un** (новое), потом **el** (уже знаем, о ком речь)." }
          ],
          errores: [
            { mal: "Es libro.", bien: "Es un libro.", por: "Без артикля фраза звучит неполной: нужен **un**." }
          ]
        },
        {
          id: "es2-plural",
          titulo: "Множественное число",
          texto: "На гласную — добавь **-s**: libro → **libros**, casa → **casas**. На согласную — **-es**: profesor → **profesores**, ciudad → **ciudades**. Артикль тоже меняется: **los**, **las**, **unos**, **unas**."
        },
        {
          id: "es2-concordancia",
          titulo: "Всё согласуется",
          texto: "Артикль, существительное и прилагательное стоят в одном роде и числе: **la profesora española**, **los profesores españoles**. Если в группе есть хотя бы один мужчина — мужской род: **Ana y Javier son españoles**.",
          errores: [
            { mal: "la profesor", bien: "la profesora", por: "Женщина-преподаватель — **profesora**: артикль и слово в одном роде." },
            { mal: "Ana es español.", bien: "Ana es española.", por: "Ана — женщина: **española**." }
          ],
          chequeo: [
            { pide: "Аня и Лусия — …", opciones: ["españolas", "españoles", "española"], ok: "españolas", por: "Две женщины — женский род, множественное число: **españolas**." }
          ]
        }
      ],
      vocab: ["el", "un", "persona", "hombre", "mujer", "chico", "amigo", "compañero"]
    },
    {
      id: "es2m7", n: 7, tipo: "leccion",
      titulo: "Семья",
      resumen: "Родные, и как представить другого человека.",
      intro: "Названия родных почти все строятся по одной схеме: мужчина на **-o**, женщина на **-a** (**hermano — hermana**). А ещё ты научишься представлять другого человека: **Este es mi hermano**.",
      tablas: [{ titulo: "Семья", encabezados: ["Мужчина", "Женщина"], filas: [
        [{ es: "el padre", ru: "отец" }, { es: "la madre", ru: "мать" }],
        [{ es: "el hermano", ru: "брат" }, { es: "la hermana", ru: "сестра" }],
        [{ es: "el hijo", ru: "сын" }, { es: "la hija", ru: "дочь" }],
        [{ es: "el abuelo", ru: "дедушка" }, { es: "la abuela", ru: "бабушка" }],
        [{ es: "el nieto", ru: "внук" }, { es: "la nieta", ru: "внучка" }],
        [{ es: "el tío", ru: "дядя" }, { es: "la tía", ru: "тётя" }],
        [{ es: "el primo", ru: "двоюродный брат" }, { es: "la prima", ru: "двоюродная сестра" }],
        [{ es: "el sobrino", ru: "племянник" }, { es: "la sobrina", ru: "племянница" }],
        [{ es: "el marido", ru: "муж" }, { es: "la mujer", ru: "жена" }],
        [{ es: "el novio", ru: "парень, жених" }, { es: "la novia", ru: "девушка, невеста" }]] }],
      secciones: [
        {
          id: "es2-padres",
          titulo: "Padres — это «родители»",
          texto: "Мужской род множественного числа называет и смешанную группу: **los padres** — «отец и мать», **los hermanos** — «братья и сёстры», **los hijos** — «дети», **los abuelos** — «бабушка и дедушка».",
          ejemplos: [
            { es: "¿Tienes hermanos?", ru: "У тебя есть братья или сёстры?" },
            { es: "Tengo dos hijos: un chico y una chica.", ru: "У меня двое детей: мальчик и девочка." }
          ],
          ojo: "**la mujer** — и «женщина», и «жена». Также говорят **el esposo / la esposa** («супруг, супруга»), а о паре без брака — **mi pareja** («мой партнёр, моя партнёрша»)."
        },
        {
          id: "es2-este-es",
          titulo: "Este es…, esta es… — как представить",
          texto: "Чтобы представить человека, говорят **Este es…** (о мужчине) и **Esta es…** (о женщине): **Este es Pablo**, **Esta es Marta**. О нескольких — **Estos son…**, **Estas son…**",
          ejemplos: [
            { es: "Este es mi hermano Iván.", ru: "Это мой брат Иван." },
            { es: "Esta es mi madre.", ru: "Это моя мама." }
          ],
          comparacion: "В русском одно «это» для всех. В испанском «это» меняется по роду человека, которого представляешь.",
          errores: [
            { mal: "Este es mi madre.", bien: "Esta es mi madre.", por: "Мама — женщина: **esta**." }
          ]
        },
        {
          id: "es2-mi-tu",
          titulo: "Mi, tu, su — «мой», «твой», «его»",
          texto: "Пока как готовые слова: **mi** — мой/моя, **tu** — твой/твоя, **su** — его, её, ваш (на usted). Во множественном числе — **mis**, **tus**, **sus**: **mis padres**. Подробно — в следующем уроке.",
          ojo: "**tu** («твой») — без знака ударения, **tú** («ты») — со знаком."
        },
        {
          id: "es2-casado",
          titulo: "Женат, замужем",
          texto: "У этих слов есть мужская и женская форма: **casado / casada** — «женат / замужем», **soltero / soltera** — «холост / не замужем», **divorciado / divorciada** — «разведён / разведена». Обычно говорят **Estoy casado** — снова глагол **estar**, пока как готовая фраза."
        }
      ],
      frases: ["FRE-041", "FRE-042", "FRE-043", "FRE-046"],
      vocab: ["familia", "padre", "madre", "hermano", "hijo", "abuelo", "nieto", "tío", "primo", "sobrino", "marido", "mujer", "esposo", "novio", "pareja",
        "casado", "soltero", "divorciado"],
      dialogos: ["DLE-008", "DLE-009"]
    },
    {
      id: "es2m8", n: 8, tipo: "leccion",
      titulo: "Вопросы",
      resumen: "Qué, quién, cómo, de dónde, cuántos.",
      intro: "Вопросительные слова пишутся **со знаком ударения**, а вопрос открывается знаком **¿**. Обычно вопрос начинается с вопросительного слова, а за ним идёт глагол.",
      tablas: [{ titulo: "Вопросительные слова", encabezados: ["Вопрос", "Вопрос"], filas: [
        [{ es: "¿Qué?", ru: "что? какой?" }, { es: "¿Quién?", ru: "кто?" }],
        [{ es: "¿Cómo?", ru: "как?" }, { es: "¿Dónde?", ru: "где?" }],
        [{ es: "¿De dónde?", ru: "откуда?" }, { es: "¿Cuántos? ¿Cuántas?", ru: "сколько?" }],
        [{ es: "¿Cuál?", ru: "какой (из)? который?" }, null]] }],
      secciones: [
        {
          id: "es2-preguntas",
          titulo: "Как строится вопрос",
          texto: "Вопросительное слово → глагол → (подлежащее): **¿De dónde eres?**, **¿Cómo se llama tu hermano?**, **¿Quién es Javier?**. Вопрос без вопросительного слова — как утверждение, но с вопросительной интонацией: **¿Eres rusa?**",
          ejemplos: [
            { es: "¿Quién es?", ru: "Кто это?" },
            { es: "¿Cuántos años tienes?", ru: "Сколько тебе лет?", por: "**cuántos** согласуется с **años** (мужской род, мн. ч.)." },
            { es: "¿Cuántas personas hay?", ru: "Сколько человек?", por: "**personas** — женский род, поэтому **cuántas**." }
          ]
        },
        {
          id: "es2-de-donde",
          titulo: "Предлог — в начале",
          texto: "Если в вопросе есть предлог, он стоит **перед** вопросительным словом: **¿De dónde eres?** — «откуда ты?» (дословно «из где»). Ответ тоже с **de**: **Soy de Rusia**.",
          errores: [
            { mal: "¿Dónde eres de?", bien: "¿De dónde eres?", por: "Предлог не уходит в конец, как в английском: **de** — в начале." }
          ]
        },
        {
          id: "es2-tilde-preguntas",
          titulo: "Знак ударения: вопрос и ответ",
          texto: "В вопросе слова пишутся со знаком: **¿qué?**, **¿cómo?**, **¿dónde?**. Без вопроса — без знака: **Como en casa** («как дома»). То же с **tú / tu** и **él / el**: **¿Tú eres Ana?** — «ты Аня?»; **tu hermano** — «твой брат»; **él es mi hermano** — «он мой брат»; **el hermano** — «брат» (артикль).",
          chequeo: [
            { pide: "«Твой брат — он врач»", opciones: ["Tu hermano… él es médico.", "Tú hermano… el es médico."], ok: "Tu hermano… él es médico.", por: "**tu** (твой) без знака, **él** (он) со знаком." }
          ]
        }
      ],
      vocab: ["qué", "quién", "cómo", "dónde", "cuánto", "cuál", "también", "o"]
    },
    {
      id: "es2m9", n: 9, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом. Для тренировки чтения выключи подсказку кириллицей и перевод.",
      dialogos: ["DLE-005", "DLE-006", "DLE-007", "DLE-008", "DLE-009"]
    },
    {
      id: "es2m10", n: 10, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Рассказ о себе и о другом человеке.",
      intro: "Напиши по-испански два коротких текста. Первый — о себе: как тебя зовут, откуда ты, сколько тебе лет, кем работаешь и на каких языках говоришь. Второй — о другом человеке (друге, брате, коллеге): представь его, как Лусия представила Пабло. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      requisitos: [
        { txt: "Как тебя зовут (me llamo… / soy…)", rx: "(me llamo|^soy [a-záéíóúñ]+|[.!] soy [a-záéíóúñ]+)" },
        { txt: "Откуда ты (soy de…)", rx: "soy de " },
        { txt: "Сколько тебе лет (tengo … años)", rx: "tengo [a-záéíóúñ ]+ años|tengo \\d+ años" },
        { txt: "Профессия (soy profesor, soy estudiante…)", rx: "soy (profesor|profesora|estudiante|médico|médica|ingeniero|ingeniera|abogado|abogada|camarero|camarera|enfermero|enfermera|programador|programadora|arquitecto|arquitecta|periodista|cocinero|cocinera|traductor|traductora|policía|dependiente|dependienta|empresario|empresaria|funcionario|funcionaria|actor|actriz|músico|música|conductor|conductora|secretario|secretaria|peluquero|peluquera)|estoy (jubilad|parad)" },
        { txt: "Языки (hablo…)", rx: "hablo " },
        { txt: "Другой человек (este es… / esta es…)", rx: "(este|esta) es " },
        { txt: "Его имя, откуда он и сколько ему лет (se llama…, es de…, tiene … años)", rx: "(se llama|es de |tiene [a-záéíóúñ0-9 ]+ años)" }
      ],
      consejos: [
        { rx: "soy [a-záéíóúñ0-9 ]+ años", msg: "Возраст — с **tener**: **tengo 25 años**, а не «soy 25 años»." },
        { rx: "\\b(soy|es) (un|una) (profesor|profesora|estudiante|médico|médica|ingeniero|ingeniera|abogado|abogada|programador|programadora|periodista|traductor|traductora)\\b", msg: "Профессия после **ser** — без артикля: **soy profesor**." },
        { rx: "hablo en ", msg: "«Говорить по-русски» — без **en**: **hablo ruso**." },
        { rx: "este es mi (madre|hermana|hija|abuela|tía|prima|amiga|mujer|novia|esposa)", msg: "О женщине — **esta es**: esta es mi madre." },
        { rx: "\\b(soy|es) (ruso|español|francés|alemán|inglés|italiano|ucraniano)\\b.*\\b(soy|es) (rusa|española)", msg: "Проверь род национальности: мужчина — **ruso**, женщина — **rusa**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es2m11", n: 11, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Глаголы, род и артикли, вопросы, числа и общение.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Глаголы", tipos: ["forma", "forma-escribir", "pronombre", "error"], n: 4 },
        { nombre: "Род и артикли", tipos: ["articulo", "plural", "concordancia", "nacionalidad"], n: 4 },
        { nombre: "Вопросы и числа", tipos: ["pregunta", "numero"], n: 4 },
        { nombre: "Слова", tipos: ["dictado", "familia", "este-esta"], n: 4 },
        { nombre: "Общение", tipos: ["situacion-frase", "respuesta", "dictado-frase", "ordenar-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs2Modulo(id) { return UNIDAD_ES_2.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_2 = UNIDAD_ES_2;
window.unidadEs2Modulo = unidadEs2Modulo;

/* ── Vocabulario: palabras → IDs ── */
const ES2_ID_FIJO = { "poco": "ESP-05177", "este": "ESP-00029", "llamarse": "ESP-02076", "punto": "ESP-00317" };
function es2Id(w) {
  if (ES2_ID_FIJO[w]) return ES2_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es2Vocab(m) { return (m.vocab || []).map(es2Id).filter(Boolean); }
/* Las palabras nuevas de la U2 (sin las que ya enseñó la U1) */
function es2Objetivo() {
  const u1 = new Set(typeof es1Objetivo === "function" ? es1Objetivo() : []);
  const out = [];
  UNIDAD_ES_2.modulos.forEach(m => es2Vocab(m).forEach(id => { if (!u1.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs2() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es2Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);

  /* 1–2. Formas de ser, tener y llamarse: elegir y escribir */
  ES2_FORMAS.forEach(([frase, ok, ops, verbo, mod, regla, exp], i) => {
    const audio = frase.replace("___", ok);
    out.push({ id: "ES2-fo-" + i, tipo: "forma", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "fo-" + i, lex: lex(verbo),
      pide: "Выбери нужную форму.", grande: frase, opciones: baraja(ops, i + 7), correcta: ok, oir: audio, explicacion: exp });
    out.push({ id: "ES2-fe-" + i, tipo: "forma-escribir", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "fo-" + i, lex: lex(verbo),
      pide: "Впиши форму глагола «" + verbo + "».", grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, completa: audio, oir: audio, explicacion: exp });
  });
  /* 3. Pronombres */
  ES2_PRONOMBRES.forEach(([quien, ok, ops, exp], i) => {
    out.push({ id: "ES2-pr-" + i, tipo: "pronombre", forma: "elegir", dificultad: 1, modulo: 1, regla: "es2-nosotras", grupo: "pr-" + i, lex: lex(ok.toLowerCase()),
      pide: "Какое местоимение подходит?", grande: quien, opciones: baraja(ops, i + 17), correcta: ok, oir: ok, explicacion: exp });
  });
  /* 4. Errores típicos: toca la palabra mal y escríbela bien */
  ES2_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES2-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 5. Nacionalidad según el país y la persona */
  ES2_NACIONES.forEach(([pais, m, f], i) => {
    const mujer = i % 2 === 0, quien = mujer ? "Ana" : "Pablo", ok = mujer ? f : m;
    out.push({ id: "ES2-na-" + i, tipo: "nacionalidad", forma: "escribir", dificultad: 2, modulo: 3, regla: "es2-nacionalidad-genero", grupo: "na-" + pais, lex: lex(m),
      pide: "Напиши национальность.", grande: quien + " es de " + pais + ". " + quien + " es ___.", esperadas: [ok], idioma: "es", foco: true, oir: quien + " es " + ok + ".",
      explicacion: (mujer ? "Аня — женщина" : "Пабло — мужчина") + ": **" + ok + "**." + (m !== f ? " (" + m + " / " + f + ")" : " Одинаково для мужчин и женщин.") });
  });
  /* 6. Artículos */
  ES2_ARTICULOS.forEach(([sust, el, un], i) => {
    out.push({ id: "ES2-ar-" + i, tipo: "articulo", forma: "elegir", dificultad: 2, modulo: 6, regla: "es2-genero", grupo: "ar-" + sust, lex: lex(sust),
      pide: "Какой артикль?", grande: "___ " + sust, opciones: ["el", "la", "los", "las"], correcta: el, oir: el + " " + sust,
      explicacion: "**" + el + " " + sust + "**, **" + un + " " + sust + "**." });
  });
  /* 7. Plural */
  ES2_PLURALES.forEach(([sg, pl], i) => {
    out.push({ id: "ES2-pl-" + i, tipo: "plural", forma: "escribir", dificultad: 2, modulo: 6, regla: "es2-plural", grupo: "pl-" + sg, lex: lex(sg.split(" ")[1]),
      pide: "Напиши во множественном числе.", grande: sg, esperadas: [pl], idioma: "es", oir: pl,
      explicacion: sg + " → **" + pl + "**." + (/[aeiou]$/.test(sg) ? " На гласную — **-s**." : " На согласную — **-es**.") });
  });
  /* 8. Concordancia */
  ES2_CONCORDANCIA.forEach(([frase, ok, ops, exp], i) => {
    out.push({ id: "ES2-co-" + i, tipo: "concordancia", forma: "elegir", dificultad: 2, modulo: 6, regla: "es2-concordancia", grupo: "co-" + i,
      pide: "Что подходит?", grande: frase, opciones: baraja(ops, i + 27), correcta: ok, oir: frase.replace("___", ok), explicacion: exp });
  });
  /* 9. Preguntas */
  ES2_PREGUNTAS.forEach(([preg, resp, ok, ops], i) => {
    out.push({ id: "ES2-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: 8, regla: "es2-preguntas", grupo: "pq-" + i,
      pide: "Ответ: «" + resp + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 37), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp + "»." });
  });
  /* 10. Números 21–100 */
  const DEC = { 30: "treinta", 40: "cuarenta", 50: "cincuenta", 60: "sesenta", 70: "setenta", 80: "ochenta", 90: "noventa" };
  const VEINTI = ["", "veintiuno", "veintidós", "veintitrés", "veinticuatro", "veinticinco", "veintiséis", "veintisiete", "veintiocho", "veintinueve"];
  const UNID = ["", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
  const palabra = n => n === 100 ? "cien" : n < 30 ? VEINTI[n - 20] : DEC[n - n % 10] + (n % 10 ? " y " + UNID[n % 10] : "");
  [21, 22, 23, 26, 28, 30, 32, 37, 40, 45, 50, 54, 60, 66, 70, 71, 80, 88, 90, 99, 100].forEach((n, i) => {
    const w = palabra(n), cerca = [n + 10 > 100 ? n - 10 : n + 10, n % 10 ? n - n % 10 + ((n % 10) + 1) % 10 : n + 1].filter(x => x !== n && x > 20 && x <= 100);
    const mal = cerca.concat(baraja([24, 33, 41, 57, 63, 75, 82, 96], i + 41)).filter((x, k, a) => x !== n && a.indexOf(x) === k).slice(0, 3);
    const id = es2Id(w.split(" ")[0]);
    out.push({ id: "ES2-num-o-" + n, tipo: "numero", forma: "elegir", dificultad: 2, modulo: 5, regla: "es2-treinta-y", grupo: "num-" + n, lex: id ? [id] : undefined,
      pide: "Послушай: какое это число?", audio: w, opciones: baraja([String(n)].concat(mal.map(String)), n), correcta: String(n), oir: w, explicacion: "**" + w + "** — " + n + "." });
    out.push({ id: "ES2-num-e-" + n, tipo: "numero", forma: "escribir", dificultad: 3, modulo: 5, regla: n < 30 ? "es2-veinti" : "es2-treinta-y", grupo: "num-" + n, lex: id ? [id] : undefined,
      pide: "Напиши это число словами.", grande: String(n), esperadas: [w], idioma: "es", foco: true, oir: w, explicacion: n + " — **" + w + "**." });
  });
  /* 11. Dictado de las palabras de la unidad (sin nombres propios) */
  UNIDAD_ES_2.modulos.forEach(m => (m.vocab || []).forEach(w => {
    const id = es2Id(w), e = id && lexEs(id);
    if (!e || e.propio || /\s/.test(w) || ["el", "un", "o", "nos", "os"].indexOf(w) >= 0) return;
    if (out.some(x => x.id === "ES2-dic-" + id)) return;
    out.push({ id: "ES2-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: m.n, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." });
  }));
  /* 12. Familia */
  ES2_FAMILIA.forEach(([frase, ok, ops], i) => {
    out.push({ id: "ES2-fa-" + i, tipo: "familia", forma: "escribir", dificultad: 3, modulo: 7, grupo: "fa-" + i, lex: lex(ok.replace(/a$/, "o").replace(/^madre$/, "madre")),
      pide: "Кто это? Напиши слово.", grande: frase, esperadas: [ok], idioma: "es", oir: frase.replace("___", ok), explicacion: "**" + frase.replace("___", ok) + "**" });
  });
  /* 13. Este / esta */
  ES2_ESTE.forEach(([frase, ok], i) => {
    out.push({ id: "ES2-ee-" + i, tipo: "este-esta", forma: "elegir", dificultad: 1, modulo: 7, regla: "es2-este-es", grupo: "ee-" + i,
      pide: "Как представить?", grande: frase, opciones: ["Este", "Esta"], correcta: ok, oir: frase.replace("___", ok),
      explicacion: ok === "Este" ? "О мужчине — **este es**." : "О женщине — **esta es**." });
  });
  /* 14. Situaciones y respuestas; dictado y orden de las frases de la U2 */
  ES2_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES2-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES2_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES2-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 121), correcta: ok, oir: ok, explicacion: exp });
  });
  const OBJ = new Set(es2Objetivo());
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 2) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_2.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES2-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 131);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES2-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });

  /* Profundización (13/11/2026) */
  if (typeof es2Prof === "function") es2Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ──
   Formas: [frase con ___, correcta, opciones, verbo, módulo, regla, explicación] */
const ES2_FORMAS = [
  ["Yo ___ Ana.", "soy", ["soy", "es", "eres", "somos"], "ser", 2, "es2-ser-siempre", "**yo** → **soy**."],
  ["Tú ___ de Madrid, ¿verdad?", "eres", ["eres", "es", "sois", "soy"], "ser", 2, "es2-ser-usos", "**tú** → **eres**."],
  ["Javier ___ profesor.", "es", ["es", "eres", "son", "soy"], "ser", 2, "es2-profesion", "**él** → **es**. Профессия — без артикля."],
  ["Nosotras ___ amigas.", "somos", ["somos", "sois", "son", "es"], "ser", 2, "es2-ser-usos", "**nosotras** → **somos**."],
  ["¿Vosotros ___ de Barcelona?", "sois", ["sois", "son", "somos", "eres"], "ser", 2, "es2-sois", "**vosotros** → **sois** (без знака ударения)."],
  ["Ana y Lucía ___ de España.", "son", ["son", "somos", "es", "sois"], "ser", 2, "es2-ser-usos", "**ellas** → **son**."],
  ["¿Usted ___ el señor Pérez?", "es", ["es", "eres", "son", "soy"], "ser", 2, "es2-usted-verbo", "С **usted** — как с él: **es**."],
  ["¿Ustedes ___ de Rusia?", "son", ["son", "sois", "es", "somos"], "ser", 2, "es2-usted-verbo", "С **ustedes** — как с ellos: **son**."],
  ["Yo ___ veinte años.", "tengo", ["tengo", "soy", "tiene", "tienes"], "tener", 4, "es2-edad", "Возраст — с **tener**: **tengo**."],
  ["¿Cuántos años ___ tú?", "tienes", ["tienes", "eres", "tiene", "tenéis"], "tener", 4, "es2-edad", "**tú** → **tienes**."],
  ["Mi hermano ___ treinta años.", "tiene", ["tiene", "es", "tienes", "tienen"], "tener", 4, "es2-edad", "**él** → **tiene**."],
  ["Nosotros ___ dos hijos.", "tenemos", ["tenemos", "tienen", "tenéis", "somos"], "tener", 4, "es2-tener", "**nosotros** → **tenemos**."],
  ["¿Vosotras ___ hermanos?", "tenéis", ["tenéis", "tienen", "tenemos", "sois"], "tener", 4, "es2-tener", "**vosotras** → **tenéis**."],
  ["Mis padres ___ sesenta años.", "tienen", ["tienen", "son", "tenéis", "tiene"], "tener", 4, "es2-edad", "**ellos** → **tienen**."],
  ["Yo me ___ Ana.", "llamo", ["llamo", "llama", "llamas", "llamamos"], "llamarse", 4, "es2-llamarse", "**me llamo**."],
  ["¿Cómo te ___?", "llamas", ["llamas", "llama", "llamo", "llamáis"], "llamarse", 4, "es2-llamarse", "**te llamas**."],
  ["Mi madre se ___ Olga.", "llama", ["llama", "llamas", "llaman", "llamo"], "llamarse", 4, "es2-llamarse", "**se llama**."],
  ["Nosotros nos ___ Pablo y Marta.", "llamamos", ["llamamos", "llaman", "llamáis", "llama"], "llamarse", 4, "es2-llamarse", "**nos llamamos**."],
  ["¿Cómo os ___?", "llamáis", ["llamáis", "llaman", "llamamos", "llamas"], "llamarse", 4, "es2-llamarse", "**os llamáis** (со знаком ударения)."],
  ["Mis hermanos se ___ Iván y Olga.", "llaman", ["llaman", "llama", "llamáis", "llamamos"], "llamarse", 4, "es2-llamarse", "**se llaman**."]
];
/* Pronombres: [quién, correcto, opciones, explicación] */
const ES2_PRONOMBRES = [
  ["Ana y Lucía", "Ellas", ["Ellas", "Ellos", "Nosotras"], "Только женщины — **ellas**."],
  ["Ana y Javier", "Ellos", ["Ellos", "Ellas", "Vosotros"], "Есть мужчина — **ellos**."],
  ["Yo y Lucía (две женщины)", "Nosotras", ["Nosotras", "Nosotros", "Ellas"], "«Мы» — только женщины: **nosotras**."],
  ["Yo y Pablo", "Nosotros", ["Nosotros", "Nosotras", "Ellos"], "Есть мужчина — **nosotros**."],
  ["Твои друзья Пабло и Марта (ты с ними на «ты»)", "Vosotros", ["Vosotros", "Ustedes", "Ellos"], "Нескольким, с кем ты на «ты», — **vosotros**."],
  ["Незнакомый пожилой человек", "Usted", ["Usted", "Tú", "Vosotros"], "Вежливо одному — **usted**."],
  ["Двое незнакомых взрослых", "Ustedes", ["Ustedes", "Vosotros", "Usted"], "Вежливо нескольким — **ustedes**."],
  ["Твоя подруга Лусия", "Tú", ["Tú", "Usted", "Ella"], "Подруге — **tú**."]
];
/* Errores típicos: [palabras, índice mal, arreglo, módulo, regla, explicación] */
const ES2_ERRORES = [
  [["Soy", "veinte", "años."], 0, "Tengo", 4, "es2-edad", "Возраст — с **tener**: **Tengo veinte años**."],
  [["Ana", "es", "ruso."], 2, "rusa", 3, "es2-nacionalidad-genero", "Аня — женщина: **rusa**."],
  [["¿Cuántas", "años", "tienes?"], 0, "Cuántos", 8, "es2-preguntas", "**años** — мужской род: **¿Cuántos años tienes?**"],
  [["Este", "es", "mi", "madre."], 0, "Esta", 7, "es2-este-es", "О женщине — **esta es**."],
  [["Ella", "es", "la", "profesor."], 3, "profesora", 6, "es2-concordancia", "**la profesora**: всё в женском роде."],
  [["Nosotros", "somos", "rusos", "y", "ellas", "es", "españolas."], 5, "son", 2, "es2-ser-usos", "**ellas** → **son**."],
  [["Vosotros", "son", "de", "Madrid."], 1, "sois", 2, "es2-sois", "**vosotros** → **sois**."],
  [["Mi", "hermana", "es", "médico."], 3, "médica", 2, "es2-profesion", "Сестра — женщина: **es médica**."]
];
/* Naciones: [país, masculino, femenino] */
const ES2_NACIONES = [
  ["Rusia", "ruso", "rusa"], ["España", "español", "española"], ["Francia", "francés", "francesa"], ["Alemania", "alemán", "alemana"],
  ["Italia", "italiano", "italiana"], ["Inglaterra", "inglés", "inglesa"], ["Ucrania", "ucraniano", "ucraniana"], ["Portugal", "portugués", "portuguesa"],
  ["Polonia", "polaco", "polaca"], ["Japón", "japonés", "japonesa"], ["China", "chino", "china"], ["México", "mexicano", "mexicana"],
  ["Argentina", "argentino", "argentina"], ["Canadá", "canadiense", "canadiense"], ["Brasil", "brasileño", "brasileña"], ["Grecia", "griego", "griega"],
  ["Irlanda", "irlandés", "irlandesa"], ["Estados Unidos", "estadounidense", "estadounidense"]
];
/* Artículos: [sustantivo, el/la, un/una] */
const ES2_ARTICULOS = [
  ["libro", "el", "un"], ["casa", "la", "una"], ["hermano", "el", "un"], ["hermana", "la", "una"], ["padre", "el", "un"], ["madre", "la", "una"],
  ["país", "el", "un"], ["ciudad", "la", "una"], ["idioma", "el", "un"], ["familia", "la", "una"], ["día", "el", "un"], ["noche", "la", "una"],
  ["hombre", "el", "un"], ["mujer", "la", "una"], ["nacionalidad", "la", "una"], ["teléfono", "el", "un"], ["profesión", "la", "una"], ["número", "el", "un"]
];
/* Plural: [singular con artículo, plural] */
const ES2_PLURALES = [
  ["el libro", "los libros"], ["la casa", "las casas"], ["el hermano", "los hermanos"], ["la ciudad", "las ciudades"], ["el profesor", "los profesores"],
  ["la profesora", "las profesoras"], ["el país", "los países"], ["el idioma", "los idiomas"], ["la mujer", "las mujeres"], ["el hijo", "los hijos"],
  ["la nacionalidad", "las nacionalidades"], ["el amigo", "los amigos"]
];
/* Concordancia: [frase, correcta, opciones, explicación] */
const ES2_CONCORDANCIA = [
  ["Lucía es ___.", "española", ["española", "español", "españolas"], "Лусия — женщина: **española**."],
  ["Pablo y Marta son ___.", "amigos", ["amigos", "amigas", "amigo"], "Есть мужчина — мужской род, мн. ч.: **amigos**."],
  ["Ana y Lucía son ___.", "amigas", ["amigas", "amigos", "amiga"], "Две женщины: **amigas**."],
  ["___ profesora es de Madrid.", "La", ["La", "El", "Las"], "**la profesora**."],
  ["___ padres de Ana son rusos.", "Los", ["Los", "Las", "El"], "**los padres** — мужской род, мн. ч."],
  ["Marta es ___.", "argentina", ["argentina", "argentino", "argentinas"], "Марта — женщина: **argentina**."],
  ["Los padres de Pablo son ___.", "españoles", ["españoles", "españolas", "español"], "Отец и мать — мужской род: **españoles**."],
  ["Tengo ___ hermana.", "una", ["una", "un", "unas"], "**hermana** — женский род: **una**."]
];
/* Preguntas: [pregunta con ___, respuesta, correcta, opciones] */
const ES2_PREGUNTAS = [
  ["¿___ eres?", "Soy de Rusia.", "De dónde", ["De dónde", "Dónde", "Cómo", "Quién"]],
  ["¿___ te llamas?", "Me llamo Ana.", "Cómo", ["Cómo", "Qué", "Quién", "Cuál"]],
  ["¿___ años tienes?", "Tengo veintiocho años.", "Cuántos", ["Cuántos", "Cuántas", "Qué", "Cómo"]],
  ["¿___ es?", "Es mi hermano Iván.", "Quién", ["Quién", "Qué", "Cuál", "Dónde"]],
  ["¿___ vives?", "Vivo en Barcelona.", "Dónde", ["Dónde", "De dónde", "Cómo", "Qué"]],
  ["¿___ es tu número de teléfono?", "Seis, cuatro, uno…", "Cuál", ["Cuál", "Qué", "Cómo", "Quién"]],
  ["¿___ hermanos tienes?", "Tengo dos hermanos.", "Cuántos", ["Cuántos", "Cuántas", "Cuál", "Quién"]],
  ["¿___ hablas?", "Hablo ruso y español.", "Qué idiomas", ["Qué idiomas", "Cuántos", "Dónde", "Quién"]]
];
/* Familia: [frase con ___, palabra, -] */
const ES2_FAMILIA = [
  ["El padre de mi padre es mi ___.", "abuelo"], ["La madre de mi madre es mi ___.", "abuela"], ["El hijo de mi madre es mi ___.", "hermano"],
  ["La hija de mi hermano es mi ___.", "sobrina"], ["El hermano de mi madre es mi ___.", "tío"], ["La hija de mi tía es mi ___.", "prima"],
  ["El hijo de mi hijo es mi ___.", "nieto"], ["Mi padre y mi madre son mis ___.", "padres"]
];
/* Este / esta: [frase, correcta] */
const ES2_ESTE = [
  ["___ es mi hermana.", "Esta"], ["___ es mi padre.", "Este"], ["___ es Pablo.", "Este"], ["___ es Marta.", "Esta"],
  ["___ es mi amiga Lucía.", "Esta"], ["___ es mi novio.", "Este"]
];
/* Situación → frase: [consigna, correcta, otras, explicación, módulo] */
const ES2_SITUACIONES = [
  ["Ты хочешь узнать, откуда человек.", "¿De dónde eres?", ["¿Dónde estás?", "¿Cómo te llamas?"], "**¿De dónde eres?** — «откуда ты?».", 3],
  ["Тебе 30 лет. Как сказать?", "Tengo treinta años.", ["Soy treinta años.", "Me treinta años."], "Возраст — с **tener**.", 4],
  ["Ты представляешь свою маму.", "Esta es mi madre.", ["Este es mi madre.", "Es mi madre esta."], "О женщине — **esta es**.", 7],
  ["Ты представляешь своего брата.", "Este es mi hermano.", ["Esta es mi hermano.", "Este mi hermano."], "О мужчине — **este es**.", 7],
  ["Ты спрашиваешь номер телефона.", "¿Cuál es tu número de teléfono?", ["¿Qué es tu número de teléfono?", "¿Cuántos es tu teléfono?"], "**¿Cuál es…?** — «какой?».", 5],
  ["Ты — Аня, ты работаешь программистом.", "Soy programadora.", ["Soy una programadora.", "Soy programador."], "Профессия — без артикля и в женском роде.", 2],
  ["Ты спрашиваешь двух друзей, откуда они.", "¿De dónde sois?", ["¿De dónde son?", "¿De dónde eres?"], "Нескольким друзьям — **vosotros**: **sois**.", 2],
  ["Ты говоришь, что немного говоришь по-испански.", "Hablo un poco de español.", ["Hablo en español un poco.", "Soy un poco español."], "**Hablo un poco de español.**", 3]
];
/* Respuesta: [lo que te dicen, respuesta, otras, explicación, módulo] */
const ES2_RESPUESTAS = [
  ["¿De dónde eres?", "Soy de Rusia.", ["Tengo veinte años.", "Me llamo Ana."], "Откуда — **soy de…**", 3],
  ["¿Cuántos años tienes?", "Tengo veintiocho años.", ["Soy de Moscú.", "Soy rusa."], "Возраст — **tengo … años**.", 4],
  ["¿Tienes hermanos?", "Sí, tengo un hermano.", ["Sí, soy hermano.", "Sí, es mi hermano."], "**Tengo un hermano.**", 7],
  ["¿Quién es?", "Es mi amiga Lucía.", ["Es de Barcelona.", "Tengo una amiga."], "**¿Quién es?** — «кто это?».", 7],
  ["¿Hablas inglés?", "Sí, hablo inglés.", ["Sí, soy inglés.", "Sí, hablo en inglés."], "Язык — без **en**.", 3],
  ["¿Eres estudiante?", "No, soy programadora.", ["No, soy una programadora.", "No, tengo programadora."], "Профессия — без артикля.", 2]
];

window.ejerciciosUnidadEs2 = ejerciciosUnidadEs2;
window.es2Vocab = es2Vocab;
window.es2Objetivo = es2Objetivo;
const ES2_MEZCLA = { forma: 2, "forma-escribir": 2, pronombre: 1, error: 2, nacionalidad: 2, articulo: 2, plural: 2, concordancia: 2, pregunta: 2,
  numero: 2, dictado: 2, familia: 1, "este-esta": 1, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1 };
window.ES2_MEZCLA = ES2_MEZCLA;

/* ── Profundización (13/11/2026, repaso Abecé / Azbuka pedido por Manu) ──────────────
   Más a fondo que se suma a la teoría al cargar y los tipos de profundización de Azbuka. */
const ES2_MAS = {
  "es2-cuatro-vy": { titulo: "Ustedes в Латинской Америке", texto: "В Латинской Америке **vosotros** почти не говорят: и друзьям, и незнакомым — **ustedes**. В Испании **ustedes** — только вежливо. Ты будешь говорить **vosotros**, но понимать надо оба.", ejemplos: [{ es: "¿Ustedes son de aquí?", ru: "Вы (вежливо, несколько) отсюда?" }] },
  "es2-sin-sujeto": { titulo: "Él и ella — для ясности", texto: "Если в разговоре двое и непонятно, кто, — местоимение говорят: **Ella es médica y él es profesor.** Иначе его обычно опускают.", ejemplos: [{ es: "Ella es de Madrid y él es de Moscú.", ru: "Она из Мадрида, а он из Москвы." }] },
  "es2-ser-siempre": { titulo: "По-русски «есть» молчит", texto: "По-русски говорят «Я студент», без глагола. По-испански глагол нужен всегда: **Soy estudiante**. «Yo estudiante» — ошибка.", ejemplos: [{ es: "Soy estudiante.", ru: "Я студент." }] },
  "es2-profesion": { titulo: "С прилагательным — с артиклем", texto: "Профессия без артикля: **Soy médico**. Но если есть прилагательное, артикль нужен: **Es un médico nuevo** — это новый врач.", ejemplos: [{ es: "Es un profesor nuevo.", ru: "Это новый учитель." }] },
  "es2-ser-de": { titulo: "Soy de — и город, и страна", texto: "**Soy de** + город или страна: **Soy de Moscú**, **Soy de Rusia**. Вопрос: **¿De dónde eres?** — предлог стоит в начале.", ejemplos: [{ es: "—¿De dónde eres? —Soy de Moscú.", ru: "— Откуда ты? — Я из Москвы." }] },
  "es2-nacionalidad-genero": { titulo: "С маленькой буквы", texto: "Национальности и языки пишут с маленькой буквы: **ruso**, **español**, **inglesa**. С большой — только страны и города: **Rusia**, **España**.", ejemplos: [{ es: "Ana es rusa y vive en España.", ru: "Аня русская и живёт в Испании." }] },
  "es2-idiomas": { titulo: "Hablo ruso — без артикля", texto: "После **hablar** язык — без артикля: **Hablo ruso**. Но **el español es mi idioma** — с артиклем, когда язык — подлежащее.", ejemplos: [{ es: "El español es mi idioma.", ru: "Испанский — мой язык." }] },
  "es2-llamarse": { titulo: "Mi nombre es…", texto: "Можно сказать и **Mi nombre es Ana**, но обычно говорят **Me llamo Ana**. Ответ на **¿Cómo te llamas?** — **Me llamo…** или просто имя.", ejemplos: [{ es: "—¿Cómo te llamas? —Ana.", ru: "— Как тебя зовут? — Аня." }] },
  "es2-edad": { titulo: "¿Cuántos años tienes?", texto: "Вопрос — тоже с **tener**: **¿Cuántos años tienes?** **años** нельзя пропустить: не «Tengo 25», а **Tengo 25 años**.", ejemplos: [{ es: "—¿Cuántos años tienes? —Tengo treinta años.", ru: "— Сколько тебе лет? — Мне тридцать." }] },
  "es2-veinti": { titulo: "Veintiún años", texto: "Перед существительным **uno** сокращается: **veintiún años**, **un libro**. С ж. р.: **veintiuna personas**.", ejemplos: [{ es: "Tengo veintiún años.", ru: "Мне двадцать один год." }] },
  "es2-genero": { titulo: "-a — не всегда ж. р.", texto: "Большинство слов на **-a** — женского рода, но есть исключения: **el día**. Поэтому учи слово вместе с артиклем.", ejemplos: [{ es: "Buenos días.", ru: "Добрый день." }] },
  "es2-padres": { titulo: "Los hermanos — брат и сестра", texto: "Мужская форма во мн. ч. — это часто «все вместе»: **mis hermanos** — мои братья или брат и сестра; **mis hijos** — мои дети.", ejemplos: [{ es: "Tengo dos hermanos: Pablo y Lucía.", ru: "У меня двое — брат и сестра: Пабло и Лусия." }] },
  "es2-mi-tu": { titulo: "Tú и tu", texto: "**tú** (со знаком) — «ты»; **tu** (без знака) — «твой»: **Tú eres mi amigo y tu casa es nueva.** Так же **él** — «он», **el** — артикль.", ejemplos: [{ es: "Tú eres de Moscú y tu hermano también.", ru: "Ты из Москвы, и твой брат тоже." }] },
  "es2-preguntas": { titulo: "Порядок в вопросе", texto: "В вопросе с вопросительным словом глагол обычно сразу после него: **¿Dónde vive Ana?** (а не «¿Dónde Ana vive?»). В вопросе да/нет хватает интонации: **¿Ana vive aquí?**", ejemplos: [{ es: "¿Dónde vive tu hermano?", ru: "Где живёт твой брат?" }] }
};
const ES2_NAT = [
  ["Soy estudiante.", ["Yo estudiante.", "Soy un estudiante de."], "Глагол нужен всегда.", 2, "es2-ser-siempre"],
  ["Soy médico.", ["Soy un médico.", "Soy el médico yo."], "Профессия — без артикля.", 2, "es2-profesion"],
  ["Vosotros sois de Madrid.", ["Vosotros sóis de Madrid.", "Vosotros son de Madrid."], "**sois**, без знака.", 2, "es2-sois"],
  ["Soy de Rusia.", ["Soy en Rusia.", "Soy desde Rusia."], "Откуда — **de**.", 3, "es2-ser-de"],
  ["Ana es rusa.", ["Ana es ruso.", "Ana es Rusa."], "Ж. р., с маленькой буквы.", 3, "es2-nacionalidad-genero"],
  ["Hablo español.", ["Hablo el español mucho.", "Hablo Español."], "Язык — без артикля, с маленькой.", 3, "es2-idiomas"],
  ["Me llamo Ana.", ["Me llama Ana.", "Yo llamo Ana."], "**me llamo**.", 4, "es2-llamarse"],
  ["Tengo veinte años.", ["Soy veinte años.", "Tengo veinte."], "Возраст — **tener … años**.", 4, "es2-edad"],
  ["Tengo veintiún años.", ["Tengo veintiuno años.", "Tengo veinte y uno años."], "Перед сущ. — **veintiún**.", 5, "es2-veinti"],
  ["Treinta y dos.", ["Treintaydos.", "Treinta dos."], "После 30 — через **y**, раздельно.", 5, "es2-treinta-y"],
  ["El libro es nuevo.", ["La libro es nuevo.", "El libro es nueva."], "**libro** — м. р.", 6, "es2-genero"],
  ["Las casas son nuevas.", ["Las casa son nuevas.", "Los casas son nuevas."], "Всё согласуется.", 6, "es2-concordancia"],
  ["Mis padres son de Moscú.", ["Mi padres son de Moscú.", "Mis padres es de Moscú."], "**mis padres son**.", 7, "es2-padres"],
  ["Esta es mi hermana.", ["Este es mi hermana.", "Esta es mía hermana."], "О ней — **esta es**.", 7, "es2-este-es"],
  ["¿De dónde eres?", ["¿Dónde eres de?", "¿De dónde estás?"], "Предлог — в начале.", 8, "es2-de-donde"]
];
const ES2_POR = [
  ["Soy médico.", "Почему без «un»?", "Профессия — без артикля", ["Médico — ж. р.", "Это ошибка"], "Профессия — без артикля.", 2, "es2-profesion"],
  ["Tengo veinte años.", "Почему «tengo»?", "Возраст по-испански «имеют»", ["Это ошибка", "Так говорят только в Испании"], "**tener … años**.", 4, "es2-edad"],
  ["¿De dónde eres?", "Почему «de» в начале?", "Предлог стоит перед вопросительным словом", ["Это ошибка", "Так вежливее"], "**¿De dónde…?**", 8, "es2-de-donde"],
  ["Usted es de Madrid.", "Почему «es», а не «eres»?", "Usted — с формой 3-го лица", ["Это ошибка", "Usted — мн. ч."], "**usted es**.", 1, "es2-usted-verbo"],
  ["Ana es rusa.", "Почему «rusa» с маленькой буквы?", "Национальности — с маленькой буквы", ["Это ошибка", "Потому что это ж. р."], "Как языки.", 3, "es2-nacionalidad-genero"],
  ["Mis padres.", "Что значит «padres»?", "Родители", ["Отцы", "Деды"], "**padres** — родители.", 7, "es2-padres"],
  ["Tú eres mi amigo.", "Почему «tú» со знаком, а «mi» без?", "Tú — «ты»; tu — «твой»", ["Так красивее", "Это ошибка"], "Знак различает слова.", 7, "es2-mi-tu"],
  ["Trabajo en casa.", "Почему нет «yo»?", "Окончание уже говорит, кто", ["Это ошибка", "Так говорят только с usted"], "Местоимение можно опустить.", 1, "es2-sin-sujeto"]
];
const ES2_OIDO = [
  ["Eres de Madrid.", "Послушай: кто?", "tú", ["yo", "tú", "él / ella"], "**eres** — ты.", 2, "es2-ser-usos"],
  ["Somos rusos.", "Послушай: кто?", "nosotros", ["nosotros", "ellos", "vosotros"], "**somos** — мы.", 2, "es2-ser-usos"],
  ["Sois de Barcelona.", "Послушай: кто?", "vosotros", ["vosotros", "ellos", "nosotros"], "**sois** — вы (неформально).", 2, "es2-sois"],
  ["Tengo treinta y cinco años.", "Послушай: сколько лет?", "35", ["35", "25", "53"], "35.", 5, "es2-treinta-y"],
  ["Veintisiete.", "Послушай: какое число?", "27", ["27", "77", "17"], "27.", 5, "es2-veinti"],
  ["Es rusa.", "Послушай: о ком?", "О женщине", ["О мужчине", "О женщине"], "**rusa** — ж. р.", 3, "es2-nacionalidad-genero"],
  ["Se llama Pablo.", "Послушай: о ком говорят?", "О другом человеке", ["Обо мне", "О другом человеке"], "**se llama** — его зовут.", 4, "es2-llamarse"],
  ["¿Tú eres Ana?", "Послушай: это вопрос или ответ?", "Вопрос", ["Вопрос", "Ответ"], "Интонация вопроса.", 8, "es2-preguntas"]
];
const ES2_PAR = [
  ["Ты говоришь, что ты врач.", "Soy médico.", "Soy un médico.", "Без артикля.", 2, "es2-profesion"],
  ["Ты говоришь, сколько тебе лет.", "Tengo treinta años.", "Soy treinta años.", "Возраст — **tengo**.", 4, "es2-edad"],
  ["Ты спрашиваешь незнакомого пожилого мужчину, откуда он.", "¿De dónde es usted?", "¿De dónde eres?", "Вежливо — **usted es**.", 1, "es2-cuatro-vy"],
  ["Ты спрашиваешь друга, откуда он.", "¿De dónde eres?", "¿De dónde es usted?", "Другу — **tú**.", 1, "es2-cuatro-vy"],
  ["Ты представляешь сестру.", "Esta es mi hermana.", "Este es mi hermana.", "О ней — **esta**.", 7, "es2-este-es"],
  ["Ты говоришь двум друзьям: «Вы из Мадрида».", "Vosotros sois de Madrid.", "Ustedes son de Madrid, amigos.", "Друзьям в Испании — **vosotros**.", 2, "es2-sois"]
];
const ES2_DESC = [
  ["ruso → rusa · italiano → italiana. А americano?", "americana", ["americane", "americanas"], "**-o → -a**.", 3, "es2-nacionalidad-genero"],
  ["español → española · inglés → inglesa. А francés?", "francesa", ["francés", "francésa"], "Согласная → **+a**, без знака.", 3, "es2-nacionalidad-genero"],
  ["libro → libros · casa → casas. А ciudad?", "ciudades", ["ciudads", "ciudadas"], "На согласную — **-es**.", 6, "es2-plural"],
  ["veinte + uno → veintiuno · veinte + dos → veintidós. А veinte + tres?", "veintitrés", ["veintitres", "veinte y tres"], "Со знаком: **veintitrés**.", 5, "es2-veinti"],
  ["el padre → los padres · el hijo → los hijos. А el hermano?", "los hermanos", ["las hermanos", "los hermanas"], "**los hermanos**.", 7, "es2-padres"]
];
const ES2_CAD = [
  ["Soy de Moscú.", [["Теперь: ella.", "Ella es de Moscú."], ["Теперь: nosotros.", "Somos de Moscú."]], 3, "es2-ser-de"],
  ["El libro es nuevo.", [["Теперь: мн. ч.", "Los libros son nuevos."], ["Теперь: la casa.", "La casa es nueva."]], 6, "es2-concordancia"],
  ["Me llamo Ana.", [["Теперь: о ней (ella).", "Se llama Ana."], ["Теперь: вопрос «как тебя зовут?»", "¿Cómo te llamas?"]], 4, "es2-llamarse"],
  ["Pablo es español.", [["Теперь: Lucía.", "Lucía es española."], ["Теперь: Pablo y Lucía.", "Pablo y Lucía son españoles."]], 3, "es2-nacionalidad-genero"]
];
const ES2_DIAG = [
  ["Soy un profesor.", "Профессия — без артикля", ["Нужно es", "Нужно la"], "Soy profesor.", 2, "es2-profesion"],
  ["Soy veinte años.", "Возраст — tener", ["Нужно veintiún", "Нужно de"], "Tengo veinte años.", 4, "es2-edad"],
  ["Ana es Rusa.", "Национальность — с маленькой буквы", ["Нужно ruso", "Нужно está"], "Ana es rusa.", 3, "es2-nacionalidad-genero"],
  ["Mi padres son de Moscú.", "Мн. ч. — mis", ["Нужно es", "Нужно la"], "Mis padres son de Moscú.", 7, "es2-padres"],
  ["¿Dónde eres de?", "Предлог — в начале", ["Нужно estás", "Нужно qué"], "¿De dónde eres?", 8, "es2-de-donde"],
  ["La libro es nueva.", "Libro — м. р.", ["Нужно son", "Нужно una"], "El libro es nuevo.", 6, "es2-genero"]
];
const ES2_DES = [
  ["Me llamo Ana y soy de Moscú", [["Как зовут?", 2], ["Откуда?", 6], ["Какое слово — ser?", 4]], 3, "es2-ser-de"],
  ["Mi hermano tiene veinte años", [["Кто?", 1], ["Сколько лет?", 3], ["Какое слово — tener?", 2]], 4, "es2-edad"]
];
UNIDAD_ES_2.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES2_MAS[s.id] && !s.mas) s.mas = ES2_MAS[s.id]; }));

function es2Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES2-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES2_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES2_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES2_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oid-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES2_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES2_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("dsc-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES2_CAD.forEach(([base, pasos, mod, regla], i) => P("cdn-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES2_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES2_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
}
Object.assign(ES2_MEZCLA, { natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1 });
