/* ============================================================
   DATA-UNIDAD-ES-6.JS — Abecé · Урок 6: По городу
   (Moverse por la ciudad). Completa (05/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U6;
   propuesta aprobada por Manu el 05/11/2026: claude/PROPUESTA_U6_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-5.js (ver su cabecera). Las formas de los
   verbos (presente e imperativo de tú) salen de data-verbos-es.js (es6Pres, es6Imp).
   Plano con el camino: plano { ruta, destino } (Plano de js/unidad.js, como la U11 de Azbuka).
   Decisión de Manu (05/11/2026): un solo pronombre pegado al imperativo
   (tómalo, llámame); dos juntos («dímelo»), en la U11.
   Proyecto (módulo 11): conversaciones por turnos (ES6_TURNOS) y el camino sobre el plano
   (tipo ruta, forma situacion), corregidos por intención con azSituacionEs (js/corrector-es.js).
   ============================================================ */

const ES6_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES6_SE = ["me", "te", "se", "nos", "os", "se"];
function es6Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  return v ? (v.base ? Object.assign({ se: true }, VERBOS_ES[v.base]) : v) : null;
}
function es6Pres(inf, p) {
  const v = es6Verbo(inf); if (!v || !v.pres || !v.pres[p]) return "";
  return (v.se ? ES6_SE[p] + " " : "") + v.pres[p];
}
function es6Imp(inf) { const v = es6Verbo(inf); return v && v.impTu ? v.impTu : ""; }
const es6Tabla = (inf, resto) => ES6_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es6Pres(inf, i) + (resto ? " " + resto : "") }]);
/* El camino del plano en palabras: «Sigue todo recto, después gira a la derecha.» */
const es6Giros = r => r.split(" ").filter(m => m === "R" || m === "L").map(m => m === "R" ? "a la derecha" : "a la izquierda");
const es6Ruta = r => "Sigue todo recto" + es6Giros(r).map(x => ", después gira " + x).join("") + ".";

