/* ============================================================
   DATA-UNIDAD-ES-3.JS — Abecé · Урок 3: Мир вокруг меня
   (Mi mundo cotidiano). Borrador, 02/11/2026.
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U3):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-2.js (ver su cabecera):
     · ejemplos { es, ru, por }: es = la frase en español, ru = la traducción;
     · tablas [{ titulo, encabezados, filas }]: celdas { es, ru? } (AzTablaGrupos);
     · vocab: palabras (se pasan a IDs con es3Id).
   Vocabulario aprobado por Manu el 02/11/2026 (unas 150 palabras nuevas;
   estantería, lavadora y antipático, entradas nuevas del léxico).
   Decisiones (Manu, 02/11/2026): cuarto y segundo como ordinales, bajo como
   adjetivo, planta con sus dos sentidos; rosa y naranja como colores que no
   cambian; mío / tuyo / suyo y listo quedan para más adelante.
   ============================================================ */

const ES3_PRON = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (на «ты»)"], ["ellos / ellas / ustedes", "они / вы"]];
const es3Tabla = (formas) => ES3_PRON.map(([p, r], i) => [{ es: p, ru: r }, { es: formas[i] }]);

const UNIDAD_ES_3 = {
  id: 3,
  titulo: "Мир вокруг меня",
  tituloEs: "Mi mundo cotidiano",
  objetivo: "Описать квартиру, район и город, рассказать, что где находится, какие предметы вокруг и в каком они состоянии.",
  tiempo: "3–4 недели ежедневной практики (примерно 15–20 часов)",
  modulos: [
    {
      id: "es3m1", n: 1, tipo: "leccion",
      titulo: "Hay…",
      resumen: "Hay — «есть, имеется»: что есть в разных местах.",
      intro: "Чтобы сказать, что где-то **что-то есть**, в испанском одно короткое слово — **hay** (читается «ай»). Оно не меняется: **Hay un banco** и **Hay diez bancos**.",
      tablas: [{ titulo: "Hay", encabezados: ["Hay…", "По-русски"], filas: [
        [{ es: "Hay un banco.", ru: "Есть (один) банк." }, { es: "Hay una farmacia.", ru: "Есть аптека." }],
        [{ es: "Hay dos bancos.", ru: "Есть два банка." }, { es: "Hay unas tiendas.", ru: "Есть несколько магазинов." }],
        [{ es: "¿Hay un bar?", ru: "Здесь есть бар?" }, { es: "No hay metro.", ru: "Метро нет." }]] }],
      secciones: [
        {
          id: "es3-hay",
          titulo: "Одна форма для всего",
          texto: "**Hay** — это форма глагола **haber**, но пока её достаточно знать как готовое слово. Она одна и для единственного, и для множественного числа: **Hay un sofá**, **Hay dos sillas**. Вопрос — та же фраза с вопросительной интонацией: **¿Hay un banco cerca?**",
          ejemplos: [
            { es: "En mi calle hay un bar y una farmacia.", ru: "На моей улице есть бар и аптека." },
            { es: "¿Hay ascensor?", ru: "Лифт есть?", por: "В вопросе и с «нет» артикль часто не ставят." }
          ],
          comparacion: "В русском «есть» часто пропускают: «На столе — книга». В испанском **hay** нужен всегда: **En la mesa hay un libro**."
        },
        {
          id: "es3-hay-articulo",
          titulo: "После hay — un, una, числа",
          texto: "После **hay** идёт что-то новое, о чём ещё не говорили: **un**, **una**, **unos**, **unas**, число или **mucho**: **Hay un parque**, **Hay tres sillas**, **Hay muchos bares**. **El** и **la** после **hay** не ставят.",
          errores: [
            { mal: "Hay el banco en la plaza.", bien: "Hay un banco en la plaza.", por: "После **hay** — **un / una**, а не **el / la**." },
            { mal: "El banco hay en la plaza.", bien: "En la plaza hay un banco.", por: "**hay** не ставят после того, что есть: сначала место или **hay**, потом предмет." }
          ],
          chequeo: [
            { pide: "«В комнате есть кровать»", opciones: ["En la habitación hay una cama.", "En la habitación hay la cama.", "La cama hay en la habitación."], ok: "En la habitación hay una cama.", por: "**hay** + **una**." }
          ]
        },
        {
          id: "es3-no-hay",
          titulo: "No hay — «нет»",
          texto: "«Нет» — **no hay**. После **no hay** артикль обычно не ставят: **No hay ascensor**, **No hay farmacia**. Во множественном числе — тоже без артикля: **No hay tiendas**.",
          ejemplos: [
            { es: "En mi barrio no hay metro.", ru: "В моём районе нет метро." }
          ]
        },
        {
          id: "es3-que-hay",
          titulo: "¿Qué hay…?",
          texto: "**¿Qué hay en tu bolso?** — «Что у тебя в сумке?» (дословно «что есть в твоей сумке»). Ответ — с **hay**: **Hay un móvil, unas gafas y una llave**.",
          ejemplos: [
            { es: "— ¿Qué hay en tu mochila? — Hay un libro y una taza.", ru: "— Что у тебя в рюкзаке? — Книга и чашка." }
          ]
        }
      ],
      frases: ["FRE-048", "FRE-049"],
      vocab: ["hay", "cosa", "móvil", "gafas", "bolso", "mochila", "taza", "plato"]
    },
    {
      id: "es3m2", n: 2, tipo: "leccion",
      titulo: "¿Dónde está?",
      resumen: "Estar: где находится то, что мы уже знаем. Hay или está.",
      intro: "**Hay** говорит, **что** где-то есть. А чтобы сказать, **где** находится конкретная, уже известная вещь, нужен глагол **estar**: **El banco está en la plaza**. Это одна из самых важных пар в испанском.",
      tablas: [{ titulo: "Estar — настоящее время", encabezados: ["Кто", "Форма"], filas: es3Tabla(["estoy", "estás", "está", "estamos", "estáis", "están"]) }],
      secciones: [
        {
          id: "es3-estar-donde",
          titulo: "Estar — где находится",
          texto: "**¿Dónde está…?** — «Где…?»: **¿Dónde está la farmacia?** — **Está en la plaza**. Если вещей несколько — **están**: **¿Dónde están mis llaves?** И о людях: **Ana está en casa** — «Аня дома».",
          ejemplos: [
            { es: "— ¿Dónde está Lucía? — Está en la cocina.", ru: "— Где Лусия? — На кухне." },
            { es: "Las llaves están en el bolso.", ru: "Ключи в сумке.", por: "**las llaves** — несколько: **están**." }
          ],
          ojo: "У **estar** знак ударения в **estás**, **está**, **estáis**, **están**. Без него **esta** — это «эта»: **esta casa**."
        },
        {
          id: "es3-hay-esta",
          titulo: "Hay или está",
          texto: "· **hay** + **un / una**, число — когда вещь новая, неизвестная: **Hay un banco en la plaza** («на площади есть банк»);\n· **el / la**, **mi / tu**, имя + **está** — когда вещь известная, конкретная: **El banco está en la plaza** («банк — на площади»).",
          destacado: "Новое — **hay un…**. Известное — **el… está**.",
          errores: [
            { mal: "Está un banco en la plaza.", bien: "Hay un banco en la plaza.", por: "С **un** — неизвестный банк: **hay**." },
            { mal: "El banco es en la plaza.", bien: "El banco está en la plaza.", por: "Где находится — **estar**, а не **ser**." }
          ],
          chequeo: [
            { pide: "«Где аптека?»", opciones: ["¿Dónde está la farmacia?", "¿Dónde hay la farmacia?", "¿Dónde es la farmacia?"], ok: "¿Dónde está la farmacia?", por: "Конкретная аптека — **está**." },
            { pide: "«Здесь есть аптека?»", opciones: ["¿Hay una farmacia aquí?", "¿Está una farmacia aquí?"], ok: "¿Hay una farmacia aquí?", por: "Любая аптека — **hay una**." }
          ]
        },
        {
          id: "es3-aqui",
          titulo: "Aquí, ahí, allí",
          texto: "В испанском три «здесь — там»:\n· **aquí** — здесь, рядом со мной;\n· **ahí** — там, обычно рядом с тобой или недалеко;\n· **allí** — там, далеко от нас обоих.",
          ejemplos: [
            { es: "— ¿Dónde está mi móvil? — Ahí, en la mesa.", ru: "— Где мой телефон? — Вон там, на столе." }
          ],
          ojo: "**ahí** и **allí** пишутся со знаком ударения: **a-HÍ**, **a-LLÍ**."
        },
        {
          id: "es3-cerca",
          titulo: "Cerca и lejos",
          texto: "**cerca** — «близко», **lejos** — «далеко»: **¿Está lejos?** — **No, está cerca**. Если говоришь, от чего, добавь **de**: **cerca de la plaza**, **lejos del centro**.",
          ejemplos: [
            { es: "Mi piso está cerca de la playa.", ru: "Моя квартира недалеко от пляжа." }
          ]
        }
      ],
      frases: ["FRE-050", "FRE-051", "FRE-052"],
      vocab: ["estar", "aquí", "ahí", "allí", "cerca", "lejos", "cerca de", "lejos de"],
      dialogos: ["DLE-011"]
    },
    {
      id: "es3m3", n: 3, tipo: "leccion",
      titulo: "Encima, debajo…",
      resumen: "Где именно: на, под, перед, за, рядом, между.",
      intro: "Русские предлоги места требуют разных падежей («на столе», «под столом», «за домом»). В испанском существительные по падежам не изменяются: отношения между словами показывают предлоги. Многие предлоги места состоят из нескольких слов и кончаются на **de**.",
      tablas: [{ titulo: "Где именно", encabezados: ["Испанский", "По-русски"], filas: [
        [{ es: "en", ru: "в, на" }, { es: "encima de", ru: "на, сверху" }],
        [{ es: "debajo de", ru: "под" }, { es: "dentro de", ru: "внутри, в" }],
        [{ es: "delante de", ru: "перед" }, { es: "detrás de", ru: "за, позади" }],
        [{ es: "al lado de", ru: "рядом с" }, { es: "enfrente de", ru: "напротив" }],
        [{ es: "entre… y…", ru: "между… и…" }, { es: "fuera de", ru: "снаружи, вне" }],
        [{ es: "a la izquierda de", ru: "слева от" }, { es: "a la derecha de", ru: "справа от" }]] }],
      secciones: [
        {
          id: "es3-en",
          titulo: "En — и «в», и «на»",
          texto: "**en** — самый частый предлог места: **en la cocina** («на кухне»), **en el bolso** («в сумке»), **en la mesa** («на столе»), **en Barcelona** («в Барселоне»). Если нужно подчеркнуть «сверху», говорят **encima de la mesa**.",
          comparacion: "Русские «в» и «на» по-испански обычно одно слово — **en**."
        },
        {
          id: "es3-del-al",
          titulo: "De + el = del, a + el = al",
          texto: "**de** + **el** сливаются в **del**: **al lado del banco**, **cerca del parque**. **a** + **el** — в **al**: a + el lado → **al lado**. С **la**, **los**, **las** ничего не сливается: **al lado de la farmacia**, **cerca de los bares**.",
          errores: [
            { mal: "al lado de el banco", bien: "al lado del banco", por: "**de** + **el** = **del**." }
          ],
          chequeo: [
            { pide: "Рядом с парком:", opciones: ["al lado del parque", "al lado de el parque", "al lado de parque"], ok: "al lado del parque", por: "**de** + **el** = **del**." }
          ]
        },
        {
          id: "es3-izquierda",
          titulo: "A la izquierda, a la derecha",
          texto: "«Слева» — **a la izquierda**, «справа» — **a la derecha**. От чего — с **de**: **a la izquierda del bar**. А **enfrente de** — «напротив»: **enfrente de la iglesia**.",
          ejemplos: [
            { es: "La farmacia está a la derecha del banco.", ru: "Аптека справа от банка." },
            { es: "El bar está enfrente de la estación.", ru: "Бар напротив вокзала." }
          ]
        },
        {
          id: "es3-entre",
          titulo: "Entre… y…",
          texto: "**entre** — «между»: **entre el banco y la farmacia**. После **entre** — без **de**.",
          errores: [
            { mal: "entre de la mesa y la silla", bien: "entre la mesa y la silla", por: "После **entre** не нужно **de**." }
          ]
        }
      ],
      frases: ["FRE-053", "FRE-054"],
      vocab: ["en", "de", "a", "al", "del", "encima", "debajo", "delante", "detrás", "lado", "entre", "dentro", "fuera", "enfrente", "izquierda", "derecha", "encima de", "debajo de", "delante de", "detrás de", "al lado de", "dentro de", "fuera de", "a la izquierda", "a la derecha"],
      dialogos: ["DLE-013"]
    },
    {
      id: "es3m4", n: 4, tipo: "leccion",
      titulo: "Mi casa",
      resumen: "Комнаты, мебель и вещи; этажи.",
      intro: "В Испании большинство людей живёт в квартирах: **el piso**. Здесь — комнаты, мебель и вещи, а ещё — как сказать, на каком этаже ты живёшь (испанцы считают этажи не так, как русские).",
      tablas: [
        { titulo: "Комнаты и части квартиры", encabezados: ["", ""], filas: [
          [{ es: "el piso", ru: "квартира" }, { es: "la habitación", ru: "комната" }],
          [{ es: "el dormitorio", ru: "спальня" }, { es: "el salón", ru: "гостиная" }],
          [{ es: "la cocina", ru: "кухня" }, { es: "el baño", ru: "ванная, туалет" }],
          [{ es: "el comedor", ru: "столовая" }, { es: "el pasillo", ru: "коридор" }],
          [{ es: "la terraza", ru: "терраса" }, { es: "el balcón", ru: "балкон" }],
          [{ es: "la ventana", ru: "окно" }, { es: "la puerta", ru: "дверь" }],
          [{ es: "la pared", ru: "стена" }, { es: "el suelo", ru: "пол" }],
          [{ es: "el techo", ru: "потолок" }, { es: "la escalera", ru: "лестница" }],
          [{ es: "el ascensor", ru: "лифт" }, { es: "la planta", ru: "этаж; растение" }]] },
        { titulo: "Мебель и вещи", encabezados: ["", ""], filas: [
          [{ es: "la mesa", ru: "стол" }, { es: "la silla", ru: "стул" }],
          [{ es: "el sofá", ru: "диван" }, { es: "la cama", ru: "кровать" }],
          [{ es: "el armario", ru: "шкаф" }, { es: "la estantería", ru: "стеллаж, полка" }],
          [{ es: "la lámpara", ru: "лампа" }, { es: "el espejo", ru: "зеркало" }],
          [{ es: "la alfombra", ru: "ковёр" }, { es: "el cuadro", ru: "картина" }],
          [{ es: "la televisión", ru: "телевизор" }, { es: "el ordenador", ru: "компьютер" }],
          [{ es: "la nevera", ru: "холодильник" }, { es: "la lavadora", ru: "стиральная машина" }],
          [{ es: "la ducha", ru: "душ" }, { es: "la bañera", ru: "ванна" }]] },
        { titulo: "Порядковые числа", encabezados: ["", ""], filas: [
          [{ es: "primero (1.º)", ru: "первый" }, { es: "segundo (2.º)", ru: "второй" }],
          [{ es: "tercero (3.º)", ru: "третий" }, { es: "cuarto (4.º)", ru: "четвёртый" }],
          [{ es: "quinto (5.º)", ru: "пятый" }, { es: "sexto (6.º)", ru: "шестой" }],
          [{ es: "séptimo (7.º)", ru: "седьмой" }, { es: "octavo (8.º)", ru: "восьмой" }],
          [{ es: "noveno (9.º)", ru: "девятый" }, { es: "décimo (10.º)", ru: "десятый" }]] }
      ],
      secciones: [
        {
          id: "es3-piso",
          titulo: "Piso и casa",
          texto: "**el piso** — квартира (и этаж). **la casa** — дом, но и вообще «жильё»: **en casa** — «дома», **mi casa** — «мой дом, моя квартира». **la habitación** — любая комната, а в квартире чаще говорят о спальне: **un piso de dos habitaciones** — «двухкомнатная квартира» (две спальни, а гостиная — отдельно).",
          ejemplos: [
            { es: "Vivo en un piso pequeño.", ru: "Я живу в маленькой квартире." },
            { es: "Lucía está en casa.", ru: "Лусия дома.", por: "**en casa** — без артикля." }
          ],
          ojo: "**el baño** — и ванная, и туалет: в испанской квартире это обычно одна комната."
        },
        {
          id: "es3-plantas",
          titulo: "Этажи: planta baja",
          texto: "В Испании счёт этажей начинается с **la planta baja** («нижний этаж») — это первый этаж по-русски, а **el primero** по-русски уже второй. Поэтому **Vivo en el tercero** — «я живу на третьем» по-испански, а по-русски это четвёртый этаж.",
          ejemplos: [
            { es: "— ¿En qué piso vives? — En el tercero.", ru: "— На каком этаже ты живёшь? — На третьем.", por: "**piso** здесь — «этаж»." }
          ],
          ojo: "В адресе обычно указывают этаж и квартиру, например: **Calle Mayor, 5, 3.º 2.ª** — «улица Майор, дом 5, третий этаж, вторая квартира» (**tercero, segunda**)."
        },
        {
          id: "es3-primer",
          titulo: "Primer, tercer",
          texto: "Порядковое число — это прилагательное: **la segunda puerta**, **el quinto piso**. Перед существительным мужского рода **primero** и **tercero** теряют **-o**: **el primer piso**, **el tercer piso**. Без существительного — полная форма: **Vivo en el primero**.",
          errores: [
            { mal: "el primero piso", bien: "el primer piso", por: "Перед существительным мужского рода — **primer**." }
          ],
          chequeo: [
            { pide: "«Третья дверь»", opciones: ["la tercera puerta", "la tercer puerta", "el tercer puerta"], ok: "la tercera puerta", por: "**puerta** — женский род: **tercera**. **tercer** — только перед мужским родом." }
          ]
        }
      ],
      frases: ["FRE-055", "FRE-056", "FRE-057"],
      vocab: ["casa", "piso", "habitación", "dormitorio", "salón", "cocina", "baño", "comedor", "terraza", "balcón", "pasillo", "ventana", "puerta", "pared", "suelo", "techo",
        "escalera", "ascensor", "planta", "mesa", "silla", "sofá", "cama", "armario", "estantería", "lámpara", "espejo", "alfombra", "televisión", "ordenador", "nevera", "lavadora",
        "ducha", "bañera", "cuadro", "primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo"],
      dialogos: ["DLE-012"]
    },
    {
      id: "es3m5", n: 5, tipo: "leccion",
      titulo: "Mi barrio y mi ciudad",
      resumen: "Места в городе: что есть в твоём районе.",
      intro: "Магазины, аптека, метро, парк: всё, что есть (или нет) в твоём районе. Многие слова тебе уже знакомы — это интернационализмы: **banco**, **museo**, **hotel**, **metro**. А главный вопрос — **¿Qué hay en tu barrio?**",
      tablas: [{ titulo: "Места", encabezados: ["", ""], filas: [
        [{ es: "el barrio", ru: "район" }, { es: "el centro", ru: "центр" }],
        [{ es: "la calle", ru: "улица" }, { es: "la plaza", ru: "площадь" }],
        [{ es: "el edificio", ru: "здание" }, { es: "la oficina", ru: "офис" }],
        [{ es: "el banco", ru: "банк" }, { es: "la farmacia", ru: "аптека" }],
        [{ es: "la tienda", ru: "магазин" }, { es: "el supermercado", ru: "супермаркет" }],
        [{ es: "el mercado", ru: "рынок" }, { es: "el bar", ru: "бар" }],
        [{ es: "la cafetería", ru: "кафе" }, { es: "el restaurante", ru: "ресторан" }],
        [{ es: "el hotel", ru: "гостиница" }, { es: "el hospital", ru: "больница" }],
        [{ es: "la escuela", ru: "школа" }, { es: "el colegio", ru: "школа (для детей)" }],
        [{ es: "la universidad", ru: "университет" }, { es: "la biblioteca", ru: "библиотека" }],
        [{ es: "el museo", ru: "музей" }, { es: "el teatro", ru: "театр" }],
        [{ es: "el cine", ru: "кинотеатр" }, { es: "la iglesia", ru: "церковь" }],
        [{ es: "el parque", ru: "парк" }, { es: "el gimnasio", ru: "спортзал" }],
        [{ es: "la estación", ru: "вокзал, станция" }, { es: "el metro", ru: "метро" }],
        [{ es: "la parada", ru: "остановка" }, { es: "el autobús", ru: "автобус" }],
        [{ es: "la playa", ru: "пляж" }, { es: "el mar", ru: "море" }],
        [{ es: "la montaña", ru: "гора" }, { es: "el río", ru: "река" }]] }],
      secciones: [
        {
          id: "es3-barrio",
          titulo: "¿Qué hay en tu barrio?",
          texto: "Это обычный вопрос при знакомстве с городом. Ответ — с **hay**: **En mi barrio hay un mercado, muchos bares y una biblioteca**. Чего нет — **no hay**: **No hay metro**.",
          ejemplos: [
            { es: "En el centro hay muchos museos.", ru: "В центре много музеев." }
          ]
        },
        {
          id: "es3-de-compuesto",
          titulo: "La parada de autobús",
          texto: "Когда одно существительное уточняет другое, между ними ставят **de**: **la parada de autobús** («автобусная остановка»), **la estación de metro** («станция метро»), **el piso de Ana** («квартира Ани»). Порядок обратный русскому: сначала главное слово.",
          comparacion: "Русское «автобусная остановка» или «остановка автобуса» — по-испански дословно «остановка **de** автобус», без прилагательного и без падежа."
        },
        {
          id: "es3-bar",
          titulo: "Bar, cafetería, colegio",
          texto: "**el bar** в Испании — обычно не ночной клуб, а небольшое заведение, где пьют кофе, завтракают и едят тапас. **la cafetería** — похожее место, больше для кофе и лёгкой еды. **el colegio** — школа для детей, а **la escuela** — и школа, и «школа чего-то»: **una escuela de idiomas** — языковая школа."
        }
      ],
      frases: ["FRE-058"],
      vocab: ["barrio", "ciudad", "centro", "calle", "plaza", "edificio", "oficina", "banco", "farmacia", "tienda", "supermercado", "mercado", "bar", "cafetería", "restaurante",
        "hotel", "hospital", "escuela", "colegio", "universidad", "biblioteca", "museo", "teatro", "cine", "iglesia", "parque", "gimnasio", "estación", "metro", "parada", "autobús",
        "playa", "mar", "montaña", "río"],
      dialogos: ["DLE-010"]
    },
    {
      id: "es3m6", n: 6, tipo: "leccion",
      titulo: "¿Cómo es?",
      resumen: "Прилагательные: цвет, размер, форма. Muy и mucho.",
      intro: "Чтобы описать квартиру или улицу, нужны прилагательные. В испанском у них два важных отличия от русского: прилагательное обычно стоит **после** существительного и согласуется с ним в роде и числе.",
      tablas: [
        { titulo: "Цвета", encabezados: ["Мужской / женский", "Множественное"], filas: [
          [{ es: "blanco / blanca", ru: "белый" }, { es: "blancos / blancas" }],
          [{ es: "negro / negra", ru: "чёрный" }, { es: "negros / negras" }],
          [{ es: "rojo / roja", ru: "красный" }, { es: "rojos / rojas" }],
          [{ es: "amarillo / amarilla", ru: "жёлтый" }, { es: "amarillos / amarillas" }],
          [{ es: "morado / morada", ru: "фиолетовый" }, { es: "morados / moradas" }],
          [{ es: "verde", ru: "зелёный" }, { es: "verdes" }],
          [{ es: "azul", ru: "синий, голубой" }, { es: "azules" }],
          [{ es: "gris", ru: "серый" }, { es: "grises" }],
          [{ es: "marrón", ru: "коричневый" }, { es: "marrones" }],
          [{ es: "rosa", ru: "розовый" }, { es: "rosa" }],
          [{ es: "naranja", ru: "оранжевый" }, { es: "naranja" }]] },
        { titulo: "Какой", encabezados: ["", ""], filas: [
          [{ es: "grande", ru: "большой" }, { es: "pequeño", ru: "маленький" }],
          [{ es: "nuevo", ru: "новый" }, { es: "viejo", ru: "старый" }],
          [{ es: "moderno", ru: "современный" }, { es: "antiguo", ru: "старинный" }],
          [{ es: "bonito", ru: "красивый" }, { es: "feo", ru: "некрасивый" }],
          [{ es: "alto", ru: "высокий" }, { es: "bajo", ru: "низкий" }],
          [{ es: "largo", ru: "длинный" }, { es: "corto", ru: "короткий" }],
          [{ es: "redondo", ru: "круглый" }, { es: "cuadrado", ru: "квадратный" }],
          [{ es: "caro", ru: "дорогой" }, { es: "barato", ru: "дешёвый" }],
          [{ es: "tranquilo", ru: "тихий, спокойный" }, { es: "ruidoso", ru: "шумный" }],
          [{ es: "luminoso", ru: "светлый" }, { es: "oscuro", ru: "тёмный" }],
          [{ es: "limpio", ru: "чистый" }, { es: "sucio", ru: "грязный" }],
          [{ es: "cómodo", ru: "удобный" }, null]] }
      ],
      secciones: [
        {
          id: "es3-despues",
          titulo: "Прилагательное — после",
          texto: "По-русски «красная машина», по-испански — «машина красная»: **un coche rojo**, **una casa grande**, **un barrio tranquilo**. Цвет, форма, национальность в обычном описании ставятся после.",
          errores: [
            { mal: "un rojo coche", bien: "un coche rojo", por: "Прилагательное — после существительного." }
          ],
          ojo: "Несколько частых прилагательных иногда ставят и перед словом (**un gran piso**), но для начала запомни правило: после."
        },
        {
          id: "es3-adj-concordancia",
          titulo: "Согласование",
          texto: "· на **-o** — четыре формы: **pequeño, pequeña, pequeños, pequeñas**;\n· на **-e** и на согласную — две формы, без рода: **grande, grandes**; **verde, verdes**; **azul, azules**; **gris, grises**;\n· **rosa** и **naranja** как названия цвета обычно не меняются: **las paredes rosa**, **un sofá naranja** — это названия цветка и фрукта.",
          ejemplos: [
            { es: "una cocina pequeña y unas ventanas grandes", ru: "маленькая кухня и большие окна" },
            { es: "dos sillas azules", ru: "два синих стула", por: "на согласную — **-es**." }
          ],
          ojo: "**marrón** теряет знак ударения во множественном: **marrones** — ударение уже по правилу.",
          chequeo: [
            { pide: "«Белые стены»", opciones: ["las paredes blancas", "las paredes blancos", "las blancas paredes"], ok: "las paredes blancas", por: "**pared** — женский род: **blancas**, и прилагательное после." }
          ]
        },
        {
          id: "es3-muy-mucho",
          titulo: "Muy и mucho",
          texto: "· **muy** — «очень» перед прилагательным: **muy grande**, **muy bonito**; не меняется;\n· **mucho** — «много» перед существительным, согласуется: **mucha agua**, **muchos bares**, **muchas tiendas**.\n**bastante** — «довольно»: **bastante grande**.",
          errores: [
            { mal: "Es mucho grande.", bien: "Es muy grande.", por: "Перед прилагательным — **muy**." },
            { mal: "Hay muy bares.", bien: "Hay muchos bares.", por: "Перед существительным — **muchos**." }
          ],
          chequeo: [
            { pide: "«Квартира очень светлая»", opciones: ["El piso es muy luminoso.", "El piso es mucho luminoso."], ok: "El piso es muy luminoso.", por: "**muy** + прилагательное." }
          ]
        },
        {
          id: "es3-color",
          titulo: "¿De qué color es?",
          texto: "«Какого цвета?» — **¿De qué color es?** (дословно «из какого цвета»). Ответ — **Es rojo**, **Son blancas**. А «Какой он?» — **¿Cómo es?**: **Es grande y muy bonito**.",
          ejemplos: [
            { es: "— ¿De qué color es tu sofá? — Es gris.", ru: "— Какого цвета твой диван? — Серый." }
          ]
        }
      ],
      frases: ["FRE-059"],
      vocab: ["color", "blanco", "negro", "rojo", "azul", "verde", "amarillo", "gris", "marrón", "rosa", "naranja", "morado",
        "grande", "pequeño", "nuevo", "viejo", "moderno", "antiguo", "bonito", "feo", "alto", "bajo", "largo", "corto", "redondo", "cuadrado", "caro", "barato",
        "tranquilo", "ruidoso", "luminoso", "oscuro", "limpio", "sucio", "cómodo", "muy", "mucho", "bastante"]
    },
    {
      id: "es3m7", n: 7, tipo: "leccion",
      titulo: "Ser y estar",
      resumen: "Какой он по своим характеристикам и в каком он состоянии.",
      intro: "По-русски «он весёлый» и «он сегодня весёлый» — один глагол (или никакого). По-испански «быть» — два глагола: **ser** — кто это и какой он по своим **характеристикам**, **estar** — где он находится и в каком он **состоянии**.",
      tablas: [{ titulo: "Ser или estar", encabezados: ["Ser — характеристика", "Estar — состояние"], filas: [
        [{ es: "Es simpático.", ru: "Он приятный человек." }, { es: "Está cansado.", ru: "Он устал." }],
        [{ es: "Es alta.", ru: "Она высокая." }, { es: "Está contenta.", ru: "Она довольна." }],
        [{ es: "Es una tienda grande.", ru: "Это большой магазин." }, { es: "La tienda está cerrada.", ru: "Магазин закрыт." }],
        [{ es: "Es aburrido.", ru: "Он скучный." }, { es: "Está aburrido.", ru: "Ему скучно." }]] }],
      secciones: [
        {
          id: "es3-ser-estar",
          titulo: "Характеристика или состояние",
          texto: "· **ser** — характер, внешность, описание, то, что обычно не меняется: **Javier es simpático**, **Ana es alta**, **El piso es grande**;\n· **estar** — состояние, результат, то, что может измениться: **Ana está cansada**, **La puerta está abierta**, **La cocina está sucia**.",
          destacado: "Какой он **есть** — **ser**. Как он **сейчас** — **estar**. И где он — тоже **estar**.",
          errores: [
            { mal: "Soy cansada.", bien: "Estoy cansada.", por: "Усталость — состояние: **estar**." },
            { mal: "La farmacia es cerrada.", bien: "La farmacia está cerrada.", por: "Закрыта сейчас — **estar**." }
          ],
          chequeo: [
            { pide: "«Лусия сегодня грустная»", opciones: ["Lucía está triste hoy.", "Lucía es triste hoy."], ok: "Lucía está triste hoy.", por: "Сегодня, сейчас — **estar**." }
          ]
        },
        {
          id: "es3-estados",
          titulo: "Слова для estar",
          texto: "С **estar** обычно говорят: **cansado** (усталый), **contento** (довольный), **triste** (грустный), **enfadado** (сердитый), **nervioso** (взволнованный), **enfermo** (больной), **ocupado** (занятой, занят), **abierto / cerrado** (открыт / закрыт), **lleno / vacío** (полный / пустой).",
          ejemplos: [
            { es: "El bar está lleno.", ru: "Бар полный." },
            { es: "¿Estás ocupado?", ru: "Ты занят?" }
          ],
          ojo: "Эти слова тоже согласуются: **Javier está cansado**, **Ana está cansada**, **Estamos cansados**."
        },
        {
          id: "es3-caracter",
          titulo: "Слова для ser",
          texto: "С **ser** — характер и внешность: **simpático / antipático** (приятный / неприятный), **amable** (любезный), **inteligente** (умный), **divertido / aburrido** (весёлый / скучный), **guapo** (красивый — о человеке), **alto / bajo** (высокий / невысокий).",
          ojo: "**simpático** — не «симпатичный» внешне, а «приятный в общении». О внешности — **guapo**: **Pablo es guapo y muy simpático**."
        },
        {
          id: "es3-cambia",
          titulo: "Одно слово — два смысла",
          texto: "Некоторые прилагательные меняют смысл: **Es aburrido** — «он скучный (человек)», **Está aburrido** — «ему скучно». **La cocina es limpia** звучит странно: о чистоте сейчас говорят **está limpia**.",
          chequeo: [
            { pide: "«Ему скучно»", opciones: ["Está aburrido.", "Es aburrido."], ok: "Está aburrido.", por: "Сейчас скучно — **estar**. **Es aburrido** — «он скучный»." }
          ]
        }
      ],
      frases: ["FRE-060", "FRE-061"],
      vocab: ["simpático", "antipático", "amable", "inteligente", "divertido", "aburrido", "guapo",
        "cansado", "contento", "triste", "enfadado", "nervioso", "enfermo", "ocupado", "abierto", "cerrado", "lleno", "vacío"],
      dialogos: ["DLE-014"]
    },
    {
      id: "es3m8", n: 8, tipo: "leccion",
      titulo: "Este, ese, aquel · mi, tu, su",
      resumen: "Этот, тот и вон тот; мой, твой, наш. ¿Cuál?",
      intro: "Русскому «этот — тот» в испанском соответствуют три слова, как **aquí — ahí — allí**. А притяжательные слова (**mi**, **tu**, **nuestro**) согласуются не с тем, кто владеет, а с самой вещью.",
      tablas: [
        { titulo: "Этот, тот", encabezados: ["Ед. ч. (м / ж)", "Мн. ч. (м / ж)"], filas: [
          [{ es: "este / esta", ru: "этот, эта (здесь)" }, { es: "estos / estas" }],
          [{ es: "ese / esa", ru: "этот, тот (там, у тебя)" }, { es: "esos / esas" }],
          [{ es: "aquel / aquella", ru: "тот, та (далеко)" }, { es: "aquellos / aquellas" }]] },
        { titulo: "Мой, твой, наш", encabezados: ["Одна вещь", "Несколько вещей"], filas: [
          [{ es: "mi", ru: "мой, моя" }, { es: "mis" }],
          [{ es: "tu", ru: "твой, твоя" }, { es: "tus" }],
          [{ es: "su", ru: "его, её; ваш (usted)" }, { es: "sus" }],
          [{ es: "nuestro / nuestra", ru: "наш, наша" }, { es: "nuestros / nuestras" }],
          [{ es: "vuestro / vuestra", ru: "ваш (vosotros)" }, { es: "vuestros / vuestras" }],
          [{ es: "su", ru: "их; ваш (ustedes)" }, { es: "sus" }]] }
      ],
      secciones: [
        {
          id: "es3-este-ese",
          titulo: "Este, ese, aquel",
          texto: "· **este** — рядом со мной (**aquí**): **este libro**;\n· **ese** — рядом с тобой или недалеко (**ahí**): **ese bolso**;\n· **aquel** — далеко от нас обоих (**allí**): **aquel edificio**.\nВсе три согласуются: **esta casa**, **esos libros**, **aquellas montañas**.",
          ejemplos: [
            { es: "Este piso es pequeño, pero aquel es muy grande.", ru: "Эта квартира маленькая, а та — очень большая." }
          ],
          ojo: "Раньше без существительного писали со знаком ударения (**éste**). Сейчас знак не ставят: **este**, **ese**, **aquel**."
        },
        {
          id: "es3-posesivos",
          titulo: "Согласуются с вещью",
          texto: "**mi**, **tu**, **su** меняются только по числу: **mi piso**, **mis llaves**. **nuestro** и **vuestro** — и по роду: **nuestra casa**, **nuestros libros**. Род выбирается по вещи, а не по владельцу: Javier говорит **nuestra cocina** — кухня женского рода.",
          errores: [
            { mal: "nuestro casa", bien: "nuestra casa", por: "**casa** — женский род: **nuestra**." },
            { mal: "mi llaves", bien: "mis llaves", por: "Несколько ключей — **mis**." }
          ],
          chequeo: [
            { pide: "«Наши окна»", opciones: ["nuestras ventanas", "nuestros ventanas", "nuestra ventanas"], ok: "nuestras ventanas", por: "**ventanas** — женский род, мн. ч.: **nuestras**." }
          ]
        },
        {
          id: "es3-su",
          titulo: "Su — его, её, их, ваш",
          texto: "**su** — очень много значений: «его», «её», «их» и вежливое «ваш» (**usted**, **ustedes**). Обычно всё понятно из разговора: **Ana y su hermano** — «Аня и её брат».",
          comparacion: "Отдельного слова для «свой» в испанском нет, обычно говорят **su**: «Аня любит свою квартиру» — **Ana… su piso**."
        },
        {
          id: "es3-cual",
          titulo: "¿Cuál? — какой именно",
          texto: "**¿Cuál?** — «который (из этих)?»: **¿Cuál es tu casa?** — **Aquella, la blanca**. Во множественном — **¿Cuáles?** А **¿Qué es?** — «что это?»: **¿Qué es esto?**",
          ejemplos: [
            { es: "— ¿Cuál es tu bolso? — Este, el negro.", ru: "— Которая твоя сумка? — Вот эта, чёрная.", por: "**el negro** — «чёрная (сумка)»: существительное можно не повторять." }
          ]
        }
      ],
      frases: ["FRE-062"],
      vocab: ["este", "ese", "aquel", "mi", "tu", "su", "nuestro", "vuestro", "cuál"]
    },
    {
      id: "es3m9", n: 9, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом. Для тренировки чтения выключи подсказку кириллицей и перевод.",
      dialogos: ["DLE-010", "DLE-011", "DLE-012", "DLE-013", "DLE-014"]
    },
    {
      id: "es3m10", n: 10, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Твоя квартира и твой район.",
      intro: "Напиши по-испански короткий текст (8–12 фраз): где ты живёшь, какая у тебя квартира или комната, что где находится и что есть в твоём районе. Опиши хотя бы одну вещь цветом и одно место — с **estar**. Приложение отмечает, какие пункты ты уже включил в текст.",
      requisitos: [
        { txt: "Где ты живёшь и на каком этаже (vivo en…, en el tercero…)", rx: "(vivo en|primero|primer |segundo|tercero|tercer |cuarto|quinto|sexto|séptimo|octavo|noveno|décimo|planta baja)" },
        { txt: "Что есть (hay…)", rx: "\\bhay\\b" },
        { txt: "Где что находится (… está en / al lado de…)", rx: "\\b(está|están) (en|encima|debajo|delante|detrás|al lado|dentro|fuera|entre|cerca|lejos|enfrente|a la)" },
        { txt: "Предлог места (encima de, al lado de, entre…)", rx: "(encima de|debajo de|delante de|detrás de|al lado de|dentro de|fuera de|enfrente de|cerca de|lejos de|a la izquierda|a la derecha|\\bentre\\b)" },
        { txt: "Описание с ser (es grande, es muy bonito…)", rx: "\\b(es|son) (muy |bastante |un poco )?(grande|pequeñ|nuev|viej|modern|antigu|bonit|fe[oa]|alt[oa]|baj[oa]|larg|cort|redond|cuadrad|car[oa]|barat|tranquil|ruidos|luminos|oscur|cómod)" },
        { txt: "Цвет (blanco, azul…)", rx: "(blanc|negr|roj|azul|verde|amarill|gris|marr[oó]n|rosa|naranja|morad)" },
        { txt: "Твой район (barrio, calle, plaza…)", rx: "(barrio|calle|plaza|ciudad|centro)" },
        { txt: "Мой или наш (mi, mis, nuestro…)", rx: "\\b(mi|mis|nuestro|nuestra|nuestros|nuestras)\\b" }
      ],
      consejos: [
        { rx: "\\b(es|son) (en|encima|debajo|delante|detrás|al lado|cerca|lejos|enfrente)\\b", msg: "Где находится — **estar**: **el banco está en la plaza**, а не «es en»." },
        { rx: "\\b(está|están) (un|una|unos|unas|dos|tres|muchos|muchas)\\b", msg: "Новое, неизвестное — **hay**: **hay un banco**, а не «está un banco»." },
        { rx: "\\bhay (el|la|los|las|mi|mis|tu|tus) ", msg: "Известное — **está**: **mi piso está…**; после **hay** — **un / una**." },
        { rx: "\\bmuch[oa]s? (grande|pequeñ|bonit|nuev|viej|modern|luminos|tranquil|ruidos|car[oa]|barat|cómod)", msg: "Перед прилагательным — **muy**: **muy grande**, а не «mucho grande»." },
        { rx: "\\b(soy|eres|es|somos|son) (cansad|content|enfadad|enferm|ocupad|nervios|abiert|cerrad|llen[oa]|vací)", msg: "Состояние — **estar**: **estoy cansado**, **está cerrada**." },
        { rx: "\\bde el\\b", msg: "**de** + **el** = **del**: **al lado del banco**." },
        { rx: "\\b(un|una|el|la|mi) (grande|pequeñ[oa]|bonit[oa]|nuev[oa]|viej[oa]|roj[oa]|blanc[oa]|negr[oa]|azul|verde) (casa|piso|cocina|habitación|sofá|mesa|silla|barrio|calle|coche|edificio)\\b", msg: "Прилагательное обычно ставят после: **una casa grande**, **un sofá rojo**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es3m11", n: 11, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Hay, estar и ser, место, описание, этот и мой, общение.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Hay, estar и ser", tipos: ["hay-esta", "ser-estar", "ser-estar-escribir", "estar-forma", "error"], n: 4 },
        { nombre: "Где что", tipos: ["preposicion", "lugar", "ordinal"], n: 4 },
        { nombre: "Какой", tipos: ["concordancia", "orden-adjetivo", "muy-mucho", "antonimo"], n: 4 },
        { nombre: "Этот, мой и слова", tipos: ["demostrativo", "posesivo", "pregunta", "dictado"], n: 4 },
        { nombre: "Общение", tipos: ["situacion-frase", "respuesta", "dictado-frase", "ordenar-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs3Modulo(id) { return UNIDAD_ES_3.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_3 = UNIDAD_ES_3;
window.unidadEs3Modulo = unidadEs3Modulo;

/* ── Vocabulario: palabras → IDs ──
   Palabras con dos entradas: hay (haber), este (этот, no «восток»), bajo (низкий, no «под»),
   cuarto y segundo (ordinales, no «комната» ni «секунда»), mucho (el cuantificador). */
const ES3_ID_FIJO = { "hay": "ESP-00012", "este": "ESP-00029", "bajo": "ESP-05187", "cuarto": "ESP-00508", "segundo": "ESP-00258", "mucho": "ESP-00066" };
function es3Id(w) {
  if (ES3_ID_FIJO[w]) return ES3_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es3Vocab(m) { return (m.vocab || []).map(es3Id).filter(Boolean); }
/* Las palabras nuevas de la U3 (sin las que ya enseñaron la U1 y la U2) */
function es3Objetivo() {
  const antes = new Set([].concat(typeof es1Objetivo === "function" ? es1Objetivo() : [], typeof es2Objetivo === "function" ? es2Objetivo() : []));
  const out = [];
  UNIDAD_ES_3.modulos.forEach(m => es3Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs3() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es3Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES3-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.replace("___", ok), explicacion: exp });
  });

  /* 1. Hay o está */
  elegir("he", "hay-esta", ES3_HAY_ESTA, 2, "es3-hay-esta", "Что подходит?", 2, 7);
  /* 2. Formas de estar (escribir) */
  ES3_ESTAR.forEach(([frase, ok, exp], i) => {
    const audio = frase.replace("___", ok);
    out.push({ id: "ES3-ef-" + i, tipo: "estar-forma", forma: "escribir", dificultad: 3, modulo: 2, regla: "es3-estar-donde", grupo: "ef-" + i, lex: lex("estar"),
      pide: "Впиши форму глагола «estar».", grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, completa: audio, oir: audio, explicacion: exp });
  });
  /* 3. Preposiciones de lugar */
  elegir("pp", "preposicion", ES3_PREPOSICIONES, 3, "es3-en", "Что подходит по смыслу?", 2, 17);
  /* 4. Lugar de la casa o de la ciudad (escribir) */
  ES3_LUGARES.forEach(([frase, ok, otras, mod], i) => {
    out.push({ id: "ES3-lu-" + i, tipo: "lugar", forma: "escribir", dificultad: 3, modulo: mod, grupo: "lu-" + ok, lex: lex(ok),
      pide: "Какое это место? Напиши слово.", grande: frase, esperadas: [ok].concat(otras || []), idioma: "es", oir: frase.replace("___", ok),
      explicacion: "**" + frase.replace("___", ok) + "**" });
  });
  /* 5. Ordinales: escribir y oír */
  ES3_ORDINALES.forEach(([cifra, w, frase], i) => {
    out.push({ id: "ES3-or-e-" + i, tipo: "ordinal", forma: "escribir", dificultad: 3, modulo: 4, regla: frase.indexOf("___ piso") >= 0 ? "es3-primer" : "es3-plantas", grupo: "or-" + i, lex: lex(w.replace(/^primer$/, "primero").replace(/^tercer$/, "tercero").replace(/a$/, "o")),
      pide: "Напиши порядковое число словом (" + cifra + ").", grande: frase, esperadas: [w, frase.replace("___", w)], idioma: "es", foco: true, completa: frase.replace("___", w), oir: frase.replace("___", w),
      explicacion: "**" + frase.replace("___", w) + "**" + (/^(primer|tercer)$/.test(w) ? " — перед существительным мужского рода без **-o**." : "") });
  });
  const ORD = ["primero", "segundo", "tercero", "cuarto", "quinto", "sexto", "séptimo", "octavo", "noveno", "décimo"];
  ORD.forEach((w, i) => {
    const mal = baraja(ORD.filter(x => x !== w), i + 61).slice(0, 3);
    out.push({ id: "ES3-or-o-" + i, tipo: "ordinal", forma: "elegir", dificultad: 2, modulo: 4, regla: "es3-plantas", grupo: "or-o-" + i, lex: lex(w),
      pide: "Послушай: какой это этаж?", audio: "Vivo en el " + w + ".", opciones: baraja([(i + 1) + ".º"].concat(mal.map(x => (ORD.indexOf(x) + 1) + ".º")), i + 71),
      correcta: (i + 1) + ".º", oir: "Vivo en el " + w + ".", explicacion: "**" + w + "** — " + (i + 1) + ".º" });
  });
  /* 6. Concordancia de adjetivos (escribir la forma) */
  ES3_CONCORDANCIA.forEach(([frase, base, ok, exp, mod], i) => {
    out.push({ id: "ES3-co-" + i, tipo: "concordancia", forma: "escribir", dificultad: 3, modulo: mod || 6, regla: "es3-adj-concordancia", grupo: "co-" + i, lex: lex(base), formaCasi: false,
      pide: "Впиши «" + base + "» в нужной форме.", grande: frase, esperadas: [ok, frase.replace("___", ok)], idioma: "es", foco: true, completa: frase.replace("___", ok), oir: frase.replace("___", ok), explicacion: exp });
  });
  /* 7. Orden: el adjetivo va después */
  ES3_ORDEN.forEach((frase, i) => {
    const pal = frase.replace(/[.]/g, "").split(" ");
    let fichas = baraja(pal, i + 81);
    if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
    out.push({ id: "ES3-oa-" + i, tipo: "orden-adjetivo", forma: "ordenar", dificultad: 2, modulo: 6, regla: "es3-despues", grupo: "oa-" + i,
      pide: "Собери словосочетание.", fichas, sep: " ", esperada: pal.join(" "), oir: frase, explicacion: "**" + frase + "** — прилагательное после существительного." });
  });
  /* 8. Muy o mucho */
  elegir("mm", "muy-mucho", ES3_MUY_MUCHO, 6, "es3-muy-mucho", "Что подходит?", 2, 91);
  /* 9. Contrarios (unir, todo en español) */
  for (let k = 0; k + 4 <= ES3_CONTRARIOS.length; k += 4) {
    const set = ES3_CONTRARIOS.slice(k, k + 4);
    out.push({ id: "ES3-an-" + k, tipo: "antonimo", forma: "emparejar", dificultad: 1, modulo: set[0][2], grupo: "an-" + k, lex: set.map(p => es3Id(p[0])).filter(Boolean),
      pide: "Соедини противоположности.", pares: set.map(p => [p[0], p[1]]), explicacion: set.map(p => p[0] + " ↔ " + p[1]).join(" · ") });
  }
  /* 10. Ser o estar: elegir y escribir */
  elegir("se", "ser-estar", ES3_SER_ESTAR, 7, "es3-ser-estar", "Ser или estar?", 2, 101);
  ES3_SER_ESTAR_ESC.forEach(([frase, ok, verbo, exp], i) => {
    const audio = frase.replace("___", ok);
    out.push({ id: "ES3-sw-" + i, tipo: "ser-estar-escribir", forma: "escribir", dificultad: 3, modulo: 7, regla: "es3-ser-estar", grupo: "sw-" + i, lex: lex(verbo),
      pide: "Впиши ser или estar в нужной форме.", grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, completa: audio, oir: audio, explicacion: exp });
  });
  /* 11. Demostrativos y posesivos */
  elegir("de", "demostrativo", ES3_DEMOSTRATIVOS, 8, "es3-este-ese", "Что подходит?", 2, 111);
  elegir("po", "posesivo", ES3_POSESIVOS, 8, "es3-posesivos", "Что подходит?", 2, 121);
  /* 12. Preguntas */
  ES3_PREGUNTAS.forEach(([preg, resp, ok, ops, mod], i) => {
    out.push({ id: "ES3-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla: mod === 8 ? "es3-cual" : undefined, grupo: "pq-" + i,
      pide: "Ответ: «" + resp + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 131), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp + "»." });
  });
  /* 13. Errores típicos: toca la palabra mal y escríbela bien */
  ES3_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES3-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 14. Dictado de las palabras nuevas de la unidad */
  const OBJ = new Set(es3Objetivo());
  UNIDAD_ES_3.modulos.forEach(m => (m.vocab || []).forEach(w => {
    const id = es3Id(w), e = id && lexEs(id);
    if (!e || !OBJ.has(id) || e.propio || /\s/.test(w) || ["en", "de", "a", "al", "del", "mi", "tu", "su"].indexOf(w) >= 0) return;
    if (out.some(x => x.id === "ES3-dic-" + id)) return;
    out.push({ id: "ES3-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: m.n, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." });
  }));
  /* 15. Situaciones y respuestas; dictado y orden de las frases de la U3 */
  ES3_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES3-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 141), correcta: ok, oir: ok, explicacion: exp });
  });
  ES3_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES3-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 151), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 3) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_3.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES3-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 161);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES3-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ──
   Elegir: [frase con ___, correcta, opciones, explicación, palabra?, módulo?, regla?] */
