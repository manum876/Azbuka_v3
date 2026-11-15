const ES11_V = {"1":["ojalá","temer","desear","rogar","cierto","injusto","lógico"],"2":["entregar","devolver","cancelar","confirmar","informar","comunicar","traer","tocar","olvidar"],"3":["prohibir","notificar","consultar","aclarar"],"4":["para que","imprescindible","conveniente","urgente","raro","extraño","evidente","terrible","fatal"],"5":["alegrar","alegrarse","sorprender","sorprenderse","preocuparse","sentir","lamentar","dudar","negar","culpa","molesto","molestia","culpable","responsable","harto","mentir"],"6":["en cuanto","antes de que","sin que","plazo","retraso","retrasar","puntual","mensual","anual"],"7":["cola","turno","permiso","norma","ley","multa","derecho","obligación","condición","regla","cuidado","peligro","peligroso","seguridad","prisa","calma","paciencia"],"8":["vivienda","alquiler","casero","propietario","inquilino","comunidad","vecindario","portero","portal","buzón","cerradura","tubería","aire","electricidad","horno","mueble","fuga","ruido","basura","contenedor","fianza","roto","estropear","estropearse","arreglar","reparar","reparación","técnico","instalar","instalación","revisar","revisión","presupuesto","mantenimiento","obra","avería","calefacción","aire acondicionado","grifo","enchufe","bombilla","gotear","mudanza","electrodoméstico","wifi","apagar","encender","romperse","limpieza","compartir","agencia","visita","quitar"],"9":["trámite","documento","certificado","ayuntamiento","firma","sello","requisito","renovar","caducar","copia","fotocopia","original","rellenar","ventanilla","residencia","oficial","público","privado","gratuito","gratis","transferencia","cajero","ingresar","retirar","pago","recibo","contraseña","código","usuario","conexión"],"10":["hoja","queja","quejarse","reclamar","reclamación","devolución","factura","garantía","solución","solucionar","resolver","equivocarse","equivocación","estimado","saludo","adjunto","adjuntar","asunto","atentamente","agradecer","disculpa","disculparse","envío","entrega","mensajero","objeto","perdido","urgencia","resultado","daño","aviso","anular"],"a8":["gotera","humedad","lavavajillas","fregadero","cerrajero"],"a9":["préstamo","hipoteca","comisión","suministro","saldo","padrón"],"a10":["denuncia","denunciar","robo","emergencia","incendio","fuego","humo"]};

/* ============================================================
   DATA-UNIDAD-ES-11.JS — Abecé · Урок 11: Решаем проблемы
   (Resolver problemas). Completa (13/11/2026).
   ------------------------------------------------------------
   Contenido propio de la unidad (claude/PROGRAMA_ABECE.md §2, U11;
   propuesta aprobada por Manu el 13/11/2026: claude/PROPUESTA_U11_ABECE.md):
   módulos, teoría en ruso (borrador para Iván), tablas y ejercicios.
   Mismo formato que data-unidad-es-10.js, con la profundización desde el
   principio. **Todo el subjuntivo va acá** (Manu, 13/11/2026).
   Las formas salen de data-verbos-es.js: subjuntivo (es11Subj), presente
   (es11Pres), futuro (es11Fut), imperativo de tú (es11Imp), imperativo
   negativo (es11ImpNeg = no + subjuntivo de tú) e imperativo de usted
   (es11ImpUd = subjuntivo de él).
   Decisiones de Manu (13/11/2026): 34 entradas nuevas (sin cita previa ni
   empadronarse); toda la ampliación; sin nota cultural nueva; dos
   personajes nuevos —el casero y la funcionaria— con las voces de siempre;
   «echar de menos» es una fórmula: va como frase (FRE-153); desafío
   «Желание дня».
   ============================================================ */

const ES11_PERS = [["yo", "я"], ["tú", "ты"], ["él / ella / usted", "он / она / вы (вежливо, одному)"], ["nosotros / nosotras", "мы"], ["vosotros / vosotras", "вы (неформально, нескольким)"], ["ellos / ellas / ustedes", "они / вы (вежливо, нескольким)"]];
const ES11_SE = ["me", "te", "se", "nos", "os", "se"];
function es11Verbo(inf) {
  if (typeof LEXICON_ES === "undefined" || typeof VERBOS_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === inf && x.posNormalized === "verbo");
  const v = e && VERBOS_ES[e.id];
  if (!v) return null;
  if (v.base) return Object.assign({ se: true }, VERBOS_ES[v.base]);
  return v.pronominal ? Object.assign({ se: true }, v) : v;
}
function es11Tiempo(t) {
  return (inf, p) => { const v = es11Verbo(inf); if (!v || !v[t] || !v[t][p]) return ""; return (v.se ? ES11_SE[p] + " " : "") + v[t][p]; };
}
const es11Subj = es11Tiempo("subj");
const es11Pres = es11Tiempo("pres");
const es11Fut = es11Tiempo("fut");
function es11Imp(inf) { const v = es11Verbo(inf); return v && v.impTu ? v.impTu : ""; }
function es11ImpNeg(inf) { const f = es11Subj(inf, 1); return f ? "no " + f : ""; }
function es11ImpUd(inf) { const v = es11Verbo(inf); return v && !v.se && v.subj ? v.subj[2] : ""; }
const es11Tabla2 = (a, b, fn) => ES11_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: fn(a, i) + " · " + fn(b, i) }]);

