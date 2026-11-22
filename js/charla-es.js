/* ============================================================
   CHARLA-ES.JS — Las reglas del español para el motor de charla
   (js/charla.js), para «Болтаем с Лусией» (lucia.html, Abecé;
   21/11/2026, claude/PROPUESTA_LUCIA_ABECE.md). Es el espejo de
   IDIOMA_RU (Masha):
   · las respuestas se comparan sin tildes y con la ñ;
   · si el alumno escribe en cirílico, Lucía le pide español;
   · «💬 Лучше:» con los errores típicos de un rusohablante: el verbo
     que no va con su pronombre (yo es → soy), «soy 25 años» → tengo,
     «yo gusto» → me gusta, la tilde que falta, el adjetivo con el
     género de quien habla (soy cansado → cansada) y la palabra mal
     escrita que se parece a una del diccionario;
   · «¿Qué significa…?» y «¿Cómo se dice … en español?» buscan en el
     léxico español; la voz es la de Lucía (azHablarSecuenciaEs).
   Las líneas de los datos son { es, tr, ru }: K.t = "es", K.trad = "ru".
   ============================================================ */
function AZ_CHARLA_ES(M) {
  const K = { t: "es", trad: "ru" };
  /* minúsculas, sin puntuación y sin tildes (la ñ se queda) */
  const sinAcento = s => String(s || "").toLowerCase().replace(/ñ/g, "\u0001").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\u0001/g, "ñ");
  function norm(s) {
    return sinAcento(s).replace(/[.,!?;:«»"“”()…—–¿¡]/g, " ").replace(/\s+-\s+/g, " ").replace(/\s+/g, " ").trim();
  }
  const PREG = new Set(["que", "como", "donde", "quien", "quienes", "cuanto", "cuanta", "cuantos", "cuantas", "cuando", "cual", "cuales", "adonde"]);
  function esPregunta(raw, T) { return /\?/.test(raw) || PREG.has(T[0]) || (T[0] === "y" && PREG.has(T[1])); }
  function tieneATi(T) { return /(^| )y (a )?(tu|ti|usted|vosotros)( |$)/.test(T.join(" ")); }
  function soloATi(T) { const r = T.filter(t => !["y", "a"].includes(t)); return r.length > 0 && r.every(t => ["tu", "ti", "usted", "vos"].includes(t)); }

  /* Naciones: [país, él, ella, país (ru), él (ru), ella (ru)] */
  const NAC = M.naciones || [];
  const NAC_SET = new Set(NAC.flatMap(r => [norm(r[1]), norm(r[2])]));
  const STOP = new Set(["hola", "adios", "chao", "si", "no", "y", "o", "pero", "yo", "tu", "el", "ella", "me", "te", "se", "llamo", "llamas", "soy", "eres", "es", "de", "en", "a",
    "un", "una", "muy", "bien", "mal", "gracias", "mi", "nombre", "encantado", "encantada", "mucho", "gusto", "bueno", "buena", "vale", "buenos", "buenas", "dias", "tardes",
    "noches", "estudiante", "vivo", "hablo", "trabajo", "estoy", "aqui", "tambien", "claro", "perdon", "lo", "siento", "que", "como", "ok", "pues", "bueno", "senor", "senora"]);
  function partes(raw) {
    const R = String(raw).replace(/[.,!?;:«»"“”()…¿¡]/g, " ").split(/\s+/).filter(Boolean);
    return { R, lo: R.map(norm) };
  }

  /* ── Lo que el alumno puede escribir: todas las formas del léxico español ── */
  let FORMAS = null, POR_SIN = null;
  function formas() {
    if (FORMAS) return FORMAS;
    FORMAS = new Map();   /* forma en minúscula, con tilde → [{ id, k }] */
    const add = (f, x) => { if (!f || typeof f !== "string") return; f.toLowerCase().split(/[\s,/()]+/).forEach(p => { if (!p) return; if (!FORMAS.has(p)) FORMAS.set(p, []); FORMAS.get(p).push(x); }); };
    /* las palabras de una entrada de varias palabras («es decir») son «parte»: no cuentan como otra palabra */
    (typeof LEXICON_ES !== "undefined" ? LEXICON_ES : []).forEach(e => { add(e.es, { id: e.id, k: /\s/.test(e.es) ? "parte" : "lema" }); if (e.femenino && e.femenino.es) add(e.femenino.es, { id: e.id, k: "f" }); });
    try { const IX = formasEsIndice(); Object.keys(IX).forEach(f => IX[f].forEach(x => add(f, { id: x.id, k: x.k }))); } catch (e) {}
    if (typeof VERBOS_ES !== "undefined") for (const id in VERBOS_ES) {
      const v = VERBOS_ES[id]; if (!v || v.base) continue;
      ["pres", "indef", "imperf", "fut", "cond", "subj"].forEach(t => (v[t] || []).forEach((f, p) => add(f, { id, k: "verbo", t, p })));
      ["ger", "part", "impTu"].forEach(t => add(v[t], { id, k: "verbo", t }));
    }
    POR_SIN = new Map();
    FORMAS.forEach((v, f) => { const s = sinAcento(f); if (!POR_SIN.has(s)) POR_SIN.set(s, []); if (!POR_SIN.get(s).includes(f)) POR_SIN.get(s).push(f); });
    return FORMAS;
  }

  function capNombre(raw) {
    const { R, lo } = partes(raw);
    if (lo.some(w => ["como", "cual", "quien", "donde", "cuantos", "que"].includes(w))) return null;
    let i, c = null;
    if ((i = lo.indexOf("llamo")) >= 0) c = R[i + 1];
    else if ((i = lo.indexOf("nombre")) >= 0 && lo[i + 1] === "es") c = R[i + 2];
    else if ((i = lo.indexOf("soy")) >= 0) c = R[i + 1];
    else if (R.length === 1) c = R[0];
    else if (R.length === 2 && ["hola", "pues", "ok", "bueno"].includes(lo[0])) c = R[1];
    if (!c) return null;
    const n = norm(c);
    if (STOP.has(n) || NAC_SET.has(n) || /\d/.test(c) || c.length > 20 || /[а-яё]/i.test(c)) return null;
    /* «soy estudiante», «soy de Madrid»: si es una palabra del léxico escrita en minúscula, no es un nombre */
    if (c === c.toLowerCase() && formas().has(c.toLowerCase())) return null;
    return azChMayus(c);
  }
  function capPais(T) {
    const J = " " + T.join(" ") + " ";
    for (const r of NAC) {
      if (J.includes(" " + norm(r[1]) + " ") && norm(r[1]) !== norm(r[2])) return { pais: r[0], genero: "m", nac: true };
      if (J.includes(" " + norm(r[2]) + " ") && norm(r[1]) !== norm(r[2])) return { pais: r[0], genero: "f", nac: true };
      if (J.includes(" " + norm(r[1]) + " ")) return { pais: r[0], nac: true };
    }
    for (const r of NAC) if (J.includes(" " + norm(r[0]) + " ")) return { pais: r[0] };
    return null;
  }
  function capEco(raw, tras) {
    const { R, lo } = partes(raw);
    for (let i = 0; i < R.length - 1; i++) {
      if (!tras.includes(lo[i]) || tras.includes(lo[i + 1]) || STOP.has(lo[i + 1])) continue;
      let c = R[i + 1];
      if (R[i + 2] && /^[A-ZÁÉÍÓÚÑ]/.test(R[i + 2])) c += " " + R[i + 2];
      return azChMayus(c);
    }
    return null;
  }

  /* ── Diccionario de bolsillo de Lucía ── */
  function entradaEs(w) {
    const f = formas(), lw = String(w).toLowerCase();
    let x = f.get(lw);
    if (!x) { const alt = (POR_SIN.get(sinAcento(lw)) || [])[0]; if (alt) x = f.get(alt); }
    if (!x || !x.length) return null;
    const ids = [...new Set(x.map(a => a.id))];
    const e = ids.map(id => lexEsById(id)).filter(Boolean)
      .sort((a, b) => Math.min(99, ...(a.introducedIn || [])) - Math.min(99, ...(b.introducedIn || [])))[0];
    return e || null;
  }
  let RU_ES = null;
  function indiceRuEs() {
    if (RU_ES) return RU_ES;
    RU_ES = new Map();
    const u = e => (e.introducedIn && e.introducedIn.length ? Math.min(...e.introducedIn) : 99);
    (typeof LEXICON_ES !== "undefined" ? LEXICON_ES : []).forEach(e => {
      (e.senses || []).forEach((s, si) => String(s.ru || "").replace(/\([^)]*\)/g, "").split(/[,;]/).forEach(p => {
        const k = String(p).toLowerCase().replace(/́/g, "").replace(/ё/g, "е").trim();
        if (!k) return;
        const pt = u(e) * 10 + si, prev = RU_ES.get(k);
        if (!prev || pt < prev.pt) RU_ES.set(k, { e, pt });
      }));
    });
    return RU_ES;
  }
  /* «¿Cómo se dice «дом» en español?» → { x: "дом", es: "casa" } */
  function capRuEs(raw) {
    const ru = (String(raw).match(/[А-Яа-яЁё́-]+(?:\s+[А-Яа-яЁё́-]+)*/) || [])[0];
    if (!ru) return null;
    const k = ru.toLowerCase().replace(/́/g, "").replace(/ё/g, "е").trim();
    const idx = indiceRuEs(), r = idx.get(k) || idx.get(k.split(" ").pop());
    return { x: ru, es: r ? r.e.es : null };
  }
  /* «¿Qué significa «perro»?» → la palabra y su traducción */
  function capEsRu(raw) {
    const m = String(raw).match(/signific\S*\s+[«"“]?([A-Za-zÁÉÍÓÚÜÑáéíóúüñ-]+)/i);
    if (!m) return null;
    const e = entradaEs(m[1]);
    return { x: m[1], ru: e && e.senses && e.senses[0] ? e.senses[0].ru : null };
  }

  /* ── «💬 Лучше:» ── */
  const PRON = { "yo": 0, "tú": 1, "él": 2, "ella": 2, "usted": 2, "nosotros": 3, "nosotras": 3, "vosotros": 4, "vosotras": 4, "ellos": 5, "ellas": 5, "ustedes": 5 };
  const SALTO = new Set(["no", "también", "tambien", "siempre", "nunca", "ya", "todavía", "todavia", "casi", "me", "te", "se", "nos", "os", "lo", "la", "le", "los", "las", "les"]);
  const TIEMPOS = ["pres", "indef", "imperf", "fut", "cond", "subj"];
  const POR = p => "после «" + p + "»";
  function mejorar(raw, S) {
    const out = [];
    const R = String(raw).match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+/g) || [];
    const lo = R.map(w => w.toLowerCase());
    const F = formas();
    const ya = w => out.some(o => o.mal === w);
    /* 1. El verbo tiene que ir con su pronombre (solo con los pronombres con tilde: tu y el sin tilde son otra palabra) */
    lo.forEach((t, i) => {
      if (!(t in PRON)) return;
      const p = PRON[t];
      let j = i + 1; while (j < lo.length && SALTO.has(lo[j])) j++;
      if (j >= lo.length) return;
      const an = (F.get(lo[j]) || []).filter(a => a.k === "verbo" && TIEMPOS.includes(a.t));
      if (!an.length || an.some(a => a.p === p)) return;
      if ((F.get(lo[j]) || []).some(a => a.k !== "verbo" && a.k !== "parte")) return;   /* también es otra palabra */
      const a = an[0], v = VERBOS_ES[a.id], bien = v && v[a.t] && v[a.t][p];
      if (bien && bien !== lo[j]) out.push({ mal: R[j], bien, por: POR(R[i].toLowerCase()) });
    });
    /* 2. «Soy 25 años» → tengo */
    const m = String(raw).match(/\b(soy|eres|es|somos|son)\s+(\d+|[a-záéíóúñ]+)\s+años\b/i);
    if (m) { const T = { soy: "tengo", eres: "tienes", es: "tiene", somos: "tenemos", son: "tienen" }[m[1].toLowerCase()]; if (T) out.push({ mal: m[1], bien: T, por: "возраст — с tener" }); }
    /* 3. «Yo gusto» → me gusta */
    const g = String(raw).match(/\b(yo|tú|tu)\s+(gusta|gusto|gustas|gustan|encanta|encanto|interesa)\b/i);
    if (g) { const pr = /^y/i.test(g[1]) ? "me" : "te", vb = /^enc/i.test(g[2]) ? "encanta" : /^int/i.test(g[2]) ? "interesa" : "gusta"; out.push({ mal: g[1] + " " + g[2], bien: pr + " " + vb, por: null }); }
    /* 4. El adjetivo con el género de quien habla: «(yo) soy / estoy cansado» */
    if (S && (S.genero === "f" || S.genero === "m")) lo.forEach((t, i) => {
      if (!["soy", "estoy"].includes(t) || i + 1 >= lo.length) return;
      let j = i + 1; if (["muy", "un", "bastante", "tan"].includes(lo[j])) { j++; if (lo[j] === "poco") j++; }
      const w = lo[j]; if (!w || ya(R[j])) return;
      const an = (F.get(w) || []).find(a => a.k === "m" || a.k === "f" || a.k === "lema");
      if (!an) return;
      let fs = []; try { fs = formasEsLista(an.id); } catch (e) {}
      const fm = (fs.find(x => x.k === "m") || {}).f, ff = (fs.find(x => x.k === "f") || {}).f;
      if (!fm || !ff || fm === ff) return;
      if (S.genero === "f" && w === fm) out.push({ mal: R[j], bien: ff, por: "ты говоришь о себе" });
      if (S.genero === "m" && w === ff) out.push({ mal: R[j], bien: fm, por: "ты говоришь о себе" });
    });
    /* 5. La tilde que falta, y 6. una palabra que no existe y se parece a una del diccionario */
    const nombre = S && S.nombre ? S.nombre.toLowerCase() : "";
    R.forEach((w, i) => {
      const t = lo[i];
      if (t.length < 2 || F.has(t) || t === nombre || ya(w)) return;
      if (/^[A-ZÁÉÍÓÚÑ]/.test(w) && i > 0) return;
      const conTilde = POR_SIN.get(sinAcento(t));
      if (conTilde && conTilde.length) { out.push({ mal: w, bien: conTilde[0], por: conTilde[0] !== sinAcento(conTilde[0]) ? "с тильдой" : null }); return; }
      if (t.length < 4) return;
      let mejor = null;
      const st = sinAcento(t);
      POR_SIN.forEach((fs, k) => {
        if (mejor || k[0] !== st[0] || Math.abs(k.length - st.length) > 1) return;
        if (azChLev(k, st) === 1) mejor = fs[0];
      });
      if (mejor) out.push({ mal: w, bien: mejor, por: null });
    });
    return out;
  }
  /* Género de quien escribe: «(yo) soy / estoy» + un adjetivo o nacionalidad en masculino o femenino */
  function generoDe(T) {
    const F = formas();
    for (let i = 0; i < T.length - 1; i++) {
      if (!["soy", "estoy"].includes(T[i])) continue;
      let j = i + 1; if (["muy", "un", "bastante"].includes(T[j])) { j++; if (T[j] === "poco") j++; }
      const w = T[j]; if (!w) continue;
      const cand = (POR_SIN.get(w) || [w]).flatMap(f => F.get(f) || []);
      const ks = new Set(cand.filter(a => a.k === "m" || a.k === "f").map(a => a.k));
      if (ks.size === 1) return [...ks][0];
    }
    return null;
  }

  function valores(S) {
    const fila = NAC.find(r => r[0] === (S.nac || S.pais)), f = S.genero === "f";
    const filaP = NAC.find(r => r[0] === (S.otroPais || S.pais));
    return {
      pais: S.otroPais || S.pais, pais_ru: filaP ? filaP[3] : null,
      nac: fila ? (f ? fila[2] : fila[1]) : null, nac_ru: fila ? (f ? fila[5] : fila[4]) : null,
      x: S.x, ru: S.ru, es: S.es,
    };
  }

  /* ── Voz: la de Lucía; sin emoji ni las palabras rusas entre «» ── */
  function hablar(lineas) {
    const items = lineas.map(l => ({ texto: azChSinEmoji(l.voz || l.es).replace(/«[^»]*[а-яё][^»]*»/gi, "").trim(), lento: l.lento })).filter(i => /[a-záéíóúüñ]/i.test(i.texto));
    if (!items.length) return;
    azHablarSecuenciaEs(items.map(i => ({ texto: i.texto, genero: M.personaje, rate: i.lento ? 0.6 : undefined })));
  }

  /* ── «📖 Показать слово» al seleccionar una palabra: la forma en el léxico español ── */
  function lexDeSeleccion(txt) {
    const w = (String(txt).match(/[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*/) || [])[0];
    if (!w) return null;
    const e = entradaEs(w);
    return { id: e ? e.id : null, forma: w };
  }

  return {
    K, lang: "es", langTrad: "ru", norm, esPregunta, tieneATi, soloATi, NAC, capNombre, capPais, capEco, capEsRu: capRuEs, capRuEs: capEsRu,
    mejorar, generoDe, trCrudo: s => s, valores, plantillas: "pais_ru|pais|nac_ru|nac|x|ru|es", sinTr: ["x", "ru", "es", "pais", "nac", "pais_ru", "nac_ru"], hablar, lexDeSeleccion,
    rxSel: /[a-záéíóúüñ]/i, ojoNombre: "llamo",
    aperturaClaves: ["hola", "buenas", "=buenos", "=hey", "=que tal"],
    otroAlfabeto(raw, n) {
      const lat = (raw.match(/[a-zñáéíóúü]/gi) || []).length, cyr = (raw.match(/[а-яё]/gi) || []).length;
      if (cyr > lat && !n.cirilico) return /привет|здравств/i.test(raw) ? "hola" : "latin";
      return null;
    },
    significa(raw, T) {
      if (!T.some(t => t.startsWith("signific"))) return null;
      const d = capEsRu(raw); if (!d) return null;
      if (!d.ru) return { noSe: true };
      return { linea: { es: "«" + d.x + "» en ruso es «" + d.ru + "». 🙂", tr: "", ru: "«" + d.x + "» — это «" + d.ru + "»." } };
    },
    comoSeDice(raw, T) {
      if (!(/[а-яё]/i.test(raw) && (T.includes("dice") || T.includes("español") || T.includes("espanol")))) return null;
      const x = capRuEs(raw);
      if (!(x && x.es)) return null;
      return { linea: { es: "«" + x.x + "» en español es «" + x.es + "». 🙂", tr: "", ru: "«" + x.x + "» по-испански — «" + x.es + "»." }, decir: x.es };
    },
    /* captura «esru» (en Lucía, al revés): una palabra rusa → Lucía la dice en español */
    capturaTraduce(raw) {
      const x = capRuEs(raw); if (!x) return null;
      if (!x.es) return { x: x.x, noSe: { es: "Mmm… ¿«" + x.x + "»? ¡No lo sé! 😅", tr: "", ru: "Хм… «" + x.x + "»? Не знаю! 😅" } };
      return { x: x.x, es: x.es, decir: x.es };
    },
    decirPalabra(w) { azHablarEs(w, null, M.personaje); },
  };
}
