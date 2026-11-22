const ES10_V = {"1": ["futuro", "proyecto", "objetivo", "meta", "sueño", "soñar", "planear", "organizar", "preparar", "prometer", "alquilar", "volar", "viajero", "aventura", "ruta", "fotografía", "alguno"], "2": ["conseguir", "lograr", "intentar", "mejorar", "alcanzar", "cumplir", "realizar", "continuar", "comenzar"], "3": ["posible", "imposible", "probable", "probablemente", "seguro", "quizás", "suponer", "imaginar", "aparecer", "existir", "real", "exactamente", "simplemente", "realmente", "situación", "caso", "realidad", "verdad", "verdadero", "normal", "sentido", "significar"], "4": ["desear", "recomendar", "aconsejar", "sugerir", "exigir", "permitir", "ofrecer", "aceptar", "importante", "necesario", "ideal", "especial", "propio"], "5": ["si", "decisión", "elegir", "opción", "riesgo", "oportunidad", "usar", "recibir", "guardar", "mantener", "funcionar", "servir", "valer", "tratar", "momento", "lugar", "tipo", "parte", "forma", "manera", "siguiente", "paso", "camino", "resto"], "6": ["empresa", "compañía", "jefe", "colega", "trabajador", "empleado", "puesto", "sueldo", "salario", "contrato", "entrevista", "experiencia", "reunión", "informe", "equipo", "responsabilidad", "negocio", "despacho", "empleo", "paro", "jornada", "candidato", "anuncio", "solicitud", "solicitar", "formulario", "contratar", "despedir", "dedicarse", "ganar", "cobrar", "ahorrar", "gastar", "profesional", "bombero", "electricista", "fontanero", "autónomo", "oposiciones", "jubilación", "currículum", "prácticas", "firmar"], "7": ["curso", "beca", "título", "facultad", "alumno", "educación", "formación", "ciencia", "practicar", "repasar", "traducir", "traducción", "lengua", "asignatura", "máster", "apuntes"], "8": ["satisfecho", "orgulloso", "preocupado", "inseguro", "increíble", "horrible", "mundo", "internet", "aplicación", "tecnología", "llamada", "crear", "mostrar", "presentar", "último", "único", "personal", "general", "grupo", "sistema", "servicio", "ayuda", "atención", "capaz", "fuerza", "confiar", "suerte", "falta"], "9": ["ventaja", "desventaja", "fracaso", "responder", "comprender", "considerar", "correcto", "fuerte", "sobre todo", "de hecho", "incluso", "al menos", "aún", "de nuevo", "hoy en día", "prueba", "error", "respuesta", "pregunta", "en cambio"], "a6": ["sindicato", "huelga", "gerente", "oficio", "fábrica", "taller"], "a7": ["laboratorio", "semestre", "investigación"], "a8": ["planeta", "energía", "robot"]};

/* ============================================================
   DATA-UNIDAD-ES-10.JS — Abecé · Урок 10: Планы, решения и возможности
   (El futuro, las decisiones y las posibilidades). Completa (13/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U10;
   propuesta aprobada por Manu el 13/11/2026: claude/PROPUESTA_U10_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-9.js, con la profundización desde el
   principio (tipos de Azbuka, «Más a fondo», formas generadas).
   Las formas salen de data-verbos-es.js: futuro (es10Fut), condicional
   (es10Cond) y presente (es10Pres).
   Decisiones de Manu (13/11/2026): la meta del curso es ~1.900 palabras, así
   que la U10 enseña unas 190; 10 entradas nuevas (currículum, asignatura,
   máster, apuntes, prácticas, autónomo, oposiciones, jubilación, electricista,
   fontanero); toda la ampliación; nota cultural CUE-012 «Las oposiciones»;
   **sin subjuntivo** (todo el subjuntivo va junto en la U11); desafío del
   día «Планы».
   ============================================================ */

const ES10_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES10_SE = ["me", "te", "se", "nos", "os", "se"];
function es10Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  if (!v) return null;
  if (v.base) return Object.assign({ se: true }, VERBOS_ES[v.base]);
  return v.pronominal ? Object.assign({ se: true }, v) : v;
}
function es10Tiempo(t) {
  return (inf, p) => { const v = es10Verbo(inf); if (!v || !v[t] || !v[t][p]) return ""; return (v.se ? ES10_SE[p] + " " : "") + v[t][p]; };
}
const es10Fut = es10Tiempo("fut");
const es10Cond = es10Tiempo("cond");
const es10Pres = es10Tiempo("pres");
const es10Tabla2 = (a, b, fn) => ES10_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: fn(a, i) + " · " + fn(b, i) }]);

