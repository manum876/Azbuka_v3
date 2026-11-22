// 2 · Prácticas: en cada unidad arma sesiones con UN ejercicio de cada tipo (forma + tipo) y las
// responde de punta a punta (elige, escribe «мама», ordena, une…). Revisa que ningún ejercicio
// se trabe, que no haya errores de JavaScript y que «📖 Repasar la regla» abra la teoría.
// Uso: node practicas.js            (unidades 1 a 13)
//      node practicas.js 8          (solo la 8)    ·   node practicas.js 5-9
//      DIR=abece node practicas.js  (Abecé, 22/11/2026: abece-N.html, botones en ruso, responde «casa»)
const { BASE, servir, navegador } = require('./comun');
const S = 5; // ejercicios por sesión (algunos módulos piden pocos)
const AB = process.env.DIR === 'abece';
const PAG = AB ? 'abece-' : 'azbuka-', DATA = AB ? 'data-unidad-es-' : 'data-unidad-', VAR = AB ? 'UNIDAD_ES_' : 'UNIDAD_', FN = AB ? 'ejerciciosUnidadEs' : 'ejerciciosUnidad';
const RESPUESTA = AB ? 'casa' : 'мама';
/* Los botones, en las dos lenguas de la app */
const T = { sig: /^(Siguiente|Ver resultado|Дальше|Результат)$/, regla: /^📖 (Repasar la regla|Повторить правило)$/, volver: /(Volver al ejercicio|Вернуться к упражнению)/,
  seguir: /^(Ver (una|la) respuesta y seguir|Показать ответ и продолжить)$/, comprobar: /^(Comprobar|Enviar|Проверить|Отправить)$/,
  go: /^(Siguiente paso|Siguiente pregunta|Comprobar|Enviar|Следующий шаг|Следующий вопрос|Проверить|Отправить)$/,
  no: /^(▶|■|💡 Pista|💡 Подсказка|Mostrar el texto|Показать текст|Intentar de nuevo|Попробовать ещё раз|＋)/, empezar: /^(Empezar|Начать)$/, resultado: /^(RESULTADO|РЕЗУЛЬТАТ)/i };
