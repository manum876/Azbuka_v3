/* ============================================================
   DATA-UNIDAD-ES-8.JS — Abecé · Урок 8: Рассказываем о прошлом
   (Hablar del pasado). Completa (13/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U8;
   propuesta aprobada por Manu el 13/11/2026: claude/PROPUESTA_U8_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-7.js. Las formas de los verbos salen de
   data-verbos-es.js: presente de haber + participio (es8Perf) e indefinido
   (es8Indef), con «se» delante si el verbo lo lleva.
   Decisiones de Manu (13/11/2026): alguna vez y jubilarse entran al léxico;
   la ampliación entera (siglo, década, divorciarse, graduarse, acordarse,
   suceder, recorrer, jamás); pidió / durmió quedan para la U9; sin nota
   cultural nueva; desafío del día «Что ты сделал вчера?».
   Módulo 13: repaso acumulativo U2–U8 (la U1 no entra: Manu, «a esta altura
   ya no evaluamos letras»), 5 bloques de 6 que mezclan las unidades por tema
   (es8Repaso), guardado en units["es8"].repaso.
   ============================================================ */

const ES8_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES8_SE = ["me", "te", "se", "nos", "os", "se"];
const ES8_HABER = ["he", "has", "ha", "hemos", "habéis", "han"];
function es8Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  if (!v) return null;
  if (v.base) return Object.assign({ se: true }, VERBOS_ES[v.base]);
  return v.pronominal ? Object.assign({ se: true }, v) : v;
}
function es8Indef(inf, p) {
  const v = es8Verbo(inf); if (!v || !v.indef || !v.indef[p]) return "";
  return (v.se ? ES8_SE[p] + " " : "") + v.indef[p];
}
function es8Perf(inf, p) {
  const v = es8Verbo(inf); if (!v || !v.part) return "";
  return (v.se ? ES8_SE[p] + " " : "") + ES8_HABER[p] + " " + v.part;
}
function es8Part(inf) { const v = es8Verbo(inf); return v ? v.part || "" : ""; }
const es8Tabla = (inf, fn) => ES8_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: fn(inf, i) }]);

