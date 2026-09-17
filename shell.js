/* ============================================================
   SHELL.JS — Drawer + header (Азбука fijo + atrás) + bottom nav,
   como un único componente reusable.

   Orden de carga en el <head>/<body> de cada página:
     <link rel="stylesheet" href="core.css">
     ...
     <div id="root"></div>
     <script src="preact.js"></script>   ← bundle htm+preact
     <script src="core.js"></script>     ← AZ_UNITS, AZ_MODULES, AZ_LEXICO, azGet/azSet
     <script src="shell.js"></script>    ← este archivo
     <script> ... App propia de la página, ver ejemplo abajo ... </script>

   Uso típico dentro de la página (el título y la bajada ya NO se
   pasan por props: son siempre "Азбука" / "Aprende ruso desde cero"
   en todas las pantallas):
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

/* Vuelve a la pantalla anterior en el historial de navegación real
   (no a un "padre" jerárquico). Si no hay historial previo (se entró
   directo a esta URL), cae a index.html como fallback razonable. */
function azGoBack() {
  if (window.history.length > 1) window.history.back();
  else window.location.href = "index.html";
}

/* Props:
   - darkMode, setDarkMode: estado de tema, manejado por la página
   - moduleId: id dentro de AZ_MODULES para resaltarlo en el drawer
   - tabs: [{id, icon, label, action?}] para la bottom nav — si no
     entran en el ancho de pantalla, esa zona scrollea horizontal
   - view, setView: estado de tab activo, manejado por la página
   - children: contenido central de la pantalla */
