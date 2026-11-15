const ES12_V = {"1":["explicación","propuesta","mentira","duda"],"3":["quien","donde","lo que","cuyo","cual"],"4":["consecuencia","causa","efecto","motivo","por eso","así que","es decir","o sea","mientras que","ya que","pues","por lo tanto","debido a","gracias a","a causa de","comparar","comparación","parecido","distinto","contrario","sino"],"5":["sobre","según","contra"],"6":["cartel","fumar","aparcar","prohibido","permitido","entrada"],"7":["listo","vivo","despierto","atento","interesado","callado","consciente"],"8":["opinar","argumento","argumentar","razón","debate","debatir","defender","convencer","acuerdo","desacuerdo","postura","tema","cuestión","aspecto","inconveniente","razonable","exagerado","exagerar","grave","fundamental","principal","ejemplo","conclusión","polémico","punto de vista","por un lado","por otro lado","en primer lugar","en conclusión","por ejemplo","criticar","crítica","apoyar","apoyo","rechazar","demostrar","insistir","añadir","resumir","resumen","falso","obvio","mayoría","totalmente","ni"],"9":["noticia","periódico","prensa","radio","artículo","titular","encuesta","dato","cifra","porcentaje","estudio","medios de comunicación","publicar","programa","publicidad","canal","sociedad","social","político","política","gobierno","ciudadano","libertad","igualdad","población","habitante","crisis","paz","economía","económico","cultura","tradición","transporte","tráfico","coste","inmigrante","presidente","alcalde","votar","voto","manifestación","protestar","impuesto","justicia","mundial","nacional","internacional","aumentar","disminuir","empeorar","afectar","depender"],"10":["medio ambiente","naturaleza","contaminación","contaminar","reciclar","reciclaje","residuo","plástico","clima","cambio climático","renovable","sostenible","ecológico","proteger","protección","destruir","animal","ambiente","consumir","producir","producto","recurso","salvar","desaparecer","gasolina","eléctrico","solar","pantalla","red","red social","digital","inteligencia","artificial","máquina","tecnológico","virtual","privacidad","progreso","avance","desarrollo","batería","enlace","vídeo","seguidor","conectar","inventar","invento","científico","descubrimiento","evitar","provocar","causar","reducir"],"a9":["pobreza","riqueza","violencia","conflicto","inmigración","desigualdad"],"a10":["especie","destrucción","dispositivo","calentamiento global"]};

/* ============================================================
   DATA-UNIDAD-ES-12.JS — Abecé · Урок 12: Мнения и аргументы
   (Opinar y argumentar). Completa (14/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U12;
   propuesta aprobada por Manu el 14/11/2026: claude/PROPUESTA_U12_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-11.js, con la profundización desde el
   principio (tipos de Azbuka, «Más a fondo», formas generadas).
   Las formas salen de data-verbos-es.js: presente (es12Pres), subjuntivo
   (es12Subj) e imperativo de tú (es12Imp).
   Decisiones de Manu (14/11/2026): 28 entradas nuevas (lo que, punto de
   vista, por ejemplo, medio ambiente, red social, coste…); toda la
   ampliación; **sin** nota cultural (las tertulias no van); costo queda
   marcado como americano; 5 frases nuevas; desafío del día «Кому и что».
   ============================================================ */

const ES12_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
function es12Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  if (!v) return null;
  return v.base ? VERBOS_ES[v.base] : v;
}
function es12Tiempo(t) { return (inf, p) => { const v = es12Verbo(inf); return v && v[t] && v[t][p] ? v[t][p] : ""; }; }
const es12Pres = es12Tiempo("pres");
const es12Subj = es12Tiempo("subj");
function es12Imp(inf) { const v = es12Verbo(inf); return v && v.impTu ? v.impTu : ""; }
const es12Mayus = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());

