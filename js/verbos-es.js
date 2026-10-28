/* ============================================================
   VERBOS-ES.JS — Verbos de Abecé (español para rusohablantes)
   ------------------------------------------------------------
   Lo que es propio del español dentro de verbos.html (27/10/2026,
   claude/INSTRUCCIONES_MODULOS_ABECE.md §3). verbos.html lo usa cuando la
   dirección activa es «abece»; en Azbuka no se carga.

   Lee data/data-verbos-es.js (VERBOS_ES, formas simples) y el léxico
   español (LEXICON_ES: traducción, definición, régimen, pareja
   pronominal). Arma con reglas sin excepciones lo que no se guarda:
     · los tiempos compuestos (haber + participio);
     · ir a + infinitivo;
     · el subjuntivo en -se (de la forma en -ra);
     · el imperativo de usted, vosotros y ustedes, y todo el negativo;
     · las formas pronominales: me levanto, levántate, levantaos (la tilde
       se recalcula: vesAcentuar), no te levantes; irse → idos.
   Resalta en dorado la parte que no sigue el modelo regular (vesMarcar).

   También expone vesBuscarForma(q) para el buscador de Abecé (core.js,
   azBuscarEs): hablé → hablar, me levanto → levantarse, levántate →
   levantarse.

   Textos en ruso: BORRADOR, los revisa Iván.
   ============================================================ */

/* ── Acentuación (las mismas reglas que herramientas/abece/conjugador-es.py) ── */
const VES_V = "aeiouáéíóúü";
const VES_TILDE = { a: "á", e: "é", i: "í", o: "ó", u: "ú" };
const VES_SIN = { "á": "a", "é": "e", "í": "i", "ó": "o", "ú": "u" };
function vesSinTilde(w) { return w.replace(/[áéíóú]/g, ch => VES_SIN[ch]); }
function vesVocales(w) {
  const lw = w.toLowerCase(), pos = [];
  for (let i = 0; i < lw.length; i++) {
    const ch = lw[i];
    if (VES_V.includes(ch)) {
      if (ch === "u" && i > 0 && "qg".includes(lw[i - 1]) && i + 1 < lw.length && "eéií".includes(lw[i + 1])) continue;
      pos.push(i);
    } else if (ch === "y" && i === lw.length - 1 && i > 0 && VES_V.includes(lw[i - 1])) pos.push(i);
  }
  return pos;
}
function vesNucleos(w) {
  const lw = w.toLowerCase(), ps = vesVocales(w), grupos = [];
  ps.forEach(p => { const g = grupos[grupos.length - 1]; if (g && g[g.length - 1] === p - 1) g.push(p); else grupos.push([p]); });
  const debil = ch => "iuüy".includes(ch), nuc = [];
  grupos.forEach(g => {
    let cur = [g[0]];
    for (let k = 1; k < g.length; k++) {
      const a = lw[cur[cur.length - 1]], b = lw[g[k]];
      const hiato = (!debil(a) && !debil(b)) || ("íú".includes(a) && !debil(b)) || ("íú".includes(b) && !debil(a));
      if (hiato) { nuc.push(cur); cur = [g[k]]; } else cur.push(g[k]);
    }
    nuc.push(cur);
  });
  return nuc;
}
function vesTonica(w) {
  const n = vesNucleos(w);
  for (let i = 0; i < n.length; i++) if (n[i].some(p => "áéíóú".includes(w[p]))) return i;
  if (n.length <= 1) return 0;
  return "aeiouns".includes(w[w.length - 1]) || w[w.length - 1] === "y" ? n.length - 2 : n.length - 1;
}
function vesEscribir(w, ton) {
  const base = vesSinTilde(w), n = vesNucleos(w), k = n.length, nu = n[ton], lw = base.toLowerCase();
  if (!nu) return base;
  if (nu.length === 1 && "iu".includes(lw[nu[0]])) {
    const p = nu[0];
    const junto = [p - 1, p + 1].some(q => q >= 0 && q < lw.length && "aeo".includes(lw[q])) ||
      (p >= 2 && lw[p - 1] === "h" && "aeo".includes(lw[p - 2])) || (p + 2 < lw.length && lw[p + 1] === "h" && "aeo".includes(lw[p + 2]));
    if (junto) return base.slice(0, p) + VES_TILDE[base[p]] + base.slice(p + 1);
  }
  const desdeFin = k - 1 - ton, fin = lw[lw.length - 1];
  const lleva = k === 1 ? false : desdeFin === 0 ? "aeiouns".includes(fin) : desdeFin === 1 ? !"aeiouns".includes(fin) && fin !== "y" : true;
  if (!lleva) return base;
  const fuertes = nu.filter(p => "aeo".includes(lw[p]));
  let p = fuertes.length ? fuertes[0] : nu[nu.length - 1];
  if (lw[p] === "y") p = nu[0];
  return base.slice(0, p) + VES_TILDE[base[p]] + base.slice(p + 1);
}
/* Forma + pronombre pegado, con la tilde que corresponde: levanta + te → levántate */
function vesAcentuar(forma, clitico) {
  if (!forma) return null;
  return vesEscribir(forma + clitico, vesTonica(forma));
}

/* ── Datos ── */
const VES_PERS = ["yo", "tú", "él, ella, usted", "nosotros", "vosotros", "ellos, ellas, ustedes"];
const VES_PERS_RU = ["я", "ты", "он, она, Вы", "мы", "вы (на «ты»)", "они, Вы (мн.)"];
const VES_CLIT = ["me", "te", "se", "nos", "os", "se"];
const VES_HABER = { pres: ["he", "has", "ha", "hemos", "habéis", "han"] };
const VES_IMP = [["tu", "tú", "ты"], ["usted", "usted", "Вы"], ["vosotros", "vosotros", "вы (на «ты»)"], ["ustedes", "ustedes", "Вы (мн.)"]];

