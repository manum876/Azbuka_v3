// 1 · Recorrido: abre todas las pantallas (inicio, módulos de apoyo, las 14 unidades y cada módulo)
// a 390 × 844 y revisa errores de JavaScript, archivos que faltan y scroll horizontal.
// Además revisa el banco de cada unidad: ids repetidas, la correcta entre las opciones,
// que cada `regla` exista y que cada tipo esté en la mezcla.
const { BASE, servir, navegador } = require('./comun');
const PAGINAS = ['index.html', 'azbuka-index-1.html', 'ficha.html', 'ficha.html?id=CMR-00058', 'ficha.html?tema=comida',
  'alfabeto.html', 'alfabeto.html?mano=Б', 'dialogos.html', 'dialogos.html?id=DLG-001', 'dialogos.html?v=frases',
  'dialogos.html?frase=FRS-001', 'lecturas.html', 'lecturas.html?id=LEC-barcelona', 'lecturas.html?id=LEC-transsib', 'masha.html', 'dialogos.html?cul=CUL-001', 'verbos.html', 'verbos.html?id=CMR-00058',
  'casos.html', 'casos.html?id=CMR-00230', 'casos.html?guia=genitivo', 'cuaderno.html', 'ajustes.html'];
(async () => {
  const srv = await servir(); const b = await navegador();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
  const problemas = []; let n = 0;
  async function visitar(url, extra) {
    const p = await ctx.newPage(); const errs = [];
    p.on('pageerror', e => errs.push('JS: ' + e.message.slice(0, 200)));
    p.on('response', r => { if (r.status() >= 400 && !r.url().endsWith('favicon.ico') && r.url().indexOf('/Azbuka_voces/') < 0 /* las voces viven en otro repo (Contexto §6.4) */) errs.push('Falta ' + r.url().replace(BASE, '')); });
    await p.goto(BASE + url, { waitUntil: 'networkidle', timeout: 60000 }).catch(e => errs.push('No abre: ' + e.message.slice(0, 80)));
    await p.waitForTimeout(400);
    const sw = await p.evaluate(() => document.documentElement.scrollWidth).catch(() => -1);
    if (sw > 390) errs.push('Scroll horizontal: ' + sw + 'px');
    let ex = null; if (extra) ex = await p.evaluate(extra).catch(e => ({ error: e.message }));
    n++; if (errs.length) problemas.push([url, [...new Set(errs)]]);
    await p.close(); return ex;
  }
  for (const u of PAGINAS) await visitar(u);
  for (let u = 1; u <= 14; u++) {
    const info = await visitar('azbuka-' + u + '.html', `(() => {
      const U = window['UNIDAD_${u}'], f = window['ejerciciosUnidad${u}'], mz = window['U${u}_MEZCLA'];
      const mods = U ? U.modulos.map(m => m.id) : []; const banco = [];
      if (f) { const B = f(), ids = {};
        for (const e of B) {
          if (ids[e.id]) banco.push('id repetida ' + e.id); ids[e.id] = 1;
          if (e.opciones && typeof e.correcta === 'string' && !e.opciones.includes(e.correcta)) banco.push('la correcta no está en las opciones: ' + e.id);
          if (e.regla && window.azRegla && !window.azRegla(e.regla)) banco.push('regla inexistente: ' + e.id + ' → ' + e.regla);
        }
        if (mz) { const fuera = [...new Set(B.filter(e => !e.ampliacion && !(e.tipo in mz)).map(e => e.tipo))]; if (fuera.length) banco.push('tipos fuera de la mezcla (a propósito si son del proyecto): ' + fuera.join(', ')); }
        banco.unshift(B.length + ' ejercicios');
      }
      return { mods, banco };
    })()`);
    if (info && info.banco && info.banco.length) console.log('Unidad ' + u + ' · ' + info.banco.join(' · '));
    if (info && info.mods) for (const m of info.mods) await visitar('azbuka-' + u + '.html?m=' + m);
  }
  console.log('\nPantallas abiertas: ' + n);
  if (!problemas.length) console.log('✓ Sin errores ni scroll horizontal.');
  else { console.log('✗ Problemas:'); for (const [u, e] of problemas) console.log('  ' + u + '\n    ' + e.join('\n    ')); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