const UNIDAD_ES_12 = {
  id: 12,
  titulo: "Мнения и аргументы",
  tituloEs: "Opinar y argumentar",
  objetivo: "Высказать и защитить своё мнение, связать мысли (потому что, поэтому, хотя), понять простой текст-рассуждение — о новостях, обществе, природе и технологиях.",
  tiempo: "4 недели ежедневной практики (примерно 25–30 часов)",
  modulos: [
    {
      id: "es12m1", n: 1, tipo: "leccion",
      titulo: "Se lo doy",
      resumen: "Два местоимения сразу: кому и что.",
      intro: "Два местоимения в одной фразе: «я даю **тебе** **её**» — **te la doy**. Порядок всегда один: сначала **кому**, потом **что**. А вместо «le lo» испанцы говорят **se lo**.",
      tablas: [
        { titulo: "Кому + что", encabezados: ["Кому", "+ lo, la, los, las"], filas: [
          [{ es: "me", ru: "мне" }, { es: "me lo · me la · me los · me las" }],
          [{ es: "te", ru: "тебе" }, { es: "te lo · te la · te los · te las" }],
          [{ es: "le → se", ru: "ему, ей, вам" }, { es: "se lo · se la · se los · se las" }],
          [{ es: "nos", ru: "нам" }, { es: "nos lo · nos la · nos los · nos las" }],
          [{ es: "os", ru: "вам (неформально)" }, { es: "os lo · os la · os los · os las" }],
          [{ es: "les → se", ru: "им, вам" }, { es: "se lo · se la · se los · se las" }]] }
      ],
      secciones: [
        {
          id: "es12-combinados",
          titulo: "Te lo doy",
          texto: "Когда в фразе два местоимения — **кому** (me, te, le, nos, os, les) и **что** (lo, la, los, las), — они стоят рядом перед глаголом: сначала **кому**, потом **что**:\n**Te doy el libro → Te lo doy.**\n**Me explicas la regla → Me la explicas.**\nМежду ними и глаголом ничего вставить нельзя; **no** — перед обоими: **No te lo doy.**",
          comparacion: "По-русски порядок свободный: «дам тебе её», «её тебе дам». По-испански — только **te la doy**.",
          ejemplos: [
            { es: "¿El coche? Mi padre me lo deja los sábados.", ru: "Машина? Отец даёт мне её по субботам." },
            { es: "¿Las fotos? Te las mando esta tarde.", ru: "Фотографии? Пришлю тебе их сегодня вечером." },
            { es: "No nos lo han dicho.", ru: "Нам этого не сказали." }
          ],
          errores: [
            { mal: "Lo te doy.", bien: "Te lo doy.", por: "Сначала **кому** (te), потом **что** (lo)." }
          ],
          chequeo: [
            { pide: "Me explicas la regla. → ___", opciones: ["Me la explicas.", "La me explicas.", "Me lo explicas."], ok: "Me la explicas.", por: "**la regla** → **la**; порядок: **me la**." }
          ]
        },
        {
          id: "es12-se-lo",
          titulo: "Le lo → se lo",
          texto: "**le** и **les** перед **lo, la, los, las** превращаются в **se**:\n**Le doy el libro a Ana → Se lo doy.**\n«Le lo doy» сказать нельзя. Это **se** не возвратное — так просто удобнее произносить.\nЧтобы было ясно, **кому**, добавляют **a** + человек: **Se lo doy a Ana**, **Se lo doy a ellos.**",
          ejemplos: [
            { es: "¿Le has dado las llaves a Pablo? — Sí, se las he dado.", ru: "Ты дал ключи Пабло? — Да, я ему их дал." },
            { es: "Se lo explico a mis padres.", ru: "Я объясняю это родителям." },
            { es: "Mis alumnos quieren la respuesta, pero no se la digo.", ru: "Мои ученики хотят ответ, но я им его не говорю." }
          ],
          errores: [
            { mal: "Le lo doy.", bien: "Se lo doy.", por: "**le + lo → se lo**." },
            { mal: "Les la mando.", bien: "Se la mando.", por: "**les + la → se la**." }
          ],
          chequeo: [
            { pide: "Les mando el mensaje a mis amigos. → ___", opciones: ["Se lo mando.", "Les lo mando.", "Lo se mando."], ok: "Se lo mando.", por: "**les + lo → se lo**." }
          ]
        }
      ],
      dialogos: ["DLE-055"],
      vocab: ES12_V["1"]
    },
    {
      id: "es12m2", n: 2, tipo: "leccion",
      titulo: "Dímelo",
      resumen: "Где стоят местоимения: dámelo, no me lo des, voy a dártelo.",
      intro: "Обычно местоимения стоят перед глаголом: **Te lo doy**. Но с утвердительным imperativo, инфинитивом и герундием они **приклеиваются в конец**: **Dámelo**, **Voy a dártelo**.",
      tablas: [
        { titulo: "Dónde van", encabezados: ["Форма", "Пример"], filas: [
          [{ es: "normalmente", ru: "обычно: перед глаголом" }, { es: "Te lo doy. · No te lo doy." }],
          [{ es: "imperativo", ru: "«сделай»" }, { es: "Dámelo." }],
          [{ es: "no + imperativo", ru: "«не делай»" }, { es: "No me lo des." }],
          [{ es: "voy a… · puedo…", ru: "с инфинитивом" }, { es: "Voy a dártelo. = Te lo voy a dar." }],
          [{ es: "gerundio", ru: "герундий" }, { es: "Estoy explicándoselo. = Se lo estoy explicando." }]] }
      ],
      secciones: [
        {
          id: "es12-lugar-imp",
          titulo: "Dámelo · No me lo des",
          texto: "С утвердительным imperativo оба местоимения пишутся **слитно в конце**, в том же порядке:\n**da + me + lo → dámelo**, **di + se + lo → díselo**, **explica + se + la → explícasela**.\nУдарение остаётся на глаголе, поэтому нужен знак: **dámelo, cómpramelo, tráemela**.\nС отрицанием — перед глаголом и раздельно, а глагол в subjuntivo: **No me lo des**, **No se lo digas.**",
          ejemplos: [
            { es: "¿La cuenta? Tráemela, por favor.", ru: "Счёт? Принеси мне его, пожалуйста." },
            { es: "No se lo digas a Marta.", ru: "Не говори этого Марте." },
            { es: "No lo entiendo. Explícamelo otra vez.", ru: "Я этого не понимаю. Объясни мне это ещё раз." }
          ],
          errores: [
            { mal: "Dime lo.", bien: "Dímelo.", por: "С imperativo — слитно и со знаком ударения." },
            { mal: "No dámelo.", bien: "No me lo des.", por: "С **no** — перед глаголом, глагол в subjuntivo." }
          ],
          chequeo: [
            { pide: "Dame la llave. → ___", opciones: ["Dámela.", "Dame la.", "Me la da."], ok: "Dámela.", por: "**da + me + la → dámela**." }
          ]
        },
        {
          id: "es12-lugar-inf",
          titulo: "Voy a dártelo = Te lo voy a dar",
          texto: "С инфинитивом и герундием — два варианта, оба правильные: слитно в конце или перед первым глаголом:\n**Voy a dártelo = Te lo voy a dar.**\n**¿Puedes explicármelo? = ¿Me lo puedes explicar?**\n**Estoy leyéndolo = Lo estoy leyendo.**\nНельзя только разрывать пару: «Te voy a darlo» — ошибка.\nЗнак ударения: **dártelo, explicármelo, diciéndoselo**.",
          ejemplos: [
            { es: "No puedo decírtelo todavía.", ru: "Я пока не могу тебе этого сказать." },
            { es: "Se lo tengo que devolver mañana.", ru: "Я должен вернуть ему это завтра." }
          ],
          errores: [
            { mal: "Te voy a darlo.", bien: "Te lo voy a dar.", por: "Оба местоимения — вместе: или перед, или в конце." }
          ],
          chequeo: [
            { pide: "Te lo voy a explicar. = Voy a ___", opciones: ["explicártelo.", "explicarte lo.", "te lo explicar."], ok: "explicártelo.", por: "В конце — слитно и со знаком." }
          ]
        }
      ],
      dialogos: ["DLE-055"]
    },
    {
      id: "es12m3", n: 3, tipo: "leccion",
      titulo: "El chico que vive aquí",
      resumen: "Который, где, то что: que, quien, donde, lo que.",
      intro: "Как соединить две фразы словом «который»: **el chico que vive aquí**. Главное слово — **que**; ещё **quien**, **donde** и **lo que** («то, что»).",
      secciones: [
        {
          id: "es12-que-quien",
          titulo: "Que, quien, donde",
          texto: "**que** — «который» для людей и вещей; не меняется: **la chica que vive aquí**, **el libro que leo**, **los amigos que tengo**.\nПосле предлога о человеке — **quien / quienes** (или **el que / la que**): **la chica con quien vivo**, **el amigo del que te hablé**.\nО месте — **donde**: **el bar donde trabajo**.\n**que** нельзя опустить, и перед ним обычно нет запятой.",
          comparacion: "«Который» меняется по родам, числам и падежам: «которая, которого, с которыми». **Que** — одно слово на все случаи.",
          ejemplos: [
            { es: "El piso que he alquilado es pequeño.", ru: "Квартира, которую я снял, маленькая." },
            { es: "Es la profesora con quien estudio español.", ru: "Это преподавательница, с которой я учу испанский." },
            { es: "Este es el pueblo donde nací.", ru: "Это деревня, где я родился." }
          ],
          errores: [
            { mal: "La chica quien vive aquí.", bien: "La chica que vive aquí.", por: "Без предлога — **que**, даже о человеке." }
          ],
          chequeo: [
            { pide: "Es el amigo con ___ voy al gimnasio.", opciones: ["quien", "lo que", "donde"], ok: "quien", por: "После предлога о человеке — **quien**." }
          ]
        },
        {
          id: "es12-lo-que",
          titulo: "Lo que",
          texto: "**lo que** — «то, что»: когда нет слова, к которому относится «который».\n**No entiendo lo que dices.** — Не понимаю (того), что ты говоришь.\n**Lo que más me gusta es viajar.**\n**Haz lo que quieras.** — Делай что хочешь.\nСравни: **el libro que quiero** (книга, которую хочу) — **lo que quiero** (то, чего я хочу).\n**el que / la que / los que / las que** — «тот, который»: **¿Qué camisa? — La que está en la silla.**",
          ejemplos: [
            { es: "Eso es lo que pienso.", ru: "Это то, что я думаю." },
            { es: "Lo que dices es muy interesante.", ru: "То, что ты говоришь, очень интересно." },
            { es: "Los que quieran venir, pueden venir.", ru: "Те, кто захочет прийти, могут прийти." }
          ],
          errores: [
            { mal: "No entiendo que dices.", bien: "No entiendo lo que dices.", por: "«То, что» — **lo que**." }
          ],
          chequeo: [
            { pide: "___ más me gusta de Madrid es la gente.", opciones: ["Lo que", "Que", "Quien"], ok: "Lo que", por: "«То, что больше всего…» — **lo que**." }
          ]
        }
      ],
      dialogos: ["DLE-056"],
      vocab: ES12_V["3"]
    },
    {
      id: "es12m4", n: 4, tipo: "leccion",
      titulo: "Por eso, aunque…",
      resumen: "Причина, следствие, противопоставление.",
      intro: "Чтобы спорить, нужны связки: **почему** (porque, como, ya que), **и поэтому** (por eso, así que), **но всё-таки** (aunque, sin embargo).",
      tablas: [
        { titulo: "Conectores", encabezados: ["Зачем", "Слова"], filas: [
          [{ es: "causa", ru: "причина" }, { es: "porque · como · ya que · gracias a · debido a · a causa de" }],
          [{ es: "consecuencia", ru: "следствие" }, { es: "por eso · así que · por lo tanto" }],
          [{ es: "pero…", ru: "противопоставление" }, { es: "pero · aunque · sin embargo · mientras que · en cambio" }],
          [{ es: "explicar", ru: "пояснить" }, { es: "es decir · o sea" }]] }
      ],
      secciones: [
        {
          id: "es12-causa",
          titulo: "Porque, como, ya que",
          texto: "**porque** — в середине: **No voy porque estoy cansado.**\n**como** — в начале: **Como estoy cansado, no voy.**\n**ya que** — «поскольку», чуть официальнее: **Ya que estás aquí, ayúdame.**\nС существительным: **gracias a** (хорошая причина), **debido a**, **a causa de** (нейтральная или плохая): **Gracias a ti he aprobado.** **Llegué tarde a causa del tráfico.**\nСлова: **la causa**, **el motivo** — причина.",
          ejemplos: [
            { es: "Como no tenía dinero, no fui al concierto.", ru: "Так как у меня не было денег, я не пошёл на концерт." },
            { es: "He conseguido el trabajo gracias a mi profesora.", ru: "Я получил работу благодаря моей преподавательнице." }
          ],
          errores: [
            { mal: "Gracias de ti he aprobado.", bien: "Gracias a ti he aprobado.", por: "**gracias a** + кто / что." }
          ],
          chequeo: [
            { pide: "___ llueve, nos quedamos en casa.", opciones: ["Como", "Por eso", "Así que"], ok: "Como", por: "Причина в начале фразы — **como**." }
          ]
        },
        {
          id: "es12-consecuencia",
          titulo: "Por eso, así que, por lo tanto",
          texto: "**por eso** — поэтому: **Estoy cansado, por eso no voy.**\n**así que** — так что (в разговоре): **Llueve, así que me quedo en casa.**\n**por lo tanto** — следовательно (в тексте, в письме).\nСлова: **la consecuencia** — последствие, **el efecto** — эффект.\n**es decir**, **o sea** — «то есть»: **Vive lejos, es decir, a una hora del centro.**",
          ejemplos: [
            { es: "No tenemos coche, así que vamos en tren.", ru: "У нас нет машины, так что едем на поезде." },
            { es: "El precio ha subido; por lo tanto, compramos menos.", ru: "Цена выросла; следовательно, мы покупаем меньше." }
          ],
          chequeo: [
            { pide: "No tengo dinero, ___ no puedo viajar.", opciones: ["por eso", "porque", "aunque"], ok: "por eso", por: "Следствие — **por eso**." }
          ]
        },
        {
          id: "es12-contraste",
          titulo: "Aunque, sin embargo, mientras que",
          texto: "**sin embargo** — однако (после точки или точки с запятой): **Es caro. Sin embargo, es muy bueno.**\n**mientras que**, **en cambio** — сравнение двух вещей: **Yo trabajo, mientras que tú descansas.**\n**aunque** + обычное время — «хотя» (это факт): **Aunque llueve, salgo.** — дождь идёт.\n**aunque** + subjuntivo — «даже если» (неизвестно): **Aunque llueva, saldré.**\nСравнивать: **comparar**, **la comparación**; **parecido** — похожий, **distinto** — другой, **contrario** — противоположный.",
          comparacion: "«Хотя» и «даже если» — в русском два слова. В испанском одно **aunque**, а разницу делает наклонение.",
          ejemplos: [
            { es: "Aunque es caro, lo voy a comprar.", ru: "Хотя это дорого, я его куплю." },
            { es: "Aunque sea caro, lo compraré.", ru: "Даже если это будет дорого, я его куплю." },
            { es: "Mi hermano es muy callado; yo, en cambio, hablo mucho.", ru: "Мой брат очень молчаливый, а я, наоборот, много говорю." }
          ],
          errores: [
            { mal: "Aunque lloverá, iré.", bien: "Aunque llueva, iré.", por: "«Даже если» — **aunque** + subjuntivo, не futuro." }
          ],
          chequeo: [
            { pide: "Aunque mañana ___ frío, iremos. (ещё не знаем)", opciones: ["haga", "hace", "hará"], ok: "haga", por: "Неизвестно — subjuntivo: **haga**." }
          ]
        }
      ],
      dialogos: ["DLE-057"],
      vocab: ES12_V["4"]
    },
    {
      id: "es12m5", n: 5, tipo: "leccion",
      titulo: "¿Por o para?",
      resumen: "Por — причина и путь; para — цель и адресат.",
      intro: "Обе могут переводиться «для», «за», «на». Подсказка: **para** смотрит **вперёд** — на цель и адресата; **por** смотрит **назад и вокруг** — на причину и путь.",
      tablas: [
        { titulo: "Para", encabezados: ["Что", "Пример"], filas: [
          [{ es: "objetivo", ru: "цель" }, { es: "Estudio para aprobar.", ru: "Учусь, чтобы сдать." }],
          [{ es: "para quién", ru: "для кого" }, { es: "Este regalo es para ti.", ru: "Этот подарок — тебе." }],
          [{ es: "hacia dónde", ru: "куда" }, { es: "Salgo para Madrid.", ru: "Уезжаю в Мадрид." }],
          [{ es: "plazo", ru: "срок" }, { es: "Es para el lunes.", ru: "Это к понедельнику." }],
          [{ es: "opinión", ru: "мнение" }, { es: "Para mí, es fácil.", ru: "По-моему, это легко." }]] },
        { titulo: "Por", encabezados: ["Что", "Пример"], filas: [
          [{ es: "causa", ru: "причина" }, { es: "Gracias por tu ayuda.", ru: "Спасибо за помощь." }],
          [{ es: "camino", ru: "путь" }, { es: "Camino por el parque.", ru: "Иду по парку." }],
          [{ es: "medio", ru: "средство" }, { es: "Hablamos por teléfono.", ru: "Говорим по телефону." }],
          [{ es: "precio", ru: "цена, обмен" }, { es: "Lo compré por diez euros.", ru: "Купил за десять евро." }],
          [{ es: "tiempo", ru: "время" }, { es: "Trabajo por la mañana.", ru: "Работаю утром." }]] }
      ],
      secciones: [
        {
          id: "es12-para",
          titulo: "Para: цель и адресат",
          texto: "**para** отвечает на «зачем?», «для кого?», «куда?», «к какому сроку?»:\n**Ahorro para viajar.** — цель.\n**Es para mi madre.** — адресат.\n**El tren para Madrid.** — направление.\n**Los deberes son para mañana.** — срок.\n**Para mí, es una buena idea.** — мнение.",
          ejemplos: [
            { es: "Necesito el ordenador para trabajar.", ru: "Мне нужен компьютер для работы." },
            { es: "¿Para qué sirve esto?", ru: "Для чего это нужно?" }
          ],
          errores: [
            { mal: "Estudio por aprobar el examen.", bien: "Estudio para aprobar el examen.", por: "Цель — **para** + инфинитив." }
          ],
          chequeo: [
            { pide: "Este café es ___ ti.", opciones: ["para", "por"], ok: "para", por: "Адресат — **para**." }
          ]
        },
        {
          id: "es12-por",
          titulo: "Por: причина и путь",
          texto: "**por** отвечает на «почему?», «из-за чего?», «где, через что?», «как, чем?», «за сколько?»:\n**No salimos por la lluvia.** — причина.\n**Gracias por venir.**\n**Pasamos por el centro.** — путь.\n**Te lo mando por correo.** — средство.\n**Lo vendo por cien euros.** — цена.\n**por la mañana**, **por favor**, **por ciento**, **por eso**, **por ejemplo** — готовые выражения.",
          comparacion: "Сравни: **Lo hago por ti** — ради тебя, из-за тебя (причина). **Lo hago para ti** — для тебя, тебе (адресат).",
          ejemplos: [
            { es: "Te llamo por teléfono esta noche.", ru: "Позвоню тебе сегодня вечером." },
            { es: "Lo siento, es por mi culpa.", ru: "Прости, это из-за меня." }
          ],
          errores: [
            { mal: "Gracias para tu ayuda.", bien: "Gracias por tu ayuda.", por: "Причина благодарности — **por**." }
          ],
          chequeo: [
            { pide: "Caminamos ___ la playa.", opciones: ["por", "para"], ok: "por", por: "Путь, место движения — **por**." }
          ]
        },
        {
          id: "es12-otras-prep",
          titulo: "Sobre, según, contra",
          texto: "**sobre** — «о, про» и «на»: **un libro sobre España**, **hablar sobre un tema**; **sobre la mesa**.\n**según** — «согласно, по словам»: **según el periódico**, **según mi madre**. После него — **tú, yo**: **según tú**.\n**contra** — против: **protestar contra los impuestos**; **en contra de** ↔ **a favor de**: **Estoy en contra.**",
          ejemplos: [
            { es: "Según una encuesta, la mayoría está a favor.", ru: "Согласно опросу, большинство — за." },
            { es: "Es un artículo sobre el cambio climático.", ru: "Это статья об изменении климата." }
          ]
        }
      ],
      vocab: ES12_V["5"]
    },
    {
      id: "es12m6", n: 6, tipo: "leccion",
      titulo: "Se habla español",
      resumen: "Se: «говорят», «продаётся», «можно».",
      intro: "Когда неважно, **кто** делает: **Aquí se habla español** — здесь говорят по-испански. **Se vende piso** — продаётся квартира.",
      secciones: [
        {
          id: "es12-se-impersonal",
          titulo: "Se dice, se puede, se vive",
          texto: "**se** + глагол в 3-м лице ед. ч. — «люди вообще»:\n**En España se cena tarde.** — В Испании ужинают поздно.\n**¿Cómo se dice…?** — Как сказать…?\n**¿Se puede entrar?** — Можно войти?\n**Aquí se vive bien.** — Здесь хорошо живётся.",
          ejemplos: [
            { es: "¿Cómo se escribe tu apellido?", ru: "Как пишется твоя фамилия?" },
            { es: "Aquí no se puede fumar.", ru: "Здесь нельзя курить." },
            { es: "En este restaurante se come muy bien.", ru: "В этом ресторане очень хорошо кормят." }
          ],
          chequeo: [
            { pide: "En mi país se ___ mucho té. (beber)", opciones: ["bebe", "beben se", "bebemos"], ok: "bebe", por: "**se bebe** — «пьют»." }
          ]
        },
        {
          id: "es12-se-pasiva",
          titulo: "Se vende piso · Se venden pisos",
          texto: "Если есть **что** (продаётся, сдаётся, ищется), глагол согласуется с этим словом:\n**Se vende piso.** — **Se venden pisos.**\n**Se alquila habitación.** — **Se alquilan habitaciones.**\n**Se busca camarero.** — **Se necesitan camareros.**\nТак пишут объявления и вывески (**el cartel**): **Se prohíbe fumar**, **Prohibido aparcar**, **Entrada libre**.",
          comparacion: "Как русское «-ся»: «продаётся квартира — продаются квартиры».",
          ejemplos: [
            { es: "Se alquilan bicicletas por horas.", ru: "Велосипеды сдаются по часам." },
            { es: "En esta tienda se hablan tres idiomas.", ru: "В этом магазине говорят на трёх языках." }
          ],
          errores: [
            { mal: "Se vende pisos.", bien: "Se venden pisos.", por: "**pisos** — мн. ч.: **se venden**." }
          ],
          chequeo: [
            { pide: "Se ___ profesores de inglés.", opciones: ["buscan", "busca", "buscamos"], ok: "buscan", por: "**profesores** — мн. ч.: **se buscan**." }
          ]
        }
      ],
      vocab: ES12_V["6"]
    },
    {
      id: "es12m7", n: 7, tipo: "leccion",
      titulo: "Es listo, está listo",
      resumen: "Прилагательные, которые меняют смысл с ser и estar.",
      intro: "Некоторые прилагательные меняют смысл с **ser** и **estar**. **Es listo** — он умный. **Está listo** — он готов.",
      tablas: [
        { titulo: "Ser / estar", encabezados: ["Ser", "Estar"], filas: [
          [{ es: "ser listo", ru: "умный" }, { es: "estar listo", ru: "готов" }],
          [{ es: "ser aburrido", ru: "скучный" }, { es: "estar aburrido", ru: "скучает" }],
          [{ es: "ser malo", ru: "плохой" }, { es: "estar malo", ru: "болен" }],
          [{ es: "ser rico", ru: "богатый" }, { es: "estar rico", ru: "вкусный" }],
          [{ es: "ser vivo", ru: "сообразительный" }, { es: "estar vivo", ru: "жив" }],
          [{ es: "ser despierto", ru: "сообразительный" }, { es: "estar despierto", ru: "не спит" }],
          [{ es: "ser atento", ru: "любезный" }, { es: "estar atento", ru: "внимателен (сейчас)" }],
          [{ es: "ser callado", ru: "молчаливый" }, { es: "estar callado", ru: "молчит" }],
          [{ es: "ser abierto", ru: "открытый (человек)" }, { es: "estar abierto", ru: "открыт" }],
          [{ es: "ser seguro", ru: "безопасный" }, { es: "estar seguro", ru: "уверен" }]] }
      ],
      secciones: [
        {
          id: "es12-ser-estar-cambio",
          titulo: "Ser — какой он; estar — как он сейчас",
          texto: "**ser** + прилагательное — какой человек или вещь **вообще** (характер, качество). **estar** — **состояние** сейчас или результат.\nС некоторыми словами от этого меняется перевод:\n**Es listo** (умный) — **Está listo** (готов).\n**Es malo** (плохой) — **Está malo** (болен).\n**Es rico** (богатый) — **La sopa está rica** (вкусный).\n**Es consciente de** — осознаёт; **está consciente** — в сознании.\n**está interesado en** — заинтересован в чём-то.",
          ejemplos: [
            { es: "Mi hermana es muy lista: lo aprende todo rápido.", ru: "Моя сестра очень умная: всё быстро учит." },
            { es: "¿Estáis listos? ¡Nos vamos!", ru: "Вы готовы? Поехали!" },
            { es: "No estoy seguro de eso.", ru: "Я в этом не уверен." }
          ],
          errores: [
            { mal: "Soy listo, ¡vamos!", bien: "Estoy listo, ¡vamos!", por: "«Готов» — **estar listo**." }
          ],
          chequeo: [
            { pide: "La tortilla ___ muy rica.", opciones: ["está", "es"], ok: "está", por: "«Вкусный» — **estar rico**." }
          ]
        },
        {
          id: "es12-ser-estar-repaso",
          titulo: "Ser и estar: всё вместе",
          texto: "**ser**: кто и что (**Es médico**), какой (**Es alto**), откуда (**Es de Rusia**), время (**Son las dos**), где и когда **событие**: **La fiesta es en mi casa.**\n**estar**: где находится (**Está en casa**), состояние (**Está cansado**), результат (**Está roto, está cerrado**), **estar** + gerundio.\nВсегда с **estar**: **estar de acuerdo**, **estar a favor / en contra**, **estar seguro**.",
          ejemplos: [
            { es: "La reunión es en la oficina, pero el jefe está en casa.", ru: "Совещание — в офисе, но начальник дома." },
            { es: "La tienda está cerrada los domingos.", ru: "Магазин закрыт по воскресеньям." }
          ],
          errores: [
            { mal: "La fiesta está en mi casa.", bien: "La fiesta es en mi casa.", por: "Где проходит событие — **ser**." }
          ],
          chequeo: [
            { pide: "El concierto ___ en la plaza.", opciones: ["es", "está"], ok: "es", por: "Событие — **ser**." }
          ]
        }
      ],
      vocab: ES12_V["7"]
    },
    {
      id: "es12m8", n: 8, tipo: "leccion",
      titulo: "En mi opinión…",
      resumen: "Высказать мнение, согласиться, возразить.",
      intro: "Как сказать, что ты думаешь, согласиться или вежливо возразить — и как построить рассуждение от первого довода до вывода.",
      tablas: [
        { titulo: "Opinar", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "En mi opinión…", ru: "По-моему…" }, { es: "Desde mi punto de vista…", ru: "С моей точки зрения…" }],
          [{ es: "Estoy de acuerdo.", ru: "Я согласен." }, { es: "No estoy de acuerdo.", ru: "Я не согласен." }],
          [{ es: "Tienes razón, pero…", ru: "Ты прав, но…" }, { es: "No estoy tan seguro.", ru: "Я не так уверен." }],
          [{ es: "Estoy a favor de…", ru: "Я за…" }, { es: "Estoy en contra de…", ru: "Я против…" }]] },
        { titulo: "Ordenar las ideas", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "En primer lugar…", ru: "Во-первых…" }, { es: "Además…", ru: "Кроме того…" }],
          [{ es: "Por un lado…", ru: "С одной стороны…" }, { es: "Por otro lado…", ru: "С другой стороны…" }],
          [{ es: "Por ejemplo…", ru: "Например…" }, { es: "Es decir…", ru: "То есть…" }],
          [{ es: "En conclusión…", ru: "В заключение…" }, { es: "En resumen…", ru: "Короче говоря…" }]] }
      ],
      secciones: [
        {
          id: "es12-opinar",
          titulo: "Creo que… No estoy de acuerdo",
          texto: "Спросить мнение: **¿Qué opinas de…?**, **¿Qué piensas?**, **¿Estás de acuerdo?**\nСказать своё: **En mi opinión…**, **Para mí…**, **Desde mi punto de vista…**, **Creo que…**\nСогласиться: **Estoy de acuerdo (contigo)**, **Tienes razón**, **Es verdad**, **Totalmente de acuerdo.**\nВозразить мягко: **Tienes razón, pero…**, **No estoy tan seguro**, **Yo lo veo de otra manera.**\n**Estoy a favor de… / en contra de…** — я за… / против…\nИ помни: **Creo que es…**, но **No creo que sea…**",
          ejemplos: [
            { es: "¿Qué opinas de las redes sociales?", ru: "Что ты думаешь о соцсетях?" },
            { es: "Estoy de acuerdo contigo, pero no totalmente.", ru: "Я с тобой согласен, но не полностью." },
            { es: "No creo que sea una buena idea.", ru: "Не думаю, что это хорошая идея." }
          ],
          errores: [
            { mal: "Soy de acuerdo.", bien: "Estoy de acuerdo.", por: "**de acuerdo** — всегда с **estar**." },
            { mal: "Estoy de acuerdo de ti.", bien: "Estoy de acuerdo contigo.", por: "Согласен **с** кем-то — **con**: **contigo**." }
          ],
          chequeo: [
            { pide: "Desde mi punto de ___ , es un error.", opciones: ["vista", "opinión", "lado"], ok: "vista", por: "**punto de vista** — точка зрения." }
          ]
        },
        {
          id: "es12-ordenar-ideas",
          titulo: "En primer lugar… En conclusión…",
          texto: "Текст-рассуждение строится так:\n1) тема: **Hoy en día mucha gente…**;\n2) доводы: **En primer lugar…**, **además…**;\n3) другая сторона: **Por un lado… por otro lado…**, **sin embargo…**;\n4) пример: **por ejemplo…**;\n5) вывод: **En conclusión…**, **En resumen…**\nСлова: **el argumento** — довод; **la ventaja** ↔ **el inconveniente**; **el tema**, **la cuestión**; **defender una postura** — отстаивать позицию; **convencer** — убедить; **criticar** ↔ **apoyar**; **exagerar** — преувеличивать.",
          ejemplos: [
            { es: "Por un lado, es más barato; por otro lado, es más lento.", ru: "С одной стороны, это дешевле; с другой — медленнее." },
            { es: "En conclusión, creo que tiene más ventajas que inconvenientes.", ru: "В заключение: думаю, что плюсов больше, чем минусов." }
          ],
          chequeo: [
            { pide: "Me gustan los deportes, ___ , el tenis.", opciones: ["por ejemplo", "por eso", "por lo tanto"], ok: "por ejemplo", por: "Пример — **por ejemplo**." }
          ]
        }
      ],
      frases: ["FRE-154", "FRE-155", "FRE-157", "FRE-158"],
      dialogos: ["DLE-058"],
      vocab: ES12_V["8"]
    },
    {
      id: "es12m9", n: 9, tipo: "leccion",
      titulo: "Las noticias",
      resumen: "Новости, общество, цифры.",
      intro: "Слова, чтобы читать новости и говорить об обществе: **la noticia**, **el periódico**, **el gobierno**, **los ciudadanos** — и как сказать, что чего-то стало больше или меньше.",
      tablas: [
        { titulo: "Los medios", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la noticia", ru: "новость" }, { es: "el periódico", ru: "газета" }],
          [{ es: "la prensa", ru: "пресса" }, { es: "la radio", ru: "радио" }],
          [{ es: "el canal", ru: "канал" }, { es: "el programa", ru: "программа" }],
          [{ es: "el titular", ru: "заголовок" }, { es: "el artículo", ru: "статья" }],
          [{ es: "la encuesta", ru: "опрос" }, { es: "el dato", ru: "данные, факт" }],
          [{ es: "la cifra", ru: "цифра" }, { es: "el porcentaje", ru: "процент" }]] },
        { titulo: "La sociedad", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la sociedad", ru: "общество" }, { es: "el gobierno", ru: "правительство" }],
          [{ es: "la política", ru: "политика" }, { es: "el ciudadano", ru: "гражданин" }],
          [{ es: "el presidente", ru: "президент" }, { es: "el alcalde", ru: "мэр" }],
          [{ es: "la libertad", ru: "свобода" }, { es: "la igualdad", ru: "равенство" }],
          [{ es: "la justicia", ru: "справедливость" }, { es: "el impuesto", ru: "налог" }],
          [{ es: "votar", ru: "голосовать" }, { es: "la manifestación", ru: "демонстрация" }]] }
      ],
      secciones: [
        {
          id: "es12-noticias",
          titulo: "Según una encuesta…",
          texto: "В новостях: **el titular** — заголовок; **el artículo** — статья; **publicar** — публиковать; **los medios (de comunicación)** — СМИ.\n**según** — источник: **según una encuesta**, **según los datos**.\nПроценты — с артиклем: **el 20 por ciento de los jóvenes**.\n**la mayoría de** — большинство: **La mayoría de la gente piensa que…**\n**el estudio** — исследование: **Un estudio dice que…**",
          ejemplos: [
            { es: "Según el periódico, el alcalde quiere subir los impuestos.", ru: "По сообщению газеты, мэр хочет поднять налоги." },
            { es: "El 60 por ciento de los ciudadanos está en contra.", ru: "60 процентов граждан — против." }
          ],
          chequeo: [
            { pide: "___ 30 por ciento de los alumnos trabaja.", opciones: ["El", "Un el", "Los"], ok: "El", por: "Проценты — с артиклем **el**." }
          ]
        },
        {
          id: "es12-sociedad",
          titulo: "Aumenta, disminuye, depende",
          texto: "Что меняется: **aumentar** — расти, **disminuir** — уменьшаться; **mejorar** ↔ **empeorar**.\n**El coste de la vida ha aumentado.**\n**afectar a** — затрагивать: **La crisis afecta a todos.**\n**depender de** — зависеть **от**: **Depende del gobierno.** Одно слово **Depende.** — «смотря как».\n**protestar contra** — протестовать против; **votar a** — голосовать за кого-то.\n**mundial**, **nacional**, **internacional**; **los habitantes** — жители; **la población** — население.",
          ejemplos: [
            { es: "El tráfico ha disminuido en el centro.", ru: "Движение в центре уменьшилось." },
            { es: "Todo depende de la economía.", ru: "Всё зависит от экономики." }
          ],
          errores: [
            { mal: "Depende en el precio.", bien: "Depende del precio.", por: "**depender de**." }
          ],
          chequeo: [
            { pide: "El precio de la vivienda ha ___ : ahora es más caro.", opciones: ["aumentado", "disminuido", "votado"], ok: "aumentado", por: "**aumentar** — расти." }
          ]
        }
      ],
      frases: ["FRE-156"],
      dialogos: ["DLE-058"],
      vocab: ES12_V["9"],
      ampliacion: {
        titulo: "Ещё об обществе",
        intro: "Эти слова не входят в проверку урока. **la pobreza** — бедность; **la riqueza** — богатство; **la desigualdad** — неравенство; **la violencia** — насилие; **el conflicto** — конфликт; **la inmigración** — иммиграция.",
        vocab: ES12_V["a9"]
      }
    },
    {
      id: "es12m10", n: 10, tipo: "leccion",
      titulo: "El planeta y la tecnología",
      resumen: "Природа, экология, технологии.",
      intro: "Две темы, о которых спорят все: **el medio ambiente** — окружающая среда — и **la tecnología**.",
      tablas: [
        { titulo: "El medio ambiente", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la naturaleza", ru: "природа" }, { es: "el clima", ru: "климат" }],
          [{ es: "la contaminación", ru: "загрязнение" }, { es: "el cambio climático", ru: "изменение климата" }],
          [{ es: "el reciclaje", ru: "переработка" }, { es: "los residuos", ru: "отходы" }],
          [{ es: "el plástico", ru: "пластик" }, { es: "la energía renovable", ru: "возобновляемая энергия" }],
          [{ es: "proteger", ru: "защищать" }, { es: "destruir", ru: "разрушать" }]] },
        { titulo: "La tecnología", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la pantalla", ru: "экран" }, { es: "la batería", ru: "аккумулятор" }],
          [{ es: "la red social", ru: "соцсеть" }, { es: "el seguidor", ru: "подписчик" }],
          [{ es: "el enlace", ru: "ссылка" }, { es: "el vídeo", ru: "видео" }],
          [{ es: "la inteligencia artificial", ru: "искусственный интеллект" }, { es: "la máquina", ru: "машина" }],
          [{ es: "digital", ru: "цифровой" }, { es: "virtual", ru: "виртуальный" }]] }
      ],
      secciones: [
        {
          id: "es12-medio-ambiente",
          titulo: "Proteger el medio ambiente",
          texto: "Проблемы: **la contaminación**, **el cambio climático**, **los residuos**. Что происходит: **contaminar**, **destruir**, **desaparecer**; **provocar**, **causar** — вызывать.\nЧто можно сделать: **reciclar** (el plástico, el papel), **ahorrar agua y energía**, **consumir menos**, **reducir** — сократить, **evitar** — избегать, **proteger la naturaleza**, **salvar** — спасти.\n**sostenible**, **ecológico** — экологичный; **las energías renovables**: **la energía solar**; **un coche eléctrico**.",
          ejemplos: [
            { es: "Reciclamos para proteger el medio ambiente.", ru: "Мы сдаём отходы на переработку, чтобы беречь окружающую среду." },
            { es: "Los coches eléctricos no usan gasolina.", ru: "Электромобили не используют бензин." },
            { es: "Muchos animales pueden desaparecer.", ru: "Многие животные могут исчезнуть." }
          ],
          chequeo: [
            { pide: "El sol y el viento son energías ___ .", opciones: ["renovables", "artificiales", "digitales"], ok: "renovables", por: "**energías renovables** — возобновляемые." }
          ]
        },
        {
          id: "es12-tecnologia",
          titulo: "Conectados",
          texto: "**estar conectado** — быть на связи, в сети; **conectar** — подключать.\nВ соцсетях: **publicar una foto**, **compartir un vídeo**, **mandar un enlace**, **tener seguidores**.\n**la privacidad** — конфиденциальность; **los datos** — данные.\nПрогресс: **el avance**, **el progreso**, **el desarrollo**; **inventar** → **el invento**; **descubrir** → **el descubrimiento**; **científico** — научный и учёный.\n**la inteligencia artificial**; **tecnológico**, **digital**, **virtual**.",
          ejemplos: [
            { es: "Paso demasiado tiempo delante de la pantalla.", ru: "Я провожу слишком много времени перед экраном." },
            { es: "Internet es el invento más importante del siglo.", ru: "Интернет — самое важное изобретение века." }
          ],
          chequeo: [
            { pide: "Te mando el ___ del vídeo.", opciones: ["enlace", "avance", "recurso"], ok: "enlace", por: "**el enlace** — ссылка." }
          ]
        }
      ],
      dialogos: ["DLE-059"],
      vocab: ES12_V["10"],
      ampliacion: {
        titulo: "Ещё о природе и технике",
        intro: "Эти слова не входят в проверку урока. **la especie** — вид (животных, растений); **la destrucción** — разрушение; **el calentamiento global** — глобальное потепление; **el dispositivo** — устройство.",
        vocab: ES12_V["a10"]
      }
    },
    {
      id: "es12m11", n: 11, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Одолженный учебник, девушка Пабло, спор о машине, новость о центре без машин и соцсети. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-055", "DLE-056", "DLE-057", "DLE-058", "DLE-059"]
    },
    {
      id: "es12m12", n: 12, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Спор по ролям и текст-рассуждение.",
      intro: "Две части. **Разговор по ролям:** Хавьер спрашивает твоё мнение, Марта с тобой не согласна, а Лусия в чате просит одолжить велосипед. **Потом напиши** рассуждение (12–16 фраз) на одну из тем: соцсети, город без машин, работа из дома, учить языки по интернету. Назови тему и своё мнение, дай два довода «за» и один «против», пример и вывод. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Мнение (en mi opinión, creo que, para mí…)", rx: "\\b(en mi opinión|desde mi punto de vista|para mí|creo que|pienso que|me parece que|opino que)" },
        { txt: "Довод «за» (en primer lugar, por un lado, ventaja…)", rx: "\\b(en primer lugar|por un lado|ventaja|ventajas|a favor|además)\\b" },
        { txt: "Довод «против» (por otro lado, sin embargo, aunque…)", rx: "\\b(por otro lado|sin embargo|aunque|en contra|inconveniente|inconvenientes|desventaja|desventajas|en cambio)\\b" },
        { txt: "Причина или следствие (porque, por eso, así que…)", rx: "\\b(porque|ya que|como|por eso|por lo tanto|gracias a|debido a|a causa de)\\b|\\basí que\\b" },
        { txt: "Пример (por ejemplo)", rx: "\\bpor ejemplo\\b" },
        { txt: "Lo que, donde, quien или el que / la que", rx: "\\b(lo que|donde|quien|quienes|el que|la que|los que|las que)\\b" },
        { txt: "Вывод (en conclusión, en resumen)", rx: "\\b(en conclusión|en resumen|por eso creo|por lo tanto)" },
        { txt: "Не меньше 12 фраз", fn: t => azFrases(t).length >= 12 }
      ],
      consejos: [
        { rx: "\\b(le|les) (lo|la|los|las) (?!que\\b)[a-záéíóúñ]+", msg: "**le / les** перед **lo, la, los, las** → **se**: **se lo doy**, **se la mando**." },
        { rx: "\\b(dime|dame|tráeme|déjame|mándame|explícame|cómprame) (lo|la|los|las)(?=\\s*([.,;!?]|$))", msg: "С imperativo местоимения пишутся слитно: **dímelo, dámela, explícamelo**." },
        { rx: "\\bse (venden|alquilan|buscan|necesitan) (un|una|piso|coche|casa|habitación)\\b|\\bse (vende|alquila|busca|necesita) (pisos|coches|casas|habitaciones|camareros|profesores)\\b", msg: "Глагол согласуется: **se vende piso** — **se venden pisos**." },
        { rx: "\\bgracias para\\b", msg: "Причина благодарности — **por**: **gracias por…**" },
        { rx: "\\bpor mi opinión\\b|\\ben mi punto de vista\\b|\\bpor mí,? (es|creo|pienso)\\b", msg: "**En mi opinión…**, **Desde mi punto de vista…**, **Para mí…**" },
        { rx: "\\b(soy|eres|es|somos|son) de acuerdo\\b|\\bestoy acuerdo\\b", msg: "**estar de acuerdo**: **estoy de acuerdo**." },
        { rx: "\\bno (creo|pienso) que (es|está|están|son|tiene|tienen|hay|puede|pueden)(?![a-záéíóúñ])", msg: "**no creo que** + subjuntivo: **sea, esté, tenga, haya, pueda**." },
        { rx: "\\bdepende (en|a|con)\\b", msg: "**depender de**: **depende del precio**." },
        { rx: "\\b(más mejor|más peor)\\b", msg: "**mejor**, **peor** — без **más**." },
        { fn: t => t.length < 200 || /\b(sin embargo|aunque|pero|por otro lado|en cambio|en contra|inconveniente)/i.test(t) ? [] : ["Добавь довод «против»: **sin embargo…**, **por otro lado…**, **aunque…**"] },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es12m13", n: 13, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Местоимения, связки, por / para, se, мнение.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Два местоимения", tipos: ["combinados", "combinados-forma", "lugar-pron"], n: 4 },
        { nombre: "Связки", tipos: ["relativo", "conector", "aunque", "por-para"], n: 4 },
        { nombre: "Se, ser и estar", tipos: ["se-impersonal", "se-forma", "ser-estar", "error"], n: 4 },
        { nombre: "Мнение и темы", tipos: ["opinion", "medios", "planeta"], n: 4 },
        { nombre: "Общение", tipos: ["pregunta", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs12Modulo(id) { return UNIDAD_ES_12.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_12 = UNIDAD_ES_12;
window.unidadEs12Modulo = unidadEs12Modulo;

/* ── Vocabulario: palabras → IDs ── */
const ES12_ID_FIJO = {};
function es12Id(w) {
  if (ES12_ID_FIJO[w]) return ES12_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es12Vocab(m) { return (m.vocab || []).map(es12Id).filter(Boolean); }
function es12Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es12Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U12 (sin las que ya enseñaron la U1 a la U11, ni la ampliación) */
function es12Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_12.modulos.forEach(m => es12Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs12() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es12Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const llenar = (frase, ok) => es12Mayus(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES12-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES12-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  const transformar = (pref, tipo, lista, dif) => lista.forEach(([pide, frase, oks, exp, mod, regla], i) => {
    out.push({ id: "ES12-" + pref + "-" + i, tipo, forma: "escribir", dificultad: dif, modulo: mod, regla, grupo: pref + "-" + i,
      pide, grande: frase, esperadas: oks, idioma: "es", foco: true, formaCasi: false, oir: oks[0], explicacion: exp });
  });

  /* 1. Pronombres combinados y su lugar */
  elegir("cb", "combinados", ES12_COMB, 1, "es12-combinados", "Как сказать с двумя местоимениями?", 2, 11);
  transformar("lp", "lugar-pron", ES12_LUGAR, 3);
  /* 2. Relativos, conectores, por / para */
  elegir("rl", "relativo", ES12_REL, 3, "es12-que-quien", "Что подходит?", 2, 21);
  transformar("ru", "relativo", ES12_REL_UNIR, 3);
  transformar("cu", "conector", ES12_CON_UNIR, 3);
  escribirFalta("pw", "por-para", ES12_PORPARA_ESC, "Впиши por или para.");
  escribirFalta("sw", "ser-estar", ES12_SERESTAR_ESC, "Впиши ser или estar в нужной форме.");
  elegir("cn", "conector", ES12_CONECTOR, 4, "es12-causa", "Какая связка подходит?", 2, 31);
  elegir("aq", "aunque", ES12_AUNQUE, 4, "es12-contraste", "«Хотя» или «даже если»?", 2, 41);
  elegir("pp", "por-para", ES12_PORPARA, 5, "es12-por", "Por или para?", 2, 51);
  /* 3. Se; ser y estar */
  elegir("si", "se-impersonal", ES12_SE, 6, "es12-se-pasiva", "Что подходит?", 2, 61);
  escribirFalta("sf", "se-forma", ES12_SE_ESC, "Впиши глагол в нужной форме.");
  elegir("sy", "ser-estar", ES12_SERESTAR, 7, "es12-ser-estar-cambio", "Ser или estar?", 2, 71);
  /* 4. Opinión y temas */
  elegir("op", "opinion", ES12_OPINION, 8, "es12-opinar", "Что подходит?", 2, 81);
  elegir("md", "medios", ES12_MEDIOS, 9, "es12-noticias", "Какое слово подходит?", 2, 91);
  elegir("pl", "planeta", ES12_PLANETA, 10, "es12-medio-ambiente", "Какое слово подходит?", 2, 95);
  /* 5. Preguntas */
  ES12_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES12-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 97), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 6. Errores típicos */
  ES12_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES12-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 7. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es12Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES12-dic-" + id)) return;
    const x = { id: "ES12-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_12.modulos.forEach(m => {
    es12Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es12Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 8. Situaciones y respuestas; dictado y orden de las frases de la U12 */
  ES12_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES12-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES12_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES12-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 12) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_12.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 8; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    out.push({ id: "ES12-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: f.es, esperadas: [f.es], idioma: "es", oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES12-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: f.es, fichas, sep: " ", esperada: pal.join(" "), oir: f.es, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 9. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES12_TURNOS.forEach((T, i) => {
    out.push({ id: "ES12-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 12, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });
  /* 10. Profundización y formas */
  es12Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* [frase, correcta, opciones, explicación] */
const ES12_COMB = [
  ["Te doy el libro. → ___", "Te lo doy.", ["Te lo doy.", "Lo te doy.", "Te doy lo."], "**el libro** → **lo**; порядок: **te lo**."],
  ["Le doy las llaves a Ana. → ___", "Se las doy.", ["Se las doy.", "Le las doy.", "Las le doy."], "**le + las → se las**.", null, 1, "es12-se-lo"],
  ["Me explicas la regla. → ___", "Me la explicas.", ["Me la explicas.", "La me explicas.", "Me lo explicas."], "**la regla** → **la**."],
  ["Les mando el mensaje a mis padres. → ___", "Se lo mando.", ["Se lo mando.", "Les lo mando.", "Lo se mando."], "**les + lo → se lo**.", null, 1, "es12-se-lo"],
  ["Nos traen los cafés. → ___", "Nos los traen.", ["Nos los traen.", "Los nos traen.", "Nos lo traen."], "**los cafés** → **los**."],
  ["¿Me dejas tu coche? → ___", "¿Me lo dejas?", ["¿Me lo dejas?", "¿Lo me dejas?", "¿Me la dejas?"], "**tu coche** → **lo**."],
  ["No te digo la verdad. → ___", "No te la digo.", ["No te la digo.", "Te no la digo.", "No la te digo."], "**no** — перед обоими местоимениями."],
  ["Le he comprado un regalo a mi madre. → ___", "Se lo he comprado.", ["Se lo he comprado.", "Le lo he comprado.", "Se he lo comprado."], "**le + lo → se lo**; оба — перед **he**.", null, 1, "es12-se-lo"]
];
/* [consigna, frase, esperadas, explicación, módulo, regla] */
const ES12_LUGAR = [
  ["Замени слова местоимениями: одно слово.", "Da el libro a Ana.", ["Dáselo.", "Dáselo a Ana."], "**da + se + lo → dáselo**.", 2, "es12-lugar-imp"],
  ["Замени слова местоимениями: одно слово.", "Di la verdad a tus padres.", ["Dísela.", "Dísela a tus padres."], "**di + se + la → dísela**.", 2, "es12-lugar-imp"],
  ["Замени слова местоимениями: одно слово.", "Explica la regla a Pablo.", ["Explícasela.", "Explícasela a Pablo."], "**explica + se + la → explícasela**.", 2, "es12-lugar-imp"],
  ["Замени «el café» местоимением.", "Tráeme el café.", ["Tráemelo."], "**trae + me + lo → tráemelo**.", 2, "es12-lugar-imp"],
  ["Замени «las fotos» местоимением.", "Mándanos las fotos.", ["Mándanoslas."], "**manda + nos + las → mándanoslas**.", 2, "es12-lugar-imp"],
  ["Замени «el billete» местоимением.", "Cómprame el billete.", ["Cómpramelo."], "**compra + me + lo → cómpramelo**.", 2, "es12-lugar-imp"],
  ["Замени «la llave» местоимением.", "Déjame la llave.", ["Déjamela."], "**deja + me + la → déjamela**.", 2, "es12-lugar-imp"],
  ["Скажи наоборот: «не…».", "Dímelo.", ["No me lo digas."], "**no** + местоимения + subjuntivo.", 2, "es12-lugar-imp"],
  ["Скажи наоборот: «не…».", "Dáselo.", ["No se lo des."], "**no se lo des**.", 2, "es12-lugar-imp"],
  ["Скажи наоборот: «не…».", "Cómpramelo.", ["No me lo compres."], "**no me lo compres**.", 2, "es12-lugar-imp"],
  ["Скажи наоборот: «не…».", "Tráemela.", ["No me la traigas."], "**no me la traigas**.", 2, "es12-lugar-imp"],
  ["Скажи наоборот: «не…».", "Explícaselo.", ["No se lo expliques."], "**no se lo expliques**.", 2, "es12-lugar-imp"],
  ["Поставь местоимения в конец.", "Te lo voy a dar.", ["Voy a dártelo."], "**dar + te + lo → dártelo**.", 2, "es12-lugar-inf"],
  ["Поставь местоимения в конец.", "¿Me lo puedes explicar?", ["¿Puedes explicármelo?"], "**explicármelo** — со знаком.", 2, "es12-lugar-inf"],
  ["Поставь местоимения в конец.", "Se lo tengo que decir.", ["Tengo que decírselo."], "**decírselo**.", 2, "es12-lugar-inf"],
  ["Поставь местоимения перед глаголом.", "Voy a comprártela.", ["Te la voy a comprar."], "**te la** — перед **voy**.", 2, "es12-lugar-inf"],
  ["Поставь местоимения перед глаголом.", "Quiero enseñárselo.", ["Se lo quiero enseñar."], "**se lo** — перед **quiero**.", 2, "es12-lugar-inf"]
];
/* Unir dos frases: [consigna, frases, esperadas, explicación, módulo, regla] */
const ES12_REL_UNIR = [
  ["Соедини две фразы словом que.", "Tengo un amigo. Mi amigo vive en Madrid.", ["Tengo un amigo que vive en Madrid."], "**un amigo que vive…**", 3, "es12-que-quien"],
  ["Соедини две фразы словом que.", "He leído el libro. Me dejaste el libro.", ["He leído el libro que me dejaste."], "**el libro que me dejaste**.", 3, "es12-que-quien"],
  ["Соедини две фразы словом donde.", "Este es el bar. Pablo trabaja en el bar.", ["Este es el bar donde trabaja Pablo.", "Este es el bar donde Pablo trabaja."], "О месте — **donde**.", 3, "es12-que-quien"],
  ["Соедини две фразы: con quien.", "Esta es la chica. Vivo con la chica.", ["Esta es la chica con quien vivo."], "После предлога о человеке — **quien**.", 3, "es12-que-quien"],
  ["Соедини две фразы словом que.", "Vivo en un piso. El piso tiene tres habitaciones.", ["Vivo en un piso que tiene tres habitaciones."], "**un piso que tiene…**", 3, "es12-que-quien"]
];
const ES12_CON_UNIR = [
  ["Соедини две фразы: así que.", "Llueve. Me quedo en casa.", ["Llueve, así que me quedo en casa."], "Следствие — **así que**.", 4, "es12-consecuencia"],
  ["Соедини две фразы: porque.", "No voy al cine. No tengo dinero.", ["No voy al cine porque no tengo dinero."], "Причина — **porque**.", 4, "es12-causa"],
  ["Соедини две фразы: начни с Como.", "No tengo dinero. No voy al cine.", ["Como no tengo dinero, no voy al cine."], "Причина в начале — **como**.", 4, "es12-causa"],
  ["Соедини две фразы: por eso.", "Estoy enfermo. No voy a clase.", ["Estoy enfermo, por eso no voy a clase.", "Estoy enfermo; por eso no voy a clase.", "Estoy enfermo. Por eso no voy a clase."], "Следствие — **por eso**.", 4, "es12-consecuencia"],
  ["Соедини две фразы: начни с Aunque (это факт).", "Es caro. Lo compro.", ["Aunque es caro, lo compro."], "Факт — **aunque** + обычное время.", 4, "es12-contraste"],
  ["Соедини две фразы: mientras que.", "Yo trabajo. Mi hermano estudia.", ["Yo trabajo, mientras que mi hermano estudia."], "Сравнение — **mientras que**.", 4, "es12-contraste"]
];
/* [frase, correcta, explicación, módulo, regla] */
const ES12_PORPARA_ESC = [
  ["Este café es ___ ti.", "para", "Адресат — **para**.", 5, "es12-para"],
  ["Gracias ___ venir.", "por", "Причина — **por**.", 5, "es12-por"],
  ["Ahorro ___ comprar un coche.", "para", "Цель — **para**.", 5, "es12-para"],
  ["Lo vendo ___ cien euros.", "por", "Цена — **por**.", 5, "es12-por"],
  ["Los deberes son ___ mañana.", "para", "Срок — **para**.", 5, "es12-para"],
  ["Pasamos ___ el centro de la ciudad.", "por", "Путь — **por**.", 5, "es12-por"],
  ["___ mí, es muy difícil.", "Para", "Мнение — **para mí**.", 5, "es12-para"],
  ["Te lo mando ___ correo.", "por", "Средство — **por**.", 5, "es12-por"]
];
const ES12_SERESTAR_ESC = [
  ["Ya ___ lista: podemos salir. (yo)", "estoy", "Готова — **estar lista**.", 7, "es12-ser-estar-cambio"],
  ["Ana ___ muy lista: habla cuatro idiomas.", "es", "Умная — **ser lista**.", 7, "es12-ser-estar-cambio"],
  ["Este libro ___ muy aburrido.", "es", "Скучный — **ser aburrido**.", 7, "es12-ser-estar-cambio"],
  ["Los niños ___ aburridos: no tienen nada que hacer.", "están", "Им скучно — **estar aburrido**.", 7, "es12-ser-estar-cambio"],
  ["¡Qué rica ___ la tortilla!", "está", "Вкусный — **estar rico**.", 7, "es12-ser-estar-cambio"],
  ["La reunión ___ en la oficina.", "es", "Событие — **ser**.", 7, "es12-ser-estar-repaso"],
  ["El banco ___ cerrado por la tarde.", "está", "Результат — **estar cerrado**.", 7, "es12-ser-estar-repaso"],
  ["No ___ de acuerdo contigo. (yo)", "estoy", "**estar de acuerdo**.", 7, "es12-ser-estar-repaso"]
];
const ES12_REL = [
  ["La chica ___ vive aquí es de Rusia.", "que", ["que", "quien", "lo que"], "Без предлога — **que**."],
  ["El libro ___ estoy leyendo es muy bueno.", "que", ["que", "donde", "quien"], "О вещи — **que**."],
  ["Es la amiga con ___ comparto piso.", "quien", ["quien", "lo que", "donde"], "После предлога о человеке — **quien**."],
  ["Este es el bar ___ trabaja Pablo.", "donde", ["donde", "quien", "lo que"], "О месте — **donde**."],
  ["No entiendo ___ dices.", "lo que", ["lo que", "que", "quien"], "«То, что» — **lo que**.", null, 3, "es12-lo-que"],
  ["___ más me gusta es viajar.", "Lo que", ["Lo que", "Que", "Quien"], "**Lo que más me gusta…**", null, 3, "es12-lo-que"],
  ["—¿Qué camisa quieres? —___ está en la silla.", "La que", ["La que", "Lo que", "Quien"], "«Та, которая» — **la que**.", null, 3, "es12-lo-que"],
  ["Los amigos ___ tengo en Madrid son de la universidad.", "que", ["que", "quienes", "donde"], "Без предлога — **que**."],
  ["Haz ___ quieras.", "lo que", ["lo que", "que", "quien"], "**Haz lo que quieras.**", null, 3, "es12-lo-que"],
  ["La ciudad ___ nací es pequeña.", "donde", ["donde", "que", "lo que"], "О месте — **donde**."]
];
const ES12_CONECTOR = [
  ["No voy a la fiesta ___ estoy cansado.", "porque", ["porque", "por eso", "aunque"], "Причина в середине — **porque**."],
  ["___ estoy cansado, no voy a la fiesta.", "Como", ["Como", "Por eso", "Así que"], "Причина в начале — **como**."],
  ["Estoy cansado, ___ no voy a la fiesta.", "por eso", ["por eso", "porque", "aunque"], "Следствие — **por eso**.", null, 4, "es12-consecuencia"],
  ["Llueve, ___ me quedo en casa.", "así que", ["así que", "ya que", "mientras que"], "**así que** — так что.", null, 4, "es12-consecuencia"],
  ["He aprobado ___ tu ayuda.", "gracias a", ["gracias a", "por eso", "así que"], "Хорошая причина — **gracias a**."],
  ["Llegué tarde ___ tráfico.", "a causa del", ["a causa del", "gracias al", "por lo tanto"], "Плохая причина — **a causa de**."],
  ["Es caro. ___ , es muy bueno.", "Sin embargo", ["Sin embargo", "Por eso", "Ya que"], "«Однако» — **sin embargo**.", null, 4, "es12-contraste"],
  ["Yo trabajo, ___ mi hermano estudia.", "mientras que", ["mientras que", "así que", "ya que"], "Сравнение двух — **mientras que**.", null, 4, "es12-contraste"],
  ["No tengo dinero; ___ , no puedo viajar.", "por lo tanto", ["por lo tanto", "sin embargo", "mientras que"], "Следствие — **por lo tanto**.", null, 4, "es12-consecuencia"],
  ["Vive lejos, ___ , a una hora del centro.", "es decir", ["es decir", "sin embargo", "por eso"], "«То есть» — **es decir**.", null, 4, "es12-consecuencia"]
];
const ES12_AUNQUE = [
  ["Aunque ___ , voy a salir. (дождь идёт сейчас)", "llueve", ["llueve", "llueva"], "Факт — обычное время: «хотя»."],
  ["Aunque mañana ___ , iré a la playa. (не знаю, будет ли дождь)", "llueva", ["llueva", "llueve"], "Неизвестно — subjuntivo: «даже если»."],
  ["Aunque ___ caro, lo voy a comprar. (я знаю цену: дорого)", "es", ["es", "sea"], "Факт — **es**."],
  ["Aunque ___ caro, lo compraré. (цену ещё не знаю)", "sea", ["sea", "es"], "Неизвестно — **sea**."],
  ["Aunque no ___ tiempo, siempre me ayuda. (это факт)", "tiene", ["tiene", "tenga"], "Факт — **tiene**."],
  ["Aunque no ___ ganas, tienes que ir. (даже если не захочешь)", "tengas", ["tengas", "tienes"], "«Даже если» — **tengas**."]
];
const ES12_PORPARA = [
  ["Este regalo es ___ ti.", "para", ["para", "por"], "Адресат — **para**.", null, 5, "es12-para"],
  ["Gracias ___ tu ayuda.", "por", ["por", "para"], "Причина — **por**."],
  ["Estudio español ___ trabajar en España.", "para", ["para", "por"], "Цель — **para**.", null, 5, "es12-para"],
  ["Caminamos ___ el parque.", "por", ["por", "para"], "Путь — **por**."],
  ["Lo compré ___ veinte euros.", "por", ["por", "para"], "Цена — **por**."],
  ["El informe es ___ el lunes.", "para", ["para", "por"], "Срок — **para**.", null, 5, "es12-para"],
  ["___ mí, es una buena idea.", "Para", ["Para", "Por"], "Мнение — **para mí**.", null, 5, "es12-para"],
  ["Te llamo ___ teléfono.", "por", ["por", "para"], "Средство — **por**."],
  ["No salimos ___ la lluvia.", "por", ["por", "para"], "Причина — **por**."],
  ["Mañana salgo ___ Madrid.", "para", ["para", "por"], "Направление — **para**.", null, 5, "es12-para"],
  ["Trabajo ___ la mañana.", "por", ["por", "para"], "**por la mañana**."],
  ["Necesito el móvil ___ trabajar.", "para", ["para", "por"], "Цель — **para**.", null, 5, "es12-para"],
  ["El 20 ___ ciento de los alumnos.", "por", ["por", "para"], "**por ciento**."]
];
const ES12_SE = [
  ["Se ___ piso.", "vende", ["vende", "venden"], "**piso** — ед. ч."],
  ["Se ___ pisos.", "venden", ["venden", "vende"], "**pisos** — мн. ч."],
  ["Se ___ habitación.", "alquila", ["alquila", "alquilan"], "**habitación** — ед. ч."],
  ["Se ___ camareros.", "necesitan", ["necesitan", "necesita"], "**camareros** — мн. ч."],
  ["En España se ___ tarde.", "cena", ["cena", "cenan", "cenamos"], "«Ужинают» — **se cena**.", null, 6, "es12-se-impersonal"],
  ["¿Cómo se ___ tu nombre?", "escribe", ["escribe", "escriben", "escribes"], "**¿Cómo se escribe?**", null, 6, "es12-se-impersonal"],
  ["Aquí no se ___ fumar.", "puede", ["puede", "pueden", "puedes"], "**no se puede** — нельзя.", null, 6, "es12-se-impersonal"],
  ["En esta tienda se ___ inglés.", "habla", ["habla", "hablan"], "**inglés** — ед. ч."],
  ["Se ___ profesores de ruso.", "buscan", ["buscan", "busca"], "**profesores** — мн. ч."]
];
/* [frase, correcta, explicación, módulo, regla, palabra] */
const ES12_SE_ESC = [
  ["Se ___ coches. (alquilar)", "alquilan", "**coches** — мн. ч.: **se alquilan**.", 6, "es12-se-pasiva", "alquilar"],
  ["Se ___ una habitación. (alquilar)", "alquila", "**una habitación** — ед. ч.", 6, "es12-se-pasiva", "alquilar"],
  ["Aquí se ___ español. (hablar)", "habla", "**español** — ед. ч.", 6, "es12-se-pasiva", "hablar"],
  ["Aquí se ___ dos idiomas. (hablar)", "hablan", "**dos idiomas** — мн. ч.", 6, "es12-se-pasiva", "hablar"],
  ["Se ___ camarero. (buscar)", "busca", "**camarero** — ед. ч.", 6, "es12-se-pasiva", "buscar"],
  ["Se ___ libros viejos. (comprar)", "compran", "**libros** — мн. ч.", 6, "es12-se-pasiva", "comprar"],
  ["En este bar se ___ muy bien. (comer)", "come", "«Хорошо кормят» — **se come**.", 6, "es12-se-impersonal", "comer"],
  ["Se ___ clases de español. (dar)", "dan", "**clases** — мн. ч.", 6, "es12-se-pasiva", "dar"],
  ["No se ___ aparcar aquí. (poder)", "puede", "**no se puede** — нельзя.", 6, "es12-se-impersonal", "poder"],
  ["Se ___ bicicletas. (reparar)", "reparan", "**bicicletas** — мн. ч.", 6, "es12-se-pasiva", "reparar"]
];
const ES12_SERESTAR = [
  ["Mi hermano ___ muy listo: siempre saca buenas notas.", "es", ["es", "está"], "Умный — **ser listo**."],
  ["¿___ listos? ¡Nos vamos!", "Estáis", ["Estáis", "Sois"], "Готовы — **estar listo**."],
  ["Esta película ___ muy aburrida.", "es", ["es", "está"], "Скучный — **ser aburrido**."],
  ["No tengo nada que hacer: ___ aburrido.", "estoy", ["estoy", "soy"], "Мне скучно — **estar aburrido**."],
  ["Hoy no voy a clase: ___ malo.", "estoy", ["estoy", "soy"], "Болен — **estar malo**."],
  ["Fumar ___ malo para la salud.", "es", ["es", "está"], "Плохой, вредный — **ser malo**."],
  ["La sopa ___ muy rica.", "está", ["está", "es"], "Вкусный — **estar rico**."],
  ["Su familia ___ muy rica: tiene tres casas.", "es", ["es", "está"], "Богатый — **ser rico**."],
  ["El niño ya ___ despierto.", "está", ["está", "es"], "Не спит — **estar despierto**."],
  ["El camarero ___ muy atento con los clientes.", "es", ["es", "está"], "Любезный — **ser atento**."],
  ["La tienda ___ cerrada los domingos.", "está", ["está", "es"], "Результат — **estar cerrado**.", null, 7, "es12-ser-estar-repaso"],
  ["La fiesta ___ en casa de Marta.", "es", ["es", "está"], "Событие — **ser**.", null, 7, "es12-ser-estar-repaso"],
  ["Marta ___ en casa.", "está", ["está", "es"], "Где находится — **estar**.", null, 7, "es12-ser-estar-repaso"],
  ["Mi abuelo todavía ___ vivo.", "está", ["está", "es"], "Жив — **estar vivo**."]
];
const ES12_OPINION = [
  ["___ mi opinión, es una buena idea.", "En", ["En", "Por", "De"], "**En mi opinión…**"],
  ["Desde mi punto de ___ , no es una buena idea.", "vista", ["vista", "opinión", "lado"], "**punto de vista**."],
  ["No estoy de ___ contigo.", "acuerdo", ["acuerdo", "razón", "opinión"], "**estar de acuerdo**."],
  ["Tienes ___ , pero es muy caro.", "razón", ["razón", "acuerdo", "opinión"], "**tener razón**."],
  ["Estoy a ___ de prohibir los coches en el centro.", "favor", ["favor", "contra", "acuerdo"], "**a favor de** — за."],
  ["Estoy en ___ de esa idea.", "contra", ["contra", "favor", "desacuerdo"], "**en contra de** — против."],
  ["Por un lado, es cómodo; por ___ lado, es caro.", "otro", ["otro", "segundo", "un"], "**por un lado… por otro lado…**", null, 8, "es12-ordenar-ideas"],
  ["En ___ lugar, quiero decir que…", "primer", ["primer", "primero", "uno"], "**en primer lugar**.", null, 8, "es12-ordenar-ideas"],
  ["Me gustan las ciudades grandes, por ___ , Madrid.", "ejemplo", ["ejemplo", "eso", "lo tanto"], "**por ejemplo**.", null, 8, "es12-ordenar-ideas"],
  ["En ___ , creo que es una buena idea.", "conclusión", ["conclusión", "ejemplo", "primer"], "**en conclusión** — вывод.", null, 8, "es12-ordenar-ideas"],
  ["No ___ : no es tan grave.", "exageres", ["exageres", "convenzas", "opines"], "**exagerar** — преувеличивать."],
  ["Es un tema muy ___ : la gente no está de acuerdo.", "polémico", ["polémico", "razonable", "obvio"], "**polémico** — спорный."],
  ["No me vas a ___ : no voy a cambiar de opinión.", "convencer", ["convencer", "criticar", "resumir"], "**convencer** — убедить."]
];
const ES12_MEDIOS = [
  ["He leído la noticia en el ___ .", "periódico", ["periódico", "titular", "canal"], "**el periódico** — газета.", "periódico"],
  ["El ___ dice: «Sube el precio de la vivienda».", "titular", ["titular", "dato", "voto"], "**el titular** — заголовок.", "titular"],
  ["Según una ___ , la mayoría está a favor.", "encuesta", ["encuesta", "prensa", "cifra"], "**la encuesta** — опрос.", "encuesta"],
  ["El 20 ___ de los jóvenes no trabaja.", "por ciento", ["por ciento", "porcentaje", "para ciento"], "**el 20 por ciento**.", "porcentaje"],
  ["El ___ de la ciudad ha prohibido los coches en el centro.", "alcalde", ["alcalde", "ciudadano", "habitante"], "**el alcalde** — мэр.", "alcalde"],
  ["Los ciudadanos ___ cada cuatro años.", "votan", ["votan", "publican", "aumentan"], "**votar** — голосовать.", "votar"],
  ["Hay una ___ en la plaza contra los impuestos.", "manifestación", ["manifestación", "publicidad", "población"], "**la manifestación** — демонстрация.", "manifestación"],
  ["El precio de la vivienda ha ___ mucho: ahora es más caro.", "aumentado", ["aumentado", "disminuido", "votado"], "**aumentar** — расти.", "aumentar", 9, "es12-sociedad"],
  ["La crisis ___ a todos los ciudadanos.", "afecta", ["afecta", "depende", "protesta"], "**afectar a** — затрагивать.", "afectar", 9, "es12-sociedad"],
  ["—¿Vas a venir? —___ del tiempo.", "Depende", ["Depende", "Afecta", "Aumenta"], "**depender de**.", "depender", 9, "es12-sociedad"],
  ["Madrid tiene más de tres millones de ___ .", "habitantes", ["habitantes", "gobiernos", "impuestos"], "**los habitantes** — жители.", "habitante", 9, "es12-sociedad"],
  ["En la tele hay demasiada ___ entre los programas.", "publicidad", ["publicidad", "población", "justicia"], "**la publicidad** — реклама.", "publicidad"],
  ["La ___ entre hombres y mujeres es un derecho.", "igualdad", ["igualdad", "encuesta", "cifra"], "**la igualdad** — равенство.", "igualdad"],
  ["El ___ de la vida es muy alto en Barcelona.", "coste", ["coste", "voto", "canal"], "**el coste de la vida** — стоимость жизни.", "coste"]
];
const ES12_PLANETA = [
  ["En casa ___ el plástico y el papel.", "reciclamos", ["reciclamos", "contaminamos", "destruimos"], "**reciclar** — сдавать на переработку.", "reciclar"],
  ["Los coches ___ el aire.", "contaminan", ["contaminan", "protegen", "reciclan"], "**contaminar** — загрязнять.", "contaminar"],
  ["El sol y el viento son energías ___ .", "renovables", ["renovables", "artificiales", "digitales"], "**renovable** — возобновляемый.", "renovable"],
  ["Hay que ___ la naturaleza.", "proteger", ["proteger", "destruir", "provocar"], "**proteger** — защищать.", "proteger"],
  ["El ___ es un problema mundial: sube la temperatura del planeta.", "cambio climático", ["cambio climático", "medio ambiente", "reciclaje"], "**el cambio climático**.", "cambio climático"],
  ["Muchos animales pueden ___ por la contaminación.", "desaparecer", ["desaparecer", "inventar", "conectar"], "**desaparecer** — исчезнуть.", "desaparecer"],
  ["Paso muchas horas delante de la ___ .", "pantalla", ["pantalla", "batería", "red"], "**la pantalla** — экран.", "pantalla", 10, "es12-tecnologia"],
  ["Tiene miles de ___ en las redes sociales.", "seguidores", ["seguidores", "enlaces", "inventos"], "**el seguidor** — подписчик.", "seguidor", 10, "es12-tecnologia"],
  ["Te mando el ___ del vídeo.", "enlace", ["enlace", "avance", "recurso"], "**el enlace** — ссылка.", "enlace", 10, "es12-tecnologia"],
  ["El móvil no funciona: no tiene ___ .", "batería", ["batería", "privacidad", "naturaleza"], "**la batería** — аккумулятор.", "batería", 10, "es12-tecnologia"],
  ["Debemos ___ menos plástico.", "consumir", ["consumir", "proteger", "salvar"], "**consumir** — потреблять.", "consumir"],
  ["Para ___ la contaminación, voy en bici.", "reducir", ["reducir", "provocar", "aumentar"], "**reducir** — сократить.", "reducir"],
  ["Un coche ___ no usa gasolina.", "eléctrico", ["eléctrico", "virtual", "digital"], "**eléctrico** — электрический.", "eléctrico"],
  ["La inteligencia ___ puede escribir mensajes y correos.", "artificial", ["artificial", "renovable", "solar"], "**la inteligencia artificial**.", "artificial", 10, "es12-tecnologia"]
];
const ES12_PREGUNTAS = [
  ["¿Me ___ dejas?", "Sí, te lo dejo.", "lo", ["lo", "le", "se"], 1, "es12-combinados"],
  ["¿A quién ___ lo has dado?", "Se lo he dado a Ana.", "se", ["se", "le", "lo"], 1, "es12-se-lo"],
  ["¿Qué ___ de las redes sociales?", "En mi opinión, tienen ventajas.", "opinas", ["opinas", "opines", "opinar"], 8, "es12-opinar"],
  ["¿___ qué estudias español?", "Para trabajar en España.", "Para", ["Para", "Por", "De"], 5, "es12-para"],
  ["¿___ qué no vienes?", "Porque estoy cansado.", "Por", ["Por", "Para", "A"], 5, "es12-por"],
  ["¿Estás de ___ ?", "Sí, tienes razón.", "acuerdo", ["acuerdo", "razón", "favor"], 8, "es12-opinar"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES12_ERRORES = [
  [["Le", "lo", "doy", "a", "Ana."], 0, "Se", 1, "es12-se-lo", "**le + lo → se lo**."],
  [["Les", "la", "mando", "mañana."], 0, "Se", 1, "es12-se-lo", "**les + la → se la**."],
  [["Se", "vende", "pisos."], 1, "venden", 6, "es12-se-pasiva", "**pisos** — мн. ч.: **se venden**."],
  [["Gracias", "para", "tu", "ayuda."], 1, "por", 5, "es12-por", "Причина — **por**."],
  [["Estudio", "por", "aprobar", "el", "examen."], 1, "para", 5, "es12-para", "Цель — **para**."],
  [["Soy", "de", "acuerdo", "contigo."], 0, "Estoy", 8, "es12-opinar", "**estar de acuerdo**."],
  [["La", "chica", "quien", "vive", "aquí", "es", "rusa."], 2, "que", 3, "es12-que-quien", "Без предлога — **que**."],
  [["La", "fiesta", "está", "en", "mi", "casa."], 2, "es", 7, "es12-ser-estar-repaso", "Событие — **ser**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES12_SITUACIONES = [
  ["Ты говоришь, что завтра отдашь книгу Ане (ей — её).", "Se lo doy mañana.", ["Le lo doy mañana.", "Lo se doy mañana."], "**le + lo → se lo**.", 1],
  ["Ты просишь друга сказать тебе это.", "Dímelo.", ["Dime lo.", "Me lo di."], "**dímelo** — слитно.", 2],
  ["Ты просишь не говорить этого Пабло.", "No se lo digas a Pablo.", ["No díselo a Pablo.", "No le lo digas a Pablo."], "**no se lo digas**.", 2],
  ["Ты не понимаешь, что говорит собеседник.", "No entiendo lo que dices.", ["No entiendo que dices.", "No entiendo quien dices."], "«То, что» — **lo que**.", 3],
  ["Ты высказываешь мнение.", "En mi opinión, es una buena idea.", ["Por mi opinión, es una buena idea.", "A mi opinión, es una buena idea."], "**en mi opinión**.", 8],
  ["Ты не согласен с другом.", "No estoy de acuerdo contigo.", ["No soy de acuerdo contigo.", "No estoy acuerdo con ti."], "**estar de acuerdo con**.", 8],
  ["Ты благодаришь за помощь.", "Gracias por tu ayuda.", ["Gracias para tu ayuda.", "Gracias de tu ayuda."], "**gracias por**.", 5],
  ["Ты пишешь объявление: сдаются комнаты.", "Se alquilan habitaciones.", ["Se alquila habitaciones.", "Alquilan se habitaciones."], "**habitaciones** — мн. ч.", 6],
  ["Ты говоришь, что готов.", "Estoy listo.", ["Soy listo.", "Tengo listo."], "Готов — **estar listo**.", 7],
  ["Ты говоришь: даже если будет дождь, ты пойдёшь.", "Aunque llueva, iré.", ["Aunque lloverá, iré.", "Sin embargo llueva, iré."], "«Даже если» — **aunque** + subjuntivo.", 4]
];
const ES12_RESPUESTAS = [
  ["¿Me dejas tu bici?", "Claro, te la dejo.", ["Claro, te lo dejo.", "Claro, se la dejo."], "**la bici** → **la**; тебе — **te**.", 1],
  ["¿Vendemos el coche?", "¡Ni hablar!", ["¡De nada!", "¡Hasta luego!"], "Резко отказаться — **¡Ni hablar!**", 8],
  ["¿Estás cansado?", "¡Qué va! Estoy muy bien.", ["¡Hombre, claro! Estoy muy bien.", "¡Suerte!"], "«Да нет!» — **¡Qué va!**", 8],
  ["¿Te gusta vivir en una ciudad grande?", "Depende del día.", ["Depende en el día.", "Dependo el día."], "**depender de**.", 9],
  ["Creo que las redes sociales son malas.", "Yo lo veo de otra manera.", ["Yo la veo de otro manera.", "Yo veo lo de otra manera."], "Вежливо возразить.", 8],
  ["¿Me ayudas con la mudanza? Eres mi mejor amigo.", "¡Hombre, claro!", ["¡Que te mejores!", "¡Buenas noches!"], "Горячо согласиться — **¡Hombre, claro!**", 8]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas, rx?]], modelo, pista?] */
function es12Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f, rx]) => (rx ? { es, formas: f ? f.split("|") : [], rx } : { es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES12_TURNOS = [
  es12Turnos("Javier", "javier", "¿Qué opinas?", false, [
    ["¿Qué opinas de las redes sociales?", "Что ты думаешь о соцсетях?", "Скажи своё мнение: en mi opinión, creo que, para mí…",
      [["мнение", "en mi opinión|creo que|pienso que|me parece que|para mí|desde mi punto de vista|opino que"]], "En mi opinión, tienen ventajas, pero perdemos mucho tiempo.", "**En mi opinión…, Creo que…**"],
    ["¿Por qué lo dices?", "Почему ты так говоришь?", "Объясни причину или дай пример.",
      [["причина", "porque|ya que|como|por ejemplo|gracias a"]], "Porque paso muchas horas delante de la pantalla.", "**Porque…, Por ejemplo…**"],
    ["¿Y qué se puede hacer?", "И что можно сделать?", "Предложи решение: se puede, hay que, deberíamos…",
      [["решение", "se puede|se pueden|hay que|podemos|deberíamos|es importante|es mejor|tenemos que"]], "Se puede usar el móvil menos horas al día.", "**Se puede…, Hay que…**"]
  ]),
  es12Turnos("Marta", "marta", "No estoy de acuerdo", false, [
    ["Yo creo que los coches deberían estar prohibidos en el centro.", "Я думаю, что машины в центре надо запретить.", "Согласись или возрази.",
      [["реакция", "estoy de acuerdo|tienes razón|depende|yo lo veo|no creo que|es verdad|estoy a favor|estoy en contra"]], "No estoy de acuerdo: mucha gente necesita el coche.", "**(No) estoy de acuerdo…, Tienes razón, pero…**"],
    ["Pero hay mucha contaminación. ¿No te preocupa?", "Но ведь много загрязнения. Тебя это не беспокоит?", "Ответь с противопоставлением: sin embargo, aunque, pero…",
      [["но…", "sin embargo|aunque|pero|por un lado|por otro lado|en cambio"]], "Sí, me preocupa. Sin embargo, el transporte público no es bueno.", "**Sin embargo…, Aunque…**"],
    ["Entonces, ¿qué propones?", "Тогда что ты предлагаешь?", "Предложи что-нибудь.",
      [["предложение", "propongo|podemos|se puede|hay que|deberíamos|es mejor|primero"]], "Propongo mejorar primero el metro y los autobuses.", "**Propongo…, Hay que…**"]
  ]),
  es12Turnos("Lucía", "lucia", "Chat con Lucía: ¿me la dejas?", true, [
    ["¿Me dejas tu bici el sábado? 🙏", "Одолжишь мне свой велосипед в субботу? 🙏", "Ответь с двумя местоимениями: te la…",
      [["te la", "te la|dejártela|prestártela"]], "Sí, te la dejo. ¿Para qué la necesitas?", "**Te la dejo.**"],
    ["¡Gracias! ¿Y la llave de la bici? ¿La tienes tú?", "Спасибо! А ключ от велосипеда? Он у тебя?", "Скажи, что ключ у Пабло: se la…",
      [["se la", "se la|pídesela|dásela"]], "No, se la he dejado a Pablo. Pídesela a él.", "**Se la he dejado a Pablo.**"],
    ["Vale, se la pido ahora. ¿Te la devuelvo el domingo?", "Хорошо, сейчас попрошу у него. Вернуть тебе в воскресенье?", "Ответь: когда вернуть.",
      [["ответ", "devuélvemela|me la devuelves|me la das|me la traes|me la|cuando quieras|domingo|vale|perfecto|lunes"]], "Sí, devuélvemela el domingo por la tarde.", "**Devuélvemela…**"]
  ])
];
window.ejerciciosUnidadEs12 = ejerciciosUnidadEs12;
window.es12Vocab = es12Vocab;
window.es12Ampliacion = es12Ampliacion;
window.es12Objetivo = es12Objetivo;
/* Desafío del día U12 (js/hoy.js): [frase, a quién, qué, verbo, infinitivo] — la misma frase con los dos pronombres */
const ES12_HOY = [["Doy el libro a Ana.", "se", "lo", "doy", "dar"], ["Explico la regla a mis alumnos.", "se", "la", "explico", "explicar"], ["Mando las fotos a mi madre.", "se", "las", "mando", "mandar"],
  ["Compro los billetes a mis padres.", "se", "los", "compro", "comprar"], ["Javier nos explica el problema.", "nos", "lo", "explica", "explicar"], ["Te traigo la llave.", "te", "la", "traigo", "traer"],
  ["Lucía me cuenta la historia.", "me", "la", "cuenta", "contar"], ["Devuelvo el dinero a Pablo.", "se", "lo", "devuelvo", "devolver"], ["Digo la verdad a mis padres.", "se", "la", "digo", "decir"],
  ["Os mando el mensaje.", "os", "lo", "mando", "mandar"], ["Pido la cuenta al camarero.", "se", "la", "pido", "pedir"], ["Mis padres me dejan el coche.", "me", "lo", "dejan", "dejar"]];
window.ES12_HOY = ES12_HOY;
const ES12_MEZCLA = { combinados: 2, "combinados-forma": 3, "lugar-pron": 2, relativo: 2, conector: 2, aunque: 1, "por-para": 2, "se-impersonal": 1, "se-forma": 1, "ser-estar": 2,
  opinion: 2, medios: 1, planeta: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1,
  natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1 };
window.ES12_MEZCLA = ES12_MEZCLA;

/* ── Profundización (desde el principio, regla del 13/11/2026) ───────────────
   Más a fondo que se suma a la teoría al cargar y los tipos de profundización de Azbuka. */
const ES12_MAS = {
  "es12-combinados": { titulo: "Me lo, te lo — и с вещами, и с фразами", texto: "**lo** может заменять целую мысль: **—¿Sabes que Ana se va? —Sí, me lo ha dicho.** — «да, она мне (это) сказала». Поэтому **me lo dijo**, **te lo prometo**, **se lo pregunté** звучат очень часто.", ejemplos: [{ es: "Te lo prometo.", ru: "Обещаю тебе (это)." }] },
  "es12-se-lo": { titulo: "Se lo — кому?", texto: "**se lo doy** может значить «ему», «ей», «вам», «им». Если из разговора неясно, добавляют **a él, a ella, a usted, a ellos**: **Se lo doy a ella, no a él.**\nИ ещё: с **le / les** испанцы часто повторяют адресата дважды — это не ошибка: **Le doy el libro a Ana.**", ejemplos: [{ es: "¿El informe? Se lo mando a usted mañana.", ru: "Отчёт? Пришлю его вам завтра." }] },
  "es12-lugar-imp": { titulo: "Где ставить знак ударения", texto: "Считай от конца: глагол сохраняет своё ударение, а местоимения добавляют слоги. Одно местоимение у короткого глагола — без знака: **dame**, **dime**. Два — всегда со знаком: **dámelo**, **dímelo**. У длинных глаголов знак нужен уже с одним: **cómprame**, **explícame**.", ejemplos: [{ es: "Dime. — Dímelo. — Explícamelo.", ru: "Скажи мне. — Скажи мне это. — Объясни мне это." }] },
  "es12-lugar-inf": { titulo: "Что звучит естественнее", texto: "В разговоре чаще ставят местоимения **перед** первым глаголом: **Te lo voy a decir**, **¿Me lo puedes dejar?** В конце — чуть книжнее, но тоже нормально: **Voy a decírtelo.** Выбирай любой вариант, только не смешивай.", ejemplos: [{ es: "Se lo quiero regalar a mi madre.", ru: "Я хочу подарить это маме." }] },
  "es12-que-quien": { titulo: "С запятой и без", texto: "Без запятой **que** выбирает одного из многих: **Los alumnos que estudian aprueban** — сдают те, кто учится. С запятыми — просто добавляет сведения обо всех: **Los alumnos, que estudian mucho, aprueban.**\nВ книгах встретишь **el cual / la cual** (= que после предлога) и **cuyo** — «чей»: **la chica cuyo padre es médico**. Пока достаточно узнавать.", ejemplos: [{ es: "Mis amigos, que viven lejos, me escriben mucho.", ru: "Мои друзья, которые живут далеко, много мне пишут." }] },
  "es12-lo-que": { titulo: "Lo + прилагательное", texto: "**lo** + прилагательное — «то, что…; самое…»: **lo importante** — главное, **lo bueno** — хорошее (в этом), **lo mejor** — самое лучшее, **lo malo** — плохо то, что…\n**Lo bueno de vivir aquí es el clima.**", ejemplos: [{ es: "Lo importante es intentarlo.", ru: "Главное — попытаться." }] },
  "es12-causa": { titulo: "Por + инфинитив", texto: "Причину можно назвать и через **por**: **por** + существительное (**por la lluvia**) или **por** + инфинитив: **Me duele la cabeza por dormir poco.** — из-за того, что мало сплю.\n**es que…** — объяснение в разговоре: **No puedo, es que tengo trabajo.**", ejemplos: [{ es: "Llegó tarde por perder el autobús.", ru: "Он опоздал, потому что упустил автобус." }] },
  "es12-consecuencia": { titulo: "Entonces и así que", texto: "**entonces** — «тогда, значит» (в разговоре): **¿No vienes? Entonces voy solo.** **así que** — «так что»: **No vienes, así que voy solo.** **o sea** — очень разговорное «то есть»; в письме лучше **es decir**.", ejemplos: [{ es: "No hay billetes, o sea, no podemos ir.", ru: "Билетов нет, то есть поехать не можем." }] },
  "es12-contraste": { titulo: "Pero и sino", texto: "После отрицания «а» — это **sino**, не **pero**: **No es caro, sino barato.** — не дорогой, а дешёвый. **No voy en coche, sino en metro.**\n**pero** — «но»: **No es caro, pero no me gusta.**", ejemplos: [{ es: "No quiero té, sino café.", ru: "Я хочу не чай, а кофе." }] },
  "es12-para": { titulo: "Para + человек: «как для…»", texto: "**para** + человек может значить сравнение с ожидаемым: **Para ser extranjero, habla muy bien.** — для иностранца он говорит очень хорошо.\n**estar para** + инфинитив — «вот-вот»: **El tren está para salir.** Пока достаточно узнавать.", ejemplos: [{ es: "Para ser tan joven, sabe mucho.", ru: "Для такого молодого он много знает." }] },
  "es12-por": { titulo: "Готовые выражения с por", texto: "**por favor**, **por fin** (наконец), **por supuesto** (конечно), **por lo menos** (по крайней мере), **por cierto** (кстати), **por la mañana**. Их лучше учить целиком.", ejemplos: [{ es: "Por cierto, ¿has hablado con Marta?", ru: "Кстати, ты говорил с Мартой?" }] },
  "es12-otras-prep": { titulo: "Sobre: о чём и сколько", texto: "У **sobre** три частых смысла: «о» (**hablar sobre política**), «на» (**sobre la mesa**) и «около» со временем и числами: **Llego sobre las ocho.** — приду около восьми.", ejemplos: [{ es: "Quedamos sobre las nueve.", ru: "Встречаемся около девяти." }] },
  "es12-se-impersonal": { titulo: "Se dice que…", texto: "**Se dice que…** — «говорят, что…»: **Se dice que va a subir el precio.** То же самое — **dicen que…** (они, без «se»): **Dicen que va a llover.**\nИ с **uno**: **Uno nunca sabe.** — никогда не знаешь.", ejemplos: [{ es: "Dicen que es el mejor restaurante de la ciudad.", ru: "Говорят, это лучший ресторан в городе." }] },
  "es12-se-pasiva": { titulo: "Se + люди", texto: "Если ищут **конкретных людей** и перед ними стоит **a**, глагол остаётся в ед. ч.: **Se busca a los responsables.** Без **a** (в объявлениях) — согласуется: **Se buscan camareros.** Пока достаточно узнавать.", ejemplos: [{ es: "Se necesita camarero con experiencia.", ru: "Требуется официант с опытом." }] },
  "es12-ser-estar-cambio": { titulo: "Estar + качество: «сегодня особенно»", texto: "С обычными прилагательными **estar** показывает впечатление или перемену: **Es guapa** — она красивая; **Hoy está muy guapa** — сегодня она отлично выглядит. **Es joven** — **Está muy joven para su edad** (выглядит молодо).", ejemplos: [{ es: "¡Qué alto está tu hijo!", ru: "Как вырос твой сын!" }] },
  "es12-ser-estar-repaso": { titulo: "Estar + participio", texto: "Результат действия — **estar** + participio, которое согласуется: **La puerta está abierta.** **Los deberes están hechos.** **La mesa está puesta.**\nДействие — другой глагол: **Han abierto la puerta.**", ejemplos: [{ es: "La cena ya está preparada.", ru: "Ужин уже готов." }] },
  "es12-opinar": { titulo: "Как не обидеть, возражая", texto: "Испанцы спорят живо, но чужое мнение смягчают: **Puede ser, pero…** (может быть, но…), **Entiendo lo que dices, pero…**, **No sé, yo creo que…**, **Depende.**\nРезкое **¡Qué va!**, **¡Ni hablar!** — только с друзьями.", ejemplos: [{ es: "Puede ser, pero yo no lo veo tan claro.", ru: "Может быть, но мне это не так очевидно." }] },
  "es12-ordenar-ideas": { titulo: "Ещё связки для текста", texto: "Добавить: **además**, **también**, **incluso** (даже). Уточнить: **de hecho** (на самом деле), **en realidad**, **sobre todo** (особенно). Закончить: **por eso**, **en resumen**, **en conclusión**. Не начинай каждую фразу со связки — двух-трёх на абзац достаточно.", ejemplos: [{ es: "En resumen, tiene más ventajas que inconvenientes.", ru: "Короче говоря, плюсов больше, чем минусов." }] },
  "es12-noticias": { titulo: "Проценты и «большинство»", texto: "**el 20 por ciento** — с артиклем **el**; глагол обычно в ед. ч.: **El 20 por ciento vota.** **la mayoría de** + мн. ч. допускает оба варианта: **La mayoría de los jóvenes vive / viven con sus padres.**\n**uno de cada tres** — каждый третий.", ejemplos: [{ es: "Uno de cada tres jóvenes vive con sus padres.", ru: "Каждый третий молодой человек живёт с родителями." }] },
  "es12-sociedad": { titulo: "Subir и aumentar", texto: "В разговоре вместо **aumentar / disminuir** чаще говорят **subir / bajar**: **Han subido los precios.** **Ha bajado el paro.** В новостях и текстах — **aumentar, disminuir, reducir**.\n**cada vez más** — всё больше: **Cada vez hay más turistas.**", ejemplos: [{ es: "Cada vez más gente trabaja desde casa.", ru: "Всё больше людей работает из дома." }] },
  "es12-medio-ambiente": { titulo: "Контейнеры по цветам", texto: "В Испании мусор сортируют по цветным контейнерам: **amarillo** — пластик и упаковка, **azul** — бумага, **verde** — стекло, **marrón** — пищевые отходы. Спросить: **¿Dónde va esto?** — куда это (выбрасывать)?", ejemplos: [{ es: "El plástico va al contenedor amarillo.", ru: "Пластик — в жёлтый контейнер." }] },
  "es12-tecnologia": { titulo: "Английские слова по-испански", texto: "Много слов пришло из английского, но у многих есть испанская пара: **el enlace** (link), **el correo** (e-mail), **la contraseña** (password), **la red** (network), **en línea** (online). В разговоре услышишь оба варианта.", ejemplos: [{ es: "Te mando el enlace por correo.", ru: "Пришлю тебе ссылку по почте." }] }
};
const ES12_NAT = [
  ["Te lo doy mañana.", ["Lo te doy mañana.", "Te doy lo mañana."], "Сначала «кому», потом «что».", 1, "es12-combinados"],
  ["Se lo doy a Ana.", ["Le lo doy a Ana.", "Se le doy a Ana."], "**le + lo → se lo**.", 1, "es12-se-lo"],
  ["Dímelo, por favor.", ["Dime lo, por favor.", "Me lo di, por favor."], "С imperativo — слитно.", 2, "es12-lugar-imp"],
  ["No me lo digas.", ["No dímelo.", "No me lo dices."], "С **no** — перед глаголом, subjuntivo.", 2, "es12-lugar-imp"],
  ["Voy a dártelo.", ["Te voy a darlo.", "Voy a te lo dar."], "Пара местоимений — вместе.", 2, "es12-lugar-inf"],
  ["La chica que vive aquí es rusa.", ["La chica quien vive aquí es rusa.", "La chica lo que vive aquí es rusa."], "Без предлога — **que**.", 3, "es12-que-quien"],
  ["No entiendo lo que dices.", ["No entiendo que dices.", "No entiendo lo cual dices."], "«То, что» — **lo que**.", 3, "es12-lo-que"],
  ["Como estoy cansado, no voy.", ["Por eso estoy cansado, no voy.", "Así que estoy cansado, no voy."], "Причина в начале — **como**.", 4, "es12-causa"],
  ["Aunque llueva mañana, iré.", ["Aunque lloverá mañana, iré.", "Sin embargo llueva mañana, iré."], "«Даже если» — **aunque** + subjuntivo.", 4, "es12-contraste"],
  ["Gracias por tu ayuda.", ["Gracias para tu ayuda.", "Gracias de tu ayuda."], "Причина — **por**.", 5, "es12-por"],
  ["Este regalo es para ti.", ["Este regalo es por ti.", "Este regalo es a ti."], "Адресат — **para**.", 5, "es12-para"],
  ["Se venden pisos.", ["Se vende pisos.", "Se venden piso."], "Глагол согласуется.", 6, "es12-se-pasiva"],
  ["En España se cena tarde.", ["En España se cenan tarde.", "En España cena se tarde."], "«Ужинают» — **se cena**.", 6, "es12-se-impersonal"],
  ["Estoy listo, ¡vamos!", ["Soy listo, ¡vamos!", "Tengo listo, ¡vamos!"], "Готов — **estar listo**.", 7, "es12-ser-estar-cambio"],
  ["Estoy de acuerdo contigo.", ["Soy de acuerdo contigo.", "Estoy de acuerdo de ti."], "**estar de acuerdo con**.", 8, "es12-opinar"],
  ["Depende del precio.", ["Depende en el precio.", "Depende el precio."], "**depender de**.", 9, "es12-sociedad"]
];
const ES12_POR = [
  ["Se lo doy a Ana.", "Почему «se», а не «le»?", "Перед lo «le» превращается в «se»", ["Это возвратный глагол", "Это ошибка"], "**le + lo → se lo**.", 1, "es12-se-lo"],
  ["Dámelo.", "Почему слитно и в конце?", "Это утвердительный imperativo", ["Это вопрос", "Это прошедшее время"], "С imperativo — слитно в конце.", 2, "es12-lugar-imp"],
  ["No me lo des.", "Почему местоимения перед глаголом?", "Это отрицательный imperativo", ["Это вопрос", "Это инфинитив"], "С **no** — перед глаголом.", 2, "es12-lugar-imp"],
  ["Aunque llueva, iré.", "Почему «llueva»?", "Неизвестно, будет ли дождь: «даже если»", ["Дождь уже идёт", "Это прошлое"], "**aunque** + subjuntivo.", 4, "es12-contraste"],
  ["Se venden pisos.", "Почему «venden»?", "Pisos — множественное число", ["Продают они", "Это ошибка"], "Глагол согласуется с **pisos**.", 6, "es12-se-pasiva"],
  ["Es para ti.", "Почему «para»?", "Это адресат: для кого", ["Это причина", "Это цена"], "Адресат — **para**.", 5, "es12-para"],
  ["Lo hice por ti.", "Почему «por»?", "Это причина: ради тебя", ["Это адресат", "Это срок"], "Причина — **por**.", 5, "es12-por"],
  ["Está listo.", "Что это значит?", "Он готов", ["Он умный", "Ему скучно"], "**estar listo** — готов.", 7, "es12-ser-estar-cambio"]
];
const ES12_OIDO = [
  ["Te la doy.", "Что я тебе даю?", "la llave", ["el libro", "la llave", "los apuntes"], "**la** — ж. р., ед. ч.", 1, "es12-combinados"],
  ["Se los mando.", "Что я отправляю?", "los documentos", ["el mensaje", "los documentos", "las fotos"], "**los** — м. р., мн. ч.", 1, "es12-se-lo"],
  ["Aunque llueva, salgo.", "Дождь уже идёт?", "Неизвестно", ["Да, идёт", "Неизвестно"], "**llueva** — «даже если».", 4, "es12-contraste"],
  ["Aunque llueve, salgo.", "Дождь уже идёт?", "Да, идёт", ["Да, идёт", "Неизвестно"], "**llueve** — «хотя».", 4, "es12-contraste"],
  ["Es muy listo.", "Какой он?", "Умный", ["Умный", "Готов"], "**ser listo** — умный.", 7, "es12-ser-estar-cambio"],
  ["Se venden pisos.", "Сколько квартир продаётся?", "Несколько", ["Одна", "Несколько"], "**se venden pisos** — мн. ч.", 6, "es12-se-pasiva"]
];
const ES12_PAR = [
  ["Ты отдаёшь ключи Марте (ей — их).", "Se las doy.", "Le las doy.", "**le + las → se las**.", 1, "es12-se-lo"],
  ["Ты просишь друга купить тебе билет (его — мне).", "Cómpramelo.", "Cómprame lo.", "Слитно: **cómpramelo**.", 2, "es12-lugar-imp"],
  ["Ты говоришь, что любишь больше всего.", "Lo que más me gusta es leer.", "Que más me gusta es leer.", "**lo que** — «то, что».", 3, "es12-lo-que"],
  ["Дождь идёт сейчас, но ты выходишь.", "Aunque llueve, salgo.", "Aunque llueva, salgo.", "Факт — обычное время.", 4, "es12-contraste"],
  ["Ты благодаришь за подарок.", "Gracias por el regalo.", "Gracias para el regalo.", "**gracias por**.", 5, "es12-por"],
  ["Ты говоришь, что суп вкусный.", "La sopa está muy rica.", "La sopa es muy rica.", "Вкусный — **estar rico**.", 7, "es12-ser-estar-cambio"]
];
const ES12_DESC = [
  ["me + lo → me lo · te + la → te la. А le + lo?", "se lo", ["le lo", "lo le"], "**le + lo → se lo**.", 1, "es12-se-lo"],
  ["da + me + lo → dámelo · di + me + lo → dímelo. А trae + me + la?", "tráemela", ["traemela", "tráelame"], "Слитно и со знаком.", 2, "es12-lugar-imp"],
  ["Dámelo → No me lo des · Cómpramelo → No me lo compres. А Díselo?", "No se lo digas", ["No díselo", "No se lo dices"], "**no** + местоимения + subjuntivo.", 2, "es12-lugar-imp"],
  ["Se vende piso · Se venden pisos. Se alquila habitación · а habitaciones?", "Se alquilan habitaciones", ["Se alquila habitaciones", "Se alquilan habitación"], "Глагол согласуется.", 6, "es12-se-pasiva"],
  ["es rico — богатый · está rico — вкусный. «Он умный» — es listo. А «он готов»?", "está listo", ["es listo", "tiene listo"], "Готов — **estar listo**.", 7, "es12-ser-estar-cambio"],
  ["para aprender (цель) · por la lluvia (причина). А «спасибо за помощь»: gracias ___ tu ayuda?", "por", ["para", "de"], "Причина — **por**.", 5, "es12-por"]
];
const ES12_CAD = [
  ["Doy el libro a Ana.", [["Замени «a Ana» местоимением (le), книга остаётся.", "Le doy el libro."], ["Теперь замени и «el libro».", "Se lo doy."]], 1, "es12-se-lo"],
  ["Dame la llave.", [["Замени «la llave» местоимением.", "Dámela."], ["Теперь скажи «не…».", "No me la des."]], 2, "es12-lugar-imp"],
  ["Te voy a explicar el problema.", [["Замени «el problema» местоимением (перед глаголом).", "Te lo voy a explicar."], ["Теперь поставь местоимения в конец.", "Voy a explicártelo."]], 2, "es12-lugar-inf"],
  ["Estoy cansado. No voy a la fiesta.", [["Соедини через porque.", "No voy a la fiesta porque estoy cansado."], ["Теперь начни с Como.", "Como estoy cansado, no voy a la fiesta."]], 4, "es12-causa"]
];
const ES12_DIAG = [
  ["Le lo doy a Ana.", "Le перед lo превращается в se", ["Нужно поменять местоимения местами", "Нужен инфинитив"], "Se lo doy a Ana.", 1, "es12-se-lo"],
  ["Dime lo, por favor.", "С imperativo местоимения пишутся слитно", ["Нужно usted", "Нужно no"], "Dímelo, por favor.", 2, "es12-lugar-imp"],
  ["Se vende pisos.", "Глагол согласуется: pisos — мн. ч.", ["Нужно убрать se", "Нужен артикль"], "Se venden pisos.", 6, "es12-se-pasiva"],
  ["Soy de acuerdo contigo.", "De acuerdo — всегда с estar", ["Нужно con ti", "Нужен subjuntivo"], "Estoy de acuerdo contigo.", 8, "es12-opinar"],
  ["Gracias para tu ayuda.", "Причина — por", ["Нужно de", "Нужен артикль"], "Gracias por tu ayuda.", 5, "es12-por"],
  ["No entiendo que dices.", "«То, что» — lo que", ["Нужен subjuntivo", "Нужно quien"], "No entiendo lo que dices.", 3, "es12-lo-que"]
];
const ES12_DES = [
  ["Se lo doy a Ana mañana", [["Какое слово значит «ей»?", 0], ["Какое слово значит «его» (вещь)?", 1]], 1, "es12-se-lo"],
  ["Aunque llueva iré a la playa", [["Какое слово — subjuntivo?", 1], ["Какое слово значит «даже если»?", 0]], 4, "es12-contraste"],
  ["El bar donde trabaja Pablo está cerrado", [["Какое слово значит «где»?", 2], ["Какое слово показывает состояние?", 6]], 3, "es12-que-quien"]
];
/* Formas generadas: la frase con los dos pronombres — [infinitivo, persona, qué, pronombre, a quién, pronombre] */
const ES12_COMB_GEN = [
  ["dar", 0, "el libro", "lo", "a Ana", "se"], ["dar", 1, "la llave", "la", "", "me"], ["dar", 2, "los apuntes", "los", "", "nos"],
  ["decir", 0, "la verdad", "la", "a mis padres", "se"], ["decir", 1, "la verdad", "la", "", "me"],
  ["explicar", 0, "el problema", "lo", "a Pablo", "se"], ["explicar", 2, "la regla", "la", "", "nos"], ["explicar", 1, "los deberes", "los", "", "me"],
  ["mandar", 0, "las fotos", "las", "a mi madre", "se"], ["mandar", 2, "el mensaje", "lo", "", "te"], ["mandar", 3, "los documentos", "los", "al jefe", "se"],
  ["dejar", 0, "el coche", "lo", "a mi hermano", "se"], ["dejar", 1, "la bici", "la", "", "me"],
  ["traer", 2, "el café", "lo", "", "nos"], ["traer", 0, "las llaves", "las", "", "te"],
  ["comprar", 0, "el billete", "lo", "a Marta", "se"], ["comprar", 5, "los libros", "los", "", "nos"],
  ["enseñar", 0, "el piso", "lo", "a mis amigos", "se"], ["enseñar", 1, "las fotos", "las", "", "me"],
  ["contar", 0, "la historia", "la", "a los niños", "se"], ["contar", 2, "el problema", "lo", "", "me"],
  ["pedir", 0, "la cuenta", "la", "al camarero", "se"], ["pedir", 3, "el dinero", "lo", "a nuestros padres", "se"],
  ["devolver", 0, "el dinero", "lo", "a Javier", "se"], ["devolver", 2, "la fianza", "la", "", "me"],
  ["prestar", 0, "los apuntes", "los", "a Lucía", "se"], ["prestar", 1, "el coche", "lo", "", "nos"],
  ["regalar", 3, "las flores", "las", "a la profesora", "se"], ["regalar", 5, "el móvil", "lo", "", "me"],
  ["enviar", 0, "el paquete", "lo", "a mis padres", "se"], ["recomendar", 0, "la película", "la", "", "te"], ["recomendar", 2, "el restaurante", "lo", "", "os"]
];

function es12Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES12-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES12_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES12_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES12_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oid-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES12_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES12_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("dsc-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES12_CAD.forEach(([base, pasos, mod, regla], i) => P("cdn-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES12_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES12_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* Formas generadas: «Doy el libro a Ana.» → «Se lo doy.» */
  ES12_COMB_GEN.forEach(([inf, p, obj, od, rec, oi], i) => {
    const v = es12Pres(inf, p); if (!v) return;
    const base = es12Mayus(oi === "se" ? v + " " + obj + " " + rec + "." : oi + " " + v + " " + obj + ".");
    const ok = es12Mayus(oi + " " + od + " " + v + ".");
    const oks = rec ? [ok, es12Mayus(oi + " " + od + " " + v + " " + rec + ".")] : [ok];
    P("cg-" + i, "combinados-forma", "escribir", 1, oi === "se" ? "es12-se-lo" : "es12-combinados",
      { dificultad: 3, grupo: "cg-" + inf, lex: lex(inf), pide: "Напиши фразу с двумя местоимениями.", grande: base, esperadas: oks, idioma: "es", foco: true, formaCasi: false, oir: ok,
        explicacion: "**" + obj + "** → **" + od + "**" + (oi === "se" ? "; **" + rec + "** → **se**" : "") + ": **" + ok + "**" });
  });
}
UNIDAD_ES_12.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES12_MAS[s.id] && !s.mas) s.mas = ES12_MAS[s.id]; }));
