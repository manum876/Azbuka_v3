// Arma data/data-masha.js a partir de herramientas/masha/fuente-masha.js (21/10/2026).
// No es parte de la app: se corre a mano después de cambiar la fuente.
//
//   node herramientas/masha/armar.js            → arma y verifica
//   node herramientas/masha/armar.js --solo-verificar
//
// Qué hace:
//   1. Lee la fuente (líneas «ruso | español», ramas, preguntas…) y la pasa al formato
//      que usa masha.html: { ru, tr, es } por línea.
//   2. Genera la transliteración de cada palabra rusa: la del léxico si la palabra está
//      tal cual (con su acento); si no, la del generador (generador-fonetica.py).
//   3. Agrega los países de la Unidad 2 con su genitivo (de data-casos.js), para «из …».
//   4. Verifica el vocabulario de cada tema según su unidad (`desde`):
//        · Unidades 2 a 4 (estricto): toda palabra de Masha y de las ideas tiene que ser
//          una palabra (o una forma de Casos / Verbos) con introducedIn ≤ desde;
//        · desde la 5 (como Lecturas): toda palabra tiene que estar en el léxico.
//      Los nombres propios (mayúscula en mitad de la frase, o `propio` en el léxico) y lo
//      que está en NOMBRES_LIBRES no se controlan. También controla que las ramas lleven a
//      pasos que existen y que ninguna palabra de dos o más vocales vaya sin acento.
//   Termina con ✓ o con la lista de problemas (y no escribe el archivo si hay errores).
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm"), cp = require("child_process");
const APP = path.resolve(__dirname, "..", "..");
const SOLO_VER = process.argv.includes("--solo-verificar");
const ESTRICTO_HASTA = 4;
const NOMBRES_LIBRES = new Set(["ма́ша", "мари́я", "ба́рсик", "ба́рсика", "ба́рсику", "ба́рсиком", "ба́рсике", "ди́ма", "лу́кас", "о́льга", "петро́вна", "хм"].map(s => s.replace(/́/g, "")));

/* ── Datos de la app ── */
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data/data-lexicon.js", "data/data-casos.js", "data/data-verbos.js", "data/data-unidad-2.js"])
  vm.runInContext(fs.readFileSync(path.join(APP, f), "utf8").replace(/^(const|let) /mg, "var "), ctx, { filename: f });
const LEX = ctx.LEXICON_COMER, CASOS = ctx.CASOS, VERBOS = ctx.VERBOS;
const sinAc = s => String(s).replace(/́/g, "");
const clave = s => sinAc(s).toLowerCase().replace(/ё/g, "е");
const porId = {}; LEX.forEach(e => { porId[e.id] = e; });

