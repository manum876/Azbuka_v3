/* ============================================================
   CUENTA.JS — Cuentas y progreso en la nube (14/10/2026)
   ------------------------------------------------------------
   · Cuenta obligatoria: sin sesión, la app muestra la pantalla de
     entrada y no deja ver nada más.
   · Se entra con un código de 6 números que llega por mail (anda
     también en la app instalada) o, si está activado, con Google.
   · Solo entran los mails que Manu habilitó (tabla «permitidos» en
     Supabase, Ajustes → Accesos). Si a alguien le quitan el acceso,
     la próxima vez que abra la app con internet queda afuera.
   · Progreso en la nube: todo lo que la app guarda (las claves az_…,
     lo mismo que la copia de seguridad) se sube solo, unos segundos
     después de cada cambio. Al entrar en otro teléfono se baja.
   · Sin conexión: con la sesión guardada, la app anda igual; lo
     nuevo se sube cuando vuelve la red.
   · Ajustes: cerrar sesión, eliminar la cuenta y todos los datos, y
     (solo admin) habilitar y quitar mails.

   Configuración: AZ_CUENTA_CONFIG (abajo). Mientras url o clave
   estén vacías, las cuentas están apagadas y la app anda como antes.
   La clave es la «anon / publishable key»: es pública a propósito; lo
   que protege los datos son las reglas de Supabase
   (herramientas/cuentas/supabase.sql).

   Se carga en todas las páginas, justo después de js/core.js:
     <script src="assets/supabase.js"></script>
     <script src="js/cuenta.js"></script>

   API para las páginas (window.AzCuenta):
     activa · sesion() · email() · esAdmin() · comprobarAdmin() · listo() · estadoNube()
     subirAhora() · cerrarSesion() · borrarCuenta()
     accesos() · habilitar(email, nota) · quitar(email)
     alCambiar(fn)  → avisa cuando cambia el estado de la nube
   ============================================================ */
const AZ_CUENTA_CONFIG = {
  url: "https://kezvjeeewhdvyorqlzpp.supabase.co",   /* Project URL de Supabase */
  clave: "sb_publishable_xNLbOTFqlatpdZloI28APA_JBf4Yvie",   /* publishable key (pública a propósito) */
  google: false,    /* true cuando Google esté configurado en Supabase */
  digitos: 6        /* largo del código (Supabase → Authentication → Email → Email OTP Length) */
};

