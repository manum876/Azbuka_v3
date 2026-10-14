// 7 · Cuentas: prueba la entrada con código, el acceso por lista, la nube, Ajustes → Accesos y
// «Eliminar mi cuenta», con un Supabase falso (supabase-falso.js) que vive en esta prueba. No toca
// el Supabase real. Uso: node cuentas.js
const fs=require('fs'), os=require('os');
const { BASE, servir, navegador } = require('./comun');
const FAKE=fs.readFileSync(__dirname+'/supabase-falso.js','utf8'); const OUT=os.tmpdir();
const srv={ permitidos:{'manuelmunoz87@gmail.com':{admin:true,nota:'Manu'}}, users:{}, progreso:{}, log:[] };
function server(op,a){ srv.log.push(op+(a.fn?':'+a.fn:''));
  const ok=d=>({data:d,error:null}), err=m=>({data:null,error:{message:m}});
  if(srv.offline) return err('Failed to fetch');
  if(op==='otp'){ if(!srv.permitidos[a.email]&&!Object.values(srv.users).find(u=>u.email===a.email)) return err('Database error saving new user'); return ok({}); }
  if(op==='verify'){ if(a.token!=='123456') return err('Token has expired or is invalid'); let u=Object.values(srv.users).find(u=>u.email===a.email); if(!u){u={id:'u-'+a.email,email:a.email}; srv.users[u.id]=u;} return ok({user:u}); }
  if(op==='rpc'){ const me=srv.users[a.uid]; const perm=me&&srv.permitidos[me.email];
    if(a.fn==='es_permitido') return ok(!!perm); if(a.fn==='es_admin') return ok(!!(perm&&perm.admin));
    if(a.fn==='borrar_mi_cuenta'){ delete srv.progreso[a.uid]; delete srv.users[a.uid]; return ok(null); }
    if(a.fn==='admin_resumen'){ if(!(perm&&perm.admin)) return err('solo admin'); return ok(Object.entries(srv.permitidos).map(([e,p])=>{const u=Object.values(srv.users).find(u=>u.email===e); return {email:e,admin:!!p.admin,nota:p.nota,tiene_cuenta:!!u,ultimo:u&&srv.progreso[u.id]?srv.progreso[u.id].actualizado:null};})); }
    if(a.fn==='admin_quitar'){ const e=a.args.p_email; const u=Object.values(srv.users).find(u=>u.email===e); if(u){delete srv.users[u.id]; delete srv.progreso[u.id];} delete srv.permitidos[e]; return ok(null); } }
  if(op==='select'){ const r=srv.progreso[a.uid]; if(!r) return ok(null); return ok(a.sel.includes('datos')?r:{actualizado:r.actualizado}); }
  if(op==='upsert'){ srv.progreso[a.row.user_id]={datos:a.row.datos, actualizado:a.row.actualizado}; return ok(null); }
  if(op==='insert'){ if(srv.permitidos[a.row.email]) return err('duplicate key value violates unique constraint'); srv.permitidos[a.row.email]={admin:false,nota:a.row.nota}; return ok(null); }
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
 await p.screenshot({path:OUT+'/ajustes.png', fullPage:true});
 // B · teléfono 2: Ana
 const d2=await dispositivo();
 await d2.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d2.p.fill('#azc-mail','ana@x.com'); await d2.p.click('#azc-enviar'); await d2.p.waitForTimeout(200); await d2.p.fill('#azc-cod','123456'); await d2.p.waitForTimeout(800);
 chk(!(await d2.p.locator('#az-cuenta').count()), 'Ana entra en su teléfono');
 await d2.p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await d2.p.waitForTimeout(800);
 chk(!(await d2.p.locator('text=Accesos').count()), 'Ana no ve Accesos');
 // C · teléfono 3: Manu en otro teléfono baja su progreso
 const d3=await dispositivo();
 await d3.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d3.p.fill('#azc-mail','manuelmunoz87@gmail.com'); await d3.p.click('#azc-enviar'); await d3.p.waitForTimeout(200); await d3.p.fill('#azc-cod','123456'); await d3.p.waitForTimeout(2500);
 chk(await d3.p.evaluate(()=>!!localStorage.getItem('az_ultimo') && !!localStorage.getItem('az_progress')), 'en otro teléfono baja el progreso de la nube');
 // quitar a Ana
 await p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await p.waitForTimeout(800);
 await p.locator('button:has-text("Quitar")').first().click(); await p.click('button:has-text("Sí, quitar")'); await p.waitForTimeout(500);
 chk(!srv.permitidos['ana@x.com'], 'quitar a Ana');
 await d2.p.goto(BASE+'index.html',{waitUntil:'networkidle'}); await d2.p.waitForTimeout(800);
 chk(await d2.p.locator('#az-cuenta').isVisible(), 'Ana queda afuera al abrir la app');
 // borrar cuenta (Manu en teléfono 3)
 await d3.p.goto(BASE+'ajustes.html',{waitUntil:'networkidle'}); await d3.p.waitForTimeout(800);
 await d3.p.click('text=Eliminar mi cuenta y mis datos'); await d3.p.click('button:has-text("Sí, eliminar todo")'); await d3.p.waitForTimeout(1500);
 chk(!srv.users['u-manuelmunoz87@gmail.com'] && !srv.progreso['u-manuelmunoz87@gmail.com'], 'eliminar cuenta borra la cuenta y el progreso en la nube');
 chk(await d3.p.evaluate(()=>!localStorage.getItem('az_progress')), 'y lo guardado en el teléfono');
 chk(await d3.p.locator('#az-cuenta').isVisible(), 'y vuelve a la pantalla de entrada');
 for (const x of [p,d2.p,d3.p]) for (const e of x.errs) problemas.push('JS: '+e);
 console.log(problemas.length? '✗ '+problemas.length+' problemas':'✓ Todo bien'); problemas.filter(x=>x.startsWith('JS')).forEach(x=>console.log(x));
 await b.close(); s.close(); process.exit(problemas.length?1:0); })();
