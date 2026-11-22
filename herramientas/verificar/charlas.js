/* ============================================================
   CHARLAS.JS — Verificador de las charlas guionadas (22/11/2026)
   «Hablar con Masha» (Azbuka, masha.html) y «Болтаем с Лусией»
   (Abecé, lucia.html), las dos con el motor js/charla.js.
   Recorre los 72 temas de cada una con las ideas de respuesta y
   con mensajes de prueba (cirílico en Lucía, «¿qué significa…?»,
   «¿y tú?», «no entiendo», el nombre, el país, algo sin sentido) y
   comprueba que:
   · la página carga sin errores;
   · cada tema llega a la despedida;
   · ninguna línea queda con una plantilla sin llenar ({nombre}, {x}…),
     ni en el texto ni en la pronunciación;
   · «No entiendo» / «Не понимаю» nunca se toma como un «no».
   Uso: node charlas.js   (desde herramientas/verificar)
   ============================================================ */
const { servir, navegador } = require("./comun.js");

const CASOS = [
  { pagina: "masha.html", pref: "masha", dir: "azbuka", K: "ru", nombre: "Иван",
    pruebas: ["Что значит дом?", "А ты?", "hola", "Как по-русски casa?", "фывапр", "Где ты живёшь?", "Не понимаю", "Меня зовут Иван", "Я из Аргентины"],
    noEntiendo: "Не понимаю" },
  { pagina: "lucia.html", pref: "lucia", dir: "abece", K: "es", nombre: "Iván",
    pruebas: ["¿Qué significa casa?", "¿Y tú?", "привет", "¿Cómo se dice дом en español?", "xqzw", "¿Dónde vives?", "No entiendo", "Me llamo Iván", "Soy de Argentina"],
    noEntiendo: "No entiendo" },
];

(async () => {
  const srv = await servir(); const b = await navegador();
  let fallas = 0;
  for (const C of CASOS) {
    const p = await b.newPage({ viewport: { width: 390, height: 812 } });
    const errores = [];
    p.on("pageerror", e => errores.push(e.message));
    await p.addInitScript(d => localStorage.setItem("az_direccion", JSON.stringify(d)), C.dir);
    await p.goto("http://localhost:8765/" + C.pagina); await p.waitForTimeout(2000);
    const r = await p.evaluate((C) => {
      const D = (0, eval)(C.pref === "masha" ? "MASHA" : "LUCIA");
      const A = window[C.pref + "Armar"], E = window[C.pref + "Empezar"], P = window[C.pref + "Procesar"];
      const malos = [], sinFin = [], noComoNo = [];
      const hueco = /\{[a-z_]+\}/;
      const mira = (tema, L) => L.forEach(l => { [l[C.K], l.tr, l.voz].forEach(t => { if (typeof t === "string" && hueco.test(t)) malos.push(tema + ": " + t); }); });
      D.temas.forEach((T, ti) => {
        const X = A(T, T.desde);
        let q = E(X, {}, {}); mira(T.id, q.out); let st = q.st;
        for (let k = 0; k < 40 && !st.fin; k++) {
          const n = X.NODOS[st.nodo];
          let inp;
          if (k % 4 === 1) inp = C.pruebas[(k + ti) % C.pruebas.length];
          else { const ideas = n && n.ideas && n.ideas.length ? n.ideas : null; inp = ideas ? ideas[(k + ti) % ideas.length][C.K] : C.pruebas[k % C.pruebas.length]; }
          inp = String(inp).replace(/…/g, " " + C.nombre).replace(/\{[^{}]*\/([^{}]*)\}/g, "$1").replace(/\s+/g, " ").trim();
          const antes = st.nodo;
          q = P(X, st, inp); st = q.st; mira(T.id, q.out);
          const propia = X.NODOS[antes] && (X.NODOS[antes].ramas || []).some(r => (r.claves || []).some(c => /entiend|понима|repet|повтор/.test(c)));   /* el paso lo resuelve a propósito */
          if (inp === C.noEntiendo && !propia && antes !== "FIN" && X.NODOS[antes] && st.nodo !== antes && !st.fin) noComoNo.push(T.id + " (" + antes + " → " + st.nodo + ")");
        }
        if (!st.fin) sinFin.push(T.id);
      });
      return { temas: D.temas.length, malos, sinFin, noComoNo };
    }, C);
    const ok = (cond, txt) => { console.log((cond ? "✓ " : "✗ ") + txt); if (!cond) fallas++; };
    console.log("— " + C.pagina);
    ok(!errores.length, "la página carga sin errores" + (errores.length ? ": " + errores[0] : ""));
    ok(r.temas === 72, r.temas + " temas (tienen que ser 72)");
    ok(!r.sinFin.length, "todos los temas llegan a la despedida" + (r.sinFin.length ? ": faltan " + r.sinFin.join(", ") : ""));
    ok(!r.malos.length, "ninguna plantilla sin llenar" + (r.malos.length ? ": " + r.malos.slice(0, 3).join(" | ") : ""));
    ok(!r.noComoNo.length, "«" + C.noEntiendo + "» repite y no avanza" + (r.noComoNo.length ? ": " + r.noComoNo.slice(0, 3).join(", ") : ""));
    await p.close();
  }
  await b.close(); srv.close();
  console.log(fallas ? "✗ " + fallas + " problemas" : "✓ Todo bien");
  process.exit(fallas ? 1 : 0);
})();
