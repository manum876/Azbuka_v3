// 7 · Cuentas: prueba la entrada con código, el acceso por lista, la nube, Ajustes → Accesos y
// «Eliminar mi cuenta», con un Supabase falso (supabase-falso.js) que vive en esta prueba. No toca
// el Supabase real. Uso: node cuentas.js
const fs=require('fs'), os=require('os');
const { BASE, servir, navegador } = require('./comun');
const FAKE=fs.readFileSync(__dirname+'/supabase-falso.js','utf8'); const OUT=os.tmpdir();
const srv={ permitidos:{'manuelmunoz87@gmail.com':{admin:true,nota:'Manu'}}, users:{}, progreso:{}, reportes:[], log:[] };
function server(op,a){ srv.log.push(op+(a.fn?':'+a.fn:''));
  const ok=d=>({data:d,error:null}), err=m=>({data:null,error:{message:m}});
  if(srv.offline) return err('Failed to fetch');
  if(op==='otp'){ if(!srv.permitidos[a.email]&&!Object.values(srv.users).find(u=>u.email===a.email)) return err('Database error saving new user'); return ok({}); }
  if(op==='verify'){ if(a.token!=='123456') return err('Token has expired or is invalid'); let u=Object.values(srv.users).find(u=>u.email===a.email); if(!u){u={id:'u-'+a.email,email:a.email}; srv.users[u.id]=u;} return ok({user:u}); }
  if(op==='rpc'){ const me=srv.users[a.uid]; const perm=me&&srv.permitidos[me.email];
    if(a.fn==='es_permitido') return ok(!!perm); if(a.fn==='es_admin') return ok(!!(perm&&perm.admin));
    if(a.fn==='mi_rol') return ok(!perm?'ninguno':perm.admin?'admin':perm.revisor?'revisor':'alumno');
    if(a.fn==='mi_direccion') return ok(perm&&perm.direccion||'azbuka');   /* 27/10/2026 */
    const fila=(e,p)=>{const u=Object.values(srv.users).find(u=>u.email===e); return {email:e,admin:!!p.admin,revisor:!!p.revisor,invitado_por:p.invitado_por||null,nota:p.nota,tiene_cuenta:!!u,ultimo:u&&srv.progreso[u.id]?srv.progreso[u.id].actualizado:null,direccion:p.direccion||'azbuka'};};
    if(a.fn==='revisor_resumen'){ if(!(perm&&perm.revisor)) return err('solo revisor'); return ok(Object.entries(srv.permitidos).filter(([e,p])=>p.invitado_por===me.email).map(([e,p])=>fila(e,p))); }
    if(a.fn==='revisor_habilitar'){ if(!(perm&&perm.revisor)) return err('solo revisor'); const e=a.args.p_email; if(srv.permitidos[e]) return err('duplicate key value violates unique constraint'); srv.permitidos[e]={admin:false,revisor:false,nota:a.args.p_nota||null,invitado_por:me.email,direccion:'abece'}; return ok(null); }
    if(a.fn==='revisor_quitar'){ if(!(perm&&perm.revisor)) return err('solo revisor'); const e=a.args.p_email, q=srv.permitidos[e]; if(!q||q.invitado_por!==me.email||q.admin||q.revisor) return err('no es tuyo'); const u=Object.values(srv.users).find(u=>u.email===e); if(u){delete srv.users[u.id]; delete srv.progreso[u.id];} delete srv.permitidos[e]; return ok(null); }
    if(a.fn==='borrar_mi_cuenta'){ delete srv.progreso[a.uid]; delete srv.users[a.uid]; return ok(null); }
    if(a.fn==='admin_resumen'){ if(!(perm&&perm.admin)) return err('solo admin'); return ok(Object.entries(srv.permitidos).map(([e,p])=>fila(e,p))); }
    if(a.fn==='admin_quitar'){ const e=a.args.p_email; const u=Object.values(srv.users).find(u=>u.email===e); if(u){delete srv.users[u.id]; delete srv.progreso[u.id];} delete srv.permitidos[e]; return ok(null); } }
  if(op==='select'){ const r=srv.progreso[a.uid]; if(!r) return ok(null); return ok(a.sel.includes('datos')?r:{actualizado:r.actualizado}); }
  if(op==='upsert'){ srv.progreso[a.row.user_id]={datos:a.row.datos, actualizado:a.row.actualizado}; return ok(null); }
  if(a.t==='reportes'){ const me=srv.users[a.me]; const perm=me&&srv.permitidos[me.email];
    if(op==='insert'){ if(!perm||a.row.user_id!==a.me) return err('row-level security'); srv.reportes.push(Object.assign({id:srv.reportes.length+1, creado:new Date().toISOString(), resuelto:false}, a.row)); return ok(null); }
    if(!(perm&&perm.admin)) return err('solo admin');
    if(op==='lista') return ok(srv.reportes.slice().reverse());
    if(op==='update'){ const r=srv.reportes.find(x=>x.id===a.id); if(r) Object.assign(r,a.row); return ok(null); }
    if(op==='delete'){ srv.reportes=srv.reportes.filter(x=>x.id!==a.id); return ok(null); } }
  if(op==='insert'){ if(srv.permitidos[a.row.email]) return err('duplicate key value violates unique constraint'); srv.permitidos[a.row.email]={admin:false,nota:a.row.nota,invitado_por:a.row.invitado_por||null,direccion:a.row.direccion||'azbuka'}; return ok(null); }
  if(op==='update'&&a.t==='permitidos'){ const me=srv.users[a.me]; const perm=me&&srv.permitidos[me.email]; if(!(perm&&perm.admin)) return err('row-level security'); if(srv.permitidos[a.id]) Object.assign(srv.permitidos[a.id],a.row); return ok(null); }
  return err('?'); }
