// Arma data/data-lucia.js a partir de herramientas/lucia/fuente-lucia.js (21/11/2026).
// Es el espejo de herramientas/masha/armar.js para Abecé. No es parte de la app: se corre a mano.
//
//   node herramientas/lucia/armar.js            → arma y verifica
//   node herramientas/lucia/armar.js --solo-verificar
//
// Qué hace:
//   1. Lee la fuente (líneas «español | ruso») y la pasa al formato de js/charla.js: { es, tr, ru }.
//   2. Pone la pronunciación en cirílico de cada palabra: la del léxico (translit) si la palabra
//      está tal cual; si no, la del generador (herramientas/abece/generador-fonetica-es.py).
//   3. Agrega los países de la Unidad 2 (tabla «Страны») con su nacionalidad.
//   4. Verifica el vocabulario de cada tema según su unidad (`desde`):
//        · U2 a U4 (estricto): toda palabra de Lucía y de las ideas tiene que ser una palabra
//          (o una forma) enseñada hasta esa unidad, o estar en una frase de esa unidad;
//        · desde la U5 (como Lecturas): toda palabra tiene que estar en el léxico.
//      Los nombres propios (mayúscula en mitad de la frase, o `propio`) y NOMBRES_LIBRES no se
//      controlan. Controla también la gramática de la unidad (tiempos verbales) y que las ramas
//      lleven a pasos que existen.
//   Termina con ✓ o con la lista de problemas (y no escribe el archivo si hay errores).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");
const APP = path.resolve(__dirname, "..", "..");
const SOLO_VER = process.argv.includes("--solo-verificar");
const ESTRICTO_HASTA = 4;
const NOMBRES_LIBRES = new Set(["lucía", "ana", "pablo", "marta", "javier", "elena", "jorge", "carmen", "iván", "olga", "uf", "mmm", "eh", "ay", "jaja", "vaya", "hm", "oh", "ah", "uy", "ja", "gràcia", "raúl"]);

/* ── Datos de la app ── */
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data/data-lexicon-es.js", "data/data-formas-es.js", "data/data-verbos-es.js", "data/data-dialogos-es.js", "data/data-unidad-es-2.js"])
  vm.runInContext(fs.readFileSync(path.join(APP, f), "utf8").replace(/^(const|let) /mg, "var "), ctx, { filename: f });
const LEX = ctx.LEXICON_ES, VERBOS = ctx.VERBOS_ES, FRASES = ctx.FRASES_ES || [];
const porId = {}; LEX.forEach(e => { porId[e.id] = e; });
const sinTil = s => String(s).toLowerCase().replace(/ñ/g, "\u0001").normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\u0001/g, "ñ");

