// 3 · Examen final: rinde los seis bloques (respuestas cualquiera), revisa que no se traben,
// que el puntaje quede guardado y que «Qué repasar» abra reglas de otras unidades.
const { BASE, servir, navegador } = require('./comun');
(async () => {
  const srv = await servir(); const b = await navegador();
  const ctx = await b.newContext({ viewport: { width: 390, height: 844 }, serviceWorkers: 'block' });
  const problemas = [];
  for (const bl of ['lectura', 'audio', 'gramatica', 'lexica', 'comunicacion']) {
    const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message.slice(0, 160)));
    await p.goto(BASE + 'azbuka-14.html?b=' + bl, { waitUntil: 'networkidle' });
    await p.getByRole('button', { name: 'Empezar el bloque' }).click({ timeout: 5000 }).catch(() => problemas.push(bl + ': no aparece «Empezar el bloque»'));
    await p.waitForTimeout(300);
    const emp = p.getByRole('button', { name: 'Empezar', exact: true }); if (await emp.count()) await emp.click();
    let ejercicios = 0, regla = 0, reglaOk = 0;
    for (let k = 0; k < 80; k++) {
      await p.waitForTimeout(200);
      const kick = await p.locator('.pr-kick').first().innerText().catch(() => null);
      if (!kick || /^RESULTADO/i.test(kick)) break;
      const pide = await p.locator('.pr-pide').first().innerText().catch(() => '');
      let done = false;
    for(let it=0;it<150 && !done;it++){
     if(/^RESULTADO/i.test(kick)) {done=true;break;}
     const sig=p.locator('button.pr-btn',{hasText:/^(Siguiente|Ver resultado)$/});
     if(await sig.count() && await sig.first().isEnabled()){
       const rr=p.getByRole('button',{name:'📖 Repasar la regla'});
       if(await rr.count()){regla++; await rr.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(250);
         const v=p.getByRole('button',{name:/Volver al ejercicio/}); if(await v.count()){reglaOk++; await v.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(150);} }
       await sig.first().click({timeout:4000}).catch(()=>{}); done=true; ejercicios++; break;}
     const seguir=p.getByRole('button',{name:/^Ver (una|la) respuesta y seguir$/});
     if(await seguir.count()){await seguir.first().click({timeout:4000}).catch(()=>{});continue;}
     const inp=p.locator('.pr-card input:visible, .pr-card textarea:visible').first();
     if(await inp.count() && await inp.isEditable() && !(await inp.inputValue())){await inp.fill('мама');
        const cb=p.locator('.pr-card button:enabled',{hasText:/^(Comprobar|Enviar)$/}); if(await cb.count()){await cb.first().click({timeout:4000}).catch(()=>{});} else await inp.press('Enter'); await p.waitForTimeout(150); continue;}
     const go=p.locator('.pr-card button:enabled',{hasText:/^(Siguiente paso|Siguiente pregunta|Comprobar|Enviar)$/});
     if(await go.count()){await go.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(150); continue;}
     const fich=p.locator('.pr-card .pr-fichas button:enabled');
     if(await fich.count()){await fich.first().click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(100); continue;}
     const ops=p.locator('.pr-card button.pr-op:enabled:not(.hecho):not(.ok), .pr-card button.pr-tw:enabled');
     const no=await ops.count();
     if(no){await ops.nth(Math.floor(Math.random()*no)).click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(120); continue;}
     const cand=p.locator('.pr-card button:enabled:not([data-clk])').filter({hasNotText:/^(▶|■|💡 Pista|Mostrar el texto|Intentar de nuevo|＋)/});
     if(await cand.count()){const el=cand.first(); await el.evaluate(e=>e.setAttribute('data-clk','1')); await el.click({timeout:4000}).catch(()=>{}); await p.waitForTimeout(120); continue;}
     break;
    }
      if (!done) { problemas.push(bl + ' · se trabó: ' + (kick + ' | ' + pide).slice(0, 120)); break; }
    }
    const salir = p.getByRole('button', { name: /Volver al examen|Salir de la práctica/ }); if (await salir.count()) await salir.first().click().catch(() => {});
    await p.waitForTimeout(500);
    let abre = '—';
    const tarjeta = p.locator('button, div[role=button]').filter({ hasText: /^📖/ });
    if (await tarjeta.count()) { await tarjeta.first().click().catch(() => {}); await p.waitForTimeout(1500);
      abre = (await p.getByRole('button', { name: 'Volver al examen' }).count()) ? 'sí' : 'NO'; if (abre === 'NO') problemas.push(bl + ': «Qué repasar» no abrió la regla'); }
    errs.forEach(e => problemas.push(bl + ' · JS: ' + e));
    console.log(bl + ': ' + ejercicios + ' preguntas · «Qué repasar» abre la regla: ' + abre);
    await p.close();
  }
  // Escritura: los dos textos
  const p = await ctx.newPage(); const errs = []; p.on('pageerror', e => errs.push(e.message));
  await p.goto(BASE + 'azbuka-14.html?b=escritura', { waitUntil: 'networkidle' });
  const T = 'Привет, Маша! Я сейчас живу в Москве и работаю в офисе. Вчера я была дома, потому что у меня не было времени. Завтра я буду работать, а потом мы пойдём в кафе. Мне нравится этот город, потому что он красивый. ';
  await p.getByText(/^A · /).first().click().catch(() => problemas.push('escritura: no aparece la opción A'));
  await p.waitForTimeout(300);
  const ta = p.locator('textarea'); const nta = await ta.count();
  if (nta >= 2) { await ta.nth(0).fill(T.repeat(2)); await ta.nth(1).fill(T.repeat(6)); } else problemas.push('escritura: se esperaban 2 cuadros de texto y hay ' + nta);
  for (let i = 0; i < 3; i++) { const x = p.getByRole('button', { name: /^Entregar$/ }); if (await x.count()) { await x.first().click(); await p.waitForTimeout(500); } }
  const cob = ((await p.evaluate(() => document.querySelector('main').innerText)).match(/Cobertura[^\n]*/g) || []).join(' · ');
  console.log('escritura: ' + (cob || 'sin cobertura (¿no se entregó?)'));
  errs.forEach(e => problemas.push('escritura · JS: ' + e));
  await p.goto(BASE + 'azbuka-14.html', { waitUntil: 'networkidle' }); await p.waitForTimeout(400);
  const port = await p.evaluate(() => document.querySelector('main').innerText);
  const hechos = /Puntaje final/.test(port) ? '6' : (port.match(/Bloques hechos: (\d+) de 6/) || [])[1];
  const puntaje = (port.match(/Puntaje final\s*(\d+ de 100)/) || [])[1];
  console.log('portada: bloques hechos ' + hechos + ' de 6' + (puntaje ? ' · puntaje final ' + puntaje : ''));
  if (hechos !== '6') problemas.push('portada: se esperaban 6 bloques hechos y figuran ' + hechos);
  if (!/Qué repasar/.test(port)) problemas.push('portada: falta «Qué repasar»');
  if (!problemas.length) console.log('\n✓ Examen completo sin problemas.');
  else { console.log('\n✗ Problemas:'); problemas.forEach(x => console.log('  ' + x)); }
  await b.close(); srv.close(); process.exit(problemas.length ? 1 : 0);
})();
