// Inventario de las voces de ABECÉ (03/11/2026). Es el espejo de inventario.js (Azbuka):
// arma la lista de todo lo que Abecé dice en español, con la voz de cada texto, para que
// generar-voces-es.py haga los audios. Lo corre GitHub Actions en el repo Abece_voces;
// no hace falta correrlo a mano.
//
//   node herramientas/voces/inventario-es.js <carpeta de la app> <salida.json> [grupo]
//
// Grupos (tandas); «todo» (el que usa GitHub Actions por defecto) junta las tres primeras:
//   unidades    → las unidades (abece-1 … abece-14: teoría, tablas, bancos de ejercicios,
//                 chats), los diálogos con la voz de cada personaje, las frases, el Alfabeto
//                 y la guía de Gramática; y, cuando existan, Lecturas, Cultura y la charla
//                 con Lucía. Las palabras de cada unidad (introducedIn) van con su página.
//   diccionario → cada entrada del léxico español y su femenino (la ficha, la burbuja).
//   formas      → las formas de Gramática (plurales con su artículo, las 4 formas de los
//                 adjetivos, las series) y las tablas de Verbos, como las muestra cada página,
//                 de los VERBOS_TOP verbos más frecuentes más todos los que enseña alguna unidad
//                 (introducedIn): así cada unidad nueva suma sola los suyos.
//   completo    → «todo» más las tablas de TODOS los verbos (unos 120.000 audios, ~750 MB):
//                 se acerca al límite de 1 GB de GitHub Pages, por eso no va por defecto.
// Salida: { grupo, textos: [{ t: texto, v: voz, k: clave, p: [páginas] }] }
//
// LUGARES YA PREPARADOS (03/11/2026, Manu: «que se pueda ir corriendo la acción a medida que
// se puebla»). Lo que todavía no existe se saltea solo, y entra en la próxima corrida:
//   · data/data-unidad-es-N.js (N = 1 a 14; la 14, examen final: ejerciciosExamenFinalEs),
//     con UNIDAD_ES_N y ejerciciosUnidadEsN(), página abece-N;
//   · data/data-dialogos-es.js (DIALOGOS_ES, FRASES_ES) y data/data-frases-es.js (FRASES_ES), página dialogos;
//   · data/data-cultura-es.js (CULTURA_ES), página dialogos;
//   · data/data-lecturas-es.js (LECTURAS_ES), página lecturas;
//   · data/data-lucia.js (LUCIA: el guion de «Болтаем с Лусией», voz de Lucía), página lucia.
// Un personaje nuevo en DLG_PERSONAJES_ES suena solo con la voz de su género
// (AZ_VOCES_ES_PERSONAJE en js/core.js); para darle una voz propia, se suma ahí.
//
// La clave (azVozClave + azVozTextoEs), la tabla de voces (AZ_VOCES_ES_PERSONAJE) y azVozDeEs
// se leen de js/core.js: así el inventario y la app usan exactamente lo mismo.
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const APP = path.resolve(process.argv[2] || ".");
const SALIDA = process.argv[3] || "lista-es.json";
const GRUPO = process.argv[4] || "todo";
const VERBOS_TOP = 300;                                                        // los más frecuentes (subtítulos)
const TODO = GRUPO === "todo" || GRUPO === "completo";
const existe = f => fs.existsSync(path.join(APP, f));
const leer = f => fs.readFileSync(path.join(APP, f), "utf8");