const UNIDAD_ES_11 = {
  id: 11,
  titulo: "Решаем проблемы",
  tituloEs: "Resolver problemas",
  objetivo: "Попросить, посоветовать, пожаловаться и решить бытовую проблему — дома, в учреждении, в банке — устно и в официальном письме. Весь subjuntivo.",
  tiempo: "4 недели ежедневной практики (примерно 25–30 часов)",
  modulos: [
    {
      id: "es11m1", n: 1, tipo: "leccion",
      titulo: "Ojalá…",
      resumen: "Presente de subjuntivo: правильные формы.",
      intro: "**Subjuntivo** — особое наклонение. Им говорят о том, что **желают, советуют, чувствуют, в чём сомневаются** — а не о фактах. Первое слово с ним — **ojalá**: «хоть бы, дай бог». **Ojalá haga sol** — хоть бы было солнце.",
      tablas: [
        { titulo: "Hablar, comer, vivir", encabezados: ["Кто", "Форма"], filas: ES11_PERS.map(([p, r], i) => [{ es: p, ru: r }, { es: es11Subj("hablar", i) + " · " + es11Subj("comer", i) + " · " + es11Subj("vivir", i) }]) }
      ],
      secciones: [
        {
          id: "es11-subj-reg",
          titulo: "Hable, coma, viva",
          texto: "Гласная **меняется местами**:\n· глаголы на **-ar** получают **-e**: **hablar → hable, hables, hable, hablemos, habléis, hablen**;\n· на **-er** и **-ir** — **-a**: **comer → coma**, **vivir → viva**.\nФорма строится от **yo** настоящего времени без **-o**: **hablo → habl- → hable**.\nУ **yo** и **él** — одна форма: **que yo hable**, **que él hable**.",
          comparacion: "Похоже на русское «чтобы» + прошедшее: «хочу, **чтобы** ты **пришёл**» — **quiero que vengas**. Где по-русски «чтобы», по-испански почти всегда **que** + subjuntivo.",
          ejemplos: [
            { es: "Ojalá llegue pronto el tren.", ru: "Хоть бы поезд пришёл скорее." },
            { es: "Ojalá no llueva mañana.", ru: "Хоть бы завтра не было дождя." },
            { es: "Ojalá vivamos cerca.", ru: "Хоть бы мы жили рядом." }
          ],
          errores: [
            { mal: "Ojalá llueve mañana.", bien: "Ojalá llueva mañana.", por: "После **ojalá** — subjuntivo." }
          ],
          chequeo: [
            { pide: "Ojalá ___ pronto. (tú, llegar)", opciones: ["llegues", "llegas", "llegarás"], ok: "llegues", por: "**llegar** → **llegue**, ты — **llegues** (gu, чтобы сохранить звук)." }
          ]
        },
        {
          id: "es11-subj-raiz",
          titulo: "Quiera, pueda, pida",
          texto: "Глаголы «ботинок» меняют корень, как в presente: **querer → quiera, quieras… queramos**; **poder → pueda**; **volver → vuelva**.\nУ **pedir, servir, repetir** e → i **во всех лицах**: **pida, pidas, pidamos**.\nУ **dormir** — o → ue и o → u: **duerma… durmamos**.\nНа письме сохраняется звук: **llegar → llegue**, **buscar → busque**, **empezar → empiece**, **coger → coja**.",
          ejemplos: [
            { es: "Ojalá puedas venir.", ru: "Хоть бы ты смог прийти." },
            { es: "Ojalá duerma bien esta noche.", ru: "Хоть бы я хорошо выспался сегодня." }
          ],
          chequeo: [
            { pide: "Ojalá ___ venir. (vosotros, poder)", opciones: ["podáis", "puedáis", "podéis"], ok: "podáis", por: "У **nosotros** и **vosotros** корень не меняется: **podamos, podáis**." }
          ]
        }
      ],
      frases: ["FRE-147"],
      dialogos: ["DLE-050"],
      vocab: ES11_V["1"]
    },
    {
      id: "es11m2", n: 2, tipo: "leccion",
      titulo: "Tenga, haga, vaya",
      resumen: "Неправильные формы subjuntivo.",
      intro: "Большинство «неправильных» форм на самом деле правильные: они строятся от **yo** настоящего времени. **Tengo → tenga**, **hago → haga**, **digo → diga**. Совсем особых — шесть.",
      tablas: [
        { titulo: "Desde el yo del presente", encabezados: ["Yo (presente)", "Subjuntivo"], filas: [["tener", "tengo"], ["hacer", "hago"], ["salir", "salgo"], ["venir", "vengo"], ["decir", "digo"], ["poner", "pongo"], ["traer", "traigo"], ["conocer", "conozco"]].map(([v, y]) => [{ es: y + " (" + v + ")" }, { es: es11Subj(v, 0) }]) },
        { titulo: "Seis especiales", encabezados: ["Инфинитив", "yo · nosotros"], filas: ["ser", "ir", "estar", "haber", "saber", "dar"].map(v => [{ es: v }, { es: es11Subj(v, 0) + " · " + es11Subj(v, 3) }]) }
      ],
      secciones: [
        {
          id: "es11-subj-irr",
          titulo: "Tengo → tenga",
          texto: "Берём **yo** настоящего времени, убираем **-o** и добавляем окончания: **tengo → teng- → tenga, tengas, tenga, tengamos, tengáis, tengan**.\nТак же **haga, salga, venga, diga, ponga, traiga, conozca, oiga**.\nОсобые: **ser → sea**, **ir → vaya**, **estar → esté**, **haber → haya**, **saber → sepa**, **dar → dé**.",
          ejemplos: [
            { es: "Ojalá haga buen tiempo.", ru: "Хоть бы была хорошая погода." },
            { es: "Ojalá sea verdad.", ru: "Хоть бы это была правда." },
            { es: "Ojalá haya billetes para el tren.", ru: "Хоть бы были билеты на поезд." }
          ],
          errores: [
            { mal: "Ojalá hace sol.", bien: "Ojalá haga sol.", por: "**hago → haga**." },
            { mal: "Ojalá esta en casa.", bien: "Ojalá esté en casa.", por: "**estar → esté**, со знаком." }
          ],
          chequeo: [
            { pide: "Ojalá ___ en casa. (él, estar)", opciones: ["esté", "está", "este"], ok: "esté", por: "**esté** — со знаком: **este** — «этот»." }
          ]
        },
        {
          id: "es11-que-deseo",
          titulo: "¡Que te mejores!",
          texto: "**Que** + subjuntivo в начале фразы — пожелание: **¡Que te mejores!** — выздоравливай! **¡Que lo pases bien!** — хорошо провести время! **¡Que tengas suerte!**\nС usted: **¡Que tenga un buen día!**",
          ejemplos: [
            { es: "¡Que tengas un buen viaje!", ru: "Счастливого пути!" },
            { es: "¡Que te vaya bien!", ru: "Удачи! / Пусть у тебя всё будет хорошо!" }
          ]
        }
      ],
      frases: ["FRE-148", "FRE-149"],
      vocab: ES11_V["2"]
    },
    {
      id: "es11m3", n: 3, tipo: "leccion",
      titulo: "Quiero que vengas",
      resumen: "Хочу, чтобы… прошу, чтобы… советую…",
      intro: "Самый частый случай: один человек **хочет, просит, советует**, чтобы **другой** что-то сделал. **Quiero que vengas** — я хочу, чтобы ты пришёл. Если человек один и тот же — инфинитив: **Quiero venir**.",
      secciones: [
        {
          id: "es11-querer-que",
          titulo: "Quiero que + subjuntivo",
          texto: "Глаголы желания и влияния + **que** + subjuntivo: **querer, esperar, necesitar, pedir, recomendar, aconsejar, prohibir, permitir, rogar**.\n**Espero que vengas** — надеюсь, что ты придёшь.\n**Te pido que me ayudes** — прошу тебя помочь мне.\n**Te recomiendo que hables con el casero** — советую тебе поговорить с хозяином.",
          comparacion: "«Надеюсь, что придёшь» — в русском обычное будущее. В испанском после **espero que** — всегда subjuntivo: **espero que vengas**.",
          ejemplos: [
            { es: "Quiero que me llames mañana.", ru: "Я хочу, чтобы ты позвонил мне завтра." },
            { es: "El médico me recomienda que descanse.", ru: "Врач советует мне отдохнуть." },
            { es: "Espero que todo salga bien.", ru: "Надеюсь, всё пройдёт хорошо." }
          ],
          errores: [
            { mal: "Quiero que vienes.", bien: "Quiero que vengas.", por: "После **quiero que** — subjuntivo." },
            { mal: "Espero que vendrás.", bien: "Espero que vengas.", por: "После **espero que** — subjuntivo, не futuro." }
          ],
          chequeo: [
            { pide: "Te pido que me ___. (ayudar)", opciones: ["ayudes", "ayudas", "ayudarás"], ok: "ayudes", por: "**pedir que** + subjuntivo." }
          ]
        },
        {
          id: "es11-mismo-sujeto",
          titulo: "Quiero ir / Quiero que vayas",
          texto: "Если тот, кто хочет, и тот, кто делает, — **один человек**, нужен **инфинитив**: **Quiero ir** (я хочу, и я пойду).\nЕсли **разные** — **que** + subjuntivo: **Quiero que vayas** (я хочу, а пойдёшь ты).\n«Quiero que yo vaya» — ошибка.",
          ejemplos: [
            { es: "Necesito hablar con el técnico.", ru: "Мне нужно поговорить с мастером." },
            { es: "Necesito que el técnico venga hoy.", ru: "Мне нужно, чтобы мастер пришёл сегодня." }
          ],
          errores: [
            { mal: "Quiero que yo vaya al banco.", bien: "Quiero ir al banco.", por: "Один и тот же человек — инфинитив." }
          ],
          chequeo: [
            { pide: "(Я хочу, и я отдохну.) Quiero ___.", opciones: ["descansar", "que descanse", "que descanso"], ok: "descansar", por: "Один человек — инфинитив." }
          ]
        }
      ],
      dialogos: ["DLE-053"],
      vocab: ES11_V["3"]
    },
    {
      id: "es11m4", n: 4, tipo: "leccion",
      titulo: "Es importante que…",
      resumen: "Важно, чтобы… · para que.",
      intro: "Оценка чужого действия — тоже с subjuntivo: **Es importante que traigas el pasaporte**. А **para que** — «чтобы» в чистом виде.",
      secciones: [
        {
          id: "es11-valoracion",
          titulo: "Es importante que…",
          texto: "**Es importante / necesario / imprescindible / mejor / normal / raro / lógico / urgente que** + subjuntivo:\n**Es mejor que llames antes.** — Лучше позвони заранее.\n**Es normal que estés nervioso.**\nБез человека — инфинитив: **Es importante llegar puntual.**\nНо **es verdad / es evidente / está claro que** — это факт: обычное время (indicativo): **Es verdad que es caro.**",
          ejemplos: [
            { es: "Es imprescindible que rellenes este formulario.", ru: "Обязательно заполни эту форму." },
            { es: "Es raro que no conteste.", ru: "Странно, что он не отвечает." }
          ],
          errores: [
            { mal: "Es importante que llegas puntual.", bien: "Es importante que llegues puntual.", por: "После **es importante que** — subjuntivo." }
          ],
          chequeo: [
            { pide: "Es mejor que ___ antes. (tú, llamar)", opciones: ["llames", "llamas", "llamarás"], ok: "llames", por: "**es mejor que** + subjuntivo." }
          ]
        },
        {
          id: "es11-para-que",
          titulo: "Para que",
          texto: "**para** + инфинитив — один и тот же человек: **Estudio para aprobar.**\n**para que** + subjuntivo — разные люди: **Te lo explico para que lo entiendas.** — объясняю тебе, чтобы ты понял.",
          ejemplos: [
            { es: "Te dejo la llave para que puedas entrar.", ru: "Оставляю тебе ключ, чтобы ты мог войти." },
            { es: "Ahorro para comprar un coche.", ru: "Я коплю, чтобы купить машину." }
          ],
          chequeo: [
            { pide: "Te mando la foto para que la ___. (ver)", opciones: ["veas", "ves", "ver"], ok: "veas", por: "Разные люди — **para que** + subjuntivo." }
          ]
        }
      ],
      vocab: ES11_V["4"]
    },
    {
      id: "es11m5", n: 5, tipo: "leccion",
      titulo: "Me alegra que…",
      resumen: "Чувства и сомнения.",
      intro: "Когда говорим, **что чувствуем** по поводу чужого действия, — subjuntivo: **Me alegra que vengas**. И когда **сомневаемся**: **No creo que sea verdad**.",
      secciones: [
        {
          id: "es11-emocion",
          titulo: "Me alegra que, me molesta que",
          texto: "Как **gustar**: **me alegra / me molesta / me preocupa / me sorprende / me encanta que** + subjuntivo.\n**Siento que** + subjuntivo — мне жаль, что…: **Siento que estés enfermo.**\n**¡Qué pena que…!**, **¡Qué raro que…!**\nО себе — инфинитив: **Me alegra verte.**",
          ejemplos: [
            { es: "Me alegra que te guste el piso.", ru: "Я рад, что тебе нравится квартира." },
            { es: "Me molesta que haya tanto ruido.", ru: "Меня раздражает, что так шумно." },
            { es: "¡Qué pena que no puedas venir!", ru: "Как жаль, что ты не можешь прийти!" }
          ],
          chequeo: [
            { pide: "Me preocupa que no ___ nada. (él, decir)", opciones: ["diga", "dice", "dirá"], ok: "diga", por: "Чувство — subjuntivo: **diga**." }
          ]
        },
        {
          id: "es11-duda",
          titulo: "Creo que es / No creo que sea",
          texto: "**Creo que, pienso que, me parece que, es verdad que** — уверенность: обычное время: **Creo que es caro.**\n**No creo que, no pienso que, dudo que, no es verdad que** — сомнение: subjuntivo: **No creo que sea caro.**\nВ вопросе можно и так и так.",
          ejemplos: [
            { es: "Creo que el técnico viene mañana.", ru: "Думаю, мастер придёт завтра." },
            { es: "No creo que venga mañana.", ru: "Не думаю, что он придёт завтра." },
            { es: "Dudo que tengan razón.", ru: "Сомневаюсь, что они правы." }
          ],
          errores: [
            { mal: "No creo que es verdad.", bien: "No creo que sea verdad.", por: "**no creo que** + subjuntivo." },
            { mal: "Creo que sea verdad.", bien: "Creo que es verdad.", por: "**creo que** — обычное время." }
          ],
          chequeo: [
            { pide: "No creo que ___ abierto. (estar)", opciones: ["esté", "está", "estará"], ok: "esté", por: "**no creo que** + subjuntivo." }
          ]
        }
      ],
      vocab: ES11_V["5"]
    },
    {
      id: "es11m6", n: 6, tipo: "leccion",
      titulo: "Cuando llegues…",
      resumen: "Cuando + subjuntivo о будущем.",
      intro: "«Когда приедешь, позвони» — по-русски будущее. По-испански — **cuando llegues**: после **cuando** о будущем всегда subjuntivo.",
      tablas: [
        { titulo: "Cuando…", encabezados: ["Когда", "Пример"], filas: [
          [{ es: "normalmente", ru: "обычно" }, { es: "Cuando llego a casa, ceno.", ru: "Когда прихожу домой, ужинаю." }],
          [{ es: "pasado", ru: "в прошлом" }, { es: "Cuando llegué, cené.", ru: "Когда я пришёл, поужинал." }],
          [{ es: "futuro", ru: "в будущем" }, { es: "Cuando llegue, cenaré.", ru: "Когда приду, поужинаю." }]] }
      ],
      secciones: [
        {
          id: "es11-cuando",
          titulo: "Cuando llegue",
          texto: "После **cuando**:\n· обычно, всегда → presente: **Cuando llueve, me quedo en casa**;\n· в прошлом → indefinido / imperfecto: **Cuando llegué, estaba cerrado**;\n· **в будущем → subjuntivo**: **Cuando llegues, llámame.**\nНикогда не «cuando llegarás». Вопрос **¿Cuándo…?** — обычное время: **¿Cuándo vienes?**",
          comparacion: "Та же ловушка, что «si tendré» в 10-м уроке: «когда **будет** время» — **cuando tenga tiempo**.",
          ejemplos: [
            { es: "Cuando tenga tiempo, te llamo.", ru: "Когда будет время, позвоню." },
            { es: "Cuando termine el curso, buscaré trabajo.", ru: "Когда закончу курс, буду искать работу." }
          ],
          errores: [
            { mal: "Cuando vendrás, te lo explico.", bien: "Cuando vengas, te lo explico.", por: "О будущем после **cuando** — subjuntivo." }
          ],
          chequeo: [
            { pide: "Cuando ___ a casa, avísame. (tú, llegar)", opciones: ["llegues", "llegas", "llegarás"], ok: "llegues", por: "Будущее — **cuando llegues**." }
          ]
        },
        {
          id: "es11-conjunciones",
          titulo: "En cuanto, hasta que, antes de que",
          texto: "Так же о будущем: **en cuanto** (как только), **hasta que** (пока не), **mientras** (пока): **En cuanto sepa algo, te aviso.**\n**antes de que** и **sin que** — **всегда** subjuntivo: **Llámame antes de que salgas.**\nОдин и тот же человек — **antes de / sin** + инфинитив: **Llámame antes de salir.**",
          ejemplos: [
            { es: "Espera aquí hasta que vuelva.", ru: "Подожди здесь, пока я не вернусь." },
            { es: "Entró sin que lo viéramos.", ru: "Он вошёл так, что мы не заметили." }
          ],
          chequeo: [
            { pide: "Te aviso en cuanto ___ algo. (yo, saber)", opciones: ["sepa", "sé", "sabré"], ok: "sepa", por: "**en cuanto** о будущем — subjuntivo: **sepa**." }
          ]
        }
      ],
      dialogos: ["DLE-050"],
      vocab: ES11_V["6"]
    },
    {
      id: "es11m7", n: 7, tipo: "leccion",
      titulo: "No toques nada",
      resumen: "Отрицательный imperativo и usted.",
      intro: "«Не трогай» — **no toques**. «Подпишите, пожалуйста» — **firme, por favor**. Обе формы берутся из subjuntivo.",
      tablas: [
        { titulo: "Tú y usted", encabezados: ["Инфинитив", "tú · no (tú) · usted · no (usted)"], filas: ["cruzar", "firmar", "venir", "hacer", "ir", "poner"].map(v => [{ es: v }, { es: es11Imp(v) + " · " + es11ImpNeg(v) + " · " + es11ImpUd(v) + " · no " + es11ImpUd(v) }]) }
      ],
      secciones: [
        {
          id: "es11-imp-neg",
          titulo: "No cruces",
          texto: "Отрицательный imperativo для **ты** = **no** + subjuntivo (ты): **cruza → no cruces**, **ven → no vengas**, **haz → no hagas**.\nМестоимение — **перед** глаголом: **tócalo → no lo toques**, **siéntate → no te sientes**.",
          ejemplos: [
            { es: "No toques el enchufe.", ru: "Не трогай розетку." },
            { es: "No te preocupes.", ru: "Не волнуйся." },
            { es: "No firmes nada sin leer.", ru: "Ничего не подписывай, не прочитав." }
          ],
          errores: [
            { mal: "No cruza la calle.", bien: "No cruces la calle.", por: "**no** + subjuntivo: **no cruces**." },
            { mal: "No tócalo.", bien: "No lo toques.", por: "С **no** местоимение — перед глаголом." }
          ],
          chequeo: [
            { pide: "¡No ___ la puerta! (tú, abrir)", opciones: ["abras", "abre", "abres"], ok: "abras", por: "**no abras**." }
          ]
        },
        {
          id: "es11-imp-usted",
          titulo: "Firme aquí, por favor",
          texto: "Imperativo для **usted** = subjuntivo (él): **firme**, **rellene**, **venga**, **espere**. Для **ustedes** — **firmen, vengan**.\nОтрицание — просто **no**: **no firme**.\nМестоимение в утвердительной форме — в конце, со знаком: **siéntese**, **rellénelo**; в отрицательной — перед: **no se preocupe**.\nТак говорят в учреждениях, в банке, с незнакомыми: «**Perdone**», «**Oiga**» — ты уже их знаешь.",
          ejemplos: [
            { es: "Espere un momento, por favor.", ru: "Подождите минутку, пожалуйста." },
            { es: "Rellene este formulario y firme aquí.", ru: "Заполните эту форму и подпишите здесь." },
            { es: "No se preocupe.", ru: "Не волнуйтесь." }
          ],
          chequeo: [
            { pide: "(usted) ___ aquí, por favor. (firmar)", opciones: ["Firme", "Firma", "Firmes"], ok: "Firme", por: "usted — **firme**." }
          ]
        }
      ],
      frases: ["FRE-150"],
      dialogos: ["DLE-052"],
      vocab: ES11_V["7"]
    },
    {
      id: "es11m8", n: 8, tipo: "leccion",
      titulo: "Se ha roto el grifo",
      resumen: "Жильё и поломки.",
      intro: "Квартира в аренде: **el casero** (хозяин), **el inquilino** (жилец), **la fianza** (залог). И что делать, когда что-то сломалось.",
      tablas: [
        { titulo: "En el piso", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el grifo", ru: "кран" }, { es: "el enchufe", ru: "розетка" }],
          [{ es: "la bombilla", ru: "лампочка" }, { es: "la calefacción", ru: "отопление" }],
          [{ es: "el aire acondicionado", ru: "кондиционер" }, { es: "el horno", ru: "духовка" }],
          [{ es: "la cerradura", ru: "замок" }, { es: "la tubería", ru: "трубы" }],
          [{ es: "el electrodoméstico", ru: "бытовой прибор" }, { es: "el wifi", ru: "вайфай" }]] },
        { titulo: "Alquilar", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el casero / la casera", ru: "хозяин квартиры" }, { es: "el inquilino", ru: "жилец" }],
          [{ es: "el alquiler", ru: "аренда, квартплата" }, { es: "la fianza", ru: "залог" }],
          [{ es: "la agencia", ru: "агентство" }, { es: "la mudanza", ru: "переезд" }],
          [{ es: "la comunidad (de vecinos)", ru: "жильцы дома" }, { es: "el portero", ru: "консьерж" }]] }
      ],
      secciones: [
        {
          id: "es11-averias",
          titulo: "No funciona, se ha estropeado",
          texto: "Как сказать, что что-то сломалось:\n**No funciona el wifi.** — не работает.\n**Se ha roto / se ha estropeado la lavadora.** — сломалась (сама).\n**El grifo gotea.** — кран капает. **Hay una fuga de agua.** — течёт вода.\n**Hay una avería.** — неисправность.\nЧто делать: **llamar al técnico**, **pedir un presupuesto** (смету), **arreglar / reparar**, **cambiar la bombilla**.",
          ejemplos: [
            { es: "Se ha estropeado la calefacción.", ru: "Сломалось отопление." },
            { es: "¿Puede venir un técnico a revisar la instalación?", ru: "Может прийти мастер проверить проводку?" }
          ],
          chequeo: [
            { pide: "El grifo ___ . (капает)", opciones: ["gotea", "rompe", "funciona"], ok: "gotea", por: "**gotear** — капать." }
          ]
        },
        {
          id: "es11-alquilar",
          titulo: "Alquilar un piso",
          texto: "**alquilar** — снимать и сдавать; **el alquiler** — аренда и квартплата: **El alquiler es de 900 euros al mes.**\n**la fianza** — залог (обычно за один-два месяца).\n**compartir piso** — снимать квартиру вместе.\n**¿Quién paga la luz, el agua y el gas?** — кто платит за свет, воду и газ?",
          ejemplos: [
            { es: "Comparto piso con dos chicas.", ru: "Я снимаю квартиру с двумя девушками." },
            { es: "El casero me devuelve la fianza cuando me vaya.", ru: "Хозяин вернёт мне залог, когда я съеду." }
          ]
        }
      ],
      dialogos: ["DLE-051"],
      vocab: ES11_V["8"],
      ampliacion: {
        titulo: "Ещё о квартире",
        intro: "Эти слова не входят в проверку урока. **la gotera** — протечка в потолке; **la humedad** — сырость; **el lavavajillas** — посудомойка; **el fregadero** — кухонная раковина; **el cerrajero** — слесарь, если не открывается дверь.",
        vocab: ES11_V["a8"]
      }
    },
    {
      id: "es11m9", n: 9, tipo: "leccion",
      titulo: "Trámites y banco",
      resumen: "Учреждения, документы, банк.",
      intro: "В Испании многие дела называются **trámites**: продлить документ, получить справку, открыть счёт. Здесь — слова для учреждения и банка.",
      tablas: [
        { titulo: "En la oficina", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "el ayuntamiento", ru: "мэрия" }, { es: "la ventanilla", ru: "окошко" }],
          [{ es: "el documento", ru: "документ" }, { es: "el certificado", ru: "справка" }],
          [{ es: "la fotocopia", ru: "ксерокопия" }, { es: "el original", ru: "оригинал" }],
          [{ es: "la firma", ru: "подпись" }, { es: "el sello", ru: "печать" }],
          [{ es: "el requisito", ru: "требование" }, { es: "el plazo", ru: "срок" }]] },
        { titulo: "En el banco", encabezados: ["Испанский", "По-русски"], filas: [
          [{ es: "la cuenta", ru: "счёт" }, { es: "la transferencia", ru: "перевод" }],
          [{ es: "el cajero", ru: "банкомат" }, { es: "el recibo", ru: "квитанция" }],
          [{ es: "ingresar", ru: "положить (деньги)" }, { es: "retirar / sacar", ru: "снять" }],
          [{ es: "la contraseña", ru: "пароль" }, { es: "el usuario", ru: "пользователь" }]] }
      ],
      secciones: [
        {
          id: "es11-tramites",
          titulo: "Rellenar, firmar, renovar",
          texto: "В учреждении: **pedir cita** (записаться), **rellenar un formulario**, **firmar**, **entregar los documentos**, **renovar** (продлить).\n**¿Qué requisitos hay?** — что нужно?\n**Me caduca el pasaporte.** — у меня истекает паспорт.\n**turno** — номерок / чья очередь; **la cola** — очередь людей.",
          ejemplos: [
            { es: "Tengo que renovar el permiso de residencia.", ru: "Мне нужно продлить вид на жительство." },
            { es: "Traiga el original y una fotocopia.", ru: "Принесите оригинал и копию." }
          ],
          chequeo: [
            { pide: "Tengo que ___ este formulario. (заполнить)", opciones: ["rellenar", "renovar", "caducar"], ok: "rellenar", por: "**rellenar** — заполнить." }
          ]
        },
        {
          id: "es11-banco",
          titulo: "En el banco",
          texto: "**abrir una cuenta**, **hacer una transferencia**, **sacar dinero del cajero**, **ingresar dinero** (положить на счёт), **pagar un recibo**.\nВ интернете: **el usuario** и **la contraseña**; **el código** — код.\n**cobrar una comisión** — брать комиссию (см. «Ещё слова»).",
          ejemplos: [
            { es: "Quiero hacer una transferencia a mi madre.", ru: "Я хочу сделать перевод маме." },
            { es: "El cajero no me da dinero.", ru: "Банкомат не выдаёт мне деньги." }
          ]
        }
      ],
      dialogos: ["DLE-052"],
      vocab: ES11_V["9"],
      ampliacion: {
        titulo: "Ещё о банке",
        intro: "Эти слова не входят в проверку урока. **el préstamo** — кредит; **la hipoteca** — ипотека; **la comisión** — комиссия; **el suministro** — поставка (воды, света); **el saldo** — остаток на счёте; **el padrón** — реестр жителей.",
        vocab: ES11_V["a9"]
      }
    },
    {
      id: "es11m10", n: 10, tipo: "leccion",
      titulo: "Quería hacer una reclamación",
      resumen: "Жалоба и официальное письмо.",
      intro: "Как пожаловаться вежливо и написать официальное письмо: **Estimados señores… Le escribo para… Atentamente**.",
      tablas: [
        { titulo: "El correo formal", encabezados: ["Часть", "Пример"], filas: [
          [{ es: "saludo", ru: "обращение" }, { es: "Estimado señor Ruiz: / Estimados señores:" }],
          [{ es: "para qué", ru: "зачем пишу" }, { es: "Le escribo para informarle de un problema." }],
          [{ es: "problema", ru: "что случилось" }, { es: "El 3 de mayo compré… y no funciona." }],
          [{ es: "qué pides", ru: "просьба" }, { es: "Le pido que me devuelva el dinero." }],
          [{ es: "adjunto", ru: "приложение" }, { es: "Le adjunto la factura." }],
          [{ es: "al final", ru: "прощание" }, { es: "Atentamente, / Un saludo," }]] }
      ],
      secciones: [
        {
          id: "es11-reclamar",
          titulo: "Quejarse y reclamar",
          texto: "**quejarse (de algo)** — жаловаться: **Me quejo del ruido.**\n**reclamar / hacer una reclamación** — предъявить претензию.\n**pedir una devolución** — потребовать вернуть деньги; **la garantía** — гарантия.\nВежливо: **Quería hacer una reclamación.** — я хотел бы пожаловаться. **Me molesta que…** + subjuntivo.",
          ejemplos: [
            { es: "Quería hacer una reclamación.", ru: "Я бы хотел подать жалобу." },
            { es: "El móvil tiene garantía de dos años.", ru: "На телефон гарантия два года." }
          ],
          chequeo: [
            { pide: "Quiero que me ___ el dinero. (ustedes, devolver)", opciones: ["devuelvan", "devuelven", "devolverán"], ok: "devuelvan", por: "**quiero que** + subjuntivo." }
          ]
        },
        {
          id: "es11-correo-formal",
          titulo: "Estimado… Atentamente",
          texto: "В официальном письме — **usted**: **Le escribo**, **su factura**, **¿Podría…?**\nНачало: **Estimado señor Ruiz:**, **Estimada señora:**, **Estimados señores:** (с двоеточием).\nКонец: **Atentamente,** (официально) или **Un saludo,** (вежливо).\n**Le adjunto** — прилагаю; **el asunto** — тема письма.",
          ejemplos: [
            { es: "Le escribo para informarle de un error en la factura.", ru: "Пишу вам, чтобы сообщить об ошибке в счёте." },
            { es: "Le agradezco su atención.", ru: "Благодарю вас за внимание." }
          ],
          errores: [
            { mal: "Estimado señor: ¿puedes revisar tu factura?", bien: "Estimado señor: ¿podría revisar su factura?", por: "Официальное письмо — **usted**." }
          ]
        }
      ],
      frases: ["FRE-151", "FRE-152"],
      dialogos: ["DLE-054"],
      vocab: ES11_V["10"],
      ampliacion: {
        titulo: "Если случилась беда",
        intro: "Эти слова не входят в проверку урока. **la denuncia** — заявление в полицию; **denunciar un robo** — заявить о краже; **la emergencia** — ЧП (телефон **112**); **el incendio** — пожар; **el fuego** — огонь; **el humo** — дым.",
        vocab: ES11_V["a10"]
      }
    },
    {
      id: "es11m11", n: 11, tipo: "conversaciones",
      titulo: "Разговоры",
      resumen: "Диалоги с записью голоса.",
      intro: "Выходные «хоть бы было солнце», сломанное отопление, мэрия, советы Хавьера и ошибка в счёте. Прочитай и послушай разговоры, запиши, как ты произносишь каждую реплику, и сравни с образцом.",
      dialogos: ["DLE-050", "DLE-051", "DLE-052", "DLE-053", "DLE-054"],
      frases: ["FRE-153"]
    },
    {
      id: "es11m12", n: 12, tipo: "proyecto",
      titulo: "Проект",
      resumen: "Решить проблему и написать жалобу.",
      intro: "Две части. **Разговор по ролям:** хозяин квартиры по телефону (сломалось отопление), служащая мэрии и чат с Лусией, которая снимает квартиру. **Потом напиши** официальное письмо-жалобу (10–14 фраз): обращение, зачем пишешь, что случилось, чего ты хочешь (**quiero que…, le pido que…**), когда (**cuando…, antes de que…**), прощание. Приложение отмечает, какие пункты уже есть в твоём тексте.",
      turnos: true,
      requisitos: [
        { txt: "Обращение (Estimado / Estimados señores)", rx: "\\b(estimad[oa]s?|señor(es)?|señora)\\b" },
        { txt: "Зачем пишешь (Le escribo para…)", rx: "\\b(le|les) escribo\\b|\\bescribo para\\b" },
        { txt: "Usted (le, su, podría…)", rx: "\\b(usted|ustedes|le|les|su|sus|podría|podrían)(?![a-záéíóúñ])" },
        { txt: "Что случилось — в прошедшем", rx: "\\b(he|ha|hemos|han) [a-záéíóúñ]+(ado|ido)\\b|\\b[a-záéíóúñ]+(é|ó|aron|ieron)(?![a-záéíóúñ])" },
        { txt: "Que + subjuntivo (quiero que, le pido que…)", rx: "\\bque (no )?(me |le |les |nos |lo |la )?(venga|vengan|haga|hagan|sea|esté|estén|haya|pueda|puedan|dé|den|[a-záéíóúñ]+(e|en|a|an))(?![a-záéíóúñ])" },
        { txt: "Cuando / antes de que / para que / en cuanto", rx: "\\b(cuando|antes de que|para que|en cuanto|hasta que)\\b" },
        { txt: "Прощание (Atentamente / Un saludo)", rx: "\\b(atentamente|un saludo|saludos)\\b" },
        { txt: "Не меньше 10 фраз", fn: t => azFrases(t).length >= 10 }
      ],
      consejos: [
        { rx: "\\bque (vienes|vienen|haces|hacen|puedes|pueden|devuelven|devuelves|arreglan|arreglas|mandan|mandas|llamas|llaman|es|está|están|tienes|tienen)(?![a-záéíóúñ])", msg: "После **quiero que, le pido que, espero que** — subjuntivo: **vengan, hagan, devuelvan, sea, esté**." },
        { rx: "\\bque yo [a-záéíóúñ]+", msg: "Если человек тот же — инфинитив: **quiero ir**, а не «quiero que yo vaya»." },
        { rx: "\\bcuando [a-záéíóúñ]+(ré|rá|rás|remos|rán)(?![a-záéíóúñ])", msg: "О будущем после **cuando** — subjuntivo: **cuando venga**, **cuando pueda**." },
        { rx: "\\bno creo que (es|está|están|son|tiene|tienen|hay|puede|pueden)(?![a-záéíóúñ])", msg: "**no creo que** + subjuntivo: **sea, esté, tenga, haya, pueda**." },
        { rx: "\\bojalá (es|está|hay|tiene|puede|viene|llega|llueve|hace)(?![a-záéíóúñ])", msg: "После **ojalá** — subjuntivo: **sea, esté, haya, tenga, venga, haga**." },
        { rx: "\\b(puedes|tienes|quieres|tu factura|tu casa|te escribo)\\b", msg: "В официальном письме — **usted**: **puede, su factura, le escribo**." },
        { rx: "\\bno (cruza|toca|firma|paga|abre|hace|viene)(?![a-záéíóúñ])", msg: "Отрицательный imperativo — **no** + subjuntivo: **no cruces, no firmes** (usted: **no firme**)." },
        { fn: t => /\b(estimad|señor)/i.test(t) || t.length < 40 ? [] : ["Начни письмо с обращения: **Estimado señor…:** / **Estimados señores:**"] },
        { fn: t => /\b(atentamente|un saludo|saludos)\b/i.test(t) || t.length < 40 ? [] : ["Закончи письмо: **Atentamente,** или **Un saludo,**"] },
        { fn: t => /\?/.test(t) && !/¿/.test(t) ? ["Вопрос по-испански начинается со знака **¿**."] : [] }
      ]
    },
    {
      id: "es11m13", n: 13, tipo: "examen",
      titulo: "Проверка урока",
      resumen: "Subjuntivo, imperativo, жильё и учреждения.",
      intro: "Двадцать упражнений в пяти частях. Каждый ответ — 1 балл, «Почти» — половина. Чтобы сдать урок, нужно набрать не менее 80 %. В большинстве заданий ответ нужно написать, а не выбрать.",
      partes: [
        { nombre: "Формы subjuntivo", tipos: ["subjuntivo", "subjuntivo-forma", "ojala"], n: 4 },
        { nombre: "Когда subjuntivo", tipos: ["deseo-que", "inf-o-que", "valoracion", "emocion", "duda"], n: 4 },
        { nombre: "Cuando и imperativo", tipos: ["cuando", "imp-neg", "imp-usted", "error"], n: 4 },
        { nombre: "Дом и учреждения", tipos: ["casa", "tramites", "reclamar", "registro"], n: 4 },
        { nombre: "Общение", tipos: ["pregunta", "situacion-frase", "respuesta", "dictado-frase"], n: 4 }
      ],
      aprobado: 0.8
    }
  ]
};

