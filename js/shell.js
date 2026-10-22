/* ============================================================
   SHELL.JS — Drawer + header (marca + atrás) + bottom nav,
   como un único componente reusable.

   Orden de carga en el <head>/<body> de cada página:
     <link rel="stylesheet" href="core.css">
     ...
     <div id="root"></div>
     <script src="preact.js"></script>   ← bundle htm+preact
     <script src="data/data-catalogo.js"></script> ← AZ_CATALOGO
     <script src="core.js"></script>     ← AZ_DIRECCION, azTexto, AZ_UNITS, AZ_MODULES, azGet/azSet
     <script src="shell.js"></script>    ← este archivo
     <script> ... App propia de la página, ver ejemplo abajo ... </script>

   Uso típico dentro de la página (el título y la bajada no se pasan
   por props: salen del catálogo de la dirección, data/data-catalogo.js):
     const React = window.React;
     function App(){
       const [darkMode, setDarkMode] = useState(true);
       const [view, setView] = useState("inicio");
       useEffect(() => { (async () => {
         setDarkMode((await azGet('az_theme','dark')) !== 'light');
       })(); }, []);
       return React.createElement(AzShell, {
         darkMode, setDarkMode, moduleId: "modulo-a",
         tabs: [{ id: "inicio", icon: "⊞", label: "Inicio" }],
         view, setView
       }, React.createElement("div", null, "contenido de esta página"));
     }
     htmPreact.render(htmPreact.h(App, null), document.getElementById('root'));
   ============================================================ */