/* ── El mundo de la app, sin navegador, en la dirección Abecé ── */
const ctx = { console, Math, Date, JSON, Set, Map, Promise, setTimeout: () => 0, clearTimeout: () => {} };
ctx.window = ctx; ctx.self = ctx;
ctx.location = { href: "https://x/Azbuka_v3/index.html?dir=abece", pathname: "/Azbuka_v3/index.html", search: "?dir=abece" };
const nodo = () => ({ style: {}, classList: { add() {}, remove() {}, toggle() {} }, setAttribute() {}, getAttribute: () => null, appendChild() {} });
ctx.document = Object.assign(nodo(), { addEventListener() {}, removeEventListener() {}, readyState: "loading", createElement: nodo, head: nodo(), body: nodo(), documentElement: nodo(), querySelector: () => null, querySelectorAll: () => [], write() {} });
ctx.navigator = { userAgent: "node" };
const mem = { az_direccion: '"abece"', az_prueba: '"si"', az_cuenta_rol: "admin" };
ctx.localStorage = { getItem: k => (k in mem ? mem[k] : null), setItem: (k, v) => { mem[k] = String(v); }, removeItem: k => { delete mem[k]; } };
ctx.addEventListener = () => {}; ctx.removeEventListener = () => {};
ctx.fetch = () => Promise.reject(new Error("sin red"));
ctx.URL = URL; ctx.URLSearchParams = URLSearchParams;
ctx.React = { createElement: () => null, Fragment: "f" };
ctx.htmPreact = { useState: v => [v, () => {}], useEffect() {}, useRef: () => ({}), useMemo: f => f(), useLayoutEffect() {}, render() {}, h: () => null };
vm.createContext(ctx);
function cargar(f, exportar) {
  let src = leer(f);
  if (exportar) src += "\n;" + exportar.map(n => `try { window.${n} = ${n}; } catch (e) {}`).join("\n");
  try { vm.runInContext(src, ctx, { filename: f }); } catch (e) { console.log("  (aviso)", f, e.message); }
}
const constantes = f => [...leer(f).matchAll(/^(?:const|let|var|function)\s+([A-Za-z_$][\w$]*)/gm)].map(m => m[1]);
["data/data-catalogo.js", "js/core.js", "data/data-lexicon-es.js", "data/data-formas-es.js", "data/data-verbos-es.js", "js/verbos-es.js",
 "data/data-alfabeto-es.js", "data/data-dialogos-es.js", "data/data-frases-es.js", "data/data-cultura-es.js", "data/data-gramatica-es.js"]
  .forEach(f => { if (existe(f)) cargar(f, constantes(f)); });
const { azVozClave, azVozTextoEs, azVozDeEs, LEXICON_ES } = ctx;
if (!azVozClave || !azVozTextoEs || !azVozDeEs) { console.log("✗ js/core.js no tiene azVozClave / azVozTextoEs / azVozDeEs"); process.exit(1); }
if (!ctx.AZ_DIRECCION || ctx.AZ_DIRECCION.id !== "abece") console.log("  (aviso) la dirección no quedó en Abecé");

