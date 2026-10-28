/* Abecé — comprueba js/corrector-es.js con casos fijos (decisiones de
   PROGRAMA_ABECE.md §7). Uso: node herramientas/abece/verificar-corrector-es.js */
const vm = require("vm"), fs = require("fs"), path = require("path");
const RAIZ = path.join(__dirname, "..", "..");
const ctx = { window: {}, console }; ctx.window = ctx; vm.createContext(ctx);
const cargar = f => vm.runInContext(fs.readFileSync(path.join(RAIZ, f), "utf8").replace(/^const /gm, "var ").replace(/^let /gm, "var "), ctx);
["data/data-lexicon-es.js", "data/data-formas-es.js", "data/data-verbos-es.js", "js/verbos-es.js", "js/corrector.js", "js/corrector-es.js"].forEach(f => { try { cargar(f); } catch (e) { if (!/React|htmPreact|document/.test(e.message)) throw e; } });
ctx.AZ_FES_K = { sg: "ед. ч.", pl: "мн. ч.", m: "м. р.", f: "ж. р.", mpl: "мн. ч.", fpl: "ж. р. мн. ч.", apoc: "перед сущ.", var: "мн. ч.", n: "средний род" };
const R = ["Неверно", "Почти", "Верно"];
const casos = [
  ["La canción es bonita.", "La canción es bonita.", {}, 2, "exacto"],
  ["la cancion es bonita", "La canción es bonita.", {}, 1, "falta la tilde → Casi"],
  ["Tu eres mi amigo.", "Tú eres mi amigo.", {}, 1, "tu/tú sin foco → Casi"],
  ["Tu eres mi amigo.", "Tú eres mi amigo.", { foco: ["tú"] }, 0, "tu/tú en foco → Mal"],
  ["Hablo con ella.", "Habló con ella.", { foco: true }, 0, "hablo/habló en foco → Mal"],
  ["Donde vives?", "¿Dónde vives?", {}, 1, "dónde sin tilde, sin ¿ → Casi"],
  ["Dónde vives?", "¿Dónde vives?", {}, 2, "sin ¿ → Bien con aviso"],
  ["Mi computadora es nueva.", "Mi ordenador es nuevo.", {}, 0, "computadora es nueva: la variante cambia el género (el ejercicio tiene que dar la alternativa)"],
  ["Tengo un auto.", "Tengo un coche.", {}, 2, "variante americana → Bien con nota"],
  ["Tengo un auto.", "Tengo un coche.", { variantes: "mal" }, 0, "variante en un ejercicio que la evalúa → Mal"],
  ["Vos tenés razón.", "Tú tienes razón.", {}, 2, "voseo → Bien con nota"],
  ["Quiero agua.", "Quiero el agua.", {}, 0, "falta el artículo → Mal"],
  ["La casa es bueno.", "La casa es buena.", {}, 0, "otra forma (bueno/buena) → Mal"],
  ["La casa es bueno.", "La casa es buena.", { formaCasi: true }, 1, "otra forma con formaCasi → Casi"],
  ["Tengo un perrro.", "Tengo un perro.", {}, 1, "tipeo → Casi"],
  ["Es pero.", "Es perro.", {}, 0, "pero/perro: otra palabra → Mal"],
  ["Es muy grande la casa.", "La casa es muy grande.", {}, 1, "otro orden → Casi"],
  ["Я читаю книгу", "Я читаю книгу.", { lengua: "ru" }, 2, "ruso exacto"],
  ["я читаю книгу", "Я чита́ю кни́гу.", { lengua: "ru" }, 2, "ruso sin acentos ni mayúsculas"],
  ["Я читаю кнгу", "Я читаю книгу.", { lengua: "ru" }, 1, "ruso tipeo → Casi"],
  ["Она красивая", "Она красивая.", { lengua: "ru" }, 2, "ruso"],
  ["Vosotros sois", "Vosotros sois.", {}, 2, "vosotros"],
  ["Ustedes son", "Vosotros sois.", {}, 2, "ustedes son por vosotros sois → Bien con nota"],
  ["Ustedes son", "Vosotros sois.", { variantes: "mal" }, 0, "ustedes son en un ejercicio de vosotros → Mal"]
];
let mal = 0;
casos.forEach(([resp, esp, op, res, que]) => {
  const r = ctx.azCorregirEs(resp, esp, op);
  const ok = r.resultado === res;
  if (!ok) mal++;
  console.log((ok ? "✓ " : "✗ ") + que + ": «" + resp + "» → " + R[r.resultado] + (ok ? "" : " (esperado " + R[res] + ")") + " · " + r.resumen + " " + r.palabras.filter(p => p.motivo).map(p => p.motivo).concat(r.notas).join(" | "));
});
console.log(mal ? "✗ " + mal + " casos fallan" : "✓ Todos los casos dan lo decidido.");
process.exitCode = mal ? 1 : 0;