function unidadEs11Modulo(id) { return UNIDAD_ES_11.modulos.find(m => m.id === id) || null; }
window.UNIDAD_ES_11 = UNIDAD_ES_11;
window.unidadEs11Modulo = unidadEs11Modulo;

/* ── Vocabulario: palabras → IDs ── */
const ES11_ID_FIJO = {};
function es11Id(w) {
  if (ES11_ID_FIJO[w]) return ES11_ID_FIJO[w];
  if (typeof LEXICON_ES === "undefined") return null;
  const e = LEXICON_ES.find(x => x.es === w && !x.propio) || LEXICON_ES.find(x => x.es === w);
  return e ? e.id : null;
}
function es11Vocab(m) { return (m.vocab || []).map(es11Id).filter(Boolean); }
function es11Ampliacion(m) { return m.ampliacion ? m.ampliacion.vocab.map(es11Id).filter(Boolean) : []; }
/* Las palabras nuevas de la U11 (sin las que ya enseñaron la U1 a la U10, ni la ampliación) */
function es11Objetivo() {
  const antes = new Set([].concat(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => typeof window["es" + n + "Objetivo"] === "function" ? window["es" + n + "Objetivo"]() : [])));
  const out = [];
  UNIDAD_ES_11.modulos.forEach(m => es11Vocab(m).forEach(id => { if (!antes.has(id)) out.push(id); }));
  return [...new Set(out)];
}

