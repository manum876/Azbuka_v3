// Cobertura de las voces (15/10/2026): arma la lista de herramientas/voces/inventario.js, la usa como
// índice de prueba, abre cada módulo de cada unidad (y algunos diálogos y Alfabeto), toca todos los ▶
// y lista los textos que dice la app y que no están en la lista (sonarían con la voz del teléfono).
// Uso: node voz-cobertura.js  (no es parte de correr-todo.sh)
const fs = require("fs"), path = require("path"), os = require("os"), { execFileSync } = require("child_process");
const { RAIZ, BASE, servir, navegador } = require("./comun.js");
(async () => {
  const tmp = path.join(os.tmpdir(), "az-lista-voces.json");
  execFileSync("node", [path.join(RAIZ, "herramientas/voces/inventario.js"), RAIZ, tmp, "todo"], { stdio: "inherit" });
  const voces = {}; JSON.parse(fs.readFileSync(tmp, "utf8")).textos.forEach(x => { (voces[x.v] = voces[x.v] || []).push(x.k); });
  const dir = path.join(RAIZ, "Azbuka_voces", "v1"), yaHabia = fs.existsSync(path.join(RAIZ, "Azbuka_voces"));
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "indice.json"), JSON.stringify({ v: 1, ext: ".m4a", voces: Object.fromEntries(Object.entries(voces).map(([v, l]) => [v, l.join(" ")])) }));
  const srv = await servir(); const b = await navegador();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.addInitScript(() => { try { localStorage.setItem("az_theme", JSON.stringify("dark")); } catch (e) {} });
  const faltan = new Map(); let total = 0;
  const p = await ctx.newPage();
  const visitar = async (url) => {
    await p.goto(BASE + url); await p.waitForTimeout(900);
    await p.evaluate(() => { window.__f = []; window.__n = 0; const o = window.azVozDecir;
      window.azVozDecir = function (t, texto, quien, ...r) { window.__n++; if (!azVozUrl(texto, quien)) window.__f.push([texto, quien || ""]); return o.call(this, t, texto, quien, ...r); }; });
    const btns = await p.$$("button.play, button.grp-w, .u-des-p");
    for (const x of btns.slice(0, 60)) { try { await x.click({ timeout: 300, force: true }); } catch (e) {} }
    await p.waitForTimeout(200);
    const r = await p.evaluate(() => ({ f: window.__f || [], n: window.__n || 0 })).catch(() => ({ f: [], n: 0 }));
    total += r.n; r.f.forEach(([t, q]) => faltan.set(t + " · " + q, url));
  };
  for (let n = 1; n <= 13; n++) {
    await p.goto(BASE + "azbuka-" + n + ".html"); await p.waitForTimeout(700);
    const mods = await p.evaluate(n => { const U = window["UNIDAD_" + n]; return U ? U.modulos.map(m => m.id) : []; }, n);
    for (const m of mods) await visitar("azbuka-" + n + ".html?m=" + m);
  }
  for (const id of ["DLG-001", "DLG-010", "DLG-033", "DLG-034"]) await visitar("dialogos.html?id=" + id);
  await visitar("alfabeto.html");
  for (const u of ["ficha.html?id=CMR-00230", "casos.html?id=CMR-00230", "verbos.html?id=CMR-00332", "casos.html?id=CMR-00058", "verbos.html?id=CMR-00006"]) await visitar(u);
  // la cola de segundo plano de Casos y Verbos (azVozQuiero): cuántas formas en pantalla tienen audio
  await p.goto(BASE + "verbos.html?id=CMR-00332"); await p.waitForTimeout(1200);
  console.log("Cola de Verbos:", await p.evaluate(() => azVozEnCola.size + " formas en pantalla, " + [...azVozEnCola].filter(k => azVozUrl(k.split("|")[1], k.split("|")[0] || undefined)).length + " con audio"));
  console.log("Textos dichos:", total, "· sin audio:", faltan.size);
  [...faltan].slice(0, 40).forEach(([k, u]) => console.log("  ", k, "←", u));
  await b.close(); srv.close();
  if (!yaHabia) fs.rmSync(path.join(RAIZ, "Azbuka_voces"), { recursive: true, force: true });
})();
