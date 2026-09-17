/* ============================================================
   SHELL.JS — Drawer + header (título arriba) + bottom nav,
   como un único componente reusable.

   Orden de carga en el <head>/<body> de cada página:
     <link rel="stylesheet" href="core.css">
     ...
     <div id="root"></div>
     <script src="preact.js"></script>   ← bundle htm+preact
     <script src="core.js"></script>     ← AZ_UNITS, AZ_MODULES, azGet/azSet
     <script src="shell.js"></script>    ← este archivo
     <script> ... App propia de la página, ver ejemplo abajo ... </script>

   Uso típico dentro de la página:
     const React = window.React;
     function App(){
       const [darkMode, setDarkMode] = useState(true);
       const [view, setView] = useState("inicio");
       useEffect(() => { (async () => {
         setDarkMode((await azGet('az_theme','dark')) !== 'light');
       })(); }, []);
       return React.createElement(AzShell, {
         darkMode, setDarkMode, moduleId: "modulo-a",
         title: "Азбука", subtitle: "Módulo A",
         tabs: [{ id: "inicio", icon: "⊞", label: "Inicio" }],
         view, setView
       }, React.createElement("div", null, "contenido de esta página"));
     }
     htmPreact.render(htmPreact.h(App, null), document.getElementById('root'));
   ============================================================ */

const { useState, useRef } = htmPreact;
window.React = window.React || { createElement: htmPreact.h, Fragment: function (p) { return p.children; } };
const React = window.React;

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

/* Props:
   - darkMode, setDarkMode: estado de tema, manejado por la página
   - moduleId: id dentro de AZ_MODULES para resaltarlo en el drawer
   - title, subtitle: header
   - tabs: [{id, icon, label, action?}] para la bottom nav
   - view, setView: estado de tab activo, manejado por la página
   - children: contenido de <main> */
function AzShell(props) {
  const {
    darkMode, setDarkMode, moduleId, title, subtitle,
    tabs = [], view, setView, children
  } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const searchRef = useRef(null);
  const dark = darkMode;
  const c = azColors(dark);

  return React.createElement("div", {
    style: { background: c.bg, color: c.text, minHeight: "100vh", fontFamily: "'Inter','Helvetica Neue',sans-serif", transition: "background .3s, color .3s" }
  },
    /* Fondo de html/body/#root sigue el tema — esto sí es dinámico */
    React.createElement("style", null, `html, body, #root { background: ${c.bg}; }`),

    /* ── OVERLAY ── */
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
      React.createElement("div", { style: { padding: "6vh 16px 4px" } },
        React.createElement("a", {
          href: "index.html",
          style: { display: "flex", alignItems: "center", gap: 8, background: "none", border: `1px solid ${c.border}`, borderRadius: 10, padding: "10px 16px", color: c.text, fontSize: 14.5, textDecoration: "none", boxSizing: "border-box" }
        }, "🏠 Inicio")
      ),
      React.createElement("div", { style: { padding: "12px 16px 6px" } },
        React.createElement("input", {
          ref: searchRef, placeholder: "Buscar",
          style: { width: "100%", boxSizing: "border-box", background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 9, padding: "9px 12px", color: c.text, fontSize: 13.5 }
        })
      ),
      React.createElement("div", { style: { flex: 1, overflowY: "auto", padding: "6px 8px" } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "10px 10px 6px" } }, "Azbuka"),
        React.createElement("a", {
          href: "index.html",
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, "00"), "Índice"),
        (typeof AZ_UNITS !== "undefined" ? AZ_UNITS : []).map(u => React.createElement("a", {
          key: u.id, href: u.href,
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, String(u.id).padStart(2, "0")), u.title)),
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "16px 10px 6px" } }, "Herramientas"),
        (typeof AZ_MODULES !== "undefined" ? AZ_MODULES : []).map(m => React.createElement("a", {
          key: m.id, href: m.href,
          style: {
            display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10,
            color: m.id === moduleId ? c.gold : c.textSub, fontWeight: m.id === moduleId ? 600 : 400,
            background: m.id === moduleId ? c.bg3 : "transparent", fontSize: 13.5, textDecoration: "none"
          }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, m.glyph), m.title))
      ),
      React.createElement("div", { style: { padding: "12px 16px", borderTop: `1px solid ${c.border}`, display: "flex" } },
        React.createElement("button", {
          onClick: () => { setDarkMode(!dark); azSet('az_theme', dark ? 'light' : 'dark'); },
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", padding: 0 }
        }, dark ? "🌙" : "☀️")
      )
    ),

    /* ── HEADER / TÍTULO ARRIBA ── */
    React.createElement("header", {
      style: { padding: "6vh 3vw 0", borderBottom: `1px solid ${c.border}`, background: c.bg, backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 100 }
    },
      React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", display: "flex", flexDirection: "column", justifyContent: "center", padding: "10px 0" } },
        React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 10 } },
          React.createElement("span", { style: { fontSize: 24, color: c.gold, fontWeight: 900, letterSpacing: -1 } }, title)
        ),
        React.createElement("p", { style: { margin: "3px 0 0", fontSize: 12.5, color: c.textMuted, fontWeight: 500 } }, subtitle)
      )
    ),

    /* ── CONTENIDO DE LA PÁGINA ── */
    React.createElement("main", { style: { maxWidth: 960, margin: "0 auto", padding: "0 3vw 3vh" } }, children),

    /* ── BOTTOM NAV ── */
    React.createElement("div", {
      style: { position: "fixed", bottom: 0, left: 0, right: 0, background: c.bg, backdropFilter: "blur(12px)", borderTop: `1px solid ${c.border}`, padding: "10px 16px", zIndex: 100 }
    },
      React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", display: "flex", justifyContent: "space-around" } },
        React.createElement("button", {
          onClick: () => setDrawerOpen(true),
          style: { background: "none", border: "none", padding: "6px 20px", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: c.textMuted, cursor: "pointer", fontFamily: "inherit" }
        }, React.createElement("span", { style: { fontSize: 20 } }, "☰"), React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, "Menú")),
        tabs.map(tab => React.createElement("button", {
          key: tab.id, className: "btn",
          onClick: () => { if (tab.action) tab.action(); else setView(tab.id); },
          style: { background: "none", padding: "6px 20px", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: view === tab.id ? c.gold : c.textMuted }
        }, React.createElement("span", { style: { fontSize: 20 } }, tab.icon), React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, tab.label)))
      )
    ),
    React.createElement("div", { style: { height: "calc(80px + 3vh)" } })
  );
}
window.AzShell = AzShell;