/* forma (sin acento) → ids; forma acentuada → ids (para controlar el acento) */
const formas = new Map(), acentuadas = new Map();
const sumar = (f, id) => {
  if (!f || typeof f !== "string") return;
  for (const p of f.split(/[\s,/]+/)) {
    if (!/[а-яё]/i.test(p)) continue;
    const k = clave(p); if (!formas.has(k)) formas.set(k, new Set()); formas.get(k).add(id);
    const a = p.toLowerCase(); if (!acentuadas.has(a)) acentuadas.set(a, new Set()); acentuadas.get(a).add(id);
  }
};
LEX.forEach(e => { sumar(e.ru, e.id); sumar(e.acento, e.id); });
const recorrer = (o, id) => {
  if (typeof o === "string") sumar(o, id);
  else if (Array.isArray(o)) o.forEach(x => recorrer(x, id));
  else if (o && typeof o === "object") for (const k in o) if (!["nota", "tipo", "ru", "id", "gov"].includes(k)) recorrer(o[k], id);
};
for (const id in CASOS) recorrer(CASOS[id], id);
for (const id in VERBOS) recorrer(VERBOS[id], id);
/* Formas conjugadas (para el control de gramática de las unidades estrictas) */
const conj = new Map();   // forma acentuada en minúscula → [{ k, p }]
for (const id in VERBOS) {
  const v = VERBOS[id], add = (f, x) => { if (!f) return; const a = f.toLowerCase(); if (!conj.has(a)) conj.set(a, []); conj.get(a).push(x); };
  (v.presente || []).forEach((f, p) => add(f, { k: "presente", p }));
  (v.futuro || []).forEach((f, p) => add(f, { k: "futuro", p }));
  if (v.pasado) Object.values(v.pasado).forEach(f => add(f, { k: "pasado" }));
  if (v.imperativo) Object.values(v.imperativo).forEach(f => add(f, { k: "imperativo" }));
}
const noVerbo = new Set();   // formas que también son otra cosa (infinitivo, sustantivo…)
LEX.forEach(e => { if (e.posNormalized !== "verbo") { noVerbo.add((e.acento || e.ru).toLowerCase()); } else noVerbo.add((e.acento || e.ru).toLowerCase()); });
for (const id in CASOS) recorrer2(CASOS[id]);
function recorrer2(o) { if (typeof o === "string") o.split(/[\s,/]+/).forEach(p => noVerbo.add(p.toLowerCase())); else if (o && typeof o === "object") for (const k in o) recorrer2(o[k]); }
/* Lo que cada unidad estricta ya mostró de los verbos (U2: frases hechas; U4: presente con я, он/она́, мы, они́) */
const MOSTRADAS = new Set(["говорю́", "говори́шь", "говори́т", "понима́ю", "зна́ю", "учу́", "изуча́ю", "зову́т", "повтори́", "повтори́те", "извини́", "извини́те", "познако́мься", "говори́те"]);
/* Imperativos que una unidad ya muestra antes de la U12 (frases hechas) */
const IMPERATIVOS_DESDE = { "позвони́": 10, "дава́й": 11, "да́йте": 11, "принеси́те": 11, "помоги́те": 11, "поверни́те": 11 };
function gramaticaOk(w, d) {
  const a = w.toLowerCase(), x = conj.get(a);
  if (!x || noVerbo.has(a) || MOSTRADAS.has(a)) return null;
  if (IMPERATIVOS_DESDE[a] && d >= IMPERATIVOS_DESDE[a]) return null;
  const vale = y => y.k === "presente" ? (d >= 5 || (d === 4 && [0, 2, 3, 5].includes(y.p)))
    : y.k === "pasado" ? d >= 8 : y.k === "futuro" ? d >= 9 : d >= 12;
  if (x.some(vale)) return null;
  const k = x[0].k;
  return d <= 3 ? "verbo conjugado que la U" + d + " todavía no enseña"
    : d === 4 && k === "presente" ? "la U4 enseña el presente solo con я, он/она́, мы, они́"
    : k + " (se enseña en la U" + ({ presente: 5, pasado: 8, futuro: 9, imperativo: 12 })[k] + ")";
}
const unidadDe = id => { const e = porId[id]; return e && e.introducedIn && e.introducedIn.length ? Math.min(...e.introducedIn) : 99; };

/* ── Fuente ── */
const F = require("./fuente-masha.js");

/* ── Transliteración ── */
const palabras = new Set();
const RX_PAL = /[А-Яа-яЁё́]+(?:-[А-Яа-яЁё́]+)*/g;
function juntar(o) {
  if (typeof o === "string") { if (o.includes("|")) (o.split("|")[0].match(RX_PAL) || []).forEach(w => palabras.add(w)); }
  else if (Array.isArray(o)) o.forEach(juntar);
  else if (o && typeof o === "object") for (const k in o) if (k !== "claves" && k !== "k") juntar(o[k]);
}
juntar(F);
const lexTr = new Map(); LEX.forEach(e => { if (e.acento && e.translit) lexTr.set(e.acento.toLowerCase(), e.translit); });
const pendientes = [...palabras].map(w => w.toLowerCase()).filter(w => !lexTr.has(w));
const gen = JSON.parse(cp.execFileSync("python3", ["-I", "-c",
  "import sys,json,importlib.util as u\n" +
  "s=u.spec_from_file_location('g',sys.argv[1]);g=u.module_from_spec(s);s.loader.exec_module(g)\n" +
  "ws=json.loads(sys.stdin.read());print(json.dumps({w:g.translit(g.ipa(w)) for w in ws}))",
  path.join(APP, "herramientas", "generador-fonetica.py")], { input: JSON.stringify(pendientes) }).toString());