/* ── Qué textos se pueden decir ── */
const IPA = /[ˈˌɾθʝβðɣɲʎχʃʒŋɡ]/;
function esEspanol(s) {
  if (typeof s !== "string") return false;
  const t = azVozTextoEs(s);
  if (!/[a-záéíóúüñ]/i.test(t) || t.length > 600) return false;
  if (/[Ѐ-ӿ]/.test(t)) return false;                              // ruso (interfaz, traducciones)
  if (IPA.test(t)) return false;                                             // transcripción
  if (/___|[\\\[\]<>=#@$%^&*|~+_`]/.test(t)) return false;                   // huecos, código, patrones
  if (/\S\/|\/\S/.test(t)) return false;                                     // «/» pegado («él / ella» sí se dice)
  if (/^[A-Z]{2,4}-\d/.test(t) || /^[a-z]+\d[\w-]*$/i.test(t)) return false;  // ids: ESP-00012, es1m5
  if (/^[a-z0-9]+(?:-[a-z0-9]+)+$/.test(t)) return false;                    // ids de regla: es1-diacritica
  if (/\.(html|js|json)\b|https?:/.test(t)) return false;
  if (/^[-–.…]|[-–]$/.test(t)) return false;                                // terminaciones sueltas (-ar, -ción)
  if (t.split(" ").length > 12 && !/[.,!?…:;¿¡]/.test(t)) return false;      // listas de palabras
  return true;
}
const textos = new Map();                                                    // voz|clave → { t, v, k, p:Set }
function sumar(texto, quien, pagina) {
  if (!esEspanol(texto)) return;
  const t = azVozTextoEs(texto), v = azVozDeEs(quien).voz, k = azVozClave(t), id = v + "|" + k;
  if (!textos.has(id)) textos.set(id, { t, v, k, p: new Set() });
  if (pagina) textos.get(id).p.add(pagina);
}
/* Campos que nunca se dicen (ids, tipos, transcripción, código) */
const NO = new Set(["id", "tipo", "forma", "regla", "grupo", "items", "lexId", "lex", "k", "rx", "msg", "icon", "glyph", "href", "situacion",
  "registro", "nivel", "funcion", "p", "pos", "posNormalized", "gender", "genero", "foco", "variantes", "ipa", "translit", "tr", "nameTl",
  "upper", "lower", "voz", "zona", "como", "std", "var", "acento", "sourceRefs", "temas", "clase", "color", "titulo", "tituloEs", "sub",
  "corto", "desc", "resumen", "personajes", "unidad", "modulo", "dificultad", "parte", "f", "cul", "obs", "t"]);
/* Recorre cualquier dato: cada cadena en español va con la narración (Ana), salvo las líneas de
   un chat (bot), que van con su personaje o su género, y los diálogos de audio [{ texto, genero }]. */
function recorrer(x, pagina, quien, vistos, clave) {
  if (x == null || NO.has(clave)) return;
  if (typeof x === "string") { sumar(x, quien, pagina); return; }
  if (typeof x !== "object" || vistos.has(x)) return;
  vistos.add(x);
  if (Array.isArray(x)) { x.forEach(y => recorrer(y, pagina, quien, vistos, clave)); return; }
  const PJ = ctx.DLG_PERSONAJES_ES || {};
  if (typeof x.texto === "string" && (x.genero || x.quien)) { sumar(x.texto, x.genero || x.quien, pagina); return; }
  if (Array.isArray(x.pasos) && x.pasos.some(s => s && typeof s.bot === "string")) {
    const dueño = PJ[x.p] ? x.p : (x.genero || "f");
    x.pasos.forEach(s => { if (s && typeof s.bot === "string") sumar(s.bot, PJ[s.p] ? s.p : (s.genero || dueño), pagina); });
  }
  Object.keys(x).forEach(k => { if (k !== "bot") recorrer(x[k], pagina, quien, vistos, k); });
}
/* Los textos sin las claves que no se dicen, pero sí los que sí (es, voz…) cuando son el texto */
const VOZ_DIRECTA = ["voz", "meta"];

if (GRUPO === "unidades" || TODO) {
  const PJ = ctx.DLG_PERSONAJES_ES || {};
  /* 1. Diálogos: cada línea con la voz de su personaje (y la versión con usted, si la hay) */
  (ctx.DIALOGOS_ES || []).forEach(d => d.lineas.forEach(l => {
    const pags = ["dialogos"].concat(d.unidad ? ["abece-" + d.unidad] : []);
    pags.forEach(pg => {
      sumar(l.es, l.p, pg);
      if (l.vy && l.vy.es) sumar(l.vy.es, (d.vy && d.vy[l.p]) || l.p, pg);
      else if (d.vy && d.vy[l.p]) sumar(l.es, d.vy[l.p], pg);
    });
  }));
  /* 2. Frases (las fórmulas que se aprenden enteras) */
  (ctx.FRASES_ES || []).forEach(f => { sumar(f.es, null, "dialogos"); if (f.unidad) sumar(f.es, null, "abece-" + f.unidad); });
  /* 3. Unidades: los datos, el banco de ejercicios armado y las palabras de la unidad */
  for (let n = 1; n <= 14; n++) {
    const f = "data/data-unidad-es-" + n + ".js", pag = "abece-" + n;
    if (!existe(f)) continue;
    cargar(f, constantes(f));
    const vistos = new Set();
    constantes(f).forEach(c => { if (typeof ctx[c] !== "function") recorrer(ctx[c], pag, null, vistos); });
    const fn = n === 14 ? ctx.ejerciciosExamenFinalEs : ctx["ejerciciosUnidadEs" + n];
    if (typeof fn === "function") { try { recorrer(fn(), pag, null, vistos); } catch (e) { console.log("  (aviso) ejercicios U" + n, e.message); } }
    (LEXICON_ES || []).forEach(e => {
      if ((e.introducedIn || []).indexOf(n) < 0) return;
      sumar(e.es, null, pag);
      if (e.femenino && e.femenino.es) sumar(e.femenino.es, null, pag);
    });
  }
  /* 4. Alfabeto: el nombre de cada letra, sus palabras y las fichas de pronunciación */
  (ctx.ALFABETO_ES || []).forEach(l => {
    sumar(l.name, null, "alfabeto");
    (l.words || []).forEach(w => sumar(w.es, null, "alfabeto"));
  });
  (ctx.FENOMENOS_ES || []).forEach(fe => {
    (fe.ejemplos || []).forEach(w => sumar(w.es, null, "alfabeto"));
    (fe.pares || []).forEach(p => { sumar(p.a, null, "alfabeto"); sumar(p.b, null, "alfabeto"); });
    (fe.frases || []).forEach(x => sumar(x.es, null, "alfabeto"));
    (fe.variantes || []).forEach(v => (v.ejemplos || []).forEach(w => sumar(w.es, null, "alfabeto")));
  });
  /* 5. Guía de Gramática: los ejemplos, los pares ✔/✘ y la práctica completa */
  if (ctx.GRAMATICA_ES) {
    const limpio = t => String(t).replace(/[{}]/g, "");
    (ctx.GRAMATICA_ES.capitulos || []).forEach(cap => (cap.bloques || []).forEach(b => {
      if (b.t === "ejemplos") (b.items || []).forEach(it => sumar(limpio(it[0]), null, "gramatica"));
      else if (b.t === "par") [].concat(b.bien || [], b.items || []).forEach(it => { if (Array.isArray(it)) sumar(limpio(it[0]), null, "gramatica"); else sumar(limpio(it), null, "gramatica"); });
      else if (b.t === "practica") (b.items || [b]).forEach(pr => { if (pr && pr.fr) sumar(String(pr.fr).replace(/_{2,}/, pr.ok || ""), null, "gramatica"); });
      else recorrer(b, "gramatica", null, new Set());
    }));
  }
  /* 6. Lo que todavía no existe (se saltea solo): Cultura, Lecturas y la charla con Lucía */
  /* Cultura (12/11/2026): solo los ejemplos en español, sin las llaves { } que marcan la palabra
     (dialogos.html los dice así); el texto, la comparación y las explicaciones son rusos. */
  if (ctx.CULTURA_ES) ctx.CULTURA_ES.forEach(n => (n.ejemplos || []).forEach(ej => sumar(String(ej[0]).replace(/[{}]/g, ""), null, "dialogos")));
  if (existe("data/data-lecturas-es.js")) {
    cargar("data/data-lecturas-es.js", ["LECTURAS_ES"]);
    (ctx.LECTURAS_ES || []).forEach(L => {
      (L.parrafos || []).forEach(p => sumar(p.es, null, "lecturas"));
      recorrer(L.preguntas, "lecturas", null, new Set());
    });
  }
  /* Lucía (espejo de Masha): cada línea { es, ru } como la dice lucia.html, con las dos formas de
     {cansado/cansada}. Las que llevan el nombre, el país o una palabra capturada se arman en el
     momento: suenan con la voz del teléfono. */
  if (existe("data/data-lucia.js")) {
    cargar("data/data-lucia.js", ["LUCIA"]);
    const luciaVoz = s => String(s || "").replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}♀♂]/gu, "").replace(/«[^»]*[а-яё][^»]*»/gi, "").trim();
    const linea = (o, vistos) => {
      if (!o || typeof o !== "object" || vistos.has(o)) return; vistos.add(o);
      if (Array.isArray(o)) return o.forEach(x => linea(x, vistos));
      if (typeof o.es === "string" && typeof o.ru === "string" && !/\{(nombre|pais|pais_gen|nac|nac_es|x|ru|es)\}/.test(o.es)) {
        const alt = [o.es.replace(/\{([^{}/]+)\/([^{}]+)\}/g, "$1"), o.es.replace(/\{([^{}/]+)\/([^{}]+)\}/g, "$2")];
        new Set(alt).forEach(t => sumar(luciaVoz(t), "lucia", "lucia"));
      }
      Object.keys(o).forEach(k => { if (k !== "ideas" && k !== "idea") linea(o[k], vistos); });
    };
    if (ctx.LUCIA) linea(ctx.LUCIA, new Set());
  }
}