const ES3_HAY_ESTA = [
  ["En mi calle ___ un banco.", "hay", ["hay", "está", "es"], "Новый, неизвестный банк — **hay un…**", "hay", 1, "es3-hay-articulo"],
  ["En la habitación ___ una cama y un armario.", "hay", ["hay", "está", "están"], "**hay** — одна форма и для нескольких вещей.", "hay", 1, "es3-hay"],
  ["¿___ una farmacia cerca?", "Hay", ["Hay", "Está", "Es"], "Любая аптека — **¿Hay una…?**", "hay", 1, "es3-hay-articulo"],
  ["En mi barrio no ___ metro.", "hay", ["hay", "está", "es"], "«Нет» — **no hay**.", "hay", 1, "es3-no-hay"],
  ["¿Qué ___ en tu bolso?", "hay", ["hay", "está", "es"], "**¿Qué hay…?** — что есть.", "hay", 1, "es3-que-hay"],
  ["En la mesa ___ dos tazas.", "hay", ["hay", "están", "son"], "С числом — **hay**.", "hay", 1, "es3-hay-articulo"],
  ["La farmacia ___ en la plaza.", "está", ["está", "hay", "es"], "Конкретная аптека — **la… está**."],
  ["Mis llaves ___ en el bolso.", "están", ["están", "hay", "está"], "**mis llaves** — несколько, известные: **están**."],
  ["¿Dónde ___ el baño, por favor?", "está", ["está", "hay", "es"], "**¿Dónde está…?** — где находится."],
  ["En el centro ___ muchos museos.", "hay", ["hay", "están", "son"], "**hay muchos…** — что есть."],
  ["El museo ___ al lado del parque.", "está", ["está", "hay", "es"], "Известный музей — **está**.", null, 3],
  ["Lucía ___ en la cocina.", "está", ["está", "hay", "es"], "Где человек — **está**."],
  ["___ un bar enfrente de la estación.", "Hay", ["Hay", "Está", "Es"], "**Hay un bar** — есть какой-то бар.", null, 3],
  ["Barcelona ___ en España.", "está", ["está", "es", "hay"], "Где находится город — **está**."]
];
/* Formas de estar: [frase con ___, forma, explicación] */
const ES3_ESTAR = [
  ["Yo ___ en casa.", "estoy", "**yo** → **estoy**."],
  ["¿Dónde ___ tú?", "estás", "**tú** → **estás** (со знаком ударения)."],
  ["El banco ___ en la plaza.", "está", "**él / ella / eso** → **está**."],
  ["Nosotros ___ en el centro.", "estamos", "**nosotros** → **estamos**."],
  ["¿Vosotras ___ en Barcelona?", "estáis", "**vosotras** → **estáis**."],
  ["Las tiendas ___ en la calle Mayor.", "están", "**ellas** → **están**."],
  ["¿Dónde ___ mis gafas?", "están", "**mis gafas** — мн. ч.: **están**."],
  ["¿Usted ___ en el hotel?", "está", "С **usted** — как с él: **está**."]
];
/* Preposiciones: [frase, correcta, opciones, explicación, palabra?, módulo?, regla?] */
const ES3_PREPOSICIONES = [
  ["El perro no está delante de la casa. Está ___ la casa.", "detrás de", ["detrás de", "delante de", "encima de"], "Не **перед** домом, а **за** домом: **detrás de**.", "detrás"],
  ["El gato no está encima de la mesa. Está ___ la mesa.", "debajo de", ["debajo de", "encima de", "al lado de"], "Не на столе, а **под** столом: **debajo de**.", "debajo"],
  ["La farmacia no está a la izquierda. Está a la ___.", "derecha", ["derecha", "izquierda", "lado"], "Не слева, а справа: **a la derecha**.", "derecha", null, "es3-izquierda"],
  ["El piso no está lejos del centro. Está ___ del centro.", "cerca", ["cerca", "lejos", "dentro"], "Не далеко, а **близко**: **cerca**.", "cerca", 2, "es3-cerca"],
  ["El bar está ___ el banco y la farmacia.", "entre", ["entre", "entre de", "encima de"], "«Между… и…» — **entre… y…**, без **de**.", "entre", null, "es3-entre"],
  ["Los libros están ___ la estantería.", "en", ["en", "entre", "debajo de"], "Книги на полке — **en**.", "en"],
  ["La alfombra está ___ la mesa.", "debajo de", ["debajo de", "encima de", "dentro de"], "Ковёр — под столом: **debajo de**.", "debajo"],
  ["La lámpara está ___ la mesa.", "encima de", ["encima de", "debajo de", "entre"], "Лампа — на столе, сверху: **encima de**.", "encima"],
  ["Las llaves están ___ el bolso.", "dentro de", ["dentro de", "encima de", "entre"], "В сумке, внутри: **dentro de** (или просто **en**).", "dentro"],
  ["La parada de autobús está ___ hotel.", "al lado del", ["al lado del", "al lado de el", "al lado de"], "**de** + **el** = **del**.", "lado", null, "es3-del-al"],
  ["El metro está al lado ___ farmacia.", "de la", ["de la", "del", "de el"], "С **la** не сливается: **de la farmacia**.", "de", null, "es3-del-al"],
  ["La iglesia está ___ el bar. Entre la iglesia y el bar está la calle.", "enfrente de", ["enfrente de", "dentro de", "debajo de"], "Напротив — **enfrente de**.", "enfrente", null, "es3-izquierda"],
  ["El perro no está dentro de la casa. Está ___.", "fuera", ["fuera", "dentro", "encima"], "Не внутри, а **снаружи**: **fuera**.", "fuera"],
  ["El parque está ___ la casa, no delante.", "detrás de", ["detrás de", "delante de", "debajo de"], "**detrás de** — за, позади.", "detrás"]
];
/* Lugar: [frase con ___, palabra, otras que valen, módulo] */
const ES3_LUGARES = [
  ["La cama y el armario están en el ___.", "dormitorio", ["cuarto"], 4],
  ["En la ___ hay una nevera y una lavadora.", "cocina", [], 4],
  ["La ducha y la bañera están en el ___.", "baño", [], 4],
  ["El sofá y la televisión están en el ___.", "salón", [], 4],
  ["Vivo en el sexto. ¿Hay ___?", "ascensor", [], 4],
  ["Entre la cocina y el salón hay una ___.", "puerta", [], 4],
  ["En la ___ hay muchos libros.", "biblioteca", ["estantería"], 5],
  ["En el ___ hay cuadros antiguos.", "museo", [], 5],
  ["Estoy enfermo. ¿Hay una ___ cerca?", "farmacia", [], 5],
  ["La ___ de metro está en la plaza.", "estación", ["parada"], 5],
  ["La ___ está al lado del mar.", "playa", [], 5],
  ["En el ___ hay médicos y enfermeros.", "hospital", [], 5],
  ["Javier es empresario: su oficina está en un ___ moderno.", "edificio", [], 5],
  ["En el ___ hay perros y niños.", "parque", [], 5]
];
/* Ordinales: [cifra, palabra, frase con ___] */
const ES3_ORDINALES = [
  ["3.º", "tercero", "Vivo en el ___."], ["1.º", "primero", "Ana vive en el ___."], ["1.º", "primer", "Es el ___ piso."], ["3.º", "tercer", "Es el ___ piso."],
  ["2.ª", "segunda", "Es la ___ puerta."], ["5.º", "quinto", "Mi oficina está en el ___."], ["4.º", "cuarto", "Lucía vive en el ___."],
  ["7.º", "séptimo", "El hotel tiene un restaurante en el ___ piso."], ["10.º", "décimo", "Marta vive en el ___."], ["6.ª", "sexta", "Es la ___ planta."]
];
/* Concordancia: [frase con ___, adjetivo base, forma, explicación, módulo?] */
const ES3_CONCORDANCIA = [
  ["La cocina es ___.", "pequeño", "pequeña", "**cocina** — женский род: **pequeña**."],
  ["Las paredes son ___.", "blanco", "blancas", "**paredes** — ж. р., мн. ч.: **blancas**."],
  ["Tengo dos sillas ___.", "azul", "azules", "На согласную — **-es**: **azules**."],
  ["Mi barrio es muy ___.", "tranquilo", "tranquilo", "**barrio** — мужской род: **tranquilo**."],
  ["Las ventanas son ___.", "grande", "grandes", "На **-e** — только **-s**: **grandes**."],
  ["Es un sofá ___.", "rosa", "rosa", "**rosa** как цвет не меняется."],
  ["Los armarios son ___.", "marrón", "marrones", "**marrón** → **marrones** (без знака ударения)."],
  ["La alfombra es ___.", "rojo", "roja", "**alfombra** — ж. р.: **roja**."],
  ["Los edificios del centro son ___.", "antiguo", "antiguos", "**edificios** — м. р., мн. ч.: **antiguos**."],
  ["Las calles son ___.", "ruidoso", "ruidosas", "**calles** — ж. р., мн. ч.: **ruidosas**."],
  ["Tengo unas plantas ___.", "verde", "verdes", "**verde** → **verdes**."],
  ["Unas mesas ___.", "naranja", "naranja", "**naranja** как цвет не меняется."],
  ["Las puertas están ___.", "abierto", "abiertas", "**puertas** — ж. р., мн. ч.: **abiertas**.", 7],
  ["Ana está ___.", "cansado", "cansada", "Аня — женщина: **cansada**.", 7],
  ["Mis padres son muy ___.", "simpático", "simpáticos", "**padres** — м. р., мн. ч.: **simpáticos**.", 7],
  ["La biblioteca está ___.", "vacío", "vacía", "**biblioteca** — ж. р.: **vacía**.", 7]
];
/* Orden: frases para armar (el adjetivo después) */
const ES3_ORDEN = ["una casa grande", "un coche rojo", "las paredes blancas", "un barrio muy tranquilo", "una cocina pequeña y luminosa", "unos edificios antiguos",
  "una mesa redonda", "un piso nuevo y bonito", "dos sillas azules", "una calle larga"];
