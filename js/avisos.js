/* ============================================================
   AVISOS.JS — Avisos del inicio (blindaje, 02/10/2026)
   ------------------------------------------------------------
   Dos avisos centrados, con el estilo de la burbuja (§6.17 del
   Contexto). Solo los muestra index.html, así nunca interrumpen
   un ejercicio. Como mucho, uno por día; si coinciden, va primero
   el de instalar. Si está abierto el desafío del día (hoy.js), el
   aviso espera a que se cierre (05/10/2026).

   1. INSTALAR. Solo en teléfonos y si la app no está instalada.
      · iPhone: instrucciones en tres pasos (Apple no deja instalar
        con un botón).
      · Android: botón «Instalar» de un toque (beforeinstallprompt).
        Si el navegador no lo ofrece, no se muestra.
      · Desde la primera visita (05/10/2026). «Ahora no» o ✕: vuelve en 3 días.
        «No mostrar más»: no vuelve.
   2. COPIA DE SEGURIDAD. Con el botón para guardarla ahí mismo.
      · Si nunca se guardó: a partir del 3.er día de uso, si hay
        progreso o notas.
      · Si ya se guardó: cada 7 días, pero solo si hubo progreso
        nuevo desde la última copia (azFirmaProgreso, core.js).
      · «Recordámelo después» o ✕: vuelve en 2 días.

   Guarda su estado en az_avisos:
     { visitas, primerUso, ultimoAviso, instalarHasta, instalarNunca, copiaHasta }
   y lee az_copia ({ fecha, firma }), que escribe azGuardarCopia.
   ============================================================ */
(function () {
  /* Android avisa que se puede instalar apenas carga la página: hay
     que guardar el evento antes de que exista el componente. */
  window.azPromptInstalar = null;
  window.addEventListener("beforeinstallprompt", e => {
    e.preventDefault();
    window.azPromptInstalar = e;
    window.dispatchEvent(new CustomEvent("az-instalable"));
  });
  window.addEventListener("appinstalled", () => { window.azPromptInstalar = null; });
})();

const AZ_AVISOS = { visitasInstalar: 1, instalarPausa: 3, copiaPrimera: 3, copiaCada: 7, copiaPausa: 2 };

function azAvHoy() { return new Date().toISOString().slice(0, 10); }
function azAvMasDias(n) { const d = new Date(); d.setDate(d.getDate() + n); return d.toISOString().slice(0, 10); }
function azAvDiasDesde(iso) { return iso ? Math.floor((Date.now() - new Date(iso).getTime()) / 86400000) : 0; }
function azAvInstalada() {
  return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true;
}
function azAvSistema() {
  const ua = navigator.userAgent || "";
  if (/iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) return "ios";
  if (/Android/.test(ua)) return "android";
  return null;
}
function azAvStats() {
  let p = {}, cu = {};
  try { p = JSON.parse(localStorage.getItem("az_progress") || "{}") || {}; } catch (e) {}
  try { cu = JSON.parse(localStorage.getItem("az_cuaderno") || "{}") || {}; } catch (e) {}
  const ej = Object.values(p.ejercicios || {}).reduce((s, x) => s + ((x && x.v) || 0), 0);
  const pal = Object.keys(p.items || {}).filter(k => k.indexOf("lex:") === 0 && p.items[k].level === 2).length;
  const notas = (cu.secciones || []).reduce((s, x) => s + ((x.notas || []).length), 0);
  return { ej, pal, notas };
}

/* Decide qué aviso toca hoy (o ninguno). Cuenta la visita una vez
   por sesión y anota el primer día de uso. */