const UNIDAD_ES_6 = {
  id: 6,
  titulo: "По городу",
  tituloEs: "Moverse por la ciudad",
  objetivo: "Спросить и объяснить дорогу, ездить на транспорте, рассказать о планах, попросить разрешения и совета, объяснить врачу или в аптеке, что болит.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es6m1", n: 1, tipo: "leccion",
      titulo: "Voy a Madrid, estoy en Madrid",
      resumen: "ir a (куда), estar en (где), venir de (откуда); llevar и traer.",
      intro: "Для основных фраз этого урока запомни: **куда** — **a**, **где** — **en**, **откуда** — **de**. **Voy a Madrid**, **Estoy en Madrid**, **Vengo de Madrid**. В русском это разные падежи: «в Мадрид», «в Мадриде», «из Мадрида». В испанском в этих фразах — три разных предлога (у каждого из них есть и другие значения).",
      tablas: [
        { titulo: "¿Adónde? ¿Dónde? ¿De dónde?", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Voy a Madrid.", ru: "Я еду в Мадрид. (куда?)" }, { es: "Voy al cine.", ru: "Я иду в кино." }],
          [{ es: "Estoy en Madrid.", ru: "Я в Мадриде. (где?)" }, { es: "Estoy en el cine.", ru: "Я в кино." }],
          [{ es: "Vengo de Madrid.", ru: "Я из Мадрида. (откуда?)" }, { es: "Vengo del cine.", ru: "Я иду из кино." }]] },
        { titulo: "Llevar y traer", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Llevo el libro a clase.", ru: "Я несу книгу в класс (туда)." }, { es: "Traigo el libro a casa.", ru: "Я приношу книгу домой (сюда)." }],
          [{ es: "¿Me traes un café?", ru: "Принесёшь мне кофе?" }, { es: "Te llevo a la estación.", ru: "Я отвезу тебя на вокзал." }]] }
      ],
      secciones: [
        {
          id: "es6-a-en-de",
          titulo: "A — куда, en — где, de — откуда",
          texto: "С глаголами движения (**ir**, **venir**, **llegar**, **volver**) место, **куда** идём, — с **a**: **Voy a Madrid**, **Llego a casa**.\nМесто, **где** находимся, — с **en**: **Estoy en Madrid**, **Vivo en Barcelona**, **Trabajo en una oficina**.\nМесто, **откуда**, — с **de**: **Vengo de Madrid**, **Salgo de casa**.",
          comparacion: "В русском одно «в», но разные падежи: «в Мадрид» (винительный) — **a Madrid**; «в Мадриде» (предложный) — **en Madrid**; «из Мадрида» — **de Madrid**.",
          ejemplos: [
            { es: "Mañana voy a Barcelona.", ru: "Завтра я еду в Барселону." },
            { es: "Ahora estoy en la oficina.", ru: "Сейчас я в офисе." },
            { es: "¿Vienes de clase?", ru: "Ты с урока?" }
          ],
          errores: [
            { mal: "Voy en Madrid.", bien: "Voy a Madrid.", por: "Куда — **a**." },
            { mal: "Estoy a casa.", bien: "Estoy en casa.", por: "Где — **en**." }
          ],
          chequeo: [
            { pide: "Esta tarde voy ___ la playa.", opciones: ["a", "en", "de"], ok: "a", por: "Куда — **a**." }
          ]
        },
        {
          id: "es6-adonde",
          titulo: "¿Adónde? ¿Dónde? ¿De dónde?",
          texto: "Вопросы — с тем же предлогом:\n· **¿Adónde vas?** — куда ты идёшь? (**a** + **dónde** — одно слово);\n· **¿Dónde estás?** — где ты?\n· **¿De dónde vienes?** — откуда ты идёшь? (а **¿De dónde eres?** — откуда ты родом, урок 2).",
          ejemplos: [
            { es: "—¿Adónde vas? —Voy a Correos.", ru: "— Куда ты идёшь? — На почту." },
            { es: "—¿Dónde estás? —En la estación.", ru: "— Ты где? — На вокзале." }
          ],
          chequeo: [
            { pide: "¿___ vas? —Al trabajo.", opciones: ["Adónde", "Dónde", "De dónde"], ok: "Adónde", por: "Куда — **¿Adónde?**" }
          ]
        },
        {
          id: "es6-al-del",
          titulo: "Al, del; a casa, en casa",
          texto: "Как в уроке 3: **a** + **el** = **al**, **de** + **el** = **del**: **Voy al banco**, **Vengo del trabajo**. С **la** не сливается: **Voy a la farmacia**.\n«Домой» и «дома» — без артикля: **Voy a casa**, **Estoy en casa**.\nПочта Испании называется **Correos**, без артикля: **Voy a Correos**. Туристам помогут в **la oficina de turismo** и в **información** (справочная).",
          errores: [
            { mal: "Voy a el banco.", bien: "Voy al banco.", por: "**a** + **el** = **al**." }
          ]
        },
        {
          id: "es6-llegar-salir",
          titulo: "Llegar a, salir de, entrar en",
          texto: "Глаголы сами подсказывают предлог: **llegar a** (прибыть куда), **volver a** (вернуться куда), **salir de** (выйти откуда), **volver de** (вернуться откуда), **entrar en** (войти куда — в Испании говорят **en**).",
          ejemplos: [
            { es: "Llego a casa a las siete.", ru: "Я прихожу домой в семь." },
            { es: "Salgo de la oficina a las seis.", ru: "Я выхожу из офиса в шесть." },
            { es: "Entramos en el museo.", ru: "Мы входим в музей." }
          ]
        },
        {
          id: "es6-llevar-traer",
          titulo: "Llevar и traer",
          texto: "**llevar** — нести, везти **туда** (от того, кто говорит): **Llevo el libro a clase**.\n**traer** — нести, везти **сюда** (к тому, кто говорит): **¿Me traes un café?** У **traer** неправильная форма **yo**: **traigo**.\nТак же **ir** (туда) и **venir** (сюда): **—¿Vienes a mi casa? —Sí, voy.**",
          comparacion: "Как «отнести» и «принести»: ориентируйся на то, где находится говорящий.",
          errores: [
            { mal: "¿Me llevas un café? (сюда)", bien: "¿Me traes un café?", por: "Сюда, ко мне — **traer**." }
          ]
        }
      ],
      vocab: ["adónde", "traer", "entrar", "Correos", "información", "turismo"]
    },
    {
      id: "es6m2", n: 2, tipo: "leccion",
      titulo: "En metro, a pie",
      resumen: "Транспорт: ir en metro, ir a pie; coger, subir, bajar, cambiar de línea; tardar.",
      intro: "В испанских городах многие пользуются метро и автобусами. Нужны названия транспорта, предлог **en** («на метро» — **en metro**) и несколько глаголов: сесть, выйти, пересесть, сколько ехать.",
      tablas: [
        { titulo: "El transporte", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "en metro", ru: "на метро" }, { es: "en autobús", ru: "на автобусе" }],
          [{ es: "en tren", ru: "на поезде" }, { es: "en coche", ru: "на машине" }],
          [{ es: "en taxi", ru: "на такси" }, { es: "en bicicleta", ru: "на велосипеде" }],
          [{ es: "en moto", ru: "на мотоцикле" }, { es: "en avión", ru: "на самолёте" }],
          [{ es: "en barco", ru: "на корабле" }, { es: "a pie", ru: "пешком" }]] },
        { titulo: "En la estación", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la estación", ru: "станция, вокзал" }, { es: "la parada", ru: "остановка" }],
          [{ es: "el andén", ru: "перрон, платформа" }, { es: "la línea", ru: "линия, маршрут" }],
          [{ es: "el billete", ru: "билет" }, { es: "de ida y vuelta", ru: "туда и обратно" }],
          [{ es: "el horario", ru: "расписание" }, { es: "el aeropuerto", ru: "аэропорт" }],
          [{ es: "la salida", ru: "выход; отправление" }, { es: "la llegada", ru: "прибытие" }],
          [{ es: "el viaje", ru: "поездка" }, { es: "el pasajero", ru: "пассажир" }]] }
      ],
      secciones: [
        {
          id: "es6-en-metro",
          titulo: "Voy en metro, voy a pie",
          texto: "На каком транспорте — **en** + название, без артикля: **en metro**, **en autobús**, **en tren**, **en coche**.\nПешком — **a pie** (или **andando**): **Voy al trabajo a pie**.",
          errores: [
            { mal: "Voy con metro.", bien: "Voy en metro.", por: "Транспорт — **en**." },
            { mal: "Voy en pie.", bien: "Voy a pie.", por: "Пешком — **a pie**." }
          ],
          chequeo: [
            { pide: "Voy al aeropuerto ___ taxi.", opciones: ["en", "con", "a"], ok: "en", por: "Транспорт — **en**." }
          ]
        },
        {
          id: "es6-coger",
          titulo: "Coger el autobús, subir, bajar",
          texto: "«Сесть на автобус», «поехать на метро» — **coger** или **tomar**: **Cojo el metro** (у **coger** — **cojo** в форме **yo**). В Испании **coger** — самое обычное слово для транспорта. Во многих странах Латинской Америки чаще говорят **tomar**: там у **coger** бывает грубое значение (об этом есть статья в словаре).\nВойти в автобус — **subir al autobús**, выйти — **bajar del autobús** (или **subirse**, **bajarse**). Пересесть — **cambiar de línea**. Ждать — **esperar**: **Espero el autobús**.",
          ejemplos: [
            { es: "Cojo el autobús en la parada de la plaza.", ru: "Я сажусь на автобус на остановке на площади." },
            { es: "Bajo en la próxima estación.", ru: "Я выхожу на следующей станции." },
            { es: "Tienes que cambiar de línea.", ru: "Тебе надо сделать пересадку." }
          ]
        },
        {
          id: "es6-billete",
          titulo: "Un billete de ida y vuelta",
          texto: "Билет — **el billete**: **un billete de metro**, **un billete de tren**. Туда и обратно — **de ida y vuelta**.\nВ кассе говорят как в магазине (урок 5): **Un billete de ida y vuelta, por favor. ¿Cuánto es?**",
          ejemplos: [
            { es: "Quería un billete de ida y vuelta a Madrid.", ru: "Я бы хотел(а) билет до Мадрида и обратно." }
          ]
        },
        {
          id: "es6-tardar",
          titulo: "¿Cuánto tardas?",
          texto: "«Сколько времени ехать?» — **tardar**: **¿Cuánto tardas en llegar?** — **Tardo veinte minutos**. Транспорт — с **en**: **En metro tardo diez minutos**.",
          ejemplos: [
            { es: "—¿Cuánto tardas? —Media hora a pie.", ru: "— Сколько тебе идти? — Полчаса пешком." },
            { es: "El tren tarda dos horas.", ru: "Поезд едет два часа." }
          ],
          chequeo: [
            { pide: "En autobús ___ quince minutos. (yo)", opciones: ["tardo", "tengo", "voy"], ok: "tardo", por: "Сколько времени занимает — **tardar**." }
          ]
        }
      ],
      frases: ["FRE-103", "FRE-104", "FRE-105", "FRE-106"],
      dialogos: ["DLE-026"],
      vocab: ["bicicleta", "moto", "avión", "barco", "a pie", "andar", "próximo", "coger", "subir", "bajar", "subirse", "bajarse", "cambiar", "esperar", "tardar",
        "andén", "línea", "aeropuerto", "viaje", "ida y vuelta", "horario", "salida", "llegada", "pasajero"],
      ampliacion: {
        titulo: "Ещё о транспорте",
        intro: "Ещё одно слово. Оно не входит в проверку урока. В некоторых испанских городах есть трамвай.",
        vocab: ["tranvía"]
      }
    },
    {
      id: "es6m3", n: 3, tipo: "leccion",
      titulo: "De casa al trabajo",
      resumen: "de… a…, desde… hasta…, por, para, hacia.",
      intro: "Чтобы описать маршрут, нужны предлоги: откуда и куда (**de… a…**, **desde… hasta…**), через что (**por**), в какую сторону (**hacia**) и зачем (**para**).",
      tablas: [
        { titulo: "Предлоги маршрута", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "de casa al trabajo", ru: "из дома на работу" }, { es: "desde aquí hasta la plaza", ru: "отсюда до площади" }],
          [{ es: "por el parque", ru: "через парк, по парку" }, { es: "por la calle Mayor", ru: "по улице Майор" }],
          [{ es: "hacia el río", ru: "к реке, в сторону реки" }, { es: "para ir al centro", ru: "чтобы доехать до центра" }]] }
      ],
      secciones: [
        {
          id: "es6-desde-hasta",
          titulo: "De… a…, desde… hasta…",
          texto: "Откуда и куда — **de… a…**: **de casa al trabajo**, **de Madrid a Barcelona**. С **desde… hasta…** звучит подробнее: «от… и до…»: **desde aquí hasta la plaza**, **desde las nueve hasta las cinco**.",
          ejemplos: [
            { es: "Voy de casa al trabajo en metro.", ru: "Из дома на работу я еду на метро." },
            { es: "Desde aquí hasta la playa son diez minutos.", ru: "Отсюда до пляжа десять минут." }
          ]
        },
        {
          id: "es6-por",
          titulo: "Por: через, по, мимо",
          texto: "**por** в маршруте — «через, по, мимо»: **Paseo por el parque** — гуляю по парку; **Vamos por la plaza** — идём через площадь; **Voy por la calle Mayor** — иду по улице Майор.",
          comparacion: "В описании маршрута **por** часто соответствует русским «по» или «через»: **por el parque** — «по парку, через парк». Но у **por** есть и другие значения, их разберём позже.",
          errores: [
            { mal: "Paseo en el parque por la tarde. (по парку)", bien: "Paseo por el parque por la tarde.", por: "«По парку» — **por el parque**." }
          ],
          chequeo: [
            { pide: "Vamos al museo ___ el centro.", opciones: ["por", "para", "de"], ok: "por", por: "Через центр — **por**." }
          ]
        },
        {
          id: "es6-para",
          titulo: "Para: чтобы; hacia: в сторону",
          texto: "**para** + инфинитив — «чтобы»: **Para ir al centro, coge el metro** — чтобы доехать до центра, садись на метро. (Ты уже знаешь **para mí** из урока 5.)\n**hacia** — «к, в сторону»: **Camina hacia el río** — иди в сторону реки.",
          ejemplos: [
            { es: "Para llegar a la estación, tienes que coger el autobús.", ru: "Чтобы доехать до вокзала, надо сесть на автобус." }
          ],
          mas: {
            titulo: "Por и para",
            texto: "**por** и **para** — трудная пара, её подробно разбирают позже. Пока запомни: в маршруте **por** — «через, по», **para** + инфинитив — «чтобы»."
          }
        }
      ],
      vocab: ["desde", "por", "hacia"]
    },
    {
      id: "es6m4", n: 4, tipo: "leccion",
      titulo: "Sigue todo recto",
      resumen: "Повелительное наклонение на «ты»: gira, cruza, sigue, ve, ven. Как объяснить дорогу.",
      intro: "Чтобы объяснить дорогу, нужен повелительный: «иди», «поверни», «перейди». На «ты» у правильных глаголов это простая форма: она совпадает с формой **él** настоящего времени: **gira**, **cruza**, **coge**, **sube**. У нескольких частых глаголов форма особая — её нужно запомнить.",
      tablas: [
        { titulo: "Imperativo de tú", encabezados: ["Инфинитив", "Повелительное"], filas: [
          [{ es: "girar", ru: "поворачивать" }, { es: "gira", ru: "поверни" }],
          [{ es: "cruzar", ru: "переходить" }, { es: "cruza", ru: "перейди" }],
          [{ es: "tomar", ru: "брать" }, { es: "toma", ru: "возьми; садись на" }],
          [{ es: "coger", ru: "брать" }, { es: "coge", ru: "возьми; садись на" }],
          [{ es: "subir", ru: "подниматься" }, { es: "sube", ru: "поднимись" }],
          [{ es: "seguir", ru: "продолжать" }, { es: "sigue", ru: "иди дальше" }]] },
        { titulo: "Неправильные", encabezados: ["Инфинитив", "Повелительное"], filas: [
          [{ es: "ir", ru: "идти" }, { es: "ve", ru: "иди" }],
          [{ es: "venir", ru: "приходить" }, { es: "ven", ru: "иди сюда" }],
          [{ es: "salir", ru: "выходить" }, { es: "sal", ru: "выйди" }],
          [{ es: "poner", ru: "класть" }, { es: "pon", ru: "положи" }],
          [{ es: "tener", ru: "иметь" }, { es: "ten", ru: "держи" }],
          [{ es: "hacer", ru: "делать" }, { es: "haz", ru: "сделай" }],
          [{ es: "decir", ru: "говорить" }, { es: "di", ru: "скажи" }],
          [{ es: "ser", ru: "быть" }, { es: "sé", ru: "будь" }]] },
        { titulo: "En la calle", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "todo recto", ru: "прямо" }, { es: "la esquina", ru: "угол" }],
          [{ es: "a la derecha", ru: "направо" }, { es: "el semáforo", ru: "светофор" }],
          [{ es: "a la izquierda", ru: "налево" }, { es: "el cruce", ru: "перекрёсток" }],
          [{ es: "la primera calle", ru: "первая улица" }, { es: "la rotonda", ru: "кольцевая развязка" }],
          [{ es: "al final de la calle", ru: "в конце улицы" }, { es: "el puente", ru: "мост" }],
          [{ es: "la avenida", ru: "проспект" }, { es: "el plano", ru: "план города" }]] }
      ],
      secciones: [
        {
          id: "es6-imperativo",
          titulo: "Gira, coge, sube",
          texto: "Повелительное на «ты» у правильных глаголов — это форма **él** настоящего времени:\n· **-ar** → **-a**: gir**a**, cruz**a**, tom**a**, mir**a**, esper**a**;\n· **-er**, **-ir** → **-e**: cog**e**, sub**e**, abr**e**.\nГлаголы-«сапожки» меняют корень и здесь: **sigue** (seguir), **cierra** (cerrar), **vuelve** (volver).",
          ejemplos: [
            { es: "Gira a la derecha.", ru: "Поверни направо." },
            { es: "Coge el metro.", ru: "Садись на метро." },
            { es: "Sigue todo recto.", ru: "Иди прямо." }
          ],
          chequeo: [
            { pide: "(cruzar) ___ la calle.", opciones: ["Cruza", "Cruzas", "Cruzar"], ok: "Cruza", por: "На «ты»: **cruza** — как форма **él**." }
          ]
        },
        {
          id: "es6-imperativo-irregular",
          titulo: "Ve, ven, sal, pon, ten, haz, di, sé",
          texto: "Восемь частых глаголов дают короткую неправильную форму: **ve** (ir), **ven** (venir), **sal** (salir), **pon** (poner), **ten** (tener), **haz** (hacer), **di** (decir), **sé** (ser). Их надо просто выучить.\n**sé** от **ser** — «будь»: **Sé bueno** — «Будь хорошим». Не путай с **sé** от **saber** — «я умею, я знаю» (урок 5).",
          ejemplos: [
            { es: "¡Ven aquí!", ru: "Иди сюда!" },
            { es: "Ve a la farmacia.", ru: "Сходи в аптеку." },
            { es: "Sal de casa a las ocho.", ru: "Выйди из дома в восемь." }
          ],
          errores: [
            { mal: "¡Vienes aquí!", bien: "¡Ven aquí!", por: "Повелительное от **venir** — **ven**." }
          ]
        },
        {
          id: "es6-indicaciones",
          titulo: "Как объяснить дорогу",
          texto: "· **Sigue todo recto** — иди прямо;\n· **Gira a la derecha / a la izquierda** — поверни направо / налево;\n· **Coge la segunda calle a la izquierda** — сверни на вторую улицу налево;\n· **Cruza la calle / el puente** — перейди улицу / мост;\n· **en la esquina**, **en el semáforo**, **en la rotonda**, **al final de la calle**.\nКак спросить дорогу: **¿Cómo llego a…?** — как мне дойти до…? **¿Está lejos?** — это далеко?",
          ejemplos: [
            { es: "Sigue todo recto y en el semáforo gira a la izquierda.", ru: "Иди прямо, а на светофоре поверни налево." },
            { es: "El banco está al final de la calle, en la esquina.", ru: "Банк в конце улицы, на углу." }
          ],
          chequeo: [
            { pide: "En el semáforo, ___ a la derecha.", opciones: ["gira", "giras", "girar"], ok: "gira", por: "Объясняем дорогу — повелительное: **gira**." }
          ]
        },
        {
          id: "es6-perdone",
          titulo: "Perdone, oiga",
          texto: "Чтобы обратиться к незнакомому человеку на улице, говорят **Perdone** (на «вы», **usted**): это вежливо и подходит всегда. **Oiga** тоже на «вы», но, смотря по тону, может звучать резковато. На «ты» — **Perdona**, **Oye**, **Disculpa**. Пока это готовые формулы: повелительное на «вы» будет позже.\n«Заблудиться» — **perderse**: **Siempre me pierdo en el centro**. «Не могу найти вокзал» — **No encuentro la estación**.",
          ejemplos: [
            { es: "Perdone, ¿dónde está la estación?", ru: "Простите, где вокзал?" },
            { es: "Oye, ¿cómo llego a la plaza?", ru: "Слушай, как мне пройти на площадь?" }
          ]
        }
      ],
      frases: ["FRE-098", "FRE-099", "FRE-100", "FRE-101", "FRE-102"],
      dialogos: ["DLE-025"],
      vocab: ["girar", "cruzar", "seguir", "parar", "todo recto", "esquina", "semáforo", "cruce", "rotonda", "puente", "avenida", "final", "mapa", "plano",
        "perdonar", "oír", "disculpar", "encontrar", "perderse", "decir"]
    },
    {
      id: "es6m5", n: 5, tipo: "leccion",
      titulo: "Tómalo, llámame",
      resumen: "Местоимение пишется слитно с повелительным: tómalo, llámame, ponlo.",
      intro: "С обычной формой глагола местоимение стоит перед ним: **lo tomo**. С повелительным — **после** и **слитно**: **tómalo**, **cógela**, **llámame**. Часто при этом появляется знак ударения (**tómalo**), но не всегда: **ponlo**, **dime**. Почему — ниже.",
      tablas: [
        { titulo: "Повелительное + местоимение", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "tómalo", ru: "toma + lo: возьми его" }, { es: "cógela", ru: "coge + la: возьми её" }],
          [{ es: "míralos", ru: "mira + los: посмотри на них" }, { es: "llámame", ru: "llama + me: позвони мне" }],
          [{ es: "espérame", ru: "espera + me: подожди меня" }, { es: "cómpralas", ru: "compra + las: купи их" }],
          [{ es: "ponlo", ru: "pon + lo: положи его" }, { es: "dime", ru: "di + me: скажи мне" }],
          [{ es: "hazlo", ru: "haz + lo: сделай это" }, { es: "tenlo", ru: "ten + lo: держи его" }]] }
      ],
      secciones: [
        {
          id: "es6-pegado",
          titulo: "Местоимение — после и слитно",
          texto: "Сравни:\n· обычная форма: **Lo tomo** — «я его беру» (местоимение перед глаголом, урок 5);\n· повелительное: **Tómalo** — «возьми его» (после глагола, одним словом).\nТак со всеми местоимениями: **lo, la, los, las** и **me, te, nos**: **llámame**, **espérame**, **míralos**.",
          errores: [
            { mal: "Toma lo.", bien: "Tómalo.", por: "С повелительным — одним словом." },
            { mal: "Lo toma. (возьми)", bien: "Tómalo.", por: "«Возьми его» — местоимение после повелительного." }
          ],
          chequeo: [
            { pide: "¿El billete? ___.", opciones: ["Cógelo", "Lo coge", "Coge lo"], ok: "Cógelo", por: "Повелительное + местоимение — одним словом." }
          ]
        },
        {
          id: "es6-tilde-imperativo",
          titulo: "Tómalo: откуда знак ударения",
          texto: "Ударение остаётся там же, где было: **TO**-ma → **TÓ**-ma-lo. Но теперь в слове на один слог больше, и ударение падает на третий слог с конца — такие слова всегда пишутся со знаком ударения (урок 1): **tómalo**, **cógela**, **llámame**, **espérame**.\nУ односложных форм знака нет: **ponlo**, **dime**, **hazlo**, **tenlo**.",
          destacado: "**toma** → **tómalo** (со знаком) · **pon** → **ponlo** (без знака).",
          errores: [
            { mal: "Tomalo.", bien: "Tómalo.", por: "Ударение на третий слог с конца — знак нужен." },
            { mal: "Pónlo.", bien: "Ponlo.", por: "**pon** — один слог: **ponlo** без знака." }
          ]
        },
        {
          id: "es6-solo-uno",
          titulo: "Пока — одно местоимение",
          texto: "Два местоимения подряд («скажи мне это» — **dímelo**) — это урок 11. И «не бери» (**no lo tomes**) использует другую форму, она тоже будет позже. Пока — только утвердительное повелительное с одним местоимением.",
          ojo: "**Dime** — «скажи мне», очень частое слово. Так начинают разговор по телефону и в магазине: **Dime** — «слушаю тебя»."
        }
      ],
      vocab: []
    },
    {
      id: "es6m6", n: 6, tipo: "leccion",
      titulo: "Voy a comer",
      resumen: "ir a + инфинитив: планы на будущее.",
      intro: "О планах на ближайшее будущее говорят так: **ir a** + инфинитив: **Voy a comer** — «Я собираюсь поесть», «Я поем». Спрягается только **ir**, который ты уже знаешь.",
      tablas: [
        { titulo: "Ir a + инфинитив", encabezados: ["Кто", "Форма"], filas: es6Tabla("ir", "a comer") },
        { titulo: "¿Cuándo?", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "esta tarde", ru: "сегодня днём" }, { es: "esta noche", ru: "сегодня вечером" }],
          [{ es: "mañana", ru: "завтра" }, { es: "pasado mañana", ru: "послезавтра" }],
          [{ es: "el próximo lunes", ru: "в следующий понедельник" }, { es: "este fin de semana", ru: "в эти выходные" }],
          [{ es: "la semana que viene", ru: "на следующей неделе" }, { es: "el mes que viene", ru: "в следующем месяце" }],
          [{ es: "pronto", ru: "скоро" }, { es: "luego", ru: "потом" }]] }
      ],
      secciones: [
        {
          id: "es6-ir-a",
          titulo: "Voy a + инфинитив",
          texto: "**ir** (voy, vas, va, vamos, vais, van) + **a** + инфинитив: **Voy a comer**, **¿Vas a venir?**, **Vamos a ver una película**. **a** обязательно.",
          comparacion: "Как русское «собираюсь» или просто будущее время: **Mañana voy a estudiar** — «Завтра я буду заниматься».",
          ejemplos: [
            { es: "Esta noche voy a cocinar.", ru: "Сегодня вечером я буду готовить." },
            { es: "¿Qué vas a hacer el sábado?", ru: "Что ты будешь делать в субботу?" },
            { es: "Mis padres van a venir en julio.", ru: "Мои родители приедут в июле." }
          ],
          errores: [
            { mal: "Voy comer.", bien: "Voy a comer.", por: "**a** не пропускают." },
            { mal: "Voy a como.", bien: "Voy a comer.", por: "После **a** — инфинитив." }
          ],
          chequeo: [
            { pide: "Mañana ___ a trabajar. (nosotros)", opciones: ["vamos", "voy", "van"], ok: "vamos", por: "**nosotros** → **vamos a**." }
          ]
        },
        {
          id: "es6-planes",
          titulo: "Esta noche, la semana que viene",
          texto: "«Сегодня вечером» — **esta noche**, «сегодня днём» — **esta tarde** (без предлога). «В следующий…» — **el próximo** + день или **… que viene**: **el próximo lunes**, **la semana que viene**, **el mes que viene**. «Послезавтра» — **pasado mañana**.",
          ejemplos: [
            { es: "El próximo sábado vamos a ir a la playa.", ru: "В следующую субботу мы поедем на пляж." },
            { es: "La semana que viene voy a Madrid.", ru: "На следующей неделе я еду в Мадрид." }
          ]
        },
        {
          id: "es6-vamos-a",
          titulo: "¡Vamos a…!",
          texto: "**¡Vamos a…!** — ещё и предложение «давай(те)…!»: **¡Vamos a comer!** — «Пойдём поедим!». Ответ: **¡Vale!** или **¡Vamos!**",
          ejemplos: [
            { es: "—¡Vamos al cine! —¡Vale!", ru: "— Пошли в кино! — Давай!" }
          ]
        }
      ],
      frases: ["FRE-107", "FRE-108"],
      dialogos: ["DLE-027"],
      vocab: ["pronto", "pasado"]
    },
    {
      id: "es6m7", n: 7, tipo: "leccion",
      titulo: "¿Puedo…? Debes…",
      resumen: "Попросить разрешения, обязать и посоветовать: poder, tener que, deber.",
      intro: "Три глагола уже знакомы или почти знакомы: **poder** — «можно», **tener que** — «надо, обязан» (урок 5), и новый — **deber**: «следует, тебе стоит», для советов.",
      tablas: [
        { titulo: "Разрешение, обязанность, совет", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "¿Puedo entrar?", ru: "Можно войти?" }, { es: "Sí, claro. / No, no puedes.", ru: "Да, конечно. / Нет, нельзя." }],
          [{ es: "Tienes que pagar.", ru: "Ты должен заплатить (обязан)." }, { es: "No tienes que pagar.", ru: "Платить не нужно." }],
          [{ es: "Debes descansar.", ru: "Тебе следует отдохнуть." }, { es: "No debes trabajar mucho.", ru: "Тебе не стоит столько работать." }]] },
        { titulo: "Deber", encabezados: ["Кто", "Форма"], filas: es6Tabla("deber") }
      ],
      secciones: [
        {
          id: "es6-puedo",
          titulo: "¿Puedo…? — Sí, claro",
          texto: "Разрешение спрашивают с **poder** (урок 5): **¿Puedo entrar?**, **¿Puedo abrir la ventana?** Отвечают: **Sí, claro** — «да, конечно»; **No, no puedes** — «нет, нельзя».",
          ejemplos: [
            { es: "—¿Puedo pagar con tarjeta? —Sí, claro.", ru: "— Можно картой? — Да, конечно." }
          ]
        },
        {
          id: "es6-deber",
          titulo: "Debes descansar",
          texto: "**deber** + инфинитив — «следует, должен»: так часто дают совет, но им можно выразить и обязанность. Это правильный глагол на **-er**: debo, debes, debe, debemos, debéis, deben.\n**tener que** обычно звучит как конкретная необходимость: **Tienes que pagar**. **deber** чаще звучит как рекомендация: **Debes descansar** — «тебе следует отдохнуть». Разница не строгая: оба могут значить и совет, и обязанность — смотря по ситуации.\n«Не стоит» — **no debes**: **No debes trabajar mucho**.",
          comparacion: "**tengo que** — «я должен, обязан»; **debo** — «мне следует».",
          ejemplos: [
            { es: "Estás muy cansado. Debes dormir más.", ru: "Ты очень устал. Тебе надо больше спать." },
            { es: "En el museo no debes hablar alto.", ru: "В музее не стоит громко говорить." }
          ],
          chequeo: [
            { pide: "Estás cansado: ___ descansar.", opciones: ["debes", "puedes", "vas"], ok: "debes", por: "Совет — **debes**." }
          ]
        }
      ],
      frases: ["FRE-113"],
      vocab: ["deber"]
    },
    {
      id: "es6m8", n: 8, tipo: "leccion",
      titulo: "Me duele la cabeza",
      resumen: "Части тела; me duele / me duelen; tengo fiebre, tos, gripe.",
      intro: "Чтобы сказать, что болит, испанский использует ту же схему, что и **gustar** (урок 4): **Me duele la cabeza** — «у меня болит голова» (болит **голова**, а **me** — кому). А болезни и симптомы — с **tener**: **tengo fiebre**, **tengo tos**.",
      tablas: [
        { titulo: "El cuerpo", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la cabeza", ru: "голова" }, { es: "la espalda", ru: "спина" }],
          [{ es: "el ojo", ru: "глаз" }, { es: "el brazo", ru: "рука (от плеча до кисти)" }],
          [{ es: "la oreja", ru: "ухо" }, { es: "la mano", ru: "кисть руки" }],
          [{ es: "la nariz", ru: "нос" }, { es: "el dedo", ru: "палец" }],
          [{ es: "la boca", ru: "рот" }, { es: "el estómago", ru: "желудок; живот" }],
          [{ es: "el diente, la muela", ru: "зуб, коренной зуб" }, { es: "la pierna", ru: "нога" }],
          [{ es: "la garganta", ru: "горло" }, { es: "el pie", ru: "ступня" }]] },
        { titulo: "Doler", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Me duele la cabeza.", ru: "У меня болит голова." }, { es: "Me duelen los pies.", ru: "У меня болят ноги." }],
          [{ es: "¿Te duele la garganta?", ru: "У тебя болит горло?" }, { es: "No me duele nada.", ru: "У меня ничего не болит." }]] },
        { titulo: "Estoy enfermo", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Tengo fiebre.", ru: "У меня температура." }, { es: "Tengo tos.", ru: "У меня кашель." }],
          [{ es: "Tengo gripe.", ru: "У меня грипп." }, { es: "Tengo un resfriado.", ru: "Я простужен(а)." }],
          [{ es: "Tengo dolor de cabeza.", ru: "У меня болит голова." }, { es: "Estoy enfermo / enferma.", ru: "Я болен / больна." }]] }
      ],
      secciones: [
        {
          id: "es6-doler",
          titulo: "Me duele, me duelen",
          texto: "**doler** работает как **gustar**: то, что болит, — подлежащее, а кому — **me**, **te**:\n· одна часть тела — **duele**: **Me duele la cabeza**;\n· несколько — **duelen**: **Me duelen los pies**.\nЧасть тела — с артиклем, без «мой»: **Me duele la mano**, а не «mi mano».\nКорень меняется: o → ue (**duele**).",
          comparacion: "Как русское «у меня болит»: болит **голова**, а я — тот, «у кого».",
          ejemplos: [
            { es: "Me duele mucho la espalda.", ru: "У меня очень болит спина." },
            { es: "¿Te duelen los ojos?", ru: "У тебя болят глаза?" }
          ],
          errores: [
            { mal: "Me duele los pies.", bien: "Me duelen los pies.", por: "Несколько — **duelen**." },
            { mal: "Me duele mi cabeza.", bien: "Me duele la cabeza.", por: "Часть тела — с артиклем: **la cabeza**." },
            { mal: "Yo duelo la cabeza.", bien: "Me duele la cabeza.", por: "**doler** — как **gustar**: **me duele**." }
          ],
          chequeo: [
            { pide: "Me ___ las piernas.", opciones: ["duelen", "duele", "duelo"], ok: "duelen", por: "**las piernas** — мн. ч.: **duelen**." }
          ]
        },
        {
          id: "es6-enfermo",
          titulo: "Tengo fiebre, estoy enfermo",
          texto: "Болезни и симптомы — с **tener**: **tengo fiebre**, **tengo tos**, **tengo gripe**, **tengo un resfriado**, **tengo dolor de cabeza**.\n«Я болен» — **estoy enfermo / enferma** (состояние — **estar**, урок 3). «Здоровый» — **sano**.\nСпросить, что случилось: **¿Qué te pasa?** — «что с тобой?».",
          ejemplos: [
            { es: "—¿Qué te pasa? —Tengo fiebre y me duele la garganta.", ru: "— Что с тобой? — У меня температура и болит горло." }
          ],
          errores: [
            { mal: "Soy enfermo.", bien: "Estoy enfermo.", por: "Состояние — **estar**." },
            { mal: "Estoy fiebre.", bien: "Tengo fiebre.", por: "Температура — **tener**." }
          ]
        }
      ],
      frases: ["FRE-109", "FRE-110", "FRE-111"],
      vocab: ["cuerpo", "cabeza", "oreja", "nariz", "boca", "muela", "garganta", "espalda", "brazo", "dedo", "estómago", "pierna", "pie",
        "doler", "dolor", "fiebre", "tos", "gripe", "resfriado", "sano", "salud", "pasar"],
      ampliacion: {
        titulo: "Ещё о здоровье",
        intro: "Ещё три слова. Они не входят в проверку урока. **barriga** — разговорное «живот»; **oído** — внутреннее ухо и слух: **Me duele el oído** — у меня болит ухо (внутри).",
        vocab: ["barriga", "oído", "alergia"]
      }
    },
    {
      id: "es6m9", n: 9, tipo: "leccion",
      titulo: "En la farmacia y en el médico",
      resumen: "Аптека, записаться к врачу, неотложка; cada ocho horas.",
      intro: "В Испании при лёгком недомогании часто сначала идут в аптеку: фармацевт советует лекарство без рецепта. К врачу записываются в **centro de salud** — районную поликлинику (центр первичной помощи). В экстренном случае — **urgencias** в больнице или телефон 112.",
      tablas: [
        { titulo: "En la farmacia", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el medicamento", ru: "лекарство" }, { es: "la pastilla", ru: "таблетка" }],
          [{ es: "la receta", ru: "рецепт" }, { es: "cada ocho horas", ru: "каждые восемь часов" }],
          [{ es: "¿Tienes algo para la tos?", ru: "У тебя есть что-нибудь от кашля?" }, { es: "Toma una pastilla cada ocho horas.", ru: "Принимай таблетку каждые восемь часов." }]] },
        { titulo: "En el médico", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Quería pedir cita.", ru: "Я бы хотел(а) записаться на приём." }, { es: "el centro de salud", ru: "поликлиника" }],
          [{ es: "el médico, la médica", ru: "врач" }, { es: "el doctor, la doctora", ru: "доктор" }],
          [{ es: "urgencias", ru: "неотложная помощь" }, { es: "el hospital", ru: "больница" }]] }
      ],
      secciones: [
        {
          id: "es6-farmacia",
          titulo: "¿Tienes algo para la tos?",
          texto: "В аптеке, как и в магазине, обычно говорят на **tú** (урок 5): **¿Tienes algo para la tos?** — «Есть что-нибудь от кашля?» (**para** — «для, от»). На **usted** — **¿Tiene algo…?** Или: **Quería algo para el dolor de cabeza**.\nКак принимать: **Toma una pastilla cada ocho horas** — «принимай одну таблетку каждые восемь часов». Некоторые лекарства продают только по рецепту — **con receta**.",
          ejemplos: [
            { es: "¿Tienes algo para el dolor de garganta?", ru: "Есть что-нибудь от боли в горле?" },
            { es: "Este medicamento necesita receta.", ru: "Это лекарство только по рецепту." }
          ]
        },
        {
          id: "es6-medico",
          titulo: "Pedir cita",
          texto: "Записаться к врачу — **pedir cita**: **Quería pedir cita con el médico** (формула **quería** — из урока 5). Регистратура спросит: **¿Qué te pasa?** — «что случилось?» (**te** — урок 7; и здесь часто на «tú») и предложит время: **¿Puedes venir el jueves a las cinco?**\nВрач даёт советы с **tener que** и **deber**: **Tienes que descansar**, **Debes beber mucha agua**.",
          ejemplos: [
            { es: "Quería pedir cita para mañana.", ru: "Я бы хотел(а) записаться на завтра." },
            { es: "Tienes que tomar una pastilla cada doce horas.", ru: "Тебе надо принимать таблетку каждые двенадцать часов." }
          ],
          ojo: "**la cita** — и «приём у врача», и «свидание». Какое значение — понятно по фразе."
        }
      ],
      frases: ["FRE-112"],
      dialogos: ["DLE-028", "DLE-029"],
      vocab: ["medicamento", "pastilla", "receta", "cita", "doctor", "urgencias", "cada"],
      ampliacion: {
        titulo: "Ещё в аптеке",
        intro: "Ещё три слова. Они не входят в проверку урока. **Una tirita** — пластырь: так говорят в Испании.",
        vocab: ["ambulancia", "herida", "tirita"]
      }
    },
    {
      id: "es6m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе: дорога, метро, планы на субботу, аптека и запись к врачу. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом. Для тренировки чтения выключи подсказку кириллицей и перевод.",
      dialogos: ["DLE-025", "DLE-026", "DLE-027", "DLE-028", "DLE-029"]
    },
    {
      id: "es6m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Как пройти: разговор по ролям, маршрут на плане и твой текст.",
      intro: "Три части. **Разговор по ролям:** прохожий, сотрудник метро и фармацевт говорят с тобой, а ты отвечаешь своими словами. **Маршрут на плане:** турист спрашивает дорогу — объясни путь по нарисованному плану. **Потом напиши** по-испански (8–12 фраз): как дойти от твоего дома до какого-нибудь места и как ты проведёшь выходные с друзьями — куда вы пойдёте, на чём поедете, во сколько. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      rutas: true,
      requisitos: [
        { txt: "Куда (voy a…, al…)", rx: "\\b(voy|vas|va|vamos|vais|van) (a|al)\\b" },
        { txt: "Транспорт (en metro, a pie…)", rx: "(\\ben (metro|autobús|tren|coche|taxi|bicicleta|moto)\\b|a pie|andando)" },
        { txt: "Дорога в повелительном (sigue, gira, cruza, coge…)", rx: "\\b(sigue|gira|cruza|coge|toma|sube|baja|ve|ven|sal)\\b" },
        { txt: "Направо, налево, прямо", rx: "(a la derecha|a la izquierda|todo recto)" },
        { txt: "Сколько времени (tardo…, minutos)", rx: "\\b(tardo|tardas|tarda|tardamos|tardáis|tardan|minutos?|horas?)\\b" },
        { txt: "План: ir a + инфинитив (vamos a ver…)", rx: "\\b(voy|vas|va|vamos|vais|van) a [a-záéíóúñ]+(ar|er|ir)\\b" },
        { txt: "Когда (el sábado, mañana, el próximo…)", rx: "(sábado|domingo|mañana|próximo|que viene|esta (tarde|noche)|fin de semana)" },
        { txt: "Предлог маршрута (desde, hasta, por)", rx: "\\b(desde|hasta|por)\\b" }
      ],
      consejos: [
        { rx: "\\b(voy|vas|va|vamos|vais|van) en (casa|clase|el|la|madrid|barcelona)\\b", msg: "Куда — **a**: **voy a casa**, **voy al cine**." },
        { rx: "\\b(estoy|estás|está|estamos|estáis|están) a (casa|madrid|barcelona|la|el)\\b", msg: "Где — **en**: **estoy en casa**." },
        { rx: "\\bcon (el )?(metro|autobús|tren|coche|taxi|bicicleta|moto)\\b", msg: "Транспорт — **en**: **en metro**." },
        { rx: "\\ben pie\\b", msg: "Пешком — **a pie**." },
        { rx: "\\b(voy|vas|va|vamos|vais|van) (comer|ir|ver|hacer|estudiar|salir|comprar|coger|tomar|cocinar|descansar)\\b", msg: "**ir a** + инфинитив: **voy a comer**." },
        { rx: "\\b(toma|coge|mira|llama|compra|espera|abre|cruza) (lo|la|los|las|me)\\b", msg: "С повелительным — одним словом: **tómalo**, **llámame**." },
        { rx: "\\b(tomalo|tomala|cogelo|cogela|llamame|esperame|miralo|mirala|compralo|comprala)\\b", msg: "Нужен знак ударения: **tómalo**, **llámame**." },
        { rx: "\\ba el\\b", msg: "**a** + **el** = **al**: **voy al cine**." },
        { rx: "\\bde el\\b", msg: "**de** + **el** = **del**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es6m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Куда и где, транспорт, как пройти, планы и советы, здоровье.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Куда, где, откуда", tipos: ["a-en-de", "llevar-traer", "recorrido", "error"], n: 4 },
        { nombre: "Транспорт", tipos: ["transporte-escribir", "transporte-frase", "conjugar", "pregunta"], n: 4 },
        { nombre: "Как пройти", tipos: ["imperativo", "imperativo-elegir", "ruta-elegir", "imperativo-pronombre", "imperativo-contexto", "imperativo-pegado"], n: 4 },
        { nombre: "Планы и советы", tipos: ["ir-a", "ir-a-frase", "cuando", "consejo"], n: 4 },
        { nombre: "Здоровье и общение", tipos: ["cuerpo-escribir", "doler", "doler-escribir", "enfermo", "farmacia", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs6Modulo(id) { return UNIDAD_ES_6.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_6 = UNIDAD_ES_6;
window.unidadEs6Modulo = unidadEs6Modulo;

/* ── Vocabulario: palabras → IDs ──
   Palabras con dos entradas: pasajero y plano (los sustantivos), deber (el verbo),
   pasado (adjetivo: pasado mañana). */
const ES6_ID_FIJO = { "pasajero": "ESP-02412", "plano": "ESP-02001", "deber": "ESP-00050", "pasado": "ESP-00311" };
function es6Id(w) {
  if (ES6_ID_FIJO[w]) return ES6_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const mayus = /^[A-ZÁÉÍÓÚÑ]/.test(w);
  const e = (mayus && LEXICON_ES.find(x => x.es === w && x.propio)) || LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es6Vocab(m) { return (m.vocab || []).map(es6Id).filter(Boolean); }
function es6Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es6Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U6 (sin las que ya enseñaron la U1 a la U5, ni la ampliación) */
function es6Objetivo() {
  const antes = new Set([].concat(typeof es1Objetivo === "function" ? es1Objetivo() : [], typeof es2Objetivo === "function" ? es2Objetivo() : [],
    typeof es3Objetivo === "function" ? es3Objetivo() : [], typeof es4Objetivo === "function" ? es4Objetivo() : [], typeof es5Objetivo === "function" ? es5Objetivo() : []));
  const out = [];
  UNIDAD_ES_6.modulos.forEach(m => es6Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs6() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const cap = t => t.charAt(0).toUpperCase() + t.slice(1);
  const lex = w => { const id = es6Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡]?)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  /* Elegir: [frase con ___, correcta, opciones, explicación, palabra?, módulo?, regla?] */
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES6-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok)) : ok, explicacion: exp });
  });
  const frases = (pref, tipo, lista, pide, dif, semilla) => lista.forEach(([ok, mal, exp, mod, regla], i) => {
    out.push({ id: "ES6-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: mod, regla, grupo: pref + "-" + i,
      pide, opciones: baraja([ok].concat(mal), i + semilla), correcta: ok, oir: ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide, semilla) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
    out.push({ id: "ES6-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  const escenas = (pref, tipo, lista, mod, regla, semilla, pide, pideW) => lista.forEach(([escena, w, mal, esper], i) => {
    const id = es6Id(w), e = id && lexEs(id), art = e && e.gender === "f" ? ["la", "una"] : ["el", "un"];
    const esperadas = esper || [w, art[0] + " " + w, art[1] + " " + w];
    out.push({ id: "ES6-" + pref + "-" + i, tipo, forma: "elegir", dificultad: 1, modulo: mod, regla, grupo: pref + "-" + w, lex: lex(w),
      pide: pide || "Что это?", escena, opciones: baraja([esperadas[0]].concat(mal), i + semilla), correcta: esperadas[0], oir: esperadas[0], explicacion: "**" + esperadas[0] + "**" + (e ? " — «" + (e.senses[0] || {}).ru + "»." : "") });
    out.push({ id: "ES6-" + pref + "w-" + i, tipo: tipo + "-escribir", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + w, lex: lex(w),
      pide: pideW || "Что это? Напиши по-испански.", escena, esperadas, idioma: "es", oir: esperadas[esper ? 0 : 1], explicacion: "**" + esperadas[esper ? 0 : 1] + "**" + (e ? " — «" + (e.senses[0] || {}).ru + "»." : "") });
  });

  /* 1. Conjugar en presente */
  ES6_CONJ.forEach(([frase, inf, p, mod, regla], i) => {
    const f = es6Pres(inf, p); if (!f) return;
    const sola = frase.replace(/\s*\([^)]*\)\s*$/, "");
    const audio = mayusInicial(sola.replace("___", f));
    out.push({ id: "ES6-cj-" + i, tipo: "conjugar", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "cj-" + i, lex: lex(inf),
      pide: "Впиши глагол «" + inf + "» в нужной форме.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES6_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (ES6_CONJ_NOTA[inf] ? ". " + ES6_CONJ_NOTA[inf] : ".") });
  });
  /* 2. A, en, de; ¿adónde? */
  elegir("ae", "a-en-de", ES6_A_EN_DE, 1, "es6-a-en-de", "A, en или de?", 1, 11);
  elegir("lt", "llevar-traer", ES6_LLEVAR_TRAER, 1, "es6-llevar-traer", "Что подходит?", 2, 21);
  /* 3. Transporte: escenas y en / a */
  escenas("tr", "transporte", ES6_TRANSPORTE, 2, "es6-en-metro", 31, "¿Cómo vas?", "¿Cómo vas? Напиши по-испански.");
  elegir("tp", "transporte-frase", ES6_TRANSPORTE_FRASE, 2, "es6-coger", "Что подходит?", 2, 41);
  /* 4. Recorridos */
  elegir("re", "recorrido", ES6_RECORRIDO, 3, "es6-por", "Какой предлог нужен?", 2, 51);
  /* 5. Imperativo: escribir la forma de tú (sale de data-verbos-es.js) */
  ES6_IMP.forEach(([frase, inf, mod, regla], i) => {
    const f = es6Imp(inf); if (!f) return;
    const audio = mayusInicial(frase.replace(/\s*\([^)]*\)\s*/, "").replace("___", f));
    out.push({ id: "ES6-im-" + i, tipo: "imperativo", forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: "im-" + inf, lex: lex(inf),
      pide: "Впиши повелительное на «ты» от «" + inf + "».", grande: frase, esperadas: [f, cap(f), audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + inf + "** → **" + f + "**" + (ES6_IMP_NOTA[inf] ? ". " + ES6_IMP_NOTA[inf] : ".") });
  });
  elegir("ie", "imperativo-elegir", ES6_IMP_ELEGIR, 4, "es6-indicaciones", "Что подходит?", 2, 61);
  /* 6. El camino sobre el plano */
  ES6_RUTAS.forEach((r, j) => {
    const L = ES6_LUGARES[j % ES6_LUGARES.length], modelo = es6Ruta(r);
    const otras = ES6_RUTAS.map(es6Ruta).filter(x => x !== modelo).filter((x, i, a) => a.indexOf(x) === i);
    out.push({ id: "ES6-rt-" + j, tipo: "ruta-elegir", forma: "elegir", dificultad: 1, modulo: 4, regla: "es6-indicaciones", grupo: "rt-" + j,
      pide: "Как пройти до места на плане (" + L[0] + " — " + L[1] + ")?", plano: { ruta: r, destino: L[0] },
      opciones: baraja([modelo].concat(baraja(otras, j + 71).slice(0, 2)), j + 71), correcta: modelo, oir: modelo, explicacion: modelo });
  });
  /* 7. Imperativo + pronombre */
  ES6_IMP_PRON.forEach(([base, pron, ok, ru], i) => {
    out.push({ id: "ES6-ip-" + i, tipo: "imperativo-pronombre", forma: "escribir", dificultad: 3, modulo: 5, regla: /^(pon|di|haz|ten|ven|sal)$/.test(base) ? "es6-tilde-imperativo" : "es6-tilde-imperativo", grupo: "ip-" + i,
      pide: "Собери одно слово (повелительное + местоимение).", grande: base + " + " + pron, esperadas: [ok, cap(ok)], idioma: "es", foco: true, formaCasi: false, oir: cap(ok),
      explicacion: "**" + ok + "** — «" + ru + "»." + (/[áéíóú]/.test(ok) ? " Ударение на третий слог с конца — со знаком." : " Без знака ударения.") });
  });
  ES6_IMP_CTX.forEach(([frase, ok, exp], i) => {
    out.push({ id: "ES6-ic-" + i, tipo: "imperativo-contexto", forma: "escribir", dificultad: 3, modulo: 5, regla: "es6-pegado", grupo: "ic-" + i,
      pide: "Замени выделенное местоимением.", grande: frase, esperadas: [ok], idioma: "es", foco: true, formaCasi: false, oir: ok, explicacion: exp });
  });
  elegir("ix", "imperativo-pegado", ES6_IMP_PEGADO, 5, "es6-pegado", "Какая форма правильная?", 2, 81);
  /* 8. Ir a + infinitivo */
  ES6_IR_A.forEach(([frase, p, inf, exp], i) => {
    const f = es6Pres("ir", p) + " a " + inf, audio = mayusInicial(frase.replace(/\s*\([^)]*\)\s*/, "").replace("___", f));
    out.push({ id: "ES6-ia-" + i, tipo: "ir-a", forma: "escribir", dificultad: 3, modulo: 6, regla: "es6-ir-a", grupo: "ia-" + i, lex: lex(inf),
      pide: "Что будет? Впиши ir a + инфинитив.", grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES6_PERS[p][0].split(" / ")[0] + "** → **" + f + "**." + (exp ? " " + exp : "") });
  });
  frases("if", "ir-a-frase", ES6_IR_A_FRASE, "Какая фраза правильная?", 2, 91);
  elegir("cu", "cuando", ES6_CUANDO, 6, "es6-planes", "Что подходит?", 2, 101);
  /* 9. Permiso, obligación y consejo */
  elegir("pc", "consejo", ES6_CONSEJO, 7, "es6-deber", "Что подходит?", 2, 111);
  /* 10. El cuerpo y doler */
  escenas("cp", "cuerpo", ES6_CUERPO, 8, "es6-doler", 121);
  elegir("do", "doler", ES6_DOLER, 8, "es6-doler", "Что подходит?", 2, 131);
  escribirFalta("dw", "doler-escribir", ES6_DOLER_ESC, "Впиши duele или duelen.", 141);
  elegir("en", "enfermo", ES6_ENFERMO, 8, "es6-enfermo", "Что подходит?", 2, 151);
  /* 11. Farmacia y médico */
  elegir("fa", "farmacia", ES6_FARMACIA, 9, "es6-farmacia", "Что подходит?", 2, 161);
  /* 12. Preguntas */
  ES6_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES6-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 171), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 13. Errores típicos */
  ES6_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES6-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 14. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es6Objetivo());
  const dictado = (w, id, mod, ampl) => {
    const e = lexEs(id);
    if (!e || /\s/.test(w) || out.some(x => x.id === "ES6-dic-" + id)) return;
    const x = { id: "ES6-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w, mayus: e.propio || undefined,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_6.modulos.forEach(m => {
    (m.vocab || []).forEach(w => { const id = es6Id(w); if (id && OBJ.has(id)) dictado(w, id, m.n); });
    if (m.ampliacion) m.ampliacion.vocab.forEach(w => { const id = es6Id(w); if (id) dictado(w, id, m.n, true); });
  });
  /* 15. Situaciones y respuestas; dictado y orden de las frases de la U6 */
  ES6_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES6-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 181), correcta: ok, oir: ok, explicacion: exp });
  });
  ES6_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES6-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 191), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 6) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_6.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES6-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 201);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES6-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });

  /* 16. Proyecto: conversaciones por turnos y el camino sobre el plano (azSituacionEs) */
  ES6_TURNOS.forEach((T, i) => {
    out.push({ id: "ES6-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: "🗣️ " + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });
  ES6_RUTAS_PROYECTO.forEach(([r, k], j) => {
    const L = ES6_LUGARES[k], modelo = es6Ruta(r);
    out.push({ id: "ES6-rs-" + j, tipo: "ruta", forma: "situacion", dificultad: 3, modulo: 11, grupo: "rs-" + j,
      pide: "Турист спрашивает дорогу. Объясни путь по плану.", contexto: [{ p: "Turista", es: "Perdona, ¿dónde está " + L[1] + "?" }],
      plano: { ruta: r, destino: L[0] }, pista: "Sigue todo recto… Gira a la derecha / a la izquierda…",
      sit: { necesita: [{ es: "прямо", formas: ["todo recto", "~recto"] }].concat(es6Giros(r).map(x => ({ es: x === "a la derecha" ? "направо" : "налево", formas: [x, "~" + x.split(" ").pop()] }))),
        orden: true, modelos: [modelo] },
      explicacion: modelo });
  });

  /* Profundización y formas (13/11/2026) */
  if (typeof es6Prof === "function") es6Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
const ES6_CONJ = [
  ["Yo ___ el pan a casa.", "traer", 0, 1, "es6-llevar-traer"],
  ["¿Me ___ un café? (tú)", "traer", 1, 1, "es6-llevar-traer"],
  ["Yo ___ el libro a clase.", "llevar", 0, 1, "es6-llevar-traer"],
  ["Nosotros ___ en el museo.", "entrar", 3, 1, "es6-llegar-salir"],
  ["Yo ___ el metro en la plaza.", "coger", 0, 2, "es6-coger"],
  ["¿___ el autobús? (tú)", "coger", 1, 2, "es6-coger"],
  ["Yo ___ veinte minutos en metro.", "tardar", 0, 2, "es6-tardar"],
  ["¿Cuánto ___ el tren? (él)", "tardar", 2, 2, "es6-tardar"],
  ["Mis amigos ___ el autobús.", "esperar", 5, 2, "es6-coger"],
  ["Nosotros ___ en la próxima estación.", "bajar", 3, 2, "es6-coger"],
  ["Ana ___ de línea en el centro.", "cambiar", 2, 2, "es6-coger"],
  ["Yo ___ todo recto hasta la plaza.", "seguir", 0, 4, "es6-indicaciones"],
  ["No ___ la estación. (yo)", "encontrar", 0, 4, "es6-perdone"],
  ["Tú ___ descansar.", "deber", 1, 7, "es6-deber"],
  ["Nosotros ___ estudiar más.", "deber", 3, 7, "es6-deber"],
  ["Vosotros ___ beber mucha agua.", "deber", 4, 7, "es6-deber"]
];
const ES6_CONJ_NOTA = { traer: "**yo** — **traigo**.", coger: "**yo** — **cojo** (g → j перед o).", seguir: "**yo** — **sigo**.", encontrar: "o → ue.", deber: "**deber** + инфинитив — совет." };
const ES6_A_EN_DE = [
  ["Voy ___ Madrid.", "a", ["a", "en", "de"], "Куда — **a**."],
  ["Estoy ___ casa.", "en", ["en", "a", "de"], "Где — **en**."],
  ["Vengo ___ la oficina.", "de", ["de", "a", "en"], "Откуда — **de**."],
  ["Mañana vamos ___ la playa.", "a", ["a", "en", "de"], "Куда — **a**."],
  ["Vivo ___ Barcelona.", "en", ["en", "a", "de"], "Где — **en**."],
  ["Llego ___ casa a las siete.", "a", ["a", "en", "de"], "**llegar a** — прибыть куда."],
  ["Salgo ___ casa a las ocho.", "de", ["de", "a", "en"], "**salir de** — выйти откуда."],
  ["Voy ___ banco.", "al", ["al", "a el", "en el"], "**a** + **el** = **al**."],
  ["Vuelvo ___ trabajo a las seis.", "del", ["del", "de el", "al"], "**de** + **el** = **del**."],
  ["Ahora estamos ___ la estación.", "en", ["en", "a", "de"], "Где — **en**."],
  ["¿___ vas? —A Correos.", "Adónde", ["Adónde", "Dónde", "De dónde"], "Куда — **¿Adónde?**"],
  ["¿___ estás? —En el metro.", "Dónde", ["Dónde", "Adónde", "De dónde"], "Где — **¿Dónde?**"],
  ["¿___ vienes? —De clase.", "De dónde", ["De dónde", "Adónde", "Dónde"], "Откуда — **¿De dónde?**"],
  ["Entramos ___ el museo.", "en", ["en", "de", "del"], "В Испании: **entrar en**."]
];
const ES6_LLEVAR_TRAER = [
  ["¿Me ___ un café, por favor? (сюда, ко мне)", "traes", ["traes", "llevas"], "Сюда, ко мне — **traer**."],
  ["___ los libros a clase. (yo, туда)", "Llevo", ["Llevo", "Traigo"], "Туда, от меня — **llevar**."],
  ["Te ___ a la estación en coche. (yo)", "llevo", ["llevo", "traigo"], "Отвезу тебя туда — **llevar**."],
  ["Vienes a mi casa: ¿___ el pan? (ко мне)", "traes", ["traes", "llevas"], "Ко мне домой (сюда) — **traer**."],
  ["—¿Vienes a mi casa? —Sí, ahora ___.", "voy", ["voy", "vengo"], "Ответ: «иду» к тебе — **voy**."]
];
/* Transporte: [emoji, palabra, distractores, respuestas que valen] */
const ES6_TRANSPORTE = [
  ["🚇", "metro", ["con metro", "a metro"], ["en metro"]], ["🚌", "autobús", ["con autobús", "a autobús"], ["en autobús"]],
  ["🚆", "tren", ["con tren", "a tren"], ["en tren"]], ["🚕", "taxi", ["con taxi", "a taxi"], ["en taxi"]],
  ["🚲", "bicicleta", ["con bicicleta", "a bicicleta"], ["en bicicleta", "en bici"]], ["✈️", "avión", ["con avión", "a avión"], ["en avión"]],
  ["🚢", "barco", ["con barco", "a barco"], ["en barco"]], ["🏍️", "moto", ["con moto", "a moto"], ["en moto"]],
  ["🚗", "coche", ["con coche", "a coche"], ["en coche"]], ["🚶", "a pie", ["en pie", "con pie"], ["a pie", "andando"]]
];
const ES6_TRANSPORTE_FRASE = [
  ["Para ir al centro, ___ el metro.", "coge", ["coge", "sube", "baja"], "Сесть на метро — **coger el metro**."],
  ["___ del autobús en la plaza.", "Bajo", ["Bajo", "Subo", "Cojo"], "Выйти из автобуса — **bajar del autobús**."],
  ["___ al autobús en la parada.", "Subo", ["Subo", "Bajo", "Cambio"], "Войти в автобус — **subir al autobús**."],
  ["Tienes que ___ de línea en la próxima estación.", "cambiar", ["cambiar", "coger", "tardar"], "Пересесть — **cambiar de línea**."],
  ["Un billete de ___, por favor.", "ida y vuelta", ["ida y vuelta", "salida y llegada", "andén"], "Туда и обратно — **ida y vuelta**."],
  ["El tren sale del ___ 3.", "andén", ["andén", "billete", "viaje"], "С какой платформы — **el andén**."],
  ["¿Cuánto ___ en llegar? (tú)", "tardas", ["tardas", "tienes", "vas"], "Сколько времени — **tardar**."],
  ["El avión sale del ___ a las ocho.", "aeropuerto", ["aeropuerto", "andén", "parada"], "Самолёт — из **aeropuerto**."]
];
const ES6_RECORRIDO = [
  ["Voy ___ casa al trabajo en metro.", "de", ["de", "por", "en"], "Откуда — **de**: **de casa al trabajo**."],
  ["___ aquí hasta la plaza son diez minutos.", "Desde", ["Desde", "Hacia", "Para"], "**desde… hasta…** — от… до…"],
  ["Desde las nueve ___ las cinco.", "hasta", ["hasta", "a la", "por"], "**desde… hasta…**"],
  ["Paseo ___ el parque.", "por", ["por", "para", "hasta"], "По парку — **por**."],
  ["Caminamos ___ la plaza.", "por", ["por", "de", "para"], "Через площадь — **por**."],
  ["___ ir al centro, coge el metro.", "Para", ["Para", "Por", "Desde"], "«Чтобы» — **para** + инфинитив."],
  ["Camina ___ el río.", "hacia", ["hacia", "desde", "para"], "В сторону реки — **hacia**."],
  ["Voy ___ la calle Mayor.", "por", ["por", "para", "desde"], "По улице — **por**."]
];
/* Imperativo: [frase con ___ y el infinitivo entre paréntesis, infinitivo, módulo, regla] */
const ES6_IMP = [
  ["___ a la derecha. (girar)", "girar", 4, "es6-imperativo"],
  ["___ la calle. (cruzar)", "cruzar", 4, "es6-imperativo"],
  ["___ el metro. (tomar)", "tomar", 4, "es6-imperativo"],
  ["___ el autobús 14. (coger)", "coger", 4, "es6-imperativo"],
  ["___ al tercer piso. (subir)", "subir", 4, "es6-imperativo"],
  ["___ todo recto. (seguir)", "seguir", 4, "es6-imperativo"],
  ["___ el plano. (mirar)", "mirar", 4, "es6-imperativo"],
  ["___ el autobús. (esperar)", "esperar", 4, "es6-imperativo"],
  ["___ la ventana. (abrir)", "abrir", 4, "es6-imperativo"],
  ["___ la puerta. (cerrar)", "cerrar", 4, "es6-imperativo"],
  ["___ a casa temprano. (volver)", "volver", 4, "es6-imperativo"],
  ["¡___ aquí! (venir)", "venir", 4, "es6-imperativo-irregular"],
  ["___ a la farmacia. (ir)", "ir", 4, "es6-imperativo-irregular"],
  ["___ de casa a las ocho. (salir)", "salir", 4, "es6-imperativo-irregular"],
  ["___ la mesa. (poner)", "poner", 4, "es6-imperativo-irregular"],
  ["___ la cena. (hacer)", "hacer", 4, "es6-imperativo-irregular"],
  ["___ tu nombre. (decir)", "decir", 4, "es6-imperativo-irregular"],
  ["___ el billete. (tener)", "tener", 4, "es6-imperativo-irregular"],
  ["___ la cuenta, por favor. (pagar)", "pagar", 4, "es6-imperativo"],
  ["___ en la próxima parada. (bajar)", "bajar", 4, "es6-imperativo"]
];
const ES6_IMP_NOTA = { seguir: "e → i, как в настоящем: **sigue**.", cerrar: "e → ie: **cierra**.", volver: "o → ue: **vuelve**.", coger: "Как форма **él**: **coge**.",
  venir: "Неправильная форма.", ir: "Неправильная форма.", salir: "Неправильная форма.", poner: "Неправильная форма.", hacer: "Неправильная форма.", decir: "Неправильная форма.", tener: "Неправильная форма." };
const ES6_IMP_ELEGIR = [
  ["En el semáforo, ___ a la izquierda.", "gira", ["gira", "giras", "girar"], "Объясняем дорогу — повелительное: **gira**."],
  ["___ la segunda calle a la derecha.", "Coge", ["Coge", "Coges", "Coger"], "**coge** — повелительное."],
  ["¡___ aquí, Ana!", "Ven", ["Ven", "Vienes", "Viene"], "От **venir** — **ven**."],
  ["___ todo recto hasta el puente.", "Sigue", ["Sigue", "Sigues", "Segue"], "**seguir** → **sigue**."],
  ["Al final de la calle, ___ el puente.", "cruza", ["cruza", "cruzas", "cruzar"], "**cruza** — повелительное."],
  ["___ a la farmacia, está abierta.", "Ve", ["Ve", "Va", "Vas"], "От **ir** — **ve**."]
];
/* Destinos del plano: [emoji, «el …»] */
const ES6_LUGARES = [["🏦", "el banco"], ["🏨", "el hotel"], ["☕", "la cafetería"], ["🏪", "la tienda"], ["🚇", "el metro"], ["🍽️", "el restaurante"], ["🏛️", "el museo"], ["💊", "la farmacia"], ["🌳", "el parque"]];
/* Caminos del plano (S = recto n cuadras, R = derecha, L = izquierda), los mismos que la U11 de Azbuka */
const ES6_RUTAS = ["S1 R S1", "S1 L S1", "S2 R S1", "S2 L S2", "S1 R S1 L S1", "S1 L S1 R S2", "S2 R S2 L S1", "S3 L S1 L S1", "S2 L S1 R S1", "S1 R S2 L S2", "S3 R S1", "S3"];
/* Imperativo + pronombre: [imperativo, pronombre, una palabra, ruso] */
const ES6_IMP_PRON = [
  ["toma", "lo", "tómalo", "возьми его"], ["coge", "la", "cógela", "возьми её"], ["mira", "los", "míralos", "посмотри на них"], ["llama", "me", "llámame", "позвони мне"],
  ["espera", "me", "espérame", "подожди меня"], ["compra", "las", "cómpralas", "купи их"], ["abre", "la", "ábrela", "открой её"], ["escucha", "me", "escúchame", "послушай меня"],
  ["cruza", "la", "crúzala", "перейди её"], ["pon", "lo", "ponlo", "положи его"], ["di", "me", "dime", "скажи мне"], ["haz", "lo", "hazlo", "сделай это"]
];
/* Con contexto: [frase con lo que hay que reemplazar, respuesta, explicación] */
const ES6_IMP_CTX = [
  ["Toma **el billete**.", "Tómalo.", "**el billete** → **lo**: **tómalo**."],
  ["Coge **la tarjeta**.", "Cógela.", "**la tarjeta** → **la**: **cógela**."],
  ["Mira **los horarios**.", "Míralos.", "**los horarios** → **los**: **míralos**."],
  ["Compra **las fresas**.", "Cómpralas.", "**las fresas** → **las**: **cómpralas**."],
  ["Pon **el abrigo** aquí.", "Ponlo aquí.", "**pon** — один слог: **ponlo** без знака."],
  ["Abre **la ventana**.", "Ábrela.", "**la ventana** → **la**: **ábrela**."]
];
const ES6_IMP_PEGADO = [
  ["¿El billete? ___.", "Cógelo", ["Cógelo", "Lo coge", "Coge lo"], "Повелительное + местоимение — одним словом: **cógelo**."],
  ["¿La dirección? ___.", "Escríbela", ["Escríbela", "Escribela", "La escribe"], "Со знаком ударения: **escríbela**."],
  ["Mañana estoy en casa: ___.", "llámame", ["llámame", "llamame", "me llama"], "**llama** + **me** → **llámame**, со знаком."],
  ["¿Las fresas? ___ en el mercado.", "Cómpralas", ["Cómpralas", "Compralas", "Las compra"], "**cómpralas** — со знаком."],
  ["¿Quieres hablar? ___.", "Dime", ["Dime", "Díme", "Me di"], "**di** — один слог: **dime** без знака."],
  ["¿La cena? ___ ahora.", "Hazla", ["Hazla", "Házla", "La haz"], "**haz** — один слог: без знака."]
];
/* Ir a + infinitivo: [frase con ___ (persona), persona 0–5, infinitivo, nota] */
const ES6_IR_A = [
  ["Esta noche ___ en casa. (yo / cocinar)", 0, "cocinar"],
  ["¿Qué ___ el sábado? (tú / hacer)", 1, "hacer"],
  ["Mañana Ana ___ al médico. (ir)", 2, "ir", "**va a ir** — оба глагола могут быть **ir**."],
  ["El próximo lunes ___ español. (nosotros / estudiar)", 3, "estudiar"],
  ["¿___ a la fiesta? (vosotros / venir)", 4, "venir"],
  ["Mis padres ___ en julio. (llegar)", 5, "llegar"],
  ["La semana que viene ___ un piso. (yo / buscar)", 0, "buscar"],
  ["Pasado mañana ___ el tren. (nosotros / coger)", 3, "coger"],
  ["Este fin de semana ___ a la playa. (ellos / ir)", 5, "ir"],
  ["Esta tarde ___ un poco. (yo / descansar)", 0, "descansar"]
];
const ES6_IR_A_FRASE = [
  ["Voy a comer.", ["Voy comer.", "Voy a como."], "**ir a** + инфинитив: **a** обязательно.", 6, "es6-ir-a"],
  ["¿Vas a venir?", ["¿Vas venir?", "¿Vas a vienes?"], "**vas a** + инфинитив.", 6, "es6-ir-a"],
  ["Vamos a ver una película.", ["Vamos ver una película.", "Vamos a vemos una película."], "**vamos a** + инфинитив.", 6, "es6-ir-a"],
  ["Mañana va a llover.", ["Mañana va llover.", "Mañana va a llueve."], "Прогноз тоже с **ir a**: **va a llover**.", 6, "es6-ir-a"]
];
const ES6_CUANDO = [
  ["___ noche voy a cocinar.", "Esta", ["Esta", "Este", "En"], "«Сегодня вечером» — **esta noche**, без предлога."],
  ["La semana ___ viene voy a Madrid.", "que", ["que", "qué", "de"], "**la semana que viene** — на следующей неделе."],
  ["El ___ lunes tengo clase.", "próximo", ["próximo", "pasado", "pronto"], "**el próximo lunes** — в следующий понедельник."],
  ["___ mañana es sábado.", "Pasado", ["Pasado", "Próximo", "Pronto"], "Послезавтра — **pasado mañana**."],
  ["Voy a llegar ___: en cinco minutos.", "pronto", ["pronto", "próximo", "pasado"], "Скоро — **pronto**."]
];
const ES6_CONSEJO = [
  ["Trabajas mucho: ___ descansar.", "debes", ["debes", "puedes", "vas"], "Совет — **debes**."],
  ["—¿___ entrar? —Sí, claro.", "Puedo", ["Puedo", "Debo", "Tengo"], "Разрешение — **¿Puedo…?**"],
  ["Para viajar en avión, ___ que tener billete.", "tienes", ["tienes", "debes", "puedes"], "Правило, обязанность — **tienes que**."],
  ["Estás muy cansado: ___ dormir más.", "debes", ["debes", "puedes", "vas"], "Совет — **debes**."],
  ["—¿Puedo pagar con tarjeta? —Sí, ___.", "claro", ["claro", "debes", "tienes"], "**Sí, claro** — да, конечно."],
  ["En el museo no ___ hablar alto.", "debes", ["debes", "tienes", "vas"], "«Не стоит» — **no debes**."],
  ["—¿Puedo abrir la ventana? —No, no ___. Hace frío.", "puedes", ["puedes", "debes", "tienes"], "Отказ — **no puedes**."],
  ["Para entrar en el metro ___ que tener billete. (todos)", "hay", ["hay", "debe", "puede"], "Правило для всех — **hay que** (урок 5)."]
];
/* El cuerpo: escenas */
const ES6_CUERPO = [
  ["👁️", "ojo", ["oreja", "nariz"]], ["👂", "oreja", ["ojo", "boca"]], ["👃", "nariz", ["boca", "oreja"]], ["👄", "boca", ["nariz", "diente"]],
  ["🦷", "diente", ["boca", "dedo"], ["diente", "el diente", "un diente", "muela", "la muela", "una muela"]], ["✋", "mano", ["pie", "dedo"]],
  ["🦶", "pie", ["mano", "pierna"]], ["🦵", "pierna", ["brazo", "pie"]], ["💪", "brazo", ["pierna", "mano"]], ["☝️", "dedo", ["mano", "brazo"]]
];
const ES6_DOLER = [
  ["Me ___ la cabeza.", "duele", ["duele", "duelen", "duelo"], "**la cabeza** — одна: **duele**."],
  ["Me ___ los pies.", "duelen", ["duelen", "duele", "dolen"], "**los pies** — мн. ч.: **duelen**."],
  ["¿Te ___ la garganta?", "duele", ["duele", "duelen", "dueles"], "**la garganta** — одна: **duele**."],
  ["___ duele la espalda. (yo)", "Me", ["Me", "Yo", "Mi"], "Кому болит — **me**: **Me duele**."],
  ["Me duele ___ estómago.", "el", ["el", "mi", "—"], "Часть тела — с артиклем: **el estómago**."],
  ["¿Te duelen ___ ojos?", "los", ["los", "tus", "—"], "Часть тела — с артиклем: **los ojos**."],
  ["No me duele ___.", "nada", ["nada", "algo", "mucho"], "**No me duele nada** — ничего не болит."],
  ["¿Qué te ___? —Tengo fiebre.", "pasa", ["pasa", "duele", "tienes"], "«Что с тобой?» — **¿Qué te pasa?**"]
];
const ES6_DOLER_ESC = [
  ["Me ___ las piernas.", "duelen", "**las piernas** — мн. ч.: **duelen**.", 8, "es6-doler"],
  ["¿Te ___ la mano?", "duele", "**la mano** — одна: **duele**.", 8, "es6-doler"],
  ["Me ___ mucho los dientes.", "duelen", "**los dientes** — мн. ч.: **duelen**.", 8, "es6-doler"],
  ["Me ___ la boca.", "duele", "**la boca** — одна: **duele**.", 8, "es6-doler"],
  ["¿Os ___ los brazos?", "duelen", "**los brazos** — мн. ч.: **duelen**.", 8, "es6-doler"]
];
const ES6_ENFERMO = [
  ["Tengo 39 grados: tengo ___.", "fiebre", ["fiebre", "tos", "sed"], "Высокая температура — **fiebre**."],
  ["___ enfermo. (yo)", "Estoy", ["Estoy", "Soy", "Tengo"], "Состояние — **estar**: **estoy enfermo**."],
  ["___ un resfriado. (yo)", "Tengo", ["Tengo", "Estoy", "Soy"], "Болезнь — **tener**: **tengo un resfriado**."],
  ["Tengo dolor ___ cabeza.", "de", ["de", "en", "la"], "**dolor de cabeza**."],
  ["No tengo fiebre, pero tengo ___.", "tos", ["tos", "gripe", "sano"], "Кашель — **tos**."],
  ["Ya no estoy enfermo: estoy ___.", "sano", ["sano", "enfermo", "cansado"], "Здоровый — **sano**."]
];
const ES6_FARMACIA = [
  ["¿Tienes algo ___ la tos?", "para", ["para", "por", "de"], "«От кашля» — **para la tos**."],
  ["Toma una pastilla ___ ocho horas.", "cada", ["cada", "todos", "por"], "«Каждые восемь часов» — **cada ocho horas**."],
  ["Quería pedir ___ con el médico.", "cita", ["cita", "receta", "cuenta"], "Записаться — **pedir cita**."],
  ["Este medicamento necesita ___.", "receta", ["receta", "cita", "pastilla"], "Только по рецепту — **necesita receta**."],
  ["Me duele mucho y son las tres de la mañana: voy a ___.", "urgencias", ["urgencias", "Correos", "la panadería"], "Экстренно — **urgencias**."],
  ["En la farmacia compro ___.", "medicamentos", ["medicamentos", "billetes", "tarjetas"], "Лекарства — **medicamentos**."]
];
const ES6_PREGUNTAS = [
  ["¿___ vas?", "Al trabajo.", "Adónde", ["Adónde", "Dónde", "Cuándo"], 1, "es6-adonde"],
  ["¿___ estás?", "En la estación.", "Dónde", ["Dónde", "Adónde", "Cómo"], 1, "es6-adonde"],
  ["¿___ vienes?", "De la oficina.", "De dónde", ["De dónde", "Adónde", "Cuándo"], 1, "es6-adonde"],
  ["¿___ vas al trabajo?", "En metro.", "Cómo", ["Cómo", "Dónde", "Cuánto"], 2, "es6-en-metro"],
  ["¿___ tardas?", "Veinte minutos.", "Cuánto", ["Cuánto", "Cómo", "Qué"], 2, "es6-tardar"],
  ["¿___ vas a hacer el sábado?", "Voy a ir a la playa.", "Qué", ["Qué", "Cómo", "Dónde"], 6, "es6-ir-a"],
  ["¿Qué te ___?", "Tengo gripe.", "pasa", ["pasa", "duele", "tienes"], 8, "es6-enfermo"]
];
const ES6_ERRORES = [
  [["Voy", "en", "Madrid."], 1, "a", 1, "es6-a-en-de", "Куда — **a**: **Voy a Madrid**."],
  [["Estoy", "a", "casa."], 1, "en", 1, "es6-a-en-de", "Где — **en**: **Estoy en casa**."],
  [["Voy", "con", "metro."], 1, "en", 2, "es6-en-metro", "Транспорт — **en**: **en metro**."],
  [["Voy", "en", "pie."], 1, "a", 2, "es6-en-metro", "Пешком — **a pie**."],
  [["Toma", "lo."], 0, "Tómalo.", 5, "es6-pegado", "Повелительное + местоимение — одним словом: **Tómalo**."],
  [["Llamame", "mañana."], 0, "Llámame", 5, "es6-tilde-imperativo", "**llámame** — со знаком ударения."],
  [["Voy", "comer", "a", "las", "dos."], 1, "a comer", 6, "es6-ir-a", "**ir a** + инфинитив: **voy a comer**."],
  [["Me", "duele", "los", "pies."], 1, "duelen", 8, "es6-doler", "**los pies** — мн. ч.: **duelen**."],
  [["Me", "duele", "mi", "cabeza."], 2, "la", 8, "es6-doler", "Часть тела — с артиклем: **la cabeza**."],
  [["Soy", "enfermo."], 0, "Estoy", 8, "es6-enfermo", "Состояние — **estar**."],
  [["¡Vienes", "aquí!"], 0, "¡Ven", 4, "es6-imperativo-irregular", "Повелительное от **venir** — **ven**."],
  [["Voy", "a", "el", "banco."], 1, "al", 1, "es6-al-del", "**a** + **el** = **al**."]
];
const ES6_SITUACIONES = [
  ["Ты на улице и хочешь спросить у незнакомого человека, где вокзал.", "Perdone, ¿dónde está la estación?", ["Perdone, ¿dónde es la estación?", "Perdone, ¿adónde está la estación?"], "Где находится — **¿dónde está?**", 4],
  ["Ты объясняешь дорогу: идти прямо.", "Sigue todo recto.", ["Sigues todo recto.", "Seguir todo recto."], "Повелительное: **sigue**.", 4],
  ["Ты говоришь, что едешь на работу на метро.", "Voy al trabajo en metro.", ["Voy al trabajo con metro.", "Voy en el trabajo en metro."], "Куда — **al trabajo**; транспорт — **en metro**.", 2],
  ["Ты говоришь, что идёшь пешком.", "Voy a pie.", ["Voy en pie.", "Voy con pie."], "Пешком — **a pie**.", 2],
  ["Ты покупаешь билет туда и обратно.", "Un billete de ida y vuelta, por favor.", ["Un billete de ida o vuelta, por favor.", "Un billete a ida y vuelta, por favor."], "**de ida y vuelta**.", 2],
  ["Ты спрашиваешь друга, что он будет делать в субботу.", "¿Qué vas a hacer el sábado?", ["¿Qué vas hacer el sábado?", "¿Qué vas a haces el sábado?"], "**ir a** + инфинитив.", 6],
  ["Ты предлагаешь пойти поесть.", "¡Vamos a comer!", ["¡Vamos comer!", "¡Vamos a comemos!"], "**¡Vamos a…!** — давай…!", 6],
  ["Ты говоришь, что у тебя болит голова.", "Me duele la cabeza.", ["Me duelo la cabeza.", "Me duele mi cabeza."], "**Me duele la cabeza.**", 8],
  ["Ты советуешь другу отдохнуть.", "Debes descansar.", ["Debes a descansar.", "Debes descansas."], "Совет — **debes** + инфинитив.", 7],
  ["Ты звонишь в поликлинику, чтобы записаться к врачу.", "Quería pedir cita.", ["Quería pedir receta.", "Quería pedir la cuenta."], "Записаться — **pedir cita**.", 9],
  ["Ты просишь в аптеке что-нибудь от кашля.", "¿Tienes algo para la tos?", ["¿Tienes algo por la tos?", "¿Tienes nada para la tos?"], "«От кашля» — **para la tos**.", 9]
];
const ES6_RESPUESTAS = [
  ["Perdone, ¿la estación está lejos?", "No, está cerca: sigue todo recto.", ["No, es cerca: sigue todo recto.", "No, está cerca: sigues todo recto."], "Где — **está**; дорогу — повелительным.", 4],
  ["¿Cómo vas a clase?", "En autobús.", ["Con autobús.", "A autobús."], "Транспорт — **en**.", 2],
  ["¿Cuánto tardas en llegar?", "Media hora.", ["A media hora.", "Tengo media hora."], "**Media hora.**", 2],
  ["¿Qué vas a hacer esta noche?", "Voy a ver una película.", ["Voy ver una película.", "Veo a una película."], "**voy a** + инфинитив.", 6],
  ["¿Puedo entrar?", "Sí, claro.", ["Sí, debes.", "Sí, tienes."], "Разрешение — **Sí, claro**.", 7],
  ["¿Qué te pasa?", "Me duele la garganta.", ["Me duelo la garganta.", "Estoy garganta."], "**Me duele la garganta.**", 8],
  ["¿Tienes fiebre?", "No, pero tengo tos.", ["No, pero estoy tos.", "No, pero soy tos."], "**tengo tos**.", 8],
  ["¿Dónde está el billete?", "Aquí. Tómalo.", ["Aquí. Tomalo.", "Aquí. Lo toma."], "**tómalo** — со знаком ударения.", 5]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas «a|b|~c»]], modelo, pista?] */
function es6Turnos(quien, genero, titulo, pasos) {
  return { quien, genero, titulo, chat: false, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f]) => ({ es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES6_TURNOS = [
  es6Turnos("Señor", "m", "Por la calle", [
    ["¿Sí? Dime.", "Да? Слушаю.", "Спроси, где вокзал.",
      [["где", "dónde está|~dónde"], ["вокзал", "la estación|~estación"]], "Perdona, ¿dónde está la estación?", "**Perdona, ¿dónde está…?**"],
    ["Está cerca. Sigue todo recto y gira a la izquierda.", "Это близко. Иди прямо и поверни налево.", "Спроси, сколько идти пешком.",
      [["сколько", "cuánto tardo|cuánto se tarda|~cuánto"], ["пешком", "a pie|andando"]], "¿Cuánto tardo a pie?", "**tardar**; пешком — **a pie**"],
    ["Unos diez minutos.", "Минут десять.", "Поблагодари.",
      [["спасибо", "gracias"]], "Muchas gracias."]
  ]),
  es6Turnos("Empleado", "m", "En el metro", [
    ["Hola, ¿qué quieres?", "Привет! Что тебе нужно?", "Попроси билет туда и обратно.",
      [["билет", "un billete|~billete"], ["туда и обратно", "de ida y vuelta|~ida y vuelta"]], "Un billete de ida y vuelta, por favor."],
    ["Son tres euros. ¿Adónde vas?", "Три евро. Куда едешь?", "Скажи, что едешь в аэропорт.",
      [["в аэропорт", "al aeropuerto|~aeropuerto"]], "Voy al aeropuerto.", "Куда — **a**: **al aeropuerto**"],
    ["Coge la línea ocho.", "Садись на восьмую ветку.", "Спроси, сколько ехать.",
      [["сколько ехать", "cuánto tardo|cuánto tarda|~cuánto"]], "¿Cuánto tardo?"],
    ["Unos cuarenta minutos. ¡Buen viaje!", "Минут сорок. Счастливого пути!", "Поблагодари и попрощайся.",
      [["спасибо или прощание", "gracias|adiós|hasta luego|chao"]], "Gracias, adiós."]
  ]),
  es6Turnos("Farmacéutica", "f", "En la farmacia", [
    ["Hola, ¿qué te pasa?", "Привет! Что с тобой?", "Скажи, что у тебя болит голова.",
      [["болит", "me duele|~duele"], ["голова", "la cabeza|~cabeza"]], "Me duele la cabeza.", "**Me duele…** — как **me gusta**"],
    ["¿Tienes fiebre?", "Температура есть?", "Скажи, что температуры нет, но есть кашель.",
      [["нет", "no"], ["кашель", "tengo tos|~tos"]], "No, pero tengo tos."],
    ["Toma estas pastillas, una cada ocho horas.", "Принимай эти таблетки, по одной каждые восемь часов.", "Спроси, сколько это стоит.",
      [["сколько стоит", "cuánto cuesta|cuánto cuestan|cuánto es|~cuánto"]], "¿Cuánto cuesta?"],
    ["Son cinco euros.", "Пять евро.", "Скажи, что заплатишь картой.",
      [["картой", "con tarjeta|~tarjeta"]], "Con tarjeta, por favor."]
  ])
];
/* Caminos del proyecto: [ruta, destino (índice de ES6_LUGARES)] */
const ES6_RUTAS_PROYECTO = [["S1 R S1", 0], ["S2 L S2", 6], ["S1 R S1 L S1", 7], ["S2 R S2 L S1", 2], ["S3 L S1 L S1", 8], ["S3", 4]];
window.ejerciciosUnidadEs6 = ejerciciosUnidadEs6;
window.es6Vocab = es6Vocab;
window.es6Ampliacion = es6Ampliacion;
window.es6Objetivo = es6Objetivo;
const ES6_MEZCLA = { conjugar: 2, "a-en-de": 3, "llevar-traer": 1, transporte: 1, "transporte-escribir": 1, "transporte-frase": 1, recorrido: 2,
  imperativo: 2, "imperativo-elegir": 1, "ruta-elegir": 1, "imperativo-pronombre": 2, "imperativo-contexto": 1, "imperativo-pegado": 1,
  "ir-a": 2, "ir-a-frase": 1, cuando: 1, consejo: 2, cuerpo: 1, "cuerpo-escribir": 1, doler: 2, "doler-escribir": 1, enfermo: 1, farmacia: 1,
  pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 2, "ordenar-frase": 1, turnos: 1, ruta: 1 };
window.ES6_MEZCLA = ES6_MEZCLA;

/* ── Profundización (13/11/2026, repaso Abecé / Azbuka pedido por Manu) ──────────────
   Más a fondo que se suma a la teoría al cargar; tipos de profundización de Azbuka y
   ejercicios de formas generados (imperativo de tú, ir a + infinitivo). */
const ES6_MAS = {
  "es6-a-en-de": { titulo: "Estar en, ir a", texto: "Простая проверка: если есть движение (**ir, venir, llegar, volver**) — **a**; если нет (**estar, vivir, trabajar**) — **en**. Но **entrar en** — исключение: в Испании говорят **Entro en el bar** (в Латинской Америке чаще **entrar a**).", ejemplos: [{ es: "Trabajo en Madrid, pero voy a Barcelona.", ru: "Я работаю в Мадриде, но еду в Барселону." }] },
  "es6-al-del": { titulo: "A casa, en casa", texto: "С **casa** (своим домом) артикль не нужен: **Voy a casa**, **Estoy en casa**, **Salgo de casa**. Если дом чужой: **a casa de Lucía**. С названием города тоже без артикля: **Voy a Madrid**.", ejemplos: [{ es: "Esta noche ceno en casa de Lucía.", ru: "Сегодня вечером я ужинаю у Лусии." }] },
  "es6-llevar-traer": { titulo: "Llevar и traer — как «уносить» и «приносить»", texto: "Смотри, где говорящий: **traer** — сюда, ко мне; **llevar** — туда, от меня. **¿Me traes un vaso de agua?** — принеси мне. **Llevo a los niños al colegio** — отвожу. Так же **venir** (сюда) и **ir** (туда).", ejemplos: [{ es: "Te llevo a casa en coche.", ru: "Я отвезу тебя домой на машине." }] },
  "es6-en-metro": { titulo: "Ir en / ir a", texto: "Вид транспорта — **en**: **en metro, en coche, en avión**. Пешком — **a pie**. Но если сказано, на каком именно: **Voy en el autobús de las ocho**.", ejemplos: [{ es: "Voy en el autobús de las ocho.", ru: "Я еду на автобусе в восемь." }] },
  "es6-coger": { titulo: "Coger и tomar", texto: "В Испании говорят **coger el autobús**; в Латинской Америке — **tomar el autobús** (там **coger** — грубое слово). **tomar** понимают везде, так что его тоже можно говорить и в Испании.", ejemplos: [{ es: "Tomo el metro todos los días.", ru: "Я каждый день езжу на метро." }] },
  "es6-tardar": { titulo: "Tardar en", texto: "Сколько времени — **tardar** + время: **Tardo diez minutos**. На что — **tardar en**: **Tardo diez minutos en llegar** — я добираюсь за десять минут.", ejemplos: [{ es: "¿Cuánto tardas en llegar al trabajo?", ru: "Сколько ты добираешься до работы?" }] },
  "es6-desde-hasta": { titulo: "De… a… — короче", texto: "**de… a…** и **desde… hasta…** значат одно и то же; **desde… hasta** — чуть точнее, подчёркивает начало и конец. С часами: **de nueve a cinco**, **desde las nueve hasta las cinco**.", ejemplos: [{ es: "Trabajo de nueve a cinco.", ru: "Я работаю с девяти до пяти." }] },
  "es6-por": { titulo: "Por — ещё и «примерно где»", texto: "**por** + место — ещё и «где-то здесь, в районе»: **¿Hay una farmacia por aquí?** — тут поблизости есть аптека? **Vivo por el centro** — я живу где-то в центре.", ejemplos: [{ es: "¿Hay un banco por aquí?", ru: "Здесь поблизости есть банк?" }] },
  "es6-imperativo": { titulo: "Imperativo = él в настоящем", texto: "Самая простая проверка: форма **tú** в imperativo совпадает с **él** в настоящем: **él habla → ¡habla!**, **él come → ¡come!**, **él cierra → ¡cierra!** Это работает почти всегда, кроме восьми неправильных.", ejemplos: [{ es: "Ana cierra la puerta. — ¡Cierra la puerta!", ru: "Аня закрывает дверь. — Закрой дверь!" }] },
  "es6-imperativo-irregular": { titulo: "Ve или ven?", texto: "**ve** — иди (туда, от меня), от **ir**; **ven** — иди сюда, ко мне, от **venir**. **¡Ven aquí!** — иди сюда! **Ve a la farmacia** — сходи в аптеку.", ejemplos: [{ es: "¡Ven aquí, por favor!", ru: "Иди сюда, пожалуйста!" }] },
  "es6-indicaciones": { titulo: "La primera a la derecha", texto: "Порядковые числа в объяснении пути: **la primera calle a la derecha**, **la segunda a la izquierda** — «calle» можно не говорить: **Coge la segunda a la izquierda**.", ejemplos: [{ es: "Coge la segunda a la izquierda.", ru: "Сверни на вторую налево." }] },
  "es6-pegado": { titulo: "С инфинитивом — тоже слитно", texto: "Местоимение пишут слитно и с инфинитивом: **Quiero comprarlo** = **Lo quiero comprar** — оба варианта правильные. А с imperativo — только после: **Cómpralo**, не «lo compra».", ejemplos: [{ es: "Quiero comprarlo.", ru: "Я хочу его купить." }] },
  "es6-ir-a": { titulo: "Ir a + инфинитив и настоящее", texto: "О ближайших планах испанцы часто говорят и просто настоящим: **Mañana voy al médico** = **Mañana voy a ir al médico**. **ir a** + инфинитив подчёркивает намерение: **Voy a estudiar más**.", ejemplos: [{ es: "Mañana trabajo en casa.", ru: "Завтра я работаю дома." }] },
  "es6-deber": { titulo: "Deber и tener que", texto: "**tengo que** — так надо (обязанность, обстоятельства): **Tengo que trabajar mañana**. **debes** — совет, «тебе следует»: **Debes descansar**. Мягче совета — **deberías** (это форма, которую ты выучишь позже).", ejemplos: [{ es: "Tengo que ir al médico.", ru: "Мне нужно сходить к врачу." }] },
  "es6-doler": { titulo: "Me duele la cabeza — с артиклем", texto: "Часть тела — с артиклем, а не с «mi»: **Me duele la cabeza** (не «mi cabeza»): **me** уже говорит, чья. Так же **Me lavo las manos**.", ejemplos: [{ es: "Me duelen los pies.", ru: "У меня болят ноги (ступни)." }] },
  "es6-medico": { titulo: "El médico или la médica", texto: "К врачу: **ir al médico** (врач вообще, даже если врач — женщина). О конкретной женщине-враче — **la médica** или **la doctora**: **La doctora es muy simpática**.", ejemplos: [{ es: "Mañana voy al médico.", ru: "Завтра я иду к врачу." }] }
};
UNIDAD_ES_6.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES6_MAS[s.id] && !s.mas) s.mas = ES6_MAS[s.id]; }));