function trDe(ru) {
  return ru.replace(RX_PAL, w => {
    const k = w.toLowerCase(); let t = lexTr.get(k) || gen[k] || k;
    if (w[0] !== w[0].toLowerCase()) t = t[0].toUpperCase() + t.slice(1);
    return t;
  }).replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, "").replace(/\s+/g, " ").trim();
}

/* ── Conversión ── */
const L = s => {
  if (s && typeof s === "object") return s;
  const [ru, es] = String(s).split("|").map(x => (x || "").trim());
  return { ru, tr: trDe(ru), es: es || "" };
};
const LL = a => (a == null ? [] : [].concat(a)).map(L);
const I = s => { const [ru, es] = String(s).split("|").map(x => (x || "").trim()); return { ru, es: es || "" }; };
/* versiones: { 2: [...], 6: [...] } → [{ d, l }] ordenadas */
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
  if (n.com) o.ramas.push(Object.assign(rama(n.com), { comodin: true, etiqueta: n.com.et || "Otra respuesta" }));
  if (n.aTi) o.aTi = LL(n.aTi);
  ["aTiTema", "saltarSi", "sig", "abierto", "trasPregunta", "guarda", "latin"].forEach(k => { if (n[k] !== undefined) o[k] = n[k]; });
  if (n.alSaltar) o.alSaltar = LL(n.alSaltar);
  if (n.alRendirse) o.alRendirse = LL(n.alRendirse);
  if (n.ret) o.retomar = L(n.ret);
  if (n.botSi) { o.botSi = {}; for (const k in n.botSi) o.botSi[k] = LL(n.botSi[k]); }
  if (n.siDato) { o.siDato = {}; for (const k in n.siDato) o.siDato[k] = LL(n.siDato[k]); }
  return o;
}
const pregunta = p => {
  const o = { id: p.id, tema: p.tema, desde: p.desde || 2, claves: p.k, idea: I(p.idea), v: V(p.r) };
  if (p.variantes) o.variantes = p.variantes.map(v => ({ claves: v.k, v: V(v.r) }));
  return o;
};
const naciones = (ctx.U2_NACIONES || []).concat(ctx.U2_NACIONES_AMP || []).map(r => {
  const e = LEX.find(x => x.acento === r[0] || x.ru === sinAc(r[0]));
  const c = e && CASOS[e.id];
  const gen = c && c.sg ? c.sg[1] : r[0];
  return [r[0], r[1], r[2], gen, r[3], r[4]];
});
const datos = {
  personaje: F.personaje,
  presentacion: F.presentacion,
  naciones,
  apertura: { conNombre: V(F.apertura.conNombre), sinNombre: V(F.apertura.sinNombre), ideas: F.apertura.ideas.map(I) },
  comodines: Object.fromEntries(Object.entries(F.comodines).map(([k, v]) => [k, V(v)])),
  utiles: F.utiles.map(u => ({ id: u.id, etiqueta: u.et, claves: u.k, resp: V(u.r), accion: u.accion })),
  vida: F.vida.map(pregunta),
  temas: F.temas.map(t => ({
    id: t.id, desde: t.desde, titulo: t.ru, tituloEs: t.es, resumen: t.resumen, intro: t.intro, inicio: t.inicio,
    apertura: t.apertura !== false,
    preguntas: (t.preguntas || []).map(pregunta),
    nodos: Object.entries(t.nodos).map(([id, n]) => nodo(id, n)),
  })),
};