(function () {
const { useState, useRef, useEffect, useLayoutEffect } = htmPreact;
window.React = window.React || { createElement: htmPreact.h, Fragment: function (p) { return p.children; } };
const React = window.React;

/* ── ESQUELETO (22/10/2026, a pedido de Manu) ──
   El shell no tiene contenido propio: la marca, el lema, las unidades, los
   módulos, el índice, el buscador y todos los textos salen del catálogo de
   la dirección activa (data/data-catalogo.js, vía AZ_DIRECCION y azTexto de
   core.js). Para cambiar algo de eso se toca el catálogo, no este archivo.
   Tamaños, colores y distribución quedan como estaban. */
const T = k => (typeof azTexto === "function" ? azTexto(k) : k);
const DIR = () => (typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION) || { marca: {} };

/* Paleta de colores según tema — la única parte del shell que
   sigue siendo JS en vez de CSS, porque cambia en caliente. */
function azColors(dark) {
  return {
    bg: dark ? "#0F0F14" : "#F7F5F0",
    bg2: dark ? "#17171E" : "#EDEAE4",
    bg3: dark ? "#1E1E28" : "#E2DED7",
    card: dark ? "#1A1A24" : "#FFFFFF",
    border: dark ? "#2A2A38" : "#D5D0C8",
    gold: "#C9A84C",
    text: dark ? "#F0EEE8" : "#1A1812",
    textMuted: dark ? "#888080" : "#8A847A",
    textSub: dark ? "#B8B0A8" : "#5A5450",
  };
}
window.azColors = azColors;

/* Vuelve a la pantalla anterior en el historial de navegación real
   (no a un "padre" jerárquico). Si no hay historial previo (se entró
   directo a esta URL), cae a index.html como fallback razonable. */
function azGoBack() {
  if (window.history.length > 1) window.history.back();
  else window.location.href = "index.html";
}

/* En modo standalone de iOS (agregado a pantalla de inicio), un <a>
   normal puede terminar navegando en el visor tipo Safari (con la X
   y la brújula) en vez de quedarse en la misma app — se ve como un
   "popup". La forma más confiable de evitarlo es no depender del
   navegador procesando el click del <a> en absoluto: se cancela
   apenas empieza (capture, antes que cualquier otra cosa lo vea) y
   se navega a mano por JS. También se le saca el foco a cualquier
   input activo antes de navegar — con el teclado todavía abierto,
   iOS es más propenso a mandar la navegación al visor en vez de
   quedarse en el standalone. Deja pasar sin tocar: links a otro
   origen (externos), los que declaran target="_blank" a propósito,
   los que tienen download, y clicks con modificador (cmd/ctrl/shift/
   alt) para abrir en pestaña nueva en desktop. */
function azNavigate(e, href) {
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  e.preventDefault();
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  window.location.href = href;
}
window.azNavigate = azNavigate;

/* Red de respaldo para links que no pasan por azNavigate directo
   (por ejemplo, los que arme el contenido propio de cada unidad o
   módulo, fuera de shell.js). Capture:true para llegar ANTES que
   cualquier otro listener — no esperar a la fase de bubble. */
function azInterceptLinks() {
  document.addEventListener("click", function (e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest && e.target.closest("a[href]");
    if (!a) return;
    if (a.target === "_blank" || a.hasAttribute("download")) return;
    if (a.origin !== window.location.origin) return;
    azNavigate(e, a.href);
  }, true);
}

/* Props:
   - darkMode, setDarkMode: estado de tema, manejado por la página
   - moduleId: id dentro de AZ_MODULES para resaltarlo en el drawer
   - tabs: [{id, icon, label, action?}] para la bottom nav — si no
     entran en el ancho de pantalla, esa zona scrollea horizontal
   - view, setView: estado de tab activo, manejado por la página
   - children: contenido central de la pantalla */
/* ── CAPTURA AL CUADERNO (26/09/2026, único cambio autorizado) ──
   Cuando seleccionas un texto en cualquier pantalla aparece abajo el
   botón «＋ Guardar en el cuaderno». El menú de copiar/pegar de iOS no
   se puede ampliar desde una web, por eso va aparte. También muestra el
   cartel «Guardado en el cuaderno» cuando se guarda algo desde otro
   botón (evento az-cuaderno-guardado). No aparece dentro del cuaderno
   ni al seleccionar texto en campos de escritura. */
function AzCaptura({ c }) {
  const [sel, setSel] = useState("");
  const [cartel, setCartel] = useState(false);
  useEffect(() => {
    if (typeof azGuardarEnCuaderno !== "function") return;
    let t = null;
    const revisar = () => {
      clearTimeout(t);
      t = setTimeout(() => {
        const s = window.getSelection && window.getSelection();
        const txt = s && !s.isCollapsed ? String(s).trim() : "";
        const nodo = s && s.anchorNode ? (s.anchorNode.nodeType === 1 ? s.anchorNode : s.anchorNode.parentElement) : null;
        const enCampo = nodo && nodo.closest && nodo.closest("input, textarea, [contenteditable]");
        setSel(txt.length >= 2 && !enCampo && !/cuaderno\.html/.test(location.pathname) ? txt : "");
      }, 180);
    };
    const avisar = () => { setCartel(true); setTimeout(() => setCartel(false), 2200); };
    document.addEventListener("selectionchange", revisar);
    window.addEventListener("az-cuaderno-guardado", avisar);
    return () => { document.removeEventListener("selectionchange", revisar); window.removeEventListener("az-cuaderno-guardado", avisar); };
  }, []);
  const guardar = async () => {
    const txt = sel;
    setSel("");
    try { window.getSelection().removeAllRanges(); } catch (e) {}
    await azGuardarEnCuaderno(txt);
  };
  const base = { position: "fixed", left: "50%", transform: "translateX(-50%)", bottom: "calc(env(safe-area-inset-bottom, 0px) + 86px)", zIndex: 450,
    borderRadius: 22, padding: "11px 18px", fontSize: 14, fontWeight: 700, fontFamily: "inherit", boxShadow: "0 8px 24px rgba(0,0,0,.35)", whiteSpace: "nowrap" };
  if (cartel) return React.createElement("div", { role: "status", style: Object.assign({}, base, { background: c.card, color: "#4CAF82", border: "1px solid #4CAF82" }) }, T("guardadoCuaderno"));
  if (!sel) return null;
  return React.createElement("button", {
    onMouseDown: e => e.preventDefault(), onClick: guardar,
    style: Object.assign({}, base, { background: c.gold, color: c.bg, border: "none", cursor: "pointer" })
  }, T("guardarCuaderno"));
}

/* ── REPORTAR UN ERROR (21/10/2026, a pedido de Manu) ──
   El botón 🐞 del pie del menú abre esta hoja a pantalla completa
   (patrón de hoja, Contexto §6.3, con la capa fija §6.20). Lo manda
   AzCuenta.reportar (js/cuenta.js), que adjunta solo la pantalla, el
   teléfono y los últimos errores de la página. Llega a Ajustes →
   Reportes (admin) y por mail. */
function AzReportar({ c, onClose }) {
  const capa = useRef(null);
  const [texto, setTexto] = useState(""), [esperado, setEsperado] = useState("");
  const [estado, setEstado] = useState(null);   /* null | "enviando" | "enviado" | "pendiente" | "mail" | {err} */
  const pantalla = (() => { try { if (typeof window.azFuenteActual === "function") return window.azFuenteActual(); } catch (e) {}
    const n = String(DIR().marca.nombre || "").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return String(document.title || "").replace(new RegExp("^" + n + "\\s*[—-]\\s*"), "") || T("pantallaInicio"); })();
  const enviar = async () => {
    if (texto.trim().length < 3) { setEstado({ err: T("reporteCorto") }); return; }
    setEstado("enviando");
    try {
      const A = window.AzCuenta;
      if (!A || !A.reportar) throw new Error("sin");
      setEstado(await A.reportar({ texto, esperado }));
    } catch (e) {
      const m = String(e && e.message || e);
      setEstado({ err: m === "limite" ? T("reporteLimite") : T("reporteFallo") });
    }
  };
  const lbl = t => React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: c.gold, margin: "20px 0 8px" } }, t);
  const area = (v, set, filas, ph) => React.createElement("textarea", { value: v, rows: filas, placeholder: ph, maxLength: 4000, onInput: e => set(e.target.value),
    style: { width: "100%", boxSizing: "border-box", fontSize: 16, lineHeight: 1.5, padding: 12, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, color: c.text, fontFamily: "inherit", resize: "vertical", outline: "none" } });
  const boton = (t, fn, sec, dis) => React.createElement("button", { className: "btn", onClick: fn, disabled: !!dis,
    style: { width: "100%", padding: "13px 16px", borderRadius: 10, fontSize: 14.5, fontWeight: 700, cursor: dis ? "default" : "pointer", fontFamily: "inherit", marginTop: 10, opacity: dis ? 0.6 : 1,
      background: sec ? c.bg3 : c.gold, border: `1px solid ${sec ? c.border : c.gold}`, color: sec ? c.text : c.bg } }, t);
  const listo = estado === "enviado" || estado === "pendiente" || estado === "mail";
  const aviso = { enviado: T("reporteEnviado"), pendiente: T("reportePendiente"), mail: T("reporteMail") }[estado];
  return React.createElement("div", { ref: azRefCapa(capa), role: "dialog", "aria-label": T("reportar"),
      style: { position: "fixed", inset: 0, zIndex: 300, background: c.bg, boxShadow: `0 0 0 100vmax ${c.bg}`, color: c.text, fontFamily: "'Noto Sans',sans-serif", overflowY: "auto", WebkitOverflowScrolling: "touch", animation: "fadeIn .25s ease" } },
    React.createElement("button", { onClick: onClose, "aria-label": T("reporteCerrar"),
      style: { position: "fixed", top: "var(--az-top,6vh)", right: "3vw", width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, color: c.text, fontSize: 16, cursor: "pointer", zIndex: 2 } }, "✕"),
    React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", padding: "var(--az-top,6vh) 3vw calc(4vh + var(--az-bottom,0px))" } },
      React.createElement("div", { style: { fontSize: 10.5, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: c.gold, paddingRight: 48, lineHeight: "36px" } }, T("reporteAyuda")),
      React.createElement("div", { style: { fontSize: 26, fontWeight: 800, marginTop: 4 } }, T("reportar")),
      React.createElement("div", { style: { fontSize: 15, lineHeight: 1.6, color: c.textSub, marginTop: 8 } },
        T("reporteIntro")),
      listo
        ? React.createElement(React.Fragment, null,
            React.createElement("div", { role: "status", style: { fontSize: 15, lineHeight: 1.55, marginTop: 20, padding: "12px 14px", borderRadius: 10,
              color: estado === "enviado" ? "#4CAF82" : c.text, background: estado === "enviado" ? "#4CAF8222" : c.gold + "18", border: `1px solid ${estado === "enviado" ? "#4CAF82" : c.gold + "66"}` } }, aviso),
            boton(T("reporteCerrar"), onClose))
        : React.createElement(React.Fragment, null,
            lbl(T("reporteQuePaso")),
            area(texto, setTexto, 5, T("reporteQuePasoEj")),
            lbl(T("reporteEsperabas")),
            area(esperado, setEsperado, 3, T("reporteEsperabasEj")),
            React.createElement("div", { style: { fontSize: 12.5, lineHeight: 1.55, color: c.textMuted, background: c.bg2, border: `1px solid ${c.border}`, borderRadius: 10, padding: "10px 12px", marginTop: 14 } },
              T("reporteAdjunto1"), React.createElement("b", { style: { color: c.textSub } }, pantalla), T("reporteAdjunto2")),
            estado && estado.err && React.createElement("div", { style: { fontSize: 13.5, lineHeight: 1.5, color: "#D9776F", background: "#B5605C22", borderRadius: 10, padding: "10px 12px", marginTop: 12 } }, estado.err),
            boton(estado === "enviando" ? T("reporteEnviando") : T("reporteEnviar"), enviar, false, estado === "enviando"),
            boton(T("reporteCancelar"), onClose, true))));
}