async function azAvDecidir() {
  const av = Object.assign({ visitas: 0 }, await azGet("az_avisos", {}));
  const hoy = azAvHoy();
  if (!av.primerUso) av.primerUso = hoy;
  try {
    if (!sessionStorage.getItem("az_sesion")) { sessionStorage.setItem("az_sesion", "1"); av.visitas++; }
  } catch (e) {}
  await azSet("az_avisos", av);
  if (av.ultimoAviso === hoy) return null;

  const sis = azAvSistema();
  if (sis && !azAvInstalada() && !av.instalarNunca && av.visitas >= AZ_AVISOS.visitasInstalar && !(av.instalarHasta > hoy)) {
    if (sis === "ios") return { tipo: "ios" };
    if (!window.azPromptInstalar) await new Promise(r => setTimeout(r, 3000));
    if (window.azPromptInstalar) return { tipo: "android" };
  }

  if (av.copiaHasta > hoy) return null;
  const st = azAvStats();
  if (!st.ej && !st.notas) return null;
  const copia = await azGet("az_copia", null);
  if (copia) {
    if (copia.firma === azFirmaProgreso()) return null;
    const dias = azAvDiasDesde(copia.fecha);
    if (dias < AZ_AVISOS.copiaCada) return null;
    return { tipo: "copia", dias, st };
  }
  if (azAvDiasDesde(av.primerUso) < AZ_AVISOS.copiaPrimera) return null;
  return { tipo: "copia", dias: null, st };
}

async function azAvAnotar(cambios) {
  const av = await azGet("az_avisos", {});
  await azSet("az_avisos", Object.assign(av, cambios));
}

const AZ_AV_ICONOS = {
  compartir: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12"/><path d="M8 7l4-4 4 4"/><path d="M6 11H5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-1"/></svg>',
  mas: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><rect x="4" y="4" width="16" height="16" rx="4"/><path d="M12 8v8M8 12h8"/></svg>',
  puntos: '<svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>'
};

