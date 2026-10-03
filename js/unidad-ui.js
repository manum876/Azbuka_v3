/* ============================================================
   UNIDAD-UI.JS — Piezas de pantalla compartidas por las unidades
   ------------------------------------------------------------
   Versión 26/09/2026. Todo lo que se ve igual en cada azbuka-N.html:
   estilos, secciones de teoría, vocabulario, frases, diálogos (con
   grabadora), tarjetas de palabras, mapa para explorar, proyecto de
   escritura y la portada de la unidad. Así cada unidad es casi solo
   contenido (data-unidad-N.js) y un cambio de diseño se hace una vez.
   La práctica y la evaluación viven aparte, en unidad.js.

   Cargar después de burbuja.js y antes de unidad.js:
     <script src="unidad-ui.js"></script>

   Componentes (window.*):
     AzEstilosUnidad({ c, green })            estilos de todas las unidades
     AzSecciones({ secciones })              teoría: título, texto, destacado, truco
     AzVocabulario({ ids, c })               palabras del léxico con ▶
     AzFrasesLista({ ids, c })               frases de data-frases.js con ▶
     AzListaDialogos({ ids, onAbrir })       tarjetas de diálogos
     AzHojaDialogo({ d, c, onClose, grabar, objetivo })
     AzGrabadora({ texto })                  grabarse y comparar con el modelo
     AzTarjetasPalabras({ ids, titulo, c, green, onClose, detalle? })   detalle(e): texto extra al dorso
     AzMapaExplorar({ c })                   mapa de data-mapa.js
     AzProyecto({ mod, c, green, clave, fuente })   escribir con requisitos
     AzPortadaUnidad({ u, c, green, progreso, visto, onPracticar, onAbrir, examen })
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = htmPreact;
  const YELLOW = "#C9B369";
  const personaje = p => ((typeof DLG_PERSONAJES !== "undefined" && DLG_PERSONAJES[p]) || { ru: p });
  const chipSt = (c, on) => on ? { background: c.gold + "22", border: `1px solid ${c.gold}`, color: c.gold } : { background: c.bg2, border: `1px solid ${c.border}`, color: c.textMuted };

  function AzEstilosUnidad({ c, green }) {
    return h("style", null, `
    .u-kicker{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin-bottom:6px;}
    .u-title{font-size:26px;font-weight:800;color:${c.text};line-height:1.15;}
    .u-ru{font-size:15px;color:${c.textSub};font-style:italic;margin-top:4px;}
    .u-text{font-size:15px;line-height:1.6;color:${c.textSub};}
    .u-sec{font-size:10.5px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${c.gold};margin:24px 0 10px;}
    .u-dest{margin-top:12px;background:${c.gold}14;border:1px solid ${c.gold}66;border-radius:10px;padding:12px 14px;font-size:14.5px;line-height:1.5;color:${c.text};font-weight:600;}
    .u-truco{margin-top:10px;font-size:14px;line-height:1.5;color:${c.textSub};padding-left:10px;border-left:2px solid ${c.gold}66;}
    .u-truco b{color:${c.gold};font-weight:700;}
    .u-card{background:${c.card};border:1px solid ${c.border};border-radius:14px;}
    .pbar-track{width:100%;height:6px;border-radius:3px;overflow:hidden;background:${c.bg3};margin-top:10px;}
    .pbar-fill{height:100%;border-radius:3px;background:${green};transition:width .3s ease;}
    .mod{display:flex;gap:14px;align-items:flex-start;padding:14px 16px;margin-bottom:10px;cursor:pointer;text-decoration:none;color:${c.text};}
    .mod.off{opacity:.45;cursor:default;}
    .mod-n{font-size:22px;font-weight:800;color:${c.border};min-width:30px;line-height:1.1;}
    .mod-t{font-size:16px;font-weight:700;}
    .mod-d{font-size:13px;color:${c.textMuted};margin-top:2px;}
    .mod-l{display:flex;flex-wrap:wrap;gap:4px;margin-top:8px;}
    .mod-l span{font-size:13px;font-weight:700;min-width:24px;text-align:center;padding:2px 5px;border-radius:6px;background:${c.bg2};border:1px solid ${c.border};color:${c.textSub};}
    .tag-pronto{font-size:11px;font-weight:600;color:${c.textMuted};background:${c.bg2};border:1px solid ${c.border};border-radius:8px;padding:2px 8px;margin-left:8px;vertical-align:middle;}
    .lgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;}
    @media (min-width:600px){.lgrid{grid-template-columns:repeat(5,1fr);}}
    .lcard{position:relative;border-radius:14px;padding:14px 6px;text-align:center;cursor:pointer;background:${c.card};}
    .lcard:active{transform:scale(.97);}
    .toggle-row{display:flex;gap:8px;margin:16px 0 12px;}
    .pair-btn{padding:7px 11px;border-radius:10px;font-size:12.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:.18s;}
    .ubtn{display:flex;align-items:center;justify-content:center;gap:6px;width:100%;padding:13px 16px;border-radius:10px;border:1px solid ${c.gold};background:${c.gold};color:${c.bg};font-size:14.5px;font-weight:700;cursor:pointer;font-family:inherit;margin-top:18px;}
    .ubtn.sec{background:${c.bg3};border-color:${c.border};color:${c.text};}
    .sheet{position:fixed;inset:0;z-index:300;background:${c.bg};color:${c.text};font-family:'Noto Sans',sans-serif;overflow-y:auto;-webkit-overflow-scrolling:touch;animation:fadeIn .25s ease;}
    .sheet-in{max-width:960px;margin:0 auto;padding:6vh 3vw 4vh;}
    .sheet-x{position:fixed;top:6vh;right:3vw;width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:15px;display:flex;align-items:center;justify-content:center;cursor:pointer;padding:0;z-index:301;font-family:inherit;}
    .glyph{font-size:64px;font-weight:800;color:${c.gold};line-height:1;}
    .cursiva{font-family:'CyrCursive',cursive;font-size:44px;color:${c.gold};opacity:.7;margin-top:6px;}
    .play{width:36px;height:36px;border-radius:10px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:14px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;padding:0;font-family:inherit;}
    .status-row{display:flex;gap:8px;margin-top:16px;}
    .status-btn{flex:1;text-align:center;padding:10px 4px;border-radius:10px;font-size:12px;font-weight:700;cursor:pointer;font-family:inherit;transition:.18s;}
    .info{padding:16px;margin-top:12px;}
    .info-t{font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:${c.gold};margin-bottom:6px;}
    .info-x{font-size:14px;line-height:1.55;color:${c.textSub};}
    .wrow{display:flex;align-items:center;gap:12px;padding:12px 0;}
    .wrow + .wrow{border-top:1px solid ${c.border};}
    .ctable{width:100%;border-collapse:separate;border-spacing:0;table-layout:fixed;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;margin-top:14px;}
    .ctable th{font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.textMuted};text-align:left;padding:10px 12px;border-bottom:1px solid ${c.border};}
    .ctable td{padding:9px 12px;border-top:1px solid ${c.border};}
    .ctable tr:nth-child(2) td{border-top:none;}
    .f-ru{font-size:17px;font-weight:700;color:${c.text};cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:6px;background:none;border:none;padding:0;width:100%;font-family:inherit;text-align:left;}
    .f-ru .pl{font-size:10px;color:${c.gold};}
    .f-ru.blanda{color:${c.gold};}
    .fc{min-height:46vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:24px 18px;cursor:pointer;border-radius:18px;background:${c.card};border:1px solid ${c.border};user-select:none;-webkit-user-select:none;}
    .par{display:flex;align-items:center;gap:10px;padding:10px 0;}
    .par + .par{border-top:1px solid ${c.border};}
    .par-l{width:52px;flex-shrink:0;font-size:13px;font-weight:800;color:${c.gold};}
    .par-w{flex:1;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:2px;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;padding:8px 10px;cursor:pointer;font-family:inherit;text-align:left;color:${c.text};}
    .par-ru{font-size:18px;font-weight:700;}
    .par-ru .pl{font-size:10px;color:${c.gold};}
    .par-es{font-size:12px;color:${c.textMuted};}
    .fc.dorso{align-items:stretch;justify-content:flex-start;text-align:left;padding:22px 20px;}
    .fc-glyph{font-size:clamp(60px,19vw,96px);font-weight:800;color:${c.gold};line-height:1;white-space:nowrap;}
    .fc-top{display:flex;align-items:baseline;justify-content:space-between;gap:12px;}
    .fc-cur{font-family:'CyrCursive',cursive;font-size:clamp(60px,19vw,96px);color:${c.gold};opacity:.7;line-height:1;white-space:nowrap;}
    .fc-nombre{display:flex;align-items:baseline;gap:10px;margin-top:22px;}
    .fc-word{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid ${c.border};}
    .fc-ctl{display:flex;gap:8px;margin-top:12px;}
    .fc-ctl button{flex:1;padding:11px 6px;border-radius:10px;border:1px solid ${c.border};background:${c.bg3};color:${c.text};font-size:13.5px;font-weight:600;cursor:pointer;font-family:inherit;}
  
    .voc{display:flex;align-items:center;gap:10px;padding:10px 0;}
    .voc + .voc{border-top:1px solid ${c.border};}
    .voc-ru{font-size:17px;font-weight:700;}
    .voc-tr{font-size:12.5px;color:${c.textSub};font-style:italic;margin-left:8px;}
    .voc-es{font-size:13.5px;color:${c.textSub};margin-top:2px;}
    .ptabla{width:100%;border-collapse:separate;border-spacing:0;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;margin-top:12px;}
    .ptabla td{padding:9px 12px;border-top:1px solid ${c.border};font-size:15px;}
    .ptabla tr:first-child td{border-top:none;}
    .mapa-v{width:100%;display:block;border-radius:12px;background:${c.bg2};border:1px solid ${c.border};margin-top:10px;touch-action:manipulation;}
    .mapa-v path.pais{cursor:pointer;}
    .grab{display:flex;gap:6px;align-items:center;margin-top:8px;flex-wrap:wrap;}
    .grab button{padding:6px 10px;border-radius:9px;font-size:12.5px;font-weight:700;cursor:pointer;font-family:inherit;background:${c.bg3};border:1px solid ${c.border};color:${c.text};}
    .grab button.rec{border-color:#B5605C;color:#D9776F;}
    .req{display:flex;gap:8px;align-items:center;font-size:14px;padding:6px 0;}
    .proy{width:100%;box-sizing:border-box;min-height:36vh;background:${c.card};border:1px solid ${c.border};border-radius:12px;padding:14px;color:${c.text};font-size:16px;line-height:1.55;font-family:inherit;margin-top:12px;}
  
    .grp-wrap{overflow-x:auto;margin-top:12px;}
    .grp{width:100%;border-collapse:separate;border-spacing:0;background:${c.bg2};border:1px solid ${c.border};border-radius:10px;overflow:hidden;}
    .grp th{font-size:10.5px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${c.textMuted};text-align:left;padding:9px 10px;border-bottom:1px solid ${c.border};}
    .grp td{padding:8px 10px;border-top:1px solid ${c.border};vertical-align:top;}
    .grp tr:first-child td{border-top:none;}
    .grp-w{background:none;border:none;padding:0;color:${c.text};font-family:inherit;cursor:pointer;text-align:left;}
    .grp-ru{font-size:15px;font-weight:700;}
    .grp-w .pl{font-size:9px;color:${c.gold};}
    .grp-es{font-size:11.5px;color:${c.textMuted};margin-top:1px;}
    .grp.compacta th{padding:8px 4px;font-size:9px;letter-spacing:.3px;}
    .grp.compacta td{padding:7px 4px;}
    .grp.compacta .grp-ru{font-size:12.5px;}
    .grp.compacta .grp-es{font-size:10.5px;}
  `);
  }

  function AzSecciones({ secciones }) {
    return h(React.Fragment, null, (secciones || []).map((x, k) => h("div", { key: k },
      h("div", { className: "u-sec" }, x.titulo),
      h("div", { className: "u-text", style: { whiteSpace: "pre-line" } }, azFmt(x.texto)),   /* \n = renglón nuevo (pasos numerados) */
      x.destacado && h("div", { className: "u-dest" }, azFmt(x.destacado)),
      x.comparacion && h("div", { className: "u-text", style: { marginTop: 10, fontSize: 14, fontStyle: "italic" } }, azFmt(x.comparacion)),
      x.truco && h("div", { className: "u-truco" }, h("b", null, "Truco: "), azFmt(x.truco)))));
  }

  function AzVocabulario({ ids, c }) {
    return h("div", { className: "u-card", style: { padding: "2px 16px", marginTop: 12 } }, ids.map(id => {
      const e = lexComerById(id); if (!e) return null;
      return h("div", { key: id, className: "voc" },
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("span", { className: "voc-ru" }, h(AzPalabra, { texto: e.acento || e.ru, id })), h("span", { className: "voc-tr az-tl" }, e.translit),
          h("div", { className: "voc-es" }, e.senses.slice(0, 2).map(x => x.es).join("; "))),
        h("button", { className: "play", onClick: () => azHablarRu(e.ru), "aria-label": "Escuchar" }, "▶"));
    }));
  }

  function AzFrasesLista({ ids, c }) {
    return h("div", { className: "u-card", style: { padding: "2px 16px", marginTop: 12 } }, ids.map(id => {
      const f = fraseById(id); if (!f) return null;
      return h("div", { key: id, className: "voc" },
        h("div", { style: { flex: 1, minWidth: 0 } },
          h("span", { className: "voc-ru" }, h(AzFrase, { id })), f.registro && h("span", { className: "voc-tr" }, "con " + f.registro),
          h("div", { className: "voc-es" }, f.es)),
        h("button", { className: "play", onClick: () => azHablarRu(f.ru), "aria-label": "Escuchar" }, "▶"));
    }));
  }

  function AzListaDialogos({ ids, onAbrir }) {
    return h(React.Fragment, null, ids.map(id => {
      const d = dialogoById(id); if (!d) return null;
      return h("div", { key: id, className: "u-card mod", role: "button", tabIndex: 0, onClick: () => onAbrir(id), onKeyDown: e => { if (e.key === "Enter") onAbrir(id); } },
        h("div", { style: { flex: 1, minWidth: 0 } }, h("div", { className: "mod-t" }, d.titulo), h("div", { className: "mod-d", lang: "ru" }, d.lineas.slice(0, 2).map(l => l.ru).join(" — "))));
    }));
  }

  function AzGrabadora({ texto, onGrabado }) {
    const [estado, setEstado] = useState("listo");
    const [url, setUrl] = useState(null);
    const rec = useRef(null);
    const grabar = async () => {
      try {
        const st = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mr = new MediaRecorder(st); const partes = [];
        mr.ondataavailable = e => partes.push(e.data);
        mr.onstop = () => { st.getTracks().forEach(t => t.stop()); const u = URL.createObjectURL(new Blob(partes, { type: mr.mimeType })); setUrl(u); setEstado("grabado"); if (onGrabado) onGrabado(u); };
        mr.start(); rec.current = mr; setEstado("grabando");
      } catch (e) { setEstado("sin-mic"); }
    };
    return h("div", { className: "grab" },
      h("button", { onClick: () => azHablarRu(texto) }, "▶ Modelo"),
      estado !== "grabando" ? h("button", { className: "rec", onClick: grabar }, estado === "grabado" ? "● Grabar de nuevo" : "● Grabarme")
        : h("button", { className: "rec", onClick: () => rec.current && rec.current.stop() }, "■ Parar"),
      url && h("button", { onClick: () => new Audio(url).play() }, "▶ Mi voz"),
      estado === "sin-mic" && h("span", { style: { fontSize: 12 } }, "Sin permiso para el micrófono."));
  }

  function AzHojaDialogo({ d, c, onClose, grabar, objetivo }) {
    const [tr, setTr] = useState(azTranslitVisible());
    const [es, setEs] = useState(true);
    const [mias, setMias] = useState({});            /* línea → grabación */
    const gen = l => personaje(l.p).genero;
    const href = "dialogos.html?id=" + d.id;
    /* Todas mis grabaciones en orden; si falta una línea, suena el modelo */
    const escucharMias = () => {
      let i = 0;
      const sig = () => {
        if (i >= d.lineas.length) return;
        const k = i++, u = mias[k];
        if (u) { const a = new Audio(u); a.onended = () => setTimeout(sig, 200); a.play(); }
        else azHablarSecuencia([{ texto: d.lineas[k].ru, genero: gen(d.lineas[k]) }], null, () => setTimeout(sig, 100));
      };
      sig();
    };
    return h("div", { className: "sheet", role: "dialog" },
      h("button", { className: "sheet-x", onClick: onClose, "aria-label": "Cerrar" }, "✕"),
      h("div", { className: "sheet-in" },
        h("div", { className: "u-kicker" }, "Diálogo"),
        h("div", { style: { fontSize: 26, fontWeight: 800, paddingRight: 48 } }, d.titulo),
        d.tituloRu && h("div", { className: "u-ru", lang: "ru" }, d.tituloRu),
        h("div", { className: "toggle-row" },
          h("button", { className: "pair-btn", onClick: () => setTr(v => !v), style: chipSt(c, tr) }, "Transliteración"),
          h("button", { className: "pair-btn", onClick: () => setEs(v => !v), style: chipSt(c, es) }, "Traducción")),
        h("div", { className: "u-text", style: { fontSize: 13, marginBottom: 12 } },
          grabar ? "Escuchá cada línea, grabate diciéndola y compará." : "Para practicar la lectura, apagá la transliteración y la traducción."),
        d.lineas.map((l, i) => h("div", { key: i, className: "u-card", style: { padding: "12px 14px", marginBottom: 8 } },
          h("div", { style: { display: "flex", gap: 10, alignItems: "flex-start" } },
            h("div", { style: { flex: 1, minWidth: 0 } },
              h("div", { lang: "ru", style: { fontSize: 11, fontWeight: 700, letterSpacing: 1, color: c.gold, textTransform: "uppercase", marginBottom: 4 } }, personaje(l.p).ru),
              h("div", { style: { fontSize: 17, fontWeight: 700, lineHeight: 1.5 } }, h(AzTexto, { ru: l.ru, lex: l.lex, objetivo })),
              tr && h("div", { style: { fontSize: 13.5, color: c.textSub, fontStyle: "italic", marginTop: 2 } }, l.tr),
              es && h("div", { style: { fontSize: 14, color: c.text, marginTop: 4 } }, l.es)),
            h("div", { style: { display: "flex", flexDirection: "column", gap: 6 } },
              h("button", { className: "play", onClick: () => azHablarRu(l.ru, gen(l)), "aria-label": "Escuchar" }, "▶"),
              h("button", { className: "play", onClick: () => azGuardarEnCuaderno(l.ru + "\n" + l.es, { titulo: "Diálogos · " + d.titulo, href }), "aria-label": "Guardar en el cuaderno" }, "＋"))),
          grabar && h(AzGrabadora, { texto: l.ru, onGrabado: u => setMias(m => Object.assign({}, m, { [i]: u })) }))),
        h("button", { className: "ubtn", onClick: () => azHablarSecuencia(d.lineas.map(l => ({ texto: l.ru, genero: gen(l) }))) }, "▶ Escuchar el diálogo"),
        grabar && Object.keys(mias).length > 0 && h("button", { className: "ubtn sec", style: { marginTop: 10 }, onClick: escucharMias }, "▶ Escuchar mis grabaciones"),
        h("a", { className: "ubtn sec", style: { marginTop: 10, textDecoration: "none" }, href, onClick: ev => azNavigate(ev, href) }, "Ver en Diálogos")));
  }

  function AzTarjetasPalabras({ ids, titulo, c, green, onClose, detalle }) {
    /* Los nombres propios (países, ciudades, personas) no van en las tarjetas */
    const [orden, setOrden] = useState(() => ids.filter(id => { const e = lexComerById(id); return e && !e.propio; }));
    const [i, setI] = useState(0);
    const [vuelta, setVuelta] = useState(false);
    const [, refrescar] = useState(0);
    const e = lexComerById(orden[i]);
    const nv = azItem("lex:" + e.id).level || 0;
    const ir = d => { setVuelta(false); setI(x => (x + d + orden.length) % orden.length); };
    const marcar = v => { azSetItemLevel("lex:" + e.id, v); refrescar(x => x + 1); ir(1); };
    return h("div", { className: "sheet", role: "dialog" },
      h("button", { className: "sheet-x", onClick: onClose, "aria-label": "Cerrar" }, "✕"),
      h("div", { className: "sheet-in" },
        h("div", { className: "u-kicker" }, "Tarjetas · " + titulo),
        h("div", { style: { fontSize: 14, color: c.textMuted, marginBottom: 14 } }, (i + 1) + " de " + orden.length + (nv ? " · " + (nv === 2 ? "dominada" : "aprendiendo") : "")),
        h("div", { className: "fc", role: "button", tabIndex: 0, onClick: () => { if (!vuelta && !nv) azSetItemLevel("lex:" + e.id, 1, true); if (!vuelta) azHablarRu(e.ru); setVuelta(v => !v); } },
          h("div", { lang: "ru", style: { fontSize: 38, fontWeight: 800, color: c.gold, lineHeight: 1.2, wordBreak: "break-word" } }, e.acento || e.ru),
          !vuelta ? h("div", { style: { fontSize: 13, color: c.textMuted, marginTop: 18 } }, "Tocá para ver qué significa")
            : h(React.Fragment, null,
                h("div", { className: "az-tl", style: { fontSize: 15, color: c.textSub, fontStyle: "italic", marginTop: 8 } }, e.translit),
                h("div", { style: { fontSize: 20, fontWeight: 700, color: c.text, marginTop: 12 } }, e.senses.slice(0, 2).map(x => x.es).join("; ")),
                detalle && detalle(e) && h("div", { lang: "ru", style: { fontSize: 14.5, color: c.textSub, marginTop: 8 } }, detalle(e)),
                h("button", { className: "play", style: { marginTop: 14 }, onClick: ev => { ev.stopPropagation(); azHablarRu(e.ru); }, "aria-label": "Escuchar" }, "▶"))),
        h("div", { className: "fc-ctl" },
          h("button", { onClick: () => ir(-1) }, "‹ Anterior"),
          h("button", { onClick: () => { setOrden(orden.slice().sort(() => Math.random() - .5)); setI(0); setVuelta(false); } }, "Mezclar"),
          h("button", { onClick: () => ir(1) }, "Siguiente ›")),
        h("div", { className: "status-row" },
          h("button", { className: "status-btn", onClick: () => marcar(1), style: { background: nv === 1 ? YELLOW + "22" : c.bg3, border: `1px solid ${nv === 1 ? YELLOW : c.border}`, color: nv === 1 ? YELLOW : c.text } }, "Volver a estudiar"),
          h("button", { className: "status-btn", onClick: () => marcar(2), style: { background: nv === 2 ? green + "22" : c.bg3, border: `1px solid ${nv === 2 ? green : c.border}`, color: nv === 2 ? green : c.text } }, "Ya la sé"))));
  }

  function AzMapaExplorar({ c }) {
    const [vista, setVista] = useState("europa");
    const [sel, setSel] = useState(null);
    if (typeof MAPA === "undefined") return null;
    const e = sel ? lexComerById(MAPA.paises[sel].lex) : null;
    const cz = e && typeof CASOS !== "undefined" && CASOS[e.id];
    const gen = cz ? (cz.tipo === "indeclinable" ? e.acento : cz.sg[1]) : "";
    const tocar = iso => { setSel(iso); azHablarRu(lexComerById(MAPA.paises[iso].lex).ru); };
    return h("div", null,
      h("div", { className: "toggle-row", style: { flexWrap: "wrap" } }, ["europa", "america", "asia", "mundo"].map(k =>
        h("button", { key: k, className: "pair-btn", style: chipSt(c, vista === k), onClick: () => setVista(k) }, MAPA.vistas[k].titulo))),
      h("svg", { viewBox: MAPA.vistas[vista].vb, className: "mapa-v", role: "img", "aria-label": "Mapa de países" },
        h("path", { d: MAPA.fondo, fill: c.bg3, stroke: c.bg2, "stroke-width": vista === "mundo" ? 4 : 2 }),
        Object.keys(MAPA.paises).map(k => h("path", { key: k, className: "pais", d: MAPA.paises[k].d, onClick: () => tocar(k),
          fill: k === sel ? c.gold : c.gold + "55", stroke: c.bg2, "stroke-width": vista === "mundo" ? 4 : 2 }))),
      e ? h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 10, display: "flex", alignItems: "center", gap: 12 } },
            h("div", { style: { flex: 1 } },
              h("div", { lang: "ru", style: { fontSize: 20, fontWeight: 800 } }, h(AzPalabra, { texto: e.acento, id: e.id })),
              h("div", { style: { fontSize: 13.5, color: c.textSub, marginTop: 2 } }, e.senses[0].es + " · ", h("span", { lang: "ru", style: { color: c.text, fontWeight: 700 } }, "я из " + gen))),
            h("button", { className: "play", onClick: () => azHablarRu("Я из " + gen), "aria-label": "Escuchar" }, "▶"))
        : h("div", { className: "u-text", style: { fontSize: 13.5, marginTop: 8 } }, "Tocá un país dorado."));
  }

  function AzProyecto({ mod, c, green, clave, fuente, aviso }) {
    const [txt, setTxt] = useState("");
    const [rev, setRev] = useState(null);
    useEffect(() => { (async () => setTxt(await azGet(clave, "")))(); }, []);
    const n = t => t.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();
    /* Requisito: rx (expresión regular sobre el texto sin acentos) o fn(texto) → true / false (02/10/2026) */
    const ok = mod.requisitos.map(r => r.fn ? !!r.fn(txt) : new RegExp(r.rx).test(n(txt)));
    const cambiar = v => { setTxt(v); setRev(null); azSet(clave, v); };
    return h("div", null,
      h("div", { className: "u-card", style: { padding: "8px 16px", marginTop: 14 } }, mod.requisitos.map((r, i) =>
        h("div", { key: i, className: "req" }, h("span", { style: { color: ok[i] ? green : c.textMuted, fontWeight: 800 } }, ok[i] ? "✓" : "○"), h("span", { style: { color: ok[i] ? c.text : c.textSub } }, r.txt)))),
      aviso && h("div", { className: "u-dest" }, aviso),
      h("textarea", { className: "proy", lang: "ru", value: txt, placeholder: "Escribí en ruso…", onInput: e => cambiar(e.target.value) }),
      ok.every(Boolean) && h("div", { style: { marginTop: 10, color: green, fontWeight: 700, fontSize: 14 } }, "¡Están todos los puntos! Leelo en voz alta y guardalo en el cuaderno."),
      h("button", { className: "ubtn", disabled: !txt.trim(), onClick: () => setRev(azRevisarTexto(txt, mod.requisitos, mod.consejos)) }, "Revisar mi texto"),
      rev && h("div", { className: "u-card", style: { padding: "12px 16px", marginTop: 12 } },
        !rev.dudas.length && !rev.faltan.length && !rev.tips.length && h("div", { style: { color: green, fontWeight: 700, fontSize: 14 } }, "✓ No encontré errores y están todos los puntos."),
        rev.dudas.map((d, i) => h("div", { key: "d" + i, className: "u-truco", lang: "ru" }, "«" + d.t + "» no la encuentro en el diccionario" + (d.sugerencia ? ". ¿Quisiste decir «" + d.sugerencia + "»?" : ": revisá cómo se escribe."))),
        rev.tips.map((t, i) => h("div", { key: "t" + i, className: "u-truco" }, azFmt(t))),
        rev.faltan.length > 0 && h("div", { className: "u-truco" }, "Falta: " + rev.faltan.join(", ").toLowerCase() + "."),
        h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 8, lineHeight: 1.5 } }, "La revisión encuentra palabras mal escritas y errores típicos, pero no corrige toda la gramática.")),
      h("div", { style: { display: "flex", gap: 8, marginTop: 12 } },
        h("button", { className: "ubtn sec", style: { marginTop: 0 }, disabled: !txt.trim(), onClick: () => azHablarRu(txt) }, "▶ Escucharlo"),
        h("button", { className: "ubtn", style: { marginTop: 0 }, disabled: !txt.trim(), onClick: () => azGuardarEnCuaderno(txt, fuente) }, "＋ Cuaderno")));
  }

  /* Portada: kicker, título, objetivo, barras de progreso, «Practicar la unidad» y módulos */
  function AzPortadaUnidad({ u, c, green, progreso, visto, onPracticar, onAbrir, examen, extraModulo }) {
    return h("div", { style: { animation: "fadeIn 0.3s ease", paddingTop: 18 } },
      h("div", { className: "u-kicker" }, "Unidad " + u.id),
      h("h1", { className: "u-title" }, u.titulo),
      h("div", { className: "u-ru", lang: "ru" }, u.tituloRu),
      h("p", { className: "u-text", style: { marginTop: 12, fontSize: 14 } }, u.objetivo),
      h("div", { style: { fontSize: 13, color: c.textMuted, marginTop: 6 } }, "Tiempo estimado: " + u.tiempo),
      h("div", { className: "u-card", style: { padding: "14px 16px", marginTop: 18 } },
        progreso.map((p, k) => h("div", { key: k, style: { marginTop: k ? 14 : 0 } },
          h("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" } },
            h("span", { style: { fontSize: 14, fontWeight: 700, color: c.text } }, p.label),
            h("span", { style: { fontSize: 14, fontWeight: 800, color: green } }, p.valor + " de " + p.total)),
          h("div", { className: "pbar-track" }, h("div", { className: "pbar-fill", style: { width: (p.valor / Math.max(1, p.total) * 100) + "%" } })))),
        h("div", { style: { fontSize: 12, color: c.textMuted, marginTop: 10, lineHeight: 1.5 } }, "Se marcan solas cuando las acertás en ejercicios distintos, en días distintos. También podés marcarlas a mano en las tarjetas.")),
      h("button", { className: "ubtn", onClick: onPracticar }, "Practicar la unidad"),
      h("div", { style: { fontSize: 12.5, color: c.textMuted, marginTop: 6, textAlign: "center" } }, "Ejercicios de todo lo que viste hasta el módulo " + visto + "."),
      h("div", { className: "u-sec" }, "Módulos"),
      u.modulos.map(m => {
        const off = m.tipo === "pronto";
        return h("div", { key: m.id, className: "u-card mod" + (off ? " off" : ""), role: off ? null : "button", tabIndex: off ? -1 : 0,
          onClick: () => !off && onAbrir(m.id), onKeyDown: e => { if (!off && e.key === "Enter") onAbrir(m.id); } },
          h("div", { className: "mod-n" }, String(m.n).padStart(2, "0")),
          h("div", { style: { flex: 1, minWidth: 0 } },
            h("div", { className: "mod-t" }, m.titulo, off && h("span", { className: "tag-pronto" }, "Pronto")),
            h("div", { className: "mod-d" }, azFmt(m.resumen)),
            extraModulo && extraModulo(m),
            m.tipo === "examen" && examen && h("div", { style: { fontSize: 12.5, fontWeight: 700, marginTop: 6, color: examen.aprobado ? green : "#E2884A" } },
              "Última: " + examen.pct + " %" + (examen.aprobado ? " · aprobada" : ""))));
      }));
  }

  /* Cuántos ejercicios tiene una práctica: como no se repite un mismo grupo
     (la misma palabra o frase) en una sesión, nunca más que los grupos distintos. */
  function azNPractica(pool, n) {
    const grupos = new Set(pool.map(e => e.grupo || e.id)).size;
    return Math.min(n || 12, grupos, pool.length);
  }

  /* Barra de abajo en la portada de una unidad: ‹ Unidad N › */
  function azTabsUnidad(n) {
    const lista = (typeof AZ_UNITS !== "undefined" ? AZ_UNITS : []).filter(u => u.lista);
    const k = lista.findIndex(u => u.id === n);
    const ir = u => () => { if (u) location.href = u.href; };
    const prev = lista[k - 1], next = lista[k + 1];
    return [
      { id: "uprev", icon: "‹", aria: prev ? "Unidad " + prev.id : "Anterior", disabled: !prev, action: ir(prev) },
      { id: "uact", texto: "Unidad " + n },
      { id: "unext", icon: "›", aria: next ? "Unidad " + next.id : "Siguiente", disabled: !next, action: ir(next) }
    ];
  }

  /* Tabla de grupos de palabras relacionadas (país · él · ella; estudiar · hablar).
     Celdas { id?, ru, es }: se tocan para escucharlas; sin ▶, con una nota arriba. */
  function AzTablaGrupos({ encabezados, filas, c }) {
    const celda = (x, k) => {
      if (!x || !x.ru) return h("td", { key: k }, "—");
      return h("td", { key: k },
        h("button", { className: "grp-w", onClick: () => azHablarRu(x.ru), lang: "ru" }, h("span", { className: "grp-ru" }, x.ru)),
        x.es && h("div", { className: "grp-es" }, x.es));
    };
    return h(React.Fragment, null,
      h("div", { className: "u-text", style: { fontSize: 13, marginTop: 8 } }, "Tocá una palabra para escuchar cómo suena."),
      h("div", { className: "grp-wrap", style: { marginTop: 8 } }, h("table", { className: "grp" + (encabezados.length >= 4 ? " compacta" : "") },
        h("thead", null, h("tr", null, encabezados.map((t, k) => h("th", { key: k }, t)))),
        h("tbody", null, filas.map((f, i) => h("tr", { key: i }, f.map(celda)))))));
  }

  /* Revisión de un texto libre: palabras que no existen (con sugerencia),
     consejos de la unidad y requisitos que faltan. Todo local. */
  function azRevisarTexto(txt, requisitos, consejos) {
    const norm = t => t.replace(/\u0301/g, "").replace(/ё/g, "е").toLowerCase();
    const idx = typeof azIndiceFormas === "function" ? azIndiceFormas() : new Map();
    const conocidas = new Set(idx.keys());
    if (typeof LEXICON_COMER !== "undefined") LEXICON_COMER.forEach(e => conocidas.add(norm(e.ru)));
    /* Los nombres propios en mitad de la frase (Ману, Ле́на) no se revisan */
    const tokens = [];
    const rx = /[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g; let m;
    while ((m = rx.exec(txt))) {
      const antes = txt.slice(0, m.index).replace(/\s+$/, "");
      const inicio = !antes || /[.!?—–-]$/.test(antes);
      if (/^[А-ЯЁ]/.test(m[0]) && !inicio) continue;
      const k = norm(m[0]); if (tokens.indexOf(k) < 0) tokens.push(k);
    }
    const dudas = [];
    tokens.forEach(t => {
      if (conocidas.has(t)) return;
      let mejor = null, dist = 3;
      conocidas.forEach(k => {
        if (Math.abs(k.length - t.length) > 1 || k[0] !== t[0]) return;
        const d = azDiff(t, k).dist; if (d < dist) { dist = d; mejor = k; }
      });
      dudas.push({ t, sugerencia: mejor });
    });
    const n = norm(txt);
    const faltan = (requisitos || []).filter(r => !(r.fn ? r.fn(txt) : new RegExp(r.rx).test(n))).map(r => r.txt);
    /* Consejo: rx + msg, o fn(texto) → lista de mensajes (02/10/2026) */
    const tips = [].concat(...(consejos || []).map(k => k.fn ? (k.fn(txt) || []) : new RegExp(k.rx).test(n) ? [k.msg] : []));
    return { dudas, faltan, tips };
  }

  Object.assign(window, { AzEstilosUnidad, AzSecciones, AzVocabulario, AzFrasesLista, AzListaDialogos, AzGrabadora, AzHojaDialogo,
    AzTarjetasPalabras, AzMapaExplorar, AzProyecto, AzPortadaUnidad, AzTablaGrupos, azTabsUnidad, azRevisarTexto, azNPractica });
})();