function AzShell(props) {
  const {
    darkMode, setDarkMode, moduleId,
    tabs = [], view, setView, children
  } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [reportando, setReportando] = useState(false);
  const [lexQuery, setLexQuery] = useState("");
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const headerRef = useRef(null);
  const [headerH, setHeaderH] = useState(0);
  const dark = darkMode;
  const c = azColors(dark);

  const q = lexQuery.trim();
  const buscar = window[DIR().buscador || "azSearchLexicon"];
  const results = q && typeof buscar === "function" ? buscar(q) : [];

  useEffect(() => { azInterceptLinks(); }, []);

  /* Header ahora es position:fixed (ver más abajo) para quedar
     100% clavado arriba, inmune al rebote elástico de iOS — al
     salir del flujo normal, el contenido necesita este padding-top
     exacto para no arrancar tapado debajo del header. useLayoutEffect
     mide ANTES del primer paint (no useEffect) para que no haya ni
     un frame de salto; se re-mide si cambia el tamaño de pantalla
     (rotación, teclado, etc.). */
  useLayoutEffect(() => {
    function measure() {
      if (headerRef.current) setHeaderH(headerRef.current.getBoundingClientRect().height);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return React.createElement("div", {
    style: { background: c.bg, color: c.text, minHeight: "100vh", fontFamily: "'Noto Sans',sans-serif", transition: "background .3s, color .3s" }
  },
    /* Fondo de html/body/#root sigue el tema — esto sí es dinámico */
    /* --az-top: zona segura superior compartida (cabecera, drawer y
       hojas a pantalla completa). Nunca menos de 6vh, y siempre por
       debajo de la franja del sistema + el fade de iOS 26 en iPhone.
       14/10/2026 (prueba de Manu en el iPhone): en Safari de iOS 26 la
       zona segura puede valer 0 aunque la barra de estado (liquid glass)
       tape la página; en pantallas táctiles el mínimo es 68px.
       --az-bottom: margen inferior para que el último botón de una hoja
       quede por encima de la barra de Safari y del indicador de inicio. */
    React.createElement("style", null, `:root { --az-top: max(6vh, calc(env(safe-area-inset-top, 0px) + 12px)); --az-bottom: calc(env(safe-area-inset-bottom, 0px) + 24px); }
      @media (pointer: coarse) { :root { --az-top: max(6vh, calc(env(safe-area-inset-top, 0px) + 12px), 68px); --az-bottom: max(calc(env(safe-area-inset-bottom, 0px) + 24px), 88px); } }
      html, body, #root { background: ${c.bg}; }`),
    React.createElement(AzCaptura, { c }),
    reportando && React.createElement(AzReportar, { c, onClose: () => setReportando(false) }),

    /* ── OVERLAY (el contenido central queda detrás, sin ajustarse) ── */
    drawerOpen && React.createElement("div", {
      onClick: () => setDrawerOpen(false),
      style: { position: "fixed", inset: 0, background: "rgba(0,0,0,.55)", zIndex: 200 }
    }),

    /* ── DRAWER ── */
    React.createElement("div", {
      style: {
        position: "fixed", left: 0, top: 0, bottom: 0, width: 290, zIndex: 210,
        background: c.bg2, borderRight: `1px solid ${c.border}`,
        display: "flex", flexDirection: "column",
        transform: drawerOpen ? "translateX(0)" : "translateX(-100%)",
        transition: "transform .28s cubic-bezier(.4,0,.2,1)"
      }
    },
      /* Buscador — va directo al léxico de la dirección (catálogo:
         buscador), no a módulos. Cada resultado lleva a su ficha. */
      React.createElement("div", { style: { padding: "var(--az-top) 16px 8px", flexShrink: 0 } },
        React.createElement("div", { style: { position: "relative" } },
          React.createElement("input", {
            ref: searchRef,
            value: lexQuery,
            onInput: (e) => setLexQuery(e.target.value),
            onFocus: () => { if (listRef.current) listRef.current.scrollTop = 0; },
            placeholder: T("buscar"),
            style: { width: "100%", boxSizing: "border-box", background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 9, padding: "9px 32px 9px 12px", color: c.text, fontSize: 13.5 }
          }),
          lexQuery && React.createElement("button", {
            onClick: () => { setLexQuery(""); if (searchRef.current) searchRef.current.focus(); },
            "aria-label": T("limpiarBusqueda"),
            style: { position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)", width: 22, height: 22, borderRadius: "50%", background: c.border, border: "none", color: c.text, fontSize: 12, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }
          }, "✕")
        )
      ),
      q && results.length > 0 && React.createElement("div", {
        style: { margin: "0 16px 8px", maxHeight: "40vh", overflowY: "auto", background: c.card, border: `1px solid ${c.border}`, borderRadius: 9, flexShrink: 0 }
      },
        results.map((r, i) => React.createElement("a", {
          key: r.id, href: r.href,
          onClick: (e) => azNavigate(e, r.href),
          style: {
            display: "flex", flexDirection: "column", gap: 2, padding: "9px 12px", textDecoration: "none",
            borderTop: i === 0 ? "none" : `1px solid ${c.border}`
          }
        },
          React.createElement("div", { style: { display: "flex", justifyContent: "space-between", gap: 8 } },
            React.createElement("span", { style: { color: c.text, fontWeight: 600, fontSize: 13.5 } }, r.ru),
            React.createElement("span", { style: { color: c.textMuted, fontSize: 12, textAlign: "right" } }, r.es)
          )
        ))
      ),
      q && results.length === 0 && React.createElement("div", {
        style: { margin: "0 16px 8px", fontSize: 12, color: c.textMuted, flexShrink: 0 }
      }, T("sinResultados")),

      /* Índice + listado de unidades, y por separado los módulos de
         apoyo — esta es la única zona que scrollea dentro del drawer. */
      React.createElement("div", { ref: listRef, style: { flex: 1, overflowY: "auto", padding: "6px 8px" } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "10px 10px 6px" } }, T("curso")),
        React.createElement("a", {
          href: DIR().indice,
          onClick: (e) => azNavigate(e, DIR().indice),
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, "00"), T("indice")),
        (typeof AZ_UNITS !== "undefined" ? AZ_UNITS : []).map(u => React.createElement("a", {
          key: u.id, href: u.href,
          onClick: (e) => azNavigate(e, u.href),
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, String(u.id).padStart(2, "0")), u.title)),

        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "16px 10px 6px" } }, T("modulos")),
        /* Módulos de apoyo como tarjetas (01/10/2026): ícono de color,
           título, descripción y «›». El activo, con borde dorado. */
        (typeof AZ_MODULES !== "undefined" ? AZ_MODULES : []).map(m => {
          const col = typeof azModuloColor === "function" ? azModuloColor(m) : { bg: c.gold, fg: "#fff" };
          const act = m.id === moduleId;
          return React.createElement("a", {
            key: m.id, href: m.href,
            onClick: (e) => azNavigate(e, m.href),
            style: { display: "flex", alignItems: "center", gap: 10, margin: "0 2px 6px", padding: "9px 12px", borderRadius: 10, background: act ? c.bg3 : c.card, border: `1px solid ${act ? c.gold : c.border}`, textDecoration: "none" }
          },
            React.createElement("span", { style: { width: 26, height: 26, borderRadius: 7, background: col.bg, color: col.fg, fontSize: 11, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, m.glyph),
            React.createElement("span", { style: { flex: 1, minWidth: 0 } },
              React.createElement("span", { style: { display: "block", color: act ? c.gold : c.text, fontSize: 13.5, fontWeight: 600 } }, m.title),
              React.createElement("span", { style: { display: "block", color: c.textMuted, fontSize: 11.5, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" } }, m.desc)),
            React.createElement("span", { style: { color: c.gold, fontSize: 15 } }, "›"));
        })
      ),

      /* Pie fijo del drawer — nunca se tapa al scrollear el índice.
         Toggle de tema, ajustes, reportar un error (🐞) y botón a la
         pantalla principal, uno al lado del otro. */
      React.createElement("div", { style: { padding: "12px 16px", borderTop: `1px solid ${c.border}`, display: "flex", gap: 10, flexShrink: 0 } },
        React.createElement("button", {
          onClick: () => { setDarkMode(!dark); azSet('az_theme', dark ? 'light' : 'dark'); },
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", padding: 0, flexShrink: 0 }
        }, dark ? "🌙" : "☀️"),
        /* Ajustes (26/09/2026, a pedido de Manu): por ahora, la copia de seguridad */
        React.createElement("a", {
          href: "ajustes.html", "aria-label": T("ajustes"),
          onClick: (e) => azNavigate(e, "ajustes.html"),
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, textDecoration: "none", flexShrink: 0 }
        }, "⚙️"),
        /* Reportar un error (21/10/2026, a pedido de Manu) */
        React.createElement("button", {
          onClick: () => { setDrawerOpen(false); setReportando(true); }, "aria-label": T("reportar"), title: T("reportar"),
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", padding: 0, flexShrink: 0 }
        }, "🐞"),
        React.createElement("a", {
          href: "index.html",
          onClick: (e) => azNavigate(e, "index.html"),
          style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 10, color: c.text, fontSize: 13.5, textDecoration: "none" }
        }, T("inicio"))
      )
    ),

    /* ── HEADER: fixed (NO sticky) — clavado al viewport, inmune
       al rebote elástico de iOS al scrollear. Arranca en --az-top
       (zona segura compartida). Una sola fila alineada abajo: botón
       atrás (historial, no jerarquía) + marca + lema al lado. ── */
    React.createElement("header", {
      ref: headerRef,
      style: { position: "fixed", top: 0, left: 0, right: 0, padding: "var(--az-top) 3vw 12px", borderBottom: `1px solid ${c.border}`, background: c.bg, backdropFilter: "blur(12px)", zIndex: 100 }
    },
      React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", gap: 10 } },
        React.createElement("button", {
          onClick: azGoBack, "aria-label": T("atras"),
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: c.text, cursor: "pointer", padding: 0, flexShrink: 0, marginTop: 0 }
        }, "<"),
        React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 8, minWidth: 0 } },
          React.createElement("span", { style: { fontSize: 24, lineHeight: 1, color: c.gold, fontWeight: 900, letterSpacing: -1, flexShrink: 0 } }, DIR().marca.nombre),
          React.createElement("span", { style: { fontSize: 12.5, color: c.textMuted, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", minWidth: 0 } }, DIR().marca.lema)
        )
      )
    ),

    /* ── CONTENIDO — el padding-top compensa el header fixed (si
       headerH todavía no se midió, --az-top es el mínimo para
       no mostrar un salto). Sigue quedando detrás del drawer/overlay
       cuando está abierto, nunca se ajusta ni reacomoda. ── */
    React.createElement("main", { style: { maxWidth: 960, margin: "0 auto", padding: `${headerH ? headerH + "px" : "var(--az-top)"} 3vw 3vh` } }, children),

    /* ── BOTTOM NAV: de lado a lado. Burger fijo a la izquierda
       (nunca se oculta), divisor, y a la derecha las tabs propias
       de la unidad/módulo — scrolleable horizontal si no entran. ── */
    React.createElement("div", {
      style: { position: "fixed", bottom: 0, left: 0, right: 0, background: c.bg, backdropFilter: "blur(12px)", borderTop: `1px solid ${c.border}`, zIndex: 100 }
    },
      React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "center", padding: "6px 3vw" } },
        React.createElement("button", {
          onClick: () => setDrawerOpen(true),
          style: { flexShrink: 0, background: "none", border: "none", padding: "6px 14px 6px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: c.textMuted, cursor: "pointer", fontFamily: "inherit" }
        }, React.createElement("span", { style: { fontSize: 20 } }, "☰"), React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, T("menu"))),

        tabs.length > 0 && React.createElement("div", { style: { width: 1, height: 32, background: c.border, margin: "0 8px", flexShrink: 0 } }),

        /* Tabs (27/09/2026, a pedido de Manu): chips como los botones del pie
           del menú (fondo bg3, borde, radio 10). Sin label: solo el ícono
           centrado (‹ › ⊞). Con label: ícono arriba y texto chico abajo.
           tab.texto: texto en negrita, sin borde, centrado (p. ej. «Unidad 2»).
           tab.disabled: el chip queda tenue y no hace nada. */
        React.createElement("div", { className: "bnav-scroll", style: { display: "flex", alignItems: "center", gap: 8, overflowX: "auto", flex: 1, justifyContent: tabs.some(t => t.texto) ? "space-between" : "flex-start" } },
          tabs.map(tab => {
            if (tab.texto) return React.createElement("div", { key: tab.id,
              style: { flex: 1, minWidth: 0, textAlign: "center", fontSize: 14, fontWeight: 800, color: c.text, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", padding: "0 4px" } }, tab.texto);
            const activo = view === tab.id;
            return React.createElement("button", {
              key: tab.id, className: "btn", disabled: !!tab.disabled, "aria-label": tab.label || tab.aria || tab.id,
              onClick: () => { if (tab.disabled) return; if (tab.action) tab.action(); else setView(tab.id); },
              style: { flexShrink: 0, minWidth: 44, height: tab.label ? 48 : 40, padding: tab.label ? "4px 12px" : "0 12px", borderRadius: 10,
                background: activo ? c.gold + "22" : c.bg3, border: `1px solid ${activo ? c.gold : c.border}`, color: activo ? c.gold : c.text,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2, opacity: tab.disabled ? 0.35 : 1, cursor: tab.disabled ? "default" : "pointer", fontFamily: "inherit" }
            }, React.createElement("span", { style: { fontSize: tab.label ? 16 : 18, lineHeight: 1 } }, tab.icon),
               tab.label && React.createElement("span", { style: { fontSize: 10.5, fontWeight: 600, lineHeight: 1.1 } }, tab.label));
          })
        )
      )
    ),
    React.createElement("div", { style: { height: "calc(80px + 3vh)" } })
  );
}
window.AzShell = AzShell;
})();