function vesLex(id) { return typeof lexEsById === "function" ? lexEsById(id) : null; }
function vesPorEs(es) {
  if (typeof VERBOS_ES === "undefined") return null;
  if (!vesPorEs.m) { vesPorEs.m = {}; Object.keys(VERBOS_ES).forEach(id => { vesPorEs.m[VERBOS_ES[id].es] = id; }); }
  return vesPorEs.m[es] || null;
}
function vesEntrada(id) { return typeof VERBOS_ES !== "undefined" ? VERBOS_ES[id] || null : null; }

/* Formas del verbo simple de una entrada (la propia, la de su base o la de su locución) */
function vesSimple(id) {
  const e = vesEntrada(id);
  if (!e) return null;
  if (e.base) return vesEntrada(e.base);
  if (e.locucion) return vesSimple(e.locucion.verbo);
  return e;
}
/* ¿La entrada es pronominal (lleva me / te / se)? */
function vesPronominal(id) {
  const e = vesEntrada(id);
  if (!e) return false;
  if (e.locucion) return vesPronominal(e.locucion.verbo);
  return !!(e.base || e.pronominal);
}

/* Infinitivo del verbo simple (sin «se») */
function vesInfinitivo(id) {
  const e = vesEntrada(id);
  if (!e) return "";
  if (e.locucion) return vesInfinitivo(e.locucion.verbo);
  return e.base || e.pronominal ? e.es.slice(0, -2) : e.es;
}