/* ── Banco de ejercicios (sin traducción: PROGRAMA_ABECE.md §0) ── */
function ejerciciosUnidadEs11() {
  const out = [];
  const baraja = (arr, semilla) => {
    const a = arr.slice(); let s = semilla;
    for (let i = a.length - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor(s / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const lex = w => { const id = es11Id(w); return id ? [id] : undefined; };
  const lexEs = id => (typeof lexEsById === "function" ? lexEsById(id) : null);
  const mayusInicial = t => t.replace(/^([¿¡—]*)([a-záéíóúñ])/, (x, a, b) => a + b.toUpperCase());
  const llenar = (frase, ok) => mayusInicial(frase.replace(/\s*\([^)]*\)/g, "").replace("___", ok));
  const elegir = (pref, tipo, lista, mod, regla, pide, dif, semilla) => lista.forEach(([frase, ok, ops, exp, w, m2, r2], i) => {
    out.push({ id: "ES11-" + pref + "-" + i, tipo, forma: "elegir", dificultad: dif, modulo: m2 || mod, regla: r2 || regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, opciones: baraja(ops, i + semilla), correcta: ok, oir: frase.indexOf("___") >= 0 ? llenar(frase, ok) : ok, explicacion: exp });
  });
  const escribirFalta = (pref, tipo, lista, pide) => lista.forEach(([frase, ok, exp, mod, regla, w], i) => {
    const audio = llenar(frase, ok);
    out.push({ id: "ES11-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: w ? lex(w) : undefined,
      pide, grande: frase, esperadas: [ok, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio, explicacion: exp });
  });
  const escribirVerbo = (pref, tipo, lista, fn, pide) => lista.forEach(([frase, inf, p, mod, regla], i) => {
    const f = fn(inf, p); if (!f) return;
    const audio = llenar(frase, f);
    out.push({ id: "ES11-" + pref + "-" + i, tipo, forma: "escribir", dificultad: 3, modulo: mod, regla, grupo: pref + "-" + i, lex: lex(inf),
      pide: pide(inf), grande: frase, esperadas: [f, audio], idioma: "es", foco: true, formaCasi: false, completa: audio, oir: audio,
      explicacion: "**" + ES11_PERS[p][0].split(" / ")[0] + "** → **" + f + "**." });
  });

  /* 1. Formas */
  escribirVerbo("sj", "subjuntivo", ES11_SUBJ, es11Subj, inf => "Впиши «" + inf + "» в subjuntivo.");
  escribirVerbo("oj", "ojala", ES11_OJALA, es11Subj, inf => "Впиши «" + inf + "» после ojalá.");
  /* 2. Usos */
  escribirVerbo("dq", "deseo-que", ES11_DESEO, es11Subj, inf => "Впиши «" + inf + "» в нужной форме.");
  elegir("iq", "inf-o-que", ES11_INF_QUE, 3, "es11-mismo-sujeto", "Что подходит?", 2, 11);
  elegir("va", "valoracion", ES11_VALOR, 4, "es11-valoracion", "Что подходит?", 2, 21);
  elegir("em", "emocion", ES11_EMOCION, 5, "es11-emocion", "Что подходит?", 2, 31);
  elegir("du", "duda", ES11_DUDA, 5, "es11-duda", "Indicativo или subjuntivo?", 2, 41);
  /* 3. Cuando e imperativo */
  elegir("cu", "cuando", ES11_CUANDO, 6, "es11-cuando", "Что подходит?", 2, 51);
  escribirVerbo("cw", "cuando", ES11_CUANDO_ESC, es11Subj, inf => "Впиши «" + inf + "» — о будущем.");
  ES11_IMP_NEG.forEach(([inf, resto], i) => {
    const f = es11ImpNeg(inf), afirm = es11Imp(inf); if (!f || !afirm) return;
    out.push({ id: "ES11-in-" + i, tipo: "imp-neg", forma: "escribir", dificultad: 3, modulo: 7, regla: "es11-imp-neg", grupo: "in-" + i, lex: lex(inf),
      pide: "Скажи наоборот: «не…».", grande: mayusInicial(afirm + " " + resto) + ".", esperadas: [mayusInicial(f + " " + resto) + ".", f], idioma: "es", foco: true, formaCasi: false,
      oir: mayusInicial(f + " " + resto) + ".", explicacion: "**" + afirm + "** → **" + f + "**." });
  });
  ES11_IMP_UD.forEach(([inf, resto], i) => {
    const f = es11ImpUd(inf), afirm = es11Imp(inf); if (!f || !afirm) return;
    const ok = mayusInicial(f + (resto ? " " + resto : "")) + ".";
    out.push({ id: "ES11-iu-" + i, tipo: "imp-usted", forma: "escribir", dificultad: 3, modulo: 7, regla: "es11-imp-usted", grupo: "iu-" + i, lex: lex(inf),
      pide: "Скажи то же на usted.", grande: mayusInicial(afirm + (resto ? " " + resto : "")) + ".", esperadas: [ok, f], idioma: "es", foco: true, formaCasi: false,
      oir: ok, explicacion: "tú **" + afirm + "** → usted **" + f + "**." });
  });
  /* 4. Vida práctica */
  elegir("ca", "casa", ES11_CASA, 8, "es11-averias", "Какое слово подходит?", 2, 61);
  elegir("tr", "tramites", ES11_TRAMITES, 9, "es11-tramites", "Какое слово подходит?", 2, 71);
  elegir("rc", "reclamar", ES11_RECLAMAR, 10, "es11-reclamar", "Что подходит?", 2, 81);
  elegir("rg", "registro", ES11_REGISTRO, 10, "es11-correo-formal", "Как сказать на usted?", 2, 91);
  /* 5. Preguntas */
  ES11_PREGUNTAS.forEach(([preg, resp, ok, ops, mod, regla], i) => {
    out.push({ id: "ES11-pq-" + i, tipo: "pregunta", forma: "elegir", dificultad: 2, modulo: mod, regla, grupo: "pq-" + i,
      pide: "Ответ: «" + resp.replace(/\.$/, "") + "». Какой был вопрос?", grande: preg, opciones: baraja(ops, i + 95), correcta: ok, oir: preg.replace("___", ok),
      explicacion: "**" + preg.replace("___", ok) + "** — «" + resp.replace(/\.$/, "") + "»." });
  });
  /* 6. Errores típicos */
  ES11_ERRORES.forEach(([palabras, mal, arreglo, mod, regla, exp], i) => {
    out.push({ id: "ES11-er-" + i, tipo: "error", forma: "corregir", dificultad: 3, modulo: mod, regla, grupo: "er-" + i,
      palabras, correcta: mal, arreglo, oir: palabras.map((w, k) => k === mal ? arreglo : w).join(" "), explicacion: exp });
  });
  /* 7. Dictado de las palabras nuevas (y de la ampliación, aparte) */
  const OBJ = new Set(es11Objetivo());
  const dictado = (id, mod, ampl) => {
    const e = lexEs(id); if (!e) return;
    const w = e.es;
    if (/\s/.test(w) || out.some(x => x.id === "ES11-dic-" + id)) return;
    const x = { id: "ES11-dic-" + id, tipo: "dictado", forma: "escribir", dificultad: w.length > 6 ? 3 : 2, modulo: mod, grupo: id, lex: [id],
      pide: "Послушай и напиши слово.", audio: w, esperadas: [w], idioma: "es", oir: w,
      explicacion: "**" + w + "** (" + e.translit + ") — «" + (e.senses[0] || {}).ru + "»." };
    if (ampl) x.ampliacion = true;
    out.push(x);
  };
  UNIDAD_ES_11.modulos.forEach(m => {
    es11Vocab(m).forEach(id => { if (OBJ.has(id)) dictado(id, m.n); });
    es11Ampliacion(m).forEach(id => dictado(id, m.n, true));
  });
  /* 8. Situaciones y respuestas; dictado y orden de las frases de la U11 */
  ES11_SITUACIONES.forEach(([pide, ok, mal, exp, mod], i) => {
    out.push({ id: "ES11-sit-" + i, tipo: "situacion-frase", forma: "elegir", dificultad: 2, modulo: mod, grupo: "sit-" + i, pide, opciones: baraja([ok].concat(mal), i + 101), correcta: ok, oir: ok, explicacion: exp });
  });
  ES11_RESPUESTAS.forEach(([dice, ok, mal, exp, mod], i) => {
    out.push({ id: "ES11-resp-" + i, tipo: "respuesta", forma: "elegir", dificultad: 2, modulo: mod, grupo: "resp-" + i,
      pide: "Тебе говорят: что ответишь?", grande: dice, audio: dice, opciones: baraja([ok].concat(mal), i + 111), correcta: ok, oir: ok, explicacion: exp });
  });
  const fr = typeof FRASES_ES !== "undefined" ? FRASES_ES.filter(f => f.unidad === 11) : [];
  const modDeFrase = id => { const m = UNIDAD_ES_11.modulos.find(x => (x.frases || []).indexOf(id) >= 0); return m ? m.n : 10; };
  fr.forEach((f, i) => {
    const mod = modDeFrase(f.id), lx = (f.lex || []).filter(id => id && OBJ.has(id));
    const texto = f.es.replace(/…$/, "");
    out.push({ id: "ES11-dfr-" + f.id, tipo: "dictado-frase", forma: "escribir", dificultad: 3, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
      pide: "Послушай и напиши фразу.", audio: texto, esperadas: [texto, f.es], idioma: "es", oir: texto, explicacion: "**" + f.es + "** — «" + f.ru + "». " + f.uso });
    const pal = f.es.replace(/[¡!¿?.,…]/g, "").split(/\s+/).filter(Boolean);
    if (pal.length >= 3) {
      let fichas = baraja(pal, i + 121);
      if (fichas.join(" ") === pal.join(" ")) fichas = fichas.slice(1).concat(fichas[0]);
      out.push({ id: "ES11-ofr-" + f.id, tipo: "ordenar-frase", forma: "ordenar", dificultad: 2, modulo: mod, grupo: "fr-" + f.id, lex: lx.length ? lx : undefined,
        pide: "Собери фразу, которую слышишь.", audio: texto, fichas, sep: " ", esperada: pal.join(" "), oir: texto, explicacion: "**" + f.es + "** — «" + f.ru + "»." });
    }
  });
  /* 9. Proyecto: conversaciones por turnos (azSituacionEs) */
  ES11_TURNOS.forEach((T, i) => {
    out.push({ id: "ES11-tu-" + i, tipo: "turnos", forma: "turnos", dificultad: 3, modulo: 12, grupo: "tu-" + i, pide: (T.chat ? "💬 " : "🗣️ ") + T.titulo, turnos: T,
      explicacion: "Образец: " + T.pasos.map(p => "«" + p.sit.modelos[0] + "»").join(" · ") });
  });
  /* 10. Profundización y formas */
  es11Prof(out, baraja, lex);

  out.forEach(ex => { if (ex.lex) ex.items = ex.lex.map(id => "lex:" + id); });
  return out;
}

/* ── Datos de los ejercicios ── */
/* [frase, infinitivo, persona 0–5, módulo, regla] */
const ES11_SUBJ = [
  ["Ojalá ___ pronto. (tú, llegar)", "llegar", 1, 1, "es11-subj-reg"],
  ["Ojalá ___ en el centro. (nosotros, vivir)", "vivir", 3, 1, "es11-subj-reg"],
  ["Ojalá me ___ el piso. (ellos, alquilar)", "alquilar", 5, 1, "es11-subj-reg"],
  ["Ojalá ___ venir. (tú, poder)", "poder", 1, 1, "es11-subj-raiz"],
  ["Ojalá ___ bien esta noche. (yo, dormir)", "dormir", 0, 1, "es11-subj-raiz"],
  ["Ojalá ___ pronto. (vosotros, volver)", "volver", 4, 1, "es11-subj-raiz"],
  ["Ojalá ___ tiempo. (yo, tener)", "tener", 0, 2, "es11-subj-irr"],
  ["Ojalá ___ sol. (hacer)", "hacer", 2, 2, "es11-subj-irr"],
  ["Ojalá ___ verdad. (ser)", "ser", 2, 2, "es11-subj-irr"],
  ["Ojalá ___ en casa. (ella, estar)", "estar", 2, 2, "es11-subj-irr"],
  ["Ojalá ___ billetes. (haber)", "haber", 2, 2, "es11-subj-irr"],
  ["Ojalá ___ la respuesta. (ellos, saber)", "saber", 5, 2, "es11-subj-irr"],
  ["Ojalá ___ a la fiesta. (vosotros, venir)", "venir", 4, 2, "es11-subj-irr"],
  ["Ojalá ___ todo bien. (ir)", "ir", 2, 2, "es11-subj-irr"]
];
const ES11_OJALA = [
  ["Ojalá no ___ mañana. (llover)", "llover", 2, 1, "es11-subj-reg"],
  ["Ojalá ___ el trabajo. (tú, conseguir)", "conseguir", 1, 1, "es11-subj-raiz"],
  ["Ojalá me ___ pronto. (ellos, llamar)", "llamar", 5, 1, "es11-subj-reg"],
  ["Ojalá ___ buen tiempo el sábado. (hacer)", "hacer", 2, 2, "es11-subj-irr"],
  ["Ojalá ___ la fianza. (ellos, devolver)", "devolver", 5, 2, "es11-subj-raiz"]
];
const ES11_DESEO = [
  ["Quiero que ___ mañana. (tú, venir)", "venir", 1, 3, "es11-querer-que"],
  ["Espero que te ___ el piso. (gustar)", "gustar", 2, 3, "es11-querer-que"],
  ["Te pido que me ___. (ayudar)", "ayudar", 1, 3, "es11-querer-que"],
  ["Te recomiendo que ___ con el casero. (hablar)", "hablar", 1, 3, "es11-querer-que"],
  ["Necesito que el técnico ___ hoy. (venir)", "venir", 2, 3, "es11-querer-que"],
  ["Es importante que ___ puntual. (tú, llegar)", "llegar", 1, 4, "es11-valoracion"],
  ["Es mejor que ___ antes. (vosotros, llamar)", "llamar", 4, 4, "es11-valoracion"],
  ["Te dejo la llave para que ___ entrar. (poder)", "poder", 1, 4, "es11-para-que"],
  ["Me alegra que ___ aquí. (tú, estar)", "estar", 1, 5, "es11-emocion"],
  ["Siento que no ___ venir. (vosotros, poder)", "poder", 4, 5, "es11-emocion"],
  ["No creo que ___ abierto. (estar)", "estar", 2, 5, "es11-duda"],
  ["Dudo que ___ razón. (ellos, tener)", "tener", 5, 5, "es11-duda"]
];
const ES11_INF_QUE = [
  ["(Я хочу, и пойду я.) Quiero ___ al banco.", "ir", ["ir", "que vaya", "que voy"], "Один человек — инфинитив.", null],
  ["(Я хочу, а пойдёшь ты.) Quiero ___ al banco.", "que vayas", ["que vayas", "ir", "que vas"], "Разные люди — **que** + subjuntivo."],
  ["Necesito ___ con el técnico. (поговорю я)", "hablar", ["hablar", "que hable", "que hablo"], "Тот же человек — инфинитив."],
  ["Necesito ___ el técnico. (придёт мастер)", "que venga", ["que venga", "venir", "que viene"], "Разные — **que venga**."],
  ["Estudio ___ el examen. (сдам я)", "para aprobar", ["para aprobar", "para que apruebe", "para que apruebo"], "Тот же — **para** + инфинитив."],
  ["Te lo explico ___ . (поймёшь ты)", "para que lo entiendas", ["para que lo entiendas", "para entenderlo", "para que lo entiendes"], "Разные — **para que** + subjuntivo."]
];
const ES11_VALOR = [
  ["Es importante que ___ el pasaporte.", "traigas", ["traigas", "traes", "traerás"], "**es importante que** + subjuntivo."],
  ["Es importante ___ puntual. (вообще, для всех)", "llegar", ["llegar", "que llegues", "que llegas"], "Без человека — инфинитив."],
  ["Es verdad que ___ caro.", "es", ["es", "sea", "será que"], "**es verdad que** — факт: indicativo."],
  ["Es raro que no ___ . (él, contestar)", "conteste", ["conteste", "contesta", "contestará"], "**es raro que** + subjuntivo."],
  ["Es normal que ___ nervioso.", "estés", ["estés", "estás", "estarás"], "**es normal que** + subjuntivo."],
  ["Está claro que ___ un error.", "hay", ["hay", "haya", "habrá que"], "**está claro que** — факт: indicativo."]
];
const ES11_EMOCION = [
  ["Me alegra que ___ el piso. (тебе нравится)", "te guste", ["te guste", "te gusta", "gustarte"], "**me alegra que** + subjuntivo."],
  ["Me alegra ___ . (вижу тебя я сам)", "verte", ["verte", "que te vea", "que te veo"], "О себе — инфинитив."],
  ["Me molesta que ___ tanto ruido.", "haya", ["haya", "hay", "habrá"], "**me molesta que** + subjuntivo: **haya**."],
  ["¡Qué pena que no ___ venir!", "puedas", ["puedas", "puedes", "podrás"], "**qué pena que** + subjuntivo."],
  ["Siento que ___ enfermo.", "estés", ["estés", "estás", "eres"], "**siento que** + subjuntivo."]
];
const ES11_DUDA = [
  ["Creo que ___ verdad.", "es", ["es", "sea"], "**creo que** — indicativo."],
  ["No creo que ___ verdad.", "sea", ["sea", "es"], "**no creo que** — subjuntivo."],
  ["Pienso que el técnico ___ mañana.", "viene", ["viene", "venga"], "**pienso que** — indicativo."],
  ["Dudo que ___ abierto hoy.", "esté", ["esté", "está"], "**dudo que** — subjuntivo."],
  ["Me parece que ___ un error.", "hay", ["hay", "haya"], "**me parece que** — indicativo."],
  ["No es verdad que ___ tan caro.", "sea", ["sea", "es"], "**no es verdad que** — subjuntivo."]
];
const ES11_CUANDO = [
  ["Cuando ___ a casa, llámame. (будущее)", "llegues", ["llegues", "llegas", "llegarás"], "О будущем — **cuando** + subjuntivo."],
  ["Cuando ___ a casa, siempre ceno. (обычно)", "llego", ["llego", "llegue", "llegaré"], "Обычно — presente."],
  ["Cuando ___ a Madrid, hacía frío. (в прошлом)", "llegué", ["llegué", "llegue", "llegaré"], "Прошлое — indefinido."],
  ["¿Cuándo ___ ? (вопрос)", "vienes", ["vienes", "vengas", "que vengas"], "Вопрос **¿cuándo?** — обычное время."],
  ["Llámame antes de que ___ .", "salgas", ["salgas", "sales", "saldrás"], "**antes de que** — всегда subjuntivo."],
  ["Espera aquí hasta que ___ .", "vuelva", ["vuelva", "vuelvo", "volveré"], "**hasta que** о будущем — subjuntivo."],
  ["En cuanto ___ algo, te aviso.", "sepa", ["sepa", "sé", "sabré"], "**en cuanto** о будущем — subjuntivo."]
];
const ES11_CUANDO_ESC = [
  ["Cuando ___ tiempo, te llamo. (yo, tener)", "tener", 0, 6, "es11-cuando"],
  ["Cuando ___ el curso, buscaré trabajo. (yo, terminar)", "terminar", 0, 6, "es11-cuando"],
  ["Cuando ___ a la estación, avísame. (tú, llegar)", "llegar", 1, 6, "es11-cuando"],
  ["En cuanto ___ el técnico, te aviso. (venir)", "venir", 2, 6, "es11-conjunciones"],
  ["Llámame antes de que ___ . (yo, salir)", "salir", 0, 6, "es11-conjunciones"]
];
/* [infinitivo, resto de la frase] */
const ES11_IMP_NEG = [["cruzar", "la calle"], ["tocar", "el enchufe"], ["firmar", "el contrato"], ["venir", "tarde"], ["hacer", "ruido"], ["abrir", "la puerta"], ["comer", "eso"], ["pagar", "ahora"], ["ir", "solo"], ["decir", "eso"], ["mirar", "el móvil"]];
const ES11_IMP_UD = [["firmar", "aquí"], ["esperar", "un momento"], ["rellenar", "el formulario"], ["venir", "mañana"], ["hacer", "una fotocopia"], ["traer", "el pasaporte"], ["llamar", "más tarde"], ["pasar", ""]];
const ES11_CASA = [
  ["No hay agua caliente: se ha estropeado la ___ . (отопление)", "calefacción", ["calefacción", "bombilla", "cerradura"], "**la calefacción** — отопление.", "calefacción"],
  ["El ___ de la cocina gotea.", "grifo", ["grifo", "enchufe", "horno"], "**el grifo** — кран.", "grifo"],
  ["No hay luz en el baño: hay que cambiar la ___ .", "bombilla", ["bombilla", "tubería", "fianza"], "**la bombilla** — лампочка.", "bombilla"],
  ["No funciona el ___ y no tengo internet.", "wifi", ["wifi", "horno", "grifo"], "**el wifi**.", "wifi"],
  ["Hace mucho calor: pon el ___ .", "aire acondicionado", ["aire acondicionado", "enchufe", "portero"], "**el aire acondicionado** — кондиционер.", "aire acondicionado"],
  ["El ___ me ha dicho que el alquiler sube. (хозяин)", "casero", ["casero", "inquilino", "técnico"], "**el casero** — хозяин квартиры.", "casero"],
  ["Cuando dejes el piso, te devuelven la ___ . (залог)", "fianza", ["fianza", "factura", "avería"], "**la fianza** — залог.", "fianza"],
  ["No puedo abrir la puerta: se ha roto la ___ .", "cerradura", ["cerradura", "tubería", "ventanilla"], "**la cerradura** — замок.", "cerradura"],
  ["Hay una ___ en el ascensor. (поломка)", "avería", ["avería", "reclamación", "mudanza"], "**la avería** — поломка.", "avería"],
  ["El técnico me ha dado un ___ de 200 euros. (смета)", "presupuesto", ["presupuesto", "recibo", "requisito"], "**el presupuesto** — смета.", "presupuesto"],
  ["Comparto piso: soy el ___ de la habitación pequeña. (жилец)", "inquilino", ["inquilino", "casero", "portero"], "**el inquilino** — жилец.", "inquilino"],
  ["El viernes hacemos la ___ al piso nuevo. (переезд)", "mudanza", ["mudanza", "limpieza", "agencia"], "**la mudanza** — переезд.", "mudanza"]
];
const ES11_TRAMITES = [
  ["Tengo que ___ este formulario. (заполнить)", "rellenar", ["rellenar", "renovar", "caducar"], "**rellenar** — заполнить.", "rellenar"],
  ["Me ___ el pasaporte en marzo. (истекает)", "caduca", ["caduca", "renueva", "entrega"], "**caducar** — истекать.", "caducar"],
  ["Traiga el original y una ___ .", "fotocopia", ["fotocopia", "firma", "transferencia"], "**la fotocopia** — копия.", "fotocopia"],
  ["Pregunte en la ___ número 3. (окошко)", "ventanilla", ["ventanilla", "ventana", "cola"], "**la ventanilla** — окошко.", "ventanilla"],
  ["¿Qué ___ hay para renovar el permiso? (что нужно)", "requisitos", ["requisitos", "trámites de", "recibos"], "**los requisitos** — требования.", "requisito"],
  ["Firme aquí: necesitamos su ___ .", "firma", ["firma", "sello de", "contraseña"], "**la firma** — подпись.", "firma"],
  ["Quiero hacer una ___ a mi madre. (перевод)", "transferencia", ["transferencia", "devolución", "reclamación"], "**la transferencia** — перевод.", "transferencia"],
  ["Voy a sacar dinero del ___ . (банкомат)", "cajero", ["cajero", "buzón", "ayuntamiento"], "**el cajero** — банкомат.", "cajero"],
  ["He olvidado la ___ de la aplicación del banco. (пароль)", "contraseña", ["contraseña", "firma", "ventanilla"], "**la contraseña** — пароль.", "contraseña"],
  ["Para el certificado tienes que ir al ___ . (мэрия)", "ayuntamiento", ["ayuntamiento", "cajero", "portal"], "**el ayuntamiento** — мэрия.", "ayuntamiento"]
];
const ES11_RECLAMAR = [
  ["Quería hacer una ___ . (жалоба)", "reclamación", ["reclamación", "transferencia", "mudanza"], "**hacer una reclamación**."],
  ["Hay un error en la ___ de la luz. (счёт)", "factura", ["factura", "fianza", "firma"], "**la factura** — счёт."],
  ["El móvil tiene dos años de ___ .", "garantía", ["garantía", "plazo de", "devolución"], "**la garantía** — гарантия."],
  ["Quiero que me ___ el dinero.", "devuelvan", ["devuelvan", "devuelven", "devolverán"], "**quiero que** + subjuntivo."],
  ["Le ___ la factura. (прилагаю)", "adjunto", ["adjunto", "agradezco", "reclamo"], "**le adjunto** — прилагаю."],
  ["Los vecinos se ___ del ruido. (жалуются)", "quejan", ["quejan", "reclaman de", "molestan"], "**quejarse de**."],
  ["Estimados señores: … ___ , Ana Petrova.", "Atentamente", ["Atentamente", "Un beso", "¡Hasta luego!"], "Конец официального письма — **Atentamente**."]
];
const ES11_REGISTRO = [
  ["«¿Puedes ayudarme?» → usted:", "¿Podría ayudarme?", ["¿Podría ayudarme?", "¿Puedes ayudarle?", "¿Podrías ayudarme?"], "usted — **podría**."],
  ["«Firma aquí.» → usted:", "Firme aquí.", ["Firme aquí.", "Firmas aquí.", "Firma usted aquí."], "usted — **firme**."],
  ["«No te preocupes.» → usted:", "No se preocupe.", ["No se preocupe.", "No te preocupe.", "No se preocupa."], "**no se preocupe**."],
  ["«Te escribo para…» → usted:", "Le escribo para…", ["Le escribo para…", "Te escribe para…", "Les escribes para…"], "**le escribo** — вам."],
  ["«tu factura» → usted:", "su factura", ["su factura", "tu factura de usted", "le factura"], "**su** — ваш."]
];
const ES11_PREGUNTAS = [
  ["¿Qué ___ que haga?", "Te recomiendo que hables con el casero.", "me recomiendas", ["me recomiendas", "me recomiendes", "recomendarme"], 3, "es11-querer-que"],
  ["¿Qué ___ que traiga?", "Traiga el pasaporte y una fotocopia.", "necesita", ["necesita", "necesite", "necesitar"], 9, "es11-tramites"],
  ["¿___ vienes?", "Cuando termine el trabajo.", "Cuándo", ["Cuándo", "Cuando", "Que cuando"], 6, "es11-cuando"],
  ["¿Qué ___ pasa?", "Se ha estropeado la lavadora.", "le", ["le", "lo", "se"], 8, "es11-averias"],
  ["¿Crees que ___ abierto?", "No, no creo que esté abierto.", "está", ["está", "esté", "estar"], 5, "es11-duda"]
];
/* [palabras, índice de la equivocada, arreglo, módulo, regla, explicación] */
const ES11_ERRORES = [
  [["Quiero", "que", "vienes", "mañana."], 2, "vengas", 3, "es11-querer-que", "После **quiero que** — subjuntivo: **vengas**."],
  [["Ojalá", "llueve", "mañana."], 1, "llueva", 1, "es11-subj-reg", "После **ojalá** — subjuntivo."],
  [["Cuando", "vendrás,", "te", "lo", "explico."], 1, "vengas,", 6, "es11-cuando", "О будущем — **cuando vengas**."],
  [["No", "creo", "que", "es", "verdad."], 3, "sea", 5, "es11-duda", "**no creo que** + subjuntivo."],
  [["Espero", "que", "vendrás", "pronto."], 2, "vengas", 3, "es11-querer-que", "**espero que** + subjuntivo."],
  [["No", "cruza", "la", "calle."], 1, "cruces", 7, "es11-imp-neg", "**no** + subjuntivo: **no cruces**."],
  [["Es", "importante", "que", "llegas", "puntual."], 3, "llegues", 4, "es11-valoracion", "**es importante que** + subjuntivo."],
  [["Ojalá", "hace", "sol."], 1, "haga", 2, "es11-subj-irr", "**hacer → haga**."]
];
/* [situación, correcta, equivocadas, explicación, módulo] */
const ES11_SITUACIONES = [
  ["Ты надеешься, что завтра не будет дождя.", "Ojalá no llueva mañana.", ["Ojalá no llueve mañana.", "Ojalá no lloverá mañana."], "**ojalá** + subjuntivo.", 1],
  ["Ты просишь друга позвонить, когда он приедет.", "Llámame cuando llegues.", ["Llámame cuando llegarás.", "Llámame cuando llegas mañana."], "**cuando llegues**.", 6],
  ["Ты советуешь подруге не подписывать договор, не прочитав.", "No firmes el contrato sin leerlo.", ["No firmas el contrato sin leerlo.", "No firma el contrato sin leerlo."], "**no firmes**.", 7],
  ["Ты говоришь хозяину, что сломалось отопление.", "Se ha estropeado la calefacción.", ["Se ha estropeado la bombilla de calefacción.", "La calefacción está estropeando."], "**se ha estropeado**.", 8],
  ["Служащая просит тебя подписать (usted).", "Firme aquí, por favor.", ["Firmas aquí, por favor.", "Firma usted aquí, por favor."], "usted — **firme**.", 7],
  ["Ты пишешь начало официального письма.", "Estimados señores:", ["¡Hola, chicos!", "Querido amigo:"], "Официально — **Estimados señores:**", 10],
  ["Ты говоришь, что тебе жаль, что друг болеет.", "Siento que estés enfermo.", ["Siento que estás enfermo.", "Siento estar enfermo tú."], "**siento que** + subjuntivo.", 5],
  ["Тебе нужно, чтобы мастер пришёл сегодня.", "Necesito que el técnico venga hoy.", ["Necesito que el técnico viene hoy.", "Necesito venir el técnico hoy."], "**necesito que venga**.", 3]
];
const ES11_RESPUESTAS = [
  ["Estoy enfermo.", "¡Que te mejores!", ["¡Que lo pases bien!", "¡Qué bien!"], "Больному — **¡Que te mejores!**", 2],
  ["Mañana me voy de vacaciones.", "¡Que lo pases bien!", ["¡Que te mejores!", "Lo siento."], "**¡Que lo pases bien!**", 2],
  ["¿Crees que el técnico viene hoy?", "No sé, ojalá venga.", ["No sé, ojalá viene.", "No sé, ojalá vendrá."], "**ojalá venga**.", 1],
  ["Perdone, no encuentro el formulario.", "No se preocupe, aquí lo tiene.", ["No te preocupas, aquí lo tienes.", "No se preocupa, aquí lo tiene."], "usted — **no se preocupe**.", 7],
  ["¿Me llamas cuando llegues?", "Sí, en cuanto llegue te llamo.", ["Sí, en cuanto llegaré te llamo.", "Sí, en cuanto llego mañana te llamo."], "**en cuanto llegue**.", 6],
  ["Te echo de menos.", "¡Yo también a ti!", ["¡Yo tampoco!", "¡De nada!"], "**Yo también** (a ti).", 11]
];
/* Conversaciones por turnos: [bot, traducción, tarea, necesita [[qué (ruso), formas, rx?]], modelo, pista?] */
function es11Turnos(quien, genero, titulo, chat, pasos) {
  return { quien, genero, titulo, chat, pasos: pasos.map(p => ({ bot: p[0], ru: p[1], tarea: p[2],
    sit: { necesita: p[3].map(([es, f, rx]) => (rx ? { es, formas: f ? f.split("|") : [], rx } : { es, formas: f.split("|") })), modelos: [p[4]] }, pista: p[5] || "" })) };
}
const ES11_SUBJ_RX = "^(venga|vengan|haga|hagan|mande|manden|arregle|arreglen|llame|llamen|pueda|puedan|revise|revisen|cambie|cambien|sea|esté|haya|vaya|traiga|traigan|dé|den|leas|lea|mires|mire|pidas|pida|hables|hable|pagues|firmes|firme|hagas|vayas|veas|tengas|tenga|compruebes)$";
const ES11_TURNOS = [
  es11Turnos("Casero", "casero", "El casero, por teléfono", false, [
    ["¿Sí? Dígame.", "Да? Слушаю.", "Представься и скажи, что сломалось.",
      [["что сломалось", "se ha estropeado|se ha roto|no funciona|gotea|avería|no hay"]], "Hola, soy Ana. Se ha estropeado la calefacción.", "**Se ha estropeado…, no funciona…**"],
    ["Vaya. ¿Y qué quiere que haga?", "Вот как. И что вы хотите, чтобы я сделал?", "Попроси, чтобы пришёл мастер: quiero que / necesito que / ¿podría…?",
      [["просьба", "", ES11_SUBJ_RX], ["que", "que|podría"]], "Necesito que venga un técnico pronto.", "**Necesito que venga…**"],
    ["Vale. ¿Cuándo está usted en casa?", "Хорошо. Когда вы бываете дома?", "Ответь, когда ты дома.",
      [["когда", "por la mañana|por la tarde|mañana|hoy|siempre|a partir de|después de|cuando|lunes|martes|miércoles|jueves|viernes"]], "Mañana por la tarde, después de las cinco.", "**Mañana por la tarde…**"]
  ]),
  es11Turnos("Funcionaria", "funcionaria", "En el ayuntamiento", false, [
    ["Buenos días. ¿En qué puedo ayudarle?", "Доброе утро. Чем могу вам помочь?", "Скажи, что тебе нужно сделать.",
      [["что нужно", "renovar|necesito|quería|quiero|tengo que|certificado|documento"]], "Quería renovar un documento.", "**Quería…, necesito…**"],
    ["Muy bien. Es imprescindible que traiga el pasaporte.", "Хорошо. Обязательно принесите паспорт.", "Спроси, нужно ли что-то ещё (usted).",
      [["вопрос", "¿|algo más|necesito|tengo que|hace falta|qué"]], "¿Necesito algo más?", "**¿Necesito algo más?**"],
    ["Sí, una fotocopia. Rellene este formulario, por favor.", "Да, ксерокопию. Заполните эту форму, пожалуйста.", "Поблагодари и спроси, где подписать.",
      [["вопрос", "dónde|firmo|firmar|gracias"]], "Gracias. ¿Dónde firmo?", "**¿Dónde firmo?**"]
  ]),
  es11Turnos("Lucía", "lucia", "Chat con Lucía: voy a alquilar un piso", true, [
    ["¡Mañana voy a ver un piso! 😍 ¿Qué me recomiendas?", "Завтра иду смотреть квартиру! 😍 Есть советы?", "Дай совет: te recomiendo que / es importante que + subjuntivo.",
      [["совет", "", ES11_SUBJ_RX], ["que", "que"]], "Te recomiendo que mires bien la cocina y el baño.", "**Te recomiendo que…**"],
    ["¿Y si el casero me pide la fianza mañana?", "А если хозяин попросит залог завтра?", "Посоветуй, чего не делать: no + subjuntivo.",
      [["no…", "", "^(pagues|firmes|des|hagas|dejes|mandes)$"]], "No pagues nada antes de ver el contrato.", "**No pagues…, no firmes…**"],
    ["Vale 😅 ¡Te echo de menos!", "Ладно 😅 Скучаю по тебе!", "Ответь тепло.",
      [["ответ", "yo también|también|a ti|te echo|abrazo|beso|pronto"]], "¡Yo también a ti! Llámame cuando lo veas.", "**¡Yo también a ti!**"]
  ])
];
window.ejerciciosUnidadEs11 = ejerciciosUnidadEs11;
window.es11Vocab = es11Vocab;
window.es11Ampliacion = es11Ampliacion;
window.es11Objetivo = es11Objetivo;
/* Desafío del día U11 (js/hoy.js): [verbo, comienzo, persona] — la frase entera con el subjuntivo */
const ES11_HOY = [["venir", "Espero que tú", 1], ["llover", "Ojalá no", 2], ["llamar", "Cuando yo", 0], ["llegar", "Quiero que tú", 1], ["hacer", "Ojalá", 2], ["tener", "Es importante que tú", 1],
  ["estar", "No creo que el banco", 2], ["poder", "Me alegra que tú", 1], ["salir", "Llámame antes de que yo", 0], ["ser", "No creo que", 2], ["volver", "Espera hasta que yo", 0], ["ayudar", "Te pido que me", 1]];
window.ES11_HOY = ES11_HOY;
window.es11Subj = es11Subj;
window.es11Pres = es11Pres;
window.es11Fut = es11Fut;
const ES11_MEZCLA = { subjuntivo: 3, "subjuntivo-forma": 2, ojala: 1, "deseo-que": 3, "inf-o-que": 1, valoracion: 1, emocion: 1, duda: 2, cuando: 2, "imp-neg": 1, "imp-usted": 1,
  casa: 2, tramites: 1, reclamar: 1, registro: 1, pregunta: 1, error: 2, dictado: 2, "situacion-frase": 2, respuesta: 2, "dictado-frase": 1, "ordenar-frase": 1, turnos: 1,
  natural: 2, porque: 1, oido: 1, par: 1, descubrir: 1, cadena: 1, diagnostico: 1, desarmar: 1 };
window.ES11_MEZCLA = ES11_MEZCLA;

/* ── Profundización (desde el principio, regla del 13/11/2026) ───────────────
   Más a fondo que se suma a la teoría al cargar y los tipos de profundización de Azbuka. */
const ES11_MAS = {
  "es11-subj-reg": { titulo: "Подсказка: «наоборот»", texto: "Запомни просто: subjuntivo берёт **«чужую» гласную**. Глаголы на -ar берут **e** (как у -er), на -er и -ir — **a** (как у -ar): **hablar → hable**, **comer → coma**.\nОтсюда частая путаница: **hable** (subjuntivo) и **habla** (presente).", ejemplos: [{ es: "Ana habla. — Ojalá Ana hable.", ru: "Аня говорит. — Хоть бы Аня заговорила." }] },
  "es11-subj-raiz": { titulo: "Llegue, busque, empiece", texto: "Окончание **-e** меняет написание, чтобы звук остался тем же: **llegar → llegue** (gu), **buscar → busque** (qu), **empezar → empiece** (c), **coger → coja** (j). Это только письмо, не неправильность.", ejemplos: [{ es: "Ojalá llegue a tiempo.", ru: "Хоть бы успеть вовремя." }] },
  "es11-subj-irr": { titulo: "Esté и este, dé и de", texto: "Знак ударения различает слова: **esté** (subjuntivo от estar) — **este** («этот»); **dé** (от dar) — **de** (предлог). **sea, vaya, haya, sepa** — без знака.", ejemplos: [{ es: "Ojalá me dé la llave.", ru: "Хоть бы он дал мне ключ." }] },
  "es11-que-deseo": { titulo: "Que descanses", texto: "Пожелания с **que** в Испании говорят всё время: **¡Que descanses!** (на ночь), **¡Que te vaya bien!** (удачи), **¡Que cumplas muchos más!** (в день рождения), **¡Que tengas un buen viaje!**", ejemplos: [{ es: "¡Que descanses!", ru: "Отдыхай! / Спокойной ночи!" }] },
  "es11-querer-que": { titulo: "Decir que: факт или просьба", texto: "**decir que** + indicativo — сообщить: **Dice que viene** — говорит, что придёт.\n**decir que** + subjuntivo — велеть: **Dice que vengas** — говорит, чтобы ты пришёл.", ejemplos: [{ es: "Mi madre dice que la llames.", ru: "Мама говорит, чтобы ты ей позвонил." }] },
  "es11-mismo-sujeto": { titulo: "Te pido que vengas / Te pido venir", texto: "С **pedir, recomendar, permitir, prohibir** можно и так, и так: **Te recomiendo que descanses** = **Te recomiendo descansar**. С **querer** и **esperar** — только по правилу «один человек / разные».", ejemplos: [{ es: "Te prohíbo salir. = Te prohíbo que salgas.", ru: "Я запрещаю тебе выходить." }] },
  "es11-valoracion": { titulo: "Es que… — это другое", texto: "**Es que…** в начале фразы — «дело в том, что»: **Es que no tengo tiempo.** Здесь нет оценки, поэтому — обычное время.", ejemplos: [{ es: "Es que se ha roto el coche.", ru: "Дело в том, что сломалась машина." }] },
  "es11-para-que": { titulo: "¿Para qué? — ¿Por qué?", texto: "**¿Para qué?** — зачем, с какой целью: **Para que lo veas.** **¿Por qué?** — почему: **Porque es importante.**", ejemplos: [{ es: "¿Para qué me llamas? — Para que me ayudes.", ru: "Зачем ты звонишь? — Чтобы ты мне помог." }] },
  "es11-emocion": { titulo: "Me alegro de que", texto: "**Me alegra que** = **me alegro de que** (с **alegrarse** нужен **de**). Оба — с subjuntivo: **Me alegro de que estés bien.**", ejemplos: [{ es: "Me alegro de que te guste.", ru: "Рад, что тебе нравится." }] },
  "es11-duda": { titulo: "Quizás + subjuntivo", texto: "После **quizás, tal vez** можно и обычное время, и subjuntivo: **Quizás viene / Quizás venga.** С subjuntivo сомнение сильнее. А **a lo mejor** — только обычное время: **A lo mejor viene.**", ejemplos: [{ es: "Tal vez tengas razón.", ru: "Может быть, ты прав." }] },
  "es11-cuando": { titulo: "Si + presente, cuando + subjuntivo", texto: "Сравни: **Si llegas tarde, llámame** (если — может, и не опоздаешь) и **Cuando llegues, llámame** (когда — точно приедешь). После **si** subjuntivo presente не бывает.", ejemplos: [{ es: "Si tengo tiempo, voy. — Cuando tenga tiempo, voy.", ru: "Если будет время, пойду. — Когда будет время, пойду." }] },
  "es11-conjunciones": { titulo: "Mientras", texto: "**mientras** + subjuntivo — «пока, до тех пор пока» о будущем: **Mientras vivas aquí, paga el alquiler.** С обычным временем — «в то время как»: **Mientras cocino, escucho música.**", ejemplos: [{ es: "Mientras estés en casa, no hay problema.", ru: "Пока ты дома, проблем нет." }] },
  "es11-imp-neg": { titulo: "No te vayas", texto: "У глаголов с **se** местоимение уходит вперёд: **vete → no te vayas**, **siéntate → no te sientes**, **levántate → no te levantes**.", ejemplos: [{ es: "¡No te vayas todavía!", ru: "Не уходи ещё!" }] },
  "es11-imp-usted": { titulo: "Oiga, perdone, dígame", texto: "Ты уже знаешь эти формы как формулы: **oiga** (послушайте), **perdone** (извините), **dígame** (слушаю — по телефону). Это imperativo de usted.", ejemplos: [{ es: "Oiga, perdone, ¿dónde está la ventanilla 3?", ru: "Послушайте, извините, где окошко 3?" }] },
  "es11-averias": { titulo: "Se me ha roto", texto: "**Se me ha roto el móvil** — у меня сломался телефон (не по моей вине). **me** показывает, у кого: **se te ha roto**, **se le ha roto**. Пока достаточно узнавать.", ejemplos: [{ es: "Se me ha roto la llave.", ru: "У меня сломался ключ." }] },
  "es11-alquilar": { titulo: "Piso compartido", texto: "В Испании многие молодые люди **comparten piso**: каждый снимает комнату (**una habitación**), кухня и ванная общие. Объявления: **Se alquila habitación** — сдаётся комната.", ejemplos: [{ es: "Se alquila habitación en piso compartido.", ru: "Сдаётся комната в общей квартире." }] },
  "es11-tramites": { titulo: "Turno и cola", texto: "**la cola** — очередь людей: **Hay mucha cola.** **el turno** — номерок или чья-то очередь: **Coja turno, por favor**, **Es su turno.**", ejemplos: [{ es: "¿Quién es el último? — Yo. — Entonces voy después de usted.", ru: "Кто последний? — Я. — Тогда я за вами." }] },
  "es11-banco": { titulo: "Ingresar, sacar, retirar", texto: "**ingresar dinero** — положить на счёт; **sacar dinero** — снять (обычное слово); **retirar** — то же, официальнее (так пишут на банкомате).", ejemplos: [{ es: "Quiero ingresar cien euros en mi cuenta.", ru: "Я хочу положить сто евро на свой счёт." }] },
  "es11-reclamar": { titulo: "La hoja de reclamaciones", texto: "В Испании в каждом магазине, баре и учреждении обязана быть **hoja de reclamaciones** — книга жалоб. Достаточно сказать: **Quiero una hoja de reclamaciones.**", ejemplos: [{ es: "¿Me da una hoja de reclamaciones, por favor?", ru: "Дайте, пожалуйста, книгу жалоб." }] },
  "es11-correo-formal": { titulo: "Estimado: — с двоеточием", texto: "После обращения в испанском письме ставят **двоеточие**, а не запятую и не восклицательный знак: **Estimada señora:**. Потом текст — с новой строки и с большой буквы.", ejemplos: [{ es: "Estimado señor Ruiz:", ru: "Уважаемый сеньор Руис!" }] }
};
const ES11_NAT = [
  ["Ojalá haga sol mañana.", ["Ojalá hace sol mañana.", "Ojalá hará sol mañana."], "**ojalá** + subjuntivo.", 2, "es11-subj-irr"],
  ["Quiero que vengas a la fiesta.", ["Quiero que vienes a la fiesta.", "Quiero que vendrás a la fiesta."], "**quiero que** + subjuntivo.", 3, "es11-querer-que"],
  ["Quiero ir al banco.", ["Quiero que yo vaya al banco.", "Quiero que voy al banco."], "Тот же человек — инфинитив.", 3, "es11-mismo-sujeto"],
  ["Espero que todo salga bien.", ["Espero que todo sale bien.", "Espero que todo saldrá bien."], "**espero que** + subjuntivo.", 3, "es11-querer-que"],
  ["Es importante que traigas el pasaporte.", ["Es importante que traes el pasaporte.", "Es importante traigas el pasaporte."], "**es importante que** + subjuntivo.", 4, "es11-valoracion"],
  ["Te lo explico para que lo entiendas.", ["Te lo explico para que lo entiendes.", "Te lo explico para lo entiendas."], "**para que** + subjuntivo.", 4, "es11-para-que"],
  ["Me alegra que estés aquí.", ["Me alegra que estás aquí.", "Me alegro que eres aquí."], "Чувство — subjuntivo.", 5, "es11-emocion"],
  ["No creo que sea verdad.", ["No creo que es verdad.", "No creo sea verdad."], "**no creo que** + subjuntivo.", 5, "es11-duda"],
  ["Creo que es verdad.", ["Creo que sea verdad.", "Creo es que verdad."], "**creo que** — indicativo.", 5, "es11-duda"],
  ["Cuando llegues, llámame.", ["Cuando llegarás, llámame.", "Cuando llegas mañana, llámame."], "О будущем — **cuando llegues**.", 6, "es11-cuando"],
  ["Llámame antes de que salgas.", ["Llámame antes de que sales.", "Llámame antes que saldrás."], "**antes de que** + subjuntivo.", 6, "es11-conjunciones"],
  ["No toques el enchufe.", ["No tocas el enchufe.", "No toca el enchufe."], "**no toques**.", 7, "es11-imp-neg"],
  ["No lo firmes.", ["No fírmalo.", "No lo firmas."], "С **no** местоимение — перед глаголом.", 7, "es11-imp-neg"],
  ["Rellene el formulario, por favor.", ["Rellena usted el formulario, por favor.", "Rellenes el formulario, por favor."], "usted — **rellene**.", 7, "es11-imp-usted"],
  ["Se ha estropeado la lavadora.", ["Ha estropeado la lavadora.", "Se ha estropeada la lavadora."], "Сломалась сама — **se ha estropeado**.", 8, "es11-averias"],
  ["Estimados señores:", ["Estimados señores!", "¡Hola, estimados señores!"], "После обращения — двоеточие.", 10, "es11-correo-formal"]
];
const ES11_POR = [
  ["Quiero que vengas.", "Почему «vengas», а не «vienes»?", "Хочу я, а придёшь ты: разные люди", ["Это прошлое", "Это вопрос"], "Разные люди — **que** + subjuntivo.", 3, "es11-querer-que"],
  ["Quiero venir.", "Почему здесь инфинитив?", "Хочу и приду — один и тот же человек", ["Потому что это будущее", "Это ошибка"], "Один человек — инфинитив.", 3, "es11-mismo-sujeto"],
  ["Creo que viene.", "Почему «viene», а не «venga»?", "Я уверен: это факт для меня", ["Это прошлое", "Это ошибка"], "**creo que** — indicativo.", 5, "es11-duda"],
  ["No creo que venga.", "Почему «venga»?", "Это сомнение", ["Это факт", "Это вопрос"], "Сомнение — subjuntivo.", 5, "es11-duda"],
  ["Cuando llegues, llámame.", "Почему «llegues», а не «llegarás»?", "После cuando о будущем — subjuntivo", ["Это прошлое", "Это вежливость"], "**cuando** + subjuntivo о будущем.", 6, "es11-cuando"],
  ["Cuando llego a casa, ceno.", "Почему «llego»?", "Так бывает всегда, обычно", ["Это будущее", "Это ошибка"], "Обычно — presente.", 6, "es11-cuando"],
  ["Firme aquí, por favor.", "Почему «firme», а не «firma»?", "Это usted", ["Это прошлое", "Это ты"], "Imperativo de usted — **firme**.", 7, "es11-imp-usted"],
  ["Me alegra que te guste.", "Почему «guste»?", "Это чувство по поводу чужого действия", ["Это факт", "Это будущее"], "Чувство — subjuntivo.", 5, "es11-emocion"]
];
const ES11_OIDO = [
  ["Ojalá hable.", "Послушай: indicativo или subjuntivo?", "Subjuntivo", ["Indicativo", "Subjuntivo"], "**hable** — subjuntivo.", 1, "es11-subj-reg"],
  ["Ana habla.", "Послушай: indicativo или subjuntivo?", "Indicativo", ["Indicativo", "Subjuntivo"], "**habla** — indicativo.", 1, "es11-subj-reg"],
  ["Quiero que comas.", "Послушай: indicativo или subjuntivo?", "Subjuntivo", ["Indicativo", "Subjuntivo"], "**comas** — subjuntivo.", 3, "es11-querer-que"],
  ["Sé que comes.", "Послушай: indicativo или subjuntivo?", "Indicativo", ["Indicativo", "Subjuntivo"], "**comes** — indicativo.", 5, "es11-duda"],
  ["No cruces.", "Кому это говорят?", "tú", ["tú", "usted"], "**no cruces** — ты.", 7, "es11-imp-neg"],
  ["No cruce.", "Кому это говорят?", "usted", ["tú", "usted"], "**no cruce** — usted.", 7, "es11-imp-usted"]
];
const ES11_PAR = [
  ["Ты надеешься, что друг придёт.", "Espero que vengas.", "Espero que vienes.", "**espero que vengas**.", 3, "es11-querer-que"],
  ["Ты просишь подругу не трогать розетку.", "No toques el enchufe.", "No tocas el enchufe.", "**no toques**.", 7, "es11-imp-neg"],
  ["Ты просишь служащую подождать (usted).", "Espere un momento, por favor.", "Espera un momento, por favor.", "usted — **espere**.", 7, "es11-imp-usted"],
  ["Ты сомневаешься, что банк открыт.", "No creo que esté abierto.", "No creo que está abierto.", "**no creo que esté**.", 5, "es11-duda"],
  ["Ты обещаешь позвонить, как только узнаешь.", "Te llamo en cuanto lo sepa.", "Te llamo en cuanto lo sabré.", "**en cuanto sepa**.", 6, "es11-conjunciones"],
  ["Ты пишешь конец официального письма.", "Atentamente,", "¡Besos!", "**Atentamente**.", 10, "es11-correo-formal"]
];
const ES11_DESC = [
  ["hablar → hable · trabajar → trabaje. А llamar?", "llame", ["llama", "llamea"], "**-ar → -e**.", 1, "es11-subj-reg"],
  ["comer → coma · beber → beba. А vivir?", "viva", ["vive", "vivia"], "**-er, -ir → -a**.", 1, "es11-subj-reg"],
  ["tengo → tenga · hago → haga. А digo?", "diga", ["dice", "deciga"], "От **yo**: **digo → diga**.", 2, "es11-subj-irr"],
  ["salgo → salga · vengo → venga. А pongo?", "ponga", ["pone", "pona"], "**pongo → ponga**.", 2, "es11-subj-irr"],
  ["cruza → no cruces · firma → no firmes. А come?", "no comas", ["no come", "no comes"], "**no** + subjuntivo (ты).", 7, "es11-imp-neg"],
  ["firma (tú) → firme (usted) · espera → espere. А escribe?", "escriba", ["escribe", "escribes"], "usted = subjuntivo (él).", 7, "es11-imp-usted"]
];
const ES11_CAD = [
  ["Vienes mañana.", [["Теперь: «я хочу, чтобы…» (quiero que).", "Quiero que vengas mañana."], ["Теперь: «я надеюсь, что…» (espero que).", "Espero que vengas mañana."]], 3, "es11-querer-que"],
  ["Es verdad.", [["Теперь: «думаю, что…» (creo que).", "Creo que es verdad."], ["Теперь: «не думаю, что…» (no creo que).", "No creo que sea verdad."]], 5, "es11-duda"],
  ["Cruza la calle.", [["Теперь: «не…» (ты).", "No cruces la calle."], ["Теперь: на usted, «не…».", "No cruce la calle."]], 7, "es11-imp-neg"],
  ["Llego a casa y te llamo.", [["Соедини через cuando, о будущем (te llamaré).", "Cuando llegue a casa, te llamaré."], ["Теперь: ты (tú) приезжаешь, а ты мне звонишь (llámame).", "Cuando llegues a casa, llámame."]], 6, "es11-cuando"]
];
const ES11_DIAG = [
  ["Quiero que vienes mañana.", "После quiero que — subjuntivo", ["Нужен futuro", "Нужен инфинитив"], "Quiero que vengas mañana.", 3, "es11-querer-que"],
  ["Cuando vendrás, te lo explico.", "О будущем после cuando — subjuntivo", ["Нужен presente", "Нужно убрать запятую"], "Cuando vengas, te lo explico.", 6, "es11-cuando"],
  ["No creo que es caro.", "После no creo que — subjuntivo", ["Нужно убрать no", "Нужен futuro"], "No creo que sea caro.", 5, "es11-duda"],
  ["Quiero que yo vaya al médico.", "Тот же человек — инфинитив", ["Нужен futuro", "Нужно indicativo"], "Quiero ir al médico.", 3, "es11-mismo-sujeto"],
  ["No cruza la calle.", "Отрицательный imperativo — no + subjuntivo", ["Нужен инфинитив", "Нужно usted"], "No cruces la calle.", 7, "es11-imp-neg"],
  ["Ojalá está en casa.", "После ojalá — subjuntivo", ["Нужен futuro", "Нужен инфинитив"], "Ojalá esté en casa.", 2, "es11-subj-irr"]
];
const ES11_DES = [
  ["Quiero que el técnico venga mañana", [["Какое слово — subjuntivo?", 4], ["Кто должен прийти? (сущ.)", 3]], 3, "es11-querer-que"],
  ["Cuando llegues a casa llámame", [["Какое слово — subjuntivo?", 1], ["Какое слово — imperativo?", 4]], 6, "es11-cuando"],
  ["No creo que el banco esté abierto", [["Какое слово — subjuntivo?", 5], ["Какое слово выражает сомнение вместе с no?", 1]], 5, "es11-duda"]
];
/* Formas generadas: subjuntivo */
const ES11_VERBOS_SUBJ = ["hablar", "trabajar", "llamar", "comer", "vivir", "escribir", "llegar", "buscar", "pagar", "querer", "poder", "volver", "pedir", "dormir", "tener", "hacer", "salir", "venir", "decir", "poner", "traer", "conocer", "ser", "ir", "estar", "haber", "saber", "dar", "ver", "devolver"];

function es11Prof(out, baraja, lex) {
  const P = (id, tipo, forma, mod, regla, x) => out.push(Object.assign({ id: "ES11-" + id, tipo, forma, dificultad: 2, modulo: mod, regla, grupo: id }, x));
  ES11_NAT.forEach(([ok, mal, exp, mod, regla], i) => P("nat-" + i, "natural", "elegir", mod, regla, { pide: "Какая фраза правильная?", opciones: baraja([ok].concat(mal), i + 201), correcta: ok, oir: ok, explicacion: "**" + ok + "** " + exp }));
  ES11_POR.forEach(([fr, q, ok, otras, exp, mod, regla], i) => P("por-" + i, "porque", "elegir", mod, regla, { pide: q, grande: fr, audio: fr, opciones: baraja([ok].concat(otras), i + 211), correcta: ok, oir: fr, explicacion: exp }));
  ES11_OIDO.forEach(([au, q, ok, ops, exp, mod, regla], i) => P("oid-" + i, "oido", "elegir", mod, regla, { pide: q, audio: au, opciones: ops, correcta: ok, oir: au, explicacion: "«" + au + "» — " + exp }));
  ES11_PAR.forEach(([sit, ok, otra, exp, mod, regla], i) => P("par-" + i, "par", "elegir", mod, regla, { pide: sit + " Как ты скажешь?", opciones: baraja([ok, otra], i + 221), correcta: ok, oir: ok, explicacion: exp }));
  ES11_DESC.forEach(([q, ok, otras, exp, mod, regla], i) => P("dsc-" + i, "descubrir", "elegir", mod, regla, { pide: q, opciones: baraja([ok].concat(otras), i + 231), correcta: ok, oir: ok, explicacion: exp }));
  ES11_CAD.forEach(([base, pasos, mod, regla], i) => P("cdn-" + i, "cadena", "cadena", mod, regla, { dificultad: 3, pide: "Измени фразу шаг за шагом.", base, oir: pasos[pasos.length - 1][1], idioma: "es",
    pasos: pasos.map(([q, e]) => ({ pide: q, esperadas: [e] })), explicacion: [base].concat(pasos.map(p => p[1])).join(" → ") }));
  ES11_DIAG.forEach(([fr, ok, otros, bien, mod, regla], i) => P("dg-" + i, "diagnostico", "diagnostico", mod, regla, { dificultad: 3, pide: "В этой фразе ошибка. Что не так?", grande: fr,
    opciones: baraja([ok].concat(otros), i + 241), correcta: ok, esperadas: [bien], idioma: "es", oir: bien, explicacion: "**" + bien + "**" }));
  ES11_DES.forEach(([fr, qs, mod, regla], i) => P("ds-" + i, "desarmar", "desarmar", mod, regla, { pide: "Отвечай, нажимая на слова фразы.", palabras: fr.split(" "), audio: fr + ".", oir: fr + ".",
    preguntas: qs.map(([q, k]) => ({ pide: q, correcta: k })), explicacion: fr + "." }));
  /* Formas generadas */
  const IRR = /^(tener|hacer|salir|venir|decir|poner|traer|conocer|ser|ir|estar|haber|saber|dar|ver)$/;
  const RAIZ = /^(querer|poder|volver|pedir|dormir|devolver)$/;
  ES11_VERBOS_SUBJ.forEach((inf, i) => [0, 3, 5].map(k => (k + i) % 6).forEach(p => {
    const f = es11Subj(inf, p); if (!f) return;
    const mod = IRR.test(inf) ? 2 : 1, regla = IRR.test(inf) ? "es11-subj-irr" : RAIZ.test(inf) || /^(llegar|buscar|pagar)$/.test(inf) ? "es11-subj-raiz" : "es11-subj-reg";
    P("sf-" + inf + "-" + p, "subjuntivo-forma", "escribir", mod, regla,
      { grupo: "sf-" + inf, lex: lex(inf), pide: "Напиши форму в presente de subjuntivo.", grande: inf + " — " + ES11_PERS[p][0].split(" / ")[0], esperadas: [f], idioma: "es", foco: true, formaCasi: false, oir: f,
        explicacion: "**" + inf + "**, " + ES11_PERS[p][0].split(" / ")[0] + " → **" + f + "**." });
  }));
}
UNIDAD_ES_11.modulos.forEach(m => (m.secciones || []).forEach(s => { if (ES11_MAS[s.id] && !s.mas) s.mas = ES11_MAS[s.id]; }));
