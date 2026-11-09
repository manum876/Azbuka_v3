// 8 · Tamaño de letra (06/11/2026, manual de estilo §1.6): abre cada pantalla de Azbuka y de Abecé a
// 390 × 844 con «Normal», «Grande» (×1,12) y «Muy grande» (×1,2) y compara. Es error lo que en Normal
// está bien y con la letra más grande se rompe:
//   · scroll horizontal o algo que se sale del ancho sin poder desplazarse;
//   · un botón o chip con una etiqueta corta (hasta 20 caracteres) partida en dos renglones.
// Es aviso (no error) una fila de botones que se acomoda en dos filas: el manual lo permite si se
// acomoda por grupos (pares de chips, botones que se apilan), nunca partiendo el texto.
// No cuentan las celdas de tabla (palabras tocables) ni los botones a todo el ancho con texto largo.
// Uso: node herramientas/verificar/tamanos.js            (Azbuka y Abecé)
//      node herramientas/verificar/tamanos.js azbuka     (o abece)
const { BASE, servir, navegador } = require('./comun');
const FACTORES = [1.12, 1.2];
const SOLO = process.argv[2];
const MEDIR = () => {
  const W = innerWidth, errores = [], avisos = [];
  if (document.documentElement.scrollWidth > W + 1) errores.push('scroll horizontal ' + document.documentElement.scrollWidth + 'px');
  for (const e of document.querySelectorAll('main *, body > div *')) {
    const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden' || e.closest('svg')) continue;
    const r = e.getBoundingClientRect(); if (!r.width) continue;
    if (r.right > W + 1) {
      let a = e.parentElement, desplaza = false;
      while (a) { if (/(auto|scroll)/.test(getComputedStyle(a).overflowX)) { desplaza = true; break; } a = a.parentElement; }
      if (!desplaza) errores.push('se sale: «' + (e.innerText || '').slice(0, 30).replace(/\n/g, ' ') + '»');
    }
  }
  // Solo controles: chips y botones que comparten una fila con otros. Las celdas de tabla (palabras
  // tocables) y los botones a todo el ancho con un texto largo («Siguiente: …») pueden ocupar dos renglones.
  for (const b of document.querySelectorAll('button, .pair-btn')) {
    const t = (b.textContent || '').trim(); if (!t || t.length > 40 || !b.offsetWidth) continue;
    if (b.closest('td, th, table')) continue;
    if (t.length > 20) continue;   // etiquetas largas (opciones, «Siguiente: …»): pueden ocupar dos renglones
    const fila = b.parentElement, hermanos = fila ? [...fila.children].filter(k => k !== b && (k.tagName === 'BUTTON' || k.classList.contains('pair-btn')) && k.offsetWidth) : [];
    if (!hermanos.length && b.getBoundingClientRect().width > innerWidth * 0.6) continue;
    const rg = document.createRange(); rg.selectNodeContents(b);
    const lineas = new Set([...rg.getClientRects()].map(x => Math.round(x.top)));
    if (lineas.size > 1 && b.getBoundingClientRect().height < 120) errores.push('texto partido en un botón: «' + t.slice(0, 30) + '»');
  }
  for (const p of document.querySelectorAll('*')) {
    const cs = getComputedStyle(p); if (cs.display !== 'flex' || cs.flexDirection !== 'row') continue;
    const hijos = [...p.children].filter(k => k.tagName === 'BUTTON' && k.offsetWidth);
    if (hijos.length > 1 && new Set(hijos.map(k => Math.round(k.getBoundingClientRect().top))).size > 1)
      avisos.push('fila en dos: ' + hijos.map(k => k.textContent.trim().slice(0, 14)).join(' | '));
  }
  return { errores: [...new Set(errores)].slice(0, 4), avisos: [...new Set(avisos)] };
};
(async () => {
  const srv = await servir(); const b = await navegador();
  const problemas = [], avisos = []; let n = 0;
  async function direccion(dir) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block', hasTouch: true, isMobile: true });
    await ctx.addInitScript(dir => {
      try {
        const hoy = new Date().toISOString().slice(0, 10);
        localStorage.setItem('az_hoy', JSON.stringify({ mostrado: hoy })); localStorage.setItem('az_hoy_es', JSON.stringify({ mostrado: hoy }));
        localStorage.setItem('az_avisos', JSON.stringify({ ultimoAviso: hoy, instalarNunca: true }));
        if (dir === 'abece') { localStorage.setItem('az_direccion', '"abece"'); localStorage.setItem('az_prueba', '"si"'); localStorage.setItem('az_cuenta_rol', '"admin"'); }
      } catch (e) {}
    }, dir);
    const p = await ctx.newPage();
    async function revisar(url) {
      await p.goto(BASE + url, { waitUntil: 'networkidle' }); await p.waitForTimeout(250); n++;
      await p.evaluate(() => document.documentElement.style.setProperty('--az-escala', '1'));
      const base = await p.evaluate(MEDIR);
      for (const f of FACTORES) {
        await p.evaluate(f => document.documentElement.style.setProperty('--az-escala', String(f)), f); await p.waitForTimeout(150);
        const r = await p.evaluate(MEDIR);
        const err = r.errores.filter(x => !base.errores.includes(x)), av = r.avisos.filter(x => !base.avisos.includes(x));
        if (err.length) problemas.push([dir + ' · ' + url + ' · ×' + f, err]);
        if (av.length) avisos.push([dir + ' · ' + url + ' · ×' + f, av]);
      }
    }
    const fijas = ['index.html', 'azbuka-index-1.html', 'ficha.html', 'alfabeto.html', 'alfabeto.html?mano=1', 'verbos.html', 'cuaderno.html', 'ajustes.html', 'repaso.html'];
    const az = ['ficha.html?id=CMR-00230', 'verbos.html?id=CMR-00058', 'casos.html', 'casos.html?id=CMR-00230', 'dialogos.html', 'dialogos.html?id=DLG-001', 'lecturas.html', 'lecturas.html?id=LEC-zima', 'masha.html'];
    const ab = ['gramatica.html', 'ficha.html?id=ESP-00100', 'verbos.html?id=ESP-00010', 'alfabeto.html?tilde=canción'];
    for (const u of fijas.concat(dir === 'abece' ? ab : az)) await revisar(u);
    const pref = dir === 'abece' ? 'abece-' : 'azbuka-', glob = dir === 'abece' ? 'UNIDAD_ES_' : 'UNIDAD_';
    const unidades = await p.evaluate(() => (typeof AZ_UNITS !== 'undefined' ? AZ_UNITS : []).map(u => u.href).filter(Boolean));
    for (const href of unidades) {
      if (!href.startsWith(pref)) continue;
      await revisar(href);
      const num = href.match(/(\d+)\.html/)[1];
      const mods = await p.evaluate(k => window[k] ? window[k].modulos.map(m => m.id) : [], glob + num);
      for (const m of mods) await revisar(href + '?m=' + m);
    }
    await ctx.close();
  }
  for (const d of ['azbuka', 'abece']) if (!SOLO || SOLO === d) await direccion(d);
  console.log('Pantallas revisadas en Normal, Grande y Muy grande: ' + n);
  if (avisos.length) { console.log('Avisos (filas que se acomodan en dos; revisar que sea por grupos):'); avisos.forEach(([u, r]) => console.log('  ' + u + ': ' + r.join(' · '))); }
  if (!problemas.length) console.log('✓ Nada se rompe con la letra más grande.');
  else { console.log('✗ Problemas:'); problemas.forEach(([u, r]) => console.log('  ' + u + ': ' + r.join(' · '))); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