/* Regular de referencia (para resaltar lo irregular): terminaciones del grupo, sin cambios */
const VES_FIN = {
  ar: { pres: ["o", "as", "a", "amos", "áis", "an"], indef: ["é", "aste", "ó", "amos", "asteis", "aron"], imperf: ["aba", "abas", "aba", "ábamos", "abais", "aban"], subj: ["e", "es", "e", "emos", "éis", "en"], subjImp: ["ara", "aras", "ara", "áramos", "arais", "aran"], ger: "ando", part: "ado" },
  er: { pres: ["o", "es", "e", "emos", "éis", "en"], indef: ["í", "iste", "ió", "imos", "isteis", "ieron"], imperf: ["ía", "ías", "ía", "íamos", "íais", "ían"], subj: ["a", "as", "a", "amos", "áis", "an"], subjImp: ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"], ger: "iendo", part: "ido" },
  ir: { pres: ["o", "es", "e", "imos", "ís", "en"], indef: ["í", "iste", "ió", "imos", "isteis", "ieron"], imperf: ["ía", "ías", "ía", "íamos", "íais", "ían"], subj: ["a", "as", "a", "amos", "áis", "an"], subjImp: ["iera", "ieras", "iera", "iéramos", "ierais", "ieran"], ger: "iendo", part: "ido" }
};
function vesRegular(inf, t, p) {
  const g = vesSinTilde(inf).slice(-2), r = inf.slice(0, -2), F = VES_FIN[g];
  if (!F) return null;
  if (t === "fut") return vesSinTilde(inf) + ["é", "ás", "á", "emos", "éis", "án"][p];
  if (t === "cond") return vesSinTilde(inf) + ["ía", "ías", "ía", "íamos", "íais", "ían"][p];
  if (t === "impTu") return r + F.pres[2];
  if (t === "ger" || t === "part") return r + F[t];
  return F[t] ? r + F[t][p] : null;
}
/* Parte que cambia respecto de la regular: [antes, resaltado, después] */
function vesMarcar(forma, regular) {
  if (!forma || !regular || forma === regular) return [forma || "", "", ""];
  let i = 0; const max = Math.min(forma.length, regular.length);
  while (i < max && forma[i] === regular[i]) i++;
  let j = 0;
  while (j < max - i && forma[forma.length - 1 - j] === regular[regular.length - 1 - j]) j++;
  let a = i, b = forma.length - j;
  if (a >= b) return [forma, "", ""];
  const mid = forma.slice(a, b);
  if (/^[iu]$/.test(mid) && forma[b] === "e") b++;   /* piensa, duerme: se resalta «ie», «ue» entero */
  return [forma.slice(0, a), forma.slice(a, b), forma.slice(b)];
}

/* ── Formas de una entrada, listas para mostrar ──
   Cada celda: { pre, verbo, post, regular } o null.
   pre: pronombre o auxiliar delante (me, he, voy a, no te); post: lo que va detrás (que, de menos, cuenta). */
function vesCelda(verbo, regular, pre, post) {
  if (!verbo) return null;
  return { pre: pre || "", verbo, post: post || "", regular: regular || null };
}
function vesTexto(c) { return c ? (c.pre ? c.pre + " " : "") + c.verbo + (c.post ? " " + c.post : "") : ""; }

function vesFormas(id) {
  const e = vesEntrada(id), s = vesSimple(id);
  if (!e || !s) return null;
  const inf = vesInfinitivo(id);
  const pron = vesPronominal(id);
  const loc = e.locucion || null;
  const post = loc ? loc.resto : "";
  const clit = p => pron ? VES_CLIT[p] : "";
  const T = {};
  const simple = (t) => s[t] ? s[t].map((f, p) => vesCelda(f, vesRegular(inf, t, p), clit(p), post)) : null;
  ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"].forEach(t => { T[t] = simple(t); });
  /* subjuntivo en -se (de la forma en -ra) */
  T.subjSe = s.subjImp.map((f, p) => f ? vesCelda(f.replace(/ra(s|mos|is|n)?$/, "se$1"), null, clit(p), post) : null);
  /* compuestos: haber + participio */
  const haber = vesEntrada(vesPorEs("haber")) || {};
  const part = s.part;
  const comp = (aux) => aux ? aux.map((a, p) => (a && (s.pres[p] || s.indef[p])) ? vesCelda(part, vesRegular(inf, "part", 0), (pron ? VES_CLIT[p] + " " : "") + a, post) : null) : null;
  T.perf = comp(VES_HABER.pres);
  T.plus = comp(haber.imperf);
  T.futPerf = comp(haber.fut);
  T.condPerf = comp(haber.cond);
  T.subjPerf = comp(haber.subj);
  T.subjPlus = comp(haber.subjImp);
  /* ir a + infinitivo (voy a levantarme) */
  const ir = vesEntrada(vesPorEs("ir")) || {};
  T.irA = s.fut.some(Boolean) ? (ir.pres || []).map((a, p) => s.pres[p] ? vesCelda(pron ? inf + VES_CLIT[p] : inf, null, a + " a", post) : null) : null;
  /* imperativo */
  const sinImp = !s.impTu || (loc && loc.sinImperativo);
  if (!sinImp) {
    const vosRe = inf.replace(/r$/, "d");   /* hablad, reíd, oíd, id */
    const af = {
      tu: s.impTu, usted: s.subj[2], vosotros: inf === "ir" ? "id" : vosRe, ustedes: s.subj[5]
    };
    const neg = { tu: s.subj[1], usted: s.subj[2], vosotros: s.subj[4], ustedes: s.subj[5] };
    const cl = { tu: "te", usted: "se", vosotros: "os", ustedes: "se" };
    T.impAf = {}; T.impNeg = {};
    VES_IMP.forEach(([k]) => {
      if (pron) {
        let f;
        if (k === "vosotros") f = inf === "ir" ? "idos" : (/ir$/.test(vesSinTilde(inf)) ? inf.slice(0, -2) + "íos" : inf.slice(0, -1) + "os");
        else f = vesAcentuar(af[k], cl[k]);
        T.impAf[k] = vesCelda(f, null, "", post);
        T.impNeg[k] = vesCelda(neg[k], vesRegular(inf, "subj", { tu: 1, usted: 2, vosotros: 4, ustedes: 5 }[k]), "no " + cl[k], post);
      } else {
        T.impAf[k] = vesCelda(af[k], k === "tu" ? vesRegular(inf, "impTu", 0) : k === "vosotros" ? null : vesRegular(inf, "subj", k === "usted" ? 2 : 5), "", post);
        T.impNeg[k] = vesCelda(neg[k], vesRegular(inf, "subj", { tu: 1, usted: 2, vosotros: 4, ustedes: 5 }[k]), "no", post);
      }
    });
  }
  /* formas no personales */
  T.inf = vesCelda(pron ? inf + "se" : inf, null, "", post);
  T.ger = vesCelda(pron ? vesAcentuar(s.ger, "se") : s.ger, pron ? null : vesRegular(inf, "ger", 0), "", post);
  T.part = vesCelda(s.part, vesRegular(inf, "part", 0), "", "");
  T.part2 = s.part2 ? vesCelda(s.part2, null, "", "") : null;
  /* hay que: solo la 3.ª persona, sin «se» */
  if (loc && loc.impersonal) {
    const solo3 = t => T[t] ? T[t].map((c, p) => p === 2 && c ? Object.assign({}, c, { verbo: { ha: "hay" }[c.verbo] || c.verbo }) : null) : null;
    Object.keys(T).forEach(k => { if (Array.isArray(T[k])) T[k] = solo3(k); });
  }
  return T;
}

/* ── Buscador de formas (core.js → azBuscarEs) ── */
const VES_ETIQ = { pres: "presente", indef: "indefinido", imperf: "imperfecto", fut: "futuro", cond: "condicional", subj: "subjuntivo presente", subjImp: "subjuntivo imperfecto", subjSe: "subjuntivo imperfecto (-se)" };
let VES_INDICE = null;
function vesNorm(s) { return typeof azNormEs === "function" ? azNormEs(s) : String(s || "").toLowerCase(); }
/* ¿La forma coincide con lo buscado? Si se escribió con tilde, la tilde cuenta (hablé ≠ hable); sin tilde, vale cualquiera. */
function vesIgual(forma, q) {
  if (!forma || !q) return false;
  const a = String(forma).toLowerCase().trim(), b = String(q).toLowerCase().trim();
  return /[áéíóú]/.test(b) ? a === b : vesNorm(a) === vesNorm(b);
}
function vesIndice() {
  if (VES_INDICE || typeof VERBOS_ES === "undefined") return VES_INDICE;
  const idx = new Map();
  const add = (f, id, et) => { if (!f) return; const k = vesNorm(f); if (!idx.has(k)) idx.set(k, []); idx.get(k).push([id, f, et]); };
  Object.keys(VERBOS_ES).forEach(id => {
    const e = VERBOS_ES[id];
    if (e.locucion) return;
    if (!e.base) {
      ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"].forEach(t => (e[t] || []).forEach((f, p) => add(f, id, VES_ETIQ[t] + " · " + VES_PERS[p])));
      (e.subjImp || []).forEach((f, p) => f && add(f.replace(/ra(s|mos|is|n)?$/, "se$1"), id, VES_ETIQ.subjSe + " · " + VES_PERS[p]));
      add(e.impTu, id, "imperativo · tú");
      if (e.impTu) add(e.es.replace(/se$/, "").replace(/r$/, "d"), id, "imperativo · vosotros");
      add(e.ger, id, "gerundio"); add(e.part, id, "participio"); add(e.part2, id, "participio");
    }
    if (e.base || e.pronominal) {
      const T = vesFormas(id);
      if (!T) return;
      if (T.impAf) VES_IMP.forEach(([k, es]) => T.impAf[k] && add(T.impAf[k].verbo, id, "imperativo · " + es));
      if (T.ger) add(T.ger.verbo, id, "gerundio");
    }
  });
  VES_INDICE = idx;
  return idx;
}
/* q: lo que escribió el alumno. Devuelve [{ id, forma, etiquetas }], solo coincidencias exactas
   (sin tildes) que no son el infinitivo. «me levanto», «no te levantes» → la entrada con «se». */
function vesBuscarForma(q) {
  const idx = vesIndice();
  if (!idx) return [];
  let pal = vesNorm(q).trim().split(/\s+/).filter(Boolean);
  if (pal[0] === "no") pal = pal.slice(1);
  let clit = false, pron = "";
  while (pal.length > 1 && ["me", "te", "se", "nos", "os"].includes(pal[0])) { pron = pal[0]; pal = pal.slice(1); clit = true; }
  /* me → yo, te → tú, nos → nosotros, os → vosotros, se → 3.ª persona */
  const personas = { me: [0], te: [1], nos: [3], os: [4], se: [2, 5] }[pron];
  if (!pal.length) return [];
  const orig = String(q).toLowerCase().trim().split(/\s+/).slice(-pal.length);
  const cand = [[pal.join(" "), orig.join(" ")]];
  if (pal.length > 1) cand.push([pal[pal.length - 1], orig[orig.length - 1]]);   /* he hablado → hablado */
  const out = new Map();
  cand.forEach(([k, escrito]) => (idx.get(k) || []).filter(([, f]) => vesIgual(f, escrito)).forEach(([id, f, et]) => {
    /* con me / te / se…: primero el verbo con «se» (me levanto → levantarse) y también
       el verbo sin «se», porque el pronombre puede ser complemento (te quiero → querer) */
    const e = VERBOS_ES[id];
    const reflexivo = !personas || personas.some(p => et.endsWith(" · " + VES_PERS[p]));   /* me + yo, te + tú… */
    const destinos = [];
    if (clit && reflexivo) {
      const conSe = e && !e.base && !e.pronominal ? vesPorEs(e.es + "se") : (e && e.pronominal ? id : null);
      if (conSe) destinos.push(conSe);
    }
    if (!e.pronominal) destinos.push(id);
    const forma = pron ? pron + " " + f : f;
    destinos.forEach(destino => {
      const r = out.get(destino);
      if (!r) out.set(destino, { id: destino, forma, etiquetas: [et] });
      else if (r.etiquetas.indexOf(et) < 0) r.etiquetas.push(et);
    });
  }));
  return [...out.values()].filter(r => vesNorm(r.forma) !== vesNorm((VERBOS_ES[r.id] || {}).es));
}
window.vesBuscarForma = vesBuscarForma;
window.vesFormas = vesFormas;
window.vesAcentuar = vesAcentuar;

/* ── Pantallas ─────────────────────────────────────────────── */
const VES_TX = {
  titulo: "Глаголы", glaroles: n => n.toLocaleString("ru-RU") + " " + vesPlural(n, "глагол", "глагола", "глаголов"),
  intro: "Как спрягается каждый глагол словаря: все времена, неправильные формы и возвратные глаголы с «se».",
  items: [["Все времена", "Настоящее, прошедшие, будущее, сослагательное и повелительное — со звуком."],
          ["Неправильные формы", "То, что меняется, выделено цветом: pienso, tengo, hice."],
          ["Два прошедших", "Indefinido и imperfecto рядом, как совершенный и несовершенный вид."]],
  buscar: "Найти глагол…", buscarAria: "Поиск глагола", limpiar: "Очистить поиск",
  pista: "Ищи по-испански или по-русски. Можно написать и форму: hablé приведёт к hablar, me levanto — к levantarse.",
  prueba: "Попробуй:", sinRes: "Ничего не найдено", noEncontrado: "Глагол не найден",
  sinId: id => id ? "В словаре нет глагола с номером «" + id + "»." : "",
  glagol: "Глагол", irr: "неправильный", reg: "правильный",
  rige: "Управление:", pareja: "Пара:", soloSe: "Только с «se»", sinSe: "без «se»", conSe: "с «se»",
  significados: "Значения", conjugacion: "Спряжение", nota: "Примечание", comoEste: "Спрягается так же",
  pron: "▶ Произношение", dic: "Словарь ›", cuaderno: "＋ Тетрадь",
  buscada: (f, inf, et) => ["«", f, "» — форма глагола ", inf, ": " + et.join(" / ") + ". Она выделена в таблице."],
  sinImp: "У этого глагола нет повелительного наклонения.",
  marcas: "Что меняется", leyenda: "Цветом выделено то, что отличается от правильного спряжения."
};
/* Etiquetas de las marcas de irregularidad (ruso, borrador) */
const VES_MARCA = {
  "e → ie": "e → ie в корне", "o → ue": "o → ue в корне", "u → ue": "u → ue в корне", "e → i": "e → i в корне", "o → u": "o → u в корне",
  "i → ie": "i → ie в корне", "o → hue": "o → hue в корне", "-go": "-go в форме yo", "-zco": "-zco в форме yo", "y": "y в корне",
  "tilde": "ударение на корне: í, ú", "pretérito fuerte": "особый претерит", "futuro": "особое будущее",
  "imperativo": "особый императив", "participio": "особое причастие", "presente": "особое настоящее", "indefinido": "особый претерит",
  "imperfecto": "особый имперфект", "subjuntivo": "особое сослагательное", "gerundio": "особый герундий"
};
const VES_ORTO = /^(c → qu|g → gu|z → c|gu → gü|c → z|g → j|gu → g|i → y)$/;
function vesPlural(n, uno, pocos, muchos) {
  const d = n % 10, c = n % 100;
  return d === 1 && c !== 11 ? uno : d >= 2 && d <= 4 && (c < 12 || c > 14) ? pocos : muchos;
}

/* Grupos de tiempos (chips). Cada tabla: [clave en vesFormas, nombre en español, explicación en ruso] */
const VES_GRUPOS = [
  ["pres", "Настоящее", [["pres", "Presente", "настоящее время"]]],
  ["pas", "Прошедшие", [["dos", "Indefinido e imperfecto", ""], ["perf", "Pretérito perfecto", "прошлое, связанное с настоящим: сегодня, в этом году, когда-нибудь"], ["plus", "Pluscuamperfecto", "давнопрошедшее: что случилось раньше другого действия в прошлом"]]],
  ["fut", "Будущее и условное", [["irA", "Ir a + infinitivo", "ближайшие планы: «я собираюсь…»"], ["fut", "Futuro", "будущее время"], ["cond", "Condicional", "условное: «я бы…»"], ["futPerf", "Futuro perfecto", "будущее, которое закончится до другого момента"], ["condPerf", "Condicional perfecto", "«я бы сделал (но не сделал)»"]]],
  ["subj", "Сослагательное", [["subj", "Presente de subjuntivo", "желание, сомнение, оценка: «quiero que…»"], ["subjImp", "Imperfecto de subjuntivo", "то же в прошлом и в условных фразах: «si tuviera…»"], ["subjPerf", "Pretérito perfecto de subjuntivo", "haya + причастие"], ["subjPlus", "Pluscuamperfecto de subjuntivo", "hubiera + причастие"]]],
  ["imp", "Повелительное", [["imp", "Imperativo", "просьба, приказ, совет"]]],
  ["formas", "Неличные формы", [["formas", "Formas no personales", ""]]]
];
const VES_GRUPO_DE = { pres: "pres", indef: "pas", imperf: "pas", perf: "pas", plus: "pas", irA: "fut", fut: "fut", cond: "fut", futPerf: "fut", condPerf: "fut",
  subj: "subj", subjImp: "subj", subjSe: "subj", subjPerf: "subj", subjPlus: "subj", impAf: "imp", impNeg: "imp", inf: "formas", ger: "formas", part: "formas", part2: "formas" };
function vesGrupoDe(t) { return VES_GRUPO_DE[t] || "pres"; }

/* Celda de una forma: el resaltado en dorado y el audio al tocarla */
function VesForma({ celda, clave }) {
  const h = React.createElement;
  if (!celda) return h("span", { className: "f-none" }, "—");
  const [a, m, b] = vesMarcar(celda.verbo, celda.regular);
  const txt = vesTexto(celda);
  const hit = clave && (vesIgual(txt, clave) || vesIgual(celda.verbo, clave));
  return h("div", { className: "f-cell" + (hit ? " f-hit" : ""), onClick: () => azHablarEs(txt) },
    h("span", { className: "f-ru" },
      celda.pre && h("span", { className: "f-pre" }, celda.pre + " "),
      a, m && h("span", { className: "f-irr" }, m), b,
      celda.post && " " + celda.post),
    h("span", { className: "f-play" }, "▶"));
}
function VesTabla({ filas, columnas, clave }) {
  const h = React.createElement;
  const vis = filas.filter(f => columnas.some(col => col.celdas && col.celdas(f)));
  if (!vis.length) return null;
  /* Dos columnas (indefinido e imperfecto, imperativo): en el teléfono la persona va en su
     propio renglón y las dos formas debajo, lado a lado, así no se cortan palabras largas
     (desaparecisteis, hablábamos). Desde 640px, la tabla de siempre. */
  if (columnas.length > 1 && window.innerWidth < 640) {
    return h("table", { className: "ctable ves-apilada" },
      h("colgroup", null, columnas.map((c, i) => h("col", { key: i, style: { width: (100 / columnas.length) + "%" } }))),
      h("thead", null, h("tr", null, columnas.map((col, i) => h("th", { key: i }, h("span", { className: "th-ru" }, col.titulo), col.sub && h("span", { className: "th-sub" }, col.sub))))),
      h("tbody", null, vis.map((f, r) => [
        h("tr", { key: r + "p", className: "ves-pers" }, h("td", { colSpan: columnas.length },
          h("span", { className: "p-ru" }, f.es), h("span", { className: "p-es" }, " · " + f.ru))),
        h("tr", { key: r + "f", className: "ves-fs" }, columnas.map((col, i) => h("td", { key: i }, h(VesForma, { celda: col.celdas(f), clave }))))
      ])));
  }
  return h("table", { className: "ctable" },
    h("colgroup", null, h("col", { style: { width: columnas.length > 1 ? "26%" : "34%" } }), columnas.map((c, i) => h("col", { key: i }))),
    columnas.some(c => c.titulo) && h("thead", null, h("tr", null, h("th", null, ""),
      columnas.map((col, i) => h("th", { key: i }, h("span", { className: "th-ru" }, col.titulo), col.sub && h("span", { className: "th-sub" }, col.sub))))),
    h("tbody", null, vis.map((f, r) => h("tr", { key: r },
      h("td", null, h("div", { className: "p-ru" }, f.es), h("div", { className: "p-es" }, f.ru)),
      columnas.map((col, i) => h("td", { key: i }, h(VesForma, { celda: col.celdas(f), clave })))))));
}

function VesFicha({ id, c }) {
  const h = React.createElement;
  const e = vesEntrada(id), lex = vesLex(id);
  const qs = new URLSearchParams(location.search);
  const fBuscada = qs.get("f") || "";
  const clave = fBuscada || "";
  const T = e ? vesFormas(id) : null;
  /* tiempo inicial: el chip de la forma buscada, o el de la URL (?t=) */
  const encontrada = clave && T ? (() => {
    for (const k of Object.keys(T)) {
      const v = T[k];
      const es = x => x && (vesIgual(vesTexto(x), clave) || vesIgual(x.verbo, clave));
      if (Array.isArray(v)) { if (v.some(es)) return k; }
      else if (v && v.verbo !== undefined) { if (es(v)) return k; }
      else if (v && typeof v === "object") { if (Object.values(v).some(es)) return k; }
    }
    return null;
  })() : null;
  const [grupo, setGrupoSt] = useState(qs.get("t") || (encontrada ? vesGrupoDe(encontrada) : "pres"));
  const setGrupo = g => { setGrupoSt(g); try { const u = new URL(location.href); u.searchParams.set("t", g); history.replaceState(history.state, "", u.pathname + u.search); } catch (er) {} };

  if (!e || !lex || !T) return h("div", { style: { textAlign: "center", padding: "10vh 0" } },
    h("h1", { style: { fontSize: 18, marginBottom: 8, color: c.text } }, VES_TX.noEncontrado),
    h("p", { style: { fontSize: 13.5, color: c.textMuted } }, VES_TX.sinId(id)));

  document.title = "Abecé — Глаголы · " + e.es;
  window.azFuenteActual = () => "Глаголы · " + e.es;

  const s = vesSimple(id);
  const irr = (s.irregular || []).filter(m => !VES_ORTO.test(m));
  const orto = (s.irregular || []).filter(m => VES_ORTO.test(m));
  const pron = vesPronominal(id);
  const partner = (lex.pronominalPartner || []).filter(p => !/^SIN_PAREJA/.test(p)).map(p => vesPorEs(p)).filter(Boolean);
  const soloSe = (lex.pronominalPartner || []).some(p => /SOLO_PRONOMINAL/.test(p));
  const ir = (href) => (ev) => azNavigate(ev, href);
  const impersonal = !!(e.locucion && e.locucion.impersonal);
  const filas6 = VES_PERS.map((es, i) => impersonal ? { i, es: "—", ru: "безличная форма" } : { i, es, ru: VES_PERS_RU[i] });
  const col = (k) => ({ celdas: f => T[k] ? T[k][f.i] : null });
  const sec = (txt, sub) => h(React.Fragment, null, h("div", { className: "section-lbl", style: { marginTop: 18 } }, txt), sub && h("div", { className: "tnote", style: { marginTop: -4, marginBottom: 8 } }, sub));

  /* verbos del mismo modelo, por frecuencia */
  const ortoKey = orto[0] || "";
  const comoEste = (() => {
    if (!s.modelo) return [];
    const regular = ["hablar", "comer", "vivir"].includes(s.modelo);
    if (regular && !ortoKey) return [];
    const out = [];
    Object.keys(VERBOS_ES).forEach(k => {
      const x = VERBOS_ES[k];
      if (k === id || x.base || x.locucion || x === s) return;
      if (regular ? (x.modelo === s.modelo && (x.irregular || []).includes(ortoKey)) : x.modelo === s.modelo) {
        const l = vesLex(k); out.push([k, x.es, ((l && l.sourceRefs && l.sourceRefs.subtitulos) || {}).puesto || 1e6]);
      }
    });
    return out.sort((a, b) => a[2] - b[2]).slice(0, 10);
  })();

  const tr = (lex.senses || []).map(x => x.ru).join("; ");
  const buscadaEt = clave && typeof vesBuscarForma === "function" ? vesBuscarForma(fBuscada).filter(r => r.id === id).flatMap(r => r.etiquetas) : [];

  const tablas = {
    pres: () => h(VesTabla, { filas: filas6, columnas: [col("pres")], clave }),
    dos: () => h(React.Fragment, null,
      h(VesTabla, { filas: filas6, clave, columnas: [
        { titulo: "indefinido", sub: "≈ сделал", celdas: f => T.indef[f.i] },
        { titulo: "imperfecto", sub: "≈ делал", celdas: f => T.imperf[f.i] }] }),
      h("div", { className: "tnote" }, "Indefinido — законченное действие, как совершенный вид: hice ≈ сделал. Imperfecto — процесс, привычка или фон, как несовершенный вид: hacía ≈ делал.")),
    imp: () => T.impAf ? h(VesTabla, { clave, filas: VES_IMP.map(([k, es, ru]) => ({ k, es, ru })), columnas: [
        { titulo: "да", sub: "утвердительное", celdas: f => T.impAf[f.k] },
        { titulo: "нет", sub: "отрицательное", celdas: f => T.impNeg[f.k] }] })
      : h("div", { className: "tnote" }, VES_TX.sinImp),
    formas: () => h(VesTabla, { clave, filas: [
        { k: "inf", es: "infinitivo", ru: "инфинитив" }, { k: "ger", es: "gerundio", ru: "деепричастие: estar + gerundio = «сейчас делаю»" },
        { k: "part", es: "participio", ru: "причастие: haber + participio" }, { k: "part2", es: "participio", ru: "второе, тоже правильное" }],
      columnas: [{ celdas: f => T[f.k] }] })
  };
  const tablaDe = k => tablas[k] ? tablas[k]() : h(VesTabla, { filas: filas6, columnas: [col(k)], clave });
  const g = VES_GRUPOS.find(x => x[0] === grupo) || VES_GRUPOS[0];

  return h("div", { style: { animation: "fadeIn 0.3s ease" } },
    h("div", { className: "ficha" },
      h("div", { className: "hero" },
        h("div", { className: "hero-top" },
          h("div", { style: { minWidth: 0 } },
            h("div", { className: "ru" }, e.es),
            lex.translit && h("div", { className: "translit az-tl" }, lex.translit),
            lex.ipa && h("div", { className: "ipa" }, "IPA: /" + lex.ipa + "/")),
          h("button", { className: "play", onClick: () => azHablarEs(e.es), "aria-label": "Произношение" }, "▶")),
        h("span", { className: "pos-badge" }, VES_TX.glagol + " · " + (s.grupo || "") + " · " + (irr.length ? VES_TX.irr : VES_TX.reg)),
        (irr.length > 0 || orto.length > 0) && h("div", { className: "ves-tags" },
          irr.map(m => h("span", { key: m, className: "tag" }, VES_MARCA[m] || m)),
          orto.map(m => h("span", { key: m, className: "tag ves-orto" }, "орфография: " + m))),
        (lex.regimen || []).length > 0 && h("div", { className: "gov" }, VES_TX.rige,
          /* como «Rige:» de Azbuka: cada chip con «?» abre la guía (capítulo de preposiciones, 27/10/2026) */
          lex.regimen.map((r, i) => h("a", { key: i, className: "gov-chip", href: "gramatica.html?guia=preposiciones", onClick: e => azNavigate(e, "gramatica.html?guia=preposiciones"), style: { display: "inline-block", textDecoration: "none" } }, r, h("span", null, "?")))),
        (partner.length > 0 || soloSe) && h("div", { className: "gov" }, VES_TX.pareja,
          partner.map(p => h("a", { key: p, className: "gov-chip", href: "verbos.html?id=" + p, onClick: ir("verbos.html?id=" + p), style: { textDecoration: "none" } },
            VERBOS_ES[p].es, h("span", null, "›"))),
          soloSe && h("span", { className: "gov-chip", style: { cursor: "default" } }, VES_TX.soloSe))),
      h("div", { className: "fbody" },
        h("div", { className: "section-lbl" }, VES_TX.significados),
        (lex.senses || []).map((x, i) => h("div", { key: i, className: "sense" },
          h("span", { className: "sense-num" }, i + 1), h("span", { className: "sense-es" }, x.ru),
          x.definitionRu && h("div", { className: "sense-def" }, x.definitionRu))),
        h("div", { className: "section-lbl", style: { marginTop: 22 } }, VES_TX.conjugacion),
        buscadaEt.length > 0 && h("div", { className: "busco" }, ...VES_TX.buscada(fBuscada, e.es, buscadaEt).map((t, i) => i === 1 || i === 3 ? h("b", { key: i }, t) : t)),
        h("div", { className: "pair-row" }, VES_GRUPOS.map(([k, lbl]) => {
          const on = k === grupo;
          return h("button", { key: k, className: "pair-btn", onClick: () => setGrupo(k),
            style: on ? { background: c.gold + "22", border: `1px solid ${c.gold}`, color: c.gold } : { background: c.bg2, border: `1px solid ${c.border}`, color: c.textMuted } }, lbl);
        })),
        irr.length > 0 && h("div", { className: "tnote", style: { marginBottom: 4 } }, h("span", { className: "f-irr" }, "Цветом"), " выделено то, что отличается от правильного спряжения."),
        g[2].map(([k, es, ru]) => h("div", { key: k },
          sec(es, ru),
          tablaDe(k),
          k === "subjImp" && T.subjSe && h("div", { className: "tnote" }, "Другая форма, на -se (то же значение): " + T.subjSe.filter(Boolean).map(vesTexto).join(", ") + ".")
        )),
        e.nota && h(React.Fragment, null, h("div", { className: "section-lbl", style: { marginTop: 18 } }, VES_TX.nota), h("div", { className: "nota" }, e.nota)),
        s !== e && s.nota && !e.locucion && h("div", { className: "nota", style: { marginTop: 8 } }, h("b", { style: { color: c.text } }, s.es + ": "), s.nota),
        comoEste.length > 0 && h(React.Fragment, null,
          h("div", { className: "section-lbl", style: { marginTop: 18 } }, VES_TX.comoEste),
          h("div", { className: "try-row", style: { marginTop: 0 } }, comoEste.map(([k, es]) =>
            h("a", { key: k, className: "try-chip", href: "verbos.html?id=" + k, onClick: ir("verbos.html?id=" + k) }, es)))),
        h("div", { className: "buttons" },
          h("button", { className: "btn", onClick: () => azHablarEs(e.es) }, VES_TX.pron),
          h("a", { className: "btn", href: "ficha.html?id=" + id, onClick: ir("ficha.html?id=" + id) }, VES_TX.dic),
          typeof azGuardarEnCuaderno === "function" && h("button", { className: "btn",
            onClick: () => azGuardarEnCuaderno(e.es + " — " + tr, { titulo: "Глаголы · " + e.es, href: "verbos.html?id=" + id }) }, VES_TX.cuaderno)))));
}

/* Página completa de Verbos en Abecé: portada (sin ?id) o ficha (?id=ESP-…) */
function AzVerbosEs({ Estilos }) {
  const h = React.createElement;
  const [darkMode, setDarkMode] = useState(true);
  const [q, setQ] = useState("");
  const qRef = useRef(null), searchWrapRef = useRef(null);
  const [headerH, setHeaderH] = useState(0), [searchH, setSearchH] = useState(0);
  const [, setListo] = useState(0);
  useEffect(() => { const f = () => setListo(n => n + 1); window.addEventListener("az-formas", f); return () => window.removeEventListener("az-formas", f); }, []);
  useEffect(() => { (async () => { setDarkMode((await azGet("az_theme", "dark")) !== "light"); await azLoadProgress(); azModuleTouch("verbos"); })(); }, []);
  useLayoutEffect(() => {
    function medir() {
      const hd = document.querySelector("header");
      if (hd) setHeaderH(hd.getBoundingClientRect().height);
      if (searchWrapRef.current) setSearchH(searchWrapRef.current.getBoundingClientRect().height);
    }
    medir(); window.addEventListener("resize", medir);
    return () => window.removeEventListener("resize", medir);
  }, [darkMode]);

  const id = new URLSearchParams(location.search).get("id");
  const c = azColors(darkMode);
  if (!id) { document.title = "Abecé — Глаголы"; window.azFuenteActual = () => "Глаголы"; }

  /* resultados: formas (hablé → hablar) y verbos del léxico */
  const results = (() => {
    if (!q.trim()) return [];
    const formas = vesBuscarForma(q).map(r => ({ id: r.id, ru: r.forma, es: VERBOS_ES[r.id].es + " · " + r.etiquetas.join(" / "),
      href: "verbos.html?id=" + r.id + "&f=" + encodeURIComponent(r.forma), forma: true }));
    const ya = new Set(formas.map(r => r.id));
    const pal = (typeof azBuscarEs === "function" ? azBuscarEs(q, "verbo") : []).filter(r => !r.forma && !ya.has(r.id) && VERBOS_ES[r.id])
      .map(r => Object.assign({}, r, { href: "verbos.html?id=" + r.id }));
    return formas.concat(pal).slice(0, 40);
  })();
  const filas = results.map((r, i) => h("a", { key: r.href, href: r.href, className: "res-row", onClick: ev => azNavigate(ev, r.href),
      style: { borderTop: i === 0 ? "none" : `1px solid ${c.border}` } },
    h("span", null, h("span", { className: "res-ru" }, r.ru)),
    h("span", { className: "res-es" }, r.es)));
  const nada = h("div", { style: { padding: "12px 14px", fontSize: 13, color: c.textMuted } }, VES_TX.sinRes);
  const campo = [
    h("input", { key: "i", ref: qRef, value: q, onInput: ev => setQ(ev.target.value), placeholder: VES_TX.buscar, "aria-label": VES_TX.buscarAria,
      autocapitalize: "off", autocorrect: "off", spellcheck: false,
      style: { width: "100%", boxSizing: "border-box", background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 9, padding: "10px 34px 10px 14px", color: c.text, fontSize: 14 } }),
    q && h("button", { key: "x", onClick: () => { setQ(""); if (qRef.current) qRef.current.focus(); }, "aria-label": VES_TX.limpiar,
      style: { position: "absolute", right: 8, top: "50%", transform: "translateY(-50%)", width: 24, height: 24, borderRadius: "50%", background: c.border, border: "none", color: c.text, fontSize: 13, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 } }, "✕")
  ];
  const barra = id && h("div", { ref: searchWrapRef, style: { position: "fixed", top: headerH, left: 0, right: 0, zIndex: 90, background: c.bg, backdropFilter: "blur(12px)", borderBottom: `1px solid ${c.border}`, padding: "12px 3vw" } },
    h("div", { style: { maxWidth: 960, margin: "0 auto", position: "relative" } }, ...campo,
      q.trim() && h("div", { style: { position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 50, maxHeight: "50vh", overflowY: "auto", background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, boxShadow: "0 16px 40px rgba(0,0,0,.4)" } },
        results.length ? filas : nada)));

  const modulo = (typeof AZ_MODULES !== "undefined" ? AZ_MODULES : []).find(m => m.id === "verbos") || {};
  const total = typeof LEXICON_ES !== "undefined" ? LEXICON_ES.filter(x => x.posNormalized === "verbo").length : Object.keys(VERBOS_ES).length;
  const EJ = ["ser", "tener", "levantarse"].map(es => [vesPorEs(es), es]).filter(x => x[0]);
  const buscando = !!q.trim();
  const portada = h("div", null,
    !buscando && h("div", { className: "intro" },
      h("div", { className: "intro-top" },
        h("div", { className: "intro-icon", style: { background: azModuloColor(modulo).bg, color: azModuloColor(modulo).fg } }, modulo.glyph || ""),
        h("div", null, h("div", { className: "intro-title" }, modulo.title || VES_TX.titulo), h("div", { className: "intro-kicker" }, VES_TX.glaroles(total)))),
      h("div", { className: "intro-desc" }, VES_TX.intro),
      VES_TX.items.map((it, i) => h("div", { key: i, className: "intro-item" }, h("span", { className: "intro-dot" }),
        h("div", null, h("div", { className: "intro-it" }, it[0]), h("div", { className: "intro-id" }, it[1]))))),
    h("div", { style: { position: "relative" } }, ...campo),
    !buscando && h("div", { className: "search-hint" }, VES_TX.pista),
    !buscando && h("div", { className: "try-row" }, h("span", { className: "try-lbl" }, VES_TX.prueba),
      EJ.map(([k, es]) => h("a", { key: k, className: "try-chip", href: "verbos.html?id=" + k, onClick: ev => azNavigate(ev, "verbos.html?id=" + k) }, es))),
    buscando && h("div", { style: { marginTop: 10, background: c.card, border: `1px solid ${c.border}`, borderRadius: 10, overflow: "hidden", animation: "fadeIn 0.3s ease" } },
      results.length ? filas : nada));

  return h(AzShell, { darkMode, setDarkMode, moduleId: "verbos", tabs: [] },
    h(Estilos, { c }),
    h("style", null, `
      .f-irr{color:${c.gold};font-weight:800;}
      .f-pre{color:${c.textSub};font-weight:500;}
      .ves-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px;}
      .tag{font-size:11.5px;font-weight:600;color:${c.textSub};background:${c.bg2};border:1px solid ${c.border};border-radius:8px;padding:4px 9px;}
      .ves-orto{color:${c.textMuted};}
      .buttons{display:flex;gap:8px;flex-wrap:wrap;margin:18px 0 4px;}
      .btn{flex:1;display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:11px 16px;border-radius:10px;border:1px solid ${c.border};background:${c.bg3};color:${c.text};font-size:13.5px;font-weight:600;text-decoration:none;cursor:pointer;font-family:inherit;white-space:nowrap;}
      .pair-row{margin-bottom:8px;}
      .ves-apilada .ves-pers td{padding:8px 8px 0;}
      .ves-apilada .ves-pers .p-ru,.ves-apilada .ves-pers .p-es{display:inline;}
      .ves-apilada .ves-fs td{border-top:none;padding-top:2px;}
      .ves-apilada tbody tr.ves-pers:first-child td{border-top:none;}
    `),
    barra,
    h("div", { style: { paddingTop: id ? (searchH ? searchH + 14 + "px" : "18px") : "16px" } },
      id ? h(VesFicha, { key: id, id, c }) : portada));
}
window.AzVerbosEs = AzVerbosEs;