/* forma (minúscula, con tilde) → ids */
const formas = new Map();
const sumar = (f, id) => { if (!f || typeof f !== "string") return; for (const p of f.toLowerCase().split(/[\s,/()¡!¿?.]+/)) { if (!p) continue; if (!formas.has(p)) formas.set(p, new Set()); formas.get(p).add(id); } };
const strs = (o, fn) => { if (typeof o === "string") fn(o); else if (Array.isArray(o)) o.forEach(x => strs(x, fn)); else if (o && typeof o === "object") Object.values(o).forEach(v => strs(v, fn)); };
LEX.forEach(e => {
  sumar(e.es, e.id); if (e.femenino && e.femenino.es) sumar(e.femenino.es, e.id);
  try { ctx.formasEsLista(e.id).forEach(x => sumar(x.f, e.id)); } catch (er) {}
  const v = VERBOS[e.id]; if (v) { ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"].forEach(t => (v[t] || []).forEach(f => sumar(f, e.id))); ["ger", "part", "impTu"].forEach(t => sumar(v[t], e.id)); if (v.base && VERBOS[v.base]) strs(VERBOS[v.base], f => sumar(f, e.id)); }
});
/* Tiempos de cada forma: forma → Set de tiempos, y si también es otra palabra */
const tiempos = new Map(), noVerbo = new Set();
for (const id in VERBOS) {
  const v = VERBOS[id]; if (!v || v.base) continue;
  const add = (f, t) => { if (!f) return; const a = f.toLowerCase(); if (!tiempos.has(a)) tiempos.set(a, new Set()); tiempos.get(a).add(t); };
  ["pres", "indef", "imperf", "fut", "cond", "subj", "subjImp"].forEach(t => (v[t] || []).forEach(f => add(f, t)));
  add(v.impTu, "impTu");
}
LEX.forEach(e => { if (e.posNormalized !== "verbo") { sumar2(e.es); try { ctx.formasEsLista(e.id).forEach(x => sumar2(x.f)); } catch (er) {} } });
function sumar2(f) { if (f) String(f).toLowerCase().split(/[\s,/()]+/).forEach(p => p && noVerbo.add(p)); }
["he", "has", "ha", "hemos", "habéis", "han"].forEach(f => { tiempos.set(f, new Set(["perfecto"])); });
const DESDE = { pres: 2, impTu: 6, indef: 8, perfecto: 8, imperf: 9, fut: 10, cond: 10, subj: 11, subjImp: 13 };
const FORMULAS = { "perdona": 1, "perdone": 1, "oiga": 1, "mira": 4, "oye": 4, "quería": 5, "querría": 10, "gustaría": 10, "encantaría": 10, "podrías": 10, "vale": 1 };
function gramaticaOk(w, d) {
  const a = w.toLowerCase(), x = tiempos.get(a);
  if (!x || noVerbo.has(a)) return null;
  if (FORMULAS[a] && d >= FORMULAS[a]) return null;
  if ([...x].some(t => d >= DESDE[t])) return null;
  const t = [...x][0];
  return t + " (se enseña en la U" + DESDE[t] + ")";
}
/* Lo visto hasta cada unidad */
const vistoCache = {};
function vistas(d) {
  if (vistoCache[d]) return vistoCache[d];
  const ok = new Set();
  const ad = s => String(s || "").toLowerCase().split(/[^a-záéíóúüñ]+/).forEach(p => p && ok.add(p));
  LEX.forEach(e => {
    if (!(e.propio || (e.introducedIn || []).concat(e.appearsIn || []).some(u => u <= d))) return;
    ad(e.es); if (e.femenino && e.femenino.es) ad(e.femenino.es);
    try { ctx.formasEsLista(e.id).forEach(x => ad(x.f)); } catch (er) {}
    const v = VERBOS[e.id]; if (v) { strs(v, ad); if (v.base && VERBOS[v.base]) strs(VERBOS[v.base], ad); }
  });
  FRASES.filter(f => f.unidad && f.unidad <= d).forEach(f => ad(f.es));
  return vistoCache[d] = ok;
}
const CLIT = ["melo", "mela", "selo", "sela", "telo", "tela", "me", "te", "se", "lo", "la", "le", "nos", "os", "les", "los", "las"];
function tiene(set, l) {
  if (set.has(l)) return true;
  return CLIT.some(c => l.endsWith(c) && l.length > c.length + 2 && (set.has(l.slice(0, -c.length)) || set.has(sinTil(l.slice(0, -c.length)))));
}
const enLex = l => tiene(formas, l);
const enVistas = (l, d) => tiene(vistas(d), l);

/* ── Fuente ── */
const F = require("./fuente-lucia.js");

/* ── Pronunciación en cirílico ── */
const RX_PAL = /[A-Za-zÁÉÍÓÚÜÑáéíóúüñàèìòùçÀÈÌÒÙÇ]+/g;
const palabras = new Set();
function juntar(o) {
  if (typeof o === "string") { if (o.includes("|")) (o.split("|")[0].match(RX_PAL) || []).forEach(w => palabras.add(w.toLowerCase())); }
  else if (Array.isArray(o)) o.forEach(juntar);
  else if (o && typeof o === "object") for (const k in o) if (k !== "claves" && k !== "k") juntar(o[k]);
}
juntar(F);
const lexTr = new Map(); LEX.forEach(e => { if (e.translit && !/\s/.test(e.es)) lexTr.set(e.es.toLowerCase(), e.translit); });
const pendientes = [...palabras].filter(w => !lexTr.has(w));
const gen = JSON.parse(cp.execFileSync("python3", ["-I", "-c",
  "import sys,json,importlib.util as u\n" +
  "s=u.spec_from_file_location('g',sys.argv[1]);g=u.module_from_spec(s);s.loader.exec_module(g)\n" +
  "ws=json.loads(sys.stdin.read());print(json.dumps({w:g.translit(w) for w in ws}))",
  path.join(APP, "herramientas", "abece", "generador-fonetica-es.py")], { input: JSON.stringify(pendientes) }).toString());
function trDe(es) {
  /* {nombre}, {pais}…: se guardan aparte para no pasarlas al cirílico */
  const ph = [];
  es = es.replace(/\{[^{}\/]*\}/g, m => { ph.push(m); return "\u0005" + (ph.length - 1) + "\u0006"; });
  return es.replace(RX_PAL, w => {
    const k = w.toLowerCase(); let t = lexTr.get(k) || gen[k] || k;
    if (w[0] !== w[0].toLowerCase()) t = t[0].toUpperCase() + t.slice(1);
    return t;
  }).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "").replace(/\s+/g, " ").trim()
    .replace(/\u0005(\d+)\u0006/g, (m, i) => ph[+i]);
}

