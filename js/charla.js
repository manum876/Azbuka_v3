/* ============================================================
   CHARLA.JS — Motor de las charlas guionadas (21/11/2026)
   Lo comparten «Hablar con Masha» (masha.html, Azbuka, en ruso) y
   «Болтаем с Лусией» (lucia.html, Abecé, en español). Antes vivía
   dentro de masha.html (21/10/2026; Contexto §6.24); se movió sin
   cambiar nada de Masha (comprobado con un recorrido de los 72 temas
   antes y después).
   Cada página llama a azCharla(CFG):
     CFG.datos      MASHA / LUCIA (generados: data-masha.js / data-lucia.js)
     CFG.id         "masha" | "lucia" (módulo, archivo y voz)
     CFG.clave      dónde se guarda la memoria (az_masha / az_lucia)
     CFG.idioma     las reglas de la lengua que se aprende: IDIOMA_RU
                    (abajo) o AZ_CHARLA_ES (js/charla-es.js)
     CFG.tx         los textos de la pantalla (TX_MASHA abajo; el de
                    Lucía, en ruso, en lucia.html)
   Las líneas de los datos son { <lengua>: texto, tr, <traducción> }:
   en Masha { ru, tr, es }, en Lucía { es, tr, ru }. CFG.idioma.K dice
   cuál es cuál (K.t = la lengua que se aprende, K.trad = la traducción).
   Cómo responde, en este orden:
     1. si escribiste en el otro alfabeto (y el paso no lo acepta), te
        pide que escribas en la lengua de la charla;
     2. la primera rama del paso actual que coincide (claves o captura);
     3. «¿Qué significa…?» / «¿Cómo se dice…?»: lo busca en el
        diccionario; frases que sirven siempre (gracias, adiós…);
     4. si es una pregunta: «¿y tú?» → aTi; si no, su vida (datos.vida,
        en la versión que el alumno ya entiende) o las preguntas del tema;
     5. la rama comodín del paso; 6. «no entendí» y vuelve a preguntar.
   «💬 Mejor:» debajo de tu mensaje (CFG.idioma.mejorar). No es una
   nota: te entiende igual.
   Recuerda entre charlas tu nombre, país, nacionalidad, género y lo que
   le contaste, y cuántas veces hiciste cada tema: CFG.clave
   { alumno: { S, datos }, temas: { id: { v, f } } }.
   ============================================================ */

/* ── Utilidades que usan los dos idiomas ── */
function azChLev(a, b) {
  const d = []; for (let i = 0; i <= a.length; i++) d[i] = [i];
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length];
}
function azChMayus(s) { return s ? s[0].toUpperCase() + s.slice(1) : s; }
const azChSinTilde = s => String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/ñ/g, "n");
function azChSinEmoji(s) { return String(s || "").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}♀♂]/gu, "").trim(); }

/* ============================================================
   IDIOMA_RU — las reglas del ruso (Masha). Sin cambios respecto de
   masha.html del 21/10/2026.
   ============================================================ */