(function () {
  const CFG = AZ_CUENTA_CONFIG;
  const activa = !!(CFG.url && CFG.clave && window.supabase);
  const META = "az_cuenta_sync";            /* { uid, local, subido } (fechas en ms) */
  const NO_SINC = /^az_cuenta_/;            /* claves que no viajan a la nube */
  let cliente = null, usuario = null, admin = false, oyentes = [], estado = "apagada", timer = null, subiendo = false;

  const ls = window.localStorage;
  const setOrig = Storage.prototype.setItem, delOrig = Storage.prototype.removeItem;
  const leerMeta = () => { try { return JSON.parse(ls.getItem(META) || "{}") || {}; } catch (e) { return {}; } };
  const guardarMeta = m => { try { setOrig.call(ls, META, JSON.stringify(m)); } catch (e) {} };
  const avisar = e => { estado = e; oyentes.forEach(f => { try { f(e); } catch (x) {} }); };
  const claveSesion = () => { try { return "sb-" + new URL(CFG.url).hostname.split(".")[0] + "-auth-token"; } catch (e) { return ""; } };
  const haySesionGuardada = () => { try { return !!ls.getItem(claveSesion()); } catch (e) { return false; } };

  window.AzCuenta = { activa, sesion: () => usuario, email: () => (usuario && usuario.email) || "", esAdmin: () => admin,
    estadoNube: () => ({ estado, meta: leerMeta() }), alCambiar: f => { oyentes.push(f); return () => { oyentes = oyentes.filter(x => x !== f); }; } };
  if (!activa) return;

  cliente = window.supabase.createClient(CFG.url, CFG.clave, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true, flowType: "pkce" } });

  /* ── Colores y tapa (sin sesión, la página queda tapada desde el primer instante) ── */
  let oscuro = true;
  try { oscuro = JSON.parse(ls.getItem("az_theme") || '"dark"') !== "light"; } catch (e) {}
  const C = (window.azColors ? window.azColors(oscuro) : null) || (oscuro
    ? { bg: "#0F0F14", bg2: "#17171E", bg3: "#1E1E28", card: "#1A1A24", border: "#2A2A38", gold: "#C9A84C", text: "#F0EEE8", textMuted: "#888080", textSub: "#B8B0A8" }
    : { bg: "#F7F5F0", bg2: "#EDEAE4", bg3: "#E2DED7", card: "#FFFFFF", border: "#D5D0C8", gold: "#C9A84C", text: "#1A1812", textMuted: "#8A847A", textSub: "#5A5450" });
  const ROJO = "#B5605C", ROJO_TXT = "#D9776F";
  const css = document.createElement("style");
  css.textContent = `
    html.az-sin-cuenta, html.az-sin-cuenta body { background:${C.bg}; overflow:hidden; }
    html.az-sin-cuenta body > *:not(#az-cuenta) { visibility:hidden !important; }
    #az-cuenta{position:fixed;inset:0;z-index:2000;background:${C.bg};box-shadow:0 0 0 100vmax ${C.bg};color:${C.text};font-family:'Noto Sans',sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;}
    #az-cuenta .in{max-width:420px;margin:0 auto;padding:calc(var(--az-top, 68px) + 6vh) 6vw var(--az-bottom, 88px);display:flex;flex-direction:column;}
    #az-cuenta .logo{font-size:44px;line-height:1;color:${C.gold};font-weight:900;letter-spacing:-1.5px;}
    #az-cuenta .baja{font-size:14px;color:${C.textMuted};margin-top:6px;}
    #az-cuenta .tit{font-size:20px;font-weight:800;margin:34px 0 6px;}
    #az-cuenta .txt{font-size:14px;line-height:1.55;color:${C.textSub};}
    #az-cuenta input{width:100%;box-sizing:border-box;font-size:18px;padding:13px 12px;border-radius:10px;background:${C.bg3};border:1px solid ${C.border};color:${C.text};font-family:inherit;margin-top:16px;outline:none;}
    #az-cuenta input:focus{border-color:${C.gold};}
    #az-cuenta input.cod{letter-spacing:8px;text-align:center;font-weight:700;font-size:24px;}
    #az-cuenta .b{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:13px 16px;border-radius:10px;border:1px solid ${C.gold};background:${C.gold};color:${C.bg};font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:12px;}
    #az-cuenta .b:disabled{opacity:.5;cursor:default;}
    #az-cuenta .b.sec{background:${C.bg3};border-color:${C.border};color:${C.text};}
    #az-cuenta .lnk{background:none;border:none;color:${C.gold};font-size:13.5px;font-weight:600;font-family:inherit;cursor:pointer;padding:12px 0 0;align-self:center;}
    #az-cuenta .lnk:disabled{color:${C.textMuted};cursor:default;}
    #az-cuenta .err{font-size:13.5px;line-height:1.5;color:${ROJO_TXT};background:${ROJO}22;border-radius:10px;padding:10px 12px;margin-top:12px;}
    #az-cuenta .ok{font-size:13.5px;line-height:1.5;color:${C.textSub};background:${C.gold}18;border-radius:10px;padding:10px 12px;margin-top:12px;}
    #az-cuenta .o{display:flex;align-items:center;gap:10px;margin:18px 0 4px;color:${C.textMuted};font-size:12px;}
    #az-cuenta .o:before,#az-cuenta .o:after{content:"";flex:1;height:1px;background:${C.border};}
    #az-cuenta .priv{font-size:12px;line-height:1.5;color:${C.textMuted};margin-top:28px;}
  `;
  document.head.appendChild(css);

  const enUrl = /[?&#](code|error|error_description|access_token)=/.test(location.href);
  if (!haySesionGuardada() || enUrl) document.documentElement.classList.add("az-sin-cuenta");

  /* ── Pantalla de entrada ── */
  let caja = null, paso = "mail", mailIngresado = "", reenvio = 0, relojReenvio = null;
  const esc = s => String(s).replace(/[&<>"]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[x]));
  function montar() {
    if (!caja) { caja = document.createElement("div"); caja.id = "az-cuenta"; caja.setAttribute("role", "dialog"); document.body.appendChild(caja); }
    return caja;
  }
  function pantalla(html) {
    const el = montar();
    el.innerHTML = `<div class="in"><div class="logo">Азбука</div><div class="baja">Aprende ruso desde cero</div>${html}</div>`;
    return el;
  }
  function msgError(e) {
    const t = String((e && (e.message || e.error_description || e.msg)) || e || "");
    if (/sending|smtp|mail.*(fail|error)/i.test(t)) return "No se pudo mandar el mail con el código. Es un problema del envío de mails, no de tu mail: avísale a Manu. (Detalle: " + t.slice(0, 120) + ")";
    if (/AZ_NO_PERMITIDO|Database error saving new user|not allowed|Signups not allowed/i.test(t)) return "Este mail no tiene acceso a Azbuka. Pídele a Manu que lo habilite.";
    if (/rate|too many|security purposes|seconds/i.test(t)) return "Pediste muchos códigos seguidos. Espera un minuto y prueba de nuevo.";
    if (/expired|invalid|token/i.test(t)) return "El código no es correcto o ya venció. Revísalo o pide uno nuevo.";
    if (/fetch|network|Failed/i.test(t)) return "No hay conexión. Para entrar la primera vez necesitas internet.";
    return "No se pudo completar. Prueba de nuevo en un momento." + (t ? " (Detalle: " + t.slice(0, 120) + ")" : "");
  }
  const PRIV = `<div class="priv">Tu mail se usa solo para entrar y para guardar tu progreso. Puedes eliminar tu cuenta y todos tus datos cuando quieras, desde Ajustes.</div>`;

  function verMail(error, aviso) {
    paso = "mail";
    const el = pantalla(`
      <div class="tit">Entrar</div>
      <div class="txt">Escribe tu mail y te mandamos un código para entrar. No hace falta contraseña.</div>
      <input id="azc-mail" type="email" inputmode="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="tu@mail.com" value="${esc(mailIngresado)}">
      ${error ? `<div class="err">${esc(error)}</div>` : ""}${aviso ? `<div class="ok">${esc(aviso)}</div>` : ""}
      <button class="b" id="azc-enviar">Enviarme el código</button>
      ${CFG.google ? `<div class="o">o</div><button class="b sec" id="azc-google">Entrar con Google</button>` : ""}
      ${PRIV}`);
    const inp = el.querySelector("#azc-mail"), btn = el.querySelector("#azc-enviar");
    const enviar = async () => {
      const m = inp.value.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) { verMail("Revisa el mail: parece incompleto."); return; }
      mailIngresado = m; btn.disabled = true; btn.textContent = "Enviando…";
      try {
        const { error } = await cliente.auth.signInWithOtp({ email: m, options: { shouldCreateUser: true } });
        if (error) throw error;
        reenvio = Date.now() + 60000; verCodigo();
      } catch (e) { verMail(msgError(e)); }
    };
    btn.onclick = enviar;
    inp.onkeydown = e => { if (e.key === "Enter") enviar(); };
    const g = el.querySelector("#azc-google");
    if (g) g.onclick = async () => {
      g.disabled = true;
      const volver = location.origin + location.pathname;
      const { error } = await cliente.auth.signInWithOAuth({ provider: "google", options: { redirectTo: volver } });
      if (error) verMail(msgError(error));
    };
  }

  function verCodigo(error) {
    paso = "codigo";
    const el = pantalla(`
      <div class="tit">Revisa tu mail</div>
      <div class="txt">Te mandamos un código a <b style="color:${C.text}">${esc(mailIngresado)}</b>. Escríbelo aquí. Si no llega en un minuto, mira en «Spam» o «Promociones».</div>
      <input id="azc-cod" class="cod" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="${CFG.digitos}" placeholder="${"•".repeat(CFG.digitos)}">
      ${error ? `<div class="err">${esc(error)}</div>` : ""}
      <button class="b" id="azc-ok">Entrar</button>
      <button class="lnk" id="azc-re">Mandarme otro código</button>
      <button class="lnk" id="azc-otro" style="padding-top:6px;color:${C.textMuted}">Usar otro mail</button>
      ${PRIV}`);
    const inp = el.querySelector("#azc-cod"), btn = el.querySelector("#azc-ok"), re = el.querySelector("#azc-re");
    const entrar = async () => {
      const t = inp.value.replace(/\D/g, "");
      if (t.length < CFG.digitos) { verCodigo("El código tiene " + CFG.digitos + " números."); return; }
      btn.disabled = true; btn.textContent = "Entrando…";
      try {
        const { data, error } = await cliente.auth.verifyOtp({ email: mailIngresado, token: t, type: "email" });
        if (error) throw error;
        await alEntrar(data.session);
      } catch (e) { verCodigo(msgError(e)); }
    };
    btn.onclick = entrar;
    inp.oninput = () => { if (inp.value.replace(/\D/g, "").length === CFG.digitos) entrar(); };
    inp.onkeydown = e => { if (e.key === "Enter") entrar(); };
    const tic = () => { const s = Math.ceil((reenvio - Date.now()) / 1000);
      if (s > 0) { re.disabled = true; re.textContent = "Mandarme otro código (" + s + " s)"; } else { re.disabled = false; re.textContent = "Mandarme otro código"; clearInterval(relojReenvio); } };
    clearInterval(relojReenvio); relojReenvio = setInterval(tic, 1000); tic();
    re.onclick = async () => {
      re.disabled = true;
      try { const { error } = await cliente.auth.signInWithOtp({ email: mailIngresado, options: { shouldCreateUser: true } }); if (error) throw error; reenvio = Date.now() + 60000; verCodigo(); }
      catch (e) { verCodigo(msgError(e)); }
    };
    el.querySelector("#azc-otro").onclick = () => verMail();
    setTimeout(() => { try { inp.focus(); } catch (e) {} }, 100);
  }

  function verSinAcceso() {
    pantalla(`
      <div class="tit">Sin acceso</div>
      <div class="txt">Este mail ya no tiene acceso a Azbuka. Si crees que es un error, escríbele a Manu.</div>
      <button class="b sec" id="azc-otro">Entrar con otro mail</button>`).querySelector("#azc-otro").onclick = () => verMail();
  }
  function verEntrando() { pantalla(`<div class="tit">Entrando…</div><div class="txt">Un momento.</div>`); }

  function quitarPantalla() {
    document.documentElement.classList.remove("az-sin-cuenta");
    if (caja) { caja.remove(); caja = null; }
    clearInterval(relojReenvio);
  }
  function mostrarPantalla(fn) { document.documentElement.classList.add("az-sin-cuenta"); fn(); }

  /* ── Acceso ── */
  async function chequearAcceso() {
    try {
      const { data, error } = await cliente.rpc("es_permitido");
      if (error) return null;               /* sin red u otro problema: no se decide */
      return data === true;
    } catch (e) { return null; }
  }
  let procesado = null, listo = null, avisarListo = null;
  listo = new Promise(r => { avisarListo = r; });
  async function alEntrar(sesion) {
    if (!sesion || !sesion.user || procesado === sesion.user.id) return;
    procesado = sesion.user.id;
    usuario = sesion.user;
    const ok = await chequearAcceso();
    if (ok === false) { await cliente.auth.signOut().catch(() => {}); usuario = null; mostrarPantalla(verSinAcceso); return; }
    if (location.search.indexOf("code=") >= 0 || location.hash.indexOf("access_token") >= 0) history.replaceState(null, "", location.pathname);
    quitarPantalla();
    avisarListo(usuario);
    await sincronizarAlEntrar();
  }

  /* ── Progreso en la nube ── */
  function datosLocales() {
    const d = {};
    for (let i = 0; i < ls.length; i++) { const k = ls.key(i); if (k && k.indexOf("az_") === 0 && !NO_SINC.test(k)) d[k] = ls.getItem(k); }
    return d;
  }
  function reemplazarLocales(datos) {
    const viejas = [];
    for (let i = 0; i < ls.length; i++) { const k = ls.key(i); if (k && k.indexOf("az_") === 0 && !NO_SINC.test(k)) viejas.push(k); }
    viejas.forEach(k => delOrig.call(ls, k));
    Object.keys(datos || {}).forEach(k => { if (k.indexOf("az_") === 0 && !NO_SINC.test(k)) setOrig.call(ls, k, datos[k]); });
  }
  async function subir() {
    if (!usuario || subiendo) return false;
    const m = leerMeta();
    if (m.uid === usuario.id && (m.local || 0) <= (m.subido || 0)) { avisar("al-dia"); return true; }
    if (!navigator.onLine) { avisar("pendiente"); return false; }
    subiendo = true; avisar("subiendo");
    const marca = m.local || Date.now();
    try {
      const { error } = await cliente.from("progreso").upsert({ user_id: usuario.id, datos: datosLocales(), actualizado: new Date(marca).toISOString() });
      if (error) throw error;
      const n = leerMeta(); n.uid = usuario.id; n.subido = marca; if (!n.local) n.local = marca; guardarMeta(n);
      subiendo = false; avisar(n.local > n.subido ? "pendiente" : "al-dia");
      if (n.local > n.subido) programar();
      return true;
    } catch (e) { subiendo = false; avisar("pendiente"); return false; }
  }
  function programar(ms) { clearTimeout(timer); timer = setTimeout(subir, ms == null ? 8000 : ms); }
  function marcarCambio(k) {
    if (!k || k.indexOf("az_") !== 0 || NO_SINC.test(k)) return;
    const m = leerMeta(); m.local = Date.now(); guardarMeta(m);
    if (usuario) { avisar("pendiente"); programar(); }
  }
  Storage.prototype.setItem = function (k, v) { setOrig.call(this, k, v); if (this === ls) marcarCambio(String(k)); };
  Storage.prototype.removeItem = function (k) { delOrig.call(this, k); if (this === ls) marcarCambio(String(k)); };

  async function sincronizarAlEntrar() {
    if (!usuario || !navigator.onLine) { avisar(navigator.onLine ? "al-dia" : "pendiente"); return; }
    let fila = null;
    try {   /* primero solo la fecha: los datos se bajan únicamente si hacen falta */
      const { data, error } = await cliente.from("progreso").select("actualizado").eq("user_id", usuario.id).maybeSingle();
      if (error) throw error; fila = data;
    } catch (e) { avisar("pendiente"); return; }
    const m = leerMeta(), remoto = fila ? Date.parse(fila.actualizado) : 0;
    const aplicar = async () => {
      const { data, error } = await cliente.from("progreso").select("datos, actualizado").eq("user_id", usuario.id).maybeSingle();
      if (error || !data) { avisar("pendiente"); return; }
      reemplazarLocales(data.datos);
      guardarMeta({ uid: usuario.id, local: remoto, subido: remoto });
      avisar("al-dia");
      try { if (!sessionStorage.getItem("az_cuenta_recarga")) { sessionStorage.setItem("az_cuenta_recarga", "1"); location.reload(); } } catch (e) {}
    };
    if (m.uid !== usuario.id) {                       /* primera vez en este teléfono con esta cuenta */
      if (fila) await aplicar();
      else { guardarMeta({ uid: usuario.id, local: Date.now(), subido: 0 }); await subir(); }
      return;
    }
    const cambiosLocales = (m.local || 0) > (m.subido || 0);
    if (fila && remoto > (m.subido || 0)) {           /* hay algo más nuevo de otro teléfono */
      if (!cambiosLocales || remoto > (m.local || 0)) { await aplicar(); return; }
      await subir();                                  /* los dos cambiaron: gana lo más reciente */
    } else if (cambiosLocales || !fila) await subir();
    else avisar("al-dia");
    try { sessionStorage.removeItem("az_cuenta_recarga"); } catch (e) {}
  }

  /* ── Acciones para Ajustes ── */
  const limpiarLocales = () => {
    const prefs = ["az_theme", "az_translit"];
    const viejas = [];
    for (let i = 0; i < ls.length; i++) { const k = ls.key(i); if (k && k.indexOf("az_") === 0 && prefs.indexOf(k) < 0) viejas.push(k); }
    viejas.forEach(k => delOrig.call(ls, k));
  };
  Object.assign(window.AzCuenta, {
    subirAhora: () => subir(),
    listo: () => listo,                                /* promesa: se cumple cuando hay sesión */
    comprobarAdmin: async () => {
      await listo;
      try { const { data } = await cliente.rpc("es_admin"); admin = data === true; } catch (e) {}
      return admin;
    },
    /* Cierra la sesión. Antes sube lo pendiente; si no puede, no cierra (devuelve false) salvo forzar. */
    cerrarSesion: async (forzar) => {
      const ok = await subir();
      if (!ok && !forzar) return false;
      await cliente.auth.signOut().catch(() => {});
      limpiarLocales(); usuario = null; admin = false;
      location.href = "index.html";
      return true;
    },
    borrarCuenta: async () => {
      const { error } = await cliente.rpc("borrar_mi_cuenta");
      if (error) throw error;
      await cliente.auth.signOut({ scope: "local" }).catch(() => {});
      limpiarLocales(); usuario = null; admin = false;
      location.href = "index.html";
    },
    accesos: async () => { const { data, error } = await cliente.rpc("admin_resumen"); if (error) throw error; return data || []; },
    habilitar: async (email, nota) => {
      const m = String(email || "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) throw new Error("mail");
      const { error } = await cliente.from("permitidos").insert({ email: m, nota: nota || null });
      if (error) throw error;
    },
    quitar: async (email) => { const { error } = await cliente.rpc("admin_quitar", { p_email: email }); if (error) throw error; }
  });

  /* ── Arranque ── */
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") subir(); });
  window.addEventListener("online", () => { if (usuario) subir(); });

  function arrancar() {
    const sinCuenta = document.documentElement.classList.contains("az-sin-cuenta");
    if (sinCuenta) {
      const err = new URLSearchParams(location.search + "&" + location.hash.slice(1)).get("error_description");
      if (err) { history.replaceState(null, "", location.pathname); verMail(msgError(err)); }
      else if (enUrl) verEntrando();
      else verMail();
    }
    cliente.auth.getSession().then(({ data }) => {
      if (data && data.session) alEntrar(data.session);
      else if (enUrl && !caja) mostrarPantalla(() => verMail());
      else if (enUrl && caja && paso !== "codigo") verMail();
      else if (!sinCuenta && navigator.onLine) mostrarPantalla(() => verMail());   /* la sesión guardada ya no sirve */
    }).catch(() => {});
    cliente.auth.onAuthStateChange((ev, s) => {
      if (ev === "SIGNED_IN" && s && (!usuario || usuario.id !== s.user.id)) alEntrar(s);
      if (ev === "SIGNED_OUT") { usuario = null; admin = false; procesado = null; }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", arrancar); else arrancar();
})();
