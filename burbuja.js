/* ============================================================
   BURBUJA.JS — Palabras y frases tocables (compartido)
   ------------------------------------------------------------
   Versión 25/09/2026. Dentro de un ejercicio o un texto, las
   palabras que se enseñan se ven como links finos. Al tocarlas se
   abre una burbuja con la palabra, su transliteración, IPA,
   traducción y el link a la ficha. Las frases hechas abren su
   propia burbuja, con link a Diálogos.

   Cargar después de preact.js, data-lexicon.js y core.js
   (data-frases.js si se usan frases; data-casos.js y
   data-verbos.js para explicar formas como кни́гу):
     <script src="burbuja.js"></script>

   Componentes (window.*):
     AzBurbujaHost({ dark })      → una sola vez por página
     AzTexto({ ru, lex, objetivo }) → texto ruso con palabras tocables
         lex: un ID por palabra, en orden (como en Diálogos)
         objetivo: IDs que se enlazan (sin objetivo, se enlazan todos)
     AzPalabra({ texto, id, sentido }) → una palabra suelta
     AzFrase({ id, texto })       → una frase de data-frases.js
   Funciones: azAbrirBurbuja(tipo, datos, elemento), azHablarRu(texto)
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef, useLayoutEffect } = htmPreact;
  const RX_PALABRA = /[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g;
  const POS_CORTO = { sustantivo: "sustantivo", verbo: "verbo", adjetivo: "adjetivo", pronombre: "pronombre", determinante: "determinante", numeral: "numeral", adverbio: "adverbio", "preposición": "preposición", "conjunción": "conjunción", "partícula": "partícula", "interjección": "interjección" };
  const GEN = { m: "masculino", f: "femenino", n: "neutro" };

  function azHablarRu(texto) {
    try {
      if (!texto || !("speechSynthesis" in window)) return;
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(texto.replace(/\u0301/g, ""));
      u.lang = "ru-RU"; u.rate = 0.85;
      window.speechSynthesis.speak(u);
    } catch (e) {}
  }

  function abrir(tipo, datos, el) {
    const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    window.dispatchEvent(new CustomEvent("az-burbuja", { detail: { tipo: tipo, datos: datos, rect: r } }));
  }

  /* Qué forma es lo que se tocó (кни́гу → acusativo singular de кни́га) */
  function descForma(id, texto, e) {
    if (!texto || typeof azFormasDe !== "function" || typeof azFormaClave !== "function") return null;
    const k = azFormaClave(texto);
    if (k === azFormaClave(e.ru)) return null;
    const et = [];
    azFormasDe(id).forEach(function (f) { if (azFormaClave(f[0]) === k && et.indexOf(f[1]) < 0) et.push(f[1]); });
    if (!et.length) return null;
    const forma = azFormasDe(id).filter(function (f) { return azFormaClave(f[0]) === k; })[0][0];
    return { forma: forma, etiquetas: et.join(" / ") };
  }

  function Estilos({ c }) {
    return h("style", null, `
      .az-link{color:inherit;cursor:pointer;text-decoration:underline dotted ${c.gold};text-decoration-thickness:1.5px;text-underline-offset:3px;border-radius:4px;-webkit-tap-highlight-color:transparent;}
      .az-link:active,.az-link.az-on{background:${c.gold}33;}
      .az-link:focus-visible{outline:2px solid ${c.gold};outline-offset:1px;}
      .az-frase{text-decoration-style:dashed;}
      .az-bb-velo{position:fixed;inset:0;z-index:400;}
      .az-bb{position:fixed;z-index:401;background:${c.card};border:1px solid ${c.border};border-radius:14px;box-shadow:0 16px 40px rgba(0,0,0,.4);padding:14px 16px 12px;color:${c.text};font-family:'Noto Sans',sans-serif;animation:azBbIn .16s ease both;}
      @keyframes azBbIn{from{opacity:0;transform:translateY(4px) scale(.98);}to{opacity:1;transform:none;}}
      @media (prefers-reduced-motion:reduce){.az-bb{animation:none;}}
      .az-bb-flecha{position:absolute;width:12px;height:12px;background:${c.card};transform:rotate(45deg);}
      .az-bb-top{display:flex;align-items:flex-start;justify-content:space-between;gap:10px;}
      .az-bb-ru{font-size:22px;font-weight:800;color:${c.gold};line-height:1.15;word-break:break-word;}
      .az-bb-play{width:32px;height:32px;border-radius:9px;background:${c.bg3};border:1px solid ${c.border};color:${c.text};font-size:12px;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;padding:0;font-family:inherit;}
      .az-bb-forma{margin-top:4px;font-size:12.5px;color:${c.textSub};}
      .az-bb-forma b{color:${c.text};font-weight:700;}
      .az-bb-tr{margin-top:6px;font-size:14px;color:${c.textSub};font-style:italic;}
      .az-bb-ipa{margin-top:2px;font-size:12.5px;color:${c.textMuted};}
      .az-bb-pos{display:inline-block;margin-top:8px;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;background:${c.gold}33;color:${c.gold};border:1px solid ${c.gold};border-radius:7px;padding:2px 8px;}
      .az-bb-es{margin-top:8px;font-size:15px;font-weight:700;color:${c.text};line-height:1.35;}
      .az-bb-pie{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-top:12px;padding-top:10px;border-top:1px solid ${c.border};}
      .az-bb-a{font-size:13px;font-weight:700;color:${c.gold};text-decoration:none;cursor:pointer;background:none;border:none;padding:4px 0;font-family:inherit;}
      .az-bb-reg{font-size:11.5px;font-weight:600;color:${c.textSub};background:${c.bg2};border:1px solid ${c.border};border-radius:8px;padding:3px 8px;}
      .az-bb-pals{margin-top:10px;display:flex;flex-wrap:wrap;gap:6px;}
      .az-bb-pal{font-size:13px;font-weight:600;color:${c.text};background:${c.bg2};border:1px solid ${c.border};border-radius:8px;padding:5px 9px;cursor:pointer;font-family:inherit;}
    `);
  }

  function ContenidoPalabra({ d, onVolver }) {
    const e = typeof lexComerById === "function" ? lexComerById(d.id) : null;
    if (!e) return h("div", { className: "az-bb-es" }, "Todavía no está en el diccionario.");
    const f = descForma(d.id, d.forma, e);
    const senses = e.senses || [];
    const es = d.sentido != null && senses[d.sentido] ? senses[d.sentido].es : senses.slice(0, 3).map(function (s) { return s.es; }).join("; ");
    const pos = [POS_CORTO[e.posNormalized] || e.posNormalized, e.gender ? GEN[e.gender] : null].filter(Boolean).join(" · ");
    const href = "ficha.html?id=" + e.id;
    return h(React.Fragment, null,
      h("div", { className: "az-bb-top" },
        h("div", { className: "az-bb-ru", lang: "ru" }, e.acento || e.ru),
        h("button", { className: "az-bb-play", "aria-label": "Escuchar", onClick: function () { azHablarRu(e.ru); } }, "▶")),
      f && h("div", { className: "az-bb-forma" }, h("b", { lang: "ru" }, f.forma), " es " + f.etiquetas),
      e.translit && h("div", { className: "az-bb-tr" }, e.translit),
      e.ipa && h("div", { className: "az-bb-ipa" }, "IPA: /" + e.ipa.replace(/^\/|\/$/g, "") + "/"),
      pos && h("div", { className: "az-bb-pos" }, pos),
      h("div", { className: "az-bb-es" }, es),
      h("div", { className: "az-bb-pie" },
        onVolver ? h("button", { className: "az-bb-a", onClick: onVolver }, "‹ Frase") : h("span"),
        h("a", { className: "az-bb-a", href: href, onClick: function (ev) { azNavigate(ev, href); } }, "Ver ficha")));
  }

  function ContenidoFrase({ d, onPalabra }) {
    const f = typeof fraseById === "function" ? fraseById(d.id) : (typeof FRASES !== "undefined" ? FRASES.filter(function (x) { return x.id === d.id; })[0] : null);
    if (!f) return h("div", { className: "az-bb-es" }, "Frase no encontrada.");
    const pals = f.ru.match(RX_PALABRA) || [];
    const href = "dialogos.html?frase=" + f.id;
    return h(React.Fragment, null,
      h("div", { className: "az-bb-top" },
        h("div", { className: "az-bb-ru", lang: "ru" }, f.ru),
        h("button", { className: "az-bb-play", "aria-label": "Escuchar", onClick: function () { azHablarRu(f.ru); } }, "▶")),
      f.tr && h("div", { className: "az-bb-tr" }, f.tr),
      h("div", { className: "az-bb-es" }, f.es),
      pals.length > 1 && h("div", { className: "az-bb-pals" }, pals.map(function (p, i) {
        const id = (f.lex || [])[i];
        if (!id || !/^CMR-/.test(id)) return h("span", { key: i, className: "az-bb-pal", lang: "ru", style: { cursor: "default" } }, p);
        return h("button", { key: i, className: "az-bb-pal", lang: "ru", onClick: function () { onPalabra({ id: id, forma: p }); } }, p);
      })),
      h("div", { className: "az-bb-pie" },
        f.registro ? h("span", { className: "az-bb-reg" }, "Con " + f.registro) : h("span"),
        h("a", { className: "az-bb-a", href: href, onClick: function (ev) { azNavigate(ev, href); } }, "Ver en Diálogos")));
  }

  function AzBurbujaHost({ dark }) {
    const c = azColors(dark !== false);
    const [st, setSt] = useState(null);       // { tipo, datos, rect, sub }
    const [pos, setPos] = useState(null);
    const ref = useRef(null);

    useEffect(function () {
      const on = function (ev) { setSt(Object.assign({ sub: null }, ev.detail)); setPos(null); };
      const esc = function (ev) { if (ev.key === "Escape") setSt(null); };
      window.addEventListener("az-burbuja", on);
      window.addEventListener("keydown", esc);
      return function () { window.removeEventListener("az-burbuja", on); window.removeEventListener("keydown", esc); };
    }, []);

    /* Ubicar: debajo de la palabra si entra; si no, arriba. Nunca fuera de la pantalla. */
    useLayoutEffect(function () {
      if (!st || !ref.current) return;
      const W = window.innerWidth, H = window.innerHeight, m = W * 0.03;
      const w = Math.min(320, W - 2 * m), alto = ref.current.offsetHeight;
      const r = st.rect || { left: W / 2, right: W / 2, top: H / 3, bottom: H / 3 };
      const cx = (r.left + r.right) / 2;
      const left = Math.max(m, Math.min(W - m - w, cx - w / 2));
      const abajo = r.bottom + 10 + alto <= H * 0.9 || r.top - 10 - alto < H * 0.06;
      const top = abajo ? r.bottom + 10 : r.top - 10 - alto;
      setPos({ left: left, top: Math.max(H * 0.06, top), w: w, flecha: Math.max(14, Math.min(w - 26, cx - left - 6)), abajo: abajo });
    }, [st && st.datos, st && st.sub]);

    if (!st) return h(Estilos, { c: c });
    const cerrar = function () { setSt(null); };
    const sub = st.sub;
    const cuerpo = st.tipo === "frase" && !sub
      ? h(ContenidoFrase, { d: st.datos, onPalabra: function (p) { setSt(Object.assign({}, st, { sub: p })); } })
      : h(ContenidoPalabra, { d: sub || st.datos, onVolver: sub ? function () { setSt(Object.assign({}, st, { sub: null })); } : null });
    return h(React.Fragment, null,
      h(Estilos, { c: c }),
      h("div", { className: "az-bb-velo", onClick: cerrar, onTouchMove: cerrar }),
      h("div", {
        ref: ref, className: "az-bb", role: "dialog",
        style: pos ? { left: pos.left, top: pos.top, width: pos.w } : { left: "3vw", top: "30vh", width: "min(320px, 94vw)", visibility: "hidden" }
      },
        pos && h("div", { className: "az-bb-flecha", style: pos.abajo
          ? { top: -7, left: pos.flecha, borderLeft: "1px solid " + c.border, borderTop: "1px solid " + c.border }
          : { bottom: -7, left: pos.flecha, borderRight: "1px solid " + c.border, borderBottom: "1px solid " + c.border } }),
        cuerpo));
  }

  function tecla(fn) { return function (ev) { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); fn(ev); } }; }

  function AzPalabra({ texto, id, sentido }) {
    const go = function (ev) { ev.stopPropagation(); abrir("palabra", { id: id, forma: texto, sentido: sentido }, ev.currentTarget); };
    return h("span", { className: "az-link", role: "button", tabIndex: 0, lang: "ru", onClick: go, onKeyDown: tecla(go) }, texto);
  }

  function AzFrase({ id, texto }) {
    const f = typeof fraseById === "function" ? fraseById(id) : (typeof FRASES !== "undefined" ? FRASES.filter(function (x) { return x.id === id; })[0] : null);
    const go = function (ev) { ev.stopPropagation(); abrir("frase", { id: id }, ev.currentTarget); };
    return h("span", { className: "az-link az-frase", role: "button", tabIndex: 0, lang: "ru", onClick: go, onKeyDown: tecla(go) }, texto || (f ? f.ru : id));
  }

  /* Texto ruso con las palabras objetivo tocables */
  function AzTexto({ ru, lex, objetivo, sentidos }) {
    const partes = [];
    let k = 0, ult = 0, m;
    RX_PALABRA.lastIndex = 0;
    while ((m = RX_PALABRA.exec(ru || ""))) {
      if (m.index > ult) partes.push(ru.slice(ult, m.index));
      const id = (lex || [])[k];
      const enlazar = id && /^CMR-/.test(id) && (!objetivo || objetivo.indexOf(id) >= 0);
      partes.push(enlazar ? h(AzPalabra, { key: m.index, texto: m[0], id: id, sentido: sentidos ? sentidos[id] : undefined }) : m[0]);
      ult = m.index + m[0].length; k++;
    }
    if (ult < (ru || "").length) partes.push(ru.slice(ult));
    return h("span", { lang: "ru" }, partes);
  }

  window.azHablarRu = azHablarRu;
  window.azAbrirBurbuja = abrir;
  window.AzBurbujaHost = AzBurbujaHost;
  window.AzPalabra = AzPalabra;
  window.AzFrase = AzFrase;
  window.AzTexto = AzTexto;
})();