/* Tanda 2: el Diccionario, cada entrada y su femenino. Sin página: se bajan al tocarlas. */
if (GRUPO === "diccionario" || TODO) {
  (LEXICON_ES || []).forEach(e => { sumar(e.es, null, null); if (e.femenino && e.femenino.es) sumar(e.femenino.es, null, null); });
}

/* Tanda 3: las formas de Gramática y de Verbos, como las dice cada tabla. */
if (GRUPO === "formas" || TODO) {
  /* Gramática: cada forma sola y con su artículo (la canción · las canciones), y las series */
  const F = ctx.FORMAS_ES || {};
  const cada = (x, art) => String(x || "").split(" · ").forEach(p => { if (!p) return; sumar(p, null, null); if (art) sumar(art + " " + p, null, null); });
  Object.keys(F).forEach(id => {
    const d = F[id];
    if (d.serie) return;
    const art = d.art || [], artF = d.artF || [];
    cada(d.sg, art[0]); cada(d.pl, art[1]); cada(d.f, artF[0]); cada(d.fpl, artF[1]);
    ["m", "mpl", "fpl", "apoc", "var"].forEach(k => cada(d[k]));
    if (d.t !== "sust") cada(d.f);
  });
  const recogerSerie = (x, vistos) => {
    if (x == null) return;
    if (typeof x === "string") { cada(x.replace(/^con /, "")); cada(x); return; }
    if (typeof x !== "object" || vistos.has(x)) return; vistos.add(x);
    (Array.isArray(x) ? x : Object.keys(x).filter(k => !NO.has(k)).map(k => x[k])).forEach(y => recogerSerie(y, vistos));
  };
  recogerSerie(ctx.FORMAS_ES_SERIES, new Set());
  /* Verbos: las mismas celdas que arma js/verbos-es.js (vesFormas + vesTexto) */
  if (typeof ctx.vesFormas === "function" && ctx.VERBOS_ES) {
    const celda = c => { if (c && typeof c === "object" && c.verbo !== undefined) sumar(ctx.vesTexto(c), null, null); };
    const lex = id => (typeof ctx.lexEsById === "function" ? ctx.lexEsById(id) : null) || {};
    const puesto = id => ((lex(id).sourceRefs || {}).subtitulos || {}).puesto || 1e9;
    const enseñado = id => (lex(id).introducedIn || []).length > 0 || (lex(id).appearsIn || []).length > 0;
    let ids = Object.keys(ctx.VERBOS_ES);
    if (GRUPO !== "completo") {
      const top = new Set(ids.slice().sort((a, b) => puesto(a) - puesto(b)).slice(0, VERBOS_TOP));
      /* un pronominal va con su verbo base (levantarse con levantar) */
      const base = id => (ctx.VERBOS_ES[id] || {}).base;
      ids = ids.filter(id => top.has(id) || enseñado(id) || (base(id) && (top.has(base(id)) || enseñado(base(id)))));
    }
    ids.forEach(id => {
      let T = null;
      try { T = ctx.vesFormas(id); } catch (e) { return; }
      if (!T) return;
      Object.keys(T).forEach(k => {
        if (k === "subjSe") return;                                  // se muestra como nota, no suena
        const v = T[k];
        if (Array.isArray(v)) v.forEach(celda); else if (v && v.verbo !== undefined) celda(v); else if (v) Object.values(v).forEach(celda);
      });
    });
  }
}

const lista = [...textos.values()].map(x => ({ t: x.t, v: x.v, k: x.k, p: [...x.p] }));
fs.writeFileSync(SALIDA, JSON.stringify({ grupo: GRUPO, textos: lista }));
const porVoz = {};
lista.forEach(x => { porVoz[x.v] = (porVoz[x.v] || 0) + 1; });
const letras = lista.reduce((a, x) => a + x.t.length, 0);
/* Peso aproximado a 48 kbps (6 KB por segundo de voz, ~14 letras por segundo, más el encabezado) */
const mb = Math.round((letras / 14 * 6 + lista.length * 1.2) / 1024);
console.log("Grupo", GRUPO + ":", lista.length, "audios ·", JSON.stringify(porVoz), "·", letras, "letras (~" + Math.round(letras / 14 / 60) + " min de audio, ~" + mb + " MB)");