const problemas=[]; const chk=(c,m)=>{ console.log((c?'✓ ':'✗ ')+m); if(!c) problemas.push(m); };
(async()=>{ const s=await servir(); const b=await navegador();
 async function dispositivo(){ const ctx=await b.newContext({viewport:{width:390,height:844},serviceWorkers:'block'});
   await ctx.exposeFunction('__llamar',(op,a)=>server(op,a));
   await ctx.route('**/assets/supabase.js', r=>r.fulfill({body:FAKE, contentType:'application/javascript'}));
   await ctx.route('**/js/cuenta.js', async r=>{ const res=await r.fetch(); let t=await res.text(); t=t.replace(/url: "[^"]*",/,'url: "https://prueba.supabase.co",').replace(/clave: "[^"]*",/,'clave: "abc",'); r.fulfill({response:res, body:t}); });
   const p=await ctx.newPage(); const errs=[]; p.on('pageerror',e=>errs.push(e.message)); p.errs=errs; return {ctx,p}; }
 // A · teléfono 1, con progreso previo
 let {ctx,p}=await dispositivo();
 await p.goto(BASE+'index.html'); await p.evaluate(()=>{localStorage.setItem('az_progress', JSON.stringify({units:{1:{done:true}}}));});
 await p.reload({waitUntil:'networkidle'});
 chk(await p.locator('#az-cuenta').isVisible(), 'sin sesión aparece la pantalla de entrada');
 chk(await p.evaluate(()=>getComputedStyle(document.getElementById('root')).visibility)==='hidden', 'la app queda tapada');
 await p.screenshot({path:OUT+'/entrar.png'});
 await p.fill('#azc-mail','otro@x.com'); await p.click('#azc-enviar'); await p.waitForTimeout(200);
 chk(/no tiene acceso/.test(await p.locator('#az-cuenta .err').innerText().catch(()=>'')), 'mail no habilitado: aviso');
 await p.fill('#azc-mail','ManuelMunoz87@gmail.com'); await p.click('#azc-enviar'); await p.waitForTimeout(200);
 chk(await p.locator('#azc-cod').isVisible(), 'pasa a pedir el código');
 await p.screenshot({path:OUT+'/codigo.png'});
 await p.fill('#azc-cod','111111'); await p.waitForTimeout(300);
 chk(/no es correcto/.test(await p.locator('#az-cuenta .err').innerText().catch(()=>'')), 'código malo: aviso');
 await p.fill('#azc-cod','123456'); await p.waitForTimeout(800);
 chk(!(await p.locator('#az-cuenta').count()), 'código bueno: entra');
 chk(srv.progreso['u-manuelmunoz87@gmail.com'] && JSON.stringify(srv.progreso['u-manuelmunoz87@gmail.com'].datos).includes('az_progress'), 'sube el progreso que ya había en el teléfono');
 chk(!JSON.stringify(srv.progreso['u-manuelmunoz87@gmail.com'].datos).includes('az_cuenta_sync'), 'no sube la marca de sincronización');
 // cambio
 await p.evaluate(()=>localStorage.setItem('az_ultimo', JSON.stringify({unidad:3})));
 await p.waitForTimeout(9000);
 chk(JSON.stringify(srv.progreso['u-manuelmunoz87@gmail.com'].datos).includes('az_ultimo'), 'un cambio se sube solo a los pocos segundos');
 // navegación con sesión
 await p.goto(BASE+'azbuka-3.html',{waitUntil:'networkidle'});
 chk(!(await p.locator('#az-cuenta').count()) && await p.evaluate(()=>getComputedStyle(document.getElementById('root')).visibility)!=='hidden', 'con sesión, las páginas se ven directo');
 // offline
 srv.offline=true;
 await p.reload({waitUntil:'networkidle'}); await p.waitForTimeout(1500);
 chk(!(await p.locator('#az-cuenta').count()) && await p.evaluate(()=>getComputedStyle(document.getElementById('root')).visibility)!=='hidden', 'sin servidor, con sesión guardada, entra igual');
 await p.evaluate(()=>localStorage.setItem('az_x_offline','1')); await p.waitForTimeout(500);
 srv.offline=false; await p.evaluate(()=>window.dispatchEvent(new Event('online'))); await p.waitForTimeout(1500);
 chk(JSON.stringify(srv.progreso['u-manuelmunoz87@gmail.com'].datos).includes('az_x_offline'), 'lo hecho sin conexión se sube al volver la red');
 // Ajustes admin
 await p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
 chk((await p.locator('text=manuelmunoz87@gmail.com').count())>0, 'Ajustes muestra el mail');
 chk(await p.locator('text=Accesos').count()>0, 'el admin ve Accesos');
 await p.fill('input[placeholder="mail@ejemplo.com"]','Ana@X.com'); await p.fill('input[placeholder^="Nota"]','Ana'); await p.click('button:has-text("Habilitar")'); await p.waitForTimeout(500);
 chk(!!srv.permitidos['ana@x.com'], 'habilitar un mail (queda en minúsculas)');
 chk(srv.permitidos['ana@x.com'] && srv.permitidos['ana@x.com'].invitado_por==='manuelmunoz87@gmail.com', 'anota quién habilitó el mail');
 // Dirección de cada alumno y links para mandar (27/10/2026)
 chk(srv.permitidos['ana@x.com'].direccion==='azbuka', 'por defecto, un mail habilitado es de Azbuka');
 await p.fill('input[placeholder="mail@ejemplo.com"]','Carla@X.com'); await p.click('button:has-text("Español · Abecé")'); await p.click('button:has-text("Habilitar")'); await p.waitForTimeout(500);
 chk(srv.permitidos['carla@x.com'] && srv.permitidos['carla@x.com'].direccion==='abece', 'el admin habilita un mail de Abecé');
 chk(await p.locator('text=Links para mandar').count()>0 && await p.locator('text=/\\?dir=abece$/').count()>0, 'Ajustes muestra los links para mandar (Azbuka y Abecé)');
 chk(await p.locator('button:has-text("Copiar")').count()===2, 'cada link tiene «Copiar»');
 await p.locator('button:has-text("Pasar a Azbuka")').first().click(); await p.waitForTimeout(500);
 chk(srv.permitidos['carla@x.com'].direccion==='azbuka', '«Pasar a Azbuka» cambia la dirección');
 await p.locator('button:has-text("Pasar a Abecé")').last().click(); await p.waitForTimeout(500);
 chk(srv.permitidos['carla@x.com'].direccion==='abece', '«Pasar a Abecé» la vuelve a cambiar');
 // Teléfono de Carla: el link de Abecé abre la entrada en ruso
 const d4=await dispositivo();
 await d4.p.goto(BASE+'index.html?dir=abece',{waitUntil:'networkidle'});
 chk(/Abecé/.test(await d4.p.locator('#az-cuenta .logo').innerText()) && /Вход/.test(await d4.p.locator('#az-cuenta .tit').innerText()), 'con el link de Abecé, la entrada sale en ruso');
 chk(/manifest-abece/.test(await d4.p.getAttribute('link[rel="manifest"]','href')) && /abece/.test(await d4.p.getAttribute('link[rel="apple-touch-icon"]','href')), 'en ruso, la app se instalaría como Abecé');
 await d4.p.screenshot({path:OUT+'/entrar-ru.png'});
 await d4.p.click('#az-cuenta .idi button[data-i="es"]'); await d4.p.waitForTimeout(200);
 chk(/Entrar/.test(await d4.p.locator('#az-cuenta .tit').innerText()) && /Азбука/.test(await d4.p.locator('#az-cuenta .logo').innerText()), 'el chip «ES» la pasa al español');
 await d4.p.click('#az-cuenta .idi button[data-i="ru"]'); await d4.p.waitForTimeout(200);
 await d4.p.fill('#azc-mail','carla@x.com'); await d4.p.click('#azc-enviar'); await d4.p.waitForTimeout(200);
 chk(/Проверь почту/.test(await d4.p.locator('#az-cuenta .tit').innerText()), 'el paso del código también en ruso');
 await d4.p.fill('#azc-cod','123456'); await d4.p.waitForTimeout(1500);
 chk(await d4.p.evaluate(()=>localStorage.getItem('az_cuenta_dir'))==='abece', 'al entrar, la app guarda la dirección de la cuenta');
 chk(/Азбука/.test(await d4.p.locator('header').innerText()), 'mientras Abecé esté bloqueada, una alumna de Abecé ve Azbuka');
 // Abecé en construcción (22/10/2026): el admin la prueba y vuelve
 chk(await p.locator('text=Abecé en construcción').count()>0, 'el admin ve «Abecé en construcción»');
 await p.click('button:has-text("Abecé (prueba)")'); await p.waitForLoadState('networkidle'); await p.waitForTimeout(1000);
 chk(/Abecé/.test(await p.locator('header').innerText()), 'con «Abecé (prueba)» el encabezado pasa a Abecé');
 await p.click('button:text-is("Azbuka")'); await p.waitForLoadState('networkidle'); await p.waitForTimeout(1000);
 chk(/Азбука/.test(await p.locator('header').innerText()), 'con «Azbuka» vuelve Azbuka');
 await p.screenshot({path:OUT+'/ajustes.png', fullPage:true});
 // Reportar un error (21/10/2026): el 🐞 del menú, y Ajustes → Reportes
 await p.goto(BASE+'azbuka-3.html',{waitUntil:'networkidle'}); await p.waitForTimeout(600);
 await p.evaluate(()=>{ setTimeout(()=>{ throw new Error('error de prueba'); },0); }); await p.waitForTimeout(200);
 await p.click('text=Menú'); await p.waitForTimeout(300); await p.click('[aria-label="Reportar un error"]'); await p.waitForTimeout(400);
 chk(await p.locator('text=Reportar un error').first().isVisible(), 'el 🐞 del menú abre «Reportar un error»');
 await p.screenshot({path:OUT+'/reportar.png'});
 await p.locator('[role=dialog] textarea').first().fill('La palabra no suena'); await p.click('[role=dialog] button:has-text("Enviar")'); await p.waitForTimeout(600);
 chk(await p.locator('text=Enviado').count()>0, 'el reporte se envía y avisa');
 const rep=srv.reportes[0]||{};
 chk(rep.texto==='La palabra no suena' && /Unidad 3|Sustantivos/.test(rep.pantalla||'') && rep.email==='manuelmunoz87@gmail.com', 'el reporte lleva el texto, la pantalla y el mail');
 chk(!!(rep.contexto&&rep.contexto.dispositivo) && /error de prueba/.test((rep.contexto||{}).errores||''), 'adjunta el teléfono y los errores de la página');
 await p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
 chk(await p.locator('text=La palabra no suena').count()>0, 'el admin ve el reporte en Ajustes → Reportes');
 await p.click('button:has-text("✓ Resuelto")'); await p.waitForTimeout(400);
 chk(srv.reportes[0] && srv.reportes[0].resuelto===true, 'marcar un reporte como resuelto');
 await p.screenshot({path:OUT+'/reportes.png', fullPage:true});
 // B · teléfono 2: Ana
 const d2=await dispositivo();
 await d2.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d2.p.fill('#azc-mail','ana@x.com'); await d2.p.click('#azc-enviar'); await d2.p.waitForTimeout(200); await d2.p.fill('#azc-cod','123456'); await d2.p.waitForTimeout(800);
 chk(!(await d2.p.locator('#az-cuenta').count()), 'Ana entra en su teléfono');
 await d2.p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await d2.p.waitForTimeout(800);
 chk(!(await d2.p.locator('text=Accesos').count()), 'Ana no ve Accesos');
 chk(!(await d2.p.locator('text=Abecé en construcción').count()), 'Ana (alumna) no ve Abecé');
 await d2.p.evaluate(()=>{ localStorage.setItem('az_direccion','"abece"'); localStorage.setItem('az_prueba','"si"'); });
 await d2.p.reload({waitUntil:'networkidle'}); await d2.p.waitForTimeout(800);
 chk(/Азбука/.test(await d2.p.locator('header').innerText()), 'una alumna no puede abrir Abecé aunque fuerce el modo prueba');
 // Manu hace revisora a Ana (22/10/2026)
 await p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
 await p.click('button:has-text("Hacer revisor")'); await p.waitForTimeout(500);
 chk(srv.permitidos['ana@x.com'] && srv.permitidos['ana@x.com'].revisor===true, 'el admin hace revisora a Ana');
 await d2.p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await d2.p.waitForTimeout(1200);
 await d2.p.reload({waitUntil:'networkidle'}); await d2.p.waitForTimeout(1200);
 chk(/Abecé/.test(await d2.p.locator('header').innerText()), 'la revisora ve Abecé en modo prueba');
 chk(await d2.p.locator('text=Abecé en construcción').count()>0 && await d2.p.locator('text=Alumnos').count()>0, 'la revisora ve «Abecé en construcción» y «Alumnos»');
 // Se buscan los títulos de sección (texto exacto): el texto de «Abecé en construcción» nombra Accesos y Reportes (27/10/2026)
  chk(!(await d2.p.getByText('Accesos', { exact: true }).count()) && !(await d2.p.getByText('Reportes', { exact: true }).count()), 'la revisora no ve Accesos ni Reportes');
 await d2.p.fill('input[placeholder="mail@ejemplo.com"]','Bob@X.com'); await d2.p.fill('input[placeholder^="Nota"]','Bob'); await d2.p.click('button:has-text("Habilitar")'); await d2.p.waitForTimeout(600);
 chk(srv.permitidos['bob@x.com'] && srv.permitidos['bob@x.com'].invitado_por==='ana@x.com' && !srv.permitidos['bob@x.com'].admin, 'la revisora habilita un alumno (no admin)');
 chk(srv.permitidos['bob@x.com'].direccion==='abece', 'los alumnos de la revisora son de Abecé');
 chk(await d2.p.locator('button:has-text("Copiar")').count()===1 && await d2.p.locator('text=/\\?dir=abece$/').count()>0, 'la revisora ve solo el link de Abecé');
 chk(await d2.p.locator('text=bob@x.com').count()>0 && !(await d2.p.locator('text=manuelmunoz87@gmail.com').count()), 'la revisora ve solo sus alumnos');
 await d2.p.screenshot({path:OUT+'/revisora.png', fullPage:true});
 await d2.p.locator('button:text-is("Quitar")').first().click(); await d2.p.click('button:has-text("Sí, quitar")'); await d2.p.waitForTimeout(500);
 chk(!srv.permitidos['bob@x.com'], 'la revisora quita a su alumno');
 // C · teléfono 3: Manu en otro teléfono baja su progreso
 const d3=await dispositivo();
 await d3.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d3.p.fill('#azc-mail','manuelmunoz87@gmail.com'); await d3.p.click('#azc-enviar'); await d3.p.waitForTimeout(200); await d3.p.fill('#azc-cod','123456'); await d3.p.waitForTimeout(2500);
 chk(await d3.p.evaluate(()=>!!localStorage.getItem('az_ultimo') && !!localStorage.getItem('az_progress')), 'en otro teléfono baja el progreso de la nube');
 // quitar a Ana
 await p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
 await p.locator('button:text-is("Quitar")').first().click(); await p.click('button:has-text("Sí, quitar")'); await p.waitForTimeout(500);
 chk(!srv.permitidos['ana@x.com'], 'quitar a Ana');
 await d2.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d2.p.waitForTimeout(800);
 chk(await d2.p.locator('#az-cuenta').isVisible(), 'Ana queda afuera al abrir la app');
 // borrar cuenta (Manu en teléfono 3)
 await d3.p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await d3.p.waitForTimeout(800);
 await d3.p.click('text=Eliminar mi cuenta y mis datos'); await d3.p.click('button:has-text("Sí, eliminar todo")'); await d3.p.waitForTimeout(1500);
 chk(!srv.users['u-manuelmunoz87@gmail.com'] && !srv.progreso['u-manuelmunoz87@gmail.com'], 'eliminar cuenta borra la cuenta y el progreso en la nube');
 chk(await d3.p.evaluate(()=>!localStorage.getItem('az_progress')), 'y lo guardado en el teléfono');
 chk(await d3.p.locator('#az-cuenta').isVisible(), 'y vuelve a la pantalla de entrada');
 for (const x of [p,d2.p,d3.p,d4.p]) for (const e of x.errs) if (!/error de prueba/.test(e)) problemas.push('JS: '+e);   /* el error que tira la prueba del 🐞 a propósito no cuenta */
 console.log(problemas.length? '✗ '+problemas.length+' problemas':'✓ Todo bien'); problemas.filter(x=>x.startsWith('JS')).forEach(x=>console.log(x));
 await b.close(); s.close(); process.exit(problemas.length?1:0); })();
