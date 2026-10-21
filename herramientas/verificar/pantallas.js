// 5 · Pantallas chicas y tema claro: abre todas las pantallas a 375 × 667 (iPhone SE) en tema claro
// y busca scroll horizontal, errores y contenido cortado (algo que se sale del ancho sin poder
// desplazarse). Los dibujos del mapa que quedan fuera del recuadro no cuentan.
const { BASE, servir, navegador } = require('./comun');
(async () => {
  const srv = await servir(); const b = await navegador();
  const ctx = await b.newContext({ viewport: { width: 375, height: 667 }, serviceWorkers: 'block' });
  await ctx.addInitScript(() => { try { localStorage.setItem('az_theme', '"light"'); } catch (e) {} });
  const p = await ctx.newPage(); const problemas = []; let n = 0; let errs = [];
  p.on('pageerror', e => errs.push(e.message.slice(0, 120)));
  async function revisar(url) {
    errs = [];
    await p.goto(BASE + url, { waitUntil: 'networkidle' }); await p.waitForTimeout(200); n++;
    const r = await p.evaluate(() => {
      const W = innerWidth, res = [];
      if (document.documentElement.scrollWidth > W) res.push('scroll horizontal ' + document.documentElement.scrollWidth + 'px');
      for (const e of document.querySelectorAll('main *')) {
        if (e.closest('svg')) continue;
        const s = getComputedStyle(e); if (s.display === 'none' || s.visibility === 'hidden') continue;
        const rc = e.getBoundingClientRect(); if (!rc.width) continue;
        if (rc.right > W + 1 || rc.left < -1) {
          let a = e.parentElement, desplaza = false;
          while (a) { if (/(auto|scroll)/.test(getComputedStyle(a).overflowX)) { desplaza = true; break; } a = a.parentElement; }
          if (!desplaza) res.push('se sale: <' + e.tagName.toLowerCase() + '> «' + (e.innerText || '').slice(0, 30).replace(/\n/g, ' ') + '»');
        }
      }
      return res.slice(0, 3);
    });
    if (r.length || errs.length) problemas.push([url, r.concat(errs.map(x => 'JS: ' + x))]);
  }
  const fijas = ['index.html', 'azbuka-index-1.html', 'ficha.html', 'ficha.html?id=CMR-00058', 'verbos.html?id=CMR-00058', 'casos.html?id=CMR-00230', 'alfabeto.html', 'dialogos.html?id=DLG-001', 'lecturas.html', 'lecturas.html?id=LEC-zima', 'masha.html', 'cuaderno.html', 'ajustes.html'];
  for (const u of fijas) await revisar(u);
  for (let u = 1; u <= 14; u++) {
    await revisar('azbuka-' + u + '.html');
    const mods = await p.evaluate(u => window['UNIDAD_' + u] ? window['UNIDAD_' + u].modulos.map(m => m.id) : [], u);
    for (const m of mods) await revisar('azbuka-' + u + '.html?m=' + m);
  }
  console.log('Pantallas revisadas a 375 × 667 en tema claro: ' + n);
  if (!problemas.length) console.log('✓ Nada cortado ni scroll horizontal.');
  else { console.log('✗ Problemas:'); problemas.forEach(([u, r]) => console.log('  ' + u + ': ' + r.join(' · '))); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