function AzShell(props) {
  const {
    darkMode, setDarkMode, moduleId,
    tabs = [], view, setView, children
  } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lexQuery, setLexQuery] = useState("");
  const searchRef = useRef(null);
  const listRef = useRef(null);
  const dark = darkMode;
  const c = azColors(dark);

  const q = lexQuery.trim();
  const results = q && typeof azSearchLexicon === "function" ? azSearchLexicon(q) : [];

  return React.createElement("div", {
    style: { background: c.bg, color: c.text, minHeight: "100vh", fontFamily: "'Inter','Helvetica Neue',sans-serif", transition: "background .3s, color .3s" }
  },
    /* Fondo de html/body/#root sigue el tema — esto sí es dinámico */
    React.createElement("style", null, `html, body, #root { background: ${c.bg}; }`),

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
      /* Buscador — va DIRECTO a LEXICON_COMER (las ~4.931 palabras),
         no a módulos. Cada resultado lleva a su ficha. */
      React.createElement("div", { style: { padding: "6vh 16px 8px", flexShrink: 0 } },
        React.createElement("div", { style: { position: "relative" } },
          React.createElement("input", {
            ref: searchRef,
            value: lexQuery,
            onInput: (e) => setLexQuery(e.target.value),
            onFocus: () => { if (listRef.current) listRef.current.scrollTop = 0; },
            placeholder: "Buscar en el léxico…",
            style: { width: "100%", boxSizing: "border-box", background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 9, padding: "9px 32px 9px 12px", color: c.text, fontSize: 13.5 }
          }),
          lexQuery && React.createElement("button", {
            onClick: () => { setLexQuery(""); if (searchRef.current) searchRef.current.focus(); },
            "aria-label": "Limpiar búsqueda",
            style: { position: "absolute", right: 6, top: "50%", transform: "translateY(-50%)", width: 22, height: 22, borderRadius: "50%", background: c.border, border: "none", color: c.text, fontSize: 12, lineHeight: 1, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: 0 }
          }, "✕")
        )
      ),
      q && results.length > 0 && React.createElement("div", {
        style: { margin: "0 16px 8px", maxHeight: "40vh", overflowY: "auto", background: c.card, border: `1px solid ${c.border}`, borderRadius: 9, flexShrink: 0 }
      },
        results.map((r, i) => React.createElement("a", {
          key: r.id, href: r.href,
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
      }, "Sin resultados"),

      /* Índice + listado de unidades, y por separado los módulos de
         apoyo — esta es la única zona que scrollea dentro del drawer. */
      React.createElement("div", { ref: listRef, style: { flex: 1, overflowY: "auto", padding: "6px 8px" } },
        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "10px 10px 6px" } }, "Azbuka"),
        React.createElement("a", {
          href: "azbuka-index.html",
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, "00"), "Índice"),
        (typeof AZ_UNITS !== "undefined" ? AZ_UNITS : []).map(u => React.createElement("a", {
          key: u.id, href: u.href,
          style: { display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10, color: c.textSub, fontSize: 13.5, textDecoration: "none" }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, String(u.id).padStart(2, "0")), u.title)),

        React.createElement("div", { style: { fontSize: 10, letterSpacing: 1.5, textTransform: "uppercase", color: c.textMuted, padding: "16px 10px 6px" } }, "Módulos de apoyo"),
        (typeof AZ_MODULES !== "undefined" ? AZ_MODULES : []).map(m => React.createElement("a", {
          key: m.id, href: m.href,
          style: {
            display: "flex", alignItems: "center", gap: 8, padding: "9px 12px", borderRadius: 10,
            color: m.id === moduleId ? c.gold : c.textSub, fontWeight: m.id === moduleId ? 600 : 400,
            background: m.id === moduleId ? c.bg3 : "transparent", fontSize: 13.5, textDecoration: "none"
          }
        }, React.createElement("span", { style: { fontSize: 11, color: c.textMuted, minWidth: 18 } }, m.glyph), m.title))
      ),

      /* Pie fijo del drawer — nunca se tapa al scrollear el índice.
         Toggle de tema + botón a la pantalla principal, uno al lado
         del otro. */
      React.createElement("div", { style: { padding: "12px 16px", borderTop: `1px solid ${c.border}`, display: "flex", gap: 10, flexShrink: 0 } },
        React.createElement("button", {
          onClick: () => { setDarkMode(!dark); azSet('az_theme', dark ? 'light' : 'dark'); },
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, cursor: "pointer", padding: 0, flexShrink: 0 }
        }, dark ? "🌙" : "☀️"),
        React.createElement("a", {
          href: "index.html",
          style: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: c.bg3, border: `1px solid ${c.border}`, borderRadius: 10, color: c.text, fontSize: 13.5, textDecoration: "none" }
        }, "🏠 Inicio")
      )
    ),

    /* ── HEADER: siempre visible (sticky), respeta 6% de zona segura
       superior. Азбука fijo en todas las pantallas + bajada fija +
       botón atrás (historial de navegación, no jerarquía). ── */
    React.createElement("header", {
      style: { padding: "6vh 3vw 14px", borderBottom: `1px solid ${c.border}`, background: c.bg, backdropFilter: "blur(12px)", position: "sticky", top: 0, zIndex: 100 }
    },
      React.createElement("div", { style: { maxWidth: 960, margin: "0 auto", display: "flex", alignItems: "flex-start", gap: 10 } },
        React.createElement("button", {
          onClick: azGoBack, "aria-label": "Atrás",
          style: { width: 36, height: 36, borderRadius: 10, background: c.bg3, border: `1px solid ${c.border}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: c.text, cursor: "pointer", padding: 0, flexShrink: 0, marginTop: 0 }
        }, "<"),
        React.createElement("div", { style: { display: "flex", flexDirection: "column" } },
          React.createElement("span", { style: { fontSize: 24, color: c.gold, fontWeight: 900, letterSpacing: -1 } }, "Азбука"),
          React.createElement("span", { style: { marginTop: 3, fontSize: 12.5, color: c.textMuted, fontWeight: 500 } }, "Aprende ruso desde cero")
        )
      )
    ),

    /* ── CONTENIDO — queda detrás del drawer/overlay cuando está
       abierto, nunca se ajusta ni reacomoda. ── */
    React.createElement("main", { style: { maxWidth: 960, margin: "0 auto", padding: "0 3vw 3vh" } }, children),

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
        }, React.createElement("span", { style: { fontSize: 20 } }, "☰"), React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, "Menú")),

        tabs.length > 0 && React.createElement("div", { style: { width: 1, height: 32, background: c.border, margin: "0 8px", flexShrink: 0 } }),

        React.createElement("div", { className: "bnav-scroll", style: { display: "flex", overflowX: "auto", flex: 1 } },
          tabs.map(tab => React.createElement("button", {
            key: tab.id, className: "btn",
            onClick: () => { if (tab.action) tab.action(); else setView(tab.id); },
            style: { flexShrink: 0, background: "none", padding: "6px 16px", borderRadius: 10, display: "flex", flexDirection: "column", alignItems: "center", gap: 3, color: view === tab.id ? c.gold : c.textMuted }
          }, React.createElement("span", { style: { fontSize: 20 } }, tab.icon), React.createElement("span", { style: { fontSize: 11, fontWeight: 600 } }, tab.label)))
        )
      )
    ),
    React.createElement("div", { style: { height: "calc(80px + 3vh)" } })
  );
}
window.AzShell = AzShell;
})();