const UNIDAD_ES_10 = {
  id: 10,
  titulo: "Планы, решения и возможности",
  tituloEs: "El futuro, las decisiones y las posibilidades",
  objetivo: "Рассказать о планах и прогнозах, вежливо попросить и дать совет, поставить условие («если…») и сравнить варианты — о работе, учёбе и своих проектах.",
  tiempo: "4 недели ежедневной практики (примерно 25–30 часов)",
  modulos: [
    {
      id: "es10m1", n: 1, tipo: "leccion",
      titulo: "Mañana trabajaré",
      resumen: "Futuro: инфинитив + -é, -ás, -á…",
      intro: "Будущее время — **futuro**: **trabajaré** — «буду работать / поработаю», **viviré** — «буду жить». Оно образуется очень просто: к **целому инфинитиву** добавляют окончания, одни и те же для **-ar, -er, -ir**.",
      tablas: [
        { titulo: "Hablar, comer, vivir", encabezados: ["Кто", "Форма"], filas: ES10_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es10Fut("hablar", i) + " · " + es10Fut("comer", i) + " · " + es10Fut("vivir", i) }]) },
        { titulo: "Cuándo", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "mañana", ru: "завтра" }, { es: "pasado mañana", ru: "послезавтра" }],
          [{ es: "el año que viene", ru: "в следующем году" }, { es: "el próximo verano", ru: "следующим летом" }],
          [{ es: "dentro de dos años", ru: "через два года" }, { es: "algún día", ru: "когда-нибудь" }],
          [{ es: "en el futuro", ru: "в будущем" }, { es: "pronto", ru: "скоро" }]] }
      ],
      secciones: [
        {
          id: "es10-futuro-reg",
          titulo: "Trabajaré, comeré, viviré",
          texto: "Берём **весь инфинитив** и добавляем: **-é, -ás, -á, -emos, -éis, -án**:\n**trabajar → trabajaré, trabajarás, trabajará, trabajaremos, trabajaréis, trabajarán**.\nТак же **comeré**, **viviré**. Знак ударения — везде, кроме **nosotros**: **trabajaremos**.\nГлаголы с **se**: **me levantaré**, **te quedarás**.",
          comparacion: "В русском «буду делать» и «сделаю» — разный вид. В испанском одна форма для обоих: **trabajaré** = «буду работать» и «поработаю».",
          ejemplos: [
            { es: "El año que viene trabajaré en una empresa grande.", ru: "В следующем году я буду работать в большой компании." },
            { es: "¿Dónde vivirás dentro de diez años?", ru: "Где ты будешь жить через десять лет?" },
            { es: "Mañana nos levantaremos temprano.", ru: "Завтра мы встанем рано." }
          ],
          errores: [
            { mal: "Mañana trabajare.", bien: "Mañana trabajaré.", por: "В **yo** — знак ударения: **-é**." },
            { mal: "Mañana trabajo-é.", bien: "Mañana trabajaré.", por: "Окончание добавляют к целому инфинитиву: **trabajar + é**." }
          ],
          chequeo: [
            { pide: "El año que viene ___ en Barcelona. (yo, vivir)", opciones: ["viviré", "vivire", "vivo ré"], ok: "viviré", por: "**vivir** + **-é** = **viviré**, со знаком." }
          ]
        },
        {
          id: "es10-cuando",
          titulo: "El año que viene, dentro de…",
          texto: "О будущем: **mañana**, **pasado mañana**, **el año que viene**, **la semana que viene**, **el próximo verano**.\n**dentro de** + время — «через»: **dentro de dos años** — через два года (не «en dos años» в смысле «через»).\n**algún día** — когда-нибудь; **en el futuro** — в будущем.",
          ejemplos: [
            { es: "Dentro de dos años terminaré el máster.", ru: "Через два года я закончу магистратуру." },
            { es: "Algún día viajaré por todo el mundo.", ru: "Когда-нибудь я объеду весь мир." }
          ],
          chequeo: [
            { pide: "Terminaré el curso ___ dos meses. (через)", opciones: ["dentro de", "hace", "desde"], ok: "dentro de", por: "«Через» — **dentro de**; **hace** — «назад»." }
          ]
        }
      ],
      vocab: ES10_V["1"]
    },
    {
      id: "es10m2", n: 2, tipo: "leccion",
      titulo: "Tendré, haré, podré",
      resumen: "Неправильные формы будущего.",
      intro: "У нескольких частых глаголов в futuro меняется основа, а **окончания — те же**: **tener → tendré**, **hacer → haré**, **poder → podré**.",
      tablas: [
        { titulo: "-dr-: tener, poner, salir, venir", encabezados: ["Кто", "tener · salir"], filas: es10Tabla2("tener", "salir", es10Fut) },
        { titulo: "Haré, diré, podré, sabré, querré", encabezados: ["Инфинитив", "Yo"], filas: ["hacer", "decir", "poder", "saber", "querer", "poner", "venir"].map(v => [{ es: v }, { es: es10Fut(v, 0) }]) }
      ],
      secciones: [
        {
          id: "es10-futuro-irr",
          titulo: "Una base nueva, las mismas terminaciones",
          texto: "Три группы:\n1) **-dr-**: **tener → tendré**, **poner → pondré**, **salir → saldré**, **venir → vendré**;\n2) выпадает гласная: **poder → podré**, **saber → sabré**, **querer → querré**, **haber → habrá** (будет, будут);\n3) особые: **hacer → haré**, **decir → diré**.\nОкончания — как у правильных: **tendré, tendrás, tendrá…**",
          ejemplos: [
            { es: "Mañana tendré una entrevista de trabajo.", ru: "Завтра у меня будет собеседование." },
            { es: "Te diré la verdad.", ru: "Я скажу тебе правду." },
            { es: "Mañana habrá una reunión importante.", ru: "Завтра будет важное совещание." }
          ],
          errores: [
            { mal: "Mañana teneré tiempo.", bien: "Mañana tendré tiempo.", por: "**tener → tendré**." },
            { mal: "Haceré la cena.", bien: "Haré la cena.", por: "**hacer → haré**." }
          ],
          chequeo: [
            { pide: "Mañana ___ temprano. (yo, salir)", opciones: ["saldré", "saliré", "salgré"], ok: "saldré", por: "**salir → saldré**." }
          ]
        },
        {
          id: "es10-conseguir",
          titulo: "Conseguir, lograr, intentar",
          texto: "Глаголы целей:\n**intentar** + инфинитив — пытаться: **Intentaré aprobar**.\n**conseguir** — добиться, получить: **Conseguiré el trabajo**; **conseguir** + инфинитив — суметь: **Conseguí aprobar**.\n**lograr** — то же, чуть книжнее.\n**mejorar** — улучшить(ся); **cumplir** — выполнить (обещание, мечту); **alcanzar** — достичь.",
          ejemplos: [
            { es: "Intentaré mejorar mi español.", ru: "Я постараюсь улучшить свой испанский." },
            { es: "Algún día cumpliré mi sueño.", ru: "Когда-нибудь я исполню свою мечту." }
          ]
        }
      ],
      vocab: ES10_V["2"]
    },
    {
      id: "es10m3", n: 3, tipo: "leccion",
      titulo: "¿Dónde estará?",
      resumen: "Будущее предположения; ir a или futuro.",
      intro: "У futuro есть второй смысл — **догадка о настоящем**: **¿Dónde está Pablo? — No sé, estará en casa.** — «наверное, он дома». И важный вопрос: когда **voy a trabajar**, а когда **trabajaré**?",
      secciones: [
        {
          id: "es10-probabilidad",
          titulo: "Estará en casa",
          texto: "Когда не знаешь точно и предполагаешь — о **настоящем** — испанцы часто говорят в futuro:\n**¿Qué hora es? — Serán las ocho.** — Наверное, восемь.\n**Pablo no contesta. Estará en el trabajo.** — Он, наверное, на работе.\nТак же можно сказать **seguro que…**, **probablemente…**, **quizás…**: **Probablemente está en casa.**",
          ejemplos: [
            { es: "¿Dónde está Ana? — Estará en clase.", ru: "Где Аня? — Наверное, на занятии." },
            { es: "Lucía no viene. Tendrá mucho trabajo.", ru: "Лусия не идёт. Наверное, у неё много работы." }
          ],
          chequeo: [
            { pide: "—¿Qué hora es? —No sé, ___ las diez. (наверное)", opciones: ["serán", "son seguro", "fueron"], ok: "serán", por: "Догадка о настоящем — futuro: **serán las diez**." }
          ]
        },
        {
          id: "es10-ir-a-futuro",
          titulo: "Voy a trabajar или trabajaré?",
          texto: "**ir a** + инфинитив — **план**, уже решено, скоро: **Esta tarde voy a estudiar.**\n**futuro** — **прогноз**, обещание, далёкое будущее, «посмотрим»: **Mañana lloverá**, **Te llamaré**, **Algún día viviré en España**.\nЧасто подходят оба, и ошибки не будет. В разговоре **ir a** звучит чаще.",
          ejemplos: [
            { es: "Este verano voy a hacer prácticas.", ru: "Этим летом я буду проходить стажировку (уже решено)." },
            { es: "Te prometo que te llamaré.", ru: "Обещаю, что позвоню тебе." }
          ],
          chequeo: [
            { pide: "—¿Me ayudas? —Sí, te ___ mañana. (обещание)", opciones: ["ayudaré", "ayudo ayer", "ayudé"], ok: "ayudaré", por: "Обещание — **futuro**." }
          ]
        },
        {
          id: "es10-posible",
          titulo: "Posible, seguro, probablemente",
          texto: "**es posible / imposible** — возможно / невозможно; **es probable** — вероятно; **seguro que…** — наверняка; **probablemente**, **quizás**, **a lo mejor** — может быть.\nПосле **seguro que**, **probablemente**, **a lo mejor** — обычное время: **Seguro que aprobarás.**\n**en realidad** — на самом деле; **la verdad** — честно говоря.",
          ejemplos: [
            { es: "Seguro que conseguirás el puesto.", ru: "Ты наверняка получишь эту должность." },
            { es: "En realidad, no es imposible.", ru: "На самом деле это не невозможно." }
          ]
        }
      ],
      frases: ["en realidad"],
      vocab: ES10_V["3"]
    },
    {
      id: "es10m4", n: 4, tipo: "leccion",
      titulo: "Me gustaría…",
      resumen: "Condicional: вежливость, желание, совет.",
      intro: "**Condicional** — «бы»: **me gustaría** — я бы хотел, **podrías** — ты не мог бы, **deberías** — тебе стоило бы. Образуется как futuro: целый инфинитив + **-ía, -ías, -ía, -íamos, -íais, -ían**; неправильные — с той же основой: **tendría**, **haría**, **podría**.",
      tablas: [
        { titulo: "Hablar, poder", encabezados: ["Кто", "hablar · poder"], filas: es10Tabla2("hablar", "poder", es10Cond) }
      ],
      secciones: [
        {
          id: "es10-condicional",
          titulo: "Hablaría, tendría, haría",
          texto: "Инфинитив + **-ía, -ías, -ía, -íamos, -íais, -ían**: **hablaría**, **comería**, **viviría**.\nНеправильные — **с основой futuro**: **tendr-ía**, **pondr-ía**, **saldr-ía**, **vendr-ía**, **podr-ía**, **sabr-ía**, **querr-ía**, **har-ía**, **dir-ía**.\nФормы **yo** и **él** совпадают: **yo podría**, **él podría**.",
          ejemplos: [
            { es: "Me gustaría trabajar en el extranjero.", ru: "Я бы хотел работать за границей." },
            { es: "Con más dinero, viajaría más.", ru: "Будь у меня больше денег, я бы больше путешествовал." }
          ],
          errores: [
            { mal: "Teneria más tiempo.", bien: "Tendría más tiempo.", por: "Основа как в futuro: **tendr-** + **-ía**." }
          ],
          chequeo: [
            { pide: "Me ___ vivir cerca del mar. (gustar)", opciones: ["gustaría", "gustará", "gusta ría"], ok: "gustaría", por: "Желание — **me gustaría**." }
          ]
        },
        {
          id: "es10-cortesia",
          titulo: "¿Podrías…? Querría…",
          texto: "Condicional делает просьбу мягче:\n**¿Puedes ayudarme?** → **¿Podrías ayudarme?** — ты не мог бы мне помочь?\n**Quiero un café** → **Querría un café** (или **Quería…**, как в пятом уроке).\nС **usted**: **¿Podría repetir, por favor?**",
          ejemplos: [
            { es: "¿Podrías mandarme el informe?", ru: "Не мог бы ты прислать мне отчёт?" },
            { es: "¿Podría hablar con el jefe, por favor?", ru: "Могу я поговорить с начальником, пожалуйста?" }
          ]
        },
        {
          id: "es10-consejo",
          titulo: "Deberías… Yo que tú…",
          texto: "Совет:\n**deberías** + инфинитив — тебе стоило бы: **Deberías descansar.**\n**Yo que tú…** / **Yo en tu lugar…** + condicional — я бы на твоём месте: **Yo que tú, aceptaría el trabajo.**\n**te recomiendo / te aconsejo** + инфинитив: **Te recomiendo practicar cada día.**",
          ejemplos: [
            { es: "Deberías mandar el currículum hoy.", ru: "Тебе стоило бы отправить резюме сегодня." },
            { es: "Yo que tú, haría un máster.", ru: "Я бы на твоём месте пошёл в магистратуру." }
          ],
          chequeo: [
            { pide: "Yo que tú, ___ el puesto. (aceptar)", opciones: ["aceptaría", "acepto", "aceptaré mañana"], ok: "aceptaría", por: "После **yo que tú** — condicional." }
          ]
        }
      ],
      frases: ["FRE-143", "FRE-144", "FRE-146"],
      dialogos: ["DLE-048"],
      vocab: ES10_V["4"]
    },
    {
      id: "es10m5", n: 5, tipo: "leccion",
      titulo: "Si tengo tiempo…",
      resumen: "Si + настоящее → настоящее, futuro, imperativo.",
      intro: "Реальное условие: **Si tengo tiempo, iré al cine.** — Если будет время, пойду в кино. Главное правило: **после si — настоящее время**, даже если речь о будущем.",
      tablas: [
        { titulo: "Si + presente", encabezados: ["Si…", "…"], filas: [
          [{ es: "Si llueve,", ru: "если пойдёт дождь," }, { es: "me quedo en casa.", ru: "останусь дома (обычно)." }],
          [{ es: "Si tengo dinero,", ru: "если будут деньги," }, { es: "viajaré a Italia.", ru: "поеду в Италию." }],
          [{ es: "Si estás cansado,", ru: "если ты устал," }, { es: "descansa.", ru: "отдохни." }]] }
      ],
      secciones: [
        {
          id: "es10-si",
          titulo: "Si + presente",
          texto: "После **si** — **presente**: **si tengo**, **si llueve**, **si puedes**. Во второй части:\n· **presente** — так бывает всегда: **Si llueve, me quedo en casa**;\n· **futuro** — что будет: **Si consigo la beca, haré el máster**;\n· **imperativo** — совет, просьба: **Si tienes tiempo, llámame**.\nЧасти можно поменять местами: **Haré el máster si consigo la beca** (тогда без запятой).",
          comparacion: "По-русски «если **будет** время» — с будущим. По-испански после **si** будущее нельзя: **si tengo tiempo**.",
          ejemplos: [
            { es: "Si apruebo el examen, haré una fiesta.", ru: "Если сдам экзамен, устрою праздник." },
            { es: "Si no te gusta el trabajo, busca otro.", ru: "Если тебе не нравится работа, ищи другую." }
          ],
          errores: [
            { mal: "Si tendré tiempo, iré.", bien: "Si tengo tiempo, iré.", por: "После **si** — настоящее время." }
          ],
          chequeo: [
            { pide: "Si ___ la beca, estudiaré en Madrid. (yo, conseguir)", opciones: ["consigo", "conseguiré", "conseguiría"], ok: "consigo", por: "После **si** — presente: **consigo**." }
          ]
        },
        {
          id: "es10-decidir",
          titulo: "Decidir y elegir",
          texto: "Слова для решений: **la decisión** — решение (**tomar una decisión**), **elegir** — выбирать (**elijo**, e → i), **la opción** — вариант, **la oportunidad** — возможность, шанс, **el riesgo** — риск.\n**el momento**, **el lugar**, **el tipo**, **la forma / la manera** (способ), **el paso** (шаг), **el camino** (путь).",
          ejemplos: [
            { es: "Tengo que tomar una decisión.", ru: "Мне нужно принять решение." },
            { es: "Es una buena oportunidad.", ru: "Это хорошая возможность." }
          ]
        }
      ],
      frases: ["FRE-145"],
      dialogos: ["DLE-047"],
      vocab: ES10_V["5"]
    },
    {
      id: "es10m6", n: 6, tipo: "leccion",
      titulo: "El trabajo de mis sueños",
      resumen: "Работа: компания, должность, собеседование.",
      intro: "Как говорить о работе по-испански: где ты работаешь, кем, что делаешь и как ищешь работу.",
      tablas: [
        { titulo: "En la empresa", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la empresa", ru: "компания" }, { es: "el jefe / la jefa", ru: "начальник" }],
          [{ es: "el / la colega", ru: "коллега" }, { es: "el puesto", ru: "должность" }],
          [{ es: "el sueldo", ru: "зарплата" }, { es: "el contrato", ru: "контракт" }],
          [{ es: "la reunión", ru: "совещание" }, { es: "el informe", ru: "отчёт" }],
          [{ es: "el equipo", ru: "команда" }, { es: "la jornada", ru: "рабочий день" }]] },
        { titulo: "Buscar trabajo", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el anuncio", ru: "объявление" }, { es: "el currículum", ru: "резюме" }],
          [{ es: "la entrevista", ru: "собеседование" }, { es: "la experiencia", ru: "опыт" }],
          [{ es: "las prácticas", ru: "стажировка" }, { es: "el candidato", ru: "кандидат" }],
          [{ es: "contratar", ru: "нанимать" }, { es: "despedir", ru: "увольнять" }],
          [{ es: "el paro", ru: "безработица" }, { es: "la jubilación", ru: "выход на пенсию" }]] }
      ],
      secciones: [
        {
          id: "es10-trabajo",
          titulo: "¿A qué te dedicas?",
          texto: "Вопрос о профессии: **¿A qué te dedicas?** — чем ты занимаешься? Ответ: **Soy electricista**, **Trabajo en una empresa**, **Trabajo como autónomo** (на себя), **Estoy en paro** (безработный), **Estoy jubilado**.\n**ganar** — зарабатывать: **Gano poco**; **cobrar** — получать деньги: **Cobro a final de mes**; **ahorrar** — копить; **gastar** — тратить.\nВ Испании многие готовятся к **oposiciones**, чтобы стать **funcionario** (см. «Культура»).",
          ejemplos: [
            { es: "¿A qué te dedicas? — Soy fontanero.", ru: "Чем ты занимаешься? — Я сантехник." },
            { es: "Trabajo como autónoma desde hace dos años.", ru: "Я работаю на себя уже два года." }
          ],
          errores: [
            { mal: "Soy un electricista.", bien: "Soy electricista.", por: "Профессия — без артикля." }
          ],
          chequeo: [
            { pide: "¿A qué te ___? (заниматься)", opciones: ["dedicas", "dedicas a", "dedica tú"], ok: "dedicas", por: "**¿A qué te dedicas?**" }
          ]
        },
        {
          id: "es10-buscar-trabajo",
          titulo: "Buscar trabajo",
          texto: "Путь к работе: **ver un anuncio** → **mandar el currículum** → **tener una entrevista** → **firmar un contrato**.\n**solicitar un puesto** — подать заявку на должность (**la solicitud** — заявление; **el formulario** — анкета).\n**hacer prácticas** — проходить стажировку; **la experiencia** — опыт.",
          ejemplos: [
            { es: "He mandado el currículum a tres empresas.", ru: "Я отправил резюме в три компании." },
            { es: "El viernes tengo una entrevista.", ru: "В пятницу у меня собеседование." }
          ]
        }
      ],
      dialogos: ["DLE-046"],
      vocab: ES10_V["6"],
      ampliacion: {
        titulo: "Ещё о работе",
        intro: "Эти слова не входят в проверку урока. **la fábrica** — завод; **el taller** — мастерская; **el gerente** — управляющий; **el oficio** — ремесло; **el sindicato** — профсоюз; **la huelga** — забастовка: **Mañana hay huelga de metro.**",
        vocab: ES10_V["a6"]
      }
    },
    {
      id: "es10m7", n: 7, tipo: "leccion",
      titulo: "Estudiar y formarse",
      resumen: "Учёба: курс, стипендия, диплом.",
      intro: "Учёба после школы: **la carrera** (вуз), **el máster**, **el curso**, **la beca**. И как говорить о своих планах учиться.",
      tablas: [
        { titulo: "Los estudios", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el curso", ru: "курс; учебный год" }, { es: "la asignatura", ru: "предмет" }],
          [{ es: "la facultad", ru: "факультет" }, { es: "el máster", ru: "магистратура" }],
          [{ es: "la beca", ru: "стипендия" }, { es: "el título", ru: "диплом" }],
          [{ es: "los apuntes", ru: "конспект" }, { es: "el alumno", ru: "ученик" }],
          [{ es: "repasar", ru: "повторять" }, { es: "practicar", ru: "практиковать" }]] }
      ],
      secciones: [
        {
          id: "es10-estudios",
          titulo: "Hacer la carrera, un máster…",
          texto: "**hacer / estudiar la carrera** — учиться в вузе; **hacer un máster**; **sacar el título** — получить диплом; **pedir una beca** — подать на стипендию.\n**tomar apuntes** — конспектировать; **repasar** — повторять; **practicar** — практиковаться.\n**la lengua** — язык (предмет, речь): **la lengua española**; **traducir** — переводить (**traduzco**).",
          ejemplos: [
            { es: "El año que viene haré un máster de traducción.", ru: "В следующем году я пойду в магистратуру по переводу." },
            { es: "Repaso los apuntes antes del examen.", ru: "Я повторяю конспект перед экзаменом." }
          ],
          chequeo: [
            { pide: "En clase tomo ___. (конспект)", opciones: ["apuntes", "notas de", "una nota de"], ok: "apuntes", por: "**tomar apuntes** — только мн. ч." }
          ]
        }
      ],
      frases: ["FRE-145"],
      dialogos: ["DLE-045"],
      vocab: ES10_V["7"],
      ampliacion: {
        titulo: "Наука",
        intro: "Эти слова не входят в проверку урока. **el laboratorio** — лаборатория; **el semestre** — семестр; **la investigación** — исследование.",
        vocab: ES10_V["a7"]
      }
    },
    {
      id: "es10m8", n: 8, tipo: "leccion",
      titulo: "Me gustaría vivir en…",
      resumen: "Мечты и проекты: me gustaría, sería, tendría.",
      intro: "Мечтать по-испански — в condicional: **Me gustaría vivir en el campo. Tendría un jardín y sería feliz.** И слова о том, что ты чувствуешь, когда думаешь о будущем.",
      secciones: [
        {
          id: "es10-deseos",
          titulo: "Me gustaría + infinitivo",
          texto: "**Me gustaría** + инфинитив — мне хотелось бы: **Me gustaría aprender a cocinar.** Как **gustar**: **¿Te gustaría…?**, **A Ana le gustaría…**\n**Me encantaría** — я бы с удовольствием; **preferiría** — я бы предпочёл.\nДальше рассказ продолжается в condicional: **Viviría cerca del mar, tendría un perro…**",
          ejemplos: [
            { es: "¿Te gustaría trabajar en el extranjero?", ru: "Тебе хотелось бы работать за границей?" },
            { es: "Me encantaría tener mi propio negocio.", ru: "Я бы очень хотел иметь своё дело." }
          ],
          errores: [
            { mal: "Me gustaría que vivo en el campo.", bien: "Me gustaría vivir en el campo.", por: "О себе — **me gustaría** + инфинитив." }
          ],
          chequeo: [
            { pide: "A Pablo le ___ vivir en Madrid.", opciones: ["gustaría", "gustarías", "gusta ría"], ok: "gustaría", por: "Как **gustar**: **le gustaría**." }
          ]
        },
        {
          id: "es10-sentir-futuro",
          titulo: "Satisfecho, orgulloso, preocupado",
          texto: "Чувства о будущем: **estar satisfecho** — быть довольным; **estar orgulloso de** — гордиться; **estar preocupado** — беспокоиться; **sentirse inseguro** — чувствовать неуверенность.\nОценки: **increíble**, **horrible**; **último** (последний), **único** (единственный), **propio** (собственный), **personal**.\n**tener suerte** — везти: **¡Suerte!**",
          ejemplos: [
            { es: "Estoy muy orgulloso de mi hermana.", ru: "Я очень горжусь своей сестрой." },
            { es: "Es la única oportunidad.", ru: "Это единственная возможность." }
          ]
        }
      ],
      frases: ["FRE-142", "FRE-146"],
      vocab: ES10_V["8"],
      ampliacion: {
        titulo: "Будущее планеты",
        intro: "Эти слова не входят в проверку урока. **el planeta** — планета; **la energía** — энергия; **el robot** — робот: **En el futuro, los robots harán muchos trabajos.**",
        vocab: ES10_V["a8"]
      }
    },
    {
      id: "es10m9", n: 9, tipo: "leccion",
      titulo: "Ventajas y desventajas",
      resumen: "Сравнить варианты и решить.",
      intro: "Два предложения работы, два города, две программы — как сравнить и выбрать: **ventajas** (плюсы) и **desventajas** (минусы).",
      secciones: [
        {
          id: "es10-ventajas",
          titulo: "Tiene ventajas y desventajas",
          texto: "**la ventaja / la desventaja** — плюс / минус: **La ventaja es que el sueldo es mejor.**\nСвязки: **sobre todo** — прежде всего; **de hecho** — на самом деле, кстати; **incluso** — даже; **al menos** — по крайней мере; **en cambio** — зато, а вот; **poco a poco** — постепенно.\nИ condicional для вариантов: **Ganaría más, pero tendría menos tiempo.**",
          ejemplos: [
            { es: "La empresa es grande; en cambio, el sueldo es bajo.", ru: "Компания большая, зато зарплата низкая." },
            { es: "Ganaría menos, pero al menos estaría cerca de casa.", ru: "Я бы зарабатывал меньше, но хотя бы был бы рядом с домом." }
          ],
          chequeo: [
            { pide: "Es caro; ___, es muy bueno. (зато)", opciones: ["en cambio", "sobre todo", "poco a poco"], ok: "en cambio", por: "Противопоставление — **en cambio**." }
          ]
        },
        {
          id: "es10-decidir-final",
          titulo: "¿Qué harías tú?",
          texto: "Спросить совета: **¿Qué harías tú?** — а ты бы что сделал? Ответ: **Yo elegiría…**, **Yo que tú…**\nКогда решил: **He decidido…**, **Elegiré…**, **Creo que es la opción correcta.**\nЕсли ошибся: **Fue un error**; **un fracaso** — неудача.",
          ejemplos: [
            { es: "—¿Qué harías tú? —Yo elegiría el trabajo en Madrid.", ru: "— А ты бы что сделал? — Я бы выбрал работу в Мадриде." }
          ]
        }
      ],
      frases: ["FRE-143", "FRE-144", "cada vez", "poco a poco"],
      dialogos: ["DLE-049"],
      vocab: ES10_V["9"]
    },
    {
      id: "es10m10", n: 10, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Планы Ани после курса, собеседование Марты, выходные «если будет хорошая погода», резюме с помощью Хавьера и два предложения работы. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-045", "DLE-046", "DLE-047", "DLE-048", "DLE-049"]
    },
    {
      id: "es10m11", n: 11, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Твой план на ближайшие годы.",
      intro: "Две части. **Разговор по ролям:** Хавьер спрашивает о твоих планах, Марта проводит собеседование, Лусия просит совета; ты отвечаешь своими словами. **Потом напиши** по-испански (12–16 фраз) свой план на ближайшие годы: работа или учёба, где будешь жить, что сделаешь, если…, что тебе хотелось бы, плюсы и минусы. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Futuro (trabajaré, viviré, tendré…)", rx: "\\b([a-záéíóúñ]+(aré|erá|irá|arás|erás|irás|ará|aremos|eremos|iremos|arán|erán|irán|eré|iré)|tendré|tendrá|haré|hará|podré|podrá|saldré|vendré|diré|sabré|querré|pondré|habrá)(?![a-záéíóúñ])" },
        { txt: "Condicional (me gustaría, podría…)", rx: "\\b[a-záéíóúñ]+(ría|rías|ríamos|rían)(?![a-záéíóúñ])" },
        { txt: "Si + presente", rx: "\\bsi [a-záéíóúñ ]{0,15}\\b[a-záéíóúñ]+(o|as|a|es|e|amos|emos|imos|an|en)(?![a-záéíóúñ])" },
        { txt: "Cuándo (el año que viene, dentro de…)", rx: "\\b(el año que viene|la semana que viene|dentro de|algún día|el próximo|en el futuro|pronto|mañana)(?![a-záéíóúñ])" },
        { txt: "Trabajo o estudios", rx: "\\b(trabajo|empresa|puesto|sueldo|máster|carrera|curso|beca|prácticas|estudiar|trabajar|autónom[oa])(?![a-záéíóúñ])" },
        { txt: "Ventajas / desventajas o una comparación", rx: "\\b(ventaja|desventaja|en cambio|sobre todo|al menos|pero|mejor|peor)(?![a-záéíóúñ])" },
        { txt: "Un deseo (me gustaría, me encantaría)", rx: "\\bme (gustaría|encantaría)(?![a-záéíóúñ])" },
        { txt: "Не меньше 12 фраз", fn: t => azFrases(t).length >= 12 }
      ],
      consejos: [
        { rx: "\\bsi (tendré|tendrás|podré|podrás|habrá|[a-záéíóúñ]+(aré|eré|iré|ará|erá|irá))(?![a-záéíóúñ])", msg: "После **si** — настоящее время: **si tengo**, **si puedo**." },
        { rx: "\\b(trabajare|vivire|estudiare|ire|sere|tendre|hare|podre)(?![a-záéíóúñ])", msg: "В futuro у **yo** — знак ударения: **trabajaré**, **tendré**." },
        { rx: "\\b(teneré|teneremos|poneré|saliré|veniré|haceré|deciré|poderé|saberé|quereré)(?![a-záéíóúñ])", msg: "Неправильные основы: **tendré, pondré, saldré, vendré, haré, diré, podré, sabré, querré**." },
        { rx: "\\b(tenería|hacería|podería|salería|decería)(?![a-záéíóúñ])", msg: "Condicional строится на основе futuro: **tendría, haría, podría, saldría, diría**." },
        { rx: "\\bme gustaría que (yo |)[a-záéíóúñ]+\\b", msg: "О себе — **me gustaría** + инфинитив: **me gustaría vivir…**" },
        { rx: "\\b(en|después de) (dos|tres|cuatro|cinco|diez) años\\b", msg: "«Через два года» — **dentro de dos años**." },
        { rx: "\\bsoy (un|una) (electricista|fontanero|fontanera|médico|médica|profesor|profesora|abogado|abogada|ingeniero|ingeniera)(?![a-záéíóúñ])", msg: "Профессия — без артикля: **soy electricista**." },
        { rx: "\\b(más mejor|más peor)(?![a-záéíóúñ])", msg: "**mejor**, **peor** — без **más**." },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es10m12", n: 12, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Futuro, condicional, si, работа и учёба.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Futuro", tipos: ["futuro", "futuro-forma", "probabilidad", "ir-a-futuro"], n: 4 },
        { nombre: "Condicional", tipos: ["condicional", "condicional-forma", "cortesia", "consejo"], n: 4 },
        { nombre: "Si + presente", tipos: ["si-escribir", "si-elegir", "error"], n: 4 },
        { nombre: "Работа и учёба", tipos: ["trabajo", "estudios", "ventajas"], n: 4 },
        { nombre: "Общение", tipos: ["pregunta", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs10Modulo(id) { return UNIDAD_ES_10.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_10 = UNIDAD_ES_10;
window.unidadEs10Modulo = unidadEs10Modulo;

/* ── Vocabulario: palabras → IDs ── */
const ES10_ID_FIJO = {};
function es10Id(w) {
  if (ES10_ID_FIJO[w]) return ES10_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es10Vocab(m) { return (m.vocab || []).map(es10Id).filter(Boolean); }
function es10Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es10Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U10 (sin las que ya enseñaron la U1 a la U9, ni la ampliación) */
function es10Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_10.modulos.forEach(m => es10Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs10() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es10Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  const llenar = (frase, ok) => mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES10-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES10-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  const escribirVerbo = (pref, tipo, lista, fn, pide) => lista.forEach(([frase, inf, p, mod, regla], i) => {
    const f = fn(inf, p); if (!f) return;
    const audio = llenar(frase, f);
    out.push({ id: "ES10-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: lex(inf),
      pide: pide(inf), grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES10_PERS[p][0].split(" / ")[0] + "** → **" + f + "**." });
  });

  /* 1. Futuro */
  escribirVerbo("fu", "futuro", ES10_FUT, es10Fut, inf => "Впиши «" + inf + "» в futuro.");
  escribirFalta("pb", "probabilidad", ES10_PROB, "Предположи: впиши глагол в futuro.");
  elegir("ia", "ir-a-futuro", ES10_IRA, 3, "es10-ir-a-futuro", "Что подходит лучше?", 2, 11);
  /* 2. Condicional */
  escribirVerbo("co", "condicional", ES10_COND, es10Cond, inf => "Впиши «" + inf + "» в condicional.");
  elegir("ct", "cortesia", ES10_CORTESIA, 4, "es10-cortesia", "Как сказать вежливее?", 2, 21);
  elegir("cs", "consejo", ES10_CONSEJO, 4, "es10-consejo", "Что подходит?", 2, 31);
  /* 3. Si + presente */
  escribirVerbo("sw", "si-escribir", ES10_SI_ESC, es10Pres, inf => "Впиши «" + inf + "» — после si.");
  elegir("se", "si-elegir", ES10_SI, 5, "es10-si", "Что подходит?", 2, 41);
  /* 4. Trabajo, estudios, ventajas */
  elegir("tr", "trabajo", ES10_TRABAJO, 6, "es10-trabajo", "Какое слово подходит?", 2, 51);
  elegir("es", "estudios", ES10_ESTUDIOS, 7, "es10-estudios", "Какое слово подходит?", 2, 61);
  elegir("ve", "ventajas", ES10_VENTAJAS, 9, "es10-ventajas", "Что подходит?", 2, 71);
  escribirFalta("dw", "deseo", ES10_DESEO, "Впиши слово, которого не хватает.");
  /* 5. Preguntas */
  ES10_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES10-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 81), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 6. Errores típicos */
  ES10_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES10-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 7. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es10Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES10-dic-" + id)) return;
    const x = { id: "ES10-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_10.modulos.forEach(m => {
    es10Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es10Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 8. Situaciones y respuestas; dictado y orden de las frases de la U10 */
  ES10_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES10-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES10_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES10-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 10) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_10.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 9; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES10-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES10-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 9. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES10_TURNOS.forEach((T, i) => {
    out.push({ id: "ES10-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 11, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });
  /* 10. Profundización y formas */
  es10Prof(out, baraja, lex);
  if (typeof es10Basicas === "function") es10Basicas(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* Futuro: [frase, infinitivo, persona 0–5, módulo, regla] */
const ES10_FUT = [
  ["El año que viene ___ en una empresa grande. (yo)", "trabajar", 0, 1, "es10-futuro-reg"],
  ["¿Dónde ___ dentro de diez años? (tú)", "vivir", 1, 1, "es10-futuro-reg"],
  ["Mañana Ana ___ el informe.", "terminar", 2, 1, "es10-futuro-reg"],
  ["El próximo verano ___ por Italia. (nosotros)", "viajar", 3, 1, "es10-futuro-reg"],
  ["¿___ a la reunión? (vosotros, ir)", "ir", 4, 1, "es10-futuro-reg"],
  ["Mis padres ___ en junio.", "volver", 5, 1, "es10-futuro-reg"],
  ["Mañana ___ temprano. (yo)", "levantarse", 0, 1, "es10-futuro-reg"],
  ["Mañana ___ una entrevista. (yo, tener)", "tener", 0, 2, "es10-futuro-irr"],
  ["¿Qué ___ el fin de semana? (tú, hacer)", "hacer", 1, 2, "es10-futuro-irr"],
  ["Pablo ___ a las ocho. (salir)", "salir", 2, 2, "es10-futuro-irr"],
  ["No ___ venir mañana. (nosotros, poder)", "poder", 3, 2, "es10-futuro-irr"],
  ["¿Me ___ la verdad? (vosotros, decir)", "decir", 4, 2, "es10-futuro-irr"],
  ["Mis amigos ___ a la fiesta. (venir)", "venir", 5, 2, "es10-futuro-irr"],
  ["Mañana ___ la nota del examen. (yo, saber)", "saber", 0, 2, "es10-futuro-irr"],
  ["¿Dónde ___ el ordenador? (tú, poner)", "poner", 1, 2, "es10-futuro-irr"]
];
const ES10_PROB = [
  ["—¿Dónde está Pablo? —No sé, ___ en casa. (estar)", "estará", "Догадка о настоящем — **estará**.", 3, "es10-probabilidad", "estar"],
  ["—¿Qué hora es? —___ las nueve. (ser)", "Serán", "Догадка — **serán las nueve**.", 3, "es10-probabilidad", "ser"],
  ["Lucía no contesta. ___ mucho trabajo. (tener)", "Tendrá", "Наверное, у неё много работы — **tendrá**.", 3, "es10-probabilidad", "tener"],
  ["—¿Cuántos años tiene Javier? —___ cuarenta. (tener)", "Tendrá", "**Tendrá cuarenta** — ему, наверное, сорок.", 3, "es10-probabilidad", "tener"],
  ["Ana no viene a clase. ___ enferma. (estar)", "Estará", "**Estará enferma** — наверное, болеет.", 3, "es10-probabilidad", "estar"],
  ["El jefe no está. ___ en una reunión. (estar)", "Estará", "**Estará en una reunión**.", 3, "es10-probabilidad", "estar"]
];
const ES10_IRA = [
  ["Esta tarde ___ los apuntes. (план, уже решено)", "voy a repasar", ["voy a repasar", "repasaré algún día", "repasé"], "План на сегодня — **ir a** + инфинитив."],
  ["Te prometo que te ___. (обещание)", "llamaré", ["llamaré", "llamé", "llamo ayer"], "Обещание — **futuro**."],
  ["Mañana ___ , dice la tele. (прогноз)", "lloverá", ["lloverá", "llovió", "llueve ayer"], "Прогноз — **futuro**."],
  ["Algún día ___ en el extranjero. (мечта)", "viviré", ["viviré", "viví", "vivo ayer"], "Далёкое будущее — **futuro**."],
  ["Ya he comprado el billete: el sábado ___ a Madrid.", "voy a ir", ["voy a ir", "iría", "fui"], "Уже решено — **ir a**."],
  ["—¿Me ayudas? —Sí, ahora te ___.", "ayudo", ["ayudo", "ayudé", "ayudaría ayer"], "Прямо сейчас — настоящее время."]
];
/* Condicional: [frase, infinitivo, persona, módulo, regla] */
const ES10_COND = [
  ["Me ___ vivir en el campo.", "gustar", 2, 4, "es10-condicional"],
  ["Con más tiempo, ___ más. (yo, leer)", "leer", 0, 4, "es10-condicional"],
  ["¿___ ayudarme? (tú, poder)", "poder", 1, 4, "es10-cortesia"],
  ["___ descansar más. (tú, deber)", "deber", 1, 4, "es10-consejo"],
  ["Yo que tú, ___ el puesto. (aceptar)", "aceptar", 0, 4, "es10-consejo"],
  ["Con más dinero, ___ una casa. (nosotros, tener)", "tener", 3, 4, "es10-condicional"],
  ["Yo que tú, ___ un máster. (hacer)", "hacer", 0, 4, "es10-consejo"],
  ["¿Qué ___ tú? (hacer)", "hacer", 1, 4, "es10-consejo"],
  ["Yo no ___ nada. (decir)", "decir", 0, 4, "es10-condicional"],
  ["Mis padres ___ venir, pero trabajan. (querer)", "querer", 5, 4, "es10-condicional"],
  ["Lucía ___ más, pero tendría menos tiempo. (ganar)", "ganar", 2, 9, "es10-ventajas"]
];
const ES10_CORTESIA = [
  ["«¿Puedes ayudarme?» — вежливее:", "¿Podrías ayudarme?", ["¿Podrías ayudarme?", "¿Podrás ayudarme?", "¿Pudiste ayudarme?"], "Вежливая просьба — **¿Podrías…?**"],
  ["«Quiero un café.» — вежливее:", "Querría un café.", ["Querría un café.", "Querré un café.", "Quise un café."], "**Querría** — мягче, чем **quiero**."],
  ["«¿Puede repetir?» (usted) — вежливее:", "¿Podría repetir, por favor?", ["¿Podría repetir, por favor?", "¿Podrá repetir, por favor?", "¿Pudo repetir?"], "С usted — **¿Podría…?**"],
  ["«Quiero hablar con el jefe.» — вежливее:", "Me gustaría hablar con el jefe.", ["Me gustaría hablar con el jefe.", "Me gustará hablar con el jefe.", "Me gustó hablar con el jefe."], "**Me gustaría** + инфинитив."],
  ["«Mándame el informe.» — вежливее:", "¿Podrías mandarme el informe?", ["¿Podrías mandarme el informe?", "¿Mandarás el informe?", "Mandaste el informe."], "Просьба вопросом — **¿Podrías…?**"]
];
const ES10_CONSEJO = [
  ["Estás muy cansado: ___ descansar.", "deberías", ["deberías", "deberás", "debiste"], "Совет — **deberías**."],
  ["Yo que tú, ___ el contrato. (firmar)", "firmaría", ["firmaría", "firmaré", "firmo"], "**Yo que tú** + condicional."],
  ["Te ___ practicar cada día. (советую)", "recomiendo", ["recomiendo", "recomendaré", "recomendé"], "**Te recomiendo** + инфинитив."],
  ["—¿Qué harías tú? —Yo ___ la beca.", "pediría", ["pediría", "pediré", "pedí"], "Ответ на **¿Qué harías?** — condicional."],
  ["Si estás cansado, ___ . (imperativo)", "descansa", ["descansa", "descansarás", "descansaste"], "Совет после **si** — imperativo."]
];
/* Si + presente: [frase, infinitivo, persona, módulo, regla] */
const ES10_SI_ESC = [
  ["Si ___ tiempo, iré al cine. (yo, tener)", "tener", 0, 5, "es10-si"],
  ["Si ___ la beca, haré el máster. (yo, conseguir)", "conseguir", 0, 5, "es10-si"],
  ["Si ___ , me quedo en casa. (llover)", "llover", 2, 5, "es10-si"],
  ["Si ___ cansado, descansa. (tú, estar)", "estar", 1, 5, "es10-si"],
  ["Si ___ el examen, haremos una fiesta. (nosotros, aprobar)", "aprobar", 3, 5, "es10-si"],
  ["Si no te ___ el trabajo, busca otro. (gustar)", "gustar", 2, 5, "es10-si"],
  ["Si ___ venir, llámame. (tú, poder)", "poder", 1, 5, "es10-si"]
];
const ES10_SI = [
  ["Si ___ dinero, viajaré a Italia.", "tengo", ["tengo", "tendré", "tendría"], "После **si** — настоящее."],
  ["Si llueve, ___ en casa. (останусь)", "me quedaré", ["me quedaré", "me quedé", "me quedaba"], "Вторая часть — **futuro**."],
  ["Si tienes tiempo, ___ . (позвони мне)", "llámame", ["llámame", "me llamaste", "llamarme"], "Просьба — imperativo."],
  ["Si hace sol, siempre ___ a la playa. (обычно)", "vamos", ["vamos", "fuimos", "iríamos"], "Так бывает всегда — настоящее."],
  ["Haré el máster ___ consigo la beca.", "si", ["si", "sí", "cuando será"], "**si** без знака — «если»; **sí** — «да»."],
  ["Si no ___ , no aprobarás.", "estudias", ["estudias", "estudiarás", "estudiarías"], "После **si** — настоящее."]
];
const ES10_TRABAJO = [
  ["Trabajo en una ___ de tecnología. (компания)", "empresa", ["empresa", "empleo", "entrevista"], "**la empresa** — компания.", "empresa"],
  ["Mi ___ es muy simpático. (начальник)", "jefe", ["jefe", "colega", "candidato"], "**el jefe** — начальник.", "jefe"],
  ["Tengo una ___ de trabajo el lunes. (собеседование)", "entrevista", ["entrevista", "reunión", "solicitud"], "**la entrevista** — собеседование.", "entrevista"],
  ["He mandado mi ___ a tres empresas. (резюме)", "currículum", ["currículum", "contrato", "informe"], "**el currículum** — резюме.", "currículum"],
  ["El ___ es bueno, pero la jornada es larga. (зарплата)", "sueldo", ["sueldo", "puesto", "paro"], "**el sueldo** — зарплата.", "sueldo"],
  ["Mañana firmo el ___ . (контракт)", "contrato", ["contrato", "anuncio", "formulario"], "**el contrato** — контракт.", "contrato"],
  ["No tengo trabajo: estoy en el ___ .", "paro", ["paro", "puesto", "equipo"], "**estar en el paro** — быть безработным.", "paro"],
  ["Trabajo como ___ : no tengo jefe.", "autónomo", ["autónomo", "empleado", "trabajador"], "**autónomo** — на себя.", "autónomo"],
  ["En verano haré ___ en una empresa. (стажировку)", "prácticas", ["prácticas", "oposiciones", "reuniones"], "**hacer prácticas**.", "prácticas"],
  ["Prepara ___ para ser funcionaria.", "oposiciones", ["oposiciones", "prácticas", "currículum"], "**preparar oposiciones** — к конкурсу на госслужбу.", "oposiciones"],
  ["Se rompe la luz: llamo al ___ .", "electricista", ["electricista", "fontanero", "bombero"], "Свет — **electricista**.", "electricista"],
  ["No hay agua en la cocina: llamo al ___ .", "fontanero", ["fontanero", "electricista", "jefe"], "Вода — **fontanero**.", "fontanero"],
  ["¿A qué te ___ ? — Soy médica.", "dedicas", ["dedicas", "trabajas", "ganas"], "**¿A qué te dedicas?**", "dedicarse"],
  ["Este mes he ___ mucho dinero. (потратил)", "gastado", ["gastado", "ahorrado", "ganado"], "**gastar** — тратить.", "gastar"]
];
const ES10_ESTUDIOS = [
  ["La ___ que más me gusta es la historia. (предмет)", "asignatura", ["asignatura", "facultad", "beca"], "**la asignatura** — предмет.", "asignatura"],
  ["Después de la carrera haré un ___ .", "máster", ["máster", "curso de", "título de"], "**hacer un máster**.", "máster"],
  ["Si saco buenas notas, me darán una ___ . (стипендию)", "beca", ["beca", "nota", "asignatura"], "**la beca** — стипендия.", "beca"],
  ["En clase tomo ___ .", "apuntes", ["apuntes", "notas de", "clases de"], "**tomar apuntes**.", "apuntes"],
  ["Antes del examen ___ los apuntes. (повторяю)", "repaso", ["repaso", "practico", "traduzco"], "**repasar** — повторять.", "repasar"],
  ["Estudio en la ___ de Ciencias. (факультет)", "facultad", ["facultad", "asignatura", "universidad de"], "**la facultad** — факультет.", "facultad"],
  ["Ana ___ libros del ruso al español. (переводит)", "traduce", ["traduce", "practica", "repasa"], "**traducir** — переводить.", "traducir"],
  ["Tengo el ___ de traductora. (диплом)", "título", ["título", "curso", "máster de"], "**el título** — диплом.", "título"]
];
const ES10_VENTAJAS = [
  ["Es caro; ___ , es muy bueno. (зато)", "en cambio", ["en cambio", "sobre todo", "de hecho"], "Противопоставление — **en cambio**."],
  ["Me gusta todo, ___ el sueldo. (особенно)", "sobre todo", ["sobre todo", "al menos", "poco a poco"], "«Особенно» — **sobre todo**."],
  ["No es el trabajo ideal, pero ___ está cerca. (хотя бы)", "al menos", ["al menos", "incluso", "en cambio"], "«По крайней мере» — **al menos**."],
  ["Trabaja mucho; ___ trabaja los sábados. (даже)", "incluso", ["incluso", "al menos", "sobre todo"], "«Даже» — **incluso**."],
  ["Mi español mejora ___ . (постепенно)", "poco a poco", ["poco a poco", "de nuevo", "cada vez"], "«Постепенно» — **poco a poco**."],
  ["Una ___ es el sueldo; una desventaja, la jornada.", "ventaja", ["ventaja", "decisión", "opción de"], "**la ventaja** — плюс."]
];
const ES10_DESEO = [
  ["Me ___ vivir cerca del mar. (gustar)", "gustaría", "Желание — **me gustaría**.", 8, "es10-deseos", "gustar"],
  ["¿Te ___ trabajar en el extranjero? (gustar)", "gustaría", "**¿Te gustaría…?**", 8, "es10-deseos", "gustar"],
  ["Me ___ tener mi propio negocio. (encantar)", "encantaría", "**me encantaría** — я бы очень хотел.", 8, "es10-deseos", "encantar"],
  ["Estoy muy ___ de mi hermano. (горжусь)", "orgulloso", "**estar orgulloso de**.", 8, "es10-sentir-futuro", "orgulloso"],
  ["Es la ___ oportunidad. (единственная)", "única", "**único** — согласуется: **la única**.", 8, "es10-sentir-futuro", "único"]
];
const ES10_PREGUNTAS = [
  ["¿Qué ___ el año que viene?", "Haré un máster.", "harás", ["harás", "hiciste", "harías ayer"], 2, "es10-futuro-irr"],
  ["¿A qué te ___ ?", "Soy electricista.", "dedicas", ["dedicas", "dedicarás ayer", "dedicaste a"], 6, "es10-trabajo"],
  ["¿Qué ___ tú?", "Yo aceptaría el trabajo.", "harías", ["harías", "harás ayer", "hiciste"], 4, "es10-consejo"],
  ["¿Dónde ___ Pablo?", "Estará en casa.", "estará", ["estará", "estuvo ayer", "estaría mañana"], 3, "es10-probabilidad"],
  ["¿Qué harás si ___ ?", "Si llueve, me quedaré en casa.", "llueve", ["llueve", "lloverá", "llovería"], 5, "es10-si"],
  ["¿Te ___ vivir en Madrid?", "Sí, me encantaría.", "gustaría", ["gustaría", "gustará ayer", "gustó mañana"], 8, "es10-deseos"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES10_ERRORES = [
  [["Si", "tendré", "tiempo,", "iré."], 1, "tengo", 5, "es10-si", "После **si** — настоящее: **tengo**."],
  [["Mañana", "teneré", "una", "entrevista."], 1, "tendré", 2, "es10-futuro-irr", "**tener → tendré**."],
  [["Mañana", "trabajare", "en", "casa."], 1, "trabajaré", 1, "es10-futuro-reg", "У **yo** — знак: **trabajaré**."],
  [["Haceré", "la", "cena."], 0, "Haré", 2, "es10-futuro-irr", "**hacer → haré**."],
  [["Yo", "que", "tú,", "acepto", "el", "trabajo."], 3, "aceptaría", 4, "es10-consejo", "После **yo que tú** — condicional."],
  [["Me", "gustarías", "vivir", "en", "Madrid."], 1, "gustaría", 8, "es10-deseos", "Как **gustar**: **me gustaría**."],
  [["Mañana", "habrán", "muchas", "personas."], 1, "habrá", 2, "es10-futuro-irr", "**habrá** — одна форма."],
  [["Tenería", "más", "tiempo."], 0, "Tendría", 4, "es10-condicional", "**tener → tendría**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES10_SITUACIONES = [
  ["Ты говоришь, что в следующем году будешь работать в Барселоне.", "El año que viene trabajaré en Barcelona.", ["El año que viene trabajé en Barcelona.", "El año que viene trabajare en Barcelona."], "**trabajaré** — futuro, со знаком.", 1],
  ["Ты говоришь, что завтра у тебя будет собеседование.", "Mañana tendré una entrevista.", ["Mañana teneré una entrevista.", "Mañana tuve una entrevista."], "**tener → tendré**.", 2],
  ["Ты предполагаешь, что Пабло дома.", "Estará en casa.", ["Estuvo en casa mañana.", "Estaría en casa ayer."], "Догадка — **estará**.", 3],
  ["Ты вежливо просишь коллегу помочь.", "¿Podrías ayudarme?", ["¿Podrás ayudarme ayer?", "¿Pudiste ayudarme mañana?"], "**¿Podrías…?**", 4],
  ["Ты советуешь другу принять работу.", "Yo que tú, aceptaría el trabajo.", ["Yo que tú, acepté el trabajo.", "Yo que tú, aceptaré el trabajo ayer."], "**Yo que tú** + condicional.", 4],
  ["Ты говоришь: если будет время, пойдёшь в кино.", "Si tengo tiempo, iré al cine.", ["Si tendré tiempo, iré al cine.", "Si tengo tiempo, fui al cine."], "**Si tengo** — настоящее.", 5],
  ["Ты спрашиваешь нового знакомого о профессии.", "¿A qué te dedicas?", ["¿A qué te dedicarás ayer?", "¿Qué te dedicas a?"], "**¿A qué te dedicas?**", 6],
  ["Ты говоришь, что хотел бы работать за границей.", "Me gustaría trabajar en el extranjero.", ["Me gustaría que trabajo en el extranjero.", "Me gustará trabajar ayer en el extranjero."], "**Me gustaría** + инфинитив.", 8]
];
const ES10_RESPUESTAS = [
  ["¿Qué harás después del curso?", "Haré un máster.", ["Hice un máster mañana.", "Haceré un máster."], "**haré** — futuro.", 2],
  ["¿Podrías ayudarme?", "Claro, ¿qué pasa?", ["Claro, ayudé.", "Sí, podrías."], "Вежливо согласиться.", 4],
  ["¿Qué harías tú?", "Yo que tú, haría el máster.", ["Yo que tú, hice el máster.", "Yo que tú, haré el máster ayer."], "**Yo que tú** + condicional.", 4],
  ["Tengo una entrevista mañana.", "¡Suerte!", ["¡Qué pena!", "¡De nada!"], "Перед собеседованием — **¡Suerte!**", 8],
  ["¿Vienes al cine el sábado?", "Si tengo tiempo, sí.", ["Si tendré tiempo, sí.", "Si tuve tiempo, sí."], "**Si tengo** — настоящее.", 5],
  ["¿Aceptarás el trabajo?", "¡Ya veremos!", ["¡Ya vimos!", "¡Ya veíamos!"], "Ещё не решено — **¡Ya veremos!**", 5]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas, rx?]], modelo, pista?] */
function es10Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f, rx]) => (rx ? { es, formas: f ? f.split("|") : [], rx } : { es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES10_FUT_RX = "^([a-záéíóúñ]+(aré|eré|iré|arás|erás|irás|ará|erá|irá|aremos|eremos|iremos|aréis|eréis|iréis|arán|erán|irán)|tendré|tendrás|tendrá|haré|harás|hará|podré|podrá|saldré|vendré|diré|sabré|querré|pondré|habrá)$";
const ES10_COND_RX = "^[a-záéíóúñ]+(ría|rías|ríamos|ríais|rían)$";
const ES10_TURNOS = [
  es10Turnos("Javier", "javier", "Tus planes", false, [
    ["¿Qué harás el año que viene?", "Что ты будешь делать в следующем году?", "Расскажи о своём плане: futuro.",
      [["futuro", "", ES10_FUT_RX]], "Haré un máster en Barcelona.", "**Haré…, trabajaré…, viviré…**"],
    ["¿Y dentro de cinco años?", "А через пять лет?", "Скажи, где ты будешь или что будешь делать.",
      [["futuro", "", ES10_FUT_RX]], "Viviré en Madrid y tendré mi propio negocio.", "**Viviré…, tendré…**"],
    ["¿Y si no lo consigues?", "А если не получится?", "Ответь с si + настоящее.",
      [["si", "si"], ["presente", "", "^[a-záéíóúñ]+(o|as|a|es|e|amos|emos|imos|an|en)$"]], "Si no lo consigo, buscaré otro trabajo.", "**Si no lo consigo, …**"]
  ]),
  es10Turnos("Marta", "marta", "Una entrevista", false, [
    ["Buenos días. ¿A qué se dedica usted?", "Добрый день. Чем вы занимаетесь?", "Скажи, кем работаешь или что учишь.",
      [["кто ты", "soy|trabajo|estudio|estoy"]], "Soy traductora y trabajo como autónoma.", "**Soy…, trabajo como…**"],
    ["¿Qué experiencia tiene?", "Какой у вас опыт?", "Расскажи о своём опыте: где работал, что делал.",
      [["опыт", "he trabajado|trabajé|he hecho|hice|tengo|experiencia|prácticas"]], "He hecho prácticas en una empresa de Madrid.", "**He trabajado…, hice prácticas…**"],
    ["¿Por qué le interesa este puesto?", "Почему вас интересует эта должность?", "Ответь с me gustaría или porque.",
      [["причина", "me gustaría|porque|me interesa|quiero"]], "Me gustaría aprender y trabajar en equipo.", "**Me gustaría…**"]
  ]),
  es10Turnos("Lucía", "lucia", "Chat con Lucía: ¿qué harías tú?", true, [
    ["Tengo dos opciones de trabajo y no sé cuál elegir 😩", "У меня два варианта работы, и я не знаю, какое выбрать 😩", "Спроси, какие это предложения, или скажи, что поможешь.",
      [["ответ", "cuáles|qué|cuéntame|te ayudo|vale|¿"]], "¿Cuáles son?", "**¿Cuáles son?**"],
    ["Una paga más, pero la otra está cerca de casa. ¿Qué harías tú?", "Одна платит больше, но другая рядом с домом. А ты бы что сделал(а)?", "Дай совет: yo que tú / yo elegiría / deberías.",
      [["совет", "", ES10_COND_RX]], "Yo que tú, elegiría la que está cerca de casa.", "**Yo que tú, + condicional**"],
    ["¿Y por qué?", "А почему?", "Объясни: плюсы, минусы.",
      [["причина", "porque|ventaja|desventaja|al menos|sobre todo|en cambio"]], "Porque al menos tendrías más tiempo libre.", "**Porque…, al menos…**"]
  ])
];
window.ejerciciosUnidadEs10 = ejerciciosUnidadEs10;
window.es10Vocab = es10Vocab;
window.es10Ampliacion = es10Ampliacion;
window.es10Objetivo = es10Objetivo;
/* Desafío del día U10 (js/hoy.js): [verbo, marcador] — una frase sobre uno mismo; con «si…», el presente */
const ES10_HOY = [["trabajar", "el año que viene"], ["vivir", "dentro de cinco años"], ["viajar", "si tengo dinero"], ["estudiar", "el próximo curso"], ["tener", "algún día"],
  ["hacer", "el fin de semana que viene"], ["comprar", "si consigo el trabajo"], ["aprender", "en el futuro"], ["ir", "mañana"], ["salir", "si hace buen tiempo"], ["buscar", "el año que viene"], ["ahorrar", "el próximo año"]];
window.ES10_HOY = ES10_HOY;
window.es10Fut = es10Fut;
window.es10Cond = es10Cond;
window.es10Pres = es10Pres;
const ES10_MEZCLA = { futuro: 3, "futuro-forma": 2, probabilidad: 1, "ir-a-futuro": 1, condicional: 2, "condicional-forma": 1, cortesia: 1, consejo: 1, "si-escribir": 2, "si-elegir": 1,
  trabajo: 2, estudios: 1, ventajas: 1, deseo: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1,
  natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1 };
window.ES10_MEZCLA = ES10_MEZCLA;

/* ── Profundización (desde el principio, regla del 13/11/2026) ───────────────
   Más a fondo que se suma a la teoría al cargar y los tipos de profundización de Azbuka. */
const ES10_MAS = {
  "es10-futuro-reg": { titulo: "Futuro или presente?", texto: "О ближайшем будущем испанцы часто говорят в **presente**: **Mañana trabajo** — завтра работаю. Это звучит естественно, если есть слово времени.\n**Futuro** нужен, когда это прогноз, обещание или далёкое будущее: **Algún día trabajaré en Madrid.**", ejemplos: [{ es: "Mañana trabajo hasta las ocho.", ru: "Завтра я работаю до восьми." }] },
  "es10-cuando": { titulo: "Dentro de и hace", texto: "Зеркальная пара: **hace dos años** — два года назад, **dentro de dos años** — через два года.\n**dentro de** без числа — «внутри»: **dentro de la casa**.", ejemplos: [{ es: "Hace un año empecé; dentro de un año terminaré.", ru: "Год назад я начал, через год закончу." }] },
  "es10-futuro-irr": { titulo: "Habrá — одна форма", texto: "Как **hay** и **había**, **habrá** не меняется: **Mañana habrá una reunión**, **Habrá muchas personas**. Никогда не «habrán personas».", ejemplos: [{ es: "En la fiesta habrá mucha gente.", ru: "На празднике будет много людей." }] },
  "es10-conseguir": { titulo: "Conseguir: e → i", texto: "**conseguir** спрягается как **seguir**: **consigo, consigues, consigue…** В indefinido: **consiguió, consiguieron**. В futuro — правильно: **conseguiré**.", ejemplos: [{ es: "Al final lo consiguió.", ru: "В конце концов он добился своего." }] },
  "es10-probabilidad": { titulo: "Estaría — догадка о прошлом", texto: "Тот же приём работает и для прошлого, через condicional: **¿Por qué no vino Ana? — Estaría cansada.** — Наверное, устала. Пока достаточно узнавать.", ejemplos: [{ es: "Serían las once cuando llegó.", ru: "Было, наверное, одиннадцать, когда он пришёл." }] },
  "es10-ir-a-futuro": { titulo: "В разговоре — ir a", texto: "В живой речи испанцы гораздо чаще говорят **voy a** + инфинитив, а futuro оставляют для обещаний, прогнозов и «посмотрим»: **¡Ya veremos!**", ejemplos: [{ es: "¿Vas a venir? — ¡Ya veremos!", ru: "Ты придёшь? — Посмотрим!" }] },
  "es10-posible": { titulo: "A lo mejor", texto: "**a lo mejor** — очень разговорное «может быть»: **A lo mejor voy al cine.** Не путай с **lo mejor** — «лучшее»: **Lo mejor es descansar.**", ejemplos: [{ es: "A lo mejor llueve mañana.", ru: "Может, завтра будет дождь." }] },
  "es10-condicional": { titulo: "Futuro и condicional — одна основа", texto: "Запомни основу один раз — получишь два времени: **tendr-é / tendr-ía**, **har-é / har-ía**, **podr-é / podr-ía**. Окончания condicional — как у imperfecto глаголов на -er: **-ía, -ías…**", ejemplos: [{ es: "Tendré tiempo. — Tendría tiempo.", ru: "У меня будет время. — У меня было бы время." }] },
  "es10-cortesia": { titulo: "Quería, querría, quiero", texto: "Три ступени вежливости: **Quiero un café** — прямо; **Quería un café** — вежливо (в Испании так чаще всего в кафе); **Querría un café** — ещё мягче, чуть официально.", ejemplos: [{ es: "Quería una mesa para dos, por favor.", ru: "Я бы хотел столик на двоих." }] },
  "es10-consejo": { titulo: "Deberías и tienes que", texto: "**Tienes que** — «ты должен», звучит как приказ. **Deberías** — мягкий совет. С незнакомыми и коллегами лучше **deberías** или **yo que tú…**", ejemplos: [{ es: "Deberías hablar con el jefe.", ru: "Тебе стоило бы поговорить с начальником." }] },
  "es10-si": { titulo: "Si и sí", texto: "**si** без знака — «если»; **sí** со знаком — «да». На слух одинаково, а на письме — разные слова: **Si puedes, ven. — ¡Sí!**", ejemplos: [{ es: "Si quieres, te ayudo. — ¡Sí, gracias!", ru: "Если хочешь, помогу. — Да, спасибо!" }] },
  "es10-decidir": { titulo: "Tomar una decisión", texto: "Решение «принимают» глаголом **tomar**: **tomar una decisión**. Ещё с **tomar**: **tomar apuntes**, **tomar el sol**, **tomar un café**.", ejemplos: [{ es: "Ya he tomado una decisión.", ru: "Я уже принял решение." }] },
  "es10-trabajo": { titulo: "Trabajo, puesto, empleo", texto: "**el trabajo** — работа вообще и место работы; **el puesto** — конкретная должность; **el empleo** — занятость, чуть официальнее: **buscar empleo**.\nЖенский род профессий: **la fontanera**, **la autónoma**; **electricista** — одно слово для обоих: **el / la electricista**.", ejemplos: [{ es: "Busco un puesto de electricista.", ru: "Ищу должность электрика." }] },
  "es10-buscar-trabajo": { titulo: "Mandar el currículum", texto: "Глаголы этого пути: **mandar** (отправить), **solicitar** (подать заявку), **firmar** (подписать), **contratar** (нанять). Мн. ч. от **currículum** — **currículums**.", ejemplos: [{ es: "La empresa me ha contratado.", ru: "Компания меня наняла." }] },
  "es10-estudios": { titulo: "Carrera, curso, asignatura", texto: "**la carrera** — вся учёба в вузе (4 года); **el curso** — учебный год или курс; **la asignatura** — один предмет. **Estoy en segundo curso de la carrera** — я на втором курсе.", ejemplos: [{ es: "Este curso tengo seis asignaturas.", ru: "В этом году у меня шесть предметов." }] },
  "es10-deseos": { titulo: "Me encantaría — с радостью", texto: "**Me encantaría** — и мечта, и ответ на приглашение: **—¿Vienes a la fiesta? —¡Me encantaría!**", ejemplos: [{ es: "¿Te gustaría venir? — ¡Me encantaría!", ru: "Хочешь прийти? — С удовольствием!" }] },
  "es10-sentir-futuro": { titulo: "Orgulloso de", texto: "Гордятся **чем / кем** — через **de**: **Estoy orgulloso de ti.** Так же **satisfecho con** / **contento con**.", ejemplos: [{ es: "Estoy muy satisfecha con mi trabajo.", ru: "Я очень довольна своей работой." }] },
  "es10-ventajas": { titulo: "Sin embargo и en cambio", texto: "**sin embargo** — «однако», та же мысль, но неожиданно; **en cambio** — «зато, а вот», сравнение двух разных вещей: **Madrid es caro; en cambio, mi pueblo es barato.**", ejemplos: [{ es: "Gana poco; sin embargo, está contento.", ru: "Он мало зарабатывает, однако доволен." }] },
  "es10-decidir-final": { titulo: "Elegir: e → i, g → j", texto: "**elegir** — как **pedir** (e → i) и с **j** перед o: **elijo, eliges, elige…** Futuro правильный: **elegiré**.", ejemplos: [{ es: "Elijo la segunda opción.", ru: "Выбираю второй вариант." }] }
};
const ES10_NAT = [
  ["Mañana trabajaré en casa.", ["Mañana trabajare en casa.", "Mañana trabajé en casa."], "Futuro, со знаком.", 1, "es10-futuro-reg"],
  ["Dentro de dos años viviré en Madrid.", ["En dos años después viviré en Madrid.", "Hace dos años viviré en Madrid."], "«Через» — **dentro de**.", 1, "es10-cuando"],
  ["Mañana tendré tiempo.", ["Mañana teneré tiempo.", "Mañana tendre tiempo."], "**tener → tendré**.", 2, "es10-futuro-irr"],
  ["Mañana habrá una reunión.", ["Mañana habrán una reunión.", "Mañana hay habrá una reunión."], "**habrá** — одна форма.", 2, "es10-futuro-irr"],
  ["No sé, estará en casa.", ["No sé, estuvo en casa mañana.", "No sé, está estará en casa."], "Догадка — **estará**.", 3, "es10-probabilidad"],
  ["¿Podrías ayudarme?", ["¿Poderías ayudarme?", "¿Podrás ayudarme ayer?"], "Вежливая просьба.", 4, "es10-cortesia"],
  ["Yo que tú, haría un máster.", ["Yo que tú, haceré un máster.", "Yo que tú, hago un máster ayer."], "**Yo que tú** + condicional.", 4, "es10-consejo"],
  ["Si tengo tiempo, iré al cine.", ["Si tendré tiempo, iré al cine.", "Si tendría tiempo, iré al cine."], "После **si** — настоящее.", 5, "es10-si"],
  ["Tengo que tomar una decisión.", ["Tengo que hacer una decisión de.", "Tengo que tomar una decisiona."], "**tomar una decisión**.", 5, "es10-decidir"],
  ["Soy electricista.", ["Soy un electricista.", "Estoy electricista."], "Профессия — без артикля.", 6, "es10-trabajo"],
  ["En clase tomo apuntes.", ["En clase tomo una nota de.", "En clase hago apuntes de."], "**tomar apuntes**.", 7, "es10-estudios"],
  ["Me gustaría vivir en el campo.", ["Me gustaría que vivo en el campo.", "Me gustarías vivir en el campo."], "**me gustaría** + инфинитив.", 8, "es10-deseos"],
  ["Estoy orgulloso de mi hermana.", ["Estoy orgulloso con mi hermana de.", "Soy orgulloso a mi hermana."], "**orgulloso de**.", 8, "es10-sentir-futuro"],
  ["Es caro; en cambio, es muy bueno.", ["Es caro; en cambio de, es muy bueno.", "Es caro; sobre todo, es muy bueno pero."], "**en cambio** — зато.", 9, "es10-ventajas"]
];
const ES10_POR = [
  ["Si llueve, me quedaré en casa.", "Почему «llueve», а не «lloverá»?", "После si — настоящее время", ["Это прошлое", "Это ошибка"], "Правило **si + presente**.", 5, "es10-si"],
  ["¿Dónde está Pablo? — Estará en casa.", "Что значит «estará» здесь?", "Наверное, он сейчас дома", ["Он будет дома завтра", "Он был дома"], "Futuro — догадка о настоящем.", 3, "es10-probabilidad"],
  ["¿Podrías mandarme el informe?", "Почему «podrías», а не «puedes»?", "Так вежливее", ["Это прошлое", "Это будущее"], "Condicional смягчает просьбу.", 4, "es10-cortesia"],
  ["Esta tarde voy a estudiar.", "Почему «voy a estudiar»?", "Это уже решённый план на сегодня", ["Это мечта", "Это прошлое"], "Решённый план — **ir a**.", 3, "es10-ir-a-futuro"],
  ["Te prometo que te llamaré.", "Почему «llamaré»?", "Это обещание", ["Это привычка", "Это вежливая просьба"], "Обещание — **futuro**.", 3, "es10-ir-a-futuro"],
  ["Mañana tendré una entrevista.", "Почему «tendré», а не «teneré»?", "У tener особая основа: tendr-", ["Это condicional", "Это ошибка"], "**tener → tendré**.", 2, "es10-futuro-irr"],
  ["Soy fontanera.", "Почему без «una»?", "Профессию говорят без артикля", ["Потому что женский род", "Это ошибка"], "**Soy fontanera.**", 6, "es10-trabajo"],
  ["Ganaría más, pero tendría menos tiempo.", "Почему condicional?", "Это вариант, не реальность", ["Это прошлое", "Это обещание"], "Варианты — condicional.", 9, "es10-ventajas"]
];
const ES10_OIDO = [
  ["Trabajaré mañana.", "Послушай: это futuro или condicional?", "Futuro", ["Futuro", "Condicional"], "**trabajaré** — futuro.", 1, "es10-futuro-reg"],
  ["Trabajaría mañana.", "Послушай: это futuro или condicional?", "Condicional", ["Futuro", "Condicional"], "**trabajaría** — condicional.", 4, "es10-condicional"],
  ["Tendré tiempo.", "Послушай: это futuro или condicional?", "Futuro", ["Futuro", "Condicional"], "**tendré** — futuro.", 2, "es10-futuro-irr"],
  ["Podríamos ir.", "Послушай: это futuro или condicional?", "Condicional", ["Futuro", "Condicional"], "**podríamos** — condicional.", 4, "es10-condicional"],
  ["Si puedes, ven.", "Послушай: si или sí?", "si — «если»", ["si — «если»", "sí — «да»"], "Здесь «если».", 5, "es10-si"],
  ["Hablaré con el jefe.", "Кто будет говорить?", "yo", ["yo", "él", "nosotros"], "**-é** — yo.", 1, "es10-futuro-reg"]
];
const ES10_PAR = [
  ["Ты обещаешь позвонить другу.", "Te llamaré.", "Te llamo ayer.", "Обещание — **futuro**.", 3, "es10-ir-a-futuro"],
  ["Ты вежливо просишь коллегу помочь.", "¿Podrías ayudarme?", "¡Ayúdame ya!", "Вежливо — **¿Podrías…?**", 4, "es10-cortesia"],
  ["Ты советуешь подруге отдохнуть.", "Deberías descansar.", "Debiste descansar.", "Совет — **deberías**.", 4, "es10-consejo"],
  ["Ты говоришь, что не знаешь, где Ана, но, наверное, на работе.", "Estará en el trabajo.", "Estuvo en el trabajo mañana.", "Догадка — **estará**.", 3, "es10-probabilidad"],
  ["Ты говоришь: если сдашь экзамен, устроишь праздник.", "Si apruebo, haré una fiesta.", "Si aprobaré, haré una fiesta.", "**si apruebo**.", 5, "es10-si"],
  ["Тебя приглашают в кино, и ты очень рад.", "¡Me encantaría!", "¡Me encantó mañana!", "**¡Me encantaría!**", 8, "es10-deseos"]
];
const ES10_DESC = [
  ["hablar → hablaré · comer → comeré. А vivir?", "viviré", ["vivé", "vivire"], "Окончание к целому инфинитиву.", 1, "es10-futuro-reg"],
  ["tener → tendré · poner → pondré. А salir?", "saldré", ["saliré", "salgré"], "Группа **-dr-**.", 2, "es10-futuro-irr"],
  ["tendré → tendría · haré → haría. А podré?", "podría", ["podería", "podrería"], "Основа futuro + **-ía**.", 4, "es10-condicional"],
  ["hablaré → hablaría · comeré → comería. А diré?", "diría", ["decería", "diriría"], "**dir-** + **-ía**.", 4, "es10-condicional"],
  ["poder → podré · saber → sabré. А querer?", "querré", ["queriré", "queré"], "Выпадает гласная: **querr-**.", 2, "es10-futuro-irr"],
  ["hace dos años — два года назад. Через два года?", "dentro de dos años", ["en dos años después", "desde dos años"], "**dentro de**.", 1, "es10-cuando"]
];
const ES10_CAD = [
  ["Hoy trabajo en casa.", [["Теперь: завтра (mañana), futuro.", "Mañana trabajaré en casa."], ["Теперь: мы (nosotros).", "Mañana trabajaremos en casa."]], 1, "es10-futuro-reg"],
  ["Tengo tiempo.", [["Теперь: завтра (mañana), futuro.", "Mañana tendré tiempo."], ["Теперь: «было бы» (condicional), без mañana.", "Tendría tiempo."]], 4, "es10-condicional"],
  ["Puedes ayudarme.", [["Теперь: вопрос.", "¿Puedes ayudarme?"], ["Теперь: вежливее (condicional).", "¿Podrías ayudarme?"]], 4, "es10-cortesia"],
  ["Tengo dinero. Viajo a Italia.", [["Соедини через si (вторая часть — futuro).", "Si tengo dinero, viajaré a Italia."], ["Теперь: ты (tú).", "Si tienes dinero, viajarás a Italia."]], 5, "es10-si"]
];
const ES10_DIAG = [
  ["Si tendré tiempo, iré.", "После si — настоящее время", ["Нужен condicional", "Нужно убрать запятую"], "Si tengo tiempo, iré.", 5, "es10-si"],
  ["Mañana teneré una entrevista.", "У tener особая основа: tendr-", ["Нужно ir a", "Нужен артикль"], "Mañana tendré una entrevista.", 2, "es10-futuro-irr"],
  ["Soy un fontanero.", "Профессия — без артикля", ["Нужно estar", "Нужен futuro"], "Soy fontanero.", 6, "es10-trabajo"],
  ["Me gustaría que vivo en Madrid.", "О себе — me gustaría + инфинитив", ["Нужен futuro", "Нужно me gusta"], "Me gustaría vivir en Madrid.", 8, "es10-deseos"],
  ["Mañana habrán muchas personas.", "Habrá — одна форма", ["Нужен presente", "Нужно estar"], "Mañana habrá muchas personas.", 2, "es10-futuro-irr"],
  ["Yo que tú, aceptaré el trabajo.", "После yo que tú — condicional", ["Нужно si", "Нужен presente"], "Yo que tú, aceptaría el trabajo.", 4, "es10-consejo"]
];
const ES10_DES = [
  ["Si tengo tiempo iré al cine", [["Какое слово — условие «если»?", 0], ["Какое слово — futuro?", 3], ["Какое слово — настоящее?", 1]], 5, "es10-si"],
  ["Yo que tú haría un máster", [["Какое слово — condicional?", 3], ["Что он советует сделать? (сущ.)", 5]], 4, "es10-consejo"],
  ["Dentro de dos años tendré mi propio negocio", [["Какое слово — futuro?", 4], ["Какое слово значит «собственный»?", 6]], 2, "es10-futuro-irr"]
];
/* Formas generadas: futuro y condicional */
const ES10_VERBOS_FUT = ["trabajar", "vivir", "comer", "estudiar", "viajar", "volver", "ser", "estar", "ir", "llamar", "escribir", "aprender", "ganar", "ahorrar", "levantarse", "tener", "hacer", "poder", "salir", "venir", "decir", "saber", "querer", "poner", "conseguir", "elegir"];
const ES10_VERBOS_COND = ["gustar", "poder", "deber", "tener", "hacer", "decir", "vivir", "trabajar", "ser", "querer", "salir", "venir", "elegir", "viajar", "ayudar", "aceptar"];

function es10Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES10-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES10_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES10_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES10_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oid-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES10_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES10_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("dsc-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES10_CAD.forEach(([base, pasos, mod, regla], i) => P("cdn-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES10_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES10_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* Formas generadas */
  const IRR = /^(tener|hacer|poder|salir|venir|decir|saber|querer|poner)$/;
  ES10_VERBOS_FUT.forEach((inf, i) => [0, 3, 5].map(k => (k + i) % 6).forEach(p => {
    const f = es10Fut(inf, p); if (!f) return;
    P("ff-" + inf + "-" + p, "futuro-forma", "escribir", IRR.test(inf) ? 2 : 1, IRR.test(inf) ? "es10-futuro-irr" : "es10-futuro-reg",
      { grupo: "ff-" + inf, lex: lex(inf), pide: "Напиши форму в futuro.", grande: inf + " — " + ES10_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
        explicacion: "**" + inf + "**, " + ES10_PERS[p][0].split(" / ")[0] + " → **" + f + "**." });
  }));
  ES10_VERBOS_COND.forEach((inf, i) => [1, 2, 3].map(k => (k + i) % 6).forEach(p => {
    const f = es10Cond(inf, p); if (!f) return;
    P("cf-" + inf + "-" + p, "condicional-forma", "escribir", 4, "es10-condicional",
      { grupo: "cf-" + inf, lex: lex(inf), pide: "Напиши форму в condicional.", grande: inf + " — " + ES10_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
        explicacion: "**" + inf + "**, " + ES10_PERS[p][0].split(" / ")[0] + " → **" + f + "**." });
  }));
}
UNIDAD_ES_10.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES10_MAS[s.id] && !s.mas) s.mas = ES10_MAS[s.id]; }));

/* ── Palabras frecuentes, segunda ronda (Manu, 22/11/2026) ──
   claude/PROPUESTA_FRECUENTES_2_ABECE.md. Como las palabras básicas de las U2–U7 (19/11/2026):
   entran en la lista del módulo que les corresponde, con una sección corta de teoría y sus
   ejercicios; no cambia el orden de los módulos ni lo que ya había. Formato de ES10_BASICAS:
   [tipo, forma, módulo, regla, consigna, frase o texto grande, correcta, otras opciones, explicación, palabra] */
const ES10_BASICAS_MOD = [
  /* Segunda ronda de frecuentes (Manu, 22/11/2026) */
  ["es10m6", ["director", "dueño"], {
    id: "es10-director",
    titulo: "El director · el dueño",
    texto: "**el director / la directora** — «директор, руководитель» (в кино — режиссёр). **el dueño / la dueña** — «владелец, хозяин»: **el dueño del bar**.",
    ejemplos: [
      { es: "Algún día seré directora de una escuela.", ru: "Когда-нибудь я стану директором школы." },
      { es: "El dueño del restaurante es muy simpático.", ru: "Хозяин ресторана очень приятный." }
    ]
  }],
  ["es10m7", ["hacerse", "convertirse"], {
    id: "es10-hacerse",
    titulo: "Hacerse médico · convertirse en",
    texto: "«Стать»: **hacerse** + профессия или качество, когда к этому идут сами: **Se hizo médico** — он стал врачом. **convertirse en** — «превратиться в»: **Barcelona se convirtió en una ciudad turística**.\n\n**llegar a ser** тоже значит «стать» — после долгого пути.",
    ejemplos: [
      { es: "Quiero hacerme profesora de español.", ru: "Я хочу стать преподавательницей испанского." },
      { es: "El pueblo se convertirá en una ciudad.", ru: "Деревня превратится в город." }
    ],
    ojo: "**convertirse** всегда с **en**: **se convirtió en**."
  }],
  ["es10m9", ["elección"], {
    id: "es10-eleccion",
    titulo: "La elección",
    texto: "**la elección** — «выбор» (от **elegir** — выбирать): **Es una elección difícil**. Во мн. ч. **las elecciones** — «выборы».",
    ejemplos: [
      { es: "Estudiar o trabajar: es una elección difícil.", ru: "Учиться или работать — трудный выбор." }
    ]
  }]
];
const ES10_BASICAS = [
  ["basica", "elegir", 6, "es10-director", "Что подходит?", "Mi madre es ___ de un hospital.", "directora", ["director", "dueño"], "Мама — **la directora**.", "director"],
  ["basica", "elegir", 6, "es10-director", "Что подходит?", "El ___ del bar se llama Paco.", "dueño", ["dueña", "director"], "Хозяин — **el dueño**.", "dueño"],
  ["basica", "elegir", 7, "es10-hacerse", "Что подходит?", "Después de la universidad, Ana se ___ programadora.", "hizo", ["hació", "hice"], "**hacerse**, она, indefinido: **se hizo**.", "hacerse"],
  ["basica", "elegir", 7, "es10-hacerse", "Что подходит?", "La pequeña tienda se convirtió ___ un supermercado.", "en", ["a", "de"], "**convertirse en**.", "convertirse"],
  ["basica", "escribir", 9, "es10-eleccion", "Выбор — как по-испански? Напиши.", "No sé qué hacer: es una ___ difícil.", "elección", [], "**la elección** — «выбор».", "elección"]
];
(function () {
  const M = id => UNIDAD_ES_10.modulos.find(m => m.id === id);
  ES10_BASICAS_MOD.forEach(([id, vocab, seccion]) => {
    const m = M(id); if (!m) return;
    if (vocab.length) m.vocab = (m.vocab || []).concat(vocab.filter(w => (m.vocab || []).indexOf(w) < 0));
    if (seccion) m.secciones = (m.secciones || []).concat([seccion]);
  });
})();
function es10Basicas(out, baraja, lex) {
  ES10_BASICAS.forEach(([tipo, forma, mod, regla, pide, grande, ok, otras, exp, w], i) => {
    const hueco = grande && grande.indexOf("___") >= 0;
    const oir = hueco ? grande.replace("___", ok) : ok;
    const ex = { id: "ES10-bas-" + i, tipo, forma, dificultad: forma === "escribir" ? 3 : 2, modulo: mod, regla: regla || undefined, grupo: "bas-" + i,
      lex: w ? lex(w) : undefined, pide, oir, explicacion: exp };
    if (grande) ex.grande = grande;
    if (forma === "elegir") { ex.opciones = baraja([ok].concat(otras), i + 211); ex.correcta = ok; }
    else { ex.esperadas = [ok].concat(otras || []).concat(hueco ? [oir] : []); ex.idioma = "es"; if (hueco) { ex.foco = true; ex.completa = oir; } }
    out.push(ex);
  });
}
