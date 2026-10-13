// 4 · Sin conexión: comprueba que todo lo de AZ_PRECACHE (sw.js) exista, que nada de lo que piden
// las páginas falte en la lista, y que después de instalar el service worker las pantallas
// principales abran sin red.
const fs = require('fs'), path = require('path');
const { RAIZ, BASE, servir, navegador } = require('./comun');
(async () => {
  const problemas = [];
  const sw = fs.readFileSync(path.join(RAIZ, 'sw.js'), 'utf8');
  const pre = new Set((sw.match(/AZ_PRECACHE\s*=\s*\[([\s\S]*?)\]/)[1].match(/"([^"]+)"/g) || []).map(s => s.slice(1, -1)));
  for (const f of pre) if (f !== './' && !fs.existsSync(path.join(RAIZ, f))) problemas.push('AZ_PRECACHE nombra un archivo que no existe: ' + f);
  const refs = new Set();
  for (const h of fs.readdirSync(RAIZ).filter(f => f.endsWith('.html'))) {
    if (h === 'charla.html') continue; // maqueta, fuera de la app
    const s = fs.readFileSync(path.join(RAIZ, h), 'utf8');
    for (const m of s.matchAll(/(?:src|href)="([^"#?:]+\.(?:js|css|png|woff2|ttf|webmanifest))"/g)) refs.add(m[1]);
    refs.add(h);
  }
  for (const r of refs) if (!pre.has(r)) problemas.push('Lo usa una página y no está en AZ_PRECACHE: ' + r);
  console.log('AZ_PRECACHE: ' + pre.size + ' archivos');
  const srv = await servir(); const b = await navegador();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 } });
  const p = await ctx.newPage();
  await p.goto(BASE + 'index.html', { waitUntil: 'networkidle' });
  await p.evaluate(async () => { await navigator.serviceWorker.ready; });
  let guardados = 0;
  for (let i = 0; i < 90; i++) {
    guardados = await p.evaluate(async () => { let t = 0; for (const k of await caches.keys()) t += (await (await caches.open(k)).keys()).length; return t; });
    if (guardados >= pre.size) break; await p.waitForTimeout(1000);
  }
  console.log('Guardados en el teléfono (simulado): ' + guardados);
  if (guardados < pre.size) problemas.push('El service worker guardó ' + guardados + ' de ' + pre.size);
  await ctx.setOffline(true);
  for (const u of ['index.html', 'azbuka-index-1.html', 'azbuka-1.html', 'azbuka-8.html?m=u8m7', 'azbuka-13.html', 'azbuka-14.html', 'ficha.html?id=CMR-00058', 'verbos.html?id=CMR-00058', 'casos.html?id=CMR-00230', 'dialogos.html?id=DLG-001', 'cuaderno.html', 'alfabeto.html', 'ajustes.html']) {
    const q = await ctx.newPage(); const errs = []; q.on('pageerror', e => errs.push(e.message.slice(0, 100)));
    try { await q.goto(BASE + u, { waitUntil: 'load', timeout: 20000 }); await q.waitForTimeout(1200); } catch (e) { errs.push('no abre'); }
    const largo = await q.evaluate(() => (document.querySelector('main') || document.body).innerText.length).catch(() => 0);
    if (errs.length || largo < 50) problemas.push('Sin conexión, ' + u + ': ' + (errs.join('; ') || 'pantalla vacía'));
    await q.close();
  }
  if (!problemas.length) console.log('✓ Todo funciona sin conexión.');
  else { console.log('✗ Problemas:'); problemas.forEach(x => console.log('  ' + x)); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
