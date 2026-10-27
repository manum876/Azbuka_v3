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
     accesos() · habilitar(email, nota) · quitar(email) · marcarRevisor(email, si)  (solo admin)
     rol() · comprobarRol() → "admin" | "revisor" | "alumno" (22/10/2026)
     alumnos() · habilitarAlumno(email, nota) · quitarAlumno(email)  (solo revisor)
     alCambiar(fn)  → avisa cuando cambia el estado de la nube
     reportar({ texto, esperado }) → "enviado" | "pendiente" (21/10/2026)
     reportes() · marcarReporte(id, resuelto) · borrarReporte(id)  (solo admin)
     direccion() → "azbuka" | "abece" · habilitar(email, nota, direccion) · marcarDireccion(email, dir)  (27/10/2026)

   Dirección de cada alumno (27/10/2026, Manu): se elige al habilitar el mail y viene con la
   cuenta (mi_direccion). Al entrar se guarda en az_cuenta_dir (no viaja a la nube) y core.js la
   usa para todo: inicio, menú, módulos, avisos y el nombre y el ícono de la app instalada.
   La pantalla de entrada es lo único que se ve antes de saber quién es: su idioma sale de los
   chips «ES · RU» (si se tocaron), del link (?dir=abece → ruso), de la última cuenta que entró
   en el teléfono o del idioma del teléfono. En ruso muestra la marca de Abecé.

   Roles (22/10/2026, Manu): admin (Manu: todo) y revisor (Iván: ve Abecé en
   construcción y da acceso a sus alumnos, sin reportes ni la lista completa).
   El rol se guarda en az_cuenta_rol, que no viaja a la nube: core.js lo lee
   para permitir el modo prueba de Abecé (azDireccion) solo a admin y revisor.

   Reportes de errores (21/10/2026): el botón 🐞 del pie del menú
   (js/shell.js) llama a reportar(). Se adjuntan solos la pantalla, la
   dirección, el teléfono y los últimos errores de JavaScript de la
   página (window.azErroresRecientes). Sin conexión, el reporte queda
   en az_cuenta_reportes (no viaja con el progreso) y se manda solo al
   volver la red. En Supabase: tabla «reportes» y un mail al admin.
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

  /* ── Errores recientes de la página (para los reportes, 21/10/2026) ── */
  const ERRS = window.azErroresRecientes = window.azErroresRecientes || [];
  const anotarError = t => { ERRS.push(new Date().toTimeString().slice(0, 8) + " " + String(t).slice(0, 240)); if (ERRS.length > 5) ERRS.shift(); };
  window.addEventListener("error", e => anotarError((e.message || "error") + (e.filename ? " (" + String(e.filename).split("/").pop() + ":" + e.lineno + ")" : "")));
  window.addEventListener("unhandledrejection", e => anotarError("promesa: " + ((e.reason && (e.reason.message || e.reason)) || "")));

  /* Lo que se adjunta solo a cada reporte */
  function contextoReporte() {
    const ua = navigator.userAgent || "";
    const so = /iPhone|iPad|iPod/.test(ua) ? "iOS " + ((ua.match(/OS (\d+[_\d]*)/) || [])[1] || "").replace(/_/g, ".")
      : /Android/.test(ua) ? "Android " + ((ua.match(/Android ([\d.]+)/) || [])[1] || "") : /Mac OS X/.test(ua) ? "Mac" : /Windows/.test(ua) ? "Windows" : "otro";
    const nav = /CriOS|Chrome/.test(ua) ? "Chrome" : /FxiOS|Firefox/.test(ua) ? "Firefox" : /Safari/.test(ua) ? "Safari" : "otro";
    const instalada = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
    let tema = "oscuro"; try { tema = JSON.parse(localStorage.getItem("az_theme") || '"dark"') === "light" ? "claro" : "oscuro"; } catch (e) {}
    let ultimo = null; try { ultimo = JSON.parse(localStorage.getItem("az_ultimo") || "null"); } catch (e) {}
    const pantalla = (typeof window.azFuenteActual === "function" && (() => { try { return window.azFuenteActual(); } catch (e) { return ""; } })())
      || String(document.title || "").replace(/^Азбука\s*[—-]\s*/, "") || location.pathname.split("/").pop();
    const dispositivo = so + " · " + nav + (instalada ? " · app instalada" : " · navegador") + " · " + innerWidth + "×" + innerHeight + " · tema " + tema + (navigator.onLine ? "" : " · sin conexión");
    const ctx = { dispositivo, ua, ultimo };
    if (ERRS.length) ctx.errores = ERRS.join("\n");
    return { pantalla: String(pantalla).slice(0, 200), url: (location.pathname.split("/").pop() || "index.html") + location.search, contexto: ctx };
  }
  const COLA = "az_cuenta_reportes";
  const leerCola = () => { try { return JSON.parse(localStorage.getItem(COLA) || "[]") || []; } catch (e) { return []; } };
  const guardarCola = q => { try { if (q.length) localStorage.setItem(COLA, JSON.stringify(q)); else localStorage.removeItem(COLA); } catch (e) {} };

  const ROL = "az_cuenta_rol";
  const leerRol = () => { try { return localStorage.getItem(ROL) || ""; } catch (e) { return ""; } };
  window.AzCuenta = { activa, sesion: () => usuario, email: () => (usuario && usuario.email) || "", esAdmin: () => admin, rol: leerRol,
    estadoNube: () => ({ estado, meta: leerMeta() }), alCambiar: f => { oyentes.push(f); return () => { oyentes = oyentes.filter(x => x !== f); }; } };
  if (!activa) {
    window.AzCuenta.reportar = async ({ texto, esperado }) => {
      const r = contextoReporte();
      const cuerpo = "Qué pasó:\n" + texto + (esperado ? "\n\nQué esperaba:\n" + esperado : "") + "\n\nPantalla: " + r.pantalla + "\nDirección: " + r.url + "\n" + r.contexto.dispositivo + (r.contexto.errores ? "\nErrores:\n" + r.contexto.errores : "");
      location.href = "mailto:azbuka.aprenderuso@gmail.com?subject=" + encodeURIComponent("🐞 Azbuka: " + texto.slice(0, 60)) + "&body=" + encodeURIComponent(cuerpo);
      return "mail";
    };
    return;
  }

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
    #az-cuenta .idi{position:absolute;top:var(--az-top, 68px);right:6vw;display:flex;gap:6px;}
    #az-cuenta .idi button{padding:6px 10px;border-radius:10px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:${C.bg2};border:1px solid ${C.border};color:${C.textMuted};}
    #az-cuenta .idi button.on{background:${C.gold}22;border-color:${C.gold};color:${C.gold};}
  `;
  document.head.appendChild(css);

  const enUrl = /[?&#](code|error|error_description|access_token)=/.test(location.href);
  if (!haySesionGuardada() || enUrl) document.documentElement.classList.add("az-sin-cuenta");

  /* ── Idioma de la pantalla de entrada (27/10/2026) ── */
  const IDI = "az_cuenta_idioma", DIR = "az_cuenta_dir";
  function idioma() {
    try { const el = ls.getItem(IDI); if (el === "es" || el === "ru") return el; } catch (e) {}
    const d = new URLSearchParams(location.search).get("dir");
    if (d === "abece") return "ru"; if (d === "azbuka") return "es";
    try { const cd = ls.getItem(DIR); if (cd === "abece") return "ru"; if (cd === "azbuka") return "es"; } catch (e) {}
    const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ""];
    return langs.some(l => /^ru/i.test(l || "")) ? "ru" : "es";
  }
  const TXE = {
    es: { logo: "Азбука", baja: "Aprende ruso desde cero", entrar: "Entrar",
      entrarTxt: "Escribe tu mail y te mandamos un código para entrar. No hace falta contraseña.", ph: "tu@mail.com",
      incompleto: "Revisa el mail: parece incompleto.", enviar: "Enviarme el código", enviando: "Enviando…", o: "o", google: "Entrar con Google",
      revisa: "Revisa tu mail", revisaTxt: m => `Te mandamos un código a ${m}. Escríbelo aquí. Si no llega en un minuto, mira en «Spam» o «Promociones».`,
      digitos: n => "El código tiene " + n + " números.", ok: "Entrar", entrando: "Entrando…", otroCod: "Mandarme otro código", otroMail: "Usar otro mail",
      sinAcceso: "Sin acceso", sinAccesoTxt: "Este mail ya no tiene acceso a Azbuka. Si crees que es un error, escríbele a Manu.", conOtro: "Entrar con otro mail",
      momento: "Un momento.",
      priv: "Tu mail se usa solo para entrar y para guardar tu progreso. Puedes eliminar tu cuenta y todos tus datos cuando quieras, desde Ajustes.",
      errSmtp: "No se pudo mandar el mail con el código. Es un problema del envío de mails, no de tu mail: avísale a Manu.",
      errNo: "Este mail no tiene acceso a Azbuka. Pídele a Manu que lo habilite.",
      errMuchos: "Pediste muchos códigos seguidos. Espera un minuto y prueba de nuevo.",
      errCodigo: "El código no es correcto o ya venció. Revísalo o pide uno nuevo.",
      errRed: "No hay conexión. Para entrar la primera vez necesitas internet.",
      errOtro: "No se pudo completar. Prueba de nuevo en un momento.", detalle: "Detalle" },
    /* BORRADOR: lo revisa Iván */
    ru: { logo: "Abecé", baja: "Учи испанский с нуля", entrar: "Вход",
      entrarTxt: "Напиши свою почту, и мы пришлём код для входа. Пароль не нужен.", ph: "name@mail.ru",
      incompleto: "Проверь адрес: кажется, он неполный.", enviar: "Прислать код", enviando: "Отправляем…", o: "или", google: "Войти через Google",
      revisa: "Проверь почту", revisaTxt: m => `Мы отправили код на ${m}. Введи его здесь. Если письмо не пришло за минуту, загляни в «Спам» или «Промоакции».`,
      digitos: n => "В коде " + n + " цифр.", ok: "Войти", entrando: "Входим…", otroCod: "Прислать другой код", otroMail: "Ввести другую почту",
      sinAcceso: "Нет доступа", sinAccesoTxt: "У этой почты больше нет доступа к Abecé. Если это ошибка, напиши своему преподавателю.", conOtro: "Войти с другой почтой",
      momento: "Минутку.",
      priv: "Почта нужна только для входа и чтобы сохранять твой прогресс. Ты можешь удалить аккаунт и все свои данные в любой момент в настройках.",
      errSmtp: "Не удалось отправить письмо с кодом. Проблема в отправке писем, а не в твоей почте: сообщи преподавателю.",
      errNo: "У этой почты нет доступа к Abecé. Попроси преподавателя открыть доступ.",
      errMuchos: "Ты запросил слишком много кодов подряд. Подожди минуту и попробуй снова.",
      errCodigo: "Код неверный или устарел. Проверь его или запроси новый.",
      errRed: "Нет соединения. Для первого входа нужен интернет.",
      errOtro: "Не получилось. Попробуй ещё раз чуть позже.", detalle: "Подробности" }
  };
  let L = TXE[idioma()];
  const marcaEntrada = () => { if (typeof azMarcaInstalacion === "function") azMarcaInstalacion(idioma() === "ru" ? "abece" : (typeof AZ_DIRECCION !== "undefined" ? AZ_DIRECCION.id : "azbuka")); };

  /* ── Pantalla de entrada ── */
  let caja = null, paso = "mail", mailIngresado = "", reenvio = 0, relojReenvio = null, ultimaVista = null;
  const esc = s => String(s).replace(/[&<>"]/g, x => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[x]));
  function montar() {
    if (!caja) { caja = document.createElement("div"); caja.id = "az-cuenta"; caja.setAttribute("role", "dialog"); document.body.appendChild(caja); }
    return caja;
  }
  function pantalla(html) {
    const el = montar();
    const idi = idioma();
    el.innerHTML = `<div class="idi" role="group" aria-label="Idioma · Язык"><button data-i="es" class="${idi === "es" ? "on" : ""}">ES</button><button data-i="ru" class="${idi === "ru" ? "on" : ""}">RU</button></div><div class="in"><div class="logo">${L.logo}</div><div class="baja">${L.baja}</div>${html}</div>`;
    el.querySelectorAll(".idi button").forEach(b => b.onclick = () => {
      try { setOrig.call(ls, IDI, b.getAttribute("data-i")); } catch (e) {}
      L = TXE[idioma()]; marcaEntrada();
      if (ultimaVista) ultimaVista();
    });
    marcaEntrada();
    return el;
  }
  function msgError(e) {
    const t = String((e && (e.message || e.error_description || e.msg)) || e || "");
    if (/sending|smtp|mail.*(fail|error)/i.test(t)) return L.errSmtp + " (" + L.detalle + ": " + t.slice(0, 120) + ")";
    if (/AZ_NO_PERMITIDO|Database error saving new user|not allowed|Signups not allowed/i.test(t)) return L.errNo;
    if (/rate|too many|security purposes|seconds/i.test(t)) return L.errMuchos;
    if (/expired|invalid|token/i.test(t)) return L.errCodigo;
    if (/fetch|network|Failed/i.test(t)) return L.errRed;
    return L.errOtro + (t ? " (" + L.detalle + ": " + t.slice(0, 120) + ")" : "");
  }
  const PRIV = () => `<div class="priv">${L.priv}</div>`;

  function verMail(error, aviso) {
    paso = "mail";
    ultimaVista = () => { mailIngresado = (document.getElementById("azc-mail") || {}).value || mailIngresado; verMail(); };
    const el = pantalla(`
      <div class="tit">${L.entrar}</div>
      <div class="txt">${L.entrarTxt}</div>
      <input id="azc-mail" type="email" inputmode="email" autocomplete="email" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="${L.ph}" value="${esc(mailIngresado)}">
      ${error ? `<div class="err">${esc(error)}</div>` : ""}${aviso ? `<div class="ok">${esc(aviso)}</div>` : ""}
      <button class="b" id="azc-enviar">${L.enviar}</button>
      ${CFG.google ? `<div class="o">${L.o}</div><button class="b sec" id="azc-google">${L.google}</button>` : ""}
      ${PRIV()}`);
    const inp = el.querySelector("#azc-mail"), btn = el.querySelector("#azc-enviar");
    const enviar = async () => {
      const m = inp.value.trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) { verMail(L.incompleto); return; }
      mailIngresado = m; btn.disabled = true; btn.textContent = L.enviando;
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
    ultimaVista = () => verCodigo();
    const el = pantalla(`
      <div class="tit">${L.revisa}</div>
      <div class="txt">${L.revisaTxt(`<b style="color:${C.text}">${esc(mailIngresado)}</b>`)}</div>
      <input id="azc-cod" class="cod" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="${CFG.digitos}" placeholder="${"•".repeat(CFG.digitos)}">
      ${error ? `<div class="err">${esc(error)}</div>` : ""}
      <button class="b" id="azc-ok">${L.ok}</button>
      <button class="lnk" id="azc-re">${L.otroCod}</button>
      <button class="lnk" id="azc-otro" style="padding-top:6px;color:${C.textMuted}">${L.otroMail}</button>
      ${PRIV()}`);
    const inp = el.querySelector("#azc-cod"), btn = el.querySelector("#azc-ok"), re = el.querySelector("#azc-re");
    const entrar = async () => {
      const t = inp.value.replace(/\D/g, "");
      if (t.length < CFG.digitos) { verCodigo(L.digitos(CFG.digitos)); return; }
      btn.disabled = true; btn.textContent = L.entrando;
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
      if (s > 0) { re.disabled = true; re.textContent = L.otroCod + " (" + s + " " + (L === TXE.ru ? "с" : "s") + ")"; } else { re.disabled = false; re.textContent = L.otroCod; clearInterval(relojReenvio); } };
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
    ultimaVista = verSinAcceso;
    pantalla(`
      <div class="tit">${L.sinAcceso}</div>
      <div class="txt">${L.sinAccesoTxt}</div>
      <button class="b sec" id="azc-otro">${L.conOtro}</button>`).querySelector("#azc-otro").onclick = () => verMail();
  }
  function verEntrando() { ultimaVista = verEntrando; pantalla(`<div class="tit">${L.entrando}</div><div class="txt">${L.momento}</div>`); }

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
    if (typeof azMarcaInstalacion === "function" && typeof AZ_DIRECCION !== "undefined") azMarcaInstalacion(AZ_DIRECCION.id);
    avisarListo(usuario);
    actualizarRol().then(actualizarDireccion);
    setTimeout(enviarCola, 3000);
    await sincronizarAlEntrar();
  }

  /* ── Rol (22/10/2026): se guarda en el teléfono para que core.js sepa, al
     cargar la página, si puede abrir Abecé en modo prueba. Si el rol cambió y
     la página ya se armó con una dirección que no le toca, se recarga una vez. ── */
  async function actualizarRol() {
    let r = null;
    try { const { data, error } = await cliente.rpc("mi_rol"); if (!error && data) r = data; } catch (e) {}
    if (r == null) {                      /* SQL viejo (sin mi_rol) o sin red: solo se sabe si es admin */
      try { const { data, error } = await cliente.rpc("es_admin"); if (error) return leerRol(); r = data === true ? "admin" : "alumno"; } catch (e) { return leerRol(); }
    }
    admin = r === "admin";
    const antes = leerRol();
    try { setOrig.call(ls, ROL, r); } catch (e) {}
    const privilegiado = x => x === "admin" || x === "revisor";
    if (privilegiado(antes) && !privilegiado(r) && typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION.id !== "azbuka") location.reload();
    return r;
  }

  /* ── Dirección de la cuenta (27/10/2026): azbuka o abece, elegida al habilitar el mail.
     Si cambió y la página se armó con otra dirección, se recarga una vez. ── */
  const leerDir = () => { try { return ls.getItem(DIR) || ""; } catch (e) { return ""; } };
  async function actualizarDireccion() {
    let d = null;
    try { const { data, error } = await cliente.rpc("mi_direccion"); if (!error && (data === "azbuka" || data === "abece")) d = data; } catch (e) {}
    if (!d) return leerDir();                 /* SQL viejo (sin mi_direccion) o sin red: queda la que había */
    const antes = leerDir();
    try { setOrig.call(ls, DIR, d); } catch (e) {}
    if (antes !== d && typeof azDireccion === "function" && typeof AZ_DIRECCION !== "undefined" && azDireccion().id !== AZ_DIRECCION.id) {
      try { if (!sessionStorage.getItem("az_cuenta_recarga_dir")) { sessionStorage.setItem("az_cuenta_recarga_dir", "1"); location.reload(); } } catch (e) {}
    }
    return d;
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
    comprobarRol: async () => { await listo; return actualizarRol(); },
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
    direccion: leerDir,
    accesos: async () => { const { data, error } = await cliente.rpc("admin_resumen"); if (error) throw error; return data || []; },
    habilitar: async (email, nota, direccion) => {
      const m = String(email || "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) throw new Error("mail");
      const fila = { email: m, nota: nota || null, invitado_por: (usuario && usuario.email || "").toLowerCase() || null, direccion: direccion === "abece" ? "abece" : "azbuka" };
      let { error } = await cliente.from("permitidos").insert(fila);
      /* Si todavía no se corrió el SQL nuevo (sin la columna direccion), se habilita igual */
      if (error && /direccion/.test(error.message || "")) { delete fila.direccion; ({ error } = await cliente.from("permitidos").insert(fila)); }
      /* Si todavía no se corrió el SQL del 22/10/2026 (sin la columna invitado_por), se habilita igual */
      if (error && /invitado_por/.test(error.message || "")) ({ error } = await cliente.from("permitidos").insert({ email: m, nota: nota || null }));
      if (error) throw error;
    },
    marcarDireccion: async (email, dir) => { const { error } = await cliente.from("permitidos").update({ direccion: dir === "abece" ? "abece" : "azbuka" }).eq("email", email); if (error) throw error; },
    quitar: async (email) => { const { error } = await cliente.rpc("admin_quitar", { p_email: email }); if (error) throw error; },
    marcarRevisor: async (email, si) => { const { error } = await cliente.from("permitidos").update({ revisor: !!si }).eq("email", email); if (error) throw error; },
    /* Revisor (22/10/2026): solo los alumnos que habilitó él */
    alumnos: async () => { const { data, error } = await cliente.rpc("revisor_resumen"); if (error) throw error; return data || []; },
    habilitarAlumno: async (email, nota) => {
      const m = String(email || "").trim().toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m)) throw new Error("mail");
      const { error } = await cliente.rpc("revisor_habilitar", { p_email: m, p_nota: nota || "" });
      if (error) throw error;
    },
    quitarAlumno: async (email) => { const { error } = await cliente.rpc("revisor_quitar", { p_email: email }); if (error) throw error; },
    /* Reportes de errores (21/10/2026) */
    reportar: async ({ texto, esperado }) => {
      const t = String(texto || "").trim(), es = String(esperado || "").trim();
      if (t.length < 3) throw new Error("corto");
      const fila = Object.assign({ texto: t.slice(0, 4000), esperado: es ? es.slice(0, 2000) : null }, contextoReporte());
      const ok = await enviarReporte(fila);
      if (ok === true) { enviarCola(); return "enviado"; }
      if (ok === "limite") throw new Error("limite");
      const q = leerCola(); q.push(fila); guardarCola(q.slice(-10));
      return "pendiente";
    },
    reportes: async () => {
      const { data, error } = await cliente.from("reportes").select("id, email, texto, esperado, pantalla, url, contexto, creado, resuelto").order("creado", { ascending: false }).limit(200);
      if (error) throw error; return data || [];
    },
    marcarReporte: async (id, resuelto) => { const { error } = await cliente.from("reportes").update({ resuelto: !!resuelto }).eq("id", id); if (error) throw error; },
    borrarReporte: async (id) => { const { error } = await cliente.from("reportes").delete().eq("id", id); if (error) throw error; }
  });
  async function enviarReporte(fila) {
    if (!navigator.onLine) return false;
    try { await listo; } catch (e) {}
    if (!usuario) return false;
    try {
      const { error } = await cliente.from("reportes").insert(Object.assign({ user_id: usuario.id, email: (usuario.email || "").toLowerCase() }, fila));
      if (error) { if (/AZ_MUCHOS_REPORTES/.test(error.message || "")) return "limite"; throw error; }
      return true;
    } catch (e) { return false; }
  }
  let enviandoCola = false;
  async function enviarCola() {
    if (enviandoCola || !usuario || !navigator.onLine) return;
    const q = leerCola(); if (!q.length) return;
    enviandoCola = true;
    const quedan = [];
    for (const f of q) { const ok = await enviarReporte(f); if (ok !== true && ok !== "limite") quedan.push(f); }
    guardarCola(quedan); enviandoCola = false;
  }

  /* ── Arranque ── */
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") subir(); });
  window.addEventListener("online", () => { if (usuario) { subir(); enviarCola(); } });

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