/* Muy o mucho: [frase con ___, correcta, opciones, explicación] */
const ES3_MUY_MUCHO = [
  ["El piso es ___ grande.", "muy", ["muy", "mucho", "mucha"], "Перед прилагательным — **muy**."],
  ["En mi barrio hay ___ bares.", "muchos", ["muchos", "muy", "mucho"], "**bares** — м. р., мн. ч.: **muchos**."],
  ["En el centro hay ___ tiendas.", "muchas", ["muchas", "muchos", "muy"], "**tiendas** — ж. р., мн. ч.: **muchas**."],
  ["La calle es ___ ruidosa.", "muy", ["muy", "mucha", "mucho"], "Перед прилагательным — **muy**, не меняется."],
  ["En mi bolso no hay ___ cosas.", "muchas", ["muchas", "muy", "mucho"], "**cosas** — ж. р., мн. ч.: **muchas**."],
  ["Javier es ___ simpático.", "muy", ["muy", "mucho", "muchos"], "**muy simpático**."],
  ["En la nevera hay ___ agua.", "mucha", ["mucha", "mucho", "muy"], "**agua** — ж. р. (хотя **el agua**): **mucha**."],
  ["Las habitaciones son ___ luminosas.", "muy", ["muy", "muchas", "mucho"], "**muy** не меняется: **muy luminosas**."]
];
/* Contrarios: [palabra, contraria, módulo] — se juntan de a 4 */
const ES3_CONTRARIOS = [
  ["grande", "pequeño", 6], ["nuevo", "viejo", 6], ["bonito", "feo", 6], ["largo", "corto", 6],
  ["caro", "barato", 6], ["limpio", "sucio", 6], ["tranquilo", "ruidoso", 6], ["luminoso", "oscuro", 6],
  ["moderno", "antiguo", 6], ["alto", "bajo", 6], ["blanco", "negro", 6], ["redondo", "cuadrado", 6],
  ["abierto", "cerrado", 7], ["lleno", "vacío", 7], ["contento", "triste", 7], ["simpático", "antipático", 7],
  ["divertido", "aburrido", 7], ["cerca", "lejos", 7], ["encima de", "debajo de", 7], ["delante de", "detrás de", 7]
];
/* Ser o estar: [frase con ___, correcta, opciones, explicación] */
const ES3_SER_ESTAR = [
  ["Javier ___ muy simpático.", "es", ["es", "está"], "Характер — **ser**."],
  ["Hoy Ana ___ cansada.", "está", ["está", "es"], "Сегодня, состояние — **estar**."],
  ["La farmacia ___ cerrada.", "está", ["está", "es"], "Закрыта сейчас — **estar**."],
  ["Mi piso ___ pequeño, pero muy luminoso.", "es", ["es", "está"], "Описание квартиры — **ser**."],
  ["¿Dónde ___ el hospital?", "está", ["está", "es"], "Где находится — **estar**."],
  ["Lucía ___ alta y guapa.", "es", ["es", "está"], "Внешность — **ser**."],
  ["El bar ___ lleno.", "está", ["está", "es"], "Полный сейчас — **estar**."],
  ["Los niños ___ contentos.", "están", ["están", "son"], "Довольны сейчас — **estar**."],
  ["Mis padres ___ de Rusia.", "son", ["son", "están"], "Откуда — **ser de**."],
  ["Pablo ___ enfermo hoy.", "está", ["está", "es"], "Болезнь сейчас — **estar**."],
  ["Mi barrio ___ tranquilo.", "es", ["es", "está"], "Характеристика района — **ser**."],
  ["¿___ ocupado? —No, ahora no.", "Estás", ["Estás", "Eres"], "Занят сейчас — **estar**."],
  ["Este libro ___ muy aburrido.", "es", ["es", "está"], "Какая книга — **ser**: «скучная»."],
  ["El museo ___ abierto hoy.", "está", ["está", "es"], "Открыт — **estar**."]
];
/* Ser o estar, escribir: [frase con ___, forma, verbo, explicación] */
const ES3_SER_ESTAR_ESC = [
  ["Yo ___ cansado.", "estoy", "estar", "Состояние — **estar**: **estoy**."],
  ["Nosotros ___ rusos.", "somos", "ser", "Национальность — **ser**: **somos**."],
  ["La puerta ___ abierta.", "está", "estar", "Открыта сейчас — **estar**: **está**."],
  ["Tú ___ muy inteligente.", "eres", "ser", "Какой человек — **ser**: **eres**."],
  ["Las tiendas ___ cerradas.", "están", "estar", "Закрыты — **estar**: **están**."],
  ["Mi casa ___ grande.", "es", "ser", "Описание — **ser**: **es**."],
  ["¿Vosotros ___ contentos?", "estáis", "estar", "Довольны сейчас — **estar**: **estáis**."],
  ["Marta ___ muy amable.", "es", "ser", "Характер — **ser**: **es**."]
];
/* Demostrativos: [frase con ___, correcta, opciones, explicación] */
const ES3_DEMOSTRATIVOS = [
  ["___ libro (aquí, en mi mano) es de Ana.", "Este", ["Este", "Esta", "Aquel"], "Рядом со мной — **este**."],
  ["___ casa (aquí) es muy bonita.", "Esta", ["Esta", "Este", "Esa"], "**casa** — ж. р., рядом: **esta**."],
  ["¿___ bolso (ahí, a tu lado) es de Lucía?", "Ese", ["Ese", "Este", "Aquel"], "Рядом с тобой — **ese**."],
  ["___ montañas (allí, muy lejos) son muy altas.", "Aquellas", ["Aquellas", "Estas", "Aquellos"], "Далеко, ж. р., мн. ч. — **aquellas**."],
  ["___ sillas (aquí) son nuevas.", "Estas", ["Estas", "Estos", "Esas"], "Рядом, ж. р., мн. ч. — **estas**."],
  ["___ edificio (allí) es un hotel.", "Aquel", ["Aquel", "Aquella", "Este"], "Далеко, м. р. — **aquel**."],
  ["¿___ gafas (ahí, en la mesa) son de Ana?", "Esas", ["Esas", "Esos", "Estas"], "**gafas** — ж. р., мн. ч., там: **esas**."],
  ["___ cuadros (aquí) son de mi abuela.", "Estos", ["Estos", "Estas", "Aquellos"], "Рядом, м. р., мн. ч. — **estos**."]
];
/* Posesivos: [frase con ___, correcta, opciones, explicación] */
const ES3_POSESIVOS = [
  ["Nosotros tenemos una casa. Es ___ casa.", "nuestra", ["nuestra", "nuestro", "nuestras"], "**casa** — ж. р.: **nuestra**."],
  ["Yo tengo dos llaves. Son ___ llaves.", "mis", ["mis", "mi", "tus"], "Несколько — **mis**."],
  ["Vosotros tenéis un piso en el centro. ¿Cómo es ___ piso?", "vuestro", ["vuestro", "vuestra", "nuestro"], "**piso** — м. р., vosotros: **vuestro**."],
  ["Ana tiene un hermano. ___ hermano se llama Iván.", "Su", ["Su", "Sus", "Mi"], "Её брат — **su**."],
  ["Nosotros tenemos tres armarios. Son ___ armarios.", "nuestros", ["nuestros", "nuestras", "nuestro"], "**armarios** — м. р., мн. ч.: **nuestros**."],
  ["Tú tienes unas gafas nuevas. ___ gafas son bonitas.", "Tus", ["Tus", "Tu", "Sus"], "Несколько, твои — **tus**."],
  ["Javier y Lucía tienen un piso. ___ piso está en el centro.", "Su", ["Su", "Sus", "Vuestro"], "Их квартира — **su**."],
  ["Vosotras tenéis una terraza. ___ terraza es muy grande.", "Vuestra", ["Vuestra", "Vuestro", "Nuestra"], "**terraza** — ж. р., vosotras: **vuestra**."]
];
/* Preguntas: [pregunta con ___, respuesta, correcta, opciones, módulo] */
const ES3_PREGUNTAS = [
  ["¿___ está la farmacia?", "Está en la plaza.", "Dónde", ["Dónde", "Qué", "Cuál", "Cómo"], 2],
  ["¿___ hay en tu barrio?", "Hay un mercado y dos bares.", "Qué", ["Qué", "Dónde", "Cuál", "Cómo"], 5],
  ["¿___ es tu piso?", "Es pequeño, pero muy bonito.", "Cómo", ["Cómo", "Cuál", "Dónde", "Qué"], 6],
  ["¿___ es tu casa?", "Aquella, la blanca.", "Cuál", ["Cuál", "Cómo", "Qué", "Dónde"], 8],
  ["¿De ___ color es tu coche?", "Es rojo.", "qué", ["qué", "cuál", "cómo", "dónde"], 6],
  ["¿En ___ piso vives?", "En el tercero.", "qué", ["qué", "cuál", "cómo", "dónde"], 4],
  ["¿___ están mis llaves?", "En tu bolso.", "Dónde", ["Dónde", "Cuál", "Qué", "Cómo"], 2],
  ["¿___ estás?", "Muy bien, gracias.", "Cómo", ["Cómo", "Dónde", "Qué", "Cuál"], 7]
];
/* Errores típicos: [palabras, índice mal, arreglo, módulo, regla, explicación] */
const ES3_ERRORES = [
  [["El", "banco", "es", "en", "la", "plaza."], 2, "está", 2, "es3-hay-esta", "Где находится — **estar**: **El banco está en la plaza**."],
  [["Está", "un", "banco", "en", "mi", "calle."], 0, "Hay", 2, "es3-hay-esta", "С **un** — **hay**: **Hay un banco en mi calle**."],
  [["Hay", "el", "metro", "cerca."], 1, "un", 1, "es3-hay-articulo", "После **hay** — **un**: **Hay un metro cerca**."],
  [["El", "piso", "es", "mucho", "grande."], 3, "muy", 6, "es3-muy-mucho", "Перед прилагательным — **muy**."],
  [["Soy", "muy", "cansada."], 0, "Estoy", 7, "es3-ser-estar", "Состояние — **estar**: **Estoy muy cansada**."],
  [["La", "farmacia", "es", "cerrada."], 2, "está", 7, "es3-ser-estar", "Закрыта сейчас — **estar**."],
  [["El", "bar", "está", "al", "lado", "de", "el", "banco."], 5, "del", 3, "es3-del-al", "**de** + **el** = **del**."],
  [["Las", "paredes", "son", "blancos."], 3, "blancas", 6, "es3-adj-concordancia", "**paredes** — ж. р.: **blancas**."],
  [["Es", "nuestro", "casa."], 1, "nuestra", 8, "es3-posesivos", "**casa** — ж. р.: **nuestra casa**."],
  [["Vivo", "en", "el", "primero", "piso."], 3, "primer", 4, "es3-primer", "Перед существительным — **primer**."],
  [["Esta", "edificio", "es", "un", "hotel."], 0, "Este", 8, "es3-este-ese", "**edificio** — м. р.: **este**."],
  [["Tengo", "dos", "sillas", "azul."], 3, "azules", 6, "es3-adj-concordancia", "Мн. ч.: **azules**."]
];
/* Situación → frase: [consigna, correcta, otras, explicación, módulo] */
const ES3_SITUACIONES = [
  ["Ты на улице и хочешь найти аптеку. Что спросишь у прохожего?", "Perdón, ¿hay una farmacia cerca?", ["Perdón, ¿está una farmacia cerca?", "Perdón, ¿es una farmacia cerca?"], "Любая аптека — **¿hay una…?**", 2],
  ["Ты ищешь конкретное место — туалет в кафе.", "¿Dónde está el baño, por favor?", ["¿Dónde hay el baño, por favor?", "¿Dónde es el baño, por favor?"], "Конкретное место — **¿Dónde está…?**", 2],
  ["Ты говоришь, что живёшь на третьем этаже (по-испански).", "Vivo en el tercero.", ["Vivo en el tercer.", "Vivo en tercero piso."], "Без существительного — **el tercero**.", 4],
  ["Ты говоришь, что очень устала.", "Estoy muy cansada.", ["Soy muy cansada.", "Estoy mucho cansada."], "Состояние — **estar**; перед прилагательным — **muy**.", 7],
  ["Ты хочешь сказать, что магазин закрыт.", "La tienda está cerrada.", ["La tienda es cerrada.", "La tienda hay cerrada."], "Закрыт сейчас — **estar**.", 7],
  ["Ты описываешь свою квартиру: маленькая, но светлая.", "Mi piso es pequeño, pero luminoso.", ["Mi piso está pequeño, pero luminoso.", "Mi pequeño piso es, pero luminoso."], "Описание — **ser**.", 6],
  ["Ты спрашиваешь подругу, что есть в её районе.", "¿Qué hay en tu barrio?", ["¿Qué está en tu barrio?", "¿Cuál hay en tu barrio?"], "**¿Qué hay…?**", 5],
  ["Ты показываешь на свой дом вдали: «Вон тот, белый».", "Aquella, la blanca.", ["Esta, la blanca.", "Aquel, el blanca."], "Далеко — **aquella** (**la casa**).", 8]
];
/* Respuesta: [lo que te dicen, respuesta, otras, explicación, módulo] */
const ES3_RESPUESTAS = [
  ["¿Dónde está el banco?", "Está al lado de la iglesia.", ["Hay un banco.", "Es grande."], "Где — **está…**", 2],
  ["¿Hay un supermercado cerca?", "Sí, hay uno en la plaza.", ["Sí, está uno en la plaza.", "Sí, es en la plaza."], "**hay uno** — «есть один».", 1],
  ["¿Cómo es tu barrio?", "Es tranquilo y muy bonito.", ["Está en el centro.", "Hay un parque."], "**¿Cómo es?** — описание с **ser**.", 6],
  ["¿Estás cansado?", "Sí, un poco.", ["Sí, soy cansado.", "Sí, es un poco."], "Ответ на **¿estás…?**", 7],
  ["¿En qué piso vives?", "En el segundo.", ["En la calle Mayor.", "Es pequeño."], "Этаж — **el segundo**.", 4],
  ["¿De qué color es tu sofá?", "Es gris.", ["Está en el salón.", "Es cómodo y grande."], "Цвет — **es gris**.", 6]
];

window.ejerciciosUnidadEs3 = ejerciciosUnidadEs3;
window.es3Vocab = es3Vocab;
window.es3Objetivo = es3Objetivo;
const ES3_MEZCLA = { "hay-esta": 2, "estar-forma": 2, preposicion: 2, lugar: 2, ordinal: 2, concordancia: 2, "orden-adjetivo": 1, "muy-mucho": 1, antonimo: 1,
  "ser-estar": 2, "ser-estar-escribir": 2, demostrativo: 2, posesivo: 2, pregunta: 2, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1 };
window.ES3_MEZCLA = ES3_MEZCLA;