/* ── Conversión ── */
const L = s => {
  if (s && typeof s === "object") return s;
  const [es, ru] = String(s).split("|").map(x => (x || "").trim());
  /* la pronunciación de las plantillas: {nombre} queda igual; {a/b} se arma con las dos palabras */
  const tr = trDe(es.replace(/\{([^{}/]+)\/([^{}]+)\}/g, "\u0002$1\u0003$2\u0004")).replace(/\u0002([^\u0003]*)\u0003([^\u0004]*)\u0004/g, "{$1/$2}");
  return { es, tr, ru: ru || "" };
};
const LL = a => (a == null ? [] : [].concat(a)).map(L);
const I = s => { const [es, ru] = String(s).split("|").map(x => (x || "").trim()); return { es, ru: ru || "" }; };
const V = o => {
  if (Array.isArray(o) || typeof o === "string") return [{ d: 1, l: LL(o) }];
  return Object.keys(o).map(Number).sort((a, b) => a - b).map(d => ({ d, l: LL(o[d]) }));
};
function rama(r) {
  const o = { etiqueta: r.et || "" };
  if (r.k) o.claves = [].concat(r.k);
  if (r.r !== undefined) o.resp = LL(r.r); else o.resp = [];
  if (r.ir !== undefined) o.ir = r.ir;
  ["dato", "genero", "captura", "tras", "fijaPais", "delega", "datoValor", "guarda"].forEach(k => { if (r[k] !== undefined) o[k] = r[k]; });
  if (r.porNombre) { o.porNombre = {}; for (const k in r.porNombre) o.porNombre[k] = LL(r.porNombre[k]); }
  if (r.porPais) { o.porPais = {}; for (const k in r.porPais) o.porPais[k] = { resp: LL(r.porPais[k].r), ir: r.porPais[k].ir !== undefined ? r.porPais[k].ir : r.ir }; }
  return o;
}
function nodo(id, n) {
  const o = { id, titulo: n.t || id, bot: LL(n.bot), ideas: (n.ideas || []).map(I), ramas: (n.ramas || []).map(rama) };
  if (n.com) o.ramas.push(Object.assign(rama(n.com), { comodin: true, etiqueta: n.com.et || "Другой ответ" }));
  if (n.aTi) o.aTi = LL(n.aTi);
  ["aTiTema", "saltarSi", "sig", "abierto", "trasPregunta", "guarda", "cirilico"].forEach(k => { if (n[k] !== undefined) o[k] = n[k]; });
  if (n.alSaltar) o.alSaltar = LL(n.alSaltar);
  if (n.alRendirse) o.alRendirse = LL(n.alRendirse);
  if (n.ret) o.retomar = L(n.ret);
  if (n.botSi) { o.botSi = {}; for (const k in n.botSi) o.botSi[k] = LL(n.botSi[k]); }
  return o;
}
const pregunta = p => {
  const o = { id: p.id, tema: p.tema, desde: p.desde || 2, claves: p.k, idea: I(p.idea), v: V(p.r) };
  if (p.variantes) o.variantes = p.variantes.map(v => ({ claves: v.k, v: V(v.r) }));
  return o;
};
/* Naciones: la tabla «Страны» de la U2 ({ es: país, ru }, { es: "argentino / argentina", ru? }) */
const naciones = [];
(ctx.ES2_MODULOS || ctx.ES2 || []);
(function () {
  const src = fs.readFileSync(path.join(APP, "data/data-unidad-es-2.js"), "utf8");
  const rx = /\[\{ es: "([^"]+)", ru: "([^"]+)" \}, \{ es: "([^"]+)"(?:, ru: "[^"]*")? \}, \{ es: "[^"]+" \}\]/g;
  let m; while ((m = rx.exec(src))) {
    const [mm, f] = m[3].split(" / ").map(s => s.trim());
    naciones.push([m[1], mm, f || mm, m[2], "", ""]);
  }
})();
(F.nacionesRu || []).forEach(([pais, ruM, ruF]) => { const r = naciones.find(x => x[0] === pais); if (r) { r[4] = ruM; r[5] = ruF; } });
const datos = {
  personaje: F.personaje,
  presentacion: F.presentacion,
  naciones,
  apertura: { conNombre: V(F.apertura.conNombre), sinNombre: V(F.apertura.sinNombre), ideas: F.apertura.ideas.map(I) },
  comodines: Object.fromEntries(Object.entries(F.comodines).map(([k, v]) => [k, V(v)])),
  utiles: F.utiles.map(u => ({ id: u.id, etiqueta: u.et, claves: u.k, resp: V(u.r), accion: u.accion })),
  vida: F.vida.map(pregunta),
  temas: F.temas.map(t => ({
    id: t.id, desde: t.desde, titulo: t.es, tituloRu: t.ru, resumen: t.resumen, intro: t.intro, inicio: t.inicio,
    apertura: t.apertura !== false,
    preguntas: (t.preguntas || []).map(pregunta),
    nodos: Object.entries(t.nodos).map(([id, n]) => nodo(id, n)),
  })),
};