const ES6_NAT = [
  ["Voy a Madrid.", ["Voy en Madrid.", "Voy de Madrid a."], "Куда — **a**.", 1, "es6-a-en-de"],
  ["Estoy en casa.", ["Estoy a casa.", "Estoy en la mi casa."], "Где — **en**.", 1, "es6-a-en-de"],
  ["Vengo del trabajo.", ["Vengo de el trabajo.", "Vengo a el trabajo."], "**de + el = del**.", 1, "es6-al-del"],
  ["Voy al cine.", ["Voy a el cine.", "Voy en el cine."], "**a + el = al**.", 1, "es6-al-del"],
  ["Voy al trabajo en metro.", ["Voy al trabajo con metro.", "Voy al trabajo por metro."], "Транспорт — **en**.", 2, "es6-en-metro"],
  ["Voy a pie.", ["Voy en pie.", "Voy con pies."], "Пешком — **a pie**.", 2, "es6-en-metro"],
  ["Tardo veinte minutos.", ["Tardo en veinte minutos.", "Me tardo veinte minutos."], "**tardar** + время.", 2, "es6-tardar"],
  ["Gira a la derecha.", ["Gira en la derecha.", "Giras a la derecha."], "**gira** — imperativo; **a la derecha**.", 4, "es6-imperativo"],
  ["Ven aquí.", ["Viene aquí.", "Ve aquí."], "Сюда — **ven**.", 4, "es6-imperativo-irregular"],
  ["Haz la cena.", ["Hace la cena.", "Haces la cena."], "**hacer → haz**.", 4, "es6-imperativo-irregular"],
  ["Tómalo.", ["Lo toma.", "Tomalo lo."], "После imperativo, слитно, со знаком: **tómalo**.", 5, "es6-pegado"],
  ["Llámame mañana.", ["Me llama mañana.", "Llama me mañana."], "**llámame** — слитно.", 5, "es6-pegado"],
  ["Voy a comer.", ["Voy comer.", "Voy de comer."], "**ir a** + инфинитив.", 6, "es6-ir-a"],
  ["Me duele la cabeza.", ["Me duele mi cabeza.", "Me duelen la cabeza."], "Часть тела — с артиклем; ед. ч. — **duele**.", 8, "es6-doler"],
  ["Me duelen los ojos.", ["Me duele los ojos.", "Me duelen mis ojos."], "Мн. ч. — **duelen**.", 8, "es6-doler"],
  ["Tengo fiebre.", ["Estoy fiebre.", "Tengo la fiebre alta mucho."], "**tener fiebre**.", 8, "es6-enfermo"]
];
const ES6_POR = [
  ["Voy a Madrid.", "Почему «a», а не «en»?", "Есть движение — куда", ["Это где", "Это откуда"], "Куда — **a**.", 1, "es6-a-en-de"],
  ["Vivo en Madrid.", "Почему «en»?", "Нет движения — где", ["Это куда", "Это откуда"], "Где — **en**.", 1, "es6-a-en-de"],
  ["¿Me traes un café?", "Почему «traes», а не «llevas»?", "Кофе несут сюда, к говорящему", ["Кофе уносят от говорящего", "Это прошедшее"], "Сюда — **traer**.", 1, "es6-llevar-traer"],
  ["¡Cómelo!", "Почему знак ударения на «có»?", "С местоимением ударение остаётся на том же слоге", ["Это прошедшее время", "Так пишут все глаголы"], "**come** + **lo** → **cómelo**.", 5, "es6-tilde-imperativo"],
  ["Ve a la farmacia.", "Почему «ve», а не «ven»?", "Туда, от говорящего — от ir", ["Сюда — от venir", "Это настоящее"], "**ir → ve**.", 4, "es6-imperativo-irregular"],
  ["Me duelen los pies.", "Почему «duelen»?", "Болят «los pies» — мн. ч.", ["Потому что «me» — мн. ч.", "Это прошедшее"], "Как gustar.", 8, "es6-doler"],
  ["Debes descansar.", "Это совет или обязанность?", "Совет: тебе следует", ["Обязанность: так надо", "Разрешение"], "**deber** — совет.", 7, "es6-deber"],
  ["Pasa por el parque.", "Что значит «por» здесь?", "Через парк", ["В сторону парка", "Для парка"], "**por** — через.", 3, "es6-por"]
];
const ES6_OIDO = [
  ["Voy a la playa.", "Послушай: куда или где?", "Куда", ["Куда", "Где", "Откуда"], "**a** — куда.", 1, "es6-a-en-de"],
  ["Vengo de la playa.", "Послушай: куда или откуда?", "Откуда", ["Куда", "Где", "Откуда"], "**de** — откуда.", 1, "es6-a-en-de"],
  ["Ven aquí.", "Послушай: какой глагол?", "venir", ["venir", "ver", "ir"], "**ven** — от venir.", 4, "es6-imperativo-irregular"],
  ["Ve al médico.", "Послушай: какой глагол?", "ir", ["ir", "ver", "venir"], "**ve** — от ir.", 4, "es6-imperativo-irregular"],
  ["Voy a comer.", "Послушай: сейчас или в будущем?", "В будущем", ["Сейчас", "В будущем", "В прошлом"], "**ir a** + инфинитив — планы.", 6, "es6-ir-a"],
  ["Me duelen.", "Послушай: болит одно или несколько?", "Несколько", ["Одно", "Несколько"], "**duelen** — мн. ч.", 8, "es6-doler"],
  ["Gira a la izquierda.", "Послушай: куда повернуть?", "Налево", ["Налево", "Направо", "Прямо"], "**a la izquierda** — налево.", 4, "es6-indicaciones"],
  ["Cógelo.", "Послушай: сколько слов?", "Одно: глагол и местоимение вместе", ["Одно: глагол и местоимение вместе", "Два"], "**cógelo** — одно слово.", 5, "es6-pegado"]
];
const ES6_PAR = [
  ["Ты просишь друга принести тебе воды.", "¿Me traes agua?", "¿Me llevas agua?", "Сюда — **traer**.", 1, "es6-llevar-traer"],
  ["Ты говоришь, что отвезёшь детей в школу.", "Llevo a los niños al colegio.", "Traigo a los niños al colegio.", "Туда — **llevar**.", 1, "es6-llevar-traer"],
  ["Ты зовёшь друга к себе.", "¡Ven aquí!", "¡Ve aquí!", "Сюда — **ven**.", 4, "es6-imperativo-irregular"],
  ["Ты говоришь, что идёшь пешком.", "Voy a pie.", "Voy en pie.", "Пешком — **a pie**.", 2, "es6-en-metro"],
  ["Ты говоришь, что тебе нужно сходить к врачу (обязательно).", "Tengo que ir al médico.", "Debes ir al médico.", "Обязанность — **tengo que**.", 7, "es6-deber"],
  ["Ты советуешь другу отдохнуть.", "Debes descansar.", "Tengo que descansar.", "Совет — **debes**.", 7, "es6-deber"]
];
const ES6_DESC = [
  ["hablar → habla · tomar → toma. А girar?", "gira", ["giras", "giro"], "**tú** в imperativo = **él** в настоящем.", 4, "es6-imperativo"],
  ["comer → come · beber → bebe. А leer?", "lee", ["lees", "lea"], "**-er → -e**.", 4, "es6-imperativo"],
  ["cerrar → cierra · pensar → piensa. А empezar?", "empieza", ["empeza", "empiezas"], "Корень меняется, как в настоящем.", 4, "es6-imperativo"],
  ["toma + lo → tómalo · come + lo → cómelo. А compra + lo?", "cómpralo", ["compralo", "compra lo"], "Знак ударения, слитно.", 5, "es6-tilde-imperativo"],
  ["yo voy a · tú vas a. А nosotros?", "vamos a", ["vemos a", "vamos de"], "**ir**: **vamos a**.", 6, "es6-ir-a"]
];
const ES6_CAD = [
  ["Voy a casa.", [["Теперь: где (estar).", "Estoy en casa."], ["Теперь: откуда (venir).", "Vengo de casa."]], 1, "es6-a-en-de"],
  ["Tomas el metro.", [["Теперь: imperativo (tú).", "Toma el metro."], ["Теперь: замени «el metro» на lo.", "Tómalo."]], 5, "es6-pegado"],
  ["Como en casa.", [["Теперь: планы (ir a), завтра.", "Mañana voy a comer en casa."], ["Теперь: nosotros.", "Mañana vamos a comer en casa."]], 6, "es6-ir-a"],
  ["Me duele la cabeza.", [["Теперь: los pies.", "Me duelen los pies."], ["Теперь: тебе (te).", "Te duelen los pies."]], 8, "es6-doler"]
];
const ES6_DIAG = [
  ["Voy en Madrid.", "Куда — a", ["Нужно de", "Нужно al"], "Voy a Madrid.", 1, "es6-a-en-de"],
  ["Estoy a casa.", "Где — en", ["Нужно al", "Нужно de"], "Estoy en casa.", 1, "es6-a-en-de"],
  ["Voy al trabajo con metro.", "Транспорт — en", ["Нужно a", "Нужно el"], "Voy al trabajo en metro.", 2, "es6-en-metro"],
  ["¡Lo toma!", "Местоимение — после imperativo, слитно", ["Нужно la", "Нужно tomas"], "¡Tómalo!", 5, "es6-pegado"],
  ["Voy comer.", "Не хватает a", ["Нужно de", "Нужно comiendo"], "Voy a comer.", 6, "es6-ir-a"],
  ["Me duele mi cabeza.", "Часть тела — с артиклем la", ["Нужно duelen", "Нужно a mí"], "Me duele la cabeza.", 8, "es6-doler"]
];
const ES6_DES = [
  ["Sigue todo recto y gira a la derecha", [["Какое слово — «поверни»?", 4], ["Куда повернуть?", 7], ["Какое слово — «иди дальше»?", 0]], 4, "es6-indicaciones"],
  ["Mañana voy a ir al médico", [["Какое слово — когда?", 0], ["Какой глагол — ir a?", 1], ["Куда?", 5]], 6, "es6-ir-a"]
];
const ES6_VERBOS_IMP = ["hablar", "tomar", "coger", "girar", "cruzar", "seguir", "subir", "bajar", "esperar", "llamar", "comer", "beber", "leer", "escribir", "abrir", "cerrar", "empezar", "pensar", "volver",
  "dormir", "pedir", "venir", "ir", "salir", "poner", "tener", "hacer", "decir", "ser", "descansar", "comprar", "mirar"];
