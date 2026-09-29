/* ============================================================
   MANO.JS — Escribir letras a mano (26/09/2026)
   ------------------------------------------------------------
   El alumno dibuja la letra con el dedo sobre un lienzo y la app la
   compara con la cursiva de Marck Script (CyrCursive, ya embebida).
   Todo pasa en el teléfono: no necesita internet.

   Dos modos:
     · Calcar: la letra aparece en gris claro y se repasa.
     · Libre: se escucha la letra y se dibuja sin ayuda.
   Corrección: el dibujo y la letra se centran y escalan a la misma
   caja en una grilla de 64×64 (se compara la forma, no la posición) y
   se compara la proporción. Se miden:
     · cuánto de tu trazo cae cerca de la letra (precisión);
     · cuánto de la letra cubriste (cobertura).
   Además:
     · si queda sin cubrir un pedazo conectado de la letra (por ejemplo
       la colita de la Щ), cuenta como una parte que falta;
     · si hay mucha más tinta que en la letra (garabatear encima), baja;
     · si la proporción (ancho/alto) es muy distinta, baja.
   Tres niveles de exigencia (Suave, Normal, Estricta; se guarda en
   az_mano_nivel): cambian el margen, los mínimos y el tamaño mínimo de
   una parte que falta. «Bien» pide precisión y cobertura altas por
   separado, la proporción parecida y ninguna parte faltante.
   No puede saber el orden ni la dirección de los trazos: solo compara
   la forma final. Es una guía, no cuenta para el semáforo.

   Uso: h(AzEscrituraMano, { letras: ALPHABET, inicial: "Б", c })
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef } = htmPreact;
  const N = 64;                     /* grilla de comparación */

  /* Máscara N×N de lo pintado en un canvas, recortada a su caja y
     escalada a la caja destino (para comparar forma y no posición). */
  function mascara(canvas, normalizar) {
    const w = canvas.width, hh = canvas.height;
    const d = canvas.getContext("2d").getImageData(0, 0, w, hh).data;
    let x0 = w, y0 = hh, x1 = -1, y1 = -1;
    for (let y = 0; y < hh; y += 2) for (let x = 0; x < w; x += 2) {
      if (d[(y * w + x) * 4 + 3] > 40) { if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y; }
    }
    if (x1 < 0) return null;
    const bw = Math.max(1, x1 - x0), bh = Math.max(1, y1 - y0);
    /* Calcar: se compara en el mismo lugar. Libre: se centra y escala a la caja. */
    const lado = normalizar ? Math.max(bw, bh) : w;
    const ox = normalizar ? x0 - (lado - bw) / 2 : 0, oy = normalizar ? y0 - (lado - bh) / 2 : 0;
    const m = new Uint8Array(N * N);
    for (let y = y0; y <= y1; y += 2) for (let x = x0; x <= x1; x += 2) {
      if (d[(y * w + x) * 4 + 3] > 40) {
        const gx = Math.min(N - 1, Math.floor((x - ox) / lado * N)), gy = Math.min(N - 1, Math.floor((y - oy) / lado * N));
        m[gy * N + gx] = 1;
      }
    }
    m.aspecto = bw / bh; m.ox = ox; m.oy = oy; m.lado = lado;
    return m;
  }
  function dilatar(m, r) {
    const o = new Uint8Array(N * N);
    for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) if (m[y * N + x]) {
      for (let dy = -r; dy <= r; dy++) for (let dx = -r; dx <= r; dx++) {
        const X = x + dx, Y = y + dy;
        if (X >= 0 && Y >= 0 && X < N && Y < N) o[Y * N + X] = 1;
      }
    }
    return o;
  }
  /* Niveles de exigencia: margen (casilleros) al calcar y en libre,
     mínimo de precisión y de cobertura para «Bien», nota para «Casi»
     y tamaño mínimo de una parte sin cubrir para contar como «falta». */
  const NIVELES = {
    suave:    { nombre: "Suave",    tolCalcar: 3, tolLibre: 3, bien: 0.70, casi: 0.50, parte: 0.06 },
    normal:   { nombre: "Normal",   tolCalcar: 3, tolLibre: 3, bien: 0.75, casi: 0.58, parte: 0.03 },
    estricta: { nombre: "Estricta", tolCalcar: 2, tolLibre: 2, bien: 0.82, casi: 0.66, parte: 0.02 }
  };
  const ZONAS = [["arriba a la izquierda", "arriba", "arriba a la derecha"], ["a la izquierda", "en el medio", "a la derecha"], ["abajo a la izquierda", "abajo", "abajo a la derecha"]];

  function puntaje(u, t, nv) {
    nv = nv || NIVELES.normal;
    const tol = nv.tol != null ? nv.tol : 3;
    const td = dilatar(t, tol), ud = dilatar(u, tol);
    let nu = 0, nt = 0, uOk = 0, tOk = 0;
    const falta = new Uint8Array(N * N);       /* partes de la letra sin cubrir */
    let x0 = N, y0 = N, x1 = -1, y1 = -1;
    for (let i = 0; i < N * N; i++) {
      if (u[i]) { nu++; if (td[i]) uOk++; }
      if (t[i]) {
        nt++; if (ud[i]) tOk++; else falta[i] = 1;
        const x = i % N, y = (i / N) | 0;
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
    }
    const prec = nu ? uOk / nu : 0, cob = nt ? tOk / nt : 0;
    let f = prec + cob ? 2 * prec * cob / (prec + cob) : 0;
    /* Partes que faltan: grupos de casilleros de la letra sin cubrir,
       conectados entre sí. Un grupo grande (≥ nv.parte de la tinta de la
       letra) es una parte que no dibujaste, como la colita de la Щ. */
    const faltan = [];
    const ancho = Math.max(1, x1 - x0 + 1), alto = Math.max(1, y1 - y0 + 1);
    const visto = new Uint8Array(N * N);
    for (let i = 0; i < N * N; i++) {
      if (!falta[i] || visto[i]) continue;
      const pila = [i]; visto[i] = 1; let n = 0, sx = 0, sy = 0;
      while (pila.length) {
        const k = pila.pop(), x = k % N, y = (k / N) | 0; n++; sx += x; sy += y;
        for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
          const X = x + dx, Y = y + dy, q = Y * N + X;
          if (X >= 0 && Y >= 0 && X < N && Y < N && falta[q] && !visto[q]) { visto[q] = 1; pila.push(q); }
        }
      }
      if (n >= Math.max(4, nt * nv.parte)) {
        const zx = Math.min(2, Math.floor((sx / n - x0) / ancho * 3)), zy = Math.min(2, Math.floor((sy / n - y0) / alto * 3));
        const nombre = ZONAS[zy][zx];
        if (faltan.indexOf(nombre) < 0) faltan.push(nombre);
      }
    }
    f *= Math.max(0, 1 - 0.2 * faltan.length);
    /* Demasiada tinta (rellenar o garabatear encima) también baja la nota */
    const tinta = nt ? nu / nt : 0;
    if (tinta > 1.8) f *= 1.8 / tinta;
    let r = f >= nv.casi ? 1 : 0;
    if (prec >= nv.bien && cob >= nv.bien && f >= nv.bien && !faltan.length) r = 2;
    return { prec, cob, f, r, faltan, falta, tinta };
  }

  function AzEscrituraMano({ letras, inicial, c }) {
    const [i, setI] = useState(Math.max(0, letras.findIndex(l => l.upper === inicial)));
    const [may, setMay] = useState(true);
    const [modo, setModo] = useState("calcar");
    const [res, setRes] = useState(null);
    const [listo, setListo] = useState(false);
    const [nivel, setNivelSt] = useState("normal");
    useEffect(() => { (async () => { const n = await azGet("az_mano_nivel", "normal"); if (NIVELES[n]) setNivelSt(n); })(); }, []);
    const setNivel = n => { setNivelSt(n); setRes(null); azSet("az_mano_nivel", n); };
    const lienzo = useRef(null), guia = useRef(null), dibujando = useRef(false), ult = useRef(null);
    const l = letras[i];
    const glifo = may ? l.upper : l.lower;

    useEffect(() => {
      let vivo = true;
      (document.fonts && document.fonts.load ? document.fonts.load("100px CyrCursive") : Promise.resolve()).then(() => { if (vivo) setListo(true); });
      return () => { vivo = false; };
    }, []);

    const tam = () => { const cv = lienzo.current; return cv ? cv.width : 600; };
    const dibujarGlifo = (ctx, color) => {
      const S = tam();
      ctx.clearRect(0, 0, S, S);
      ctx.fillStyle = color;
      ctx.font = Math.round(S * (may ? 0.62 : 0.72)) + "px CyrCursive";
      ctx.textAlign = "center"; ctx.textBaseline = "alphabetic";
      ctx.fillText(glifo, S / 2, S * (may ? 0.68 : 0.62));
    };
    const limpiar = () => { const cv = lienzo.current; if (cv) cv.getContext("2d").clearRect(0, 0, cv.width, cv.height); setRes(null); };

    useEffect(() => {
      limpiar();
      const g = guia.current;
      if (!g) return;
      const ctx = g.getContext("2d");
      if (modo === "calcar" && listo) dibujarGlifo(ctx, c.textMuted + "55"); else ctx.clearRect(0, 0, g.width, g.height);
    }, [i, may, modo, listo, c.textMuted]);

    const pos = e => {
      const cv = lienzo.current, r = cv.getBoundingClientRect();
      return { x: (e.clientX - r.left) / r.width * cv.width, y: (e.clientY - r.top) / r.height * cv.height };
    };
    const abajo = e => {
      e.preventDefault();
      if (res) limpiar();
      dibujando.current = true; ult.current = pos(e);
      try { lienzo.current.setPointerCapture(e.pointerId); } catch (x) {}
    };
    const mover = e => {
      if (!dibujando.current) return;
      e.preventDefault();
      const p = pos(e), ctx = lienzo.current.getContext("2d");
      ctx.strokeStyle = c.gold; ctx.lineWidth = tam() * 0.035; ctx.lineCap = "round"; ctx.lineJoin = "round";
      ctx.beginPath(); ctx.moveTo(ult.current.x, ult.current.y); ctx.lineTo(p.x, p.y); ctx.stroke();
      ult.current = p;
    };
    const arriba = () => { dibujando.current = false; };

    const comprobar = () => {
      /* Siempre se compara la forma: dibujo y letra se centran y escalan a
         la misma caja. Así un trazo un poco corrido o más chico no se castiga,
         pero si falta una parte (o sobra) la caja cambia y la forma no coincide. */
      const libre = modo === "libre";
      const u = mascara(lienzo.current, true);
      if (!u) { setRes({ vacio: true }); return; }
      const off = document.createElement("canvas"); off.width = off.height = tam();
      dibujarGlifo(off.getContext("2d"), "#000");
      const t = mascara(off, true);
      const base = NIVELES[nivel];
      const p = puntaje(u, t, Object.assign({}, base, { tol: libre ? base.tolLibre : base.tolCalcar }));
      const r = Math.min(u.aspecto, t.aspecto) / Math.max(u.aspecto, t.aspecto);   /* proporción */
      p.f *= Math.min(1, 0.4 + 0.6 * r);
      if (r < 0.8 && p.r === 2) p.r = 1;
      if (p.f < base.casi) p.r = 0;
      setRes(p);
      /* Letra de referencia en verde y, encima, en rojo lo que no cubriste */
      const g = guia.current.getContext("2d");
      dibujarGlifo(g, "#4CAF8266");
      const S = tam(), celda = t.lado / N;
      g.fillStyle = "#D9776FAA";
      for (let k = 0; k < N * N; k++) if (p.falta[k]) {
        const x = k % N, y = (k / N) | 0;
        g.fillRect(t.ox + x * celda, t.oy + y * celda, Math.ceil(celda), Math.ceil(celda));
      }
    };

    const ir = d => { setI(x => (x + d + letras.length) % letras.length); };
    const chip = on => Object.assign({ padding: "7px 11px", borderRadius: 10, fontSize: 12.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" },
      on ? { background: c.gold + "22", border: `1px solid ${c.gold}`, color: c.gold } : { background: c.bg2, border: `1px solid ${c.border}`, color: c.textMuted });
    const col = res && !res.vacio ? (res.r === 2 ? "#4CAF82" : res.r === 1 ? "#E2884A" : "#B5605C") : null;
    const btn = { padding: "11px 12px", borderRadius: 10, border: `1px solid ${c.border}`, background: c.bg3, color: c.text, fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "inherit", flex: 1 };

    return h("div", null,
      h("style", null, `.mano-cv{position:absolute;inset:0;width:100%;height:100%;touch-action:none;}`),
      h("div", { style: { display: "flex", gap: 8, flexWrap: "wrap", marginTop: 4 } },
        h("button", { className: "pair-btn", style: chip(modo === "calcar"), onClick: () => setModo("calcar") }, "Calcar"),
        h("button", { className: "pair-btn", style: chip(modo === "libre"), onClick: () => setModo("libre") }, "Libre"),
        h("span", { style: { flex: 1 } }),
        h("button", { className: "pair-btn", style: chip(may), onClick: () => setMay(true) }, "Mayúscula"),
        h("button", { className: "pair-btn", style: chip(!may), onClick: () => setMay(false) }, "Minúscula")),
      h("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 14 } },
        h("button", { style: Object.assign({}, btn, { flex: "0 0 44px", padding: 0, height: 44 }), onClick: () => ir(-1), "aria-label": "Letra anterior" }, "‹"),
        h("div", { style: { textAlign: "center" } },
          h("div", { lang: "ru", style: { fontSize: 30, fontWeight: 800, color: c.gold, lineHeight: 1 } }, l.upper + " " + l.lower),
          h("div", { lang: "ru", style: { fontSize: 12, color: c.textMuted, marginTop: 4 } }, l.name)),
        h("button", { style: Object.assign({}, btn, { flex: "0 0 44px", padding: 0, height: 44 }), onClick: () => ir(1), "aria-label": "Letra siguiente" }, "›")),
      modo === "libre" && h("div", { style: { fontSize: 13, color: c.textSub, textAlign: "center", marginTop: 8 } }, "Dibujá la " + (may ? "mayúscula" : "minúscula") + " sin mirar el modelo."),
      h("div", { style: { position: "relative", width: "78%", maxWidth: 300, aspectRatio: "1 / 1", margin: "12px auto 0", background: c.card, border: `1px solid ${col || c.border}`, borderRadius: 16, overflow: "hidden" } },
        h("div", { style: { position: "absolute", left: "8%", right: "8%", top: "62%", borderTop: `1px dashed ${c.border}` } }),
        h("canvas", { ref: guia, width: 600, height: 600, className: "mano-cv", style: { pointerEvents: "none" } }),
        h("canvas", { ref: lienzo, width: 600, height: 600, className: "mano-cv", "aria-label": "Lienzo para dibujar la letra",
          onPointerDown: abajo, onPointerMove: mover, onPointerUp: arriba, onPointerCancel: arriba, onPointerLeave: arriba })),
      h("div", { style: { display: "flex", gap: 8, marginTop: 12, maxWidth: 340, marginLeft: "auto", marginRight: "auto" } },
        h("button", { style: btn, onClick: limpiar }, "Borrar"),
        h("button", { style: btn, onClick: () => azHablarRu(l.lower) }, "▶ Escuchar"),
        h("button", { style: Object.assign({}, btn, { background: c.gold, borderColor: c.gold, color: c.bg }), onClick: comprobar }, "Comprobar")),
      res && h("div", { style: { maxWidth: 340, margin: "12px auto 0", fontSize: 14, lineHeight: 1.5, color: c.textSub } },
        res.vacio ? "Primero dibujá la letra." : h(React.Fragment, null,
          h("span", { style: { display: "inline-block", fontSize: 13, fontWeight: 800, borderRadius: 8, padding: "3px 10px", color: col, background: col + "22", border: "1px solid " + col, marginRight: 8 } },
            res.r === 2 ? "✓ Bien" : res.r === 1 ? "≈ Casi" : "✗ Mal"),
          "Cubriste el " + Math.round(res.cob * 100) + " % de la letra y el " + Math.round(res.prec * 100) + " % de tu trazo cae sobre ella. ",
          res.faltan.length ? "Te faltó una parte " + res.faltan.join(" y ") + ". " : "",
          "En verde, la forma de referencia; en rojo, lo que no cubriste.")),
      h("div", { style: { display: "flex", gap: 6, alignItems: "center", justifyContent: "center", marginTop: 18 } },
        h("span", { style: { fontSize: 12, color: c.textMuted, marginRight: 2 } }, "Exigencia:"),
        Object.keys(NIVELES).map(k => h("button", { key: k, style: chip(nivel === k), onClick: () => setNivel(k) }, NIVELES[k].nombre))),
      h("div", { style: { maxWidth: 340, margin: "14px auto 0", fontSize: 12, color: c.textMuted, lineHeight: 1.5 } },
        "La app compara la forma final, no el orden ni la dirección de los trazos. Es una guía para practicar: cada persona escribe un poco distinto."));
  }

  window.AzEscrituraMano = AzEscrituraMano;
  window.azPuntajeMano = puntaje;   /* para pruebas */
})();