/* ── Verificación ── */
const prob = [];
const lineasDe = [];   // [texto, desde, dónde]
function textos(o, d, donde) {
  if (!o) return;
  if (Array.isArray(o)) return o.forEach((x, i) => textos(x, d, donde));
  if (typeof o === "object") {
    if (typeof o.ru === "string") lineasDe.push([o.ru, d, donde]);
    for (const k in o) if (k !== "ru" && k !== "claves" && k !== "tras" && k !== "genero" && typeof o[k] === "object") textos(o[k], d, donde + "." + k);
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
/* lo global: cada versión, con su unidad */
const glob = (arr, donde) => arr.forEach(v => textos(v.l, v.d, donde));
glob(datos.apertura.conNombre, "apertura"); glob(datos.apertura.sinNombre, "apertura"); textos(datos.apertura.ideas, 2, "apertura.ideas");
for (const k in datos.comodines) glob(datos.comodines[k], "comodines." + k);
datos.utiles.forEach(u => glob(u.resp, "utiles." + u.id));
datos.vida.forEach(p => { textos(p.idea, p.desde, "vida." + p.id + ".idea"); glob(p.v, "vida." + p.id); (p.variantes || []).forEach(x => glob(x.v, "vida." + p.id)); });

const vistas = new Map();   // resumen de palabras por unidad
for (const [txt, d, donde] of lineasDe) {
  const limpio = txt.replace(/\{[^}]*\}/g, m => m.includes("/") ? m.slice(1, -1).split("/").join(" ") : " ").replace(/«[^»]*»/g, m => /[a-z]/i.test(m) ? " " : m);
  let m; const rx = new RegExp(RX_PAL.source, "g");
  while ((m = rx.exec(limpio))) {
    const w = m[0], k = clave(w);
    const antes = limpio.slice(0, m.index).replace(/[\s«"(]+$/, "");
    const inicio = !antes || /[.!?—–:…]$/.test(antes) || /\p{Extended_Pictographic}$/u.test(antes);
    if (NOMBRES_LIBRES.has(k)) continue;
    const ids = formas.get(k) || (w.includes("-") ? null : null);
    const esPropio = ids && [...ids].some(id => porId[id] && porId[id].propio);
    if (/^[А-ЯЁ]/.test(w) && !inicio && !ids) continue;            // nombre propio que no está en el léxico
    if (!ids) { prob.push(`${donde} (U${d}): «${w}» no está en el léxico ni en Casos / Verbos`); continue; }
    const vocales = (sinAc(w).match(/[аеёиоуыэюя]/gi) || []).length;
    if (vocales >= 2 && !/[́ё]/i.test(w) && !w.includes("-")) prob.push(`${donde}: «${w}» sin acento`);
    if (/́/.test(w) && !acentuadas.has(w.toLowerCase()) && !w.includes("-")) prob.push(`${donde}: «${w}» con el acento en otra sílaba que en el léxico / Casos / Verbos`);
    if (esPropio) continue;
    const g = d <= 11 ? gramaticaOk(w, d) : null;
    if (g) prob.push(`${donde} (U${d}): «${w}»: ${g}`);
    if (d <= ESTRICTO_HASTA) {
      const u = Math.min(...[...ids].map(unidadDe));
      if (u > d) prob.push(`${donde} (U${d}): «${w}» se enseña en la U${u === 99 ? "?" : u}`);
    }
  }
}
const nTemas = {}; datos.temas.forEach(t => { nTemas[t.desde] = (nTemas[t.desde] || 0) + 1; });
console.log("Temas por unidad:", JSON.stringify(nTemas), "· pasos:", datos.temas.reduce((a, t) => a + t.nodos.length, 0), "· líneas:", lineasDe.length);
if (prob.length) { console.log("✗ " + prob.length + " problemas:\n  " + [...new Set(prob)].join("\n  ")); process.exitCode = 1; }
else console.log("✓ Vocabulario y recorridos sin problemas");

if (!SOLO_VER && !prob.length) {
  const cab = fs.readFileSync(path.join(__dirname, "cabecera.txt"), "utf8");
  fs.writeFileSync(path.join(APP, "data", "data-masha.js"), cab + "const MASHA = " + JSON.stringify(datos, null, 1) + ";\n" +
    "function mashaTema(id) { return MASHA.temas.find(t => t.id === id) || null; }\n");
  console.log("→ data/data-masha.js escrito");
}