function IDIOMA_RU(M) {
  const K = { t: "ru", trad: "es" };
  function norm(s) {
    return azNormRu(String(s || "")).toLowerCase().replace(/[.,!?;:«»"()…—–¿¡]/g, " ").replace(/\s+-\s+/g, " ").replace(/\s+/g, " ").trim();
  }
  const PREG = new Set(["как", "где", "что", "кто", "сколько", "откуда", "почему", "зачем", "когда", "какой", "какая", "какое", "какие", "кем", "куда", "чем", "расскажи", "твой", "твоя", "твои"]);   /* sin «ты» ni «у»: «Ты и Ди́ма», «У меня́ есть брат» son respuestas */
  function esPregunta(raw, T) { return /\?/.test(raw) || PREG.has(T[0]) || (T[0] === "а" && PREG.has(T[1])); }
  function tieneATi(T) { return /(^| )а (у )?(тебя|ты|вас|вы)( |$)/.test(T.join(" ")); }
  function soloATi(T) { const r = T.filter(t => !["а", "у", "и", "как"].includes(t)); return r.length > 0 && r.every(t => ["ты", "тебя", "вы", "вас"].includes(t)); }

  const NAC = M.naciones || [];
  const NAC_SET = new Set(NAC.flatMap(r => [norm(r[1]), norm(r[2])]));
  const STOP = new Set(["привет", "пока", "да", "нет", "не", "ну", "а", "и", "я", "ты", "вы", "мы", "он", "она", "меня", "тебя", "зовут", "спасибо", "хорошо",
    "из", "в", "во", "на", "это", "так", "как", "что", "кто", "где", "очень", "приятно", "тоже", "мне", "здравствуйте", "здравствуй", "ок", "работаю", "учусь",
    "живу", "говорю", "студент", "студентка", "люблю", "сейчас", "здесь", "тут", "конечно", "понимаю", "знаю", "извини", "извините", "добрый", "доброе", "день", "утро",
    "врач", "учитель", "рад", "рада"]);
  function partes(raw) {
    const R = String(raw).replace(/[.,!?;:«»"()…¿¡]/g, " ").split(/\s+/).filter(Boolean);
    return { R, lo: R.map(norm) };
  }
  function capNombre(raw) {
    const { R, lo } = partes(raw);
    if (lo.some(w => ["как", "кто", "где", "что", "откуда", "сколько"].includes(w))) return null;
    let i, c = null;
    if ((i = lo.indexOf("зовут")) >= 0) c = R[i + 1];
    else if ((i = lo.indexOf("имя")) >= 0) c = R.slice(i + 1).find(w => !/^[-—–]$/.test(w));
    else if ((i = lo.indexOf("я")) >= 0) c = R[i + 1];
    else if (R.length === 1) c = R[0];
    else if (R.length === 2 && ["привет", "ну", "ок", "это"].includes(lo[0])) c = R[1];
    if (!c) return null;
    const n = norm(c);
    if (STOP.has(n) || NAC_SET.has(n) || /\d/.test(c) || c.length > 20) return null;
    return azChMayus(c);
  }
  function capPais(T) {
    for (const r of NAC) {
      if (T.includes(norm(r[1]))) return { pais: r[0], genero: "m", nac: true };
      if (T.includes(norm(r[2]))) return { pais: r[0], genero: "f", nac: true };
    }
    for (const r of NAC) {
      const cn = norm(r[0]);
      const raiz = /ия$/.test(cn) ? cn.slice(0, -1) : /[аяьй]$/.test(cn) ? cn.slice(0, -1) : cn;
      if (raiz.length >= 3 && T.some(t => t.startsWith(raiz))) return { pais: r[0] };
      if (cn === "сша" && T.some(t => t.startsWith("америк"))) return { pais: r[0] };
    }
    return null;
  }
  function capEco(raw, tras) {
    const { R, lo } = partes(raw);
    for (let i = 0; i < R.length - 1; i++) {
      if (!tras.includes(lo[i]) || tras.includes(lo[i + 1]) || STOP.has(lo[i + 1])) continue;
      let c = R[i + 1];
      if (R[i + 2] && /^[А-ЯЁA-Z]/.test(R[i + 2])) c += " " + R[i + 2];
      return azChMayus(c);
    }
    return null;
  }

  /* ── Diccionario de bolsillo de Masha ── */
  let ES_RU = null;
  function indiceEsRu() {
    if (ES_RU) return ES_RU;
    ES_RU = new Map();
    const u = e => (e.introducedIn && e.introducedIn.length ? Math.min(...e.introducedIn) : 99);
    (typeof LEXICON_COMER !== "undefined" ? LEXICON_COMER : []).forEach(e => {
      (e.senses || []).forEach((s, si) => String(s.es || "").replace(/\([^)]*\)/g, "").split(/[,;]/).forEach(p => {
        const k = azChSinTilde(p).replace(/^(el|la|los|las|un|una) /, "").trim();
        if (!k) return;
        const pt = u(e) * 10 + si;
        const prev = ES_RU.get(k);
        if (!prev || pt < prev.pt) ES_RU.set(k, { e, pt });
      }));
    });
    return ES_RU;
  }
  /* «Как по-русски «casa»?» → { x: "casa", ru: "дом" } */
  function capEsRu(raw) {
    const sinRu = String(raw).replace(/[А-Яа-яЁё́-]+/g, " ");
    const k = azChSinTilde(sinRu).replace(/[«»"'¿?¡!.,]/g, " ").replace(/\b(el|la|los|las|un|una)\b/g, " ").replace(/\s+/g, " ").trim();
    if (!k) return null;
    const idx = indiceEsRu(), r = idx.get(k) || idx.get(k.split(" ").pop());
    const x = sinRu.replace(/[«»"¿?¡!.,]/g, " ").replace(/\s+/g, " ").trim();
    return r ? { x, ru: r.e.acento || r.e.ru } : { x, ru: null };
  }
  /* «Что значит «ёж»?» → la palabra y su traducción */
  function capRuEs(raw) {
    const m = String(raw).match(/знач\S*\s+[«"]?([А-Яа-яЁё́-]+)/i);
    if (!m) return null;
    const w = m[1], k = azFormaClave(w);
    let id = null;
    try { const c = azIndiceFormas().get(k); if (c && c.length) id = c[0][0]; } catch (e) {}
    if (!id && typeof LEXICON_COMER !== "undefined") { const e = LEXICON_COMER.find(e => azFormaClave(e.ru) === k); if (e) id = e.id; }
    const e = id && typeof lexComerById === "function" ? lexComerById(id) : null;
    return { x: w, es: e ? (e.senses || []).map(s => s.es).slice(0, 2).join(", ") : null, lema: e ? (e.acento || e.ru) : null };
  }

  /* ── «💬 Mejor:» ── */
  const PRON = { "я": [0, null], "ты": [1, null], "он": [2, "m"], "она": [2, "f"], "оно": [2, "n"], "мы": [3, "pl"], "вы": [4, "pl"], "они": [5, "pl"] };
  const SALTO = new Set(["не", "тоже", "уже", "ещё", "еще", "очень", "хорошо", "плохо", "немного", "сейчас", "всегда", "часто", "никогда", "тут", "здесь", "там", "сегодня", "вчера", "завтра", "и"]);
  let FV = null, CONOCIDAS = null;
  function formasVerbo() {
    if (FV || typeof VERBOS === "undefined") return FV;
    FV = new Map();
    const add = (f, x) => { if (!f) return; const k = azFormaClave(f); if (!FV.has(k)) FV.set(k, []); FV.get(k).push(x); };
    for (const id in VERBOS) {
      const v = VERBOS[id];
      (v.presente || []).forEach((f, p) => add(f, { id, k: "presente", p }));
      (v.futuro || []).forEach((f, p) => add(f, { id, k: "futuro", p }));
      if (v.pasado) ["m", "f", "n", "pl"].forEach(g => add(v.pasado[g], { id, k: "pasado", g }));
    }
    return FV;
  }
  function conocidas() {
    if (CONOCIDAS) return CONOCIDAS;
    try { const idx = azIndiceFormas(); CONOCIDAS = new Map(); idx.forEach((v, k) => CONOCIDAS.set(k, v[0][1])); } catch (e) { CONOCIDAS = new Map(); }
    (typeof LEXICON_COMER !== "undefined" ? LEXICON_COMER : []).forEach(e => { const k = azFormaClave(e.ru); if (!CONOCIDAS.has(k)) CONOCIDAS.set(k, e.acento || e.ru); });
    return CONOCIDAS;
  }
  /* Género de quien escribe por el pasado después de я (я был → m, я была́ → f) */
  function generoDe(T) {
    const fv = formasVerbo(); if (!fv) return null;
    const i = T.indexOf("я"); if (i < 0) return null;
    for (let j = i + 1; j < Math.min(T.length, i + 4); j++) {
      const an = fv.get(azFormaClave(T[j])); if (!an) continue;
      const gs = new Set(an.filter(a => a.k === "pasado").map(a => a.g));
      if (gs.size === 1 && (gs.has("m") || gs.has("f"))) return [...gs][0];
      if (an.some(a => a.k !== "pasado")) return null;
    }
    return null;
  }
  function mejorar(raw, S) {
    const out = [];
    const R = (String(raw).match(/[А-Яа-яЁё́]+(?:-[А-Яа-яЁё́]+)*/g) || []);
    const lo = R.map(azFormaClave);
    const fv = formasVerbo();
    /* 1. El verbo tiene que ir con su pronombre */
    if (fv) lo.forEach((t, i) => {
      const pr = PRON[t]; if (!pr) return;
      let j = i + 1; while (j < lo.length && SALTO.has(lo[j])) j++;
      const an = fv.get(lo[j]); if (!an) return;
      const ok = an.some(a => a.k === "pasado" ? (pr[1] ? (a.g === pr[1]) : (a.g === "m" || a.g === "f")) : a.p === pr[0]);
      if (ok) return;
      const a = an[0], v = VERBOS[a.id];
      let bien = null;
      if (a.k === "pasado") bien = v.pasado && v.pasado[pr[1] || (S.genero === "f" ? "f" : "m")];
      else bien = v[a.k] && v[a.k][pr[0]];
      if (bien && azFormaClave(bien) !== lo[j]) out.push({ mal: R[j], bien, por: "con " + R[i].toLowerCase() });
    });
    /* 2. Una palabra que no existe y se parece a una del diccionario */
    const con = conocidas();
    const nombre = S.nombre ? azFormaClave(S.nombre) : "";
    R.forEach((w, i) => {
      const t = lo[i];
      if (t.length < 3 || con.has(t) || t === nombre || out.some(o => o.mal === w)) return;
      if (/^[А-ЯЁ]/.test(w) && i > 0) return;
      let mejor = null;
      con.forEach((f, k) => {
        if (mejor || k[0] !== t[0] || Math.abs(k.length - t.length) > 1) return;
        if (azChLev(k, t) === 1) mejor = f;
      });
      if (mejor) out.push({ mal: w, bien: mejor, por: null });
    });
    return out;
  }

  /* ── Transliteración aproximada para lo que escribe el alumno (nombres, lugares) ── */
  function trCrudo(s) {
    const T = { б: "b", в: "v", г: "g", д: "d", ж: "zh", з: "z", й: "i", к: "k", л: "l", м: "m", н: "n", п: "p", р: "r", с: "s", т: "t", ф: "f", х: "j", ц: "ts", ч: "ch", ш: "sh", щ: "sch", ъ: "", ь: "",
      а: "a", о: "o", у: "u", ы: "y", э: "e", и: "i" };
    const IOT = { е: "e", ё: "o", ю: "u", я: "a" };
    const TIL = { a: "á", e: "é", i: "í", o: "ó", u: "ú", y: "ý" };
    let out = "", prevVoc = true;
    for (const ch of String(s)) {
      const lc = ch.toLowerCase();
      if (ch === "́") { out = out.replace(/[aeiouy](?=[^aeiouy]*$)/, v => TIL[v]); continue; }
      let t;
      if (lc in IOT) t = (prevVoc ? "y" : "i") + IOT[lc];
      else if (lc in T) t = T[lc];
      else { out += ch; prevVoc = true; continue; }
      prevVoc = "аоуыэиеёюя".includes(lc);
      out += ch !== lc && t ? t[0].toUpperCase() + t.slice(1) : t;
    }
    return out;
  }
  const filaNac = S => NAC.find(r => r[0] === (S.nac || S.pais));
  const filaPais = (S, otro) => NAC.find(r => r[0] === (otro ? S.otroPais : S.pais));
  /* Lo que reemplaza cada plantilla; en la transliteración, todas menos {x} y {es} */
  function valores(S) {
    const fila = filaNac(S), f = S.genero === "f";
    return {
      pais: S.otroPais || S.pais, pais_gen: (filaPais(S, !!S.otroPais) || [])[3] || S.otroPais || S.pais,
      nac: fila ? (f ? fila[2] : fila[1]) : null, nac_es: fila ? (f ? fila[5] : fila[4]) : null,
      x: S.x, ru: S.ru, es: S.es,
    };
  }

  /* ── Voz ── */
  function hablar(lineas) {
    const items = lineas.map(l => ({ texto: azChSinEmoji(l.voz || l.ru).replace(/«[^»]*[a-zñ][^»]*»/gi, "").trim(), lento: l.lento })).filter(i => /[а-яё]/i.test(i.texto));
    if (!items.length) return;
    azHablarSecuencia(items.map(i => ({ texto: i.texto, genero: M.personaje, rate: i.lento ? 0.6 : undefined })));
  }

  /* ── «📖 Mostrar entrada» al seleccionar una palabra (como en Lecturas) ── */
  function lexDeSeleccion(txt) {
    const w = (String(txt).match(/[А-Яа-яЁё́]+(?:-[А-Яа-яЁё́]+)*/) || [])[0];
    if (!w) return null;
    const k = azFormaClave(w);
    const cand = new Map();
    try { (azIndiceFormas().get(k) || []).forEach(([id, f]) => cand.set(id, f)); } catch (e) {}
    (typeof LEXICON_COMER !== "undefined" ? LEXICON_COMER : []).forEach(e => { if (azFormaClave(e.acento || e.ru) === k && !cand.has(e.id)) cand.set(e.id, e.acento || e.ru); });
    if (!cand.size) return { id: null, forma: w };
    const unidad = id => { const e = lexComerById(id) || {}; const u = [].concat(e.introducedIn || [], e.appearsIn || []); return u.length ? Math.min(...u) : 99; };
    let ids = [...cand.keys()];
    if (/́/.test(w)) { const ex = ids.filter(id => cand.get(id) === w || (lexComerById(id) || {}).acento === w); if (ex.length) ids = ex; }
    ids.sort((a, b) => unidad(a) - unidad(b));
    return { id: ids[0], forma: w };
  }

  return {
    K, lang: "ru", langTrad: "es", norm, esPregunta, tieneATi, soloATi, NAC, capNombre, capPais, capEco, capEsRu, capRuEs,
    mejorar, generoDe, trCrudo, valores, plantillas: "pais_gen|pais|nac_es|nac|x|ru|es", sinTr: ["x", "es"], hablar, lexDeSeleccion,
    rxSel: /[а-яё]/i, ojoNombre: "зовут",
    aperturaClaves: ["привет", "здравств", "=добрый", "=доброе", "=хай"],
    /* Escribió en el otro alfabeto: ¿qué le dice? (null = está bien) */
    otroAlfabeto(raw, n) {
      const lat = (raw.match(/[a-zñáéíóú]/gi) || []).length, cyr = (raw.match(/[а-яё]/gi) || []).length;
      if (lat > cyr && !n.latin) return /^\s*[¡!]?\s*h?ola\b/i.test(raw) ? "hola" : "latin";
      return null;
    },
    /* «что значит…?» → línea de respuesta, o null si no es esa pregunta */
    significa(raw, T) {
      if (!T.some(t => t.startsWith("знач"))) return null;
      const d = capRuEs(raw); if (!d) return null;
      if (!d.es) return { noSe: true };
      return { linea: { ru: "«" + d.x + "» — э́то «" + d.es + "». 🙂", tr: "«" + d.x + "» — éta «" + d.es + "».", es: "«" + d.x + "» significa «" + d.es + "»." } };
    },
    /* «как по-русски…?» → línea de respuesta y lo que suena */
    comoSeDice(raw, T) {
      if (!(T.includes("по-русски") && /[a-zñ]/i.test(raw))) return null;
      const x = capEsRu(raw);
      if (!(x && x.ru)) return null;
      return { linea: { ru: "«" + x.x + "» — " + x.ru + "! 🙂", tr: "«" + x.x + "» — " + trCrudo(x.ru) + "!", es: "«" + x.x + "» en ruso es " + x.ru + "." }, decir: x.ru };
    },
    /* captura «esru»: una palabra en español → Masha la dice en ruso */
    capturaTraduce(raw) {
      const x = capEsRu(raw); if (!x) return null;
      if (!x.ru) return { x: x.x, noSe: { ru: "Хм… «" + x.x + "»? Не зна́ю! 😅", tr: "Jm… «" + x.x + "»? Nie znáyu!", es: "Mmm… ¿«" + x.x + "»? ¡No sé!" } };
      return { x: x.x, ru: x.ru, decir: x.ru };
    },
    decirPalabra(w) { azHablarRu(w, M.personaje); },
  };
}

/* ── Textos de la pantalla de Masha (en español) ── */
const TX_MASHA = {
  titulo: "Hablar con Masha", kicker: n => n + " TEMAS · A1 A B1",
  desc: "Charla por escrito con Masha, una estudiante de Moscú. Te pregunta por tu vida y le puedes preguntar por la suya, con lo que ya aprendiste en las unidades.",
  items: [["Escribe en ruso", "Con el teclado ruso del teléfono, o toca una de las ideas."],
    ["Pregúntale lo que quieras", "Su familia, su ciudad, qué estudia… y se acuerda de lo que le cuentas."],
    ["Crece con el curso", "Cada unidad suma temas nuevos de charla."]],
  charlar: "Charlar con Masha", tema: "Tema: ", yaCharlaste: n => " · ya charlaste en " + n + (n === 1 ? " tema" : " temas"),
  unidad: "Unidad ", masAdelante: "Más adelante", escuchar: "Escuchar",
  gKicker: "Guion · Unidad ", gIntro: "El recorrido completo de este tema: lo que pregunta Masha, cómo reacciona según lo que contestes y lo que sabe contar de su vida.",
  gComo: "Cómo entiende Masha",
  gReglas: ["No busca frases exactas: reconoce raíces de palabras clave (хорош…, плох…, из…) y tolera una letra mal.",
    "Cada paso tiene varias ramas: la primera que coincide decide su reacción y a qué paso sigue la charla.",
    "Si le preguntas algo, contesta con su vida y vuelve a su pregunta. Si le devuelves la pregunta («А ты?»), te dice lo suyo.",
    "Se acuerda, también en otras charlas, de tu nombre, de dónde eres y si eres hombre o mujer.",
    "Entiende «Что зна́чит…?» y «Как по-ру́сски…?»: busca la palabra en el diccionario.",
    "Si no entiende, te lo dice y vuelve a preguntar; a la segunda, te sugiere usar las ideas."],
  gRecorrido: "Recorrido", gFin: "Fin de la charla", gQueda: "Se queda en este paso", gSalta: "Si ya le dijiste tu nombre, lo salta: ",
  gIdeas: "Ideas que se sugieren", gSi: "Si respondes…", gOtroPais: "Otro país", gNombre: "Cualquier nombre", gSiTeLlamas: "Si te llamas ",
  gATi: "Si le devuelves la pregunta («А ты?»)", gVolver: "Para volver al tema", gVida: "Lo que Masha cuenta de su vida",
  gVidaSub: "Se lo puedes preguntar en cualquier momento de la charla.", gEj: "Por ejemplo: ", gUtiles: "Frases que entiende siempre",
  gAccFin: "→ Fin de la charla", gAccRep: "→ Repite lo último, despacio y con la traducción", gAccVuelve: "→ Vuelve a su pregunta",
  gNoEnt: "Si no entiende",
  gCasos: [["No reconoce la respuesta", "noEntendi"], ["Le preguntas algo que no sabe", "noSe"], ["Escribes en letras latinas", "latin"], ["Escribes «hola»", "hola"]],
  kicker2: "Charla · Unidad ", chTrad: "Traducción", chTr: "Transliteración", chVoz: "Voz", chIdeas: "Ideas",
  ayuda: "Toca un mensaje de Masha para ver la traducción, o ▶ para escucharlo de nuevo. Si no entiendes, escríbele «Я не понима́ю» o «Что зна́чит…?».",
  aviso: "En Azbuka, los acentos (´) son solo una ayuda para leer: en ruso no se escriben, así que no hace falta que los pongas.",
  empezar: "Empezar la charla", mejor: "💬 Mejor: ", enLugar: " en lugar de ", escribiendo: "Masha está escribiendo",
  ideasPreg: "Ideas para preguntarle", ideasResp: "Ideas para responder", placeholder: "Escribe en ruso…", enviar: "Enviar",
  tip: "Usa el teclado ruso del teléfono. También puedes dictar: toca el 🎤 del teclado ruso y habla.", deNuevo: "↺ Empezar de nuevo",
  finKicker: "Fin de la charla", sabeDeTi: "Lo que Masha sabe de ti", sabesDe: "Lo que sabes de Masha",
  nadaVida: "Esta vez no le preguntaste nada sobre su vida.", proxima: "La próxima, pregúntale", otroTema: "Otro tema: ",
  otraVez: "Charlar de nuevo", todos: "Todos los temas", tabTemas: "Temas", tabCharla: "Charla", tabGuion: "Guion",
  notaAlfabeto: "Escribe con el teclado ruso del teléfono.", notaNoEntendio: "Masha no te entendió. Prueba con una de las ideas de abajo.",
  nombre: "Nombre", mostrarEntrada: "📖 Mostrar entrada",
};

/* ============================================================
   El motor y la página
   ============================================================ */
function azCharla(CFG) {
  const { useState, useEffect, useRef } = htmPreact;
  const h = React.createElement;
  const M = CFG.datos, ID = CFG.id, TX = CFG.tx;
  const I = CFG.idioma(M), K = I.K;
  const PARAMS = new URLSearchParams(location.search);
  const PJ = CFG.personaje || { ru: "Ма́ша", es: "Masha", genero: "f", desc: "" };
  const MOD = (typeof AZ_MODULES !== "undefined" && AZ_MODULES.find(m => m.id === ID)) || CFG.modulo;
  const UNIDADES = [...new Set(M.temas.map(t => t.desde))].sort((a, b) => a - b);
  const temaPorId = id => M.temas.find(t => t.id === id) || null;
  const trT = T => T.tituloEs || T.tituloRu || "";
  const linea = (t, tr, trad) => ({ [K.t]: t, tr, [K.trad]: trad });

  /* ── Texto: normalizar y reconocer ── */
  const norm = I.norm;
  function toks(s) { return norm(s).split(" ").filter(Boolean).flatMap(t => t.includes("-") ? [t].concat(t.split("-").filter(Boolean)) : [t]); }
  /* «=x»: palabra exacta; «~x»: palabra que termina en x. Si no, comienzo de palabra; en raíces de 6+ letras se tolera una
     letra mal, siempre que las dos últimas coincidan. */
  function raizOk(T, r) {
    if (r[0] === "=") return T.includes(r.slice(1));
    if (r[0] === "~") return T.some(t => t.length > 3 && t.endsWith(r.slice(1)));
    return T.some(t => t.startsWith(r) ||
      (r.length >= 6 && t.length >= r.length && t.slice(r.length - 2, r.length) === r.slice(-2) && azChLev(t.slice(0, r.length), r) <= 1));
  }
  /* Patrón: raíces separadas por espacio, todas obligatorias; «=a b»: las dos palabras exactas */
  function patronOk(T, p) {
    const ws = norm(p.replace(/=/g, " =")).split(" ").filter(Boolean);
    if (p[0] === "=") return ws.every(r => raizOk(T, r[0] === "=" || r[0] === "~" ? r : "=" + r));
    return ws.every(r => raizOk(T, r));
  }
  function clavesOk(T, cl) { return (cl || []).some(p => patronOk(T, p)); }
  const NAC = I.NAC;

  function llenar(L, S) {
    const f = S.genero === "f", val = I.valores(S);
    const rxP = new RegExp("\\{(" + I.plantillas + ")\\}", "g");
    const rep = (s, modo) => String(s || "")
      .replace(/,?\s?\{nombre\}/g, m => S.nombre ? m.replace("{nombre}", modo === "tr" ? I.trCrudo(S.nombre) : S.nombre) : "")
      .replace(/\{([^{}/]+)\/([^{}]+)\}/g, (m, a, b) => (f ? b : a))
      .replace(rxP, (m, k) => {
        const v = val[k]; if (!v) return "";
        return modo === "tr" && !I.sinTr.includes(k) ? I.trCrudo(v) : v;
      });
    /* Voz (21/11/2026, Manu): si lo único personal de la línea es «, {nombre}», el audio es la
       misma frase sin el nombre (el nombre solo se ve escrito). Las demás plantillas suenan
       con la voz del teléfono. */
    const tT = String(L[K.t] || ""), otras = new RegExp("\\{(" + I.plantillas + ")\\}");
    const soloNombre = /,\s?\{nombre\}/.test(tT) && !otras.test(tT) && !/[^,]\s?\{nombre\}/.test(tT.replace(/,\s?\{nombre\}/g, ""));
    const voz = soloNombre ? rep(tT.replace(/,\s?\{nombre\}/g, "")) : null;
    return { [K.t]: rep(L[K.t]), tr: rep(L.tr, "tr"), [K.trad]: rep(L[K.trad]), lento: L.lento, verEs: L.verEs, voz };
  }
  const ver = (arr, nivel) => { if (!arr || !arr.length) return []; let r = arr[0]; arr.forEach(v => { if (v.d <= nivel) r = v; }); return r.l; };

  /* ── Motor: un tema, el estado y tu mensaje → lo que dice ── */
  function armarTema(tema, nivel) {
    const NODOS = {}; tema.nodos.forEach(n => { NODOS[n.id] = n; });
    NODOS.__ap = {
      id: "__ap", titulo: "Saludo", trasPregunta: tema.inicio, ideas: M.apertura.ideas,
      ramas: [{ claves: I.aperturaClaves, resp: [], ir: tema.inicio },
        { comodin: true, claves: [], resp: [], ir: tema.inicio }],
    };
    const PREGS = M.vida.filter(p => p.desde <= nivel).concat(tema.preguntas || []);
    const C = k => ver(M.comodines[k], nivel)[0] || linea("🙂", "", "");
    return { tema, nivel, NODOS, PREGS, C };
  }
  function estadoNuevo(S, datos) { return { nodo: null, S: Object.assign({}, S || {}), preg: [], datos: Object.assign({}, datos || {}), fallos: {}, nPreg: 0, fin: false, ultima: null }; }
  function preguntaDe(X, T) {
    for (const p of X.PREGS) {
      if (!clavesOk(T, p.claves)) continue;
      const v = (p.variantes || []).find(v => clavesOk(T, v.claves));
      return { p, resp: ver(v ? v.v : p.v, X.nivel) };
    }
    return null;
  }
  function entrar(X, st, id, decir) {
    if (!id || id === "FIN") { st.fin = true; st.nodo = "FIN"; return; }
    const n = X.NODOS[id];
    if (n.saltarSi && st.S[n.saltarSi]) { if (!st.S.presentada) (n.alSaltar || []).forEach(L => decir(L)); return entrar(X, st, n.sig, decir); }
    st.nodo = id;
    let lineas = n.bot || [];
    if (n.botSi) for (const k in n.botSi) if (st.preg.includes(k)) { lineas = n.botSi[k]; break; }
    lineas.forEach(L => decir(L));
    if (lineas.length) st.ultima = lineas[lineas.length - 1];
  }
  function empezarTema(X, S, datos) {
    const st = estadoNuevo(S, datos), out = [];
    const decir = L => out.push(llenar(L, st.S));
    if (X.tema.apertura) {
      st.nodo = "__ap";
      const l = ver(st.S.nombre ? M.apertura.conNombre : M.apertura.sinNombre, X.nivel);
      l.forEach(decir); st.ultima = l[l.length - 1];
    } else entrar(X, st, X.tema.inicio, decir);
    return { st, out };
  }
  function procesar(X, st0, raw, delegado) {
    const st = JSON.parse(JSON.stringify(st0));
    const out = [], notas = [];
    const decir = (L, extra) => { if (L) out.push(Object.assign(llenar(L, st.S), extra || {})); };
    const n = X.NODOS[st.nodo];
    const T = toks(raw);
    const retomar = () => { if (n.abierto || st.nodo === "__ap") return; decir(n.retomar || st.ultima); };
    const otro = I.otroAlfabeto(raw, n);
    if (otro) {
      decir(X.C(otro));
      notas.push(TX.notaAlfabeto);
      return { st, out, notas };
    }
    if (!T.length) return { st, out, notas };
    if (!st.S.nombre && st.nodo !== "nombre" && T.includes(I.ojoNombre) && !I.esPregunta(raw, T)) {
      const nm = I.capNombre(raw);
      if (nm) { st.S.nombre = nm; st.datos[TX.nombre] = nm; st.S.presentada = true; }
    }
    /* El género de quien escribe, por cómo lo dice (я была́; estoy cansada) */
    if (st.nodo !== "__ap") { const g = I.generoDe(T, raw); if (g) st.S.genero = g; }
    const aTiOk = () => n.aTi && !(n.aTiTema && st.preg.includes(n.aTiTema));
    const decirATi = () => { if (!aTiOk()) return false; n.aTi.forEach(L => decir(L)); if (n.aTiTema) st.preg.push(n.aTiTema); return true; };
    const pregunta = I.esPregunta(raw, T);

    /* 2. Ramas del paso */
    for (const r of n.ramas || []) {
      if (r.comodin) continue;
      let resp = r.resp, ir = r.ir, valor = r.datoValor;
      if (r.captura === "nombre") {
        const nm = I.capNombre(raw); if (!nm) continue;
        st.S.nombre = nm; valor = nm;
        const k = Object.keys(r.porNombre).find(k => k !== "*" && k.split("|").includes(norm(nm)));
        resp = r.porNombre[k || "*"];
      } else if (r.captura === "pais") {
        const p = I.capPais(T, raw); if (!p) continue;
        if (r.guarda === "no") st.S.otroPais = p.pais;              /* habla de otra persona: no es el país del alumno */
        else if (r.guarda === "nac" || p.nac) { st.S.nac = p.pais; if (!st.S.pais) st.S.pais = p.pais; }
        else st.S.pais = p.pais;
        if (p.genero && r.guarda !== "no") st.S.genero = p.genero;
        const fila = NAC.find(x => x[0] === p.pais);
        valor = r.guarda === "nac" && fila ? (st.S.genero === "f" ? fila[2] : fila[1]) : p.pais;
        const o = (r.porPais && (r.porPais[p.pais] || r.porPais["*"])) || { resp: r.resp, ir: r.ir }; resp = o.resp; ir = o.ir;
      } else if (r.captura === "eco") {
        const x = I.capEco(raw, r.tras); if (!x) continue;
        st.S.x = x; valor = x;
      } else if (r.captura === "esru") {
        const x = I.capturaTraduce(raw); if (!x) continue;
        if (x.noSe) { st.S.x = x.x; decir(x.noSe); return { st, out, notas }; }
        st.S.x = x.x; st.S[K.t] = x[K.t];
        I.decirPalabra(x.decir);
      } else if (!clavesOk(T, r.claves)) continue;
      if (r.fijaPais) st.S.pais = r.fijaPais;
      if (r.genero) T.forEach(t => { if (r.genero[t]) st.S.genero = r.genero[t]; });
      if (r.dato) st.datos[r.dato] = valor || raw.trim();
      if (r.delega && !delegado) {
        st.nodo = r.delega;
        const sub = procesar(X, st, raw, true);
        return { st: sub.st, out: out.concat(sub.out), notas: notas.concat(sub.notas) };
      }
      resp.forEach(L => decir(L));
      /* Una rama que corrige y se queda en el paso: a la tercera vez sigue igual
         (y, si el paso lo tiene, antes dice la respuesta: alRendirse) */
      if (ir === null) {
        st.fallos[st.nodo] = (st.fallos[st.nodo] || 0) + 1;
        const com = (n.ramas || []).find(x => x.comodin);
        const sigue = (com && com.ir) || ((n.ramas || []).find(x => typeof x.ir === "string") || {}).ir;
        if (st.fallos[st.nodo] >= 3 && sigue) { (n.alRendirse || []).forEach(L => decir(L)); entrar(X, st, sigue, decir); return { st, out, notas }; }
      }
      if (I.tieneATi(T) && n.aTi) decirATi();
      else if (pregunta) { const g = preguntaDe(X, T); if (g && !st.preg.includes(g.p.id)) { st.preg.push(g.p.id); g.resp.forEach(L => decir(L)); } }
      if (ir === null) return { st, out, notas };
      entrar(X, st, ir === undefined ? n.sig : ir, decir);
      return { st, out, notas };
    }
    /* 3. Diccionario: «¿qué significa…?» y «¿cómo se dice…?» */
    const sg = I.significa(raw, T);
    if (sg) { decir(sg.noSe ? X.C("noSe") : sg.linea); retomar(); return { st, out, notas }; }
    const cd = I.comoSeDice(raw, T);
    if (cd) { decir(cd.linea); I.decirPalabra(cd.decir); retomar(); return { st, out, notas }; }
    /* Frases que sirven siempre */
    for (const u of M.utiles) {
      if (!clavesOk(T, u.claves)) continue;
      ver(u.resp, X.nivel).forEach(L => decir(L));
      if (u.accion === "fin") { st.fin = true; st.nodo = "FIN"; }
      else if (u.accion === "repetir") decir(st.ultima, { lento: true, verEs: true });
      else retomar();
      return { st, out, notas };
    }
    /* 4. Preguntas: «¿y tú?» o su vida */
    if (pregunta || I.tieneATi(T) || n.abierto) {
      if (I.soloATi(T) && n.aTi) { if (!decirATi()) decir(X.C("yaDije")); retomar(); return { st, out, notas }; }
      const g = preguntaDe(X, T);
      if (g) {
        if (!st.preg.includes(g.p.id)) st.preg.push(g.p.id);
        g.resp.forEach(L => decir(L));
        if (n.abierto) { st.nPreg++; if (st.nPreg % 3 === 0) decir(X.C("masPreguntas")); }
        else if (n.trasPregunta) entrar(X, st, n.trasPregunta, decir);
        else retomar();
        return { st, out, notas };
      }
      if (n.aTi && I.tieneATi(T)) { decirATi(); retomar(); return { st, out, notas }; }
      /* Una pregunta que no es sobre su vida: si el paso tiene comodín, se toma como respuesta;
         si no, «no sé» y vuelve a su pregunta */
      if ((pregunta || I.tieneATi(T)) && !(n.ramas || []).some(r => r.comodin)) { decir(X.C("noSe")); retomar(); return { st, out, notas }; }
    }
    /* 5. Comodín del paso */
    const com = (n.ramas || []).find(r => r.comodin);
    if (com) {
      com.resp.forEach(L => decir(L));
      if (com.ir === null) {
        st.fallos[st.nodo] = (st.fallos[st.nodo] || 0) + 1;
        const sigue = ((n.ramas || []).find(x => typeof x.ir === "string") || {}).ir;
        if (st.fallos[st.nodo] >= 3 && sigue) { (n.alRendirse || []).forEach(L => decir(L)); entrar(X, st, sigue, decir); return { st, out, notas }; }
        retomar(); return { st, out, notas };
      }
      entrar(X, st, com.ir === undefined ? n.sig : com.ir, decir); return { st, out, notas };
    }
    /* 6. No entendió */
    st.fallos[st.nodo] = (st.fallos[st.nodo] || 0) + 1;
    decir(X.C("noEntendi")); retomar();
    if (st.fallos[st.nodo] >= 2) notas.push(TX.notaNoEntendio);
    return { st, out, notas };
  }
  /* para pruebas: mashaProcesar / luciaProcesar… */
  window[ID + "Procesar"] = procesar; window[ID + "Armar"] = armarTema; window[ID + "Empezar"] = empezarTema; window[ID + "Mejorar"] = I.mejorar;

  const hablar = I.hablar;

  /* ── Qué tema toca ── */
  function temaQueToca(unidad, hechos) {
    const disp = M.temas.filter(t => t.desde <= Math.max(unidad || 0, UNIDADES[0]));
    const v = t => (hechos[t.id] && hechos[t.id].v) || 0;
    return disp.slice().sort((a, b) => v(a) - v(b) || b.desde - a.desde || M.temas.indexOf(a) - M.temas.indexOf(b))[0] || M.temas[0];
  }

  /* ── Estilos ── */
  function Estilos({ c }) {
    return h("style", null, `
    .intro{background:${c.card};border:1px solid ${c.border};border-radius:var(--az-r);padding:12px 16px;margin-bottom:12px;animation:fadeIn var(--az-t-media) var(--az-curva);}
    .intro-top{display:flex;align-items:center;gap:12px;}
    .intro-icon{width:44px;height:44px;border-radius:var(--az-r);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0;}
    .intro-title{font-size:var(--az-fs-titulo);font-weight:800;color:${c.text};line-height:1.1;}
    .intro-kicker{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin-top:4px;}
    .intro-desc{font-size:var(--az-fs-chico);line-height:1.55;color:${c.textSub};margin-top:12px;}
    .intro-item{display:flex;gap:8px;padding:8px 0;border-top:1px solid ${c.border};}
    .intro-item:first-of-type{margin-top:12px;}
    .intro-dot{width:6px;height:6px;border-radius:50%;background:${c.gold};margin-top:8px;flex-shrink:0;}
    .intro-it{font-size:var(--az-fs-chico);font-weight:700;color:${c.text};}
    .intro-id{font-size:var(--az-fs-nota);color:${c.textMuted};margin-top:1px;line-height:1.4;}
    @media (max-height:720px){.intro{padding:14px 16px 10px;}.intro-desc{margin-top:12px;}.intro-id{display:none;}.intro-item{padding:8px 0;}}
    .section-lbl{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin:24px 0 4px;}
    .list{background:${c.card};border:1px solid ${c.border};border-radius:var(--az-r);overflow:hidden;}
    .res-row{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:12px 16px;text-decoration:none;cursor:pointer;border-top:1px solid ${c.border};background:none;width:100%;text-align:left;font-family:inherit;border-left:none;border-right:none;border-bottom:none;}
    .res-row:first-child{border-top:none;}
    .res-ru{color:${c.text};font-weight:600;font-size:var(--az-fs-cuerpo);}
    .res-es{color:${c.textMuted};font-size:var(--az-fs-nota);margin-top:4px;}
    .res-der{color:${c.textMuted};font-size:var(--az-fs-nota);text-align:right;flex-shrink:0;}
    .ch-btn{display:block;width:100%;box-sizing:border-box;border:none;border-radius:var(--az-r);padding:12px 16px;font-size:var(--az-fs-cuerpo);font-weight:700;font-family:inherit;cursor:pointer;transition:transform var(--az-t-rapida) var(--az-curva),background-color var(--az-t-rapida),border-color var(--az-t-rapida),color var(--az-t-rapida);text-align:center;text-decoration:none;}
    .ch-btn:active{transform:scale(.97);}
    .ch-btn.pri{background:${c.gold};color:${c.bg};}
    .ch-btn.sec{background:${c.bg2};color:${c.text};border:1px solid ${c.border};}
    .ch-btn-sub{font-size:var(--az-fs-nota);color:${c.textMuted};text-align:center;margin-top:8px;line-height:1.4;}
    .ch-hero{background:${c.card};border:1px solid ${c.border};border-radius:var(--az-r);padding:16px;display:flex;gap:12px;align-items:center;}
    .ch-av{width:44px;height:44px;border-radius:var(--az-r);display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0;}
    .ch-kick{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};}
    .ch-nom{font-size:var(--az-fs-titulo);font-weight:800;color:${c.gold};line-height:1.15;}
    .ch-sub{font-size:var(--az-fs-chico);color:${c.textMuted};line-height:1.4;margin-top:4px;}
    .ch-chips{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 4px;}
    .pair-btn{padding:7px 12px;border-radius:var(--az-r);font-size:var(--az-fs-nota);font-weight:600;cursor:pointer;font-family:inherit;transition:transform var(--az-t-rapida) var(--az-curva),background-color var(--az-t-rapida),border-color var(--az-t-rapida),color var(--az-t-rapida);}
    .ch-txt{font-size:var(--az-fs-cuerpo);line-height:1.6;color:${c.textSub};margin:12px 0;}
    .ch-dest{background:${c.gold}14;border:1px solid ${c.gold}88;border-radius:var(--az-r);padding:12px 12px;font-size:var(--az-fs-cuerpo);font-weight:600;color:${c.text};line-height:1.45;margin:12px 0 12px;}
    .ch-chat{display:flex;flex-direction:column;gap:8px;margin-top:12px;}
    .ch-msg{max-width:86%;padding:8px 12px;border-radius:var(--az-r);font-size:var(--az-fs-destacado);line-height:1.4;animation:fadeIn var(--az-t-media) var(--az-curva) both;}
    .ch-msg.m{align-self:flex-start;background:${c.bg2};border:1px solid ${c.border};border-bottom-left-radius:4px;display:flex;gap:12px;align-items:flex-start;cursor:pointer;}
    .ch-msg.y{align-self:flex-end;background:${c.gold}14;border:1px solid ${c.gold}88;border-bottom-right-radius:4px;color:${c.text};}
    .ch-mejor{align-self:flex-end;max-width:86%;font-size:var(--az-fs-nota);line-height:1.45;color:${c.textMuted};text-align:right;margin-top:-4px;}
    .ch-mejor b{color:${c.gold};font-weight:700;}
    .ch-quien{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.gold};margin-bottom:4px;}
    .ch-ru{color:${c.text};-webkit-user-select:text;user-select:text;}
    .ch-tr{font-size:var(--az-fs-chico);font-style:italic;color:${c.textSub};margin-top:4px;}
    .ch-es{font-size:var(--az-fs-nota);color:${c.textMuted};margin-top:4px;}
    .ch-play{width:30px;height:30px;border-radius:var(--az-r);background:${c.bg2};border:1px solid ${c.border};color:${c.gold};font-size:var(--az-fs-nota);flex-shrink:0;cursor:pointer;font-family:inherit;}
    .ch-nota{align-self:center;font-size:var(--az-fs-nota);color:${c.textMuted};font-style:italic;text-align:center;padding:4px 8px;max-width:90%;}
    .ch-esc{align-self:flex-start;background:${c.bg2};border:1px solid ${c.border};border-radius:var(--az-r);border-bottom-left-radius:4px;padding:12px 16px;display:flex;gap:4px;}
    .ch-esc span{width:7px;height:7px;border-radius:50%;background:${c.textMuted};animation:chPunto 1s infinite ease-in-out;}
    .ch-esc span:nth-child(2){animation-delay:.15s;} .ch-esc span:nth-child(3){animation-delay:.3s;}
    @keyframes chPunto{0%,80%,100%{opacity:.25;transform:translateY(0);}40%{opacity:1;transform:translateY(-3px);}}
    .ch-lbl{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin:16px 0 8px;}
    .ch-ideas{display:flex;flex-wrap:wrap;gap:8px;}
    .ch-idea{background:${c.bg2};border:1px solid ${c.border};border-radius:var(--az-r);padding:8px 12px;text-align:left;cursor:pointer;font-family:inherit;color:${c.text};transition:transform var(--az-t-rapida) var(--az-curva),background-color var(--az-t-rapida),border-color var(--az-t-rapida),color var(--az-t-rapida);}
    .ch-idea:active{transform:scale(.97);}
    .ch-idea b{display:block;font-size:var(--az-fs-cuerpo);font-weight:600;}
    .ch-idea i{display:block;font-size:var(--az-fs-micro);font-style:normal;color:${c.textMuted};margin-top:1px;}
    .ch-in{display:flex;gap:8px;margin-top:12px;}
    .ch-input{flex:1;min-width:0;height:46px;box-sizing:border-box;background:${c.bg2};border:1px solid ${c.border};border-radius:var(--az-r);padding:0 12px;font-size:var(--az-fs-destacado);color:${c.text};font-family:inherit;}
    .ch-env{height:46px;padding:0 16px;border:none;border-radius:var(--az-r);background:${c.gold};color:${c.bg};font-size:var(--az-fs-cuerpo);font-weight:700;font-family:inherit;cursor:pointer;}
    .ch-env:disabled{opacity:.4;cursor:default;}
    .ch-tip{font-size:var(--az-fs-nota);color:${c.textMuted};line-height:1.45;margin-top:8px;}
    .ch-reset{display:block;margin:18px auto 0;background:none;border:none;color:${c.textMuted};font-size:var(--az-fs-nota);font-family:inherit;cursor:pointer;text-decoration:underline;}
    .ch-card{background:${c.card};border:1px solid ${c.border};border-radius:var(--az-r);padding:16px;margin-top:16px;}
    .ch-row{padding:8px 0;border-top:1px solid ${c.border};font-size:var(--az-fs-chico);line-height:1.45;color:${c.textSub};}
    .ch-row:first-of-type{border-top:none;}
    .ch-row b{color:${c.text};font-weight:700;}
    .g-title{font-size:var(--az-fs-titulo);font-weight:800;color:${c.text};}
    .g-nodo{background:${c.card};border:1px solid ${c.border};border-radius:var(--az-r);padding:14px;margin-bottom:12px;}
    .g-n{font-size:var(--az-fs-destacado);font-weight:800;color:${c.text};}
    .g-ru{font-size:var(--az-fs-cuerpo);font-weight:700;color:${c.text};line-height:1.4;}
    .g-es{font-size:var(--az-fs-nota);color:${c.textMuted};line-height:1.4;}
    .g-bot{background:${c.bg2};border:1px solid ${c.border};border-radius:var(--az-r);padding:8px 12px;margin-top:8px;}
    .g-rama{border-left:2px solid ${c.gold}88;padding:8px 0 8px 12px;margin-top:8px;}
    .g-et{font-size:var(--az-fs-chico);font-weight:700;color:${c.gold};}
    .g-ir{font-size:var(--az-fs-nota);color:${c.textSub};margin-top:4px;}
    .g-sub{font-size:var(--az-fs-micro);font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.textMuted};margin-top:12px;}
    .g-li{display:flex;gap:12px;font-size:var(--az-fs-chico);line-height:1.5;color:${c.textSub};margin-bottom:8px;}
    .g-li:before{content:"";width:6px;height:6px;border-radius:50%;background:${c.gold};flex-shrink:0;margin-top:8px;}
    .lec-entrada{position:fixed;left:50%;transform:translateX(-50%);bottom:calc(env(safe-area-inset-bottom, 0px) + 138px);z-index:451;border-radius:var(--az-r-pildora);padding:12px 16px;font-size:var(--az-fs-chico);font-weight:700;font-family:inherit;box-shadow:0 8px 24px rgba(0,0,0,.4);white-space:nowrap;background:${c.card};color:${c.gold};border:1px solid ${c.gold};cursor:pointer;}
    `);
  }

  /* ── «📖 Mostrar entrada» al seleccionar una palabra (como en Lecturas) ── */
  function MostrarEntrada() {
    const [sel, setSel] = useState(null);
    useEffect(() => {
      const revisar = () => {
        const s = window.getSelection && window.getSelection();
        const txt = s ? String(s).trim() : "";
        const nodo = s && s.anchorNode ? (s.anchorNode.nodeType === 1 ? s.anchorNode : s.anchorNode.parentElement) : null;
        if (!txt || !I.rxSel.test(txt) || txt.split(/\s+/).length > 3 || !nodo || !nodo.closest || !nodo.closest(".ch-ru")) { setSel(null); return; }
        let rect = null; try { rect = s.getRangeAt(0).getBoundingClientRect(); } catch (e) {}
        setSel({ txt, rect });
      };
      document.addEventListener("selectionchange", revisar);
      return () => document.removeEventListener("selectionchange", revisar);
    }, []);
    if (!sel) return null;
    const abrir = () => {
      const d = I.lexDeSeleccion(sel.txt), rect = sel.rect;
      setSel(null);
      try { window.getSelection().removeAllRanges(); } catch (e) {}
      setTimeout(() => window.dispatchEvent(new CustomEvent("az-burbuja", { detail: { tipo: "palabra", datos: { id: d ? d.id : null, forma: d ? d.forma : sel.txt }, rect } })), 60);
    };
    return h("button", Object.assign({ className: "lec-entrada" }, azTocarYa(abrir)), TX.mostrarEntrada);   /* al primer toque en el iPhone (27/10/2026) */
  }

  /* ── Portada ── */
  function Portada({ c, unidad, hechos }) {
    const col = azModuloColor(MOD);
    const toca = temaQueToca(unidad, hechos);
    const href = t => CFG.archivo + "?tema=" + t.id;
    const hechosN = Object.keys(hechos).filter(k => hechos[k].v).length;
    return h(React.Fragment, null,
      h("div", { className: "intro" },
        h("div", { className: "intro-top" },
          h("div", { className: "intro-icon", style: { background: col.bg, color: col.fg }, lang: I.lang }, MOD.glyph),
          h("div", null,
            h("div", { className: "intro-title" }, TX.titulo),
            h("div", { className: "intro-kicker" }, TX.kicker(M.temas.length)))),
        h("div", { className: "intro-desc" }, TX.desc),
        TX.items.map(([t, d]) =>
          h("div", { key: t, className: "intro-item" }, h("div", { className: "intro-dot" }), h("div", null, h("div", { className: "intro-it" }, t), h("div", { className: "intro-id" }, d))))),
      h("a", { className: "ch-btn pri", href: href(toca), onClick: e => azNavigate(e, href(toca)) }, TX.charlar),
      h("div", { className: "ch-btn-sub" }, TX.tema, h("span", { lang: I.lang, style: { color: c.textSub, fontWeight: 600 } }, toca.titulo), " · " + trT(toca) + (hechosN ? TX.yaCharlaste(hechosN) : "")),
      UNIDADES.map(u => {
        const un = AZ_UNITS.find(x => x.id === u), despues = unidad != null && u > unidad;
        return h(React.Fragment, { key: u },
          h("div", { className: "section-lbl" }, TX.unidad + u + (un ? " · " + un.title : "")),
          h("div", { className: "list", style: despues ? { opacity: .45 } : null }, M.temas.filter(t => t.desde === u).map(t => {
            const hh = hechos[t.id];
            return h("a", { key: t.id, className: "res-row", href: href(t), onClick: e => azNavigate(e, href(t)) },
              h("div", { style: { minWidth: 0 } }, h("div", { className: "res-ru", lang: I.lang }, t.titulo), h("div", { className: "res-es" }, trT(t) + " · " + t.resumen)),
              h("div", { className: "res-der" }, hh && hh.v ? h("span", { style: { color: "#4CAF82", fontWeight: 700 } }, "✓" + (hh.v > 1 ? " ×" + hh.v : "")) : despues ? TX.masAdelante : ""));
          })));
      }));
  }

  /* ── Charla ── */
  function BurbujaBot({ m, tr, es }) {
    const [verla, setVerla] = useState(false);
    const soloEmoji = !I.rxSel.test(m[K.t]);
    return h("div", { className: "ch-msg m", onClick: () => { if (!String(window.getSelection && window.getSelection() || "")) setVerla(v => !v); } },
      h("div", { style: { flex: 1, minWidth: 0 } },
        h("div", { className: "ch-quien", lang: I.lang }, PJ[K.t]),
        h("div", { className: "ch-ru", lang: I.lang }, m[K.t]),
        tr && m.tr && h("div", { className: "ch-tr" }, m.tr),
        (es || verla || m.verEs) && m[K.trad] && h("div", { className: "ch-es", lang: I.langTrad }, m[K.trad])),
      !soloEmoji && h("button", { className: "ch-play", "aria-label": TX.escuchar, onClick: e => { e.stopPropagation(); hablar([m]); } }, "▶"));
  }

  function Guion({ c, X }) {
    const T = X.tema;
    const orden = {}; T.nodos.forEach((n, i) => { orden[n.id] = i + 1; });
    const destino = id => id === "FIN" ? TX.gFin : id == null ? TX.gQueda : X.NODOS[id] ? orden[id] + " · " + X.NODOS[id].titulo : id;
    const lin = (L, k) => h("div", { key: k, style: { marginTop: 4 } }, h("div", { className: "g-ru", lang: I.lang }, L[K.t]), L[K.trad] && h("div", { className: "g-es", lang: I.langTrad }, L[K.trad]));
    return h("div", { style: { animation: "fadeIn var(--az-t-media) var(--az-curva)", paddingTop: 16, paddingBottom: 24 } },
      h("div", { className: "ch-kick" }, TX.gKicker + T.desde),
      h("div", { className: "g-title", lang: I.lang }, T.titulo),
      h("div", { className: "ch-txt", style: { marginTop: 8 } }, TX.gIntro),
      h("div", { className: "ch-lbl" }, TX.gComo),
      TX.gReglas.map((t, i) => h("div", { key: i, className: "g-li" }, t)),
      h("div", { className: "ch-lbl" }, TX.gRecorrido),
      T.nodos.map(n => h("div", { key: n.id, className: "g-nodo" },
        h("div", { className: "g-n" }, orden[n.id] + " · " + n.titulo),
        n.bot.length > 0 && h("div", { className: "g-bot" }, h("div", { className: "ch-quien", lang: I.lang }, PJ[K.t]), n.bot.map(lin)),
        n.saltarSi && h("div", { className: "g-ir", style: { marginTop: 8 } }, TX.gSalta, h("span", { lang: I.lang }, n.alSaltar[0][K.t])),
        n.ideas.length > 0 && h("div", { className: "g-sub" }, TX.gIdeas),
        n.ideas.length > 0 && h("div", { className: "g-es", lang: I.lang, style: { color: c.textSub, marginTop: 4 } }, n.ideas.map(i => i[K.t]).join(" · ")),
        (n.ramas || []).length > 0 && h("div", { className: "g-sub" }, TX.gSi),
        (n.ramas || []).map((r, k) => {
          if (r.porPais) return h("div", { key: k, className: "g-rama" }, h("div", { className: "g-et" }, r.etiqueta),
            Object.keys(r.porPais).map(p => h("div", { key: p, style: { marginTop: 8 } },
              h("div", { className: "g-es" }, p === "*" ? TX.gOtroPais : p), r.porPais[p].resp.map(lin), h("div", { className: "g-ir" }, "→ " + destino(r.porPais[p].ir)))));
          if (r.porNombre) return h("div", { key: k, className: "g-rama" }, h("div", { className: "g-et" }, r.etiqueta),
            Object.keys(r.porNombre).map(p => h("div", { key: p, style: { marginTop: 8 } },
              h("div", { className: "g-es" }, p === "*" ? TX.gNombre : TX.gSiTeLlamas + p.split("|").join(", ")), r.porNombre[p].map(lin))),
            h("div", { className: "g-ir" }, "→ " + destino(r.ir)));
          return h("div", { key: k, className: "g-rama" }, h("div", { className: "g-et" }, r.etiqueta), r.resp.map(lin), h("div", { className: "g-ir" }, "→ " + destino(r.ir === undefined ? n.sig : r.ir)));
        }),
        n.aTi && h(React.Fragment, null, h("div", { className: "g-sub" }, TX.gATi), n.aTi.map(lin)),
        n.retomar && h(React.Fragment, null, h("div", { className: "g-sub" }, TX.gVolver), lin(n.retomar, "r")))),
      h("div", { className: "ch-lbl" }, TX.gVida),
      h("div", { className: "ch-txt", style: { marginTop: 0 } }, TX.gVidaSub),
      X.PREGS.map(p => h("div", { key: p.id, className: "g-nodo" },
        h("div", { className: "ch-kick" }, p.tema),
        h("div", { className: "g-es", style: { marginTop: 4 } }, TX.gEj, h("span", { lang: I.lang, style: { color: c.textSub } }, p.idea[K.t])),
        h("div", { className: "g-bot" }, ver(p.v, X.nivel).map(lin)))),
      h("div", { className: "ch-lbl" }, TX.gUtiles),
      M.utiles.map(u => h("div", { key: u.id, className: "g-rama" }, h("div", { className: "g-et" }, u.etiqueta), ver(u.resp, X.nivel).map(lin),
        h("div", { className: "g-ir" }, u.accion === "fin" ? TX.gAccFin : u.accion === "repetir" ? TX.gAccRep : TX.gAccVuelve))),
      h("div", { className: "ch-lbl" }, TX.gNoEnt),
      TX.gCasos.map(([t, k]) =>
        h("div", { key: k, className: "g-rama" }, h("div", { className: "g-et" }, t), lin(X.C(k), k))));
  }

  function Charla({ c, X, mem, guardarMem, alFin, view }) {
    const [st, setSt] = useState(null);
    const [msgs, setMsgs] = useState([]);
    const [escribiendo, setEscribiendo] = useState(false);
    const [txt, setTxt] = useState("");
    const [verTr, setVerTr] = useState(() => !document.documentElement.classList.contains("az-sin-tl"));
    const [verEs, setVerEs] = useState(false);
    const [voz, setVoz] = useState(true);
    const [ideas, setIdeas] = useState(true);
    const inRef = useRef(null);
    const timers = useRef([]);
    const vozRef = useRef(voz); vozRef.current = voz;
    useEffect(() => { if (msgs.length && view === "charla") setTimeout(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }), 30); }, [msgs.length, escribiendo]);
    useEffect(() => () => { timers.current.forEach(clearTimeout); azCallar(); }, []);
    const chipSt = on => on ? { background: c.gold + "14", border: `1px solid ${c.gold}`, color: c.gold } : { background: c.bg2, border: `1px solid ${c.border}`, color: c.textMuted };
    const T = X.tema;

    const mostrar = (lineas, notas) => {
      if (!lineas.length && !notas.length) return;
      setEscribiendo(true);
      if (vozRef.current) hablar(lineas);
      lineas.forEach((l, i) => timers.current.push(setTimeout(() => {
        setMsgs(ms => ms.concat([Object.assign({ id: azId(), de: "m" }, l)]));
        if (i === lineas.length - 1) setEscribiendo(false);
      }, 650 + i * 750)));
      const fin = 650 + Math.max(0, lineas.length - 1) * 750 + 100;
      timers.current.push(setTimeout(() => { if (!lineas.length) setEscribiendo(false); if (notas.length) setMsgs(ms => ms.concat(notas.map(t => ({ id: azId(), de: "n", txt: t })))); }, fin));
    };
    const empezar = () => {
      timers.current.forEach(clearTimeout); timers.current = [];
      azCallar();
      const r = empezarTema(X, mem.alumno.S, mem.alumno.datos);
      setSt(r.st); setMsgs([]); setTxt("");
      mostrar(r.out, []);
    };
    const enviar = () => {
      const t = txt.trim();
      if (!t || escribiendo || !st || st.fin) return;
      const mj = I.mejorar(t, st.S);
      setMsgs(ms => ms.concat([{ id: azId(), de: "y", txt: t }], mj.length ? [{ id: azId(), de: "j", mj }] : []));
      setTxt("");
      const r = procesar(X, st, t);
      setSt(r.st);
      guardarMem({ S: r.st.S, datos: r.st.datos }, r.st.fin ? T.id : null);
      mostrar(r.out, r.notas);
      if (r.st.fin) alFin();
    };
    const usarIdea = t => { setTxt(t.replace(/\s*…\s*$/, "").trim() + (/…$/.test(t) ? " " : "")); setTimeout(() => inRef.current && inRef.current.focus(), 30); };

    const nodo = st && st.nodo && st.nodo !== "FIN" ? X.NODOS[st.nodo] : null;
    const listaIdeas = !nodo ? [] : nodo.abierto
      ? X.PREGS.filter(p => !st.preg.includes(p.id)).slice(0, 4).map(p => p.idea).concat(nodo.ideas)
      : (nodo.ideas || []).map(i => llenar(i, st.S));
    const terminado = st && st.fin && !escribiendo;
    const datos = st ? Object.keys(st.datos).filter(k => st.datos[k]) : [];
    const sabidas = st ? X.PREGS.filter(p => st.preg.includes(p.id)) : [];
    const faltan = st ? X.PREGS.filter(p => !st.preg.includes(p.id)).slice(0, 5) : [];
    const col = azModuloColor(MOD);
    const otro = temaQueToca(mem.unidad, Object.assign({}, mem.temas, { [T.id]: { v: 999 } }));

    return h("div", { style: { animation: "fadeIn var(--az-t-media) var(--az-curva)", paddingTop: 16, paddingBottom: 24 } },
      h("div", { className: "ch-hero" },
        h("div", { className: "ch-av", style: { background: col.bg, color: col.fg }, lang: I.lang }, MOD.glyph),
        h("div", { style: { minWidth: 0 } },
          h("div", { className: "ch-kick" }, TX.kicker2 + T.desde),
          h("div", { className: "ch-nom", lang: I.lang }, T.titulo),
          h("div", { className: "ch-sub" }, trT(T) + " · " + T.resumen))),
      h("div", { className: "ch-chips" },
        h("button", { className: "pair-btn", style: chipSt(verEs), onClick: () => setVerEs(v => !v) }, TX.chTrad),
        h("button", { className: "pair-btn", style: chipSt(verTr), onClick: () => setVerTr(v => !v) }, TX.chTr),
        h("button", { className: "pair-btn", style: chipSt(voz), onClick: () => { setVoz(v => !v); azCallar(); } }, TX.chVoz),
        h("button", { className: "pair-btn", style: chipSt(ideas), onClick: () => setIdeas(v => !v) }, TX.chIdeas)),
      !st && h(React.Fragment, null,
        h("div", { className: "ch-txt" }, T.intro),
        h("div", { className: "ch-txt", style: { marginTop: -8 } }, TX.ayuda),
        h("div", { className: "ch-dest" }, TX.aviso),
        h("button", { className: "ch-btn pri", onClick: empezar }, TX.empezar)),
      st && h("div", { className: "ch-chat" },
        msgs.map(m => m.de === "m" ? h(BurbujaBot, { key: m.id, m, tr: verTr, es: verEs })
          : m.de === "y" ? h("div", { key: m.id, className: "ch-msg y", lang: I.lang }, m.txt)
          : m.de === "j" ? h("div", { key: m.id, className: "ch-mejor" }, m.mj.map((x, k) => h("div", { key: k }, TX.mejor, h("b", { lang: I.lang }, x.bien), x.por ? " (" + x.por + ")" : "", TX.enLugar, h("span", { lang: I.lang }, x.mal))))
          : h("div", { key: m.id, className: "ch-nota" }, m.txt)),
        escribiendo && h("div", { className: "ch-esc", "aria-label": TX.escribiendo }, h("span"), h("span"), h("span"))),
      st && !st.fin && h(React.Fragment, null,
        ideas && listaIdeas.length > 0 && h(React.Fragment, null,
          h("div", { className: "ch-lbl" }, nodo && nodo.abierto ? TX.ideasPreg : TX.ideasResp),
          h("div", { className: "ch-ideas" }, listaIdeas.map((i, k) => h("button", { key: k, className: "ch-idea", onClick: () => usarIdea(i[K.t]) },
            h("b", { lang: I.lang }, i[K.t]), h("i", { lang: I.langTrad }, i[K.trad]))))),
        h("div", { className: "ch-in" },
          h("input", { ref: inRef, className: "ch-input", value: txt, lang: I.lang, autocapitalize: "sentences", autocorrect: "off", spellcheck: false, autocomplete: "off",
            placeholder: TX.placeholder, onInput: e => setTxt(e.target.value), onKeyDown: e => { if (e.key === "Enter") enviar(); } }),
          h("button", { className: "ch-env", onClick: enviar, disabled: !txt.trim() || escribiendo }, TX.enviar)),
        h("div", { className: "ch-tip" }, TX.tip),
        h("button", { className: "ch-reset", onClick: empezar }, TX.deNuevo)),
      terminado && h("div", { className: "ch-card" },
        h("div", { className: "ch-kick" }, TX.finKicker),
        datos.length > 0 && h(React.Fragment, null,
          h("div", { className: "ch-lbl", style: { marginTop: 12 } }, TX.sabeDeTi),
          datos.map(k => h("div", { key: k, className: "ch-row" }, h("b", null, k + ": "), h("span", { lang: I.lang }, st.datos[k])))),
        h("div", { className: "ch-lbl" }, TX.sabesDe),
        sabidas.length ? sabidas.map(p => h("div", { key: p.id, className: "ch-row" }, h("b", null, p.tema + ": "), ver(p.v, X.nivel).map(l => l[K.trad]).join(" ")))
          : h("div", { className: "ch-row" }, TX.nadaVida),
        faltan.length > 0 && h(React.Fragment, null,
          h("div", { className: "ch-lbl" }, TX.proxima),
          h("div", { className: "ch-row", lang: I.lang }, faltan.map(p => p.idea[K.t]).join(" · "))),
        h("div", { style: { display: "flex", flexDirection: "column", gap: 8, marginTop: 16 } },
          h("a", { className: "ch-btn pri", href: CFG.archivo + "?tema=" + otro.id, onClick: e => { azCallar(); azNavigate(e, CFG.archivo + "?tema=" + otro.id); } }, TX.otroTema, h("span", { lang: I.lang }, otro.titulo)),
          h("button", { className: "ch-btn sec", onClick: empezar }, TX.otraVez),
          h("a", { className: "ch-btn sec", href: CFG.archivo, onClick: e => { azCallar(); azNavigate(e, CFG.archivo); } }, TX.todos))));
  }

  function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [mem, setMem] = useState(null);
    const [view, setView] = useState("charla");
    const T = PARAMS.get("tema") ? temaPorId(PARAMS.get("tema")) : null;
    useEffect(() => { (async () => {
      setDarkMode((await azGet("az_theme", "dark")) !== "light");
      await azLoadProgress();
      const m = await azGet(CFG.clave, {}), u = await azLeerUltimo();
      setMem({ alumno: Object.assign({ S: {}, datos: {} }, m.alumno || {}), temas: m.temas || {}, unidad: u && u.unidad ? u.unidad : null });
      if (typeof azModuleTouch === "function") azModuleTouch(ID);
    })(); }, []);
    const c = azColors(darkMode);
    window.azFuenteActual = () => T ? TX.titulo + " · " + (CFG.fuenteTitulo ? CFG.fuenteTitulo(T) : trT(T)) : TX.titulo;
    /* Guarda lo que sabe del alumno y, al terminar, suma una vez el tema */
    const guardarMem = async (alumno, terminado) => {
      const m = await azGet(CFG.clave, {});
      const S = Object.assign({}, alumno.S); delete S.x; delete S.ru; delete S.es; delete S.presentada; delete S.otroPais;
      m.alumno = { S, datos: alumno.datos };
      if (terminado) { m.temas = m.temas || {}; const v = (m.temas[terminado] && m.temas[terminado].v) || 0; m.temas[terminado] = { v: v + 1, f: new Date().toISOString().slice(0, 10) }; }
      await azSet(CFG.clave, m);
      setMem(x => Object.assign({}, x, { alumno: m.alumno, temas: m.temas || x.temas }));
    };
    const X = T && mem ? armarTema(T, Math.max(T.desde, mem.unidad || 0)) : null;
    const tabs = T ? [{ id: "temas", icon: "⊞", label: TX.tabTemas, action: () => { azCallar(); location.href = CFG.archivo; } },
      { id: "charla", icon: "💬", label: TX.tabCharla }, { id: "guion", icon: "📜", label: TX.tabGuion }] : [];
    return h(React.Fragment, null,
      h(Estilos, { c }),
      h(AzShell, { darkMode, setDarkMode, moduleId: ID, tabs, view, setView: v => { if (v !== "temas") { setView(v); window.scrollTo(0, 0); } } },
        !mem ? null
          : !T ? h("div", { style: { animation: "fadeIn var(--az-t-media) var(--az-curva)", paddingTop: 16, paddingBottom: 24 } }, h(Portada, { c, unidad: mem.unidad, hechos: mem.temas }))
          : h(React.Fragment, null,
              h("div", { style: { display: view === "charla" ? "block" : "none" } }, h(Charla, { c, X, mem, guardarMem, alFin: () => {}, view })),
              view === "guion" && h(Guion, { c, X }))),
      h(MostrarEntrada, null),
      h(AzBurbujaHost, { dark: darkMode }));
  }
  htmPreact.render(htmPreact.h(App, null), document.getElementById("root"));
}