/* pausado: mientras está abierto el desafío del día (hoy.js), el aviso espera */
function AzAvisos({ c, pausado }) {
  const h = React.createElement;
  const { useState, useEffect } = htmPreact;
  const [aviso, setAviso] = useState(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    let vivo = true;
    const t = setTimeout(async () => {
      const a = await azAvDecidir();
      if (vivo && a) { setAviso(a); azAvAnotar({ ultimoAviso: azAvHoy() }); }
    }, 1200);
    return () => { vivo = false; clearTimeout(t); };
  }, []);

  if (!aviso || pausado) return null;
  const cerrar = () => setAviso(null);
  const esInstalar = aviso.tipo === "ios" || aviso.tipo === "android";
  const ahoraNo = () => {
    azAvAnotar(esInstalar ? { instalarHasta: azAvMasDias(AZ_AVISOS.instalarPausa) } : { copiaHasta: azAvMasDias(AZ_AVISOS.copiaPausa) });
    cerrar();
  };
  const nunca = () => { azAvAnotar({ instalarNunca: true }); cerrar(); };
  const instalar = async () => {
    const ev = window.azPromptInstalar;
    if (!ev) { cerrar(); return; }
    ev.prompt();
    try {
      const r = await ev.userChoice;
      window.azPromptInstalar = null;
      if (r && r.outcome === "accepted") azAvAnotar({ instalarNunca: true });
      else azAvAnotar({ instalarHasta: azAvMasDias(AZ_AVISOS.instalarPausa) });
    } catch (e) {}
    cerrar();
  };
  const guardar = async () => {
    const ok = await azGuardarCopia();
    if (ok) { setListo(true); setTimeout(cerrar, 1600); }
  };

  const ico = svg => h("span", { dangerouslySetInnerHTML: { __html: svg }, style: { display: "inline-flex" } });
  const chip = (...hijos) => h("span", { className: "az-av-chip" }, ...hijos);
  const paso = (n, ...hijos) => h("div", { className: "az-av-paso" }, h("div", { className: "az-av-num" }, n), h("div", null, ...hijos));
  const top = (icono, titulo, nombre) => h("div", { className: "az-av-top" },
    icono, h("div", { className: "az-av-tit", id: "az-av-tit" }, titulo),
    h("button", { className: "az-av-x", onClick: ahoraNo, "aria-label": "Cerrar" }, "✕"));
  const icoApp = h("div", { className: "az-av-ico" }, "Аз");
  const porQue = h("div", { className: "az-av-txt" }, "Así funciona ", h("b", null, "sin internet"), " y tu progreso queda ", h("b", null, "bien guardado"), " en el teléfono.",
    aviso.tipo === "ios" ? " Son tres toques:" : " Se abre desde su ícono, como cualquier app.");
  const pieInstalar = h("div", { className: "az-av-pie" },
    h("button", { className: "az-av-b", onClick: nunca }, "No mostrar más"),
    h("button", { className: "az-av-a", onClick: ahoraNo }, "Ahora no"));

  let cuerpo;
  if (aviso.tipo === "ios") {
    cuerpo = [top(icoApp, "Instalá Azbuka en tu iPhone"), porQue,
      h("div", { className: "az-av-pasos" },
        paso(1, "En Safari, tocá ", chip(ico(AZ_AV_ICONOS.compartir), " Compartir"),
          h("div", { className: "az-av-sub" }, "Si no lo ves, está adentro de ", chip(ico(AZ_AV_ICONOS.puntos)))),
        paso(2, "Bajá y elegí ", chip(ico(AZ_AV_ICONOS.mas), " Agregar a inicio")),
        paso(3, "Tocá ", h("b", null, "Agregar"), ". Desde ahora, abrí Azbuka con su ícono.")),
      pieInstalar];
  } else if (aviso.tipo === "android") {
    cuerpo = [top(icoApp, "Instalá Azbuka en tu teléfono"), porQue,
      h("button", { className: "az-av-btn", onClick: instalar }, "📲 Instalar"), pieInstalar];
  } else {
    const st = aviso.st;
    cuerpo = [top(h("div", { className: "az-av-ico n" }, "💾"), "Guardá una copia de tu progreso"),
      h("div", { className: "az-av-txt" },
        aviso.dias == null ? "Todavía no guardaste ninguna copia." : h(React.Fragment, null, "Hace ", h("b", null, aviso.dias + " días"), " que no guardás una copia."),
        " Tu progreso vive solo en este teléfono: si se borran los datos o cambiás de teléfono, se pierde."),
      h("div", { className: "az-av-stats" },
        h("div", { className: "az-av-stat" }, h("b", null, st.ej), h("span", null, "ejercicios hechos")),
        h("div", { className: "az-av-stat" }, h("b", null, st.pal), h("span", null, "palabras dominadas")),
        h("div", { className: "az-av-stat" }, h("b", null, st.notas), h("span", null, "notas en el cuaderno"))),
      listo
        ? h("div", { className: "az-av-btn ok" }, "✓ Copia guardada")
        : h("button", { className: "az-av-btn", onClick: guardar }, "Guardar copia ahora"),
      h("div", { className: "az-av-nota" }, "Elegí ", h("b", null, "Guardar en Archivos"), ", o mandátela por mail o WhatsApp. Para recuperarla: Ajustes → Restaurar copia."),
      h("div", { className: "az-av-pie" },
        h("div", { className: "az-av-b" }, "Cada " + AZ_AVISOS.copiaCada + " días"),
        h("button", { className: "az-av-a", onClick: ahoraNo }, "Recordámelo después"))];
  }

  return h("div", { className: "az-av-velo", onClick: e => { if (e.target === e.currentTarget) ahoraNo(); } },
    h("style", null, `
      .az-av-velo{position:fixed;inset:0;z-index:500;background:rgba(0,0,0,.55);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);display:flex;align-items:center;justify-content:center;padding:6vh 20px 4vh;animation:azAvVelo .2s ease both;}
      .az-av{width:100%;max-width:340px;max-height:100%;overflow-y:auto;background:${c.card};border:1px solid ${c.border};border-radius:14px;box-shadow:0 16px 40px rgba(0,0,0,.4);padding:16px 16px 12px;color:${c.text};font-family:'Noto Sans',sans-serif;animation:azBbIn .16s ease both;}
      @keyframes azAvVelo{from{opacity:0;}to{opacity:1;}}
      @keyframes azBbIn{from{opacity:0;transform:translateY(4px) scale(.98);}to{opacity:1;transform:none;}}
      @media (prefers-reduced-motion:reduce){.az-av,.az-av-velo{animation:none;}}
      .az-av-top{display:flex;align-items:center;gap:12px;}
      .az-av-ico{width:44px;height:44px;border-radius:12px;background:#B5605C;color:#fff;font-weight:800;font-size:18px;display:flex;align-items:center;justify-content:center;flex-shrink:0;}
      .az-av-ico.n{background:${c.gold}22;border:1px solid ${c.gold};font-size:20px;}
      .az-av-tit{font-size:18px;font-weight:800;color:${c.gold};line-height:1.2;flex:1;}
      .az-av-x{width:32px;height:32px;border-radius:9px;background:${c.bg3};border:1px solid ${c.border};color:${c.textSub};font-size:13px;display:flex;align-items:center;justify-content:center;flex-shrink:0;align-self:flex-start;cursor:pointer;padding:0;font-family:inherit;}
      .az-av-txt{margin-top:12px;font-size:14px;line-height:1.45;color:${c.textSub};}
      .az-av-txt b,.az-av-nota b{color:${c.text};}
      .az-av-pasos{margin-top:14px;display:flex;flex-direction:column;gap:10px;}
      .az-av-paso{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.45;color:${c.text};}
      .az-av-num{width:24px;height:24px;border-radius:50%;background:${c.gold}22;border:1px solid ${c.gold};color:${c.gold};font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:-1px;}
      .az-av-chip{display:inline-flex;align-items:center;gap:4px;vertical-align:-3px;background:${c.bg3};border:1px solid ${c.border};border-radius:7px;padding:1px 6px;font-size:12.5px;font-weight:700;color:${c.text};}
      .az-av-sub{margin-top:2px;font-size:12.5px;color:${c.textMuted};}
      .az-av-nota{margin-top:12px;font-size:12.5px;line-height:1.45;color:${c.textMuted};}
      .az-av-btn{display:block;text-align:center;margin-top:14px;width:100%;padding:13px 14px;border-radius:10px;border:none;background:${c.gold};color:${c.bg};font-size:15px;font-weight:800;font-family:inherit;cursor:pointer;}
      .az-av-btn.ok{background:${c.gold}22;border:1px solid ${c.gold};color:${c.gold};cursor:default;}
      .az-av-stats{margin-top:12px;display:grid;grid-template-columns:repeat(3,1fr);gap:6px;}
      .az-av-stat{background:${c.bg2};border:1px solid ${c.border};border-radius:10px;padding:8px 6px;text-align:center;}
      .az-av-stat b{display:block;font-size:18px;font-weight:800;color:${c.gold};}
      .az-av-stat span{font-size:11px;color:${c.textSub};line-height:1.25;display:block;margin-top:1px;}
      .az-av-pie{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:14px;padding-top:10px;border-top:1px solid ${c.border};}
      .az-av-a{font-size:13px;font-weight:700;color:${c.gold};background:none;border:none;padding:6px 0;cursor:pointer;font-family:inherit;}
      .az-av-b{font-size:12.5px;color:${c.textMuted};background:none;border:none;padding:6px 0;cursor:pointer;font-family:inherit;}
      div.az-av-b{cursor:default;}
    `),
    h("div", { className: "az-av", role: "dialog", "aria-modal": "true", "aria-labelledby": "az-av-tit" }, ...cuerpo));
}
window.AzAvisos = AzAvisos;