function es6Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES6-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES6_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES6_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES6_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oi-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES6_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES6_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("de-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES6_CAD.forEach(([base, pasos, mod, regla], i) => P("cad-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES6_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES6_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  const IRR = /^(ir|venir|salir|poner|tener|hacer|decir|ser)$/;
  ES6_VERBOS_IMP.forEach(inf => {
    const f = es6Imp(inf); if (!f) return;
    P("imf-" + inf, "imperativo-forma", "escribir", 4, IRR.test(inf) ? "es6-imperativo-irregular" : "es6-imperativo", { grupo: "imf-" + inf, lex: lex(inf), pide: "Напиши imperativo (tú).",
      grande: inf + " → ¡…!", esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f, explicacion: "**" + inf + " → " + f + "**." + (IRR.test(inf) ? " Неправильный." : " Как **él** в настоящем: **" + es6Pres(inf, 2) + "**.") });
  });
  ["comer", "trabajar", "estudiar", "viajar", "descansar", "salir", "llamar", "comprar", "ver", "hacer", "leer", "dormir"].forEach((inf, i) => {
    const p = [0, 1, 2, 3, 4, 5][i % 6], f = es6Pres("ir", p) + " a " + inf;
    P("iaf-" + inf, "ir-a-forma", "escribir", 6, "es6-ir-a", { grupo: "iaf-" + inf, lex: lex(inf), pide: "Напиши «ir a + инфинитив».", grande: inf + " — " + ES6_PERS[p][0].split(" / ")[0],
      esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f, explicacion: "**" + f + "**." });
  });
}
Object.assign(ES6_MEZCLA, { natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, "imperativo-forma": 2, "ir-a-forma": 1 });
