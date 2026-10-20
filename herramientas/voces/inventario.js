// Inventario de las voces generadas de AZBUKA (15/10/2026).
// Arma la lista de todo lo que la app dice en ruso, con la voz de cada texto, para que
// generar-voces.py haga los audios. Lo corre GitHub Actions en el repo Azbuka_voces;
// no hace falta correrlo a mano.
//
//   node herramientas/voces/inventario.js <carpeta de la app> <salida.json> [grupo]
//
// Grupos (tandas); «todo» (el que usa GitHub Actions) junta todas las que ya están hechas:
//   unidades  → las 14 unidades (textos, ejercicios, chats y conversaciones), diálogos,
//               frases, cultura, charla con Masha, Hoy y Alfabeto. Las palabras de cada
//               unidad (introducedIn) van con la voz de narración.
// Salida: { grupo, textos: [{ t: texto, v: voz, k: clave, p: [páginas] }] }
//
// La clave (azVozClave), la tabla de voces (AZ_VOCES_PERSONAJE) y azVozDe se leen de
// js/core.js: así el inventario y la app usan exactamente lo mismo.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const APP = path.resolve(process.argv[2] || ".");
const SALIDA = process.argv[3] || "lista.json";
const GRUPO = process.argv[4] || "todo";
const leer = f => fs.readFileSync(path.join(APP, f), "utf8");

