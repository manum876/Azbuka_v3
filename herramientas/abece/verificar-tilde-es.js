/* Abecé — comprueba el laboratorio de la tilde (js/tilde-es.js): para cada
   palabra del léxico español (y su femenino), la separación en sílabas y la
   tónica deben dar lo mismo que el campo «acento» del léxico.
   Uso: node herramientas/abece/verificar-tilde-es.js */
const vm = require("vm"), fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..", "..");
const ctx = { window: {} }; ctx.window = ctx; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(RAIZ, "data", "data-lexicon-es.js"), "utf8").replace(/^const /gm, "var "), ctx);
vm.runInContext(fs.readFileSync(path.join(RAIZ, "js", "tilde-es.js"), "utf8"), ctx);
let n = 0; const mal = [];
/* «CA·sa» → ["ca","sa"] y el índice de la sílaba en mayúsculas (-1 si no hay) */
const partes = a => { const s = a.split("·"); return { sil: s.map(x => x.toLowerCase()).join("·"), ton: s.length > 1 ? s.findIndex(x => x === x.toUpperCase() && x !== x.toLowerCase()) : -1 }; };
const prueba = (es, acento) => {
  if (!es || !acento || /\s/.test(es)) return;          /* expresiones: cada palabra va aparte en el léxico */
  n++;
  const a = partes(acento), b = partes(ctx.tdAcento(es.toLowerCase()));
  if (a.sil !== b.sil || a.ton !== b.ton) mal.push(es + ": léxico " + acento + " · laboratorio " + ctx.tdAcento(es.toLowerCase()));
};
ctx.LEXICON_ES.forEach(e => { prueba(e.es, e.acento); if (e.femenino && e.femenino.es) prueba(e.femenino.es, e.femenino.acento); });
console.log("Palabras comprobadas: " + n);
if (mal.length) { console.log("✗ " + mal.length + " diferencias:"); mal.slice(0, 60).forEach(x => console.log("  " + x)); process.exitCode = 1; }
else console.log("✓ El laboratorio da las mismas sílabas y la misma tónica que el léxico.");