const arg = (process.argv[2] || '1-13').split('-').map(Number); const DESDE = arg[0], HASTA = arg[1] || arg[0];
(async () => {
  const srv = await servir(); const b = await navegador(); const problemas = []; let totalEj = 0;
  for (let n = DESDE; n <= HASTA; n++) {
    const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
    if (AB) await ctx.addInitScript(() => localStorage.setItem('az_direccion', JSON.stringify('abece')));
    const p0 = await ctx.newPage(); await p0.goto(BASE + PAG + n + '.html', { waitUntil: 'networkidle' });
    const mods = await p0.evaluate(([n, VAR]) => window[VAR + n].modulos.map(m => ({ id: m.id, n: m.n })), [n, VAR]);
    const BOTON = /^(Practicar (este módulo|este grupo|la pronunciación)|Практиковать (этот модуль|эту группу|произношение|ударение))$/;
    let M = null;
    for (const m of mods) { await p0.goto(BASE + PAG + n + '.html?m=' + m.id, { waitUntil: 'networkidle' });
      if (await p0.getByRole('button', { name: BOTON }).count()) { M = m; break; } }
    await p0.close();
    if (!M) { problemas.push('Unidad ' + n + ': ningún módulo con «Practicar»'); await ctx.close(); continue; }
    // Se reemplaza el banco por un ejercicio de cada tipo, todos en el módulo M (solo en esta prueba).
    await ctx.route('**/data/' + DATA + n + '.js', async route => {
      const r = await route.fetch(); let body = await r.text();
      body += `\n;(function(){var o=${FN}${n};${FN}${n}=function(){var B=o(),visto={},sel=[];B.forEach(function(e){if(e.ampliacion)return;var k=e.forma+'|'+e.tipo;if(!visto[k]){visto[k]=1;sel.push(e)}});window.__TOTAL=sel.length;var c=window.__TANDA||0;return sel.slice(c*${S},c*${S}+${S}).map(function(e){return Object.assign({},e,{modulo:${M.n},dificultad:1,grupo:e.id})})}})();`;
      route.fulfill({ response: r, body });
    });
    let tanda = 0, total = 1e9, ejU = 0, reglas = 0, reglasOk = 0;
    while (tanda * S < total) {
      const p = await ctx.newPage(); const errs = [];
      p.on('pageerror', e => errs.push(e.message.slice(0, 160)));
      await p.addInitScript(c => { window.__TANDA = c; }, tanda);
      await p.goto(BASE + PAG + n + '.html?m=' + M.id, { waitUntil: 'networkidle' });
      total = await p.evaluate(() => window.__TOTAL);
      await p.getByRole('button', { name: BOTON }).click();
      await p.waitForTimeout(300);
      const emp = p.getByRole('button', { name: T.empezar }); if (await emp.count()) await emp.click();
      for (let k = 0; k < S + 2; k++) {
        await p.waitForTimeout(250);
        const kick = await p.locator('.pr-kick').first().innerText().catch(() => null);
        if (!kick || T.resultado.test(kick)) break;
        const pide = await p.locator('.pr-pide').first().innerText().catch(() => '');
        let done = false, ejercicios = 0, regla = 0, reglaOk = 0;
    for(let it=0;it<150 && !done;it++){
       if(T.resultado.test(kick)) {done=true;break;}
       const sig=p.locator('button.pr-btn',{hasText:T.sig});
       if(await sig.count() && await sig.first().isEnabled()){
         const rr=p.getByRole('button',{name:T.regla});
         if(await rr.count()){regla++; await rr.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(250);
           const v=p.getByRole('button',{name:T.volver}); if(await v.count()){reglaOk++; await v.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(150);} }
         await sig.first().click({timeout:4000}).catch(()=>{}); done=true; ejercicios++; break;}
       const seguir=p.getByRole('button',{name:T.seguir});
       if(await seguir.count()){await seguir.first().click({timeout:4000}).catch(()=>{});continue;}
       const inp=p.locator('.pr-card input:visible, .pr-card textarea:visible').first();
       if(await inp.count() && await inp.isEditable() && !(await inp.inputValue())){await inp.fill(RESPUESTA);
          const cb=p.locator('.pr-card button:enabled',{hasText:T.comprobar}); if(await cb.count()){await cb.first().click({timeout:4000}).catch(()=>{});} else await inp.press('Enter'); await p.waitForTimeout(/^(Chat|Чат)/.test(pide)?900:150); continue;}
       const go=p.locator('.pr-card button:enabled',{hasText:T.go});
       if(await go.count()){await go.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(150); continue;}
       const fich=p.locator('.pr-card .pr-fichas button:enabled');
       if(await fich.count()){await fich.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(100); continue;}
       const ops=p.locator('.pr-card button.pr-op:enabled:not(.hecho):not(.ok), .pr-card button.pr-tw:enabled');
       const no=await ops.count();
       if(no){await ops.nth(Math.floor(Math.random()*no)).click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(120); continue;}
       const cand=p.locator('.pr-card button:enabled:not([data-clk])').filter({hasNotText:T.no});
       if(await cand.count()){const el=cand.first(); await el.evaluate(e=>e.setAttribute('data-clk','1')); await el.click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(120); continue;}
       break;
      }
          ejU += ejercicios; reglas += regla; reglasOk += reglaOk;
        if (!done) { problemas.push('Unidad ' + n + ' · se trabó: ' + (kick + ' | ' + pide).slice(0, 140)); await p.screenshot({ path: require('os').tmpdir() + '/azbuka-trabado-' + n + '-' + tanda + '.png' }); break; }
      }
      for (const e of new Set(errs)) problemas.push('Unidad ' + n + ' · JS: ' + e);
      await p.close(); tanda++;
    }
    totalEj += ejU;
    console.log('Unidad ' + n + ': ' + ejU + ' de ' + total + ' tipos respondidos · «Repasar la regla» ' + reglasOk + '/' + reglas);
    await ctx.close();
  }
  console.log('\nEjercicios respondidos: ' + totalEj + '. (Si una sesión sale con uno menos, puede ser un tipo que la mezcla no usa a propósito.)');
  if (!problemas.length) console.log('✓ Ningún ejercicio trabado ni errores.');
  else { console.log('✗ Problemas:'); problemas.forEach(x => console.log('  ' + x)); console.log('  (capturas en ' + require('os').tmpdir() + ')'); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