const UNIDAD_ES_8 = {
  id: 8,
  titulo: "Рассказываем о прошлом",
  tituloEs: "Hablar del pasado",
  objetivo: "Рассказать, что ты сделал сегодня, на этой неделе или много лет назад, расспросить о поездке и написать короткую биографию.",
  tiempo: "3–4 недели ежедневной практики (примерно 20–25 часов)",
  modulos: [
    {
      id: "es8m1", n: 1, tipo: "leccion",
      titulo: "Hoy he comido",
      resumen: "Pretérito perfecto: he, has, ha… + причастие на -ado / -ido.",
      intro: "В русском одно прошедшее время, в испанском — два. Первое — **pretérito perfecto**: **he comido** — «я поел». Его используют, когда период ещё не закончился: **hoy**, **esta mañana**, **esta semana**, **este año**.",
      tablas: [
        { titulo: "Haber + participio", encabezados: ["Кто", "Форма"], filas: es8Tabla("hablar", es8Perf) },
        { titulo: "Participio", encabezados: ["Инфинитив", "Причастие"], filas: [
          [{ es: "hablar", ru: "говорить" }, { es: "hablado" }],
          [{ es: "comer", ru: "есть" }, { es: "comido" }],
          [{ es: "vivir", ru: "жить" }, { es: "vivido" }],
          [{ es: "ser / estar", ru: "быть" }, { es: "sido / estado" }],
          [{ es: "ir", ru: "идти, ехать" }, { es: "ido" }]] },
        { titulo: "Con se", encabezados: ["Кто", "Форма"], filas: es8Tabla("levantarse", es8Perf) }
      ],
      secciones: [
        {
          id: "es8-perfecto",
          titulo: "He + participio",
          texto: "**Pretérito perfecto** — это **haber** в настоящем времени + **participio** (причастие):\n· **he, has, ha, hemos, habéis, han**;\n· причастие: **-ar → -ado** (hablar → **hablado**), **-er, -ir → -ido** (comer → **comido**, vivir → **vivido**).\n**Hoy he trabajado mucho** — сегодня я много работал. **¿Has comido?** — ты поел?\nПричастие **не меняется**: **Ana ha comido**, **ellos han comido**. Между **he** и причастием ничего не ставят.",
          comparacion: "Как русское «я сделал» о сегодняшнем дне: дело уже сделано, а день ещё идёт.",
          ejemplos: [
            { es: "Hoy he trabajado mucho.", ru: "Сегодня я много работал." },
            { es: "Esta semana hemos comido en casa.", ru: "На этой неделе мы ели дома." },
            { es: "¿Has leído el libro?", ru: "Ты прочитал книгу?" }
          ],
          errores: [
            { mal: "Ana ha comida.", bien: "Ana ha comido.", por: "Причастие не меняется: всегда **comido**." },
            { mal: "He mucho trabajado.", bien: "He trabajado mucho.", por: "**he** и причастие не разделяют." }
          ],
          chequeo: [
            { pide: "Hoy ___ mucho. (yo, trabajar)", opciones: ["he trabajado", "ha trabajado", "he trabajo"], ok: "he trabajado", por: "**yo** — **he** + **trabajado**." }
          ]
        },
        {
          id: "es8-perf-pron",
          titulo: "Me he levantado, lo he comprado",
          texto: "Местоимение ставится **перед he**: **Hoy me he levantado a las siete**; **¿El libro? Lo he comprado**; **Le he escrito a Lucía**.\nВ вопросе порядок тот же: **¿Te has duchado?**",
          errores: [
            { mal: "He me levantado.", bien: "Me he levantado.", por: "Местоимение — перед **he**." }
          ],
          chequeo: [
            { pide: "Hoy ___ a las siete. (yo, levantarse)", opciones: ["me he levantado", "he me levantado", "me ha levantado"], ok: "me he levantado", por: "**me** + **he** + **levantado**." }
          ]
        },
        {
          id: "es8-hoy",
          titulo: "Hoy, esta mañana, este año",
          texto: "Perfecto используют с периодом, который **ещё идёт**: **hoy**, **esta mañana**, **esta tarde**, **esta semana**, **este mes**, **este año**, **últimamente** (в последнее время).\n**Esta mañana he desayunado en un bar.** — утро ещё «сегодняшнее».",
          ejemplos: [
            { es: "Esta mañana he desayunado en un bar.", ru: "Сегодня утром я завтракал в баре." },
            { es: "Últimamente he dormido poco.", ru: "В последнее время я мало сплю (спал)." }
          ]
        }
      ],
      frases: ["FRE-132"],
      dialogos: ["DLE-035"],
      vocab: ["haber", "últimamente", "perder", "olvidar", "recordar"]
    },
    {
      id: "es8m2", n: 2, tipo: "leccion",
      titulo: "¿Alguna vez has…?",
      resumen: "Неправильные причастия; ya, todavía no, alguna vez, nunca.",
      intro: "У части глаголов причастие неправильное: **hecho**, **dicho**, **visto**… Их нужно запомнить. И ещё четыре слова, с которыми perfecto звучит чаще всего: **ya**, **todavía no**, **alguna vez**, **nunca**.",
      tablas: [
        { titulo: "Participios irregulares", encabezados: ["Инфинитив", "Причастие"], filas: [
          [{ es: "hacer", ru: "делать" }, { es: "hecho" }],
          [{ es: "decir", ru: "сказать" }, { es: "dicho" }],
          [{ es: "ver", ru: "видеть" }, { es: "visto" }],
          [{ es: "escribir", ru: "писать" }, { es: "escrito" }],
          [{ es: "poner", ru: "класть, ставить" }, { es: "puesto" }],
          [{ es: "volver", ru: "возвращаться" }, { es: "vuelto" }],
          [{ es: "abrir", ru: "открывать" }, { es: "abierto" }],
          [{ es: "romper", ru: "ломать" }, { es: "roto" }],
          [{ es: "morir", ru: "умирать" }, { es: "muerto" }],
          [{ es: "descubrir", ru: "открывать, обнаружить" }, { es: "descubierto" }]] },
        { titulo: "Ya, todavía, alguna vez, nunca", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "Ya he comido.", ru: "Я уже поел." }, { es: "Todavía no he comido.", ru: "Я ещё не ел." }],
          [{ es: "¿Alguna vez has estado en Rusia?", ru: "Ты когда-нибудь был в России?" }, { es: "Nunca he estado en Rusia.", ru: "Я никогда не был в России." }]] }
      ],
      secciones: [
        {
          id: "es8-part-irr",
          titulo: "Hecho, dicho, visto…",
          texto: "Самые частые неправильные причастия: **hacer → hecho**, **decir → dicho**, **ver → visto**, **escribir → escrito**, **poner → puesto**, **volver → vuelto**, **abrir → abierto**, **romper → roto**, **morir → muerto**, **descubrir → descubierto**.\nОстальные глаголы — по правилу: **leer → leído**, **ir → ido**, **tener → tenido**.",
          truco: "Почти у всех неправильных — **-to** или **-cho** на конце.",
          ejemplos: [
            { es: "¿Qué has hecho hoy?", ru: "Что ты сегодня делал?" },
            { es: "Todavía no he visto la película.", ru: "Я ещё не посмотрел фильм." }
          ],
          errores: [
            { mal: "He hacido la cena.", bien: "He hecho la cena.", por: "**hacer → hecho**." },
            { mal: "Ha rompido el plato.", bien: "Ha roto el plato.", por: "**romper → roto**." }
          ],
          chequeo: [
            { pide: "¿Qué te ha ___ Pablo? (decir)", opciones: ["dicho", "decido", "decidido"], ok: "dicho", por: "**decir → dicho**." }
          ]
        },
        {
          id: "es8-ya-todavia",
          titulo: "Ya, todavía no",
          texto: "**ya** — «уже»: **Ya he terminado.** **todavía no** — «ещё не»: **Todavía no he terminado.**\nНа вопрос **¿Ya has comido?** отвечают **Sí, ya he comido** или **No, todavía no**.",
          chequeo: [
            { pide: "—¿Has comido? —No, ___ no.", opciones: ["todavía", "ya", "nunca"], ok: "todavía", por: "«Ещё не» — **todavía no**." }
          ]
        },
        {
          id: "es8-alguna-vez",
          titulo: "Alguna vez, nunca",
          texto: "Опыт за всю жизнь — тоже perfecto: жизнь ещё продолжается.\n**¿Alguna vez has estado en España?** — ты когда-нибудь был в Испании? Ответ: **Sí, una vez**, **Sí, dos veces** или **No, nunca**.\n**Nunca he estado en Rusia** или **No he estado nunca en Rusia** — оба варианта верны (с **no** перед глаголом **nunca** идёт после, как в уроке 4).",
          errores: [
            { mal: "Nunca no he estado en Rusia.", bien: "Nunca he estado en Rusia.", por: "**nunca** перед глаголом — без **no**." }
          ],
          chequeo: [
            { pide: "¿___ has estado en Madrid?", opciones: ["Alguna vez", "Algún vez", "Una vez alguna"], ok: "Alguna vez", por: "«Когда-нибудь» — **alguna vez**." }
          ]
        }
      ],
      dialogos: ["DLE-037"],
      vocab: ["ya", "todavía", "alguna vez", "nunca", "romper", "descubrir", "morir"]
    },
    {
      id: "es8m3", n: 3, tipo: "leccion",
      titulo: "Ayer hablé",
      resumen: "Pretérito indefinido: правильные глаголы; знак ударения hablo / habló.",
      intro: "Второе прошедшее — **pretérito indefinido**: **ayer hablé** — «вчера я поговорил». Его используют, когда период **уже закончился**: **ayer**, **el lunes**, **en 2019**.",
      tablas: [
        { titulo: "-ar: hablar", encabezados: ["Кто", "Форма"], filas: es8Tabla("hablar", es8Indef) },
        { titulo: "-er: comer", encabezados: ["Кто", "Форма"], filas: es8Tabla("comer", es8Indef) },
        { titulo: "-ir: vivir", encabezados: ["Кто", "Форма"], filas: es8Tabla("vivir", es8Indef) }
      ],
      secciones: [
        {
          id: "es8-indef-reg",
          titulo: "Hablé, comí, viví",
          texto: "Окончания:\n· **-ar**: **-é, -aste, -ó, -amos, -asteis, -aron** (hablé, hablaste, habló…);\n· **-er** и **-ir** одинаково: **-í, -iste, -ió, -imos, -isteis, -ieron** (comí, comiste, comió…).\nФорма **nosotros** у -ar и -ir такая же, как в настоящем: **hablamos**, **vivimos**. Понятно по контексту: **Ayer hablamos** — вчера мы поговорили.",
          ejemplos: [
            { es: "Ayer hablé con Lucía.", ru: "Вчера я поговорил с Лусией." },
            { es: "Ana vivió dos años en Madrid.", ru: "Аня два года жила в Мадриде." },
            { es: "¿Qué comiste ayer?", ru: "Что ты вчера ел?" }
          ],
          chequeo: [
            { pide: "Ayer ___ con mi madre. (yo, hablar)", opciones: ["hablé", "hablo", "habló"], ok: "hablé", por: "**yo** в indefinido — **hablé**." }
          ]
        },
        {
          id: "es8-indef-tilde",
          titulo: "Hablo или habló?",
          texto: "Знак ударения меняет и лицо, и время:\n· **hablo** — я говорю (сейчас);\n· **habló** — он поговорил (вчера);\n· **hablé** — я поговорил; **hable** — другая форма (её ты выучишь позже).\nЧитай ударный слог: **HA**-blo / ha-**BLÓ**. Поэтому знак ударения здесь — не мелочь, а другое слово.",
          errores: [
            { mal: "Ayer Pablo hablo con Marta.", bien: "Ayer Pablo habló con Marta.", por: "Он, вчера — **habló**, со знаком." }
          ],
          chequeo: [
            { pide: "Ayer Ana ___ tarde. (llegar)", opciones: ["llegó", "llego", "llegué"], ok: "llegó", por: "Она, вчера — **llegó**." }
          ]
        },
        {
          id: "es8-indef-orto",
          titulo: "Llegué, busqué, empecé",
          texto: "В форме **yo** некоторые глаголы меняют букву, чтобы звук остался тем же:\n· **-gar → -gué**: llegar → **llegué**, jugar → **jugué**;\n· **-car → -qué**: buscar → **busqué**, sacar → **saqué**;\n· **-zar → -cé**: empezar → **empecé**.\nОстальные формы обычные: **llegaste, llegó**.",
          chequeo: [
            { pide: "Ayer ___ a casa a las diez. (yo, llegar)", opciones: ["llegué", "llegé", "llegó"], ok: "llegué", por: "**-gar → -gué**." }
          ]
        }
      ],
      vocab: ["ayer", "visitar"]
    },
    {
      id: "es8m4", n: 4, tipo: "leccion",
      titulo: "Fui, hice, tuve",
      resumen: "Неправильные: ser / ir, hacer, tener, estar, poder, decir, venir, dar, ver.",
      intro: "Самые частые глаголы в indefinido неправильные. Хорошая новость: у **ser** и **ir** формы одинаковые, а у многих неправильных — общие окончания.",
      tablas: [
        { titulo: "Ser / ir", encabezados: ["Кто", "Форма"], filas: es8Tabla("ir", es8Indef) },
        { titulo: "Hacer", encabezados: ["Кто", "Форма"], filas: es8Tabla("hacer", es8Indef) },
        { titulo: "Tener", encabezados: ["Кто", "Форма"], filas: es8Tabla("tener", es8Indef) },
        { titulo: "Estar", encabezados: ["Кто", "Форма"], filas: es8Tabla("estar", es8Indef) },
        { titulo: "Yo / él", encabezados: ["Глагол", "yo · él"], filas: [
          [{ es: "poder", ru: "мочь" }, { es: "pude · pudo" }],
          [{ es: "decir", ru: "сказать" }, { es: "dije · dijo" }],
          [{ es: "venir", ru: "прийти" }, { es: "vine · vino" }],
          [{ es: "dar", ru: "дать" }, { es: "di · dio" }],
          [{ es: "ver", ru: "увидеть" }, { es: "vi · vio" }]] }
      ],
      secciones: [
        {
          id: "es8-ser-ir",
          titulo: "Fui: ser и ir",
          texto: "У **ser** и **ir** в indefinido одни и те же формы: **fui, fuiste, fue, fuimos, fuisteis, fueron**. Различают по смыслу:\n· **Fui a Madrid** — я ездил в Мадрид (ir: есть **a** + место);\n· **Fue un viaje genial** — это была отличная поездка (ser).\n**fui** — я, **fue** — он, она. Знака ударения нет.",
          errores: [
            { mal: "Ayer fuí al cine.", bien: "Ayer fui al cine.", por: "**fui**, **fue** — без знака ударения." },
            { mal: "Ana fui a la playa.", bien: "Ana fue a la playa.", por: "Она — **fue**; **fui** — я." }
          ],
          chequeo: [
            { pide: "El viaje ___ muy bonito. (ser)", opciones: ["fue", "fui", "fuí"], ok: "fue", por: "Поездка (она) — **fue**." }
          ]
        },
        {
          id: "es8-fuertes",
          titulo: "Hice, tuve, estuve, pude…",
          texto: "У этих глаголов особая основа и одни окончания: **-e, -iste, -o, -imos, -isteis, -ieron**:\n· hacer → **hic-** (hice, hiciste, **hizo**);\n· tener → **tuv-**; estar → **estuv-**; poder → **pud-**; venir → **vin-**;\n· decir → **dij-** (во мн. ч. — **dijeron**).\nЗнака ударения нет: **tuve**, **estuvo**, **pudo** (сравни с правильными: hablé, habló).",
          truco: "**hizo** пишется через **z**: hi-ZO.",
          ejemplos: [
            { es: "El sábado estuvimos en casa.", ru: "В субботу мы были дома." },
            { es: "Ayer no tuve tiempo.", ru: "Вчера у меня не было времени." }
          ],
          chequeo: [
            { pide: "¿Qué ___ el domingo? (tú, hacer)", opciones: ["hiciste", "haciste", "hacistes"], ok: "hiciste", por: "**hacer → hic-**: **hiciste**." }
          ]
        },
        {
          id: "es8-dar-ver",
          titulo: "Di, vi",
          texto: "**dar** и **ver** — короткие формы без знака ударения: **di, diste, dio**; **vi, viste, vio**.\n**Le di un regalo a Marta.** — я подарил Марте подарок. **Anoche vimos una película.** — вчера вечером мы посмотрели фильм.",
          chequeo: [
            { pide: "Ayer ___ a Pablo en la calle. (yo, ver)", opciones: ["vi", "ví", "veí"], ok: "vi", por: "**vi** — без знака ударения." }
          ]
        }
      ],
      vocab: []
    },
    {
      id: "es8m5", n: 5, tipo: "leccion",
      titulo: "Ayer, el año pasado, hace dos años",
      resumen: "Когда это было: ayer, la semana pasada, hace + время, en 2019, даты.",
      intro: "С indefinido говорят, **когда** это было. Здесь — слова и конструкции для этого, а ещё как сказать год и дату.",
      tablas: [
        { titulo: "¿Cuándo?", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "ayer", ru: "вчера" }, { es: "anteayer", ru: "позавчера" }],
          [{ es: "anoche", ru: "вчера вечером" }, { es: "el lunes", ru: "в понедельник" }],
          [{ es: "la semana pasada", ru: "на прошлой неделе" }, { es: "el año pasado", ru: "в прошлом году" }],
          [{ es: "hace dos días", ru: "два дня назад" }, { es: "en 2019", ru: "в 2019 году" }]] },
        { titulo: "Años", encabezados: ["Год", "Как говорят"], filas: [
          [{ es: "1990" }, { es: "mil novecientos noventa" }],
          [{ es: "2005" }, { es: "dos mil cinco" }],
          [{ es: "2019" }, { es: "dos mil diecinueve" }]] }
      ],
      secciones: [
        {
          id: "es8-ayer",
          titulo: "Ayer, la semana pasada",
          texto: "Период, который **уже закончился**: **ayer**, **anteayer**, **anoche**, **el lunes** (прошлый), **la semana pasada**, **el mes pasado**, **el año pasado**, **el verano pasado**.\n**pasado** согласуется: **la semana pasada**, **el año pasado**.",
          chequeo: [
            { pide: "Lo vi la semana ___.", opciones: ["pasada", "pasado", "pasar"], ok: "pasada", por: "**la semana** — ж. р.: **pasada**." }
          ]
        },
        {
          id: "es8-hace",
          titulo: "Hace dos años",
          texto: "«Назад» — **hace** + время, **перед** временем: **hace dos días**, **hace un año**, **hace mucho tiempo**. **Llegué a Barcelona hace dos meses.**\nНе путай с погодой: **hace frío** — это урок 4.",
          errores: [
            { mal: "Llegué dos meses hace.", bien: "Llegué hace dos meses.", por: "**hace** — перед временем." }
          ],
          chequeo: [
            { pide: "Llegué a España ___ un año.", opciones: ["hace", "desde", "por"], ok: "hace", por: "«Год назад» — **hace un año**." }
          ]
        },
        {
          id: "es8-fechas",
          titulo: "En 2019, el 3 de mayo",
          texto: "Год — с **en**: **en 2019**, **en 1990**. Говорят как число: **dos mil diecinueve**, **mil novecientos noventa** (не «девятнадцать девяносто»).\nДата — с артиклем **el**: **el 3 de mayo de 2019**. **Nací el 3 de mayo.** Месяц — с маленькой буквы.",
          comparacion: "По-русски «третьего мая» — в испанском артикль **el** делает ту же работу: **el 3 de mayo**.",
          errores: [
            { mal: "Nací en 3 de mayo.", bien: "Nací el 3 de mayo.", por: "Дата — с **el**." }
          ],
          chequeo: [
            { pide: "Mi abuela nació ___ 1940.", opciones: ["en", "el", "a"], ok: "en", por: "Год — с **en**." }
          ]
        }
      ],
      vocab: ["anteayer", "anoche", "pasado", "fecha", "durante"],
      ampliacion: {
        titulo: "Большое время",
        intro: "Ещё два слова для дат. Они не входят в проверку урока. **el siglo** — век: **el siglo XX** (veinte); **la década** — десятилетие: **la década de los noventa**.",
        vocab: ["siglo", "década"]
      }
    },
    {
      id: "es8m6", n: 6, tipo: "leccion",
      titulo: "Hoy he ido, ayer fui",
      resumen: "Perfecto или indefinido: закончился ли период.",
      intro: "Главное правило урока. Решает не сам поступок, а **время, в которое он случился**: закончилось оно или ещё идёт.",
      tablas: [
        { titulo: "¿Perfecto o indefinido?", encabezados: ["Период ещё идёт: perfecto", "Период закончился: indefinido"], filas: [
          [{ es: "Hoy he ido a clase." }, { es: "Ayer fui a clase." }],
          [{ es: "Esta semana he trabajado mucho." }, { es: "La semana pasada trabajé mucho." }],
          [{ es: "Este verano hemos ido a Italia." }, { es: "El verano pasado fuimos a Italia." }],
          [{ es: "Nunca he estado en Rusia." }, { es: "En 2019 estuve en Rusia." }]] }
      ],
      secciones: [
        {
          id: "es8-perf-indef",
          titulo: "¿Ha terminado el tiempo?",
          texto: "Спроси себя: период уже закончился?\n· **ещё идёт** (hoy, esta mañana, esta semana, este año, в жизни: alguna vez, nunca) → **perfecto**: **Hoy he comido tortilla.**\n· **закончился** (ayer, el lunes, la semana pasada, en 2019, hace dos años) → **indefinido**: **Ayer comí tortilla.**\nОдно и то же действие может быть в обоих — меняется только «когда».",
          comparacion: "В русском здесь одно «я ел» — для испанского важно, в каком «ящике» времени это было.",
          errores: [
            { mal: "Ayer he ido al cine.", bien: "Ayer fui al cine.", por: "**ayer** закончился — indefinido." },
            { mal: "Hoy fuimos a la playa.", bien: "Hoy hemos ido a la playa.", por: "В Испании с **hoy** обычно perfecto." }
          ],
          chequeo: [
            { pide: "El lunes ___ el examen. (yo, terminar)", opciones: ["terminé", "he terminado", "termino"], ok: "terminé", por: "**el lunes** уже прошёл — indefinido." }
          ]
        },
        {
          id: "es8-america",
          titulo: "А в Латинской Америке?",
          texto: "В Латинской Америке (и на севере Испании) часто говорят **indefinido** и о сегодняшнем дне: **Hoy fui al médico**. Это не ошибка — так там говорят. Ты учишь вариант центральной Испании: **Hoy he ido al médico**. Если услышишь «hoy fui», ты поймёшь.",
          mas: {
            titulo: "Только что",
            texto: "О том, что случилось несколько минут назад, в Испании почти всегда говорят perfecto: **¿Qué ha pasado?** — что случилось? **Se ha roto el vaso.** — стакан разбился."
          }
        }
      ],
      vocab: []
    },
    {
      id: "es8m7", n: 7, tipo: "leccion",
      titulo: "¿Qué hiciste? ¿Cómo fue?",
      resumen: "Вопросы о прошлом; ¿qué tal…?, lo pasé muy bien, ¿qué pasó?",
      intro: "Как спросить о выходных или о поездке — и как ответить больше, чем «хорошо».",
      tablas: [
        { titulo: "Preguntas", encabezados: ["Вопрос", "Ответ"], filas: [
          [{ es: "¿Qué hiciste el fin de semana?", ru: "Что ты делал на выходных?" }, { es: "Fui a la playa.", ru: "Я ездил на пляж." }],
          [{ es: "¿Dónde estuviste?", ru: "Где ты был?" }, { es: "Estuve en Madrid.", ru: "Я был в Мадриде." }],
          [{ es: "¿Cómo fue el viaje?", ru: "Как прошла поездка?" }, { es: "Fue genial.", ru: "Было отлично." }],
          [{ es: "¿Qué tal el fin de semana?", ru: "Как выходные?" }, { es: "Lo pasé muy bien.", ru: "Я отлично провёл время." }]] }
      ],
      secciones: [
        {
          id: "es8-preguntas",
          titulo: "¿Qué hiciste? ¿Qué has hecho?",
          texto: "Вопрос в том же времени, что и ответ:\n· о вчера, о выходных: **¿Qué hiciste ayer?**, **¿Dónde estuviste?**, **¿Cómo fue?**;\n· о сегодня: **¿Qué has hecho hoy?**\n**¿Cuándo…?** обычно с indefinido: **¿Cuándo llegaste?** — **Hace dos meses.**",
          chequeo: [
            { pide: "¿Cómo ___ el viaje? —Fue genial.", opciones: ["fue", "es", "fui"], ok: "fue", por: "О закончившейся поездке — **fue**." }
          ]
        },
        {
          id: "es8-que-tal",
          titulo: "¿Qué tal?, lo pasé muy bien",
          texto: "**¿Qué tal el viaje?**, **¿Qué tal el fin de semana?** — «как прошла поездка?», «как выходные?» (без глагола).\nОтветы: **Muy bien**, **Fue genial**, **Lo pasé muy bien** («я отлично провёл время»; **pasarlo bien** — хорошо проводить время), **Lo pasé mal** (плохо).\n**¿Qué pasó?** — что случилось? **pasar** здесь — «происходить», как **ocurrir**.",
          ejemplos: [
            { es: "—¿Qué tal las vacaciones? —Lo pasamos muy bien.", ru: "— Как отпуск? — Мы отлично провели время." },
            { es: "—¿Qué pasó? —Perdí la maleta.", ru: "— Что случилось? — Я потерял чемодан." }
          ]
        }
      ],
      frases: ["FRE-133", "FRE-134", "FRE-135", "FRE-136"],
      dialogos: ["DLE-036"],
      vocab: ["pasar", "vacaciones", "ocurrir"],
      ampliacion: {
        titulo: "Ещё «происходить»",
        intro: "Ещё одно слово. Оно не входит в проверку урока. **suceder** — происходить, случаться (как **ocurrir**, чуть книжнее): **¿Qué sucedió?**",
        vocab: ["suceder"]
      }
    },
    {
      id: "es8m8", n: 8, tipo: "leccion",
      titulo: "Primero, después, al final",
      resumen: "Рассказать по порядку; путешествие.",
      intro: "Хороший рассказ о поездке — это порядок: что было сначала, что потом и чем всё закончилось.",
      tablas: [
        { titulo: "Contar en orden", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "primero", ru: "сначала" }, { es: "después, luego", ru: "потом" }],
          [{ es: "entonces", ru: "тогда" }, { es: "más tarde", ru: "позже" }],
          [{ es: "al final", ru: "в конце" }, { es: "por fin", ru: "наконец" }]] },
        { titulo: "El viaje", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "las vacaciones", ru: "отпуск, каникулы" }, { es: "la maleta, el equipaje", ru: "чемодан, багаж" }],
          [{ es: "el vuelo", ru: "рейс" }, { es: "el pasaporte", ru: "паспорт" }],
          [{ es: "la excursión", ru: "экскурсия, поход" }, { es: "el / la turista", ru: "турист, туристка" }],
          [{ es: "alojarse en un hotel", ru: "остановиться в гостинице" }, { es: "sacar fotos", ru: "фотографировать" }],
          [{ es: "bañarse en el mar", ru: "купаться в море" }, { es: "en el extranjero", ru: "за границей" }]] }
      ],
      secciones: [
        {
          id: "es8-orden",
          titulo: "Primero, después, al final",
          texto: "Порядок рассказа: **primero** → **después** / **luego** → **más tarde** → **al final**. **por fin** — «наконец-то», когда долго ждали: **Por fin llegamos al hotel.**\n**al final** — «в конце»; **por fin** — с облегчением.",
          ejemplos: [
            { es: "Primero fuimos al museo, después comimos y al final volvimos al hotel.", ru: "Сначала мы пошли в музей, потом поели, а в конце вернулись в гостиницу." }
          ],
          chequeo: [
            { pide: "Esperamos tres horas. ___ llegó el autobús.", opciones: ["Por fin", "Primero", "Ayer"], ok: "Por fin", por: "Долго ждали — **por fin**." }
          ]
        },
        {
          id: "es8-viaje",
          titulo: "Un viaje",
          texto: "Слова для поездки: **las vacaciones** (всегда мн. ч.), **la maleta**, **el vuelo**, **el pasaporte**, **la excursión**, **el pueblo** (деревня, маленький город). **alojarse** — остановиться (в гостинице), **sacar fotos** — фотографировать, **bañarse** — купаться. **en el extranjero** — за границей.\n**otra vez** — «ещё раз»: **Quiero volver otra vez.**",
          ejemplos: [
            { es: "Nos alojamos en un hotel cerca de la playa.", ru: "Мы остановились в гостинице рядом с пляжем." },
            { es: "Saqué muchas fotos.", ru: "Я сделал много фотографий." }
          ]
        }
      ],
      dialogos: ["DLE-038"],
      vocab: ["después", "luego", "entonces", "al final", "por fin", "otra vez", "maleta", "equipaje", "vuelo", "pasaporte", "excursión", "turista", "extranjero", "pueblo", "alojarse", "sacar", "bañarse"],
      ampliacion: {
        titulo: "Ещё о поездках",
        intro: "Ещё два слова. Они не входят в проверку урока. **recorrer** — объехать: **Recorrimos el país en coche.** **jamás** — никогда (сильнее, чем **nunca**): **Jamás he visto una ciudad tan bonita.**",
        vocab: ["recorrer", "jamás"]
      }
    },
    {
      id: "es8m9", n: 9, tipo: "leccion",
      titulo: "Mi vida",
      resumen: "Биография: nacer, crecer, mudarse, casarse, jubilarse.",
      intro: "Биография — это почти всегда indefinido: каждая дата уже прошла. **Nací en 1990. Me mudé a Barcelona en 2024.**",
      tablas: [
        { titulo: "Una vida", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "nacer", ru: "родиться" }, { es: "crecer", ru: "расти" }],
          [{ es: "estudiar la carrera", ru: "учиться в университете" }, { es: "mudarse", ru: "переехать" }],
          [{ es: "enamorarse de", ru: "влюбиться в" }, { es: "casarse con", ru: "жениться на, выйти замуж за" }],
          [{ es: "la boda", ru: "свадьба" }, { es: "jubilarse", ru: "выйти на пенсию" }],
          [{ es: "morir", ru: "умереть" }, { es: "la vida", ru: "жизнь" }]] },
        { titulo: "Nacer, mudarse", encabezados: ["Кто", "Форма"], filas: es8Tabla("mudarse", es8Indef) }
      ],
      secciones: [
        {
          id: "es8-biografia",
          titulo: "Nací, crecí, me mudé",
          texto: "Биография — по порядку, в indefinido: **Nací en un pueblo pequeño. Crecí en Moscú. Estudié la carrera en la universidad. En 2024 me mudé a Barcelona.**\nГлаголы с **se**: **mudarse**, **casarse**, **enamorarse**, **jubilarse** — **me mudé**, **se casaron**, **se jubiló**.\nС кем — **casarse con**, в кого — **enamorarse de**: **Se casó con Pablo.** Знаменитые люди: **Fue un escritor famoso. Murió en 1616.**",
          ejemplos: [
            { es: "Mis padres se casaron en 1985.", ru: "Мои родители поженились в 1985 году." },
            { es: "Mi abuelo se jubiló hace diez años.", ru: "Мой дедушка вышел на пенсию десять лет назад." }
          ],
          errores: [
            { mal: "Se casó a Pablo.", bien: "Se casó con Pablo.", por: "**casarse con**." }
          ],
          chequeo: [
            { pide: "Mis padres ___ en 1985. (casarse)", opciones: ["se casaron", "casaron", "se casó"], ok: "se casaron", por: "Глагол с **se**: **se casaron**." }
          ]
        }
      ],
      dialogos: ["DLE-039"],
      vocab: ["vida", "historia", "recuerdo", "nacer", "crecer", "mudarse", "enamorarse", "casarse", "boda", "carrera", "jubilarse", "famoso", "escritor", "pintor"],
      ampliacion: {
        titulo: "Ещё о жизни",
        intro: "Ещё три глагола. Они не входят в проверку урока. **divorciarse** — развестись; **graduarse** — окончить (университет); **acordarse de** — вспомнить: **¿Te acuerdas de mí?** — ты меня помнишь?",
        vocab: ["divorciarse", "graduarse", "acordarse"]
      }
    },
    {
      id: "es8m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Теперь всё вместе: что ты сделал сегодня, выходные в Мадриде, «ты когда-нибудь был…?», потерянный чемодан и жизнь бабушки Марты. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-035", "DLE-036", "DLE-037", "DLE-038", "DLE-039"]
    },
    {
      id: "es8m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Рассказать о дне, о поездке и о своей жизни.",
      intro: "Две части. **Разговор по ролям:** Лусия спрашивает, что ты делал сегодня, Хавьер — о том, куда ты ездил прошлым летом, Пабло — о твоей жизни; ты отвечаешь своими словами. **Потом напиши** по-испански (10–14 фраз): о поездке (когда, куда, что делал по порядку, как прошло) и короткую биографию о себе. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Perfecto (he + причастие)", rx: "\\b(he|has|ha|hemos|habéis|han) [a-záéíóúñ]+(ado|ido|cho|to|sto|rto|elto)\\b" },
        { txt: "Indefinido (fui, comí, viajé…)", rx: "\\b(fui|fue|fuimos|fueron|estuve|estuvo|estuvimos|tuve|tuvo|hice|hizo|hicimos|vi|vio|vimos|[a-záéíóúñ]+(é|ó|aste|iste|amos|imos|aron|ieron))\\b" },
        { txt: "Когда (ayer, el año pasado, hace…, en 20…)", rx: "(ayer|anoche|anteayer|pasad[oa]|hace (un|una|dos|tres|cuatro|cinco|seis|siete|ocho|nueve|diez|mucho)|en (19|20)\\d\\d|el \\d+ de)" },
        { txt: "Порядок (primero, después, al final…)", rx: "\\b(primero|después|luego|más tarde|al final|por fin|entonces)\\b" },
        { txt: "Как прошло (fue…, lo pasé…)", rx: "(fue (genial|muy|un|una|bonit|divertid|interesante)|lo pas(é|amos)|qué tal)" },
        { txt: "Ya, todavía, alguna vez, nunca", rx: "\\b(ya|todavía|alguna vez|nunca)\\b" },
        { txt: "Биография (nací, me mudé…)", rx: "\\b(nací|crecí|me mudé|estudié|me casé|empecé|conocí|viví)\\b" },
        { txt: "Не меньше 10 фраз", fn: t => azFrases(t).length >= 10 }
      ],
      consejos: [
        { rx: "\\b(ayer|anoche|anteayer|el año pasado|la semana pasada|el mes pasado|hace (un|una|dos|tres|mucho)[a-záéíóúñ ]*) (me |te |se |nos |os |lo |la |le )?(he|has|ha|hemos|habéis|han) ", msg: "С **ayer**, **la semana pasada**, **hace…** — indefinido: **ayer fui**, а не «ayer he ido»." },
        { rx: "\\b(fuí|fué|dí|dió|ví|vió)\\b", msg: "**fui, fue, di, dio, vi, vio** — без знака ударения." },
        { rx: "\\b(hacido|decido|escribido|ponido|volvido|abrido|rompido|morido|vido)\\b", msg: "Неправильные причастия: **hecho, dicho, escrito, puesto, vuelto, abierto, roto, muerto, visto**." },
        { rx: "\\b(dos|tres|cuatro|cinco|diez|muchos?) (días|años|meses|semanas) hace\\b", msg: "«Назад» — **hace** перед временем: **hace dos años**." },
        { rx: "\\b(nací|me casé|llegué|fue|fui) en \\d+ de\\b", msg: "Дата — с **el**: **el 3 de mayo**." },
        { rx: "\\bnunca no\\b", msg: "**nunca** перед глаголом — без **no**." },
        { rx: "\\b(he|has|ha|hemos|habéis|han) [a-záéíóúñ]+(ada|ados|adas|ida|idos|idas)\\b", msg: "Причастие после **he** не меняется: **he comido**, **ha llegado**." },
        { rx: "\\bse casó a\\b", msg: "**casarse con** alguien." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es8m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Perfecto, indefinido, когда что, вопросы и рассказ.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Perfecto", tipos: ["perfecto", "participio", "ya-todavia"], n: 4 },
        { nombre: "Indefinido", tipos: ["indefinido", "tilde-pasado"], n: 4 },
        { nombre: "Perfecto или indefinido", tipos: ["cual-pasado", "cual-pasado-escribir", "cuando-pasado", "error"], n: 4 },
        { nombre: "Когда и рассказ", tipos: ["hace-fecha", "anio", "biografia", "ordenar-historia"], n: 4 },
        { nombre: "Общение", tipos: ["pregunta", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    },
    {
      id: "es8m13", n: 13, tipo: "repaso",
      titulo: "Повторение: уроки 2–8",
      resumen: "Большая проверка всего, что ты уже знаешь.",
      intro: "Это не проверка урока 8, а проверка всего пройденного со второго урока: пять тем по шесть упражнений, в каждой — упражнения из разных уроков. Они берутся из уроков 2–8 и меняются при каждой попытке. Чтобы сдать, нужно 80 %. Если какая-то тема не дотянула, приложение предложит её повторить.",
      bloques: [
        { nombre: "Слова и их формы", bloque: "formas", n: 6 },
        { nombre: "Глаголы: сейчас и планы", bloque: "verbos", n: 6 },
        { nombre: "Прошедшее время", bloque: "pasado", n: 6 },
        { nombre: "Как это сказать", bloque: "decir", n: 6 },
        { nombre: "Общение", bloque: "com", n: 6 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs8Modulo(id) { return UNIDAD_ES_8.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_8 = UNIDAD_ES_8;
window.unidadEs8Modulo = unidadEs8Modulo;

/* ── Vocabulario: palabras → IDs (pasado: el adjetivo) ── */
const ES8_ID_FIJO = { "pasado": "ESP-00311" };
function es8Id(w) {
  if (ES8_ID_FIJO[w]) return ES8_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es8Vocab(m) { return (m.vocab || []).map(es8Id).filter(Boolean); }
function es8Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es8Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U8 (sin las que ya enseñaron la U1 a la U7, ni la ampliación) */
function es8Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_8.modulos.forEach(m => es8Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs8() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es8Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  const llenar = (frase, ok) => mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES8-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES8-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  /* Formas del verbo desde data-verbos-es.js: [frase, infinitivo, persona, módulo, regla] */
  const escribirVerbo = (pref, tipo, lista, fn, pide, nota) => lista.forEach(([frase, inf, p, mod, regla], i) => {
    const f = fn(inf, p); if (!f) return;
    const audio = llenar(frase, f);
    out.push({ id: "ES8-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: lex(inf),
      pide: pide(inf), grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES8_PERS[p][0].split(" / ")[0] + "** → **" + f + "**" + (nota && nota[inf] ? ". " + nota[inf] : ".") });
  });

  /* 1. Perfecto */
  escribirVerbo("pf", "perfecto", ES8_PERF, es8Perf, inf => "Впиши «" + inf + "» в pretérito perfecto (he + причастие).", ES8_NOTA_PART);
  /* 2. Participio */
  ES8_PART.forEach(([inf, mod, regla], i) => {
    const f = es8Part(inf); if (!f) return;
    out.push({ id: "ES8-pa-" + i, tipo: "participio", forma: "escribir", dificultad: 2, modulo: mod, regla, grupo: "pa-" + i, lex: lex(inf),
      pide: "Напиши причастие (participio) этого глагола.", grande: inf, esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
      explicacion: "**" + inf + " → " + f + "**" + (ES8_NOTA_PART[inf] ? ". " + ES8_NOTA_PART[inf] : ".") });
  });
  /* 3. Ya, todavía, alguna vez, nunca */
  elegir("yt", "ya-todavia", ES8_YA, 2, "es8-ya-todavia", "Что подходит?", 2, 11);
  /* 4. Indefinido */
  escribirVerbo("in", "indefinido", ES8_INDEF, es8Indef, inf => "Впиши «" + inf + "» в pretérito indefinido.", ES8_NOTA_INDEF);
  elegir("ti", "tilde-pasado", ES8_TILDE, 3, "es8-indef-tilde", "Какая форма подходит?", 2, 21);
  /* 5. Perfecto o indefinido */
  elegir("cu", "cual-pasado", ES8_CUAL, 6, "es8-perf-indef", "Какое прошедшее время подходит?", 2, 31);
  escribirFalta("cw", "cual-pasado-escribir", ES8_CUAL_ESC, "Впиши глагол в нужном прошедшем времени.");
  elegir("cd", "cuando-pasado", ES8_CUANDO, 5, "es8-ayer", "Что подходит?", 2, 41);
  /* 6. Hace, en, el; los años */
  escribirFalta("hf", "hace-fecha", ES8_HACE, "Впиши недостающее слово.");
  ES8_ANIO.forEach(([n, ok, mal], i) => {
    out.push({ id: "ES8-an-" + i, tipo: "anio", forma: "elegir", dificultad: 2, modulo: 5, regla: "es8-fechas", grupo: "an-" + i,
      pide: "Как сказать этот год?", grande: "en " + n, opciones: baraja([ok].concat(mal), i + 51), correcta: ok, oir: "en " + ok, explicacion: "**" + n + "** — **" + ok + "**." });
  });
  /* 7. Biografía */
  escribirVerbo("bi", "biografia", ES8_BIO, es8Indef, inf => "Впиши «" + inf + "» в pretérito indefinido.", ES8_NOTA_INDEF);
  /* 8. Ordenar una historia */
  ES8_HISTORIAS.forEach((l, i) => {
    let fichas = baraja(l, 61 + i); if (fichas.join("\n") === l.join("\n")) fichas = fichas.slice(1).concat(fichas[0]);
    out.push({ id: "ES8-oh-" + i, tipo: "ordenar-historia", forma: "ordenar", bloques: true, sep: "\n", dificultad: 2, modulo: 8, regla: "es8-orden", grupo: "oh-" + i,
      pide: "Собери рассказ по порядку.", fichas, esperada: l.join("\n"), explicacion: l.join(" ") });
  });
  /* 9. Preguntas */
  ES8_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES8-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 71), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 10. Errores típicos */
  ES8_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES8-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 11. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es8Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES8-dic-" + id)) return;
    const x = { id: "ES8-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_8.modulos.forEach(m => {
    es8Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es8Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 12. Situaciones y respuestas; dictado y orden de las frases de la U8 */
  ES8_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES8-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES8_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES8-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 8) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_8.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 7; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES8-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES8-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 13. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES8_TURNOS.forEach((T, i) => {
    out.push({ id: "ES8-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });

  /* 14. Profundización y formas (13/11/2026) */
  if (typeof es8Prof === "function") es8Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
const ES8_NOTA_PART = { hacer: "Неправильное: **hecho**.", decir: "Неправильное: **dicho**.", ver: "Неправильное: **visto**.", escribir: "Неправильное: **escrito**.",
  poner: "Неправильное: **puesto**.", volver: "Неправильное: **vuelto**.", abrir: "Неправильное: **abierto**.", romper: "Неправильное: **roto**.", morir: "Неправильное: **muerto**.",
  descubrir: "Неправильное: **descubierto**.", leer: "**leído** — со знаком ударения.", levantarse: "Местоимение — перед **he**.", ducharse: "Местоимение — перед **he**." };
const ES8_NOTA_INDEF = { ir: "У **ir** и **ser** одни формы: **fui, fue…**", ser: "У **ser** и **ir** одни формы: **fui, fue…**", hacer: "Основа **hic-**; он — **hizo**.", tener: "Основа **tuv-**.",
  estar: "Основа **estuv-**.", poder: "Основа **pud-**.", decir: "Основа **dij-**.", venir: "Основа **vin-**.", dar: "Без знака ударения.", ver: "Без знака ударения.",
  llegar: "**-gar → -gué**.", empezar: "**-zar → -cé**.", sacar: "**-car → -qué**.", jugar: "**-gar → -gué**.", mudarse: "Глагол с **se**.", casarse: "Глагол с **se**.",
  jubilarse: "Глагол с **se**.", enamorarse: "Глагол с **se**.", levantarse: "Глагол с **se**." };
/* Perfecto: [frase, infinitivo, persona 0–5, módulo, regla] */
const ES8_PERF = [
  ["Hoy ___ mucho. (yo)", "trabajar", 0, 1, "es8-perfecto"],
  ["Esta mañana ___ en un bar. (nosotros)", "desayunar", 3, 1, "es8-perfecto"],
  ["¿___ el libro? (tú)", "leer", 1, 1, "es8-perfecto"],
  ["Esta semana Ana ___ en casa.", "comer", 2, 1, "es8-perfecto"],
  ["Este año ___ mucho. (vosotros)", "viajar", 4, 1, "es8-perfecto"],
  ["Hoy mis padres ___ temprano.", "salir", 5, 1, "es8-perfecto"],
  ["Hoy ___ a las siete. (yo)", "levantarse", 0, 1, "es8-perf-pron"],
  ["¿___ ya? (tú)", "ducharse", 1, 1, "es8-perf-pron"],
  ["Hoy ___ la cena. (yo)", "hacer", 0, 2, "es8-part-irr"],
  ["¿Qué te ___ Pablo?", "decir", 2, 2, "es8-part-irr"],
  ["Esta semana no ___ la tele. (yo)", "ver", 0, 2, "es8-part-irr"],
  ["Todavía no ___ el mensaje. (ellos)", "escribir", 5, 2, "es8-part-irr"],
  ["Ana ya ___ a casa.", "volver", 2, 2, "es8-part-irr"],
  ["¿Quién ___ la ventana?", "abrir", 2, 2, "es8-part-irr"],
  ["¿Dónde ___ el libro? (tú)", "poner", 1, 2, "es8-part-irr"]
];
/* Participio: [infinitivo, módulo, regla] */
const ES8_PART = [["hablar", 1, "es8-perfecto"], ["comer", 1, "es8-perfecto"], ["vivir", 1, "es8-perfecto"], ["estar", 1, "es8-perfecto"], ["tener", 1, "es8-perfecto"], ["ir", 1, "es8-perfecto"], ["leer", 1, "es8-perfecto"],
  ["hacer", 2, "es8-part-irr"], ["decir", 2, "es8-part-irr"], ["ver", 2, "es8-part-irr"], ["escribir", 2, "es8-part-irr"], ["poner", 2, "es8-part-irr"], ["volver", 2, "es8-part-irr"],
  ["abrir", 2, "es8-part-irr"], ["romper", 2, "es8-part-irr"], ["morir", 2, "es8-part-irr"], ["descubrir", 2, "es8-part-irr"]];
const ES8_YA = [
  ["—¿Has comido? —No, ___ no.", "todavía", ["todavía", "ya", "nunca"], "«Ещё не» — **todavía no**.", "todavía"],
  ["—¿Has terminado? —Sí, ___ he terminado.", "ya", ["ya", "todavía", "alguna vez"], "«Уже» — **ya**.", "ya"],
  ["¿___ has estado en Madrid?", "Alguna vez", ["Alguna vez", "Algún vez", "Una vez alguna"], "«Когда-нибудь» — **alguna vez**.", "alguna vez", 2, "es8-alguna-vez"],
  ["No he estado ___ en Rusia.", "nunca", ["nunca", "ya", "alguna"], "С **no** перед глаголом — **nunca** после.", "nunca", 2, "es8-alguna-vez"],
  ["___ he estado en Rusia. (никогда)", "Nunca", ["Nunca", "Nunca no", "No nunca"], "**nunca** перед глаголом — без **no**.", "nunca", 2, "es8-alguna-vez"],
  ["—¿Has visto la película? —No, todavía ___.", "no", ["no", "sí", "ya"], "«Ещё нет» — **todavía no**.", "todavía"]
];
/* Indefinido: [frase, infinitivo, persona, módulo, regla] */
const ES8_INDEF = [
  ["Ayer ___ con Lucía. (yo)", "hablar", 0, 3, "es8-indef-reg"],
  ["¿Qué ___ ayer? (tú)", "comer", 1, 3, "es8-indef-reg"],
  ["Ana ___ dos años en Madrid.", "vivir", 2, 3, "es8-indef-reg"],
  ["El sábado mis amigos ___ al fútbol.", "jugar", 5, 3, "es8-indef-reg"],
  ["El año pasado ___ el museo. (nosotros)", "visitar", 3, 3, "es8-indef-reg"],
  ["¿A qué hora ___ ayer? (tú)", "levantarse", 1, 3, "es8-indef-reg"],
  ["Ayer ___ a casa a las diez. (yo)", "llegar", 0, 3, "es8-indef-orto"],
  ["El lunes ___ a trabajar a las nueve. (yo)", "empezar", 0, 3, "es8-indef-orto"],
  ["En la playa ___ muchas fotos. (yo)", "sacar", 0, 3, "es8-indef-orto"],
  ["Ayer ___ a la playa. (yo)", "ir", 0, 4, "es8-ser-ir"],
  ["La fiesta ___ genial.", "ser", 2, 4, "es8-ser-ir"],
  ["¿Adónde ___ el verano pasado? (vosotros)", "ir", 4, 4, "es8-ser-ir"],
  ["El sábado ___ en casa. (nosotros)", "estar", 3, 4, "es8-fuertes"],
  ["Ayer no ___ tiempo. (yo)", "tener", 0, 4, "es8-fuertes"],
  ["¿Qué ___ el domingo? (tú)", "hacer", 1, 4, "es8-fuertes"],
  ["¿Qué ___ Marta ayer?", "hacer", 2, 4, "es8-fuertes"],
  ["Pablo no ___ venir.", "poder", 2, 4, "es8-fuertes"],
  ["Lucía ___ que sí.", "decir", 2, 4, "es8-fuertes"],
  ["Mis amigos ___ a mi cumpleaños.", "venir", 5, 4, "es8-fuertes"],
  ["Le ___ un regalo a Marta. (yo)", "dar", 0, 4, "es8-dar-ver"],
  ["Anoche ___ una película. (nosotros)", "ver", 3, 4, "es8-dar-ver"],
  ["¿___ a Ana ayer? (tú)", "ver", 1, 4, "es8-dar-ver"]
];
const ES8_TILDE = [
  ["Ayer Pablo ___ con Marta. (hablar)", "habló", ["habló", "hablo", "hablé"], "Он, вчера — **habló**."],
  ["Normalmente ___ con mis padres los domingos. (yo, hablar)", "hablo", ["hablo", "habló", "hablé"], "Обычно, я — настоящее: **hablo**."],
  ["Ayer ___ mucho. (yo, trabajar)", "trabajé", ["trabajé", "trabaje", "trabajo"], "Я, вчера — **trabajé**."],
  ["Todos los días ___ a las ocho. (yo, llegar)", "llego", ["llego", "llegó", "llegué"], "Каждый день, я — **llego**."],
  ["Ana ___ tarde ayer. (llegar)", "llegó", ["llegó", "llego", "llegué"], "Она, вчера — **llegó**."],
  ["Ayer ___ en casa. (yo, comer)", "comí", ["comí", "como", "comió"], "Я, вчера — **comí**."],
  ["Ayer ___ al cine. (yo, ir)", "fui", ["fui", "fue", "fuí"], "Я — **fui**, без знака ударения.", null, 4, "es8-ser-ir"]
];
const ES8_CUAL = [
  ["Hoy ___ a clase. (yo, ir)", "he ido", ["he ido", "fui"], "**hoy** ещё идёт — perfecto."],
  ["Ayer ___ a clase. (yo, ir)", "fui", ["fui", "he ido"], "**ayer** закончился — indefinido."],
  ["Esta semana ___ mucho. (yo, trabajar)", "he trabajado", ["he trabajado", "trabajé"], "**esta semana** ещё идёт — perfecto."],
  ["La semana pasada ___ mucho. (yo, trabajar)", "trabajé", ["trabajé", "he trabajado"], "**la semana pasada** — indefinido."],
  ["Este año ___ a Italia. (nosotros, viajar)", "hemos viajado", ["hemos viajado", "viajamos"], "**este año** ещё идёт — perfecto."],
  ["En 2019 ___ a Italia. (nosotros, viajar)", "viajamos", ["viajamos", "hemos viajado"], "**en 2019** — indefinido."],
  ["Esta mañana ___ café. (yo, tomar)", "he tomado", ["he tomado", "tomé"], "**esta mañana** — perfecto."],
  ["Hace dos días ___ a Lucía. (yo, ver)", "vi", ["vi", "he visto"], "**hace dos días** — indefinido."],
  ["El lunes ___ el examen. (yo, terminar)", "terminé", ["terminé", "he terminado"], "**el lunes** уже прошёл — indefinido."],
  ["Anoche ___ muy tarde. (nosotros, cenar)", "cenamos", ["cenamos", "hemos cenado"], "**anoche** — indefinido."],
  ["Nunca ___ en Rusia. (yo, estar)", "he estado", ["he estado", "estuve"], "Опыт за всю жизнь — perfecto."]
];
const ES8_CUAL_ESC = [
  ["Hoy ___ en casa. (yo, comer)", "he comido", "**hoy** — perfecto: **he comido**.", 6, "es8-perf-indef", "comer"],
  ["Ayer ___ en casa. (yo, comer)", "comí", "**ayer** — indefinido: **comí**.", 6, "es8-perf-indef", "comer"],
  ["Este verano ___ a la playa. (nosotros, ir)", "hemos ido", "**este verano** — perfecto.", 6, "es8-perf-indef", "ir"],
  ["El verano pasado ___ a la playa. (nosotros, ir)", "fuimos", "**el verano pasado** — indefinido.", 6, "es8-perf-indef", "ir"],
  ["Esta mañana ___ a Javier. (yo, ver)", "he visto", "**esta mañana** — perfecto.", 6, "es8-perf-indef", "ver"],
  ["Anteayer ___ a Javier. (yo, ver)", "vi", "**anteayer** — indefinido.", 6, "es8-perf-indef", "ver"],
  ["Hace un año ___ a Barcelona. (yo, llegar)", "llegué", "**hace un año** — indefinido.", 6, "es8-perf-indef", "llegar"],
  ["¿Alguna vez ___ tortilla? (tú, comer)", "has comido", "Опыт — perfecto: **has comido**.", 6, "es8-perf-indef", "comer"]
];
const ES8_CUANDO = [
  ["___ he visto a Pablo.", "Hoy", ["Hoy", "Ayer", "El lunes"], "С perfecto — период, который ещё идёт: **hoy**."],
  ["___ fui al cine.", "Ayer", ["Ayer", "Hoy", "Esta semana"], "С indefinido — закончившийся период: **ayer**."],
  ["___ hemos viajado mucho.", "Este año", ["Este año", "El año pasado", "En 2019"], "С perfecto — **este año**."],
  ["___ estuvimos en Madrid.", "El mes pasado", ["El mes pasado", "Este mes", "Esta semana"], "С indefinido — **el mes pasado**."],
  ["Lo vi la semana ___.", "pasada", ["pasada", "pasado", "pasar"], "**la semana** — **pasada**.", "pasado"]
];
const ES8_HACE = [
  ["Llegué a España ___ un año.", "hace", "«Год назад» — **hace un año**.", 5, "es8-hace"],
  ["Mi abuela nació ___ 1940.", "en", "Год — с **en**.", 5, "es8-fechas"],
  ["Nací ___ 3 de mayo.", "el", "Дата — с **el**.", 5, "es8-fechas"],
  ["Lo conocí ___ mucho tiempo.", "hace", "«Давно» — **hace mucho tiempo**.", 5, "es8-hace"],
  ["Mis padres se casaron ___ 1985.", "en", "Год — с **en**.", 9, "es8-fechas"]
];
/* Años: [cifra, correcta, equivocadas] */
const ES8_ANIO = [
  ["1990", "mil novecientos noventa", ["diecinueve noventa", "mil nueve cientos noventa"]],
  ["2019", "dos mil diecinueve", ["veinte diecinueve", "dos mil diez y nueve"]],
  ["2005", "dos mil cinco", ["dos mil y cinco", "veinte cinco"]],
  ["1985", "mil novecientos ochenta y cinco", ["diecinueve ochenta y cinco", "mil novecientos ochentaicinco"]]
];
/* Biografía: [frase, infinitivo, persona, módulo, regla] */
const ES8_BIO = [
  ["Mi abuela ___ en 1940.", "nacer", 2, 9, "es8-biografia"],
  ["___ en un pueblo pequeño. (yo)", "crecer", 0, 9, "es8-biografia"],
  ["Mis padres ___ en 1985.", "casarse", 5, 9, "es8-biografia"],
  ["En 2024 ___ a Barcelona. (yo)", "mudarse", 0, 9, "es8-biografia"],
  ["Mi padre ___ en 2020.", "jubilarse", 2, 9, "es8-biografia"],
  ["Pablo ___ de Marta en Madrid.", "enamorarse", 2, 9, "es8-biografia"],
  ["El escritor ___ en 1616.", "morir", 2, 9, "es8-biografia"]
];
const ES8_HISTORIAS = [
  ["Primero fuimos al museo.", "Después comimos en un bar.", "Más tarde nos bañamos en el mar.", "Al final volvimos al hotel."],
  ["El sábado salimos de casa a las ocho.", "Luego cogimos el tren.", "Llegamos a Madrid a las once.", "Por fin vimos el mar."],
  ["Nací en un pueblo pequeño.", "Después estudié la carrera en Moscú.", "Más tarde conocí a mi marido.", "Al final nos mudamos a Barcelona."]
];
const ES8_PREGUNTAS = [
  ["¿Qué ___ el fin de semana?", "Fui a la playa.", "hiciste", ["hiciste", "haces", "harás"], 7, "es8-preguntas"],
  ["¿Dónde ___ ayer?", "En casa de Lucía.", "estuviste", ["estuviste", "estás", "eres"], 7, "es8-preguntas"],
  ["¿Cómo ___ el viaje?", "Fue genial.", "fue", ["fue", "es", "fui"], 7, "es8-preguntas"],
  ["¿Qué tal ___ fin de semana?", "Muy bien.", "el", ["el", "la", "en"], 7, "es8-que-tal"],
  ["¿Cuándo ___ a Barcelona?", "Hace dos meses.", "llegaste", ["llegaste", "llegas", "llegar"], 7, "es8-preguntas"],
  ["¿Qué ___ hoy?", "He trabajado mucho.", "has hecho", ["has hecho", "has hacido", "haces"], 7, "es8-preguntas"],
  ["¿Qué ___?", "Perdí la maleta.", "pasó", ["pasó", "pasa", "pasé"], 7, "es8-que-tal"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES8_ERRORES = [
  [["Ayer", "he ido", "al", "cine."], 1, "fui", 6, "es8-perf-indef", "**ayer** — indefinido: **fui**."],
  [["Hoy", "fuimos", "a", "la", "playa."], 1, "hemos ido", 6, "es8-perf-indef", "В Испании с **hoy** — perfecto: **hemos ido**."],
  [["Ayer", "Pablo", "hablo", "con", "Marta."], 2, "habló", 3, "es8-indef-tilde", "Он, вчера — **habló**."],
  [["Ayer", "fuí", "al", "museo."], 1, "fui", 4, "es8-ser-ir", "**fui** — без знака ударения."],
  [["Ana", "fui", "a", "Madrid", "el", "lunes."], 1, "fue", 4, "es8-ser-ir", "Она — **fue**."],
  [["He", "hacido", "la", "cena."], 1, "hecho", 2, "es8-part-irr", "**hacer → hecho**."],
  [["Nací", "en", "3", "de", "mayo."], 1, "el", 5, "es8-fechas", "Дата — с **el**: **el 3 de mayo**."],
  [["Ella", "ha", "comida", "en", "casa."], 2, "comido", 1, "es8-perfecto", "Причастие не меняется: **comido**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES8_SITUACIONES = [
  ["Ты рассказываешь, что сегодня встал в семь.", "Hoy me he levantado a las siete.", ["Hoy he me levantado a las siete.", "Hoy me levanté a las siete ayer."], "С **hoy** — perfecto; **me** перед **he**.", 1],
  ["Ты спрашиваешь друга, был ли он когда-нибудь в Испании.", "¿Alguna vez has estado en España?", ["¿Alguna vez estás en España?", "¿Algún vez has estado en España?"], "**¿Alguna vez has…?**", 2],
  ["Ты говоришь, что вчера ходил в кино.", "Ayer fui al cine.", ["Ayer he ido al cine.", "Ayer fuí al cine."], "**ayer** — indefinido, **fui** без знака.", 6],
  ["Ты говоришь, что приехал в Барселону два месяца назад.", "Llegué a Barcelona hace dos meses.", ["Llegué a Barcelona dos meses hace.", "He llegado a Barcelona hace dos meses ayer."], "**hace dos meses** — indefinido.", 5],
  ["Ты спрашиваешь подругу о выходных.", "¿Qué tal el fin de semana?", ["¿Qué tal la fin de semana?", "¿Cómo tal el fin de semana?"], "**¿Qué tal el fin de semana?**", 7],
  ["Ты говоришь, что отлично провёл время.", "Lo pasé muy bien.", ["Lo pasó muy bien yo.", "Pasé lo muy bien."], "**Lo pasé muy bien.**", 7],
  ["Ты рассказываешь, когда родился.", "Nací el 3 de mayo de 1995.", ["Nací en 3 de mayo de 1995.", "Nacé el 3 de mayo de 1995."], "Дата — с **el**; я — **nací**.", 9],
  ["Ты говоришь, что ещё не ел.", "Todavía no he comido.", ["Ya no he comido.", "Todavía no comí ayer."], "**todavía no** + perfecto.", 2]
];
const ES8_RESPUESTAS = [
  ["¿Qué has hecho hoy?", "He trabajado mucho.", ["Trabajé mucho anteayer.", "He trabajo mucho."], "О сегодня — perfecto: **he trabajado**.", 1],
  ["¿Has comido ya?", "No, todavía no.", ["No, ya no todavía.", "Sí, todavía."], "**No, todavía no.**", 2],
  ["¿Qué hiciste el sábado?", "Fui a la playa.", ["He ido a la playa el sábado.", "Voy a la playa."], "О субботе — indefinido: **fui**.", 6],
  ["¿Qué tal el viaje?", "Fue genial. Lo pasé muy bien.", ["Es genial. Lo paso muy bien.", "Fui genial."], "Поездка (она) — **fue**.", 7],
  ["¿Cuándo llegaste?", "Hace dos días.", ["Dos días hace.", "Desde dos días."], "**hace dos días**.", 5],
  ["¿Alguna vez has estado en Rusia?", "Sí, una vez, hace tres años.", ["Sí, una vez, tres años hace.", "Sí, alguna vez he estado ayer."], "**Sí, una vez** + **hace**.", 2],
  ["¿Dónde naciste?", "Nací en Moscú.", ["Nacé en Moscú.", "He nacido en Moscú ayer."], "Я — **nací**.", 9]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas «a|b|~c»]], modelo, pista?] */
function es8Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f]) => ({ es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const PERF_RX = "he [a-záéíóúñ]+(ado|ido|cho|to)";
const ES8_TURNOS = [
  es8Turnos("Lucía", "lucia", "Chat con Lucía: ¿qué has hecho hoy?", true, [
    ["¡Hola! ¿Qué has hecho hoy?", "Привет! Что ты сегодня делал(а)?", "Скажи, что сегодня утром ты был на занятиях.",
      [["сегодня утром / сегодня", "esta mañana|hoy"], ["perfecto", "he ido|he estado|he tenido|~he"]], "Esta mañana he ido a clase.", "**Esta mañana he…**"],
    ["¿Y has comido ya?", "А ты уже поел(а)?", "Ответь, что ещё нет.",
      [["ещё нет", "todavía no"]], "No, todavía no.", "**todavía no**"],
    ["¿Vamos a comer algo?", "Пойдём поедим?", "Согласись и предложи время.",
      [["да", "vale|sí|claro|genial|perfecto"], ["время", "a las|~las"]], "¡Vale! ¿A las dos?"]
  ]),
  es8Turnos("Javier", "javier", "El verano pasado", false, [
    ["¿Adónde fuiste el verano pasado?", "Куда ты ездил(а) прошлым летом?", "Скажи, что ты ездил(а) в Мадрид (или в другое место).",
      [["ездил", "fui|estuve"], ["куда", "a madrid|a la playa|a moscú|~a|~en"]], "Fui a Madrid.", "**Fui a…**"],
    ["¿Y qué hiciste allí?", "И что ты там делал(а)?", "Расскажи две вещи по порядку: сначала…, потом…",
      [["сначала", "primero"], ["потом", "después|luego"]], "Primero visité el centro y después fui a la playa.", "**Primero…, después…**"],
    ["¿Qué tal fue?", "Как прошло?", "Скажи, что ты отлично провёл(а) время.",
      [["хорошо провёл", "lo pasé muy bien|lo pasé bien|fue genial|fue muy bonito|~genial"]], "Lo pasé muy bien."]
  ]),
  es8Turnos("Pablo", "pablo", "Tu vida", false, [
    ["¿Dónde naciste?", "Где ты родился(лась)?", "Скажи, где ты родился(лась).",
      [["родился", "nací"]], "Nací en Moscú.", "**Nací en…**"],
    ["¿Y cuándo llegaste a Barcelona?", "А когда ты приехал(а) в Барселону?", "Скажи, сколько времени назад.",
      [["приехал", "llegué|me mudé|vine|~llegué"], ["назад", "hace"]], "Llegué hace dos meses.", "**hace…**"],
    ["¿Alguna vez has estado en Madrid?", "Ты когда-нибудь был(а) в Мадриде?", "Ответь: да, один раз — или нет, никогда.",
      [["ответ", "sí, una vez|una vez|nunca|no, nunca|he estado"]], "Sí, una vez.", "**Sí, una vez** / **No, nunca**"]
  ])
];
window.ejerciciosUnidadEs8 = ejerciciosUnidadEs8;
window.es8Vocab = es8Vocab;
window.es8Ampliacion = es8Ampliacion;
window.es8Objetivo = es8Objetivo;
/* Desafío del día U8 (js/hoy.js): [verbo, marcador] */
const ES8_HOY = [["ir", "ayer"], ["comer", "hoy"], ["trabajar", "ayer"], ["ver", "esta semana"], ["hablar", "anoche"], ["hacer", "hoy"], ["estar", "el sábado"],
  ["levantarse", "hoy"], ["salir", "el viernes"], ["leer", "este mes"], ["llegar", "ayer"], ["escribir", "hoy"], ["tener", "la semana pasada"], ["comprar", "esta mañana"]];
window.ES8_HOY = ES8_HOY;
window.es8Perf = es8Perf;
window.es8Indef = es8Indef;
const ES8_MEZCLA = { perfecto: 3, participio: 2, "ya-todavia": 1, indefinido: 3, "tilde-pasado": 2, "cual-pasado": 2, "cual-pasado-escribir": 2, "cuando-pasado": 1,
  "hace-fecha": 1, anio: 1, biografia: 1, "ordenar-historia": 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1 };
window.ES8_MEZCLA = ES8_MEZCLA;

/* ── Repaso acumulativo U2–U8 (módulo 13, 13/11/2026; Manu: 5 bloques de 6 que mezclan las unidades; la U1 no entra) ──
   Los ejercicios se toman de los bancos de las U2–U8: solo los tipos que van a la evaluación de cada unidad (sin la
   ampliación), repartidos por tema. Cada uno lleva su unidad (el progreso se anota en la unidad de origen). */
const ES8_REPASO_TEMA = {
  formas: ["articulo", "plural", "concordancia", "nacionalidad", "familia", "este-esta", "demostrativo", "posesivo", "orden-adjetivo", "muy-mucho", "antonimo",
    "articulo-cero", "mucho", "mucho-escribir", "cantidad", "algo-nada", "pronombre-od", "pronombre-od-escribir", "pronombre-infinitivo", "imperativo-pronombre", "imperativo-pegado"],
  verbos: ["forma", "forma-escribir", "estar-forma", "conjugar", "cambia-persona", "bota", "reflexivo", "estar-gerundio", "gerundio", "ahora-siempre", "verbo-infinitivo",
    "poder-saber", "tener-hay", "imperativo", "imperativo-elegir", "imperativo-contexto", "ir-a", "ir-a-frase"],
  pasado: ["perfecto", "participio", "ya-todavia", "indefinido", "tilde-pasado", "cual-pasado", "cual-pasado-escribir", "cuando-pasado", "hace-fecha", "biografia"],
  decir: ["hay-esta", "ser-estar", "ser-estar-escribir", "preposicion", "a-en-de", "llevar-traer", "gustar", "gustar-escribir", "gustar-frase", "doler", "doler-escribir",
    "reaccion", "opinion", "comparar", "comparar-escribir", "conector", "hace-tengo", "negacion", "consejo", "hora-escribir", "hora-es-son", "cuesta", "pronombre"],
  com: ["situacion-frase", "respuesta", "pregunta", "plan", "mensaje", "relacion", "tienda", "farmacia", "menu"]
};
function es8Repaso() {
  const tema = {};
  Object.keys(ES8_REPASO_TEMA).forEach(b => ES8_REPASO_TEMA[b].forEach(t => { tema[t] = b; }));
  const pool = [];
  for (let n = 2; n <= 8; n++) {
    const fn = window["ejerciciosUnidadEs" + n], U = window["UNIDAD_ES_" + n];
    if (typeof fn !== "function" || !U) continue;
    const ex = U.modulos.find(m => m.tipo === "examen");
    const tipos = new Set([].concat(...(ex ? ex.partes.map(p => p.tipos) : [])));
    fn().forEach(e => {
      if (e.ampliacion || !tipos.has(e.tipo) || !tema[e.tipo]) return;
      if (n === 2 && e.tipo === "pronombre") return;   /* los pronombres personales de la U2 van a «formas», no a «decir» */
      pool.push(Object.assign({}, e, { bloque: tema[e.tipo], unidad: n }));
    });
  }
  const m = UNIDAD_ES_8.modulos.find(x => x.tipo === "repaso");
  return { pool, partes: m.bloques.map(b => ({ nombre: b.nombre, bloque: b.bloque, tipos: [], n: b.n })), aprobado: m.aprobado, intro: m.intro };
}
window.es8Repaso = es8Repaso;

/* ── Profundización (13/11/2026, repaso Abecé / Azbuka pedido por Manu) ──────────────
   Más a fondo que se suma a la teoría al cargar; tipos de profundización de Azbuka y
   ejercicios de formas generados desde data-verbos-es.js. */
const ES8_MAS = {
  "es8-perfecto": { titulo: "Perfecto и русский вид", texto: "Не путай perfecto с совершенным видом. **He leído el libro** — «я прочитал», а **Hoy he leído mucho** — «сегодня я много читал». Perfecto выбирают не по виду, а по времени: период ещё идёт (**hoy**, **esta semana**) или это опыт за всю жизнь.", ejemplos: [{ es: "Hoy he leído mucho.", ru: "Сегодня я много читал." }] },
  "es8-perf-pron": { titulo: "Lo he comprado", texto: "Местоимения **lo, la, le** тоже ставят перед **he**: **¿El pan? Ya lo he comprado.** **¿A Lucía? Le he escrito un mensaje.** С инфинитивом их можно прицепить к концу, а с **he** — никогда: не «he lo comprado».", ejemplos: [{ es: "¿La película? Ya la he visto.", ru: "Фильм? Я его уже видел." }] },
  "es8-hoy": { titulo: "Esta mañana — уже прошла?", texto: "Если **esta mañana** говоришь вечером, многие испанцы всё равно используют perfecto: утро — часть сегодняшнего дня. **Esta mañana he ido al médico.** С **anoche** (вчера вечером) — уже indefinido: **Anoche fui al cine.**", ejemplos: [{ es: "Anoche fui al cine.", ru: "Вчера вечером я ходил в кино." }] },
  "es8-part-irr": { titulo: "Leído, oído", texto: "Знак ударения у **leído**, **oído**, **creído**: без него гласные слились бы в один слог. У **-ar** и большинства **-er, -ir** — без знака: **hablado**, **comido**, **vivido**.", ejemplos: [{ es: "¿Has oído el teléfono?", ru: "Ты слышал телефон?" }] },
  "es8-ya-todavia": { titulo: "Короткий ответ", texto: "Если ответ короткий, глагол не нужен: **—¿Has comido? —Todavía no.** / **—Sí, ya.**", ejemplos: [{ es: "—¿Has terminado? —Sí, ya.", ru: "— Ты закончил? — Да, уже." }] },
  "es8-alguna-vez": { titulo: "Una vez, dos veces", texto: "Ответ на **¿Alguna vez…?**: **Sí, una vez** / **dos veces** / **muchas veces** — или **No, nunca**. **vez** во множественном числе — **veces** (z → c).", ejemplos: [{ es: "He estado en Madrid tres veces.", ru: "Я был в Мадриде три раза." }] },
  "es8-indef-reg": { titulo: "Nosotros: hablamos", texto: "У **-ar** и **-ir** форма **nosotros** в indefinido совпадает с настоящим: **hablamos**, **vivimos**. Время подсказывает слово: **Ayer hablamos** — вчера мы говорили; **Ahora hablamos** — сейчас говорим. У **-er** — разные: **comemos** / **comimos**.", ejemplos: [{ es: "Ayer comimos en casa.", ru: "Вчера мы ели дома." }] },
  "es8-indef-tilde": { titulo: "Hable, hablé, habló", texto: "Три слова — три разных смысла: **hablo** (я говорю), **habló** (он говорил), **hablé** (я говорил). Есть ещё **hable** (без знака) — это другая форма, ты её выучишь позже. Поэтому в Abecé знак ударения в этих формах — не мелочь.", ejemplos: [{ es: "Ayer hablé con Pablo.", ru: "Вчера я поговорил с Пабло." }] },
  "es8-indef-orto": { titulo: "Почему -qué, -gué, -cé", texto: "Звук должен остаться тем же: **busc-** + **é** дало бы «бусе», поэтому пишут **busqué**; **lleg-** + **é** → **llegué** (с **u**, чтобы g не читалось как j); **empez-** + **é** → **empecé** (перед e пишут c). У других лиц всё по правилу: **buscó**, **llegó**, **empezó**.", ejemplos: [{ es: "Busqué las llaves.", ru: "Я искал ключи." }] },
  "es8-ser-ir": { titulo: "Как понять: ser или ir?", texto: "После **fui** смотри, что идёт дальше: **a** + место — это **ir** (**Fui a Madrid**); прилагательное или существительное — **ser** (**Fue un día genial**, **Fue profesor**).", ejemplos: [{ es: "Mi abuelo fue profesor.", ru: "Мой дедушка был учителем." }] },
  "es8-fuertes": { titulo: "Без знака ударения", texto: "У этих глаголов в yo и él ударение падает на корень, поэтому знака нет: **tuve, tuvo**, **hice, hizo**, **pude, pudo**, **vine, vino**. У **decir** в ellos нет i: **dijeron** (не «dijieron»).", ejemplos: [{ es: "Me dijeron que sí.", ru: "Мне сказали, что да." }] },
  "es8-hace": { titulo: "Hace + время в начале", texto: "**hace** может стоять и в начале, и в конце: **Hace dos años fui a Italia** = **Fui a Italia hace dos años.** Вопрос: **¿Cuánto tiempo hace?** — сколько времени назад?", ejemplos: [{ es: "Hace dos años fui a Italia.", ru: "Два года назад я ездил в Италию." }] },
  "es8-fechas": { titulo: "El uno или el primero?", texto: "Первое число в Испании — **el uno**: **el uno de mayo**; в Латинской Америке часто **el primero de mayo**. Месяцы пишут с маленькой буквы: **en mayo**.", ejemplos: [{ es: "Nací el uno de mayo.", ru: "Я родился первого мая." }] },
  "es8-preguntas": { titulo: "¿Qué tal fue…?", texto: "О событии: **¿Cómo fue?** или **¿Qué tal fue?** О сегодняшнем — perfecto: **¿Qué tal ha ido el día?** — как прошёл день?", ejemplos: [{ es: "¿Qué tal ha ido el día?", ru: "Как прошёл день?" }] },
  "es8-orden": { titulo: "Después de + инфинитив", texto: "**después de** + инфинитив — «после того как»: **Después de comer, fuimos a la playa.** Так же **antes de**: **Antes de salir, cerré la ventana.**", ejemplos: [{ es: "Después de comer, fuimos a la playa.", ru: "После обеда мы пошли на пляж." }] },
  "es8-biografia": { titulo: "Nacer — всегда indefinido", texto: "Родиться можно только один раз, поэтому **nací**, **nació** — почти всегда indefinido. Но **ha nacido** — если это свежая новость: **¡Ha nacido el hijo de Marta!**", ejemplos: [{ es: "¡Ha nacido el hijo de Marta!", ru: "У Марты родился сын!" }] }
};
UNIDAD_ES_8.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES8_MAS[s.id] && !s.mas) s.mas = ES8_MAS[s.id]; }));

const ES8_NAT = [
  ["Hoy he comido en casa.", ["Hoy comí en casa ahora.", "Hoy he comida en casa."], "С **hoy** — perfecto; причастие не меняется.", 1, "es8-perfecto"],
  ["Me he levantado a las siete.", ["He me levantado a las siete.", "Me levantado a las siete."], "**me** + **he** + причастие.", 1, "es8-perf-pron"],
  ["¿Has hecho la cena?", ["¿Has hacido la cena?", "¿Has hecha la cena?"], "**hacer → hecho**.", 2, "es8-part-irr"],
  ["Nunca he estado en Rusia.", ["Nunca no he estado en Rusia.", "No he nunca estado en Rusia."], "**nunca** перед глаголом — без **no**.", 2, "es8-alguna-vez"],
  ["Todavía no he terminado.", ["Ya no he terminado todavía.", "Todavía he no terminado."], "**todavía no** + perfecto.", 2, "es8-ya-todavia"],
  ["Ayer hablé con Lucía.", ["Ayer hablo con Lucía.", "Ayer he hablado con Lucía."], "**ayer** — indefinido: **hablé**.", 3, "es8-indef-tilde"],
  ["Llegué a las nueve.", ["Llegé a las nueve.", "Llegó a las nueve yo."], "**-gar → -gué**.", 3, "es8-indef-orto"],
  ["Ayer fui al cine.", ["Ayer fuí al cine.", "Ayer fue al cine yo."], "Я — **fui**, без знака.", 4, "es8-ser-ir"],
  ["Pablo hizo la cena.", ["Pablo hació la cena.", "Pablo hico la cena."], "**hacer**, он — **hizo**.", 4, "es8-fuertes"],
  ["Me dijeron que sí.", ["Me dijieron que sí.", "Me decieron que sí."], "**decir**, они — **dijeron**.", 4, "es8-fuertes"],
  ["Llegué hace dos años.", ["Llegué dos años hace.", "Llegué en dos años."], "**hace** + время.", 5, "es8-hace"],
  ["Nací el 3 de mayo.", ["Nací en 3 de mayo.", "Nací 3 de mayo."], "Дата — с **el**.", 5, "es8-fechas"],
  ["El año pasado fuimos a Italia.", ["El año pasado hemos ido a Italia.", "El año pasado vamos a Italia."], "Закончившийся период — **indefinido**.", 6, "es8-perf-indef"],
  ["Este año hemos viajado mucho.", ["Este año viajamos mucho ayer.", "Este año hemos viajados mucho."], "Период ещё идёт — **perfecto**.", 6, "es8-perf-indef"],
  ["Mis padres se casaron en 1985.", ["Mis padres casaron en 1985.", "Mis padres se han casado en 1985."], "Год — indefinido; глагол с **se**.", 9, "es8-biografia"]
];
const ES8_POR = [
  ["Hoy he trabajado mucho.", "Почему «he trabajado»?", "Период «hoy» ещё не закончился", ["Это было давно", "Это привычка"], "**hoy** — perfecto.", 6, "es8-perf-indef"],
  ["Ayer trabajé mucho.", "Почему «trabajé»?", "«ayer» уже закончился", ["Сегодняшний день ещё идёт", "Это будущее"], "**ayer** — indefinido.", 6, "es8-perf-indef"],
  ["¿Alguna vez has estado en España?", "Почему perfecto?", "Это опыт за всю жизнь, без даты", ["Это было вчера", "Это привычка"], "Опыт — perfecto.", 2, "es8-alguna-vez"],
  ["Ayer Pablo habló con Marta.", "Почему «habló» со знаком?", "Без знака «hablo» — это «я говорю»", ["Так красивее", "Это будущее"], "Знак меняет лицо и время.", 3, "es8-indef-tilde"],
  ["Ayer fui a la playa.", "«fui» — от ser или от ir?", "От ir: дальше идёт «a» + место", ["От ser: дальше прилагательное", "От ver"], "**fui a…** — ir.", 4, "es8-ser-ir"],
  ["La fiesta fue genial.", "«fue» — от ser или от ir?", "От ser: дальше прилагательное", ["От ir: дальше место", "От ver"], "**fue genial** — ser.", 4, "es8-ser-ir"],
  ["Busqué las llaves.", "Почему «busqué», а не «buscé»?", "Чтобы c читалась как «к»", ["Это исключение без причины", "Так пишут во мн. ч."], "**-car → -qué**.", 3, "es8-indef-orto"],
  ["Nací en 1995.", "Почему «en», а не «el»?", "Год — с en; дата — с el", ["Год — с el", "Без предлога нельзя"], "**en 1995** / **el 3 de mayo**.", 5, "es8-fechas"]
];
const ES8_OIDO = [
  ["Hablo con Ana.", "Послушай: сейчас или в прошлом?", "Сейчас", ["Сейчас", "В прошлом"], "**hablo** — я говорю (сейчас).", 3, "es8-indef-tilde"],
  ["Habló con Ana.", "Послушай: кто?", "él / ella", ["yo", "él / ella"], "**habló** — он / она.", 3, "es8-indef-tilde"],
  ["He comido.", "Послушай: какое время?", "Perfecto", ["Perfecto", "Indefinido", "Presente"], "**he comido** — perfecto.", 1, "es8-perfecto"],
  ["Comí.", "Послушай: какое время?", "Indefinido", ["Perfecto", "Indefinido", "Presente"], "**comí** — indefinido.", 3, "es8-indef-reg"],
  ["Fuimos a Madrid.", "Послушай: какой глагол?", "ir", ["ir", "ser", "ver"], "**fuimos a…** — ir.", 4, "es8-ser-ir"],
  ["Vimos el mar.", "Послушай: какой глагол?", "ver", ["ver", "ir", "venir"], "**vimos** — ver.", 4, "es8-dar-ver"],
  ["Hice la cena.", "Послушай: кто?", "yo", ["yo", "él / ella"], "**hice** — я; он — **hizo**.", 4, "es8-fuertes"],
  ["Llegó hace dos días.", "Послушай: когда?", "Два дня назад", ["Через два дня", "Два дня назад", "Два дня подряд"], "**hace dos días** — назад.", 5, "es8-hace"]
];
const ES8_PAR = [
  ["Ты рассказываешь, что сегодня утром был в банке.", "Esta mañana he ido al banco.", "Ayer por la mañana he ido al banco.", "Сегодня — **he ido**.", 6, "es8-perf-indef"],
  ["Ты рассказываешь, что вчера был в банке.", "Ayer fui al banco.", "Ayer he ido al banco.", "Вчера — **fui**.", 6, "es8-perf-indef"],
  ["Ты говоришь, что Пабло (он) вчера поговорил с Мартой.", "Pablo habló con Marta.", "Pablo hablo con Marta.", "Он — **habló**, со знаком.", 3, "es8-indef-tilde"],
  ["Ты говоришь, что был в Италии один раз в жизни.", "He estado en Italia una vez.", "Estuve en Italia ayer una vez.", "Опыт без даты — perfecto.", 2, "es8-alguna-vez"],
  ["Ты говоришь, что вечеринка была отличной.", "La fiesta fue genial.", "La fiesta fui genial.", "Она — **fue**.", 4, "es8-ser-ir"],
  ["Ты говоришь, что приехал два года назад.", "Llegué hace dos años.", "Llegué en dos años.", "«Назад» — **hace**.", 5, "es8-hace"]
];
const ES8_DESC = [
  ["hablar → hablado · trabajar → trabajado. А jugar?", "jugado", ["jugido", "jugato"], "**-ar → -ado**.", 1, "es8-perfecto"],
  ["comer → comido · vivir → vivido. А salir?", "salido", ["salí", "salir"], "**-er, -ir → -ido**.", 1, "es8-perfecto"],
  ["hablar → hablé · trabajar → trabajé. А cantar?", "canté", ["cantí", "canto"], "**-ar**, yo — **-é**.", 3, "es8-indef-reg"],
  ["comer → comió · vivir → vivió. А salir?", "salió", ["salé", "salo"], "**-er, -ir**, él — **-ió**.", 3, "es8-indef-reg"],
  ["llegar → llegué · jugar → jugué. А pagar?", "pagué", ["pagé", "pagó"], "**-gar → -gué**.", 3, "es8-indef-orto"],
  ["tener → tuve · estar → estuve. А poder?", "pude", ["podí", "pudí"], "Особая основа, без знака: **pude**.", 4, "es8-fuertes"]
];
const ES8_CAD = [
  ["Como en casa.", [["Теперь: сегодня (hoy), perfecto.", "Hoy he comido en casa."], ["Теперь: вчера (ayer).", "Ayer comí en casa."]], 6, "es8-perf-indef"],
  ["Hablo con Lucía.", [["Теперь: вчера (ayer), я.", "Ayer hablé con Lucía."], ["Теперь: вчера, Pablo.", "Ayer Pablo habló con Lucía."]], 3, "es8-indef-tilde"],
  ["Voy a Madrid.", [["Теперь: прошлым летом (el verano pasado).", "El verano pasado fui a Madrid."], ["Теперь: этим летом (este verano).", "Este verano he ido a Madrid."]], 6, "es8-perf-indef"],
  ["Hago la cena.", [["Теперь: сегодня (hoy).", "Hoy he hecho la cena."], ["Теперь: вчера, mi madre.", "Ayer mi madre hizo la cena."]], 4, "es8-fuertes"],
  ["Me levanto a las siete.", [["Теперь: сегодня (hoy).", "Hoy me he levantado a las siete."], ["Теперь: вчера (ayer).", "Ayer me levanté a las siete."]], 1, "es8-perf-pron"]
];
const ES8_DIAG = [
  ["Ayer he ido al cine.", "С ayer нужно indefinido", ["Неправильное причастие", "Нужно настоящее время"], "Ayer fui al cine.", 6, "es8-perf-indef"],
  ["Ana ha comida en casa.", "Причастие не меняется: comido", ["Нужно indefinido", "Нужно haber во мн. ч."], "Ana ha comido en casa.", 1, "es8-perfecto"],
  ["He hacido la cena.", "hacer → hecho", ["Нужно indefinido", "Не хватает местоимения"], "He hecho la cena.", 2, "es8-part-irr"],
  ["Ayer fuí al museo.", "fui — без знака ударения", ["Нужно perfecto", "Нужно fue"], "Ayer fui al museo.", 4, "es8-ser-ir"],
  ["Llegué a España dos años hace.", "hace стоит перед временем", ["Нужно perfecto", "Нужно en"], "Llegué a España hace dos años.", 5, "es8-hace"],
  ["He me levantado tarde.", "Местоимение — перед he", ["Нужно indefinido", "Нужно levantada"], "Me he levantado tarde.", 1, "es8-perf-pron"]
];
const ES8_DES = [
  ["Ayer fui al cine con Lucía", [["Какое слово говорит, что период закончился?", 0], ["Какое слово — глагол?", 1], ["С кем?", 5]], 6, "es8-perf-indef"],
  ["Hoy me he levantado tarde", [["Какое слово — haber?", 2], ["Где причастие?", 3], ["Когда?", 0]], 1, "es8-perf-pron"],
  ["Mi abuela nació en un pueblo pequeño", [["Какое слово — indefinido?", 2], ["Где?", 5]], 9, "es8-biografia"]
];
const ES8_VERBOS_F = ["hablar", "trabajar", "estudiar", "comprar", "viajar", "llegar", "jugar", "comer", "beber", "vivir", "salir", "escribir", "leer", "abrir", "volver", "ver", "hacer", "decir",
  "poner", "tener", "estar", "poder", "venir", "ir", "ser", "dar", "levantarse", "ducharse"];
function es8Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES8-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES8_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES8_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES8_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oi-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES8_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES8_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("de-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES8_CAD.forEach(([base, pasos, mod, regla], i) => P("cad-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES8_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES8_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  const irr = /^(hacer|decir|poner|ver|volver|escribir|abrir)$/, fuerte = /^(hacer|decir|poner|tener|estar|poder|venir|ir|ser|dar|ver)$/;
  ES8_VERBOS_F.forEach((inf, i) => {
    [0, 2, 3].map(k => (k + i) % 6).forEach(p => {
      const f = es8Perf(inf, p); if (!f) return;
      P("pff-" + inf + "-" + p, "perfecto-forma", "escribir", irr.test(inf) ? 2 : 1, irr.test(inf) ? "es8-part-irr" : "es8-perfecto", { grupo: "pff-" + inf, lex: lex(inf),
        pide: "Напиши форму в pretérito perfecto.", grande: inf + " — " + ES8_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f, explicacion: "**" + f + "**." });
    });
    [1, 2, 5].map(k => (k + i) % 6).forEach(p => {
      const f = es8Indef(inf, p); if (!f) return;
      P("inf-" + inf + "-" + p, "indefinido-forma", "escribir", fuerte.test(inf) ? 4 : 3, fuerte.test(inf) ? (/^(ser|ir)$/.test(inf) ? "es8-ser-ir" : /^(dar|ver)$/.test(inf) ? "es8-dar-ver" : "es8-fuertes") : (/^(llegar|jugar)$/.test(inf) ? "es8-indef-orto" : "es8-indef-reg"),
        { grupo: "inf-" + inf, lex: lex(inf), pide: "Напиши форму в pretérito indefinido.", grande: inf + " — " + ES8_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
          explicacion: "**" + f + "**." + (ES8_NOTA_INDEF[inf] ? " " + ES8_NOTA_INDEF[inf] : "") });
    });
  });
}
Object.assign(ES8_MEZCLA, { natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1, "perfecto-forma": 2, "indefinido-forma": 2 });