/* ── Verificación ── */
const prob = [];
const lineasDe = [];
function textos(o, d, donde) {
  if (!o) return;
  if (Array.isArray(o)) return o.forEach(x => textos(x, d, donde));
  if (typeof o === "object") {
    if (typeof o.es === "string") lineasDe.push([o.es, d, donde]);
    for (const k in o) if (k !== "es" && k !== "claves" && k !== "tras" && k !== "genero" && typeof o[k] === "object") textos(o[k], d, donde + "." + k);
  }
}
datos.temas.forEach(t => {
  textos(t.nodos, t.desde, t.id);
  textos(t.preguntas.map(p => [p.idea, p.v.filter(v => v.d <= t.desde)]), t.desde, t.id + ".preguntas");
  const ids = new Set(t.nodos.map(n => n.id));
  if (!ids.has(t.inicio)) prob.push(`${t.id}: el paso inicial «${t.inicio}» no existe`);
  t.nodos.forEach(n => {
    const ir = [n.sig, n.trasPregunta].concat(n.ramas.map(r => r.ir), n.ramas.flatMap(r => r.porPais ? Object.values(r.porPais).map(p => p.ir) : []), n.ramas.map(r => r.delega));
    ir.forEach(x => { if (x && x !== "FIN" && !ids.has(x)) prob.push(`${t.id}.${n.id}: lleva a «${x}», que no existe`); });
    if (!n.ramas.length && !n.abierto) prob.push(`${t.id}.${n.id}: no tiene ramas`);
  });
});
const glob = (arr, donde) => arr.forEach(v => textos(v.l, v.d, donde));
glob(datos.apertura.conNombre, "apertura"); glob(datos.apertura.sinNombre, "apertura"); textos(datos.apertura.ideas, 2, "apertura.ideas");
for (const k in datos.comodines) glob(datos.comodines[k], "comodines." + k);
datos.utiles.forEach(u => glob(u.resp, "utiles." + u.id));
datos.vida.forEach(p => { textos(p.idea, p.desde, "vida." + p.id + ".idea"); glob(p.v, "vida." + p.id); (p.variantes || []).forEach(x => glob(x.v, "vida." + p.id)); });

for (const [txt, d, donde] of lineasDe) {
  const limpio = txt.replace(/\{[^}]*\}/g, m => m.includes("/") ? m.slice(1, -1).split("/").join(" ") : " ").replace(/«[^»]*»/g, m => /[а-яё]/i.test(m) ? " " : m);
  let m; const rx = new RegExp(RX_PAL.source, "g");
  while ((m = rx.exec(limpio))) {
    const w = m[0], l = w.toLowerCase();
    const antes = limpio.slice(0, m.index).replace(/[\s«"(¿¡]+$/, "");
    const inicio = !antes || /[.!?—–:…]$/.test(antes) || /\p{Extended_Pictographic}$/u.test(antes);
    if (NOMBRES_LIBRES.has(l)) continue;
    const ids = formas.get(l);
    const esPropio = ids && [...ids].some(id => porId[id] && porId[id].propio);
    if (/^[A-ZÁÉÍÓÚÑ]/.test(w) && !inicio && !ids) continue;            // nombre propio que no está en el léxico
    if (!enLex(l)) { prob.push(`${donde} (U${d}): «${w}» no está en el léxico`); continue; }
    if (esPropio) continue;
    const g = gramaticaOk(w, d);
    if (g) prob.push(`${donde} (U${d}): «${w}»: ${g}`);
    if (d <= ESTRICTO_HASTA && !enVistas(l, d)) prob.push(`${donde} (U${d}): «${w}» todavía no se enseñó`);
  }
}
const nTemas = {}; datos.temas.forEach(t => { nTemas[t.desde] = (nTemas[t.desde] || 0) + 1; });
console.log("Temas por unidad:", JSON.stringify(nTemas), "· pasos:", datos.temas.reduce((a, t) => a + t.nodos.length, 0), "· líneas:", lineasDe.length);
if (prob.length) { console.log("✗ " + prob.length + " problemas:\n  " + [...new Set(prob)].join("\n  ")); process.exitCode = 1; }
else console.log("✓ Vocabulario, gramática y recorridos sin problemas");

if (!SOLO_VER && !prob.length) {
  const cab = fs.readFileSync(path.join(__dirname, "cabecera.txt"), "utf8");
  fs.writeFileSync(path.join(APP, "data", "data-lucia.js"), cab + "const LUCIA = " + JSON.stringify(datos, null, 1) + ";\n" +
    "function luciaTema(id) { return LUCIA.temas.find(t => t.id === id) || null; }\n");
  console.log("→ data/data-lucia.js escrito");
}
