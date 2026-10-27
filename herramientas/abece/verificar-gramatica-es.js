/* Abecé — comprueba la guía de Gramática (data/data-gramatica-es.js):
   toda palabra en español de los capítulos existe en el léxico o entre
   sus formas (FORMAS_ES, VERBOS_ES), y cada práctica tiene su respuesta
   entre las opciones. Uso: node herramientas/abece/verificar-gramatica-es.js */
const vm = require("vm"), fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..", "..");
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["data-lexicon-es.js", "data-formas-es.js", "data-verbos-es.js", "data-gramatica-es.js"])
  vm.runInContext(fs.readFileSync(path.join(RAIZ, "data", f), "utf8").replace(/^const /gm, "var "), ctx);
const conocidas = new Set();
const add = w => String(w || "").toLowerCase().split(/[^a-záéíóúüñ]+/).forEach(x => x && conocidas.add(x));
ctx.LEXICON_ES.forEach(e => { add(e.es); if (e.femenino) add(e.femenino.es); });
Object.keys(ctx.FORMAS_ES).forEach(id => ctx.formasEsLista(id).forEach(x => add(x.f)));
Object.values(ctx.FORMAS_ES_SERIES).forEach(s => JSON.stringify(s.filas).replace(/[a-záéíóúüñ]+/gi, w => add(w)));
const recorre = v => { if (Array.isArray(v)) v.forEach(recorre); else if (typeof v === "string") add(v); };
Object.values(ctx.VERBOS_ES).forEach(e => Object.values(e).forEach(recorre));
const problemas = [];
const LATIN = /(^|[^a-záéíóúüñ\-])([a-záéíóúüñ]+)(?![a-záéíóúüñ])/gi;
function mira(txt, donde) {
  String(txt).replace(/[{}]/g, "").replace(LATIN, (m, p, w) => {
    if (!conocidas.has(w.toLowerCase())) problemas.push(donde + ": «" + w + "»");
    return m;
  });
}
ctx.GRAMATICA_ES.capitulos.forEach(c => c.bloques.forEach((b, i) => {
  const d = c.id + " #" + i;
  if (b.t === "texto" || b.t === "nota") mira(b.texto, d);
  if (b.t === "tabla") b.filas.forEach(f => f.forEach(x => mira(x, d)));
  if (b.t === "ejemplos") b.items.forEach(x => { mira(x[0], d); mira(x[2], d); });
  if (b.t === "par") { mira(b.bien[0], d); mira(b.mal[1], d); }
  if (b.t === "practica") b.items.forEach(x => {
    if (x.op.indexOf(x.ok) < 0) problemas.push(d + ": la respuesta no está entre las opciones (" + x.fr + ")");
    mira(x.fr.replace("___", x.ok), d); mira(x.por, d);
  });
}));
console.log("Capítulos: " + ctx.GRAMATICA_ES.capitulos.length);
if (problemas.length) { console.log("✗ " + problemas.length + " problemas:"); problemas.forEach(p => console.log("  " + p)); process.exitCode = 1; }
else console.log("✓ Todas las palabras en español están en el léxico o entre sus formas.");