/* ── El mundo de la app, sin navegador ── */
const ctx = { console, Math, Date, JSON, Set, Map, Promise, setTimeout: () => 0, clearTimeout: () => {} };
ctx.window = ctx; ctx.self = ctx;
ctx.location = { href: "https://x/Azbuka_v3/index.html", pathname: "/Azbuka_v3/index.html", search: "" };
ctx.document = { addEventListener() {}, removeEventListener() {}, readyState: "loading", createElement: () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {} } }), head: { appendChild() {} }, body: { appendChild() {}, classList: { add() {}, remove() {}, toggle() {} } }, documentElement: { style: {}, classList: { add() {}, remove() {}, toggle() {} }, getAttribute: () => null, setAttribute() {} }, querySelector: () => null, querySelectorAll: () => [] };
ctx.navigator = { userAgent: "node" };
const mem = {};
ctx.localStorage = { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); }, removeItem: k => { delete mem[k]; } };
ctx.addEventListener = () => {}; ctx.removeEventListener = () => {};
ctx.fetch = () => Promise.reject(new Error("sin red"));
vm.createContext(ctx);
function cargar(f, exportar) {
  let src = leer(f);
  if (exportar) src += "\n;" + exportar.map(n => `try { window.${n} = ${n}; } catch (e) {}`).join("\n");
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { console.log("  (aviso)", f, e.message); }
}
const constantes = f => [...leer(f).matchAll(/^(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/gm)].map(m => m[1]);
["data/data-lexicon.js", "data/data-casos.js", "data/data-verbos.js", "data/data-frases.js", "data/data-dialogos.js",
 "data/data-cultura.js", "data/data-charla.js", "data/data-alphabet.js", "data/data-mapa.js", "js/core.js"]
  .forEach(f => { if (fs.existsSync(path.join(APP, f))) cargar(f, constantes(f)); });
const { azVozClave, azVozTexto, azVozDe, DLG_PERSONAJES, DIALOGOS, LEXICON_COMER } = ctx;
if (!azVozClave) { console.log("✗ js/core.js no tiene azVozClave"); process.exit(1); }

/* ── Qué textos se pueden decir ── */
function esRuso(s) {
  if (typeof s !== "string") return false;
  const t = azVozTexto(s);
  if (!/[а-яё]/i.test(t) || t.length > 600) return false;
  if (/[A-Za-z0-9_\\\[\]<>=#@$%^&*|~+]/.test(t)) return false;       // mezclado con español, huecos…
  if (/\S\/|\/\S/.test(t)) return false;                                // «/» pegado (los «он / она́» sí se dicen)
  if (/^[-–.…]|^—\S|[-–]$/.test(t)) return false;                     // terminaciones sueltas (-ешь); «— Да.» sí
  if (t.split(" ").length > 12 && !/[.,!?…:;]/.test(t)) return false;   // listas de palabras para buscar, no se dicen
  return true;
}
const textos = new Map();                                             // voz|clave → { t, v, k, p:Set }
function sumar(texto, quien, pagina) {
  if (!esRuso(texto)) return;
  const t = azVozTexto(texto), v = azVozDe(quien).voz, k = azVozClave(t), id = v + "|" + k;
  if (!textos.has(id)) textos.set(id, { t, v, k, p: new Set() });
  if (pagina) textos.get(id).p.add(pagina);
}
/* Recorre cualquier dato: cada cadena rusa va con la voz de narración, salvo las líneas
   de un chat o una conversación (bot), que van con su personaje o su género. */
function recorrer(x, pagina, quien, vistos) {
  if (x == null) return;
  if (typeof x === "string") { sumar(x, quien, pagina); return; }
  if (typeof x !== "object" || vistos.has(x)) return;
  vistos.add(x);
  if (Array.isArray(x)) { x.forEach(y => recorrer(y, pagina, quien, vistos)); return; }
  // chat (U2): { p, pasos: [{ bot }] }   ·   turnos (U11, U13, U14): { quien, genero, pasos: [{ bot, genero? }] }
  if (Array.isArray(x.pasos) && x.pasos.some(s => s && typeof s.bot === "string")) {
    const dueño = (DLG_PERSONAJES && x.p && DLG_PERSONAJES[x.p]) ? x.p : (x.genero || "f");
    x.pasos.forEach(s => { if (s && typeof s.bot === "string") sumar(s.bot, (DLG_PERSONAJES && s.p && DLG_PERSONAJES[s.p]) ? s.p : (s.genero || dueño), pagina); });
  }
  Object.keys(x).forEach(k => { if (k !== "bot") recorrer(x[k], pagina, quien, vistos); });
}
/* Cadenas sueltas de un archivo (también las que el código arma, como «Я из …») */
function literales(f, pagina) {
  const src = leer(f);
  for (const m of src.matchAll(/"((?:[^"\\\n]|\\.)*)"|'((?:[^'\\\n]|\\.)*)'/g)) {
    let s = m[1] != null ? m[1] : m[2];
    if (!/[а-яё]/i.test(s)) continue;
    try { s = m[1] != null ? JSON.parse('"' + s + '"') : JSON.parse('"' + s.replace(/\\'/g, "'").replace(/"/g, '\\"') + '"'); } catch (e) {}
    sumar(s, null, pagina);
  }
}

if (GRUPO === "unidades" || GRUPO === "todo") {
  /* 1. Diálogos: cada línea con la voz de su personaje, en tú y en вы */
  (DIALOGOS || []).forEach(d => d.lineas.forEach(l => {
    sumar(l.ru, l.p, "dialogos");
    if (l.vy && l.vy.ru) sumar(l.vy.ru, (d.vy && d.vy[l.p]) || l.p, "dialogos");
    else if (d.vy && d.vy[l.p]) sumar(l.ru, d.vy[l.p], "dialogos");
  }));
  /* 2. Unidades: el banco de ejercicios armado, los datos y las cadenas de cada archivo */
  for (let n = 1; n <= 14; n++) {
    const f = "data/data-unidad-" + n + ".js", pag = "azbuka-" + n;
    if (!fs.existsSync(path.join(APP, f))) continue;
    cargar(f, constantes(f));
    const vistos = new Set();
    constantes(f).forEach(c => { if (typeof ctx[c] !== "function") recorrer(ctx[c], pag, null, vistos); });
    const fn = n === 14 ? ctx.ejerciciosExamenFinal : ctx["ejerciciosUnidad" + n];
    if (typeof fn === "function") { try { recorrer(fn(), pag, null, vistos); } catch (e) { console.log("  (aviso) ejercicios U" + n, e.message); } }
    literales(f, pag);
    if (fs.existsSync(path.join(APP, pag + ".html"))) literales(pag + ".html", pag);
    (LEXICON_COMER || []).forEach(e => { if ((e.introducedIn || []).indexOf(n) >= 0) sumar(e.acento || e.ru, null, pag); });
  }
  /* 3. Lo demás que se oye fuera de las unidades */
  [["data/data-frases.js", "dialogos"], ["data/data-cultura.js", "dialogos"], ["dialogos.html", "dialogos"],
   ["data/data-charla.js", "charla"], ["charla.html", "charla"], ["js/hoy.js", "index"], ["index.html", "index"],
   ["data/data-alphabet.js", "alfabeto"], ["data/data-lecturas.js", "lecturas"], ["alfabeto.html", "alfabeto"], ["js/unidad-ui.js", null], ["js/unidad.js", null], ["js/mano.js", null]]
    .forEach(([f, pag]) => { if (fs.existsSync(path.join(APP, f))) literales(f, pag); });
  // la charla la dice Masha
  if (ctx.CHARLA) recorrer(ctx.CHARLA, "charla", "masha", new Set());
}

/* Tanda 2 (17/10/2026): el Diccionario, cada entrada con su acento (la ficha, la burbuja y
   las listas de vocabulario dicen e.acento). Sin página: no se bajan en segundo plano en bloque,
   sino las de la ficha que se abre (azVozQuiero en core.js). */
if (GRUPO === "diccionario" || GRUPO === "todo") {
  (LEXICON_COMER || []).forEach(e => sumar(e.acento || e.ru, null, null));
}

/* Tanda 3 (17/10/2026): todas las formas de Casos y Verbos, como las muestran sus tablas,
   el futuro compuesto (бу́ду + infinitivo, como lo arma verbos.html) y los ejemplos de gramática. */
if (GRUPO === "formas" || GRUPO === "todo") {
  const vistos = new Set();
  if (ctx.CASOS) recorrer(ctx.CASOS, null, null, vistos);
  if (ctx.VERBOS) recorrer(ctx.VERBOS, null, null, vistos);
  const V = ctx.VERBOS || {};
  const budu = (V["CMR-00006"] || {}).futuro || [];
  const porId = new Map((LEXICON_COMER || []).map(e => [e.id, e]));
  Object.keys(V).forEach(id => {
    const v = V[id], lex = porId.get(id) || {};
    if (!v.futuro && v.presente && lex.aspect !== "perfectivo") v.presente.forEach((pr, i) => { if (pr && budu[i]) sumar(budu[i] + " " + v.ru, null, null); });
  });
  ["data/data-gramatica.js", "casos.html", "verbos.html", "ficha.html"].forEach(f => { if (fs.existsSync(path.join(APP, f))) literales(f, null); });
  if (fs.existsSync(path.join(APP, "data/data-gramatica.js"))) { cargar("data/data-gramatica.js", constantes("data/data-gramatica.js")); constantes("data/data-gramatica.js").forEach(c => { if (typeof ctx[c] !== "function") recorrer(ctx[c], null, null, vistos); }); }
}

const lista = [...textos.values()].map(x => ({ t: x.t, v: x.v, k: x.k, p: [...x.p] }));
fs.writeFileSync(SALIDA, JSON.stringify({ grupo: GRUPO, textos: lista }));
const porVoz = {};
lista.forEach(x => { porVoz[x.v] = (porVoz[x.v] || 0) + 1; });
const letras = lista.reduce((a, x) => a + x.t.length, 0);
console.log("Grupo", GRUPO + ":", lista.length, "audios ·", JSON.stringify(porVoz), "·", letras, "letras (~" + Math.round(letras / 14 / 60) + " min de audio)");
