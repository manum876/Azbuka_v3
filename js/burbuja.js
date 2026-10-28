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
   Función: azAbrirBurbuja(tipo, datos, elemento). La voz (azHablarRu)
   está en core.js.

   ABECÉ (28/10/2026): con la dirección «abece» la burbuja lee el léxico
   español (lexEsById, IDs ESP-…) y muestra la palabra española, su
   pronunciación en cirílico (az-tl), IPA, «Категория · род» y la
   traducción rusa, con voz española (azHablarEs) y textos en ruso.
   Si se tocó una forma (buenas, hablé), dice de qué palabra es
   (data-formas-es.js, js/verbos-es.js); si es la forma femenina
   (amiga), muestra su traducción. AzTexto acepta es= en lugar de ru=;
   las frases salen de FRASES_ES (es, ru, tr, lex) cuando exista.
   ============================================================ */
(function () {
  const h = React.createElement;
  const { useState, useEffect, useRef, useLayoutEffect } = htmPreact;
  const ES = typeof AZ_DIRECCION !== "undefined" && AZ_DIRECCION.id === "abece";
  const RX_PALABRA = ES ? /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+(?:-[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]+)*/g : /[А-Яа-яЁё\u0301]+(?:-[А-Яа-яЁё\u0301]+)*/g;
  const PREF = ES ? /^ESP-/ : /^CMR-/;
  const LANG = ES ? "es" : "ru";
  const hablar = t => ES ? azHablarEs(t) : azHablarRu(t);
  /* Textos (Abecé en ruso: borrador para Iván) */
  const TX = ES ? {
    noDic: "Этого слова пока нет в словаре.", escuchar: "Слушать", volver: "‹ Фраза", cuaderno: "＋ Тетрадь", ficha: "Открыть в словаре",
    noFrase: "Фраза не найдена.", dialogos: "Открыть в диалогах", con: "С ", es: " — ", fichaCu: "Карточка · ", fraseCu: "Фраза · "
  } : {
    noDic: "Todavía no está en el diccionario.", escuchar: "Escuchar", volver: "‹ Frase", cuaderno: "＋ Cuaderno", ficha: "Ver ficha",
    noFrase: "Frase no encontrada.", dialogos: "Ver en Diálogos", con: "Con ", es: " es ", fichaCu: "Ficha · ", fraseCu: "Frase · "
  };
  const POS_RU = { sustantivo: "существительное", verbo: "глагол", adjetivo: "прилагательное", pronombre: "местоимение", determinante: "определитель", numeral: "числительное", adverbio: "наречие", "preposición": "предлог", "conjunción": "союз", "interjección": "междометие", "artículo": "артикль", "contracción": "слитная форма" };
  const GEN_RU = { m: "мужской род", f: "женский род", "m/f": "мужской и женский род" };
  const POS_CORTO = { sustantivo: "sustantivo", verbo: "verbo", adjetivo: "adjetivo", pronombre: "pronombre", determinante: "determinante", numeral: "numeral", adverbio: "adverbio", "preposición": "preposición", "conjunción": "conjunción", "partícula": "partícula", "interjección": "interjección" };
  const GEN = { m: "masculino", f: "femenino", n: "neutro" };

  function abrir(tipo, datos, el) {
    const r = el && el.getBoundingClientRect ? el.getBoundingClientRect() : null;
    window.dispatchEvent(new CustomEvent("az-burbuja", { detail: { tipo: tipo, datos: datos, rect: r } }));
  }

  /* Qué forma es lo que se tocó (кни́гу → acusativo singular de кни́га) */
  function descFormaEs(id, texto, e) {
    if (!texto) return null;
    const k = texto.toLowerCase();
    if (k === e.es.toLowerCase()) return null;
    const et = [];
    if (typeof formasEsLista === "function") formasEsLista(id).forEach(function (x) { if (x.f.toLowerCase() === k && typeof AZ_FES_K !== "undefined" && AZ_FES_K[x.k] && et.indexOf(AZ_FES_K[x.k]) < 0) et.push(AZ_FES_K[x.k]); });
    if (typeof vesBuscarForma === "function") (vesBuscarForma(texto) || []).forEach(function (r) { if (r.id === id) (r.etiquetas || []).forEach(function (t) { if (et.indexOf(t) < 0) et.push(t); }); });
    return et.length ? { forma: texto, etiquetas: et.join(" / ") } : null;
  }
  function descForma(id, texto, e) {
    if (ES) return descFormaEs(id, texto, e);
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
      .az-frase{}
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

  /* Abecé: la palabra española, con la traducción rusa */
  function ContenidoPalabraEs({ d, onVolver }) {
    const e = typeof lexEsById === "function" ? lexEsById(d.id) : null;
    if (!e) return h("div", { className: "az-bb-es" }, TX.noDic);
    const fem = e.femenino && e.femenino.es && d.forma && d.forma.toLowerCase() === e.femenino.es.toLowerCase() ? e.femenino : null;
    const f = fem ? null : descForma(d.id, d.forma, e);
    const senses = e.senses || [];
    const ru = fem ? fem.ru : d.sentido != null && senses[d.sentido] ? senses[d.sentido].ru : senses.slice(0, 3).map(function (s) { return s.ru; }).join("; ");
    const gen = e.posNormalized === "sustantivo" && e.gender ? (fem ? "f" : (e.femenino && e.femenino.es ? "m" : e.gender)) : null;
    const pos = [POS_RU[e.posNormalized] || e.posNormalized, gen ? GEN_RU[gen] : null].filter(Boolean).join(" · ");
    const pal = fem ? fem.es : e.es;
    const href = "ficha.html?id=" + e.id;
    return h(React.Fragment, null,
      h("div", { className: "az-bb-top" },
        h("div", { className: "az-bb-ru", lang: "es" }, pal),
        h("button", { className: "az-bb-play", "aria-label": TX.escuchar, onClick: function () { azHablarEs(pal); } }, "▶")),
      f && h("div", { className: "az-bb-forma" }, h("b", { lang: "es" }, f.forma), " — " + f.etiquetas + " от " + e.es),
      (fem ? fem.translit : e.translit) && h("div", { className: "az-bb-tr az-tl" }, fem ? fem.translit : e.translit),
      (fem ? fem.ipa : e.ipa) && h("div", { className: "az-bb-ipa" }, "IPA: /" + (fem ? fem.ipa : e.ipa) + "/"),
      pos && h("div", { className: "az-bb-pos" }, pos),
      h("div", { className: "az-bb-es" }, ru),
      h("div", { className: "az-bb-pie" },
        onVolver ? h("button", { className: "az-bb-a", onClick: onVolver }, TX.volver)
          : h("button", { className: "az-bb-a", onClick: function () {
              azGuardarEnCuaderno(pal + " — " + ru + (f ? "\n" + f.forma + " — " + f.etiquetas + " от " + e.es + "." : ""), { titulo: TX.fichaCu + pal, href: href });
            } }, TX.cuaderno),
        h("a", { className: "az-bb-a", href: href, onClick: function (ev) { azNavigate(ev, href); } }, TX.ficha)));
  }

  function ContenidoPalabra({ d, onVolver }) {
    if (ES) return h(ContenidoPalabraEs, { d: d, onVolver: onVolver });
    const e = typeof lexComerById === "function" ? lexComerById(d.id) : null;
    if (!e) return h("div", { className: "az-bb-es" }, "Todavía no está en el diccionario.");
    const f = descForma(d.id, d.forma, e);
    const senses = e.senses || [];
    const neutro = typeof azEsNeutro === "function" ? azEsNeutro : function (x) { return x; };   /* 26/10/2026: sin regionales */
    const es = d.sentido != null && senses[d.sentido] ? neutro(senses[d.sentido].es) : senses.slice(0, 3).map(function (s) { return neutro(s.es); }).join("; ");
    const pos = [POS_CORTO[e.posNormalized] || e.posNormalized, e.gender ? GEN[e.gender] : null].filter(Boolean).join(" · ");
    const href = "ficha.html?id=" + e.id;
    return h(React.Fragment, null,
      h("div", { className: "az-bb-top" },
        h("div", { className: "az-bb-ru", lang: "ru" }, e.acento || e.ru),
        h("button", { className: "az-bb-play", "aria-label": "Escuchar", onClick: function () { azHablarRu(e.acento || e.ru); } }, "▶")),
      f && h("div", { className: "az-bb-forma" }, h("b", { lang: "ru" }, f.forma), " es " + f.etiquetas),
      e.translit && h("div", { className: "az-bb-tr az-tl" }, e.translit),
      e.ipa && h("div", { className: "az-bb-ipa" }, "IPA: /" + e.ipa.replace(/^\/|\/$/g, "") + "/"),
      pos && h("div", { className: "az-bb-pos" }, pos),
      h("div", { className: "az-bb-es" }, es),
      h("div", { className: "az-bb-pie" },
        onVolver ? h("button", { className: "az-bb-a", onClick: onVolver }, "‹ Frase")
          : h("button", { className: "az-bb-a", onClick: function () {
              azGuardarEnCuaderno((e.acento || e.ru) + " — " + es + (f ? "\n" + f.forma + " es " + f.etiquetas + "." : ""), { titulo: "Ficha · " + (e.acento || e.ru), href: href });
            } }, "＋ Cuaderno"),
        h("a", { className: "az-bb-a", href: href, onClick: function (ev) { azNavigate(ev, href); } }, "Ver ficha")));
  }

  /* La frase: en Azbuka de FRASES (ru, es); en Abecé de FRASES_ES (es = la frase, ru = la traducción) */
  function fraseDe(id) {
    if (ES) { const L = typeof FRASES_ES !== "undefined" ? FRASES_ES : []; const f = L.filter(function (x) { return x.id === id; })[0]; return f ? { id: f.id, txt: f.es, tr: f.tr, trad: f.ru, lex: f.lex, registro: f.registro } : null; }
    const f = typeof fraseById === "function" ? fraseById(id) : (typeof FRASES !== "undefined" ? FRASES.filter(function (x) { return x.id === id; })[0] : null);
    return f ? { id: f.id, txt: f.ru, tr: f.tr, trad: f.es, lex: f.lex, registro: f.registro } : null;
  }
  function ContenidoFrase({ d, onPalabra }) {
    const f = fraseDe(d.id);
    if (!f) return h("div", { className: "az-bb-es" }, TX.noFrase);
    const pals = f.txt.match(RX_PALABRA) || [];
    const href = "dialogos.html?frase=" + f.id;
    return h(React.Fragment, null,
      h("div", { className: "az-bb-top" },
        h("div", { className: "az-bb-ru", lang: LANG }, f.txt),
        h("button", { className: "az-bb-play", "aria-label": TX.escuchar, onClick: function () { hablar(f.txt); } }, "▶")),
      f.tr && h("div", { className: "az-bb-tr az-tl" }, f.tr),
      h("div", { className: "az-bb-es" }, f.trad),
      pals.length > 1 && h("div", { className: "az-bb-pals" }, pals.map(function (p, i) {
        const id = (f.lex || [])[i];
        if (!id || !PREF.test(id)) return h("span", { key: i, className: "az-bb-pal", lang: LANG, style: { cursor: "default" } }, p);
        return h("button", { key: i, className: "az-bb-pal", lang: LANG, onClick: function () { onPalabra({ id: id, forma: p }); } }, p);
      })),
      h("div", { className: "az-bb-pie" },
        h("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
          f.registro && h("span", { className: "az-bb-reg" }, TX.con + f.registro),
          h("button", { className: "az-bb-a", onClick: function () {
            azGuardarEnCuaderno(f.txt + "\n" + f.trad, { titulo: TX.fraseCu + f.txt, href: href });
          } }, TX.cuaderno)),
        h("a", { className: "az-bb-a", href: href, onClick: function (ev) { azNavigate(ev, href); } }, TX.dialogos)));
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
    return h("span", { className: "az-link", role: "button", tabIndex: 0, lang: LANG, onClick: go, onKeyDown: tecla(go) }, texto);
  }

  function AzFrase({ id, texto }) {
    const f = fraseDe(id);
    const go = function (ev) { ev.stopPropagation(); abrir("frase", { id: id }, ev.currentTarget); };
    return h("span", { className: "az-link az-frase", role: "button", tabIndex: 0, lang: LANG, onClick: go, onKeyDown: tecla(go) }, texto || (f ? f.txt : id));
  }

  /* Texto ruso con las palabras objetivo tocables */
  function AzTexto({ ru, es, lex, objetivo, sentidos }) {
    if (es != null && ru == null) ru = es;   /* Abecé: el texto en español */
    const partes = [];
    let k = 0, ult = 0, m;
    RX_PALABRA.lastIndex = 0;
    while ((m = RX_PALABRA.exec(ru || ""))) {
      if (m.index > ult) partes.push(ru.slice(ult, m.index));
      const id = (lex || [])[k];
      const enlazar = id && PREF.test(id) && (!objetivo || objetivo.indexOf(id) >= 0);
      partes.push(enlazar ? h(AzPalabra, { key: m.index, texto: m[0], id: id, sentido: sentidos ? sentidos[id] : undefined }) : m[0]);
      ult = m.index + m[0].length; k++;
    }
    if (ult < (ru || "").length) partes.push(ru.slice(ult));
    return h("span", { lang: LANG }, partes);
  }

  window.azAbrirBurbuja = abrir;
  window.AzBurbujaHost = AzBurbujaHost;
  window.AzPalabra = AzPalabra;
  window.AzFrase = AzFrase;
  window.AzTexto = AzTexto;
})();
